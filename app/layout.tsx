import './globals.css';
import type { Metadata } from 'next';
import { siteConfig } from '@/site.config';
import { ThemeProvider } from '@/components/theme-provider';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { GoogleAnalytics } from '@/components/google-analytics';

export const metadata: Metadata = {
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.title}`,
  },
  description: siteConfig.description,
  author: siteConfig.author,
  keywords: ['personal blog', 'knowledge hub', 'psychology', 'programming', 'management'],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: 'website',
    siteName: siteConfig.title,
    title: siteConfig.title,
    description: siteConfig.description,
    url: siteConfig.siteUrl,
  },
  twitter: {
    card: 'summary_large_image',
    creator: siteConfig.social.twitter,
  },
  alternates: {
    canonical: siteConfig.siteUrl,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="uk" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
          {siteConfig.ga4 && <GoogleAnalytics />}
        </ThemeProvider>
      </body>
    </html>
  );
}