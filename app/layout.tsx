import type { Metadata, Viewport } from 'next';
import { Plus_Jakarta_Sans, Outfit } from 'next/font/google';
import './globals.css';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ChatWidget from '@/components/ChatWidget';
import MobileStickyBar from '@/components/MobileStickyBar';
import StickyDesktopCTA from '@/components/StickyDesktopCTA';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import Analytics from '@/components/Analytics';
import CallTracker from '@/components/CallTracker';
import SiteChrome from '@/components/SiteChrome';
import { Suspense } from 'react';

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800'],
});

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
});

const siteUrl = 'https://www.urbanshopfronts.co.uk';

export const metadata: Metadata = {
  title: {
    template: '%s | Urban Shopfronts',
    default: 'Urban Shopfronts | Professional Shopfront Installation UK',
  },
  description:
    'Leading UK shopfront specialists — aluminium shopfronts, roller shutters, security & automatic doors. Nationwide installation, 24/7 emergency callout, free site surveys. Companies House registered.',
  keywords: [
    'shopfront installation UK',
    'aluminium shopfronts',
    'roller shutters',
    'security doors',
    'automatic doors',
    'bi-fold doors',
    'fire doors',
    'shopfront repairs',
    'emergency shopfront callout',
    'shop front company UK',
    'Urban Shopfronts',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: siteUrl,
    siteName: 'Urban Shopfronts',
    title: 'Urban Shopfronts | Professional Shopfront Installation UK',
    description:
      'Leading UK shopfront specialists — aluminium shopfronts, roller shutters, security & automatic doors. Nationwide installation, 24/7 emergency callout, free site surveys.',
    images: [
      {
        url: `${siteUrl}/assets/shopfront-2.jpeg`,
        width: 1200,
        height: 630,
        alt: 'Urban Shopfronts — Professional Shopfront Installation',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Urban Shopfronts | Professional Shopfront Installation UK',
    description:
      'Leading UK shopfront specialists — aluminium shopfronts, roller shutters, security & automatic doors. Nationwide installation, 24/7 emergency callout.',
    images: [`${siteUrl}/assets/shopfront-2.jpeg`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: siteUrl,
    languages: {
      'en-GB': siteUrl,
    },
  },
  metadataBase: new URL(siteUrl),
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#1a1a2e',
};

const gtmId = process.env.NEXT_PUBLIC_GTM_ID;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-GB"
      className={`${plusJakartaSans.variable} ${outfit.variable} h-full scroll-smooth antialiased`}
    >
      <head>
        <meta name="geo.region" content="GB" />
        <meta name="geo.placename" content="London, United Kingdom" />
        <meta name="geo.position" content="51.5267;-0.0888" />
        <meta name="ICBM" content="51.5267, -0.0888" />
        <link rel="alternate" hrefLang="en-gb" href="https://www.urbanshopfronts.co.uk" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/assets/shopfront-2.jpeg" />
        <link rel="apple-touch-icon" href="/assets/shopfront-2.jpeg" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              '@id': 'https://www.urbanshopfronts.co.uk/#website',
              name: 'Urban Shopfronts',
              url: 'https://www.urbanshopfronts.co.uk',
              publisher: {
                '@id': 'https://www.urbanshopfronts.co.uk/#organization',
              },
              inLanguage: 'en-GB',
              potentialAction: {
                '@type': 'SearchAction',
                target: {
                  '@type': 'EntryPoint',
                  urlTemplate:
                    'https://www.urbanshopfronts.co.uk/services?q={search_term_string}',
                },
                'query-input': 'required name=search_term_string',
              },
            }),
          }}
        />
        {gtmId && (
          <script
            dangerouslySetInnerHTML={{
              __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${gtmId}');`,
            }}
          />
        )}
        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-16801337867" />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','AW-16801337867');
function gtagSendEvent(url){var callback=function(){if(typeof url==='string'){window.location=url;}};gtag('event','ads_conversion_Book_appointment_1',{'event_callback':callback,'event_timeout':2000});return false;}
function gtag_report_conversion(url){var callback=function(){if(typeof url!=='undefined'){window.location=url;}};gtag('event','conversion',{'send_to':'AW-16801337867/TcCuCK3Jk7IcEIukwMs-','event_callback':callback});return false;}`,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col font-body bg-white text-charcoal">
        {gtmId && (
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
              height="0"
              width="0"
              style={{ display: 'none', visibility: 'hidden' }}
            />
          </noscript>
        )}
        <SiteChrome>
          <Header />
        </SiteChrome>
        <main className="flex-1">{children}</main>
        <SiteChrome>
          <Footer />
          <ChatWidget />
          <MobileStickyBar />
          <StickyDesktopCTA />
          <FloatingWhatsApp />
        </SiteChrome>
        <Suspense fallback={null}>
          <Analytics />
          <CallTracker />
        </Suspense>
      </body>
    </html>
  );
}
