import { build } from 'vite';
import { execFileSync } from 'node:child_process';

await build();
await build({
  build: {
    ssr: 'src/entry-server.jsx',
    outDir: 'dist/server',
    emptyOutDir: true,
  },
});
execFileSync(process.execPath, ['scripts/prerender.mjs'], { stdio: 'inherit' });
