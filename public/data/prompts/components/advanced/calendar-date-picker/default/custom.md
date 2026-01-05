# Clean Calendar Date Picker

## 中文版本 (zh-CN)

請創建一個簡潔風格的日曆日期選擇器組件。

### 設計理念

Clean Calendar Date Picker 提供直觀、高效的日期選擇體驗,將傳統的日曆視圖與現代 UI 設計相結合。設計哲學強調「一目了然的時間導航」,通過清晰的視覺層次和自然的交互邏輯,讓用戶能夠快速定位並選擇目標日期。整體設計追求簡潔和功能性的平衡,去除不必要的視覺干擾,專注於核心的日期選擇任務,同時保留必要的導航和輔助功能。

### 視覺特徵

- **月視圖佈局**: 傳統的 7 列(週一至週日)、4-6 行(日期數字)網格佈局
- **標題欄**: 頂部顯示當前年月,兩側顯示上/下月箭頭按鈕,可選的年份/月份下拉選擇器
- **星期標籤**: 第一行顯示星期縮寫(一、二、三...或 Mon、Tue、Wed...),使用淺灰色
- **日期單元格**: 每個日期顯示為方形或圓形單元格,使用無襯線數字字體
- **當前日期**: 今天的日期使用邊框或底色標記,區別於其他日期
- **選中日期**: 選中的日期使用品牌主色背景和白色文字,清晰突出
- **非當月日期**: 上月末尾和下月開頭的日期使用淺灰色,降低視覺優先級
- **禁用日期**: 不可選的日期使用刪除線或淡化顯示,懸停時不響應
- **範圍選擇**: 支持日期範圍時,起止日期間的日期使用淺色背景連接

### 交互體驗

- **點擊選擇**: 點擊日期單元格立即選中該日期,日期選擇器可選的自動關閉或保持打開
- **月份切換**: 點擊箭頭按鈕切換上/下月,使用平滑的淡入淡出動畫
- **快速跳轉**: 點擊年月標題可展開年份選擇器或月份選擇器,快速跳轉到任意年月
- **懸停反饋**: 懸停日期時背景輕微變化,提供即時的交互反饋
- **鍵盤導航**: 使用方向鍵在日期間移動,Enter 選中日期,Esc 關閉日期選擇器
- **今天按鈕**: 可選的「今天」快捷按鈕,一鍵跳轉到當前日期並選中
- **清除按鈕**: 可選的「清除」按鈕,清空已選日期
- **範圍拖選**: 範圍選擇模式下,按住拖動可快速選擇連續日期範圍
- **輸入框聯動**: 關聯的日期輸入框實時顯示選中日期,支持手動輸入觸發選擇器

### 適用場景

- **表單日期**: 註冊表單、預訂表單、問卷調查等需要日期輸入的場景
- **日程管理**: 日曆應用、待辦事項、會議安排等時間管理工具
- **預訂系統**: 酒店預訂、機票預訂、餐廳預訂等需要選擇日期或日期範圍
- **數據篩選**: 報表系統、數據分析工具中的日期範圍篩選
- **活動報名**: 活動管理系統中的活動日期選擇、報名截止日期設置
- **請假申請**: OA 系統中的請假起止日期選擇
- **賬單查詢**: 財務系統、電商平台的賬單日期範圍查詢
- **內容發布**: CMS 系統中的文章發布日期、定時發布設置

---

## English Version (en-US)

Please create a clean style calendar date picker component.

### Design Philosophy

Clean Calendar Date Picker provides intuitive, efficient date selection experience, combining traditional calendar view with modern UI design. The design philosophy emphasizes "time navigation at a glance" through clear visual hierarchy and natural interaction logic, enabling users to quickly locate and select target dates. The overall design pursues balance between simplicity and functionality, removing unnecessary visual distractions to focus on core date selection task while retaining necessary navigation and auxiliary functions.

### Visual Characteristics

- **Month View Layout**: Traditional 7-column (Monday to Sunday), 4-6 row (date numbers) grid layout
- **Header Bar**: Top displays current year-month with previous/next month arrow buttons on sides, optional year/month dropdown selectors
- **Weekday Labels**: First row displays weekday abbreviations (Mon, Tue, Wed... or 一、二、三...) using light gray
- **Date Cells**: Each date displayed as square or circular cell using sans-serif number font
- **Current Date**: Today's date marked with border or background color, distinguished from other dates
- **Selected Date**: Selected date uses brand primary color background and white text, clearly highlighted
- **Non-Current Month Dates**: End of previous month and beginning of next month dates use light gray, reducing visual priority
- **Disabled Dates**: Non-selectable dates use strikethrough or faded display, no hover response
- **Range Selection**: When supporting date ranges, dates between start and end use light background connection

### Interaction Experience

- **Click Selection**: Clicking date cell immediately selects that date, date picker optionally auto-closes or stays open
- **Month Switching**: Clicking arrow buttons switches to previous/next month using smooth fade in/out animation
- **Quick Jump**: Clicking year-month header expands year selector or month selector for quick jump to any year-month
- **Hover Feedback**: Background slightly changes on date hover, providing instant interaction feedback
- **Keyboard Navigation**: Arrow keys move between dates, Enter selects date, Esc closes date picker
- **Today Button**: Optional "Today" shortcut button for one-click jump to current date and selection
- **Clear Button**: Optional "Clear" button to clear selected date
- **Range Drag Selection**: In range selection mode, press and drag for quick consecutive date range selection
- **Input Box Linking**: Associated date input box real-time displays selected date, supports manual input triggering picker

### Use Cases

- **Form Dates**: Registration forms, booking forms, surveys requiring date input
- **Schedule Management**: Calendar apps, to-do lists, meeting arrangements, and other time management tools
- **Booking Systems**: Hotel bookings, flight bookings, restaurant reservations requiring date or date range selection
- **Data Filtering**: Date range filtering in reporting systems, data analysis tools
- **Event Registration**: Event date selection, registration deadline setting in event management systems
- **Leave Applications**: Leave start-end date selection in OA systems
- **Bill Inquiry**: Bill date range query in financial systems, e-commerce platforms
- **Content Publishing**: Article publication date, scheduled publishing settings in CMS systems
