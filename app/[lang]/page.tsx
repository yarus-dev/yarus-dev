import { notFound } from 'next/navigation';
import { getAllPosts } from '@/lib/content';
import { siteConfig, type Language } from '@/site.config';
import { PostCard } from '@/components/post-card';

interface HomePageProps {
  params: {
    lang: Language;
  };
}

export async function generateStaticParams() {
  return siteConfig.languages.map((lang) => ({
    lang,
  }));
}

export default function HomePage({ params }: HomePageProps) {
  if (!siteConfig.languages.includes(params.lang)) {
    notFound();
  }

  const allPosts = getAllPosts(params.lang);
  const featuredPosts = allPosts.slice(0, 6);

  const welcomeText = params.lang === 'uk' 
    ? 'Територія ідей, проектів та влади'
    : 'Territory of ideas, projects and power';

  const recentPostsText = params.lang === 'uk'
    ? 'Останні записи'
    : 'Recent Posts';

  return (
    <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
          {siteConfig.title}
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
          {welcomeText}
        </p>
        <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
      </section>

      {/* Recent Posts */}
      {featuredPosts.length > 0 && (
        <section>
          <h2 className="text-3xl font-bold mb-8 text-center">{recentPostsText}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredPosts.map((post) => (
              <PostCard key={`${post.category}-${post.slug}-${post.language}`} post={post} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}