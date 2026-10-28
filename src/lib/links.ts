import { SITE, hasValue } from '../config/site';
import { ROUTES, withBase, type Lang, type RouteKey } from '../i18n/routes';
import type { Cta } from '../content/types';

export const telHref = (e164: string) => `tel:${e164}`;

/** Resolve a Cta href (RouteKey | 'tel' | 'emergency' | '#anchor' | URL) to a real href. */
export function resolveHref(href: Cta['href'], lang: Lang): string {
  if (href === 'tel') return telHref(SITE.phone.e164);
  if (href === 'emergency') return telHref(SITE.emergencyPhone.e164);
  if (href.startsWith('#') || href.startsWith('http')) return href;
  if (href === 'contact' && hasValue(SITE.booking.externalUrl)) return SITE.booking.externalUrl;
  const p = ROUTES[href as RouteKey]?.[lang] ?? ROUTES.home[lang];
  return withBase(p);
}

export const absUrl = (p: string) => {
  const siteUrl = import.meta.env.SITE || SITE.url;
  return new URL(withBase(p), siteUrl).href;
};
