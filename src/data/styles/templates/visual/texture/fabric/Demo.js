export const demoHTML = `
<div class="fabric-demo">
  <div class="fabric-samples">
    <div class="fabric-swatch fabric-linen"></div>
    <div class="fabric-swatch fabric-canvas"></div>
    <div class="fabric-swatch fabric-denim"></div>
  </div>
  <div class="fabric-info">
    <h3>Fabric Texture</h3>
    <p>织物质感 / Textile Material</p>
  </div>
</div>
`;

export const customStyles = `
.fabric-demo {
  background: linear-gradient(135deg, #a8edea 0%, #fed6e3 100%);
  padding: 64px 32px;
  min-height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 48px;
}

.fabric-samples {
  display: flex;
  gap: 32px;
  flex-wrap: wrap;
  justify-content: center;
}

.fabric-swatch {
  width: 180px;
  height: 180px;
  border-radius: 16px;
  position: relative;
  transition: transform 0.3s ease;
}

.fabric-swatch:hover {
  transform: scale(1.05);
}

/* 亚麻布纹理 */
.fabric-linen {
  background: #e8dcc4;
  background-image:
    repeating-linear-gradient(
      90deg,
      transparent,
      transparent 2px,
      rgba(0, 0, 0, 0.03) 2px,
      rgba(0, 0, 0, 0.03) 4px
    ),
    repeating-linear-gradient(
      0deg,
      transparent,
      transparent 2px,
      rgba(0, 0, 0, 0.03) 2px,
      rgba(0, 0, 0, 0.03) 4px
    );
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
}

/* 帆布纹理 */
.fabric-canvas {
  background: #d4c5a9;
  background-image:
    repeating-linear-gradient(
      45deg,
      transparent,
      transparent 3px,
      rgba(0, 0, 0, 0.05) 3px,
      rgba(0, 0, 0, 0.05) 6px
    ),
    repeating-linear-gradient(
      -45deg,
      transparent,
      transparent 3px,
      rgba(0, 0, 0, 0.05) 3px,
      rgba(0, 0, 0, 0.05) 6px
    );
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
}

/* 牛仔布纹理 */
.fabric-denim {
  background: #4a5f7f;
  background-image:
    repeating-linear-gradient(
      90deg,
      transparent,
      transparent 1px,
      rgba(255, 255, 255, 0.05) 1px,
      rgba(255, 255, 255, 0.05) 2px
    ),
    repeating-linear-gradient(
      0deg,
      transparent,
      transparent 1px,
      rgba(0, 0, 0, 0.1) 1px,
      rgba(0, 0, 0, 0.1) 2px
    );
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.25);
}

.fabric-info {
  text-align: center;
  color: #2c3e50;
}

.fabric-info h3 {
  font-size: 28px;
  font-weight: 700;
  margin: 0 0 8px 0;
}

.fabric-info p {
  font-size: 14px;
  margin: 0;
  opacity: 0.8;
}

@media (max-width: 768px) {
  .fabric-samples { gap: 20px; }
  .fabric-swatch { width: 140px; height: 140px; }
}
`;
