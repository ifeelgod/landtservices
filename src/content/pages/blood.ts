import type { PageModule } from '../types';
import { SITE } from '../../config/site';

const page: PageModule = {
  en: {
    title: 'In-Home & Walk-In Blood Draws in Marshall, TX | Mobile Phlebotomy',
    description: 'Gentle in-home blood draws and walk-in phlebotomy in Marshall, TX. We collect blood per your doctor’s lab order and deliver specimens safely to Quest, Labcorp, or hospital labs.',
    schemaType: 'MedicalWebPage',
    service: {
      name: 'In-Home and Walk-In Phlebotomy',
      serviceType: 'Phlebotomy / Blood Draw',
      description: 'Mobile phlebotomy and walk-in clinical blood collection for doctor-ordered lab work, senior care, homebound patients, and specialty testing in East Texas.',
    },
    blocks: [
      {
        type: 'hero',
        eyebrow: 'Clinical Phlebotomy Services',
        title: 'In-Home & Walk-In Blood Draws in Marshall, TX',
        subtitle: 'Skip the stressful hospital waiting rooms. Our certified phlebotomists draw blood per your doctor’s order at our Marshall clinic or in the comfort of your home.',
        image: 'drawReal',
        imageAlt: 'Certified phlebotomist performing blood draw at L&T Solutions clinical draw station',
        primary: { label: 'Schedule a Blood Draw', href: 'contact' },
        secondary: { label: `Call ${SITE.phone.display}`, href: 'tel' },
        badges: true,
      },
      {
        type: 'answer',
        bg: 'lavender',
        question: 'Can I get a blood draw at home in Marshall, TX?',
        answer: 'Yes. L&T Solutions provides mobile phlebotomy home visits for seniors, homebound individuals, and busy families across Marshall, Harrison County, and Longview. Certified phlebotomists collect blood specimens according to your doctor’s lab requisition, maintain strict medical cold-chain temperature controls, and deliver samples directly to Quest Diagnostics, Labcorp, or local hospital laboratories.',
      },
      {
        type: 'cards',
        columns: 4,
        eyebrow: 'Phlebotomy Options',
        title: 'Blood Collection Options Tailored to You',
        intro: 'Choose the most convenient way to complete your doctor-ordered blood work.',
        cards: [
          {
            title: 'In-Home Mobile Draws',
            text: 'Gentle home visits ideal for elderly parents, homebound individuals, or anyone preferring care at home.',
            href: 'contact',
            icon: 'home',
            cta: 'Book Home Visit',
          },
          {
            title: 'Marshall Clinic Walk-Ins',
            text: `Visit our clean, quiet clinic at ${SITE.address.street} in Marshall with zero long hospital waiting lines.`,
            href: 'contact',
            icon: 'map',
            cta: 'Visit Clinic',
          },
          {
            title: 'Specialty Lab Kits',
            text: 'Have a functional medicine or specialty lab kit? We draw, process, centrifuge, and ship your kit.',
            href: 'kits',
            icon: 'clipboard',
            cta: 'Specialty Kits',
          },
          {
            title: 'Early Gender Reveal Test',
            text: 'Early prenatal gender blood draws from 6–7 weeks of pregnancy with fast 24–48 hour results.',
            href: 'gender',
            icon: 'baby',
            cta: 'Gender Test',
          },
        ],
      },
      {
        type: 'steps',
        howTo: true,
        bg: 'lavender',
        title: 'How Our Blood Draw Service Works',
        intro: 'Simple, hassle-free phlebotomy from booking to laboratory delivery.',
        steps: [
          {
            title: 'Request Your Appointment',
            text: 'Book online or call us. Tell us if you prefer a clinic visit or a mobile home draw.',
          },
          {
            title: 'Have Your Doctor Order Ready',
            text: 'Bring your physical lab requisition form from your physician or upload it when scheduling.',
          },
          {
            title: 'Gentle & Professional Draw',
            text: 'Our licensed phlebotomist performs a quick, gentle blood draw following all sterile protocols.',
          },
          {
            title: 'Courier Delivery to Your Lab',
            text: 'Specimens are immediately packaged with temperature control and delivered to your specified laboratory for testing.',
          },
        ],
      },
      {
        type: 'split',
        eyebrow: 'Patient Guidance',
        title: 'Preparing for Your Blood Draw',
        text: 'To ensure accurate lab results and a smooth blood draw experience, follow these simple preparation tips.',
        items: [
          'Fasting requirement: Check if your doctor ordered fasting blood work (usually 8 to 12 hours water only)',
          'Stay hydrated: Drink plenty of water before your appointment to make veins easier to locate',
          'Wear loose sleeves: Wear clothing with sleeves that roll up easily past the elbow',
          'Keep your lab requisition paper or photo ready for the phlebotomist',
        ],
        image: 'clinic',
        imageAlt: 'Spotless clinical phlebotomy chair and clean collection supplies in Marshall TX',
        cta: { label: 'Schedule Appointment Now', href: 'contact' },
      },
      {
        type: 'split',
        reverse: true,
        bg: 'white',
        eyebrow: 'In-Home Care for Seniors & Homebound',
        title: 'Gentle, Compassionate In-Home Mobile Phlebotomy',
        text: 'For seniors, mobility-impaired patients, or family members recovering from illness, travelling to an outpatient laboratory can be exhausting. Our licensed phlebotomists bring hospital-grade care right to your living room.',
        items: [
          'Gentle technique with small-gauge pediatric and butterfly needles',
          'Sterile, single-use supplies and on-site centrifuging/cold-chain preservation',
          'Prompt delivery directly to Quest, Labcorp, or local hospital pathology labs',
        ],
        image: 'seniorBloodDraw',
        imageAlt: 'Certified Hispanic phlebotomist smiling and gently performing an in-home blood draw for an elderly lady in her armchair',
      },
      {
        type: 'faq',
        bg: 'lavender',
        title: 'Blood Draw Frequently Asked Questions',
        items: [
          {
            q: 'Do I need a doctor’s order for a blood draw?',
            a: 'For routine clinical blood work sent to Quest, Labcorp, or hospital labs, a signed physician lab requisition is required. Direct-access specialty tests like gender reveal or peace-of-mind DNA do not require a doctor’s order.',
          },
          {
            q: 'Which laboratories do you deliver specimens to?',
            a: 'We transport specimens to Quest Diagnostics, Labcorp, hospital outpatient labs, or specialty functional medicine lab facilities according to your physician’s instructions.',
          },
          {
            q: 'How does mobile home draw pricing work?',
            a: 'We charge a modest dispatch fee based on travel distance across Harrison and Gregg counties. We confirm any trip fee transparently by phone before confirming your appointment.',
          },
          {
            q: 'Does health insurance cover mobile blood draws?',
            a: 'Your health insurance covers the laboratory testing itself performed by your lab (Quest/Labcorp). Our phlebotomy collection and mobile dispatch fees are self-pay.',
          },
        ],
      },
      {
        type: 'cta',
        title: 'Need a Gentle Blood Draw at Home or in Clinic?',
        text: `Call ${SITE.phone.display} to schedule your mobile phlebotomist or clinic visit in Marshall, TX.`,
        primary: { label: 'Book Blood Draw', href: 'contact' },
        secondary: { label: `Call ${SITE.phone.display}`, href: 'tel' },
      },
    ],
  },
  es: {
    title: 'Extracción de Sangre a Domicilio y en Clínica en Marshall, TX | Flebotomía Móvil',
    description: 'Extracción de sangre amable a domicilio y en clínica en Marshall, TX. Tomamos su muestra con la orden de su médico y la entregamos a Quest, Labcorp o el hospital.',
    schemaType: 'MedicalWebPage',
    service: {
      name: 'Flebotomía a Domicilio y en Clínica',
      serviceType: 'Flebotomía / Toma de Sangre',
      description: 'Flebotomía móvil y toma de muestras de sangre en clínica para órdenes médicas, adultos mayores, pacientes en cama y kits especializados en el Este de Texas.',
    },
    blocks: [
      {
        type: 'hero',
        eyebrow: 'Servicios de Flebotomía Clínica',
        title: 'Extracción de Sangre a Domicilio y en Clínica en Marshall, TX',
        subtitle: 'Evite las estresantes salas de espera hospitalarias. Nuestras flebotomistas certificadas toman su sangre según la orden de su médico en nuestra clínica o a domicilio.',
        image: 'drawReal',
        imageAlt: 'Flebotomista certificada realizando extracción de sangre en la estación clínica de L&T Solutions',
        primary: { label: 'Agendar Toma de Sangre', href: 'contact' },
        secondary: { label: `Llamar al ${SITE.phone.display}`, href: 'tel' },
        badges: true,
      },
      {
        type: 'answer',
        bg: 'lavender',
        question: '¿Puedo solicitar una toma de sangre a domicilio en Marshall, TX?',
        answer: 'Sí. L&T Solutions ofrece visitas de flebotomía móvil a domicilio para adultos mayores, personas con movilidad reducida y familias ocupadas en Marshall, el condado de Harrison y Longview. Flebotomistas certificadas toman las muestras según la orden de su médico, mantienen la cadena de frío y las entregan directamente a Quest, Labcorp o laboratorios hospitalarios.',
      },
      {
        type: 'cards',
        columns: 4,
        eyebrow: 'Opciones de Flebotomía',
        title: 'Opciones de Toma de Sangre Adaptadas a Usted',
        intro: 'Elija la forma más conveniente de realizar los análisis de sangre ordenados por su médico.',
        cards: [
          {
            title: 'Toma Móvil a Domicilio',
            text: 'Visitas a domicilio ideales para adultos mayores o personas que prefieren la comodidad de su hogar.',
            href: 'contact',
            icon: 'home',
            cta: 'Agendar Domicilio',
          },
          {
            title: 'En Clínica en Marshall',
            text: `Visite nuestra clínica limpia en ${SITE.address.street} en Marshall sin largas filas de espera.`,
            href: 'contact',
            icon: 'map',
            cta: 'Visitar Clínica',
          },
          {
            title: 'Kits Especializados',
            text: '¿Tiene un kit de medicina funcional? Tomamos, procesamos, centrifugamos y enviamos su kit.',
            href: 'kits',
            icon: 'clipboard',
            cta: 'Ver Kits',
          },
          {
            title: 'Prueba Temprana de Género',
            text: 'Prueba de sangre prenatal para conocer el género de su bebé desde las 6–7 semanas de embarazo.',
            href: 'gender',
            icon: 'baby',
            cta: 'Prueba de Género',
          },
        ],
      },
      {
        type: 'steps',
        howTo: true,
        bg: 'lavender',
        title: 'Cómo Funciona el Servicio de Toma de Sangre',
        intro: 'Flebotomía sencilla y sin complicaciones desde la cita hasta la entrega al laboratorio.',
        steps: [
          {
            title: 'Solicite su Cita',
            text: 'Agende en línea o llámenos. Indique si prefiere atención en clínica o visita móvil a domicilio.',
          },
          {
            title: 'Tenga Lista la Orden de su Médico',
            text: 'Presente la orden médica impresa o fotografía al momento de la toma de muestra.',
          },
          {
            title: 'Toma de Sangre Suave y Profesional',
            text: 'Nuestra flebotomista realiza una extracción suave aplicando protocolos estériles.',
          },
          {
            title: 'Entrega por Mensajería al Laboratorio',
            text: 'Las muestras se empaquetan con control de temperatura y se entregan a su laboratorio indicado.',
          },
        ],
      },
      {
        type: 'split',
        eyebrow: 'Recomendaciones para el Paciente',
        title: 'Cómo Prepararse para su Toma de Sangre',
        text: 'Para garantizar resultados precisos y una toma rápida, siga estas recomendaciones sencillas.',
        items: [
          'Ayuno: Verifique si su médico ordenó análisis en ayunas (normalmente de 8 a 12 horas de solo agua)',
          'Tome suficiente agua: Estar bien hidratado ayuda a localizar las venas con mayor facilidad',
          'Use ropa cómoda: Utilice prendas con mangas holgadas que se puedan subir fácilmente',
          'Tenga a la mano la orden médica física o en su teléfono para la flebotomista',
        ],
        image: 'clinic',
        imageAlt: 'Silla de flebotomía clínica limpia y suministros en Marshall TX',
        cta: { label: 'Agendar Cita Ahora', href: 'contact' },
      },
      {
        type: 'split',
        reverse: true,
        bg: 'white',
        eyebrow: 'Atención a Domicilio para Adultos Mayores',
        title: 'Extracción de Sangre Amable y Paciente en la Comodidad del Hogar',
        text: 'Para adultos mayores o personas con dificultades de movilidad, trasladarse a un laboratorio puede ser difícil y estresante. Nuestras flebotomistas certificadas llevan atención médica de calidad directamente a su sala.',
        items: [
          'Técnica delicada con agujas pediátricas y tipo mariposa para el mínimo dolor',
          'Material estéril desechable y transporte con cadena de frío garantizada',
          'Entrega oportuna directa a Quest, Labcorp o el laboratorio de su preferencia',
        ],
        image: 'seniorBloodDraw',
        imageAlt: 'Flebotomista hispana certificada realizando con amabilidad una extracción de sangre a domicilio a una señora mayor en su sillón',
      },
      {
        type: 'faq',
        bg: 'lavender',
        title: 'Preguntas Frecuentes sobre Toma de Sangre',
        items: [
          {
            q: '¿Necesito una orden médica para la toma de sangre?',
            a: 'Para análisis clínicos enviados a Quest, Labcorp o el hospital, se requiere orden firmada por un médico. Pruebas directas como revelación de género o ADN de tranquilidad no requieren orden médica.',
          },
          {
            q: '¿A qué laboratorios entregan las muestras?',
            a: 'Entregamos muestras a Quest Diagnostics, Labcorp, laboratorios de hospitales o laboratorios de especialidad según las instrucciones de su médico.',
          },
          {
            q: '¿Cómo funciona el cobro del servicio a domicilio?',
            a: 'Cobramos una cuota accesible de envío según la distancia en el condado de Harrison y Gregg. Le informaremos la cuota de viaje con transparencia por teléfono antes de confirmar su cita.',
          },
          {
            q: '¿El seguro médico cubre la toma de sangre a domicilio?',
            a: 'Su seguro cubre el análisis de laboratorio en sí (Quest/Labcorp). Nuestra tarifa por toma de muestra y traslado móvil es un servicio directo.',
          },
        ],
      },
      {
        type: 'cta',
        title: '¿Necesita una Toma de Sangre Amable a Domicilio o en Clínica?',
        text: `Llame al ${SITE.phone.display} para agendar su flebotomista móvil o cita en clínica en Marshall, TX.`,
        primary: { label: 'Agendar Toma de Sangre', href: 'contact' },
        secondary: { label: `Llamar al ${SITE.phone.display}`, href: 'tel' },
      },
    ],
  },
};

export default page;
