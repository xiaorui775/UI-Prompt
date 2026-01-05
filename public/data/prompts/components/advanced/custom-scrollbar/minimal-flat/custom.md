# Minimal Flat Custom Scrollbar

## 中文版本 (zh-CN)

請創建一個 Minimal Flat 風格的自定義滾動條組件。

### 設計理念

Minimal Flat 滾動條秉持「少即是多」的極簡主義設計哲學,去除一切不必要的裝飾元素,僅保留最核心的功能性視覺指示。設計理念強調內容至上,滾動條應該在需要時才出現,並以最低調的方式融入界面。追求絕對的視覺純淨度和功能簡潔性,讓用戶專注於內容本身而非界面元素。

### 視覺特徵

- **純色方案**: 滑塊和軌道使用純色填充,無漸變、無陰影、無紋理,典型色彩為中性灰 (#cccccc 軌道、#888888 滑塊)
- **幾何簡化**: 完全去除圓角或使用極小圓角 (border-radius: 0-2px),追求幾何純粹性
- **超窄設計**: 滑塊寬度僅 2-4px,靜止狀態下幾乎隱形,懸停時可擴展至 6-8px
- **零裝飾**: 無邊框、無陰影、無漸變,完全平面化設計
- **高對比選項**: 在淺色背景使用深灰滑塊,深色背景使用淺灰滑塊,確保最小可見性要求
- **視覺負重極低**: 整體視覺存在感控制在最低限度,不干擾內容閱讀

### 交互體驗

- **即時顯示**: 滾動條默認不可見或極低透明度 (opacity: 0.3),滾動或懸停時立即完全顯示
- **快速過渡**: 所有狀態變化使用極短的過渡時間 (100-150ms),避免動畫干擾
- **線性變化**: 使用 linear 或 ease 緩動函數,避免過於複雜的動畫曲線
- **精確反饋**: 滑塊位置與滾動位置精確對應,無延遲、無慣性效果
- **簡單懸停**: 懸停時僅改變不透明度或寬度,無額外視覺效果
- **快速隱藏**: 停止交互後 0.5-1 秒內快速淡出,減少視覺干擾

### 適用場景

- **內容閱讀平台**: 博客、文檔網站、在線書籍等需要純淨閱讀體驗的場景
- **極簡主義網站**: 個人作品集、藝術展示、攝影網站等追求視覺純粹性的項目
- **文字編輯器**: Markdown 編輯器、筆記應用等需要無干擾寫作環境
- **儀表板**: 數據密集型儀表板,滾動條需要低調但功能可用
- **移動優先設計**: 需要在小屏幕上節省空間的響應式設計
- **無障礙優化**: 需要明確視覺層次但保持簡潔的可訪問性設計

---

## English Version (en-US)

Please create a Minimal Flat style custom scrollbar component.

### Design Philosophy

Minimal Flat scrollbar adheres to the "less is more" minimalist design philosophy, removing all unnecessary decorative elements and retaining only the core functional visual indicators. The design concept emphasizes content-first approach where scrollbars should appear only when needed and integrate into the interface in the most understated manner. Pursues absolute visual purity and functional simplicity, allowing users to focus on content rather than interface elements.

### Visual Characteristics

- **Solid Color Scheme**: Thumb and track use solid color fills with no gradients, shadows, or textures; typical colors are neutral gray (#cccccc track, #888888 thumb)
- **Geometric Simplification**: Completely removes border-radius or uses minimal rounding (0-2px), pursuing geometric purity
- **Ultra-Narrow Design**: Thumb width only 2-4px, nearly invisible when idle, expandable to 6-8px on hover
- **Zero Decoration**: No borders, shadows, or gradients; completely flat design
- **High Contrast Option**: Uses dark gray thumb on light backgrounds and light gray on dark backgrounds, ensuring minimum visibility requirements
- **Minimal Visual Weight**: Overall visual presence controlled to minimum, not interfering with content reading

### Interaction Experience

- **Instant Display**: Scrollbar defaults to invisible or extremely low opacity (0.3), immediately shows fully on scroll or hover
- **Fast Transitions**: All state changes use very short transition times (100-150ms), avoiding animation interference
- **Linear Changes**: Uses linear or ease easing functions, avoiding overly complex animation curves
- **Precise Feedback**: Thumb position corresponds exactly to scroll position with no delay or inertial effects
- **Simple Hover**: Hover only changes opacity or width with no additional visual effects
- **Quick Hide**: Quickly fades out within 0.5-1 second after stopping interaction, reducing visual interference

### Use Cases

- **Content Reading Platforms**: Blogs, documentation sites, online books requiring pure reading experience
- **Minimalist Websites**: Personal portfolios, art exhibitions, photography sites pursuing visual purity
- **Text Editors**: Markdown editors, note-taking apps requiring distraction-free writing environments
- **Dashboards**: Data-intensive dashboards where scrollbars need to be unobtrusive but functional
- **Mobile-First Design**: Responsive designs requiring space conservation on small screens
- **Accessibility Optimization**: Accessible designs requiring clear visual hierarchy while maintaining simplicity
