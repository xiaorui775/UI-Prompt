// Leather Texture - Vintage Travel Journal Full Page
// 复古旅行日志完整页面 HTML 和样式

export const leatherTextureFullPageHTML = `
<!-- Vintage Travel Journal Landing Page -->
<div class="leather-journal-page">

  <!-- Navigation - Leather Tab Style -->
  <nav class="leather-nav">
    <div class="nav-container">
      <div class="logo-area">
        <div class="leather-badge">
          <span class="badge-icon">🌍</span>
        </div>
        <h1 class="brand-name">Wanderlust Journal</h1>
      </div>
      <ul class="nav-tabs">
        <li><a href="javascript:void(0)" class="nav-tab active">Home</a></li>
        <li><a href="javascript:void(0)" class="nav-tab">Destinations</a></li>
        <li><a href="javascript:void(0)" class="nav-tab">Stories</a></li>
        <li><a href="javascript:void(0)" class="nav-tab">Gallery</a></li>
        <li><a href="javascript:void(0)" class="nav-tab">Contact</a></li>
      </ul>
    </div>
  </nav>

  <!-- Hero Section - Map Background -->
  <section class="hero-journal">
    <div class="hero-content">
      <div class="travel-stamp stamp-top-left">
        <div class="stamp-inner">
          <span class="stamp-icon">✈️</span>
          <span class="stamp-text">Adventure</span>
        </div>
      </div>

      <h2 class="hero-title">Begin Your Journey</h2>
      <p class="hero-subtitle">Document every adventure in your personal leather-bound travel journal</p>

      <div class="hero-buttons">
        <a href="javascript:void(0)" class="btn-leather primary">Start Exploring</a>
        <a href="javascript:void(0)" class="btn-leather secondary">View Gallery</a>
      </div>

      <div class="travel-stamp stamp-bottom-right">
        <div class="stamp-inner">
          <span class="stamp-icon">📍</span>
          <span class="stamp-text">Explore</span>
        </div>
      </div>
    </div>
  </section>

  <!-- Feature Cards - Postage Stamp Style -->
  <section class="features-section">
    <h3 class="section-title">Discover Your Story</h3>

    <div class="stamp-cards-grid">
      <!-- Card 1 -->
      <div class="stamp-card">
        <div class="stamp-perforation"></div>
        <div class="stamp-content">
          <div class="stamp-header">
            <span class="stamp-value">01</span>
            <span class="stamp-country">DESTINATIONS</span>
          </div>
          <div class="stamp-image-placeholder">
            <span class="card-icon">🗺️</span>
          </div>
          <h4 class="stamp-title">Plan Your Route</h4>
          <p class="stamp-description">Chart your course through uncharted territories and hidden gems around the world.</p>
          <a href="javascript:void(0)" class="stamp-link">Explore →</a>
        </div>
        <div class="postmark">
          <svg viewBox="0 0 100 100" class="postmark-circle">
            <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" stroke-width="2"/>
            <text x="50" y="45" text-anchor="middle" font-size="12" fill="currentColor">TRAVEL</text>
            <text x="50" y="60" text-anchor="middle" font-size="10" fill="currentColor">2025</text>
          </svg>
        </div>
      </div>

      <!-- Card 2 -->
      <div class="stamp-card">
        <div class="stamp-perforation"></div>
        <div class="stamp-content">
          <div class="stamp-header">
            <span class="stamp-value">02</span>
            <span class="stamp-country">MEMORIES</span>
          </div>
          <div class="stamp-image-placeholder">
            <span class="card-icon">📸</span>
          </div>
          <h4 class="stamp-title">Capture Moments</h4>
          <p class="stamp-description">Preserve precious memories with photos, notes, and stories from every adventure.</p>
          <a href="javascript:void(0)" class="stamp-link">Discover →</a>
        </div>
        <div class="postmark">
          <svg viewBox="0 0 100 100" class="postmark-circle">
            <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" stroke-width="2"/>
            <text x="50" y="45" text-anchor="middle" font-size="12" fill="currentColor">MEMORY</text>
            <text x="50" y="60" text-anchor="middle" font-size="10" fill="currentColor">2025</text>
          </svg>
        </div>
      </div>

      <!-- Card 3 -->
      <div class="stamp-card">
        <div class="stamp-perforation"></div>
        <div class="stamp-content">
          <div class="stamp-header">
            <span class="stamp-value">03</span>
            <span class="stamp-country">STORIES</span>
          </div>
          <div class="stamp-image-placeholder">
            <span class="card-icon">✍️</span>
          </div>
          <h4 class="stamp-title">Share Tales</h4>
          <p class="stamp-description">Write and share your travel tales with fellow adventurers across the globe.</p>
          <a href="javascript:void(0)" class="stamp-link">Read More →</a>
        </div>
        <div class="postmark">
          <svg viewBox="0 0 100 100" class="postmark-circle">
            <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" stroke-width="2"/>
            <text x="50" y="45" text-anchor="middle" font-size="12" fill="currentColor">STORY</text>
            <text x="50" y="60" text-anchor="middle" font-size="10" fill="currentColor">2025</text>
          </svg>
        </div>
      </div>
    </div>
  </section>

  <!-- Photo Gallery - Polaroid Style -->
  <section class="gallery-section">
    <h3 class="section-title">Recent Adventures</h3>

    <div class="polaroid-grid">
      <div class="polaroid">
        <div class="polaroid-frame">
          <div class="photo-placeholder">
            <span class="photo-emoji">🏔️</span>
          </div>
          <div class="polaroid-caption">Mountain Peak, Nepal</div>
        </div>
        <div class="tape-strip tape-top-left"></div>
      </div>

      <div class="polaroid">
        <div class="polaroid-frame">
          <div class="photo-placeholder">
            <span class="photo-emoji">🏖️</span>
          </div>
          <div class="polaroid-caption">Tropical Paradise, Bali</div>
        </div>
        <div class="tape-strip tape-top-right"></div>
      </div>

      <div class="polaroid">
        <div class="polaroid-frame">
          <div class="photo-placeholder">
            <span class="photo-emoji">🏛️</span>
          </div>
          <div class="polaroid-caption">Ancient Ruins, Rome</div>
        </div>
        <div class="tape-strip tape-top-left"></div>
      </div>

      <div class="polaroid">
        <div class="polaroid-frame">
          <div class="photo-placeholder">
            <span class="photo-emoji">🌃</span>
          </div>
          <div class="polaroid-caption">City Lights, Tokyo</div>
        </div>
        <div class="tape-strip tape-top-right"></div>
      </div>
    </div>
  </section>

  <!-- Testimonials - Journal Pages -->
  <section class="testimonials-section">
    <h3 class="section-title">Traveler's Notes</h3>

    <div class="journal-pages">
      <div class="journal-page">
        <div class="page-edge"></div>
        <div class="page-content">
          <div class="handwritten-quote">
            "The best journey always takes you home to yourself. This journal captured every moment of my soul-searching adventure through Southeast Asia."
          </div>
          <div class="author-signature">
            <span class="signature-line">— Sarah Chen</span>
            <span class="author-location">Explorer, California</span>
          </div>
        </div>
        <div class="page-decoration">★</div>
      </div>

      <div class="journal-page">
        <div class="page-edge"></div>
        <div class="page-content">
          <div class="handwritten-quote">
            "Every stamp, every photo, every word written here brings back the magic of wandering through cobblestone streets in Europe."
          </div>
          <div class="author-signature">
            <span class="signature-line">— Marco Rossi</span>
            <span class="author-location">Photographer, Milan</span>
          </div>
        </div>
        <div class="page-decoration">♥</div>
      </div>
    </div>
  </section>

  <!-- Call to Action -->
  <section class="cta-section">
    <div class="leather-panel">
      <h3 class="cta-title">Start Your Adventure Today</h3>
      <p class="cta-text">Create your personalized travel journal and document every unforgettable moment.</p>
      <a href="javascript:void(0)" class="btn-leather large">Get Started Free</a>

      <div class="travel-badges">
        <div class="badge-item">✈️ 50K+ Travelers</div>
        <div class="badge-item">🌍 180+ Countries</div>
        <div class="badge-item">📖 1M+ Stories</div>
      </div>
    </div>
  </section>

</div>
`;

export const leatherTextureFullPageStyles = `
@import url('https://fonts.googleapis.com/css2?family=Caveat:wght@400;700&family=Merriweather:wght@300;400;700&family=Dancing+Script:wght@400;700&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.leather-journal-page {
  min-height: 100vh;
  background: linear-gradient(135deg, #8B6F47 0%, #5D4E37 100%);
  font-family: 'Merriweather', serif;
  color: #2C2416;
  position: relative;
  overflow-x: hidden;
}

/* Leather Texture Background */
.leather-journal-page::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image:
    url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200"><filter id="noise"><feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="4" /></filter><rect width="200" height="200" filter="url(%23noise)" opacity="0.15"/></svg>');
  opacity: 0.4;
  pointer-events: none;
}

/* ========== Navigation ========== */
.leather-nav {
  background: linear-gradient(180deg, #4A3C2F 0%, #3A2F24 100%);
  padding: 1.5rem 0;
  box-shadow:
    0 4px 12px rgba(0, 0, 0, 0.4),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);
  border-bottom: 3px solid #2C2416;
  position: relative;
  z-index: 100;
}

.leather-nav::after {
  content: '';
  position: absolute;
  bottom: -8px;
  left: 0;
  right: 0;
  height: 8px;
  background: repeating-linear-gradient(
    90deg,
    transparent 0px,
    transparent 8px,
    rgba(0,0,0,0.2) 8px,
    rgba(0,0,0,0.2) 10px
  );
}

.nav-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo-area {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.leather-badge {
  width: 50px;
  height: 50px;
  background: radial-gradient(circle, #B8860B 0%, #8B6914 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow:
    0 2px 8px rgba(0, 0, 0, 0.5),
    inset 0 1px 2px rgba(255, 255, 255, 0.3);
  font-size: 1.5rem;
}

.brand-name {
  font-family: 'Dancing Script', cursive;
  font-size: 1.8rem;
  color: #F4E8C1;
  font-weight: 700;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

.nav-tabs {
  display: flex;
  gap: 0.5rem;
  list-style: none;
}

.nav-tab {
  padding: 0.75rem 1.5rem;
  background: linear-gradient(180deg, #6B5644 0%, #5A4837 100%);
  color: #F4E8C1;
  text-decoration: none;
  border-radius: 8px 8px 0 0;
  font-size: 0.95rem;
  font-weight: 500;
  transition: all 0.3s ease;
  box-shadow:
    0 2px 4px rgba(0, 0, 0, 0.3),
    inset 0 1px 0 rgba(255, 255, 255, 0.15);
  border: 2px solid rgba(0, 0, 0, 0.3);
  position: relative;
}

.nav-tab:hover {
  background: linear-gradient(180deg, #7A6552 0%, #695545 100%);
  transform: translateY(-2px);
  box-shadow:
    0 4px 8px rgba(0, 0, 0, 0.4),
    inset 0 1px 0 rgba(255, 255, 255, 0.2);
}

.nav-tab.active {
  background: linear-gradient(180deg, #8B6F47 0%, #7A6040 100%);
  color: #FFF;
  box-shadow:
    0 4px 12px rgba(0, 0, 0, 0.5),
    inset 0 2px 4px rgba(255, 255, 255, 0.2);
}

/* ========== Hero Section ========== */
.hero-journal {
  padding: 6rem 2rem;
  background: linear-gradient(135deg, rgba(139, 111, 71, 0.7) 0%, rgba(93, 78, 55, 0.9) 100%);
  position: relative;
  text-align: center;
  overflow: hidden;
}

.hero-journal::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="400" height="400"><path d="M50,50 L350,50 M50,150 L350,150 M50,250 L350,250 M50,350 L350,350 M50,50 L50,350 M150,50 L150,350 M250,50 L250,350 M350,50 L350,350" stroke="rgba(74,60,47,0.2)" stroke-width="1" fill="none"/></svg>');
  opacity: 0.3;
}

.hero-content {
  max-width: 800px;
  margin: 0 auto;
  position: relative;
  z-index: 10;
}

.hero-title {
  font-family: 'Caveat', cursive;
  font-size: 4rem;
  color: #F4E8C1;
  margin-bottom: 1rem;
  text-shadow:
    3px 3px 6px rgba(0, 0, 0, 0.6),
    0 0 20px rgba(244, 232, 193, 0.3);
  line-height: 1.2;
}

.hero-subtitle {
  font-size: 1.3rem;
  color: #E8D4B0;
  margin-bottom: 2.5rem;
  font-weight: 300;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

.hero-buttons {
  display: flex;
  gap: 1.5rem;
  justify-content: center;
}

.btn-leather {
  padding: 1rem 2.5rem;
  font-size: 1.1rem;
  font-weight: 600;
  text-decoration: none;
  border-radius: 8px;
  transition: all 0.3s cubic-bezier(0.4, 0.0, 0.2, 1);
  border: 3px solid rgba(0, 0, 0, 0.4);
  cursor: pointer;
  position: relative;
  overflow: hidden;
}

.btn-leather.primary {
  background: linear-gradient(180deg, #B8860B 0%, #8B6914 100%);
  color: #FFF;
  box-shadow:
    0 6px 16px rgba(0, 0, 0, 0.4),
    inset 0 2px 4px rgba(255, 255, 255, 0.3);
}

.btn-leather.primary:hover {
  background: linear-gradient(180deg, #D4A825 0%, #9A7517 100%);
  transform: translateY(-3px);
  box-shadow:
    0 8px 20px rgba(0, 0, 0, 0.5),
    inset 0 2px 6px rgba(255, 255, 255, 0.4);
}

.btn-leather.primary:active {
  transform: translateY(-1px);
  box-shadow:
    0 4px 12px rgba(0, 0, 0, 0.4),
    inset 0 2px 4px rgba(0, 0, 0, 0.2);
}

.btn-leather.secondary {
  background: linear-gradient(180deg, #6B5644 0%, #5A4837 100%);
  color: #F4E8C1;
  box-shadow:
    0 6px 16px rgba(0, 0, 0, 0.3),
    inset 0 2px 4px rgba(255, 255, 255, 0.2);
}

.btn-leather.secondary:hover {
  background: linear-gradient(180deg, #7A6552 0%, #695545 100%);
  transform: translateY(-3px);
}

.btn-leather.large {
  padding: 1.25rem 3rem;
  font-size: 1.3rem;
}

/* Travel Stamps Decoration */
.travel-stamp {
  position: absolute;
  width: 140px;
  height: 140px;
  transform: rotate(-12deg);
}

.stamp-top-left {
  top: 20px;
  left: 10%;
}

.stamp-bottom-right {
  bottom: 20px;
  right: 10%;
  transform: rotate(8deg);
}

.stamp-inner {
  width: 100%;
  height: 100%;
  background: rgba(220, 20, 60, 0.15);
  border: 4px dashed rgba(220, 20, 60, 0.6);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
}

.stamp-icon {
  font-size: 3rem;
}

.stamp-text {
  font-family: 'Caveat', cursive;
  font-size: 1.2rem;
  color: #DC143C;
  font-weight: 700;
  text-transform: uppercase;
}

/* ========== Features Section - Stamp Cards ========== */
.features-section {
  padding: 6rem 2rem;
  background: rgba(244, 232, 193, 0.3);
  position: relative;
}

.section-title {
  font-family: 'Caveat', cursive;
  font-size: 3rem;
  text-align: center;
  color: #2C2416;
  margin-bottom: 3rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
}

.stamp-cards-grid {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 3rem;
  padding: 0 1rem;
}

.stamp-card {
  background: #F4E8C1;
  border-radius: 8px;
  position: relative;
  padding: 2rem;
  box-shadow:
    0 8px 20px rgba(0, 0, 0, 0.25),
    inset 0 1px 0 rgba(255, 255, 255, 0.5);
  transition: all 0.3s cubic-bezier(0.4, 0.0, 0.2, 1);
  overflow: visible;
}

/* Postage Stamp Perforation Effect */
.stamp-perforation {
  position: absolute;
  top: -8px;
  left: -8px;
  right: -8px;
  bottom: -8px;
  background: repeating-linear-gradient(
    0deg,
    transparent 0px,
    transparent 12px,
    rgba(0,0,0,0.15) 12px,
    rgba(0,0,0,0.15) 14px
  ),
  repeating-linear-gradient(
    90deg,
    transparent 0px,
    transparent 12px,
    rgba(0,0,0,0.15) 12px,
    rgba(0,0,0,0.15) 14px
  );
  pointer-events: none;
  border-radius: 8px;
}

.stamp-card:hover {
  transform: translateY(-8px) rotate(2deg);
  box-shadow:
    0 12px 28px rgba(0, 0, 0, 0.35),
    inset 0 2px 0 rgba(255, 255, 255, 0.6);
}

.stamp-content {
  position: relative;
  z-index: 10;
}

.stamp-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
  padding-bottom: 1rem;
  border-bottom: 2px dashed rgba(44, 36, 22, 0.2);
}

.stamp-value {
  font-family: 'Caveat', cursive;
  font-size: 2rem;
  font-weight: 700;
  color: #DC143C;
}

.stamp-country {
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 1px;
  color: #5D4E37;
}

.stamp-image-placeholder {
  width: 100%;
  height: 180px;
  background: linear-gradient(135deg, rgba(139, 111, 71, 0.1) 0%, rgba(93, 78, 55, 0.2) 100%);
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  border: 2px solid rgba(93, 78, 55, 0.2);
}

.card-icon {
  font-size: 4rem;
}

.stamp-title {
  font-family: 'Merriweather', serif;
  font-size: 1.5rem;
  color: #2C2416;
  margin-bottom: 1rem;
  font-weight: 700;
}

.stamp-description {
  font-size: 1rem;
  color: #4A3C2F;
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.stamp-link {
  color: #DC143C;
  font-weight: 600;
  text-decoration: none;
  font-size: 1.1rem;
  display: inline-block;
  transition: all 0.3s ease;
}

.stamp-link:hover {
  color: #B8860B;
  transform: translateX(5px);
}

/* Postmark Decoration */
.postmark {
  position: absolute;
  top: 15px;
  right: 15px;
  width: 80px;
  height: 80px;
  color: rgba(220, 20, 60, 0.4);
  transform: rotate(12deg);
}

.postmark-circle {
  width: 100%;
  height: 100%;
}

/* ========== Photo Gallery - Polaroid ========== */
.gallery-section {
  padding: 6rem 2rem;
  background: linear-gradient(135deg, rgba(139, 111, 71, 0.5) 0%, rgba(93, 78, 55, 0.7) 100%);
}

.polaroid-grid {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 3rem;
  padding: 2rem 1rem;
}

.polaroid {
  position: relative;
  transition: all 0.4s cubic-bezier(0.4, 0.0, 0.2, 1);
}

.polaroid:hover {
  transform: scale(1.05) rotate(-3deg);
}

.polaroid-frame {
  background: #FFF;
  padding: 1rem;
  padding-bottom: 3rem;
  box-shadow:
    0 8px 24px rgba(0, 0, 0, 0.4),
    inset 0 0 0 1px rgba(0, 0, 0, 0.1);
  transform: rotate(2deg);
  transition: all 0.4s ease;
}

.polaroid:nth-child(even) .polaroid-frame {
  transform: rotate(-2deg);
}

.polaroid:hover .polaroid-frame {
  transform: rotate(0deg);
  box-shadow:
    0 12px 32px rgba(0, 0, 0, 0.5),
    inset 0 0 0 1px rgba(0, 0, 0, 0.15);
}

.photo-placeholder {
  width: 100%;
  height: 250px;
  background: linear-gradient(135deg, #E8D4B0 0%, #D4C19E 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
}

.photo-emoji {
  font-size: 5rem;
}

.polaroid-caption {
  font-family: 'Caveat', cursive;
  font-size: 1.3rem;
  color: #2C2416;
  text-align: center;
  font-weight: 600;
}

/* Tape Strip Decoration */
.tape-strip {
  position: absolute;
  width: 100px;
  height: 30px;
  background: rgba(255, 255, 255, 0.4);
  box-shadow:
    0 2px 8px rgba(0, 0, 0, 0.2),
    inset 0 0 0 1px rgba(0, 0, 0, 0.05);
  transform: rotate(-45deg);
}

.tape-top-left {
  top: -10px;
  left: -20px;
}

.tape-top-right {
  top: -10px;
  right: -20px;
  transform: rotate(45deg);
}

/* ========== Testimonials - Journal Pages ========== */
.testimonials-section {
  padding: 6rem 2rem;
  background: rgba(244, 232, 193, 0.2);
}

.journal-pages {
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 3rem;
  padding: 2rem 1rem;
}

.journal-page {
  background: #F4E8C1;
  padding: 2.5rem;
  border-radius: 4px;
  box-shadow:
    0 6px 20px rgba(0, 0, 0, 0.25),
    inset 0 0 0 1px rgba(0, 0, 0, 0.1);
  position: relative;
  border-left: 4px solid rgba(220, 20, 60, 0.3);
  transition: all 0.3s ease;
}

.journal-page:hover {
  transform: translateY(-5px);
  box-shadow:
    0 10px 28px rgba(0, 0, 0, 0.3),
    inset 0 0 0 1px rgba(0, 0, 0, 0.15);
}

.page-edge {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: 30px;
  background: repeating-linear-gradient(
    0deg,
    transparent 0px,
    transparent 20px,
    rgba(220, 20, 60, 0.15) 20px,
    rgba(220, 20, 60, 0.15) 22px
  );
}

.handwritten-quote {
  font-family: 'Caveat', cursive;
  font-size: 1.5rem;
  color: #2C2416;
  line-height: 1.8;
  margin-bottom: 2rem;
  font-weight: 500;
}

.author-signature {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-left: 2rem;
}

.signature-line {
  font-family: 'Dancing Script', cursive;
  font-size: 1.3rem;
  color: #5D4E37;
  font-weight: 600;
}

.author-location {
  font-size: 0.9rem;
  color: #7A6552;
  font-style: italic;
}

.page-decoration {
  position: absolute;
  bottom: 20px;
  right: 30px;
  font-size: 2rem;
  color: rgba(220, 20, 60, 0.3);
}

/* ========== CTA Section ========== */
.cta-section {
  padding: 6rem 2rem;
  background: linear-gradient(135deg, rgba(74, 60, 47, 0.9) 0%, rgba(58, 47, 36, 0.95) 100%);
  text-align: center;
}

.leather-panel {
  max-width: 800px;
  margin: 0 auto;
  padding: 4rem 3rem;
  background: linear-gradient(180deg, #6B5644 0%, #5A4837 100%);
  border-radius: 12px;
  box-shadow:
    0 12px 32px rgba(0, 0, 0, 0.5),
    inset 0 2px 8px rgba(255, 255, 255, 0.15);
  border: 3px solid rgba(0, 0, 0, 0.4);
}

.cta-title {
  font-family: 'Caveat', cursive;
  font-size: 3rem;
  color: #F4E8C1;
  margin-bottom: 1.5rem;
  text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.5);
}

.cta-text {
  font-size: 1.2rem;
  color: #E8D4B0;
  margin-bottom: 2.5rem;
  line-height: 1.6;
}

.travel-badges {
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-top: 3rem;
  flex-wrap: wrap;
}

.badge-item {
  font-size: 1.1rem;
  color: #F4E8C1;
  font-weight: 600;
  padding: 0.75rem 1.5rem;
  background: rgba(184, 134, 11, 0.2);
  border-radius: 20px;
  border: 2px solid rgba(184, 134, 11, 0.4);
}

/* ========== Responsive Design ========== */
@media (max-width: 768px) {
  .nav-tabs {
    display: none;
  }

  .hero-title {
    font-size: 2.5rem;
  }

  .hero-subtitle {
    font-size: 1.1rem;
  }

  .hero-buttons {
    flex-direction: column;
  }

  .stamp-cards-grid,
  .polaroid-grid,
  .journal-pages {
    grid-template-columns: 1fr;
  }

  .travel-stamp {
    display: none;
  }
}
`;
