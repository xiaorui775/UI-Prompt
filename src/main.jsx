import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { clearLoadersCache } from './data/components/loaders.js'

if (import.meta.env.DEV && typeof window !== 'undefined') {   
  window.__clearLoadersCache = clearLoadersCache

  // 載入 Profiler/Bench（僅開發模式且僅在編輯器頁面）
  // 避免在其他頁面初始化 store 導致無限循環
  if (window.location.pathname.includes('/layout')) {
    import('./utils/editor/profiler.js').catch(() => {})
  }
}

const rootEl = document.getElementById('root');
const RootApp = import.meta.env.DEV ? (
  <App />
) : (
  <StrictMode>
    <App />
  </StrictMode>
);
createRoot(rootEl).render(RootApp)
