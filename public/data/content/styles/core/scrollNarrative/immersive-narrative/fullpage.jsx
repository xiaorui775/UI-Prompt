import React, { useState, useEffect, useRef } from 'react';
import { ArrowDown, ArrowUp, Zap, Layers, Eye, Move, Smartphone, MousePointer, Activity, Box, Hexagon } from 'lucide-react';

// --- Styles & Animations ---
const styleTag = `
@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
}
@keyframes pulse-ring {
  0% { transform: scale(0.8); opacity: 0.5; }
  100% { transform: scale(1.3); opacity: 0; }
}
@keyframes slide-up-fade {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
@keyframes rotate-slow {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}
.animate-float { animation: float 6s ease-in-out infinite; }
.animate-pulse-ring { animation: pulse-ring 3s cubic-bezier(0.4, 0, 0.6, 1) infinite; }
.animate-slide-up { animation: slide-up-fade 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
.animate-spin-slow { animation: rotate-slow 12s linear infinite; }
.perspective-1000 { perspective: 1000px; }
.preserve-3d { transform-style: preserve-3d; }
`;

// --- Components ---

// 1. Navigation / Progress Bar
const ProgressBar = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scroll = `${totalScroll / windowHeight}`;
      setScrollProgress(Number(scroll));
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <style>{styleTag}</style>
      <div className="fixed top-0 left-0 w-full h-2 z-50 bg-slate-100/20 backdrop-blur-sm">
        <div
          className="h-full bg-gradient-to-r from-blue-600 via-purple-600 to-rose-600 transition-all duration-100 ease-out"
          style={{ width: `${scrollProgress * 100}%` }}
        />
      </div>
    </>
  );
};

// 2. Animated Section Header
const AnimatedTitle = ({ text, isActive }) => {
  // Split text for stagger effect
  const words = text.split(" ");
  return (
    <h2 className="text-4xl md:text-6xl font-serif font-bold text-slate-900 mb-6 leading-tight overflow-hidden">
      {words.map((word, i) => (
        <span
          key={i}
          className={`inline-block transition-all duration-700 delay-[${i * 100}ms] transform ${isActive ? 'translate-y-0 opacity-100 blur-0' : 'translate-y-full opacity-0 blur-sm'}`}
          style={{ transitionDelay: `${i * 100}ms` }}
        >
          {word}&nbsp;
        </span>
      ))}
    </h2>
  );
};

const SectionHeader = ({ number, title, subtitle, isActive }) => (
  <div className="mb-8 md:mb-12">
    <div className={`flex items-center gap-3 mb-4 transition-all duration-700 ${isActive ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}>
        <div className="h-[1px] w-12 bg-slate-400"></div>
        <span className="text-xs font-bold tracking-[0.2em] text-slate-500 uppercase">
        Chapter {number}
        </span>
    </div>

    <AnimatedTitle text={title} isActive={isActive} />

    <p className={`text-lg md:text-xl text-slate-600 leading-relaxed transition-all duration-1000 delay-300 ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
      {subtitle}
    </p>
  </div>
);

// 3. Narrative Step (The scrolling text card)
const Step = ({ id, activeId, children, onInView }) => {
  const stepRef = useRef(null);
  const isActive = activeId === id;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          onInView(id);
        }
      },
      {
        root: null,
        rootMargin: '-45% 0px -45% 0px', // Precise center trigger
        threshold: 0,
      }
    );

    if (stepRef.current) observer.observe(stepRef.current);
    return () => {
      if (stepRef.current) observer.unobserve(stepRef.current);
    };
  }, [id, onInView]);

  return (
    <div
      ref={stepRef}
      className={`
        relative z-10 my-[70vh] p-8 md:p-12
        bg-white/80 backdrop-blur-xl border border-white/50
        shadow-[0_8px_32px_rgba(0,0,0,0.05)] rounded-3xl
        transition-all duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1)]
        max-w-xl mx-auto md:mx-0 md:ml-12 lg:ml-24
        ${isActive
          ? 'opacity-100 translate-x-0 scale-100 blur-0 border-l-4 border-l-blue-500'
          : 'opacity-30 -translate-x-8 scale-95 blur-[2px] border-l-4 border-l-transparent'}
      `}
    >
      {/* Dynamic decoration for active state */}
      <div className={`absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full -z-10 transition-all duration-700 ${isActive ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`} />

      {/* Clone children with isActive prop if applicable */}
      {React.Children.map(children, child => {
          if (React.isValidElement(child)) {
              return React.cloneElement(child, { isActive });
          }
          return child;
      })}
    </div>
  );
};

// 4. Visual Stage (The sticky background)
const VisualStage = ({ activeStep }) => {
  const renderVisual = () => {
    switch(activeStep) {
      case 'intro':
        return (
          <div className="flex flex-col items-center justify-center h-full perspective-1000">
            <div className="relative w-64 h-64 flex items-center justify-center preserve-3d animate-float">
               {/* Orbital Rings */}
               <div className="absolute inset-0 border-2 border-slate-200 rounded-full animate-spin-slow" style={{ transform: 'rotateX(70deg)' }}></div>
               <div className="absolute inset-0 border-2 border-slate-200 rounded-full animate-spin-slow" style={{ animationDirection: 'reverse', transform: 'rotateY(70deg)', width: '120%', height: '120%', left: '-10%', top: '-10%' }}></div>

               {/* Core Content */}
               <div className="w-32 h-32 bg-slate-900 rounded-2xl flex items-center justify-center shadow-2xl z-10 transform transition-transform duration-500 hover:rotate-12 hover:scale-110">
                  <Box className="text-white w-12 h-12" />
               </div>

               {/* Floating Badges */}
               <div className="absolute -top-12 right-0 bg-white p-2 rounded-lg shadow-lg text-xs font-bold animate-bounce delay-700">Static</div>
               <div className="absolute -bottom-8 left-0 bg-white p-2 rounded-lg shadow-lg text-xs font-bold animate-bounce delay-100">Flat</div>
            </div>
            <div className="mt-12 text-center">
                <h3 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-700 to-slate-900">The Static Era</h3>
                <div className="w-full h-1 bg-slate-100 mt-4 rounded-full overflow-hidden">
                    <div className="h-full bg-slate-800 w-1/3 animate-pulse"></div>
                </div>
            </div>
          </div>
        );
      case 'structure':
        return (
          <div className="flex items-center justify-center h-full w-full">
            <div className="relative w-72 h-96 perspective-1000 group">
                {/* Fan out animation */}
                 <div className="absolute inset-0 bg-white border border-slate-200 rounded-xl shadow-sm transform transition-all duration-1000 ease-out origin-bottom-left translate-y-0 rotate-0 z-30 flex items-center justify-center">
                    <span className="font-serif text-2xl font-bold text-slate-800">Content</span>
                 </div>
                 <div className="absolute inset-0 bg-blue-50 border border-blue-100 rounded-xl shadow-sm transform transition-all duration-1000 ease-out origin-bottom-left translate-y-4 translate-x-4 -rotate-3 z-20 flex items-center justify-center opacity-80">
                    <span className="font-serif text-2xl font-bold text-blue-800">Layout</span>
                 </div>
                 <div className="absolute inset-0 bg-slate-800 rounded-xl shadow-xl transform transition-all duration-1000 ease-out origin-bottom-left translate-y-8 translate-x-8 -rotate-6 z-10 flex items-center justify-center opacity-60">
                    <span className="font-serif text-2xl font-bold text-white">Grid</span>
                 </div>

                 {/* Floating Labels */}
                 <div className="absolute -right-24 top-20 bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-sm font-bold animate-pulse">
                    Visible
                 </div>
            </div>
          </div>
        );
      case 'interaction':
        return (
          <div className="w-full max-w-md relative perspective-1000">
             <div className="grid grid-cols-2 gap-6 transform rotate-x-12 transition-all duration-1000">
                 {/* Card 1 */}
                 <div className="bg-white p-6 rounded-2xl shadow-xl border-b-4 border-rose-500 transform transition-all duration-500 hover:-translate-y-2 group cursor-pointer">
                    <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-rose-500 transition-colors">
                        <MousePointer className="text-rose-500 group-hover:text-white transition-colors" />
                    </div>
                    <div className="h-2 w-16 bg-slate-200 rounded mb-2"></div>
                    <div className="h-2 w-full bg-slate-100 rounded"></div>
                 </div>

                 {/* Card 2 */}
                 <div className="bg-white p-6 rounded-2xl shadow-xl border-b-4 border-indigo-500 transform transition-all duration-500 translate-y-8 hover:translate-y-6 group cursor-pointer">
                    <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-indigo-500 transition-colors">
                        <Smartphone className="text-indigo-500 group-hover:text-white transition-colors" />
                    </div>
                    <div className="h-2 w-16 bg-slate-200 rounded mb-2"></div>
                    <div className="h-2 w-full bg-slate-100 rounded"></div>
                 </div>
             </div>

             {/* Central Pulse */}
             <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0">
                 <div className="w-64 h-64 bg-gradient-to-r from-rose-200 to-indigo-200 rounded-full blur-3xl opacity-30 animate-pulse"></div>
             </div>
          </div>
        );
      case 'immersion':
        return (
          <div className="relative w-full h-full flex items-center justify-center overflow-hidden bg-slate-950 rounded-3xl shadow-2xl border border-slate-800">
             {/* Dynamic Gradient Background */}
             <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_#1e293b_0%,_#020617_100%)]"></div>

             {/* Floating Particles */}
             <div className="absolute inset-0 overflow-hidden">
                {[...Array(20)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute bg-white/20 rounded-full blur-[1px] animate-float"
                        style={{
                            width: Math.random() * 6 + 2 + 'px',
                            height: Math.random() * 6 + 2 + 'px',
                            left: Math.random() * 100 + '%',
                            top: Math.random() * 100 + '%',
                            animationDuration: Math.random() * 5 + 5 + 's',
                            animationDelay: Math.random() * 2 + 's'
                        }}
                    ></div>
                ))}
             </div>

             <div className="relative z-10 text-center transform transition-all duration-1000 scale-100">
                <div className="inline-flex items-center justify-center p-8 border border-white/10 rounded-full bg-white/5 backdrop-blur-md mb-8 relative">
                    <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-xl animate-pulse"></div>
                    <Eye className="w-16 h-16 text-white relative z-10" />
                </div>
                <h2 className="text-5xl font-serif text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-200 to-slate-400 font-bold tracking-tight">
                    Total Focus
                </h2>
             </div>
          </div>
        );
      default:
        return <div className="text-slate-300 animate-pulse">Scroll to explore</div>;
    }
  };

  return (
    <div className="sticky top-0 h-screen w-full flex items-center justify-center bg-slate-50 overflow-hidden border-l border-slate-200/50">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 opacity-30 pointer-events-none"
           style={{ backgroundImage: 'radial-gradient(#cbd5e1 1px, transparent 1px)', backgroundSize: '32px 32px' }}>
      </div>

      <div className="w-full h-full max-w-2xl max-h-[80vh] flex items-center justify-center p-8 transition-all duration-1000 ease-in-out">
        {renderVisual()}
      </div>
    </div>
  );
};

// --- Main App ---

export default function ScrollyTellingApp() {
  const [activeStep, setActiveStep] = useState('intro');
  const [showTopBtn, setShowTopBtn] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    const checkScroll = () => {
      if (window.scrollY > 800) setShowTopBtn(true);
      else setShowTopBtn(false);
    };
    window.addEventListener('scroll', checkScroll);
    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className={`font-sans text-slate-800 bg-slate-50/50 selection:bg-rose-500 selection:text-white transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      <ProgressBar />

      {/* Hero Section */}
      <header className="h-screen flex flex-col items-center justify-center relative px-6 overflow-hidden">
        {/* Dynamic Background */}
        <div className="absolute inset-0 z-0">
            <div className="absolute top-0 right-0 w-[50vw] h-[50vh] bg-blue-200/20 rounded-full blur-[100px] animate-pulse"></div>
            <div className="absolute bottom-0 left-0 w-[50vw] h-[50vh] bg-rose-200/20 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="max-w-5xl mx-auto text-center z-10 relative">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 shadow-sm mb-8 animate-slide-up opacity-0" style={{ animationDelay: '0ms', animationFillMode: 'forwards' }}>
             <Activity size={16} className="text-blue-600" />
             <span className="text-xs font-bold tracking-widest text-slate-500 uppercase">Interactive Report 2024</span>
          </div>

          <h1 className="text-6xl md:text-9xl font-serif font-bold text-slate-900 mb-8 leading-[0.9] tracking-tighter animate-slide-up opacity-0" style={{ animationDelay: '200ms', animationFillMode: 'forwards' }}>
            The Art of <br />
            <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-rose-600">
              Scrollytelling
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-slate-600 max-w-2xl mx-auto mb-12 leading-relaxed animate-slide-up opacity-0" style={{ animationDelay: '400ms', animationFillMode: 'forwards' }}>
            Transforming static data into fluid narratives through <span className="font-semibold text-slate-900">rhythm</span>, <span className="font-semibold text-slate-900">motion</span>, and <span className="font-semibold text-slate-900">structure</span>.
          </p>

          <div className="animate-bounce mt-12 text-slate-400 opacity-0 animate-slide-up" style={{ animationDelay: '800ms', animationFillMode: 'forwards' }}>
            <ArrowDown size={32} />
          </div>
        </div>
      </header>

      {/* Scrollytelling Container */}
      <main className="relative z-10">
        <div className="md:grid md:grid-cols-2">

          {/* Left Column: Narrative (Scrolls) */}
          <div className="relative px-6 md:px-0 pb-32 pt-32">

            {/* Step 1 */}
            <Step id="intro" activeId={activeStep} onInView={setActiveStep}>
              <SectionHeader
                number="01"
                title="Structured Focus"
                subtitle="In a world of noise, clarity is king. We separate visuals from text to guide the eye precisely."
              />
              <div className={`mt-6 p-4 bg-slate-50 rounded-lg border border-slate-100 text-sm text-slate-500 italic transform transition-all duration-700 delay-500 ${activeStep === 'intro' ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
                 Tip: Keep the user centered. Sticky elements reduce cognitive load by 40%.
              </div>
            </Step>

            {/* Step 2 */}
            <Step id="structure" activeId={activeStep} onInView={setActiveStep}>
              <SectionHeader
                number="02"
                title="Visual Rhythm"
                subtitle="Animation isn't just decoration; it's the heartbeat of the story."
              />
              <div className="space-y-6 mt-8">
                 {[
                   { icon: Layers, title: "Depth", text: "Elements enter in z-space." },
                   { icon: Hexagon, title: "Geometry", text: "Shapes guide the flow." }
                 ].map((item, i) => (
                    <div key={i} className={`flex items-center gap-4 transition-all duration-500 delay-${500 + (i*200)} ${activeStep === 'structure' ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
                       <div className="p-3 bg-blue-50 rounded-xl text-blue-600 shadow-sm">
                         <item.icon size={24} />
                       </div>
                       <div>
                         <h4 className="font-bold text-slate-900">{item.title}</h4>
                         <p className="text-sm text-slate-500">{item.text}</p>
                       </div>
                    </div>
                 ))}
              </div>
            </Step>

            {/* Step 3 */}
            <Step id="interaction" activeId={activeStep} onInView={setActiveStep}>
               <SectionHeader
                number="03"
                title="Dynamic Feedback"
                subtitle="The user is the director. Their scroll determines the pace of the film."
              />
              <p className="text-slate-600 leading-relaxed mb-6">
                As you scroll here, the visual changes to represent interactivity. We use scale, color shifts, and positional changes to reward the scrolling action.
              </p>
              <div className={`h-1 w-full bg-slate-100 rounded-full overflow-hidden transition-all duration-1000 ${activeStep === 'interaction' ? 'opacity-100' : 'opacity-0'}`}>
                 <div className="h-full bg-rose-500 w-2/3 animate-[shimmer_2s_infinite]"></div>
              </div>
            </Step>

            {/* Step 4 */}
            <Step id="immersion" activeId={activeStep} onInView={setActiveStep}>
              <SectionHeader
                number="04"
                title="Total Immersion"
                subtitle="When narrative and visual merge completely."
              />
              <p className="text-slate-600 leading-relaxed">
                In key moments, we darken the mood or expand the visual to fill the mental space. This signals a conclusion or a crucial data insight.
              </p>
              <button className="mt-8 group relative px-8 py-4 bg-slate-900 text-white rounded-full overflow-hidden transition-all hover:shadow-[0_0_20px_rgba(59,130,246,0.5)]">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <span className="relative z-10 flex items-center gap-2 font-bold">
                  Start Your Project <Zap size={18} className="group-hover:rotate-12 transition-transform" />
                </span>
              </button>
            </Step>

            <div className="h-[20vh]"></div>
          </div>

          {/* Right Column: Visual Stage (Sticky) */}
          <div className="hidden md:block h-full relative z-0">
             <VisualStage activeStep={activeStep} />
          </div>

        </div>
      </main>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-400 py-32 px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_#1e293b_0%,_transparent_50%)]"></div>
        <div className="max-w-2xl mx-auto relative z-10">
           <h2 className="text-4xl md:text-5xl font-serif text-white mb-8">Ready to tell your story?</h2>
           <div className="flex justify-center gap-12 text-xs font-bold uppercase tracking-widest mb-16">
              {['Twitter', 'LinkedIn', 'Email'].map((link) => (
                <span key={link} className="hover:text-white cursor-pointer transition-colors hover:underline decoration-rose-500 underline-offset-4">{link}</span>
              ))}
           </div>
           <p className="text-slate-700">© 2024 Scrollytelling Design System.</p>
        </div>
      </footer>

      {/* Back to Top */}
      <button
        onClick={scrollToTop}
        className={`
          fixed bottom-8 right-8 p-4 rounded-full bg-white shadow-2xl border border-slate-100 text-slate-900
          transition-all duration-500 z-50 hover:scale-110 hover:shadow-blue-500/20 hover:-translate-y-1
          ${showTopBtn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}
        `}
        aria-label="Back to top"
      >
        <ArrowUp size={20} />
      </button>

    </div>
  );
}