import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import ContactForm from '@/components/ContactForm';
import SchemaMarkup from '@/components/SchemaMarkup';

export const metadata: Metadata = {
  title: 'Aluminium Shopfronts & Roller Shutters UK | Urban Shopfronts',
  description:
    'London & UK shopfront specialists. Aluminium shopfronts, roller shutters, security doors, automatic doors & 24/7 emergency callout. Free site surveys.',
  alternates: { canonical: 'https://www.urbanshopfronts.co.uk' },
};

const services = [
  { title: 'Aluminium Shopfronts', image: '/assets/aluminium-shopfront-1.jpeg', href: '/services/aluminium-shopfronts', desc: 'Thermally broken aluminium systems with toughened glazing.' },
  { title: 'Roller Shutters', image: '/assets/roller-shutter-1.jpeg', href: '/services/roller-shutters', desc: 'Steel & aluminium shutters — manual or electric operation.' },
  { title: 'Security Doors', image: '/assets/security-grill-1.jpeg', href: '/services/security-doors', desc: 'LPS 1175 rated doors for maximum premises security.' },
  { title: 'Automatic Doors', image: '/assets/automatic-door-1.jpeg', href: '/services/automatic-doors', desc: 'Sliding, swing & revolving entrance systems.' },
  { title: 'Bi-Fold Doors', image: '/assets/bifolding-door-1.jpeg', href: '/services/bi-fold-doors', desc: 'Open your frontage fully to the street.' },
  { title: 'Fire Doors', image: '/assets/fire-door.jpeg', href: '/services/fire-doors', desc: 'FD30 & FD60 certified fire-rated doorsets.' },
  { title: 'Shopfront Repairs', image: '/assets/shopfront-3.jpeg', href: '/services/shopfront-repairs', desc: 'Same-day glass, frame & mechanism repairs.' },
  { title: 'Emergency Callout', image: '/assets/shopfront-7.jpeg', href: '/services/emergency-callout', desc: '24/7 rapid response — boarding & glazing.' },
];

const stats = [
  { value: '10+', label: 'Years Trade Experience' },
  { value: '500+', label: 'Projects Delivered' },
  { value: '24/7', label: 'Emergency Cover' },
  { value: '16', label: 'UK Cities Covered' },
];

const testimonials = [
  { name: 'James Whitfield', business: 'Whitfield & Sons Butchers', location: 'Leeds', text: 'Urban replaced our roller shutter in under a day. Genuinely one of the best trade experiences we have had.' },
  { name: 'Priya Sharma', business: 'Prestige Dental Clinic', location: 'Birmingham', text: 'Surveyed within 48 hours, competitive quote, installed within the week. Exceptional service.' },
  { name: "Daniel O'Brien", business: "O'Brien Electronics", location: 'Manchester', text: 'Called at 2am after a break-in. Team on site within the hour, premises secured, full replacement next morning.' },
  { name: 'Sarah Hennessy', business: 'The Brasserie Bar & Kitchen', location: 'Bristol', text: 'Our bi-fold shopfront has transformed the restaurant. Footfall is up and the finish is outstanding.' },
  { name: 'Raj Patel', business: 'Patel Mini Market', location: 'London', text: 'Third time using Urban. Consistent quality, fair prices, and they always leave the site spotless.' },
  { name: 'Fiona Campbell', business: 'Campbell Opticians', location: 'Edinburgh', text: 'Listed building constraints made this tricky. Urban navigated planning approval and delivered beautifully.' },
];

const areas = [
  'London', 'Birmingham', 'Manchester', 'Leeds', 'Liverpool', 'Bristol',
  'Sheffield', 'Glasgow', 'Cardiff', 'Newcastle', 'Nottingham', 'Leicester',
  'Edinburgh', 'Southampton', 'Brighton', 'Coventry',
];

export default function HomePage() {
  return (
    <>
      <SchemaMarkup type="LocalBusiness" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(testimonials.map((t) => ({
            '@context': 'https://schema.org',
            '@type': 'Review',
            itemReviewed: { '@type': 'LocalBusiness', name: 'Urban Shopfronts' },
            author: { '@type': 'Person', name: t.name },
            reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
            reviewBody: t.text,
          }))),
        }}
      />

      {/* ── Hero — split layout ──────────────────────────────────────────── */}
      <section className="relative bg-navy overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-0 items-center min-h-[85vh] lg:min-h-[90vh] pt-24 pb-16 lg:py-0">
            <div className="relative z-10 lg:pr-12">
              <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/20 text-gold text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-6">
                London & UK Specialists
              </div>
              <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] tracking-tight mb-6">
                Commercial Shopfronts,
                <br />
                <span className="text-gradient-gold">Built to Last</span>
                {' '}Across the UK
              </h1>
              <p className="text-grey-300 text-lg lg:text-xl leading-relaxed max-w-lg mb-8">
                Design, fabrication and installation of aluminium shopfronts, roller shutters and security doors. Nationwide coverage with 24/7 emergency response.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 mb-10">
                <Link href="/contact" className="btn-gold text-base px-7 py-3.5">
                  Get a Free Quote
                </Link>
                <a href="tel:07471043827" className="btn-outline text-base px-7 py-3.5">
                  Call 07471 043827
                </a>
              </div>
              <div className="flex items-center gap-6 text-grey-400 text-sm">
                <span className="flex items-center gap-1.5">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="text-green-400"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"/></svg>
                  Companies House Registered
                </span>
                <span className="flex items-center gap-1.5">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="text-gold"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                  5.0 Rated
                </span>
              </div>
            </div>
            <div className="relative hidden lg:block">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image src="/assets/shopfront-2.jpeg" alt="Modern aluminium shopfront by Urban Shopfronts" width={700} height={800} className="object-cover w-full h-[75vh]" priority sizes="50vw" />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-5 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center text-gold">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/></svg>
                </div>
                <div>
                  <p className="font-heading font-bold text-navy text-sm">Nationwide Coverage</p>
                  <p className="text-grey-500 text-xs">15+ cities across the UK</p>
                </div>
              </div>
            </div>
            <div className="lg:hidden relative rounded-2xl overflow-hidden -mx-4">
              <Image src="/assets/shopfront-2.jpeg" alt="Modern aluminium shopfront by Urban Shopfronts" width={800} height={500} className="object-cover w-full h-64" priority sizes="100vw" />
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats bar ────────────────────────────────────────────────────── */}
      <section className="bg-white border-b border-grey-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <p className="font-heading text-3xl sm:text-4xl font-extrabold text-gold">{s.value}</p>
                <p className="text-grey-500 text-sm mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Services — card grid ─────────────────────────────────────────── */}
      <section className="section-padding bg-grey-50" id="services">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-navy mb-3">Our Commercial Shopfront &amp; Security Services</h2>
            <p className="text-grey-600 text-lg max-w-xl mx-auto">Full-service commercial entrance solutions — from concept to completion.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {services.map((s) => (
              <Link key={s.href} href={s.href} className="group card-surface overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <div className="relative h-44 overflow-hidden">
                  <Image src={s.image} alt={s.title} fill className="object-cover group-hover:scale-110 transition-transform duration-500" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw" />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent" />
                  <h3 className="absolute bottom-3 left-4 right-4 font-heading font-bold text-white text-base">{s.title}</h3>
                </div>
                <div className="p-4">
                  <p className="text-grey-600 text-sm leading-relaxed">{s.desc}</p>
                  <span className="text-gold text-xs font-bold mt-2 inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                    Learn more
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M4 2l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── How It Works — horizontal timeline ───────────────────────────── */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-navy text-center mb-12">How Our Shopfront Installation Process Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-0">
            {[
              { n: '1', t: 'Survey', d: 'Free site visit to measure and assess your requirements.' },
              { n: '2', t: 'Design', d: 'Full specifications and drawings for your approval.' },
              { n: '3', t: 'Build', d: 'Precision fabrication using quality UK materials.' },
              { n: '4', t: 'Install', d: 'Expert fitting with full handover and warranty.' },
            ].map((step, i) => (
              <div key={step.n} className="relative flex flex-col items-center text-center px-6 py-8 md:py-0">
                {i < 3 && <div className="hidden md:block absolute top-6 left-[60%] w-[80%] h-0.5 bg-grey-200" />}
                <div className="relative z-10 w-12 h-12 rounded-full bg-gold text-white font-heading font-bold text-lg flex items-center justify-center mb-4">{step.n}</div>
                <h3 className="font-heading font-bold text-navy mb-2">{step.t}</h3>
                <p className="text-grey-500 text-sm">{step.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials — grid layout ───────────────────────────────────── */}
      <section className="section-padding bg-grey-50">
        <div className="container-max">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-navy text-center mb-3">What Our Shopfront Installation Clients Say</h2>
          <p className="text-grey-500 text-center mb-10 max-w-lg mx-auto">Real feedback from real clients. No filters.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-white rounded-xl p-6 border border-grey-200 hover:shadow-md transition-shadow">
                <div className="flex items-center gap-1 mb-3">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#2563eb"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                  ))}
                </div>
                <p className="text-charcoal text-sm leading-relaxed mb-4">&ldquo;{t.text}&rdquo;</p>
                <div>
                  <p className="font-heading font-bold text-navy text-sm">{t.name}</p>
                  <p className="text-grey-500 text-xs">{t.business} &middot; {t.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Gallery strip ────────────────────────────────────────────────── */}
      <section className="py-6 bg-white overflow-hidden">
        <div className="flex gap-3 animate-[scroll_30s_linear_infinite] w-max">
          {[...Array(2)].flatMap((_, set) =>
            [
              { file: 'shopfront-2', alt: 'Modern aluminium shopfront installation' },
              { file: 'shopfront-4', alt: 'Wide-span glazed shopfront for retail unit' },
              { file: 'shopfront-5', alt: 'Commercial shopfront with toughened glass' },
              { file: 'shopfront-6', alt: 'Floor-to-ceiling glass shopfront' },
              { file: 'shopfront-7', alt: 'Powder-coated aluminium shopfront at night' },
              { file: 'aluminium-shopfront-1', alt: 'Aluminium shopfront with tinted glass panels' },
              { file: 'roller-shutter-1', alt: 'Commercial roller shutter installation' },
              { file: 'bifolding-door-1', alt: 'Bi-fold door system for restaurant frontage' },
              { file: 'venue-signage-1', alt: 'Venue signage and shopfront fitout' },
              { file: 'site-survey-1', alt: 'Engineer arriving for free site survey' },
              { file: 'bay-window-install-1', alt: 'Bay window aluminium frame installation' },
            ].map((img, i) => (
              <div key={`${set}-${i}`} className="relative w-56 h-40 rounded-xl overflow-hidden flex-shrink-0">
                <Image src={`/assets/${img.file}.jpeg`} alt={img.alt} fill className="object-cover" sizes="224px" />
              </div>
            ))
          )}
        </div>
        <style>{`@keyframes scroll { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }`}</style>
        <div className="text-center mt-6">
          <Link href="/gallery" className="text-gold text-sm font-bold hover:underline">View all projects &rarr;</Link>
        </div>
      </section>

      {/* ── Service Areas ────────────────────────────────────────────────── */}
      <section className="section-padding bg-navy" id="areas">
        <div className="container-max text-center">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white mb-3">Shopfront Installation Across the Whole UK</h2>
          <p className="text-grey-400 mb-10 max-w-lg mx-auto">Installation teams across the UK. Select your city for local information.</p>
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {areas.map((city) => (
              <Link key={city} href={`/areas/${city.toLowerCase()}`} className="px-4 py-2 rounded-full border border-white/20 text-white text-sm font-medium hover:bg-gold hover:border-gold hover:text-white transition-all">
                {city}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Latest Guides ────────────────────────────────────────────── */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-10">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-navy mb-3">Expert Shopfront Guides</h2>
            <p className="text-grey-600 text-lg max-w-xl mx-auto">Practical advice from our installation team to help you make informed decisions.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: 'Shopfront Installation Costs UK 2026', desc: 'Transparent pricing for aluminium shopfronts, roller shutters, security doors and more.', href: '/blog/shopfront-installation-cost-uk-2026' },
              { title: 'How to Choose the Best Shopfront Company', desc: 'A practical checklist — what to look for, red flags, and questions to ask.', href: '/blog/best-shopfront-company-uk-how-to-choose' },
              { title: 'Shopfront Design Trends 2026', desc: 'From slimline aluminium frames to smart glass — what is changing in UK retail.', href: '/blog/shopfront-design-trends-uk-2026' },
            ].map((post) => (
              <Link key={post.href} href={post.href} className="card-surface rounded-xl p-6 hover:shadow-md transition-shadow group">
                <h3 className="font-heading font-bold text-navy group-hover:text-gold transition-colors mb-2">{post.title}</h3>
                <p className="text-grey-600 text-sm leading-relaxed mb-3">{post.desc}</p>
                <span className="text-gold text-sm font-bold">Read guide &rarr;</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA / Quote ──────────────────────────────────────────────────── */}
      <section className="section-padding bg-grey-50" id="quote">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-navy mb-4">Get a Free Shopfront Installation Quote</h2>
              <p className="text-grey-600 text-lg mb-8">No obligations. No hidden costs. Just a straightforward quotation for your project.</p>
              <div className="space-y-4 mb-8">
                {['Free site survey within 48 hours', 'Detailed written quotation', 'Response within 2 business hours', '24/7 emergency line available'].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none"><path d="M20 6L9 17l-5-5" stroke="#2563eb" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </div>
                    <span className="text-charcoal text-sm">{item}</span>
                  </div>
                ))}
              </div>
              <div className="bg-navy rounded-xl p-5">
                <p className="text-grey-400 text-xs uppercase tracking-wider mb-2 font-semibold">Prefer to talk?</p>
                <a href="tel:07471043827" className="text-gold text-xl font-bold hover:text-gold-light transition-colors">07471 043827</a>
                <p className="text-grey-500 text-xs mt-1">Mon–Fri 8am–6pm &bull; Sat 9am–4pm &bull; Emergency 24/7</p>
              </div>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
