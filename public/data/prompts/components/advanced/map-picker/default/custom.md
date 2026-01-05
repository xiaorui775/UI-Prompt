# Interactive Map Location Picker

## 中文版本 (zh-CN)

請創建一個交互式地圖位置選擇器組件。

### 設計理念

Interactive Map 位置選擇器提供直觀的地理位置選擇體驗,將傳統的地址輸入轉化為視覺化的地圖交互。設計哲學強調「所見即所得」,用戶通過拖動、點擊、搜索等自然的交互方式精確定位目標位置。整體設計追求易用性和功能完整性的平衡,既要簡化位置選擇流程,又要提供足夠的控制精度和輔助信息。

### 視覺特徵

- **地圖畫布**: 主視覺區域顯示交互式地圖,支持拖動平移、滾輪縮放,使用網格背景或真實地圖圖層
- **標記圖釘**: 中心顯示紅色標記圖釘,固定在地圖中心或可拖動到任意位置
- **搜索框**: 頂部顯示位置搜索輸入框,帶有放大鏡圖標和清除按鈕
- **縮放控件**: 右側或底部顯示 +/- 縮放按鈕,可選的縮放比例指示器
- **坐標顯示**: 底部實時顯示當前標記位置的經緯度坐標,格式化為易讀形式
- **圖層選擇**: 可選的圖層切換按鈕,在街道地圖、衛星圖、地形圖之間切換
- **位置詳情**: 側邊欄或底部卡片顯示選中位置的詳細地址、郵編、行政區劃等信息
- **公園和水域**: 地圖上使用不同顏色標識公園(綠色)、水域(藍色)等地理特徵

### 交互體驗

- **拖動平移**: 在地圖上按住拖動可平移視圖,使用慣性滾動模擬真實物理感
- **點擊定位**: 點擊地圖任意位置,標記圖釘跳轉到該位置,帶有平滑動畫
- **搜索跳轉**: 在搜索框輸入地址或地點,選擇搜索結果後地圖自動跳轉並標記
- **縮放控制**: 使用滾輪、縮放按鈕或雙擊放大,縮放過程平滑過渡
- **位置確認**: 選定位置後點擊「確認」按鈕,將位置信息返回給父組件
- **歷史記錄**: 可選的最近使用位置列表,快速選擇常用地址
- **定位當前**: 可選的「定位到我」按鈕,使用瀏覽器地理定位 API 獲取當前位置
- **鍵盤導航**: 支持方向鍵微調地圖位置,+/- 鍵控制縮放

### 適用場景

- **配送地址**: 電商平台、外賣應用的收貨地址選擇,精確到門牌號
- **活動簽到**: 活動管理系統的簽到位置記錄,驗證用戶是否在現場
- **房產網站**: 房源發布時選擇房產位置,用戶瀏覽時查看周邊環境
- **旅遊預訂**: 酒店、景點、餐廳等的位置選擇和展示
- **物流跟蹤**: 快遞包裹實時位置顯示,配送路線規劃
- **社交簽到**: 社交應用的位置分享、簽到打卡功能
- **店鋪定位**: 連鎖店管理系統的門店位置錄入和展示
- **緊急救援**: 緊急報警系統的事發地點標記,精確位置傳遞

---

## English Version (en-US)

Please create an interactive map location picker component.

### Design Philosophy

Interactive Map location picker provides intuitive geographical location selection experience, transforming traditional address input into visualized map interaction. The design philosophy emphasizes "what you see is what you get," allowing users to precisely locate target positions through natural interactions like dragging, clicking, and searching. The overall design pursues balance between usability and functional completeness, both simplifying location selection process and providing sufficient control precision and auxiliary information.

### Visual Characteristics

- **Map Canvas**: Main visual area displays interactive map supporting drag panning, wheel zooming, using grid background or real map layers
- **Marker Pin**: Red marker pin displayed at center, fixed at map center or draggable to any position
- **Search Box**: Location search input box displayed at top with magnifying glass icon and clear button
- **Zoom Controls**: +/- zoom buttons displayed on right or bottom, optional zoom level indicator
- **Coordinate Display**: Real-time display of current marker position's latitude/longitude coordinates at bottom, formatted for readability
- **Layer Selection**: Optional layer toggle buttons switching between street map, satellite view, terrain map
- **Location Details**: Sidebar or bottom card showing selected location's detailed address, postal code, administrative divisions
- **Parks and Water**: Map uses different colors to identify parks (green), water bodies (blue), and other geographical features

### Interaction Experience

- **Drag Panning**: Press and drag on map to pan view, using inertial scrolling to simulate real physical feel
- **Click Positioning**: Clicking anywhere on map makes marker pin jump to that position with smooth animation
- **Search Jump**: Entering address or place in search box, map auto-jumps and marks after selecting search result
- **Zoom Control**: Using wheel, zoom buttons, or double-click to zoom, smooth transition during zooming
- **Location Confirmation**: Clicking "Confirm" button after selecting location returns location information to parent component
- **History**: Optional recent location list for quickly selecting frequently used addresses
- **Locate Current**: Optional "Locate Me" button using browser geolocation API to get current position
- **Keyboard Navigation**: Supports arrow keys for fine-tuning map position, +/- keys for zoom control

### Use Cases

- **Delivery Addresses**: Shipping address selection in e-commerce platforms, food delivery apps, precise to house number
- **Event Check-in**: Check-in location recording in event management systems, verifying user on-site presence
- **Real Estate Websites**: Property location selection during listing publication, browsing surrounding environment
- **Travel Booking**: Location selection and display for hotels, attractions, restaurants
- **Logistics Tracking**: Real-time package location display, delivery route planning
- **Social Check-in**: Location sharing, check-in functionality in social applications
- **Store Locator**: Store location entry and display in chain store management systems
- **Emergency Response**: Incident location marking in emergency alarm systems, precise location transmission
