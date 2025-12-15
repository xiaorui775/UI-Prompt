import React from 'react';
import { Grid, Type, Square } from 'lucide-react';

export default function SwissDesignDemo() {
  return (
    <div className="min-h-full bg-white text-neutral-900 p-8 font-sans">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="mb-12 border-b-2 border-black pb-6">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-3 h-3 bg-black"></div>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#FF3B30]">
              International Typographic Style
            </span>
          </div>
          <h1 className="text-5xl font-black tracking-tighter leading-[0.95] mb-4">
            CLARITY<br />ORDER
          </h1>
          <p className="text-sm text-neutral-600 max-w-md">
            Design is about objective communication. We remove the ornament to reveal the structure.
          </p>
        </div>

        {/* Grid Principles */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          {[
            { title: 'Grid', icon: <Grid size={16} strokeWidth={2.5} /> },
            { title: 'Type', icon: <Type size={16} strokeWidth={2.5} /> },
            { title: 'Space', icon: <Square size={16} strokeWidth={2.5} /> },
          ].map((item, idx) => (
            <div
              key={idx}
              className="border border-neutral-900 p-4 hover:bg-neutral-50 transition-colors group cursor-pointer"
            >
              <div className="text-neutral-400 group-hover:text-[#FF3B30] transition-colors mb-3">
                {item.icon}
              </div>
              <h3 className="text-xs font-bold uppercase tracking-widest">{item.title}</h3>
            </div>
          ))}
        </div>

        {/* Typography Showcase */}
        <div className="bg-black text-white p-6 mb-8">
          <div className="w-8 h-0.5 bg-[#FF3B30] mb-4"></div>
          <h2 className="text-2xl font-bold tracking-tight mb-2">Helvetica</h2>
          <p className="text-xs text-neutral-400 uppercase tracking-widest">
            Objective · Neutral · Legible
          </p>
        </div>

        {/* Data Table */}
        <div className="border-t border-black pt-4">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="border-b border-neutral-300">
                <th className="py-2 font-bold uppercase tracking-widest">Year</th>
                <th className="py-2 font-bold uppercase tracking-widest">Project</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-neutral-200 hover:bg-neutral-50">
                <td className="py-2 font-mono text-neutral-500">1957</td>
                <td className="py-2">Neue Haas Grotesk</td>
              </tr>
              <tr className="border-b border-neutral-200 hover:bg-neutral-50">
                <td className="py-2 font-mono text-neutral-500">1972</td>
                <td className="py-2">Olympic Identity</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
