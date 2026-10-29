import type { PageModule } from '../types';
import { SITE } from '../../config/site';

const page: PageModule = {
  en: {
    title: 'Corporate Employer & eCCF Barcode Portal | L&T Solutions',
    description: 'Corporate employer portal, electronic chain of custody (eCCF) FormFox & eScreen barcode scanning, 24/7 post-accident dispatch, and MRO results retrieval.',
    schemaType: 'WebPage',
    blocks: [
      {
        type: 'hero',
        eyebrow: 'B2B & Commercial Fleets',
        title: 'Corporate Employer & Electronic Chain of Custody (eCCF) Hub',
        subtitle: 'Streamlined paperless drug screening for commercial fleets, oilfield service contractors, and industrial plants across East Texas. Compatible with FormFox and eScreen barcode workflows.',
        image: 'fleetCompliance',
        imageAlt: 'Safety fleet director inspecting commercial transportation DOT compliance records beside freight trucks',
        primary: { label: 'Enroll Employer Account', href: 'contact' },
        secondary: { label: `24/7 Fleet Hotline: ${SITE.emergencyPhone.display}`, href: 'emergency' },
        badges: true,
      },
      {
        type: 'answer',
        bg: 'lavender',
        question: 'How do paperless eCCF barcodes (FormFox, eScreen) work at L&T Solutions?',
        answer: 'L&T Solutions processes digital electronic Chain of Custody (eCCF) barcodes from national screening systems including FormFox and eScreen. Industrial donors and commercial drivers present a digital barcode on their smartphone or paper pass. Our collectors scan the barcode, collect the specimen under strict SAMHSA/DOT guidelines, and complete the donor process in 5 to 10 minutes.',
      },
      {
        type: 'tool',
        tool: 'panel',
      },
      {
        type: 'cards',
        columns: 3,
        bg: 'lavender',
        eyebrow: 'B2B Services',
        title: 'Enterprise Screening & Compliance Solutions',
        intro: 'Why regional safety directors and HR managers choose L&T Solutions for fleet compliance.',
        cards: [
          {
            title: 'Paperless Barcode Processing',
            text: 'Instant 5-to-10 minute donor processing using digital barcodes from FormFox, eScreen, and major TPA platforms.',
            icon: 'clipboard',
          },
          {
            title: '24/7 Post-Accident Mobile Response',
            text: 'On-site mobile collectors dispatched within 2 hours to accident scenes or facility yards anywhere in East Texas.',
            icon: 'siren',
          },
          {
            title: 'MRO Verified Portal Results',
            text: 'Confidential online portal access for DERs and Safety Directors to retrieve lab-confirmed test results immediately.',
            icon: 'shield',
          },
          {
            title: 'DOT & Non-DOT Random Pools',
            text: 'Automated computer-generated random selection management for FMCSA, PHMSA, and commercial fleets.',
            icon: 'truck',
          },
          {
            title: 'DOT Commercial Driver Physicals',
            text: 'Coordinated physical examinations with certified Medical Examiners to keep your drivers compliant and on the road.',
            icon: 'check',
          },
          {
            title: 'Supervisor Reasonable Suspicion DER',
            text: 'Live and online certification courses covering physical, behavioral, and performance indicators of drug and alcohol impairment.',
            icon: 'user',
          },
        ],
      },
      {
        type: 'tool',
        tool: 'mileage',
      },
      {
        type: 'split',
        bg: 'white',
        eyebrow: 'Fleet Terminal Solutions',
        title: 'Seamless On-Site Driver Collections Across East Texas',
        text: 'Keep your freight rolling along the I-20 corridor. Our mobile DOT collectors travel directly to your distribution hub, truck stop, or terminal to process drivers without costly layovers.',
        items: [
          'Immediate FormFox & eScreen digital barcode scanning',
          'Tamper-evident chain of custody satisfying FMCSA federal audits',
          'Fast 5-to-10 minute turnaround per driver',
        ],
        image: 'dotDriver',
        imageAlt: 'DOT medical collector with chain of custody paperwork beside an African-American commercial truck driver in East Texas',
      },
      {
        type: 'split',
        reverse: true,
        bg: 'lavender',
        eyebrow: 'Plant & Manufacturing Screening',
        title: 'Turnkey Workplace Safety & Shift Drug Screening',
        text: 'From annual plant-wide safety blitzes to rapid new-hire orientation batches, our team handles all specimen collection on-site with clinical precision.',
        items: [
          'Rapid oral fluid, urine, and hair follicle collection options',
          'Dedicated collector teams dispatched for multi-shift testing',
          'Direct online reporting to your safety director and DER',
        ],
        image: 'corpDrugTest',
        imageAlt: 'Certified occupational health collector administering rapid drug screen in manufacturing facility',
      },
      {
        type: 'faq',
        title: 'Corporate Portal Frequently Asked Questions',
        items: [
          {
            q: 'How does an employer set up a corporate account?',
            a: 'Setting up an employer account takes under 10 minutes. Contact our office or submit an online request. We will register your company, establish DER permissions, and set up your preferred testing panels.',
          },
          {
            q: 'Can our drivers use FormFox or eScreen digital barcodes at your clinic?',
            a: 'Yes! Our Marshall clinic and mobile units are fully compatible with paperless digital barcodes from FormFox, eScreen, and major third-party administrators.',
          },
          {
            q: 'How are post-accident emergency collections handled after business hours?',
            a: `Call our dedicated 24/7 fleet hotline at ${SITE.emergencyPhone.display}. Our on-call mobile collector will dispatch immediately to your job site or accident location.`,
          },
          {
            q: 'Can you bill our corporate headquarters monthly?',
            a: 'Yes. We offer direct monthly corporate invoicing with itemized donor statements for qualified commercial accounts.',
          },
        ],
      },
      {
        type: 'cta',
        title: 'Ready to Streamline Your Corporate Drug Screening & Fleet Compliance?',
        text: `Call ${SITE.phone.display} to enroll your business or set up paperless eCCF barcode processing.`,
        primary: { label: 'Enroll Employer Account', href: 'contact' },
        secondary: { label: `Call Fleet Line: ${SITE.phone.display}`, href: 'tel' },
      },
    ],
  },
  es: {
    title: 'Portal de Empresas y Código de Custodia Digital (eCCF) | L&T Solutions',
    description: 'Portal para empresas, escaneo de códigos de barra eCCF (FormFox y eScreen), atención móvil 24/7 por accidentes y resultados de laboratorio MRO.',
    schemaType: 'WebPage',
    blocks: [
      {
        type: 'hero',
        eyebrow: 'Empresas y Flotas Comerciales',
        title: 'Portal de Empresas y Cadena de Custodia Electrónica (eCCF)',
        subtitle: 'Pruebas de drogas digitales sin papel para flotas comerciales, empresas petroleras y plantas industriales en el Este de Texas. Compatible con sistemas FormFox y eScreen.',
        image: 'fleetCompliance',
        imageAlt: 'Director de seguridad de flotas revisando cumplimiento DOT y registros de pruebas de detección de drogas junto a camiones de carga',
        primary: { label: 'Inscribir Empresa', href: 'contact' },
        secondary: { label: `Línea de Flotas 24/7: ${SITE.emergencyPhone.display}`, href: 'emergency' },
        badges: true,
      },
      {
        type: 'answer',
        bg: 'lavender',
        question: '¿Cómo funcionan los códigos de barra eCCF (FormFox, eScreen) en L&T Solutions?',
        answer: 'L&T Solutions procesa códigos de barras de cadena de custodia electrónica (eCCF) de sistemas nacionales como FormFox y eScreen. Los trabajadores presentan su código en su teléfono celular o impreso. Nuestras recolectoras escanean el código, toman la muestra según la norma SAMHSA/DOT y completan el proceso en 5 a 10 minutos.',
      },
      {
        type: 'tool',
        tool: 'panel',
      },
      {
        type: 'cards',
        columns: 3,
        bg: 'lavender',
        eyebrow: 'Servicios para Empresas',
        title: 'Soluciones Integrales para Empresas y Flotas',
        intro: 'Por qué los directores de seguridad y gerentes de recursos humanos eligen a L&T Solutions.',
        cards: [
          {
            title: 'Atención Digital por Código de Barras',
            text: 'Procesamiento rápido de 5 a 10 minutos usando códigos de barras de FormFox, eScreen y plataformas TPA.',
            icon: 'clipboard',
          },
          {
            title: 'Respuesta Móvil 24/7 por Accidentes',
            text: 'Recolectores móviles en el sitio en menos de 2 horas en accidentes u obras en todo el Este de Texas.',
            icon: 'siren',
          },
          {
            title: 'Resultados por Portal MRO',
            text: 'Acceso a portal en línea confidencial para directores de seguridad para descargar resultados de laboratorio.',
            icon: 'shield',
          },
          {
            title: 'Consorcios Aleatorios DOT y No-DOT',
            text: 'Selección aleatoria automatizada por computadora para flotas comerciales FMCSA y PHMSA.',
            icon: 'truck',
          },
          {
            title: 'Exámenes Físicos para Choferes DOT',
            text: 'Exámenes médicos coordinados con examinadores certificados para mantener vigentes las tarjetas CDL.',
            icon: 'check',
          },
          {
            title: 'Capacitación para Supervisores (DER)',
            text: 'Cursos de certificación sobre indicadores de consumo de drogas y alcohol por sospecha razonable.',
            icon: 'user',
          },
        ],
      },
      {
        type: 'tool',
        tool: 'mileage',
      },
      {
        type: 'split',
        bg: 'white',
        eyebrow: 'Soluciones para Patios y Flotas',
        title: 'Toma de Muestras en Sitio para Choferes en el Este de Texas',
        text: 'Mantenga sus camiones en ruta sobre el corredor de la I-20. Nuestros recolectores certificados DOT van directamente a su centro de distribución o patio para procesar choferes sin retrasos innecesarios.',
        items: [
          'Escaneo inmediato de códigos de barras digitales de FormFox y eScreen',
          'Cadena de custodia que cumple al 100% con auditorías federales de FMCSA',
          'Toma rápida de 5 a 10 minutos por chofer',
        ],
        image: 'dotDriver',
        imageAlt: 'Recolectora médica DOT con formulario de custodia junto a un chofer de camión comercial en el Este de Texas',
      },
      {
        type: 'split',
        reverse: true,
        bg: 'lavender',
        eyebrow: 'Seguridad en Fábricas y Plantas',
        title: 'Pruebas Integrales de Drogas en Turnos de Trabajo',
        text: 'Desde revisiones masivas anuales de seguridad hasta ingresos de personal, nuestro equipo maneja toda la recolección en sus instalaciones con estricta precisión clínica.',
        items: [
          'Opciones de saliva rápida, orina y folículo capilar',
          'Equipos de recolectores asignados para múltiples turnos laborales',
          'Reportes directos en línea para su director de seguridad y contacto DER',
        ],
        image: 'corpDrugTest',
        imageAlt: 'Especialista de salud ocupacional certificada realizando prueba rápida en una planta industrial',
      },
      {
        type: 'faq',
        title: 'Preguntas Frecuentes del Portal de Empresas',
        items: [
          {
            q: '¿Cómo puede una empresa abrir una cuenta corporativa?',
            a: 'Abrir una cuenta corporativa toma menos de 10 minutos. Contáctenos o envíe su solicitud en línea para registrar su empresa y configurar los paneles requeridos.',
          },
          {
            q: '¿Pueden nuestros choferes usar códigos de barra de FormFox o eScreen?',
            a: '¡Sí! Nuestra clínica en Marshall y unidades móviles son compatibles con códigos de barra de FormFox, eScreen y administradores TPA.',
          },
          {
            q: '¿Cómo se atienden las emergencias post-accidente fuera del horario regular?',
            a: `Llame a nuestra línea exclusiva de flotas las 24/7 al ${SITE.emergencyPhone.display}. Nuestro recolector móvil saldrá de inmediato a su obra o lugar del accidente.`,
          },
          {
            q: '¿Ofrecen facturación mensual para empresas?',
            a: 'Sí. Ofrecemos facturación mensual corporativa con estado de cuenta detallado para cuentas comerciales calificadas.',
          },
        ],
      },
      {
        type: 'cta',
        title: '¿Listo para Optimizar las Pruebas de Drogas de su Empresa?',
        text: `Llame al ${SITE.phone.display} para inscribir a su empresa o configurar el procesamiento digital por código de barras.`,
        primary: { label: 'Inscribir Empresa', href: 'contact' },
        secondary: { label: `Llamar a Flotas: ${SITE.phone.display}`, href: 'tel' },
      },
    ],
  },
};

export default page;
