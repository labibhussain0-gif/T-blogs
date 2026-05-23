'use client';

import Link from 'next/link';

interface CategoryTabsProps {
  categories: readonly string[] | string[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

export default function CategoryTabs({
  categories,
  activeCategory,
  onCategoryChange,
}: CategoryTabsProps) {
  return (
    <div
      className="flex items-center gap-2 overflow-x-auto sm:overflow-x-visible sm:flex-wrap"
      role="tablist"
      aria-label="Filter by category"
      style={{ scrollbarWidth: 'none', WebkitOverflowScrolling: 'touch' }}
    >
      {categories.map((cat) => {
        if (cat === 'AI Tools Guide') {
          return (
            <Link
              key={cat}
              href="/ai-tools-guide"
              className="transition-all duration-300 whitespace-nowrap"
              style={{
                padding: '6px 16px',
                borderRadius: 'var(--radius-full)',
                fontSize: '13px',
                fontWeight: 600,
                fontFamily: 'var(--font-body)',
                cursor: 'pointer',
                border: '2px solid var(--border-light)',
                background: 'transparent',
                color: 'var(--ink-secondary)',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                flexShrink: 0,
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
              AI Tools Guide
            </Link>
          );
        }
        const isActive = cat === activeCategory;
        return (
          <button
            key={cat}
            role="tab"
            aria-selected={isActive}
            onClick={() => onCategoryChange(cat)}
            className="transition-all duration-300 whitespace-nowrap"
            style={{
              padding: '6px 16px',
              borderRadius: 'var(--radius-full)',
              fontSize: '13px',
              fontWeight: 600,
              fontFamily: 'var(--font-body)',
              letterSpacing: '0.01em',
              cursor: 'pointer',
              border: isActive ? '2px solid var(--accent-orange)' : '2px solid var(--border-light)',
              background: isActive ? 'var(--accent-orange)' : 'transparent',
              color: isActive ? '#fff' : 'var(--ink-secondary)',
              flexShrink: 0,
            }}
          >
            {cat}
          </button>
        );
      })}
    </div>
  );
}
