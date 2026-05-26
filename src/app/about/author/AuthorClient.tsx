'use client';

import Link from 'next/link';
import Image from 'next/image';
import { AUTHOR } from '@/data/articles';
import { generatePersonSchema, generateBreadcrumbSchema, SITE_URL, SITE_NAME } from '@/lib/seo-helpers';

const authorSchema = generatePersonSchema({
  name: AUTHOR.name,
  url: `${SITE_URL}${AUTHOR.page}`,
  image: `${SITE_URL}${AUTHOR.avatar}`,
  jobTitle: 'Tech Writer & AI Researcher',
  description: AUTHOR.bio,
  sameAs: [AUTHOR.linkedin, AUTHOR.twitter],
});

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Ashique Hussain', href: '/about/author' },
]);

const expertiseAreas = [
  { title: 'Artificial Intelligence', description: 'Large language models, agentic frameworks, AI governance, and practical AI integration.' },
  { title: 'Cybersecurity', description: 'Security engineering, threat analysis, and the intersection of AI and modern cyber defence.' },
  { title: 'Emerging Tech', description: 'Blockchain applications, VR/AR, and the regulatory landscape shaping the next decade of tech.' },
  { title: 'Software Engineering', description: 'Scalable system design, full-stack development, and production-grade architectural patterns.' },
];

export default function AuthorClient() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(authorSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <div style={{ width: '100%' }}>
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" style={{ maxWidth: '1280px', margin: '0 auto', padding: '20px 24px 0', fontSize: '13px', color: 'var(--ink-tertiary)', fontFamily: 'var(--font-body)', display: 'flex', gap: '8px', alignItems: 'center' }}>
          <Link href="/" style={{ color: 'var(--ink-tertiary)', textDecoration: 'none' }}>Home</Link>
          <span>›</span>
          <Link href="/about" style={{ color: 'var(--ink-tertiary)', textDecoration: 'none' }}>About</Link>
          <span>›</span>
          <span style={{ color: 'var(--ink-primary)', fontWeight: 500 }}>{AUTHOR.name}</span>
        </nav>

        <section style={{ maxWidth: '1280px', margin: '0 auto', padding: '56px 24px 80px' }}>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-start">
            {/* Author Card */}
            <div className="lg:col-span-2">
              <div style={{ background: 'var(--bg-white)', border: '1px solid var(--border-light)', borderRadius: 'var(--radius-lg)', padding: '40px 32px', textAlign: 'center', position: 'sticky', top: '96px' }}>
                <div style={{ width: '140px', height: '140px', borderRadius: '50%', overflow: 'hidden', margin: '0 auto 24px', border: '4px solid var(--accent-orange)', position: 'relative' }}>
                  <Image src={AUTHOR.avatar} alt={`${AUTHOR.name} — Tech Writer at ${SITE_NAME}`} fill className="object-cover" priority />
                </div>
                <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 'clamp(1.375rem, 3vw, 1.75rem)', color: 'var(--ink-primary)', marginBottom: '8px', letterSpacing: '-0.02em' }}>
                  {AUTHOR.name}
                </h1>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '14px', fontWeight: 600, color: 'var(--accent-orange)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '4px' }}>
                  Tech Writer & AI Researcher
                </p>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '12px', fontWeight: 500, color: 'var(--ink-secondary)', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '20px' }}>
                  B.Sc. in Computer Science & Engineering
                </p>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '15px', color: 'var(--ink-secondary)', lineHeight: 1.7, marginBottom: '28px' }}>
                  {AUTHOR.bio}
                </p>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '12px' }}>
                  {[
                    { label: 'Twitter', href: AUTHOR.twitter, ariaLabel: 'Ashique Hussain on Twitter' },
                    { label: 'LinkedIn', href: AUTHOR.linkedin, ariaLabel: 'Ashique Hussain on LinkedIn' },
                  ].map((s) => (
                    <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.ariaLabel}
                      className="transition-all duration-300"
                      style={{ padding: '10px 20px', borderRadius: 'var(--radius-full)', border: '1.5px solid var(--border-light)', fontSize: '13px', fontWeight: 600, fontFamily: 'var(--font-body)', color: 'var(--ink-secondary)', textDecoration: 'none' }}
                      onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--accent-orange)'; e.currentTarget.style.color = 'var(--accent-orange)'; }}
                      onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--border-light)'; e.currentTarget.style.color = 'var(--ink-secondary)'; }}
                    >
                      {s.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Bio + Expertise */}
            <div className="lg:col-span-3">
              <span style={{ display: 'inline-block', fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--accent-orange)', fontFamily: 'var(--font-body)', marginBottom: '12px' }}>
                About the Author
              </span>
              <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(1.375rem, 3.5vw, 2.25rem)', color: 'var(--ink-primary)', marginBottom: '24px', lineHeight: 1.15, letterSpacing: '-0.02em' }}>
                The voice behind T-blogs
              </h2>
              <div style={{ fontFamily: 'var(--font-body)', fontSize: '16px', color: 'var(--ink-secondary)', lineHeight: 1.8, marginBottom: '40px' }}>
                <p style={{ marginBottom: '16px' }}>
                  I am a systems engineer and technical researcher holding a <strong>Bachelor of Science (B.Sc.) in Computer Science & Engineering</strong>. With over a decade of hands-on experience in infrastructure design, security audits, and backend performance, I write about artificial intelligence, cybersecurity, and emerging technologies with the precision of a seasoned engineer. You can connect with me or follow my work directly on <a href="https://www.linkedin.com/in/ashique-hussain-a94738406" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-orange)', textDecoration: 'underline' }}>LinkedIn</a> and inspect my open-source contributions on <a href="https://github.com/t-blogs" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-orange)', textDecoration: 'underline' }}>GitHub</a>.
                </p>
                <p style={{ marginBottom: '16px' }}>
                  Throughout my career, I have designed and executed critical systems engineering initiatives. My architectural achievements include designing and managing high-availability PostgreSQL clusters to guarantee zero data loss and 99.999% uptime for business-critical applications, auditing Docker and Kubernetes container environment security profiles to implement strict zero-trust network policies, and architecting and scaling enterprise vector databases to achieve sub-10 millisecond RAG (Retrieval-Augmented Generation) latency across millions of high-dimensional document chunks.
                </p>
                <p style={{ marginBottom: '16px' }}>
                  My approach to technical writing is relentlessly answer-first. You came here with a production-breaking issue, an architectural challenge, or a hard design decision—I deliver the concrete answer in the very first paragraph. The rigorous technical justification, complete with benchmark figures and step-by-step verified code, follows.
                </p>
                <p>
                  Every article published on T-blogs is authored or vetted by me to ensure there is no marketing jargon, no generative AI boilerplate slop, and no filler. I aim to answer the tough systems questions that do not get straight or honest answers elsewhere in the tech ecosystem.
                </p>
              </div>

              <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.25rem', color: 'var(--ink-primary)', marginBottom: '20px' }}>
                Areas of Focus
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4" style={{ marginBottom: '40px' }}>
                {expertiseAreas.map((area) => (
                  <div key={area.title} style={{ padding: '20px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-light)', background: 'var(--bg-white)' }}>
                    <h4 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '15px', color: 'var(--accent-orange)', marginBottom: '6px' }}>{area.title}</h4>
                    <p style={{ fontFamily: 'var(--font-body)', fontSize: '14px', color: 'var(--ink-secondary)', lineHeight: 1.6, margin: 0 }}>{area.description}</p>
                  </div>
                ))}
              </div>

              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                <Link href="/blog" className="transition-all duration-300"
                  style={{ padding: '13px 28px', borderRadius: 'var(--radius-full)', background: 'var(--accent-orange)', color: '#fff', fontSize: '14px', fontWeight: 600, fontFamily: 'var(--font-body)', textDecoration: 'none' }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = 'var(--accent-orange-hover)')}
                  onMouseLeave={(e) => (e.currentTarget.style.background = 'var(--accent-orange)')}
                >
                  Read All Articles
                </Link>
                <Link href="/contact" className="transition-all duration-300"
                  style={{ padding: '13px 28px', borderRadius: 'var(--radius-full)', background: 'transparent', color: 'var(--ink-primary)', fontSize: '14px', fontWeight: 600, fontFamily: 'var(--font-body)', textDecoration: 'none', border: '2px solid var(--border-light)' }}
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--accent-orange)'; e.currentTarget.style.color = 'var(--accent-orange)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--border-light)'; e.currentTarget.style.color = 'var(--ink-primary)'; }}
                >
                  Get in Touch
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
