'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ShieldCheck, Flame, ArrowRight, Sparkles, MessageCircle, PhoneCall, ExternalLink } from 'lucide-react';
import { TrialLeadForm } from '../types';

interface TrialModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedItem?: string;
}

export const TrialModal: React.FC<TrialModalProps> = ({
  isOpen,
  onClose,
  preselectedItem,
}) => {
  const [formData, setFormData] = useState<TrialLeadForm>({
    fullName: '',
    mobile: '',
    email: '',
    preferredHub: 'Vanara Force Sanctuary | Prestige Falcon City, Bengaluru',
    primaryGoal: 'Heavy Strength & Muscle Hypertrophy',
    experienceLevel: 'Intermediate (1 to 3 years training)',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  if (!isOpen) return null;

  const getWhatsAppUrl = () => {
    const refId = `VF-${(formData.mobile || '7788').replace(/\D/g, '').slice(-4) || '9153'}`;
    const message = `*VANARA FORCE | Sanctuary Consultation Request*
*Ref ID:* ${refId}
*Name:* ${formData.fullName || 'Athlete'}
*WhatsApp Mobile:* ${formData.mobile || 'Not specified'}
*Email:* ${formData.email || 'Not specified'}
*Sanctuary:* ${formData.preferredHub}
*Primary Objective:* ${formData.primaryGoal}
${preselectedItem ? `*Inquiry Topic:* ${preselectedItem}\n` : ''}
Hi Coach Madhu, I submitted my consultation request on the Vanara Force website. Please confirm my sanctuary appointment & orientation slot.`;

    return `https://wa.me/919731444988?text=${encodeURIComponent(message)}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    const waUrl = getWhatsAppUrl();

    // Direct dispatch to Coach Madhu on WhatsApp
    try {
      window.open(waUrl, '_blank');
    } catch {
      // Browser popup blocker fallback - user can click the direct button on confirmation
    }

    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
    }, 600);
  };

  const handleResetAndClose = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 1000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 'clamp(10px, 3vw, 20px)',
        backgroundColor: 'rgba(5, 5, 7, 0.88)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
      }}
      onClick={(e) => {
        if (e.target === e.currentTarget) handleResetAndClose();
      }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 15 }}
        transition={{ duration: 0.25, ease: 'easeOut' }}
        className="card-glass"
        style={{
          width: '100%',
          maxWidth: '560px',
          maxHeight: '90vh',
          overflowY: 'auto',
          background: '#0D0E13',
          border: '1px solid rgba(255, 85, 0, 0.45)',
          borderRadius: '24px',
          padding: 'clamp(18px, 4vw, 36px)',
          boxShadow: '0 28px 64px -12px rgba(0, 0, 0, 0.95), 0 10px 24px -4px rgba(255, 85, 0, 0.3)',
          position: 'relative',
        }}
      >
        {/* Close Button */}
        <button
          onClick={handleResetAndClose}
          aria-label="Close Modal"
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            background: 'rgba(255, 255, 255, 0.05)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: '50%',
            width: '36px',
            height: '36px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#FFFFFF',
            cursor: 'pointer',
            transition: 'all 150ms ease',
          }}
        >
          <X size={18} />
        </button>

        {isSubmitted ? (
          /* Confirmation State */
          <div style={{ textAlign: 'center', padding: '16px 0' }}>
            <div
              style={{
                width: '64px',
                height: '64px',
                borderRadius: '50%',
                background: 'rgba(255, 85, 0, 0.15)',
                border: '2px solid #FF5500',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 16px auto',
                boxShadow: '0 8px 20px -4px rgba(255, 85, 0, 0.4)',
              }}
            >
              <Sparkles size={32} color="#FF5500" />
            </div>

            <div className="badge-tag" style={{ margin: '0 auto 12px auto', whiteSpace: 'normal', textAlign: 'center', wordBreak: 'break-word', maxWidth: '100%' }}>
              <span>CONSULTATION CONFIRMED &bull; ID: VF-{(formData.mobile || '7788').replace(/\D/g, '').slice(-4) || '9153'}</span>
            </div>

            <h3
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '26px',
                fontWeight: 900,
                color: '#FFFFFF',
                textTransform: 'uppercase',
                marginBottom: '10px',
              }}
            >
              WELCOME TO THE FORCE
            </h3>

            <p style={{ color: '#A2A6B4', fontSize: '14px', lineHeight: 1.6, marginBottom: '18px' }}>
              Your consultation request has been registered for <strong style={{ color: '#FFFFFF' }}>{formData.fullName}</strong>. To immediately lock in your private orientation slot and bypass the queue, connect directly with Head Coach Madhu Gowda on WhatsApp.
            </p>

            <div
              style={{
                padding: '16px',
                background: 'rgba(255, 255, 255, 0.03)',
                border: '1px dashed rgba(255, 85, 0, 0.4)',
                borderRadius: '12px',
                textAlign: 'left',
                fontSize: '12.5px',
                color: '#D2D5E0',
                marginBottom: '20px',
              }}
            >
              <div><strong>Sanctuary:</strong> {formData.preferredHub}</div>
              <div style={{ marginTop: '4px' }}><strong>Primary Objective:</strong> {formData.primaryGoal}</div>
              <div style={{ marginTop: '4px' }}><strong>Direct Concierge:</strong> Coach Madhu Gowda (+91 97314 44988)</div>
              <div style={{ marginTop: '4px' }}><strong>Status:</strong> Consultation Docket Ready</div>
            </div>

            {/* Direct WhatsApp Action Button */}
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '10px',
                width: '100%',
                padding: '15px 20px',
                borderRadius: '12px',
                background: 'linear-gradient(135deg, #FF6E1A 0%, #FF5500 100%)',
                color: '#050507',
                fontWeight: 900,
                fontSize: '14px',
                textTransform: 'uppercase',
                textDecoration: 'none',
                letterSpacing: '0.04em',
                marginBottom: '10px',
                boxShadow: '0 8px 24px -4px rgba(255, 85, 0, 0.45)',
                transition: 'all 0.2s ease',
              }}
            >
              <MessageCircle size={18} color="#050507" />
              <span>Send Details to Coach on WhatsApp</span>
              <ExternalLink size={15} color="#050507" />
            </a>

            {/* Direct Phone Call Alternative */}
            <div style={{ marginBottom: '16px' }}>
              <a
                href="tel:+919731444988"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  color: '#FF5500',
                  fontSize: '12.5px',
                  fontWeight: 700,
                  textDecoration: 'none',
                }}
              >
                <PhoneCall size={13} />
                <span>Or Call Direct: +91 97314 44988</span>
              </a>
            </div>

            {/* Return to Sanctuary Button */}
            <button
              onClick={handleResetAndClose}
              style={{
                width: '100%',
                padding: '12px',
                borderRadius: '10px',
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                color: '#C5C8D4',
                fontSize: '13px',
                fontWeight: 700,
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
            >
              Done &bull; Return to Sanctuary
            </button>
          </div>
        ) : (
          /* Intake Form */
          <div>
            <h3
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '24px',
                fontWeight: 900,
                color: '#FFFFFF',
                textTransform: 'uppercase',
                marginBottom: '6px',
              }}
            >
              SCHEDULE SANCTUARY CONSULTATION
            </h3>

            <p style={{ fontSize: '13px', color: '#9095A4', marginBottom: '24px' }}>
              {preselectedItem
                ? `Booking inquiry for: ${preselectedItem}`
                : 'Experience our high-performance floor, meet veteran coaches, and explore bio-recovery facilities.'}
            </p>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div>
                <label style={{ display: 'block', fontSize: '12px', fontWeight: 700, color: '#C5C8D4', marginBottom: '6px' }}>
                  Full Legal Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Aryan Malhotra"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    borderRadius: '10px',
                    background: 'rgba(255, 255, 255, 0.04)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    color: '#FFFFFF',
                    fontSize: '14px',
                    outline: 'none',
                  }}
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 200px), 1fr))', gap: '12px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '12px', fontWeight: 700, color: '#C5C8D4', marginBottom: '6px' }}>
                    WhatsApp Mobile Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98000 00000"
                    value={formData.mobile}
                    onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      borderRadius: '10px',
                      background: 'rgba(255, 255, 255, 0.04)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      color: '#FFFFFF',
                      fontSize: '14px',
                      outline: 'none',
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '12px', fontWeight: 700, color: '#C5C8D4', marginBottom: '6px' }}>
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="aryan@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      borderRadius: '10px',
                      background: 'rgba(255, 255, 255, 0.04)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      color: '#FFFFFF',
                      fontSize: '14px',
                      outline: 'none',
                    }}
                  />
                </div>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '12px', fontWeight: 700, color: '#C5C8D4', marginBottom: '6px' }}>
                  Select Preferred Sanctuary *
                </label>
                <select
                  value={formData.preferredHub}
                  onChange={(e) => setFormData({ ...formData, preferredHub: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    borderRadius: '10px',
                    background: '#14161E',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    color: '#FFFFFF',
                    fontSize: '13.5px',
                    outline: 'none',
                    cursor: 'pointer',
                  }}
                >
                  <option value="Vanara Force Sanctuary | Prestige Falcon City, Bengaluru">Vanara Force Sanctuary | Prestige Falcon City, Bengaluru</option>
                  <option value="Vanara Tech & Athletic Hub | Koramangala, Bengaluru">Vanara Tech & Athletic Hub | Koramangala, Bengaluru</option>
                </select>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '12px', fontWeight: 700, color: '#C5C8D4', marginBottom: '6px' }}>
                  Primary Performance Objective
                </label>
                <select
                  value={formData.primaryGoal}
                  onChange={(e) => setFormData({ ...formData, primaryGoal: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    borderRadius: '10px',
                    background: '#14161E',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    color: '#FFFFFF',
                    fontSize: '13.5px',
                    outline: 'none',
                    cursor: 'pointer',
                  }}
                >
                  <option value="Heavy Strength & Muscle Hypertrophy">Heavy Strength & Muscle Hypertrophy</option>
                  <option value="Primal Agility & Calisthenics Mastery">Primal Agility & Calisthenics Mastery</option>
                  <option value="Rapid Fat Loss & Metabolic Conditioning">Rapid Fat Loss & Metabolic Conditioning</option>
                  <option value="Holistic Bio-Recovery & Cryo Pain Relief">Holistic Bio-Recovery & Cryo Pain Relief</option>
                </select>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '11px', color: '#7E8394', marginTop: '6px' }}>
                <ShieldCheck size={14} color="#FF5500" />
                <span>Zero spam guarantee. Strictly reserved for prospective members aged 18+.</span>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="btn-primary"
                style={{
                  width: '100%',
                  padding: '16px',
                  fontSize: '14px',
                  marginTop: '10px',
                }}
              >
                {isLoading ? (
                  <span>Scheduling Request...</span>
                ) : (
                  <>
                    <span>Confirm Consultation Request</span>
                    <ArrowRight size={16} />
                  </>
                )}
              </button>
            </form>
          </div>
        )}
      </motion.div>
    </div>
  );
};
