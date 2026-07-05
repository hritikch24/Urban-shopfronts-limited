interface SchemaMarkupProps {
  type: 'LocalBusiness' | 'Service' | 'FAQPage';
  data?: Record<string, unknown>;
}

const defaultLocalBusiness = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://www.urbanshopfronts.co.uk/#localbusiness',
  name: 'Urban Shopfronts',
  legalName: 'Urban Shopfronts Limited',
  additionalType: 'https://en.wikipedia.org/wiki/Shopfront',
  description:
    'Professional shop front installation and repair specialists. We provide aluminium shop fronts, roller shutters, security doors, automatic doors, bi-fold doors, fire doors, and emergency callout services across the UK.',
  url: 'https://www.urbanshopfronts.co.uk',
  telephone: '+447471043827',
  email: 'sales@urbanshopfronts.co.uk',
  foundingDate: '2024',
  priceRange: '££',
  image: 'https://www.urbanshopfronts.co.uk/assets/shopfront-2.jpeg',
  logo: 'https://www.urbanshopfronts.co.uk/assets/shopfront-2.jpeg',
  hasMap: 'https://maps.google.com/?q=31+Norton+Close+Smethwick+B66+3NR',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '31 Norton Close',
    addressLocality: 'Smethwick',
    postalCode: 'B66 3NR',
    addressCountry: 'GB',
    addressRegion: 'West Midlands',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 52.4897,
    longitude: -1.9718,
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
    { '@type': 'Country', name: 'United Kingdom' },
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
    { '@type': 'City', name: 'Aberdeen' },
    { '@type': 'City', name: 'Bath' },
    { '@type': 'City', name: 'Bolton' },
    { '@type': 'City', name: 'Bournemouth' },
    { '@type': 'City', name: 'Bradford' },
    { '@type': 'City', name: 'Cambridge' },
    { '@type': 'City', name: 'Canterbury' },
    { '@type': 'City', name: 'Chelmsford' },
    { '@type': 'City', name: 'Chester' },
    { '@type': 'City', name: 'Colchester' },
    { '@type': 'City', name: 'Derby' },
    { '@type': 'City', name: 'Doncaster' },
    { '@type': 'City', name: 'Dundee' },
    { '@type': 'City', name: 'Exeter' },
    { '@type': 'City', name: 'Gloucester' },
    { '@type': 'City', name: 'Hull' },
    { '@type': 'City', name: 'Ipswich' },
    { '@type': 'City', name: 'Lancaster' },
    { '@type': 'City', name: 'Lincoln' },
    { '@type': 'City', name: 'Luton' },
    { '@type': 'City', name: 'Maidstone' },
    { '@type': 'City', name: 'Milton Keynes' },
    { '@type': 'City', name: 'Northampton' },
    { '@type': 'City', name: 'Norwich' },
    { '@type': 'City', name: 'Oxford' },
    { '@type': 'City', name: 'Peterborough' },
    { '@type': 'City', name: 'Plymouth' },
    { '@type': 'City', name: 'Portsmouth' },
    { '@type': 'City', name: 'Preston' },
    { '@type': 'City', name: 'Reading' },
    { '@type': 'City', name: 'Rotherham' },
    { '@type': 'City', name: 'Salford' },
    { '@type': 'City', name: 'Slough' },
    { '@type': 'City', name: 'Stoke-on-Trent' },
    { '@type': 'City', name: 'Sunderland' },
    { '@type': 'City', name: 'Swansea' },
    { '@type': 'City', name: 'Swindon' },
    { '@type': 'City', name: 'Wakefield' },
    { '@type': 'City', name: 'Wolverhampton' },
    { '@type': 'City', name: 'Worcester' },
    { '@type': 'City', name: 'York' },
    { '@type': 'City', name: 'Belfast' },
    { '@type': 'City', name: 'Middlesbrough' },
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
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Shutter Repair', url: 'https://www.urbanshopfronts.co.uk/services/shutter-repair' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Glass Replacement', url: 'https://www.urbanshopfronts.co.uk/services/glass-replacement' } },
    ],
  },
  sameAs: [
    'https://wa.me/447471043827',
    'https://share.google/IvMAmHyNVnS6hMCdh',
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
    'Roller shutter repair and spring replacement',
    'Commercial glass replacement and shopfront glazing',
  ],
  slogan: 'Commercial Shopfronts, Built to Last',
  numberOfEmployees: { '@type': 'QuantitativeValue', minValue: 10, maxValue: 25 },
  paymentAccepted: 'Cash, Bank Transfer, Card',
  currenciesAccepted: 'GBP',
  isicV4: '4330',
  parentOrganization: {
    '@id': 'https://www.urbanshopfronts.co.uk/#organization',
  },
};

const defaultOrganization = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': 'https://www.urbanshopfronts.co.uk/#organization',
  name: 'Urban Shopfronts',
  legalName: 'Urban Shopfronts Limited',
  url: 'https://www.urbanshopfronts.co.uk',
  logo: 'https://www.urbanshopfronts.co.uk/assets/shopfront-2.jpeg',
  telephone: '+447471043827',
  email: 'sales@urbanshopfronts.co.uk',
  foundingDate: '2024',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '31 Norton Close',
    addressLocality: 'Smethwick',
    postalCode: 'B66 3NR',
    addressCountry: 'GB',
    addressRegion: 'West Midlands',
  },
  sameAs: [
    'https://wa.me/447471043827',
    'https://share.google/IvMAmHyNVnS6hMCdh',
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
    'Roller shutter repair and spring replacement',
    'Commercial glass replacement and shopfront glazing',
  ],
  areaServed: { '@type': 'Country', name: 'United Kingdom' },
  numberOfEmployees: { '@type': 'QuantitativeValue', minValue: 10, maxValue: 25 },
};

export default function SchemaMarkup({ type, data }: SchemaMarkupProps) {
  if (type === 'LocalBusiness') {
    const localSchema = data || defaultLocalBusiness;
    return (
      <>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localSchema) }}
        />
        {!data && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(defaultOrganization) }}
          />
        )}
      </>
    );
  }

  let schema: Record<string, unknown>;

  if (type === 'Service') {
    schema = {
      '@context': 'https://schema.org',
      '@type': 'Service',
      provider: {
        '@type': 'LocalBusiness',
        name: 'Urban Shopfronts',
        telephone: '+447471043827',
        url: 'https://www.urbanshopfronts.co.uk',
        address: {
          '@type': 'PostalAddress',
          streetAddress: '31 Norton Close',
          addressLocality: 'Smethwick',
          postalCode: 'B66 3NR',
          addressCountry: 'GB',
          addressRegion: 'West Midlands',
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: 52.4897,
          longitude: -1.9718,
        },
      },
      areaServed: { '@type': 'Country', name: 'United Kingdom' },
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
