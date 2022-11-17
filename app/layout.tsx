'use client';

import { Archivo } from '@next/font/google';
import { clsx } from 'clsx';
import { Footer } from 'components/Footer';
import { Navbar } from 'components/Navbar';
import './globals.css';

const font = Archivo({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-archivo',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className={clsx(font.variable, 'dark')} lang="en">
      <head />
      <body className="max-w-screen-xl mx-auto flex min-h-screen p-4 flex-col relative darkmode">
        <Navbar />
        <main className="flex-grow mt-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
