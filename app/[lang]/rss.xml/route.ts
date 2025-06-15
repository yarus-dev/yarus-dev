import { NextRequest, NextResponse } from 'next/server';
import { getAllPosts } from '@/lib/content';
import { siteConfig, type Language } from '@/site.config';

export async function GET(
  request: NextRequest,
  { params }: { params: { lang: Language } }
) {
  const { lang } = params;
  
  if (!siteConfig.languages.includes(lang)) {
    return new NextResponse('Language not found', { status: 404 });
  }

  const posts = getAllPosts(lang).slice(0, 20); // Latest 20 posts

  const rss = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${siteConfig.title}</title>
    <description>${siteConfig.description}</description>
    <link>${siteConfig.siteUrl}/${lang}</link>
    <atom:link href="${siteConfig.siteUrl}/${lang}/rss.xml" rel="self" type="application/rss+xml" />
    <language>${lang}</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    ${posts
      .map(
        (post) => `
    <item>
      <title><![CDATA[${post.frontmatter.title}]]></title>
      <description><![CDATA[${post.frontmatter.description}]]></description>
      <link>${siteConfig.siteUrl}/${lang}/${post.category}/${post.slug}</link>
      <guid isPermaLink="true">${siteConfig.siteUrl}/${lang}/${post.category}/${post.slug}</guid>
      <pubDate>${new Date(post.frontmatter.date).toUTCString()}</pubDate>
      <category>${post.category}</category>
    </item>`
      )
      .join('')}
  </channel>
</rss>`;

  return new NextResponse(rss, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}

export async function generateStaticParams() {
  return siteConfig.languages.map((lang) => ({
    lang,
  }));
}