import type { Metadata } from 'next';
import { Noto_Sans } from 'next/font/google';
import { Navbar } from './components/Navbar';
import './globals.css';

const notoSans = Noto_Sans({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  variable: '--font-alegreya',
});

export const metadata: Metadata = {
  title: 'Zameendar',
  description: 'Zameendar.io - web-app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={notoSans.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
