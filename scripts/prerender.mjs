import { readFile, rm, writeFile, mkdir } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { render } from '../dist/server/entry-server.js';
import { blogArticles } from '../src/data/blog.js';
import { getSeo } from '../src/utils/seo-config.js';

const routes = [
  '/',
  '/about',
  '/portfolio',
  '/contact',
  '/blog',
  ...blogArticles.map((article) => `/blog/${article.slug}`),
];
const template = await readFile(resolve('dist/index.html'), 'utf8');

function applySeo(html, route) {
  const seo = getSeo(route);
  const image = `https://josenahounme.com${seo.image || '/profil.png'}`;
  const head = [
    `<title>${seo.title}</title>`,
    `<meta name="description" content="${seo.description}" />`,
    `<meta name="keywords" content="${seo.keywords}" />`,
    '<meta name="author" content="José Nahounmè" />',
    '<meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />',
    `<link rel="canonical" href="https://josenahounme.com${seo.path}" />`,
    `<meta property="og:type" content="${seo.type}" />`,
    `<meta property="og:title" content="${seo.title}" />`,
    `<meta property="og:description" content="${seo.description}" />`,
    `<meta property="og:url" content="https://josenahounme.com${seo.path}" />`,
    `<meta property="og:image" content="${image}" />`,
    `<meta property="og:image:alt" content="${seo.title}" />`,
    '<meta name="twitter:card" content="summary_large_image" />',
    `<meta name="twitter:title" content="${seo.title}" />`,
    `<meta name="twitter:description" content="${seo.description}" />`,
    `<meta name="twitter:image" content="${image}" />`,
    `<meta name="twitter:image:alt" content="${seo.title}" />`,
    seo.structuredData ? `<script type="application/ld+json">${JSON.stringify(seo.structuredData).replace(/</g, '\\u003c')}</script>` : '',
  ].join('');
  return html
    .replace(/<title>[\s\S]*?<\/title>/, '')
    .replace(/<meta name="description"[^>]*\/>/, '')
    .replace(/<meta name="keywords"[^>]*\/>/, '')
    .replace(/<meta name="author"[^>]*\/>/, '')
    .replace(/<meta name="robots"[^>]*\/>/, '')
    .replace(/<link rel="canonical"[^>]*\/>/, '')
    .replace(/<meta property="og:[^>]+\/>/g, '')
    .replace(/<meta name="twitter:[^>]+\/>/g, '')
    .replace(/<script type="application\/ld\+json">[\s\S]*?<\/script>/, '')
    .replace('</head>', `${head}</head>`);
}

for (const route of routes) {
  const html = applySeo(template, route).replace('<div id="root"></div>', `<div id="root">${render(route)}</div>`);
  const output = route === '/' ? resolve('dist/index.html') : resolve('dist', route.slice(1), 'index.html');
  await mkdir(dirname(output), { recursive: true });
  await writeFile(output, html, 'utf8');
}

await rm(resolve('dist/server'), { recursive: true, force: true });
console.log(`Prerendered ${routes.length} routes.`);
