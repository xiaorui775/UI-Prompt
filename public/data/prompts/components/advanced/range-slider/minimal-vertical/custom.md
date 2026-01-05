# Minimal Vertical Range Slider

## 中文版本 (zh-CN)

請創建一個 Minimal Vertical 風格的範圍滑桿組件。

### 設計理念

Minimal Vertical 範圍滑桿強調垂直方向的簡約設計,適用於音量控制、亮度調節等需要直觀垂直操作的場景。設計哲學遵循極簡主義原則,去除一切不必要的視覺元素,僅保留最基本的軌道、滑塊和數值顯示。垂直佈局模擬物理世界中的上下調節動作,提供更自然的交互隱喻,特別適合空間受限的側邊欄或工具面板。

### 視覺特徵

- **垂直軌道**: 細長的垂直軌道,寬度 4-6px,高度通常為 120-200px,使用淺灰色背景 (#e0e0e0)
- **圓形滑塊**: 直徑 16-20px 的圓形滑塊,純白色或淺灰色填充,帶有微妙的陰影 (box-shadow: 0 2px 4px rgba(0,0,0,0.1))
- **進度填充**: 滑塊下方的軌道使用主題色填充,清晰顯示當前數值位置
- **數值標籤**: 滑塊旁邊或上方顯示當前數值,使用小號無襯線字體,顏色為中性灰
- **刻度線**: 可選的細微刻度標記,位於軌道一側,幫助用戶快速定位
- **極簡邊框**: 無邊框或僅 1px 細邊框,保持視覺輕量感

### 交互體驗

- **平滑拖動**: 垂直拖動滑塊時,數值實時更新,使用防抖動算法確保流暢性
- **懸停反饋**: 懸停時滑塊輕微放大 (scale: 1.1-1.15),陰影加深,提供明確的可交互提示
- **鍵盤控制**: 支持上下箭頭鍵進行精確調節,PageUp/PageDown 進行大幅調整
- **觸摸友好**: 滑塊觸摸區域擴大至 44x44px,符合移動端可訪問性標準
- **視覺吸附**: 可選的數值吸附功能,滑塊自動對齊到整數或特定間隔值
- **過渡動畫**: 釋放滑塊後,數值標籤淡入淡出,過渡時間 200ms

### 適用場景

- **音頻控制**: 音樂播放器音量控制、混音器音軌電平調節
- **亮度調節**: 顯示器亮度控制、圖像編輯器曝光調整
- **側邊工具欄**: 設計軟件、CAD 工具的側邊參數調節面板
- **儀表板**: 監控系統中的垂直參數調整,如溫度、壓力設定
- **移動應用**: 空間受限的移動端界面,垂直滑桿節省橫向空間
- **無障礙界面**: 需要明確視覺反饋和鍵盤可訪問性的應用

---

## English Version (en-US)

Please create a Minimal Vertical style range slider component.

### Design Philosophy

Minimal Vertical range slider emphasizes minimalist design in vertical orientation, suitable for volume control, brightness adjustment, and other scenarios requiring intuitive vertical operations. The design philosophy follows minimalist principles, removing all unnecessary visual elements and retaining only the essential track, thumb, and value display. Vertical layout simulates physical up-down adjustment actions, providing a more natural interaction metaphor, particularly suitable for space-constrained sidebars or tool panels.

### Visual Characteristics

- **Vertical Track**: Slim vertical track with 4-6px width and typically 120-200px height, using light gray background (#e0e0e0)
- **Circular Thumb**: 16-20px diameter circular thumb with pure white or light gray fill, featuring subtle shadow (box-shadow: 0 2px 4px rgba(0,0,0,0.1))
- **Progress Fill**: Track below thumb uses theme color fill, clearly showing current value position
- **Value Label**: Current value displayed beside or above thumb using small sans-serif font in neutral gray
- **Tick Marks**: Optional subtle tick marks positioned on one side of track, helping users quickly locate positions
- **Minimal Border**: No border or only 1px thin border, maintaining visual lightness

### Interaction Experience

- **Smooth Dragging**: Real-time value updates during vertical thumb dragging, using debouncing algorithm to ensure fluidity
- **Hover Feedback**: Thumb slightly enlarges on hover (scale: 1.1-1.15) with deepened shadow, providing clear interactive cue
- **Keyboard Control**: Supports up/down arrow keys for precise adjustment, PageUp/PageDown for major adjustments
- **Touch-Friendly**: Thumb touch area expanded to 44x44px, meeting mobile accessibility standards
- **Visual Snapping**: Optional value snapping feature, thumb auto-aligns to integers or specific interval values
- **Transition Animation**: Value label fades in/out after thumb release with 200ms transition time

### Use Cases

- **Audio Control**: Music player volume control, mixer track level adjustment
- **Brightness Adjustment**: Monitor brightness control, image editor exposure adjustment
- **Sidebar Toolbars**: Design software, CAD tool sidebar parameter adjustment panels
- **Dashboards**: Vertical parameter adjustment in monitoring systems like temperature, pressure settings
- **Mobile Applications**: Space-constrained mobile interfaces where vertical sliders save horizontal space
- **Accessible Interfaces**: Applications requiring clear visual feedback and keyboard accessibility
