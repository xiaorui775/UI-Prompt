import React from 'react';
import { Activity, Database, AlertTriangle } from 'lucide-react';

export default function BlueprintDemo() {
  return (
    <div className="min-h-full bg-[#0a1628] text-white p-6 font-mono" style={{
      backgroundImage: `
        linear-gradient(rgba(255, 255, 255, 0.8) 1px, transparent 1px),
        linear-gradient(90deg, rgba(255, 255, 255, 0.8) 1px, transparent 1px),
        linear-gradient(rgba(96, 165, 250, 0.4) 1px, transparent 1px),
        linear-gradient(90deg, rgba(96, 165, 250, 0.4) 1px, transparent 1px)
      `,
      backgroundSize: '100px 100px, 100px 100px, 20px 20px, 20px 20px',
      backgroundPosition: '-1px -1px'
    }}>
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="border-b border-white/20 pb-4 mb-6">
          <div className="flex items-center gap-3 mb-2">
            <Database className="text-cyan-400" size={24} />
            <h2 className="text-2xl font-bold tracking-widest">STRUCTURAL INTEGRITY MONITOR</h2>
          </div>
          <div className="text-xs text-gray-400 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            LIVE CONNECTION // SECURE
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-3 gap-4">
          {/* System Status Panel */}
          <div className="col-span-2 border border-white/20 bg-[#0a1628]/80 p-4 relative">
            <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-cyan-400"></div>
            <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-cyan-400"></div>

            <div className="flex items-end justify-between border-b border-white/20 pb-2 mb-4">
              <h3 className="text-sm font-bold tracking-widest">SYSTEM STATUS</h3>
              <span className="text-xs text-cyan-400">SYS-01</span>
            </div>

            <div className="space-y-3">
              <div className="flex justify-between items-center text-xs">
                <span className="text-gray-400">CORE VOLTAGE</span>
                <div className="flex items-baseline gap-1">
                  <span className="font-mono">12.4</span>
                  <span className="text-gray-500">kV</span>
                </div>
              </div>
              <div className="flex justify-between items-center text-xs">
                <span className="text-gray-400">PRESSURE A</span>
                <div className="flex items-baseline gap-1">
                  <span className="font-mono">450</span>
                  <span className="text-gray-500">PSI</span>
                </div>
              </div>
              <div className="flex justify-between items-center text-xs">
                <span className="text-gray-400">COOLANT FLOW</span>
                <div className="flex items-baseline gap-1">
                  <span className="font-mono">2.1</span>
                  <span className="text-gray-500">kL/m</span>
                </div>
              </div>
            </div>

            <div className="mt-4 p-2 bg-cyan-900/20 border border-cyan-500/30 text-xs text-cyan-300 flex items-center gap-2">
              <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
              SYSTEM OPTIMAL
            </div>
          </div>

          {/* Alerts Panel */}
          <div className="border border-white/20 bg-[#0a1628]/80 p-4">
            <div className="flex items-end justify-between border-b border-white/20 pb-2 mb-4">
              <h3 className="text-sm font-bold tracking-widest">ALERTS</h3>
              <span className="text-xs text-cyan-400">ALR-04</span>
            </div>

            <div className="space-y-3">
              <div className="flex items-start gap-2 text-xs text-orange-400">
                <AlertTriangle size={12} className="mt-0.5 shrink-0" />
                <span>Variance in Sector 7</span>
              </div>
              <div className="flex items-start gap-2 text-xs text-gray-400">
                <div className="w-3 h-3 border border-gray-600 flex items-center justify-center text-[8px]">i</div>
                <span>Maintenance at 0400</span>
              </div>
            </div>
          </div>
        </div>

        {/* Schematic View */}
        <div className="mt-4 border border-white/20 bg-[#0a1628]/80 p-6 relative">
          <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-white"></div>
          <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-white"></div>
          <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-white"></div>
          <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-white"></div>

          <h3 className="text-sm font-bold tracking-widest mb-1">SECTION A-A</h3>
          <div className="text-xs text-cyan-400 mb-6">AXIS: Z-VERTICAL</div>

          <div className="flex items-center justify-center h-48 relative">
            <div className="absolute inset-0 border border-dashed border-cyan-500/30 rounded-full"></div>
            <div className="absolute inset-8 border border-white/20 rounded-full"></div>
            <div className="w-24 h-24 border-2 border-cyan-400 bg-cyan-900/20 flex items-center justify-center shadow-[0_0_20px_rgba(34,211,238,0.3)]">
              <Activity className="text-cyan-400" size={32} />
            </div>
          </div>
        </div>

        {/* Title Block */}
        <div className="mt-4 border-t-2 border-white/80 bg-[#0a1628] p-3 flex gap-4 text-[10px] uppercase text-gray-300">
          <div className="border-r border-white/20 pr-3">
            <div className="text-gray-500 text-[8px]">Project</div>
            <div className="text-white font-bold">Orbital Stabilizer MK-IV</div>
          </div>
          <div className="border-r border-white/20 pr-3">
            <div className="text-gray-500 text-[8px]">Date / Rev</div>
            <div>2023-12-14 / R.04</div>
          </div>
          <div className="flex-1 flex justify-end items-center text-cyan-500">
            <span className="bg-cyan-500/20 px-2 py-1 border border-cyan-500/50 text-[9px]">
              APPROVED
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
