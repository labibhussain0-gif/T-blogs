'use client';

import { useState, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ArticleCard from '@/components/ArticleCard';
import Toast from '@/components/Toast';
import FAQSection from '@/components/FAQSection';
import { getRelatedArticles, getArticleBySlug } from '@/data/articles';

export default function BlockchainIP() {
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null);
  const article = getArticleBySlug('blockchain-intellectual-property');
  const relatedArticles = getRelatedArticles('blockchain-intellectual-property', 3);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Blockchain in Intellectual Property: A Practical Overview",
    "image": [
      "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=1200&auto=format&fit=crop"
    ],
    "datePublished": "2026-04-25T00:00:00.000Z",
    "dateModified": "2026-04-25T00:00:00.000Z",
    "author": [{
      "@type": "Person",
      "name": "Ashique Hussain",
      "url": "https://t-blogs.com/about/author"
    }]
  };

  const handleShare = useCallback((platform: 'twitter' | 'linkedin' | 'copy') => {
    const title = 'Blockchain in Intellectual Property: A Practical Overview';
    const url = typeof window !== 'undefined' ? window.location.href : 'https://t-blogs.com/blog/blockchain-intellectual-property';

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
            Blockchain in <span style={{ color: 'var(--accent-orange)' }}>Intellectual Property:</span> A Practical Overview
          </h1>

          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
            <img src={article?.authorAvatar ?? '/author-ashique.jpg'} alt={article?.author ?? 'Ashique Hussain'} className="rounded-full" style={{ width: '36px', height: '36px', objectFit: 'cover' }} />
            <div>
              <span style={{ fontSize: '14px', fontWeight: 600, color: 'var(--ink-primary)' }}>{article?.author ?? 'Ashique Hussain'}</span>
              <span style={{ fontSize: '13px', color: 'var(--ink-tertiary)', marginLeft: '8px' }}>· {article?.date ?? 'April 25, 2026'} · {article?.readTime ?? '10 min'} read</span>
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
          <Image src="https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=1200&auto=format&fit=crop" alt="Blockchain network visualization representing distributed ledger technology" fill priority sizes="(max-width: 768px) 100vw, 800px" className="object-cover" />
        </div>

        <div className="prose-editorial" style={{ fontSize: '17px', lineHeight: 1.8, color: 'var(--ink-secondary)' }}>
          <p style={{ fontSize: '19px', lineHeight: 1.7, marginBottom: '32px', color: 'var(--ink-primary)', fontWeight: 400 }}>
            Blockchain in intellectual property is suffering from a massive case of marketing hype. A distributed ledger is not a magical shield that stops someone from right-clicking your image or stealing your codebase. It is simply an immutable, timestamped database. Let&apos;s look at what it actually solves.
          </p>

          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.75rem', color: 'var(--ink-primary)', marginTop: '48px', marginBottom: '20px', paddingBottom: '12px', borderBottom: '1px solid var(--border-light)' }}>
            The "Proof of Existence" Problem
          </h2>
          <p>
            In IP law, proving that you created something before someone else is critical. Traditionally, you might use a "poor man's copyright" (mailing something to yourself) or pay a notary. Blockchain solves this elegantly via Merkle trees.
          </p>
          <p>
            You hash your code repository or digital asset, and commit that hash to a public ledger like Ethereum or Bitcoin. You now have mathematically unforgeable proof that the exact sequence of bytes existed at a specific UTC timestamp.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4" style={{ margin: '40px 0' }}>
            {[
              { label: 'What It Fixes', value: 'Timestamps', desc: 'Indisputable proof of prior art and creation date.' },
              { label: 'What It Fails At', value: 'Enforcement', desc: 'The blockchain cannot send a cease-and-desist letter.' },
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
            If you need distributed consensus for IP registration, use a blockchain. If you just need a fast database to manage your own company's internal licensing, use PostgreSQL. Stop throwing Web3 tech at Web2 problems.
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
