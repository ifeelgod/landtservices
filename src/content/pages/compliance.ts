import type { PageModule } from '../types';
import { SITE } from '../../config/site';

const page: PageModule = {
  en: {
    title: 'Compliance & Accreditation | L&T Solutions',
    description:
      'How L&T Solutions protects your results: AABB chain-of-custody, SAMHSA-certified labs, MRO review, DOT 49 CFR Part 40, CLIA-certified partner labs and privacy.',
    schemaType: 'WebPage',
    blocks: [
      {
        type: 'hero',
        eyebrow: 'Trust & standards',
        title: 'Compliance & Accreditation',
        subtitle: 'Every specimen we collect follows documented procedures and goes to accredited partner laboratories, so your results stand up when they matter.',
        image: 'complianceCert',
        imageAlt: 'Official CLIA and SAMHSA laboratory compliance certificates and chain-of-custody documentation',
        primary: { label: 'Request an Appointment', href: 'contact' },
        secondary: { label: `Call ${SITE.phone.display}`, href: 'tel' },
        badges: true,
      },
      {
        type: 'answer',
        question: 'Are L&T Solutions test results legally defensible?',
        answer:
          'Yes, when you choose a legal test. Legal DNA and regulated drug tests are collected under documented chain of custody with ID verification, then analyzed by an AABB-accredited or SAMHSA-certified partner laboratory. Drug results are MRO-verified where required, producing reports suitable for courts, agencies and employers.',
        bg: 'white',
      },
      {
        type: 'cards',
        title: 'The standards behind every test',
        intro: `${SITE.name} is a specimen collection provider. The laboratories that perform testing hold the certifications listed below.`,
        columns: 3,
        bg: 'lavender',
        cards: [
          { icon: 'flask', title: "CLIA '88", text: 'Laboratories that perform our testing hold CLIA certification under federal Clinical Laboratory Improvement Amendments. We collect; certified labs test.' },
          { icon: 'check', title: 'SAMHSA-certified labs', text: 'Lab-based drug tests are analyzed by a SAMHSA-certified partner laboratory, the federal standard for workplace drug testing.', href: 'drug' },
          { icon: 'user', title: 'MRO verification', text: 'A licensed Medical Review Officer reviews non-negative drug results and can account for valid prescriptions before results are reported.' },
          { icon: 'dna', title: 'AABB chain-of-custody', text: 'Legal DNA tests use AABB-style chain-of-custody, photo ID and witnessed collection, processed by an AABB-accredited partner laboratory.', href: 'dna' },
          { icon: 'briefcase', title: 'DOT 49 CFR Part 40', text: 'DOT-qualified collectors follow federal Part 40 procedures for FMCSA and other DOT-regulated testing.', href: 'dot' },
          { icon: 'scale', title: 'Texas Labor Code §411.091', text: 'We help Texas employers support written drug-free workplace policies, as encouraged by state law for employers who carry workers’ compensation.' },
          { icon: 'shield', title: 'HIPAA & privacy', text: 'Personal information is handled discreetly and shared only with the parties required to complete your test.', href: 'privacy' },
        ],
      },
      {
        type: 'prose',
        title: 'How chain of custody works',
        paragraphs: [
          'Chain of custody is the documented record of who handled a specimen, from the moment it is collected until the laboratory reports a result. It is what makes a result legally defensible.',
          'At collection we verify each participant’s government-issued photo ID, complete a custody and control form, seal the specimen with tamper-evident tape, and have the donor initial the seal. The specimen is then shipped directly to the partner laboratory, where each transfer is logged.',
          'If any step is broken or undocumented, a result can be challenged. That is why we follow the same written procedures on every legal and regulated collection, in our clinic or on a mobile visit.',
        ],
        bg: 'white',
      },
      {
        type: 'prose',
        title: 'How we protect your information',
        paragraphs: [
          'We ask only for the information needed to schedule and complete your collection. Test results are reported by the partner laboratory or Medical Review Officer to the authorized recipients you or your employer designate, under applicable law such as HIPAA and 49 CFR Part 40.',
          'This page is informational and is not legal advice. For questions about your specific legal situation or workplace policy, please consult a qualified attorney.',
        ],
      },
      {
        type: 'table',
        title: 'Verification & Compliance Services Fee Schedule',
        intro: 'On-site identity verification and workforce compliance services at our Marshall office.',
        head: ['Service / Item', 'Standard Fee', 'Turnaround / Delivery', 'Description'],
        rows: [
          ['Ink / Roll Fingerprints (2 Cards)', '$50', 'Same-Visit (In-House)', 'Standard FD-258 fingerprint cards for employment, licensing, and security'],
          ['Form I-9 Employment Verification', '$75', 'Instant', 'Authorized representative physical document inspection and I-9 verification'],
          ['Background Checks', '$75', 'Instant / Rapid', 'Comprehensive employment, criminal, and identity verification searches'],
        ],
        note: 'Fingerprinting is conducted in-house with standard FBI FD-258 cards provided.',
        bg: 'white',
      },
      {
        type: 'split',
        bg: 'white',
        eyebrow: 'Accredited Science',
        title: 'SAMHSA-Certified & AABB-Accredited Partner Laboratories',
        text: 'We never compromise on specimen analysis. Every regulated drug screen and legal DNA sample is processed by premier reference laboratories adhering to federal standards and precision genetic testing.',
        items: [
          'CLIA-certified and SAMHSA-certified laboratory facilities',
          'Automated PCR genetic sequencers and allele peak verification for DNA',
          'Licensed Medical Review Officers (MRO) validating every non-negative drug screen',
        ],
        image: 'dnaLab',
        imageAlt: 'Senior geneticist performing AABB-accredited DNA analysis using automated PCR sequencer and allele peak verification',
      },
      {
        type: 'split',
        reverse: true,
        bg: 'lavender',
        eyebrow: 'Legal Integrity',
        title: 'Verifiable Chain of Custody & Documented Legal Security',
        text: 'From ink fingerprinting to Form I-9 verification and notarized affidavits, our staff adheres to Texas statutes and federal guidelines so your records are legally unassailable.',
        items: [
          'In-person government photo ID verification and physical document checks',
          'Tamper-evident sealing and strict custody log documentation',
          'Notarized chain-of-custody reports accepted by Texas family courts and employers',
        ],
        image: 'diverseNotary',
        imageAlt: 'African-American female notary and document specialist signing legal certification papers with a couple in Marshall, Texas',
      },
      {
        type: 'faq',
        title: 'Compliance FAQ',
        bg: 'lavender',
        items: [
          { q: 'Is L&T Solutions a laboratory?', a: 'No. We are a specimen collection provider. Samples are analyzed by accredited partner laboratories that hold CLIA certification and, depending on the test, AABB accreditation or SAMHSA certification.' },
          { q: 'Will a home DNA kit hold up in court?', a: 'Generally no. Courts usually require chain-of-custody collection with ID verification by a neutral collector. Our legal DNA test is designed for that purpose.' },
          { q: 'What does an MRO do?', a: 'A Medical Review Officer is a licensed physician who reviews non-negative drug test results, contacts the donor when needed, and verifies results before they are released to the employer.' },
          { q: 'Can you help our company with DOT compliance?', a: 'Yes. Our DOT-qualified collectors handle pre-employment, random, post-accident and reasonable-suspicion collections following 49 CFR Part 40.' },
        ],
      },
      {
        type: 'cta',
        title: 'Testing you can stand behind',
        text: `Questions about which test you need? Call ${SITE.phone.display} and we will point you to the right option.`,
        primary: { label: 'Call Now', href: 'tel' },
        secondary: { label: 'Request an Appointment', href: 'contact' },
      },
    ],
  },
  es: {
    title: 'Cumplimiento y acreditación | L&T Solutions',
    description:
      'Cómo protegemos sus resultados: cadena de custodia AABB, laboratorios certificados por SAMHSA, revisión MRO, DOT 49 CFR Parte 40, laboratorios CLIA y privacidad.',
    schemaType: 'WebPage',
    blocks: [
      {
        type: 'hero',
        eyebrow: 'Confianza y estándares',
        title: 'Cumplimiento y acreditación',
        subtitle: 'Cada muestra que tomamos sigue procedimientos documentados y se envía a laboratorios asociados acreditados, para que sus resultados sean válidos cuando más importa.',
        image: 'complianceCert',
        imageAlt: 'Certificados oficiales de acreditación de laboratorios CLIA y SAMHSA con documentos de cadena de custodia',
        primary: { label: 'Solicitar una cita', href: 'contact' },
        secondary: { label: `Llame al ${SITE.phone.display}`, href: 'tel' },
        badges: true,
      },
      {
        type: 'answer',
        question: '¿Los resultados de L&T Solutions tienen validez legal?',
        answer:
          'Sí, cuando elige una prueba legal. Las pruebas de ADN legales y las de drogas reguladas se toman con cadena de custodia documentada y verificación de identidad, y las analiza un laboratorio asociado acreditado por la AABB o certificado por SAMHSA. Los resultados de drogas se verifican por un MRO cuando se requiere.',
        bg: 'white',
      },
      {
        type: 'cards',
        title: 'Los estándares detrás de cada prueba',
        intro: `${SITE.name} es un proveedor de toma de muestras. Los laboratorios que realizan los análisis cuentan con las certificaciones indicadas abajo.`,
        columns: 3,
        bg: 'lavender',
        cards: [
          { icon: 'flask', title: "CLIA '88", text: 'Los laboratorios que realizan nuestros análisis tienen certificación CLIA según la ley federal. Nosotros tomamos la muestra; laboratorios certificados la analizan.' },
          { icon: 'check', title: 'Laboratorios certificados por SAMHSA', text: 'Las pruebas de drogas de laboratorio las analiza un laboratorio asociado certificado por SAMHSA, el estándar federal para pruebas laborales.', href: 'drug' },
          { icon: 'user', title: 'Verificación MRO', text: 'Un Médico Revisor (MRO) con licencia revisa los resultados no negativos y toma en cuenta recetas válidas antes de reportarlos.' },
          { icon: 'dna', title: 'Cadena de custodia AABB', text: 'Las pruebas de ADN legales usan cadena de custodia, identificación con foto y toma presenciada, y las procesa un laboratorio acreditado por la AABB.', href: 'dna' },
          { icon: 'briefcase', title: 'DOT 49 CFR Parte 40', text: 'Nuestros recolectores calificados DOT siguen los procedimientos federales de la Parte 40 para pruebas de FMCSA y otras agencias del DOT.', href: 'dot' },
          { icon: 'scale', title: 'Código Laboral de Texas §411.091', text: 'Apoyamos a empleadores de Texas con políticas escritas de lugar de trabajo libre de drogas, como lo promueve la ley estatal para quienes tienen seguro de compensación laboral.' },
          { icon: 'shield', title: 'HIPAA y privacidad', text: 'Su información personal se maneja con discreción y solo se comparte con quienes deben completar su prueba.', href: 'privacy' },
        ],
      },
      {
        type: 'prose',
        title: 'Cómo funciona la cadena de custodia',
        paragraphs: [
          'La cadena de custodia es el registro documentado de quién manejó una muestra, desde el momento en que se toma hasta que el laboratorio reporta el resultado. Es lo que le da validez legal.',
          'Al tomar la muestra verificamos la identificación oficial con foto de cada participante, llenamos un formulario de custodia y control, sellamos la muestra con cinta de seguridad y el donante pone sus iniciales en el sello. Luego se envía directamente al laboratorio asociado, donde se registra cada entrega.',
          'Si algún paso falta o no está documentado, el resultado puede impugnarse. Por eso seguimos los mismos procedimientos escritos en cada toma legal o regulada, en la clínica o a domicilio.',
        ],
        bg: 'white',
      },
      {
        type: 'prose',
        title: 'Cómo protegemos su información',
        paragraphs: [
          'Solo pedimos la información necesaria para agendar y realizar su toma de muestra. El laboratorio asociado o el Médico Revisor reporta los resultados a los destinatarios autorizados que usted o su empleador designen, conforme a leyes como HIPAA y 49 CFR Parte 40.',
          'Esta página es informativa y no constituye asesoría legal. Para preguntas sobre su situación legal o la política de su empresa, consulte a un abogado calificado.',
        ],
      },
      {
        type: 'table',
        title: 'Tarifas de Servicios de Verificación y Cumplimiento',
        intro: 'Servicios de verificación de identidad y cumplimiento laboral en nuestra oficina de Marshall.',
        head: ['Servicio / Trámite', 'Tarifa Estándar', 'Tiempo / Entrega', 'Descripción'],
        rows: [
          ['Toma de Huellas en Tinta (2 Tarjetas)', '$50', 'Misma Visita (En Oficina)', 'Tarjetas oficiales FD-258 para empleo, licencias y acreditación'],
          ['Verificación de Empleo Formulario I-9', '$75', 'Inmediato', 'Inspección física de documentos y firma como representante autorizado'],
          ['Verificación de Antecedentes (Background Checks)', '$75', 'Inmediato / Rápido', 'Búsqueda exhaustiva de antecedentes laborales, penales y de identidad'],
        ],
        note: 'La toma de huellas dactilares se realiza en nuestra oficina de Marshall con tarjetas estándar FBI FD-258 incluidas.',
        bg: 'white',
      },
      {
        type: 'split',
        bg: 'white',
        eyebrow: 'Ciencia Acreditada',
        title: 'Laboratorios Asociados Certificados por SAMHSA y Acreditados por AABB',
        text: 'No comprometemos la calidad de análisis. Cada muestra de drogas regulada y prueba de ADN legal es procesada por laboratorios de referencia líderes bajo estrictas normas federales.',
        items: [
          'Instalaciones de laboratorio certificadas por CLIA y SAMHSA',
          'Secuenciadores genéticos PCR automatizados para análisis de ADN',
          'Médicos Revisores (MRO) con licencia validando pruebas no negativas de drogas',
        ],
        image: 'dnaLab',
        imageAlt: 'Científica genetista realizando análisis de ADN acreditado por AABB con secuenciador genético automatizado',
      },
      {
        type: 'split',
        reverse: true,
        bg: 'lavender',
        eyebrow: 'Validez Legal',
        title: 'Cadena de Custodia Verificable y Documentación Legal Segura',
        text: 'Desde toma de huellas hasta verificación de I-9 y actas notariadas, nuestro personal cumple con las leyes de Texas y pautas federales para garantizar documentos válidos ante autoridades.',
        items: [
          'Verificación presencial de identificaciones oficiales con foto',
          'Sellado con cinta de seguridad y registro detallado de custodia',
          'Reportes notariados aceptados en juzgados de lo familiar en Texas y empresas',
        ],
        image: 'diverseNotary',
        imageAlt: 'Notaria y especialista en documentos firmando papeles oficiales de certificación legal con una pareja en Marshall, Texas',
      },
      {
        type: 'faq',
        title: 'Preguntas frecuentes sobre cumplimiento',
        bg: 'lavender',
        items: [
          { q: '¿L&T Solutions es un laboratorio?', a: 'No. Somos un proveedor de toma de muestras. Las muestras las analizan laboratorios asociados acreditados con certificación CLIA y, según la prueba, acreditación AABB o certificación SAMHSA.' },
          { q: '¿Un kit de ADN casero sirve ante un tribunal?', a: 'Por lo general, no. Los tribunales suelen exigir una toma con cadena de custodia y verificación de identidad por un recolector neutral. Nuestra prueba de ADN legal está diseñada para eso.' },
          { q: '¿Qué hace un MRO?', a: 'El Médico Revisor (MRO) es un médico con licencia que revisa los resultados no negativos, contacta al donante si es necesario y verifica el resultado antes de entregarlo al empleador.' },
          { q: '¿Pueden ayudar a nuestra empresa con el cumplimiento DOT?', a: 'Sí. Nuestros recolectores calificados DOT realizan pruebas previas al empleo, aleatorias, post-accidente y por sospecha razonable según 49 CFR Parte 40.' },
        ],
      },
      {
        type: 'cta',
        title: 'Pruebas en las que puede confiar',
        text: `¿No sabe qué prueba necesita? Llame al ${SITE.phone.display} y le orientamos con gusto.`,
        primary: { label: 'Llamar ahora', href: 'tel' },
        secondary: { label: 'Solicitar una cita', href: 'contact' },
      },
    ],
  },
};

export default page;
