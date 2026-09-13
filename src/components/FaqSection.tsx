'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FAQS_DATA } from '../data/gymData';
import { ChevronDown } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openIds, setOpenIds] = useState<string[]>(['membership']);
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'General', 'Training', 'Nutrition', 'Membership'];

  const toggleFaq = (id: string) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const filteredFaqs =
    activeCategory === 'All'
      ? FAQS_DATA
      : FAQS_DATA.filter((faq) => faq.category.toLowerCase() === activeCategory.toLowerCase());

  return (
    <section
      id="faq"
      style={{
        padding: '110px 0',
        backgroundColor: '#070709',
        position: 'relative',
        borderTop: '1px solid rgba(255, 255, 255, 0.06)',
      }}
    >
      <div className="container" style={{ maxWidth: '880px' }}>
        <div style={{ marginBottom: '40px', borderBottom: '1px solid rgba(255, 255, 255, 0.08)', paddingBottom: '28px' }}>
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
            FREQUENTLY ASKED <span style={{ color: '#FF5500' }}>QUESTIONS</span>
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
            Everything you need to know about memberships, training methodology, and sanctuary amenities at Falcon City.
          </p>
        </div>

        {/* Category Pills */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '10px',
            marginBottom: '36px',
          }}
        >
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              style={{
                padding: '8px 20px',
                borderRadius: '9999px',
                backgroundColor: activeCategory === cat ? '#FF5500' : 'rgba(255, 255, 255, 0.04)',
                border: activeCategory === cat ? '1px solid #FF5500' : '1px solid rgba(255, 255, 255, 0.1)',
                color: activeCategory === cat ? '#070709' : '#ECE9E1',
                fontFamily: 'var(--font-heading)',
                fontSize: '13px',
                fontWeight: 800,
                cursor: 'pointer',
                transition: 'all 200ms ease',
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* FAQ Accordion List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          {filteredFaqs.map((faq) => {
            const isOpen = openIds.includes(faq.id);
            return (
              <div
                key={faq.id}
                style={{
                  backgroundColor: '#101117',
                  borderRadius: '16px',
                  border: isOpen ? '1.5px solid rgba(255, 85, 0, 0.45)' : '1px solid rgba(255, 255, 255, 0.08)',
                  overflow: 'hidden',
                  transition: 'border-color 250ms ease',
                }}
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(faq.id)}
                  style={{
                    width: '100%',
                    textAlign: 'left',
                    padding: '22px 26px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '16px',
                    backgroundColor: 'transparent',
                    border: 'none',
                    cursor: 'pointer',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: '16.5px',
                      fontWeight: 800,
                      color: isOpen ? '#FF5500' : '#ECE9E1',
                      letterSpacing: '0.01em',
                    }}
                  >
                    {faq.question}
                  </span>
                  <div
                    style={{
                      transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform 250ms cubic-bezier(0.16, 1, 0.3, 1)',
                      color: isOpen ? '#FF5500' : 'rgba(236, 233, 225, 0.5)',
                      flexShrink: 0,
                    }}
                  >
                    <ChevronDown size={20} />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      style={{ overflow: 'hidden' }}
                    >
                      <div
                        style={{
                          padding: '0 26px 24px 26px',
                          borderTop: '1px solid rgba(255, 255, 255, 0.05)',
                          paddingTop: '16px',
                        }}
                      >
                        <p
                          style={{
                            fontFamily: 'var(--font-body)',
                            fontSize: '14.5px',
                            lineHeight: 1.7,
                            color: 'rgba(236, 233, 225, 0.8)',
                            margin: 0,
                          }}
                        >
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
