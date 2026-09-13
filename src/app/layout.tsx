import type { Metadata, Viewport } from 'next';
import './globals.css';

export const viewport: Viewport = {
  themeColor: '#FF5500',
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  title: 'VANARA FORCE | Sanctuary of Primal Strength & Advanced Bio-Recovery',
  description: 'India’s premier luxury fitness sanctuary. Merging primal biomechanical strength, Olympic calisthenics rigs, and sub-zero contrast bio-recovery suites in Mumbai and Bengaluru.',
  keywords: ['Vanara Force', 'Luxury Gym Mumbai', 'Cryotherapy Plunge', 'Calisthenics Rig', 'Turkish Steam', 'Reformer Pilates', 'Bandra Gym', 'Juhu Fitness Club', 'Koramangala Wellness Hub'],
  openGraph: {
    title: 'VANARA FORCE | Primal Strength & Luxury Recovery',
    description: 'Experience India’s foremost luxury fitness sanctuary. Heavy biomechanics, calisthenics rigs, and cryo-contrast bio-recovery suites.',
    url: 'https://vanaraforce.com',
    siteName: 'VANARA FORCE',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1200&auto=format&fit=crop',
        width: 1200,
        height: 630,
        alt: 'Vanara Force Luxury Fitness Sanctuary',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
