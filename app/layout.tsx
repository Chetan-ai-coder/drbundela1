import type { Metadata, Viewport } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { LanguageProvider } from '@/context/LanguageContext'
import { CallNowBanner } from '@/components/call-now-banner'
import './globals.css'
import { WelcomeModal } from '@/components/welcome-modal'
import { StickyBookButton } from '@/components/book-now'

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: '--font-serif'
});

const inter = Inter({
  subsets: ["latin"],
  variable: '--font-sans'
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.drbundela.com'),

  title: 'Best Homoeopathy Clinic in Jhansi | Dr. R.S.S. Bundela - Natural Healing',
  description: 'Top-rated homoeopathy clinic in Jhansi. Dr. R.S.S. Bundela provides expert natural treatments for hair loss, skin issues, thyroid, PCOS, and allergies. Safe and permanent healing solutions in Jhansi.',
  keywords: 'homoeopathy clinic in Jhansi, best homoeopath in Jhansi, natural healing Jhansi, hair loss treatment Jhansi, Dr. RSS Bundela, homoeopathy doctor Jhansi',
  authors: [{ name: 'Dr. R.S.S. Bundela' }],
  alternates: {
    canonical: 'https://www.drbundela.com',
  },
  openGraph: {
    title: 'Dr. R.S.S. Bundela | Trusted Homoeopathy Clinic in Jhansi',
    description: 'Expert homoeopathic care for chronic diseases in Jhansi. Experience natural healing without side effects.',
    url: 'https://www.drbundela.com',
    siteName: 'Dr. R.S.S. Bundela Homoeopathy',
    locale: 'en_IN',
    type: 'website',
  },
}

export const viewport: Viewport = {
  themeColor: '#b03034',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  // Local Business Schema for Google Maps/Local Search
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalBusiness',
    'name': 'Dr. R.S.S. Bundela Homoeopathy Clinic',
    'alternateName': 'Bundela Homoeopathy Jhansi',
    'url': 'https://www.drbundela.com',
    'logo': 'https://www.drbundela.com/logo.png', // Update with actual logo URL
    'address': {
      '@type': 'PostalAddress',
      'addressLocality': 'Jhansi',
      'addressRegion': 'Uttar Pradesh',
      'addressCountry': 'IN',
    },
    'geo': {
      '@type': 'GeoCoordinates',
      'latitude': '25.4484', // Standard Jhansi Lat
      'longitude': '78.5685', // Standard Jhansi Long
    },
    'description': 'Leading homoeopathy clinic in Jhansi providing natural medical solutions.',
    'medicalSpecialty': 'Homoeopathic',
  };

  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable} bg-background`}>
      <head>
        {/* Injecting Local SEO Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased relative">
        <LanguageProvider>
          {children}
          <CallNowBanner />
          <WelcomeModal />
          <StickyBookButton />
        </LanguageProvider>
        {process.env.NODE_ENV === 'production' && (
          <>
            <Analytics />
            <SpeedInsights />
          </>
        )}
      </body>
    </html>
  )
}