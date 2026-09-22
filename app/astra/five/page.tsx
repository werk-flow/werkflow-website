import type { Metadata } from 'next'
import Design from '@/astra/designs/five'
import { designTitle } from '@/app/designs'

export const metadata: Metadata = { title: designTitle('astra', 'five') }

export default function Page() {
  return <Design />
}
