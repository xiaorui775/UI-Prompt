# Clean & Simple Kanban Board

## 中文版本 (zh-CN)

請創建一個 Clean & Simple 風格的看板組件。

### 設計理念

Clean & Simple 看板秉持「視覺簡潔,功能完整」的設計哲學,為團隊協作和任務管理提供直觀、高效的可視化工具。設計理念強調認知效率和操作流暢性,通過清晰的視覺層次和簡化的交互模式,讓用戶能夠快速理解項目狀態並執行任務操作。整體設計追求專業而親和的視覺風格,既適合敏捷開發團隊,也適合一般項目管理場景。

### 視覺特徵

- **列式佈局**: 水平排列的任務列(如 Todo、In Progress、Done),每列使用淺色背景 (#f7f8fa) 區分
- **列標題**: 簡潔的列標題顯示狀態名稱和任務數量,如「In Progress (3)」,使用中等字重字體
- **卡片設計**: 任務卡片採用白色背景,帶有微妙陰影 (box-shadow: 0 1px 3px rgba(0,0,0,0.1)),圓角 4-6px
- **卡片內容**: 卡片顯示任務標題、簡短描述、優先級標籤(可選色彩點或標籤),信息密度適中
- **拖放指示**: 拖動卡片時顯示半透明佔位符,目標位置顯示虛線框或高亮區域
- **間距統一**: 列之間、卡片之間使用統一的間距(12-16px),保持視覺節奏
- **色彩克制**: 主要使用灰階色彩,僅在優先級標籤或狀態指示使用有限的品牌色或語義色
- **響應式佈局**: 小屏幕下列自動轉為垂直堆疊或支持橫向滾動

### 交互體驗

- **拖放操作**: 卡片支持跨列拖放,使用平滑的拖動動畫和清晰的投放反饋
- **懸停效果**: 懸停卡片時陰影加深,可選的快捷操作按鈕(編輯、刪除)淡入顯示
- **點擊展開**: 點擊卡片展開詳情面板或模態框,顯示完整任務信息和操作選項
- **添加任務**: 每列底部顯示「+ 添加任務」按鈕,點擊展開簡易輸入框或彈出完整表單
- **實時更新**: 拖放完成後卡片計數實時更新,可選的保存狀態指示(如短暫的成功提示)
- **鍵盤支持**: 支持 Tab 鍵在卡片間切換,Enter 打開詳情,Del 刪除任務
- **樂觀更新**: 拖放操作立即反映在界面上,後台異步保存,失敗時回滾並提示
- **空狀態**: 列為空時顯示友好的空狀態插圖和引導文案

### 適用場景

- **敏捷開發**: Scrum 團隊的 Sprint 任務看板,用戶故事和任務跟蹤
- **項目管理**: 一般項目的任務流程管理,從計劃到完成的可視化
- **內容生產**: 內容創作團隊的稿件狀態跟蹤,如草稿、審核、發布
- **銷售流程**: CRM 系統的銷售機會管理,從線索到成交的流程可視化
- **招聘流程**: HR 系統的候選人跟蹤,從簡歷篩選到面試到錄用
- **客戶支持**: 工單系統的問題狀態跟蹤,從新建到處理到解決
- **個人任務**: 個人 GTD 工具,個人任務和目標的可視化管理
- **團隊協作**: 一般團隊協作平台,跨職能團隊的任務協調

---

## English Version (en-US)

Please create a Clean & Simple style kanban board component.

### Design Philosophy

Clean & Simple kanban adheres to "visual simplicity, functional completeness" design philosophy, providing intuitive, efficient visualization tools for team collaboration and task management. The design concept emphasizes cognitive efficiency and operational fluidity, enabling users to quickly understand project status and execute task operations through clear visual hierarchy and simplified interaction patterns. The overall design pursues professional yet approachable visual style, suitable for both agile development teams and general project management scenarios.

### Visual Characteristics

- **Column Layout**: Horizontally arranged task columns (like Todo, In Progress, Done), each using light background (#f7f8fa) for distinction
- **Column Headers**: Concise headers showing status name and task count like "In Progress (3)" using medium font weight
- **Card Design**: Task cards use white background with subtle shadow (box-shadow: 0 1px 3px rgba(0,0,0,0.1)), border-radius 4-6px
- **Card Content**: Cards display task title, brief description, priority labels (optional color dots or tags) with moderate information density
- **Drag Indicators**: Semi-transparent placeholder shown when dragging cards, target position shows dashed border or highlight area
- **Unified Spacing**: Consistent spacing (12-16px) between columns and cards maintaining visual rhythm
- **Restrained Colors**: Primarily uses grayscale colors, only using limited brand or semantic colors for priority labels or status indicators
- **Responsive Layout**: Columns auto-convert to vertical stacking or support horizontal scrolling on small screens

### Interaction Experience

- **Drag & Drop**: Cards support cross-column dragging with smooth drag animation and clear drop feedback
- **Hover Effects**: Card shadow deepens on hover with optional quick action buttons (edit, delete) fading in
- **Click to Expand**: Clicking card expands detail panel or modal showing complete task information and action options
- **Add Tasks**: Each column bottom shows "+ Add Task" button, clicking expands simple input box or pops up complete form
- **Real-time Updates**: Card counts update in real-time after drag completion with optional save status indicator (like brief success message)
- **Keyboard Support**: Supports Tab key for switching between cards, Enter to open details, Del to delete tasks
- **Optimistic Updates**: Drag operations immediately reflect in interface, background async save, rollback with notification on failure
- **Empty State**: Friendly empty state illustration and guidance text shown when column is empty

### Use Cases

- **Agile Development**: Scrum team Sprint task boards for user story and task tracking
- **Project Management**: General project task flow management, visualization from planning to completion
- **Content Production**: Content creation team manuscript status tracking like draft, review, publish
- **Sales Process**: CRM system sales opportunity management, process visualization from leads to deals
- **Recruitment Process**: HR system candidate tracking from resume screening to interview to hiring
- **Customer Support**: Ticketing system issue status tracking from new to processing to resolved
- **Personal Tasks**: Personal GTD tools, visualization management of personal tasks and goals
- **Team Collaboration**: General team collaboration platforms, cross-functional team task coordination
