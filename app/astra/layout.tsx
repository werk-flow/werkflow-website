import type { ReactNode } from 'react'
import '@fontsource/manrope/latin-400.css'
import '@fontsource/manrope/latin-500.css'
import '@fontsource/manrope/latin-600.css'
import '@fontsource/manrope/latin-700.css'
import '@fontsource/manrope/latin-800.css'
import '@fontsource/barlow-condensed/latin-600.css'
import '@/astra/astra.css'

/**
 * Every astra rule is scoped to this wrapper, so the set keeps its own reset,
 * type and colour without reaching the shell or the opus pages.
 */
export default function AstraLayout({ children }: { children: ReactNode }) {
  return <div className="astra">{children}</div>
}
