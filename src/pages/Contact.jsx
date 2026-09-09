import React, { useState, useEffect } from 'react';
import { Send, MessageSquare, Clock, Zap, ShieldCheck, Sparkles } from 'lucide-react';

export default function Contact() {
  const [form, setForm] = useState({ 
    name: '', 
    email: '', 
    message: "Bonjour José, je souhaite discuter d'un projet avec vous." 
  });
  const [status, setStatus] = useState('');
  const [time, setTime] = useState('');

  // ─── Horloge en temps réel pour Cotonou (GMT+1) ───
  useEffect(() => {
    const updateTime = () => {
      const options = {
        timeZone: 'Africa/Porto-Novo',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
      };
      setTime(new Intl.DateTimeFormat('fr-FR', options).format(new Date()));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // ─── Envoi E-mail via FormSubmit (API AJAX) ───
  const sendEmail = async (e) => {
    e.preventDefault();
    const name = form.name.trim();
    const email = form.email.trim();
    const message = form.message.trim();
    if (name.length < 2 || email.length < 5 || message.length < 10) {
      setStatus('Veuillez compléter les champs avec des informations valides.');
      return;
    }
    setStatus('Envoi en cours...');

    try {
      const response = await fetch("https://formsubmit.co/ajax/josenahounme@gmail.com", {
        method: "POST",
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name,
          email,
          message,
          _subject: "Nouveau message depuis le portfolio",
        })
      });

      if (response.ok) {
        setStatus('Message envoyé par E-mail avec succès ! 🎉');
        setForm({ name: '', email: '', message: '' });
      } else {
        setStatus("Erreur lors de l'envoi de l'email.");
      }
    } catch (error) {
      setStatus("Erreur lors de l'envoi de l'email.");
    }
  };

  // ─── Envoi WhatsApp ───
  const sendWhatsApp = () => {
    const text = `Nom: ${form.name}\nEmail: ${form.email}\nMessage: ${form.message}`;
    window.open(`https://wa.me/2290151370949?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#030014] text-slate-800 dark:text-white transition-colors duration-500 pb-20 pt-12">
      
      {/* Gradients de fond */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-20 left-1/4 w-80 h-80 bg-blue-500/10 dark:bg-blue-600/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-purple-500/10 dark:bg-purple-600/5 rounded-full blur-[140px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 space-y-12">
        
        {/* En-tête */}
        <div className="text-center space-y-3 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-blue-100 dark:bg-blue-500/10 text-blue-600 dark:text-blue-300 border border-blue-200 dark:border-blue-500/20">
            <Sparkles size={12} />
            ENTRONS EN CONTACT
          </div>
          <h1 className="text-4xl md:text-5xl font-black tracking-tight text-slate-900 dark:text-white">
            Un projet à <span className="bg-gradient-to-r from-blue-600 to-indigo-500 dark:from-blue-400 dark:to-cyan-400 bg-clip-text text-transparent">concrétiser</span> ?
          </h1>
          <p className="text-slate-500 dark:text-gray-400 max-w-lg mx-auto text-base">
            Envoyez-moi un message direct ou discutons instantanément sur WhatsApp.
          </p>
        </div>

        {/* Grille principale : Formulaire + Section d'engagement */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* ─── COLONNE GAUCHE : LE FORMULAIRE DE CONTACT (7 Cols) ─── */}
          <div className="lg:col-span-7 animate-fade-in-up">
            <form 
              onSubmit={sendEmail} 
              className="bg-white dark:bg-white/[0.01] backdrop-blur-xl p-8 rounded-3xl border border-slate-200 dark:border-white/5 space-y-6 shadow-xl"
            >
              <div className="space-y-1">
                <h2 className="text-xl font-bold text-slate-900 dark:text-white">Écrivez-moi un message</h2>
                <p className="text-xs text-slate-400 dark:text-gray-400">Remplissez les informations ci-dessous.</p>
              </div>

              {/* FormSubmit Configuration cachée */}
              <input type="hidden" name="_captcha" value="false" />

              <div className="space-y-4">
                {/* Champ Nom */}
                <div>
                  <label className="block text-xs font-semibold text-slate-600 dark:text-gray-300 uppercase tracking-wider mb-2">Nom complet</label>
                  <input 
                    type="text" 
                    name="name"
                    required 
                    minLength="2"
                    maxLength="80"
                    value={form.name} 
                    onChange={e => setForm({...form, name: e.target.value})}
                    placeholder="Ex: Jean Dupont"
                    className="w-full p-3.5 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50/50 dark:bg-white/[0.02] text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 dark:focus:border-blue-500/60 transition-all duration-200" 
                  />
                </div>

                {/* Champ Email */}
                <div>
                  <label className="block text-xs font-semibold text-slate-600 dark:text-gray-300 uppercase tracking-wider mb-2">Adresse E-mail</label>
                  <input 
                    type="email" 
                    name="email"
                    required 
                    maxLength="160"
                    value={form.email} 
                    onChange={e => setForm({...form, email: e.target.value})}
                    placeholder="Ex: jean.dupont@email.com"
                    className="w-full p-3.5 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50/50 dark:bg-white/[0.02] text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 dark:focus:border-blue-500/60 transition-all duration-200" 
                  />
                </div>

                {/* Champ Message */}
                <div>
                  <label className="block text-xs font-semibold text-slate-600 dark:text-gray-300 uppercase tracking-wider mb-2">Votre Message</label>
                  <textarea 
                    name="message"
                    rows="5" 
                    required
                    minLength="10"
                    maxLength="3000"
                    value={form.message} 
                    onChange={e => setForm({...form, message: e.target.value})}
                    placeholder="Décrivez votre besoin en détail..."
                    className="w-full p-3.5 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50/50 dark:bg-white/[0.02] text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 dark:focus:border-blue-500/60 transition-all duration-200 resize-none"
                  />
                </div>
              </div>

              {/* Boutons d'Action */}
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <button 
                  type="submit" 
                  className="flex-1 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:from-blue-500 hover:to-indigo-500 transition-all duration-300 shadow-md shadow-blue-500/20 hover:scale-[1.02]"
                >
                  <Send size={18} /> Envoyer par Email
                </button>
                <button 
                  type="button" 
                  onClick={sendWhatsApp} 
                  className="flex-1 py-4 bg-gradient-to-r from-emerald-600 to-green-500 text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:from-emerald-500 hover:to-green-400 transition-all duration-300 shadow-md shadow-emerald-500/20 hover:scale-[1.02]"
                >
                  <MessageSquare size={18} /> Discuter sur WhatsApp
                </button>
              </div>

              {status && (
                <div className="p-3 rounded-xl bg-blue-50 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/20 text-center text-sm font-semibold text-blue-600 dark:text-blue-300 animate-pulse">
                  {status}
                </div>
              )}
            </form>
          </div>

          {/* ─── COLONNE DROITE : STATUT LIVE & METHODOLOGIE (5 Cols) ─── */}
          <div className="lg:col-span-5 space-y-6 animate-fade-in-up delay-150">
            
            {/* Statut Live */}
            <div className="relative overflow-hidden rounded-3xl p-6 border border-slate-200 dark:border-white/5 bg-white dark:bg-white/[0.01] backdrop-blur-xl shadow-xl">
              <div className="absolute -right-10 -top-10 w-32 h-32 bg-blue-500/10 dark:bg-blue-500/5 rounded-full blur-2xl" />
              
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="space-y-1.5">
                  <span className="text-[10px] font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest">Statut en direct</span>
                  <div className="flex items-center gap-2.5">
                    <span className="relative flex h-3.5 w-3.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500"></span>
                    </span>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">Disponible</h3>
                  </div>
                </div>
                
                {/* Horloge de Cotonou */}
                <div className="p-3 rounded-2xl bg-slate-100 dark:bg-white/5 border border-slate-200/50 dark:border-white/5 flex items-center gap-3">
                  <Clock size={18} className="text-blue-500 dark:text-cyan-400" />
                  <div>
                    <p className="text-[9px] uppercase text-slate-500 dark:text-gray-400 tracking-wider">Cotonou, Bénin</p>
                    <p className="text-xs font-mono font-bold text-slate-800 dark:text-slate-200">{time || '00:00:00'}</p>
                  </div>
                </div>
              </div>

              <div className="my-5 h-[1px] bg-slate-200 dark:bg-white/5" />

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <p className="text-xs text-slate-500 dark:text-gray-400">Temps de réponse</p>
                  <p className="text-sm font-bold text-slate-800 dark:text-slate-200 flex items-center gap-1.5">
                    <Zap size={14} className="text-yellow-500" /> Moins de 24h
                  </p>
                </div>
                <div className="space-y-1">
                  <p className="text-xs text-slate-500 dark:text-gray-400">Accompagnement</p>
                  <p className="text-sm font-bold text-slate-800 dark:text-slate-200 flex items-center gap-1.5">
                    <ShieldCheck size={14} className="text-blue-500" /> Clé en main
                  </p>
                </div>
              </div>
            </div>

            {/* Méthodologie */}
            <div className="rounded-3xl p-6 border border-slate-200 dark:border-white/5 bg-white dark:bg-white/[0.01] backdrop-blur-xl shadow-xl space-y-6">
              <div>
                <span className="text-[10px] font-bold text-purple-600 dark:text-purple-400 uppercase tracking-widest">Ma Méthodologie</span>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mt-1">Comment nous allons collaborer</h3>
              </div>

              <div className="space-y-4">
                {/* Étape 1 */}
                <div className="group flex gap-4 p-3 rounded-2xl transition-colors hover:bg-slate-100 dark:hover:bg-white/[0.02]">
                  <div className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 font-bold flex items-center justify-center border border-blue-200 dark:border-blue-500/25 text-sm">
                    1
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors">Design graphique</h4>
                    <p className="text-xs text-slate-500 dark:text-gray-400 leading-relaxed">
                      Conception d'identités visuelles percutantes, chartes graphiques et interfaces créatives uniques.
                    </p>
                  </div>
                </div>

                {/* Étape 2 */}
                <div className="group flex gap-4 p-3 rounded-2xl transition-colors hover:bg-slate-100 dark:hover:bg-white/[0.02]">
                  <div className="flex-shrink-0 w-9 h-9 rounded-xl bg-indigo-100 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 font-bold flex items-center justify-center border border-indigo-200 dark:border-indigo-500/25 text-sm">
                    2
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">Frontend</h4>
                    <p className="text-xs text-slate-500 dark:text-gray-400 leading-relaxed">
                      Intégration d'interfaces web réactives (mobile, tablette, PC) et d'animations fluides avec React et Tailwind CSS.
                    </p>
                  </div>
                </div>

                {/* Étape 3 */}
                <div className="group flex gap-4 p-3 rounded-2xl transition-colors hover:bg-slate-100 dark:hover:bg-white/[0.02]">
                  <div className="flex-shrink-0 w-9 h-9 rounded-xl bg-purple-100 dark:bg-purple-500/10 text-purple-600 dark:text-purple-400 font-bold flex items-center justify-center border border-purple-200 dark:border-purple-500/25 text-sm">
                    3
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">Backend</h4>
                    <p className="text-xs text-slate-500 dark:text-gray-400 leading-relaxed">
                      Mise en place de bases de données sécurisées, gestion des API, configuration serveur et mise en ligne globale.
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}