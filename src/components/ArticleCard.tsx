'use client';

import Link from 'next/link';
import type { Article } from '@/data/articles';

interface ArticleCardProps {
  article: Article;
  variant?: 'default' | 'compact' | 'featured' | 'horizontal';
}

export default function ArticleCard({
  article,
  variant = 'default',
}: ArticleCardProps) {
  if (variant === 'featured') {
    return <FeaturedCard article={article} />;
  }
  if (variant === 'horizontal') {
    return <HorizontalCard article={article} />;
  }
  if (variant === 'compact') {
    return <CompactCard article={article} />;
  }
  return <DefaultCard article={article} />;
}

/* ===== Default Card ===== */
function DefaultCard({ article }: { article: Article }) {
  return (
    <article className="group flex flex-col h-full">
      {/* Image */}
      <Link href={`/blog/${article.slug}`} className="block relative overflow-hidden mb-4" style={{ borderRadius: 'var(--radius-md)', aspectRatio: '16/10' }} aria-label={`Read ${article.title}`}>
        <span className="sr-only">{article.title}</span>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={article.image}
          alt={article.title}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute top-3 left-3">
          <span
            style={{
              background: 'var(--accent-orange)',
              color: '#fff',
              padding: '4px 12px',
              borderRadius: 'var(--radius-full)',
              fontSize: '11px',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.06em',
              fontFamily: 'var(--font-body)',
            }}
          >
            {article.category}
          </span>
        </div>
      </Link>

      {/* Author Row */}
      <div className="flex items-center gap-2 mb-3">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={article.authorAvatar}
          alt={article.author}
          className="rounded-full object-cover"
          style={{ width: '28px', height: '28px' }}
          loading="lazy"
        />
        <span style={{ fontSize: '13px', color: 'var(--ink-secondary)', fontFamily: 'var(--font-body)', fontWeight: 500 }}>
          {article.author}
        </span>
        <span style={{ fontSize: '12px', color: 'var(--ink-tertiary)', fontFamily: 'var(--font-body)' }}>
          — {article.date}
        </span>
      </div>

      {/* Title */}
      <h3
        className="group-hover:text-[var(--accent-orange)] transition-colors duration-300"
        style={{
          fontFamily: 'var(--font-display)',
          fontWeight: 700,
          fontSize: 'clamp(1rem, 2vw, 1.25rem)',
          lineHeight: 1.3,
          color: 'var(--ink-primary)',
          marginBottom: '8px',
        }}
      >
        <Link href={`/blog/${article.slug}`}>{article.title}</Link>
      </h3>

      {/* Excerpt */}
      <p
        style={{
          fontFamily: 'var(--font-body)',
          fontSize: '14px',
          color: 'var(--ink-secondary)',
          lineHeight: 1.6,
          display: '-webkit-box',
          WebkitLineClamp: 3,
          WebkitBoxOrient: 'vertical',
          overflow: 'hidden',
          marginBottom: '16px',
        }}
      >
        {article.excerpt}
      </p>

      {/* Footer Stats */}
      <div className="mt-auto flex items-center justify-between">
        <div className="flex items-center gap-4" style={{ fontSize: '12px', color: 'var(--ink-tertiary)', fontFamily: 'var(--font-body)' }}>
          <span className="flex items-center gap-1">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
            {article.readTime}
          </span>
          <span className="flex items-center gap-1">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>
            {article.commentCount}
          </span>
        </div>
        <Link
          href={`/blog/${article.slug}`}
          aria-label={`Read ${article.title}`}
          className="flex items-center justify-center transition-colors duration-300"
          style={{
            width: '36px',
            height: '36px',
            borderRadius: 'var(--radius-sm)',
            background: 'var(--accent-orange)',
            color: '#fff',
          }}
        >
          <span className="sr-only">Read {article.title}</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
          </svg>
        </Link>
      </div>
    </article>
  );
}

/* ===== Featured Card (Hero) ===== */
function FeaturedCard({ article }: { article: Article }) {
  return (
    <article className="group grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
      {/* Left — Content */}
      <div className="order-2 lg:order-1">
        <div className="flex items-center gap-2 mb-4">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={article.authorAvatar} alt={article.author} className="rounded-full object-cover" style={{ width: '32px', height: '32px' }} />
          <span style={{ fontSize: '14px', color: 'var(--ink-secondary)', fontFamily: 'var(--font-body)', fontWeight: 500 }}>
            {article.author}
          </span>
          <span style={{ fontSize: '13px', color: 'var(--ink-tertiary)' }}>— {article.date}</span>
        </div>

        <h1
          className="group-hover:text-[var(--accent-orange)] transition-colors duration-300"
          style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 900,
            fontSize: 'clamp(2rem, 4.5vw, 3.25rem)',
            lineHeight: 1.1,
            color: 'var(--ink-primary)',
            marginBottom: '20px',
            letterSpacing: '-0.02em',
          }}
        >
          <Link href={`/blog/${article.slug}`}>{article.title}</Link>
        </h1>

        <p
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '16px',
            color: 'var(--ink-secondary)',
            lineHeight: 1.7,
            marginBottom: '28px',
            maxWidth: '500px',
          }}
        >
          {article.excerpt}
        </p>

        <Link
          href={`/blog/${article.slug}`}
          className="inline-flex items-center justify-center gap-2 transition-all duration-300 hover:gap-3"
          style={{
            background: 'var(--accent-orange)',
            color: '#fff',
            padding: '14px 32px',
            borderRadius: 'var(--radius-full)',
            fontSize: '14px',
            fontWeight: 600,
            fontFamily: 'var(--font-body)',
            letterSpacing: '0.02em',
            border: 'none',
          }}
        >
          Read Article
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
          </svg>
        </Link>
      </div>

      {/* Right — Image */}
      <div className="order-1 lg:order-2 relative overflow-hidden" style={{ borderRadius: 'var(--radius-lg)', aspectRatio: '4/3' }}>
        <Link href={`/blog/${article.slug}`} aria-label={`Read ${article.title}`}>
          <span className="sr-only">{article.title}</span>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={article.image}
            alt={article.title}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </Link>
        {/* Metadata overlay */}
        <div className="absolute bottom-4 right-4 flex items-center gap-3" style={{ fontFamily: 'var(--font-body)' }}>
          <span style={{ background: 'rgba(255,255,255,0.92)', backdropFilter: 'blur(8px)', padding: '6px 14px', borderRadius: 'var(--radius-full)', fontSize: '12px', fontWeight: 600, color: 'var(--ink-primary)' }}>
            {article.readTime}
          </span>
          <span style={{ background: 'var(--accent-orange)', padding: '6px 14px', borderRadius: 'var(--radius-full)', fontSize: '12px', fontWeight: 700, color: '#fff' }}>
            {article.category}
          </span>
        </div>
      </div>
    </article>
  );
}

/* ===== Horizontal Card ===== */
function HorizontalCard({ article }: { article: Article }) {
  return (
    <article className="group flex gap-4 items-start">
      <Link href={`/blog/${article.slug}`} className="flex-shrink-0 relative overflow-hidden" style={{ width: '120px', height: '90px', borderRadius: 'var(--radius-sm)' }} aria-label={`Read ${article.title}`}>
        <span className="sr-only">{article.title}</span>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={article.image} alt={article.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
      </Link>
      <div className="flex-1 min-w-0">
        <span style={{ fontSize: '11px', color: 'var(--accent-orange)', fontWeight: 700, fontFamily: 'var(--font-body)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
          {article.category}
        </span>
        <h4
          className="group-hover:text-[var(--accent-orange)] transition-colors duration-300"
          style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '15px', lineHeight: 1.3, color: 'var(--ink-primary)', marginTop: '4px', marginBottom: '4px', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}
        >
          <Link href={`/blog/${article.slug}`}>{article.title}</Link>
        </h4>
        <div className="flex items-center gap-2" style={{ fontSize: '11px', color: 'var(--ink-tertiary)', fontFamily: 'var(--font-body)' }}>
          <span>{article.readTime}</span>
          <span>·</span>
          <span>{article.date}</span>
        </div>
      </div>
    </article>
  );
}

/* ===== Compact Card ===== */
function CompactCard({ article }: { article: Article }) {
  return (
    <article className="group flex flex-col">
      <Link href={`/blog/${article.slug}`} className="block relative overflow-hidden mb-3" style={{ borderRadius: 'var(--radius-sm)', aspectRatio: '16/9' }} aria-label={`Read ${article.title}`}>
        <span className="sr-only">{article.title}</span>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={article.image} alt={article.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
      </Link>
      <span style={{ fontSize: '11px', color: 'var(--accent-orange)', fontWeight: 700, fontFamily: 'var(--font-body)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
        {article.category}
      </span>
      <h4
        className="group-hover:text-[var(--accent-orange)] transition-colors duration-300"
        style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '15px', lineHeight: 1.3, color: 'var(--ink-primary)', marginTop: '6px' }}
      >
        <Link href={`/blog/${article.slug}`}>{article.title}</Link>
      </h4>
    </article>
  );
}
