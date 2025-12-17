// Sunset Horizon - Synthwave Landing Page
// Dependencies: React hooks and Lucide icons are provided by reactRuntime.js

function App() {
  const [time, setTime] = useState(new Date());
  const [activeWindow, setActiveWindow] = useState('home');
  const [bootSequence, setBootSequence] = useState(true);

  // Clock effect
  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  // Boot sequence effect
  useEffect(() => {
    const timer = setTimeout(() => setBootSequence(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const formatTime = (date) => {
    return date.toLocaleTimeString('en-US', {
      hour12: false,
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });
  };

  const formatDate = (date) => {
    return date.toLocaleDateString('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric'
    }).toUpperCase();
  };

  return (
    <div className="relative w-full h-screen overflow-hidden bg-[#050510] text-cyan-400 font-sans selection:bg-pink-500 selection:text-white">
      {/* ---------------------------------------------------------
        GLOBAL STYLES & FONTS
        ---------------------------------------------------------
      */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;700;900&family=Share+Tech+Mono&display=swap');

        :root {
          --neon-pink: #ff00ff;
          --neon-cyan: #00ffff;
          --neon-yellow: #facc15;
          --dark-bg: #0a0a1a;
          --glass-bg: rgba(10, 10, 26, 0.85);
        }

        body {
          font-family: 'Orbitron', sans-serif;
          margin: 0;
          overflow: hidden;
        }

        .font-mono-tech {
          font-family: 'Share Tech Mono', monospace;
        }

        /* Scanlines */
        .scanlines {
          background: linear-gradient(
            to bottom,
            rgba(255,255,255,0),
            rgba(255,255,255,0) 50%,
            rgba(0,0,0,0.2) 50%,
            rgba(0,0,0,0.2)
          );
          background-size: 100% 4px;
          position: fixed;
          top: 0; left: 0; right: 0; bottom: 0;
          pointer-events: none;
          z-index: 50;
        }

        /* Animations */
        @keyframes flicker {
          0% { opacity: 0.97; }
          5% { opacity: 0.95; }
          10% { opacity: 0.9; }
          15% { opacity: 0.95; }
          20% { opacity: 0.98; }
          50% { opacity: 0.95; }
          80% { opacity: 0.9; }
          100% { opacity: 0.97; }
        }
        .crt-flicker { animation: flicker 0.15s infinite; }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .animate-float { animation: float 6s ease-in-out infinite; }

        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 10px var(--neon-cyan), inset 0 0 5px var(--neon-cyan); }
          50% { box-shadow: 0 0 20px var(--neon-cyan), inset 0 0 10px var(--neon-cyan); }
        }
        .animate-pulse-glow { animation: pulse-glow 3s infinite; }

        /* Retro Grid */
        .retro-grid {
          position: absolute;
          width: 200%;
          height: 100%;
          bottom: -50%;
          left: -50%;
          background-image:
            linear-gradient(var(--neon-pink) 1px, transparent 1px),
            linear-gradient(90deg, var(--neon-pink) 1px, transparent 1px);
          background-size: 50px 50px;
          background-position: center bottom;
          transform: perspective(500px) rotateX(60deg);
          animation: gridMove 20s linear infinite;
          opacity: 0.15;
          box-shadow: 0 0 50px var(--neon-pink);
          mask-image: linear-gradient(to top, black 40%, transparent 100%);
        }

        @keyframes gridMove {
          0% { transform: perspective(500px) rotateX(60deg) translateY(0); }
          100% { transform: perspective(500px) rotateX(60deg) translateY(50px); }
        }

        /* Glow Utilities */
        .text-glow-cyan { text-shadow: 0 0 10px var(--neon-cyan); }
        .text-glow-pink { text-shadow: 0 0 10px var(--neon-pink); }
        .text-glow-yellow { text-shadow: 0 0 10px var(--neon-yellow); }

        .border-glow-cyan { box-shadow: 0 0 10px var(--neon-cyan), inset 0 0 5px var(--neon-cyan); }
        .border-glow-pink { box-shadow: 0 0 10px var(--neon-pink), inset 0 0 5px var(--neon-pink); }

        /* Scrollbar */
        ::-webkit-scrollbar { width: 8px; }
        ::-webkit-scrollbar-track { background: #0a0a1a; }
        ::-webkit-scrollbar-thumb { background: #00ffff; border-radius: 4px; }

        .clip-corner {
          clip-path: polygon(
            10px 0, 100% 0, 100% calc(100% - 10px),
            calc(100% - 10px) 100%, 0 100%, 0 10px
          );
        }
      `}</style>

      {/* ---------------------------------------------------------
        BACKGROUND ENVIRONMENT
        ---------------------------------------------------------
      */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#050510] via-[#120a2e] to-[#2b082b]">
        {/* Retro Sun */}
        <div className="absolute bottom-[15%] left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-gradient-to-t from-yellow-400 via-pink-500 to-transparent blur-2xl opacity-40"></div>
        <div className="absolute bottom-[20%] left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-gradient-to-t from-yellow-300 to-pink-600 opacity-80"
             style={{ clipPath: 'polygon(0 0, 100% 0, 100% 55%, 0 55%, 0 60%, 100% 60%, 100% 65%, 0 65%, 0 70%, 100% 70%, 100% 75%, 0 75%, 0 80%, 100% 80%, 100% 85%, 0 85%, 0 100%)' }}>
        </div>

        {/* Grid Floor */}
        <div className="retro-grid"></div>

        {/* Stars */}
        <div className="absolute top-0 left-0 w-full h-2/3 opacity-70"
             style={{backgroundImage: 'radial-gradient(white 1px, transparent 1px)', backgroundSize: '70px 70px'}}></div>
      </div>

      {/* ---------------------------------------------------------
        MAIN UI INTERFACE
        ---------------------------------------------------------
      */}
      <div className={`relative z-10 flex flex-col h-full crt-flicker transition-opacity duration-1000 ${bootSequence ? 'opacity-0' : 'opacity-100'}`}>

        {/* HEADER COMPONENT */}
        <header className="h-16 border-b border-cyan-500/30 bg-[#0a0a1a]/90 backdrop-blur-md flex items-center justify-between px-6 box-shadow-lg z-20">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 border border-cyan-400 flex items-center justify-center animate-pulse-glow bg-cyan-900/20">
              <Terminal size={20} />
            </div>
            <div>
              <h1 className="text-xl font-bold tracking-widest text-glow-cyan uppercase">
                Sunset Horizon <span className="text-pink-500 text-sm ml-2 tracking-normal opacity-80">日落地平线</span>
              </h1>
              <div className="flex items-center gap-2 text-[10px] text-cyan-300/70 font-mono-tech">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                SYSTEM ONLINE // V.2.0.84
              </div>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            {['HOME', 'MODULES', 'LOGS', 'NETWORK'].map((item) => (
              <button
                key={item}
                onClick={() => setActiveWindow(item.toLowerCase())}
                className={`text-sm tracking-widest hover:text-pink-400 transition-colors duration-300 relative group ${activeWindow === item.toLowerCase() ? 'text-pink-500 text-glow-pink' : 'text-cyan-400'}`}
              >
                {item}
                <span className={`absolute -bottom-1 left-0 h-[2px] bg-pink-500 transition-all duration-300 ${activeWindow === item.toLowerCase() ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-4 text-cyan-400">
            <div className="text-right hidden sm:block">
              <div className="text-lg font-bold font-mono-tech leading-none">{formatTime(time)}</div>
              <div className="text-[10px] text-pink-400 font-mono-tech tracking-wider">{formatDate(time)}</div>
            </div>
            <div className="h-8 w-[1px] bg-cyan-500/30 mx-2"></div>
            <div className="flex gap-3">
              <Wifi size={18} className="opacity-70" />
              <Battery size={18} className="opacity-70" />
            </div>
          </div>
        </header>

        {/* MAIN CONTENT AREA */}
        <main className="flex-1 overflow-y-auto p-4 md:p-8 custom-scrollbar relative">

          {/* Hero Section */}
          <section className="min-h-[60vh] flex flex-col items-center justify-center text-center relative mb-20">
            <div className="relative z-10 animate-float">
              <div className="border border-pink-500/50 bg-black/40 backdrop-blur-sm px-4 py-1 rounded-full mb-6 inline-block">
                <span className="text-pink-400 text-xs tracking-[0.3em] font-mono-tech uppercase">Welcome to the grid</span>
              </div>
              <h2 className="text-5xl md:text-8xl font-black italic tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-cyan-300 via-white to-pink-500 filter drop-shadow-[0_0_15px_rgba(0,255,255,0.5)] mb-4">
                NEON<br />DREAMS
              </h2>
              <p className="max-w-xl mx-auto text-cyan-200/80 text-lg font-light tracking-wide mb-8 leading-relaxed">
                Experience the digital nostalgia of a future that never was.
                Navigate the synthwave spectrum through our immersive interface.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-3 bg-pink-600 hover:bg-pink-500 text-white font-bold tracking-widest clip-corner border-b-4 border-pink-800 active:border-b-0 active:translate-y-1 transition-all shadow-[0_0_20px_rgba(255,0,255,0.4)]">
                  INITIATE SYSTEM
                </button>
                <button className="px-8 py-3 bg-transparent border border-cyan-400 text-cyan-400 hover:bg-cyan-400/10 font-bold tracking-widest clip-corner active:translate-y-1 transition-all">
                  VIEW DOCS
                </button>
              </div>
            </div>
          </section>

          {/* Feature Grid / Components Section */}
          <section className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">

            {/* Card 1: Audio */}
            <div className="bg-[#0a0a1a]/80 border border-cyan-500/50 p-6 relative group hover:border-pink-500 transition-colors duration-300 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="absolute top-0 right-0 p-2 opacity-50 group-hover:opacity-100 transition-opacity">
                <Music className="text-pink-400" size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-pink-300 transition-colors flex items-center gap-2">
                <span className="w-2 h-2 bg-cyan-400 group-hover:bg-pink-500 rounded-full"></span>
                Synth Player
              </h3>
              <p className="text-sm text-gray-400 mb-6 font-mono-tech leading-relaxed">
                High-fidelity audio processing unit. Visualizer enabled. 8-bit support included.
              </p>
              <div className="h-24 bg-black/50 border border-cyan-900/50 rounded flex items-center justify-center relative overflow-hidden">
                <div className="flex gap-1 items-end h-12">
                   {[40, 70, 30, 80, 50, 90, 20, 60].map((h, i) => (
                     <div key={i} className="w-2 bg-pink-500/80 animate-pulse" style={{height: `${h}%`, animationDelay: `${i * 0.1}s`}}></div>
                   ))}
                </div>
              </div>
            </div>

            {/* Card 2: Terminal */}
            <div className="bg-[#0a0a1a]/80 border border-cyan-500/50 p-6 relative group hover:border-pink-500 transition-colors duration-300">
               <div className="absolute top-0 right-0 p-2 opacity-50 group-hover:opacity-100 transition-opacity">
                <Terminal className="text-pink-400" size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-pink-300 transition-colors flex items-center gap-2">
                <span className="w-2 h-2 bg-cyan-400 group-hover:bg-pink-500 rounded-full"></span>
                Command Line
              </h3>
              <p className="text-sm text-gray-400 mb-6 font-mono-tech leading-relaxed">
                Direct access to the mainframe. Execute root commands and override protocols.
              </p>
              <div className="h-24 bg-black/50 border border-cyan-900/50 rounded p-2 font-mono-tech text-xs text-green-400 overflow-hidden">
                <div className="opacity-70">
                  &gt; sys.init()<br/>
                  &gt; loading modules...<br/>
                  &gt; access granted<br/>
                  <span className="animate-pulse">_</span>
                </div>
              </div>
            </div>

            {/* Card 3: System Status */}
            <div className="bg-[#0a0a1a]/80 border border-cyan-500/50 p-6 relative group hover:border-pink-500 transition-colors duration-300">
               <div className="absolute top-0 right-0 p-2 opacity-50 group-hover:opacity-100 transition-opacity">
                <Activity className="text-pink-400" size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-pink-300 transition-colors flex items-center gap-2">
                <span className="w-2 h-2 bg-cyan-400 group-hover:bg-pink-500 rounded-full"></span>
                Core Status
              </h3>
              <p className="text-sm text-gray-400 mb-6 font-mono-tech leading-relaxed">
                Monitor CPU cycles, memory usage and network latency in real-time.
              </p>
              <div className="space-y-3 pt-2">
                <div className="flex justify-between text-xs font-mono-tech text-cyan-300">
                  <span>CPU</span><span>34%</span>
                </div>
                <div className="w-full h-1 bg-gray-800 rounded-full overflow-hidden">
                  <div className="h-full bg-cyan-400 w-[34%]"></div>
                </div>
                <div className="flex justify-between text-xs font-mono-tech text-pink-300">
                  <span>RAM</span><span>68%</span>
                </div>
                <div className="w-full h-1 bg-gray-800 rounded-full overflow-hidden">
                  <div className="h-full bg-pink-500 w-[68%]"></div>
                </div>
              </div>
            </div>

          </section>

          {/* Info Banner */}
          <section className="max-w-7xl mx-auto mb-12">
            <div className="border-y border-pink-500/30 bg-pink-900/10 p-6 flex flex-col md:flex-row items-center justify-between gap-6 backdrop-blur-sm">
              <div className="flex items-center gap-4">
                 <div className="p-3 bg-pink-500/20 rounded-full border border-pink-500 text-pink-400">
                   <Globe size={24} />
                 </div>
                 <div>
                   <h4 className="text-lg font-bold text-white uppercase tracking-wider">Global Connection</h4>
                   <p className="text-xs text-pink-300/80 font-mono-tech">SERVER: TOKYO-03 // PING: 24ms</p>
                 </div>
              </div>
              <div className="flex gap-8 text-center md:text-right">
                <div>
                   <div className="text-2xl font-bold text-cyan-400 font-mono-tech">1984</div>
                   <div className="text-[10px] uppercase tracking-widest text-gray-500">Users Online</div>
                </div>
                <div>
                   <div className="text-2xl font-bold text-pink-400 font-mono-tech">80s</div>
                   <div className="text-[10px] uppercase tracking-widest text-gray-500">Uptime</div>
                </div>
              </div>
            </div>
          </section>

        </main>

        {/* FOOTER COMPONENT */}
        <footer className="h-10 border-t border-cyan-500/30 bg-[#0a0a1a] flex items-center justify-between px-6 text-[10px] uppercase tracking-widest font-mono-tech z-20">
          <div className="flex items-center gap-4 text-gray-500">
            <span className="hover:text-cyan-400 cursor-pointer transition-colors">© 2084 CYBERCORP</span>
            <span className="hidden sm:inline">|</span>
            <span className="hidden sm:inline hover:text-cyan-400 cursor-pointer transition-colors">PRIVACY PROTOCOL</span>
          </div>

          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 group cursor-pointer">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-green-500 group-hover:text-green-400">SERVER STABLE</span>
            </div>

            <div className="flex gap-3 text-gray-500">
              <Github size={14} className="hover:text-white cursor-pointer transition-colors" />
              <Twitter size={14} className="hover:text-cyan-400 cursor-pointer transition-colors" />
              <Power size={14} className="hover:text-red-500 cursor-pointer transition-colors" />
            </div>
          </div>
        </footer>

      </div>

      {/* Boot Sequence Overlay */}
      {bootSequence && (
        <div className="absolute inset-0 z-[100] bg-black flex items-center justify-center text-cyan-500 font-mono-tech text-sm">
          <div className="max-w-md w-full p-8">
            <div className="mb-2">BIOS DATE 01/01/84 12:45:00 VER 1.02</div>
            <div className="mb-4">CPU: NEC V20, SPEED: 8 MHz</div>
            <div className="space-y-1">
               <div className="flex justify-between"><span>CHECKING RAM...</span><span className="text-green-500">OK</span></div>
               <div className="flex justify-between"><span>LOADING KERNEL...</span><span className="text-green-500">OK</span></div>
               <div className="flex justify-between"><span>MOUNTING VOLUMES...</span><span className="text-green-500">OK</span></div>
               <div className="flex justify-between"><span>INIT GRAPHICS...</span><span className="text-green-500">OK</span></div>
            </div>
            <div className="mt-8 animate-pulse">_</div>
          </div>
        </div>
      )}

      {/* Scanline Overlay */}
      <div className="scanlines"></div>

    </div>
  );
}