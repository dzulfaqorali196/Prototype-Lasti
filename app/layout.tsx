import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/toaster';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Gojek Rewards | Misi & Tantangan',
  description: 'Selesaikan misi, kumpulkan poin, dan dapatkan reward menarik dari Gojek. Nikmati berbagai voucher GoRide, GoFood, dan GoPay cashback.',
  keywords: 'gojek rewards, gojek points, gojek missions, gojek challenges, gojek vouchers',
  authors: [{ name: 'Gojek' }],
  openGraph: {
    title: 'Gojek Rewards | Misi & Tantangan',
    description: 'Selesaikan misi, kumpulkan poin, dan dapatkan reward menarik dari Gojek',
    images: ['/gojek.png'],
    type: 'website',
    locale: 'id_ID',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gojek Rewards | Misi & Tantangan',
    description: 'Selesaikan misi, kumpulkan poin, dan dapatkan reward menarik dari Gojek',
    images: ['/gojek.png'],
  },
  icons: {
    icon: '/gojek.png',
    apple: '/gojek.png',
  },
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
  robots: 'index, follow',
  themeColor: '#00AA13',
  manifest: '/manifest.json',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}