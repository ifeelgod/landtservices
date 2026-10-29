import type { PageModule } from '../types';
import { SITE } from '../../config/site';

/**
 * TODO: VERIFY with client — notary commission details, fees, ID requirements,
 * hours, and whether mobile notary is offered. Copy below stays general on purpose.
 */
const page: PageModule = {
  en: {
    title: 'Notary Public in Marshall, TX | L&T Solutions',
    description: 'Notary public services at L&T Solutions in Marshall, TX. Call 877-329-5339 to confirm availability and what to bring for your signing.',
    schemaType: 'WebPage',
    service: {
      name: 'Notary Public',
      serviceType: 'Notary Public',
      description: 'Notary public services at the L&T Solutions office in Marshall, Texas.',
    },
    blocks: [
      {
        type: 'hero',
        eyebrow: 'Notary Services',
        title: 'Notary Public in Marshall, TX',
        subtitle: 'Get your documents notarized at our Marshall office, alongside our testing and collection services.',
        image: 'notarySigning',
        imageAlt: 'Official notary public document signing with legal notary seal and valid government ID verification in Marshall, TX',
        primary: { label: 'Contact Us', href: 'contact' },
        secondary: { label: `Call ${SITE.phone.display}`, href: 'tel' },
        points: ['Marshall office', 'Call to confirm availability', 'Bring valid photo ID'],
      },
      {
        type: 'answer',
        bg: 'lavender',
        question: 'Where can I get a document notarized in Marshall, TX?',
        answer: `L&T Solutions offers notary services at ${SITE.address.street}, ${SITE.address.city}, ${SITE.address.region} ${SITE.address.zip}. Call ${SITE.phone.display} to confirm availability, then bring the unsigned document and a valid government-issued photo ID. The signer must appear in person.`,
      },
      {
        type: 'steps',
        title: 'How notarization works',
        steps: [
          { title: 'Call ahead', text: `Call ${SITE.phone.display} to confirm availability and ask about your document.` },
          { title: 'Bring your document unsigned', text: 'Do not sign until you are in front of the notary.' },
          { title: 'Show valid photo ID', text: 'A current government-issued photo ID is required for every signer.' },
          { title: 'Sign and notarize', text: 'The notary verifies your identity, watches you sign, and completes the notarial certificate.' },
        ],
      },
      {
        type: 'faq',
        bg: 'lavender',
        title: 'Notary FAQs',
        items: [
          { q: 'What do I need to bring?', a: 'Bring the document you want notarized, unsigned, and a valid government-issued photo ID for each signer. Call us first if you are unsure whether your document needs additional witnesses.' },
          { q: 'How much does a notarization cost?', a: `Please call ${SITE.phone.display} for current pricing. Texas sets maximum fees for notarial acts, and we will confirm the cost before we begin.` },
          { q: 'Can the notary give legal advice?', a: 'No. A notary can verify identity and witness signatures but cannot give legal advice or choose the type of notarization for you.' },
          { q: 'Do you notarize at my location?', a: `Please call ${SITE.phone.display} to ask about availability outside our office.` },
        ],
      },
      {
        type: 'cta',
        title: 'Need a Notary in Marshall?',
        text: `Call ${SITE.phone.display} or send us a message to confirm availability.`,
        primary: { label: 'Contact Us', href: 'contact' },
        secondary: { label: `Call ${SITE.phone.display}`, href: 'tel' },
      },
    ],
  },
  es: {
    title: 'Notario Público en Marshall, TX | L&T Solutions',
    description: 'Servicios de notario público en L&T Solutions, Marshall, TX. Llame al 877-329-5339 para confirmar disponibilidad y qué debe llevar a su firma.',
    schemaType: 'WebPage',
    service: {
      name: 'Notario Público',
      serviceType: 'Notary Public',
      description: 'Servicios de notario público en la oficina de L&T Solutions en Marshall, Texas.',
    },
    blocks: [
      {
        type: 'hero',
        eyebrow: 'Servicios de Notario',
        title: 'Notario Público en Marshall, TX',
        subtitle: 'Notarice sus documentos en nuestra oficina de Marshall, junto con nuestros servicios de pruebas y recolección.',
        image: 'notarySigning',
        imageAlt: 'Firma oficial ante notario público con sello notarial y verificación de identificación con foto en Marshall, TX',
        primary: { label: 'Contáctenos', href: 'contact' },
        secondary: { label: `Llamar al ${SITE.phone.display}`, href: 'tel' },
        points: ['Oficina en Marshall', 'Llame para confirmar disponibilidad', 'Traiga identificación con foto vigente'],
      },
      {
        type: 'answer',
        bg: 'lavender',
        question: '¿Dónde puedo notarizar un documento en Marshall, TX?',
        answer: `L&T Solutions ofrece servicios de notario en ${SITE.address.street}, ${SITE.address.city}, ${SITE.address.region} ${SITE.address.zip}. Llame al ${SITE.phone.display} para confirmar disponibilidad y traiga el documento sin firmar y una identificación oficial con foto vigente. El firmante debe presentarse en persona.`,
      },
      {
        type: 'steps',
        title: 'Cómo funciona la notarización',
        steps: [
          { title: 'Llame antes', text: `Llame al ${SITE.phone.display} para confirmar disponibilidad y preguntar sobre su documento.` },
          { title: 'Traiga su documento sin firmar', text: 'No firme hasta estar frente al notario.' },
          { title: 'Presente identificación con foto', text: 'Se requiere una identificación oficial con foto vigente de cada firmante.' },
          { title: 'Firme y notarice', text: 'El notario verifica su identidad, presencia su firma y completa el certificado notarial.' },
        ],
      },
      {
        type: 'faq',
        bg: 'lavender',
        title: 'Preguntas Frecuentes sobre Notario',
        items: [
          { q: '¿Qué debo traer?', a: 'Traiga el documento sin firmar y una identificación oficial con foto vigente de cada firmante. Llámenos primero si no está seguro de si su documento requiere testigos adicionales.' },
          { q: '¿Cuánto cuesta una notarización?', a: `Llame al ${SITE.phone.display} para conocer el precio actual. Texas establece tarifas máximas para actos notariales y le confirmaremos el costo antes de comenzar.` },
          { q: '¿Puede el notario dar asesoría legal?', a: 'No. Un notario verifica identidad y presencia firmas, pero no puede dar asesoría legal ni elegir el tipo de notarización por usted.' },
          { q: '¿Notarizan en mi ubicación?', a: `Llame al ${SITE.phone.display} para preguntar sobre disponibilidad fuera de nuestra oficina.` },
        ],
      },
      {
        type: 'cta',
        title: '¿Necesita un Notario en Marshall?',
        text: `Llame al ${SITE.phone.display} o envíenos un mensaje para confirmar disponibilidad.`,
        primary: { label: 'Contáctenos', href: 'contact' },
        secondary: { label: `Llamar al ${SITE.phone.display}`, href: 'tel' },
      },
    ],
  },
};

export default page;
