// // "use client";

// // import React from "react";

// // export default function AboutPage() {
// //   return (
// //     <main
// //       style={{
// //         background: "#0a0a0a",
// //         color: "#fff",
// //         fontFamily: "'Segoe UI', sans-serif",
// //         minHeight: "100vh",
// //       }}
// //     >
// //       {/* ── NAVBAR ── */}
// //       <nav
// //         style={{
// //           display: "flex",
// //           alignItems: "center",
// //           justifyContent: "space-between",
// //           padding: "18px 6%",
// //           borderBottom: "1px solid #1a1a1a",
// //           position: "sticky",
// //           top: 0,
// //           background: "#0a0a0a",
// //           zIndex: 100,
// //         }}
// //       >
// //         <div style={{ fontWeight: 800, fontSize: "1.2rem" }}>
// //           HAK <span style={{ color: "#ff6600" }}>Projects</span>
// //         </div>
// //         <div style={{ display: "flex", alignItems: "center", gap: "32px" }}>
// //           {["Home", "About", "Services", "Projects"].map((item) => (
// //             <a
// //               key={item}
// //               href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
// //               style={{
// //                 color: item === "About" ? "#ff6600" : "#ccc",
// //                 textDecoration: "none",
// //                 fontSize: "0.9rem",
// //                 fontWeight: item === "About" ? 600 : 400,
// //               }}
// //             >
// //               {item}
// //             </a>
// //           ))}
// //           <a
// //             href="/contact"
// //             style={{
// //               background: "#ff6600",
// //               color: "#fff",
// //               padding: "10px 22px",
// //               borderRadius: "8px",
// //               textDecoration: "none",
// //               fontWeight: 600,
// //               fontSize: "0.9rem",
// //             }}
// //           >
// //             Contact
// //           </a>
// //         </div>
// //       </nav>

// //       {/* ── HERO ABOUT SECTION ── */}
// //       <section
// //         style={{
// //           display: "flex",
// //           flexWrap: "wrap",
// //           alignItems: "center",
// //           justifyContent: "space-between",
// //           padding: "80px 6%",
// //           gap: "48px",
// //           minHeight: "90vh",
// //         }}
// //       >
// //         {/* Left */}
// //         <div style={{ flex: "1 1 420px", maxWidth: "560px" }}>
// //           <p
// //             style={{
// //               color: "#ff6600",
// //               fontWeight: 700,
// //               fontSize: "0.8rem",
// //               letterSpacing: "2px",
// //               textTransform: "uppercase",
// //               marginBottom: "20px",
// //             }}
// //           >
// //             About Us
// //           </p>
// //           <h1
// //             style={{
// //               fontSize: "clamp(2.4rem, 5vw, 4rem)",
// //               fontWeight: 900,
// //               lineHeight: 1.1,
// //               marginBottom: "28px",
// //             }}
// //           >
// //             We Build Digital Experiences That Matter
// //           </h1>
// //           <p style={{ color: "#aaa", lineHeight: 1.8, marginBottom: "20px", fontSize: "0.95rem" }}>
// //             At HAK Projects, we are passionate about delivering innovative IT
// //             solutions that transform businesses. Our team of skilled developers,
// //             designers, and strategists work together to create products that
// //             truly make a difference.
// //           </p>
// //           <p style={{ color: "#aaa", lineHeight: 1.8, marginBottom: "36px", fontSize: "0.95rem" }}>
// //             We are a software development team with proven expertise in web
// //             development, ERP, CRM, mobile applications, digital marketing, and
// //             training. We have been serving financial institutions and companies
// //             of all sizes since our founding.
// //           </p>
// //           <a
// //             href="/contact"
// //             style={{
// //               display: "inline-block",
// //               background: "#ff6600",
// //               color: "#fff",
// //               padding: "14px 32px",
// //               borderRadius: "10px",
// //               fontWeight: 700,
// //               textDecoration: "none",
// //               fontSize: "0.95rem",
// //               transition: "background 0.2s",
// //             }}
// //             onMouseOver={(e) => (e.currentTarget.style.background = "#e05500")}
// //             onMouseOut={(e) => (e.currentTarget.style.background = "#ff6600")}
// //           >
// //             Work With Us
// //           </a>
// //         </div>

// //         {/* Right — Service Cards Grid (matches screenshot) */}
// //         <div
// //           style={{
// //             flex: "1 1 360px",
// //             maxWidth: "560px",
// //             display: "grid",
// //             gridTemplateColumns: "1fr 1fr",
// //             gap: "16px",
// //           }}
// //         >
// //           {[
// //             {
// //               icon: "🌐",
// //               iconBg: "#1a2a4a",
// //               title: "Web Development",
// //               desc: "We design and develop fast, responsive, and SEO-friendly websites tailored to your business needs.",
// //             },
// //             {
// //               icon: "📱",
// //               iconBg: "#2a1a3a",
// //               title: "Mobile App Dev",
// //               desc: "We build feature-rich, high-performance mobile apps to keep your business connected anytime, anywhere.",
// //             },
// //             {
// //               icon: "📊",
// //               iconBg: "#2a1a2a",
// //               title: "ERP Solutions",
// //               desc: "Our custom ERP solutions streamline operations, enhance productivity, and drive business growth.",
// //             },
// //             {
// //               icon: "☁️",
// //               iconBg: "#1a1a2a",
// //               title: "AWS Cloud",
// //               desc: "We leverage AWS cloud infrastructure to deliver secure, scalable, and reliable cloud solutions.",
// //             },
// //           ].map((card, i) => (
// //             <div
// //               key={i}
// //               style={{
// //                 background: "#141414",
// //                 border: "1px solid #222",
// //                 borderRadius: "16px",
// //                 padding: "28px 22px",
// //                 transition: "border-color 0.2s, transform 0.2s",
// //                 cursor: "default",
// //               }}
// //               onMouseOver={(e) => {
// //                 e.currentTarget.style.borderColor = "#ff6600";
// //                 e.currentTarget.style.transform = "translateY(-4px)";
// //               }}
// //               onMouseOut={(e) => {
// //                 e.currentTarget.style.borderColor = "#222";
// //                 e.currentTarget.style.transform = "translateY(0)";
// //               }}
// //             >
// //               <div
// //                 style={{
// //                   width: "48px",
// //                   height: "48px",
// //                   borderRadius: "12px",
// //                   background: card.iconBg,
// //                   display: "flex",
// //                   alignItems: "center",
// //                   justifyContent: "center",
// //                   fontSize: "1.4rem",
// //                   marginBottom: "16px",
// //                 }}
// //               >
// //                 {card.icon}
// //               </div>
// //               <h3 style={{ fontWeight: 700, fontSize: "1rem", marginBottom: "10px" }}>
// //                 {card.title}
// //               </h3>
// //               <p style={{ color: "#888", fontSize: "0.85rem", lineHeight: 1.65, margin: 0 }}>
// //                 {card.desc}
// //               </p>
// //             </div>
// //           ))}
// //         </div>
// //       </section>

// //       {/* ── STATS ── */}
// //       <section
// //         style={{
// //           padding: "60px 6%",
// //           background: "#111",
// //           display: "grid",
// //           gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
// //           gap: "24px",
// //         }}
// //       >
// //         {[
// //           { stat: "50+", label: "Projects Done" },
// //           { stat: "30+", label: "Happy Clients" },
// //           { stat: "5+", label: "Years Experience" },
// //           { stat: "100%", label: "Client Satisfaction" },
// //         ].map((item, i) => (
// //           <div
// //             key={i}
// //             style={{
// //               textAlign: "center",
// //               padding: "32px 20px",
// //               background: "#1a1a1a",
// //               borderRadius: "14px",
// //               border: "1px solid #222",
// //             }}
// //           >
// //             <div style={{ fontSize: "2.4rem", fontWeight: 900, color: "#ff6600" }}>
// //               {item.stat}
// //             </div>
// //             <div style={{ color: "#888", marginTop: "8px", fontSize: "0.9rem" }}>
// //               {item.label}
// //             </div>
// //           </div>
// //         ))}
// //       </section>

// //       {/* ── WHO WE ARE / MISSION / VISION ── */}
// //       <section style={{ padding: "80px 6%" }}>
// //         <h2
// //           style={{
// //             fontSize: "clamp(1.8rem, 4vw, 2.6rem)",
// //             fontWeight: 800,
// //             marginBottom: "40px",
// //           }}
// //         >
// //           Who <span style={{ color: "#ff6600" }}>We</span> Are
// //         </h2>

// //         <div
// //           style={{
// //             display: "grid",
// //             gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
// //             gap: "20px",
// //           }}
// //         >
// //           {[
// //             {
// //               icon: "👥",
// //               title: "Who We Are",
// //               desc: "A creative team of passionate developers and designers turning ideas into powerful digital solutions for startups, SMEs, and enterprises.",
// //             },
// //             {
// //               icon: "🚀",
// //               title: "Our Mission",
// //               desc: "Empower businesses with innovative and future-ready digital solutions that drive real growth.",
// //             },
// //             {
// //               icon: "👁️",
// //               title: "Our Vision",
// //               desc: "To become a trusted technology partner known for quality, transparency, and long-term value creation.",
// //             },
// //           ].map((card, i) => (
// //             <div
// //               key={i}
// //               style={{
// //                 background: "#141414",
// //                 border: "1px solid #222",
// //                 borderRadius: "16px",
// //                 padding: "32px 26px",
// //                 transition: "border-color 0.2s",
// //               }}
// //               onMouseOver={(e) => (e.currentTarget.style.borderColor = "#ff6600")}
// //               onMouseOut={(e) => (e.currentTarget.style.borderColor = "#222")}
// //             >
// //               <div style={{ fontSize: "1.8rem", marginBottom: "14px" }}>{card.icon}</div>
// //               <h3 style={{ fontWeight: 700, fontSize: "1.05rem", marginBottom: "12px" }}>
// //                 {card.title}
// //               </h3>
// //               <p style={{ color: "#888", lineHeight: 1.7, fontSize: "0.9rem", margin: 0 }}>
// //                 {card.desc}
// //               </p>
// //             </div>
// //           ))}
// //         </div>
// //       </section>

// //       {/* ── FOOTER ── */}
// //       <footer
// //         style={{
// //           textAlign: "center",
// //           padding: "30px 6%",
// //           borderTop: "1px solid #1a1a1a",
// //           color: "#555",
// //           fontSize: "0.8rem",
// //         }}
// //       >
// //         © 2026 HAK Projects. All rights reserved.
// //       </footer>
// //     </main>
// //   );
// // }

// 'use client';
// import { useState } from 'react';
// import Link from 'next/link';

// export default function AboutPage() {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [activeProject, setActiveProject] = useState(0);

//   const projects = [
//     {
//       id: 0,
//       label: 'PROJECT 01',
//       name: 'NegilaYogi Admin Panel',
//       tagline: 'Full-Stack Superadmin Dashboard',
//       description:
//         'A powerful multi-tenant admin platform built for NegilaYogi — an Indian organic products brand. It gives the superadmin complete control over products, orders, inventory, organizations, and user access rights from a single unified interface.',
//       color: '#f97316',
//       colorLight: 'rgba(249,115,22,0.08)',
//       colorBorder: 'rgba(249,115,22,0.2)',
//       features: [
//         'Product inventory management with categories, SKUs, pricing & discounts',
//         'Multi-image upload (up to 6 per product) with JSON specifications',
//         'Live order tracking & status management (Placed → Shipped → Delivered)',
//         'Organization management with contact & status details',
//         'Role-based access control (Superadmin, Admin, Staff)',
//         'Real-time dashboard with category-wise product analytics',
//         'Bulk actions: Excel / PDF export, duplicate, feature, delete',
//         'Scheduled product uploads & draft management',
//       ],
//       tech: {
//         frontend: ['Next.js 14', 'React', 'TypeScript', 'Tailwind CSS'],
//         backend: ['Node.js', 'Express.js', 'REST API', 'JWT Auth'],
//         database: ['MySQL', 'Prisma ORM', 'Cloudinary (images)'],
//         devops: ['Vercel', 'Railway', 'GitHub Actions'],
//       },
//       stats: [
//         { label: 'Products Managed', value: '1,146+' },
//         { label: 'Categories', value: '6' },
//         { label: 'Access Roles', value: '3' },
//         { label: 'Daily Uploads', value: '50+' },
//       ],
//       pages: ['Dashboard', 'Products', 'Orders', 'About Us', 'Contact', 'Organization', 'Access Rights'],
//     },
//     {
//       id: 1,
//       label: 'PROJECT 02',
//       name: 'NegilaYogi Customer Store',
//       tagline: 'E-Commerce Storefront & Shopping Platform',
//       description:
//         "The public-facing customer side of NegilaYogi's platform. Customers can browse products by category, view today's featured listings, add to cart, checkout securely, manage delivery addresses, and track their orders end-to-end.",
//       color: '#7c3aed',
//       colorLight: 'rgba(124,58,237,0.08)',
//       colorBorder: 'rgba(124,58,237,0.2)',
//       features: [
//         'Product listing with search, category & status filters',
//         "Today's Products and featured items sections",
//         'Multi-image product gallery with SKU, stock & brand info',
//         'Shopping cart with subtotal, tax (8%) & free delivery logic',
//         'Secure card payment gateway with price summary',
//         'Cash on Delivery & card checkout options',
//         'Order tracking with 6-step status pipeline',
//         'Customer dashboard: addresses, orders, saved items, payments',
//       ],
//       tech: {
//         frontend: ['Next.js 14', 'React', 'TypeScript', 'Tailwind CSS'],
//         backend: ['Node.js', 'Express.js', 'REST API', 'JWT Auth'],
//         database: ['MySQL', 'Prisma ORM', 'Cloudinary (images)'],
//         devops: ['Vercel', 'Railway', 'GitHub Actions'],
//       },
//       stats: [
//         { label: 'Products Listed', value: '1,000+' },
//         { label: 'Order Steps', value: '6-Stage' },
//         { label: 'Payment Modes', value: '2' },
//         { label: 'Address Slots', value: 'Unlimited' },
//       ],
//       pages: ['Home', 'Products', "Today's Products", 'Categories', 'About Us', 'Contact', 'Cart', 'My Orders'],
//     },
//   ];

//   const proj = projects[activeProject];

//   return (
//     <>
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:wght@300;400;500;600&display=swap');
//         *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
//         :root {
//           --bg: #f9fafb; --white: #ffffff; --dark: #0f0f0f;
//           --gray-50: #f9fafb; --gray-100: #f3f4f6; --gray-200: #e5e7eb;
//           --gray-400: #9ca3af; --gray-600: #4b5563; --gray-800: #1f2937;
//           --accent: #f97316; --border: #e5e7eb;
//         }
//         html { scroll-behavior: smooth; }
//         body { font-family: 'DM Sans', sans-serif; background: var(--bg); color: var(--dark); overflow-x: hidden; }

//         /* NAV */
//         nav { position: sticky; top: 0; z-index: 100; padding: 0 5%; display: flex; align-items: center; justify-content: space-between; height: 64px; background: rgba(255,255,255,0.92); backdrop-filter: blur(16px); border-bottom: 1px solid var(--border); }
//         .nav-logo { font-family: 'Syne', sans-serif; font-size: 1.4rem; font-weight: 800; color: var(--dark); text-decoration: none; letter-spacing: -0.5px; }
//         .nav-logo span { color: var(--accent); }
//         .nav-links { display: flex; gap: 2rem; list-style: none; align-items: center; }
//         .nav-links a { color: var(--gray-600); text-decoration: none; font-size: 0.9rem; font-weight: 500; transition: color 0.2s; }
//         .nav-links a:hover { color: var(--dark); }
//         .nav-links a.active { color: var(--accent); font-weight: 600; }
//         .nav-cta { background: var(--accent) !important; color: #fff !important; padding: 0.45rem 1.1rem !important; border-radius: 7px; font-weight: 600 !important; }
//         .nav-cta:hover { background: #ea6c00 !important; }
//         .hamburger { display: none; flex-direction: column; gap: 5px; cursor: pointer; background: none; border: none; }
//         .hamburger span { display: block; width: 24px; height: 2px; background: var(--dark); }
//         .mobile-menu { display: none; position: fixed; top: 64px; left: 0; right: 0; background: rgba(255,255,255,0.98); backdrop-filter: blur(16px); border-bottom: 1px solid var(--border); padding: 1.5rem 5%; z-index: 99; flex-direction: column; gap: 1rem; }
//         .mobile-menu.open { display: flex; }
//         .mobile-menu a { color: var(--gray-600); text-decoration: none; font-size: 1rem; padding: 0.5rem 0; border-bottom: 1px solid var(--border); }
//         .mob-cta { background: var(--accent); color: #fff !important; padding: 0.75rem 1.2rem !important; border-radius: 7px; font-weight: 600 !important; text-align: center; border-bottom: none !important; margin-top: 0.5rem; }

//         /* HERO */
//         .about-hero { padding: 80px 5% 60px; text-align: center; background: var(--white); position: relative; overflow: hidden; }
//         .about-hero::before { content: ''; position: absolute; inset: 0; background: radial-gradient(ellipse 70% 60% at 50% 0%, rgba(249,115,22,0.06) 0%, transparent 70%); pointer-events: none; }
//         .section-label { display: inline-block; font-size: 0.72rem; font-weight: 700; text-transform: uppercase; letter-spacing: 2px; color: var(--accent); background: rgba(249,115,22,0.1); padding: 5px 14px; border-radius: 20px; margin-bottom: 1.2rem; }
//         .about-hero h1 { font-family: 'Syne', sans-serif; font-size: clamp(2.4rem, 5vw, 4rem); font-weight: 800; letter-spacing: -2px; color: var(--dark); line-height: 1.05; margin-bottom: 1rem; }
//         .about-hero h1 span { color: var(--accent); }
//         .about-hero p { color: var(--gray-600); font-size: 1.05rem; line-height: 1.7; max-width: 600px; margin: 0 auto 2.5rem; }

//         /* TEAM STRIP */
//         .team-strip { display: flex; justify-content: center; gap: 1.5rem; flex-wrap: wrap; }
//         .team-chip { display: flex; align-items: center; gap: 12px; background: var(--white); border: 1px solid var(--border); border-radius: 50px; padding: 10px 20px 10px 10px; box-shadow: 0 2px 12px rgba(0,0,0,0.06); }
//         .team-avatar { width: 40px; height: 40px; border-radius: 50%; background: linear-gradient(135deg, #f97316, #fb923c); display: flex; align-items: center; justify-content: center; font-size: 1rem; font-weight: 800; color: #fff; font-family: 'Syne', sans-serif; flex-shrink: 0; }
//         .team-chip-info strong { display: block; font-size: 0.9rem; font-weight: 700; color: var(--dark); }
//         .team-chip-info span { font-size: 0.75rem; color: var(--gray-400); }

//         /* MISSION BAND */
//         .mission-band { background: var(--dark); color: #fff; padding: 60px 5%; display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 40px; }
//         .mission-item { text-align: center; }
//         .mission-icon { font-size: 2rem; margin-bottom: 12px; }
//         .mission-item h3 { font-family: 'Syne', sans-serif; font-size: 1.1rem; font-weight: 700; margin-bottom: 8px; }
//         .mission-item p { color: #888; font-size: 0.85rem; line-height: 1.6; }

//         /* PROJECTS SECTION */
//         .projects-section { padding: 80px 5%; max-width: 1200px; margin: 0 auto; }
//         .projects-header { text-align: center; margin-bottom: 48px; }
//         .projects-header h2 { font-family: 'Syne', sans-serif; font-size: clamp(1.8rem, 3vw, 2.8rem); font-weight: 800; letter-spacing: -1px; color: var(--dark); margin-bottom: 0.6rem; }
//         .projects-header p { color: var(--gray-600); font-size: 1rem; max-width: 500px; margin: 0 auto; }

//         /* TAB SWITCHER */
//         .tab-switcher { display: flex; gap: 12px; justify-content: center; margin-bottom: 40px; flex-wrap: wrap; }
//         .tab-btn { font-family: 'Syne', sans-serif; font-size: 0.85rem; font-weight: 700; padding: 10px 24px; border-radius: 8px; cursor: pointer; border: 2px solid var(--border); background: var(--white); color: var(--gray-600); transition: all 0.2s; letter-spacing: 0.5px; }
//         .tab-btn.active-orange { border-color: #f97316; background: rgba(249,115,22,0.06); color: #f97316; }
//         .tab-btn.active-purple { border-color: #7c3aed; background: rgba(124,58,237,0.06); color: #7c3aed; }
//         .tab-btn:hover { border-color: var(--gray-400); color: var(--dark); }

//         /* PROJECT DETAIL CARD */
//         .project-detail { background: var(--white); border: 1px solid var(--border); border-radius: 24px; overflow: hidden; box-shadow: 0 4px 40px rgba(0,0,0,0.06); animation: fadeUp 0.35s ease; }
//         @keyframes fadeUp { from { opacity: 0; transform: translateY(16px); } to { opacity: 1; transform: translateY(0); } }

//         .project-header { padding: 40px 40px 32px; border-bottom: 1px solid var(--border); display: flex; align-items: flex-start; justify-content: space-between; gap: 24px; flex-wrap: wrap; }
//         .project-badge { font-size: 0.7rem; font-weight: 700; text-transform: uppercase; letter-spacing: 2px; padding: 4px 12px; border-radius: 20px; margin-bottom: 12px; display: inline-block; }
//         .project-title { font-family: 'Syne', sans-serif; font-size: clamp(1.6rem, 3vw, 2.4rem); font-weight: 800; letter-spacing: -1px; color: var(--dark); margin-bottom: 6px; }
//         .project-tagline { font-size: 0.95rem; color: var(--gray-600); font-weight: 500; margin-bottom: 16px; }
//         .project-desc { font-size: 0.95rem; color: var(--gray-600); line-height: 1.75; max-width: 600px; }

//         /* STATS ROW */
//         .stats-row { display: grid; grid-template-columns: repeat(4, 1fr); gap: 0; border-bottom: 1px solid var(--border); }
//         .stat-cell { padding: 24px; text-align: center; border-right: 1px solid var(--border); }
//         .stat-cell:last-child { border-right: none; }
//         .stat-value { font-family: 'Syne', sans-serif; font-size: 1.8rem; font-weight: 800; margin-bottom: 4px; }
//         .stat-label { font-size: 0.78rem; color: var(--gray-400); text-transform: uppercase; letter-spacing: 0.5px; font-weight: 600; }

//         /* MAIN BODY */
//         .project-body { display: grid; grid-template-columns: 1.2fr 1fr; gap: 0; }
//         .project-col { padding: 36px 40px; }
//         .project-col + .project-col { border-left: 1px solid var(--border); }
//         .col-title { font-family: 'Syne', sans-serif; font-size: 0.78rem; font-weight: 700; text-transform: uppercase; letter-spacing: 1.5px; color: var(--gray-400); margin-bottom: 20px; }

//         /* FEATURES LIST */
//         .feature-list { list-style: none; display: flex; flex-direction: column; gap: 12px; }
//         .feature-list li { display: flex; align-items: flex-start; gap: 10px; font-size: 0.88rem; color: var(--gray-800); line-height: 1.5; }
//         .feature-dot { width: 20px; height: 20px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 0.6rem; flex-shrink: 0; margin-top: 1px; color: #fff; font-weight: 800; }

//         /* TECH STACK */
//         .tech-group { margin-bottom: 24px; }
//         .tech-group-label { font-size: 0.72rem; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; color: var(--gray-400); margin-bottom: 10px; }
//         .tech-tags { display: flex; flex-wrap: wrap; gap: 8px; }
//         .tech-tag { font-size: 0.8rem; font-weight: 600; padding: 5px 12px; border-radius: 6px; border: 1px solid var(--border); color: var(--gray-800); background: var(--gray-50); }
//         .tech-tag.frontend { background: rgba(59,130,246,0.06); border-color: rgba(59,130,246,0.2); color: #2563eb; }
//         .tech-tag.backend { background: rgba(16,185,129,0.06); border-color: rgba(16,185,129,0.2); color: #059669; }
//         .tech-tag.database { background: rgba(245,158,11,0.06); border-color: rgba(245,158,11,0.2); color: #d97706; }
//         .tech-tag.devops { background: rgba(139,92,246,0.06); border-color: rgba(139,92,246,0.2); color: #7c3aed; }

//         /* PAGES FOOTER */
//         .project-footer { padding: 24px 40px; border-top: 1px solid var(--border); background: var(--gray-50); }
//         .pages-label { font-size: 0.72rem; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; color: var(--gray-400); margin-bottom: 12px; }
//         .pages-list { display: flex; flex-wrap: wrap; gap: 8px; }
//         .page-chip { font-size: 0.78rem; font-weight: 600; padding: 4px 12px; border-radius: 20px; border: 1px solid var(--border); color: var(--gray-600); background: var(--white); }

//         /* TECH STACK SECTION */
//         .techstack-section { background: var(--dark); padding: 80px 5%; }
//         .techstack-inner { max-width: 1200px; margin: 0 auto; }
//         .techstack-section .section-label { color: var(--accent); }
//         .techstack-section h2 { font-family: 'Syne', sans-serif; font-size: clamp(1.8rem, 3vw, 2.6rem); font-weight: 800; letter-spacing: -1px; color: #fff; margin-bottom: 0.6rem; }
//         .techstack-section p { color: #888; font-size: 0.95rem; margin-bottom: 48px; }
//         .stack-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; }
//         .stack-card { background: #16161f; border: 1px solid rgba(255,255,255,0.08); border-radius: 16px; padding: 24px; transition: border-color 0.2s, transform 0.2s; }
//         .stack-card:hover { border-color: rgba(249,115,22,0.3); transform: translateY(-3px); }
//         .stack-card-icon { font-size: 1.8rem; margin-bottom: 12px; }
//         .stack-card-category { font-size: 0.7rem; font-weight: 700; text-transform: uppercase; letter-spacing: 1.5px; color: #888; margin-bottom: 8px; }
//         .stack-card-title { font-family: 'Syne', sans-serif; font-size: 1rem; font-weight: 700; color: #f5f5f0; margin-bottom: 10px; }
//         .stack-card-tags { display: flex; flex-wrap: wrap; gap: 6px; }
//         .stack-mini-tag { font-size: 0.72rem; padding: 3px 9px; border-radius: 4px; background: rgba(255,255,255,0.06); color: #aaa; font-weight: 500; }

//         /* FOOTER */
//         footer { background: #111118; border-top: 1px solid rgba(255,255,255,0.08); padding: 3rem 5%; display: grid; grid-template-columns: 2fr 1fr 1fr; gap: 3rem; }
//         .footer-brand .footer-logo { font-family: 'Syne', sans-serif; font-size: 1.3rem; font-weight: 800; color: #f5f5f0; text-decoration: none; }
//         .footer-brand .footer-logo span { color: var(--accent); }
//         .footer-brand p { color: #6b7280; font-size: 0.88rem; line-height: 1.7; margin-top: 0.8rem; max-width: 260px; }
//         .footer-col h4 { font-family: 'Syne', sans-serif; font-size: 0.78rem; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; color: #6b7280; margin-bottom: 1rem; }
//         .footer-col ul { list-style: none; }
//         .footer-col ul li { margin-bottom: 0.6rem; }
//         .footer-col ul a { color: #9ca3af; text-decoration: none; font-size: 0.88rem; transition: color 0.2s; }
//         .footer-col ul a:hover { color: #f5f5f0; }
//         .footer-bottom { background: #111118; border-top: 1px solid rgba(255,255,255,0.06); padding: 1.2rem 5%; display: flex; justify-content: space-between; align-items: center; color: #6b7280; font-size: 0.8rem; }

//         @media (max-width: 900px) {
//           .nav-links { display: none; }
//           .hamburger { display: flex; }
//           .project-body { grid-template-columns: 1fr; }
//           .project-col + .project-col { border-left: none; border-top: 1px solid var(--border); }
//           .stats-row { grid-template-columns: 1fr 1fr; }
//           .stat-cell:nth-child(2) { border-right: none; }
//           .stat-cell:nth-child(3) { border-top: 1px solid var(--border); }
//           .stack-grid { grid-template-columns: 1fr 1fr; }
//           .mission-band { grid-template-columns: 1fr; text-align: center; }
//           footer { grid-template-columns: 1fr 1fr; }
//           .project-header { padding: 28px 24px 24px; }
//           .project-col { padding: 28px 24px; }
//           .project-footer { padding: 20px 24px; }
//         }
//         @media (max-width: 600px) {
//           .stats-row { grid-template-columns: 1fr 1fr; }
//           .stack-grid { grid-template-columns: 1fr; }
//           footer { grid-template-columns: 1fr; }
//           .footer-bottom { flex-direction: column; gap: 0.5rem; text-align: center; }
//           .team-strip { flex-direction: column; align-items: center; }
//         }
//       `}</style>

//       {/* NAV */}
//       <nav>
//         <Link href="/" className="nav-logo">HAK <span>Projects</span></Link>
//         <ul className="nav-links">
//           <li><Link href="/home">Home</Link></li>
//           <li><Link href="/about" className="active">About</Link></li>
//           <li><Link href="/service">Services</Link></li>
//           <li><Link href="/projects">Projects</Link></li>
//           <li><Link href="/contact" className="nav-cta">Contact</Link></li>
//         </ul>
//         <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
//           <span></span><span></span><span></span>
//         </button>
//       </nav>
//       <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
//         <Link href="/home" onClick={() => setMenuOpen(false)}>Home</Link>
//         <Link href="/about" onClick={() => setMenuOpen(false)}>About</Link>
//         <Link href="/service" onClick={() => setMenuOpen(false)}>Services</Link>
//         <Link href="/projects" onClick={() => setMenuOpen(false)}>Projects</Link>
//         <Link href="/contact" className="mob-cta" onClick={() => setMenuOpen(false)}>Contact</Link>
//       </div>

//       {/* HERO */}
//       <section className="about-hero">
//         <div className="section-label">About HAK Projects</div>
//         <h1>We Build Digital Experiences<br /><span>That Matter</span></h1>
//         <p>
//           A software development team with proven expertise in web development, ERP, CRM, mobile
//           applications, digital marketing, and training. We've been serving financial institutions
//           and companies of all sizes since our founding.
//         </p>
//         <div className="team-strip">
//           <div className="team-chip">
//             <div className="team-avatar">H</div>
//             <div className="team-chip-info">
//               <strong>Hemanth Raju</strong>
//               <span>Co-Founder &amp; Developer</span>
//             </div>
//           </div>
//           <div className="team-chip">
//             <div className="team-avatar">K</div>
//             <div className="team-chip-info">
//               <strong>Karthik Reddy</strong>
//               <span>Co-Founder &amp; Developer</span>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* MISSION BAND */}
//       <div className="mission-band">
//         <div className="mission-item">
//           <div className="mission-icon">🎯</div>
//           <h3>Our Mission</h3>
//           <p>Build innovative, high-quality custom IT solutions that transform businesses and create products that truly make a difference.</p>
//         </div>
//         <div className="mission-item">
//           <div className="mission-icon">🤝</div>
//           <h3>Our Approach</h3>
//           <p>Teams of skilled developers, designers, and strategists working together — with expertise in web, ERP, mobile, and digital marketing.</p>
//         </div>
//         <div className="mission-item">
//           <div className="mission-icon">🌍</div>
//           <h3>Our Reach</h3>
//           <p>Based in Yelahanka, Bengaluru — available for remote projects worldwide. Serving clients across India and internationally.</p>
//         </div>
//       </div>

//       {/* PROJECTS */}
//       <section className="projects-section">
//         <div className="projects-header">
//           <div className="section-label">Our Work</div>
//           <h2>Featured Projects</h2>
//           <p>Real-world applications built end-to-end — from database to UI.</p>
//         </div>

//         {/* TAB SWITCHER */}
//         <div className="tab-switcher">
//           <button
//             className={`tab-btn ${activeProject === 0 ? 'active-orange' : ''}`}
//             onClick={() => setActiveProject(0)}
//           >
//             PROJECT 01 — Admin Panel
//           </button>
//           <button
//             className={`tab-btn ${activeProject === 1 ? 'active-purple' : ''}`}
//             onClick={() => setActiveProject(1)}
//           >
//             PROJECT 02 — Customer Store
//           </button>
//         </div>

//         {/* PROJECT DETAIL */}
//         <div className="project-detail" key={activeProject}>

//           {/* HEADER */}
//           <div className="project-header">
//             <div>
//               <div
//                 className="project-badge"
//                 style={{ background: proj.colorLight, color: proj.color, border: `1px solid ${proj.colorBorder}` }}
//               >
//                 {proj.label}
//               </div>
//               <div className="project-title">{proj.name}</div>
//               <div className="project-tagline">{proj.tagline}</div>
//               <p className="project-desc">{proj.description}</p>
//             </div>
//           </div>

//           {/* STATS */}
//           <div className="stats-row">
//             {proj.stats.map((s, i) => (
//               <div className="stat-cell" key={i}>
//                 <div className="stat-value" style={{ color: proj.color }}>{s.value}</div>
//                 <div className="stat-label">{s.label}</div>
//               </div>
//             ))}
//           </div>

//           {/* BODY */}
//           <div className="project-body">
//             {/* FEATURES */}
//             <div className="project-col">
//               <div className="col-title">Key Features</div>
//               <ul className="feature-list">
//                 {proj.features.map((f, i) => (
//                   <li key={i}>
//                     <span className="feature-dot" style={{ background: proj.color }}>{i + 1}</span>
//                     {f}
//                   </li>
//                 ))}
//               </ul>
//             </div>

//             {/* TECH */}
//             <div className="project-col">
//               <div className="col-title">Tech Stack</div>
//               <div className="tech-group">
//                 <div className="tech-group-label">Frontend</div>
//                 <div className="tech-tags">
//                   {proj.tech.frontend.map(t => <span key={t} className="tech-tag frontend">{t}</span>)}
//                 </div>
//               </div>
//               <div className="tech-group">
//                 <div className="tech-group-label">Backend</div>
//                 <div className="tech-tags">
//                   {proj.tech.backend.map(t => <span key={t} className="tech-tag backend">{t}</span>)}
//                 </div>
//               </div>
//               <div className="tech-group">
//                 <div className="tech-group-label">Database & Storage</div>
//                 <div className="tech-tags">
//                   {proj.tech.database.map(t => <span key={t} className="tech-tag database">{t}</span>)}
//                 </div>
//               </div>
//               <div className="tech-group">
//                 <div className="tech-group-label">DevOps & Hosting</div>
//                 <div className="tech-tags">
//                   {proj.tech.devops.map(t => <span key={t} className="tech-tag devops">{t}</span>)}
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* FOOTER PAGES */}
//           <div className="project-footer">
//             <div className="pages-label">Application Pages</div>
//             <div className="pages-list">
//               {proj.pages.map(p => (
//                 <span key={p} className="page-chip">{p}</span>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* FULL TECH STACK */}
//       <section className="techstack-section">
//         <div className="techstack-inner">
//           <div className="section-label">Tech Stack</div>
//           <h2>Tools &amp; Technologies</h2>
//           <p>The full set of technologies used across both NegilaYogi projects.</p>
//           <div className="stack-grid">
//             <div className="stack-card">
//               <div className="stack-card-icon">⚛️</div>
//               <div className="stack-card-category">Frontend</div>
//               <div className="stack-card-title">UI & Framework</div>
//               <div className="stack-card-tags">
//                 <span className="stack-mini-tag">Next.js 14</span>
//                 <span className="stack-mini-tag">React 18</span>
//                 <span className="stack-mini-tag">TypeScript</span>
//                 <span className="stack-mini-tag">Tailwind CSS</span>
//               </div>
//             </div>
//             <div className="stack-card">
//               <div className="stack-card-icon">🖥️</div>
//               <div className="stack-card-category">Backend</div>
//               <div className="stack-card-title">Server & API</div>
//               <div className="stack-card-tags">
//                 <span className="stack-mini-tag">Node.js</span>
//                 <span className="stack-mini-tag">Express.js</span>
//                 <span className="stack-mini-tag">REST API</span>
//                 <span className="stack-mini-tag">JWT Auth</span>
//               </div>
//             </div>
//             <div className="stack-card">
//               <div className="stack-card-icon">🗄️</div>
//               <div className="stack-card-category">Database</div>
//               <div className="stack-card-title">Data & Storage</div>
//               <div className="stack-card-tags">
//                 <span className="stack-mini-tag">MySQL</span>
//                 <span className="stack-mini-tag">Prisma ORM</span>
//                 <span className="stack-mini-tag">Cloudinary</span>
//               </div>
//             </div>
//             <div className="stack-card">
//               <div className="stack-card-icon">🚀</div>
//               <div className="stack-card-category">DevOps</div>
//               <div className="stack-card-title">Hosting & CI/CD</div>
//               <div className="stack-card-tags">
//                 <span className="stack-mini-tag">Vercel</span>
//                 <span className="stack-mini-tag">Railway</span>
//                 <span className="stack-mini-tag">GitHub Actions</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* FOOTER */}
//       <footer>
//         <div className="footer-brand">
//           <Link href="/" className="footer-logo">HAK <span>Projects</span></Link>
//           <p>We provide cutting-edge IT solutions to help businesses grow and succeed in the digital world. Let&apos;s build something great together.</p>
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

export default function AboutPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeProject, setActiveProject] = useState(0);

  const projects = [
    {
      id: 0,
      label: 'PROJECT 01',
      name: 'NegilaYogi Admin Panel',
      tagline: 'Full-Stack Superadmin Dashboard',
      description:
        'A powerful multi-tenant admin platform built for NegilaYogi — an Indian organic products brand. It gives the superadmin complete control over products, orders, inventory, organizations, and user access rights from a single unified interface.',
      color: '#f97316',
      colorLight: 'rgba(249,115,22,0.08)',
      colorBorder: 'rgba(249,115,22,0.2)',
      features: [
        'Product inventory management with categories, SKUs, pricing & discounts',
        'Multi-image upload (up to 6 per product) with JSON specifications',
        'Live order tracking & status management (Placed → Shipped → Delivered)',
        'Organization management with contact & status details',
        'Role-based access control (Superadmin, Admin, Staff)',
        'Real-time dashboard with category-wise product analytics',
        'Bulk actions: Excel / PDF export, duplicate, feature, delete',
        'Scheduled product uploads & draft management',
      ],
      tech: {
        frontend: ['Next.js 14', 'React', 'TypeScript', 'Tailwind CSS'],
        backend: ['Node.js', 'Express.js', 'REST API', 'JWT Auth'],
        database: ['MySQL', 'Prisma ORM', 'Cloudinary (images)'],
        devops: ['Vercel', 'Railway', 'GitHub Actions'],
      },
      stats: [
        { label: 'Products Managed', value: '1,146+' },
        { label: 'Categories', value: '6' },
        { label: 'Access Roles', value: '3' },
        { label: 'Daily Uploads', value: '50+' },
      ],
      pages: ['Dashboard', 'Products', 'Orders', 'About Us', 'Contact', 'Organization', 'Access Rights'],
    },
    {
      id: 1,
      label: 'PROJECT 02',
      name: 'NegilaYogi Customer Store',
      tagline: 'E-Commerce Storefront & Shopping Platform',
      description:
        "The public-facing customer side of NegilaYogi's platform. Customers can browse products by category, view today's featured listings, add to cart, checkout securely, manage delivery addresses, and track their orders end-to-end.",
      color: '#7c3aed',
      colorLight: 'rgba(124,58,237,0.08)',
      colorBorder: 'rgba(124,58,237,0.2)',
      features: [
        'Product listing with search, category & status filters',
        "Today's Products and featured items sections",
        'Multi-image product gallery with SKU, stock & brand info',
        'Shopping cart with subtotal, tax (8%) & free delivery logic',
        'Secure card payment gateway with price summary',
        'Cash on Delivery & card checkout options',
        'Order tracking with 6-step status pipeline',
        'Customer dashboard: addresses, orders, saved items, payments',
      ],
      tech: {
        frontend: ['Next.js 14', 'React', 'TypeScript', 'Tailwind CSS'],
        backend: ['Node.js', 'Express.js', 'REST API', 'JWT Auth'],
        database: ['MySQL', 'Prisma ORM', 'Cloudinary (images)'],
        devops: ['Vercel', 'Railway', 'GitHub Actions'],
      },
      stats: [
        { label: 'Products Listed', value: '1,000+' },
        { label: 'Order Steps', value: '6-Stage' },
        { label: 'Payment Modes', value: '2' },
        { label: 'Address Slots', value: 'Unlimited' },
      ],
      pages: ['Home', 'Products', "Today's Products", 'Categories', 'About Us', 'Contact', 'Cart', 'My Orders'],
    },
  ];

  const proj = projects[activeProject];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800;900&family=Nunito:wght@400;500;600;700;800&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        :root {
          --bg: #f9fafb; --white: #ffffff; --dark: #0f0f0f;
          --gray-50: #f9fafb; --gray-100: #f3f4f6; --gray-200: #e5e7eb;
          --gray-400: #9ca3af; --gray-600: #4b5563; --gray-800: #1f2937;
          --accent: #f97316; --border: #e5e7eb;
        }
        html { scroll-behavior: smooth; }
        body { font-family: 'Nunito', sans-serif; background: var(--bg); color: var(--dark); overflow-x: hidden; }

        /* NAV */
        nav { position: sticky; top: 0; z-index: 100; padding: 0 5%; display: flex; align-items: center; justify-content: space-between; height: 64px; background: rgba(255,255,255,0.92); backdrop-filter: blur(16px); border-bottom: 1px solid var(--border); }
        .nav-logo { font-family: 'Outfit', sans-serif; font-size: 1.4rem; font-weight: 800; color: var(--dark); text-decoration: none; letter-spacing: -0.5px; }
        .nav-logo span { color: var(--accent); }
        .nav-links { display: flex; gap: 2rem; list-style: none; align-items: center; }
        .nav-links a { color: var(--gray-600); text-decoration: none; font-size: 0.9rem; font-weight: 500; transition: color 0.2s; }
        .nav-links a:hover { color: var(--dark); }
        .nav-links a.active { color: var(--accent); font-weight: 600; }
        .nav-cta { background: var(--accent) !important; color: #fff !important; padding: 0.45rem 1.1rem !important; border-radius: 7px; font-weight: 600 !important; }
        .nav-cta:hover { background: #ea6c00 !important; }
        .hamburger { display: none; flex-direction: column; gap: 5px; cursor: pointer; background: none; border: none; }
        .hamburger span { display: block; width: 24px; height: 2px; background: var(--dark); }
        .mobile-menu { display: none; position: fixed; top: 64px; left: 0; right: 0; background: rgba(255,255,255,0.98); backdrop-filter: blur(16px); border-bottom: 1px solid var(--border); padding: 1.5rem 5%; z-index: 99; flex-direction: column; gap: 1rem; }
        .mobile-menu.open { display: flex; }
        .mobile-menu a { color: var(--gray-600); text-decoration: none; font-size: 1rem; padding: 0.5rem 0; border-bottom: 1px solid var(--border); }
        .mob-cta { background: var(--accent); color: #fff !important; padding: 0.75rem 1.2rem !important; border-radius: 7px; font-weight: 600 !important; text-align: center; border-bottom: none !important; margin-top: 0.5rem; }

        /* HERO */
        .about-hero { padding: 80px 5% 60px; text-align: center; background: var(--white); position: relative; overflow: hidden; }
        .about-hero::before { content: ''; position: absolute; inset: 0; background: radial-gradient(ellipse 70% 60% at 50% 0%, rgba(249,115,22,0.06) 0%, transparent 70%); pointer-events: none; }
        .section-label { display: inline-block; font-size: 0.72rem; font-weight: 700; text-transform: uppercase; letter-spacing: 2px; color: var(--accent); background: rgba(249,115,22,0.1); padding: 5px 14px; border-radius: 20px; margin-bottom: 1.2rem; }
        .about-hero h1 { font-family: 'Outfit', sans-serif; font-size: clamp(2.4rem, 5vw, 4rem); font-weight: 800; letter-spacing: -2px; color: var(--dark); line-height: 1.05; margin-bottom: 1rem; }
        .about-hero h1 span { color: var(--accent); }
        .about-hero p { color: var(--gray-600); font-size: 1.05rem; line-height: 1.7; max-width: 600px; margin: 0 auto 2.5rem; }

        /* TEAM STRIP */
        .team-strip { display: flex; justify-content: center; gap: 1.5rem; flex-wrap: wrap; }
        .team-chip { display: flex; align-items: center; gap: 12px; background: var(--white); border: 1px solid var(--border); border-radius: 50px; padding: 10px 20px 10px 10px; box-shadow: 0 2px 12px rgba(0,0,0,0.06); }
        .team-avatar { width: 40px; height: 40px; border-radius: 50%; background: linear-gradient(135deg, #f97316, #fb923c); display: flex; align-items: center; justify-content: center; font-size: 1rem; font-weight: 800; color: #fff; font-family: 'Outfit', sans-serif; flex-shrink: 0; }
        .team-chip-info strong { display: block; font-size: 0.9rem; font-weight: 700; color: var(--dark); }
        .team-chip-info span { font-size: 0.75rem; color: var(--gray-400); }

        /* MISSION BAND */
        .mission-band { background: var(--dark); color: #fff; padding: 60px 5%; display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 40px; }
        .mission-item { text-align: center; }
        .mission-icon { font-size: 2rem; margin-bottom: 12px; }
        .mission-item h3 { font-family: 'Outfit', sans-serif; font-size: 1.1rem; font-weight: 700; margin-bottom: 8px; }
        .mission-item p { color: #888; font-size: 0.85rem; line-height: 1.6; }

        /* PROJECTS SECTION */
        .projects-section { padding: 80px 5%; max-width: 1200px; margin: 0 auto; }
        .projects-header { text-align: center; margin-bottom: 48px; }
        .projects-header h2 { font-family: 'Outfit', sans-serif; font-size: clamp(1.8rem, 3vw, 2.8rem); font-weight: 800; letter-spacing: -1px; color: var(--dark); margin-bottom: 0.6rem; }
        .projects-header p { color: var(--gray-600); font-size: 1rem; max-width: 500px; margin: 0 auto; }

        /* TAB SWITCHER */
        .tab-switcher { display: flex; gap: 12px; justify-content: center; margin-bottom: 40px; flex-wrap: wrap; }
        .tab-btn { font-family: 'Outfit', sans-serif; font-size: 0.85rem; font-weight: 700; padding: 10px 24px; border-radius: 8px; cursor: pointer; border: 2px solid var(--border); background: var(--white); color: var(--gray-600); transition: all 0.2s; letter-spacing: 0.5px; }
        .tab-btn.active-orange { border-color: #f97316; background: rgba(249,115,22,0.06); color: #f97316; }
        .tab-btn.active-purple { border-color: #7c3aed; background: rgba(124,58,237,0.06); color: #7c3aed; }
        .tab-btn:hover { border-color: var(--gray-400); color: var(--dark); }

        /* PROJECT DETAIL CARD */
        .project-detail { background: var(--white); border: 1px solid var(--border); border-radius: 24px; overflow: hidden; box-shadow: 0 4px 40px rgba(0,0,0,0.06); animation: fadeUp 0.35s ease; }
        @keyframes fadeUp { from { opacity: 0; transform: translateY(16px); } to { opacity: 1; transform: translateY(0); } }

        .project-header { padding: 40px 40px 32px; border-bottom: 1px solid var(--border); display: flex; align-items: flex-start; justify-content: space-between; gap: 24px; flex-wrap: wrap; }
        .project-badge { font-size: 0.7rem; font-weight: 700; text-transform: uppercase; letter-spacing: 2px; padding: 4px 12px; border-radius: 20px; margin-bottom: 12px; display: inline-block; }
        .project-title { font-family: 'Outfit', sans-serif; font-size: clamp(1.6rem, 3vw, 2.4rem); font-weight: 800; letter-spacing: -1px; color: var(--dark); margin-bottom: 6px; }
        .project-tagline { font-size: 0.95rem; color: var(--gray-600); font-weight: 500; margin-bottom: 16px; }
        .project-desc { font-size: 0.95rem; color: var(--gray-600); line-height: 1.75; max-width: 600px; }

        /* STATS ROW */
        .stats-row { display: grid; grid-template-columns: repeat(4, 1fr); gap: 0; border-bottom: 1px solid var(--border); }
        .stat-cell { padding: 24px; text-align: center; border-right: 1px solid var(--border); }
        .stat-cell:last-child { border-right: none; }
        .stat-value { font-family: 'Outfit', sans-serif; font-size: 1.8rem; font-weight: 800; margin-bottom: 4px; }
        .stat-label { font-size: 0.78rem; color: var(--gray-400); text-transform: uppercase; letter-spacing: 0.5px; font-weight: 600; }

        /* MAIN BODY */
        .project-body { display: grid; grid-template-columns: 1.2fr 1fr; gap: 0; }
        .project-col { padding: 36px 40px; }
        .project-col + .project-col { border-left: 1px solid var(--border); }
        .col-title { font-family: 'Outfit', sans-serif; font-size: 0.78rem; font-weight: 700; text-transform: uppercase; letter-spacing: 1.5px; color: var(--gray-400); margin-bottom: 20px; }

        /* FEATURES LIST */
        .feature-list { list-style: none; display: flex; flex-direction: column; gap: 12px; }
        .feature-list li { display: flex; align-items: flex-start; gap: 10px; font-size: 0.88rem; color: var(--gray-800); line-height: 1.5; }
        .feature-dot { width: 20px; height: 20px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 0.6rem; flex-shrink: 0; margin-top: 1px; color: #fff; font-weight: 800; }

        /* TECH STACK */
        .tech-group { margin-bottom: 24px; }
        .tech-group-label { font-size: 0.72rem; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; color: var(--gray-400); margin-bottom: 10px; }
        .tech-tags { display: flex; flex-wrap: wrap; gap: 8px; }
        .tech-tag { font-size: 0.8rem; font-weight: 600; padding: 5px 12px; border-radius: 6px; border: 1px solid var(--border); color: var(--gray-800); background: var(--gray-50); }
        .tech-tag.frontend { background: rgba(59,130,246,0.06); border-color: rgba(59,130,246,0.2); color: #2563eb; }
        .tech-tag.backend { background: rgba(16,185,129,0.06); border-color: rgba(16,185,129,0.2); color: #059669; }
        .tech-tag.database { background: rgba(245,158,11,0.06); border-color: rgba(245,158,11,0.2); color: #d97706; }
        .tech-tag.devops { background: rgba(139,92,246,0.06); border-color: rgba(139,92,246,0.2); color: #7c3aed; }

        /* PAGES FOOTER */
        .project-footer { padding: 24px 40px; border-top: 1px solid var(--border); background: var(--gray-50); }
        .pages-label { font-size: 0.72rem; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; color: var(--gray-400); margin-bottom: 12px; }
        .pages-list { display: flex; flex-wrap: wrap; gap: 8px; }
        .page-chip { font-size: 0.78rem; font-weight: 600; padding: 4px 12px; border-radius: 20px; border: 1px solid var(--border); color: var(--gray-600); background: var(--white); }

        /* TECH STACK SECTION */
        .techstack-section { background: var(--dark); padding: 80px 5%; }
        .techstack-inner { max-width: 1200px; margin: 0 auto; }
        .techstack-section .section-label { color: var(--accent); }
        .techstack-section h2 { font-family: 'Outfit', sans-serif; font-size: clamp(1.8rem, 3vw, 2.6rem); font-weight: 800; letter-spacing: -1px; color: #fff; margin-bottom: 0.6rem; }
        .techstack-section p { color: #888; font-size: 0.95rem; margin-bottom: 48px; }
        .stack-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; }
        .stack-card { background: #16161f; border: 1px solid rgba(255,255,255,0.08); border-radius: 16px; padding: 24px; transition: border-color 0.2s, transform 0.2s; }
        .stack-card:hover { border-color: rgba(249,115,22,0.3); transform: translateY(-3px); }
        .stack-card-icon { font-size: 1.8rem; margin-bottom: 12px; }
        .stack-card-category { font-size: 0.7rem; font-weight: 700; text-transform: uppercase; letter-spacing: 1.5px; color: #888; margin-bottom: 8px; }
        .stack-card-title { font-family: 'Outfit', sans-serif; font-size: 1rem; font-weight: 700; color: #f5f5f0; margin-bottom: 10px; }
        .stack-card-tags { display: flex; flex-wrap: wrap; gap: 6px; }
        .stack-mini-tag { font-size: 0.72rem; padding: 3px 9px; border-radius: 4px; background: rgba(255,255,255,0.06); color: #aaa; font-weight: 500; }

        /* FOOTER */
        footer { background: #111118; border-top: 1px solid rgba(255,255,255,0.08); padding: 3rem 5%; display: grid; grid-template-columns: 2fr 1fr 1fr; gap: 3rem; }
        .footer-brand .footer-logo { font-family: 'Outfit', sans-serif; font-size: 1.3rem; font-weight: 800; color: #f5f5f0; text-decoration: none; }
        .footer-brand .footer-logo span { color: var(--accent); }
        .footer-brand p { color: #6b7280; font-size: 0.88rem; line-height: 1.7; margin-top: 0.8rem; max-width: 260px; }
        .footer-col h4 { font-family: 'Outfit', sans-serif; font-size: 0.78rem; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; color: #6b7280; margin-bottom: 1rem; }
        .footer-col ul { list-style: none; }
        .footer-col ul li { margin-bottom: 0.6rem; }
        .footer-col ul a { color: #9ca3af; text-decoration: none; font-size: 0.88rem; transition: color 0.2s; }
        .footer-col ul a:hover { color: #f5f5f0; }
        .footer-bottom { background: #111118; border-top: 1px solid rgba(255,255,255,0.06); padding: 1.2rem 5%; display: flex; justify-content: space-between; align-items: center; color: #6b7280; font-size: 0.8rem; }

        @media (max-width: 900px) {
          .nav-links { display: none; }
          .hamburger { display: flex; }
          .project-body { grid-template-columns: 1fr; }
          .project-col + .project-col { border-left: none; border-top: 1px solid var(--border); }
          .stats-row { grid-template-columns: 1fr 1fr; }
          .stat-cell:nth-child(2) { border-right: none; }
          .stat-cell:nth-child(3) { border-top: 1px solid var(--border); }
          .stack-grid { grid-template-columns: 1fr 1fr; }
          .mission-band { grid-template-columns: 1fr; text-align: center; }
          footer { grid-template-columns: 1fr 1fr; }
          .project-header { padding: 28px 24px 24px; }
          .project-col { padding: 28px 24px; }
          .project-footer { padding: 20px 24px; }
        }
        @media (max-width: 600px) {
          .stats-row { grid-template-columns: 1fr 1fr; }
          .stack-grid { grid-template-columns: 1fr; }
          footer { grid-template-columns: 1fr; }
          .footer-bottom { flex-direction: column; gap: 0.5rem; text-align: center; }
          .team-strip { flex-direction: column; align-items: center; }
        }
      `}</style>

      {/* NAV */}
      <nav>
        <Link href="/" className="nav-logo">HAK <span>Projects</span></Link>
        <ul className="nav-links">
          <li><Link href="/home">Home</Link></li>
          <li><Link href="/about" className="active">About</Link></li>
          <li><Link href="/service">Services</Link></li>
          <li><Link href="/projects">Projects</Link></li>
          <li><Link href="/contact" className="nav-cta">Contact</Link></li>
        </ul>
        <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          <span></span><span></span><span></span>
        </button>
      </nav>
      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        <Link href="/home" onClick={() => setMenuOpen(false)}>Home</Link>
        <Link href="/about" onClick={() => setMenuOpen(false)}>About</Link>
        <Link href="/service" onClick={() => setMenuOpen(false)}>Services</Link>
        <Link href="/projects" onClick={() => setMenuOpen(false)}>Projects</Link>
        <Link href="/contact" className="mob-cta" onClick={() => setMenuOpen(false)}>Contact</Link>
      </div>

      {/* HERO */}
      <section className="about-hero">
        <div className="section-label">About HAK Projects</div>
        <h1>We Build Digital Experiences<br /><span>That Matter</span></h1>
        <p>
          A software development team with proven expertise in web development, ERP, CRM, mobile
          applications, digital marketing, and training. We've been serving financial institutions
          and companies of all sizes since our founding.
        </p>
        <div className="team-strip">
          <div className="team-chip">
            <div className="team-avatar">H</div>
            <div className="team-chip-info">
              <strong>Hemanth Raju</strong>
              <span>Co-Founder &amp; Developer</span>
            </div>
          </div>
          <div className="team-chip">
            <div className="team-avatar">K</div>
            <div className="team-chip-info">
              <strong>Karthik Reddy</strong>
              <span>Co-Founder &amp; Developer</span>
            </div>
          </div>
        </div>
      </section>

      {/* MISSION BAND */}
      <div className="mission-band">
        <div className="mission-item">
          <div className="mission-icon">🎯</div>
          <h3>Our Mission</h3>
          <p>Build innovative, high-quality custom IT solutions that transform businesses and create products that truly make a difference.</p>
        </div>
        <div className="mission-item">
          <div className="mission-icon">🤝</div>
          <h3>Our Approach</h3>
          <p>Teams of skilled developers, designers, and strategists working together — with expertise in web, ERP, mobile, and digital marketing.</p>
        </div>
        <div className="mission-item">
          <div className="mission-icon">🌍</div>
          <h3>Our Reach</h3>
          <p>Based in Yelahanka, Bengaluru — available for remote projects worldwide. Serving clients across India and internationally.</p>
        </div>
      </div>

      {/* PROJECTS */}
      <section className="projects-section">
        <div className="projects-header">
          <div className="section-label">Our Work</div>
          <h2>Featured Projects</h2>
          <p>Real-world applications built end-to-end — from database to UI.</p>
        </div>

        {/* TAB SWITCHER */}
        <div className="tab-switcher">
          <button
            className={`tab-btn ${activeProject === 0 ? 'active-orange' : ''}`}
            onClick={() => setActiveProject(0)}
          >
            PROJECT 01 — Admin Panel
          </button>
          <button
            className={`tab-btn ${activeProject === 1 ? 'active-purple' : ''}`}
            onClick={() => setActiveProject(1)}
          >
            PROJECT 02 — Customer Store
          </button>
        </div>

        {/* PROJECT DETAIL */}
        <div className="project-detail" key={activeProject}>

          {/* HEADER */}
          <div className="project-header">
            <div>
              <div
                className="project-badge"
                style={{ background: proj.colorLight, color: proj.color, border: `1px solid ${proj.colorBorder}` }}
              >
                {proj.label}
              </div>
              <div className="project-title">{proj.name}</div>
              <div className="project-tagline">{proj.tagline}</div>
              <p className="project-desc">{proj.description}</p>
            </div>
          </div>

          {/* STATS */}
          <div className="stats-row">
            {proj.stats.map((s, i) => (
              <div className="stat-cell" key={i}>
                <div className="stat-value" style={{ color: proj.color }}>{s.value}</div>
                <div className="stat-label">{s.label}</div>
              </div>
            ))}
          </div>

          {/* BODY */}
          <div className="project-body">
            {/* FEATURES */}
            <div className="project-col">
              <div className="col-title">Key Features</div>
              <ul className="feature-list">
                {proj.features.map((f, i) => (
                  <li key={i}>
                    <span className="feature-dot" style={{ background: proj.color }}>{i + 1}</span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            {/* TECH */}
            <div className="project-col">
              <div className="col-title">Tech Stack</div>
              <div className="tech-group">
                <div className="tech-group-label">Frontend</div>
                <div className="tech-tags">
                  {proj.tech.frontend.map(t => <span key={t} className="tech-tag frontend">{t}</span>)}
                </div>
              </div>
              <div className="tech-group">
                <div className="tech-group-label">Backend</div>
                <div className="tech-tags">
                  {proj.tech.backend.map(t => <span key={t} className="tech-tag backend">{t}</span>)}
                </div>
              </div>
              <div className="tech-group">
                <div className="tech-group-label">Database & Storage</div>
                <div className="tech-tags">
                  {proj.tech.database.map(t => <span key={t} className="tech-tag database">{t}</span>)}
                </div>
              </div>
              <div className="tech-group">
                <div className="tech-group-label">DevOps & Hosting</div>
                <div className="tech-tags">
                  {proj.tech.devops.map(t => <span key={t} className="tech-tag devops">{t}</span>)}
                </div>
              </div>
            </div>
          </div>

          {/* FOOTER PAGES */}
          <div className="project-footer">
            <div className="pages-label">Application Pages</div>
            <div className="pages-list">
              {proj.pages.map(p => (
                <span key={p} className="page-chip">{p}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FULL TECH STACK */}
      <section className="techstack-section">
        <div className="techstack-inner">
          <div className="section-label">Tech Stack</div>
          <h2>Tools &amp; Technologies</h2>
          <p>The full set of technologies used across both NegilaYogi projects.</p>
          <div className="stack-grid">
            <div className="stack-card">
              <div className="stack-card-icon">⚛️</div>
              <div className="stack-card-category">Frontend</div>
              <div className="stack-card-title">UI & Framework</div>
              <div className="stack-card-tags">
                <span className="stack-mini-tag">Next.js 14</span>
                <span className="stack-mini-tag">React 18</span>
                <span className="stack-mini-tag">TypeScript</span>
                <span className="stack-mini-tag">Tailwind CSS</span>
              </div>
            </div>
            <div className="stack-card">
              <div className="stack-card-icon">🖥️</div>
              <div className="stack-card-category">Backend</div>
              <div className="stack-card-title">Server & API</div>
              <div className="stack-card-tags">
                <span className="stack-mini-tag">Node.js</span>
                <span className="stack-mini-tag">Express.js</span>
                <span className="stack-mini-tag">REST API</span>
                <span className="stack-mini-tag">JWT Auth</span>
              </div>
            </div>
            <div className="stack-card">
              <div className="stack-card-icon">🗄️</div>
              <div className="stack-card-category">Database</div>
              <div className="stack-card-title">Data & Storage</div>
              <div className="stack-card-tags">
                <span className="stack-mini-tag">MySQL</span>
                <span className="stack-mini-tag">Prisma ORM</span>
                <span className="stack-mini-tag">Cloudinary</span>
              </div>
            </div>
            <div className="stack-card">
              <div className="stack-card-icon">🚀</div>
              <div className="stack-card-category">DevOps</div>
              <div className="stack-card-title">Hosting & CI/CD</div>
              <div className="stack-card-tags">
                <span className="stack-mini-tag">Vercel</span>
                <span className="stack-mini-tag">Railway</span>
                <span className="stack-mini-tag">GitHub Actions</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="footer-brand">
          <Link href="/" className="footer-logo">HAK <span>Projects</span></Link>
          <p>We provide cutting-edge IT solutions to help businesses grow and succeed in the digital world. Let&apos;s build something great together.</p>
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