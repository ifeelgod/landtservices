export type Lang = 'en' | 'es';
export const LANGS: Lang[] = ['en', 'es'];

/** Paired EN ↔ ES routes. Drives the language toggle, hreflang tags and nav. */
export const ROUTES = {
  home: { en: '/', es: '/es/' },
  drug: { en: '/drug-testing/', es: '/es/pruebas-de-drogas/' },
  dna: { en: '/dna-testing/', es: '/es/pruebas-adn/' },
  blood: { en: '/blood-draws/', es: '/es/extraccion-de-sangre/' },
  kits: { en: '/specialty-lab-kits/', es: '/es/kits-de-laboratorio/' },
  gender: { en: '/gender-reveal-test/', es: '/es/prueba-de-genero/' },
  dot: { en: '/dot-services/', es: '/es/servicios-dot/' },
  mobile: { en: '/mobile-testing/', es: '/es/servicio-movil/' },
  about: { en: '/about/', es: '/es/nosotros/' },
  area: { en: '/service-area/', es: '/es/area-de-servicio/' },
  compliance: { en: '/compliance/', es: '/es/cumplimiento/' },
  contact: { en: '/contact/', es: '/es/contacto/' },
  privacy: { en: '/privacy/', es: '/es/privacidad/' },
  notary: { en: '/notary/', es: '/es/notario/' },
  // Tier 3 routes
  corporate: { en: '/corporate/', es: '/es/empresas/' },
  longview: { en: '/locations/longview/', es: '/es/ubicaciones/longview/' },
  marshall: { en: '/locations/marshall/', es: '/es/ubicaciones/marshall/' },
  carthage: { en: '/locations/carthage/', es: '/es/ubicaciones/carthage/' },
  kilgore: { en: '/locations/kilgore/', es: '/es/ubicaciones/kilgore/' },
  hallsville: { en: '/locations/hallsville/', es: '/es/ubicaciones/hallsville/' },
} as const satisfies Record<string, Record<Lang, string>>;

export type RouteKey = keyof typeof ROUTES;

export const path = (key: RouteKey, lang: Lang) => ROUTES[key][lang];

const norm = (p: string) => (p.endsWith('/') ? p : `${p}/`);

/** Find the route key for a given pathname (either language). */
export function routeKeyOf(pathname: string): RouteKey | undefined {
  const p = norm(pathname);
  return (Object.keys(ROUTES) as RouteKey[]).find((k) => ROUTES[k].en === p || ROUTES[k].es === p);
}

/** Path of the same page in the other language (falls back to that language's home). */
export function alternatePath(pathname: string, target: Lang): string {
  const key = routeKeyOf(pathname);
  return key ? ROUTES[key][target] : ROUTES.home[target];
}

export const langFromPath = (pathname: string): Lang => (norm(pathname).startsWith('/es/') ? 'es' : 'en');
