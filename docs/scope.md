# Website scope

Status: living — last reviewed 2026-09-22

## Purpose and current state

The website will present WerkFlow and host campaign landing pages at werk-flow.app and www.werk-flow.app. Its audience and offer come from the [business documents](../../werkflow-business/docs/README.md). Tamay confirmed that it will have supporting backend functionality and is not limited to a static brochure.

Fifteen landing-page design studies are implemented, using Next.js App Router, TypeScript, Tailwind CSS, and Bun. Five come from [astra](../astra/README.md), five from [opus](../opus/README.md), and five from [fable](../fable/README.md); opus was written without reading the astra directory, and fable without reading either, so the three sets are independent proposals. The opus design reasoning and claim boundaries live in its [design plan](../opus/docs/design-plan.md); fable's live in its README and its shared claims file.

One application at the repository root serves all of them and is the only thing that builds. It owns the routes, the shared overview at `/`, and the one switcher that moves between any two designs. Each model keeps its own page code, stylesheet, and assets in its own directory, and each stylesheet is scoped so that no set can style another: astra rules sit under `.astra`, opus rules under `.d1` to `.d5`, fable rules under `.f1` to `.f5`. Routes are `/astra/one` to `/astra/five`, `/opus/one` to `/opus/five`, and `/fable/one` to `/fable/five`, so the model that built a page is visible in its address.

Deployment is intended to use a Vercel project with the Next.js framework preset and the repository root as its root directory. Choosing one design, combining them, or publishing any of them is separate authorized work; no study is a selected design. Backend services, hosting configuration, and launch date remain open. Nothing is connected to a domain yet.

The founders' [public-offer condition](../../werkflow-business/docs/offer.md#next-public-offer) governs future launch messaging. A draft page must label planned scope appropriately and must not invent a trial, price, guarantee, store link, or current AI feature.

## Intended acquisition pages and functionality

Tamay intends Meta-ad traffic to reach a dedicated campaign landing page containing a video sales letter (VSL), a brief form, and possibly a calendar or booking step. The page may need server-side submission handling and integrations. The exact qualification questions, sales sequence, copy, calendar provider, video hosting, lead storage, notifications, and tracking remain decisions for John and the website implementation task.

The business [acquisition document](../../werkflow-business/docs/acquisition.md) owns the commercial journey and scripts. This repository owns how the page, form, and integration behave. The business repo is not an application backend. No connection to the app's production database or credentials is implied.

Next.js is the recommended fit for this intended mixture of public pages and server-side functionality. TypeScript and Tailwind are supported setup choices, and Next.js has a documented Vercel deployment path. Bun is the package/workflow choice; the deployed runtime is a separate decision. [Next.js installation](https://nextjs.org/docs/app/getting-started/installation), [Next.js on Vercel](https://vercel.com/docs/frameworks/full-stack/nextjs).

Pinned versions live in the root package manifest, and the build, lint, type, and browser checks are documented in the [repository README](../README.md) and each design README. Keep a new model experiment in its own top-level directory with its own scoped stylesheet, and add its routes under a matching path segment. Adding live submission handling, providers, analytics, and hosting remains separate authorized work.

Both root and www domains are intended for this site; choose the canonical domain and redirect when configuring hosting. The operational app remains a separate application at app.werk-flow.app. Do not change its existing DEV/PROD mapping to publish the website.

## Brand and usability

Use the established WerkFlow brand as the starting point. The [app's brand rules](../../werkflow-app/AGENTS.md) and app/globals.css own its current identity and theme values. The website may develop a more expressive marketing layout without inventing a conflicting brand.

Astra defines its tokens in astra/astra.css and opus in each file under opus/designs, both based on the committed app palette. App component rules are not automatically website component requirements. Preserve readable contrast, keyboard use, visible focus, responsive layout, and reduced-motion preferences.

Use the [shared copy standard](../../werkflow-business/docs/copy-standard.md). A design skill may suggest stronger visual treatment, but it cannot relax the reading-level ceiling or invent social proof.

## Design skill

The official Anthropic frontend-design skill is installed without edits in both local skill locations. Its source is [anthropics/skills at revision 34040c9c568585f6929bedeaad110ad08f079624](https://github.com/anthropics/skills/tree/34040c9c568585f6929bedeaad110ad08f079624/skills/frontend-design), retrieved on 2026-09-22.

The Apache 2.0 license is retained as LICENSE.txt beside SKILL.md in each mirror. Review source changes before an update, preserve applicable notices, and record the new revision here. No other upstream scripts, hooks, or configuration were imported.

The other five local skills are mirrors from the [business skill collection](../../werkflow-business/docs/skills.md).
