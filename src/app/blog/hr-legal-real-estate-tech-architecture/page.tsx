import Link from 'next/link';
import Image from 'next/image';
import ArticleCard from '@/components/ArticleCard';
import FAQSection from '@/components/FAQSection';
import { Metadata } from 'next';
import { SITE_NAME, SITE_URL, generateArticleSchema } from '@/lib/seo-helpers';
import ShareButton from '../ShareButton';
import { getRelatedArticles, getArticleBySlug } from '@/data/articles';

export const metadata: Metadata = {
  title: `Sector Software Architecture: AI Integration in HR, Legal, and Real Estate Tech | ${SITE_NAME}`,
  description: `HR tech news today: Rebuilding legal, HR, and real estate legacy monoliths with vector databases and AI integration.`,
  alternates: { canonical: `${SITE_URL}/blog/hr-legal-real-estate-tech-architecture` },
  openGraph: {
    title: `Sector Software Architecture: AI Integration in HR, Legal, and Real Estate Tech`,
    description: `HR tech news today: Rebuilding legal, HR, and real estate legacy monoliths with vector databases and AI integration.`,
    url: `${SITE_URL}/blog/hr-legal-real-estate-tech-architecture`,
    siteName: SITE_NAME,
    images: [{ url: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop' }],
    type: 'article',
  },
};

export default function SectorArchitecturePost() {
  const article = getArticleBySlug('hr-legal-real-estate-tech-architecture');
  const relatedArticles = getRelatedArticles('hr-legal-real-estate-tech-architecture', 3);

  if (!article) return null;

  const jsonLd = generateArticleSchema({
    title: article.title,
    description: article.metaDescription,
    url: `${SITE_URL}/blog/${article.slug}`,
    image: article.image,
    datePublished: new Date(article.date).toISOString(),
    dateModified: new Date(article.lastUpdated || article.date).toISOString(),
    authorName: article.author,
    authorUrl: `${SITE_URL}${article.authorPage}`
  });

  return (
    <article className="min-h-screen bg-[var(--bg-cream)] font-[var(--font-body)]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      {/* Hero Section */}
      <header className="relative w-full h-[60vh] min-h-[400px] flex items-end pb-12">
        <Image
          src={article.image}
          alt={article.imageAlt}
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        <div className="relative z-10 max-w-5xl mx-auto px-6 w-full">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-white/90 text-sm font-semibold tracking-wider uppercase bg-red-600/80 px-3 py-1 rounded-full">
              {article.category}
            </span>
            <span className="text-white/80 text-sm">{article.date}</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight font-[var(--font-heading)]">
            {article.title}
          </h1>
          <div className="flex items-center gap-4">
            <Image
              src={article.authorAvatar}
              alt={article.author}
              width={48}
              height={48}
              className="rounded-full border-2 border-white/20"
            />
            <div>
              <p className="text-white font-medium">{article.author}</p>
              <p className="text-white/70 text-sm">{article.readTime} read</p>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Main Content */}
        <div className="lg:col-span-8">
          <div className="prose prose-lg max-w-none text-gray-800 prose-headings:font-[var(--font-heading)] prose-a:text-red-600 hover:prose-a:text-red-700">
            <p className="text-xl font-medium text-gray-600 mb-8 leading-relaxed">
              Legacy monolithic architectures are buckling under the demands of modern artificial intelligence. From searching case law to parsing thousands of resumes, traditional SQL databases and keyword searches can no longer deliver the contextual results users expect.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900">The Database Migration in HR Tech</h2>
            <p>
              Scanning the <Link href="/blog">hr tech news today</Link>, a clear pattern emerges: the race to implement semantic search. Traditional applicant tracking systems (ATS) rely on rigid boolean logic. If a candidate lists &quot;Next.js&quot; instead of &quot;React,&quot; a legacy SQL query might skip them entirely. 
            </p>
            <p>
              Modern architectures solve this by running candidate profiles through embedding models, storing the resulting high-dimensional vectors in specialized databases like Pinecone or Milvus. When a recruiter searches for a &quot;frontend engineer with modern framework experience,&quot; the system performs a nearest-neighbor search, retrieving candidates based on conceptual similarity rather than exact keyword matches.
            </p>
            
            <ul className="my-6 space-y-2 list-disc pl-6">
              <li><strong>Latency Reduction:</strong> Pre-computing embeddings during ingestion keeps search latency under 50ms.</li>
              <li><strong>Bias Mitigation:</strong> ML pipelines can be trained to mask demographic variables prior to generating embeddings.</li>
              <li><strong>Scalability:</strong> Serverless vector databases automatically shard across multiple nodes during peak hiring seasons.</li>
            </ul>

            <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900">Retrieval-Augmented Generation in Legal</h2>
            <p>
              Security is the non-negotiable constraint when designing systems for legal professionals. When you read <Link href="/blog">legal tech news today ai law firms</Link> are not simply pasting client data into public OpenAI endpoints. Doing so would constitute an immediate breach of attorney-client privilege.
            </p>
            <p>
              Instead, enterprise architects are deploying isolated Retrieval-Augmented Generation (RAG) pipelines. These systems host open-weight models (like Llama 3 or DeepSeek) within a secure Virtual Private Cloud (VPC). Document ingestion pipelines OCR scanned contracts, chunk the text logically by legal clauses, and store the embeddings in a privately hosted vector store.
            </p>
            <p>
              When a paralegal queries the system, the LLM generates answers strictly grounded in the retrieved, verified case files. The architecture ensures that no data ever leaves the firm&apos;s isolated environment, satisfying both compliance officers and security audits.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900">Semantic Discovery in Real Estate</h2>
            <p>
              The frontend experience is evolving rapidly across <Link href="/blog">real estate tech news</Link>. Buyers are frustrated with standard filters like &quot;3 beds, 2 baths.&quot; They want to search naturally for a &quot;quiet neighborhood with lots of natural light and room for a home office.&quot;
            </p>
            <p>
              This requires a fundamental architectural shift. Property images are processed through vision-language models (VLMs) to generate descriptive text metadata, which is then vectorized alongside the listing descriptions. The frontend utilizes edge functions to route user queries through an embedding endpoint before hitting the database, enabling multimodal search capabilities that drastically improve conversion rates.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900">Learning from the Droven.io Technology Blog</h2>
            <p>
              Building these systems is rarely straightforward. Technical resources like the <Link href="/blog">droven.io technology blog</Link> frequently highlight the challenges of managing data drift and model staleness in production environments. 
            </p>
            <p>
              As models update and embeddings change, entire databases must often be re-indexed. A robust CI/CD pipeline for machine learning (MLOps) is no longer optional—it is the foundational requirement for any sector-specific software architecture aiming to leverage AI securely and effectively.
            </p>
          </div>

          {/* FAQ Section */}
          <div className="mt-16 pt-12 border-t border-gray-200">
            <h3 className="text-2xl font-bold mb-8 text-gray-900 font-[var(--font-heading)]">Frequently Asked Questions</h3>
            {article.faq && article.faq.length > 0 ? (
              <FAQSection faqs={article.faq} />
            ) : (
              <p className="text-gray-600">No FAQs available for this article yet.</p>
            )}
          </div>
        </div>

        {/* Sidebar */}
        <aside className="lg:col-span-4 space-y-10">
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <h3 className="text-lg font-bold text-gray-900 mb-6 border-b border-gray-100 pb-4 font-[var(--font-heading)]">
              Share this article
            </h3>
            <div className="flex gap-4">
              <ShareButton url={`${SITE_URL}/blog/${article.slug}`} title={article.title} />
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <h3 className="text-lg font-bold text-gray-900 mb-6 border-b border-gray-100 pb-4 font-[var(--font-heading)]">
              About the Author
            </h3>
            <div className="flex items-center gap-4 mb-4">
              <Image
                src={article.authorAvatar}
                alt={article.author}
                width={64}
                height={64}
                className="rounded-full"
              />
              <div>
                <Link href={article.authorPage} className="font-bold text-gray-900 hover:text-red-600 transition-colors">
                  {article.author}
                </Link>
                <div className="flex gap-3 mt-1">
                  <a href={article.authorTwitter} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400" aria-label="Follow on Twitter">
                    <span className="sr-only">Twitter</span>
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"/></svg>
                  </a>
                  <a href={article.authorLinkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-700" aria-label="Connect on LinkedIn">
                    <span className="sr-only">LinkedIn</span>
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd"/></svg>
                  </a>
                </div>
              </div>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              {article.authorBio}
            </p>
          </div>
        </aside>
      </main>

      {/* Related Articles */}
      {relatedArticles.length > 0 && (
        <section className="bg-white py-16 border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-gray-900 mb-10 font-[var(--font-heading)]">Read Next</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedArticles.map((relatedArticle) => (
                <ArticleCard key={relatedArticle.id} article={relatedArticle} />
              ))}
            </div>
          </div>
        </section>
      )}
    </article>
  );
}
