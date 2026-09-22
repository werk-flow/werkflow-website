import type { ReactNode } from 'react'
import { Instrument_Sans } from 'next/font/google'
import '@/opus/designs/five.css'

const sans = Instrument_Sans({
  subsets: ['latin'],
  variable: '--font-d5',
  display: 'swap',
})

/**
 * This study is a client component, so its font and stylesheet are loaded here
 * and the `.d5` scope wraps it from the route.
 */
export default function OpusFiveLayout({ children }: { children: ReactNode }) {
  return <div className={`d5 ${sans.variable}`}>{children}</div>
}
