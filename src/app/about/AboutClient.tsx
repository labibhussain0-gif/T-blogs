'use client';

import Link from 'next/link';
import { generateOrganizationSchema } from '@/lib/seo-helpers';
import { AUTHOR } from '@/data/articles';

const orgSchema = generateOrganizationSchema();

const topics = [
  {
    name: 'AI Research',
    description: 'Deep dives into large language models, agentic frameworks, and the cutting edge of artificial intelligence.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--accent-orange)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a4 4 0 014 4v1a1 1 0 001 1h1a4 4 0 010 8h-1a1 1 0 00-1 1v1a4 4 0 01-8 0v-1a1 1 0 00-1-1H6a4 4 0 010-8h1a1 1 0 001-1V6a4 4 0 014-4z" />
        <circle cx="12" cy="12" r="2" />
      </svg>
    ),
  },
  {
    name: 'Engineering',
    description: 'Scalable architectures, framework comparisons, and production-grade patterns for modern software.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--accent-orange)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
  {
    name: 'Tech Trends',
    description: 'Quantum computing, edge computing, VR, wearable tech — the technologies shaping tomorrow.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--accent-orange)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" /><path d="M12 2a14.5 14.5 0 000 20 14.5 14.5 0 000-20" /><line x1="2" y1="12" x2="22" y2="12" />
      </svg>
    ),
  },
  {
    name: 'Design',
    description: 'CSS architectures, design systems, and the intersection of engineering and visual craft.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--accent-orange)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 19l7-7 3 3-7 7-3-3z" /><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" /><path d="M2 2l7.586 7.586" /><circle cx="11" cy="11" r="2" />
      </svg>
    ),
  },
];

export default function AboutClient() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />
      <div style={{ width: '100%' }}>
      {/* Hero */}
      <section
        style={{
          background: 'var(--bg-white)',
          borderBottom: '1px solid var(--border-light)',
          padding: '80px 24px',
          textAlign: 'center',
        }}
      >
        <div style={{ maxWidth: '720px', margin: '0 auto' }}>
          <h1
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 900,
              fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
              color: 'var(--ink-primary)',
              marginBottom: '20px',
              letterSpacing: '-0.03em',
              lineHeight: 1.1,
            }}
          >
            Built by engineers,{' '}
            <span style={{ color: 'var(--accent-orange)', fontStyle: 'italic' }}>for engineers.</span>
          </h1>
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '17px',
              color: 'var(--ink-secondary)',
              lineHeight: 1.7,
              maxWidth: '560px',
              margin: '0 auto',
            }}
          >
            T-blogs is a no-nonsense tech publication that cuts through the hype to deliver actionable, deeply technical content on AI, software engineering, and emerging technologies.
          </p>
        </div>
      </section>

      {/* The Architect Section */}
      <section
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '80px 24px',
        }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span
              style={{
                display: 'inline-block',
                fontSize: '12px',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                color: 'var(--accent-orange)',
                fontFamily: 'var(--font-body)',
                marginBottom: '16px',
              }}
            >
              Meet the voice
            </span>
            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 700,
                fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)',
                color: 'var(--ink-primary)',
                marginBottom: '20px',
                lineHeight: 1.15,
              }}
            >
              {AUTHOR.name}
            </h2>
            <div style={{ fontFamily: 'var(--font-body)', fontSize: '16px', color: 'var(--ink-secondary)', lineHeight: 1.8 }}>
              <p style={{ marginBottom: '16px' }}>
                Every article on T-blogs is written with the precision and perspective of a senior-level developer who builds the infrastructure of AI. The tone is punchy, precise, and answer-first.
              </p>
              <p style={{ marginBottom: '16px' }}>
                No marketing jargon. No &ldquo;revolutionary&rdquo; or &ldquo;seamless&rdquo; fillers. Just straight engineering insight with the occasional deadpan humor of someone who has debugged production at 3 AM one too many times.
              </p>
              <p>
                Whether it is dissecting a new LLM architecture or explaining why your Nginx config is wrong, the goal is always the same: give you the answer first, then explain why.
              </p>
            </div>
          </div>

          {/* Visual Block */}
          <div
            style={{
              background: 'var(--bg-warm-gray)',
              borderRadius: 'var(--radius-lg)',
              padding: '48px',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '13px',
                color: 'var(--ink-tertiary)',
                lineHeight: 2,
              }}
            >
              <div style={{ color: 'var(--accent-orange)', fontWeight: 700, marginBottom: '16px' }}>// principles.ts</div>
              <div><span style={{ color: 'var(--ink-tertiary)' }}>const</span> <span style={{ color: 'var(--ink-primary)' }}>VOICE</span> = {'{'}</div>
              <div style={{ paddingLeft: '20px' }}>
                <div>tone: <span style={{ color: '#22C55E' }}>&quot;answer-first&quot;</span>,</div>
                <div>jargon: <span style={{ color: '#EF4444' }}>false</span>,</div>
                <div>humor: <span style={{ color: '#22C55E' }}>&quot;deadpan-engineering&quot;</span>,</div>
                <div>depth: <span style={{ color: '#22C55E' }}>&quot;senior-architect&quot;</span>,</div>
                <div>filler: <span style={{ color: '#EF4444' }}>null</span>,</div>
              </div>
              <div>{'}'}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Author Page Link */}
      <div style={{ textAlign: 'center', padding: '24px 0 40px' }}>
        <Link href="/about/author" className="transition-all duration-300"
          style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '12px 28px', borderRadius: 'var(--radius-full)', border: '1.5px solid var(--border-light)', fontSize: '14px', fontWeight: 600, fontFamily: 'var(--font-body)', color: 'var(--ink-secondary)', textDecoration: 'none' }}
          onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--accent-orange)'; e.currentTarget.style.color = 'var(--accent-orange)'; }}
          onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--border-light)'; e.currentTarget.style.color = 'var(--ink-secondary)'; }}
        >
          View full author profile →
        </Link>
      </div>

      {/* Topics Grid */}
      <section
        style={{
          background: 'var(--bg-white)',
          borderTop: '1px solid var(--border-light)',
          borderBottom: '1px solid var(--border-light)',
          padding: '80px 24px',
        }}
      >
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 700,
                fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)',
                color: 'var(--ink-primary)',
                marginBottom: '12px',
              }}
            >
              What we cover
            </h2>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '16px', color: 'var(--ink-secondary)', maxWidth: '480px', margin: '0 auto' }}>
              Four pillars of technical content, each explored with depth and honesty.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {topics.map((topic) => (
              <Link
                key={topic.name}
                href={`/blog?category=${encodeURIComponent(topic.name)}`}
                className="group transition-all duration-300"
                style={{
                  padding: '32px 24px',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid var(--border-light)',
                  background: 'var(--bg-white)',
                  textDecoration: 'none',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '16px',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--accent-orange)';
                  e.currentTarget.style.boxShadow = '0 8px 32px var(--shadow-warm)';
                  e.currentTarget.style.transform = 'translateY(-4px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--border-light)';
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                {topic.icon}
                <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '18px', color: 'var(--ink-primary)' }}>
                  {topic.name}
                </h3>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '14px', color: 'var(--ink-secondary)', lineHeight: 1.6 }}>
                  {topic.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        style={{
          padding: '80px 24px',
          textAlign: 'center',
        }}
      >
        <div style={{ maxWidth: '560px', margin: '0 auto' }}>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 700,
              fontSize: 'clamp(1.5rem, 3vw, 2rem)',
              color: 'var(--ink-primary)',
              marginBottom: '16px',
            }}
          >
            Ready to dive in?
          </h2>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '16px', color: 'var(--ink-secondary)', marginBottom: '32px', lineHeight: 1.7 }}>
            Start reading our latest articles or explore by category.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
            <Link
              href="/blog"
              className="transition-all duration-300"
              style={{
                padding: '14px 32px',
                borderRadius: 'var(--radius-full)',
                background: 'var(--accent-orange)',
                color: '#fff',
                fontSize: '14px',
                fontWeight: 600,
                fontFamily: 'var(--font-body)',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = 'var(--accent-orange-hover)')}
              onMouseLeave={(e) => (e.currentTarget.style.background = 'var(--accent-orange)')}
            >
              Read Latest Articles
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>
            <Link
              href="/"
              className="transition-all duration-300"
              style={{
                padding: '14px 32px',
                borderRadius: 'var(--radius-full)',
                background: 'transparent',
                color: 'var(--ink-primary)',
                fontSize: '14px',
                fontWeight: 600,
                fontFamily: 'var(--font-body)',
                textDecoration: 'none',
                border: '2px solid var(--border-light)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--accent-orange)';
                e.currentTarget.style.color = 'var(--accent-orange)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--border-light)';
                e.currentTarget.style.color = 'var(--ink-primary)';
              }}
            >
              Back to Home
            </Link>
          </div>
        </div>
      </section>
      </div>
    </>
  );
}
