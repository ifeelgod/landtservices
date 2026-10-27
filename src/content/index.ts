import type { PageContent, PageModule } from './types';
import type { Lang, RouteKey } from '../i18n/routes';
import home from './pages/home';
import drug from './pages/drug';
import dna from './pages/dna';
import blood from './pages/blood';
import kits from './pages/kits';
import gender from './pages/gender';
import dot from './pages/dot';
import mobile from './pages/mobile';
import about from './pages/about';
import area from './pages/area';
import compliance from './pages/compliance';
import contact from './pages/contact';
import privacy from './pages/privacy';
// Tier 3 modules
import corporate from './pages/corporate';
import longview from './pages/longview';
import marshall from './pages/marshall';
import carthage from './pages/carthage';
import kilgore from './pages/kilgore';
import hallsville from './pages/hallsville';
import notary from './pages/notary';

export const PAGES: Record<RouteKey, PageModule> = {
  home, drug, dna, blood, kits, gender, dot, mobile, about, area, compliance, contact, privacy,
  corporate, longview, marshall, carthage, kilgore, hallsville, notary,
};

export const getPage = (key: RouteKey, lang: Lang): PageContent => PAGES[key][lang];
