# Advanced Color Picker

## 中文版本 (zh-CN)

請創建一個高級顏色選擇器組件。

### 設計理念

Advanced Color Picker 提供專業級的顏色選擇體驗,為設計師、開發者和內容創作者提供精確而直觀的顏色控制工具。設計哲學強調「多種輸入方式的統一」,通過整合視覺選擇器、數值輸入、預設色板等多種方式,滿足不同場景和用戶偏好的顏色選擇需求。整體設計追求專業性和易用性的平衡,既要提供足夠的精確控制,又要保持界面簡潔不臃腫。

### 視覺特徵

- **色彩平面**: 主視覺區域顯示飽和度-亮度二維選擇器,漸變從白色到純色到黑色
- **色相條**: 垂直或水平的色相選擇條,顯示完整的彩虹光譜(紅→橙→黃→綠→藍→紫→紅)
- **透明度條**: 可選的透明度/不透明度滑桿,帶有棋盤格背景顯示透明效果
- **當前顏色預覽**: 大面積的顏色方塊顯示當前選中顏色,可選的新舊顏色對比顯示
- **色值輸入框**: 多個標籤頁或切換按鈕,支持 HEX、RGB、HSL、CMYK 等色彩模式輸入
- **數值滑桿**: RGB/HSL 模式下每個通道顯示獨立滑桿和數值輸入框
- **預設色板**: 底部或側邊顯示常用顏色色板,如品牌色、Material Design 色板、最近使用色
- **吸管工具**: 可選的取色器按鈕,點擊後可從屏幕任意位置吸取顏色

### 交互體驗

- **點擊選色**: 在色彩平面上點擊或拖動,實時更新當前顏色和所有色值顯示
- **滑桿調整**: 拖動色相條、透明度條或 RGB/HSL 滑桿,同步更新色彩平面和預覽
- **輸入色值**: 在 HEX/RGB/HSL 輸入框中直接輸入色值,失焦時驗證並應用
- **色板快選**: 點擊預設色板中的顏色,立即應用該顏色
- **複製粘貼**: 點擊色值可一鍵複製到剪貼板,提示「已複製」反饋
- **歷史記錄**: 自動記錄最近使用的顏色,點擊快速重用
- **模式切換**: 在 HEX、RGB、HSL 等模式間切換,色值自動轉換
- **鍵盤微調**: 聚焦到色彩平面時,方向鍵可微調飽和度和亮度
- **確認/取消**: 底部顯示「確認」「取消」按鈕,或實時應用模式

### 適用場景

- **設計工具**: 圖形設計軟件、UI 設計工具的顏色選擇器
- **主題定制**: 網站主題編輯器、品牌色配置工具
- **內容編輯**: 富文本編輯器、幻燈片製作工具的文字和背景顏色選擇
- **數據可視化**: 圖表配置工具中的顏色映射和色彩方案設計
- **CSS 編輯**: 代碼編輯器中的 CSS 顏色值輔助輸入
- **產品配置**: 產品定制工具中的顏色選項選擇
- **用戶設置**: 應用主題色、強調色等個性化設置
- **藝術創作**: 繪圖應用、像素藝術工具的調色板

---

## English Version (en-US)

Please create an advanced color picker component.

### Design Philosophy

Advanced Color Picker provides professional-grade color selection experience, offering designers, developers, and content creators precise yet intuitive color control tools. The design philosophy emphasizes "unifying multiple input methods" by integrating visual selectors, numerical input, preset palettes, and other methods to meet color selection needs across different scenarios and user preferences. The overall design pursues balance between professionalism and usability, providing sufficient precise control while maintaining clean, uncluttered interface.

### Visual Characteristics

- **Color Plane**: Main visual area displays saturation-brightness 2D selector, gradient from white to pure color to black
- **Hue Bar**: Vertical or horizontal hue selection bar displaying complete rainbow spectrum (red→orange→yellow→green→blue→purple→red)
- **Alpha Bar**: Optional transparency/opacity slider with checkerboard background showing transparency effect
- **Current Color Preview**: Large color swatch displaying currently selected color, optional new-old color comparison display
- **Color Value Inputs**: Multiple tabs or toggle buttons supporting HEX, RGB, HSL, CMYK color mode input
- **Numerical Sliders**: Independent slider and numerical input for each channel in RGB/HSL modes
- **Preset Palette**: Bottom or side displays common color palette like brand colors, Material Design palette, recently used colors
- **Eyedropper Tool**: Optional color picker button allowing color sampling from anywhere on screen after clicking

### Interaction Experience

- **Click to Select**: Clicking or dragging on color plane real-time updates current color and all color value displays
- **Slider Adjustment**: Dragging hue bar, alpha bar, or RGB/HSL sliders synchronously updates color plane and preview
- **Input Values**: Directly inputting color values in HEX/RGB/HSL input boxes, validating and applying on blur
- **Palette Quick Select**: Clicking color in preset palette immediately applies that color
- **Copy/Paste**: Clicking color value one-click copies to clipboard with "Copied" feedback notification
- **History**: Auto-records recently used colors, clicking for quick reuse
- **Mode Switching**: Switching between HEX, RGB, HSL modes with automatic color value conversion
- **Keyboard Fine-tuning**: When focused on color plane, arrow keys fine-tune saturation and brightness
- **Confirm/Cancel**: Bottom displays "Confirm"/"Cancel" buttons, or real-time apply mode

### Use Cases

- **Design Tools**: Color pickers in graphic design software, UI design tools
- **Theme Customization**: Website theme editors, brand color configuration tools
- **Content Editing**: Text and background color selection in rich text editors, slideshow creation tools
- **Data Visualization**: Color mapping and color scheme design in chart configuration tools
- **CSS Editing**: CSS color value assisted input in code editors
- **Product Configuration**: Color option selection in product customization tools
- **User Settings**: Personalization settings for app theme colors, accent colors
- **Artistic Creation**: Palettes in drawing applications, pixel art tools
