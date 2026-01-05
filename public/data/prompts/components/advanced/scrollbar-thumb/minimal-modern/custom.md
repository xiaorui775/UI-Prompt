# Minimal Modern Scrollbar Thumb

## 中文版本 (zh-CN)

請創建一個 Minimal Modern 風格的滾動條滑塊組件。

### 設計理念

Minimal Modern 滾動條滑塊秉持當代極簡主義設計哲學,追求「設計的隱形化」——在需要時清晰可見,不需要時優雅隱退。設計理念強調功能純粹性和視覺克制,去除一切不必要的裝飾,僅保留最精煉的形式表達。滑塊應該是內容的謙卑服務者,通過精確的尺寸、色彩和動畫提供恰到好處的導航反饋,而不喧賓奪主。

### 視覺特徵

- **超細滑塊**: 默認寬度僅 3-4px,幾乎不佔據視覺空間,懸停時平滑擴展至 8-10px
- **柔和圓角**: 使用完全圓角 (border-radius: 4px / 滑塊寬度的一半),消除銳利邊緣
- **中性色調**: 使用中性灰色 (#999999 或 rgba(0,0,0,0.3)),在淺色和深色背景下都保持低調
- **透明度層次**: 靜止時透明度 0.4,懸停時 0.7,拖動時 1.0,創造漸進式視覺強化
- **零裝飾**: 無邊框、無漸變、無紋理,完全平面化設計
- **微妙陰影**: 可選的極淺陰影 (box-shadow: 0 0 2px rgba(0,0,0,0.1)),僅在懸停時出現
- **適應性色彩**: 根據背景自動調整色彩深淺,確保最低對比度要求(WCAG AA 標準)

### 交互體驗

- **快速顯現**: 滾動或懸停時,滑塊從不可見瞬間淡入(150ms),提供即時反饋
- **寬度漸變**: 懸停時寬度平滑擴展,使用 ease-out 緩動,過渡時間 200ms
- **透明度同步**: 拖動時透明度和寬度同時變化,增強視覺一致性
- **精確定位**: 滑塊位置與滾動位置完全同步,無延遲、無慣性
- **快速隱藏**: 停止交互後 1 秒內快速淡出,避免視覺干擾
- **平滑過渡**: 所有動畫使用統一的緩動曲線,創造一致的動態感受
- **無聲設計**: 動畫足夠微妙,不會吸引用戶注意力,保持內容焦點

### 適用場景

- **內容閱讀**: 博客、新聞網站、在線文檔等需要純淨閱讀體驗的平台
- **作品展示**: 攝影作品集、設計案例展示、藝術畫廊網站
- **極簡應用**: 筆記應用、Markdown 編輯器、專注寫作工具
- **現代企業站**: 追求簡潔專業形象的企業官網、品牌展示頁
- **高端電商**: 奢侈品、設計師品牌等需要低調優雅的購物體驗
- **儀表板**: 數據分析平台、後台管理系統中需要減少視覺雜訊的場景
- **移動適配**: 響應式設計中需要在小屏幕上節省空間的場景
- **無障礙優化**: 需要明確但不突兀的導航提示的可訪問性設計

---

## English Version (en-US)

Please create a Minimal Modern style scrollbar thumb component.

### Design Philosophy

Minimal Modern scrollbar thumb adheres to contemporary minimalist design philosophy, pursuing "design invisibility" — clearly visible when needed, elegantly retreating when not. The design concept emphasizes functional purity and visual restraint, removing all unnecessary decoration and retaining only the most refined formal expression. The thumb should be a humble servant of content, providing just-right navigation feedback through precise sizing, colors, and animations without stealing the spotlight.

### Visual Characteristics

- **Ultra-Thin Thumb**: Default width only 3-4px, occupying minimal visual space, smoothly expands to 8-10px on hover
- **Soft Rounding**: Uses full border-radius (4px / half thumb width), eliminating sharp edges
- **Neutral Tones**: Uses neutral gray (#999999 or rgba(0,0,0,0.3)), remaining understated on both light and dark backgrounds
- **Opacity Hierarchy**: Opacity 0.4 when idle, 0.7 on hover, 1.0 during drag, creating progressive visual reinforcement
- **Zero Decoration**: No borders, gradients, or textures; completely flat design
- **Subtle Shadow**: Optional extremely light shadow (box-shadow: 0 0 2px rgba(0,0,0,0.1)), appears only on hover
- **Adaptive Colors**: Auto-adjusts color depth based on background, ensuring minimum contrast requirements (WCAG AA standard)

### Interaction Experience

- **Quick Appearance**: Thumb instantly fades in (150ms) from invisible on scroll or hover, providing immediate feedback
- **Width Gradient**: Width smoothly expands on hover using ease-out easing with 200ms transition
- **Opacity Sync**: Opacity and width change simultaneously during drag, enhancing visual consistency
- **Precise Positioning**: Thumb position fully synchronized with scroll position, no delay or inertia
- **Quick Hide**: Quickly fades out within 1 second after stopping interaction, avoiding visual interference
- **Smooth Transitions**: All animations use unified easing curve, creating consistent dynamic feel
- **Silent Design**: Animations subtle enough not to attract user attention, maintaining content focus

### Use Cases

- **Content Reading**: Blogs, news sites, online documents requiring pure reading experience
- **Portfolio Display**: Photography portfolios, design case showcases, art gallery websites
- **Minimalist Apps**: Note-taking apps, Markdown editors, focused writing tools
- **Modern Corporate Sites**: Corporate websites, brand showcase pages pursuing clean professional image
- **Premium E-commerce**: Luxury goods, designer brands requiring understated elegant shopping experience
- **Dashboards**: Data analysis platforms, backend management systems needing reduced visual noise
- **Mobile Adaptation**: Responsive designs requiring space conservation on small screens
- **Accessibility Optimization**: Accessible designs requiring clear but unobtrusive navigation cues
