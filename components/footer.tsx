import Link from 'next/link';
import { siteConfig } from '@/site.config';
import { Github, Twitter, Linkedin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-background">
      <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex flex-col items-center md:items-start">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} {siteConfig.author}. All rights reserved.
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              Territory of ideas, projects and power
            </p>
          </div>
          
          <div className="flex items-center space-x-4">
            <Link
              href={`https://github.com/${siteConfig.social.github}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link
              href={`https://twitter.com/${siteConfig.social.twitter}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link
              href={`https://linkedin.com/in/${siteConfig.social.linkedin}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}