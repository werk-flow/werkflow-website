import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { GlobalNav } from './components/global-nav'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: 'WerkFlow — Entwürfe',
    template: '%s',
  },
  description:
    'Zehn Landingpage-Entwürfe für WerkFlow, je fünf von Astra und von Opus. Interne Studien, keine veröffentlichte Seite.',
  icons: { icon: '/favicon.svg' },
  robots: { index: false, follow: false },
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="de">
      <body>
        <a className="skip-link" href="#main">
          Zum Inhalt
        </a>
        {children}
        <GlobalNav />
      </body>
    </html>
  )
}
