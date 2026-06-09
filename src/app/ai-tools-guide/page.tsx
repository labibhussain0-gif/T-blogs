import { Metadata } from 'next';
import AIToolsGuideClient from './AIToolsGuideClient';
import { SITE_NAME, SITE_URL } from '@/lib/seo-helpers';

export const metadata: Metadata = {
  title: `Ultimate AI Tools & Platforms Guide (2026) | ${SITE_NAME}`,
  description: 'The definitive technical guide to AI tools and platforms in 2026. Hands-on analysis of language models, image generators, and agentic workflows.',
  alternates: { canonical: `${SITE_URL}/ai-tools-guide` },
  robots: { index: true, follow: true },
  openGraph: {
    title: `Ultimate AI Tools & Platforms Guide (2026) | ${SITE_NAME}`,
    description: 'The definitive technical guide to AI tools and platforms in 2026. Hands-on analysis of language models, image generators, and agentic workflows.',
    url: `${SITE_URL}/ai-tools-guide`,
    siteName: SITE_NAME,
    type: 'website',
  },
};

export default function AIToolsGuidePage() {
  return <AIToolsGuideClient />;
}
