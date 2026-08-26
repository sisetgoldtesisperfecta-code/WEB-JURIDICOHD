import { ServiceCategory, StrategyStep, SuccessCase, FAQItem } from '../types';

export const FIRM_INFO = {
  name: 'ASOJURIDICO.DT',
  subtitle: 'LEGAL E INMOBILIARIO',
  shortName: 'ASOJURIDICO.DT Abogados & Consultores',
  tagline: 'Más de 40 años de efectividad estratégica en materia Legal e Inmobiliaria',
  foundedYear: 1984,
  yearsOfExperience: '40+',
  resolvedCases: '+3,850',
  clientCountries: '18+',
  effectivenessRate: '99.4%',
  phoneMain: '+58 414 846 9825',
  phoneDirect: '+58 414 846 9825',
  whatsapp: '+58 414 846 9825',
  whatsappInternational: '+58 414 846 9825',
  email: 'asojuridico.dt@gmail.com',
  emailPrivate: 'asojuridico.dt@gmail.com',
  address: 'Caripe, Monagas, Venezuela',
  scheduleHours: 'Lunes a Viernes: 8:30 AM - 5:30 PM (Hora Venezuela VET / GMT-4)',
  scheduleInternational: 'Atención nacional e internacional remota disponible previa cita vía Zoom, Google Meet o Teams.',
  barRegistration: 'Inpreabogado N° 34.821 / Colegio de Abogados',
};

export const SERVICES_DATA: ServiceCategory[] = [
  {
    id: 'inmobiliario',
    title: 'Derecho Inmobiliario',
    subtitle: 'Nacional e Internacional',
    iconName: 'Building2',
    badge: 'Especialidad Insignia',
    summary: 'Auditoría preventiva exhaustiva, blindaje de compraventas, saneamiento de títulos de propiedad y estructuración de negocios inmobiliarios de alto valor en Venezuela y el extranjero.',
    keyPoints: [
      'Due Diligence Registral y Catastral preventivo ante el SAREN',
      'Compraventa y Arrendamiento Comercial / Residencial',
      'Asesoría integral a Inversionistas Extranjeros y Diáspora',
      'Redacción de opciones de compra, arras y contratos blindados',
      'Saneamiento de títulos y liberación de gravámenes / hipotecas'
    ],
    subServices: [
      {
        title: 'Auditoría Legal Preventiva (Due Diligence)',
        description: 'Revisión exhaustiva de la tradición legal de 20 a 30 años del inmueble en el Registro Inmobiliario competente para verificar solvencia, gravámenes, medidas cautelares o litigios pendientes.',
        deliverables: ['Informe técnico de tradición legal', 'Verificación de solvencia tributaria y municipal', 'Certificado de gravámenes validado']
      },
      {
        title: 'Compraventa y Cierre de Transacciones',
        description: 'Estructuración y redacción de contratos definitivos de compraventa bajo los estándares legales venezolanos e internacionales, garantizando transferencias de dominio seguras.',
        deliverables: ['Documento protocolizado ante Registro Inmobiliario', 'Contratos preparatorios de opción a compra', 'Actas de entrega física y técnica']
      },
      {
        title: 'Asesoría a Inversionistas y No Residentes',
        description: 'Esquemas jurídicos para adquisición, administración o enajenación de activos inmobiliarios por parte de extranjeros o venezolanos residentes fuera del país sin requerir presencia física.',
        deliverables: ['Poderes especiales redactados y visados', 'Mecanismos de pago legalmente respaldados', 'Estructuras de tenencia patrimonial']
      },
      {
        title: 'Regularización y Saneamiento de Propiedades',
        description: 'Corrección de linderos, adjudicaciones, liberación de hipotecas vencidas, rectificación de áreas catastrales y titulación de inmuebles de larga data.',
        deliverables: ['Títulos supletorios', 'Cancelación de hipotecas en registro', 'Actualización de fichas catastrales']
      }
    ],
    commonDocuments: [
      'Documento de propiedad debidamente registrado',
      'Ficha catastral actualizada / Cédula catastral',
      'Solvencia municipal de derecho de frente',
      'Cédulas de identidad / Pasaportes vigentes',
      'RIF actualizado de las partes intervinientes'
    ],
    estimatedTimeline: '10 a 25 días hábiles según municipio y recaudos',
    featuredCase: 'Blindaje y protocolización de adquisición corporativa de edificio de oficinas en Caracas por $4.2M USD para fondo de inversión.'
  },
  {
    id: 'mercantil',
    title: 'Derecho Mercantil y Corporativo',
    subtitle: 'Sociedades y Negocios Globales',
    iconName: 'Briefcase',
    badge: 'Solidez Empresarial',
    summary: 'Constitución, reestructuración y blindaje de empresas nacionales y filiales extranjeras, redacción de contratos comerciales internacionales y asesoría societaria continua.',
    keyPoints: [
      'Constitución de Sociedades Mercantiles (C.A., S.A., S.R.L., Sucursales)',
      'Contratos Comerciales Nacionales e Internacionales',
      'Asambleas de Accionistas, Aumento de Capital y Venta de Acciones',
      'Gobierno Corporativo y Acuerdos de Socios (Shareholders Agreements)',
      'Asesoría legal continua (Retainer corporativo)'
    ],
    subServices: [
      {
        title: 'Constitución y Registro de Empresas',
        description: 'Estructuración societaria adaptada al objeto comercial, redacción de estatutos sociales y tramitación integral ante el Registro Mercantil correspondiente.',
        deliverables: ['Documento constitutivo-estatutario registrado', 'Libros societarios habilitados (Accionistas, Actas, Diario, Mayor)', 'Obtención de RIF mercantil']
      },
      {
        title: 'Contratación Comercial Internacional',
        description: 'Elaboración de contratos de distribución, franquicias, suministro transfronterizo, alianzas estratégicas (Joint Ventures) y acuerdos de confidencialidad (NDA).',
        deliverables: ['Contratos bilingües con cláusulas arbitrales internacionales', 'Protocolos de resolución de disputas', 'Garantías contractuales y de cumplimiento']
      },
      {
        title: 'Reorganización y M&A',
        description: 'Procesos de fusión, escisión, disolución, liquidación o compraventa de fondos de comercio y paquetes accionarios empresariales.',
        deliverables: ['Auditoría legal corporativa (Vendor/Buyer Due Diligence)', 'Contratos de compraventa de acciones', 'Actas de asamblea protocolizadas']
      },
      {
        title: 'Blindaje Patrimonial Corporativo',
        description: 'Separación patrimonial estratégica para proteger activos operativos e inmobiliarios de contingencias operativas o fiscales.',
        deliverables: ['Holding societario estructurado', 'Manuales de cumplimiento normativo (Compliance)', 'Políticas de control interno']
      }
    ],
    commonDocuments: [
      'Documentos de identidad de los socios y directores',
      'Cartas de aceptación de Comisario (con credenciales)',
      'Reserva de nombre mercantil aprobada',
      'Aporte de capital (inventario o depósito bancario)',
      'Comprobante de domicilio fiscal'
    ],
    estimatedTimeline: '12 a 20 días hábiles ante Registro Mercantil',
    featuredCase: 'Reestructuración y constitución de holding corporativo para grupo agroindustrial con operaciones en Venezuela y Panamá.'
  },
  {
    id: 'civil',
    title: 'Derecho Civil y Patrimonial',
    subtitle: 'Protección Familiar y Sucesoral',
    iconName: 'Scale',
    badge: 'Protección de Patrimonio',
    summary: 'Planificación sucesoral preventiva, redacción de testamentos, trámites hereditarios complejos, divorcios por mutuo acuerdo y regularización de patrimonios familiares.',
    keyPoints: [
      'Planificación Sucesoral y Declaración de Herederos Únicos y Universales',
      'Declaración Sucesoral ante el SENIAT y Liberación de Inmuebles',
      'Redacción y Protocolización de Testamentos Abiertos y Cerrados',
      'Divorcios de mutuo acuerdo y liquidación de comunidad conyugal',
      'Particiones de herencias y resolución de controversias familiares'
    ],
    subServices: [
      {
        title: 'Gestión Sucesoral Integral y SENIAT',
        description: 'Tramitación de la declaración sucesoral ante la administración tributaria, cálculo de impuestos sucesorales y emisión del Certificado de Solvencia Sucesoral para disponer de bienes.',
        deliverables: ['Declaración sucesoral SENIAT procesada', 'Certificado de solvencia sucesoral', 'Inscripción de nuevos titulares en registros']
      },
      {
        title: 'Planificación Sucesoral y Testamentos',
        description: 'Diseño de estructuras legales preventivas para asegurar una transición ordenada de bienes a futuras generaciones, minimizando cargas fiscales y disputas.',
        deliverables: ['Testamentos otorgados ante Notaría o Registro', 'Fideicomisos y esquemas de asignación preferente', 'Capitulaciones matrimoniales']
      },
      {
        title: 'Divorcios y Liquidación de Bienes',
        description: 'Asesoría y representación en procedimientos de divorcio por desafecto o mutuo acuerdo, con liquidación justa y blindada de la comunidad de gananciales.',
        deliverables: ['Sentencia de divorcio ejecutoriada', 'Convenio de partición de bienes conyugales', 'Modificación de titularidades registrales']
      },
      {
        title: 'Particiones Amigables y Litigiosas',
        description: 'Negociación y formalización de la división de patrimonios indivisos entre coherederos o copropietarios, evitando bloqueos legales prolongados.',
        deliverables: ['Documento de partición y adjudicación de cuotas', 'Registro de titularidades individuales', 'Acuerdos extrajudiciales formalizados']
      }
    ],
    commonDocuments: [
      'Acta de defunción del causante',
      'Actas de nacimiento de los herederos y acta de matrimonio',
      'Títulos de propiedad de todos los bienes integrantes del haber hereditario',
      'RIF sucesoral emitido por el SENIAT',
      'Estados de cuenta bancarios o avalúos si aplica'
    ],
    estimatedTimeline: '15 a 45 días según volumen de bienes del haber',
    featuredCase: 'Declaración y partición sucesoral de 14 inmuebles y 3 empresas comerciales entre herederos residentes en 4 países distintos.'
  },
  {
    id: 'tramites',
    title: 'Trámites y Gestión Documental',
    subtitle: 'Nacional y Validez Internacional',
    iconName: 'FileCheck',
    badge: 'Agilidad Transfronteriza',
    summary: 'Legalización, Apostilla de La Haya, visado de poderes consulares, certificaciones registrales ante SAREN y representación legal a distancia con máxima celeridad.',
    keyPoints: [
      'Apostilla de La Haya (Convenio de 1961) y Legalizaciones del MPPRE',
      'Poderes Generales y Especiales para compraventa y administración a distancia',
      'Búsqueda, copia certificada y habilitación de documentos en SAREN',
      'Certificados de antecedentes penales, partidas de nacimiento y títulos académicos',
      'Traducciones legales certificadas para consulados y embajadas'
    ],
    subServices: [
      {
        title: 'Apostilla de La Haya y Legalizaciones',
        description: 'Tramitación y gestión oficial de apostillas ante el Ministerio de Relaciones Exteriores para documentos civiles, mercantiles y académicos con plena validez en más de 125 países.',
        deliverables: ['Apostilla digital o física con código QR verificable', 'Legalización de firmas ante ministerios correspondientes', 'Revisión preventiva de formato']
      },
      {
        title: 'Redacción y Validación de Poderes a Distancia',
        description: 'Elaboración con técnica jurídica depurada de mandatos y poderes para ser otorgados ante consulados de Venezuela o notarios extranjeros con apostilla.',
        deliverables: ['Minuta técnica de poder con facultades expresas', 'Guía para protocolización en registros venezolanos', 'Asistencia para visado consular']
      },
      {
        title: 'Gestión Registral y Notarial SAREN',
        description: 'Obtención de copias certificadas de títulos, notas marginales, actas de asamblea antiguas y expedición de solvencias en los 24 estados del país.',
        deliverables: ['Copias certificadas y microfilmes expedidos', 'Búsquedas de antecedentes de titularidad', 'Homologaciones notariales']
      },
      {
        title: 'Traducciones Juradas Certificadas',
        description: 'Traducción oficial de documentos legales (español, inglés, francés, italiano, alemán) por intérpretes públicos juramentados.',
        deliverables: ['Documento traducido con sello de Intérprete Público', 'Validación para trámites consulares y bancarios', 'Apostilla de la traducción']
      }
    ],
    commonDocuments: [
      'Documento original en buen estado',
      'Copia de documento de identidad del solicitante',
      'Datos del otorgante y apoderado (para mandatos)',
      'País de destino donde surtirá efectos el trámite'
    ],
    estimatedTimeline: '3 a 10 días hábiles según tipo de trámite',
    featuredCase: 'Otorgamiento de poder especial en Madrid y ejecución de venta de inmueble en Caracas en menos de 14 días con fondos repatriados.'
  }
];

export const METHODOLOGY_STEPS: StrategyStep[] = [
  {
    number: '01',
    title: 'Diagnóstico Preventivo',
    tagline: 'Auditoría profunda sin cabos sueltos',
    description: 'Analizamos meticulosamente la documentación base, antecedentes registrales, gravámenes, estado civil y marco regulatorio vigente para identificar riesgos antes de dar cualquier paso.',
    details: [
      'Revisión minuciosa de títulos de propiedad y tradición legal',
      'Comprobación de solvencia fiscal municipal y SENIAT',
      'Identificación de alertas tempranas y contingencias de nulidad',
      'Evaluación de viabilidad y plazos reales de ejecución'
    ],
    icon: 'SearchCheck'
  },
  {
    number: '02',
    title: 'Estrategia Personalizada',
    tagline: 'Ingeniería jurídica a la medida de su caso',
    description: 'Diseñamos la ruta legal más eficiente, segura y optimizada fiscalmente, redactando instrumentos jurídicos con redacción rigurosa que blindan su patrimonio.',
    details: [
      'Estructuración contractual con cláusulas de protección robustas',
      'Optimización de costos registrales y cargas impositivas legales',
      'Definición de facultades precisas para trámites a distancia',
      'Planificación de contingencias y mecanismos de garantía'
    ],
    icon: 'Compass'
  },
  {
    number: '03',
    title: 'Ejecución Legal Segura',
    tagline: 'Protocolización y cierre definitivo',
    description: 'Gestionamos y representamos directamente ante registros, notarías e instancias correspondientes, garantizando la perfecta culminación y entrega de documentos definitivos.',
    details: [
      'Acompañamiento presencial o por poder en acto de firma',
      'Seguimiento continuo de protocolización ante SAREN',
      'Entrega de documentos originales certificados y digitales',
      'Garantía post-cierre y custodia de expediente confidencial'
    ],
    icon: 'ShieldCheck'
  }
];

export const SUCCESS_CASES: SuccessCase[] = [
  {
    id: 'caso-1',
    area: 'Derecho Inmobiliario Corporativo',
    title: 'Adquisición y Blindaje de Complejo Comercial en Caracas',
    clientType: 'Empresa / Inversionista',
    challenge: 'Un fondo de inversión requería adquirir un inmueble comercial de 3,200 m² con tradición compleja de 35 años, que presentaba 2 hipotecas antiguas no liberadas y copropietarios en el extranjero.',
    strategy: 'Ejecutamos un Due Diligence intensivo en 7 días, tramitamos la cancelación de gravámenes vencidos ante el Registro Inmobiliario de Chacao y redactamos poderes consulares específicos para los socios en España.',
    result: 'Cierre de la transacción por $3.8M USD en 21 días hábiles con tradición legal 100% saneada y posesión pacífica del inmueble.',
    location: 'Caracas, Venezuela',
    year: '2025',
    impactMetric: '100% libre de gravámenes'
  },
  {
    id: 'caso-2',
    area: 'Atención a la Diáspora / Gestión a Distancia',
    title: 'Venta de Residencia Familiar desde el Exterior sin Viajar',
    clientType: 'Venezolano en el Exterior',
    challenge: 'Familia radicada en Miami y Madrid necesitaba vender un apartamento en El Cafetal, Caracas, sin disponibilidad de viajar y con la sucesión de los padres pendiente de liquidar.',
    strategy: 'Consolidamos la declaración sucesoral ante el SENIAT, emitimos el RIF sucesoral, redactamos la minuta de poder especial consular y coordinamos la protocolización de venta con pago seguro verificado.',
    result: 'Proceso culminado en 18 días hábiles. Fondos recibidos con total trazabilidad legal y sin que los clientes salieran de sus países de residencia.',
    location: 'Miami / Madrid ➔ Caracas',
    year: '2026',
    impactMetric: '0 viajes requeridos'
  },
  {
    id: 'caso-3',
    area: 'Derecho Mercantil Transfronterizo',
    title: 'Estructuración Societaria para Empresa Multinacional de Logística',
    clientType: 'Empresa / Inversionista',
    challenge: 'Empresa logística panameña requería aperturar filial en Venezuela con capital mixto y contratos de distribución internacional que protegieran sus activos ante fluctuaciones cambiarias.',
    strategy: 'Diseño de estatutos con cláusulas de protección de inversión extranjera, registro mercantil expedito en Caracas y elaboración de contratos bilingües con sede arbitral internacional.',
    result: 'Compañía 100% operativa y habilitada legalmente para importar y operar activos en el territorio nacional en 15 días.',
    location: 'Panamá ➔ Caracas / La Guaira',
    year: '2025',
    impactMetric: '15 días a operación completa'
  },
  {
    id: 'caso-4',
    area: 'Derecho Civil y Sucesoral',
    title: 'Partición Amigable de Gran Patrimonio Familiar de 8 Inmuebles',
    clientType: 'Persona Natural',
    challenge: 'Seis herederos con disputas de más de 4 años sobre la adjudicación de 8 propiedades residenciales y comerciales en Miranda y Distrito Capital.',
    strategy: 'Mediación jurídica neutral, avalúo comercial certificado de cada bien y diseño de un acuerdo de partición extrajudicial equilibrado que satisfizo a todas las partes.',
    result: 'Protocolización unánime de las adjudicaciones individuales ante los respectivos registros inmobiliarios, evitando un litigio judicial de años.',
    location: 'Distrito Capital / Miranda',
    year: '2026',
    impactMetric: '4 años de conflicto resueltos'
  }
];

export const FAQ_DATA: FAQItem[] = [
  {
    id: 'faq-1',
    category: 'Internacional',
    question: '¿Puedo comprar, vender o administrar una propiedad en Venezuela si vivo en el exterior?',
    answer: 'Absolutamente sí. Más del 45% de nuestros clientes actuales residen en Estados Unidos, España, Panamá, Chile, Colombia y otros países. Estructuramos el proceso mediante un Poder Especial con facultades exactas otorgado ante el Consulado de Venezuela en su país o ante un Notario local con la debida Apostilla de La Haya. Nuestro escritorio se encarga de la protocolización y de la ejecución de la compraventa o trámite sin que usted deba viajar.'
  },
  {
    id: 'faq-2',
    category: 'Inmobiliario',
    question: '¿Qué es el Due Diligence o Auditoría Inmobiliaria y por qué es indispensable antes de firmar?',
    answer: 'Es la investigación jurídica profunda de los últimos 20 a 30 años de la historia registral del inmueble (tradición legal). En Venezuela, verificar únicamente la última copia del documento no basta: auditamos que no existan hipotecas ocultas, embargos, medidas de prohibición de enajenar y gravar, disputas hereditarias no resueltas o desalineaciones catastrales ante la Alcaldía. Nuestra auditoría garantiza que su inversión esté 100% blindada.'
  },
  {
    id: 'faq-3',
    category: 'Honorarios',
    question: '¿Cómo funciona la modalidad de cobro de honorarios y transparencia de costos?',
    answer: 'Trabajamos bajo una política de transparencia absoluta y presupuesto cerrado por escrito desde la primera evaluación. Antes de iniciar cualquier gestión, usted recibirá una propuesta formal detallando los honorarios profesionales por fases de cumplimiento, los aranceles fiscales oficiales (tasas del SAREN, timbres, SENIAT) y los tiempos estimados de entrega. No existen costos ocultos ni sorpresas.'
  },
  {
    id: 'faq-4',
    category: 'Inmobiliario',
    question: '¿Cómo se manejan las transacciones inmobiliarias y contratos en divisas bajo el marco legal venezolano 2026?',
    answer: 'La legislación venezolana y los criterios jurisprudenciales vigentes permiten plasmar pactos en moneda extranjera como moneda de cuenta o de pago, siempre que se redacten con la técnica jurídica adecuada para cumplir las normativas cambiarias y tributarias del SAREN y el BCV. En nuestro escritorio redactamos las cláusulas de pago con total precisión para evitar contingencias de nulidad o cobro indebido.'
  },
  {
    id: 'faq-5',
    category: 'General',
    question: '¿Cuáles son los tiempos estimados para protocolizar una compraventa o constituir una empresa?',
    answer: 'Una vez completado el diagnóstico y recaudada la documentación: una compraventa inmobiliaria típica con tradición saneada toma entre 10 y 20 días hábiles ante el Registro Inmobiliario; una constitución de empresa mercantil entre 12 y 18 días hábiles; y la gestión de una apostilla o poder entre 3 y 8 días hábiles según la vía de tramitación.'
  }
];

export const TESTIMONIALS = [
  {
    quote: 'Llevaba 3 años intentando regularizar y vender dos apartamentos en Caracas desde Madrid. El equipo del Escritorio Jurídico resolvió la sucesión, redactó el poder consular y cerró la venta en menos de un mes con total seguridad.',
    author: 'Ing. Carlos Mendoza R.',
    role: 'Empresario venezolano en España',
    service: 'Derecho Inmobiliario & Gestión a Distancia'
  },
  {
    quote: 'Para nuestra firma de inversión, la auditoría registral previa es innegociable. La experiencia de más de 40 años de estos abogados nos ha salvado de contingencias millonarias en adquisiciones comerciales.',
    author: 'Dra. Valentina Silveira',
    role: 'Directora de Inversiones - Grupo Capital',
    service: 'Due Diligence Inmobiliario Corporativo'
  },
  {
    quote: 'Transparencia, serenidad y rigor legal en cada paso. Manejaron la partición de bienes familiares de forma impecable, logrando acuerdos donde parecía imposible.',
    author: 'Lic. Roberto De Grazia',
    role: 'Cliente Particular',
    service: 'Planificación Sucesoral y Civil'
  }
];

export const TRUST_BADGES = [
  { label: '40+ Años de Trayectoria', detail: 'Fundado en 1984 con ética inquebrantable' },
  { label: 'Colegiatura & Legalidad', detail: 'Abogados inscritos en el Inpreabogado' },
  { label: 'Garantía de Confidencialidad', detail: 'Secreto profesional y protección de datos' },
  { label: 'Alcance Internacional', detail: 'Atención a clientes en más de 18 países' },
  { label: 'Cumplimiento Normativo 2026', detail: 'Alineado al marco legal vigente venezolano' }
];
