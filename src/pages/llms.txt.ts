import type { APIRoute } from 'astro';
import { SITE, fullAddress, price } from '../config/site';
import { ROUTES, type RouteKey } from '../i18n/routes';
import { getPage } from '../content';
import { absUrl } from '../lib/links';

/** /llms.txt — curated AI-crawler index (llmstxt.org format), generated from site content. */
export const GET: APIRoute = () => {
  const line = (k: RouteKey, lang: 'en' | 'es' = 'en') => {
    const p = getPage(k, lang);
    return `- [${p.title.replace(/\s*\|.*$/, '')}](${absUrl(ROUTES[k][lang])}): ${p.description}`;
  };
  const legal = price(SITE.prices.dnaLegal);
  const pom = price(SITE.prices.dnaPeaceOfMind);
  const body = `# ${SITE.name} - Drug, Alcohol, DNA & Lab Collection Services in Marshall, TX

> ${SITE.name} is a bilingual (English/Spanish) specimen collection provider in ${SITE.address.city}, Texas (${SITE.county}). It offers workplace and personal drug & alcohol screening processed by SAMHSA-certified partner laboratories with MRO verification, AABB chain-of-custody legal DNA paternity testing${legal ? ` (${legal} legal${pom ? `, ${pom} peace-of-mind` : ''})` : ''}, DOT urine drug testing (random, post-accident, pre-employment, return-to-duty and follow-up), collection and compliance support, notary public services, DOT compliance services for employers and fleets, in-home and walk-in blood draws, specialty lab kit draws, early gender reveal blood tests, and 24/7 mobile on-site collection across East Texas.

- Address: ${fullAddress()}
- Phone: ${SITE.phone.display} (24/7 dispatch: ${SITE.emergencyPhone.display})
- Languages: English, Español
- Service area: ${SITE.serviceArea.join(', ')}

## Core Services
${(['drug', 'dna', 'dot', 'mobile', 'notary'] as RouteKey[]).map((k) => line(k)).join('\n')}

## Lab & Blood Draw Services
${(['blood', 'kits', 'gender'] as RouteKey[]).map((k) => line(k)).join('\n')}

## Servicios en Español
${(['home', 'drug', 'dna', 'mobile', 'blood'] as RouteKey[]).map((k) => line(k, 'es')).join('\n')}

## Operational & Regulatory Standards
${(['compliance', 'about', 'area', 'contact'] as RouteKey[]).map((k) => line(k)).join('\n')}

## Optional
- [Full site content in Markdown](${absUrl('/llms-full.txt')})
`;
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
