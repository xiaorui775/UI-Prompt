/**
 * Hand-Drawn SVG Icons for Paper/Cutout Style
 * 手繪風格 SVG 圖標庫 - 模擬不規則線條和手寫效果
 */

// Styles Icon - 不規則九宮格
export function StylesIcon({ className = '', size = 64 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* 手繪九宮格 - 略有傾斜和彎曲 */}
      <path
        d="M12 12 L21.5 11.8 L22 21.3 L12.3 21.5 Z"
        stroke="#37474F"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M27 11.5 L36.5 11.7 L37 21 L27.2 21.4 Z"
        stroke="#37474F"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M42 11.8 L51.5 12 L52 21.5 L42.3 21.3 Z"
        stroke="#37474F"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 27 L21.3 27.2 L21.8 36.5 L12.2 36.8 Z"
        stroke="#37474F"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M27 27.3 L36.8 27 L37.2 36.3 L27.5 36.5 Z"
        stroke="#37474F"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M42 27.2 L51.7 27.5 L52 36.7 L42.2 36.4 Z"
        stroke="#37474F"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 42.5 L21.5 42.3 L22 51.8 L12.5 52 Z"
        stroke="#37474F"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M27 42.2 L36.5 42.5 L37 51.5 L27.3 51.7 Z"
        stroke="#37474F"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M42 42.4 L51.8 42.6 L52 52 L42.4 51.8 Z"
        stroke="#37474F"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// Prompts Icon - 彎曲的橫線（模擬手寫文字）
export function PromptsIcon({ className = '', size = 64 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* 手繪文檔線條 - 略有波浪和彎曲 */}
      <path
        d="M14 16 Q18 15.5 22 16 T30 16 Q38 16.5 46 16 T54 16"
        stroke="#37474F"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M14 26 Q20 25.8 26 26 T38 26 Q44 26.3 50 26"
        stroke="#37474F"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M14 36 Q19 35.7 24 36 T34 36 Q42 36.4 50 36 T58 36"
        stroke="#37474F"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M14 46 Q21 46.2 28 46 T40 46"
        stroke="#37474F"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
      />
      {/* 文檔折角 */}
      <path
        d="M46 8 L46 18 L56 18"
        stroke="#37474F"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      {/* 文檔外框 */}
      <path
        d="M10 8 L44 8.5 L46 18 L46 56 L10.5 56.5 Z"
        stroke="#37474F"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

// Preview Icon - 手繪放大鏡
export function PreviewIcon({ className = '', size = 64 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* 放大鏡圓圈 - 不完美的圓形 */}
      <path
        d="M26 12 Q36 11.5 42 18 Q48 24 48 32 Q48.5 40 42 46 Q36 52 26 52 Q16 52.5 10 46 Q4 40 4 32 Q3.5 24 10 18 Q16 11.5 26 12 Z"
        stroke="#37474F"
        strokeWidth="2.8"
        strokeLinecap="round"
        fill="none"
      />
      {/* 放大鏡手柄 - 略有彎曲 */}
      <path
        d="M42 42 Q48 48 52 52 T60 60"
        stroke="#37474F"
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
      />
      {/* 內部細節線 */}
      <path
        d="M20 22 Q26 21.5 32 22"
        stroke="#37474F"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
        opacity="0.6"
      />
    </svg>
  );
}

// Copy Icon - 重疊的手繪矩形
export function CopyIcon({ className = '', size = 64 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* 後面的矩形 */}
      <path
        d="M18 14 L48 13.5 L48.5 43 L18.5 43.5 Z"
        stroke="#37474F"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        opacity="0.5"
      />
      {/* 前面的矩形 - 略有偏移 */}
      <path
        d="M12 20 L42 19.5 L42.5 49 L12.5 49.5 Z"
        stroke="#37474F"
        strokeWidth="2.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      {/* 複製箭頭 */}
      <path
        d="M38 28 L42 28 L42 24"
        stroke="#37474F"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

// Accessibility Icon - 手繪對勾
export function AccessibilityIcon({ className = '', size = 64 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* 手繪圓圈 */}
      <path
        d="M32 8 Q42 8.5 48 15 Q56 22 56 32 Q56.5 42 49 49 Q42 56 32 56 Q22 56.5 15 49 Q8 42 8 32 Q7.5 22 15 15 Q22 7.5 32 8 Z"
        stroke="#37474F"
        strokeWidth="2.8"
        strokeLinecap="round"
        fill="none"
      />
      {/* 手繪對勾 - 粗壯版本 */}
      <path
        d="M18 32 Q22 36 26 40 Q30 44 34 48"
        stroke="#37474F"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="M34 48 Q40 42 46 34 Q52 26 56 18"
        stroke="#37474F"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

// Responsive Icon - 多層不規則矩形
export function ResponsiveIcon({ className = '', size = 64 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* 大屏幕（桌面） */}
      <path
        d="M6 12 L58 11.5 L58.5 34 L6.5 34.5 Z"
        stroke="#37474F"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      {/* 中屏幕（平板） */}
      <path
        d="M12 38 L46 37.5 L46.5 50 L12.5 50.5 Z"
        stroke="#37474F"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      {/* 小屏幕（手機） */}
      <path
        d="M20 54 L38 53.5 L38.5 62 L20.5 62.5 Z"
        stroke="#37474F"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

// 手繪箭頭 - 用於 How It Works 連接線
export function HandDrawnArrow({ className = '', size = 100, direction = 'right' }) {
  const rotation = {
    right: 0,
    down: 90,
    left: 180,
    up: 270
  }[direction];

  return (
    <svg
      width={size}
      height={size / 4}
      viewBox="0 0 100 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ transform: `rotate(${rotation}deg)` }}
    >
      {/* 箭頭主體 - 略有波浪 */}
      <path
        d="M4 12 Q25 11 50 12 T96 12"
        stroke="#9E9E9E"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
      />
      {/* 箭頭尖端 */}
      <path
        d="M88 6 L96 12 L88 18"
        stroke="#9E9E9E"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

// 通用圖標包裝器 - 根據類型返回對應圖標
export function HandDrawnIcon({ type, size = 64, className = '' }) {
  const icons = {
    styles: StylesIcon,
    prompts: PromptsIcon,
    preview: PreviewIcon,
    copy: CopyIcon,
    accessibility: AccessibilityIcon,
    responsive: ResponsiveIcon
  };

  const IconComponent = icons[type] || StylesIcon;

  return <IconComponent size={size} className={className} />;
}
