import { Providers } from './providers'
import './globals.css'

export const metadata = {
  metadataBase: new URL('https://ibrahimadeyemo.com'),
  title: 'Ibraheem Adeyemo | Full-Stack Engineer',
  description:
    'Ibraheem Adeyemo — Senior Full-Stack Engineer specialising in React, Node.js, TypeScript, and fintech SaaS. Available for freelance and full-time opportunities.',
  manifest: '/manifest.json',
  icons: {
    icon: '/favicon.ico',
    apple: '/logo192.png',
  },
  openGraph: {
    type: 'website',
    title: 'Ibraheem Adeyemo | Full-Stack Engineer',
    description:
      'Senior Full-Stack Engineer specialising in React, Node.js, TypeScript, and fintech SaaS. Available for freelance and full-time opportunities.',
    images: ['/images/profile-pic.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ibraheem Adeyemo | Full-Stack Engineer',
    description:
      'Senior Full-Stack Engineer specialising in React, Node.js, TypeScript, and fintech SaaS.',
    images: ['/images/profile-pic.png'],
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Ibraheem Adeyemo',
  jobTitle: 'Senior Full-Stack Engineer',
  description:
    'Senior Full-Stack Engineer specialising in React, Node.js, TypeScript, and fintech SaaS. Available for freelance and full-time opportunities.',
  email: 'aderemiibrahim11@gmail.com',
  url: 'https://ibrahimadeyemo.com',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Lagos',
    addressCountry: 'Nigeria',
  },
  sameAs: [
    'https://github.com/ibraheem-adeyemo',
    'https://www.linkedin.com/in/ibraheem-adeyemo-baa05116a',
    'https://twitter.com/ibraheemadeyemo',
    'https://www.instagram.com/ibraheem_adeyemo',
  ],
  knowsAbout: [
    'React',
    'Node.js',
    'Express',
    'TypeScript',
    'PostgreSQL',
    'Docker',
    'Next.js',
    'Redux',
    'REST APIs',
    'SaaS Architecture',
  ],
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
