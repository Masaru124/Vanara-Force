'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, ArrowRight, CheckCircle2, RotateCcw, MessageSquare } from 'lucide-react';
import { SpotlightCard } from './SpotlightCard';

export const PlanQuizSection: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [goal, setGoal] = useState('Muscle Building & Strength');
  const [experience, setExperience] = useState('Intermediate (1 to 3 years)');
  const [schedule, setSchedule] = useState('4 to 5 Days / Week');
  const [nutritionPreference, setNutritionPreference] = useState('Balanced High-Protein (Vegetarian / Non-Veg)');
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const goals = [
    'Muscle Building & Strength',
    'Sustainable Fat Loss & Tone',
    'Athletic Power & Conditioning',
    'Mobility, Posture & Recovery',
  ];

  const experienceLevels = [
    'Complete Beginner (< 6 months)',
    'Intermediate (1 to 3 years)',
    'Advanced Lifter (3+ years)',
    'Rebuilding after Injury / Break',
  ];

  const schedules = [
    '3 Days / Week (Focus Sessions)',
    '4 to 5 Days / Week (Recommended)',
    '6 Days / Week (High Volume)',
  ];

  const handleComplete = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    const whatsappMessage = `*VANARA FORCE | Fitness Consultation Assessment*
*Name:* ${fullName || 'Athlete'}
*Phone:* ${phone || 'Not specified'}
*Primary Goal:* ${goal}
*Experience:* ${experience}
*Schedule Commitment:* ${schedule}
*Nutrition Preference:* ${nutritionPreference}

Hi Coach Madhu, I completed the assessment on the Vanara Force website. Please share my customized training & nutrition blueprint.`;

    const encoded = encodeURIComponent(whatsappMessage);
    window.open(`https://wa.me/919731444988?text=${encoded}`, '_blank');
  };

  return (
    <section
      id="quiz"
      style={{
        padding: '110px 0',
        backgroundColor: '#0A0B0E',
        position: 'relative',
        borderTop: '1px solid rgba(255, 255, 255, 0.06)',
      }}
    >
      <div className="container" style={{ maxWidth: '840px' }}>
        <div style={{ marginBottom: '40px', borderBottom: '1px solid rgba(255, 255, 255, 0.08)', paddingBottom: '28px' }}>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.4rem, 4.5vw, 3.4rem)',
              color: '#FFFFFF',
              fontWeight: 800,
              letterSpacing: '-0.02em',
              textTransform: 'uppercase',
              margin: '0 0 12px 0',
              lineHeight: 1.1,
              overflowWrap: 'break-word',
              wordBreak: 'break-word',
            }}
          >
            GET YOUR <span style={{ color: '#FF5500' }}>PERSONALIZED PLAN</span>
          </h2>
          <p
            style={{
              fontFamily: 'var(--font-body)',
              color: '#A1A7B5',
              fontSize: '1rem',
              maxWidth: '620px',
              margin: 0,
              lineHeight: 1.6,
            }}
          >
            Take our 60-second assessment. Head Coach Madhu Gowda will review your answers and draft a targeted training protocol for you.
          </p>
        </div>

        <SpotlightCard
          style={{
            backgroundColor: '#111218',
            borderRadius: '24px',
            border: '1.5px solid rgba(255, 85, 0, 0.35)',
            padding: 'clamp(24px, 5vw, 44px)',
            boxShadow: '0 24px 48px -12px rgba(0, 0, 0, 0.85)',
          }}
        >
          {/* Progress Steps */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              marginBottom: '36px',
              borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
              paddingBottom: '20px',
            }}
          >
            {[1, 2, 3, 4].map((step) => (
              <div
                key={step}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  color: currentStep >= step ? '#FF5500' : 'rgba(236, 233, 225, 0.4)',
                  fontFamily: 'var(--font-heading)',
                  fontSize: '13px',
                  fontWeight: 800,
                }}
              >
                <div
                  style={{
                    width: '26px',
                    height: '26px',
                    borderRadius: '50%',
                    backgroundColor: currentStep >= step ? '#FF5500' : 'rgba(255, 255, 255, 0.08)',
                    color: currentStep >= step ? '#070709' : '#ECE9E1',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '12px',
                    fontWeight: 900,
                  }}
                >
                  {step}
                </div>
                <span className="hidden sm:inline">
                  {step === 1 && 'Goal'}
                  {step === 2 && 'Experience'}
                  {step === 3 && 'Schedule'}
                  {step === 4 && 'Details'}
                </span>
              </div>
            ))}
          </div>

          {!submitted ? (
            <div>
              {/* Step 1: Goal */}
              {currentStep === 1 && (
                <div>
                  <h3
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: '20px',
                      color: '#ECE9E1',
                      fontWeight: 800,
                      marginBottom: '20px',
                    }}
                  >
                    What is your primary physical objective?
                  </h3>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))', gap: '14px', marginBottom: '32px' }}>
                    {goals.map((g) => (
                      <button
                        key={g}
                        type="button"
                        onClick={() => setGoal(g)}
                        style={{
                          textAlign: 'left',
                          padding: '16px 20px',
                          borderRadius: '12px',
                          backgroundColor: goal === g ? 'rgba(255, 85, 0, 0.15)' : 'rgba(255, 255, 255, 0.03)',
                          border: goal === g ? '1.5px solid #FF5500' : '1px solid rgba(255, 255, 255, 0.08)',
                          color: goal === g ? '#FFFFFF' : '#ECE9E1',
                          fontFamily: 'var(--font-heading)',
                          fontSize: '14px',
                          fontWeight: 700,
                          cursor: 'pointer',
                          transition: 'all 200ms ease',
                        }}
                      >
                        {g}
                      </button>
                    ))}
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'flex-end', flexWrap: 'wrap', gap: '12px' }}>
                    <button
                      type="button"
                      onClick={() => setCurrentStep(2)}
                      className="btn-primary"
                      style={{ padding: '14px 28px' }}
                    >
                      <span>Next: Experience</span>
                      <ArrowRight size={16} />
                    </button>
                  </div>
                </div>
              )}

              {/* Step 2: Experience */}
              {currentStep === 2 && (
                <div>
                  <h3
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: '20px',
                      color: '#ECE9E1',
                      fontWeight: 800,
                      marginBottom: '20px',
                    }}
                  >
                    What is your current training experience level?
                  </h3>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))', gap: '14px', marginBottom: '32px' }}>
                    {experienceLevels.map((exp) => (
                      <button
                        key={exp}
                        type="button"
                        onClick={() => setExperience(exp)}
                        style={{
                          textAlign: 'left',
                          padding: '16px 20px',
                          borderRadius: '12px',
                          backgroundColor: experience === exp ? 'rgba(255, 85, 0, 0.15)' : 'rgba(255, 255, 255, 0.03)',
                          border: experience === exp ? '1.5px solid #FF5500' : '1px solid rgba(255, 255, 255, 0.08)',
                          color: experience === exp ? '#FFFFFF' : '#ECE9E1',
                          fontFamily: 'var(--font-heading)',
                          fontSize: '14px',
                          fontWeight: 700,
                          cursor: 'pointer',
                        }}
                      >
                        {exp}
                      </button>
                    ))}
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px' }}>
                    <button
                      type="button"
                      onClick={() => setCurrentStep(1)}
                      style={{
                        padding: '14px 24px',
                        backgroundColor: 'transparent',
                        border: '1px solid rgba(255, 255, 255, 0.15)',
                        borderRadius: '9999px',
                        color: '#ECE9E1',
                        cursor: 'pointer',
                      }}
                    >
                      Back
                    </button>
                    <button
                      type="button"
                      onClick={() => setCurrentStep(3)}
                      className="btn-primary"
                      style={{ padding: '14px 28px' }}
                    >
                      <span>Next: Schedule</span>
                      <ArrowRight size={16} />
                    </button>
                  </div>
                </div>
              )}

              {/* Step 3: Schedule */}
              {currentStep === 3 && (
                <div>
                  <h3
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: '20px',
                      color: '#ECE9E1',
                      fontWeight: 800,
                      marginBottom: '20px',
                    }}
                  >
                    How many days per week can you dedicate?
                  </h3>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))', gap: '14px', marginBottom: '32px' }}>
                    {schedules.map((s) => (
                      <button
                        key={s}
                        type="button"
                        onClick={() => setSchedule(s)}
                        style={{
                          textAlign: 'left',
                          padding: '16px 20px',
                          borderRadius: '12px',
                          backgroundColor: schedule === s ? 'rgba(255, 85, 0, 0.15)' : 'rgba(255, 255, 255, 0.03)',
                          border: schedule === s ? '1.5px solid #FF5500' : '1px solid rgba(255, 255, 255, 0.08)',
                          color: schedule === s ? '#FFFFFF' : '#ECE9E1',
                          fontFamily: 'var(--font-heading)',
                          fontSize: '14px',
                          fontWeight: 700,
                          cursor: 'pointer',
                        }}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px' }}>
                    <button
                      type="button"
                      onClick={() => setCurrentStep(2)}
                      style={{
                        padding: '14px 24px',
                        backgroundColor: 'transparent',
                        border: '1px solid rgba(255, 255, 255, 0.15)',
                        borderRadius: '9999px',
                        color: '#ECE9E1',
                        cursor: 'pointer',
                      }}
                    >
                      Back
                    </button>
                    <button
                      type="button"
                      onClick={() => setCurrentStep(4)}
                      className="btn-primary"
                      style={{ padding: '14px 28px' }}
                    >
                      <span>Next: Contact Details</span>
                      <ArrowRight size={16} />
                    </button>
                  </div>
                </div>
              )}

              {/* Step 4: Contact & WhatsApp Submission */}
              {currentStep === 4 && (
                <form onSubmit={handleComplete}>
                  <h3
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: '20px',
                      color: '#ECE9E1',
                      fontWeight: 800,
                      marginBottom: '10px',
                    }}
                  >
                    Where should Coach Madhu send your plan?
                  </h3>
                  <p style={{ fontSize: '13px', color: 'rgba(236, 233, 225, 0.65)', marginBottom: '24px' }}>
                    We will format your answers and open a direct WhatsApp chat with Coach Madhu (+91 97314 44988).
                  </p>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '28px' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '12px', fontWeight: 800, color: '#ECE9E1', marginBottom: '6px' }}>
                        YOUR FULL NAME
                      </label>
                      <input
                        type="text"
                        required
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="e.g. Arjun Sharma"
                        style={{
                          width: '100%',
                          padding: '14px 18px',
                          borderRadius: '10px',
                          backgroundColor: '#070709',
                          border: '1px solid rgba(255, 255, 255, 0.15)',
                          color: '#FFFFFF',
                          fontFamily: 'var(--font-body)',
                          fontSize: '14px',
                          outline: 'none',
                        }}
                      />
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '12px', fontWeight: 800, color: '#ECE9E1', marginBottom: '6px' }}>
                        WHATSAPP PHONE NUMBER
                      </label>
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+91 98765 43210"
                        style={{
                          width: '100%',
                          padding: '14px 18px',
                          borderRadius: '10px',
                          backgroundColor: '#070709',
                          border: '1px solid rgba(255, 255, 255, 0.15)',
                          color: '#FFFFFF',
                          fontFamily: 'var(--font-body)',
                          fontSize: '14px',
                          outline: 'none',
                        }}
                      />
                    </div>
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px' }}>
                    <button
                      type="button"
                      onClick={() => setCurrentStep(3)}
                      style={{
                        padding: '14px 24px',
                        backgroundColor: 'transparent',
                        border: '1px solid rgba(255, 255, 255, 0.15)',
                        borderRadius: '9999px',
                        color: '#ECE9E1',
                        cursor: 'pointer',
                      }}
                    >
                      Back
                    </button>
                    <button
                      type="submit"
                      className="btn-primary"
                      style={{ padding: '14px 32px' }}
                    >
                      <MessageSquare size={16} />
                      <span>Dispatch to WhatsApp</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          ) : (
            <div style={{ textAlign: 'center', padding: '30px 10px' }}>
              <div
                style={{
                  width: '60px',
                  height: '60px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(255, 85, 0, 0.15)',
                  color: '#FF5500',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 20px auto',
                }}
              >
                <CheckCircle2 size={32} />
              </div>
              <h3
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '24px',
                  fontWeight: 900,
                  color: '#ECE9E1',
                  marginBottom: '10px',
                }}
              >
                Assessment Dispatched!
              </h3>
              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '14px',
                  color: 'rgba(236, 233, 225, 0.75)',
                  maxWidth: '520px',
                  margin: '0 auto 24px auto',
                  lineHeight: 1.6,
                }}
              >
                Your assessment data has been prepared for Coach Madhu Gowda (+91 97314 44988). Check your WhatsApp window to send the generated blueprint request.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSubmitted(false);
                  setCurrentStep(1);
                }}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '12px 24px',
                  borderRadius: '9999px',
                  backgroundColor: 'rgba(255, 255, 255, 0.06)',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  color: '#ECE9E1',
                  cursor: 'pointer',
                  fontSize: '13px',
                }}
              >
                <RotateCcw size={14} />
                <span>Take Assessment Again</span>
              </button>
            </div>
          )}
        </SpotlightCard>
      </div>
    </section>
  );
};
