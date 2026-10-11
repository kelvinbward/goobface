import fs from 'node:fs';
import path from 'node:path';

const TARGET_DIRS = [
  'src/apps',
  'src/components/games',
  'src/components/ui',
  'src/content',
  'src/pages'
];

function generateArchMap() {
  const archMap = {};

  for (const dirRelative of TARGET_DIRS) {
    const fullPath = path.resolve(process.cwd(), dirRelative);
    if (fs.existsSync(fullPath)) {
      const entries = fs.readdirSync(fullPath, { withFileTypes: true });
      archMap[dirRelative] = entries.map((entry) => entry.name).sort();
    } else {
      archMap[dirRelative] = [];
    }
  }

  const outputPath = path.resolve(process.cwd(), '.agents/architecture-map.json');
  fs.writeFileSync(outputPath, JSON.stringify(archMap, null, 2) + '\n', 'utf8');
  console.log(`Generated architecture map at ${outputPath}`);
}

generateArchMap();
