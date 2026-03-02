// 'use client';
// import { useState } from 'react';
// import Link from 'next/link';

// const projects = [
//   { cls:'pi1', icon:'🛒', tag:'E-Commerce', title:'HAK Shop Platform', desc:'Full-featured online store with inventory management, payment gateway integration, and real-time analytics dashboard.', tech:['Next.js','Node.js','MySQL','Stripe'] },
//   { cls:'pi2', icon:'📊', tag:'ERP System', title:'HAK ERP Dashboard', desc:'Comprehensive ERP system for manpower, attendance, and payroll management used by 10+ companies.', tech:['React','Laravel','MySQL','AWS'] },
//   { cls:'pi3', icon:'🏦', tag:'FinTech', title:'Invoice Pro', desc:'Automated invoicing system with GST compliance and financial reporting built for financial institutions.', tech:['Next.js','Node.js','PostgreSQL','PDF.js'] },
//   { cls:'pi4', icon:'📱', tag:'Mobile App', title:'HAK Connect App', desc:'Cross-platform mobile app keeping businesses connected in real time with push notifications and offline support.', tech:['React Native','Firebase','Node.js','MongoDB'] },
//   { cls:'pi5', icon:'🎨', tag:'UI/UX', title:'Brand Identity Kit', desc:'Complete brand identity and design system for a growing startup — logo, colors, typography, and component library.', tech:['Figma','Adobe XD','Illustrator'] },
//   { cls:'pi6', icon:'☁️', tag:'Cloud', title:'AWS Migration', desc:'End-to-end cloud migration project delivering 60% cost reduction and 99.9% uptime for the client.', tech:['AWS EC2','S3','RDS','CloudFront'] },
//   { cls:'pi1', icon:'🏥', tag:'Healthcare', title:'HealthTrack Portal', desc:'Patient management portal with appointment scheduling, medical records, and telemedicine features.', tech:['React','Node.js','MongoDB','Twilio'] },
//   { cls:'pi2', icon:'🎓', tag:'EdTech', title:'LearnSpace LMS', desc:'Learning management system supporting video courses, quizzes, and certificate generation for online educators.', tech:['Next.js','Django','PostgreSQL','AWS S3'] },
//   { cls:'pi3', icon:'🏗️', tag:'Construction', title:'BuildTrack App', desc:'Project tracking and workforce management app for construction companies with real-time site reporting.', tech:['React Native','Node.js','MySQL','Google Maps'] },
// ];

// const tags = ['All', 'E-Commerce', 'ERP System', 'FinTech', 'Mobile App', 'UI/UX', 'Cloud', 'Healthcare', 'EdTech', 'Construction'];

// export default function ProjectsPage() {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [activeTag, setActiveTag] = useState('All');

//   const filtered = activeTag === 'All' ? projects : projects.filter(p => p.tag === activeTag);

//   return (
//     <>
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:wght@300;400;500;600&display=swap');
//         *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
//         :root {
//           --black: #0a0a0f; --dark: #111118; --card: #16161f;
//           --accent: #f97316; --accent2: #fb923c;
//           --white: #f5f5f0; --muted: #8888a0; --border: rgba(255,255,255,0.08);
//         }
//         html { scroll-behavior: smooth; }
//         body { font-family: 'DM Sans', sans-serif; background: var(--black); color: var(--white); overflow-x: hidden; }

//         nav { position: sticky; top: 0; z-index: 100; padding: 0 5%; display: flex; align-items: center; justify-content: space-between; height: 70px; background: rgba(10,10,15,0.95); backdrop-filter: blur(20px); border-bottom: 1px solid var(--border); }
//         .nav-logo { font-family: 'Syne', sans-serif; font-size: 1.5rem; font-weight: 800; color: var(--white); text-decoration: none; letter-spacing: -0.5px; }
//         .nav-logo span { color: var(--accent); }
//         .nav-links { display: flex; gap: 2rem; list-style: none; }
//         .nav-links a { color: var(--muted); text-decoration: none; font-size: 0.9rem; font-weight: 500; transition: color 0.2s; }
//         .nav-links a:hover { color: var(--white); }
//         .nav-links a.active { color: var(--accent); font-weight: 600; }
//         .nav-cta { background: var(--accent); color: var(--black) !important; padding: 0.5rem 1.2rem; border-radius: 6px; font-weight: 600 !important; }
//         .hamburger { display: none; flex-direction: column; gap: 5px; cursor: pointer; background: none; border: none; }
//         .hamburger span { display: block; width: 24px; height: 2px; background: var(--white); }
//         .mobile-menu { display: none; position: fixed; top: 70px; left: 0; right: 0; background: rgba(10,10,15,0.98); backdrop-filter: blur(20px); border-bottom: 1px solid var(--border); padding: 1.5rem 5%; z-index: 99; flex-direction: column; gap: 1rem; }
//         .mobile-menu.open { display: flex; }
//         .mobile-menu a { color: var(--muted); text-decoration: none; font-size: 1rem; padding: 0.5rem 0; border-bottom: 1px solid var(--border); }
//         .mob-cta { background: var(--accent); color: var(--black) !important; padding: 0.75rem 1.2rem !important; border-radius: 6px; font-weight: 600 !important; text-align: center; border-bottom: none !important; margin-top: 0.5rem; }

//         .page-hero { padding: 80px 5% 60px; text-align: center; position: relative; overflow: hidden; }
//         .page-hero::before { content: ''; position: absolute; inset: 0; background: radial-gradient(ellipse 60% 50% at 50% 0%, rgba(249,115,22,0.1) 0%, transparent 70%); pointer-events: none; }
//         .section-label { display: inline-block; font-size: 0.75rem; font-weight: 700; text-transform: uppercase; letter-spacing: 2px; color: var(--accent); margin-bottom: 1rem; }
//         .page-hero h1 { font-family: 'Syne', sans-serif; font-size: clamp(2.5rem, 5vw, 4rem); font-weight: 800; letter-spacing: -2px; margin-bottom: 1.2rem; }
//         .page-hero h1 span { color: var(--accent); }
//         .page-hero p { color: var(--muted); font-size: 1.05rem; line-height: 1.7; max-width: 600px; margin: 0 auto; }

//         .filter-bar { display: flex; flex-wrap: wrap; gap: 0.6rem; justify-content: center; padding: 0 5% 3rem; }
//         .filter-btn { background: var(--card); border: 1px solid var(--border); border-radius: 100px; padding: 0.5rem 1.1rem; font-size: 0.82rem; font-weight: 500; color: var(--muted); cursor: pointer; transition: all 0.2s; font-family: 'DM Sans', sans-serif; }
//         .filter-btn:hover { border-color: rgba(249,115,22,0.3); color: var(--white); }
//         .filter-btn.active { background: var(--accent); border-color: var(--accent); color: var(--black); font-weight: 700; }

//         .projects-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem; padding: 0 5% 80px; }
//         .project-card { background: var(--card); border: 1px solid var(--border); border-radius: 20px; overflow: hidden; transition: all 0.3s ease; }
//         .project-card:hover { transform: translateY(-6px); border-color: rgba(249,115,22,0.3); box-shadow: 0 30px 60px rgba(0,0,0,0.4); }
//         .project-img { height: 200px; display: flex; align-items: center; justify-content: center; font-size: 3.5rem; position: relative; }
//         .pi1 { background: linear-gradient(135deg, #1a1a2e, #16213e); }
//         .pi2 { background: linear-gradient(135deg, #1a2a1a, #162616); }
//         .pi3 { background: linear-gradient(135deg, #2a1a1a, #261616); }
//         .pi4 { background: linear-gradient(135deg, #1a1a2e, #0f1629); }
//         .pi5 { background: linear-gradient(135deg, #2a2a1a, #26261a); }
//         .pi6 { background: linear-gradient(135deg, #2a1a2a, #261a2a); }
//         .project-info { padding: 1.5rem; }
//         .project-tag { display: inline-block; font-size: 0.7rem; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; color: var(--accent); background: rgba(249,115,22,0.1); padding: 3px 10px; border-radius: 100px; margin-bottom: 0.7rem; }
//         .project-info h3 { font-family: 'Syne', sans-serif; font-size: 1.1rem; font-weight: 700; margin-bottom: 0.5rem; }
//         .project-info p { color: var(--muted); font-size: 0.85rem; line-height: 1.6; margin-bottom: 1rem; }
//         .tech-tags { display: flex; flex-wrap: wrap; gap: 0.4rem; }
//         .tech-tag { background: rgba(255,255,255,0.05); border: 1px solid var(--border); border-radius: 4px; padding: 3px 8px; font-size: 0.72rem; color: var(--muted); }

//         .cta-section { background: linear-gradient(135deg, rgba(249,115,22,0.08), rgba(249,115,22,0.02)); border: 1px solid rgba(249,115,22,0.15); border-radius: 24px; padding: 4rem; text-align: center; margin: 0 5% 80px; }
//         .cta-section h2 { font-family: 'Syne', sans-serif; font-size: clamp(1.8rem, 3vw, 2.5rem); font-weight: 800; letter-spacing: -1px; margin-bottom: 1rem; }
//         .cta-section p { color: var(--muted); font-size: 1rem; margin-bottom: 2rem; }
//         .btn-primary { background: var(--accent); color: var(--black); padding: 0.85rem 2rem; border-radius: 8px; font-weight: 700; font-size: 0.95rem; text-decoration: none; display: inline-block; transition: all 0.2s; }
//         .btn-primary:hover { background: var(--accent2); transform: translateY(-2px); box-shadow: 0 8px 30px rgba(249,115,22,0.35); }

//         footer { border-top: 1px solid var(--border); padding: 3rem 5%; display: grid; grid-template-columns: 2fr 1fr 1fr; gap: 3rem; }
//         .footer-brand p { color: var(--muted); font-size: 0.9rem; line-height: 1.7; margin-top: 1rem; max-width: 260px; }
//         .footer-col h4 { font-family: 'Syne', sans-serif; font-size: 0.85rem; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 1rem; }
//         .footer-col ul { list-style: none; }
//         .footer-col ul li { margin-bottom: 0.6rem; }
//         .footer-col ul a { color: var(--muted); text-decoration: none; font-size: 0.88rem; transition: color 0.2s; }
//         .footer-col ul a:hover { color: var(--white); }
//         .footer-bottom { border-top: 1px solid var(--border); padding: 1.5rem 5%; display: flex; justify-content: space-between; align-items: center; color: var(--muted); font-size: 0.82rem; }

//         @media (max-width: 900px) {
//           .projects-grid { grid-template-columns: 1fr 1fr; }
//           .nav-links { display: none; }
//           .hamburger { display: flex; }
//           footer { grid-template-columns: 1fr 1fr; }
//         }
//         @media (max-width: 600px) {
//           .projects-grid { grid-template-columns: 1fr; }
//           footer { grid-template-columns: 1fr; }
//           .footer-bottom { flex-direction: column; gap: 0.5rem; text-align: center; }
//         }
//       `}</style>

//       <nav>
//         <Link href="/" className="nav-logo">HAK <span>Projects</span></Link>
//         <ul className="nav-links">
//           <li><Link href="/home">Home</Link></li>
//           <li><Link href="/about">About</Link></li>
//           <li><Link href="/service">Services</Link></li>
//           <li><Link href="/projects" className="active">Projects</Link></li>
//           <li><Link href="/contact" className="nav-cta">Contact</Link></li>
//         </ul>
//         <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}><span></span><span></span><span></span></button>
//       </nav>
//       <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
//         <Link href="/home" onClick={() => setMenuOpen(false)}>Home</Link>
//         <Link href="/about" onClick={() => setMenuOpen(false)}>About</Link>
//         <Link href="/service" onClick={() => setMenuOpen(false)}>Services</Link>
//         <Link href="/projects" onClick={() => setMenuOpen(false)}>Projects</Link>
//         <Link href="/contact" className="mob-cta" onClick={() => setMenuOpen(false)}>Contact</Link>
//       </div>

//       <section className="page-hero">
//         <span className="section-label">Our Portfolio</span>
//         <h1>Projects We're <span>Proud Of</span></h1>
//         <p>Explore our portfolio of successful projects across various industries and technologies.</p>
//       </section>

//       {/* FILTER */}
//       <div className="filter-bar">
//         {tags.map(tag => (
//           <button key={tag} className={`filter-btn ${activeTag === tag ? 'active' : ''}`} onClick={() => setActiveTag(tag)}>{tag}</button>
//         ))}
//       </div>

//       {/* PROJECTS GRID */}
//       <div className="projects-grid">
//         {filtered.map((p, i) => (
//           <div className="project-card" key={i}>
//             <div className={`project-img ${p.cls}`}><span>{p.icon}</span></div>
//             <div className="project-info">
//               <span className="project-tag">{p.tag}</span>
//               <h3>{p.title}</h3>
//               <p>{p.desc}</p>
//               <div className="tech-tags">{p.tech.map(t => <span className="tech-tag" key={t}>{t}</span>)}</div>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* CTA */}
//       <div className="cta-section">
//         <h2>Have a Project in Mind?</h2>
//         <p>Let's build something amazing together. Get in touch and we'll make it happen.</p>
//         <Link href="/contact" className="btn-primary">Start Your Project</Link>
//       </div>

//       <footer>
//         <div className="footer-brand">
//           <Link href="/" className="nav-logo">HAK <span style={{color:'var(--accent)'}}>Projects</span></Link>
//           <p>We provide cutting-edge IT solutions to help businesses grow and succeed in the digital world.</p>
//         </div>
//         <div className="footer-col">
//           <h4>Quick Links</h4>
//           <ul>
//             <li><Link href="/home">Home</Link></li>
//             <li><Link href="/about">About Us</Link></li>
//             <li><Link href="/service">Services</Link></li>
//             <li><Link href="/contact">Contact Us</Link></li>
//           </ul>
//         </div>
//         <div className="footer-col">
//           <h4>Services</h4>
//           <ul>
//             <li><Link href="/service">Web Development</Link></li>
//             <li><Link href="/service">Mobile Apps</Link></li>
//             <li><Link href="/service">ERP Solutions</Link></li>
//             <li><Link href="/service">AWS Cloud</Link></li>
//           </ul>
//         </div>
//       </footer>
//       <div className="footer-bottom">
//         <span>© 2026 HAK Projects. All rights reserved.</span>
//         <span>Built with ❤️ using Next.js</span>
//       </div>
//     </>
//   );
// }

'use client';
import { useState } from 'react';
import Link from 'next/link';

const ALL_PROJECTS = [
  {
    id: 1,
    tag: 'E-COMMERCE',
    tagColor: '#f97316',
    icon: '🛒',
    bg: '#1a1a2e',
    name: 'NegilaYogi Shop Platform',
    client: 'NegilaYogi',
    year: '2026',
    category: 'Web',
    desc: 'A full-featured public-facing e-commerce storefront for NegilaYogi — an Indian organic products brand. Customers can browse products by category, view featured listings, add to cart, checkout securely with card or COD, manage delivery addresses, and track orders end-to-end through a 6-stage pipeline.',
    features: [
      'Product listing with search, category & status filters',
      "Today's Products & featured items section",
      'Multi-image product gallery with SKU, stock & brand info',
      'Shopping cart with subtotal, tax (8%) & free delivery logic',
      'Card payment gateway + Cash on Delivery checkout',
      '6-stage order tracking (Placed → Delivered)',
      'Customer dashboard: addresses, orders, saved items, payments',
    ],
    tech: { frontend: ['Next.js 14', 'React', 'TypeScript', 'Tailwind CSS'], backend: ['Node.js', 'Express.js', 'REST API', 'JWT Auth'], database: ['MySQL', 'Prisma ORM', 'Cloudinary'] },
    stats: [{ v: '1,000+', l: 'Products' }, { v: '6-Stage', l: 'Order Flow' }, { v: '2', l: 'Payment Modes' }, { v: '∞', l: 'Address Slots' }],
  },
  {
    id: 2,
    tag: 'ERP SYSTEM',
    tagColor: '#10b981',
    icon: '📊',
    bg: '#0f2c1a',
    name: 'NegilaYogi Admin Dashboard',
    client: 'NegilaYogi',
    year: '2026',
    category: 'ERP',
    desc: 'A powerful multi-tenant superadmin ERP platform for NegilaYogi. Gives the superadmin complete control over products, orders, inventory, organizations, and user access rights from a single unified dashboard with real-time analytics.',
    features: [
      'Product inventory management with categories, SKUs, pricing & discounts',
      'Multi-image upload (up to 6 per product) with JSON specifications',
      'Live order tracking & status management across all customers',
      'Organization management with contact & status details',
      'Role-based access control (Superadmin, Admin, Staff)',
      'Real-time dashboard with category-wise product analytics',
      'Bulk actions: Excel / PDF export, duplicate, feature, delete',
    ],
    tech: { frontend: ['Next.js 14', 'React', 'TypeScript', 'Tailwind CSS'], backend: ['Node.js', 'Express.js', 'REST API', 'JWT Auth'], database: ['MySQL', 'Prisma ORM', 'Cloudinary'] },
    stats: [{ v: '1,146+', l: 'Products' }, { v: '6', l: 'Categories' }, { v: '3', l: 'Access Roles' }, { v: '50+', l: 'Daily Uploads' }],
  },
  {
    id: 3,
    tag: 'FINTECH',
    tagColor: '#f59e0b',
    icon: '🏦',
    bg: '#2a1a0a',
    name: 'Invoice Pro',
    client: 'Manpower Solutions',
    year: '2025',
    category: 'Web',
    desc: 'Automated invoicing system specifically built for Manpower Solutions AI. Generates invoices based on client-specific data, ensuring accuracy, clarity, and compliance with GST regulations. Offers a clean, professional format that simplifies billing processes.',
    features: [
      'Auto-generated invoices with client-specific data',
      'GST compliance with accurate tax calculation',
      'Professional invoice format with structured layout',
      'Date range billing with service & quantity tracking',
      'Discount & total amount computation',
      'PDF export for sharing with clients',
    ],
    tech: { frontend: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'], backend: ['Node.js', 'Express.js', 'REST API'], database: ['MySQL', 'Prisma ORM'] },
    stats: [{ v: 'GST', l: 'Compliant' }, { v: 'PDF', l: 'Export' }, { v: 'Auto', l: 'Generation' }, { v: '100%', l: 'Accurate' }],
  },
  {
    id: 4,
    tag: 'MOBILE APP',
    tagColor: '#6366f1',
    icon: '📲',
    bg: '#1a1030',
    name: 'HAK Connect App',
    client: 'HAK Projects',
    year: '2025',
    category: 'Mobile',
    desc: 'Cross-platform mobile app keeping businesses connected in real-time. Features push notifications, business dashboards, quick actions, and a clean mobile-first interface for teams on the go.',
    features: [
      'Cross-platform iOS & Android support',
      'Real-time push notifications',
      'Business dashboard with key metrics',
      'Quick action shortcuts',
      'Secure login with JWT Auth',
      'Offline-first data caching',
    ],
    tech: { frontend: ['React Native', 'TypeScript', 'Expo'], backend: ['Node.js', 'Express.js', 'REST API', 'JWT Auth'], database: ['MySQL', 'AWS S3'] },
    stats: [{ v: 'iOS', l: '& Android' }, { v: 'Real-time', l: 'Notifications' }, { v: 'Offline', l: 'First' }, { v: 'Secure', l: 'JWT Auth' }],
  },
  {
    id: 5,
    tag: 'UI/UX',
    tagColor: '#ec4899',
    icon: '🎨',
    bg: '#2a0a1a',
    name: 'Brand Identity Kit',
    client: 'Startup Client',
    year: '2025',
    category: 'Design',
    desc: 'Complete brand identity and design system for a growing startup — includes logo design, color palettes, typography system, UI components, and a full style guide for consistent brand application across all platforms.',
    features: [
      'Logo design with multiple variants',
      'Color palette & typography system',
      'UI component library',
      'Brand style guide documentation',
      'Responsive design tokens',
      'Figma design file handoff',
    ],
    tech: { frontend: ['Next.js', 'Tailwind CSS', 'Figma'], backend: ['—'], database: ['—'] },
    stats: [{ v: 'Figma', l: 'Design File' }, { v: 'Style', l: 'Guide' }, { v: 'Component', l: 'Library' }, { v: 'Multi', l: 'Platform' }],
  },
  {
    id: 6,
    tag: 'CLOUD',
    tagColor: '#38bdf8',
    icon: '☁️',
    bg: '#0a1e2a',
    name: 'AWS Migration',
    client: 'Enterprise Client',
    year: '2024',
    category: 'Cloud',
    desc: 'Seamless cloud migration delivering 60% cost reduction for the client with zero downtime. Migrated legacy infrastructure to AWS with EC2, S3, CloudFront, and automated CI/CD pipelines for continuous deployment.',
    features: [
      '60% infrastructure cost reduction',
      'Zero-downtime migration strategy',
      'AWS EC2 auto-scaling setup',
      'S3 + CloudFront CDN configuration',
      'CI/CD pipeline with GitHub Actions',
      'Monitoring with AWS CloudWatch',
    ],
    tech: { frontend: ['Next.js', 'React'], backend: ['Node.js', 'Docker', 'GitHub Actions'], database: ['AWS RDS', 'AWS S3', 'CloudFront'] },
    stats: [{ v: '60%', l: 'Cost Saved' }, { v: '0', l: 'Downtime' }, { v: 'Auto', l: 'Scaling' }, { v: 'CDN', l: 'CloudFront' }],
  },
];

const FILTERS = ['All', 'Web', 'ERP', 'Mobile', 'Design', 'Cloud'];

export default function ProjectsPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('All');
  const [expanded, setExpanded] = useState<number | null>(null);

  const filtered = active === 'All' ? ALL_PROJECTS : ALL_PROJECTS.filter(p => p.category === active);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800;900&family=Nunito:wght@400;500;600;700;800&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        :root {
          --bg: #f5f5f3; --white: #ffffff; --dark: #0f0e0d;
          --accent: #f97316; --accent-deep: #c2550f;
          --gray-50: #fafaf9; --gray-100: #f0efed; --gray-200: #e4e2de;
          --gray-400: #a09d98; --gray-600: #5c5855; --border: #e4e2de;
        }
        html { scroll-behavior: smooth; }
        body { font-family: 'Nunito', sans-serif; background: var(--bg); color: var(--dark); overflow-x: hidden; }

        /* NAV */
        nav { position: sticky; top: 0; z-index: 100; padding: 0 5%; display: flex; align-items: center; justify-content: space-between; height: 64px; background: rgba(255,255,255,0.92); backdrop-filter: blur(16px); border-bottom: 1px solid var(--border); }
        .nav-logo { font-family: 'Outfit', sans-serif; font-size: 1.35rem; font-weight: 800; color: var(--dark); text-decoration: none; letter-spacing: -0.3px; }
        .nav-logo span { color: var(--accent); }
        .nav-links { display: flex; gap: 2rem; list-style: none; align-items: center; }
        .nav-links a { color: var(--gray-600); text-decoration: none; font-size: 0.92rem; font-weight: 600; transition: color 0.2s; }
        .nav-links a:hover { color: var(--dark); }
        .nav-links a.active { color: var(--accent); }
        .nav-cta { background: var(--accent) !important; color: #fff !important; padding: 0.45rem 1.2rem !important; border-radius: 8px; font-weight: 700 !important; }
        .nav-cta:hover { background: var(--accent-deep) !important; }
        .hamburger { display: none; flex-direction: column; gap: 5px; cursor: pointer; background: none; border: none; }
        .hamburger span { display: block; width: 24px; height: 2px; background: var(--dark); border-radius: 2px; }
        .mobile-menu { display: none; position: fixed; top: 64px; left: 0; right: 0; background: rgba(255,255,255,0.98); backdrop-filter: blur(16px); border-bottom: 1px solid var(--border); padding: 1.5rem 5%; z-index: 99; flex-direction: column; gap: 1rem; }
        .mobile-menu.open { display: flex; }
        .mobile-menu a { color: var(--gray-600); text-decoration: none; font-size: 1rem; padding: 0.5rem 0; border-bottom: 1px solid var(--border); font-weight: 600; }
        .mob-cta { background: var(--accent); color: #fff !important; padding: 0.75rem !important; border-radius: 8px; font-weight: 700 !important; text-align: center; border-bottom: none !important; margin-top: 0.5rem; }

        /* HERO */
        .page-hero { background: var(--white); padding: 80px 5% 64px; text-align: center; position: relative; overflow: hidden; }
        .page-hero::before { content: ''; position: absolute; top: -120px; left: 50%; transform: translateX(-50%); width: 800px; height: 400px; background: radial-gradient(ellipse, rgba(249,115,22,0.09) 0%, transparent 65%); pointer-events: none; }
        .eyebrow { display: inline-flex; align-items: center; gap: 8px; font-family: 'Outfit', sans-serif; font-size: 0.72rem; font-weight: 700; text-transform: uppercase; letter-spacing: 2.5px; color: var(--accent); background: rgba(249,115,22,0.08); padding: 6px 16px; border-radius: 20px; border: 1px solid rgba(249,115,22,0.15); margin-bottom: 1.4rem; }
        .page-hero h1 { font-family: 'Outfit', sans-serif; font-size: clamp(2.8rem, 6vw, 5rem); font-weight: 900; letter-spacing: -2.5px; color: var(--dark); line-height: 1.0; margin-bottom: 1.2rem; }
        .page-hero h1 em { color: var(--accent); font-style: normal; }
        .page-hero p { color: var(--gray-600); font-size: 1.05rem; line-height: 1.75; max-width: 540px; margin: 0 auto; font-weight: 500; }

        /* COUNTER STRIP */
        .counter-strip { background: var(--dark); padding: 32px 5%; }
        .counter-inner { max-width: 1180px; margin: 0 auto; display: grid; grid-template-columns: repeat(4, 1fr); gap: 0; }
        .counter-item { text-align: center; padding: 16px; border-right: 1px solid rgba(255,255,255,0.07); }
        .counter-item:last-child { border-right: none; }
        .counter-num { font-family: 'Outfit', sans-serif; font-size: 2.4rem; font-weight: 900; color: var(--accent); letter-spacing: -2px; }
        .counter-lbl { font-size: 0.78rem; color: rgba(255,255,255,0.45); font-weight: 600; text-transform: uppercase; letter-spacing: 1px; margin-top: 4px; }

        /* MAIN */
        .main-wrap { max-width: 1180px; margin: 0 auto; padding: 64px 5% 100px; }

        /* FILTERS */
        .filter-row { display: flex; gap: 10px; flex-wrap: wrap; margin-bottom: 48px; align-items: center; justify-content: center; }
        .filter-btn { font-family: 'Outfit', sans-serif; font-size: 0.85rem; font-weight: 700; padding: 9px 22px; border-radius: 40px; cursor: pointer; border: 1.5px solid var(--border); background: var(--white); color: var(--gray-600); transition: all 0.2s; letter-spacing: 0.3px; }
        .filter-btn:hover { border-color: var(--accent); color: var(--accent); }
        .filter-btn.on { background: var(--accent); border-color: var(--accent); color: #fff; }

        /* PROJECT GRID */
        .project-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }

        /* CARD */
        .project-card { background: var(--white); border: 1.5px solid var(--border); border-radius: 20px; overflow: hidden; transition: box-shadow 0.25s, transform 0.25s, border-color 0.25s; cursor: pointer; }
        .project-card:hover { box-shadow: 0 12px 40px rgba(0,0,0,0.09); transform: translateY(-4px); border-color: rgba(249,115,22,0.25); }
        .project-card.open { border-color: var(--accent); box-shadow: 0 16px 56px rgba(249,115,22,0.12); transform: none; }

        /* THUMB */
        .card-thumb { height: 180px; display: flex; align-items: center; justify-content: center; font-size: 3.2rem; position: relative; }
        .card-tag { position: absolute; top: 14px; left: 14px; font-family: 'Outfit', sans-serif; font-size: 0.6rem; font-weight: 800; text-transform: uppercase; letter-spacing: 1.5px; padding: 4px 10px; border-radius: 20px; }
        .card-year { position: absolute; top: 14px; right: 14px; font-family: 'Outfit', sans-serif; font-size: 0.72rem; font-weight: 700; color: rgba(255,255,255,0.5); background: rgba(0,0,0,0.3); padding: 3px 10px; border-radius: 20px; }

        /* CARD BODY */
        .card-body { padding: 22px 24px 20px; }
        .card-name { font-family: 'Outfit', sans-serif; font-size: 1.05rem; font-weight: 800; color: var(--dark); margin-bottom: 6px; letter-spacing: -0.3px; }
        .card-client { font-size: 0.75rem; color: var(--gray-400); font-weight: 600; margin-bottom: 10px; }
        .card-desc { color: var(--gray-600); font-size: 0.82rem; line-height: 1.65; margin-bottom: 14px; font-weight: 500; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; }
        .card-tech { display: flex; gap: 6px; flex-wrap: wrap; margin-bottom: 16px; }
        .tech-pill { font-family: 'Outfit', sans-serif; font-size: 0.68rem; font-weight: 700; padding: 3px 9px; border-radius: 6px; background: var(--gray-100); color: var(--gray-600); }
        .card-toggle { display: flex; align-items: center; justify-content: space-between; padding-top: 14px; border-top: 1px solid var(--border); }
        .toggle-label { font-family: 'Outfit', sans-serif; font-size: 0.78rem; font-weight: 700; color: var(--accent); }
        .toggle-icon { width: 28px; height: 28px; border-radius: 50%; background: rgba(249,115,22,0.1); display: flex; align-items: center; justify-content: center; font-size: 0.9rem; transition: transform 0.2s; }
        .toggle-icon.rotated { transform: rotate(180deg); }

        /* EXPANDED DETAIL */
        .card-detail { border-top: 1px solid var(--border); background: var(--gray-50); overflow: hidden; max-height: 0; transition: max-height 0.4s ease; }
        .card-detail.visible { max-height: 900px; }
        .detail-inner { padding: 24px; }

        /* Stats row inside detail */
        .detail-stats { display: grid; grid-template-columns: repeat(4, 1fr); gap: 0; background: var(--white); border: 1px solid var(--border); border-radius: 12px; overflow: hidden; margin-bottom: 20px; }
        .detail-stat { text-align: center; padding: 16px 8px; border-right: 1px solid var(--border); }
        .detail-stat:last-child { border-right: none; }
        .ds-val { font-family: 'Outfit', sans-serif; font-size: 1.2rem; font-weight: 900; color: var(--accent); }
        .ds-lbl { font-size: 0.68rem; color: var(--gray-400); font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; margin-top: 2px; }

        /* Features */
        .detail-section-label { font-family: 'Outfit', sans-serif; font-size: 0.68rem; font-weight: 800; text-transform: uppercase; letter-spacing: 1.5px; color: var(--gray-400); margin-bottom: 12px; }
        .feature-list { list-style: none; display: flex; flex-direction: column; gap: 8px; margin-bottom: 20px; }
        .feature-list li { display: flex; align-items: flex-start; gap: 10px; font-size: 0.82rem; color: var(--gray-600); line-height: 1.5; font-weight: 500; }
        .feat-dot { width: 18px; height: 18px; border-radius: 50%; background: var(--accent); display: flex; align-items: center; justify-content: center; font-size: 0.55rem; color: #fff; font-weight: 900; flex-shrink: 0; margin-top: 1px; }

        /* Tech groups */
        .tech-groups { display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; }
        .tech-group { background: var(--white); border: 1px solid var(--border); border-radius: 10px; padding: 14px; }
        .tg-label { font-family: 'Outfit', sans-serif; font-size: 0.62rem; font-weight: 800; text-transform: uppercase; letter-spacing: 1px; color: var(--gray-400); margin-bottom: 10px; }
        .tg-tags { display: flex; flex-wrap: wrap; gap: 6px; }
        .tg-tag { font-size: 0.7rem; font-weight: 700; padding: 3px 9px; border-radius: 6px; font-family: 'Outfit', sans-serif; }
        .tg-tag.fe { background: rgba(59,130,246,0.08); color: #2563eb; }
        .tg-tag.be { background: rgba(16,185,129,0.08); color: #059669; }
        .tg-tag.db { background: rgba(245,158,11,0.08); color: #d97706; }

        /* CTA BAND */
        .cta-band { background: var(--dark); border-radius: 24px; padding: 56px 48px; margin: 60px 0 0; display: flex; align-items: center; justify-content: space-between; gap: 32px; flex-wrap: wrap; }
        .cta-text h2 { font-family: 'Outfit', sans-serif; font-size: clamp(1.6rem, 3vw, 2.4rem); font-weight: 900; color: #fff; letter-spacing: -1px; margin-bottom: 8px; }
        .cta-text h2 span { color: var(--accent); }
        .cta-text p { color: #888; font-size: 0.95rem; font-weight: 500; }
        .btn-cta { background: var(--accent); color: #fff; padding: 14px 32px; border-radius: 10px; font-family: 'Outfit', sans-serif; font-size: 1rem; font-weight: 700; text-decoration: none; transition: background 0.2s, transform 0.15s; white-space: nowrap; }
        .btn-cta:hover { background: var(--accent-deep); transform: translateY(-2px); }

        /* FOOTER */
        footer { background: #0f0e0d; border-top: 1px solid rgba(255,255,255,0.07); padding: 3.5rem 5%; display: grid; grid-template-columns: 2fr 1fr 1fr; gap: 3rem; }
        .footer-logo { font-family: 'Outfit', sans-serif; font-size: 1.3rem; font-weight: 800; color: #f5f5f0; text-decoration: none; }
        .footer-logo span { color: var(--accent); }
        .footer-desc { color: #666; font-size: 0.88rem; line-height: 1.75; margin-top: 0.9rem; max-width: 260px; }
        .footer-col h4 { font-family: 'Outfit', sans-serif; font-size: 0.72rem; font-weight: 700; text-transform: uppercase; letter-spacing: 1.5px; color: #555; margin-bottom: 1.1rem; }
        .footer-col ul { list-style: none; }
        .footer-col li { margin-bottom: 0.65rem; }
        .footer-col a { color: #999; text-decoration: none; font-size: 0.88rem; font-weight: 600; transition: color 0.2s; }
        .footer-col a:hover { color: #f5f5f0; }
        .footer-bottom { background: #0f0e0d; border-top: 1px solid rgba(255,255,255,0.05); padding: 1.2rem 5%; display: flex; justify-content: space-between; align-items: center; color: #555; font-size: 0.8rem; font-weight: 600; }

        /* RESPONSIVE */
        @media (max-width: 960px) {
          .nav-links { display: none; }
          .hamburger { display: flex; }
          .project-grid { grid-template-columns: 1fr 1fr; }
          .counter-inner { grid-template-columns: repeat(2, 1fr); }
          .counter-item:nth-child(2) { border-right: none; }
          .counter-item:nth-child(3) { border-top: 1px solid rgba(255,255,255,0.07); }
          footer { grid-template-columns: 1fr 1fr; }
        }
        @media (max-width: 640px) {
          .project-grid { grid-template-columns: 1fr; }
          .tech-groups { grid-template-columns: 1fr; }
          .detail-stats { grid-template-columns: 1fr 1fr; }
          .detail-stat:nth-child(2) { border-right: none; }
          .detail-stat:nth-child(3) { border-top: 1px solid var(--border); }
          .cta-band { padding: 36px 28px; flex-direction: column; }
          footer { grid-template-columns: 1fr; }
          .footer-bottom { flex-direction: column; gap: 0.5rem; text-align: center; }
        }
      `}</style>

      {/* NAV */}
      <nav>
        <Link href="/" className="nav-logo">HAK <span>Projects</span></Link>
        <ul className="nav-links">
          <li><Link href="/home">Home</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/service">Services</Link></li>
          <li><Link href="/projects" className="active">Projects</Link></li>
          <li><Link href="/contact" className="nav-cta">Contact</Link></li>
        </ul>
        <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)} aria-label="menu">
          <span /><span /><span />
        </button>
      </nav>
      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        <Link href="/home"     onClick={() => setMenuOpen(false)}>Home</Link>
        <Link href="/about"    onClick={() => setMenuOpen(false)}>About</Link>
        <Link href="/service"  onClick={() => setMenuOpen(false)}>Services</Link>
        <Link href="/projects" onClick={() => setMenuOpen(false)}>Projects</Link>
        <Link href="/contact"  className="mob-cta" onClick={() => setMenuOpen(false)}>Contact</Link>
      </div>

      {/* HERO */}
      <section className="page-hero">
        <div className="eyebrow">✦ Our Work</div>
        <h1>Projects We&apos;re<br /><em>Proud Of</em></h1>
        <p>Real-world applications built end-to-end — from database architecture to pixel-perfect UI. Click any project to explore full details.</p>
      </section>

      {/* COUNTER STRIP */}
      <div className="counter-strip">
        <div className="counter-inner">
          {[
            { num: '50+', lbl: 'Projects Delivered' },
            { num: '30+', lbl: 'Happy Clients' },
            { num: '6',   lbl: 'Featured Projects' },
            { num: '5+',  lbl: 'Years Experience' },
          ].map(c => (
            <div className="counter-item" key={c.lbl}>
              <div className="counter-num">{c.num}</div>
              <div className="counter-lbl">{c.lbl}</div>
            </div>
          ))}
        </div>
      </div>

      {/* MAIN */}
      <div className="main-wrap">

        {/* FILTERS */}
        <div className="filter-row">
          {FILTERS.map(f => (
            <button
              key={f}
              className={`filter-btn ${active === f ? 'on' : ''}`}
              onClick={() => { setActive(f); setExpanded(null); }}
            >
              {f}
            </button>
          ))}
        </div>

        {/* GRID */}
        <div className="project-grid">
          {filtered.map(p => {
            const isOpen = expanded === p.id;
            const allTech = [...p.tech.frontend, ...p.tech.backend, ...p.tech.database].filter(t => t !== '—').slice(0, 3);
            return (
              <div
                key={p.id}
                className={`project-card ${isOpen ? 'open' : ''}`}
                onClick={() => setExpanded(isOpen ? null : p.id)}
              >
                {/* THUMB */}
                <div className="card-thumb" style={{ background: p.bg }}>
                  <span>{p.icon}</span>
                  <span
                    className="card-tag"
                    style={{ background: `${p.tagColor}25`, color: p.tagColor, border: `1px solid ${p.tagColor}50` }}
                  >
                    {p.tag}
                  </span>
                  <span className="card-year">{p.year}</span>
                </div>

                {/* BODY */}
                <div className="card-body">
                  <div className="card-name">{p.name}</div>
                  <div className="card-client">Client: {p.client}</div>
                  <div className="card-desc">{p.desc}</div>
                  <div className="card-tech">
                    {allTech.map(t => <span className="tech-pill" key={t}>{t}</span>)}
                  </div>
                  <div className="card-toggle">
                    <span className="toggle-label">{isOpen ? 'Hide Details' : 'View Details'}</span>
                    <span className={`toggle-icon ${isOpen ? 'rotated' : ''}`}>▼</span>
                  </div>
                </div>

                {/* EXPANDED DETAIL */}
                <div className={`card-detail ${isOpen ? 'visible' : ''}`} onClick={e => e.stopPropagation()}>
                  <div className="detail-inner">

                    {/* Stats */}
                    <div className="detail-stats">
                      {p.stats.map(s => (
                        <div className="detail-stat" key={s.l}>
                          <div className="ds-val">{s.v}</div>
                          <div className="ds-lbl">{s.l}</div>
                        </div>
                      ))}
                    </div>

                    {/* Features */}
                    <div className="detail-section-label">Key Features</div>
                    <ul className="feature-list">
                      {p.features.map((f, i) => (
                        <li key={i}>
                          <span className="feat-dot">{i + 1}</span>
                          {f}
                        </li>
                      ))}
                    </ul>

                    {/* Tech Stack */}
                    <div className="detail-section-label">Tech Stack</div>
                    <div className="tech-groups">
                      <div className="tech-group">
                        <div className="tg-label">Frontend</div>
                        <div className="tg-tags">
                          {p.tech.frontend.map(t => t !== '—' && <span className="tg-tag fe" key={t}>{t}</span>)}
                        </div>
                      </div>
                      <div className="tech-group">
                        <div className="tg-label">Backend</div>
                        <div className="tg-tags">
                          {p.tech.backend.map(t => t !== '—' && <span className="tg-tag be" key={t}>{t}</span>)}
                        </div>
                      </div>
                      <div className="tech-group">
                        <div className="tg-label">Database</div>
                        <div className="tg-tags">
                          {p.tech.database.map(t => t !== '—' && <span className="tg-tag db" key={t}>{t}</span>)}
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA BAND */}
        <div className="cta-band">
          <div className="cta-text">
            <h2>Have a project in <span>mind?</span></h2>
            <p>We&apos;d love to hear about it. Let&apos;s build something great together.</p>
          </div>
          <Link href="/contact" className="btn-cta">Start a Project →</Link>
        </div>

      </div>

      {/* FOOTER */}
      <footer>
        <div>
          <Link href="/" className="footer-logo">HAK <span>Projects</span></Link>
          <p className="footer-desc">We provide cutting-edge IT solutions to help businesses grow and succeed in the digital world. Let&apos;s build something great together.</p>
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