import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Blog from './pages/blog';
import Article from './pages/Article';
import Analytics from './components/Analytics';
import { addStructuredData, updateMeta } from './utils/seo';
import { getSeo } from './utils/seo-config';

function RouteSeo() {
  const { pathname } = useLocation();

  React.useEffect(() => {
    const seo = getSeo(pathname);
    updateMeta(seo);
    if (!seo.structuredData) return undefined;
    return addStructuredData(seo.structuredData);
  }, [pathname]);

  return null;
}

export function AppContent() {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-slate-900 transition-colors duration-300">
      <Analytics />
      <RouteSeo />
      <Navbar />
      <main className="site-main flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<Article />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}