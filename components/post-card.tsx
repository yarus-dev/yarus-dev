import Link from 'next/link';
import Image from 'next/image';
import { format } from 'date-fns';
import { uk, enUS } from 'date-fns/locale';
import { type Post } from '@/lib/content';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

interface PostCardProps {
  post: Post;
}

export function PostCard({ post }: PostCardProps) {
  const { frontmatter, slug, language, category } = post;
  const locale = language === 'uk' ? uk : enUS;
  
  return (
    <Card className="h-full overflow-hidden hover:shadow-lg transition-shadow duration-300">
      {frontmatter.cover && (
        <div className="aspect-video overflow-hidden">
          <Image
            src={frontmatter.cover}
            alt={frontmatter.title}
            width={400}
            height={225}
            className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
          />
        </div>
      )}
      
      <CardHeader className="pb-2">
        <div className="flex items-center gap-2 mb-2">
          <Badge variant="secondary" className="text-xs">
            {category}
          </Badge>
          <time className="text-xs text-muted-foreground">
            {format(new Date(frontmatter.date), 'PPP', { locale })}
          </time>
        </div>
        
        <Link href={`/${language}/${category}/${slug}`}>
          <h2 className="text-xl font-bold leading-tight hover:text-primary transition-colors cursor-pointer">
            {frontmatter.title}
          </h2>
        </Link>
      </CardHeader>
      
      <CardContent>
        <p className="text-muted-foreground mb-4 line-clamp-3">
          {frontmatter.description}
        </p>
        
        {frontmatter.tags.length > 0 && (
          <div className="flex flex-wrap gap-1">
            {frontmatter.tags.slice(0, 3).map((tag) => (
              <Badge key={tag} variant="outline" className="text-xs">
                {tag}
              </Badge>
            ))}
            {frontmatter.tags.length > 3 && (
              <Badge variant="outline" className="text-xs">
                +{frontmatter.tags.length - 3}
              </Badge>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
}