# Klipper Specs
- **Moonraker/Mainsail Configuration Conventions**: Klipper files are found in `src/content/printer_data`. Maintain standard INI/CFG syntax conventions, ensuring sections like `[server]`, `[file_manager]`, `[update_manager]` are valid.
- **MDX Frontmatter Schemas**: Frontmatter for `blog` and `printing` content collections are strictly typed in `src/content.config.ts`. Ensure `title`, `pubDate`, `description`, etc., match their Zod definitions.
