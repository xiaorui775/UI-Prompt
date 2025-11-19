/**
 * Kinetic Typography - Demo Component
 * 動態排版風格的 StyleCard 預覽版本
 */

export const demoHTML = `
  <div class="w-full h-full flex flex-col items-center justify-center gap-6 bg-black overflow-hidden">
    <div class="kinetic-word-container">
      <span class="kinetic-word text-6xl font-black text-white">TYPE</span>
    </div>
    <div class="flex gap-4">
      <div class="kinetic-letter text-4xl font-bold text-blue-400">K</div>
      <div class="kinetic-letter text-4xl font-bold text-pink-400" style="animation-delay: 0.1s;">I</div>
      <div class="kinetic-letter text-4xl font-bold text-yellow-400" style="animation-delay: 0.2s;">N</div>
      <div class="kinetic-letter text-4xl font-bold text-green-400" style="animation-delay: 0.3s;">E</div>
      <div class="kinetic-letter text-4xl font-bold text-purple-400" style="animation-delay: 0.4s;">T</div>
      <div class="kinetic-letter text-4xl font-bold text-orange-400" style="animation-delay: 0.5s;">I</div>
      <div class="kinetic-letter text-4xl font-bold text-cyan-400" style="animation-delay: 0.6s;">C</div>
    </div>
  </div>
`;

export const customStyles = `
  .kinetic-word {
    display: inline-block;
    animation: kinetic-pulse 2s ease-in-out infinite;
  }

  @keyframes kinetic-pulse {
    0%, 100% {
      transform: scale(1);
      opacity: 1;
    }
    50% {
      transform: scale(1.2);
      opacity: 0.8;
      letter-spacing: 0.2em;
    }
  }

  .kinetic-letter {
    display: inline-block;
    animation: kinetic-bounce 1.5s ease-in-out infinite;
  }

  @keyframes kinetic-bounce {
    0%, 100% {
      transform: translateY(0) rotate(0deg);
    }
    25% {
      transform: translateY(-20px) rotate(-10deg);
    }
    75% {
      transform: translateY(-10px) rotate(10deg);
    }
  }

  .kinetic-word-container {
    position: relative;
  }

  .kinetic-word-container::before {
    content: 'TYPE';
    position: absolute;
    top: 0;
    left: 0;
    color: rgba(255, 255, 255, 0.1);
    font-size: 6rem;
    font-weight: 900;
    animation: kinetic-shadow 2s ease-in-out infinite;
  }

  @keyframes kinetic-shadow {
    0%, 100% {
      transform: translate(0, 0) scale(1);
    }
    50% {
      transform: translate(10px, 10px) scale(1.1);
    }
  }
`;
