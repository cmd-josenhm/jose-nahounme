import { readFile, rm, writeFile, mkdir } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { render } from '../dist/server/entry-server.js';
import { blogArticles } from '../src/data/blog.js';

const routes = [
  '/',
  '/about',
  '/portfolio',
  '/contact',
  '/blog',
  ...blogArticles.map((article) => `/blog/${article.slug}`),
];
const template = await readFile(resolve('dist/index.html'), 'utf8');

for (const route of routes) {
  const html = template.replace('<div id="root"></div>', `<div id="root">${render(route)}</div>`);
  const output = route === '/' ? resolve('dist/index.html') : resolve('dist', route.slice(1), 'index.html');
  await mkdir(dirname(output), { recursive: true });
  await writeFile(output, html, 'utf8');
}

await rm(resolve('dist/server'), { recursive: true, force: true });
console.log(`Prerendered ${routes.length} routes.`);
