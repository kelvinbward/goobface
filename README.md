# 🎮 Goobface

A digital playground for game development, 3D printing logs, and generative art.
**Deployed independently at [goobface.com](https://goobface.com)**.

## 🚀 Features
- **Islands Architecture**: Interactive game components powered by Astro.
- **Phaser.js**: 2D arcade games.
- **Three.js**: 3D scene rendering.
- **Zero-JS Static Core**: Super fast blog and landing pages.
- **Content Collections**: Integrated 3D Printing configuration documentation and Personal Blog.

## 🤖 AI Agent Protocol
- **`AGENTS.md`**: See this file for architectural context and dev commands.

## 💡 Technology Selection & Benefits
This project uses a hybrid architecture to balance performance with interactivity:
- **Astro**: Chosen for its **Islands Architecture**, allowing the site to remain 90% static HTML (fast, SEO-friendly) while selectively hydrating heavy interactive components only when visible.
- **Phaser.js**: Selected for the 2D arcade games (`Pong`, `BlockBreaker`) due to its robust physics engine and optimized canvas rendering, ensuring smooth 60fps gameplay on low-power devices.
- **Three.js**: Powers the 3D experiences (`Racing3D`) and the background starfield, providing WebGL-accelerated graphics without the overhead of a full game engine like Unity.
- **Content Collections**: Astro's type-safe content layer transforms raw `.md` and `.cfg` files into queryable data, treating my 3D printer configs as "database entries" for the blog.

## 🛠 Development
\`\`\`bash
npm install
npm run dev
\`\`\`

## 🐳 Docker

### Standalone Mode (Development)
Run isolated with exposed ports (4321):
```bash
docker-compose -f docker-compose.standalone.yml up
```

### Private Cloud Mode (Cluster)
Run within the shared infrastructure network (no exposed ports):
```bash
docker-compose up -d
```
*Access via Gateway: `http://goobface.localhost`*

## 🏗️ Project Structure

The project follows a **Unified Astro Monolith** directory structure to organize integrated apps, interactive islands, libraries, and content collections:

```text
src/
├── apps/                 # Integrated feature applications & experiment modules
│   ├── arcade/           # Desktop OS, game cartridges (Pong, Racing3D)
│   ├── audio-lab/        # Creative Audio JS playground & synthesizers
│   └── 3d-lab/           # 3D printer specs & model previewer
├── components/           # UI component hierarchy
│   ├── ui/               # Shared UI elements (Navbar, Window controls, Canvas engines)
│   ├── games/            # Game canvas components & controls
│   ├── audio/            # Synth knobs, wave visualizers
│   └── 3d-printing/      # 3D model & printer config renderers
├── content/              # Type-safe blog and 3d-printing markdown (MDX)
│   ├── blog/             # Project development logs
│   └── printing/         # 3D printer configs and documentation
├── lib/                  # Core domain engines & utility libraries
│   ├── physics/          # Cannon-es physics wrappers
│   ├── audio/            # Tone.js audio synth logic
│   └── graphics/         # Three.js scene setup & shaders
├── layouts/              # Base HTML wrappers (Astro Layouts)
├── pages/                # Route entry points (index.astro, blog/, etc.)
└── styles/               # Design system tokens & global CSS
```

## 📝 Code Overview

### 🌌 Space Theme Engine (`src/components/ui/SpaceBackground.astro`)
The landing page background is a custom HTML5 Canvas engine.
- **Starfield**: Generates parallax-scrolling stars with varying depth and opacity.
- **Fireworks**: Interactive particle system triggered by clicks. Particles obey physics (gravity, velocity) and bounce off screen edges before fading.

### 🏓 Game Island (`src/components/games/GameIsland.astro`)
A containerized "Desktop UI" that manages interactive games.
- **Window Management**: Simulated OS controls for Fullscreen (🟢), Minimize (🟡), and Termination (🔴).
- **Game Selector**: A dropdown to switch between active game "cartridges" (Pong, Breakout, Neon Drift).
- **Sub-Components**: House the logic for `Pong.astro`, `BlockBreaker.astro`, and `Racing3D.astro`.

### 🏎️ Racing3D (`src/components/games/Racing3D.astro`)
A 3D arcade racing experience built with **Three.js** and **Cannon-es**.
- **Physics**: Uses `RaycastVehicle` for realistic suspension and friction.
- **Aesthetic**: Neon Void grid with dynamic lighting.

### 🖨️ Content Collections (`src/content/`)
Type-safe documentation managed via Astro's content layer:
- **`blog/`**: Project development logs (MDX).
- **`printing/`**: 3D printer configs and documentation.

## 🤝 Contributing

We follow a unified monorepo workflow to maintain stability across all integrated projects and experiments.

### Workflow & Branching
1. **Branching**:
   - Use `feature/` for new applications, games, audio tools, or content.
   - Use `infra/` for build scripts, dependency updates, and monorepo structure changes.
2. **Pull Requests**: Never commit directly to `main`. Always create a PR from your feature/infra branch for review.

### Standards
- **SSR Safety**: Since we use Astro, always ensure canvas-dependent libraries (Phaser, Three.js) are scoped to client-side scripts using `<script>` tags or `client:only` directives.
- **Typescript**: All new components and logic should be fully typed and verified with `npm run astro check`.

