# Material Design Custom Scrollbar

## 中文版本 (zh-CN)

請創建一個 Material Design 風格的自定義滾動條組件。

### 設計理念

Material Design 滾動條遵循 Google 的 Material Design 設計語言，強調層次感、紙張隱喻和精確的動畫曲線。滾動條應該是內容的延伸，而非獨立的 UI 元素。設計哲學聚焦於物理世界的真實感受，包括光影效果、表面質感和流暢的動態反饋。滾動條需要在不打擾用戶的情況下提供清晰的導航反饋。

### 視覺特徵

- **色彩系統**: 使用 Material Design 色彩系統，滾動條軌道採用半透明灰色(rgba(0,0,0,0.12))，滑塊使用主題色或中性灰色(#757575)
- **幾何形狀**: 圓角矩形設計，滑塊寬度為 4-8px，懸停時可擴展至 12px，體現漸進式披露原則
- **陰影層次**: 靜態時無陰影，懸停時添加微妙的高度提升效果 (elevation 1-2)，模擬紙張抬起的視覺隱喻
- **尺寸變化**: 滾動條在靜止狀態下保持最小化(4px)，交互時平滑過渡到擴展狀態(12px)
- **透明度控制**: 使用透明度變化來表達狀態，軌道始終保持低不透明度，滑塊在活動狀態下達到 0.8-1.0 不透明度

### 交互體驗

- **懸停動畫**: 使用 Material Motion 標準緩動函數 (cubic-bezier(0.4, 0.0, 0.2, 1))，滑塊寬度在 200ms 內平滑擴展
- **拖動反饋**: 按下時滑塊顏色加深，提供即時的觸覺式視覺反饋，模擬物理按壓效果
- **滾動響應**: 滾動時滑塊位置實時更新，使用慣性滾動算法確保自然流暢的移動感
- **淡入淡出**: 滾動條在非活動狀態下 1.5 秒後逐漸淡出，懸停或滾動時立即淡入
- **過渡曲線**: 所有動畫遵循 Material Motion 指南，使用標準、減速、加速等不同曲線來表達不同的物理特性

### 適用場景

- **企業級應用**: 需要統一設計語言的後台管理系統、數據儀表板
- **內容密集型網站**: 文檔閱讀平台、新聞網站、長表單頁面
- **移動優先設計**: 響應式 Web 應用需要一致的跨平台體驗
- **無障礙環境**: 需要符合 WCAG 2.1 標準的可訪問性設計項目
- **Android 風格應用**: 需要與 Android 原生體驗保持一致的 Web 應用

---

## English Version (en-US)

Please create a Material Design style custom scrollbar component.

### Design Philosophy

Material Design scrollbar adheres to Google's Material Design language, emphasizing hierarchy, paper metaphor, and precise animation curves. The scrollbar should be an extension of content rather than an independent UI element. The design philosophy focuses on real-world physical sensations, including light/shadow effects, surface texture, and fluid dynamic feedback. The scrollbar needs to provide clear navigation feedback without disturbing users.

### Visual Characteristics

- **Color System**: Uses Material Design color palette with semi-transparent gray track (rgba(0,0,0,0.12)) and themed or neutral gray thumb (#757575)
- **Geometric Shape**: Rounded rectangle design, thumb width 4-8px, expandable to 12px on hover, embodying progressive disclosure principle
- **Shadow Hierarchy**: No shadow when static, adds subtle elevation effect (elevation 1-2) on hover, simulating paper lifting metaphor
- **Size Variation**: Scrollbar maintains minimized state (4px) when idle, smoothly transitions to expanded state (12px) during interaction
- **Opacity Control**: Uses opacity changes to express states, track maintains low opacity, thumb reaches 0.8-1.0 opacity when active

### Interaction Experience

- **Hover Animation**: Uses Material Motion standard easing function (cubic-bezier(0.4, 0.0, 0.2, 1)), thumb width smoothly expands within 200ms
- **Drag Feedback**: Thumb color darkens when pressed, providing immediate tactile visual feedback simulating physical press effect
- **Scroll Response**: Thumb position updates in real-time during scrolling, uses inertial scrolling algorithm to ensure natural fluid movement
- **Fade In/Out**: Scrollbar gradually fades out after 1.5 seconds of inactivity, immediately fades in on hover or scroll
- **Transition Curves**: All animations follow Material Motion guidelines, using standard, deceleration, acceleration curves to express different physical properties

### Use Cases

- **Enterprise Applications**: Backend management systems and data dashboards requiring unified design language
- **Content-Intensive Websites**: Document reading platforms, news sites, long form pages
- **Mobile-First Design**: Responsive web applications requiring consistent cross-platform experience
- **Accessible Environments**: Projects requiring WCAG 2.1 compliant accessible design
- **Android-Style Applications**: Web applications needing consistency with Android native experience
