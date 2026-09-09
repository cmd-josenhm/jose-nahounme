import React from 'react';
import { ArrowUpRight, CheckCircle } from 'lucide-react';
import { webProjects } from '../data/projects';

export default function Portfolio() {
  return <div className="portfolio-page"><header className="page-intro"><p className="eyebrow">Travail sélectionné</p><h1>Des expériences<br /><em>faites pour durer.</em></h1><p>Sites web, identités et interfaces conçus avec une attention particulière portée au détail, à la performance et aux résultats.</p></header>
    <main className="portfolio-grid">{webProjects.map((project, index) => <article className="portfolio-card" key={project.id}><div className="portfolio-cover"><img src={project.image} alt={project.title} loading="lazy" /><span>{String(index + 1).padStart(2, '0')}</span></div><div className="portfolio-body"><div className="portfolio-meta"><span>{project.category}</span><time>{project.year}</time></div><h2>{project.title}</h2><p>{project.description}</p>{project.features && <ul>{project.features.slice(0, 4).map((feature) => <li key={feature}><CheckCircle size={14} />{feature}</li>)}</ul>}<div className="portfolio-footer"><div className="tech-list">{project.technologies?.slice(0, 4).map((tech) => <span key={tech}>{tech}</span>)}</div><a href={project.link} target="_blank" rel="noopener noreferrer" aria-label={`Visiter ${project.title}`}><ArrowUpRight size={19} /></a></div></div></article>)}</main>
  </div>;
}
