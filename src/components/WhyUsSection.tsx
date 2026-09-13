'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { WHY_US_DATA } from '../data/gymData';
import { SpotlightCard } from './SpotlightCard';
import { ShieldCheck, Dumbbell, Sparkles, UserCheck } from 'lucide-react';

export const WhyUsSection: React.FC = () => {
  const icons = [Dumbbell, ShieldCheck, Sparkles, UserCheck];
  const pillarTags = ['DISCIPLINE', 'BIOMECHANICS', 'BIO-RECOVERY', 'MENTORSHIP'];

  return (
    <section
      id="why-us"
      style={{
        padding: '110px 0',
        backgroundColor: '#0A0B0E',
        position: 'relative',
        borderTop: '1px solid rgba(255, 255, 255, 0.06)',
      }}
    >
      <div className="container">
        {/* Asymmetric Editorial Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          style={{ marginBottom: '50px', borderBottom: '1px solid rgba(255, 255, 255, 0.08)', paddingBottom: '32px' }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-end', gap: '24px' }}>
              <h2
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(2.2rem, 4.5vw, 3.6rem)',
                  color: '#FFFFFF',
                  fontWeight: 800,
                  letterSpacing: '-0.02em',
                  textTransform: 'uppercase',
                  margin: 0,
                  lineHeight: 1.05,
                }}
              >
                WHY TRAIN AT <span style={{ color: '#FF5500' }}>VANARA FORCE</span>
              </h2>
              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  color: '#9599A6',
                  fontSize: '1rem',
                  maxWidth: '560px',
                  margin: 0,
                  lineHeight: 1.6,
                }}
              >
                We reject quick-fix fitness fads. Every square foot at Prestige Falcon City is built for uncompromising physical discipline, biomechanical safety, and active restoration.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Bento Grid Showcase */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '24px',
          }}
        >
          {WHY_US_DATA.map((item, idx) => {
            const IconComponent = icons[idx % icons.length];
            const tag = pillarTags[idx % pillarTags.length];

            return (
              <SpotlightCard
                key={item.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                spotlightColor="rgba(255, 85, 0, 0.2)"
                style={{
                  backgroundColor: '#101217',
                  borderRadius: '20px',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  overflow: 'hidden',
                  padding: 0,
                }}
              >
                <div
                  style={{
                    position: 'relative',
                    height: '220px',
                    width: '100%',
                    overflow: 'hidden',
                  }}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 600ms cubic-bezier(0.16, 1, 0.3, 1)',
                    }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'linear-gradient(to top, #101217 0%, rgba(16, 18, 23, 0.3) 60%, transparent 100%)',
                    }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      top: '16px',
                      left: '16px',
                      backgroundColor: 'rgba(5, 5, 7, 0.85)',
                      border: '1px solid rgba(255, 85, 0, 0.45)',
                      borderRadius: '9999px',
                      padding: '4px 12px',
                      fontFamily: 'var(--font-heading)',
                      fontWeight: 800,
                      fontSize: '10px',
                      color: '#FF5500',
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                    }}
                  >
                    {tag}
                  </div>
                </div>

                <div style={{ padding: '24px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                      marginBottom: '12px',
                    }}
                  >
                    <div
                      style={{
                        width: '32px',
                        height: '32px',
                        borderRadius: '8px',
                        backgroundColor: 'rgba(255, 85, 0, 0.12)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#FF5500',
                        flexShrink: 0,
                      }}
                    >
                      <IconComponent size={18} />
                    </div>
                    <h3
                      style={{
                        fontFamily: 'var(--font-heading)',
                        fontSize: '18px',
                        fontWeight: 800,
                        color: '#ECE9E1',
                        letterSpacing: '-0.01em',
                      }}
                    >
                      {item.title}
                    </h3>
                  </div>

                  <p
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '14px',
                      color: '#9599A6',
                      lineHeight: 1.6,
                      margin: 0,
                    }}
                  >
                    {item.description}
                  </p>
                </div>
              </SpotlightCard>
            );
          })}
        </div>
      </div>
    </section>
  );
};
