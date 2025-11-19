export const demoHTML = `
<div class="ambient-demo">
  <div class="ambient-scene">
    <div class="ambient-card">
      <h4>Ambient Light</h4>
      <p>環境光氛圍</p>
    </div>
    <div class="ambient-orb ambient-orb-1"></div>
    <div class="ambient-orb ambient-orb-2"></div>
    <div class="ambient-orb ambient-orb-3"></div>
  </div>
  <div class="ambient-info">
    <h3>Ambient Lighting</h3>
    <p>环境光 / Atmosphere Glow</p>
  </div>
</div>
`;

export const customStyles = `
.ambient-demo {
  background: radial-gradient(circle at 50% 50%, #1a1a2e 0%, #0f0f1e 100%);
  padding: 64px 32px;
  min-height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 48px;
  position: relative;
  overflow: hidden;
}

.ambient-scene {
  position: relative;
  width: 100%;
  max-width: 600px;
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.ambient-card {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 48px 32px;
  text-align: center;
  color: white;
  z-index: 10;
  position: relative;
}

.ambient-card h4 {
  font-size: 28px;
  font-weight: 700;
  margin: 0 0 8px 0;
}

.ambient-card p {
  font-size: 14px;
  margin: 0;
  opacity: 0.9;
}

.ambient-orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(60px);
  opacity: 0.6;
  animation: ambientFloat 8s ease-in-out infinite;
}

.ambient-orb-1 {
  width: 300px;
  height: 300px;
  background: radial-gradient(circle, #667eea 0%, transparent 70%);
  top: 10%;
  left: 10%;
  animation-delay: 0s;
}

.ambient-orb-2 {
  width: 250px;
  height: 250px;
  background: radial-gradient(circle, #f093fb 0%, transparent 70%);
  bottom: 20%;
  right: 15%;
  animation-delay: 2s;
}

.ambient-orb-3 {
  width: 200px;
  height: 200px;
  background: radial-gradient(circle, #4facfe 0%, transparent 70%);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation-delay: 4s;
}

.ambient-info {
  text-align: center;
  color: white;
  z-index: 10;
}

.ambient-info h3 {
  font-size: 28px;
  font-weight: 700;
  margin: 0 0 8px 0;
}

.ambient-info p {
  font-size: 14px;
  margin: 0;
  opacity: 0.9;
}

@keyframes ambientFloat {
  0%, 100% {
    transform: translate(0, 0);
    opacity: 0.6;
  }
  50% {
    transform: translate(30px, -30px);
    opacity: 0.8;
  }
}

@media (max-width: 768px) {
  .ambient-scene { height: 300px; }
  .ambient-orb-1 { width: 200px; height: 200px; }
  .ambient-orb-2 { width: 180px; height: 180px; }
  .ambient-orb-3 { width: 150px; height: 150px; }
}
`;
