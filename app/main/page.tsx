

// // 'use client';
// // import { useState, useEffect } from 'react';
// // import Link from 'next/link';

// // export default function Home() {
// //   const [menuOpen, setMenuOpen] = useState(false);
// //   const [scrolled, setScrolled] = useState(false);

// //   useEffect(() => {
// //     const handleScroll = () => setScrolled(window.scrollY > 50);
// //     window.addEventListener('scroll', handleScroll);
// //     return () => window.removeEventListener('scroll', handleScroll);
// //   }, []);

// //   return (
// //     <>
// //       <style>{`
// //         @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:wght@300;400;500;600&display=swap');

// //         *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

// //         :root {
// //           --black: #0a0a0f;
// //           --dark: #111118;
// //           --card: #16161f;
// //           --accent: #f97316;
// //           --accent2: #fb923c;
// //           --white: #f5f5f0;
// //           --muted: #8888a0;
// //           --border: rgba(255,255,255,0.08);
// //         }

// //         html { scroll-behavior: smooth; }

// //         body {
// //           font-family: 'DM Sans', sans-serif;
// //           background: var(--black);
// //           color: var(--white);
// //           overflow-x: hidden;
// //         }

// //         /* NAV */
// //         nav {
// //           position: fixed; top: 0; left: 0; right: 0; z-index: 100;
// //           padding: 0 5%;
// //           display: flex; align-items: center; justify-content: space-between;
// //           height: 70px;
// //           transition: all 0.3s ease;
// //           background: ${scrolled ? 'rgba(10,10,15,0.95)' : 'transparent'};
// //           backdrop-filter: ${scrolled ? 'blur(20px)' : 'none'};
// //           border-bottom: ${scrolled ? '1px solid var(--border)' : 'none'};
// //         }

// //         .nav-logo {
// //           font-family: 'Syne', sans-serif;
// //           font-size: 1.5rem; font-weight: 800;
// //           color: var(--white); text-decoration: none;
// //           letter-spacing: -0.5px;
// //         }

// //         .nav-logo span { color: var(--accent); }

// //         .nav-links {
// //           display: flex; gap: 2rem; list-style: none;
// //         }

// //         .nav-links a {
// //           color: var(--muted); text-decoration: none;
// //           font-size: 0.9rem; font-weight: 500;
// //           transition: color 0.2s;
// //           letter-spacing: 0.3px;
// //         }

// //         .nav-links a:hover { color: var(--white); }

// //         .nav-cta {
// //           background: var(--accent); color: var(--black) !important;
// //           padding: 0.5rem 1.2rem; border-radius: 6px;
// //           font-weight: 600 !important;
// //         }

// //         .nav-cta:hover { background: var(--accent2); color: var(--black) !important; }

// //         .hamburger {
// //           display: none; flex-direction: column; gap: 5px;
// //           cursor: pointer; background: none; border: none;
// //         }

// //         .hamburger span {
// //           display: block; width: 24px; height: 2px;
// //           background: var(--white); transition: all 0.3s;
// //         }

// //         /* MOBILE MENU */
// //         .mobile-menu {
// //           display: none;
// //           position: fixed;
// //           top: 70px; left: 0; right: 0;
// //           background: rgba(10,10,15,0.98);
// //           backdrop-filter: blur(20px);
// //           border-bottom: 1px solid var(--border);
// //           padding: 1.5rem 5%;
// //           z-index: 99;
// //           flex-direction: column;
// //           gap: 1rem;
// //         }

// //         .mobile-menu.open { display: flex; }

// //         .mobile-menu a {
// //           color: var(--muted); text-decoration: none;
// //           font-size: 1rem; font-weight: 500;
// //           padding: 0.5rem 0;
// //           border-bottom: 1px solid var(--border);
// //           transition: color 0.2s;
// //         }

// //         .mobile-menu a:hover { color: var(--white); }

// //         .mobile-menu .mob-cta {
// //           background: var(--accent); color: var(--black) !important;
// //           padding: 0.75rem 1.2rem; border-radius: 6px;
// //           font-weight: 600 !important; text-align: center;
// //           border-bottom: none; margin-top: 0.5rem;
// //         }

// //         /* HERO */
// //         .hero {
// //           min-height: 100vh;
// //           padding: 120px 5% 80px;
// //           display: grid;
// //           grid-template-columns: 1fr 1fr;
// //           align-items: center;
// //           gap: 4rem;
// //           position: relative;
// //           overflow: hidden;
// //         }

// //         .hero::before {
// //           content: '';
// //           position: absolute; inset: 0;
// //           background: radial-gradient(ellipse 60% 60% at 70% 50%, rgba(249,115,22,0.12) 0%, transparent 70%);
// //           pointer-events: none;
// //         }

// //         .hero-badge {
// //           display: inline-flex; align-items: center; gap: 8px;
// //           background: rgba(249,115,22,0.1); border: 1px solid rgba(249,115,22,0.3);
// //           color: var(--accent); padding: 6px 14px; border-radius: 100px;
// //           font-size: 0.8rem; font-weight: 600; letter-spacing: 0.5px;
// //           margin-bottom: 1.5rem;
// //           text-transform: uppercase;
// //         }

// //         .hero-badge::before {
// //           content: ''; width: 6px; height: 6px;
// //           background: var(--accent); border-radius: 50%;
// //           animation: pulse 2s infinite;
// //         }

// //         @keyframes pulse {
// //           0%, 100% { opacity: 1; }
// //           50% { opacity: 0.3; }
// //         }

// //         .hero h1 {
// //           font-family: 'Syne', sans-serif;
// //           font-size: clamp(2.8rem, 5vw, 4.5rem);
// //           font-weight: 800; line-height: 1.05;
// //           letter-spacing: -2px;
// //           margin-bottom: 1.5rem;
// //         }

// //         .hero h1 .highlight {
// //           color: var(--accent);
// //           position: relative;
// //         }

// //         .hero p {
// //           color: var(--muted); font-size: 1.05rem;
// //           line-height: 1.7; max-width: 480px;
// //           margin-bottom: 2.5rem;
// //         }

// //         .hero-btns {
// //           display: flex; gap: 1rem; flex-wrap: wrap;
// //         }

// //         .btn-primary {
// //           background: var(--accent); color: var(--black);
// //           padding: 0.85rem 2rem; border-radius: 8px;
// //           font-weight: 700; font-size: 0.95rem;
// //           text-decoration: none; border: none; cursor: pointer;
// //           transition: all 0.2s;
// //           font-family: 'DM Sans', sans-serif;
// //         }

// //         .btn-primary:hover {
// //           background: var(--accent2); transform: translateY(-2px);
// //           box-shadow: 0 8px 30px rgba(249,115,22,0.35);
// //         }

// //         .btn-outline {
// //           background: transparent; color: var(--white);
// //           padding: 0.85rem 2rem; border-radius: 8px;
// //           font-weight: 600; font-size: 0.95rem;
// //           text-decoration: none; border: 1px solid var(--border);
// //           cursor: pointer; transition: all 0.2s;
// //           font-family: 'DM Sans', sans-serif;
// //         }

// //         .btn-outline:hover {
// //           border-color: rgba(255,255,255,0.3);
// //           transform: translateY(-2px);
// //         }

// //         .hero-visual {
// //           display: flex; align-items: center; justify-content: center;
// //           position: relative;
// //         }

// //         .hero-card {
// //           background: var(--card); border: 1px solid var(--border);
// //           border-radius: 20px; padding: 2rem;
// //           width: 100%; max-width: 420px;
// //           box-shadow: 0 40px 80px rgba(0,0,0,0.5);
// //           position: relative;
// //         }

// //         .hero-card::before {
// //           content: '';
// //           position: absolute; top: -1px; left: 30px; right: 30px; height: 1px;
// //           background: linear-gradient(90deg, transparent, var(--accent), transparent);
// //         }

// //         .card-stat {
// //           display: flex; justify-content: space-between;
// //           margin-bottom: 1.5rem;
// //         }

// //         .stat-item { text-align: center; }

// //         .stat-num {
// //           font-family: 'Syne', sans-serif;
// //           font-size: 1.8rem; font-weight: 800;
// //           color: var(--accent);
// //         }

// //         .stat-label {
// //           font-size: 0.75rem; color: var(--muted);
// //           text-transform: uppercase; letter-spacing: 0.5px;
// //         }

// //         .card-bar { margin-bottom: 0.8rem; }

// //         .bar-label {
// //           display: flex; justify-content: space-between;
// //           font-size: 0.8rem; color: var(--muted); margin-bottom: 6px;
// //         }

// //         .bar-track {
// //           background: rgba(255,255,255,0.06); border-radius: 100px;
// //           height: 6px; overflow: hidden;
// //         }

// //         .bar-fill {
// //           height: 100%; border-radius: 100px;
// //           background: linear-gradient(90deg, var(--accent), var(--accent2));
// //           animation: fillBar 1.5s ease forwards;
// //         }

// //         @keyframes fillBar {
// //           from { width: 0; }
// //         }

// //         /* ABOUT */
// //         .section {
// //           padding: 100px 5%;
// //         }

// //         .section-label {
// //           display: inline-block;
// //           font-size: 0.75rem; font-weight: 700;
// //           text-transform: uppercase; letter-spacing: 2px;
// //           color: var(--accent); margin-bottom: 1rem;
// //         }

// //         .section-title {
// //           font-family: 'Syne', sans-serif;
// //           font-size: clamp(2rem, 4vw, 3rem);
// //           font-weight: 800; letter-spacing: -1px;
// //           line-height: 1.1; margin-bottom: 1.5rem;
// //         }

// //         .about-grid {
// //           display: grid; grid-template-columns: 1fr 1fr; gap: 5rem;
// //           align-items: center;
// //         }

// //         .about-text p {
// //           color: var(--muted); line-height: 1.8; margin-bottom: 1.2rem;
// //           font-size: 1rem;
// //         }

// //         .services-grid {
// //           display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;
// //         }

// //         .service-card {
// //           background: var(--card); border: 1px solid var(--border);
// //           border-radius: 14px; padding: 1.5rem;
// //           transition: all 0.3s ease;
// //           cursor: default;
// //         }

// //         .service-card:hover {
// //           border-color: rgba(249,115,22,0.3);
// //           transform: translateY(-4px);
// //           box-shadow: 0 20px 40px rgba(0,0,0,0.3);
// //         }

// //         .service-icon {
// //           width: 44px; height: 44px; border-radius: 10px;
// //           background: rgba(249,115,22,0.15);
// //           display: flex; align-items: center; justify-content: center;
// //           font-size: 1.3rem; margin-bottom: 1rem;
// //         }

// //         .service-card h3 {
// //           font-family: 'Syne', sans-serif;
// //           font-size: 1rem; font-weight: 700;
// //           margin-bottom: 0.5rem;
// //         }

// //         .service-card p {
// //           color: var(--muted); font-size: 0.85rem; line-height: 1.6;
// //         }

// //         /* PROJECTS */
// //         .projects-bg {
// //           background: var(--dark);
// //         }

// //         .projects-header {
// //           text-align: center; margin-bottom: 3rem;
// //         }

// //         .projects-grid {
// //           display: grid;
// //           grid-template-columns: repeat(3, 1fr);
// //           gap: 1.5rem;
// //         }

// //         .project-card {
// //           background: var(--card); border: 1px solid var(--border);
// //           border-radius: 16px; overflow: hidden;
// //           transition: all 0.3s ease;
// //           cursor: pointer;
// //         }

// //         .project-card:hover {
// //           transform: translateY(-6px);
// //           border-color: rgba(249,115,22,0.3);
// //           box-shadow: 0 30px 60px rgba(0,0,0,0.4);
// //         }

// //         .project-img {
// //           height: 180px;
// //           display: flex; align-items: center; justify-content: center;
// //           font-size: 3rem;
// //           position: relative; overflow: hidden;
// //         }

// //         .project-img-1 { background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%); }
// //         .project-img-2 { background: linear-gradient(135deg, #1a2a1a 0%, #162616 100%); }
// //         .project-img-3 { background: linear-gradient(135deg, #2a1a1a 0%, #261616 100%); }
// //         .project-img-4 { background: linear-gradient(135deg, #1a1a2e 0%, #0f1629 100%); }
// //         .project-img-5 { background: linear-gradient(135deg, #2a2a1a 0%, #26261a 100%); }
// //         .project-img-6 { background: linear-gradient(135deg, #2a1a2a 0%, #261a2a 100%); }

// //         .project-info { padding: 1.2rem; }

// //         .project-tag {
// //           display: inline-block;
// //           font-size: 0.7rem; font-weight: 600;
// //           text-transform: uppercase; letter-spacing: 1px;
// //           color: var(--accent); margin-bottom: 0.5rem;
// //         }

// //         .project-info h3 {
// //           font-family: 'Syne', sans-serif;
// //           font-size: 1rem; font-weight: 700;
// //           margin-bottom: 0.4rem;
// //         }

// //         .project-info p {
// //           color: var(--muted); font-size: 0.82rem; line-height: 1.5;
// //         }

// //         /* TECH */
// //         .tech-section { text-align: center; }

// //         .tech-grid {
// //           display: flex; flex-wrap: wrap;
// //           justify-content: center; gap: 1rem;
// //           margin-top: 2.5rem;
// //         }

// //         .tech-pill {
// //           display: flex; align-items: center; gap: 8px;
// //           background: var(--card); border: 1px solid var(--border);
// //           border-radius: 100px; padding: 0.6rem 1.2rem;
// //           font-size: 0.85rem; font-weight: 500;
// //           transition: all 0.2s;
// //           cursor: default;
// //         }

// //         .tech-pill:hover {
// //           border-color: rgba(249,115,22,0.4);
// //           color: var(--accent);
// //         }

// //         .tech-pill span { font-size: 1.1rem; }

// //         /* FOOTER */
// //         footer {
// //           border-top: 1px solid var(--border);
// //           padding: 3rem 5%;
// //           display: grid; grid-template-columns: 2fr 1fr 1fr 1fr;
// //           gap: 3rem;
// //         }

// //         .footer-brand p {
// //           color: var(--muted); font-size: 0.9rem;
// //           line-height: 1.7; margin-top: 1rem; max-width: 260px;
// //         }

// //         .footer-col h4 {
// //           font-family: 'Syne', sans-serif;
// //           font-size: 0.85rem; font-weight: 700;
// //           text-transform: uppercase; letter-spacing: 1px;
// //           margin-bottom: 1rem;
// //         }

// //         .footer-col ul { list-style: none; }

// //         .footer-col ul li {
// //           margin-bottom: 0.6rem;
// //         }

// //         .footer-col ul a {
// //           color: var(--muted); text-decoration: none;
// //           font-size: 0.88rem; transition: color 0.2s;
// //         }

// //         .footer-col ul a:hover { color: var(--white); }

// //         .footer-bottom {
// //           border-top: 1px solid var(--border);
// //           padding: 1.5rem 5%;
// //           display: flex; justify-content: space-between; align-items: center;
// //           color: var(--muted); font-size: 0.82rem;
// //         }

// //         /* RESPONSIVE */
// //         @media (max-width: 900px) {
// //           .hero { grid-template-columns: 1fr; text-align: center; padding-top: 100px; }
// //           .hero p { margin: 0 auto 2rem; }
// //           .hero-btns { justify-content: center; }
// //           .hero-visual { display: none; }
// //           .about-grid { grid-template-columns: 1fr; gap: 2rem; }
// //           .projects-grid { grid-template-columns: 1fr 1fr; }
// //           footer { grid-template-columns: 1fr 1fr; gap: 2rem; }
// //           .nav-links { display: none; }
// //           .hamburger { display: flex; }
// //         }

// //         @media (max-width: 600px) {
// //           .projects-grid { grid-template-columns: 1fr; }
// //           .services-grid { grid-template-columns: 1fr; }
// //           footer { grid-template-columns: 1fr; }
// //           .footer-bottom { flex-direction: column; gap: 0.5rem; text-align: center; }
// //         }
// //       `}</style>

// //       {/* NAV */}
// //       <nav>
// //         <Link href="/" className="nav-logo">HAK <span>Projects</span></Link>
// //         <ul className="nav-links">
// //           <li><Link href="/">Home</Link></li>
// //           {/* ✅ FIXED: Now links to /about page instead of #about anchor */}
// //           <li><Link href="/about">About</Link></li>
// //           <li><a href="#services">Services</a></li>
// //           <li><a href="#projects">Projects</a></li>
// //           <li><Link href="/contact" className="nav-cta">Contact</Link></li>
// //         </ul>
// //         <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
// //           <span></span><span></span><span></span>
// //         </button>
// //       </nav>

// //       {/* MOBILE MENU */}
// //       <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
// //         <Link href="/" onClick={() => setMenuOpen(false)}>Home</Link>
// //         {/* ✅ FIXED: Mobile menu also links to /about page */}
// //         <Link href="/about" onClick={() => setMenuOpen(false)}>About</Link>
// //         <a href="#services" onClick={() => setMenuOpen(false)}>Services</a>
// //         <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
// //         <Link href="/contact" className="mob-cta" onClick={() => setMenuOpen(false)}>Contact</Link>
// //       </div>

// //       {/* HERO */}
// //       <section className="hero" id="home">
// //         <div className="hero-content">
// //           <div className="hero-badge">🚀 Innovative IT Solutions</div>
// //           <h1>
// //             Powerful Digital<br />
// //             Solutions for<br />
// //             <span className="highlight">Your Business</span>
// //           </h1>
// //           <p>
// //             HAK Projects delivers high-quality, cutting-edge web development,
// //             mobile apps, and cloud solutions to help your business grow and
// //             thrive in the digital era.
// //           </p>
// //           <div className="hero-btns">
// //             <a href="#projects" className="btn-primary">View Our Projects</a>
// //             <a href="#contact" className="btn-outline">Get In Touch</a>
// //           </div>
// //         </div>

// //         <div className="hero-visual">
// //           <div className="hero-card">
// //             <div className="card-stat">
// //               <div className="stat-item">
// //                 <div className="stat-num">50+</div>
// //                 <div className="stat-label">Projects Done</div>
// //               </div>
// //               <div className="stat-item">
// //                 <div className="stat-num">30+</div>
// //                 <div className="stat-label">Happy Clients</div>
// //               </div>
// //               <div className="stat-item">
// //                 <div className="stat-num">5+</div>
// //                 <div className="stat-label">Years Exp.</div>
// //               </div>
// //             </div>
// //             <div className="card-bar">
// //               <div className="bar-label"><span>Web Development</span><span>95%</span></div>
// //               <div className="bar-track"><div className="bar-fill" style={{width:'95%'}}></div></div>
// //             </div>
// //             <div className="card-bar">
// //               <div className="bar-label"><span>Mobile Apps</span><span>88%</span></div>
// //               <div className="bar-track"><div className="bar-fill" style={{width:'88%'}}></div></div>
// //             </div>
// //             <div className="card-bar">
// //               <div className="bar-label"><span>Cloud Solutions</span><span>80%</span></div>
// //               <div className="bar-track"><div className="bar-fill" style={{width:'80%'}}></div></div>
// //             </div>
// //             <div className="card-bar">
// //               <div className="bar-label"><span>UI/UX Design</span><span>92%</span></div>
// //               <div className="bar-track"><div className="bar-fill" style={{width:'92%'}}></div></div>
// //             </div>
// //           </div>
// //         </div>
// //       </section>

// //       {/* ABOUT */}
// //       <section className="section" id="about">
// //         <div className="about-grid">
// //           <div className="about-text">
// //             <span className="section-label">About Us</span>
// //             <h2 className="section-title">We Build Digital Experiences That Matter</h2>
// //             <p>
// //               At HAK Projects, we are passionate about delivering innovative IT solutions
// //               that transform businesses. Our team of skilled developers, designers, and
// //               strategists work together to create products that truly make a difference.
// //             </p>
// //             <p>
// //               We are a software development team with proven expertise in web development,
// //               ERP, CRM, mobile applications, digital marketing, and training. We have been
// //               serving financial institutions and companies of all sizes since our founding.
// //             </p>
// //             {/* ✅ FIXED: "Work With Us" button also goes to /about page */}
// //             <Link href="/about" className="btn-primary" style={{display:'inline-block', marginTop:'1rem'}}>
// //               Learn More About Us
// //             </Link>
// //           </div>

// //           <div className="services-grid" id="services">
// //             {[
// //               { icon: '🌐', title: 'Web Development', desc: 'We design and develop fast, responsive, and SEO-friendly websites tailored to your business needs.' },
// //               { icon: '📱', title: 'Mobile App Dev', desc: 'We build feature-rich, high-performance mobile apps to keep your business connected anytime, anywhere.' },
// //               { icon: '🗄️', title: 'ERP Solutions', desc: 'Our custom ERP solutions streamline operations, enhance productivity, and drive business growth.' },
// //               { icon: '☁️', title: 'AWS Cloud', desc: 'We leverage AWS cloud infrastructure to deliver secure, scalable, and reliable cloud solutions.' },
// //             ].map((s, i) => (
// //               <div className="service-card" key={i}>
// //                 <div className="service-icon">{s.icon}</div>
// //                 <h3>{s.title}</h3>
// //                 <p>{s.desc}</p>
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //       {/* PROJECTS */}
// //       <section className="section projects-bg" id="projects">
// //         <div className="projects-header">
// //           <span className="section-label">Our Work</span>
// //           <h2 className="section-title">Projects We're Proud Of</h2>
// //         </div>
// //         <div className="projects-grid">
// //           {[
// //             { img: 'project-img-1', icon: '🛒', tag: 'E-Commerce', title: 'HAK Shop Platform', desc: 'Full-featured online store with inventory management and payment gateway.' },
// //             { img: 'project-img-2', icon: '📊', tag: 'ERP System', title: 'HAK ERP Dashboard', desc: 'Comprehensive ERP system for manpower, attendance, and payroll management.' },
// //             { img: 'project-img-3', icon: '🏦', tag: 'FinTech', title: 'Invoice Pro', desc: 'Automated invoicing system with GST compliance for financial businesses.' },
// //             { img: 'project-img-4', icon: '📱', tag: 'Mobile App', title: 'HAK Connect App', desc: 'Cross-platform mobile app keeping businesses connected in real time.' },
// //             { img: 'project-img-5', icon: '🎨', tag: 'UI/UX', title: 'Brand Identity Kit', desc: 'Complete brand identity and design system for a growing startup.' },
// //             { img: 'project-img-6', icon: '☁️', tag: 'Cloud', title: 'AWS Migration', desc: 'Seamless cloud migration delivering 60% cost reduction for the client.' },
// //           ].map((p, i) => (
// //             <div className="project-card" key={i}>
// //               <div className={`project-img ${p.img}`}>
// //                 <span style={{fontSize:'3rem'}}>{p.icon}</span>
// //               </div>
// //               <div className="project-info">
// //                 <span className="project-tag">{p.tag}</span>
// //                 <h3>{p.title}</h3>
// //                 <p>{p.desc}</p>
// //               </div>
// //             </div>
// //           ))}
// //         </div>
// //       </section>

// //       {/* TECH STACK */}
// //       <section className="section tech-section">
// //         <span className="section-label">Tech Stack</span>
// //         <h2 className="section-title">Tools & Technologies We Use</h2>
// //         <div className="tech-grid">
// //           {[
// //             { icon: '⚛️', name: 'React' },
// //             { icon: '🔺', name: 'Next.js' },
// //             { icon: '🟦', name: 'TypeScript' },
// //             { icon: '🟩', name: 'Node.js' },
// //             { icon: '🐘', name: 'PHP / Laravel' },
// //             { icon: '🐬', name: 'MySQL' },
// //             { icon: '🍃', name: 'MongoDB' },
// //             { icon: '☁️', name: 'AWS' },
// //             { icon: '🐳', name: 'Docker' },
// //             { icon: '📱', name: 'React Native' },
// //             { icon: '🎨', name: 'Tailwind CSS' },
// //             { icon: '🐍', name: 'Python' },
// //           ].map((t, i) => (
// //             <div className="tech-pill" key={i}>
// //               <span>{t.icon}</span> {t.name}
// //             </div>
// //           ))}
// //         </div>
// //       </section>

// //       {/* FOOTER */}
// //       <footer id="contact">
// //         <div className="footer-brand">
// //           <Link href="/" className="nav-logo" style={{textDecoration:'none'}}>HAK <span style={{color:'var(--accent)'}}>Projects</span></Link>
// //           <p>
// //             We provide cutting-edge IT solutions to help businesses grow
// //             and succeed in the digital world. Let's build something great together.
// //           </p>
// //         </div>
// //         <div className="footer-col">
// //           <h4>IT Solutions</h4>
// //           <ul>
// //             <li><a href="#services">Web Development</a></li>
// //             <li><a href="#services">ERP Dashboard</a></li>
// //             <li><a href="#services">Mobile Apps</a></li>
// //             <li><a href="#services">AWS Cloud</a></li>
// //           </ul>
// //         </div>
// //         <div className="footer-col">
// //           <h4>Quick Links</h4>
// //           <ul>
// //             <li><Link href="/">Home</Link></li>
// //             {/* ✅ FIXED: Footer About link also goes to /about page */}
// //             <li><Link href="/about">About Us</Link></li>
// //             <li><a href="#projects">Projects</a></li>
// //             <li><a href="#contact">Contact Us</a></li>
// //           </ul>
// //         </div>
// //         <div className="footer-col">
// //           <h4>Newsletter</h4>
// //           <p style={{color:'var(--muted)', fontSize:'0.85rem', marginBottom:'1rem'}}>
// //             Subscribe to receive updates on new projects and innovations.
// //           </p>
// //           <input
// //             type="email" placeholder="Enter your email"
// //             style={{
// //               width:'100%', padding:'0.6rem 1rem',
// //               background:'var(--card)', border:'1px solid var(--border)',
// //               borderRadius:'8px', color:'var(--white)',
// //               fontSize:'0.85rem', outline:'none', marginBottom:'0.5rem'
// //             }}
// //           />
// //           <button className="btn-primary" style={{width:'100%', padding:'0.6rem'}}>
// //             Subscribe
// //           </button>
// //         </div>
// //       </footer>
// //       <div className="footer-bottom">
// //         <span>© 2025 HAK Projects. All rights reserved.</span>
// //         <span>Built with ❤️ using Next.js</span>
// //       </div>
// //     </>
// //   );
// // }

// 'use client';
// import { useState, useEffect } from 'react';
// import Link from 'next/link';

// export default function Home() {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => setScrolled(window.scrollY > 50);
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   return (
//     <>
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&family=Outfit:wght@300;400;500;600&display=swap');

//         *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

//         :root {
//           --bg:       #f5f6fa;
//           --white:    #ffffff;
//           --accent:   #2563eb;
//           --accent2:  #3b82f6;
//           --accent-light: #eff6ff;
//           --accent-mid:   #bfdbfe;
//           --orange:   #f97316;
//           --orange-light: #fff7ed;
//           --ink:      #0f172a;
//           --ink2:     #1e293b;
//           --muted:    #64748b;
//           --muted2:   #94a3b8;
//           --border:   #e2e8f0;
//           --border2:  #cbd5e1;
//           --shadow:   0 1px 3px rgba(15,23,42,0.08);
//           --shadow-md:0 4px 16px rgba(15,23,42,0.08);
//           --shadow-lg:0 12px 40px rgba(15,23,42,0.10);
//           --shadow-xl:0 24px 64px rgba(15,23,42,0.12);
//         }

//         html { scroll-behavior: smooth; }
//         body { font-family: 'Outfit', sans-serif; background: var(--bg); color: var(--ink); overflow-x: hidden; line-height: 1.6; }

//         /* ══ NAV ══ */
//         nav {
//           position: fixed; top: 0; left: 0; right: 0; z-index: 100;
//           height: 64px; padding: 0 6%;
//           display: flex; align-items: center; justify-content: space-between;
//           background: ${scrolled ? 'rgba(245,246,250,0.96)' : 'var(--white)'};
//           backdrop-filter: ${scrolled ? 'blur(20px)' : 'none'};
//           border-bottom: 1px solid var(--border);
//           box-shadow: ${scrolled ? 'var(--shadow)' : 'none'};
//           transition: all 0.3s;
//         }
//         .nav-logo { font-family:'Plus Jakarta Sans',sans-serif; font-size:1.25rem; font-weight:800; color:var(--ink); text-decoration:none; letter-spacing:-0.4px; }
//         .nav-logo .ac { color:var(--accent); }
//         .nav-links { display:flex; gap:0.2rem; list-style:none; align-items:center; }
//         .nav-links a { color:var(--muted); text-decoration:none; font-size:0.875rem; font-weight:500; padding:0.4rem 0.85rem; border-radius:8px; transition:all 0.2s; }
//         .nav-links a:hover { color:var(--ink); background:var(--bg); }
//         .nav-cta { background:var(--accent)!important; color:#fff!important; padding:0.45rem 1.2rem!important; border-radius:8px; font-weight:600!important; }
//         .nav-cta:hover { background:var(--ink)!important; }
//         .hamburger { display:none; flex-direction:column; gap:4px; cursor:pointer; background:none; border:none; }
//         .hamburger span { display:block; width:22px; height:2px; background:var(--ink); border-radius:2px; }
//         .mobile-menu { display:none; position:fixed; top:64px; left:0; right:0; background:var(--white); border-bottom:1px solid var(--border); padding:1.2rem 6%; z-index:99; flex-direction:column; gap:0.3rem; box-shadow:var(--shadow-lg); }
//         .mobile-menu.open { display:flex; }
//         .mobile-menu a { color:var(--muted); text-decoration:none; font-size:0.95rem; font-weight:500; padding:0.6rem 0.8rem; border-radius:8px; transition:all 0.2s; }
//         .mobile-menu a:hover { color:var(--ink); background:var(--bg); }
//         .mob-cta { background:var(--accent)!important; color:#fff!important; text-align:center; margin-top:0.4rem; font-weight:600!important; border-radius:8px; }

//         /* ══ HERO ══ */
//         .hero {
//           min-height: 88vh; padding: 100px 6% 70px;
//           display: grid; grid-template-columns: 1fr 1fr;
//           align-items: center; gap: 4rem;
//           background: var(--white); position: relative; overflow: hidden;
//         }
//         .hero::after {
//           content:''; position:absolute; top:0; right:0; bottom:0; width:46%;
//           background: linear-gradient(135deg,#eff6ff 0%,#dbeafe 100%);
//           z-index:0; border-radius:0 0 0 80px;
//         }
//         .hero-content { position:relative; z-index:1; }
//         .hero-visual  { position:relative; z-index:1; }

//         .eyebrow { display:inline-block; font-size:0.72rem; font-weight:700; text-transform:uppercase; letter-spacing:2px; color:var(--accent); margin-bottom:1.2rem; background:var(--accent-light); padding:5px 12px; border-radius:6px; border:1px solid var(--accent-mid); }

//         .hero h1 { font-family:'Plus Jakarta Sans',sans-serif; font-size:clamp(2.6rem,5vw,4rem); font-weight:900; line-height:1.08; letter-spacing:-2px; color:var(--ink); margin-bottom:1.4rem; }

//         .hero p { color:var(--muted); font-size:0.97rem; line-height:1.8; max-width:440px; margin-bottom:2.2rem; }

//         .hero-btns { display:flex; gap:1rem; flex-wrap:wrap; }

//         .btn-primary { background:var(--accent); color:#fff; padding:0.78rem 1.8rem; border-radius:10px; font-weight:700; font-size:0.9rem; text-decoration:none; border:none; cursor:pointer; transition:all 0.22s; display:inline-block; font-family:'Outfit',sans-serif; box-shadow:0 4px 16px rgba(37,99,235,0.25); }
//         .btn-primary:hover { background:var(--ink); transform:translateY(-2px); box-shadow:0 8px 24px rgba(15,23,42,0.2); }

//         .btn-outline { background:transparent; color:var(--ink2); padding:0.78rem 1.8rem; border-radius:10px; font-weight:600; font-size:0.9rem; text-decoration:none; border:1.5px solid var(--border2); cursor:pointer; transition:all 0.22s; display:inline-block; }
//         .btn-outline:hover { border-color:var(--accent); color:var(--accent); transform:translateY(-2px); }

//         .hero-card { background:var(--white); border-radius:22px; padding:2rem; box-shadow:var(--shadow-xl); border:1.5px solid var(--border); }
//         .hero-stats-row { display:grid; grid-template-columns:repeat(3,1fr); gap:1rem; margin-bottom:1.5rem; padding-bottom:1.5rem; border-bottom:1px solid var(--border); }
//         .h-stat { text-align:center; }
//         .h-stat .num { font-family:'Plus Jakarta Sans',sans-serif; font-size:1.7rem; font-weight:800; color:var(--ink); letter-spacing:-1px; }
//         .h-stat .num span { color:var(--accent); }
//         .h-stat .lbl { font-size:0.68rem; color:var(--muted); text-transform:uppercase; letter-spacing:0.8px; font-weight:600; }
//         .h-bars { display:flex; flex-direction:column; gap:0.7rem; }
//         .h-bar-row { display:flex; flex-direction:column; gap:4px; }
//         .h-bar-top { display:flex; justify-content:space-between; font-size:0.8rem; color:var(--ink2); font-weight:500; }
//         .h-bar-top .pct { color:var(--accent); font-weight:700; }
//         .h-bar-track { background:var(--accent-light); border-radius:100px; height:7px; overflow:hidden; }
//         .h-bar-fill { height:100%; border-radius:100px; background:linear-gradient(90deg,var(--accent),var(--accent2)); animation:fillBar 1.5s cubic-bezier(0.4,0,0.2,1) forwards; }
//         @keyframes fillBar { from{width:0;} }

//         /* ══ ABOUT ══ */
//         .about-section { padding:90px 6%; background:var(--bg); }
//         .about-two-col { display:grid; grid-template-columns:1fr 1fr; gap:4.5rem; }
//         .section-eyebrow { font-size:0.72rem; font-weight:700; text-transform:uppercase; letter-spacing:2px; color:var(--accent); margin-bottom:0.8rem; display:flex; align-items:center; gap:8px; }
//         .section-eyebrow::before { content:''; width:18px; height:2px; background:var(--accent); border-radius:2px; }
//         .section-h2 { font-family:'Plus Jakarta Sans',sans-serif; font-size:clamp(1.7rem,3vw,2.4rem); font-weight:800; letter-spacing:-1px; line-height:1.15; color:var(--ink); margin-bottom:1rem; }
//         .about-left p, .about-right-top { color:var(--muted); font-size:0.93rem; line-height:1.8; margin-bottom:1rem; }
//         .svc-grid4 { display:grid; grid-template-columns:1fr 1fr; gap:1rem; margin-top:1.5rem; }
//         .svc-card { background:var(--white); border:1.5px solid var(--border); border-radius:14px; padding:1.4rem; transition:all 0.25s; cursor:default; position:relative; }
//         .svc-card:hover { border-color:var(--accent-mid); transform:translateY(-3px); box-shadow:var(--shadow-md); }
//         .svc-star { position:absolute; top:1rem; right:1rem; font-size:0.85rem; color:var(--muted2); }
//         .svc-ico { width:40px; height:40px; border-radius:10px; background:var(--accent-light); border:1px solid var(--accent-mid); display:flex; align-items:center; justify-content:center; font-size:1.15rem; margin-bottom:0.9rem; }
//         .svc-card h3 { font-family:'Plus Jakarta Sans',sans-serif; font-size:0.9rem; font-weight:700; color:var(--ink); margin-bottom:0.4rem; }
//         .svc-card p { color:var(--muted); font-size:0.8rem; line-height:1.6; }

//         /* ══ ERP PROMO ══ */
//         .erp-promo { padding:80px 6%; background:var(--white); }
//         .erp-box { background:linear-gradient(135deg,#f0f9ff,#eff6ff); border-radius:28px; padding:3rem 3.5rem; border:1.5px solid var(--accent-mid); }
//         .erp-box h2 { font-family:'Plus Jakarta Sans',sans-serif; font-size:clamp(1.8rem,3vw,2.6rem); font-weight:800; letter-spacing:-1.5px; line-height:1.15; color:var(--ink); margin-bottom:0.8rem; max-width:520px; }
//         .erp-box > p { color:var(--muted); font-size:0.93rem; line-height:1.8; max-width:520px; margin-bottom:2rem; }
//         .erp-mock { background:var(--white); border-radius:16px; border:1.5px solid var(--border); padding:1.5rem; box-shadow:var(--shadow-lg); display:grid; grid-template-columns:repeat(4,1fr); gap:1rem; }
//         .em-stat { background:var(--bg); border-radius:10px; padding:1rem; text-align:center; }
//         .em-stat .en { font-family:'Plus Jakarta Sans',sans-serif; font-size:1.4rem; font-weight:800; color:var(--accent); }
//         .em-stat .el { font-size:0.68rem; color:var(--muted); text-transform:uppercase; letter-spacing:0.5px; margin-top:3px; }
//         .em-bar { background:var(--bg); border-radius:10px; padding:1rem; grid-column:span 2; }
//         .em-bar .bt { font-size:0.75rem; font-weight:600; color:var(--ink2); margin-bottom:0.8rem; }
//         .bar-row { margin-bottom:8px; }
//         .br-top { display:flex; justify-content:space-between; font-size:0.72rem; margin-bottom:3px; }
//         .br-track { background:var(--border); border-radius:100px; height:7px; overflow:hidden; }
//         .br-fill { height:100%; border-radius:100px; }

//         /* ══ PROJECTS ══ */
//         .projects-sec { padding:80px 6%; background:var(--bg); }
//         .sec-header-row { display:flex; align-items:flex-end; justify-content:space-between; margin-bottom:2rem; }
//         .proj-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:1.2rem; }
//         .proj-card { background:var(--white); border:1.5px solid var(--border); border-radius:18px; overflow:hidden; transition:all 0.25s; cursor:pointer; }
//         .proj-card:hover { transform:translateY(-5px); box-shadow:var(--shadow-lg); border-color:var(--accent-mid); }
//         .proj-thumb { height:155px; display:flex; align-items:center; justify-content:center; font-size:2.8rem; }
//         .pt1{background:linear-gradient(135deg,#dbeafe,#bfdbfe);} .pt2{background:linear-gradient(135deg,#dcfce7,#bbf7d0);} .pt3{background:linear-gradient(135deg,#fef9c3,#fef08a);} .pt4{background:linear-gradient(135deg,#ede9fe,#ddd6fe);} .pt5{background:linear-gradient(135deg,#fce7f3,#fbcfe8);} .pt6{background:linear-gradient(135deg,#ffedd5,#fed7aa);}
//         .proj-body { padding:1.2rem; }
//         .proj-tag { display:inline-block; font-size:0.65rem; font-weight:700; text-transform:uppercase; letter-spacing:1px; background:var(--accent-light); color:var(--accent); padding:3px 10px; border-radius:100px; margin-bottom:0.5rem; }
//         .proj-body h3 { font-family:'Plus Jakarta Sans',sans-serif; font-size:0.95rem; font-weight:700; color:var(--ink); margin-bottom:0.3rem; }
//         .proj-body p { color:var(--muted); font-size:0.8rem; line-height:1.55; }

//         /* ══ ERP DETAIL ══ */
//         .erp-detail { padding:80px 6%; background:var(--white); }
//         .erp-detail-grid { display:grid; grid-template-columns:1fr 1fr; gap:4rem; align-items:center; }
//         .erp-detail h2 { font-family:'Plus Jakarta Sans',sans-serif; font-size:clamp(1.8rem,3vw,2.8rem); font-weight:800; letter-spacing:-1.5px; line-height:1.12; color:var(--ink); margin-bottom:1.2rem; }
//         .erp-3col { display:grid; grid-template-columns:repeat(3,1fr); gap:1rem; margin-bottom:1.5rem; }
//         .e3c { background:var(--bg); border-radius:12px; padding:1rem; border:1px solid var(--border); }
//         .e3c .ec-lbl { font-size:0.68rem; font-weight:700; text-transform:uppercase; letter-spacing:1px; color:var(--muted); margin-bottom:0.4rem; }
//         .e3c p { font-size:0.8rem; color:var(--ink2); line-height:1.55; }
//         .erp-vis { background:linear-gradient(135deg,#f0f9ff,#e0f2fe); border-radius:20px; padding:2rem; border:1.5px solid var(--accent-mid); box-shadow:var(--shadow-lg); }
//         .erp-vis .vt { font-family:'Plus Jakarta Sans',sans-serif; font-size:0.85rem; font-weight:700; color:var(--ink2); margin-bottom:1.2rem; }
//         .vis-stats { display:grid; grid-template-columns:repeat(3,1fr); gap:0.8rem; margin-bottom:1rem; }
//         .vs-item { background:var(--white); border-radius:10px; padding:0.9rem; text-align:center; box-shadow:var(--shadow); }
//         .vs-item .vn { font-family:'Plus Jakarta Sans',sans-serif; font-size:1.2rem; font-weight:800; color:var(--accent); }
//         .vs-item .vl { font-size:0.65rem; color:var(--muted); text-transform:uppercase; letter-spacing:0.5px; }
//         .vis-bars { background:var(--white); border-radius:12px; padding:1rem; box-shadow:var(--shadow); }

//         /* ══ INVOICE ══ */
//         .invoice-sec { padding:80px 6%; background:var(--bg); }
//         .invoice-grid { display:grid; grid-template-columns:1fr 1fr; gap:4rem; align-items:center; }
//         .invoice-grid h2 { font-family:'Plus Jakarta Sans',sans-serif; font-size:clamp(1.8rem,3vw,2.8rem); font-weight:800; letter-spacing:-1.5px; line-height:1.12; color:var(--ink); margin-bottom:1.2rem; }
//         .invoice-grid p { color:var(--muted); font-size:0.93rem; line-height:1.8; margin-bottom:1rem; }
//         .inv-card { background:var(--white); border-radius:20px; border:1.5px solid var(--border); padding:2rem; box-shadow:var(--shadow-lg); }
//         .inv-head { display:flex; justify-content:space-between; align-items:center; margin-bottom:1.5rem; padding-bottom:1rem; border-bottom:1px solid var(--border); }
//         .inv-title { font-family:'Plus Jakarta Sans',sans-serif; font-size:1rem; font-weight:700; color:var(--ink); }
//         .inv-badge { background:#dcfce7; color:#166534; font-size:0.7rem; font-weight:700; padding:4px 12px; border-radius:100px; }
//         .inv-row { display:flex; justify-content:space-between; padding:0.6rem 0; border-bottom:1px solid var(--border); font-size:0.83rem; }
//         .inv-row:last-child{border-bottom:none;}
//         .inv-row .lbl { color:var(--muted); }
//         .inv-row .val { font-weight:600; color:var(--ink); }
//         .inv-row .val.ac { color:var(--accent); }
//         .inv-row .val.gr { color:#16a34a; }
//         .inv-total { background:var(--accent-light); border-radius:10px; padding:1rem; margin-top:1rem; display:flex; justify-content:space-between; align-items:center; }
//         .inv-total .tl { font-size:0.85rem; font-weight:600; color:var(--ink2); }
//         .inv-total .tv { font-family:'Plus Jakarta Sans',sans-serif; font-size:1.3rem; font-weight:800; color:var(--accent); }

//         /* ══ TECH ══ */
//         .tech-sec { padding:80px 6%; background:var(--white); text-align:center; }
//         .tech-sec h2 { font-family:'Plus Jakarta Sans',sans-serif; font-size:clamp(1.8rem,3vw,2.6rem); font-weight:800; letter-spacing:-1.5px; color:var(--ink); margin-bottom:0.8rem; }
//         .tech-sec > p { color:var(--muted); font-size:0.93rem; max-width:540px; margin:0 auto 2.5rem; line-height:1.7; }
//         .tech-grid { display:flex; flex-wrap:wrap; justify-content:center; gap:0.8rem; }
//         .tech-pill { display:flex; align-items:center; gap:8px; background:var(--bg); border:1.5px solid var(--border); border-radius:100px; padding:0.55rem 1.1rem; font-size:0.83rem; font-weight:600; color:var(--ink2); transition:all 0.2s; cursor:default; }
//         .tech-pill:hover { border-color:var(--accent); color:var(--accent); background:var(--accent-light); transform:translateY(-2px); }

//         /* ══ FOOTER ══ */
//         footer { background:var(--ink); padding:3.5rem 6%; display:grid; grid-template-columns:2fr 1fr 1fr 1fr; gap:2.5rem; }
//         .footer-logo { font-family:'Plus Jakarta Sans',sans-serif; font-size:1.2rem; font-weight:800; color:#fff; text-decoration:none; letter-spacing:-0.3px; }
//         .footer-logo .ac { color:var(--accent2); }
//         .footer-brand p { color:rgba(255,255,255,0.42); font-size:0.86rem; line-height:1.75; margin-top:0.8rem; max-width:240px; }
//         .footer-social { display:flex; gap:0.6rem; margin-top:1.2rem; }
//         .footer-social a { width:34px; height:34px; border-radius:8px; background:rgba(255,255,255,0.08); border:1px solid rgba(255,255,255,0.12); display:flex; align-items:center; justify-content:center; color:rgba(255,255,255,0.5); font-size:0.78rem; font-weight:600; text-decoration:none; transition:all 0.2s; }
//         .footer-social a:hover { background:var(--accent); border-color:var(--accent); color:#fff; }
//         .footer-col h4 { font-family:'Plus Jakarta Sans',sans-serif; font-size:0.75rem; font-weight:700; text-transform:uppercase; letter-spacing:1.5px; color:rgba(255,255,255,0.85); margin-bottom:1.1rem; }
//         .footer-col ul { list-style:none; }
//         .footer-col ul li { margin-bottom:0.6rem; }
//         .footer-col ul a { color:rgba(255,255,255,0.42); text-decoration:none; font-size:0.86rem; transition:color 0.2s; }
//         .footer-col ul a:hover { color:rgba(255,255,255,0.88); }
//         .nl-p { color:rgba(255,255,255,0.38); font-size:0.82rem; margin-bottom:0.9rem; line-height:1.65; }
//         .nl-input { width:100%; padding:0.62rem 1rem; background:rgba(255,255,255,0.07); border:1px solid rgba(255,255,255,0.13); border-radius:8px; color:#fff; font-size:0.83rem; outline:none; margin-bottom:0.55rem; font-family:'Outfit',sans-serif; transition:border-color 0.2s; }
//         .nl-input::placeholder { color:rgba(255,255,255,0.28); }
//         .nl-input:focus { border-color:var(--accent2); }
//         .nl-btn { width:100%; padding:0.62rem; background:var(--accent2); color:#fff; border:none; border-radius:8px; font-weight:700; font-size:0.83rem; cursor:pointer; font-family:'Outfit',sans-serif; transition:background 0.2s; }
//         .nl-btn:hover { background:var(--accent); }
//         .footer-bottom { background:rgba(0,0,0,0.25); border-top:1px solid rgba(255,255,255,0.06); padding:1.1rem 6%; display:flex; justify-content:space-between; align-items:center; color:rgba(255,255,255,0.28); font-size:0.78rem; }

//         /* ══ RESPONSIVE ══ */
//         @media(max-width:900px){
//           .hero{grid-template-columns:1fr;padding-top:90px;text-align:center;} .hero::after{display:none;} .hero p{margin:0 auto 2rem;} .hero-btns{justify-content:center;} .hero-visual{display:none;}
//           .about-two-col{grid-template-columns:1fr;gap:2.5rem;}
//           .erp-detail-grid{grid-template-columns:1fr;}
//           .invoice-grid{grid-template-columns:1fr;}
//           .proj-grid{grid-template-columns:1fr 1fr;}
//           footer{grid-template-columns:1fr 1fr;gap:2rem;}
//           .nav-links{display:none;} .hamburger{display:flex;}
//           .erp-mock{grid-template-columns:1fr 1fr;}
//         }
//         @media(max-width:600px){
//           .proj-grid{grid-template-columns:1fr;} .svc-grid4{grid-template-columns:1fr;} .hero-stats-row{grid-template-columns:repeat(3,1fr);} footer{grid-template-columns:1fr;} .footer-bottom{flex-direction:column;gap:0.4rem;text-align:center;} .erp-3col{grid-template-columns:1fr;} .erp-box{padding:2rem 1.5rem;} .sec-header-row{flex-direction:column;align-items:flex-start;gap:0.5rem;} .erp-mock{grid-template-columns:1fr;}
//         }
//       `}</style>

//       {/* ══ NAV ══ */}
//       <nav>
//         <Link href="/" className="nav-logo">HAK <span className="ac">Projects</span></Link>
//         <ul className="nav-links">
//           <li><Link href="/">Home</Link></li>
//           <li><Link href="/about">About</Link></li>
//           <li><Link href="/service">Services</Link></li>
//           <li><Link href="/projects">Projects</Link></li>
//           <li><Link href="/contact" className="nav-cta">Contact</Link></li>
//         </ul>
//         <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
//           <span /><span /><span />
//         </button>
//       </nav>
//       <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
//         <Link href="/" onClick={() => setMenuOpen(false)}>Home</Link>
//         <Link href="/about" onClick={() => setMenuOpen(false)}>About</Link>
//         <Link href="/service" onClick={() => setMenuOpen(false)}>Services</Link>
//         <Link href="/projects" onClick={() => setMenuOpen(false)}>Projects</Link>
//         <Link href="/contact" className="mob-cta" onClick={() => setMenuOpen(false)}>Contact</Link>
//       </div>

//       {/* ══ HERO ══ */}
//       <section className="hero" id="home">
//         <div className="hero-content">
//           <span className="eyebrow">HAK Projects Technologies</span>
//           <h1>Excellent IT<br />Services for Your<br />Success</h1>
//           <p>We provide innovative, high-quality custom IT solutions to help your business transform, grow and thrive in the digital era.</p>
//           <div className="hero-btns">
//             <Link href="/contact" className="btn-primary">Get in Touch</Link>
//             <Link href="/projects" className="btn-outline">View Projects</Link>
//           </div>
//         </div>
//         <div className="hero-visual">
//           <div className="hero-card">
//             <div className="hero-stats-row">
//               {[['50','Projects'],['30','Clients'],['5','Yrs Exp']].map(([n,l])=>(
//                 <div className="h-stat" key={l}><div className="num">{n}<span>+</span></div><div className="lbl">{l}</div></div>
//               ))}
//             </div>
//             <div className="h-bars">
//               {[['Web Development','95%'],['Mobile Apps','88%'],['Cloud Solutions','80%'],['UI/UX Design','92%']].map(([label,pct])=>(
//                 <div className="h-bar-row" key={label}>
//                   <div className="h-bar-top"><span>{label}</span><span className="pct">{pct}</span></div>
//                   <div className="h-bar-track"><div className="h-bar-fill" style={{width:pct}} /></div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ══ ABOUT + SERVICES ══ */}
//       <section className="about-section" id="about">
//         <div className="about-two-col">
//           <div>
//             <div className="section-eyebrow">About Us</div>
//             <h2 className="section-h2">We Build Digital Experiences That Matter</h2>
//             <p style={{color:'var(--muted)',fontSize:'0.93rem',lineHeight:'1.8',marginBottom:'1rem'}}>At HAK Projects, we are passionate about delivering innovative IT solutions that transform businesses. Our team of skilled developers, designers, and strategists work together to create products that truly make a difference.</p>
//             <p style={{color:'var(--muted)',fontSize:'0.93rem',lineHeight:'1.8',marginBottom:'1.5rem'}}>We serve financial institutions and companies of all sizes with expertise in web, ERP, CRM, mobile, and digital marketing.</p>
//             <Link href="/about" className="btn-primary">Learn More About Us</Link>
//           </div>
//           <div>
//             <p className="about-right-top" style={{color:'var(--muted)',fontSize:'0.93rem',lineHeight:'1.8',marginBottom:'0.5rem'}}>We are a software development team with proven expertise in web development, ERP, CRM, mobile applications, digital marketing, and training. We have been serving financial institutions and companies of all sizes since our founding.</p>
//             <div className="svc-grid4" id="services">
//               {[
//                 {icon:'🌐',title:'Web Development',desc:'We design and develop fast, responsive, and SEO-friendly websites tailored to your business needs.'},
//                 {icon:'🗄️',title:'ERP Solutions',desc:'Our custom ERP solutions streamline operations, enhance productivity, and drive business growth.'},
//                 {icon:'📱',title:'Mobile App Development',desc:'We build feature-rich, high-performance mobile apps to keep your business connected anytime, anywhere.'},
//                 {icon:'☁️',title:'AWS Cloud',desc:'We leverage AWS cloud infrastructure to deliver secure, scalable, and reliable cloud solutions for your business.'},
//               ].map((s,i)=>(
//                 <div className="svc-card" key={i}>
//                   <span className="svc-star">☆</span>
//                   <div className="svc-ico">{s.icon}</div>
//                   <h3>{s.title}</h3>
//                   <p>{s.desc}</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ══ ERP PROMO ══ */}
//       <section className="erp-promo">
//         <div className="erp-box">
//           <h2>With just two clicks, unlock smart, seamless ERP solutions by HAK Projects.</h2>
//           <p>With HAK Projects ERP, generating professional quotations in effectively — select your products, and our intuitive system takes care of the rest.</p>
//           <div className="erp-mock">
//             {[['124','Employees'],['98%','Attendance'],['PKR 2.4M','Payroll'],['12','Departments']].map(([n,l])=>(
//               <div className="em-stat" key={l}><div className="en">{n}</div><div className="el">{l}</div></div>
//             ))}
//             <div className="em-bar">
//               <div className="bt">Performance Overview</div>
//               {[['Web Dev','78%','#2563eb'],['Mobile','62%','#f97316'],['Cloud','88%','#10b981']].map(([l,w,c])=>(
//                 <div className="bar-row" key={l}>
//                   <div className="br-top"><span style={{color:'var(--ink2)',fontSize:'0.72rem',fontWeight:500}}>{l}</span><span style={{color:c,fontWeight:700,fontSize:'0.72rem'}}>{w}</span></div>
//                   <div className="br-track"><div className="br-fill" style={{width:w,background:c,height:'7px',borderRadius:'100px'}} /></div>
//                 </div>
//               ))}
//             </div>
//             <div className="em-bar">
//               <div className="bt">Monthly Summary</div>
//               {[['Revenue','82%','#2563eb'],['Expenses','55%','#f97316'],['Profit','68%','#10b981']].map(([l,w,c])=>(
//                 <div className="bar-row" key={l}>
//                   <div className="br-top"><span style={{color:'var(--ink2)',fontSize:'0.72rem',fontWeight:500}}>{l}</span><span style={{color:c,fontWeight:700,fontSize:'0.72rem'}}>{w}</span></div>
//                   <div className="br-track"><div className="br-fill" style={{width:w,background:c,height:'7px',borderRadius:'100px'}} /></div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ══ PROJECTS ══ */}
//       <section className="projects-sec" id="projects">
//         <div className="sec-header-row">
//           <div>
//             <div className="section-eyebrow">Our Work</div>
//             <h2 className="section-h2">Built using our apps</h2>
//           </div>
//           <Link href="/projects" className="btn-outline" style={{whiteSpace:'nowrap'}}>View All →</Link>
//         </div>
//         <div className="proj-grid">
//           {[
//             {cls:'pt1',icon:'🛒',tag:'E-Commerce',title:'HAK Shop Platform',desc:'Full-featured online store with inventory management and payment gateway.'},
//             {cls:'pt2',icon:'📊',tag:'ERP System',title:'HAK ERP Dashboard',desc:'Comprehensive ERP system for manpower, attendance, and payroll management.'},
//             {cls:'pt3',icon:'🏦',tag:'FinTech',title:'Invoice Pro',desc:'Automated invoicing system with GST compliance for financial businesses.'},
//             {cls:'pt4',icon:'📱',tag:'Mobile App',title:'HAK Connect App',desc:'Cross-platform mobile app keeping businesses connected in real time.'},
//             {cls:'pt5',icon:'🎨',tag:'UI/UX',title:'Brand Identity Kit',desc:'Complete brand identity and design system for a growing startup.'},
//             {cls:'pt6',icon:'☁️',tag:'Cloud',title:'AWS Migration',desc:'Seamless cloud migration delivering 60% cost reduction for the client.'},
//           ].map((p,i)=>(
//             <div className="proj-card" key={i}>
//               <div className={`proj-thumb ${p.cls}`}><span>{p.icon}</span></div>
//               <div className="proj-body">
//                 <span className="proj-tag">{p.tag}</span>
//                 <h3>{p.title}</h3>
//                 <p>{p.desc}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* ══ ERP DETAIL ══ */}
//       <section className="erp-detail">
//         <div className="erp-detail-grid">
//           <div>
//             <div className="section-eyebrow">ERP Dashboard</div>
//             <h2>The ultimate ERP dashboard</h2>
//             <div className="erp-3col">
//               {[
//                 {lbl:'Overview',txt:'The Manpower Solutions Application is a cloud platform for planning, workforce allocation, tracking, and payroll across industries.'},
//                 {lbl:'Key Features',txt:'It includes modules for client management, job assignments, attendance, payroll, and compliance, ensuring streamlined HR operations.'},
//                 {lbl:'Impact',txt:'The system improves efficiency, reduces manual work, and ensures secure, accurate workforce handling through both web and mobile.'},
//               ].map(c=>(
//                 <div className="e3c" key={c.lbl}><div className="ec-lbl">{c.lbl}</div><p>{c.txt}</p></div>
//               ))}
//             </div>
//             <Link href="/service" className="btn-primary">Explore ERP Solutions</Link>
//           </div>
//           <div className="erp-vis">
//             <div className="vt">📊 ERP Live Dashboard</div>
//             <div className="vis-stats">
//               {[['248','Employees'],['98.2%','Attendance'],['PKR 3.1M','Payroll']].map(([n,l])=>(
//                 <div className="vs-item" key={l}><div className="vn">{n}</div><div className="vl">{l}</div></div>
//               ))}
//             </div>
//             <div className="vis-bars">
//               {[['Dept A','85%','#2563eb'],['Dept B','67%','#f97316'],['Dept C','92%','#10b981'],['Dept D','54%','#8b5cf6']].map(([d,w,c])=>(
//                 <div key={d} style={{marginBottom:'10px'}}>
//                   <div style={{display:'flex',justifyContent:'space-between',fontSize:'0.75rem',marginBottom:'4px'}}><span style={{color:'var(--ink2)',fontWeight:500}}>{d}</span><span style={{color:c,fontWeight:700}}>{w}</span></div>
//                   <div style={{background:'var(--bg)',borderRadius:'100px',height:'6px',overflow:'hidden'}}><div style={{width:w,height:'100%',borderRadius:'100px',background:c}} /></div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ══ INVOICE ══ */}
//       <section className="invoice-sec">
//         <div className="invoice-grid">
//           <div>
//             <div className="section-eyebrow">FinTech</div>
//             <h2>Integrated invoicing for Manpower</h2>
//             <p>HAK Projects provides a streamlined invoice counter system tailored specifically for Manpower. Each invoice is memory generated based on client-specific data, ensuring accuracy, clarity, and compliance with GST standards.</p>
//             <p>This solution eliminates complexity by offering a clean, professional format that simplifies billing processes. With personalized details and structured layout, businesses like Manpower can manage finances confidently and efficiently.</p>
//             <Link href="/service" className="btn-primary" style={{display:'inline-block',marginTop:'0.5rem'}}>Learn More</Link>
//           </div>
//           <div className="inv-card">
//             <div className="inv-head">
//               <div className="inv-title">Invoice #INV-2024-0089</div>
//               <span className="inv-badge">✓ Paid</span>
//             </div>
//             {[
//               ['Client','Manpower Solutions Ltd.',''],
//               ['Service','Web Development',''],
//               ['Duration','Jan 2024 – Mar 2024',''],
//               ['Subtotal','PKR 85,000','ac'],
//               ['GST (18%)','PKR 15,300',''],
//               ['Discount','– PKR 5,000','gr'],
//             ].map(([l,v,cls])=>(
//               <div className="inv-row" key={l}>
//                 <span className="lbl">{l}</span>
//                 <span className={`val ${cls}`}>{v}</span>
//               </div>
//             ))}
//             <div className="inv-total">
//               <span className="tl">Total Amount</span>
//               <span className="tv">PKR 95,300</span>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ══ TECH STACK ══ */}
//       <section className="tech-sec">
//         <div className="section-eyebrow" style={{justifyContent:'center'}}>Tech Stack</div>
//         <h2>Tools and Software for Web Application Development</h2>
//         <p>Our professional web development company has built many websites using various technologies that are integrated into our practices and capabilities.</p>
//         <div className="tech-grid">
//           {[['🌐','HTML5'],['🎨','CSS3'],['⚛️','React / Next.js'],['🟨','JavaScript'],['🟩','Node.js'],['🐘','Laravel'],['🐬','MySQL'],['☕','Java'],['🐍','Python'],['⚡','ReactJS'],['📱','React Native'],['🔷','TypeScript']].map(([icon,name])=>(
//             <div className="tech-pill" key={name}><span>{icon}</span>{name}</div>
//           ))}
//         </div>
//       </section>

//       {/* ══ FOOTER ══ */}
//       <footer id="contact">
//         <div className="footer-brand">
//           <Link href="/" className="footer-logo">HAK <span className="ac">Projects</span></Link>
//           <p>We provide cutting-edge IT solutions to help businesses grow and succeed in the digital world. Let's build something great together.</p>
//           <div className="footer-social">
//             {[['f','#'],['in','#'],['tw','#'],['yt','#']].map(([l,h])=>(
//               <a href={h} key={l}>{l}</a>
//             ))}
//           </div>
//         </div>
//         <div className="footer-col">
//           <h4>IT Solutions</h4>
//           <ul>
//             <li><Link href="/service">ERP Solutions</Link></li>
//             <li><Link href="/service">Web Development</Link></li>
//             <li><Link href="/service">Mobile Apps</Link></li>
//             <li><Link href="/service">AWS Cloud</Link></li>
//           </ul>
//         </div>
//         <div className="footer-col">
//           <h4>Quick Links</h4>
//           <ul>
//             <li><Link href="/">Home</Link></li>
//             <li><Link href="/about">About Us</Link></li>
//             <li><Link href="/projects">Projects</Link></li>
//             <li><Link href="/contact">Contact Us</Link></li>
//           </ul>
//         </div>
//         <div className="footer-col">
//           <h4>Newsletter</h4>
//           <p className="nl-p">Subscribe to receive updates on new projects and innovations.</p>
//           <input type="email" placeholder="Enter your email" className="nl-input" />
//           <button className="nl-btn">Subscribe</button>
//         </div>
//       </footer>
//       <div className="footer-bottom">
//         <span>© 2026 HAK Projects Technologies (Pvt.) Ltd. All rights reserved.</span>
//         <span>Built with ❤️ using Next.js</span>
//       </div>
//     </>
//   );
// }


'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;600;700;800&family=IBM+Plex+Sans:wght@300;400;500;600&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        :root {
          --N900: #0a1628;
          --N800: #0f2040;
          --N700: #152b58;
          --N600: #1e3a6e;
          --blue: #1a56db;
          --blue2: #3b82f6;
          --blue-tint: #eff6ff;
          --blue-line: #bfdbfe;
          --white: #ffffff;
          --off: #f8f9fc;
          --off2: #f1f4f9;
          --border: #e3e8f0;
          --border2: #ccd5e3;
          --text: #0a1628;
          --text2: #2d4263;
          --muted: #5d7290;
          --muted2: #8fa3bc;
          --green: #059669;
          --green-lt: #d1fae5;
          --amber: #d97706;
          --s1: 0 1px 3px rgba(10,22,40,.06), 0 1px 2px rgba(10,22,40,.04);
          --s2: 0 4px 12px rgba(10,22,40,.08), 0 2px 4px rgba(10,22,40,.04);
          --s3: 0 8px 28px rgba(10,22,40,.10), 0 3px 8px rgba(10,22,40,.06);
          --s4: 0 20px 60px rgba(10,22,40,.12), 0 8px 20px rgba(10,22,40,.07);
          --r: 14px;
          --r2: 20px;
        }

        html { scroll-behavior: smooth; }
        body {
          font-family: 'IBM Plex Sans', sans-serif;
          background: var(--white);
          color: var(--text);
          overflow-x: hidden;
          -webkit-font-smoothing: antialiased;
          line-height: 1.6;
        }

        h1,h2,h3,h4 { font-family: 'Sora', sans-serif; }

        /* ──────────────────────────────
           NAVIGATION
        ────────────────────────────── */
        nav {
          position: fixed; top: 0; left: 0; right: 0; z-index: 200;
          height: 70px; padding: 0 6%;
          display: flex; align-items: center; justify-content: space-between;
          background: ${scrolled ? 'rgba(255,255,255,0.98)' : '#fff'};
          border-bottom: 1px solid var(--border);
          box-shadow: ${scrolled ? 'var(--s1)' : 'none'};
          transition: box-shadow .25s;
        }
        .logo {
          display: flex; align-items: center; gap: 10px;
          text-decoration: none;
        }
        .logo-box {
          width: 36px; height: 36px; border-radius: 10px;
          background: var(--N900);
          display: flex; align-items: center; justify-content: center;
          font-family: 'Sora', sans-serif;
          font-size: .85rem; font-weight: 800; color: #fff; letter-spacing: -.5px;
          flex-shrink: 0;
        }
        .logo-name {
          font-family: 'Sora', sans-serif;
          font-size: 1.05rem; font-weight: 700;
          color: var(--N900); letter-spacing: -.4px;
        }
        .logo-name b { color: var(--blue); font-weight: 700; }

        .nav-links { display: flex; gap: 2px; list-style: none; align-items: center; }
        .nav-links a {
          color: var(--muted); text-decoration: none;
          font-size: .875rem; font-weight: 500;
          padding: .42rem .9rem; border-radius: 8px; transition: all .18s;
        }
        .nav-links a:hover { color: var(--text); background: var(--off2); }
        .nav-btn {
          background: var(--N900) !important; color: #fff !important;
          border-radius: 9px; padding: .46rem 1.25rem !important;
          font-weight: 600 !important; letter-spacing: -.2px;
          transition: background .18s !important;
        }
        .nav-btn:hover { background: var(--blue) !important; }

        .burger { display: none; flex-direction: column; gap: 5px; background: none; border: none; cursor: pointer; }
        .burger span { display: block; width: 22px; height: 2px; background: var(--N900); border-radius: 2px; }

        .mob-nav {
          display: none; position: fixed; top: 70px; left: 0; right: 0;
          background: #fff; border-bottom: 1px solid var(--border);
          padding: 1rem 6%; flex-direction: column; gap: 3px; z-index: 199;
          box-shadow: var(--s3);
        }
        .mob-nav.open { display: flex; }
        .mob-nav a { color: var(--muted); text-decoration: none; font-size: .95rem; font-weight: 500; padding: .65rem .85rem; border-radius: 9px; }
        .mob-nav a:hover { color: var(--text); background: var(--off2); }
        .mob-btn { background: var(--N900) !important; color: #fff !important; text-align: center; border-radius: 9px; font-weight: 600 !important; margin-top: 4px; }

        /* ──────────────────────────────
           BUTTONS
        ────────────────────────────── */
        .btn {
          display: inline-flex; align-items: center; gap: 7px;
          font-family: 'IBM Plex Sans', sans-serif;
          font-size: .9rem; font-weight: 600;
          padding: .78rem 1.7rem; border-radius: 10px;
          text-decoration: none; border: none; cursor: pointer;
          transition: all .2s; letter-spacing: -.1px;
        }
        .btn-solid { background: var(--N900); color: #fff; box-shadow: var(--s2); }
        .btn-solid:hover { background: var(--blue); transform: translateY(-1px); box-shadow: 0 6px 20px rgba(26,86,219,.3); }
        .btn-line { background: transparent; color: var(--text2); border: 1.5px solid var(--border2); }
        .btn-line:hover { border-color: var(--N900); color: var(--N900); transform: translateY(-1px); }

        /* ──────────────────────────────
           HERO
        ────────────────────────────── */
        .hero {
          padding: 120px 6% 90px;
          display: grid; grid-template-columns: 1.05fr .95fr;
          align-items: center; gap: 5rem;
          background: var(--white);
          position: relative; overflow: hidden;
          min-height: 90vh;
        }
        /* right half tinted panel */
        .hero::after {
          content: '';
          position: absolute; top: 0; right: 0; bottom: 0; width: 45%;
          background: var(--off);
          clip-path: polygon(6% 0, 100% 0, 100% 100%, 0% 100%);
          z-index: 0;
        }
        /* thin accent line top of right panel */
        .hero::before {
          content: '';
          position: absolute; top: 0; right: 0; width: 45%; height: 3px;
          background: linear-gradient(90deg, var(--N900) 0%, var(--blue) 100%);
          z-index: 1;
        }

        .hero-l { position: relative; z-index: 2; }
        .hero-r { position: relative; z-index: 2; }

        .hero-badge {
          display: inline-flex; align-items: center; gap: 8px;
          font-size: .7rem; font-weight: 700; text-transform: uppercase;
          letter-spacing: 1.8px; color: var(--blue);
          background: var(--blue-tint); border: 1px solid var(--blue-line);
          padding: 5px 14px; border-radius: 100px; margin-bottom: 1.5rem;
        }
        .hero-badge span {
          width: 6px; height: 6px; border-radius: 50%; background: var(--blue);
          animation: dot 2.4s ease-in-out infinite;
        }
        @keyframes dot { 0%,100%{opacity:1} 50%{opacity:.25} }
        @keyframes grow { from{width:0} }
        @keyframes up { from{opacity:0;transform:translateY(16px)} to{opacity:1;transform:none} }

        .hero h1 {
          font-size: clamp(2.8rem, 5.2vw, 4.4rem);
          font-weight: 800; line-height: 1.06;
          letter-spacing: -2.5px; color: var(--N900);
          margin-bottom: 1.5rem;
        }
        .hero h1 .hl { color: var(--blue); }

        .hero-p {
          color: var(--muted); font-size: 1.02rem; line-height: 1.85;
          max-width: 460px; margin-bottom: 2.5rem;
        }
        .hero-ctas { display: flex; gap: 1rem; flex-wrap: wrap; }

        /* ── hero right card ── */
        .dash-card {
          background: var(--white); border-radius: var(--r2);
          border: 1px solid var(--border);
          box-shadow: var(--s4); overflow: hidden;
        }
        .dc-header {
          padding: 1.1rem 1.5rem;
          background: var(--N900);
          display: flex; align-items: center; justify-content: space-between;
        }
        .dc-header-title { font-size: .8rem; font-weight: 600; color: rgba(255,255,255,.7); letter-spacing: -.1px; }
        .dc-dots { display: flex; gap: 6px; }
        .dc-dot { width: 9px; height: 9px; border-radius: 50%; }

        .dc-body { padding: 1.5rem; }

        .dc-stats { display: grid; grid-template-columns: repeat(3,1fr); gap: .85rem; margin-bottom: 1.4rem; }
        .dc-stat {
          background: var(--off); border: 1px solid var(--border);
          border-radius: var(--r); padding: 1rem .9rem; text-align: center;
          transition: box-shadow .2s, transform .2s;
        }
        .dc-stat:hover { box-shadow: var(--s2); transform: translateY(-2px); }
        .dc-stat .dn {
          font-family: 'Sora', sans-serif;
          font-size: 1.7rem; font-weight: 800; color: var(--N900); letter-spacing: -1.5px;
          line-height: 1;
        }
        .dc-stat .dn sup { font-size: .85rem; color: var(--blue); vertical-align: super; }
        .dc-stat .dl { font-size: .62rem; color: var(--muted2); text-transform: uppercase; letter-spacing: .8px; font-weight: 600; margin-top: 5px; }

        .dc-divider { height: 1px; background: var(--border); margin-bottom: 1.2rem; }

        .dc-bar-label { font-size: .68rem; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; color: var(--muted2); margin-bottom: .9rem; }
        .dc-bars { display: flex; flex-direction: column; gap: .7rem; }
        .dc-bar-row { display: flex; flex-direction: column; gap: 4px; }
        .dc-bar-top { display: flex; justify-content: space-between; font-size: .78rem; font-weight: 600; color: var(--text2); }
        .dc-bar-top span:last-child { color: var(--blue); font-weight: 700; }
        .dc-track { background: var(--off2); border-radius: 100px; height: 6px; overflow: hidden; }
        .dc-fill {
          height: 100%; border-radius: 100px;
          background: linear-gradient(90deg, var(--N900) 0%, var(--blue) 100%);
          animation: grow 1.4s cubic-bezier(.4,0,.2,1) forwards;
        }

        /* ──────────────────────────────
           SECTION COMMONS
        ────────────────────────────── */
        .sec-eye {
          display: inline-flex; align-items: center; gap: 8px;
          font-size: .68rem; font-weight: 700; text-transform: uppercase;
          letter-spacing: 2px; color: var(--blue); margin-bottom: .8rem;
        }
        .sec-eye::before { content: ''; width: 18px; height: 2px; background: var(--blue); border-radius: 2px; }
        .sec-h { font-size: clamp(1.8rem, 3vw, 2.55rem); font-weight: 800; letter-spacing: -1.5px; line-height: 1.12; color: var(--N900); margin-bottom: 1rem; }

        /* ──────────────────────────────
           ABOUT
        ────────────────────────────── */
        .about { padding: 100px 6%; background: var(--off); }
        .about-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 5.5rem; align-items: start; }
        .about-l p { color: var(--muted); font-size: .95rem; line-height: 1.85; margin-bottom: 1rem; }
        .about-l p:last-of-type { margin-bottom: 2rem; }
        .about-r > p { color: var(--muted); font-size: .95rem; line-height: 1.85; margin-bottom: 1.5rem; }

        .svc-4 { display: grid; grid-template-columns: 1fr 1fr; gap: .9rem; }
        .svc {
          background: var(--white); border: 1px solid var(--border);
          border-radius: var(--r); padding: 1.4rem;
          position: relative; overflow: hidden;
          transition: all .22s; cursor: default;
        }
        .svc:hover { box-shadow: var(--s3); border-color: var(--blue-line); transform: translateY(-3px); }
        /* navy top accent on hover */
        .svc::before { content: ''; position: absolute; top: 0; left: 0; right: 0; height: 2px; background: var(--N900); transform: scaleX(0); transform-origin: left; transition: transform .25s; border-radius: var(--r) var(--r) 0 0; }
        .svc:hover::before { transform: scaleX(1); }
        .svc-icon { width: 42px; height: 42px; background: var(--off2); border: 1px solid var(--border); border-radius: 11px; display: flex; align-items: center; justify-content: center; font-size: 1.1rem; margin-bottom: .9rem; }
        .svc h3 { font-size: .88rem; font-weight: 700; color: var(--N900); margin-bottom: .35rem; letter-spacing: -.2px; }
        .svc p { color: var(--muted); font-size: .79rem; line-height: 1.65; }

        /* ──────────────────────────────
           ERP PROMO — dark section
        ────────────────────────────── */
        .erp-promo { padding: 80px 6%; background: var(--white); }
        .erp-box {
          background: var(--N900);
          border-radius: var(--r2); padding: 3.5rem;
          position: relative; overflow: hidden;
          box-shadow: var(--s4);
        }
        /* subtle grid texture */
        .erp-box::before {
          content: '';
          position: absolute; inset: 0;
          background-image: linear-gradient(rgba(255,255,255,.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.03) 1px, transparent 1px);
          background-size: 32px 32px;
          pointer-events: none;
        }
        /* glow blob */
        .erp-box::after {
          content: ''; position: absolute; top: -60px; right: 60px;
          width: 320px; height: 320px; border-radius: 50%;
          background: radial-gradient(circle, rgba(59,130,246,.18) 0%, transparent 70%);
          pointer-events: none;
        }
        .erp-box h2 {
          font-size: clamp(1.9rem,3.2vw,2.8rem); font-weight: 800;
          letter-spacing: -2px; line-height: 1.1;
          color: #fff; max-width: 580px; margin-bottom: .9rem;
          position: relative; z-index: 1;
        }
        .erp-box h2 em { font-style: normal; color: #93c5fd; }
        .erp-box > p { color: rgba(255,255,255,.5); font-size: .95rem; line-height: 1.8; max-width: 520px; margin-bottom: 2.5rem; position: relative; z-index: 1; }

        .erp-widgets {
          display: grid; grid-template-columns: repeat(4, 1fr); gap: 1rem;
          position: relative; z-index: 1;
        }
        .ew {
          background: rgba(255,255,255,.06); border: 1px solid rgba(255,255,255,.1);
          border-radius: var(--r); padding: 1.25rem; text-align: center;
          transition: background .2s, transform .2s;
        }
        .ew:hover { background: rgba(255,255,255,.1); transform: translateY(-2px); }
        .ew .ev { font-family: 'Sora', sans-serif; font-size: 1.6rem; font-weight: 800; color: #fff; letter-spacing: -1px; line-height: 1; }
        .ew .el { font-size: .62rem; color: rgba(255,255,255,.4); text-transform: uppercase; letter-spacing: 1px; margin-top: 5px; font-weight: 600; }

        .ew-bar {
          background: rgba(255,255,255,.06); border: 1px solid rgba(255,255,255,.1);
          border-radius: var(--r); padding: 1.25rem; grid-column: span 2;
        }
        .ew-bar-title { font-size: .72rem; font-weight: 700; color: rgba(255,255,255,.55); letter-spacing: .5px; margin-bottom: 1rem; }
        .ew-bar-row { margin-bottom: 9px; }
        .ew-bar-row:last-child { margin-bottom: 0; }
        .ew-bar-meta { display: flex; justify-content: space-between; font-size: .7rem; color: rgba(255,255,255,.4); margin-bottom: 4px; }
        .ew-bar-meta span:last-child { font-weight: 700; }
        .ew-track { background: rgba(255,255,255,.1); border-radius: 100px; height: 5px; overflow: hidden; }
        .ew-fill { height: 100%; border-radius: 100px; }

        /* ──────────────────────────────
           PROJECTS
        ────────────────────────────── */
        .projects { padding: 80px 6%; background: var(--off); }
        .sec-hdr { display: flex; align-items: flex-end; justify-content: space-between; margin-bottom: 2.5rem; }
        .pgrid { display: grid; grid-template-columns: repeat(3,1fr); gap: 1.4rem; }
        .pc {
          background: var(--white); border: 1px solid var(--border);
          border-radius: var(--r2); overflow: hidden;
          transition: all .25s; cursor: pointer;
        }
        .pc:hover { box-shadow: var(--s4); transform: translateY(-5px); border-color: var(--blue-line); }
        .pthumb { height: 154px; display: flex; align-items: center; justify-content: center; font-size: 2.8rem; }
        .pc1{background:#dbeafe} .pc2{background:#d1fae5} .pc3{background:#fef9c3}
        .pc4{background:#ede9fe} .pc5{background:#fce7f3} .pc6{background:#cffafe}
        .pbody { padding: 1.3rem; }
        .ptag {
          display: inline-block; font-size: .62rem; font-weight: 700;
          text-transform: uppercase; letter-spacing: 1px;
          background: var(--blue-tint); color: var(--blue);
          border: 1px solid var(--blue-line);
          padding: 3px 10px; border-radius: 100px; margin-bottom: .6rem;
        }
        .pbody h3 { font-size: .92rem; font-weight: 700; color: var(--N900); margin-bottom: .3rem; letter-spacing: -.2px; }
        .pbody p { color: var(--muted); font-size: .79rem; line-height: 1.6; }

        /* ──────────────────────────────
           ERP DETAIL
        ────────────────────────────── */
        .erp-detail { padding: 80px 6%; background: var(--white); }
        .erp-dg { display: grid; grid-template-columns: 1fr 1fr; gap: 5rem; align-items: center; }
        .erp-dg h2 { font-size: clamp(1.8rem,3vw,2.7rem); font-weight: 800; letter-spacing: -2px; line-height: 1.1; color: var(--N900); margin-bottom: 1.5rem; }
        .erp-3col { display: grid; grid-template-columns: repeat(3,1fr); gap: .9rem; margin-bottom: 1.8rem; }
        .e3c { background: var(--off); border: 1px solid var(--border); border-radius: 12px; padding: 1.1rem; transition: border-color .2s; }
        .e3c:hover { border-color: var(--blue-line); }
        .e3c .e3l { font-size: .6rem; font-weight: 800; text-transform: uppercase; letter-spacing: 1.5px; color: var(--blue); margin-bottom: .45rem; }
        .e3c p { font-size: .78rem; color: var(--muted); line-height: 1.65; }

        /* dark widget card */
        .erp-vcrd {
          background: var(--N900); border-radius: var(--r2);
          padding: 1.8rem; box-shadow: var(--s4);
          position: relative; overflow: hidden;
        }
        .erp-vcrd::before {
          content: '';
          position: absolute; inset: 0;
          background-image: linear-gradient(rgba(255,255,255,.025) 1px, transparent 1px), linear-gradient(90deg,rgba(255,255,255,.025) 1px, transparent 1px);
          background-size: 28px 28px; pointer-events: none;
        }
        .erp-vcrd-t { font-size: .78rem; font-weight: 700; color: rgba(255,255,255,.6); margin-bottom: 1.2rem; display: flex; align-items: center; gap: 8px; position: relative; z-index: 1; }
        .erp-vcrd-t::before { content: ''; width: 8px; height: 8px; border-radius: 50%; background: #34d399; }
        .evc-row { display: grid; grid-template-columns: repeat(3,1fr); gap: .8rem; margin-bottom: 1.2rem; position: relative; z-index: 1; }
        .evc-s { background: rgba(255,255,255,.07); border: 1px solid rgba(255,255,255,.1); border-radius: 12px; padding: 1rem; text-align: center; }
        .evc-s .en { font-family: 'Sora',sans-serif; font-size: 1.2rem; font-weight: 800; color: #fff; letter-spacing: -.5px; }
        .evc-s .el { font-size: .6rem; color: rgba(255,255,255,.38); text-transform: uppercase; letter-spacing: .7px; margin-top: 3px; }
        .evc-bars { background: rgba(255,255,255,.06); border-radius: 12px; padding: 1.1rem; position: relative; z-index: 1; }
        .evc-br { margin-bottom: 9px; }
        .evc-br:last-child { margin-bottom: 0; }
        .evc-bm { display: flex; justify-content: space-between; font-size: .72rem; color: rgba(255,255,255,.4); margin-bottom: 4px; }
        .evc-bm span:last-child { color: rgba(255,255,255,.7); font-weight: 700; }
        .evc-bt { background: rgba(255,255,255,.1); border-radius: 100px; height: 5px; overflow: hidden; }
        .evc-bf { height: 100%; border-radius: 100px; }

        /* ──────────────────────────────
           INVOICE
        ────────────────────────────── */
        .invoice { padding: 80px 6%; background: var(--off); }
        .inv-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 5rem; align-items: center; }
        .inv-text h2 { font-size: clamp(1.8rem,3vw,2.7rem); font-weight: 800; letter-spacing: -2px; line-height: 1.1; color: var(--N900); margin-bottom: 1.2rem; }
        .inv-text p { color: var(--muted); font-size: .95rem; line-height: 1.85; margin-bottom: .9rem; }
        .inv-text p:last-of-type { margin-bottom: 2rem; }

        .inv-card {
          background: var(--white); border: 1px solid var(--border);
          border-radius: var(--r2); overflow: hidden;
          box-shadow: var(--s4);
        }
        .inv-stripe { height: 4px; background: linear-gradient(90deg, var(--N900) 0%, var(--blue) 60%, var(--blue2) 100%); }
        .inv-inner { padding: 1.8rem; }
        .inv-hdr { display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.4rem; padding-bottom: 1.2rem; border-bottom: 1px solid var(--border); }
        .inv-hdr h3 { font-size: .97rem; font-weight: 800; color: var(--N900); letter-spacing: -.3px; }
        .inv-status { font-size: .68rem; font-weight: 700; background: var(--green-lt); color: var(--green); padding: 4px 13px; border-radius: 100px; border: 1px solid #a7f3d0; }
        .inv-row { display: flex; justify-content: space-between; align-items: center; padding: .62rem 0; border-bottom: 1px solid var(--border); }
        .inv-row:last-child { border: none; }
        .inv-row .il { color: var(--muted); font-size: .82rem; }
        .inv-row .iv { font-size: .82rem; font-weight: 700; color: var(--text2); }
        .inv-row .iv.b { color: var(--blue); }
        .inv-row .iv.g { color: var(--green); }
        .inv-foot {
          display: flex; justify-content: space-between; align-items: center;
          background: var(--N900); border-radius: 11px;
          padding: 1.1rem 1.2rem; margin-top: 1.2rem;
        }
        .inv-foot .ifl { font-size: .82rem; font-weight: 600; color: rgba(255,255,255,.6); }
        .inv-foot .ifv { font-family: 'Sora',sans-serif; font-size: 1.4rem; font-weight: 800; color: #fff; letter-spacing: -1px; }
        .inv-foot .ifv small { font-size: .75rem; color: rgba(255,255,255,.4); font-family: 'IBM Plex Sans',sans-serif; font-weight: 500; margin-left: 3px; }

        /* ──────────────────────────────
           TECH STACK
        ────────────────────────────── */
        .tech { padding: 80px 6%; background: var(--white); text-align: center; }
        .tech h2 { font-size: clamp(1.8rem,3vw,2.5rem); font-weight: 800; letter-spacing: -1.5px; color: var(--N900); margin-bottom: .8rem; }
        .tech > p { color: var(--muted); font-size: .95rem; max-width: 520px; margin: 0 auto 2.8rem; line-height: 1.8; }
        .tech-grid { display: flex; flex-wrap: wrap; justify-content: center; gap: .7rem; }
        .tp {
          display: inline-flex; align-items: center; gap: 8px;
          background: var(--off); border: 1.5px solid var(--border);
          border-radius: 10px; padding: .58rem 1.1rem;
          font-size: .82rem; font-weight: 600; color: var(--text2);
          box-shadow: var(--s1); transition: all .2s; cursor: default;
        }
        .tp:hover { border-color: var(--N900); color: var(--N900); background: var(--off2); transform: translateY(-2px); box-shadow: var(--s2); }

        /* ──────────────────────────────
           FOOTER
        ────────────────────────────── */
        footer {
          background: var(--N900);
          padding: 4rem 6% 3.5rem;
          display: grid; grid-template-columns: 2fr 1fr 1fr 1fr; gap: 3rem;
          position: relative;
        }
        footer::before { content: ''; position: absolute; top: 0; left: 0; right: 0; height: 1px; background: linear-gradient(90deg, transparent, rgba(59,130,246,.5), transparent); }
        .fl-wrap { display: flex; align-items: center; gap: 10px; text-decoration: none; }
        .fl-box { width: 33px; height: 33px; border-radius: 9px; background: var(--blue); display: flex; align-items: center; justify-content: center; font-family: 'Sora',sans-serif; font-size: .82rem; font-weight: 800; color: #fff; }
        .fl-name { font-family: 'Sora',sans-serif; font-size: 1.05rem; font-weight: 700; color: #fff; letter-spacing: -.3px; }
        .fl-name b { color: #93c5fd; font-weight: 700; }
        .fdesc { color: rgba(255,255,255,.35); font-size: .85rem; line-height: 1.8; margin-top: .95rem; max-width: 230px; }
        .fsocial { display: flex; gap: .55rem; margin-top: 1.3rem; }
        .fsocial a { width: 35px; height: 35px; border-radius: 9px; background: rgba(255,255,255,.07); border: 1px solid rgba(255,255,255,.1); display: flex; align-items: center; justify-content: center; color: rgba(255,255,255,.4); font-size: .75rem; font-weight: 700; text-decoration: none; transition: all .2s; }
        .fsocial a:hover { background: var(--blue); border-color: var(--blue); color: #fff; transform: translateY(-2px); }
        .fcol h4 { font-family: 'Sora',sans-serif; font-size: .68rem; font-weight: 700; text-transform: uppercase; letter-spacing: 2px; color: rgba(255,255,255,.65); margin-bottom: 1.15rem; }
        .fcol ul { list-style: none; }
        .fcol ul li { margin-bottom: .6rem; }
        .fcol ul a { color: rgba(255,255,255,.36); text-decoration: none; font-size: .85rem; transition: color .18s; }
        .fcol ul a:hover { color: rgba(255,255,255,.85); }
        .nl-p { color: rgba(255,255,255,.32); font-size: .82rem; margin-bottom: .9rem; line-height: 1.7; }
        .nl-input { width: 100%; padding: .64rem 1rem; background: rgba(255,255,255,.07); border: 1px solid rgba(255,255,255,.12); border-radius: 9px; color: #fff; font-size: .82rem; outline: none; margin-bottom: .5rem; font-family: 'IBM Plex Sans',sans-serif; transition: all .2s; }
        .nl-input::placeholder { color: rgba(255,255,255,.22); }
        .nl-input:focus { border-color: var(--blue2); background: rgba(255,255,255,.1); }
        .nl-btn { width: 100%; padding: .64rem; background: var(--blue); color: #fff; border: none; border-radius: 9px; font-weight: 700; font-size: .82rem; cursor: pointer; font-family: 'IBM Plex Sans',sans-serif; transition: background .2s; }
        .nl-btn:hover { background: #1a55c7; }
        .fbar { background: rgba(0,0,0,.2); border-top: 1px solid rgba(255,255,255,.05); padding: 1rem 6%; display: flex; justify-content: space-between; color: rgba(255,255,255,.22); font-size: .77rem; }

        /* ──────────────────────────────
           RESPONSIVE
        ────────────────────────────── */
        @media (max-width: 1024px) {
          .erp-3col { grid-template-columns: 1fr 1fr; }
        }
        @media (max-width: 900px) {
          .hero { grid-template-columns: 1fr; padding-top: 96px; min-height: auto; }
          .hero::after, .hero::before { display: none; }
          .hero-r { display: none; }
          .about-grid { grid-template-columns: 1fr; gap: 2.5rem; }
          .erp-dg { grid-template-columns: 1fr; }
          .inv-grid { grid-template-columns: 1fr; }
          .pgrid { grid-template-columns: 1fr 1fr; }
          footer { grid-template-columns: 1fr 1fr; gap: 2.5rem; }
          .nav-links { display: none; }
          .burger { display: flex; }
          .erp-widgets { grid-template-columns: 1fr 1fr; }
          .erp-box { padding: 2.5rem 2rem; }
        }
        @media (max-width: 600px) {
          .pgrid { grid-template-columns: 1fr; }
          .svc-4 { grid-template-columns: 1fr; }
          footer { grid-template-columns: 1fr; }
          .fbar { flex-direction: column; gap: .3rem; text-align: center; }
          .erp-3col { grid-template-columns: 1fr; }
          .sec-hdr { flex-direction: column; align-items: flex-start; gap: .8rem; }
          .erp-widgets { grid-template-columns: 1fr 1fr; }
          .hero-ctas { flex-direction: column; align-items: flex-start; }
          .fbar { font-size: .72rem; }
        }
      `}</style>

      {/* ── NAV ── */}
      <nav>
        <Link href="/" className="logo">
          <span className="logo-box">H</span>
          <span className="logo-name">HAK <b>Projects</b></span>
        </Link>
        <ul className="nav-links">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/service">Services</Link></li>
          <li><Link href="/projects">Projects</Link></li>
          <li><Link href="/contact" className="nav-btn">Contact Us</Link></li>
        </ul>
        <button className="burger" onClick={() => setMenuOpen(!menuOpen)}>
          <span/><span/><span/>
        </button>
      </nav>
      <div className={`mob-nav ${menuOpen ? 'open' : ''}`}>
        <Link href="/" onClick={() => setMenuOpen(false)}>Home</Link>
        <Link href="/about" onClick={() => setMenuOpen(false)}>About</Link>
        <Link href="/service" onClick={() => setMenuOpen(false)}>Services</Link>
        <Link href="/projects" onClick={() => setMenuOpen(false)}>Projects</Link>
        <Link href="/contact" className="mob-btn" onClick={() => setMenuOpen(false)}>Contact Us</Link>
      </div>

      {/* ── HERO ── */}
      <section className="hero" id="home">
        <div className="hero-l">
          <div className="hero-badge"><span/>HAK Projects Technologies</div>
          <h1>Excellent IT<br/>Services for<br/><span className="hl">Your Success</span></h1>
          <p className="hero-p">We deliver innovative, high-quality IT solutions — web development, ERP, cloud, and mobile — to help your business grow and lead.</p>
          <div className="hero-ctas">
            <Link href="/contact" className="btn btn-solid">Get in Touch</Link>
            <Link href="/projects" className="btn btn-line">View Our Work</Link>
          </div>
        </div>
        <div className="hero-r">
          <div className="dash-card">
            <div className="dc-header">
              <span className="dc-header-title">Performance Overview</span>
              <div className="dc-dots">
                <div className="dc-dot" style={{background:'#f87171'}}/>
                <div className="dc-dot" style={{background:'#fbbf24'}}/>
                <div className="dc-dot" style={{background:'#34d399'}}/>
              </div>
            </div>
            <div className="dc-body">
              <div className="dc-stats">
                {[['50','Projects'],['30','Clients'],['5','Yrs Exp']].map(([n,l]) => (
                  <div className="dc-stat" key={l}>
                    <div className="dn">{n}<sup>+</sup></div>
                    <div className="dl">{l}</div>
                  </div>
                ))}
              </div>
              <div className="dc-divider"/>
              <div className="dc-bar-label">Expertise Areas</div>
              <div className="dc-bars">
                {[['Web Development','95%'],['Mobile Apps','88%'],['Cloud Solutions','80%'],['UI / UX Design','92%']].map(([l,p]) => (
                  <div className="dc-bar-row" key={l}>
                    <div className="dc-bar-top"><span>{l}</span><span>{p}</span></div>
                    <div className="dc-track"><div className="dc-fill" style={{width:p}}/></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section className="about" id="about">
        <div className="about-grid">
          <div className="about-l">
            <div className="sec-eye">About Us</div>
            <h2 className="sec-h">We Build Digital Experiences That Matter</h2>
            <p>At HAK Projects, we are passionate about delivering innovative IT solutions that transform businesses. Our skilled team of developers, designers, and strategists builds products that make a real difference.</p>
            <p>We serve financial institutions and businesses of all sizes — with expertise spanning web, ERP, CRM, mobile apps, and digital marketing.</p>
            <Link href="/about" className="btn btn-solid">Learn More About Us</Link>
          </div>
          <div className="about-r">
            <p>We are a software development firm with proven expertise in web development, ERP, CRM, mobile applications, digital marketing, and training — serving companies since our founding with tailored solutions that scale.</p>
            <div className="svc-4" id="services">
              {[
                {icon:'🌐',t:'Web Development',d:'Fast, responsive, SEO-optimised websites tailored to your business needs.'},
                {icon:'🗄️',t:'ERP Solutions',d:'Custom ERP that streamlines operations and drives measurable growth.'},
                {icon:'📱',t:'Mobile Apps',d:'High-performance iOS & Android apps that keep your business connected.'},
                {icon:'☁️',t:'AWS Cloud',d:'Secure, scalable cloud infrastructure powered by Amazon Web Services.'},
              ].map((s,i) => (
                <div className="svc" key={i}>
                  <div className="svc-icon">{s.icon}</div>
                  <h3>{s.t}</h3>
                  <p>{s.d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── ERP PROMO ── */}
      <section className="erp-promo">
        <div className="erp-box">
          <h2>With just two clicks, unlock <em>smart, seamless ERP</em> solutions by HAK Projects.</h2>
          <p>Generating professional quotations effortlessly — select your products and our system handles attendance, payroll, compliance, and reporting automatically.</p>
          <div className="erp-widgets">
            {[['124','Employees'],['98%','Attendance'],['2.4M','Payroll (PKR)'],['12','Departments']].map(([v,l]) => (
              <div className="ew" key={l}>
                <div className="ev">{v}</div>
                <div className="el">{l}</div>
              </div>
            ))}
            <div className="ew-bar">
              <div className="ew-bar-title">Performance Overview</div>
              {[['Web Dev','78%','#60a5fa'],['Mobile','62%','#34d399'],['Cloud','88%','#a78bfa']].map(([l,w,c]) => (
                <div className="ew-bar-row" key={l}>
                  <div className="ew-bar-meta"><span>{l}</span><span style={{color:c}}>{w}</span></div>
                  <div className="ew-track"><div className="ew-fill" style={{width:w,background:c}}/></div>
                </div>
              ))}
            </div>
            <div className="ew-bar">
              <div className="ew-bar-title">Monthly Summary</div>
              {[['Revenue','82%','#60a5fa'],['Expenses','55%','#f87171'],['Profit','68%','#34d399']].map(([l,w,c]) => (
                <div className="ew-bar-row" key={l}>
                  <div className="ew-bar-meta"><span>{l}</span><span style={{color:c}}>{w}</span></div>
                  <div className="ew-track"><div className="ew-fill" style={{width:w,background:c}}/></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── PROJECTS ── */}
      <section className="projects" id="projects">
        <div className="sec-hdr">
          <div>
            <div className="sec-eye">Our Work</div>
            <h2 className="sec-h">Built Using Our Apps</h2>
          </div>
          <Link href="/projects" className="btn btn-line">View All Projects →</Link>
        </div>
        <div className="pgrid">
          {[
            {c:'pc1',i:'🛒',t:'E-Commerce',n:'HAK Shop Platform',d:'Full-featured online store with inventory management and payment gateway.'},
            {c:'pc2',i:'📊',t:'ERP System',n:'HAK ERP Dashboard',d:'Comprehensive ERP for manpower, attendance, and payroll management.'},
            {c:'pc3',i:'🏦',t:'FinTech',n:'Invoice Pro',d:'Automated invoicing with GST compliance for financial businesses.'},
            {c:'pc4',i:'📱',t:'Mobile App',n:'HAK Connect App',d:'Cross-platform mobile app keeping businesses connected in real time.'},
            {c:'pc5',i:'🎨',t:'UI / UX',n:'Brand Identity Kit',d:'Complete brand identity and design system for a growing startup.'},
            {c:'pc6',i:'☁️',t:'Cloud',n:'AWS Migration',d:'Seamless cloud migration delivering 60% cost reduction.'},
          ].map((p,i) => (
            <div className="pc" key={i}>
              <div className={`pthumb ${p.c}`}><span>{p.i}</span></div>
              <div className="pbody">
                <span className="ptag">{p.t}</span>
                <h3>{p.n}</h3>
                <p>{p.d}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── ERP DETAIL ── */}
      <section className="erp-detail">
        <div className="erp-dg">
          <div>
            <div className="sec-eye">ERP Dashboard</div>
            <h2>The Ultimate ERP Dashboard</h2>
            <div className="erp-3col">
              {[
                {l:'Overview',t:'A cloud platform for planning, workforce allocation, tracking, and payroll across all industries.'},
                {l:'Key Features',t:'Client management, job assignments, attendance, payroll, compliance — all in one system.'},
                {l:'Impact',t:'Reduces manual work, improves accuracy, and enables secure workforce handling on web & mobile.'},
              ].map(c => (
                <div className="e3c" key={c.l}>
                  <div className="e3l">{c.l}</div>
                  <p>{c.t}</p>
                </div>
              ))}
            </div>
            <Link href="/service" className="btn btn-solid">Explore ERP Solutions</Link>
          </div>
          <div className="erp-vcrd">
            <div className="erp-vcrd-t">ERP Live Dashboard</div>
            <div className="evc-row">
              {[['248','Employees'],['98.2%','Attendance'],['3.1M','Payroll']].map(([n,l]) => (
                <div className="evc-s" key={l}>
                  <div className="en">{n}</div>
                  <div className="el">{l}</div>
                </div>
              ))}
            </div>
            <div className="evc-bars">
              {[['Dept A','85%','#60a5fa'],['Dept B','67%','#fbbf24'],['Dept C','92%','#34d399'],['Dept D','54%','#a78bfa']].map(([d,w,c]) => (
                <div className="evc-br" key={d}>
                  <div className="evc-bm"><span>{d}</span><span>{w}</span></div>
                  <div className="evc-bt"><div className="evc-bf" style={{width:w,background:c}}/></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── INVOICE ── */}
      <section className="invoice">
        <div className="inv-grid">
          <div className="inv-text">
            <div className="sec-eye">FinTech</div>
            <h2>Integrated Invoicing for Manpower</h2>
            <p>HAK Projects provides a streamlined invoice system tailored for Manpower businesses. Each invoice is generated from client-specific data, ensuring accuracy, clarity, and full GST compliance.</p>
            <p>A clean, professional format that eliminates billing complexity so your team can manage finances with total confidence.</p>
            <Link href="/service" className="btn btn-solid">Learn More</Link>
          </div>
          <div className="inv-card">
            <div className="inv-stripe"/>
            <div className="inv-inner">
              <div className="inv-hdr">
                <h3>Invoice #INV-2024-0089</h3>
                <span className="inv-status">✓ Paid</span>
              </div>
              {[
                ['Client','Manpower Solutions Ltd.',''],
                ['Service','Web Development',''],
                ['Duration','Jan – Mar 2024',''],
                ['Subtotal','PKR 85,000','b'],
                ['GST (18%)','PKR 15,300',''],
                ['Discount','– PKR 5,000','g'],
              ].map(([l,v,c]) => (
                <div className="inv-row" key={l}>
                  <span className="il">{l}</span>
                  <span className={`iv ${c}`}>{v}</span>
                </div>
              ))}
              <div className="inv-foot">
                <span className="ifl">Total Amount</span>
                <span className="ifv">PKR 95,300<small>PKR</small></span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TECH ── */}
      <section className="tech">
        <div className="sec-eye" style={{justifyContent:'center'}}>Tech Stack</div>
        <h2>Tools & Software for Web Development</h2>
        <p>Battle-tested technologies that power our solutions — from modern frontend frameworks to enterprise cloud infrastructure.</p>
        <div className="tech-grid">
          {[['🌐','HTML5'],['🎨','CSS3'],['⚛️','React / Next.js'],['🟨','JavaScript'],['🟩','Node.js'],['🐘','Laravel'],['🐬','MySQL'],['☕','Java'],['🐍','Python'],['📱','React Native'],['☁️','AWS'],['🔷','TypeScript']].map(([ic,nm]) => (
            <div className="tp" key={nm}><span>{ic}</span>{nm}</div>
          ))}
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer id="contact">
        <div>
          <Link href="/" className="fl-wrap">
            <span className="fl-box">H</span>
            <span className="fl-name">HAK <b>Projects</b></span>
          </Link>
          <p className="fdesc">We provide cutting-edge IT solutions to help businesses grow and succeed in the digital world.</p>
          <div className="fsocial">
            {[['fb','#'],['in','#'],['tw','#'],['yt','#']].map(([l,h]) => (
              <a href={h} key={l}>{l}</a>
            ))}
          </div>
        </div>
        <div className="fcol">
          <h4>IT Solutions</h4>
          <ul>
            {['ERP Solutions','Web Development','Mobile Apps','AWS Cloud'].map(s => (
              <li key={s}><Link href="/service">{s}</Link></li>
            ))}
          </ul>
        </div>
        <div className="fcol">
          <h4>Quick Links</h4>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/projects">Projects</Link></li>
            <li><Link href="/contact">Contact Us</Link></li>
          </ul>
        </div>
        <div className="fcol">
          <h4>Newsletter</h4>
          <p className="nl-p">Subscribe for updates on new projects and innovations from HAK Projects.</p>
          <input type="email" placeholder="Your email address" className="nl-input"/>
          <button className="nl-btn">Subscribe</button>
        </div>
      </footer>
      <div className="fbar">
        <span>© 2026 HAK Projects Technologies (Pvt.) Ltd. All rights reserved.</span>
        <span>Built with Next.js</span>
      </div>
    </>
  );
}