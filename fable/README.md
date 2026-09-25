# Fable design studies

Status: living — last reviewed 2026-09-25

Five landing-page designs for WerkFlow, built by Fable without reading the astra or opus directories. They answer the same brief as the other sets: one page per design, German copy for SHK business owners, one action, a local form that sends nothing. The root application serves them at `/fable/one` to `/fable/five`; `/fable` opens the first, and the shared overview and switcher list them beside the other two sets.

## Layout

| Path | Owns |
| --- | --- |
| `designs/one.tsx` … `five.tsx` and their `.css` | One design each. Every stylesheet is scoped under `.f1` to `.f5`, so no design can style another. |
| `designs/five-demo.tsx` | The click-through in the fifth design; the only client component besides the form and the switcher. |
| `designs.ts` | Name, one-line idea, and swatch of each design; `app/designs.ts` reads it for the overview and the switcher. |
| `facts.ts` | The claims every page may make: what the product does today, what it does not yet do, and the planned start. Change a claim here, and all five pages follow. |
| `shared/lead-form.tsx` | The form's markup and local validation. Each design styles the `.lead*` hooks in its own scope. |
| `shared/video-slot.tsx` | The frame for the video sales letter. No video exists, and the frame says so. |
| `../app/fable/` | The thin routes, one per design. |

Fonts load through `next/font/google` at build time. Shared brand files (`/logo-text-light.svg`, `/logo-text-dark.svg`) come from `public`; the set has no assets of its own.

## The five designs

Each design spends its boldness in one place and keeps the rest quiet. Orange `#ff7900` is the only action colour on every page; purple stays the soft undertone the app's brand rules require.

| Route | Name | The one memorable thing | Type |
| --- | --- | --- | --- |
| `/fable/one` | Fragen | Eight questions an owner asks every day, set very large, each answered by a compact rendering of the program: board, request, job list, evidence, time, stock, maintenance, documents. | Bricolage Grotesque, one family, optical size and width axes |
| `/fable/two` | Regal | The business as a stock shelf on a deep purple-slate ground: labelled bins with example contents in the hero, the product sorted onto three shelves below. | Archivo, one family, width axis: condensed labels, wide title |
| `/fable/three` | Video | The campaign page as the scope describes it: video frame on a purple ground, sticky form beside it, a simulated booking step after the form, FAQ below. | Atkinson Hyperlegible, chosen for legibility |
| `/fable/four` | Antwortkarte | A printed trade handout: cover with contents, three folded panels, and a reply card with a perforated edge as the form. | Schibsted Grotesk headings, Source Serif 4 body |
| `/fable/five` | Anfrage | A working click-through: a phone call becomes a job, lands on the board, reaches the field worker's phone, and comes back as a checked handover. | Onest, one family |

## Claim boundaries

Every statement about the product comes from `facts.ts`, whose sources are the app's AGENTS.md and the Phase 1 roadmap: Waves 0 to 2 are accepted and the production release of 2026-09-18 carries them. The planned start comes from the business offer document and is labelled as planned on every page. No page names a price, a guarantee, a trial, a launch date, a customer, an app-store link, or an AI feature.

Two claims deserve a check before any page goes public:

- "Läuft im Browser, auch auf dem Handy." The field work pack is built for the phone, but no page here was tested against the real app on a phone.
- The example data (names, addresses, job numbers, counts) is invented to look like a real week. It is not customer data.

The copy is written for the fifth-grade ceiling in the [copy standard](../../werkflow-business/docs/copy-standard.md): short sentences, one idea each, familiar words. No German readability tool has been selected, so the copy remains a draft awaiting readability review.

## Checks

From the repository root, `bun run lint`, `bun run typecheck`, and `bun run build` cover the set. Review each route on desktop and at phone width, including the shared switcher, the form's validation and confirmation, the booking step on the third design, the collapsible questions on the third, and the click-through on the fifth.
