import { defineConfig } from 'vitest/config';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  test: {
    globals: true,
    environment: 'node',
    include: ['tests/**/*.test.js'],
    onConsoleLog(log, _type) {
      // 過濾測試中可預期的 loader 訊息，避免淹沒真正的錯誤輸出。
      // 回傳 false 代表不輸出該筆 log。
      if (typeof log === 'string') {
        if (log.startsWith('[FamilyLoader]') || log.startsWith('[ContentLoader]')) {
          return false;
        }
      }
      return undefined;
    },
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      exclude: ['node_modules/', 'tests/']
    }
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
});
