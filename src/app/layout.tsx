import type { Metadata } from "next";
import { PT_Serif, PT_Mono } from "next/font/google";
import "./globals.css";

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
      className={`${ptSerif.variable} ${ptMono.variable} antialiased w-screen min-h-screen h-full`}
    >
      <body className="w-full h-full flex flex-col items-start justify-stretch">
        <header>header</header>
        <main className="flex-1 w-full">{children}</main>
        <footer>footer</footer>
      </body>
    </html>
  );
}
