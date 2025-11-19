export const demoHTML = `
<div class="liquid-demo">
  <!-- Liquid Background Layer -->
  <div class="liquid-container">
    <div class="liquid-blob liquid-blob-1"></div>
    <div class="liquid-blob liquid-blob-2"></div>
    <div class="liquid-blob liquid-blob-3"></div>
  </div>

  <!-- Content Layer -->
  <div class="liquid-content">
    <!-- Navigation Indicator -->
    <div class="liquid-nav-dots">
      <span class="nav-dot active"></span>
      <span class="nav-dot"></span>
      <span class="nav-dot"></span>
    </div>

    <!-- Stats Card -->
    <div class="liquid-card">
      <div class="card-glow"></div>
      <div class="card-content">
        <div class="card-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
          </svg>
        </div>
        <div class="card-stats">
          <span class="stat-value">2.4K</span>
          <span class="stat-label">Active Users</span>
        </div>
        <div class="card-trend">
          <span class="trend-up">↑ 12%</span>
        </div>
      </div>
    </div>

    <!-- Title -->
    <div class="liquid-title">
      <h3>Liquid Motion</h3>
      <p>Deep Ocean Data Visualization</p>
    </div>

    <!-- CTA Button -->
    <a href="javascript:void(0)" class="liquid-button">
      <span class="button-text">Explore Dashboard</span>
      <span class="button-ripple"></span>
    </a>
  </div>
</div>
`;

export const customStyles = `
.liquid-demo {
  background: linear-gradient(135deg, #0a192f 0%, #0d3b66 50%, #112240 100%);
  padding: 48px 32px;
  min-height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

/* Liquid Background Container */
.liquid-container {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  filter: blur(30px);
  opacity: 0.8;
}

/* Liquid Blobs */
.liquid-blob {
  position: absolute;
  border-radius: 40% 60% 70% 30% / 40% 50% 60% 50%;
  animation: liquidMorph 18s ease-in-out infinite;
  will-change: transform, border-radius;
}

.liquid-blob-1 {
  width: 350px;
  height: 350px;
  top: -10%;
  left: -5%;
  background: radial-gradient(circle, rgba(0, 229, 255, 0.4) 0%, rgba(0, 229, 255, 0.1) 50%, transparent 70%);
  animation-duration: 18s;
}

.liquid-blob-2 {
  width: 300px;
  height: 300px;
  bottom: -15%;
  right: -10%;
  background: radial-gradient(circle, rgba(100, 255, 218, 0.35) 0%, rgba(100, 255, 218, 0.1) 50%, transparent 70%);
  animation-duration: 22s;
  animation-delay: 3s;
}

.liquid-blob-3 {
  width: 200px;
  height: 200px;
  top: 50%;
  right: 20%;
  background: radial-gradient(circle, rgba(139, 92, 246, 0.25) 0%, rgba(139, 92, 246, 0.05) 50%, transparent 70%);
  animation-duration: 15s;
  animation-delay: 6s;
}

/* Content Layer */
.liquid-content {
  position: relative;
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  width: 100%;
  max-width: 320px;
}

/* Navigation Dots */
.liquid-nav-dots {
  display: flex;
  gap: 8px;
  margin-bottom: 8px;
}

.nav-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: rgba(136, 146, 176, 0.4);
  transition: all 0.3s ease;
}

.nav-dot.active {
  width: 24px;
  border-radius: 4px;
  background: #64ffda;
  box-shadow: 0 0 12px rgba(100, 255, 218, 0.5);
}

/* Stats Card */
.liquid-card {
  position: relative;
  width: 100%;
  padding: 20px;
  background: rgba(17, 34, 64, 0.6);
  backdrop-filter: blur(12px);
  border-radius: 16px;
  border: 1px solid rgba(100, 255, 218, 0.15);
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.liquid-card:hover {
  border-color: rgba(100, 255, 218, 0.4);
  transform: translateY(-4px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
}

.card-glow {
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(circle at 30% 30%, rgba(0, 229, 255, 0.1) 0%, transparent 50%);
  opacity: 0;
  transition: opacity 0.4s ease;
}

.liquid-card:hover .card-glow {
  opacity: 1;
}

.card-content {
  position: relative;
  display: flex;
  align-items: center;
  gap: 16px;
}

.card-icon {
  width: 40px;
  height: 40px;
  padding: 8px;
  background: rgba(100, 255, 218, 0.1);
  border-radius: 10px;
  color: #64ffda;
}

.card-icon svg {
  width: 100%;
  height: 100%;
}

.card-stats {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.stat-value {
  font-size: 24px;
  font-weight: 700;
  color: #ccd6f6;
  letter-spacing: -0.02em;
}

.stat-label {
  font-size: 12px;
  color: #8892b0;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.card-trend {
  padding: 4px 8px;
  background: rgba(100, 255, 218, 0.1);
  border-radius: 6px;
}

.trend-up {
  font-size: 12px;
  font-weight: 600;
  color: #64ffda;
}

/* Title */
.liquid-title {
  text-align: center;
  color: #ccd6f6;
}

.liquid-title h3 {
  font-size: 28px;
  font-weight: 700;
  margin: 0 0 8px 0;
  background: linear-gradient(135deg, #ccd6f6 0%, #64ffda 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.liquid-title p {
  font-size: 14px;
  margin: 0;
  color: #8892b0;
}

/* CTA Button */
.liquid-button {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 12px 28px;
  background: transparent;
  border: 1px solid #64ffda;
  border-radius: 8px;
  color: #64ffda;
  font-size: 14px;
  font-weight: 500;
  text-decoration: none;
  overflow: hidden;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
}

.liquid-button:hover {
  background: rgba(100, 255, 218, 0.1);
  box-shadow: 0 0 20px rgba(100, 255, 218, 0.3);
  transform: translateY(-2px);
}

.button-text {
  position: relative;
  z-index: 1;
}

.button-ripple {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  background: rgba(100, 255, 218, 0.2);
  border-radius: 50%;
  transform: translate(-50%, -50%);
  transition: width 0.6s ease, height 0.6s ease;
}

.liquid-button:hover .button-ripple {
  width: 300px;
  height: 300px;
}

/* Keyframe Animations */
@keyframes liquidMorph {
  0%, 100% {
    border-radius: 40% 60% 70% 30% / 40% 50% 60% 50%;
    transform: translate(0, 0) rotate(0deg) scale(1);
  }
  25% {
    border-radius: 60% 40% 30% 70% / 50% 60% 50% 40%;
    transform: translate(30px, -30px) rotate(90deg) scale(1.1);
  }
  50% {
    border-radius: 30% 70% 60% 40% / 60% 40% 50% 60%;
    transform: translate(-20px, 40px) rotate(180deg) scale(0.95);
  }
  75% {
    border-radius: 70% 30% 40% 60% / 40% 60% 70% 30%;
    transform: translate(40px, 20px) rotate(270deg) scale(1.05);
  }
}

/* Responsive Design */
@media (max-width: 768px) {
  .liquid-demo {
    padding: 40px 24px;
    min-height: 450px;
  }

  .liquid-title h3 {
    font-size: 24px;
  }

  .liquid-blob-1 {
    width: 280px;
    height: 280px;
  }

  .liquid-blob-2 {
    width: 240px;
    height: 240px;
  }

  .liquid-blob-3 {
    width: 160px;
    height: 160px;
  }

  .stat-value {
    font-size: 20px;
  }
}

@media (max-width: 480px) {
  .liquid-demo {
    padding: 32px 16px;
    min-height: 400px;
  }

  .liquid-content {
    max-width: 280px;
  }

  .liquid-title h3 {
    font-size: 20px;
  }

  .liquid-button {
    padding: 10px 20px;
    font-size: 13px;
  }
}
`;
