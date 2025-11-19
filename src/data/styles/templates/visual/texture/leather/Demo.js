export const demoHTML = `
<div class="leather-luxury-demo">
  <div class="demo-title">
    <h3>🎩 Luxury Leather Material</h3>
    <p>Crafted with Premium Materials</p>
  </div>

  <div class="leather-cards-container">
    <!-- Card 1: Brown Leather -->
    <div class="leather-card brown-leather">
      <!-- Metal Rivets -->
      <div class="metal-rivet rivet-top-left brass"></div>
      <div class="metal-rivet rivet-top-right brass"></div>
      <div class="metal-rivet rivet-bottom-left brass"></div>
      <div class="metal-rivet rivet-bottom-right brass"></div>

      <!-- Card Content -->
      <div class="card-content">
        <div class="card-icon">💼</div>
        <h4 class="card-title">Premium Leather</h4>
        <p class="card-subtitle">Hand-Crafted Excellence</p>
        <div class="texture-indicator">
          <span class="indicator-dot"></span>
          <span class="indicator-dot"></span>
          <span class="indicator-dot"></span>
        </div>
      </div>

      <!-- Embossed Logo -->
      <div class="embossed-logo">PREMIUM</div>
    </div>

    <!-- Card 2: Black Leather -->
    <div class="leather-card black-leather">
      <!-- Metal Rivets -->
      <div class="metal-rivet rivet-top-left silver"></div>
      <div class="metal-rivet rivet-top-right silver"></div>
      <div class="metal-rivet rivet-bottom-left silver"></div>
      <div class="metal-rivet rivet-bottom-right silver"></div>

      <!-- Card Content -->
      <div class="card-content">
        <div class="card-icon">✨</div>
        <h4 class="card-title">Luxury Material</h4>
        <p class="card-subtitle">Refined Elegance</p>
        <div class="texture-indicator">
          <span class="indicator-dot"></span>
          <span class="indicator-dot"></span>
          <span class="indicator-dot"></span>
        </div>
      </div>

      <!-- Embossed Logo -->
      <div class="embossed-logo">LUXURY</div>
    </div>
  </div>

  <div class="demo-footer">
    <span class="footer-badge">🔒 Crafted Quality</span>
    <span class="footer-badge">✂️ Hand Stitched</span>
    <span class="footer-badge">⭐ Premium Grade</span>
  </div>
</div>
`;

export const customStyles = `
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&display=swap');

.leather-luxury-demo {
  background: linear-gradient(135deg, #2C2416 0%, #1A1510 100%);
  padding: 48px 32px;
  min-height: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 32px;
  position: relative;
  overflow: hidden;
}

/* Background Texture */
.leather-luxury-demo::before {
  content: '';
  position: absolute;
  inset: 0;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23noise)' opacity='0.1'/%3E%3C/svg%3E");
  opacity: 0.3;
  pointer-events: none;
}

/* Title Section */
.demo-title {
  text-align: center;
  z-index: 10;
  position: relative;
}

.demo-title h3 {
  font-family: 'Playfair Display', serif;
  font-size: 28px;
  font-weight: 700;
  color: #D4AF37;
  margin: 0 0 8px 0;
  text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.6);
  letter-spacing: 1px;
}

.demo-title p {
  font-size: 13px;
  color: rgba(255, 255, 255, 0.7);
  margin: 0;
  font-weight: 300;
}

/* Cards Container */
.leather-cards-container {
  display: flex;
  gap: 32px;
  flex-wrap: wrap;
  justify-content: center;
  z-index: 10;
  position: relative;
}

/* Leather Card Base */
.leather-card {
  width: 220px;
  height: 280px;
  border-radius: 16px;
  padding: 28px 24px;
  position: relative;
  transition: all 0.4s cubic-bezier(0.4, 0.0, 0.2, 1);
  cursor: pointer;
  overflow: hidden;
}

.leather-card:hover {
  transform: translateY(-12px) scale(1.02);
}

/* Brown Leather Card */
.brown-leather {
  background: radial-gradient(ellipse at top, #8B6F47 0%, #5D4E37 100%);
  background-image:
    radial-gradient(ellipse at top, #8B6F47 0%, #5D4E37 100%),
    url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='150' height='150'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4'/%3E%3C/filter%3E%3Crect width='150' height='150' filter='url(%23n)' opacity='0.12'/%3E%3C/svg%3E");
  box-shadow:
    0 12px 28px rgba(0, 0, 0, 0.4),
    inset 0 2px 6px rgba(255, 255, 255, 0.15),
    inset 0 -3px 8px rgba(0, 0, 0, 0.3);
  border: 2px dashed rgba(139, 111, 71, 0.35);
}

.brown-leather:hover {
  box-shadow:
    0 18px 40px rgba(0, 0, 0, 0.5),
    inset 0 2px 6px rgba(255, 255, 255, 0.2),
    inset 0 -3px 8px rgba(0, 0, 0, 0.35);
  border-color: rgba(212, 175, 55, 0.5);
}

/* Black Leather Card */
.black-leather {
  background: radial-gradient(ellipse at top, #2A2A2A 0%, #1A1A1A 100%);
  background-image:
    radial-gradient(ellipse at top, #2A2A2A 0%, #1A1A1A 100%),
    url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='150' height='150'%3E%3Cfilter id='n2'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4'/%3E%3C/filter%3E%3Crect width='150' height='150' filter='url(%23n2)' opacity='0.18'/%3E%3C/svg%3E");
  box-shadow:
    0 12px 28px rgba(0, 0, 0, 0.6),
    inset 0 2px 6px rgba(255, 255, 255, 0.08),
    inset 0 -3px 8px rgba(0, 0, 0, 0.5);
  border: 2px dashed rgba(255, 255, 255, 0.12);
}

.black-leather:hover {
  box-shadow:
    0 18px 40px rgba(0, 0, 0, 0.7),
    inset 0 2px 6px rgba(255, 255, 255, 0.12),
    inset 0 -3px 8px rgba(0, 0, 0, 0.55);
  border-color: rgba(192, 192, 192, 0.3);
}

/* Metal Rivets */
.metal-rivet {
  width: 14px;
  height: 14px;
  border-radius: 50%;
  position: absolute;
  transition: all 0.3s ease;
  z-index: 20;
}

.leather-card:hover .metal-rivet {
  transform: rotate(15deg) scale(1.1);
}

.metal-rivet.brass {
  background: radial-gradient(circle at 30% 30%, #E8D19F 0%, #D4AF37 40%, #B8860B 100%);
  box-shadow:
    0 2px 6px rgba(0, 0, 0, 0.5),
    inset 0 1px 2px rgba(255, 255, 255, 0.5),
    inset 0 -1px 3px rgba(0, 0, 0, 0.4);
}

.metal-rivet.silver {
  background: radial-gradient(circle at 30% 30%, #FFFFFF 0%, #E8E8E8 40%, #C0C0C0 100%);
  box-shadow:
    0 2px 6px rgba(0, 0, 0, 0.6),
    inset 0 1px 2px rgba(255, 255, 255, 0.6),
    inset 0 -1px 3px rgba(0, 0, 0, 0.3);
}

.rivet-top-left {
  top: 12px;
  left: 12px;
}

.rivet-top-right {
  top: 12px;
  right: 12px;
}

.rivet-bottom-left {
  bottom: 12px;
  left: 12px;
}

.rivet-bottom-right {
  bottom: 12px;
  right: 12px;
}

/* Card Content */
.card-content {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: relative;
  z-index: 10;
}

.card-icon {
  font-size: 48px;
  margin-bottom: 16px;
  filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.4));
}

.card-title {
  font-family: 'Playfair Display', serif;
  font-size: 20px;
  font-weight: 700;
  margin: 0 0 8px 0;
  color: #F5F5DC;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.6);
  letter-spacing: 0.5px;
}

.card-subtitle {
  font-size: 13px;
  margin: 0 0 20px 0;
  color: rgba(255, 255, 255, 0.75);
  font-weight: 400;
}

/* Texture Indicator */
.texture-indicator {
  display: flex;
  gap: 8px;
  margin-top: auto;
}

.indicator-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: rgba(212, 175, 55, 0.4);
  box-shadow:
    0 2px 4px rgba(0, 0, 0, 0.3),
    inset 0 1px 2px rgba(255, 255, 255, 0.3);
  transition: all 0.3s ease;
}

.leather-card:hover .indicator-dot {
  background: rgba(212, 175, 55, 0.7);
  transform: scale(1.2);
}

/* Embossed Logo */
.embossed-logo {
  position: absolute;
  bottom: 20px;
  right: 20px;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 2px;
  color: rgba(0, 0, 0, 0.15);
  text-shadow:
    0 1px 0 rgba(255, 255, 255, 0.1),
    0 -1px 0 rgba(0, 0, 0, 0.3);
  pointer-events: none;
  z-index: 5;
}

.brown-leather .embossed-logo {
  color: rgba(0, 0, 0, 0.2);
}

.black-leather .embossed-logo {
  color: rgba(255, 255, 255, 0.05);
}

/* Footer Section */
.demo-footer {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  justify-content: center;
  z-index: 10;
  position: relative;
}

.footer-badge {
  font-size: 11px;
  color: rgba(255, 255, 255, 0.6);
  padding: 6px 14px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  font-weight: 500;
  letter-spacing: 0.5px;
  transition: all 0.3s ease;
}

.footer-badge:hover {
  background: rgba(212, 175, 55, 0.15);
  border-color: rgba(212, 175, 55, 0.3);
  color: #D4AF37;
  transform: translateY(-2px);
}

/* Responsive Design */
@media (max-width: 768px) {
  .leather-luxury-demo {
    padding: 32px 20px;
    min-height: 500px;
  }

  .demo-title h3 {
    font-size: 22px;
  }

  .demo-title p {
    font-size: 12px;
  }

  .leather-cards-container {
    gap: 24px;
  }

  .leather-card {
    width: 180px;
    height: 240px;
    padding: 24px 20px;
  }

  .card-icon {
    font-size: 38px;
    margin-bottom: 12px;
  }

  .card-title {
    font-size: 17px;
  }

  .card-subtitle {
    font-size: 12px;
  }

  .demo-footer {
    gap: 10px;
  }

  .footer-badge {
    font-size: 10px;
    padding: 5px 12px;
  }
}

@media (max-width: 480px) {
  .leather-cards-container {
    flex-direction: column;
    align-items: center;
  }

  .leather-card {
    width: 100%;
    max-width: 260px;
  }
}
`;
