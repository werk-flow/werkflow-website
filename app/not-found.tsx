import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="shell mx-auto max-w-xl px-6 py-24" id="main">
      <h1 className="text-2xl font-semibold tracking-tight text-[#1a1523]">
        Diese Seite gibt es nicht
      </h1>
      <p className="mt-3 text-[#5f5967]">
        Die Entwürfe liegen unter /astra/one bis /astra/five und /opus/one bis
        /opus/five.
      </p>
      <Link
        href="/"
        className="mt-6 inline-flex min-h-11 items-center rounded-md bg-[#ff7900] px-5 font-semibold text-[#1a1523]"
      >
        Alle Entwürfe ansehen
      </Link>
    </main>
  )
}
