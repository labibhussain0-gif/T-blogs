import { MetadataRoute } from 'next'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://t-blogs.com';

  return [
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/deepseek-janitor-ai`,
      lastModified: new Date('2026-05-06T00:00:00.000Z'),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog/eu-ai-act-explained`,
      lastModified: new Date('2026-05-04T00:00:00.000Z'),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog/will-cybersecurity-be-replaced-by-ai`,
      lastModified: new Date('2026-05-01T00:00:00.000Z'),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog/is-virtual-reality-bad-for-your-eyes`,
      lastModified: new Date('2026-04-28T00:00:00.000Z'),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog/blockchain-intellectual-property`,
      lastModified: new Date('2026-04-25T00:00:00.000Z'),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
  ]
}
