import { notFound } from 'next/navigation';
import { getPostsByCategory, paginatePosts } from '@/lib/content';
import { siteConfig, type Language } from '@/site.config';
import { PostCard } from '@/components/post-card';
import { Pagination } from '@/components/pagination';

interface AchievementsPageProps {
  params: {
    lang: Language;
  };
}

export async function generateStaticParams() {
  return siteConfig.languages.map((lang) => ({
    lang,
  }));
}

export default function AchievementsPage({ params }: AchievementsPageProps) {
  if (!siteConfig.languages.includes(params.lang)) {
    notFound();
  }

  // This would be a special category or we could create a separate content structure
  // For now, let's assume achievements are posts with a special tag or in a specific category
  const allPosts = getPostsByCategory('insights', params.lang); // or create 'achievements' category
  const { posts, currentPage, totalPages } = paginatePosts(allPosts, 1);

  const title = params.lang === 'uk' ? 'Досягнення' : 'Achievements';
  const description = params.lang === 'uk' 
    ? 'Проекти, здобутки та важливі віхи'
    : 'Projects, accomplishments and important milestones';

  return (
    <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
        <p className="text-xl text-muted-foreground">{description}</p>
        <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mt-6 rounded-full"></div>
      </div>

      {posts.length > 0 ? (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <PostCard key={`${post.category}-${post.slug}-${post.language}`} post={post} />
            ))}
          </div>
          
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            basePath={`/${params.lang}/achievements`}
          />
        </>
      ) : (
        <div className="text-center py-12">
          <p className="text-muted-foreground text-lg">
            {params.lang === 'uk' 
              ? 'Поки що немає записів про досягнення.'
              : 'No achievements recorded yet.'}
          </p>
        </div>
      )}
    </div>
  );
}