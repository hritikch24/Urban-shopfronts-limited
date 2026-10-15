import Link from 'next/link';
import { PHONE_DISPLAY, PHONE_E164, whatsappLink } from '@/lib/contact';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQSection from '@/components/FAQSection';
import ContactForm from '@/components/ContactForm';
import { garageDoors, typeLabel, typeList, type GarageCopy, type GarageDoorType } from '@/data/garage-doors';

const siteUrl = 'https://www.urbanshopfronts.co.uk';

export const withTypes = (text: string, types: GarageDoorType[]) => text.replace('{types}', typeList(types));

/**
 * The two garage door hub pages. Not a /services/{slug} page on purpose: those
 * feed the city cross-product, and these must never get city pages.
 */
export default function GarageDoorPage({ copy, types, repair }: { copy: GarageCopy; types: GarageDoorType[]; repair: boolean }) {
  const url = `${siteUrl}${copy.path}`;
  const intro = withTypes(copy.intro, types);
  const blocks = copy.blocks.filter((b) => b.id !== 'automation' || garageDoors.automation);

  const schema = [
    {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      '@id': `${url}/#webpage`,
      name: copy.h1,
      url,
      isPartOf: { '@id': `${siteUrl}/#website` },
      about: { '@id': `${url}/#service` },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      '@id': `${url}/#service`,
      name: copy.h1,
      serviceType: copy.h1,
      description: intro,
      url,
      provider: { '@id': `${siteUrl}/#organization` },
    },
  ];

  return (
    <>
      {schema.map((s) => (
        <script key={s['@type']} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />
      ))}

      <section className="relative bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 pt-32">
          <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: copy.h1 }]} />
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white mt-4">{copy.h1}</h1>
          <p className="text-charcoal text-lg mt-3 max-w-3xl">{intro}</p>
          {!garageDoors.published && (
            <p className="mt-4 inline-block rounded-lg border border-gold px-4 py-2 text-sm text-gold" role="note">
              Draft for owner review: not published.
            </p>
          )}
          <div className="flex flex-wrap gap-3 mt-6">
            <a href="#garage-enquiry" className="btn-gold">
              {repair ? 'Book a Repair' : 'Request a Survey'}
            </a>
            <a href={`tel:${PHONE_E164}`} className="btn-outline">
              Call {PHONE_DISPLAY}
            </a>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-max grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-10 text-charcoal leading-relaxed">
            <div>
              <h2 className="text-2xl font-heading font-bold text-white mb-6">{copy.typeHeading}</h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {types.map((t) => (
                  <li key={t} className="card-surface p-5">
                    <p className="font-heading font-bold text-white">{typeLabel[t]} Doors</p>
                    <p className="text-gold text-sm mt-1">{copy.types[t].headline}</p>
                    <p className="text-sm mt-2">{copy.types[t].detail}</p>
                  </li>
                ))}
              </ul>
            </div>

            {blocks.map((b) => (
              <div key={b.heading} id={b.id}>
                <h2 className="text-2xl font-heading font-bold text-white mb-4">{b.heading}</h2>
                {b.paragraphs.map((p) => (
                  <p key={p} className="mb-4">{p}</p>
                ))}
                {b.points && (
                  <ul className="list-disc pl-5 space-y-1">
                    {b.points.map((p) => (
                      <li key={p}>{p}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>

          <aside className="lg:col-span-1 space-y-6">
            <div className="card-surface p-6">
              <h2 className="font-heading font-bold text-white text-lg mb-4">How It Works</h2>
              <ol className="space-y-4">
                {copy.process.map((step, i) => (
                  <li key={step.title} className="flex gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-gold/10 text-gold text-sm font-bold flex items-center justify-center">{i + 1}</span>
                    <div>
                      <p className="font-semibold text-white text-sm">{step.title}</p>
                      <p className="text-grey-600 text-sm mt-0.5">{step.detail}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
            <div className="card-surface p-6">
              <h2 className="font-heading font-bold text-white text-lg mb-3">What Affects the Price</h2>
              <ul className="list-disc pl-5 space-y-1 text-sm text-charcoal">
                {copy.costDrivers.map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
            </div>
            <div className="card-surface p-6">
              <h2 className="font-heading font-bold text-white text-lg mb-3">Not Covered</h2>
              <ul className="list-disc pl-5 space-y-1 text-sm text-charcoal">
                {copy.outOfScope.map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
            </div>
            <div className="card-surface p-6">
              <h2 className="font-heading font-bold text-white text-lg mb-3">Related</h2>
              <ul className="space-y-2">
                {copy.related.map((r) => (
                  <li key={r.href}>
                    <Link href={r.href} className="text-sm text-charcoal hover:text-gold transition-colors">
                      {r.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>

      <section className="section-padding bg-obsidian-light">
        <div className="container-max">
          <FAQSection faqs={copy.faqs} title={`${copy.h1}: Questions`} />
        </div>
      </section>

      <section id="garage-enquiry" className="section-padding bg-gradient-dark">
        <div className="container-max grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl font-heading font-bold text-white mb-4">
              {repair ? 'Report a Garage Door Fault' : 'Plan a New Garage Door'}
            </h2>
            <p className="text-charcoal text-lg mb-6">
              Choose the service, add the postcode and a short description. Photos speed things up: send them on
              WhatsApp.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href={`tel:${PHONE_E164}`} className="btn-gold">
                Call {PHONE_DISPLAY}
              </a>
              <a href={whatsappLink(`Garage door ${repair ? 'repair' : 'installation'} enquiry. Photos attached. Postcode: `)} target="_blank" rel="noopener noreferrer" className="btn-outline">
                WhatsApp Photos
              </a>
            </div>
          </div>
          <ContactForm garage defaultService={repair ? 'Garage Door Repair' : 'Garage Door Installation'} />
        </div>
      </section>
    </>
  );
}
