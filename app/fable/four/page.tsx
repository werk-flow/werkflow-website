import type { Metadata } from 'next'
import Design from '@/fable/designs/four'
import { designTitle } from '@/app/designs'

export const metadata: Metadata = { title: designTitle('fable', 'four') }

export default function Page() {
  return <Design />
}
