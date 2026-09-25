# WerkFlow website

Foundation for WerkFlow's public website, campaign landing pages, and supporting web functionality at werk-flow.app and www.werk-flow.app.

Read [AGENTS.md](AGENTS.md), then [the documentation index](docs/README.md). Keep this checkout beside werkflow-business and werkflow-app; follow [workspace setup](../werkflow-business/docs/workflow.md#prepare-a-new-machine) on a new machine.

The stack is Next.js App Router, TypeScript, Tailwind CSS, and Bun. The repository root holds the single
application; it is the only thing that builds, locally and on Vercel.

```bash
bun install
bun run dev
```

Fifteen landing-page design studies run inside it, five per model, each set keeping its own page code, stylesheet,
and assets:

| Routes | Source | Assets |
| --- | --- | --- |
| `/astra/one` … `/astra/five` | [astra](astra/README.md) | `public/astra` |
| `/opus/one` … `/opus/five` | [opus](opus/README.md) | shared brand files in `public` |
| `/fable/one` … `/fable/five` | [fable](fable/README.md) | shared brand files in `public` |

`/` lists all fifteen. A switcher sits on every page and moves between any two of them; keys `1`–`5` change the
design, `A`, `O` and `F` change the model, `0` opens the overview. Hosting, domains, and public launch remain
separate tasks.

Origin is [werk-flow/werkflow-website](https://github.com/werk-flow/werkflow-website). Git publication is separate from deploying a website or connecting domains.
