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
  { title: 'Shutter Repair', image: '/assets/roller-shutter-1.jpeg', href: '/services/shutter-repair', desc: 'Spring, motor & curtain repairs — fast response.' },
  { title: 'Glass Replacement', image: '/assets/aluminium-shopfront-1.jpeg', href: '/services/glass-replacement', desc: 'Toughened, laminated & DGU commercial glazing.' },
];

const stats = [
  { value: '10+', label: 'Years Trade Experience' },
  { value: '500+', label: 'Projects Delivered' },
  { value: '24/7', label: 'Emergency Cover' },
  { value: '16', label: 'UK Cities Covered' },
];

const testimonials = [
  { name: "Daniel O'Brien", business: "O'Brien Electronics", location: 'Manchester', text: 'Called at 2am after a break-in. Team on site within the hour, premises secured, full replacement next morning.' },
  { name: 'Raj Patel', business: 'Patel Mini Market', location: 'London', text: 'Third time using Urban. Consistent quality, fair prices, and they always leave the site spotless.' },
  { name: 'Sarah Hennessy', business: 'The Brasserie Bar & Kitchen', location: 'Bristol', text: 'Our bi-fold shopfront has transformed the restaurant. Footfall is up and the finish is outstanding.' },
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
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            '@id': 'https://www.urbanshopfronts.co.uk/#webpage',
            name: 'Urban Shopfronts | Professional Shopfront Installation UK',
            url: 'https://www.urbanshopfronts.co.uk',
            isPartOf: { '@id': 'https://www.urbanshopfronts.co.uk/#website' },
            about: { '@id': 'https://www.urbanshopfronts.co.uk/#organization' },
            speakable: {
              '@type': 'SpeakableSpecification',
              cssSelector: ['h1', '.hero-description', '.services-section h2'],
            },
            significantLink: [
              'https://www.urbanshopfronts.co.uk/services',
              'https://www.urbanshopfronts.co.uk/contact',
              'https://www.urbanshopfronts.co.uk/areas',
            ],
          }),
        }}
      />

      {/* ── Hero — split layout ──────────────────────────────────────────── */}
      <section className="relative bg-obsidian overflow-hidden">
        {/* Hex grid overlay */}
        <div className="absolute inset-0 bg-hex-grid pointer-events-none opacity-40" aria-hidden="true" />
        {/* Ambient nebula */}
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] rounded-full bg-gold/[0.04] blur-[120px] pointer-events-none" aria-hidden="true" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-amber/[0.03] blur-[100px] pointer-events-none" aria-hidden="true" />

        <div className="absolute inset-0 lg:hidden" aria-hidden="true">
          <Image src="/assets/shopfront-2.jpeg" alt="" fill priority className="object-cover opacity-25" sizes="100vw" />
          <div className="absolute inset-0 bg-obsidian/90" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-0 items-center min-h-[85vh] lg:min-h-[90vh] pt-24 pb-16 lg:pt-28 lg:pb-10">
            <div className="relative z-10 lg:pr-12">
              <div className="inline-flex items-center gap-2 card-surface px-4 py-1.5 rounded-full mb-6 border border-gold/20">
                <span className="text-gold text-xs font-bold tracking-widest uppercase">London & UK Specialists</span>
              </div>
              <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] tracking-tight mb-6">
                Aluminium Shopfronts,
                <br />
                <span className="text-gradient-gold">Roller Shutters &amp; Security Doors</span>
                {' '}Across the UK
              </h1>
              <p className="hero-description text-grey-500 text-lg lg:text-xl leading-relaxed max-w-lg mb-8">
                Professional aluminium shopfront installation, roller shutter fitting and security door supply for commercial premises across London and the UK. We handle the complete process from design and fabrication through to expert installation, with nationwide coverage and 24/7 emergency response available when you need it most.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 mb-10">
                <Link href="/contact" className="btn-gold text-base px-7 py-3.5">
                  Get a Free Quote
                </Link>
                <a href="tel:07471043827" className="btn-outline text-base px-7 py-3.5">
                  Call 07471 043827
                </a>
              </div>
              <div className="flex items-center gap-6 text-grey-500 text-sm">
                <span className="flex items-center gap-1.5">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="text-gold"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"/></svg>
                  Companies House Registered
                </span>
                <span className="flex items-center gap-1.5">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="text-amber"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                  5.0 Rated
                </span>
              </div>
            </div>
            <div className="relative hidden lg:block">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/[0.06]">
                <Image src="/assets/shopfront-2.jpeg" alt="Modern aluminium shopfront by Urban Shopfronts" width={700} height={800} className="object-cover w-full h-[75vh]" priority sizes="50vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian/30 to-transparent" />
              </div>
              <div className="absolute -bottom-6 -left-6 card-surface px-5 py-4 flex items-center gap-4 border border-gold/15 shadow-[0_0_20px_rgba(0,255,136,0.06)]">
                <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center text-gold">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/></svg>
                </div>
                <div>
                  <p className="font-heading font-bold text-white text-sm">Nationwide Coverage</p>
                  <p className="text-grey-400 text-xs">15+ cities across the UK</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats bar ────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden border-y border-white/[0.04]" style={{ background: 'linear-gradient(90deg, rgba(0,255,136,0.02) 0%, rgba(255,170,0,0.02) 50%, rgba(0,255,136,0.02) 100%)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12">
            {stats.map((s) => (
              <div key={s.label} className="text-center group">
                <p className="font-heading text-3xl sm:text-4xl font-extrabold text-gold group-hover:text-glow-emerald transition-all">{s.value}</p>
                <p className="text-grey-400 text-sm mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Services — card grid ─────────────────────────────────────────── */}
      <section className="section-padding bg-obsidian relative bg-dot-grid bg-nebula-emerald" id="services">
        <div className="container-max relative z-10">
          <div className="text-center mb-12">
            <p className="text-amber font-semibold text-sm tracking-[0.2em] uppercase mb-3">What We Do</p>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white mb-3">Our Commercial Shopfront &amp; Security Services</h2>
            <p className="text-grey-500 text-lg max-w-xl mx-auto">Full-service commercial entrance solutions — from concept to completion.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {services.map((s) => (
              <Link key={s.href} href={s.href} className="group card-aurora-border overflow-hidden hover:-translate-y-1.5 transition-all duration-500 hover:shadow-[0_0_25px_rgba(0,255,136,0.06)]">
                <div className="relative h-44 overflow-hidden">
                  <Image src={s.image} alt={s.title} fill className="object-cover group-hover:scale-110 transition-transform duration-500" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw" />
                  <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/30 to-transparent" />
                  <h3 className="absolute bottom-3 left-4 right-4 font-heading font-bold text-white text-base">{s.title}</h3>
                </div>
                <div className="p-4 bg-obsidian-light/50 backdrop-blur-sm">
                  <p className="text-grey-500 text-sm leading-relaxed">{s.desc}</p>
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


      {/* ── Testimonials — grid layout ───────────────────────────────────── */}
      <section className="section-padding bg-obsidian-light relative">
        <div className="absolute inset-0 bg-hex-grid pointer-events-none opacity-40" />
        <div className="container-max relative z-10">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white text-center mb-10">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {testimonials.map((t) => (
              <div key={t.name} className="card-surface p-6 hover-forge transition-all duration-300">
                <div className="flex items-center gap-1 mb-3">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#ffaa00"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                  ))}
                </div>
                <p className="text-grey-600 text-sm leading-relaxed mb-4">&ldquo;{t.text}&rdquo;</p>
                <div>
                  <p className="font-heading font-bold text-white text-sm">{t.name}</p>
                  <p className="text-grey-400 text-xs">{t.business} &middot; {t.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Gallery strip ────────────────────────────────────────────────── */}
      <section className="py-6 bg-obsidian overflow-hidden border-y border-white/[0.04]">
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
              <div key={`${set}-${i}`} className="relative w-56 h-40 rounded-xl overflow-hidden flex-shrink-0 border border-white/[0.04]">
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
      <section className="section-padding bg-obsidian relative bg-nebula-amber" id="areas">
        <div className="container-max text-center relative z-10">
          <p className="text-gold font-semibold text-sm tracking-[0.2em] uppercase mb-3">Coverage</p>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white mb-3">Shopfront Installation Across the Whole UK</h2>
          <p className="text-grey-500 mb-10 max-w-lg mx-auto">Installation teams across the UK. Select your city for local information.</p>
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {areas.map((city) => (
              <Link key={city} href={`/areas/${city.toLowerCase()}`} className="px-4 py-2 rounded-full border border-white/[0.08] text-grey-600 text-sm font-medium hover:bg-gold/10 hover:border-gold/30 hover:text-gold transition-all duration-300">
                {city}
              </Link>
            ))}
          </div>
          <div className="inline-flex items-center gap-3 bg-gold/10 border border-gold/20 text-gold px-6 py-3 rounded-full text-sm font-semibold backdrop-blur-sm">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" fill="currentColor" />
            </svg>
            Nationwide UK Coverage
          </div>
        </div>
      </section>

      {/* ── CTA / Quote ──────────────────────────────────────────────────── */}
      <section className="section-padding bg-obsidian-light relative overflow-hidden bg-nebula-emerald" id="quote">
        <div className="absolute inset-0 bg-hex-grid pointer-events-none opacity-30" />
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-amber/[0.03] blur-3xl pointer-events-none" aria-hidden="true" />
        <div className="container-max relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-gold font-semibold text-sm tracking-widest uppercase mb-3">Get Started</p>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white mb-4">Get a Free Shopfront Installation Quote</h2>
              <p className="text-grey-500 text-lg mb-8">No obligations. No hidden costs. Just a straightforward quotation for your project.</p>
              <div className="space-y-4 mb-8">
                {['Free site survey within 48 hours', 'Detailed written quotation', 'Response within 2 business hours', '24/7 emergency line available'].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center flex-shrink-0">
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none"><path d="M20 6L9 17l-5-5" stroke="#00ff88" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </div>
                    <span className="text-grey-600 text-sm">{item}</span>
                  </div>
                ))}
              </div>
              <div className="card-surface p-5">
                <p className="text-grey-400 text-xs uppercase tracking-wider mb-2 font-semibold">Prefer to talk?</p>
                <a href="tel:07471043827" className="text-gold text-xl font-bold hover:text-gold-light transition-colors">07471 043827</a>
                <p className="text-grey-400 text-xs mt-1">Mon–Fri 8am–6pm &bull; Sat 9am–4pm &bull; Emergency 24/7</p>
              </div>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
