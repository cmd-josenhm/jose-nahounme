import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight, Clock, Mail, Share2 } from 'lucide-react';
import { getArticle } from '../data/blog';

export default function Article() {
  const { slug } = useParams();
  const article = getArticle(slug);

  if (!article) {
    return <div className="blog-page blog-empty-page"><h1>Article introuvable</h1><Link to="/blog">Retour au blog</Link></div>;
  }

  const mailSubject = encodeURIComponent(`Commentaire sur : ${article.title}`);
  const mailBody = encodeURIComponent(`Bonjour José,\n\nMon commentaire sur « ${article.title} » :\n\n`);

  return (
    <article className="article-page min-h-screen pb-24 pt-12">
      <div className="mx-auto max-w-4xl px-6">
        <Link className="article-back" to="/blog"><ArrowLeft size={16} /> Tous les articles</Link>
        <header className="article-header">
          <span className="blog-kicker">{article.category}</span>
          <h1>{article.title}</h1>
          <p className="article-excerpt">{article.excerpt}</p>
          <div className="article-meta"><time dateTime={article.date}>{new Date(article.date).toLocaleDateString('fr-FR', { dateStyle: 'long' })}</time><span><Clock size={15} /> {article.readTime} de lecture</span></div>
        </header>

        <div className="article-layout">
          <div className="article-content">
            {article.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            <h2>À retenir pour votre projet</h2>
            <ul>{article.checklist.map((item) => <li key={item}>{item}</li>)}</ul>
            <p>La qualité d’un projet numérique se mesure à sa capacité à servir une personne réelle. Testez votre parcours avec des utilisateurs, améliorez une priorité à la fois et gardez une documentation simple à transmettre.</p>
            <aside className="article-sources">
              <strong>Pour aller plus loin</strong>
              {article.sources.map((source) => <a href={source.url} target="_blank" rel="noopener noreferrer" key={source.url}>{source.label} <ArrowUpRight size={14} /></a>)}
            </aside>
          </div>
          <aside className="article-aside">
            <div><span>Mots-clés SEO</span><p>{article.keywords}</p></div>
            <div><span>Partager</span><button type="button" onClick={() => navigator.share?.({ title: article.title, url: window.location.href })}><Share2 size={16} /> Partager l’article</button></div>
          </aside>
        </div>

        <section className="comment-box" aria-labelledby="comment-title">
          <div><Mail size={22} /><div><h2 id="comment-title">Votre avis compte</h2><p>Une question ou une précision ? Écrivez directement à José, sans création de compte.</p></div></div>
          <a href={`mailto:josenahounme@gmail.com?subject=${mailSubject}&body=${mailBody}`}>Laisser un commentaire <ArrowUpRight size={16} /></a>
        </section>
      </div>
    </article>
  );
}
