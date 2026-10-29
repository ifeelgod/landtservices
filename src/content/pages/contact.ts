import type { PageModule } from '../types';
import { SITE, fullAddress } from '../../config/site';

const page: PageModule = {
  en: {
    title: 'Book a Test or Appointment in Marshall, TX | L&T Solutions',
    description: `Request an appointment for drug testing, DNA, blood draws or mobile collection in Marshall, TX. Walk-ins welcome. Call ${SITE.phone.display} for 24/7 dispatch.`,
    schemaType: 'ContactPage',
    blocks: [
      {
        type: 'hero',
        eyebrow: 'Contact',
        title: 'Book a Test or Request an Appointment',
        subtitle: `Fill out the short form below and we will confirm your time, or call ${SITE.phone.display} to speak with us now. 24/7 mobile dispatch available.`,
        image: 'office',
        imageAlt: 'L&T Solutions welcoming clinic reception in Marshall, TX',
        primary: { label: 'Request Appointment', href: '#book' },
        secondary: { label: `Call ${SITE.phone.display}`, href: 'tel' },
      },
      {
        type: 'form',
        variant: 'appointment',
        id: 'book',
        aside: true,
        title: 'Request an appointment',
        intro: 'Tell us what you need and when. We will call or text to confirm. Please do not include medical records or results in this form.',
        bg: 'white',
      },
      {
        type: 'answer',
        question: 'Do I need an appointment for a drug test or blood draw in Marshall?',
        answer: `No. Walk-ins are welcome at our ${SITE.address.city} clinic during business hours for most drug tests and blood draws. We recommend booking ahead for DNA paternity tests, since all parties must be present, and for mobile collection so we can schedule a collector to come to you.`,
        bg: 'lavender',
      },
      {
        type: 'map',
        title: 'Find Our Marshall Clinic Location',
        intro: `Our clinic is located at ${fullAddress()} with dedicated front-row parking for clients and patients.`,
        bg: 'white',
      },
      {
        type: 'split',
        reverse: true,
        bg: 'lavender',
        eyebrow: 'Our Healthcare Staff',
        title: 'Warm, Professional & Multi-Ethnic Clinical Care',
        text: 'When you call or visit L&T Solutions, you are greeted by certified, bilingual professionals committed to prompt service, absolute privacy, and respectful clinical care.',
        items: [
          'Bilingual client assistance in English and Spanish',
          'Fast intake processing with minimal paperwork delays',
          'Private, comfortable consultation rooms for families and individuals',
        ],
        image: 'diverseTeam',
        imageAlt: 'Multi-ethnic clinical healthcare team and intake staff at L&T Solutions reception desk in Marshall, TX',
      },
      {
        type: 'area',
        title: 'Visit our clinic or we come to you',
        intro: `Our clinic is at ${fullAddress()}. Mobile collectors serve ${SITE.county}, Longview, Tyler, Shreveport and the surrounding East Texas area. Email us anytime at ${SITE.email}.`,
      },
      {
        type: 'cta',
        title: 'Need a collector right now?',
        text: `For post-accident, reasonable-suspicion or urgent mobile collections, call ${SITE.phone.display}. We answer 24/7.`,
        primary: { label: `Call ${SITE.phone.display}`, href: 'tel' },
        secondary: { label: 'Mobile Collection', href: 'mobile' },
      },
    ],
  },
  es: {
    title: 'Agende una prueba o cita en Marshall, TX | L&T Solutions',
    description: `Solicite una cita para pruebas de drogas, ADN, extracciones de sangre o servicio móvil en Marshall, TX. Sin cita también. Llame al ${SITE.phone.display}, 24/7.`,
    schemaType: 'ContactPage',
    blocks: [
      {
        type: 'hero',
        eyebrow: 'Contacto',
        title: 'Agende una prueba o solicite una cita',
        subtitle: `Llene el breve formulario y le confirmaremos su horario, o llame al ${SITE.phone.display} para hablar con nosotros ahora. Servicio móvil disponible 24/7.`,
        image: 'office',
        imageAlt: 'Recepción acogedora de la clínica L&T Solutions en Marshall, TX',
        primary: { label: 'Solicitar cita', href: '#book' },
        secondary: { label: `Llame al ${SITE.phone.display}`, href: 'tel' },
      },
      {
        type: 'form',
        variant: 'appointment',
        id: 'book',
        aside: true,
        title: 'Solicite una cita',
        intro: 'Díganos qué necesita y cuándo. Le llamaremos o enviaremos un mensaje para confirmar. Por favor no incluya expedientes médicos ni resultados en este formulario.',
        bg: 'white',
      },
      {
        type: 'answer',
        question: '¿Necesito cita para una prueba de drogas o extracción de sangre en Marshall?',
        answer: `No. Puede llegar sin cita a nuestra clínica en ${SITE.address.city} en horario de atención para la mayoría de pruebas de drogas y extracciones. Recomendamos agendar con anticipación las pruebas de paternidad por ADN, ya que todos deben estar presentes, y el servicio móvil para enviarle un recolector.`,
        bg: 'lavender',
      },
      {
        type: 'map',
        title: 'Ubicación de Nuestra Clínica en Marshall',
        intro: `Nuestra clínica está ubicada en ${fullAddress()} con estacionamiento exclusivo al frente para pacientes y clientes.`,
        bg: 'white',
      },
      {
        type: 'split',
        reverse: true,
        bg: 'lavender',
        eyebrow: 'Personal de Atención',
        title: 'Atención Médica Cálida, Profesional y Multiétnica',
        text: 'Al llamar o visitar L&T Solutions, le recibirá un equipo bilingüe y certificado enfocado en una atención rápida, absoluta privacidad y un trato digno.',
        items: [
          'Atención bilingüe y personalizada en español e inglés',
          'Recepción rápida sin trámites complicados ni largas esperas',
          'Salas privadas de consulta cómodas para familias e individuos',
        ],
        image: 'diverseTeam',
        imageAlt: 'Equipo de profesionales de salud amables en la recepción de L&T Solutions en Marshall, TX',
      },
      {
        type: 'area',
        title: 'Visite nuestra clínica o vamos a usted',
        intro: `Nuestra clínica está en ${fullAddress()}. Los recolectores móviles atienden el condado de Harrison, Longview, Tyler, Shreveport y el resto del Este de Texas. Escríbanos cuando guste a ${SITE.email}.`,
      },
      {
        type: 'cta',
        title: '¿Necesita un recolector ahora mismo?',
        text: `Para pruebas post-accidente, por sospecha razonable o tomas móviles urgentes, llame al ${SITE.phone.display}. Contestamos 24/7.`,
        primary: { label: `Llame al ${SITE.phone.display}`, href: 'tel' },
        secondary: { label: 'Servicio móvil', href: 'mobile' },
      },
    ],
  },
};

export default page;
