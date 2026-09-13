'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GROUPX_CLASSES } from '../data/gymData';
import { GroupXClass } from '../types';
import { Clock, Flame, MapPin, User, ChevronRight, Check } from 'lucide-react';
import { SpotlightCard } from './SpotlightCard';

interface GroupXScheduleProps {
  onOpenTrialModal: (preselectedClass?: string) => void;
}

export const GroupXSchedule: React.FC<GroupXScheduleProps> = ({ onOpenTrialModal }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [reservedClasses, setReservedClasses] = useState<Record<string, boolean>>({});

  const filterCategories = [
    { id: 'all', label: 'All Curriculums' },
    { id: 'agility', label: 'Primal Agility' },
    { id: 'strength', label: 'Iron HIIT & Strength' },
    { id: 'combat', label: 'Combat Octagon' },
    { id: 'mobility', label: 'Reformer & Yoga' },
    { id: 'recovery', label: 'Cryo Breathwork' },
  ];

  const filteredClasses = activeCategory === 'all'
    ? GROUPX_CLASSES
    : GROUPX_CLASSES.filter((c) => c.category === activeCategory);

  const handleReserve = (cls: GroupXClass) => {
    setReservedClasses((prev) => ({ ...prev, [cls.id]: true }));
    onOpenTrialModal(cls.title);
  };

  return (
    <section id="groupx" className="section-padding" style={{ position: 'relative', background: '#070709' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <h2 className="section-title">
            COMMUNITY <span style={{ color: '#FF5500' }}>POWER & MASTERY</span>
          </h2>
          <p className="section-subtitle">
            Curated small-group masterclasses led by India&apos;s foremost Olympic lifting coaches, calisthenics masters, and martial artists. High energy, zero ego.
          </p>

          {/* Interactive Category Filter Pills */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '8px',
              marginTop: '32px',
            }}
          >
            {filterCategories.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  style={{
                    padding: '8px 18px',
                    borderRadius: '9999px',
                    border: isActive ? '1px solid #FF5500' : '1px solid rgba(255, 255, 255, 0.1)',
                    background: isActive ? '#FF5500' : 'rgba(255, 255, 255, 0.04)',
                    color: isActive ? '#070709' : '#C2C5D0',
                    fontFamily: 'var(--font-heading)',
                    fontSize: '12px',
                    fontWeight: 800,
                    textTransform: 'uppercase',
                    letterSpacing: '0.06em',
                    cursor: 'pointer',
                    transition: 'all 200ms ease',
                  }}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Classes Card Grid */}
        <motion.div
          layout
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '24px',
          }}
        >
          <AnimatePresence>
            {filteredClasses.map((cls) => {
              const isReserved = !!reservedClasses[cls.id];
              return (
                <motion.div
                  layout
                  key={cls.id}
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.25 }}
                  style={{ height: '100%' }}
                >
                  <SpotlightCard
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.2 }}
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      overflow: 'hidden',
                      background: 'rgba(15, 17, 22, 0.85)',
                      padding: 0,
                      height: '100%',
                    }}
                  >
                    {/* Class Image Preview */}
                    <div
                      style={{
                        position: 'relative',
                        height: '190px',
                        backgroundImage: `linear-gradient(180deg, rgba(7, 7, 9, 0.15) 0%, rgba(15, 17, 22, 0.95) 100%), url(${cls.image})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                      }}
                    >
                      <div
                        style={{
                          position: 'absolute',
                          top: '14px',
                          left: '14px',
                          padding: '5px 12px',
                          borderRadius: '9999px',
                          background: 'rgba(7, 7, 9, 0.85)',
                          border: '1px solid rgba(255, 85, 0, 0.4)',
                          fontSize: '10.5px',
                          fontFamily: 'var(--font-heading)',
                          fontWeight: 800,
                          color: '#FF5500',
                          letterSpacing: '0.08em',
                        }}
                      >
                        {cls.tag}
                      </div>

                      {/* Intensity Rating Dots */}
                      <div
                        style={{
                          position: 'absolute',
                          top: '14px',
                          right: '14px',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '4px',
                          background: 'rgba(7, 7, 9, 0.75)',
                          padding: '4px 8px',
                          borderRadius: '9999px',
                          border: '1px solid rgba(255, 255, 255, 0.1)',
                        }}
                      >
                        <span style={{ fontSize: '10px', color: '#888D9E', marginRight: '3px' }}>INTENSITY</span>
                        {[1, 2, 3, 4, 5].map((level) => (
                          <div
                            key={level}
                            style={{
                              width: '6px',
                              height: '6px',
                              borderRadius: '50%',
                              background: level <= cls.intensity ? '#FF5500' : 'rgba(255, 255, 255, 0.2)',
                            }}
                          />
                        ))}
                      </div>

                      <div
                        style={{
                          position: 'absolute',
                          bottom: '12px',
                          left: '16px',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '8px',
                          color: '#FFFFFF',
                          fontSize: '12px',
                          fontFamily: 'var(--font-heading)',
                          fontWeight: 700,
                        }}
                      >
                        <Clock size={14} color="#FF5500" />
                        <span>{cls.timeSlot} &bull; {cls.durationMinutes} MINS</span>
                      </div>
                    </div>

                    {/* Class Content */}
                    <div
                      style={{
                        padding: '22px',
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
                          marginBottom: '8px',
                        }}
                      >
                        {cls.title}
                      </h3>

                      <p style={{ fontSize: '13.5px', color: '#9DA1B0', lineHeight: 1.6, marginBottom: '20px' }}>
                        {cls.description}
                      </p>

                      {/* Metadata Row */}
                      <div
                        style={{
                          display: 'grid',
                          gridTemplateColumns: '1fr 1fr',
                          gap: '10px',
                          padding: '12px',
                          background: 'rgba(255, 255, 255, 0.03)',
                          borderRadius: '10px',
                          marginBottom: '20px',
                          fontSize: '12px',
                        }}
                      >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#C8CBD6' }}>
                          <User size={13} color="#FF5500" />
                          <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{cls.coach}</span>
                        </div>

                        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#C8CBD6' }}>
                          <Flame size={13} color="#FF5500" />
                          <span>{cls.caloriesBurn}</span>
                        </div>

                        <div style={{ gridColumn: 'span 2', display: 'flex', alignItems: 'center', gap: '6px', color: '#888E9E' }}>
                          <MapPin size={13} color="#888E9E" />
                          <span>{cls.room}</span>
                        </div>
                      </div>

                      {/* Reserve Action Button */}
                      <button
                        onClick={() => handleReserve(cls)}
                        className={isReserved ? 'btn-secondary' : 'btn-primary'}
                        style={{
                          width: '100%',
                          padding: '12px',
                          fontSize: '13px',
                          marginTop: 'auto',
                        }}
                      >
                        {isReserved ? (
                          <>
                            <Check size={16} color="#FF5500" />
                            <span>Spot Reserved &bull; Details Sent</span>
                          </>
                        ) : (
                          <>
                            <span>Reserve Spot in Class</span>
                            <ChevronRight size={15} />
                          </>
                        )}
                      </button>
                    </div>
                  </SpotlightCard>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};
