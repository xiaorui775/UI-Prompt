import React, { useState } from 'react';
import { Zap, Star, Heart, MessageCircle, ArrowRight, MousePointer, Eye, Grid } from 'lucide-react';

export default function PopArtStudio() {
  const [hoveredCard, setHoveredCard] = useState(null);

  // Ben-Day Dot Pattern Styles
  const bendayDots = {
    red: {
      backgroundImage: 'radial-gradient(#FF0000 20%, transparent 20%)',
      backgroundSize: '10px 10px'
    },
    blue: {
      backgroundImage: 'radial-gradient(#0000FF 20%, transparent 20%)',
      backgroundSize: '10px 10px'
    },
    yellow: {
      backgroundImage: 'radial-gradient(#FFFF00 20%, transparent 20%)',
      backgroundSize: '10px 10px'
    },
    black: {
      backgroundImage: 'radial-gradient(#000000 20%, transparent 20%)',
      backgroundSize: '8px 8px'
    }
  };

  const colors = {
    red: '#FF0000',
    yellow: '#FFFF00',
    blue: '#0000FF',
    magenta: '#FF00FF',
    cyan: '#00FFFF',
    black: '#000000',
    white: '#FFFFFF'
  };

  return (
    <div className="min-h-screen bg-white font-sans overflow-x-hidden selection:bg-black selection:text-[#FFFF00]">

      {/* --- HEADER --- */}
      <header className="border-b-4 border-black bg-[#FFFF00] sticky top-0 z-50">
        <div className="container mx-auto px-4 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2 transform -rotate-1 hover:rotate-0 transition-transform">
            <div className="bg-[#FF0000] p-2 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <Zap size={32} color="white" fill="white" />
            </div>
            <h1 className="text-4xl font-black uppercase tracking-tighter" style={{ textShadow: '2px 2px 0 #fff' }}>
              POP<span className="text-[#FF0000]">CULTURE</span>
            </h1>
          </div>

          <nav className="hidden md:flex gap-6">
            {['Work', 'About', 'Contact'].map((item) => (
              <a key={item} href="#" className="text-xl font-bold uppercase hover:text-[#FF00FF] hover:underline decoration-4 decoration-black underline-offset-4 transition-all">
                {item}
              </a>
            ))}
            <button className="bg-[#0000FF] text-white px-6 py-2 font-black uppercase border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none transition-all">
              Join Now
            </button>
          </nav>
        </div>
      </header>

      {/* --- HERO SECTION --- */}
      <section className="relative pt-12 pb-24 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-20 right-0 w-64 h-64 rounded-full opacity-20" style={bendayDots.red}></div>
        <div className="absolute bottom-10 left-10 w-48 h-48 rounded-full opacity-20" style={bendayDots.blue}></div>

        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center relative z-10">

          <div className="space-y-8">
            {/* Speech Bubble */}
            <div className="relative inline-block mb-4">
              <div className="bg-white border-4 border-black px-8 py-4 rounded-[50%] relative z-10">
                <p className="text-2xl font-black italic uppercase">"Art is for everyone!"</p>
              </div>
              <div className="absolute -bottom-4 left-8 w-6 h-6 bg-white border-r-4 border-b-4 border-black transform rotate-45 z-20"></div>
              <div className="absolute top-2 left-2 w-full h-full bg-black rounded-[50%] -z-10"></div>
            </div>

            <h2 className="text-7xl md:text-9xl font-black uppercase leading-[0.85] tracking-tighter">
              MAKE IT <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#FF0000] to-[#FF0000]" style={{ WebkitTextStroke: '4px black' }}>
                LOUD
              </span>
            </h2>

            <p className="text-2xl font-bold max-w-md border-l-8 border-[#0000FF] pl-4 bg-[#00FFFF] p-2 box-decoration-clone">
              Bold colors. Thick lines. Irony included. The ultimate tribute to mass culture consumerism.
            </p>

            <div className="flex gap-4">
              <button className="bg-[#FF0000] text-white text-2xl px-10 py-4 font-black uppercase border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:bg-[#FF00FF] transition-colors hover:-translate-y-1">
                Start Creating
              </button>
            </div>
          </div>

          {/* Hero Visual - Warhol Grid Simulation */}
          <div className="grid grid-cols-2 gap-4 bg-black p-4 border-4 border-black shadow-[12px_12px_0px_0px_rgba(255,0,255,1)] transform rotate-2">
            {[
              { bg: '#FF0000', icon: '#FFFF00' },
              { bg: '#FFFF00', icon: '#0000FF' },
              { bg: '#0000FF', icon: '#FF00FF' },
              { bg: '#FF00FF', icon: '#FFFFFF' }
            ].map((scheme, i) => (
              <div key={i} className="aspect-square flex items-center justify-center border-2 border-black relative overflow-hidden" style={{ backgroundColor: scheme.bg }}>
                 <div className="absolute inset-0 opacity-30" style={bendayDots.black}></div>
                 <Eye size={80} color={scheme.icon} strokeWidth={2.5} className="relative z-10 drop-shadow-md" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- EXPLOSION BANNER --- */}
      <div className="bg-[#0000FF] border-y-4 border-black py-12 overflow-hidden relative">
        <div className="absolute inset-0 opacity-20" style={bendayDots.yellow}></div>
        <div className="container mx-auto text-center relative z-10">
           {/* Jagged Explosion Shape CSS */}
           <div className="relative inline-block">
             <div className="absolute inset-0 bg-black transform translate-x-2 translate-y-2" style={{ clipPath: 'polygon(20% 0%, 40% 20%, 55% 5%, 65% 25%, 90% 10%, 80% 40%, 100% 50%, 80% 60%, 90% 90%, 65% 75%, 55% 95%, 40% 80%, 20% 100%, 25% 60%, 5% 50%, 25% 40%)' }}></div>
             <div className="bg-[#FFFF00] p-16 relative" style={{ clipPath: 'polygon(20% 0%, 40% 20%, 55% 5%, 65% 25%, 90% 10%, 80% 40%, 100% 50%, 80% 60%, 90% 90%, 65% 75%, 55% 95%, 40% 80%, 20% 100%, 25% 60%, 5% 50%, 25% 40%)' }}>
               <span className="text-6xl font-black text-black transform -rotate-6 block">POW!</span>
             </div>
           </div>
           <h3 className="text-white text-4xl md:text-6xl font-black uppercase mt-8" style={{ textShadow: '4px 4px 0 #000' }}>
             Instant Impact
           </h3>
        </div>
      </div>

      {/* --- FEATURES GRID --- */}
      <section className="py-24 bg-white container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: 'Repetition', icon: Grid, color: '#FF00FF', desc: 'Mass production aesthetic.' },
            { title: 'Saturation', icon: Heart, color: '#FFFF00', desc: 'Colors that scream attention.' },
            { title: 'Consumerism', icon: Star, color: '#00FFFF', desc: 'Art as a product.' },
          ].map((feature, idx) => (
            <div
              key={idx}
              onMouseEnter={() => setHoveredCard(idx)}
              onMouseLeave={() => setHoveredCard(null)}
              className="border-4 border-black p-8 transition-all duration-300 relative group"
              style={{
                backgroundColor: hoveredCard === idx ? feature.color : 'white',
                transform: hoveredCard === idx ? 'translate(-8px, -8px)' : 'translate(0, 0)',
                boxShadow: hoveredCard === idx ? '16px 16px 0px 0px black' : '8px 8px 0px 0px black'
              }}
            >
              <div className="mb-6 bg-black inline-block p-3 border-2 border-white">
                <feature.icon size={40} color="white" />
              </div>
              <h4 className="text-3xl font-black uppercase mb-4">{feature.title}</h4>
              <p className="font-bold text-lg leading-tight border-t-4 border-black pt-4">
                {feature.desc}
              </p>

              {/* Decorative Corner Lines */}
              <div className="absolute top-2 right-2 flex gap-1">
                <div className="w-1 h-8 bg-black"></div>
                <div className="w-1 h-6 bg-black"></div>
                <div className="w-1 h-4 bg-black"></div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- GALLERY SECTION --- */}
      <section className="bg-black py-20 border-t-4 border-white">
        <div className="container mx-auto px-4">
           <div className="flex justify-between items-end mb-12">
             <h2 className="text-white text-5xl md:text-7xl font-black uppercase tracking-tighter">
               The <span className="text-[#FF0000] bg-white px-2">Gallery</span>
             </h2>
             <div className="hidden md:block">
               <ArrowRight className="text-[#FFFF00] w-24 h-24" strokeWidth={3} />
             </div>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border-4 border-white">
             {[1, 2, 3, 4].map((item, i) => (
               <div key={i} className="aspect-[3/4] border-r-4 border-b-4 border-white relative overflow-hidden group">
                 {/* Image Placeholder */}
                 <div className={`w-full h-full flex flex-col items-center justify-center p-6 transition-transform duration-500 group-hover:scale-110`}
                      style={{
                        backgroundColor: i % 2 === 0 ? colors.yellow : colors.cyan,
                        ...bendayDots.black
                      }}>
                    <div className="bg-white border-4 border-black p-4 transform rotate-3 group-hover:rotate-6 transition-transform">
                      <span className="font-black text-4xl uppercase block text-center leading-none">
                        Ad<br/>ver<br/>tise
                      </span>
                    </div>
                 </div>

                 {/* Overlay Text */}
                 <div className="absolute inset-0 bg-black/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-white font-black text-2xl uppercase border-4 border-white px-4 py-2 transform -rotate-6">
                      View Piece
                    </span>
                 </div>
               </div>
             ))}
           </div>
        </div>
      </section>

      {/* --- CALL TO ACTION --- */}
      <section className="bg-[#FFFF00] py-24 border-b-4 border-black relative overflow-hidden">
        {/* Radiating Lines */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
          {[...Array(12)].map((_, i) => (
            <div key={i} className="absolute w-[200vw] h-2 bg-black" style={{ transform: `rotate(${i * 15}deg)` }}></div>
          ))}
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="inline-block bg-white border-4 border-black p-8 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] max-w-2xl transform rotate-1">
            <h2 className="text-5xl md:text-7xl font-black uppercase mb-6 leading-none">
              Don't be <br/><span className="text-[#0000FF]">Boring.</span>
            </h2>
            <p className="text-xl font-bold mb-8 uppercase tracking-wide">
              Join the movement. 15 minutes of fame starts now.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
               <input
                  type="email"
                  placeholder="YOUR EMAIL HERE"
                  className="bg-[#eee] border-4 border-black p-4 font-bold text-xl placeholder-gray-500 outline-none focus:bg-[#FF00FF] focus:text-white transition-colors"
               />
               <button className="bg-[#FF0000] text-white text-xl px-8 py-4 font-black uppercase border-4 border-black hover:bg-black hover:text-[#FFFF00] transition-colors">
                 Subscribe
               </button>
            </div>
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="bg-white py-12">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
           <div className="flex items-center gap-2">
             <div className="w-8 h-8 bg-black rounded-full"></div>
             <span className="font-black text-2xl tracking-tighter">POPCULTURE STUDIO</span>
           </div>

           <div className="flex gap-4">
             {[
               {bg: '#FF0000'}, {bg: '#FFFF00'}, {bg: '#0000FF'}
             ].map((style, i) => (
               <div key={i} className="w-12 h-12 border-4 border-black flex items-center justify-center hover:-translate-y-2 transition-transform cursor-pointer" style={{ backgroundColor: style.bg }}>
                 <MousePointer size={20} className="text-black" />
               </div>
             ))}
           </div>

           <p className="font-bold text-sm uppercase">
             © 2024 Design. No Gradients Allowed.
           </p>
        </div>
      </footer>
    </div>
  );
}
