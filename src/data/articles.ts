import type { FAQ } from '@/lib/seo-helpers';

export type { FAQ };

export interface Article {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  metaDescription: string;
  category: string;
  date: string;
  lastUpdated?: string;
  readTime: string;
  author: string;
  authorBio: string;
  authorAvatar: string;
  authorLinkedin: string;
  authorTwitter: string;
  authorPage: string;
  image: string;
  imageAlt: string;
  keywords: string[];
  commentCount: number;
  featured?: boolean;
  faq?: FAQ[];
}

export const categories = [
  'All',
  'AI Research',
  'Engineering',
  'Tech Trends',
  'Design',
] as const;

// Author constants — single source of truth
export const AUTHOR = {
  name: 'Ashique Hussain',
  bio: 'Tech writer and AI researcher who covers large language models, cybersecurity, and emerging tech. Former software engineer with a deep interest in how AI reshapes the industry.',
  avatar: '/author-ashique.jpg',
  linkedin: 'https://www.linkedin.com/in/ashique-hussain-a94738406',
  twitter: 'https://x.com/MrMilli7',
  page: '/about/author',
};

export const articles: Article[] = [
  // ==========================================
  // ARTICLE 1 — Existing (AI Research)
  // Keyword: how to set up deepseek on janitor ai | Vol: 5,400 | KD: 14
  // ==========================================
  {
    id: 1,
    slug: 'deepseek-janitor-ai',
    title: 'How to Set Up DeepSeek on Janitor AI',
    excerpt:
      'A comprehensive, no-nonsense technical guide on how to set up DeepSeek on Janitor AI. Stop guessing and configure your API endpoints correctly.',
    metaDescription:
      'Learn how to set up DeepSeek on Janitor AI step by step. Configure your API key, base URL, and model parameters correctly — no guesswork.',
    category: 'AI Research',
    date: 'May 6, 2026',
    lastUpdated: 'May 6, 2026',
    readTime: '8 min',
    author: AUTHOR.name,
    authorBio: AUTHOR.bio,
    authorAvatar: AUTHOR.avatar,
    authorLinkedin: AUTHOR.linkedin,
    authorTwitter: AUTHOR.twitter,
    authorPage: AUTHOR.page,
    image:
      'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800&auto=format&fit=crop',
    imageAlt: 'Abstract AI neural network visualization representing DeepSeek language model',
    keywords: [
      'how to set up deepseek on janitor ai',
      'deepseek janitor ai',
      'deepseek api setup',
      'janitor ai custom api',
    ],
    commentCount: 42,
    featured: true,
    faq: [
      {
        question: 'How do I set up DeepSeek on Janitor AI?',
        answer:
          'Go to Janitor AI settings, select Custom API (OpenAI-compatible), enter the base URL as https://api.deepseek.com/v1, paste your DeepSeek API key, and set the model name to deepseek-chat. Save and test the connection.',
      },
      {
        question: 'What is the correct DeepSeek API base URL for Janitor AI?',
        answer:
          'The correct base URL is https://api.deepseek.com/v1 — including the /v1 path. Omitting it is the most common cause of the infinite loading screen.',
      },
      {
        question: 'Why is Janitor AI showing infinite loading after I set up DeepSeek?',
        answer:
          'The most common cause is an incorrect base URL. Make sure you are using https://api.deepseek.com/v1 with the version path included. Also verify your API key has not expired and your DeepSeek account has available credits.',
      },
      {
        question: 'Which DeepSeek model should I use on Janitor AI?',
        answer:
          'Use deepseek-chat for general conversation and creative writing, or deepseek-coder if you need code-focused responses. Both are OpenAI-compatible and work with Janitor AI\'s custom API setting.',
      },
      {
        question: 'Is DeepSeek free to use on Janitor AI?',
        answer:
          'DeepSeek is not free, but it is significantly cheaper than GPT-4. You pay per token through the DeepSeek platform. Create an account at platform.deepseek.com to see current pricing and add credits.',
      },
      {
        question: 'What temperature and token settings work best for DeepSeek on Janitor AI?',
        answer:
          'Start with temperature 0.7, top-p 0.9, and max tokens 2048–4096. Increase temperature to 0.85 if the responses feel too rigid. Avoid setting max tokens below 1024 or responses may cut off mid-sentence.',
      },
    ],
  },

  // ==========================================
  // ARTICLE 2 — Content Plan (AI Research)
  // Keyword: eu ai act news | Vol: 90,500 | KD: 22
  // ==========================================
  {
    id: 2,
    slug: 'eu-ai-act-explained',
    title: 'EU AI Act Explained: What Developers Need to Know in 2026',
    excerpt:
      'The EU AI Act is now in force. Here is what it actually means for developers, product teams, and companies shipping AI features to European users.',
    metaDescription:
      'EU AI Act news and explained for developers: risk tiers, compliance deadlines, prohibited systems, and what you must do before shipping AI to EU users.',
    category: 'AI Research',
    date: 'May 4, 2026',
    lastUpdated: 'May 4, 2026',
    readTime: '11 min',
    author: AUTHOR.name,
    authorBio: AUTHOR.bio,
    authorAvatar: AUTHOR.avatar,
    authorLinkedin: AUTHOR.linkedin,
    authorTwitter: AUTHOR.twitter,
    authorPage: AUTHOR.page,
    image:
      'https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?q=80&w=800&auto=format&fit=crop',
    imageAlt: 'European Union flag representing the EU AI Act regulation',
    keywords: [
      'eu ai act news',
      'eu ai act explained',
      'eu ai act developers',
      'ai regulation news',
      'eu ai act news today',
    ],
    commentCount: 0,
    faq: [
      {
        question: 'What is the EU AI Act?',
        answer:
          'The EU AI Act is the world\'s first comprehensive legal framework for artificial intelligence. It categorizes AI systems by risk level and sets binding compliance requirements for companies that deploy AI within the European Union.',
      },
      {
        question: 'When does the EU AI Act take effect?',
        answer:
          'The EU AI Act entered into force in August 2024. The prohibited AI systems rules applied from February 2025. High-risk AI system obligations apply from August 2026. Most developers need to be compliant by August 2027.',
      },
      {
        question: 'Does the EU AI Act apply to companies outside the EU?',
        answer:
          'Yes. If your AI system is deployed in the EU or its outputs are used in the EU, the Act applies to you regardless of where your company is based. This is similar to how GDPR works.',
      },
      {
        question: 'What AI systems are prohibited under the EU AI Act?',
        answer:
          'Prohibited systems include real-time biometric surveillance in public spaces, social scoring by governments, AI that exploits psychological vulnerabilities, and certain predictive policing applications.',
      },
    ],
  },

  // ==========================================
  // ARTICLE 3 — Content Plan (Engineering)
  // Keyword: will cybersecurity be replaced by ai | Vol: 480 | KD: 21
  // ==========================================
  {
    id: 3,
    slug: 'will-cybersecurity-be-replaced-by-ai',
    title: 'Will Cybersecurity Be Replaced by AI? The Honest Answer',
    excerpt:
      'Everyone is asking whether AI will replace cybersecurity engineers. The real answer is more complicated — and more interesting — than the headlines suggest.',
    metaDescription:
      'Will cybersecurity be replaced by AI? Understand which roles AI automates, which it enhances, and what skills protect your cybersecurity career.',
    category: 'Engineering',
    date: 'May 1, 2026',
    lastUpdated: 'May 1, 2026',
    readTime: '9 min',
    author: AUTHOR.name,
    authorBio: AUTHOR.bio,
    authorAvatar: AUTHOR.avatar,
    authorLinkedin: AUTHOR.linkedin,
    authorTwitter: AUTHOR.twitter,
    authorPage: AUTHOR.page,
    image:
      'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800&auto=format&fit=crop',
    imageAlt: 'Cybersecurity lock and circuit board symbolizing AI-powered security systems',
    keywords: [
      'will cybersecurity be replaced by ai',
      'ai in cybersecurity',
      'cybersecurity engineer future',
      'is cybersecurity hard',
      'does cybersecurity require coding',
    ],
    commentCount: 0,
    faq: [
      {
        question: 'Will AI replace cybersecurity engineers?',
        answer:
          'AI will replace specific tasks — log analysis, anomaly detection, vulnerability scanning — but not cybersecurity engineers as a whole. The demand for engineers who understand how to direct, audit, and secure AI systems is growing faster than AI can automate the field.',
      },
      {
        question: 'What cybersecurity tasks is AI already automating?',
        answer:
          'AI currently automates log analysis, phishing detection, SIEM alert triage, vulnerability scanning, and pattern-based threat detection. These are high-volume, rules-based tasks that benefit from machine speed.',
      },
      {
        question: 'Is cybersecurity a good career despite AI?',
        answer:
          'Yes. The global cybersecurity workforce gap is estimated at 4 million unfilled positions. AI is creating more demand for security expertise, not less, because every AI system deployed is also an attack surface.',
      },
      {
        question: 'Does cybersecurity require coding skills?',
        answer:
          'Entry-level roles often do not require heavy coding. Mid-to-senior roles — penetration testing, malware analysis, security engineering — benefit significantly from Python, Bash, and an understanding of how software is built.',
      },
    ],
  },

  // ==========================================
  // ARTICLE 4 — Content Plan (Tech Trends)
  // Keyword: is virtual reality bad for your eyes | Vol: 320 | KD: 1
  // ==========================================
  {
    id: 4,
    slug: 'is-virtual-reality-bad-for-your-eyes',
    title: 'Is Virtual Reality Bad for Your Eyes? What the Research Says',
    excerpt:
      'Short answer: it depends on the headset, the session length, and your age. Long answer: the research is more nuanced than the fear-mongering suggests.',
    metaDescription:
      'Is virtual reality bad for your eyes? Explore the research on VR eye strain, myopia risk, and safe usage guidelines for adults and children.',
    category: 'Tech Trends',
    date: 'April 28, 2026',
    lastUpdated: 'April 28, 2026',
    readTime: '7 min',
    author: AUTHOR.name,
    authorBio: AUTHOR.bio,
    authorAvatar: AUTHOR.avatar,
    authorLinkedin: AUTHOR.linkedin,
    authorTwitter: AUTHOR.twitter,
    authorPage: AUTHOR.page,
    image:
      'https://images.unsplash.com/photo-1592478411213-6153e4ebc07d?q=80&w=800&auto=format&fit=crop',
    imageAlt: 'Person wearing a VR headset exploring virtual reality experiences',
    keywords: [
      'is virtual reality bad for your eyes',
      'vr eye strain',
      'virtual reality health effects',
      'how do virtual reality headsets work',
      'when was virtual reality invented',
    ],
    commentCount: 0,
    faq: [
      {
        question: 'Is virtual reality bad for your eyes?',
        answer:
          'Short-term VR use (under 30 minutes) causes temporary eye strain in some users, but no permanent damage has been established in healthy adults. Children under 12 are advised to limit use due to ongoing visual system development.',
      },
      {
        question: 'Can VR cause long-term vision damage?',
        answer:
          'Current research shows no evidence of long-term vision damage in adults from normal VR use. The main concerns are temporary digital eye strain, vergence-accommodation conflict, and potential myopia progression in children.',
      },
      {
        question: 'How long should you use VR without a break?',
        answer:
          'Most manufacturers and ophthalmologists recommend taking a 10–15 minute break after every 30 minutes of VR use. The 20-20-20 rule applies: every 20 minutes, look at something 20 feet away for 20 seconds.',
      },
      {
        question: 'Is VR safe for children?',
        answer:
          'Most headset manufacturers set minimum age recommendations of 12–13 years. Children\'s visual systems are still developing, and the vergence-accommodation conflict in VR headsets may affect that development. Limit sessions to 20 minutes or less.',
      },
    ],
  },

  // ==========================================
  // ARTICLE 5 — Content Plan (Tech Trends)
  // Keyword: blockchain in intellectual property | Vol: 14,800 | KD: 17
  // ==========================================
  {
    id: 5,
    slug: 'blockchain-intellectual-property',
    title: 'Blockchain in Intellectual Property: A Practical Overview',
    excerpt:
      'Blockchain is being used to register, verify, and license intellectual property rights. Here is how it actually works — and where it still falls short.',
    metaDescription:
      'Blockchain in intellectual property: how blockchain registers copyright, verifies ownership, enables licensing, and what limitations still exist.',
    category: 'Tech Trends',
    date: 'April 25, 2026',
    lastUpdated: 'April 25, 2026',
    readTime: '10 min',
    author: AUTHOR.name,
    authorBio: AUTHOR.bio,
    authorAvatar: AUTHOR.avatar,
    authorLinkedin: AUTHOR.linkedin,
    authorTwitter: AUTHOR.twitter,
    authorPage: AUTHOR.page,
    image:
      'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=800&auto=format&fit=crop',
    imageAlt: 'Blockchain network visualization representing distributed ledger technology',
    keywords: [
      'blockchain in intellectual property',
      'blockchain applications in intellectual property',
      'blockchain copyright',
      'blockchain ip rights',
      'blockchain keywords',
    ],
    commentCount: 0,
    faq: [
      {
        question: 'How is blockchain used in intellectual property?',
        answer:
          'Blockchain creates an immutable, timestamped record of when a work was created and by whom. This establishes prior art for patents, proof of authorship for copyright, and enables smart-contract-based licensing for digital assets.',
      },
      {
        question: 'Does registering on blockchain replace official IP registration?',
        answer:
          'No. Blockchain records are evidence, not legal registration. In most jurisdictions, you still need to register with the relevant IP office (USPTO, EPO, etc.) for full legal protection. Blockchain strengthens your evidence, not your rights.',
      },
      {
        question: 'Can blockchain prevent copyright infringement?',
        answer:
          'Blockchain cannot prevent copying, but it creates an undeniable proof-of-ownership record that strengthens infringement claims in court. Some platforms also use blockchain to track licensing and detect unauthorized use automatically.',
      },
      {
        question: 'What are the limitations of blockchain for IP protection?',
        answer:
          'Key limitations include: the blockchain only records what you submit (garbage in, garbage out), cross-border legal recognition is inconsistent, smart contract enforcement requires the infringing platform to participate, and blockchain records are still not accepted as primary evidence in all jurisdictions.',
      },
    ],
  },
];

export function getFeaturedArticle(): Article {
  return articles.find((a) => a.featured) || articles[0];
}

export function getArticlesByCategory(category: string): Article[] {
  if (category === 'All') return articles;
  return articles.filter((a) => a.category === category);
}

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}

export function getRelatedArticles(
  currentSlug: string,
  count: number = 3
): Article[] {
  const current = getArticleBySlug(currentSlug);
  if (!current) return articles.slice(0, count);
  const sameCategory = articles.filter(
    (a) => a.slug !== currentSlug && a.category === current.category
  );
  if (sameCategory.length >= count) return sameCategory.slice(0, count);
  // Fill with other articles if not enough in same category
  const others = articles.filter(
    (a) => a.slug !== currentSlug && a.category !== current.category
  );
  return [...sameCategory, ...others].slice(0, count);
}
