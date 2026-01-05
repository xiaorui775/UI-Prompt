# Tokyo Night Dark Code Editor

## 中文版本 (zh-CN)

請創建一個 Tokyo Night Dark 主題風格的代碼編輯器組件。

### 設計理念

Tokyo Night Dark 代碼編輯器靈感源自流行的 Tokyo Night 配色方案,為開發者提供低對比度、護眼的深色編碼環境。設計哲學強調「長時間編碼的舒適性」,通過精心調配的深藍紫色調和柔和的語法高亮,減少視覺疲勞同時保持代碼可讀性。整體設計追求專業、沉浸的開發體驗,結合 macOS 風格的窗口控件和流暢的交互動畫,創造出優雅而高效的編碼環境。

### 視覺特徵

- **深色背景**: 主背景使用深藍灰色 (#1a1b26),代碼區域使用稍深的 (#16161e),創造層次感
- **Mac 風格窗口**: 左上角三個圓形控件(紅、黃、綠),模擬 macOS 窗口外觀,增添親和力
- **Tokyo Night 配色**: 語法高亮使用 Tokyo Night 標誌性色彩:藍色 (#7aa2f7)、紫色 (#bb9af7)、青色 (#7dcfff)、綠色 (#9ece6a)、橙色 (#ff9e64)
- **行號顯示**: 左側顯示行號,使用低對比度灰色 (#565f89),當前行行號高亮
- **標題欄**: 頂部顯示文件名標籤,使用深色背景和細邊框,可選的圖標表示文件類型
- **狀態欄**: 底部狀態欄顯示行列位置、編碼格式、語言模式等信息,使用深藍背景
- **選擇高亮**: 選中代碼使用柔和的藍色背景 (#364a82),避免過於刺眼
- **當前行高亮**: 當前編輯行使用微妙的背景色 (#1e202e) 區分

### 交互體驗

- **平滑滾動**: 代碼滾動使用慣性滾動,帶有平滑的減速效果
- **語法即時高亮**: 輸入代碼時語法高亮即時應用,使用防抖避免性能問題
- **自動完成**: 輸入時彈出代碼補全提示框,使用深色背景和柔和陰影
- **括號匹配**: 光標移動時高亮匹配的括號,使用邊框或背景色標記
- **多光標編輯**: 支持 Alt+Click 添加多個光標,同時編輯多處代碼
- **代碼折疊**: 代碼塊左側顯示折疊圖標,點擊可折疊/展開代碼段
- **搜索替換**: Cmd/Ctrl+F 打開搜索框,匹配項高亮顯示,支持正則表達式
- **懸停提示**: 懸停變量或函數時顯示類型信息和文檔提示

### 適用場景

- **在線代碼編輯器**: Web IDE、代碼練習平台、在線編程教學網站
- **文檔展示**: 技術博客、文檔網站中的代碼示例展示和編輯
- **代碼分享**: 代碼片段分享平台、Gist 替代品、代碼協作工具
- **面試平台**: 在線編程面試、技術評估、編碼挑戰平台
- **配置編輯**: SaaS 應用中的 JSON/YAML/TOML 配置文件編輯器
- **筆記應用**: 開發者筆記工具中的代碼塊編輯功能
- **低代碼平台**: 可視化開發平台中的腳本編輯器
- **API 測試**: API 測試工具中的請求體、響應體編輯器

---

## English Version (en-US)

Please create a Tokyo Night Dark theme style code editor component.

### Design Philosophy

Tokyo Night Dark code editor draws inspiration from the popular Tokyo Night color scheme, providing developers with low-contrast, eye-friendly dark coding environment. The design philosophy emphasizes "comfort for extended coding sessions" through carefully calibrated deep blue-purple tones and soft syntax highlighting, reducing visual fatigue while maintaining code readability. The overall design pursues professional, immersive development experience, combining macOS-style window controls and smooth interaction animations to create an elegant yet efficient coding environment.

### Visual Characteristics

- **Dark Background**: Main background uses deep blue-gray (#1a1b26), code area uses slightly darker (#16161e), creating hierarchy
- **Mac-Style Window**: Three circular controls (red, yellow, green) in top-left corner simulating macOS window appearance, adding approachability
- **Tokyo Night Color Scheme**: Syntax highlighting uses Tokyo Night signature colors: blue (#7aa2f7), purple (#bb9af7), cyan (#7dcfff), green (#9ece6a), orange (#ff9e64)
- **Line Numbers**: Left side displays line numbers in low-contrast gray (#565f89), current line number highlighted
- **Title Bar**: Top displays file name tab using dark background and thin border, optional icon indicating file type
- **Status Bar**: Bottom status bar shows line/column position, encoding format, language mode, using deep blue background
- **Selection Highlight**: Selected code uses soft blue background (#364a82), avoiding excessive glare
- **Current Line Highlight**: Current editing line uses subtle background color (#1e202e) for distinction

### Interaction Experience

- **Smooth Scrolling**: Code scrolling uses inertial scrolling with smooth deceleration effect
- **Real-time Syntax Highlighting**: Syntax highlighting applies instantly as code is typed, using debouncing to avoid performance issues
- **Auto-completion**: Code completion popup appears during typing, using dark background and soft shadow
- **Bracket Matching**: Matching brackets highlighted as cursor moves, marked with border or background color
- **Multi-cursor Editing**: Supports Alt+Click to add multiple cursors, simultaneously editing multiple locations
- **Code Folding**: Fold icons displayed left of code blocks, clicking to fold/expand code sections
- **Search & Replace**: Cmd/Ctrl+F opens search box, matched items highlighted, supports regular expressions
- **Hover Tooltips**: Type information and documentation hints displayed when hovering over variables or functions

### Use Cases

- **Online Code Editors**: Web IDEs, code practice platforms, online programming education sites
- **Documentation Display**: Code example display and editing in tech blogs, documentation sites
- **Code Sharing**: Code snippet sharing platforms, Gist alternatives, code collaboration tools
- **Interview Platforms**: Online programming interviews, technical assessments, coding challenge platforms
- **Configuration Editing**: JSON/YAML/TOML configuration file editors in SaaS applications
- **Note-Taking Apps**: Code block editing functionality in developer note tools
- **Low-Code Platforms**: Script editors in visual development platforms
- **API Testing**: Request body, response body editors in API testing tools
