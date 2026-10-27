import type { PageModule } from '../types';
import { SITE } from '../../config/site';

const page: PageModule = {
  en: {
    title: 'Service Area: Marshall, Longview & East Texas | L&T Solutions',
    description:
      'L&T Solutions provides drug testing, DNA, blood draws and 24/7 mobile collection in Marshall, Longview, Kilgore, Tyler, Carthage, Jefferson and Shreveport, LA.',
    schemaType: 'CollectionPage',
    blocks: [
      {
        type: 'hero',
        eyebrow: 'Service area',
        title: 'Serving Marshall, Longview & East Texas',
        subtitle: `Visit our clinic in ${SITE.address.city} or have a mobile collector come to you anywhere in ${SITE.county} and the surrounding region, including Shreveport, LA.`,
        image: 'mobile',
        imageAlt: 'Mobile collection vehicle driving to a client in East Texas',
        primary: { label: 'Request Mobile Collection', href: 'mobile' },
        secondary: { label: `Call ${SITE.phone.display}`, href: 'tel' },
      },
      {
        type: 'answer',
        question: 'What areas does L&T Solutions cover?',
        answer: `We serve ${SITE.address.city} and all of ${SITE.county}, plus Longview, Hallsville, Kilgore, Carthage, Jefferson, Tyler and Shreveport, Louisiana. Walk-ins are welcome at our ${SITE.address.city} clinic, and our 24/7 mobile collectors travel to homes, job sites and offices. Any trip fee outside our core area is quoted upfront by phone.`,
        bg: 'white',
      },
      {
        type: 'area',
        title: 'Cities we serve',
        intro: 'Mobile collection is available throughout the region. Trip fees outside our core area are always quoted upfront by phone, before we dispatch.',
        bg: 'lavender',
        cities: [
          { name: 'Marshall, TX', text: `Home of our clinic, where walk-ins are welcome during business hours. We also offer mobile draws and on-site testing anywhere in town.` },
          { name: 'Longview, TX', text: 'Mobile blood draws, drug tests and DNA collections at your home or business, so you skip the drive and the waiting room.' },
          { name: 'Hallsville, TX', text: 'A short drive from our Marshall clinic. Mobile service is available for families, schools and local employers.' },
          { name: 'Kilgore, TX', text: 'On-site drug and alcohol testing for employers, plus in-home blood draws for patients who prefer to stay home.' },
          { name: 'Carthage, TX', text: 'Serving Panola County employers, including oilfield and energy crews, with post-accident and random testing at the job site.' },
          { name: 'Jefferson, TX', text: 'Mobile collection for Marion County residents and businesses, including in-home draws for seniors and homebound patients.' },
          { name: 'Tyler, TX', text: 'Scheduled mobile collections for employers and individuals. Call ahead and we will confirm timing and any trip fee.' },
          { name: 'Shreveport, LA', text: 'Just across the state line on I-20. We support trucking fleets and employers with DOT and non-DOT collections.' },
        ],
      },
      {
        type: 'faq',
        title: 'Service area FAQ',
        items: [
          { q: 'Do you charge a trip fee for mobile collection?', a: 'Mobile visits within our core area are straightforward to schedule. For locations farther out, any trip fee is quoted upfront by phone before we dispatch, so there are no surprises.' },
          { q: 'Can you come to our job site or truck yard?', a: 'Yes. Our DOT-qualified collectors can test drivers and crews on site, including post-accident and reasonable-suspicion testing, 24/7.' },
          { q: 'Do you serve clients in Louisiana?', a: 'Yes. We serve Shreveport and nearby areas along I-20. Call us to confirm availability and scheduling for your location.' },
          { q: 'Is my city not on the list?', a: `We often travel beyond the cities listed. Call ${SITE.phone.display} and we will let you know if we can reach you and what it will cost.` },
        ],
      },
      {
        type: 'cta',
        title: 'Need a collector near you?',
        text: `Call ${SITE.phone.display} for 24/7 mobile dispatch, or request an appointment online.`,
        primary: { label: 'Call for Dispatch', href: 'tel' },
        secondary: { label: 'Request an Appointment', href: 'contact' },
      },
    ],
  },
  es: {
    title: 'Área de servicio: Marshall y Este de Texas | L&T Solutions',
    description:
      'L&T Solutions ofrece pruebas de drogas, ADN, extracciones de sangre y servicio móvil 24/7 en Marshall, Longview, Kilgore, Tyler, Carthage, Jefferson y Shreveport.',
    schemaType: 'CollectionPage',
    blocks: [
      {
        type: 'hero',
        eyebrow: 'Área de servicio',
        title: 'Atendemos Marshall, Longview y el Este de Texas',
        subtitle: `Visite nuestra clínica en ${SITE.address.city} o pida que un recolector móvil vaya a usted en cualquier parte del condado de Harrison y la región, incluido Shreveport, Luisiana.`,
        image: 'mobile',
        imageAlt: 'Vehículo de toma de muestras móvil en camino a un cliente en el Este de Texas',
        primary: { label: 'Solicitar servicio móvil', href: 'mobile' },
        secondary: { label: `Llame al ${SITE.phone.display}`, href: 'tel' },
      },
      {
        type: 'answer',
        question: '¿Qué áreas cubre L&T Solutions?',
        answer: `Atendemos ${SITE.address.city} y todo el condado de Harrison, además de Longview, Hallsville, Kilgore, Carthage, Jefferson, Tyler y Shreveport, Luisiana. Puede venir sin cita a nuestra clínica en ${SITE.address.city}, y nuestros recolectores móviles 24/7 van a casas, obras y oficinas. Cualquier cargo por traslado fuera del área principal se cotiza por teléfono antes.`,
        bg: 'white',
      },
      {
        type: 'area',
        title: 'Ciudades que atendemos',
        intro: 'El servicio móvil está disponible en toda la región. Los cargos por traslado fuera de nuestra área principal siempre se cotizan por teléfono antes de enviar al recolector.',
        bg: 'lavender',
        cities: [
          { name: 'Marshall, TX', text: 'Aquí está nuestra clínica, donde puede llegar sin cita en horario de atención. También ofrecemos extracciones móviles y pruebas en sitio en toda la ciudad.' },
          { name: 'Longview, TX', text: 'Extracciones de sangre, pruebas de drogas y muestras de ADN en su casa o negocio, sin manejar ni esperar.' },
          { name: 'Hallsville, TX', text: 'A poca distancia de nuestra clínica en Marshall. Servicio móvil para familias, escuelas y empleadores locales.' },
          { name: 'Kilgore, TX', text: 'Pruebas de drogas y alcohol en sitio para empleadores, y extracciones a domicilio para quienes prefieren quedarse en casa.' },
          { name: 'Carthage, TX', text: 'Atendemos a empleadores del condado de Panola, incluidas cuadrillas petroleras y de energía, con pruebas aleatorias y post-accidente en el sitio de trabajo.' },
          { name: 'Jefferson, TX', text: 'Servicio móvil para residentes y negocios del condado de Marion, incluidas extracciones a domicilio para adultos mayores.' },
          { name: 'Tyler, TX', text: 'Tomas de muestras móviles programadas para empleadores y particulares. Llame antes y le confirmamos horario y cualquier cargo por traslado.' },
          { name: 'Shreveport, LA', text: 'Justo al otro lado de la frontera estatal por la I-20. Apoyamos a flotillas de transporte y empleadores con pruebas DOT y no DOT.' },
        ],
      },
      {
        type: 'faq',
        title: 'Preguntas frecuentes sobre el área de servicio',
        items: [
          { q: '¿Cobran un cargo por traslado para el servicio móvil?', a: 'Las visitas dentro de nuestra área principal son fáciles de programar. Para lugares más lejanos, cualquier cargo por traslado se cotiza por teléfono antes de salir, sin sorpresas.' },
          { q: '¿Pueden venir a nuestra obra o patio de camiones?', a: 'Sí. Nuestros recolectores calificados DOT pueden hacer pruebas a choferes y cuadrillas en sitio, incluidas pruebas post-accidente y por sospecha razonable, las 24 horas.' },
          { q: '¿Atienden clientes en Luisiana?', a: 'Sí. Atendemos Shreveport y zonas cercanas sobre la I-20. Llámenos para confirmar disponibilidad y horario en su ubicación.' },
          { q: '¿Mi ciudad no está en la lista?', a: `Con frecuencia viajamos más allá de estas ciudades. Llame al ${SITE.phone.display} y le diremos si podemos llegar y cuánto costaría.` },
        ],
      },
      {
        type: 'cta',
        title: '¿Necesita un recolector cerca de usted?',
        text: `Llame al ${SITE.phone.display} para servicio móvil 24/7 o solicite una cita en línea.`,
        primary: { label: 'Llamar para servicio', href: 'tel' },
        secondary: { label: 'Solicitar una cita', href: 'contact' },
      },
    ],
  },
};

export default page;
