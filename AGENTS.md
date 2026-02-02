# 🧠 Service: Personal Hub (goobface)

## 📋 Service Role
**Personal Creative Root**.
- **Domain**: `goobface.com`
- **Function**: Aggregator for creative spokes (`creativeAudioJS`, `3d-printing`).
- **Stack**: Astro + Phaser + Three.js.

## 📡 Service Topology
| Context | Hostname | Port | Visibility |
| :--- | :--- | :--- | :--- |
| **Gateway** | `gateway-app-1` | `81` | Public |
| **CreativeAudio** | `creative-audio-1` | `5173` | Subdomain |

## 🚀 Execution Modes
| Mode | Config | Command | Description |
| :--- | :--- | :--- | :--- |
| **Cluster** | `docker-compose.yml` | `docker compose up -d` | Production internal network. |
| **Standalone** | `docker-compose.standalone.yml` | `docker compose -f ... up` | **Port 4321**. Isolated dev. |

## 🔄 Handoff Protocol
1.  **Immutability**: `public/3d-printing` is LOCKED. Update via PR from `3d-printing` repo.
2.  **Workflow**: Push to `feature/` branch. Create PR to `main`.

## 🤝 Collaborative Workflow
- **Branching**: `feature/` (Games/Content), `infra/` (Config).
