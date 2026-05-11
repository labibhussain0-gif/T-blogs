'use client';

import { useState, useRef } from 'react';
import ArticleCard from '@/components/ArticleCard';
import CategoryTabs from '@/components/CategoryTabs';
import NewsletterForm from '@/components/NewsletterForm';
import { articles, getFeaturedArticle, getArticlesByCategory } from '@/data/articles';

const filterCategories = ['All', 'AI Research', 'Engineering', 'Tech Trends', 'Design'];

export default function HomeClient() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [heroTab, setHeroTab] = useState('Popular in AI');
  const carouselRef = useRef<HTMLDivElement>(null);
  const latestArticlesRef = useRef<HTMLDivElement>(null);
  const featuredArticle = getFeaturedArticle();
  const trendingArticle = articles.reduce((max, a) => (a.commentCount > max.commentCount ? a : max), articles[0]);
  const heroArticle = heroTab === 'Trending' ? trendingArticle : featuredArticle;
  const filteredArticles = getArticlesByCategory(activeCategory);
  const mustReadArticles = articles.slice(1, 5);
  const weeklyHighlights = articles.slice(2, 10);

  const scrollCarousel = (dir: 'left' | 'right') => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: dir === 'right' ? 340 : -340,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div style={{ width: '100%' }}>

      {/* ===== SECTION 1: Hero ===== */}
      <section
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '48px 24px 64px',
        }}
      >
        {/* Category Label */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
            marginBottom: '32px',
            paddingBottom: '16px',
            borderBottom: '1px solid var(--border-light)',
          }}
        >
          <span
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
              fontWeight: 900,
              fontStyle: 'italic',
              color: 'var(--ink-primary)',
              lineHeight: 1,
              letterSpacing: '-0.03em',
            }}
          >
            Tech.
          </span>
          <div style={{ display: 'flex', gap: '8px', marginLeft: 'auto' }}>
            {['Popular in AI', 'By Topic', 'Trending'].map((tab) => (
              <span
                key={tab}
                onClick={() => {
                  setHeroTab(tab);
                  if (tab === 'By Topic' && latestArticlesRef.current) {
                    latestArticlesRef.current.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                style={{
                  padding: '6px 16px',
                  borderRadius: 'var(--radius-full)',
                  fontSize: '12px',
                  fontWeight: 600,
                  fontFamily: 'var(--font-body)',
                  background: heroTab === tab ? 'var(--ink-primary)' : 'transparent',
                  color: heroTab === tab ? '#fff' : 'var(--ink-tertiary)',
                  border: heroTab === tab ? 'none' : '1px solid var(--border-light)',
                  cursor: 'pointer',
                }}
              >
                {tab}
              </span>
            ))}
          </div>
        </div>

        <ArticleCard article={heroArticle} variant="featured" />
      </section>

      {/* ===== SECTION 2: Latest Articles ===== */}
      <section
        ref={latestArticlesRef}
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '0 24px 80px',
        }}
      >
        {/* Section Header */}
        <div
          className="flex flex-col sm:flex-row sm:items-center justify-between gap-4"
          style={{ marginBottom: '40px' }}
        >
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 700,
              fontSize: 'clamp(1.5rem, 3vw, 2rem)',
              color: 'var(--ink-primary)',
              margin: 0,
            }}
          >
            Latest Articles
          </h2>
          <div className="flex items-center gap-4">
            <CategoryTabs
              categories={filterCategories}
              activeCategory={activeCategory}
              onCategoryChange={setActiveCategory}
            />
          </div>
        </div>

        {/* Article Grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 stagger-children"
        >
          {filteredArticles.slice(0, 6).map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>

        {/* See All */}
        <div style={{ textAlign: 'center', marginTop: '48px' }}>
          <a
            href="/blog"
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '14px',
              fontWeight: 600,
              color: 'var(--accent-orange)',
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              transition: 'gap 0.3s ease',
            }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.gap = '10px')}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.gap = '6px')}
          >
            See all articles
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
            </svg>
          </a>
        </div>
      </section>

      {/* ===== SECTION 3: Must Read ===== */}
      <section
        style={{
          borderTop: '1px solid var(--border-light)',
          borderBottom: '1px solid var(--border-light)',
          background: 'var(--bg-white)',
          padding: '80px 0',
        }}
      >
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
          {/* Section Header */}
          <div
            className="flex items-center justify-between"
            style={{ marginBottom: '40px' }}
          >
            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 700,
                fontSize: 'clamp(1.5rem, 3vw, 2rem)',
                color: 'var(--ink-primary)',
                margin: 0,
              }}
            >
              Must Read
            </h2>
            <a
              href="/blog"
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '14px',
                fontWeight: 600,
                color: 'var(--accent-orange)',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '4px',
              }}
            >
              See all
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </a>
          </div>

          {/* Asymmetric Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {/* Large featured card */}
            <div className="lg:col-span-3">
              {mustReadArticles[0] && (
                <article className="group relative overflow-hidden h-full" style={{ borderRadius: 'var(--radius-lg)', minHeight: '420px' }}>
                  <a href={`/blog/${mustReadArticles[0].slug}`}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={mustReadArticles[0].image}
                      alt={mustReadArticles[0].title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div
                      style={{
                        position: 'absolute',
                        inset: 0,
                        background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.2) 50%, transparent 100%)',
                      }}
                    />
                    <div
                      style={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        padding: '32px',
                      }}
                    >
                      <span
                        style={{
                          display: 'inline-block',
                          background: 'var(--accent-orange)',
                          color: '#fff',
                          padding: '4px 12px',
                          borderRadius: 'var(--radius-full)',
                          fontSize: '11px',
                          fontWeight: 700,
                          textTransform: 'uppercase',
                          letterSpacing: '0.06em',
                          fontFamily: 'var(--font-body)',
                          marginBottom: '12px',
                        }}
                      >
                        {mustReadArticles[0].category}
                      </span>
                      <h3
                        style={{
                          fontFamily: 'var(--font-display)',
                          fontWeight: 700,
                          fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)',
                          color: '#fff',
                          lineHeight: 1.25,
                          marginBottom: '8px',
                        }}
                      >
                        {mustReadArticles[0].title}
                      </h3>
                      <p
                        style={{
                          fontFamily: 'var(--font-body)',
                          fontSize: '14px',
                          color: 'rgba(255,255,255,0.7)',
                          lineHeight: 1.6,
                          maxWidth: '500px',
                        }}
                      >
                        {mustReadArticles[0].excerpt}
                      </p>
                      <div style={{ marginTop: '16px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={mustReadArticles[0].authorAvatar} alt="" className="rounded-full" style={{ width: '28px', height: '28px' }} />
                        <span style={{ fontSize: '13px', color: 'rgba(255,255,255,0.8)', fontFamily: 'var(--font-body)', fontWeight: 500 }}>
                          {mustReadArticles[0].author}
                        </span>
                        <span style={{ fontSize: '12px', color: 'rgba(255,255,255,0.5)' }}>·</span>
                        <span style={{ fontSize: '12px', color: 'rgba(255,255,255,0.5)', fontFamily: 'var(--font-body)' }}>
                          {mustReadArticles[0].readTime}
                        </span>
                      </div>
                    </div>
                  </a>
                </article>
              )}
            </div>

            {/* Right — stacked cards */}
            <div className="lg:col-span-2 flex flex-col gap-6">
              {mustReadArticles.slice(1, 4).map((article) => (
                <ArticleCard key={article.id} article={article} variant="horizontal" />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== SECTION 4: Weekly Highlights (Carousel) ===== */}
      <section
        style={{
          padding: '80px 0',
        }}
      >
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
          {/* Section Header */}
          <div className="flex items-center justify-between" style={{ marginBottom: '40px' }}>
            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 700,
                fontSize: 'clamp(1.5rem, 3vw, 2rem)',
                color: 'var(--ink-primary)',
                margin: 0,
              }}
            >
              Weekly Highlights
            </h2>
            <div style={{ display: 'flex', gap: '8px' }}>
              <button
                onClick={() => scrollCarousel('left')}
                aria-label="Scroll left"
                className="transition-all duration-200"
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  border: '1.5px solid var(--border-light)',
                  background: 'var(--bg-white)',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--ink-secondary)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--accent-orange)';
                  e.currentTarget.style.color = 'var(--accent-orange)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--border-light)';
                  e.currentTarget.style.color = 'var(--ink-secondary)';
                }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="15 18 9 12 15 6" />
                </svg>
              </button>
              <button
                onClick={() => scrollCarousel('right')}
                aria-label="Scroll right"
                className="transition-all duration-200"
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  border: '1.5px solid var(--accent-orange)',
                  background: 'var(--accent-orange)',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#fff',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'var(--accent-orange-hover)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'var(--accent-orange)';
                }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </button>
            </div>
          </div>

          {/* Carousel */}
          <div
            ref={carouselRef}
            className="snap-scroll"
            style={{
              display: 'flex',
              gap: '24px',
              overflowX: 'auto',
              paddingBottom: '8px',
            }}
          >
            {weeklyHighlights.map((article) => (
              <div
                key={article.id}
                style={{
                  minWidth: '300px',
                  maxWidth: '320px',
                  flexShrink: 0,
                }}
              >
                <ArticleCard article={article} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SECTION 5: Newsletter CTA ===== */}
      <section
        style={{
          background: 'var(--footer-bg)',
          padding: '80px 24px',
        }}
      >
        <div
          style={{
            maxWidth: '640px',
            margin: '0 auto',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          {/* Decorative Icon */}
          <div style={{ marginBottom: '24px' }}>
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
              <rect x="4" y="10" width="40" height="28" rx="4" stroke="var(--accent-orange)" strokeWidth="2.5" />
              <path d="M4 14L24 28L44 14" stroke="var(--accent-orange)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>

          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 700,
              fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)',
              color: '#fff',
              marginBottom: '12px',
              lineHeight: 1.2,
            }}
          >
            Subscribe to our{' '}
            <span
              style={{
                color: 'var(--accent-orange)',
                textDecoration: 'underline',
                textDecorationColor: 'var(--accent-orange)',
                textUnderlineOffset: '6px',
                textDecorationThickness: '3px',
                fontStyle: 'italic',
              }}
            >
              newsletter
            </span>
          </h2>
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '15px',
              color: 'rgba(255,255,255,0.6)',
              lineHeight: 1.7,
              marginBottom: '32px',
              maxWidth: '480px',
            }}
          >
            Get the latest articles, guides, and insights delivered straight to your inbox. No spam, unsubscribe anytime.
          </p>

          <NewsletterForm />
        </div>
      </section>
    </div>
  );
}
