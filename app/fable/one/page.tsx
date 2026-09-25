import type { Metadata } from 'next'
import Design from '@/fable/designs/one'
import { designTitle } from '@/app/designs'

export const metadata: Metadata = { title: designTitle('fable', 'one') }

export default function Page() {
  return <Design />
}
