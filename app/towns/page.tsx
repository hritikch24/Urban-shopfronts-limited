import { Metadata } from 'next';
import Link from 'next/link';
import { towns } from '@/data/towns';
import Breadcrumbs from '@/components/Breadcrumbs';

const SITE_URL = 'https://www.urbanshopfronts.co.uk';

/**
 * One page for every town, not a page per town. Each town's own detail
 * (council, districts, the fit-out typical there) is unique, but a page per
 * town wrapped that in so much shared template that the pages measured
 * 64–70% identical to each other, the scaled-content pattern this site must
 * avoid. Anchors (#dudley) keep each town addressable.
 */
export const metadata: Metadata = {
  title: 'Towns We Cover — Midlands & Wales',
  description:
    'Commercial fit-out, shopfronts and office partitioning across the West Midlands and Wales: each town with its planning authority, business parks and typical work.',
  alternates: { canonical: `${SITE_URL}/towns` },
};

export default function TownsPage() {
  const byRegion = towns.reduce<Record<string, typeof towns>>((acc, t) => {
    (acc[t.region] ??= []).push(t);
    return acc;
  }, {});
  const regions = Object.keys(byRegion).sort((a, b) => (a === 'Wales' ? 1 : b === 'Wales' ? -1 : a.localeCompare(b)));
  const ordered = (region: string) =>
    [...byRegion[region]].sort((a, b) => (a.miles ?? 999) - (b.miles ?? 999) || a.name.localeCompare(b.name));

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
              { '@type': 'ListItem', position: 2, name: 'Towns', item: `${SITE_URL}/towns` },
            ],
          }),
        }}
      />
      <section className="section-padding bg-gradient-dark">
        <div className="container-max">
          <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Towns' }]} />
          <h1 className="font-heading text-white font-bold text-3xl sm:text-4xl lg:text-5xl mt-7 mb-5">
            Towns we cover in the Midlands and Wales
          </h1>
          <p className="text-grey-400 max-w-3xl text-lg leading-relaxed">
            Our installation work is UK-wide. Below are {towns.length} towns across the West Midlands and Wales, each
            with its planning authority, its business parks and high streets, and the fit-out, partitioning and
            shopfront work typical there. For the cities, see <Link href="/areas" className="text-gold">areas we cover</Link>.
          </p>
          <nav aria-label="Jump to a town" className="mt-8 flex flex-wrap gap-2">
            {regions.flatMap((r) => ordered(r)).map((t) => (
              <a key={t.slug} href={`#${t.slug}`} className="card-surface px-3 py-1.5 text-sm text-white no-underline">
                {t.name}
              </a>
            ))}
          </nav>
        </div>
      </section>

      {regions.map((region) => (
        <section key={region} className="section-padding">
          <div className="container-max">
            <h2 className="font-heading text-white font-bold text-2xl sm:text-3xl mb-8">{region}</h2>
            <div className="grid gap-6 lg:grid-cols-2">
              {ordered(region).map((t) => (
                <article key={t.slug} id={t.slug} className="card-surface p-6 scroll-mt-24">
                  <div className="flex items-baseline justify-between gap-3">
                    <h3 className="text-white font-heading font-semibold text-xl">{t.name}</h3>
                    {t.miles !== null && <span className="text-gold font-mono text-xs">{t.miles} miles from Birmingham</span>}
                  </div>
                  <p className="text-grey-600 text-sm mt-1">
                    {t.council} · {t.districts.join(' · ')}
                  </p>
                  <p className="text-charcoal leading-relaxed mt-4 mb-0">{t.focus}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      ))}

      <section className="section-padding bg-gradient-dark">
        <div className="container-max">
          <h2 className="font-heading text-white font-bold text-2xl mb-4">Planning and building regulations</h2>
          <p className="text-charcoal leading-relaxed max-w-3xl">
            Each town’s council, listed above, determines planning permission and advertisement consent. A new
            shopfront is usually a material alteration that needs planning permission, and illuminated or projecting
            signage needs advertisement consent as a separate application. Internal partitioning normally needs no
            planning permission, though Building Regulations can still apply. In Wales, building regulations are
            devolved and differ from the English approved documents in places, so Welsh jobs are specified to the
            Welsh requirements.
          </p>
          <div className="flex flex-wrap gap-3 mt-6">
            <Link href="/contact" className="btn-gold">Get a quote</Link>
            <Link href="/services/aluminium-partitions" className="btn-outline">Office partitions</Link>
            <Link href="/services/aluminium-shopfronts" className="btn-outline">Shopfronts</Link>
          </div>
        </div>
      </section>
    </>
  );
}
