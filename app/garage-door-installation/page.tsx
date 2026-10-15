import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import GarageDoorPage, { withTypes } from '@/components/GarageDoorPage';
import { garageDoors, garageLive, installationCopy as copy } from '@/data/garage-doors';

// Held until the owner confirms garage door work (data/garage-doors.ts).
export function generateMetadata(): Metadata {
  if (!garageLive) return {};
  const url = `https://www.urbanshopfronts.co.uk${copy.path}`;
  const description = withTypes(copy.metaDescription, garageDoors.installTypes);
  return {
    title: copy.metaTitle,
    description,
    alternates: { canonical: url },
    robots: garageDoors.published ? undefined : { index: false, follow: true },
    openGraph: { title: copy.metaTitle, description, url, type: 'website' },
  };
}

export default function Page() {
  if (!garageLive) notFound();
  return <GarageDoorPage copy={copy} types={garageDoors.installTypes} repair={false} />;
}
