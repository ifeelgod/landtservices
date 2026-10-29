import type { PageModule } from '../types';
import { SITE, fullAddress } from '../../config/site';

const page: PageModule = {
  en: {
    title: 'Legal, Privacy, HIPAA & Compliance Disclaimers | L&T Solutions',
    description:
      'Official policies of L&T Solutions in Marshall, TX: Privacy Policy, Terms of Use, Cookie Policy, Medical Disclaimer, HIPAA Statement, and Financial Disclaimers.',
    schemaType: 'WebPage',
    blocks: [
      {
        type: 'hero',
        eyebrow: 'Legal, Privacy & Compliance Framework',
        title: 'Policies, Terms of Use & Regulatory Disclaimers',
        subtitle: `Official legal disclosures, HIPAA privacy standards, patient rights, cookie notices, and terms of service for L&T Solutions (${SITE.address.city}, Texas). Last updated: October 2026.`,
        badges: true,
      },
      {
        type: 'prose',
        title: '1. Privacy Policy & Information Collection',
        paragraphs: [
          `At ${SITE.name} ("we," "our," or "us"), operating at ${fullAddress()}, we are dedicated to protecting the privacy, confidentiality, and security of our clients, donors, patients, and website visitors.`,
          '<strong>Information We Collect:</strong> When you submit an appointment inquiry, request 24/7 mobile collection dispatch, or contact us online, we collect identifiable information including your full name, telephone number, email address, physical location or job site address, preferred appointment time, and service requested. For employer corporate accounts, we collect company name, supervisor/DER contact information, and account billing details.',
          '<strong>How We Use Your Information:</strong> Information submitted through this website is used solely to respond to inquiries, confirm appointment scheduling, coordinate on-site mobile collector dispatch, maintain required regulatory chain-of-custody documentation, and provide transactional customer service. <strong>We do not sell, rent, license, or monetize your personal information to third-party data brokers or marketing agencies under any circumstances.</strong>',
          '<strong>Authorized Service Providers:</strong> Information is processed securely through verified infrastructure providers strictly as needed to operate our website, encrypt appointment requests, and deliver notifications to our management dispatch team.',
        ],
        bg: 'white',
      },
      {
        type: 'prose',
        title: '2. HIPAA Compliance & Protected Health Information (PHI) Notice',
        paragraphs: [
          `<strong>Notice of Privacy Practices (HIPAA):</strong> ${SITE.name} complies with applicable provisions of the Health Insurance Portability and Accountability Act of 1996 (HIPAA), the Health Information Technology for Economic and Clinical Health Act (HITECH), and the Texas Medical Records Privacy Act (Texas Health & Safety Code Chapter 181).`,
          '<strong>Specimen Collection Protocol:</strong> As a certified third-party specimen collection facility and mobile phlebotomy provider, we collect biological specimens (blood, urine, saliva, hair, nail clippings) under strict clinical chain-of-custody. We do not diagnose, treat, or formulate medical care plans. Biological specimens are sealed with tamper-evident tape in the donor’s presence and transferred under cold-chain or regulated custody to CLIA-certified, SAMHSA-certified, or AABB-accredited partner laboratories.',
          '<strong>Disclosure of Test Results:</strong> Laboratory results and Medical Review Officer (MRO) determinations are reported exclusively to authorized individuals or entities designated in writing by the donor, legal guardian, or sponsoring employer (pursuant to federal DOT 49 CFR Part 40 guidelines or court orders). Staff members are trained annually on confidential handling of health information and strict physical, electronic, and administrative safeguards.',
          '<strong>Individual Rights:</strong> Patients and donors retain the right to inspect and receive a copy of their collection records, request restrictions on disclosures, and request a confidential accounting of disclosures by contacting our Privacy Officer at info@lt-services.com.',
        ],
        bg: 'lavender',
      },
      {
        type: 'split',
        bg: 'white',
        eyebrow: 'Regulatory Adherence',
        title: 'Certified Laboratory Accreditations & Strict Quality Control',
        text: 'All biological specimens collected by L&T Solutions are processed by accredited reference laboratories holding CLIA, SAMHSA, and AABB certifications, ensuring every result meets the highest scientific and legal benchmarks.',
        items: [
          'CLIA-certified clinical pathology partner laboratories',
          'SAMHSA-certified federal workplace testing facilities',
          'AABB-accredited relationship DNA paternity laboratories',
        ],
        image: 'complianceCert',
        imageAlt: 'Official CLIA and SAMHSA laboratory compliance certificates and chain-of-custody documentation',
      },
      {
        type: 'prose',
        title: '3. Medical Disclaimer & Scope of Practice',
        paragraphs: [
          '<strong>No Medical or Diagnostic Advice:</strong> The content published on this website—including educational descriptions of drug detection windows, relationship DNA genetics, prenatal gender reveal blood testing, and phlebotomy procedures—is provided for informational and scheduling purposes only. It is not medical advice, clinical diagnosis, or a recommendation for a specific course of treatment.',
          '<strong>Doctor\'s Orders Required for Clinical Phlebotomy:</strong> Routine clinical blood draws and specialty laboratory kit collections require a valid written requisition or laboratory order from a licensed healthcare provider (physician, physician assistant, nurse practitioner, or chiropractor authorized by Texas state law). Patients are advised to consult their primary physician regarding the interpretation of laboratory results.',
          '<strong>Emergency Medical Care:</strong> ${SITE.name} is an outpatient testing and mobile collection provider, NOT an emergency room or acute trauma medical facility. If you are experiencing a life-threatening medical emergency, chest pains, severe bleeding, or acute trauma, call 911 immediately or proceed to the nearest emergency room.',
        ],
        bg: 'white',
      },
      {
        type: 'prose',
        title: '4. Terms of Use & Website Agreement',
        paragraphs: [
          '<strong>Acceptance of Terms:</strong> By accessing and using this website, you agree to comply with and be bound by these Terms of Use and all applicable laws and regulations of the State of Texas and the United States.',
          '<strong>Intellectual Property:</strong> All text, photography, graphic trademarks, logos, custom vehicle imagery, and layout components on this website are the property of L&T Solutions and protected by copyright and intellectual property laws. Unauthorized reproduction or commercial distribution without written consent is strictly prohibited.',
          '<strong>Limitation of Liability:</strong> Under no circumstances shall ${SITE.name}, its officers, directors, certified phlebotomists, collectors, or partner laboratories be liable for any direct, indirect, incidental, or consequential damages resulting from the use or inability to use this website, typographical errors in published materials, or third-party telecommunications delays.',
          '<strong>Governing Law & Jurisdiction:</strong> These Terms and any dispute arising from your use of this website or our collection services shall be governed by the laws of the State of Texas, without regard to conflict of law principles. Any legal proceeding shall be instituted exclusively in state or federal courts located in Harrison County, Texas.',
        ],
        bg: 'lavender',
      },
      {
        type: 'prose',
        title: '5. Cookie & Tracking Technologies Policy',
        paragraphs: [
          '<strong>Minimal Cookie Usage:</strong> Our website is built with a privacy-first static architecture. We do not use third-party behavioral advertising cookies, retargeting pixels, or persistent cross-site tracking technologies.',
          '<strong>Essential Functional Storage:</strong> We utilize browser local storage solely to remember essential visitor preferences, such as your selected language preference (English or Spanish). This preference is stored locally on your device and is never shared with third parties.',
          '<strong>Server Logs & Security:</strong> Like standard web infrastructure, our secure hosting provider generates standard access server logs (including masked IP addresses, browser user-agents, and visited resource timestamps) strictly for cyber-security monitoring, DDoS defense, and infrastructure performance.',
        ],
        bg: 'white',
      },
      {
        type: 'prose',
        title: '6. Financial & Payment Disclaimers',
        paragraphs: [
          '<strong>Self-Pay & Transparent Pricing:</strong> ${SITE.name} operates as an independent self-pay and direct employer testing service. All fees published in our Official Price List & Services Catalog are transparent, upfront, and all-inclusive of collection and partner laboratory fees unless otherwise stated.',
          '<strong>Third-Party Filing Fees:</strong> For immigration consultation and document preparation services, USCIS government filing fees are separate and paid directly to the U.S. Department of Homeland Security.',
          '<strong>Insurance Reimbursement:</strong> We do not bill health insurance companies, Medicaid, or Medicare directly. We provide itemized receipts with standard service codes that clients may submit to their Health Savings Account (HSA), Flexible Spending Account (FSA), or private medical insurance provider for eligible reimbursement.',
          '<strong>Mobile Travel & Cancellation Fees:</strong> Mobile dispatch calls require confirmed scheduling. Mileage fees for on-site visits outside our immediate core territory are quoted upfront. Cancellations made after a mobile technician has been dispatched to your location may incur a travel dispatch charge.',
        ],
        bg: 'lavender',
      },
      {
        type: 'split',
        reverse: true,
        bg: 'white',
        eyebrow: 'Legal Disclosures',
        title: 'Document Authentication & Texas Notarial Compliance',
        text: 'Our document preparation and verification specialists strictly follow Texas Government Code standards. We ensure all notarial acknowledgments, identity verifications, and chain of custody documentation are flawlessly recorded.',
        items: [
          'Commissioned Texas Notary Public in-person signing and witnessing',
          'Full compliance with Texas Government Code §406.017 disclosures',
          'Strict safeguarding of client confidentiality and personal records',
        ],
        image: 'diverseNotary',
        imageAlt: 'African-American female notary and immigration document specialist signing legal certification papers with a couple in Marshall, Texas',
      },
      {
        type: 'prose',
        title: '7. Non-Attorney Document Preparation Disclosure',
        paragraphs: [
          '<strong>Texas Government Code §406.017 Disclosure:</strong> L&T Solutions and its staff members are not licensed attorneys and are not authorized to practice law in Texas or any other jurisdiction. We cannot and do not provide legal advice, recommend specific legal filings, or draft legal pleadings for court.',
          'For legal DNA court filings and immigration consultation packets, our role is strictly limited to accredited specimen collection, certified chain-of-custody administration, non-attorney document preparation, and clerical compilation at the specific direction of the client.',
        ],
        bg: 'white',
      },
      {
        type: 'cta',
        title: 'Questions Regarding Our Policies?',
        text: `Our compliance and administrative team is available to assist you. Contact our Marshall office directly at ${SITE.phone.display} or email info@lt-services.com.`,
        primary: { label: 'Contact Our Office', href: 'contact' },
        secondary: { label: `Call ${SITE.phone.display}`, href: 'tel' },
      },
    ],
  },
  es: {
    title: 'Políticas Legales, Privacidad, HIPAA y Términos de Uso | L&T Solutions',
    description:
      'Políticas oficiales de L&T Solutions en Marshall, TX: Política de Privacidad, Términos de Uso, Política de Cookies, Descargo Médico, Declaración HIPAA y Descargos Financieros.',
    schemaType: 'WebPage',
    blocks: [
      {
        type: 'hero',
        eyebrow: 'Marco Legal, Privacidad y Cumplimiento',
        title: 'Políticas, Términos de Uso y Descargos Regulatorios',
        subtitle: `Divulgaciones legales oficiales, estándares de privacidad HIPAA, derechos del paciente, aviso de cookies y condiciones de servicio de L&T Solutions (${SITE.address.city}, Texas). Última actualización: octubre de 2026.`,
        badges: true,
      },
      {
        type: 'prose',
        title: '1. Política de Privacidad y Recopilación de Información',
        paragraphs: [
          `En ${SITE.name} ("nosotros", "nuestro"), con sede en ${fullAddress()}, estamos comprometidos a proteger la privacidad, confidencialidad y seguridad de nuestros clientes, donantes, pacientes y visitantes.`,
          '<strong>Información que Recopilamos:</strong> Cuando envía una solicitud de cita, solicita servicio móvil 24/7 o se comunica por nuestra web, recopilamos información identificable como su nombre completo, teléfono, correo electrónico, dirección o lugar de trabajo, hora preferida y servicio solicitado. Para cuentas corporativas recopilamos el nombre de la empresa y contacto del supervisor autorizado.',
          '<strong>Uso de la Información:</strong> La información enviada se utiliza exclusivamente para responder solicitudes, confirmar citas, despachar unidades móviles, mantener documentación de cadena de custodia requerida y brindar atención al cliente. <strong>Bajo ninguna circunstancia vendemos, alquilamos ni comercializamos su información personal a agencias publicitarias o terceros.</strong>',
          '<strong>Proveedores Autorizados:</strong> Los datos se procesan de forma segura a través de infraestructura encriptada con el único fin de operar nuestro sitio web y notificar a nuestro equipo de gestión.',
        ],
        bg: 'white',
      },
      {
        type: 'prose',
        title: '2. Cumplimiento de HIPAA y Aviso de Información Médica Protegida (PHI)',
        paragraphs: [
          `<strong>Aviso de Prácticas de Privacidad (HIPAA):</strong> ${SITE.name} cumple con las disposiciones de la Ley de Portabilidad y Responsabilidad del Seguro Médico (HIPAA), la Ley HITECH y la Ley de Privacidad de Registros Médicos de Texas (Capítulo 181 del Código de Salud y Seguridad de Texas).`,
          '<strong>Protocolo de Toma de Muestras:</strong> Como centro certificado de recolección y flebotomía móvil, tomamos muestras biológicas (sangre, orina, saliva, cabello, uñas) bajo estricta cadena de custodia clínica. No diagnosticamos ni recetamos tratamientos. Las muestras se sellan en presencia del donante y se transfieren bajo refrigeración médica a laboratorios certificados por CLIA, SAMHSA o acreditados por AABB.',
          '<strong>Entrega de Resultados:</strong> Los resultados de laboratorio y determinaciones del Médico Revisor (MRO) se entregan únicamente a las personas o entidades autorizadas por escrito por el paciente, tutor legal o empleador patrocinador (bajo las normas federales DOT 49 CFR Parte 40 u orden judicial). Nuestro personal se capacita anualmente en confidencialidad médica y resguardo de datos.',
          '<strong>Derechos del Paciente:</strong> Los pacientes tienen derecho a solicitar copia de sus registros de recolección y solicitar restricciones comunicándose con nuestro Oficial de Privacidad en info@lt-services.com.',
        ],
        bg: 'lavender',
      },
      {
        type: 'split',
        bg: 'white',
        eyebrow: 'Acreditación y Normativa',
        title: 'Laboratorios Acreditados y Estricto Control de Calidad',
        text: 'Todas las muestras biológicas recolectadas por L&T Solutions son analizadas por laboratorios de referencia acreditados con certificaciones CLIA, SAMHSA y AABB, garantizando máxima validez científica y legal.',
        items: [
          'Laboratorios asociados certificados bajo la norma federal CLIA',
          'Instalaciones certificadas por SAMHSA para pruebas laborales federales',
          'Laboratorios de ADN de relación de parentesco acreditados por la AABB',
        ],
        image: 'complianceCert',
        imageAlt: 'Certificados oficiales de cumplimiento y acreditación de laboratorio CLIA y SAMHSA',
      },
      {
        type: 'prose',
        title: '3. Descargo de Responsabilidad Médica y Alcance',
        paragraphs: [
          '<strong>Sin Asesoramiento Médico Diagnóstico:</strong> La información publicada en este sitio web—incluyendo ventanas de detección de sustancias, pruebas genéticas de ADN, revelación prenatal de género y flebotomía—es de carácter informativo y de programación. No constituye asesoramiento médico, diagnóstico clínico ni tratamiento.',
          '<strong>Orden Médica Requerida para Flebotomía Clínica:</strong> Las extracciones de sangre para análisis clínicos y procesamiento de kits especializados requieren una orden médica escrita de un profesional de la salud autorizado en Texas. Los pacientes deben consultar a su médico tratante para la interpretación de los análisis.',
          '<strong>Emergencias Médicas:</strong> ${SITE.name} es un centro de toma de muestras ambulatorio y móvil, NO una sala de emergencias ni centro de trauma agudo. Ante una emergencia médica o dolor en el pecho, llame de inmediato al 911 o acuda al hospital más cercano.',
        ],
        bg: 'white',
      },
      {
        type: 'prose',
        title: '4. Términos de Uso y Acuerdo del Sitio Web',
        paragraphs: [
          '<strong>Aceptación de Términos:</strong> Al ingresar y utilizar este sitio web, usted acepta cumplir con estos Términos de Uso y con todas las leyes aplicables del Estado de Texas y de los Estados Unidos.',
          '<strong>Propiedad Intelectual:</strong> Todos los textos, fotografías, logotipos, imágenes de vehículos rotulados y diseños en este sitio son propiedad de L&T Solutions y están protegidos por leyes de propiedad intelectual. Queda prohibida su reproducción sin autorización escrita.',
          '<strong>Limitación de Responsabilidad:</strong> En ningún caso ${SITE.name}, sus directivos, recolectores certificados o laboratorios asociados serán responsables de daños directos o indirectos derivados del uso o imposibilidad de uso del sitio web o fallas en telecomunicaciones externas.',
          '<strong>Jurisdicción Aplicable:</strong> Cualquier disputa relacionada con este sitio o con nuestros servicios de toma de muestras se regirá por las leyes del Estado de Texas, sometiéndose exclusivamente a los tribunales del Condado de Harrison, Texas.',
        ],
        bg: 'lavender',
      },
      {
        type: 'prose',
        title: '5. Política de Cookies y Tecnologías de Rastreo',
        paragraphs: [
          '<strong>Uso Mínimo de Cookies:</strong> Nuestro sitio web está diseñado con arquitectura estática priorizando la privacidad. No empleamos cookies de publicidad de terceros, píxeles de seguimiento ni rastreo entre sitios.',
          '<strong>Almacenamiento Local Esencial:</strong> Empleamos almacenamiento local del navegador únicamente para recordar su preferencia de idioma (español o inglés). Este dato permanece en su dispositivo y nunca se comparte.',
          '<strong>Registros del Servidor y Ciberseguridad:</strong> Nuestro servidor genera registros técnicos estándar (direcciones IP enmascaradas, tipo de navegador y hora de acceso) estrictamente para monitoreo de seguridad y defensa contra ataques cibernéticos.',
        ],
        bg: 'white',
      },
      {
        type: 'prose',
        title: '6. Descargos Financieros y Métodos de Pago',
        paragraphs: [
          '<strong>Precios Claros y Pago Directo:</strong> ${SITE.name} opera bajo la modalidad de pago directo y facturación corporativa. Nuestras tarifas en la Lista Oficial de Precios son transparentes e incluyen la recolección y análisis de laboratorio asociado.',
          '<strong>Tarifas de Presentación Gubernamental:</strong> Para trámites y consultas de inmigración, las tarifas oficiales de USCIS son independientes y se pagan directamente al Departamento de Seguridad Nacional.',
          '<strong>Reembolso de Seguro Médico:</strong> No facturamos de forma directa a seguros privados, Medicaid o Medicare. Entregamos recibos con códigos de servicio para que los clientes puedan solicitar reembolso a sus cuentas de ahorros de salud (HSA/FSA) o a su aseguradora.',
          '<strong>Tarifas de Viaje y Cancelación:</strong> Las salidas móviles a empresas y domicilios se cotizan por distancia antes de despachar. Cancelaciones realizadas una vez que la unidad móvil ya esté en camino pueden generar un cargo por despacho.',
        ],
        bg: 'lavender',
      },
      {
        type: 'split',
        reverse: true,
        bg: 'white',
        eyebrow: 'Avisos Legales',
        title: 'Autenticación Documental y Cumplimiento Notarial en Texas',
        text: 'Nuestros especialistas en preparación y verificación documental siguen estrictamente las normas del Código de Gobierno de Texas, garantizando actas y certificaciones con plena validez.',
        items: [
          'Firma presencial y certificación ante Notario Público comisionado en Texas',
          'Cumplimiento cabal con las divulgaciones del Código de Gobierno de Texas §406.017',
          'Resguardo absoluto de la confidencialidad de datos personales y registros',
        ],
        image: 'diverseNotary',
        imageAlt: 'Notaria y especialista en documentos firmando papeles oficiales de certificación legal con una pareja en Marshall, Texas',
      },
      {
        type: 'prose',
        title: '7. Divulgación de Preparación de Documentos (No Abogados)',
        paragraphs: [
          '<strong>Aviso conforme al Código de Gobierno de Texas §406.017:</strong> L&T Solutions y su personal no son abogados licenciados para ejercer la abogacía en Texas y no pueden brindar asesoramiento legal ni seleccionar formularios judiciales.',
          'Nuestra labor en trámites de inmigración y pruebas de ADN para la corte se limita estrictamente a la toma de muestras con cadena de custodia acreditada, notarización oficial y preparación de documentos bajo las instrucciones explícitas del solicitante.',
        ],
        bg: 'white',
      },
      {
        type: 'cta',
        title: '¿Preguntas sobre Nuestras Políticas?',
        text: `Nuestro equipo administrativo y de cumplimiento está listo para atenderle. Llame a nuestra oficina en Marshall al ${SITE.phone.display} o escriba a info@lt-services.com.`,
        primary: { label: 'Contactar a Nuestra Oficina', href: 'contact' },
        secondary: { label: `Llamar al ${SITE.phone.display}`, href: 'tel' },
      },
    ],
  },
};

export default page;
