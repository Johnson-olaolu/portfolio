export interface RoleEntry {
  company: string;
  role: string;
  location: string;
  period: string;
  epigraph?: string;
  highlights: string[];
  stackNote: string;
}

export interface SkillCategory {
  roman: string;
  title: string;
  skills: string[];
}

export interface CertificationItem {
  title: string;
  issuer: string;
  date: string;
}

export interface ChapterSpread {
  id: string;
  spreadNumber: number;
  label: string;
  shortTitle: string;
  tocSubtitle: string;
  leftFolio: string;
  rightFolio: string;
}

export const AUTHOR_INFO = {
  bookTitle: 'My Life Is a Book, Please Read',
  subtitle: 'Notes on Software Architecture, Resilience, and Craft',
  edition: 'First Edition · Vol. I (2017 — 2026)',
  fullName: 'Johnson Oworitshe Olaoluwapo',
  shortName: 'Johnson Olaoluwa',
  title: 'Senior Software Engineer',
  email: 'johnsonolaolu@gmail.com',
  phone: '+2347053332295',
  linkedinUrl: 'https://linkedin.com/in/johnson-olaoluwa',
  linkedinHandle: 'linkedin.com/in/johnson-olaoluwa',
  githubUrl: 'https://github.com/Johnson-olaolu',
  githubHandle: 'github.com/Johnson-olaolu',
  cvPdfPath: '/assets/aistudio/Johnson_Oworitshe_Olaoluwa_cv_9a0dbb4b.pdf',
  location: 'Lagos, Nigeria · Global Remote',
  summary:
    'Senior Software Engineer with over 5 years of experience working autonomously on large-scale enterprise, B2B, and B2C software. With expertise in both cutting-edge technologies and legacy systems, I excel at building modern solutions while maintaining and improving older platforms—ensuring smooth transitions, seamless integration, and business processes enhanced through practical AI technologies.',
  dedication:
    'To every system kept upright past midnight, every legacy database migrated without a dropped byte, and every engineer who learns by building.',
};

export const IMPACT_LEDGER = [
  { figure: '5+ Years', detail: 'Autonomous enterprise, B2B & B2C engineering' },
  { figure: '1M+ Users', detail: 'Client platforms managed with high availability' },
  { figure: '600,000+', detail: 'Users served by Nosh 2025 Recap & EarlyPay reach' },
  { figure: '74% Cut', detail: 'Monthly AWS expenditure reduction at Guideli AI' },
  { figure: '80%+ Drop', detail: 'Production bugs cut via Jest TDD & order time via RAG AI' },
  { figure: '99.9%', detail: 'Measured production uptime across banking & AI platforms' },
];

export const CHAPTER_SPREADS: ChapterSpread[] = [
  {
    id: 'cover',
    spreadNumber: 0,
    label: 'Cover',
    shortTitle: 'My Life Is a Book, Please Read',
    tocSubtitle: 'Clothbound Cover & Dedication',
    leftFolio: 'Cover',
    rightFolio: 'Cover',
  },
  {
    id: 'contents',
    spreadNumber: 1,
    label: 'Front Matter',
    shortTitle: 'Title Page & Table of Contents',
    tocSubtitle: 'Colophon, coordinates & chapter directory',
    leftFolio: 'p. i',
    rightFolio: 'p. ii',
  },
  {
    id: 'prologue',
    spreadNumber: 2,
    label: 'Prologue',
    shortTitle: 'The Engineer’s Craft',
    tocSubtitle: 'Professional summary, philosophy & impact ledger',
    leftFolio: 'p. 01',
    rightFolio: 'p. 02',
  },
  {
    id: 'chapter-1',
    spreadNumber: 3,
    label: 'Chapter I',
    shortTitle: 'Foundations & The Plant Floor',
    tocSubtitle: 'University of Ibadan, Nasco Group & Freelance Roots (2017–2020)',
    leftFolio: 'p. 03',
    rightFolio: 'p. 04',
  },
  {
    id: 'chapter-2',
    spreadNumber: 4,
    label: 'Chapter II',
    shortTitle: 'Leadership & AI Commerce',
    tocSubtitle: 'Global Impact IT Company — Team Lead & RAG Agents (2020–2024)',
    leftFolio: 'p. 05',
    rightFolio: 'p. 06',
  },
  {
    id: 'chapter-3',
    spreadNumber: 5,
    label: 'Chapter III',
    shortTitle: 'Founder’s Crucible & Frontend Craft',
    tocSubtitle: 'Cargle.co (CTO & Co-Founder) & Zeedas Inc (2021–2023)',
    leftFolio: 'p. 07',
    rightFolio: 'p. 08',
  },
  {
    id: 'chapter-4',
    spreadNumber: 6,
    label: 'Chapter IV',
    shortTitle: 'Banking at National Scale',
    tocSubtitle: 'Mkobo Bank — Remita EarlyPay, USSD & Liveliness AI (2022–2023)',
    leftFolio: 'p. 09',
    rightFolio: 'p. 10',
  },
  {
    id: 'chapter-5',
    spreadNumber: 7,
    label: 'Chapter V',
    shortTitle: 'Cloud Architecture & High Scale',
    tocSubtitle: 'Guideli AI (New York) & Nosh NG (Lagos) (2024–2025)',
    leftFolio: 'p. 11',
    rightFolio: 'p. 12',
  },
  {
    id: 'appendix',
    spreadNumber: 8,
    label: 'Appendix A',
    shortTitle: 'Technical Lexicon & Credentials',
    tocSubtitle: 'Full engineering skillset, AWS & IBM AI certifications',
    leftFolio: 'p. 13',
    rightFolio: 'p. 14',
  },
  {
    id: 'epilogue',
    spreadNumber: 9,
    label: 'Epilogue',
    shortTitle: 'Colophon & Leave a Note',
    tocSubtitle: 'Direct correspondence, GitHub, LinkedIn & inquiry margin',
    leftFolio: 'p. 15',
    rightFolio: 'p. 16',
  },
];

export const ROLES_DATA: Record<string, RoleEntry> = {
  nasco: {
    company: 'Nasco Group',
    role: 'Student Intern',
    location: 'Jos, Plateau, Nigeria',
    period: 'Aug 2017 — Mar 2018',
    stackNote: 'Industrial Operations · Staff Coordination · Formula Automation',
    highlights: [
      'Coordinated and assigned tasks to over 30 contract staff in the engineering department while liaising directly with plant supervisors.',
      'Contributed to brainstorming meetings to develop marketing ideas for collateral and digital content, leading to the redesign of 2 products.',
      'Maintained and monitored facilities of the plant alongside the engineering team, achieving a 30% decrease in equipment shutdown.',
      'Created a Microsoft Excel system for generating detergent mixing formulas, reducing calculation time from over 20 minutes to less than 1 minute.',
    ],
  },
  freelance: {
    company: 'Fiverr & Upwork',
    role: 'Freelance Web Developer',
    location: 'Lagos, Nigeria',
    period: 'Sept 2018 — Jan 2020',
    stackNote: 'PHP · WordPress · React · Node.js',
    highlights: [
      'Developed and maintained over 10 client websites across 2 years using PHP, WordPress, React, and Node.js.',
      'Implemented bespoke interactive features to fulfill complex client project designs, maintaining over 90% client satisfaction.',
    ],
  },
  globalImpact: {
    company: 'Global Impact IT Company',
    role: 'Software Engineering Team Lead',
    location: 'Lagos, Nigeria',
    period: 'Aug 2020 — Apr 2024',
    stackNote: 'NestJS · Next.js · MongoDB · Groq AI · Ollama · LangChain · WordPress CMS',
    highlights: [
      'Built an eCommerce platform using NestJS, Next.js, and MongoDB featuring an AI agent powered by Groq AI, Ollama, and LangChain with a RAG pipeline integrated into the product database—delivering personalized chat suggestions and reducing average time to place orders by over 80%.',
      'Led and mentored a team of 6 engineers, conducting regular code reviews, one-on-one mentoring, and progress meetings to elevate productivity.',
      'Collaborated with the engineering team to publish weekly technical articles, increasing company visibility and driving over 200% growth in platform traffic.',
      'Implemented an Agile workflow that improved deadline attainment by 60%, strengthened customer success rates, and drove a 200%+ increase in referrals.',
      'Migrated the legacy WordPress stack to a headless WordPress CMS backend paired with a modern Next.js frontend, increasing proposal success by 30%.',
      'Managed over 6 client platforms serving more than 1 million active users—handling security hardening, SEO, A/B testing, and performance tuning.',
    ],
  },
  cargle: {
    company: 'Cargle.co',
    role: 'CTO and Co-Founder',
    location: 'Lagos, Nigeria',
    period: 'Dec 2021 — Jan 2023',
    stackNote: 'React Native · Google Play Store · Full-Stack Architecture · SQL Mentorship',
    highlights: [
      'Built and launched a money management mobile app in React Native and deployed it to Google Play Store, enabling shops and agents to manage cash collection and banking logistics across 200+ businesses—improving transaction efficiency by 50%.',
      'Developed a scalable customer service platform featuring ticket tracking, live chat, and automated ticket assignment, improving response times by 40%.',
      'Led the development of over 5 products in 6 months while refactoring existing codebases for maintainability and speed.',
      'Organized orientation and onboarding programs for 6 new technical team members, reducing ramp-up time by 30%, and taught free SQL training sessions for students.',
      'Produced detailed design and build specifications to uphold quality control, achieving over 80% client satisfaction.',
    ],
  },
  zeedas: {
    company: 'Zeedas Inc',
    role: 'Frontend Developer',
    location: 'Lagos, Nigeria',
    period: 'Jan 2022 — Oct 2022',
    stackNote: 'React · Firebase · React-DnD · Zod · Custom Graph Library',
    highlights: [
      'Led ongoing platform redesigns, custom component architecture, and intricate UI animations.',
      'Spearheaded creation of a custom graph library tracking developer productivity, bug resolution velocity, and delivery metrics.',
      'Implemented real-time project tracking using React and Firebase integrated with Slack, GitHub, GitLab, Jira, and WakaTime—cutting cross-platform context switching by 40%.',
      'Built an interactive Kanban board with React-DnD and Zod, contributing to revenue growth and a 100% increase in companies onboarded to the portfolio.',
    ],
  },
  mkobo: {
    company: 'Mkobo Bank',
    role: 'Full Stack Developer',
    location: 'Lagos, Nigeria',
    period: 'Oct 2022 — May 2023',
    stackNote: 'Next.js · TypeScript · Docker · Java · Spring Boot · Python · OpenCV · USSD',
    highlights: [
      'Built the Mkobo Bank web application using Next.js, TypeScript, and Docker—improving page load speeds by 30% while sustaining 99.9% uptime.',
      'Engineered a Java and Spring Boot API integrating with Remita (Nigeria’s largest payroll provider) for EarlyPay, expanding the addressable client base from 40,000 to 600,000 and cutting sign-up time by over 80%.',
      'Created and deployed an offline-accessible USSD banking service using Java, Spring Boot, and Africa’s Talking API, reaching over 50,000 users without internet connectivity.',
      'Built the Mkobo liveliness verification check application using React, Python, and OpenCV to verify customers, curb fraud, and save over $1,000 annually in third-party fees.',
      'Collaborated with the engineering team to redesign the public Mkobo web experience using Next.js.',
    ],
  },
  guideli: {
    company: 'Guideli AI',
    role: 'Senior Software Engineer',
    location: 'New York, United States',
    period: 'Feb 2024 — Aug 2024',
    stackNote: 'Next.js · NestJS · AWS (RDS, S3, ELB, Mailer) · Jest TDD · CI/CD',
    highlights: [
      'Architected and delivered Guideli’s B2C and B2B MVP platforms on schedule using Next.js and NestJS backed by AWS Load Balancing, RDS, S3, and Mailer—sustaining 99.9% uptime.',
      'Implemented an automated CI/CD pipeline with robust testing frameworks, reducing manual deployment errors by over 50% and accelerating feature rollouts.',
      'Built a reusable component library tailored to Guideli’s design language and accelerated via AI tooling, speeding up new feature development by over 200%.',
      'Instituted Test-Driven Development (TDD) with Jest, cutting production bugs by over 80%.',
      'Streamlined AWS infrastructure—right-sizing databases, pruning redundant services, and adding cost/downtime alerts—to achieve a 74% reduction in monthly AWS spend.',
    ],
  },
  nosh: {
    company: 'Nosh NG',
    role: 'Senior Software Engineer',
    location: 'Lagos, Nigeria',
    period: 'March 2025',
    stackNote: 'Redis · MongoDB Aggregations · Authentication Security · Transactions',
    highlights: [
      'Hardened the authentication system by introducing advanced token validation with Redis and automated session logout, mitigating unauthorized access from previous devices.',
      'Engineered the 2025 Year-in-Review Recap pipeline using MongoDB aggregations and Redis caching, delivering a fast, accessible annual recap to over 600,000 users.',
      'Rebuilt the core transaction module while preserving strict backward compatibility, unlocking richer transaction visibility for end users.',
    ],
  },
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    roman: 'I',
    title: 'Frontend & Interface Architecture',
    skills: [
      'HTML5',
      'CSS3',
      'SCSS',
      'JavaScript',
      'TypeScript',
      'React.js',
      'React Native',
      'Next.js',
      'Vue.js',
      'Angular.js',
      'jQuery',
      'Tailwind CSS',
      'Bootstrap',
      'WordPress',
    ],
  },
  {
    roman: 'II',
    title: 'Backend, Systems & AI Engineering',
    skills: [
      'Node.js',
      'Express.js',
      'NestJS',
      'PHP (Laravel, Symfony, CodeIgniter)',
      'Python (Django, FastAPI, TensorFlow)',
      'Java (Spring Boot)',
      'Groq AI',
      'Ollama',
      'LangChain & RAG Pipelines',
      'OpenCV',
    ],
  },
  {
    roman: 'III',
    title: 'Databases, Brokers & Caching',
    skills: [
      'PostgreSQL',
      'MySQL',
      'MongoDB',
      'Redis',
      'RabbitMQ',
      'Apache Kafka',
      'Database Administration',
    ],
  },
  {
    roman: 'IV',
    title: 'Cloud, DevOps & Embedded',
    skills: [
      'AWS (RDS, S3, ELB)',
      'Google Cloud (GCP)',
      'Microsoft Azure',
      'Hetzner',
      'Heroku',
      'Docker',
      'Kubernetes',
      'CI/CD Pipelines',
      'Linux & Ubuntu Administration',
      'Shell Scripting / Bash',
      'Release Management',
      'Monitoring & Alerting',
      'Git & Jira',
      'Arduino & Microcontrollers',
    ],
  },
];

export const EDUCATION_RECORD = {
  degree: 'B.Eng. in Industrial and Production Engineering',
  institution: 'University of Ibadan',
  date: 'Sept 2019',
  reflection:
    'Rooted my systems thinking in operational efficiency, human factors, and industrial process optimization—disciplines that later translated seamlessly into distributed software engineering.',
};

export const CERTIFICATIONS: CertificationItem[] = [
  {
    title: 'AWS Certified Solutions Architect – Associate',
    issuer: 'Amazon Web Services (AWS)',
    date: 'Aug 2025',
  },
  {
    title: 'AWS Certified Developer – Associate',
    issuer: 'Amazon Web Services (AWS)',
    date: 'Feb 2026',
  },
  {
    title: 'IBM AI Engineering Professional Certificate',
    issuer: 'IBM',
    date: 'March 2026',
  },
];
