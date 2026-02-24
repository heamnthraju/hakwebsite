'use client';
import { useState } from 'react';
import Link from 'next/link';

const projects = [
  { cls:'pi1', icon:'🛒', tag:'E-Commerce', title:'HAK Shop Platform', desc:'Full-featured online store with inventory management, payment gateway integration, and real-time analytics dashboard.', tech:['Next.js','Node.js','MySQL','Stripe'] },
  { cls:'pi2', icon:'📊', tag:'ERP System', title:'HAK ERP Dashboard', desc:'Comprehensive ERP system for manpower, attendance, and payroll management used by 10+ companies.', tech:['React','Laravel','MySQL','AWS'] },
  { cls:'pi3', icon:'🏦', tag:'FinTech', title:'Invoice Pro', desc:'Automated invoicing system with GST compliance and financial reporting built for financial institutions.', tech:['Next.js','Node.js','PostgreSQL','PDF.js'] },
  { cls:'pi4', icon:'📱', tag:'Mobile App', title:'HAK Connect App', desc:'Cross-platform mobile app keeping businesses connected in real time with push notifications and offline support.', tech:['React Native','Firebase','Node.js','MongoDB'] },
  { cls:'pi5', icon:'🎨', tag:'UI/UX', title:'Brand Identity Kit', desc:'Complete brand identity and design system for a growing startup — logo, colors, typography, and component library.', tech:['Figma','Adobe XD','Illustrator'] },
  { cls:'pi6', icon:'☁️', tag:'Cloud', title:'AWS Migration', desc:'End-to-end cloud migration project delivering 60% cost reduction and 99.9% uptime for the client.', tech:['AWS EC2','S3','RDS','CloudFront'] },
  { cls:'pi1', icon:'🏥', tag:'Healthcare', title:'HealthTrack Portal', desc:'Patient management portal with appointment scheduling, medical records, and telemedicine features.', tech:['React','Node.js','MongoDB','Twilio'] },
  { cls:'pi2', icon:'🎓', tag:'EdTech', title:'LearnSpace LMS', desc:'Learning management system supporting video courses, quizzes, and certificate generation for online educators.', tech:['Next.js','Django','PostgreSQL','AWS S3'] },
  { cls:'pi3', icon:'🏗️', tag:'Construction', title:'BuildTrack App', desc:'Project tracking and workforce management app for construction companies with real-time site reporting.', tech:['React Native','Node.js','MySQL','Google Maps'] },
];

const tags = ['All', 'E-Commerce', 'ERP System', 'FinTech', 'Mobile App', 'UI/UX', 'Cloud', 'Healthcare', 'EdTech', 'Construction'];

export default function ProjectsPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeTag, setActiveTag] = useState('All');

  const filtered = activeTag === 'All' ? projects : projects.filter(p => p.tag === activeTag);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:wght@300;400;500;600&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        :root {
          --black: #0a0a0f; --dark: #111118; --card: #16161f;
          --accent: #f97316; --accent2: #fb923c;
          --white: #f5f5f0; --muted: #8888a0; --border: rgba(255,255,255,0.08);
        }
        html { scroll-behavior: smooth; }
        body { font-family: 'DM Sans', sans-serif; background: var(--black); color: var(--white); overflow-x: hidden; }

        nav { position: sticky; top: 0; z-index: 100; padding: 0 5%; display: flex; align-items: center; justify-content: space-between; height: 70px; background: rgba(10,10,15,0.95); backdrop-filter: blur(20px); border-bottom: 1px solid var(--border); }
        .nav-logo { font-family: 'Syne', sans-serif; font-size: 1.5rem; font-weight: 800; color: var(--white); text-decoration: none; letter-spacing: -0.5px; }
        .nav-logo span { color: var(--accent); }
        .nav-links { display: flex; gap: 2rem; list-style: none; }
        .nav-links a { color: var(--muted); text-decoration: none; font-size: 0.9rem; font-weight: 500; transition: color 0.2s; }
        .nav-links a:hover { color: var(--white); }
        .nav-links a.active { color: var(--accent); font-weight: 600; }
        .nav-cta { background: var(--accent); color: var(--black) !important; padding: 0.5rem 1.2rem; border-radius: 6px; font-weight: 600 !important; }
        .hamburger { display: none; flex-direction: column; gap: 5px; cursor: pointer; background: none; border: none; }
        .hamburger span { display: block; width: 24px; height: 2px; background: var(--white); }
        .mobile-menu { display: none; position: fixed; top: 70px; left: 0; right: 0; background: rgba(10,10,15,0.98); backdrop-filter: blur(20px); border-bottom: 1px solid var(--border); padding: 1.5rem 5%; z-index: 99; flex-direction: column; gap: 1rem; }
        .mobile-menu.open { display: flex; }
        .mobile-menu a { color: var(--muted); text-decoration: none; font-size: 1rem; padding: 0.5rem 0; border-bottom: 1px solid var(--border); }
        .mob-cta { background: var(--accent); color: var(--black) !important; padding: 0.75rem 1.2rem !important; border-radius: 6px; font-weight: 600 !important; text-align: center; border-bottom: none !important; margin-top: 0.5rem; }

        .page-hero { padding: 80px 5% 60px; text-align: center; position: relative; overflow: hidden; }
        .page-hero::before { content: ''; position: absolute; inset: 0; background: radial-gradient(ellipse 60% 50% at 50% 0%, rgba(249,115,22,0.1) 0%, transparent 70%); pointer-events: none; }
        .section-label { display: inline-block; font-size: 0.75rem; font-weight: 700; text-transform: uppercase; letter-spacing: 2px; color: var(--accent); margin-bottom: 1rem; }
        .page-hero h1 { font-family: 'Syne', sans-serif; font-size: clamp(2.5rem, 5vw, 4rem); font-weight: 800; letter-spacing: -2px; margin-bottom: 1.2rem; }
        .page-hero h1 span { color: var(--accent); }
        .page-hero p { color: var(--muted); font-size: 1.05rem; line-height: 1.7; max-width: 600px; margin: 0 auto; }

        .filter-bar { display: flex; flex-wrap: wrap; gap: 0.6rem; justify-content: center; padding: 0 5% 3rem; }
        .filter-btn { background: var(--card); border: 1px solid var(--border); border-radius: 100px; padding: 0.5rem 1.1rem; font-size: 0.82rem; font-weight: 500; color: var(--muted); cursor: pointer; transition: all 0.2s; font-family: 'DM Sans', sans-serif; }
        .filter-btn:hover { border-color: rgba(249,115,22,0.3); color: var(--white); }
        .filter-btn.active { background: var(--accent); border-color: var(--accent); color: var(--black); font-weight: 700; }

        .projects-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem; padding: 0 5% 80px; }
        .project-card { background: var(--card); border: 1px solid var(--border); border-radius: 20px; overflow: hidden; transition: all 0.3s ease; }
        .project-card:hover { transform: translateY(-6px); border-color: rgba(249,115,22,0.3); box-shadow: 0 30px 60px rgba(0,0,0,0.4); }
        .project-img { height: 200px; display: flex; align-items: center; justify-content: center; font-size: 3.5rem; position: relative; }
        .pi1 { background: linear-gradient(135deg, #1a1a2e, #16213e); }
        .pi2 { background: linear-gradient(135deg, #1a2a1a, #162616); }
        .pi3 { background: linear-gradient(135deg, #2a1a1a, #261616); }
        .pi4 { background: linear-gradient(135deg, #1a1a2e, #0f1629); }
        .pi5 { background: linear-gradient(135deg, #2a2a1a, #26261a); }
        .pi6 { background: linear-gradient(135deg, #2a1a2a, #261a2a); }
        .project-info { padding: 1.5rem; }
        .project-tag { display: inline-block; font-size: 0.7rem; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; color: var(--accent); background: rgba(249,115,22,0.1); padding: 3px 10px; border-radius: 100px; margin-bottom: 0.7rem; }
        .project-info h3 { font-family: 'Syne', sans-serif; font-size: 1.1rem; font-weight: 700; margin-bottom: 0.5rem; }
        .project-info p { color: var(--muted); font-size: 0.85rem; line-height: 1.6; margin-bottom: 1rem; }
        .tech-tags { display: flex; flex-wrap: wrap; gap: 0.4rem; }
        .tech-tag { background: rgba(255,255,255,0.05); border: 1px solid var(--border); border-radius: 4px; padding: 3px 8px; font-size: 0.72rem; color: var(--muted); }

        .cta-section { background: linear-gradient(135deg, rgba(249,115,22,0.08), rgba(249,115,22,0.02)); border: 1px solid rgba(249,115,22,0.15); border-radius: 24px; padding: 4rem; text-align: center; margin: 0 5% 80px; }
        .cta-section h2 { font-family: 'Syne', sans-serif; font-size: clamp(1.8rem, 3vw, 2.5rem); font-weight: 800; letter-spacing: -1px; margin-bottom: 1rem; }
        .cta-section p { color: var(--muted); font-size: 1rem; margin-bottom: 2rem; }
        .btn-primary { background: var(--accent); color: var(--black); padding: 0.85rem 2rem; border-radius: 8px; font-weight: 700; font-size: 0.95rem; text-decoration: none; display: inline-block; transition: all 0.2s; }
        .btn-primary:hover { background: var(--accent2); transform: translateY(-2px); box-shadow: 0 8px 30px rgba(249,115,22,0.35); }

        footer { border-top: 1px solid var(--border); padding: 3rem 5%; display: grid; grid-template-columns: 2fr 1fr 1fr; gap: 3rem; }
        .footer-brand p { color: var(--muted); font-size: 0.9rem; line-height: 1.7; margin-top: 1rem; max-width: 260px; }
        .footer-col h4 { font-family: 'Syne', sans-serif; font-size: 0.85rem; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 1rem; }
        .footer-col ul { list-style: none; }
        .footer-col ul li { margin-bottom: 0.6rem; }
        .footer-col ul a { color: var(--muted); text-decoration: none; font-size: 0.88rem; transition: color 0.2s; }
        .footer-col ul a:hover { color: var(--white); }
        .footer-bottom { border-top: 1px solid var(--border); padding: 1.5rem 5%; display: flex; justify-content: space-between; align-items: center; color: var(--muted); font-size: 0.82rem; }

        @media (max-width: 900px) {
          .projects-grid { grid-template-columns: 1fr 1fr; }
          .nav-links { display: none; }
          .hamburger { display: flex; }
          footer { grid-template-columns: 1fr 1fr; }
        }
        @media (max-width: 600px) {
          .projects-grid { grid-template-columns: 1fr; }
          footer { grid-template-columns: 1fr; }
          .footer-bottom { flex-direction: column; gap: 0.5rem; text-align: center; }
        }
      `}</style>

      <nav>
        <Link href="/" className="nav-logo">HAK <span>Projects</span></Link>
        <ul className="nav-links">
          <li><Link href="/home">Home</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/service">Services</Link></li>
          <li><Link href="/projects" className="active">Projects</Link></li>
          <li><Link href="/contact" className="nav-cta">Contact</Link></li>
        </ul>
        <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}><span></span><span></span><span></span></button>
      </nav>
      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        <Link href="/home" onClick={() => setMenuOpen(false)}>Home</Link>
        <Link href="/about" onClick={() => setMenuOpen(false)}>About</Link>
        <Link href="/service" onClick={() => setMenuOpen(false)}>Services</Link>
        <Link href="/projects" onClick={() => setMenuOpen(false)}>Projects</Link>
        <Link href="/contact" className="mob-cta" onClick={() => setMenuOpen(false)}>Contact</Link>
      </div>

      <section className="page-hero">
        <span className="section-label">Our Portfolio</span>
        <h1>Projects We're <span>Proud Of</span></h1>
        <p>Explore our portfolio of successful projects across various industries and technologies.</p>
      </section>

      {/* FILTER */}
      <div className="filter-bar">
        {tags.map(tag => (
          <button key={tag} className={`filter-btn ${activeTag === tag ? 'active' : ''}`} onClick={() => setActiveTag(tag)}>{tag}</button>
        ))}
      </div>

      {/* PROJECTS GRID */}
      <div className="projects-grid">
        {filtered.map((p, i) => (
          <div className="project-card" key={i}>
            <div className={`project-img ${p.cls}`}><span>{p.icon}</span></div>
            <div className="project-info">
              <span className="project-tag">{p.tag}</span>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
              <div className="tech-tags">{p.tech.map(t => <span className="tech-tag" key={t}>{t}</span>)}</div>
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="cta-section">
        <h2>Have a Project in Mind?</h2>
        <p>Let's build something amazing together. Get in touch and we'll make it happen.</p>
        <Link href="/contact" className="btn-primary">Start Your Project</Link>
      </div>

      <footer>
        <div className="footer-brand">
          <Link href="/" className="nav-logo">HAK <span style={{color:'var(--accent)'}}>Projects</span></Link>
          <p>We provide cutting-edge IT solutions to help businesses grow and succeed in the digital world.</p>
        </div>
        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul>
            <li><Link href="/home">Home</Link></li>
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/service">Services</Link></li>
            <li><Link href="/contact">Contact Us</Link></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Services</h4>
          <ul>
            <li><Link href="/service">Web Development</Link></li>
            <li><Link href="/service">Mobile Apps</Link></li>
            <li><Link href="/service">ERP Solutions</Link></li>
            <li><Link href="/service">AWS Cloud</Link></li>
          </ul>
        </div>
      </footer>
      <div className="footer-bottom">
        <span>© 2026 HAK Projects. All rights reserved.</span>
        <span>Built with ❤️ using Next.js</span>
      </div>
    </>
  );
}