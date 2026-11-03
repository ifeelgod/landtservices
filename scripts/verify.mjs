import fs from 'node:fs';
import path from 'node:path';

const DIST = path.resolve('dist');

if (!fs.existsSync(DIST)) {
  console.error('❌ dist/ folder does not exist. Run `npm run build` first.');
  process.exit(1);
}

let errors = 0;

function checkFileExists(relPath) {
  const p = path.join(DIST, relPath);
  if (!fs.existsSync(p)) {
    console.error(`❌ Missing file: dist/${relPath}`);
    errors++;
    return false;
  }
  return true;
}

// 1. Check AI & SEO root files
console.log('🔍 Checking AI & SEO root files...');
checkFileExists('robots.txt');
checkFileExists('llms.txt');
checkFileExists('llms-full.txt');
checkFileExists('sitemap-index.xml');

// 2. Expected HTML routes (21 pairs EN + ES = 42 pages + 404 = 43 pages)
const expectedRoutes = [
  'index.html',
  'es/index.html',
  'pricing/index.html',
  'es/precios/index.html',
  'drug-testing/index.html',
  'es/pruebas-de-drogas/index.html',
  'dna-testing/index.html',
  'es/pruebas-adn/index.html',
  'blood-draws/index.html',
  'es/extraccion-de-sangre/index.html',
  'specialty-lab-kits/index.html',
  'es/kits-de-laboratorio/index.html',
  'gender-reveal-test/index.html',
  'es/prueba-de-genero/index.html',
  'dot-services/index.html',
  'es/servicios-dot/index.html',
  'mobile-testing/index.html',
  'es/servicio-movil/index.html',
  'about/index.html',
  'es/nosotros/index.html',
  'service-area/index.html',
  'es/area-de-servicio/index.html',
  'compliance/index.html',
  'es/cumplimiento/index.html',
  'contact/index.html',
  'es/contacto/index.html',
  'privacy/index.html',
  'es/privacidad/index.html',
  'notary/index.html',
  'es/notario/index.html',
  'corporate/index.html',
  'es/empresas/index.html',
  'locations/longview/index.html',
  'es/ubicaciones/longview/index.html',
  'locations/marshall/index.html',
  'es/ubicaciones/marshall/index.html',
  'locations/carthage/index.html',
  'es/ubicaciones/carthage/index.html',
  'locations/kilgore/index.html',
  'es/ubicaciones/kilgore/index.html',
  'locations/hallsville/index.html',
  'es/ubicaciones/hallsville/index.html',
  '404.html',
];

console.log(`🔍 Checking all ${expectedRoutes.length} production HTML pages...`);

const pageContents = new Map();

for (const r of expectedRoutes) {
  if (checkFileExists(r)) {
    const content = fs.readFileSync(path.join(DIST, r), 'utf-8');
    pageContents.set(r, content);

    // 1. Exactly one <h1> (404 has 1 as well)
    const h1Count = (content.match(/<h1[\s>]/gi) || []).length;
    if (h1Count !== 1) {
      console.error(`⚠️ ${r} has ${h1Count} <h1> tags (expected 1).`);
      errors++;
    }

    // 2. Draft banner / placeholder verification
    if (content.includes('draft-ribbon') || content.includes('DRAFT — placeholder')) {
      console.error(`❌ ${r} still contains the yellow draft ribbon / placeholder badge.`);
      errors++;
    }
    if (content.includes('Sample testimonials — replace with real') || content.includes('Testimonios de ejemplo — reemplace')) {
      console.error(`❌ ${r} contains placeholder testimonial warning text.`);
      errors++;
    }

    // 3. Non-404 validations: Canonical, robots, JSON-LD, hreflang
    if (!r.includes('404')) {
      // Must not have noindex when isDraft is false
      if (content.includes('<meta name="robots" content="noindex')) {
        console.error(`❌ ${r} unexpectedly contains robots noindex in production.`);
        errors++;
      }

      // Canonical link
      if (!content.includes('rel="canonical" href="https://landtsolutions.com/')) {
        console.error(`❌ ${r} missing canonical tag pointing to https://landtsolutions.com/`);
        errors++;
      }

      // JSON-LD schema
      if (!content.includes('application/ld+json')) {
        console.error(`❌ ${r} is missing JSON-LD schema.`);
        errors++;
      }

      // hreflang tags
      if (!content.includes('hreflang="en-US"') || !content.includes('hreflang="es-US"') || !content.includes('hreflang="x-default"')) {
        console.error(`❌ ${r} is missing complete hreflang tags (en-US, es-US, x-default).`);
        errors++;
      }
    }
  }
}

// 3. Programmatic Link & Asset Audit across all 43 pages
console.log('🔍 Auditing all internal links, anchors, and images across all pages...');
let linkCount = 0;
let imageCount = 0;

for (const [route, html] of pageContents.entries()) {
  // Extract all <a href="...">
  const hrefMatches = html.matchAll(/<a\s+[^>]*?href=["']([^"']+)["'][^>]*?>/gi);
  for (const match of hrefMatches) {
    const rawHref = match[1].trim();
    linkCount++;

    // Skip external, protocols, tel, mailto
    if (
      rawHref.startsWith('http://') ||
      rawHref.startsWith('https://') ||
      rawHref.startsWith('tel:') ||
      rawHref.startsWith('mailto:') ||
      rawHref.startsWith('javascript:')
    ) {
      continue;
    }

    // Anchor links on same page
    if (rawHref.startsWith('#')) {
      const anchorId = rawHref.slice(1);
      if (anchorId && !html.includes(`id="${anchorId}"`) && !html.includes(`id='${anchorId}'`)) {
        console.error(`❌ Broken anchor in ${route}: href="${rawHref}" (id="${anchorId}" not found in page)`);
        errors++;
      }
      continue;
    }

    // Internal path link
    const cleanPath = rawHref.split('?')[0].split('#')[0];
    const norm = cleanPath.startsWith('/') ? cleanPath.slice(1) : cleanPath;
    
    // Target could be <path>/index.html or <path> or <path>.html
    const candidate1 = path.join(DIST, norm, 'index.html');
    const candidate2 = path.join(DIST, norm);
    const candidate3 = path.join(DIST, norm.endsWith('.html') ? norm : `${norm}.html`);

    if (!fs.existsSync(candidate1) && !fs.existsSync(candidate2) && !fs.existsSync(candidate3)) {
      console.error(`❌ Broken internal link in ${route}: href="${rawHref}"`);
      errors++;
    }
  }

  // Extract all <img src="...">
  const srcMatches = html.matchAll(/<img\s+[^>]*?src=["']([^"']+)["'][^>]*?>/gi);
  for (const match of srcMatches) {
    const rawSrc = match[1].trim();
    imageCount++;

    // Skip external
    if (rawSrc.startsWith('http://') || rawSrc.startsWith('https://') || rawSrc.startsWith('data:')) {
      continue;
    }

    const cleanSrc = rawSrc.split('?')[0];
    const normSrc = cleanSrc.startsWith('/') ? cleanSrc.slice(1) : cleanSrc;
    const targetFile = path.join(DIST, normSrc);

    if (!fs.existsSync(targetFile)) {
      console.error(`❌ Broken image asset in ${route}: src="${rawSrc}"`);
      errors++;
    }
  }
}

console.log(`📊 Scanned ${linkCount} links and ${imageCount} images across all pages.`);

// 4. Cross-language bidirectional toggle audit
console.log('🔍 Checking cross-language toggle bidirectional integrity...');
for (const [route, html] of pageContents.entries()) {
  if (route.includes('404')) continue;

  const enMatch = html.match(/hreflang="en-US"\s+href="https:\/\/landtsolutions\.com(\/[^"]*)"/);
  const esMatch = html.match(/hreflang="es-US"\s+href="https:\/\/landtsolutions\.com(\/[^"]*)"/);

  if (enMatch && esMatch) {
    const enPath = enMatch[1].replace(/^\/|\/$/g, '');
    const esPath = esMatch[1].replace(/^\/|\/$/g, '');

    const enFile = enPath === '' ? 'index.html' : `${enPath}/index.html`;
    const esFile = esPath === '' ? 'index.html' : `${esPath}/index.html`;

    if (!fs.existsSync(path.join(DIST, enFile))) {
      console.error(`❌ hreflang en-US target missing for ${route}: ${enFile}`);
      errors++;
    }
    if (!fs.existsSync(path.join(DIST, esFile))) {
      console.error(`❌ hreflang es-US target missing for ${route}: ${esFile}`);
      errors++;
    }
  }
}

if (errors === 0) {
  console.log(`✅ Production Verification PASSED! All ${expectedRoutes.length} pages verified with 0 broken links, 0 broken images, 0 draft flags, and complete bilingual parity.`);
} else {
  console.error(`❌ Production verification completed with ${errors} error(s).`);
  process.exit(1);
}
