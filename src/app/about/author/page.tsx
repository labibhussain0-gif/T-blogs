import { Metadata } from 'next';
import AuthorClient from './AuthorClient';
import { SITE_NAME, SITE_URL } from '@/lib/seo-helpers';

export const metadata: Metadata = {
  title: `Ashique Hussain | ${SITE_NAME}`,
  description: 'Technical Architect and author at T-blogs, specializing in infrastructure, AI orchestration, and system design.',
  alternates: { canonical: `${SITE_URL}/about/author` },
};

export default function AuthorPage() {
  return <AuthorClient />;
}
