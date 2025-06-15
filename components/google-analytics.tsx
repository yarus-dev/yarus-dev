"use client";

import Script from 'next/script';
import { siteConfig } from '@/site.config';

export function GoogleAnalytics() {
  if (!siteConfig.ga4) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${siteConfig.ga4}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${siteConfig.ga4}');
        `}
      </Script>
    </>
  );
}