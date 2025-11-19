/**
 * Loading Skeleton Component Data
 * 加载骨架屏组件数据
 *
 * 包含 5 个不同风格的骨架屏设计:
 * 1. Card Skeleton - 卡片骨架屏 (Minimalism + Pulse)
 * 2. List Skeleton - 列表骨架屏 (Material Design + Wave)
 * 3. Table Skeleton - 表格骨架屏 (Glassmorphism + Shimmer)
 * 4. Dashboard Skeleton - 仪表板骨架屏 (Neumorphism + Multi-pulse)
 * 5. Form Skeleton - 表单骨架屏 (Cyberpunk + Glitch)
 */

export const loadingSkeletons = {
  id: 'loading-skeleton',
  title: 'data.components.navigation.loading-skeleton.title',
  description: 'data.components.navigation.loading-skeleton.description',

  variants: [
    // Variant 1: Card Skeleton - Minimalism + Pulse Animation
    {
      id: 'card-skeleton',
      name: 'data.components.navigation.loading-skeleton.variants.card.name',
      description: 'data.components.navigation.loading-skeleton.variants.card.description',
      demoHTML: `
        <div class="w-full max-w-md mx-auto p-6 bg-white rounded-xl shadow-sm">
          <!-- Profile Card Skeleton -->
          <div class="flex items-start gap-4 mb-6">
            <!-- Avatar -->
            <div class="skeleton-pulse w-16 h-16 bg-gray-200 rounded-full"></div>

            <!-- Content -->
            <div class="flex-1 space-y-3">
              <!-- Title -->
              <div class="skeleton-pulse h-4 bg-gray-200 rounded-md w-3/4"></div>
              <!-- Subtitle -->
              <div class="skeleton-pulse h-3 bg-gray-200 rounded-md w-1/2"></div>
            </div>
          </div>

          <!-- Paragraph Lines -->
          <div class="space-y-3 mb-6">
            <div class="skeleton-pulse h-3 bg-gray-200 rounded-md w-full"></div>
            <div class="skeleton-pulse h-3 bg-gray-200 rounded-md w-5/6"></div>
            <div class="skeleton-pulse h-3 bg-gray-200 rounded-md w-4/5"></div>
          </div>

          <!-- Image Placeholder -->
          <div class="skeleton-pulse h-48 bg-gray-200 rounded-lg mb-4"></div>

          <!-- Action Buttons -->
          <div class="flex gap-3">
            <div class="skeleton-pulse h-10 bg-gray-200 rounded-md flex-1"></div>
            <div class="skeleton-pulse h-10 bg-gray-200 rounded-md w-24"></div>
          </div>
        </div>
      `,
      customStyles: `
        @keyframes skeleton-pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }
        .skeleton-pulse {
          animation: skeleton-pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `
    },

    // Variant 2: List Skeleton - Material Design + Wave Animation
    {
      id: 'list-skeleton',
      name: 'data.components.navigation.loading-skeleton.variants.list.name',
      description: 'data.components.navigation.loading-skeleton.variants.list.description',
      demoHTML: `
        <div class="w-full max-w-2xl mx-auto bg-white rounded-xl shadow-sm overflow-hidden">
          <!-- List Header -->
          <div class="px-6 py-4 border-b border-gray-200">
            <div class="skeleton-wave h-6 bg-gray-200 rounded-md w-48"></div>
          </div>

          <!-- List Items -->
          <div class="divide-y divide-gray-200">
            <!-- Item 1 -->
            <div class="px-6 py-4 flex items-center gap-4">
              <div class="skeleton-wave w-10 h-10 bg-gray-200 rounded-md"></div>
              <div class="flex-1 space-y-2">
                <div class="skeleton-wave h-4 bg-gray-200 rounded-md w-3/4"></div>
                <div class="skeleton-wave h-3 bg-gray-200 rounded-md w-1/2"></div>
              </div>
              <div class="skeleton-wave w-6 h-6 bg-gray-200 rounded-full"></div>
            </div>

            <!-- Item 2 -->
            <div class="px-6 py-4 flex items-center gap-4">
              <div class="skeleton-wave w-10 h-10 bg-gray-200 rounded-md"></div>
              <div class="flex-1 space-y-2">
                <div class="skeleton-wave h-4 bg-gray-200 rounded-md w-2/3"></div>
                <div class="skeleton-wave h-3 bg-gray-200 rounded-md w-5/12"></div>
              </div>
              <div class="skeleton-wave w-6 h-6 bg-gray-200 rounded-full"></div>
            </div>

            <!-- Item 3 -->
            <div class="px-6 py-4 flex items-center gap-4">
              <div class="skeleton-wave w-10 h-10 bg-gray-200 rounded-md"></div>
              <div class="flex-1 space-y-2">
                <div class="skeleton-wave h-4 bg-gray-200 rounded-md w-4/5"></div>
                <div class="skeleton-wave h-3 bg-gray-200 rounded-md w-2/5"></div>
              </div>
              <div class="skeleton-wave w-6 h-6 bg-gray-200 rounded-full"></div>
            </div>

            <!-- Item 4 -->
            <div class="px-6 py-4 flex items-center gap-4">
              <div class="skeleton-wave w-10 h-10 bg-gray-200 rounded-md"></div>
              <div class="flex-1 space-y-2">
                <div class="skeleton-wave h-4 bg-gray-200 rounded-md w-3/5"></div>
                <div class="skeleton-wave h-3 bg-gray-200 rounded-md w-1/3"></div>
              </div>
              <div class="skeleton-wave w-6 h-6 bg-gray-200 rounded-full"></div>
            </div>
          </div>
        </div>
      `,
      customStyles: `
        @keyframes skeleton-wave {
          0% {
            background-position: -200px 0;
          }
          100% {
            background-position: calc(200px + 100%) 0;
          }
        }
        .skeleton-wave {
          background: linear-gradient(
            90deg,
            #e5e7eb 0px,
            #f3f4f6 40px,
            #e5e7eb 80px
          );
          background-size: 200px 100%;
          animation: skeleton-wave 1.5s ease-in-out infinite;
        }
      `
    },

    // Variant 3: Table Skeleton - Glassmorphism + Shimmer Animation
    {
      id: 'table-skeleton',
      name: 'data.components.navigation.loading-skeleton.variants.table.name',
      description: 'data.components.navigation.loading-skeleton.variants.table.description',
      demoHTML: `
        <div class="w-full max-w-4xl mx-auto p-6 rounded-xl overflow-hidden" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);">
          <div class="bg-white/10 backdrop-blur-lg rounded-lg overflow-hidden border border-white/20">
            <!-- Table Header -->
            <div class="px-6 py-4 border-b border-white/20 flex gap-4">
              <div class="skeleton-shimmer h-4 rounded-md flex-1" style="background: rgba(255,255,255,0.2);"></div>
              <div class="skeleton-shimmer h-4 rounded-md flex-1" style="background: rgba(255,255,255,0.2);"></div>
              <div class="skeleton-shimmer h-4 rounded-md flex-1" style="background: rgba(255,255,255,0.2);"></div>
              <div class="skeleton-shimmer h-4 rounded-md w-24" style="background: rgba(255,255,255,0.2);"></div>
            </div>

            <!-- Table Rows -->
            <div class="divide-y divide-white/10">
              <!-- Row 1 -->
              <div class="px-6 py-4 flex gap-4 items-center">
                <div class="skeleton-shimmer h-3 rounded-md flex-1" style="background: rgba(255,255,255,0.15);"></div>
                <div class="skeleton-shimmer h-3 rounded-md flex-1" style="background: rgba(255,255,255,0.15);"></div>
                <div class="skeleton-shimmer h-3 rounded-md flex-1" style="background: rgba(255,255,255,0.15);"></div>
                <div class="skeleton-shimmer h-8 rounded-md w-24" style="background: rgba(255,255,255,0.15);"></div>
              </div>

              <!-- Row 2 -->
              <div class="px-6 py-4 flex gap-4 items-center">
                <div class="skeleton-shimmer h-3 rounded-md flex-1" style="background: rgba(255,255,255,0.15);"></div>
                <div class="skeleton-shimmer h-3 rounded-md flex-1" style="background: rgba(255,255,255,0.15);"></div>
                <div class="skeleton-shimmer h-3 rounded-md flex-1" style="background: rgba(255,255,255,0.15);"></div>
                <div class="skeleton-shimmer h-8 rounded-md w-24" style="background: rgba(255,255,255,0.15);"></div>
              </div>

              <!-- Row 3 -->
              <div class="px-6 py-4 flex gap-4 items-center">
                <div class="skeleton-shimmer h-3 rounded-md flex-1" style="background: rgba(255,255,255,0.15);"></div>
                <div class="skeleton-shimmer h-3 rounded-md flex-1" style="background: rgba(255,255,255,0.15);"></div>
                <div class="skeleton-shimmer h-3 rounded-md flex-1" style="background: rgba(255,255,255,0.15);"></div>
                <div class="skeleton-shimmer h-8 rounded-md w-24" style="background: rgba(255,255,255,0.15);"></div>
              </div>

              <!-- Row 4 -->
              <div class="px-6 py-4 flex gap-4 items-center">
                <div class="skeleton-shimmer h-3 rounded-md flex-1" style="background: rgba(255,255,255,0.15);"></div>
                <div class="skeleton-shimmer h-3 rounded-md flex-1" style="background: rgba(255,255,255,0.15);"></div>
                <div class="skeleton-shimmer h-3 rounded-md flex-1" style="background: rgba(255,255,255,0.15);"></div>
                <div class="skeleton-shimmer h-8 rounded-md w-24" style="background: rgba(255,255,255,0.15);"></div>
              </div>

              <!-- Row 5 -->
              <div class="px-6 py-4 flex gap-4 items-center">
                <div class="skeleton-shimmer h-3 rounded-md flex-1" style="background: rgba(255,255,255,0.15);"></div>
                <div class="skeleton-shimmer h-3 rounded-md flex-1" style="background: rgba(255,255,255,0.15);"></div>
                <div class="skeleton-shimmer h-3 rounded-md flex-1" style="background: rgba(255,255,255,0.15);"></div>
                <div class="skeleton-shimmer h-8 rounded-md w-24" style="background: rgba(255,255,255,0.15);"></div>
              </div>
            </div>
          </div>
        </div>
      `,
      customStyles: `
        @keyframes skeleton-shimmer {
          0% {
            background-position: -1000px 0;
          }
          100% {
            background-position: 1000px 0;
          }
        }
        .skeleton-shimmer {
          background-image: linear-gradient(
            90deg,
            rgba(255,255,255,0) 0%,
            rgba(255,255,255,0.3) 50%,
            rgba(255,255,255,0) 100%
          );
          background-size: 1000px 100%;
          animation: skeleton-shimmer 2s infinite;
        }
      `
    },

    // Variant 4: Dashboard Skeleton - Neumorphism + Multi-directional Pulse
    {
      id: 'dashboard-skeleton',
      name: 'data.components.navigation.loading-skeleton.variants.dashboard.name',
      description: 'data.components.navigation.loading-skeleton.variants.dashboard.description',
      demoHTML: `
        <div class="w-full max-w-5xl mx-auto p-6 bg-gray-100 rounded-xl">
          <!-- Stats Cards -->
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <!-- Card 1 -->
            <div class="p-6 bg-gray-100 rounded-xl neomorph-skeleton-box">
              <div class="skeleton-neomorph-pulse h-8 rounded-lg mb-4"></div>
              <div class="skeleton-neomorph-pulse h-12 rounded-lg mb-2"></div>
              <div class="skeleton-neomorph-pulse h-4 rounded-lg w-2/3"></div>
            </div>

            <!-- Card 2 -->
            <div class="p-6 bg-gray-100 rounded-xl neomorph-skeleton-box">
              <div class="skeleton-neomorph-pulse h-8 rounded-lg mb-4"></div>
              <div class="skeleton-neomorph-pulse h-12 rounded-lg mb-2"></div>
              <div class="skeleton-neomorph-pulse h-4 rounded-lg w-3/4"></div>
            </div>

            <!-- Card 3 -->
            <div class="p-6 bg-gray-100 rounded-xl neomorph-skeleton-box">
              <div class="skeleton-neomorph-pulse h-8 rounded-lg mb-4"></div>
              <div class="skeleton-neomorph-pulse h-12 rounded-lg mb-2"></div>
              <div class="skeleton-neomorph-pulse h-4 rounded-lg w-1/2"></div>
            </div>
          </div>

          <!-- Chart and Activity Grid -->
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <!-- Chart Placeholder -->
            <div class="p-6 bg-gray-100 rounded-xl neomorph-skeleton-box">
              <div class="skeleton-neomorph-pulse h-6 rounded-lg w-1/3 mb-6"></div>
              <div class="h-64 skeleton-neomorph-pulse rounded-lg flex items-end justify-between p-4 gap-2">
                <div class="skeleton-neomorph-pulse w-8 rounded-t-lg" style="height: 40%;"></div>
                <div class="skeleton-neomorph-pulse w-8 rounded-t-lg" style="height: 70%;"></div>
                <div class="skeleton-neomorph-pulse w-8 rounded-t-lg" style="height: 50%;"></div>
                <div class="skeleton-neomorph-pulse w-8 rounded-t-lg" style="height: 90%;"></div>
                <div class="skeleton-neomorph-pulse w-8 rounded-t-lg" style="height: 60%;"></div>
                <div class="skeleton-neomorph-pulse w-8 rounded-t-lg" style="height: 80%;"></div>
              </div>
            </div>

            <!-- Activity List -->
            <div class="p-6 bg-gray-100 rounded-xl neomorph-skeleton-box">
              <div class="skeleton-neomorph-pulse h-6 rounded-lg w-1/2 mb-6"></div>
              <div class="space-y-4">
                <div class="flex items-center gap-4">
                  <div class="skeleton-neomorph-pulse w-12 h-12 rounded-lg"></div>
                  <div class="flex-1 space-y-2">
                    <div class="skeleton-neomorph-pulse h-4 rounded-lg w-3/4"></div>
                    <div class="skeleton-neomorph-pulse h-3 rounded-lg w-1/2"></div>
                  </div>
                </div>
                <div class="flex items-center gap-4">
                  <div class="skeleton-neomorph-pulse w-12 h-12 rounded-lg"></div>
                  <div class="flex-1 space-y-2">
                    <div class="skeleton-neomorph-pulse h-4 rounded-lg w-2/3"></div>
                    <div class="skeleton-neomorph-pulse h-3 rounded-lg w-2/5"></div>
                  </div>
                </div>
                <div class="flex items-center gap-4">
                  <div class="skeleton-neomorph-pulse w-12 h-12 rounded-lg"></div>
                  <div class="flex-1 space-y-2">
                    <div class="skeleton-neomorph-pulse h-4 rounded-lg w-4/5"></div>
                    <div class="skeleton-neomorph-pulse h-3 rounded-lg w-1/3"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      `,
      customStyles: `
        .neomorph-skeleton-box {
          box-shadow:
            -8px -8px 16px rgba(255, 255, 255, 0.8),
            8px 8px 16px rgba(0, 0, 0, 0.15);
        }

        @keyframes neomorph-pulse {
          0%, 100% {
            background: linear-gradient(145deg, #e0e0e0, #f0f0f0);
            box-shadow:
              inset -4px -4px 8px rgba(255, 255, 255, 0.5),
              inset 4px 4px 8px rgba(0, 0, 0, 0.1);
          }
          50% {
            background: linear-gradient(145deg, #d5d5d5, #e8e8e8);
            box-shadow:
              inset -2px -2px 4px rgba(255, 255, 255, 0.5),
              inset 2px 2px 4px rgba(0, 0, 0, 0.1);
          }
        }
        .skeleton-neomorph-pulse {
          animation: neomorph-pulse 2s ease-in-out infinite;
        }
      `
    },

    // Variant 5: Form Skeleton - Cyberpunk + Glitch Animation
    {
      id: 'form-skeleton',
      name: 'data.components.navigation.loading-skeleton.variants.form.name',
      description: 'data.components.navigation.loading-skeleton.variants.form.description',
      demoHTML: `
        <div class="w-full max-w-lg mx-auto p-8 bg-gray-900 rounded-xl border-2 border-cyan-500 shadow-lg" style="box-shadow: 0 0 30px rgba(6, 182, 212, 0.5);">
          <!-- Form Title -->
          <div class="mb-8">
            <div class="skeleton-glitch h-8 rounded-md mb-2 cyber-bg"></div>
            <div class="skeleton-glitch h-4 rounded-md w-2/3 cyber-bg"></div>
          </div>

          <!-- Form Fields -->
          <div class="space-y-6">
            <!-- Field 1 -->
            <div>
              <div class="skeleton-glitch h-4 rounded-md w-24 mb-2 cyber-bg"></div>
              <div class="skeleton-glitch h-12 rounded-md w-full cyber-bg-input"></div>
            </div>

            <!-- Field 2 -->
            <div>
              <div class="skeleton-glitch h-4 rounded-md w-32 mb-2 cyber-bg"></div>
              <div class="skeleton-glitch h-12 rounded-md w-full cyber-bg-input"></div>
            </div>

            <!-- Field 3 -->
            <div>
              <div class="skeleton-glitch h-4 rounded-md w-28 mb-2 cyber-bg"></div>
              <div class="skeleton-glitch h-32 rounded-md w-full cyber-bg-input"></div>
            </div>

            <!-- Checkbox Group -->
            <div class="space-y-3">
              <div class="flex items-center gap-3">
                <div class="skeleton-glitch w-5 h-5 rounded cyber-bg"></div>
                <div class="skeleton-glitch h-4 rounded-md w-48 cyber-bg"></div>
              </div>
              <div class="flex items-center gap-3">
                <div class="skeleton-glitch w-5 h-5 rounded cyber-bg"></div>
                <div class="skeleton-glitch h-4 rounded-md w-40 cyber-bg"></div>
              </div>
            </div>

            <!-- Action Buttons -->
            <div class="flex gap-4 pt-4">
              <div class="skeleton-glitch h-12 rounded-md flex-1 cyber-bg-button"></div>
              <div class="skeleton-glitch h-12 rounded-md w-32 cyber-bg-button"></div>
            </div>
          </div>

          <!-- Neon Grid Background -->
          <div class="absolute inset-0 opacity-10 pointer-events-none" style="
            background-image:
              linear-gradient(rgba(6, 182, 212, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(6, 182, 212, 0.3) 1px, transparent 1px);
            background-size: 20px 20px;
          "></div>
        </div>
      `,
      customStyles: `
        .cyber-bg {
          background: linear-gradient(135deg, #0f172a, #1e293b);
          border: 1px solid rgba(6, 182, 212, 0.3);
        }
        .cyber-bg-input {
          background: linear-gradient(135deg, #0f172a, #1e293b);
          border: 1px solid rgba(6, 182, 212, 0.5);
          box-shadow: 0 0 10px rgba(6, 182, 212, 0.2);
        }
        .cyber-bg-button {
          background: linear-gradient(135deg, #0e7490, #06b6d4);
          border: 1px solid rgba(6, 182, 212, 0.8);
          box-shadow: 0 0 15px rgba(6, 182, 212, 0.4);
        }

        @keyframes skeleton-glitch {
          0%, 100% {
            opacity: 1;
            transform: translate(0);
          }
          10% {
            opacity: 0.8;
            transform: translate(-2px, 0);
          }
          20% {
            opacity: 0.9;
            transform: translate(2px, 0);
          }
          30% {
            opacity: 0.7;
            transform: translate(-1px, 1px);
          }
          40% {
            opacity: 1;
            transform: translate(1px, -1px);
          }
          50% {
            opacity: 0.85;
            transform: translate(0);
          }
          60% {
            opacity: 0.95;
            transform: translate(-1px, 0);
          }
          70% {
            opacity: 0.9;
            transform: translate(1px, 0);
          }
          80% {
            opacity: 1;
            transform: translate(0);
          }
        }
        .skeleton-glitch {
          animation: skeleton-glitch 3s ease-in-out infinite;
          position: relative;
        }

        /* Glow effect on hover */
        .skeleton-glitch:hover {
          box-shadow: 0 0 20px rgba(6, 182, 212, 0.6) !important;
        }
      `
    }
  ]
};
