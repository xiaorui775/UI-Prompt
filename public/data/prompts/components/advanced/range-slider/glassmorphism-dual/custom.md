# Glassmorphism Dual Range Slider

## 中文版本 (zh-CN)

請創建一個 Glassmorphism Dual 風格的雙向範圍滑桿組件。

### 設計理念

Glassmorphism Dual 範圍滑桿結合了磨砂玻璃美學和雙滑塊功能,創造出既現代又實用的價格篩選或範圍選擇體驗。設計哲學強調「透明中的精確」,通過半透明的玻璃質感提供優雅的視覺體驗,同時雙滑塊設計允許用戶同時定義範圍的上下限。整體設計追求輕盈、精緻的未來感,同時確保功能性和可用性不受影響。

### 視覺特徵

- **玻璃軌道**: 軌道使用 backdrop-filter: blur(10px) 和 rgba(255,255,255,0.1) 背景,創造磨砂玻璃效果
- **雙滑塊設計**: 兩個對稱的圓形滑塊,每個直徑 18-24px,使用半透明白色填充 rgba(255,255,255,0.2)
- **玻璃邊框**: 滑塊和軌道都帶有 1px 半透明白色邊框 (rgba(255,255,255,0.18)),模擬玻璃邊緣
- **範圍高亮**: 兩個滑塊之間的軌道區域使用漸變填充,從 rgba(100,200,255,0.3) 到 rgba(150,100,255,0.3)
- **模糊光暈**: 滑塊周圍有柔和的模糊光暈 (box-shadow: 0 4px 20px rgba(255,255,255,0.2))
- **數值浮窗**: 滑塊上方的數值顯示使用獨立的玻璃卡片,帶有模糊背景和半透明填充

### 交互體驗

- **獨立拖動**: 兩個滑塊可以獨立拖動,但不能交叉,最小值滑塊始終在左側
- **模糊強化**: 拖動或懸停時,背景模糊從 blur(10px) 增強至 blur(15px),過渡時間 300ms
- **透明度漸變**: 滑塊在靜止、懸停、拖動狀態下透明度分別為 0.2、0.3、0.4
- **範圍動畫**: 當滑塊移動時,中間範圍高亮區域平滑伸縮,使用 ease-out 緩動
- **數值同步**: 兩個數值浮窗實時顯示最小值和最大值,拖動時即時更新
- **光暈脈衝**: 可選的微妙光暈脈衝效果,在交互時增強視覺反饋
- **觸摸優化**: 滑塊觸摸區域擴大,支持多點觸控環境下的精確操作

### 適用場景

- **電商平台**: 價格篩選器,允許用戶設定最低和最高價格範圍
- **房產網站**: 面積、價格、建築年份等雙向範圍篩選
- **數據分析**: 時間範圍選擇、數值區間過濾、參數範圍調整
- **音頻編輯**: 頻率範圍選擇、音軌片段截取、效果器參數調節
- **預訂系統**: 日期範圍選擇、價格區間設定、評分範圍篩選
- **高端品牌**: 奢侈品網站、高端科技產品需要精緻視覺效果的場景
- **深色主題**: Glassmorphism 在深色背景下效果最佳的現代應用

---

## English Version (en-US)

Please create a Glassmorphism Dual style dual range slider component.

### Design Philosophy

Glassmorphism Dual range slider combines frosted glass aesthetics with dual thumb functionality, creating a modern yet practical price filtering or range selection experience. The design philosophy emphasizes "precision through transparency," providing elegant visual experience through semi-transparent glass texture while dual thumb design allows users to simultaneously define range upper and lower limits. The overall design pursues light, refined futuristic feel while ensuring functionality and usability remain uncompromised.

### Visual Characteristics

- **Glass Track**: Track uses backdrop-filter: blur(10px) and rgba(255,255,255,0.1) background, creating frosted glass effect
- **Dual Thumb Design**: Two symmetric circular thumbs, each 18-24px diameter, using semi-transparent white fill rgba(255,255,255,0.2)
- **Glass Border**: Both thumbs and track feature 1px semi-transparent white border (rgba(255,255,255,0.18)), simulating glass edges
- **Range Highlight**: Track area between two thumbs uses gradient fill from rgba(100,200,255,0.3) to rgba(150,100,255,0.3)
- **Blur Halo**: Soft blurred halo around thumbs (box-shadow: 0 4px 20px rgba(255,255,255,0.2))
- **Value Floating Window**: Value display above thumbs uses independent glass cards with blurred background and semi-transparent fill

### Interaction Experience

- **Independent Dragging**: Two thumbs can drag independently but cannot cross, minimum value thumb always stays on left
- **Blur Enhancement**: Background blur increases from blur(10px) to blur(15px) during drag or hover with 300ms transition
- **Opacity Gradient**: Thumb opacity is 0.2 (idle), 0.3 (hover), 0.4 (dragging) across states
- **Range Animation**: Middle range highlight area smoothly stretches/shrinks as thumbs move using ease-out easing
- **Value Synchronization**: Two value floating windows real-time display minimum and maximum values, instantly updating during drag
- **Halo Pulse**: Optional subtle halo pulse effect enhancing visual feedback during interaction
- **Touch Optimization**: Expanded thumb touch areas supporting precise operation in multi-touch environments

### Use Cases

- **E-commerce Platforms**: Price filters allowing users to set minimum and maximum price ranges
- **Real Estate Websites**: Dual-direction range filters for area, price, building year
- **Data Analysis**: Time range selection, value interval filtering, parameter range adjustment
- **Audio Editing**: Frequency range selection, track segment extraction, effect parameter adjustment
- **Booking Systems**: Date range selection, price interval setting, rating range filtering
- **Premium Brands**: Luxury goods websites, high-end tech products requiring refined visual effects
- **Dark Themes**: Modern applications where Glassmorphism works best on dark backgrounds
