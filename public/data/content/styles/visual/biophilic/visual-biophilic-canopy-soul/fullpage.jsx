import React, { useState, useEffect } from 'react';
import { Leaf, Wind, Sun, Droplets, Play, Pause, ChevronRight, Heart } from 'lucide-react';

/**
 * Biophilic Design System
 * * Colors:
 * - Moss Green: #3f4f3a (Primary Text/Dark)
 * - Leaf Green: #7fa850 (Accents/Buttons)
 * - Earth Brown: #8c7e72 (Secondary Text)
 * - Sky/Light: #f0f4f1 (Backgrounds)
 * - Paper: #faf9f6 (Card Backgrounds)
 * * Texture:
 * - CSS generated noise for paper feel
 * * Shapes:
 * - Organic border-radius (e.g., rounded-tl-3xl)
 */

const NoiseTexture = () => (
  <div
    className="fixed inset-0 pointer-events-none opacity-[0.03] z-50 mix-blend-multiply"
    style={{
      backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
    }}
  />
);

const LeafDecoration = ({ className }) => (
  <svg viewBox="0 0 100 100" className={`absolute text-green-800/10 pointer-events-none ${className}`} fill="currentColor">
    <path d="M50 0 C20 0 0 20 0 50 C0 80 20 100 50 100 C80 100 100 80 100 50 C100 50 100 20 50 0 Z M50 90 C30 90 10 70 10 50 C10 30 30 10 50 10 C50 10 90 30 90 50 C90 70 70 90 50 90 Z" />
    <path d="M50 10 L50 90" stroke="currentColor" strokeWidth="2" fill="none"/>
    <path d="M50 30 L80 20" stroke="currentColor" strokeWidth="2" fill="none"/>
    <path d="M50 50 L80 40" stroke="currentColor" strokeWidth="2" fill="none"/>
    <path d="M50 70 L80 60" stroke="currentColor" strokeWidth="2" fill="none"/>
    <path d="M50 30 L20 20" stroke="currentColor" strokeWidth="2" fill="none"/>
    <path d="M50 50 L20 40" stroke="currentColor" strokeWidth="2" fill="none"/>
    <path d="M50 70 L20 60" stroke="currentColor" strokeWidth="2" fill="none"/>
  </svg>
);

const Button = ({ children, variant = 'primary', icon: Icon, onClick }) => {
  const baseStyle = "group relative overflow-hidden px-8 py-3 rounded-2xl transition-all duration-200 ease-out flex items-center justify-center gap-2 font-medium tracking-wide active:scale-95 active:translate-y-0.5";
  const variants = {
    primary: "bg-[#7fa850] text-white hover:bg-[#8cb55d] hover:shadow-[0_4px_12px_rgba(127,168,80,0.3)] hover:-translate-y-0.5",
    secondary: "bg-[#e8ece6] text-[#3f4f3a] hover:bg-[#dde2db] hover:shadow-sm hover:-translate-y-0.5",
    outline: "border-2 border-[#7fa850] text-[#3f4f3a] hover:bg-[#7fa850] hover:text-white hover:-translate-y-0.5"
  };

  return (
    <button className={`${baseStyle} ${variants[variant]}`} onClick={onClick}>
      {children}
      {Icon && <Icon className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />}
    </button>
  );
};

const FeatureCard = ({ icon: Icon, title, desc }) => (
  <div className="group p-8 bg-[#faf9f6] rounded-[2rem] shadow-[0_2px_10px_rgba(63,79,58,0.05)] transition-all duration-300 hover:shadow-[0_12px_24px_rgba(63,79,58,0.1)] hover:-translate-y-1 hover:brightness-[1.02] border border-[#f0f0e8]">
    <div className="w-14 h-14 bg-[#edf2e6] rounded-2xl flex items-center justify-center mb-6 text-[#4a5d23] group-hover:scale-110 transition-transform duration-300 rounded-tr-[1.5rem] rounded-bl-[1.5rem]">
      <Icon className="w-7 h-7" />
    </div>
    <h3 className="text-xl font-serif text-[#3f4f3a] mb-3">{title}</h3>
    <p className="text-[#8c7e72] leading-relaxed text-sm">{desc}</p>
  </div>
);

const BreathingExercise = () => {
  const [isActive, setIsActive] = useState(false);
  const [phase, setPhase] = useState('Inhale');

  useEffect(() => {
    if (!isActive) return;

    const cycle = async () => {
      setPhase('Inhale');
      await new Promise(r => setTimeout(r, 4000));
      if (!isActive) return;
      setPhase('Hold');
      await new Promise(r => setTimeout(r, 2000));
      if (!isActive) return;
      setPhase('Exhale');
      await new Promise(r => setTimeout(r, 4000));
      if (isActive) cycle();
    };

    cycle();
    return () => setPhase('Ready');
  }, [isActive]);

  return (
    <div className="bg-[#eef2eb] rounded-[3rem] p-10 flex flex-col items-center justify-center relative overflow-hidden h-[400px]">
      <div className={`absolute w-64 h-64 bg-[#dbe6cf] rounded-full blur-3xl transition-all duration-[4000ms] ease-in-out ${phase === 'Inhale' ? 'scale-125 opacity-80' : phase === 'Exhale' ? 'scale-90 opacity-40' : 'scale-100 opacity-60'}`} />

      <div className={`relative z-10 w-48 h-48 rounded-full border-4 border-[#fff] shadow-xl flex items-center justify-center transition-all duration-[4000ms] ease-in-out bg-white/30 backdrop-blur-sm ${phase === 'Inhale' ? 'scale-110' : phase === 'Exhale' ? 'scale-90' : 'scale-100'}`}>
        <div className={`w-full h-full rounded-full bg-[#7fa850]/20 absolute transition-all duration-[4000ms] ${phase === 'Inhale' ? 'scale-100' : 'scale-0'}`} />
        <span className="text-2xl font-serif text-[#3f4f3a] relative z-20">
          {isActive ? phase : "Breathe"}
        </span>
      </div>

      <div className="mt-8 z-10">
        <button
          onClick={() => setIsActive(!isActive)}
          className="bg-white text-[#3f4f3a] p-4 rounded-full shadow-lg hover:scale-105 active:scale-95 transition-all duration-200"
        >
          {isActive ? <Pause className="w-6 h-6 fill-current" /> : <Play className="w-6 h-6 fill-current ml-1" />}
        </button>
      </div>
    </div>
  );
};

export default function BiophilicApp() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#f9f7f2] font-sans selection:bg-[#dbe6cf] selection:text-[#3f4f3a] overflow-x-hidden relative">
      <NoiseTexture />

      <nav className={`fixed top-0 w-full z-40 transition-all duration-300 ${scrolled ? 'bg-[#f9f7f2]/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-[#4a5d23] rounded-tr-xl rounded-bl-xl flex items-center justify-center text-[#f9f7f2]">
              <Leaf className="w-5 h-5" />
            </div>
            <span className="font-serif text-2xl text-[#3f4f3a] tracking-tight">Canopy & Soul</span>
          </div>

          <div className="hidden md:flex items-center gap-8 text-[#5c544e] font-medium text-sm tracking-wide">
            <a href="#" className="hover:text-[#4a5d23] transition-colors">Retreats</a>
            <a href="#" className="hover:text-[#4a5d23] transition-colors">Sounds</a>
            <a href="#" className="hover:text-[#4a5d23] transition-colors">Journal</a>
            <Button variant="primary">Start Healing</Button>
          </div>
        </div>
      </nav>

      <header className="pt-32 pb-20 relative">
        <LeafDecoration className="w-96 h-96 top-0 right-[-100px] rotate-45 opacity-20" />
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative z-10">
            <div className="inline-block px-4 py-2 bg-[#e8ece6] text-[#4a5d23] rounded-full text-xs font-bold tracking-widest uppercase mb-6">
              Reconnect with Nature
            </div>
            <h1 className="text-5xl lg:text-7xl font-serif text-[#3f4f3a] leading-[1.1] mb-6">
              Breathe in the <br/>
              <span className="italic text-[#7fa850]">forest light.</span>
            </h1>
            <p className="text-xl text-[#8c7e72] mb-10 max-w-md leading-relaxed">
              A digital sanctuary designed to bring the organic rhythm of the outdoors into your daily meditation practice.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button variant="primary" icon={ChevronRight}>Begin Journey</Button>
              <Button variant="secondary" icon={Play}>Listen to Rain</Button>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10 rounded-[3rem] rounded-tr-[8rem] overflow-hidden shadow-[0_20px_40px_rgba(63,79,58,0.1)] bg-[#eef2eb] group">
              <img
                src="https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Sunlight through leaves"
                className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-105 opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#3f4f3a]/40 to-transparent mix-blend-multiply pointer-events-none" />
            </div>
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-[#dbe6cf] rounded-full -z-10 mix-blend-multiply opacity-80" />
            <div className="absolute -top-8 -right-8 w-40 h-40 bg-[#f0f4f1] rounded-full -z-10 mix-blend-multiply" />
          </div>
        </div>
      </header>

      <section className="py-24 bg-[#f0f4f1]/50 relative">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-serif text-[#3f4f3a] mb-4">Organic Design for Mental Space</h2>
            <p className="text-[#8c7e72]">Experience a user interface that mimics the natural world, reducing cognitive load and increasing focus.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              icon={Sun}
              title="Circadian Rhythms"
              desc="The interface adapts its brightness and color temperature based on your local sunrise and sunset times."
            />
            <FeatureCard
              icon={Wind}
              title="Fluid Motion"
              desc="Animations mimic the physics of wind and water, moving at a gentle 220ms pace to soothe the eyes."
            />
            <FeatureCard
              icon={Droplets}
              title="Digital Detox"
              desc="High contrast typography and ample whitespace reduce eye strain, mimicking the feel of printed paper."
            />
          </div>
        </div>
      </section>

      <section className="py-24 relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <BreathingExercise />
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="text-4xl font-serif text-[#3f4f3a] mb-6">Pause & Resonate</h2>
            <p className="text-[#8c7e72] mb-8 text-lg leading-relaxed">
              Our biophilic tools are designed not just to be used, but to be felt. The "Breathing Seed" mimics the expansion of lungs and the blooming of flowers.
            </p>
            <ul className="space-y-4 mb-8">
              {[
                "Visual cues inspired by plant growth",
                "Gentle haptic feedback (mobile only)",
                "Soundscapes recorded in Olympic National Park"
              ].map((item, i) => (
                <li key={i} className="flex items-center text-[#5c544e]">
                  <div className="w-2 h-2 rounded-full bg-[#7fa850] mr-4" />
                  {item}
                </li>
              ))}
            </ul>
            <Button variant="outline">Explore All Tools</Button>
          </div>
        </div>
      </section>

      <section className="py-32 relative bg-[#4a5d23] text-[#f9f7f2] overflow-hidden">
        <LeafDecoration className="w-full h-full absolute top-0 left-0 text-white/5 opacity-10" />
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <Heart className="w-12 h-12 mx-auto mb-8 text-[#98b874]" />
          <blockquote className="text-3xl md:text-5xl font-serif leading-tight mb-10">
            "Look deep into nature, and then you will understand everything better."
          </blockquote>
          <cite className="not-italic text-[#98b874] font-medium tracking-wide">— Albert Einstein</cite>
        </div>
      </section>

      <footer className="bg-[#f9f7f2] pt-20 pb-10 border-t border-[#e8ece6]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <Leaf className="w-6 h-6 text-[#4a5d23]" />
                <span className="font-serif text-xl text-[#3f4f3a]">Canopy & Soul</span>
              </div>
              <p className="text-[#8c7e72] max-w-xs">
                Designing digital experiences that honor our biological connection to the natural world.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-[#3f4f3a] mb-4 uppercase text-xs tracking-wider">Platform</h4>
              <ul className="space-y-3 text-[#5c544e] text-sm">
                <li><a href="#" className="hover:text-[#4a5d23]">iOS App</a></li>
                <li><a href="#" className="hover:text-[#4a5d23]">Android App</a></li>
                <li><a href="#" className="hover:text-[#4a5d23]">Web Player</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-[#3f4f3a] mb-4 uppercase text-xs tracking-wider">Company</h4>
              <ul className="space-y-3 text-[#5c544e] text-sm">
                <li><a href="#" className="hover:text-[#4a5d23]">Manifesto</a></li>
                <li><a href="#" className="hover:text-[#4a5d23]">Sustainability</a></li>
                <li><a href="#" className="hover:text-[#4a5d23]">Contact</a></li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center text-xs text-[#8c7e72] pt-8 border-t border-[#e8ece6]">
            <p>&copy; 2024 Canopy & Soul. All rights rooted.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-[#4a5d23]">Privacy</a>
              <a href="#" className="hover:text-[#4a5d23]">Terms</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
