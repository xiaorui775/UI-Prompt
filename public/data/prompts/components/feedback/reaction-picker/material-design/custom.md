# Material Design Reaction Picker

## 中文版本 (zh-CN)

請創建一個 Material Design 風格的表情反應選擇器（Reaction Picker）組件。

### 設計理念

Material Design 風格的反應選擇器遵循 Google 的設計語言，強調清晰的層級、有意義的動效和直觀的交互。組件應該像一個浮動的操作面板，提供快速、愉悅的表情選擇體驗，同時保持功能性和美觀性的平衡。

### 視覺特徵

**整體風格**
- 白色背景卡片，邊緣清晰
- 顯著的提升陰影（elevation 8-12dp），表現浮動層次
- 中等圓角（8-12px），符合 Material 規範
- 使用 Material 調色板作為強調色

**容器設計**
- 背景：純白色（#FFFFFF）
- 陰影：box-shadow: 0 4px 20px rgba(0,0,0,0.15), 0 2px 6px rgba(0,0,0,0.1)
- 圓角：8-12px
- 內邊距：8-12px
- 尺寸：水平排列時寬度自適應，網格排列時固定寬度

**表情顯示**
- 表情尺寸：24-32px（緊湊佈局）或 36-48px（標準佈局）
- 表情間距：4-8px
- 佈局方式：
  - 水平單行：適合快速反應（5-7 個表情）
  - 網格佈局：適合完整表情庫（如 4×6 或 5×8）
- 可選類別標籤欄（emoji tabs）

**已選中狀態**
- 底部圓形強調色背景
- 輕微縮放（scale 1.1）
- 使用品牌主色（如 #1976D2 或 #2196F3）

**懸停效果**
- 圓形淺灰背景出現（#F5F5F5 或 rgba(0,0,0,0.04)）
- 輕微放大（scale 1.15-1.2）
- 過渡時間：100-150ms

### 交互體驗

**觸發方式**
- 長按：移動端常見，長按觸發面板
- 點擊：桌面端，點擊觸發按鈕/圖標
- 懸停：桌面端可選，懸停後延遲顯示

**出現動畫**
- 從觸發點擴展（scale 0.8 → 1）
- 淡入效果（opacity 0 → 1）
- 使用 Material 標準緩動曲線
- 動畫時長：150-200ms

**表情選擇**
- 點擊表情立即選中
- 波紋效果（Ripple）從點擊位置擴散
- 選中後面板收起（可配置）
- 選中表情顯示確認動畫

**面板關閉**
- 點擊外部區域關閉
- 選擇表情後自動關閉
- 按 Escape 鍵關閉
- 收起動畫：反向的出現動畫

**波紋效果實現**
```css
.reaction-item::after {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle, rgba(0,0,0,0.1) 10%, transparent 10%);
  transform: scale(10);
  opacity: 0;
  transition: transform 0.5s, opacity 0.3s;
}

.reaction-item:active::after {
  transform: scale(0);
  opacity: 1;
  transition: 0s;
}
```

### 佈局變體

**快速反應條（Quick Reactions）**
- 水平排列 5-7 個常用表情
- 末尾可添加「更多」按鈕展開完整列表
- 適合評論區或消息回覆
- 尺寸緊湊，不干擾閱讀

**完整表情面板**
- 網格佈局展示所有表情
- 頂部類別標籤欄（如：笑臉、手勢、動物等）
- 可選搜索功能
- 底部可選最近使用列表

**浮動表情選擇器**
- 出現在目標元素附近
- 智能定位，避免超出視窗
- 常見於社交媒體的「點讚」互動

### 應用場景

**社交媒體**
- 貼文/評論反應
- 消息回覆表情
- 快速表達情緒

**協作工具**
- 會議/文檔反應
- 任務確認/投票
- 即時反饋機制

**聊天應用**
- 消息表情回覆
- 快速反應功能
- 表情快捷發送

**反饋收集**
- 用戶滿意度調查
- 功能評價
- NPS 評分輔助

### 技術實現要點

**定位與層級**
```css
.reaction-picker {
  position: fixed; /* 或 absolute */
  z-index: 1000;
  /* 智能定位邏輯 */
}
```

**響應式設計**
- 桌面端：標準尺寸，懸停效果
- 移動端：
  - 較大的觸控目標（48px+）
  - 底部彈出面板（Bottom Sheet）
  - 長按觸發

**性能優化**
- 表情使用原生 Unicode 或 SVG sprite
- 懶加載完整表情庫
- 虛擬化長列表（大量表情時）

### 無障礙設計

**ARIA 屬性**
- 容器：`role="menu"` 或 `role="listbox"`
- 表情項：`role="menuitem"` 或 `role="option"`
- 當前選中：`aria-selected="true"`
- 標籤：`aria-label="選擇表情反應"`

**鍵盤導航**
- 方向鍵：在表情間移動焦點
- Enter/Space：選擇當前表情
- Tab：移動到下一組/關閉
- Escape：關閉選擇器

**屏幕閱讀器**
- 每個表情需提供文字描述
- 宣布當前選中狀態
- 宣布選擇器開啟/關閉

### 顏色與主題

**亮色主題（默認）**
- 背景：#FFFFFF
- 懸停背景：#F5F5F5
- 選中背景：品牌主色 10%透明度
- 文字：#212121

**暗色主題**
- 背景：#424242 或 #303030
- 懸停背景：rgba(255,255,255,0.08)
- 選中背景：品牌主色 20%透明度
- 文字：#FFFFFF

### 設計建議

**表情數量**
- 快速反應：5-7 個（最常用的）
- 完整面板：按類別組織，每類 20-40 個

**反應類型**
- 標準 emoji：通用性最強
- 自定義表情：品牌特色
- 組合反應：emoji + 文字（如 👍 Like）

**反饋設計**
- 選中時提供視覺和動效反饋
- 可選振動反饋（移動端）
- 選中計數實時更新

### 適用場景

- 社交媒體貼文和評論反應
- 即時通訊消息回覆
- 協作工具中的快速反饋
- 內容評價和滿意度調查
- 遊戲或娛樂應用中的互動
- 任何需要快速情緒表達的場景

---

## English Version (en-US)

Please create a Material Design style reaction picker component.

### Design Philosophy

Material Design style reaction picker follows Google's design language, emphasizing clear hierarchy, meaningful motion, and intuitive interaction. The component should appear like a floating action panel, providing a quick, delightful emoji selection experience while maintaining balance between functionality and aesthetics.

### Visual Characteristics

**Overall Style**
- White background card with clear edges
- Prominent elevation shadow (8-12dp), expressing floating layers
- Medium border radius (8-12px), following Material specs
- Use Material color palette for accent colors

**Container Design**
- Background: Pure white (#FFFFFF)
- Shadow: box-shadow: 0 4px 20px rgba(0,0,0,0.15), 0 2px 6px rgba(0,0,0,0.1)
- Border radius: 8-12px
- Padding: 8-12px
- Size: Adaptive width for horizontal layout, fixed width for grid layout

**Emoji Display**
- Emoji size: 24-32px (compact layout) or 36-48px (standard layout)
- Emoji spacing: 4-8px
- Layout options:
  - Horizontal single row: Suitable for quick reactions (5-7 emojis)
  - Grid layout: Suitable for complete emoji library (e.g., 4×6 or 5×8)
- Optional category tab bar (emoji tabs)

**Selected State**
- Circular accent color background at bottom
- Slight scale (scale 1.1)
- Use brand primary color (e.g., #1976D2 or #2196F3)

**Hover Effect**
- Circular light gray background appears (#F5F5F5 or rgba(0,0,0,0.04))
- Slight enlargement (scale 1.15-1.2)
- Transition time: 100-150ms

### Interaction Experience

**Trigger Methods**
- Long press: Common on mobile, panel triggered by long press
- Click: Desktop, triggered by button/icon click
- Hover: Optional for desktop, display after hover delay

**Appearance Animation**
- Expand from trigger point (scale 0.8 → 1)
- Fade-in effect (opacity 0 → 1)
- Use Material standard easing curves
- Animation duration: 150-200ms

**Emoji Selection**
- Click emoji for immediate selection
- Ripple effect spreads from click position
- Panel collapses after selection (configurable)
- Selected emoji shows confirmation animation

**Panel Close**
- Click outside area to close
- Auto-close after emoji selection
- Press Escape key to close
- Collapse animation: Reverse of appearance animation

**Ripple Effect Implementation**
```css
.reaction-item::after {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle, rgba(0,0,0,0.1) 10%, transparent 10%);
  transform: scale(10);
  opacity: 0;
  transition: transform 0.5s, opacity 0.3s;
}

.reaction-item:active::after {
  transform: scale(0);
  opacity: 1;
  transition: 0s;
}
```

### Layout Variants

**Quick Reactions Bar**
- 5-7 commonly used emojis arranged horizontally
- "More" button at end to expand full list
- Suitable for comment sections or message replies
- Compact size, doesn't interfere with reading

**Full Emoji Panel**
- Grid layout displaying all emojis
- Top category tab bar (e.g., smileys, gestures, animals)
- Optional search functionality
- Optional recently used list at bottom

**Floating Emoji Picker**
- Appears near target element
- Smart positioning, avoids viewport overflow
- Common in social media "like" interactions

### Application Scenarios

**Social Media**
- Post/comment reactions
- Message reply emojis
- Quick emotion expression

**Collaboration Tools**
- Meeting/document reactions
- Task confirmation/voting
- Real-time feedback mechanism

**Chat Applications**
- Message emoji replies
- Quick reaction features
- Quick emoji sending

**Feedback Collection**
- User satisfaction surveys
- Feature ratings
- NPS score assistance

### Technical Implementation Points

**Positioning and Layering**
```css
.reaction-picker {
  position: fixed; /* or absolute */
  z-index: 1000;
  /* Smart positioning logic */
}
```

**Responsive Design**
- Desktop: Standard size, hover effects
- Mobile:
  - Larger touch targets (48px+)
  - Bottom Sheet popup panel
  - Long press trigger

**Performance Optimization**
- Emojis use native Unicode or SVG sprite
- Lazy load complete emoji library
- Virtualize long lists (when many emojis)

### Accessibility Design

**ARIA Attributes**
- Container: `role="menu"` or `role="listbox"`
- Emoji items: `role="menuitem"` or `role="option"`
- Currently selected: `aria-selected="true"`
- Label: `aria-label="Select emoji reaction"`

**Keyboard Navigation**
- Arrow keys: Move focus between emojis
- Enter/Space: Select current emoji
- Tab: Move to next group/close
- Escape: Close picker

**Screen Reader**
- Each emoji needs text description
- Announce current selection state
- Announce picker open/close

### Colors and Themes

**Light Theme (Default)**
- Background: #FFFFFF
- Hover background: #F5F5F5
- Selected background: Brand primary 10% opacity
- Text: #212121

**Dark Theme**
- Background: #424242 or #303030
- Hover background: rgba(255,255,255,0.08)
- Selected background: Brand primary 20% opacity
- Text: #FFFFFF

### Design Recommendations

**Emoji Count**
- Quick reactions: 5-7 (most commonly used)
- Full panel: Organized by category, 20-40 per category

**Reaction Types**
- Standard emoji: Most universal
- Custom emojis: Brand characteristic
- Combined reactions: emoji + text (e.g., 👍 Like)

**Feedback Design**
- Provide visual and motion feedback on selection
- Optional haptic feedback (mobile)
- Selection count updates in real-time

### Use Cases

- Social media post and comment reactions
- Instant messaging replies
- Quick feedback in collaboration tools
- Content rating and satisfaction surveys
- Interactions in games or entertainment apps
- Any scenario requiring quick emotional expression
