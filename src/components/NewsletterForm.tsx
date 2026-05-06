'use client';

import { useState, useCallback } from 'react';
import Toast from './Toast';

export default function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      if (!email.trim()) {
        setToast({ message: 'Please enter your email address', type: 'error' });
        return;
      }
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        setToast({ message: 'Please enter a valid email address', type: 'error' });
        return;
      }
      setIsSubmitting(true);
      setTimeout(() => {
        setToast({ message: 'Thanks for subscribing! 🎉', type: 'success' });
        setEmail('');
        setIsSubmitting(false);
      }, 800);
    },
    [email]
  );

  return (
    <>
      <form onSubmit={handleSubmit} className="flex w-full max-w-md">
        <div className="relative flex-1">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            aria-label="Email address for newsletter"
            style={{
              width: '100%',
              padding: '14px 20px',
              paddingRight: '48px',
              borderRadius: 'var(--radius-full)',
              border: '2px solid rgba(255,255,255,0.15)',
              background: 'rgba(255,255,255,0.08)',
              color: '#fff',
              fontSize: '14px',
              fontFamily: 'var(--font-body)',
              outline: 'none',
              transition: 'border-color 0.3s ease',
            }}
            onFocus={(e) => (e.target.style.borderColor = 'var(--accent-orange)')}
            onBlur={(e) => (e.target.style.borderColor = 'rgba(255,255,255,0.15)')}
          />
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="transition-all duration-300 hover:opacity-90"
          style={{
            marginLeft: '-48px',
            width: '48px',
            height: '48px',
            borderRadius: '50%',
            background: 'var(--accent-orange)',
            color: '#fff',
            border: 'none',
            cursor: isSubmitting ? 'wait' : 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
            opacity: isSubmitting ? 0.7 : 1,
          }}
          aria-label="Subscribe"
        >
          {isSubmitting ? (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="animate-spin">
              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" strokeDasharray="32" strokeLinecap="round" />
            </svg>
          ) : (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
            </svg>
          )}
        </button>
      </form>

      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}
    </>
  );
}
