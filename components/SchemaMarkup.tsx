interface SchemaMarkupProps {
  type: 'LocalBusiness' | 'Service' | 'FAQPage';
  data?: Record<string, unknown>;
}

const defaultLocalBusiness = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Urban Shopfronts',
  legalName: 'Urban Shopfronts Limited',
  description:
    'Professional shop front installation and repair specialists. We provide aluminium shop fronts, roller shutters, security doors, automatic doors, bi-fold doors, fire doors, and emergency callout services across the UK.',
  url: 'https://www.urbanshopfronts.co.uk',
  telephone: '+447471043827',
  email: 'sales@urbanshopfronts.co.uk',
  foundingDate: '2024',
  priceRange: '££',
  image: 'https://www.urbanshopfronts.co.uk/assets/shopfront-2.jpeg',
  logo: 'https://www.urbanshopfronts.co.uk/assets/shopfront-2.jpeg',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '128 City Road',
    addressLocality: 'London',
    postalCode: 'EC1V 2NX',
    addressCountry: 'GB',
    addressRegion: 'England',
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '18:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Saturday',
      opens: '09:00',
      closes: '16:00',
    },
  ],
  contactPoint: [
    {
      '@type': 'ContactPoint',
      telephone: '+447471043827',
      contactType: 'customer support',
      contactOption: 'TollFree',
      availableLanguage: 'English',
      hoursAvailable: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        opens: '00:00',
        closes: '23:59',
      },
    },
    {
      '@type': 'ContactPoint',
      telephone: '+447471043827',
      contactType: 'sales',
      availableLanguage: 'English',
    },
  ],
  areaServed: [
    { '@type': 'City', name: 'London' },
    { '@type': 'City', name: 'Birmingham' },
    { '@type': 'City', name: 'Manchester' },
    { '@type': 'City', name: 'Leeds' },
    { '@type': 'City', name: 'Liverpool' },
    { '@type': 'City', name: 'Bristol' },
    { '@type': 'City', name: 'Sheffield' },
    { '@type': 'City', name: 'Glasgow' },
    { '@type': 'City', name: 'Cardiff' },
    { '@type': 'City', name: 'Newcastle upon Tyne' },
    { '@type': 'City', name: 'Nottingham' },
    { '@type': 'City', name: 'Leicester' },
    { '@type': 'City', name: 'Edinburgh' },
    { '@type': 'City', name: 'Southampton' },
    { '@type': 'City', name: 'Brighton' },
    { '@type': 'City', name: 'Coventry' },
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Shop Front Services',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Aluminium Shop Fronts', url: 'https://www.urbanshopfronts.co.uk/services/aluminium-shopfronts' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Roller Shutters', url: 'https://www.urbanshopfronts.co.uk/services/roller-shutters' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Security Doors', url: 'https://www.urbanshopfronts.co.uk/services/security-doors' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Automatic Doors', url: 'https://www.urbanshopfronts.co.uk/services/automatic-doors' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Bi-Fold Doors', url: 'https://www.urbanshopfronts.co.uk/services/bi-fold-doors' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Fire Doors', url: 'https://www.urbanshopfronts.co.uk/services/fire-doors' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Shop Front Repairs', url: 'https://www.urbanshopfronts.co.uk/services/shopfront-repairs' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Emergency Callout', url: 'https://www.urbanshopfronts.co.uk/services/emergency-callout' } },
    ],
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5.0',
    reviewCount: '35',
    bestRating: '5',
    worstRating: '1',
  },
  sameAs: [
    'https://wa.me/447471043827',
    'https://www.yell.com/biz/urban-shopfronts-london/',
    'https://www.bark.com/en/gb/company/urban-shopfronts/',
    'https://www.freeindex.co.uk/profile(urban-shopfronts)/',
  ],
  knowsAbout: [
    'Aluminium shopfront installation',
    'Commercial roller shutter installation',
    'Security door installation LPS 1175',
    'Automatic door systems BS EN 16005',
    'Bi-fold door systems',
    'Fire door installation FD30 FD60',
    'Shopfront repairs and emergency glazing',
    'Emergency shopfront boarding',
    'Conservation area shopfront planning',
    'Listed building shopfront consent',
    'Building Regulations Part L compliance',
    'PAS 24 security glazing',
    'DDA compliant entrances',
    'Thermally broken aluminium profiles',
    'Commercial entrance solutions UK',
  ],
  slogan: 'Commercial Shopfronts, Built to Last',
  numberOfEmployees: { '@type': 'QuantitativeValue', minValue: 10, maxValue: 25 },
  paymentAccepted: 'Cash, Bank Transfer, Card',
  currenciesAccepted: 'GBP',
  isicV4: '4330',
};

export default function SchemaMarkup({ type, data }: SchemaMarkupProps) {
  let schema: Record<string, unknown>;

  if (type === 'LocalBusiness') {
    schema = data || defaultLocalBusiness;
  } else if (type === 'Service') {
    schema = {
      '@context': 'https://schema.org',
      '@type': 'Service',
      provider: {
        '@type': 'LocalBusiness',
        name: 'Urban Shopfronts',
        url: 'https://www.urbanshopfronts.co.uk',
      },
      ...data,
    };
  } else {
    schema = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      ...data,
    };
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
