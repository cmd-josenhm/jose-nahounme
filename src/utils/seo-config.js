import { blogArticles, getArticle } from '../data/blog.js';
import { webProjects } from '../data/projects.js';

export const SITE_URL = 'https://josenahounme.com';
export const DEFAULT_IMAGE = '/profil.png';
export const SITE_NAME = 'José Nahounmè — Développeur web et designer au Bénin';

const person = {
  '@type': 'Person',
  '@id': `${SITE_URL}/#person`,
  name: 'José Nahounmè',
  url: SITE_URL,
  jobTitle: 'Développeur web et designer',
  image: `${SITE_URL}${DEFAULT_IMAGE}`,
  address: { '@type': 'PostalAddress', addressLocality: 'Cotonou', addressCountry: 'BJ' },
  sameAs: [
    'https://www.linkedin.com/in/jos%C3%A9-nahounme-5a7955280/',
    'https://www.instagram.com/iam_frejusjose',
    'https://web.facebook.com/people/Fr%C3%A9jus-Jos%C3%A9/100093818179725/',
  ],
};

const base = {
  description: 'José Nahounmè accompagne les entrepreneurs et PME au Bénin avec des sites web performants, du SEO local et des identités visuelles utiles.',
  keywords: 'développeur web Bénin, création site web Cotonou, SEO local Bénin, designer graphique Cotonou, digitalisation PME',
};

export function getSeo(pathname) {
  const path = pathname.replace(/\/+$/, '') || '/';
  const article = path.startsWith('/blog/') ? getArticle(path.slice('/blog/'.length)) : null;
  let seo = { ...base, title: SITE_NAME, path, type: 'website', image: DEFAULT_IMAGE };

  if (path === '/') {
    seo = { ...seo, title: 'Développeur web à Cotonou | Sites web et SEO au Bénin', description: 'José Nahounmè crée des sites web rapides, des identités visuelles et des stratégies SEO pour aider les entreprises du Bénin à gagner en visibilité et en clients.', keywords: 'développeur web Cotonou, création site web Bénin, freelance web Bénin, SEO local Cotonou, designer web', structuredData: { '@context': 'https://schema.org', '@graph': [person, { '@type': 'WebSite', '@id': `${SITE_URL}/#website`, name: SITE_NAME, url: SITE_URL, inLanguage: 'fr-BJ', publisher: { '@id': `${SITE_URL}/#person` } }] } };
  } else if (path === '/about') {
    seo = { ...seo, title: 'À propos de José Nahounmè | Designer et développeur web au Bénin', description: 'Découvrez le parcours, les compétences et l’approche de José Nahounmè, designer graphique et développeur web basé à Cotonou, au Bénin.', keywords: 'à propos José Nahounmè, développeur web Cotonou, designer graphique Bénin, compétences React UI UX', structuredData: { '@context': 'https://schema.org', '@type': 'ProfilePage', name: seo.title, url: `${SITE_URL}/about`, mainEntity: person, inLanguage: 'fr-BJ' } };
  } else if (path === '/portfolio') {
    seo = { ...seo, title: 'Portfolio web et design | Projets de José Nahounmè', description: 'Consultez les projets web, applications et expériences digitales réalisés par José Nahounmè pour des marques et entreprises.', keywords: 'portfolio développeur web Bénin, projets React, création application web Cotonou, design UI UX', structuredData: { '@context': 'https://schema.org', '@type': 'CollectionPage', name: seo.title, description: seo.description, url: `${SITE_URL}/portfolio`, inLanguage: 'fr-BJ', mainEntity: { '@type': 'ItemList', numberOfItems: webProjects.length, itemListElement: webProjects.map((project, index) => ({ '@type': 'ListItem', position: index + 1, name: project.title, url: project.link })) } } };
  } else if (path === '/contact') {
    seo = { ...seo, title: 'Contact | Création de site web et SEO au Bénin', description: 'Parlez de votre site web, identité visuelle ou stratégie digitale avec José Nahounmè. Réponse sous 24 heures depuis Cotonou.', keywords: 'contacter développeur web Bénin, devis site web Cotonou, freelance digital Bénin', structuredData: { '@context': 'https://schema.org', '@type': 'ContactPage', name: seo.title, url: `${SITE_URL}/contact`, inLanguage: 'fr-BJ', mainEntity: person } };
  } else if (path === '/blog') {
    seo = { ...seo, title: 'Blog digital au Bénin | SEO, web, data et digitalisation', description: 'Guides pratiques au Bénin sur le développement web, le SEO local, la data, la cybersécurité et la digitalisation des entreprises.', keywords: 'blog digital Bénin, SEO local Cotonou, développement web Bénin, data, cybersécurité, digitalisation PME', structuredData: { '@context': 'https://schema.org', '@type': 'CollectionPage', name: seo.title, description: seo.description, url: `${SITE_URL}/blog`, inLanguage: 'fr-BJ', mainEntity: { '@type': 'ItemList', numberOfItems: blogArticles.length, itemListElement: blogArticles.map((item, index) => ({ '@type': 'ListItem', position: index + 1, name: item.title, url: `${SITE_URL}/blog/${item.slug}` })) } } };
  } else if (article) {
    seo = { ...seo, title: `${article.title} | Blog José Nahounmè`, description: article.excerpt, keywords: article.keywords, type: 'article', structuredData: { '@context': 'https://schema.org', '@type': 'Article', headline: article.title, description: article.excerpt, datePublished: article.date, dateModified: article.date, inLanguage: 'fr-BJ', author: person, publisher: person, keywords: article.keywords, articleSection: article.category, wordCount: article.paragraphs.join(' ').split(/\s+/).length, mainEntityOfPage: `${SITE_URL}${path}`, image: `${SITE_URL}${DEFAULT_IMAGE}`, breadcrumb: { '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Accueil', item: SITE_URL }, { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE_URL}/blog` }, { '@type': 'ListItem', position: 3, name: article.title, item: `${SITE_URL}${path}` }] } } };
  }

  return seo;
}
