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
import ExitIntentPopup from '@/components/ExitIntentPopup';
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
    'Affordable shopfront installation & shutter specialists across the UK. Aluminium shopfronts, roller shutters, security doors, automatic doors & emergency repairs. Competitive prices, free site surveys. Call for a free quote today.',
  keywords: [
    'shopfront installation UK',
    'shopfront installers near me',
    'shop fronts near me',
    'cheap shopfronts',
    'affordable shopfronts UK',
    'shopfront fitters',
    'aluminium shopfronts',
    'aluminium shop front',
    'aluminium doors',
    'aluminium windows',
    'roller shutters',
    'roller shutter installation',
    'cheap roller shutters',
    'security doors',
    'automatic doors',
    'bi-fold doors',
    'fire doors',
    'curtain walling',
    'glass shopfronts',
    'glass shop front',
    'frameless shopfronts',
    'commercial glazing',
    'toughened glass shopfronts',
    'shopfront repairs',
    'shopfront repair near me',
    'shop front design',
    'emergency shopfront callout',
    '24 hour shutter repair',
    'shop front company UK',
    'shopfront prices UK',
    'how much does a shopfront cost',
    'commercial shopfronts',
    'shop front replacement',
    'shopfront companies UK',
    'Urban Shopfronts',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: siteUrl,
    siteName: 'Urban Shopfronts',
    title: 'Urban Shopfronts | Affordable Shopfront Installation UK',
    description:
      'Affordable shopfront installation & shutter specialists across the UK. Aluminium shopfronts, roller shutters, security doors, automatic doors & emergency repairs. Competitive prices, free site surveys.',
    images: [
      {
        // Was shopfront-2.jpeg, which is 1600x1200 despite being declared
        // 1200x630 here, so shares were cropped to a shape nobody composed
        // for. This card is genuinely 1200x630, cropped from the lower half
        // of that photograph so the neighbouring unit's fascia -- another
        // business's name and phone number -- stays out of frame.
        url: `${siteUrl}/assets/urban-og.jpg`,
        width: 1200,
        height: 630,
        alt: 'Urban Shopfronts — aluminium shopfronts, roller shutters and security doors, installed across the UK',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Urban Shopfronts | Affordable Shopfront Installation UK',
    description:
      'Affordable shopfront installation & shutter specialists across the UK. Aluminium shopfronts, roller shutters, security doors & emergency repairs. Free site surveys.',
    images: [`${siteUrl}/assets/urban-og.jpg`],
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
        <meta name="geo.placename" content="Smethwick, West Midlands, United Kingdom" />
        <meta name="geo.position" content="52.4897;-1.9718" />
        <meta name="ICBM" content="52.4897, -1.9718" />
        <link rel="manifest" href="/manifest.json" />
        {/* Sized files rather than one 512px icon for every slot: the artwork is
            fine gold linework, and letting the browser squeeze it down to 16px
            produced an unreadable smudge. Each size is rendered from the source
            instead, after cropping the dead letterbox off the original. */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" sizes="32x32" href="/assets/urban-appicon-32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/assets/urban-appicon-16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/assets/urban-appicon-180.png" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        {/* The layout names this as the WebSite's publisher, the homepage names
            it in `about`, and every city page names it as parentOrganization --
            but nothing ever defined it, so all of those pointed at an entity
            that did not exist. Defining it once here resolves every reference
            and gives Google a logo to read for the knowledge panel. */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              '@id': 'https://www.urbanshopfronts.co.uk/#organization',
              name: 'Urban Shopfronts',
              legalName: 'Urban Shopfronts Limited',
              url: 'https://www.urbanshopfronts.co.uk',
              telephone: '+447471043827',
              email: 'sales@urbanshopfronts.co.uk',
              logo: {
                '@type': 'ImageObject',
                '@id': 'https://www.urbanshopfronts.co.uk/#logo',
                url: 'https://www.urbanshopfronts.co.uk/assets/urban-appicon-512.png',
                width: 512,
                height: 512,
                caption: 'Urban Shopfronts',
              },
              image: { '@id': 'https://www.urbanshopfronts.co.uk/#logo' },
              areaServed: { '@type': 'Country', name: 'United Kingdom' },
            }),
          }}
        />
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'SiteNavigationElement',
              '@id': 'https://www.urbanshopfronts.co.uk/#navigation',
              name: 'Main Navigation',
              url: 'https://www.urbanshopfronts.co.uk',
              hasPart: [
                { '@type': 'SiteNavigationElement', name: 'Services', url: 'https://www.urbanshopfronts.co.uk/services' },
                { '@type': 'SiteNavigationElement', name: 'Areas We Cover', url: 'https://www.urbanshopfronts.co.uk/areas' },
                { '@type': 'SiteNavigationElement', name: 'About Us', url: 'https://www.urbanshopfronts.co.uk/about' },
                { '@type': 'SiteNavigationElement', name: 'Gallery', url: 'https://www.urbanshopfronts.co.uk/gallery' },
                { '@type': 'SiteNavigationElement', name: 'Blog', url: 'https://www.urbanshopfronts.co.uk/blog' },
                { '@type': 'SiteNavigationElement', name: 'Cost Guide', url: 'https://www.urbanshopfronts.co.uk/cost-guide' },
                { '@type': 'SiteNavigationElement', name: 'FAQ', url: 'https://www.urbanshopfronts.co.uk/faq' },
                { '@type': 'SiteNavigationElement', name: 'Reviews', url: 'https://www.urbanshopfronts.co.uk/reviews' },
                { '@type': 'SiteNavigationElement', name: 'Contact', url: 'https://www.urbanshopfronts.co.uk/contact' },
              ],
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
function gtagSendEvent(url){var callback=function(){if(typeof url==='string'){window.location=url;}};gtag('event','conversion',{'send_to':'AW-16801337867/TcCuCK3Jk7IcEIukwMs-','event_callback':callback,'event_timeout':2000});gtag('event','conversion',{'send_to':'AW-16801337867/u-x7CNe428gcEIukwMs-'});return false;}
function gtag_report_conversion(url){var callback=function(){if(typeof url!=='undefined'){window.location=url;}};gtag('event','conversion',{'send_to':'AW-16801337867/TcCuCK3Jk7IcEIukwMs-','event_callback':callback});gtag('event','conversion',{'send_to':'AW-16801337867/u-x7CNe428gcEIukwMs-'});return false;}`,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col font-body bg-obsidian text-charcoal">
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
          <ExitIntentPopup />
        </SiteChrome>
        <Suspense fallback={null}>
          <Analytics />
          <CallTracker />
        </Suspense>
      </body>
    </html>
  );
}
