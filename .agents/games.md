# Games Specs
- **Three.js Scene Destruction/Memory Cleanup**: Ensure all renderer, geometries, and materials are properly disposed of on component unmount or `astro:before-swap` (e.g., `game?.dispose()`).
- **Cannon-es Physics Loop**: Physics loop step rates should typically be `1/60` (as defined in `TIME_STEP`).
- **Phaser Canvas Mounting**: When mounting Phaser canvases, ensure they are correctly contained within Astro islands and handle resizing explicitly.
