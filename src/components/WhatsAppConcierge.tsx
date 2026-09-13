'use client';

import React, { useState } from 'react';
import { MessageCircle, X, ArrowUpRight } from 'lucide-react';

interface WhatsAppConciergeProps {
  onOpenTrialModal: () => void;
}

export const WhatsAppConcierge: React.FC<WhatsAppConciergeProps> = ({ onOpenTrialModal }) => {
  // On mobile devices, default to false so it never obstructs screen or buttons
  const [showTooltip, setShowTooltip] = useState(false);

  const handleWhatsAppDirect = () => {
    window.open(
      "https://wa.me/919731444988?text=Hi%20Vanara%20Force%20Concierge,%20I'd%20like%20to%20inquire%20about%20membership%20at%20Prestige%20Falcon%20City.",
      '_blank'
    );
  };

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        zIndex: 90,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
      }}
    >
      {/* Interactive Tooltip Card - Desktop only */}
      {showTooltip && (
        <div
          className="concierge-tooltip"
          style={{
            position: 'relative',
            marginBottom: '10px',
            padding: '14px 18px',
            background: 'rgba(16, 18, 23, 0.96)',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            border: '1px solid rgba(255, 85, 0, 0.4)',
            borderRadius: '16px',
            boxShadow: '0 15px 35px rgba(0, 0, 0, 0.85)',
            maxWidth: '260px',
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
              VANARA CONCIERGE
            </span>
          </div>

          <p style={{ fontSize: '12px', color: '#D4D7E2', lineHeight: 1.4 }}>
            Questions regarding membership rates or recovery suites?
          </p>

          <button
            onClick={handleWhatsAppDirect}
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
            <span>Chat on WhatsApp</span>
            <ArrowUpRight size={13} />
          </button>
        </div>
      )}

      {/* Main Floating Trigger Button */}
      <button
        onClick={handleWhatsAppDirect}
        aria-label="Chat with Vanara Force on WhatsApp"
        style={{
          width: '52px',
          height: '52px',
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #FF6E1A 0%, #FF5500 100%)',
          color: '#050507',
          border: 'none',
          boxShadow: '0 8px 24px -4px rgba(255, 85, 0, 0.5), 0 4px 12px rgba(0, 0, 0, 0.6)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          transition: 'all 200ms ease',
        }}
      >
        <MessageCircle size={26} color="#050507" fill="#050507" />
      </button>

      <style jsx>{`
        @media (max-width: 767px) {
          .concierge-tooltip {
            display: none !important;
          }
        }
      `}</style>
    </div>
  );
};
