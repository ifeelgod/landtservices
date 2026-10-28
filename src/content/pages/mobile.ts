import type { PageModule } from '../types';
import { SITE } from '../../config/site';

const page: PageModule = {
  en: {
    title: '24/7 Mobile Drug Testing & Phlebotomy in East Texas',
    description: '24/7 mobile drug testing, alcohol screening, and on-site phlebotomy dispatched to your job site, oilfield rig, fleet yard, or home in Marshall & Longview TX.',
    schemaType: 'MedicalWebPage',
    service: {
      name: 'Mobile Specimen Collection',
      serviceType: 'Mobile Specimen Collection',
      description: '24/7 mobile specimen collection for drug screening, DOT compliance, post-accident emergency response, and in-home phlebotomy across East Texas.',
    },
    blocks: [
      {
        type: 'hero',
        eyebrow: '24/7 On-Site Dispatch',
        title: '24/7 On-Site Mobile Drug Testing & Phlebotomy Across East Texas',
        subtitle: 'We bring certified collectors and equipped mobile medical units directly to your job site, oil rig, facility, fleet yard, or home—day or night.',
        image: 'mobile',
        imageAlt: 'Certified mobile collector standing next to a mobile collection unit at an East Texas industrial site',
        primary: { label: 'Request Mobile Dispatch', href: '#dispatch' },
        secondary: { label: `Call 24/7 Dispatch: ${SITE.emergencyPhone.display}`, href: 'emergency' },
        badges: true,
      },
      {
        type: 'banner',
        tone: 'pink',
        text: 'Immediate post-accident or reasonable suspicion call? Our mobile dispatch line is active 24 hours a day, 7 days a week.',
        cta: { label: `Call 24/7: ${SITE.emergencyPhone.display}`, href: 'emergency' },
      },
      {
        type: 'answer',
        bg: 'lavender',
        question: 'How fast can a mobile drug tester get to my job site?',
        answer: 'L&T Solutions dispatches mobile specimen collectors 24/7 with a target on-site response time of within 2 hours across Marshall, Longview, Tyler, Hallsville, Carthage, and Shreveport. Our fully equipped mobile medical collection vehicles handle workplace drug screening, alcohol breathalyzer testing, post-accident emergency collections, and in-home phlebotomy blood draws.',
      },
      {
        type: 'cards',
        columns: 4,
        eyebrow: 'Mobile Capabilities',
        title: 'Mobile Collection Services We Provide',
        intro: 'On-site medical testing delivered straight to your location.',
        cards: [
          {
            title: '24/7 Emergency Post-Accident',
            text: 'Immediate dispatch for workplace accidents or reasonable suspicion to satisfy DOT and OSHA mandatory time windows.',
            icon: 'siren',
            price: '$85',
          },
          {
            title: 'Oilfield & Industrial Job Sites',
            text: 'On-site drug and alcohol screening for pipeline crews, refineries, manufacturing plants, and construction sites.',
            icon: 'truck',
          },
          {
            title: 'In-Home Phlebotomy Draws',
            text: 'Gentle blood draws at home for elderly, homebound, or busy patients unable to visit a laboratory facility.',
            href: 'blood',
            icon: 'home',
            cta: 'In-Home Draws',
          },
          {
            title: 'On-Site Corporate Event Drives',
            text: 'Mass employee screening events for annual wellness, pre-employment sweeps, or random pool compliance drives.',
            icon: 'briefcase',
          },
        ],
      },
      {
        type: 'split',
        reverse: true,
        eyebrow: 'Equipment & Safety',
        title: 'Full Biohazard Containment & Medical Cold-Chain Storage',
        text: 'Our mobile medical collection vehicles operate under strict clinical protocols, ensuring specimen integrity and legal defensibility equal to a permanent brick-and-mortar laboratory facility.',
        items: [
          'OSHA-compliant biohazard containment and sterile disposal',
          'Medical cold-chain refrigeration maintaining 2°C to 8°C temperature controls',
          'Calibrated EBT breathalyzers for instant DOT alcohol testing',
          'Complete legal chain-of-custody documentation and tamper-evident seals',
        ],
        image: 'mobile',
        imageAlt: 'Mobile collection unit equipped for cold chain storage and biohazard containment',
        cta: { label: 'Dispatch a Mobile Unit Now', href: '#dispatch' },
      },
      {
        type: 'form',
        variant: 'dispatch',
        id: 'dispatch',
        bg: 'white',
        title: 'Request 24/7 Mobile Dispatch',
        intro: 'Fill out this quick dispatch request and our on-call supervisor will call you immediately to confirm collector arrival time.',
      },
      {
        type: 'area',
        bg: 'lavender',
        title: 'Mobile Service Territory Across East Texas & Western Louisiana',
        intro: `Our mobile units dispatch daily from ${SITE.address.city}, TX, covering Harrison County, Gregg County, Panola County, Rusk County, Smith County, and Shreveport, LA along the I-20 corridor.`,
      },
      {
        type: 'faq',
        title: 'Mobile Collection Frequently Asked Questions',
        items: [
          {
            q: 'How does mobile trip fee pricing work?',
            a: 'Trip fees depend on travel distance from Marshall and whether dispatch is during standard business hours or after-hours emergency. We quote all travel fees transparently over the phone before dispatching.',
          },
          {
            q: 'Is there a minimum number of donors required for mobile testing?',
            a: 'No minimum donor requirement for emergency post-accident or reasonable suspicion dispatch. For scheduled corporate events, we offer discounted per-donor group rates.',
          },
          {
            q: 'What facilities are needed at my job site for mobile collection?',
            a: 'Our collectors can operate out of our fully equipped mobile vehicle or set up privately in a clean room, office, or restroom at your facility.',
          },
          {
            q: 'Do your mobile collectors speak Spanish?',
            a: 'Yes! We have bilingual certified collectors available to ensure smooth, clear communication with Spanish-speaking workers.',
          },
        ],
      },
      {
        type: 'cta',
        title: 'Need an On-Site Collector Dispatched Right Now?',
        text: `Call ${SITE.emergencyPhone.display} for 24/7 emergency dispatch or submit the dispatch form above.`,
        primary: { label: `Call 24/7: ${SITE.emergencyPhone.display}`, href: 'emergency' },
        secondary: { label: 'Schedule Regular Visit', href: 'contact' },
      },
    ],
  },
  es: {
    title: 'Pruebas Móviles de Drogas y Flebotomía 24/7 en el Este de Texas',
    description: 'Pruebas móviles de drogas 24/7, alcohol y flebotomía en el sitio enviadas a su empresa, obra, campo petrolero o domicilio en Marshall y Longview, TX.',
    schemaType: 'MedicalWebPage',
    service: {
      name: 'Toma Móvil de Muestras',
      serviceType: 'Toma Móvil de Muestras',
      description: 'Servicio móvil 24/7 de recolección de muestras de drogas, cumplimiento DOT, respuesta de emergencia por accidentes y flebotomía a domicilio en el Este de Texas.',
    },
    blocks: [
      {
        type: 'hero',
        eyebrow: 'Servicio Móvil 24/7 en el Sitio',
        title: 'Pruebas Móviles de Drogas y Flebotomía 24/7 en el Este de Texas',
        subtitle: 'Llevamos recolectores certificados y unidades médicas móviles equipadas directamente a su empresa, obra, campo petrolero, patio de camiones o domicilio.',
        image: 'mobile',
        imageAlt: 'Recolector móvil certificado junto a unidad médica móvil en un sitio industrial del Este de Texas',
        primary: { label: 'Solicitar Servicio Móvil', href: '#dispatch' },
        secondary: { label: `Llamada de Emergencia 24/7: ${SITE.emergencyPhone.display}`, href: 'emergency' },
        badges: true,
      },
      {
        type: 'banner',
        tone: 'pink',
        text: '¿Necesita servicio inmediato por accidente o sospecha razonable? Nuestra línea de atención móvil funciona 24 horas al día, 7 días a la semana.',
        cta: { label: `Llamar 24/7: ${SITE.emergencyPhone.display}`, href: 'emergency' },
      },
      {
        type: 'answer',
        bg: 'lavender',
        question: '¿Qué tan rápido puede llegar un recolector móvil a mi empresa u obra?',
        answer: 'L&T Solutions envía recolectores móviles las 24/7 con meta de llegada en aproximadamente 2 horas en Marshall, Longview, Tyler, Hallsville, Carthage y Shreveport. Nuestras unidades médicas equipadas realizan pruebas de drogas, alcoholímetro, recolección por accidente y tomas de sangre a domicilio.',
      },
      {
        type: 'cards',
        columns: 4,
        eyebrow: 'Servicios Móviles',
        title: 'Servicios Móviles de Recolección de Muestras',
        intro: 'Atención médica directamente en la ubicación que usted indique.',
        cards: [
          {
            title: 'Emergencia 24/7 por Accidentes',
            text: 'Envío inmediato por accidentes laborales o sospecha razonable para cumplir tiempos obligatorios DOT y OSHA.',
            icon: 'siren',
            price: '$85',
          },
          {
            title: 'Campos Petroleros y Obras',
            text: 'Pruebas en el sitio de trabajo para cuadrillas de oleoductos, refinerías, plantas y obras de construcción.',
            icon: 'truck',
          },
          {
            title: 'Flebotomía a Domicilio',
            text: 'Tomas de sangre amables a domicilio para adultos mayores o personas imposibilitadas de acudir a una clínica.',
            href: 'blood',
            icon: 'home',
            cta: 'Tomas a Domicilio',
          },
          {
            title: 'Jornadas Masivas para Empresas',
            text: 'Eventos de toma de muestras masivas para exámenes anuales, pre-empleo o pruebas aleatorias masivas.',
            icon: 'briefcase',
          },
        ],
      },
      {
        type: 'split',
        reverse: true,
        eyebrow: 'Equipo y Seguridad',
        title: 'Control de Bioseguridad y Cadena de Frío Médica',
        text: 'Nuestras unidades móviles de recolección operan bajo estrictos protocolos clínicos, garantizando la integridad de las muestras y validez legal equivalente a un laboratorio fijo.',
        items: [
          'Contención de bioseguridad y manejo de desechos estériles según normas OSHA',
          'Refrigeración médica con cadena de frío de 2°C a 8°C',
          'Alcoholímetros calibrados (EBT) para pruebas de alcohol DOT instantáneas',
          'Documentación completa de cadena de custodia y sellos de seguridad',
        ],
        image: 'mobile',
        imageAlt: 'Unidad móvil equipada para almacenamiento en cadena de frío y manejo de bioseguridad',
        cta: { label: 'Solicitar Recolector Móvil', href: '#dispatch' },
      },
      {
        type: 'form',
        variant: 'dispatch',
        id: 'dispatch',
        bg: 'white',
        title: 'Solicitar Servicio Móvil 24/7',
        intro: 'Llene este formulario rápido de solicitud y nuestro supervisor de guardia le llamará de inmediato para confirmar la llegada del recolector.',
      },
      {
        type: 'area',
        bg: 'lavender',
        title: 'Área de Cobertura Móvil en el Este de Texas y Luisiana',
        intro: `Nuestras unidades móviles salen a diario desde ${SITE.address.city}, TX, cubriendo los condados de Harrison, Gregg, Panola, Rusk, Smith y Shreveport, LA sobre el corredor de la I-20.`,
      },
      {
        type: 'faq',
        title: 'Preguntas Frecuentes sobre Servicio Móvil',
        items: [
          {
            q: '¿Cómo se calcula el costo del viaje móvil?',
            a: 'La cuota de viaje depende de la distancia desde Marshall y de si el servicio es en horario regular o de emergencia fuera de horario. Informamos la cuota con transparencia por teléfono.',
          },
          {
            q: '¿Se requiere un número mínimo de empleados para ir a una empresa?',
            a: 'No hay mínimo para emergencias por accidente o sospecha razonable. Para eventos grupales programados ofrecemos tarifas grupales reducidas.',
          },
          {
            q: '¿Qué instalaciones se necesitan en mi empresa para la recolección móvil?',
            a: 'Nuestros recolectores pueden trabajar dentro de nuestra unidad móvil equipada o en una oficina limpia o baño de sus instalaciones.',
          },
          {
            q: '¿Sus recolectores móviles hablan español?',
            a: '¡Sí! Contamos con recolectores certificados bilingües para garantizar una comunicación fluida con trabajadores hispanohablantes.',
          },
        ],
      },
      {
        type: 'cta',
        title: '¿Necesita un Recolector Móvil en su Empresa Ahora Mismo?',
        text: `Llame al ${SITE.emergencyPhone.display} para emergencias 24/7 o llene el formulario de solicitud arriba.`,
        primary: { label: `Llamar 24/7: ${SITE.emergencyPhone.display}`, href: 'emergency' },
        secondary: { label: 'Agendar Visita Regular', href: 'contact' },
      },
    ],
  },
};

export default page;
