import type { Metadata } from 'next'
import Design from '@/fable/designs/five'
import { designTitle } from '@/app/designs'

export const metadata: Metadata = { title: designTitle('fable', 'five') }

export default function Page() {
  return <Design />
}
