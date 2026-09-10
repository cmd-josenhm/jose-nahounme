import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Search, Tag } from 'lucide-react';
import { blogArticles } from '../data/blog';

const categories = ['Tous', ...new Set(blogArticles.map((article) => article.category))];

export default function Blog() {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('Tous');

  const filteredArticles = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    return blogArticles.filter((article) => {
      const matchesCategory = category === 'Tous' || article.category === category;
      const matchesQuery = !normalizedQuery
        || `${article.title} ${article.excerpt} ${article.keywords}`.toLowerCase().includes(normalizedQuery);
      return matchesCategory && matchesQuery;
    });
  }, [category, query]);

  return (
    <div className="blog-page min-h-screen pb-24 pt-12">
      <header className="blog-hero mx-auto max-w-7xl px-6 py-16 md:py-24">
        <p className="blog-kicker">Le journal numérique de José Nahounmè</p>
        <h1>Comprendre le digital.<br /><span>Agir localement.</span></h1>
        <p className="blog-lead">
          100 guides pratiques pour développer votre présence numérique, améliorer votre
          visibilité et accélérer la digitalisation des projets au Bénin et en Afrique de l’Ouest.
        </p>
        <div className="blog-stats" aria-label="Statistiques du blog">
          <strong>{blogArticles.length}</strong><span>articles de référence</span>
          <strong>SEO</strong><span>contenus actionnables</span>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-6" aria-label="Explorer les articles">
        <div className="blog-toolbar">
          <label className="blog-search">
            <Search size={18} aria-hidden="true" />
            <span className="sr-only">Rechercher un article</span>
            <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Rechercher un sujet..." />
          </label>
          <div className="blog-filters" aria-label="Filtrer par catégorie">
            {categories.map((item) => (
              <button type="button" key={item} onClick={() => setCategory(item)} className={category === item ? 'active' : ''}>
                {item}
              </button>
            ))}
          </div>
        </div>

        <p className="blog-result-count">{filteredArticles.length} article{filteredArticles.length > 1 ? 's' : ''} à découvrir</p>
        <div className="blog-grid">
          {filteredArticles.map((article) => (
            <article className="blog-card" key={article.id}>
              <div className="blog-card-top">
                <span className="blog-category"><Tag size={13} /> {article.category}</span>
                <time dateTime={article.date}>{article.readTime}</time>
              </div>
              <h2><Link to={`/blog/${article.slug}`}>{article.title}</Link></h2>
              <p>{article.excerpt}</p>
              <div className="blog-card-bottom">
                <span>Guide pratique #{String(article.id).padStart(2, '0')}</span>
                <Link to={`/blog/${article.slug}`} aria-label={`Lire ${article.title}`}>Lire <ArrowRight size={16} /></Link>
              </div>
            </article>
          ))}
        </div>
        {filteredArticles.length === 0 && <p className="blog-empty">Aucun article ne correspond à cette recherche.</p>}
      </section>
    </div>
  );
}
