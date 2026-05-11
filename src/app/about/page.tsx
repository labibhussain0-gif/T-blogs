import { Metadata } from 'next';
import AboutClient from './AboutClient';
import { SITE_NAME, SITE_URL } from '@/lib/seo-helpers';

export const metadata: Metadata = {
  title: `About | ${SITE_NAME}`,
  description: 'Learn about T-blogs, our mission, and the architecture behind our high-end technology and AI platform.',
  alternates: { canonical: `${SITE_URL}/about` },
};

export default function AboutPage() {
  return <AboutClient />;
}
