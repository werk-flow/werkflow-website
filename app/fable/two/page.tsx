import type { Metadata } from 'next'
import Design from '@/fable/designs/two'
import { designTitle } from '@/app/designs'

export const metadata: Metadata = { title: designTitle('fable', 'two') }

export default function Page() {
  return <Design />
}
