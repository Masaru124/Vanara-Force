'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Flame } from 'lucide-react';
import { Mascot } from './Mascot';

interface HeroSectionProps {
  onOpenTrialModal: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenTrialModal }) => {
  return (
    <section
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: '100px',
        paddingBottom: '60px',
        overflow: 'hidden',
        background: '#070709',
      }}
    >
      {/* Background Imagery with Cinematic Dark Grading */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `
            radial-gradient(circle at 50% 30%, rgba(255, 85, 0, 0.2) 0%, rgba(7, 7, 9, 0.72) 50%, #070709 95%),
            linear-gradient(180deg, rgba(7, 7, 9, 0.3) 0%, rgba(7, 7, 9, 0.85) 70%, #070709 100%),
            url('/assets/background-Bqh9P3aJ.webp')
          `,
          backgroundSize: 'cover',
          backgroundPosition: 'center 20%',
          opacity: 0.7,
          zIndex: 1,
        }}
      />

      <div
        className="container"
        style={{
          position: 'relative',
          zIndex: 10,
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        {/* Cursor-Tracking Interactive Fox Mascot */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: -20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginBottom: '12px',
            position: 'relative',
            cursor: 'pointer',
          }}
        >
          <Mascot
            directions="/mascots/fox-directions.webp"
            reactions="/mascots/fox-reactions.webp"
            size={110}
            label="Fox"
          />
          <span
            style={{
              marginTop: '4px',
              fontSize: '0.7rem',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'rgba(236, 233, 225, 0.5)',
              fontWeight: 600,
              pointerEvents: 'none',
            }}
          >
            Boop me!
          </span>
        </motion.div>

        {/* Prestige Falcon City Location Chip with Motion Reveal */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="badge-tag"
          style={{
            background: 'rgba(255, 85, 0, 0.12)',
            borderColor: 'rgba(255, 85, 0, 0.45)',
            marginBottom: '20px',
            fontSize: 'clamp(9px, 2.5vw, 11px)',
            maxWidth: '100%',
            whiteSpace: 'normal',
            textAlign: 'center',
          }}
        >
          <Flame size={14} color="#FF5500" style={{ flexShrink: 0 }} />
          <span>PRESTIGE FALCON CITY &bull; BANGALORE</span>
        </motion.div>

        {/* Authentic Brand Wordmark Borrowed from vanara-force.vercel.app */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '14px',
            userSelect: 'none',
            width: '100%',
          }}
        >
          <span
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: 'clamp(2.4rem, 10vw, 8.8rem)',
              fontWeight: 900,
              textTransform: 'uppercase',
              letterSpacing: '0.03em',
              color: '#ECE9E1',
              lineHeight: 0.9,
              textShadow: '0 12px 32px rgba(0, 0, 0, 0.9)',
              wordBreak: 'break-word',
            }}
          >
            VANARA
          </span>
          <span
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontStyle: 'italic',
              fontWeight: 700,
              fontSize: 'clamp(2.5rem, 11vw, 9.6rem)',
              color: '#FF5500',
              lineHeight: 0.82,
              marginTop: 'clamp(-8px, -2.5vw, -28px)',
              textTransform: 'lowercase',
              letterSpacing: '-0.02em',
            }}
          >
            force
          </span>
        </motion.div>

        {/* Subtitle with Motion Reveal */}
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(1rem, 1.8vw, 1.35rem)',
            fontWeight: 800,
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            color: '#ECE9E1',
            maxWidth: '880px',
            marginBottom: '16px',
          }}
        >
          The Sanctuary of Primal Strength &bull; Advanced Bio-Recovery
        </motion.p>

        {/* Live Copy Borrowed from vanara-force.vercel.app */}
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'clamp(0.95rem, 1.15vw, 1.12rem)',
            color: 'rgba(236, 233, 225, 0.8)',
            maxWidth: '740px',
            lineHeight: 1.7,
            marginBottom: '36px',
          }}
        >
          Personalized coaching, proven programs, state-of-the-art biomechanics equipment, and authentic Finnish wooden saunas designed to help you build real, sustainable strength safely.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="hero-action-buttons"
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '14px',
            marginBottom: '48px',
            width: '100%',
          }}
        >
          <a
            href="#pricing"
            className="btn-primary hero-btn"
            style={{
              padding: '16px 32px',
              fontSize: '0.95rem',
            }}
          >
            <span>Explore Membership Plans</span>
            <ArrowRight size={18} />
          </a>

          <a
            href="#quiz"
            className="btn-secondary hero-btn"
            style={{
              padding: '16px 28px',
              fontSize: '0.95rem',
            }}
          >
            <span>Personalized Plan Quiz</span>
          </a>

          <a
            href="https://wa.me/919731444988?text=Hi%20Coach%20Madhu,%20I'm%20interested%20in%20joining%20Vanara%20Force%20Falcon%20City!"
            target="_blank"
            rel="noopener noreferrer"
            className="hero-btn"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              padding: '16px 24px',
              borderRadius: '9999px',
              backgroundColor: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              color: '#ECE9E1',
              fontFamily: 'var(--font-heading)',
              fontSize: '0.92rem',
              fontWeight: 700,
              textDecoration: 'none',
              transition: 'all 200ms ease',
            }}
          >
            <span>WhatsApp Coach Madhu</span>
          </a>
        </motion.div>

        {/* Metrics Ribbon with Framer Motion Stagger and Hover Micro-interactions */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          style={{
            width: '100%',
            maxWidth: '1100px',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 190px), 1fr))',
            gap: '12px',
            padding: 'clamp(16px, 3vw, 24px) clamp(16px, 3vw, 28px)',
            background: 'rgba(14, 15, 18, 0.92)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            border: '1px solid rgba(255, 255, 255, 0.12)',
            borderRadius: '18px',
            boxShadow: '0 24px 48px -12px rgba(0, 0, 0, 0.85), 0 4px 16px -2px rgba(255, 85, 0, 0.15)',
          }}
        >
          {[
            { metric: '20+ Yrs', label: 'Coaching Mastery', detail: 'Founder Coach Madhu Gowda' },
            { metric: 'Falcon City', label: '2nd Floor Sanctuary', detail: 'Next to Kai Ruchi, Bangalore' },
            { metric: 'Finnish Sauna', label: 'Hot Wood & Steam', detail: 'Clinical Post-Workout Recovery' },
            { metric: '5.0 ★ Rating', label: 'Google Verified Reviews', detail: 'Spotless Floor & Form First' },
          ].map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -2 }}
              transition={{ duration: 0.2 }}
              style={{
                textAlign: 'left',
                padding: '10px 14px',
                borderRadius: '10px',
                background: 'rgba(255, 255, 255, 0.02)',
                border: '1px solid rgba(255, 255, 255, 0.04)',
              }}
            >
              <div
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: 'clamp(20px, 3vw, 26px)',
                  fontWeight: 900,
                  color: '#FFFFFF',
                  lineHeight: 1.1,
                  fontVariantNumeric: 'tabular-nums',
                }}
              >
                <span style={{ color: '#FF5500' }}>{item.metric}</span>
              </div>
              <div
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '12px',
                  fontWeight: 700,
                  color: '#ECE9E1',
                  marginTop: '4px',
                }}
              >
                {item.label}
              </div>
              <div
                style={{
                  fontSize: '10.5px',
                  color: 'rgba(236, 233, 225, 0.65)',
                  marginTop: '2px',
                }}
              >
                {item.detail}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
