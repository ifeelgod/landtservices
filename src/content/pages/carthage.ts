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
        image: 'kiaArrival',
        imageAlt: 'Silver Kia SUV mobile collection unit serving energy contractors and residents in Carthage, TX',
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
        type: 'split',
        bg: 'white',
        eyebrow: 'Energy & Industrial Safety',
        title: 'On-Site Oilfield, Pipeline & Industrial Workforce Testing',
        text: 'Keep your Panola County operations running without sending crews off-site. Our mobile collectors arrive equipped with rapid drug screens, breathalyzers, and tamper-evident custody documentation.',
        items: [
          'Immediate post-accident emergency dispatch available 24/7/365',
          'Fast oral fluid and 5/10/12-panel urine screens on operating shifts',
          'Full OSHA and Texas Labor Code §411.091 regulatory compliance',
        ],
        image: 'corpDrugTest',
        imageAlt: 'Certified occupational health specialist administering rapid screening at an industrial worksite in East Texas',
      },
      {
        type: 'split',
        reverse: true,
        bg: 'lavender',
        eyebrow: 'Panola County Home Care',
        title: 'Gentle In-Home Phlebotomy for Carthage Seniors & Families',
        text: 'Avoid the highway drive to outpatient clinics. Our certified mobile phlebotomists come directly to your residence in Carthage and Panola County for doctor-ordered blood work.',
        items: [
          'Gentle technique and compassionate care for elderly and homebound patients',
          'Strict adherence to doctor-ordered requisition forms and fasting protocols',
          'Specimens delivered under medical refrigeration to your preferred lab',
        ],
        image: 'seniorBloodDraw',
        imageAlt: 'Certified Hispanic phlebotomist smiling and gently performing an in-home blood draw for an elderly lady in her armchair',
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
        image: 'kiaArrival',
        imageAlt: 'Unidad móvil SUV Kia gris plateada en sitio de trabajo en Carthage, TX',
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
        type: 'split',
        bg: 'white',
        eyebrow: 'Seguridad en Oleoductos y Energía',
        title: 'Pruebas en el Sitio para Cuadrillas y Campos Petroleros',
        text: 'Mantenga sus operaciones en el condado de Panola sin trasladar cuadrillas. Nuestros recolectores móviles llegan equipados con pruebas rápidas de drogas, alcoholímetros y actas oficiales de custodia.',
        items: [
          'Despacho de emergencia post-accidente las 24 horas, los 365 días del año',
          'Pruebas rápidas de saliva y orina en turnos operativos',
          'Cumplimiento cabal con normas OSHA y el Código Laboral de Texas',
        ],
        image: 'corpDrugTest',
        imageAlt: 'Especialista de salud ocupacional certificada realizando prueba rápida en una planta industrial',
      },
      {
        type: 'split',
        reverse: true,
        bg: 'lavender',
        eyebrow: 'Atención en Casa en Panola',
        title: 'Toma de Sangre Amable a Domicilio para Adultos Mayores en Carthage',
        text: 'Evite traslados largos en carretera. Nuestras flebotomistas certificadas van directamente a su hogar en Carthage y el condado de Panola para análisis ordenados por su médico.',
        items: [
          'Trato comprensivo y respetuoso para adultos mayores y personas convalecientes',
          'Cumplimiento estricto de las órdenes médicas y tiempos de ayuno',
          'Muestras refrigeradas y entregadas oportunamente al laboratorio elegido',
        ],
        image: 'seniorBloodDraw',
        imageAlt: 'Flebotomista hispana certificada realizando con amabilidad una extracción de sangre a domicilio a una señora mayor en su sillón',
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
