'use client';

import React from 'react';
import { Flame, ArrowUp, Instagram, Youtube, Linkedin, Shield } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        background: '#050507',
        borderTop: '1px solid rgba(255, 85, 0, 0.25)',
        paddingTop: '80px',
        paddingBottom: '40px',
        position: 'relative',
        zIndex: 10,
      }}
    >
      <div className="container">
        {/* Top Tier: Brand Statement & Quick Navigation */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 200px), 1fr))',
            gap: '40px',
            marginBottom: '60px',
          }}
        >
          {/* Column 1: Brand & Archetype */}
          <div style={{ maxWidth: '340px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '16px' }}>
              <div
                style={{
                  width: '54px',
                  height: '38px',
                  borderRadius: '9999px',
                  backgroundColor: '#000000',
                  border: '1.5px solid rgba(255, 85, 0, 0.45)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  overflow: 'hidden',
                  boxShadow: '0 8px 16px -4px rgba(255, 85, 0, 0.3)',
                  flexShrink: 0,
                }}
              >
                <img
                  src="/qOk836sVt5WWyzXcy3Ek860og54.avif"
                  alt="Vanara Force Emblem"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block',
                  }}
                />
              </div>

              <div style={{ display: 'flex', alignItems: 'baseline', gap: '6px', lineHeight: 1 }}>
                <span
                  style={{
                    fontFamily: "'Playfair Display', Georgia, serif",
                    fontWeight: 900,
                    fontSize: '20px',
                    letterSpacing: '0.04em',
                    color: '#ECE9E1',
                    textTransform: 'uppercase',
                  }}
                >
                  VANARA
                </span>
                <span
                  style={{
                    fontFamily: "'Playfair Display', Georgia, serif",
                    fontWeight: 700,
                    fontStyle: 'italic',
                    fontSize: '22px',
                    color: '#FF5500',
                    textTransform: 'lowercase',
                  }}
                >
                  force
                </span>
              </div>
            </div>

            <p style={{ fontSize: '13.5px', color: 'rgba(236, 233, 225, 0.72)', lineHeight: 1.7, marginBottom: '20px' }}>
              Personalized coaching, proven programs, state-of-the-art facilities, and Finnish recovery saunas designed to help you build real, sustainable fitness.
            </p>

            <div style={{ display: 'flex', gap: '12px' }}>
              {[
                { icon: <Instagram size={17} />, href: 'https://instagram.com' },
                { icon: <Youtube size={17} />, href: 'https://youtube.com' },
                { icon: <Linkedin size={17} />, href: 'https://linkedin.com' },
              ].map((item, idx) => (
                <a
                  key={idx}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '50%',
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#FFFFFF',
                    transition: 'all 150ms ease',
                  }}
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '13px',
                fontWeight: 800,
                color: '#FF5500',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                marginBottom: '18px',
              }}
            >
              EXPLORE
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '13px', color: 'rgba(236, 233, 225, 0.75)' }}>
              <a href="#why-us" style={{ color: 'inherit', textDecoration: 'none' }}>Why Vanara Force</a>
              <a href="#facilities" style={{ color: 'inherit', textDecoration: 'none' }}>Amenities & Facilities</a>
              <a href="#coaches" style={{ color: 'inherit', textDecoration: 'none' }}>Coaches & Trainers</a>
              <a href="#quiz" style={{ color: 'inherit', textDecoration: 'none' }}>Personalized Plan (Quiz)</a>
              <a href="#pricing" style={{ color: 'inherit', textDecoration: 'none' }}>Membership Plans</a>
              <a href="#reviews" style={{ color: 'inherit', textDecoration: 'none' }}>Google Reviews</a>
              <a href="#faq" style={{ color: 'inherit', textDecoration: 'none' }}>FAQ & Support</a>
            </div>
          </div>

          {/* Column 3: Headquarters Location */}
          <div>
            <h4
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '13px',
                fontWeight: 800,
                color: '#FF5500',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                marginBottom: '18px',
              }}
            >
              SANCTUARY HEADQUARTERS
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '13px', color: 'rgba(236, 233, 225, 0.75)', lineHeight: 1.6 }}>
              <strong style={{ color: '#ECE9E1' }}>Vanara Force Falcon City</strong>
              <span>2nd Floor, Prestige Falcon City</span>
              <span>Next to Kai Ruchi, Anjanadri Layout</span>
              <span>Konanakunte, Bengaluru 560062</span>
              <span style={{ color: '#FF5500', fontWeight: 700, marginTop: '4px' }}>Phone: +91 97314 44988</span>
            </div>
          </div>

          {/* Column 4: Private Concierge */}
          <div>
            <h4
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '13px',
                fontWeight: 800,
                color: '#FF5500',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                marginBottom: '18px',
              }}
            >
              CONTACT & HOURS
            </h4>
            <div style={{ fontSize: '13px', color: 'rgba(236, 233, 225, 0.75)', lineHeight: 1.7 }}>
              <div>Mon - Sat: 05:30 AM - 10:00 PM</div>
              <div>Sunday: 07:00 AM - 01:00 PM / 08:00 PM</div>
              <div>Email: madhugowda4656@gmail.com</div>
              <div>Direct: +91 97314 44988</div>
            </div>

            <button
              onClick={scrollToTop}
              style={{
                marginTop: '20px',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '8px 16px',
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                borderRadius: '8px',
                color: '#FFFFFF',
                fontSize: '12px',
                fontWeight: 700,
                cursor: 'pointer',
              }}
            >
              <span>Back to Top</span>
              <ArrowUp size={14} color="#FF5500" />
            </button>
          </div>
        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div
          style={{
            borderTop: '1px solid rgba(255, 255, 255, 0.06)',
            paddingTop: '28px',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '16px',
            fontSize: '12px',
            color: 'rgba(236, 233, 225, 0.5)',
          }}
        >
          <div>
            &copy; {new Date().getFullYear()} VANARA FORCE. All rights reserved.
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px 16px' }}>
            <span style={{ cursor: 'pointer' }}>Privacy Policy</span>
            <span style={{ cursor: 'pointer' }}>Terms & Medical Disclaimer</span>
            <span style={{ cursor: 'pointer' }}>TCPA Compliance</span>
            <span style={{ cursor: 'pointer' }}>Code of Conduct</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
