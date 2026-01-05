# Neumorphism Reaction Picker

## 中文版本 (zh-CN)

請創建一個新擬物（Neumorphism）風格的表情反應選擇器（Reaction Picker）組件。

### 設計理念

新擬物風格的反應選擇器通過柔和的凹凸陰影模擬真實物理表面的觸感，創造出「從背景中浮出」的視覺效果。選擇器應該像是從同一材質表面微微凸起的觸控區域，表情按鈕則像是可以被「按壓」的柔軟按鍵，提供獨特的交互質感。

### 視覺特徵

**整體風格**
- 背景色與頁面主背景一致或接近
- 依靠陰影而非邊框定義形狀
- 柔和的凸起效果（外凸）
- 大圓角設計增強柔和感

**容器設計**
- 背景色：與頁面背景相同（如 #E0E5EC）
- 雙陰影系統：
  - 光源陰影（左上）：-6px -6px 16px rgba(255, 255, 255, 0.8)
  - 暗部陰影（右下）：6px 6px 16px rgba(0, 0, 0, 0.1)
- 無邊框或極淡邊框
- 圓角：16-24px
- 內邊距：12-16px

**凸起效果（默認狀態）**
```css
box-shadow:
  -6px -6px 16px rgba(255, 255, 255, 0.8),
  6px 6px 16px rgba(0, 0, 0, 0.1);
```

**凹陷效果（按下狀態）**
```css
box-shadow:
  inset -4px -4px 12px rgba(255, 255, 255, 0.8),
  inset 4px 4px 12px rgba(0, 0, 0, 0.1);
```

**表情按鈕設計**
- 每個表情按鈕也採用新擬物風格
- 默認狀態：輕微凸起
- 懸停狀態：凸起效果增強
- 按下/選中狀態：凹陷效果
- 按鈕圓角：完全圓形（border-radius: 50%）或大圓角

**表情顯示**
- 表情尺寸：28-36px
- 表情容器尺寸：40-52px（包含按鈕效果）
- 表情居中於按鈕內
- 間距：8-12px

### 顏色系統

**淺色主題（推薦）**
- 背景：#E0E5EC 或 #EFF1F5
- 光源陰影：rgba(255, 255, 255, 0.8) 或 #FFFFFF
- 暗部陰影：rgba(163, 177, 198, 0.6) 或 rgba(0, 0, 0, 0.1)
- 文字/圖標：#5A6C7D 或 #7A8BA5

**強調色**
- 選中狀態可添加柔和彩色背景
- 背景色：柔和的品牌色（如 #B8D4E8 淡藍、#C8E6C9 淡綠）
- 避免過於鮮豔的顏色（破壞柔和感）

**深色主題（謹慎使用）**
- 背景：#2E3440 或 #1A1D24
- 陰影需特殊調整，對比度難以把握
- 通常不推薦深色新擬物風格

### 交互體驗

**默認狀態**
- 容器和按鈕都呈現凸起效果
- 視覺上「浮」於背景之上

**懸停效果**
- 按鈕凸起效果增強（陰影加深/加大）
- 可選輕微縮放（scale 1.05）
- 過渡平滑（200-250ms）

**按下效果**
- 按鈕切換為凹陷效果
- 表情略微縮小（scale 0.95）
- 模擬真實按壓感

**選中狀態**
- 持續凹陷效果
- 可選柔和背景色
- 與未選中狀態有明顯區分

**動畫效果**
- 凸起↔凹陷過渡流暢
- 陰影值平滑過渡
- 避免突兀的狀態切換
- 緩動函數：ease-in-out

### 佈局設計

**水平排列**
- 表情按鈕水平排列
- 整體容器呈圓角矩形
- 按鈕間有適當間距
- 末端可選「更多」按鈕

**網格排列**
- 4-5 列網格
- 每個單元格是獨立的新擬物按鈕
- 或所有按鈕在同一個凸起容器內

**分組設計**
- 不同類別可用凹陷分隔線
- 或不同組在不同的凸起容器中

### 技術實現要點

**容器樣式**
```css
.neumorphic-picker {
  background: #E0E5EC;
  border-radius: 20px;
  padding: 12px;
  box-shadow:
    -8px -8px 20px rgba(255, 255, 255, 0.8),
    8px 8px 20px rgba(163, 177, 198, 0.5);
}
```

**按鈕默認狀態**
```css
.neumorphic-button {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: #E0E5EC;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  box-shadow:
    -4px -4px 10px rgba(255, 255, 255, 0.8),
    4px 4px 10px rgba(163, 177, 198, 0.5);
}
```

**按鈕懸停狀態**
```css
.neumorphic-button:hover {
  box-shadow:
    -6px -6px 14px rgba(255, 255, 255, 0.9),
    6px 6px 14px rgba(163, 177, 198, 0.6);
}
```

**按鈕按下/選中狀態**
```css
.neumorphic-button:active,
.neumorphic-button.selected {
  box-shadow:
    inset -4px -4px 10px rgba(255, 255, 255, 0.8),
    inset 4px 4px 10px rgba(163, 177, 198, 0.5);
}
```

### 出現與消失動畫

**出現動畫**
- 整體容器淡入（opacity 0 → 1）
- 可選：陰影從無到有漸變
- 動畫時長：200-300ms

**消失動畫**
- 淡出效果
- 陰影逐漸消失
- 可選輕微縮小

### 應用場景

**個性化儀表板**
- 管理面板或控制台
- 個人設置頁面
- 追求獨特視覺風格的產品

**智能家居/IoT 控制**
- 設備控制界面
- 狀態反饋按鈕
- 物理按鍵的數字化表達

**音樂/媒體播放器**
- 播放控制按鈕
- 反應/收藏功能
- 柔和的視覺體驗

**健康/冥想應用**
- 情緒記錄
- 心情選擇
- 柔和放鬆的視覺風格

### 無障礙設計

**對比度挑戰**
- 新擬物風格對比度較低
- 需確保表情本身清晰可見
- 選中狀態需明顯區分（除陰影外添加其他視覺提示）

**實現方式**
- 選中狀態添加柔和背景色
- 可選：添加微妙邊框
- 確保焦點狀態清晰（focus ring）

**ARIA 支持**
- 正確的 role 和 aria 屬性
- 表情文字描述
- 鍵盤可訪問

### 設計限制與注意事項

**背景色依賴**
- 新擬物風格強烈依賴背景色
- 必須與頁面背景協調
- 不適合複雜或漸變背景

**色彩限制**
- 效果在淺色、單色背景下最佳
- 彩色表情可能與柔和背景對比過強
- 需謹慎處理顏色平衡

**過度使用風險**
- 大面積使用可能顯得單調
- 與其他風格元素混用需謹慎
- 適合作為特色元素而非全局風格

### 設計建議

**陰影參數**
- 陰影偏移：4-10px
- 陰影模糊：10-20px
- 光源角度保持一致（通常左上）

**尺寸建議**
- 按鈕觸控目標：最小 44px
- 間距不宜過小（影響凸起效果）
- 圓角與陰影協調

**顏色建議**
- 堅持單一中性背景色
- 表情選擇後可使用柔和強調色
- 避免純黑或純白

### 適用場景

- 追求獨特視覺風格的個性化產品
- 智能家居和 IoT 控制界面
- 儀表板和管理面板
- 健康、冥想類放鬆風格應用
- 淺色主題為主的設計系統
- 強調觸感和物理反饋的界面

---

## English Version (en-US)

Please create a Neumorphism style reaction picker component.

### Design Philosophy

Neumorphism reaction picker simulates real physical surface touch through soft embossed and debossed shadows, creating a visual effect of "emerging from the background." The picker should appear like a touch area slightly protruding from the same material surface, with emoji buttons like soft keys that can be "pressed," providing unique tactile quality.

### Visual Characteristics

**Overall Style**
- Background color same as or close to page main background
- Shapes defined by shadows rather than borders
- Soft embossed effect (outward protrusion)
- Large rounded corners enhancing softness

**Container Design**
- Background color: Same as page background (e.g., #E0E5EC)
- Dual shadow system:
  - Light source shadow (top-left): -6px -6px 16px rgba(255, 255, 255, 0.8)
  - Dark shadow (bottom-right): 6px 6px 16px rgba(0, 0, 0, 0.1)
- No border or very faint border
- Border radius: 16-24px
- Padding: 12-16px

**Embossed Effect (Default State)**
```css
box-shadow:
  -6px -6px 16px rgba(255, 255, 255, 0.8),
  6px 6px 16px rgba(0, 0, 0, 0.1);
```

**Debossed Effect (Pressed State)**
```css
box-shadow:
  inset -4px -4px 12px rgba(255, 255, 255, 0.8),
  inset 4px 4px 12px rgba(0, 0, 0, 0.1);
```

**Emoji Button Design**
- Each emoji button also uses neumorphism style
- Default state: Slight embossed
- Hover state: Enhanced embossed effect
- Pressed/selected state: Debossed effect
- Button border radius: Full circle (border-radius: 50%) or large radius

**Emoji Display**
- Emoji size: 28-36px
- Emoji container size: 40-52px (including button effect)
- Emoji centered within button
- Spacing: 8-12px

### Color System

**Light Theme (Recommended)**
- Background: #E0E5EC or #EFF1F5
- Light source shadow: rgba(255, 255, 255, 0.8) or #FFFFFF
- Dark shadow: rgba(163, 177, 198, 0.6) or rgba(0, 0, 0, 0.1)
- Text/icons: #5A6C7D or #7A8BA5

**Accent Colors**
- Selected state can add soft colored background
- Background color: Soft brand color (e.g., #B8D4E8 light blue, #C8E6C9 light green)
- Avoid overly bright colors (breaks soft feel)

**Dark Theme (Use Cautiously)**
- Background: #2E3440 or #1A1D24
- Shadows need special adjustment, contrast difficult to balance
- Dark neumorphism generally not recommended

### Interaction Experience

**Default State**
- Container and buttons both show embossed effect
- Visually "floating" above background

**Hover Effect**
- Button embossed effect enhanced (shadow deepened/enlarged)
- Optional slight scale (scale 1.05)
- Smooth transition (200-250ms)

**Press Effect**
- Button switches to debossed effect
- Emoji slightly shrinks (scale 0.95)
- Simulates real press sensation

**Selected State**
- Sustained debossed effect
- Optional soft background color
- Clear distinction from unselected state

**Animation Effects**
- Smooth embossed↔debossed transition
- Shadow values transition smoothly
- Avoid abrupt state changes
- Easing function: ease-in-out

### Layout Design

**Horizontal Arrangement**
- Emoji buttons arranged horizontally
- Overall container as rounded rectangle
- Appropriate spacing between buttons
- Optional "more" button at end

**Grid Arrangement**
- 4-5 column grid
- Each cell is independent neumorphic button
- Or all buttons within single embossed container

**Grouped Design**
- Different categories can use debossed separator lines
- Or different groups in different embossed containers

### Technical Implementation Points

**Container Styles**
```css
.neumorphic-picker {
  background: #E0E5EC;
  border-radius: 20px;
  padding: 12px;
  box-shadow:
    -8px -8px 20px rgba(255, 255, 255, 0.8),
    8px 8px 20px rgba(163, 177, 198, 0.5);
}
```

**Button Default State**
```css
.neumorphic-button {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: #E0E5EC;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  box-shadow:
    -4px -4px 10px rgba(255, 255, 255, 0.8),
    4px 4px 10px rgba(163, 177, 198, 0.5);
}
```

**Button Hover State**
```css
.neumorphic-button:hover {
  box-shadow:
    -6px -6px 14px rgba(255, 255, 255, 0.9),
    6px 6px 14px rgba(163, 177, 198, 0.6);
}
```

**Button Pressed/Selected State**
```css
.neumorphic-button:active,
.neumorphic-button.selected {
  box-shadow:
    inset -4px -4px 10px rgba(255, 255, 255, 0.8),
    inset 4px 4px 10px rgba(163, 177, 198, 0.5);
}
```

### Appearance and Disappearance Animation

**Appearance Animation**
- Overall container fades in (opacity 0 → 1)
- Optional: Shadow gradients from none to present
- Animation duration: 200-300ms

**Disappearance Animation**
- Fade out effect
- Shadows gradually disappear
- Optional slight shrink

### Application Scenarios

**Personalized Dashboards**
- Admin panels or consoles
- Personal settings pages
- Products pursuing unique visual style

**Smart Home/IoT Control**
- Device control interfaces
- Status feedback buttons
- Digital expression of physical keys

**Music/Media Players**
- Playback control buttons
- Reaction/favorite features
- Soft visual experience

**Health/Meditation Apps**
- Mood logging
- Emotion selection
- Soft relaxing visual style

### Accessibility Design

**Contrast Challenges**
- Neumorphism style has lower contrast
- Ensure emojis themselves clearly visible
- Selected state needs clear distinction (add visual cues beyond shadows)

**Implementation Approaches**
- Add soft background color for selected state
- Optional: Add subtle border
- Ensure focus state clear (focus ring)

**ARIA Support**
- Correct role and aria attributes
- Emoji text descriptions
- Keyboard accessible

### Design Limitations and Considerations

**Background Color Dependency**
- Neumorphism strongly depends on background color
- Must coordinate with page background
- Not suitable for complex or gradient backgrounds

**Color Limitations**
- Effect best on light, monochrome backgrounds
- Colorful emojis may contrast too strongly with soft background
- Need careful color balance handling

**Overuse Risk**
- Large areas may appear monotonous
- Mixing with other style elements requires caution
- Suitable as feature element rather than global style

### Design Recommendations

**Shadow Parameters**
- Shadow offset: 4-10px
- Shadow blur: 10-20px
- Light source angle consistent (usually top-left)

**Size Recommendations**
- Button touch target: Minimum 44px
- Spacing should not be too small (affects embossed effect)
- Border radius coordinated with shadows

**Color Recommendations**
- Stick to single neutral background color
- Soft accent color can be used after emoji selection
- Avoid pure black or pure white

### Use Cases

- Personalized products pursuing unique visual style
- Smart home and IoT control interfaces
- Dashboards and admin panels
- Health and meditation relaxing style apps
- Design systems primarily using light themes
- Interfaces emphasizing tactile and physical feedback
