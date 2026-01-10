# 🎮 Goobface

A technical showcase and hobby portal built with **Astro**, **Phaser**, and **Three.js**.

## 🚀 Features
- **Islands Architecture**: Interactive game components powered by Astro.
- **Phaser.js**: 2D arcade games.
- **Three.js**: 3D scene rendering.
- **Zero-JS Static Core**: Super fast blog and landing pages.

## 🤖 AI Agent Protocol
- **`AGENTS.md`**: See this file for architectural context and dev commands.

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
