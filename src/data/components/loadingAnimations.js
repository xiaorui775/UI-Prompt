/**
 * Loading Animations Component Data
 * 加载动画组件数据
 *
 * 包含 5 个不同风格的加载动画变体:
 * 1. Bootstrap 5 Classic Spinners - 经典 Bootstrap 加载器
 * 2. Material Design Progress - Material Design 进度指示器
 * 3. Modern Skeleton Loaders - 现代骨架屏加载器
 * 4. Pulsing & Bouncing Dots - 脉冲和弹跳点动画
 * 5. Advanced 3D Spinners - 高级 3D 旋转加载器
 */

export const loadingAnimations = {
  id: 'loading-animations',
  title: 'data.components.interactive.loading-animations.title',
  description: 'data.components.interactive.loading-animations.description',

  variants: [
    // Variant 1: Bootstrap 5 Classic Spinners
    {
      id: 'bootstrap5',
      name: 'data.components.interactive.loading-animations.variants.bootstrap5.name',
      description: 'data.components.interactive.loading-animations.variants.bootstrap5.description',
      demoHTML: `
        <div class="w-full max-w-2xl space-y-8 p-6">
          <!-- Section 1: Border Spinners -->
          <div class="space-y-4">
            <h3 class="text-sm font-semibold text-gray-700">Border Spinners</h3>
            <div class="flex items-center gap-6 flex-wrap">
              <!-- Small -->
              <div class="flex flex-col items-center gap-2">
                <div class="bs5-spinner-border bs5-spinner-sm" role="status">
                  <span class="sr-only">Loading...</span>
                </div>
                <span class="text-xs text-gray-500">Small</span>
              </div>

              <!-- Normal -->
              <div class="flex flex-col items-center gap-2">
                <div class="bs5-spinner-border" role="status">
                  <span class="sr-only">Loading...</span>
                </div>
                <span class="text-xs text-gray-500">Normal</span>
              </div>

              <!-- Large -->
              <div class="flex flex-col items-center gap-2">
                <div class="bs5-spinner-border bs5-spinner-lg" role="status">
                  <span class="sr-only">Loading...</span>
                </div>
                <span class="text-xs text-gray-500">Large</span>
              </div>
            </div>
          </div>

          <!-- Section 2: Growing Spinners -->
          <div class="space-y-4">
            <h3 class="text-sm font-semibold text-gray-700">Growing Spinners</h3>
            <div class="flex items-center gap-6 flex-wrap">
              <!-- Small -->
              <div class="flex flex-col items-center gap-2">
                <div class="bs5-spinner-grow bs5-spinner-sm" role="status">
                  <span class="sr-only">Loading...</span>
                </div>
                <span class="text-xs text-gray-500">Small</span>
              </div>

              <!-- Normal -->
              <div class="flex flex-col items-center gap-2">
                <div class="bs5-spinner-grow" role="status">
                  <span class="sr-only">Loading...</span>
                </div>
                <span class="text-xs text-gray-500">Normal</span>
              </div>

              <!-- Large -->
              <div class="flex flex-col items-center gap-2">
                <div class="bs5-spinner-grow bs5-spinner-lg" role="status">
                  <span class="sr-only">Loading...</span>
                </div>
                <span class="text-xs text-gray-500">Large</span>
              </div>
            </div>
          </div>

          <!-- Section 3: Colored Spinners -->
          <div class="space-y-4">
            <h3 class="text-sm font-semibold text-gray-700">Colored Variants</h3>
            <div class="flex items-center gap-4 flex-wrap">
              <div class="bs5-spinner-border bs5-text-primary" role="status"></div>
              <div class="bs5-spinner-border bs5-text-success" role="status"></div>
              <div class="bs5-spinner-border bs5-text-danger" role="status"></div>
              <div class="bs5-spinner-border bs5-text-warning" role="status"></div>
              <div class="bs5-spinner-border bs5-text-info" role="status"></div>
            </div>
          </div>

          <!-- Section 4: Button Loading States -->
          <div class="space-y-4">
            <h3 class="text-sm font-semibold text-gray-700">Button Loading States</h3>
            <div class="flex items-center gap-3 flex-wrap">
              <button class="bs5-btn bs5-btn-primary" type="button" disabled>
                <span class="bs5-spinner-border bs5-spinner-sm me-2" role="status" aria-hidden="true"></span>
                Loading...
              </button>

              <button class="bs5-btn bs5-btn-success" type="button" disabled>
                <span class="bs5-spinner-grow bs5-spinner-sm me-2" role="status" aria-hidden="true"></span>
                Please wait...
              </button>
            </div>
          </div>
        </div>
      `,
      customStyles: `
        /* Bootstrap 5 Spinner Base Styles */
        .bs5-spinner-border,
        .bs5-spinner-grow {
          display: inline-block;
          width: 2rem;
          height: 2rem;
          vertical-align: -0.125em;
        }

        /* Border Spinner */
        .bs5-spinner-border {
          border: 0.25em solid currentColor;
          border-right-color: transparent;
          border-radius: 50%;
          animation: bs5-spinner-border-animation 0.75s linear infinite;
        }

        /* Growing Spinner */
        .bs5-spinner-grow {
          background-color: currentColor;
          border-radius: 50%;
          opacity: 0;
          animation: bs5-spinner-grow-animation 0.75s linear infinite;
        }

        /* Size Variants */
        .bs5-spinner-sm {
          width: 1rem;
          height: 1rem;
          border-width: 0.2em;
        }

        .bs5-spinner-lg {
          width: 3rem;
          height: 3rem;
          border-width: 0.35em;
        }

        /* Color Variants */
        .bs5-text-primary { color: #0d6efd; }
        .bs5-text-success { color: #198754; }
        .bs5-text-danger { color: #dc3545; }
        .bs5-text-warning { color: #ffc107; }
        .bs5-text-info { color: #0dcaf0; }

        /* Button Styles */
        .bs5-btn {
          display: inline-flex;
          align-items: center;
          padding: 0.375rem 0.75rem;
          font-size: 1rem;
          font-weight: 400;
          line-height: 1.5;
          text-align: center;
          border: 1px solid transparent;
          border-radius: 0.375rem;
          cursor: pointer;
          transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out;
        }

        .bs5-btn-primary {
          color: #fff;
          background-color: #0d6efd;
          border-color: #0d6efd;
        }

        .bs5-btn-success {
          color: #fff;
          background-color: #198754;
          border-color: #198754;
        }

        .bs5-btn:disabled {
          opacity: 0.65;
          cursor: not-allowed;
        }

        .me-2 {
          margin-right: 0.5rem;
        }

        .sr-only {
          position: absolute;
          width: 1px;
          height: 1px;
          padding: 0;
          margin: -1px;
          overflow: hidden;
          clip: rect(0, 0, 0, 0);
          white-space: nowrap;
          border: 0;
        }

        /* Animations */
        @keyframes bs5-spinner-border-animation {
          to { transform: rotate(360deg); }
        }

        @keyframes bs5-spinner-grow-animation {
          0% {
            transform: scale(0);
          }
          50% {
            opacity: 1;
            transform: scale(1);
          }
          100% {
            opacity: 0;
            transform: scale(0);
          }
        }
      `
    },

    // Variant 2: Material Design Progress Indicators
    {
      id: 'material',
      name: 'data.components.interactive.loading-animations.variants.material.name',
      description: 'data.components.interactive.loading-animations.variants.material.description',
      demoHTML: `
        <div class="w-full max-w-2xl space-y-10 p-6">
          <!-- Section 1: Circular Progress -->
          <div class="space-y-4">
            <h3 class="text-sm font-semibold text-gray-700">Circular Progress</h3>
            <div class="flex items-center gap-8 flex-wrap">
              <!-- Indeterminate Small -->
              <div class="flex flex-col items-center gap-2">
                <div class="md-circular-progress md-circular-sm"></div>
                <span class="text-xs text-gray-500">Small</span>
              </div>

              <!-- Indeterminate Medium -->
              <div class="flex flex-col items-center gap-2">
                <div class="md-circular-progress md-circular-md"></div>
                <span class="text-xs text-gray-500">Medium</span>
              </div>

              <!-- Indeterminate Large -->
              <div class="flex flex-col items-center gap-2">
                <div class="md-circular-progress md-circular-lg"></div>
                <span class="text-xs text-gray-500">Large</span>
              </div>
            </div>
          </div>

          <!-- Section 2: Linear Progress -->
          <div class="space-y-4">
            <h3 class="text-sm font-semibold text-gray-700">Linear Progress</h3>
            <div class="space-y-6">
              <!-- Indeterminate -->
              <div class="space-y-2">
                <span class="text-xs text-gray-600">Indeterminate</span>
                <div class="md-linear-progress">
                  <div class="md-linear-progress-bar md-linear-indeterminate"></div>
                </div>
              </div>

              <!-- Determinate 30% -->
              <div class="space-y-2">
                <span class="text-xs text-gray-600">Determinate (30%)</span>
                <div class="md-linear-progress">
                  <div class="md-linear-progress-bar" style="width: 30%"></div>
                </div>
              </div>

              <!-- Determinate 60% -->
              <div class="space-y-2">
                <span class="text-xs text-gray-600">Determinate (60%)</span>
                <div class="md-linear-progress">
                  <div class="md-linear-progress-bar" style="width: 60%"></div>
                </div>
              </div>

              <!-- Buffer Loading -->
              <div class="space-y-2">
                <span class="text-xs text-gray-600">Buffer Loading</span>
                <div class="md-linear-progress md-buffer">
                  <div class="md-linear-progress-buffer" style="width: 75%"></div>
                  <div class="md-linear-progress-bar md-linear-buffer-bar" style="width: 45%"></div>
                </div>
              </div>
            </div>
          </div>

          <!-- Section 3: Colored Variants -->
          <div class="space-y-4">
            <h3 class="text-sm font-semibold text-gray-700">Colored Variants</h3>
            <div class="flex items-center gap-6 flex-wrap">
              <div class="md-circular-progress md-circular-md md-color-primary"></div>
              <div class="md-circular-progress md-circular-md md-color-secondary"></div>
              <div class="md-circular-progress md-circular-md md-color-success"></div>
              <div class="md-circular-progress md-circular-md md-color-error"></div>
            </div>
          </div>
        </div>
      `,
      customStyles: `
        /* Circular Progress */
        .md-circular-progress {
          display: inline-block;
          border-radius: 50%;
          border: 3px solid rgba(103, 58, 183, 0.2);
          border-top-color: #673ab7;
          animation: md-circular-rotate 1.4s linear infinite;
        }

        .md-circular-sm {
          width: 24px;
          height: 24px;
          border-width: 2px;
        }

        .md-circular-md {
          width: 40px;
          height: 40px;
          border-width: 3px;
        }

        .md-circular-lg {
          width: 56px;
          height: 56px;
          border-width: 4px;
        }

        /* Colored Circular Progress */
        .md-color-primary {
          border-color: rgba(103, 58, 183, 0.2);
          border-top-color: #673ab7;
        }

        .md-color-secondary {
          border-color: rgba(233, 30, 99, 0.2);
          border-top-color: #e91e63;
        }

        .md-color-success {
          border-color: rgba(76, 175, 80, 0.2);
          border-top-color: #4caf50;
        }

        .md-color-error {
          border-color: rgba(244, 67, 54, 0.2);
          border-top-color: #f44336;
        }

        /* Linear Progress */
        .md-linear-progress {
          width: 100%;
          height: 4px;
          background-color: rgba(103, 58, 183, 0.2);
          border-radius: 2px;
          overflow: hidden;
          position: relative;
        }

        .md-linear-progress-bar {
          height: 100%;
          background-color: #673ab7;
          border-radius: 2px;
          transition: width 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .md-linear-indeterminate {
          animation: md-linear-indeterminate 2s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;
          width: 30%;
        }

        /* Buffer Loading */
        .md-buffer {
          background-color: rgba(103, 58, 183, 0.1);
        }

        .md-linear-progress-buffer {
          position: absolute;
          height: 100%;
          background-color: rgba(103, 58, 183, 0.2);
          border-radius: 2px;
        }

        .md-linear-buffer-bar {
          background-color: #673ab7;
          animation: md-buffer-pulse 2s ease-in-out infinite;
        }

        /* Animations */
        @keyframes md-circular-rotate {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        @keyframes md-linear-indeterminate {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(400%);
          }
        }

        @keyframes md-buffer-pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.7;
          }
        }
      `
    },

    // Variant 3: Modern Skeleton Loaders
    {
      id: 'skeleton',
      name: 'data.components.interactive.loading-animations.variants.skeleton.name',
      description: 'data.components.interactive.loading-animations.variants.skeleton.description',
      demoHTML: `
        <div class="w-full max-w-3xl space-y-8 p-6 bg-white">
          <!-- Section 1: Card Skeleton -->
          <div class="space-y-4">
            <h3 class="text-sm font-semibold text-gray-700">Product Card Skeleton</h3>
            <div class="skeleton-card">
              <div class="skeleton-image"></div>
              <div class="skeleton-content">
                <div class="skeleton-title"></div>
                <div class="skeleton-text"></div>
                <div class="skeleton-text skeleton-text-short"></div>
                <div class="skeleton-button"></div>
              </div>
            </div>
          </div>

          <!-- Section 2: List Item Skeleton -->
          <div class="space-y-4">
            <h3 class="text-sm font-semibold text-gray-700">List Items Skeleton</h3>
            <div class="space-y-3">
              <div class="skeleton-list-item">
                <div class="skeleton-avatar"></div>
                <div class="skeleton-list-content">
                  <div class="skeleton-text skeleton-text-title"></div>
                  <div class="skeleton-text skeleton-text-short"></div>
                </div>
              </div>

              <div class="skeleton-list-item">
                <div class="skeleton-avatar"></div>
                <div class="skeleton-list-content">
                  <div class="skeleton-text skeleton-text-title"></div>
                  <div class="skeleton-text skeleton-text-short"></div>
                </div>
              </div>

              <div class="skeleton-list-item">
                <div class="skeleton-avatar"></div>
                <div class="skeleton-list-content">
                  <div class="skeleton-text skeleton-text-title"></div>
                  <div class="skeleton-text skeleton-text-short"></div>
                </div>
              </div>
            </div>
          </div>

          <!-- Section 3: Text Block Skeleton -->
          <div class="space-y-4">
            <h3 class="text-sm font-semibold text-gray-700">Text Block Skeleton</h3>
            <div class="space-y-2">
              <div class="skeleton-text skeleton-text-title"></div>
              <div class="skeleton-text"></div>
              <div class="skeleton-text"></div>
              <div class="skeleton-text skeleton-text-short"></div>
            </div>
          </div>

          <!-- Section 4: Grid Skeleton -->
          <div class="space-y-4">
            <h3 class="text-sm font-semibold text-gray-700">Image Grid Skeleton</h3>
            <div class="skeleton-grid">
              <div class="skeleton-grid-item"></div>
              <div class="skeleton-grid-item"></div>
              <div class="skeleton-grid-item"></div>
              <div class="skeleton-grid-item"></div>
            </div>
          </div>
        </div>
      `,
      customStyles: `
        /* Base Skeleton Styles */
        .skeleton-base {
          background: linear-gradient(
            90deg,
            #f0f0f0 0%,
            #f8f8f8 50%,
            #f0f0f0 100%
          );
          background-size: 200% 100%;
          animation: skeleton-shimmer 1.5s infinite;
          border-radius: 4px;
        }

        /* Card Skeleton */
        .skeleton-card {
          border: 1px solid #e5e5e5;
          border-radius: 8px;
          overflow: hidden;
          max-width: 300px;
        }

        .skeleton-image {
          width: 100%;
          height: 200px;
          background: linear-gradient(90deg, #f0f0f0 0%, #f8f8f8 50%, #f0f0f0 100%);
          background-size: 200% 100%;
          animation: skeleton-shimmer 1.5s infinite;
        }

        .skeleton-content {
          padding: 16px;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .skeleton-title {
          height: 20px;
          width: 70%;
          background: linear-gradient(90deg, #f0f0f0 0%, #f8f8f8 50%, #f0f0f0 100%);
          background-size: 200% 100%;
          animation: skeleton-shimmer 1.5s infinite;
          border-radius: 4px;
        }

        .skeleton-text {
          height: 14px;
          width: 100%;
          background: linear-gradient(90deg, #f0f0f0 0%, #f8f8f8 50%, #f0f0f0 100%);
          background-size: 200% 100%;
          animation: skeleton-shimmer 1.5s infinite;
          border-radius: 4px;
        }

        .skeleton-text-short {
          width: 60%;
        }

        .skeleton-text-title {
          width: 80%;
          height: 16px;
        }

        .skeleton-button {
          height: 36px;
          width: 100%;
          background: linear-gradient(90deg, #f0f0f0 0%, #f8f8f8 50%, #f0f0f0 100%);
          background-size: 200% 100%;
          animation: skeleton-shimmer 1.5s infinite;
          border-radius: 6px;
          margin-top: 8px;
        }

        /* List Item Skeleton */
        .skeleton-list-item {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px;
          border: 1px solid #e5e5e5;
          border-radius: 8px;
        }

        .skeleton-avatar {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          flex-shrink: 0;
          background: linear-gradient(90deg, #f0f0f0 0%, #f8f8f8 50%, #f0f0f0 100%);
          background-size: 200% 100%;
          animation: skeleton-shimmer 1.5s infinite;
        }

        .skeleton-list-content {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        /* Grid Skeleton */
        .skeleton-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
          gap: 16px;
        }

        .skeleton-grid-item {
          aspect-ratio: 1;
          border-radius: 8px;
          background: linear-gradient(90deg, #f0f0f0 0%, #f8f8f8 50%, #f0f0f0 100%);
          background-size: 200% 100%;
          animation: skeleton-shimmer 1.5s infinite;
        }

        /* Shimmer Animation */
        @keyframes skeleton-shimmer {
          0% {
            background-position: -200% 0;
          }
          100% {
            background-position: 200% 0;
          }
        }
      `
    },

    // Variant 4: Pulsing & Bouncing Dots
    {
      id: 'dots',
      name: 'data.components.interactive.loading-animations.variants.dots.name',
      description: 'data.components.interactive.loading-animations.variants.dots.description',
      demoHTML: `
        <div class="w-full max-w-2xl space-y-12 p-6">
          <!-- Section 1: Bouncing Balls -->
          <div class="space-y-4">
            <h3 class="text-sm font-semibold text-gray-700">Bouncing Balls</h3>
            <div class="flex justify-center items-end h-20">
              <div class="dots-bouncing-ball dots-ball-1"></div>
              <div class="dots-bouncing-ball dots-ball-2"></div>
              <div class="dots-bouncing-ball dots-ball-3"></div>
            </div>
          </div>

          <!-- Section 2: Pulsing Circles -->
          <div class="space-y-4">
            <h3 class="text-sm font-semibold text-gray-700">Pulsing Circles</h3>
            <div class="flex justify-center items-center gap-3">
              <div class="dots-pulse dots-pulse-1"></div>
              <div class="dots-pulse dots-pulse-2"></div>
              <div class="dots-pulse dots-pulse-3"></div>
              <div class="dots-pulse dots-pulse-4"></div>
            </div>
          </div>

          <!-- Section 3: Wave Dots -->
          <div class="space-y-4">
            <h3 class="text-sm font-semibold text-gray-700">Wave Animation</h3>
            <div class="flex justify-center items-center gap-2">
              <div class="dots-wave dots-wave-1"></div>
              <div class="dots-wave dots-wave-2"></div>
              <div class="dots-wave dots-wave-3"></div>
              <div class="dots-wave dots-wave-4"></div>
              <div class="dots-wave dots-wave-5"></div>
            </div>
          </div>

          <!-- Section 4: Fade Dots -->
          <div class="space-y-4">
            <h3 class="text-sm font-semibold text-gray-700">Fade In/Out</h3>
            <div class="flex justify-center items-center gap-3">
              <div class="dots-fade dots-fade-1"></div>
              <div class="dots-fade dots-fade-2"></div>
              <div class="dots-fade dots-fade-3"></div>
            </div>
          </div>

          <!-- Section 5: Elastic Scale -->
          <div class="space-y-4">
            <h3 class="text-sm font-semibold text-gray-700">Elastic Scale</h3>
            <div class="flex justify-center items-center gap-4">
              <div class="dots-elastic dots-elastic-1"></div>
              <div class="dots-elastic dots-elastic-2"></div>
              <div class="dots-elastic dots-elastic-3"></div>
              <div class="dots-elastic dots-elastic-4"></div>
            </div>
          </div>

          <!-- Section 6: Rotating Dots -->
          <div class="space-y-4">
            <h3 class="text-sm font-semibold text-gray-700">Rotating Circle</h3>
            <div class="flex justify-center items-center">
              <div class="dots-rotating-container">
                <div class="dots-rotating-dot dots-rot-1"></div>
                <div class="dots-rotating-dot dots-rot-2"></div>
                <div class="dots-rotating-dot dots-rot-3"></div>
                <div class="dots-rotating-dot dots-rot-4"></div>
                <div class="dots-rotating-dot dots-rot-5"></div>
                <div class="dots-rotating-dot dots-rot-6"></div>
              </div>
            </div>
          </div>
        </div>
      `,
      customStyles: `
        /* Bouncing Balls */
        .dots-bouncing-ball {
          width: 16px;
          height: 16px;
          border-radius: 50%;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          margin: 0 4px;
          animation: dots-bounce 0.6s infinite alternate cubic-bezier(0.68, -0.55, 0.265, 1.55);
        }

        .dots-ball-1 { animation-delay: 0s; }
        .dots-ball-2 { animation-delay: 0.1s; }
        .dots-ball-3 { animation-delay: 0.2s; }

        @keyframes dots-bounce {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(-40px);
          }
        }

        /* Pulsing Circles */
        .dots-pulse {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: #3b82f6;
          animation: dots-pulse-animation 1.5s ease-in-out infinite;
        }

        .dots-pulse-1 { animation-delay: 0s; }
        .dots-pulse-2 { animation-delay: 0.3s; }
        .dots-pulse-3 { animation-delay: 0.6s; }
        .dots-pulse-4 { animation-delay: 0.9s; }

        @keyframes dots-pulse-animation {
          0%, 100% {
            transform: scale(0.8);
            opacity: 0.5;
          }
          50% {
            transform: scale(1.2);
            opacity: 1;
          }
        }

        /* Wave Dots */
        .dots-wave {
          width: 8px;
          height: 40px;
          background: linear-gradient(180deg, #10b981 0%, #059669 100%);
          border-radius: 4px;
          animation: dots-wave-animation 1s ease-in-out infinite;
        }

        .dots-wave-1 { animation-delay: 0s; }
        .dots-wave-2 { animation-delay: 0.1s; }
        .dots-wave-3 { animation-delay: 0.2s; }
        .dots-wave-4 { animation-delay: 0.3s; }
        .dots-wave-5 { animation-delay: 0.4s; }

        @keyframes dots-wave-animation {
          0%, 100% {
            transform: scaleY(0.5);
          }
          50% {
            transform: scaleY(1);
          }
        }

        /* Fade Dots */
        .dots-fade {
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background: #f59e0b;
          animation: dots-fade-animation 1.2s ease-in-out infinite;
        }

        .dots-fade-1 { animation-delay: 0s; }
        .dots-fade-2 { animation-delay: 0.4s; }
        .dots-fade-3 { animation-delay: 0.8s; }

        @keyframes dots-fade-animation {
          0%, 100% {
            opacity: 0.2;
          }
          50% {
            opacity: 1;
          }
        }

        /* Elastic Scale */
        .dots-elastic {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: #ec4899;
          animation: dots-elastic-animation 1.5s cubic-bezier(0.68, -0.55, 0.265, 1.55) infinite;
        }

        .dots-elastic-1 { animation-delay: 0s; }
        .dots-elastic-2 { animation-delay: 0.2s; }
        .dots-elastic-3 { animation-delay: 0.4s; }
        .dots-elastic-4 { animation-delay: 0.6s; }

        @keyframes dots-elastic-animation {
          0%, 100% {
            transform: scale(0.5);
          }
          50% {
            transform: scale(1.3);
          }
        }

        /* Rotating Dots Circle */
        .dots-rotating-container {
          position: relative;
          width: 60px;
          height: 60px;
          animation: dots-container-rotate 2s linear infinite;
        }

        .dots-rotating-dot {
          position: absolute;
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: #8b5cf6;
          top: 50%;
          left: 50%;
          margin: -6px 0 0 -6px;
        }

        .dots-rot-1 { transform: rotate(0deg) translateY(-24px); }
        .dots-rot-2 { transform: rotate(60deg) translateY(-24px); }
        .dots-rot-3 { transform: rotate(120deg) translateY(-24px); }
        .dots-rot-4 { transform: rotate(180deg) translateY(-24px); }
        .dots-rot-5 { transform: rotate(240deg) translateY(-24px); }
        .dots-rot-6 { transform: rotate(300deg) translateY(-24px); }

        @keyframes dots-container-rotate {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `
    },

    // Variant 5: Advanced 3D Spinners
    {
      id: '3d-spinners',
      name: 'data.components.interactive.loading-animations.variants.3d-spinners.name',
      description: 'data.components.interactive.loading-animations.variants.3d-spinners.description',
      demoHTML: `
        <div class="w-full max-w-3xl space-y-16 p-6">
          <!-- Section 1: 3D Cube -->
          <div class="space-y-6">
            <h3 class="text-sm font-semibold text-gray-700">3D Cube Rotation</h3>
            <div class="flex justify-center items-center" style="perspective: 600px;">
              <div class="spinner-3d-cube">
                <div class="cube-face cube-front"></div>
                <div class="cube-face cube-back"></div>
                <div class="cube-face cube-left"></div>
                <div class="cube-face cube-right"></div>
                <div class="cube-face cube-top"></div>
                <div class="cube-face cube-bottom"></div>
              </div>
            </div>
          </div>

          <!-- Section 2: Orbital Rings -->
          <div class="space-y-6">
            <h3 class="text-sm font-semibold text-gray-700">Orbital Ring Spinner</h3>
            <div class="flex justify-center items-center" style="perspective: 800px;">
              <div class="spinner-orbital">
                <div class="orbital-ring orbital-ring-1"></div>
                <div class="orbital-ring orbital-ring-2"></div>
                <div class="orbital-ring orbital-ring-3"></div>
              </div>
            </div>
          </div>

          <!-- Section 3: Perspective Circles -->
          <div class="space-y-6">
            <h3 class="text-sm font-semibold text-gray-700">Perspective Circles</h3>
            <div class="flex justify-center items-center" style="perspective: 500px;">
              <div class="spinner-perspective">
                <div class="perspective-circle perspective-c1"></div>
                <div class="perspective-circle perspective-c2"></div>
                <div class="perspective-circle perspective-c3"></div>
              </div>
            </div>
          </div>

          <!-- Section 4: Flip Card -->
          <div class="space-y-6">
            <h3 class="text-sm font-semibold text-gray-700">Flip Card Loading</h3>
            <div class="flex justify-center items-center gap-4">
              <div class="flip-card flip-card-1"></div>
              <div class="flip-card flip-card-2"></div>
              <div class="flip-card flip-card-3"></div>
              <div class="flip-card flip-card-4"></div>
            </div>
          </div>

          <!-- Section 5: Sphere Rotation -->
          <div class="space-y-6">
            <h3 class="text-sm font-semibold text-gray-700">Sphere Rotation</h3>
            <div class="flex justify-center items-center" style="perspective: 600px;">
              <div class="spinner-sphere">
                <div class="sphere-ring sphere-ring-1"></div>
                <div class="sphere-ring sphere-ring-2"></div>
                <div class="sphere-ring sphere-ring-3"></div>
                <div class="sphere-ring sphere-ring-4"></div>
              </div>
            </div>
          </div>
        </div>
      `,
      customStyles: `
        /* 3D Cube Spinner */
        .spinner-3d-cube {
          position: relative;
          width: 60px;
          height: 60px;
          transform-style: preserve-3d;
          animation: cube-rotate 3s infinite linear;
        }

        .cube-face {
          position: absolute;
          width: 60px;
          height: 60px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          opacity: 0.9;
          border: 2px solid rgba(255, 255, 255, 0.3);
        }

        .cube-front { transform: translateZ(30px); }
        .cube-back { transform: rotateY(180deg) translateZ(30px); }
        .cube-left { transform: rotateY(-90deg) translateZ(30px); }
        .cube-right { transform: rotateY(90deg) translateZ(30px); }
        .cube-top { transform: rotateX(90deg) translateZ(30px); }
        .cube-bottom { transform: rotateX(-90deg) translateZ(30px); }

        @keyframes cube-rotate {
          0% { transform: rotateX(0) rotateY(0); }
          100% { transform: rotateX(360deg) rotateY(360deg); }
        }

        /* Orbital Ring Spinner */
        .spinner-orbital {
          position: relative;
          width: 80px;
          height: 80px;
          transform-style: preserve-3d;
        }

        .orbital-ring {
          position: absolute;
          width: 100%;
          height: 100%;
          border: 3px solid transparent;
          border-top-color: #3b82f6;
          border-radius: 50%;
          animation: orbital-spin 2s linear infinite;
        }

        .orbital-ring-1 {
          border-top-color: #3b82f6;
          animation-duration: 2s;
          transform: rotateY(0deg);
        }

        .orbital-ring-2 {
          border-top-color: #8b5cf6;
          animation-duration: 2.5s;
          transform: rotateY(60deg);
        }

        .orbital-ring-3 {
          border-top-color: #ec4899;
          animation-duration: 3s;
          transform: rotateY(120deg);
        }

        @keyframes orbital-spin {
          0% { transform: rotateZ(0deg); }
          100% { transform: rotateZ(360deg); }
        }

        /* Perspective Circles */
        .spinner-perspective {
          position: relative;
          width: 100px;
          height: 100px;
          transform-style: preserve-3d;
          animation: perspective-rotate 3s infinite linear;
        }

        .perspective-circle {
          position: absolute;
          width: 100%;
          height: 100%;
          border: 4px solid;
          border-radius: 50%;
          opacity: 0.7;
        }

        .perspective-c1 {
          border-color: #ef4444;
          transform: rotateY(0deg);
        }

        .perspective-c2 {
          border-color: #10b981;
          transform: rotateY(60deg);
        }

        .perspective-c3 {
          border-color: #3b82f6;
          transform: rotateY(120deg);
        }

        @keyframes perspective-rotate {
          0% { transform: rotateY(0deg) rotateX(45deg); }
          100% { transform: rotateY(360deg) rotateX(45deg); }
        }

        /* Flip Card Loading */
        .flip-card {
          width: 40px;
          height: 40px;
          background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
          border-radius: 8px;
          animation: flip-animation 1.5s ease-in-out infinite;
          transform-style: preserve-3d;
        }

        .flip-card-1 { animation-delay: 0s; }
        .flip-card-2 { animation-delay: 0.2s; }
        .flip-card-3 { animation-delay: 0.4s; }
        .flip-card-4 { animation-delay: 0.6s; }

        @keyframes flip-animation {
          0%, 100% {
            transform: rotateY(0deg);
          }
          50% {
            transform: rotateY(180deg);
          }
        }

        /* Sphere Rotation */
        .spinner-sphere {
          position: relative;
          width: 80px;
          height: 80px;
          transform-style: preserve-3d;
          animation: sphere-rotate 4s infinite linear;
        }

        .sphere-ring {
          position: absolute;
          width: 100%;
          height: 100%;
          border: 2px solid;
          border-radius: 50%;
          opacity: 0.6;
        }

        .sphere-ring-1 {
          border-color: #f59e0b;
          transform: rotateX(0deg);
        }

        .sphere-ring-2 {
          border-color: #8b5cf6;
          transform: rotateX(45deg);
        }

        .sphere-ring-3 {
          border-color: #ec4899;
          transform: rotateX(90deg);
        }

        .sphere-ring-4 {
          border-color: #3b82f6;
          transform: rotateX(135deg);
        }

        @keyframes sphere-rotate {
          0% { transform: rotateY(0deg) rotateZ(0deg); }
          100% { transform: rotateY(360deg) rotateZ(360deg); }
        }
      `
    }
  ]
};
