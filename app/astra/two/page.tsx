import type { Metadata } from 'next'
import Design from '@/astra/designs/two'
import { designTitle } from '@/app/designs'

export const metadata: Metadata = { title: designTitle('astra', 'two') }

export default function Page() {
  return <Design />
}
