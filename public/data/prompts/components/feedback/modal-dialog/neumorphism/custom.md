# Neumorphism Modal Dialog

## 中文版本 (zh-CN)

請創建一個新擬物（Neumorphism）風格的模態對話框組件。

### 設計理念

新擬物主義結合了擬物化設計的真實感和扁平化設計的簡潔性，通過精心設計的光影效果創造出柔和的立體感。對話框應該像是從背景中「擠壓」出來的軟質物體。

### 視覺特徵

**整體風格**
- 背景色與對話框同色系（通常為淺灰色調）
- 雙陰影系統：一側深色陰影，一側淺色（白色）高光
- 陰影柔和擴散，邊緣不銳利
- 圓角較大，增強柔軟質感
- 整體呈現「凸起」的按壓感

**光影設計**
- 假設光源來自左上方
- 右下方使用深色陰影（如淺灰偏深）
- 左上方使用淺色高光（接近白色）
- 陰影模糊程度和偏移量需平衡

**排版設計**
- 文字顏色需與背景形成足夠對比
- 可使用比背景略深的灰色
- 避免純黑色，保持整體柔和感

**按鈕設計**
- 凸起狀態：使用外陰影（與對話框相同手法）
- 按下狀態：使用內陰影，呈現「按入」效果
- 顏色變化微妙，主要通過陰影表現狀態
- 可為主按鈕添加輕微色彩點綴

**內部元素**
- 輸入框可使用「凹陷」效果（內陰影）
- 分隔線若需要，使用雙線模擬凹槽
- 所有元素遵循統一的光影方向

### 交互體驗

- 動畫聚焦於陰影變化而非位移
- 懸停時陰影略微增強，表現「浮起」
- 點擊時陰影內翻，表現「按入」
- 過渡平滑自然

### 注意事項

- 需要精心調整陰影參數，過度會顯得不自然
- 背景色很重要，純白或深色都不適合
- 可訪問性需要特別注意，確保對比度足夠

### 適用場景

- 智能家居控制面板
- 音樂播放器界面
- 極簡風格的工具應用
- 追求柔和質感的產品

---

## English Version (en-US)

Please create a Neumorphism style modal dialog component.

### Design Philosophy

Neumorphism combines the realism of skeuomorphic design with the simplicity of flat design, creating soft dimensionality through carefully designed light and shadow effects. The dialog should appear like a soft object "extruded" from the background.

### Visual Characteristics

**Overall Style**
- Background and dialog use same color family (typically light gray tones)
- Dual shadow system: dark shadow on one side, light (white) highlight on other
- Shadows are soft and diffused, edges not sharp
- Larger border radius enhancing soft quality
- Overall presents a "raised" pressed feeling

**Light and Shadow Design**
- Assume light source from top-left
- Dark shadow on bottom-right (darker gray)
- Light highlight on top-left (near white)
- Shadow blur and offset need careful balance

**Typography Design**
- Text color needs sufficient contrast with background
- Can use gray slightly darker than background
- Avoid pure black, maintain overall softness

**Button Design**
- Raised state: use outer shadow (same technique as dialog)
- Pressed state: use inner shadow, presenting "pushed in" effect
- Subtle color changes, states mainly expressed through shadows
- Primary button can have slight color accent

**Internal Elements**
- Input fields can use "recessed" effect (inner shadow)
- Dividers if needed use double lines simulating grooves
- All elements follow unified light direction

### Interaction Experience

- Animation focuses on shadow changes rather than displacement
- Shadows slightly enhance on hover, expressing "floating up"
- Shadows invert on click, expressing "pushed in"
- Transitions smooth and natural

### Important Notes

- Shadow parameters need careful tuning, excess appears unnatural
- Background color is crucial, pure white or dark colors don't work
- Accessibility needs special attention, ensure sufficient contrast

### Use Cases

- Smart home control panels
- Music player interfaces
- Minimalist style tool applications
- Products pursuing soft tactile quality
