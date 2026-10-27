/**
 * ============================================================================
 *  L&T Solutions — SINGLE SOURCE OF TRUTH FOR BUSINESS FACTS
 * ============================================================================
 *  Every value marked `TODO: VERIFY` is a PLACEHOLDER taken from the planning
 *  blueprint. Replace with real, verified information before launch, then set
 *  `isDraft: false` to remove the "DRAFT" ribbon.
 *
 *  ⚠️  Credential badges create legal/advertising liability if inaccurate.
 *      Only leave a badge `true` if the business can document it.
 * ============================================================================
 */

export const SITE = {
  /** Shows a "DRAFT — placeholder data" ribbon on every page. Set false at launch. */
  isDraft: true,

  name: 'L&T Solutions',
  shortName: 'L&T Solutions',
  /** Must match `site` in astro.config.mjs. */
  url: 'https://lt-services.com', // TODO: VERIFY domain

  phone: { display: '877-329-5339', e164: '+18773295339' }, // OFFICIAL (client-supplied)
  /** 24/7 dispatch / on-call line (can equal main phone). */
  emergencyPhone: { display: '877-329-5339', e164: '+18773295339' }, // same toll-free line; TODO: VERIFY 24/7 on-call
  email: 'info@lt-services.com', // TODO: VERIFY

  address: {
    street: '203 A W. Pinecrest Dr.', // OFFICIAL (client-supplied)
    city: 'Marshall',
    region: 'TX',
    zip: '75670',
    country: 'US',
  },
  geo: { lat: 32.54487, lng: -94.36742 }, // TODO: VERIFY - coordinates are from the OLD placeholder address; update for 203 A W. Pinecrest Dr.

  /** Clinic walk-in hours. Mobile dispatch is advertised as 24/7 separately. */
  hours: [
    { days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '08:00', closes: '17:00' },
  ], // TODO: VERIFY

  /** Prices in USD. Set a value to `null` to hide it everywhere. */
  prices: {
    dnaLegal: 250 as number | null, // TODO: VERIFY
    dnaPeaceOfMind: 150 as number | null, // TODO: VERIFY
  },

  /** Toggle each trust badge. Only enable what you can document. */
  badges: {
    clia: true, // TODO: VERIFY — CLIA compliant collection / partner lab
    aabb: true, // TODO: VERIFY — AABB-accredited partner lab / trained collector
    samhsa: true, // TODO: VERIFY — SAMHSA-certified partner laboratory
    dot: true, // TODO: VERIFY — DOT-qualified collectors (49 CFR Part 40)
    mro: true, // TODO: VERIFY — MRO-verified results
    spanish: true,
  },

  /** Empty strings are omitted from the site and JSON-LD sameAs. */
  social: {
    facebook: '', // TODO: add e.g. https://www.facebook.com/...
    linkedin: '', // TODO: add
    google: '', // TODO: Google Business Profile URL
  },

  /** Appointment form delivery (static-site friendly). */
  form: {
    /** Web3Forms (https://web3forms.com) — free, emails each submission to you. */
    endpoint: 'https://api.web3forms.com/submit',
    accessKey: 'REPLACE_WITH_WEB3FORMS_ACCESS_KEY', // TODO: required for the form to work
  },

  /** Optional Tier-2 bridge: link to Acuity / Square / Calendly booking page. */
  booking: { externalUrl: '' },

  /** Optional client results portal URL. Empty = shown as "Coming soon". */
  portal: { url: '' },

  /** Cities served (used on Service Area page, footer and JSON-LD). */
  serviceArea: ['Marshall', 'Longview', 'Hallsville', 'Kilgore', 'Carthage', 'Jefferson', 'Tyler', 'Shreveport, LA'],
  county: 'Harrison County',
} as const;

export const hasValue = (s: string | null | undefined) => typeof s === 'string' && s.trim().length > 0;

export const fullAddress = () =>
  `${SITE.address.street}, ${SITE.address.city}, ${SITE.address.region} ${SITE.address.zip}`;

export const mapsUrl = () =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${SITE.name}, ${fullAddress()}`)}`;

export const price = (v: number | null) => (v == null ? null : `$${v}`);
