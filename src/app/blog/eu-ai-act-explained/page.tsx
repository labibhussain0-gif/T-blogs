import Link from 'next/link';
import Image from 'next/image';
import ArticleCard from '@/components/ArticleCard';
import FAQSection from '@/components/FAQSection';
import { Metadata } from 'next';
import { SITE_NAME, SITE_URL } from '@/lib/seo-helpers';
import ShareButton from '../ShareButton';
import { getRelatedArticles, getArticleBySlug } from '@/data/articles';
import YouTubeEmbed from '@/components/YouTubeEmbed';

export const metadata: Metadata = {
  title: `EU AI Act Explained: What Developers Need to Know in 2026 | ${SITE_NAME}`,
  description: `EU AI Act news and explained for developers: risk tiers, compliance deadlines, prohibited systems, and what you must do before shipping AI to EU users.`,
  alternates: { canonical: `${SITE_URL}/blog/eu-ai-act-explained` },
};

export default function EuAiActExplained() {
  const article = getArticleBySlug('eu-ai-act-explained');
  const relatedArticles = getRelatedArticles('eu-ai-act-explained', 3);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "EU AI Act Explained: What Developers Need to Know in 2026",
    "image": [
      "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?q=80&w=1200&auto=format&fit=crop"
    ],
    "datePublished": "2026-05-04T00:00:00.000Z",
    "dateModified": "2026-05-04T00:00:00.000Z",
    "author": [{
      "@type": "Person",
      "name": "Ashique Hussain",
      "url": "https://tblogs.site/about/author"
    }]
  };

  
  return (
    <article style={{ background: 'var(--bg-cream)', minHeight: '100vh', fontFamily: 'var(--font-body)' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '48px 24px 80px' }}>
        <nav aria-label="Breadcrumb" style={{ marginBottom: '32px', fontSize: '14px', fontWeight: 500, color: 'var(--ink-tertiary)', fontFamily: 'var(--font-body)' }}>
          <Link href="/blog" className="text-[var(--ink-tertiary)] hover:text-[var(--accent-orange)] transition-colors duration-200" style={{ textDecoration: 'none' }}>
            ← Back to Blog
          </Link>
        </nav>

        <header style={{ marginBottom: '40px' }}>
          <span style={{ display: 'inline-block', background: 'var(--accent-orange)', color: '#fff', padding: '4px 14px', borderRadius: 'var(--radius-full)', fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '20px' }}>
            AI Research
          </span>

          <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 'clamp(2rem, 4vw, 3rem)', lineHeight: 1.12, color: 'var(--ink-primary)', marginBottom: '24px', letterSpacing: '-0.02em' }}>
            EU AI Act Explained: <span style={{ color: 'var(--accent-orange)' }}>What Developers Need to Know</span> in 2026
          </h1>

          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
            <img src={article?.authorAvatar ?? '/author-ashique.jpg'} alt={article?.author ?? 'Ashique Hussain'} className="rounded-full" style={{ width: '36px', height: '36px', objectFit: 'cover' }} />
            <div>
              <span style={{ fontSize: '14px', fontWeight: 600, color: 'var(--ink-primary)' }}>{article?.author ?? 'Ashique Hussain'}</span>
              <span style={{ fontSize: '13px', color: 'var(--ink-tertiary)', marginLeft: '8px' }}>· {article?.date ?? 'May 4, 2026'} · {article?.readTime ?? '11 min'} read</span>
            </div>
          </div>
        </header>

        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '40px', paddingBottom: '24px', borderBottom: '1px solid var(--border-light)' }}>
          <span style={{ fontSize: '12px', fontWeight: 600, color: 'var(--ink-tertiary)', textTransform: 'uppercase', letterSpacing: '0.08em', marginRight: '8px' }}>Share</span>
          <ShareButton title="EU AI Act Explained: What Developers Need to Know in 2026" url={`${SITE_URL}/blog/eu-ai-act-explained`} />
        </div>

        <div style={{ position: 'relative', width: '100%', height: '400px', marginBottom: '48px', borderRadius: 'var(--radius-lg)', overflow: 'hidden' }}>
          <Image src="https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?q=80&w=1200&auto=format&fit=crop" alt="European Union flag representing the EU AI Act regulation" fill priority sizes="(max-width: 768px) 100vw, 800px" className="object-cover" />
        </div>

        <div className="prose-editorial" style={{ fontSize: '17px', lineHeight: 1.8, color: 'var(--ink-secondary)' }}>
          <p style={{ fontSize: '19px', lineHeight: 1.7, marginBottom: '32px', color: 'var(--ink-primary)', fontWeight: 400 }}>
            The EU AI Act is no longer a draft floating around Brussels. It is law. If your data leaves your network to get an answer, or if you serve EU citizens, you are now operating under a new set of constraints. You do not need a 40-page legal brief; you need to know how this impacts your architecture and deployment pipelines. Let us cut through the noise.
          </p>

          <YouTubeEmbed videoId="s_rxOnCt3HQ" title="The EU's AI Act Explained" />


          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.75rem', color: 'var(--ink-primary)', marginTop: '48px', marginBottom: '20px', paddingBottom: '12px', borderBottom: '1px solid var(--border-light)' }}>
            The Risk-Based Tier System
          </h2>
          <p>
            The EU AI Act classifies systems into four tiers. If you are building a wrapper around OpenAI to generate marketing copy, you fall into the minimal risk category. You can stop sweating. But if you are building anything that touches biometric data, hiring, or critical infrastructure, pay attention.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4" style={{ margin: '40px 0' }}>
            {[
              { label: 'Unacceptable Risk', value: 'Prohibited', desc: 'Social scoring, real-time biometric surveillance, cognitive behavioral manipulation.' },
              { label: 'High Risk', value: 'Strict Compliance', desc: 'CV scanning for hiring, medical diagnostics, critical infrastructure management.' },
              { label: 'Limited Risk', value: 'Transparency Required', desc: 'Chatbots. You just have to tell the user they are talking to an AI.' },
              { label: 'Minimal Risk', value: 'No Restrictions', desc: 'Spam filters, inventory management, standard non-critical wrappers.' },
            ].map((fact) => (
              <div key={fact.label} style={{ padding: '24px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-light)', background: 'var(--bg-white)' }}>
                <span style={{ fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--ink-tertiary)' }}>{fact.label}</span>
                <p style={{ fontSize: '17px', fontWeight: 700, color: 'var(--ink-primary)', marginTop: '8px', marginBottom: '8px' }}>{fact.value}</p>
                <p style={{ fontSize: '13px', color: 'var(--ink-secondary)', lineHeight: 1.5 }}>{fact.desc}</p>
              </div>
            ))}
          </div>

          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.75rem', color: 'var(--ink-primary)', marginTop: '48px', marginBottom: '20px', paddingBottom: '12px', borderBottom: '1px solid var(--border-light)' }}>
            The "Wrapper" Trap and Liability
          </h2>
          <p>
            If your startup can be replaced by a single system prompt update from OpenAI, you have a temporary lease on a feature, not a product. Under the EU AI Act, you also have massive liability. 
          </p>
          <p>
            When you use a foundation model via API to build a high-risk application (like an automated resume screener for an HR SaaS), <strong>you</strong> are the "deployer" under the Act. You are responsible for the compliance, bias testing, and logging—not OpenAI or Anthropic. You cannot outsource your legal liability to a third-party API endpoint.
          </p>

          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.75rem', color: 'var(--ink-primary)', marginTop: '48px', marginBottom: '20px', paddingBottom: '12px', borderBottom: '1px solid var(--border-light)' }}>
            Sovereignty as the Ultimate Workaround
          </h2>
          <p>
            Here is where the architecture matters. If you do not own your intelligence, you are at the mercy of both cloud providers and regulators. By hosting your own open-weight models (like Llama 3 or Mistral) locally, you simplify compliance immensely. 
          </p>
          
          <p>
            I remember the Saturday VM Migration vividly. We spent an entire weekend moving from a managed vector DB to a self-hosted PostgreSQL 16 instance. The struggle with IAM permissions was absolutely brutal, but achieving 0.2ms local latency and completely eliminating our data residency compliance headache made it worth it.
          </p>
          
          <p>
            When you run local inference and maintain your own <code style={{ fontFamily: 'var(--font-mono)', fontSize: '0.875em', background: 'var(--bg-warm-gray)', padding: '2px 8px', borderRadius: '4px' }}>pgvector</code> instance, you eliminate third-party data processing agreements. You control the logs. You control the data residency.
          </p>

          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.75rem', color: 'var(--ink-primary)', marginTop: '48px', marginBottom: '20px', paddingBottom: '12px', borderBottom: '1px solid var(--border-light)' }}>
            Three Steps to Local RAG
          </h2>
          <p>
            If you want to achieve sovereignty and sidestep the data residency nightmares of the EU AI Act, you need to bring your Retrieval-Augmented Generation (RAG) pipeline in-house. Vector DB hype is out of control. You do not need a $100M cloud vector DB. You need <code style={{ fontFamily: 'var(--font-mono)', fontSize: '0.875em', background: 'var(--bg-warm-gray)', padding: '2px 8px', borderRadius: '4px' }}>pgvector</code> on the PostgreSQL instance you already own.
          </p>
          
          <div
            style={{
              background: '#1a1a2e',
              borderRadius: 'var(--radius-md)',
              padding: '24px',
              margin: '32px 0',
              overflow: 'hidden',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '16px' }}>
              <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#EF4444' }} />
              <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#F59E0B' }} />
              <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#22C55E' }} />
            </div>
            <pre style={{ fontFamily: 'var(--font-mono)', fontSize: '14px', color: '#E2E8F0', lineHeight: 1.7, margin: 0, overflowX: 'auto' }}>
              <code>{`version: '3.8'
services:
  db:
    image: ankane/pgvector:latest
    environment:
      POSTGRES_PASSWORD: strong_password
      POSTGRES_DB: sovereign_ai
    volumes:
      - pgdata:/var/lib/postgresql/data
    ports:
      - "5432:5432"

  ollama:
    image: ollama/ollama
    ports:
      - "11434:11434"
    volumes:
      - ollama_data:/root/.ollama

volumes:
  pgdata:
  ollama_data:`}</code>
            </pre>
          </div>
          <p>
            With this simple <code style={{ fontFamily: 'var(--font-mono)', fontSize: '0.875em', background: 'var(--bg-warm-gray)', padding: '2px 8px', borderRadius: '4px' }}>docker-compose.yml</code>, you have the foundational infrastructure for a fully compliant, locally hosted intelligence stack. Run Llama 3 via Ollama, store your embeddings in pgvector, and keep the EU regulators happy.
          </p>

          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.5rem', color: 'var(--ink-primary)', marginTop: '48px', marginBottom: '16px' }}>
            The Verdict
          </h2>
          <p>
            The EU AI Act is not a death knell for innovation; it is an engineering constraint. Treat it like latency or memory limits. Audit your dependencies, understand which tier your application falls into, and strongly consider local, sovereign AI infrastructure if you want to avoid a massive legal headache.
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

      
    </article>
  );
}
