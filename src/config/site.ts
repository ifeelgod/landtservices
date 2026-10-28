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

  /** Prices in USD. Official client price list. */
  prices: {
    // DNA Testing Services
    dnaLegal: 425 as number | null,
    dnaLegalAddlPerson: 95 as number | null,
    dnaPeaceOfMind: 325 as number | null,
    dnaPeaceOfMindAddlPerson: 95 as number | null,
    dnaGrandparentage: 500 as number | null,
    dnaGrandparentageAddlPerson: 125 as number | null,
    dnaSibling: 400 as number | null,
    dnaAvuncular: 510 as number | null,
    dnaImmigration: 1000 as number | null,
    dnaPrenatal: 1200 as number | null,
    dnaInfidelity: 525 as number | null,
    dnaGeneticWeight: 425 as number | null,
    dnaAncestry: 385 as number | null,
    dnaPet: 300 as number | null,

    // Drug & Alcohol Testing Services
    drugDotNonDot: 75 as number | null,
    drugRapid: 75 as number | null,
    drugPostAccident: 85 as number | null,
    alcoholInitial: 85 as number | null,
    alcoholConfirmation: 105 as number | null,
    drugHairFollicle: 125 as number | null,
    drugNail: 150 as number | null,

    // Verification & Compliance Services
    fingerprintsInkRoll2Cards: 50 as number | null,
    formI9Verification: 75 as number | null,
    backgroundChecks: 75 as number | null,

    // Immigration Consultation Services (USCIS filing fees separate)
    immigrationWorkPermitI765: 825 as number | null,
    immigrationDacaRenewal: 900 as number | null,
    immigrationNaturalizationN400: 1300 as number | null,
    immigrationTravelDocI131: 1350 as number | null,
    immigrationAffidavitSupportI864: 1650 as number | null,
    immigrationFamilyPetitionI130: 1700 as number | null,
    immigrationMarriageGreenCard: 2150 as number | null,
    immigrationAdjustmentStatusI485: 2250 as number | null,
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
