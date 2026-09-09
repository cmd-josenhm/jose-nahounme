import React from 'react';
import { ArrowDownRight, ArrowRight, ExternalLink, Layers3, Mail, Palette, Rocket, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { blogArticles } from '../data/blog';
import { webProjects } from '../data/projects';

export default function Home() {
  return (
    <div className="home-page">
      <section className="hero-new">
        <div className="hero-copy">
          <p className="eyebrow"><span /> Disponible pour de nouveaux projets</p>
          <h1>Le digital,<br /><em>plus humain.</em></h1>
          <p className="hero-intro">Je conçois des identités visuelles et des expériences web rapides, utiles et mémorables pour les marques qui veulent avancer.</p>
          <div className="hero-actions">
            <Link className="button button-primary" to="/contact">Parlons de votre projet <ArrowRight size={17} /></Link>
            <Link className="text-link" to="/portfolio">Voir mes réalisations <ArrowDownRight size={17} /></Link>
          </div>
          <div className="hero-proof"><strong>01</strong><span>Design & développement<br />depuis Cotonou, Bénin</span></div>
        </div>
        <div className="hero-visual">
          <div className="hero-orbit orbit-one" /><div className="hero-orbit orbit-two" />
          <div className="hero-image-wrap"><img src="/profil.png" alt="José Nahounmè, designer et développeur web au Bénin" fetchPriority="high" /></div>
          <div className="hero-note"><span>JN</span><p>Créateur<br />numérique</p></div>
          <div className="hero-index">© 2026<br />Cotonou / BJ</div>
        </div>
      </section>

      <section className="home-strip"><span>IDENTITÉ VISUELLE</span><i /> <span>DÉVELOPPEMENT WEB</span><i /> <span>STRATÉGIE DIGITALE</span><i /> <span>IDENTITÉ VISUELLE</span></section>

      <section className="home-section services-preview">
        <div className="section-heading">
          <div><p className="eyebrow">Un accompagnement complet</p><h2>Une présence digitale<br /><em>qui travaille pour vous.</em></h2></div>
          <p className="section-lead">De la première idée à la mise en ligne, chaque choix sert votre visibilité, votre crédibilité et vos objectifs.</p>
        </div>
        <div className="service-grid">
          <article className="service-card"><span className="service-number">01</span><Palette size={25} /><h3>Identité & direction artistique</h3><p>Une image cohérente et reconnaissable pour donner du relief à votre marque.</p><Link className="text-link" to="/contact">Construire votre image <ArrowRight size={15} /></Link></article>
          <article className="service-card service-card-featured"><span className="service-number">02</span><Layers3 size={25} /><h3>Sites web & expériences</h3><p>Des interfaces rapides, accessibles et pensées pour transformer les visites en opportunités.</p><Link className="text-link" to="/portfolio">Voir les réalisations <ArrowRight size={15} /></Link></article>
          <article className="service-card"><span className="service-number">03</span><Sparkles size={25} /><h3>Stratégie digitale</h3><p>Un accompagnement concret pour mieux raconter, publier et développer votre activité.</p><Link className="text-link" to="/blog">Lire le journal <ArrowRight size={15} /></Link></article>
        </div>
      </section>

      <section className="home-section process-preview">
        <div className="process-intro"><p className="eyebrow">Une méthode simple</p><h2>Du brief à la<br /><em>mise en ligne.</em></h2><p>Un cadre clair, des échanges directs et des livrables utiles. Vous savez toujours où en est votre projet.</p><Link className="button button-primary" to="/contact">Parler de votre besoin <ArrowRight size={17} /></Link></div>
        <div className="process-steps">
          <div className="process-step"><span>01</span><div><h3>Écouter</h3><p>Comprendre votre activité, votre public et la vraie priorité du projet.</p></div></div>
          <div className="process-step"><span>02</span><div><h3>Concevoir</h3><p>Transformer la stratégie en une direction claire, belle et facile à utiliser.</p></div></div>
          <div className="process-step"><span>03</span><div><h3>Déployer</h3><p>Mettre en ligne une solution propre, performante et prête à évoluer.</p></div></div>
        </div>
      </section>

      <section className="home-proof-band">
        <div><strong>100%</strong><span>projets pensés<br />pour vos objectifs</span></div>
        <div><strong>Cotonou</strong><span>une expertise locale<br />ouverte sur le monde</span></div>
        <div><strong>2026</strong><span>des solutions actuelles<br />et durables</span></div>
        <div className="proof-note"><Rocket size={20} /><span>Prêt à faire passer votre présence digitale au niveau supérieur&nbsp;?</span><Link to="/contact">Démarrer <ArrowRight size={15} /></Link></div>
      </section>

      <section className="home-section projects-preview">
        <div className="section-heading"><div><p className="eyebrow">Sélection récente</p><h2>Des projets qui<br /><em>font la différence.</em></h2></div><Link className="text-link" to="/portfolio">Tout le portfolio <ArrowRight size={16} /></Link></div>
        <div className="project-grid">
          {webProjects.slice(0, 3).map((project, index) => <Link className={`project-tile tile-${index + 1}`} to="/portfolio" key={project.id}>
            <div className="project-image"><img src={project.image} alt={project.title} loading="lazy" /><span>{String(index + 1).padStart(2, '0')}</span></div>
            <div className="project-info"><div><p>{project.category}</p><h3>{project.title}</h3></div><ExternalLink size={17} /></div>
          </Link>)}
        </div>
      </section>

      <section className="home-section journal-preview">
        <div className="section-heading"><div><p className="eyebrow">Le journal</p><h2>Des idées pour<br /><em>aller plus loin.</em></h2></div><Link className="text-link" to="/blog">Explorer le journal <ArrowRight size={16} /></Link></div>
        <div className="journal-list">{blogArticles.slice(0, 3).map((article) => <Link to={`/blog/${article.slug}`} className="journal-row" key={article.id}><span>{String(article.id).padStart(2, '0')}</span><div><p>{article.category} · {article.readTime}</p><h3>{article.title}</h3></div><ArrowRight size={19} /></Link>)}</div>
      </section>

      <section className="home-cta"><p className="eyebrow">Une idée en tête ?</p><h2>Faisons-la<br /><em>exister.</em></h2><Link className="button button-light" to="/contact"><Mail size={17} /> Démarrer une conversation</Link></section>
    </div>
  );
}
