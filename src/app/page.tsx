import { Metadata } from 'next';
import HomeClient from './HomeClient';
import { SITE_NAME } from '@/lib/seo-helpers';

export const metadata: Metadata = {
  title: `Home | ${SITE_NAME}`,
  description: 'High-end technology and AI blog featuring the latest in software engineering, artificial intelligence, and tech trends.',
};

export default function Home() {
  return <HomeClient />;
}
