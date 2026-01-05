# Clean & Simple Focus Navigator

## 中文版本 (zh-CN)

請創建一個 Clean & Simple 風格的焦點導航器組件。

### 設計理念

Clean & Simple 焦點導航器秉持「功能至上,形式服從功能」的極簡設計哲學,專注於提供清晰、直觀的多章節頁面導航體驗。設計理念強調認知負荷最小化,通過簡潔的視覺語言和一目了然的操作邏輯,讓用戶無需學習即可快速掌握使用方法。整體設計追求無干擾的內容瀏覽體驗,導航器應該是內容的謙卑助手,而非視覺焦點。

### 視覺特徵

- **頂部進度標籤**: 簡潔的文本標籤顯示當前章節和總章節數,如「Section 1 of 5」,使用中性灰色字體
- **章節按鈕組**: 水平排列的章節按鈕,每個按鈕顯示章節編號或標題,使用淺灰背景 (#f5f5f5)
- **當前章節高亮**: 當前章節按鈕使用主題色背景(如 #4a90e2),白色文字,清晰區分激活狀態
- **上下導航按鈕**: 簡單的「上一章」「下一章」文字按鈕或箭頭圖標,位於章節按鈕組下方
- **扁平設計**: 無陰影、無漸變、無立體效果,完全平面化設計
- **統一圓角**: 所有按鈕使用統一的小圓角 (border-radius: 4px)
- **最小間距**: 按鈕之間使用固定間距(8-12px),保持整潔有序

### 交互體驗

- **即時跳轉**: 點擊章節按鈕立即滾動到對應章節,使用平滑滾動 (scroll-behavior: smooth)
- **懸停反饋**: 懸停時按鈕背景輕微變深,使用短暫過渡動畫 (150ms)
- **鍵盤導航**: 支持 Tab 鍵在按鈕間切換,Enter/Space 鍵激活,左右箭頭鍵上下章節切換
- **進度自動更新**: 用戶手動滾動時,進度標籤和高亮按鈕自動更新當前章節
- **無加載狀態**: 章節跳轉即時完成,無需顯示加載動畫
- **防誤觸**: 快速連續點擊時使用防抖動邏輯,避免多次觸發滾動
- **焦點管理**: 章節切換後自動將焦點移至新章節標題,提升可訪問性

### 適用場景

- **長篇文檔**: 技術文檔、用戶手冊、政策條款等多章節文本內容
- **教程嚮導**: 分步教程、新手引導、設置嚮導等線性流程
- **表單分頁**: 多步驟表單,允許用戶快速跳轉到特定步驟檢視或修改
- **單頁網站**: 單頁滾動網站的章節導航,如公司介紹頁、產品落地頁
- **閱讀模式**: 博客文章、新聞報道等需要清晰章節劃分的閱讀內容
- **演示文稿**: 在線演示文稿、PPT 分享平台的幻燈片導航
- **移動端適配**: 小屏幕設備上需要簡潔導航的場景

---

## English Version (en-US)

Please create a Clean & Simple style focus navigator component.

### Design Philosophy

Clean & Simple focus navigator adheres to the "function first, form follows function" minimalist design philosophy, focusing on providing clear, intuitive multi-section page navigation experience. The design concept emphasizes minimizing cognitive load through simple visual language and self-evident operational logic, allowing users to quickly grasp usage without learning. The overall design pursues distraction-free content browsing experience where the navigator should be a humble assistant to content, not a visual focal point.

### Visual Characteristics

- **Top Progress Label**: Simple text label showing current section and total sections like "Section 1 of 5" using neutral gray font
- **Section Button Group**: Horizontally arranged section buttons each showing section number or title with light gray background (#f5f5f5)
- **Current Section Highlight**: Current section button uses theme color background (like #4a90e2) with white text, clearly distinguishing active state
- **Up/Down Navigation Buttons**: Simple "Previous"/"Next" text buttons or arrow icons positioned below section button group
- **Flat Design**: No shadows, gradients, or 3D effects; completely flat design
- **Unified Rounding**: All buttons use uniform small border-radius (4px)
- **Minimal Spacing**: Fixed spacing (8-12px) between buttons maintaining neat orderliness

### Interaction Experience

- **Instant Jump**: Clicking section button immediately scrolls to corresponding section using smooth scrolling (scroll-behavior: smooth)
- **Hover Feedback**: Button background slightly darkens on hover with brief transition animation (150ms)
- **Keyboard Navigation**: Supports Tab key for switching between buttons, Enter/Space key activation, left/right arrow keys for previous/next section
- **Auto Progress Update**: Progress label and highlighted button automatically update current section during manual scrolling
- **No Loading State**: Section jumps complete instantly without loading animation
- **Misclick Prevention**: Debouncing logic during rapid consecutive clicks avoiding multiple scroll triggers
- **Focus Management**: Automatically moves focus to new section heading after section switch, enhancing accessibility

### Use Cases

- **Long Documents**: Technical documentation, user manuals, policy terms with multiple sections
- **Tutorial Wizards**: Step-by-step tutorials, onboarding guides, setup wizards with linear flows
- **Form Pagination**: Multi-step forms allowing users to quickly jump to specific steps for review or modification
- **Single-Page Websites**: Section navigation for single-page scroll sites like company intro pages, product landing pages
- **Reading Mode**: Blog articles, news reports requiring clear section divisions in reading content
- **Presentations**: Online presentations, PPT sharing platform slide navigation
- **Mobile Adaptation**: Scenarios requiring concise navigation on small screen devices
