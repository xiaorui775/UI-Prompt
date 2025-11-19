// Glassmorphism 玻璃态设计 - Demo UI (技術參數對比版本)

export const demoHTML = `
  <div class="glass-showcase">
    <div class="glass-header">
      <h3 class="glass-main-title">Glassmorphism</h3>
      <p class="glass-subtitle">玻璃态设计效果对比 / Glass Effect Comparison</p>
    </div>

    <div class="glass-grid">
      <!-- 第一行：Alpha 0.1 -->
      <div class="glass-param-card" data-blur="10" data-alpha="0.1">
        <div class="glass-label-top">Blur 10px</div>
        <div class="glass-surface glass-blur-10 glass-alpha-10">
          <div class="glass-icon">🔍</div>
        </div>
        <div class="glass-label-bottom">Alpha 0.1</div>
      </div>

      <div class="glass-param-card" data-blur="15" data-alpha="0.1">
        <div class="glass-label-top">Blur 15px</div>
        <div class="glass-surface glass-blur-15 glass-alpha-10">
          <div class="glass-icon">✨</div>
        </div>
        <div class="glass-label-bottom">Alpha 0.1</div>
      </div>

      <div class="glass-param-card" data-blur="20" data-alpha="0.1">
        <div class="glass-label-top">Blur 20px</div>
        <div class="glass-surface glass-blur-20 glass-alpha-10">
          <div class="glass-icon">💎</div>
        </div>
        <div class="glass-label-bottom">Alpha 0.1</div>
      </div>

      <!-- 第二行：Alpha 0.15 -->
      <div class="glass-param-card" data-blur="10" data-alpha="0.15">
        <div class="glass-label-top">Blur 10px</div>
        <div class="glass-surface glass-blur-10 glass-alpha-15">
          <div class="glass-icon">⚡</div>
        </div>
        <div class="glass-label-bottom">Alpha 0.15</div>
      </div>

      <div class="glass-param-card" data-blur="15" data-alpha="0.15">
        <div class="glass-label-top">Blur 15px</div>
        <div class="glass-surface glass-blur-15 glass-alpha-15">
          <div class="glass-icon">🌟</div>
        </div>
        <div class="glass-label-bottom">Alpha 0.15</div>
      </div>

      <div class="glass-param-card" data-blur="20" data-alpha="0.15">
        <div class="glass-label-top">Blur 20px</div>
        <div class="glass-surface glass-blur-20 glass-alpha-15">
          <div class="glass-icon">✨</div>
        </div>
        <div class="glass-label-bottom">Alpha 0.15</div>
      </div>
    </div>

    <div class="glass-footer">
      <div class="glass-note">
        <span class="glass-note-icon">💡</span>
        <span class="glass-note-text">Blur 值越高 = 玻璃感越強 | Alpha 值越高 = 不透明度越高</span>
      </div>
    </div>
  </div>
`;

export const customStyles = `
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  .glass-showcase {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    padding: 32px 24px;
    min-height: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    gap: 24px;
  }

  /* Header */
  .glass-header {
    text-align: center;
    color: white;
    margin-bottom: 8px;
  }

  .glass-main-title {
    font-size: 32px;
    font-weight: 700;
    letter-spacing: -0.02em;
    margin-bottom: 8px;
  }

  .glass-subtitle {
    font-size: 14px;
    opacity: 0.9;
    font-weight: 400;
  }

  /* Grid Layout */
  .glass-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;
    max-width: 800px;
    width: 100%;
  }

  /* Parameter Card */
  .glass-param-card {
    display: flex;
    flex-direction: column;
    gap: 8px;
    transition: transform 0.3s ease;
  }

  .glass-param-card:hover {
    transform: translateY(-4px);
  }

  /* Labels */
  .glass-label-top,
  .glass-label-bottom {
    text-align: center;
    color: white;
    font-size: 12px;
    font-weight: 500;
    padding: 4px 8px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 6px;
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
    border: 1px solid rgba(255, 255, 255, 0.15);
  }

  .glass-label-top {
    letter-spacing: 0.5px;
  }

  .glass-label-bottom {
    opacity: 0.9;
  }

  /* Glass Surface */
  .glass-surface {
    width: 100%;
    height: 120px;
    border-radius: 12px;
    border: 1px solid rgba(255, 255, 255, 0.2);
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
  }

  .glass-surface::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.2),
      transparent
    );
    transition: left 0.6s ease;
  }

  .glass-param-card:hover .glass-surface::before {
    left: 100%;
  }

  .glass-param-card:hover .glass-surface {
    box-shadow: 0 12px 48px rgba(0, 0, 0, 0.15);
    border-color: rgba(255, 255, 255, 0.3);
  }

  /* Blur Variants */
  .glass-blur-10 {
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
  }

  .glass-blur-15 {
    backdrop-filter: blur(15px);
    -webkit-backdrop-filter: blur(15px);
  }

  .glass-blur-20 {
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
  }

  /* Alpha Variants */
  .glass-alpha-10 {
    background: rgba(255, 255, 255, 0.1);
  }

  .glass-alpha-15 {
    background: rgba(255, 255, 255, 0.15);
  }

  /* Icon */
  .glass-icon {
    font-size: 36px;
    filter: drop-shadow(0 2px 8px rgba(0, 0, 0, 0.2));
    animation: float 3s ease-in-out infinite;
  }

  @keyframes float {
    0%, 100% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-8px);
    }
  }

  /* Footer Note */
  .glass-footer {
    width: 100%;
    max-width: 800px;
  }

  .glass-note {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    padding: 12px 16px;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    border-radius: 8px;
    border: 1px solid rgba(255, 255, 255, 0.15);
    color: white;
  }

  .glass-note-icon {
    font-size: 18px;
  }

  .glass-note-text {
    font-size: 13px;
    opacity: 0.95;
    font-weight: 400;
  }

  /* Responsive Design */
  @media (max-width: 768px) {
    .glass-showcase {
      padding: 24px 16px;
      min-height: 600px;
    }

    .glass-main-title {
      font-size: 24px;
    }

    .glass-subtitle {
      font-size: 12px;
    }

    .glass-grid {
      grid-template-columns: repeat(2, 1fr);
      gap: 12px;
    }

    .glass-surface {
      height: 100px;
    }

    .glass-icon {
      font-size: 28px;
    }

    .glass-note-text {
      font-size: 11px;
    }
  }

  @media (max-width: 480px) {
    .glass-grid {
      grid-template-columns: repeat(2, 1fr);
    }

    .glass-surface {
      height: 80px;
    }

    .glass-label-top,
    .glass-label-bottom {
      font-size: 10px;
      padding: 3px 6px;
    }

    .glass-note {
      flex-direction: column;
      text-align: center;
      gap: 4px;
    }
  }
`;
