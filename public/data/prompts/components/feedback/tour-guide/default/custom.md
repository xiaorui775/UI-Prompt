# Default Tour Guide

## 中文版本 (zh-CN)

請創建一個默認風格的新手引導（Tour Guide）組件。

### 設計理念

新手引導組件通過逐步高亮和解釋界面元素，幫助用戶快速熟悉產品功能。設計應清晰、友好、非侵入式，在有效傳達信息的同時不讓用戶感到壓迫。引導過程應該是一次流暢、有節奏的視覺旅程。

### 視覺特徵

**整體結構**
引導組件由以下核心元素組成：
- **聚光燈遮罩（Spotlight Overlay）**：半透明深色遮罩層，高亮當前步驟的目標元素
- **提示氣泡（Tooltip/Popover）**：包含步驟說明的浮動卡片
- **進度指示器**：顯示當前步驟位置
- **導航按鈕**：上一步、下一步、跳過、完成

**聚光燈效果**
- 遮罩層：半透明深色（bg-black/60 或 rgba(0,0,0,0.6)）
- 高亮區域：目標元素周圍的「窗口」，可以是：
  - 矩形切口（padding 8-16px）
  - 圓角矩形切口（border-radius 8-12px）
  - 圓形切口（適合圖標或按鈕）
- 邊緣過渡：可選柔和的陰影或發光效果
- Z-index：確保高於所有其他元素（z-index: 9999）

**提示氣泡設計**
- 白色或淺色背景（bg-white）
- 中等陰影（shadow-lg 或 shadow-xl）
- 圓角（rounded-lg，8-12px）
- 最大寬度：320-400px
- 箭頭指向高亮元素

**氣泡結構**
```
┌────────────────────────────────┐
│ [圖標] 步驟標題                ×│
├────────────────────────────────┤
│                                │
│ 步驟描述文字，解釋當前功能    │
│ 或操作的詳細說明...           │
│                                │
├────────────────────────────────┤
│ ○ ● ○ ○ ○     [上一步] [下一步]│
└────────────────────────────────┘
```

**顏色方案**
- 遮罩層：#000000，透明度 50-70%
- 氣泡背景：#FFFFFF
- 標題文字：#1F2937 或 #111827（深灰/黑色）
- 描述文字：#6B7280 或 #9CA3AF（灰色）
- 主按鈕：品牌主色（如 #3B82F6）
- 次要按鈕：透明或淺灰背景
- 進度點：當前步驟深色，其他淺灰

### 交互體驗

**步驟導航**
- 點擊「下一步」進入下一個引導步驟
- 點擊「上一步」返回上一個步驟
- 點擊「跳過」或「×」關閉整個引導
- 最後一步顯示「完成」或「開始使用」按鈕
- 可選：點擊遮罩層不關閉（避免誤操作）

**鍵盤導航**
- 方向鍵（← →）：切換步驟
- Enter/Space：確認當前步驟
- Escape：關閉引導

**焦點管理**
- 引導開始時聚焦到氣泡
- Tab 在氣泡內部元素間循環
- 關閉後焦點返回觸發元素

**動畫效果**
- 遮罩層淡入：opacity 0 → 0.6（200-300ms）
- 聚光燈移動：切換步驟時平滑過渡到新目標
- 氣泡出現：淡入 + 輕微位移（translateY）
- 氣泡切換：舊氣泡淡出，新氣泡淡入
- 動畫緩動：ease-out 或 cubic-bezier(0.16, 1, 0.3, 1)

**智能定位**
- 氣泡自動選擇最佳位置（上下左右）
- 避免超出視窗邊界
- 視窗滾動時自動調整位置
- 箭頭指向目標元素中心

### 進度指示器設計

**圓點式（最常見）**
- 當前步驟：實心圓點，品牌主色
- 已完成步驟：較淺的實心或空心
- 未完成步驟：空心圓點或淺灰實心
- 點擊圓點可跳轉（可選）

**數字式**
- 顯示「第 X 步，共 Y 步」或「X / Y」
- 簡潔明了，適合步驟較多時

**進度條式**
- 線性進度條顯示完成百分比
- 分段顯示每個步驟
- 視覺上強調進度

### 應用場景

**新用戶引導**
- 首次登錄後自動啟動
- 介紹核心功能和操作
- 通常 5-8 個步驟
- 可選擇跳過

**功能更新引導**
- 新版本發布後顯示
- 介紹新功能或變更
- 步驟較少（2-4 步）
- 強調「新」標籤

**特定任務引導**
- 用戶首次執行某任務時觸發
- 步驟式引導完成任務
- 與實際操作同步

**功能探索**
- 用戶主動點擊「幫助」或「?」圖標
- 可選擇感興趣的功能了解
- 按需啟動，非強制

### 內容設計最佳實踐

**標題撰寫**
- 簡短明確（5-10 個字）
- 動作導向（如「添加您的第一個項目」）
- 避免技術術語

**描述撰寫**
- 1-3 句話，控制在 100 字內
- 說明「這是什麼」和「為什麼有用」
- 可包含快捷鍵提示
- 使用友好語調

**按鈕文案**
- 上一步 / 下一步（標準）
- 了解 / 繼續（友好）
- 跳過 / 稍後查看（退出選項）
- 完成 / 開始使用（最後一步）

### 技術實現要點

**遮罩層實現**
```css
.tour-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  z-index: 9998;
}

/* 使用 CSS clip-path 或 SVG mask 創建聚光燈切口 */
.tour-spotlight {
  /* 使用 box-shadow 創建遮罩效果 */
  box-shadow: 0 0 0 9999px rgba(0, 0, 0, 0.6);
  position: absolute;
  border-radius: 8px;
  z-index: 9999;
}
```

**氣泡定位**
```css
.tour-tooltip {
  position: fixed;
  max-width: 380px;
  background: white;
  border-radius: 12px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15);
  z-index: 10000;
}

/* 箭頭 */
.tour-tooltip::before {
  content: '';
  position: absolute;
  border: 8px solid transparent;
  border-bottom-color: white;
  /* 位置根據 placement 動態調整 */
}
```

**滾動到視圖**
```javascript
// 確保目標元素在視窗內
targetElement.scrollIntoView({
  behavior: 'smooth',
  block: 'center'
});
```

### 無障礙設計

**ARIA 屬性**
- 遮罩層：`aria-hidden="true"`（非交互）
- 氣泡：`role="dialog"` + `aria-modal="true"`
- 關閉按鈕：`aria-label="關閉引導"`
- 導航按鈕：清晰的 `aria-label`
- 進度指示：`aria-label="步驟 X，共 Y 步"`

**焦點管理**
- 引導開始時焦點移至氣泡
- Tab 循環限制在氣泡內
- 關閉後焦點返回觸發元素

**屏幕閱讀器**
- 步驟內容可被完整讀取
- 進度狀態清晰通報
- 導航按鈕功能明確

### 設計建議

**步驟數量**
- 首次引導：5-8 步（核心功能）
- 功能更新：2-4 步（新功能介紹）
- 避免超過 10 步（用戶易失去耐心）

**視覺層級**
- 高亮區域最醒目
- 氣泡內容次之
- 進度和導航最後

**退出機制**
- 始終提供跳過選項
- 明確的關閉按鈕
- 記住用戶選擇（不再顯示）

**響應式設計**
- 移動端氣泡寬度自適應
- 小屏幕可使用底部面板替代氣泡
- 觸控目標不小於 44x44px

### 設計風格變體

**極簡風格**
- 輕薄的遮罩層（40-50% 透明度）
- 簡潔的白色氣泡
- 無裝飾，純文字說明
- 小圓點進度指示

**Material Design**
- 使用 Material 陰影層級
- 波紋效果按鈕
- 動畫使用 Material 緩動曲線
- 標準 Material 調色板

**漸進式引導**
- 無遮罩層，只有氣泡
- 用戶可與界面同時交互
- 適合不強制的引導場景
- 更輕量、非侵入式

**互動式引導**
- 用戶必須完成指定操作才能進入下一步
- 實時驗證用戶操作
- 適合培訓或關鍵流程
- 確保用戶真正學會

### 適用場景

- 新用戶首次登錄後的功能介紹
- 產品重大更新後的變更說明
- 複雜功能的操作指引
- 關鍵業務流程的培訓
- 幫助中心或功能探索入口
- 任何需要逐步指導用戶的場景

---

## English Version (en-US)

Please create a default style tour guide component.

### Design Philosophy

Tour guide components help users quickly familiarize themselves with product features through step-by-step highlighting and explanation of interface elements. Design should be clear, friendly, and non-intrusive, effectively conveying information without making users feel pressured. The guidance process should be a smooth, rhythmic visual journey.

### Visual Characteristics

**Overall Structure**
Guide component consists of these core elements:
- **Spotlight Overlay**: Semi-transparent dark overlay layer highlighting current step's target element
- **Tooltip/Popover**: Floating card containing step description
- **Progress Indicator**: Shows current step position
- **Navigation Buttons**: Previous, Next, Skip, Finish

**Spotlight Effect**
- Overlay: Semi-transparent dark (bg-black/60 or rgba(0,0,0,0.6))
- Highlighted area: "Window" around target element, can be:
  - Rectangular cutout (padding 8-16px)
  - Rounded rectangle cutout (border-radius 8-12px)
  - Circular cutout (suitable for icons or buttons)
- Edge transition: Optional soft shadow or glow effect
- Z-index: Ensure above all other elements (z-index: 9999)

**Tooltip Design**
- White or light background (bg-white)
- Medium shadow (shadow-lg or shadow-xl)
- Rounded corners (rounded-lg, 8-12px)
- Max width: 320-400px
- Arrow pointing to highlighted element

**Tooltip Structure**
```
┌────────────────────────────────┐
│ [Icon] Step Title              ×│
├────────────────────────────────┤
│                                │
│ Step description text,        │
│ explaining current feature... │
│                                │
├────────────────────────────────┤
│ ○ ● ○ ○ ○     [Previous] [Next]│
└────────────────────────────────┘
```

**Color Scheme**
- Overlay: #000000, opacity 50-70%
- Tooltip background: #FFFFFF
- Title text: #1F2937 or #111827 (dark gray/black)
- Description text: #6B7280 or #9CA3AF (gray)
- Primary button: Brand primary color (e.g., #3B82F6)
- Secondary button: Transparent or light gray background
- Progress dots: Current step dark, others light gray

### Interaction Experience

**Step Navigation**
- Click "Next" to proceed to next guide step
- Click "Previous" to return to previous step
- Click "Skip" or "×" to close entire guide
- Last step shows "Finish" or "Get Started" button
- Optional: Clicking overlay doesn't close (avoid accidental dismissal)

**Keyboard Navigation**
- Arrow keys (← →): Switch steps
- Enter/Space: Confirm current step
- Escape: Close guide

**Focus Management**
- Focus moves to tooltip when guide starts
- Tab cycles within tooltip elements
- Focus returns to trigger element when closed

**Animation Effects**
- Overlay fade-in: opacity 0 → 0.6 (200-300ms)
- Spotlight movement: Smooth transition to new target when switching steps
- Tooltip appearance: Fade-in + slight displacement (translateY)
- Tooltip switching: Old tooltip fades out, new one fades in
- Animation easing: ease-out or cubic-bezier(0.16, 1, 0.3, 1)

**Smart Positioning**
- Tooltip automatically chooses best position (top/bottom/left/right)
- Avoids going beyond viewport boundaries
- Auto-adjusts position when viewport scrolls
- Arrow points to target element center

### Progress Indicator Design

**Dot Style (Most Common)**
- Current step: Solid dot, brand primary color
- Completed steps: Lighter solid or hollow
- Incomplete steps: Hollow dots or light gray solid
- Clicking dots to jump (optional)

**Number Style**
- Shows "Step X of Y" or "X / Y"
- Clear and concise, suitable for many steps

**Progress Bar Style**
- Linear progress bar showing completion percentage
- Segmented display for each step
- Visually emphasizes progress

### Application Scenarios

**New User Onboarding**
- Automatically starts after first login
- Introduces core features and operations
- Usually 5-8 steps
- Option to skip

**Feature Update Guide**
- Displayed after new version release
- Introduces new features or changes
- Fewer steps (2-4 steps)
- Emphasizes "New" label

**Specific Task Guidance**
- Triggered when user performs certain task for first time
- Step-by-step guide to complete task
- Synchronized with actual operations

**Feature Exploration**
- User actively clicks "Help" or "?" icon
- Can choose features of interest to learn
- On-demand activation, not mandatory

### Content Design Best Practices

**Title Writing**
- Short and clear (5-10 words)
- Action-oriented (e.g., "Add your first item")
- Avoid technical jargon

**Description Writing**
- 1-3 sentences, under 100 characters
- Explain "what this is" and "why it's useful"
- Can include keyboard shortcut tips
- Use friendly tone

**Button Text**
- Previous / Next (standard)
- Learn / Continue (friendly)
- Skip / View Later (exit option)
- Finish / Get Started (final step)

### Technical Implementation Points

**Overlay Implementation**
```css
.tour-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  z-index: 9998;
}

/* Use CSS clip-path or SVG mask to create spotlight cutout */
.tour-spotlight {
  /* Use box-shadow to create overlay effect */
  box-shadow: 0 0 0 9999px rgba(0, 0, 0, 0.6);
  position: absolute;
  border-radius: 8px;
  z-index: 9999;
}
```

**Tooltip Positioning**
```css
.tour-tooltip {
  position: fixed;
  max-width: 380px;
  background: white;
  border-radius: 12px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15);
  z-index: 10000;
}

/* Arrow */
.tour-tooltip::before {
  content: '';
  position: absolute;
  border: 8px solid transparent;
  border-bottom-color: white;
  /* Position dynamically adjusted based on placement */
}
```

**Scroll Into View**
```javascript
// Ensure target element is within viewport
targetElement.scrollIntoView({
  behavior: 'smooth',
  block: 'center'
});
```

### Accessibility Design

**ARIA Attributes**
- Overlay: `aria-hidden="true"` (non-interactive)
- Tooltip: `role="dialog"` + `aria-modal="true"`
- Close button: `aria-label="Close guide"`
- Navigation buttons: Clear `aria-label`
- Progress indicator: `aria-label="Step X of Y"`

**Focus Management**
- Focus moves to tooltip when guide starts
- Tab cycling restricted within tooltip
- Focus returns to trigger element when closed

**Screen Reader**
- Step content fully readable
- Progress status clearly announced
- Navigation button functions clear

### Design Recommendations

**Step Count**
- Initial onboarding: 5-8 steps (core features)
- Feature update: 2-4 steps (new feature intro)
- Avoid exceeding 10 steps (users lose patience)

**Visual Hierarchy**
- Highlighted area most prominent
- Tooltip content next
- Progress and navigation last

**Exit Mechanism**
- Always provide skip option
- Clear close button
- Remember user choice (don't show again)

**Responsive Design**
- Mobile tooltip width adaptive
- Small screens can use bottom panel instead of tooltip
- Touch targets no smaller than 44x44px

### Design Style Variants

**Minimalist Style**
- Light overlay (40-50% opacity)
- Clean white tooltip
- No decoration, text-only explanation
- Small dot progress indicator

**Material Design**
- Use Material shadow levels
- Ripple effect buttons
- Animation uses Material easing curves
- Standard Material color palette

**Progressive Guide**
- No overlay, only tooltip
- User can interact with interface simultaneously
- Suitable for non-mandatory guidance scenarios
- More lightweight, non-intrusive

**Interactive Guide**
- User must complete specified action to proceed to next step
- Real-time validation of user actions
- Suitable for training or critical processes
- Ensures user truly learns

### Use Cases

- Feature introduction after new user first login
- Change documentation after major product updates
- Operation guidance for complex features
- Training for critical business processes
- Help center or feature exploration entry
- Any scenario requiring step-by-step user guidance
