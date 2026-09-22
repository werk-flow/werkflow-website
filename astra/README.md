# Astra landing-page designs

Status: draft — last reviewed 2026-09-22

Five independent landing-page compositions for WerkFlow. This directory holds their page code, components, and stylesheet; the application that serves them lives at the repository root, together with the five opus designs.

## Run and compare

From the repository root:

```bash
bun install
bun run dev
```

The five pages are `/astra/one` through `/astra/five`, and `/astra` redirects to the first. The switcher at the bottom of every page moves between all ten designs; `/` lists them.

## What lives where

| Path | Holds |
| --- | --- |
| `designs/one.tsx` … `designs/five.tsx` | One composition each, rendered by the matching route under `app/astra` |
| `components/` | Shared header, footer, product views, and the workflow explorer |
| `astra.css` | The whole stylesheet, every rule scoped to the `.astra` wrapper |
| `../public/astra/` | Images that belong to these pages |

Every selector is scoped to `.astra`, which `app/astra/layout.tsx` renders, so these pages keep their own reset, type, and colour without reaching the shell or the opus pages. The design-token custom properties ride on that same wrapper. The former per-design switcher was replaced by the shared one.

| Route | Direction | Main design choice |
| --- | --- | --- |
| `/astra/one` | Überblick | Light product overview, Manrope, and a workday board |
| `/astra/two` | Werkstatt | Workshop photography, charcoal, and Barlow Condensed |
| `/astra/three` | Arbeitsfluss | Oversized Barlow Condensed and a job-to-phone handoff |
| `/astra/four` | Miteinander | People and supported adoption, Georgia with Manrope, an arched photograph |
| `/astra/five` | Fokus | Campaign sequence with a dark hero and an inline enquiry preview |

The compositions keep the same offer foundations so visual emphasis can be compared. They have distinct hero structures, section treatments, typography, and content order.

## Design decisions

The [frontend-design skill](../.claude/skills/frontend-design/SKILL.md) guided the work. The main palette is paper `#fafafb`, white `#ffffff`, ink `#1a1523`, soft purple `#f1eff5`, muted purple `#6f5f94`, and functional orange `#ff7900`. The workshop and campaign pages add charcoal surfaces. Orange identifies the next action; semantic green identifies completed example work.

Each page uses one main visual idea: the workday board, the workshop scene, the job handoff, the people behind adoption, or the campaign walkthrough. Body content is left aligned; centered sections are reserved for the invitation and people-focused story. The customer language stays German; source identifiers and documentation stay English.

The business library's [value equation](../../werkflow-business/docs/library/frameworks/value-and-offer.md) informs the emphasis on reducing migration and learning effort. The [proof and copy framework](../../werkflow-business/docs/library/frameworks/proof-copy-sales.md) informs the concrete workflow examples. These are design hypotheses, not evidence of conversion performance. A product-led version could outperform service-led framing if buyers value immediate product clarity more than switching support. Customer conversations and an authorized comparison would test that.

## Source revisions and preview boundaries

- Website foundation: `892230eec0996a3a59a4fe5081528ccdc123e8fa`.
- Business: `bc9db2d750fdb14b526415730a74e45f7af347ea`; HEAD and saved origin/main match. Read-only remote checks confirmed both business and website main revisions on 2026-09-22.
- App: saved origin/main `52803322d588a6b3dffc70775775fd7624957305`, for theme, job, and time-tracking references. The active app working tree was left untouched. Its unpublished changes are not release evidence.
- Canonical business sources: [avatar](../../werkflow-business/docs/avatar.md), [offer](../../werkflow-business/docs/offer.md), [acquisition](../../werkflow-business/docs/acquisition.md), and [copy standard](../../werkflow-business/docs/copy-standard.md).

All pages are marked as design previews and have noindex metadata. All names, addresses, job records, and dashboard counts are fictional. The mobile card is a design study, not a native-store availability claim. The workshop image was generated for this design and is labeled as illustrative; it does not depict customers or founders. Logo assets come from the app's public brand assets. Font files are served locally from Fontsource dependencies; no Google Fonts request is needed at runtime.

There are no prices, savings figures, endorsements, guarantees, or launch dates on these pages. Planned service scope is qualified. German copy received a separate plain-language pass for short sentences, common words, clear actions, and preserved conditions. It remains a draft awaiting the required independent readability review; no numerical grade is claimed.

## Working interactions

- Design switching, responsive navigation, section links, and FAQ disclosures.
- Today/tomorrow selection and expanded fictional job details.
- A three-step walkthrough in a native modal with Escape support.
- Keyboard-operable workflow tabs on `/three`.
- Required-field and email validation in the enquiry preview; completion explicitly says nothing was sent or stored.

The forms are local simulations. No API, database, email, analytics, booking service, or real VSL is connected. The walkthrough replaces an unavailable video for this design review. Public legal pages and final commercial copy are still required before launch.

## Checks and future hosting

```bash
bun run lint
bun run typecheck
bun run build
```

Run them from the repository root; there is no separate application here any more.

Local browser review covers desktop and mobile compositions, routing, navigation, dialogs, forms, and console errors. Screenshots are local review artifacts under ignored `artifacts/`.

Verified on 2026-09-22: production build, lint, and TypeScript passed. All named routes and numeric aliases returned 200 after redirects. Browser checks passed at 1440px desktop, 390px phone, and 320px narrow phone widths with no horizontal overflow. Verified design switching, mobile navigation, dialog focus/Escape, three-step walkthrough, FAQ disclosure, today/tomorrow selection, job expansion, keyboard workflow tabs, and local form validation/completion. No browser errors or external form requests were observed.

Hosting is configured once, for the root application, and is described in the [repository README](../README.md). No domain, form activation, or live service is connected by this implementation.
