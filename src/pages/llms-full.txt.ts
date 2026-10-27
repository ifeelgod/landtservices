import type { APIRoute } from 'astro';
import { SITE, fullAddress } from '../config/site';
import { ROUTES, LANGS, type RouteKey } from '../i18n/routes';
import { getPage } from '../content';
import { pageToMarkdown } from '../lib/markdown';
import { absUrl } from '../lib/links';

/** /llms-full.txt — the entire site's content as clean Markdown, one request for LLMs. */
export const GET: APIRoute = () => {
  const keys = (Object.keys(ROUTES) as RouteKey[]).filter((k) => k !== 'privacy');
  const sections = LANGS.flatMap((lang) =>
    keys.map((k) => {
      const p = getPage(k, lang);
      return `---\nURL: ${absUrl(ROUTES[k][lang])}\nLanguage: ${lang}\n\n${pageToMarkdown(p, lang)}\n`;
    }),
  );
  const body = `# ${SITE.name} — Full Site Content\n\n${SITE.name}, ${fullAddress()} · ${SITE.phone.display}\n\n${sections.join('\n')}`;
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
