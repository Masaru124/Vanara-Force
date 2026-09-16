'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { RECOVERY_FACILITIES } from '../data/gymData';
import { ArrowRight } from 'lucide-react';
import { SpotlightCard } from './SpotlightCard';

interface RecoverySanctuaryProps {
  onOpenTrialModal: () => void;
}

export const RecoverySanctuary: React.FC<RecoverySanctuaryProps> = ({ onOpenTrialModal }) => {
  return (
    <section id="recovery" className="section-padding" style={{ position: 'relative', background: '#0A0B0E' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <h2 className="section-title">
            THE BIO-RECOVERY <span style={{ color: '#FF5500' }}>SANCTUARY</span>
          </h2>

          <p className="section-subtitle">
            Experience the identical hydrotherapy, cryogenic plunge, and dynamic pneumatic compression protocols utilized by elite world champions to slash recovery windows from days to hours.
          </p>
        </div>

        {/* Recovery Amenities 4-Column Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))',
            gap: '20px',
            marginBottom: '48px',
          }}
        >
          {RECOVERY_FACILITIES.map((facility, index) => (
            <motion.div
              key={facility.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              style={{ height: '100%' }}
            >
              <SpotlightCard
                whileHover={{ y: -6 }}
                transition={{ duration: 0.25 }}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  height: '100%',
                  background: 'rgba(16, 18, 23, 0.85)',
                  padding: 0,
                  overflow: 'hidden',
                }}
              >
                {/* Card Image Banner */}
                <div
                  style={{
                    position: 'relative',
                    height: '210px',
                    backgroundImage: `linear-gradient(180deg, rgba(7, 7, 9, 0.1) 0%, rgba(16, 18, 23, 0.95) 100%), url(${facility.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                >
                  <div
                    style={{
                      position: 'absolute',
                      top: '16px',
                      left: '16px',
                      padding: '5px 12px',
                      borderRadius: '9999px',
                      background: 'rgba(7, 8, 10, 0.85)',
                      backdropFilter: 'blur(8px)',
                      border: '1px solid rgba(255, 255, 255, 0.15)',
                      fontSize: '11px',
                      fontFamily: 'var(--font-heading)',
                      fontWeight: 800,
                      color: '#FFFFFF',
                      letterSpacing: '0.08em',
                    }}
                  >
                    {facility.tag}
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
                        fontSize: '18px',
                        fontWeight: 900,
                        color: '#FF5500',
                      }}
                    >
                      {facility.metric}
                    </div>
                  </div>
                </div>

                {/* Card Content */}
                <div
                  style={{
                    padding: '24px',
                    display: 'flex',
                    flexDirection: 'column',
                    flexGrow: 1,
                  }}
                >
                  <h3
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '20px',
                      fontWeight: 800,
                      color: '#FFFFFF',
                      textTransform: 'uppercase',
                      marginBottom: '6px',
                    }}
                  >
                    {facility.title}
                  </h3>

                  <div
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: '12px',
                      fontWeight: 700,
                      color: '#FF8800',
                      textTransform: 'uppercase',
                      letterSpacing: '0.06em',
                      marginBottom: '14px',
                    }}
                  >
                    Target: {facility.target}
                  </div>

                  <p style={{ fontSize: '13.5px', color: '#9A9EAA', lineHeight: 1.6, marginBottom: '20px' }}>
                    {facility.description}
                  </p>

                  {/* Bullet Highlights */}
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '8px',
                      marginTop: 'auto',
                      borderTop: '1px solid rgba(255, 255, 255, 0.06)',
                      paddingTop: '16px',
                    }}
                  >
                    {facility.benefits.slice(0, 3).map((benefit, idx) => (
                      <div
                        key={idx}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '8px',
                          fontSize: '12.5px',
                          color: '#D4D7E2',
                        }}
                      >
                        <div
                          style={{
                            width: '5px',
                            height: '5px',
                            borderRadius: '50%',
                            background: '#FF5500',
                            flexShrink: 0,
                          }}
                        />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>

        {/* Sanctuary Protocol Feature Callout Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{
            padding: 'clamp(28px, 4vw, 40px)',
            background: 'linear-gradient(135deg, rgba(255, 85, 0, 0.08) 0%, rgba(13, 14, 18, 0.96) 60%)',
            border: '1px solid rgba(255, 85, 0, 0.35)',
            borderRadius: '20px',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '24px',
            boxShadow: '0 20px 40px -10px rgba(0, 0, 0, 0.7)',
          }}
        >
          <div style={{ maxWidth: '650px' }}>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '24px', color: '#FFFFFF', textTransform: 'uppercase', marginBottom: '8px' }}>
              Contrast Protocol | 15-Min Heat & Glacial Cold Cycle
            </h3>
            <p style={{ color: '#A5A9B8', fontSize: '14px', lineHeight: 1.6 }}>
              Rotate between the 85°C Cedar Sauna and the 3°C Cold Plunge 3 times for a 250% surge in systemic endorphins and immediate relief from delayed onset muscle soreness (DOMS).
            </p>
          </div>

          <button
            onClick={onOpenTrialModal}
            className="btn-primary"
            style={{ padding: '14px 32px' }}
          >
            <span>Experience Recovery Suite</span>
            <ArrowRight size={16} />
          </button>
        </motion.div>
      </div>
    </section>
  );
};
