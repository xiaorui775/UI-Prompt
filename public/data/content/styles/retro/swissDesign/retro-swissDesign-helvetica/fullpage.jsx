import React, { useState, useEffect } from 'react';
import { ArrowRight, Grid, Type, Layout, Menu, X, Circle, Square, Triangle } from 'lucide-react';

export default function SwissDesign() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('manifesto');

  // Smooth scroll handler
  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  // Swiss Design Color Palette
  const colors = {
    bg: 'bg-white',
    text: 'text-neutral-900',
    muted: 'text-neutral-500',
    accent: 'bg-[#FF3B30]', // Swiss Red
    accentText: 'text-[#FF3B30]',
    border: 'border-neutral-900',
    lightBorder: 'border-neutral-200'
  };

  return (
    <div className={`min-h-screen ${colors.bg} ${colors.text} font-sans selection:bg-[#FF3B30] selection:text-white`}>
      {/* GRID OVERLAY (Optional - visuals for "Grid System")
        Hidden by default, used conceptually in layout
      */}

      {/* NAVIGATION */}
      <nav className={`fixed top-0 left-0 w-full z-50 border-b-2 ${colors.border} bg-white/95 backdrop-blur-sm`}>
        <div className="max-w-[1920px] mx-auto grid grid-cols-12 h-16 sm:h-20 items-center px-4 sm:px-8">
          {/* Logo Area */}
          <div className="col-span-6 sm:col-span-3 flex items-center">
            <a href="#" className="text-2xl font-bold tracking-tighter hover:text-[#FF3B30] transition-colors duration-200 group flex items-center gap-2">
              <div className="w-4 h-4 bg-black group-hover:bg-[#FF3B30] transition-colors"></div>
              HELVETICA
            </a>
          </div>

          {/* Desktop Nav */}
          <div className="hidden sm:flex col-span-9 justify-between items-center pl-8 border-l border-neutral-200 h-full">
            <div className="flex gap-8 text-sm font-medium uppercase tracking-widest">
              {['Manifesto', 'Structure', 'Typography', 'Gallery'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollTo(item.toLowerCase())}
                  className="relative group py-2 focus:outline-none focus:ring-2 focus:ring-[#FF3B30] focus:ring-offset-2"
                >
                  <span className="group-hover:text-[#FF3B30] transition-colors">{item}</span>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FF3B30] group-hover:w-full transition-all duration-300 ease-out"></span>
                </button>
              ))}
            </div>
            <button className={`px-6 py-2 border border-black text-xs font-bold uppercase tracking-widest hover:bg-black hover:text-white transition-all duration-200 focus:ring-2 focus:ring-[#FF3B30] focus:ring-offset-2`}>
              Contact
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="sm:hidden col-span-6 flex justify-end">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 focus:outline-none focus:bg-neutral-100"
              aria-label="Toggle Menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-white pt-24 px-4 sm:hidden animate-fade-in">
          <div className="flex flex-col gap-6 text-2xl font-bold tracking-tight">
             {['Manifesto', 'Structure', 'Typography', 'Gallery'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollTo(item.toLowerCase())}
                  className="text-left py-4 border-b border-neutral-100 hover:text-[#FF3B30]"
                >
                  0{['Manifesto', 'Structure', 'Typography', 'Gallery'].indexOf(item) + 1} — {item}
                </button>
              ))}
          </div>
        </div>
      )}

      {/* MAIN CONTENT */}
      <main className="pt-16 sm:pt-20">

        {/* HERO SECTION */}
        <section id="manifesto" className="min-h-[90vh] flex flex-col justify-between border-b border-black relative overflow-hidden">
          {/* Background Grid Lines (Subtle) */}
          <div className="absolute inset-0 grid grid-cols-12 pointer-events-none opacity-10">
            {Array.from({ length: 12 }).map((_, i) => (
              <div key={i} className={`border-r border-black h-full ${i === 0 ? 'border-l' : ''}`}></div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-0 flex-grow">
            <div className="col-span-1 md:col-span-12 px-4 sm:px-8 pt-12 md:pt-24 pb-12 relative">
              <span className={`block text-xs font-bold uppercase tracking-[0.2em] ${colors.accentText} mb-4`}>
                International Typographic Style
              </span>
              <h1 className="text-6xl sm:text-8xl md:text-9xl font-black tracking-tighter leading-[0.9] text-black mix-blend-multiply">
                CLARITY<br />
                ORDER<br />
                <span className="text-stroke-black text-transparent hover:text-black transition-colors duration-500 cursor-default">TRUTH</span>
              </h1>
            </div>

            <div className="col-span-1 md:col-start-8 md:col-span-4 px-4 sm:px-8 pb-12 md:border-l md:border-black flex flex-col justify-end bg-white/80 backdrop-blur-sm">
              <p className="text-lg md:text-xl leading-relaxed font-medium text-neutral-800 mb-8 max-w-prose">
                Design is not just about making things look good. It is about objective communication. We remove the ornament to reveal the structure.
              </p>
              <div className="flex gap-4">
                <button className="w-12 h-12 border-2 border-black rounded-full flex items-center justify-center hover:bg-[#FF3B30] hover:border-[#FF3B30] hover:text-white transition-all duration-300 focus:ring-4 focus:ring-black/20">
                  <ArrowRight size={20} />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* STRUCTURE / GRID INFO */}
        <section id="structure" className="border-b border-black">
          <div className="grid grid-cols-1 md:grid-cols-12">

            {/* Sidebar Label */}
            <div className="col-span-1 md:col-span-3 border-b md:border-b-0 md:border-r border-black p-8 flex flex-col justify-between bg-neutral-50">
              <div className="flex items-center gap-2 text-[#FF3B30]">
                <Grid size={20} strokeWidth={2.5} />
                <span className="text-xs font-bold uppercase tracking-widest">The Grid</span>
              </div>
              <div className="mt-8 md:mt-0">
                <h2 className="text-3xl font-bold tracking-tight mb-4">Underlying<br/>Discipline</h2>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  The grid is the framework that organizes information. It provides consistency, rhythm, and clear hierarchy.
                </p>
              </div>
            </div>

            {/* Content Blocks */}
            <div className="col-span-1 md:col-span-9 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
              {[
                { title: 'Asymmetry', icon: <Triangle className="rotate-90" />, desc: 'Balance creates tension and interest without decoration.' },
                { title: 'Whitespace', icon: <Square />, desc: 'Negative space is an active element, not just emptiness.' },
                { title: 'Sans-Serif', icon: <Type />, desc: 'Typography as the primary voice of the interface.' },
              ].map((card, idx) => (
                <div
                  key={idx}
                  className={`p-8 border-b sm:border-b-0 ${idx !== 2 ? 'sm:border-r' : ''} border-neutral-200 hover:bg-neutral-50 transition-colors group cursor-pointer`}
                >
                  <div className="mb-12 text-neutral-400 group-hover:text-black transition-colors">
                    {card.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-[#FF3B30] transition-colors">{card.title}</h3>
                  <p className="text-sm text-neutral-500">{card.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TYPOGRAPHY SHOWCASE (Large visual break) */}
        <section id="typography" className="bg-black text-white border-b border-black py-24 px-4 sm:px-8">
          <div className="max-w-[1920px] mx-auto grid grid-cols-12 gap-8">
            <div className="col-span-12 md:col-span-4">
               <span className="block w-12 h-1 bg-[#FF3B30] mb-8"></span>
               <h2 className="text-4xl font-bold tracking-tight mb-4">Akzidenz<br/>Grotesk</h2>
               <p className="text-neutral-400 max-w-xs text-sm leading-relaxed">
                 Objective. Neutral. Legible. The typeface is the container of the message. It should not distract.
               </p>
            </div>

            <div className="col-span-12 md:col-span-8 grid grid-cols-2 gap-y-12 gap-x-8">
               <div className="border-t border-neutral-800 pt-4">
                 <span className="text-xs uppercase tracking-widest text-neutral-500 mb-2 block">Heading 1 / Bold</span>
                 <p className="text-5xl font-bold tracking-tight">Design is intelligence made visible.</p>
               </div>
               <div className="border-t border-neutral-800 pt-4">
                 <span className="text-xs uppercase tracking-widest text-neutral-500 mb-2 block">Heading 2 / Medium</span>
                 <p className="text-3xl font-medium tracking-tight">Good design is as little design as possible.</p>
               </div>
               <div className="border-t border-neutral-800 pt-4">
                 <span className="text-xs uppercase tracking-widest text-neutral-500 mb-2 block">Body / Regular</span>
                 <p className="text-base text-neutral-300 leading-relaxed">
                   Indifference towards people and the reality in which they live is actually the one and only cardinal sin in design.
                 </p>
               </div>
               <div className="border-t border-neutral-800 pt-4">
                 <span className="text-xs uppercase tracking-widest text-neutral-500 mb-2 block">Caption / Regular</span>
                 <p className="text-sm text-neutral-400">
                   Figure 1.2 — Dieter Rams
                 </p>
               </div>
            </div>
          </div>
        </section>

        {/* GALLERY / IMAGERY */}
        <section id="gallery" className="py-0">
          <div className="grid grid-cols-1 md:grid-cols-12 min-h-[600px]">
            {/* Large Image */}
            <div className="col-span-1 md:col-span-8 bg-neutral-100 relative group overflow-hidden border-b md:border-b-0 border-black">
              {/* Using a solid color block to represent minimalist imagery, or a grayscale placeholder */}
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1481277542470-605612bd2d61?q=80&w=2606&auto=format&fit=crop')] bg-cover bg-center grayscale contrast-125 group-hover:scale-105 transition-transform duration-700 ease-out"></div>
              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>

              <div className="absolute bottom-0 left-0 p-8 bg-white border-t border-r border-black max-w-sm">
                <span className="text-[#FF3B30] text-xs font-bold uppercase tracking-widest mb-1 block">Architecture</span>
                <h3 className="text-2xl font-bold tracking-tight">Form Follows Function</h3>
              </div>
            </div>

            {/* Smaller Stacked Images */}
            <div className="col-span-1 md:col-span-4 grid grid-rows-2 border-l border-black">
              <div className="relative border-b border-black overflow-hidden group min-h-[300px]">
                 <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1517260739337-6799d239ce83?q=80&w=2600&auto=format&fit=crop')] bg-cover bg-center grayscale hover:grayscale-0 transition-all duration-500"></div>
                 <div className="absolute top-0 right-0 p-4">
                   <div className="w-8 h-8 bg-white flex items-center justify-center rounded-full shadow-sm">
                     <ArrowRight size={14} />
                   </div>
                 </div>
              </div>
              <div className="p-8 flex flex-col justify-center bg-white">
                <span className="text-6xl font-black text-neutral-100 absolute right-8 select-none">04</span>
                <h3 className="text-xl font-bold mb-4 relative z-10">Minimal Objectivity</h3>
                <p className="text-sm text-neutral-600 mb-6 leading-relaxed relative z-10">
                  Photography should be factual. Avoid heavy retouching. Let the subject speak through composition and light.
                </p>
                <a href="#" className="inline-block text-xs font-bold uppercase tracking-widest border-b-2 border-[#FF3B30] pb-1 w-max hover:text-[#FF3B30] transition-colors relative z-10">
                  View Case Study
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* DATA / LIST SECTION */}
        <section className="border-t border-black bg-neutral-50 py-16 px-4 sm:px-8">
           <div className="max-w-[1920px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-y-8">
              <div className="col-span-1 md:col-span-3">
                <h3 className="text-sm font-bold uppercase tracking-widest mb-2">Specifications</h3>
                <div className="w-8 h-1 bg-black"></div>
              </div>
              <div className="col-span-1 md:col-span-9">
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="border-b-2 border-black">
                        <th className="py-4 pr-8 text-xs font-bold uppercase tracking-widest w-1/4">Year</th>
                        <th className="py-4 pr-8 text-xs font-bold uppercase tracking-widest w-1/4">Project</th>
                        <th className="py-4 pr-8 text-xs font-bold uppercase tracking-widest w-1/4">Location</th>
                        <th className="py-4 text-xs font-bold uppercase tracking-widest w-1/4">Type</th>
                      </tr>
                    </thead>
                    <tbody className="text-sm font-medium">
                      {[
                        { year: '1957', proj: 'Neue Haas Grotesk', loc: 'Münchenstein', type: 'Typography' },
                        { year: '1965', proj: 'Ulm School', loc: 'Ulm', type: 'Education' },
                        { year: '1972', proj: 'Olympic Identity', loc: 'Munich', type: 'Branding' },
                      ].map((row, idx) => (
                        <tr key={idx} className="border-b border-neutral-300 hover:bg-white transition-colors group">
                          <td className="py-4 pr-8 font-mono text-neutral-500 group-hover:text-[#FF3B30]">{row.year}</td>
                          <td className="py-4 pr-8">{row.proj}</td>
                          <td className="py-4 pr-8">{row.loc}</td>
                          <td className="py-4">{row.type}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
           </div>
        </section>

      </main>

      {/* FOOTER */}
      <footer className="bg-black text-white pt-16 pb-8 px-4 sm:px-8 border-t border-black">
        <div className="max-w-[1920px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">

          <div className="col-span-1 md:col-span-6 flex flex-col justify-between h-full">
            <div>
              <h2 className="text-3xl font-bold tracking-tight mb-8">Constructive<br/>Design</h2>
            </div>
            <div className="mt-8">
              <p className="text-neutral-500 text-sm max-w-sm">
                © 2024 International Style.<br/>
                All rights reserved. Strict adherence to the grid.
              </p>
            </div>
          </div>

          <div className="col-span-1 md:col-span-3">
             <h4 className="text-xs font-bold uppercase tracking-widest text-neutral-500 mb-6">Sitemap</h4>
             <ul className="space-y-3 text-sm font-medium">
               {['Home', 'Works', 'Studio', 'Philosophy', 'Contact'].map(link => (
                 <li key={link}>
                   <a href="#" className="hover:text-[#FF3B30] transition-colors flex items-center gap-2 group">
                     <span className="w-1 h-1 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                     {link}
                   </a>
                 </li>
               ))}
             </ul>
          </div>

          <div className="col-span-1 md:col-span-3">
             <h4 className="text-xs font-bold uppercase tracking-widest text-neutral-500 mb-6">Newsletter</h4>
             <div className="flex flex-col gap-4">
               <input
                 type="email"
                 placeholder="EMAIL ADDRESS"
                 className="bg-transparent border-b border-white/30 py-2 text-sm focus:outline-none focus:border-[#FF3B30] transition-colors placeholder:text-neutral-600"
               />
               <button className="text-left text-xs font-bold uppercase tracking-widest hover:text-[#FF3B30] transition-colors mt-2">
                 Subscribe →
               </button>
             </div>
          </div>

        </div>
      </footer>
    </div>
  );
};
