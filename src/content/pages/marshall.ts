import type { PageModule } from '../types';
import { SITE, fullAddress } from '../../config/site';

const page: PageModule = {
  en: {
    title: 'Drug Testing, DNA & Phlebotomy Clinic in Marshall, TX',
    description: 'Walk-in drug testing clinic, AABB legal court DNA, DOT compliance, and mobile phlebotomy headquarters in Marshall, TX (Harrison County).',
    schemaType: 'CollectionPage',
    blocks: [
      {
        type: 'hero',
        eyebrow: 'Marshall & Harrison County HQ',
        title: 'Accredited Drug Testing, DNA & Phlebotomy Clinic in Marshall, TX',
        subtitle: `Visit our headquarters clinic at ${fullAddress()} for walk-in drug screens, AABB legal court DNA, and blood draws with zero long waiting room lines.`,
        image: 'entering',
        imageAlt: 'Patient entering the L&T Solutions clinical office in Marshall, TX',
        primary: { label: 'Visit Marshall Clinic', href: 'contact' },
        secondary: { label: `Call Clinic: ${SITE.phone.display}`, href: 'tel' },
        badges: true,
      },
      {
        type: 'answer',
        bg: 'lavender',
        question: 'Where is the L&T Solutions testing clinic located in Marshall, TX?',
        answer: `L&T Solutions is located at ${fullAddress()} in Marshall, TX. Our clinical collection center offers walk-in urine drug screening, alcohol breathalyzer testing, AABB legal DNA paternity collections for Harrison County Family Court, in-clinic phlebotomy blood draws, and 24/7 mobile unit dispatch across East Texas.`,
      },
      {
        type: 'cards',
        columns: 4,
        eyebrow: 'Marshall Clinic Services',
        title: 'Walk-In & Mobile Services in Marshall, TX',
        intro: 'Walk in during business hours or schedule an appointment for priority service.',
        cards: [
          {
            title: 'Walk-In Drug Screening',
            text: 'Fast 5, 10, and 12-panel urine screens with zero hospital wait times. Results in 24–48 hours.',
            href: 'drug',
            icon: 'flask',
          },
          {
            title: 'Legal Court DNA Paternity',
            text: 'AABB chain of custody paternity collections ($425 all-in) valid in Harrison County family court.',
            href: 'dna',
            icon: 'scale',
          },
          {
            title: 'Walk-In & Home Blood Draws',
            text: 'Gentle clinical phlebotomy for doctor-ordered lab work sent to your lab of choice.',
            href: 'blood',
            icon: 'home',
          },
          {
            title: '24/7 Mobile Dispatch',
            text: 'On-call mobile collection unit dispatched directly to Marshall homes, businesses, and job sites.',
            href: 'mobile',
            icon: 'truck',
          },
        ],
      },
      {
        type: 'map',
        title: 'Our Marshall Clinic Map & Directions',
        intro: `Located at ${fullAddress()} on W. Pinecrest Dr. in Marshall, TX. Direct client parking at the front entrance.`,
        bg: 'white',
      },
      {
        type: 'split',
        bg: 'white',
        eyebrow: 'Dedicated Local Clinic',
        title: 'Convenient Pinecrest Drive Access & Front Parking',
        text: 'Save time and avoid the chaos of regional hospital centers. Our Marshall clinic provides easy-in, easy-out access on West Pinecrest Drive with dedicated parking directly outside our suite entrance.',
        items: [
          'No check-in kiosks or long waiting room queues',
          'Private and temperature-controlled collection suites',
          'Walk-ins welcome every weekday from 8:00 AM to 5:00 PM CT',
        ],
        image: 'storefront',
        imageAlt: 'L&T Solutions clinic storefront and entrance on West Pinecrest Drive in Marshall, TX',
      },
      {
        type: 'split',
        reverse: true,
        bg: 'lavender',
        eyebrow: 'Local Team',
        title: 'Certified, Caring & Multi-Ethnic Healthcare Staff',
        text: 'Our team is part of the East Texas community. We provide compassionate, confidential testing with bilingual staff ready to assist Spanish-speaking donors and families.',
        items: [
          'Bilingual client assistance in English and Spanish',
          'Certified phlebotomy and DOT-qualified collectors',
          'Strict compliance with Texas Family Code and HIPAA privacy',
        ],
        image: 'diverseTeam',
        imageAlt: 'Diverse medical team and intake staff at the clinic reception in Marshall, TX',
      },
      {
        type: 'faq',
        bg: 'lavender',
        title: 'Marshall Clinic Frequently Asked Questions',
        items: [
          {
            q: 'What are your Marshall clinic hours?',
            a: 'Our Marshall clinic is open Monday through Friday from 8:00 AM to 5:00 PM for walk-ins and appointments. Mobile dispatch operates 24/7.',
          },
          {
            q: 'Do I need an appointment for a drug screen in Marshall?',
            a: 'No appointment needed! Walk-ins are welcome during clinic business hours. Appointments are recommended for legal DNA collections.',
          },
        ],
      },
      {
        type: 'cta',
        title: 'Ready to Visit Our Marshall Clinic?',
        text: `Visit us at ${fullAddress()} or call ${SITE.phone.display} for immediate assistance.`,
        primary: { label: 'Book Appointment', href: 'contact' },
        secondary: { label: `Call ${SITE.phone.display}`, href: 'tel' },
      },
    ],
  },
  es: {
    title: 'Clínica de Pruebas de Drogas, ADN y Flebotomía en Marshall, TX',
    description: 'Clínica de pruebas de drogas sin cita, ADN legal AABB, cumplimiento DOT y flebotomía en Marshall, TX (condado de Harrison).',
    schemaType: 'CollectionPage',
    blocks: [
      {
        type: 'hero',
        eyebrow: 'Sede en Marshall y Condado de Harrison',
        title: 'Clínica Acreditada de Pruebas de Drogas, ADN y Flebotomía en Marshall, TX',
        subtitle: `Visite nuestra clínica principal en ${fullAddress()} para pruebas de drogas sin cita, ADN legal AABB y extracciones de sangre sin largas esperas.`,
        image: 'entering',
        imageAlt: 'Paciente entrando a la oficina clínica de L&T Solutions en Marshall, TX',
        primary: { label: 'Visitar Clínica en Marshall', href: 'contact' },
        secondary: { label: `Llamar a Clínica: ${SITE.phone.display}`, href: 'tel' },
        badges: true,
      },
      {
        type: 'answer',
        bg: 'lavender',
        question: '¿Dónde está ubicada la clínica de L&T Solutions en Marshall, TX?',
        answer: `L&T Solutions se ubica en ${fullAddress()} en Marshall, TX. Nuestro centro clínico ofrece exámenes de drogas en orina sin cita, alcoholímetro, tomas de ADN legal para la corte del condado de Harrison, flebotomía y despacho de unidades móviles 24/7 en el Este de Texas.`,
      },
      {
        type: 'cards',
        columns: 4,
        eyebrow: 'Servicios en Marshall',
        title: 'Servicios en Clínica y Móviles en Marshall, TX',
        intro: 'Llegue sin cita en horario regular o agende su cita prioritaria.',
        cards: [
          {
            title: 'Exámenes de Drogas Sin Cita',
            text: 'Pruebas rápidas de 5, 10 y 12 paneles sin filas. Resultados de laboratorio en 24–48 horas.',
            href: 'drug',
            icon: 'flask',
          },
          {
            title: 'ADN Legal para Corte',
            text: 'Toma de ADN con cadena de custodia AABB ($425 todo incluido) válida en la corte de Harrison.',
            href: 'dna',
            icon: 'scale',
          },
          {
            title: 'Tomas de Sangre en Clínica y Domicilio',
            text: 'Flebotomía médica suave para órdenes de su médico enviadas a su laboratorio indicado.',
            href: 'blood',
            icon: 'home',
          },
          {
            title: 'Servicio Móvil 24/7',
            text: 'Unidad móvil enviada directamente a domicilios, empresas y obras en Marshall.',
            href: 'mobile',
            icon: 'truck',
          },
        ],
      },
      {
        type: 'map',
        title: 'Mapa y Dirección de Nuestra Clínica en Marshall',
        intro: `Ubicada en ${fullAddress()} en W. Pinecrest Dr. en Marshall, TX. Estacionamiento directo frente a la entrada.`,
        bg: 'white',
      },
      {
        type: 'split',
        bg: 'white',
        eyebrow: 'Clínica Local en Marshall',
        title: 'Acceso Fácil sobre Pinecrest Drive y Estacionamiento al Frente',
        text: 'Ahorre tiempo y evite el tráfico de centros hospitalarios lejanos. Nuestra clínica en Marshall le brinda fácil acceso en West Pinecrest Drive con estacionamiento gratuito justo frente a nuestra puerta.',
        items: [
          'Sin filas de espera ni trámites demorados en ventanilla',
          'Instalaciones privadas y con temperatura controlada',
          'Atención sin cita de lunes a viernes de 8:00 AM a 5:00 PM CT',
        ],
        image: 'storefront',
        imageAlt: 'Fachada y entrada de la clínica L&T Solutions en West Pinecrest Drive en Marshall, TX',
      },
      {
        type: 'split',
        reverse: true,
        bg: 'lavender',
        eyebrow: 'Equipo de Salud Local',
        title: 'Personal Clínico Certificado, Amable y Multiétnico',
        text: 'Nuestro personal forma parte de la comunidad del Este de Texas. Brindamos atención confidencial y humana, con especialistas bilingües listos para atenderle 100% en español.',
        items: [
          'Atención completa y personalizada en español e inglés',
          'Flebotomistas certificados y recolectores calificados DOT',
          'Cumplimiento estricto de privacidad HIPAA y leyes de Texas',
        ],
        image: 'diverseTeam',
        imageAlt: 'Personal médico y de recepción de L&T Solutions en la clínica de Marshall, TX',
      },
      {
        type: 'faq',
        bg: 'lavender',
        title: 'Preguntas Frecuentes de la Clínica en Marshall',
        items: [
          {
            q: '¿Cuál es el horario de la clínica en Marshall?',
            a: 'Nuestra clínica en Marshall atiende de lunes a viernes de 8:00 AM a 5:00 PM sin cita. El servicio móvil opera 24/7.',
          },
          {
            q: '¿Necesito cita para un examen de drogas en Marshall?',
            a: '¡No requiere cita! Puede llegar directamente en horario regular. Recomendamos agendar cita para pruebas de ADN legal.',
          },
        ],
      },
      {
        type: 'cta',
        title: '¿Listo para Visitar Nuestra Clínica en Marshall?',
        text: `Visítenos en ${fullAddress()} o llame al ${SITE.phone.display} para asistencia inmediata.`,
        primary: { label: 'Agendar Cita', href: 'contact' },
        secondary: { label: `Llamar al ${SITE.phone.display}`, href: 'tel' },
      },
    ],
  },
};

export default page;
