import React, { useState, useEffect } from 'react';
import {
  Maximize2,
  Minimize2,
  Compass,
  Layers,
  Activity,
  Settings,
  AlertTriangle,
  Crosshair,
  Cpu,
  Database,
  Wifi,
  Wind
} from 'lucide-react';

// --- Global Styles & Grid Definition ---
const BlueprintStyles = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@300;400;500;700&display=swap');

    :root {
      --bg-deep: #0a1628;
      --bg-navy: #1a365d;
      --line-primary: rgba(255, 255, 255, 0.8);
      --line-secondary: rgba(96, 165, 250, 0.4);
      --accent-cyan: #22d3ee;
      --warning-orange: #f97316;
    }

    body {
      background-color: var(--bg-deep);
      color: white;
      font-family: 'JetBrains Mono', monospace;
      overflow-x: hidden;
    }

    /* The Blueprint Grid Pattern */
    .blueprint-grid {
      background-color: var(--bg-deep);
      background-image:
        /* Major Grid (100px) */
        linear-gradient(var(--line-primary) 1px, transparent 1px),
        linear-gradient(90deg, var(--line-primary) 1px, transparent 1px),
        /* Minor Grid (20px) */
        linear-gradient(var(--line-secondary) 1px, transparent 1px),
        linear-gradient(90deg, var(--line-secondary) 1px, transparent 1px);
      background-size: 100px 100px, 100px 100px, 20px 20px, 20px 20px;
      background-position: -1px -1px; /* Align to borders */
    }

    /* Cross-hatching pattern for sections */
    .hatched-pattern {
      background-image: linear-gradient(
        45deg,
        rgba(96, 165, 250, 0.15) 25%,
        transparent 25%,
        transparent 50%,
        rgba(96, 165, 250, 0.15) 50%,
        rgba(96, 165, 250, 0.15) 75%,
        transparent 75%,
        transparent
      );
      background-size: 8px 8px;
    }

    .tech-border {
      border: 1px solid var(--line-secondary);
      position: relative;
    }

    /* Corner Markers */
    .tech-border::before, .tech-border::after {
      content: '';
      position: absolute;
      width: 8px;
      height: 8px;
      border: 2px solid var(--accent-cyan);
      transition: all 0.3s ease;
    }
    .tech-border::before { top: -1px; left: -1px; border-right: none; border-bottom: none; }
    .tech-border::after { bottom: -1px; right: -1px; border-left: none; border-top: none; }

    .tech-border:hover::before, .tech-border:hover::after {
      width: 100%;
      height: 100%;
      border-color: var(--line-primary);
      opacity: 0.1;
    }

    /* Animations */
    @keyframes scanline {
      0% { top: 0%; opacity: 0; }
      10% { opacity: 1; }
      90% { opacity: 1; }
      100% { top: 100%; opacity: 0; }
    }
    .scan-effect::after {
      content: '';
      position: absolute;
      left: 0;
      right: 0;
      height: 2px;
      background: var(--accent-cyan);
      box-shadow: 0 0 10px var(--accent-cyan);
      animation: scanline 3s linear infinite;
      opacity: 0.5;
    }
  `}</style>
);

// --- Reusable Technical Components ---

const DimensionArrow = ({ width, text, orientation = 'horizontal', className = '' }) => {
  return (
    <div className={`flex items-center justify-center pointer-events-none ${orientation === 'vertical' ? 'flex-col h-full w-6' : 'w-full h-6'} ${className}`}>
      {orientation === 'horizontal' ? (
        <>
          <div className="h-2 w-[1px] bg-white opacity-70"></div>
          <div className="h-[1px] flex-1 bg-white opacity-50 relative">
             <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#0a1628] px-2 text-[10px] text-cyan-300 whitespace-nowrap">
               {text}
             </div>
          </div>
          <div className="h-2 w-[1px] bg-white opacity-70"></div>
        </>
      ) : (
        <>
          <div className="w-2 h-[1px] bg-white opacity-70"></div>
          <div className="w-[1px] flex-1 bg-white opacity-50 relative">
             <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#0a1628] py-1 text-[10px] text-cyan-300 whitespace-nowrap -rotate-90">
               {text}
             </div>
          </div>
          <div className="w-2 h-[1px] bg-white opacity-70"></div>
        </>
      )}
    </div>
  );
};

const SectionHeader = ({ title, code }) => (
  <div className="flex items-end mb-4 border-b border-white/20 pb-2">
    <h3 className="text-lg font-bold text-white tracking-widest uppercase">{title}</h3>
    <span className="ml-auto text-xs text-cyan-400 font-mono opacity-80">{code}</span>
  </div>
);

const DataPoint = ({ label, value, unit, status = 'normal' }) => (
  <div className="flex justify-between items-center py-2 border-b border-white/5 hover:bg-white/5 transition-colors group cursor-crosshair">
    <span className="text-xs text-gray-400 uppercase tracking-wider group-hover:text-cyan-200">{label}</span>
    <div className="flex items-baseline space-x-1">
      <span className={`font-mono text-sm ${status === 'warning' ? 'text-orange-500 animate-pulse' : 'text-white'}`}>
        {value}
      </span>
      <span className="text-[10px] text-gray-500">{unit}</span>
    </div>
  </div>
);

// --- Main Layout Components ---

const Navigation = ({ activeTab, setActiveTab }) => {
  const items = [
    { id: 'overview', label: 'SYS.STAT' },
    { id: 'schematic', label: 'SCHEMATIC' },
    { id: 'analysis', label: 'ANALYSIS' },
    { id: 'settings', label: 'CONFIG' },
  ];

  // Helper function to render the correct icon
  const renderIcon = (id) => {
    const iconProps = { size: 24, strokeWidth: 1.5 };
    switch (id) {
      case 'overview':
        return <Activity {...iconProps} />;
      case 'schematic':
        return <Layers {...iconProps} />;
      case 'analysis':
        return <Compass {...iconProps} />;
      case 'settings':
        return <Settings {...iconProps} />;
      default:
        return null;
    }
  };

  return (
    <nav className="fixed left-0 top-0 bottom-0 w-16 md:w-20 border-r border-white/20 bg-[#0a1628]/95 backdrop-blur z-50 flex flex-col items-center py-8">
      <div className="mb-12">
        <Crosshair className="text-cyan-400 animate-spin-slow" size={32} />
      </div>
      <div className="flex-1 flex flex-col space-y-8 w-full">
        {items.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className={`relative group w-full flex flex-col items-center py-2 transition-all ${
              activeTab === item.id ? 'text-cyan-400' : 'text-gray-500 hover:text-white'
            }`}
          >
            {renderIcon(item.id)}
            <span className="text-[9px] mt-1 opacity-0 group-hover:opacity-100 transition-opacity absolute top-full">
              {item.label}
            </span>
            {activeTab === item.id && (
              <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-cyan-400 shadow-[0_0_10px_#22d3ee]" />
            )}
          </button>
        ))}
      </div>
      <div className="text-[10px] text-gray-600 vertical-text font-mono rotate-180 mb-4">
        V.2.0.4-B
      </div>
    </nav>
  );
};

const TitleBlock = () => (
  <div className="border-t-2 border-white/80 bg-[#0a1628] p-4 flex flex-wrap gap-4 items-stretch font-mono text-xs uppercase text-gray-300">
    <div className="border-r border-white/20 pr-6 mr-2">
      <div className="text-[9px] text-gray-500">Project Name</div>
      <div className="text-white font-bold text-sm">Orbital Stablizer MK-IV</div>
    </div>
    <div className="border-r border-white/20 pr-6 mr-2">
      <div className="text-[9px] text-gray-500">Drafted By</div>
      <div>ENG. S. Chen</div>
    </div>
    <div className="border-r border-white/20 pr-6 mr-2">
      <div className="text-[9px] text-gray-500">Date / Rev</div>
      <div>2023-12-14 / R.04</div>
    </div>
    <div className="border-r border-white/20 pr-6 mr-2">
      <div className="text-[9px] text-gray-500">Scale</div>
      <div>1:500</div>
    </div>
    <div className="flex-1 flex justify-end items-center text-cyan-500">
      <span className="mr-2">Status:</span>
      <span className="bg-cyan-500/20 px-2 py-1 text-cyan-300 border border-cyan-500/50">
        APPROVED FOR PRODUCTION
      </span>
    </div>
  </div>
);

// --- Main Visualization Component ---

const SchematicView = () => {
  const [selectedPart, setSelectedPart] = useState(null);
  const [rotation, setRotation] = useState(0);

  // Auto-rotation effect for the visual
  useEffect(() => {
    const interval = setInterval(() => {
      setRotation(prev => (prev + 0.2) % 360);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  const parts = [
    { id: 'core', name: 'Fusion Core', x: 50, y: 50, spec: '4500 MW', temp: '840°C' },
    { id: 'ring_inner', name: 'Mag-Field Gen', x: 30, y: 30, spec: '12 T', temp: '120°C' },
    { id: 'ring_outer', name: 'Coolant Array', x: 70, y: 70, spec: '400 L/s', temp: '-20°C' },
  ];

  return (
    <div className="relative w-full h-full min-h-[500px] flex flex-col">
      <div className="absolute top-4 left-4 z-10">
        <h2 className="text-xl font-bold text-white tracking-widest">SECTION A-A</h2>
        <div className="text-cyan-400 text-xs mt-1">AXIS: Z-VERTICAL</div>
      </div>

      <div className="flex-1 relative flex items-center justify-center overflow-hidden bg-[#0a1628]/50">
        {/* Background Grid Accent */}
        <div className="absolute inset-0 blueprint-grid opacity-50 pointer-events-none"></div>

        {/* Central Schematic Visualization */}
        <div className="relative w-[400px] h-[400px]">
          {/* Main Rotating Ring */}
          <div
            className="absolute inset-0 border border-dashed border-cyan-500/30 rounded-full transition-transform duration-75"
            style={{ transform: `rotate(${rotation}deg)` }}
          ></div>
           <div
            className="absolute inset-10 border border-white/20 rounded-full transition-transform duration-75"
            style={{ transform: `rotate(-${rotation * 1.5}deg)` }}
          >
            {/* Markers on ring */}
            <div className="absolute top-0 left-1/2 w-1 h-2 bg-white -translate-x-1/2"></div>
            <div className="absolute bottom-0 left-1/2 w-1 h-2 bg-white -translate-x-1/2"></div>
          </div>

          {/* Interactive Core */}
          <div
            className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 border-2 ${selectedPart === 'core' ? 'border-cyan-400 bg-cyan-900/20 shadow-[0_0_20px_rgba(34,211,238,0.3)]' : 'border-white bg-[#0a1628]'} transition-all cursor-pointer z-20 flex items-center justify-center`}
            onClick={() => setSelectedPart(selectedPart === 'core' ? null : 'core')}
          >
            <div className="hatched-pattern absolute inset-2 opacity-30 pointer-events-none"></div>
            <Cpu className={`${selectedPart === 'core' ? 'text-cyan-400' : 'text-white/50'}`} size={40} />

            {/* Dynamic Dimensions when selected */}
            {selectedPart === 'core' && (
              <>
                <div className="absolute -top-8 left-0 right-0">
                  <DimensionArrow text="320mm" orientation="horizontal" />
                </div>
                <div className="absolute top-0 -right-8 bottom-0">
                  <DimensionArrow text="320mm" orientation="vertical" />
                </div>
              </>
            )}
          </div>

          {/* Connection Lines */}
          <svg className="absolute inset-0 pointer-events-none stroke-white/30" strokeWidth="1">
            <line x1="200" y1="200" x2="350" y2="100" />
            <line x1="200" y1="200" x2="50" y2="300" />
            <circle cx="350" cy="100" r="4" fill="#0a1628" stroke="white" />
            <circle cx="50" cy="300" r="4" fill="#0a1628" stroke="white" />
          </svg>

          {/* Floating Labels */}
          <div className="absolute top-[80px] right-[20px] text-right">
             <div className="text-xs text-cyan-400">NODE ALPHA</div>
             <div className="text-[10px] text-gray-500">X: 340.22</div>
          </div>
        </div>

        {/* HUD Elements */}
        <div className="absolute bottom-4 right-4 flex space-x-4">
            <div className="bg-black/40 border border-white/20 p-2 text-xs">
                <div className="text-gray-500 mb-1">SCALE</div>
                <div className="text-white">100%</div>
            </div>
            <div className="bg-black/40 border border-white/20 p-2 text-xs">
                <div className="text-gray-500 mb-1">GRID</div>
                <div className="text-white">50px</div>
            </div>
        </div>
      </div>

      {/* Details Panel - Shows when a part is selected */}
      <div className={`h-48 border-t border-white/20 bg-[#0a1628] p-6 transition-all duration-500 flex ${selectedPart ? 'opacity-100' : 'opacity-50 grayscale'}`}>
        <div className="w-1/3 border-r border-white/10 pr-6">
          <h4 className="text-cyan-400 font-bold mb-2 flex items-center">
            <Activity size={16} className="mr-2" />
            COMPONENT DIAGNOSTICS
          </h4>
          <p className="text-xs text-gray-400 leading-relaxed">
            Select a component to view real-time telemetry and structural stress analysis. Data refreshed at 200ms intervals.
          </p>
        </div>
        <div className="w-2/3 pl-6 grid grid-cols-3 gap-8">
           <div>
             <div className="text-[10px] text-gray-500 mb-1 uppercase">Operating Temp</div>
             <div className="text-2xl font-mono text-white">{selectedPart ? '840°C' : '---'}</div>
             <div className="h-1 bg-gray-800 mt-2 rounded-full overflow-hidden">
                <div className={`h-full bg-orange-500 w-[70%] transition-all duration-1000 ${selectedPart ? 'opacity-100' : 'opacity-0'}`}></div>
             </div>
           </div>
           <div>
             <div className="text-[10px] text-gray-500 mb-1 uppercase">Load Capacity</div>
             <div className="text-2xl font-mono text-white">{selectedPart ? '92%' : '---'}</div>
             <div className="h-1 bg-gray-800 mt-2 rounded-full overflow-hidden">
                <div className={`h-full bg-cyan-400 w-[92%] transition-all duration-1000 ${selectedPart ? 'opacity-100' : 'opacity-0'}`}></div>
             </div>
           </div>
           <div>
             <div className="text-[10px] text-gray-500 mb-1 uppercase">Est. Lifespan</div>
             <div className="text-2xl font-mono text-white">{selectedPart ? '4.2 Yrs' : '---'}</div>
           </div>
        </div>
      </div>
    </div>
  );
};

const Dashboard = () => {
  return (
    <div className="grid grid-cols-12 gap-6 p-6 h-full overflow-y-auto">
      {/* Column 1: Stats */}
      <div className="col-span-12 lg:col-span-3 space-y-6">
        <div className="tech-border p-4 bg-[#0a1628]/80">
          <SectionHeader title="System Status" code="SYS-01" />
          <div className="space-y-1">
            <DataPoint label="Core Voltage" value="12.4" unit="kV" />
            <DataPoint label="Pressure A" value="450" unit="PSI" />
            <DataPoint label="Pressure B" value="442" unit="PSI" />
            <DataPoint label="Coolant Flow" value="2.1" unit="kL/m" />
          </div>
          <div className="mt-4 p-2 bg-cyan-900/20 border border-cyan-500/30 text-xs text-cyan-300 flex items-center">
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse mr-2"></div>
            SYSTEM OPTIMAL
          </div>
        </div>

        <div className="tech-border p-4 bg-[#0a1628]/80">
          <SectionHeader title="Alerts" code="ALR-04" />
          <div className="space-y-3">
            <div className="flex items-start text-xs text-orange-400">
               <AlertTriangle size={14} className="mr-2 mt-0.5 shrink-0" />
               <span>Variance detected in Sector 7 structural supports.</span>
            </div>
             <div className="flex items-start text-xs text-gray-400">
               <div className="w-3.5 h-3.5 mr-2 flex items-center justify-center border border-gray-600 text-[8px]">i</div>
               <span>Routine maintenance scheduled for 0400 hours.</span>
            </div>
          </div>
        </div>
      </div>

      {/* Column 2: Main Schematic */}
      <div className="col-span-12 lg:col-span-6 flex flex-col tech-border min-h-[600px] bg-[#0a1628]">
        <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-white"></div>
        <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-white"></div>
        <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-white"></div>
        <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-white"></div>
        <SchematicView />
      </div>

      {/* Column 3: Secondary Data */}
      <div className="col-span-12 lg:col-span-3 space-y-6">
        <div className="tech-border p-4 bg-[#0a1628]/80 h-full flex flex-col">
          <SectionHeader title="Environment" code="ENV-02" />

          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="text-center p-3 border border-white/10 bg-white/5">
                <Wind className="mx-auto mb-2 text-gray-400" size={20} />
                <div className="text-lg font-bold">12m/s</div>
                <div className="text-[10px] text-gray-500">AIRFLOW</div>
            </div>
             <div className="text-center p-3 border border-white/10 bg-white/5">
                <Database className="mx-auto mb-2 text-gray-400" size={20} />
                <div className="text-lg font-bold">45TB</div>
                <div className="text-[10px] text-gray-500">LOGGED</div>
            </div>
          </div>

          <div className="flex-1 border border-white/10 p-2 relative hatched-pattern">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center bg-[#0a1628] p-2 border border-white/20">
                 <div className="text-[10px] text-gray-500 mb-1">NETWORK LOAD</div>
                 <div className="flex items-end justify-center space-x-1 h-16">
                    {[40, 60, 30, 80, 50, 90, 45].map((h, i) => (
                      <div key={i} className="w-2 bg-cyan-500/50" style={{ height: `${h}%` }}></div>
                    ))}
                 </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- App Container ---

export default function App() {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="flex h-screen w-screen overflow-hidden text-gray-200 selection:bg-cyan-500/30">
      <BlueprintStyles />

      {/* Left Sidebar */}
      <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col relative ml-16 md:ml-20 blueprint-grid">

        {/* Top Header */}
        <header className="h-16 border-b border-white/20 bg-[#0a1628]/90 backdrop-blur flex items-center justify-between px-6 z-40">
          <div className="flex items-center">
            <div className="mr-4 text-cyan-400 border border-cyan-400 p-1">
              <Database size={16} />
            </div>
            <div>
              <h1 className="text-lg font-bold text-white tracking-widest uppercase">Structural Integrity Monitor</h1>
              <div className="text-[10px] text-gray-400 font-mono flex items-center">
                <span className="w-2 h-2 rounded-full bg-green-500 mr-2 animate-pulse"></span>
                LIVE CONNECTION // SECURE
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-6 text-sm font-mono">
             <div className="hidden md:block text-gray-500">
               COORD: <span className="text-white">45.22, -12.04</span>
             </div>
             <div className="hidden md:block text-gray-500">
               GRID: <span className="text-white">ON</span>
             </div>
             <button className="text-cyan-400 hover:text-white transition-colors">
               <Maximize2 size={18} />
             </button>
          </div>
        </header>

        {/* Dynamic Content */}
        <div className="flex-1 overflow-hidden relative">
          <Dashboard />
        </div>

        {/* Footer Title Block */}
        <TitleBlock />

      </main>
    </div>
  );
}
