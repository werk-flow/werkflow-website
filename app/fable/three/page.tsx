import type { Metadata } from 'next'
import Design from '@/fable/designs/three'
import { designTitle } from '@/app/designs'

export const metadata: Metadata = { title: designTitle('fable', 'three') }

export default function Page() {
  return <Design />
}
