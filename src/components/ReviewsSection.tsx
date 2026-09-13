'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { REVIEWS_DATA } from '../data/gymData';
import { Star, CheckCircle2 } from 'lucide-react';
import { SpotlightCard } from './SpotlightCard';

export const ReviewsSection: React.FC = () => {
  return (
    <section
      id="reviews"
      style={{
        padding: '110px 0',
        backgroundColor: '#070709',
        position: 'relative',
        borderTop: '1px solid rgba(255, 255, 255, 0.06)',
      }}
    >
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2rem, 4vw, 3.2rem)',
              color: '#FFFFFF',
              fontWeight: 800,
              letterSpacing: '-0.02em',
              textTransform: 'uppercase',
            }}
          >
            MEMBER <span style={{ color: '#FF5500' }}>EXPERIENCES</span>
          </h2>
          <p
            style={{
              fontFamily: 'var(--font-body)',
              color: '#A1A7B5',
              fontSize: '1rem',
              maxWidth: '640px',
              margin: '14px auto 0 auto',
            }}
          >
            Real feedback from Bangalore athletes, professionals, and lifters training daily at our Prestige Falcon City sanctuary.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '24px',
          }}
        >
          {REVIEWS_DATA.map((rev, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: idx * 0.07 }}
              style={{ height: '100%' }}
            >
              <SpotlightCard
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                style={{
                  backgroundColor: '#101116',
                  borderRadius: '18px',
                  padding: '28px',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  height: '100%',
                }}
              >
                <div>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginBottom: '16px',
                    }}
                  >
                    <div style={{ display: 'flex', gap: '3px' }}>
                      {[...Array(rev.rating || 5)].map((_, i) => (
                        <Star key={i} size={16} fill="#FF5500" color="#FF5500" />
                      ))}
                    </div>
                    <span
                      style={{
                        fontSize: '11px',
                        color: 'rgba(236, 233, 225, 0.45)',
                        fontFamily: 'var(--font-body)',
                      }}
                    >
                      {rev.timeAgo}
                    </span>
                  </div>

                  <p
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '14px',
                      lineHeight: 1.7,
                      color: '#ECE9E1',
                      fontStyle: 'italic',
                      marginBottom: '20px',
                    }}
                  >
                    &ldquo;{rev.review}&rdquo;
                  </p>
                </div>

                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    borderTop: '1px solid rgba(255, 255, 255, 0.06)',
                    paddingTop: '16px',
                  }}
                >
                  <div
                    style={{
                      width: '38px',
                      height: '38px',
                      borderRadius: '50%',
                      backgroundColor: 'rgba(255, 85, 0, 0.15)',
                      border: '1px solid rgba(255, 85, 0, 0.4)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#FF5500',
                      fontFamily: 'var(--font-heading)',
                      fontWeight: 800,
                      fontSize: '14px',
                    }}
                  >
                    {rev.name.charAt(0)}
                  </div>
                  <div>
                    <div
                      style={{
                        fontFamily: 'var(--font-heading)',
                        fontSize: '15px',
                        fontWeight: 800,
                        color: '#ECE9E1',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                      }}
                    >
                      <span>{rev.name}</span>
                      <CheckCircle2 size={14} color="#FF5500" />
                    </div>
                    <div
                      style={{
                        fontSize: '11px',
                        color: 'rgba(236, 233, 225, 0.5)',
                        marginTop: '1px',
                      }}
                    >
                      Verified Google Member
                    </div>
                  </div>
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
