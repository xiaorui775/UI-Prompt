export const demoHTML = `
<div class="transition-demo">
  <div class="transition-card">
    <h3>Color Transition</h3>
    <p>色彩过渡 / Smooth Color Shift</p>
  </div>
</div>
`;

export const customStyles = `
.transition-demo {
  background: #0f0f23;
  padding: 48px;
  min-height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.transition-card {
  background: linear-gradient(135deg, #667eea, #764ba2, #f093fb);
  width: 100%;
  max-width: 600px;
  border-radius: 20px;
  padding: 48px 32px;
  text-align: center;
  color: white;
}

.transition-card h3 {
  font-size: 32px;
  font-weight: 700;
  margin: 0 0 8px 0;
}

.transition-card p {
  font-size: 14px;
  margin: 0;
  opacity: 0.95;
}

@media (max-width: 768px) {
  .transition-demo { padding: 24px; }
  .transition-card { padding: 32px 24px; }
}
`;
