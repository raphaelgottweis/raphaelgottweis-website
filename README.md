# raphaelgottweis.com

Personal academic website for Raphael Gottweis, built with [Astro](https://astro.build/) on the [Brutal theme](https://github.com/ElianCodes/brutal) by Elian Van Cutsem.

## Structure

- `src/pages/index.astro` — home page (bio, current research focus, collaborators)
- `src/pages/research/` — research projects, sourced from `src/data/research/*.md`
- `src/pages/teaching/` — courses taught
- `src/pages/cv/` — CV viewer + PDF download (`public/Gottweis_CV.pdf`)

To add a research project, add a new markdown file to `src/data/research/` following the frontmatter schema in `src/content.config.ts`.

## Commands

Requires [Node.js](https://nodejs.org/) (LTS) and [pnpm](https://pnpm.io/) installed locally.

| Command         | Action                                       |
| :-------------- | :-------------------------------------------- |
| `pnpm install`  | Install dependencies                          |
| `pnpm dev`      | Start local dev server at `localhost:4321`    |
| `pnpm build`    | Build production site to `./dist/`            |
| `pnpm preview`  | Preview the build locally                     |

## Deploying

The easiest path is [Vercel](https://vercel.com) or [Netlify](https://www.netlify.com/): push this folder to a GitHub repo, import it on either platform, and it will detect Astro automatically (build command `pnpm build` / `astro build`, output `dist`). No local Node.js install is required for that path — the platform builds it.

Update `astro.config.ts`'s `site` value once the final domain is known.
