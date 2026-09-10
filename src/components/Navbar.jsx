import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, Moon, Sun, X } from 'lucide-react';

const links = [
  { name: 'Accueil', path: '/' },
  { name: 'À propos', path: '/about' },
  { name: 'Projets', path: '/portfolio' },
  { name: 'Journal', path: '/blog' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const location = useLocation();
  const [darkMode, setDarkMode] = useState(() => typeof window !== 'undefined' && window.localStorage.getItem('theme') === 'dark');
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => setOpen(false), [location.pathname]);

  return (
    <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
      <nav className="site-nav" aria-label="Navigation principale">
        <Link to="/" className="brand" aria-label="José Nahounmè, accueil">
          <img src="/logo.svg" alt="" />
          <span>JOSÉ <b>/ DEV</b></span>
        </Link>
        <div className={`nav-links ${open ? 'is-open' : ''}`}>
          {links.map((link) => <Link className={location.pathname === link.path ? 'active' : ''} to={link.path} key={link.path}>{link.name}</Link>)}
        </div>
        <div className="nav-actions">
          <button type="button" className="theme-toggle" onClick={() => setDarkMode((value) => !value)} aria-label="Changer de thème">
            {darkMode ? <Sun size={17} /> : <Moon size={17} />}
          </button>
          <button type="button" className="menu-toggle" onClick={() => setOpen((value) => !value)} aria-expanded={open} aria-label="Ouvrir le menu">
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>
    </header>
  );
}
