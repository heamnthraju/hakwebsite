'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function ContactPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

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

        .contact-grid { display: grid; grid-template-columns: 1fr 1.6fr; gap: 3rem; padding: 0 5% 80px; align-items: start; }

        .contact-info { display: flex; flex-direction: column; gap: 1.5rem; }
        .info-card { background: var(--card); border: 1px solid var(--border); border-radius: 16px; padding: 1.8rem; transition: border-color 0.2s; }
        .info-card:hover { border-color: rgba(249,115,22,0.3); }
        .info-icon { width: 48px; height: 48px; border-radius: 12px; background: rgba(249,115,22,0.12); display: flex; align-items: center; justify-content: center; font-size: 1.4rem; margin-bottom: 1rem; }
        .info-card h3 { font-family: 'Syne', sans-serif; font-size: 1rem; font-weight: 700; margin-bottom: 0.4rem; }
        .info-card p { color: var(--muted); font-size: 0.88rem; line-height: 1.6; }
        .info-card a { color: var(--accent); text-decoration: none; font-size: 0.88rem; }

        .form-card { background: var(--card); border: 1px solid var(--border); border-radius: 20px; padding: 2.5rem; position: relative; }
        .form-card::before { content: ''; position: absolute; top: -1px; left: 30px; right: 30px; height: 1px; background: linear-gradient(90deg, transparent, var(--accent), transparent); }
        .form-card h2 { font-family: 'Syne', sans-serif; font-size: 1.5rem; font-weight: 800; margin-bottom: 0.5rem; }
        .form-card > p { color: var(--muted); font-size: 0.9rem; margin-bottom: 2rem; }
        .form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; }
        .form-group { display: flex; flex-direction: column; gap: 0.5rem; margin-bottom: 1.2rem; }
        .form-group label { font-size: 0.82rem; font-weight: 600; color: var(--muted); text-transform: uppercase; letter-spacing: 0.5px; }
        .form-group input, .form-group select, .form-group textarea {
          background: rgba(255,255,255,0.04); border: 1px solid var(--border);
          border-radius: 10px; padding: 0.8rem 1rem; color: var(--white);
          font-size: 0.9rem; font-family: 'DM Sans', sans-serif;
          outline: none; transition: border-color 0.2s; width: 100%;
        }
        .form-group input:focus, .form-group select:focus, .form-group textarea:focus { border-color: rgba(249,115,22,0.5); }
        .form-group select option { background: var(--dark); }
        .form-group textarea { resize: vertical; min-height: 120px; }
        .btn-primary { background: var(--accent); color: var(--black); padding: 0.9rem 2rem; border-radius: 8px; font-weight: 700; font-size: 0.95rem; border: none; cursor: pointer; transition: all 0.2s; font-family: 'DM Sans', sans-serif; width: 100%; }
        .btn-primary:hover { background: var(--accent2); transform: translateY(-2px); box-shadow: 0 8px 30px rgba(249,115,22,0.35); }

        .success-msg { text-align: center; padding: 3rem; }
        .success-msg .check { font-size: 4rem; margin-bottom: 1rem; }
        .success-msg h3 { font-family: 'Syne', sans-serif; font-size: 1.5rem; font-weight: 800; margin-bottom: 0.5rem; color: var(--accent); }
        .success-msg p { color: var(--muted); font-size: 0.9rem; }

        footer { border-top: 1px solid var(--border); padding: 3rem 5%; display: grid; grid-template-columns: 2fr 1fr 1fr; gap: 3rem; }
        .footer-brand p { color: var(--muted); font-size: 0.9rem; line-height: 1.7; margin-top: 1rem; max-width: 260px; }
        .footer-col h4 { font-family: 'Syne', sans-serif; font-size: 0.85rem; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 1rem; }
        .footer-col ul { list-style: none; }
        .footer-col ul li { margin-bottom: 0.6rem; }
        .footer-col ul a { color: var(--muted); text-decoration: none; font-size: 0.88rem; transition: color 0.2s; }
        .footer-col ul a:hover { color: var(--white); }
        .footer-bottom { border-top: 1px solid var(--border); padding: 1.5rem 5%; display: flex; justify-content: space-between; align-items: center; color: var(--muted); font-size: 0.82rem; }

        @media (max-width: 900px) {
          .contact-grid { grid-template-columns: 1fr; }
          .nav-links { display: none; }
          .hamburger { display: flex; }
          footer { grid-template-columns: 1fr 1fr; }
        }
        @media (max-width: 600px) {
          .form-row { grid-template-columns: 1fr; }
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
          <li><Link href="/projects">Projects</Link></li>
          <li><Link href="/contact" className="nav-cta active">Contact</Link></li>
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
        <span className="section-label">Get In Touch</span>
        <h1>Let's Build Something <span>Great</span></h1>
        <p>Have a project in mind? We'd love to hear about it. Send us a message and we'll get back to you within 24 hours.</p>
      </section>

      <div className="contact-grid">
        {/* LEFT — INFO */}
        <div className="contact-info">
          {[
            { icon:'📍', title:'Our Office', content:'Karachi, Pakistan', sub:'Available for remote projects worldwide' },
            { icon:'📧', title:'Email Us', content:'info@hakprojects.com', sub:'We reply within 24 hours', link:'mailto:info@hakprojects.com' },
            { icon:'📞', title:'Call Us', content:'+92 300 000 0000', sub:'Mon–Fri, 9am–6pm PKT', link:'tel:+923000000000' },
            { icon:'💬', title:'WhatsApp', content:'+92 300 000 0000', sub:'Quick replies on WhatsApp', link:'https://wa.me/923000000000' },
          ].map((item, i) => (
            <div className="info-card" key={i}>
              <div className="info-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              {item.link
                ? <a href={item.link}>{item.content}</a>
                : <p style={{color:'var(--white)', marginBottom:'2px'}}>{item.content}</p>
              }
              <p style={{marginTop:'4px'}}>{item.sub}</p>
            </div>
          ))}
        </div>

        {/* RIGHT — FORM */}
        <div className="form-card">
          {submitted ? (
            <div className="success-msg">
              <div className="check">✅</div>
              <h3>Message Sent!</h3>
              <p>Thank you for reaching out. We'll get back to you within 24 hours.</p>
            </div>
          ) : (
            <>
              <h2>Send Us a Message</h2>
              <p>Fill out the form below and we'll get back to you shortly.</p>
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
                    <input type="tel" placeholder="+92 300 000 0000" value={form.phone} onChange={e => setForm({...form, phone: e.target.value})} />
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
                <div className="form-group">
                  <label>Your Message *</label>
                  <textarea placeholder="Tell us about your project, goals, timeline, and budget..." required value={form.message} onChange={e => setForm({...form, message: e.target.value})} />
                </div>
                <button type="submit" className="btn-primary">Send Message →</button>
              </form>
            </>
          )}
        </div>
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