'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer
      style={{
        background: 'var(--footer-bg)',
        color: '#fff',
        marginTop: 'auto',
      }}
    >
      {/* Main Footer */}
      <div
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '64px 24px 32px',
        }}
      >
        <div
          className="grid grid-cols-1 md:grid-cols-4 gap-12"
          style={{ marginBottom: '48px' }}
        >
          {/* Brand Column */}
          <div className="md:col-span-2">
            <Link
              href="/"
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '28px',
                fontWeight: 900,
                color: '#fff',
                textDecoration: 'none',
                letterSpacing: '-0.03em',
                display: 'inline-flex',
                alignItems: 'baseline',
              }}
            >
              T-blogs
              <span style={{ color: 'var(--accent-orange)', fontSize: '32px', lineHeight: 0 }}>.</span>
            </Link>
            <p
              style={{
                marginTop: '20px',
                fontSize: '15px',
                lineHeight: 1.7,
                color: 'var(--footer-ink)',
                maxWidth: '380px',
                fontFamily: 'var(--font-body)',
              }}
            >
              The leading destination for cutting-edge AI research, tech trends, and in-depth software engineering insights. Built by engineers, for engineers.
            </p>

            {/* Social Icons */}
            <div style={{ display: 'flex', gap: '8px', marginTop: '24px' }}>
              <FooterSocialIcon label="Twitter" href="https://x.com/friendlybuddy25">
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
              </FooterSocialIcon>
              <FooterSocialIcon label="LinkedIn" href="https://www.linkedin.com/in/mr-milli-098a35266">
                <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </FooterSocialIcon>
            </div>
            {/* Contact Email */}
            <a
              href="mailto:labibhussain36@gmail.com"
              style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '16px', fontSize: '13px', color: 'var(--footer-ink)', fontFamily: 'var(--font-body)', textDecoration: 'none', transition: 'color 0.2s ease' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent-orange)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--footer-ink)')}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="4" width="20" height="16" rx="2" /><path d="M2 7l10 7 10-7" />
              </svg>
              labibhussain36@gmail.com
            </a>
          </div>

          {/* Explore Column */}
          <div>
            <h4
              style={{
                fontSize: '14px',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                color: '#fff',
                fontFamily: 'var(--font-body)',
                marginBottom: '20px',
              }}
            >
              Explore
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <FooterLink href="/blog" label="Latest Articles" />
              <FooterLink href="/blog?category=AI+Research" label="AI Research" />
              <FooterLink href="/blog?category=Engineering" label="Engineering" />
              <FooterLink href="/blog?category=Tech+Trends" label="Tech Trends" />
              <FooterLink href="/about/author" label="About the Author" />
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4
              style={{
                fontSize: '14px',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                color: '#fff',
                fontFamily: 'var(--font-body)',
                marginBottom: '20px',
              }}
            >
              Company
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <FooterLink href="/about" label="About Us" />
              <FooterLink href="/contact" label="Contact" />
              <FooterLink href="/privacy-policy" label="Privacy Policy" />
              <FooterLink href="/terms-of-service" label="Terms of Service" />
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            borderTop: '1px solid rgba(255,255,255,0.08)',
            paddingTop: '24px',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '16px',
          }}
        >
          <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.4)', fontFamily: 'var(--font-body)' }}>
            © {new Date().getFullYear()} T-blogs. All rights reserved.
          </p>
          <div style={{ display: 'flex', gap: '24px' }}>
            <Link
              href="/privacy-policy"
              style={{ fontSize: '13px', color: 'rgba(255,255,255,0.4)', fontFamily: 'var(--font-body)', textDecoration: 'none', transition: 'color 0.2s ease' }}
              onMouseEnter={(e) => ((e.target as HTMLElement).style.color = 'var(--accent-orange)')}
              onMouseLeave={(e) => ((e.target as HTMLElement).style.color = 'rgba(255,255,255,0.4)')}
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-of-service"
              style={{ fontSize: '13px', color: 'rgba(255,255,255,0.4)', fontFamily: 'var(--font-body)', textDecoration: 'none', transition: 'color 0.2s ease' }}
              onMouseEnter={(e) => ((e.target as HTMLElement).style.color = 'var(--accent-orange)')}
              onMouseLeave={(e) => ((e.target as HTMLElement).style.color = 'rgba(255,255,255,0.4)')}
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterLink({ href, label }: { href: string; label: string }) {
  return (
    <li>
      <Link
        href={href}
        className="transition-colors duration-200"
        style={{
          fontSize: '14px',
          color: 'var(--footer-ink)',
          fontFamily: 'var(--font-body)',
          textDecoration: 'none',
        }}
        onMouseEnter={(e) => ((e.target as HTMLElement).style.color = 'var(--accent-orange)')}
        onMouseLeave={(e) => ((e.target as HTMLElement).style.color = 'var(--footer-ink)')}
      >
        {label}
      </Link>
    </li>
  );
}

function FooterSocialIcon({ label, href, children }: { label: string; href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="transition-all duration-300"
      style={{
        width: '40px',
        height: '40px',
        borderRadius: '50%',
        border: '1px solid rgba(255,255,255,0.12)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'var(--footer-ink)',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = 'var(--accent-orange)';
        e.currentTarget.style.color = 'var(--accent-orange)';
        e.currentTarget.style.background = 'rgba(232,87,14,0.1)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)';
        e.currentTarget.style.color = 'var(--footer-ink)';
        e.currentTarget.style.background = 'transparent';
      }}
    >
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        {children}
      </svg>
    </a>
  );
}

