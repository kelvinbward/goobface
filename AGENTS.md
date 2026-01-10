# 🧠 Project: Goobface (Public)

## 📋 Role
Hybrid Game & Hobby Node. Serves high-performance JS games (Phaser/Three.js) and hosts personal blog/3D printing documentation via Astro Content Collections.

## 🌳 Relationship: System Root
This project is a **Leaf Node** in the `kelvinbward` Polyrepo system.
- **Root**: `../kelvinbward/AGENTS.md` (Defines global port/network rules)
- **Infrastructure**: managed by `../pi-cluster-configs`

## 🐳 Docker Modes
- **Cluster Mode (Default)**: `docker-compose.yml` (No ports, `web_gateway` network). Used when running with Pi Cluster.
- **Standalone Mode (Dev)**: `docker-compose.standalone.yml` (Exposes port 4321). Used for isolated dev.

## 🛠 Local Configuration
- **Ports**: 
    - Dev: `4321` (Standalone only)
- **Commands**:
    - `npm run dev`: Start Astro dev server.
    - `npm run build`: Build static site.

## 🔄 Protocol
1.  Update this file if tech stack changes.
2.  Update Root `AGENTS.md` if new components are added.
