import './globals.css';
import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import { LanguageProvider } from '@/lib/i18n/LanguageContext';

export const metadata: Metadata = {
  title: 'SIMONE ROODSELAAR | SIEMART',
  description: 'Portfolio de l\'artiste Simone Roodselaar (SiemArt)',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <LanguageProvider>
          <Navigation />
          <main>{children}</main>
        </LanguageProvider>
      </body>
    </html>
  );
}
