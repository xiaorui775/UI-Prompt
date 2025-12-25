import React, { useEffect, useMemo, useRef } from 'react';
import { 
  Activity, 
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

const GLASS_SHADOW = `
  inset 0 1px 0 0 rgba(255, 255, 255, 0.1),
  0 20px 40px -10px rgba(0, 0, 0, 0.7),
  0 0 0 1px rgba(0,0,0,0.3)
`.trim();

const GLASS_SHADOW_LITE = `
  0 14px 28px -12px rgba(0, 0, 0, 0.55),
  0 0 0 1px rgba(0,0,0,0.25)
`.trim();

const STATS_COLOR_STYLES = {
  emerald: {
    glow: 'bg-emerald-500/10',
    glowHover: 'group-hover:bg-emerald-500/20',
    iconText: 'text-emerald-400'
  },
  purple: {
    glow: 'bg-purple-500/10',
    glowHover: 'group-hover:bg-purple-500/20',
    iconText: 'text-purple-400'
  }
};

const ACTION_COLOR_STYLES = {
  orange: {
    from: 'from-orange-500',
    to: 'to-orange-700'
  },
  blue: {
    from: 'from-blue-500',
    to: 'to-blue-700'
  },
  green: {
    from: 'from-green-500',
    to: 'to-green-700'
  }
};

export default function SpatialUI() {
  const sceneRef = useRef(null);
  const runtime = useMemo(() => {
    const perfMode =
      document?.documentElement?.dataset?.uiStylePerf === '1' ||
      window.__UI_STYLE_PERF_MODE__ === true;
    const prefersReducedMotion =
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const ua = navigator?.userAgent || '';
    const isChromium =
      /Chrome\//.test(ua) &&
      !/Edg\//.test(ua) &&
      !/OPR\//.test(ua) &&
      !/Brave\//.test(ua) &&
      !/SamsungBrowser\//.test(ua);

    return {
      perfMode,
      prefersReducedMotion,
      isChromium
    };
  }, []);
  const reduceEffects = runtime.perfMode || runtime.prefersReducedMotion;
  const chromiumLite = runtime.isChromium && !reduceEffects;
  const enableBackdrop = !reduceEffects && !chromiumLite;
  const glassShadowVariant = chromiumLite ? 'lite' : 'heavy';

  // Handle global mouse movement for the subtle parallax tilt effect
  // NOTE: Avoid setState on mousemove to prevent re-rendering the entire scene each event.
  useEffect(() => {
    const sceneEl = sceneRef.current;
    if (!sceneEl) return;

    // Respect perf mode / reduced motion
    if (reduceEffects) return;

    let rafId = 0;
    let nextX = 0;
    let nextY = 0;
    const sensitivity = chromiumLite ? 2.75 : 4;

    const apply = () => {
      rafId = 0;
      const rotateX = nextY * -sensitivity;
      const rotateY = nextX * sensitivity;
      sceneEl.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    };

    const handleMouseMove = (e) => {
      const w = window.innerWidth || 1;
      const h = window.innerHeight || 1;
      nextX = (e.clientX / w) * 2 - 1;
      nextY = (e.clientY / h) * 2 - 1;
      if (!rafId) rafId = window.requestAnimationFrame(apply);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (rafId) window.cancelAnimationFrame(rafId);
    };
  }, [reduceEffects, chromiumLite]);

  return (
    <div className={`min-h-screen bg-slate-950 text-white overflow-hidden font-sans selection:bg-cyan-500 selection:text-black ${reduceEffects ? 'reduce-effects' : ''} ${chromiumLite ? 'chromium-lite' : ''}`}>
      {/* Background Atmosphere */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        {/* Deep Space Gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,_#0f172a_0%,_#000000_100%)]" />

        {/* Heavy background effects (disabled in perf / reduced-motion) */}
        {!reduceEffects && (
          <>
            {/* Perspective Grid Floor */}
            <div
              className="absolute inset-0 opacity-30"
              style={{
                backgroundImage: `
                  linear-gradient(rgba(56, 189, 248, 0.4) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(56, 189, 248, 0.4) 1px, transparent 1px)
                `,
                backgroundSize: chromiumLite ? '110px 110px' : '80px 80px',
                transform: chromiumLite
                  ? 'perspective(600px) rotateX(55deg) translateY(140px) scale(2.2)'
                  : 'perspective(300px) rotateX(60deg) translateY(100px) scale(3)',
                transformOrigin: 'bottom center',
                maskImage: chromiumLite
                  ? undefined
                  : 'linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 50%, rgba(0,0,0,0) 100%)'
              }}
            />

            {/* Ceiling Grid */}
            {!chromiumLite && (
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
            )}

            {/* Floating Glow Orbs */}
            {chromiumLite ? (
              <>
                <div className="absolute top-1/4 left-1/4 w-[520px] h-[520px] opacity-35 bg-[radial-gradient(circle_at_50%_50%,_rgba(168,85,247,0.45)_0%,_transparent_70%)]" />
                <div className="absolute bottom-0 right-0 w-[720px] h-[720px] opacity-25 bg-[radial-gradient(circle_at_50%_50%,_rgba(34,211,238,0.35)_0%,_transparent_70%)]" />
              </>
            ) : (
              <>
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[100px] animate-pulse mix-blend-screen" />
                <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-cyan-600/10 rounded-full blur-[120px] mix-blend-screen" />
              </>
            )}
          </>
        )}
      </div>

      {/* Main 3D Stage */}
      <div 
        className="relative z-10 min-h-screen flex flex-col items-center justify-center p-4 md:p-8 transition-transform duration-200 ease-out"
        style={{
          perspective: reduceEffects ? 'none' : (chromiumLite ? '900px' : '1000px'), // Lower perspective = stronger 3D distortion
        }}
      >
        {/* The Scene Container - tilts with mouse */}
        <div 
          ref={sceneRef}
          className={`w-full max-w-7xl relative ${reduceEffects ? '' : 'transform-style-3d'}`}
          style={{
            transform: reduceEffects ? 'none' : 'rotateX(0deg) rotateY(0deg)',
            willChange: reduceEffects ? 'auto' : 'transform',
          }}
        >
          {/* Background Decorative Elements (Behind the UI) */}
          {!reduceEffects && (
            <>
              <div className="absolute top-0 right-0 -z-10 transform -translate-z-20 -translate-y-20 opacity-30">
                <Gyroscope lite={chromiumLite} />
              </div>
              <div className="absolute bottom-0 left-0 -z-10 transform -translate-z-40 translate-y-20 opacity-20">
                <FloatingParticles lite={chromiumLite} />
              </div>
            </>
          )}

          
          {/* Top Navigation Bar */}
          <GlassPanel enableBackdrop={enableBackdrop} enableShadow={!reduceEffects} shadowVariant={glassShadowVariant} className="mb-12 flex items-center justify-between px-6 py-4 transform-style-3d hover:translate-z-8 transition-all">
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
              <Button3D small reduceEffects={reduceEffects}>Connect</Button3D>
            </div>
          </GlassPanel>

          {/* Main Layout Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Left Column: Hero & Controls */}
            <div className="lg:col-span-7 flex flex-col gap-10 transform-style-3d">
              
              {/* Hero Section */}
              <div className="relative group perspective-container">
                <div className={`absolute -inset-2 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-3xl ${reduceEffects || chromiumLite ? 'opacity-15' : 'blur-xl opacity-20 group-hover:opacity-40 transition duration-1000'} transform -translate-z-10`} />
                <GlassPanel enableBackdrop={enableBackdrop} enableShadow={!reduceEffects} shadowVariant={glassShadowVariant} className="relative p-12 transform-style-3d hover:translate-z-12 transition-transform duration-500 border-t border-white/20">
                  <div className="absolute top-0 right-0 p-8 opacity-60 transform translate-z-20">
                    <SpinningCube reduceEffects={reduceEffects} lite={chromiumLite} />
                  </div>
                  
                  <div className="transform translate-z-12">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-bold tracking-widest uppercase mb-6 shadow-[0_0_20px_rgba(6,182,212,0.2)]">
                      <span className={`w-2 h-2 rounded-full bg-cyan-400 ${reduceEffects ? '' : 'animate-pulse'}`} />
                      Immersive Protocol V.5
                    </div>
                    <h1 className="text-6xl md:text-7xl font-black mb-8 leading-[0.9] tracking-tighter">
                      DEEP <br/>
                      <span className={`text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 ${reduceEffects || chromiumLite ? '' : 'filter drop-shadow-[0_5px_15px_rgba(0,0,0,0.5)]'}`}>
                        DIMENSION
                      </span>
                    </h1>
                    <p className={`text-slate-300 text-xl max-w-lg mb-10 leading-relaxed font-light ${reduceEffects || chromiumLite ? '' : 'drop-shadow-md'}`}>
                      Navigate the dataverse with tangible interfaces. 
                      <span className="text-white font-medium"> Feel the depth </span> 
                      of your digital assets.
                    </p>
                    
                    <div className="flex flex-wrap gap-6 transform translate-z-4">
                      <Button3D primary reduceEffects={reduceEffects} icon={<Zap size={20} fill="currentColor" />}>Initiate Dive</Button3D>
                      <Button3D reduceEffects={reduceEffects} icon={<Combine size={20} />}>Schematics</Button3D>
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
                  reduceEffects={reduceEffects}
                  chromiumLite={chromiumLite}
                />
                <StatsCard 
                  title="Active Shards" 
                  value="12,094" 
                  trend="+8.5%" 
                  icon={<Database className="text-purple-400" />}
                  color="purple"
                  reduceEffects={reduceEffects}
                  chromiumLite={chromiumLite}
                />
              </div>

            </div>

            {/* Right Column: Interactive Modules */}
            <div className="lg:col-span-5 flex flex-col gap-8 transform-style-3d">
              
              {/* The "Hologram" Card */}
              <GlassPanel enableBackdrop={enableBackdrop} enableShadow={!reduceEffects} shadowVariant={glassShadowVariant} className="p-1 h-96 relative overflow-visible group transform-style-3d hover:translate-z-16 transition-transform duration-500">
                {/* Floating Label outside the card */}
                <div className={`absolute -top-4 -right-4 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded shadow-lg transform translate-z-20 rotate-3 ${reduceEffects || chromiumLite ? '' : 'animate-bounce'}`}>
                  LIVE FEED
                </div>

                <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 to-transparent pointer-events-none rounded-xl" />
                <div className={`h-full bg-slate-900/60 rounded-xl p-8 relative flex flex-col justify-between border border-white/10 ${enableBackdrop ? 'backdrop-blur-md' : ''}`}>
                  <div className="flex justify-between items-start transform translate-z-12">
                    <div>
                      <h3 className="text-xl font-bold text-white tracking-wide">Threat Detection</h3>
                      <p className="text-xs text-blue-300 uppercase tracking-wider mt-1 font-bold">Sector 7-G</p>
                    </div>
                    <Shield className={`text-blue-400 ${reduceEffects ? '' : 'animate-pulse'} ${chromiumLite ? '' : 'filter drop-shadow-[0_0_8px_rgba(59,130,246,0.8)]'}`} size={28} />
                  </div>

                  {/* Complex Hologram Effect */}
                  {!reduceEffects && (
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-60 transform translate-z-4">
                    {/* Outer Ring */}
                    <div className="w-56 h-56 border-2 border-dashed border-blue-500/30 rounded-full animate-[spin_24s_linear_infinite] transform-style-3d"></div>
                    {/* Middle Ring */}
                    {!chromiumLite && (
                      <div className="absolute w-40 h-40 border-4 border-cyan-400/20 rounded-full animate-[spin_18s_linear_infinite_reverse] transform-style-3d border-t-transparent border-b-transparent"></div>
                    )}
                    {/* Inner Core */}
                    {!chromiumLite && (
                      <div className="absolute w-24 h-24 bg-blue-500/10 rounded-full animate-pulse transform-style-3d flex items-center justify-center border border-blue-400/30">
                          <div className="w-12 h-12 bg-blue-400/20 rounded-full animate-ping" />
                      </div>
                    )}
                    {/* Scanning Plane */}
                    {!chromiumLite && (
                      <div className="absolute w-64 h-64 bg-gradient-to-b from-blue-500/20 to-transparent transform rotate-x-60 animate-[scan_4s_ease-in-out_infinite]" style={{ transformOrigin: 'top' }} />
                    )}
                  </div>
                  )}

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
                 <ActionItem reduceEffects={reduceEffects} chromiumLite={chromiumLite} title="Smart Contract" subtitle="Deploying to Mainnet" icon={<Cpu />} delay="0" color="orange" />
                 <ActionItem reduceEffects={reduceEffects} chromiumLite={chromiumLite} title="Protocol Update" subtitle="v2.1.4 Available" icon={<Settings />} delay="100" color="blue" />
                 <ActionItem reduceEffects={reduceEffects} chromiumLite={chromiumLite} title="Node Status" subtitle="All Systems Operational" icon={<Activity />} delay="200" color="green" />
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
function GlassPanel({ children, className = "", style = {}, enableBackdrop = true, enableShadow = true, shadowVariant = 'heavy' }) {
  const resolvedShadow = shadowVariant === 'lite' ? GLASS_SHADOW_LITE : GLASS_SHADOW;
  const resolvedClassName = [
    'relative',
    enableBackdrop ? 'bg-slate-900/60' : 'bg-slate-900/80',
    enableBackdrop ? 'backdrop-blur-2xl' : '',
    'border border-white/10',
    'rounded-2xl',
    enableShadow ? 'shadow-[0_20px_50px_-12px_rgba(0,0,0,0.5)]' : '',
    'bg-gradient-to-br from-white/[0.05] to-transparent',
    className
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div 
      className={resolvedClassName}
      style={{
        ...(enableShadow ? { boxShadow: resolvedShadow } : {}),
        ...style
      }}
    >
      {/* Side thickness illusion (bottom border) */}
      {enableShadow && shadowVariant === 'heavy' && (
        <div
          className="absolute -bottom-2 left-2 right-2 h-2 bg-black/40 blur-sm rounded-full transform"
          style={{ transform: 'translateZ(-10px)' }}
        />
      )}
      
      {children}
    </div>
  );
}

// 2. High-Impact 3D Button (Thicker)
function Button3D(props) {
  const isPrimary = props.primary;
  const isSmall = props.small;
  const reduceEffects = !!props.reduceEffects;
  
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
        transform: reduceEffects ? 'none' : 'translateZ(0)',
      }}
      onMouseEnter={(e) => {
        if (reduceEffects) return;
        e.currentTarget.style.transform = 'translateZ(15px) translateY(-5px)';
      }}
      onMouseLeave={(e) => {
        if (reduceEffects) return;
        e.currentTarget.style.transform = 'translateZ(0) translateY(0)';
      }}
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
function StatsCard({ title, value, trend, icon, color, reduceEffects = false, chromiumLite = false }) {
  const accent = STATS_COLOR_STYLES[color] || STATS_COLOR_STYLES.emerald;
  const wrapperClassName = reduceEffects
    ? 'p-8 relative overflow-hidden'
    : 'p-8 group hover:border-white/30 transition-colors duration-300 transform-style-3d hover:translate-z-8 relative overflow-hidden';

  return (
    <GlassPanel
      enableBackdrop={!reduceEffects && !chromiumLite}
      enableShadow={!reduceEffects}
      shadowVariant={chromiumLite ? 'lite' : 'heavy'}
      className={wrapperClassName}
    >
      {!reduceEffects && (
        <div className={`absolute -right-10 -top-10 w-40 h-40 ${accent.glow} rounded-full blur-3xl ${accent.glowHover} transition-colors`} />
      )}
      
      <div className="flex justify-between items-start mb-6 transform translate-z-4 relative">
        <div className={`p-4 rounded-2xl bg-slate-950/50 border border-white/5 ${accent.iconText} ${reduceEffects ? '' : 'shadow-[0_5px_15px_rgba(0,0,0,0.3)]'}`}>
          {icon}
        </div>
        <span className="text-xs font-bold text-emerald-400 bg-emerald-950/50 px-3 py-1.5 rounded-full border border-emerald-500/20 shadow-[0_0_10px_rgba(16,185,129,0.2)]">
          {trend}
        </span>
      </div>
      <div className="transform translate-z-12">
        <div className="text-slate-400 text-sm font-semibold mb-2 uppercase tracking-wider">{title}</div>
        <div className={`text-4xl font-black text-white tracking-tight ${reduceEffects ? '' : 'drop-shadow-xl'}`}>{value}</div>
      </div>
    </GlassPanel>
  );
}

// 4. List Action Item (Stacked)
function ActionItem({ title, subtitle, icon, delay, color, reduceEffects = false, chromiumLite = false }) {
  const accent = ACTION_COLOR_STYLES[color] || ACTION_COLOR_STYLES.blue;
  const rootClassName = reduceEffects
    ? 'group relative cursor-pointer'
    : 'group relative cursor-pointer transform-style-3d transition-transform duration-300 hover:translate-z-8 hover:-translate-y-2';

  const iconHoverGradient = reduceEffects
    ? ''
    : `group-hover:bg-gradient-to-br ${accent.from} ${accent.to}`;
  const allowBlur = !reduceEffects && !chromiumLite;

  return (
    <div 
      className={rootClassName}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Shadow Plate */}
      {allowBlur && (
        <div
          className="absolute inset-0 bg-black/50 rounded-xl transform blur-md"
          style={{ transform: 'translateY(16px) translateZ(-10px)' }}
        />
      )}

      {/* Main Card */}
      <div className={`relative flex items-center gap-5 bg-slate-900/90 border border-white/10 p-5 rounded-xl ${allowBlur ? 'shadow-2xl backdrop-blur-md' : ''}`}>
        <div className={`w-14 h-14 rounded-xl bg-slate-950 flex items-center justify-center text-slate-400 group-hover:text-white ${iconHoverGradient} transition-all duration-300 shadow-inner border border-white/5`}>
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
function SpinningCube({ reduceEffects = false, lite = false }) {
  if (reduceEffects || lite) {
    return (
      <div className="w-24 h-24 rounded-2xl border border-cyan-500/30 bg-cyan-900/10" />
    );
  }

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
            className="absolute inset-0 border-2 border-cyan-500/30 bg-cyan-900/15"
            style={{ transform, backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden' }}
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
                style={{ transform, backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden' }}
              ></div>
            ))}
         </div>
      </div>
    </div>
  );
}

// 7. Background Gyroscope
function Gyroscope({ lite = false }) {
  if (lite) {
    return (
      <div className="w-[520px] h-[520px] relative flex items-center justify-center opacity-15 pointer-events-none">
        <div className="absolute inset-0 border border-slate-700/70 rounded-full animate-[spin_90s_linear_infinite]" />
        <div className="absolute inset-16 border border-slate-600/60 rounded-full border-dashed animate-[spin_70s_linear_infinite_reverse]" />
      </div>
    );
  }

  return (
    <div className="w-[800px] h-[800px] relative flex items-center justify-center transform-style-3d opacity-20 pointer-events-none">
      <div className="absolute inset-0 border border-slate-700 rounded-full animate-[spin_60s_linear_infinite] transform-style-3d" style={{ transform: 'rotateX(70deg)' }}></div>
      <div className="absolute inset-20 border border-slate-600 rounded-full animate-[spin_40s_linear_infinite_reverse] transform-style-3d" style={{ transform: 'rotateY(70deg)' }}></div>
      <div className="absolute inset-40 border border-cyan-900 rounded-full animate-[spin_30s_linear_infinite] transform-style-3d" style={{ transform: 'rotateX(45deg) rotateY(45deg)' }}></div>
    </div>
  );
}

// 8. Floating Particles
function FloatingParticles({ lite = false }) {
   const particles = useMemo(() => {
     const count = lite ? 6 : 10;
     const zMax = lite ? 90 : 200;
     return Array.from({ length: count }, () => {
       const size = Math.random() * 4 + 2;
       return {
         size,
         top: Math.random() * 100,
         left: Math.random() * 100,
         z: Math.random() * zMax,
         delay: Math.random() * 5
       };
     });
   }, [lite]);

   return (
      <div className="w-full h-full transform-style-3d">
         {particles.map((p, i) => (
            <div 
               key={i}
               className="absolute bg-white rounded-full opacity-30 animate-float"
               style={{
                  width: `${p.size}px`,
                  height: `${p.size}px`,
                  top: `${p.top}%`,
                  left: `${p.left}%`,
                  transform: `translateZ(${p.z}px)`,
                  animationDelay: `${p.delay}s`,
                  boxShadow: lite ? 'none' : '0 0 10px rgba(255,255,255,0.8)'
               }}
            />
         ))}
      </div>
   );
}
