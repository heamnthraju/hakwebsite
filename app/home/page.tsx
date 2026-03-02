

'use client';
import { useState, useEffect } from 'react';

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700;800&family=Inter:wght@300;400;500;600;700&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        :root {
          --bg:            #eae4f7;
          --nav-bg:        rgba(42,28,80,0.82);
          --nav-scroll:    rgba(30,18,60,0.97);
          --nav-border:    rgba(249,115,22,0.22);
          --card:          rgba(255,255,255,0.82);
          --card-hover:    rgba(255,255,255,0.97);
          --card-border:   rgba(255,255,255,0.95);
          --projects-bg:   #e8f4f0;
          --footer-bg:     #1e1b4b;
          --footer-bottom: #171440;
          --btn-from:      #0891b2;
          --btn-to:        #0e7490;
          --btn-shadow:    rgba(8,145,178,0.32);
          --bar-from:      #f43f5e;
          --bar-to:        #fb7185;
          --blob1:         #fbbf24;
          --blob2:         #34d399;
          --text:          #1e0a3c;
          --text2:         #3b1f6e;
          --muted:         rgba(59,31,110,0.58);
        }

        html { scroll-behavior: smooth; }

        body {
          font-family: 'Inter', sans-serif;
          background: var(--bg);
          color: var(--text);
          overflow-x: hidden;
        }

        /* ══════════════════════════════
           NAV — deep dark purple
        ══════════════════════════════ */
        nav {
          position: fixed; top: 0; left: 0; right: 0; z-index: 100;
          padding: 0 5%;
          display: flex; align-items: center; justify-content: space-between;
          height: 70px;
          transition: all 0.35s ease;
          background: ${scrolled
            ? 'rgba(30,18,60,0.97)'
            : 'rgba(42,28,80,0.85)'};
          backdrop-filter: blur(24px);
          border-bottom: 1px solid ${scrolled
            ? 'rgba(249,115,22,0.28)'
            : 'rgba(255,255,255,0.12)'};
          box-shadow: ${scrolled
            ? '0 6px 32px rgba(20,10,50,0.38)'
            : '0 2px 20px rgba(20,10,50,0.22)'};
        }

        .nav-logo {
          font-family: 'Playfair Display', serif;
          font-size: 1.55rem; font-weight: 800;
          color: #ffffff; text-decoration: none;
          letter-spacing: 0.3px;
        }

        .nav-logo span {
          background: linear-gradient(135deg, #f97316 0%, #ef4444 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .nav-links { display: flex; gap: 2rem; list-style: none; }

        .nav-links a {
          color: rgba(255,255,255,0.75); text-decoration: none;
          font-size: 0.875rem; font-weight: 500;
          transition: color 0.2s; letter-spacing: 0.3px;
          font-family: 'Inter', sans-serif;
        }

        .nav-links a:hover { color: #ffffff; }

        .nav-cta {
          background: linear-gradient(135deg, #0891b2, #0e7490) !important;
          color: #fff !important;
          padding: 0.48rem 1.35rem; border-radius: 7px;
          font-weight: 600 !important;
          box-shadow: 0 4px 16px rgba(8,145,178,0.38);
          transition: all 0.2s !important;
          letter-spacing: 0.2px;
        }

        .nav-cta:hover {
          box-shadow: 0 7px 24px rgba(8,145,178,0.52) !important;
          transform: translateY(-1px);
          color: #fff !important;
        }

        .hamburger {
          display: none; flex-direction: column; gap: 5px;
          cursor: pointer; background: none; border: none;
        }

        .hamburger span {
          display: block; width: 24px; height: 2px;
          background: #ffffff; transition: all 0.3s;
        }

        /* ══════════════════════════════
           HERO
        ══════════════════════════════ */
        .hero {
          min-height: 100vh;
          padding: 130px 5% 80px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          align-items: center;
          gap: 4rem;
          position: relative;
          overflow: hidden;
        }

        .hero::before {
          content: '';
          position: absolute; inset: 0;
          background:
            radial-gradient(ellipse 55% 55% at 85% 35%, rgba(251,191,36,0.09) 0%, transparent 65%),
            radial-gradient(ellipse 40% 45% at 5% 75%, rgba(52,211,153,0.08) 0%, transparent 60%);
          pointer-events: none;
        }

        .blob {
          position: absolute; border-radius: 50%;
          filter: blur(70px); pointer-events: none;
        }

        .blob-1 {
          width: 320px; height: 320px;
          background: #fbbf24; opacity: 0.25;
          top: -80px; right: 8%;
          animation: floatA 8s ease-in-out infinite;
        }

        .blob-2 {
          width: 240px; height: 240px;
          background: #34d399; opacity: 0.20;
          bottom: 8%; left: 2%;
          animation: floatB 10s ease-in-out infinite;
        }

        @keyframes floatA {
          0%,100% { transform: translateY(0px) scale(1); }
          50%      { transform: translateY(28px) scale(1.04); }
        }
        @keyframes floatB {
          0%,100% { transform: translateY(0px) scale(1); }
          50%      { transform: translateY(-22px) scale(1.03); }
        }

        .hero-badge {
          display: inline-flex; align-items: center; gap: 8px;
          background: rgba(255,255,255,0.80);
          border: 1.5px solid rgba(8,145,178,0.22);
          color: #0891b2;
          padding: 6px 16px; border-radius: 100px;
          font-size: 0.72rem; font-weight: 700; letter-spacing: 1px;
          margin-bottom: 1.4rem;
          text-transform: uppercase;
          box-shadow: 0 2px 14px rgba(8,145,178,0.10);
          font-family: 'Inter', sans-serif;
        }

        .hero-badge::before {
          content: ''; width: 7px; height: 7px;
          background: #f97316; border-radius: 50%;
          animation: pulse 2s infinite;
        }

        @keyframes pulse {
          0%,100% { opacity:1; transform:scale(1); }
          50%      { opacity:0.35; transform:scale(0.75); }
        }

        .hero h1 {
          font-family: 'Playfair Display', serif;
          font-size: clamp(2.8rem, 5vw, 4.4rem);
          font-weight: 800; line-height: 1.10;
          letter-spacing: -0.5px; margin-bottom: 1.4rem;
          color: var(--text);
        }

        .hero h1 .highlight {
          background: linear-gradient(135deg, #f97316 0%, #ef4444 60%, #ec4899 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .hero p {
          color: var(--muted); font-size: 1.02rem;
          line-height: 1.80; max-width: 470px;
          margin-bottom: 2.4rem; font-weight: 400;
          font-family: 'Inter', sans-serif;
        }

        .hero-btns { display: flex; gap: 1rem; flex-wrap: wrap; }

        .btn-primary {
          background: linear-gradient(135deg, #0891b2, #0e7490);
          color: #fff;
          padding: 0.84rem 2rem; border-radius: 8px;
          font-weight: 600; font-size: 0.92rem;
          text-decoration: none; border: none; cursor: pointer;
          transition: all 0.25s;
          font-family: 'Inter', sans-serif;
          box-shadow: 0 6px 22px rgba(8,145,178,0.32);
          letter-spacing: 0.2px;
        }

        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 32px rgba(8,145,178,0.46);
        }

        .btn-outline {
          background: rgba(255,255,255,0.75);
          color: var(--text);
          padding: 0.84rem 2rem; border-radius: 8px;
          font-weight: 600; font-size: 0.92rem;
          text-decoration: none;
          border: 1.5px solid rgba(8,145,178,0.28);
          cursor: pointer; transition: all 0.25s;
          font-family: 'Inter', sans-serif;
          backdrop-filter: blur(8px);
          letter-spacing: 0.2px;
        }

        .btn-outline:hover {
          background: rgba(255,255,255,0.95);
          border-color: rgba(8,145,178,0.50);
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(8,145,178,0.14);
        }

        /* ── HERO CARD ── */
        .hero-visual {
          display: flex; align-items: center; justify-content: center;
        }

        .hero-card {
          background: rgba(255,255,255,0.88);
          border: 1.5px solid rgba(255,255,255,0.98);
          border-radius: 24px; padding: 2rem;
          width: 100%; max-width: 410px;
          box-shadow:
            0 32px 72px rgba(8,145,178,0.12),
            0 2px 0 rgba(255,255,255,0.90) inset;
          position: relative;
          backdrop-filter: blur(24px);
        }

        .hero-card::before {
          content: '';
          position: absolute; top: -1.5px; left: 44px; right: 44px; height: 2px;
          background: linear-gradient(90deg, transparent, #f97316, #ef4444, transparent);
          border-radius: 100px;
        }

        .card-stat {
          display: flex; justify-content: space-between;
          margin-bottom: 1.6rem;
          background: linear-gradient(135deg, rgba(8,145,178,0.06), rgba(14,116,144,0.04));
          border-radius: 14px; padding: 1rem 1.2rem;
          border: 1px solid rgba(8,145,178,0.12);
        }

        .stat-item { text-align: center; }

        .stat-num {
          font-family: 'Playfair Display', serif;
          font-size: 1.9rem; font-weight: 800;
          background: linear-gradient(135deg, #7c3aed, #a855f7);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .stat-label {
          font-size: 0.68rem; color: var(--muted);
          text-transform: uppercase; letter-spacing: 0.8px;
          font-weight: 600; margin-top: 3px;
          font-family: 'Inter', sans-serif;
        }

        .card-bar { margin-bottom: 0.88rem; }

        .bar-label {
          display: flex; justify-content: space-between;
          font-size: 0.78rem; color: var(--text2);
          margin-bottom: 7px; font-weight: 600;
          font-family: 'Inter', sans-serif;
        }

        .bar-track {
          background: rgba(244,63,94,0.10);
          border-radius: 100px; height: 7px; overflow: hidden;
        }

        .bar-fill {
          height: 100%; border-radius: 100px;
          background: linear-gradient(90deg, #f43f5e, #fb7185, #fda4af);
          animation: fillBar 1.5s ease forwards;
        }

        @keyframes fillBar { from { width: 0; } }

        /* ══════════════════════════════
           SECTIONS
        ══════════════════════════════ */
        .section { padding: 100px 5%; }

        .section-label {
          display: inline-block;
          font-size: 0.70rem; font-weight: 700;
          text-transform: uppercase; letter-spacing: 2.5px;
          color: #4f46e5;
          background: rgba(79,70,229,0.09);
          border: 1px solid rgba(79,70,229,0.20);
          padding: 4px 14px; border-radius: 100px;
          margin-bottom: 0.9rem;
          font-family: 'Inter', sans-serif;
        }

        .section-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(2rem, 4vw, 3rem);
          font-weight: 800; letter-spacing: 0px;
          line-height: 1.15; margin-bottom: 1.4rem;
          color: var(--text);
        }

        /* ── ABOUT ── */
        .about-grid {
          display: grid; grid-template-columns: 1fr 1fr;
          gap: 5rem; align-items: center;
        }

        .about-text p {
          color: var(--muted); line-height: 1.88;
          margin-bottom: 1.2rem; font-size: 0.98rem;
          font-family: 'Inter', sans-serif;
        }

        .services-grid {
          display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;
        }

        .service-card {
          background: rgba(255,255,255,0.82);
          border: 1.5px solid rgba(255,255,255,0.96);
          border-radius: 18px; padding: 1.5rem;
          transition: all 0.30s ease; cursor: default;
          backdrop-filter: blur(14px);
          box-shadow: 0 3px 16px rgba(8,145,178,0.07);
        }

        .service-card:hover {
          border-color: rgba(8,145,178,0.30);
          transform: translateY(-5px);
          box-shadow: 0 20px 42px rgba(8,145,178,0.14);
          background: rgba(255,255,255,0.97);
        }

        .service-icon {
          width: 46px; height: 46px; border-radius: 12px;
          background: linear-gradient(135deg,
            rgba(8,145,178,0.12), rgba(14,116,144,0.18));
          border: 1px solid rgba(8,145,178,0.18);
          display: flex; align-items: center; justify-content: center;
          font-size: 1.4rem; margin-bottom: 1rem;
        }

        .service-card h3 {
          font-family: 'Playfair Display', serif;
          font-size: 1.02rem; font-weight: 700;
          margin-bottom: 0.5rem; color: var(--text);
        }

        .service-card p {
          color: var(--muted); font-size: 0.84rem;
          line-height: 1.68; font-family: 'Inter', sans-serif;
        }

        /* ── PROJECTS ── */
        .projects-bg { background: #e8f4f0; }

        .projects-header { text-align: center; margin-bottom: 3rem; }

        .projects-grid {
          display: grid; grid-template-columns: repeat(3,1fr); gap: 1.5rem;
        }

        .project-card {
          background: rgba(255,255,255,0.86);
          border: 1.5px solid rgba(255,255,255,0.96);
          border-radius: 18px; overflow: hidden;
          transition: all 0.30s ease; cursor: pointer;
          backdrop-filter: blur(14px);
          box-shadow: 0 3px 14px rgba(8,145,178,0.07);
        }

        .project-card:hover {
          transform: translateY(-7px);
          border-color: rgba(249,115,22,0.30);
          box-shadow: 0 28px 56px rgba(249,115,22,0.14);
          background: rgba(255,255,255,0.98);
        }

        .project-img {
          height: 176px;
          display: flex; align-items: center; justify-content: center;
          font-size: 3rem; position: relative; overflow: hidden;
        }

        .project-img-1 { background: linear-gradient(135deg,#fef3c7,#fde68a); }
        .project-img-2 { background: linear-gradient(135deg,#d1fae5,#a7f3d0); }
        .project-img-3 { background: linear-gradient(135deg,#fee2e2,#fecaca); }
        .project-img-4 { background: linear-gradient(135deg,#dbeafe,#bfdbfe); }
        .project-img-5 { background: linear-gradient(135deg,#fce7f3,#fbcfe8); }
        .project-img-6 { background: linear-gradient(135deg,#e0f2fe,#bae6fd); }

        .project-info { padding: 1.3rem; }

        .project-tag {
          display: inline-block;
          font-size: 0.68rem; font-weight: 700;
          text-transform: uppercase; letter-spacing: 1.2px;
          color: #0891b2;
          background: rgba(8,145,178,0.09);
          border: 1px solid rgba(8,145,178,0.20);
          padding: 3px 10px; border-radius: 100px;
          margin-bottom: 0.6rem;
          font-family: 'Inter', sans-serif;
        }

        .project-info h3 {
          font-family: 'Playfair Display', serif;
          font-size: 1.02rem; font-weight: 700;
          margin-bottom: 0.4rem; color: var(--text);
        }

        .project-info p {
          color: var(--muted); font-size: 0.82rem;
          line-height: 1.58; font-family: 'Inter', sans-serif;
        }

        /* ── TECH ── */
        .tech-section { text-align: center; }

        .tech-grid {
          display: flex; flex-wrap: wrap;
          justify-content: center; gap: 0.9rem; margin-top: 2.5rem;
        }

        .tech-pill {
          display: flex; align-items: center; gap: 8px;
          background: rgba(255,255,255,0.80);
          border: 1.5px solid rgba(255,255,255,0.96);
          border-radius: 100px; padding: 0.58rem 1.25rem;
          font-size: 0.83rem; font-weight: 500;
          transition: all 0.25s; cursor: default;
          color: var(--text2);
          backdrop-filter: blur(10px);
          box-shadow: 0 2px 10px rgba(8,145,178,0.06);
          font-family: 'Inter', sans-serif;
          letter-spacing: 0.2px;
        }

        .tech-pill:hover {
          border-color: rgba(249,115,22,0.40);
          background: rgba(255,255,255,0.98);
          color: #f97316;
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(249,115,22,0.14);
        }

        .tech-pill span { font-size: 1.1rem; }

        /* ── FOOTER ── */
        footer {
          border-top: 2px solid rgba(249,115,22,0.25);
          padding: 3.5rem 5%;
          display: grid; grid-template-columns: 2fr 1fr 1fr 1fr;
          gap: 3rem;
          background: #1e1b4b;
        }

        .footer-brand p {
          color: rgba(255,255,255,0.58); font-size: 0.90rem;
          line-height: 1.80; margin-top: 1rem; max-width: 260px;
          font-family: 'Inter', sans-serif;
        }

        .footer-col h4 {
          font-family: 'Inter', sans-serif;
          font-size: 0.75rem; font-weight: 700;
          text-transform: uppercase; letter-spacing: 1.8px;
          margin-bottom: 1rem; color: #ffffff;
        }

        .footer-col ul { list-style: none; }
        .footer-col ul li { margin-bottom: 0.65rem; }

        .footer-col ul a {
          color: rgba(255,255,255,0.56); text-decoration: none;
          font-size: 0.88rem; transition: color 0.2s; font-weight: 400;
          font-family: 'Inter', sans-serif;
        }

        .footer-col ul a:hover { color: #f97316; }

        .footer-bottom {
          border-top: 1px solid rgba(249,115,22,0.18);
          padding: 1.5rem 5%;
          display: flex; justify-content: space-between; align-items: center;
          color: rgba(255,255,255,0.42); font-size: 0.80rem;
          background: #171440; font-weight: 400;
          font-family: 'Inter', sans-serif;
        }

        .newsletter-input {
          width: 100%; padding: 0.65rem 1rem;
          background: rgba(255,255,255,0.10);
          border: 1.5px solid rgba(255,255,255,0.16);
          border-radius: 8px;
          color: #ffffff;
          font-size: 0.85rem; outline: none;
          margin-bottom: 0.6rem;
          font-family: 'Inter', sans-serif;
          font-weight: 400;
          transition: border-color 0.2s, background 0.2s;
        }

        .newsletter-input::placeholder { color: rgba(255,255,255,0.35); }
        .newsletter-input:focus {
          border-color: rgba(249,115,22,0.50);
          background: rgba(255,255,255,0.16);
        }

        /* ── RESPONSIVE ── */
        @media (max-width: 900px) {
          .hero { grid-template-columns: 1fr; text-align: center; padding-top: 100px; }
          .hero p { margin: 0 auto 2rem; }
          .hero-btns { justify-content: center; }
          .hero-visual { display: none; }
          .blob-1, .blob-2 { display: none; }
          .about-grid { grid-template-columns: 1fr; gap: 2rem; }
          .projects-grid { grid-template-columns: 1fr 1fr; }
          footer { grid-template-columns: 1fr 1fr; gap: 2rem; }
          .nav-links { display: none; }
          .hamburger { display: flex; }
        }

        @media (max-width: 600px) {
          .projects-grid { grid-template-columns: 1fr; }
          .services-grid { grid-template-columns: 1fr; }
          footer { grid-template-columns: 1fr; }
          .footer-bottom { flex-direction: column; gap: 0.5rem; text-align: center; }
        }
      `}</style>

      <div className="blob blob-1"></div>
      <div className="blob blob-2"></div>

      {/* ── NAV ── */}
      <nav>
        <a href="#" className="nav-logo">HAK <span>Projects</span></a>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact" className="nav-cta">Contact</a></li>
        </ul>
        <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
          <span></span><span></span><span></span>
        </button>
      </nav>

      {/* ── HERO ── */}
      <section className="hero" id="home">
        <div className="hero-content">
          <div className="hero-badge">🚀 Innovative IT Solutions</div>
          <h1>
            Powerful Digital<br />
            Solutions for<br />
            <span className="highlight">Your Business</span>
          </h1>
          <p>
            HAK Projects delivers high-quality, cutting-edge web development,
            mobile apps, and cloud solutions to help your business grow and
            thrive in the digital era.
          </p>
          <div className="hero-btns">
            <a href="#projects" className="btn-primary">View Our Projects</a>
            <a href="#contact" className="btn-outline">Get In Touch</a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-card">
            <div className="card-stat">
              <div className="stat-item">
                <div className="stat-num">50+</div>
                <div className="stat-label">Projects Done</div>
              </div>
              <div className="stat-item">
                <div className="stat-num">30+</div>
                <div className="stat-label">Happy Clients</div>
              </div>
              <div className="stat-item">
                <div className="stat-num">5+</div>
                <div className="stat-label">Years Exp.</div>
              </div>
            </div>
            <div className="card-bar">
              <div className="bar-label"><span>Web Development</span><span>95%</span></div>
              <div className="bar-track"><div className="bar-fill" style={{width:'95%'}}></div></div>
            </div>
            <div className="card-bar">
              <div className="bar-label"><span>Mobile Apps</span><span>88%</span></div>
              <div className="bar-track"><div className="bar-fill" style={{width:'88%'}}></div></div>
            </div>
            <div className="card-bar">
              <div className="bar-label"><span>Cloud Solutions</span><span>80%</span></div>
              <div className="bar-track"><div className="bar-fill" style={{width:'80%'}}></div></div>
            </div>
            <div className="card-bar">
              <div className="bar-label"><span>UI/UX Design</span><span>92%</span></div>
              <div className="bar-track"><div className="bar-fill" style={{width:'92%'}}></div></div>
            </div>
          </div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section className="section" id="about">
        <div className="about-grid">
          <div className="about-text">
            <span className="section-label">About Us</span>
            <h2 className="section-title">We Build Digital Experiences That Matter</h2>
            <p>
              At HAK Projects, we are passionate about delivering innovative IT solutions
              that transform businesses. Our team of skilled developers, designers, and
              strategists work together to create products that truly make a difference.
            </p>
            <p>
              We are a software development team with proven expertise in web development,
              ERP, CRM, mobile applications, digital marketing, and training. We have been
              serving financial institutions and companies of all sizes since our founding.
            </p>
            <a href="#contact" className="btn-primary" style={{display:'inline-block', marginTop:'1rem'}}>
              Work With Us
            </a>
          </div>

          <div className="services-grid" id="services">
            {[
              { icon:'🌐', title:'Web Development',  desc:'We design and develop fast, responsive, and SEO-friendly websites tailored to your business needs.' },
              { icon:'📱', title:'Mobile App Dev',   desc:'We build feature-rich, high-performance mobile apps to keep your business connected anytime, anywhere.' },
              { icon:'🗄️', title:'ERP Solutions',    desc:'Our custom ERP solutions streamline operations, enhance productivity, and drive business growth.' },
              { icon:'☁️', title:'AWS Cloud',        desc:'We leverage AWS cloud infrastructure to deliver secure, scalable, and reliable cloud solutions.' },
            ].map((s,i) => (
              <div className="service-card" key={i}>
                <div className="service-icon">{s.icon}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROJECTS ── */}
      <section className="section projects-bg" id="projects">
        <div className="projects-header">
          <span className="section-label">Our Work</span>
          <h2 className="section-title">Projects We're Proud Of</h2>
        </div>
        <div className="projects-grid">
          {[
            { img:'project-img-1', icon:'🛒', tag:'E-Commerce',  title:'HAK Shop Platform',  desc:'Full-featured online store with inventory management and payment gateway.' },
            { img:'project-img-2', icon:'📊', tag:'ERP System',   title:'HAK ERP Dashboard',  desc:'Comprehensive ERP system for manpower, attendance, and payroll management.' },
            { img:'project-img-3', icon:'🏦', tag:'FinTech',      title:'Invoice Pro',         desc:'Automated invoicing system with GST compliance for financial businesses.' },
            { img:'project-img-4', icon:'📱', tag:'Mobile App',   title:'HAK Connect App',    desc:'Cross-platform mobile app keeping businesses connected in real time.' },
            { img:'project-img-5', icon:'🎨', tag:'UI/UX',        title:'Brand Identity Kit', desc:'Complete brand identity and design system for a growing startup.' },
            { img:'project-img-6', icon:'☁️', tag:'Cloud',        title:'AWS Migration',      desc:'Seamless cloud migration delivering 60% cost reduction for the client.' },
          ].map((p,i) => (
            <div className="project-card" key={i}>
              <div className={`project-img ${p.img}`}>
                <span style={{fontSize:'3rem'}}>{p.icon}</span>
              </div>
              <div className="project-info">
                <span className="project-tag">{p.tag}</span>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── TECH STACK ── */}
      <section className="section tech-section">
        <span className="section-label">Tech Stack</span>
        <h2 className="section-title">Tools & Technologies We Use</h2>
        <div className="tech-grid">
          {[
            { icon:'⚛️', name:'React' },
            { icon:'🔺', name:'Next.js' },
            { icon:'🟦', name:'TypeScript' },
            { icon:'🟩', name:'Node.js' },
            { icon:'🐘', name:'PHP / Laravel' },
            { icon:'🐬', name:'MySQL' },
            { icon:'🍃', name:'MongoDB' },
            { icon:'☁️', name:'AWS' },
            { icon:'🐳', name:'Docker' },
            { icon:'📱', name:'React Native' },
            { icon:'🎨', name:'Tailwind CSS' },
            { icon:'🐍', name:'Python' },
          ].map((t,i) => (
            <div className="tech-pill" key={i}>
              <span>{t.icon}</span> {t.name}
            </div>
          ))}
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer id="contact">
        <div className="footer-brand">
          <a href="#" className="nav-logo" style={{textDecoration:'none', fontFamily:"'Playfair Display', serif"}}>
            HAK{' '}
            <span style={{
              background:'linear-gradient(135deg,#f97316,#ef4444)',
              WebkitBackgroundClip:'text',
              WebkitTextFillColor:'transparent'
            }}>Projects</span>
          </a>
          <p>
            We provide cutting-edge IT solutions to help businesses grow
            and succeed in the digital world. Let's build something great together.
          </p>
        </div>

        <div className="footer-col">
          <h4>IT Solutions</h4>
          <ul>
            <li><a href="#">Web Development</a></li>
            <li><a href="#">ERP Dashboard</a></li>
            <li><a href="#">Mobile Apps</a></li>
            <li><a href="#">AWS Cloud</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact Us</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Newsletter</h4>
          <p style={{color:'rgba(255,255,255,0.52)', fontSize:'0.85rem', marginBottom:'1rem', fontFamily:"'Inter', sans-serif"}}>
            Subscribe to receive updates on new projects and innovations.
          </p>
          <input type="email" placeholder="Enter your email" className="newsletter-input" />
          <button className="btn-primary" style={{width:'100%', padding:'0.65rem'}}>
            Subscribe
          </button>
        </div>
      </footer>

      <div className="footer-bottom">
        <span>© 2025 HAK Projects. All rights reserved.</span>
        <span>Built with ❤️ using Next.js</span>
      </div>
    </>
  );
}