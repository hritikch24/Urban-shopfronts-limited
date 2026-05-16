'use client';

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

function getSessionId(): string {
  const key = 'urban_sid';
  let sid = sessionStorage.getItem(key);
  if (!sid) {
    sid = Math.random().toString(36).slice(2) + Date.now().toString(36);
    sessionStorage.setItem(key, sid);
  }
  return sid;
}

function getDevice(): string {
  const w = window.innerWidth;
  if (w < 768) return 'mobile';
  if (w < 1024) return 'tablet';
  return 'desktop';
}

function getBrowser(): string {
  const ua = navigator.userAgent;
  if (ua.includes('Chrome') && !ua.includes('Edg')) return 'Chrome';
  if (ua.includes('Safari') && !ua.includes('Chrome')) return 'Safari';
  if (ua.includes('Firefox')) return 'Firefox';
  if (ua.includes('Edg')) return 'Edge';
  return 'Other';
}

export default function CallTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      const anchor = (e.target as HTMLElement).closest('a[href^="tel:"]') as HTMLAnchorElement | null;
      if (!anchor) return;

      const phone = anchor.href.replace('tel:', '').replace(/[\s\-()]/g, '');

      const payload = {
        phone,
        page: pathname,
        referrer: document.referrer || null,
        utmSource: searchParams.get('utm_source'),
        utmMedium: searchParams.get('utm_medium'),
        utmCampaign: searchParams.get('utm_campaign'),
        device: getDevice(),
        browser: getBrowser(),
        sessionId: getSessionId(),
      };

      if (navigator.sendBeacon) {
        navigator.sendBeacon('/api/track-call', JSON.stringify(payload));
      } else {
        fetch('/api/track-call', {
          method: 'POST',
          body: JSON.stringify(payload),
          keepalive: true,
        }).catch(() => {});
      }
    }

    document.addEventListener('click', handleClick, true);
    return () => document.removeEventListener('click', handleClick, true);
  }, [pathname, searchParams]);

  return null;
}
