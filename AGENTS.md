# 🧠 Service: Personal Creative Monolith (goobface)

## 📋 Service Role
**Personal Creative Monolith**.
- **Domain**: `goobface.com` (hosted on GitHub Pages)
- **Function**: Unified repository consolidating creative applications, experiments, games, audio tools (`creativeAudioJS`), and documentation (`3d-printing`).
- **Stack**: Astro + Phaser + Three.js + Tone.js.

## 📡 Service Topology
| Context | Hostname | Port | Visibility |
| :--- | :--- | :--- | :--- |
| **Monolith App** | `goobface-app` | `4321` | Main Site & Labs |

## 🚀 Execution Modes
| Mode | Config | Command | Description |
| :--- | :--- | :--- | :--- |
| **Development** | `docker-compose.yml` | `docker compose up` | **Port 4321**. Local dev environment. |

## 🔄 Handoff Protocol
1.  **Monorepo Consolidation**: All integrated applications and public distribution paths are directly editable within this repository.
2.  **Workflow**: Push to `feature/` or `infra/` branch. Create PR to `main`.

## 🤝 Collaborative Workflow
- **Branching**: `feature/` (Games/Content/Apps), `infra/` (Config/Infrastructure).
