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
  {
    id: 6,
    slug: 'brand-visibility-ai-search-engines',
    title: 'Architecting for LLMs: How to Improve Brand Visibility in AI Search Engines',
    excerpt: 'Technical breakdown of Generative Engine Optimization (GEO). How to format data for Perplexity and Google AI Overviews.',
    metaDescription: 'Improve brand visibility in AI search engines using semantic HTML, llms.txt, and structured JSON-LD.',
    category: 'Engineering',
    date: 'May 14, 2026',
    readTime: '9 min',
    author: AUTHOR.name,
    authorBio: AUTHOR.bio,
    authorAvatar: AUTHOR.avatar,
    authorLinkedin: AUTHOR.linkedin,
    authorTwitter: AUTHOR.twitter,
    authorPage: AUTHOR.page,
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=800&auto=format&fit=crop',
    imageAlt: 'AI search engine visualization',
    keywords: [
      'how to improve brand visibility in ai search engines',
      'what strategies improve brand visibility in ai search engines',
      'hotwire gaio.tech ai visibility products'
    ],
    commentCount: 0,
    faq: [
      {
        question: "How do I optimize for AI Search Engines?",
        answer: "You should structure your site using semantic HTML, include a clean llms.txt file to serve as a markdown-based entry point, and implement JSON-LD structured data so AI crawlers can understand relationships easily."
      },
      {
        question: "What is Generative Engine Optimization (GEO)?",
        answer: "GEO is the practice of optimizing content specifically for AI search engines like Perplexity, Google AI Overviews, and ChatGPT. It focuses on clarity, authoritative sources, semantic structure, and citation readiness rather than keyword density."
      },
      {
        question: "Why do AI crawlers prefer JSON-LD?",
        answer: "JSON-LD provides a machine-readable, unambiguous schema of your content. Unlike unstructured text, JSON-LD graphs out the exact relationships between entities (like an Article, its Author, and an Organization), which helps LLMs ground their responses in factual data."
      }
    ]
  },
  {
    id: 7,
    slug: 'self-hosted-open-source-software-automation',
    title: 'The Shift to Self-Hosted: Open Source Alternatives and Software Automation',
    excerpt: 'Examining the infrastructure shift towards self-hosting enterprise tools to achieve totally integrated automation.',
    metaDescription: 'Explore what software automation is and how self-hosted open-source alternatives enable totally integrated automation without vendor lock-in.',
    category: 'Tech Trends',
    date: 'May 15, 2026',
    readTime: '11 min',
    author: AUTHOR.name,
    authorBio: AUTHOR.bio,
    authorAvatar: AUTHOR.avatar,
    authorLinkedin: AUTHOR.linkedin,
    authorTwitter: AUTHOR.twitter,
    authorPage: AUTHOR.page,
    image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=800&auto=format&fit=crop',
    imageAlt: 'Server racks for self-hosted software',
    keywords: [
      'what is software automation',
      'totally integrated automation',
      'filestack opensource alternative',
      'self hosted free staffing agency recruitment opensource'
    ],
    commentCount: 0,
    faq: [
      {
        question: 'What is software automation in an enterprise context?',
        answer: 'Software automation refers to the use of technology to perform recurring tasks with minimal human intervention. In the enterprise, this involves using orchestration platforms, CI/CD pipelines, and robotic process automation (RPA) to handle infrastructure provisioning, data synchronization, and business workflows.'
      },
      {
        question: 'How does self-hosted open-source software enable totally integrated automation?',
        answer: 'Self-hosted open-source software (FOSS) removes vendor lock-in and allows deep API-level integrations between disparate systems. Unlike SaaS products that limit API calls or gate webhooks behind premium tiers, self-hosted tools provide unrestricted access to databases and event streams, making totally integrated automation achievable without prohibitive costs.'
      },
      {
        question: 'What are the benefits of using a Filestack open-source alternative?',
        answer: 'Using a self-hosted open-source alternative to Filestack (like Uppy combined with MinIO or local Tusd servers) ensures data sovereignty, eliminates per-bandwidth pricing models, and provides complete control over file processing pipelines. This is especially crucial for compliance in healthcare and finance sectors.'
      },
      {
        question: 'Are there self-hosted free staffing agency recruitment open-source platforms?',
        answer: 'Yes, platforms like OpenCATS and other open-source applicant tracking systems (ATS) allow staffing agencies to host their own recruitment software. These self-hosted solutions offer unlimited candidate tracking, custom resume parsing integrations, and automated email workflows without per-seat licensing fees.'
      }
    ]
  },
  {
    id: 8,
    slug: 'applied-machine-learning-healthcare-prediction',
    title: 'From Kaggle to Production: Applied Machine Learning in Healthcare',
    excerpt: 'Deep dive into the architectural challenges of deploying predictive models into secure pipelines.',
    metaDescription: 'How bionic AI ML engineers move hypertension prediction from Kaggle to secure, production-ready healthcare APIs.',
    category: 'AI Research',
    date: 'May 16, 2026',
    readTime: '10 min',
    author: AUTHOR.name,
    authorBio: AUTHOR.bio,
    authorAvatar: AUTHOR.avatar,
    authorLinkedin: AUTHOR.linkedin,
    authorTwitter: AUTHOR.twitter,
    authorPage: AUTHOR.page,
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=800&auto=format&fit=crop',
    imageAlt: 'Medical technology and machine learning data',
    keywords: [
      'hypertension prediction using machine learning kaggle',
      'bionic ai ml engineer machine learning developer',
      'disclosure sentiment: machine learning vs. dictionary methods.'
    ],
    commentCount: 0,
    faq: [
      {
        question: 'What is the difference between hypertension prediction using machine learning on Kaggle versus in production?',
        answer: 'While Kaggle competitions provide clean, static datasets focused purely on model accuracy, production environments require handling noisy, streaming data, addressing HIPAA/GDPR compliance, and deploying models as scalable inference APIs.'
      },
      {
        question: 'What does a bionic AI ML engineer or machine learning developer do differently?',
        answer: 'A bionic AI ML engineer leverages AI coding assistants and automation to drastically accelerate the deployment pipeline. They focus less on writing boilerplate training loops and more on system architecture, data governance, and API design.'
      },
      {
        question: 'How do dictionary methods compare with disclosure sentiment using machine learning in healthcare?',
        answer: 'Dictionary methods rely on rigid keyword matching, which struggles with medical nuances and context. Machine learning models for disclosure sentiment understand semantic meaning, allowing for much higher accuracy in interpreting unstructured clinical notes.'
      }
    ]
  },
  {
    id: 9,
    slug: 'hr-legal-real-estate-tech-architecture',
    title: 'Sector Software Architecture: AI Integration in HR, Legal, and Real Estate Tech',
    excerpt: 'How legacy industries are rebuilding their backends using modern serverless stacks.',
    metaDescription: 'HR tech news today: Rebuilding legal, HR, and real estate legacy monoliths with vector databases and AI integration.',
    category: 'Engineering',
    date: 'May 17, 2026',
    readTime: '12 min',
    author: AUTHOR.name,
    authorBio: AUTHOR.bio,
    authorAvatar: AUTHOR.avatar,
    authorLinkedin: AUTHOR.linkedin,
    authorTwitter: AUTHOR.twitter,
    authorPage: AUTHOR.page,
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop',
    imageAlt: 'Modern office buildings representing real estate and HR tech',
    keywords: [
      'hr tech news today',
      'real estate tech news',
      'legal tech news today ai law firms',
      'droven.io technology blog'
    ],
    commentCount: 0,
    faq: [
      {
        question: 'What is the most significant shift in HR tech news today?',
        answer: 'The major focus in HR tech today is the transition from legacy, monolithic human capital management (HCM) systems to composable architectures. This allows for native AI integration, enabling automated resume screening and dynamic workforce analytics.'
      },
      {
        question: 'How is AI reshaping real estate tech news?',
        answer: 'Real estate tech is rapidly adopting vector databases to power semantic search for property listings. Instead of filtering by square footage, users can query systems for hyper-specific requirements like &quot;open-concept loft with afternoon sun,&quot; shifting the backend from standard SQL to specialized ML pipelines.'
      },
      {
        question: 'What does legal tech news today say about AI in law firms?',
        answer: 'AI is fundamentally altering how law firms operate, primarily through Retrieval-Augmented Generation (RAG). By embedding case law and internal firm documents into secure, private large language models, paralegals and attorneys can instantly surface relevant precedents without risking client confidentiality.'
      },
      {
        question: 'Why are technical blogs like the droven.io technology blog focusing on sector-specific architecture?',
        answer: 'As AI matures, generic integrations are no longer sufficient. Sector-specific architecture requires deep understanding of industry constraints—such as HIPAA in healthcare or SOC2 in legal and HR—making specialized engineering approaches critical for production deployments.'
      }
    ]
  },
  {
    id: 10,
    slug: 'new-gaming-technology-hci',
    title: 'Next-Gen Rendering: What Is New in Gaming Technology and HCI',
    excerpt: 'A technical look at the evolution of game engine architecture, focusing on real-time rendering and backend infrastructure.',
    metaDescription: 'Discover what is new in gaming technology and how new technology impacts human computer interaction at the system level.',
    category: 'Tech Trends',
    date: 'May 18, 2026',
    readTime: '8 min',
    author: AUTHOR.name,
    authorBio: AUTHOR.bio,
    authorAvatar: AUTHOR.avatar,
    authorLinkedin: AUTHOR.linkedin,
    authorTwitter: AUTHOR.twitter,
    authorPage: AUTHOR.page,
    image: 'https://images.unsplash.com/photo-1552820728-8b83bb6b773f?q=80&w=800&auto=format&fit=crop',
    imageAlt: 'Gaming PC hardware and rendering engines',
    keywords: [
      'what is new in gaming technology jogametech',
      'how new technology impact human computer interactin',
      'what new technology is coming scookietech'
    ],
    commentCount: 0,
    faq: [
      {
        question: 'What is new in gaming technology according to platforms like jogametech?',
        answer: 'Recent advancements in gaming technology focus on real-time path tracing, neural rendering powered by AI upscaling (like DLSS 3.5 and FSR 3), and dynamic micro-polygon geometry pipelines that eliminate the need for traditional LOD (Level of Detail) models.'
      },
      {
        question: 'How does new technology impact human computer interaction?',
        answer: 'New technology impacts human-computer interaction (HCI) by shifting from explicit input devices to implicit, multimodal interfaces. Eye-tracking for foveated rendering, spatial audio, and haptic feedback loops in controllers create a closed-loop system where the machine continuously adapts to the user\'s physiological responses.'
      },
      {
        question: 'What new technology is coming as discussed by scookietech?',
        answer: 'The next wave of technology focuses on generative AI integration within game engines, allowing for non-player characters (NPCs) with dynamic, unscripted dialogue trees and procedurally generated environments that maintain architectural coherence without manual level design.'
      }
    ]
  }
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
