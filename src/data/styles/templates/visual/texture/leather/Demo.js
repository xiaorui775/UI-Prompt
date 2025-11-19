export const demoHTML = `
<div class="leather-demo">
  <div class="leather-items">
    <div class="leather-panel leather-brown">
      <h4>Premium Leather</h4>
      <p>高級皮革質感</p>
    </div>
    <div class="leather-panel leather-black">
      <h4>Luxury Material</h4>
      <p>奢華材質設計</p>
    </div>
  </div>
  <div class="leather-info">
    <h3>Leather Texture</h3>
    <p>皮革质感 / Premium Material</p>
  </div>
</div>
`;

export const customStyles = `
.leather-demo {
  background: linear-gradient(135deg, #3a3a3a 0%, #1a1a1a 100%);
  padding: 64px 32px;
  min-height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 48px;
}

.leather-items {
  display: flex;
  gap: 40px;
  flex-wrap: wrap;
  justify-content: center;
}

.leather-panel {
  width: 240px;
  height: 240px;
  border-radius: 12px;
  padding: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: relative;
  transition: transform 0.3s ease;
}

.leather-panel:hover {
  transform: translateY(-10px);
}

/* 棕色皮革 */
.leather-brown {
  background: radial-gradient(ellipse at top, #8b6f47 0%, #6b4423 100%);
  background-image:
    radial-gradient(ellipse at top, #8b6f47 0%, #6b4423 100%),
    url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3'/%3E%3C/filter%3E%3Crect width='100' height='100' filter='url(%23noise)' opacity='0.1'/%3E%3C/svg%3E");
  box-shadow:
    0 15px 35px rgba(0, 0, 0, 0.4),
    inset 0 -2px 6px rgba(0, 0, 0, 0.3),
    inset 0 2px 6px rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(139, 111, 71, 0.3);
}

/* 黑色皮革 */
.leather-black {
  background: radial-gradient(ellipse at top, #2a2a2a 0%, #0a0a0a 100%);
  background-image:
    radial-gradient(ellipse at top, #2a2a2a 0%, #0a0a0a 100%),
    url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3'/%3E%3C/filter%3E%3Crect width='100' height='100' filter='url(%23noise)' opacity='0.15'/%3E%3C/svg%3E");
  box-shadow:
    0 15px 35px rgba(0, 0, 0, 0.6),
    inset 0 -2px 6px rgba(0, 0, 0, 0.5),
    inset 0 2px 6px rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.leather-panel h4 {
  font-size: 22px;
  font-weight: 700;
  margin: 0 0 12px 0;
  color: #f0f0f0;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
}

.leather-panel p {
  font-size: 14px;
  margin: 0;
  color: rgba(255, 255, 255, 0.8);
}

.leather-info {
  text-align: center;
  color: white;
}

.leather-info h3 {
  font-size: 28px;
  font-weight: 700;
  margin: 0 0 8px 0;
}

.leather-info p {
  font-size: 14px;
  margin: 0;
  opacity: 0.9;
}

/* 皮革縫線效果（可選） */
.leather-stitched {
  position: relative;
}

.leather-stitched::before {
  content: "";
  position: absolute;
  top: 10px;
  left: 10px;
  right: 10px;
  bottom: 10px;
  border: 2px dashed rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  pointer-events: none;
}

@media (max-width: 768px) {
  .leather-items { gap: 24px; }
  .leather-panel { width: 200px; height: 200px; padding: 24px; }
}
`;
