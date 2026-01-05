# Visual Query Builder

## 中文版本 (zh-CN)

請創建一個可視化查詢構建器組件。

### 設計理念

Visual Query Builder 將複雜的數據庫查詢邏輯轉化為直觀的可視化操作,為非技術用戶提供構建高級查詢的能力。設計哲學強調「將 SQL 可視化」,通過拖拽、下拉選擇、條件組合等交互方式,讓用戶無需編寫代碼即可構建複雜的查詢條件。整體設計追求邏輯清晰和操作高效的平衡,既要準確表達 AND/OR 等邏輯關係,又要簡化規則的添加和修改流程。

### 視覺特徵

- **規則組容器**: 使用帶邊框的卡片或面板包裹一組查詢規則,背景色區分嵌套層級
- **AND/OR 切換**: 每個規則組顯示邏輯運算符切換按鈕(AND/OR),使用標籤或下拉菜單
- **規則行**: 每條規則顯示為一行,包含字段選擇、運算符選擇、值輸入、刪除按鈕
- **字段選擇器**: 下拉菜單顯示可查詢的字段列表,可選的字段類型圖標(文本、數字、日期等)
- **運算符選擇**: 根據字段類型動態顯示適用的運算符(等於、包含、大於、小於、在範圍內等)
- **值輸入**: 根據字段類型和運算符顯示適配的輸入控件(文本框、數字輸入、日期選擇器、多選等)
- **嵌套指示**: 使用縮進、連接線或背景色深淺表示規則組的嵌套層級
- **操作按鈕**: 每行顯示「+ 添加規則」「+ 添加分組」「刪除」等操作按鈕
- **SQL 預覽**: 可選的底部面板實時顯示生成的 SQL 語句或查詢 JSON

### 交互體驗

- **添加規則**: 點擊「+ 添加規則」按鈕,在當前組內新增一條空規則行
- **添加分組**: 點擊「+ 添加分組」按鈕,創建嵌套的規則組,支持 AND/OR 嵌套邏輯
- **拖動排序**: 規則和規則組支持拖拽重新排序,拖動時顯示插入位置指示線
- **運算符聯動**: 選擇字段後,運算符自動過濾為該字段類型適用的選項
- **值輸入聯動**: 選擇運算符後,值輸入框自動切換為適配的控件類型
- **刪除規則**: 點擊刪除按鈕移除規則,最後一條規則無法刪除(保持至少一條)
- **邏輯切換**: 點擊 AND/OR 切換按鈕,規則組內所有規則的邏輯關係同步切換
- **實時驗證**: 規則輸入時實時驗證,不完整或錯誤的規則顯示警告提示
- **導出查詢**: 點擊「導出」按鈕,將查詢條件導出為 JSON 或 SQL 格式
- **導入查詢**: 支持從 JSON 加載預設查詢條件,自動構建規則樹

### 適用場景

- **數據報表**: BI 工具、數據分析平台的報表篩選器構建
- **高級搜索**: 電商網站、招聘平台、房產網站的高級搜索功能
- **權限管理**: 基於規則的訪問控制(RBAC)系統,定義複雜的權限條件
- **營銷自動化**: 根據用戶行為和屬性構建精準的營銷受眾規則
- **監控告警**: 監控系統的告警規則配置,定義多條件觸發邏輯
- **工作流引擎**: 工作流系統的條件分支定義,複雜業務邏輯配置
- **API 測試**: API 測試工具的請求參數構建,支持複雜的查詢條件
- **數據清洗**: ETL 工具中的數據篩選規則配置

---

## English Version (en-US)

Please create a visual query builder component.

### Design Philosophy

Visual Query Builder transforms complex database query logic into intuitive visual operations, providing non-technical users with ability to build advanced queries. The design philosophy emphasizes "visualizing SQL" through drag-drop, dropdown selection, condition combination interactions, allowing users to construct complex query conditions without writing code. The overall design pursues balance between logical clarity and operational efficiency, accurately expressing AND/OR logical relationships while simplifying rule addition and modification processes.

### Visual Characteristics

- **Rule Group Container**: Bordered cards or panels wrapping query rule groups, background colors distinguishing nesting levels
- **AND/OR Toggle**: Each rule group displays logical operator toggle button (AND/OR) using labels or dropdown
- **Rule Rows**: Each rule displayed as row containing field selection, operator selection, value input, delete button
- **Field Selector**: Dropdown menu showing queryable field list, optional field type icons (text, number, date, etc.)
- **Operator Selection**: Dynamically displays applicable operators based on field type (equals, contains, greater than, less than, in range, etc.)
- **Value Input**: Displays adapted input control based on field type and operator (text box, number input, date picker, multi-select, etc.)
- **Nesting Indicator**: Uses indentation, connecting lines, or background color depth to indicate rule group nesting levels
- **Action Buttons**: Each row displays "+ Add Rule", "+ Add Group", "Delete" action buttons
- **SQL Preview**: Optional bottom panel real-time displaying generated SQL statement or query JSON

### Interaction Experience

- **Add Rule**: Clicking "+ Add Rule" button adds new empty rule row within current group
- **Add Group**: Clicking "+ Add Group" button creates nested rule group supporting AND/OR nested logic
- **Drag Sorting**: Rules and rule groups support drag-reordering, showing insertion position indicator line during drag
- **Operator Linking**: After selecting field, operators auto-filter to applicable options for that field type
- **Value Input Linking**: After selecting operator, value input box auto-switches to adapted control type
- **Delete Rule**: Clicking delete button removes rule, last rule cannot be deleted (maintaining at least one)
- **Logic Toggle**: Clicking AND/OR toggle button synchronously switches logical relationship for all rules in group
- **Real-time Validation**: Real-time validation during rule input, incomplete or erroneous rules show warning prompts
- **Export Query**: Clicking "Export" button exports query conditions as JSON or SQL format
- **Import Query**: Supports loading preset query conditions from JSON, auto-building rule tree

### Use Cases

- **Data Reports**: Report filter builder in BI tools, data analysis platforms
- **Advanced Search**: Advanced search functionality in e-commerce sites, recruitment platforms, real estate sites
- **Permission Management**: Defining complex permission conditions in rule-based access control (RBAC) systems
- **Marketing Automation**: Building precise marketing audience rules based on user behavior and attributes
- **Monitoring Alerts**: Alert rule configuration in monitoring systems, defining multi-condition trigger logic
- **Workflow Engine**: Conditional branch definition in workflow systems, complex business logic configuration
- **API Testing**: Request parameter building in API testing tools supporting complex query conditions
- **Data Cleansing**: Data filtering rule configuration in ETL tools
