// 特殊視圖組件 - Special View Components
export const specialComponents = [
  {
    id: 'empty-state',
    title: 'data.components.special.empty-state.title',
    description: 'data.components.special.empty-state.description',
    demoHTML: `
      <div class="w-full max-w-md">
        <div class="bg-white rounded-lg shadow-lg border border-gray-200 p-12 text-center">
          <div class="w-24 h-24 bg-gray-100 rounded-full mx-auto mb-6 flex items-center justify-center">
            <svg class="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v2a2 2 0 002 2H6a2 2 0 002-2v-2m2 4a2 2 0 012-2h2a2 2 0 012-2H6a2 2 0 01-2-2V2a2 2 0 012-2h2a2 2 0 012-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7a2 2 0 002 2h2a2 2 0 002-2v-2M8 3V1a2 2 0 00-2-2H6a2 2 0 00-2 2v8a2 2 0 002 2h2a2 2 0 002-2V5z"></path>
            </svg>
          </div>
          <h3 class="text-xl font-semibold text-gray-900 mb-2">{{t:demo.special.noData}}</h3>
          <p class="text-gray-600 mb-6">{{t:demo.special.noDataDesc}}</p>

          <div class="space-y-3">
            <button class="w-full bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600 transition-colors">
              {{t:demo.special.createProject}}
            </button>
            <button class="w-full border border-gray-300 text-gray-700 py-2 px-6 rounded-lg hover:bg-gray-50 transition-colors">
              {{t:demo.special.importTemplate}}
            </button>
          </div>
        </div>
      </div>
    `,
    customStyles: ''
  },
  {
    id: 'no-search-results',
    title: 'data.components.special.no-search-results.title',
    description: 'data.components.special.no-search-results.description',
    demoHTML: `
      <div class="w-full max-w-md">
        <div class="bg-white rounded-lg shadow-lg border border-gray-200 p-12 text-center">
          <div class="w-16 h-16 bg-gray-100 rounded-full mx-auto mb-6 flex items-center justify-center">
            <svg class="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
          </div>
          <h3 class="text-xl font-semibold text-gray-900 mb-2">{{t:demo.special.noResults}}</h3>
          <p class="text-gray-600 mb-6">{{t:demo.special.noResultsDesc}}</p>
          
          <div class="space-y-3">
            <div class="text-sm text-gray-700 mb-3">
              <p class="font-medium mb-1">{{t:demo.special.searchSuggestions}}</p>
              <div class="flex flex-wrap gap-2 justify-center">
                <span class="px-3 py-1 bg-gray-100 rounded-full text-sm">React</span>
                <span class="px-3 py-1 bg-gray-100 rounded-full text-sm">Vue</span>
                <span class="px-3 py-1 bg-gray-100 rounded-full text-sm">JavaScript</span>
              </div>
            </div>
            <button class="w-full bg-gray-100 text-gray-700 py-2 px-6 rounded-lg hover:bg-gray-200 transition-colors">
              {{t:demo.special.clearSearch}}
            </button>
          </div>
        </div>
      </div>
    `,
    customStyles: ''
  },
  {
    id: '404-error-page',
    title: 'data.components.special.404-error-page.title',
    description: 'data.components.special.404-error-page.description',
    demoHTML: `
      <div class="w-full max-w-lg">
        <div class="bg-white rounded-lg shadow-lg border border-gray-200 p-12 text-center">
          <div class="relative w-32 h-32 mx-auto mb-6">
            <div class="absolute inset-0 bg-gray-100 rounded-lg opacity-20"></div>
            <div class="relative flex items-center justify-center h-full">
              <span class="text-6xl font-bold text-gray-300">4</span>
              <span class="text-6xl font-bold text-gray-400">0</span>
              <span class="text-6xl font-bold text-gray-500">4</span>
            </div>
          </div>
 
          <h3 class="text-2xl font-bold text-gray-900 mb-2">{{t:demo.special.pageNotFound}}</h3>
          <p class="text-gray-600 mb-6">{{t:demo.special.pageNotFoundDesc}}</p>
 
          <div class="space-y-3">
            <p class="text-sm text-gray-700">
              {{t:demo.special.tryOptions}}
            </p>
            <ul class="text-left text-sm text-gray-600 space-y-1">
              <li>{{t:demo.special.checkUrl}}</li>
              <li>{{t:demo.special.returnPrev}}</li>
              <li>{{t:demo.special.contactAdmin}}</li>
            </ul>
 
            <div class="flex gap-3 justify-center">
              <button class="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors">
                {{t:demo.special.returnHome}}
              </button>
              <button class="border border-gray-300 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-50 transition-colors">
                {{t:demo.special.returnPrevPage}}
              </button>
            </div>
          </div>
        </div>
      </div>
    `,
    customStyles: ''
  },
  {
    id: '500-error-page',
    title: 'data.components.special.500-error-page.title',
    description: 'data.components.special.500-error-page.description',
    demoHTML: `
      <div class="w-full max-w-lg">
        <div class="bg-white rounded-lg shadow-lg border border-red-200 p-12 text-center">
          <div class="w-24 h-24 bg-red-100 rounded-full mx-auto mb-6 flex items-center justify-center">
            <svg class="w-12 h-12 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              <path stroke-linecap="round" stroke-lineround" stroke-width="2" d="M9.5 9c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-3 1.343-3 3-3zm6 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
          </div>

          <h3 class="text-2xl font-bold text-red-900 mb-2">{{t:demo.special.serverError}}</h3>
          <p class="text-gray-600 mb-6">{{t:demo.special.serverErrorDesc}}</p>

          <div class="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
            <p class="text-sm text-yellow-800">
              <strong>{{t:demo.special.errorCode}}:</strong> 500<br>
              <strong>{{t:demo.special.errorMessage}}:</strong> Internal Server Error
            </p>
          </div>

          <div class="space-y-3">
            <p class="text-sm text-gray-700">
              {{t:demo.special.monitoringFix}}
            </p>
            <ul class="text-left text-sm text-gray-600 space-y-1">
              <li>{{t:demo.special.refreshPage}}</li>
              <li>{{t:demo.special.checkStatus}}</li>
              <li>{{t:demo.special.contactSupport}}</li>
            </ul>

            <div class="flex gap-3 justify-center">
              <button class="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition-colors">
                {{t:demo.special.reload}}
              </button>
              <button class="border border-gray-300 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-50 transition-colors">
                {{t:demo.special.returnHome}}
              </button>
            </div>
          </div>
        </div>
      </div>
    `,
    customStyles: ''
  },
  {
    id: 'maintenance-mode',
    title: 'data.components.special.maintenance-mode.title',
    description: 'data.components.special.maintenance-mode.description',
    variants: [
      {
        id: 'minimalism',
        name: 'data.components.special.maintenance-mode.variants.minimalism.name',
        description: 'data.components.special.maintenance-mode.variants.minimalism.description',
        demoHTML: `
          <div class="w-full max-w-lg">
            <div class="bg-white border border-black p-12 text-center">
              <!-- Icon -->
              <div class="w-16 h-16 border-2 border-black mx-auto mb-6 flex items-center justify-center rounded-full">
                <svg class="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
              </div>

              <!-- Title -->
              <h3 class="text-3xl font-light tracking-tight mb-6">{{t:demo.special.maintenance.systemMaintenance}}</h3>
              
              <!-- Description -->
              <p class="text-gray-600 text-sm mb-8 leading-relaxed max-w-md mx-auto">
                {{t:demo.special.maintenance.weArePerforming}} / {{t:demo.special.maintenance.weArePerformingDesc}}
              </p>

              <!-- Countdown -->
              <div class="mb-8">
                <div class="inline-block border border-gray-300 px-8 py-4">
                  <div class="text-4xl font-light tracking-wider mb-1 maintenance-minimal-fade">02:45:30</div>
                  <div class="text-xs text-gray-500 uppercase tracking-widest">{{t:demo.special.maintenance.estimatedTime}} / {{t:demo.special.maintenance.estimatedTime}}</div>
                </div>
              </div>

              <!-- Progress -->
              <div class="mb-8 max-w-sm mx-auto">
                <div class="w-full h-px bg-gray-300 relative overflow-hidden">
                  <div class="absolute inset-y-0 left-0 bg-black maintenance-minimal-progress" style="width: 65%;"></div>
                </div>
                <div class="text-xs text-gray-500 mt-2">65% {{t:demo.special.maintenance.complete}} / {{t:demo.special.maintenance.complete}}</div>
              </div>

              <!-- Actions -->
              <div class="flex flex-col sm:flex-row gap-3 justify-center">
                <a href="javascript:void(0)" class="px-6 py-2 border border-black text-black hover:bg-black hover:text-white transition-colors duration-300 text-sm">
                  {{t:demo.special.maintenance.checkStatus}} / {{t:demo.special.maintenance.checkStatus}}
                </a>
                <a href="javascript:void(0)" class="px-6 py-2 border border-gray-300 text-gray-600 hover:border-black hover:text-black transition-colors duration-300 text-sm">
                  {{t:demo.special.maintenance.subscribe}} / {{t:demo.special.maintenance.subscribe}}
                </a>
              </div>
            </div>
          </div>
        `,
        customStyles: `
          @keyframes minimal-fade {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.5; }
          }
          .maintenance-minimal-fade {
            animation: minimal-fade 3s ease-in-out infinite;
          }
          .maintenance-minimal-progress {
            animation: minimal-fade 2s ease-in-out infinite;
          }
        `
      },
      {
        id: 'glassmorphism',
        name: 'data.components.special.maintenance-mode.variants.glassmorphism.name',
        description: 'data.components.special.maintenance-mode.variants.glassmorphism.description',
        demoHTML: `
          <div class="w-full max-w-lg maintenance-glass-wrapper" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 2rem; border-radius: 1.5rem;">
            <div class="maintenance-glass-card">
              <!-- Icon with glow -->
              <div class="maintenance-glass-icon-container">
                <div class="maintenance-glass-icon-glow"></div>
                <svg class="w-10 h-10 text-white relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
              </div>

              <!-- Title -->
              <h3 class="text-3xl font-bold text-white mb-2 maintenance-glass-float">{{t:demo.special.maintenance.underMaintenance}}</h3>
              <h3 class="text-2xl font-semibold text-white/90 mb-4">{{t:demo.special.maintenance.systemMaintenance}}</h3>
              
              <!-- Description -->
              <p class="text-white/80 text-sm mb-8 leading-relaxed">
                {{t:demo.special.maintenance.weAreUpgrading}}<br>
                {{t:demo.special.maintenance.weAreUpgradingDesc}}
              </p>

              <!-- Countdown Glass Card -->
              <div class="maintenance-glass-countdown">
                <div class="text-4xl font-bold text-white mb-2 maintenance-glass-pulse">01:30:00</div>
                <div class="text-xs text-white/70 uppercase tracking-wider">{{t:demo.special.maintenance.estimatedCompletion}} / {{t:demo.special.maintenance.estimatedCompletion}}</div>
                
                <!-- Progress Bar -->
                <div class="w-full h-2 bg-white/20 rounded-full mt-4 overflow-hidden">
                  <div class="h-full maintenance-glass-progress-bar"></div>
                </div>
              </div>

              <!-- Status Items -->
              <div class="grid grid-cols-3 gap-3 mb-6">
                <div class="maintenance-glass-stat">
                  <div class="text-xl font-bold text-white">85%</div>
                  <div class="text-xs text-white/70">{{t:demo.special.maintenance.complete}}<br>{{t:demo.special.maintenance.complete}}</div>
                </div>
                <div class="maintenance-glass-stat">
                  <div class="text-xl font-bold text-white">1.5h</div>
                  <div class="text-xs text-white/70">{{t:demo.special.maintenance.remaining}}<br>{{t:demo.special.maintenance.remaining}}</div>
                </div>
                <div class="maintenance-glass-stat">
                  <div class="text-xl font-bold text-emerald-300">●</div>
                  <div class="text-xs text-white/70">{{t:demo.special.maintenance.active}}<br>{{t:demo.special.maintenance.active}}</div>
                </div>
              </div>

              <!-- Actions -->
              <div class="flex flex-col sm:flex-row gap-3">
                <a href="javascript:void(0)" class="maintenance-glass-btn-primary">
                  {{t:demo.special.maintenance.checkStatus}} / {{t:demo.special.maintenance.checkStatus}}
                </a>
                <a href="javascript:void(0)" class="maintenance-glass-btn-secondary">
                  {{t:demo.special.maintenance.getUpdates}} / {{t:demo.special.maintenance.getUpdates}}
                </a>
              </div>
            </div>
          </div>
        `,
        customStyles: `
          .maintenance-glass-card {
            background: rgba(255, 255, 255, 0.15);
            backdrop-filter: blur(20px);
            -webkit-backdrop-filter: blur(20px);
            border: 1px solid rgba(255, 255, 255, 0.2);
            border-radius: 1.5rem;
            padding: 3rem;
            text-align: center;
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
          }

          .maintenance-glass-icon-container {
            position: relative;
            width: 5rem;
            height: 5rem;
            margin: 0 auto 2rem;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .maintenance-glass-icon-glow {
            position: absolute;
            inset: 0;
            background: radial-gradient(circle, rgba(255, 255, 255, 0.3), transparent);
            border-radius: 50%;
            animation: glass-icon-pulse 2s ease-in-out infinite;
          }

          @keyframes glass-icon-pulse {
            0%, 100% { transform: scale(1); opacity: 0.5; }
            50% { transform: scale(1.2); opacity: 0.8; }
          }

          .maintenance-glass-countdown {
            background: rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 255, 255, 0.2);
            border-radius: 1rem;
            padding: 2rem;
            margin-bottom: 2rem;
          }

          .maintenance-glass-pulse {
            animation: glass-text-pulse 2s ease-in-out infinite;
          }

          @keyframes glass-text-pulse {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.7; }
          }

          .maintenance-glass-progress-bar {
            width: 85%;
            background: linear-gradient(90deg, rgba(255, 255, 255, 0.8), rgba(16, 185, 129, 0.8));
            border-radius: 1rem;
            animation: glass-progress-glow 2s ease-in-out infinite;
            box-shadow: 0 0 20px rgba(255, 255, 255, 0.5);
          }

          @keyframes glass-progress-glow {
            0%, 100% { box-shadow: 0 0 20px rgba(255, 255, 255, 0.5); }
            50% { box-shadow: 0 0 30px rgba(16, 185, 129, 0.8); }
          }

          .maintenance-glass-stat {
            background: rgba(255, 255, 255, 0.08);
            backdrop-filter: blur(8px);
            border: 1px solid rgba(255, 255, 255, 0.15);
            border-radius: 0.75rem;
            padding: 1rem 0.5rem;
            transition: all 0.3s ease;
          }

          .maintenance-glass-stat:hover {
            background: rgba(255, 255, 255, 0.15);
            transform: translateY(-2px);
          }

          .maintenance-glass-btn-primary {
            flex: 1;
            padding: 0.75rem 1.5rem;
            background: rgba(255, 255, 255, 0.25);
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 255, 255, 0.3);
            border-radius: 0.75rem;
            color: white;
            font-weight: 600;
            font-size: 0.875rem;
            text-align: center;
            transition: all 0.3s ease;
          }

          .maintenance-glass-btn-primary:hover {
            background: rgba(255, 255, 255, 0.35);
            transform: translateY(-2px);
            box-shadow: 0 8px 20px rgba(255, 255, 255, 0.2);
          }

          .maintenance-glass-btn-secondary {
            flex: 1;
            padding: 0.75rem 1.5rem;
            background: transparent;
            border: 1px solid rgba(255, 255, 255, 0.3);
            border-radius: 0.75rem;
            color: white;
            font-weight: 600;
            font-size: 0.875rem;
            text-align: center;
            transition: all 0.3s ease;
          }

          .maintenance-glass-btn-secondary:hover {
            background: rgba(255, 255, 255, 0.1);
            border-color: rgba(255, 255, 255, 0.5);
            transform: translateY(-2px);
          }

          .maintenance-glass-float {
            animation: glass-float 3s ease-in-out infinite;
          }

          @keyframes glass-float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-5px); }
          }
        `
      },
      {
        id: 'cyberpunk',
        name: 'data.components.special.maintenance-mode.variants.cyberpunk.name',
        description: 'data.components.special.maintenance-mode.variants.cyberpunk.description',
        demoHTML: `
          <div class="w-full max-w-2xl maintenance-cyber-wrapper">
            <!-- Background Matrix Effect -->
            <div class="maintenance-cyber-matrix">
              <div class="maintenance-cyber-matrix-col" style="left: 10%; animation-delay: 0s;">01010<br>11001<br>00110</div>
              <div class="maintenance-cyber-matrix-col" style="left: 30%; animation-delay: 1s;">10101<br>01100<br>11001</div>
              <div class="maintenance-cyber-matrix-col" style="left: 50%; animation-delay: 0.5s;">11110<br>00001<br>10011</div>
              <div class="maintenance-cyber-matrix-col" style="left: 70%; animation-delay: 1.5s;">01011<br>10100<br>01010</div>
              <div class="maintenance-cyber-matrix-col" style="left: 90%; animation-delay: 0.8s;">11001<br>00110<br>11100</div>
            </div>

            <!-- Main Terminal -->
            <div class="maintenance-cyber-terminal">
              <!-- Terminal Header -->
              <div class="maintenance-cyber-header">
                <div class="flex items-center gap-2">
                  <span class="maintenance-cyber-dot" style="background: #00ff41;"></span>
                  <span class="maintenance-cyber-dot" style="background: #00ffff;"></span>
                  <span class="maintenance-cyber-dot" style="background: #555;"></span>
                </div>
                <span class="maintenance-cyber-title">SYSTEM_MAINTENANCE.exe</span>
              </div>

              <!-- Terminal Body -->
              <div class="maintenance-cyber-body">
                <!-- Status Lines -->
                <div class="mb-4">
                  <div class="maintenance-cyber-line">[<span class="text-cyan-400">SYSTEM</span>] Initializing maintenance protocol...</div>
                  <div class="maintenance-cyber-line">[<span class="text-green-400">STATUS</span>] <span class="maintenance-cyber-blink">█</span> {{t:demo.special.maintenance.active}}</div>
                  <div class="maintenance-cyber-line">[<span class="text-cyan-400">NOTICE</span>] {{t:demo.special.maintenance.systemMaintenance}} / {{t:demo.special.maintenance.underMaintenance}}</div>
                </div>

                <!-- Info Grid -->
                <div class="grid grid-cols-2 gap-4 mb-4">
                  <div class="maintenance-cyber-panel">
                    <div class="text-xs text-cyan-400 mb-1">[CPU USAGE]</div>
                    <div class="text-2xl font-mono font-bold text-green-400 maintenance-cyber-glitch">78<span class="text-sm">%</span></div>
                  </div>
                  <div class="maintenance-cyber-panel">
                    <div class="text-xs text-cyan-400 mb-1">[TIME LEFT / {{t:demo.special.maintenance.remaining}}]</div>
                    <div class="text-2xl font-mono font-bold text-green-400 maintenance-cyber-glitch">01:45:30</div>
                  </div>
                  <div class="maintenance-cyber-panel">
                    <div class="text-xs text-cyan-400 mb-1">[PROGRESS / {{t:demo.special.maintenance.progress}}]</div>
                    <div class="text-2xl font-mono font-bold text-green-400">72<span class="text-sm">%</span></div>
                  </div>
                  <div class="maintenance-cyber-panel">
                    <div class="text-xs text-cyan-400 mb-1">[SECURITY]</div>
                    <div class="text-2xl font-mono font-bold text-green-400">OK</div>
                  </div>
                </div>

                <!-- Progress Bar -->
                <div class="mb-4">
                  <div class="flex justify-between text-xs text-cyan-400 mb-1">
                    <span>[MAINTENANCE_PROGRESS]</span>
                    <span>72%</span>
                  </div>
                  <div class="maintenance-cyber-progress-track">
                    <div class="maintenance-cyber-progress-fill" style="width: 72%;"></div>
                  </div>
                </div>

                <!-- Status Log -->
                <div class="maintenance-cyber-log mb-4">
                  <div class="text-xs">[2024-01-15 14:30:25] Database optimization... <span class="text-green-400">DONE</span></div>
                  <div class="text-xs">[2024-01-15 14:35:12] Cache clearing... <span class="text-green-400">DONE</span></div>
                  <div class="text-xs">[2024-01-15 14:40:58] Server reboot... <span class="text-cyan-400">IN_PROGRESS</span></div>
                  <div class="text-xs">[2024-01-15 14:45:00] System verification... <span class="text-gray-500">PENDING</span></div>
                </div>

                <!-- Command Prompt -->
                <div class="maintenance-cyber-line mb-4">
                  <span class="text-green-400">root@system:~#</span> <span class="maintenance-cyber-cursor">█</span>
                </div>

                <!-- Action Buttons -->
                <div class="flex gap-3">
                  <a href="javascript:void(0)" class="maintenance-cyber-btn">
                    [STATUS_CHECK / {{t:demo.special.maintenance.checkStatusBtn}}]
                  </a>
                  <a href="javascript:void(0)" class="maintenance-cyber-btn-alt">
                    [SUBSCRIBE / {{t:demo.special.maintenance.subscribe}}]
                  </a>
                </div>
              </div>
            </div>

            <!-- Scanline Effect -->
            <div class="maintenance-cyber-scanline"></div>
          </div>
        `,
        customStyles: `
          .maintenance-cyber-wrapper {
            position: relative;
            background: #0a0a0a;
            border-radius: 0;
            padding: 2rem;
            overflow: hidden;
          }

          /* Matrix Background */
          .maintenance-cyber-matrix {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            pointer-events: none;
            font-family: 'Courier New', monospace;
            font-size: 10px;
            color: #00ff41;
            opacity: 0.15;
            overflow: hidden;
          }

          .maintenance-cyber-matrix-col {
            position: absolute;
            top: -20%;
            line-height: 1.2;
            animation: cyber-matrix-fall 8s linear infinite;
          }

          @keyframes cyber-matrix-fall {
            0% { transform: translateY(0); opacity: 0; }
            10% { opacity: 1; }
            90% { opacity: 1; }
            100% { transform: translateY(600px); opacity: 0; }
          }

          /* Terminal */
          .maintenance-cyber-terminal {
            position: relative;
            z-index: 2;
            background: rgba(0, 0, 0, 0.9);
            border: 1px solid #00ff41;
            box-shadow: 0 0 20px rgba(0, 255, 65, 0.3), inset 0 0 20px rgba(0, 255, 65, 0.05);
          }

          .maintenance-cyber-header {
            background: rgba(0, 255, 65, 0.1);
            border-bottom: 1px solid #00ff41;
            padding: 0.75rem 1rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
          }

          .maintenance-cyber-dot {
            width: 10px;
            height: 10px;
            border-radius: 50%;
            display: inline-block;
          }

          .maintenance-cyber-title {
            font-family: 'Courier New', monospace;
            font-size: 0.75rem;
            color: #00ff41;
            font-weight: 700;
          }

          .maintenance-cyber-body {
            padding: 1.5rem;
            font-family: 'Courier New', monospace;
            color: #00ff41;
            font-size: 0.875rem;
          }

          .maintenance-cyber-line {
            margin-bottom: 0.5rem;
            line-height: 1.5;
          }

          .maintenance-cyber-blink {
            animation: cyber-blink 1s infinite;
          }

          @keyframes cyber-blink {
            0%, 49% { opacity: 1; }
            50%, 100% { opacity: 0; }
          }

          .maintenance-cyber-panel {
            background: rgba(0, 255, 65, 0.05);
            border: 1px solid rgba(0, 255, 65, 0.3);
            padding: 0.75rem;
            transition: all 0.3s ease;
          }

          .maintenance-cyber-panel:hover {
            background: rgba(0, 255, 65, 0.1);
            box-shadow: 0 0 15px rgba(0, 255, 65, 0.3);
          }

          .maintenance-cyber-glitch {
            animation: cyber-glitch 3s infinite;
          }

          @keyframes cyber-glitch {
            0%, 90%, 100% { transform: translate(0); }
            92% { transform: translate(-2px, 1px); }
            94% { transform: translate(2px, -1px); }
            96% { transform: translate(-1px, 2px); }
            98% { transform: translate(1px, -2px); }
          }

          .maintenance-cyber-progress-track {
            width: 100%;
            height: 0.5rem;
            background: rgba(0, 255, 65, 0.2);
            border: 1px solid rgba(0, 255, 65, 0.3);
            position: relative;
            overflow: hidden;
          }

          .maintenance-cyber-progress-fill {
            height: 100%;
            background: #00ff41;
            box-shadow: 0 0 10px #00ff41;
            animation: cyber-progress-pulse 2s ease-in-out infinite;
          }

          @keyframes cyber-progress-pulse {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.7; }
          }

          .maintenance-cyber-log {
            background: rgba(0, 0, 0, 0.5);
            border: 1px solid rgba(0, 255, 65, 0.2);
            padding: 0.75rem;
            max-height: 100px;
            overflow-y: auto;
            font-size: 0.75rem;
            line-height: 1.8;
          }

          .maintenance-cyber-cursor {
            animation: cyber-blink 1s infinite;
          }

          .maintenance-cyber-btn {
            flex: 1;
            padding: 0.75rem 1rem;
            background: rgba(0, 255, 65, 0.1);
            border: 1px solid #00ff41;
            color: #00ff41;
            font-family: 'Courier New', monospace;
            font-size: 0.75rem;
            font-weight: 700;
            text-align: center;
            transition: all 0.3s ease;
            text-shadow: 0 0 8px rgba(0, 255, 65, 0.5);
          }

          .maintenance-cyber-btn:hover {
            background: rgba(0, 255, 65, 0.2);
            box-shadow: 0 0 20px rgba(0, 255, 65, 0.5);
          }

          .maintenance-cyber-btn-alt {
            flex: 1;
            padding: 0.75rem 1rem;
            background: transparent;
            border: 1px solid rgba(0, 255, 255, 0.5);
            color: #00ffff;
            font-family: 'Courier New', monospace;
            font-size: 0.75rem;
            font-weight: 700;
            text-align: center;
            transition: all 0.3s ease;
          }

          .maintenance-cyber-btn-alt:hover {
            background: rgba(0, 255, 255, 0.1);
            border-color: #00ffff;
            box-shadow: 0 0 20px rgba(0, 255, 255, 0.3);
          }

          /* Scanline Effect */
          .maintenance-cyber-scanline {
            position: absolute;
            inset: 0;
            pointer-events: none;
            background: linear-gradient(transparent 50%, rgba(0, 255, 65, 0.03) 50%);
            background-size: 100% 4px;
            animation: cyber-scan 8s linear infinite;
            z-index: 10;
          }

          @keyframes cyber-scan {
            0% { transform: translateY(0); }
            100% { transform: translateY(100%); }
          }
        `
      },
      {
        id: 'neumorphism',
        name: 'data.components.special.maintenance-mode.variants.neumorphism.name',
        description: 'data.components.special.maintenance-mode.variants.neumorphism.description',
        demoHTML: `
          <div class="w-full max-w-lg maintenance-neuro-wrapper">
            <div class="maintenance-neuro-card">
              <!-- Icon -->
              <div class="maintenance-neuro-icon-container">
                <div class="maintenance-neuro-icon">
                  <svg class="w-10 h-10 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                </div>
              </div>

              <!-- Title -->
              <h3 class="text-3xl font-semibold text-gray-700 mb-2">{{t:demo.special.maintenance.underMaintenance}}</h3>
              <h3 class="text-2xl font-medium text-gray-600 mb-6">{{t:demo.special.maintenance.systemMaintenance}}</h3>
              
              <!-- Description -->
              <p class="text-gray-500 text-sm mb-8 leading-relaxed max-w-md mx-auto">
                {{t:demo.special.maintenance.weArePerforming}}<br>
                {{t:demo.special.maintenance.weArePerformingDesc}}
              </p>

              <!-- Countdown Panel -->
              <div class="maintenance-neuro-countdown-panel mb-6">
                <div class="text-4xl font-bold text-gray-700 mb-2 maintenance-neuro-pulse">02:15:45</div>
                <div class="text-xs text-gray-500 uppercase tracking-wide">{{t:demo.special.maintenance.estimatedTime}} / {{t:demo.special.maintenance.estimatedTime}}</div>
              </div>

              <!-- Stats Grid -->
              <div class="grid grid-cols-3 gap-4 mb-6">
                <div class="maintenance-neuro-stat">
                  <div class="text-2xl font-bold text-gray-700">78%</div>
                  <div class="text-xs text-gray-500 mt-1">{{t:demo.special.maintenance.complete}}<br>{{t:demo.special.maintenance.complete}}</div>
                </div>
                <div class="maintenance-neuro-stat">
                  <div class="text-2xl font-bold text-gray-700">2.2h</div>
                  <div class="text-xs text-gray-500 mt-1">{{t:demo.special.maintenance.remaining}}<br>{{t:demo.special.maintenance.remaining}}</div>
                </div>
                <div class="maintenance-neuro-stat">
                  <div class="w-4 h-4 rounded-full bg-green-400 mx-auto mb-1 maintenance-neuro-pulse"></div>
                  <div class="text-xs text-gray-500">{{t:demo.special.maintenance.active}}<br>{{t:demo.special.maintenance.active}}</div>
                </div>
              </div>

              <!-- Progress Bar -->
              <div class="maintenance-neuro-progress-container mb-8">
                <div class="flex justify-between text-xs text-gray-500 mb-2">
                  <span>{{t:demo.special.maintenance.progress}} / {{t:demo.special.maintenance.progress}}</span>
                  <span>78%</span>
                </div>
                <div class="maintenance-neuro-progress-track">
                  <div class="maintenance-neuro-progress-bar" style="width: 78%;"></div>
                </div>
              </div>

              <!-- Action Buttons -->
              <div class="flex flex-col sm:flex-row gap-4">
                <a href="javascript:void(0)" class="maintenance-neuro-btn-primary">
                  {{t:demo.special.maintenance.checkStatus}} / {{t:demo.special.maintenance.checkStatus}}
                </a>
                <a href="javascript:void(0)" class="maintenance-neuro-btn-secondary">
                  {{t:demo.special.maintenance.getUpdates}} / {{t:demo.special.maintenance.getUpdates}}
                </a>
              </div>
            </div>
          </div>
        `,
        customStyles: `
          .maintenance-neuro-wrapper {
            background: #e0e5ec;
            padding: 2rem;
            border-radius: 2rem;
          }

          .maintenance-neuro-card {
            background: #e0e5ec;
            border-radius: 2rem;
            padding: 3rem 2rem;
            text-align: center;
            box-shadow: 
              12px 12px 24px rgba(163, 177, 198, 0.6),
              -12px -12px 24px rgba(255, 255, 255, 0.9);
          }

          .maintenance-neuro-icon-container {
            margin-bottom: 2rem;
            display: flex;
            justify-content: center;
          }

          .maintenance-neuro-icon {
            width: 5rem;
            height: 5rem;
            background: #e0e5ec;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            box-shadow: 
              8px 8px 16px rgba(163, 177, 198, 0.6),
              -8px -8px 16px rgba(255, 255, 255, 0.9);
            animation: neuro-icon-float 3s ease-in-out infinite;
          }

          @keyframes neuro-icon-float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
          }

          .maintenance-neuro-countdown-panel {
            background: #e0e5ec;
            border-radius: 1.5rem;
            padding: 2rem;
            box-shadow: 
              inset 6px 6px 12px rgba(163, 177, 198, 0.4),
              inset -6px -6px 12px rgba(255, 255, 255, 0.5);
          }

          .maintenance-neuro-pulse {
            animation: neuro-pulse 2s ease-in-out infinite;
          }

          @keyframes neuro-pulse {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.7; }
          }

          .maintenance-neuro-stat {
            background: #e0e5ec;
            border-radius: 1rem;
            padding: 1rem;
            box-shadow: 
              6px 6px 12px rgba(163, 177, 198, 0.5),
              -6px -6px 12px rgba(255, 255, 255, 0.8);
            transition: all 0.3s ease;
          }

          .maintenance-neuro-stat:hover {
            box-shadow: 
              4px 4px 8px rgba(163, 177, 198, 0.5),
              -4px -4px 8px rgba(255, 255, 255, 0.8);
          }

          .maintenance-neuro-progress-track {
            width: 100%;
            height: 0.75rem;
            background: #e0e5ec;
            border-radius: 1rem;
            box-shadow: 
              inset 3px 3px 6px rgba(163, 177, 198, 0.5),
              inset -3px -3px 6px rgba(255, 255, 255, 0.5);
            overflow: hidden;
          }

          .maintenance-neuro-progress-bar {
            height: 100%;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            border-radius: 1rem;
            box-shadow: 
              2px 2px 4px rgba(102, 126, 234, 0.4);
            animation: neuro-progress-glow 2s ease-in-out infinite;
          }

          @keyframes neuro-progress-glow {
            0%, 100% { box-shadow: 2px 2px 4px rgba(102, 126, 234, 0.4); }
            50% { box-shadow: 3px 3px 8px rgba(102, 126, 234, 0.6); }
          }

          .maintenance-neuro-btn-primary {
            flex: 1;
            padding: 1rem 2rem;
            background: #e0e5ec;
            border-radius: 1rem;
            color: #667eea;
            font-weight: 600;
            font-size: 0.875rem;
            text-align: center;
            box-shadow: 
              6px 6px 12px rgba(163, 177, 198, 0.5),
              -6px -6px 12px rgba(255, 255, 255, 0.8);
            transition: all 0.3s ease;
          }

          .maintenance-neuro-btn-primary:hover {
            box-shadow: 
              inset 3px 3px 6px rgba(163, 177, 198, 0.4),
              inset -3px -3px 6px rgba(255, 255, 255, 0.5);
          }

          .maintenance-neuro-btn-primary:active {
            box-shadow: 
              inset 4px 4px 8px rgba(163, 177, 198, 0.5),
              inset -4px -4px 8px rgba(255, 255, 255, 0.6);
          }

          .maintenance-neuro-btn-secondary {
            flex: 1;
            padding: 1rem 2rem;
            background: #e0e5ec;
            border-radius: 1rem;
            color: #6b7280;
            font-weight: 600;
            font-size: 0.875rem;
            text-align: center;
            box-shadow: 
              6px 6px 12px rgba(163, 177, 198, 0.5),
              -6px -6px 12px rgba(255, 255, 255, 0.8);
            transition: all 0.3s ease;
          }

          .maintenance-neuro-btn-secondary:hover {
            box-shadow: 
              inset 3px 3px 6px rgba(163, 177, 198, 0.4),
              inset -3px -3px 6px rgba(255, 255, 255, 0.5);
          }

          .maintenance-neuro-btn-secondary:active {
            box-shadow: 
              inset 4px 4px 8px rgba(163, 177, 198, 0.5),
              inset -4px -4px 8px rgba(255, 255, 255, 0.6);
          }
        `
      },
      {
        id: 'neobrutalism',
        name: 'data.components.special.maintenance-mode.variants.neobrutalism.name',
        description: 'data.components.special.maintenance-mode.variants.neobrutalism.description',
        demoHTML: `
          <div class="w-full max-w-lg maintenance-brutal-wrapper">
            <div class="maintenance-brutal-card">
              <!-- Icon -->
              <div class="maintenance-brutal-icon-box">
                <svg class="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
              </div>

              <!-- Title -->
              <h3 class="text-4xl font-black uppercase mb-2 maintenance-brutal-tilt-right">MAINTENANCE!</h3>
              <h3 class="text-3xl font-black mb-6 maintenance-brutal-tilt-left">{{t:demo.special.maintenance.systemMaintenance}}!</h3>
              
              <!-- Alert Box -->
              <div class="maintenance-brutal-alert mb-6">
                <div class="text-lg font-bold mb-2">⚠️ {{t:demo.special.maintenance.systemUpgrade}} IN PROGRESS</div>
                <div class="text-sm">{{t:demo.special.maintenance.systemUpgradeDesc}} / {{t:demo.special.maintenance.weAreMaking}}</div>
              </div>

              <!-- Time Boxes -->
              <div class="grid grid-cols-3 gap-4 mb-6">
                <div class="maintenance-brutal-time-box maintenance-brutal-tilt-right">
                  <div class="text-4xl font-black">02</div>
                  <div class="text-xs font-bold mt-1">{{t:demo.special.maintenance.hours}}<br>{{t:demo.special.maintenance.hours}}</div>
                </div>
                <div class="maintenance-brutal-time-box">
                  <div class="text-4xl font-black">30</div>
                  <div class="text-xs font-bold mt-1">{{t:demo.special.maintenance.minutes}}<br>{{t:demo.special.maintenance.minutes}}</div>
                </div>
                <div class="maintenance-brutal-time-box maintenance-brutal-tilt-left">
                  <div class="text-4xl font-black">15</div>
                  <div class="text-xs font-bold mt-1">{{t:demo.special.maintenance.seconds}}<br>{{t:demo.special.maintenance.seconds}}</div>
                </div>
              </div>

              <!-- Progress Box -->
              <div class="maintenance-brutal-progress-box mb-6">
                <div class="flex justify-between items-center mb-2">
                  <span class="text-sm font-black uppercase">{{t:demo.special.maintenance.progress}} / {{t:demo.special.maintenance.progress}}</span>
                  <span class="text-2xl font-black">68%</span>
                </div>
                <div class="maintenance-brutal-progress-track">
                  <div class="maintenance-brutal-progress-fill" style="width: 68%;"></div>
                </div>
              </div>

              <!-- Status Tags -->
              <div class="flex flex-wrap gap-3 mb-8 justify-center">
                <div class="maintenance-brutal-tag-yellow">
                  ⚡ FAST
                </div>
                <div class="maintenance-brutal-tag-pink">
                  🔧 FIXING
                </div>
                <div class="maintenance-brutal-tag-cyan">
                  ✨ IMPROVING
                </div>
              </div>

              <!-- Action Buttons -->
              <div class="flex flex-col sm:flex-row gap-4">
                <a href="javascript:void(0)" class="maintenance-brutal-btn-primary">
                  {{t:demo.special.maintenance.checkStatusBtn}}
                  <br><span class="text-xs">{{t:demo.special.maintenance.checkStatus}}</span>
                </a>
                <a href="javascript:void(0)" class="maintenance-brutal-btn-secondary">
                  {{t:demo.special.maintenance.getNotifiedBtn}}
                  <br><span class="text-xs">{{t:demo.special.maintenance.getNotifiedBtn}}</span>
                </a>
              </div>
            </div>
          </div>
        `,
        customStyles: `
          .maintenance-brutal-wrapper {
            background: linear-gradient(135deg, #FEF3C7 0%, #FDE68A 100%);
            padding: 2rem;
            border: 5px solid black;
            box-shadow: 12px 12px 0 black;
          }

          .maintenance-brutal-card {
            background: white;
            border: 5px solid black;
            padding: 3rem 2rem;
            text-align: center;
            position: relative;
            box-shadow: 8px 8px 0 black;
          }

          .maintenance-brutal-icon-box {
            width: 5rem;
            height: 5rem;
            margin: 0 auto 2rem;
            background: #FDE047;
            border: 4px solid black;
            display: flex;
            align-items: center;
            justify-content: center;
            transform: rotate(-5deg);
            box-shadow: 6px 6px 0 black;
            animation: brutal-icon-bounce 2s ease-in-out infinite;
          }

          @keyframes brutal-icon-bounce {
            0%, 100% { transform: rotate(-5deg) translateY(0); }
            50% { transform: rotate(-5deg) translateY(-10px); }
          }

          .maintenance-brutal-tilt-right {
            transform: rotate(2deg);
          }

          .maintenance-brutal-tilt-left {
            transform: rotate(-2deg);
          }

          .maintenance-brutal-alert {
            background: #FDE047;
            border: 4px solid black;
            padding: 1.5rem;
            transform: rotate(-1deg);
            box-shadow: 6px 6px 0 black;
            animation: brutal-alert-shake 3s ease-in-out infinite;
          }

          @keyframes brutal-alert-shake {
            0%, 90%, 100% { transform: rotate(-1deg); }
            92%, 96% { transform: rotate(1deg); }
            94%, 98% { transform: rotate(-1deg); }
          }

          .maintenance-brutal-time-box {
            background: #FDE047;
            border: 4px solid black;
            padding: 1.5rem 1rem;
            box-shadow: 5px 5px 0 black;
            transition: all 0.3s ease;
          }

          .maintenance-brutal-time-box:hover {
            transform: translateY(-5px);
            box-shadow: 5px 10px 0 black;
          }

          .maintenance-brutal-progress-box {
            background: #FEF3C7;
            border: 4px solid black;
            padding: 1.5rem;
            transform: rotate(1deg);
            box-shadow: 6px 6px 0 black;
          }

          .maintenance-brutal-progress-track {
            width: 100%;
            height: 1.5rem;
            background: white;
            border: 3px solid black;
            position: relative;
            overflow: hidden;
          }

          .maintenance-brutal-progress-fill {
            height: 100%;
            background: linear-gradient(90deg, #F472B6, #EC4899);
            border-right: 3px solid black;
            animation: brutal-progress-slide 3s ease-in-out infinite;
          }

          @keyframes brutal-progress-slide {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.8; }
          }

          .maintenance-brutal-tag-yellow {
            background: #FDE047;
            border: 3px solid black;
            padding: 0.5rem 1rem;
            font-size: 0.875rem;
            font-weight: 900;
            transform: rotate(-3deg);
            box-shadow: 3px 3px 0 black;
          }

          .maintenance-brutal-tag-pink {
            background: #F472B6;
            border: 3px solid black;
            padding: 0.5rem 1rem;
            font-size: 0.875rem;
            font-weight: 900;
            transform: rotate(2deg);
            box-shadow: 3px 3px 0 black;
          }

          .maintenance-brutal-tag-cyan {
            background: #67E8F9;
            border: 3px solid black;
            padding: 0.5rem 1rem;
            font-size: 0.875rem;
            font-weight: 900;
            transform: rotate(-2deg);
            box-shadow: 3px 3px 0 black;
          }

          .maintenance-brutal-btn-primary {
            flex: 1;
            padding: 1rem 2rem;
            background: #F472B6;
            border: 4px solid black;
            color: black;
            font-weight: 900;
            font-size: 0.875rem;
            text-align: center;
            text-transform: uppercase;
            transform: rotate(-2deg);
            box-shadow: 6px 6px 0 black;
            transition: all 0.3s ease;
          }

          .maintenance-brutal-btn-primary:hover {
            transform: rotate(-2deg) translateY(-5px);
            box-shadow: 6px 11px 0 black;
          }

          .maintenance-brutal-btn-primary:active {
            transform: rotate(-2deg) translateY(2px);
            box-shadow: 2px 2px 0 black;
          }

          .maintenance-brutal-btn-secondary {
            flex: 1;
            padding: 1rem 2rem;
            background: #67E8F9;
            border: 4px solid black;
            color: black;
            font-weight: 900;
            font-size: 0.875rem;
            text-align: center;
            text-transform: uppercase;
            transform: rotate(2deg);
            box-shadow: 6px 6px 0 black;
            transition: all 0.3s ease;
          }

          .maintenance-brutal-btn-secondary:hover {
            transform: rotate(2deg) translateY(-5px);
            box-shadow: 6px 11px 0 black;
          }

          .maintenance-brutal-btn-secondary:active {
            transform: rotate(2deg) translateY(2px);
            box-shadow: 2px 2px 0 black;
          }
        `
      }
    ]
  }
];