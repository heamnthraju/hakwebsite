"use client";

import React from "react";

export default function AboutPage() {
  return (
    <main
      style={{
        background: "#0a0a0a",
        color: "#fff",
        fontFamily: "'Segoe UI', sans-serif",
        minHeight: "100vh",
      }}
    >
      {/* ── NAVBAR ── */}
      <nav
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "18px 6%",
          borderBottom: "1px solid #1a1a1a",
          position: "sticky",
          top: 0,
          background: "#0a0a0a",
          zIndex: 100,
        }}
      >
        <div style={{ fontWeight: 800, fontSize: "1.2rem" }}>
          HAK <span style={{ color: "#ff6600" }}>Projects</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "32px" }}>
          {["Home", "About", "Services", "Projects"].map((item) => (
            <a
              key={item}
              href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              style={{
                color: item === "About" ? "#ff6600" : "#ccc",
                textDecoration: "none",
                fontSize: "0.9rem",
                fontWeight: item === "About" ? 600 : 400,
              }}
            >
              {item}
            </a>
          ))}
          <a
            href="/contact"
            style={{
              background: "#ff6600",
              color: "#fff",
              padding: "10px 22px",
              borderRadius: "8px",
              textDecoration: "none",
              fontWeight: 600,
              fontSize: "0.9rem",
            }}
          >
            Contact
          </a>
        </div>
      </nav>

      {/* ── HERO ABOUT SECTION ── */}
      <section
        style={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "80px 6%",
          gap: "48px",
          minHeight: "90vh",
        }}
      >
        {/* Left */}
        <div style={{ flex: "1 1 420px", maxWidth: "560px" }}>
          <p
            style={{
              color: "#ff6600",
              fontWeight: 700,
              fontSize: "0.8rem",
              letterSpacing: "2px",
              textTransform: "uppercase",
              marginBottom: "20px",
            }}
          >
            About Us
          </p>
          <h1
            style={{
              fontSize: "clamp(2.4rem, 5vw, 4rem)",
              fontWeight: 900,
              lineHeight: 1.1,
              marginBottom: "28px",
            }}
          >
            We Build Digital Experiences That Matter
          </h1>
          <p style={{ color: "#aaa", lineHeight: 1.8, marginBottom: "20px", fontSize: "0.95rem" }}>
            At HAK Projects, we are passionate about delivering innovative IT
            solutions that transform businesses. Our team of skilled developers,
            designers, and strategists work together to create products that
            truly make a difference.
          </p>
          <p style={{ color: "#aaa", lineHeight: 1.8, marginBottom: "36px", fontSize: "0.95rem" }}>
            We are a software development team with proven expertise in web
            development, ERP, CRM, mobile applications, digital marketing, and
            training. We have been serving financial institutions and companies
            of all sizes since our founding.
          </p>
          <a
            href="/contact"
            style={{
              display: "inline-block",
              background: "#ff6600",
              color: "#fff",
              padding: "14px 32px",
              borderRadius: "10px",
              fontWeight: 700,
              textDecoration: "none",
              fontSize: "0.95rem",
              transition: "background 0.2s",
            }}
            onMouseOver={(e) => (e.currentTarget.style.background = "#e05500")}
            onMouseOut={(e) => (e.currentTarget.style.background = "#ff6600")}
          >
            Work With Us
          </a>
        </div>

        {/* Right — Service Cards Grid (matches screenshot) */}
        <div
          style={{
            flex: "1 1 360px",
            maxWidth: "560px",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "16px",
          }}
        >
          {[
            {
              icon: "🌐",
              iconBg: "#1a2a4a",
              title: "Web Development",
              desc: "We design and develop fast, responsive, and SEO-friendly websites tailored to your business needs.",
            },
            {
              icon: "📱",
              iconBg: "#2a1a3a",
              title: "Mobile App Dev",
              desc: "We build feature-rich, high-performance mobile apps to keep your business connected anytime, anywhere.",
            },
            {
              icon: "📊",
              iconBg: "#2a1a2a",
              title: "ERP Solutions",
              desc: "Our custom ERP solutions streamline operations, enhance productivity, and drive business growth.",
            },
            {
              icon: "☁️",
              iconBg: "#1a1a2a",
              title: "AWS Cloud",
              desc: "We leverage AWS cloud infrastructure to deliver secure, scalable, and reliable cloud solutions.",
            },
          ].map((card, i) => (
            <div
              key={i}
              style={{
                background: "#141414",
                border: "1px solid #222",
                borderRadius: "16px",
                padding: "28px 22px",
                transition: "border-color 0.2s, transform 0.2s",
                cursor: "default",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.borderColor = "#ff6600";
                e.currentTarget.style.transform = "translateY(-4px)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.borderColor = "#222";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <div
                style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "12px",
                  background: card.iconBg,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "1.4rem",
                  marginBottom: "16px",
                }}
              >
                {card.icon}
              </div>
              <h3 style={{ fontWeight: 700, fontSize: "1rem", marginBottom: "10px" }}>
                {card.title}
              </h3>
              <p style={{ color: "#888", fontSize: "0.85rem", lineHeight: 1.65, margin: 0 }}>
                {card.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── STATS ── */}
      <section
        style={{
          padding: "60px 6%",
          background: "#111",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
          gap: "24px",
        }}
      >
        {[
          { stat: "50+", label: "Projects Done" },
          { stat: "30+", label: "Happy Clients" },
          { stat: "5+", label: "Years Experience" },
          { stat: "100%", label: "Client Satisfaction" },
        ].map((item, i) => (
          <div
            key={i}
            style={{
              textAlign: "center",
              padding: "32px 20px",
              background: "#1a1a1a",
              borderRadius: "14px",
              border: "1px solid #222",
            }}
          >
            <div style={{ fontSize: "2.4rem", fontWeight: 900, color: "#ff6600" }}>
              {item.stat}
            </div>
            <div style={{ color: "#888", marginTop: "8px", fontSize: "0.9rem" }}>
              {item.label}
            </div>
          </div>
        ))}
      </section>

      {/* ── WHO WE ARE / MISSION / VISION ── */}
      <section style={{ padding: "80px 6%" }}>
        <h2
          style={{
            fontSize: "clamp(1.8rem, 4vw, 2.6rem)",
            fontWeight: 800,
            marginBottom: "40px",
          }}
        >
          Who <span style={{ color: "#ff6600" }}>We</span> Are
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "20px",
          }}
        >
          {[
            {
              icon: "👥",
              title: "Who We Are",
              desc: "A creative team of passionate developers and designers turning ideas into powerful digital solutions for startups, SMEs, and enterprises.",
            },
            {
              icon: "🚀",
              title: "Our Mission",
              desc: "Empower businesses with innovative and future-ready digital solutions that drive real growth.",
            },
            {
              icon: "👁️",
              title: "Our Vision",
              desc: "To become a trusted technology partner known for quality, transparency, and long-term value creation.",
            },
          ].map((card, i) => (
            <div
              key={i}
              style={{
                background: "#141414",
                border: "1px solid #222",
                borderRadius: "16px",
                padding: "32px 26px",
                transition: "border-color 0.2s",
              }}
              onMouseOver={(e) => (e.currentTarget.style.borderColor = "#ff6600")}
              onMouseOut={(e) => (e.currentTarget.style.borderColor = "#222")}
            >
              <div style={{ fontSize: "1.8rem", marginBottom: "14px" }}>{card.icon}</div>
              <h3 style={{ fontWeight: 700, fontSize: "1.05rem", marginBottom: "12px" }}>
                {card.title}
              </h3>
              <p style={{ color: "#888", lineHeight: 1.7, fontSize: "0.9rem", margin: 0 }}>
                {card.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer
        style={{
          textAlign: "center",
          padding: "30px 6%",
          borderTop: "1px solid #1a1a1a",
          color: "#555",
          fontSize: "0.8rem",
        }}
      >
        © 2026 HAK Projects. All rights reserved.
      </footer>
    </main>
  );
}