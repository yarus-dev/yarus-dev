export const siteConfig = {
  title: 'Usenko.pp.ua',
  description: 'Territory of ideas, projects and power',
  author: 'Yaroslav Usenko',
  defaultLanguage: 'uk' as const,
  languages: ['uk', 'en'] as const,
  categories: ['psychology', 'programming', 'embedded', 'management', 'philosophy', 'insights'] as const,
  ga4: process.env.GA_ID,
  siteUrl: process.env.SITE_URL || 'https://usenko.pp.ua',
  social: {
    twitter: '@yarusenk',
    github: 'yarusenk',
    linkedin: 'yaroslav-usenko',
  },
  navigation: {
    uk: {
      home: 'Головна',
      journal: 'Журнал',
      achievements: 'Досягнення',
      about: 'Про мене',
    },
    en: {
      home: 'Home',
      journal: 'Journal',
      achievements: 'Achievements',
      about: 'About',
    },
  },
  pagination: {
    postsPerPage: 6,
  },
} as const;

export type Language = typeof siteConfig.languages[number];
export type Category = typeof siteConfig.categories[number];