import React from 'react';
import { Linkedin, Instagram, Facebook, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return <footer className="site-footer"><div className="footer-top"><Link to="/" className="brand"><img src="/logo.svg" alt="" /><span>JOSÉ <b>/ DEV</b></span></Link><p>Design, code &amp; idées utiles<br />depuis Cotonou.</p><a className="whatsapp-float" href="https://wa.me/2290151370949" target="_blank" rel="noreferrer" aria-label="Contacter José sur WhatsApp"><MessageCircle size={20} /><span>WhatsApp</span></a></div><div className="footer-bottom"><span>© {new Date().getFullYear()} José Nahounmè</span><div><a href="https://www.linkedin.com/in/jos%C3%A9-nahounme-5a7955280/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={16} /></a><a href="https://www.instagram.com/iam_frejusjose" target="_blank" rel="noreferrer" aria-label="Instagram"><Instagram size={16} /></a><a href="https://web.facebook.com/people/Fr%C3%A9jus-Jos%C3%A9/100093818179725/" target="_blank" rel="noreferrer" aria-label="Facebook"><Facebook size={16} /></a></div></div></footer>;
}
