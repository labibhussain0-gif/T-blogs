'use client';

import { useState } from 'react';
import { generateFAQSchema, type FAQ } from '@/lib/seo-helpers';

interface FAQSectionProps {
  faqs: FAQ[];
  title?: string;
}

export default function FAQSection({ faqs, title = 'Frequently Asked Questions' }: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  if (!faqs || faqs.length === 0) return null;

  const faqSchema = generateFAQSchema(faqs);

  return (
    <>
      {/* FAQPage JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <section
        aria-label="Frequently Asked Questions"
        style={{
          marginTop: '64px',
          paddingTop: '48px',
          borderTop: '1px solid var(--border-light)',
        }}
      >
        {/* Section Header */}
        <div style={{ marginBottom: '32px' }}>
          <span
            style={{
              display: 'inline-block',
              fontSize: '11px',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              color: 'var(--accent-orange)',
              fontFamily: 'var(--font-body)',
              marginBottom: '10px',
            }}
          >
            FAQ
          </span>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 700,
              fontSize: 'clamp(1.5rem, 3vw, 2rem)',
              color: 'var(--ink-primary)',
              margin: 0,
              letterSpacing: '-0.02em',
            }}
          >
            {title}
          </h2>
        </div>

        {/* Accordion Items */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '0',
            border: '1px solid var(--border-light)',
            borderRadius: 'var(--radius-md)',
            overflow: 'hidden',
          }}
        >
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                style={{
                  borderBottom: index < faqs.length - 1 ? '1px solid var(--border-light)' : 'none',
                  background: isOpen ? 'var(--bg-white)' : 'var(--bg-cream)',
                  transition: 'background 0.2s ease',
                }}
              >
                {/* Question Button */}
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                  id={`faq-question-${index}`}
                  className="w-full text-left transition-colors duration-200"
                  style={{
                    padding: '20px 24px',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '16px',
                    width: '100%',
                  }}
                >
                  <h3
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontWeight: 700,
                      fontSize: '16px',
                      color: isOpen ? 'var(--accent-orange)' : 'var(--ink-primary)',
                      margin: 0,
                      lineHeight: 1.4,
                      transition: 'color 0.2s ease',
                    }}
                  >
                    {faq.question}
                  </h3>
                  {/* Chevron Icon */}
                  <span
                    style={{
                      flexShrink: 0,
                      width: '28px',
                      height: '28px',
                      borderRadius: '50%',
                      background: isOpen ? 'var(--accent-orange)' : 'var(--bg-warm-gray)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      transition: 'background 0.2s ease, transform 0.3s ease',
                      transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                    }}
                  >
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke={isOpen ? '#fff' : 'var(--ink-secondary)'}
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    >
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </span>
                </button>

                {/* Answer Panel */}
                <div
                  id={`faq-answer-${index}`}
                  role="region"
                  aria-labelledby={`faq-question-${index}`}
                  style={{
                    maxHeight: isOpen ? '400px' : '0',
                    overflow: 'hidden',
                    transition: 'max-height 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
                  }}
                >
                  <div
                    style={{
                      padding: '0 24px 24px',
                      fontFamily: 'var(--font-body)',
                      fontSize: '15px',
                      color: 'var(--ink-secondary)',
                      lineHeight: 1.75,
                    }}
                  >
                    {faq.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
