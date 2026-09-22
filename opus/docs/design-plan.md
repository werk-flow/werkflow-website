# Opus landing-page design plan

Status: living — last reviewed 2026-09-22

Five independent landing-page studies for WerkFlow, written without reading any other
model experiment in this repository. Each study is a complete page at its own route.

## Shared brief

- **Product:** operations software for German SHK businesses (Sanitär, Heizung, Klima).
  Current product areas: customers and sites, requests, jobs and projects, calendar and
  dispatch, employees and time tracking, documents, inventory, service and maintenance.
- **Reader:** the owner or managing director of a medium-to-large SHK business. Not a
  software person. Reads German at or below fifth-grade level.
- **Job of the page:** make the owner recognize their own working day, understand what
  WerkFlow holds, and ask for a conversation.
- **Action:** one action on every page — *Gespräch anfragen*. The form is a local preview
  and posts nowhere.

## Claim boundaries applied to every study

Taken from `../../docs/scope.md`, `werkflow-business/docs/offer.md` and
`werkflow-business/docs/copy-standard.md`:

- No price, no trial, no guarantee, no app-store link, no current AI feature.
- No customer name, logo, testimonial, or number of customers. The beta relationship is
  not usable in public copy without permission, so no study mentions it.
- No invented deadline, slot count, or saved-hours figure.
- Planned scope is labelled as planned. Every page states plainly that WerkFlow is not
  yet openly for sale, which follows the founders' recorded launch condition.
- Credibility comes from being concrete about what the product already holds, not from
  proof the business does not have yet.

## Brand constants

From `werkflow-app/AGENTS.md` and `werkflow-app/app/globals.css`:

| Constant | Rule |
| --- | --- |
| Orange `#ff7900` | The only attention colour. CTA, focus ring, one marker per page. |
| Purple | Soft, desaturated in UI (`#6f5f94`, `#3e3659`). Vivid purple only inside logo SVGs. |
| Status colours | Stay semantic. Never rebranded. |
| Pairing | Never purple text on orange, never orange text on purple. |
| Tone | Calm, professional, understated. Marketing may be more expressive than the app. |

The website may be more expressive than the product UI, so each study sets its own
radius, density and ground while keeping the two brand hues and their pairing rule.

## The five studies

### 1 · Feierabend — the paperwork made visible

- **Hero:** the physical artefacts of the trade. Carbon-copy job slips, a time sheet and a
  delivery note lie on the page; the same facts stand beside them as one clean record.
  The hero is the trade's own material, not a headline over a gradient.
- **Colour:** white page `#ffffff`, ink `#1a1523`, slip paper `#e9e4da` (objects only —
  the page itself is never cream), slip rule `#c8bca4`, deep purple ground `#3e3659`,
  orange `#ff7900` once.
- **Type:** Schibsted Grotesk throughout; Courier Prime only inside the paper artefacts,
  because that is the face those forms are actually printed in.
- **Layout:** two columns that trade places — narrative left, artefacts right, then the
  reverse. Left aligned, generous rag.
- **Principle:** the reader should see their own desk before they see any software.

### 2 · Plantafel — the week on the board

- **Hero:** a working planning board. Names down the side, days across, jobs as magnet
  strips, one orange line for today. It reads the way the office wall already reads.
- **Colour:** purple-black ground `#211c2e`, board `#f3f1f6`, strips `#6f5f94` /
  `#948ab3`, hairline `#3a3350`, orange `#ff7900` for today and the CTA.
- **Type:** Saira Condensed for board labels and headlines, Saira for body. One
  superfamily, two widths — the widths carry the hierarchy.
- **Layout:** full-bleed board across the top, then a narrow centred column of text so the
  board stays the only wide thing on the page.
- **Principle:** show the coordination problem as an object the reader already owns.

### 3 · Technische Zeichnung — the job as a drawing

- **Hero:** the path of one job drawn as a technical schematic: Anfrage, Auftrag, Termin,
  Zeit, Dokument, Abschluss, with dimension lines and a title block.
- **Colour:** drafting ground `#e8ecef`, ink `#16202a`, hairline `#9fb0bc`, deep purple
  `#3e3659`, orange `#ff7900` at one point only.
- **Type:** IBM Plex Sans with IBM Plex Mono for dimensions and sheet marks. Mono is the
  material here, not decoration.
- **Layout:** a drafting sheet — fixed margin rule left, sheet marks right, Schriftfeld
  footer. Sheet numbers are a real sequence, so numbering is earned.
- **Principle:** speak to an owner who thinks in systems, in the visual language of the trade.

### 4 · Morgens um sechs — the owner's day

- **Hero:** one large typographic sentence in the owner's own words, then the day itself
  as a timeline in the left margin.
- **Colour:** near-white `#f7f6f8`, ink `#1a1523`, muted `#5f5967`, night band `#3e3659`,
  orange `#ff7900` at the last hour of the day where the action sits.
- **Type:** Zilla Slab for display and clock numerals, Karla for body.
- **Layout:** one narrow column, left aligned, times hanging in the margin. The page gets
  darker as the day gets later and lifts again at the end.
- **Principle:** emotional, owner to owner. The only study that leads with feeling.

### 5 · Ein Dienstag — one product, three roles

- **Hero:** the product. Choose Chef, Büro or Monteur and the screen beside the choice
  changes to that person's Tuesday. Motion only answers the reader's click.
- **Colour:** `#fafafb` page, white cards, border `#e6e4ea`, purple tint `#f1eff5`, deep
  purple band `#3e3659`, orange `#ff7900` for the one primary action.
- **Type:** Instrument Sans alone, set tight at display sizes.
- **Layout:** wide product strips with short text; the interface carries the page.
- **Principle:** the most restrained study. Everything quiet so the product is the loud thing.

## Plan review against the generic defaults

Checked before building, and revised:

- **Cream page, high-contrast serif, clay accent:** not used. Study 1 keeps paper as an
  *object* on a white page, precisely so the page does not become the cream default.
- **Dark page with one acid accent:** study 2 is dark, but the ground is WerkFlow's own
  purple-black and the accent is the brand orange with a functional job (today's line),
  not a decorative glow.
- **Hairlines and dense columns:** used only in study 3, where the page is a drafting
  sheet and hairlines are the subject's own drawing convention.
- **Identical rounded cards with one shadow:** rejected. Each study sets its own radius —
  study 1 has rotated paper, study 2 has square magnet strips, study 3 has no radius at
  all, study 4 has none, study 5 uses the app's modest 8px.
- **Template chrome:** no all-caps eyebrows, no middle-dot meta strings, no arrows glued
  to button text. Study 3 uses mono because a drawing is dimensioned in mono; no other
  study uses mono for labels.
- **Numbered markers:** only study 3, where sheets are genuinely numbered, and study 4,
  where the clock is genuinely a sequence.
- **Scattered scroll animation:** none. Study 5 animates on click only; study 1 has one
  orchestrated load moment; the rest do not move.

## Quality floor for every study

Responsive to 360px, visible keyboard focus, `prefers-reduced-motion` respected, text
contrast at least 4.5:1 for body and 3:1 for large display, one `h1` per page, landmarks,
labelled form fields, and no colour-only information.
