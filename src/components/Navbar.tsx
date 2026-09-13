'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight } from 'lucide-react';

interface NavbarProps {
  onOpenTrialModal: () => void;
  selectedCity?: string;
  onSelectCity?: (city: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenTrialModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredNav, setHoveredNav] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Why Us', href: '#why-us' },
    { label: 'Sanctuary', href: '#facilities' },
    { label: 'Coaches', href: '#coaches' },
    { label: 'Programs', href: '#programs' },
    { label: 'Assessment', href: '#quiz' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          height: '76px',
          zIndex: 100,
          backgroundColor: isScrolled ? 'rgba(5, 5, 8, 0.94)' : 'rgba(5, 5, 8, 0.82)',
          backdropFilter: 'blur(24px) saturate(180%)',
          WebkitBackdropFilter: 'blur(24px) saturate(180%)',
          borderBottom: isScrolled
            ? '1px solid rgba(255, 85, 0, 0.28)'
            : '1px solid rgba(255, 255, 255, 0.08)',
          boxShadow: isScrolled
            ? '0 16px 40px -12px rgba(0, 0, 0, 0.95), 0 2px 12px -2px rgba(255, 85, 0, 0.15)'
            : '0 8px 24px -8px rgba(0, 0, 0, 0.6)',
          transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
      >
        <div
          style={{
            maxWidth: '1360px',
            height: '100%',
            margin: '0 auto',
            padding: '0 32px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          {/* Left Column: Fully Visible Brand Mark & Shield */}
          <a
            href="#"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '14px',
              textDecoration: 'none',
              flexShrink: 0,
            }}
          >
            {/* Athletic Shield Emblem */}
            <div
              style={{
                width: '42px',
                height: '42px',
                borderRadius: '11px',
                backgroundColor: '#0A0B0E',
                border: '1.5px solid rgba(255, 85, 0, 0.55)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 4px 16px rgba(0, 0, 0, 0.8), 0 0 12px -2px rgba(255, 85, 0, 0.3)',
                flexShrink: 0,
              }}
            >
              <svg viewBox="0 0 64 64" width="26" height="26">
                <defs>
                  <linearGradient id="vf-full-crest-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#FF5500" />
                    <stop offset="100%" stopColor="#D92C00" />
                  </linearGradient>
                </defs>
                <path d="M16 18 L27 46 L37 46 L48 18 L38.5 18 L32 37.5 L25.5 18 Z" fill="url(#vf-full-crest-grad)" />
                <circle cx="32" cy="18" r="3.5" fill="#FFFFFF" />
              </svg>
            </div>

            {/* Typography Wordmark */}
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '6px', lineHeight: 1 }}>
                <span
                  style={{
                    fontFamily: "'Playfair Display', Georgia, serif",
                    fontWeight: 900,
                    fontSize: '22px',
                    letterSpacing: '0.04em',
                    color: '#FFFFFF',
                    textTransform: 'uppercase',
                    whiteSpace: 'nowrap',
                  }}
                >
                  VANARA
                </span>
                <span
                  style={{
                    fontFamily: "'Playfair Display', Georgia, serif",
                    fontWeight: 700,
                    fontStyle: 'italic',
                    fontSize: '24px',
                    color: '#FF5500',
                    textTransform: 'lowercase',
                    letterSpacing: '-0.02em',
                    whiteSpace: 'nowrap',
                  }}
                >
                  force
                </span>
              </div>
              <span
                style={{
                  fontSize: '9.5px',
                  fontFamily: 'var(--font-heading)',
                  fontWeight: 800,
                  letterSpacing: '0.16em',
                  textTransform: 'uppercase',
                  color: 'rgba(236, 233, 225, 0.55)',
                  marginTop: '4px',
                  lineHeight: 1,
                  whiteSpace: 'nowrap',
                }}
              >
                BANGALORE SANCTUARY
              </span>
            </div>
          </a>

          {/* Center Column: Structured Navigation Links */}
          <nav
            style={{
              display: 'none',
              alignItems: 'center',
              gap: '28px',
            }}
            className="desktop-nav"
          >
            {navLinks.map((link) => {
              const isHovered = hoveredNav === link.label;

              return (
                <a
                  key={link.label}
                  href={link.href}
                  onMouseEnter={() => setHoveredNav(link.label)}
                  onMouseLeave={() => setHoveredNav(null)}
                  style={{
                    position: 'relative',
                    fontFamily: 'var(--font-heading)',
                    fontSize: '13px',
                    fontWeight: 700,
                    color: isHovered ? '#FFFFFF' : 'rgba(236, 233, 225, 0.72)',
                    textDecoration: 'none',
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    whiteSpace: 'nowrap',
                    padding: '8px 4px',
                    transition: 'color 0.2s ease',
                  }}
                >
                  <span>{link.label}</span>
                  {isHovered && (
                    <motion.div
                      layoutId="navbar-underline"
                      initial={{ opacity: 0, scaleX: 0.6 }}
                      animate={{ opacity: 1, scaleX: 1 }}
                      exit={{ opacity: 0, scaleX: 0.6 }}
                      transition={{ duration: 0.18 }}
                      style={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        height: '2px',
                        backgroundColor: '#FF5500',
                        borderRadius: '2px',
                      }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Column: High-End Actions */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <a
              href="#pricing"
              className="btn-primary"
              style={{
                padding: '11px 26px',
                fontSize: '13px',
                fontWeight: 800,
                letterSpacing: '0.06em',
                borderRadius: '9999px',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '7px',
                whiteSpace: 'nowrap',
                flexShrink: 0,
              }}
            >
              <span>Explore Plans</span>
              <ArrowRight size={14} />
            </a>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="mobile-hamburger"
              style={{
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                borderRadius: '10px',
                color: '#FFFFFF',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '42px',
                height: '42px',
                cursor: 'pointer',
              }}
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X size={22} color="#FF5500" /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Animated Slide-down Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            style={{
              position: 'fixed',
              top: '76px',
              left: 0,
              right: 0,
              zIndex: 99,
              backgroundColor: 'rgba(6, 7, 9, 0.98)',
              backdropFilter: 'blur(28px)',
              WebkitBackdropFilter: 'blur(28px)',
              borderBottom: '1px solid rgba(255, 85, 0, 0.3)',
              padding: '24px',
              boxShadow: '0 24px 60px -12px rgba(0, 0, 0, 0.95)',
              display: 'flex',
              flexDirection: 'column',
              gap: '12px',
            }}
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '18px',
                  fontWeight: 800,
                  color: '#FFFFFF',
                  textDecoration: 'none',
                  textTransform: 'uppercase',
                  letterSpacing: '0.04em',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '12px 14px',
                  borderRadius: '10px',
                  backgroundColor: 'rgba(255, 255, 255, 0.03)',
                }}
              >
                <span>{link.label}</span>
                <ArrowRight size={16} color="#FF5500" />
              </a>
            ))}

            <div style={{ marginTop: '10px', paddingTop: '16px', borderTop: '1px solid rgba(255, 255, 255, 0.08)' }}>
              <a
                href="#pricing"
                onClick={() => setMobileMenuOpen(false)}
                className="btn-primary"
                style={{
                  width: '100%',
                  textAlign: 'center',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  textDecoration: 'none',
                  height: '48px',
                  borderRadius: '9999px',
                }}
              >
                <span>Explore Membership Plans</span>
                <ArrowRight size={15} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx>{`
        @media (min-width: 1080px) {
          .desktop-nav {
            display: flex !important;
          }
          .mobile-hamburger {
            display: none !important;
          }
        }
        @media (max-width: 1079px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-hamburger {
            display: flex !important;
          }
        }
      `}</style>
    </>
  );
};
