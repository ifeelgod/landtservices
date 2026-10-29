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
        image: 'kiaArrival',
        imageAlt: 'Silver Kia SUV mobile collection unit serving families and businesses in Hallsville, TX',
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
        type: 'split',
        bg: 'white',
        eyebrow: 'Family DNA Paternity',
        title: 'Court-Admissible & Private DNA Paternity in Hallsville',
        text: 'Need answers for Harrison County child support or private family clarity? Our certified DNA collectors travel to Hallsville to perform painless cheek swab collections under strict chain-of-custody protocols.',
        items: [
          'AABB-accredited partner laboratory results recognized by Texas family judges',
          'Gentle buccal cheek swabbing suitable for infants and adults',
          'Fast results in 2 to 3 business days via encrypted client portal',
        ],
        image: 'paternityConsult',
        imageAlt: 'African-American father and daughter in a compassionate private clinic consultation with a professional medical specialist',
      },
      {
        type: 'split',
        reverse: true,
        bg: 'lavender',
        eyebrow: 'US-80 Corridor Home Care',
        title: 'Convenient In-Home Blood Draws for Hallsville Residents',
        text: 'Skip the trip to Longview or Marshall for routine lab work. Our certified phlebotomists come directly to your residence in Hallsville to collect doctor-ordered specimens.',
        items: [
          'Gentle draws for seniors, busy parents, and mobility-impaired patients',
          'Specimens delivered under medical cold-chain to Quest, Labcorp, or local hospitals',
          'Flexible scheduling during morning fasting hours',
        ],
        image: 'seniorBloodDraw',
        imageAlt: 'Certified Hispanic phlebotomist smiling and gently performing an in-home blood draw for an elderly lady in her armchair',
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
        image: 'kiaArrival',
        imageAlt: 'Unidad móvil SUV Kia gris plateada atendiendo a familias en Hallsville, TX',
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
        type: 'split',
        bg: 'white',
        eyebrow: 'Pruebas de ADN Familiar',
        title: 'Pruebas de Paternidad Legales y Privadas en Hallsville',
        text: '¿Requiere respuestas para la corte de familia del condado de Harrison o tranquilidad personal? Nuestros recolectores certificados acuden a Hallsville para realizar hisopados bucales sin dolor bajo estricta cadena de custodia.',
        items: [
          'Resultados de laboratorios asociados AABB reconocidos por jueces de Texas',
          'Hisopado bucal suave adecuado para bebés, niños y adultos',
          'Resultados rápidos en 2 a 3 días hábiles en portal seguro',
        ],
        image: 'paternityConsult',
        imageAlt: 'Padre e hija en consulta médica familiar con especialista en clínica privada',
      },
      {
        type: 'split',
        reverse: true,
        bg: 'lavender',
        eyebrow: 'Atención en Casa en Hallsville',
        title: 'Extracciones de Sangre a Domicilio Cómodas y sin Estrés',
        text: 'Evite viajar a clínicas en Longview o Marshall. Nuestras flebotomistas van directamente a su casa en Hallsville para análisis clínicos ordenados por su doctor.',
        items: [
          'Atención paciente para personas mayores y personas convalecientes',
          'Muestras refrigeradas y entregadas a Quest, Labcorp o laboratorios de hospital',
          'Horarios matutinos disponibles para análisis en ayuno',
        ],
        image: 'seniorBloodDraw',
        imageAlt: 'Flebotomista hispana certificada realizando con amabilidad una extracción de sangre a domicilio a una señora mayor en su sillón',
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
