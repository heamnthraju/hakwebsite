// // // // 'use client';
// // // // import { useState } from 'react';
// // // // import Link from 'next/link';

// // // // export default function ContactPage() {
// // // //   const [menuOpen, setMenuOpen] = useState(false);
// // // //   const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', message: '' });
// // // //   const [submitted, setSubmitted] = useState(false);

// // // //   const handleSubmit = (e: React.FormEvent) => {
// // // //     e.preventDefault();
// // // //     setSubmitted(true);
// // // //   };

// // // //   return (
// // // //     <>
// // // //       <style>{`
// // // //         @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:wght@300;400;500;600&display=swap');
// // // //         *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
// // // //         :root {
// // // //           --black: #0a0a0f; --dark: #111118; --card: #16161f;
// // // //           --accent: #f97316; --accent2: #fb923c;
// // // //           --white: #f5f5f0; --muted: #8888a0; --border: rgba(255,255,255,0.08);
// // // //         }
// // // //         html { scroll-behavior: smooth; }
// // // //         body { font-family: 'DM Sans', sans-serif; background: var(--black); color: var(--white); overflow-x: hidden; }

// // // //         nav { position: sticky; top: 0; z-index: 100; padding: 0 5%; display: flex; align-items: center; justify-content: space-between; height: 70px; background: rgba(10,10,15,0.95); backdrop-filter: blur(20px); border-bottom: 1px solid var(--border); }
// // // //         .nav-logo { font-family: 'Syne', sans-serif; font-size: 1.5rem; font-weight: 800; color: var(--white); text-decoration: none; letter-spacing: -0.5px; }
// // // //         .nav-logo span { color: var(--accent); }
// // // //         .nav-links { display: flex; gap: 2rem; list-style: none; }
// // // //         .nav-links a { color: var(--muted); text-decoration: none; font-size: 0.9rem; font-weight: 500; transition: color 0.2s; }
// // // //         .nav-links a:hover { color: var(--white); }
// // // //         .nav-links a.active { color: var(--accent); font-weight: 600; }
// // // //         .nav-cta { background: var(--accent); color: var(--black) !important; padding: 0.5rem 1.2rem; border-radius: 6px; font-weight: 600 !important; }
// // // //         .hamburger { display: none; flex-direction: column; gap: 5px; cursor: pointer; background: none; border: none; }
// // // //         .hamburger span { display: block; width: 24px; height: 2px; background: var(--white); }
// // // //         .mobile-menu { display: none; position: fixed; top: 70px; left: 0; right: 0; background: rgba(10,10,15,0.98); backdrop-filter: blur(20px); border-bottom: 1px solid var(--border); padding: 1.5rem 5%; z-index: 99; flex-direction: column; gap: 1rem; }
// // // //         .mobile-menu.open { display: flex; }
// // // //         .mobile-menu a { color: var(--muted); text-decoration: none; font-size: 1rem; padding: 0.5rem 0; border-bottom: 1px solid var(--border); }
// // // //         .mob-cta { background: var(--accent); color: var(--black) !important; padding: 0.75rem 1.2rem !important; border-radius: 6px; font-weight: 600 !important; text-align: center; border-bottom: none !important; margin-top: 0.5rem; }

// // // //         .page-hero { padding: 80px 5% 60px; text-align: center; position: relative; overflow: hidden; }
// // // //         .page-hero::before { content: ''; position: absolute; inset: 0; background: radial-gradient(ellipse 60% 50% at 50% 0%, rgba(249,115,22,0.1) 0%, transparent 70%); pointer-events: none; }
// // // //         .section-label { display: inline-block; font-size: 0.75rem; font-weight: 700; text-transform: uppercase; letter-spacing: 2px; color: var(--accent); margin-bottom: 1rem; }
// // // //         .page-hero h1 { font-family: 'Syne', sans-serif; font-size: clamp(2.5rem, 5vw, 4rem); font-weight: 800; letter-spacing: -2px; margin-bottom: 1.2rem; }
// // // //         .page-hero h1 span { color: var(--accent); }
// // // //         .page-hero p { color: var(--muted); font-size: 1.05rem; line-height: 1.7; max-width: 600px; margin: 0 auto; }

// // // //         .contact-grid { display: grid; grid-template-columns: 1fr 1.6fr; gap: 3rem; padding: 0 5% 80px; align-items: start; }

// // // //         .contact-info { display: flex; flex-direction: column; gap: 1.5rem; }
// // // //         .info-card { background: var(--card); border: 1px solid var(--border); border-radius: 16px; padding: 1.8rem; transition: border-color 0.2s; }
// // // //         .info-card:hover { border-color: rgba(249,115,22,0.3); }
// // // //         .info-icon { width: 48px; height: 48px; border-radius: 12px; background: rgba(249,115,22,0.12); display: flex; align-items: center; justify-content: center; font-size: 1.4rem; margin-bottom: 1rem; }
// // // //         .info-card h3 { font-family: 'Syne', sans-serif; font-size: 1rem; font-weight: 700; margin-bottom: 0.4rem; }
// // // //         .info-card p { color: var(--muted); font-size: 0.88rem; line-height: 1.6; }
// // // //         .info-card a { color: var(--accent); text-decoration: none; font-size: 0.88rem; }

// // // //         .form-card { background: var(--card); border: 1px solid var(--border); border-radius: 20px; padding: 2.5rem; position: relative; }
// // // //         .form-card::before { content: ''; position: absolute; top: -1px; left: 30px; right: 30px; height: 1px; background: linear-gradient(90deg, transparent, var(--accent), transparent); }
// // // //         .form-card h2 { font-family: 'Syne', sans-serif; font-size: 1.5rem; font-weight: 800; margin-bottom: 0.5rem; }
// // // //         .form-card > p { color: var(--muted); font-size: 0.9rem; margin-bottom: 2rem; }
// // // //         .form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; }
// // // //         .form-group { display: flex; flex-direction: column; gap: 0.5rem; margin-bottom: 1.2rem; }
// // // //         .form-group label { font-size: 0.82rem; font-weight: 600; color: var(--muted); text-transform: uppercase; letter-spacing: 0.5px; }
// // // //         .form-group input, .form-group select, .form-group textarea {
// // // //           background: rgba(255,255,255,0.04); border: 1px solid var(--border);
// // // //           border-radius: 10px; padding: 0.8rem 1rem; color: var(--white);
// // // //           font-size: 0.9rem; font-family: 'DM Sans', sans-serif;
// // // //           outline: none; transition: border-color 0.2s; width: 100%;
// // // //         }
// // // //         .form-group input:focus, .form-group select:focus, .form-group textarea:focus { border-color: rgba(249,115,22,0.5); }
// // // //         .form-group select option { background: var(--dark); }
// // // //         .form-group textarea { resize: vertical; min-height: 120px; }
// // // //         .btn-primary { background: var(--accent); color: var(--black); padding: 0.9rem 2rem; border-radius: 8px; font-weight: 700; font-size: 0.95rem; border: none; cursor: pointer; transition: all 0.2s; font-family: 'DM Sans', sans-serif; width: 100%; }
// // // //         .btn-primary:hover { background: var(--accent2); transform: translateY(-2px); box-shadow: 0 8px 30px rgba(249,115,22,0.35); }

// // // //         .success-msg { text-align: center; padding: 3rem; }
// // // //         .success-msg .check { font-size: 4rem; margin-bottom: 1rem; }
// // // //         .success-msg h3 { font-family: 'Syne', sans-serif; font-size: 1.5rem; font-weight: 800; margin-bottom: 0.5rem; color: var(--accent); }
// // // //         .success-msg p { color: var(--muted); font-size: 0.9rem; }

// // // //         footer { border-top: 1px solid var(--border); padding: 3rem 5%; display: grid; grid-template-columns: 2fr 1fr 1fr; gap: 3rem; }
// // // //         .footer-brand p { color: var(--muted); font-size: 0.9rem; line-height: 1.7; margin-top: 1rem; max-width: 260px; }
// // // //         .footer-col h4 { font-family: 'Syne', sans-serif; font-size: 0.85rem; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 1rem; }
// // // //         .footer-col ul { list-style: none; }
// // // //         .footer-col ul li { margin-bottom: 0.6rem; }
// // // //         .footer-col ul a { color: var(--muted); text-decoration: none; font-size: 0.88rem; transition: color 0.2s; }
// // // //         .footer-col ul a:hover { color: var(--white); }
// // // //         .footer-bottom { border-top: 1px solid var(--border); padding: 1.5rem 5%; display: flex; justify-content: space-between; align-items: center; color: var(--muted); font-size: 0.82rem; }

// // // //         @media (max-width: 900px) {
// // // //           .contact-grid { grid-template-columns: 1fr; }
// // // //           .nav-links { display: none; }
// // // //           .hamburger { display: flex; }
// // // //           footer { grid-template-columns: 1fr 1fr; }
// // // //         }
// // // //         @media (max-width: 600px) {
// // // //           .form-row { grid-template-columns: 1fr; }
// // // //           footer { grid-template-columns: 1fr; }
// // // //           .footer-bottom { flex-direction: column; gap: 0.5rem; text-align: center; }
// // // //         }
// // // //       `}</style>

// // // //       <nav>
// // // //         <Link href="/" className="nav-logo">HAK <span>Projects</span></Link>
// // // //         <ul className="nav-links">
// // // //           <li><Link href="/home">Home</Link></li>
// // // //           <li><Link href="/about">About</Link></li>
// // // //           <li><Link href="/service">Services</Link></li>
// // // //           <li><Link href="/projects">Projects</Link></li>
// // // //           <li><Link href="/contact" className="nav-cta active">Contact</Link></li>
// // // //         </ul>
// // // //         <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}><span></span><span></span><span></span></button>
// // // //       </nav>
// // // //       <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
// // // //         <Link href="/home" onClick={() => setMenuOpen(false)}>Home</Link>
// // // //         <Link href="/about" onClick={() => setMenuOpen(false)}>About</Link>
// // // //         <Link href="/service" onClick={() => setMenuOpen(false)}>Services</Link>
// // // //         <Link href="/projects" onClick={() => setMenuOpen(false)}>Projects</Link>
// // // //         <Link href="/contact" className="mob-cta" onClick={() => setMenuOpen(false)}>Contact</Link>
// // // //       </div>

// // // //       <section className="page-hero">
// // // //         <span className="section-label">Get In Touch</span>
// // // //         <h1>Let's Build Something <span>Great</span></h1>
// // // //         <p>Have a project in mind? We'd love to hear about it. Send us a message and we'll get back to you within 24 hours.</p>
// // // //       </section>

// // // //       <div className="contact-grid">
// // // //         {/* LEFT — INFO */}
// // // //         <div className="contact-info">
// // // //           {[
// // // //             { icon:'📍', title:'Our Office', content:'Karachi, Pakistan', sub:'Available for remote projects worldwide' },
// // // //             { icon:'📧', title:'Email Us', content:'info@hakprojects.com', sub:'We reply within 24 hours', link:'mailto:info@hakprojects.com' },
// // // //             { icon:'📞', title:'Call Us', content:'+92 300 000 0000', sub:'Mon–Fri, 9am–6pm PKT', link:'tel:+923000000000' },
// // // //             { icon:'💬', title:'WhatsApp', content:'+92 300 000 0000', sub:'Quick replies on WhatsApp', link:'https://wa.me/923000000000' },
// // // //           ].map((item, i) => (
// // // //             <div className="info-card" key={i}>
// // // //               <div className="info-icon">{item.icon}</div>
// // // //               <h3>{item.title}</h3>
// // // //               {item.link
// // // //                 ? <a href={item.link}>{item.content}</a>
// // // //                 : <p style={{color:'var(--white)', marginBottom:'2px'}}>{item.content}</p>
// // // //               }
// // // //               <p style={{marginTop:'4px'}}>{item.sub}</p>
// // // //             </div>
// // // //           ))}
// // // //         </div>

// // // //         {/* RIGHT — FORM */}
// // // //         <div className="form-card">
// // // //           {submitted ? (
// // // //             <div className="success-msg">
// // // //               <div className="check">✅</div>
// // // //               <h3>Message Sent!</h3>
// // // //               <p>Thank you for reaching out. We'll get back to you within 24 hours.</p>
// // // //             </div>
// // // //           ) : (
// // // //             <>
// // // //               <h2>Send Us a Message</h2>
// // // //               <p>Fill out the form below and we'll get back to you shortly.</p>
// // // //               <form onSubmit={handleSubmit}>
// // // //                 <div className="form-row">
// // // //                   <div className="form-group">
// // // //                     <label>Your Name *</label>
// // // //                     <input type="text" placeholder="John Doe" required value={form.name} onChange={e => setForm({...form, name: e.target.value})} />
// // // //                   </div>
// // // //                   <div className="form-group">
// // // //                     <label>Email Address *</label>
// // // //                     <input type="email" placeholder="john@example.com" required value={form.email} onChange={e => setForm({...form, email: e.target.value})} />
// // // //                   </div>
// // // //                 </div>
// // // //                 <div className="form-row">
// // // //                   <div className="form-group">
// // // //                     <label>Phone Number</label>
// // // //                     <input type="tel" placeholder="+92 300 000 0000" value={form.phone} onChange={e => setForm({...form, phone: e.target.value})} />
// // // //                   </div>
// // // //                   <div className="form-group">
// // // //                     <label>Service Needed</label>
// // // //                     <select value={form.service} onChange={e => setForm({...form, service: e.target.value})}>
// // // //                       <option value="">Select a service</option>
// // // //                       <option>Web Development</option>
// // // //                       <option>Mobile App Development</option>
// // // //                       <option>ERP Solutions</option>
// // // //                       <option>AWS Cloud Services</option>
// // // //                       <option>UI/UX Design</option>
// // // //                       <option>Digital Marketing</option>
// // // //                       <option>Other</option>
// // // //                     </select>
// // // //                   </div>
// // // //                 </div>
// // // //                 <div className="form-group">
// // // //                   <label>Your Message *</label>
// // // //                   <textarea placeholder="Tell us about your project, goals, timeline, and budget..." required value={form.message} onChange={e => setForm({...form, message: e.target.value})} />
// // // //                 </div>
// // // //                 <button type="submit" className="btn-primary">Send Message →</button>
// // // //               </form>
// // // //             </>
// // // //           )}
// // // //         </div>
// // // //       </div>

// // // //       <footer>
// // // //         <div className="footer-brand">
// // // //           <Link href="/" className="nav-logo">HAK <span style={{color:'var(--accent)'}}>Projects</span></Link>
// // // //           <p>We provide cutting-edge IT solutions to help businesses grow and succeed in the digital world.</p>
// // // //         </div>
// // // //         <div className="footer-col">
// // // //           <h4>Quick Links</h4>
// // // //           <ul>
// // // //             <li><Link href="/home">Home</Link></li>
// // // //             <li><Link href="/about">About Us</Link></li>
// // // //             <li><Link href="/projects">Projects</Link></li>
// // // //             <li><Link href="/contact">Contact Us</Link></li>
// // // //           </ul>
// // // //         </div>
// // // //         <div className="footer-col">
// // // //           <h4>Services</h4>
// // // //           <ul>
// // // //             <li><Link href="/service">Web Development</Link></li>
// // // //             <li><Link href="/service">Mobile Apps</Link></li>
// // // //             <li><Link href="/service">ERP Solutions</Link></li>
// // // //             <li><Link href="/service">AWS Cloud</Link></li>
// // // //           </ul>
// // // //         </div>
// // // //       </footer>
// // // //       <div className="footer-bottom">
// // // //         <span>© 2026 HAK Projects. All rights reserved.</span>
// // // //         <span>Built with ❤️ using Next.js</span>
// // // //       </div>
// // // //     </>
// // // //   );
// // // // }

// // // 'use client';
// // // import { useState } from 'react';
// // // import Link from 'next/link';

// // // export default function ContactPage() {
// // //   const [menuOpen, setMenuOpen] = useState(false);
// // //   const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', message: '' });
// // //   const [submitted, setSubmitted] = useState(false);

// // //   const handleSubmit = (e: React.FormEvent) => {
// // //     e.preventDefault();
// // //     setSubmitted(true);
// // //   };

// // //   return (
// // //     <>
// // //       <style>{`
// // //         @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:wght@300;400;500;600&display=swap');
// // //         *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
// // //         :root {
// // //           --black: #0a0a0f; --dark: #111118; --card: #16161f;
// // //           --accent: #f97316; --accent2: #fb923c;
// // //           --white: #f5f5f0; --muted: #8888a0; --border: rgba(255,255,255,0.08);
// // //         }
// // //         html { scroll-behavior: smooth; }
// // //         body { font-family: 'DM Sans', sans-serif; background: var(--black); color: var(--white); overflow-x: hidden; }

// // //         nav { position: sticky; top: 0; z-index: 100; padding: 0 5%; display: flex; align-items: center; justify-content: space-between; height: 70px; background: rgba(10,10,15,0.95); backdrop-filter: blur(20px); border-bottom: 1px solid var(--border); }
// // //         .nav-logo { font-family: 'Syne', sans-serif; font-size: 1.5rem; font-weight: 800; color: var(--white); text-decoration: none; letter-spacing: -0.5px; }
// // //         .nav-logo span { color: var(--accent); }
// // //         .nav-links { display: flex; gap: 2rem; list-style: none; }
// // //         .nav-links a { color: var(--muted); text-decoration: none; font-size: 0.9rem; font-weight: 500; transition: color 0.2s; }
// // //         .nav-links a:hover { color: var(--white); }
// // //         .nav-links a.active { color: var(--accent); font-weight: 600; }
// // //         .nav-cta { background: var(--accent); color: var(--black) !important; padding: 0.5rem 1.2rem; border-radius: 6px; font-weight: 600 !important; }
// // //         .hamburger { display: none; flex-direction: column; gap: 5px; cursor: pointer; background: none; border: none; }
// // //         .hamburger span { display: block; width: 24px; height: 2px; background: var(--white); }
// // //         .mobile-menu { display: none; position: fixed; top: 70px; left: 0; right: 0; background: rgba(10,10,15,0.98); backdrop-filter: blur(20px); border-bottom: 1px solid var(--border); padding: 1.5rem 5%; z-index: 99; flex-direction: column; gap: 1rem; }
// // //         .mobile-menu.open { display: flex; }
// // //         .mobile-menu a { color: var(--muted); text-decoration: none; font-size: 1rem; padding: 0.5rem 0; border-bottom: 1px solid var(--border); }
// // //         .mob-cta { background: var(--accent); color: var(--black) !important; padding: 0.75rem 1.2rem !important; border-radius: 6px; font-weight: 600 !important; text-align: center; border-bottom: none !important; margin-top: 0.5rem; }

// // //         .page-hero { padding: 80px 5% 60px; text-align: center; position: relative; overflow: hidden; }
// // //         .page-hero::before { content: ''; position: absolute; inset: 0; background: radial-gradient(ellipse 60% 50% at 50% 0%, rgba(249,115,22,0.1) 0%, transparent 70%); pointer-events: none; }
// // //         .section-label { display: inline-block; font-size: 0.75rem; font-weight: 700; text-transform: uppercase; letter-spacing: 2px; color: var(--accent); margin-bottom: 1rem; }
// // //         .page-hero h1 { font-family: 'Syne', sans-serif; font-size: clamp(2.5rem, 5vw, 4rem); font-weight: 800; letter-spacing: -2px; margin-bottom: 1.2rem; }
// // //         .page-hero h1 span { color: var(--accent); }
// // //         .page-hero p { color: var(--muted); font-size: 1.05rem; line-height: 1.7; max-width: 600px; margin: 0 auto; }

// // //         .contact-grid { display: grid; grid-template-columns: 1fr 1.6fr; gap: 3rem; padding: 0 5% 80px; align-items: start; }

// // //         .contact-info { display: flex; flex-direction: column; gap: 1.5rem; }

// // //         /* Team cards */
// // //         .team-section { background: var(--card); border: 1px solid var(--border); border-radius: 16px; padding: 1.8rem; }
// // //         .team-section h3 { font-family: 'Syne', sans-serif; font-size: 0.85rem; font-weight: 700; text-transform: uppercase; letter-spacing: 1.5px; color: var(--accent); margin-bottom: 1.2rem; }
// // //         .team-member { display: flex; align-items: center; gap: 1rem; padding: 1rem 0; border-bottom: 1px solid var(--border); }
// // //         .team-member:last-child { border-bottom: none; padding-bottom: 0; }
// // //         .avatar { width: 44px; height: 44px; border-radius: 50%; background: linear-gradient(135deg, #f97316, #fb923c); display: flex; align-items: center; justify-content: center; font-size: 1.1rem; font-weight: 800; color: #0a0a0f; font-family: 'Syne', sans-serif; flex-shrink: 0; }
// // //         .member-info { flex: 1; }
// // //         .member-info strong { display: block; font-size: 0.95rem; font-weight: 600; color: var(--white); margin-bottom: 2px; }
// // //         .member-info span { font-size: 0.8rem; color: var(--muted); }

// // //         .info-card { background: var(--card); border: 1px solid var(--border); border-radius: 16px; padding: 1.8rem; transition: border-color 0.2s; }
// // //         .info-card:hover { border-color: rgba(249,115,22,0.3); }
// // //         .info-icon { width: 48px; height: 48px; border-radius: 12px; background: rgba(249,115,22,0.12); display: flex; align-items: center; justify-content: center; font-size: 1.4rem; margin-bottom: 1rem; }
// // //         .info-card h3 { font-family: 'Syne', sans-serif; font-size: 1rem; font-weight: 700; margin-bottom: 0.4rem; }
// // //         .info-card p { color: var(--muted); font-size: 0.88rem; line-height: 1.6; }
// // //         .info-card a { color: var(--accent); text-decoration: none; font-size: 0.88rem; display: block; margin-bottom: 2px; }
// // //         .info-card a:hover { text-decoration: underline; }

// // //         .form-card { background: var(--card); border: 1px solid var(--border); border-radius: 20px; padding: 2.5rem; position: relative; }
// // //         .form-card::before { content: ''; position: absolute; top: -1px; left: 30px; right: 30px; height: 1px; background: linear-gradient(90deg, transparent, var(--accent), transparent); }
// // //         .form-card h2 { font-family: 'Syne', sans-serif; font-size: 1.5rem; font-weight: 800; margin-bottom: 0.5rem; }
// // //         .form-card > p { color: var(--muted); font-size: 0.9rem; margin-bottom: 2rem; }
// // //         .form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; }
// // //         .form-group { display: flex; flex-direction: column; gap: 0.5rem; margin-bottom: 1.2rem; }
// // //         .form-group label { font-size: 0.82rem; font-weight: 600; color: var(--muted); text-transform: uppercase; letter-spacing: 0.5px; }
// // //         .form-group input, .form-group select, .form-group textarea {
// // //           background: rgba(255,255,255,0.04); border: 1px solid var(--border);
// // //           border-radius: 10px; padding: 0.8rem 1rem; color: var(--white);
// // //           font-size: 0.9rem; font-family: 'DM Sans', sans-serif;
// // //           outline: none; transition: border-color 0.2s; width: 100%;
// // //         }
// // //         .form-group input:focus, .form-group select:focus, .form-group textarea:focus { border-color: rgba(249,115,22,0.5); }
// // //         .form-group select option { background: var(--dark); }
// // //         .form-group textarea { resize: vertical; min-height: 120px; }
// // //         .btn-primary { background: var(--accent); color: var(--black); padding: 0.9rem 2rem; border-radius: 8px; font-weight: 700; font-size: 0.95rem; border: none; cursor: pointer; transition: all 0.2s; font-family: 'DM Sans', sans-serif; width: 100%; }
// // //         .btn-primary:hover { background: var(--accent2); transform: translateY(-2px); box-shadow: 0 8px 30px rgba(249,115,22,0.35); }

// // //         .success-msg { text-align: center; padding: 3rem; }
// // //         .success-msg .check { font-size: 4rem; margin-bottom: 1rem; }
// // //         .success-msg h3 { font-family: 'Syne', sans-serif; font-size: 1.5rem; font-weight: 800; margin-bottom: 0.5rem; color: var(--accent); }
// // //         .success-msg p { color: var(--muted); font-size: 0.9rem; }

// // //         footer { border-top: 1px solid var(--border); padding: 3rem 5%; display: grid; grid-template-columns: 2fr 1fr 1fr; gap: 3rem; }
// // //         .footer-brand p { color: var(--muted); font-size: 0.9rem; line-height: 1.7; margin-top: 1rem; max-width: 260px; }
// // //         .footer-col h4 { font-family: 'Syne', sans-serif; font-size: 0.85rem; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 1rem; }
// // //         .footer-col ul { list-style: none; }
// // //         .footer-col ul li { margin-bottom: 0.6rem; }
// // //         .footer-col ul a { color: var(--muted); text-decoration: none; font-size: 0.88rem; transition: color 0.2s; }
// // //         .footer-col ul a:hover { color: var(--white); }
// // //         .footer-bottom { border-top: 1px solid var(--border); padding: 1.5rem 5%; display: flex; justify-content: space-between; align-items: center; color: var(--muted); font-size: 0.82rem; }

// // //         @media (max-width: 900px) {
// // //           .contact-grid { grid-template-columns: 1fr; }
// // //           .nav-links { display: none; }
// // //           .hamburger { display: flex; }
// // //           footer { grid-template-columns: 1fr 1fr; }
// // //         }
// // //         @media (max-width: 600px) {
// // //           .form-row { grid-template-columns: 1fr; }
// // //           footer { grid-template-columns: 1fr; }
// // //           .footer-bottom { flex-direction: column; gap: 0.5rem; text-align: center; }
// // //         }
// // //       `}</style>

// // //       {/* ── NAVBAR ── */}
// // //       <nav>
// // //         <Link href="/" className="nav-logo">HAK <span>Projects</span></Link>
// // //         <ul className="nav-links">
// // //           <li><Link href="/home">Home</Link></li>
// // //           <li><Link href="/about">About</Link></li>
// // //           <li><Link href="/service">Services</Link></li>
// // //           <li><Link href="/projects">Projects</Link></li>
// // //           <li><Link href="/contact" className="nav-cta active">Contact</Link></li>
// // //         </ul>
// // //         <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
// // //           <span></span><span></span><span></span>
// // //         </button>
// // //       </nav>
// // //       <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
// // //         <Link href="/home" onClick={() => setMenuOpen(false)}>Home</Link>
// // //         <Link href="/about" onClick={() => setMenuOpen(false)}>About</Link>
// // //         <Link href="/service" onClick={() => setMenuOpen(false)}>Services</Link>
// // //         <Link href="/projects" onClick={() => setMenuOpen(false)}>Projects</Link>
// // //         <Link href="/contact" className="mob-cta" onClick={() => setMenuOpen(false)}>Contact</Link>
// // //       </div>

// // //       {/* ── HERO ── */}
// // //       <section className="page-hero">
// // //         <span className="section-label">Get In Touch</span>
// // //         <h1>Let&apos;s Build Something <span>Great</span></h1>
// // //         <p>Have a project in mind? We&apos;d love to hear about it. Send us a message and we&apos;ll get back to you within 24 hours.</p>
// // //       </section>

// // //       {/* ── GRID ── */}
// // //       <div className="contact-grid">

// // //         {/* LEFT — INFO */}
// // //         <div className="contact-info">

// // //           {/* Team Members */}
// // //           <div className="team-section">
// // //             <h3>Our Team</h3>
// // //             <div className="team-member">
// // //               <div className="avatar">H</div>
// // //               <div className="member-info">
// // //                 <strong>Hemanth Raju</strong>
// // //                 <span>Co-Founder & Developer</span>
// // //               </div>
// // //             </div>
// // //             <div className="team-member">
// // //               <div className="avatar">K</div>
// // //               <div className="member-info">
// // //                 <strong>Karthik Reddy</strong>
// // //                 <span>Co-Founder & Developer</span>
// // //               </div>
// // //             </div>
// // //           </div>

// // //           {/* Email */}
// // //           <div className="info-card">
// // //             <div className="info-icon">📧</div>
// // //             <h3>Email Us</h3>
// // //             <a href="mailto:karthikkreddy216@gmail.com">karthikkreddy216@gmail.com</a>
// // //             <p style={{marginTop:'4px'}}>We reply within 24 hours</p>
// // //           </div>

// // //           {/* Phone */}
// // //           <div className="info-card">
// // //             <div className="info-icon">📞</div>
// // //             <h3>Call Us</h3>
// // //             <a href="tel:+919741180425">+91 97411 80425</a>
// // //             <a href="tel:+917483529995">+91 74835 29995</a>
// // //             <p style={{marginTop:'4px'}}>Mon–Fri, 9am–6pm IST</p>
// // //           </div>

// // //           {/* WhatsApp */}
// // //           <div className="info-card">
// // //             <div className="info-icon">💬</div>
// // //             <h3>WhatsApp</h3>
// // //             <a href="https://wa.me/919741180425" target="_blank" rel="noreferrer">+91 97411 80425</a>
// // //             <a href="https://wa.me/917483529995" target="_blank" rel="noreferrer">+91 74835 29995</a>
// // //             <p style={{marginTop:'4px'}}>Quick replies on WhatsApp</p>
// // //           </div>

// // //           {/* Location */}
// // //           <div className="info-card">
// // //             <div className="info-icon">📍</div>
// // //             <h3>Our Location</h3>
// // //             <p style={{color:'var(--white)', marginBottom:'2px'}}>Yelahanka, Bengaluru</p>
// // //             <p>Karnataka, India — Available for remote projects worldwide</p>
// // //           </div>

// // //         </div>

// // //         {/* RIGHT — FORM */}
// // //         <div className="form-card">
// // //           {submitted ? (
// // //             <div className="success-msg">
// // //               <div className="check">✅</div>
// // //               <h3>Message Sent!</h3>
// // //               <p>Thank you for reaching out. We&apos;ll get back to you within 24 hours.</p>
// // //             </div>
// // //           ) : (
// // //             <>
// // //               <h2>Send Us a Message</h2>
// // //               <p>Fill out the form below and we&apos;ll get back to you shortly.</p>
// // //               <form onSubmit={handleSubmit}>
// // //                 <div className="form-row">
// // //                   <div className="form-group">
// // //                     <label>Your Name *</label>
// // //                     <input type="text" placeholder="John Doe" required value={form.name} onChange={e => setForm({...form, name: e.target.value})} />
// // //                   </div>
// // //                   <div className="form-group">
// // //                     <label>Email Address *</label>
// // //                     <input type="email" placeholder="john@example.com" required value={form.email} onChange={e => setForm({...form, email: e.target.value})} />
// // //                   </div>
// // //                 </div>
// // //                 <div className="form-row">
// // //                   <div className="form-group">
// // //                     <label>Phone Number</label>
// // //                     <input type="tel" placeholder="+91 00000 00000" value={form.phone} onChange={e => setForm({...form, phone: e.target.value})} />
// // //                   </div>
// // //                   <div className="form-group">
// // //                     <label>Service Needed</label>
// // //                     <select value={form.service} onChange={e => setForm({...form, service: e.target.value})}>
// // //                       <option value="">Select a service</option>
// // //                       <option>Web Development</option>
// // //                       <option>Mobile App Development</option>
// // //                       <option>ERP Solutions</option>
// // //                       <option>AWS Cloud Services</option>
// // //                       <option>UI/UX Design</option>
// // //                       <option>Digital Marketing</option>
// // //                       <option>Other</option>
// // //                     </select>
// // //                   </div>
// // //                 </div>
// // //                 <div className="form-group">
// // //                   <label>Your Message *</label>
// // //                   <textarea placeholder="Tell us about your project, goals, timeline, and budget..." required value={form.message} onChange={e => setForm({...form, message: e.target.value})} />
// // //                 </div>
// // //                 <button type="submit" className="btn-primary">Send Message →</button>
// // //               </form>
// // //             </>
// // //           )}
// // //         </div>
// // //       </div>

// // //       {/* ── FOOTER ── */}
// // //       <footer>
// // //         <div className="footer-brand">
// // //           <Link href="/" className="nav-logo">HAK <span style={{color:'var(--accent)'}}>Projects</span></Link>
// // //           <p>We provide cutting-edge IT solutions to help businesses grow and succeed in the digital world. Let&apos;s build something great together.</p>
// // //         </div>
// // //         <div className="footer-col">
// // //           <h4>Quick Links</h4>
// // //           <ul>
// // //             <li><Link href="/home">Home</Link></li>
// // //             <li><Link href="/about">About Us</Link></li>
// // //             <li><Link href="/projects">Projects</Link></li>
// // //             <li><Link href="/contact">Contact Us</Link></li>
// // //           </ul>
// // //         </div>
// // //         <div className="footer-col">
// // //           <h4>Services</h4>
// // //           <ul>
// // //             <li><Link href="/service">Web Development</Link></li>
// // //             <li><Link href="/service">Mobile Apps</Link></li>
// // //             <li><Link href="/service">ERP Solutions</Link></li>
// // //             <li><Link href="/service">AWS Cloud</Link></li>
// // //           </ul>
// // //         </div>
// // //       </footer>
// // //       <div className="footer-bottom">
// // //         <span>© 2026 HAK Projects. All rights reserved.</span>
// // //         <span>Built with ❤️ using Next.js</span>
// // //       </div>
// // //     </>
// // //   );
// // // }

// // 'use client';
// // import { useState } from 'react';
// // import Link from 'next/link';

// // export default function ContactPage() {
// //   const [menuOpen, setMenuOpen] = useState(false);
// //   const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', message: '' });
// //   const [submitted, setSubmitted] = useState(false);

// //   const handleSubmit = (e: React.FormEvent) => {
// //     e.preventDefault();
// //     setSubmitted(true);
// //   };

// //   return (
// //     <>
// //       <style>{`
// //         @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:wght@300;400;500;600&display=swap');
// //         *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
// //         :root {
// //           --bg: #f9fafb;
// //           --white: #ffffff;
// //           --card: #ffffff;
// //           --accent: #f97316;
// //           --accent2: #fb923c;
// //           --dark: #0f0f0f;
// //           --gray-800: #1f2937;
// //           --gray-600: #4b5563;
// //           --gray-400: #9ca3af;
// //           --border: #e5e7eb;
// //           --border-hover: rgba(249,115,22,0.35);
// //         }
// //         html { scroll-behavior: smooth; }
// //         body { font-family: 'DM Sans', sans-serif; background: var(--bg); color: var(--dark); overflow-x: hidden; }

// //         /* ── NAV ── */
// //         nav {
// //           position: sticky; top: 0; z-index: 100;
// //           padding: 0 5%; display: flex; align-items: center; justify-content: space-between;
// //           height: 64px;
// //           background: rgba(255,255,255,0.92);
// //           backdrop-filter: blur(16px);
// //           border-bottom: 1px solid var(--border);
// //         }
// //         .nav-logo { font-family: 'Syne', sans-serif; font-size: 1.4rem; font-weight: 800; color: var(--dark); text-decoration: none; letter-spacing: -0.5px; }
// //         .nav-logo span { color: var(--accent); }
// //         .nav-links { display: flex; gap: 2rem; list-style: none; align-items: center; }
// //         .nav-links a { color: var(--gray-600); text-decoration: none; font-size: 0.9rem; font-weight: 500; transition: color 0.2s; }
// //         .nav-links a:hover { color: var(--dark); }
// //         .nav-links a.active { color: var(--accent); font-weight: 600; }
// //         .nav-cta { background: var(--accent) !important; color: #fff !important; padding: 0.45rem 1.1rem !important; border-radius: 7px; font-weight: 600 !important; }
// //         .nav-cta:hover { background: #ea6c00 !important; }
// //         .hamburger { display: none; flex-direction: column; gap: 5px; cursor: pointer; background: none; border: none; }
// //         .hamburger span { display: block; width: 24px; height: 2px; background: var(--dark); }
// //         .mobile-menu { display: none; position: fixed; top: 64px; left: 0; right: 0; background: rgba(255,255,255,0.98); backdrop-filter: blur(16px); border-bottom: 1px solid var(--border); padding: 1.5rem 5%; z-index: 99; flex-direction: column; gap: 1rem; }
// //         .mobile-menu.open { display: flex; }
// //         .mobile-menu a { color: var(--gray-600); text-decoration: none; font-size: 1rem; padding: 0.5rem 0; border-bottom: 1px solid var(--border); }
// //         .mob-cta { background: var(--accent); color: #fff !important; padding: 0.75rem 1.2rem !important; border-radius: 7px; font-weight: 600 !important; text-align: center; border-bottom: none !important; margin-top: 0.5rem; }

// //         /* ── HERO ── */
// //         .page-hero { padding: 80px 5% 60px; text-align: center; position: relative; overflow: hidden; background: var(--white); }
// //         .page-hero::before { content: ''; position: absolute; inset: 0; background: radial-gradient(ellipse 70% 60% at 50% 0%, rgba(249,115,22,0.07) 0%, transparent 70%); pointer-events: none; }
// //         .section-label { display: inline-block; font-size: 0.72rem; font-weight: 700; text-transform: uppercase; letter-spacing: 2px; color: var(--accent); background: rgba(249,115,22,0.1); padding: 5px 14px; border-radius: 20px; margin-bottom: 1.2rem; }
// //         .page-hero h1 { font-family: 'Syne', sans-serif; font-size: clamp(2.4rem, 5vw, 4rem); font-weight: 800; letter-spacing: -2px; color: var(--dark); margin-bottom: 1.2rem; line-height: 1.05; }
// //         .page-hero h1 span { color: var(--accent); }
// //         .page-hero p { color: var(--gray-600); font-size: 1.05rem; line-height: 1.7; max-width: 560px; margin: 0 auto; }

// //         /* ── GRID ── */
// //         .contact-grid { display: grid; grid-template-columns: 1fr 1.6fr; gap: 2.5rem; padding: 48px 5% 80px; align-items: start; max-width: 1200px; margin: 0 auto; }

// //         /* ── LEFT INFO ── */
// //         .contact-info { display: flex; flex-direction: column; gap: 1.2rem; }

// //         .team-section { background: var(--card); border: 1px solid var(--border); border-radius: 16px; padding: 1.6rem; }
// //         .team-section h3 { font-family: 'Syne', sans-serif; font-size: 0.78rem; font-weight: 700; text-transform: uppercase; letter-spacing: 1.5px; color: var(--accent); margin-bottom: 1rem; }
// //         .team-member { display: flex; align-items: center; gap: 1rem; padding: 0.9rem 0; border-bottom: 1px solid var(--border); }
// //         .team-member:last-child { border-bottom: none; padding-bottom: 0; }
// //         .avatar { width: 42px; height: 42px; border-radius: 50%; background: linear-gradient(135deg, #f97316, #fb923c); display: flex; align-items: center; justify-content: center; font-size: 1rem; font-weight: 800; color: #fff; font-family: 'Syne', sans-serif; flex-shrink: 0; }
// //         .member-info strong { display: block; font-size: 0.92rem; font-weight: 700; color: var(--dark); margin-bottom: 2px; }
// //         .member-info span { font-size: 0.78rem; color: var(--gray-400); }

// //         .info-card { background: var(--card); border: 1px solid var(--border); border-radius: 16px; padding: 1.5rem; transition: box-shadow 0.2s, border-color 0.2s, transform 0.2s; }
// //         .info-card:hover { border-color: var(--border-hover); box-shadow: 0 6px 24px rgba(249,115,22,0.08); transform: translateY(-2px); }
// //         .info-icon { width: 46px; height: 46px; border-radius: 12px; background: rgba(249,115,22,0.08); display: flex; align-items: center; justify-content: center; font-size: 1.3rem; margin-bottom: 0.9rem; }
// //         .info-card h3 { font-family: 'Syne', sans-serif; font-size: 0.95rem; font-weight: 700; color: var(--dark); margin-bottom: 0.4rem; }
// //         .info-card p { color: var(--gray-400); font-size: 0.82rem; line-height: 1.6; }
// //         .info-card a { color: var(--accent); text-decoration: none; font-size: 0.85rem; font-weight: 500; display: block; margin-bottom: 2px; }
// //         .info-card a:hover { text-decoration: underline; }

// //         /* ── FORM CARD ── */
// //         .form-card { background: var(--card); border: 1px solid var(--border); border-radius: 20px; padding: 2.5rem; box-shadow: 0 4px 40px rgba(0,0,0,0.06); position: sticky; top: 84px; }
// //         .form-card::before { content: ''; position: absolute; top: -1px; left: 30px; right: 30px; height: 2px; background: linear-gradient(90deg, transparent, var(--accent), transparent); border-radius: 2px; }
// //         .form-card { position: relative; }
// //         .form-card h2 { font-family: 'Syne', sans-serif; font-size: 1.5rem; font-weight: 800; color: var(--dark); margin-bottom: 0.4rem; letter-spacing: -0.5px; }
// //         .form-card > p { color: var(--gray-400); font-size: 0.88rem; margin-bottom: 1.8rem; }
// //         .form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; }
// //         .form-group { display: flex; flex-direction: column; gap: 0.4rem; margin-bottom: 1.1rem; }
// //         .form-group label { font-size: 0.76rem; font-weight: 700; color: var(--gray-600); text-transform: uppercase; letter-spacing: 0.5px; }
// //         .form-group input, .form-group select, .form-group textarea {
// //           background: #f9fafb; border: 1.5px solid var(--border);
// //           border-radius: 10px; padding: 0.75rem 1rem;
// //           color: var(--dark); font-size: 0.9rem; font-family: 'DM Sans', sans-serif;
// //           outline: none; transition: border-color 0.2s, background 0.2s; width: 100%;
// //         }
// //         .form-group input:focus, .form-group select:focus, .form-group textarea:focus { border-color: var(--accent); background: #fff; }
// //         .form-group input::placeholder, .form-group textarea::placeholder { color: var(--gray-400); }
// //         .form-group select { appearance: none; cursor: pointer; color: var(--dark); }
// //         .form-group textarea { resize: vertical; min-height: 120px; }
// //         .btn-primary { background: var(--accent); color: #fff; padding: 0.9rem 2rem; border-radius: 8px; font-weight: 700; font-size: 0.95rem; border: none; cursor: pointer; transition: all 0.2s; font-family: 'DM Sans', sans-serif; width: 100%; margin-top: 4px; }
// //         .btn-primary:hover { background: #ea6c00; transform: translateY(-2px); box-shadow: 0 8px 30px rgba(249,115,22,0.3); }

// //         .success-msg { text-align: center; padding: 3rem; }
// //         .success-msg .check { font-size: 4rem; margin-bottom: 1rem; }
// //         .success-msg h3 { font-family: 'Syne', sans-serif; font-size: 1.5rem; font-weight: 800; margin-bottom: 0.5rem; color: var(--accent); }
// //         .success-msg p { color: var(--gray-600); font-size: 0.9rem; }

// //         /* ── FOOTER ── */
// //         footer { background: #111118; border-top: 1px solid rgba(255,255,255,0.08); padding: 3rem 5%; display: grid; grid-template-columns: 2fr 1fr 1fr; gap: 3rem; }
// //         .footer-brand .footer-logo { font-family: 'Syne', sans-serif; font-size: 1.3rem; font-weight: 800; color: #f5f5f0; text-decoration: none; letter-spacing: -0.5px; }
// //         .footer-brand .footer-logo span { color: var(--accent); }
// //         .footer-brand p { color: #6b7280; font-size: 0.88rem; line-height: 1.7; margin-top: 0.8rem; max-width: 260px; }
// //         .footer-col h4 { font-family: 'Syne', sans-serif; font-size: 0.78rem; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; color: #6b7280; margin-bottom: 1rem; }
// //         .footer-col ul { list-style: none; }
// //         .footer-col ul li { margin-bottom: 0.6rem; }
// //         .footer-col ul a { color: #9ca3af; text-decoration: none; font-size: 0.88rem; transition: color 0.2s; }
// //         .footer-col ul a:hover { color: #f5f5f0; }
// //         .footer-bottom { background: #111118; border-top: 1px solid rgba(255,255,255,0.06); padding: 1.2rem 5%; display: flex; justify-content: space-between; align-items: center; color: #6b7280; font-size: 0.8rem; }

// //         @media (max-width: 900px) {
// //           .contact-grid { grid-template-columns: 1fr; }
// //           .nav-links { display: none; }
// //           .hamburger { display: flex; }
// //           footer { grid-template-columns: 1fr 1fr; }
// //           .form-card { position: static; }
// //         }
// //         @media (max-width: 600px) {
// //           .form-row { grid-template-columns: 1fr; }
// //           footer { grid-template-columns: 1fr; }
// //           .footer-bottom { flex-direction: column; gap: 0.5rem; text-align: center; }
// //         }
// //       `}</style>

// //       {/* ── NAVBAR ── */}
// //       <nav>
// //         <Link href="/" className="nav-logo">HAK <span>Projects</span></Link>
// //         <ul className="nav-links">
// //           <li><Link href="/home">Home</Link></li>
// //           <li><Link href="/about">About</Link></li>
// //           <li><Link href="/service">Services</Link></li>
// //           <li><Link href="/projects">Projects</Link></li>
// //           <li><Link href="/contact" className="nav-cta active">Contact</Link></li>
// //         </ul>
// //         <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
// //           <span></span><span></span><span></span>
// //         </button>
// //       </nav>
// //       <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
// //         <Link href="/home" onClick={() => setMenuOpen(false)}>Home</Link>
// //         <Link href="/about" onClick={() => setMenuOpen(false)}>About</Link>
// //         <Link href="/service" onClick={() => setMenuOpen(false)}>Services</Link>
// //         <Link href="/projects" onClick={() => setMenuOpen(false)}>Projects</Link>
// //         <Link href="/contact" className="mob-cta" onClick={() => setMenuOpen(false)}>Contact</Link>
// //       </div>

// //       {/* ── HERO ── */}
// //       <section className="page-hero">
// //         <span className="section-label">Get In Touch</span>
// //         <h1>Let&apos;s Build Something <span>Great</span></h1>
// //         <p>Have a project in mind? We&apos;d love to hear about it. Send us a message and we&apos;ll get back to you within 24 hours.</p>
// //       </section>

// //       {/* ── GRID ── */}
// //       <div className="contact-grid">

// //         {/* LEFT — INFO */}
// //         <div className="contact-info">

// //           <div className="team-section">
// //             <h3>Our Team</h3>
// //             <div className="team-member">
// //               <div className="avatar">H</div>
// //               <div className="member-info">
// //                 <strong>Hemanth Raju</strong>
// //                 <span>Co-Founder & Developer</span>
// //               </div>
// //             </div>
// //             <div className="team-member">
// //               <div className="avatar">K</div>
// //               <div className="member-info">
// //                 <strong>Karthik Reddy</strong>
// //                 <span>Co-Founder & Developer</span>
// //               </div>
// //             </div>
// //           </div>

// //           <div className="info-card">
// //             <div className="info-icon">📧</div>
// //             <h3>Email Us</h3>
// //             <a href="mailto:karthikkreddy216@gmail.com">karthikkreddy216@gmail.com</a>
// //             <p style={{marginTop:'4px'}}>We reply within 24 hours</p>
// //           </div>

// //           <div className="info-card">
// //             <div className="info-icon">📞</div>
// //             <h3>Call Us</h3>
// //             <a href="tel:+919741180425">+91 97411 80425</a>
// //             <a href="tel:+917483529995">+91 74835 29995</a>
// //             <p style={{marginTop:'4px'}}>Mon–Fri, 9am–6pm IST</p>
// //           </div>

// //           <div className="info-card">
// //             <div className="info-icon">💬</div>
// //             <h3>WhatsApp</h3>
// //             <a href="https://wa.me/919741180425" target="_blank" rel="noreferrer">+91 97411 80425</a>
// //             <a href="https://wa.me/917483529995" target="_blank" rel="noreferrer">+91 74835 29995</a>
// //             <p style={{marginTop:'4px'}}>Quick replies on WhatsApp</p>
// //           </div>

// //           <div className="info-card">
// //             <div className="info-icon">📍</div>
// //             <h3>Our Location</h3>
// //             <p style={{color:'var(--dark)', fontWeight:600, marginBottom:'2px'}}>Yelahanka, Bengaluru</p>
// //             <p>Karnataka, India — Available for remote projects worldwide</p>
// //           </div>

// //         </div>

// //         {/* RIGHT — FORM */}
// //         <div className="form-card">
// //           {submitted ? (
// //             <div className="success-msg">
// //               <div className="check">✅</div>
// //               <h3>Message Sent!</h3>
// //               <p>Thank you for reaching out. We&apos;ll get back to you within 24 hours.</p>
// //             </div>
// //           ) : (
// //             <>
// //               <h2>Send Us a Message</h2>
// //               <p>Fill out the form below and we&apos;ll get back to you shortly.</p>
// //               <form onSubmit={handleSubmit}>
// //                 <div className="form-row">
// //                   <div className="form-group">
// //                     <label>Your Name *</label>
// //                     <input type="text" placeholder="John Doe" required value={form.name} onChange={e => setForm({...form, name: e.target.value})} />
// //                   </div>
// //                   <div className="form-group">
// //                     <label>Email Address *</label>
// //                     <input type="email" placeholder="john@example.com" required value={form.email} onChange={e => setForm({...form, email: e.target.value})} />
// //                   </div>
// //                 </div>
// //                 <div className="form-row">
// //                   <div className="form-group">
// //                     <label>Phone Number</label>
// //                     <input type="tel" placeholder="+91 00000 00000" value={form.phone} onChange={e => setForm({...form, phone: e.target.value})} />
// //                   </div>
// //                   <div className="form-group">
// //                     <label>Service Needed</label>
// //                     <select value={form.service} onChange={e => setForm({...form, service: e.target.value})}>
// //                       <option value="">Select a service</option>
// //                       <option>Web Development</option>
// //                       <option>Mobile App Development</option>
// //                       <option>ERP Solutions</option>
// //                       <option>AWS Cloud Services</option>
// //                       <option>UI/UX Design</option>
// //                       <option>Digital Marketing</option>
// //                       <option>Other</option>
// //                     </select>
// //                   </div>
// //                 </div>
// //                 <div className="form-group">
// //                   <label>Your Message *</label>
// //                   <textarea placeholder="Tell us about your project, goals, timeline, and budget..." required value={form.message} onChange={e => setForm({...form, message: e.target.value})} />
// //                 </div>
// //                 <button type="submit" className="btn-primary">Send Message →</button>
// //               </form>
// //             </>
// //           )}
// //         </div>
// //       </div>

// //       {/* ── FOOTER ── */}
// //       <footer>
// //         <div className="footer-brand">
// //           <Link href="/" className="footer-logo">HAK <span>Projects</span></Link>
// //           <p>We provide cutting-edge IT solutions to help businesses grow and succeed in the digital world. Let&apos;s build something great together.</p>
// //         </div>
// //         <div className="footer-col">
// //           <h4>Quick Links</h4>
// //           <ul>
// //             <li><Link href="/home">Home</Link></li>
// //             <li><Link href="/about">About Us</Link></li>
// //             <li><Link href="/projects">Projects</Link></li>
// //             <li><Link href="/contact">Contact Us</Link></li>
// //           </ul>
// //         </div>
// //         <div className="footer-col">
// //           <h4>Services</h4>
// //           <ul>
// //             <li><Link href="/service">Web Development</Link></li>
// //             <li><Link href="/service">Mobile Apps</Link></li>
// //             <li><Link href="/service">ERP Solutions</Link></li>
// //             <li><Link href="/service">AWS Cloud</Link></li>
// //           </ul>
// //         </div>
// //       </footer>
// //       <div className="footer-bottom">
// //         <span>© 2026 HAK Projects. All rights reserved.</span>
// //         <span>Built with ❤️ using Next.js</span>
// //       </div>
// //     </>
// //   );
// // }

// 'use client';
// import { useState } from 'react';
// import Link from 'next/link';

// export default function ContactPage() {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', message: '' });
//   const [submitted, setSubmitted] = useState(false);

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     setSubmitted(true);
//   };

//   return (
//     <>
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800;900&family=Nunito:wght@400;500;600;700;800&display=swap');

//         *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
//         :root {
//           --bg: #f5f5f3;
//           --white: #ffffff;
//           --dark: #0f0e0d;
//           --accent: #f97316;
//           --accent-deep: #c2550f;
//           --gray-50: #fafaf9;
//           --gray-100: #f0efed;
//           --gray-200: #e4e2de;
//           --gray-400: #a09d98;
//           --gray-600: #5c5855;
//           --border: #e4e2de;
//         }
//         html { scroll-behavior: smooth; }
//         body { font-family: 'Nunito', sans-serif; background: var(--bg); color: var(--dark); overflow-x: hidden; }

//         /* NAV */
//         nav {
//           position: sticky; top: 0; z-index: 100;
//           padding: 0 5%; display: flex; align-items: center; justify-content: space-between;
//           height: 64px;
//           background: rgba(255,255,255,0.92);
//           backdrop-filter: blur(16px);
//           border-bottom: 1px solid var(--border);
//         }
//         .nav-logo { font-family: 'Outfit', sans-serif; font-size: 1.35rem; font-weight: 800; color: var(--dark); text-decoration: none; letter-spacing: -0.3px; }
//         .nav-logo span { color: var(--accent); }
//         .nav-links { display: flex; gap: 2rem; list-style: none; align-items: center; }
//         .nav-links a { color: var(--gray-600); text-decoration: none; font-size: 0.92rem; font-weight: 600; transition: color 0.2s; }
//         .nav-links a:hover { color: var(--dark); }
//         .nav-links a.active { color: var(--accent); }
//         .nav-cta { background: var(--accent) !important; color: #fff !important; padding: 0.45rem 1.2rem !important; border-radius: 8px; font-weight: 700 !important; transition: background 0.2s !important; }
//         .nav-cta:hover { background: var(--accent-deep) !important; }
//         .hamburger { display: none; flex-direction: column; gap: 5px; cursor: pointer; background: none; border: none; }
//         .hamburger span { display: block; width: 24px; height: 2px; background: var(--dark); border-radius: 2px; }
//         .mobile-menu { display: none; position: fixed; top: 64px; left: 0; right: 0; background: rgba(255,255,255,0.98); backdrop-filter: blur(16px); border-bottom: 1px solid var(--border); padding: 1.5rem 5%; z-index: 99; flex-direction: column; gap: 1rem; }
//         .mobile-menu.open { display: flex; }
//         .mobile-menu a { color: var(--gray-600); text-decoration: none; font-size: 1rem; padding: 0.5rem 0; border-bottom: 1px solid var(--border); font-weight: 600; }
//         .mob-cta { background: var(--accent); color: #fff !important; padding: 0.75rem 1.2rem !important; border-radius: 8px; font-weight: 700 !important; text-align: center; border-bottom: none !important; margin-top: 0.5rem; }

//         /* HERO */
//         .page-hero {
//           padding: 80px 5% 64px;
//           text-align: center;
//           background: var(--white);
//           position: relative; overflow: hidden;
//         }
//         .page-hero::before {
//           content: ''; position: absolute;
//           top: -120px; left: 50%; transform: translateX(-50%);
//           width: 800px; height: 400px;
//           background: radial-gradient(ellipse, rgba(249,115,22,0.1) 0%, transparent 65%);
//           pointer-events: none;
//         }
//         .hero-eyebrow {
//           display: inline-flex; align-items: center; gap: 8px;
//           font-family: 'Outfit', sans-serif;
//           font-size: 0.72rem; font-weight: 700; text-transform: uppercase; letter-spacing: 2.5px;
//           color: var(--accent); background: rgba(249,115,22,0.08);
//           padding: 6px 16px; border-radius: 20px; margin-bottom: 1.4rem;
//           border: 1px solid rgba(249,115,22,0.15);
//         }
//         .page-hero h1 {
//           font-family: 'Outfit', sans-serif;
//           font-size: clamp(2.8rem, 6vw, 5rem);
//           font-weight: 900; letter-spacing: -2.5px;
//           color: var(--dark); line-height: 1.0; margin-bottom: 1.2rem;
//         }
//         .page-hero h1 em { color: var(--accent); font-style: normal; }
//         .page-hero p { color: var(--gray-600); font-size: 1.05rem; line-height: 1.75; max-width: 520px; margin: 0 auto; font-weight: 500; }

//         /* CONTACT LAYOUT */
//         .contact-wrap { max-width: 1180px; margin: 0 auto; padding: 60px 5% 100px; display: grid; grid-template-columns: 360px 1fr; gap: 28px; align-items: start; }

//         /* SIDEBAR */
//         .sidebar { display: flex; flex-direction: column; gap: 14px; }

//         .team-card { background: var(--dark); border-radius: 20px; padding: 28px; color: #fff; }
//         .team-card-label { font-family: 'Outfit', sans-serif; font-size: 0.65rem; font-weight: 700; text-transform: uppercase; letter-spacing: 2px; color: var(--accent); margin-bottom: 20px; }
//         .team-member { display: flex; align-items: center; gap: 14px; padding: 12px 0; border-bottom: 1px solid rgba(255,255,255,0.08); }
//         .team-member:last-child { border-bottom: none; padding-bottom: 0; }
//         .avatar { width: 44px; height: 44px; border-radius: 50%; background: linear-gradient(135deg, #f97316, #fb923c); display: flex; align-items: center; justify-content: center; font-family: 'Outfit', sans-serif; font-size: 1rem; font-weight: 800; color: #fff; flex-shrink: 0; }
//         .member-name { font-family: 'Outfit', sans-serif; font-size: 0.92rem; font-weight: 700; color: #fff; margin-bottom: 2px; }
//         .member-role { font-size: 0.75rem; color: rgba(255,255,255,0.45); }

//         .info-card { background: var(--white); border: 1.5px solid var(--border); border-radius: 16px; padding: 20px 22px; display: flex; align-items: flex-start; gap: 16px; transition: border-color 0.2s, box-shadow 0.2s, transform 0.2s; }
//         .info-card:hover { border-color: rgba(249,115,22,0.4); box-shadow: 0 6px 20px rgba(249,115,22,0.07); transform: translateY(-2px); }
//         .info-icon-box { width: 42px; height: 42px; border-radius: 12px; background: rgba(249,115,22,0.08); display: flex; align-items: center; justify-content: center; font-size: 1.1rem; flex-shrink: 0; }
//         .info-card-content h3 { font-family: 'Outfit', sans-serif; font-size: 0.88rem; font-weight: 700; color: var(--dark); margin-bottom: 5px; }
//         .info-card-content a { display: block; color: var(--accent); font-size: 0.82rem; font-weight: 600; text-decoration: none; line-height: 1.6; }
//         .info-card-content a:hover { text-decoration: underline; }
//         .info-card-content p { color: var(--gray-400); font-size: 0.77rem; margin-top: 3px; font-weight: 500; }

//         /* FORM PANEL */
//         .form-panel { background: var(--white); border: 1.5px solid var(--border); border-radius: 24px; overflow: hidden; box-shadow: 0 8px 48px rgba(0,0,0,0.06); position: sticky; top: 84px; }
//         .form-panel-top { padding: 36px 36px 28px; border-bottom: 1px solid var(--border); background: linear-gradient(135deg, #fff 60%, rgba(249,115,22,0.03)); }
//         .form-panel-top h2 { font-family: 'Outfit', sans-serif; font-size: 1.7rem; font-weight: 800; letter-spacing: -0.8px; color: var(--dark); margin-bottom: 4px; }
//         .form-panel-top p { color: var(--gray-400); font-size: 0.88rem; font-weight: 500; }
//         .accent-line { height: 3px; background: linear-gradient(90deg, var(--accent) 0%, #fb923c 50%, transparent 100%); }

//         .form-body { padding: 28px 36px 36px; }
//         .form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 16px; }
//         .form-group { display: flex; flex-direction: column; gap: 6px; }
//         .form-group label { font-family: 'Outfit', sans-serif; font-size: 0.72rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.8px; color: var(--gray-600); }
//         .form-group input, .form-group select, .form-group textarea {
//           font-family: 'Nunito', sans-serif;
//           background: var(--gray-50); border: 1.5px solid var(--border);
//           border-radius: 10px; padding: 11px 14px;
//           font-size: 0.92rem; font-weight: 600; color: var(--dark);
//           outline: none; transition: border-color 0.18s, background 0.18s, box-shadow 0.18s; width: 100%;
//         }
//         .form-group input::placeholder, .form-group textarea::placeholder { color: var(--gray-400); font-weight: 500; }
//         .form-group input:focus, .form-group select:focus, .form-group textarea:focus { border-color: var(--accent); background: #fff; box-shadow: 0 0 0 3px rgba(249,115,22,0.1); }
//         .form-group select { appearance: none; cursor: pointer; }
//         .form-group textarea { resize: vertical; min-height: 130px; }
//         .form-group-full { margin-bottom: 20px; }

//         .submit-row { display: flex; align-items: center; gap: 16px; }
//         .btn-submit { flex: 1; background: var(--accent); color: #fff; border: none; border-radius: 12px; padding: 14px 24px; font-family: 'Outfit', sans-serif; font-size: 1rem; font-weight: 700; cursor: pointer; transition: background 0.2s, transform 0.15s, box-shadow 0.2s; display: flex; align-items: center; justify-content: center; gap: 8px; }
//         .btn-submit:hover { background: var(--accent-deep); transform: translateY(-2px); box-shadow: 0 8px 28px rgba(249,115,22,0.3); }
//         .btn-submit:active { transform: translateY(0); }
//         .response-note { font-size: 0.78rem; color: var(--gray-400); font-weight: 500; text-align: center; line-height: 1.5; white-space: nowrap; }
//         .response-note strong { display: block; color: var(--gray-600); font-family: 'Outfit', sans-serif; font-weight: 700; font-size: 0.82rem; }

//         .success-state { padding: 60px 36px; text-align: center; }
//         .success-icon { font-size: 3.5rem; margin-bottom: 16px; }
//         .success-state h3 { font-family: 'Outfit', sans-serif; font-size: 1.6rem; font-weight: 800; color: var(--accent); margin-bottom: 8px; }
//         .success-state p { color: var(--gray-600); font-size: 0.92rem; }

//         /* FOOTER */
//         footer { background: #0f0e0d; border-top: 1px solid rgba(255,255,255,0.07); padding: 3.5rem 5%; display: grid; grid-template-columns: 2fr 1fr 1fr; gap: 3rem; }
//         .footer-logo { font-family: 'Outfit', sans-serif; font-size: 1.3rem; font-weight: 800; color: #f5f5f0; text-decoration: none; }
//         .footer-logo span { color: var(--accent); }
//         .footer-desc { color: #666; font-size: 0.88rem; line-height: 1.75; margin-top: 0.9rem; max-width: 260px; }
//         .footer-col h4 { font-family: 'Outfit', sans-serif; font-size: 0.72rem; font-weight: 700; text-transform: uppercase; letter-spacing: 1.5px; color: #555; margin-bottom: 1.1rem; }
//         .footer-col ul { list-style: none; }
//         .footer-col ul li { margin-bottom: 0.65rem; }
//         .footer-col ul a { color: #999; text-decoration: none; font-size: 0.88rem; font-weight: 600; transition: color 0.2s; }
//         .footer-col ul a:hover { color: #f5f5f0; }
//         .footer-bottom { background: #0f0e0d; border-top: 1px solid rgba(255,255,255,0.05); padding: 1.2rem 5%; display: flex; justify-content: space-between; align-items: center; color: #555; font-size: 0.8rem; font-weight: 600; }

//         @media (max-width: 960px) {
//           .contact-wrap { grid-template-columns: 1fr; }
//           .form-panel { position: static; }
//           .nav-links { display: none; }
//           .hamburger { display: flex; }
//           footer { grid-template-columns: 1fr 1fr; }
//         }
//         @media (max-width: 600px) {
//           .form-row { grid-template-columns: 1fr; }
//           .submit-row { flex-direction: column; align-items: stretch; }
//           .response-note { white-space: normal; }
//           footer { grid-template-columns: 1fr; }
//           .footer-bottom { flex-direction: column; gap: 0.5rem; text-align: center; }
//           .form-panel-top, .form-body { padding-left: 22px; padding-right: 22px; }
//         }
//       `}</style>

//       {/* NAV */}
//       <nav>
//         <Link href="/" className="nav-logo">HAK <span>Projects</span></Link>
//         <ul className="nav-links">
//           <li><Link href="/home">Home</Link></li>
//           <li><Link href="/about">About</Link></li>
//           <li><Link href="/service">Services</Link></li>
//           <li><Link href="/projects">Projects</Link></li>
//           <li><Link href="/contact" className="nav-cta active">Contact</Link></li>
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
//       <section className="page-hero">
//         <div className="hero-eyebrow">✦ Get In Touch</div>
//         <h1>Let&apos;s Build Something<br /><em>Great</em></h1>
//         <p>Have a project in mind? We&apos;d love to hear about it. Send us a message and we&apos;ll get back to you within 24 hours.</p>
//       </section>

//       {/* CONTACT GRID */}
//       <div className="contact-wrap">

//         {/* SIDEBAR */}
//         <div className="sidebar">
//           <div className="team-card">
//             <div className="team-card-label">Our Team</div>
//             <div className="team-member">
//               <div className="avatar">H</div>
//               <div>
//                 <div className="member-name">Hemanth Raju</div>
//                 <div className="member-role">Co-Founder &amp; Developer</div>
//               </div>
//             </div>
//             <div className="team-member">
//               <div className="avatar">K</div>
//               <div>
//                 <div className="member-name">Karthik Reddy</div>
//                 <div className="member-role">Co-Founder &amp; Developer</div>
//               </div>
//             </div>
//           </div>

//           <div className="info-card">
//             <div className="info-icon-box">✉️</div>
//             <div className="info-card-content">
//               <h3>Email Us</h3>
//               <a href="mailto:karthikkreddy216@gmail.com">karthikkreddy216@gmail.com</a>
//               <p>We reply within 24 hours</p>
//             </div>
//           </div>

//           <div className="info-card">
//             <div className="info-icon-box">📞</div>
//             <div className="info-card-content">
//               <h3>Call Us</h3>
//               <a href="tel:+919741180425">+91 97411 80425</a>
//               <a href="tel:+917483529995">+91 74835 29995</a>
//               <p>Mon–Fri, 9am–6pm IST</p>
//             </div>
//           </div>

//           <div className="info-card">
//             <div className="info-icon-box">💬</div>
//             <div className="info-card-content">
//               <h3>WhatsApp</h3>
//               <a href="https://wa.me/919741180425" target="_blank" rel="noreferrer">+91 97411 80425</a>
//               <a href="https://wa.me/917483529995" target="_blank" rel="noreferrer">+91 74835 29995</a>
//               <p>Quick replies on WhatsApp</p>
//             </div>
//           </div>

//           <div className="info-card">
//             <div className="info-icon-box">📍</div>
//             <div className="info-card-content">
//               <h3>Our Location</h3>
//               <a href="#">Yelahanka, Bengaluru</a>
//               <p>Karnataka, India — Available for remote projects worldwide</p>
//             </div>
//           </div>
//         </div>

//         {/* FORM PANEL */}
//         <div className="form-panel">
//           {submitted ? (
//             <div className="success-state">
//               <div className="success-icon">✅</div>
//               <h3>Message Sent!</h3>
//               <p>Thank you for reaching out. We&apos;ll get back to you within 24 hours.</p>
//             </div>
//           ) : (
//             <>
//               <div className="form-panel-top">
//                 <h2>Send Us a Message</h2>
//                 <p>Fill out the form below and we&apos;ll get back to you shortly.</p>
//               </div>
//               <div className="accent-line" />
//               <div className="form-body">
//                 <form onSubmit={handleSubmit}>
//                   <div className="form-row">
//                     <div className="form-group">
//                       <label>Your Name *</label>
//                       <input type="text" placeholder="John Doe" required value={form.name} onChange={e => setForm({...form, name: e.target.value})} />
//                     </div>
//                     <div className="form-group">
//                       <label>Email Address *</label>
//                       <input type="email" placeholder="john@example.com" required value={form.email} onChange={e => setForm({...form, email: e.target.value})} />
//                     </div>
//                   </div>
//                   <div className="form-row">
//                     <div className="form-group">
//                       <label>Phone Number</label>
//                       <input type="tel" placeholder="+91 00000 00000" value={form.phone} onChange={e => setForm({...form, phone: e.target.value})} />
//                     </div>
//                     <div className="form-group">
//                       <label>Service Needed</label>
//                       <select value={form.service} onChange={e => setForm({...form, service: e.target.value})}>
//                         <option value="">Select a service</option>
//                         <option>Web Development</option>
//                         <option>Mobile App Development</option>
//                         <option>ERP Solutions</option>
//                         <option>AWS Cloud Services</option>
//                         <option>UI/UX Design</option>
//                         <option>Digital Marketing</option>
//                         <option>Other</option>
//                       </select>
//                     </div>
//                   </div>
//                   <div className="form-group form-group-full">
//                     <label>Your Message *</label>
//                     <textarea placeholder="Tell us about your project, goals, timeline, and budget..." required value={form.message} onChange={e => setForm({...form, message: e.target.value})} />
//                   </div>
//                   <div className="submit-row">
//                     <button type="submit" className="btn-submit">Send Message →</button>
//                     <div className="response-note">
//                       <strong>⚡ Fast Reply</strong>
//                       Within 24 hours
//                     </div>
//                   </div>
//                 </form>
//               </div>
//             </>
//           )}
//         </div>
//       </div>

//       {/* FOOTER */}
//       <footer>
//         <div>
//           <Link href="/" className="footer-logo">HAK <span>Projects</span></Link>
//           <p className="footer-desc">We provide cutting-edge IT solutions to help businesses grow and succeed in the digital world. Let&apos;s build something great together.</p>
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
import emailjs from '@emailjs/browser';

// ─── EMAILJS CONFIG ────────────────────────────────────────────
// 1. Go to https://emailjs.com and create a free account
// 2. Add Email Service → connect your Gmail → copy Service ID
// 3. Create Email Template → copy Template ID
// 4. Go to Account → copy Public Key
// Then replace the 3 values below:
const EMAILJS_SERVICE_ID  = 'service_lljyx3r';
const EMAILJS_TEMPLATE_ID = 'template_j1rmshp';   // ✅ FIXED
const EMAILJS_PUBLIC_KEY  = '2R5KY9mBIwePRlahF';
// ──────────────────────────────────────────────────────────────

export default function ContactPage() {
  const [menuOpen, setMenuOpen]   = useState(false);
  const [form, setForm]           = useState({ name: '', email: '', phone: '', service: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading]     = useState(false);
  const [error, setError]         = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name:    form.name,
          from_email:   form.email,
          phone:        form.phone || 'Not provided',
          service:      form.service || 'Not specified',
          message:      form.message,
          reply_to:     form.email,
        },
        EMAILJS_PUBLIC_KEY
      );
      setSubmitted(true);
    } catch (err) {
      console.error('EmailJS error:', err);
      setError('Something went wrong. Please try again or email us directly.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800;900&family=Nunito:wght@400;500;600;700;800&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        :root {
          --bg: #f5f5f3;
          --white: #ffffff;
          --dark: #0f0e0d;
          --accent: #f97316;
          --accent-deep: #c2550f;
          --gray-50: #fafaf9;
          --gray-100: #f0efed;
          --gray-200: #e4e2de;
          --gray-400: #a09d98;
          --gray-600: #5c5855;
          --border: #e4e2de;
        }
        html { scroll-behavior: smooth; }
        body { font-family: 'Nunito', sans-serif; background: var(--bg); color: var(--dark); overflow-x: hidden; }

        /* NAV */
        nav {
          position: sticky; top: 0; z-index: 100;
          padding: 0 5%; display: flex; align-items: center; justify-content: space-between;
          height: 64px;
          background: rgba(255,255,255,0.92);
          backdrop-filter: blur(16px);
          border-bottom: 1px solid var(--border);
        }
        .nav-logo { font-family: 'Outfit', sans-serif; font-size: 1.35rem; font-weight: 800; color: var(--dark); text-decoration: none; letter-spacing: -0.3px; }
        .nav-logo span { color: var(--accent); }
        .nav-links { display: flex; gap: 2rem; list-style: none; align-items: center; }
        .nav-links a { color: var(--gray-600); text-decoration: none; font-size: 0.92rem; font-weight: 600; transition: color 0.2s; }
        .nav-links a:hover { color: var(--dark); }
        .nav-links a.active { color: var(--accent); }
        .nav-cta { background: var(--accent) !important; color: #fff !important; padding: 0.45rem 1.2rem !important; border-radius: 8px; font-weight: 700 !important; transition: background 0.2s !important; }
        .nav-cta:hover { background: var(--accent-deep) !important; }
        .hamburger { display: none; flex-direction: column; gap: 5px; cursor: pointer; background: none; border: none; }
        .hamburger span { display: block; width: 24px; height: 2px; background: var(--dark); border-radius: 2px; }
        .mobile-menu { display: none; position: fixed; top: 64px; left: 0; right: 0; background: rgba(255,255,255,0.98); backdrop-filter: blur(16px); border-bottom: 1px solid var(--border); padding: 1.5rem 5%; z-index: 99; flex-direction: column; gap: 1rem; }
        .mobile-menu.open { display: flex; }
        .mobile-menu a { color: var(--gray-600); text-decoration: none; font-size: 1rem; padding: 0.5rem 0; border-bottom: 1px solid var(--border); font-weight: 600; }
        .mob-cta { background: var(--accent); color: #fff !important; padding: 0.75rem 1.2rem !important; border-radius: 8px; font-weight: 700 !important; text-align: center; border-bottom: none !important; margin-top: 0.5rem; }

        /* HERO */
        .page-hero {
          padding: 80px 5% 64px;
          text-align: center;
          background: var(--white);
          position: relative; overflow: hidden;
        }
        .page-hero::before {
          content: ''; position: absolute;
          top: -120px; left: 50%; transform: translateX(-50%);
          width: 800px; height: 400px;
          background: radial-gradient(ellipse, rgba(249,115,22,0.1) 0%, transparent 65%);
          pointer-events: none;
        }
        .hero-eyebrow {
          display: inline-flex; align-items: center; gap: 8px;
          font-family: 'Outfit', sans-serif;
          font-size: 0.72rem; font-weight: 700; text-transform: uppercase; letter-spacing: 2.5px;
          color: var(--accent); background: rgba(249,115,22,0.08);
          padding: 6px 16px; border-radius: 20px; margin-bottom: 1.4rem;
          border: 1px solid rgba(249,115,22,0.15);
        }
        .page-hero h1 {
          font-family: 'Outfit', sans-serif;
          font-size: clamp(2.8rem, 6vw, 5rem);
          font-weight: 900; letter-spacing: -2.5px;
          color: var(--dark); line-height: 1.0; margin-bottom: 1.2rem;
        }
        .page-hero h1 em { color: var(--accent); font-style: normal; }
        .page-hero p { color: var(--gray-600); font-size: 1.05rem; line-height: 1.75; max-width: 520px; margin: 0 auto; font-weight: 500; }

        /* CONTACT LAYOUT */
        .contact-wrap { max-width: 1180px; margin: 0 auto; padding: 60px 5% 100px; display: grid; grid-template-columns: 360px 1fr; gap: 28px; align-items: start; }

        /* SIDEBAR */
        .sidebar { display: flex; flex-direction: column; gap: 14px; }

        .team-card { background: var(--dark); border-radius: 20px; padding: 28px; color: #fff; }
        .team-card-label { font-family: 'Outfit', sans-serif; font-size: 0.65rem; font-weight: 700; text-transform: uppercase; letter-spacing: 2px; color: var(--accent); margin-bottom: 20px; }
        .team-member { display: flex; align-items: center; gap: 14px; padding: 12px 0; border-bottom: 1px solid rgba(255,255,255,0.08); }
        .team-member:last-child { border-bottom: none; padding-bottom: 0; }
        .avatar { width: 44px; height: 44px; border-radius: 50%; background: linear-gradient(135deg, #f97316, #fb923c); display: flex; align-items: center; justify-content: center; font-family: 'Outfit', sans-serif; font-size: 1rem; font-weight: 800; color: #fff; flex-shrink: 0; }
        .member-name { font-family: 'Outfit', sans-serif; font-size: 0.92rem; font-weight: 700; color: #fff; margin-bottom: 2px; }
        .member-role { font-size: 0.75rem; color: rgba(255,255,255,0.45); }

        .info-card { background: var(--white); border: 1.5px solid var(--border); border-radius: 16px; padding: 20px 22px; display: flex; align-items: flex-start; gap: 16px; transition: border-color 0.2s, box-shadow 0.2s, transform 0.2s; }
        .info-card:hover { border-color: rgba(249,115,22,0.4); box-shadow: 0 6px 20px rgba(249,115,22,0.07); transform: translateY(-2px); }
        .info-icon-box { width: 42px; height: 42px; border-radius: 12px; background: rgba(249,115,22,0.08); display: flex; align-items: center; justify-content: center; font-size: 1.1rem; flex-shrink: 0; }
        .info-card-content h3 { font-family: 'Outfit', sans-serif; font-size: 0.88rem; font-weight: 700; color: var(--dark); margin-bottom: 5px; }
        .info-card-content a { display: block; color: var(--accent); font-size: 0.82rem; font-weight: 600; text-decoration: none; line-height: 1.6; }
        .info-card-content a:hover { text-decoration: underline; }
        .info-card-content p { color: var(--gray-400); font-size: 0.77rem; margin-top: 3px; font-weight: 500; }

        /* FORM PANEL */
        .form-panel { background: var(--white); border: 1.5px solid var(--border); border-radius: 24px; overflow: hidden; box-shadow: 0 8px 48px rgba(0,0,0,0.06); position: sticky; top: 84px; }
        .form-panel-top { padding: 36px 36px 28px; border-bottom: 1px solid var(--border); background: linear-gradient(135deg, #fff 60%, rgba(249,115,22,0.03)); }
        .form-panel-top h2 { font-family: 'Outfit', sans-serif; font-size: 1.7rem; font-weight: 800; letter-spacing: -0.8px; color: var(--dark); margin-bottom: 4px; }
        .form-panel-top p { color: var(--gray-400); font-size: 0.88rem; font-weight: 500; }
        .accent-line { height: 3px; background: linear-gradient(90deg, var(--accent) 0%, #fb923c 50%, transparent 100%); }

        .form-body { padding: 28px 36px 36px; }
        .form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 16px; }
        .form-group { display: flex; flex-direction: column; gap: 6px; }
        .form-group label { font-family: 'Outfit', sans-serif; font-size: 0.72rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.8px; color: var(--gray-600); }
        .form-group input, .form-group select, .form-group textarea {
          font-family: 'Nunito', sans-serif;
          background: var(--gray-50); border: 1.5px solid var(--border);
          border-radius: 10px; padding: 11px 14px;
          font-size: 0.92rem; font-weight: 600; color: var(--dark);
          outline: none; transition: border-color 0.18s, background 0.18s, box-shadow 0.18s; width: 100%;
        }
        .form-group input::placeholder, .form-group textarea::placeholder { color: var(--gray-400); font-weight: 500; }
        .form-group input:focus, .form-group select:focus, .form-group textarea:focus { border-color: var(--accent); background: #fff; box-shadow: 0 0 0 3px rgba(249,115,22,0.1); }
        .form-group select { appearance: none; cursor: pointer; }
        .form-group textarea { resize: vertical; min-height: 130px; }
        .form-group-full { margin-bottom: 20px; }

        .submit-row { display: flex; align-items: center; gap: 16px; }
        .btn-submit { flex: 1; background: var(--accent); color: #fff; border: none; border-radius: 12px; padding: 14px 24px; font-family: 'Outfit', sans-serif; font-size: 1rem; font-weight: 700; cursor: pointer; transition: background 0.2s, transform 0.15s, box-shadow 0.2s; display: flex; align-items: center; justify-content: center; gap: 8px; }
        .btn-submit:hover { background: var(--accent-deep); transform: translateY(-2px); box-shadow: 0 8px 28px rgba(249,115,22,0.3); }
        .btn-submit:active { transform: translateY(0); }
        .response-note { font-size: 0.78rem; color: var(--gray-400); font-weight: 500; text-align: center; line-height: 1.5; white-space: nowrap; }
        .response-note strong { display: block; color: var(--gray-600); font-family: 'Outfit', sans-serif; font-weight: 700; font-size: 0.82rem; }

        .success-state { padding: 60px 36px; text-align: center; }
        .success-icon { font-size: 3.5rem; margin-bottom: 16px; }
        .success-state h3 { font-family: 'Outfit', sans-serif; font-size: 1.6rem; font-weight: 800; color: var(--accent); margin-bottom: 8px; }
        .success-state p { color: var(--gray-600); font-size: 0.92rem; }

        /* FOOTER */
        footer { background: #0f0e0d; border-top: 1px solid rgba(255,255,255,0.07); padding: 3.5rem 5%; display: grid; grid-template-columns: 2fr 1fr 1fr; gap: 3rem; }
        .footer-logo { font-family: 'Outfit', sans-serif; font-size: 1.3rem; font-weight: 800; color: #f5f5f0; text-decoration: none; }
        .footer-logo span { color: var(--accent); }
        .footer-desc { color: #666; font-size: 0.88rem; line-height: 1.75; margin-top: 0.9rem; max-width: 260px; }
        .footer-col h4 { font-family: 'Outfit', sans-serif; font-size: 0.72rem; font-weight: 700; text-transform: uppercase; letter-spacing: 1.5px; color: #555; margin-bottom: 1.1rem; }
        .footer-col ul { list-style: none; }
        .footer-col ul li { margin-bottom: 0.65rem; }
        .footer-col ul a { color: #999; text-decoration: none; font-size: 0.88rem; font-weight: 600; transition: color 0.2s; }
        .footer-col ul a:hover { color: #f5f5f0; }
        .footer-bottom { background: #0f0e0d; border-top: 1px solid rgba(255,255,255,0.05); padding: 1.2rem 5%; display: flex; justify-content: space-between; align-items: center; color: #555; font-size: 0.8rem; font-weight: 600; }

        @media (max-width: 960px) {
          .contact-wrap { grid-template-columns: 1fr; }
          .form-panel { position: static; }
          .nav-links { display: none; }
          .hamburger { display: flex; }
          footer { grid-template-columns: 1fr 1fr; }
        }
        @media (max-width: 600px) {
          .form-row { grid-template-columns: 1fr; }
          .submit-row { flex-direction: column; align-items: stretch; }
          .response-note { white-space: normal; }
          footer { grid-template-columns: 1fr; }
          .footer-bottom { flex-direction: column; gap: 0.5rem; text-align: center; }
          .form-panel-top, .form-body { padding-left: 22px; padding-right: 22px; }
        }
      `}</style>

      {/* NAV */}
      <nav>
        <Link href="/" className="nav-logo">HAK <span>Projects</span></Link>
        <ul className="nav-links">
          <li><Link href="/home">Home</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/services">Services</Link></li>
          <li><Link href="/projects">Projects</Link></li>
          <li><Link href="/contact" className="nav-cta active">Contact</Link></li>
        </ul>
        <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          <span></span><span></span><span></span>
        </button>
      </nav>
      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        <Link href="/home" onClick={() => setMenuOpen(false)}>Home</Link>
        <Link href="/about" onClick={() => setMenuOpen(false)}>About</Link>
        <Link href="/services" onClick={() => setMenuOpen(false)}>Services</Link>
        <Link href="/projects" onClick={() => setMenuOpen(false)}>Projects</Link>
        <Link href="/contact" className="mob-cta" onClick={() => setMenuOpen(false)}>Contact</Link>
      </div>

      {/* HERO */}
      <section className="page-hero">
        <div className="hero-eyebrow">✦ Get In Touch</div>
        <h1>Let&apos;s Build Something<br /><em>Great</em></h1>
        <p>Have a project in mind? We&apos;d love to hear about it. Send us a message and we&apos;ll get back to you within 24 hours.</p>
      </section>

      {/* CONTACT GRID */}
      <div className="contact-wrap">

        {/* SIDEBAR */}
        <div className="sidebar">
          <div className="team-card">
            <div className="team-card-label">Our Team</div>
            <div className="team-member">
              <div className="avatar">H</div>
              <div>
                <div className="member-name">Hemanth Raju</div>
                <div className="member-role">Co-Founder &amp; Developer</div>
              </div>
            </div>
            <div className="team-member">
              <div className="avatar">K</div>
              <div>
                <div className="member-name">Karthik Reddy</div>
                <div className="member-role">Co-Founder &amp; Developer</div>
              </div>
            </div>
          </div>

          <div className="info-card">
            <div className="info-icon-box">✉️</div>
            <div className="info-card-content">
              <h3>Email Us</h3>
              <a href="mailto:karthikkreddy216@gmail.com">karthikkreddy216@gmail.com</a>
              <p>We reply within 24 hours</p>
            </div>
          </div>

          <div className="info-card">
            <div className="info-icon-box">📞</div>
            <div className="info-card-content">
              <h3>Call Us</h3>
              <a href="tel:+919741180425">+91 97411 80425</a>
              <a href="tel:+917483529995">+91 74835 29995</a>
              <p>Mon–Fri, 9am–6pm IST</p>
            </div>
          </div>

          <div className="info-card">
            <div className="info-icon-box">💬</div>
            <div className="info-card-content">
              <h3>WhatsApp</h3>
              <a href="https://wa.me/919741180425" target="_blank" rel="noreferrer">+91 97411 80425</a>
              <a href="https://wa.me/917483529995" target="_blank" rel="noreferrer">+91 74835 29995</a>
              <p>Quick replies on WhatsApp</p>
            </div>
          </div>

          <div className="info-card">
            <div className="info-icon-box">📍</div>
            <div className="info-card-content">
              <h3>Our Location</h3>
              <a href="#">Yelahanka, Bengaluru</a>
              <p>Karnataka, India — Available for remote projects worldwide</p>
            </div>
          </div>
        </div>

        {/* FORM PANEL */}
        <div className="form-panel">
          {submitted ? (
            <div className="success-state">
              <div className="success-icon">✅</div>
              <h3>Message Sent!</h3>
              <p>Thank you for reaching out. We&apos;ll get back to you within 24 hours.</p>
            </div>
          ) : (
            <>
              <div className="form-panel-top">
                <h2>Send Us a Message</h2>
                <p>Fill out the form below and we&apos;ll get back to you shortly.</p>
              </div>
              <div className="accent-line" />
              <div className="form-body">
                <form onSubmit={handleSubmit}>
                  <div className="form-row">
                    <div className="form-group">
                      <label>Your Name *</label>
                      <input type="text" placeholder="John Doe" required value={form.name} onChange={e => setForm({...form, name: e.target.value})} />
                    </div>
                    <div className="form-group">
                      <label>Email Address *</label>
                      <input type="email" placeholder="john@example.com" required value={form.email} onChange={e => setForm({...form, email: e.target.value})} />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <label>Phone Number</label>
                      <input type="tel" placeholder="+91 00000 00000" value={form.phone} onChange={e => setForm({...form, phone: e.target.value})} />
                    </div>
                    <div className="form-group">
                      <label>Service Needed</label>
                      <select value={form.service} onChange={e => setForm({...form, service: e.target.value})}>
                        <option value="">Select a service</option>
                        <option>Web Development</option>
                        <option>Mobile App Development</option>
                        <option>ERP Solutions</option>
                        <option>AWS Cloud Services</option>
                        <option>UI/UX Design</option>
                        <option>Digital Marketing</option>
                        <option>Other</option>
                      </select>
                    </div>
                  </div>
                  <div className="form-group form-group-full">
                    <label>Your Message *</label>
                    <textarea placeholder="Tell us about your project, goals, timeline, and budget..." required value={form.message} onChange={e => setForm({...form, message: e.target.value})} />
                  </div>
                  {error && (
                    <div style={{
                      background: 'rgba(239,68,68,0.08)', border: '1.5px solid rgba(239,68,68,0.25)',
                      borderRadius: '10px', padding: '12px 16px', marginBottom: '16px',
                      color: '#dc2626', fontSize: '0.85rem', fontWeight: 600
                    }}>
                      ⚠️ {error}
                    </div>
                  )}
                  <div className="submit-row">
                    <button
                      type="submit"
                      className="btn-submit"
                      disabled={loading}
                      style={{ opacity: loading ? 0.75 : 1, cursor: loading ? 'not-allowed' : 'pointer' }}
                    >
                      {loading ? 'Sending...' : 'Send Message →'}
                    </button>
                    <div className="response-note">
                      <strong>⚡ Fast Reply</strong>
                      Within 24 hours
                    </div>
                  </div>
                  <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
                </form>
              </div>
            </>
          )}
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