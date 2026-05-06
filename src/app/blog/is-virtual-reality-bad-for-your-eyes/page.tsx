'use client';

import { useState, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ArticleCard from '@/components/ArticleCard';
import Toast from '@/components/Toast';
import FAQSection from '@/components/FAQSection';
import { getRelatedArticles, getArticleBySlug } from '@/data/articles';

export default function VirtualRealityEyes() {
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null);
  const article = getArticleBySlug('is-virtual-reality-bad-for-your-eyes');
  const relatedArticles = getRelatedArticles('is-virtual-reality-bad-for-your-eyes', 3);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Is Virtual Reality Bad for Your Eyes? What the Research Says",
    "image": [
      "https://images.unsplash.com/photo-1592478411213-6153e4ebc07d?q=80&w=1200&auto=format&fit=crop"
    ],
    "datePublished": "2026-04-28T00:00:00.000Z",
    "dateModified": "2026-04-28T00:00:00.000Z",
    "author": [{
      "@type": "Person",
      "name": "Ashique Hussain",
      "url": "https://t-blogs.com/about/author"
    }]
  };

  const handleShare = useCallback((platform: 'twitter' | 'linkedin' | 'copy') => {
    const title = 'Is Virtual Reality Bad for Your Eyes? What the Research Says';
    const url = typeof window !== 'undefined' ? window.location.href : 'https://t-blogs.com/blog/is-virtual-reality-bad-for-your-eyes';

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
        }).catch(() => {
          setToast({ message: 'Failed to copy link', type: 'error' });
        });
        break;
    }
  }, []);

  return (
    <article style={{ background: 'var(--bg-cream)', minHeight: '100vh', fontFamily: 'var(--font-body)' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '48px 24px 80px' }}>
        <nav aria-label="Breadcrumb" style={{ marginBottom: '32px', fontSize: '14px', fontWeight: 500, color: 'var(--ink-tertiary)', fontFamily: 'var(--font-body)' }}>
          <Link href="/blog" style={{ color: 'var(--ink-tertiary)', textDecoration: 'none', transition: 'color 0.2s' }} onMouseEnter={(e) => ((e.target as HTMLElement).style.color = 'var(--accent-orange)')} onMouseLeave={(e) => ((e.target as HTMLElement).style.color = 'var(--ink-tertiary)')}>
            ← Back to Blog
          </Link>
        </nav>

        <header style={{ marginBottom: '40px' }}>
          <span style={{ display: 'inline-block', background: 'var(--accent-orange)', color: '#fff', padding: '4px 14px', borderRadius: 'var(--radius-full)', fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '20px' }}>
            Tech Trends
          </span>

          <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 'clamp(2rem, 4vw, 3rem)', lineHeight: 1.12, color: 'var(--ink-primary)', marginBottom: '24px', letterSpacing: '-0.02em' }}>
            Is Virtual Reality <span style={{ color: 'var(--accent-orange)' }}>Bad for Your Eyes?</span> What the Research Says
          </h1>

          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
            <img src={article?.authorAvatar ?? '/author-ashique.jpg'} alt={article?.author ?? 'Ashique Hussain'} className="rounded-full" style={{ width: '36px', height: '36px', objectFit: 'cover' }} />
            <div>
              <span style={{ fontSize: '14px', fontWeight: 600, color: 'var(--ink-primary)' }}>{article?.author ?? 'Ashique Hussain'}</span>
              <span style={{ fontSize: '13px', color: 'var(--ink-tertiary)', marginLeft: '8px' }}>· {article?.date ?? 'April 28, 2026'} · {article?.readTime ?? '7 min'} read</span>
            </div>
          </div>
        </header>

        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '40px', paddingBottom: '24px', borderBottom: '1px solid var(--border-light)' }}>
          <span style={{ fontSize: '12px', fontWeight: 600, color: 'var(--ink-tertiary)', textTransform: 'uppercase', letterSpacing: '0.08em', marginRight: '8px' }}>Share</span>
          {[
            { label: 'Twitter', platform: 'twitter' as const, icon: <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" /> },
            { label: 'LinkedIn', platform: 'linkedin' as const, icon: <><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></> },
            { label: 'Copy Link', platform: 'copy' as const, icon: <><path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71" /><path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71" /></> },
          ].map((btn) => (
            <button key={btn.label} onClick={() => handleShare(btn.platform)} aria-label={`Share on ${btn.label}`} className="transition-all duration-200" style={{ width: '36px', height: '36px', borderRadius: '50%', border: '1px solid var(--border-light)', background: 'transparent', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--ink-secondary)' }} onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--accent-orange)'; e.currentTarget.style.color = 'var(--accent-orange)'; e.currentTarget.style.background = 'var(--accent-orange-light)'; }} onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--border-light)'; e.currentTarget.style.color = 'var(--ink-secondary)'; e.currentTarget.style.background = 'transparent'; }}>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">{btn.icon}</svg>
            </button>
          ))}
        </div>

        <div style={{ position: 'relative', width: '100%', height: '400px', marginBottom: '48px', borderRadius: 'var(--radius-lg)', overflow: 'hidden' }}>
          <Image src="https://images.unsplash.com/photo-1592478411213-6153e4ebc07d?q=80&w=1200&auto=format&fit=crop" alt="Person wearing a VR headset exploring virtual reality experiences" fill priority sizes="(max-width: 768px) 100vw, 800px" className="object-cover" />
        </div>

        <div className="prose-editorial" style={{ fontSize: '17px', lineHeight: 1.8, color: 'var(--ink-secondary)' }}>
          <p style={{ fontSize: '19px', lineHeight: 1.7, marginBottom: '32px', color: 'var(--ink-primary)', fontWeight: 400 }}>
            Is virtual reality destroying your retinas? Short answer: No, but it&apos;s confusing your brain. The hardware isn&apos;t frying your eyeballs with radiation; it&apos;s exposing an architectural quirk in how human vision works. Let&apos;s put the sensationalism aside and look at the actual optical mechanics.
          </p>

          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.75rem', color: 'var(--ink-primary)', marginTop: '48px', marginBottom: '20px', paddingBottom: '12px', borderBottom: '1px solid var(--border-light)' }}>
            The Vergence-Accommodation Conflict
          </h2>
          <p>
            When you look at an object in the real world, your eyes do two things simultaneously: they point toward the object (vergence) and they focus their lenses on it (accommodation). In a VR headset, the screen is fixed a couple of inches from your face, but the simulated objects are rendered at varying distances.
          </p>
          <p>
            Your eyes are forced to converge on a distant virtual mountain while accommodating (focusing) on a screen two inches away. This sensory mismatch is what causes the headache, not "blue light."
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4" style={{ margin: '40px 0' }}>
            {[
              { label: 'The Real Issue', value: 'Eye Strain', desc: 'Temporary fatigue from the vergence-accommodation conflict.' },
              { label: 'The Myth', value: 'Permanent Damage', desc: 'No clinical evidence suggests VR causes permanent vision loss in healthy adults.' },
            ].map((fact) => (
              <div key={fact.label} style={{ padding: '24px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-light)', background: 'var(--bg-white)' }}>
                <span style={{ fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--ink-tertiary)' }}>{fact.label}</span>
                <p style={{ fontSize: '17px', fontWeight: 700, color: 'var(--ink-primary)', marginTop: '8px', marginBottom: '8px' }}>{fact.value}</p>
                <p style={{ fontSize: '13px', color: 'var(--ink-secondary)', lineHeight: 1.5 }}>{fact.desc}</p>
              </div>
            ))}
          </div>

          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.5rem', color: 'var(--ink-primary)', marginTop: '48px', marginBottom: '16px' }}>
            The Verdict
          </h2>
          <p>
            Take the headset off every 30 minutes. Apply the 20-20-20 rule (look at something 20 feet away for 20 seconds). Treat VR like sitting too close to a monitor, not staring at the sun.
          </p>
        </div>
      </div>

      {article?.faq && article.faq.length > 0 && (
        <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 24px' }}>
          <FAQSection faqs={article.faq} />
        </div>
      )}

      {relatedArticles.length > 0 && (
        <section style={{ borderTop: '1px solid var(--border-light)', background: 'var(--bg-white)', padding: '80px 24px' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
            <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(1.5rem, 3vw, 2rem)', color: 'var(--ink-primary)', marginBottom: '40px' }}>
              Related Articles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedArticles.map((article) => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </div>
          </div>
        </section>
      )}

      {toast && <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} />}
    </article>
  );
}
