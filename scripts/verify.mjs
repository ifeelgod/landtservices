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

// 2. Expected HTML routes (38 EN + ES routes + 404)
const expectedRoutes = [
  'index.html',
  'es/index.html',
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
  // Tier 3 routes
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
  'notary/index.html',
  'es/notario/index.html',
  'es/ubicaciones/hallsville/index.html',
  '404.html',
];

console.log(`🔍 Checking ${expectedRoutes.length} HTML pages...`);
for (const r of expectedRoutes) {
  if (checkFileExists(r)) {
    const content = fs.readFileSync(path.join(DIST, r), 'utf-8');
    
    // Check for exactly one <h1> except 404
    const h1Count = (content.match(/<h1[\s>]/gi) || []).length;
    if (h1Count !== 1) {
      console.error(`⚠️ ${r} has ${h1Count} <h1> tags (expected 1).`);
      errors++;
    }

    // Check JSON-LD on non-404 pages
    if (!r.includes('404') && !content.includes('application/ld+json')) {
      console.error(`❌ ${r} is missing JSON-LD schema.`);
      errors++;
    }

    // Check hreflang tags on non-404 pages
    if (!r.includes('404')) {
      if (!content.includes('hreflang="en-US"') || !content.includes('hreflang="es-US"')) {
        console.error(`❌ ${r} is missing hreflang tags.`);
        errors++;
      }
    }
  }
}

if (errors === 0) {
  console.log(`✅ Tier 3 Verification PASSED! All ${expectedRoutes.length} pages & AI files generated cleanly.`);
} else {
  console.error(`❌ Verification completed with ${errors} error(s).`);
  process.exit(1);
}
