# Ru_Portfolio: project notes

## What it is
Portfolio website for an art student (Ru). Vite + React (JSX).
Hosted on GitHub Pages and deployed automatically on every push to main
by .github/workflows/deploy.yml.

## Setup facts
- react-router-dom with HashRouter (needed for GitHub Pages, so URLs contain #)
- vite.config.js has base: '/Ru_Portfolio/' and it must match the repo name
- Dev server: npm run dev
- The repo will be transferred to her account, and I stay as collaborator
- If the repo is renamed or transferred, check base in vite.config.js and
  Settings > Pages (Source must be GitHub Actions)

## Site structure
- Home > About me / Projects / Contact
- Contact is the footer on every page, and the nav "Contact" button scrolls to it
- Projects page has one "Filter" dropdown. Its options are the project tags.
  Picking a tag shows only the projects with that tag.
- Project page shows brief, description, type, tools, role and images.
  It only shows fields that exist, so print and media projects can differ.
- The year field is optional and is not used for sorting.
- Project cards show cover, title and tag pills. The type is only on the project page.

## Project page order
1. Title
2. Tags, directly under the title
3. Cover image
4. Quick facts in one compact row: type, role, tools, year
5. Brief
6. Description
7. Remaining images

## Tags
- Shown as small rounded pill labels, like the YouTube filter chips.
- Not interactive: use li or span only, never button or a, and no hover
  style or cursor: pointer.
- Written lowercase in info.json (hyphens allowed) and displayed capitalized
  automatically ("character-design" shows as "Character design"). They are
  lowercased when loaded, so "Digital" and "digital" count as one tag.
- Use the formatTag helper in src/data/projects.js for every visible tag,
  including the Filter options. Filtering uses the raw tag.
- The grey pill color is a placeholder until her palette is chosen.

## Adding a project
Create src/projects/<short-lowercase-name>/ containing:
- info.json with title, year, type, tags, tools, role, brief, description
- images, where the one named cover.* is the thumbnail
src/data/projects.js reads all of this automatically. Never hardcode projects.

## Code layout
- src/pages: Home, About, Projects, ProjectDetail
- src/components: Header, Footer, ProjectCard
- src/data/projects.js: loads every folder in src/projects
- Styles are in src/App.css and src/index.css. They are plain structure for now.

## Design (fill in once she decides)
- Mood and references: (3 or 4 sites she likes)
- Colors: (palette, light or dark background)
- Fonts: (heading and body)
- Principles: quiet design so her artwork stands out, mobile first

## Workflow
- Order: content and decisions, then UI design (mobile first), then polish
- She can add images straight on github.com. Both of us pull and push.
- Pull before starting work, and commit small and often.
- Pair sessions over VS Code Live Share.
- Commit before any big change so it can be undone.

## Status
- Done: structure, routing, project loader, tag dropdown, deploy to GitHub Pages,
  favicon placeholder and page title, template cleanup, project page order,
  tag pills (project page and cards), tag formatting, Home removed from nav
- Waiting on her: bio and photo, intro line, contact links, first real project, design references
- To do: swap in her real logo as the favicon, ownership transfer

## Maybe later (undecided, don't build yet)
- Custom loading scene: short first-visit intro, shown once per session,
  respects prefers-reduced-motion. Needs her art or branding.
- Featured section on Home as a paged carousel (4 desktop / 2 tablet / 1 phone,
  arrows + swipe, no auto-scroll). Keep a normal grid on the Projects page.

## How I like help
Keep explanations short. Say which files you changed. Ask before
restructuring things that already work.