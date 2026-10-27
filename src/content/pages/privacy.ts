import type { PageModule } from '../types';
import { SITE } from '../../config/site';

const page: PageModule = {
  en: {
    title: 'Privacy Policy | L&T Solutions',
    description:
      'Read how L&T Solutions collects, uses and protects the information you share through our website appointment form. We never sell your personal information.',
    schemaType: 'WebPage',
    blocks: [
      {
        type: 'hero',
        title: 'Privacy Policy',
        subtitle: 'Last updated: October 2026',
      },
      {
        type: 'prose',
        title: 'Information we collect',
        paragraphs: [
          `When you use the appointment form on this website, ${SITE.name} collects your name, phone number and the type of test you are interested in. You may optionally provide your city, a preferred time and a short message.`,
          'We do not request medical records, test results or payment information through this website. Please do not include them in the form.',
        ],
        bg: 'white',
      },
      {
        type: 'prose',
        title: 'How we use your information',
        paragraphs: [
          'We use the information you submit only to respond to your request, schedule your collection, dispatch a mobile collector and follow up about your appointment.',
        ],
      },
      {
        type: 'prose',
        title: 'Service providers',
        paragraphs: [
          'Form submissions are delivered to us by a third-party form delivery service, and this website is hosted by a third-party hosting provider. These providers process data only as needed to deliver their services to us.',
          'We do not sell, rent or trade your personal information to anyone.',
        ],
        bg: 'lavender',
      },
      {
        type: 'prose',
        title: 'Test results',
        paragraphs: [
          'Specimens are analyzed by our accredited partner laboratories. Results are reported by the laboratory or a Medical Review Officer (MRO) only to authorized recipients, in accordance with applicable law, including HIPAA and, for DOT-regulated tests, 49 CFR Part 40.',
        ],
      },
      {
        type: 'prose',
        title: 'Cookies',
        paragraphs: [
          'This website uses no tracking or advertising cookies by default. Our hosting provider may keep standard server logs, such as IP address and browser type, for security and performance purposes.',
        ],
        bg: 'white',
      },
      {
        type: 'prose',
        title: 'Your rights',
        paragraphs: [
          'You may ask us to access, correct or delete the personal information you submitted through this website, subject to any records we are legally required to keep.',
        ],
      },
      {
        type: 'prose',
        title: 'Contact us',
        paragraphs: [
          `Questions about this policy? Email ${SITE.email} or call ${SITE.phone.display}.`,
          'This policy template should be reviewed by a qualified attorney before launch.',
        ],
        bg: 'lavender',
      },
    ],
  },
  es: {
    title: 'Política de privacidad | L&T Solutions',
    description:
      'Conozca cómo L&T Solutions recopila, usa y protege la información que comparte mediante el formulario de citas de nuestro sitio. Nunca vendemos sus datos.',
    schemaType: 'WebPage',
    blocks: [
      {
        type: 'hero',
        title: 'Política de privacidad',
        subtitle: 'Última actualización: octubre de 2026',
      },
      {
        type: 'prose',
        title: 'Información que recopilamos',
        paragraphs: [
          `Cuando usa el formulario de citas de este sitio, ${SITE.name} recopila su nombre, número de teléfono y el tipo de prueba que le interesa. De manera opcional puede indicar su ciudad, un horario preferido y un mensaje breve.`,
          'No solicitamos expedientes médicos, resultados de pruebas ni datos de pago a través de este sitio. Por favor no los incluya en el formulario.',
        ],
        bg: 'white',
      },
      {
        type: 'prose',
        title: 'Cómo usamos su información',
        paragraphs: [
          'Usamos la información que nos envía únicamente para responder a su solicitud, agendar su toma de muestra, enviar un recolector móvil y darle seguimiento a su cita.',
        ],
      },
      {
        type: 'prose',
        title: 'Proveedores de servicios',
        paragraphs: [
          'Los formularios nos llegan a través de un servicio externo de envío de formularios, y este sitio está alojado por un proveedor de hosting externo. Estos proveedores procesan los datos solo en la medida necesaria para prestarnos sus servicios.',
          'No vendemos, alquilamos ni intercambiamos su información personal con nadie.',
        ],
        bg: 'lavender',
      },
      {
        type: 'prose',
        title: 'Resultados de pruebas',
        paragraphs: [
          'Las muestras las analizan nuestros laboratorios asociados acreditados. El laboratorio o un Médico Revisor (MRO) reporta los resultados únicamente a los destinatarios autorizados, conforme a la ley aplicable, incluida HIPAA y, para pruebas reguladas por el DOT, 49 CFR Parte 40.',
        ],
      },
      {
        type: 'prose',
        title: 'Cookies',
        paragraphs: [
          'De forma predeterminada, este sitio no usa cookies de rastreo ni de publicidad. Nuestro proveedor de hosting puede guardar registros estándar del servidor, como la dirección IP y el tipo de navegador, por motivos de seguridad y rendimiento.',
        ],
        bg: 'white',
      },
      {
        type: 'prose',
        title: 'Sus derechos',
        paragraphs: [
          'Puede pedirnos acceder, corregir o eliminar la información personal que nos envió por este sitio, salvo los registros que la ley nos obligue a conservar.',
        ],
      },
      {
        type: 'prose',
        title: 'Contáctenos',
        paragraphs: [
          `¿Preguntas sobre esta política? Escriba a ${SITE.email} o llame al ${SITE.phone.display}.`,
          'Esta plantilla de política debe ser revisada por un abogado calificado antes del lanzamiento.',
        ],
        bg: 'lavender',
      },
    ],
  },
};

export default page;
