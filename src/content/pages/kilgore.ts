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
        image: 'mobile',
        imageAlt: 'Mobile medical unit serving fleets and residents in Kilgore TX',
        primary: { label: 'Book Mobile Draw in Kilgore', href: 'contact' },
        secondary: { label: `Call 24/7 Dispatch: ${SITE.emergencyPhone.display}`, href: 'emergency' },
        badges: true,
      },
      {
        type: 'answer',
        bg: 'lavender',
        question: 'Does L&T Solutions offer mobile testing in Kilgore, TX?',
        answer: 'Yes. L&T Solutions dispatches mobile collection vans directly to Kilgore, TX. We provide 5/10/12-panel drug screens, 90-day hair follicle testing, DOT physical coordination, AABB legal court DNA, and in-home blood draws for local residents.',
      },
      {
        type: 'tool',
        tool: 'mileage',
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
        image: 'mobile',
        imageAlt: 'Unidad médica móvil atendiendo a flotas y residentes en Kilgore TX',
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
