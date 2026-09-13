'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { LIVE_MEMBERSHIP_TIERS } from '../data/gymData';
import { SpotlightCard } from './SpotlightCard';
import { Check, ArrowRight, ShieldCheck, Flame, Compass, Sparkles } from 'lucide-react';

interface PricingMatrixProps {
  onOpenTrialModal: (preselectedPlan?: string) => void;
}

export const PricingMatrix: React.FC<PricingMatrixProps> = ({ onOpenTrialModal }) => {
  return (
    <section id="pricing" className="section-padding" style={{ position: 'relative', background: '#070709' }}>
      <div className="container">
        {/* Section Header with Motion Reveal */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="section-header"
        >
          <h2 className="section-title">
            MEMBERSHIP <span style={{ color: '#FF5500' }}>ARCHITECTURE</span>
          </h2>
          <p className="section-subtitle">
            Uncompromising training access at Prestige Falcon City, Kanakapura Road. Every tier includes biometric assessments, Olympic lifting platforms, and dedicated post-workout recovery.
          </p>
        </motion.div>

        {/* 4 Authentic Live Membership Tiers Grid with SpotlightCards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '24px',
            alignItems: 'stretch',
            marginBottom: '48px',
          }}
        >
          {LIVE_MEMBERSHIP_TIERS.map((tier, idx) => {
            const isRec = tier.isRecommended;

            return (
              <SpotlightCard
                key={tier.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                spotlightColor={isRec ? 'rgba(255, 85, 0, 0.28)' : 'rgba(255, 255, 255, 0.1)'}
                style={{
                  padding: '32px 24px',
                  borderColor: isRec ? 'rgba(255, 85, 0, 0.6)' : 'rgba(255, 255, 255, 0.08)',
                  background: isRec
                    ? 'linear-gradient(180deg, rgba(255, 85, 0, 0.1) 0%, rgba(16, 18, 23, 0.96) 100%)'
                    : '#0D0E13',
                  boxShadow: isRec
                    ? '0 20px 48px -10px rgba(0, 0, 0, 0.85), 0 8px 20px -4px rgba(255, 85, 0, 0.25)'
                    : '0 12px 28px -6px rgba(0, 0, 0, 0.7)',
                  borderRadius: '20px',
                }}
              >
                {/* Recommended Badge */}
                {isRec && (
                  <div
                    style={{
                      position: 'absolute',
                      top: '-12px',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      padding: '4px 16px',
                      borderRadius: '9999px',
                      backgroundColor: '#FF5500',
                      color: '#050507',
                      fontSize: '11px',
                      fontFamily: 'var(--font-heading)',
                      fontWeight: 900,
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      boxShadow: '0 6px 16px -2px rgba(255, 85, 0, 0.45)',
                    }}
                  >
                    MOST POPULAR
                  </div>
                )}

                <div style={{ marginBottom: '16px' }}>
                  <h3
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: '20px',
                      fontWeight: 800,
                      color: '#ECE9E1',
                      letterSpacing: '-0.01em',
                    }}
                  >
                    {tier.name}
                  </h3>
                </div>

                {/* Price Display */}
                <div style={{ marginBottom: '24px', paddingBottom: '20px', borderBottom: '1px solid rgba(255, 255, 255, 0.08)' }}>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px' }}>
                    <span
                      className="tabular-nums"
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: '38px',
                        fontWeight: 900,
                        color: isRec ? '#FF5500' : '#FFFFFF',
                        letterSpacing: '-0.03em',
                        lineHeight: 1,
                      }}
                    >
                      {tier.price}
                    </span>
                    <span style={{ fontSize: '13px', color: '#9599A6', fontWeight: 600 }}>
                      {tier.billingPeriod}
                    </span>
                  </div>
                </div>

                {/* Features List */}
                <div style={{ flex: 1, marginBottom: '28px' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    {tier.features.map((feat, fIndex) => (
                      <div
                        key={fIndex}
                        style={{
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: '10px',
                          fontSize: '13px',
                          color: feat.isBold ? '#FFFFFF' : '#C0C4D0',
                          fontWeight: feat.isBold ? 700 : 400,
                          lineHeight: 1.45,
                        }}
                      >
                        <div
                          style={{
                            width: '18px',
                            height: '18px',
                            borderRadius: '50%',
                            backgroundColor: 'rgba(255, 85, 0, 0.12)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexShrink: 0,
                            marginTop: '2px',
                          }}
                        >
                          <Check size={11} color="#FF5500" strokeWidth={3} />
                        </div>
                        <span>{feat.text}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action CTA Button */}
                <motion.button
                  whileTap={{ scale: 0.98 }}
                  onClick={() => onOpenTrialModal(tier.name)}
                  className={isRec ? 'btn-primary' : 'btn-secondary'}
                  style={{
                    width: '100%',
                    padding: '14px 20px',
                    fontSize: '13px',
                    justifyContent: 'center',
                  }}
                >
                  <span>{tier.buttonText}</span>
                  <ArrowRight size={14} />
                </motion.button>
              </SpotlightCard>
            );
          })}
        </div>

        {/* Private Sanctuary Tour & Consultation Card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          style={{
            marginTop: '32px',
            padding: 'clamp(28px, 4vw, 40px)',
            background: 'linear-gradient(135deg, rgba(16, 18, 24, 0.95) 0%, rgba(10, 11, 15, 0.98) 100%)',
            border: '1px solid rgba(255, 85, 0, 0.35)',
            borderRadius: '24px',
            boxShadow: '0 20px 48px -10px rgba(0, 0, 0, 0.8)',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '24px',
          }}
        >
          <div style={{ maxWidth: '640px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
              <Flame size={16} color="#FF5500" />
              <span style={{ fontFamily: 'var(--font-heading)', fontSize: '12px', fontWeight: 800, letterSpacing: '0.12em', color: '#FF5500', textTransform: 'uppercase' }}>
                PRIVATE SANCTUARY ORIENTATION
              </span>
            </div>
            <h3
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1.4rem, 2.5vw, 2rem)',
                color: '#FFFFFF',
                fontWeight: 800,
                textTransform: 'uppercase',
                margin: '0 0 10px 0',
                lineHeight: 1.15,
              }}
            >
              TOUR THE SANCTUARY BEFORE COMMITTING
            </h3>
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '14px',
                color: '#9599A6',
                lineHeight: 1.6,
                margin: 0,
              }}
            >
              Meet with Head Coach Madhu Gowda at Prestige Falcon City. Inspect our Olympic platforms, examine Finnish wood recovery suites, and receive a free biomechanical baseline movement audit.
            </p>
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px', alignItems: 'center' }}>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => onOpenTrialModal('Private Sanctuary Orientation')}
              className="btn-primary"
              style={{
                padding: '16px 32px',
                fontSize: '13px',
              }}
            >
              <span>Book Floor Orientation</span>
              <ArrowRight size={16} />
            </motion.button>
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="https://wa.me/919731444988?text=Hi%20Coach%20Madhu,%20I'd%20like%20to%20schedule%20a%20private%20tour%20of%20Vanara%20Force%20Prestige%20Falcon%20City."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
              style={{
                padding: '16px 28px',
                fontSize: '13px',
              }}
            >
              <span>WhatsApp Concierge</span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
