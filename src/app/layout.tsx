import { Open_Sans } from 'next/font/google';

import { Footer, Header } from '@/components';

import './globals.css';

const sans = Open_Sans({ subsets: ['latin'] });

export const metadata = {
  title: 'Seize Blog',
  description: 'Welcome to Seize Blog',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={sans.className}>
      <body className="flex flex-col min-[375px]:px-2 md:px-40">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
