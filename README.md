# 🎮 Goobface

A technical showcase and hobby portal built with **Astro**, **Phaser**, and **Three.js**.

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
```bash
npm install
npm run dev
```

## 🐳 Docker
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

## 📝 Code Overview

### 🌌 Space Theme Engine (`src/pages/index.astro`)
The landing page features a custom HTML5 Canvas engine that renders a dynamic **Starfield** and a physics-based **Firework System**.
- **Starfield**: Generates parallax-scrolling stars with varying depth and opacity.
- **Fireworks**: Interactive particle system triggered by clicks. Particles obey physics (gravity, velocity) and bounce off screen edges before fading.

### 🏓 Pong Game Component (`src/components/games/Pong.astro`)
A fully playable Pong clone built with **Phaser.js**.
- **Physics**: Uses Arcade Physics with custom logic for paddle collision and ball rebounding.
- **AI**: Simple Y-axis tracking AI for the right paddle.
- **Controls**: Supports both Mouse (position tracking) and Keyboard (W/S keys) input.
- **Responsiveness**: Designed to scale and fit within its parent container.

### 🪟 Window Management System
The game container simulates a desktop window with interactive "Traffic Light" controls:
- **🟢 Fullscreen (+)**: Expands the game component to fill the entire screen using the Fullscreen API.
- **🟡 Minimize (-)**: Hides the game window and displays a clickable toast notification to restore it.
- **🔴 Close (×)**: Prompts the user to terminate the session (closes window or navigates to blank).

### 🏎️ Racing3D Component (`src/components/games/Racing3D.astro`)
A 3D arcade racing experience built with **Three.js** and **Cannon-es**.
- **Physics**: Uses `RaycastVehicle` for realistic suspension, friction, and drive train simulation on an infinite `CANNON.Plane`.
- **Rendering**: "Neon Void" aesthetic with dynamic lighting and an animated grid.
- **Controls**: Standard WASD (Gas/Brake/Steer), Shift+S (Reverse), Space (Handbrake), and Mouse Orbit Camera.
- **Responsive**: Auto-resizes to fit any container dimensions.

### 🖨️ Content Collections (`src/content/`)
The project now hosts personal documentation and blogs using Astro's Content Collections:
- **`blog/`**: General musings and project updates (MDX).
- **`printing/`**: 3D printer configurations (`.cfg`) and documentation (`.md`).
  - Utilizes **Shiki** for syntax highlighting of configuration files.
