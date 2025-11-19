// Visual — Soft UI (Neumorphism) (uses full page via preview loader)

export const visualSoftUI = {
  id: 'visual-soft-ui',
  title: 'styles.visual.softUI.title',
  description: 'styles.visual.softUI.description',
  demoHTML: `
    <div class="soft-card">
      <div class="soft-circle"></div>
      <div class="soft-label">Soft UI</div>
    </div>
  `,
  customStyles: `
    .soft-card { background:#e0e0e0; border:2px solid #d0d0d0; padding:16px; border-radius:12px; text-align:center; }
    .soft-circle { width:54px; height:54px; margin:0 auto 8px; border-radius:50%; background:#e0e0e0; border:1px solid #c0c0c0; box-shadow: 8px 8px 16px rgba(163,177,198,.6), -8px -8px 16px rgba(255,255,255,.8); }
    .soft-label { font-size:12px; color:#374151; }
  `,
  // Prefer light soft-ui variant as default
  fullPagePreviewId: 'soft-ui-light',
}

