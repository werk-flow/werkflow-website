import type { Metadata } from 'next'
import Design from '@/opus/designs/one'
import { designTitle } from '@/app/designs'

export const metadata: Metadata = { title: designTitle('opus', 'one') }

export default function Page() {
  return <Design />
}
