'use client';

import YouTubeEmbed from '@/components/YouTubeEmbed';
import Link from 'next/link';

export default function DeepSeekJanitorAIBody() {
  return (
    <>
      <p style={{ fontSize: '19px', lineHeight: 1.7, marginBottom: '32px', color: 'var(--ink-primary)', fontWeight: 400 }}>
        You are tired of mainstream LLM APIs silently restricting your outputs, breaking character immersion, or billing you like you are running a small nation-state. You want to know <strong>how to set up DeepSeek on Janitor AI</strong>. For unrestricted roleplay, deep character memory, and immersive storytelling, DeepSeek is a solid architectural choice: cheaper, highly capable, and fiercely uncensored. But connecting a raw API to a third-party client is not always plug-and-play. Let us break this down into components.
      </p>

      {/* Quick Reference Configuration Box */}
      <div style={{
        background: 'var(--bg-white)',
        borderRadius: 'var(--radius-md)',
        padding: '24px',
        margin: '32px 0',
        boxShadow: '0 4px 12px rgba(0,0,0,0.02)',
        border: '1px solid var(--border-light)',
        borderLeft: '4px solid var(--accent-orange)'
      }}>
        <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.25rem', color: 'var(--ink-primary)', marginTop: 0, marginBottom: '12px' }}>
          ⚡ DeepSeek Janitor AI Quick Configuration Reference
        </h3>
        <p style={{ fontSize: '14px', color: 'var(--ink-secondary)', marginBottom: '16px', lineHeight: '1.6' }}>
          Use these exact parameters in Janitor AI's <strong>Custom API (OpenAI-compatible)</strong> settings. 95% of setup errors (including the infinite loading screen) are caused by omitting the <code>/v1</code> endpoint path or writing the wrong model name.
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '14px' }}>
          {[
            { label: 'API Base URL (Direct)', value: 'https://api.deepseek.com/v1', desc: 'Must include the /v1 suffix' },
            { label: 'API Base URL (OpenRouter)', value: 'https://openrouter.ai/api/v1', desc: 'Standard failover gateway' },
            { label: 'Model Name (Direct)', value: 'deepseek-chat', desc: 'Matches DeepSeek V3 chat engine' },
            { label: 'Model Name (OpenRouter)', value: 'deepseek/deepseek-chat', desc: 'Routing string for OpenRouter' },
            { label: 'Min Account Balance', value: '$2.00 USD', desc: 'DeepSeek keys are inactive if balance is $0' }
          ].map((item) => (
            <div key={item.label} style={{ display: 'flex', flexDirection: 'column', paddingBottom: '8px', borderBottom: '1px solid var(--border-light)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '8px' }}>
                <span style={{ fontWeight: 600, color: 'var(--ink-primary)' }}>{item.label}</span>
                <code style={{ fontFamily: 'var(--font-mono)', background: 'var(--bg-warm-gray)', padding: '2px 8px', borderRadius: '4px', color: 'var(--accent-orange)', fontSize: '12px', fontWeight: 600 }}>{item.value}</code>
              </div>
              <span style={{ fontSize: '12px', color: 'var(--ink-tertiary)', marginTop: '4px' }}>{item.desc}</span>
            </div>
          ))}
        </div>
      </div>

      <YouTubeEmbed videoId="eXS0VmqDnkM" title="How To Use Janitor AI With DeepSeek In 2 Minutes!" />

      <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.75rem', color: 'var(--ink-primary)', marginTop: '48px', marginBottom: '20px', paddingBottom: '12px', borderBottom: '1px solid var(--border-light)' }}>
        The Architecture: What Is Actually Happening?
      </h2>
      <p>
        Before we start configuring things, let us clear up a massive misconception. <strong style={{ color: 'var(--ink-primary)' }}>Janitor AI is just a client frontend.</strong> It does not host the language models. Think of it as a beautifully styled terminal window.
      </p>
      <p>
        DeepSeek, on the other hand, is the engine. You are connecting the two via an API key and a base URL. If your API routing is wrong, the entire pipeline fails silently. We are essentially spoofing the standard OpenAI API contract because Janitor AI treats external endpoints as "OpenAI-compatible."
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4" style={{ margin: '40px 0' }}>
        {[
          { label: 'Requirement', value: 'Valid API Key', desc: 'Generated directly from the DeepSeek developer console.' },
          { label: 'Format', value: 'OpenAI Compatible', desc: 'Must use OpenAI request payload formatting.' },
          { label: 'Base URL', value: 'Endpoints Matter', desc: 'Missing the version path will break the integration.' },
        ].map((fact) => (
          <div
            key={fact.label}
            style={{
              padding: '24px',
              borderRadius: 'var(--radius-md)',
              border: '1px solid var(--border-light)',
              background: 'var(--bg-white)',
            }}
          >
            <span style={{ fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--ink-tertiary)' }}>
              {fact.label}
            </span>
            <p style={{ fontSize: '17px', fontWeight: 700, color: 'var(--ink-primary)', marginTop: '8px', marginBottom: '8px' }}>
              {fact.value}
            </p>
            <p style={{ fontSize: '13px', color: 'var(--ink-secondary)', lineHeight: 1.5 }}>
              {fact.desc}
            </p>
          </div>
        ))}
      </div>

      <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.75rem', color: 'var(--ink-primary)', marginTop: '48px', marginBottom: '20px', paddingBottom: '12px', borderBottom: '1px solid var(--border-light)' }}>
        Prerequisites: The $2 Minimum Balance Rule
      </h2>
      <p>
        Before we touch a single API key, we need to address the most common failure state. DeepSeek operates on a prepaid billing model. If you generate a key on a completely empty account ($0 balance), the API will fail silently. Janitor AI will just spin, or return blank responses.
      </p>
      <p>
        To avoid this, you must add at least <strong>$2 to your DeepSeek account</strong>. It is a tiny threshold, but it acts as an anti-abuse measure on their end. Go to the billing dashboard, drop in the minimum top-up, and your API keys will immediately activate for external routing.
      </p>

      <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.75rem', color: 'var(--ink-primary)', marginTop: '48px', marginBottom: '20px', paddingBottom: '12px', borderBottom: '1px solid var(--border-light)' }}>
        Step 1: Procuring the DeepSeek API Key
      </h2>
      <p>
        First, head over to the <a href="https://platform.deepseek.com/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-orange)', textDecoration: 'underline', textUnderlineOffset: '3px' }}>DeepSeek Platform</a> and create an account. Navigate to the API keys dashboard and generate a new key.
      </p>
      <p>
        <strong style={{ color: 'var(--ink-primary)' }}>A friendly warning from someone who has seen production go down at 3 AM:</strong> Treat this API key like a production database password. If you leak it, revoke it immediately unless you want a very expensive lesson in cloud billing.
      </p>

      <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.75rem', color: 'var(--ink-primary)', marginTop: '48px', marginBottom: '20px', paddingBottom: '12px', borderBottom: '1px solid var(--border-light)' }}>
        Step 2: The Critical Configuration in Janitor AI
      </h2>
      <p>
        Now, log into Janitor AI and navigate to the <strong style={{ color: 'var(--ink-primary)' }}>API / Model Settings</strong>. Select the <strong style={{ color: 'var(--ink-primary)' }}>Custom API</strong> (OpenAI-compatible) option. Here are the precise parameters. Do not ad-lib here—I cannot stress this enough.
      </p>

      <ul style={{ margin: '24px 0', paddingLeft: '24px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <li>
          <strong style={{ color: 'var(--ink-primary)' }}>API Base URL:</strong> <code style={{ fontFamily: 'var(--font-mono)', fontSize: '0.875em', background: 'var(--bg-warm-gray)', padding: '2px 8px', borderRadius: '4px' }}>https://api.deepseek.com/v1</code> (Direct) or <code style={{ fontFamily: 'var(--font-mono)', fontSize: '0.875em', background: 'var(--bg-warm-gray)', padding: '2px 8px', borderRadius: '4px' }}>https://openrouter.ai/api/v1</code> (OpenRouter)
          <br />
          <span style={{ fontSize: '14px', color: 'var(--ink-tertiary)', fontStyle: 'italic' }}>
            Notice the <code style={{ fontFamily: 'var(--font-mono)', fontSize: '0.875em', background: 'var(--bg-warm-gray)', padding: '2px 6px', borderRadius: '4px' }}>/v1</code>. Just one missing version tag and you get infinite loading. If using OpenRouter, use their v1 endpoint.
          </span>
        </li>
        <li>
          <strong style={{ color: 'var(--ink-primary)' }}>API Key:</strong> Paste the exact string you generated from DeepSeek (or OpenRouter, depending on your choice).
        </li>
        <li>
          <strong style={{ color: 'var(--ink-primary)' }}>Model Name:</strong> <code style={{ fontFamily: 'var(--font-mono)', fontSize: '0.875em', background: 'var(--bg-warm-gray)', padding: '2px 8px', borderRadius: '4px' }}>deepseek-chat</code> (for Direct API) or <code style={{ fontFamily: 'var(--font-mono)', fontSize: '0.875em', background: 'var(--bg-warm-gray)', padding: '2px 8px', borderRadius: '4px' }}>deepseek/deepseek-chat</code> (for OpenRouter)
        </li>
      </ul>

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
          <code>{`{
  "model": "deepseek-chat",
  "messages": [
    {"role": "system", "content": "You are a helpful assistant."}
  ],
  "temperature": 0.7,
  "max_tokens": 2048
}`}</code>
        </pre>
      </div>

      <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.75rem', color: 'var(--ink-primary)', marginTop: '48px', marginBottom: '20px', paddingBottom: '12px', borderBottom: '1px solid var(--border-light)' }}>
        DeepSeek Direct vs. OpenRouter: Which is Better?
      </h2>
      <p>
        You have two main paths to pipe DeepSeek into Janitor AI: the direct DeepSeek API, or an aggregator like <strong>OpenRouter</strong>. For normal users, OpenRouter is the standard alternative to direct integration.
      </p>
      <p>
        The direct API is cheaper if you use it heavily, but you might face geographic routing issues or rate limits during peak Chinese timezone hours. OpenRouter sits in the middle. You pay a slight markup, but OpenRouter handles the failovers, accepts standard US/EU credit cards more easily, and provides a unified dashboard for all your LLM spending. If you want the path of least resistance for immersive storytelling, OpenRouter is excellent.
      </p>

      <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.75rem', color: 'var(--ink-primary)', marginTop: '48px', marginBottom: '20px', paddingBottom: '12px', borderBottom: '1px solid var(--border-light)' }}>
        Choosing the Right Model: DeepSeek V3 vs. R1 (Reasoner)
      </h2>
      <p>
        DeepSeek recently introduced <strong>DeepSeek R1 (Reasoner)</strong>, which uses chain-of-thought processing to "think" before it speaks. While incredible for coding or math, <strong>do not use R1 for roleplay in Janitor AI.</strong>
      </p>
      <p>
        R1 outputs raw <code>&lt;think&gt;...&lt;/think&gt;</code> tags containing its internal monologue. Janitor AI’s frontend currently struggles to parse or hide these tags cleanly, which immediately breaks immersion during a character interaction. For seamless roleplay and character interactions, always stick to <strong>DeepSeek V3</strong> (<code>deepseek-chat</code>). It remains lightning fast, uncensored, and parses perfectly in Janitor’s interface.
      </p>
      <p>
        For a comprehensive evaluation of how DeepSeek V3 fares against the industry's heaviest models in coding, logic, and reasoning benchmarks, read my detailed shootout of the <Link href="/blog/best-ai-chatbots" style={{ color: 'var(--accent-orange)', textDecoration: 'underline' }}>best AI chatbots</Link>. If you're architecting a wider technical stack, explore my <Link href="/ai-tools-guide" style={{ color: 'var(--accent-orange)', textDecoration: 'underline' }}>ultimate AI tools guide</Link> listing leading text, image, and automation platforms.
      </p>

      <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.75rem', color: 'var(--ink-primary)', marginTop: '48px', marginBottom: '20px', paddingBottom: '12px', borderBottom: '1px solid var(--border-light)' }}>
        Step 3: Tuning the Hyperparameters
      </h2>
      <p>
        DeepSeek is not Claude or GPT-4. If you leave the default hyperparameters untouched, it might start producing output that resembles a junior dev explaining their latest spaghetti code.
      </p>
      <ul style={{ margin: '24px 0', paddingLeft: '24px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <li><strong style={{ color: 'var(--ink-primary)' }}>Temperature (0.7 - 0.85):</strong> Start at 0.7. If the character model feels too rigid or repetitive in its storytelling, bump it up.</li>
        <li><strong style={{ color: 'var(--ink-primary)' }}>Top-P (0.9):</strong> Controls diversity of the prose. Leave this at 0.9.</li>
        <li><strong style={{ color: 'var(--ink-primary)' }}>Max Tokens (2048 - 4096):</strong> Set this high enough so long character responses do not abruptly cut off mid-sentence.</li>
      </ul>

      <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '1.25rem', color: 'var(--ink-primary)', marginTop: '32px', marginBottom: '16px' }}>
        Taking Advantage of the 128K Context Window
      </h3>
      <p>
        One of the biggest advantages of DeepSeek V3 is its massive 128K context window. In roleplay terms, this means the character can "remember" events that happened dozens of chapters ago without you needing to summarize them in the chat memory manually.
      </p>
      <p>
        In Janitor AI’s Generation Settings, you can safely slide the Context Size up to 64,000 or even 100,000 if your API balance can handle the token ingestion costs. Be warned: sending 100K tokens per message gets expensive fast, even at DeepSeek's rock-bottom pricing. A sweet spot for deep memory without bankrupting yourself is typically around 32,000 tokens.
      </p>

      <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.75rem', color: 'var(--ink-primary)', marginTop: '48px', marginBottom: '20px', paddingBottom: '12px', borderBottom: '1px solid var(--border-light)' }}>
        Advanced Architecture: The LiteLLM Proxy (For Power Users)
      </h2>
      <p>
        If you are running this setup daily and want ultimate control, connecting Janitor AI directly to DeepSeek or even OpenRouter might feel limiting. You are one API outage away from a dead roleplay session. The adult in the room for model orchestration for power users is <strong style={{ color: 'var(--ink-primary)' }}>LiteLLM</strong>.
      </p>
      <p>
        By running a local LiteLLM proxy, you point Janitor AI to <code style={{ fontFamily: 'var(--font-mono)', fontSize: '0.875em', background: 'var(--bg-warm-gray)', padding: '2px 8px', borderRadius: '4px' }}>http://localhost:4000</code>. LiteLLM handles the routing. I remember a specific Friday night where a major API provider went down, but my LiteLLM router automatically failed over to a local Llama3 instance. The client never noticed the drop. That is the kind of resilience you want.
      </p>

      <p>Here is the exact <code style={{ fontFamily: 'var(--font-mono)', fontSize: '0.875em', background: 'var(--bg-warm-gray)', padding: '2px 8px', borderRadius: '4px' }}>config.yaml</code> you need to run LiteLLM with DeepSeek and a local fallback:</p>

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
          <code>{`model_list:
  - model_name: deepseek-chat
    litellm_params:
      model: deepseek/deepseek-chat
      api_key: os.environ/DEEPSEEK_API_KEY
  - model_name: deepseek-chat # Fallback
    litellm_params:
      model: ollama/llama3
      api_base: http://localhost:11434

router_settings:
  routing_strategy: usage-based-routing
  fallbacks: [{"deepseek-chat": ["ollama/llama3"]}]`}</code>
        </pre>
      </div>
      <p>
        Run this via Docker, point Janitor AI to your local proxy, and you suddenly have enterprise-grade failovers for your roleplay sessions. (Yes, I know I should have used a Kubernetes cluster. No, I didn't. Move on.)
      </p>

      <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.75rem', color: 'var(--ink-primary)', marginTop: '48px', marginBottom: '20px', paddingBottom: '12px', borderBottom: '1px solid var(--border-light)' }}>
        Latency: The Silent Killer
      </h2>
      <p>
        Let us talk about Time to First Token (TTFT). If it takes 30 seconds to respond, it is not an "Assistant." It is a pen pal.
      </p>
      <p>
        DeepSeek is fast, but network routing from certain geographic locations can introduce a 300ms overhead before the token generation even begins. If you are experiencing high latency in Janitor AI, check your DNS resolution, or better yet, ensure your streaming settings in the Janitor UI are toggled on. Streaming drastically reduces perceived latency by printing tokens as they arrive rather than waiting for the entire chunk.
      </p>

      <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.75rem', color: 'var(--ink-primary)', marginTop: '48px', marginBottom: '20px', paddingBottom: '12px', borderBottom: '1px solid var(--border-light)' }}>
        Debugging the Inevitable Failures
      </h2>
      <p>
        If you have followed these steps and things still are not working, here is your mini post-mortem checklist:
      </p>
      <ul style={{ margin: '24px 0', paddingLeft: '24px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <li><strong style={{ color: 'var(--ink-primary)' }}>The Infinite Loading Screen:</strong> You almost certainly messed up the Base URL. Verify the <code style={{ fontFamily: 'var(--font-mono)', fontSize: '0.875em', background: 'var(--bg-warm-gray)', padding: '2px 6px', borderRadius: '4px' }}>/v1</code> is present.</li>
        <li><strong style={{ color: 'var(--ink-primary)' }}>"Model Not Found" Error:</strong> You typo'd the Model ID. It must be exactly <code style={{ fontFamily: 'var(--font-mono)', fontSize: '0.875em', background: 'var(--bg-warm-gray)', padding: '2px 8px', borderRadius: '4px' }}>deepseek-chat</code>.</li>
        <li><strong style={{ color: 'var(--ink-primary)' }}>Silent Empty Replies:</strong> Usually an API key issue, or you ran out of credits on the DeepSeek platform. Check your billing dashboard.</li>
      </ul>

      <hr style={{ border: 'none', borderTop: '1px solid var(--border-light)', margin: '48px 0' }} />

      <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.5rem', color: 'var(--ink-primary)', marginBottom: '16px' }}>
        The Verdict
      </h2>
      <p>
        Boring technology is usually the right choice for production, and setting up a clean API pipeline should not be overly complex. Once configured correctly, DeepSeek on Janitor AI provides a robust, highly capable backend at a fraction of the cost of mainstream alternatives.
      </p>
      <p>
        Now stop over-engineering the prompt settings and get back to your immersive storytelling.
      </p>
    </>
  );
}
