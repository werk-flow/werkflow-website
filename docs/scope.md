# Website scope

Status: living — last reviewed 2026-09-22

## Purpose and current state

The website will present WerkFlow and host campaign landing pages at werk-flow.app and www.werk-flow.app. Its audience and offer come from the [business documents](../../werkflow-business/docs/README.md). Tamay confirmed that it will have supporting backend functionality and is not limited to a static brochure.

Only the documentation and skills foundation exists. The intended stack is Next.js App Router, TypeScript, Tailwind CSS, and Bun for package management and project commands. Deployment is intended to use a separate Vercel project with the Next.js framework preset. The exact versions, application initialization, backend services, hosting configuration, and launch date are deferred to the later website implementation task. Nothing is connected to a domain yet.

The founders' [public-offer condition](../../werkflow-business/docs/offer.md#next-public-offer) governs future launch messaging. A draft page must label planned scope appropriately and must not invent a trial, price, guarantee, store link, or current AI feature.

## Intended acquisition pages and functionality

Tamay intends Meta-ad traffic to reach a dedicated campaign landing page containing a video sales letter (VSL), a brief form, and possibly a calendar or booking step. The page may need server-side submission handling and integrations. The exact qualification questions, sales sequence, copy, calendar provider, video hosting, lead storage, notifications, and tracking remain decisions for John and the website implementation task.

The business [acquisition document](../../werkflow-business/docs/acquisition.md) owns the commercial journey and scripts. This repository owns how the page, form, and integration behave. The business repo is not an application backend. No connection to the app's production database or credentials is implied.

Next.js is the recommended fit for this intended mixture of public pages and server-side functionality. TypeScript and Tailwind are supported setup choices, and Next.js has a documented Vercel deployment path. Bun is the package/workflow choice; the deployed runtime is a separate decision. [Next.js installation](https://nextjs.org/docs/app/getting-started/installation), [Next.js on Vercel](https://vercel.com/docs/frameworks/full-stack/nextjs).

In the later implementation task, preserve the existing AGENTS.md, CLAUDE.md import, docs, and skills when scaffolding. Merge any useful framework instructions rather than replacing the workspace context with generated defaults. Choose current compatible versions then, add the build/lint/type checks appropriate to the actual app, and document its own preview and production setup. Do not initialize dependencies, forms, providers, or hosting as part of this foundation.

Both root and www domains are intended for this site; choose the canonical domain and redirect when configuring hosting. The operational app remains a separate application at app.werk-flow.app. Do not change its existing DEV/PROD mapping to publish the website.

## Brand and usability

Use the established WerkFlow brand as the starting point. The [app's brand rules](../../werkflow-app/AGENTS.md) and app/globals.css own its current identity and theme values. The website may develop a more expressive marketing layout without inventing a conflicting brand.

Establish website tokens when implementation starts rather than maintaining scattered copies of app styles. App component rules are not automatically website component requirements. Preserve readable contrast, keyboard use, visible focus, responsive layout, and reduced-motion preferences.

Use the [shared copy standard](../../werkflow-business/docs/copy-standard.md). A design skill may suggest stronger visual treatment, but it cannot relax the reading-level ceiling or invent social proof.

## Design skill

The official Anthropic frontend-design skill is installed without edits in both local skill locations. Its source is [anthropics/skills at revision 34040c9c568585f6929bedeaad110ad08f079624](https://github.com/anthropics/skills/tree/34040c9c568585f6929bedeaad110ad08f079624/skills/frontend-design), retrieved on 2026-09-22.

The Apache 2.0 license is retained as LICENSE.txt beside SKILL.md in each mirror. Review source changes before an update, preserve applicable notices, and record the new revision here. No other upstream scripts, hooks, or configuration were imported.

The other five local skills are mirrors from the [business skill collection](../../werkflow-business/docs/skills.md).
