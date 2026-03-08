# AGENTS.md

Repository-specific instructions for agents working in this project.

## Project Overview

- This repository is the official documentation site for the Fraxinus Project.
- Fraxinus is a family of fast and compact CoreXY 3D printers and related digital fabrication machines.
- The site contains model overview pages, assembly guides, community references, and bilingual Japanese/English documentation.
- Major content areas include enclosure variants, trident variants, flying gantry variants, micro 3D printers, and assembly documentation.
- Community participation is an important part of the project, and Discord is mainly a place for builders and contributors to share progress and improvements.

## Core Rules

- Treat this repository as a Hugo site.
- Prefer local overrides and local configuration over upstream theme edits.
- Run `npm run build` after meaningful changes unless the task is explicitly docs-only.

## Theme Editing Policy

- Do not edit anything under `themes/` unless the user explicitly asks for it.
- Override theme behavior from `layouts/` instead.
- Override partials from `layouts/partials/`.
- Override list/single templates from `layouts/`, `layouts/_default/`, or `layouts/docs/`.

Reason:
Editing the upstream theme makes future theme updates and diff management much harder.

## SEO / AIO Implementation Rules

- Manage shared SEO tags from `layouts/partials/basic-seo.html`.
- Manage structured data from `layouts/partials/seo/`.
- Manage AI-facing summary output from `layouts/index.llms.txt`.
- Use frontmatter `summary` for short answer-first page summaries.
- Set frontmatter `image` on important pages so OGP/social previews are explicit.
- Use frontmatter `faq` only on pages that contain real FAQ content.

### Recommended Frontmatter

```yaml
title: ""
description: ""
summary: ""
image: ""
keywords: []
faq:
  - question: ""
    answer: ""
```

## Content Rules

- Keep Japanese and English pages aligned in information structure whenever possible.
- Write key landing pages in an answer-first style.
- Make the page purpose clear within the first 2-4 sentences.
- Do not leave meaningful content images without alt text.
- When alt text depends on text or labels inside the image, inspect the image and write a concrete alt based on what is actually visible.

## Preferred Edit Order

1. `content/` frontmatter and page body
2. `layouts/` overrides
3. `config/_default/`

Do not edit `themes/` by default.

## Build / Verification

```bash
npm ci
npm run build
```

Notes:

- Hugo modules may need network access during build setup.
- A Hugo module compatibility warning may appear; successful site generation is the primary check.

## Pull Requests

- If an agent creates or updates a PR body, append this footer at the end:
- State the actual agent/tool name used to create the PR body.
- State the actual model name used for that PR. Do not hardcode a fixed model name.

```md
🤖 Generated with [<actual agent/tool name>](<actual agent/tool URL>) using <actual model name>
```

Examples:

```md
🤖 Generated with [OpenAI Codex](https://openai.com/codex) using <actual model name>
```

```md
🤖 Generated with [Claude Code](https://claude.com/claude-code) using <actual model name>
```
