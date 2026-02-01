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

## 🌳 Git Branching & Workflow
1.  **NEVER commit directly to `main`**. Main is protected and direct pushes are forbidden.
2.  **Infrastructure Gatekeeping**: All infrastructure changes (conf, docker, workflows) require a PR and manual approval from @kelvinbward.
3.  **Always create a feature branch** using the prefix `feature/`, `fix/`, or `infra/`.
4.  **Draft Pull Requests**: When starting a task, create a draft PR immediately to track progress.
5.  **Clean History**: Use `git commit --amend` for small fixes during development and `git rebase main` before final merge.
6.  **Post-Merge**: Delete the feature branch once it is merged into `main`.

## 🤝 Collaborative Workflow
**Role Definition**:
*   **User (@kelvinbward)**: Senior Engineer / Owner. Has `admin` rights. Merges PRs.
*   **Agent (AI)**: Junior Engineer. Has `write` access to branches but **NO** PR/Merge rights.

**Protocol**:
1.  **Agent Work**:
    *   Create branch using prefix: `feature/` (new capability), `fix/` (bug repair), or `infra/` (system/ops).
    *   Commit changes -> Push to origin.
    *   **STOP**. Do not attempt to create PR via CLI.
    *   Generate a `Direct Link` (via Walkthrough) for the User to create the PR.
2.  **User Review**:
    *   Click Link -> Review Diff -> Create PR.
    *   Wait for `Agent Gatekeeper` checks to pass.
    *   Merge (Squash/Rebase).
3.  **Agent Cleanup (Start of Next Task)**:
    *   **MANDATORY**: Before starting ANY new task, run the cleanup script from the workspace root:
        ```bash
        ../kelvinbward/scripts/git_cleanup.sh
        ```
    *   This ensures your workspace is synchronized with the latest `main`.



## 🔄 Protocol
1.  Update this file if tech stack changes.
2.  Update Root `AGENTS.md` if new components are added.
