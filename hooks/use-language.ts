"use client";

import { useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { siteConfig, type Language } from '@/site.config';

export function useLanguage() {
  const [language, setLanguage] = useState<Language>(siteConfig.defaultLanguage);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    // Extract language from pathname
    const pathSegments = pathname.split('/').filter(Boolean);
    const currentLang = pathSegments[0] as Language;
    
    if (siteConfig.languages.includes(currentLang)) {
      setLanguage(currentLang);
    } else {
      setLanguage(siteConfig.defaultLanguage);
    }
  }, [pathname]);

  const toggleLanguage = () => {
    const newLanguage = language === 'uk' ? 'en' : 'uk';
    const pathSegments = pathname.split('/').filter(Boolean);
    
    // Remove current language if it exists
    if (siteConfig.languages.includes(pathSegments[0] as Language)) {
      pathSegments.shift();
    }
    
    // Add new language
    const newPath = `/${newLanguage}${pathSegments.length ? '/' + pathSegments.join('/') : ''}`;
    router.push(newPath);
  };

  return { language, toggleLanguage };
}