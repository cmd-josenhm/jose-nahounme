import React from 'react';
import { Palette, Code, MapPin, Sparkles, GraduationCap, Briefcase } from 'lucide-react';

export default function About() {
  // Listes des compétences pour générer de superbes badges interactifs
  const graphicSkills = ['Photoshop', 'Illustrator', 'Canva', 'Charte Graphique', 'UI/UX', 'Mockups', 'Identité Visuelle'];
  const devSkills = ['HTML5', 'CSS3', 'JavaScript', 'React', 'Vue.js', 'Node.js', 'PHP', 'MySQL', 'MongoDB', 'WordPress', 'Wix', 'Shopify'];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#030014] text-slate-800 dark:text-slate-100 transition-colors duration-300 pb-20">
      
      {/* Gradients d'ambiance en arrière-plan (S'adaptent au mode clair/sombre) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 dark:bg-blue-600/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-40 right-10 w-96 h-96 bg-indigo-500/10 dark:bg-purple-600/5 rounded-full blur-[130px]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 py-16 space-y-16">
        
        {/* ─── SECTION 1 : PRÉSENTATION DE TOI ─── */}
        <div className="flex flex-col md:flex-row items-center gap-12 animate-fade-in-up">
          
          {/* Photo de profil animée */}
          <div className="relative group flex-shrink-0 animate-float">
            {/* Lueur arrière-plan magique (sombre: violet/bleu, clair: bleu/cyan) */}
            <div className="absolute -inset-1 rounded-[2.2rem] bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 opacity-40 blur-md group-hover:opacity-75 transition duration-500" />
            
            <div className="relative p-2 bg-white dark:bg-[#09051f]/80 backdrop-blur-md rounded-[2rem] border border-slate-200/60 dark:border-white/10 shadow-xl">
              <img 
                src="/profile.jpeg" 
                alt="José Nahounmè" 
                onError={(e) => { e.target.src = "https://placehold.co/300x300/2563eb/FFFFFF?text=Profil+PNG"; }}
                className="w-64 h-64 md:w-72 md:h-72 object-cover rounded-[1.6rem] transition-transform duration-500 group-hover:scale-[1.02]"
              />
            </div>
            
            {/* Déco Techno */}
            <div className="absolute -top-1 -left-1 w-5 h-5 border-t-2 border-l-2 border-blue-500 rounded-tl-lg" />
            <div className="absolute -bottom-1 -right-1 w-5 h-5 border-b-2 border-r-2 border-purple-500 rounded-br-lg" />
          </div>

          {/* Texte de présentation */}
          <div className="space-y-6 text-center md:text-left flex-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-blue-100 dark:bg-blue-500/10 text-blue-600 dark:text-blue-300 border border-blue-200 dark:border-blue-500/20">
              <Sparkles size={12} className="animate-pulse" />
              CONCEPTEUR VISUEL & TECHNIQUE
            </div>

            <h1 className="text-4xl md:text-5xl font-black tracking-tight text-slate-900 dark:text-white">
              À Propos de <span className="bg-gradient-to-r from-blue-600 to-indigo-500 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent">moi</span>
            </h1>

            <div className="space-y-4 text-slate-600 dark:text-gray-300 text-lg leading-relaxed font-light">
              <p>
                Je suis <strong className="font-semibold text-slate-900 dark:text-white">José Nahounmè</strong>, basé à Akpakpa (Bénin). Expert polyvalent en Design Graphique et Développement Web Frontend.
              </p>
              <p>
                J'accompagne les entreprises et les particuliers dans la création d'identités visuelles percutantes et le déploiement de plateformes web sur-mesure de haute performance.
              </p>
              <p className="font-normal text-blue-600 dark:text-cyan-400 flex items-center justify-center md:justify-start gap-2 text-base">
                <MapPin size={18} className="animate-bounce" /> Akpakpa, Cotonou, Bénin
              </p>
            </div>
          </div>
        </div>

        {/* ─── SECTION 2 : COMPÉTENCES (STYLE CARDS NÉONS) ─── */}
        <div className="space-y-8 pt-8 animate-fade-in-up delay-150">
          <div className="text-center md:text-left space-y-2">
            <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white flex items-center justify-center md:justify-start gap-3">
              Mes Compétences
            </h2>
            <p className="text-sm text-slate-500 dark:text-gray-400">Les technologies et outils que je maîtrise au quotidien.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Carte Graphisme */}
            <div className="group p-8 bg-white dark:bg-white/[0.01] backdrop-blur-md rounded-2xl border border-slate-200/80 dark:border-white/5 shadow-md
                            hover:border-blue-500/30 dark:hover:border-blue-500/30 hover:shadow-xl dark:hover:shadow-[0_0_30px_rgba(59,130,246,0.1)] transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-blue-100 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 rounded-xl">
                  <Palette size={24} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">Design Graphique</h3>
              </div>
              
              {/* Badges */}
              <div className="flex flex-wrap gap-2">
                {graphicSkills.map((skill, index) => (
                  <span 
                    key={index}
                    className="px-3.5 py-1.5 text-xs font-medium rounded-lg border transition-all duration-200
                               bg-slate-100/80 dark:bg-white/[0.03] text-slate-600 dark:text-slate-300 border-slate-200/60 dark:border-white/5
                               hover:bg-blue-500 hover:text-white dark:hover:bg-blue-600 hover:scale-105 hover:shadow-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Carte Dev Web */}
            <div className="group p-8 bg-white dark:bg-white/[0.01] backdrop-blur-md rounded-2xl border border-slate-200/80 dark:border-white/5 shadow-md
                            hover:border-indigo-500/30 dark:hover:border-indigo-500/30 hover:shadow-xl dark:hover:shadow-[0_0_30px_rgba(99,102,241,0.1)] transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-indigo-100 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 rounded-xl">
                  <Code size={24} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">Développement Web</h3>
              </div>
              
              {/* Badges */}
              <div className="flex flex-wrap gap-2">
                {devSkills.map((skill, index) => (
                  <span 
                    key={index}
                    className="px-3.5 py-1.5 text-xs font-medium rounded-lg border transition-all duration-200
                               bg-slate-100/80 dark:bg-white/[0.03] text-slate-600 dark:text-slate-300 border-slate-200/60 dark:border-white/5
                               hover:bg-indigo-500 hover:text-white dark:hover:bg-indigo-600 hover:scale-105 hover:shadow-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}