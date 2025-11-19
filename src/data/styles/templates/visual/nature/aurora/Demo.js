export const demoHTML = `
<div class="aurora-demo">
  <div class="aurora-background">
    <div class="aurora-wave aurora-wave-1"></div>
    <div class="aurora-wave aurora-wave-2"></div>
    <div class="aurora-wave aurora-wave-3"></div>
  </div>
  <div class="aurora-content">
    <h3>Aurora Borealis</h3>
    <p>极光 / Northern Lights</p>
  </div>
</div>
`;

export const customStyles = `
.aurora-demo {
  background: linear-gradient(180deg, #0a1628 0%, #1a2332 100%);
  padding: 64px 32px;
  min-height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
}

.aurora-background {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0.8;
}

.aurora-wave {
  position: absolute;
  width: 200%;
  height: 100%;
  filter: blur(40px);
  animation: auroraFlow 20s ease-in-out infinite;
}

.aurora-wave-1 {
  background: linear-gradient(90deg,
    transparent 0%,
    rgba(0, 255, 200, 0.3) 25%,
    rgba(100, 200, 255, 0.3) 50%,
    rgba(200, 100, 255, 0.3) 75%,
    transparent 100%
  );
  top: 10%;
  left: -50%;
  animation-duration: 18s;
}

.aurora-wave-2 {
  background: linear-gradient(90deg,
    transparent 0%,
    rgba(100, 255, 150, 0.3) 25%,
    rgba(150, 150, 255, 0.3) 50%,
    rgba(255, 100, 200, 0.3) 75%,
    transparent 100%
  );
  top: 30%;
  left: -50%;
  animation-duration: 22s;
  animation-delay: 5s;
}

.aurora-wave-3 {
  background: linear-gradient(90deg,
    transparent 0%,
    rgba(50, 200, 255, 0.3) 25%,
    rgba(200, 150, 255, 0.3) 50%,
    rgba(100, 255, 180, 0.3) 75%,
    transparent 100%
  );
  top: 50%;
  left: -50%;
  animation-duration: 25s;
  animation-delay: 10s;
}

.aurora-content {
  text-align: center;
  color: white;
  z-index: 10;
  position: relative;
}

.aurora-content h3 {
  font-size: 48px;
  font-weight: 700;
  margin: 0 0 16px 0;
  text-shadow: 0 0 20px rgba(100, 200, 255, 0.8);
}

.aurora-content p {
  font-size: 16px;
  margin: 0;
  opacity: 0.9;
}

@keyframes auroraFlow {
  0%, 100% {
    transform: translateX(0) translateY(0);
    opacity: 0.8;
  }
  50% {
    transform: translateX(25%) translateY(-10px);
    opacity: 1;
  }
}

@media (max-width: 768px) {
  .aurora-content h3 { font-size: 36px; }
}
`;
