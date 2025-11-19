/**
 * Ambient Light - Small Card Demo
 * Simplified version with 2 warm sunset orbs
 * Meditation & Wellness Theme
 */

export const demoHTML = `
<div class="ambient-demo">
  <div class="ambient-scene">
    <div class="ambient-card">
      <div class="ambient-icon">🧘</div>
      <h4>ZenFlow</h4>
      <p>Find Inner Peace</p>
    </div>
    <div class="ambient-orb ambient-orb-1"></div>
    <div class="ambient-orb ambient-orb-2"></div>
  </div>
</div>
`;

export const customStyles = `
.ambient-demo {
  background: radial-gradient(circle at 50% 50%, #2a1a1f 0%, #1a0f14 100%);
  padding: 64px 32px;
  min-height: 450px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
}

.ambient-scene {
  position: relative;
  width: 100%;
  max-width: 500px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.ambient-card {
  background: rgba(255, 255, 255, 0.04);
  backdrop-filter: blur(25px);
  -webkit-backdrop-filter: blur(25px);
  border: 1px solid rgba(255, 159, 243, 0.15);
  border-radius: 20px;
  padding: 40px 32px;
  text-align: center;
  color: white;
  z-index: 10;
  position: relative;
  box-shadow: 0 8px 32px rgba(255, 107, 107, 0.15);
}

.ambient-icon {
  font-size: 48px;
  margin-bottom: 16px;
}

.ambient-card h4 {
  font-size: 32px;
  font-weight: 800;
  margin: 0 0 8px 0;
  background: linear-gradient(135deg, #ffffff 0%, #feca57 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.ambient-card p {
  font-size: 14px;
  margin: 0;
  color: rgba(255, 159, 243, 0.9);
  font-weight: 500;
}

.ambient-orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(65px);
  opacity: 0.7;
  will-change: transform;
}

/* Orb 1: Coral Red (Top Left) */
.ambient-orb-1 {
  width: 280px;
  height: 280px;
  background: radial-gradient(
    circle at 30% 30%,
    rgba(255, 107, 107, 0.75) 0%,
    rgba(255, 107, 107, 0.3) 40%,
    transparent 70%
  );
  top: 5%;
  left: 5%;
  animation: ambientFloat1 10s ease-in-out infinite;
}

/* Orb 2: Golden Yellow (Bottom Right) */
.ambient-orb-2 {
  width: 240px;
  height: 240px;
  background: radial-gradient(
    circle at 30% 30%,
    rgba(254, 202, 87, 0.7) 0%,
    rgba(254, 202, 87, 0.25) 40%,
    transparent 70%
  );
  bottom: 10%;
  right: 10%;
  animation: ambientFloat2 12s ease-in-out infinite;
}

@keyframes ambientFloat1 {
  0%, 100% {
    transform: translate(0, 0) scale(1);
    opacity: 0.7;
  }
  50% {
    transform: translate(25px, -20px) scale(1.05);
    opacity: 0.8;
  }
}

@keyframes ambientFloat2 {
  0%, 100% {
    transform: translate(0, 0) scale(1);
    opacity: 0.7;
  }
  50% {
    transform: translate(-20px, 15px) scale(1.06);
    opacity: 0.8;
  }
}

/* Accessibility: Respect reduced motion preference */
@media (prefers-reduced-motion: reduce) {
  .ambient-orb {
    animation: none !important;
  }
}

@media (max-width: 768px) {
  .ambient-demo {
    padding: 48px 24px;
    min-height: 380px;
  }

  .ambient-scene {
    height: 300px;
  }

  .ambient-card {
    padding: 32px 24px;
  }

  .ambient-icon {
    font-size: 40px;
  }

  .ambient-card h4 {
    font-size: 26px;
  }

  .ambient-orb-1 {
    width: 200px;
    height: 200px;
  }

  .ambient-orb-2 {
    width: 180px;
    height: 180px;
  }
}
`;
