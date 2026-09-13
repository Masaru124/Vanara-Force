'use client';

import React, { useState } from 'react';
import { MessageCircle, X, ArrowUpRight } from 'lucide-react';

interface WhatsAppConciergeProps {
  onOpenTrialModal: () => void;
}

export const WhatsAppConcierge: React.FC<WhatsAppConciergeProps> = ({ onOpenTrialModal }) => {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '26px',
        right: '26px',
        zIndex: 90,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
      }}
    >
      {/* Interactive Tooltip Card */}
      {showTooltip && (
        <div
          style={{
            position: 'relative',
            marginBottom: '10px',
            padding: '14px 18px',
            background: 'rgba(16, 18, 23, 0.95)',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            border: '1px solid rgba(255, 85, 0, 0.4)',
            borderRadius: '16px',
            boxShadow: '0 15px 35px rgba(0, 0, 0, 0.85)',
            maxWidth: '260px',
            animation: 'float 3s ease-in-out infinite',
          }}
        >
          <button
            onClick={() => setShowTooltip(false)}
            aria-label="Dismiss Concierge Tooltip"
            style={{
              position: 'absolute',
              top: '8px',
              right: '8px',
              background: 'transparent',
              border: 'none',
              color: '#8E92A0',
              cursor: 'pointer',
            }}
          >
            <X size={13} />
          </button>

          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '4px' }}>
            <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#00FF88' }} />
            <span style={{ fontSize: '11px', fontWeight: 800, color: '#FF5500', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
              VANARA CONCIERGE ONLINE
            </span>
          </div>

          <p style={{ fontSize: '12px', color: '#D4D7E2', lineHeight: 1.4 }}>
            Questions regarding membership rates or recovery suites?
          </p>

          <button
            onClick={onOpenTrialModal}
            style={{
              marginTop: '8px',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '4px',
              background: 'transparent',
              border: 'none',
              color: '#FF5500',
              fontFamily: 'var(--font-heading)',
              fontSize: '11.5px',
              fontWeight: 800,
              cursor: 'pointer',
              textTransform: 'uppercase',
            }}
          >
            <span>Book Callback</span>
            <ArrowUpRight size={13} />
          </button>
        </div>
      )}

      {/* Main Floating Trigger Button */}
      <button
        onClick={onOpenTrialModal}
        aria-label="Contact Vanara Force Concierge"
        style={{
          width: '56px',
          height: '56px',
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #FF6E1A 0%, #FF5500 100%)',
          color: '#070709',
          border: '2px solid rgba(255, 255, 255, 0.4)',
          boxShadow: '0 8px 30px rgba(255, 85, 0, 0.65)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          transition: 'all 200ms ease',
          position: 'relative',
        }}
        onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.08)')}
        onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1.0)')}
      >
        <MessageCircle size={28} />
        {/* Unread Alert Ping Dot */}
        <span
          style={{
            position: 'absolute',
            top: '2px',
            right: '2px',
            width: '13px',
            height: '13px',
            borderRadius: '50%',
            background: '#FFFFFF',
            border: '2px solid #FF5500',
          }}
        />
      </button>
    </div>
  );
};
