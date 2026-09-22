---
name: writing-for-agents
description: Create or edit WerkFlow agent instructions, skills, reusable prompts, and context-routing documents.
---

# Writing for agents

Keep always-loaded instructions short enough to use. Put the repository's purpose, source ownership, task boundaries, and context routes first. State when a linked reference is needed.

Separate procedural instructions from business facts. Reference the fact's canonical home. Skills describe how to work; they must not create a second offer, pricing policy, or product baseline.

Make completion observable. Distinguish checking that a file exists from verifying its content, and finding a source from reviewing it. Do not imply that a written rule is enforced by tooling unless the check exists.

When adding cross-repository access, distinguish reading context from authority to edit, pull, publish, or deploy. Preserve active and dirty checkouts. Identify unavailable dependencies instead of silently substituting guesses.

For a skill, use a focused name and description with normal automatic discovery. Include only resources the real task needs. Validate its frontmatter, links, and behavior.

Maintain the designated mirrors and indexes. Resolve source paths relative to the repository that owns the skill, not an arbitrary shell location. Apply unslop. Remove instructions that add no useful constraint or repeat an existing source.
