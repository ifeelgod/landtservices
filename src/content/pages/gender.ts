import type { PageModule } from '../types';
import { SITE } from '../../config/site';

const page: PageModule = {
  en: {
    title: 'Early Gender Reveal Blood Test in Marshall, TX | From 6–7 Weeks',
    description: 'Find out your baby’s gender as early as 6 to 7 weeks into pregnancy with a fast, gentle blood draw in Marshall, TX or in the comfort of your home.',
    schemaType: 'MedicalWebPage',
    service: {
      name: 'Early Gender Reveal Blood Test',
      serviceType: 'Prenatal DNA Testing',
      description: 'Non-invasive early gender reveal blood screening detecting fetal DNA in maternal blood as early as 6–7 weeks of pregnancy.',
    },
    blocks: [
      {
        type: 'hero',
        eyebrow: 'Early Prenatal Gender Reveal',
        title: 'Early Gender Reveal Blood Test in Marshall, TX',
        subtitle: 'Discover if you are having a boy or a girl as early as 6–7 weeks into pregnancy with a quick, 99%+ accurate blood draw in our Marshall clinic or at home.',
        image: 'blood',
        imageAlt: 'Certified phlebotomist preparing a gentle blood draw for an expectant mother',
        primary: { label: 'Book Gender Reveal Test', href: 'contact' },
        secondary: { label: `Call ${SITE.phone.display}`, href: 'tel' },
        badges: true,
      },
      {
        type: 'answer',
        bg: 'lavender',
        question: 'How early can a blood test tell my baby’s gender?',
        answer: 'An early gender reveal blood test can determine your baby’s biological sex as early as 6 to 7 weeks into pregnancy with over 99% accuracy. The non-invasive test requires a simple maternal blood draw to detect microscopic cell-free fetal DNA fragments and test for the presence or absence of the male Y chromosome.',
      },
      {
        type: 'steps',
        howTo: true,
        title: 'How the Early Gender Reveal Test Works',
        intro: 'Four easy steps to your exciting pregnancy announcement.',
        steps: [
          {
            title: 'Confirm Pregnancy Timeline',
            text: 'Ensure you are at least 6 to 7 weeks past your first day of last menstrual period (or confirmed by ultrasound).',
          },
          {
            title: 'Quick, Gentle Blood Draw',
            text: 'Visit our Marshall clinic or request an in-home visit. A licensed phlebotomist collects a small tube of blood from your arm.',
          },
          {
            title: 'Laboratory Fetal DNA Analysis',
            text: 'Your sample is processed at our partner laboratory using advanced qPCR technology to detect male Y-chromosome DNA.',
          },
          {
            title: 'Private or Party Reveal Results',
            text: 'Receive your confidential email results in 1 to 2 business days — or have us send results directly to your secret reveal baker or event planner!',
          },
        ],
      },
      {
        type: 'cards',
        columns: 4,
        bg: 'lavender',
        eyebrow: 'Why Choose L & T',
        title: 'A Stress-Free Experience for Expectant Parents',
        intro: 'Why local families choose L&T Solutions for early gender determination.',
        cards: [
          {
            title: 'Gentle & Comfortable Draw',
            text: 'Performed by experienced phlebotomists trained in gentle vein care to keep mom comfortable throughout.',
            icon: 'drop',
          },
          {
            title: 'Weeks Earlier Than Ultrasound',
            text: 'Learn your baby’s gender at 6–7 weeks instead of waiting for a 18–20 week anatomy ultrasound scan.',
            icon: 'clock',
          },
          {
            title: 'In-Home Draw Option',
            text: 'Prefer to stay cozy at home? Our mobile phlebotomist can come directly to your living room in Marshall or Longview.',
            icon: 'home',
          },
          {
            title: 'Party & Celebration Friendly',
            text: 'We can keep the secret safe and email results directly to a friend, family member, or party coordinator.',
            icon: 'star',
          },
        ],
      },
      {
        type: 'faq',
        title: 'Gender Reveal Test Frequently Asked Questions',
        items: [
          {
            q: 'Is this test safe for me and my baby?',
            a: '100% safe. This is a non-invasive prenatal test requiring only a standard arm blood draw from the mother, posing zero risk to the developing baby.',
          },
          {
            q: 'How accurate is the early gender blood draw?',
            a: 'The test is over 99% accurate when performed at 7 weeks of pregnancy or later, outperforming traditional early ultrasounds.',
          },
          {
            q: 'What if I am pregnant with twins?',
            a: 'If Y-chromosome DNA is detected in a twin pregnancy, at least one baby is a boy. If no Y-chromosome DNA is detected, both babies are girls.',
          },
          {
            q: 'Is this a medical diagnostic test for health conditions?',
            a: 'No. The early gender reveal test is designed exclusively for fetal sex determination and does not screen for genetic health conditions or chromosomal abnormalities.',
          },
        ],
      },
      {
        type: 'cta',
        title: 'Ready to Find Out If It’s a Boy or a Girl?',
        text: `Schedule your gentle gender blood draw in Marshall today or call ${SITE.phone.display} for questions.`,
        primary: { label: 'Book Gender Test', href: 'contact' },
        secondary: { label: `Call ${SITE.phone.display}`, href: 'tel' },
      },
    ],
  },
  es: {
    title: 'Prueba Temprana de Género en Marshall, TX | Desde la Semana 6–7',
    description: 'Conozca el sexo de su bebé desde la semana 6 a 7 de embarazo con una prueba de sangre rápida en Marshall, TX o a domicilio.',
    schemaType: 'MedicalWebPage',
    service: {
      name: 'Prueba Temprana de Género',
      serviceType: 'Pruebas Prenatales de ADN',
      description: 'Prueba de sangre prenatal no invasiva para determinar el sexo del bebé detectando ADN fetal desde las 6 a 7 semanas de gestación.',
    },
    blocks: [
      {
        type: 'hero',
        eyebrow: 'Revelación Temprana de Género',
        title: 'Prueba Temprana de Género del Bebé en Marshall, TX',
        subtitle: 'Descubra si tendrá un niño o una niña desde las 6 a 7 semanas de embarazo con una extracción de sangre rápida y más del 99% de precisión en nuestra clínica o a domicilio.',
        image: 'blood',
        imageAlt: 'Flebotomista certificada preparando toma de sangre amable para madre embarazada',
        primary: { label: 'Agendar Prueba de Género', href: 'contact' },
        secondary: { label: `Llamar al ${SITE.phone.display}`, href: 'tel' },
        badges: true,
      },
      {
        type: 'answer',
        bg: 'lavender',
        question: '¿Qué tan temprano puede una prueba de sangre revelar el sexo de mi bebé?',
        answer: 'Una prueba de sangre temprana puede determinar el sexo biológico de su bebé desde las 6 a 7 semanas de embarazo con más del 99% de precisión. La prueba no invasiva requiere una simple extracción de sangre de la madre para analizar fragmentos de ADN fetal e identificar la presencia o ausencia del cromosoma Y masculino.',
      },
      {
        type: 'steps',
        howTo: true,
        title: 'Cómo Funciona la Prueba Temprana de Género',
        intro: 'Cuatro sencillos pasos para el anuncio de su embarazo.',
        steps: [
          {
            title: 'Verificar Tiempo de Gestación',
            text: 'Asegúrese de tener al menos 6 a 7 semanas a partir de su última menstruación o confirmadas por ecografía.',
          },
          {
            title: 'Toma de Sangre Rápida y Amable',
            text: 'Visite nuestra clínica en Marshall o solicite toma a domicilio. Una flebotomista extraerá una muestra pequeña de sangre de su brazo.',
          },
          {
            title: 'Análisis de ADN Fetal en Laboratorio',
            text: 'Su muestra se procesa con tecnología avanzada qPCR para detectar el cromosoma Y masculino.',
          },
          {
            title: 'Resultados Privados o para Fiestas',
            text: 'Reciba sus resultados por correo electrónico en 1 a 2 días hábiles o pida que se envíen al organizador de su fiesta de revelación.',
          },
        ],
      },
      {
        type: 'cards',
        columns: 4,
        bg: 'lavender',
        eyebrow: 'Ventajas de Elegirnos',
        title: 'Una Experiencia Sin Estrés para Futuros Padres',
        intro: 'Por qué las familias del Este de Texas confían en L&T Solutions.',
        cards: [
          {
            title: 'Extracción Suave y Cómoda',
            text: 'Realizada por flebotomistas expertas enfocadas en su comodidad en todo momento.',
            icon: 'drop',
          },
          {
            title: 'Semanas Antes del Ultrasonido',
            text: 'Conozca el sexo a las 6–7 semanas en lugar de esperar al ultrasonido de la semana 18 a 20.',
            icon: 'clock',
          },
          {
            title: 'Opción a Domicilio',
            text: '¿Prefiere la comodidad de su hogar? Nuestra flebotomista móvil acude a su domicilio en Marshall o Longview.',
            icon: 'home',
          },
          {
            title: 'Ideal para Fiestas de Revelación',
            text: 'Podemos guardar el secreto y enviar los resultados directamente a su repostero o coordinador de fiesta.',
            icon: 'star',
          },
        ],
      },
      {
        type: 'faq',
        title: 'Preguntas Frecuentes sobre la Prueba de Género',
        items: [
          {
            q: '¿Es una prueba segura para mí y mi bebé?',
            a: '100% segura. Es una prueba prenatal no invasiva que solo requiere una muestra de sangre del brazo de la madre, sin ningún riesgo para el bebé.',
          },
          {
            q: '¿Qué tan precisa es la prueba de sangre?',
            a: 'La prueba tiene una precisión superior al 99% cuando se realiza a partir de las 7 semanas de gestación.',
          },
          {
            q: '¿Qué sucede si estoy embarazada de gemelos?',
            a: 'Si se detecta el cromosoma Y, al menos uno de los bebés es niño. Si no se detecta el cromosoma Y, ambas son niñas.',
          },
          {
            q: '¿Esta prueba detecta condiciones médicas o genéticas?',
            a: 'No. La prueba está diseñada únicamente para la determinación del sexo biológico y no reemplaza los estudios médicos prenatales.',
          },
        ],
      },
      {
        type: 'cta',
        title: '¿Lista para Saber si es Niño o Niña?',
        text: `Agende su toma de sangre para revelación de género en Marshall hoy mismo o llame al ${SITE.phone.display}.`,
        primary: { label: 'Agendar Prueba', href: 'contact' },
        secondary: { label: `Llamar al ${SITE.phone.display}`, href: 'tel' },
      },
    ],
  },
};

export default page;
