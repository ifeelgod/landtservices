import type { PageModule } from '../types';
import { SITE, fullAddress } from '../../config/site';

const page: PageModule = {
  en: {
    title: 'Notary Public & Mobile Document Signing in Marshall, TX | L&T Solutions',
    description:
      'Official Texas notary public services at our Marshall clinic and 24/7 mobile notary dispatch throughout Harrison County, Longview, and East Texas. Call 877-329-5339.',
    schemaType: 'WebPage',
    service: {
      name: 'Notary Public & Mobile Document Signing',
      serviceType: 'Notary Public and Document Verification',
      description:
        'Official Texas notary public services at the L&T Solutions office in Marshall, Texas and 24/7 mobile document signing across East Texas.',
      offers: [
        { name: 'In-Clinic Notary Signing (Per Seal)', price: SITE.prices.notaryInClinic },
        { name: 'Mobile Notary Dispatch (Base Trip)', price: SITE.prices.notaryMobileBase },
      ],
    },
    blocks: [
      {
        type: 'hero',
        eyebrow: 'In-Clinic & 24/7 Mobile Notary',
        title: 'Notary Public & Mobile Document Signing in Marshall, TX',
        subtitle:
          'Get your official documents notarized at our Marshall clinic or request on-demand 24/7 mobile dispatch to your home, office, care facility, or job site across East Texas.',
        image: 'notarySigning',
        imageAlt: 'Official notary public document signing with legal notary seal and valid government ID verification in Marshall, TX',
        primary: { label: 'Request Notary Service', href: 'contact' },
        secondary: { label: `Call ${SITE.phone.display}`, href: 'tel' },
        points: [
          'Marshall walk-in clinic at 203 A W. Pinecrest Dr.',
          '24/7 mobile dispatch across Harrison, Gregg & Panola counties',
          'Bilingual English & Spanish commissioned Texas notaries',
        ],
      },
      {
        type: 'answer',
        bg: 'lavender',
        question: 'Where can I get a document notarized in Marshall, TX?',
        answer: `L&T Solutions provides official notary public services at our Marshall clinic (${fullAddress()}) and 24/7 mobile notary dispatch throughout Harrison County, Longview, Carthage, Kilgore, and Hallsville. Walk in Monday through Friday from 8:00 AM to 5:00 PM, or call ${SITE.phone.display} for mobile dispatch to your home, hospital, senior living facility, or workplace. The signer must appear in person with the unsigned document and a current government-issued photo ID.`,
      },
      {
        type: 'banner',
        tone: 'purple',
        text: 'Texas Government Code § 406.017 Notice: L&T Solutions is not an attorney licensed to practice law in Texas and may not give legal advice or accept fees for legal advice.',
      },
      {
        type: 'cards',
        columns: 3,
        eyebrow: 'Documents We Notarize',
        title: 'Common Document Signings We Handle',
        intro: 'From personal family matters to business contracts and vehicle transfers, we provide authorized notarial seals.',
        cards: [
          {
            title: 'Family & Custody Affidavits',
            text: 'Custody agreements, child travel authorizations, minor medical consent, and court-admissible paternity affidavits.',
            icon: 'scale',
          },
          {
            title: 'Powers of Attorney & Directives',
            text: 'Durable statutory power of attorney (POA), medical power of attorney, living wills, and advance healthcare directives.',
            icon: 'shield',
          },
          {
            title: 'Vehicle Titles & Bills of Sale',
            text: 'Texas DMV vehicle title transfers, automotive bills of sale, bonded title applications, and release of lien forms.',
            icon: 'truck',
          },
          {
            title: 'Real Estate & Financial Papers',
            text: 'Property deeds, quitclaim deeds, lease agreements, closing documents, promissory notes, and refinance packets.',
            icon: 'home',
          },
          {
            title: 'Employment & Identity Verification',
            text: 'Authorized representative Form I-9 physical document inspections, certified true copies, and background attestations.',
            icon: 'briefcase',
          },
          {
            title: 'Immigration Support Documents',
            text: 'USCIS Affidavits of Support (Form I-864), parental consent forms, and document verification (non-attorney clerical service).',
            icon: 'globe',
          },
        ],
      },
      {
        type: 'table',
        title: 'Official Texas Notary Fees & Mobile Rates',
        intro: 'Transparent statutory pricing established by Texas Government Code § 406.024 with upfront mobile trip fees.',
        head: ['Service Type', 'Standard Fee', 'Location / Availability', 'Details'],
        rows: [
          [
            'In-Clinic Notary (First Signature)',
            '$10',
            'Marshall Clinic (Walk-in)',
            'Texas statutory fee for first acknowledgment or jurat; $1 per additional signature',
          ],
          [
            'In-Clinic Additional Certificate',
            '$1',
            'Marshall Clinic (Walk-in)',
            'Statutory rate per additional certificate or seal on the same document',
          ],
          [
            'Mobile Notary Dispatch (Marshall)',
            'From $45',
            'Marshall City Limits (24/7)',
            'Base travel dispatch fee plus standard statutory notarial fees per signature',
          ],
          [
            'Mobile Notary Dispatch (Regional)',
            'Distance-Based Quote',
            'Longview, Carthage, Kilgore, Hallsville',
            'Travel fee confirmed upfront over the phone before dispatch; available 24/7',
          ],
          [
            'Form I-9 Employment Verification',
            '$75',
            'In-Clinic or Mobile',
            'Authorized representative document inspection and employment compliance verification',
          ],
        ],
        note: 'Texas state law regulates standard notarial fees. Travel and mobile dispatch fees are separate and quoted transparently before service.',
        bg: 'white',
      },
      {
        type: 'steps',
        howTo: true,
        bg: 'lavender',
        title: 'How Document Notarization Works at L&T Solutions',
        intro: 'Follow these 4 simple steps to ensure a fast, valid, and legally binding signing.',
        steps: [
          {
            title: 'Call Ahead or Walk In',
            text: `Call ${SITE.phone.display} to check in-clinic availability or request mobile dispatch to your location.`,
          },
          {
            title: 'Bring Documents Unsigned',
            text: 'Do not sign or date your document before meeting the notary. The signing must be witnessed in person.',
          },
          {
            title: 'Show Current Government Photo ID',
            text: 'Every signer must present a valid, unexpired government-issued photo ID (driver’s license, state ID, or passport).',
          },
          {
            title: 'Sign, Notarize & Record',
            text: 'The commissioned notary verifies your identity, witnesses your signature, affixes the official seal, and records the notarial act in the state journal.',
          },
        ],
      },
      {
        type: 'split',
        bg: 'white',
        eyebrow: 'In-Clinic & Mobile',
        title: 'Professional Notarizations & Document Certification',
        text: 'From custody affidavits and power of attorney to vehicle title transfers and immigration packets, our commissioned Texas Notary Public ensures your signings are verified under state law.',
        items: [
          'Thorough identity verification with government-issued photo ID',
          'Official notarial seal, certificate completion, and state journal recording',
          'Bilingual notary assistance in English and Spanish',
          '24/7 mobile dispatch to homes, care facilities, hospitals, and job sites',
        ],
        image: 'diverseNotary',
        imageAlt: 'African-American female notary and immigration document specialist signing legal certification papers with a couple in Marshall, Texas',
      },
      {
        type: 'split',
        reverse: true,
        bg: 'lavender',
        eyebrow: 'Marshall Office',
        title: 'Convenient & Private Consultation Setting',
        text: 'Walk in or call ahead to have your papers signed in our clean, private Marshall consultation office. Zero rush and zero crowded bank lobbies.',
        items: [
          'Central location on West Pinecrest Drive with free front-row parking',
          'Comfortable seating and dedicated desk space for multiple signers and witnesses',
          'Combined visits: get fingerprinted, drug screened, or lab kit drawn during the same stop',
        ],
        image: 'officeDesk',
        imageAlt: 'Clean professional office consultation desk with Texas flag at L&T Solutions in Marshall, TX',
      },
      {
        type: 'faq',
        bg: 'white',
        title: 'Frequently Asked Questions About Notary Services',
        items: [
          {
            q: 'What do I need to bring to get a document notarized?',
            a: 'Bring the document completely filled out but unsigned, along with a current, government-issued photo ID (driver’s license, state ID, passport, or military ID) for each signer. If your document requires credible witnesses, they must also present valid photo ID.',
          },
          {
            q: 'Do you offer mobile notary services at my home or hospital?',
            a: `Yes! Our mobile notary unit travels across Marshall, Longview, Carthage, Kilgore, Hallsville, and surrounding East Texas communities. We regularly visit private residences, nursing homes, assisted living facilities, and hospitals. Call ${SITE.phone.display} for 24/7 dispatch.`,
          },
          {
            q: 'How much does a notarization cost?',
            a: 'Texas sets maximum statutory fees for notarial acts: $10 for the first signature/seal and $1 for each additional certificate. For mobile visits, an upfront travel dispatch fee (from $45) is calculated and agreed upon before we head to your location.',
          },
          {
            q: 'Can the notary give legal advice or select legal documents for me?',
            a: 'No. Under Texas Government Code § 406.017, a notary public is not an attorney and cannot provide legal advice, draft legal documents, or recommend which notarial certificate to use. Signers should consult an attorney for legal questions.',
          },
          {
            q: 'Can you notarize documents in Spanish or for Spanish-speaking signers?',
            a: 'Yes. We have fully bilingual Spanish-speaking commissioned notaries on staff who can communicate directly with Spanish-speaking signers to verify willingness and understanding.',
          },
        ],
      },
      {
        type: 'cta',
        title: 'Need a Notary in Marshall or East Texas?',
        text: `Visit our Marshall clinic at ${fullAddress()} or call ${SITE.phone.display} to dispatch a mobile notary right now.`,
        primary: { label: 'Request Notary Service', href: 'contact' },
        secondary: { label: `Call ${SITE.phone.display}`, href: 'tel' },
      },
    ],
  },
  es: {
    title: 'Servicios Notariales y Notario Móvil en Marshall, TX | L&T Solutions',
    description:
      'Servicios notariales en clínica y notario móvil 24/7 en Marshall, Longview y el Este de Texas. Certificación de firmas, poderes, títulos de vehículos y documentos legales.',
    schemaType: 'WebPage',
    service: {
      name: 'Servicios Notariales y Certificación de Documentos',
      serviceType: 'Servicios Notariales y Certificación de Documentos',
      description:
        'Servicios notariales comisionados en Texas en la clínica de Marshall y servicio notarial móvil 24/7 a domicilio en el Este de Texas.',
      offers: [
        { name: 'Acto Notarial en Clínica (Por Firma)', price: SITE.prices.notaryInClinic },
        { name: 'Despacho Notarial Móvil (Tarifa Base)', price: SITE.prices.notaryMobileBase },
      ],
    },
    blocks: [
      {
        type: 'hero',
        eyebrow: 'En Clínica y Móvil 24/7',
        title: 'Servicios Notariales y Notario Móvil en Marshall, TX',
        subtitle:
          'Certifique sus documentos oficiales en nuestra clínica de Marshall o solicite nuestro servicio notarial móvil a domicilio las 24 horas en su hogar, oficina, hospital o empresa en el Este de Texas.',
        image: 'notarySigning',
        imageAlt: 'Firma oficial ante notario público comisionado con sello notarial y verificación de identificación en Marshall, TX',
        primary: { label: 'Solicitar Servicio Notarial', href: 'contact' },
        secondary: { label: `Llamar al ${SITE.phone.display}`, href: 'tel' },
        points: [
          'Clínica en Marshall en 203 A W. Pinecrest Dr.',
          'Servicio móvil 24/7 en los condados de Harrison, Gregg y Panola',
          'Atención 100% en español por notarios comisionados en Texas',
        ],
      },
      {
        type: 'answer',
        bg: 'lavender',
        question: '¿Dónde puedo certificar o notarizar un documento en Marshall, TX?',
        answer: `L&T Solutions ofrece servicios notariales en nuestra clínica de Marshall (${fullAddress()}) y servicio notarial móvil a domicilio las 24 horas en Marshall, Longview, Carthage, Kilgore y Hallsville. Visítenos de lunes a viernes de 8:00 AM a 5:00 PM o llame al ${SITE.phone.display} para enviar un notario móvil a su domicilio, hospital, asilo o lugar de trabajo. Cada firmante debe presentarse en persona con el documento sin firmar y una identificación oficial con fotografía vigente.`,
      },
      {
        type: 'banner',
        tone: 'purple',
        text: 'Aviso conforme al Código de Gobierno de Texas § 406.017: L&T Solutions no es un abogado con licencia para ejercer el derecho en Texas y no puede dar asesoría legal ni aceptar honorarios por asesoría legal.',
      },
      {
        type: 'cards',
        columns: 3,
        eyebrow: 'Trámites Frecuentes',
        title: 'Documentos Habituales que Certificamos',
        intro: 'Desde asuntos familiares y poderes notariales hasta títulos de autos y contratos de trabajo, certificamos sus firmas con plena validez.',
        cards: [
          {
            title: 'Custodia Familiar y Declaraciones',
            text: 'Acuerdos de custodia, permisos de viaje para menores, consentimiento médico y declaraciones juradas de paternidad.',
            icon: 'scale',
          },
          {
            title: 'Poderes Notariales y Directivas',
            text: 'Poder notarial duradero de Texas (POA), directivas médicas por anticipado, testamentos en vida y poderes de atención médica.',
            icon: 'shield',
          },
          {
            title: 'Títulos de Autos y Traspasos',
            text: 'Traspasos de vehículos ante el DMV de Texas, cartas de compraventa (Bill of Sale), títulos con fianza y liberación de gravamen.',
            icon: 'truck',
          },
          {
            title: 'Bienes Raíces y Contratos',
            text: 'Escrituras de propiedad, traspasos, contratos de arrendamiento, pagarés y documentación de cierre o financiamiento.',
            icon: 'home',
          },
          {
            title: 'Verificación de Empleo I-9',
            text: 'Inspección física de documentos como representante autorizado para el Formulario I-9 y constancias de contratación.',
            icon: 'briefcase',
          },
          {
            title: 'Trámites y Apoyo de Inmigración',
            text: 'Declaraciones juradas de patrocinio económico (Formulario I-864), cartas de apoyo y certificación documental no jurídica.',
            icon: 'globe',
          },
        ],
      },
      {
        type: 'table',
        title: 'Tarifas Notariales Oficiales de Texas y Servicio Móvil',
        intro: 'Precios regulados por el Código de Gobierno de Texas § 406.024 y tarifas transparentes de traslado a domicilio.',
        head: ['Servicio Notarial', 'Tarifa Estándar', 'Ubicación / Modalidad', 'Detalles'],
        rows: [
          [
            'Firma Notarial en Clínica (Primera Firma)',
            '$10',
            'Clínica de Marshall (Sin cita)',
            'Tarifa legal de Texas por reconocimiento o juramento; $1 por firma adicional',
          ],
          [
            'Certificado o Sello Adicional',
            '$1',
            'Clínica de Marshall (Sin cita)',
            'Tarifa legal por cada sello o firma adicional en el mismo documento',
          ],
          [
            'Notario Móvil a Domicilio (Marshall)',
            'Desde $45',
            'Área urbana de Marshall (24/7)',
            'Tarifa base de traslado más tarifas legales por firma notariada',
          ],
          [
            'Notario Móvil Regional (Este de Texas)',
            'Cotización por Distancia',
            'Longview, Carthage, Kilgore, Hallsville',
            'Tarifa de traslado confirmada por teléfono antes de despachar la unidad; servicio 24/7',
          ],
          [
            'Verificación de Empleo Formulario I-9',
            '$75',
            'En Clínica o Móvil',
            'Inspección física de documentos laborales como representante autorizado',
          ],
        ],
        note: 'La ley de Texas regula las tarifas por acto notarial. Los cobros de traslado móvil son independientes y se informan con total claridad antes del servicio.',
        bg: 'white',
      },
      {
        type: 'steps',
        howTo: true,
        bg: 'lavender',
        title: 'Cómo Funciona la Certificación de Documentos',
        intro: 'Siga estos 4 sencillos pasos para asegurar que su trámite sea rápido y legalmente válido.',
        steps: [
          {
            title: 'Llame o Visite Nuestra Clínica',
            text: `Llame al ${SITE.phone.display} para confirmar disponibilidad en clínica o solicitar un notario móvil a domicilio.`,
          },
          {
            title: 'Lleve el Documento Sin Firmar',
            text: 'No firme ni feche el documento antes de la cita. Toda firma debe estamparse presencialmente frente al notario.',
          },
          {
            title: 'Presente Identificación con Foto Vigente',
            text: 'Cada firmante debe mostrar una identificación oficial vigente (licencia de conducir de Texas, identificación estatal o pasaporte).',
          },
          {
            title: 'Firme, Notarice y Registre',
            text: 'El notario comprueba su identidad, atestigua la firma, estampa el sello oficial y registra el acto en el libro notarial del Estado de Texas.',
          },
        ],
      },
      {
        type: 'split',
        bg: 'white',
        eyebrow: 'Firma Presencial y Móvil',
        title: 'Certificaciones Notariales Profesionales y Válidas',
        text: 'Desde declaraciones juradas de custodia y poderes notariales hasta títulos de vehículos y trámites de inmigración, nuestro personal comisionado en Texas garantiza validez legal.',
        items: [
          'Verificación rigurosa de identidad con identificaciones oficiales con foto',
          'Sello notarial oficial, llenado de certificados y registro en libro estatal',
          'Atención y orientación completamente en español',
          'Servicio móvil a domicilio disponible las 24 horas para casos urgentes',
        ],
        image: 'diverseNotary',
        imageAlt: 'Notaria y especialista en documentos firmando papeles legales de certificación con una pareja en Marshall, Texas',
      },
      {
        type: 'split',
        reverse: true,
        bg: 'lavender',
        eyebrow: 'Oficina en Marshall',
        title: 'Espacio Cómodo, Accesible y Privado de Atención',
        text: 'Venga en persona o llame antes para firmar sus documentos en nuestra oficina privada en Marshall, sin prisas ni filas de banco.',
        items: [
          'Ubicación céntrica en West Pinecrest Drive con estacionamiento gratuito',
          'Espacio amplio para múltiples firmantes y testigos',
          'Visita integral: tome sus huellas o hágase su prueba en la misma parada',
        ],
        image: 'officeDesk',
        imageAlt: 'Escritorio profesional de consulta en la oficina de L&T Solutions en Marshall, TX',
      },
      {
        type: 'faq',
        bg: 'white',
        title: 'Preguntas Frecuentes sobre Servicios Notariales',
        items: [
          {
            q: '¿Qué debo llevar para certificar o notarizar un documento?',
            a: 'Traiga el documento completo sin firmar y una identificación oficial con fotografía vigente (licencia de conducir, ID estatal o pasaporte) de cada persona que deba firmar. Si requiere testigos, ellos también deben presentar identificación oficial.',
          },
          {
            q: '¿Ofrecen servicio notarial a domicilio o en hospitales?',
            a: `¡Sí! Nuestro notario móvil se desplaza por Marshall, Longview, Carthage, Kilgore, Hallsville y todo el Este de Texas. Acudimos con regularidad a domicilios particulares, asilos, clínicas y hospitales. Llame al ${SITE.phone.display} para servicio 24/7.`,
          },
          {
            q: '¿Cuánto cuesta certificar un documento?',
            a: 'Texas fija tarifas oficiales para actos notariales: $10 por la primera firma/sello y $1 por cada firma adicional en el mismo documento. Para visitas a domicilio, se añade una cuota de traslado confirmada antes de salir hacia su ubicación.',
          },
          {
            q: '¿Puede el notario dar asesoría legal o seleccionar documentos por mí?',
            a: 'No. Conforme al Código de Gobierno de Texas § 406.017, un notario público no es un abogado y tiene estrictamente prohibido brindar asesoramiento jurídico, redactar demandas o elegir formularios judiciales. Para dudas legales debe consultar a un abogado.',
          },
          {
            q: '¿Tienen atención en español para firmantes hispanohablantes?',
            a: '¡Sí! Contamos con notarios comisionados bilingües que le atenderán con amabilidad y total claridad en español.',
          },
        ],
      },
      {
        type: 'cta',
        title: '¿Necesita un Notario en Marshall o el Este de Texas?',
        text: `Visite nuestra clínica en ${fullAddress()} o llame al ${SITE.phone.display} para solicitar un notario móvil ahora mismo.`,
        primary: { label: 'Solicitar Servicio Notarial', href: 'contact' },
        secondary: { label: `Llamar al ${SITE.phone.display}`, href: 'tel' },
      },
    ],
  },
};

export default page;
