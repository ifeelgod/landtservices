import { SITE, hasValue } from '../config/site';
import type { Lang } from '../i18n/routes';
import type { PageContent } from '../content/types';
import { absUrl } from './links';

export const ORG_ID = `${SITE.url}/#organization`;
export const WEBSITE_ID = `${SITE.url}/#website`;

const strip = (s: string) => s.replace(/<[^>]+>/g, '');

export function organizationNode() {
  const sameAs = Object.values(SITE.social).filter(hasValue);
  return {
    '@type': ['MedicalBusiness', 'LocalBusiness'],
    '@id': ORG_ID,
    name: SITE.name,
    url: SITE.url,
    logo: absUrl('/logo.svg'),
    image: absUrl('/og-image.png'),
    telephone: SITE.phone.e164,
    email: SITE.email,
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      streetAddress: SITE.address.street,
      addressLocality: SITE.address.city,
      addressRegion: SITE.address.region,
      postalCode: SITE.address.zip,
      addressCountry: SITE.address.country,
    },
    geo: { '@type': 'GeoCoordinates', latitude: SITE.geo.lat, longitude: SITE.geo.lng },
    openingHoursSpecification: SITE.hours.map((h) => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: h.days,
      opens: h.opens,
      closes: h.closes,
    })),
    knowsLanguage: ['en', 'es'],
    areaServed: [
      { '@type': 'AdministrativeArea', name: `${SITE.county}, TX` },
      ...SITE.serviceArea.map((c) => ({ '@type': 'City', name: c.includes(',') ? c : `${c}, TX` })),
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: SITE.emergencyPhone.e164,
      contactType: 'customer service',
      availableLanguage: ['English', 'Spanish'],
      hoursAvailable: 'Mo-Su 00:00-23:59',
    },
    ...(sameAs.length ? { sameAs } : {}),
  };
}

export function websiteNode() {
  return {
    '@type': 'WebSite',
    '@id': WEBSITE_ID,
    url: SITE.url,
    name: SITE.name,
    publisher: { '@id': ORG_ID },
    inLanguage: ['en', 'es'],
  };
}

/** Build the full @graph for a page from its content blocks. */
export function pageGraph(page: PageContent, lang: Lang, pathname: string) {
  const url = absUrl(pathname);
  const graph: Record<string, unknown>[] = [organizationNode(), websiteNode()];

  graph.push({
    '@type': page.schemaType ?? 'WebPage',
    '@id': `${url}#webpage`,
    url,
    name: page.title,
    description: page.description,
    isPartOf: { '@id': WEBSITE_ID },
    about: { '@id': ORG_ID },
    inLanguage: lang,
  });

  if (page.service) {
    const s = page.service;
    const offers = s.offers?.filter((o) => o.price != null).map((o) => ({
      '@type': 'Offer',
      name: o.name,
      price: o.price,
      priceCurrency: 'USD',
    }));
    graph.push({
      '@type': 'Service',
      '@id': `${url}#service`,
      name: s.name,
      serviceType: s.serviceType,
      description: s.description,
      provider: { '@id': ORG_ID },
      areaServed: { '@type': 'AdministrativeArea', name: 'East Texas' },
      inLanguage: lang,
      ...(offers && offers.length ? { offers } : {}),
    });
  }

  const faqs = page.blocks.flatMap((b) => (b.type === 'faq' ? b.items : []));
  if (faqs.length) {
    graph.push({
      '@type': 'FAQPage',
      '@id': `${url}#faq`,
      inLanguage: lang,
      mainEntity: faqs.map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: strip(f.a) },
      })),
    });
  }

  for (const b of page.blocks) {
    if (b.type === 'steps' && b.howTo) {
      graph.push({
        '@type': 'HowTo',
        '@id': `${url}#howto`,
        name: b.title,
        inLanguage: lang,
        step: b.steps.map((s, i) => ({ '@type': 'HowToStep', position: i + 1, name: s.title, text: strip(s.text) })),
      });
      break;
    }
  }

  return { '@context': 'https://schema.org', '@graph': graph };
}
