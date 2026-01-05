import React, { useState, useEffect } from 'react';
import { ArrowRight, MoveRight, Minus, Plus, Type, LayoutGrid, Eye } from 'lucide-react';

// --- Components ---

const Section = ({ children, className = "", id = "" }) => (
  <section id={id} className={`px-6 md:px-12 lg:px-24 py-20 md:py-32 ${className}`}>
    {children}
  </section>
);

const Divider = () => (
  <div className="w-full h-px bg-gray-200" />
);

const FadeIn = ({ children, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div className={`transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
      {children}
    </div>
  );
};

// --- Main App ---

export default function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white text-black font-sans selection:bg-black selection:text-white overflow-x-hidden">

      {/* Navigation - Ultra Minimal */}
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 flex justify-between items-center px-6 md:px-12 py-6 ${scrolled ? 'bg-white/90 backdrop-blur-sm' : 'bg-transparent'}`}>
        <div className="font-bold tracking-tighter text-lg">MNML/SM</div>
        <div className="hidden md:flex space-x-12 text-sm font-medium tracking-wide text-gray-500">
          <a href="#philosophy" className="hover:text-black transition-colors duration-300">Philosophy</a>
          <a href="#materials" className="hover:text-black transition-colors duration-300">Materials</a>
          <a href="#interactions" className="hover:text-black transition-colors duration-300">Interaction</a>
        </div>
        <button className="text-sm font-medium border-b border-black pb-0.5 hover:opacity-50 transition-opacity duration-300">
          Menu
        </button>
      </nav>

      {/* Hero Section */}
      <Section className="min-h-screen flex flex-col justify-center pt-32">
        <FadeIn>
          <p className="text-gray-400 text-sm tracking-[0.2em] mb-8 uppercase">Visual Principles</p>
        </FadeIn>
        <FadeIn delay={200}>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-light tracking-tight leading-[0.9] mb-12">
            Less is <br />
            <span className="font-semibold">More.</span>
          </h1>
        </FadeIn>
        <FadeIn delay={400}>
          <div className="max-w-xl">
            <p className="text-lg md:text-xl leading-relaxed text-gray-600 font-light">
              We don't remove things to make it empty.<br />
              We remove things to make it focus.
            </p>
            <div className="mt-12 flex items-center gap-4 group cursor-pointer w-fit">
              <span className="text-sm font-medium">Explore the System</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-500 group-hover:translate-x-2" />
            </div>
          </div>
        </FadeIn>
      </Section>

      <Divider />

      {/* Philosophy / Concept Section */}
      <Section id="philosophy" className="grid grid-cols-1 md:grid-cols-12 gap-12">
        <div className="md:col-span-4">
          <h2 className="text-3xl font-light mb-6">Visual Concept</h2>
          <div className="w-8 h-px bg-black mb-6"></div>
          <p className="text-gray-500 leading-loose">
            Minimalism is not about maximizing whitespace, but about intentional reduction.
            We organize information using grids, baselines, and hierarchy—never relying on
            heavy borders, shadows, or decorative backgrounds.
          </p>
        </div>
        <div className="md:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card 1 */}
          <div className="bg-gray-50 p-8 md:aspect-square flex flex-col justify-between hover:bg-gray-100 transition-colors duration-500">
            <LayoutGrid className="w-6 h-6 text-gray-400" />
            <div>
              <h3 className="text-xl font-medium mb-2">Structure First</h3>
              <p className="text-sm text-gray-500">
                Order comes from alignment, not decoration.
              </p>
            </div>
          </div>
          {/* Card 2 */}
          <div className="bg-gray-50 p-8 md:aspect-square flex flex-col justify-between hover:bg-gray-100 transition-colors duration-500">
            <Type className="w-6 h-6 text-gray-400" />
            <div>
              <h3 className="text-xl font-medium mb-2">Typographic Rhythm</h3>
              <p className="text-sm text-gray-500">
                Size and weight denote importance.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Scenarios Section - The "Gallery" Feel */}
      <div className="w-full border-t border-b border-gray-100">
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-100">
          {[
            { title: "Documentation", desc: "For high-density reading without fatigue." },
            { title: "Portfolios", desc: "Let the work speak. The UI is just the frame." },
            { title: "Data Stories", desc: "Rational, objective presentation of facts." }
          ].map((item, idx) => (
            <div key={idx} className="p-12 md:p-16 group hover:bg-gray-50 transition-colors duration-500 cursor-default">
              <span className="text-xs font-mono text-gray-400 mb-4 block">0{idx + 1}</span>
              <h3 className="text-2xl font-light mb-4 group-hover:translate-x-1 transition-transform duration-500">{item.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed max-w-xs">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Materials & Texture Section */}
      <Section id="materials" className="bg-neutral-50">
        <div className="mb-16">
          <h2 className="text-3xl font-light mb-6">Materiality & Texture</h2>
          <p className="max-w-2xl text-gray-500 leading-loose">
            In the Minimalism family, texture is compressed. No gradients. No heavy drop shadows.
            The "quality" comes from the precision of lines (1px) and the purity of the whitespace.
          </p>
        </div>

        {/* UI Showcase Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

          {/* Example 1: The Clean Form */}
          <div className="bg-white p-12 border border-gray-100">
            <div className="mb-8 text-xs font-mono text-gray-400 uppercase tracking-widest">Example: Login</div>
            <div className="space-y-8">
              <div className="group">
                <label className="block text-xs font-bold text-gray-400 uppercase tracking-wide mb-2 group-focus-within:text-black transition-colors">Email Address</label>
                <input type="text" className="w-full border-b border-gray-200 py-2 outline-none focus:border-black transition-colors duration-300 bg-transparent text-lg font-light placeholder-gray-200" placeholder="user@example.com" />
              </div>
              <div className="group">
                <label className="block text-xs font-bold text-gray-400 uppercase tracking-wide mb-2 group-focus-within:text-black transition-colors">Password</label>
                <input type="password" className="w-full border-b border-gray-200 py-2 outline-none focus:border-black transition-colors duration-300 bg-transparent text-lg font-light placeholder-gray-200" placeholder="••••••••" />
              </div>
              <button className="mt-8 px-8 py-3 bg-black text-white text-sm font-medium hover:bg-gray-800 transition-colors duration-300 w-full md:w-auto">
                Sign In
              </button>
            </div>
          </div>

          {/* Example 2: The Content Card */}
          <div className="bg-white p-0 border border-gray-100 h-full flex flex-col">
            <div className="h-64 bg-gray-100 relative overflow-hidden group">
               {/* Abstract Image Placeholder */}
               <div className="absolute inset-0 bg-neutral-200 group-hover:scale-105 transition-transform duration-1000 ease-out"></div>
               <div className="absolute bottom-4 left-4 bg-white px-3 py-1 text-xs font-medium">Article</div>
            </div>
            <div className="p-8 flex-1 flex flex-col justify-between">
              <div>
                <h4 className="text-2xl font-light leading-tight mb-4">The Quiet Interface</h4>
                <p className="text-sm text-gray-500 leading-relaxed">
                  How removing visual noise improves cognitive performance and decision making in complex tools.
                </p>
              </div>
              <div className="mt-8 pt-8 border-t border-gray-100 flex justify-between items-center text-xs text-gray-400 font-mono">
                <span>READING TIME: 5 MIN</span>
                <span className="hover:text-black cursor-pointer transition-colors">READ MORE</span>
              </div>
            </div>
          </div>

        </div>
      </Section>

      {/* Interaction Lab Section */}
      <Section id="interactions">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-32">
          <div>
            <h2 className="text-3xl font-light mb-8">Restrained Interaction</h2>
            <p className="text-gray-500 leading-loose mb-8">
              Feedback is subtle. Buttons don't jump; they shift.
              Links don't explode with color; they gain a quiet underline.
              The goal is to acknowledge the user's action without breaking their concentration.
            </p>
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <Eye className="w-4 h-4" />
              <span>Hover over elements on the right</span>
            </div>
          </div>

          <div className="space-y-12">
            {/* 1. The Ghost Button */}
            <div className="flex flex-col gap-4">
              <span className="text-xs font-mono text-gray-300">BUTTON: OUTLINE</span>
              <button className="w-fit px-8 py-3 border border-gray-200 text-sm tracking-wide text-gray-600 hover:border-black hover:text-black transition-all duration-300">
                View Project
              </button>
            </div>

            {/* 2. The Text Link */}
            <div className="flex flex-col gap-4">
              <span className="text-xs font-mono text-gray-300">LINK: UNDERLINE</span>
              <a href="#" className="w-fit text-xl font-light text-black relative group">
                Download Guidelines
                <span className="absolute left-0 bottom-0 w-full h-[1px] bg-gray-200 group-hover:bg-black transition-colors duration-300"></span>
              </a>
            </div>

            {/* 3. The List Item */}
            <div className="flex flex-col gap-4">
              <span className="text-xs font-mono text-gray-300">LIST: OPACITY</span>
              <ul className="space-y-2">
                {['Introduction', 'Core Values', 'Guidelines'].map((item) => (
                  <li key={item} className="flex items-center justify-between text-gray-400 hover:text-black hover:pl-2 cursor-pointer transition-all duration-300 border-b border-transparent hover:border-gray-100 py-2">
                    <span>{item}</span>
                    <MoveRight className="w-3 h-3 opacity-0 hover:opacity-100 transition-opacity" />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Section>

      {/* Atmosphere / Summary */}
      <Section className="bg-black text-white py-32 md:py-48 text-center">
        <h2 className="text-4xl md:text-6xl font-light mb-8">Space for Thinking.</h2>
        <p className="text-gray-400 max-w-xl mx-auto leading-relaxed mb-12">
          When the noise stops, the content speaks. <br/>
          This is the atmosphere of the Minimalism family.
        </p>
        <button className="bg-white text-black px-10 py-4 text-sm font-bold tracking-wide hover:bg-gray-200 transition-colors duration-300">
          START CREATING
        </button>
      </Section>

      {/* Footer */}
      <footer className="px-6 md:px-12 py-12 border-t border-gray-100 text-xs text-gray-400 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div className="flex gap-8">
          <span>© 2024 MNML System</span>
          <a href="#" className="hover:text-black transition-colors">License</a>
          <a href="#" className="hover:text-black transition-colors">Contact</a>
        </div>
        <div className="font-mono">
          DESIGNED FOR CLARITY
        </div>
      </footer>

    </div>
  );
}
