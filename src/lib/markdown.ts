import type { Block, PageContent } from '../content/types';
import type { Lang } from '../i18n/routes';
import { resolveHref, absUrl } from './links';

const strip = (s?: string | null) => (s ? s.replace(/<[^>]+>/g, '') : '');

/** Convert a page's content blocks to clean Markdown (used by /llms-full.txt). */
export function pageToMarkdown(page: PageContent, lang: Lang): string {
  const out: string[] = [];
  const link = (href: Parameters<typeof resolveHref>[0]) => {
    const h = resolveHref(href, lang);
    return h.startsWith('/') ? absUrl(h) : h;
  };
  for (const b of page.blocks as Block[]) {
    switch (b.type) {
      case 'hero':
        out.push(`# ${b.title}`, '', strip(b.subtitle), '');
        if (b.points?.length) out.push(...b.points.map((p) => `- ${strip(p)}`), '');
        break;
      case 'banner':
        out.push(`> ${strip(b.text)}`, '');
        break;
      case 'answer':
        out.push(`## ${b.question}`, '', strip(b.answer), '');
        break;
      case 'cards':
        if (b.title) out.push(`## ${b.title}`, '');
        if (b.intro) out.push(strip(b.intro), '');
        for (const c of b.cards) {
          const t = c.href ? `[${c.title}](${link(c.href)})` : c.title;
          out.push(`- **${t}**${c.price ? ` (${c.price})` : ''}: ${strip(c.text)}`);
        }
        out.push('');
        break;
      case 'table':
        out.push(`## ${b.title}`, '');
        if (b.intro) out.push(strip(b.intro), '');
        out.push(`| ${b.head.join(' | ')} |`, `| ${b.head.map(() => '---').join(' | ')} |`);
        for (const r of b.rows) out.push(`| ${r.map(strip).join(' | ')} |`);
        out.push('');
        if (b.note) out.push(strip(b.note), '');
        break;
      case 'steps':
        out.push(`## ${b.title}`, '');
        b.steps.forEach((s, i) => out.push(`${i + 1}. **${s.title}**: ${strip(s.text)}`));
        out.push('');
        break;
      case 'faq':
        out.push(`## ${b.title}`, '');
        for (const f of b.items) out.push(`### ${f.q}`, '', strip(f.a), '');
        break;
      case 'split':
        out.push(`## ${b.title}`, '');
        if (b.text) out.push(strip(b.text), '');
        if (b.items?.length) out.push(...b.items.map((i) => `- ${strip(i)}`), '');
        break;
      case 'prose':
        if (b.title) out.push(`## ${b.title}`, '');
        out.push(...b.paragraphs.map((p) => `${strip(p)}\n`));
        break;
      case 'area':
        out.push(`## ${b.title}`, '');
        if (b.intro) out.push(strip(b.intro), '');
        if (b.cities) for (const c of b.cities) out.push(`- **${c.name}**: ${strip(c.text)}`);
        out.push('');
        break;
      case 'cta':
        out.push(`## ${b.title}`, '', strip(b.text), '');
        break;
      default:
        break;
    }
  }
  return out.join('\n').replace(/\n{3,}/g, '\n\n').trim();
}
