import type { Metadata } from "next";
import { PT_Serif, PT_Mono } from "next/font/google";
import { GoogleTagManager } from "@next/third-parties/google";
import "./globals.css";
import "@/lib/firebase";
import { cn } from "@/lib/cn";

const ptSerif = PT_Serif({
  variable: "--font-pt-serif",
  subsets: ["cyrillic", "latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  preload: true,
  display: "swap",
  fallback: ["Georgia", "Georgia", "Cambria", "Times New Roman", "serif"],
});

const ptMono = PT_Mono({
  variable: "--font-pt-mono",
  subsets: ["cyrillic", "latin"],
  weight: "400",
  style: "normal",
  display: "swap",
  fallback: ["Courier New", "Courier", "Lucida Console", "monospace"],
});

export const metadata: Metadata = {
  title: "Ярослав Усенко",
  description: "Штурмовик. Інженер. Засновик.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(
        ptSerif.variable,
        ptMono.variable,
        "antialiased",
        "size-full",
        "min-h-screen"
      )}
    >
      <GoogleTagManager gtmId={`GTM-${process.env.GTM}`} />
      <body className="w-full h-full flex flex-col items-start justify-stretch">
        <header>header</header>
        <main className="flex-1 size-full">{children}</main>
        <footer>footer</footer>
      </body>
    </html>
  );
}
