/**
 * emptyStateTemplate - Empty State HTML Builder
 *
 * Builds a clean, professional empty state page when no preview content is available.
 * Features:
 * - Minimalist design with fade-in animations
 * - PostMessage communication with parent window
 * - "Get AI Prompt" button to open prompt drawer
 * - Fully responsive and accessible
 * - No external CDN dependencies (all styles are inlined)
 */

/**
 * Simple HTML escape to prevent XSS
 * Used instead of DOMPurify for lightweight sanitization in template strings
 * @param {string} str - String to escape
 * @returns {string} Escaped string
 */
function escapeHTML(str) {
  const div = typeof document !== 'undefined'
    ? document.createElement('div')
    : { textContent: str, innerHTML: '' };
  div.textContent = str;
  return div.innerHTML || str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

/**
 * Build empty state HTML for preview page
 *
 * This template is shown when a style has no fullPageHTML or preview content.
 * It provides a professional "coming soon" message with an action to view the AI prompt.
 *
 * @param {Object} options - Build options
 * @param {string} options.displayTitle - The style title to display (will be sanitized)
 * @param {string} [options.language='en-US'] - Language code for the HTML lang attribute
 * @param {Function} [options.t] - Translation function (optional, for future i18n support)
 * @returns {string} Complete HTML document string with embedded styles and scripts
 *
 * @example
 * const html = buildEmptyStateHTML({
 *   displayTitle: 'Glassmorphism',
 *   language: 'zh-CN'
 * });
 */
export function buildEmptyStateHTML({ displayTitle, language = 'en-US', t: _t }) {
  // Sanitize the title to prevent XSS
  const safeTitle = escapeHTML(displayTitle || '');
  // Use provided language or default to en-US
  const htmlLang = language || 'en-US';

  return `<!DOCTYPE html>
<html lang="${htmlLang}">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${safeTitle} - Preview</title>
  <style>
    /* Reset & Base */
    *, *::before, *::after {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
      background-color: #ffffff;
      color: #171717;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      height: 100vh;
      width: 100%;
      display: flex;
      flex-direction: column;
      position: relative;
      overflow: hidden;
    }

    /* Navigation */
    .empty-nav {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      padding: 2rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      z-index: 10;
    }

    .empty-nav-title {
      font-size: 0.875rem;
      font-weight: 500;
      letter-spacing: 0.025em;
      color: #171717;
    }

    .empty-nav-subtitle {
      font-size: 0.875rem;
      color: #a3a3a3;
    }

    /* Main Content */
    .empty-main {
      flex-grow: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      padding-left: 1.5rem;
      padding-right: 1.5rem;
    }

    .empty-container {
      max-width: 480px;
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
    }

    /* Icon */
    .empty-icon {
      margin-bottom: 2rem;
      color: #171717;
      opacity: 0.9;
    }

    .empty-icon svg {
      width: 48px;
      height: 48px;
    }

    /* Typography */
    .empty-title {
      font-size: 1.875rem;
      font-weight: 300;
      letter-spacing: -0.025em;
      color: #171717;
      margin-bottom: 1rem;
    }

    .empty-description {
      color: #737373;
      font-size: 1rem;
      line-height: 1.625;
      margin-bottom: 2.5rem;
      max-width: 24rem;
    }

    /* Button */
    .empty-btn-wrapper {
      width: 100%;
      display: flex;
      justify-content: center;
    }

    .empty-btn {
      position: relative;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      padding: 0.75rem 2rem;
      font-size: 0.875rem;
      font-weight: 500;
      color: #171717;
      background-color: transparent;
      border: 1px solid #e5e5e5;
      border-radius: 0.125rem;
      overflow: hidden;
      cursor: pointer;
      transition: all 0.2s ease-out;
    }

    .empty-btn:hover {
      background-color: #171717;
      color: #ffffff;
      border-color: #171717;
    }

    .empty-btn-content {
      position: relative;
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }

    .empty-btn-icon {
      width: 1rem;
      height: 1rem;
      color: #a3a3a3;
      transition: color 0.2s ease-out;
    }

    .empty-btn:hover .empty-btn-icon {
      color: #ffffff;
    }

    /* Note */
    .empty-note {
      margin-top: 1.5rem;
    }

    .empty-note-text {
      font-size: 0.75rem;
      color: #a3a3a3;
    }

    /* Footer Divider */
    .empty-footer-divider {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 1px;
      background-color: #f5f5f5;
    }

    /* Animations */
    .fade-in-up {
      animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
      opacity: 0;
      transform: translateY(10px);
    }

    .delay-100 { animation-delay: 0.1s; }
    .delay-200 { animation-delay: 0.2s; }
    .delay-300 { animation-delay: 0.3s; }

    @keyframes fadeInUp {
      from {
        opacity: 0;
        transform: translateY(10px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    /* Focus states for accessibility */
    *:focus-visible {
      outline: 1px solid #171717;
      outline-offset: 4px;
    }

    /* Lucide icon styling */
    .lucide {
      stroke: currentColor;
      stroke-width: 2;
      stroke-linecap: round;
      stroke-linejoin: round;
      fill: none;
    }

    /* Responsive */
    @media (min-width: 640px) {
      .empty-main {
        padding-left: 3rem;
        padding-right: 3rem;
      }

      .empty-title {
        font-size: 2.25rem;
      }
    }
  </style>
</head>
<body>

  <!-- Subtle Navigation Context -->
  <nav class="empty-nav">
    <div class="empty-nav-title">${safeTitle}</div>
    <div class="empty-nav-subtitle">Design Styles</div>
  </nav>

  <!-- Main Content Area -->
  <main class="empty-main">
    <div class="empty-container">

      <!-- Icon: Lightbulb for "coming soon" -->
      <div class="empty-icon fade-in-up">
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" class="lucide">
          <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-1 1.5-2 1.5-3.5a6 6 0 0 0-11 0c0 1.5.5 2.5 1.5 3.5 2.5 2.4 2.9 2.5 3 4"/>
          <path d="M9 18h6"/>
          <path d="M10 22h4"/>
        </svg>
      </div>

      <!-- Typography: Clean hierarchy -->
      <h1 class="empty-title fade-in-up delay-100">
        No Website Template Available
      </h1>

      <!-- Description -->
      <p class="empty-description fade-in-up delay-200">
        This design style doesn't have a full website template example yet. We're working hard to prepare more high-quality templates for you. Stay tuned!
      </p>

      <!-- Action Button -->
      <div class="empty-btn-wrapper fade-in-up delay-300">
        <button onclick="notifyParent()" class="empty-btn">
          <span class="empty-btn-content">
            <svg xmlns="http://www.w3.org/2000/svg" class="empty-btn-icon lucide" viewBox="0 0 24 24">
              <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"/>
            </svg>
            <span>AI Prompt</span>
          </span>
        </button>
      </div>

      <!-- Contextual Note -->
      <div class="empty-note fade-in-up delay-300">
        <p class="empty-note-text">
          You can click the 'AI Prompt' button to view the design guide and generation prompts for this style
        </p>
      </div>

    </div>
  </main>

  <!-- Minimal Footer Divider -->
  <div class="empty-footer-divider"></div>

  <script>
    // Notify parent window to open AI Prompt drawer
    function notifyParent() {
      // Try to trigger the prompt button in parent window
      if (window.parent && window.parent !== window) {
        window.parent.postMessage({ action: 'openPrompt' }, '*');
      }
    }
  </script>
</body>
</html>`;
}

// Export for testing
export { escapeHTML };

export default buildEmptyStateHTML;
