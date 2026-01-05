# Minimalism Reaction Picker

## 中文版本 (zh-CN)

請創建一個極簡主義（Minimalism）風格的表情反應選擇器（Reaction Picker）組件。

### 設計理念

極簡主義反應選擇器追求「少即是多」的設計哲學，通過移除多餘的裝飾元素，讓表情本身成為視覺焦點。設計應該乾淨、直接、高效，提供無干擾的選擇體驗。每一個視覺元素都應該有其存在的目的，拒絕任何不必要的裝飾。

### 視覺特徵

**整體風格**
- 乾淨的白色或極淺灰背景
- 極少或無邊框
- 輕量級陰影或無陰影
- 小圓角或直角設計
- 大量留白，讓內容呼吸

**容器設計**
- 背景：純白色（#FFFFFF）或極淺灰（#FAFAFA）
- 邊框：無邊框或極細邊框（1px solid #E5E7EB）
- 陰影：輕微或無（box-shadow: 0 2px 8px rgba(0,0,0,0.08) 或 none）
- 圓角：小圓角（4-8px）或無圓角
- 內邊距：適中（8-12px）

**表情顯示**
- 表情尺寸：24-28px（緊湊）或 32-36px（標準）
- 間距均勻，呼吸感充足（8-12px）
- 無多餘裝飾或背景
- 表情本身是唯一的視覺元素

**懸停效果**
- 極度克制的視覺變化
- 方式一：淡灰色圓形背景（#F5F5F5 或 rgba(0,0,0,0.04)）
- 方式二：僅透明度變化（opacity 0.6 → 1）
- 方式三：微妙的下劃線或點
- 過渡快速流暢（100-150ms）

**選中狀態**
- 輕微的背景色區分
- 或使用品牌主色作為圓點/下劃線
- 避免過於強烈的選中效果
- 保持整體視覺平衡

### 交互體驗

**觸發與出現**
- 點擊觸發按鈕後立即出現
- 淡入動畫（opacity 0 → 1），時長短（150ms）
- 無縮放或複雜動畫
- 可選：輕微的向下位移（translateY -4px → 0）

**表情選擇**
- 點擊立即響應
- 無波紋或複雜效果
- 可選：選中表情輕微放大後恢復
- 選擇後面板快速收起

**關閉行為**
- 點擊外部區域關閉
- 選擇後自動關閉
- 淡出消失，無多餘動畫
- 響應迅速，無延遲

**動畫原則**
- 快速且無感（用戶幾乎察覺不到）
- 時長控制在 100-200ms
- 僅使用 opacity 和 transform
- 緩動函數：ease-out 或 linear

### 佈局設計

**水平單行排列**
- 5-7 個常用表情水平排列
- 間距均勻，對齊整潔
- 容器寬度自適應內容
- 無多餘的「更多」按鈕（或極度簡化）

**極簡網格**
- 規則的網格佈局
- 無分隔線，僅靠間距區分
- 最少的視覺元素
- 可選：最近使用區域單獨一行

**無框設計**
- 表情直接浮動顯示
- 無容器背景
- 僅有極輕的陰影提供層次
- 適合深色背景環境

### 顏色方案

**亮色主題**
- 背景：#FFFFFF 或 #FAFAFA
- 懸停背景：#F5F5F5 或 #F0F0F0
- 選中指示：品牌主色（如 #3B82F6）或深灰（#374151）
- 邊框（如有）：#E5E7EB

**暗色主題**
- 背景：#1F2937 或 #111827
- 懸停背景：#374151 或 rgba(255,255,255,0.08)
- 選中指示：品牌主色或淺灰
- 邊框（如有）：#374151

**雙色原則**
- 整體只使用 2-3 種顏色
- 背景色 + 強調色（選中/懸停）
- 表情本身提供色彩
- 避免多餘的裝飾色

### 字體與圖標

**如有文字說明**
- 使用系統字體或簡潔無襯線字體
- 字重 regular 或 medium
- 字號適中，不搶眼
- 顏色使用灰色（#6B7280）

**圖標（如更多按鈕）**
- 線性圖標（1.5-2px stroke）
- 無填充
- 顏色與文字一致
- 尺寸 16-20px

### 技術實現要點

**容器樣式**
```css
.minimalist-picker {
  background: #FFFFFF;
  border-radius: 6px;
  padding: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  display: flex;
  gap: 4px;
}
```

**表情按鈕**
```css
.reaction-item {
  padding: 6px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.1s ease;
}

.reaction-item:hover {
  background-color: #F5F5F5;
}

.reaction-item.selected {
  background-color: rgba(59, 130, 246, 0.1);
}
```

**淡入動畫**
```css
.minimalist-picker {
  animation: fadeIn 0.15s ease-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-4px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
```

### 應用場景

**專業工具與應用**
- 項目管理軟件
- 文檔協作工具
- 企業級應用
- 專注於效率的產品

**閱讀類產品**
- 電子書閱讀器
- 新聞閱讀應用
- 博客平台
- 內容為王的設計

**高端品牌網站**
- 奢侈品牌
- 設計工作室
- 建築/藝術類網站
- 追求品質感的產品

**技術文檔/開發工具**
- GitHub 風格
- 開發者工具
- 技術博客
- 代碼協作平台

### 無障礙設計

**視覺對比**
- 確保懸停/選中狀態有足夠區分度
- 不僅依賴顏色變化
- 可添加微妙的形狀變化

**ARIA 屬性**
- 正確的語義標記
- 表情描述文字
- 鍵盤可訪問

**焦點狀態**
- 清晰的焦點環（focus ring）
- 使用系統默認或品牌色
- 不可移除焦點指示

### 設計建議

**克制原則**
- 每添加一個元素，問「這是必須的嗎？」
- 移除所有不增加功能的裝飾
- 用留白替代分隔線

**一致性**
- 間距系統一致（4px 或 8px 基準）
- 圓角統一
- 動畫時長和緩動統一

**功能優先**
- 每個視覺元素都有明確功能
- 裝飾讓位於功能
- 清晰的視覺層級

**細節把控**
- 像素級的對齊
- 一致的間距
- 精確的顏色值
- 平滑的過渡

### 避免的設計

- 多餘的邊框和分隔線
- 過重的陰影
- 複雜的動畫效果
- 過多的顏色變化
- 不必要的圖標裝飾
- 過小或過大的尺寸極端
- 擁擠的佈局

### 適用場景

- 專業級工具和企業應用
- 內容導向的閱讀產品
- 高端品牌和設計類網站
- 開發者工具和技術平台
- 追求效率和專注的產品
- 需要長時間使用的界面

---

## English Version (en-US)

Please create a Minimalism style reaction picker component.

### Design Philosophy

Minimalism reaction picker pursues the "less is more" design philosophy, letting emojis themselves become the visual focus by removing excessive decorative elements. Design should be clean, direct, and efficient, providing a distraction-free selection experience. Every visual element should have a purpose, rejecting any unnecessary decoration.

### Visual Characteristics

**Overall Style**
- Clean white or very light gray background
- Minimal or no borders
- Lightweight shadows or none
- Small rounded corners or square design
- Ample whitespace, letting content breathe

**Container Design**
- Background: Pure white (#FFFFFF) or very light gray (#FAFAFA)
- Border: No border or very thin border (1px solid #E5E7EB)
- Shadow: Slight or none (box-shadow: 0 2px 8px rgba(0,0,0,0.08) or none)
- Border radius: Small (4-8px) or none
- Padding: Moderate (8-12px)

**Emoji Display**
- Emoji size: 24-28px (compact) or 32-36px (standard)
- Even spacing, ample breathing room (8-12px)
- No extra decoration or backgrounds
- Emoji itself is the only visual element

**Hover Effect**
- Extremely restrained visual change
- Option 1: Light gray circular background (#F5F5F5 or rgba(0,0,0,0.04))
- Option 2: Only opacity change (opacity 0.6 → 1)
- Option 3: Subtle underline or dot
- Quick smooth transition (100-150ms)

**Selected State**
- Slight background color distinction
- Or use brand primary color as dot/underline
- Avoid overly strong selection effect
- Maintain overall visual balance

### Interaction Experience

**Trigger and Appearance**
- Appears immediately after clicking trigger button
- Fade-in animation (opacity 0 → 1), short duration (150ms)
- No scaling or complex animations
- Optional: Slight downward displacement (translateY -4px → 0)

**Emoji Selection**
- Click responds immediately
- No ripple or complex effects
- Optional: Selected emoji slightly enlarges then returns
- Panel collapses quickly after selection

**Close Behavior**
- Click outside area to close
- Auto-close after selection
- Fade out, no extra animations
- Quick response, no delay

**Animation Principles**
- Quick and imperceptible (users barely notice)
- Duration controlled to 100-200ms
- Only use opacity and transform
- Easing function: ease-out or linear

### Layout Design

**Horizontal Single Row**
- 5-7 common emojis arranged horizontally
- Even spacing, neat alignment
- Container width adapts to content
- No extra "more" button (or extremely simplified)

**Minimal Grid**
- Regular grid layout
- No separating lines, only spacing distinction
- Minimal visual elements
- Optional: Recently used area in separate row

**Borderless Design**
- Emojis float directly
- No container background
- Only very light shadow for layering
- Suitable for dark background environments

### Color Scheme

**Light Theme**
- Background: #FFFFFF or #FAFAFA
- Hover background: #F5F5F5 or #F0F0F0
- Selection indicator: Brand primary (e.g., #3B82F6) or dark gray (#374151)
- Border (if any): #E5E7EB

**Dark Theme**
- Background: #1F2937 or #111827
- Hover background: #374151 or rgba(255,255,255,0.08)
- Selection indicator: Brand primary or light gray
- Border (if any): #374151

**Two-Color Principle**
- Use only 2-3 colors overall
- Background color + accent color (selection/hover)
- Emojis themselves provide color
- Avoid extra decorative colors

### Typography and Icons

**If Text Description Present**
- Use system fonts or clean sans-serif
- Font weight regular or medium
- Moderate font size, not attention-grabbing
- Color uses gray (#6B7280)

**Icons (e.g., More Button)**
- Linear icons (1.5-2px stroke)
- No fill
- Color consistent with text
- Size 16-20px

### Technical Implementation Points

**Container Styles**
```css
.minimalist-picker {
  background: #FFFFFF;
  border-radius: 6px;
  padding: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  display: flex;
  gap: 4px;
}
```

**Emoji Button**
```css
.reaction-item {
  padding: 6px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.1s ease;
}

.reaction-item:hover {
  background-color: #F5F5F5;
}

.reaction-item.selected {
  background-color: rgba(59, 130, 246, 0.1);
}
```

**Fade-in Animation**
```css
.minimalist-picker {
  animation: fadeIn 0.15s ease-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-4px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
```

### Application Scenarios

**Professional Tools and Applications**
- Project management software
- Document collaboration tools
- Enterprise applications
- Products focused on efficiency

**Reading Products**
- E-book readers
- News reading apps
- Blog platforms
- Content-first design

**Premium Brand Websites**
- Luxury brands
- Design studios
- Architecture/art websites
- Products pursuing quality feel

**Technical Documentation/Developer Tools**
- GitHub style
- Developer tools
- Technical blogs
- Code collaboration platforms

### Accessibility Design

**Visual Contrast**
- Ensure hover/selected states have sufficient distinction
- Don't rely only on color changes
- Can add subtle shape changes

**ARIA Attributes**
- Correct semantic markup
- Emoji description text
- Keyboard accessible

**Focus State**
- Clear focus ring
- Use system default or brand color
- Cannot remove focus indicator

### Design Recommendations

**Restraint Principle**
- For each added element, ask "Is this necessary?"
- Remove all decoration that doesn't add function
- Use whitespace instead of dividing lines

**Consistency**
- Consistent spacing system (4px or 8px base)
- Unified border radius
- Unified animation duration and easing

**Function First**
- Every visual element has clear function
- Decoration yields to function
- Clear visual hierarchy

**Detail Control**
- Pixel-level alignment
- Consistent spacing
- Precise color values
- Smooth transitions

### Designs to Avoid

- Excessive borders and dividing lines
- Heavy shadows
- Complex animation effects
- Too many color changes
- Unnecessary icon decorations
- Extreme sizes too small or large
- Crowded layouts

### Use Cases

- Professional tools and enterprise applications
- Content-oriented reading products
- Premium brands and design websites
- Developer tools and technical platforms
- Products pursuing efficiency and focus
- Interfaces for extended use
