'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import FAQSection from '@/components/FAQSection';

interface AITool {
  name: string;
  category: 'text' | 'image' | 'code' | 'automation';
  description: string;
  proTips: string;
  pricing: string;
  badge?: string;
  readMoreLink?: string;
  specs: { label: string; value: string }[];
}

const TOOLS_DATA: AITool[] = [
  {
    name: 'Claude AI',
    category: 'text',
    description: 'Anthropic\'s flagship conversational model, widely regarded as the ultimate assistant for complex coding, structured reasoning, and nuanced long-form writing.',
    proTips: 'Deploy Claude Projects to supply an entire codebase as local context. Use XML tags to strictly isolate prompt inputs.',
    pricing: 'Free tier | Pro: $20/mo',
    badge: 'Developer Favorite',
    readMoreLink: '/blog/how-to-use-claude-ai',
    specs: [
      { label: 'Context Window', value: '200k tokens' },
      { label: 'Best For', value: 'Coding & Logic' },
    ],
  },
  {
    name: 'ChatGPT',
    category: 'text',
    description: 'OpenAI\'s market-leading conversational platform. Known for its versatile tool ecosystem, advanced real-time voice modes, and powerful Custom GPT builders.',
    proTips: 'Utilize Custom Instructions to declare your developer persona and output constraints globally across all new chats.',
    pricing: 'Free tier | Plus: $20/mo',
    badge: 'Most Versatile',
    readMoreLink: '/blog/how-to-use-chatgpt-effectively',
    specs: [
      { label: 'Key Feature', value: 'Custom GPTs & Voice' },
      { label: 'Best For', value: 'General Productivity' },
    ],
  },
  {
    name: 'DeepSeek',
    category: 'text',
    description: 'A highly optimized, cost-efficient open-weights reasoning model that delivers state-of-the-art analytical depth at a fraction of competitors\' API pricing.',
    proTips: 'Configure DeepSeek R1 directly inside roleplay platforms or local clients by supplying their OpenAI-compatible endpoint URL.',
    pricing: 'Free web tier | Pay-as-you-go API',
    badge: 'Best Value Reasoning',
    readMoreLink: '/blog/deepseek-janitor-ai',
    specs: [
      { label: 'Base API URL', value: 'api.deepseek.com/v1' },
      { label: 'Best For', value: 'Low-cost Advanced API' },
    ],
  },
  {
    name: 'Perplexity AI',
    category: 'text',
    description: 'A dedicated AI search and research assistant. Bypasses traditional indexes to provide direct answers backed by transparent, real-time cited source links.',
    proTips: 'Optimize your site\'s semantic structured schema and maintain a clean llms.txt folder to be prominently cited in their search results.',
    pricing: 'Free tier | Pro: $20/mo',
    badge: 'Research King',
    readMoreLink: '/blog/best-ai-chatbots',
    specs: [
      { label: 'Core Mechanism', value: 'Generative Engine' },
      { label: 'Best For', value: 'Real-time Fact Finding' },
    ],
  },
  {
    name: 'Stable Diffusion / FLUX',
    category: 'image',
    description: 'Leading open-weights and commercial image generation models. Enables high-fidelity creative styling, micro-detail prompt adherence, and locally hosted deployments.',
    proTips: 'Run FLUX.1 locally using high-VRAM setups to produce completely uncensored, studio-grade photorealistic visual assets.',
    pricing: 'Free open source | Paid API cloud',
    badge: 'Open Weights Moat',
    specs: [
      { label: 'Hardware Limit', value: '12GB+ VRAM required' },
      { label: 'Best For', value: 'Total Creative Freedom' },
    ],
  },
  {
    name: 'Ollama',
    category: 'code',
    description: 'A highly popular, lightweight command-line engine that lets you run complex large language models locally on your macOS, Linux, or Windows machine.',
    proTips: 'Run "ollama run deepseek-r1:8b" in your terminal to establish a completely private, offline reasoning workspace on your laptop.',
    pricing: '100% Free & Open Source',
    badge: 'Local Sovereignty',
    specs: [
      { label: 'Installation', value: 'Local Command Line' },
      { label: 'Privacy Status', value: '100% Offline' },
    ],
  },
  {
    name: 'n8n',
    category: 'automation',
    description: 'An advanced, fair-code workflow automation tool. Serves as a highly customizable, self-hosted alternative to SaaS automation systems.',
    proTips: 'Leverage self-hosted n8n instances combined with local database servers to bypass high per-bandwidth and per-webhook subscription tiers.',
    pricing: 'Free self-hosted | Cloud plans',
    badge: 'Integrated Moat',
    readMoreLink: '/blog/self-hosted-open-source-software-automation',
    specs: [
      { label: 'Integration Type', value: 'Event-driven & Node API' },
      { label: 'Best For', value: 'Unrestricted Automation' },
    ],
  },
];

const FAQS_DATA = [
  {
    question: 'How do I choose the best AI tool for my professional workflow?',
    answer: 'Determine your primary bottleneck first. For multi-file code editing and advanced logic analysis, Claude Pro is the industry favorite. For daily general assistance, custom voice-based workflows, and automated web research, ChatGPT Plus is highly recommended. For facts and citations, use Perplexity.',
  },
  {
    question: 'Are free AI tools secure for confidential work files?',
    answer: 'Generally, no. Standard free tiers (and many basic paid tiers) on public clouds reserve the right to ingest your prompt logs to train future model versions. To secure sensitive data, configure enterprise API keys (which feature strict privacy clauses) or host models locally using Ollama.',
  },
  {
    question: 'How does local image generation compare with premium subscriptions like Midjourney?',
    answer: 'Midjourney is incredibly polished and produces aesthetic outputs with simple prompts, but operates on closed-source servers. Local generators like FLUX.1 or Stable Diffusion require substantial technical setup and hardware (high-end GPU), but provide complete creative control and zero per-image generation charges.',
  },
  {
    question: 'What is Generative Engine Optimization (GEO) in AI Search?',
    answer: 'GEO is the emerging practice of formatting your digital assets (via semantic HTML structures, structured JSON-LD graphs, and llms.txt files) so that LLM-based crawlers like Perplexity and ChatGPT can easily read, parse, and cite your brand inside their conversational outputs.',
  },
];

export default function AIToolsGuideClient() {
  const [activeTab, setActiveTab] = useState<'all' | 'text' | 'image' | 'code' | 'automation'>('all');

  const filteredTools = activeTab === 'all'
    ? TOOLS_DATA
    : TOOLS_DATA.filter((tool) => tool.category === activeTab);

  return (
    <div style={{ background: 'var(--bg-cream)', minHeight: '100vh', fontFamily: 'var(--font-body)' }}>
      {/* Hero Section */}
      <section
        style={{
          background: 'var(--bg-white)',
          borderBottom: '1px solid var(--border-light)',
          padding: '80px 24px 64px',
          textAlign: 'center',
        }}
      >
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <span
            style={{
              display: 'inline-block',
              background: 'var(--accent-orange)',
              color: '#fff',
              padding: '4px 14px',
              borderRadius: 'var(--radius-full)',
              fontSize: '11px',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.06em',
              marginBottom: '20px',
            }}
          >
            Pillar Page Guide
          </span>
          <h1
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 900,
              fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
              color: 'var(--ink-primary)',
              marginBottom: '24px',
              letterSpacing: '-0.02em',
              lineHeight: 1.1,
            }}
          >
            Ultimate AI Tools & Platforms Guide
          </h1>
          <p
            style={{
              fontSize: '18px',
              lineHeight: 1.8,
              color: 'var(--ink-secondary)',
              maxWidth: '680px',
              margin: '0 auto 40px',
            }}
          >
            A non-nonsense, systems-grade evaluation of the leading artificial intelligence platforms in 2026. We test and rank tools by raw execution capability, pricing models, and developer utility.
          </p>

          {/* Spoke Roadmap Box */}
          <div
            style={{
              background: 'var(--bg-warm-gray)',
              border: '1px solid var(--border-light)',
              borderRadius: 'var(--radius-md)',
              padding: '24px',
              textAlign: 'left',
              maxWidth: '680px',
              margin: '0 auto',
            }}
          >
            <h4
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 700,
                fontSize: '15px',
                color: 'var(--ink-primary)',
                marginBottom: '12px',
                textTransform: 'uppercase',
                letterSpacing: '0.04em',
              }}
            >
              🔥 Hands-on Deep Dives & Guides
            </h4>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '8px' }}>
              <Link href="/blog/best-ai-chatbots" style={{ color: 'var(--accent-orange)', fontSize: '15px', fontWeight: 600, textDecoration: 'none' }} className="hover:underline">
                → ChatGPT vs Claude vs Gemini vs Grok: The 2026 Chatbot Battle
              </Link>
              <Link href="/blog/how-to-use-claude-ai" style={{ color: 'var(--accent-orange)', fontSize: '15px', fontWeight: 600, textDecoration: 'none' }} className="hover:underline">
                → How to Use Claude AI: Codebases, Projects, and Artifacts
              </Link>
              <Link href="/blog/how-to-use-chatgpt-effectively" style={{ color: 'var(--accent-orange)', fontSize: '15px', fontWeight: 600, textDecoration: 'none' }} className="hover:underline">
                → How to Use ChatGPT Effectively: Advanced Prompting Payload Template
              </Link>
              <Link href="/blog/deepseek-janitor-ai" style={{ color: 'var(--accent-orange)', fontSize: '15px', fontWeight: 600, textDecoration: 'none' }} className="hover:underline">
                → Step-by-Step: Setting Up DeepSeek API Endpoints Correctly
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section style={{ maxWidth: '1200px', margin: '48px auto 24px', padding: '0 24px' }}>
        <div
          style={{
            display: 'flex',
            gap: '8px',
            overflowX: 'auto',
            paddingBottom: '8px',
            borderBottom: '1px solid var(--border-light)',
          }}
        >
          {(['all', 'text', 'image', 'code', 'automation'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              style={{
                background: activeTab === tab ? 'var(--accent-orange)' : 'var(--bg-white)',
                color: activeTab === tab ? '#fff' : 'var(--ink-secondary)',
                border: '1px solid var(--border-light)',
                padding: '8px 18px',
                borderRadius: 'var(--radius-full)',
                fontSize: '14px',
                fontWeight: 600,
                cursor: 'pointer',
                textTransform: 'capitalize',
                transition: 'all 0.2s',
              }}
            >
              {tab === 'all' ? 'All Tools' : tab}
            </button>
          ))}
        </div>
      </section>

      {/* Tools Grid */}
      <section style={{ maxWidth: '1200px', margin: '0 auto 80px', padding: '0 24px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))', gap: '24px' }}>
          {filteredTools.map((tool) => (
            <div
              key={tool.name}
              style={{
                background: 'var(--bg-white)',
                border: '1px solid var(--border-light)',
                borderRadius: 'var(--radius-md)',
                padding: '32px 28px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'transform 0.2s, box-shadow 0.2s',
              }}
              className="hover:shadow-md hover:-translate-y-1"
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '22px', color: 'var(--ink-primary)' }}>
                    {tool.name}
                  </h3>
                  {tool.badge && (
                    <span
                      style={{
                        background: 'var(--bg-warm-gray)',
                        color: 'var(--ink-secondary)',
                        fontSize: '11px',
                        fontWeight: 700,
                        padding: '3px 8px',
                        borderRadius: 'var(--radius-sm)',
                        border: '1px solid var(--border-light)',
                      }}
                    >
                      {tool.badge}
                    </span>
                  )}
                </div>

                <p style={{ fontSize: '15px', lineHeight: 1.6, color: 'var(--ink-secondary)', marginBottom: '20px' }}>
                  {tool.description}
                </p>

                {/* Specs Section */}
                <div
                  style={{
                    background: 'var(--bg-warm-gray)',
                    borderRadius: 'var(--radius-sm)',
                    padding: '12px 16px',
                    marginBottom: '20px',
                    fontSize: '13px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '6px',
                  }}
                >
                  {tool.specs.map((spec) => (
                    <div key={spec.label} style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <span style={{ color: 'var(--ink-tertiary)', fontWeight: 500 }}>{spec.label}</span>
                      <span style={{ color: 'var(--ink-primary)', fontWeight: 600 }}>{spec.value}</span>
                    </div>
                  ))}
                  <div style={{ display: 'flex', justifyContent: 'space-between', borderTop: '1px solid var(--border-light)', paddingTop: '6px', marginTop: '2px' }}>
                    <span style={{ color: 'var(--ink-tertiary)', fontWeight: 500 }}>Pricing</span>
                    <span style={{ color: 'var(--ink-primary)', fontWeight: 600 }}>{tool.pricing}</span>
                  </div>
                </div>

                {/* Pro Tips Section */}
                <div style={{ marginBottom: '24px' }}>
                  <span style={{ display: 'block', fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.04em', color: 'var(--accent-orange)', marginBottom: '6px' }}>
                    💡 Pro Architect Tip
                  </span>
                  <p style={{ fontSize: '14px', lineHeight: 1.5, color: 'var(--ink-secondary)', fontStyle: 'italic' }}>
                    &ldquo;{tool.proTips}&rdquo;
                  </p>
                </div>
              </div>

              {tool.readMoreLink && (
                <Link
                  href={tool.readMoreLink}
                  style={{
                    display: 'block',
                    textAlign: 'center',
                    background: 'transparent',
                    border: '1.5px solid var(--border-light)',
                    color: 'var(--ink-secondary)',
                    padding: '10px 0',
                    borderRadius: 'var(--radius-full)',
                    fontSize: '14px',
                    fontWeight: 600,
                    textDecoration: 'none',
                    transition: 'all 0.2s',
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
                  Read Comprehensive Guide →
                </Link>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section style={{ borderTop: '1px solid var(--border-light)', background: 'var(--bg-white)', padding: '80px 24px' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 700,
              fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)',
              color: 'var(--ink-primary)',
              textAlign: 'center',
              marginBottom: '16px',
            }}
          >
            AI Tools & Platforms FAQ
          </h2>
          <p
            style={{
              fontSize: '16px',
              color: 'var(--ink-secondary)',
              textAlign: 'center',
              maxWidth: '480px',
              margin: '0 auto 48px',
            }}
          >
            Factual, direct solutions to the most common strategic issues software developers face in AI.
          </p>

          <FAQSection faqs={FAQS_DATA} />
        </div>
      </section>
    </div>
  );
}
