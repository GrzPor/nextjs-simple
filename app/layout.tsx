import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import { Roboto } from 'next/font/google';

const roboto = Roboto({ subsets: ['latin-ext'], weight: ['400', '700'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Next.js project with Tailwind CSS, TypeScript, and JavaScript',
  keywords: ['Next.js', 'React', 'Tailwind CSS', 'TypeScript', 'JavaScript'],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.className}`}>
        <Navbar />
        <main className="max-w-3xl mx-auto py-10">{children}</main>
      </body>
    </html>
  );
}
