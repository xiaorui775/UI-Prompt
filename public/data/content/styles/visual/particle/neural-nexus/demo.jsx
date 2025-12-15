import React, { useEffect, useRef } from 'react';
import { Activity, Terminal } from 'lucide-react';

// Simplified particle system for demo card
class DemoParticle {
  constructor(width, height) {
    this.x = Math.random() * width;
    this.y = Math.random() * height;
    this.vx = (Math.random() - 0.5) * 0.3;
    this.vy = (Math.random() - 0.5) * 0.3;
    this.size = Math.random() * 2 + 1;
    this.alpha = Math.random() * 0.5 + 0.2;
  }

  update(width, height) {
    this.x += this.vx;
    this.y += this.vy;
    if (this.x < 0 || this.x > width) this.vx *= -1;
    if (this.y < 0 || this.y > height) this.vy *= -1;
  }

  draw(ctx) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(100, 220, 255, ${this.alpha})`;
    ctx.fill();
  }
}

export default function NeuralNexusDemo() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const particles = [];

    const resize = () => {
      const rect = canvas.parentElement.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;
    };

    resize();
    window.addEventListener('resize', resize);

    // Create particles
    for (let i = 0; i < 30; i++) {
      particles.push(new DemoParticle(canvas.width, canvas.height));
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach(p => {
        p.update(canvas.width, canvas.height);
        p.draw(ctx);
      });

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 80) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(100, 220, 255, ${(1 - dist / 80) * 0.2})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <div className="relative min-h-full bg-gradient-to-br from-slate-950 to-slate-900 text-slate-200 p-6 overflow-hidden">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none"
      />

      <div className="relative z-10 flex flex-col h-full justify-between">
        <div>
          <div className="flex items-center space-x-2 text-cyan-400 mb-2">
            <Terminal size={12} />
            <span className="text-[10px] font-mono tracking-widest">SYSTEM_READY</span>
          </div>
          <h1 className="text-2xl font-bold tracking-tight text-white mb-1">
            NEURAL <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">NEXUS</span>
          </h1>
          <p className="text-xs text-slate-400 leading-relaxed max-w-xs">
            Advanced visualization of decentralized node architecture
          </p>
        </div>

        <div className="bg-slate-900/60 backdrop-blur-md border border-slate-700/50 rounded-lg p-3 mt-8">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[10px] font-mono text-cyan-400">REAL-TIME TELEMETRY</span>
            <Activity className="text-cyan-500" size={14} />
          </div>
          <div className="space-y-2">
            <div className="flex justify-between text-[10px] font-mono">
              <span className="text-slate-400">LATENCY</span>
              <span className="text-cyan-400">12ms</span>
            </div>
            <div className="w-full bg-slate-800/50 rounded-full h-1 overflow-hidden">
              <div className="bg-cyan-500 h-full w-[70%] shadow-[0_0_8px_rgba(34,211,238,0.5)]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
