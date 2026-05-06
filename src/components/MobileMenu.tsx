'use client';

import { useEffect } from 'react';
import Link from 'next/link';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/blog', label: 'Articles' },
  { href: '/about', label: 'About' },
];

const categoryLinks = [
  { href: '/blog?category=AI+Research', label: 'AI Research' },
  { href: '/blog?category=Engineering', label: 'Engineering' },
  { href: '/blog?category=Tech+Trends', label: 'Tech Trends' },
  { href: '/blog?category=Design', label: 'Design' },
];

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKey);
      return () => window.removeEventListener('keydown', handleKey);
    }
  }, [isOpen, onClose]);

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div
          onClick={onClose}
          className="animate-fade-in"
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(26, 26, 26, 0.5)',
            zIndex: 9996,
          }}
        />
      )}

      {/* Panel */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
        style={{
          position: 'fixed',
          top: 0,
          right: 0,
          bottom: 0,
          width: '320px',
          maxWidth: '85vw',
          background: 'var(--bg-cream)',
          zIndex: 9997,
          transform: isOpen ? 'translateX(0)' : 'translateX(100%)',
          transition: 'transform 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
          display: 'flex',
          flexDirection: 'column',
          padding: '24px',
          boxShadow: isOpen ? '-8px 0 32px rgba(0,0,0,0.15)' : 'none',
        }}
      >
        {/* Close */}
        <div className="flex justify-end mb-8">
          <button
            onClick={onClose}
            aria-label="Close menu"
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '8px',
              color: 'var(--ink-primary)',
            }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* Nav Links */}
        <nav className="flex flex-col gap-1 mb-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={onClose}
              className="transition-colors duration-200"
              style={{
                padding: '14px 16px',
                borderRadius: 'var(--radius-md)',
                fontSize: '17px',
                fontWeight: 600,
                fontFamily: 'var(--font-body)',
                color: 'var(--ink-primary)',
                textDecoration: 'none',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'var(--accent-orange-light)';
                e.currentTarget.style.color = 'var(--accent-orange)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.color = 'var(--ink-primary)';
              }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Categories */}
        <div style={{ marginBottom: '32px' }}>
          <p style={{ fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--ink-tertiary)', fontFamily: 'var(--font-body)', marginBottom: '12px', paddingLeft: '16px' }}>
            Categories
          </p>
          <nav className="flex flex-col gap-1">
            {categoryLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={onClose}
                className="transition-colors duration-200"
                style={{
                  padding: '10px 16px',
                  borderRadius: 'var(--radius-md)',
                  fontSize: '15px',
                  fontWeight: 500,
                  fontFamily: 'var(--font-body)',
                  color: 'var(--ink-secondary)',
                  textDecoration: 'none',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'var(--accent-orange-light)';
                  e.currentTarget.style.color = 'var(--accent-orange)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'transparent';
                  e.currentTarget.style.color = 'var(--ink-secondary)';
                }}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* CTA */}
        <div className="mt-auto">
          <Link
            href="/blog"
            onClick={onClose}
            className="flex items-center justify-center gap-2 transition-opacity duration-300 hover:opacity-90"
            style={{
              width: '100%',
              padding: '14px 24px',
              borderRadius: 'var(--radius-full)',
              background: 'var(--accent-orange)',
              color: '#fff',
              fontSize: '14px',
              fontWeight: 600,
              fontFamily: 'var(--font-body)',
              textDecoration: 'none',
            }}
          >
            Read Latest Articles
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
            </svg>
          </Link>
        </div>
      </div>
    </>
  );
}
