export const demoHTML = `
<div class="mesh-demo">
  <div class="mesh-bg">
    <h3>Mesh Gradient</h3>
    <p>网格渐变 / Multi-point Gradient</p>
  </div>
</div>
`;

export const customStyles = `
.mesh-demo {
  background: #0f0f23;
  padding: 48px;
  min-height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.mesh-bg {
  background:
    radial-gradient(at 0% 0%, #667eea 0px, transparent 50%),
    radial-gradient(at 100% 0%, #764ba2 0px, transparent 50%),
    radial-gradient(at 100% 100%, #f093fb 0px, transparent 50%),
    radial-gradient(at 0% 100%, #4facfe 0px, transparent 50%);
  background-color: #0f0f23;
  width: 100%;
  max-width: 600px;
  border-radius: 24px;
  padding: 64px 32px;
  text-align: center;
  color: white;
}

.mesh-bg h3 {
  font-size: 32px;
  font-weight: 700;
  margin: 0 0 8px 0;
}

.mesh-bg p {
  font-size: 14px;
  margin: 0;
  opacity: 0.9;
}

@media (max-width: 768px) {
  .mesh-demo { padding: 24px; }
  .mesh-bg { padding: 48px 24px; }
}
`;
