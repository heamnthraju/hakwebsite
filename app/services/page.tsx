// 'use client';
// import { useState } from 'react';
// import Link from 'next/link';

// export default function ServicePage() {
//   const [menuOpen, setMenuOpen] = useState(false);

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

//         nav { position: sticky; top: 0; left: 0; right: 0; z-index: 100; padding: 0 5%; display: flex; align-items: center; justify-content: space-between; height: 70px; background: rgba(10,10,15,0.95); backdrop-filter: blur(20px); border-bottom: 1px solid var(--border); }
//         .nav-logo { font-family: 'Syne', sans-serif; font-size: 1.5rem; font-weight: 800; color: var(--white); text-decoration: none; letter-spacing: -0.5px; }
//         .nav-logo span { color: var(--accent); }
//         .nav-links { display: flex; gap: 2rem; list-style: none; }
//         .nav-links a { color: var(--muted); text-decoration: none; font-size: 0.9rem; font-weight: 500; transition: color 0.2s; }
//         .nav-links a:hover { color: var(--white); }
//         .nav-links a.active { color: var(--accent); font-weight: 600; }
//         .nav-cta { background: var(--accent); color: var(--black) !important; padding: 0.5rem 1.2rem; border-radius: 6px; font-weight: 600 !important; }
//         .nav-cta:hover { background: var(--accent2) !important; }
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

//         .section { padding: 80px 5%; }
//         .section-title { font-family: 'Syne', sans-serif; font-size: clamp(1.8rem, 3vw, 2.5rem); font-weight: 800; letter-spacing: -1px; margin-bottom: 1rem; }

//         .services-main { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem; margin-top: 3rem; }
//         .service-big-card { background: var(--card); border: 1px solid var(--border); border-radius: 20px; padding: 2.5rem 2rem; transition: all 0.3s ease; cursor: default; position: relative; overflow: hidden; }
//         .service-big-card::before { content: ''; position: absolute; top: 0; left: 0; right: 0; height: 3px; background: linear-gradient(90deg, var(--accent), var(--accent2)); transform: scaleX(0); transition: transform 0.3s ease; transform-origin: left; }
//         .service-big-card:hover::before { transform: scaleX(1); }
//         .service-big-card:hover { border-color: rgba(249,115,22,0.2); transform: translateY(-6px); box-shadow: 0 30px 60px rgba(0,0,0,0.4); }
//         .svc-icon { width: 60px; height: 60px; border-radius: 16px; background: rgba(249,115,22,0.12); border: 1px solid rgba(249,115,22,0.2); display: flex; align-items: center; justify-content: center; font-size: 1.8rem; margin-bottom: 1.5rem; }
//         .service-big-card h3 { font-family: 'Syne', sans-serif; font-size: 1.2rem; font-weight: 700; margin-bottom: 0.8rem; }
//         .service-big-card p { color: var(--muted); font-size: 0.88rem; line-height: 1.7; margin-bottom: 1.5rem; }
//         .svc-features { list-style: none; }
//         .svc-features li { color: var(--muted); font-size: 0.82rem; padding: 0.3rem 0; display: flex; align-items: center; gap: 8px; }
//         .svc-features li::before { content: '✓'; color: var(--accent); font-weight: 700; flex-shrink: 0; }

//         .process-section { background: var(--dark); }
//         .process-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 1.5rem; margin-top: 3rem; }
//         .process-card { background: var(--card); border: 1px solid var(--border); border-radius: 16px; padding: 2rem 1.5rem; text-align: center; position: relative; }
//         .process-num { font-family: 'Syne', sans-serif; font-size: 2.5rem; font-weight: 800; color: rgba(249,115,22,0.15); margin-bottom: 1rem; }
//         .process-card h3 { font-family: 'Syne', sans-serif; font-size: 1rem; font-weight: 700; margin-bottom: 0.5rem; }
//         .process-card p { color: var(--muted); font-size: 0.82rem; line-height: 1.6; }

//         .cta-section { background: linear-gradient(135deg, rgba(249,115,22,0.08), rgba(249,115,22,0.02)); border: 1px solid rgba(249,115,22,0.15); border-radius: 24px; padding: 4rem; text-align: center; margin: 0 5% 80px; }
//         .cta-section h2 { font-family: 'Syne', sans-serif; font-size: clamp(1.8rem, 3vw, 2.8rem); font-weight: 800; letter-spacing: -1px; margin-bottom: 1rem; }
//         .cta-section p { color: var(--muted); font-size: 1rem; margin-bottom: 2rem; }
//         .btn-primary { background: var(--accent); color: var(--black); padding: 0.85rem 2rem; border-radius: 8px; font-weight: 700; font-size: 0.95rem; text-decoration: none; display: inline-block; transition: all 0.2s; font-family: 'DM Sans', sans-serif; }
//         .btn-primary:hover { background: var(--accent2); transform: translateY(-2px); box-shadow: 0 8px 30px rgba(249,115,22,0.35); }
//         .btn-outline { background: transparent; color: var(--white); padding: 0.85rem 2rem; border-radius: 8px; font-weight: 600; font-size: 0.95rem; text-decoration: none; border: 1px solid var(--border); display: inline-block; transition: all 0.2s; }
//         .btn-outline:hover { border-color: rgba(255,255,255,0.3); transform: translateY(-2px); }

//         footer { border-top: 1px solid var(--border); padding: 3rem 5%; display: grid; grid-template-columns: 2fr 1fr 1fr; gap: 3rem; }
//         .footer-col h4 { font-family: 'Syne', sans-serif; font-size: 0.85rem; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 1rem; }
//         .footer-col ul { list-style: none; }
//         .footer-col ul li { margin-bottom: 0.6rem; }
//         .footer-col ul a { color: var(--muted); text-decoration: none; font-size: 0.88rem; transition: color 0.2s; }
//         .footer-col ul a:hover { color: var(--white); }
//         .footer-brand p { color: var(--muted); font-size: 0.9rem; line-height: 1.7; margin-top: 1rem; max-width: 260px; }
//         .footer-bottom { border-top: 1px solid var(--border); padding: 1.5rem 5%; display: flex; justify-content: space-between; align-items: center; color: var(--muted); font-size: 0.82rem; }

//         @media (max-width: 900px) {
//           .services-main { grid-template-columns: 1fr 1fr; }
//           .process-grid { grid-template-columns: 1fr 1fr; }
//           .nav-links { display: none; }
//           .hamburger { display: flex; }
//           footer { grid-template-columns: 1fr 1fr; }
//         }
//         @media (max-width: 600px) {
//           .services-main { grid-template-columns: 1fr; }
//           .process-grid { grid-template-columns: 1fr; }
//           footer { grid-template-columns: 1fr; }
//           .footer-bottom { flex-direction: column; gap: 0.5rem; text-align: center; }
//         }
//       `}</style>

//       <nav>
//         <Link href="/" className="nav-logo">HAK <span>Projects</span></Link>
//         <ul className="nav-links">
//           <li><Link href="/home">Home</Link></li>
//           <li><Link href="/about">About</Link></li>
//           <li><Link href="/service" className="active">Services</Link></li>
//           <li><Link href="/projects">Projects</Link></li>
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

//       {/* HERO */}
//       <section className="page-hero">
//         <span className="section-label">What We Offer</span>
//         <h1>Our <span>Services</span></h1>
//         <p>From web development to cloud solutions, we deliver end-to-end IT services that help your business grow faster and smarter.</p>
//       </section>

//       {/* MAIN SERVICES */}
//       <section className="section">
//         <div className="services-main">
//           {[
//             { icon:'🌐', title:'Web Development', desc:'We design and develop fast, responsive, SEO-friendly websites and web applications tailored to your business goals.', features:['React & Next.js','Custom CMS','E-Commerce','SEO Optimized','Mobile Responsive'] },
//             { icon:'📱', title:'Mobile App Development', desc:'We build cross-platform and native mobile apps that deliver exceptional user experiences on iOS and Android.', features:['React Native','iOS & Android','Push Notifications','Offline Support','App Store Publishing'] },
//             { icon:'🗄️', title:'ERP Solutions', desc:'Custom ERP systems that streamline your operations, manage resources, and boost business productivity.', features:['HR & Payroll','Inventory Management','Finance Module','Custom Workflows','Real-time Reports'] },
//             { icon:'☁️', title:'AWS Cloud Services', desc:'We leverage AWS to build secure, scalable cloud infrastructure tailored for your business workloads.', features:['Cloud Migration','EC2 & S3','Auto Scaling','Cost Optimization','24/7 Monitoring'] },
//             { icon:'🎨', title:'UI/UX Design', desc:'Stunning, user-centric designs that convert visitors into customers and create memorable brand experiences.', features:['Figma Prototyping','User Research','Brand Identity','Design Systems','Usability Testing'] },
//             { icon:'📈', title:'Digital Marketing', desc:'Data-driven digital marketing strategies to grow your online presence and generate quality leads.', features:['SEO & SEM','Social Media','Email Campaigns','Analytics','Content Strategy'] },
//           ].map((s, i) => (
//             <div className="service-big-card" key={i}>
//               <div className="svc-icon">{s.icon}</div>
//               <h3>{s.title}</h3>
//               <p>{s.desc}</p>
//               <ul className="svc-features">
//                 {s.features.map(f => <li key={f}>{f}</li>)}
//               </ul>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* PROCESS */}
//       <section className="section process-section">
//         <div style={{textAlign:'center'}}>
//           <span className="section-label">How We Work</span>
//           <h2 className="section-title">Our Simple Process</h2>
//         </div>
//         <div className="process-grid">
//           {[
//             { num:'01', title:'Discovery', desc:'We understand your goals, requirements, and challenges through in-depth consultations.' },
//             { num:'02', title:'Planning', desc:'We create a detailed roadmap, timeline, and technical architecture for your project.' },
//             { num:'03', title:'Development', desc:'Our team builds your solution with clean code, best practices, and regular updates.' },
//             { num:'04', title:'Launch & Support', desc:'We deploy, test, and provide ongoing support to ensure everything runs perfectly.' },
//           ].map((p) => (
//             <div className="process-card" key={p.num}>
//               <div className="process-num">{p.num}</div>
//               <h3>{p.title}</h3>
//               <p>{p.desc}</p>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* CTA */}
//       <div className="cta-section">
//         <h2>Ready to Start Your Project?</h2>
//         <p>Let's discuss how we can help your business grow with the right technology solutions.</p>
//         <div style={{display:'flex', gap:'1rem', justifyContent:'center', flexWrap:'wrap'}}>
//           <Link href="/contact" className="btn-primary">Get Free Consultation</Link>
//           <Link href="/projects" className="btn-outline">See Our Work</Link>
//         </div>
//       </div>

//       {/* FOOTER */}
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
//             <li><Link href="/projects">Projects</Link></li>
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

const SERVICES = [
  {
    id: 1,
    icon: '🌐',
    color: '#f97316',
    colorLight: 'rgba(249,115,22,0.08)',
    title: 'Web Development',
    tagline: 'Fast, Responsive & SEO-Ready Websites',
    desc: 'We design and develop high-quality, custom web applications tailored to your business needs. From landing pages to complex full-stack platforms, we build it all with performance and scalability in mind.',
    features: [
      'Custom website & web app development',
      'Next.js & React single-page applications',
      'RESTful API design & integration',
      'SEO optimization & Core Web Vitals',
      'Responsive, mobile-first design',
      'Authentication, roles & access control',
      'Admin dashboards & CMS integration',
      'E-commerce & payment gateway setup',
    ],
    tech: ['Next.js', 'React', 'TypeScript', 'Node.js', 'Tailwind CSS', 'MySQL'],
    deliverables: ['Source Code', 'Deployment', 'Documentation', '30-day Support'],
  },
  {
    id: 2,
    icon: '📱',
    color: '#6366f1',
    colorLight: 'rgba(99,102,241,0.08)',
    title: 'Mobile App Development',
    tagline: 'Cross-Platform Apps for iOS & Android',
    desc: 'We build feature-rich, high-performance mobile applications that keep your business connected. Our cross-platform approach ensures your app runs seamlessly on both iOS and Android from a single codebase.',
    features: [
      'Cross-platform iOS & Android development',
      'React Native & Expo framework',
      'Real-time notifications & live data',
      'Offline-first architecture',
      'Secure JWT authentication',
      'Business dashboards & analytics',
      'App Store & Play Store deployment',
      'Backend API integration',
    ],
    tech: ['React Native', 'Expo', 'TypeScript', 'Node.js', 'AWS', 'MySQL'],
    deliverables: ['APK / IPA Build', 'Store Submission', 'Source Code', '30-day Support'],
  },
  {
    id: 3,
    icon: '🗂️',
    color: '#10b981',
    colorLight: 'rgba(16,185,129,0.08)',
    title: 'ERP Solutions',
    tagline: 'Custom Enterprise Resource Planning Systems',
    desc: 'Our custom ERP solutions streamline your business operations from a single unified platform. We build fully tailored systems for inventory, orders, HR, finance, and more — designed specifically for your workflow.',
    features: [
      'Inventory & product management',
      'Order processing & tracking pipelines',
      'Multi-role access control (Admin, Staff, Viewer)',
      'Organization & contact management',
      'Real-time analytics & reporting dashboards',
      'Bulk data export (Excel / PDF)',
      'GST-compliant invoicing system',
      'Multi-image & document upload support',
    ],
    tech: ['Next.js', 'React', 'Node.js', 'MySQL', 'Prisma ORM', 'Cloudinary'],
    deliverables: ['Full System', 'Admin Panel', 'User Training', '60-day Support'],
  },
  {
    id: 4,
    icon: '☁️',
    color: '#38bdf8',
    colorLight: 'rgba(56,189,248,0.08)',
    title: 'AWS Cloud Services',
    tagline: 'Scalable, Secure & Reliable Cloud Infrastructure',
    desc: 'We leverage AWS cloud infrastructure to deliver secure, scalable, and cost-efficient solutions for your business. From cloud migration to serverless architectures, we handle the entire cloud journey.',
    features: [
      'AWS EC2 server setup & auto-scaling',
      'S3 bucket configuration & file storage',
      'CloudFront CDN for global performance',
      'RDS database hosting & backups',
      'Zero-downtime cloud migration',
      'CI/CD pipelines with GitHub Actions',
      'CloudWatch monitoring & alerting',
      'Cost optimization (up to 60% savings)',
    ],
    tech: ['AWS EC2', 'AWS S3', 'CloudFront', 'AWS RDS', 'Docker', 'GitHub Actions'],
    deliverables: ['Infrastructure Setup', 'CI/CD Pipeline', 'Monitoring', '30-day Support'],
  },
  {
    id: 5,
    icon: '🎨',
    color: '#ec4899',
    colorLight: 'rgba(236,72,153,0.08)',
    title: 'UI/UX Design',
    tagline: 'Beautiful Interfaces That Convert',
    desc: 'We craft visually stunning, user-centric interfaces that create delightful experiences. From wireframes to final pixel-perfect designs, we ensure every interaction feels intuitive and on-brand.',
    features: [
      'User research & wireframing',
      'High-fidelity Figma prototypes',
      'Component library & design system',
      'Brand identity & logo design',
      'Color palette & typography system',
      'Responsive design for all screen sizes',
      'Style guide documentation',
      'Developer handoff with Figma tokens',
    ],
    tech: ['Figma', 'Adobe XD', 'Tailwind CSS', 'Next.js', 'Framer Motion'],
    deliverables: ['Figma File', 'Style Guide', 'Component Library', 'Dev Handoff'],
  },
  {
    id: 6,
    icon: '📈',
    color: '#f59e0b',
    colorLight: 'rgba(245,158,11,0.08)',
    title: 'Digital Marketing',
    tagline: 'Grow Your Business Online',
    desc: 'We help businesses grow their online presence with data-driven digital marketing strategies. From SEO and content marketing to social media and paid campaigns, we handle the full marketing funnel.',
    features: [
      'Search Engine Optimization (SEO)',
      'Google Ads & paid search campaigns',
      'Social media strategy & management',
      'Content marketing & blog writing',
      'Email marketing campaigns',
      'Analytics setup & reporting',
      'Conversion rate optimization (CRO)',
      'Competitor analysis & strategy',
    ],
    tech: ['Google Analytics', 'Google Ads', 'SEMrush', 'Mailchimp', 'Meta Ads'],
    deliverables: ['Strategy Report', 'Monthly Reports', 'Content Calendar', 'Ad Campaigns'],
  },
];

const PROCESS = [
  { step: '01', title: 'Discovery', desc: 'We understand your business goals, target audience, and technical requirements through in-depth consultations.' },
  { step: '02', title: 'Planning', desc: 'We create a detailed project roadmap, tech stack selection, wireframes, and a clear timeline with milestones.' },
  { step: '03', title: 'Development', desc: 'Our team builds your product using agile sprints with regular updates, demos, and your active feedback loop.' },
  { step: '04', title: 'Launch', desc: 'We deploy, test thoroughly, and hand over the final product with documentation, training, and ongoing support.' },
];

export default function ServicePage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [expanded, setExpanded] = useState<number | null>(null);

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

        /* SERVICES GRID */
        .services-wrap { max-width: 1180px; margin: 0 auto; padding: 72px 5% 0; }
        .services-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }

        /* SERVICE CARD */
        .svc-card { background: var(--white); border: 1.5px solid var(--border); border-radius: 20px; overflow: hidden; transition: box-shadow 0.25s, transform 0.25s, border-color 0.25s; cursor: pointer; }
        .svc-card:hover { box-shadow: 0 12px 40px rgba(0,0,0,0.08); transform: translateY(-4px); }
        .svc-card.open { transform: none; box-shadow: 0 16px 48px rgba(0,0,0,0.1); }

        /* CARD HEAD */
        .svc-head { padding: 28px 28px 24px; }
        .svc-icon-wrap { width: 52px; height: 52px; border-radius: 14px; display: flex; align-items: center; justify-content: center; font-size: 1.4rem; margin-bottom: 16px; }
        .svc-title { font-family: 'Outfit', sans-serif; font-size: 1.15rem; font-weight: 800; color: var(--dark); margin-bottom: 4px; letter-spacing: -0.3px; }
        .svc-tagline { font-size: 0.78rem; font-weight: 600; margin-bottom: 14px; }
        .svc-desc { color: var(--gray-600); font-size: 0.84rem; line-height: 1.7; font-weight: 500; margin-bottom: 18px; }

        /* TECH PILLS */
        .svc-tech { display: flex; gap: 6px; flex-wrap: wrap; margin-bottom: 20px; }
        .tech-pill { font-family: 'Outfit', sans-serif; font-size: 0.68rem; font-weight: 700; padding: 4px 10px; border-radius: 6px; background: var(--gray-100); color: var(--gray-600); }

        /* TOGGLE */
        .svc-toggle { display: flex; align-items: center; justify-content: space-between; padding-top: 16px; border-top: 1px solid var(--border); }
        .toggle-text { font-family: 'Outfit', sans-serif; font-size: 0.8rem; font-weight: 700; }
        .toggle-arrow { width: 30px; height: 30px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 0.85rem; transition: transform 0.25s; }
        .toggle-arrow.flipped { transform: rotate(180deg); }

        /* EXPANDED */
        .svc-expanded { border-top: 1px solid var(--border); background: var(--gray-50); overflow: hidden; max-height: 0; transition: max-height 0.4s ease; }
        .svc-expanded.open { max-height: 800px; }
        .svc-exp-inner { padding: 24px 28px 28px; }
        .exp-label { font-family: 'Outfit', sans-serif; font-size: 0.65rem; font-weight: 800; text-transform: uppercase; letter-spacing: 1.5px; color: var(--gray-400); margin-bottom: 14px; }

        /* FEATURES */
        .feat-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 8px; margin-bottom: 24px; }
        .feat-item { display: flex; align-items: flex-start; gap: 8px; font-size: 0.8rem; color: var(--gray-600); line-height: 1.5; font-weight: 500; }
        .feat-check { width: 16px; height: 16px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 0.5rem; color: #fff; font-weight: 900; flex-shrink: 0; margin-top: 2px; }

        /* DELIVERABLES */
        .deliverables { display: flex; gap: 8px; flex-wrap: wrap; }
        .deliv-tag { font-family: 'Outfit', sans-serif; font-size: 0.72rem; font-weight: 700; padding: 5px 12px; border-radius: 20px; border: 1px solid var(--border); background: var(--white); color: var(--gray-600); }

        /* PROCESS SECTION */
        .process-section { background: var(--dark); padding: 80px 5%; margin-top: 80px; }
        .process-inner { max-width: 1180px; margin: 0 auto; }
        .section-eyebrow { display: inline-block; font-family: 'Outfit', sans-serif; font-size: 0.7rem; font-weight: 700; text-transform: uppercase; letter-spacing: 2.5px; color: var(--accent); margin-bottom: 1rem; }
        .section-title { font-family: 'Outfit', sans-serif; font-size: clamp(2rem, 4vw, 3rem); font-weight: 900; letter-spacing: -1.5px; color: #fff; line-height: 1.05; margin-bottom: 0.8rem; }
        .section-sub { color: #888; font-size: 0.95rem; line-height: 1.7; font-weight: 500; max-width: 480px; margin-bottom: 56px; }
        .process-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 24px; }
        .process-card { background: #16161f; border: 1px solid rgba(255,255,255,0.07); border-radius: 16px; padding: 28px 24px; transition: border-color 0.2s, transform 0.2s; }
        .process-card:hover { border-color: rgba(249,115,22,0.3); transform: translateY(-3px); }
        .process-step { font-family: 'Outfit', sans-serif; font-size: 2.5rem; font-weight: 900; color: var(--accent); opacity: 0.3; line-height: 1; margin-bottom: 16px; letter-spacing: -2px; }
        .process-title { font-family: 'Outfit', sans-serif; font-size: 1rem; font-weight: 700; color: #f5f5f0; margin-bottom: 10px; }
        .process-desc { color: #888; font-size: 0.82rem; line-height: 1.65; font-weight: 500; }

        /* STATS BAND */
        .stats-band { background: var(--bg); padding: 60px 5%; }
        .stats-inner { max-width: 1180px; margin: 0 auto; display: grid; grid-template-columns: repeat(4, 1fr); gap: 0; background: var(--white); border: 1.5px solid var(--border); border-radius: 20px; overflow: hidden; }
        .stat-box { text-align: center; padding: 40px 20px; border-right: 1px solid var(--border); }
        .stat-box:last-child { border-right: none; }
        .stat-num { font-family: 'Outfit', sans-serif; font-size: 2.8rem; font-weight: 900; color: var(--accent); letter-spacing: -2px; }
        .stat-lbl { color: var(--gray-600); font-size: 0.82rem; font-weight: 600; margin-top: 4px; text-transform: uppercase; letter-spacing: 0.5px; }

        /* CTA BAND */
        .cta-wrap { max-width: 1180px; margin: 0 auto; padding: 0 5% 100px; }
        .cta-band { background: var(--dark); border-radius: 24px; padding: 56px 48px; display: flex; align-items: center; justify-content: space-between; gap: 32px; flex-wrap: wrap; margin-top: 60px; }
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
        @media (max-width: 1024px) { .services-grid { grid-template-columns: 1fr 1fr; } .process-grid { grid-template-columns: 1fr 1fr; } }
        @media (max-width: 960px) { .nav-links { display: none; } .hamburger { display: flex; } footer { grid-template-columns: 1fr 1fr; } .stats-inner { grid-template-columns: 1fr 1fr; } .stat-box:nth-child(2) { border-right: none; } .stat-box:nth-child(3) { border-top: 1px solid var(--border); } }
        @media (max-width: 640px) { .services-grid { grid-template-columns: 1fr; } .process-grid { grid-template-columns: 1fr; } .feat-grid { grid-template-columns: 1fr; } .cta-band { padding: 36px 28px; flex-direction: column; } footer { grid-template-columns: 1fr; } .footer-bottom { flex-direction: column; gap: 0.5rem; text-align: center; } .stats-inner { grid-template-columns: 1fr 1fr; } }
      `}</style>

      {/* NAV */}
      <nav>
        <Link href="/" className="nav-logo">HAK <span>Projects</span></Link>
        <ul className="nav-links">
          <li><Link href="/home">Home</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/services" className="active">Services</Link></li>
          <li><Link href="/projects">Projects</Link></li>
          <li><Link href="/contact" className="nav-cta">Contact</Link></li>
        </ul>
        <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)} aria-label="menu">
          <span /><span /><span />
        </button>
      </nav>
      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        <Link href="/home"     onClick={() => setMenuOpen(false)}>Home</Link>
        <Link href="/about"    onClick={() => setMenuOpen(false)}>About</Link>
        <Link href="/services"  onClick={() => setMenuOpen(false)}>Services</Link>
        <Link href="/projects" onClick={() => setMenuOpen(false)}>Projects</Link>
        <Link href="/contact"  className="mob-cta" onClick={() => setMenuOpen(false)}>Contact</Link>
      </div>

      {/* HERO */}
      <section className="page-hero">
        <div className="eyebrow">✦ What We Do</div>
        <h1>Services Built for<br /><em>Real Results</em></h1>
        <p>From web apps to cloud infrastructure — we offer end-to-end IT services tailored to grow your business in the digital era. Click any service to explore details.</p>
      </section>

      {/* STATS */}
      <div className="stats-band">
        <div className="stats-inner">
          {[
            { num: '50+', lbl: 'Projects Delivered' },
            { num: '30+', lbl: 'Happy Clients' },
            { num: '6',   lbl: 'Core Services' },
            { num: '5+',  lbl: 'Years Experience' },
          ].map(s => (
            <div className="stat-box" key={s.lbl}>
              <div className="stat-num">{s.num}</div>
              <div className="stat-lbl">{s.lbl}</div>
            </div>
          ))}
        </div>
      </div>

      {/* SERVICES */}
      <div className="services-wrap">
        <div className="services-grid">
          {SERVICES.map(s => {
            const isOpen = expanded === s.id;
            return (
              <div
                key={s.id}
                className={`svc-card ${isOpen ? 'open' : ''}`}
                style={{ borderColor: isOpen ? s.color : undefined }}
                onClick={() => setExpanded(isOpen ? null : s.id)}
              >
                {/* HEAD */}
                <div className="svc-head">
                  <div className="svc-icon-wrap" style={{ background: s.colorLight }}>
                    {s.icon}
                  </div>
                  <div className="svc-title">{s.title}</div>
                  <div className="svc-tagline" style={{ color: s.color }}>{s.tagline}</div>
                  <div className="svc-desc">{s.desc}</div>
                  <div className="svc-tech">
                    {s.tech.slice(0, 4).map(t => (
                      <span className="tech-pill" key={t}>{t}</span>
                    ))}
                  </div>
                  <div className="svc-toggle">
                    <span className="toggle-text" style={{ color: s.color }}>
                      {isOpen ? 'Hide Details' : 'View Details'}
                    </span>
                    <span
                      className={`toggle-arrow ${isOpen ? 'flipped' : ''}`}
                      style={{ background: s.colorLight, color: s.color }}
                    >▼</span>
                  </div>
                </div>

                {/* EXPANDED */}
                <div
                  className={`svc-expanded ${isOpen ? 'open' : ''}`}
                  onClick={e => e.stopPropagation()}
                >
                  <div className="svc-exp-inner">
                    <div className="exp-label">What&apos;s Included</div>
                    <div className="feat-grid">
                      {s.features.map((f, i) => (
                        <div className="feat-item" key={i}>
                          <span className="feat-check" style={{ background: s.color }}>✓</span>
                          {f}
                        </div>
                      ))}
                    </div>
                    <div className="exp-label">Deliverables</div>
                    <div className="deliverables">
                      {s.deliverables.map(d => (
                        <span
                          className="deliv-tag"
                          key={d}
                          style={{ borderColor: s.color + '44', color: s.color, background: s.colorLight }}
                        >
                          {d}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* PROCESS */}
      <section className="process-section">
        <div className="process-inner">
          <div className="section-eyebrow">How We Work</div>
          <h2 className="section-title">Our Development Process</h2>
          <p className="section-sub">A clear, collaborative workflow that keeps you in the loop at every stage — from first call to final launch.</p>
          <div className="process-grid">
            {PROCESS.map(p => (
              <div className="process-card" key={p.step}>
                <div className="process-step">{p.step}</div>
                <div className="process-title">{p.title}</div>
                <div className="process-desc">{p.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className="cta-wrap">
        <div className="cta-band">
          <div className="cta-text">
            <h2>Ready to start your <span>project?</span></h2>
            <p>Let&apos;s discuss your idea and build something great together.</p>
          </div>
          <Link href="/contact" className="btn-cta">Get In Touch →</Link>
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
            <li><Link href="/services">Web Development</Link></li>
            <li><Link href="/services">Mobile Apps</Link></li>
            <li><Link href="/services">ERP Solutions</Link></li>
            <li><Link href="/services">AWS Cloud</Link></li>
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