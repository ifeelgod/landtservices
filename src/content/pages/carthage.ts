import type { PageModule } from '../types';
import { SITE } from '../../config/site';

const page: PageModule = {
  en: {
    title: 'Mobile Drug Testing & Phlebotomy in Carthage, TX (Panola Co.)',
    description: '24/7 mobile drug testing, oilfield workforce screening, legal DNA paternity, and in-home blood draws in Carthage, TX and Panola County.',
    schemaType: 'CollectionPage',
    blocks: [
      {
        type: 'hero',
        eyebrow: 'Carthage & Panola County Hub',
        title: '24/7 Mobile Drug Testing, DNA & Phlebotomy in Carthage, TX',
        subtitle: 'Dedicated mobile medical collection serving oilfield contractors, industrial fleets, and residential patients throughout Carthage and Panola County.',
        image: 'mobile',
        imageAlt: 'Mobile collection unit serving oilfield sites and residents in Carthage TX',
        primary: { label: 'Request Dispatch in Carthage', href: 'contact' },
        secondary: { label: `Call 24/7 Dispatch: ${SITE.emergencyPhone.display}`, href: 'emergency' },
        badges: true,
      },
      {
        type: 'answer',
        bg: 'lavender',
        question: 'How do I schedule mobile drug testing or a home blood draw in Carthage, TX?',
        answer: 'L&T Solutions dispatches mobile collection units daily to Carthage, TX and Panola County. We provide 24/7 emergency post-accident drug screens for pipeline contractors, DOT fleet screening, AABB legal DNA paternity collections, and gentle home phlebotomy for seniors.',
      },
      {
        type: 'tool',
        tool: 'mileage',
      },
      {
        type: 'cta',
        title: 'Need Mobile Testing in Carthage, TX?',
        text: `Call ${SITE.phone.display} for mobile phlebotomy or 24/7 fleet dispatch in Panola County.`,
        primary: { label: 'Book Carthage Visit', href: 'contact' },
        secondary: { label: `Call ${SITE.phone.display}`, href: 'tel' },
      },
    ],
  },
  es: {
    title: 'Pruebas Móviles de Drogas y Flebotomía en Carthage, TX (Panola)',
    description: 'Pruebas móviles de drogas 24/7, exámenes petroleros, ADN legal y toma de sangre a domicilio en Carthage, TX y el condado de Panola.',
    schemaType: 'CollectionPage',
    blocks: [
      {
        type: 'hero',
        eyebrow: 'Atención en Carthage y Condado de Panola',
        title: 'Pruebas Móviles de Drogas, ADN y Toma de Sangre en Carthage, TX',
        subtitle: 'Servicio móvil médico dedicado a empresas petroleras, contratistas y familias en Carthage y el condado de Panola.',
        image: 'mobile',
        imageAlt: 'Unidad móvil médica en sitio de trabajo en Carthage TX',
        primary: { label: 'Solicitar Servicio en Carthage', href: 'contact' },
        secondary: { label: `Llamar 24/7: ${SITE.emergencyPhone.display}`, href: 'emergency' },
        badges: true,
      },
      {
        type: 'answer',
        bg: 'lavender',
        question: '¿Cómo solicito pruebas móviles de drogas o toma de sangre en Carthage, TX?',
        answer: 'L&T Solutions envía unidades móviles diariamente a Carthage, TX y el condado de Panola. Ofrecemos pruebas 24/7 por accidentes para contratistas, cumplimiento DOT, ADN legal AABB y flebotomía a domicilio.',
      },
      {
        type: 'tool',
        tool: 'mileage',
      },
      {
        type: 'cta',
        title: '¿Necesita Servicio Móvil en Carthage, TX?',
        text: `Llame al ${SITE.phone.display} para flebotomía a domicilio o servicio de flotas en Panola.`,
        primary: { label: 'Agendar Visita en Carthage', href: 'contact' },
        secondary: { label: `Llamar al ${SITE.phone.display}`, href: 'tel' },
      },
    ],
  },
};

export default page;
