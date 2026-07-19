import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Breadcrumbs from '@/components/Breadcrumbs';
import SchemaMarkup from '@/components/SchemaMarkup';

const videos = [
  {
    slug: 'shopfront-installation',
    src: '/assets/project-video-1.mp4',
    title: 'Shopfront Installation in Progress',
    description: 'Watch our team installing an aluminium shopfront for a commercial premises in the UK. This video shows the full process from frame fitting to glass installation and finishing.',
    uploadDate: '2025-01-15',
  },
  {
    slug: 'site-survey',
    src: '/assets/project-video-2.mp4',
    title: 'On-Site Survey and Assessment',
    description: 'Urban Shopfronts engineer conducting a free site survey and taking measurements for a shopfront project. See how we assess your premises before providing a detailed quote.',
    uploadDate: '2025-01-15',
  },
  {
    slug: 'completed-project',
    src: '/assets/project-video-3.mp4',
    title: 'Completed Project Walkthrough',
    description: 'A walkthrough of a recently completed shopfront installation by Urban Shopfronts. See the quality of finish and attention to detail in our aluminium shopfront work.',
    uploadDate: '2025-01-15',
  },
];

interface PageProps {
  params: Promise<{ video: string }>;
}

export async function generateStaticParams() {
  return videos.map((v) => ({ video: v.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { video: slug } = await params;
  const video = videos.find((v) => v.slug === slug);
  if (!video) return {};

  return {
    title: `${video.title} | Urban Shopfronts`,
    description: video.description,
    alternates: { canonical: `https://www.urbanshopfronts.co.uk/gallery/${slug}` },
    openGraph: {
      title: `${video.title} | Urban Shopfronts`,
      description: video.description,
      url: `https://www.urbanshopfronts.co.uk/gallery/${slug}`,
      type: 'video.other',
      videos: [{ url: `https://www.urbanshopfronts.co.uk${video.src}` }],
    },
  };
}

export default async function VideoPage({ params }: PageProps) {
  const { video: slug } = await params;
  const video = videos.find((v) => v.slug === slug);
  if (!video) notFound();

  const siteUrl = 'https://www.urbanshopfronts.co.uk';

  const videoSchema = {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    name: video.title,
    description: video.description,
    contentUrl: `${siteUrl}${video.src}`,
    thumbnailUrl: `${siteUrl}/assets/shopfront-2.jpeg`,
    uploadDate: video.uploadDate,
    duration: 'PT1M30S',
    publisher: {
      '@type': 'Organization',
      name: 'Urban Shopfronts',
      url: siteUrl,
    },
    embedUrl: `${siteUrl}/gallery/${slug}`,
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
      { '@type': 'ListItem', position: 2, name: 'Gallery', item: `${siteUrl}/gallery` },
      { '@type': 'ListItem', position: 3, name: video.title, item: `${siteUrl}/gallery/${slug}` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(videoSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <SchemaMarkup type="LocalBusiness" />

      <section className="bg-gradient-to-b from-gray-900 to-gray-800 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Breadcrumbs items={[
            { label: 'Home', href: '/' },
            { label: 'Gallery', href: '/gallery' },
            { label: video.title },
          ]} />
          <h1 className="text-3xl md:text-4xl font-bold mt-4">{video.title}</h1>
          <p className="text-gray-300 mt-3 max-w-2xl mx-auto">{video.description}</p>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <video
            controls
            preload="metadata"
            className="w-full aspect-video rounded-lg shadow-lg"
            playsInline
            poster="/assets/shopfront-2.jpeg"
          >
            <source src={video.src} type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/gallery" className="text-blue-600 hover:text-blue-800 font-medium">
              &larr; Back to Gallery
            </Link>
            <Link href="/contact" className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 text-center">
              Get a Free Quote
            </Link>
          </div>

          <div className="mt-12 grid md:grid-cols-3 gap-4">
            {videos.filter((v) => v.slug !== slug).map((v) => (
              <Link key={v.slug} href={`/gallery/${v.slug}`} className="group">
                <div className="bg-gray-100 rounded-lg p-4 hover:bg-gray-200 transition-colors">
                  <h3 className="font-semibold text-gray-900 group-hover:text-blue-600">{v.title}</h3>
                  <p className="text-sm text-gray-600 mt-1 line-clamp-2">{v.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
