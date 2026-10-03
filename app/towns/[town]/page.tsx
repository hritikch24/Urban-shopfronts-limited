import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { towns, townBySlug } from '@/data/towns';
import { services } from '@/data/services';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQSection from '@/components/FAQSection';
import ContactForm from '@/components/ContactForm';
import { whatsappLink, PHONE_DISPLAY } from '@/lib/contact';

/** Urban has no lib/site.ts yet — Sigma's origin refactor has not been applied here.
 *  Keep this in step with app/sitemap.ts until it is. */
const SITE_URL = 'https://www.urbanshopfronts.co.uk';

export const dynamicParams = false;

export async function generateStaticParams() {
  return towns.map((t) => ({ town: t.slug }));
}

interface PageProps { params: Promise<{ town: string }> }

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { town: slug } = await params;
  const t = townBySlug[slug];
  if (!t) return {};
  const where = t.region === 'Wales' ? 'Wales' : `${t.miles} miles from Birmingham`;
  return {
    title: `Shopfronts & Office Partitions in ${t.name}`,
    description: `Commercial fit-out, aluminium shopfronts and glazed office partitioning in ${t.name}. ${t.districts.slice(0, 2).join(', ')}. ${where}. Free site survey.`,
    alternates: { canonical: `${SITE_URL}/towns/${t.slug}` },
    openGraph: {
      title: `Shopfronts & Office Partitions in ${t.name}`,
      description: `Fit-out, shopfronts and partitioning across ${t.name}.`,
      url: `${SITE_URL}/towns/${t.slug}`,
    },
  };
}

/** Urban leads with fit-out, not repair. That ordering is the differentiator. */
const FITOUT_FIRST = ['aluminium-partitions', 'glass-partitions', 'aluminium-shopfronts', 'aluminium-doors'];

export default async function TownPage({ params }: PageProps) {
  const { town: slug } = await params;
  const t = townBySlug[slug];
  if (!t) notFound();

  const neighbours = t.near.map((s) => townBySlug[s]).filter(Boolean);
  const fitout = FITOUT_FIRST.map((s) => services.find((x) => x.slug === s)).filter(Boolean);
  const isWales = t.region === 'Wales';

  const faqs = [
    {
      question: `Do you fit office partitions in ${t.name}?`,
      answer: `Yes — it is a good share of what we do here. ${t.focus} Demountable aluminium systems come apart and go back together when a floorplate changes, which matters on a lease you may not renew.`,
    },
    {
      question: isWales
        ? `Do Welsh building regulations change the specification?`
        : `Do I need planning permission for a shopfront in ${t.name}?`,
      answer: isWales
        ? `In places, yes. Building regulations are devolved in Wales and the Welsh approved documents diverge from the English ones, particularly on energy performance. ${t.council} determines planning and advertisement consent. We work to the Welsh requirements rather than assuming the English guidance carries across.`
        : `Usually. ${t.council} determines planning permission and advertisement consent. Replacing a shopfront is a material alteration to the building's external appearance, and illuminated or projecting signage needs advertisement consent as a separate application. Internal partitioning normally does not need planning permission, though Building Regulations Parts B, E and M can still apply.`,
    },
    {
      question: `How acoustic do partitions need to be?`,
      answer: `It depends what the room is for. Single-glazed gives roughly 28–32 dB Rw — enough to take the edge off open-plan noise. Double-glazed with independent glazing lines and full perimeter seals reaches 45–48 dB Rw, which is what a confidential conversation needs. The figure on the data sheet assumes the partition runs to the slab; if it stops at a suspended ceiling with an open plenum above, sound goes straight over the top.`,
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@graph': [
              {
                '@type': 'BreadcrumbList',
                itemListElement: [
                  { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
                  { '@type': 'ListItem', position: 2, name: 'Towns', item: `${SITE_URL}/towns` },
                  { '@type': 'ListItem', position: 3, name: t.name, item: `${SITE_URL}/towns/${t.slug}` },
                ],
              },
              {
                '@type': 'Service',
                name: `Commercial fit-out and shopfronts in ${t.name}`,
                serviceType: 'Office partitioning, shopfront installation and commercial fit-out',
                provider: { '@id': `${SITE_URL}/#organization` },
                areaServed: { '@type': 'City', name: t.name, containedInPlace: { '@type': 'AdministrativeArea', name: t.region } },
              },
              {
                '@type': 'FAQPage',
                mainEntity: faqs.map((f) => ({
                  '@type': 'Question', name: f.question,
                  acceptedAnswer: { '@type': 'Answer', text: f.answer },
                })),
              },
            ],
          }),
        }}
      />

      <section className="section-padding bg-gradient-dark">
        <div className="container-max">
          <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Towns', href: '/towns' }, { label: t.name }]} />
          <div className="flex flex-wrap items-center gap-3 mt-7 mb-4">
            <span className="text-gold font-mono text-xs tracking-[0.12em] uppercase">{t.region}</span>
            {t.miles !== null && (
              <>
                <span className="text-grey-600" aria-hidden="true">·</span>
                <span className="text-grey-600 font-mono text-xs tracking-[0.12em] uppercase">{t.miles} miles from Birmingham</span>
              </>
            )}
          </div>
          <h1 className="font-heading text-white font-bold text-3xl sm:text-4xl lg:text-5xl mb-5">
            Shopfronts &amp; office partitions in {t.name}
          </h1>
          <p className="text-grey-400 max-w-3xl text-lg leading-relaxed">
            Commercial fit-out, aluminium shopfronts and glazed partitioning across
            {' '}{t.districts.join(', ')}.
          </p>
          <div className="flex flex-wrap gap-3 mt-8">
            <a href={`tel:${PHONE_DISPLAY.replace(/\s/g, '')}`} className="btn-gold">Call {PHONE_DISPLAY}</a>
            <a href={whatsappLink(`Hi, I'm looking for a quote in ${t.name}.`)} target="_blank" rel="noopener noreferrer" className="btn-outline">WhatsApp us</a>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-max grid gap-10 lg:grid-cols-[2fr_1fr]">
          <div>
            <h2 className="font-heading text-white font-bold text-2xl sm:text-3xl mb-5">What we do in {t.name}</h2>
            <p className="text-grey-400 leading-[1.85] mb-0">{t.focus}</p>
          </div>
          <aside>
            <div className="card-surface p-6">
              <h3 className="font-heading text-white font-semibold mb-4 text-base">{t.name} at a glance</h3>
              <dl className="m-0">
                {([
                  ['Planning authority', t.council],
                  ['Region', t.region],
                  ...(t.miles !== null ? [['From Birmingham', `${t.miles} miles`] as const] : []),
                  ['Commercial areas', t.districts.join(' · ')],
                ] as const).map(([k, v]) => (
                  <div key={k} className="py-3 border-b border-white/[0.07] last:border-0">
                    <dt className="font-mono text-[0.68rem] tracking-[0.09em] uppercase text-grey-600">{k}</dt>
                    <dd className="text-white text-[0.92rem] leading-normal mt-1 mb-0">{v}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </aside>
        </div>
      </section>

      <section className="section-padding bg-gradient-dark">
        <div className="container-max">
          <h2 className="font-heading text-white font-bold text-2xl sm:text-3xl mb-8">Services in {t.name}</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {fitout.map((s) => s && (
              <Link key={s.slug} href={`/services/${s.slug}`} className="card-surface p-5 block no-underline">
                <h3 className="font-heading text-white font-semibold mb-2 text-base">{s.name}</h3>
                <p className="text-grey-400 text-sm leading-relaxed mb-0">{s.shortDescription}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {neighbours.length > 0 && (
        <section className="section-padding">
          <div className="container-max">
            <h2 className="font-heading text-white font-bold text-2xl mb-6">Nearby</h2>
            <div className="flex flex-wrap gap-3">
              {neighbours.map((n) => (
                <Link key={n.slug} href={`/towns/${n.slug}`} className="card-surface px-5 py-3 no-underline text-[0.92rem] text-white">
                  {n.name}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <FAQSection faqs={faqs} title={`${t.name} — common questions`} />

      <section className="section-padding bg-gradient-dark">
        <div className="container-max">
          <h2 className="font-heading text-white font-bold text-2xl sm:text-3xl mb-4">Get a quote for {t.name}</h2>
          <p className="text-grey-400 mb-8 max-w-2xl leading-relaxed">
            Tell us the unit, the floor area and whether you are fitting out, refronting or both.
          </p>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
