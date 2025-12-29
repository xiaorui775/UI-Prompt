# Material Design - List View

## Prompt (en-US)

### Style Characteristics
Material Design list views embrace the principles of paper and tactile interactions, using elevation shadows, ripple effects, and clear visual hierarchy. Lists feel like stacked cards with subtle shadows that respond to user interaction. The design follows Material's 8dp grid system with standardized spacing and elevation levels. Perfect for Android-style applications and modern web interfaces.

### Color Scheme
- **Background (Surface)**: White (#ffffff) or #fafafa
- **Item Background**: White (#ffffff)
- **Primary Color**: #1976d2 (Material Blue) or custom theme primary
- **Text (Primary)**: rgba(0,0,0,0.87)
- **Text (Secondary)**: rgba(0,0,0,0.60)
- **Text (Disabled)**: rgba(0,0,0,0.38)
- **Divider**: rgba(0,0,0,0.12)
- **Ripple Effect**: rgba(0,0,0,0.12) expanding circle on click
- **Selected**: rgba(25,118,210,0.12) (primary color with 12% opacity)
- **Hover**: rgba(0,0,0,0.04)

### Design Details
- **Borders**: No borders, use dividers 1px solid rgba(0,0,0,0.12) or elevation
- **Border Radius**: 0 for list items, 4px for container
- **Shadows (Elevation)**:
  - Resting: 0 2px 1px -1px rgba(0,0,0,0.2), 0 1px 1px 0 rgba(0,0,0,0.14), 0 1px 3px 0 rgba(0,0,0,0.12)
  - Raised (on hover): 0 3px 3px -2px rgba(0,0,0,0.2), 0 3px 4px 0 rgba(0,0,0,0.14), 0 1px 8px 0 rgba(0,0,0,0.12)
- **Spacing**: padding 16px vertical, 16px horizontal (follows 8dp grid)
- **Typography**: Primary text 1rem/400 rgba(0,0,0,0.87), secondary 0.875rem/400 rgba(0,0,0,0.60), Roboto font family
- **Hover**: Background rgba(0,0,0,0.04), elevation increases
- **Ripple**: Circular ripple effect expanding from click point, duration 600ms, rgba(0,0,0,0.12)
- **Icon**: Material Icons, 24x24px, rgba(0,0,0,0.54)
- **Avatar**: 40x40px circle, optional

---

## 提示詞 (zh-CN)

### 風格特點
Material Design 列表視圖擁抱紙張和觸覺互動的原則，使用高程陰影、漣漪效果和清晰的視覺層次。列表感覺像堆疊的卡片，帶有細微的陰影以響應用戶互動。設計遵循 Material 的 8dp 網格系統，標準化間距和高程級別。適合 Android 風格應用和現代 Web 界面。

### 配色方案
- **背景（表面）**：白色 (#ffffff) 或 #fafafa
- **列表項背景**：白色 (#ffffff)
- **主色**：#1976d2 (Material 藍) 或自定義主題主色
- **文字（主）**：rgba(0,0,0,0.87)
- **文字（次）**：rgba(0,0,0,0.60)
- **文字（禁用）**：rgba(0,0,0,0.38)
- **分隔線**：rgba(0,0,0,0.12)
- **漣漪效果**：rgba(0,0,0,0.12) 點擊時擴展圓圈
- **選中**：rgba(25,118,210,0.12) (主色 12% 不透明度)
- **懸停**：rgba(0,0,0,0.04)

### 細節設計
- **邊框**：無邊框，使用分隔線 1px solid rgba(0,0,0,0.12) 或高程
- **圓角**：列表項 0，容器 4px
- **陰影（高程）**：
  - 靜止：0 2px 1px -1px rgba(0,0,0,0.2), 0 1px 1px 0 rgba(0,0,0,0.14), 0 1px 3px 0 rgba(0,0,0,0.12)
  - 提升（懸停時）：0 3px 3px -2px rgba(0,0,0,0.2), 0 3px 4px 0 rgba(0,0,0,0.14), 0 1px 8px 0 rgba(0,0,0,0.12)
- **間距**：padding 16px 垂直，16px 水平（遵循 8dp 網格）
- **字體**：主文字 1rem/400 rgba(0,0,0,0.87)，次文字 0.875rem/400 rgba(0,0,0,0.60)，Roboto 字體
- **懸停**：背景 rgba(0,0,0,0.04)，高程增加
- **漣漪**：從點擊點擴展的圓形漣漪效果，持續 600ms，rgba(0,0,0,0.12)
- **圖標**：Material Icons，24x24px，rgba(0,0,0,0.54)
- **頭像**：40x40px 圓形，可選
