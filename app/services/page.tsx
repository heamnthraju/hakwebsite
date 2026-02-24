'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function ServicePage() {
  const [menuOpen, setMenuOpen] = useState(false);

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

        nav { position: sticky; top: 0; left: 0; right: 0; z-index: 100; padding: 0 5%; display: flex; align-items: center; justify-content: space-between; height: 70px; background: rgba(10,10,15,0.95); backdrop-filter: blur(20px); border-bottom: 1px solid var(--border); }
        .nav-logo { font-family: 'Syne', sans-serif; font-size: 1.5rem; font-weight: 800; color: var(--white); text-decoration: none; letter-spacing: -0.5px; }
        .nav-logo span { color: var(--accent); }
        .nav-links { display: flex; gap: 2rem; list-style: none; }
        .nav-links a { color: var(--muted); text-decoration: none; font-size: 0.9rem; font-weight: 500; transition: color 0.2s; }
        .nav-links a:hover { color: var(--white); }
        .nav-links a.active { color: var(--accent); font-weight: 600; }
        .nav-cta { background: var(--accent); color: var(--black) !important; padding: 0.5rem 1.2rem; border-radius: 6px; font-weight: 600 !important; }
        .nav-cta:hover { background: var(--accent2) !important; }
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

        .section { padding: 80px 5%; }
        .section-title { font-family: 'Syne', sans-serif; font-size: clamp(1.8rem, 3vw, 2.5rem); font-weight: 800; letter-spacing: -1px; margin-bottom: 1rem; }

        .services-main { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem; margin-top: 3rem; }
        .service-big-card { background: var(--card); border: 1px solid var(--border); border-radius: 20px; padding: 2.5rem 2rem; transition: all 0.3s ease; cursor: default; position: relative; overflow: hidden; }
        .service-big-card::before { content: ''; position: absolute; top: 0; left: 0; right: 0; height: 3px; background: linear-gradient(90deg, var(--accent), var(--accent2)); transform: scaleX(0); transition: transform 0.3s ease; transform-origin: left; }
        .service-big-card:hover::before { transform: scaleX(1); }
        .service-big-card:hover { border-color: rgba(249,115,22,0.2); transform: translateY(-6px); box-shadow: 0 30px 60px rgba(0,0,0,0.4); }
        .svc-icon { width: 60px; height: 60px; border-radius: 16px; background: rgba(249,115,22,0.12); border: 1px solid rgba(249,115,22,0.2); display: flex; align-items: center; justify-content: center; font-size: 1.8rem; margin-bottom: 1.5rem; }
        .service-big-card h3 { font-family: 'Syne', sans-serif; font-size: 1.2rem; font-weight: 700; margin-bottom: 0.8rem; }
        .service-big-card p { color: var(--muted); font-size: 0.88rem; line-height: 1.7; margin-bottom: 1.5rem; }
        .svc-features { list-style: none; }
        .svc-features li { color: var(--muted); font-size: 0.82rem; padding: 0.3rem 0; display: flex; align-items: center; gap: 8px; }
        .svc-features li::before { content: '✓'; color: var(--accent); font-weight: 700; flex-shrink: 0; }

        .process-section { background: var(--dark); }
        .process-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 1.5rem; margin-top: 3rem; }
        .process-card { background: var(--card); border: 1px solid var(--border); border-radius: 16px; padding: 2rem 1.5rem; text-align: center; position: relative; }
        .process-num { font-family: 'Syne', sans-serif; font-size: 2.5rem; font-weight: 800; color: rgba(249,115,22,0.15); margin-bottom: 1rem; }
        .process-card h3 { font-family: 'Syne', sans-serif; font-size: 1rem; font-weight: 700; margin-bottom: 0.5rem; }
        .process-card p { color: var(--muted); font-size: 0.82rem; line-height: 1.6; }

        .cta-section { background: linear-gradient(135deg, rgba(249,115,22,0.08), rgba(249,115,22,0.02)); border: 1px solid rgba(249,115,22,0.15); border-radius: 24px; padding: 4rem; text-align: center; margin: 0 5% 80px; }
        .cta-section h2 { font-family: 'Syne', sans-serif; font-size: clamp(1.8rem, 3vw, 2.8rem); font-weight: 800; letter-spacing: -1px; margin-bottom: 1rem; }
        .cta-section p { color: var(--muted); font-size: 1rem; margin-bottom: 2rem; }
        .btn-primary { background: var(--accent); color: var(--black); padding: 0.85rem 2rem; border-radius: 8px; font-weight: 700; font-size: 0.95rem; text-decoration: none; display: inline-block; transition: all 0.2s; font-family: 'DM Sans', sans-serif; }
        .btn-primary:hover { background: var(--accent2); transform: translateY(-2px); box-shadow: 0 8px 30px rgba(249,115,22,0.35); }
        .btn-outline { background: transparent; color: var(--white); padding: 0.85rem 2rem; border-radius: 8px; font-weight: 600; font-size: 0.95rem; text-decoration: none; border: 1px solid var(--border); display: inline-block; transition: all 0.2s; }
        .btn-outline:hover { border-color: rgba(255,255,255,0.3); transform: translateY(-2px); }

        footer { border-top: 1px solid var(--border); padding: 3rem 5%; display: grid; grid-template-columns: 2fr 1fr 1fr; gap: 3rem; }
        .footer-col h4 { font-family: 'Syne', sans-serif; font-size: 0.85rem; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 1rem; }
        .footer-col ul { list-style: none; }
        .footer-col ul li { margin-bottom: 0.6rem; }
        .footer-col ul a { color: var(--muted); text-decoration: none; font-size: 0.88rem; transition: color 0.2s; }
        .footer-col ul a:hover { color: var(--white); }
        .footer-brand p { color: var(--muted); font-size: 0.9rem; line-height: 1.7; margin-top: 1rem; max-width: 260px; }
        .footer-bottom { border-top: 1px solid var(--border); padding: 1.5rem 5%; display: flex; justify-content: space-between; align-items: center; color: var(--muted); font-size: 0.82rem; }

        @media (max-width: 900px) {
          .services-main { grid-template-columns: 1fr 1fr; }
          .process-grid { grid-template-columns: 1fr 1fr; }
          .nav-links { display: none; }
          .hamburger { display: flex; }
          footer { grid-template-columns: 1fr 1fr; }
        }
        @media (max-width: 600px) {
          .services-main { grid-template-columns: 1fr; }
          .process-grid { grid-template-columns: 1fr; }
          footer { grid-template-columns: 1fr; }
          .footer-bottom { flex-direction: column; gap: 0.5rem; text-align: center; }
        }
      `}</style>

      <nav>
        <Link href="/" className="nav-logo">HAK <span>Projects</span></Link>
        <ul className="nav-links">
          <li><Link href="/home">Home</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/service" className="active">Services</Link></li>
          <li><Link href="/projects">Projects</Link></li>
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

      {/* HERO */}
      <section className="page-hero">
        <span className="section-label">What We Offer</span>
        <h1>Our <span>Services</span></h1>
        <p>From web development to cloud solutions, we deliver end-to-end IT services that help your business grow faster and smarter.</p>
      </section>

      {/* MAIN SERVICES */}
      <section className="section">
        <div className="services-main">
          {[
            { icon:'🌐', title:'Web Development', desc:'We design and develop fast, responsive, SEO-friendly websites and web applications tailored to your business goals.', features:['React & Next.js','Custom CMS','E-Commerce','SEO Optimized','Mobile Responsive'] },
            { icon:'📱', title:'Mobile App Development', desc:'We build cross-platform and native mobile apps that deliver exceptional user experiences on iOS and Android.', features:['React Native','iOS & Android','Push Notifications','Offline Support','App Store Publishing'] },
            { icon:'🗄️', title:'ERP Solutions', desc:'Custom ERP systems that streamline your operations, manage resources, and boost business productivity.', features:['HR & Payroll','Inventory Management','Finance Module','Custom Workflows','Real-time Reports'] },
            { icon:'☁️', title:'AWS Cloud Services', desc:'We leverage AWS to build secure, scalable cloud infrastructure tailored for your business workloads.', features:['Cloud Migration','EC2 & S3','Auto Scaling','Cost Optimization','24/7 Monitoring'] },
            { icon:'🎨', title:'UI/UX Design', desc:'Stunning, user-centric designs that convert visitors into customers and create memorable brand experiences.', features:['Figma Prototyping','User Research','Brand Identity','Design Systems','Usability Testing'] },
            { icon:'📈', title:'Digital Marketing', desc:'Data-driven digital marketing strategies to grow your online presence and generate quality leads.', features:['SEO & SEM','Social Media','Email Campaigns','Analytics','Content Strategy'] },
          ].map((s, i) => (
            <div className="service-big-card" key={i}>
              <div className="svc-icon">{s.icon}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
              <ul className="svc-features">
                {s.features.map(f => <li key={f}>{f}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section className="section process-section">
        <div style={{textAlign:'center'}}>
          <span className="section-label">How We Work</span>
          <h2 className="section-title">Our Simple Process</h2>
        </div>
        <div className="process-grid">
          {[
            { num:'01', title:'Discovery', desc:'We understand your goals, requirements, and challenges through in-depth consultations.' },
            { num:'02', title:'Planning', desc:'We create a detailed roadmap, timeline, and technical architecture for your project.' },
            { num:'03', title:'Development', desc:'Our team builds your solution with clean code, best practices, and regular updates.' },
            { num:'04', title:'Launch & Support', desc:'We deploy, test, and provide ongoing support to ensure everything runs perfectly.' },
          ].map((p) => (
            <div className="process-card" key={p.num}>
              <div className="process-num">{p.num}</div>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <div className="cta-section">
        <h2>Ready to Start Your Project?</h2>
        <p>Let's discuss how we can help your business grow with the right technology solutions.</p>
        <div style={{display:'flex', gap:'1rem', justifyContent:'center', flexWrap:'wrap'}}>
          <Link href="/contact" className="btn-primary">Get Free Consultation</Link>
          <Link href="/projects" className="btn-outline">See Our Work</Link>
        </div>
      </div>

      {/* FOOTER */}
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
            <li><Link href="/projects">Projects</Link></li>
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