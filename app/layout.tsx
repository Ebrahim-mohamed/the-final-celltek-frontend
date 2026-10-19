import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Chrome from '@/components/layout/Chrome';
import Motion from '@/components/layout/Motion';

export const metadata: Metadata = {
  title: { default: 'Celltek Studios | Interactive real estate sales platforms', template: '%s | Celltek Studios' },
  description: 'Interactive sales platforms and 3D visualization for property developers in Egypt and Saudi Arabia.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&family=IBM+Plex+Mono:wght@400;500&display=swap" />
      </head>
      <body>
        <Header />
        {children}
        <Footer />
        <Chrome />
        <Motion />
      </body>
    </html>
  );
}
