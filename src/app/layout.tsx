import type { Metadata } from 'next';
import { Geist, Geist_Mono, Fira_Code } from 'next/font/google';
import Header from '@/components/Header/Header';
import { I18nProvider } from '@/lib/i18n/context';
import { ThemeProvider } from '@/lib/theme/context';
import './globals.scss';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const firaCode = Fira_Code({
  variable: '--font-fira-code',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'DC - Développeur Fullstack',
  description:
    'Portfolio de développeur fullstack spécialisé en React, Next.js et Node.js',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${firaCode.variable}`}
      >
        <ThemeProvider>
          <I18nProvider>
            <div className="app-wrapper">
              <Header />
              <main className="main-content">{children}</main>
            </div>
          </I18nProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}