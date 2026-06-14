# Paytelstack

> A production-grade fintech SaaS platform for automated airtime & data reselling — built with Node.js, TypeScript, PostgreSQL, Docker, and live payment gateway integrations.

**Live:** [staging.paytelstack.com](https://staging.paytelstack.com)

---

## Table of Contents

- [Overview](#overview)
- [Key Features](#key-features)
- [Tech Stack](#tech-stack)
- [Architecture](#architecture)
- [Database Design](#database-design)
- [Payment Integration](#payment-integration)
- [Security](#security)
- [CI/CD Pipeline](#cicd-pipeline)
- [Infrastructure](#infrastructure)
- [Testing](#testing)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [Deployment](#deployment)
- [Author](#author)

---

## Overview

Paytelstack is a full-featured fintech SaaS platform that enables resellers to automate the sale of airtime and mobile data across multiple Nigerian network providers. The platform handles end-to-end transaction processing — from customer-facing purchase flows through to live payment gateway integrations, real-time fulfillment, and automated reconciliation.

Built entirely from scratch as a solo technical founder, the platform was designed for production from day one: normalized relational database, stateless JWT-authenticated API, multi-provider payment processing, containerized deployment, automated CI/CD, and comprehensive test coverage.

---

## Key Features

### Reseller & Transaction Management
- Multi-tier reseller account system with role-based access control (admin, reseller, sub-reseller)
- Automated airtime and data vending across major Nigerian networks (MTN, Airtel, Glo, 9mobile)
- Real-time transaction processing with idempotency guarantees and status tracking
- Wallet funding, balance management, and low-balance alerts

### Payment Processing
- Live integration with **Paystack** and **Flutterwave** for wallet funding
- Webhook-driven event handling with signature verification to prevent spoofed callbacks
- Automatic reconciliation between gateway records and internal ledger
- Support for card payments, bank transfers, and USSD

### Admin & Reporting
- Comprehensive admin dashboard for platform-wide transaction visibility
- User management: account approval, suspension, and audit trails
- Revenue and commission reporting with date-range filtering
- System health monitoring and production logging

### Developer-Friendly API
- RESTful API with consistent response envelopes and structured error codes
- Rate limiting per endpoint to prevent abuse
- Request validation middleware for all input surfaces
- API versioning for backward-compatible evolution

---

## Tech Stack

| Layer | Technology |
|---|---|
| **Runtime** | Node.js 20 |
| **Language** | TypeScript |
| **Framework** | Express.js |
| **Database** | PostgreSQL 15 |
| **ORM** | Prisma |
| **Authentication** | JWT (access + refresh token rotation) |
| **Payment Gateways** | Paystack, Flutterwave |
| **Containerisation** | Docker (multi-stage builds) |
| **Reverse Proxy** | NGINX |
| **CI/CD** | GitHub Actions |
| **Testing** | Jest + Supertest |
| **Process Management** | Docker Compose |

---

## Architecture

Paytelstack follows a layered, service-oriented architecture within a monolithic Node.js process — giving clean separation of concerns while keeping operational complexity low for a solo-operated platform.

```
┌────────────────────────────────────────────────────────┐
│                        Client                          │
│              (Web App / Mobile / API Consumer)         │
└──────────────────────┬─────────────────────────────────┘
                       │ HTTPS
┌──────────────────────▼─────────────────────────────────┐
│                      NGINX                             │
│         (Reverse Proxy + SSL Termination)              │
└──────────────────────┬─────────────────────────────────┘
                       │
┌──────────────────────▼─────────────────────────────────┐
│               Express.js Application                   │
│  ┌────────────┐  ┌───────────┐  ┌────────────────────┐ │
│  │   Routes   │→ │Middleware │→ │    Controllers      │ │
│  └────────────┘  └───────────┘  └────────┬───────────┘ │
│                                          │             │
│  ┌───────────────────────────────────────▼───────────┐ │
│  │                   Services Layer                  │ │
│  │  Auth │ Wallet │ Transaction │ VendService │ Webhook│ │
│  └───────────────────────────────────────┬───────────┘ │
│                                          │             │
│  ┌───────────────────────────────────────▼───────────┐ │
│  │               Prisma ORM / Repository             │ │
│  └───────────────────────────────────────────────────┘ │
└──────────────────────┬─────────────────────────────────┘
                       │
┌──────────────────────▼─────────────────────────────────┐
│                  PostgreSQL Database                    │
└────────────────────────────────────────────────────────┘
                       ▲
      ┌────────────────┘
      │  Webhooks (async)
┌─────┴──────────────────────────────────────────────────┐
│              Paystack  /  Flutterwave                  │
└────────────────────────────────────────────────────────┘
```

### Key Architectural Decisions

**Stateless API via JWT** — Every request is authenticated via short-lived access tokens with a refresh-token rotation strategy, making horizontal scaling straightforward with no server-side session store.

**Transaction-safe operations** — All wallet debit/credit and vending operations run inside Prisma `$transaction` blocks, ensuring atomicity. If any step in a vend flow fails, the entire operation rolls back and the user's balance is restored.

**Idempotency** — Transaction records carry a unique idempotency key, preventing duplicate processing if a client retries a timed-out request.

**Webhook-first reconciliation** — Payment gateway responses are not trusted inline. Funds are credited only after the corresponding webhook is received, verified by HMAC signature, and the event is idempotently processed.

---

## Database Design

The schema is designed in 3NF with careful attention to financial integrity.

### Core Tables

```
users
  id, email, phone, password_hash, role, wallet_balance,
  is_active, created_at, updated_at

wallets
  id, user_id (FK), balance, currency, created_at

transactions
  id, user_id (FK), type (FUND | DEBIT | REFUND),
  amount, status (PENDING | SUCCESS | FAILED),
  reference, idempotency_key, gateway, metadata,
  created_at

vend_orders
  id, user_id (FK), transaction_id (FK),
  network, phone_number, amount, data_plan,
  status (PENDING | SUCCESS | FAILED),
  provider_reference, created_at

payment_events
  id, gateway, event_type, reference,
  payload (JSONB), processed_at, created_at

refresh_tokens
  id, user_id (FK), token_hash, expires_at, revoked_at
```

### Design Decisions
- `wallet_balance` is stored in **integer kobo** to avoid floating-point precision issues in financial calculations
- `payment_events` stores the raw gateway payload for auditability and replay capability
- All foreign keys are constrained and indexed for query performance
- Soft deletes on users (`deleted_at`) to preserve referential integrity

---

## Payment Integration

### Paystack & Flutterwave

Both gateways are integrated through a unified `PaymentProvider` interface, allowing the platform to route transactions or fall back between providers without changing business logic.

#### Funding Flow
```
1. User initiates wallet funding → API creates a pending transaction
2. API calls gateway to generate a payment link / inline charge
3. User completes payment on gateway's hosted page or inline widget
4. Gateway fires a webhook POST to /webhooks/:gateway
5. Middleware verifies HMAC signature (rejects if invalid)
6. Service checks idempotency key — skips if already processed
7. Transaction is marked SUCCESS; wallet balance updated in same DB transaction
8. Confirmation event emitted to notification service
```

#### Webhook Signature Verification
```typescript
// Paystack example
const hash = crypto
  .createHmac('sha512', process.env.PAYSTACK_SECRET_KEY)
  .update(JSON.stringify(req.body))
  .digest('hex');

if (hash !== req.headers['x-paystack-signature']) {
  return res.status(401).json({ message: 'Invalid signature' });
}
```

#### Reconciliation
A scheduled reconciliation job queries both the internal `transactions` table and the payment gateway's transaction list for any given window, flagging discrepancies for manual review.

---

## Security

| Concern | Implementation |
|---|---|
| **Authentication** | JWT access tokens (15 min TTL) + refresh token rotation |
| **Authorisation** | Role-based middleware guards (admin, reseller, sub-reseller) |
| **Webhook integrity** | HMAC-SHA512 signature verification on all inbound gateway events |
| **Password storage** | bcrypt with configurable salt rounds |
| **Rate limiting** | Per-route rate limiting via `express-rate-limit` |
| **Input validation** | Schema validation on all request bodies using `zod` |
| **SQL injection** | Fully prevented by Prisma's parameterised queries |
| **Container security** | Non-root user in Docker image; read-only filesystem where possible |
| **Secrets management** | All credentials loaded from environment variables; no secrets in image layers |
| **HTTPS** | Enforced at NGINX layer; HTTP redirected to HTTPS |

---

## CI/CD Pipeline

The pipeline is defined in `.github/workflows/` and runs on every push to `main` and `staging`.

```
Push to main / staging
        │
        ▼
┌───────────────────┐
│   1. Lint & Type  │  tsc --noEmit + ESLint
└────────┬──────────┘
         │
         ▼
┌───────────────────┐
│   2. Unit Tests   │  jest --runInBand
└────────┬──────────┘
         │
         ▼
┌────────────────────┐
│ 3. Integration     │  jest with test DB
│    Tests           │  (Postgres service container)
└────────┬───────────┘
         │
         ▼
┌───────────────────┐
│ 4. Docker Build   │  Multi-stage build
│    & Push         │  → GitHub Container Registry
└────────┬──────────┘
         │
         ▼
┌───────────────────┐
│ 5. Deploy         │  SSH → server → docker compose pull
│                   │  → zero-downtime rolling restart
└───────────────────┘
```

### Key Pipeline Details
- Integration tests run against a real PostgreSQL 15 service container spun up by GitHub Actions
- Prisma migrations are applied automatically before the test suite runs
- The Docker image is only pushed if all test jobs pass
- Production deploys require a manual approval step in GitHub Environments

---

## Infrastructure

The production stack runs on a single VPS with Docker Compose orchestrating all services.

```yaml
services:
  api:        # Node.js application (non-root, health-checked)
  postgres:   # Managed PostgreSQL with volume persistence
  nginx:      # Reverse proxy + SSL via Let's Encrypt / Certbot
```

### NGINX Configuration Highlights
- SSL termination with auto-renewed Let's Encrypt certificates
- HTTP → HTTPS redirect
- Proxy buffering and timeout tuning for long-running webhook requests
- Rate limiting at the NGINX layer as a first line of defence

### Docker Image (Multi-stage)
```dockerfile
# Stage 1 — Build
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# Stage 2 — Production
FROM node:20-alpine AS production
RUN addgroup -S appgroup && adduser -S appuser -G appgroup
WORKDIR /app
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules
USER appuser
EXPOSE 3000
HEALTHCHECK CMD wget -qO- http://localhost:3000/health || exit 1
CMD ["node", "dist/server.js"]
```

---

## Testing

```bash
# Unit tests
npm run test:unit

# Integration tests (requires a running Postgres instance)
npm run test:integration

# Full suite
npm test

# Coverage report
npm run test:coverage
```

### Coverage Targets
- Business logic (wallet, transactions, vending): **>85% line coverage**
- Payment gateway adapters: integration tests with mocked HTTP calls
- Webhook handlers: tested with real payload fixtures from Paystack and Flutterwave

---

## Getting Started

### Prerequisites
- Node.js 20+
- PostgreSQL 15+
- Docker & Docker Compose (for containerised setup)

### Local Setup

```bash
# 1. Clone the repository
git clone https://github.com/ibraheem-adeyemo/paytelstack.git
cd paytelstack

# 2. Install dependencies
npm install

# 3. Copy environment file and fill in values
cp .env.example .env

# 4. Run database migrations
npx prisma migrate dev

# 5. Seed development data (optional)
npx prisma db seed

# 6. Start the development server
npm run dev
```

The API will be available at `http://localhost:3000`.

### Docker Setup

```bash
# Build and start all services
docker compose up --build

# Run migrations inside the running container
docker compose exec api npx prisma migrate deploy
```

---

## Environment Variables

```env
# Application
NODE_ENV=production
PORT=3000
API_VERSION=v1

# Database
DATABASE_URL=postgresql://user:password@localhost:5432/paytelstack

# Authentication
JWT_ACCESS_SECRET=your-access-secret
JWT_REFRESH_SECRET=your-refresh-secret
JWT_ACCESS_EXPIRES_IN=15m
JWT_REFRESH_EXPIRES_IN=7d

# Paystack
PAYSTACK_SECRET_KEY=sk_live_...
PAYSTACK_PUBLIC_KEY=pk_live_...
PAYSTACK_WEBHOOK_SECRET=your-webhook-secret

# Flutterwave
FLUTTERWAVE_SECRET_KEY=FLWSECK_...
FLUTTERWAVE_PUBLIC_KEY=FLWPUBK_...
FLUTTERWAVE_WEBHOOK_SECRET=your-webhook-secret

# Logging
LOG_LEVEL=info
```

---

## Deployment

```bash
# Pull the latest image and restart with zero downtime
docker compose pull api
docker compose up -d --no-deps api

# Apply any pending migrations
docker compose exec api npx prisma migrate deploy
```

A full production deploy is triggered automatically by the CI/CD pipeline on every merge to `main`.

---

## Author

**Ibrahim Adeyemo** — Lead Full-Stack Engineer & Founder

- Email: [aderemiibrahim11@gmail.com](mailto:aderemiibrahim11@gmail.com)
- GitHub: [@ibraheem-adeyemo](https://github.com/ibraheem-adeyemo)
- LinkedIn: [ibraheem-adeyemo](https://www.linkedin.com/in/ibraheem-adeyemo-baa05116a/)
- Portfolio: [ibrahimadeyemo.com](https://ibrahimadeyemo.com)

---

*Built with care for reliability, security, and production-readiness.*
