import type { PageModule } from '../types';
import { SITE } from '../../config/site';

const page: PageModule = {
  en: {
    title: 'Mobile Drug Testing & Phlebotomy in Hallsville, TX',
    description: 'Mobile drug testing, legal DNA paternity, and in-home blood draws for families and businesses in Hallsville, TX.',
    schemaType: 'CollectionPage',
    blocks: [
      {
        type: 'hero',
        eyebrow: 'Hallsville & East Harrison Hub',
        title: 'Mobile Drug Testing, DNA & In-Home Blood Draws in Hallsville, TX',
        subtitle: 'Fast, convenient mobile collection dispatches straight to your home, office, or job site in Hallsville, TX along US-80.',
        image: 'mobile',
        imageAlt: 'Mobile collection unit serving families and businesses in Hallsville TX',
        primary: { label: 'Book Mobile Draw in Hallsville', href: 'contact' },
        secondary: { label: `Call 24/7 Dispatch: ${SITE.emergencyPhone.display}`, href: 'emergency' },
        badges: true,
      },
      {
        type: 'answer',
        bg: 'lavender',
        question: 'Can I get a mobile blood draw or drug test in Hallsville, TX?',
        answer: 'Yes. Hallsville, TX is located directly in our core mobile service zone between Marshall and Longview. L&T Solutions dispatches certified phlebotomists and collectors to Hallsville homes and job sites for blood draws, drug screening, and legal DNA testing.',
      },
      {
        type: 'tool',
        tool: 'mileage',
      },
      {
        type: 'cta',
        title: 'Need Mobile Testing in Hallsville, TX?',
        text: `Call ${SITE.phone.display} to schedule your mobile phlebotomist or employer screening in Hallsville today.`,
        primary: { label: 'Book Hallsville Visit', href: 'contact' },
        secondary: { label: `Call ${SITE.phone.display}`, href: 'tel' },
      },
    ],
  },
  es: {
    title: 'Pruebas Móviles de Drogas y Flebotomía en Hallsville, TX',
    description: 'Pruebas móviles de drogas, ADN legal de paternidad y toma de sangre a domicilio en Hallsville, TX.',
    schemaType: 'CollectionPage',
    blocks: [
      {
        type: 'hero',
        eyebrow: 'Atención en Hallsville y Este de Harrison',
        title: 'Pruebas Móviles de Drogas, ADN y Toma de Sangre en Hallsville, TX',
        subtitle: 'Servicio móvil rápido enviado directamente a su hogar, oficina o lugar de trabajo en Hallsville sobre la US-80.',
        image: 'mobile',
        imageAlt: 'Unidad móvil médica atendiendo a familias en Hallsville TX',
        primary: { label: 'Agendar Servicio Móvil en Hallsville', href: 'contact' },
        secondary: { label: `Llamar 24/7: ${SITE.emergencyPhone.display}`, href: 'emergency' },
        badges: true,
      },
      {
        type: 'answer',
        bg: 'lavender',
        question: '¿Puedo solicitar toma de sangre a domicilio o prueba de drogas en Hallsville, TX?',
        answer: 'Sí. Hallsville se ubica directamente en nuestra zona principal de servicio entre Marshall y Longview. L&T Solutions envía flebotomistas certificadas a domicilios y empresas en Hallsville.',
      },
      {
        type: 'tool',
        tool: 'mileage',
      },
      {
        type: 'cta',
        title: '¿Necesita Servicio Móvil en Hallsville, TX?',
        text: `Llame al ${SITE.phone.display} para agendar su flebotomista móvil en Hallsville.`,
        primary: { label: 'Agendar Visita en Hallsville', href: 'contact' },
        secondary: { label: `Llamar al ${SITE.phone.display}`, href: 'tel' },
      },
    ],
  },
};

export default page;
