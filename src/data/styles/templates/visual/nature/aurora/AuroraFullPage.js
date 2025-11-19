// Aurora Analytics Dashboard - Full Page Design
// 极光数据仪表板完整页面设计 - 多层渐变背景 + 玻璃态组件 + 数据可视化

export const auroraFullPageHTML = `
<!-- Aurora Analytics Dashboard Full Page -->
<div class="aurora-page">
  <!-- 极光背景动画层 -->
  <div class="aurora-bg-layer-1"></div>
  <div class="aurora-bg-layer-2"></div>
  <div class="aurora-bg-layer-3"></div>
  <div class="aurora-particles"></div>

  <!-- 玻璃态导航栏 -->
  <nav class="aurora-nav">
    <div class="aurora-container">
      <div class="aurora-nav-content">
        <!-- Logo -->
        <div class="aurora-logo-group">
          <div class="aurora-logo-icon">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="2.5">
              <path d="M16 4 L16 2 M16 30 L16 32 M24 12 L27 9 M5 12 L2 9 M24 24 L27 27 M5 24 L2 27" stroke-linecap="round"/>
              <circle cx="16" cy="16" r="8"/>
              <circle cx="16" cy="16" r="4"/>
            </svg>
          </div>
          <span class="aurora-logo-text">Aurora Analytics</span>
        </div>

        <!-- 导航链接 -->
        <div class="aurora-nav-links">
          <a href="javascript:void(0)" class="aurora-nav-link aurora-nav-link-active">Dashboard</a>
          <a href="javascript:void(0)" class="aurora-nav-link">Analytics</a>
          <a href="javascript:void(0)" class="aurora-nav-link">Reports</a>
          <a href="javascript:void(0)" class="aurora-nav-link">Settings</a>
        </div>

        <!-- 用户头像 -->
        <div class="aurora-user-avatar">
          <div class="aurora-avatar-img"></div>
          <div class="aurora-user-status"></div>
        </div>
      </div>
    </div>
  </nav>

  <!-- 主内容区 -->
  <main class="aurora-main">
    <div class="aurora-container">

      <!-- Hero 区域 - 核心统计指标 -->
      <section class="aurora-hero">
        <div class="aurora-stats-grid">
          <!-- 统计卡片 1 -->
          <div class="aurora-stat-card">
            <div class="aurora-stat-icon aurora-stat-icon-revenue">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <line x1="12" y1="1" x2="12" y2="23" stroke-linecap="round"/>
                <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" stroke-linecap="round"/>
              </svg>
            </div>
            <div class="aurora-stat-label">Total Revenue</div>
            <div class="aurora-stat-value aurora-text-glow">$124.8K</div>
            <div class="aurora-stat-change aurora-stat-up">+12.5%</div>
          </div>

          <!-- 统计卡片 2 -->
          <div class="aurora-stat-card">
            <div class="aurora-stat-icon aurora-stat-icon-users">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke-linecap="round"/>
                <circle cx="9" cy="7" r="4"/>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" stroke-linecap="round"/>
              </svg>
            </div>
            <div class="aurora-stat-label">Active Users</div>
            <div class="aurora-stat-value aurora-text-glow">8,249</div>
            <div class="aurora-stat-change aurora-stat-up">+8.2%</div>
          </div>

          <!-- 统计卡片 3 -->
          <div class="aurora-stat-card">
            <div class="aurora-stat-icon aurora-stat-icon-conversion">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
            <div class="aurora-stat-label">Conversion Rate</div>
            <div class="aurora-stat-value aurora-text-glow">3.84%</div>
            <div class="aurora-stat-change aurora-stat-down">-1.2%</div>
          </div>

          <!-- 统计卡片 4 -->
          <div class="aurora-stat-card">
            <div class="aurora-stat-icon aurora-stat-icon-activity">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" stroke-linecap="round"/>
                <circle cx="12" cy="12" r="10"/>
              </svg>
            </div>
            <div class="aurora-stat-label">Activity Score</div>
            <div class="aurora-stat-value aurora-text-glow">92%</div>
            <div class="aurora-stat-change aurora-stat-up">+5.3%</div>
          </div>
        </div>
      </section>

      <!-- 数据可视化区域 -->
      <section class="aurora-charts-section">
        <div class="aurora-charts-grid">

          <!-- 左侧 - 图表卡片 -->
          <div class="aurora-chart-card">
            <div class="aurora-card-header">
              <h3 class="aurora-card-title">Revenue Trend</h3>
              <div class="aurora-time-selector">
                <button class="aurora-time-btn aurora-time-btn-active">7D</button>
                <button class="aurora-time-btn">30D</button>
                <button class="aurora-time-btn">90D</button>
              </div>
            </div>
            <div class="aurora-chart-container">
              <!-- 简化的折线图 SVG -->
              <svg class="aurora-line-chart" viewBox="0 0 400 200" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="aurora-chart-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" style="stop-color:#10B981;stop-opacity:0.3" />
                    <stop offset="100%" style="stop-color:#06B6D4;stop-opacity:0.05" />
                  </linearGradient>
                </defs>
                <!-- 网格线 -->
                <line x1="0" y1="50" x2="400" y2="50" stroke="rgba(255,255,255,0.1)" stroke-width="1"/>
                <line x1="0" y1="100" x2="400" y2="100" stroke="rgba(255,255,255,0.1)" stroke-width="1"/>
                <line x1="0" y1="150" x2="400" y2="150" stroke="rgba(255,255,255,0.1)" stroke-width="1"/>
                <!-- 填充区域 -->
                <path d="M 0 150 L 50 120 L 100 140 L 150 90 L 200 110 L 250 70 L 300 85 L 350 50 L 400 60 L 400 200 L 0 200 Z"
                      fill="url(#aurora-chart-gradient)"/>
                <!-- 折线 -->
                <path d="M 0 150 L 50 120 L 100 140 L 150 90 L 200 110 L 250 70 L 300 85 L 350 50 L 400 60"
                      fill="none" stroke="url(#aurora-line-gradient)" stroke-width="3" stroke-linecap="round"/>
                <defs>
                  <linearGradient id="aurora-line-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" style="stop-color:#10B981" />
                    <stop offset="50%" style="stop-color:#06B6D4" />
                    <stop offset="100%" style="stop-color:#3B82F6" />
                  </linearGradient>
                </defs>
                <!-- 数据点 -->
                <circle cx="0" cy="150" r="4" fill="#10B981" class="aurora-chart-dot"/>
                <circle cx="50" cy="120" r="4" fill="#10B981" class="aurora-chart-dot"/>
                <circle cx="100" cy="140" r="4" fill="#06B6D4" class="aurora-chart-dot"/>
                <circle cx="150" cy="90" r="4" fill="#06B6D4" class="aurora-chart-dot"/>
                <circle cx="200" cy="110" r="4" fill="#06B6D4" class="aurora-chart-dot"/>
                <circle cx="250" cy="70" r="4" fill="#3B82F6" class="aurora-chart-dot"/>
                <circle cx="300" cy="85" r="4" fill="#3B82F6" class="aurora-chart-dot"/>
                <circle cx="350" cy="50" r="4" fill="#3B82F6" class="aurora-chart-dot"/>
                <circle cx="400" cy="60" r="4" fill="#3B82F6" class="aurora-chart-dot"/>
              </svg>
            </div>
            <div class="aurora-chart-legend">
              <div class="aurora-legend-item">
                <span class="aurora-legend-dot" style="background: #10B981;"></span>
                <span class="aurora-legend-text">Jan-Mar</span>
              </div>
              <div class="aurora-legend-item">
                <span class="aurora-legend-dot" style="background: #06B6D4;"></span>
                <span class="aurora-legend-text">Apr-Jun</span>
              </div>
              <div class="aurora-legend-item">
                <span class="aurora-legend-dot" style="background: #3B82F6;"></span>
                <span class="aurora-legend-text">Jul-Sep</span>
              </div>
            </div>
          </div>

          <!-- 右侧 - 活动时间线 -->
          <div class="aurora-timeline-card">
            <div class="aurora-card-header">
              <h3 class="aurora-card-title">Recent Activity</h3>
              <button class="aurora-icon-btn">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2">
                  <circle cx="8" cy="3" r="1" fill="currentColor"/>
                  <circle cx="8" cy="8" r="1" fill="currentColor"/>
                  <circle cx="8" cy="13" r="1" fill="currentColor"/>
                </svg>
              </button>
            </div>
            <div class="aurora-timeline">
              <!-- 时间线项目 1-5 -->
              <!-- 时间线项目 1 -->
              <div class="aurora-timeline-item">
                <div class="aurora-timeline-dot aurora-timeline-dot-success"></div>
                <div class="aurora-timeline-content">
                  <div class="aurora-timeline-title">New user registered</div>
                  <div class="aurora-timeline-meta">john.doe@example.com</div>
                  <div class="aurora-timeline-time">2 minutes ago</div>
                </div>
              </div>

              <!-- 时间线项目 2 -->
              <div class="aurora-timeline-item">
                <div class="aurora-timeline-dot aurora-timeline-dot-info"></div>
                <div class="aurora-timeline-content">
                  <div class="aurora-timeline-title">Payment received</div>
                  <div class="aurora-timeline-meta">$1,249.00 from Premium Plan</div>
                  <div class="aurora-timeline-time">15 minutes ago</div>
                </div>
              </div>

              <!-- 时间线项目 3 -->
              <div class="aurora-timeline-item">
                <div class="aurora-timeline-dot aurora-timeline-dot-warning"></div>
                <div class="aurora-timeline-content">
                  <div class="aurora-timeline-title">Server warning</div>
                  <div class="aurora-timeline-meta">High CPU usage detected</div>
                  <div class="aurora-timeline-time">1 hour ago</div>
                </div>
              </div>

              <!-- 时间线项目 4 -->
              <div class="aurora-timeline-item">
                <div class="aurora-timeline-dot aurora-timeline-dot-success"></div>
                <div class="aurora-timeline-content">
                  <div class="aurora-timeline-title">Report generated</div>
                  <div class="aurora-timeline-meta">Monthly analytics report</div>
                  <div class="aurora-timeline-time">2 hours ago</div>
                </div>
              </div>

              <!-- 时间线项目 5 -->
              <div class="aurora-timeline-item">
                <div class="aurora-timeline-dot aurora-timeline-dot-info"></div>
                <div class="aurora-timeline-content">
                  <div class="aurora-timeline-title">Database backup</div>
                  <div class="aurora-timeline-meta">Completed successfully</div>
                  <div class="aurora-timeline-time">4 hours ago</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 进度指标区域 -->
      <section class="aurora-progress-section">
        <div class="aurora-progress-grid">
          <!-- 环形进度 1 -->
          <div class="aurora-progress-card">
            <svg class="aurora-circular-progress" width="140" height="140" viewBox="0 0 140 140">
              <defs>
                <linearGradient id="progress-gradient-1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style="stop-color:#10B981"/>
                  <stop offset="100%" style="stop-color:#06B6D4"/>
                </linearGradient>
              </defs>
              <circle cx="70" cy="70" r="60" fill="none" stroke="rgba(255,255,255,0.1)" stroke-width="10"/>
              <circle cx="70" cy="70" r="60" fill="none" stroke="url(#progress-gradient-1)" stroke-width="10"
                      stroke-dasharray="377" stroke-dashoffset="75" stroke-linecap="round"
                      transform="rotate(-90 70 70)" class="aurora-progress-ring"/>
            </svg>
            <div class="aurora-progress-text">
              <div class="aurora-progress-value">80%</div>
              <div class="aurora-progress-label">Storage Used</div>
            </div>
          </div>

          <!-- 环形进度 2 -->
          <div class="aurora-progress-card">
            <svg class="aurora-circular-progress" width="140" height="140" viewBox="0 0 140 140">
              <defs>
                <linearGradient id="progress-gradient-2" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style="stop-color:#3B82F6"/>
                  <stop offset="100%" style="stop-color:#8B5CF6"/>
                </linearGradient>
              </defs>
              <circle cx="70" cy="70" r="60" fill="none" stroke="rgba(255,255,255,0.1)" stroke-width="10"/>
              <circle cx="70" cy="70" r="60" fill="none" stroke="url(#progress-gradient-2)" stroke-width="10"
                      stroke-dasharray="377" stroke-dashoffset="113" stroke-linecap="round"
                      transform="rotate(-90 70 70)" class="aurora-progress-ring"/>
            </svg>
            <div class="aurora-progress-text">
              <div class="aurora-progress-value">70%</div>
              <div class="aurora-progress-label">API Quota</div>
            </div>
          </div>

          <!-- 环形进度 3 -->
          <div class="aurora-progress-card">
            <svg class="aurora-circular-progress" width="140" height="140" viewBox="0 0 140 140">
              <defs>
                <linearGradient id="progress-gradient-3" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style="stop-color:#EC4899"/>
                  <stop offset="100%" style="stop-color:#F472B6"/>
                </linearGradient>
              </defs>
              <circle cx="70" cy="70" r="60" fill="none" stroke="rgba(255,255,255,0.1)" stroke-width="10"/>
              <circle cx="70" cy="70" r="60" fill="none" stroke="url(#progress-gradient-3)" stroke-width="10"
                      stroke-dasharray="377" stroke-dashoffset="26" stroke-linecap="round"
                      transform="rotate(-90 70 70)" class="aurora-progress-ring"/>
            </svg>
            <div class="aurora-progress-text">
              <div class="aurora-progress-value">93%</div>
              <div class="aurora-progress-label">Uptime</div>
            </div>
          </div>
        </div>
      </section>

      <!-- 数据表格区域 -->
      <section class="aurora-table-section">
        <div class="aurora-table-card">
          <div class="aurora-card-header">
            <h3 class="aurora-card-title">Recent Transactions</h3>
            <div class="aurora-table-actions">
              <button class="aurora-btn-secondary">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2">
                  <circle cx="7" cy="7" r="5"/>
                  <path d="M11 11 L14 14"/>
                </svg>
                Search
              </button>
              <button class="aurora-btn-primary">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M2 6 L8 2 L14 6 L14 14 L2 14 Z" stroke-linejoin="round"/>
                </svg>
                Export
              </button>
            </div>
          </div>
          <div class="aurora-table-container">
            <table class="aurora-table">
              <thead>
                <tr>
                  <th>Transaction ID</th>
                  <th>Customer</th>
                  <th>Amount</th>
                  <th>Status</th>
                  <th>Date</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="aurora-td-id">#TXN-001245</td>
                  <td>
                    <div class="aurora-customer-cell">
                      <div class="aurora-customer-avatar" style="background: linear-gradient(135deg, #10B981, #06B6D4);"></div>
                      <div>
                        <div class="aurora-customer-name">Alice Johnson</div>
                        <div class="aurora-customer-email">alice@example.com</div>
                      </div>
                    </div>
                  </td>
                  <td class="aurora-td-amount">$1,249.00</td>
                  <td><span class="aurora-status-badge aurora-status-success">Completed</span></td>
                  <td class="aurora-td-date">2025-01-15</td>
                  <td>
                    <button class="aurora-action-btn">
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" stroke-width="1.5">
                        <path d="M1 7h12M7 1v12"/>
                      </svg>
                    </button>
                  </td>
                </tr>
                <tr>
                  <td class="aurora-td-id">#TXN-001244</td>
                  <td>
                    <div class="aurora-customer-cell">
                      <div class="aurora-customer-avatar" style="background: linear-gradient(135deg, #3B82F6, #8B5CF6);"></div>
                      <div>
                        <div class="aurora-customer-name">Bob Smith</div>
                        <div class="aurora-customer-email">bob@example.com</div>
                      </div>
                    </div>
                  </td>
                  <td class="aurora-td-amount">$3,890.00</td>
                  <td><span class="aurora-status-badge aurora-status-success">Completed</span></td>
                  <td class="aurora-td-date">2025-01-14</td>
                  <td>
                    <button class="aurora-action-btn">
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" stroke-width="1.5">
                        <path d="M1 7h12M7 1v12"/>
                      </svg>
                    </button>
                  </td>
                </tr>
                <tr>
                  <td class="aurora-td-id">#TXN-001243</td>
                  <td>
                    <div class="aurora-customer-cell">
                      <div class="aurora-customer-avatar" style="background: linear-gradient(135deg, #EC4899, #F472B6);"></div>
                      <div>
                        <div class="aurora-customer-name">Carol White</div>
                        <div class="aurora-customer-email">carol@example.com</div>
                      </div>
                    </div>
                  </td>
                  <td class="aurora-td-amount">$567.50</td>
                  <td><span class="aurora-status-badge aurora-status-pending">Pending</span></td>
                  <td class="aurora-td-date">2025-01-14</td>
                  <td>
                    <button class="aurora-action-btn">
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" stroke-width="1.5">
                        <path d="M1 7h12M7 1v12"/>
                      </svg>
                    </button>
                  </td>
                </tr>
                <tr>
                  <td class="aurora-td-id">#TXN-001242</td>
                  <td>
                    <div class="aurora-customer-cell">
                      <div class="aurora-customer-avatar" style="background: linear-gradient(135deg, #06B6D4, #3B82F6);"></div>
                      <div>
                        <div class="aurora-customer-name">David Brown</div>
                        <div class="aurora-customer-email">david@example.com</div>
                      </div>
                    </div>
                  </td>
                  <td class="aurora-td-amount">$2,100.00</td>
                  <td><span class="aurora-status-badge aurora-status-success">Completed</span></td>
                  <td class="aurora-td-date">2025-01-13</td>
                  <td>
                    <button class="aurora-action-btn">
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" stroke-width="1.5">
                        <path d="M1 7h12M7 1v12"/>
                      </svg>
                    </button>
                  </td>
                </tr>
                <tr>
                  <td class="aurora-td-id">#TXN-001241</td>
                  <td>
                    <div class="aurora-customer-cell">
                      <div class="aurora-customer-avatar" style="background: linear-gradient(135deg, #8B5CF6, #EC4899);"></div>
                      <div>
                        <div class="aurora-customer-name">Emma Davis</div>
                        <div class="aurora-customer-email">emma@example.com</div>
                      </div>
                    </div>
                  </td>
                  <td class="aurora-td-amount">$899.99</td>
                  <td><span class="aurora-status-badge aurora-status-failed">Failed</span></td>
                  <td class="aurora-td-date">2025-01-13</td>
                  <td>
                    <button class="aurora-action-btn">
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" stroke-width="1.5">
                        <path d="M1 7h12M7 1v12"/>
                      </svg>
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

    </div>
  </main>
</div>
`;

export const auroraFullPageStyles = `
  /* ========== Aurora Page Base ========== */
  .aurora-page {
    position: relative;
    min-height: 100vh;
    background: linear-gradient(135deg, #0A0E27 0%, #1A1625 100%);
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif;
    color: #FFFFFF;
    overflow-x: hidden;
  }

  /* ========== Aurora Background Layers ========== */
  .aurora-bg-layer-1 {
    position: fixed;
    inset: 0;
    background: radial-gradient(ellipse 80% 50% at 50% -20%,
      rgba(16, 185, 129, 0.3) 0%,
      rgba(6, 182, 212, 0.2) 30%,
      transparent 70%
    );
    animation: aurora-wave-1 12s ease-in-out infinite;
    pointer-events: none;
    z-index: 1;
  }

  .aurora-bg-layer-2 {
    position: fixed;
    inset: 0;
    background: radial-gradient(ellipse 70% 60% at 50% 120%,
      rgba(139, 92, 246, 0.25) 0%,
      rgba(59, 130, 246, 0.18) 40%,
      transparent 70%
    );
    animation: aurora-wave-2 15s ease-in-out infinite reverse;
    pointer-events: none;
    z-index: 1;
  }

  .aurora-bg-layer-3 {
    position: fixed;
    inset: 0;
    background: radial-gradient(ellipse 60% 70% at 80% 50%,
      rgba(236, 72, 153, 0.15) 0%,
      rgba(244, 114, 182, 0.1) 50%,
      transparent 70%
    );
    animation: aurora-wave-3 18s ease-in-out infinite;
    pointer-events: none;
    z-index: 1;
  }

  .aurora-particles {
    position: fixed;
    inset: 0;
    background-image:
      radial-gradient(2px 2px at 20% 30%, rgba(16, 185, 129, 0.4), transparent),
      radial-gradient(2px 2px at 60% 70%, rgba(6, 182, 212, 0.4), transparent),
      radial-gradient(1px 1px at 50% 50%, rgba(139, 92, 246, 0.4), transparent),
      radial-gradient(1px 1px at 80% 10%, rgba(59, 130, 246, 0.4), transparent),
      radial-gradient(2px 2px at 90% 60%, rgba(16, 185, 129, 0.3), transparent),
      radial-gradient(1px 1px at 33% 80%, rgba(6, 182, 212, 0.3), transparent),
      radial-gradient(2px 2px at 15% 45%, rgba(236, 72, 153, 0.3), transparent),
      radial-gradient(1px 1px at 70% 25%, rgba(244, 114, 182, 0.3), transparent);
    background-size: 200% 200%;
    animation: aurora-particles-float 25s linear infinite;
    pointer-events: none;
    opacity: 0.6;
    z-index: 1;
  }

  @keyframes aurora-wave-1 {
    0%, 100% { transform: translateY(0%) scale(1); opacity: 1; }
    50% { transform: translateY(-10%) scale(1.08); opacity: 0.8; }
  }

  @keyframes aurora-wave-2 {
    0%, 100% { transform: translateY(0%) rotate(0deg); opacity: 1; }
    50% { transform: translateY(8%) rotate(2deg); opacity: 0.7; }
  }

  @keyframes aurora-wave-3 {
    0%, 100% { transform: translateX(0%) scale(1); opacity: 1; }
    50% { transform: translateX(5%) scale(1.05); opacity: 0.75; }
  }

  @keyframes aurora-particles-float {
    0% { background-position: 0% 0%; }
    100% { background-position: 100% 100%; }
  }

  /* ========== Container ========== */
  .aurora-container {
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 2rem;
  }

  /* ========== Glass Navigation ========== */
  .aurora-nav {
    position: sticky;
    top: 0;
    z-index: 100;
    background: linear-gradient(135deg,
      rgba(255, 255, 255, 0.1) 0%,
      rgba(255, 255, 255, 0.05) 100%
    );
    backdrop-filter: blur(20px) saturate(180%);
    -webkit-backdrop-filter: blur(20px) saturate(180%);
    border-bottom: 1px solid rgba(255, 255, 255, 0.15);
    box-shadow: 0 4px 24px rgba(0, 0, 0, 0.2);
  }

  .aurora-nav-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 70px;
  }

  .aurora-logo-group {
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }

  .aurora-logo-icon {
    width: 40px;
    height: 40px;
    background: linear-gradient(135deg, #10B981, #06B6D4);
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    box-shadow: 0 0 24px rgba(16, 185, 129, 0.6);
    animation: aurora-logo-pulse 3s ease-in-out infinite;
  }

  @keyframes aurora-logo-pulse {
    0%, 100% { box-shadow: 0 0 24px rgba(16, 185, 129, 0.6); }
    50% { box-shadow: 0 0 36px rgba(6, 182, 212, 0.8); }
  }

  .aurora-logo-text {
    font-size: 1.25rem;
    font-weight: 700;
    background: linear-gradient(135deg, #10B981, #06B6D4, #3B82F6);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .aurora-nav-links {
    display: flex;
    gap: 2rem;
  }

  .aurora-nav-link {
    color: rgba(255, 255, 255, 0.7);
    text-decoration: none;
    font-size: 0.9375rem;
    font-weight: 500;
    transition: all 0.3s ease;
    position: relative;
  }

  .aurora-nav-link::after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 0;
    width: 0;
    height: 2px;
    background: linear-gradient(90deg, #10B981, #06B6D4);
    transition: width 0.3s ease;
  }

  .aurora-nav-link:hover,
  .aurora-nav-link-active {
    color: #FFFFFF;
  }

  .aurora-nav-link-active::after {
    width: 100%;
  }

  .aurora-user-avatar {
    position: relative;
    width: 40px;
    height: 40px;
  }

  .aurora-avatar-img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background: linear-gradient(135deg, #EC4899, #F472B6);
    border: 2px solid rgba(255, 255, 255, 0.2);
  }

  .aurora-user-status {
    position: absolute;
    bottom: 0;
    right: 0;
    width: 12px;
    height: 12px;
    background: #10B981;
    border-radius: 50%;
    border: 2px solid #0A0E27;
    box-shadow: 0 0 10px rgba(16, 185, 129, 0.8);
  }

  /* ========== Main Content ========== */
  .aurora-main {
    position: relative;
    z-index: 10;
    padding: 3rem 0;
  }

  /* ========== Hero Stats Grid ========== */
  .aurora-hero {
    margin-bottom: 3rem;
  }

  .aurora-stats-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1.5rem;
  }

  .aurora-stat-card {
    background: linear-gradient(135deg,
      rgba(255, 255, 255, 0.12) 0%,
      rgba(255, 255, 255, 0.06) 100%
    );
    backdrop-filter: blur(16px) saturate(180%);
    -webkit-backdrop-filter: blur(16px) saturate(180%);
    border: 1px solid rgba(255, 255, 255, 0.18);
    border-radius: 20px;
    padding: 1.75rem;
    box-shadow:
      0 8px 32px rgba(0, 0, 0, 0.3),
      inset 0 1px 0 rgba(255, 255, 255, 0.15);
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .aurora-stat-card:hover {
    background: linear-gradient(135deg,
      rgba(255, 255, 255, 0.18) 0%,
      rgba(255, 255, 255, 0.09) 100%
    );
    border-color: rgba(6, 182, 212, 0.4);
    box-shadow:
      0 12px 48px rgba(6, 182, 212, 0.25),
      inset 0 1px 0 rgba(255, 255, 255, 0.2);
    transform: translateY(-4px);
  }

  .aurora-stat-icon {
    width: 48px;
    height: 48px;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 1rem;
    color: white;
  }

  .aurora-stat-icon-revenue {
    background: linear-gradient(135deg, #10B981, #06B6D4);
    box-shadow: 0 0 20px rgba(16, 185, 129, 0.5);
  }

  .aurora-stat-icon-users {
    background: linear-gradient(135deg, #3B82F6, #8B5CF6);
    box-shadow: 0 0 20px rgba(59, 130, 246, 0.5);
  }

  .aurora-stat-icon-conversion {
    background: linear-gradient(135deg, #EC4899, #F472B6);
    box-shadow: 0 0 20px rgba(236, 72, 153, 0.5);
  }

  .aurora-stat-icon-activity {
    background: linear-gradient(135deg, #06B6D4, #3B82F6);
    box-shadow: 0 0 20px rgba(6, 182, 212, 0.5);
  }

  .aurora-stat-label {
    font-size: 0.875rem;
    color: rgba(255, 255, 255, 0.7);
    margin-bottom: 0.5rem;
  }

  .aurora-stat-value {
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
  }

  .aurora-text-glow {
    text-shadow:
      0 0 10px rgba(6, 182, 212, 0.5),
      0 0 20px rgba(6, 182, 212, 0.3),
      0 0 30px rgba(6, 182, 212, 0.1);
  }

  .aurora-stat-change {
    font-size: 0.8125rem;
    font-weight: 600;
  }

  .aurora-stat-up {
    color: #10B981;
  }

  .aurora-stat-down {
    color: #EF4444;
  }

  /* ========== Charts Section ========== */
  .aurora-charts-section {
    margin-bottom: 3rem;
  }

  .aurora-charts-grid {
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 1.5rem;
  }

  @media (max-width: 1024px) {
    .aurora-charts-grid {
      grid-template-columns: 1fr;
    }
  }

  .aurora-chart-card,
  .aurora-timeline-card {
    background: linear-gradient(135deg,
      rgba(255, 255, 255, 0.12) 0%,
      rgba(255, 255, 255, 0.06) 100%
    );
    backdrop-filter: blur(16px) saturate(180%);
    -webkit-backdrop-filter: blur(16px) saturate(180%);
    border: 1px solid rgba(255, 255, 255, 0.18);
    border-radius: 20px;
    padding: 1.75rem;
    box-shadow:
      0 8px 32px rgba(0, 0, 0, 0.3),
      inset 0 1px 0 rgba(255, 255, 255, 0.15);
  }

  .aurora-card-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1.5rem;
  }

  .aurora-card-title {
    font-size: 1.125rem;
    font-weight: 600;
    color: #FFFFFF;
  }

  .aurora-time-selector {
    display: flex;
    gap: 0.5rem;
  }

  .aurora-time-btn {
    padding: 0.375rem 0.875rem;
    border: 1px solid rgba(255, 255, 255, 0.2);
    background: rgba(255, 255, 255, 0.05);
    color: rgba(255, 255, 255, 0.7);
    border-radius: 8px;
    font-size: 0.8125rem;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s ease;
  }

  .aurora-time-btn:hover {
    background: rgba(255, 255, 255, 0.1);
    color: #FFFFFF;
  }

  .aurora-time-btn-active {
    background: linear-gradient(135deg, #10B981, #06B6D4);
    border-color: transparent;
    color: #FFFFFF;
  }

  .aurora-chart-container {
    height: 240px;
    margin-bottom: 1rem;
  }

  .aurora-line-chart {
    width: 100%;
    height: 100%;
  }

  .aurora-chart-dot {
    transition: all 0.3s ease;
  }

  .aurora-chart-dot:hover {
    r: 6;
    filter: drop-shadow(0 0 6px currentColor);
  }

  .aurora-chart-legend {
    display: flex;
    gap: 1.5rem;
    justify-content: center;
  }

  .aurora-legend-item {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .aurora-legend-dot {
    width: 12px;
    height: 12px;
    border-radius: 50%;
  }

  .aurora-legend-text {
    font-size: 0.8125rem;
    color: rgba(255, 255, 255, 0.7);
  }

  /* ========== Timeline ========== */
  .aurora-timeline {
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
  }

  .aurora-timeline-item {
    display: flex;
    gap: 1rem;
    position: relative;
  }

  .aurora-timeline-item:not(:last-child)::before {
    content: '';
    position: absolute;
    left: 10px;
    top: 28px;
    bottom: -20px;
    width: 2px;
    background: linear-gradient(180deg,
      rgba(6, 182, 212, 0.3) 0%,
      rgba(6, 182, 212, 0.1) 100%
    );
  }

  .aurora-timeline-dot {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    flex-shrink: 0;
    position: relative;
    z-index: 1;
    animation: aurora-pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
  }

  .aurora-timeline-dot-success {
    background: #10B981;
    box-shadow: 0 0 12px rgba(16, 185, 129, 0.6);
  }

  .aurora-timeline-dot-info {
    background: #06B6D4;
    box-shadow: 0 0 12px rgba(6, 182, 212, 0.6);
  }

  .aurora-timeline-dot-warning {
    background: #F59E0B;
    box-shadow: 0 0 12px rgba(245, 158, 11, 0.6);
  }

  @keyframes aurora-pulse {
    0%, 100% { opacity: 1; transform: scale(1); }
    50% { opacity: 0.6; transform: scale(1.15); }
  }

  .aurora-timeline-content {
    flex: 1;
  }

  .aurora-timeline-title {
    font-size: 0.9375rem;
    font-weight: 600;
    color: #FFFFFF;
    margin-bottom: 0.25rem;
  }

  .aurora-timeline-meta {
    font-size: 0.8125rem;
    color: rgba(255, 255, 255, 0.6);
    margin-bottom: 0.25rem;
  }

  .aurora-timeline-time {
    font-size: 0.75rem;
    color: rgba(255, 255, 255, 0.5);
  }

  /* ========== Progress Section ========== */
  .aurora-progress-section {
    margin-bottom: 3rem;
  }

  .aurora-progress-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1.5rem;
  }

  .aurora-progress-card {
    background: linear-gradient(135deg,
      rgba(255, 255, 255, 0.12) 0%,
      rgba(255, 255, 255, 0.06) 100%
    );
    backdrop-filter: blur(16px) saturate(180%);
    -webkit-backdrop-filter: blur(16px) saturate(180%);
    border: 1px solid rgba(255, 255, 255, 0.18);
    border-radius: 20px;
    padding: 2rem;
    box-shadow:
      0 8px 32px rgba(0, 0, 0, 0.3),
      inset 0 1px 0 rgba(255, 255, 255, 0.15);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
  }

  .aurora-circular-progress {
    margin-bottom: 1rem;
  }

  .aurora-progress-ring {
    transition: stroke-dashoffset 1s ease;
  }

  .aurora-progress-text {
    text-align: center;
  }

  .aurora-progress-value {
    font-size: 2rem;
    font-weight: 700;
    background: linear-gradient(135deg, #10B981, #06B6D4, #3B82F6);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin-bottom: 0.25rem;
  }

  .aurora-progress-label {
    font-size: 0.875rem;
    color: rgba(255, 255, 255, 0.7);
  }

  /* ========== Table Section ========== */
  .aurora-table-section {
    margin-bottom: 3rem;
  }

  .aurora-table-card {
    background: linear-gradient(135deg,
      rgba(255, 255, 255, 0.12) 0%,
      rgba(255, 255, 255, 0.06) 100%
    );
    backdrop-filter: blur(16px) saturate(180%);
    -webkit-backdrop-filter: blur(16px) saturate(180%);
    border: 1px solid rgba(255, 255, 255, 0.18);
    border-radius: 20px;
    padding: 1.75rem;
    box-shadow:
      0 8px 32px rgba(0, 0, 0, 0.3),
      inset 0 1px 0 rgba(255, 255, 255, 0.15);
  }

  .aurora-table-actions {
    display: flex;
    gap: 0.75rem;
  }

  .aurora-btn-primary,
  .aurora-btn-secondary {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.625rem 1.25rem;
    border-radius: 10px;
    font-size: 0.875rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    border: none;
  }

  .aurora-btn-primary {
    background: linear-gradient(135deg, #10B981, #06B6D4, #3B82F6);
    background-size: 200% 200%;
    animation: aurora-gradient-shift 3s ease infinite;
    color: white;
    box-shadow:
      0 4px 16px rgba(6, 182, 212, 0.4),
      0 0 20px rgba(16, 185, 129, 0.3);
  }

  .aurora-btn-primary:hover {
    transform: translateY(-2px);
    box-shadow:
      0 8px 24px rgba(6, 182, 212, 0.6),
      0 0 30px rgba(16, 185, 129, 0.5);
  }

  @keyframes aurora-gradient-shift {
    0%, 100% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
  }

  .aurora-btn-secondary {
    background: rgba(255, 255, 255, 0.08);
    border: 1px solid rgba(255, 255, 255, 0.2);
    color: rgba(255, 255, 255, 0.9);
  }

  .aurora-btn-secondary:hover {
    background: rgba(255, 255, 255, 0.12);
    border-color: rgba(6, 182, 212, 0.4);
  }

  .aurora-table-container {
    margin-top: 1.5rem;
    overflow-x: auto;
  }

  .aurora-table {
    width: 100%;
    border-collapse: collapse;
  }

  .aurora-table thead {
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  }

  .aurora-table th {
    padding: 1rem;
    text-align: left;
    font-size: 0.8125rem;
    font-weight: 600;
    color: rgba(255, 255, 255, 0.7);
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  .aurora-table tbody tr {
    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
    transition: all 0.2s ease;
  }

  .aurora-table tbody tr:hover {
    background: linear-gradient(90deg,
      rgba(6, 182, 212, 0.1) 0%,
      rgba(6, 182, 212, 0.05) 50%,
      transparent 100%
    );
    border-color: rgba(6, 182, 212, 0.2);
  }

  .aurora-table td {
    padding: 1rem;
    font-size: 0.875rem;
  }

  .aurora-td-id {
    color: rgba(255, 255, 255, 0.6);
    font-family: 'Courier New', monospace;
  }

  .aurora-customer-cell {
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }

  .aurora-customer-avatar {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    flex-shrink: 0;
  }

  .aurora-customer-name {
    font-weight: 600;
    color: #FFFFFF;
    margin-bottom: 0.125rem;
  }

  .aurora-customer-email {
    font-size: 0.75rem;
    color: rgba(255, 255, 255, 0.6);
  }

  .aurora-td-amount {
    font-weight: 600;
    color: #FFFFFF;
  }

  .aurora-status-badge {
    display: inline-block;
    padding: 0.375rem 0.75rem;
    border-radius: 12px;
    font-size: 0.75rem;
    font-weight: 600;
  }

  .aurora-status-success {
    background: rgba(16, 185, 129, 0.15);
    color: #10B981;
    border: 1px solid rgba(16, 185, 129, 0.3);
  }

  .aurora-status-pending {
    background: rgba(245, 158, 11, 0.15);
    color: #F59E0B;
    border: 1px solid rgba(245, 158, 11, 0.3);
  }

  .aurora-status-failed {
    background: rgba(239, 68, 68, 0.15);
    color: #EF4444;
    border: 1px solid rgba(239, 68, 68, 0.3);
  }

  .aurora-td-date {
    color: rgba(255, 255, 255, 0.7);
  }

  .aurora-action-btn,
  .aurora-icon-btn {
    width: 32px;
    height: 32px;
    border-radius: 8px;
    border: 1px solid rgba(255, 255, 255, 0.15);
    background: rgba(255, 255, 255, 0.05);
    color: rgba(255, 255, 255, 0.7);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.2s ease;
  }

  .aurora-action-btn:hover,
  .aurora-icon-btn:hover {
    background: rgba(6, 182, 212, 0.15);
    border-color: rgba(6, 182, 212, 0.4);
    color: #06B6D4;
  }

  /* ========== Responsive Design ========== */
  @media (max-width: 768px) {
    .aurora-container {
      padding: 0 1rem;
    }

    .aurora-stats-grid {
      grid-template-columns: 1fr;
    }

    .aurora-nav-links {
      display: none;
    }

    .aurora-table-container {
      overflow-x: auto;
    }

    .aurora-table {
      min-width: 800px;
    }

    .aurora-progress-grid {
      grid-template-columns: 1fr;
    }
  }
`;
