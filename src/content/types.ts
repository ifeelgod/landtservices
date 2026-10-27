import type { RouteKey } from '../i18n/routes';

export type ImgKey =
  | 'blood'
  | 'mobile'
  | 'clinic'
  | 'dna'
  | 'office'
  | 'officeDesk'
  | 'centrifuge'
  | 'storefront'
  | 'entering'
  | 'drawReal';
export type IconKey =
  | 'drop' | 'dna' | 'flask' | 'truck' | 'briefcase' | 'user' | 'baby' | 'shield' | 'clock' | 'map'
  | 'check' | 'phone' | 'home' | 'scale' | 'hair' | 'cup' | 'breath' | 'clipboard' | 'snow' | 'globe' | 'star' | 'siren';

/** href may be a RouteKey, 'tel', 'emergency', 'booking', or a literal anchor/URL. */
export type Cta = { label: string; href: RouteKey | 'tel' | 'emergency' | `#${string}` | `http${string}` };

export type Card = { title: string; text: string; href?: RouteKey; icon?: IconKey; price?: string | null; cta?: string };

export type FormService = 'drug' | 'dnaLegal' | 'dnaPrivate' | 'dot' | 'blood' | 'kits' | 'gender' | 'other';

export type Block =
  | {
      type: 'hero';
      eyebrow?: string;
      title: string;
      subtitle: string;
      image?: ImgKey;
      imageAlt?: string;
      primary?: Cta;
      secondary?: Cta;
      badges?: boolean;
      points?: string[];
    }
  | { type: 'banner'; text: string; cta?: Cta; tone?: 'pink' | 'purple' }
  | { type: 'answer'; question: string; answer: string; bg?: Bg }
  | { type: 'cards'; eyebrow?: string; title?: string; intro?: string; cards: Card[]; columns?: 2 | 3 | 4 | 5; variant?: 'router'; bg?: Bg }
  | { type: 'table'; title: string; intro?: string; head: string[]; rows: string[][]; note?: string; bg?: Bg }
  | { type: 'steps'; title: string; intro?: string; steps: { title: string; text: string }[]; howTo?: boolean; bg?: Bg }
  | { type: 'faq'; title: string; items: { q: string; a: string }[]; bg?: Bg }
  | { type: 'split'; eyebrow?: string; title: string; text?: string; items?: string[]; image: ImgKey; imageAlt: string; reverse?: boolean; cta?: Cta; bg?: Bg }
  | { type: 'prose'; title?: string; paragraphs: string[]; bg?: Bg }
  | { type: 'testimonials'; title: string; note?: string; items: { quote: string; name: string }[]; bg?: Bg }
  | { type: 'area'; title: string; intro?: string; cities?: { name: string; text: string }[]; bg?: Bg }
  | { type: 'form'; variant: 'appointment' | 'dispatch'; id?: string; title?: string; intro?: string; preset?: FormService; aside?: boolean; bg?: Bg }
  | { type: 'tool'; tool: 'panel' | 'mileage' | 'uploader'; bg?: Bg }
  | { type: 'cta'; title: string; text: string; primary: Cta; secondary?: Cta };

export type Bg = 'white' | 'lavender' | 'default';

export type PageContent = {
  /** <title> */
  title: string;
  /** meta description (≈150 chars) */
  description: string;
  schemaType?: 'MedicalWebPage' | 'AboutPage' | 'ContactPage' | 'WebPage' | 'CollectionPage';
  /** Emits a schema.org Service node linked to the organization */
  service?: { name: string; serviceType: string; description: string; offers?: { name: string; price: number | null }[] };
  blocks: Block[];
};

export type PageModule = { en: PageContent; es: PageContent };
