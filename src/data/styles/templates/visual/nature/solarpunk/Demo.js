// Solarpunk Eco-Tech Demo
// 太阳庞克 - 绿能未来生态科技

export const demoHTML = `
  <div class="solarpunk-mini">
    <div class="mini-sun"></div>
    <div class="mini-leaf"></div>

    <div class="mini-header">
      <svg width="28" height="28" viewBox="0 0 40 40" fill="none">
        <circle cx="20" cy="20" r="12" stroke="currentColor" stroke-width="2" class="text-yellow-600"/>
        <path d="M20 8 L22 12 L26 12 L23 15 L24 19 L20 16 L16 19 L17 15 L14 12 L18 12 Z" fill="currentColor" class="text-yellow-600"/>
        <circle cx="20" cy="20" r="6" fill="none" stroke="currentColor" stroke-width="1.5" class="text-green-700"/>
      </svg>
      <h3 class="mini-title">EcoNet</h3>
    </div>

    <div class="mini-stats">
      <div class="mini-stat">
        <div class="stat-emoji">☀️</div>
        <div class="stat-num">2.8k</div>
        <div class="stat-label">kWh</div>
      </div>
      <div class="mini-stat">
        <div class="stat-emoji">🌱</div>
        <div class="stat-num">847</div>
        <div class="stat-label">Trees</div>
      </div>
    </div>

    <button class="mini-btn">Connect</button>
  </div>
`;

export const customStyles = `
  .solarpunk-mini {
    position: relative;
    width: 100%;
    height: 100%;
    padding: 1.5rem;
    background: linear-gradient(180deg, #f5faf0 0%, #e8f3d8 100%);
    border-radius: 0.5rem;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
  }

  .mini-sun {
    position: absolute;
    width: 80px;
    height: 80px;
    top: -20px;
    right: -20px;
    background: radial-gradient(circle at 30% 30%, rgba(212, 175, 55, 0.3), rgba(212, 175, 55, 0.05));
    border-radius: 50%;
    filter: blur(15px);
    animation: mini-sun-glow 4s ease-in-out infinite;
  }

  @keyframes mini-sun-glow {
    0%, 100% { transform: scale(1); opacity: 0.5; }
    50% { transform: scale(1.1); opacity: 0.7; }
  }

  .mini-leaf {
    position: absolute;
    width: 40px;
    height: 40px;
    bottom: 10%;
    left: 10%;
    opacity: 0.15;
    animation: mini-float 8s ease-in-out infinite;
  }

  @keyframes mini-float {
    0%, 100% { transform: translate(0, 0) rotate(0deg); }
    50% { transform: translate(10px, -10px) rotate(15deg); }
  }

  .mini-header {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    z-index: 1;
  }

  .mini-title {
    font-size: 1.25rem;
    font-weight: 700;
    margin: 0;
    background: linear-gradient(135deg, #2d5016, #d4af37);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .mini-stats {
    display: flex;
    gap: 0.75rem;
    z-index: 1;
  }

  .mini-stat {
    background: white;
    border: 2px solid #e8f3d8;
    border-radius: 0.5rem;
    padding: 0.75rem;
    text-align: center;
    min-width: 70px;
  }

  .stat-emoji {
    font-size: 1.5rem;
    margin-bottom: 0.25rem;
  }

  .stat-num {
    font-size: 1rem;
    font-weight: 700;
    color: #2d5016;
  }

  .stat-label {
    font-size: 0.625rem;
    color: #2d5016;
  }

  .mini-btn {
    padding: 0.5rem 1.25rem;
    background: linear-gradient(135deg, #2d5016, #d4af37);
    color: white;
    border: none;
    border-radius: 0.375rem;
    font-weight: 600;
    font-size: 0.875rem;
    z-index: 1;
    cursor: pointer;
  }
`;
