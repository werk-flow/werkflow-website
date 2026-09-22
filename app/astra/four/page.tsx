import type { Metadata } from 'next'
import Design from '@/astra/designs/four'
import { designTitle } from '@/app/designs'

export const metadata: Metadata = { title: designTitle('astra', 'four') }

export default function Page() {
  return <Design />
}
