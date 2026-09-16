'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { COACHES_DATA } from '../data/gymData';
import { MessageSquare } from 'lucide-react';
import { SpotlightCard } from './SpotlightCard';

interface CoachesSectionProps {
  onOpenTrialModal: () => void;
}

export const CoachesSection: React.FC<CoachesSectionProps> = ({ onOpenTrialModal }) => {
  return (
    <section
      id="coaches"
      style={{
        padding: '110px 0',
        backgroundColor: '#070709',
        position: 'relative',
        borderTop: '1px solid rgba(255, 255, 255, 0.06)',
      }}
    >
      <div className="container">
        {/* Section Header with Motion Reveal */}
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
                  fontSize: 'clamp(1.4rem, 4.5vw, 3.6rem)',
                  color: '#FFFFFF',
                  fontWeight: 800,
                  letterSpacing: '-0.02em',
                  textTransform: 'uppercase',
                  margin: 0,
                  lineHeight: 1.1,
                  overflowWrap: 'break-word',
                  wordBreak: 'break-word',
                }}
              >
                COACHES & <span style={{ color: '#FF5500' }}>TRAINERS</span>
              </h2>
              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  color: 'rgba(236, 233, 225, 0.72)',
                  fontSize: '1.02rem',
                  maxWidth: '560px',
                  margin: 0,
                  lineHeight: 1.6,
                }}
              >
                Train directly under certified veteran coaches. No junior floor interns. Every mentor brings years of competitive bodybuilding, athletic conditioning, and injury-prevention mastery.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Coaches Grid with SpotlightCards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
            gap: '20px',
          }}
        >
          {COACHES_DATA.map((coach, idx) => {
            const isHead = coach.id === 'madhu-gowda';

            return (
              <SpotlightCard
                key={coach.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                spotlightColor={isHead ? 'rgba(255, 85, 0, 0.25)' : 'rgba(255, 255, 255, 0.08)'}
                style={{
                  backgroundColor: '#0F1015',
                  borderRadius: '20px',
                  border: isHead 
                    ? '1.5px solid rgba(255, 85, 0, 0.55)' 
                    : '1px solid rgba(255, 255, 255, 0.08)',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  boxShadow: isHead 
                    ? '0 20px 48px -12px rgba(0, 0, 0, 0.85), 0 8px 20px -4px rgba(255, 85, 0, 0.25)' 
                    : '0 12px 28px -6px rgba(0, 0, 0, 0.7)',
                }}
              >
                {/* Coach Image */}
                <div
                  style={{
                    position: 'relative',
                    height: 'clamp(240px, 35vw, 320px)',
                    width: '100%',
                    backgroundColor: '#15161C',
                    overflow: 'hidden',
                  }}
                >
                  {coach.image ? (
                    <img
                      src={coach.image}
                      alt={coach.imageAlt}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        objectPosition: 'top center',
                        transition: 'transform 0.4s ease',
                      }}
                    />
                  ) : (
                    <div
                      style={{
                        width: '100%',
                        height: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        background: 'linear-gradient(135deg, #1A1B22 0%, #0E0F14 100%)',
                        color: 'rgba(236, 233, 225, 0.4)',
                        fontFamily: 'var(--font-heading)',
                        fontWeight: 700,
                      }}
                    >
                      Coach In Production
                    </div>
                  )}

                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'linear-gradient(to top, #0F1015 0%, rgba(15, 16, 21, 0.4) 60%, transparent 100%)',
                    }}
                  />

                  {/* Badge Category */}
                  <div
                    style={{
                      position: 'absolute',
                      top: '16px',
                      left: '16px',
                      backgroundColor: 'rgba(8, 9, 12, 0.88)',
                      border: '1px solid rgba(255, 85, 0, 0.6)',
                      borderRadius: '6px',
                      padding: '4px 10px',
                      fontFamily: 'var(--font-heading)',
                      fontSize: '10px',
                      fontWeight: 800,
                      color: '#FF5500',
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                    }}
                  >
                    {coach.category}
                  </div>

                  <div
                    style={{
                      position: 'absolute',
                      bottom: '16px',
                      left: '20px',
                      right: '20px',
                    }}
                  >
                    <div
                      style={{
                        fontFamily: 'var(--font-heading)',
                        fontSize: '24px',
                        fontWeight: 900,
                        color: '#ECE9E1',
                      }}
                    >
                      {coach.title}
                    </div>
                    <div
                      style={{
                        fontFamily: 'var(--font-body)',
                        fontSize: '12px',
                        fontWeight: 700,
                        color: '#FF5500',
                        marginTop: '2px',
                      }}
                    >
                      {coach.experience}
                    </div>
                  </div>
                </div>

                {/* Coach Body */}
                <div style={{ padding: '24px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <p
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '13.5px',
                      color: 'rgba(236, 233, 225, 0.78)',
                      lineHeight: 1.6,
                      marginBottom: '18px',
                    }}
                  >
                    {coach.description}
                  </p>

                  {/* Specialties */}
                  <div style={{ marginBottom: '20px' }}>
                    <div
                      style={{
                        fontSize: '11px',
                        fontFamily: 'var(--font-heading)',
                        fontWeight: 800,
                        textTransform: 'uppercase',
                        color: 'rgba(236, 233, 225, 0.5)',
                        letterSpacing: '0.08em',
                        marginBottom: '8px',
                      }}
                    >
                      Core Focus
                    </div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                      {coach.specialties.map((spec, i) => (
                        <span
                          key={i}
                          style={{
                            fontSize: '11.5px',
                            padding: '4px 10px',
                            backgroundColor: 'rgba(255, 255, 255, 0.04)',
                            border: '1px solid rgba(255, 255, 255, 0.1)',
                            borderRadius: '6px',
                            color: '#ECE9E1',
                          }}
                        >
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Quote */}
                  <div
                    style={{
                      padding: '14px 16px',
                      borderRadius: '12px',
                      backgroundColor: 'rgba(255, 255, 255, 0.03)',
                      border: '1px solid rgba(255, 255, 255, 0.08)',
                      fontSize: '12.5px',
                      fontStyle: 'italic',
                      color: 'rgba(236, 233, 225, 0.85)',
                      lineHeight: 1.5,
                      marginTop: 'auto',
                      marginBottom: '20px',
                    }}
                  >
                    &ldquo;{coach.quote}&rdquo;
                  </div>

                  {/* WhatsApp Consultation Action */}
                  <a
                    href={`https://wa.me/919731444988?text=Hi%20${encodeURIComponent(coach.title)},%20I'd%20like%20to%20inquire%20about%20personal%20training%20at%20Vanara%20Force%20Prestige%20Falcon%20City.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '8px',
                      padding: '12px 18px',
                      borderRadius: '10px',
                      backgroundColor: 'rgba(255, 85, 0, 0.15)',
                      border: '1px solid rgba(255, 85, 0, 0.4)',
                      color: '#FF5500',
                      fontFamily: 'var(--font-heading)',
                      fontSize: '13px',
                      fontWeight: 800,
                      textDecoration: 'none',
                      transition: 'all 200ms ease',
                    }}
                  >
                    <MessageSquare size={15} />
                    <span>Consult with {coach.shortName}</span>
                  </a>
                </div>
              </SpotlightCard>
            );
          })}
        </div>
      </div>
    </section>
  );
};
