'use client';

import { useState, useRef } from 'react';
import Link from 'next/link';
import { generateBreadcrumbSchema, generateOrganizationSchema, CONTACT_EMAIL, LINKEDIN_URL, TWITTER_URL } from '@/lib/seo-helpers';

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', href: '/' },
  { name: 'Contact', href: '/contact' },
]);
const orgSchema = generateOrganizationSchema();

type FormState = 'idle' | 'submitting' | 'success' | 'error';

export default function ContactPage() {
  const [formState, setFormState] = useState<FormState>('idle');
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const form = formRef.current;
    if (!form) return;
    const data = new FormData(form);
    const name = (data.get('name') as string)?.trim();
    const email = (data.get('email') as string)?.trim();
    const message = (data.get('message') as string)?.trim();
    if (!name || !email || !message) return;
    setFormState('submitting');
    // Opens default mail client as fallback (works with static export)
    const subject = encodeURIComponent(`T-blogs Contact: ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
    setTimeout(() => { setFormState('success'); form.reset(); }, 800);
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />

      <div style={{ width: '100%' }}>
        {/* Hero */}
        <section style={{ background: 'var(--bg-white)', borderBottom: '1px solid var(--border-light)', padding: '64px 24px', textAlign: 'center' }}>
          <div style={{ maxWidth: '640px', margin: '0 auto' }}>
            <span style={{ display: 'inline-block', fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--accent-orange)', fontFamily: 'var(--font-body)', marginBottom: '12px' }}>Get in Touch</span>
            <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 'clamp(2rem, 5vw, 3rem)', color: 'var(--ink-primary)', marginBottom: '16px', letterSpacing: '-0.03em' }}>
              Contact T-blogs
            </h1>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '17px', color: 'var(--ink-secondary)', lineHeight: 1.7 }}>
              Questions, feedback, collaboration ideas, or just want to say something? Send a message — we read every one.
            </p>
          </div>
        </section>

        <section style={{ maxWidth: '1100px', margin: '0 auto', padding: '64px 24px 96px' }}>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-2">
              <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.5rem', color: 'var(--ink-primary)', marginBottom: '24px' }}>Other ways to reach us</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {/* Email */}
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: 'var(--radius-md)', background: 'var(--bg-warm-gray)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--accent-orange)" strokeWidth="2" strokeLinecap="round"><rect x="2" y="4" width="20" height="16" rx="2" /><path d="M2 7l10 7 10-7" /></svg>
                  </div>
                  <div>
                    <p style={{ fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: '14px', color: 'var(--ink-primary)', marginBottom: '4px' }}>Email</p>
                    <a href={`mailto:${CONTACT_EMAIL}`} style={{ fontFamily: 'var(--font-body)', fontSize: '14px', color: 'var(--accent-orange)', textDecoration: 'none' }}>{CONTACT_EMAIL}</a>
                  </div>
                </div>
                {/* Twitter */}
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: 'var(--radius-md)', background: 'var(--bg-warm-gray)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--accent-orange)" strokeWidth="2" strokeLinecap="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" /></svg>
                  </div>
                  <div>
                    <p style={{ fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: '14px', color: 'var(--ink-primary)', marginBottom: '4px' }}>Twitter / X</p>
                    <a href={TWITTER_URL} target="_blank" rel="noopener noreferrer" style={{ fontFamily: 'var(--font-body)', fontSize: '14px', color: 'var(--accent-orange)', textDecoration: 'none' }}>@friendlybuddy25</a>
                  </div>
                </div>
                {/* LinkedIn */}
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: 'var(--radius-md)', background: 'var(--bg-warm-gray)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--accent-orange)" strokeWidth="2" strokeLinecap="round"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></svg>
                  </div>
                  <div>
                    <p style={{ fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: '14px', color: 'var(--ink-primary)', marginBottom: '4px' }}>LinkedIn</p>
                    <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" style={{ fontFamily: 'var(--font-body)', fontSize: '14px', color: 'var(--accent-orange)', textDecoration: 'none' }}>T-blogs on LinkedIn</a>
                  </div>
                </div>
              </div>

              <div style={{ marginTop: '40px', padding: '24px', borderRadius: 'var(--radius-md)', background: 'var(--bg-warm-gray)', border: '1px solid var(--border-light)' }}>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '14px', color: 'var(--ink-secondary)', lineHeight: 1.7, margin: 0 }}>
                  <strong style={{ color: 'var(--ink-primary)' }}>Response time:</strong> We typically respond within 48 hours. For collaboration or sponsorship inquiries, include as much detail as possible.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <div style={{ background: 'var(--bg-white)', border: '1px solid var(--border-light)', borderRadius: 'var(--radius-lg)', padding: '40px' }}>
                <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.5rem', color: 'var(--ink-primary)', marginBottom: '28px' }}>Send a message</h2>

                {formState === 'success' ? (
                  <div style={{ padding: '32px', textAlign: 'center' }}>
                    <div style={{ width: '56px', height: '56px', borderRadius: '50%', background: '#dcfce7', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2.5" strokeLinecap="round"><polyline points="20 6 9 17 4 12" /></svg>
                    </div>
                    <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.25rem', color: 'var(--ink-primary)', marginBottom: '8px' }}>Message sent!</p>
                    <p style={{ fontFamily: 'var(--font-body)', fontSize: '15px', color: 'var(--ink-secondary)' }}>Your email client should have opened. We&apos;ll get back to you within 48 hours.</p>
                  </div>
                ) : (
                  <form ref={formRef} onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    {[
                      { id: 'name', label: 'Your Name', type: 'text', placeholder: 'Ashique Hussain', required: true },
                      { id: 'email', label: 'Email Address', type: 'email', placeholder: 'you@example.com', required: true },
                    ].map((field) => (
                      <div key={field.id}>
                        <label htmlFor={field.id} style={{ display: 'block', fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: '14px', color: 'var(--ink-primary)', marginBottom: '8px' }}>{field.label}</label>
                        <input
                          id={field.id}
                          name={field.id}
                          type={field.type}
                          required={field.required}
                          placeholder={field.placeholder}
                          style={{ width: '100%', padding: '12px 16px', borderRadius: 'var(--radius-md)', border: '1.5px solid var(--border-light)', fontFamily: 'var(--font-body)', fontSize: '15px', color: 'var(--ink-primary)', background: 'var(--bg-cream)', outline: 'none', boxSizing: 'border-box', transition: 'border-color 0.2s ease' }}
                          onFocus={(e) => (e.target.style.borderColor = 'var(--accent-orange)')}
                          onBlur={(e) => (e.target.style.borderColor = 'var(--border-light)')}
                        />
                      </div>
                    ))}
                    <div>
                      <label htmlFor="message" style={{ display: 'block', fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: '14px', color: 'var(--ink-primary)', marginBottom: '8px' }}>Message</label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        placeholder="Tell us what's on your mind..."
                        style={{ width: '100%', padding: '12px 16px', borderRadius: 'var(--radius-md)', border: '1.5px solid var(--border-light)', fontFamily: 'var(--font-body)', fontSize: '15px', color: 'var(--ink-primary)', background: 'var(--bg-cream)', outline: 'none', resize: 'vertical', boxSizing: 'border-box', transition: 'border-color 0.2s ease' }}
                        onFocus={(e) => (e.target.style.borderColor = 'var(--accent-orange)')}
                        onBlur={(e) => (e.target.style.borderColor = 'var(--border-light)')}
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={formState === 'submitting'}
                      className="transition-all duration-300"
                      style={{ padding: '14px 32px', borderRadius: 'var(--radius-full)', background: 'var(--accent-orange)', color: '#fff', fontSize: '15px', fontWeight: 600, fontFamily: 'var(--font-body)', border: 'none', cursor: 'pointer', opacity: formState === 'submitting' ? 0.7 : 1 }}
                      onMouseEnter={(e) => { if (formState !== 'submitting') e.currentTarget.style.background = 'var(--accent-orange-hover)'; }}
                      onMouseLeave={(e) => (e.currentTarget.style.background = 'var(--accent-orange)')}
                    >
                      {formState === 'submitting' ? 'Sending...' : 'Send Message'}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
