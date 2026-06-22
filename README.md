# RAG Reference Hub

A modern educational and reference website for Retrieval-Augmented Generation, RAG tooling, Dify workflows, architectures, tutorials, use cases, comparisons, glossary terms, and resources.

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- Structured content in `data/*.ts`
- Reusable UI in `components/*`

## Run locally

```bash
pnpm install
pnpm dev
```

Then open `http://localhost:3000`.

## Build

```bash
pnpm build
```

## Add a new tool

Edit `data/tools.ts` and add a `Tool` object with:

- `name`, `slug`, `category`, `description`, and `mainUseCase`
- open-source, self-hosting, and cloud availability
- strengths, limitations, integrations, target users, tags, and suitability
- official website, documentation, GitHub when available, and `lastVerified`

Use cautious wording. Do not add exact prices, benchmark results, or feature claims unless they are verified from official sources.

## Update tool information

1. Check the official website, documentation, and repository.
2. Update the relevant fields in `data/tools.ts`.
3. Change `lastVerified`.
4. Keep `pricingNote` neutral unless exact details are confirmed.

## Add tutorials

Edit `data/tutorials.ts`. Each tutorial currently has a `slug`, `title`, and ordered `steps`. For code-heavy tutorials, either expand the data model or create a dedicated route under `app/tutorials`.

## Add glossary terms

Edit `data/glossary.ts`. Keep definitions short, precise, and beginner-friendly. Add related terms to improve search discovery.

## Add resources

Edit `data/resources.ts`. Prefer official documentation, primary research papers, canonical repositories, and well-maintained benchmark or dataset pages.

## Portal sections

- `app/implementation` contains the build and maintenance playbook.
- `app/evaluation` contains evaluation metrics and release guidance.
- `data/portal.ts` powers the homepage portal finder, audience pathways, stack map, implementation roadmap, risk controls, and FAQ.

## Editorial policy

The site prefers official and verifiable sources, avoids hype, and uses explicit comparison criteria. It is educational material, not a replacement for official documentation, legal advice, security review, or procurement due diligence.
