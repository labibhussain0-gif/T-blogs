import { articles, getArticleBySlug, getRelatedArticles } from '@/data/articles';
import { articleComponents } from '@/components/articles/registry';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import Script from 'next/script';
import ArticleCard from '@/components/ArticleCard';
import FAQSection from '@/components/FAQSection';
import ShareButton from '../ShareButton';
import { SITE_NAME, SITE_URL, generateArticleSchema, generateFAQSchema, generateBreadcrumbSchema } from '@/lib/seo-helpers';
import { Metadata } from 'next';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return {};

  return {
    title: `${article.title} | ${SITE_NAME}`,
    description: article.metaDescription,
    alternates: { canonical: `${SITE_URL}/blog/${article.slug}` },
    robots: article.status === 'draft' ? { index: false, follow: false } : { index: true, follow: true },
    openGraph: {
      title: article.title,
      description: article.metaDescription,
      url: `${SITE_URL}/blog/${article.slug}`,
      siteName: SITE_NAME,
      images: [
        {
          url: article.image,
          width: 1200,
          height: 630,
          alt: article.imageAlt || article.title,
        },
      ],
      locale: 'en_US',
      type: 'article',
    },
  };
}

export function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const BodyComponent = articleComponents[slug];
  if (!BodyComponent) {
    notFound();
  }

  const relatedArticles = getRelatedArticles(slug, 3);

  // Schema LD
  const jsonLd = generateArticleSchema({
    title: article.title,
    description: article.metaDescription,
    url: `${SITE_URL}/blog/${article.slug}`,
    image: article.image,
    datePublished: new Date(article.date).toISOString(),
    dateModified: new Date(article.lastUpdated || article.date).toISOString(),
    authorName: article.author,
    authorUrl: `${SITE_URL}${article.authorPage}`,
  });

  const breadcrumbsJsonLd = generateBreadcrumbSchema([
    { name: 'Home', href: '/' },
    { name: 'Blog', href: '/blog' },
    { name: article.title, href: `/blog/${article.slug}` },
  ]);

  return (
    <article style={{ background: 'var(--bg-cream)', minHeight: '100vh', fontFamily: 'var(--font-body)' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsJsonLd) }}
      />


      <div className="max-w-[800px] mx-auto px-4 pt-8 pb-15 md:px-6 md:pt-12 md:pb-20">
        <nav aria-label="Breadcrumb" style={{ marginBottom: '32px', fontSize: '14px', fontWeight: 500, color: 'var(--ink-tertiary)' }}>
          <Link href="/blog" className="text-[var(--ink-tertiary)] hover:text-[var(--accent-orange)] transition-colors duration-200" style={{ textDecoration: 'none' }}>
            ← Back to Blog
          </Link>
        </nav>

        <header style={{ marginBottom: '40px' }}>
          <span style={{ display: 'inline-block', background: 'var(--accent-orange)', color: '#fff', padding: '4px 14px', borderRadius: 'var(--radius-full)', fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '20px' }}>
            {article.category}
          </span>

          <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 'clamp(1.625rem, 4vw, 3rem)', lineHeight: 1.12, color: 'var(--ink-primary)', marginBottom: '24px', letterSpacing: '-0.02em' }}>
            {article.title}
          </h1>

          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
            <Image
              src={article.authorAvatar}
              alt={article.author}
              width={36}
              height={36}
              className="rounded-full object-cover"
            />
            <div>
              <span style={{ fontSize: '14px', fontWeight: 600, color: 'var(--ink-primary)' }}>{article.author}</span>
              <span style={{ fontSize: '13px', color: 'var(--ink-tertiary)', marginLeft: '8px' }}>· {article.date} · {article.readTime} read</span>
            </div>
          </div>
        </header>

        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '40px', paddingBottom: '24px', borderBottom: '1px solid var(--border-light)' }}>
          <span style={{ fontSize: '12px', fontWeight: 600, color: 'var(--ink-tertiary)', textTransform: 'uppercase', letterSpacing: '0.08em', marginRight: '8px' }}>Share</span>
          <ShareButton title={article.title} url={`${SITE_URL}/blog/${article.slug}`} />
        </div>

        <div className="relative w-full aspect-[1376/768] md:h-[400px] md:aspect-auto mb-12 rounded-lg overflow-hidden">
          <Image src={article.image} alt={article.imageAlt} fill priority sizes="(max-width: 768px) 100vw, 800px" className="object-cover" />
        </div>

        <div className="prose-editorial" style={{ fontSize: '17px', lineHeight: 1.8, color: 'var(--ink-secondary)' }}>
          <BodyComponent />
        </div>

        {/* Native Banner Ad Spot (Post Bottom) */}
        <div style={{ marginTop: '48px', paddingTop: '32px', borderTop: '1px solid var(--border-light)', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <span style={{ fontSize: '11px', fontWeight: 600, color: 'var(--ink-tertiary)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '16px' }}>Sponsored Content</span>
          <div id="container-87fb76ef6e9dc1474d33289808e924af" style={{ width: '100%', minHeight: '100px' }}></div>
          <Script
            src="https://pl29556331.effectivecpmnetwork.com/87fb76ef6e9dc1474d33289808e924af/invoke.js"
            strategy="afterInteractive"
          />
        </div>
      </div>

      {article.faq && article.faq.length > 0 && (
        <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 24px 80px' }}>
          <FAQSection faqs={article.faq} />
        </div>
      )}

      {relatedArticles.length > 0 && (
        <section style={{ borderTop: '1px solid var(--border-light)', background: 'var(--bg-white)', padding: '80px 24px' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
            <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(1.375rem, 3vw, 2rem)', color: 'var(--ink-primary)', marginBottom: '40px' }}>
              Related Articles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedArticles.map((rel) => (
                <ArticleCard key={rel.id} article={rel} />
              ))}
            </div>
          </div>
        </section>
      )}
    </article>
  );
}
