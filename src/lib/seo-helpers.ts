// src/lib/seo-helpers.ts
// Centralized JSON-LD schema generators — used across all pages

export const SITE_URL = 'https://t-blogs.com';
export const SITE_NAME = 'T-blogs';
export const SITE_DESCRIPTION =
  'High-end technology and AI blog featuring the latest in software engineering, artificial intelligence, and tech trends.';
export const CONTACT_EMAIL = 'labibhussain36@gmail.com';
export const TWITTER_HANDLE = '@friendlybuddy25';
export const LINKEDIN_URL = 'https://www.linkedin.com/in/mr-milli-098a35266';
export const TWITTER_URL = 'https://x.com/friendlybuddy25';

// --- Types ---

export interface FAQ {
  question: string;
  answer: string;
}

export interface BreadcrumbItem {
  name: string;
  href: string;
}

// --- Schema Generators ---

export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_NAME,
    url: SITE_URL,
    description: SITE_DESCRIPTION,
    email: CONTACT_EMAIL,
    sameAs: [LINKEDIN_URL, TWITTER_URL],
    logo: {
      '@type': 'ImageObject',
      url: `${SITE_URL}/og-default.png`,
    },
  };
}

export function generatePersonSchema({
  name,
  url,
  image,
  jobTitle,
  description,
  sameAs,
}: {
  name: string;
  url: string;
  image: string;
  jobTitle: string;
  description: string;
  sameAs: string[];
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name,
    url,
    image,
    jobTitle,
    description,
    sameAs,
    worksFor: {
      '@type': 'Organization',
      name: SITE_NAME,
      url: SITE_URL,
    },
  };
}

export function generateArticleSchema({
  title,
  description,
  url,
  image,
  datePublished,
  dateModified,
  authorName,
  authorUrl,
}: {
  title: string;
  description: string;
  url: string;
  image: string;
  datePublished: string;
  dateModified?: string;
  authorName: string;
  authorUrl: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    url,
    image,
    datePublished,
    dateModified: dateModified || datePublished,
    author: {
      '@type': 'Person',
      name: authorName,
      url: authorUrl,
    },
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
      url: SITE_URL,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/og-default.png`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
  };
}

export function generateFAQSchema(faqs: FAQ[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

export function generateBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.href}`,
    })),
  };
}

export function generateWebPageSchema({
  title,
  description,
  url,
}: {
  title: string;
  description: string;
  url: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: title,
    description,
    url,
    isPartOf: {
      '@type': 'WebSite',
      name: SITE_NAME,
      url: SITE_URL,
    },
  };
}
