import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Shopfront Installation Guides & Articles',
  description:
    'Expert guides on shopfront maintenance, planning permission, fire doors, security ratings, and emergency boarding from Urban Shopfronts.',
  alternates: {
    canonical: 'https://www.urbanshopfronts.co.uk/blog',
  },
  openGraph: {
    title: 'Shopfront Guides & Articles — Urban Shopfronts',
    description: 'Expert guides on shopfront maintenance, planning permission, fire doors, security ratings, and emergency boarding.',
    url: 'https://www.urbanshopfronts.co.uk/blog',
  },
};

const posts = [
  {
    slug: 'shopfront-design-trends-uk-2026',
    title: 'Shopfront Design Trends for 2026: What\'s Changing in UK Retail',
    description:
      'Discover the top commercial shopfront design trends for 2026 in the UK. From minimalist aluminium frames to smart glass technology and sustainable materials.',
  },
  {
    slug: 'commercial-security-shutters-guide-uk',
    title: 'The Complete Guide to Commercial Security Shutters in the UK (2026)',
    description:
      'Everything UK business owners need to know about commercial security shutters in 2026. Types, security ratings, costs, insurance requirements, and installation.',
  },
  {
    slug: 'shopfront-regulations-building-standards-uk-2026',
    title: 'UK Shopfront Regulations & Building Standards: A 2026 Guide for Business Owners',
    description:
      'Navigate UK shopfront regulations in 2026. Covers Building Regulations Part L, Part M, Part B, planning permission, conservation areas, and DDA compliance.',
  },
  {
    slug: 'how-to-maintain-commercial-roller-shutters',
    title: 'How to Maintain Commercial Roller Shutters: A Complete Guide',
    description:
      'Learn the essential inspection schedules, lubrication routines, and cleaning methods that keep commercial roller shutters operating reliably for years.',
  },
  {
    slug: 'aluminium-shopfront-planning-permission-uk',
    title: 'Do You Need Planning Permission for an Aluminium Shopfront?',
    description:
      'Understand when permitted development rights apply, what changes in conservation areas, and how to navigate the UK planning application process.',
  },
  {
    slug: 'fd30-vs-fd60-fire-door-commercial-premises',
    title: 'FD30 vs FD60 Fire Doors: Which Does Your Business Need?',
    description:
      'A clear comparison of FD30 and FD60 fire resistance ratings, Building Regulations requirements, and how to choose the right door for your premises.',
  },
  {
    slug: 'what-is-lps-1175-security-rating',
    title: 'What Is the LPS 1175 Security Rating? A Business Owner\'s Guide',
    description:
      'Demystifying the LPS 1175 standard — what the security rating levels mean, how they affect insurance, and which level your business should target.',
  },
  {
    slug: 'shopfront-installation-cost-uk-2026',
    title: 'Shopfront Installation Costs in the UK (2026): What to Expect',
    description:
      'A detailed breakdown of shopfront installation costs across the UK in 2026, covering aluminium shopfronts, roller shutters, security doors, and what factors affect pricing.',
  },
  {
    slug: 'best-shopfront-company-uk-how-to-choose',
    title: 'How to Choose the Best Shopfront Company in the UK',
    description:
      'A practical checklist for finding a reliable, professional shopfront installation company. What to look for, red flags to avoid, and questions to ask before signing.',
  },
  {
    slug: 'emergency-shopfront-boarding-what-to-do',
    title: 'Emergency Shopfront Boarding: What to Do When Your Shop Is Broken Into',
    description:
      'Step-by-step advice on securing your premises after a break-in, dealing with insurers, and arranging permanent repairs quickly.',
  },
];

export default function BlogIndex() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.urbanshopfronts.co.uk"},{"@type":"ListItem","position":2,"name":"Blog","item":"https://www.urbanshopfronts.co.uk/blog"}]}) }} />
      <section className="section-padding bg-white">
        <div className="container-max">
          <Breadcrumbs
            items={[
              { label: 'Home', href: '/' },
              { label: 'Blog' },
            ]}
          />

          <h1 className="font-heading text-3xl md:text-4xl font-bold text-navy mt-4 mb-4">
            Shopfront Installation Guides &amp; Articles
          </h1>
          <p className="text-grey-600 max-w-2xl mb-10">
            Practical advice from our installation team — covering maintenance,
            regulations, security standards, and what to do in an emergency.
          </p>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="card-surface rounded-2xl p-6 flex flex-col hover:shadow-md transition-shadow"
              >
                <h2 className="font-heading text-lg font-semibold text-navy mb-2">
                  {post.title}
                </h2>
                <p className="text-charcoal text-sm leading-relaxed flex-1">
                  {post.description}
                </p>
                <span className="mt-4 text-sm font-medium text-gold">
                  Read article &rarr;
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
