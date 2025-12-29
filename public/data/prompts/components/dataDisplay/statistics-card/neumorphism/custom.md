# Neumorphism - Statistics Card

## Prompt (en-US)

### Style Characteristics
Neumorphic statistics cards simulate the raised and recessed textures of real objects, using same-hue light and dark shadows to create soft 3D effects. Large centered icon circles with inset shadows appear embedded into the background, while progress bars and badges float with raised shadows. The tactile design brings warmth and comfort to data visualization.

### Color Scheme
- **Background**: Light gray (#e0e5ec)
- **Shadow (Light)**: #ffffff
- **Shadow (Dark)**: #b8bdc4
- **Text (Label)**: Medium gray (#6b7280)
- **Text (Value)**: Deep gray (#1f2937)
- **Text (Percentage)**: Green (#10b981)
- **Icon Gradients**:
  - Green: linear-gradient(145deg, #4ade80, #10b981)
  - Blue: linear-gradient(145deg, #60a5fa, #3b82f6)
  - Yellow: linear-gradient(145deg, #fbbf24, #f59e0b)
- **Progress Bar Gradients**:
  - Green: linear-gradient(90deg, #10b981, #4ade80) + shadow rgba(16,185,129,0.4)
  - Blue: linear-gradient(90deg, #3b82f6, #60a5fa) + shadow rgba(59,130,246,0.4)
  - Yellow: linear-gradient(90deg, #f59e0b, #fbbf24) + shadow rgba(245,158,11,0.4)
- **Badge Gradients**:
  - Success: linear-gradient(145deg, #dcfce7, #bbf7d0), text #166534
  - Info: linear-gradient(145deg, #dbeafe, #bfdbfe), text #1e40af
  - Warning: linear-gradient(145deg, #fef3c7, #fde68a), text #92400e

### Design Details
- **Borders**: None, rely on shadows
- **Border Radius**: 1.5rem (24px)
- **Shadows (Card)**:
  - Default (raised): 12px 12px 24px #b8bdc4, -12px -12px 24px #ffffff
  - Hover (deeper raised): 16px 16px 32px #b8bdc4, -16px -16px 32px #ffffff
- **Spacing**: padding 2rem (32px), icon margin 0 auto 1.5rem, label margin-bottom 0.75rem, value margin-bottom 1.25rem, progress margin-bottom 1.25rem
- **Typography**: Label 0.875rem/600 uppercase letter-spacing 0.05em (#6b7280), value 2.25rem/700 line-height 1 with text-shadow (#1f2937), percentage 0.875rem/700 (#10b981) with text-shadow
- **Hover**: Shadow deepens, card translates up 5px, icon scales 1.1 and rotates 10deg, transition 0.4s cubic-bezier(0.175,0.885,0.32,1.275)
- **Icon Circle**: 5rem (80px) diameter, inset shadow (inset 6px 6px 12px #b8bdc4, inset -6px -6px 12px #ffffff), gradient background, centered
- **Icon**: 2.5rem (40px), white, drop-shadow filter 0 2px 4px rgba(0,0,0,0.2)
- **Progress Container**: Background #d1d6dd, height 0.75rem (12px), full rounded, inset shadow (inset 3px 3px 6px #b8bdc4, inset -3px -3px 6px #e8edf4)
- **Progress Bar**: Full rounded, gradient with colored shadow
- **Badge**: Padding 0.375rem 0.875rem, full rounded, font-size 0.75rem/600, raised shadow (4px 4px 8px #b8bdc4, -4px -4px 8px #ffffff), gradient background

---

## 提示詞 (zh-CN)

### 風格特點
新擬物化統計卡片模擬真實物體的凹凸質感，使用同色系明暗陰影創造柔和的立體效果。大型居中圖標圓形配合內陰影顯得嵌入背景，而進度條和徽章則以凸起陰影浮於表面。觸感設計為數據可視化帶來溫和、舒適的視覺體驗。

### 配色方案
- **背景**：淺灰 (#e0e5ec)
- **陰影（亮）**：#ffffff
- **陰影（暗）**：#b8bdc4
- **文字（標籤）**：中灰 (#6b7280)
- **文字（數值）**：深灰 (#1f2937)
- **文字（百分比）**：綠色 (#10b981)
- **圖標漸變**：
  - 綠色：linear-gradient(145deg, #4ade80, #10b981)
  - 藍色：linear-gradient(145deg, #60a5fa, #3b82f6)
  - 黃色：linear-gradient(145deg, #fbbf24, #f59e0b)
- **進度條漸變**：
  - 綠色：linear-gradient(90deg, #10b981, #4ade80) + 陰影 rgba(16,185,129,0.4)
  - 藍色：linear-gradient(90deg, #3b82f6, #60a5fa) + 陰影 rgba(59,130,246,0.4)
  - 黃色：linear-gradient(90deg, #f59e0b, #fbbf24) + 陰影 rgba(245,158,11,0.4)
- **徽章漸變**：
  - Success：linear-gradient(145deg, #dcfce7, #bbf7d0)，文字 #166534
  - Info：linear-gradient(145deg, #dbeafe, #bfdbfe)，文字 #1e40af
  - Warning：linear-gradient(145deg, #fef3c7, #fde68a)，文字 #92400e

### 細節設計
- **邊框**：無邊框，依靠陰影
- **圓角**：1.5rem (24px)
- **陰影（卡片）**：
  - 默認（凸起）：12px 12px 24px #b8bdc4, -12px -12px 24px #ffffff
  - 懸停（更深凸起）：16px 16px 32px #b8bdc4, -16px -16px 32px #ffffff
- **間距**：padding 2rem (32px)，圖標 margin 0 auto 1.5rem，標籤 margin-bottom 0.75rem，數值 margin-bottom 1.25rem，進度條 margin-bottom 1.25rem
- **字體**：標籤 0.875rem/600 大寫 letter-spacing 0.05em (#6b7280)，數值 2.25rem/700 line-height 1 帶 text-shadow (#1f2937)，百分比 0.875rem/700 (#10b981) 帶 text-shadow
- **懸停**：陰影加深，卡片上移 5px，圖標縮放 1.1 旋轉 10deg，過渡 0.4s cubic-bezier(0.175,0.885,0.32,1.275)
- **圖標圓形**：直徑 5rem (80px)，內陰影 (inset 6px 6px 12px #b8bdc4, inset -6px -6px 12px #ffffff)，漸變背景，居中
- **圖標**：2.5rem (40px)，白色，drop-shadow 濾鏡 0 2px 4px rgba(0,0,0,0.2)
- **進度條容器**：背景 #d1d6dd，高度 0.75rem (12px)，完全圓角，內陰影 (inset 3px 3px 6px #b8bdc4, inset -3px -3px 6px #e8edf4)
- **進度條**：完全圓角，漸變配彩色陰影
- **徽章**：padding 0.375rem 0.875rem，完全圓角，字號 0.75rem/600，凸起陰影 (4px 4px 8px #b8bdc4, -4px -4px 8px #ffffff)，漸變背景
