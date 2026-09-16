'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Dumbbell, Droplets, Zap, CheckCircle2 } from 'lucide-react';
import { SpotlightCard } from './SpotlightCard';

export const PhilosophySplit: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'training' | 'recovery'>('training');

  return (
    <section id="philosophy" className="section-padding" style={{ position: 'relative', background: '#0A0B0E' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <h2 className="section-title">
            PRIMAL FORCE. <span style={{ color: '#FF5500' }}>ADVANCED RESET.</span>
          </h2>
          <p className="section-subtitle">
            Most fitness centers only address mechanical wear without biological restoration. At Vanara Force, extreme physical exertion is balanced with clinical recovery protocols to forge an unbreakable human constitution.
          </p>

          {/* Interactive Switcher Buttons */}
          <div
            style={{
              display: 'inline-flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              maxWidth: '100%',
              padding: '6px',
              background: '#13151B',
              borderRadius: '9999px',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              marginTop: '32px',
              gap: '6px',
            }}
          >
            <button
              onClick={() => setActiveTab('training')}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '10px clamp(14px, 3vw, 24px)',
                borderRadius: '9999px',
                border: 'none',
                background: activeTab === 'training' ? '#FF5500' : 'transparent',
                color: activeTab === 'training' ? '#070709' : '#FFFFFF',
                fontFamily: 'var(--font-heading)',
                fontSize: '12.5px',
                fontWeight: 800,
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
                cursor: 'pointer',
                transition: 'all 200ms ease',
              }}
            >
              <Dumbbell size={15} />
              <span>Pillar I: Primal Force</span>
            </button>

            <button
              onClick={() => setActiveTab('recovery')}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '10px clamp(14px, 3vw, 24px)',
                borderRadius: '9999px',
                border: 'none',
                background: activeTab === 'recovery' ? '#FFFFFF' : 'transparent',
                color: activeTab === 'recovery' ? '#070709' : '#FFFFFF',
                fontFamily: 'var(--font-heading)',
                fontSize: '12.5px',
                fontWeight: 800,
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
                cursor: 'pointer',
                transition: 'all 200ms ease',
              }}
            >
              <Droplets size={15} />
              <span>Pillar II: Bio-Recovery</span>
            </button>
          </div>
        </div>

        {/* Dual Pillar Comparison Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
            gap: '20px',
            alignItems: 'stretch',
          }}
        >
          {/* Card 1: Primal Force Training */}
          <SpotlightCard
            onClick={() => setActiveTab('training')}
            whileHover={{ y: -4 }}
            transition={{ duration: 0.2 }}
            style={{
              padding: 'clamp(28px, 4vw, 44px)',
              cursor: 'pointer',
              borderColor: activeTab === 'training' ? '#FF5500' : 'rgba(255, 255, 255, 0.08)',
              background: activeTab === 'training' ? 'rgba(255, 85, 0, 0.06)' : 'rgba(16, 18, 23, 0.7)',
              boxShadow: activeTab === 'training'
                ? '0 20px 40px -10px rgba(0, 0, 0, 0.8), 0 8px 16px -4px rgba(255, 85, 0, 0.25)'
                : 'none',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '24px' }}>
              <div
                style={{
                  width: '52px',
                  height: '52px',
                  borderRadius: '14px',
                  background: 'rgba(255, 85, 0, 0.15)',
                  border: '1px solid rgba(255, 85, 0, 0.4)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#FF5500',
                }}
              >
                <Zap size={26} />
              </div>
              <span
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '11px',
                  fontWeight: 800,
                  letterSpacing: '0.14em',
                  color: '#FF5500',
                  textTransform: 'uppercase',
                }}
              >
                PILLAR 01 &bull; KINETIC POWER
              </span>
            </div>

            <h3
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1.3rem, 3.5vw, 1.75rem)',
                fontWeight: 900,
                color: '#FFFFFF',
                textTransform: 'uppercase',
                marginBottom: '14px',
                lineHeight: 1.15,
                overflowWrap: 'break-word',
                wordBreak: 'break-word',
              }}
            >
              PRIMAL STRENGTH & BIOMECHANICS
            </h3>

            <p style={{ color: '#9A9EAA', fontSize: '15px', lineHeight: 1.7, marginBottom: '28px' }}>
              Building bone density, myofibrillar hypertrophy, and animal agility. We pair heavy calibrated Olympic barbells with precision selectorized machines designed to eliminate dead-spots and joint wear.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', borderTop: '1px solid rgba(255, 255, 255, 0.08)', paddingTop: '24px' }}>
              {[
                { title: 'Arsenal & Eleiko Machinery', desc: 'Engineered cam angles for consistent mechanical resistance through the entire rep.' },
                { title: 'Vanara Calisthenics Rig', desc: 'Olympic gymnastics rings, high pegboards, and 60m sled turf for raw body mastery.' },
                { title: 'Combat Octagon & Muay Thai', desc: 'Explosive rotational striking and conditioning inside a full-scale competition ring.' },
                { title: 'VMP Periodized Protocols', desc: 'Science-backed 12-week progressive overload and DEXA-verified milestones.' },
              ].map((item, idx) => (
                <div key={idx} style={{ display: 'flex', gap: '12px' }}>
                  <CheckCircle2 size={18} color="#FF5500" style={{ flexShrink: 0, marginTop: '3px' }} />
                  <div>
                    <strong style={{ color: '#FFFFFF', fontSize: '14px', display: 'block' }}>{item.title}</strong>
                    <span style={{ color: '#888D9E', fontSize: '13px' }}>{item.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </SpotlightCard>

          {/* Card 2: Advanced Bio-Recovery */}
          <SpotlightCard
            onClick={() => setActiveTab('recovery')}
            whileHover={{ y: -4 }}
            transition={{ duration: 0.2 }}
            spotlightColor="rgba(255, 255, 255, 0.12)"
            style={{
              padding: 'clamp(28px, 4vw, 44px)',
              cursor: 'pointer',
              borderColor: activeTab === 'recovery' ? '#FFFFFF' : 'rgba(255, 255, 255, 0.08)',
              background: activeTab === 'recovery' ? 'rgba(255, 255, 255, 0.04)' : 'rgba(16, 18, 23, 0.7)',
              boxShadow: activeTab === 'recovery'
                ? '0 20px 40px -10px rgba(0, 0, 0, 0.8), 0 8px 16px -4px rgba(255, 255, 255, 0.2)'
                : 'none',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '24px' }}>
              <div
                style={{
                  width: '52px',
                  height: '52px',
                  borderRadius: '14px',
                  background: 'rgba(255, 255, 255, 0.1)',
                  border: '1px solid rgba(255, 255, 255, 0.25)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#FFFFFF',
                }}
              >
                <Droplets size={26} />
              </div>
              <span
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '11px',
                  fontWeight: 800,
                  letterSpacing: '0.14em',
                  color: '#FFFFFF',
                  textTransform: 'uppercase',
                }}
              >
                PILLAR 02 &bull; CELLULAR REPAIR
              </span>
            </div>

            <h3
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1.3rem, 3.5vw, 1.75rem)',
                fontWeight: 900,
                color: '#FFFFFF',
                textTransform: 'uppercase',
                marginBottom: '14px',
                lineHeight: 1.15,
                overflowWrap: 'break-word',
                wordBreak: 'break-word',
              }}
            >
              HOLISTIC BIO-RECOVERY SUITES
            </h3>

            <p style={{ color: '#9A9EAA', fontSize: '15px', lineHeight: 1.7, marginBottom: '28px' }}>
              You don&apos;t grow in the gym; you grow during biological restoration. Our dedicated hydrotherapy and cryo suites drop systemic inflammation, accelerate lymphatic drainage, and reset your central nervous system.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', borderTop: '1px solid rgba(255, 255, 255, 0.08)', paddingTop: '24px' }}>
              {[
                { title: 'Sub-Zero Cryo Contrast Plunge', desc: 'Glacial 3°C-5°C immersion circulating ozone water for instant vagus nerve activation.' },
                { title: 'Turkish Eucalyptus Hammam', desc: '100% moisture steam with pure botanical eucalyptus oil for deep bronchiodilation.' },
                { title: 'Nordic Cedar Dry Sauna (85°C)', desc: 'Stimulates Heat Shock Proteins (HSP70) to repair damaged muscle fibers.' },
                { title: 'Hyperice® Compression Recliners', desc: 'Sequential pneumatic compression boots and heated percussion guns in a private lounge.' },
              ].map((item, idx) => (
                <div key={idx} style={{ display: 'flex', gap: '12px' }}>
                  <CheckCircle2 size={18} color="#FFFFFF" style={{ flexShrink: 0, marginTop: '3px' }} />
                  <div>
                    <strong style={{ color: '#FFFFFF', fontSize: '14px', display: 'block' }}>{item.title}</strong>
                    <span style={{ color: '#888D9E', fontSize: '13px' }}>{item.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </SpotlightCard>
        </div>
      </div>
    </section>
  );
};
