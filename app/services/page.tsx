import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = {
  title: 'All Shopfront & Security Services',
  description:
    'Explore our full range of commercial shopfront services: aluminium shopfronts, roller shutters, security doors, automatic doors, bi-fold doors, fire doors, repairs and 24/7 emergency callout.',
  alternates: { canonical: 'https://www.urbanshopfronts.co.uk/services' },
  openGraph: {
    title: 'Commercial Shopfront & Security Services — Urban Shopfronts',
    description: 'Aluminium shopfronts, roller shutters, security doors, automatic doors, bi-fold doors, fire doors, repairs and 24/7 emergency callout.',
    url: 'https://www.urbanshopfronts.co.uk/services',
  },
};

const services = [
  { name: 'Aluminium Shopfronts', slug: 'aluminium-shopfronts', image: 'aluminium-shopfront-1.jpeg', desc: 'Bespoke aluminium shopfront systems designed, fabricated, and installed to your specification.' },
  { name: 'Roller Shutters', slug: 'roller-shutters', image: 'roller-shutter-1.jpeg', desc: 'Commercial-grade steel and aluminium roller shutters. Manual or electric operation.' },
  { name: 'Security Doors', slug: 'security-doors', image: 'security-grill-1.jpeg', desc: 'High-security steel and composite doors with multi-point locking. LPS 1175 rated options.' },
  { name: 'Automatic Doors', slug: 'automatic-doors', image: 'automatic-door-1.jpeg', desc: 'Sliding, swing, and revolving automatic door systems with full maintenance contracts.' },
  { name: 'Bi-Fold Doors', slug: 'bi-fold-doors', image: 'bifolding-door-1.jpeg', desc: 'Aluminium bi-folding door systems that fully open your facade to the street.' },
  { name: 'Fire Doors', slug: 'fire-doors', image: 'fire-door.jpeg', desc: 'FD30 and FD60 certified fire doors for commercial premises. UK Building Regulations compliant.' },
  { name: 'Shopfront Repairs', slug: 'shopfront-repairs', image: 'shopfront-3.jpeg', desc: 'Fast, affordable repairs to broken glass, damaged frames, faulty locks, and mechanisms.' },
  { name: 'Emergency Callout', slug: 'emergency-callout', image: 'shopfront-7.jpeg', desc: '24/7 emergency boarding, glazing, and shutter repairs. Rapid-response teams across the UK.' },
  { name: 'Shutter Repair', slug: 'shutter-repair', image: 'roller-shutter-1.jpeg', desc: 'Jammed shutters, broken springs, motor failure & damaged laths. Fast professional repair.' },
  { name: 'Glass Replacement', slug: 'glass-replacement', image: 'aluminium-shopfront-1.jpeg', desc: 'Toughened, laminated & DGU glass replacement for commercial premises. Fast turnaround.' },
];

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ItemList',
            name: 'Shopfront Services',
            description: 'Professional shopfront installation and repair services across the UK',
            numberOfItems: 10,
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Aluminium Shopfronts', url: 'https://www.urbanshopfronts.co.uk/services/aluminium-shopfronts' },
              { '@type': 'ListItem', position: 2, name: 'Roller Shutters', url: 'https://www.urbanshopfronts.co.uk/services/roller-shutters' },
              { '@type': 'ListItem', position: 3, name: 'Security Doors', url: 'https://www.urbanshopfronts.co.uk/services/security-doors' },
              { '@type': 'ListItem', position: 4, name: 'Automatic Doors', url: 'https://www.urbanshopfronts.co.uk/services/automatic-doors' },
              { '@type': 'ListItem', position: 5, name: 'Bi-Fold Doors', url: 'https://www.urbanshopfronts.co.uk/services/bi-fold-doors' },
              { '@type': 'ListItem', position: 6, name: 'Fire Doors', url: 'https://www.urbanshopfronts.co.uk/services/fire-doors' },
              { '@type': 'ListItem', position: 7, name: 'Shopfront Repairs', url: 'https://www.urbanshopfronts.co.uk/services/shopfront-repairs' },
              { '@type': 'ListItem', position: 8, name: 'Emergency Callout', url: 'https://www.urbanshopfronts.co.uk/services/emergency-callout' },
              { '@type': 'ListItem', position: 9, name: 'Shutter Repair', url: 'https://www.urbanshopfronts.co.uk/services/shutter-repair' },
              { '@type': 'ListItem', position: 10, name: 'Glass Replacement', url: 'https://www.urbanshopfronts.co.uk/services/glass-replacement' },
            ],
          }),
        }}
      />

      <section className="relative min-h-[35vh] flex items-end bg-navy">
        <div className="absolute inset-0 bg-gradient-to-b from-navy/90 to-navy/70" />
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 pt-32">
          <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Services' }]} />
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white mt-4">
            Our Shopfront &amp; Security Services
          </h1>
          <p className="text-grey-300 text-lg mt-3 max-w-2xl">
            From bespoke aluminium shopfronts to 24/7 emergency callouts — the full range of commercial entrance and security solutions.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {services.map((service) => (
              <Link key={service.slug} href={`/services/${service.slug}`} className="group card-surface overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-48 overflow-hidden">
                  <Image src={`/assets/${service.image}`} alt={service.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw" />
                </div>
                <div className="p-5">
                  <h2 className="font-heading font-bold text-navy text-lg group-hover:text-gold transition-colors mb-2">{service.name}</h2>
                  <p className="text-grey-600 text-sm leading-relaxed mb-3">{service.desc}</p>
                  <span className="text-gold text-sm font-semibold inline-flex items-center gap-1">
                    Learn more
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true"><path d="M4 2l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-gradient-dark">
        <div className="container-max text-center">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white mb-4">Need a Free Quote?</h2>
          <p className="text-grey-300 text-lg max-w-xl mx-auto mb-8">Tell us about your project for a detailed, no-obligation quotation.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-gold">Request a Quote</Link>
            <a href="tel:07471043827" className="btn-outline">Call 07471 043827</a>
          </div>
        </div>
      </section>
    </>
  );
}
