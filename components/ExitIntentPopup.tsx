'use client';

import Link from 'next/link';
import { useCallback } from 'react';
import { useExitIntent, useModalChrome } from '@/lib/exit-intent';

/**
 * Urban's re-engagement banner takes a third angle, distinct from the other
 * two sites: Grewal leads on customer proof, Sigma on certification, and this
 * one leads on response speed — 24/7 emergency cover is the stat this site
 * already puts front and centre, and it is the argument that matters most to
 * someone whose shutter has just failed.
 *
 * Presented as a response timeline rather than a quote card or a spec grid.
 * The trigger logic in lib/exit-intent.ts is shared verbatim across all three.
 */

const TIMELINE = [
  { when: 'Right now', what: 'See an indicative price in about a minute — no waiting on a callback.' },
  { when: 'Within the hour', what: 'A real person calls to confirm the details and the access.' },
  { when: 'Same or next day', what: 'Free site survey, booked around your trading hours.' },
  { when: 'Emergency?', what: 'Boarding and make-safe around the clock, every day of the year.' },
];

export default function ExitIntentPopup() {
  const { show, dismiss } = useExitIntent();
  const onClose = useCallback(() => dismiss(), [dismiss]);
  useModalChrome(show, onClose);

  if (!show) return null;

  return (
    <div
      className="fixed inset-0 z-[9998] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="exit-banner-title"
    >
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={onClose} />

      <div className="relative w-full max-w-lg overflow-hidden rounded-2xl border border-[#f0b429]/25 bg-[#0d0d1e] shadow-2xl">
        <button
          onClick={onClose}
          className="absolute right-3 top-3 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white/5 text-[#a6a8c8] transition-colors hover:bg-white/10 hover:text-white"
          aria-label="Close"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
          </svg>
        </button>

        <div className="px-7 pt-8 pb-6">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#f0b429]/12 px-3 py-1.5">
            <span className="relative flex h-2 w-2" aria-hidden="true">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#f0b429] opacity-70" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#f0b429]" />
            </span>
            <span className="text-[11px] font-bold uppercase tracking-[0.15em] text-[#f0b429]">
              Covering 16 UK cities, 24/7
            </span>
          </div>

          <h2
            id="exit-banner-title"
            className="font-heading text-[1.4rem] font-bold leading-snug text-[#eef0f6]"
          >
            You do not have to wait for a quote.
          </h2>
          <p className="mt-2.5 text-sm leading-relaxed text-[#8385a8]">
            Most shopfront firms take days to come back to you. Here is how quickly this actually
            moves if you start now.
          </p>
        </div>

        {/* Response timeline — the structural device unique to this site's banner */}
        <ol className="relative mx-7 mb-6 border-l border-[#f0b429]/25 pl-6">
          {TIMELINE.map((row) => (
            <li key={row.when} className="relative pb-4 last:pb-0">
              <span
                className="absolute -left-[1.72rem] top-1 flex h-3 w-3 items-center justify-center rounded-full border-2 border-[#f0b429] bg-[#0d0d1e]"
                aria-hidden="true"
              />
              <p className="text-[13px] font-bold text-[#f0b429]">{row.when}</p>
              <p className="mt-0.5 text-[13px] leading-snug text-[#a6a8c8]">{row.what}</p>
            </li>
          ))}
        </ol>

        <div className="border-t border-white/[0.07] px-7 py-6">
          <div className="flex flex-col gap-2.5 sm:flex-row">
            <Link
              href="/instant-quote"
              onClick={onClose}
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg bg-[#f0b429] px-6 py-3.5 font-heading text-sm font-bold text-[#08081a] no-underline transition-colors hover:bg-[#f5c84c]"
            >
              Start with a price
            </Link>
            <a
              href="tel:07471043827"
              onClick={onClose}
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg border-2 border-[#d8dce8] px-6 py-3.5 font-heading text-sm font-bold text-[#d8dce8] no-underline transition-colors hover:bg-[#d8dce8] hover:text-[#08081a]"
            >
              Call 07471 043827
            </a>
          </div>
          <button
            onClick={onClose}
            className="mt-3 w-full text-center text-xs text-[#8385a8] underline-offset-2 hover:underline"
          >
            No thanks, I&apos;m just browsing
          </button>
        </div>
      </div>
    </div>
  );
}
