export const demoHTML = `
<div class="grain-demo">
  <div class="grain-container">
    <div class="grain-box grain-fine">
      <h4>Fine Grain</h4>
      <p>细腻颗粒</p>
    </div>
    <div class="grain-box grain-coarse">
      <h4>Coarse Grain</h4>
      <p>粗糙颗粒</p>
    </div>
  </div>
  <div class="grain-info">
    <h3>Grain Texture</h3>
    <p>颗粒质感 / Rough Surface</p>
  </div>
</div>
`;

export const customStyles = `
.grain-demo {
  background: linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%);
  padding: 64px 32px;
  min-height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 48px;
}

.grain-container {
  display: flex;
  gap: 40px;
  flex-wrap: wrap;
  justify-content: center;
}

.grain-box {
  width: 220px;
  height: 220px;
  border-radius: 20px;
  padding: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: relative;
  overflow: hidden;
  transition: transform 0.3s ease;
}

.grain-box:hover {
  transform: translateY(-8px);
}

/* 細顆粒紋理 */
.grain-fine {
  background: #e0c3fc;
  background-image: url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100' height='100' filter='url(%23noise)' opacity='0.15'/%3E%3C/svg%3E");
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
}

/* 粗顆粒紋理 */
.grain-coarse {
  background: #fbc2eb;
  background-image: url("data:image/svg+xml,%3Csvg width='200' height='200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.5' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23noise)' opacity='0.2'/%3E%3C/svg%3E");
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
}

.grain-box h4 {
  font-size: 22px;
  font-weight: 700;
  margin: 0 0 8px 0;
  color: #2c3e50;
  position: relative;
  z-index: 1;
}

.grain-box p {
  font-size: 14px;
  margin: 0;
  color: #555;
  position: relative;
  z-index: 1;
}

.grain-info {
  text-align: center;
  color: #2c3e50;
}

.grain-info h3 {
  font-size: 28px;
  font-weight: 700;
  margin: 0 0 8px 0;
}

.grain-info p {
  font-size: 14px;
  margin: 0;
  opacity: 0.8;
}

/* CSS Noise Alternative */
.grain-css {
  position: relative;
  overflow: hidden;
}

.grain-css::before {
  content: "";
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: repeating-radial-gradient(
    circle at 50% 50%,
    transparent 0,
    rgba(0, 0, 0, 0.05) 1px,
    transparent 2px
  );
  animation: grainMove 8s linear infinite;
}

@keyframes grainMove {
  0% { transform: translate(0, 0); }
  100% { transform: translate(-10%, -10%); }
}

@media (max-width: 768px) {
  .grain-container { gap: 24px; }
  .grain-box { width: 180px; height: 180px; padding: 24px; }
}
`;
