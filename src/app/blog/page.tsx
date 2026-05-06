'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import ArticleCard from '@/components/ArticleCard';
import CategoryTabs from '@/components/CategoryTabs';
import { getArticlesByCategory } from '@/data/articles';

const filterCategories = ['All', 'AI Research', 'Engineering', 'Tech Trends', 'Design'];
const ARTICLES_PER_PAGE = 6;

export default function BlogIndex() {
  return (
    <Suspense fallback={<BlogIndexFallback />}>
      <BlogIndexInner />
    </Suspense>
  );
}

function BlogIndexFallback() {
  return (
    <div style={{ width: '100%', padding: '80px 24px', textAlign: 'center' }}>
      <p style={{ color: 'var(--ink-tertiary)', fontFamily: 'var(--font-body)' }}>Loading articles...</p>
    </div>
  );
}

function BlogIndexInner() {
  const searchParams = useSearchParams();
  const [activeCategory, setActiveCategory] = useState(searchParams.get('category') || 'All');
  const [visibleCount, setVisibleCount] = useState(ARTICLES_PER_PAGE);

  // Fix: sync activeCategory whenever URL searchParams change (e.g. Header dropdown navigation)
  useEffect(() => {
    const cat = searchParams.get('category') || 'All';
    setActiveCategory(cat);
    setVisibleCount(ARTICLES_PER_PAGE);
  }, [searchParams]);

  const filtered = getArticlesByCategory(activeCategory);
  const visible = filtered.slice(0, visibleCount);
  const hasMore = visibleCount < filtered.length;

  const handleCategoryChange = (cat: string) => {
    setActiveCategory(cat);
    setVisibleCount(ARTICLES_PER_PAGE);
  };

  return (
    <div style={{ width: '100%' }}>
      {/* Hero Banner */}
      <section
        style={{
          background: 'var(--bg-white)',
          borderBottom: '1px solid var(--border-light)',
          padding: '64px 24px',
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
              marginBottom: '16px',
              letterSpacing: '-0.03em',
            }}
          >
            Our <span style={{ color: 'var(--accent-orange)', fontStyle: 'italic' }}>Insights</span>
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
            Stay ahead of the curve with our latest deep dives into artificial intelligence, software engineering, and the tech landscape.
          </p>
        </div>
      </section>

      {/* Articles Section */}
      <section style={{ maxWidth: '1280px', margin: '0 auto', padding: '48px 24px 80px' }}>
        {/* Filters */}
        <div
          className="flex flex-col sm:flex-row sm:items-center justify-between gap-4"
          style={{ marginBottom: '40px' }}
        >
          <CategoryTabs
            categories={filterCategories}
            activeCategory={activeCategory}
            onCategoryChange={handleCategoryChange}
          />
          <p style={{ fontSize: '13px', color: 'var(--ink-tertiary)', fontFamily: 'var(--font-body)' }}>
            {filtered.length} article{filtered.length !== 1 ? 's' : ''}
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 stagger-children">
          {visible.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>

        {/* Empty State */}
        {filtered.length === 0 && (
          <div style={{ textAlign: 'center', padding: '80px 0' }}>
            <p style={{ fontSize: '18px', color: 'var(--ink-tertiary)', fontFamily: 'var(--font-body)', marginBottom: '16px' }}>
              No articles found in this category.
            </p>
            <button
              onClick={() => handleCategoryChange('All')}
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '14px',
                fontWeight: 600,
                color: 'var(--accent-orange)',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                textDecoration: 'underline',
                textUnderlineOffset: '3px',
              }}
            >
              View all articles
            </button>
          </div>
        )}

        {/* Load More */}
        {hasMore && (
          <div style={{ textAlign: 'center', marginTop: '56px' }}>
            <button
              onClick={() => setVisibleCount((prev) => prev + ARTICLES_PER_PAGE)}
              className="transition-all duration-300"
              style={{
                padding: '14px 40px',
                borderRadius: 'var(--radius-full)',
                fontSize: '14px',
                fontWeight: 600,
                fontFamily: 'var(--font-body)',
                background: 'var(--ink-primary)',
                color: '#fff',
                border: 'none',
                cursor: 'pointer',
                letterSpacing: '0.02em',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = 'var(--accent-orange)')}
              onMouseLeave={(e) => (e.currentTarget.style.background = 'var(--ink-primary)')}
            >
              Load More Articles
            </button>
          </div>
        )}
      </section>
    </div>
  );
}
