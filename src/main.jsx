import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { clearLoadersCache } from './data/components/loaders.js'

// Google Analytics 4 initialization (must be before Web Vitals)
import { initGA4 } from './utils/analytics.js'

// Web Vitals monitoring - tracks Core Web Vitals for SEO
import { initWebVitals } from './utils/webVitals.js'

if (import.meta.env.DEV && typeof window !== 'undefined') {
  window.__clearLoadersCache = clearLoadersCache
}

// Initialize GA4 first (creates window.gtag for Web Vitals to use)
initGA4()

// Initialize Web Vitals (sends metrics to GA4 in production)
initWebVitals()

const rootEl = document.getElementById('root');

createRoot(rootEl).render(
  <StrictMode>
    <App />
  </StrictMode>
);
