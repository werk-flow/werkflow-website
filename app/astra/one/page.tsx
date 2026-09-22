import type { Metadata } from 'next'
import Design from '@/astra/designs/one'
import { designTitle } from '@/app/designs'

export const metadata: Metadata = { title: designTitle('astra', 'one') }

export default function Page() {
  return <Design />
}
