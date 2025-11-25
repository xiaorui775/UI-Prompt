import { useState, useEffect, createContext, useContext } from 'react';

/**
 * useDarkMode - 深色模式管理 Hook (支持三種模式)
 *
 * 功能:
 * - 從 localStorage 讀取並保存深色模式偏好
 * - 支持三種模式: 'light' (淺色), 'dark' (深色), 'system' (跟隨系統)
 * - 自動檢測系統深色模式偏好 (prefers-color-scheme)
 * - 在 <html> 元素上添加/移除 'dark' class
 * - 使用 Context 共享狀態，避免多個組件調用時狀態不同步
 *
 * @returns {Object} { mode, setMode, isDarkMode }
 */

// 創建 Context
const DarkModeContext = createContext(null);

// Provider 組件
export function DarkModeProvider({ children }) {
  // 初始化：優先使用 localStorage，默認為 'system'
  const [mode, setMode] = useState(() => {
    // 確保在客戶端執行
    if (typeof window === 'undefined') return 'system';

    const savedMode = localStorage.getItem('darkModePreference');
    if (savedMode && ['light', 'dark', 'system'].includes(savedMode)) {
      return savedMode;
    }
    return 'system'; // 默認跟隨系統
  });

  // 獲取系統偏好
  const [systemPrefersDark, setSystemPrefersDark] = useState(() => {
    if (typeof window === 'undefined') return false;
    if (window.matchMedia) {
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  // 監聽系統深色模式變化
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    const handleChange = (e) => {
      setSystemPrefersDark(e.matches);
    };

    // 現代瀏覽器使用 addEventListener
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', handleChange);
      return () => mediaQuery.removeEventListener('change', handleChange);
    } else {
      // 兼容舊瀏覽器
      mediaQuery.addListener(handleChange);
      return () => mediaQuery.removeListener(handleChange);
    }
  }, []);

  // 計算實際是否應該使用深色模式
  const isDarkMode = mode === 'dark' || (mode === 'system' && systemPrefersDark);

  // 更新 DOM - 只在這裡統一管理
  useEffect(() => {
    const root = document.documentElement;

    if (isDarkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [isDarkMode]);

  // 更新 localStorage
  useEffect(() => {
    localStorage.setItem('darkModePreference', mode);
  }, [mode]);

  const value = {
    mode,           // 'light' | 'dark' | 'system'
    setMode,        // 設置模式的函數
    isDarkMode      // 當前實際是否為深色模式
  };

  return (
    <DarkModeContext.Provider value={value}>
      {children}
    </DarkModeContext.Provider>
  );
}

// Hook - 使用 Context
// eslint-disable-next-line react-refresh/only-export-components
export function useDarkMode() {
  const context = useContext(DarkModeContext);

  // 如果沒有 Provider，拋出錯誤
  if (!context) {
    throw new Error('useDarkMode must be used within a DarkModeProvider');
  }

  return context;
}
