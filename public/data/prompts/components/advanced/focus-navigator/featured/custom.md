# Featured with Sidebar Focus Navigator

## 中文版本 (zh-CN)

請創建一個 Featured with Sidebar 風格的側邊欄焦點導航器組件。

### 設計理念

Featured with Sidebar 焦點導航器採用富功能的側邊欄設計,為複雜多章節應用提供全方位的導航和進度追蹤體驗。設計哲學強調「信息密度與可讀性的平衡」,通過視覺層次和信息組織,在有限的側邊欄空間內容納豐富的導航功能,同時保持界面清晰易用。整體設計追求專業、高效的企業級應用體驗,適合需要精確導航和狀態反饋的複雜場景。

### 視覺特徵

- **側邊欄佈局**: 固定在頁面左側或右側的垂直導航欄,寬度 240-280px,帶有微妙陰影或邊框
- **進度條指示**: 頂部顯示完整的線性進度條,視覺化展示整體完成度,使用品牌主色填充
- **章節徽章**: 每個章節按鈕帶有編號徽章(如圓形數字標籤),已完成章節顯示勾選圖標
- **狀態圖標**: 章節可能處於「未開始」「進行中」「已完成」等狀態,使用不同圖標和顏色區分
- **層次式導航**: 支持章節-小節的兩級或多級層次結構,使用縮進和折疊圖標
- **視覺分隔**: 章節之間使用細線或間距分隔,大章節可使用標題分組
- **當前章節高亮**: 當前章節使用深色背景或左側豎線標記,配合圖標和文字顏色變化
- **滾動指示**: 側邊欄內容過多時顯示滾動條,當前章節自動滾動到可視區域

### 交互體驗

- **可折疊章節**: 點擊章節標題可展開/折疊子章節,使用平滑的高度過渡動畫
- **懸停預覽**: 懸停章節時顯示浮動提示,展示章節摘要或完成狀態
- **拖動排序**: 可選的拖拽功能,允許用戶自定義章節順序(適用於可編輯場景)
- **快捷操作**: 章節按鈕右側可顯示快捷操作圖標,如編輯、刪除、標記等
- **進度同步**: 用戶完成章節任務時,進度條和徽章狀態實時更新
- **平滑滾動**: 點擊章節時,主內容區平滑滾動並高亮目標章節標題
- **鍵盤快捷鍵**: 支持 Ctrl+↑/↓ 快速切換章節,Ctrl+Enter 標記當前章節完成
- **響應式收縮**: 小屏幕下側邊欄自動收縮為可展開的抽屜或頂部橫向導航

### 適用場景

- **在線課程**: 多章節課程學習平台,追蹤學習進度和章節完成狀態
- **項目管理**: 任務列表、項目里程碑、工作流程步驟的可視化導航
- **文檔編輯**: 長文檔編輯器,提供章節大綱和快速跳轉功能
- **數據填報**: 複雜的多步驟表單,如納稅申報、企業註冊、調查問卷
- **產品配置**: 產品定制流程,用戶需要在多個配置步驟間自由切換
- **法律文件**: 合同審閱、法律條款瀏覽,需要精確的章節定位
- **SaaS 設置**: 應用設置頁面,多個設置類別需要清晰的導航結構
- **儀表板**: 數據分析平台,多個視圖或報表之間的快速切換

---

## English Version (en-US)

Please create a Featured with Sidebar style focus navigator component.

### Design Philosophy

Featured with Sidebar focus navigator adopts feature-rich sidebar design, providing comprehensive navigation and progress tracking experience for complex multi-section applications. The design philosophy emphasizes "balancing information density with readability," accommodating rich navigation functionality within limited sidebar space through visual hierarchy and information organization while maintaining clear, usable interface. The overall design pursues professional, efficient enterprise-grade application experience, suitable for complex scenarios requiring precise navigation and status feedback.

### Visual Characteristics

- **Sidebar Layout**: Fixed vertical navigation bar on page left or right, 240-280px width with subtle shadow or border
- **Progress Bar Indicator**: Top displays complete linear progress bar, visually showing overall completion using brand primary color fill
- **Section Badges**: Each section button features numbered badge (like circular number label), completed sections show checkmark icon
- **Status Icons**: Sections may be in "not started," "in progress," "completed" states, distinguished by different icons and colors
- **Hierarchical Navigation**: Supports section-subsection two-level or multi-level hierarchy using indentation and collapse icons
- **Visual Separation**: Sections separated by thin lines or spacing, major sections can use heading groups
- **Current Section Highlight**: Current section uses dark background or left vertical line marker with icon and text color changes
- **Scroll Indicator**: Scrollbar appears when sidebar content overflows, current section auto-scrolls to visible area

### Interaction Experience

- **Collapsible Sections**: Clicking section title expands/collapses subsections using smooth height transition animation
- **Hover Preview**: Hovering section shows floating tooltip displaying section summary or completion status
- **Drag Sorting**: Optional drag functionality allowing users to customize section order (suitable for editable scenarios)
- **Quick Actions**: Section button right side can show quick action icons like edit, delete, mark
- **Progress Sync**: Progress bar and badge status update in real-time as users complete section tasks
- **Smooth Scrolling**: Clicking section smoothly scrolls main content area and highlights target section heading
- **Keyboard Shortcuts**: Supports Ctrl+↑/↓ for quick section switching, Ctrl+Enter to mark current section complete
- **Responsive Collapse**: Sidebar auto-collapses to expandable drawer or top horizontal navigation on small screens

### Use Cases

- **Online Courses**: Multi-section course learning platforms tracking learning progress and section completion status
- **Project Management**: Visual navigation for task lists, project milestones, workflow steps
- **Document Editing**: Long document editors providing chapter outline and quick jump functionality
- **Data Submission**: Complex multi-step forms like tax filing, business registration, surveys
- **Product Configuration**: Product customization flows where users need to freely switch between configuration steps
- **Legal Documents**: Contract review, legal term browsing requiring precise section positioning
- **SaaS Settings**: Application settings pages with multiple setting categories requiring clear navigation structure
- **Dashboards**: Data analysis platforms for quick switching between multiple views or reports
