import type { Block } from './types';

/**
 * Official service list supplied by the client (vehicle door magnet).
 * Reused on Home and DOT pages so every listed service is explicit and visible.
 */
export const servicesGlance: { en: Block; es: Block } = {
  en: {
    type: 'cards',
    columns: 3,
    eyebrow: 'Our Services',
    title: 'Drug & Alcohol Testing, Collection, Compliance & Notary',
    intro: 'L&T Solutions provides the following services from our Marshall, TX office.',
    bg: 'white',
    cards: [
      { title: 'DOT Urine Drug Testing', text: 'Federal 5-panel urine collections under 49 CFR Part 40 for drivers and safety-sensitive employees.', href: 'dot', icon: 'truck' },
      { title: 'Random, Post-Accident & Pre-Employment Testing', text: 'Random selections, post-accident collections and pre-employment screens for DOT and non-DOT employers.', href: 'dot', icon: 'clipboard' },
      { title: 'Return-to-Duty & Follow-Up Testing', text: 'Return-to-duty and follow-up collections for employees completing the DOT return-to-duty process.', href: 'dot', icon: 'check' },
      { title: 'Drug & Alcohol Testing', text: 'Workplace and personal drug and alcohol screening with chain-of-custody collection.', href: 'drug', icon: 'cup' },
      { title: 'Collection Services & Compliance Support', text: 'Professional specimen collection plus help keeping your testing program compliant.', href: 'compliance', icon: 'shield' },
      { title: 'Notary', text: 'Notary public services at our Marshall office. Call to confirm availability and what to bring.', href: 'notary', icon: 'scale' },
    ],
  },
  es: {
    type: 'cards',
    columns: 3,
    eyebrow: 'Nuestros Servicios',
    title: 'Pruebas de Drogas y Alcohol, Recolección, Cumplimiento y Notario',
    intro: 'L&T Solutions ofrece los siguientes servicios desde nuestra oficina en Marshall, TX.',
    bg: 'white',
    cards: [
      { title: 'Prueba de Drogas en Orina DOT', text: 'Recolección de orina de 5 paneles bajo 49 CFR Parte 40 para conductores y empleados en puestos de seguridad.', href: 'dot', icon: 'truck' },
      { title: 'Pruebas Aleatorias, Post-Accidente y Pre-Empleo', text: 'Selecciones aleatorias, recolecciones post-accidente y pruebas de pre-empleo para empresas DOT y no DOT.', href: 'dot', icon: 'clipboard' },
      { title: 'Pruebas de Regreso al Trabajo y Seguimiento', text: 'Recolecciones de regreso al trabajo y de seguimiento para empleados en el proceso DOT correspondiente.', href: 'dot', icon: 'check' },
      { title: 'Pruebas de Drogas y Alcohol', text: 'Pruebas de drogas y alcohol laborales y personales con recolección y cadena de custodia.', href: 'drug', icon: 'cup' },
      { title: 'Servicios de Recolección y Apoyo de Cumplimiento', text: 'Recolección profesional de muestras y ayuda para mantener su programa de pruebas en cumplimiento.', href: 'compliance', icon: 'shield' },
      { title: 'Notario', text: 'Servicios de notario público en nuestra oficina de Marshall. Llame para confirmar disponibilidad y qué llevar.', href: 'notary', icon: 'scale' },
    ],
  },
};

/** Explicit list of DOT / employer test types (Random, Post-Accident, Pre-Employment, Return-to-Duty, Follow-up). */
export const testTypes: { en: Block; es: Block } = {
  en: {
    type: 'table',
    title: 'Types of DOT & Employer Testing We Collect',
    intro: 'Every test type below is collected at our Marshall office, with compliance support available.',
    head: ['Test type', 'When it is used'],
    rows: [
      ['Pre-Employment', 'Before a new hire starts safety-sensitive duties (required for DOT jobs).'],
      ['Random', 'Unannounced selections from your testing pool throughout the year.'],
      ['Post-Accident', 'After a qualifying accident, within the required time limits.'],
      ['Return-to-Duty', 'After a violation, once a Substance Abuse Professional (SAP) allows the employee to return.'],
      ['Follow-Up', 'Unannounced tests after return to duty, as set out in the SAP plan.'],
    ],
    note: 'Timing and eligibility rules come from 49 CFR Part 40 and your employer program. Call us with questions.',
    bg: 'lavender',
  },
  es: {
    type: 'table',
    title: 'Tipos de Pruebas DOT y Laborales que Recolectamos',
    intro: 'Cada tipo de prueba se recolecta en nuestra oficina de Marshall, con apoyo de cumplimiento disponible.',
    head: ['Tipo de prueba', 'Cuándo se usa'],
    rows: [
      ['Pre-Empleo', 'Antes de que un nuevo empleado inicie tareas críticas de seguridad (requerido en empleos DOT).'],
      ['Aleatoria', 'Selecciones sin aviso de su grupo de pruebas durante el año.'],
      ['Post-Accidente', 'Después de un accidente calificado, dentro de los plazos requeridos.'],
      ['Regreso al Trabajo', 'Después de una violación, cuando un Profesional de Abuso de Sustancias (SAP) autoriza el regreso.'],
      ['Seguimiento', 'Pruebas sin aviso tras el regreso al trabajo, según el plan del SAP.'],
    ],
    note: 'Los plazos y requisitos provienen de 49 CFR Parte 40 y del programa de su empleador. Llámenos con sus preguntas.',
    bg: 'lavender',
  },
};
