// Glassmorphism 玻璃态设计 - Demo UI

export const demoHTML = `
  <div class="glass-showcase">
    <div class="glass-card glass-card-main">
      <h3 class="glass-title">Glassmorphism</h3>
      <p class="glass-subtitle">玻璃态设计 / Glass Effect</p>
      <div class="glass-content">
        <div class="glass-item">
          <span class="glass-label">透明度</span>
          <span class="glass-value">10%</span>
        </div>
        <div class="glass-item">
          <span class="glass-label">模糊</span>
          <span class="glass-value">20px</span>
        </div>
        <div class="glass-item">
          <span class="glass-label">边框</span>
          <span class="glass-value">1px</span>
        </div>
      </div>
      <button class="glass-button">Glass Button</button>
    </div>
  </div>
`;

export const customStyles = `
  .glass-showcase {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    padding: 48px;
    min-height: 400px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  }

  .glass-card {
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border-radius: 16px;
    border: 1px solid rgba(255, 255, 255, 0.2);
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
    padding: 32px;
    max-width: 400px;
    width: 100%;
    color: white;
    transition: all 0.3s ease;
  }

  .glass-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 48px rgba(0, 0, 0, 0.15);
  }

  .glass-title {
    margin: 0 0 8px 0;
    font-size: 28px;
    font-weight: 700;
    letter-spacing: -0.02em;
  }

  .glass-subtitle {
    margin: 0 0 24px 0;
    font-size: 14px;
    opacity: 0.9;
  }

  .glass-content {
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin-bottom: 24px;
  }

  .glass-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px 16px;
    background: rgba(255, 255, 255, 0.05);
    border-radius: 8px;
    border: 1px solid rgba(255, 255, 255, 0.1);
  }

  .glass-label {
    font-size: 14px;
    opacity: 0.8;
  }

  .glass-value {
    font-weight: 600;
    font-size: 16px;
  }

  .glass-button {
    width: 100%;
    padding: 12px 24px;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 8px;
    color: white;
    font-size: 16px;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.3s ease;
  }

  .glass-button:hover {
    background: rgba(255, 255, 255, 0.2);
    box-shadow: 0 4px 16px rgba(255, 255, 255, 0.2);
  }

  .glass-button:active {
    transform: scale(0.98);
  }

  @media (max-width: 768px) {
    .glass-showcase {
      padding: 24px;
    }

    .glass-card {
      padding: 24px;
    }

    .glass-title {
      font-size: 24px;
    }
  }
`;
