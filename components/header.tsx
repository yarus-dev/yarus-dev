"use client";

import { useState } from 'react';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import { siteConfig } from '@/site.config';
import { Button } from '@/components/ui/button';
import { Menu, X, Globe } from 'lucide-react';
import { useLanguage } from '@/hooks/use-language';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, toggleLanguage } = useLanguage();
  const pathname = usePathname();
  const navigation = siteConfig.navigation[language];

  const isActive = (path: string) => {
    if (path === '/') return pathname === `/${language}` || pathname === '/';
    return pathname.startsWith(`/${language}${path}`) || pathname.startsWith(path);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href={`/${language}`} className="flex items-center space-x-2">
            <span className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              {siteConfig.title}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link
              href={`/${language}`}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive('/') ? 'text-primary' : 'text-muted-foreground'
              }`}
            >
              {navigation.home}
            </Link>
            <Link
              href={`/${language}/journal`}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive('/journal') ? 'text-primary' : 'text-muted-foreground'
              }`}
            >
              {navigation.journal}
            </Link>
            <Link
              href={`/${language}/achievements`}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive('/achievements') ? 'text-primary' : 'text-muted-foreground'
              }`}
            >
              {navigation.achievements}
            </Link>
            <Link
              href={`/${language}/about`}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive('/about') ? 'text-primary' : 'text-muted-foreground'
              }`}
            >
              {navigation.about}
            </Link>
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleLanguage}
              className="h-8 w-8 p-0"
            >
              <Globe className="h-4 w-4" />
              <span className="sr-only">Toggle language</span>
            </Button>
          </nav>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 border-t">
              <Link
                href={`/${language}`}
                className={`block px-3 py-2 text-base font-medium transition-colors hover:text-primary ${
                  isActive('/') ? 'text-primary' : 'text-muted-foreground'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {navigation.home}
              </Link>
              <Link
                href={`/${language}/journal`}
                className={`block px-3 py-2 text-base font-medium transition-colors hover:text-primary ${
                  isActive('/journal') ? 'text-primary' : 'text-muted-foreground'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {navigation.journal}
              </Link>
              <Link
                href={`/${language}/achievements`}
                className={`block px-3 py-2 text-base font-medium transition-colors hover:text-primary ${
                  isActive('/achievements') ? 'text-primary' : 'text-muted-foreground'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {navigation.achievements}
              </Link>
              <Link
                href={`/${language}/about`}
                className={`block px-3 py-2 text-base font-medium transition-colors hover:text-primary ${
                  isActive('/about') ? 'text-primary' : 'text-muted-foreground'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {navigation.about}
              </Link>
              <div className="px-3 py-2">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => {
                    toggleLanguage();
                    setIsMenuOpen(false);
                  }}
                  className="h-8"
                >
                  <Globe className="h-4 w-4 mr-2" />
                  {language === 'uk' ? 'EN' : 'UK'}
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}