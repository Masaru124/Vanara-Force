'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TRANSFORMATION_STORIES } from '../data/gymData';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { SpotlightCard } from './SpotlightCard';

interface TransformationVaultProps {
  onOpenTrialModal: () => void;
}

export const TransformationVault: React.FC<TransformationVaultProps> = ({ onOpenTrialModal }) => {
  const [activeStoryIndex, setActiveStoryIndex] = useState(0);
  const story = TRANSFORMATION_STORIES[activeStoryIndex];

  const handleNext = () => {
    setActiveStoryIndex((prev) => (prev + 1) % TRANSFORMATION_STORIES.length);
  };

  const handlePrev = () => {
    setActiveStoryIndex((prev) => (prev - 1 + TRANSFORMATION_STORIES.length) % TRANSFORMATION_STORIES.length);
  };

  return (
    <section id="transformations" className="section-padding" style={{ position: 'relative', background: '#0A0B0E' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <h2 className="section-title">
            THE TRANSFORMATION <span style={{ color: '#FF5500' }}>VAULT</span>
          </h2>
          <p className="section-subtitle">
            Witness the proof of biological and physical adaptation. Every transformation at Vanara Force is audited by medical-grade InBody® body composition scanners and supervised by certified exercise biomechanists.
          </p>
        </div>

        {/* Transformation Showcase Spotlight Card */}
        <div
          className="card-glass"
          style={{
            border: '1px solid rgba(255, 85, 0, 0.35)',
            background: '#0D0E12',
            boxShadow: '0 24px 48px -12px rgba(0, 0, 0, 0.85), 0 8px 16px -4px rgba(255, 85, 0, 0.2)',
            marginBottom: '48px',
            overflow: 'hidden',
          }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={story.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '0',
              }}
            >
              {/* Visual Transformation Before & After Image Pair */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  position: 'relative',
                  minHeight: '360px',
                }}
              >
                {/* Before Panel */}
                <div
                  style={{
                    position: 'relative',
                    backgroundImage: `url(${story.beforeImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    filter: 'grayscale(60%) contrast(110%)',
                  }}
                >
                  <div
                    style={{
                      position: 'absolute',
                      bottom: '16px',
                      left: '16px',
                      padding: '4px 10px',
                      background: 'rgba(7, 7, 9, 0.85)',
                      borderRadius: '4px',
                      fontFamily: 'var(--font-heading)',
                      fontSize: '11px',
                      fontWeight: 800,
                      color: '#C0C3CE',
                      letterSpacing: '0.08em',
                    }}
                  >
                    DAY 1
                  </div>
                </div>

                {/* After Panel */}
                <div
                  style={{
                    position: 'relative',
                    backgroundImage: `url(${story.afterImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    borderLeft: '2px solid #FF5500',
                  }}
                >
                  <div
                    style={{
                      position: 'absolute',
                      bottom: '16px',
                      right: '16px',
                      padding: '4px 10px',
                      background: '#FF5500',
                      borderRadius: '4px',
                      fontFamily: 'var(--font-heading)',
                      fontSize: '11px',
                      fontWeight: 900,
                      color: '#070709',
                      letterSpacing: '0.08em',
                    }}
                  >
                    WEEK {story.weeks}
                  </div>
                </div>
              </div>

              {/* Athlete Profile & Metrics */}
              <div
                style={{
                  padding: 'clamp(28px, 4vw, 44px)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
                  <div>
                    <h3
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: '26px',
                        fontWeight: 900,
                        color: '#FFFFFF',
                        textTransform: 'uppercase',
                      }}
                    >
                      {story.name}, {story.age}
                    </h3>
                    <span style={{ fontSize: '13px', color: '#FF5500', fontWeight: 700 }}>
                      {story.city} &bull; {story.weeks}-Week Transformation
                    </span>
                  </div>

                  {/* Slider Nav Controls */}
                  <div style={{ display: 'flex', gap: '8px' }}>
                    <button
                      onClick={handlePrev}
                      aria-label="Previous Transformation"
                      style={{
                        width: '36px',
                        height: '36px',
                        borderRadius: '50%',
                        background: 'rgba(255, 255, 255, 0.05)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        color: '#FFFFFF',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer',
                      }}
                    >
                      <ChevronLeft size={18} />
                    </button>
                    <button
                      onClick={handleNext}
                      aria-label="Next Transformation"
                      style={{
                        width: '36px',
                        height: '36px',
                        borderRadius: '50%',
                        background: 'rgba(255, 85, 0, 0.2)',
                        border: '1px solid #FF5500',
                        color: '#FF5500',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer',
                      }}
                    >
                      <ChevronRight size={18} />
                    </button>
                  </div>
                </div>

                {/* Verified Metrics Cards */}
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(3, 1fr)',
                    gap: '12px',
                    margin: '20px 0',
                  }}
                >
                  <div style={{ background: 'rgba(255, 255, 255, 0.03)', padding: '14px', borderRadius: '10px', textAlign: 'center' }}>
                    <div style={{ fontSize: '11px', color: '#8E92A0', textTransform: 'uppercase', fontWeight: 700 }}>Total Weight</div>
                    <div className="tabular-nums" style={{ fontFamily: 'var(--font-heading)', fontSize: '18px', fontWeight: 800, color: '#FF5500', marginTop: '4px' }}>
                      {story.stats.weightChange}
                    </div>
                  </div>

                  <div style={{ background: 'rgba(255, 255, 255, 0.03)', padding: '14px', borderRadius: '10px', textAlign: 'center' }}>
                    <div style={{ fontSize: '11px', color: '#8E92A0', textTransform: 'uppercase', fontWeight: 700 }}>Body Fat</div>
                    <div className="tabular-nums" style={{ fontFamily: 'var(--font-heading)', fontSize: '18px', fontWeight: 800, color: '#FFFFFF', marginTop: '4px' }}>
                      {story.stats.bodyFatChange}
                    </div>
                  </div>

                  <div style={{ background: 'rgba(255, 255, 255, 0.03)', padding: '14px', borderRadius: '10px', textAlign: 'center' }}>
                    <div style={{ fontSize: '11px', color: '#8E92A0', textTransform: 'uppercase', fontWeight: 700 }}>Performance</div>
                    <div className="tabular-nums" style={{ fontFamily: 'var(--font-heading)', fontSize: '14px', fontWeight: 800, color: '#FF5500', marginTop: '6px' }}>
                      {story.stats.strengthMetric}
                    </div>
                  </div>
                </div>

                {/* Quote */}
                <blockquote
                  style={{
                    fontSize: '14px',
                    color: '#C6C9D4',
                    lineHeight: 1.65,
                    fontStyle: 'italic',
                    marginBottom: '20px',
                    borderLeft: '2px solid #FF5500',
                    paddingLeft: '14px',
                  }}
                >
                  &ldquo;{story.storyQuote}&rdquo;
                </blockquote>

                <div style={{ fontSize: '12px', color: '#7E8394', marginBottom: '24px' }}>
                  <strong style={{ color: '#FFFFFF' }}>Protocol Employed:</strong> {story.protocol}
                </div>

                <div>
                  <button onClick={onOpenTrialModal} className="btn-primary" style={{ padding: '12px 28px', fontSize: '13px' }}>
                    <span>Begin Your Transformation</span>
                  </button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* The 4 Pillars of the Vanara Transformation Protocol */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '20px',
          }}
        >
          {[
            { step: '01', tag: 'DIAGNOSTICS', title: 'DEXA & InBody 770 Scan', desc: 'Precise baseline segmentation of visceral fat, skeletal muscle mass, and metabolic rate.' },
            { step: '02', tag: 'BIOMECHANICS', title: 'Movement Screening', desc: 'Joint alignment and movement screen to curate an injury-proof lifting split.' },
            { step: '03', tag: 'NUTRITION', title: 'Macro & Adaptogen Fueling', desc: 'Custom nutrition programming coordinated with your daily physical expenditure.' },
            { step: '04', tag: 'BIO-RECOVERY', title: 'Contrast Hydrotherapy', desc: 'Scheduled sauna and ice plunge sessions to ensure complete nervous system reset.' },
          ].map((phase, idx) => (
            <SpotlightCard
              key={phase.step}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
              style={{
                padding: '24px',
                background: 'rgba(16, 18, 23, 0.7)',
                borderRadius: '16px',
                border: '1px solid rgba(255, 255, 255, 0.08)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
                <span style={{ fontFamily: 'var(--font-heading)', fontSize: '10px', fontWeight: 800, color: '#FF5500', letterSpacing: '0.12em' }}>
                  {phase.tag}
                </span>
                <span style={{ fontFamily: 'var(--font-heading)', fontSize: '12px', fontWeight: 900, color: '#606472' }}>
                  {phase.step}
                </span>
              </div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '16px', color: '#FFFFFF', textTransform: 'uppercase', marginBottom: '6px' }}>
                {phase.title}
              </h3>
              <p style={{ fontSize: '13px', color: '#888D9E', lineHeight: 1.6 }}>
                {phase.desc}
              </p>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </section>
  );
};
