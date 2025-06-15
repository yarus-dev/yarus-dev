import { MetadataRoute } from 'next';
import { getAllPosts } from '@/lib/content';
import { siteConfig } from '@/site.config';

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts();
  
  const postEntries: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${siteConfig.siteUrl}/${post.language}/${post.category}/${post.slug}`,
    lastModified: new Date(post.frontmatter.date),
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  const staticPages: MetadataRoute.Sitemap = siteConfig.languages.flatMap((lang) => [
    {
      url: `${siteConfig.siteUrl}/${lang}`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${siteConfig.siteUrl}/${lang}/journal`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.8,
    },
    {
      url: `${siteConfig.siteUrl}/${lang}/achievements`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${siteConfig.siteUrl}/${lang}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
  ]);

  return [...staticPages, ...postEntries];
}