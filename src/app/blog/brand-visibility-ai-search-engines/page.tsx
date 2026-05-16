import Link from 'next/link';
import Image from 'next/image';
import ArticleCard from '@/components/ArticleCard';
import FAQSection from '@/components/FAQSection';
import { Metadata } from 'next';
import { SITE_NAME, SITE_URL, generateArticleSchema } from '@/lib/seo-helpers';
import ShareButton from '../ShareButton';
import { getRelatedArticles, getArticleBySlug } from '@/data/articles';
import YouTubeEmbed from '@/components/YouTubeEmbed';

export const metadata: Metadata = {
  title: `Architecting for LLMs: How to Improve Brand Visibility in AI Search Engines | ${SITE_NAME}`,
  description: `Improve brand visibility in AI search engines using semantic HTML, llms.txt, and structured JSON-LD.`,
  alternates: { canonical: `${SITE_URL}/blog/brand-visibility-ai-search-engines` },
  openGraph: {
    title: `Architecting for LLMs: How to Improve Brand Visibility in AI Search Engines`,
    description: `Improve brand visibility in AI search engines using semantic HTML, llms.txt, and structured JSON-LD.`,
    url: `${SITE_URL}/blog/brand-visibility-ai-search-engines`,
    siteName: SITE_NAME,
    images: [
      {
        url: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1200&auto=format&fit=crop',
        width: 1200,
        height: 630,
        alt: 'AI search engine visualization',
      },
    ],
    locale: 'en_US',
    type: 'article',
  },
};

export default function AISearchVisibilityPost() {
  const article = getArticleBySlug('brand-visibility-ai-search-engines');
  const relatedArticles = getRelatedArticles('brand-visibility-ai-search-engines', 3);

  const jsonLd = generateArticleSchema({
    title: "Architecting for LLMs: How to Improve Brand Visibility in AI Search Engines",
    description: "Improve brand visibility in AI search engines using semantic HTML, llms.txt, and structured JSON-LD.",
    url: `${SITE_URL}/blog/brand-visibility-ai-search-engines`,
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1200&auto=format&fit=crop",
    datePublished: "2026-05-14T00:00:00.000Z",
    dateModified: "2026-05-14T00:00:00.000Z",
    authorName: "Ashique Hussain",
    authorUrl: "https://tblogs.site/about/author",
  });

  return (
    <article style={{ background: 'var(--bg-cream)', minHeight: '100vh', fontFamily: 'var(--font-body)' }}>
            <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://tblogs.site/" },
              { "@type": "ListItem", position: 2, name: "Blog", item: "https://tblogs.site/blog" },
              { "@type": "ListItem", position: 3, name: article?.title, item: `https://tblogs.site/blog/${article?.slug}` }
            ]
          })
        }}
      />
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '48px 24px 80px' }}>
        <nav style={{ marginBottom: '32px', fontSize: '14px', fontWeight: 500, color: 'var(--ink-tertiary)' }}>
          <Link href="/blog" className="hover:text-[var(--accent-orange)] transition-colors duration-200">← Back to Blog</Link>
        </nav>
        <header style={{ marginBottom: '40px' }}>
          <span style={{ display: 'inline-block', background: 'var(--accent-orange)', color: '#fff', padding: '4px 14px', borderRadius: 'var(--radius-full)', fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', marginBottom: '20px' }}>Engineering</span>
          <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 'clamp(2rem, 4vw, 3rem)', color: 'var(--ink-primary)', marginBottom: '24px' }}>Architecting for LLMs: Brand Visibility in AI Search Engines</h1>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <Image src={article?.authorAvatar ?? '/author-ashique.jpg'} alt="Author" width={36} height={36} style={{ borderRadius: '50%', objectFit: 'cover' }} />
            <div>
              <span style={{ fontSize: '14px', fontWeight: 600 }}>{article?.author ?? 'Ashique Hussain'}</span>
              <span style={{ fontSize: '13px', color: 'var(--ink-tertiary)', marginLeft: '8px' }}>· May 14, 2026</span>
            </div>
          </div>
        </header>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '40px', paddingBottom: '24px', borderBottom: '1px solid var(--border-light)' }}>
          <ShareButton title="Brand Visibility in AI Search Engines" url={`${SITE_URL}/blog/brand-visibility-ai-search-engines`} />
        </div>
        <div style={{ position: 'relative', width: '100%', height: '400px', marginBottom: '48px', borderRadius: 'var(--radius-lg)', overflow: 'hidden' }}>
          <Image src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1200&auto=format&fit=crop" alt="AI search engine visualization" fill priority className="object-cover" />
        </div>
        <div className="prose-editorial" style={{ fontSize: '17px', lineHeight: 1.8, color: 'var(--ink-secondary)' }}>
          <p>Traditional SEO is dead. If you want to know how to improve brand visibility in AI search engines like Perplexity or Google AI Overviews, you need Generative Engine Optimization (GEO). This is a technical breakdown of formatting data for LLM crawlers using semantic HTML and JSON-LD.</p>

          <YouTubeEmbed videoId="U4vTNI6xaS8" title="How To Track and Improve Your Brand's Visibility in LLMs" />

          
          <h2 style={{ marginTop: '48px', marginBottom: '20px', fontWeight: 700, color: 'var(--ink-primary)', fontSize: '1.75rem' }}>Semantic HTML: Building for the Machine Reader</h2>
          <p>AI models process context through structure. When a crawler parses your site, it relies on semantic tags&mdash;like <code>&lt;article&gt;</code>, <code>&lt;section&gt;</code>, <code>&lt;nav&gt;</code>, and hierarchical heading tags&mdash;to weigh the importance of content. Using a <code>&lt;div&gt;</code> for a heading strips away the semantic value that an LLM uses to classify information. By establishing a rigorous DOM hierarchy, you ensure that the AI inherently understands the relationships between your paragraphs, lists, and core arguments.</p>

          <h2 style={{ marginTop: '48px', marginBottom: '20px', fontWeight: 700, color: 'var(--ink-primary)', fontSize: '1.75rem' }}>The llms.txt Standard</h2>
          <p>LLMs don&apos;t want your CSS. They want pure data. Implementing an <code>llms.txt</code> file at the root of your domain provides a clean, markdown-based entry point for AI crawlers. These strategies improve brand visibility in AI search engines dramatically by removing the noise and delivering raw text. Think of it as a <code>robots.txt</code> designed specifically to feed language models context directly without the overhead of rendering JavaScript.</p>
          
          <h2 style={{ marginTop: '48px', marginBottom: '20px', fontWeight: 700, color: 'var(--ink-primary)', fontSize: '1.75rem' }}>JSON-LD: Hardcoding the Truth</h2>
          <p>While semantic HTML gives structure, JSON-LD (JavaScript Object Notation for Linked Data) provides undeniable, hardcoded facts. Embedding an <code>Article</code> or <code>FAQPage</code> schema directly into the head of your document connects your brand to a global knowledge graph. When you define your organization, authors, and explicit answers to questions in JSON-LD, you are effectively programming the AI&apos;s knowledge base. This is the foundation of modern technical SEO.</p>
          
          {article?.faq && article.faq.length > 0 && (
            <div style={{ marginTop: '48px' }}>
              <FAQSection faqs={article.faq} />
            </div>
          )}
        </div>
      </div>
      {relatedArticles.length > 0 && (
        <section style={{ borderTop: '1px solid var(--border-light)', background: 'var(--bg-white)', padding: '80px 24px' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
            <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '2rem', marginBottom: '40px' }}>Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedArticles.map((a) => (<ArticleCard key={a.id} article={a} />))}
            </div>
          </div>
        </section>
      )}
    </article>
  );
}