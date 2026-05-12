'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import SearchOverlay from './SearchOverlay';
import MobileMenu from './MobileMenu';

const categoryLinks = [
  { href: '/blog?category=AI+Research', label: 'AI Research' },
  { href: '/blog?category=Engineering', label: 'Engineering' },
  { href: '/blog?category=Tech+Trends', label: 'Tech Trends' },
  { href: '/blog?category=Design', label: 'Design' },
];

export default function Header() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [catDropdown, setCatDropdown] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  /* Scroll detection for sticky header bg */
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  /* Close dropdown on outside click */
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setCatDropdown(false);
      }
    };
    if (catDropdown) {
      document.addEventListener('mousedown', handleClick);
      return () => document.removeEventListener('mousedown', handleClick);
    }
  }, [catDropdown]);

  return (
    <>
      <header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 100,
          width: '100%',
          borderBottom: `1px solid ${scrolled ? 'var(--border-light)' : 'transparent'}`,
          background: scrolled ? 'rgba(250, 247, 242, 0.92)' : 'var(--bg-cream)',
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
          transition: 'all 0.3s ease',
        }}
      >
        <div
          style={{
            maxWidth: '1280px',
            margin: '0 auto',
            padding: '0 24px',
            height: '72px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          {/* Logo */}
          <Link
            href="/"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '28px',
              fontWeight: 900,
              color: 'var(--ink-primary)',
              textDecoration: 'none',
              letterSpacing: '-0.03em',
              display: 'flex',
              alignItems: 'baseline',
            }}
          >
            T-blogs
            <span style={{ color: 'var(--accent-orange)', fontSize: '32px', lineHeight: 0 }}>.</span>
          </Link>

          {/* Desktop Nav */}
          <nav
            aria-label="Main Navigation"
            className="hidden md:flex"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
            }}
          >
            <NavLink href="/" label="Home" />

            {/* Categories Dropdown */}
            <div ref={dropdownRef} style={{ position: 'relative' }}>
              <button
                onClick={() => setCatDropdown(!catDropdown)}
                aria-expanded={catDropdown}
                aria-haspopup="true"
                className="transition-colors duration-200"
                style={{
                  padding: '8px 16px',
                  borderRadius: 'var(--radius-full)',
                  fontSize: '14px',
                  fontWeight: 500,
                  fontFamily: 'var(--font-body)',
                  color: 'var(--ink-secondary)',
                  background: 'transparent',
                  border: 'none',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent-orange)')}
                onMouseLeave={(e) => {
                  if (!catDropdown) e.currentTarget.style.color = 'var(--ink-secondary)';
                }}
              >
                Categories
                <svg
                  width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                  style={{ transform: catDropdown ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s ease' }}
                >
                  <path d="M3 4.5L6 7.5L9 4.5" />
                </svg>
              </button>

              {catDropdown && (
                <div
                  className="animate-fade-in"
                  style={{
                    position: 'absolute',
                    top: 'calc(100% + 8px)',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    background: 'var(--bg-white)',
                    borderRadius: 'var(--radius-md)',
                    boxShadow: '0 8px 32px var(--shadow-warm-md)',
                    border: '1px solid var(--border-light)',
                    padding: '8px',
                    minWidth: '200px',
                    zIndex: 200,
                  }}
                >
                  {categoryLinks.map((cat) => (
                    <Link
                      key={cat.href}
                      href={cat.href}
                      onClick={() => setCatDropdown(false)}
                      className="block transition-colors duration-200"
                      style={{
                        padding: '10px 16px',
                        borderRadius: 'var(--radius-sm)',
                        fontSize: '14px',
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
                      {cat.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <NavLink href="/blog" label="Articles" />
            <NavLink href="/about" label="About" />
          </nav>

          {/* Right Actions */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            {/* Search */}
            <button
              onClick={() => setSearchOpen(true)}
              aria-label="Search articles"
              className="transition-colors duration-200"
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                background: 'transparent',
                border: 'none',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--ink-secondary)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'var(--bg-warm-gray)';
                e.currentTarget.style.color = 'var(--accent-orange)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.color = 'var(--ink-secondary)';
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </button>

            {/* Social Icons (desktop) */}
            <div className="hidden lg:flex items-center gap-1">
              <SocialIcon label="Twitter" href="https://x.com/friendlybuddy25">
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
              </SocialIcon>
              <SocialIcon label="LinkedIn" href="https://www.linkedin.com/in/mr-milli-098a35266">
                <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </SocialIcon>
            </div>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
              className="md:hidden transition-colors duration-200"
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                background: 'transparent',
                border: 'none',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--ink-primary)',
              }}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      <SearchOverlay isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
      <MobileMenu isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}

/* Nav Link helper */
function NavLink({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="transition-colors duration-200"
      style={{
        padding: '8px 16px',
        borderRadius: 'var(--radius-full)',
        fontSize: '14px',
        fontWeight: 500,
        fontFamily: 'var(--font-body)',
        color: 'var(--ink-secondary)',
        textDecoration: 'none',
      }}
      onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent-orange)')}
      onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--ink-secondary)')}
    >
      {label}
    </Link>
  );
}

/* Social Icon helper */
function SocialIcon({ label, href, children }: { label: string; href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      title={label}
      className="transition-colors duration-200"
      style={{
        width: '36px',
        height: '36px',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'var(--ink-secondary)',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.color = 'var(--accent-orange)';
        e.currentTarget.style.background = 'var(--bg-warm-gray)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.color = 'var(--ink-secondary)';
        e.currentTarget.style.background = 'transparent';
      }}
    >
      <span className="sr-only">{label}</span>
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        {children}
      </svg>
    </a>
  );
}
