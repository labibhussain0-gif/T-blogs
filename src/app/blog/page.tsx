import { Metadata } from 'next';
import BlogClient from './BlogClient';
import { SITE_NAME, SITE_URL } from '@/lib/seo-helpers';

export const metadata: Metadata = {
  title: `Insights | ${SITE_NAME}`,
  description: 'Read the latest technical deep dives into artificial intelligence, software engineering, and system design.',
  alternates: { canonical: `${SITE_URL}/blog` },
};

export default function BlogIndexPage() {
  return <BlogClient />;
}
