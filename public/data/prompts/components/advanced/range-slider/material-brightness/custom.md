# Material Brightness Range Slider

## 中文版本 (zh-CN)

請創建一個 Material Brightness 風格的亮度調節範圍滑桿組件。

### 設計理念

Material Brightness 範圍滑桿專為亮度調節場景設計,遵循 Material Design 的物理隱喻和動態反饋原則。設計哲學強調「即見即所得」,通過視覺化的亮度漸變讓用戶直觀理解調節效果。整體設計模擬物理世界中的光線強度變化,從暗到亮的漸變填充提供清晰的視覺指引,同時保持 Material Design 特有的優雅和精確性。

### 視覺特徵

- **亮度漸變軌道**: 軌道背景使用從深灰 (#424242) 到亮黃 (#ffc107) 的線性漸變,視覺化表示亮度範圍
- **太陽圖標滑塊**: 滑塊設計為太陽形狀或圓形,帶有光線圖標,直徑 24px,白色填充配合黃色邊框
- **動態陰影**: 滑塊位置越靠右(越亮),陰影越淡,模擬光線增強時陰影減弱的物理現象
- **發光效果**: 滑塊周圍有微妙的黃色光暈 (box-shadow: 0 0 8px rgba(255,193,7,0.6)),亮度越高光暈越強
- **Material 圓角**: 軌道使用 4px 圓角,滑塊為完全圓形 (border-radius: 50%)
- **圖標組合**: 軌道左側顯示月亮/暗光圖標,右側顯示太陽/亮光圖標,強化語義
- **進度指示**: 滑塊左側軌道使用實心黃色填充 (#ffc107),右側保持漸變背景

### 交互體驗

- **實時亮度反饋**: 拖動滑塊時,可選的背景亮度實時變化,提供即時視覺反饋
- **Material Motion**: 使用標準 Material easing (cubic-bezier(0.4, 0.0, 0.2, 1)),拖動時光暈強度同步變化
- **光暈脈衝**: 懸停時滑塊光暈輕微擴大,從 8px 增至 12px,過渡時間 200ms
- **觸感回饋**: 按下滑塊時出現漣漪效果 (ripple effect),中心為黃色半透明圓形
- **數值顯示**: 滑塊上方顯示百分比數值(0-100%),使用 Roboto 字體,顏色隨亮度動態調整
- **鍵盤精確控制**: 箭頭鍵每次調整 5%,Shift+箭頭鍵調整 10%
- **吸附點**: 可選的 25%、50%、75% 吸附點,滑塊自動對齊到這些常用值

### 適用場景

- **顯示器設置**: 電腦、顯示器、投影儀的亮度調節控制面板
- **圖像編輯**: 照片編輯器、設計軟件的曝光度、明度調整工具
- **閱讀應用**: 電子書閱讀器、PDF 查看器的屏幕亮度控制
- **系統設置**: 操作系統、移動設備的亮度設置界面
- **智能家居**: 智能燈光控制應用,調節燈泡亮度
- **視頻播放器**: 視頻亮度調整、色彩校正工具
- **無障礙設置**: 針對視覺障礙用戶的亮度輔助調節工具

---

## English Version (en-US)

Please create a Material Brightness style brightness adjustment range slider component.

### Design Philosophy

Material Brightness range slider is specifically designed for brightness adjustment scenarios, adhering to Material Design's physical metaphor and dynamic feedback principles. The design philosophy emphasizes "what you see is what you get," allowing users to intuitively understand adjustment effects through visualized brightness gradients. The overall design simulates light intensity changes in the physical world, with dark-to-bright gradient fills providing clear visual guidance while maintaining Material Design's characteristic elegance and precision.

### Visual Characteristics

- **Brightness Gradient Track**: Track background uses linear gradient from dark gray (#424242) to bright yellow (#ffc107), visualizing brightness range
- **Sun Icon Thumb**: Thumb designed as sun shape or circle with ray icon, 24px diameter, white fill with yellow border
- **Dynamic Shadow**: The further right (brighter) the thumb position, the lighter the shadow, simulating shadow weakening as light intensifies
- **Glow Effect**: Subtle yellow halo around thumb (box-shadow: 0 0 8px rgba(255,193,7,0.6)), stronger glow at higher brightness
- **Material Rounded**: Track uses 4px border-radius, thumb is fully circular (border-radius: 50%)
- **Icon Combination**: Moon/dim icon on track left side, sun/bright icon on right side, reinforcing semantics
- **Progress Indicator**: Track left of thumb uses solid yellow fill (#ffc107), right side maintains gradient background

### Interaction Experience

- **Real-time Brightness Feedback**: Optional background brightness changes in real-time during thumb dragging, providing instant visual feedback
- **Material Motion**: Uses standard Material easing (cubic-bezier(0.4, 0.0, 0.2, 1)), glow intensity synchronizes with dragging
- **Halo Pulse**: Thumb halo slightly expands on hover from 8px to 12px with 200ms transition
- **Tactile Feedback**: Ripple effect appears when pressing thumb, center is yellow semi-transparent circle
- **Value Display**: Percentage value (0-100%) displayed above thumb using Roboto font, color dynamically adjusts with brightness
- **Keyboard Precision Control**: Arrow keys adjust 5% each time, Shift+arrow keys adjust 10%
- **Snap Points**: Optional 25%, 50%, 75% snap points, thumb auto-aligns to these common values

### Use Cases

- **Display Settings**: Brightness adjustment control panels for computers, monitors, projectors
- **Image Editing**: Exposure, brightness adjustment tools in photo editors, design software
- **Reading Applications**: Screen brightness control in e-book readers, PDF viewers
- **System Settings**: Brightness setting interfaces in operating systems, mobile devices
- **Smart Home**: Smart lighting control apps for adjusting bulb brightness
- **Video Players**: Video brightness adjustment, color correction tools
- **Accessibility Settings**: Brightness assistance adjustment tools for visually impaired users
