interface BlogPostSchemaProps {
  title: string;
  description: string;
  slug: string;
  datePublished: string;
  dateModified: string;
  wordCount?: number;
}

export default function BlogPostSchema({ title, description, slug, datePublished, dateModified, wordCount }: BlogPostSchemaProps) {
  const siteUrl = 'https://www.urbanshopfronts.co.uk';

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: title,
    description,
    url: `${siteUrl}/blog/${slug}`,
    datePublished,
    dateModified,
    ...(wordCount && { wordCount }),
    author: {
      '@type': 'Organization',
      '@id': `${siteUrl}/#organization`,
      name: 'Urban Shopfronts',
      url: siteUrl,
    },
    publisher: {
      '@type': 'Organization',
      '@id': `${siteUrl}/#organization`,
      name: 'Urban Shopfronts',
      url: siteUrl,
      logo: {
        '@type': 'ImageObject',
        url: `${siteUrl}/assets/shopfront-2.jpeg`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${siteUrl}/blog/${slug}`,
    },
    isPartOf: {
      '@id': `${siteUrl}/#website`,
    },
    inLanguage: 'en-GB',
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
