'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function ClaudeCodeMemoryBody() {
  // Budget slider states: codebase size in thousands of tokens (e.g., 20k to 500k)
  const [codebaseTokens, setCodebaseTokens] = useState<number>(100); // default 100k tokens
  const [sessionTurns, setSessionTurns] = useState<number>(20); // default 20 turns per session

  // Math models:
  // Claude 4.6 Sonnet: $3.00 / Million input tokens
  // Claude 4.7 Opus: $10.00 / Million input tokens
  const sonnetRate = 3.00;
  const opusRate = 10.00;

  // Naive cost calculations (sending full codebase context every turn)
  const naiveSonnetCost = (codebaseTokens * 1000 * sessionTurns * sonnetRate) / 1000000;
  const naiveOpusCost = (codebaseTokens * 1000 * sessionTurns * opusRate) / 1000000;

  // LLM Wiki progressive retrieval cost (constant small context read of index.md + log.md + active wiki page = average 6,000 tokens per turn)
  const wikiTokensPerTurn = 6000;
  const wikiSonnetCost = (wikiTokensPerTurn * sessionTurns * sonnetRate) / 1000000;
  const wikiOpusCost = (wikiTokensPerTurn * sessionTurns * opusRate) / 1000000;

  const sonnetSavings = naiveSonnetCost - wikiSonnetCost;
  const savingsPercent = ((naiveSonnetCost - wikiSonnetCost) / naiveSonnetCost) * 100;

  return (
    <>
      <p style={{ fontSize: '19px', lineHeight: 1.7, marginBottom: '32px', color: 'var(--ink-primary)', fontWeight: 400 }}>
        Terminal coding agents like Anthropic&apos;s Claude Code and Aider are reshaping software engineering, but they suffer from a glaring workflow bottleneck: <strong>complete amnesia between sessions</strong>. Every time you open a new shell session or run a new agent command, you are starting from absolute zero. You find yourself manually explaining your codebase architecture, summarizing recent commits, pasting error files, and running recursive folder scans. This cold-start ritual doesn&apos;t just waste your cognitive energy—it bleeds millions of redundant tokens into the context window, causing your Anthropic API bill to skyrocket.
      </p>

      {/* Key Takeaways Box */}
      <div
        style={{
          background: 'var(--bg-warm-gray)',
          borderLeft: '4px solid var(--accent-orange)',
          padding: '24px',
          borderRadius: 'var(--radius-md)',
          margin: '40px 0',
        }}
      >
        <h4 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.2rem', color: 'var(--ink-primary)', marginTop: 0, marginBottom: '12px' }}>
          Key Takeaways: Resolving Agent Amnesia
        </h4>
        <ul style={{ paddingLeft: '20px', margin: 0, display: 'flex', flexDirection: 'column', gap: '10px', color: 'var(--ink-secondary)', fontSize: '15px', lineHeight: 1.6 }}>
          <li>
            <strong style={{ color: 'var(--ink-primary)' }}>The Cold-Start Problem:</strong> Coding agents operating in stateless environments lack project memory, wasting up to 20,000 tokens per session just to reconstruct project context.
          </li>
          <li>
            <strong style={{ color: 'var(--ink-primary)' }}>The LLM Wiki Pattern:</strong> Originally proposed by Andrej Karpathy, this model compiles raw documentation into a clean, interlinked Markdown directory (`wiki/`) managed entirely by the agent.
          </li>
          <li>
            <strong style={{ color: 'var(--ink-primary)' }}>Progressive Disclosure:</strong> Instead of reading your entire codebase, the agent reads a small `index.md` and `log.md` tail on boot-up, then follows specific wiki links to pull only what is needed.
          </li>
          <li>
            <strong style={{ color: 'var(--ink-primary)' }}>95% Token Savings:</strong> Compressing active context retrieval down to a steady 6,000-token footprint slashes input token bills by two orders of magnitude.
          </li>
        </ul>
      </div>

      <p>
        In my day-to-day work maintaining enterprise architecture, I routinely co-pilot with terminal CLI agents. However, in any large codebase, keeping active context inside the agent&apos;s working memory is a fast path to a financial and logical bottleneck. The solution is to implement a permanent, Git-backed memory. Let&apos;s look at the raw mathematical proof of the token bleed, how to scaffold the directory structure, and the exact prompts to automate this memory system.
      </p>

      {/* Interactive Widget - LLM Wiki Memory Savings Calculator */}
      <div
        style={{
          background: 'var(--bg-white)',
          border: '1.5px solid var(--border-light)',
          borderRadius: 'var(--radius-md)',
          padding: '32px',
          margin: '40px 0',
          boxShadow: '0 8px 30px rgba(0,0,0,0.02)',
        }}
        className="transition-all duration-300 hover:shadow-md"
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
          <span style={{ display: 'inline-block', width: '8px', height: '8px', borderRadius: '50%', background: 'var(--accent-orange)' }} />
          <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '15px', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--ink-primary)', margin: 0 }}>
            ⚡ Agent Token Savings Calculator
          </h3>
        </div>

        <p style={{ fontSize: '13px', color: 'var(--ink-secondary)', marginBottom: '24px', lineHeight: 1.6 }}>
          Adjust the sliders to simulate your codebase size and average debugging turns to see how much prompt tokens—and API dollars—you save by shifting from naive codebase reading to a progressive LLM Wiki.
        </p>

        {/* Sliders Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '20px', marginBottom: '28px' }}>
          {/* Slider 1 */}
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
              <span style={{ fontSize: '13px', fontWeight: 600, color: 'var(--ink-primary)' }}>Codebase / Context Size:</span>
              <span style={{ fontSize: '14px', fontWeight: 800, color: 'var(--accent-orange)' }}>
                {codebaseTokens}k Tokens (~{Math.round(codebaseTokens * 4).toLocaleString()} lines)
              </span>
            </div>
            <input
              type="range"
              min="20"
              max="500"
              step="10"
              value={codebaseTokens}
              onChange={(e) => setCodebaseTokens(Number(e.target.value))}
              style={{ width: '100%', height: '6px', cursor: 'pointer' }}
              className="w-full h-1.5 bg-zinc-200 rounded-lg appearance-none cursor-pointer accent-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          {/* Slider 2 */}
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
              <span style={{ fontSize: '13px', fontWeight: 600, color: 'var(--ink-primary)' }}>Session Conversation Length:</span>
              <span style={{ fontSize: '14px', fontWeight: 800, color: 'var(--accent-orange)' }}>
                {sessionTurns} Agent Turns
              </span>
            </div>
            <input
              type="range"
              min="5"
              max="50"
              step="1"
              value={sessionTurns}
              onChange={(e) => setSessionTurns(Number(e.target.value))}
              style={{ width: '100%', height: '6px', cursor: 'pointer' }}
              className="w-full h-1.5 bg-zinc-200 rounded-lg appearance-none cursor-pointer accent-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>
        </div>

        {/* Cost Comparison Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr md:grid-cols-2', gap: '20px', marginBottom: '24px' }}>
          {/* Naive RAG Box */}
          <div style={{ background: 'var(--bg-cream)', padding: '20px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-light)' }}>
            <span style={{ display: 'block', fontSize: '11px', fontWeight: 700, color: 'var(--ink-tertiary)', textTransform: 'uppercase', marginBottom: '10px' }}>
              🔴 Naive RAG / Codebase Stuffer
            </span>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px' }}>
                <span style={{ color: 'var(--ink-secondary)' }}>Claude 4.6 Sonnet:</span>
                <strong style={{ color: 'var(--ink-primary)', fontFamily: 'var(--font-mono)' }}>${naiveSonnetCost.toFixed(2)}</strong>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px' }}>
                <span style={{ color: 'var(--ink-secondary)' }}>Claude 4.7 Opus:</span>
                <strong style={{ color: 'var(--ink-primary)', fontFamily: 'var(--font-mono)' }}>${naiveOpusCost.toFixed(2)}</strong>
              </div>
              <span style={{ display: 'block', fontSize: '10px', color: 'var(--ink-tertiary)', borderTop: '1px dashed var(--border-light)', paddingTop: '6px', marginTop: '4px' }}>
                Total tokens: {((codebaseTokens * 1000 * sessionTurns) / 1000000).toFixed(2)}M input tokens sent.
              </span>
            </div>
          </div>

          {/* LLM Wiki Box */}
          <div style={{ background: 'rgba(232, 87, 14, 0.03)', padding: '20px', borderRadius: 'var(--radius-sm)', border: '1px solid rgba(232, 87, 14, 0.15)' }}>
            <span style={{ display: 'block', fontSize: '11px', fontWeight: 700, color: 'var(--accent-orange)', textTransform: 'uppercase', marginBottom: '10px' }}>
              🟢 Progressive LLM Wiki Memory
            </span>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px' }}>
                <span style={{ color: 'var(--ink-secondary)' }}>Claude 4.6 Sonnet:</span>
                <strong style={{ color: '#16a34a', fontFamily: 'var(--font-mono)' }}>${wikiSonnetCost.toFixed(2)}</strong>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px' }}>
                <span style={{ color: 'var(--ink-secondary)' }}>Claude 4.7 Opus:</span>
                <strong style={{ color: '#16a34a', fontFamily: 'var(--font-mono)' }}>${wikiOpusCost.toFixed(2)}</strong>
              </div>
              <span style={{ display: 'block', fontSize: '10px', color: 'var(--ink-tertiary)', borderTop: '1px dashed var(--border-light)', paddingTop: '6px', marginTop: '4px' }}>
                Total tokens: {((wikiTokensPerTurn * sessionTurns) / 1000000).toFixed(3)}M input tokens sent.
              </span>
            </div>
          </div>
        </div>

        {/* Savings Box */}
        <div
          style={{
            background: 'rgba(34, 197, 94, 0.08)',
            border: '1px solid rgba(34, 197, 94, 0.2)',
            borderRadius: 'var(--radius-sm)',
            padding: '16px',
            textAlign: 'center',
          }}
        >
          <span style={{ display: 'block', fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.04em', color: '#15803d', marginBottom: '4px' }}>
            🚀 Instant Context Savings
          </span>
          <strong style={{ fontSize: '18px', color: '#15803d', fontWeight: 800 }}>
            Saved ${sonnetSavings.toFixed(2)} per session ({savingsPercent.toFixed(1)}% cheaper!)
          </strong>
        </div>
      </div>

      <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.75rem', color: 'var(--ink-primary)', marginTop: '48px', marginBottom: '20px', paddingBottom: '12px', borderBottom: '1px solid var(--border-light)' }}>
        The Context-Rot Challenge: Why Caching Fails in Active Sprints
      </h2>
      <p>
        The most common pushback to agent context management is: <em>&quot;Doesn&apos;t prompt caching make this free anyway?&quot;</em>
      </p>
      <p>
        Anthropic&apos;s prompt caching is a highly optimized engineering system. It cuts input token pricing by 90% when context elements are fetched from warm RAM. However, caching operates under strict conditions: <strong>the cached prefix must remain completely unchanged</strong>.
      </p>
      <p>
        During active developer sprints, that condition collapses. The second you modify a codebase file, edit a database config, or run a test script that updates local variables, the cache breaks. Your agent must perform a full-cost cache write at standard rates ($3.00/M for Claude 4.6 Sonnet). 
      </p>
      <p>
        Furthermore, prompt cache keys expire after exactly <strong>5 minutes of inactivity</strong>. If you pause to read test outputs, write an inline CSS fix, or grab a coffee, the cache clears. When you resume, the next prompt sends the entire codebase raw, forcing you to pay the full price of context acquisition.
      </p>

      {/* Visual Terminal-like Folder Structure Mapping */}
      <div
        style={{
          background: '#18181b', // Deep charcoal/zinc-900 background
          borderRadius: '12px',
          border: '1px solid var(--border-light)',
          margin: '40px 0',
          overflow: 'hidden',
          boxShadow: '0 12px 40px rgba(0,0,0,0.03)',
        }}
      >
        {/* Terminal Header */}
        <div
          style={{
            background: 'var(--bg-warm-gray)',
            padding: '12px 20px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderBottom: '1px solid var(--border-light)',
          }}
        >
          <div style={{ display: 'flex', gap: '8px' }}>
            <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ef4444', display: 'inline-block' }} />
            <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#f59e0b', display: 'inline-block' }} />
            <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#10b981', display: 'inline-block' }} />
          </div>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--ink-tertiary)', fontWeight: 600 }}>
            obsidian-vault-schema ~ bash
          </span>
          <div style={{ width: '46px' }} /> {/* Spacer to center the title */}
        </div>

        {/* Terminal Content */}
        <div style={{ padding: '24px 28px', overflowX: 'auto', background: '#18181b' }}>
          <pre
            style={{
              margin: 0,
              fontFamily: 'var(--font-mono)',
              fontSize: '13.5px',
              lineHeight: '1.6',
              color: '#e4e4e7',
            }}
          >
            {`llmwiki/                          # Git-backed knowledge repository
├── raw/                          # [Read-Only] Immutable external sources
│   ├── stripe-api-docs.pdf       # Raw vendor payments documentation
│   └── architectural-spec.md     # Core system architecture specifications
├── wiki/                         # [Active Compound Memory] Managed by Agent
│   ├── concepts/                 # Reusable architectural patterns
│   │   ├── caching-strategy.md   # Redis cache-aside policies and TTL metrics
│   │   └── database-indexes.md   # Query optimization and execution plan audits
│   ├── entities/                 # System components and external providers
│   │   ├── auth-service.md       # OAuth2/OIDC flow and token lifecycle specs
│   │   └── payment-gateway.md    # Webhook signature validation guidelines
│   ├── summaries/                # Comprehensive summaries of raw sources
│   │   └── stripe-v3-migration.md# API version drift and payload diff mapping
│   ├── index.md                  # <=== Boot-up Map (Read first on session load)
│   └── log.md                    # <=== Chronological session log (Append-only)
└── AGENTS.md                     # Agent system directives and boot rules`}
          </pre>
        </div>
      </div>
      <span
        style={{
          display: 'block',
          fontSize: '13px',
          color: 'var(--ink-secondary)',
          textAlign: 'center',
          marginBottom: '40px',
          fontStyle: 'italic',
        }}
      >
        Figure 1: The dual-folder LLM Wiki architecture. By separating static raw sources from the compounding active memory vault, the agent preserves dynamic context without indexing bloat.
      </span>

      <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.75rem', color: 'var(--ink-primary)', marginTop: '48px', marginBottom: '20px', paddingBottom: '12px', borderBottom: '1px solid var(--border-light)' }}>
        The Karpathy LLM Wiki Architecture
      </h2>
      <p>
        In April 2026, AI veteran Andrej Karpathy posted a minimalist gist describing a quietly revolutionary workflow he&apos;d been running: a two-folder knowledge base called the <strong>LLM Wiki</strong>. 
      </p>
      <p>
        The pattern rejects complex Vector databases, chunking algorithms, and external embedding pipelines. Instead, it relies on a simple directory structure that sits inside your repository, mapped by standard markdown hyperlinks (`[[wikilinks]]`) and maintained entirely by the terminal agent.
      </p>
      <p>
        The architecture operates on three key layers:
      </p>
      <ul>
        <li>
          <strong>Raw Sources (`raw/`):</strong> Your immutable source files. PDF guides, meeting transcripts, long documentation pages, API specifications. The agent is permitted to read these, but never edit them.
        </li>
        <li>
          <strong>The Wiki (`wiki/`):</strong> A clean, interlinked folder containing markdown files generated entirely by the agent. These are structured by concepts, entities, and summaries. Cross-linked using Obsidian&apos;s standard wikilink syntax.
        </li>
        <li>
          <strong>The Executable Schema (`AGENTS.md` / `claude.md`):</strong> The system instruction set that configures the agent. It informs the agent how the directories operate, how to search, how to index, and when to update.
        </li>
      </ul>

      <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.75rem', color: 'var(--ink-primary)', marginTop: '48px', marginBottom: '20px', paddingBottom: '12px', borderBottom: '1px solid var(--border-light)' }}>
        Implementing the Automated Memory Protocol
      </h2>
      <p>
        To enable this system, you don&apos;t need to write code. You only need to copy your system rules into the agent&apos;s root configuration file—such as `AGENTS.md` (for custom wrappers) or `CLAUDE.md` (for Claude Code).
      </p>
      <p>
        Here is the exact production-ready prompt that directs the agent to execute the **Boot-up, Ingestion, and Session Logging Protocols**:
      </p>

      {/* Code Snippet Box */}
      <pre
        style={{
          background: 'var(--bg-cream)',
          border: '1px solid var(--border-light)',
          borderRadius: 'var(--radius-sm)',
          padding: '24px',
          overflowX: 'auto',
          fontSize: '14px',
          fontFamily: 'var(--font-mono)',
          lineHeight: 1.5,
          color: 'var(--ink-primary)',
          margin: '32px 0',
        }}
      >
{`# 🧠 LLM Wiki Memory System Protocol

You are integrated with a persistent, compounding knowledge base (an LLM Wiki/Obsidian Vault) designed to track knowledge, project context, and decisions over time.

**Memory Location:** \`./llmwiki/llmwiki\`

### 1. Boot-up Protocol (Read Phase)
Every time you start a new session or are asked a complex architectural question:
- ALWAYS use the \`Read\` tool on \`./llmwiki/llmwiki/index.md\` to understand the current map of the knowledge base.
- ALWAYS use the \`Bash\` tool to read the tail of \`./llmwiki/llmwiki/log.md\` (e.g., \`tail -n 20 .../log.md\`) to establish recent context and see what was worked on last.

### 2. Session Conclusion (Write Phase)
Before finishing a task or session:
- **Write to Log:** ALWAYS append a chronological entry to \`./llmwiki/llmwiki/log.md\` detailing the actions taken, decisions made, and new files created. Use the format: \`## [YYYY-MM-DD] session | Brief Title\\nDescription of what happened.\`
- **Create/Update Pages:** If new concepts, architectures, or entities were discussed or implemented, create or update the relevant markdown pages in \`concepts/\`, \`entities/\`, or \`summaries/\`.
- **Update Index:** If you created new pages, update \`./llmwiki/llmwiki/index.md\` to link to them using Obsidian's \`[[wikilink]]\` syntax with a 1-line summary.

### 3. Ingestion Protocol
When the user provides a new raw source (URL, document, etc.):
- Read the source.
- Extract key information and write a summary page in \`summaries/\`.
- Update or create pages in \`concepts/\` and \`entities/\` to integrate the new knowledge. Flag contradictions.
- Add an entry to \`index.md\`.
- Append an entry to \`log.md\` (e.g., \`## [YYYY-MM-DD] ingest | Source Title\`).`}
      </pre>

      <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.75rem', color: 'var(--ink-primary)', marginTop: '48px', marginBottom: '20px', paddingBottom: '12px', borderBottom: '1px solid var(--border-light)' }}>
        How it Resolves the Amnesia Headache
      </h2>
      <p>
        Once this protocol is active, your CLI agent behaves like a highly organized, veteran colleague who never forgets a decision. 
      </p>
      <p>
        When you run a new terminal command tomorrow:
      </p>
      <ol style={{ paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '10px', color: 'var(--ink-secondary)', fontSize: '16px', lineHeight: 1.7 }}>
        <li>
          The agent automatically boots up, executes the **Boot-up Protocol**, and reads the last 20 lines of `log.md`.
        </li>
        <li>
          It instantly sees exactly what files were edited in the previous session, what git commits were made, and what tasks were left in progress.
        </li>
        <li>
          It reads `index.md` to see the structure of your system—meaning it knows where your database routes, auth configs, and types live without you ever having to run a single codebase scan.
        </li>
      </ol>
      <p>
        Before shutting down, the agent writes a concise chronological recap of its edits directly into `log.md`, updates the Obsidian indexes, and saves its own state. The feedback loop is completely closed, self-documenting, and auto-managed.
      </p>

      {/* Embedded YouTube video */}
      <div
        className="yt-embed"
        style={{
          position: 'relative',
          width: '100%',
          paddingBottom: '56.25%',
          marginBottom: '48px',
          marginTop: '40px',
          borderRadius: 'var(--radius-lg)',
          overflow: 'hidden',
          boxShadow: '0 10px 30px rgba(0,0,0,0.04), 0 1px 8px rgba(0,0,0,0.02)',
        }}
      >
        <iframe
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            border: 'none',
          }}
          src="https://www.youtube.com/embed/QbjAQFJJyt0?rel=0"
          title="How to Enable Persistent Memory in Claude Code"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>

      <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.75rem', color: 'var(--ink-primary)', marginTop: '48px', marginBottom: '20px', paddingBottom: '12px', borderBottom: '1px solid var(--border-light)' }}>
        Developer Compatibility: Aider and Custom CLI Agents
      </h2>
      <p>
        The most beautiful aspect of the LLM Wiki is that it is written in pure, flat Markdown files. Because it is completely decoupled from any specific proprietary model wrapper, it scales perfectly across different terminal setups.
      </p>
      <p>
        If you prefer using Aider over Claude Code, you can implement this system in seconds. Simply boot up your session, add `/add ./llmwiki/llmwiki/index.md` and `/add ./llmwiki/llmwiki/log.md` to your prompt context, and let Aider read and write your memory structure directly. 
      </p>
      <p>
        If you are building custom AI agents in Next.js or Python, you can utilize this directory as a local retrieval layer. For complex systems, read our comprehensive architectural guides on <Link href="/blog/perplexity-vs-google" style={{ color: 'var(--accent-orange)', textDecoration: 'underline', textUnderlineOffset: '3px', fontWeight: 600 }}>Why Developers are Switching to Perplexity</Link> and <Link href="/blog/deepseek-vs-chatgpt" style={{ color: 'var(--accent-orange)', textDecoration: 'underline', textUnderlineOffset: '3px', fontWeight: 600 }}>DeepSeek vs ChatGPT</Link> to analyze how modern retrieval and reasoning models handle complex context mappings.
      </p>

      <p style={{ marginTop: '32px' }}>
        Amnesia is not an inherent limitation of AI coding agents; it is simply a failure of state preservation. By building a persistent, compounding LLM Wiki, you free yourself from repetitive codebase scaffolding, eliminate costly context rot, and ensure your terminal co-pilot grows smarter with every single commit.
      </p>
    </>
  );
}
