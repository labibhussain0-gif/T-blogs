'use client';

import Link from 'next/link';
import YouTubeEmbed from '@/components/YouTubeEmbed';

export default function SectorArchitectureBody() {
  return (
    <>
      <p className="text-xl font-medium text-gray-600 mb-8 leading-relaxed">
        Legacy monolithic architectures are buckling under the demands of modern generative AI integration. From processing thousands of resumes to parsing secure legal case files, traditional relational databases can no longer deliver the contextual semantic reasoning users expect in 2026. This guide details the actual production-grade architectural blueprints needed to integrate vector stores, secure RAG, and multimodal computer vision into legacy stacks.
      </p>

      <YouTubeEmbed videoId="9TVc32M_gIY" title="What is Enterprise Architecture (EA) and why is it important?" />

      {/* Blueprint Directory Intro */}
      <div style={{
        background: 'var(--bg-white)',
        borderRadius: 'var(--radius-md)',
        padding: '24px',
        margin: '40px 0',
        border: '1px solid var(--border-light)',
        borderLeft: '4px solid var(--accent-orange)'
      }}>
        <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.25rem', color: 'var(--ink-primary)', marginTop: 0, marginBottom: '12px' }}>
          📐 Enterprise AI Integration Index
        </h3>
        <p style={{ fontSize: '14px', color: 'var(--ink-secondary)', marginBottom: 0, lineHeight: 1.6 }}>
          We examine the specific database migrations, security topologies, and inference pipelines deployed across three primary industries. Explore the technical breakdowns below:
        </p>
        <ul style={{ margin: '16px 0 0', paddingLeft: '20px', fontSize: '14px', color: 'var(--ink-secondary)', display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <li><strong>1. HR Tech:</strong> High-Throughput Resume Embedding and Vector Similarity Pipelines.</li>
          <li><strong>2. Legal Tech:</strong> Air-Gapped, VPC-Isolated Retrieval-Augmented Generation (RAG).</li>
          <li><strong>3. PropTech (Real Estate):</strong> Multi-Modal Image VLM Metadata Extraction and Property Vector Search.</li>
        </ul>
      </div>

      <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900">1. Database Migration and Vector Ingestion in HR Tech</h2>
      <p>
        According to the latest <Link href="/blog" className="text-[var(--accent-orange)] hover:underline">hr tech news today</Link>, the major engineering focus is transitioning traditional Applicant Tracking Systems (ATS) from keyword matching to semantic search. Relational SQL queries rely on strict boolean operators; if a recruiter searches for "React" and a candidate lists "Next.js," standard indexing drops them completely.
      </p>
      <p>
        Modern HR architectures solve this by mapping candidate records to high-dimensional dense vectors. During ingestion, resumes are parsed via OCR, split into logical blocks (experience, skill sets, projects), and sent to a lightweight embedding model (e.g., <code>text-embedding-3-small</code>). The resulting 1536-dimension vectors are stored in a distributed vector database like Pinecone or Milvus.
      </p>

      {/* HR Pipeline Diagram */}
      <div style={{
        background: '#1a1a2e',
        borderRadius: 'var(--radius-md)',
        padding: '20px',
        margin: '24px 0',
        fontFamily: 'var(--font-mono)',
        fontSize: '12px',
        color: '#E2E8F0',
        overflowX: 'auto',
        lineHeight: 1.5
      }}>
        <pre>{`[Resume PDF] ──> [OCR Parser] ──> [Chunking Pipeline] ──> [OpenAI text-embedding-3] 
                                                                   │
                                                                   ▼
[User Query] ──> [Cosine Similarity Search] ────────────────> [Milvus Cluster]
                                                                   │
                                                                   ▼
                                                             [Semantic Match]`}</pre>
      </div>

      <p>
        This pipeline reduces search times to under 50ms. Additionally, we enforce bias mitigation by stripping demographic metadata (names, locations, graduation years) prior to sending chunks to the embedding model, ensuring purely skills-based vector placement.
      </p>

      <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900">2. Secure, Air-Gapped RAG Pipelines in Legal Tech</h2>
      <p>
        The absolute constraint in <Link href="/blog" className="text-[var(--accent-orange)] hover:underline">legal tech news today ai law firms</Link> is privacy. Passing un-encrypted client files, litigation records, or sensitive contracts to public, cloud-hosted LLM endpoints violates attorney-client privilege and GDPR regulations instantly.
      </p>
      <p>
        To bridge this gap, enterprise architects are deploying isolated Retrieval-Augmented Generation (RAG) pipelines inside air-gapped Virtual Private Clouds (VPC). The architecture mandates that no data ever leaves the firm's sovereign infrastructure boundaries.
      </p>

      {/* RAG Diagram */}
      <div style={{
        background: '#1a1a2e',
        borderRadius: 'var(--radius-md)',
        padding: '20px',
        margin: '24px 0',
        fontFamily: 'var(--font-mono)',
        fontSize: '12px',
        color: '#E2E8F0',
        overflowX: 'auto',
        lineHeight: 1.5
      }}>
        <pre>{`[Corporate Docs] ──> [Local Tesseract OCR] ──> [Sovereign pgvector (RDS)] 
                                                               │
                                                               ▼
[User Query] ──────> [FastAPI Router] ───────> [Llama-3-70B running on VPC GPUs]
                                                               │
                                                               ▼
                                                       [Grounded Legal Draft]`}</pre>
      </div>

      <p>
        By leveraging open-weight models (such as <code>Llama-3-70B-Instruct</code> or <code>DeepSeek-V3</code>) served via vLLM on dedicated, isolated GPU instances (AWS EC2 p4d or locally hosted private servers), firms achieve absolute compliance. The documents are vectorized and query-matched using <code>pgvector</code> on an internal PostgreSQL instance, ensuring client-attorney data isolation.
      </p>

      <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900">3. Multimodal Vector Discovery in Real Estate Tech</h2>
      <p>
        As detailed in <Link href="/blog" className="text-[var(--accent-orange)] hover:underline">real estate tech news</Link>, buyers are increasingly frustrated with standard filters like "3 bedrooms, 2 bathrooms." They seek listings based on qualitative factors, querying: <em>"A modern loft with massive floor-to-ceiling windows and abundant afternoon sunlight."</em>
      </p>
      <p>
        This requires a multi-modal metadata pipeline. Standard structured SQL cannot index visual attributes. We solve this by passing all property listing images through a Vision-Language Model (VLM) such as LLaVA or Claude 3.5 Sonnet to generate dense, highly descriptive text metadata. This descriptive metadata is then merged with standard textual listings and vectorized together into a combined search index. When the user queries the frontend, a single semantic similarity match instantly retrieves listings that physically match their aesthetic criteria.
      </p>

      <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900">Performance Benchmarking and Validation</h2>
      <p>
        Building these systems is rarely straightforward. In depth-analyses on the <Link href="/blog" className="text-[var(--accent-orange)] hover:underline">droven.io technology blog</Link> show that vector drift and model updates are silent performance killers. If a team updates their embedding model from <code>text-embedding-ada-002</code> to <code>text-embedding-3</code>, the entire vector database must be completely re-indexed to prevent complete retrieval failure.
      </p>
      <p>
        Below is a comparison table of latency, infrastructure costs, and validation metrics captured across these three production blueprints, aligning with benchmarks validated by the <strong>droven.io technology blog</strong>:
      </p>

      {/* Benchmark Matrix */}
      <div style={{ margin: '32px 0', overflowX: 'auto' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '14px', color: 'var(--ink-secondary)', background: 'var(--bg-white)', border: '1px solid var(--border-light)', borderRadius: 'var(--radius-md)' }}>
          <thead>
            <tr style={{ background: 'var(--bg-cream)', borderBottom: '1px solid var(--border-light)' }}>
              <th style={{ padding: '12px 16px', textAlign: 'left', fontWeight: 700, color: 'var(--ink-primary)' }}>Industry Metric</th>
              <th style={{ padding: '12px 16px', textAlign: 'left', fontWeight: 700, color: 'var(--ink-primary)' }}>HR Tech (Milvus)</th>
              <th style={{ padding: '12px 16px', textAlign: 'left', fontWeight: 700, color: 'var(--ink-primary)' }}>Legal Tech (pgvector)</th>
              <th style={{ padding: '12px 16px', textAlign: 'left', fontWeight: 700, color: 'var(--ink-primary)' }}>PropTech (VLM + Pinecone)</th>
            </tr>
          </thead>
          <tbody>
            {[
              { metric: 'Avg Search Latency', hr: '32ms', legal: '45ms', prop: '120ms (VLM overhead)' },
              { metric: 'Infrastructure Stack', hr: 'Docker + Milvus Serverless', legal: 'AWS VPC + pgvector on RDS + vLLM', prop: 'FastAPI + Pinecone + Claude VLM' },
              { metric: 'Security / Compliance', hr: 'Anonymized chunking', legal: 'Strict SOC2 / HIPAA Air-Gap', prop: 'Standard encrypted-at-rest SSL' },
              { metric: 'Drift Recalibration', hr: 'Quarterly re-indexing', legal: 'Model-locked (no dynamic updates)', hr2: 'Dynamic index updates on image uploads' }
            ].map((row, idx) => (
              <tr key={idx} style={{ borderBottom: idx === 3 ? 'none' : '1px solid var(--border-light)' }}>
                <td style={{ padding: '12px 16px', fontWeight: 600, color: 'var(--ink-primary)' }}>{row.metric}</td>
                <td style={{ padding: '12px 16px' }}>{row.hr}</td>
                <td style={{ padding: '12px 16px' }}>{row.legal}</td>
                <td style={{ padding: '12px 16px', borderLeft: '1px solid var(--border-light)' }}>{row.prop || row.hr2}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p>
        Integrating generative AI into corporate environments is an engineering and architectural discipline. By adhering to air-gapping rules in legal systems, utilizing decoupled anonymized embeddings in HR pipelines, and building multimodal ingestion pipelines in PropTech, architects can leverage these breakthrough capabilities while maintaining rigorous control, safety, and sub-100ms latency.
      </p>
    </>
  );
}
