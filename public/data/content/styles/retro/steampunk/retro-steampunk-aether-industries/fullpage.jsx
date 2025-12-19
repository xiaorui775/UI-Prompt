import React, { useState, useEffect } from 'react';
import { 
  Menu, X, ArrowRight, Cog, Wrench, 
  Compass, Gauge, Clock, Scroll, Zap, Shield
} from 'lucide-react';

// --- Global Styles & Animations ---
const GlobalStyles = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Rye&family=Courier+Prime:ital,wght@0,400;0,700;1,400&family=Cinzel+Decorative:wght@700&display=swap');
    
    .font-victorian { font-family: 'Rye', serif; }
    .font-header { font-family: 'Cinzel Decorative', serif; }
    .font-typewriter { font-family: 'Courier Prime', monospace; }
    
    @keyframes spin-slow { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
    @keyframes spin-reverse { from { transform: rotate(360deg); } to { transform: rotate(0deg); } }
    @keyframes steam-rise { 
      0% { opacity: 0; transform: translateY(0) scale(1); } 
      50% { opacity: 0.5; } 
      100% { opacity: 0; transform: translateY(-20px) scale(1.5); } 
    }
    @keyframes flicker { 0% { opacity: 0.8; } 50% { opacity: 1; } 100% { opacity: 0.9; } }

    .animate-spin-slow { animation: spin-slow 12s linear infinite; }
    .animate-spin-reverse { animation: spin-reverse 15s linear infinite; }
    
    .brass-gradient {
      background: linear-gradient(135deg, #b8860b 0%, #fcf6ba 50%, #aa771c 100%);
    }
    .brass-text {
      background: linear-gradient(to bottom, #cfc09f 20%, #ffecb3 50%, #b8860b 80%);
      -webkit-background-clip: text;
      color: transparent;
      text-shadow: 1px 1px 2px rgba(0,0,0,0.5);
    }
    
    .bg-leather {
      background-color: #2a1810;
      background-image: url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7z' fill='%231a0b05' fill-opacity='0.2' fill-rule='evenodd'/%3E%3C/svg%3E");
    }

    .rivet {
      box-shadow: 1px 1px 2px rgba(0,0,0,0.8), inset 1px 1px 1px rgba(255,255,255,0.4);
    }
  `}</style>
);

// --- Sub-Components ---

const Rivet = ({ className = "" }) => (
  <div className={`w-3 h-3 rounded-full bg-gradient-to-br from-[#d4af37] to-[#5c4033] border border-[#3e2723] rivet ${className}`}></div>
);

const GearIcon = ({ size = 24, className = "" }) => (
  <div className={`relative inline-flex items-center justify-center ${className}`}>
    <Cog size={size} className="text-[#cd7f32] drop-shadow-md" strokeWidth={1.5} />
  </div>
);

const MechanicalButton = ({ children, variant = 'primary', className = '', ...props }) => {
  const isPrimary = variant === 'primary';
  
  return (
    <button 
      className={`
        relative group overflow-hidden px-8 py-3 font-victorian tracking-wider uppercase transition-all duration-200 active:scale-95
        ${isPrimary 
          ? 'text-[#2a1810] font-bold' 
          : 'text-[#d4af37]'}
        ${className}
      `}
      {...props}
    >
      {/* Button Background */}
      <div className={`absolute inset-0 border-2 ${isPrimary ? 'border-[#5c4033]' : 'border-[#b8860b]'} rounded-sm z-0 shadow-lg`}>
        <div className={`absolute inset-0 ${isPrimary ? 'brass-gradient' : 'bg-[#1a0f0a]'} opacity-90`}></div>
        {/* Inner Border */}
        <div className="absolute inset-1 border border-black/20"></div>
      </div>
      
      {/* Rivets */}
      <div className="absolute top-1 left-1"><Rivet /></div>
      <div className="absolute top-1 right-1"><Rivet /></div>
      <div className="absolute bottom-1 left-1"><Rivet /></div>
      <div className="absolute bottom-1 right-1"><Rivet /></div>

      {/* Content */}
      <span className="relative z-10 flex items-center justify-center gap-2 drop-shadow-sm">
        {children}
      </span>
    </button>
  );
};

const Panel = ({ children, className = "" }) => (
  <div className={`relative bg-[#1a0f0a] border-4 border-[#5c4033] rounded-lg shadow-2xl p-6 ${className}`}>
    {/* Corner Decorations */}
    <div className="absolute top-0 left-0 w-8 h-8 border-t-4 border-l-4 border-[#b8860b] rounded-tl-lg"></div>
    <div className="absolute top-0 right-0 w-8 h-8 border-t-4 border-r-4 border-[#b8860b] rounded-tr-lg"></div>
    <div className="absolute bottom-0 left-0 w-8 h-8 border-b-4 border-l-4 border-[#b8860b] rounded-bl-lg"></div>
    <div className="absolute bottom-0 right-0 w-8 h-8 border-b-4 border-r-4 border-[#b8860b] rounded-br-lg"></div>
    
    {/* Rivets */}
    <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 flex gap-2">
      <Rivet /><Rivet />
    </div>
    
    {children}
  </div>
);

// --- Main Application ---

export default function SteampunkCompanySite() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [steamPressure, setSteamPressure] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      // Update steam pressure based on scroll depth
      const height = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = window.scrollY;
      setSteamPressure(Math.min((scrolled / height) * 100, 100));
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inventions', href: '#inventions' },
    { name: 'Foundry', href: '#foundry' },
    { name: 'Airships', href: '#airships' },
    { name: 'Telegraph', href: '#contact' },
  ];

  return (
    <div className="min-h-screen bg-[#0a0503] text-[#dcdcdc] font-serif selection:bg-[#b8860b] selection:text-black overflow-x-hidden">
      <GlobalStyles />
      
      {/* Steam Background Effect */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/black-linen.png')]"></div>
      
      {/* --- Navigation --- */}
      <nav 
        className={`fixed top-0 w-full z-50 transition-all duration-500 border-b-4 ${
          scrolled 
            ? 'bg-[#1a0f0a]/95 border-[#b8860b] py-3 shadow-[0_4px_20px_rgba(0,0,0,0.8)]' 
            : 'bg-transparent border-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between relative">
          {/* Logo */}
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="relative w-12 h-12 flex items-center justify-center">
              <Cog size={48} className="absolute text-[#5c4033] group-hover:rotate-90 transition-transform duration-700" />
              <Cog size={28} className="absolute text-[#b8860b] animate-spin-slow" />
            </div>
            <div className="flex flex-col">
              <span className="font-header text-2xl text-[#b8860b] tracking-widest leading-none drop-shadow-md">
                AETHER
              </span>
              <span className="font-typewriter text-[10px] text-[#8b4513] tracking-[0.3em] uppercase">
                Industries Ltd.
              </span>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="font-victorian text-sm text-[#a89f91] hover:text-[#b8860b] transition-colors uppercase tracking-widest relative group"
              >
                {link.name}
                <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-[#b8860b] transition-all group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <MechanicalButton className="text-sm px-6 py-2">
              <span className="flex items-center gap-2">
                Order Catalogue <ArrowRight size={16} />
              </span>
            </MechanicalButton>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden text-[#b8860b] p-2 border-2 border-[#5c4033] rounded bg-[#1a0f0a]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Scroll Progress Pipe */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-[#2a1810] border-t border-[#5c4033]">
           <div 
             className="h-full brass-gradient shadow-[0_0_10px_#b8860b]"
             style={{ width: `${steamPressure}%`, transition: 'width 0.1s linear' }}
           ></div>
        </div>
      </nav>

      {/* --- Hero Section --- */}
      <section className="relative pt-40 pb-24 md:pt-52 md:pb-40 overflow-hidden bg-leather border-b-8 border-[#3e2723]">
        {/* Background Gears */}
        <div className="absolute top-10 right-[-100px] opacity-20 pointer-events-none">
          <Cog size={400} className="animate-spin-slow text-black" />
        </div>
        <div className="absolute bottom-[-50px] left-[-50px] opacity-10 pointer-events-none">
          <Cog size={300} className="animate-spin-reverse text-[#b8860b]" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <div className="inline-block mb-6 relative">
            <span className="font-typewriter text-[#cd7f32] text-sm tracking-[0.2em] uppercase bg-[#1a0f0a] px-4 py-1 border border-[#5c4033] rounded">
              Est. London 1889
            </span>
            <div className="absolute -left-2 -top-2"><Rivet /></div>
            <div className="absolute -right-2 -bottom-2"><Rivet /></div>
          </div>
          
          <h1 className="font-header text-5xl md:text-7xl lg:text-8xl mb-8 leading-tight">
            <span className="block text-[#e0e0e0] drop-shadow-xl">Forging the</span>
            <span className="brass-text">Future of Steam</span>
          </h1>
          
          <p className="font-serif text-xl text-[#a89f91] mb-12 max-w-2xl mx-auto leading-relaxed border-t border-b border-[#5c4033]/30 py-6">
            Purveyors of fine automatons, aether-engines, and industrial marvels. 
            We bridge the gap between Victorian elegance and mechanical innovation.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <MechanicalButton className="w-full sm:w-auto text-lg shadow-[0_0_20px_rgba(184,134,11,0.2)]">
              Explore Inventions
            </MechanicalButton>
            <MechanicalButton variant="outline" className="w-full sm:w-auto text-lg">
              Visit The Foundry
            </MechanicalButton>
          </div>
        </div>

        {/* Decorative Pipes Bottom */}
        <div className="absolute bottom-0 left-0 w-full h-8 bg-gradient-to-r from-[#2a1810] via-[#5c4033] to-[#2a1810] border-t border-[#8b4513]"></div>
      </section>

      {/* --- Features (The Workshop) --- */}
      <section id="inventions" className="py-24 bg-[#140a05] relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-victorian text-4xl text-[#e6dcc8] mb-4">Our Mechanical Marvels</h2>
            <div className="flex items-center justify-center gap-4">
              <div className="h-[2px] w-20 bg-[#5c4033]"></div>
              <Cog size={20} className="text-[#b8860b] animate-spin-slow" />
              <div className="h-[2px] w-20 bg-[#5c4033]"></div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Wrench, title: "Automaton Repair", desc: "Expert maintenance for all clockwork servants and mechanical pets." },
              { icon: Zap, title: "Aether Refinement", desc: "High-purity fuel synthesis for your dirigibles and personal heaters." },
              { icon: Shield, title: "Brass Plating", desc: "Protective coating services ensuring rust-free operation for decades." }
            ].map((feature, idx) => (
              <Panel key={idx} className="group hover:-translate-y-2 transition-transform duration-300">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full border-2 border-[#b8860b] bg-[#2a1810] flex items-center justify-center shadow-[inset_0_0_10px_rgba(0,0,0,0.8)] group-hover:scale-110 transition-transform">
                  <feature.icon size={32} className="text-[#d4af37]" />
                </div>
                <h3 className="font-victorian text-xl text-[#cd7f32] mb-3 text-center">{feature.title}</h3>
                <p className="font-typewriter text-sm text-[#a89f91] text-center leading-relaxed">
                  {feature.desc}
                </p>
              </Panel>
            ))}
          </div>
        </div>
      </section>

      {/* --- Split Section (About) --- */}
      <section id="foundry" className="py-24 bg-leather border-y-8 border-[#1a0f0a] relative overflow-hidden">
        {/* Steam overlay */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white/5 to-transparent pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            {/* Image Frame */}
            <div className="lg:w-1/2">
               <div className="relative p-4 bg-[#5c4033] rounded shadow-2xl">
                 <div className="absolute top-2 left-2"><Rivet /></div>
                 <div className="absolute top-2 right-2"><Rivet /></div>
                 <div className="absolute bottom-2 left-2"><Rivet /></div>
                 <div className="absolute bottom-2 right-2"><Rivet /></div>
                 
                 <div className="border-4 border-[#2a1810] p-1 bg-[#1a0f0a]">
                   <img 
                     src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80" 
                     alt="Industrial Workshop" 
                     className="w-full h-auto sepia contrast-125 brightness-75 grayscale-[0.3]"
                   />
                 </div>
                 {/* Plaque */}
                 <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-black border-2 border-[#b8860b] px-6 py-2 shadow-lg">
                   <p className="font-header text-[#d4af37] text-xs tracking-widest uppercase">The Main Turbine Hall</p>
                 </div>
               </div>
            </div>
            
            <div className="lg:w-1/2 text-left">
              <div className="flex items-center gap-2 mb-4 text-[#b8860b]">
                <Compass className="animate-pulse" size={20} />
                <span className="font-typewriter text-xs uppercase tracking-widest">Our Mission</span>
              </div>
              
              <h2 className="font-header text-4xl md:text-5xl text-[#e6dcc8] mb-6">
                Engineered for the <br/><span className="text-[#cd7f32]">Impossible.</span>
              </h2>
              
              <p className="font-serif text-lg text-[#a89f91] mb-6 leading-relaxed">
                Founded by the visionary Sir Archibald Cogsworth, Aether Industries has been the beating heart of the Empire's industrial revolution. We believe that with enough steam pressure and brass fittings, mankind can conquer the stars.
              </p>
              
              <ul className="space-y-4 mb-10 font-typewriter text-sm text-[#c0c0c0]">
                {[
                  'Patented "Eternal-Steam" Boiler Technology',
                  'Royal Warrant Holders since 1892',
                  'Zero-emission Aether collection methods'
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 bg-[#b8860b] rotate-45"></div>
                    {item}
                  </li>
                ))}
              </ul>
              
              <MechanicalButton variant="outline">
                Read The Archives
              </MechanicalButton>
            </div>
          </div>
        </div>
      </section>

      {/* --- Data/Stats Section --- */}
      <section className="py-20 bg-[#0f0805] border-t border-[#3e2723]">
        <div className="max-w-7xl mx-auto px-6">
           <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
             {[
               { label: "Boilers Active", value: "4,021", icon: Gauge },
               { label: "Tons of Brass", value: "850k", icon: Shield },
               { label: "Steam Pressure", value: "100%", icon: Zap },
               { label: "Years Operating", value: "135", icon: Clock },
             ].map((stat, idx) => (
               <div key={idx} className="flex flex-col items-center p-6 border border-[#2a1810] bg-[#140a05] rounded relative overflow-hidden group">
                 <div className="absolute top-0 left-0 w-full h-1 bg-[#2a1810] group-hover:bg-[#b8860b] transition-colors"></div>
                 <stat.icon size={32} className="text-[#5c4033] mb-4 group-hover:text-[#cd7f32] transition-colors" />
                 <div className="font-header text-3xl text-[#e6dcc8] mb-2">{stat.value}</div>
                 <div className="font-typewriter text-[10px] text-[#8b4513] uppercase tracking-widest">{stat.label}</div>
               </div>
             ))}
           </div>
        </div>
      </section>

      {/* --- Footer --- */}
      <footer className="bg-[#050302] border-t-4 border-[#3e2723] pt-16 pb-8 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 md:col-span-1">
              <div className="flex items-center gap-2 mb-6 opacity-80">
                <Cog size={32} className="text-[#b8860b]" />
                <span className="font-header text-xl text-[#cd7f32]">AETHER</span>
              </div>
              <p className="font-typewriter text-xs text-[#666] leading-relaxed mb-6">
                Supplying the Empire with superior machinery and steam-powered solutions.
                <br/><br/>
                Sector 7, Industrial District<br/>
                London, UK
              </p>
            </div>

            {[
              { title: "Department", links: ["Automata", "Locomotives", "Weaponry", "Timepieces"] },
              { title: "Company", links: ["Our History", "The Board", "Careers", "Legal Notices"] },
              { title: "Support", links: ["Manuals", "Telegram Us", "Parts Catalog", "Warranty"] }
            ].map((col, idx) => (
              <div key={idx}>
                <h4 className="font-victorian text-[#cd7f32] text-lg mb-6">{col.title}</h4>
                <ul className="space-y-3 font-typewriter text-xs text-[#888]">
                  {col.links.map(link => (
                    <li key={link}><a href="#" className="hover:text-[#b8860b] transition-colors hover:underline decoration-[#5c4033] underline-offset-4">&gt; {link}</a></li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          <div className="border-t border-[#1a0f0a] pt-8 flex flex-col md:flex-row items-center justify-between font-typewriter text-[10px] text-[#444]">
            <p>&copy; 1889-2024 Aether Industries Ltd. All rights reserved by Imperial Decree.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <span>EST. 1889</span>
              <span>STEAM POWERED</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
