import type { Metadata } from 'next'
import Design from '@/opus/designs/four'
import { designTitle } from '@/app/designs'

export const metadata: Metadata = { title: designTitle('opus', 'four') }

export default function Page() {
  return <Design />
}
