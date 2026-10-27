import type { PageModule } from '../types';
import { SITE } from '../../config/site';

const page: PageModule = {
  en: {
    title: 'Mobile Drug Testing & Phlebotomy in Longview, TX | L&T Solutions',
    description: '24/7 mobile drug testing, legal DNA paternity testing, DOT compliance, and in-home blood draws for residents and businesses in Longview, TX.',
    schemaType: 'CollectionPage',
    blocks: [
      {
        type: 'hero',
        eyebrow: 'Longview & Gregg County Service Hub',
        title: 'Mobile Drug Testing, DNA & In-Home Blood Draws in Longview, TX',
        subtitle: 'Skip the long wait times at Quest and Labcorp in Longview. We provide rapid 24/7 mobile drug testing, court-admissible legal DNA, and gentle home blood draws directly to your door.',
        image: 'mobile',
        imageAlt: 'Mobile medical collection unit serving Longview TX residents and businesses',
        primary: { label: 'Book Mobile Draw in Longview', href: 'contact' },
        secondary: { label: `Call 24/7 Dispatch: ${SITE.emergencyPhone.display}`, href: 'emergency' },
        badges: true,
      },
      {
        type: 'answer',
        bg: 'lavender',
        question: 'Where can I get a mobile blood draw or drug test in Longview, TX?',
        answer: 'L&T Solutions dispatches certified mobile phlebotomists and specimen collectors directly to homes, job sites, and fleet yards throughout Longview, TX (Gregg County). We collect blood for doctor-ordered lab requisitions, administer SAMHSA-certified workplace drug screens, collect AABB legal DNA for court, and transport samples to Quest, Labcorp, or hospital labs.',
      },
      {
        type: 'cards',
        columns: 4,
        eyebrow: 'Longview Services',
        title: 'Collection Services Available in Longview, TX',
        intro: 'Available at your home, office, or job site in Longview and surrounding Gregg County.',
        cards: [
          {
            title: 'In-Home Blood Draws',
            text: 'Gentle mobile phlebotomy for seniors, homebound, or busy Longview residents. Delivered to your lab of choice.',
            href: 'blood',
            icon: 'home',
          },
          {
            title: 'Employer Drug Screens',
            text: 'On-site 5, 10, and 12-panel urine, saliva, and 90-day hair follicle drug testing for Longview industrial fleets.',
            href: 'drug',
            icon: 'briefcase',
          },
          {
            title: 'Legal Court DNA Paternity',
            text: 'AABB-accredited court-admissible DNA testing for child support and custody proceedings.',
            href: 'dna',
            icon: 'scale',
          },
          {
            title: 'Specialty Lab Kits',
            text: 'We draw, centrifuge, and ship your functional medicine, hormone, or specialty lab kits from your home.',
            href: 'kits',
            icon: 'clipboard',
          },
        ],
      },
      {
        type: 'tool',
        tool: 'mileage',
      },
      {
        type: 'faq',
        title: 'Longview Mobile Testing Frequently Asked Questions',
        items: [
          {
            q: 'How fast can a mobile collector reach my location in Longview?',
            a: 'Our mobile dispatch team targets an arrival time within 1 to 2 hours for scheduled appointments or 24/7 emergency post-accident calls in Longview.',
          },
          {
            q: 'How much is the travel surcharge for Longview home draws?',
            a: 'Longview falls into Zone 2 (Adjacent Zone). We charge a modest travel surcharge ($25–$35) confirmed transparently before dispatching.',
          },
          {
            q: 'Can you deliver my blood samples to Quest or Labcorp in Longview?',
            a: 'Yes! Our mobile phlebotomists transport your samples under strict cold-chain refrigeration directly to Quest Diagnostics or Labcorp in Longview.',
          },
        ],
      },
      {
        type: 'cta',
        title: 'Need a Mobile Blood Draw or Drug Screen in Longview, TX?',
        text: `Call ${SITE.phone.display} to schedule your home visit or workplace collection in Longview today.`,
        primary: { label: 'Book Longview Visit', href: 'contact' },
        secondary: { label: `Call ${SITE.phone.display}`, href: 'tel' },
      },
    ],
  },
  es: {
    title: 'Pruebas Móviles de Drogas y Toma de Sangre en Longview, TX | L&T Solutions',
    description: 'Pruebas móviles de drogas 24/7, ADN legal de paternidad, cumplimiento DOT y toma de sangre a domicilio en Longview, TX.',
    schemaType: 'CollectionPage',
    blocks: [
      {
        type: 'hero',
        eyebrow: 'Atención en Longview y Condado de Gregg',
        title: 'Pruebas Móviles de Drogas, ADN y Toma de Sangre en Longview, TX',
        subtitle: 'Evite las largas esperas en centros corporativos de Longview. Brindamos pruebas móviles 24/7, ADN legal para corte y tomas de sangre a domicilio.',
        image: 'mobile',
        imageAlt: 'Unidad médica móvil atendiendo a familias y empresas en Longview TX',
        primary: { label: 'Agendar Servicio Móvil en Longview', href: 'contact' },
        secondary: { label: `Llamar 24/7: ${SITE.emergencyPhone.display}`, href: 'emergency' },
        badges: true,
      },
      {
        type: 'answer',
        bg: 'lavender',
        question: '¿Dónde puedo solicitar toma de sangre a domicilio o prueba de drogas en Longview, TX?',
        answer: 'L&T Solutions envía flebotomistas móviles y recolectores certificados a domicilios, empresas y patios de camiones en Longview, TX (condado de Gregg). Tomamos muestras de sangre por orden médica, pruebas de drogas SAMHSA, ADN legal AABB y entregamos las muestras a Quest, Labcorp o laboratorios hospitalarios.',
      },
      {
        type: 'cards',
        columns: 4,
        eyebrow: 'Servicios en Longview',
        title: 'Servicios Disponibles en Longview, TX',
        intro: 'Disponibles en su hogar, oficina o lugar de trabajo en Longview y el condado de Gregg.',
        cards: [
          {
            title: 'Toma de Sangre a Domicilio',
            text: 'Flebotomía móvil amable para adultos mayores o familias ocupadas en Longview.',
            href: 'blood',
            icon: 'home',
          },
          {
            title: 'Pruebas para Empresas',
            text: 'Exámenes de drogas de 5, 10 y 12 paneles en orina, saliva y folículo capilar en el sitio de trabajo.',
            href: 'drug',
            icon: 'briefcase',
          },
          {
            title: 'ADN Legal para Corte',
            text: 'Pruebas de ADN con validez en corte acreditadas por AABB para custodia y manutención.',
            href: 'dna',
            icon: 'scale',
          },
          {
            title: 'Kits Especializados',
            text: 'Tomamos, centrifugamos y enviamos sus kits de medicina funcional directamente desde su hogar.',
            href: 'kits',
            icon: 'clipboard',
          },
        ],
      },
      {
        type: 'tool',
        tool: 'mileage',
      },
      {
        type: 'faq',
        title: 'Preguntas Frecuentes de Servicio Móvil en Longview',
        items: [
          {
            q: '¿Qué tan rápido llega un recolector móvil a mi ubicación en Longview?',
            a: 'Nuestro equipo móvil tiene un tiempo estimado de llegada de 1 a 2 horas para citas programadas o llamadas de emergencia en Longview.',
          },
          {
            q: '¿De cuánto es el recargo de viaje para tomas a domicilio en Longview?',
            a: 'Longview está en la Zona 2. Se aplica una cuota de viaje accesible ($25–$35) confirmada con transparencia antes de salir.',
          },
          {
            q: '¿Pueden entregar mis muestras de sangre a Quest o Labcorp en Longview?',
            a: '¡Sí! Nuestras flebotomistas transportan sus muestras con refrigeración adecuada directamente a Quest Diagnostics o Labcorp en Longview.',
          },
        ],
      },
      {
        type: 'cta',
        title: '¿Necesita Toma de Sangre o Prueba de Drogas Móvil en Longview, TX?',
        text: `Llame al ${SITE.phone.display} para agendar su visita a domicilio o servicio en empresa hoy mismo.`,
        primary: { label: 'Agendar Visita en Longview', href: 'contact' },
        secondary: { label: `Llamar al ${SITE.phone.display}`, href: 'tel' },
      },
    ],
  },
};

export default page;
