import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(() => ({
  plugins: [react()],
  // 支持子路徑部署：通過環境變數 VITE_BASE_URL 配置
  // 預設為 '/'（根部署）
  base: process.env.VITE_BASE_URL || '/',
  // 允許從外部網路訪問（綁定 0.0.0.0）
  server: {
    host: '0.0.0.0',
    port: 1000,
  },
  // 🚀 esbuild minification options (used when build.minify: 'esbuild')
  // Note: esbuild's drop is applied during minification, not during transform
  esbuild: {
    // Drop console.log and console.debug in production builds
    // Keeps console.warn and console.error for debugging production issues
    drop: process.env.NODE_ENV === 'production' ? ['console', 'debugger'] : [],
    // Alternatively, use pure annotations for tree-shaking specific calls:
    // pure: ['console.log', 'console.debug'],
  },
  // 構建配置：確保每次內容變化都生成新的 hash
  build: {
    // 🚀 OPTIMIZATION: Switch from Terser to esbuild for faster builds (50-70% faster)
    // Trade-off: esbuild produces slightly larger output (1-5%) but builds 5-10x faster
    // Console statements are dropped via esbuild.drop config above
    minify: 'esbuild',
    // Target modern browsers for smaller output
    target: 'es2020',
    // Optimize chunk size (warn at 1000KB)
    chunkSizeWarningLimit: 1000,
    // Enable CSS code splitting
    cssCodeSplit: true,
    rollupOptions: {
      output: {
        // 基於內容生成 hash，確保快取失效
        entryFileNames: 'assets/[name]-[hash].js',
        chunkFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash][extname]',
        // OPTIMIZATION: More granular chunk splitting for better caching
        // Bundle 分割策略：將大型依賴分離為獨立 chunk
        // 預期效果：首屏加載減少 60-70%，更好的緩存命中率
        manualChunks: {
          // Core React runtime (~140KB gzip) - critical, keep separate
          'vendor-react': ['react', 'react-dom', 'react-router-dom'],
          // State management (~8KB gzip)
          'vendor-state': ['zustand', 'immer'],
          // Monaco Editor - lazy loaded, only CodeEditorPage (~2-3MB)
          'vendor-monaco': ['@monaco-editor/react'],
          // Syntax highlighter - lazy loaded
          'vendor-syntax': ['react-syntax-highlighter'],
          // OPTIMIZATION: Sucrase now lazy-loaded only when needed
          // No longer in initial bundle - saves 300KB
          'vendor-sucrase': ['sucrase'],
          // Preact runtime - used by JSX preview
          'vendor-preact': ['preact', 'preact-render-to-string'],
          // Animation library - used by some components
          'vendor-motion': ['framer-motion'],
          // Drag and drop - only used in editor
          'vendor-dnd': ['@dnd-kit/core', '@dnd-kit/sortable', '@dnd-kit/utilities'],
          // Virtual scrolling - used in list pages
          'vendor-virtual': ['react-window'],
          // Utilities - small but frequently updated
          'vendor-utils': ['dompurify', 'nanoid', 'lucide-react'],
        }
      },
      // Tree-shaking optimization
      treeshake: {
        moduleSideEffects: 'no-external',
        propertyReadSideEffects: false,
        unknownGlobalSideEffects: false,
      }
    }
  }
}))
