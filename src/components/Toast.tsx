'use client';

import { useEffect, useState } from 'react';

interface ToastProps {
  message: string;
  type?: 'success' | 'error' | 'info';
  onClose: () => void;
  duration?: number;
}

export default function Toast({
  message,
  type = 'success',
  onClose,
  duration = 3000,
}: ToastProps) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onClose, 300);
    }, duration);
    return () => clearTimeout(timer);
  }, [duration, onClose]);

  const bgColor =
    type === 'success'
      ? '#1A1A1A'
      : type === 'error'
        ? '#DC2626'
        : '#E8570E';

  return (
    <div
      role="alert"
      style={{
        position: 'fixed',
        bottom: '24px',
        left: '50%',
        transform: 'translateX(-50%)',
        background: bgColor,
        color: '#fff',
        padding: '14px 28px',
        borderRadius: 'var(--radius-full)',
        fontFamily: 'var(--font-body)',
        fontSize: '14px',
        fontWeight: 500,
        letterSpacing: '0.01em',
        zIndex: 9999,
        boxShadow: '0 8px 32px rgba(0,0,0,0.2)',
        opacity: isVisible ? 1 : 0,
        transition: 'opacity 0.3s ease, transform 0.3s ease',
        animation: 'toastSlideIn 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        whiteSpace: 'nowrap' as const,
      }}
    >
      {type === 'success' && (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M3 8.5L6 11.5L13 4.5" stroke="#4ADE80" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )}
      {type === 'error' && (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <circle cx="8" cy="8" r="6" stroke="#FCA5A5" strokeWidth="1.5"/>
          <path d="M8 5V9M8 11V11.5" stroke="#FCA5A5" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      )}
      {message}
    </div>
  );
}
