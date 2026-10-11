import fs from 'node:fs';
import path from 'node:path';

const DOC_FILES = [
  'README.md',
  'AGENTS.md',
  '.agents/audio.md',
  '.agents/games.md',
  '.agents/klipper.md'
];

const PATH_REGEX = /(?:src|public|\.github|\.agents|e2e)\/[a-zA-Z0-9_\-\/.]+/g;

function cleanPath(rawPath) {
  let cleaned = rawPath;
  // Strip trailing markdown punctuation (*, `, ), ,, .)
  while (/[*`\),\.]/.test(cleaned[cleaned.length - 1])) {
    cleaned = cleaned.slice(0, -1);
  }
  return cleaned;
}

function verifyDocs() {
  let hasErrors = false;
  let totalPathsChecked = 0;

  for (const docFile of DOC_FILES) {
    const fullDocPath = path.resolve(process.cwd(), docFile);
    if (!fs.existsSync(fullDocPath)) {
      console.error(`Doc file not found: ${docFile}`);
      hasErrors = true;
      continue;
    }

    const content = fs.readFileSync(fullDocPath, 'utf8');
    let match;
    while ((match = PATH_REGEX.exec(content)) !== null) {
      const rawPath = match[0];
      const targetPath = cleanPath(rawPath);

      if (!targetPath) continue;

      // Handle wildcard / glob paths like src/content/blog/*.mdx or src/**/*.{test,spec}.ts
      if (targetPath.includes('*') || targetPath.includes('{')) {
        const baseDir = targetPath.split(/[\*\{]/)[0];
        const cleanBaseDir = baseDir.endsWith('/') ? baseDir : path.dirname(baseDir);
        totalPathsChecked++;
        if (!fs.existsSync(path.resolve(process.cwd(), cleanBaseDir))) {
          console.error(`[FAIL] ${docFile}: "${rawPath}" -> resolved base dir "${cleanBaseDir}" does not exist on disk.`);
          hasErrors = true;
        }
        continue;
      }

      totalPathsChecked++;
      const resolvedPath = path.resolve(process.cwd(), targetPath);
      if (!fs.existsSync(resolvedPath)) {
        console.error(`[FAIL] ${docFile}: "${rawPath}" -> "${targetPath}" does not exist on disk.`);
        hasErrors = true;
      }
    }
  }

  if (hasErrors) {
    console.error(`\nDoc verification failed! Missing paths detected.`);
    process.exit(1);
  } else {
    console.log(`\nDoc verification passed! Checked ${totalPathsChecked} paths across documentation files.`);
    process.exit(0);
  }
}

verifyDocs();
