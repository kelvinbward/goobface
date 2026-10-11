# Service: Personal Creative Monolith (goobface)
**Repository Overview**: Astro monolith containing creative apps, games, audio tools, and printing docs.

## Core CLI Commands
- `npm run dev`: Start development server.
- `npm run build`: Build for production.
- `npm run astro check`: Run type and Astro checking.
- `docker compose up`: Run in Docker.

## Standard SSR Safety Rule
**NEVER** import browser-only canvas/sound libraries (`three`, `tone`, `cannon-es`, `phaser`) in Astro component frontmatter. These must only be imported inside client-side `<script>` tags.

## Agent Routing Pointers
For specific domain tasks, refer to the guides in `.agents/`:
- **Audio**: See `.agents/audio.md`
- **Games**: See `.agents/games.md`
- **Klipper/Configs**: See `.agents/klipper.md`
