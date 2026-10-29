import type { PageModule } from '../types';
import { SITE, price } from '../../config/site';

const page: PageModule = {
  en: {
    title: 'Official Price List & Services Catalog | L&T Solutions',
    description:
      'Transparent pricing for DNA paternity testing, drug and alcohol screening, employee verification, fingerprinting, and immigration consultation in Marshall, TX.',
    schemaType: 'CollectionPage',
    blocks: [
      {
        type: 'hero',
        eyebrow: 'Transparent Upfront Pricing',
        title: 'Official Price List & Services Catalog',
        subtitle:
          'Complete, transparent pricing with no hidden facility charges or surprise add-ons. Walk-in at our Marshall clinic or request 24/7 mobile dispatch.',
        image: 'pricingOffice',
        imageAlt: 'L&T Solutions transparent pricing catalog and professional client consultation office in Marshall, TX',
        primary: { label: 'Schedule an Appointment', href: 'contact' },
        secondary: { label: `Call ${SITE.phone.display}`, href: 'tel' },
        badges: true,
        points: [
          'Upfront pricing — zero hidden facility or administrative fees',
          'AABB-accredited DNA & SAMHSA-certified drug testing laboratories',
          'Marshall clinic walk-in or 24/7 mobile collection across East Texas',
        ],
      },
      {
        type: 'answer',
        bg: 'lavender',
        question: 'How much do DNA tests, drug tests, and verification services cost at L&T Solutions?',
        answer:
          'Drug and urinalysis testing starts at $75 for DOT, non-DOT, and rapid screens ($125 for 90-day hair follicle). Legal court-admissible DNA paternity is $425 ($325 for private peace-of-mind). Two-card ink fingerprinting is $50, Form I-9 verification is $75, and immigration form consultations range from $825 to $2,250.',
      },
      {
        type: 'table',
        title: 'DNA Testing Services',
        intro:
          'All relationship tests are processed by AABB-accredited partner laboratories ensuring maximum legal and scientific reliability.',
        head: ['Service / Test Type', 'Standard Fee', "Add'l Person", 'Turnaround Time'],
        rows: [
          ['Legal Paternity (Court-admissible)', '$425', '+$95', '1–4 Business Days'],
          ['Informational Paternity (Peace-of-mind)', '$325', '+$95', '1–2 Business Days'],
          ['Grandparentage DNA Test', '$500', '+$125', '1–2 Business Days'],
          ['Sibling DNA Test', '$400', '—', 'Standard Lab'],
          ['Avuncular DNA Test (Aunt / Uncle)', '$510', '—', 'Standard Lab'],
          ['Immigration DNA Testing (USCIS / Embassy)', '$1,000', '—', 'Standard Lab'],
          ['Non-Invasive Prenatal DNA Test', '$1,200', '—', 'Standard Lab'],
          ['Advanced Infidelity Test', '$525', '—', 'Standard Lab'],
          ['Genetic Weight DNA Profile', '$425', '—', 'Standard Lab'],
          ['Ancestry DNA Test', '$385', '—', 'Standard Lab'],
          ['Pet DNA Testing', '$300', '—', 'Standard Lab'],
        ],
        note: 'Legal tests include official government ID verification, thumbprints, photographed chain-of-custody, and notarized court-ready documentation.',
        bg: 'white',
      },
      {
        type: 'table',
        title: 'Drug & Alcohol Testing Services',
        intro:
          'SAMHSA-certified partner laboratory processing with licensed Medical Review Officer (MRO) review for workplace, court, and personal testing.',
        head: ['Service / Test Type', 'Standard Fee', 'Turnaround / Delivery', 'Key Details'],
        rows: [
          ['DOT & Non-DOT Drug Testing', '$75', 'Standard Lab (24–48h)', '5/10/12-Panel urine screen with chain of custody & MRO review'],
          ['Rapid Drug Screen', '$75', 'Instant Results', 'Point-of-care rapid urinalysis screening for immediate onboarding'],
          ['Post-Accident Testing', '$85', 'On-Demand / Priority', 'Rapid post-incident urine and alcohol screening; 24/7 mobile dispatch'],
          ['Alcohol Testing (Initial Screen)', '$85', 'Rapid / On-Site', 'Certified evidential breath alcohol or saliva alcohol screening'],
          ['Alcohol Confirmation Test', '$105', 'Confirmation Result', 'Evidential breath alcohol confirmation or laboratory confirmation'],
          ['Hair Follicle Drug Test', '$125', 'Standard Lab (3–5 Days)', '90-day substance history detection that cannot be diluted or cleansed'],
          ['Nail Drug Test', '$150', 'Standard Lab', '3 to 6-month substance detection window using fingernail or toenail clippings'],
        ],
        note: 'All non-negative lab screenings receive automatic confirmatory GC/MS or LC/MS testing and licensed MRO verification.',
        bg: 'lavender',
      },
      {
        type: 'table',
        title: 'Verification & Compliance Services',
        intro:
          'On-site identity verification and workforce onboarding services for employers, licensing boards, and job candidates.',
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
        type: 'table',
        title: 'Immigration Consultation & Document Preparation Services',
        intro:
          'Professional assistance with family petitions, naturalization, work permits, and status adjustments. Note: Government and USCIS filing fees are separate from consultation and preparation fees.',
        head: ['Form / Filing Type', 'Standard Fee', 'Government Form', 'Scope of Service'],
        rows: [
          ['Work Permit Application', '$825', 'Form I-765', 'Preparation, verification, and packet assembly for employment authorization'],
          ['DACA Renewal', '$900', 'Forms I-821D / I-765', 'Deferred Action for Childhood Arrivals renewal document packet'],
          ['Naturalization / Citizenship', '$1,300', 'Form N-400', 'Complete U.S. citizenship application preparation and document compilation'],
          ['Travel Document / Advance Parole', '$1,350', 'Form I-131', 'Application for travel document, re-entry permit, or advance parole'],
          ['Affidavit of Support', '$1,650', 'Form I-864', 'Income qualification calculations, tax schedule review, and support filings'],
          ['Family Petition', '$1,700', 'Form I-130', 'Petition for alien relative documentation and relationship proof assembly'],
          ['Marriage Green Card Package', '$2,150', 'I-130 & I-485 Concurrent', 'Full spousal adjustment package preparation and supporting evidence assembly'],
          ['Adjustment of Status', '$2,250', 'Form I-485', 'Permanent residence green card application packet and biographical review'],
        ],
        note: 'L&T Solutions provides non-attorney document preparation and consultation services. Government/USCIS filing fees are paid directly to the Department of Homeland Security.',
        bg: 'lavender',
      },
      {
        type: 'faq',
        bg: 'white',
        title: 'Pricing & Payment Frequently Asked Questions',
        items: [
          {
            q: 'Are there any hidden lab, draw, or administrative fees?',
            a: 'No. Our quoted fees are all-inclusive for the service specified. For lab tests, the fee covers collection, partner laboratory processing, and official reporting.',
          },
          {
            q: 'What forms of payment do you accept?',
            a: 'We accept major credit cards, debit cards, cash, and corporate account invoicing for qualified employer partners.',
          },
          {
            q: 'Do you charge a travel fee for mobile specimen collection?',
            a: 'For mobile on-site visits across Marshall, Longview, and East Texas, a modest mileage/trip fee is calculated based on distance and confirmed upfront before dispatch.',
          },
          {
            q: 'Do you take health insurance?',
            a: 'L&T Solutions is an independent self-pay and employer testing facility. We provide detailed receipts you can submit to your HSA/FSA or insurance provider for possible reimbursement.',
          },
        ],
      },
      {
        type: 'cta',
        title: 'Ready to Book an Appointment or Request Pricing?',
        text: `Contact our Marshall office at ${SITE.phone.display} or send an appointment request online. We are ready to assist you.`,
        primary: { label: 'Request an Appointment', href: 'contact' },
        secondary: { label: `Call ${SITE.phone.display}`, href: 'tel' },
      },
    ],
  },
  es: {
    title: 'Lista Oficial de Precios y Catálogo de Servicios | L&T Solutions',
    description:
      'Precios transparentes para pruebas de ADN, detección de drogas y alcohol, verificación de empleo, huellas dactilares y trámites de inmigración en Marshall, TX.',
    schemaType: 'CollectionPage',
    blocks: [
      {
        type: 'hero',
        eyebrow: 'Precios Claros y Sin Sorpresas',
        title: 'Lista Oficial de Precios y Catálogo de Servicios',
        subtitle:
          'Tarifas completas y transparentes sin cargos ocultos de clínica. Visítenos sin cita en Marshall o solicite nuestra unidad móvil las 24 horas.',
        image: 'pricingOffice',
        imageAlt: 'Oficina de consulta y catálogo de precios transparentes en L&T Solutions en Marshall, TX',
        primary: { label: 'Agendar una Cita', href: 'contact' },
        secondary: { label: `Llamar al ${SITE.phone.display}`, href: 'tel' },
        badges: true,
        points: [
          'Precios transparentes — sin costos ocultos de laboratorio ni de oficina',
          'Laboratorios asociados acreditados por AABB y certificados por SAMHSA',
          'Atención en nuestra clínica de Marshall o servicio móvil 24/7 en el Este de Texas',
        ],
      },
      {
        type: 'answer',
        bg: 'lavender',
        question: '¿Cuánto cuestan las pruebas de ADN, drogas y trámites en L&T Solutions?',
        answer:
          'Las pruebas de drogas en orina comienzan en $75 para exámenes DOT, no DOT y pruebas rápidas ($125 para prueba de cabello de 90 días). La prueba de paternidad legal de ADN cuesta $425 ($325 para prueba privada). La toma de huellas en tinta (2 tarjetas) cuesta $50, la verificación I-9 cuesta $75 y las consultas de inmigración van de $825 a $2,250.',
      },
      {
        type: 'table',
        title: 'Servicios de Pruebas de ADN',
        intro:
          'Todos los análisis genéticos se procesan en laboratorios asociados acreditados por AABB para garantizar validez jurídica y científica total.',
        head: ['Servicio / Tipo de Prueba', 'Tarifa Estándar', 'Persona Adicional', 'Tiempo de Entrega'],
        rows: [
          ['Paternidad Legal (Admisible en Corte)', '$425', '+$95', '1–4 Días Hábiles'],
          ['Paternidad Informativa (Tranquilidad)', '$325', '+$95', '1–2 Días Hábiles'],
          ['Prueba de ADN de Abuelos (Grandparentage)', '$500', '+$125', '1–2 Días Hábiles'],
          ['Prueba de ADN de Hermanos (Sibling)', '$400', '—', 'Laboratorio Estándar'],
          ['Prueba de ADN de Tíos (Avuncular)', '$510', '—', 'Laboratorio Estándar'],
          ['Prueba de ADN para Inmigración (USCIS / Embajadas)', '$1,000', '—', 'Laboratorio Estándar'],
          ['Prueba Prenatal No Invasiva de Paternidad', '$1,200', '—', 'Laboratorio Estándar'],
          ['Prueba Avanzada de Infidelidad', '$525', '—', 'Laboratorio Estándar'],
          ['Perfil Genético de Peso y Metabolismo', '$425', '—', 'Laboratorio Estándar'],
          ['Prueba de ADN de Linaje y Ancestros', '$385', '—', 'Laboratorio Estándar'],
          ['Prueba de ADN para Mascotas', '$300', '—', 'Laboratorio Estándar'],
        ],
        note: 'Las pruebas legales incluyen verificación de documento de identidad con fotografía, huella digital, cadena de custodia fotográfica y reporte notariado admisible en corte.',
        bg: 'white',
      },
      {
        type: 'table',
        title: 'Servicios de Pruebas de Drogas y Alcohol',
        intro:
          'Análisis procesados en laboratorios certificados por SAMHSA con revisión de un Médico Revisor Oficial (MRO) para empresas, cortes y particulares.',
        head: ['Servicio / Tipo de Prueba', 'Tarifa Estándar', 'Tiempo / Entrega', 'Detalles Clave'],
        rows: [
          ['Pruebas de Drogas DOT y No DOT', '$75', 'Laboratorio Estándar (24–48h)', 'Panel de 5, 10 o 12 sustancias con cadena de custodia y revisión MRO'],
          ['Prueba Rápida de Drogas en Orina', '$75', 'Resultados Inmediatos', 'Detección en el acto para contratación laboral y decisiones inmediatas'],
          ['Pruebas Post-Accidente', '$85', 'Prioritaria / Urgencias', 'Detección inmediata de drogas y alcohol tras incidentes; servicio móvil 24/7'],
          ['Prueba de Alcohol (Detección Inicial)', '$85', 'Rápida / En el Sitio', 'Alcoholímetro de aliento evidencial certificado o prueba en saliva'],
          ['Prueba de Confirmación de Alcohol', '$105', 'Resultado de Confirmación', 'Confirmación de aliento evidencial o prueba de laboratorio'],
          ['Prueba de Cabello (Hair Follicle)', '$125', 'Laboratorio (3–5 Días)', 'Ventana histórica de 90 días imposible de adulterar o diluir'],
          ['Prueba de Uñas (Nail Drug Test)', '$150', 'Laboratorio Estándar', 'Detección de sustancias de 3 a 6 meses mediante recortes de uñas'],
        ],
        note: 'Todas las muestras no negativas son sometidas a confirmación obligatoria por GC/MS o LC/MS y revisión de un MRO autorizado.',
        bg: 'lavender',
      },
      {
        type: 'table',
        title: 'Servicios de Verificación y Cumplimiento',
        intro:
          'Servicios de verificación de identidad e incorporación laboral para empleadores, juntas profesionales y candidatos.',
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
        type: 'table',
        title: 'Servicios de Consulta y Preparación de Documentos de Inmigración',
        intro:
          'Asistencia profesional para peticiones familiares, ciudadanía, permisos de trabajo y ajuste de estatus. Nota: Las tarifas de presentación de USCIS/Gobierno son independientes de los honorarios de consulta y preparación.',
        head: ['Trámite / Formulario', 'Tarifa Estándar', 'Formulario Oficial', 'Alcance del Servicio'],
        rows: [
          ['Solicitud de Permiso de Trabajo', '$825', 'Formulario I-765', 'Preparación, revisión y armado del paquete para autorización de empleo'],
          ['Renovación de DACA', '$900', 'Formularios I-821D / I-765', 'Paquete completo de renovación de Acción Diferida para los Llegados en la Infancia'],
          ['Naturalización / Ciudadanía Estadounidense', '$1,300', 'Formulario N-400', 'Preparación íntegra de la solicitud de ciudadanía y recopilación de pruebas'],
          ['Documento de Viaje / Advance Parole', '$1,350', 'Formulario I-131', 'Permiso de reingreso o permiso anticipado de viaje'],
          ['Declaración Jurada de Patrocinio Económico', '$1,650', 'Formulario I-864', 'Cálculo de ingresos, revisión fiscal y preparación del patrocinio'],
          ['Petición Familiar de Pariente Extranjero', '$1,700', 'Formulario I-130', 'Armado del expediente probatorio de parentesco y presentación familiar'],
          ['Paquete de Tarjeta Verde por Matrimonio', '$2,150', 'I-130 e I-485 Conjuntos', 'Preparación integral del ajuste conyugal y recopilación documental'],
          ['Ajuste de Estatus a Residente Permanente', '$2,250', 'Formulario I-485', 'Expediente completo para residencia permanente y revisión biográfica'],
        ],
        note: 'L&T Solutions ofrece servicios de preparación de documentos y no proporciona asesoramiento jurídico legal. Las tarifas de USCIS se abonan directamente al Departamento de Seguridad Nacional.',
        bg: 'lavender',
      },
      {
        type: 'faq',
        bg: 'white',
        title: 'Preguntas Frecuentes sobre Tarifas y Pagos',
        items: [
          {
            q: '¿Hay algún cobro oculto de laboratorio o de oficina?',
            a: 'No. Todas nuestras tarifas son completas para el servicio indicado. Para pruebas de laboratorio, el precio cubre la toma, el análisis y la emisión del reporte oficial.',
          },
          {
            q: '¿Qué métodos de pago aceptan?',
            a: 'Aceptamos las principales tarjetas de crédito, débito, efectivo y cuentas corporativas con facturación para empresas afiliadas.',
          },
          {
            q: '¿Cobran cargo por viaje para la recolección móvil?',
            a: 'Para visitas móviles a empresas o domicilios en Marshall, Longview y el Este de Texas, se calcula una tarifa razonable de kilometraje confirmada antes de despachar la unidad.',
          },
          {
            q: '¿Aceptan seguros médicos?',
            a: 'L&T Solutions es un centro de pago directo y servicios corporativos. Le entregamos comprobantes detallados para solicitar reembolso a su cuenta HSA/FSA o a su seguro si corresponde.',
          },
        ],
      },
      {
        type: 'cta',
        title: '¿Listo para Agendar o Solicitar un Servicio?',
        text: `Comuníquese con nuestra oficina en Marshall al ${SITE.phone.display} o envíenos una solicitud en línea. Estamos listos para atenderle.`,
        primary: { label: 'Agendar una Cita', href: 'contact' },
        secondary: { label: `Llamar al ${SITE.phone.display}`, href: 'tel' },
      },
    ],
  },
};

export default page;
