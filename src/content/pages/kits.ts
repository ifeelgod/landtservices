import type { PageModule } from '../types';
import { SITE } from '../../config/site';

const page: PageModule = {
  en: {
    title: 'Specialty Lab Kit Draw & Processing in Marshall, TX',
    description: 'We draw, centrifuge, process, and ship your functional medicine, hormone, or specialty test kits in Marshall, TX. Partnering with local clinicians and wellness providers.',
    schemaType: 'MedicalWebPage',
    service: {
      name: 'Specialty Lab Kit Collection',
      serviceType: 'Specialty Lab Kit Collection',
      description: 'Specimen collection, centrifugation, medical cold-chain packaging, and courier shipping for specialty, functional medicine, and direct-to-consumer lab kits in East Texas.',
    },
    blocks: [
      {
        type: 'hero',
        eyebrow: 'Functional & Specialty Lab Collection',
        title: 'Specialty Lab Kit Draw & Processing in Marshall, TX',
        subtitle: 'Received a specialty lab kit from your doctor or online provider? We perform the phlebotomy, centrifuge blood samples, package with cold-chain gel packs, and ship your kit according to exact instructions.',
        image: 'centrifuge',
        imageAlt: 'TD4C low-speed clinical centrifuge used for specialty lab kit blood processing at L&T Solutions',
        primary: { label: 'Book Specialty Kit Draw', href: 'contact' },
        secondary: { label: `Call ${SITE.phone.display}`, href: 'tel' },
        badges: true,
      },
      {
        type: 'answer',
        bg: 'lavender',
        question: 'Who can draw blood for my at-home specialty lab kit?',
        answer: 'L&T Solutions in Marshall, TX provides specimen collection, processing, centrifugation, and shipping for functional medicine, wellness, and specialty lab test kits. Certified phlebotomists draw blood per kit instructions, centrifuge samples when required, package specimens with ice or gel packs (2°C to 8°C), and ship via prepaid courier envelopes.',
      },
      {
        type: 'cards',
        columns: 4,
        eyebrow: 'Supported Test Kits',
        title: 'Specialty Kit Types We Process',
        intro: 'We handle blood draws and processing for virtually all specialty lab kit manufacturers.',
        cards: [
          {
            title: 'Functional Medicine Kits',
            text: 'Comprehensive stool, gut health, micronutrient, and metabolic panels requiring blood processing and cold packaging.',
            icon: 'flask',
          },
          {
            title: 'Hormone & Endocrine Panels',
            text: 'Precision hormone, thyroid, and adrenal testing kits with strict collection timing and serum separation protocols.',
            icon: 'clipboard',
          },
          {
            title: 'Food Sensitivity & Allergy',
            text: 'IgG/IgE food reaction and environmental allergy panels requiring centrifuged serum or plasma aliquots.',
            icon: 'user',
          },
          {
            title: 'Lyme & Specialty Infectious',
            text: 'Specialized blood collection protocols requiring immediate centrifugation, freezing, or express overnight shipping.',
            icon: 'snow',
          },
        ],
      },
      {
        type: 'steps',
        howTo: true,
        bg: 'lavender',
        title: 'How Specialty Kit Processing Works',
        intro: 'Stress-free kit completion in four straightforward steps.',
        steps: [
          {
            title: 'Bring Your Unopened Test Kit',
            text: 'Bring your specialty test kit, requisition form, and included shipping mailer to your appointment.',
          },
          {
            title: 'Professional Blood Draw',
            text: 'Our certified phlebotomist draws blood using the exact tubes provided inside your test kit.',
          },
          {
            title: 'Centrifugation & Processing',
            text: 'When required by kit instructions, we centrifuge the blood, separate serum/plasma, and freeze or chill samples.',
          },
          {
            title: 'Courier Drop-Off & Tracking',
            text: 'We package your kit securely with cold packs and drop it off at FedEx or UPS using your prepaid shipping label.',
          },
        ],
      },
      {
        type: 'split',
        eyebrow: 'Clinician Partnerships',
        title: 'Partnering with Functional Doctors & Chiropractors',
        text: 'Many functional medicine practitioners, holistic doctors, chiropractors, and wellness clinics order advanced diagnostic kits for their patients but prefer not to perform phlebotomy or maintain centrifuges in their own offices.',
        items: [
          'Send your patients to our Marshall clinic for quick, reliable kit draws',
          'We maintain centrifuges, biohazard containment, and medical refrigeration',
          'Strict adherence to kit collection, freezing, and shipping protocols',
          'Eliminate phlebotomy overhead and specimen liability from your practice',
        ],
        image: 'kitShipping',
        imageAlt: 'Specialty functional medicine lab kit prepared with color-coded blood tubes, cold pack, biohazard bag, and courier shipping box',
        cta: { label: 'Inquire About Clinician Referral Accounts', href: 'contact' },
      },
      {
        type: 'split',
        reverse: true,
        bg: 'white',
        eyebrow: 'In-Home Kit Collection',
        title: 'Mobile Kit Blood Draws Directly to Your Home',
        text: 'Cannot make it into our Marshall clinic? Our mobile phlebotomists come directly to your residence across East Texas with portable centrifuges, specimen cold-packs, and strict protocol adherence.',
        items: [
          'Convenient home visits for busy patients, seniors, and families',
          'Immediate on-site centrifugation and temperature-regulated packaging',
          'Direct courier drop-off (FedEx/UPS) under strict kit chain of custody',
        ],
        image: 'seniorBloodDraw',
        imageAlt: 'Certified mobile phlebotomist gently collecting blood for a specialized diagnostic kit in patient living room',
      },
      {
        type: 'faq',
        bg: 'lavender',
        title: 'Specialty Lab Kit Frequently Asked Questions',
        items: [
          {
            q: 'Do I need to schedule an appointment for a specialty kit draw?',
            a: 'Yes. Specialty kits often require specific draw timing, centrifugation, and same-day shipping pick-ups. Scheduling an appointment ensures we have staff and centrifuges ready.',
          },
          {
            q: 'What should I bring to my kit draw appointment?',
            a: 'Bring your complete specialty lab kit, the requisition form filled out by your doctor, photo ID, and the prepaid shipping envelope included with the kit.',
          },
          {
            q: 'Is centrifuge processing included in the kit draw fee?',
            a: 'Yes. Our kit draw fee covers phlebotomy, centrifugation (spinning blood to separate serum), pipetting, cold-pack packaging, and courier drop-off.',
          },
          {
            q: 'Can you draw specialty kits at my home?',
            a: 'Yes! For kits that do not require immediate centrifugation, our mobile phlebotomist can complete the blood draw in your home. Call us to verify your kit specifications.',
          },
        ],
      },
      {
        type: 'cta',
        title: 'Have a Specialty Test Kit Waiting to Be Drawn?',
        text: `Call ${SITE.phone.display} to schedule your kit draw in Marshall, TX or set up a clinician referral relationship.`,
        primary: { label: 'Book Kit Draw', href: 'contact' },
        secondary: { label: `Call ${SITE.phone.display}`, href: 'tel' },
      },
    ],
  },
  es: {
    title: 'Toma y Procesamiento de Kits Especializados en Marshall, TX',
    description: 'Tomamos, centrifugamos, procesamos y enviamos sus kits de laboratorio de medicina funcional o especialista en Marshall, TX. Alianza con médicos locales.',
    schemaType: 'MedicalWebPage',
    service: {
      name: 'Toma de Muestras para Kits Especializados',
      serviceType: 'Toma de Muestras para Kits Especializados',
      description: 'Toma de muestras de sangre, centrifugación, empaque en cadena de frío y envío por mensajería para kits de laboratorio especializados en el Este de Texas.',
    },
    blocks: [
      {
        type: 'hero',
        eyebrow: 'Toma de Kits Especializados',
        title: 'Toma de Sangre y Procesamiento de Kits Especializados en Marshall, TX',
        subtitle: '¿Recibió un kit de laboratorio de su médico o por internet? Tomamos su muestra de sangre, centrifugamos, empaquetamos con congelante y enviamos su kit siguiendo las instrucciones exactas.',
        image: 'centrifuge',
        imageAlt: 'Centrífuga clínica TD4C para procesamiento de muestras de laboratorio en L&T Solutions',
        primary: { label: 'Agendar Toma de Kit', href: 'contact' },
        secondary: { label: `Llamar al ${SITE.phone.display}`, href: 'tel' },
        badges: true,
      },
      {
        type: 'answer',
        bg: 'lavender',
        question: '¿Quién puede tomar la muestra de sangre para mi kit de laboratorio especializado?',
        answer: 'L&T Solutions en Marshall, TX realiza la toma de muestras, centrifugación, procesamiento y envío de kits de laboratorio de medicina funcional y bienestar. Nuestras flebotomistas certificadas toman la sangre según las instrucciones del kit, centrifugan cuando es necesario, empaquetan con congelante (2°C a 8°C) y entregan el paquete a la mensajería.',
      },
      {
        type: 'cards',
        columns: 4,
        eyebrow: 'Kits Compatibles',
        title: 'Tipos de Kits Especializados que Procesamos',
        intro: 'Atendemos la toma de muestras y procesamiento para casi todas las marcas de kits del mercado.',
        cards: [
          {
            title: 'Medicina Funcional',
            text: 'Paneles de salud digestiva, micronutrientes y salud metabólica que requieren centrifugación y empaque en frío.',
            icon: 'flask',
          },
          {
            title: 'Paneles Hormonales',
            text: 'Kits de tiroides y hormonas con protocolos estrictos de horario de toma y separación de suero.',
            icon: 'clipboard',
          },
          {
            title: 'Sensibilidad Alimentaria y Alergias',
            text: 'Pruebas de reacción a alimentos y alergias que requieren separar plasma o suero centrifugado.',
            icon: 'user',
          },
          {
            title: 'Lyme y Pruebas Especiales',
            text: 'Toma de sangre especializada que requiere centrifugación inmediata, congelación o envío nocturno exprés.',
            icon: 'snow',
          },
        ],
      },
      {
        type: 'steps',
        howTo: true,
        bg: 'lavender',
        title: 'Cómo Funciona el Procesamiento de Kits',
        intro: 'Proceso sencillo en cuatro pasos para completar su kit.',
        steps: [
          {
            title: 'Traiga su Kit Sin Abrir',
            text: 'Traiga su kit de prueba, la orden llenada por su médico y el sobre de envío prepagado a su cita.',
          },
          {
            title: 'Toma de Sangre Profesional',
            text: 'Nuestra flebotomista extrae la sangre usando los tubos específicos incluidos dentro de su kit.',
          },
          {
            title: 'Centrifugación y Procesamiento',
            text: 'Si las instrucciones lo requieren, centrifugamos la sangre, separamos el suero/plasma y refrigeramos la muestra.',
          },
          {
            title: 'Entrega a Mensajería y Rastreo',
            text: 'Empaquetamos su kit con congelante y lo entregamos a FedEx o UPS con su guía de envío.',
          },
        ],
      },
      {
        type: 'split',
        eyebrow: 'Convenios con Médicos',
        title: 'Alianza con Médicos Funcionales y Quiroprácticos',
        text: 'Muchos médicos funcionales, quiroprácticos y clínicas de bienestar ordenan kits de diagnóstico avanzados pero prefieren no realizar extracciones de sangre ni mantener centrifugadoras en su consultorio.',
        items: [
          'Envíe a sus pacientes a nuestra clínica en Marshall para tomas rápidas y confiables',
          'Contamos con centrifugadoras, control de bioseguridad y refrigeración médica',
          'Cumplimiento estricto de protocolos de congelación y envío de kits',
          'Elimine costos de flebotomía y manejo de muestras en su propio consultorio',
        ],
        image: 'kitShipping',
        imageAlt: 'Kit especializado preparado con tubos de muestra etiquetados, paquete refrigerante, bolsa de bioseguridad y caja de envío',
        cta: { label: 'Solicitar Cuenta para Médicos', href: 'contact' },
      },
      {
        type: 'split',
        reverse: true,
        bg: 'white',
        eyebrow: 'Toma de Muestras de Kits a Domicilio',
        title: 'Toma de Sangre Móvil para Kits Especializados en su Hogar',
        text: '¿No puede acudir a nuestra clínica? Nuestras flebotomistas móviles van directamente a su casa en el Este de Texas con centrifugadoras portátiles y paquetes de frío.',
        items: [
          'Visitas cómodas a domicilio para pacientes, adultos mayores y familias',
          'Centrifugación inmediata y empaque a temperatura controlada',
          'Entrega directa a paquetería (FedEx/UPS) con estricto control de custodia',
        ],
        image: 'seniorBloodDraw',
        imageAlt: 'Flebotomista móvil certificada recolectando muestra de sangre para kit médico especializado a domicilio',
      },
      {
        type: 'faq',
        bg: 'lavender',
        title: 'Preguntas Frecuentes sobre Kits Especializados',
        items: [
          {
            q: '¿Debo agendar cita para la toma de un kit especializado?',
            a: 'Sí. Los kits suelen requerir horarios específicos de toma, centrifugación y recolección de mensajería el mismo día. Agendar cita nos permite tener el equipo listo.',
          },
          {
            q: '¿Qué debo llevar a mi cita para el kit?',
            a: 'Traiga su kit completo, la orden médica firmada, una identificación con foto y el sobre de envío prepagado incluido en la caja.',
          },
          {
            q: '¿La centrifugación está incluida en el costo de la toma?',
            a: 'Sí. Nuestra tarifa incluye la extracción de sangre, centrifugación (separación de suero), empaque en frío y entrega a la mensajería.',
          },
          {
            q: '¿Pueden tomar el kit en mi domicilio?',
            a: '¡Sí! Para kits que no requieren centrifugación inmediata, nuestra flebotomista móvil puede ir a su casa. Llámenos para verificar las especificaciones de su kit.',
          },
        ],
      },
      {
        type: 'cta',
        title: '¿Tiene un Kit Especializado Esperando Toma de Muestra?',
        text: `Llame al ${SITE.phone.display} para agendar su toma de kit en Marshall, TX o para establecer un convenio médico.`,
        primary: { label: 'Agendar Toma de Kit', href: 'contact' },
        secondary: { label: `Llamar al ${SITE.phone.display}`, href: 'tel' },
      },
    ],
  },
};

export default page;
