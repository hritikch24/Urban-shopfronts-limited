import { Metadata } from 'next';
import Link from 'next/link';
import { towns } from '@/data/towns';
import Breadcrumbs from '@/components/Breadcrumbs';

const SITE_URL = 'https://www.urbanshopfronts.co.uk';

export const metadata: Metadata = {
  title: 'Towns We Cover — Midlands & Wales',
  description:
    'Commercial fit-out, shopfronts and office partitioning across the West Midlands and Wales. Every town with its planning authority and commercial districts.',
  alternates: { canonical: `${SITE_URL}/towns` },
};

export default function TownsIndexPage() {
  const byRegion = towns.reduce<Record<string, typeof towns>>((acc, t) => {
    (acc[t.region] ??= []).push(t);
    return acc;
  }, {});
  const regions = Object.keys(byRegion).sort((a, b) => (a === 'Wales' ? 1 : b === 'Wales' ? -1 : a.localeCompare(b)));

  return (
    <>
      <section className="section-padding bg-gradient-dark">
        <div className="container-max">
          <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Towns' }]} />
          <h1 className="font-heading text-white font-bold text-3xl sm:text-4xl lg:text-5xl mt-7 mb-5">
            Towns we cover
          </h1>
          <p className="text-grey-400 max-w-3xl text-lg leading-relaxed">
            Our installation work is UK-wide, but these {towns.length} towns across the
            West Midlands and Wales are where we are most often on site — business parks,
            industrial estates and high streets where the work is fit-out, partitioning and
            shopfront installation rather than a one-off call.
          </p>
        </div>
      </section>

      {regions.map((region) => (
        <section key={region} className="py-10 px-6 lg:px-8">
          <div className="container-max">
            <h2 className="font-heading text-white font-bold text-xl mb-5">{region}</h2>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {byRegion[region]
                .sort((a, b) => (a.miles ?? 999) - (b.miles ?? 999) || a.name.localeCompare(b.name))
                .map((t) => (
                  <Link key={t.slug} href={`/towns/${t.slug}`} className="card-surface p-5 block no-underline">
                    <div className="flex items-baseline justify-between gap-3">
                      <span className="text-white font-heading font-semibold text-base">{t.name}</span>
                      {t.miles !== null && <span className="text-gold font-mono text-xs">{t.miles} mi</span>}
                    </div>
                    <p className="text-grey-600 text-[0.82rem] leading-snug mt-2 mb-0">{t.council}</p>
                  </Link>
                ))}
            </div>
          </div>
        </section>
      ))}
    </>
  );
}
