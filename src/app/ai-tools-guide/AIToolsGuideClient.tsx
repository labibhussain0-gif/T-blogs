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
    readMoreLink: '/blog/deepseek-vs-chatgpt',
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
    readMoreLink: '/blog/perplexity-vs-google',
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
    readMoreLink: '/blog/best-free-ai-tools',
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

const WEEK2_SPOKES = [
  {
    slug: 'best-free-ai-tools',
    title: 'Best Free AI Tools in 2026 (No Subscription Required)',
    keyword: 'best free ai tools',
    volume: '2,200/mo',
    difficulty: 'Easy (11/100)',
    intent: 'Commercial / List',
    wordCount: '2,200 words',
    outline: [
      'Focus on high-value tools with genuine free tiers (no hidden paywalls after 3 prompts).',
      'Breakdown of free API credits vs. web access (DeepSeek, HuggingFace Spaces).',
      'Local offline model runners (Ollama, LM Studio) as the ultimate free tool.',
      'Direct comparison matrix of free rate limits across OpenAI, Anthropic, and Google.'
    ],
    anecdote: 'I saved $120/mo for a client\'s dev team by migrating their simple parsing scripts from commercial GPT-4o keys to local Ollama/DeepSeek instances running on an old Mac Mini.'
  },
  {
    slug: 'perplexity-vs-google',
    title: 'Why Are Developers Switching from Google to This Free Browser',
    keyword: 'perplexity vs google',
    volume: '2,000/mo',
    difficulty: 'Medium (24/100)',
    intent: 'Informative Comparison',
    wordCount: '2,000 words',
    outline: [
      'Technical autopsy of why standard search indexes fail developers (ad bloat, SEO slop farms, outdated results).',
      'How conversational agents with live RAG (Perplexity) fetch, parse, and synthesize raw documentation in seconds.',
      'Setting up custom Perplexity Focus search engines (Academic, Writing, Coding).',
      'The exact chrome keyword shortcut config to make Perplexity your default query engine.'
    ],
    anecdote: 'I timed my research workflows: finding the correct syntax for a new React 19 concurrent state API hook took 4 minutes of filtering generic SEO sites on Google versus exactly 8 seconds of clean markdown synthesis on Perplexity.'
  },
  {
    slug: 'deepseek-vs-chatgpt',
    title: 'How China Is Secretly Winning the AI Race with Free AI',
    keyword: 'deepseek vs chatgpt',
    volume: '2,500/mo',
    difficulty: 'Hard (56/100)',
    intent: 'Informative Comparison',
    wordCount: '2,500 words',
    outline: [
      'The economics of the DeepSeek disruption: how a $5.6M hardware footprint matched Silicon Valley\'s billion-dollar supercomputers.',
      'DeepSeek R1 reasoning architecture vs. ChatGPT\'s o1 (multi-token thinking paths, reinforcement learning).',
      'The API cost collapse: $0.14 per million tokens vs. OpenAI\'s $15 (a 99% cost reduction).',
      'Political and infrastructure implications of decentralized open-weights models in corporate stacks.'
    ],
    anecdote: 'Running a bulk vector database indexing script that processes 10,000 corporate documents cost me exactly $4.12 using DeepSeek\'s V3 API, compared to a massive $210 estimation on GPT-4o.'
  },
  {
    slug: 'grok-ai-world-richest-man',
    title: 'The AI Created by the World\'s Richest Man',
    keyword: 'grok ai',
    volume: '1,800/mo',
    difficulty: 'Medium (28/100)',
    intent: 'Informative / Review',
    wordCount: '1,800 words',
    outline: [
      'Inside Grok\'s real-time X (Twitter) data pipeline: how it captures breaking news, tech rumors, and github repos hours before Google crawls them.',
      'Evaluating the 1M token context window and hardware specifications of xAI\'s Colossus cluster in Memphis.',
      'Practical guides to Grok\'s system-level image parsing and document uploading.',
      'A non-slop technical evaluation of Grok\'s raw coding performance versus Claude Sonnet.'
    ],
    anecdote: 'When a major cloud provider suffered a silent US-East outage last week, Grok gave me the exact root cause and sub-reddit status threads 45 minutes before the provider updated their official dashboard.'
  }
];

export default function AIToolsGuideClient() {
  const [activeTab, setActiveTab] = useState<'all' | 'text' | 'image' | 'code' | 'automation'>('all');
  const [selectedWeek2Slugs, setSelectedWeek2Slugs] = useState<string[]>([]);
  const [copyStatus, setCopyStatus] = useState<string>('Copy Prompt Blueprint');

  const filteredTools = activeTab === 'all'
    ? TOOLS_DATA
    : TOOLS_DATA.filter((tool) => tool.category === activeTab);

  const toggleWeek2Slug = (slug: string) => {
    setSelectedWeek2Slugs((prev) =>
      prev.includes(slug) ? prev.filter((s) => s !== slug) : [...prev, slug]
    );
  };

  const completedSpokesCount = 4;
  const selectedCount = selectedWeek2Slugs.length;
  const totalSpokes = 14;
  const totalCount = completedSpokesCount + selectedCount;
  const authorityPercentage = Math.round((totalCount / totalSpokes) * 100);

  let authorityLevel = 'Foundational Core';
  let authorityDesc = 'Core foundational topics fully documented.';
  let levelColor = '#e8570e';

  if (authorityPercentage >= 57) {
    authorityLevel = 'Sovereign Mastery';
    authorityDesc = 'Ultimate developer stack reference coverage.';
    levelColor = '#22c55e';
  } else if (authorityPercentage >= 50) {
    authorityLevel = 'Full Stack Domain';
    authorityDesc = 'Comprehensive systems tutorials covering real stack layers.';
    levelColor = '#3b82f6';
  } else if (authorityPercentage >= 42) {
    authorityLevel = 'Advanced Architecture';
    authorityDesc = 'Deep contextual links covering developer scenarios.';
    levelColor = '#8b5cf6';
  } else if (authorityPercentage >= 35) {
    authorityLevel = 'Deepening Coverage';
    authorityDesc = 'Advanced topics expanding developer coverage.';
    levelColor = '#f59e0b';
  }

  // Circular SVG ring specs
  const radius = 40;
  const strokeWidth = 8;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (circumference * authorityPercentage) / 100;

  const handleCopyPrompt = () => {
    const selectedDetails = WEEK2_SPOKES.filter(s => selectedWeek2Slugs.includes(s.slug));
    const promptText = `Act as Ashique Hussain, the "Technical Architect" content engineer. Write a highly technical, opinionated, 100% slop-free article in MDX format matching these blueprints:

${selectedDetails.map((s, idx) => `${idx + 1}. TITLE: "${s.title}"
   - PRIMARY KEYWORD: "${s.keyword}" (Search Vol: ${s.volume}, KD: ${s.difficulty})
   - TARGET WORD COUNT: ${s.wordCount}
   - OUTLINE:
${s.outline.map(line => `     * ${line}`).join('\n')}
   - INCORPORATE THIS PERSONAL ANECDOTE: "${s.anecdote}"`).join('\n\n')}

CRITICAL STANDARDS:
- Direct answer in first two paragraphs.
- Place a 3-5 bullet point "Key Takeaways" box right after intro hook.
- Strictly nested H2/H3 architecture (no raw H1s in body, no skipping levels).
- Insert code blocks, tables, or ASCII architecture mappings every 800 words.
- Maintain professional, developer-grade jargon. Avoid corporate marketing slop ("transformative", "seamless", "harnessing").`;

    navigator.clipboard.writeText(promptText);
    setCopyStatus('Copied to Clipboard! ✓');
    setTimeout(() => setCopyStatus('Copy Prompt Blueprint'), 2500);
  };

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
        <div style={{ maxWidth: '920px', margin: '0 auto' }}>
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
              fontSize: 'clamp(1.85rem, 5vw, 3.25rem)',
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
              margin: '0 auto 48px',
            }}
          >
            A non-nonsense, systems-grade evaluation of the leading artificial intelligence platforms in 2026. We test and rank tools by raw execution capability, pricing models, and developer utility.
          </p>

          {/* Interactive Topical Authority Dashboard */}
          <div
            style={{
              background: 'var(--bg-white)',
              border: '1.5px solid var(--border-light)',
              borderRadius: 'var(--radius-md)',
              padding: '36px 32px',
              textAlign: 'left',
              margin: '0 auto',
              boxShadow: '0 8px 30px rgba(0,0,0,0.02)',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '24px' }}>
              <span style={{ display: 'inline-block', width: '8px', height: '8px', borderRadius: '50%', background: 'var(--accent-orange)', boxShadow: '0 0 10px var(--accent-orange)' }}></span>
              <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '14px', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--ink-primary)', margin: 0 }}>
                Interactive Developer Stack & Guide Explorer
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left Column - SVG circular progress meter */}
              <div className="lg:col-span-4 flex flex-col items-center text-center p-6" style={{ background: 'var(--bg-cream)', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-light)', minHeight: '280px', justifyContent: 'center' }}>
                <div style={{ position: 'relative', width: '120px', height: '120px', marginBottom: '16px' }}>
                  <svg width="120" height="120" viewBox="0 0 100 100" style={{ transform: 'rotate(-90deg)' }}>
                    {/* Background Circle */}
                    <circle
                      cx="50"
                      cy="50"
                      r={radius}
                      fill="transparent"
                      stroke="var(--border-light)"
                      strokeWidth={strokeWidth}
                    />
                    {/* Active Progress Circle */}
                    <circle
                      cx="50"
                      cy="50"
                      r={radius}
                      fill="transparent"
                      stroke={levelColor}
                      strokeWidth={strokeWidth}
                      strokeDasharray={circumference}
                      strokeDashoffset={strokeDashoffset}
                      strokeLinecap="round"
                      style={{ transition: 'stroke-dashoffset 0.6s cubic-bezier(0.4, 0, 0.2, 1), stroke 0.6s ease' }}
                    />
                  </svg>
                  {/* Center Text */}
                  <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                    <span style={{ fontSize: '28px', fontWeight: 800, color: 'var(--ink-primary)', fontFamily: 'var(--font-display)' }}>{authorityPercentage}%</span>
                    <span style={{ fontSize: '10px', color: 'var(--ink-tertiary)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.02em' }}>{totalCount}/{totalSpokes} Guides</span>
                  </div>
                </div>

                <h3 style={{ fontSize: '16px', fontWeight: 700, color: 'var(--ink-primary)', margin: '0 0 6px' }}>{authorityLevel}</h3>
                <p style={{ fontSize: '12px', color: 'var(--ink-secondary)', lineHeight: 1.4, margin: 0, maxWidth: '200px' }}>
                  {authorityDesc}
                </p>
                <div style={{ marginTop: '16px', fontSize: '10px', background: 'rgba(232,87,14,0.06)', color: 'var(--accent-orange)', padding: '4px 10px', borderRadius: 'var(--radius-full)', fontWeight: 700 }}>
                  Focus: Systems Integration
                </div>
              </div>

              {/* Right Column - Spoke checklists */}
              <div className="lg:col-span-8 flex flex-col gap-6">
                <div>
                  <h3 style={{ fontSize: '13px', fontWeight: 700, color: 'var(--ink-secondary)', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                    ✓ Completed Core Guides
                  </h3>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '8px' }}>
                    {[
                      { title: 'ChatGPT vs Claude: 2026 Chatbot Battle', href: '/blog/best-ai-chatbots' },
                      { title: 'How to Use Claude AI: Technical Guide', href: '/blog/how-to-use-claude-ai' },
                      { title: 'How to Use ChatGPT Effectively: Tips', href: '/blog/how-to-use-chatgpt-effectively' },
                      { title: 'Fixing DeepSeek Janitor AI Setup', href: '/blog/deepseek-janitor-ai' }
                    ].map((spoke, idx) => (
                      <Link
                        key={idx}
                        href={spoke.href}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '10px',
                          padding: '10px 14px',
                          background: 'var(--bg-warm-gray)',
                          border: '1px solid var(--border-light)',
                          borderRadius: 'var(--radius-sm)',
                          fontSize: '12px',
                          color: 'var(--ink-primary)',
                          fontWeight: 600,
                          textDecoration: 'none',
                          transition: 'all 0.2s'
                        }}
                        className="hover:border-[var(--accent-orange)]"
                      >
                        <span style={{ color: '#22c55e', fontSize: '14px', fontWeight: 'bold' }}>✓</span>
                        <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{spoke.title}</span>
                      </Link>
                    ))}
                  </div>
                </div>

                <div style={{ borderTop: '1px dashed var(--border-light)', paddingTop: '20px' }}>
                  <h3 style={{ fontSize: '13px', fontWeight: 700, color: 'var(--ink-secondary)', marginBottom: '4px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                    ⚡ Advanced Guides Explorer (Select guides to view blueprints)
                  </h3>
                  <p style={{ fontSize: '11px', color: 'var(--ink-tertiary)', marginBottom: '12px' }}>
                    Select planned topics below to explore our detailed architectural blueprints, core keywords, and system prompts.
                  </p>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    {WEEK2_SPOKES.map((spoke) => {
                      const isSelected = selectedWeek2Slugs.includes(spoke.slug);
                      return (
                        <div
                          key={spoke.slug}
                          style={{
                            background: isSelected ? 'rgba(232,87,14,0.02)' : 'var(--bg-white)',
                            border: isSelected ? '1.5px solid var(--accent-orange)' : '1px solid var(--border-light)',
                            borderRadius: 'var(--radius-sm)',
                            padding: '16px',
                            cursor: 'pointer',
                            transition: 'all 0.3s ease'
                          }}
                          onClick={() => toggleWeek2Slug(spoke.slug)}
                        >
                          <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '12px' }}>
                            <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                              <div
                                style={{
                                  width: '18px',
                                  height: '18px',
                                  borderRadius: 'var(--radius-sm)',
                                  border: isSelected ? '2px solid var(--accent-orange)' : '2px solid var(--border-light)',
                                  background: isSelected ? 'var(--accent-orange)' : 'transparent',
                                  display: 'flex',
                                  alignItems: 'center',
                                  justifyContent: 'center',
                                  color: '#fff',
                                  fontSize: '11px',
                                  fontWeight: 'bold',
                                  marginTop: '2px',
                                  flexShrink: 0
                                }}
                              >
                                {isSelected && '✓'}
                              </div>
                              <div>
                                <h4 style={{ fontSize: '14px', fontWeight: 700, color: 'var(--ink-primary)', margin: '0 0 4px', lineHeight: 1.3 }}>
                                  {spoke.title}
                                </h4>
                                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                                  <span style={{ fontSize: '10px', color: 'var(--ink-tertiary)' }}>Keyword: <strong>{spoke.keyword}</strong></span>
                                  <span style={{ fontSize: '10px', color: 'var(--ink-tertiary)' }}>·</span>
                                  <span style={{ fontSize: '10px', color: 'var(--ink-tertiary)' }}>Vol: <strong>{spoke.volume}</strong></span>
                                </div>
                              </div>
                            </div>
                            <span
                              style={{
                                fontSize: '10px',
                                background: isSelected ? 'var(--accent-orange)' : 'var(--bg-warm-gray)',
                                color: isSelected ? '#fff' : 'var(--ink-secondary)',
                                padding: '3px 8px',
                                borderRadius: 'var(--radius-sm)',
                                fontWeight: 700,
                                textTransform: 'uppercase',
                                letterSpacing: '0.04em',
                                flexShrink: 0
                              }}
                            >
                              {isSelected ? 'Selected' : 'Staged'}
                            </span>
                          </div>

                          {/* Expanded content blueprint inside checked cards */}
                          <div
                            style={{
                              maxHeight: isSelected ? '500px' : '0px',
                              overflow: 'hidden',
                              opacity: isSelected ? 1 : 0,
                              transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                              marginTop: isSelected ? '14px' : '0px',
                              paddingTop: isSelected ? '14px' : '0px',
                              borderTop: isSelected ? '1px dashed var(--border-light)' : 'none'
                            }}
                            onClick={(e) => e.stopPropagation()} // Prevent collapse when clicking details
                          >
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '12px', background: 'var(--bg-cream)', padding: '10px', borderRadius: 'var(--radius-sm)', marginBottom: '14px', fontSize: '11px' }}>
                              <div>
                                <span style={{ display: 'block', color: 'var(--ink-tertiary)' }}>Difficulty</span>
                                <span style={{ fontWeight: 700, color: 'var(--ink-primary)' }}>{spoke.difficulty}</span>
                              </div>
                              <div>
                                <span style={{ display: 'block', color: 'var(--ink-tertiary)' }}>User Intent</span>
                                <span style={{ fontWeight: 700, color: 'var(--ink-primary)' }}>{spoke.intent}</span>
                              </div>
                              <div>
                                <span style={{ display: 'block', color: 'var(--ink-tertiary)' }}>Target Words</span>
                                <span style={{ fontWeight: 700, color: 'var(--ink-primary)' }}>{spoke.wordCount}</span>
                              </div>
                              <div>
                                <span style={{ display: 'block', color: 'var(--ink-tertiary)' }}>Slop Limit</span>
                                <span style={{ fontWeight: 700, color: '#e11d48' }}>0% Slop</span>
                              </div>
                            </div>

                            <div style={{ marginBottom: '12px' }}>
                              <h5 style={{ fontSize: '11px', fontWeight: 800, textTransform: 'uppercase', color: 'var(--ink-secondary)', margin: '0 0 6px' }}>
                                📑 Editorial Outline Blueprint
                              </h5>
                              <ul style={{ margin: 0, paddingLeft: '16px', fontSize: '12px', color: 'var(--ink-secondary)', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                                {spoke.outline.map((o, idx) => (
                                  <li key={idx} style={{ lineHeight: 1.4 }}>{o}</li>
                                ))}
                              </ul>
                            </div>

                            <div>
                              <h5 style={{ fontSize: '11px', fontWeight: 800, textTransform: 'uppercase', color: 'var(--accent-orange)', margin: '0 0 4px' }}>
                                💡 E-E-A-T Developer Anecdote
                              </h5>
                              <p style={{ fontSize: '12px', lineHeight: 1.4, color: 'var(--ink-secondary)', fontStyle: 'italic', margin: 0 }}>
                                &ldquo;{spoke.anecdote}&rdquo;
                              </p>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>

            {/* Dynamic Content compiler console */}
            <div
              style={{
                maxHeight: selectedWeek2Slugs.length > 0 ? '500px' : '0px',
                overflow: 'hidden',
                opacity: selectedWeek2Slugs.length > 0 ? 1 : 0,
                transition: 'all 0.5s ease',
                marginTop: selectedWeek2Slugs.length > 0 ? '24px' : '0px',
                paddingTop: selectedWeek2Slugs.length > 0 ? '24px' : '0px',
                borderTop: '1px solid var(--border-light)'
              }}
            >
              <div style={{ background: '#1A1A1A', borderRadius: 'var(--radius-sm)', padding: '20px 24px', color: '#fff' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px', flexWrap: 'wrap', gap: '10px' }}>
                  <div>
                    <h4 style={{ fontSize: '13px', fontWeight: 700, margin: '0 0 2px', color: 'var(--accent-orange)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                      Active Content Rollout Prompt Compiler
                    </h4>
                    <p style={{ fontSize: '11px', color: '#a3a3a3', margin: 0 }}>
                      Copy this systems-grade context envelope to generate draft spokes matching our strict SEO guidelines.
                    </p>
                  </div>
                  <button
                    onClick={handleCopyPrompt}
                    style={{
                      background: 'var(--accent-orange)',
                      border: 'none',
                      color: '#fff',
                      padding: '8px 16px',
                      borderRadius: 'var(--radius-full)',
                      fontSize: '12px',
                      fontWeight: 700,
                      cursor: 'pointer',
                      transition: 'all 0.2s'
                    }}
                    className="hover:scale-105"
                  >
                    {copyStatus}
                  </button>
                </div>
                <pre
                  style={{
                    background: '#121212',
                    padding: '14px',
                    borderRadius: 'var(--radius-xs)',
                    fontSize: '11px',
                    color: '#e5e5e5',
                    overflowX: 'auto',
                    border: '1px solid #2d2d2d',
                    maxHeight: '160px',
                    overflowY: 'auto',
                    fontFamily: 'monospace',
                    lineHeight: 1.4,
                    margin: 0
                  }}
                >
                  {`Act as Ashique Hussain, the "Technical Architect" content engineer. Write a highly technical, opinionated, 100% slop-free article in MDX format matching these blueprints:

` + WEEK2_SPOKES.filter(s => selectedWeek2Slugs.includes(s.slug)).map((s, idx) => `${idx + 1}. TITLE: "${s.title}"
   - PRIMARY KEYWORD: "${s.keyword}" (Search Vol: ${s.volume}, KD: ${s.difficulty})
   - TARGET WORD COUNT: ${s.wordCount}
   - OUTLINE:
${s.outline.map(line => `     * ${line}`).join('\n')}
   - INCORPORATE THIS PERSONAL ANECDOTE: "${s.anecdote}"`).join('\n\n') + `

CRITICAL STANDARDS:
- Direct answer in first two paragraphs.
- Place a 3-5 bullet point "Key Takeaways" box right after intro hook.
- Strictly nested H2/H3 architecture (no raw H1s in body, no skipping levels).
- Insert code blocks, tables, or ASCII architecture mappings every 800 words.
- Maintain professional, developer-grade jargon. Avoid corporate marketing slop ("transformative", "seamless", "harnessing").`}
                </pre>
              </div>
            </div>
          </div>
        </div>
      </section>

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
              fontSize: 'clamp(1.375rem, 3.5vw, 2.25rem)',
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
