const SITE_URL = 'https://josenahounme.com';

export const updateMeta = ({ title, description, keywords, path, type = 'website', image = '/profil.png' }) => {
  const canonicalUrl = `${SITE_URL}${path}`;
  document.title = title;
  const values = {
    description,
    keywords,
    'og:title': title,
    'og:description': description,
    'og:url': canonicalUrl,
    'og:type': type,
    'og:image': `${SITE_URL}${image}`,
    'twitter:title': title,
    'twitter:description': description,
    'twitter:image': `${SITE_URL}${image}`,
    'og:image:alt': `${title} — José Nahounmè`,
    'twitter:image:alt': `${title} — José Nahounmè`,
  };
  Object.entries(values).forEach(([name, content]) => {
    const selector = name.startsWith('og:') || name.startsWith('twitter:') ? `meta[property="${name}"]` : `meta[name="${name}"]`;
    const meta = document.querySelector(selector);
    meta?.setAttribute('content', content);
  });
  document.querySelector('link[rel="canonical"]')?.setAttribute('href', canonicalUrl);
};

export const addStructuredData = (data) => {
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.dataset.seo = 'true';
  script.textContent = JSON.stringify(data);
  document.head.appendChild(script);
  return () => script.remove();
};

export { SITE_URL };
