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
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:wght@300;400;500;600&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        :root {
          --black: #0a0a0f;
          --dark: #111118;
          --card: #16161f;
          --accent: #f97316;
          --accent2: #fb923c;
          --white: #f5f5f0;
          --muted: #8888a0;
          --border: rgba(255,255,255,0.08);
        }

        html { scroll-behavior: smooth; }

        body {
          font-family: 'DM Sans', sans-serif;
          background: var(--black);
          color: var(--white);
          overflow-x: hidden;
        }

        /* NAV */
        nav {
          position: fixed; top: 0; left: 0; right: 0; z-index: 100;
          padding: 0 5%;
          display: flex; align-items: center; justify-content: space-between;
          height: 70px;
          transition: all 0.3s ease;
          background: ${scrolled ? 'rgba(10,10,15,0.95)' : 'transparent'};
          backdrop-filter: ${scrolled ? 'blur(20px)' : 'none'};
          border-bottom: ${scrolled ? '1px solid var(--border)' : 'none'};
        }

        .nav-logo {
          font-family: 'Syne', sans-serif;
          font-size: 1.5rem; font-weight: 800;
          color: var(--white); text-decoration: none;
          letter-spacing: -0.5px;
        }

        .nav-logo span { color: var(--accent); }

        .nav-links {
          display: flex; gap: 2rem; list-style: none;
        }

        .nav-links a {
          color: var(--muted); text-decoration: none;
          font-size: 0.9rem; font-weight: 500;
          transition: color 0.2s;
          letter-spacing: 0.3px;
        }

        .nav-links a:hover { color: var(--white); }

        .nav-cta {
          background: var(--accent); color: var(--black) !important;
          padding: 0.5rem 1.2rem; border-radius: 6px;
          font-weight: 600 !important;
        }

        .nav-cta:hover { background: var(--accent2); color: var(--black) !important; }

        .hamburger {
          display: none; flex-direction: column; gap: 5px;
          cursor: pointer; background: none; border: none;
        }

        .hamburger span {
          display: block; width: 24px; height: 2px;
          background: var(--white); transition: all 0.3s;
        }

        /* HERO */
        .hero {
          min-height: 100vh;
          padding: 120px 5% 80px;
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
          background: radial-gradient(ellipse 60% 60% at 70% 50%, rgba(249,115,22,0.12) 0%, transparent 70%);
          pointer-events: none;
        }

        .hero-badge {
          display: inline-flex; align-items: center; gap: 8px;
          background: rgba(249,115,22,0.1); border: 1px solid rgba(249,115,22,0.3);
          color: var(--accent); padding: 6px 14px; border-radius: 100px;
          font-size: 0.8rem; font-weight: 600; letter-spacing: 0.5px;
          margin-bottom: 1.5rem;
          text-transform: uppercase;
        }

        .hero-badge::before {
          content: ''; width: 6px; height: 6px;
          background: var(--accent); border-radius: 50%;
          animation: pulse 2s infinite;
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }

        .hero h1 {
          font-family: 'Syne', sans-serif;
          font-size: clamp(2.8rem, 5vw, 4.5rem);
          font-weight: 800; line-height: 1.05;
          letter-spacing: -2px;
          margin-bottom: 1.5rem;
        }

        .hero h1 .highlight {
          color: var(--accent);
          position: relative;
        }

        .hero p {
          color: var(--muted); font-size: 1.05rem;
          line-height: 1.7; max-width: 480px;
          margin-bottom: 2.5rem;
        }

        .hero-btns {
          display: flex; gap: 1rem; flex-wrap: wrap;
        }

        .btn-primary {
          background: var(--accent); color: var(--black);
          padding: 0.85rem 2rem; border-radius: 8px;
          font-weight: 700; font-size: 0.95rem;
          text-decoration: none; border: none; cursor: pointer;
          transition: all 0.2s;
          font-family: 'DM Sans', sans-serif;
        }

        .btn-primary:hover {
          background: var(--accent2); transform: translateY(-2px);
          box-shadow: 0 8px 30px rgba(249,115,22,0.35);
        }

        .btn-outline {
          background: transparent; color: var(--white);
          padding: 0.85rem 2rem; border-radius: 8px;
          font-weight: 600; font-size: 0.95rem;
          text-decoration: none; border: 1px solid var(--border);
          cursor: pointer; transition: all 0.2s;
          font-family: 'DM Sans', sans-serif;
        }

        .btn-outline:hover {
          border-color: rgba(255,255,255,0.3);
          transform: translateY(-2px);
        }

        .hero-visual {
          display: flex; align-items: center; justify-content: center;
          position: relative;
        }

        .hero-card {
          background: var(--card); border: 1px solid var(--border);
          border-radius: 20px; padding: 2rem;
          width: 100%; max-width: 420px;
          box-shadow: 0 40px 80px rgba(0,0,0,0.5);
          position: relative;
        }

        .hero-card::before {
          content: '';
          position: absolute; top: -1px; left: 30px; right: 30px; height: 1px;
          background: linear-gradient(90deg, transparent, var(--accent), transparent);
        }

        .card-stat {
          display: flex; justify-content: space-between;
          margin-bottom: 1.5rem;
        }

        .stat-item { text-align: center; }

        .stat-num {
          font-family: 'Syne', sans-serif;
          font-size: 1.8rem; font-weight: 800;
          color: var(--accent);
        }

        .stat-label {
          font-size: 0.75rem; color: var(--muted);
          text-transform: uppercase; letter-spacing: 0.5px;
        }

        .card-bar { margin-bottom: 0.8rem; }

        .bar-label {
          display: flex; justify-content: space-between;
          font-size: 0.8rem; color: var(--muted); margin-bottom: 6px;
        }

        .bar-track {
          background: rgba(255,255,255,0.06); border-radius: 100px;
          height: 6px; overflow: hidden;
        }

        .bar-fill {
          height: 100%; border-radius: 100px;
          background: linear-gradient(90deg, var(--accent), var(--accent2));
          animation: fillBar 1.5s ease forwards;
        }

        @keyframes fillBar {
          from { width: 0; }
        }

        /* ABOUT */
        .section {
          padding: 100px 5%;
        }

        .section-label {
          display: inline-block;
          font-size: 0.75rem; font-weight: 700;
          text-transform: uppercase; letter-spacing: 2px;
          color: var(--accent); margin-bottom: 1rem;
        }

        .section-title {
          font-family: 'Syne', sans-serif;
          font-size: clamp(2rem, 4vw, 3rem);
          font-weight: 800; letter-spacing: -1px;
          line-height: 1.1; margin-bottom: 1.5rem;
        }

        .about-grid {
          display: grid; grid-template-columns: 1fr 1fr; gap: 5rem;
          align-items: center;
        }

        .about-text p {
          color: var(--muted); line-height: 1.8; margin-bottom: 1.2rem;
          font-size: 1rem;
        }

        .services-grid {
          display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;
        }

        .service-card {
          background: var(--card); border: 1px solid var(--border);
          border-radius: 14px; padding: 1.5rem;
          transition: all 0.3s ease;
          cursor: default;
        }

        .service-card:hover {
          border-color: rgba(249,115,22,0.3);
          transform: translateY(-4px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.3);
        }

        .service-icon {
          width: 44px; height: 44px; border-radius: 10px;
          background: rgba(249,115,22,0.15);
          display: flex; align-items: center; justify-content: center;
          font-size: 1.3rem; margin-bottom: 1rem;
        }

        .service-card h3 {
          font-family: 'Syne', sans-serif;
          font-size: 1rem; font-weight: 700;
          margin-bottom: 0.5rem;
        }

        .service-card p {
          color: var(--muted); font-size: 0.85rem; line-height: 1.6;
        }

        /* PROJECTS */
        .projects-bg {
          background: var(--dark);
        }

        .projects-header {
          text-align: center; margin-bottom: 3rem;
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
        }

        .project-card {
          background: var(--card); border: 1px solid var(--border);
          border-radius: 16px; overflow: hidden;
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .project-card:hover {
          transform: translateY(-6px);
          border-color: rgba(249,115,22,0.3);
          box-shadow: 0 30px 60px rgba(0,0,0,0.4);
        }

        .project-img {
          height: 180px;
          display: flex; align-items: center; justify-content: center;
          font-size: 3rem;
          position: relative; overflow: hidden;
        }

        .project-img-1 { background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%); }
        .project-img-2 { background: linear-gradient(135deg, #1a2a1a 0%, #162616 100%); }
        .project-img-3 { background: linear-gradient(135deg, #2a1a1a 0%, #261616 100%); }
        .project-img-4 { background: linear-gradient(135deg, #1a1a2e 0%, #0f1629 100%); }
        .project-img-5 { background: linear-gradient(135deg, #2a2a1a 0%, #26261a 100%); }
        .project-img-6 { background: linear-gradient(135deg, #2a1a2a 0%, #261a2a 100%); }

        .project-info { padding: 1.2rem; }

        .project-tag {
          display: inline-block;
          font-size: 0.7rem; font-weight: 600;
          text-transform: uppercase; letter-spacing: 1px;
          color: var(--accent); margin-bottom: 0.5rem;
        }

        .project-info h3 {
          font-family: 'Syne', sans-serif;
          font-size: 1rem; font-weight: 700;
          margin-bottom: 0.4rem;
        }

        .project-info p {
          color: var(--muted); font-size: 0.82rem; line-height: 1.5;
        }

        /* TECH */
        .tech-section { text-align: center; }

        .tech-grid {
          display: flex; flex-wrap: wrap;
          justify-content: center; gap: 1rem;
          margin-top: 2.5rem;
        }

        .tech-pill {
          display: flex; align-items: center; gap: 8px;
          background: var(--card); border: 1px solid var(--border);
          border-radius: 100px; padding: 0.6rem 1.2rem;
          font-size: 0.85rem; font-weight: 500;
          transition: all 0.2s;
          cursor: default;
        }

        .tech-pill:hover {
          border-color: rgba(249,115,22,0.4);
          color: var(--accent);
        }

        .tech-pill span { font-size: 1.1rem; }

        /* FOOTER */
        footer {
          border-top: 1px solid var(--border);
          padding: 3rem 5%;
          display: grid; grid-template-columns: 2fr 1fr 1fr 1fr;
          gap: 3rem;
        }

        .footer-brand p {
          color: var(--muted); font-size: 0.9rem;
          line-height: 1.7; margin-top: 1rem; max-width: 260px;
        }

        .footer-col h4 {
          font-family: 'Syne', sans-serif;
          font-size: 0.85rem; font-weight: 700;
          text-transform: uppercase; letter-spacing: 1px;
          margin-bottom: 1rem;
        }

        .footer-col ul { list-style: none; }

        .footer-col ul li {
          margin-bottom: 0.6rem;
        }

        .footer-col ul a {
          color: var(--muted); text-decoration: none;
          font-size: 0.88rem; transition: color 0.2s;
        }

        .footer-col ul a:hover { color: var(--white); }

        .footer-bottom {
          border-top: 1px solid var(--border);
          padding: 1.5rem 5%;
          display: flex; justify-content: space-between; align-items: center;
          color: var(--muted); font-size: 0.82rem;
        }

        /* RESPONSIVE */
        @media (max-width: 900px) {
          .hero { grid-template-columns: 1fr; text-align: center; padding-top: 100px; }
          .hero p { margin: 0 auto 2rem; }
          .hero-btns { justify-content: center; }
          .hero-visual { display: none; }
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

      {/* NAV */}
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

      {/* HERO */}
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

      {/* ABOUT */}
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
              { icon: '🌐', title: 'Web Development', desc: 'We design and develop fast, responsive, and SEO-friendly websites tailored to your business needs.' },
              { icon: '📱', title: 'Mobile App Dev', desc: 'We build feature-rich, high-performance mobile apps to keep your business connected anytime, anywhere.' },
              { icon: '🗄️', title: 'ERP Solutions', desc: 'Our custom ERP solutions streamline operations, enhance productivity, and drive business growth.' },
              { icon: '☁️', title: 'AWS Cloud', desc: 'We leverage AWS cloud infrastructure to deliver secure, scalable, and reliable cloud solutions.' },
            ].map((s, i) => (
              <div className="service-card" key={i}>
                <div className="service-icon">{s.icon}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="section projects-bg" id="projects">
        <div className="projects-header">
          <span className="section-label">Our Work</span>
          <h2 className="section-title">Projects We're Proud Of</h2>
        </div>
        <div className="projects-grid">
          {[
            { img: 'project-img-1', icon: '🛒', tag: 'E-Commerce', title: 'HAK Shop Platform', desc: 'Full-featured online store with inventory management and payment gateway.' },
            { img: 'project-img-2', icon: '📊', tag: 'ERP System', title: 'HAK ERP Dashboard', desc: 'Comprehensive ERP system for manpower, attendance, and payroll management.' },
            { img: 'project-img-3', icon: '🏦', tag: 'FinTech', title: 'Invoice Pro', desc: 'Automated invoicing system with GST compliance for financial businesses.' },
            { img: 'project-img-4', icon: '📱', tag: 'Mobile App', title: 'HAK Connect App', desc: 'Cross-platform mobile app keeping businesses connected in real time.' },
            { img: 'project-img-5', icon: '🎨', tag: 'UI/UX', title: 'Brand Identity Kit', desc: 'Complete brand identity and design system for a growing startup.' },
            { img: 'project-img-6', icon: '☁️', tag: 'Cloud', title: 'AWS Migration', desc: 'Seamless cloud migration delivering 60% cost reduction for the client.' },
          ].map((p, i) => (
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

      {/* TECH STACK */}
      <section className="section tech-section">
        <span className="section-label">Tech Stack</span>
        <h2 className="section-title">Tools & Technologies We Use</h2>
        <div className="tech-grid">
          {[
            { icon: '⚛️', name: 'React' },
            { icon: '🔺', name: 'Next.js' },
            { icon: '🟦', name: 'TypeScript' },
            { icon: '🟩', name: 'Node.js' },
            { icon: '🐘', name: 'PHP / Laravel' },
            { icon: '🐬', name: 'MySQL' },
            { icon: '🍃', name: 'MongoDB' },
            { icon: '☁️', name: 'AWS' },
            { icon: '🐳', name: 'Docker' },
            { icon: '📱', name: 'React Native' },
            { icon: '🎨', name: 'Tailwind CSS' },
            { icon: '🐍', name: 'Python' },
          ].map((t, i) => (
            <div className="tech-pill" key={i}>
              <span>{t.icon}</span> {t.name}
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer id="contact">
        <div className="footer-brand">
          <a href="#" className="nav-logo" style={{textDecoration:'none'}}>HAK <span style={{color:'var(--accent)'}}>Projects</span></a>
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
          <p style={{color:'var(--muted)', fontSize:'0.85rem', marginBottom:'1rem'}}>
            Subscribe to receive updates on new projects and innovations.
          </p>
          <input
            type="email" placeholder="Enter your email"
            style={{
              width:'100%', padding:'0.6rem 1rem',
              background:'var(--card)', border:'1px solid var(--border)',
              borderRadius:'8px', color:'var(--white)',
              fontSize:'0.85rem', outline:'none', marginBottom:'0.5rem'
            }}
          />
          <button className="btn-primary" style={{width:'100%', padding:'0.6rem'}}>
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