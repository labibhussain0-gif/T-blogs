import type { Metadata } from 'next';
import ContactClient from './ContactClient';
import { generateBreadcrumbSchema, generateOrganizationSchema, SITE_NAME, SITE_URL } from '@/lib/seo-helpers';

export const metadata: Metadata = {
  title: `Contact | ${SITE_NAME}`,
  description: 'Have any questions, feedback, or collaboration proposals? Send a message to T-blogs and get in touch with our team.',
  alternates: { canonical: `${SITE_URL}/contact` },
  robots: { index: true, follow: true },
};

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', href: '/' },
  { name: 'Contact', href: '/contact' },
]);
const orgSchema = generateOrganizationSchema();

export default function ContactPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />
      <ContactClient />
    </>
  );
}
