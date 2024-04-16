import type { Metadata } from 'next';
import { Alegreya } from 'next/font/google';
import './globals.css';

const alegreya = Alegreya({
  weight: ['400', '500', '700'],
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
      <body className={alegreya.className}>{children}</body>
    </html>
  );
}
