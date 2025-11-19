export const demoHTML = `
<div class="holo-demo">
  <div class="holo-card">
    <h3>Holographic</h3>
    <p>全息渐变 / Rainbow Spectrum</p>
  </div>
</div>
`;

export const customStyles = `
.holo-demo {
  background: #0a0a0a;
  padding: 48px;
  min-height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.holo-card {
  background: linear-gradient(135deg, 
    #ff0080 0%, 
    #ff8c00 14%, 
    #ffff00 28%, 
    #00ff00 42%, 
    #00ffff 56%, 
    #0080ff 70%, 
    #8000ff 84%, 
    #ff0080 100%
  );
  background-size: 200% 200%;
  animation: holoShift 6s ease infinite;
  width: 100%;
  max-width: 500px;
  border-radius: 20px;
  padding: 48px 32px;
  text-align: center;
  color: white;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
}

@keyframes holoShift {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}

.holo-card h3 {
  font-size: 32px;
  font-weight: 700;
  margin: 0 0 8px 0;
}

.holo-card p {
  font-size: 14px;
  margin: 0;
}

@media (max-width: 768px) {
  .holo-demo { padding: 24px; }
  .holo-card { padding: 32px 24px; }
}
`;
