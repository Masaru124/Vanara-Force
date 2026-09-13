'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { VANARA_CONTACT } from '../data/gymData';
import { MapPin, Phone, Mail, Clock, MessageSquare, ExternalLink, ShieldCheck } from 'lucide-react';
import { SpotlightCard } from './SpotlightCard';

export const ContactSection: React.FC = () => {
  return (
    <section
      id="contact"
      style={{
        padding: '110px 0',
        backgroundColor: '#0A0B0E',
        position: 'relative',
        borderTop: '1px solid rgba(255, 255, 255, 0.06)',
      }}
    >
      <div className="container">
        <div style={{ marginBottom: '45px', borderBottom: '1px solid rgba(255, 255, 255, 0.08)', paddingBottom: '30px' }}>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.2rem, 4.5vw, 3.4rem)',
              color: '#FFFFFF',
              fontWeight: 800,
              letterSpacing: '-0.02em',
              textTransform: 'uppercase',
              margin: '0 0 12px 0',
              lineHeight: 1.05,
            }}
          >
            PRESTIGE FALCON CITY &bull; <span style={{ color: '#FF5500' }}>LOCATION & CONTACT</span>
          </h2>
          <p
            style={{
              fontFamily: 'var(--font-body)',
              color: '#A1A7B5',
              fontSize: '1rem',
              maxWidth: '640px',
              margin: 0,
              lineHeight: 1.6,
            }}
          >
            Experience our high-performance floor and recovery suites in person. Walk-ins and private tours are welcome during all operating hours.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '36px',
            alignItems: 'stretch',
          }}
        >
          {/* Contact Details Card */}
          <SpotlightCard
            style={{
              backgroundColor: '#111218',
              borderRadius: '24px',
              border: '1.5px solid rgba(255, 85, 0, 0.35)',
              padding: 'clamp(24px, 4vw, 40px)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <div>
              <div
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '22px',
                  fontWeight: 900,
                  color: '#ECE9E1',
                  marginBottom: '24px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                }}
              >
                <span>VANARA FORCE FALCON CITY</span>
                <span style={{ fontSize: '12px', color: '#FF5500', padding: '2px 8px', borderRadius: '4px', backgroundColor: 'rgba(255, 85, 0, 0.15)' }}>
                  OPEN
                </span>
              </div>

              {/* Items */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '22px', marginBottom: '32px' }}>
                {/* Address */}
                <div style={{ display: 'flex', gap: '14px' }}>
                  <div
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '10px',
                      backgroundColor: 'rgba(255, 85, 0, 0.12)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#FF5500',
                      flexShrink: 0,
                    }}
                  >
                    <MapPin size={20} />
                  </div>
                  <div>
                    <div style={{ fontSize: '11px', fontFamily: 'var(--font-heading)', fontWeight: 800, color: '#FF5500', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                      SANCTUARY ADDRESS
                    </div>
                    <div style={{ fontSize: '14px', color: '#ECE9E1', lineHeight: 1.5, marginTop: '4px', fontWeight: 600 }}>
                      {VANARA_CONTACT.fullAddress}
                    </div>
                  </div>
                </div>

                {/* Phone */}
                <div style={{ display: 'flex', gap: '14px' }}>
                  <div
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '10px',
                      backgroundColor: 'rgba(255, 85, 0, 0.12)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#FF5500',
                      flexShrink: 0,
                    }}
                  >
                    <Phone size={20} />
                  </div>
                  <div>
                    <div style={{ fontSize: '11px', fontFamily: 'var(--font-heading)', fontWeight: 800, color: '#FF5500', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                      DIRECT HELPLINE
                    </div>
                    <a
                      href={`tel:${VANARA_CONTACT.phone}`}
                      style={{ fontSize: '15px', color: '#ECE9E1', lineHeight: 1.5, marginTop: '4px', fontWeight: 700, textDecoration: 'none', display: 'inline-block' }}
                    >
                      {VANARA_CONTACT.phoneDisplay}
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div style={{ display: 'flex', gap: '14px' }}>
                  <div
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '10px',
                      backgroundColor: 'rgba(255, 85, 0, 0.12)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#FF5500',
                      flexShrink: 0,
                    }}
                  >
                    <Mail size={20} />
                  </div>
                  <div>
                    <div style={{ fontSize: '11px', fontFamily: 'var(--font-heading)', fontWeight: 800, color: '#FF5500', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                      OFFICIAL INQUIRIES
                    </div>
                    <a
                      href={`mailto:${VANARA_CONTACT.email}`}
                      style={{ fontSize: '14px', color: '#ECE9E1', lineHeight: 1.5, marginTop: '4px', textDecoration: 'none' }}
                    >
                      {VANARA_CONTACT.email}
                    </a>
                  </div>
                </div>

                {/* Operating Hours */}
                <div style={{ display: 'flex', gap: '14px' }}>
                  <div
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '10px',
                      backgroundColor: 'rgba(255, 85, 0, 0.12)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#FF5500',
                      flexShrink: 0,
                    }}
                  >
                    <Clock size={20} />
                  </div>
                  <div>
                    <div style={{ fontSize: '11px', fontFamily: 'var(--font-heading)', fontWeight: 800, color: '#FF5500', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                      OPERATING HOURS
                    </div>
                    <div style={{ fontSize: '13.5px', color: '#ECE9E1', marginTop: '4px', lineHeight: 1.5 }}>
                      <div>{VANARA_CONTACT.hoursWeekday}</div>
                      <div style={{ color: 'rgba(236, 233, 225, 0.65)' }}>{VANARA_CONTACT.hoursSunday}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Action Buttons */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
              <a
                href={VANARA_CONTACT.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                style={{ flex: 1, minWidth: '180px', padding: '14px 20px', justifyContent: 'center' }}
              >
                <MessageSquare size={16} />
                <span>Chat on WhatsApp</span>
              </a>

              <a
                href={`https://maps.google.com/?q=${VANARA_CONTACT.coordinates.lat},${VANARA_CONTACT.coordinates.lng}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  padding: '14px 20px',
                  borderRadius: '9999px',
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  color: '#ECE9E1',
                  fontFamily: 'var(--font-heading)',
                  fontSize: '13px',
                  fontWeight: 700,
                  textDecoration: 'none',
                }}
              >
                <span>Google Maps</span>
                <ExternalLink size={14} />
              </a>
            </div>
          </SpotlightCard>

          {/* Interactive Map Embed */}
          <div
            style={{
              backgroundColor: '#111218',
              borderRadius: '24px',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              overflow: 'hidden',
              minHeight: '380px',
              position: 'relative',
            }}
          >
            <iframe
              title="Vanara Force Prestige Falcon City Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.5165427495914!2d77.56582517598818!3d12.874488887431785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1534b41b9945%3A0x86b039ea8b5ad326!2sPrestige%20Falcon%20City!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '400px', filter: 'invert(90%) hue-rotate(180deg)' }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
