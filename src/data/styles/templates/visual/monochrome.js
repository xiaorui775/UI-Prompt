// Visual — Monochrome (full page via preview loader)

export const visualMonochrome = {
  id: 'visual-monochrome',
  title: 'styles.visual.monochrome.title',
  description: 'styles.visual.monochrome.description',
  demoHTML: `
    <div class="mono-demo">
      <div class="mono-card">
        <h4>MONO</h4>
        <div class="mono-swatches">
          <div class="s s--black"></div>
          <div class="s s--gray"></div>
          <div class="s s--light"></div>
        </div>
      </div>
    </div>
  `,
  customStyles: `
    .mono-demo { display:flex; align-items:center; justify-content:center; padding:16px; }
    .mono-card { background:#fff; border:1px solid #e5e7eb; border-radius:14px; padding:16px; text-align:center; width:280px; }
    .mono-card h4 { margin:0 0 8px; font-weight:900; letter-spacing:.08em; }
    .mono-swatches { display:flex; gap:10px; justify-content:center; }
    .s { width:40px; height:40px; border-radius:10px; }
    .s--black { background:#000; }
    .s--gray { background:linear-gradient(135deg,#9ca3af,#6b7280); }
    .s--light { background:#f3f4f6; border:1px solid #e5e7eb; }
  `,
  // Use existing async preview id to load full page
  fullPagePreviewId: 'monochrome',
}

