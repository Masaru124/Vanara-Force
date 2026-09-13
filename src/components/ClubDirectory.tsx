'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { CLUB_HUBS } from '../data/gymData';
import { MapPin, Phone, Clock, ArrowRight } from 'lucide-react';
import { SpotlightCard } from './SpotlightCard';

interface ClubDirectoryProps {
  onOpenTrialModal: (location?: string) => void;
  selectedCity: string;
}

export const ClubDirectory: React.FC<ClubDirectoryProps> = ({ onOpenTrialModal, selectedCity }) => {
  const hubs = selectedCity === 'All'
    ? CLUB_HUBS
    : CLUB_HUBS.filter((h) => h.city === selectedCity);

  return (
    <section id="clubs" className="section-padding" style={{ position: 'relative', background: '#0A0B0E' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <h2 className="section-title">
            THE SANCTUARY <span style={{ color: '#FF5500' }}>FOOTPRINTS</span>
          </h2>
          <p className="section-subtitle">
            Spanning over 62,000+ square feet of architectural excellence across Mumbai and Bengaluru. Each location features dedicated strength bays, calisthenics rigs, and sub-zero contrast hydrotherapy.
          </p>
        </div>

        {/* Club Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '28px',
          }}
        >
          {hubs.map((hub, idx) => (
            <motion.div
              key={hub.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.45, delay: idx * 0.1 }}
              style={{ height: '100%' }}
            >
              <SpotlightCard
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  overflow: 'hidden',
                  background: 'rgba(16, 18, 23, 0.85)',
                  padding: 0,
                  height: '100%',
                }}
              >
                {/* Hub Image & Square Footage Callout */}
                <div
                  style={{
                    position: 'relative',
                    height: '240px',
                    backgroundImage: `linear-gradient(180deg, rgba(7, 7, 9, 0.2) 0%, rgba(16, 18, 23, 0.95) 100%), url(${hub.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                >
                  {/* Status Badge */}
                  <div
                    style={{
                      position: 'absolute',
                      top: '16px',
                      left: '16px',
                      display: 'flex',
                      gap: '8px',
                    }}
                  >
                    <span
                      style={{
                        padding: '5px 12px',
                        borderRadius: '9999px',
                        background: hub.status === 'Open' ? 'rgba(7, 7, 9, 0.85)' : '#FF5500',
                        border: hub.status === 'Open' ? '1px solid rgba(255, 85, 0, 0.5)' : 'none',
                        color: hub.status === 'Open' ? '#FF5500' : '#070709',
                        fontSize: '11px',
                        fontFamily: 'var(--font-heading)',
                        fontWeight: 800,
                        letterSpacing: '0.08em',
                      }}
                    >
                      {hub.status.toUpperCase()}
                    </span>

                    <span
                      style={{
                        padding: '5px 12px',
                        borderRadius: '9999px',
                        background: 'rgba(255, 255, 255, 0.1)',
                        backdropFilter: 'blur(8px)',
                        border: '1px solid rgba(255, 255, 255, 0.15)',
                        color: '#FFFFFF',
                        fontSize: '11px',
                        fontFamily: 'var(--font-heading)',
                        fontWeight: 700,
                      }}
                    >
                      {hub.city}
                    </span>
                  </div>

                  {/* Spatial Size Badge */}
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
                        fontFamily: 'var(--font-display)',
                        fontSize: '26px',
                        fontWeight: 900,
                        color: '#FFFFFF',
                        lineHeight: 1,
                      }}
                    >
                      <span className="tabular-nums">{hub.sqft.split(' ')[0]}</span> <span style={{ fontSize: '16px', color: '#FF5500' }}>SQ. FT.</span>
                    </div>
                    <div style={{ fontSize: '12px', color: '#B2B6C4', marginTop: '4px' }}>
                      {hub.area}
                    </div>
                  </div>
                </div>

                {/* Hub Info */}
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
                      marginBottom: '12px',
                    }}
                  >
                    {hub.name}
                  </h3>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '20px', fontSize: '13px', color: '#9599A6' }}>
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                      <MapPin size={15} color="#FF5500" style={{ flexShrink: 0, marginTop: '2px' }} />
                      <span>{hub.address}</span>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <Clock size={15} color="#FF5500" style={{ flexShrink: 0 }} />
                      <span>{hub.operatingHours}</span>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <Phone size={15} color="#FF5500" style={{ flexShrink: 0 }} />
                      <span>{hub.phone}</span>
                    </div>
                  </div>

                  {/* Amenities Pills */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '24px', marginTop: 'auto' }}>
                    {hub.amenities.map((amenity, i) => (
                      <span
                        key={i}
                        style={{
                          padding: '4px 10px',
                          background: 'rgba(255, 255, 255, 0.04)',
                          border: '1px solid rgba(255, 255, 255, 0.08)',
                          borderRadius: '6px',
                          fontSize: '11px',
                          color: '#C4C8D4',
                        }}
                      >
                        {amenity}
                      </span>
                    ))}
                  </div>

                  {/* Tour Action Button */}
                  <button
                    onClick={() => onOpenTrialModal(hub.name)}
                    className="btn-primary"
                    style={{
                      width: '100%',
                      padding: '13px',
                      fontSize: '13px',
                    }}
                  >
                    <span>Book Private Club Tour</span>
                    <ArrowRight size={15} />
                  </button>
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
