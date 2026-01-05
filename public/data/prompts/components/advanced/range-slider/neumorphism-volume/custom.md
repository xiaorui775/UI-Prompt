# Neumorphism Volume Range Slider

## 中文版本 (zh-CN)

請創建一個 Neumorphism Volume 風格的音量調節範圍滑桿組件。

### 設計理念

Neumorphism Volume 範圍滑桿採用新擬物化設計語言,通過軟陰影和浮雕效果創造出「從界面中凸起」或「壓入界面」的視覺錯覺。設計哲學強調觸感和物理真實性,模擬物理世界中的按鈕、旋鈕等觸覺元素。專為音量控制場景優化,整體設計追求柔和、親和的視覺體驗,同時通過精妙的光影效果提供清晰的交互反饋。

### 視覺特徵

- **軟陰影軌道**: 軌道使用內陰影創造凹陷效果 (inset 2px 2px 5px #b8b9be, inset -2px -2px 5px #ffffff)
- **浮雕滑塊**: 滑塊使用雙向陰影創造凸起效果 (4px 4px 8px #b8b9be, -4px -4px 8px #ffffff)
- **同色系背景**: 軌道、滑塊和背景使用相同或相近的淺灰色 (#e0e5ec),通過陰影區分層次
- **圓潤造型**: 軌道使用大圓角 (border-radius: 10px),滑塊為完全圓形,直徑 28-32px
- **音量圖標**: 滑塊內嵌音量圖標(喇叭符號),圖標顏色為中性灰,隨音量大小可變化
- **極簡色彩**: 避免使用鮮豔色彩,所有元素使用灰階或低飽和度色彩
- **細膩漸變**: 軌道和滑塊可選的微妙漸變,模擬光線在曲面上的反射

### 交互體驗

- **壓入效果**: 按下滑塊時,外陰影變為內陰影,創造「被按下」的視覺反饋
- **陰影過渡**: 懸停時外陰影輕微擴大,從 4px 增至 6px,過渡時間 300ms
- **音量可視化**: 滑塊左側軌道使用淺色填充表示當前音量,保持 Neumorphism 柔和質感
- **圖標動畫**: 音量為 0 時顯示靜音圖標,拖動時圖標在喇叭 1 格、2 格、3 格之間切換
- **平滑拖動**: 滑塊移動時陰影位置同步變化,增強物理真實感
- **觸覺模擬**: 可選的haptic feedback,在支持的設備上提供震動反饋
- **數值顯示**: 滑塊上方顯示音量百分比,使用 Neumorphism 風格的浮起卡片承載

### 適用場景

- **音頻播放器**: 音樂播放器、播客應用、音頻編輯器的音量控制
- **視頻平台**: 視頻播放器、流媒體服務的音量調節
- **遊戲設置**: 遊戲音效音量、背景音樂音量、語音音量獨立控制
- **會議軟件**: 視頻會議、在線課堂的麥克風音量、揚聲器音量調節
- **系統設置**: 操作系統、移動設備的主音量控制界面
- **智能音箱**: 智能家居控制面板的音箱音量調節
- **Neumorphism 設計系統**: 採用 Neumorphism 設計語言的應用,確保設計一致性
- **柔和界面**: 需要親和、舒適視覺體驗的健康、冥想、睡眠輔助應用

---

## English Version (en-US)

Please create a Neumorphism Volume style volume adjustment range slider component.

### Design Philosophy

Neumorphism Volume range slider adopts neomorphism design language, creating visual illusions of "rising from interface" or "pressing into interface" through soft shadows and embossed effects. The design philosophy emphasizes tactile sensation and physical realism, simulating tactile elements like buttons and knobs in the physical world. Optimized for volume control scenarios, the overall design pursues soft, approachable visual experience while providing clear interaction feedback through exquisite light and shadow effects.

### Visual Characteristics

- **Soft Shadow Track**: Track uses inner shadow to create depression effect (inset 2px 2px 5px #b8b9be, inset -2px -2px 5px #ffffff)
- **Embossed Thumb**: Thumb uses bidirectional shadow to create raised effect (4px 4px 8px #b8b9be, -4px -4px 8px #ffffff)
- **Monochromatic Background**: Track, thumb, and background use same or similar light gray (#e0e5ec), distinguishing hierarchy through shadows
- **Rounded Shapes**: Track uses large border-radius (10px), thumb is fully circular with 28-32px diameter
- **Volume Icon**: Volume icon (speaker symbol) embedded in thumb, icon color is neutral gray, can vary with volume level
- **Minimal Colors**: Avoids vivid colors, all elements use grayscale or low saturation colors
- **Subtle Gradients**: Optional subtle gradients on track and thumb, simulating light reflection on curved surfaces

### Interaction Experience

- **Press-in Effect**: When pressing thumb, outer shadow changes to inner shadow, creating "being pressed" visual feedback
- **Shadow Transition**: Outer shadow slightly expands on hover from 4px to 6px with 300ms transition
- **Volume Visualization**: Track left of thumb uses light fill to represent current volume, maintaining Neumorphism soft texture
- **Icon Animation**: Shows mute icon at volume 0, icon switches between speaker 1-bar, 2-bar, 3-bar during dragging
- **Smooth Dragging**: Shadow position synchronizes with thumb movement, enhancing physical realism
- **Tactile Simulation**: Optional haptic feedback providing vibration on supported devices
- **Value Display**: Volume percentage displayed above thumb using Neumorphism-style floating card

### Use Cases

- **Audio Players**: Volume control for music players, podcast apps, audio editors
- **Video Platforms**: Volume adjustment for video players, streaming services
- **Game Settings**: Independent control for game sound effects, background music, voice volume
- **Meeting Software**: Microphone volume, speaker volume adjustment in video conferencing, online classrooms
- **System Settings**: Main volume control interface for operating systems, mobile devices
- **Smart Speakers**: Speaker volume adjustment in smart home control panels
- **Neumorphism Design Systems**: Applications adopting Neumorphism design language ensuring design consistency
- **Soft Interfaces**: Health, meditation, sleep aid applications requiring approachable, comfortable visual experience
