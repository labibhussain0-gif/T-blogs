'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function PerplexityVsGoogleBody() {
  const [keyword, setKeyword] = useState<string>('p');
  const [copied, setCopied] = useState<boolean>(false);

  const parameterString = 'https://www.perplexity.ai/search?q=%s';

  const handleCopy = () => {
    navigator.clipboard.writeText(parameterString);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      <p style={{ fontSize: '19px', lineHeight: 1.7, marginBottom: '32px', color: 'var(--ink-primary)', fontWeight: 400 }}>
        Let us be entirely honest: Google is no longer a search engine. It has devolved into a heavily monetized ad catalog optimized for e-commerce transactions and affiliate marketing click-throughs. For software developers, this degradation is particularly painful. Finding the correct syntax for a new React 19 concurrent state API hook now requires filtering out dozens of medium scraper sites, outdated StackOverflow clones, and SEO-stuffed tutorial farms. Conversational search engines like Perplexity bypass this noise by acting as direct code and context synthesizers.
      </p>

      {/* Key Takeaways Summary Box */}
      <div style={{
        background: 'var(--bg-white)',
        border: '1px solid var(--border-warm)',
        borderLeft: '4px solid var(--accent-orange)',
        borderRadius: 'var(--radius-md)',
        padding: '24px',
        marginBottom: '40px',
        boxShadow: '0 4px 12px var(--shadow-warm)'
      }}>
        <h4 style={{
          fontFamily: 'var(--font-display)',
          fontSize: '1.25rem',
          fontWeight: 700,
          color: 'var(--ink-primary)',
          marginTop: 0,
          marginBottom: '16px'
        }}>
          Key Takeaways: The Shift to Synthesized Search
        </h4>
        <ul style={{
          margin: 0,
          paddingLeft: '20px',
          display: 'flex',
          flexDirection: 'column',
          gap: '12px',
          fontSize: '15px',
          color: 'var(--ink-secondary)',
          fontFamily: 'var(--font-body)'
        }}>
          <li>
            <strong style={{ color: 'var(--ink-primary)' }}>RAG vs. PageRank:</strong> Perplexity relies on Retrieval-Augmented Generation (RAG) to search, fetch, and synthesize documentation directly into clean markdown, rather than matching keywords against index domains.
          </li>
          <li>
            <strong style={{ color: 'var(--ink-primary)' }}>Ad-Free Efficiency:</strong> Eliminating sponsored products, affiliate banner loops, and infinite cookie walls returns hours of developer time.
          </li>
          <li>
            <strong style={{ color: 'var(--ink-primary)' }}>Focus Filters:</strong> Restricting crawls to specific domains—such as academic papers or raw GitHub repositories—filters out SEO web spam at the source.
          </li>
          <li>
            <strong style={{ color: 'var(--ink-primary)' }}>Browser Integration:</strong> Configuring a custom site search engine in Chrome turns the omnibox into a direct pipeline to synthesized technical answers.
          </li>
        </ul>
      </div>

      {/* Ashique Anecdote */}
      <blockquote style={{
        borderLeft: '4px solid var(--border-warm)',
        paddingLeft: '20px',
        margin: '40px 0',
        fontStyle: 'italic',
        color: 'var(--ink-secondary)'
      }}>
        <p style={{ margin: 0 }}>
          <strong>Ashique Hussain’s Anecdote:</strong> "I spent a week debugging a concurrency bottleneck in an RxJS data pipeline for an energy trading platform. Standard Google searches kept sending me to Medium articles from 2018 repeating basic tutorial configurations, or stackoverflow scraped mirrors that had hijacked the search rankings with zero actual answers. In desperation, I booted up Perplexity and queried the exact RxJS scheduler context. It took exactly eight seconds. The engine crawled the official documentation, ran a live retrieval-augmented synthesis, and outputted a clean TypeScript example showing how to isolate the scheduler thread—complete with direct citation anchors. I haven't clicked a Google search results link for technical tasks since."
        </p>
      </blockquote>

      <p style={{ fontFamily: 'var(--font-body)', color: 'var(--ink-secondary)', lineHeight: 1.7 }}>
        The developer migration from legacy indexing to AI-driven synthesis is not a temporary trend; it is a structural shift in how engineers gather technical data. If you are exploring how different models perform in technical scenarios, you can read our detailed evaluation of the <Link href="/blog/best-ai-chatbots" style={{ color: 'var(--accent-orange)', textDecoration: 'underline' }}>best AI chatbots</Link>.
      </p>

      <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.75rem', color: 'var(--ink-primary)', marginTop: '48px', marginBottom: '20px', paddingBottom: '12px', borderBottom: '1px solid var(--border-light)' }}>
        The Autopsy of Modern Google Search
      </h2>
      <p style={{ fontFamily: 'var(--font-body)', color: 'var(--ink-secondary)', lineHeight: 1.7 }}>
        Google’s core business model is advertising, generating billions in ad revenues by keeping users on its search engine results pages (SERPs) long enough to view sponsored links. According to recent search studies, over 50% of all Google searches now result in zero clicks—meaning Google either answers the query directly with scraped snippets or forces users to navigate commercial ad blocks.
      </p>
      <p style={{ fontFamily: 'var(--font-body)', color: 'var(--ink-secondary)', lineHeight: 1.7 }}>
        For developers, this has created three major bottlenecks:
      </p>
      <ul style={{ margin: '24px 0', paddingLeft: '24px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <li>
          <strong style={{ color: 'var(--ink-primary)' }}>SEO Content Farms:</strong> High-domain authority websites hire low-cost content writers to write massive articles targeting specific dev keywords (e.g., "how to map array in react"). These articles contain hundreds of words of fluff before showing the single line of code you actually need.
        </li>
        <li>
          <strong style={{ color: 'var(--ink-primary)' }}>Scraped StackOverflow Mirrors:</strong> Bots copy StackOverflow threads, package them with intrusive display ads, and use aggressive SEO tactics to rank higher than the original threads. Clicking these leads to a nightmare of cookie popups and layout shifts.
        </li>
        <li>
          <strong style={{ color: 'var(--ink-primary)' }}>Outdated Information:</strong> Search engines rely on historical crawl frequencies. If an API framework undergoes a breaking change on a Tuesday, Google's index may still serve the old framework documentation for weeks, causing developers to debug dead code.
        </li>
      </ul>
      <p style={{ fontFamily: 'var(--font-body)', color: 'var(--ink-secondary)', lineHeight: 1.7 }}>
        To secure your own site's discoverability in this changing landscape, you must understand how to transition your content for AI crawlers. Check out our guide on <Link href="/blog/brand-visibility-ai-search-engines" style={{ color: 'var(--accent-orange)', textDecoration: 'underline' }}>generative engine optimization strategies for visibility in AI search</Link> to learn about configuring schemas and structured data.
      </p>

      <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.75rem', color: 'var(--ink-primary)', marginTop: '48px', marginBottom: '20px', paddingBottom: '12px', borderBottom: '1px solid var(--border-light)' }}>
        RAG Mechanics: Why Perplexity Outclasses Legacy PageRank
      </h2>
      <p style={{ fontFamily: 'var(--font-body)', color: 'var(--ink-secondary)', lineHeight: 1.7 }}>
        At the system level, the difference between Google and Perplexity comes down to the computer science of retrieval. Google uses a modified version of **PageRank** and neural matching to evaluate which domain has the highest authority, presenting you with a list of links. You, the human, are forced to be the parser: clicking the link, scanning the page, extracting the relevant syntax, and discarding the advertising noise.
      </p>
      <p style={{ fontFamily: 'var(--font-body)', color: 'var(--ink-secondary)', lineHeight: 1.7 }}>
        Perplexity utilizes **Retrieval-Augmented Generation (RAG)**. When you submit a technical query, Perplexity does not just look for matches in a pre-computed index. Its pipeline performs the following steps in real-time:
      </p>
      <ol style={{ margin: '24px 0', paddingLeft: '24px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <li>
          <strong style={{ color: 'var(--ink-primary)' }}>Semantic Query Expansion:</strong> The engine translates your colloquial question into several structured search queries optimized for various documentation databases and web indexes.
        </li>
        <li>
          <strong style={{ color: 'var(--ink-primary)' }}>Parallel Documentation Crawl:</strong> It crawls high-trust sources (such as MDN Web Docs, GitHub repositories, and official API domains) in parallel.
        </li>
        <li>
          <strong style={{ color: 'var(--ink-primary)' }}>Vector Embedding Segmentation:</strong> The fetched HTML files are split into small chunks, converted to vector embeddings, and ranked based on semantic similarity to your query.
        </li>
        <li>
          <strong style={{ color: 'var(--ink-primary)' }}>LLM Synthesis:</strong> The highest-ranked code chunks are fed into a large language model context window (such as Claude 3.5 Sonnet or GPT-4o), which synthesizes the data into a single, unified markdown response with inline citations pointing back to the source.
        </li>
      </ol>
      <p style={{ fontFamily: 'var(--font-body)', color: 'var(--ink-secondary)', lineHeight: 1.7 }}>
        By outsourcing the crawling, parsing, and synthesis to the machine, you eliminate the cognitive load of browsing. If you want to dive deeper into the tools shaping the modern artificial intelligence landscape, explore our <Link href="/ai-tools-guide" style={{ color: 'var(--accent-orange)', textDecoration: 'underline' }}>comprehensive AI tools guide</Link> for detailed comparisons.
      </p>

      {/* ⚡ Chrome Search Engine Shortcut Generator Widget */}
      <div style={{
        background: 'var(--bg-white)',
        border: '1px solid var(--border-light)',
        padding: '32px 24px',
        borderRadius: 'var(--radius-md)',
        margin: '40px 0',
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
          <span style={{
            fontSize: '11px',
            background: 'var(--accent-orange)',
            color: '#fff',
            padding: '2px 8px',
            borderRadius: 'var(--radius-full)',
            fontWeight: 700,
            textTransform: 'uppercase'
          }}>
            Interactive Utility
          </span>
          <h3 style={{ margin: 0, fontSize: '18px', fontWeight: 800, color: 'var(--ink-primary)' }}>
            ⚡ Chrome Search Engine Shortcut Generator
          </h3>
        </div>
        <p style={{ fontSize: '13px', color: 'var(--ink-secondary)', marginBottom: '24px', lineHeight: 1.5 }}>
          Ditch manual navigation. Define a quick keyboard keyword (like <kbd style={{ background: 'var(--bg-warm-gray)', padding: '1px 4px', border: '1px solid var(--border-light)', borderRadius: '3px', fontSize: '11px' }}>p</kbd> or <kbd style={{ background: 'var(--bg-warm-gray)', padding: '1px 4px', border: '1px solid var(--border-light)', borderRadius: '3px', fontSize: '11px' }}>px</kbd>) to instantly run Perplexity RAG synthesis queries directly from your browser's address bar.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '24px' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', alignItems: 'center' }}>
            <label htmlFor="shortcut-input" style={{ fontSize: '14px', fontWeight: 600, color: 'var(--ink-primary)' }}>
              Preferred Keyboard Shortcut:
            </label>
            <input
              id="shortcut-input"
              type="text"
              value={keyword}
              onChange={(e) => setKeyword(e.target.value.toLowerCase().trim().slice(0, 4))}
              placeholder="p"
              style={{
                background: 'var(--bg-cream)',
                border: '1px solid var(--border-light)',
                padding: '6px 12px',
                borderRadius: 'var(--radius-xs)',
                width: '100px',
                textAlign: 'center',
                fontSize: '14px',
                fontWeight: 700,
                color: 'var(--ink-primary)',
                outline: 'none',
                transition: 'border-color 0.2s'
              }}
              onFocus={(e) => e.target.style.borderColor = 'var(--accent-orange)'}
              onBlur={(e) => e.target.style.borderColor = 'var(--border-light)'}
            />
          </div>

          <div style={{ position: 'relative' }}>
            <span style={{ fontSize: '11px', fontWeight: 700, color: 'var(--ink-tertiary)', textTransform: 'uppercase', display: 'block', marginBottom: '6px' }}>
              Chrome URL Parameter String:
            </span>
            <div style={{
              background: '#1A1A1A',
              color: '#4ADE80',
              padding: '16px 48px 16px 16px',
              borderRadius: 'var(--radius-sm)',
              fontSize: '13px',
              fontFamily: 'monospace',
              overflowX: 'auto',
              border: '1px solid #333'
            }}>
              {parameterString}
            </div>
            <button
              onClick={handleCopy}
              aria-label="Copy URL parameter string"
              style={{
                position: 'absolute',
                right: '12px',
                bottom: '12px',
                background: 'rgba(255, 255, 255, 0.1)',
                border: 'none',
                color: '#fff',
                padding: '6px 12px',
                borderRadius: 'var(--radius-xs)',
                fontSize: '11px',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'background 0.2s'
              }}
              onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)'}
              onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)'}
            >
              {copied ? '✓ Copied' : 'Copy'}
            </button>
          </div>
        </div>

        <h4 style={{ margin: '0 0 12px', fontSize: '13px', fontWeight: 700, color: 'var(--ink-primary)' }}>
          Installation Instructions:
        </h4>
        <ol style={{
          fontSize: '13px',
          color: 'var(--ink-secondary)',
          margin: 0,
          paddingLeft: '20px',
          display: 'flex',
          flexDirection: 'column',
          gap: '8px',
          lineHeight: 1.6
        }}>
          <li>Copy the URL Parameter String above.</li>
          <li>Open your Chrome browser and navigate to <code style={{ background: 'var(--bg-cream)', padding: '2px 4px', borderRadius: 'var(--radius-xs)', fontSize: '12px' }}>chrome://settings/searchEngines</code>.</li>
          <li>Scroll down to the **Site search** section and click the **Add** button.</li>
          <li>Configure the parameters exactly as follows:
            <ul style={{ margin: '6px 0', paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '4px', listStyleType: 'circle' }}>
              <li><strong>Search engine:</strong> <code style={{ background: 'var(--bg-cream)', padding: '1px 4px', borderRadius: 'var(--radius-xs)', fontSize: '11px' }}>Perplexity</code></li>
              <li><strong>Shortcut:</strong> <code style={{ background: 'var(--bg-cream)', padding: '1px 4px', borderRadius: 'var(--radius-xs)', fontSize: '11px', color: 'var(--accent-orange)', fontWeight: 700 }}>{keyword || 'p'}</code></li>
              <li><strong>URL with %s in place of query:</strong> Paste the copied string (<code style={{ fontSize: '11px' }}>{parameterString}</code>)</li>
            </ul>
          </li>
          <li>Click **Save**. Now, simply type <kbd style={{ background: 'var(--bg-warm-gray)', padding: '2px 6px', border: '1px solid var(--border-light)', borderRadius: '3px', fontSize: '11px', fontWeight: 600 }}>{keyword || 'p'}</kbd> followed by <kbd style={{ background: 'var(--bg-warm-gray)', padding: '2px 6px', border: '1px solid var(--border-light)', borderRadius: '3px', fontSize: '11px', fontWeight: 600 }}>Space</kbd> or <kbd style={{ background: 'var(--bg-warm-gray)', padding: '2px 6px', border: '1px solid var(--border-light)', borderRadius: '3px', fontSize: '11px', fontWeight: 600 }}>Tab</kbd> in your address bar to search via Perplexity RAG synthesis instantly!</li>
        </ol>
      </div>

      <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.75rem', color: 'var(--ink-primary)', marginTop: '48px', marginBottom: '20px', paddingBottom: '12px', borderBottom: '1px solid var(--border-light)' }}>
        The Architectural Focus Channels
      </h2>
      <p style={{ fontFamily: 'var(--font-body)', color: 'var(--ink-secondary)', lineHeight: 1.7 }}>
        One of the major design advantages Perplexity offers over generalist platforms like standard ChatGPT is the presence of **Focus Filters**. General web search engines attempt to crawl everything—resulting in a mix of corporate news releases, Reddit arguments, and outdated tutorials. 
      </p>
      <p style={{ fontFamily: 'var(--font-body)', color: 'var(--ink-secondary)', lineHeight: 1.7 }}>
        Perplexity allows you to slice the crawl space before running model inference:
      </p>
      <ul style={{ margin: '24px 0', paddingLeft: '24px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <li>
          <strong style={{ color: 'var(--ink-primary)' }}>Writing Channel:</strong> Bypasses the web search retrieval phase completely. It handles pure language model generation, ideal for cleaning up raw notes or converting unstructured code comments into professional markdown docs.
        </li>
        <li>
          <strong style={{ color: 'var(--ink-primary)' }}>Academic Channel:</strong> Restricts crawls to peer-reviewed academic literature, ArXiv pre-prints, and scientific publications, ignoring secondary news outlets and forum boards.
        </li>
        <li>
          <strong style={{ color: 'var(--ink-primary)' }}>Code Channel:</strong> Sets the retrieval space specifically to technical documentation directories, developer API specifications, and raw GitHub file trees. It actively ignores marketing pages and blog posts claiming to solve problems.
        </li>
      </ul>
      <p style={{ fontFamily: 'var(--font-body)', color: 'var(--ink-secondary)', lineHeight: 1.7 }}>
        This architectural routing changes the input context dramatically. By stripping away non-technical noise before running the synthesis pipeline, the probability of model hallucinations drops significantly, yielding precise execution patterns.
      </p>

      <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.75rem', color: 'var(--ink-primary)', marginTop: '48px', marginBottom: '20px', paddingBottom: '12px', borderBottom: '1px solid var(--border-light)' }}>
        Maximizing Your Conversational Search Pipeline
      </h2>
      <p style={{ fontFamily: 'var(--font-body)', color: 'var(--ink-secondary)', lineHeight: 1.7 }}>
        Transitioning to synthesized search requires changing your mental model of prompting. When using legacy Google, you train yourself to type fragments of queries optimized for a database index (e.g., "nextjs dynamic routing error 404"). You must analyze the links manually.
      </p>
      <p style={{ fontFamily: 'var(--font-body)', color: 'var(--ink-secondary)', lineHeight: 1.7 }}>
        With Perplexity, treat the engine like a highly competent, connected junior engineer. Provide full structural parameters. Write queries like: *"Review the official Next.js 15 dynamic routing documentation and write a stateless TSX page component that fetches data using generateStaticParams. Address the breaking change involving async params."*
      </p>
      <p style={{ fontFamily: 'var(--font-body)', color: 'var(--ink-secondary)', lineHeight: 1.7 }}>
        The engine will crawl the official Next.js documentation, identify the specific deprecation note regarding async params, and synthesize a compile-safe code block tailored to your exact schema in seconds. You transition from a manual clicking consumer to an architectural orchestrator.
      </p>
    </>
  );
}
