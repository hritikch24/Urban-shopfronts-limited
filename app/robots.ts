import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const siteUrl = 'https://www.urbanshopfronts.co.uk';

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/metrics'],
      },
    ],
    sitemap: 'https://www.urbanshopfronts.co.uk/sitemap.xml',
  };
}
