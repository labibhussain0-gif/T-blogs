import dynamic from 'next/dynamic';
import React from 'react';

export const articleComponents: Record<string, React.ComponentType<any>> = {
  'deepseek-janitor-ai': dynamic(() => import('./deepseek-janitor-ai'), { ssr: true }),
  'eu-ai-act-explained': dynamic(() => import('./eu-ai-act-explained'), { ssr: true }),
  'will-cybersecurity-be-replaced-by-ai': dynamic(() => import('./will-cybersecurity-be-replaced-by-ai'), { ssr: true }),
  'is-virtual-reality-bad-for-your-eyes': dynamic(() => import('./is-virtual-reality-bad-for-your-eyes'), { ssr: true }),
  'blockchain-intellectual-property': dynamic(() => import('./blockchain-intellectual-property'), { ssr: true }),
  'brand-visibility-ai-search-engines': dynamic(() => import('./brand-visibility-ai-search-engines'), { ssr: true }),
  'self-hosted-open-source-software-automation': dynamic(() => import('./self-hosted-open-source-software-automation'), { ssr: true }),
  'applied-machine-learning-healthcare-prediction': dynamic(() => import('./applied-machine-learning-healthcare-prediction'), { ssr: true }),
  'hr-legal-real-estate-tech-architecture': dynamic(() => import('./hr-legal-real-estate-tech-architecture'), { ssr: true }),
  'new-gaming-technology-hci': dynamic(() => import('./new-gaming-technology-hci'), { ssr: true }),
  'best-ai-chatbots': dynamic(() => import('./best-ai-chatbots'), { ssr: true }),
  'how-to-use-claude-ai': dynamic(() => import('./how-to-use-claude-ai'), { ssr: true }),
  'how-to-use-chatgpt-effectively': dynamic(() => import('./how-to-use-chatgpt-effectively'), { ssr: true }),
};
