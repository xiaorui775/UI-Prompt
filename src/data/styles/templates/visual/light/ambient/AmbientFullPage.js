/**
 * Ambient Light - Full Page Preview
 * Meditation Dashboard 風格
 * 配色：Purple-Blue Spectrum (#667eea, #764ba2, #4facfe)
 * 光球數量：5 個（平衡設計）
 */

export const fullPageHTML = `
  <!-- Ambient Light Background with 5 Orbs -->
  <div class="ambient-orb ambient-orb-1"></div>
  <div class="ambient-orb ambient-orb-2"></div>
  <div class="ambient-orb ambient-orb-3"></div>
  <div class="ambient-orb ambient-orb-4"></div>
  <div class="ambient-orb ambient-orb-5"></div>

  <!-- Header Navigation -->
  <header class="ambient-header">
    <div class="ambient-container">
      <div class="ambient-nav">
        <div class="ambient-logo">✨ Ambient</div>
        <nav class="ambient-nav-links">
          <a href="javascript:void(0)" class="ambient-nav-link">Features</a>
          <a href="javascript:void(0)" class="ambient-nav-link">Showcase</a>
          <a href="javascript:void(0)" class="ambient-nav-link">About</a>
        </nav>
        <div class="ambient-nav-actions">
          <button class="ambient-lang-switch">EN / 中</button>
          <button class="ambient-cta-btn">Get Started</button>
        </div>
      </div>
    </div>
  </header>

  <!-- Hero Section -->
  <section class="ambient-hero">
    <div class="ambient-container">
      <div class="ambient-hero-content">
        <h1 class="ambient-hero-title">Ambient Light Design</h1>
        <p class="ambient-hero-subtitle">環境光氛圍設計 / Atmosphere Through Light</p>
        <p class="ambient-hero-desc">
          Create calming, immersive interfaces through soft light halos and gentle gradients.
          營造平靜沉浸式介面，透過柔和光暈與溫柔漸層。
        </p>
        <div class="ambient-hero-buttons">
          <button class="ambient-primary-btn">Explore Gallery</button>
          <button class="ambient-secondary-btn">Documentation</button>
        </div>
      </div>
    </div>
  </section>

  <!-- Stats Grid -->
  <section class="ambient-stats">
    <div class="ambient-container">
      <div class="ambient-stats-grid">
        <div class="ambient-stat-card">
          <div class="ambient-stat-icon">👥</div>
          <div class="ambient-stat-value">12.5K</div>
          <div class="ambient-stat-label">Active Users</div>
        </div>
        <div class="ambient-stat-card">
          <div class="ambient-stat-icon">⚡</div>
          <div class="ambient-stat-value">98ms</div>
          <div class="ambient-stat-label">Response Time</div>
        </div>
        <div class="ambient-stat-card">
          <div class="ambient-stat-icon">⭐</div>
          <div class="ambient-stat-value">99.2%</div>
          <div class="ambient-stat-label">Satisfaction</div>
        </div>
        <div class="ambient-stat-card">
          <div class="ambient-stat-icon">🚀</div>
          <div class="ambient-stat-value">99.9%</div>
          <div class="ambient-stat-label">Uptime</div>
        </div>
      </div>
    </div>
  </section>

  <!-- Feature Showcase -->
  <section class="ambient-features">
    <div class="ambient-container">
      <h2 class="ambient-section-title">Core Features</h2>
      <div class="ambient-feature-grid">
        <div class="ambient-feature-card">
          <div class="ambient-feature-icon">🌈</div>
          <h3 class="ambient-feature-title">Glassmorphism</h3>
          <p class="ambient-feature-desc">
            Translucent cards with backdrop blur effects create depth and elegance.
          </p>
        </div>
        <div class="ambient-feature-card">
          <div class="ambient-feature-icon">✨</div>
          <h3 class="ambient-feature-title">Gentle Animations</h3>
          <p class="ambient-feature-desc">
            Slow-paced floating animations (10-16s) ensure a calming experience.
          </p>
        </div>
        <div class="ambient-feature-card">
          <div class="ambient-feature-icon">🎨</div>
          <h3 class="ambient-feature-title">Calming Atmosphere</h3>
          <p class="ambient-feature-desc">
            Purple-blue spectrum with soft glows creates therapeutic ambiance.
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- Testimonial -->
  <section class="ambient-testimonial">
    <div class="ambient-container">
      <div class="ambient-quote-card">
        <div class="ambient-quote-icon">💬</div>
        <p class="ambient-quote-text">
          "Ambient Light design transformed our meditation app. Users report feeling more relaxed and focused."
        </p>
        <div class="ambient-quote-author">
          <div class="ambient-author-avatar">👤</div>
          <div class="ambient-author-info">
            <div class="ambient-author-name">Sarah Chen</div>
            <div class="ambient-author-title">Product Designer, ZenFlow</div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Final CTA -->
  <section class="ambient-final-cta">
    <div class="ambient-container">
      <div class="ambient-cta-content">
        <h2 class="ambient-cta-title">Start Your Journey</h2>
        <p class="ambient-cta-subtitle">
          Experience the power of ambient light in your next project
        </p>
        <div class="ambient-cta-buttons">
          <button class="ambient-cta-primary">Get Started Free</button>
          <button class="ambient-cta-secondary">Learn More</button>
        </div>
      </div>
    </div>
  </section>
`;

export const fullPageStyles = `
  /* ==================== BASE STYLES ==================== */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
    background: radial-gradient(circle at 50% 50%, #1a1a2e 0%, #0f0f1e 100%);
    color: #ffffff;
    min-height: 100vh;
    position: relative;
    overflow-x: hidden;
  }

  /* ==================== AMBIENT LIGHT ORBS ==================== */
  .ambient-orb {
    position: fixed;
    border-radius: 50%;
    filter: blur(70px);
    pointer-events: none;
    z-index: 1;
  }

  /* Orb 1: Large Purple-Blue (Left Top) */
  .ambient-orb-1 {
    width: 500px;
    height: 500px;
    background: radial-gradient(
      circle at 30% 30%,
      rgba(102, 126, 234, 0.7) 0%,
      rgba(102, 126, 234, 0.25) 40%,
      transparent 70%
    );
    top: -100px;
    left: -100px;
    opacity: 0.75;
    animation: ambientFloat1 10s ease-in-out infinite;
  }

  /* Orb 2: Medium Deep Purple (Right Bottom) */
  .ambient-orb-2 {
    width: 400px;
    height: 400px;
    background: radial-gradient(
      circle at 30% 30%,
      rgba(118, 75, 162, 0.6) 0%,
      rgba(118, 75, 162, 0.2) 40%,
      transparent 70%
    );
    bottom: -80px;
    right: -80px;
    opacity: 0.7;
    animation: ambientFloat2 13s ease-in-out infinite;
  }

  /* Orb 3: Medium Cyan Blue (Left Bottom) */
  .ambient-orb-3 {
    width: 400px;
    height: 400px;
    background: radial-gradient(
      circle at 30% 30%,
      rgba(79, 172, 254, 0.5) 0%,
      rgba(79, 172, 254, 0.15) 40%,
      transparent 70%
    );
    bottom: 100px;
    left: 50px;
    opacity: 0.65;
    animation: ambientFloat3 16s ease-in-out infinite;
  }

  /* Orb 4: Small Pink Accent (Right Top) */
  .ambient-orb-4 {
    width: 300px;
    height: 300px;
    background: radial-gradient(
      circle at 30% 30%,
      rgba(240, 147, 251, 0.4) 0%,
      rgba(240, 147, 251, 0.1) 40%,
      transparent 70%
    );
    top: 150px;
    right: 100px;
    opacity: 0.6;
    animation: ambientFloat4 11s ease-in-out infinite;
  }

  /* Orb 5: Small Cyan (Center Floating) */
  .ambient-orb-5 {
    width: 250px;
    height: 250px;
    background: radial-gradient(
      circle at 30% 30%,
      rgba(0, 242, 254, 0.35) 0%,
      rgba(0, 242, 254, 0.08) 40%,
      transparent 70%
    );
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 0.5;
    animation: ambientFloat5 14s ease-in-out infinite;
  }

  /* Floating Animations */
  @keyframes ambientFloat1 {
    0%, 100% {
      transform: translate(0, 0) scale(1);
      opacity: 0.75;
    }
    50% {
      transform: translate(40px, -30px) scale(1.05);
      opacity: 0.85;
    }
  }

  @keyframes ambientFloat2 {
    0%, 100% {
      transform: translate(0, 0) scale(1);
      opacity: 0.7;
    }
    50% {
      transform: translate(-35px, 25px) scale(1.08);
      opacity: 0.8;
    }
  }

  @keyframes ambientFloat3 {
    0%, 100% {
      transform: translate(0, 0) scale(1);
      opacity: 0.65;
    }
    50% {
      transform: translate(30px, -40px) scale(1.06);
      opacity: 0.75;
    }
  }

  @keyframes ambientFloat4 {
    0%, 100% {
      transform: translate(0, 0) scale(1);
      opacity: 0.6;
    }
    50% {
      transform: translate(-25px, 35px) scale(1.07);
      opacity: 0.7;
    }
  }

  @keyframes ambientFloat5 {
    0%, 100% {
      transform: translate(-50%, -50%) scale(1);
      opacity: 0.5;
    }
    50% {
      transform: translate(-50%, -50%) translate(20px, -20px) scale(1.1);
      opacity: 0.65;
    }
  }

  /* ==================== CONTAINER ==================== */
  .ambient-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 32px;
    position: relative;
    z-index: 10;
  }

  /* ==================== HEADER ==================== */
  .ambient-header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    padding: 24px 0;
    background: rgba(26, 26, 46, 0.3);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border-bottom: 1px solid rgba(255, 255, 255, 0.08);
    z-index: 100;
  }

  .ambient-nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .ambient-logo {
    font-size: 24px;
    font-weight: 800;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .ambient-nav-links {
    display: flex;
    gap: 32px;
  }

  .ambient-nav-link {
    color: rgba(255, 255, 255, 0.8);
    text-decoration: none;
    font-weight: 500;
    transition: color 0.3s ease;
  }

  .ambient-nav-link:hover {
    color: #ffffff;
  }

  .ambient-nav-actions {
    display: flex;
    align-items: center;
    gap: 16px;
  }

  .ambient-lang-switch {
    background: transparent;
    border: 1px solid rgba(255, 255, 255, 0.2);
    color: rgba(255, 255, 255, 0.7);
    padding: 8px 16px;
    border-radius: 8px;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
  }

  .ambient-lang-switch:hover {
    background: rgba(255, 255, 255, 0.05);
    color: #ffffff;
  }

  .ambient-cta-btn {
    background: rgba(102, 126, 234, 0.2);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(102, 126, 234, 0.4);
    color: #ffffff;
    padding: 10px 24px;
    border-radius: 10px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
  }

  .ambient-cta-btn:hover {
    background: rgba(102, 126, 234, 0.3);
    box-shadow: 0 0 30px rgba(102, 126, 234, 0.3);
    transform: translateY(-2px);
  }

  /* ==================== HERO SECTION ==================== */
  .ambient-hero {
    padding: 180px 0 100px;
    text-align: center;
  }

  .ambient-hero-content {
    background: rgba(255, 255, 255, 0.02);
    backdrop-filter: blur(30px);
    -webkit-backdrop-filter: blur(30px);
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 24px;
    padding: 80px 64px;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  }

  .ambient-hero-title {
    font-size: 64px;
    font-weight: 900;
    margin-bottom: 16px;
    background: linear-gradient(135deg, #ffffff 0%, #667eea 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-shadow: 0 4px 20px rgba(102, 126, 234, 0.2);
  }

  .ambient-hero-subtitle {
    font-size: 24px;
    font-weight: 600;
    color: rgba(255, 255, 255, 0.6);
    margin-bottom: 24px;
  }

  .ambient-hero-desc {
    font-size: 18px;
    line-height: 1.6;
    color: rgba(255, 255, 255, 0.7);
    max-width: 700px;
    margin: 0 auto 48px;
  }

  .ambient-hero-buttons {
    display: flex;
    gap: 16px;
    justify-content: center;
  }

  .ambient-primary-btn {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    border: none;
    color: #ffffff;
    padding: 16px 40px;
    border-radius: 12px;
    font-size: 16px;
    font-weight: 700;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 4px 20px rgba(102, 126, 234, 0.3);
  }

  .ambient-primary-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 30px rgba(102, 126, 234, 0.5);
  }

  .ambient-secondary-btn {
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    color: #ffffff;
    padding: 16px 40px;
    border-radius: 12px;
    font-size: 16px;
    font-weight: 700;
    cursor: pointer;
    transition: all 0.3s ease;
  }

  .ambient-secondary-btn:hover {
    background: rgba(255, 255, 255, 0.1);
    transform: translateY(-2px);
  }

  /* ==================== STATS SECTION ==================== */
  .ambient-stats {
    padding: 80px 0;
  }

  .ambient-stats-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
  }

  .ambient-stat-card {
    background: rgba(255, 255, 255, 0.03);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 20px;
    padding: 40px 32px;
    text-align: center;
    transition: all 0.3s ease;
  }

  .ambient-stat-card:hover {
    background: rgba(255, 255, 255, 0.05);
    transform: translateY(-4px);
    box-shadow: 0 12px 40px rgba(102, 126, 234, 0.2);
  }

  .ambient-stat-icon {
    font-size: 48px;
    margin-bottom: 16px;
  }

  .ambient-stat-value {
    font-size: 48px;
    font-weight: 900;
    color: #667eea;
    margin-bottom: 8px;
  }

  .ambient-stat-label {
    font-size: 16px;
    color: rgba(255, 255, 255, 0.6);
    font-weight: 500;
  }

  /* ==================== FEATURES SECTION ==================== */
  .ambient-features {
    padding: 80px 0;
  }

  .ambient-section-title {
    font-size: 42px;
    font-weight: 800;
    text-align: center;
    margin-bottom: 64px;
    background: linear-gradient(135deg, #ffffff 0%, #667eea 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .ambient-feature-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 32px;
  }

  .ambient-feature-card {
    background: rgba(255, 255, 255, 0.02);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 20px;
    padding: 48px 32px;
    text-align: center;
    transition: all 0.3s ease;
  }

  .ambient-feature-card:hover {
    background: rgba(255, 255, 255, 0.04);
    transform: translateY(-8px);
    box-shadow: 0 16px 48px rgba(102, 126, 234, 0.25);
  }

  .ambient-feature-icon {
    font-size: 56px;
    margin-bottom: 24px;
  }

  .ambient-feature-title {
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 16px;
    color: #ffffff;
  }

  .ambient-feature-desc {
    font-size: 16px;
    line-height: 1.6;
    color: rgba(255, 255, 255, 0.7);
  }

  /* ==================== TESTIMONIAL SECTION ==================== */
  .ambient-testimonial {
    padding: 80px 0;
  }

  .ambient-quote-card {
    background: rgba(255, 255, 255, 0.03);
    backdrop-filter: blur(30px);
    -webkit-backdrop-filter: blur(30px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 24px;
    padding: 64px 48px;
    max-width: 900px;
    margin: 0 auto;
    text-align: center;
  }

  .ambient-quote-icon {
    font-size: 48px;
    margin-bottom: 24px;
  }

  .ambient-quote-text {
    font-size: 24px;
    line-height: 1.6;
    color: rgba(255, 255, 255, 0.9);
    font-style: italic;
    margin-bottom: 32px;
  }

  .ambient-quote-author {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 16px;
  }

  .ambient-author-avatar {
    width: 56px;
    height: 56px;
    background: rgba(102, 126, 234, 0.2);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 28px;
  }

  .ambient-author-info {
    text-align: left;
  }

  .ambient-author-name {
    font-size: 18px;
    font-weight: 700;
    color: #ffffff;
  }

  .ambient-author-title {
    font-size: 14px;
    color: rgba(255, 255, 255, 0.6);
  }

  /* ==================== FINAL CTA SECTION ==================== */
  .ambient-final-cta {
    padding: 100px 0;
  }

  .ambient-cta-content {
    background: rgba(255, 255, 255, 0.02);
    backdrop-filter: blur(30px);
    -webkit-backdrop-filter: blur(30px);
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 24px;
    padding: 80px 64px;
    text-align: center;
  }

  .ambient-cta-title {
    font-size: 48px;
    font-weight: 900;
    margin-bottom: 16px;
    background: linear-gradient(135deg, #ffffff 0%, #667eea 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .ambient-cta-subtitle {
    font-size: 20px;
    color: rgba(255, 255, 255, 0.7);
    margin-bottom: 48px;
  }

  .ambient-cta-buttons {
    display: flex;
    gap: 16px;
    justify-content: center;
  }

  .ambient-cta-primary {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    border: none;
    color: #ffffff;
    padding: 18px 48px;
    border-radius: 12px;
    font-size: 18px;
    font-weight: 700;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 4px 20px rgba(102, 126, 234, 0.4);
  }

  .ambient-cta-primary:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 40px rgba(102, 126, 234, 0.6);
  }

  .ambient-cta-secondary {
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    color: #ffffff;
    padding: 18px 48px;
    border-radius: 12px;
    font-size: 18px;
    font-weight: 700;
    cursor: pointer;
    transition: all 0.3s ease;
  }

  .ambient-cta-secondary:hover {
    background: rgba(255, 255, 255, 0.1);
    transform: translateY(-2px);
  }

  /* ==================== RESPONSIVE ==================== */
  @media (max-width: 1024px) {
    .ambient-feature-grid {
      grid-template-columns: repeat(1, 1fr);
    }

    .ambient-stats-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: 768px) {
    .ambient-hero-title {
      font-size: 42px;
    }

    .ambient-stats-grid {
      grid-template-columns: 1fr;
    }

    .ambient-nav-links {
      display: none;
    }

    .ambient-hero-content {
      padding: 48px 32px;
    }

    .ambient-cta-content {
      padding: 48px 32px;
    }
  }
`;
