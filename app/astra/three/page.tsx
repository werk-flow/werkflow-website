import type { Metadata } from 'next'
import Design from '@/astra/designs/three'
import { designTitle } from '@/app/designs'

export const metadata: Metadata = { title: designTitle('astra', 'three') }

export default function Page() {
  return <Design />
}
