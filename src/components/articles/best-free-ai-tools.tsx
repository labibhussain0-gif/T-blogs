'use client';

import React, { useState } from 'react';
import Link from 'next/link';

interface FreeTool {
  name: string;
  type: 'text' | 'code' | 'local' | 'image';
  limit: string;
  catch: string;
  details: string;
}

const FREE_TOOLS_LIST: FreeTool[] = [
  {
    name: 'Ollama / Local Runners',
    type: 'local',
    limit: '100% Free and Private',
    catch: 'Requires 8GB+ VRAM hardware to run 8B models smoothly.',
    details: 'Runs weights entirely offline. Zero network lag, zero data harvesting, and complete model sovereignty.'
  },
  {
    name: 'DeepSeek Web Console',
    type: 'text',
    limit: 'Free web queries',
    catch: 'Frequent capacity outages and timeouts during peak US hours.',
    details: 'Accesses full DeepSeek V3 or R1 models. The best free reasoning output available on the web today.'
  },
  {
    name: 'Google AI Studio (Gemini)',
    type: 'text',
    limit: '15 RPM free tier',
    catch: 'Google logs and human-reviews all prompt histories for training.',
    details: 'Generates API keys with massive 1M+ token context windows. Perfect for parsing massive log dumps.'
  },
  {
    name: 'Groq Cloud API',
    type: 'code',
    limit: '14,400 requests/day',
    catch: 'Extremely strict token-per-minute rate limits for free keys.',
    details: 'Incredible speed (500+ tokens/sec) using LPU hardware. Connects beautifully to local editor extensions.'
  },
  {
    name: 'Hugging Face Spaces',
    type: 'image',
    limit: 'Free community GPUs',
    catch: 'Long rendering queues of up to 5 minutes for high-demand models.',
    details: 'Host and run open-source web apps. Great for testing specialized text-to-image models like Flux.'
  },
  {
    name: 'LM Studio UI',
    type: 'local',
    limit: '100% Free UI Runner',
    catch: 'Closed-source Electron wrapper with higher idle RAM consumption.',
    details: 'Beautiful visual dashboard to download, load, and test GGUF models with visual chat history and parameters.'
  }
];

export default function BestFreeAIToolsBody() {
  const [selectedType, setSelectedType] = useState<string>('all');
  const [hoveredTool, setHoveredTool] = useState<string | null>(null);

  const filteredTools = FREE_TOOLS_LIST.filter(
    (t) => selectedType === 'all' || t.type === selectedType
  );

  return (
    <>
      <p style={{ fontSize: '19px', lineHeight: 1.7, marginBottom: '32px', color: 'var(--ink-primary)', fontWeight: 400 }}>
        Let us cut through the marketing noise: you do not need another $20/month SaaS charge bloating your credit card statements. While tech giants spend billions convincing you that paid subscriptions are the only gateway to high-tier reasoning, a pragmatic developer can build a complete, production-grade AI stack for exactly zero dollars. In this guide, we evaluate the leading artificial intelligence platforms offering genuine free tiers, local offline hosting parameters, and open developer access.
      </p>

      {/* Key Takeaways Box */}
      <div
        style={{
          background: 'var(--bg-white)',
          border: '1px solid var(--border-warm)',
          borderLeft: '4px solid var(--accent-orange)',
          borderRadius: 'var(--radius-md)',
          padding: '24px',
          marginBottom: '40px',
          boxShadow: '0 4px 12px var(--shadow-warm)'
        }}
      >
        <h4 style={{
          fontFamily: 'var(--font-display)',
          fontSize: '1.25rem',
          fontWeight: 700,
          color: 'var(--ink-primary)',
          marginTop: 0,
          marginBottom: '16px'
        }}>
          Key Takeaways: Navigating the Free Frontier
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
            <strong style={{ color: 'var(--ink-primary)' }}>Local Sovereignty:</strong> Offline model runners like Ollama offer 100% private, unlimited inference with zero network requirements.
          </li>
          <li>
            <strong style={{ color: 'var(--ink-primary)' }}>The Privacy Tax:</strong> Cloud-hosted free tiers (such as Google AI Studio or free ChatGPT) routinely harvest and human-review prompt logs unless explicitly opted out.
          </li>
          <li>
            <strong style={{ color: 'var(--ink-primary)' }}>Hardware Requirements:</strong> Running decent 8B reasoning models locally requires at least 8GB of dedicated VRAM or Apple Silicon unified memory.
          </li>
          <li>
            <strong style={{ color: 'var(--ink-primary)' }}>Developer Backdoors:</strong> Generous free API tiers from Groq and Google can be wired directly into open-source editor extensions to replace paid assistant tools.
          </li>
        </ul>
      </div>

      <p style={{ fontFamily: 'var(--font-body)', color: 'var(--ink-secondary)', lineHeight: 1.7 }}>
        I saved a client over $1,200 annually by migrating a series of automated translation and schema validation cron jobs from commercial GPT-4o keys to local Ollama nodes running on a decommissioned Mac Mini. Many engineering teams default to paid subscriptions because they conflate cost with competence. This is a massive mistake. By isolating your execution variables and selecting targeted open weights models, you reclaim financial and structural sovereignty over your systems.
      </p>

      {/* ⚡ Interactive Grid Filtering Widget */}
      <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.5rem', color: 'var(--ink-primary)', marginTop: '40px', marginBottom: '16px' }}>
        ⚡ Interactive Free Tool Explorer
      </h3>
      <p style={{ fontFamily: 'var(--font-body)', color: 'var(--ink-secondary)', fontSize: '14px', marginBottom: '20px', lineHeight: 1.6 }}>
        Filter and inspect hand-tested platforms to identify exact hardware dependencies, token limits, and hidden data privacy trade-offs before deploying them into your workflow.
      </p>

      <div style={{
        background: 'var(--bg-warm-gray)',
        border: '1px solid var(--border-light)',
        padding: '24px',
        borderRadius: 'var(--radius-md)',
        marginBottom: '40px'
      }}>
        {/* Filter Buttons */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '8px',
          marginBottom: '24px'
        }}>
          {['all', 'text', 'code', 'local', 'image'].map((type) => (
            <button
              key={type}
              onClick={() => setSelectedType(type)}
              style={{
                background: selectedType === type ? 'var(--accent-orange)' : 'var(--bg-white)',
                color: selectedType === type ? '#FFFFFF' : 'var(--ink-primary)',
                border: '1px solid var(--border-light)',
                padding: '6px 14px',
                borderRadius: 'var(--radius-full)',
                fontSize: '13px',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all var(--duration-fast) var(--ease-out)',
                boxShadow: selectedType === type ? '0 2px 4px rgba(232, 87, 14, 0.2)' : 'none'
              }}
            >
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </button>
          ))}
        </div>

        {/* Dynamic Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: '16px'
        }}>
          {filteredTools.map((tool) => (
            <div
              key={tool.name}
              onMouseEnter={() => setHoveredTool(tool.name)}
              onMouseLeave={() => setHoveredTool(null)}
              style={{
                background: 'var(--bg-white)',
                padding: '20px',
                borderRadius: 'var(--radius-sm)',
                border: hoveredTool === tool.name ? '1px solid var(--accent-orange)' : '1px solid var(--border-light)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'all var(--duration-fast) var(--ease-out)',
                boxShadow: hoveredTool === tool.name ? '0 4px 12px var(--shadow-warm-md)' : '0 2px 8px var(--shadow-warm)',
                transform: hoveredTool === tool.name ? 'translateY(-2px)' : 'none'
              }}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
                  <h4 style={{ margin: 0, fontSize: '15px', fontWeight: 700, color: 'var(--ink-primary)' }}>{tool.name}</h4>
                  <span style={{
                    fontSize: '10px',
                    background: 'var(--accent-orange-light)',
                    color: 'var(--accent-orange)',
                    padding: '2px 8px',
                    borderRadius: 'var(--radius-full)',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em'
                  }}>{tool.type}</span>
                </div>
                <p style={{ fontSize: '12px', color: 'var(--ink-secondary)', margin: '6px 0 12px 0', lineHeight: 1.5 }}>
                  {tool.details}
                </p>
                <div style={{
                  fontSize: '11px',
                  color: '#DC2626',
                  background: 'rgba(220, 38, 38, 0.05)',
                  padding: '8px 12px',
                  borderRadius: 'var(--radius-sm)',
                  marginBottom: '16px',
                  lineHeight: 1.4
                }}>
                  <strong style={{ display: 'block', fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '2px' }}>⚠️ Catch:</strong>
                  {tool.catch}
                </div>
              </div>
              <div style={{
                borderTop: '1px solid var(--border-light)',
                paddingTop: '12px',
                fontSize: '12px',
                fontWeight: 600,
                color: 'var(--ink-primary)',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}>
                <span style={{ color: 'var(--ink-secondary)' }}>Free Limit:</span>
                <span style={{ color: 'var(--accent-orange)' }}>{tool.limit}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <p style={{ fontFamily: 'var(--font-body)', color: 'var(--ink-secondary)', lineHeight: 1.7 }}>
        Choosing the right system requires identifying your performance bounds, privacy sensitivities, and compute budget. If you are exploring the overall layout of modern chatbots, read our structural analysis on the <Link href="/blog/best-ai-chatbots" style={{ color: 'var(--accent-orange)', textDecoration: 'underline' }}>Best AI Chatbots in 2026</Link>.
      </p>

      <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.75rem', color: 'var(--ink-primary)', marginTop: '48px', marginBottom: '20px', paddingBottom: '12px', borderBottom: '1px solid var(--border-light)' }}>
        The Financial Autopsy of Subscription Creep
      </h2>
      <p style={{ fontFamily: 'var(--font-body)', color: 'var(--ink-secondary)', lineHeight: 1.7 }}>
        The SaaS industry loves predictable recurring revenue. If you look closely at your corporate or personal billing cycles, you will likely find a quiet, creeping expense: $20/month for a text generator, $20/month for a co-pilot plugin, $24/month for an image generator, and another $15/month for a summarizer. Within a year, a single engineer can easily spend over $900 on separate, sandboxed model boundaries.
      </p>
      <p style={{ fontFamily: 'var(--font-body)', color: 'var(--ink-secondary)', lineHeight: 1.7 }}>
        What they do not want you to realize is that most of these wrapper applications are simply rent-seeking on public APIs and open weights models. When you query a paid assistant to generate standard boilerplate scripts, you are paying a massive premium for simple arithmetic. As a system architect, your task is to isolate your exact execution parameters. If your task only requires structural text parsing or simple script generation, a localized 8B parameter model is more than sufficient.
      </p>
      <p style={{ fontFamily: 'var(--font-body)', color: 'var(--ink-secondary)', lineHeight: 1.7 }}>
        This dynamic is particularly true for teams adopting specialized frameworks. For example, instead of subscribing to multiple paid generalist bots to handle custom roleplay scenarios, developers are configuring their own pipelines. You can see how this works in our comprehensive guide detailing <Link href="/blog/deepseek-janitor-ai" style={{ color: 'var(--accent-orange)', textDecoration: 'underline' }}>how to set up DeepSeek on Janitor AI</Link> without recurring platform subscriptions.
      </p>

      <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.75rem', color: 'var(--ink-primary)', marginTop: '48px', marginBottom: '20px', paddingBottom: '12px', borderBottom: '1px solid var(--border-light)' }}>
        Local Sovereignty: Setting Up Ollama and LM Studio
      </h2>
      <p style={{ fontFamily: 'var(--font-body)', color: 'var(--ink-secondary)', lineHeight: 1.7 }}>
        If you want absolute privacy, zero network latency, and complete freedom from commercial rate limits, local offline inference is the only logical path. The open weights ecosystem has advanced to a point where optimized models can run directly on consumer laptops.
      </p>
      <p style={{ fontFamily: 'var(--font-body)', color: 'var(--ink-secondary)', lineHeight: 1.7 }}>
        The leading orchestrator for local deployment is Ollama, a lightweight Go daemon that manages model downloads and runs a local server endpoint. Installing it is trivial. On macOS or Linux, a single terminal call gets you a functional reasoning runner:
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
          <code>{`# Spin up DeepSeek-R1 8B offline reasoning model
ollama run deepseek-r1:8b

# Or run Meta's highly optimized developer model
ollama run llama3.1:8b`}</code>
        </pre>
      </div>

      <p style={{ fontFamily: 'var(--font-body)', color: 'var(--ink-secondary)', lineHeight: 1.7 }}>
        However, you must respect the physical constraints of your hardware. Running deep neural networks locally requires serious memory bandwidth. To run an 8B model with acceptable tokens per second, your device needs at least 8GB of dedicated VRAM or unified memory. If you try to run an 8B GGUF model on a machine with a standard 8GB of system RAM shared with a heavy browser, the OS will page memory to the disk, reducing inference to a painful crawl.
      </p>
      <p style={{ fontFamily: 'var(--font-body)', color: 'var(--ink-secondary)', lineHeight: 1.7 }}>
        For users who prefer visual control over their models, LM Studio provides a complete visual dashboard. It lets you inspect active GPU offloading parameters, adjust temperature configurations, and manage your local GGUF model store with visual click paths. It is highly convenient, but carries a slightly heavier idle RAM footprint than Ollama background CLI daemon.
      </p>

      <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.75rem', color: 'var(--ink-primary)', marginTop: '48px', marginBottom: '20px', paddingBottom: '12px', borderBottom: '1px solid var(--border-light)' }}>
        The Hidden Privacy Tax of Cloud Free Tiers
      </h2>
      <p style={{ fontFamily: 'var(--font-body)', color: 'var(--ink-secondary)', lineHeight: 1.7 }}>
        If a product is free, you are the product. In the AI ecosystem, this adage manifests as the Privacy Tax. When you query the web consoles of free tiers like standard ChatGPT or Google conversational windows, you are signing a silent data sharing agreement.
      </p>
      <p style={{ fontFamily: 'var(--font-body)', color: 'var(--ink-secondary)', lineHeight: 1.7 }}>
        To train larger, more capable foundation weights, providers need diverse conversational data. Google free AI Studio terms explicitly state that your prompt logs, input files, and output evaluations are stored, parsed, and reviewed by human annotators. If you are copy-pasting proprietary database schemas, private client records, or corporate source code into these free web prompts, you are actively leaking intellectual property.
      </p>
      <p style={{ fontFamily: 'var(--font-body)', color: 'var(--ink-secondary)', lineHeight: 1.7 }}>
        To bypass this exposure, you have two options: toggle the data-collection options deep inside the account profiles, or migrate to local model sovereignty. For massive technical projects, understanding the nuances of how these models ingest and utilize custom context is key to writing safe code. You can learn more about Anthropic distinct structure in our <Link href="/blog/how-to-use-claude-ai" style={{ color: 'var(--accent-orange)', textDecoration: 'underline' }}>How to Use Claude AI guide</Link>.
      </p>

      <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.75rem', color: 'var(--ink-primary)', marginTop: '48px', marginBottom: '20px', paddingBottom: '12px', borderBottom: '1px solid var(--border-light)' }}>
        The Developer's Backdoor: Free API Keys
      </h2>
      <p style={{ fontFamily: 'var(--font-body)', color: 'var(--ink-secondary)', lineHeight: 1.7 }}>
        If your laptop lacks the VRAM needed to execute local models, but you refuse to pay $20/month, the ultimate developer workaround is targeting high-performance free API tiers.
      </p>
      <p style={{ fontFamily: 'var(--font-body)', color: 'var(--ink-secondary)', lineHeight: 1.7 }}>
        Both Google AI Studio and Groq Cloud offer incredibly generous, completely free API keys designed to invite developer adoption. Google Gemini free tier allows up to 15 Requests Per Minute (RPM) with a massive 1-million token context window. This is perfect for parsing long document strings or log directories. Groq Cloud, utilizing their proprietary LPU (Language Processing Unit) hardware, serves open weights like Llama and Mixtral at speeds exceeding 500 tokens per second.
      </p>
      <p style={{ fontFamily: 'var(--font-body)', color: 'var(--ink-secondary)', lineHeight: 1.7 }}>
        To turn these free keys into a unified co-pilot alternative inside your IDE, follow this pattern:
      </p>

      <ul style={{ margin: '24px 0', paddingLeft: '24px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <li>
          <strong style={{ color: 'var(--ink-primary)' }}>1. Generate Free Keys:</strong> Go to the Google AI Studio or Groq Console, register your developer profile, and generate a secure API key.
        </li>
        <li>
          <strong style={{ color: 'var(--ink-primary)' }}>2. Install a Client Wrapper:</strong> Install an open-source IDE extension like Continue.dev or deploy a self-hosted web interface like LibreChat.
        </li>
        <li>
          <strong style={{ color: 'var(--ink-primary)' }}>3. Map your Endpoints:</strong> Configure your client to point to the respective API endpoints, pasting your free developer keys.
        </li>
      </ul>

      <p style={{ fontFamily: 'var(--font-body)', color: 'var(--ink-secondary)', lineHeight: 1.7 }}>
        By separating the model execution from the user interface, you completely bypass the monthly subscription fee. You gain direct API-level speed and programmatic flexibility with zero recurring credit card bills.
      </p>
      <p style={{ fontFamily: 'var(--font-body)', color: 'var(--ink-secondary)', lineHeight: 1.7 }}>
        To ensure your prompts yield clean outputs when communicating through these raw API developer backdoors, you must master the fundamental rules of context structure. We recommend consulting our detailed <Link href="/blog/how-to-use-chatgpt-effectively" style={{ color: 'var(--accent-orange)', textDecoration: 'underline' }}>How to Use ChatGPT Effectively guide</Link> for professional-grade context templates.
      </p>

      <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.75rem', color: 'var(--ink-primary)', marginTop: '48px', marginBottom: '20px', paddingBottom: '12px', borderBottom: '1px solid var(--border-light)' }}>
        Pragmatic Verdict: Reclaiming Tooling Sovereignty
      </h2>
      <p style={{ fontFamily: 'var(--font-body)', color: 'var(--ink-secondary)', lineHeight: 1.7 }}>
        Reclaiming financial sovereignty over your developer toolkit is not about making technical compromises; it is about building smart, decoupled pipelines. A hybrid engineering setup represents the most sensible approach. Run a fast, private Ollama background runner locally on your laptop to handle sensitive coding tasks, parse data streams offline, and draft configuration files.
      </p>
      <p style={{ fontFamily: 'var(--font-body)', color: 'var(--ink-secondary)', lineHeight: 1.7 }}>
        When you need long-context document analysis or quick web-grounded research, routing those requests to free developer API keys on Google AI Studio or Groq Cloud keeps your latency low and your costs at exactly zero. Ditch the monthly subscription creep, configure your localized pipelines, and invest your hard-earned money back into physical hardware.
      </p>
    </>
  );
}
