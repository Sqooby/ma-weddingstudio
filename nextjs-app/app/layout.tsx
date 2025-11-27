import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'M&A Wedding || Fotografia ślubna i film',
  description: 'Uchwycamy piękno chwil! Profesjonalna fotografia ślubna i filmowanie w Rzeszowie.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body>{children}</body>
    </html>
  );
}
