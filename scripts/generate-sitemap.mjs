import { mkdir, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import { blogArticles } from '../src/data/blog.js';

const base = 'https://josenahounme.com';
const urls = [
  '/',
  '/about',
  '/portfolio',
  '/contact',
  '/blog',
  ...blogArticles.map((article) => `/blog/${article.slug}`),
];
const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((url) => `  <url><loc>${base}${url}</loc><changefreq>${url.startsWith('/blog/') ? 'monthly' : 'weekly'}</changefreq><priority>${url === '/' ? '1.0' : url === '/blog' ? '0.9' : '0.7'}</priority></url>`).join('\n')}
</urlset>
`;

await mkdir(resolve('public'), { recursive: true });
await writeFile(resolve('public/sitemap.xml'), xml, 'utf8');
console.log(`Generated sitemap with ${urls.length} URLs.`);
