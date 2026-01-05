# Neumorphism Toast Notifications

## 中文版本 (zh-CN)

請創建一個新擬物（Neumorphism）風格的輕量級通知（Toast）組件。

### 設計理念

新擬物風格的 Toast 通知通過柔和的凹凸陰影模擬真實物理表面的光影效果，創造出「從背景中浮出」或「壓入背景」的錯覺。通知應該像是從同一材質表面微微凸起或凹陷，保持統一的材質感。

### 視覺特徵

**整體風格**
- 背景色與頁面主背景接近或相同（通常為淺灰色系 #E0E5EC）
- 雙陰影系統：
  - 光源陰影：左上方淺色高光（box-shadow: -5px -5px 10px rgba(255,255,255,0.8)）
  - 暗部陰影：右下方深色陰影（box-shadow: 5px 5px 10px rgba(0,0,0,0.1)）
- 中到大圓角（12-20px），營造柔和的形態
- 無明顯邊框，依靠陰影塑造形狀

**凸起與凹陷效果**
- 默認為凸起效果（外凸）
- 內部元素可使用凹陷效果（如圖標背景）
- 凹陷效果：反轉陰影方向
  - 內陰影：inset 2px 2px 5px rgba(0,0,0,0.1), inset -2px -2px 5px rgba(255,255,255,0.8)

**圖標設計**
- 圖標嵌入凹陷的圓形或方形容器中
- 容器使用內陰影營造凹陷感
- 成功：柔和綠色背景（#A8D5BA）
- 錯誤：柔和紅色背景（#F4A5A5）
- 警告：柔和黃色背景（#FFD89B）
- 信息：柔和藍色背景（#A5C9E1）
- 圖標本身使用深色或同色系

**排版設計**
- 文字顏色為柔和深灰色（#5A6C7D 或類似）
- 避免純黑色，保持柔和的視覺風格
- 字體採用中性無襯線字體，字重 regular 到 medium
- 可選：文字添加極微妙的凸起效果（text-shadow: 1px 1px 2px rgba(255,255,255,0.5)）

**按鈕設計**
- 關閉按鈕也採用新擬物風格
- 未激活：與背景同色，使用凸起陰影
- 懸停：陰影增強或顏色微調
- 按下：切換為凹陷效果
- 按鈕形狀通常為圓形或圓角方形

### 交互體驗

- 滑入動畫柔和，配合陰影漸變
- 懸停時陰影增強，模擬進一步凸起
- 按下時陰影反轉，模擬壓入效果
- 關閉動畫可包含凹陷效果，然後淡出
- 動畫時長適中（250-350ms），緩動曲線平滑

### 尺寸與定位

- 寬度適中（340-380px）
- 高度自適應，但保持飽滿（padding 充足）
- 通常定位於右上角或右下角
- 多個通知堆疊時，間距適中（16-20px）
- 每個通知都有獨立的陰影效果

### 顏色系統

**淺色主題（推薦）**
- 背景：#E0E5EC 或 #EFF1F5
- 文字：#5A6C7D
- 圖標容器：柔和的彩色背景
- 陰影：白色高光 + 淡灰色陰影

**深色主題（謹慎使用）**
- 背景：#2E3440 或類似深灰
- 文字：#D8DEE9
- 陰影需調整為深色高光 + 更深陰影
- 注意：深色新擬物風格較難實現，對比度需仔細調整

### 設計限制與注意事項

- 新擬物風格依賴背景色，必須與頁面背景協調
- 不適合複雜或多色背景
- 文字對比度可能較低，需確保符合無障礙標準
- 陰影效果在某些屏幕上可能不明顯
- 建議只在淺色、統一的背景上使用

### 適用場景

- 現代設計驅動的應用程序
- 個性化儀表板或管理面板
- 追求獨特視覺風格的產品
- 淺色主題為主的設計系統

---

## English Version (en-US)

Please create a Neumorphism style toast notification component.

### Design Philosophy

Neumorphism toast notifications use soft embossed and debossed shadows to simulate real physical surface lighting effects, creating the illusion of "emerging from" or "pressing into" the background. Notifications should appear to subtly protrude or recede from the same material surface, maintaining unified material perception.

### Visual Characteristics

**Overall Style**
- Background color close to or same as page main background (typically light gray #E0E5EC)
- Dual shadow system:
  - Light source shadow: Top-left light highlight (box-shadow: -5px -5px 10px rgba(255,255,255,0.8))
  - Dark shadow: Bottom-right dark shadow (box-shadow: 5px 5px 10px rgba(0,0,0,0.1))
- Medium to large border radius (12-20px) creating soft form
- No obvious borders, relying on shadows to shape form

**Embossed and Debossed Effects**
- Default embossed effect (outward protrusion)
- Internal elements can use debossed effect (e.g., icon backgrounds)
- Debossed effect: Reverse shadow directions
  - Inner shadow: inset 2px 2px 5px rgba(0,0,0,0.1), inset -2px -2px 5px rgba(255,255,255,0.8)

**Icon Design**
- Icons embedded in debossed circular or square containers
- Containers use inner shadows to create debossed sensation
- Success: Soft green background (#A8D5BA)
- Error: Soft red background (#F4A5A5)
- Warning: Soft yellow background (#FFD89B)
- Info: Soft blue background (#A5C9E1)
- Icons themselves use dark or same-tone colors

**Typography Design**
- Text color soft dark gray (#5A6C7D or similar)
- Avoid pure black, maintaining soft visual style
- Neutral sans-serif fonts, regular to medium weight
- Optional: Text with extremely subtle embossed effect (text-shadow: 1px 1px 2px rgba(255,255,255,0.5))

**Button Design**
- Close button also uses neumorphism style
- Inactive: Same color as background, uses embossed shadow
- Hover: Enhanced shadow or subtle color adjustment
- Pressed: Switches to debossed effect
- Button shape typically circular or rounded square

### Interaction Experience

- Soft slide-in animation paired with shadow gradients
- Enhanced shadows on hover, simulating further protrusion
- Shadow reversal on press, simulating press-in effect
- Close animation can include debossed effect, then fade-out
- Moderate animation duration (250-350ms), smooth easing curves

### Size and Positioning

- Moderate width (340-380px)
- Adaptive height but maintains fullness (generous padding)
- Usually positioned in top-right or bottom-right
- Moderate spacing when stacking (16-20px)
- Each notification has independent shadow effects

### Color System

**Light Theme (Recommended)**
- Background: #E0E5EC or #EFF1F5
- Text: #5A6C7D
- Icon containers: Soft colored backgrounds
- Shadows: White highlights + light gray shadows

**Dark Theme (Use Cautiously)**
- Background: #2E3440 or similar dark gray
- Text: #D8DEE9
- Shadows need adjustment to dark highlights + deeper shadows
- Note: Dark neumorphism is harder to achieve, contrast needs careful adjustment

### Design Limitations and Considerations

- Neumorphism relies on background color; must coordinate with page background
- Not suitable for complex or multicolored backgrounds
- Text contrast may be lower; ensure accessibility standards compliance
- Shadow effects may not be obvious on some screens
- Recommended only for light, uniform backgrounds

### Use Cases

- Modern design-driven applications
- Personalized dashboards or admin panels
- Products pursuing unique visual styles
- Design systems primarily using light themes
