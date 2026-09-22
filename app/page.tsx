import Link from 'next/link'
import { models } from './designs'

export default function OverviewPage() {
  return (
    <main className="shell mx-auto max-w-3xl px-6 py-20 pb-40" id="main">
      <p className="text-sm text-[#5f5967]">Interne Studien, nicht veröffentlicht</p>
      <h1 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-[#1a1523] sm:text-4xl">
        Zehn Entwürfe für die WerkFlow-Seite
      </h1>
      <p className="mt-4 max-w-xl leading-relaxed text-[#5f5967]">
        Zwei Modelle haben je fünf vollständige Landingpages gebaut, unabhängig
        voneinander und mit demselben Ziel: ein Gespräch. Hier stehen sie
        nebeneinander. Unten können Sie jederzeit wechseln.
      </p>

      {models.map((model) => (
        <section className="mt-14" key={model.key}>
          <div className="flex items-baseline gap-3">
            <h2 className="text-xl font-semibold tracking-tight text-[#1a1523]">
              {model.name}
            </h2>
            <p className="text-sm text-[#5f5967]">{model.note}</p>
          </div>

          <ul className="mt-5 divide-y divide-[#e6e4ea] border-y border-[#e6e4ea]">
            {model.designs.map((design, index) => (
              <li key={design.slug}>
                <Link
                  href={`/${model.key}/${design.slug}`}
                  className="group flex items-start gap-5 py-5 outline-none focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ff7900]"
                >
                  <span
                    className="mt-1 h-11 w-14 flex-none rounded-md border border-[#e6e4ea]"
                    style={{ background: design.swatch }}
                    aria-hidden="true"
                  />
                  <span className="min-w-0">
                    <span className="block font-semibold text-[#1a1523] group-hover:text-[#984200]">
                      <span className="mr-2 font-normal tabular-nums text-[#5f5967]">
                        {index + 1}
                      </span>
                      {design.name}
                    </span>
                    <span className="mt-1 block text-sm leading-relaxed text-[#5f5967]">
                      {design.idea}
                    </span>
                    <span className="mt-1 block text-xs tabular-nums text-[#948ab3]">
                      /{model.key}/{design.slug}
                    </span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      ))}

      <div className="mt-14 border-l-2 border-[#ff7900] pl-5 text-sm leading-relaxed text-[#5f5967]">
        <p>
          Alle Seiten sind Entwürfe. Sie nennen keinen Preis, keine Garantie, keine
          Testphase, keinen Kunden und keine App-Store-Links, weil dazu nichts
          entschieden oder freigegeben ist. Die Formulare senden nichts.
        </p>
        <p className="mt-3">
          Der Quellcode liegt getrennt nach Modell in{' '}
          <span className="text-[#1a1523]">astra/</span> und{' '}
          <span className="text-[#1a1523]">opus/</span>.
        </p>
      </div>
    </main>
  )
}
