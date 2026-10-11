# Contributing to Goobface

Thank you for your interest in contributing to Goobface! Whether you are a human or AI contributor, we ask that you follow these guidelines to ensure quality and consistency across our project.

## Branch Naming Conventions

Please use the following naming conventions when creating new branches:

- **Features**: `feature/<module>-<description>` (e.g., `feature/arcade-new-game`)
- **Infrastructure**: `infra/<description>` (e.g., `infra/update-node-version`)
- **Bug Fixes**: `fix/<issue>` (e.g., `fix/audio-glitch-123`)

## SSR Isolation Standard

Goobface uses the Astro framework and follows its islands architecture. This requires strict Server-Side Rendering (SSR) safety:

- **Server vs. Client**: Astro frontmatter (the code between the `---` fences) runs on the server during the build process.
- **Browser APIs**: Browser-only APIs such as `window`, `document`, WebGL, and WebAudio will cause build failures if accessed during SSR.
- **Solution**: Any code that relies on browser APIs must be placed within `<script>` tags in Astro components, or encapsulated within client-only framework components (e.g., React/Vue components loaded with `client:only` or similar directives).

## Monolith Boundaries

Goobface is a monolithic repository encompassing several distinct areas. Changes should be isolated as much as possible between these modules:

- **Arcade / Games**: Code related to web-based arcade games.
- **Audio Lab**: WebAudio and synthesizer-related projects.
- **3D Printing / Klipper**: Documentation and configurations for 3D printing.

When contributing, ensure that modifications intended for one module do not inadvertently affect others. Code sharing should be intentional and placed in designated shared directories if necessary.

## Pre-Merge Checks

Before opening a Pull Request, you must verify your changes locally to ensure they do not break the build or violate type constraints. Please run the following checks:

1. **Astro Check**: Run `npm run astro check` to verify TypeScript types and Astro component validity.
2. **Local Build**: Run the local build step (e.g., `npm run build`) to confirm that static generation and SSR proceed without errors.

Following these checks ensures a smoother review process and maintains the stability of the main branch.
