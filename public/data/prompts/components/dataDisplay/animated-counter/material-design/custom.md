# Material Design - Animated Counter

## Prompt (en-US)

### Style Characteristics
Material Design animated counters embrace elevation, bold typography, and meaningful motion. Numbers are displayed with strong typographic hierarchy following Material's type scale. Animations use Material's standard duration and easing curves for consistent, purposeful motion. Perfect for Material-themed applications and Android-style interfaces.

### Color Scheme
- **Background**: Surface white (#ffffff) or colored surface
- **Text (Number)**: rgba(0,0,0,0.87)
- **Text (Label)**: rgba(0,0,0,0.60)
- **Primary Color**: #1976d2 (Material Blue) for accents
- **Icon**: rgba(0,0,0,0.54) or primary color

### Design Details
- **Borders**: None
- **Border Radius**: 4px if using container
- **Shadows (if containerized)**: 0 2px 1px -1px rgba(0,0,0,0.2), 0 1px 1px 0 rgba(0,0,0,0.14), 0 1px 3px 0 rgba(0,0,0,0.12)
- **Spacing**: 16px padding if containerized, 12px between number and label
- **Typography**:
  - Number: 3-4rem/400 (Display or Headline scale), Roboto font, tabular-nums
  - Label: 0.875-1rem/400-500 (Body scale)
- **Animation**: Material motion easing (cubic-bezier(0.4, 0.0, 0.2, 1)), duration 300-500ms for short distances, 500-700ms for long
- **Icon**: Material Icons 24-32px, optional
- **Transition**: Use transform for performance, GPU-accelerated

---

## 提示詞 (zh-CN)

### 風格特點
Material Design 動畫計數器擁抱高程、粗體排版和有意義的動作。數字遵循 Material 類型比例顯示，具有強烈的排版層次。動畫使用 Material 標準持續時間和緩動曲線，實現一致、有目的的動作。適合 Material 主題應用和 Android 風格界面。

### 配色方案
- **背景**：表面白 (#ffffff) 或彩色表面
- **文字（數字）**：rgba(0,0,0,0.87)
- **文字（標籤）**：rgba(0,0,0,0.60)
- **主色**：#1976d2 (Material 藍) 用於強調
- **圖標**：rgba(0,0,0,0.54) 或主色

### 細節設計
- **邊框**：無
- **圓角**：如使用容器則 4px
- **陰影（如有容器）**：0 2px 1px -1px rgba(0,0,0,0.2), 0 1px 1px 0 rgba(0,0,0,0.14), 0 1px 3px 0 rgba(0,0,0,0.12)
- **間距**：如有容器則 padding 16px，數字與標籤間 12px
- **字體**：
  - 數字：3-4rem/400 (Display 或 Headline 比例)，Roboto 字體，tabular-nums
  - 標籤：0.875-1rem/400-500 (Body 比例)
- **動畫**：Material motion easing (cubic-bezier(0.4,0.0,0.2,1))，短距離 300-500ms，長距離 500-700ms
- **圖標**：Material Icons 24-32px，可選
- **過渡**：使用 transform 提升性能，GPU 加速
