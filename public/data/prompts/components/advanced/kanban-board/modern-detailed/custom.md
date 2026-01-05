# Modern Detailed Kanban Board

## 中文版本 (zh-CN)

請創建一個 Modern Detailed 風格的現代詳細看板組件。

### 設計理念

Modern Detailed 看板採用信息密集型設計,為專業團隊提供功能豐富、數據完整的任務管理體驗。設計哲學強調「一目了然的複雜性」,通過精心設計的信息架構和視覺層次,在單個視圖內展示豐富的任務元數據,同時保持界面的可讀性和美觀性。整體設計追求現代、專業的企業級應用體驗,適合需要精細化任務管理和團隊協作的複雜項目場景。

### 視覺特徵

- **富信息卡片**: 任務卡片包含標題、描述、進度條、標籤、負責人頭像、截止日期、評論數等多維度信息
- **進度可視化**: 每個任務卡片內嵌進度條,使用百分比和填充顏色直觀顯示完成度
- **成員頭像**: 圓形頭像組顯示任務分配的團隊成員,支持多人協作顯示
- **彩色標籤**: 多個彩色標籤標識任務類型、優先級、技術棧等分類維度
- **元數據圖標**: 使用小圖標展示附件數、評論數、子任務數等輔助信息
- **截止日期提示**: 截止日期臨近時使用警告色(橙色/紅色)高亮顯示,已過期任務特殊標記
- **列統計信息**: 列標題區域顯示任務總數、完成數、工作量統計等匯總數據
- **視覺分層**: 使用陰影深度、邊框、背景色等多層次視覺設計區分不同信息優先級
- **深色模式**: 支持深色主題,使用深灰背景和柔和色彩減少眼睛疲勞

### 交互體驗

- **高級拖放**: 支持批量選擇多個任務同時拖動,拖放時顯示任務數量提示
- **快速編輯**: 卡片上直接編輯任務標題、修改負責人、更新進度,無需打開詳情頁
- **內聯添加**: 在任意位置插入新任務,而非僅在列底部添加
- **篩選和搜索**: 列標題區域提供快速篩選器,按成員、標籤、截止日期等維度過濾任務
- **排序選項**: 支持按優先級、截止日期、創建時間等多種方式對列內任務排序
- **展開/折疊**: 卡片支持展開顯示完整描述和子任務,折疊顯示精簡信息
- **實時協作**: 顯示其他用戶正在編輯的任務(如頭像閃爍或邊框高亮)
- **批量操作**: 選中多個任務後可批量修改標籤、負責人、移動列等
- **時間線視圖**: 可選的切換按鈕,在看板視圖和甘特圖/時間線視圖之間切換
- **自定義列**: 用戶可自定義列名稱、顏色、工作流程順序

### 適用場景

- **複雜項目管理**: 大型軟件開發項目,需要跟蹤多維度任務信息和團隊協作
- **產品開發**: 產品團隊的功能開發、設計評審、測試發布全流程管理
- **營銷活動**: 營銷團隊的活動策劃、內容製作、投放執行、效果追蹤
- **專業服務**: 諮詢公司、律師事務所等專業服務機構的項目交付管理
- **企業級 PMO**: 項目管理辦公室的多項目組合管理和資源調度
- **研發管理**: 技術團隊的需求管理、開發跟蹤、質量把控、發布管理
- **設計協作**: 設計團隊的設計任務、評審流程、資產管理、版本控制
- **SaaS 平台**: 提供給客戶的項目管理 SaaS 服務,需要豐富功能支持多樣化需求

---

## English Version (en-US)

Please create a Modern Detailed style kanban board component.

### Design Philosophy

Modern Detailed kanban adopts information-intensive design, providing professional teams with feature-rich, data-complete task management experience. The design philosophy emphasizes "complexity at a glance," displaying rich task metadata within a single view through carefully designed information architecture and visual hierarchy while maintaining interface readability and aesthetics. The overall design pursues modern, professional enterprise-grade application experience, suitable for complex project scenarios requiring refined task management and team collaboration.

### Visual Characteristics

- **Rich Information Cards**: Task cards contain title, description, progress bar, tags, assignee avatars, due dates, comment counts, and other multi-dimensional information
- **Progress Visualization**: Each task card embeds progress bar, intuitively showing completion using percentage and fill color
- **Member Avatars**: Circular avatar groups showing team members assigned to tasks, supporting multi-person collaboration display
- **Colored Tags**: Multiple colored tags identifying task type, priority, tech stack, and other classification dimensions
- **Metadata Icons**: Small icons displaying attachment count, comment count, subtask count, and other auxiliary information
- **Due Date Alerts**: Approaching due dates highlighted in warning colors (orange/red), overdue tasks specially marked
- **Column Statistics**: Column header area displays task total, completion count, workload statistics, and other aggregate data
- **Visual Layering**: Multi-level visual design using shadow depth, borders, background colors to distinguish information priority
- **Dark Mode**: Supports dark theme using dark gray backgrounds and soft colors to reduce eye strain

### Interaction Experience

- **Advanced Drag & Drop**: Supports batch selecting multiple tasks for simultaneous dragging, showing task count hint during drag
- **Quick Edit**: Direct editing of task title, assignee modification, progress update on card without opening detail page
- **Inline Add**: Insert new tasks at any position rather than only at column bottom
- **Filter and Search**: Quick filters in column header area, filtering tasks by member, tag, due date dimensions
- **Sort Options**: Supports sorting column tasks by priority, due date, creation time, and other methods
- **Expand/Collapse**: Cards support expanding to show full description and subtasks, collapsing to show condensed information
- **Real-time Collaboration**: Displays tasks being edited by other users (like avatar blinking or border highlighting)
- **Batch Operations**: Batch modify tags, assignees, move columns after selecting multiple tasks
- **Timeline View**: Optional toggle button switching between kanban view and Gantt chart/timeline view
- **Custom Columns**: Users can customize column names, colors, workflow order

### Use Cases

- **Complex Project Management**: Large software development projects requiring multi-dimensional task information tracking and team collaboration
- **Product Development**: Product team feature development, design review, testing release full-process management
- **Marketing Campaigns**: Marketing team activity planning, content production, launch execution, effectiveness tracking
- **Professional Services**: Project delivery management for consulting firms, law firms, and other professional service organizations
- **Enterprise PMO**: Multi-project portfolio management and resource scheduling for project management offices
- **R&D Management**: Tech team requirements management, development tracking, quality control, release management
- **Design Collaboration**: Design team design tasks, review processes, asset management, version control
- **SaaS Platforms**: Project management SaaS services for clients requiring rich features supporting diverse needs
