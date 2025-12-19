import React, { useState, useEffect } from 'react';
import { Menu, Search, X, ArrowRight, Instagram, Twitter, Facebook, Share2, Bookmark, ArrowUpRight, Play, Pause, ChevronDown } from 'lucide-react';

// --- Utility Components ---

const Divider = ({ className = "" }) => (
  <div className={`flex items-center justify-center py-8 ${className}`}>
    <div className="h-px bg-stone-900 w-full max-w-[40px]"></div>
    <div className="mx-4 text-stone-400 font-serif italic text-lg">§</div>
    <div className="h-px bg-stone-900 w-full max-w-[40px]"></div>
  </div>
);

const VerticalText = ({ children, className = "" }) => (
  <div className={`writing-vertical-rl rotate-180 font-sans text-[9px] tracking-[0.25em] uppercase text-stone-500 font-medium ${className}`}>
    {children}
  </div>
);

const SectionLabel = ({ number, title }) => (
  <div className="flex items-baseline gap-3 mb-8 border-b border-black pb-2">
    <span className="font-display text-4xl text-stone-300">{number}</span>
    <span className="font-sans text-xs font-bold tracking-widest uppercase text-stone-900">{title}</span>
  </div>
);

// --- Components ---

const ReadingProgress = () => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const scrollListener = () => {
      const totalHeight = document.body.scrollHeight - window.innerHeight;
      const percent = (window.scrollY / totalHeight) * 100;
      setWidth(percent);
    };
    window.addEventListener('scroll', scrollListener);
    return () => window.removeEventListener('scroll', scrollListener);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-[2px] z-[60] mix-blend-difference pointer-events-none">
      <div className="h-full bg-white transition-all duration-100 ease-out" style={{ width: `${width}%` }} />
    </div>
  );
};

const NavigationOverlay = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 bg-[#FDFBF7] animate-in fade-in slide-in-from-bottom-4 duration-500 flex flex-col">
      <div className="flex justify-between items-center p-6 border-b border-stone-200">
        <span className="font-sans text-xs tracking-widest uppercase">Index — Vol. 24</span>
        <button onClick={onClose} className="p-2 hover:rotate-90 transition-transform duration-300">
          <X className="w-8 h-8 text-stone-900" />
        </button>
      </div>
      <div className="flex-1 overflow-y-auto p-6 md:p-16 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="md:col-span-1 border-r border-stone-200 pr-8">
           <h3 className="font-display text-5xl mb-8">Lumière</h3>
           <p className="font-serif italic text-lg text-stone-500 mb-8">A journal of life, architecture, and silence.</p>
           <ul className="space-y-2 font-sans text-xs uppercase tracking-widest text-stone-400">
             <li className="text-stone-900">Issue 24: Solitude</li>
             <li>Issue 23: Structure</li>
             <li>Issue 22: Light</li>
             <li>Issue 21: Organic</li>
           </ul>
        </div>
        <div className="md:col-span-1 space-y-8">
           <span className="font-sans text-xs font-bold uppercase tracking-widest text-stone-400">Features</span>
           <ul className="space-y-6">
             {['The House of Wind', 'Ceramics & Soul', 'Kyoto Silent', 'Tactile Future'].map((item, i) => (
                <li key={i} className="group cursor-pointer">
                  <span className="font-serif text-2xl group-hover:italic transition-all">{item}</span>
                </li>
             ))}
           </ul>
        </div>
        <div className="md:col-span-1 space-y-8">
           <span className="font-sans text-xs font-bold uppercase tracking-widest text-stone-400">Columns</span>
           <ul className="space-y-6">
             {['Editor\'s Letter', 'Opinion', 'Market', 'Travel', 'Design'].map((item, i) => (
                <li key={i} className="group cursor-pointer">
                  <span className="font-serif text-2xl group-hover:italic transition-all">{item}</span>
                </li>
             ))}
           </ul>
        </div>
        <div className="md:col-span-1 bg-stone-100 p-8">
            <span className="font-sans text-[10px] uppercase tracking-widest text-stone-400 mb-4 block">Newsletter</span>
            <p className="font-serif text-lg mb-4">Join 40,000+ readers.</p>
            <input type="email" placeholder="Email Address" className="w-full bg-transparent border-b border-stone-300 pb-2 mb-4 font-sans text-sm outline-none focus:border-stone-900" />
            <button className="text-xs font-bold uppercase tracking-widest">Subscribe</button>
        </div>
      </div>
    </div>
  );
};

const Masthead = ({ onMenuOpen }) => (
  <header className="relative z-40 bg-[#FDFBF7] border-b-4 border-black">
    {/* Top Utility Bar */}
    <div className="border-b border-stone-200 py-1 hidden md:block">
      <div className="max-w-[1800px] mx-auto px-6 flex justify-between items-center text-[9px] font-sans font-bold uppercase tracking-[0.2em] text-stone-500">
        <div className="flex gap-6">
          <span>Paris, FR — 14°C</span>
          <span>Wednesday, October 14, 2023</span>
        </div>
        <div className="flex gap-6">
          <span className="cursor-pointer hover:text-stone-900">Subscribe ($12/mo)</span>
          <span className="cursor-pointer hover:text-stone-900">Log In</span>
        </div>
      </div>
    </div>

    {/* Main Header */}
    <div className="max-w-[1800px] mx-auto px-6 h-24 md:h-32 flex items-center justify-between">
      <div className="w-1/4 flex items-center gap-4">
        <button onClick={onMenuOpen} className="group flex flex-col justify-center gap-1.5 w-12 h-12 hover:bg-black hover:p-2 transition-all duration-300">
          <span className="w-8 h-0.5 bg-black group-hover:bg-white transition-colors"></span>
          <span className="w-6 h-0.5 bg-black group-hover:bg-white group-hover:w-8 transition-all"></span>
          <span className="w-4 h-0.5 bg-black group-hover:bg-white group-hover:w-8 transition-all"></span>
        </button>
        <span className="hidden lg:block font-sans text-[10px] uppercase tracking-widest font-bold mt-1">Menu</span>
      </div>

      <div className="w-2/4 text-center">
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl tracking-tight font-black text-black leading-none scale-y-90">
          LUMIÈRE
        </h1>
        <p className="hidden md:block font-serif italic text-sm text-stone-500 mt-1">Journal of Aesthetics & Culture</p>
      </div>

      <div className="w-1/4 flex justify-end gap-6">
         <Search className="w-6 h-6 text-stone-900 cursor-pointer hover:scale-110 transition-transform" />
         <Bookmark className="w-6 h-6 text-stone-900 cursor-pointer hover:scale-110 transition-transform hidden md:block" />
      </div>
    </div>
  </header>
);

const HeroSection = () => (
  <section className="relative w-full border-b border-black">
    <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[90vh]">
      {/* Sidebar Info */}
      <div className="hidden lg:flex lg:col-span-1 border-r border-stone-200 flex-col justify-between py-8 items-center bg-white">
        <VerticalText>Vol. 24 — Solitude</VerticalText>
        <div className="h-32 w-px bg-stone-300"></div>
        <VerticalText>Oct 2023</VerticalText>
      </div>

      {/* Main Visual */}
      <div className="lg:col-span-8 relative border-r border-stone-200 group overflow-hidden">
        <div className="absolute top-0 left-0 w-full p-8 z-20 flex justify-between items-start pointer-events-none">
          <div className="bg-white px-4 py-2 border border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <span className="font-sans text-xs font-bold uppercase tracking-widest">Cover Story</span>
          </div>
        </div>

        <img
          src="https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=2070&auto=format&fit=crop"
          alt="Architecture"
          className="w-full h-full object-cover grayscale contrast-125 group-hover:grayscale-0 transition-all duration-[1.5s]"
        />

        <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-8 md:p-16">
          <h2 className="font-display text-6xl md:text-8xl text-[#FDFBF7] leading-[0.9] mb-4">
            The Architecture <br/> <span className="font-serif italic font-light">of</span> Silence
          </h2>
        </div>
      </div>

      {/* Right Rail Teasers */}
      <div className="lg:col-span-3 bg-[#F4F1EA] p-8 flex flex-col justify-center">
        <span className="font-sans text-[10px] font-bold uppercase tracking-widest text-stone-400 mb-8 block">Also in this issue</span>

        <div className="space-y-12">
          {[
            { cat: "Design", title: "Tactile Living: A Return to Craft", author: "Sarah Jenkins" },
            { cat: "Travel", title: "Lost in Patagonia: A Visual Diary", author: "Marc H." },
            { cat: "Essay", title: "Why Boredom is Essential for Creativity", author: "Dr. A. K." },
          ].map((item, i) => (
            <div key={i} className="group cursor-pointer border-b border-stone-300 pb-8 last:border-0">
              <span className="font-sans text-[10px] font-bold uppercase tracking-widest text-red-700 mb-2 block">{item.cat}</span>
              <h3 className="font-display text-2xl leading-tight mb-2 group-hover:underline decoration-1 underline-offset-4">{item.title}</h3>
              <p className="font-serif italic text-sm text-stone-500">by {item.author}</p>
            </div>
          ))}
        </div>

        <button className="mt-12 w-full py-4 border border-black font-sans text-xs font-bold uppercase tracking-widest hover:bg-black hover:text-white transition-colors">
          View Full Index
        </button>
      </div>
    </div>
  </section>
);

const ArticleLayout = () => (
  <section className="max-w-[1800px] mx-auto grid grid-cols-1 lg:grid-cols-12 border-l border-r border-stone-200 bg-white">
    {/* Left Margin / Meta */}
    <div className="hidden lg:block lg:col-span-2 border-r border-stone-200 p-8 sticky top-0 h-screen overflow-y-auto">
      <div className="mb-12">
        <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop" className="w-16 h-16 rounded-full grayscale mb-4" />
        <p className="font-sans text-[10px] font-bold uppercase tracking-widest text-stone-400">Words</p>
        <p className="font-serif font-bold text-lg">Elena Vance</p>
      </div>
      <div className="mb-12">
        <p className="font-sans text-[10px] font-bold uppercase tracking-widest text-stone-400">Photography</p>
        <p className="font-serif font-bold text-lg">Kenjiro Sato</p>
      </div>
      <div className="mb-12">
        <p className="font-sans text-[10px] font-bold uppercase tracking-widest text-stone-400">Reading Time</p>
        <p className="font-serif font-bold text-lg">8 Minutes</p>
      </div>

      <div className="mt-auto pt-12">
        <VerticalText className="h-48">Share This Story</VerticalText>
        <div className="flex flex-col gap-4 mt-4 items-center">
          <Twitter className="w-4 h-4 text-stone-400 hover:text-black cursor-pointer" />
          <Facebook className="w-4 h-4 text-stone-400 hover:text-black cursor-pointer" />
          <Share2 className="w-4 h-4 text-stone-400 hover:text-black cursor-pointer" />
        </div>
      </div>
    </div>

    {/* Main Content Area */}
    <div className="col-span-1 lg:col-span-7 px-6 py-12 md:p-16 lg:p-24 border-r border-stone-200">

       {/* Lead Paragraph */}
       <div className="font-serif text-xl md:text-2xl leading-relaxed text-stone-800 mb-12 drop-cap-section">
          <span className="float-left text-[6.5rem] leading-[0.7] font-display font-black mr-4 mt-2 text-black">T</span>
          <span className="font-sans text-sm font-bold uppercase tracking-widest mr-2">here is a distinctive rhythm</span> to silence. It is not merely the absence of sound, but a heavy, deliberate presence that fills the corners of a room like smoke. In modern architectural discourse, we often speak of light and materials, but rarely do we discuss the acoustic and spiritual weight of emptiness.
       </div>

       {/* Two Column Text for Desktop */}
       <div className="md:columns-2 gap-12 font-serif text-lg leading-relaxed text-stone-700 mb-16 text-justify">
          <p className="mb-8">
            The concept of <em>Ma</em> (space) in Japanese aesthetics teaches us that the void is as essential as the object itself. Without the pause, the music has no meaning. Without the empty wall, the painting has no home. We traveled to the remote highlands of Kyoto to visit the studio of architect Kenjiro Sato, a man who has spent forty years designing nothingness.
          </p>
          <p className="mb-8">
            "We are afraid of the quiet," Sato tells me, pouring tea into a ceramic cup that looks as if it were born from the earth itself. The studio is cold, unheated save for a small wood stove in the corner.
          </p>
          <p className="mb-8">
            "We fill our homes with noise, with objects, with color. We are terrified that if we stop looking at things, we might have to look at ourselves." His latest project, the <em>House of Wind</em>, challenges this fear. It is a structure composed almost entirely of corridors and courtyards.
          </p>
          <p>
             There is no living room in the traditional sense. Instead, there are "viewing platforms" — spaces designed solely for sitting and observing the changing shadows throughout the day.
          </p>
       </div>

       {/* Full Width Image Break */}
       <figure className="w-[110%] -ml-[5%] my-16 relative">
          <img src="https://images.unsplash.com/photo-1599695665249-165f123f2de0?q=80&w=2070&auto=format&fit=crop" className="w-full grayscale hover:grayscale-0 transition-all duration-700" />
          <figcaption className="flex justify-between items-start mt-4 px-4 border-t border-stone-200 pt-2">
             <span className="font-sans text-[10px] uppercase tracking-widest font-bold">Figure 2.1</span>
             <span className="font-serif italic text-sm text-stone-500 max-w-md text-right">The main corridor of the House of Wind, facing East to catch the morning sun.</span>
          </figcaption>
       </figure>

       <h3 className="font-display text-4xl mb-8 mt-16 text-center">The Materiality of Nothing</h3>

       <p className="font-serif text-lg leading-relaxed text-stone-700 mb-8 max-w-2xl mx-auto">
          Sato's approach to materials is reductive. He uses only three elements: concrete, untreated cedar, and glass. "Any more," he says, "and the building begins to speak too loudly." This restraint creates an environment where the inhabitants become the primary source of color and movement.
       </p>

       <blockquote className="my-16 border-y border-black py-12 text-center">
          <p className="font-display text-5xl italic leading-tight mb-6">"Perfection is static. Life is fluid. A home should age, it should wrinkle."</p>
          <cite className="font-sans text-xs font-bold uppercase tracking-widest not-italic">— Kenjiro Sato</cite>
       </blockquote>

       <p className="font-serif text-lg leading-relaxed text-stone-700 mb-8 max-w-2xl mx-auto">
          Leaving the studio, the silence of the highlands feels different now. It is no longer an absence, but a fullness. A canvas waiting for the next moment to occur. As I walk down the mountain path, the sound of my own footsteps seems thunderous, a reminder of the impact we have on the spaces we inhabit.
       </p>
    </div>

    {/* Right Sidebar / Footnotes */}
    <div className="hidden lg:block lg:col-span-3 bg-[#F4F1EA] p-8">
       <div className="sticky top-8">
          <SectionLabel number="01" title="Footnotes" />
          <ul className="space-y-6 font-serif text-sm text-stone-600 mb-12">
             <li className="flex gap-3">
                <span className="font-sans font-bold text-xs mt-1">1.</span>
                <p><em>Ma</em> (間) is a Japanese word which can be roughly translated as "gap", "space", "pause" or "the space between two structural parts."</p>
             </li>
             <li className="flex gap-3">
                <span className="font-sans font-bold text-xs mt-1">2.</span>
                <p>Sato was awarded the Pritzker Prize in 2018 for his work on the "Silent Library" in Hokkaido.</p>
             </li>
          </ul>

          <SectionLabel number="02" title="Related Objects" />
          <div className="grid grid-cols-1 gap-8">
             {[
                { img: "https://images.unsplash.com/photo-1610701596007-11502861dcfa?q=80&w=2070&auto=format&fit=crop", name: "Cedar Stool", price: "$450" },
                { img: "https://images.unsplash.com/photo-1577979749830-f1d742b96791?q=80&w=1974&auto=format&fit=crop", name: "Iron Teapot", price: "$120" }
             ].map((item, i) => (
               <div key={i} className="bg-white p-4 border border-stone-200 hover:border-black transition-colors cursor-pointer group">
                  <div className="aspect-square overflow-hidden mb-4">
                     <img src={item.img} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="flex justify-between items-baseline">
                     <span className="font-display text-xl">{item.name}</span>
                     <span className="font-sans text-xs font-bold">{item.price}</span>
                  </div>
               </div>
             ))}
          </div>
       </div>
    </div>
  </section>
);

const VisualEssay = () => (
  <section className="bg-stone-900 text-[#FDFBF7] py-24 overflow-hidden relative">
     <div className="absolute top-0 left-0 w-full h-px bg-white/20"></div>
     <div className="max-w-[1800px] mx-auto px-6 mb-12 flex justify-between items-end">
        <div>
           <span className="font-sans text-xs font-bold uppercase tracking-widest text-stone-500 mb-2 block">Visual Essay</span>
           <h3 className="font-display text-5xl">Shadow Play</h3>
        </div>
        <div className="flex gap-4">
           <button className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-colors"><ArrowRight className="w-5 h-5" /></button>
        </div>
     </div>

     {/* Horizontal Scroll Snap Area */}
     <div className="flex overflow-x-auto snap-x snap-mandatory gap-8 px-6 pb-12 scrollbar-hide">
        {[
           "https://images.unsplash.com/photo-1518005020951-ecc8e1213af8?q=80&w=2070&auto=format&fit=crop",
           "https://images.unsplash.com/photo-1470723710355-171b4ebce6ca?q=80&w=2070&auto=format&fit=crop",
           "https://images.unsplash.com/photo-1481277542470-605612bd2d61?q=80&w=2006&auto=format&fit=crop",
           "https://images.unsplash.com/photo-1506157786151-b8491531f063?q=80&w=2070&auto=format&fit=crop"
        ].map((src, i) => (
           <div key={i} className="min-w-[80vw] md:min-w-[40vw] snap-center relative aspect-[4/3] group cursor-pointer">
              <img src={src} className="w-full h-full object-cover grayscale opacity-70 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-700" />
              <div className="absolute bottom-0 left-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                 <span className="font-sans text-[10px] font-bold uppercase tracking-widest bg-white text-black px-2 py-1">Plate 0{i+1}</span>
              </div>
           </div>
        ))}
     </div>
  </section>
);

const Footer = () => (
  <footer className="bg-white pt-24 pb-8 border-t-4 border-black">
     <div className="max-w-[1800px] mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-24">
        <div className="col-span-1 md:col-span-2 pr-12">
           <h2 className="font-display text-9xl leading-none -ml-1 mb-8">LUMIÈRE</h2>
           <p className="font-serif text-2xl text-stone-500 max-w-lg mb-8">
              A quarterly publication documenting the slow intersection of life, art, and interiors.
           </p>
           <div className="flex gap-4">
              <button className="px-6 py-3 bg-black text-white font-sans text-xs font-bold uppercase tracking-widest hover:bg-stone-800">Subscribe Now</button>
           </div>
        </div>

        <div>
           <h4 className="font-sans text-xs font-bold uppercase tracking-widest mb-6 text-stone-400">Directory</h4>
           <ul className="space-y-4 font-serif text-lg">
              {['About Us', 'Masthead', 'Careers', 'Stockists', 'Contact'].map(item => (
                 <li key={item}><a href="#" className="hover:italic hover:text-stone-600 transition-all">{item}</a></li>
              ))}
           </ul>
        </div>

        <div>
           <h4 className="font-sans text-xs font-bold uppercase tracking-widest mb-6 text-stone-400">Connect</h4>
           <ul className="space-y-4 font-serif text-lg">
              {['Instagram', 'Twitter', 'Pinterest', 'Newsletter'].map(item => (
                 <li key={item}><a href="#" className="hover:italic hover:text-stone-600 transition-all">{item}</a></li>
              ))}
           </ul>
        </div>
     </div>

     <div className="max-w-[1800px] mx-auto px-6 flex flex-col md:flex-row justify-between items-center border-t border-stone-200 pt-8">
        <div className="font-sans text-[10px] uppercase tracking-widest text-stone-400">
           &copy; 2024 Lumière Publishing Group. Paris / New York.
        </div>
        <div className="font-display italic text-2xl text-stone-300 mt-4 md:mt-0">
           Beauty in stillness
        </div>
     </div>
  </footer>
);

export default function LumiereLayout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-stone-900 selection:bg-stone-200 selection:text-stone-900 overflow-x-hidden">
      <style dangerouslySetInnerHTML={{__html: `
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,900&family=Source+Serif+4:ital,opsz,wght@0,8..60,200;0,8..60,300;0,8..60,400;0,8..60,500;0,8..60,600;1,8..60,300;1,8..60,400&family=Inter:wght@300;400;500;600;700;800&display=swap');

        .font-display { font-family: 'Playfair Display', serif; }
        .font-serif { font-family: 'Source Serif 4', serif; }
        .font-sans { font-family: 'Inter', sans-serif; }

        .writing-vertical-rl { writing-mode: vertical-rl; }
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }

        .drop-cap-section p:first-of-type::first-letter {
          float: left;
          font-family: 'Playfair Display', serif;
          font-weight: 900;
          font-size: 6rem;
          line-height: 0.8;
          padding-right: 1rem;
          padding-top: 0.5rem;
        }
      `}} />

      <ReadingProgress />
      <NavigationOverlay isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />

      <Masthead onMenuOpen={() => setIsMenuOpen(true)} />

      <main>
        <HeroSection />
        <ArticleLayout />
        <VisualEssay />
      </main>

      <Footer />
    </div>
  );
}
