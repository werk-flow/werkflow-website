import type { Metadata } from 'next'
import Design from '@/opus/designs/three'
import { designTitle } from '@/app/designs'

export const metadata: Metadata = { title: designTitle('opus', 'three') }

export default function Page() {
  return <Design />
}
