# Service: Personal Creative Monolith (goobface)
**Repository Overview**: Astro monolith containing creative apps, games, audio tools, and printing docs.

## Core CLI Commands
- `npm run dev`: Start development server.
- `npm run build`: Build for production.
- `npm run astro check`: Run type and Astro checking.
- `npm run test:ci`: Run Vitest unit tests suite.
- `npx playwright test`: Run headless end-to-end smoke tests.
- `docker compose up`: Run in Docker.

## Standard SSR Safety Rule
**NEVER** import browser-only canvas/sound libraries (`three`, `tone`, `cannon-es`, `phaser`) in Astro component frontmatter. These must only be imported inside client-side `<script>` tags.

## Testing & Quality Guardrails
- **Unit Tests**: Co-located under `src/**/__tests__/*.test.ts` using Vitest. Unit test files are excluded from `tsconfig.json` so `astro check` focuses on production application types.
- **E2E Smoke Tests**: Placed under `e2e/*.spec.ts` using Playwright, verifying initial page load and catching hydration/SSR regressions (`window is not defined`).
- **Gatekeeper CI**: PRs targeting `main` must pass `docker compose config`, `AGENTS.md` presence check, `npm run astro check`, `npm run test:ci`, and `npm run build`.

## Agent Routing Pointers
For specific domain tasks, refer to the guides in `.agents/`:
- **Audio**: See `.agents/audio.md`
- **Games**: See `.agents/games.md`
- **Klipper/Configs**: See `.agents/klipper.md`
