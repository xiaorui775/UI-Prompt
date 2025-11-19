export const demoHTML = `
<div class="animated-demo">
  <div class="animated-card">
    <h3>Animated Gradient</h3>
    <p>动态渐变 / Moving Gradient</p>
  </div>
</div>
`;

export const customStyles = `
.animated-demo {
  background: #0a0a0a;
  padding: 48px;
  min-height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.animated-card {
  background: linear-gradient(135deg, #667eea, #764ba2, #f093fb, #4facfe);
  background-size: 400% 400%;
  animation: gradientMove 8s ease infinite;
  width: 100%;
  max-width: 600px;
  border-radius: 20px;
  padding: 48px 32px;
  text-align: center;
  color: white;
}

@keyframes gradientMove {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}

.animated-card h3 {
  font-size: 32px;
  font-weight: 700;
  margin: 0 0 8px 0;
}

.animated-card p {
  font-size: 14px;
  margin: 0;
  opacity: 0.95;
}

@media (max-width: 768px) {
  .animated-demo { padding: 24px; }
  .animated-card { padding: 32px 24px; }
}
`;
