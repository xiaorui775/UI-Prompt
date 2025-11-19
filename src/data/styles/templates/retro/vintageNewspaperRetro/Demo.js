// Vintage Newspaper Family Demo
// 复古报纸家族演示 UI
// Showcases newspaper typography, paper texture, and coffee stain effects

export const demoHTML = `
  <div class="newspaper-demo">
    <div class="newspaper-card">
      <!-- Header -->
      <div class="newspaper-header">
        <div class="newspaper-date">JUNE 15, 1952</div>
        <h1 class="newspaper-title">DAILY NEWS</h1>
        <div class="newspaper-divider"></div>
      </div>

      <!-- Content -->
      <div class="newspaper-content">
        <div class="newspaper-columns">
          <div class="column">
            <p class="newspaper-text">Breaking news from the printing press era.</p>
          </div>
          <div class="column">
            <p class="newspaper-text">Classic typography meets timeless design.</p>
          </div>
        </div>
      </div>

      <!-- Coffee stain decoration -->
      <div class="coffee-stain"></div>
    </div>
  </div>
`;

export const customStyles = `
  /* CSS Variables */
  .newspaper-demo {
    --paper-beige: #f4e8c1;
    --ink-black: #000000;
    --coffee-brown: #8b7355;
    --aged-brown: #4a3c31;
  }

  /* Main container */
  .newspaper-demo {
    min-height: 280px;
    padding: 16px;
    background: linear-gradient(135deg, #d4c4a8 0%, #e8dcc4 100%);
    font-family: 'Times New Roman', Times, serif;
  }

  /* Card with paper texture */
  .newspaper-card {
    position: relative;
    background: var(--paper-beige);
    border: 1px solid var(--aged-brown);
    padding: 24px;
    box-shadow: 0 4px 12px rgba(74, 60, 49, 0.3);
    background-image:
      repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.03) 2px, rgba(0,0,0,0.03) 4px),
      repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(0,0,0,0.03) 2px, rgba(0,0,0,0.03) 4px);
  }

  /* Header */
  .newspaper-header {
    text-align: center;
    margin-bottom: 20px;
  }

  .newspaper-date {
    font-size: 11px;
    letter-spacing: 0.15em;
    color: var(--aged-brown);
    margin-bottom: 8px;
  }

  .newspaper-title {
    font-size: 32px;
    font-weight: 900;
    letter-spacing: 0.1em;
    color: var(--ink-black);
    margin: 0;
    text-transform: uppercase;
  }

  .newspaper-divider {
    width: 60%;
    height: 2px;
    background: var(--ink-black);
    margin: 12px auto 0;
  }

  /* Content */
  .newspaper-content {
    margin-top: 20px;
  }

  .newspaper-columns {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
  }

  .column {
    border-left: 1px solid var(--aged-brown);
    padding-left: 12px;
  }

  .column:first-child {
    border-left: none;
    padding-left: 0;
  }

  .newspaper-text {
    font-size: 13px;
    line-height: 1.6;
    color: var(--ink-black);
    margin: 0;
    text-align: justify;
  }

  /* Coffee stain decoration */
  .coffee-stain {
    position: absolute;
    bottom: 20px;
    right: 20px;
    width: 60px;
    height: 60px;
    background: radial-gradient(circle, rgba(139, 115, 85, 0.3) 0%, rgba(139, 115, 85, 0.1) 50%, transparent 70%);
    border-radius: 50%;
    filter: blur(2px);
  }
`;

export default { demoHTML, customStyles };
