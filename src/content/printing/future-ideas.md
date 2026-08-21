---
title: "Future Concepts // Goobface 3D"
description: "Roadmap for the Goobface ecosystem and 3D printing lab."
date: 2026-02-01
tags: ["meta", "planning", "software"]
---

# Future Concepts & Idealization

<div class="bg-purple-900/20 border border-purple-500/30 p-4 rounded-xl mb-8 text-purple-200">
    <strong>Status:</strong> BRAINSTORMING PHASE
    <br/>
    <strong>Priority:</strong> LOW
</div>

## 1. Interactive STL Viewer

To purely showcase the models we print, I want to integrate a lightweight WebGL viewer directly into this documentation site.

### The Concept
Instead of just static images of the prints, users should be able to:
- Rotate and zoom in on the STL files.
- Inspect layer adhesion points (visualized).
- Toggle between "Model View" and "Sliced View" (simulated).

### Technology Stack Candidates
*   **Three.js**: The industry standard. Powerful but boilerplate-heavy.
*   **React-Three-Fiber (R3F)**: Since we are using Astro, we can hydrate a React island efficiently. This is the top contender.
*   **Google's `<model-viewer>`**: The simplest implementation, essentially a custom HTML element. Might be too limited visually for the "Neon Void" aesthetic but worth testing.

> [!NOTE] 
> This feature is planned for Q3 2026.

---

## 2. Professional Blog Split

Currently, this repository serves as a general hobbies blog. However, I have a professional engineering portfolio at `kelvinbward.com`.

### The Plan
In the future, I will refactor the `kelvinbward` professional blog to live in its own repository, or potentially use a shared "Headless" engine if the content overlaps significantly. For now, we are keeping them distinct:
*   **Goobface/Blog**: Hobbies, 3D Printing, Game Dev.
*   **KelvinBWard**: Cloud Architecture, DevOps, Leadership.

---

## 3. Unified Content Management (The "Headless" Dream)

Right now, we maintain:
1.  **KelvinBWard.com** (Professional Resume/Portfolio)
2.  **Goobface.com** (Creative Playground)
3.  **This Hub** (Documentation/Blog)

### The Problem
Updating a blog post or project status requires `git commit` and `push` to three separate repositories. There is no central "Brain" for content.

### The Solution: Shared Headless CMS
I am investigating a Headless CMS architecture to serve content to all three frontends simultaneously via API.

#### Contenders:
*   **Strapi**: Self-hosted, powerful, REST/GraphQL.
*   **Decap CMS (formerly Netlify CMS)**: Git-based. Keeps content in the repo (good for preservation) but provides a UI.
*   **Sanity.io**: Excellent developer experience, structured content, free tier is generous.

### Integration Strategy
1.  **Authoring**: Write content in the CMS.
2.  **Tagging**: Tag content as `target:professional`, `target:creative`, or `target:all`.
3.  **Build Hooks**: When content is published, trigger rebuilds of the relevant Astro/Next.js sites.
4.  **rendering**: 
    *   KelvinBWard fetches `target:professional`.
    *   Goobface fetches `target:creative`.

This would allow for a "Meta-Blog" where I can write about a project once, and have the "Business Value" version appear on my portfolio while the "Hacker Details" appear here.
