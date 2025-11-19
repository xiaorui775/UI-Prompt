export const demoHTML = `
<div class="duotone-demo">
  <div class="duotone-card">
    <h3>Duotone</h3>
    <p>双色调 / Two-Color Gradient</p>
  </div>
</div>
`;

export const customStyles = `
.duotone-demo {
  background: #0a0a0a;
  padding: 48px;
  min-height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.duotone-card {
  background: linear-gradient(135deg, #FF0080 0%, #7928CA 100%);
  width: 100%;
  max-width: 500px;
  border-radius: 16px;
  padding: 48px 32px;
  text-align: center;
  color: white;
}

.duotone-card h3 {
  font-size: 32px;
  font-weight: 700;
  margin: 0 0 8px 0;
}

.duotone-card p {
  font-size: 14px;
  margin: 0;
  opacity: 0.95;
}

@media (max-width: 768px) {
  .duotone-demo { padding: 24px; }
  .duotone-card { padding: 32px 24px; }
}
`;
