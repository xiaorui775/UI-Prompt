import React, { useState, useEffect, useRef } from 'react';
import { 
  Layers, 
  Activity, 
  Box, 
  Zap, 
  Settings, 
  Shield, 
  ChevronRight, 
  Database,
  Globe,
  Cpu,
  Hexagon,
  Combine
} from 'lucide-react';

/**
 * 3D SPATIAL UI DEMO - EXTREME DEPTH VERSION
 * Changes:
 * - Increased Z-axis translation values
 * - Added "sides" to buttons for true volumetric feel
 * - Added background gyroscope and floating particles
 * - Stronger mouse parallax sensitivity
 */

export default function SpatialUI() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);

  // Handle global mouse movement for the subtle parallax tilt effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      // Calculate normalized mouse position (-1 to 1)
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = (e.clientY / window.innerHeight) * 2 - 1;
      setMousePos({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Stronger rotation multipliers for "More 3D" feel
  const rotateX = mousePos.y * -4; // Increased from -2
  const rotateY = mousePos.x * 4;  // Increased from 2

  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-hidden font-sans selection:bg-cyan-500 selection:text-black">
      {/* Background Atmosphere */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        {/* Deep Space Gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,_#0f172a_0%,_#000000_100%)]" />
        
        {/* Perspective Grid Floor */}
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `
              linear-gradient(rgba(56, 189, 248, 0.4) 1px, transparent 1px),
              linear-gradient(90deg, rgba(56, 189, 248, 0.4) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px',
            transform: 'perspective(300px) rotateX(60deg) translateY(100px) scale(3)',
            transformOrigin: 'bottom center',
            maskImage: 'linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 50%, rgba(0,0,0,0) 100%)'
          }}
        />
        
        {/* Ceiling Grid (New) */}
         <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(rgba(168, 85, 247, 0.4) 1px, transparent 1px),
              linear-gradient(90deg, rgba(168, 85, 247, 0.4) 1px, transparent 1px)
            `,
            backgroundSize: '100px 100px',
            transform: 'perspective(300px) rotateX(-60deg) translateY(-100px) scale(3)',
            transformOrigin: 'top center',
            maskImage: 'linear-gradient(to top, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 50%, rgba(0,0,0,0) 100%)'
          }}
        />
        
        {/* Floating Glow Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[100px] animate-pulse mix-blend-screen" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-cyan-600/10 rounded-full blur-[120px] mix-blend-screen" />
      </div>

      {/* Main 3D Stage */}
      <div 
        ref={containerRef}
        className="relative z-10 min-h-screen flex flex-col items-center justify-center p-4 md:p-8 transition-transform duration-200 ease-out"
        style={{
          perspective: '1000px', // Lower perspective = stronger 3D distortion
        }}
      >
        {/* The Scene Container - tilts with mouse */}
        <div 
          className="w-full max-w-7xl transform-style-3d transition-transform duration-100 ease-linear relative"
          style={{
            transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
          }}
        >
          {/* Background Decorative Elements (Behind the UI) */}
          <div className="absolute top-0 right-0 -z-10 transform -translate-z-20 -translate-y-20 opacity-30">
            <Gyroscope />
          </div>
           <div className="absolute bottom-0 left-0 -z-10 transform -translate-z-40 translate-y-20 opacity-20">
            <FloatingParticles />
          </div>

          
          {/* Top Navigation Bar */}
          <GlassPanel className="mb-12 flex items-center justify-between px-6 py-4 transform-style-3d hover:translate-z-8 transition-all">
            <div className="flex items-center gap-3 transform translate-z-8">
              <div className="relative group">
                 <div className="absolute inset-0 bg-cyan-500 blur-lg opacity-40 group-hover:opacity-75 transition-opacity" />
                 <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-xl shadow-[0_0_15px_rgba(34,211,238,0.5)] flex items-center justify-center relative border border-white/20">
                   <Hexagon className="text-white w-7 h-7 fill-white/10" />
                 </div>
              </div>
              <span className="text-2xl font-black tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400 drop-shadow-lg">
                HYPER<span className="font-light text-cyan-400">SPACE</span>
              </span>
            </div>
            
            <div className="hidden md:flex gap-8 text-sm font-bold text-slate-300 transform translate-z-4 bg-black/20 px-6 py-2 rounded-full border border-white/5 shadow-inner">
              <NavLink label="Command" active />
              <NavLink label="Sector Map" />
              <NavLink label="Nodes" />
              <NavLink label="System" />
            </div>

            <div className="flex gap-4 transform translate-z-4">
              <button className="p-3 rounded-full hover:bg-white/10 transition-colors text-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.2)] border border-cyan-500/30">
                <Activity size={20} />
              </button>
              <Button3D small>Connect</Button3D>
            </div>
          </GlassPanel>

          {/* Main Layout Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Left Column: Hero & Controls */}
            <div className="lg:col-span-7 flex flex-col gap-10 transform-style-3d">
              
              {/* Hero Section */}
              <div className="relative group perspective-container">
                <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-3xl blur-xl opacity-20 group-hover:opacity-40 transition duration-1000 transform -translate-z-10"></div>
                <GlassPanel className="relative p-12 transform-style-3d hover:translate-z-12 transition-transform duration-500 border-t border-white/20">
                  <div className="absolute top-0 right-0 p-8 opacity-60 transform translate-z-20">
                    <SpinningCube />
                  </div>
                  
                  <div className="transform translate-z-12">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-bold tracking-widest uppercase mb-6 shadow-[0_0_20px_rgba(6,182,212,0.2)]">
                      <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                      Immersive Protocol V.5
                    </div>
                    <h1 className="text-6xl md:text-7xl font-black mb-8 leading-[0.9] tracking-tighter">
                      DEEP <br/>
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 filter drop-shadow-[0_5px_15px_rgba(0,0,0,0.5)]">
                        DIMENSION
                      </span>
                    </h1>
                    <p className="text-slate-300 text-xl max-w-lg mb-10 leading-relaxed font-light drop-shadow-md">
                      Navigate the dataverse with tangible interfaces. 
                      <span className="text-white font-medium"> Feel the depth </span> 
                      of your digital assets.
                    </p>
                    
                    <div className="flex flex-wrap gap-6 transform translate-z-4">
                      <Button3D primary icon={<Zap size={20} fill="currentColor" />}>Initiate Dive</Button3D>
                      <Button3D icon={<Combine size={20} />}>Schematics</Button3D>
                    </div>
                  </div>
                </GlassPanel>
              </div>

              {/* Data Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 transform-style-3d">
                <StatsCard 
                  title="Spatial Velocity" 
                  value="842.5 TPS" 
                  trend="+24%" 
                  icon={<Globe className="text-emerald-400" />}
                  color="emerald"
                />
                <StatsCard 
                  title="Active Shards" 
                  value="12,094" 
                  trend="+8.5%" 
                  icon={<Database className="text-purple-400" />}
                  color="purple"
                />
              </div>

            </div>

            {/* Right Column: Interactive Modules */}
            <div className="lg:col-span-5 flex flex-col gap-8 transform-style-3d">
              
              {/* The "Hologram" Card */}
              <GlassPanel className="p-1 h-96 relative overflow-visible group transform-style-3d hover:translate-z-16 transition-transform duration-500">
                {/* Floating Label outside the card */}
                <div className="absolute -top-4 -right-4 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded shadow-lg transform translate-z-20 rotate-3 animate-bounce">
                  LIVE FEED
                </div>

                <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 to-transparent pointer-events-none rounded-xl" />
                <div className="h-full bg-slate-900/60 rounded-xl p-8 relative flex flex-col justify-between border border-white/10 backdrop-blur-md">
                  <div className="flex justify-between items-start transform translate-z-12">
                    <div>
                      <h3 className="text-xl font-bold text-white tracking-wide">Threat Detection</h3>
                      <p className="text-xs text-blue-300 uppercase tracking-wider mt-1 font-bold">Sector 7-G</p>
                    </div>
                    <Shield className="text-blue-400 animate-pulse filter drop-shadow-[0_0_8px_rgba(59,130,246,0.8)]" size={28} />
                  </div>

                  {/* Complex Hologram Effect */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-60 transform translate-z-4">
                    {/* Outer Ring */}
                    <div className="w-56 h-56 border-2 border-dashed border-blue-500/30 rounded-full animate-[spin_20s_linear_infinite] transform-style-3d"></div>
                    {/* Middle Ring */}
                    <div className="absolute w-40 h-40 border-4 border-cyan-400/20 rounded-full animate-[spin_15s_linear_infinite_reverse] transform-style-3d border-t-transparent border-b-transparent"></div>
                    {/* Inner Core */}
                    <div className="absolute w-24 h-24 bg-blue-500/10 rounded-full animate-pulse transform-style-3d flex items-center justify-center border border-blue-400/30">
                        <div className="w-12 h-12 bg-blue-400/20 rounded-full animate-ping" />
                    </div>
                    {/* Scanning Plane */}
                    <div className="absolute w-64 h-64 bg-gradient-to-b from-blue-500/20 to-transparent transform rotate-x-60 animate-[scan_4s_ease-in-out_infinite]" style={{ transformOrigin: 'top' }} />
                  </div>

                  <div className="mt-auto transform translate-z-16 space-y-3">
                     <div className="flex justify-between text-xs text-blue-200 font-mono font-bold mb-1">
                       <span>INTEGRITY</span>
                       <span>98.4%</span>
                     </div>
                     <div className="w-full bg-slate-800 rounded-sm h-2 mb-2 overflow-hidden border border-white/5">
                       <div className="bg-gradient-to-r from-blue-600 to-cyan-400 h-full w-[98%] shadow-[0_0_15px_#3b82f6]"></div>
                     </div>
                     
                     {/* Floating holographic code */}
                     <div className="text-[10px] font-mono text-blue-400/50 leading-tight">
                        {`> ANALYZING PACKETS... OK`} <br/>
                        {`> ENCRYPTION LAYER... ACTIVE`}
                     </div>
                  </div>
                </div>
              </GlassPanel>

              {/* Deep Stack Action List */}
              <div className="flex flex-col gap-5 transform-style-3d perspective-container">
                 <ActionItem title="Smart Contract" subtitle="Deploying to Mainnet" icon={<Cpu />} delay="0" color="orange" />
                 <ActionItem title="Protocol Update" subtitle="v2.1.4 Available" icon={<Settings />} delay="100" color="blue" />
                 <ActionItem title="Node Status" subtitle="All Systems Operational" icon={<Activity />} delay="200" color="green" />
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// --- Sub Components ---

// 1. Base Glass Panel with Thickness Simulation
function GlassPanel({ children, className = "", style = {} }) {
  return (
    <div 
      className={`
        bg-slate-900/60 backdrop-blur-2xl 
        border border-white/10 
        rounded-2xl 
        shadow-[0_20px_50px_-12px_rgba(0,0,0,0.5)] 
        bg-gradient-to-br from-white/[0.05] to-transparent
        ${className}
      `}
      style={{
        boxShadow: `
          inset 0 1px 0 0 rgba(255, 255, 255, 0.1),
          0 20px 40px -10px rgba(0, 0, 0, 0.7),
          0 0 0 1px rgba(0,0,0,0.3)
        `,
        ...style
      }}
    >
      {/* Side thickness illusion (bottom border) */}
      <div className="absolute -bottom-2 left-2 right-2 h-2 bg-black/40 blur-sm rounded-full transform translate-z-[-10px]" />
      
      {children}
    </div>
  );
}

// 2. High-Impact 3D Button (Thicker)
function Button3D(props) {
  const isPrimary = props.primary;
  const isSmall = props.small;
  
  const baseClasses = isSmall ? "px-5 py-2 text-sm" : "px-8 py-4 text-base";
  
  return (
    <button 
      className={`
        relative group ${baseClasses} rounded-xl font-bold transition-all duration-300 transform-style-3d
        ${isPrimary 
          ? 'text-white' 
          : 'text-slate-200'
        }
      `}
      style={{
        transform: 'translateZ(0)',
      }}
      onMouseEnter={(e) => e.currentTarget.style.transform = 'translateZ(15px) translateY(-5px)'}
      onMouseLeave={(e) => e.currentTarget.style.transform = 'translateZ(0) translateY(0)'}
    >
      {/* Front Face */}
      <div className={`
        relative z-10 flex items-center gap-2 rounded-xl border border-t-white/20
        ${isPrimary 
          ? 'bg-gradient-to-br from-cyan-500 to-blue-600 shadow-[0_5px_15px_rgba(6,182,212,0.4)]' 
          : 'bg-slate-800 border-white/10 shadow-[0_5px_15px_rgba(0,0,0,0.4)]'
        }
        ${isSmall ? "px-4 py-2" : "px-8 py-4"}
      `}>
        {props.icon}
        {props.children}
        
        {/* Shine */}
        <div className="absolute inset-0 rounded-xl overflow-hidden">
             <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12" />
        </div>
      </div>

      {/* 3D Thickness (Pseudo-Extrusion) */}
      <div className={`
        absolute inset-0 z-0 rounded-xl transform translate-y-1.5 translate-x-0 transition-transform group-hover:translate-y-2.5
        ${isPrimary ? 'bg-blue-900' : 'bg-slate-950'}
      `} />
      
    </button>
  );
}

// 3. Stats Card (Deeper)
function StatsCard({ title, value, trend, icon, color }) {
  return (
    <GlassPanel className="p-8 group hover:border-white/30 transition-colors duration-300 transform-style-3d hover:translate-z-8 relative overflow-hidden">
      <div className={`absolute -right-10 -top-10 w-40 h-40 bg-${color}-500/10 rounded-full blur-3xl group-hover:bg-${color}-500/20 transition-colors`} />
      
      <div className="flex justify-between items-start mb-6 transform translate-z-4 relative">
        <div className={`p-4 rounded-2xl bg-slate-950/50 border border-white/5 text-${color}-400 shadow-[0_5px_15px_rgba(0,0,0,0.3)]`}>
          {icon}
        </div>
        <span className="text-xs font-bold text-emerald-400 bg-emerald-950/50 px-3 py-1.5 rounded-full border border-emerald-500/20 shadow-[0_0_10px_rgba(16,185,129,0.2)]">
          {trend}
        </span>
      </div>
      <div className="transform translate-z-12">
        <div className="text-slate-400 text-sm font-semibold mb-2 uppercase tracking-wider">{title}</div>
        <div className="text-4xl font-black text-white tracking-tight drop-shadow-xl">{value}</div>
      </div>
    </GlassPanel>
  );
}

// 4. List Action Item (Stacked)
function ActionItem({ title, subtitle, icon, delay, color }) {
  return (
    <div 
      className="group relative cursor-pointer transform-style-3d transition-transform duration-300 hover:translate-z-8 hover:-translate-y-2"
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Shadow Plate */}
      <div className="absolute inset-0 bg-black/50 rounded-xl transform translate-y-4 translate-z-[-10px] blur-md" />

      {/* Main Card */}
      <div className="relative flex items-center gap-5 bg-slate-900/90 border border-white/10 p-5 rounded-xl shadow-2xl backdrop-blur-md">
        <div className={`w-14 h-14 rounded-xl bg-slate-950 flex items-center justify-center text-slate-400 group-hover:text-white group-hover:bg-gradient-to-br from-${color}-500 to-${color}-700 transition-all duration-300 shadow-inner border border-white/5`}>
          {icon}
        </div>
        <div className="flex-1 transform translate-z-4">
          <h4 className="font-bold text-lg text-slate-200 group-hover:text-white transition-colors">{title}</h4>
          <p className="text-xs text-slate-500 group-hover:text-cyan-300 font-mono mt-1">{subtitle}</p>
        </div>
        <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center border border-white/5 group-hover:border-cyan-500/50 group-hover:bg-cyan-500/20 transition-all">
          <ChevronRight className="text-slate-600 group-hover:text-cyan-400 transform group-hover:translate-x-0.5 transition-transform" size={16} />
        </div>
      </div>
    </div>
  );
}

// 5. Nav Link
function NavLink({ label, active }) {
  return (
    <a href="#" className={`
      relative py-2 transition-colors duration-300 group
      ${active ? 'text-white' : 'hover:text-white text-slate-400'}
    `}>
      {label}
      <span className={`
        absolute -bottom-1 left-0 w-full h-0.5 bg-cyan-400 transform origin-left transition-transform duration-300 shadow-[0_0_8px_rgba(34,211,238,0.8)]
        ${active ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}
      `} />
    </a>
  );
}

// 6. Complex 3D Object: Spinning Tesseract approximation
function SpinningCube() {
  return (
    <div className="w-24 h-24 relative" style={{ perspective: '800px' }}>
      <div className="w-full h-full relative transform-style-3d animate-[spin_8s_linear_infinite]">
        {/* Outer Cube */}
        {[
          'translateZ(48px)',
          'rotateY(180deg) translateZ(48px)',
          'rotateY(90deg) translateZ(48px)',
          'rotateY(-90deg) translateZ(48px)',
          'rotateX(90deg) translateZ(48px)',
          'rotateX(-90deg) translateZ(48px)'
        ].map((transform, i) => (
          <div 
            key={i}
            className="absolute inset-0 border-2 border-cyan-500/30 bg-cyan-900/10 backdrop-blur-[2px]"
            style={{ transform }}
          >
            <div className="absolute inset-4 border border-cyan-400/20" />
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 to-transparent" />
          </div>
        ))}
        
        {/* Inner Cube (Tesseract core) */}
         <div className="absolute inset-6 transform-style-3d animate-[spin_4s_linear_infinite_reverse]">
             {[
              'translateZ(24px)',
              'rotateY(180deg) translateZ(24px)',
              'rotateY(90deg) translateZ(24px)',
              'rotateY(-90deg) translateZ(24px)',
              'rotateX(90deg) translateZ(24px)',
              'rotateX(-90deg) translateZ(24px)'
            ].map((transform, i) => (
              <div 
                key={`inner-${i}`}
                className="absolute inset-0 border border-purple-500/50 bg-purple-900/20"
                style={{ transform }}
              ></div>
            ))}
         </div>
      </div>
    </div>
  );
}

// 7. Background Gyroscope
function Gyroscope() {
  return (
    <div className="w-[800px] h-[800px] relative flex items-center justify-center transform-style-3d opacity-20 pointer-events-none">
      <div className="absolute inset-0 border border-slate-700 rounded-full animate-[spin_60s_linear_infinite] transform-style-3d" style={{ transform: 'rotateX(70deg)' }}></div>
      <div className="absolute inset-20 border border-slate-600 rounded-full animate-[spin_40s_linear_infinite_reverse] transform-style-3d" style={{ transform: 'rotateY(70deg)' }}></div>
      <div className="absolute inset-40 border border-cyan-900 rounded-full animate-[spin_30s_linear_infinite] transform-style-3d" style={{ transform: 'rotateX(45deg) rotateY(45deg)' }}></div>
    </div>
  );
}

// 8. Floating Particles
function FloatingParticles() {
   return (
      <div className="w-full h-full transform-style-3d">
         {[...Array(10)].map((_, i) => (
            <div 
               key={i}
               className="absolute bg-white rounded-full opacity-30 animate-float"
               style={{
                  width: Math.random() * 4 + 2 + 'px',
                  height: Math.random() * 4 + 2 + 'px',
                  top: Math.random() * 100 + '%',
                  left: Math.random() * 100 + '%',
                  transform: `translateZ(${Math.random() * 200}px)`,
                  animationDelay: Math.random() * 5 + 's',
                  boxShadow: '0 0 10px rgba(255,255,255,0.8)'
               }}
            />
         ))}
      </div>
   );
}
