import type { PageModule } from '../types';
import { SITE } from '../../config/site';

const page: PageModule = {
  en: {
    title: 'About Us | Local Collection in Marshall, TX | L&T Solutions',
    description:
      'Meet L&T Solutions: a local, bilingual specimen collection provider in Marshall, TX offering drug testing, DNA, blood draws and 24/7 mobile service in East Texas.',
    schemaType: 'AboutPage',
    blocks: [
      {
        type: 'hero',
        eyebrow: `About ${SITE.name}`,
        title: 'Local, certified & bilingual specimen collection for East Texas',
        subtitle: `We are a ${SITE.address.city}-based collection provider serving ${SITE.county} and the surrounding area with drug & alcohol testing, DNA paternity, blood draws and 24/7 mobile service.`,
        image: 'officeDesk',
        imageAlt: 'L&T Solutions reception desk and client consultation area in Marshall, TX',
        primary: { label: 'Request an Appointment', href: 'contact' },
        secondary: { label: `Call ${SITE.phone.display}`, href: 'tel' },
        badges: true,
      },
      {
        type: 'split',
        eyebrow: 'Our story',
        title: 'Why we started L&T Solutions',
        text: `Too many people in East Texas were driving long distances and sitting in crowded waiting rooms just to give a sample. Employers were losing hours of productivity for a single drug test. We started ${SITE.name} to bring modern, convenient collection close to home.`,
        items: [
          'Shorter waits with walk-in and scheduled visits',
          'Mobile service that comes to your home, job site or office',
          'Clear, upfront communication from booking to results',
          'Friendly, bilingual staff who treat every client with respect',
        ],
        image: 'blood',
        imageAlt: 'Phlebotomist preparing a gentle blood draw for a client',
        bg: 'white',
      },
      {
        type: 'split',
        reverse: true,
        bg: 'lavender',
        eyebrow: 'Our Healthcare Team',
        title: 'Dedicated, Multi-Ethnic East Texas Professionals',
        text: 'From our intake coordinators to our traveling phlebotomists and DOT collectors, our staff is rooted in East Texas and committed to treating every client with compassion, cultural respect, and technical excellence.',
        items: [
          'Certified phlebotomy and DOT-qualified personnel',
          'Multi-ethnic staff reflecting our diverse regional communities',
          'Warm, bilingual communication in English and Spanish',
        ],
        image: 'diverseTeam',
        imageAlt: 'Diverse healthcare team and friendly medical staff at L&T Solutions in Marshall, TX',
      },
      {
        type: 'cards',
        eyebrow: 'Trust',
        title: 'Credentials & standards',
        intro:
          'We are a specimen collection provider. Testing is performed by accredited partner laboratories that hold the certifications required for each type of test.',
        columns: 3,
        bg: 'lavender',
        cards: [
          { icon: 'drop', title: 'Certified phlebotomists', text: 'Blood draws are performed by trained, certified phlebotomists using sterile, single-use supplies.' },
          { icon: 'briefcase', title: 'DOT-qualified collectors', text: 'Our collectors are trained and qualified under DOT 49 CFR Part 40 for regulated employer testing.', href: 'dot' },
          { icon: 'dna', title: 'AABB chain-of-custody', text: 'Legal DNA samples are collected under strict chain-of-custody and processed by an AABB-accredited partner laboratory.', href: 'dna' },
          { icon: 'flask', title: 'SAMHSA labs & MRO review', text: 'Lab-based drug tests go to a SAMHSA-certified partner laboratory, with MRO-verified results where required.', href: 'drug' },
          { icon: 'shield', title: 'HIPAA-minded privacy', text: 'We collect only what is needed and handle your personal information discreetly and securely.', href: 'privacy' },
          { icon: 'globe', title: '¡Hablamos Español!', text: 'Bilingual client care in English and Spanish, from your first call to your collection visit.' },
        ],
      },
      {
        type: 'cards',
        eyebrow: 'Our team',
        title: 'The people behind your visit',
        columns: 3,
        cards: [
          { icon: 'drop', title: 'Certified Phlebotomists', text: 'Skilled, calm and gentle with nervous patients, children and seniors, in our clinic or in your home.' },
          { icon: 'clipboard', title: 'DOT-Qualified Collectors', text: 'Detail-oriented collectors who follow federal procedures and chain-of-custody on every specimen.' },
          { icon: 'phone', title: 'Bilingual Client Care', text: 'Friendly coordinators who answer questions, schedule visits and dispatch mobile collectors.' },
        ],
      },
      {
        type: 'answer',
        question: 'Why choose a local collection provider instead of a large lab chain?',
        answer:
          'A local provider means shorter waits, flexible hours and people who know East Texas. We offer walk-ins, 24/7 mobile collection and bilingual service, while your samples still go to accredited partner laboratories. You get the same lab standards with faster, more personal care and a direct number to call.',
        bg: 'white',
      },
      {
        type: 'cta',
        title: 'Ready when you are',
        text: `Walk in, book an appointment, or call ${SITE.phone.display} to have a collector come to you.`,
        primary: { label: 'Request an Appointment', href: 'contact' },
        secondary: { label: 'Call Now', href: 'tel' },
      },
    ],
  },
  es: {
    title: 'Quiénes Somos | Marshall, TX | L&T Solutions',
    description:
      'Conozca a L&T Solutions: toma de muestras local y bilingüe en Marshall, TX. Pruebas de drogas, ADN, extracciones de sangre y servicio móvil 24/7 en el Este de Texas.',
    schemaType: 'AboutPage',
    blocks: [
      {
        type: 'hero',
        eyebrow: `Sobre ${SITE.name}`,
        title: 'Toma de muestras local, certificada y bilingüe para el Este de Texas',
        subtitle: `Somos un proveedor de toma de muestras con sede en ${SITE.address.city} que atiende al condado de Harrison y sus alrededores con pruebas de drogas y alcohol, paternidad por ADN, extracciones de sangre y servicio móvil 24/7.`,
        image: 'officeDesk',
        imageAlt: 'Área de recepción y consulta con clientes en L&T Solutions en Marshall, TX',
        primary: { label: 'Solicitar una cita', href: 'contact' },
        secondary: { label: `Llame al ${SITE.phone.display}`, href: 'tel' },
        badges: true,
      },
      {
        type: 'split',
        eyebrow: 'Nuestra historia',
        title: 'Por qué fundamos L&T Solutions',
        text: `Muchas personas en el Este de Texas manejaban largas distancias y esperaban horas en salas llenas solo para dar una muestra. Los empleadores perdían horas de trabajo por una sola prueba de drogas. Fundamos ${SITE.name} para ofrecer un servicio moderno y práctico cerca de casa.`,
        items: [
          'Menos espera, con visitas sin cita o programadas',
          'Servicio móvil que va a su casa, obra o negocio',
          'Comunicación clara desde la cita hasta los resultados',
          'Personal amable y bilingüe que trata a cada cliente con respeto',
        ],
        image: 'blood',
        imageAlt: 'Flebotomista preparando una extracción de sangre con cuidado',
        bg: 'white',
      },
      {
        type: 'split',
        reverse: true,
        bg: 'lavender',
        eyebrow: 'Nuestro Equipo',
        title: 'Profesionales Dedicados y Multiétnicos del Este de Texas',
        text: 'Desde nuestra recepción hasta nuestros flebotomistas y recolectores móviles, nuestro personal está comprometido con brindarle una atención humana, respetuosa y técnicamente impecable.',
        items: [
          'Personal certificado en flebotomía y normas federales DOT',
          'Equipo multiétnico que refleja la diversidad de nuestra comunidad',
          'Atención cálida y 100% bilingüe en inglés y español',
        ],
        image: 'diverseTeam',
        imageAlt: 'Personal médico multiétnico y amable de L&T Solutions en Marshall, TX',
      },
      {
        type: 'cards',
        eyebrow: 'Confianza',
        title: 'Credenciales y estándares',
        intro:
          'Somos un proveedor de toma de muestras. Los análisis los realizan laboratorios asociados acreditados que cuentan con las certificaciones requeridas para cada tipo de prueba.',
        columns: 3,
        bg: 'lavender',
        cards: [
          { icon: 'drop', title: 'Flebotomistas certificados', text: 'Las extracciones las realizan flebotomistas capacitados y certificados, con material estéril y desechable.' },
          { icon: 'briefcase', title: 'Recolectores calificados DOT', text: 'Nuestros recolectores están capacitados y calificados bajo la norma DOT 49 CFR Parte 40 para pruebas reguladas.', href: 'dot' },
          { icon: 'dna', title: 'Cadena de custodia AABB', text: 'Las muestras de ADN legal se toman con estricta cadena de custodia y las procesa un laboratorio asociado acreditado por la AABB.', href: 'dna' },
          { icon: 'flask', title: 'Laboratorios SAMHSA y revisión MRO', text: 'Las pruebas de drogas se envían a un laboratorio asociado certificado por SAMHSA, con resultados verificados por un MRO cuando se requiere.', href: 'drug' },
          { icon: 'shield', title: 'Privacidad conforme a HIPAA', text: 'Solo pedimos la información necesaria y la manejamos con discreción y seguridad.', href: 'privacy' },
          { icon: 'globe', title: '¡Hablamos Español!', text: 'Atención bilingüe en inglés y español, desde su primera llamada hasta su visita.' },
        ],
      },
      {
        type: 'cards',
        eyebrow: 'Nuestro equipo',
        title: 'Las personas detrás de su visita',
        columns: 3,
        cards: [
          { icon: 'drop', title: 'Flebotomistas certificados', text: 'Hábiles, tranquilos y delicados con pacientes nerviosos, niños y adultos mayores, en la clínica o en su casa.' },
          { icon: 'clipboard', title: 'Recolectores calificados DOT', text: 'Recolectores meticulosos que siguen los procedimientos federales y la cadena de custodia en cada muestra.' },
          { icon: 'phone', title: 'Atención bilingüe al cliente', text: 'Coordinadores amables que responden sus dudas, agendan citas y envían recolectores móviles.' },
        ],
      },
      {
        type: 'answer',
        question: '¿Por qué elegir un proveedor local en lugar de una gran cadena de laboratorios?',
        answer:
          'Un proveedor local significa menos espera, horarios flexibles y gente que conoce el Este de Texas. Ofrecemos visitas sin cita, toma de muestras móvil 24/7 y servicio bilingüe, y sus muestras van a laboratorios asociados acreditados. Obtiene los mismos estándares con una atención más rápida, personal y directa.',
        bg: 'white',
      },
      {
        type: 'cta',
        title: 'Listos cuando usted lo esté',
        text: `Venga sin cita, programe una visita o llame al ${SITE.phone.display} para que un recolector vaya a usted.`,
        primary: { label: 'Solicitar una cita', href: 'contact' },
        secondary: { label: 'Llamar ahora', href: 'tel' },
      },
    ],
  },
};

export default page;
