// Gradient 渐变艺术家族演示 UI

export const demoHTML = `
<div class="gradient-demo">
  <div class="gradient-showcase">
    <div class="mesh-gradient-bg">
      <h2>Mesh Gradient</h2>
      <p>网格渐变 / 多点渐变融合</p>
    </div>
  </div>
</div>
`;

export const customStyles = `
.gradient-demo {
  padding: 48px;
  min-height: 400px;
  background: #0f0f23;
}

.gradient-showcase {
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
}

.mesh-gradient-bg {
  background:
    radial-gradient(at 0% 0%, #667eea 0px, transparent 50%),
    radial-gradient(at 100% 0%, #764ba2 0px, transparent 50%),
    radial-gradient(at 100% 100%, #f093fb 0px, transparent 50%),
    radial-gradient(at 0% 100%, #4facfe 0px, transparent 50%);
  background-color: #0f0f23;
  border-radius: 24px;
  padding: 64px 32px;
  text-align: center;
  color: white;
  animation: meshShift 15s ease infinite;
}

.mesh-gradient-bg h2 {
  font-size: 36px;
  font-weight: 700;
  margin: 0 0 12px 0;
  background: linear-gradient(135deg, #fff, #f093fb);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.mesh-gradient-bg p {
  font-size: 16px;
  margin: 0;
  opacity: 0.9;
}

@keyframes meshShift {
  0%, 100% {
    background:
      radial-gradient(at 0% 0%, #667eea 0px, transparent 50%),
      radial-gradient(at 100% 0%, #764ba2 0px, transparent 50%),
      radial-gradient(at 100% 100%, #f093fb 0px, transparent 50%),
      radial-gradient(at 0% 100%, #4facfe 0px, transparent 50%);
  }
  50% {
    background:
      radial-gradient(at 50% 50%, #667eea 0px, transparent 50%),
      radial-gradient(at 0% 100%, #764ba2 0px, transparent 50%),
      radial-gradient(at 0% 0%, #f093fb 0px, transparent 50%),
      radial-gradient(at 100% 100%, #4facfe 0px, transparent 50%);
  }
}

@media (max-width: 768px) {
  .gradient-demo { padding: 24px; }
  .mesh-gradient-bg h2 { font-size: 28px; }
}
`;
