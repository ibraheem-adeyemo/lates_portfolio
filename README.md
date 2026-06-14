# Ibrahim Adeyemo — Portfolio

A personal portfolio website for Ibrahim Adeyemo, a Senior Full-Stack Engineer based in Lagos, Nigeria. Built with React 19, Chakra UI, and Framer Motion.

**Live:** [ibrahimadeyemo.com](https://ibrahimadeyemo.com)

---

## Overview

The site is a single-page application with two routes:

| Route | Description |
|---|---|
| `/` | Main portfolio — all sections stacked vertically with scroll-triggered animations |
| `/profile` | Detailed profile page — contact info and skill progress bars |

---

## Sections

The home page renders each section inside an `AnimatedSection` wrapper that uses Framer Motion's `useInView` to fade and slide content in as it enters the viewport.

### 1. Hero
Introduces Ibrahim by name. Includes a `TypingText` component that cycles through role descriptions character-by-character with a blinking cursor.

Two CTAs:
- **Hire Me** — smooth-scrolls to the Contact section
- **Book a Meeting** — opens Calendly in a new tab

### 2. About Me
Bio section with a profile photo and a written overview of technical expertise across frontend, backend, state management, DevOps, and open source.

### 3. Where Have Worked
Interactive work experience timeline powered by Redux. A list of companies on the left (horizontal scroll on mobile, vertical on desktop) — clicking a company animates in the full experience detail on the right using Framer Motion's `AnimatePresence`.

Companies covered: Paytelstack, Interswitch (×2), Supermart Express, Sadjawebsolutions, Andela StackUp Program.

### 4. Portfolio Gallery
Project showcase with alternating left/right card layout. Each project has:
- Cover image with a hover overlay revealing **Live Demo** and **View Gallery** buttons
- A modal carousel that opens full-size screenshots with prev/next navigation

Projects: Paytelstack, Fraud Management (Interswitch), Supermart Express, PaaS (Interswitch), Payment Control UI.

### 5. Download CV
Full-width CTA banner with a gradient background. Clicking **Download My CV** downloads `/IBRAHEEM-ADEYEMO-dp.pdf` directly from the public folder.

### 6. CTA with Illustration
Secondary call-to-action with an inline SVG illustration rendered as a Chakra UI `Icon`.

### 7. Contact
Contact form that posts to [formsubmit.co](https://formsubmit.co) — no backend needed. Includes social media links (GitHub, LinkedIn, Twitter) and a clipboard copy button for the email address.

---

## Layout

```
┌─────────────────────────────────────────────────────┐
│  Fixed Sidebar (lg+)      │  Main Content           │
│  ──────────────────────   │                         │
│  Profile avatar           │  [Contact Info Bar]     │
│  Nav: Home / About /      │  top-right, fixed       │
│       Resume / Portfolio  │  (hamburger on mobile)  │
│       / Contact           │                         │
│  Social: LinkedIn /       │  Sections 1–7           │
│          Twitter /        │  (AnimatedSection)      │
│          Instagram        │                         │
│                           │  Footer                 │
└─────────────────────────────────────────────────────┘
```

- **Sidebar** — hidden on mobile/tablet (`base`→`md`), visible from `lg`. Highlights the active section in orange as the user scrolls, tracked via a `scroll` event listener.
- **Contact Info Bar** — fixed top-right. On desktop it is always visible with phone, email, and WhatsApp links. On mobile it collapses behind a `☰` toggle button and expands with a Chakra `Collapse` animation.
- **Footer** — offset by the sidebar width on desktop, full-width on mobile.

---

## Tech Stack

| | |
|---|---|
| **Framework** | React 19 (Create React App) |
| **UI Library** | Chakra UI v2 |
| **Animations** | Framer Motion v12 |
| **State** | Redux Toolkit v2 + React Redux |
| **Routing** | React Router DOM v7 |
| **Utility CSS** | Tailwind CSS v3 |
| **Icons** | react-icons v5 |
| **Form** | formsubmit.co (no backend) |
| **Meeting booking** | Calendly (external link) |

---

## Project Structure

```
src/
├── components/
│   ├── about/
│   │   ├── About.jsx           # Bio section
│   │   └── Profile.jsx         # /profile page content
│   ├── contact/
│   │   └── Contact.jsx         # Contact form + social links
│   ├── DownloadCV/
│   │   └── DownloadCV.jsx      # CV download CTA banner
│   ├── footer/
│   │   └── Footer.jsx
│   ├── gallery/
│   │   ├── Gallery.jsx         # Project cards + screenshot modal
│   │   └── Carousel.jsx
│   ├── Hero/
│   │   └── Hero.jsx            # CTA with SVG illustration
│   ├── Home/
│   │   └── Home.jsx            # Landing hero + TypingText
│   ├── nav-bar/
│   │   └── NavBar.jsx          # Contact info bar (mobile toggle)
│   ├── sidebar/
│   │   └── Sidebar.jsx         # Fixed sidebar nav
│   └── where_have_worked/
│       └── WhereHaveWorked.jsx # Work experience timeline
├── constants/
│   └── imageLink.js            # Image paths + project gallery arrays
├── layout/
│   └── Layout.jsx              # Sidebar + content shell
├── pages/
│   ├── Home.jsx                # Route "/" with AnimatedSection wrappers
│   └── Profile.jsx             # Route "/profile"
├── reusables/
│   └── ScrollText.jsx          # TypingText component
├── store/
│   ├── dummy.js                # Work experience + about data
│   ├── store.js
│   └── storeSlice.js
└── theme/
    ├── color.js
    └── index.js                # Chakra UI theme overrides (brand colours)
```

---

## Getting Started

### Prerequisites
- Node.js 18+
- npm

### Install & run

```bash
git clone https://github.com/ibraheem-adeyemo/lates_portfolio.git
cd lates_portfolio
npm install
npm start
```

Opens at `http://localhost:3000`.

### Build for production

```bash
npm run build
```

Output goes to `build/` — a static site ready to deploy anywhere (Netlify, Vercel, GitHub Pages, etc.).

---

## Customisation

### Contact form email
In [src/components/contact/Contact.jsx](src/components/contact/Contact.jsx), change the `action` URL:
```html
<form action="https://formsubmit.co/your@email.com" method="POST">
```

### CV file
Replace `public/IBRAHEEM-ADEYEMO-dp.pdf` with your own file and update the filename in [DownloadCV.jsx](src/components/DownloadCV/DownloadCV.jsx).

### Work experience
Edit the `experiences` array in [src/store/dummy.js](src/store/dummy.js). Each entry takes:
```js
{
  companyName, position, startDate, endDate,
  deliverables: [],   // bullet points
  technologies: []    // tag list
}
```

### Portfolio projects
Add entries to the `projects` array in [Gallery.jsx](src/components/gallery/Gallery.jsx) and the matching screenshot array in `projectGallery` in [imageLink.js](src/constants/imageLink.js).

---

## SEO

`public/index.html` includes:
- `<title>` and `<meta name="description">`
- Open Graph tags (`og:title`, `og:description`, `og:image`, `og:url`)
- Twitter Card tags
- JSON-LD `Person` schema (name, jobTitle, email, address, sameAs, knowsAbout)

---

## Author

**Ibrahim Adeyemo** — Senior Full-Stack Engineer

- Email: [aderemiibrahim11@gmail.com](mailto:aderemiibrahim11@gmail.com)
- GitHub: [@ibraheem-adeyemo](https://github.com/ibraheem-adeyemo)
- LinkedIn: [ibraheem-adeyemo](https://www.linkedin.com/in/ibraheem-adeyemo-baa05116a/)
- Portfolio: [ibrahimadeyemo.com](https://ibrahimadeyemo.com)
