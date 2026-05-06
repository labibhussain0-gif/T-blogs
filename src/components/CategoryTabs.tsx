'use client';

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
    <div className="flex flex-wrap items-center gap-2" role="tablist" aria-label="Filter by category">
      {categories.map((cat) => {
        const isActive = cat === activeCategory;
        return (
          <button
            key={cat}
            role="tab"
            aria-selected={isActive}
            onClick={() => onCategoryChange(cat)}
            className="transition-all duration-300"
            style={{
              padding: '8px 20px',
              borderRadius: 'var(--radius-full)',
              fontSize: '13px',
              fontWeight: 600,
              fontFamily: 'var(--font-body)',
              letterSpacing: '0.01em',
              cursor: 'pointer',
              border: isActive ? '2px solid var(--accent-orange)' : '2px solid var(--border-light)',
              background: isActive ? 'var(--accent-orange)' : 'transparent',
              color: isActive ? '#fff' : 'var(--ink-secondary)',
            }}
          >
            {cat}
          </button>
        );
      })}
    </div>
  );
}
