// Synthwave Music Player - React Component
// Dependencies: React hooks and Lucide icons are provided by reactRuntime.js

function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0); // 0 to 100
  const [volume, setVolume] = useState(75);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration] = useState(224); // 3:44 in seconds
  
  // Visualizer bars state
  const [bars, setBars] = useState(Array(8).fill(10));

  useEffect(() => {
    let interval;
    if (isPlaying) {
      interval = setInterval(() => {
        // Update progress
        setCurrentTime((prev) => {
          if (prev >= duration) {
            setIsPlaying(false);
            return 0;
          }
          return prev + 1;
        });

        // Randomize visualizer bars
        setBars(bars.map(() => Math.floor(Math.random() * 60) + 20));
      }, 1000);
    } else {
      // Reset visualizer when paused
      setBars(Array(8).fill(10));
    }
    return () => clearInterval(interval);
  }, [isPlaying, duration, bars]);

  // Update progress percentage based on current time
  useEffect(() => {
    setProgress((currentTime / duration) * 100);
  }, [currentTime, duration]);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  const handlePlayToggle = () => setIsPlaying(!isPlaying);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-[#050510] text-cyan-400 font-sans selection:bg-pink-500 selection:text-white">
      {/* Import Orbitron Font */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;700;900&display=swap');

        :root {
          --neon-pink: #ff00ff;
          --neon-cyan: #00ffff;
          --dark-bg: #0a0a1a;
        }

        body {
          font-family: 'Orbitron', sans-serif;
          margin: 0;
          overflow: hidden;
        }

        /* Scanlines Effect */
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
          pointer-events: none;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: 50;
        }
        
        /* CRT Flicker */
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
        .crt-flicker {
          animation: flicker 0.15s infinite;
        }

        /* Moving Grid Background */
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
          opacity: 0.2;
          box-shadow: 0 0 50px var(--neon-pink);
        }

        @keyframes gridMove {
          0% { transform: perspective(500px) rotateX(60deg) translateY(0); }
          100% { transform: perspective(500px) rotateX(60deg) translateY(50px); }
        }

        /* Sun / Horizon Glow */
        .sun {
          position: absolute;
          bottom: 20%;
          left: 50%;
          transform: translateX(-50%);
          width: 400px;
          height: 400px;
          background: linear-gradient(to top, #ff00ff, #ffcc00);
          border-radius: 50%;
          filter: blur(20px);
          opacity: 0.6;
          z-index: 0;
          clip-path: polygon(0 0, 100% 0, 100% 60%, 0 60%);
        }

        /* Neon Glow Helpers */
        .text-glow-cyan { text-shadow: 0 0 10px var(--neon-cyan), 0 0 20px var(--neon-cyan); }
        .text-glow-pink { text-shadow: 0 0 10px var(--neon-pink), 0 0 20px var(--neon-pink); }
        
        .box-glow-pink { box-shadow: 0 0 15px var(--neon-pink), inset 0 0 15px var(--neon-pink); }
        .box-glow-cyan { box-shadow: 0 0 15px var(--neon-cyan), inset 0 0 5px var(--neon-cyan); }

        /* Custom Range Slider */
        input[type=range] {
          -webkit-appearance: none;
          background: transparent;
        }
        input[type=range]::-webkit-slider-thumb {
          -webkit-appearance: none;
          height: 16px;
          width: 16px;
          border-radius: 50%;
          background: #00ffff;
          box-shadow: 0 0 10px #00ffff;
          cursor: pointer;
          margin-top: -6px;
        }
        input[type=range]::-webkit-slider-runnable-track {
          width: 100%;
          height: 4px;
          background: #333;
          border-radius: 2px;
        }
        input[type=range]:focus {
          outline: none;
        }
      `}</style>

      {/* Background Environment */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#0a0a1a] via-[#1a1a3a] to-[#2a0a2a]">
        <div className="sun"></div>
        <div className="retro-grid"></div>
        {/* Stars */}
        <div className="absolute top-0 left-0 w-full h-1/2 opacity-60" 
             style={{backgroundImage: 'radial-gradient(white 1px, transparent 1px)', backgroundSize: '50px 50px'}}></div>
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 flex items-center justify-center w-full h-full crt-flicker p-4">
        
        {/* Player Card */}
        <div className="relative w-full max-w-md bg-[#0a0a1a]/90 border-2 border-cyan-400 p-6 rounded-lg backdrop-blur-sm box-glow-cyan">
          
          {/* Header */}
          <div className="flex justify-between items-center mb-6 border-b border-pink-500/30 pb-2">
            <div className="flex items-center gap-2">
              <Disc className="w-5 h-5 text-pink-500 animate-spin-slow" />
              <span className="text-xs uppercase tracking-widest text-pink-400">SynthOS Music v1.0</span>
            </div>
            <div className="flex gap-2">
              <Minimize2 className="w-4 h-4 text-cyan-600 cursor-pointer hover:text-cyan-400" />
              <Maximize2 className="w-4 h-4 text-cyan-600 cursor-pointer hover:text-cyan-400" />
              <X className="w-4 h-4 text-pink-600 cursor-pointer hover:text-pink-400" />
            </div>
          </div>

          {/* Album Art Area */}
          <div className="relative w-full aspect-square mb-6 group cursor-pointer overflow-hidden rounded-md border-2 border-pink-500 box-glow-pink">
            {/* Placeholder Grid Art */}
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 to-purple-900 flex items-center justify-center">
              <div className="w-full h-full opacity-30" 
                   style={{
                     backgroundImage: 'linear-gradient(0deg, transparent 24%, rgba(255, 0, 255, .3) 25%, rgba(255, 0, 255, .3) 26%, transparent 27%, transparent 74%, rgba(255, 0, 255, .3) 75%, rgba(255, 0, 255, .3) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(255, 0, 255, .3) 25%, rgba(255, 0, 255, .3) 26%, transparent 27%, transparent 74%, rgba(255, 0, 255, .3) 75%, rgba(255, 0, 255, .3) 76%, transparent 77%, transparent)',
                     backgroundSize: '30px 30px'
                   }}>
              </div>
              
              {/* Central vector sun/pyramid art */}
              <div className="absolute w-32 h-32 bg-gradient-to-t from-yellow-400 to-pink-600 rounded-full blur-md opacity-80"></div>
              <div className="absolute bottom-0 w-full h-1/2 bg-[#0a0a1a] opacity-50 clip-path-triangle"></div>
              
              <div className="absolute z-10 text-center">
                 <span className="block text-4xl font-bold text-white text-glow-cyan tracking-widest">RETRO</span>
                 <span className="block text-2xl font-light text-pink-300 text-glow-pink tracking-[0.5em]">WAVE</span>
              </div>
            </div>
          </div>

          {/* Track Info */}
          <div className="text-center mb-6 space-y-2">
            <h2 className="text-2xl font-bold text-white tracking-wider text-glow-cyan truncate">
              NIGHTCALL
            </h2>
            <p className="text-pink-500 text-sm tracking-widest uppercase text-glow-pink">
              Kavinsky
            </p>
          </div>

          {/* Visualizer */}
          <div className="flex justify-center items-end h-12 gap-2 mb-6 px-4">
            {bars.map((height, i) => (
              <div 
                key={i}
                className="w-3 bg-gradient-to-t from-pink-600 to-cyan-400 rounded-t-sm transition-all duration-100 ease-linear shadow-[0_0_10px_#ff00ff]"
                style={{ height: `${height}%` }}
              ></div>
            ))}
          </div>

          {/* Progress Bar */}
          <div className="mb-2 group">
            <input 
              type="range" 
              min="0" 
              max="100" 
              value={progress}
              onChange={(e) => {
                const newTime = (e.target.value / 100) * duration;
                setCurrentTime(newTime);
                setProgress(e.target.value);
              }}
              className="w-full h-1 bg-gray-700 rounded-lg appearance-none cursor-pointer"
              style={{
                background: `linear-gradient(to right, #ff00ff ${progress}%, #1f2937 ${progress}%)`
              }}
            />
          </div>
          
          {/* Time Display */}
          <div className="flex justify-between text-xs text-cyan-300 font-mono mb-6">
            <span>{formatTime(currentTime)}</span>
            <span>{formatTime(duration)}</span>
          </div>

          {/* Controls */}
          <div className="flex justify-between items-center mb-6">
            <button className="text-cyan-600 hover:text-cyan-300 transition-colors">
               <Volume2 size={20} />
            </button>

            <div className="flex items-center gap-6">
              <button 
                className="text-pink-600 hover:text-pink-400 transition-all hover:scale-110"
                onClick={() => setCurrentTime(Math.max(0, currentTime - 10))}
              >
                <SkipBack size={28} />
              </button>
              
              <button 
                onClick={handlePlayToggle}
                className={`w-14 h-14 rounded-full flex items-center justify-center border-2 border-cyan-400 text-white shadow-[0_0_15px_#00ffff] hover:bg-cyan-900/30 transition-all hover:scale-105 ${isPlaying ? 'bg-cyan-400/10' : ''}`}
              >
                {isPlaying ? <Pause size={24} fill="currentColor" /> : <Play size={24} fill="currentColor" className="ml-1" />}
              </button>

              <button 
                className="text-pink-600 hover:text-pink-400 transition-all hover:scale-110"
                onClick={() => setCurrentTime(Math.min(duration, currentTime + 10))}
              >
                <SkipForward size={28} />
              </button>
            </div>

            <div className="relative w-20 group flex items-center">
               <Volume1 size={20} className="text-cyan-600 mr-2" />
               <input 
                 type="range" 
                 min="0" 
                 max="100" 
                 value={volume}
                 onChange={(e) => setVolume(e.target.value)}
                 className="w-full h-1 rounded-lg cursor-pointer"
                 style={{
                   background: `linear-gradient(to right, #00ffff ${volume}%, #1f2937 ${volume}%)`,
                   height: '2px'
                 }}
               />
            </div>
          </div>
        </div>
      </div>

      {/* CRT Scanline Overlay */}
      <div className="scanlines"></div>
      
      {/* Vignette */}
      <div className="fixed inset-0 pointer-events-none z-40 bg-[radial-gradient(circle_at_center,transparent_50%,rgba(0,0,0,0.6)_100%)]"></div>

    </div>
  );
}