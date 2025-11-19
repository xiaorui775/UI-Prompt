// LiquidFullPage.js - Full page preview for Liquid Motion style
// Digital Ocean Dashboard Theme

export const fullPageHTML = `
<div class="liquid-page">
  <!-- Liquid Background Layers -->
  <div class="liquid-bg-container">
    <div class="liquid-bg liquid-bg-1"></div>
    <div class="liquid-bg liquid-bg-2"></div>
    <div class="liquid-bg liquid-bg-3"></div>
    <div class="liquid-bg liquid-bg-4"></div>
  </div>

  <!-- Navigation -->
  <nav class="liquid-navbar">
    <div class="nav-container">
      <div class="nav-brand">
        <div class="brand-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
          </svg>
        </div>
        <span class="brand-text">LiquidFlow</span>
      </div>
      <div class="nav-links">
        <a href="javascript:void(0)" class="nav-link active">Dashboard</a>
        <a href="javascript:void(0)" class="nav-link">Analytics</a>
        <a href="javascript:void(0)" class="nav-link">Reports</a>
        <a href="javascript:void(0)" class="nav-link">Settings</a>
      </div>
      <div class="nav-actions">
        <button class="nav-btn nav-btn-ghost">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/>
            <path d="M13.73 21a2 2 0 0 1-3.46 0"/>
          </svg>
        </button>
        <button class="nav-btn nav-btn-primary">Get Started</button>
      </div>
    </div>
  </nav>

  <!-- Hero Section -->
  <section class="liquid-hero">
    <div class="hero-content">
      <div class="hero-badge">
        <span class="badge-dot"></span>
        <span>Real-time Analytics Platform</span>
      </div>
      <h1 class="hero-title">
        Transform Your Data Into
        <span class="gradient-text">Actionable Insights</span>
      </h1>
      <p class="hero-subtitle">
        Powerful analytics dashboard with real-time data visualization.
        Monitor, analyze, and optimize your business metrics with our
        intuitive liquid interface design.
      </p>
      <div class="hero-actions">
        <a href="javascript:void(0)" class="btn btn-primary">
          <span>Start Free Trial</span>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </a>
        <a href="javascript:void(0)" class="btn btn-outline">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="12" cy="12" r="10"/>
            <polygon points="10 8 16 12 10 16 10 8"/>
          </svg>
          <span>Watch Demo</span>
        </a>
      </div>
      <div class="hero-stats">
        <div class="hero-stat">
          <span class="stat-number">10K+</span>
          <span class="stat-text">Active Users</span>
        </div>
        <div class="stat-divider"></div>
        <div class="hero-stat">
          <span class="stat-number">99.9%</span>
          <span class="stat-text">Uptime</span>
        </div>
        <div class="stat-divider"></div>
        <div class="hero-stat">
          <span class="stat-number">50M+</span>
          <span class="stat-text">Data Points</span>
        </div>
      </div>
    </div>
  </section>

  <!-- Stats Cards Section -->
  <section class="liquid-stats-section">
    <div class="stats-container">
      <div class="stat-card">
        <div class="stat-card-glow"></div>
        <div class="stat-card-icon icon-blue">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
            <circle cx="9" cy="7" r="4"/>
            <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
            <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
          </svg>
        </div>
        <div class="stat-card-content">
          <span class="stat-card-value">24,521</span>
          <span class="stat-card-label">Total Users</span>
        </div>
        <div class="stat-card-trend trend-up">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/>
            <polyline points="17 6 23 6 23 12"/>
          </svg>
          <span>+12.5%</span>
        </div>
      </div>

      <div class="stat-card">
        <div class="stat-card-glow"></div>
        <div class="stat-card-icon icon-green">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <line x1="12" y1="1" x2="12" y2="23"/>
            <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
          </svg>
        </div>
        <div class="stat-card-content">
          <span class="stat-card-value">$128.4K</span>
          <span class="stat-card-label">Revenue</span>
        </div>
        <div class="stat-card-trend trend-up">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/>
            <polyline points="17 6 23 6 23 12"/>
          </svg>
          <span>+8.2%</span>
        </div>
      </div>

      <div class="stat-card">
        <div class="stat-card-glow"></div>
        <div class="stat-card-icon icon-purple">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
            <line x1="3" y1="9" x2="21" y2="9"/>
            <line x1="9" y1="21" x2="9" y2="9"/>
          </svg>
        </div>
        <div class="stat-card-content">
          <span class="stat-card-value">1,842</span>
          <span class="stat-card-label">Projects</span>
        </div>
        <div class="stat-card-trend trend-up">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/>
            <polyline points="17 6 23 6 23 12"/>
          </svg>
          <span>+23.1%</span>
        </div>
      </div>

      <div class="stat-card">
        <div class="stat-card-glow"></div>
        <div class="stat-card-icon icon-cyan">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
          </svg>
        </div>
        <div class="stat-card-content">
          <span class="stat-card-value">98.7%</span>
          <span class="stat-card-label">Performance</span>
        </div>
        <div class="stat-card-trend trend-up">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/>
            <polyline points="17 6 23 6 23 12"/>
          </svg>
          <span>+2.4%</span>
        </div>
      </div>
    </div>
  </section>

  <!-- Features Section -->
  <section class="liquid-features-section">
    <div class="features-header">
      <h2 class="features-title">Powerful Features</h2>
      <p class="features-subtitle">Everything you need to analyze and visualize your data</p>
    </div>
    <div class="features-grid">
      <div class="feature-card">
        <div class="feature-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="12" cy="12" r="10"/>
            <polyline points="12 6 12 12 16 14"/>
          </svg>
        </div>
        <h3 class="feature-title">Real-time Updates</h3>
        <p class="feature-desc">
          Monitor your metrics with live data streaming. No refresh needed,
          see changes as they happen.
        </p>
        <a href="javascript:void(0)" class="feature-link">
          Learn more
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </a>
      </div>

      <div class="feature-card">
        <div class="feature-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M21.21 15.89A10 10 0 1 1 8 2.83"/>
            <path d="M22 12A10 10 0 0 0 12 2v10z"/>
          </svg>
        </div>
        <h3 class="feature-title">Advanced Charts</h3>
        <p class="feature-desc">
          Beautiful, interactive visualizations with multiple chart types.
          Customize colors, labels, and data points.
        </p>
        <a href="javascript:void(0)" class="feature-link">
          Learn more
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </a>
      </div>

      <div class="feature-card">
        <div class="feature-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
            <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
          </svg>
        </div>
        <h3 class="feature-title">Secure & Private</h3>
        <p class="feature-desc">
          Enterprise-grade security with end-to-end encryption.
          Your data stays private and protected.
        </p>
        <a href="javascript:void(0)" class="feature-link">
          Learn more
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </a>
      </div>
    </div>
  </section>

  <!-- CTA Section -->
  <section class="liquid-cta-section">
    <div class="cta-blob cta-blob-1"></div>
    <div class="cta-blob cta-blob-2"></div>
    <div class="cta-content">
      <h2 class="cta-title">Ready to Get Started?</h2>
      <p class="cta-text">
        Join thousands of teams who trust LiquidFlow for their analytics needs.
        Start your free 14-day trial today.
      </p>
      <div class="cta-form">
        <input type="email" placeholder="Enter your email" class="cta-input">
        <button class="cta-button">Start Free Trial</button>
      </div>
      <p class="cta-note">No credit card required · Cancel anytime</p>
    </div>
  </section>

  <!-- Footer -->
  <footer class="liquid-footer">
    <div class="footer-container">
      <div class="footer-brand">
        <div class="brand-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
          </svg>
        </div>
        <span>LiquidFlow</span>
      </div>
      <div class="footer-links">
        <a href="javascript:void(0)">About</a>
        <a href="javascript:void(0)">Features</a>
        <a href="javascript:void(0)">Pricing</a>
        <a href="javascript:void(0)">Contact</a>
      </div>
      <p class="footer-copyright">© 2024 LiquidFlow. All rights reserved.</p>
    </div>
  </footer>
</div>
`;

export const fullPageStyles = `
/* Base Styles */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.liquid-page {
  min-height: 100vh;
  background: linear-gradient(180deg, #0a192f 0%, #0d3b66 50%, #112240 100%);
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif;
  color: #ccd6f6;
  position: relative;
  overflow-x: hidden;
}

/* Liquid Background Layers */
.liquid-bg-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  filter: blur(60px);
  opacity: 0.6;
  z-index: 0;
}

.liquid-bg {
  position: absolute;
  border-radius: 40% 60% 70% 30% / 40% 50% 60% 50%;
  animation: liquidFloat 20s ease-in-out infinite;
  will-change: transform, border-radius;
}

.liquid-bg-1 {
  width: 600px;
  height: 600px;
  top: -200px;
  left: -100px;
  background: radial-gradient(circle, rgba(0, 229, 255, 0.4) 0%, transparent 70%);
  animation-duration: 25s;
}

.liquid-bg-2 {
  width: 500px;
  height: 500px;
  top: 30%;
  right: -150px;
  background: radial-gradient(circle, rgba(100, 255, 218, 0.35) 0%, transparent 70%);
  animation-duration: 30s;
  animation-delay: 5s;
}

.liquid-bg-3 {
  width: 400px;
  height: 400px;
  bottom: 20%;
  left: 10%;
  background: radial-gradient(circle, rgba(139, 92, 246, 0.3) 0%, transparent 70%);
  animation-duration: 22s;
  animation-delay: 10s;
}

.liquid-bg-4 {
  width: 350px;
  height: 350px;
  bottom: -100px;
  right: 20%;
  background: radial-gradient(circle, rgba(236, 72, 153, 0.25) 0%, transparent 70%);
  animation-duration: 28s;
  animation-delay: 15s;
}

@keyframes liquidFloat {
  0%, 100% {
    border-radius: 40% 60% 70% 30% / 40% 50% 60% 50%;
    transform: translate(0, 0) rotate(0deg) scale(1);
  }
  25% {
    border-radius: 60% 40% 30% 70% / 50% 60% 50% 40%;
    transform: translate(50px, -50px) rotate(90deg) scale(1.1);
  }
  50% {
    border-radius: 30% 70% 60% 40% / 60% 40% 50% 60%;
    transform: translate(-30px, 60px) rotate(180deg) scale(0.95);
  }
  75% {
    border-radius: 70% 30% 40% 60% / 40% 60% 70% 30%;
    transform: translate(60px, 30px) rotate(270deg) scale(1.05);
  }
}

/* Navigation */
.liquid-navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  padding: 16px 32px;
  background: rgba(10, 25, 47, 0.8);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(100, 255, 218, 0.1);
}

.nav-container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.nav-brand {
  display: flex;
  align-items: center;
  gap: 12px;
}

.brand-icon {
  width: 32px;
  height: 32px;
  color: #64ffda;
}

.brand-icon svg {
  width: 100%;
  height: 100%;
}

.brand-text {
  font-size: 20px;
  font-weight: 700;
  color: #ccd6f6;
}

.nav-links {
  display: flex;
  gap: 32px;
}

.nav-link {
  color: #8892b0;
  text-decoration: none;
  font-size: 14px;
  font-weight: 500;
  transition: color 0.3s ease;
  position: relative;
}

.nav-link:hover,
.nav-link.active {
  color: #64ffda;
}

.nav-link.active::after {
  content: '';
  position: absolute;
  bottom: -8px;
  left: 0;
  right: 0;
  height: 2px;
  background: #64ffda;
  border-radius: 1px;
}

.nav-actions {
  display: flex;
  align-items: center;
  gap: 16px;
}

.nav-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  transition: all 0.3s ease;
}

.nav-btn-ghost {
  width: 40px;
  height: 40px;
  background: transparent;
  color: #8892b0;
  border-radius: 8px;
}

.nav-btn-ghost:hover {
  background: rgba(100, 255, 218, 0.1);
  color: #64ffda;
}

.nav-btn-ghost svg {
  width: 20px;
  height: 20px;
}

.nav-btn-primary {
  padding: 10px 20px;
  background: #64ffda;
  color: #0a192f;
  border-radius: 8px;
}

.nav-btn-primary:hover {
  background: #4cd7b8;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(100, 255, 218, 0.3);
}

/* Hero Section */
.liquid-hero {
  position: relative;
  z-index: 1;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 120px 32px 80px;
}

.hero-content {
  max-width: 800px;
  text-align: center;
}

.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  background: rgba(100, 255, 218, 0.1);
  border: 1px solid rgba(100, 255, 218, 0.2);
  border-radius: 100px;
  font-size: 13px;
  color: #64ffda;
  margin-bottom: 32px;
}

.badge-dot {
  width: 8px;
  height: 8px;
  background: #64ffda;
  border-radius: 50%;
  animation: pulse 2s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.5; transform: scale(1.2); }
}

.hero-title {
  font-size: 56px;
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 24px;
  color: #e6f1ff;
}

.gradient-text {
  display: block;
  background: linear-gradient(135deg, #64ffda 0%, #00e5ff 50%, #8b5cf6 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-subtitle {
  font-size: 18px;
  line-height: 1.6;
  color: #8892b0;
  margin-bottom: 40px;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.hero-actions {
  display: flex;
  gap: 16px;
  justify-content: center;
  margin-bottom: 48px;
}

.btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 14px 28px;
  border-radius: 8px;
  font-size: 15px;
  font-weight: 500;
  text-decoration: none;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
}

.btn svg {
  width: 18px;
  height: 18px;
}

.btn-primary {
  background: #64ffda;
  color: #0a192f;
  border: none;
}

.btn-primary:hover {
  background: #4cd7b8;
  transform: translateY(-3px);
  box-shadow: 0 8px 24px rgba(100, 255, 218, 0.4);
}

.btn-outline {
  background: transparent;
  color: #64ffda;
  border: 1px solid #64ffda;
}

.btn-outline:hover {
  background: rgba(100, 255, 218, 0.1);
  transform: translateY(-3px);
}

.hero-stats {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 32px;
}

.hero-stat {
  text-align: center;
}

.stat-number {
  display: block;
  font-size: 28px;
  font-weight: 700;
  color: #e6f1ff;
  margin-bottom: 4px;
}

.stat-text {
  font-size: 13px;
  color: #8892b0;
}

.stat-divider {
  width: 1px;
  height: 40px;
  background: rgba(136, 146, 176, 0.3);
}

/* Stats Cards Section */
.liquid-stats-section {
  position: relative;
  z-index: 1;
  padding: 0 32px 80px;
}

.stats-container {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
}

.stat-card {
  position: relative;
  padding: 24px;
  background: rgba(17, 34, 64, 0.6);
  backdrop-filter: blur(12px);
  border-radius: 16px;
  border: 1px solid rgba(100, 255, 218, 0.1);
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.stat-card:hover {
  border-color: rgba(100, 255, 218, 0.3);
  transform: translateY(-4px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
}

.stat-card-glow {
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(circle at 30% 30%, rgba(0, 229, 255, 0.08) 0%, transparent 50%);
  opacity: 0;
  transition: opacity 0.4s ease;
}

.stat-card:hover .stat-card-glow {
  opacity: 1;
}

.stat-card-icon {
  width: 48px;
  height: 48px;
  padding: 12px;
  border-radius: 12px;
  margin-bottom: 16px;
}

.stat-card-icon svg {
  width: 100%;
  height: 100%;
}

.icon-blue {
  background: rgba(0, 229, 255, 0.1);
  color: #00e5ff;
}

.icon-green {
  background: rgba(100, 255, 218, 0.1);
  color: #64ffda;
}

.icon-purple {
  background: rgba(139, 92, 246, 0.1);
  color: #8b5cf6;
}

.icon-cyan {
  background: rgba(6, 182, 212, 0.1);
  color: #06b6d4;
}

.stat-card-content {
  margin-bottom: 12px;
}

.stat-card-value {
  display: block;
  font-size: 28px;
  font-weight: 700;
  color: #e6f1ff;
  margin-bottom: 4px;
}

.stat-card-label {
  font-size: 13px;
  color: #8892b0;
}

.stat-card-trend {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 4px 8px;
  border-radius: 6px;
  font-size: 12px;
  font-weight: 600;
}

.stat-card-trend svg {
  width: 14px;
  height: 14px;
}

.trend-up {
  background: rgba(100, 255, 218, 0.1);
  color: #64ffda;
}

/* Features Section */
.liquid-features-section {
  position: relative;
  z-index: 1;
  padding: 80px 32px;
}

.features-header {
  text-align: center;
  margin-bottom: 64px;
}

.features-title {
  font-size: 40px;
  font-weight: 700;
  color: #e6f1ff;
  margin-bottom: 16px;
}

.features-subtitle {
  font-size: 18px;
  color: #8892b0;
}

.features-grid {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
}

.feature-card {
  padding: 32px;
  background: rgba(17, 34, 64, 0.4);
  backdrop-filter: blur(8px);
  border-radius: 16px;
  border: 1px solid rgba(100, 255, 218, 0.1);
  transition: all 0.4s ease;
}

.feature-card:hover {
  border-color: rgba(100, 255, 218, 0.3);
  transform: translateY(-4px);
}

.feature-icon {
  width: 56px;
  height: 56px;
  padding: 14px;
  background: rgba(100, 255, 218, 0.1);
  border-radius: 12px;
  color: #64ffda;
  margin-bottom: 20px;
}

.feature-icon svg {
  width: 100%;
  height: 100%;
}

.feature-title {
  font-size: 20px;
  font-weight: 600;
  color: #e6f1ff;
  margin-bottom: 12px;
}

.feature-desc {
  font-size: 14px;
  line-height: 1.6;
  color: #8892b0;
  margin-bottom: 20px;
}

.feature-link {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  color: #64ffda;
  text-decoration: none;
  font-size: 14px;
  font-weight: 500;
  transition: gap 0.3s ease;
}

.feature-link:hover {
  gap: 10px;
}

.feature-link svg {
  width: 16px;
  height: 16px;
}

/* CTA Section */
.liquid-cta-section {
  position: relative;
  z-index: 1;
  padding: 80px 32px;
  margin: 0 32px;
  background: rgba(17, 34, 64, 0.6);
  backdrop-filter: blur(12px);
  border-radius: 24px;
  border: 1px solid rgba(100, 255, 218, 0.1);
  overflow: hidden;
}

.cta-blob {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  opacity: 0.3;
}

.cta-blob-1 {
  width: 300px;
  height: 300px;
  top: -100px;
  left: -100px;
  background: rgba(100, 255, 218, 0.5);
}

.cta-blob-2 {
  width: 250px;
  height: 250px;
  bottom: -80px;
  right: -80px;
  background: rgba(139, 92, 246, 0.5);
}

.cta-content {
  position: relative;
  max-width: 600px;
  margin: 0 auto;
  text-align: center;
}

.cta-title {
  font-size: 36px;
  font-weight: 700;
  color: #e6f1ff;
  margin-bottom: 16px;
}

.cta-text {
  font-size: 16px;
  color: #8892b0;
  margin-bottom: 32px;
}

.cta-form {
  display: flex;
  gap: 12px;
  margin-bottom: 16px;
}

.cta-input {
  flex: 1;
  padding: 14px 20px;
  background: rgba(10, 25, 47, 0.8);
  border: 1px solid rgba(136, 146, 176, 0.3);
  border-radius: 8px;
  color: #ccd6f6;
  font-size: 14px;
  outline: none;
  transition: border-color 0.3s ease;
}

.cta-input::placeholder {
  color: #8892b0;
}

.cta-input:focus {
  border-color: #64ffda;
}

.cta-button {
  padding: 14px 28px;
  background: #64ffda;
  color: #0a192f;
  border: none;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.cta-button:hover {
  background: #4cd7b8;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(100, 255, 218, 0.3);
}

.cta-note {
  font-size: 12px;
  color: #8892b0;
}

/* Footer */
.liquid-footer {
  position: relative;
  z-index: 1;
  padding: 48px 32px;
  border-top: 1px solid rgba(136, 146, 176, 0.1);
  margin-top: 80px;
}

.footer-container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.footer-brand {
  display: flex;
  align-items: center;
  gap: 8px;
  color: #8892b0;
  font-weight: 600;
}

.footer-brand .brand-icon {
  width: 24px;
  height: 24px;
  color: #64ffda;
}

.footer-links {
  display: flex;
  gap: 32px;
}

.footer-links a {
  color: #8892b0;
  text-decoration: none;
  font-size: 14px;
  transition: color 0.3s ease;
}

.footer-links a:hover {
  color: #64ffda;
}

.footer-copyright {
  font-size: 13px;
  color: #8892b0;
}

/* Responsive Design */
@media (max-width: 1024px) {
  .stats-container {
    grid-template-columns: repeat(2, 1fr);
  }

  .features-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .liquid-navbar {
    padding: 12px 20px;
  }

  .nav-links {
    display: none;
  }

  .hero-title {
    font-size: 36px;
  }

  .hero-subtitle {
    font-size: 16px;
  }

  .hero-actions {
    flex-direction: column;
    align-items: center;
  }

  .hero-stats {
    flex-direction: column;
    gap: 16px;
  }

  .stat-divider {
    width: 40px;
    height: 1px;
  }

  .stats-container {
    grid-template-columns: 1fr;
  }

  .features-grid {
    grid-template-columns: 1fr;
  }

  .cta-form {
    flex-direction: column;
  }

  .footer-container {
    flex-direction: column;
    gap: 24px;
    text-align: center;
  }
}

@media (max-width: 480px) {
  .liquid-hero {
    padding: 100px 20px 60px;
  }

  .hero-title {
    font-size: 28px;
  }

  .features-title {
    font-size: 28px;
  }

  .cta-title {
    font-size: 24px;
  }

  .liquid-cta-section {
    margin: 0 16px;
    padding: 48px 24px;
  }
}
`;
