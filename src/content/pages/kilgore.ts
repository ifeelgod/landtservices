import type { PageModule } from '../types';
import { SITE } from '../../config/site';

const page: PageModule = {
  en: {
    title: 'Mobile Drug Testing & Phlebotomy in Kilgore, TX | L&T Solutions',
    description: '24/7 mobile drug testing, DOT fleet compliance, legal DNA paternity, and home blood draws in Kilgore, TX (Gregg/Rusk County).',
    schemaType: 'CollectionPage',
    blocks: [
      {
        type: 'hero',
        eyebrow: 'Kilgore & Gregg/Rusk Hub',
        title: 'Mobile Drug Testing, DNA & In-Home Blood Draws in Kilgore, TX',
        subtitle: 'On-site mobile specimen collection for industrial fleets, energy services, and homebound patients throughout Kilgore, TX.',
        image: 'kiaArrival',
        imageAlt: 'Silver Kia SUV mobile collection unit serving commercial fleets and residents in Kilgore, TX',
        primary: { label: 'Book Mobile Draw in Kilgore', href: 'contact' },
        secondary: { label: `Call 24/7 Dispatch: ${SITE.emergencyPhone.display}`, href: 'emergency' },
        badges: true,
      },
      {
        type: 'answer',
        bg: 'lavender',
        question: 'Does L&T Solutions offer mobile testing in Kilgore, TX?',
        answer: 'Yes. L&T Solutions dispatches mobile collection units directly to Kilgore, TX. We provide 5/10/12-panel drug screens, 90-day hair follicle testing, DOT physical coordination, AABB legal court DNA, and in-home blood draws for local residents.',
      },
      {
        type: 'tool',
        tool: 'mileage',
      },
      {
        type: 'split',
        bg: 'white',
        eyebrow: 'Fleet & Industrial Hub',
        title: 'Commercial Fleet & Terminal Drug Screening in Kilgore',
        text: 'From energy service contractors to trucking fleets operating along US-259 and I-20, our certified DOT collectors perform prompt on-site specimen collections.',
        items: [
          'Direct terminal and yard collections reducing employee downtime',
          'Full FMCSA Clearinghouse and random consortium compliance',
          'Certified split-specimen Chain of Custody (CCF) administration',
        ],
        image: 'dotDriver',
        imageAlt: 'DOT-certified medical collector reviewing chain of custody clipboard with commercial CDL driver in East Texas',
      },
      {
        type: 'split',
        reverse: true,
        bg: 'lavender',
        eyebrow: 'In-Home Care',
        title: 'Compassionate In-Home Blood Draws for Kilgore Patients',
        text: 'Save your family members a stressful trip to a clinical lab. Our certified phlebotomists bring sterile supplies and gentle technique directly to patient homes in Kilgore.',
        items: [
          'Gentle phlebotomy for homebound seniors and pediatric patients',
          'Routine doctor-ordered lab work delivered to Quest or Labcorp',
          'Transparent, upfront trip fees confirmed before dispatch',
        ],
        image: 'seniorBloodDraw',
        imageAlt: 'Certified Hispanic phlebotomist smiling and gently performing an in-home blood draw for an elderly lady in her armchair',
      },
      {
        type: 'cta',
        title: 'Need On-Site Specimen Collection in Kilgore, TX?',
        text: `Call ${SITE.phone.display} to schedule your mobile phlebotomist or workplace collection in Kilgore today.`,
        primary: { label: 'Book Kilgore Visit', href: 'contact' },
        secondary: { label: `Call ${SITE.phone.display}`, href: 'tel' },
      },
    ],
  },
  es: {
    title: 'Pruebas Móviles de Drogas y Flebotomía en Kilgore, TX | L&T Solutions',
    description: 'Pruebas móviles de drogas 24/7, cumplimiento de flotas DOT, ADN legal y toma de sangre a domicilio en Kilgore, TX.',
    schemaType: 'CollectionPage',
    blocks: [
      {
        type: 'hero',
        eyebrow: 'Atención en Kilgore y Condado de Gregg/Rusk',
        title: 'Pruebas Móviles de Drogas, ADN y Toma de Sangre en Kilgore, TX',
        subtitle: 'Toma de muestras médica móvil para empresas industriales, sector energético y pacientes a domicilio en Kilgore, TX.',
        image: 'kiaArrival',
        imageAlt: 'Unidad médica móvil SUV Kia plateada atendiendo a flotas y residentes en Kilgore, TX',
        primary: { label: 'Agendar Servicio Móvil en Kilgore', href: 'contact' },
        secondary: { label: `Llamar 24/7: ${SITE.emergencyPhone.display}`, href: 'emergency' },
        badges: true,
      },
      {
        type: 'answer',
        bg: 'lavender',
        question: '¿Ofrecen pruebas móviles de drogas y toma de sangre en Kilgore, TX?',
        answer: 'Sí. L&T Solutions envía unidades móviles directamente a Kilgore, TX. Ofrecemos exámenes de drogas de 5, 10 y 12 paneles, folículo capilar de 90 días, ADN legal AABB y tomas de sangre a domicilio.',
      },
      {
        type: 'tool',
        tool: 'mileage',
      },
      {
        type: 'split',
        bg: 'white',
        eyebrow: 'Transporte e Industria',
        title: 'Pruebas para Flotas Comerciales y Patios en Kilgore',
        text: 'Para empresas de servicios energéticos y flotillas de transporte sobre la US-259 y la I-20, nuestros recolectores certificados acuden a su patio para realizar exámenes en sitio.',
        items: [
          'Tomas en patio que evitan pérdidas de tiempo y desvíos de choferes',
          'Cumplimiento de Clearinghouse y consorcio aleatorio FMCSA',
          'Cadena de custodia oficial y muestra dividida para auditorías',
        ],
        image: 'dotDriver',
        imageAlt: 'Recolectora certificada DOT revisando formulario de custodia con chofer de camión comercial',
      },
      {
        type: 'split',
        reverse: true,
        bg: 'lavender',
        eyebrow: 'Atención en el Hogar',
        title: 'Tomas de Sangre Amables a Domicilio para Familias en Kilgore',
        text: 'Ahorre a sus seres queridos el viaje a una clínica lejana. Nuestras flebotomistas certificadas llevan material estéril y atención humana hasta su hogar.',
        items: [
          'Flebotomía delicada para adultos mayores y personas convalecientes',
          'Análisis clínicos entregados con refrigeración médica a Quest o Labcorp',
          'Tarifas de traslado claras y acordadas con anticipación',
        ],
        image: 'seniorBloodDraw',
        imageAlt: 'Flebotomista hispana certificada realizando con amabilidad una extracción de sangre a domicilio a una señora mayor en su sillón',
      },
      {
        type: 'cta',
        title: '¿Necesita Toma de Muestras en Kilgore, TX?',
        text: `Llame al ${SITE.phone.display} para agendar su flebotomista móvil o servicio de flotas en Kilgore.`,
        primary: { label: 'Agendar Visita en Kilgore', href: 'contact' },
        secondary: { label: `Llamar al ${SITE.phone.display}`, href: 'tel' },
      },
    ],
  },
};

export default page;
