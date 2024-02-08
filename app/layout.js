import "./globals.css";

export const metadata = {
  title: "Ярослав Усенко",
  description: "Я люблю читати, програмувати, конструювати, рефлексувати та заробляти.",
  generator: 'Next.js',
  applicationName: 'YarUs app',
  referrer: 'origin-when-cross-origin',
  keywords: ['Ярослав Усенко', 'Красавчик', 'Розумник'],
  authors: [{ name: 'Yaroslav Usenko', url: 'https://www.yarus.app' }],
  creator: 'Yaroslav Usenko',
  publisher: 'Yaroslav Usenko',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ua">
      <body>{children}</body>
    </html>
  );
}
