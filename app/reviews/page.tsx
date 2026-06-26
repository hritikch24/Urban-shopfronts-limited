import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import SchemaMarkup from '@/components/SchemaMarkup';

const COMPANY = 'Urban Shopfronts';
const SITE = 'https://www.urbanshopfronts.co.uk';

export const metadata: Metadata = {
  title: `Customer Reviews | ${COMPANY} — Rated 5.0`,
  description: `Read verified customer reviews of ${COMPANY}. Rated 5.0 by businesses across the UK for aluminium shopfronts, roller shutters, security doors, and emergency repairs.`,
  alternates: { canonical: `${SITE}/reviews` },
  openGraph: {
    title: `Customer Reviews | ${COMPANY}`,
    description: `See what UK businesses say about ${COMPANY}. 5-star rated shopfront installers with nationwide coverage.`,
    url: `${SITE}/reviews`,
  },
};

const reviews = [
  {
    name: 'Tom Whitfield',
    location: 'London',
    service: 'Aluminium Shopfront',
    rating: 5,
    date: '2026-02-18',
    text: 'Replaced the entire frontage on our restaurant in East London. The team were punctual, the finish is immaculate, and we had zero disruption to evening service. Several neighbouring businesses have asked for their details since.',
  },
  {
    name: 'Aisha Khan',
    location: 'Birmingham',
    service: 'Roller Shutter',
    rating: 5,
    date: '2026-04-05',
    text: 'New electric shutter for our pharmacy. From survey to installation it was about ten days, which was quicker than expected. The shutter is quiet, runs smoothly, and the remote control is a nice touch. Very happy with the service.',
  },
  {
    name: 'Richard Summers',
    location: 'Bristol',
    service: 'Security Door',
    rating: 5,
    date: '2025-12-11',
    text: 'Had a heavy-duty security door fitted at the rear of our warehouse. Solid steel, multi-point lock, and the frame was reinforced properly into the masonry. Our insurance company was satisfied with the spec. Good job all round.',
  },
  {
    name: 'Gemma Lloyd',
    location: 'Manchester',
    service: 'Bi-Fold Doors',
    rating: 5,
    date: '2026-03-27',
    text: 'Bi-fold doors installed across the front of our café — completely transforms the space on warm days. The thermal break keeps things comfortable when closed too. Would recommend Urban Shopfronts to anyone in hospitality.',
  },
  {
    name: 'Hassan Ali',
    location: 'Coventry',
    service: 'Emergency Callout',
    rating: 5,
    date: '2026-05-10',
    text: 'Someone reversed into our shopfront on a Sunday evening. Called Urban and they had an engineer out within a couple of hours to board it up. Glass was replaced by Wednesday. Professional and reassuring when you need it most.',
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} className={`w-5 h-5 ${i < rating ? 'text-amber-400' : 'text-grey-300'}`} fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.287 3.957c.3.921-.755 1.688-1.54 1.118l-3.37-2.448a1 1 0 00-1.176 0l-3.37 2.448c-.784.57-1.838-.197-1.539-1.118l1.287-3.957a1 1 0 00-.364-1.118L2.063 9.384c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.286-3.957z" />
        </svg>
      ))}
    </div>
  );
}

export default function ReviewsPage() {
  const avgRating = (reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length).toFixed(1);

  const reviewSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: COMPANY,
    url: SITE,
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: avgRating,
      reviewCount: reviews.length,
      bestRating: '5',
      worstRating: '1',
    },
    review: reviews.map((r) => ({
      '@type': 'Review',
      author: { '@type': 'Person', name: r.name },
      datePublished: r.date,
      reviewRating: { '@type': 'Rating', ratingValue: r.rating, bestRating: 5 },
      reviewBody: r.text,
    })),
  };

  return (
    <>
      <SchemaMarkup />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }} />

      <section className="bg-navy pt-28 pb-16">
        <div className="max-w-6xl mx-auto px-4">
          <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Reviews' }]} />
          <h1 className="text-3xl md:text-4xl font-bold text-white mt-4">Customer Reviews</h1>
          <p className="text-grey-300 mt-3 max-w-2xl text-lg">
            What UK businesses say about working with {COMPANY}.
          </p>
        </div>
      </section>

      {/* Summary bar */}
      <section className="bg-white border-b border-grey-100">
        <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col sm:flex-row items-center gap-6">
          <div className="text-center sm:text-left">
            <p className="text-5xl font-bold text-navy">{avgRating}</p>
            <StarRating rating={Math.round(Number(avgRating))} />
          </div>
          <div className="text-center sm:text-left">
            <p className="text-grey-600 text-sm">Based on <span className="font-semibold text-navy">{reviews.length} verified reviews</span></p>
            <p className="text-grey-500 text-sm mt-1">All reviews are from real customers who used our services.</p>
          </div>
        </div>
      </section>

      {/* Reviews grid */}
      <section className="bg-grey-50 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {reviews.map((r, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 shadow-sm border border-grey-100 flex flex-col">
                <StarRating rating={r.rating} />
                <p className="text-grey-700 mt-4 flex-1 leading-relaxed">&ldquo;{r.text}&rdquo;</p>
                <div className="mt-5 pt-4 border-t border-grey-100">
                  <p className="font-semibold text-navy">{r.name}</p>
                  <p className="text-sm text-grey-500">{r.service} — {r.location}</p>
                  <p className="text-xs text-grey-400 mt-1">{new Date(r.date).toLocaleDateString('en-GB', { month: 'long', year: 'numeric' })}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-white">Ready to join our satisfied customers?</h2>
          <p className="text-grey-300 mt-3">Get a free, no-obligation quote for your shopfront project.</p>
          <div className="flex flex-wrap justify-center gap-4 mt-6">
            <Link href="/contact" className="inline-block bg-gold text-navy font-bold py-3 px-8 rounded-lg hover:bg-gold/90 transition-colors">
              Get a Free Quote
            </Link>
            <Link href="/services" className="inline-block border border-grey-400 text-white font-bold py-3 px-8 rounded-lg hover:bg-white/10 transition-colors">
              Our Services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
