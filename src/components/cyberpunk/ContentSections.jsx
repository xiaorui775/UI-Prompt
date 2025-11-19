import { AnimatedWrapper } from './AnimatedWrapper';

/**
 * MonitorCard - 單個監控卡片組件
 */
function MonitorCard({ componentName, progress, icon, title, value, status, color, barWidth }) {
  return (
    <AnimatedWrapper
      componentName={componentName}
      progress={progress}
      animationType="fadeInUp"
    >
      <div
        style={{
          background: `rgba(${color}, 0.05)`,
          border: `1px solid rgb(${color})`,
          padding: '1.5rem',
          boxShadow: `0 0 20px rgba(${color}, 0.2)`,
          transition: 'all 0.3s',
          position: 'relative',
        }}
      >
        <div style={{ position: 'absolute', top: 0, right: 0, width: '60px', height: '60px', background: `radial-gradient(circle, rgba(${color}, 0.2), transparent)`, animation: 'cyber-pulse 2s ease-in-out infinite' }} />
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start' }}>
          <div style={{ flex: 1 }}>
            <div style={{ width: '50px', height: '50px', background: `rgba(${color}, 0.2)`, border: `2px solid rgb(${color})`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '24px', marginBottom: '1rem' }}>
              {icon}
            </div>
            <h3 style={{ fontSize: '12px', fontWeight: 700, color: '#00ffff', margin: 0, textTransform: 'uppercase', letterSpacing: '1px' }}>{title}</h3>
            <p style={{ fontSize: '36px', fontWeight: 900, color: `rgb(${color})`, margin: '0.5rem 0', textShadow: `0 0 10px rgb(${color})` }}>{value}</p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span style={{ color: `rgb(${color})`, fontWeight: 900, fontSize: '14px' }}>{status}</span>
            </div>
            <div style={{ marginTop: '1rem', position: 'relative', width: '100%', height: '8px', background: `rgba(${color}, 0.1)`, border: `1px solid rgb(${color})` }}>
              <div style={{ position: 'absolute', top: 0, left: 0, width: barWidth, height: '100%', background: `rgb(${color})`, boxShadow: `0 0 10px rgb(${color})`, animation: 'cyber-pulse-bar 2s ease-in-out infinite' }} />
            </div>
          </div>
        </div>
      </div>
    </AnimatedWrapper>
  );
}

/**
 * CyberCards - 監控卡片組
 */
export function CyberCards({ progress }) {
  return (
    <AnimatedWrapper
      componentName="monitoringSection"
      progress={progress}
      animationType="fadeIn"
    >
      <section data-stage="monitoring" style={{ maxWidth: '1400px', margin: '0 auto', padding: '3rem 2rem' }}>
        <h2 style={{ fontSize: '24px', fontWeight: 900, color: '#00ff41', textShadow: '0 0 10px #00ff41', marginBottom: '2rem', borderLeft: '4px solid #00ff41', paddingLeft: '1rem' }}>
          // SYSTEM_MONITOR
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
          <MonitorCard
            componentName="cpuCard"
            progress={progress}
            icon="💻"
            title="CPU_USAGE"
            value="78%"
            status="↑ OPTIMAL"
            color="0, 255, 65"
            barWidth="78%"
          />
          <MonitorCard
            componentName="gpuCard"
            progress={progress}
            icon="🎮"
            title="GPU_USAGE"
            value="92%"
            status="↑ HIGH"
            color="0, 255, 255"
            barWidth="92%"
          />
          <MonitorCard
            componentName="networkCard"
            progress={progress}
            icon="🌐"
            title="NETWORK"
            value="142"
            status="MB/s"
            color="0, 255, 65"
            barWidth="65%"
          />
          <MonitorCard
            componentName="securityCard"
            progress={progress}
            icon="🛡️"
            title="SECURITY"
            value="0"
            status="THREATS"
            color="0, 255, 255"
            barWidth="100%"
          />
        </div>
      </section>
    </AnimatedWrapper>
  );
}

/**
 * CyberTerminal - 終端日誌
 */
export function CyberTerminal({ progress }) {
  const logs = [
    '[2077-11-05 23:42:01] System initialized...',
    '[2077-11-05 23:42:02] Network connection established',
    '[2077-11-05 23:42:03] Loading neural interface...',
    '[2077-11-05 23:42:04] Scanning for threats... [OK]',
    '[2077-11-05 23:42:05] Memory optimization complete',
    '[2077-11-05 23:42:06] All systems operational',
  ];

  return (
    <AnimatedWrapper
      componentName="terminalSection"
      progress={progress}
      animationType="fadeInUp"
    >
      <section data-stage="terminal" style={{ maxWidth: '1400px', margin: '0 auto', padding: '3rem 2rem' }}>
        <h2 style={{ fontSize: '24px', fontWeight: 900, color: '#00ffff', textShadow: '0 0 10px #00ffff', marginBottom: '2rem', borderLeft: '4px solid #00ffff', paddingLeft: '1rem' }}>
          // DATA_TERMINAL
        </h2>
        <div style={{ background: 'rgba(0, 0, 0, 0.8)', border: '1px solid #00ff41', padding: '1.5rem', boxShadow: '0 0 20px rgba(0, 255, 65, 0.3)', fontFamily: "'Courier New', monospace", position: 'relative', overflow: 'hidden' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem', borderBottom: '1px solid #00ff41', paddingBottom: '0.5rem' }}>
            <span style={{ color: '#00ff41', fontSize: '14px', fontWeight: 700 }}>root@cyber-terminal:~#</span>
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <span style={{ width: '12px', height: '12px', background: '#00ff41', borderRadius: '50%' }} />
              <span style={{ width: '12px', height: '12px', background: '#00ffff', borderRadius: '50%' }} />
              <span style={{ width: '12px', height: '12px', background: 'rgba(255, 255, 255, 0.3)', borderRadius: '50%' }} />
            </div>
          </div>
          <div style={{ color: '#00ff41', fontSize: '13px', lineHeight: 1.6, maxHeight: '200px', overflowY: 'auto' }}>
            {logs.map((log, i) => (
              <AnimatedWrapper
                key={i}
                componentName={`terminalLog${i + 1}`}
                progress={progress}
                animationType="fadeInRight"
              >
                <div style={{ marginBottom: '0.5rem', color: i % 2 === 0 ? '#00ff41' : '#00ffff' }}>
                  {log}
                </div>
              </AnimatedWrapper>
            ))}
            <div style={{ marginTop: '1rem', display: 'flex', alignItems: 'center' }}>
              <span style={{ color: '#00ff41' }}>root@cyber-terminal:~# </span>
              <span style={{ display: 'inline-block', width: '8px', height: '14px', background: '#00ff41', marginLeft: '4px', animation: 'cyber-cursor 1s infinite' }} />
            </div>
          </div>
        </div>
      </section>
    </AnimatedWrapper>
  );
}

/**
 * CyberFooter - Footer
 */
export function CyberFooter({ progress }) {
  return (
    <AnimatedWrapper
      componentName="footer"
      progress={progress}
      animationType="fadeIn"
    >
      <footer data-stage="footer" style={{ background: 'rgba(10, 10, 10, 0.95)', borderTop: '2px solid #00ff41', padding: '2rem', marginTop: '4rem' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', textAlign: 'center' }}>
          <p style={{ color: '#00ff41', fontSize: '14px', marginBottom: '0.5rem', textShadow: '0 0 5px #00ff41' }}>
            © 2077 CYBER TERMINAL - ALL RIGHTS RESERVED
          </p>
          <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center', marginTop: '1rem' }}>
            <a
              href="#"
              onClick={(e) => e.preventDefault()}
              style={{ color: '#00ffff', fontSize: '12px', textDecoration: 'none', transition: 'all 0.3s' }}
            >
              PRIVACY
            </a>
            <a
              href="#"
              onClick={(e) => e.preventDefault()}
              style={{ color: '#00ffff', fontSize: '12px', textDecoration: 'none', transition: 'all 0.3s' }}
            >
              TERMS
            </a>
            <a
              href="#"
              onClick={(e) => e.preventDefault()}
              style={{ color: '#00ffff', fontSize: '12px', textDecoration: 'none', transition: 'all 0.3s' }}
            >
              CONTACT
            </a>
          </div>
        </div>
      </footer>
    </AnimatedWrapper>
  );
}
