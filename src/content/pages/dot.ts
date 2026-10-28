import type { PageModule } from '../types';
import { testTypes } from '../shared';
import { SITE } from '../../config/site';

const page: PageModule = {
  en: {
    title: 'DOT Compliance & Employer Drug Screening in Marshall, TX',
    description: 'Turnkey FMCSA, FAA, FRA DOT drug & alcohol testing, random pool consortium management, DOT physicals, and FMCSA Clearinghouse administration in Marshall, TX.',
    schemaType: 'MedicalWebPage',
    service: {
      name: 'DOT Compliance & Workforce Screening',
      serviceType: 'Workplace & DOT Screening',
      description: 'Complete DOT and non-DOT workplace drug and alcohol program administration, random pool consortium, FMCSA Clearinghouse management, and 24/7 mobile emergency dispatch for Texas employers.',
    },
    blocks: [
      {
        type: 'hero',
        eyebrow: 'Workplace & Fleet Compliance',
        title: 'Turnkey DOT Compliance & Workforce Screening for Texas Fleets',
        subtitle: 'Complete FMCSA, FAA, and FRA drug and alcohol testing, random pool consortium management, DOT physicals, FMCSA Clearinghouse queries, and 24/7 mobile dispatch.',
        image: 'mobile',
        imageAlt: 'Mobile specimen collection van at an industrial work site in East Texas',
        primary: { label: 'Set Up an Employer Account', href: 'contact' },
        secondary: { label: `Call Fleet Hotline: ${SITE.phone.display}`, href: 'tel' },
        badges: true,
      },
      {
        type: 'answer',
        bg: 'lavender',
        question: 'What does a DOT drug test include?',
        answer: 'A DOT drug test requires a 5-panel urine screen collected under 49 CFR Part 40 federal guidelines detecting THC, Cocaine, Amphetamines/Methamphetamines, Opioids (including Codeine, Morphine, Heroin, Hydrocodone, Hydromorphone, Oxycodone, Oxymorphone), and PCP. All DOT specimens are processed by a SAMHSA-certified partner laboratory and reviewed by a licensed Medical Review Officer (MRO).',
      },
      testTypes.en,
      {
        type: 'cards',
        columns: 3,
        eyebrow: 'Employer Capabilities',
        title: 'Complete DOT & Workplace Program Management',
        intro: 'Everything your company needs to remain fully compliant with federal transportation safety laws and Texas workplace regulations.',
        cards: [
          {
            title: 'Random Testing Consortium Pool',
            text: 'Automated computer-generated random selection pools for FMCSA motor carriers, independent owner-operators, and contractors.',
            icon: 'truck',
          },
          {
            title: 'FMCSA Clearinghouse Administration',
            text: 'Driver query execution (pre-employment & annual), violation reporting, and return-to-duty tracking to keep your fleet audit-ready.',
            icon: 'shield',
          },
          {
            title: 'DOT Physicals & Medical Cards',
            text: 'Coordinated commercial driver physical examinations by certified Medical Examiners to maintain valid CDL medical cards.',
            icon: 'clipboard',
          },
          {
            title: 'Supervisor Training (DER)',
            text: 'Live and online 2-hour Designated Employer Representative (DER) training on reasonable suspicion drug and alcohol detection.',
            icon: 'user',
          },
          {
            title: '24/7 Post-Accident Mobile Dispatch',
            text: 'On-site emergency mobile collectors dispatched directly to accident scenes or yards within 2 hours across East Texas.',
            icon: 'siren',
            price: '$85',
          },
          {
            title: 'Texas Labor Code § 411.091 Non-DOT',
            text: 'Custom drug-free workplace policies, 5/10/12-panel non-DOT drug screens, and hair follicle testing for commercial contractors.',
            icon: 'briefcase',
            price: '$75',
          },
        ],
      },
      {
        type: 'table',
        title: 'Workplace Testing Quick Guide by Industry',
        intro: 'Find the typical testing panels and regulations governing your industry sector in East Texas.',
        head: ['Industry Sector', 'Regulated By', 'Typical Testing Panel', 'Common Test Reasons'],
        rows: [
          [
            'Commercial Trucking & Logistics',
            'FMCSA (DOT 49 CFR Part 40)',
            '5-Panel DOT Urine + Breath Alcohol',
            'Pre-employment, Random, Post-Accident, Return-to-Duty',
          ],
          [
            'Pipeline & Hazardous Materials',
            'PHMSA (DOT)',
            '5-Panel DOT Urine + Alcohol',
            'Pre-employment, Random, Annual Query, Post-Incident',
          ],
          [
            'Railroads & Transit Fleets',
            'FRA / FTA (DOT)',
            '5-Panel DOT Urine + Breath Alcohol',
            'Pre-employment, Mandatory Random Pool, Post-Accident',
          ],
          [
            'Aviation & Flight Maintenance',
            'FAA (DOT)',
            '5-Panel DOT Urine Screen',
            'Safety-Sensitive Hires, Random Consortium, Periodic',
          ],
          [
            'Oilfield & Pipeline Services',
            'Non-DOT / Client Required',
            '10-Panel Urine or Hair Follicle',
            'Site Access Carding, Contractor Onboarding, Random',
          ],
          [
            'Construction & Manufacturing',
            'OSHA / Texas Labor Code',
            '5-Panel or 10-Panel Urine Screen',
            'Pre-employment, Post-Injury, Reasonable Suspicion',
          ],
        ],
        note: 'L&T Solutions administers both federal DOT mandated programs and customized corporate non-DOT workplace screening programs.',
      },
      {
        type: 'steps',
        bg: 'lavender',
        title: 'Setting Up Your Employer Account in 3 Easy Steps',
        intro: 'Get your fleet or company enrolled with zero hassle.',
        steps: [
          {
            title: 'Account Enrollment',
            text: 'Contact our team to establish your company profile, designate DER contacts, and specify required testing panels.',
          },
          {
            title: 'Consortium & Roster Upload',
            text: 'Upload your active driver or employee roster into our automated random selection pool.',
          },
          {
            title: 'Immediate On-Demand Testing',
            text: 'Send employees to our Marshall clinic or call our 24/7 mobile dispatch line whenever testing is needed.',
          },
        ],
      },
      {
        type: 'faq',
        title: 'DOT Compliance Frequently Asked Questions',
        items: [
          {
            q: 'Are independent owner-operator truck drivers required to join a DOT consortium?',
            a: 'Yes. FMCSA regulations prohibit self-employed CDL drivers from managing their own random testing selection pool. Independent drivers must enroll in an approved consortium like L&T Solutions.',
          },
          {
            q: 'What qualifies as a DOT post-accident drug test requirement?',
            a: 'Under FMCSA rules, a DOT post-accident test is required if the incident involved a human fatality, or if the driver received a moving violation ticket AND a vehicle was towed or medical treatment was administered away from the scene.',
          },
          {
            q: 'How fast can a mobile collector reach an accident scene in Harrison County?',
            a: 'Our 24/7 emergency dispatch unit targets an on-site arrival time within approximately 2 hours across Marshall, Longview, and core East Texas transit corridors.',
          },
          {
            q: 'How do employers access completed test results?',
            a: 'MRO-verified results are delivered securely via encrypted client portal or confidential email as soon as testing and verification are finalized.',
          },
        ],
      },
      {
        type: 'cta',
        title: 'Protect Your Fleet & Ensure 100% DOT Compliance Today',
        text: `Call ${SITE.phone.display} to enroll your business or dispatch an emergency mobile collector right now.`,
        primary: { label: 'Enroll Employer Account', href: 'contact' },
        secondary: { label: `Call Fleet Line: ${SITE.phone.display}`, href: 'tel' },
      },
    ],
  },
  es: {
    title: 'Cumplimiento DOT y Pruebas para Empresas en Marshall, TX',
    description: 'Pruebas de drogas y alcohol DOT (FMCSA, FAA, FRA), consorcio de pruebas aleatorias, exámenes físicos DOT y manejo de Clearinghouse en Marshall, TX.',
    schemaType: 'MedicalWebPage',
    service: {
      name: 'Cumplimiento DOT y Pruebas de Trabajo',
      serviceType: 'Pruebas de Trabajo y DOT',
      description: 'Administración integral de programas de drogas y alcohol DOT y no-DOT, consorcio de pruebas aleatorias, Clearinghouse y recolección móvil 24/7 en Texas.',
    },
    blocks: [
      {
        type: 'hero',
        eyebrow: 'Cumplimiento de Flotas y Empresas',
        title: 'Cumplimiento DOT Integral y Pruebas para Empresas en Texas',
        subtitle: 'Pruebas de drogas y alcohol FMCSA, FAA y FRA, grupo de consorcio aleatorio, exámenes físicos DOT, consultas en Clearinghouse y servicio móvil 24/7.',
        image: 'mobile',
        imageAlt: 'Unidad móvil de recolección en sitio de trabajo industrial en el Este de Texas',
        primary: { label: 'Crear Cuenta de Empresa', href: 'contact' },
        secondary: { label: `Llamar a Flotas: ${SITE.phone.display}`, href: 'tel' },
        badges: true,
      },
      {
        type: 'answer',
        bg: 'lavender',
        question: '¿Qué incluye una prueba de drogas DOT?',
        answer: 'Una prueba de drogas DOT requiere un examen de orina de 5 sustancias recolectado bajo la normativa federal 49 CFR Parte 40 que detecta Marihuana (THC), Cocaína, Anfetaminas/Metanfetaminas, Opioide (incluyendo Codeína, Morfina, Heroína, Oxicodona y Fentanilo) y PCP. Todas las muestras se analizan en laboratorios certificados por SAMHSA y son revisadas por un médico MRO.',
      },
      testTypes.es,
      {
        type: 'cards',
        columns: 3,
        eyebrow: 'Capacidades para Empresas',
        title: 'Gestión Integral de Programas DOT y Laborales',
        intro: 'Todo lo que su empresa necesita para cumplir las leyes de transporte y normativas de Texas.',
        cards: [
          {
            title: 'Consorcio de Pruebas Aleatorias',
            text: 'Grupo de selección aleatoria por computadora para transportistas FMCSA, choferes independientes y contratistas.',
            icon: 'truck',
          },
          {
            title: 'Administración de FMCSA Clearinghouse',
            text: 'Consultas pre-empleo y anuales de choferes, reporte de violaciones y seguimiento de retorno al trabajo.',
            icon: 'shield',
          },
          {
            title: 'Exámenes Físicos DOT y Tarjeta Médica',
            text: 'Exámenes médicos comerciales coordinados por examinadores certificados para mantener vigentes sus tarjetas CDL.',
            icon: 'clipboard',
          },
          {
            title: 'Capacitación para Supervisores (DER)',
            text: 'Capacitación de 2 horas sobre detección de drogas y alcohol por sospecha razonable para supervisores de empresa.',
            icon: 'user',
          },
          {
            title: 'Servicio Móvil 24/7 por Accidentes',
            text: 'Recolectores móviles en el lugar del accidente o patio de vehículos en menos de 2 horas en todo el Este de Texas.',
            icon: 'siren',
            price: '$85',
          },
          {
            title: 'Código de Trabajo de Texas § 411.091',
            text: 'Políticas para empresas libres de drogas, exámenes no-DOT de 5, 10 y 12 paneles y folículo capilar para contratistas.',
            icon: 'briefcase',
            price: '$75',
          },
        ],
      },
      {
        type: 'table',
        title: 'Guía Rápida de Pruebas de Trabajo por Industria',
        intro: 'Consulte los paneles de prueba y regulaciones habituales según su sector industrial en el Este de Texas.',
        head: ['Sector Industrial', 'Regulado Por', 'Panel de Prueba Habitual', 'Motivos Comunes de Prueba'],
        rows: [
          [
            'Transporte Comercial y Logística',
            'FMCSA (DOT 49 CFR Parte 40)',
            'Orina 5 Paneles DOT + Alcohol en Aliento',
            'Pre-empleo, Aleatorio, Post-accidente, Retorno al Trabajo',
          ],
          [
            'Oleoductos y Materiales Peligrosos',
            'PHMSA (DOT)',
            'Orina 5 Paneles DOT + Alcohol',
            'Pre-empleo, Aleatorio, Consulta Anual, Incidentes',
          ],
          [
            'Ferrocarriles y Transporte Público',
            'FRA / FTA (DOT)',
            'Orina 5 Paneles DOT + Alcohol en Aliento',
            'Pre-empleo, Grupo Aleatorio Obligatorio, Accidentes',
          ],
          [
            'Aviación y Mantenimiento Aéreo',
            'FAA (DOT)',
            'Orina 5 Paneles DOT',
            'Personal de Seguridad, Consorcio, Periódico',
          ],
          [
            'Campos Petroleros y Servicios',
            'No-DOT / Exigido por Cliente',
            'Orina 10 Paneles o Folículo Capilar',
            'Ingreso a Planta, Contratistas, Pruebas Aleatorias',
          ],
          [
            'Construcción y Manufactura',
            'OSHA / Código de Trabajo de TX',
            'Orina 5 o 10 Paneles',
            'Pre-empleo, Lesión en Obra, Sospecha Razonable',
          ],
        ],
        note: 'L&T Solutions administra programas federales obligatorios DOT y programas personalizados no-DOT para empresas.',
      },
      {
        type: 'steps',
        bg: 'lavender',
        title: 'Cómo Crear su Cuenta de Empresa en 3 Pasos',
        intro: 'Inscriba su flota o empresa de manera rápida y sin complicaciones.',
        steps: [
          {
            title: 'Registro de Cuenta',
            text: 'Contáctenos para crear su perfil de empresa, designar los contactos DER e indicar los paneles necesarios.',
          },
          {
            title: 'Subir Lista de Empleados',
            text: 'Suba su lista de choferes o empleados activos a nuestro sistema de selección aleatoria.',
          },
          {
            title: 'Servicio Disponible de Inmediato',
            text: 'Envíe empleados a nuestra clínica en Marshall o llame a nuestra línea móvil 24/7 cuando necesite pruebas.',
          },
        ],
      },
      {
        type: 'faq',
        title: 'Preguntas Frecuentes sobre Cumplimiento DOT',
        items: [
          {
            q: '¿Un chofer de camión independiente necesita unirse a un consorcio DOT?',
            a: 'Sí. Las regulaciones FMCSA prohíben que los choferes CDL independientes administren su propio grupo de selección aleatoria. Deben inscribirse en un consorcio autorizado como L&T Solutions.',
          },
          {
            q: '¿Cuándo exige la norma DOT una prueba post-accidente?',
            a: 'Según FMCSA, se requiere prueba post-accidente si el incidente involucra una víctima mortal, o si el chofer recibe una infracción de tránsito Y un vehículo es remolcado o alguien recibe atención médica.',
          },
          {
            q: '¿Qué tan rápido llega un recolector móvil al lugar de un accidente?',
            a: 'Nuestra unidad de emergencia 24/7 tiene como meta llegar en aproximadamente 2 horas en Marshall, Longview y corredores del Este de Texas.',
          },
          {
            q: '¿Cómo acceden las empresas a los resultados de las pruebas?',
            a: 'Los resultados verificados por el médico MRO se entregan de forma segura por portal encriptado o correo confidencial en cuanto concluye la verificación.',
          },
        ],
      },
      {
        type: 'cta',
        title: 'Proteja su Flota y Garantice el Cumplimiento DOT Hoy Mismo',
        text: `Llame al ${SITE.phone.display} para inscribir a su empresa o solicitar un recolector móvil de emergencia ahora mismo.`,
        primary: { label: 'Inscribir Empresa', href: 'contact' },
        secondary: { label: `Llamar a Flotas: ${SITE.phone.display}`, href: 'tel' },
      },
    ],
  },
};

export default page;
