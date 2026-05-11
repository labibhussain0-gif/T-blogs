'use client';

import { useState } from 'react';
import Toast from '@/components/Toast';

export default function ShareButton() {
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null);

  const copyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setToast({ message: 'Link copied to clipboard!', type: 'success' });
    setTimeout(() => setToast(null), 3000);
  };

  return (
    <>
      <button
        onClick={copyLink}
        className="flex items-center gap-2 hover:opacity-80 transition-opacity"
        style={{
          color: 'var(--ink-tertiary)',
          fontSize: '14px',
          fontWeight: 500,
          fontFamily: 'var(--font-body)',
        }}
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
          <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
        </svg>
        Copy Link
      </button>
      {toast && <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} />}
    </>
  );
}
