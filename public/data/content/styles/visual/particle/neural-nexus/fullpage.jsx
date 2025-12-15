import React, { useEffect, useRef, useState, useMemo } from 'react';
import {
  Activity,
  Cpu,
  Globe,
  Zap,
  Layers,
  Pause,
  Play,
  Share2,
  Maximize2,
  Terminal,
  ShieldCheck,
  Wifi
} from 'lucide-react';

// --- Particle System Constants ---
const PARTICLE_COUNT = 100; // Adjust for density
const CONNECTION_DISTANCE = 120; // Distance to draw lines
const MOUSE_RADIUS = 150; // Interaction radius
const BASE_SPEED = 0.3; // Very slow drift (Macro feel)

/**
 * Particle Class
 * Manages individual dot logic, physics, and rendering
 */
class Particle {
  constructor(canvasWidth, canvasHeight) {
    this.canvasWidth = canvasWidth;
    this.canvasHeight = canvasHeight;
    this.reset();
  }

  reset() {
    this.x = Math.random() * this.canvasWidth;
    this.y = Math.random() * this.canvasHeight;
    // Random velocity between -BASE_SPEED and BASE_SPEED
    this.vx = (Math.random() - 0.5) * BASE_SPEED;
    this.vy = (Math.random() - 0.5) * BASE_SPEED;
    this.size = Math.random() * 3 + 1.5; // 1.5px to 4.5px (Visual balance)
    this.baseAlpha = Math.random() * 0.5 + 0.1; // 0.1 to 0.6 opacity
    this.alpha = this.baseAlpha;
    // Pulsing effect variables
    this.pulseSpeed = 0.02 + Math.random() * 0.03;
    this.pulseOffset = Math.random() * Math.PI * 2;
  }

  update(mouse, isPaused) {
    if (isPaused) return;

    // Normal movement
    this.x += this.vx;
    this.y += this.vy;

    // Pulse opacity
    this.alpha = this.baseAlpha + Math.sin(Date.now() * 0.001 * this.pulseSpeed + this.pulseOffset) * 0.1;

    // Mouse Interaction (Gentle repulsion/disturbance)
    if (mouse.x != null) {
      const dx = mouse.x - this.x;
      const dy = mouse.y - this.y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < MOUSE_RADIUS) {
        const forceDirectionX = dx / distance;
        const forceDirectionY = dy / distance;
        const force = (MOUSE_RADIUS - distance) / MOUSE_RADIUS;
        const directionMultiplier = -1; // -1 for repulsion, 1 for attraction

        // Push particle gently
        this.vx += forceDirectionX * force * 0.05 * directionMultiplier;
        this.vy += forceDirectionY * force * 0.05 * directionMultiplier;
      }
    }

    // Wrap around screen (Infinite space feel)
    if (this.x < 0) this.x = this.canvasWidth;
    if (this.x > this.canvasWidth) this.x = 0;
    if (this.y < 0) this.y = this.canvasHeight;
    if (this.y > this.canvasHeight) this.y = 0;

    // Friction to stabilize velocity after mouse interaction
    const maxSpeed = 1.5;
    const speed = Math.sqrt(this.vx * this.vx + this.vy * this.vy);
    if (speed > BASE_SPEED * 2) {
      this.vx *= 0.95;
      this.vy *= 0.95;
    }
  }

  draw(ctx) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(100, 220, 255, ${this.alpha})`; // Cyan/Blueish tint
    ctx.fill();

    // Add a subtle glow to larger particles
    if (this.size > 3) {
      ctx.shadowBlur = 10;
      ctx.shadowColor = "rgba(100, 220, 255, 0.5)";
    } else {
      ctx.shadowBlur = 0;
    }
  }
}

const ParticleBackground = ({ isPaused, showConnections }) => {
  const canvasRef = useRef(null);
  const particlesRef = useRef([]);
  const animationFrameRef = useRef(null);
  const mouseRef = useRef({ x: null, y: null });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    // Handle Resize
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      // Re-init particles on resize if empty
      if (particlesRef.current.length === 0) {
        for (let i = 0; i < PARTICLE_COUNT; i++) {
          particlesRef.current.push(new Particle(canvas.width, canvas.height));
        }
      } else {
        // Update boundaries for existing particles
        particlesRef.current.forEach(p => {
          p.canvasWidth = canvas.width;
          p.canvasHeight = canvas.height;
        });
      }
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    // Mouse Tracking
    const handleMouseMove = (e) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };
    const handleMouseLeave = () => {
      mouseRef.current = { x: null, y: null };
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    // Animation Loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and Draw Particles
      particlesRef.current.forEach(particle => {
        particle.update(mouseRef.current, isPaused);
        particle.draw(ctx);
      });

      // Draw Connections
      if (showConnections) {
        ctx.strokeStyle = 'rgba(100, 220, 255, 0.15)'; // Very subtle lines
        ctx.lineWidth = 0.5;

        for (let i = 0; i < particlesRef.current.length; i++) {
          for (let j = i + 1; j < particlesRef.current.length; j++) {
            const dx = particlesRef.current[i].x - particlesRef.current[j].x;
            const dy = particlesRef.current[i].y - particlesRef.current[j].y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < CONNECTION_DISTANCE) {
              ctx.beginPath();
              // Opacity based on distance (closer = more opaque)
              const opacity = 1 - (distance / CONNECTION_DISTANCE);
              ctx.strokeStyle = `rgba(100, 220, 255, ${opacity * 0.2})`;
              ctx.moveTo(particlesRef.current[i].x, particlesRef.current[i].y);
              ctx.lineTo(particlesRef.current[j].x, particlesRef.current[j].y);
              ctx.stroke();
            }
          }
        }
      }

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameRef.current);
    };
  }, [isPaused, showConnections]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
      style={{ background: 'linear-gradient(to bottom, #020617, #0f172a)' }} // Deep Slate/Black
    />
  );
};

// --- Reusable UI Components ---

const Card = ({ children, className = "" }) => (
  <div className={`bg-slate-900/60 backdrop-blur-md border border-slate-700/50 rounded-lg p-6 shadow-xl ${className}`}>
    {children}
  </div>
);

const StatWidget = ({ icon: Icon, label, value, trend }) => (
  <div className="flex items-start space-x-3 p-3 rounded-lg hover:bg-white/5 transition-colors group cursor-default">
    <div className="p-2 bg-cyan-950/50 rounded-md border border-cyan-800/30 text-cyan-400 group-hover:text-cyan-300 group-hover:shadow-[0_0_10px_rgba(34,211,238,0.2)] transition-all">
      <Icon size={18} />
    </div>
    <div>
      <p className="text-slate-400 text-xs uppercase tracking-wider font-semibold">{label}</p>
      <div className="flex items-baseline space-x-2">
        <span className="text-slate-100 text-xl font-mono">{value}</span>
        {trend && <span className="text-emerald-400 text-xs font-mono">{trend}</span>}
      </div>
    </div>
  </div>
);

const IconButton = ({ icon: Icon, active, onClick, tooltip }) => (
  <button
    onClick={onClick}
    title={tooltip}
    className={`p-2 rounded-md transition-all duration-300 ${
      active
        ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/50 shadow-[0_0_15px_rgba(34,211,238,0.15)]'
        : 'bg-slate-800/50 text-slate-400 border border-transparent hover:bg-slate-700 hover:text-slate-200'
    }`}
  >
    <Icon size={20} />
  </button>
);

// --- Main Application ---

export default function App() {
  const [isPaused, setIsPaused] = useState(false);
  const [showConnections, setShowConnections] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <div className="relative min-h-screen text-slate-200 font-sans overflow-hidden selection:bg-cyan-500/30">

      {/* Background Layer */}
      <ParticleBackground isPaused={isPaused} showConnections={showConnections} />

      {/* Foreground Content - Layout using Grid/Flex */}
      <div className="relative z-10 p-6 md:p-12 min-h-screen flex flex-col justify-between max-w-7xl mx-auto">

        {/* Header Section */}
        <header className={`flex justify-between items-start transition-all duration-1000 transform ${mounted ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'}`}>
          <div>
            <div className="flex items-center space-x-2 text-cyan-400 mb-1">
              <Terminal size={16} />
              <span className="text-xs font-mono tracking-[0.2em]">SYSTEM_READY</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-2">
              NEURAL <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">NEXUS</span>
            </h1>
            <p className="text-slate-400 max-w-md text-sm md:text-base leading-relaxed">
              Advanced visualization of decentralized node architecture.
              Drifting through the data stream in a macro-cosmic environment.
            </p>
          </div>

          <div className="hidden md:flex flex-col items-end space-y-2">
            <div className="flex items-center space-x-2 bg-slate-900/80 px-3 py-1 rounded-full border border-slate-700">
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs font-mono text-emerald-400">ONLINE</span>
            </div>
            <span className="text-xs text-slate-500 font-mono">v.2.4.0-stable</span>
          </div>
        </header>

        {/* Center/Main Dashboard Area */}
        <main className="flex-grow flex items-center justify-center py-12">
          {/* This central area is intentionally sparse to let the particles breathe,
            but contains a "Glass" panel to show how content sits on top.
          */}
          <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full transition-all duration-1000 delay-300 transform ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>

            {/* Widget 1: Network Activity */}
            <Card className="col-span-1 md:col-span-2 lg:col-span-1 h-64 flex flex-col justify-between group border-l-4 border-l-cyan-500">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-semibold text-white">Node Activity</h3>
                  <p className="text-xs text-slate-400 font-mono mt-1">REAL-TIME TELEMETRY</p>
                </div>
                <Activity className="text-cyan-500" size={20} />
              </div>

              <div className="space-y-4">
                <div className="w-full bg-slate-800/50 rounded-full h-1.5 overflow-hidden">
                  <div className="bg-cyan-500 h-full w-[70%] shadow-[0_0_10px_rgba(34,211,238,0.5)] animate-pulse" />
                </div>
                <div className="flex justify-between text-xs font-mono text-slate-300">
                  <span>LATENCY</span>
                  <span className="text-cyan-400">12ms</span>
                </div>
                <div className="w-full bg-slate-800/50 rounded-full h-1.5 overflow-hidden">
                  <div className="bg-blue-500 h-full w-[45%]" />
                </div>
                <div className="flex justify-between text-xs font-mono text-slate-300">
                  <span>THROUGHPUT</span>
                  <span className="text-blue-400">450 GB/s</span>
                </div>
              </div>
            </Card>

            {/* Widget 2: Stats Grid */}
            <div className="col-span-1 md:col-span-2 grid grid-cols-2 gap-4">
              <Card className="flex items-center">
                <StatWidget icon={Cpu} label="Core Usage" value="34%" trend="▲ 2%" />
              </Card>
              <Card className="flex items-center">
                <StatWidget icon={Globe} label="Active Nodes" value="8,402" trend="+12" />
              </Card>
              <Card className="flex items-center">
                <StatWidget icon={ShieldCheck} label="Security" value="OPTIMAL" />
              </Card>
              <Card className="flex items-center">
                <StatWidget icon={Wifi} label="Bandwidth" value="2.4 TB" />
              </Card>
            </div>

          </div>
        </main>

        {/* Footer / Controls Section */}
        <footer className={`flex flex-col md:flex-row justify-between items-end md:items-center space-y-4 md:space-y-0 transition-all duration-1000 delay-500 transform ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>

          <div className="flex flex-col space-y-1">
             <h4 className="text-sm font-semibold text-white flex items-center gap-2">
                <Zap size={14} className="text-yellow-400" />
                VIEWPORT CONTROLS
             </h4>
             <p className="text-xs text-slate-500 max-w-xs">
                Adjust visual processing parameters to reduce GPU load or simplify the data visualization.
             </p>
          </div>

          <div className="flex items-center bg-slate-900/80 backdrop-blur-md p-2 rounded-lg border border-slate-700 shadow-2xl space-x-2">

            <div className="hidden md:block pr-4 border-r border-slate-700 mr-2">
                <span className="text-xs font-mono text-slate-400">FPS: 60</span>
            </div>

            <IconButton
              icon={isPaused ? Play : Pause}
              active={isPaused}
              onClick={() => setIsPaused(!isPaused)}
              tooltip={isPaused ? "Resume Animation" : "Pause Animation"}
            />

            <IconButton
              icon={Share2}
              active={showConnections}
              onClick={() => setShowConnections(!showConnections)}
              tooltip="Toggle Connections"
            />

            <IconButton
              icon={Maximize2}
              active={false}
              onClick={() => {}}
              tooltip="Expand View"
            />

            <div className="w-px h-6 bg-slate-700 mx-2" />

            <IconButton
              icon={Layers}
              active={true}
              onClick={() => {}}
              tooltip="Layer Settings"
            />

          </div>
        </footer>

      </div>

      {/* Decorative Overlay Gradients for Depth */}
      <div className="fixed bottom-0 left-0 w-full h-64 bg-gradient-to-t from-slate-950 to-transparent pointer-events-none z-0" />
      <div className="fixed top-0 right-0 w-1/2 h-full bg-gradient-to-l from-slate-900/20 to-transparent pointer-events-none z-0" />

    </div>
  );
}
