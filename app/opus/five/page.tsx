import type { Metadata } from 'next'
import Design from '@/opus/designs/five'
import { designTitle } from '@/app/designs'

export const metadata: Metadata = { title: designTitle('opus', 'five') }

export default function Page() {
  return <Design />
}
