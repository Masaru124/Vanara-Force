'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ARENA_ZONES } from '../data/gymData';
import { ArenaZone } from '../types';
import { Dumbbell, Activity, Shield, Sparkles, ArrowRight, CheckCircle } from 'lucide-react';
import { SpotlightCard } from './SpotlightCard';

interface ArenaGridProps {
  onOpenTrialModal: () => void;
}

export const ArenaGrid: React.FC<ArenaGridProps> = ({ onOpenTrialModal }) => {
  const [selectedZone, setSelectedZone] = useState<ArenaZone>(ARENA_ZONES[0]);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Dumbbell': return <Dumbbell size={20} color="#FF5500" />;
      case 'Activity': return <Activity size={20} color="#FF5500" />;
      case 'Shield': return <Shield size={20} color="#FF5500" />;
      case 'Sparkles': return <Sparkles size={20} color="#FF5500" />;
      default: return <Dumbbell size={20} color="#FF5500" />;
    }
  };

  return (
    <section id="arenas" className="section-padding" style={{ position: 'relative', background: '#070709' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <h2 className="section-title">
            THE VANARA <span style={{ color: '#FF5500' }}>ARENAS</span>
          </h2>
          <p className="section-subtitle">
            Every arena at Vanara Force is custom-fabricated to eliminate bottlenecks and joint stress. Designed for uncompromising intensity, fluid agility, and surgical muscle hypertrophy.
          </p>
        </div>

        {/* Arenas Interactive Selector Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '20px',
            marginBottom: '36px',
          }}
        >
          {ARENA_ZONES.map((zone) => {
            const isSelected = selectedZone.id === zone.id;
            return (
              <SpotlightCard
                key={zone.id}
                onClick={() => setSelectedZone(zone)}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                style={{
                  padding: '24px',
                  cursor: 'pointer',
                  borderColor: isSelected ? '#FF5500' : 'rgba(255, 255, 255, 0.08)',
                  background: isSelected ? 'rgba(255, 85, 0, 0.12)' : 'rgba(16, 18, 23, 0.7)',
                  boxShadow: isSelected
                    ? '0 16px 32px -6px rgba(0, 0, 0, 0.75), 0 6px 16px -4px rgba(255, 85, 0, 0.3)'
                    : 'none',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
                  <div
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '10px',
                      background: 'rgba(255, 85, 0, 0.15)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    {getIcon(zone.iconName)}
                  </div>
                  <span
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: '11px',
                      fontWeight: 800,
                      color: isSelected ? '#FF5500' : '#8E92A0',
                      letterSpacing: '0.08em',
                    }}
                  >
                    {zone.sqft}
                  </span>
                </div>

                <h4
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '18px',
                    fontWeight: 800,
                    color: '#FFFFFF',
                    textTransform: 'uppercase',
                    marginBottom: '6px',
                  }}
                >
                  {zone.title}
                </h4>

                <p style={{ fontSize: '13px', color: '#9599A6' }}>
                  {zone.subtitle}
                </p>
              </SpotlightCard>
            );
          })}
        </div>

        {/* Detailed Spotlight View of Selected Arena */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedZone.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className="card-glass"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              overflow: 'hidden',
              border: '1px solid rgba(255, 85, 0, 0.35)',
              boxShadow: '0 24px 48px -12px rgba(0, 0, 0, 0.85), 0 8px 16px -4px rgba(255, 85, 0, 0.2)',
            }}
          >
            {/* Spotlight Image with Gradient Overlay */}
            <div
              style={{
                position: 'relative',
                minHeight: '380px',
                backgroundImage: `linear-gradient(180deg, rgba(7, 7, 9, 0.1) 0%, rgba(7, 7, 9, 0.9) 100%), url(${selectedZone.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
            <div
              style={{
                position: 'absolute',
                top: '20px',
                left: '20px',
                padding: '8px 16px',
                borderRadius: '9999px',
                background: 'rgba(7, 8, 10, 0.85)',
                backdropFilter: 'blur(12px)',
                border: '1px solid rgba(255, 85, 0, 0.4)',
                fontFamily: 'var(--font-heading)',
                fontSize: '12px',
                fontWeight: 800,
                color: '#FF5500',
                letterSpacing: '0.1em',
              }}
            >
              {selectedZone.equipmentBrand}
            </div>

            <div
              style={{
                position: 'absolute',
                bottom: '24px',
                left: '24px',
                right: '24px',
              }}
            >
              <span style={{ fontSize: '12px', letterSpacing: '0.15em', color: '#FF5500', fontWeight: 800, textTransform: 'uppercase' }}>
                SPATIAL SPECIFICATION
              </span>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '26px', color: '#FFFFFF', textTransform: 'uppercase', marginTop: '4px' }}>
                {selectedZone.title} &bull; {selectedZone.sqft}
              </h3>
            </div>
          </div>

          {/* Spotlight Details & Highlights */}
          <div
            style={{
              padding: 'clamp(28px, 4vw, 44px)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              background: '#0E1015',
            }}
          >
            <div
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '11px',
                fontWeight: 800,
                color: '#FF5500',
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                marginBottom: '8px',
              }}
            >
              ZONE PROFILE & EQUIPMENT MATRIX
            </div>

            <h3
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '24px',
                fontWeight: 900,
                color: '#FFFFFF',
                textTransform: 'uppercase',
                marginBottom: '14px',
              }}
            >
              {selectedZone.subtitle}
            </h3>

            <p style={{ color: '#A0A4B2', fontSize: '15px', lineHeight: 1.7, marginBottom: '24px' }}>
              {selectedZone.description}
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '32px' }}>
              {selectedZone.highlights.map((item, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                  <CheckCircle size={16} color="#FF5500" style={{ flexShrink: 0, marginTop: '3px' }} />
                  <span style={{ color: '#E2E4E9', fontSize: '14px' }}>{item}</span>
                </div>
              ))}
            </div>

            <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
              <button
                onClick={onOpenTrialModal}
                className="btn-primary"
                style={{ padding: '12px 28px', fontSize: '13px' }}
              >
                <span>Book Arena Workout</span>
                <ArrowRight size={15} />
              </button>

              <a
                href="#clubs"
                className="btn-secondary"
                style={{ padding: '12px 24px', fontSize: '13px' }}
              >
                <span>View Club Locations</span>
              </a>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
      </div>
    </section>
  );
};
