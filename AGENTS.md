# WerkFlow website workspace

## Purpose

This repository owns the future public website, campaign landing pages, and their supporting web functionality for werk-flow.app and www.werk-flow.app. The intended stack is Next.js App Router, TypeScript, Tailwind CSS, and Bun, deployed as a separate Next.js project on Vercel. The [scope](docs/scope.md) records the planned VSL, lead form, and possible booking flow. It currently contains only documentation and skills. No website framework, application, form, analytics integration, deployment project, or public page is implemented.

Tamay owns product and offer work. John owns marketing, sales, and customer work. Read [website scope](docs/scope.md) and the shared business sources before creating pages.

## Part of the WerkFlow workspace

The parent Code folder holds independent sibling repositories. It is not a Git repository.

| Repository | Owns | Read when |
| --- | --- | --- |
| [werkflow-website](docs/README.md) | Website pages, page behavior, and future delivery configuration | Building or changing the public website |
| [werkflow-business](../werkflow-business/AGENTS.md) | Avatar, offer, acquisition, approved business context, Hormozi library, marketing work | Choosing an audience, claim, message, or call to action |
| [werkflow-app](../werkflow-app/AGENTS.md) | Product implementation, roadmap, infrastructure, and release evidence | Verifying product availability or behavior |

You may go up one directory and read relevant sibling context. Read the sibling's AGENTS.md and doc index first. Respect host permissions. Reading is not permission to change or synchronize a sibling checkout. Missing context must be identified rather than guessed.

## Ordinary session

For a new machine, use the business [workspace setup](../werkflow-business/docs/workflow.md#prepare-a-new-machine). Follow [the website workflow](docs/workflow.md). Check this repo's branch, commit, remotes, dirty state, and active writers before changing it. Establish the completed published revision of shared business context before relying on it.

Synchronize only a clean, idle checkout with a fast-forward-only pull. Preserve dirty or active work. If no remote is configured or access fails, say that remote freshness is unverified. Current app development must not be described as released product behavior.

Keep the website's delivery workflow separate from the app's DEV and PROD workflow. Commit and push only when requested. Publishing pages, activating forms, adding tracking, changing DNS, and deploying require authorization for those actions.

## Content and design

Business facts have their home in [the business index](../werkflow-business/docs/README.md). Follow its [offer](../werkflow-business/docs/offer.md) and [copy standard](../werkflow-business/docs/copy-standard.md). The future launch condition does not make planned features available today.

For business, audience, copy, offer presentation, and conversion decisions, use hormozi-advisor and the business library's [required baseline](../werkflow-business/docs/library/baseline.md), then the relevant deep references. Apply the perspective as input alongside evidence and founder decisions.

All customer-facing copy must be at or below a fifth-grade reading level. Use natural German, proper umlauts and ß, and a respectful adult tone. Apply copywriting and unslop before marking copy ready. Preserve material conditions and verify claims.

Use frontend-design for actual UI work. Its creative guidance does not override the real brief, WerkFlow's confirmed brand, accessibility, or source accuracy. Hypothetical client stories in an upstream skill are not facts about WerkFlow. The [scope document](docs/scope.md) owns website-specific design boundaries.

Use technical-writing for docs and writing-for-agents for instructions, prompts, and skills. Internal documentation and code use English.

## Documentation and mirrors

Start at [docs/README.md](docs/README.md). Keep links and indexes current. The five shared business and writing skills are maintained in the business repo and mirrored here under .agents/skills and .claude/skills. [Shared skill maintenance](../werkflow-business/docs/skills.md) owns their update procedure.

The website's frontend-design skill is an upstream dependency with its license and pinned source recorded in [scope](docs/scope.md#design-skill). Preserve both local skill mirrors when updating it.

AGENTS.md is canonical here. CLAUDE.md contains only @AGENTS.md and imports this file, matching the app convention. Keep repository-specific instructions here; do not copy the app's full engineering rule set into the website.

Prefer Bun when executable tooling is eventually introduced. Ordinary Git is sufficient for this foundation. No application credentials or production customer data belong here.
