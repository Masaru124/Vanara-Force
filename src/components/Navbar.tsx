'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight, MessageSquare } from 'lucide-react';

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
          height: '74px',
          zIndex: 100,
          backgroundColor: isScrolled ? 'rgba(5, 5, 8, 0.95)' : 'rgba(5, 5, 8, 0.85)',
          backdropFilter: 'blur(24px) saturate(180%)',
          WebkitBackdropFilter: 'blur(24px) saturate(180%)',
          borderBottom: isScrolled
            ? '1px solid rgba(255, 85, 0, 0.3)'
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
            padding: '0 clamp(16px, 3vw, 32px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '16px',
          }}
        >
          {/* Left Column: Official AVIF Emblem Logo + Wordmark */}
          <a
            href="#"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              textDecoration: 'none',
              flexShrink: 0,
              minWidth: 0,
            }}
          >
            {/* Official AVIF Emblem Added by User */}
            <div
              style={{
                width: '52px',
                height: '38px',
                borderRadius: '9999px',
                backgroundColor: '#000000',
                border: '1.5px solid rgba(255, 85, 0, 0.55)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden',
                boxShadow: '0 4px 14px rgba(0, 0, 0, 0.8)',
                flexShrink: 0,
              }}
            >
              <img
                src="/qOk836sVt5WWyzXcy3Ek860og54.avif"
                alt="Vanara Force Official Emblem"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block',
                }}
              />
            </div>

            {/* Typography Wordmark */}
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', minWidth: 0 }}>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '5px', lineHeight: 1 }}>
                <span
                  style={{
                    fontFamily: "'Playfair Display', Georgia, serif",
                    fontWeight: 900,
                    fontSize: 'clamp(18px, 4vw, 22px)',
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
                    fontSize: 'clamp(20px, 4.5vw, 24px)',
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
                  fontSize: '8.5px',
                  fontFamily: 'var(--font-heading)',
                  fontWeight: 800,
                  letterSpacing: '0.16em',
                  textTransform: 'uppercase',
                  color: 'rgba(236, 233, 225, 0.55)',
                  marginTop: '3px',
                  lineHeight: 1,
                  whiteSpace: 'nowrap',
                }}
              >
                BANGALORE SANCTUARY
              </span>
            </div>
          </a>

          {/* Center Column: Structured Navigation Links (Desktop Only) */}
          <nav
            style={{
              display: 'none',
              alignItems: 'center',
              gap: '26px',
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
                    padding: '8px 2px',
                    transition: 'color 0.2s ease',
                  }}
                >
                  <span>{link.label}</span>
                  {isHovered && (
                    <motion.div
                      layoutId="navbar-underline-active"
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

          {/* Right Column: CTA on Desktop, Hamburger on Mobile */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexShrink: 0 }}>
            {/* Desktop CTA Button (Hidden on Mobile to prevent overflow!) */}
            <a
              href="#pricing"
              className="desktop-cta btn-primary"
              style={{
                padding: '10px 24px',
                fontSize: '13px',
                fontWeight: 800,
                letterSpacing: '0.06em',
                borderRadius: '9999px',
                textDecoration: 'none',
                display: 'none',
                alignItems: 'center',
                gap: '7px',
                whiteSpace: 'nowrap',
              }}
            >
              <span>Explore Plans</span>
              <ArrowRight size={14} />
            </a>

            {/* Mobile Hamburger Button (Always visible on mobile screens!) */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="mobile-hamburger"
              style={{
                background: 'rgba(255, 255, 255, 0.06)',
                border: '1px solid rgba(255, 255, 255, 0.14)',
                borderRadius: '10px',
                color: '#FFFFFF',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '42px',
                height: '42px',
                cursor: 'pointer',
                flexShrink: 0,
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
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            style={{
              position: 'fixed',
              top: '74px',
              left: 0,
              right: 0,
              zIndex: 99,
              backgroundColor: 'rgba(6, 7, 10, 0.98)',
              backdropFilter: 'blur(30px)',
              WebkitBackdropFilter: 'blur(30px)',
              borderBottom: '1px solid rgba(255, 85, 0, 0.35)',
              padding: '20px 16px 28px',
              boxShadow: '0 24px 60px -12px rgba(0, 0, 0, 0.95)',
              display: 'flex',
              flexDirection: 'column',
              gap: '10px',
              maxHeight: 'calc(100vh - 74px)',
              overflowY: 'auto',
            }}
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '16px',
                  fontWeight: 800,
                  color: '#FFFFFF',
                  textDecoration: 'none',
                  textTransform: 'uppercase',
                  letterSpacing: '0.04em',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '12px 16px',
                  borderRadius: '10px',
                  backgroundColor: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid rgba(255, 255, 255, 0.05)',
                }}
              >
                <span>{link.label}</span>
                <ArrowRight size={15} color="#FF5500" />
              </a>
            ))}

            <div style={{ marginTop: '8px', paddingTop: '16px', borderTop: '1px solid rgba(255, 255, 255, 0.08)', display: 'flex', flexDirection: 'column', gap: '10px' }}>
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

              <a
                href="https://wa.me/919731444988?text=Hi%20Vanara%20Force,%20I%20have%20an%20inquiry%20regarding%20membership."
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  width: '100%',
                  textAlign: 'center',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  textDecoration: 'none',
                  height: '46px',
                  borderRadius: '9999px',
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  color: '#ECE9E1',
                  fontFamily: 'var(--font-heading)',
                  fontSize: '13px',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.04em',
                }}
              >
                <MessageSquare size={16} color="#FF5500" />
                <span>WhatsApp Concierge</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx>{`
        @media (min-width: 1024px) {
          .desktop-nav {
            display: flex !important;
          }
          .desktop-cta {
            display: inline-flex !important;
          }
          .mobile-hamburger {
            display: none !important;
          }
        }
        @media (max-width: 1023px) {
          .desktop-nav {
            display: none !important;
          }
          .desktop-cta {
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
