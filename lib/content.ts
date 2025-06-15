import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { siteConfig, type Language, type Category } from '@/site.config';

const contentDirectory = path.join(process.cwd(), 'content');

export interface PostFrontmatter {
  title: string;
  date: string;
  tags: string[];
  category: Category;
  draft: boolean;
  description: string;
  cover?: string;
}

export interface Post {
  slug: string;
  frontmatter: PostFrontmatter;
  content: string;
  language: Language;
  category: Category;
}

export function getAllPosts(language?: Language, category?: Category): Post[] {
  const posts: Post[] = [];

  // Get all categories to scan
  const categoriesToScan = category ? [category] : siteConfig.categories;

  for (const cat of categoriesToScan) {
    const categoryPath = path.join(contentDirectory, cat);
    
    if (!fs.existsSync(categoryPath)) continue;

    const files = fs.readdirSync(categoryPath);
    
    for (const file of files) {
      if (!file.endsWith('.mdx')) continue;

      // Extract language from filename (e.g., "post.uk.mdx" or "post.en.mdx")
      const fileParts = file.replace('.mdx', '').split('.');
      const fileLanguage = fileParts.pop() as Language;
      const slug = fileParts.join('.');

      // Skip if language filter is specified and doesn't match
      if (language && fileLanguage !== language) continue;

      // Skip if this language is not supported
      if (!siteConfig.languages.includes(fileLanguage)) continue;

      const filePath = path.join(categoryPath, file);
      const fileContent = fs.readFileSync(filePath, 'utf8');
      const { data: frontmatter, content } = matter(fileContent);

      // Skip draft posts in production
      if (process.env.NODE_ENV === 'production' && frontmatter.draft) continue;

      posts.push({
        slug,
        frontmatter: {
          ...frontmatter,
          category: cat,
        } as PostFrontmatter,
        content,
        language: fileLanguage,
        category: cat,
      });
    }
  }

  // Sort posts by date (newest first)
  return posts.sort((a, b) => new Date(b.frontmatter.date).getTime() - new Date(a.frontmatter.date).getTime());
}

export function getPostBySlug(slug: string, category: Category, language: Language): Post | null {
  try {
    const filePath = path.join(contentDirectory, category, `${slug}.${language}.mdx`);
    
    if (!fs.existsSync(filePath)) {
      // Try fallback to other language
      const fallbackLanguage = language === 'uk' ? 'en' : 'uk';
      const fallbackPath = path.join(contentDirectory, category, `${slug}.${fallbackLanguage}.mdx`);
      
      if (!fs.existsSync(fallbackPath)) return null;
      
      const fileContent = fs.readFileSync(fallbackPath, 'utf8');
      const { data: frontmatter, content } = matter(fileContent);
      
      return {
        slug,
        frontmatter: {
          ...frontmatter,
          category,
        } as PostFrontmatter,
        content,
        language: fallbackLanguage,
        category,
      };
    }

    const fileContent = fs.readFileSync(filePath, 'utf8');
    const { data: frontmatter, content } = matter(fileContent);

    return {
      slug,
      frontmatter: {
        ...frontmatter,
        category,
      } as PostFrontmatter,
      content,
      language,
      category,
    };
  } catch (error) {
    return null;
  }
}

export function getPostsByCategory(category: Category, language?: Language): Post[] {
  return getAllPosts(language).filter(post => post.category === category);
}

export function paginatePosts(posts: Post[], page: number = 1, limit: number = siteConfig.pagination.postsPerPage) {
  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;
  const paginatedPosts = posts.slice(startIndex, endIndex);
  
  return {
    posts: paginatedPosts,
    currentPage: page,
    totalPages: Math.ceil(posts.length / limit),
    totalPosts: posts.length,
    hasNextPage: endIndex < posts.length,
    hasPrevPage: page > 1,
  };
}