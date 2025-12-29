# Glassmorphism - List View

## Prompt (en-US)

### Style Characteristics
Glassmorphic list views simulate frosted glass texture, creating a light, modern, and tech-forward visual atmosphere. Semi-transparent list items layered on gradient backgrounds produce depth and visual interest. Backdrop blur effects and subtle borders with inner glows create the signature glass aesthetic. Perfect for trendy applications and modern dashboards.

### Color Scheme
- **Background**: Gradient (e.g., linear-gradient(135deg, rgba(147,51,234,0.1), rgba(59,130,246,0.1)))
- **Item Background**: rgba(255,255,255,0.15), hover rgba(255,255,255,0.25)
- **Borders**: rgba(255,255,255,0.2), hover rgba(255,255,255,0.3)
- **Text (Primary)**: rgba(0,0,0,0.85) on light backgrounds or rgba(255,255,255,0.95) on dark
- **Text (Secondary)**: rgba(0,0,0,0.6) or rgba(255,255,255,0.7)
- **Selected**: rgba(255,255,255,0.3) with stronger border rgba(255,255,255,0.5)
- **Icon Background**: Semi-transparent gradients with backdrop blur

### Design Details
- **Borders**: 1px solid rgba(255,255,255,0.2), top border may have higher opacity for inner glow effect
- **Border Radius**: 12-16px for modern, smooth appearance
- **Shadows**:
  - Default: 0 8px 32px rgba(31,38,135,0.15), inset 0 1px 0 rgba(255,255,255,0.4)
  - Hover: 0 12px 40px rgba(31,38,135,0.2), inset 0 1px 0 rgba(255,255,255,0.5)
- **Blur**: backdrop-filter: blur(16-20px), -webkit-backdrop-filter: blur(16-20px)
- **Spacing**: padding 16-20px, gap 8-12px between items
- **Typography**: Primary 0.875-1rem/500, secondary 0.75-0.875rem/400, text-shadow for better readability
- **Hover**: Background opacity increases, border brighter, subtle scale 1.01, transition 300ms ease
- **Icon**: 32-36px with semi-transparent gradient, backdrop-filter: blur(8px)
- **Dividers**: Optional subtle gradient lines or rely on spacing

---

## 提示詞 (zh-CN)

### 風格特點
玻璃態列表視圖模擬毛玻璃質感，營造輕盈、現代、科技感的視覺氛圍。半透明的列表項層疊在漸層背景上，產生深度和視覺趣味。背景模糊效果和帶內發光的細微邊框創造出標誌性的玻璃美學。適合時尚應用和現代儀表板。

### 配色方案
- **背景**：漸變（如 linear-gradient(135deg, rgba(147,51,234,0.1), rgba(59,130,246,0.1))）
- **列表項背景**：rgba(255,255,255,0.15)，懸停 rgba(255,255,255,0.25)
- **邊框**：rgba(255,255,255,0.2)，懸停 rgba(255,255,255,0.3)
- **文字（主）**：淺色背景上 rgba(0,0,0,0.85) 或深色背景上 rgba(255,255,255,0.95)
- **文字（次）**：rgba(0,0,0,0.6) 或 rgba(255,255,255,0.7)
- **選中**：rgba(255,255,255,0.3) 配合更強邊框 rgba(255,255,255,0.5)
- **圖標背景**：半透明漸變配合背景模糊

### 細節設計
- **邊框**：1px solid rgba(255,255,255,0.2)，頂部邊框可能有更高不透明度創造內發光效果
- **圓角**：12-16px 創造現代流暢外觀
- **陰影**：
  - 默認：0 8px 32px rgba(31,38,135,0.15), inset 0 1px 0 rgba(255,255,255,0.4)
  - 懸停：0 12px 40px rgba(31,38,135,0.2), inset 0 1px 0 rgba(255,255,255,0.5)
- **模糊**：backdrop-filter: blur(16-20px), -webkit-backdrop-filter: blur(16-20px)
- **間距**：padding 16-20px，項目間 gap 8-12px
- **字體**：主 0.875-1rem/500，次 0.75-0.875rem/400，text-shadow 提升可讀性
- **懸停**：背景不透明度增加，邊框更亮，輕微縮放 1.01，過渡 300ms ease
- **圖標**：32-36px 帶半透明漸變，backdrop-filter: blur(8px)
- **分隔線**：可選細微漸變線或依賴間距
