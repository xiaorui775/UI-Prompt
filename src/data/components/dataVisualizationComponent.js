// Data Visualization Dashboard Component for dataDisplayComponents.js
// This should be added to the dataDisplayComponents array

export const dataVisualizationComponent = {
  id: 'data-visualization',
  title: 'data.components.dataDisplay.data-visualization.title',
  description: 'data.components.dataDisplay.data-visualization.description',
  variants: [
    // Variant 1: Enterprise Dashboard
    {
      id: 'enterprise-dashboard',
      name: 'data.components.dataDisplay.data-visualization.variants.enterprise-dashboard.name',
      description: 'data.components.dataDisplay.data-visualization.variants.enterprise-dashboard.description',
      demoHTML: `
        <div class="w-full max-w-6xl p-6">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <!-- KPI Cards -->
            <div class="bg-white rounded-lg shadow p-6">
              <div class="flex items-center justify-between mb-4">
                <h3 class="text-sm font-medium text-gray-500">Total Revenue</h3>
                <div class="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                  <span class="text-green-600 text-xl">💰</span>
                </div>
              </div>
              <div class="text-2xl font-bold text-gray-900">$1,247,000</div>
              <div class="text-sm text-green-600 mt-1">↗ 12.5% vs last month</div>
            </div>

            <div class="bg-white rounded-lg shadow p-6">
              <div class="flex items-center justify-between mb-4">
                <h3 class="text-sm font-medium text-gray-500">Active Customers</h3>
                <div class="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <span class="text-blue-600 text-xl">👥</span>
                </div>
              </div>
              <div class="text-2xl font-bold text-gray-900">3,521</div>
              <div class="text-sm text-green-600 mt-1">↗ 8.7% vs last month</div>
            </div>

            <div class="bg-white rounded-lg shadow p-6">
              <div class="flex items-center justify-between mb-4">
                <h3 class="text-sm font-medium text-gray-500">Conversion Rate</h3>
                <div class="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                  <span class="text-purple-600 text-xl">📈</span>
                </div>
              </div>
              <div class="text-2xl font-bold text-gray-900">3.2%</div>
              <div class="text-sm text-red-600 mt-1">↘ -2.1% vs last month</div>
            </div>

            <div class="bg-white rounded-lg shadow p-6">
              <div class="flex items-center justify-between mb-4">
                <h3 class="text-sm font-medium text-gray-500">Satisfaction</h3>
                <div class="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center">
                  <span class="text-yellow-600 text-xl">⭐</span>
                </div>
              </div>
              <div class="text-2xl font-bold text-gray-900">4.6/5</div>
              <div class="text-sm text-green-600 mt-1">↗ 5.2% vs last month</div>
            </div>
          </div>

          <!-- Chart Section -->
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div class="bg-white rounded-lg shadow p-6">
              <h3 class="text-lg font-semibold text-gray-900 mb-4">Revenue Trend</h3>
              <div class="h-32 flex items-end space-x-2">
                <!-- Simple Bar Chart -->
                <div class="flex-1 bg-blue-200 rounded-t transition-all duration-700" style="height: 60%"></div>
                <div class="flex-1 bg-blue-300 rounded-t transition-all duration-700" style="height: 75%"></div>
                <div class="flex-1 bg-blue-400 rounded-t transition-all duration-700" style="height: 45%"></div>
                <div class="flex-1 bg-blue-500 rounded-t transition-all duration-700" style="height: 80%"></div>
                <div class="flex-1 bg-blue-600 rounded-t transition-all duration-700" style="height: 90%"></div>
                <div class="flex-1 bg-blue-700 rounded-t transition-all duration-700" style="height: 100%"></div>
              </div>
              <div class="flex justify-between text-xs text-gray-500 mt-2">
                <span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span><span>Jun</span>
              </div>
            </div>

            <div class="bg-white rounded-lg shadow p-6">
              <h3 class="text-lg font-semibold text-gray-900 mb-4">Team Performance</h3>
              <div class="space-y-3">
                <div class="flex items-center justify-between">
                  <div class="flex items-center space-x-3">
                    <div class="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                      <span class="text-white text-sm">SC</span>
                    </div>
                    <span class="text-sm font-medium">Sarah Chen</span>
                  </div>
                  <div class="flex items-center space-x-2">
                    <div class="w-16 h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div class="w-full h-full bg-green-500"></div>
                    </div>
                    <span class="text-sm text-green-600">124%</span>
                  </div>
                </div>
                <div class="flex items-center justify-between">
                  <div class="flex items-center space-x-3">
                    <div class="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                      <span class="text-white text-sm">MR</span>
                    </div>
                    <span class="text-sm font-medium">Michael Rodriguez</span>
                  </div>
                  <div class="flex items-center space-x-2">
                    <div class="w-16 h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div class="w-4/5 h-full bg-blue-500"></div>
                    </div>
                    <span class="text-sm text-blue-600">113%</span>
                  </div>
                </div>
                <div class="flex items-center justify-between">
                  <div class="flex items-center space-x-3">
                    <div class="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
                      <span class="text-white text-sm">ET</span>
                    </div>
                    <span class="text-sm font-medium">Emma Thompson</span>
                  </div>
                  <div class="flex items-center space-x-2">
                    <div class="w-16 h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div class="w-3/4 h-full bg-purple-500"></div>
                    </div>
                    <span class="text-sm text-purple-600">107%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      `,
      customStyles: `
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .bg-white { animation: fadeInUp 0.6s ease-out; }
      `,
      // NEW: Data Visualization Previews
      previews: [
        {
          id: 'enterprise-full',
          type: 'data-visualization',
          name: {
            'zh-cn': '企业仪表板',
            'en-US': 'Enterprise Dashboard'
          },
          scenario: 'enterprise-dashboard'
        },
        {
          id: 'financial-full',
          type: 'data-visualization',
          name: {
            'zh-cn': '金融平台',
            'en-US': 'Financial Platform'
          },
          scenario: 'financial-platform'
        },
        {
          id: 'analytics-full',
          type: 'data-visualization',
          name: {
            'zh-cn': '分析平台',
            'en-US': 'Analytics Platform'
          },
          scenario: 'analytics-platform'
        },
        {
          id: 'monitoring-full',
          type: 'data-visualization',
          name: {
            'zh-cn': '实时监控',
            'en-US': 'Real-time Monitoring'
          },
          scenario: 'realtime-monitoring'
        }
      ]
    },

    // Variant 2: Financial Trading
    {
      id: 'financial-trading',
      name: 'data.components.dataDisplay.data-visualization.variants.financial-trading.name',
      description: 'data.components.dataDisplay.data-visualization.variants.financial-trading.description',
      demoHTML: `
        <div class="w-full max-w-6xl p-6 bg-gray-900 text-white rounded-lg">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <!-- Market Overview -->
            <div class="bg-gray-800 rounded-lg p-6">
              <div class="flex items-center justify-between mb-4">
                <h3 class="text-sm text-gray-400">S&P 500</h3>
                <span class="text-green-400 text-sm">+1.24%</span>
              </div>
              <div class="text-2xl font-bold">4,247.84</div>
              <div class="text-sm text-green-400">+52.73</div>
            </div>

            <div class="bg-gray-800 rounded-lg p-6">
              <div class="flex items-center justify-between mb-4">
                <h3 class="text-sm text-gray-400">Portfolio Value</h3>
                <span class="text-green-400 text-sm">+2.1%</span>
              </div>
              <div class="text-2xl font-bold">$847,293</div>
              <div class="text-sm text-green-400">+$17,432</div>
            </div>

            <div class="bg-gray-800 rounded-lg p-6">
              <div class="flex items-center justify-between mb-4">
                <h3 class="text-sm text-gray-400">NASDAQ</h3>
                <span class="text-red-400 text-sm">-0.87%</span>
              </div>
              <div class="text-2xl font-bold">13,021.39</div>
              <div class="text-sm text-red-400">-114.22</div>
            </div>
          </div>

          <!-- Chart and Watchlist -->
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div class="bg-gray-800 rounded-lg p-6">
              <h3 class="text-lg font-bold mb-4">AAPL - Apple Inc.</h3>
              <div class="flex items-center space-x-2 mb-4">
                <span class="text-2xl font-bold">$178.25</span>
                <span class="text-green-400">+$2.15 (+1.22%)</span>
              </div>
              <!-- Simple Line Chart -->
              <div class="h-32 bg-gray-900 rounded p-2 relative">
                <svg class="w-full h-full" viewBox="0 0 300 100">
                  <polyline
                    points="0,80 50,70 100,60 150,50 200,40 250,30 300,20"
                    fill="none"
                    stroke="#10B981"
                    stroke-width="2"
                  />
                  <circle cx="300" cy="20" r="3" fill="#10B981" />
                </svg>
              </div>
            </div>

            <div class="bg-gray-800 rounded-lg p-6">
              <h3 class="text-lg font-bold mb-4">Watchlist</h3>
              <div class="space-y-3">
                <div class="flex items-center justify-between">
                  <div>
                    <div class="font-medium">TSLA</div>
                    <div class="text-sm text-gray-400">Tesla Inc.</div>
                  </div>
                  <div class="text-right">
                    <div class="font-medium">$267.89</div>
                    <div class="text-sm text-green-400">+3.24%</div>
                  </div>
                </div>
                <div class="flex items-center justify-between">
                  <div>
                    <div class="font-medium">MSFT</div>
                    <div class="text-sm text-gray-400">Microsoft Corp.</div>
                  </div>
                  <div class="text-right">
                    <div class="font-medium">$412.73</div>
                    <div class="text-sm text-red-400">-1.12%</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      `,
      customStyles: `
        .bg-gray-800 { transition: transform 0.2s; }
        .bg-gray-800:hover { transform: translateY(-2px); }
      `,
      previews: [
        {
          id: 'financial-full',
          type: 'data-visualization',
          name: {
            'zh-cn': '金融交易平台',
            'en-US': 'Financial Trading Platform'
          },
          scenario: 'financial-platform'
        },
        {
          id: 'enterprise-alt',
          type: 'data-visualization',
          name: {
            'zh-cn': '企业概览',
            'en-US': 'Enterprise Overview'
          },
          scenario: 'enterprise-dashboard'
        }
      ]
    },

    // Variant 3: Analytics Dashboard
    {
      id: 'analytics-dashboard',
      name: 'data.components.dataDisplay.data-visualization.variants.analytics-dashboard.name',
      description: 'data.components.dataDisplay.data-visualization.variants.analytics-dashboard.description',
      demoHTML: `
        <div class="w-full max-w-6xl p-6">
          <div class="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <!-- Analytics Cards -->
            <div class="bg-white rounded-lg shadow p-6">
              <div class="flex items-center mb-4">
                <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <span class="text-blue-600 text-xl">👥</span>
                </div>
                <div class="ml-4">
                  <div class="text-sm text-gray-500">Total Users</div>
                  <div class="text-2xl font-bold">47,293</div>
                </div>
              </div>
              <div class="text-sm text-green-600">+12% from last month</div>
            </div>

            <div class="bg-white rounded-lg shadow p-6">
              <div class="flex items-center mb-4">
                <div class="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <span class="text-green-600 text-xl">📈</span>
                </div>
                <div class="ml-4">
                  <div class="text-sm text-gray-500">Page Views</div>
                  <div class="text-2xl font-bold">189,429</div>
                </div>
              </div>
              <div class="text-sm text-green-600">+8.2% from last month</div>
            </div>

            <div class="bg-white rounded-lg shadow p-6">
              <div class="flex items-center mb-4">
                <div class="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                  <span class="text-purple-600 text-xl">💰</span>
                </div>
                <div class="ml-4">
                  <div class="text-sm text-gray-500">Revenue</div>
                  <div class="text-2xl font-bold">$89,247</div>
                </div>
              </div>
              <div class="text-sm text-green-600">+15.7% from last month</div>
            </div>

            <div class="bg-white rounded-lg shadow p-6">
              <div class="flex items-center mb-4">
                <div class="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                  <span class="text-yellow-600 text-xl">🎯</span>
                </div>
                <div class="ml-4">
                  <div class="text-sm text-gray-500">Conversion</div>
                  <div class="text-2xl font-bold">3.24%</div>
                </div>
              </div>
              <div class="text-sm text-red-600">-0.3% from last month</div>
            </div>
          </div>

          <!-- Funnel and Activity -->
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div class="bg-white rounded-lg shadow p-6">
              <h3 class="text-lg font-semibold mb-4">Conversion Funnel</h3>
              <div class="space-y-4">
                <div class="relative">
                  <div class="flex items-center justify-between mb-2">
                    <span class="text-sm font-medium">Page Visits</span>
                    <span class="text-sm font-bold">47,293</span>
                  </div>
                  <div class="w-full h-8 bg-purple-200 rounded-lg overflow-hidden">
                    <div class="w-full h-full bg-purple-500 flex items-center justify-center text-white text-xs">
                      100%
                    </div>
                  </div>
                </div>
                <div class="relative">
                  <div class="flex items-center justify-between mb-2">
                    <span class="text-sm font-medium">Add to Cart</span>
                    <span class="text-sm font-bold">9,458</span>
                  </div>
                  <div class="w-full h-8 bg-green-200 rounded-lg overflow-hidden">
                    <div class="w-1/5 h-full bg-green-500 flex items-center justify-center text-white text-xs">
                      20%
                    </div>
                  </div>
                </div>
                <div class="relative">
                  <div class="flex items-center justify-between mb-2">
                    <span class="text-sm font-medium">Purchase</span>
                    <span class="text-sm font-bold">1,531</span>
                  </div>
                  <div class="w-full h-8 bg-red-200 rounded-lg overflow-hidden">
                    <div class="w-1/30 h-full bg-red-500 flex items-center justify-center text-white text-xs">
                      3.2%
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="bg-white rounded-lg shadow p-6">
              <div class="flex items-center justify-between mb-4">
                <h3 class="text-lg font-semibold">Real-time Activity</h3>
                <div class="flex items-center space-x-1">
                  <div class="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span class="text-xs text-gray-500">Live</span>
                </div>
              </div>
              <div class="text-center mb-6">
                <div class="text-3xl font-bold text-green-600">1,247</div>
                <div class="text-sm text-gray-500">Active users right now</div>
              </div>
              <div class="space-y-3 text-sm">
                <div class="flex items-center space-x-3">
                  <div class="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span>User from New York visited /products</span>
                </div>
                <div class="flex items-center space-x-3">
                  <div class="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Purchase completed - $129.99</span>
                </div>
                <div class="flex items-center space-x-3">
                  <div class="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span>User from London signed up</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      `,
      customStyles: `
        .animate-pulse { animation: pulse 2s infinite; }
        @keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.5; } }
      `,
      previews: [
        {
          id: 'analytics-full',
          type: 'data-visualization',
          name: {
            'zh-cn': '分析平台',
            'en-US': 'Analytics Platform'
          },
          scenario: 'analytics-platform'
        },
        {
          id: 'monitoring-full',
          type: 'data-visualization',
          name: {
            'zh-cn': '监控仪表板',
            'en-US': 'Monitoring Dashboard'
          },
          scenario: 'realtime-monitoring'
        }
      ]
    }
  ]
};