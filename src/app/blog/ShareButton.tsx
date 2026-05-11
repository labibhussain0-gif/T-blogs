'use client';

import { useState, useCallback, useRef, useEffect } from 'react';
import Toast from '@/components/Toast';

export default function ShareButton({ title, url }: { title: string; url: string }) {
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const handleShare = useCallback((platform: 'twitter' | 'linkedin' | 'copy') => {
    switch (platform) {
      case 'twitter':
        window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`, '_blank', 'noopener,noreferrer');
        break;
      case 'linkedin':
        window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, '_blank', 'noopener,noreferrer');
        break;
      case 'copy':
        navigator.clipboard.writeText(url).then(() => {
          setToast({ message: 'Link copied to clipboard!', type: 'success' });
          if (timeoutRef.current) clearTimeout(timeoutRef.current);
          timeoutRef.current = setTimeout(() => setToast(null), 3000);
        }).catch(() => {
          setToast({ message: 'Failed to copy link', type: 'error' });
          if (timeoutRef.current) clearTimeout(timeoutRef.current);
          timeoutRef.current = setTimeout(() => setToast(null), 3000);
        });
        break;
    }
  }, [title, url]);

  return (
    <>
      {[
        { label: 'Twitter', platform: 'twitter' as const, icon: <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" /> },
        { label: 'LinkedIn', platform: 'linkedin' as const, icon: <><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></> },
        { label: 'Copy Link', platform: 'copy' as const, icon: <><path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71" /><path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71" /></> },
      ].map((btn) => (
        <button
          key={btn.label}
          onClick={() => handleShare(btn.platform)}
          aria-label={`Share on ${btn.label}`}
          className="transition-all duration-200"
          style={{
            width: '36px',
            height: '36px',
            borderRadius: '50%',
            border: '1px solid var(--border-light)',
            background: 'transparent',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--ink-secondary)'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = 'var(--accent-orange)';
            e.currentTarget.style.color = 'var(--accent-orange)';
            e.currentTarget.style.background = 'var(--accent-orange-light)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = 'var(--border-light)';
            e.currentTarget.style.color = 'var(--ink-secondary)';
            e.currentTarget.style.background = 'transparent';
          }}
        >
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            {btn.icon}
          </svg>
        </button>
      ))}
      {toast && <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} />}
    </>
  );
}