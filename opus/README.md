# Opus landing-page studies

Status: living — last reviewed 2026-09-22

Five independent landing-page designs for WerkFlow. This directory holds their page code
and stylesheets; the application that serves them lives at the repository root, together
with the five astra designs. They were written without reading the astra directory, so
the two sets are independent proposals.

Nothing here is published. The pages are drafts for review.

## Run it

From the repository root:

```bash
bun install
bun run dev
```

The five pages are `/opus/one` through `/opus/five`, and `/opus` redirects to the first.
The switcher at the bottom of every page moves between all ten designs; `/` lists them.

| Command | What it does |
| --- | --- |
| `bun run dev` | Development server |
| `bun run build` | Production build |
| `bun run lint` | ESLint with the Next.js flat config |
| `bun run typecheck` | `tsc --noEmit` |

Stop the dev server before running `bun run build`; both write to `.next`.

## The five studies

| Route | Name | What it leads with |
| --- | --- | --- |
| [/opus/one](designs/one.tsx) | Feierabend | The trade's own paperwork as objects, answered by one clean record |
| [/opus/two](designs/two.tsx) | Plantafel | A working week on a planning board, with one orange line on today |
| [/opus/three](designs/three.tsx) | Technische Zeichnung | One job drawn as a schematic, with a parts list and a title block |
| [/opus/four](designs/four.tsx) | Morgens um sechs | The owner's day from 05:40 to 21:15, in one column |
| [/opus/five](designs/five.tsx) | Ein Dienstag | The product itself, seen as Chef, Büro or Monteur |

The reasoning behind each — palette, typefaces, layout, and the review against generic
defaults — is in [docs/design-plan.md](docs/design-plan.md).

## How the code is arranged

```
designs/
  one.tsx  … five.tsx    one study each, rendered by the matching route under app/opus
  one.css  … five.css    that study's stylesheet, scoped to .d1 … .d5
docs/design-plan.md      palette, typefaces, layout, and the pass against generic defaults
```

Each study owns a plain CSS file whose every rule is scoped to `.d1` … `.d5`, so the
five cannot affect each other, none can reach the astra pages, and each can set its own
type scale, radius, and density. Tailwind is present at the root for the overview page
and the preflight reset; the studies themselves are hand-written CSS because their type
and layout differ too much for a shared utility vocabulary to help.

Fonts load through `next/font/google`. Variable families are declared without a `weight`
array — Turbopack fails to resolve a variable font that is given several weights. Study
five is a client component, so its font and stylesheet load from
`app/opus/five/layout.tsx` instead of from the study file.

## What the copy may and may not say

Every page follows [the website scope](../docs/scope.md) and the business
[offer](../../werkflow-business/docs/offer.md) and
[copy standard](../../werkflow-business/docs/copy-standard.md):

- No price, no trial, no guarantee, no app-store link, and no current AI feature.
- No customer name, logo, testimonial, or customer count. The beta relationship needs
  permission before it appears in public copy, so no study mentions it.
- No invented deadline, slot count, or hours-saved figure.
- Planned scope is labelled `geplant`. Every page states that WerkFlow is not yet openly
  for sale, which follows the founders' recorded launch condition.
- The forms are previews. They post nowhere and store nothing, and each one says so.

The German is written for the fifth-grade ceiling in the copy standard, but **no
measured readability review has been run**: no German scoring tool is selected in this
workspace. Treat the copy as a draft awaiting that review.

## Brand

Colour and pairing rules come from
[the app's styling rules](../../werkflow-app/AGENTS.md) and its `app/globals.css`:
orange `#ff7900` is the only attention colour, purple stays a soft undertone outside the
logo SVGs, status colours stay semantic, and orange and purple never sit on each other.
Each study is free in ground, radius, density, and type, because a marketing page may be
more expressive than the product UI.

## Verified

- `bun run build`, `bun run lint`, and `bun run typecheck` pass.
- Each study was reviewed in a browser at roughly 1440px, at 800px, and at 375px, both
  as its own app and after the move into the root application. No page scrolls sideways
  at 375px.
- Keyboard focus is visible on every interactive element, motion is limited to one load
  moment in study 1 and one click response in study 5, and both are disabled under
  `prefers-reduced-motion`.

Not verified: real-device testing, screen-reader passes, automated contrast auditing,
and German readability scoring.
