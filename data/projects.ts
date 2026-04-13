import { Project } from '../types';

// ─── Electricidad ──────────────────────────────────────────────────────────────
const imgElecResidencial  = new URL('../assets/img/servicios/electricidad/residencial.jpg', import.meta.url).href;
const imgElecIndustrial   = new URL('../assets/img/servicios/electricidad/industrial.jpg', import.meta.url).href;
const imgElecIluminacion  = new URL('../assets/img/servicios/electricidad/iluminacion.jpg', import.meta.url).href;
const imgElecGeneral      = new URL('../assets/img/servicios/electricidad/electricidad.jpg', import.meta.url).href;

// ─── Telecomunicaciones ────────────────────────────────────────────────────────
const imgTelecomEstructurado   = new URL('../assets/img/servicios/telecomunicaciones/estructurado.jpg', import.meta.url).href;
const imgTelecomGeneral        = new URL('../assets/img/servicios/telecomunicaciones/telecomunicacion.jpg', import.meta.url).href;
const imgTelecomTesla          = new URL('../assets/img/servicios/telecomunicaciones/tesla.jpg', import.meta.url).href;
const imgTelecomCableado       = new URL('../assets/img/servicios/telecomunicaciones/cableado.jpg', import.meta.url).href;

// ─── Remodelaciones ────────────────────────────────────────────────────────────
const imgRemoMarmol    = new URL('../assets/img/servicios/remodelaciones/marmol.jpg', import.meta.url).href;
const imgRemoLed       = new URL('../assets/img/servicios/remodelaciones/led.jpg', import.meta.url).href;
const imgRemoPasillo   = new URL('../assets/img/servicios/remodelaciones/pasillo.jpg', import.meta.url).href;
const imgRemoDetalle   = new URL('../assets/img/servicios/remodelaciones/remodelacion_detalle.jpg', import.meta.url).href;
const imgRemoVista     = new URL('../assets/img/servicios/remodelaciones/remodelacion_vista.jpeg', import.meta.url).href;

// ─── Impermeabilización ────────────────────────────────────────────────────────
const imgImperAntes    = new URL('../assets/img/servicios/impermeabilizacion/imper_antes.jpg', import.meta.url).href;
const imgImperProceso  = new URL('../assets/img/servicios/impermeabilizacion/imper_proceso.jpg', import.meta.url).href;
const imgImperFinal    = new URL('../assets/img/servicios/impermeabilizacion/imper_final.jpg', import.meta.url).href;
const imgImperPreAplica   = new URL('../assets/img/servicios/impermeabilizacion/prefabricado/aplica_imper_pre.jpg', import.meta.url).href;
const imgImperPreAntes    = new URL('../assets/img/servicios/impermeabilizacion/prefabricado/imper_pre_antes.jpg', import.meta.url).href;
const imgImperPreDetalles = new URL('../assets/img/servicios/impermeabilizacion/prefabricado/imper_pre_detalles.jpg', import.meta.url).href;

// ─── Galería / Equipo ──────────────────────────────────────────────────────────
const imgEquipoTrabajo = new URL('../assets/img/galeria/equipo_trabajo.jpg', import.meta.url).href;
const imgObraEquipo     = new URL('../assets/img/galeria/obra_equipo.jpg', import.meta.url).href;

// ─── Construcción / Espinal ────────────────────────────────────────────────────
const imgEspinal1 = new URL('../assets/img/galeria/espinal_1.jpg', import.meta.url).href;
const imgEspinal2 = new URL('../assets/img/galeria/espinal_2.jpg', import.meta.url).href;
const imgEspinal3 = new URL('../assets/img/galeria/espinal_3.jpg', import.meta.url).href;
const imgEspinal4 = new URL('../assets/img/galeria/espinal_4.jpg', import.meta.url).href;
const imgEspinal5 = new URL('../assets/img/galeria/espinal_5.jpg', import.meta.url).href;
const imgEspinal6 = new URL('../assets/img/galeria/espinal_6.png', import.meta.url).href;

// ─── Ingeniería / General ──────────────────────────────────────────────────────
const imgGeneral1Jpg = new URL('../assets/img/galeria/general_1.jpg', import.meta.url).href;
const imgGeneral1Png = new URL('../assets/img/galeria/general_1.png', import.meta.url).href;
const imgGeneral2Jpg = new URL('../assets/img/galeria/general_2.jpg', import.meta.url).href;
const imgGeneral2Png = new URL('../assets/img/galeria/general_2.png', import.meta.url).href;

// ─── Datos de proyectos ────────────────────────────────────────────────────────

export const projects: Project[] = [
  {
    id: '1',
    title: 'Residencial San Ángel',
    category: 'Electricidad',
    description: 'Instalación eléctrica residencial certificada',
    fullDescription: 'Implementación integral de cableado estructurado, iluminación LED inteligente y actualización de tableros de carga. El proyecto se ejecutó bajo la estricta observancia de la norma NOM-001-SEDE, garantizando no solo la funcionalidad sino la seguridad total de la infraestructura eléctrica residencial.',
    services: ['Cableado Estructurado', 'Tableros de Distribución', 'Iluminación LED', 'Certificación NOM'],
    imageUrl: imgElecResidencial,
    images: [
      { url: imgElecResidencial, caption: 'Instalación eléctrica residencial certificada bajo norma NOM', phase: 'Terminado' },
      { url: imgElecIluminacion, caption: 'Iluminación LED inteligente integrada en techos', phase: 'Fase 2' },
      { url: imgElecGeneral, caption: 'Tablero de distribución eléctrica de última generación', phase: 'Fase 1' },
    ],
    year: 2024,
    client: 'Privado',
    location: 'CDMX, MX',
  },
  {
    id: '2',
    title: 'Planta Industrial Electromex',
    category: 'Electricidad',
    description: 'Subestación y automatización industrial',
    fullDescription: 'Montaje especializado de subestación eléctrica de media tensión y cuadros de distribución de gran capacidad para planta de manufactura pesada. El alcance incluyó la instalación de sistemas de energía crítica (UPS) y la automatización de líneas de producción para optimizar el consumo energético.',
    services: ['Subestaciones', 'UPS Industrial', 'Cuadros de Control', 'Automatización'],
    imageUrl: imgElecIndustrial,
    images: [
      { url: imgElecIndustrial, caption: 'Subestación eléctrica industrial de media tensión', phase: 'Terminado' },
      { url: imgElecGeneral, caption: 'Cuadro de control principal para automatización industrial', phase: 'Fase 2' },
      { url: imgElecIluminacion, caption: 'Iluminación industrial de alta eficiencia energética', phase: 'Fase 1' },
      { url: imgElecResidencial, caption: 'Acometida eléctrica principal para planta de manufactura', phase: 'Fase 1' },
    ],
    year: 2023,
    client: 'Electromex S.A.',
    location: 'Toluca, Edo. Méx.',
  },
  {
    id: '3',
    title: 'Corporativo WiFi 6',
    category: 'Telecomunicaciones',
    description: 'Red de alta performance empresarial',
    fullDescription: 'Diseño y despliegue de infraestructura de red de datos Cat6a con tecnología de roaming WiFi 6 para cobertura total en áreas corporativas. Se integró un sistema de seguridad CCTV 4K con análisis de video inteligente Hikvision. Todos los nodos fueron certificados con equipo Fluke Networks para asegurar el cumplimiento de estándares internacionales.',
    services: ['WiFi 6 Enterprise', 'CCTV 4K Hikvision', 'Fibra Óptica', 'Certificación Fluke'],
    imageUrl: imgTelecomEstructurado,
    images: [
      { url: imgTelecomEstructurado, caption: 'Certificación de cableado estructurado Cat6a con equipo Fluke', phase: 'Terminado' },
      { url: imgTelecomCableado, caption: 'Tendido de cableado de red de alta velocidad', phase: 'Fase 2' },
      { url: imgTelecomTesla, caption: 'Nodos de red inalámbrica WiFi 6 instalados', phase: 'Fase 1' },
      { url: imgTelecomGeneral, caption: 'Centro de telecomunicaciones y rack principal de servidores', phase: 'Fase 1' },
    ],
    year: 2024,
    client: 'Tech Solutions Corp',
    location: 'Monterrey, NL',
  },
  {
    id: '4',
    title: 'Residencial Las Lomas',
    category: 'Remodelaciones',
    description: 'Remodelación de lujo con diseño 3D',
    fullDescription: 'Transformación arquitectónica de áreas sociales, cocina y baños principales. Se emplearon materiales de alta gama como mármol calacatta y grifería de diseño. El proceso incluyó una fase previa de renderizado 3D fotorrealista que permitió al cliente visualizar y ajustar cada detalle antes de la ejecución física.',
    services: ['Diseño 3D', 'Acabados en Mármol', 'Cocinas Integrales', 'Iluminación Ambiental'],
    imageUrl: imgRemoMarmol,
    images: [
      { url: imgRemoMarmol, caption: 'Acabados arquitectónicos de lujo en mármol Calacatta', phase: 'Terminado' },
      { url: imgRemoLed, caption: 'Iluminación LED ambiental integrada en plafones', phase: 'Fase 3' },
      { url: imgRemoPasillo, caption: 'Remodelación de pasillo con materiales de alta gama', phase: 'Fase 2' },
      { url: imgRemoDetalle, caption: 'Detalle de acabados finos en remodelación residencial', phase: 'Fase 2' },
      { url: imgRemoVista, caption: 'Vista general del espacio habitacional tras la remodelación', phase: 'Fase 1' },
    ],
    year: 2023,
    client: 'Privado',
    location: 'Monterrey, NL',
  },
  {
    id: '5',
    title: 'Nave Industrial Almacenes',
    category: 'Impermeabilización',
    description: 'Impermeabilización en Losa Maciza',
    fullDescription: 'Tratamiento técnico de superficies de concreto mediante la aplicación de sistemas multicapa. Se utilizaron membranas asfálticas de refuerzo y selladores acrílicos elastoméricos de alta reflectividad para reducir la temperatura interna de la nave. El proyecto cubre más de 2,500 m2 con garantía extendida.',
    services: ['Láminas Asfálticas', 'Membrana Líquida', 'Diagnóstico de Filtraciones', 'Sellado de Grietas'],
    imageUrl: imgImperFinal,
    images: [
      { url: imgImperAntes, caption: 'Estado inicial de la losa de concreto previo al tratamiento', phase: 'Diagnóstico' },
      { url: imgImperProceso, caption: 'Proceso de aplicación de membrana elastomérica de alta durabilidad', phase: 'En proceso' },
      { url: imgImperFinal, caption: 'Impermeabilización terminada con recubrimiento térmico reflectante', phase: 'Terminado' },
      { url: imgImperPreAntes, caption: 'Preparación de superficie para sistema de impermeabilización prefabricado', phase: 'Diagnóstico' },
      { url: imgImperPreAplica, caption: 'Aplicación técnica de rollo prefabricado asfáltico con soplete', phase: 'En proceso' },
      { url: imgImperPreDetalles, caption: 'Detalles técnicos de sellado y acabados en azotea industrial', phase: 'Terminado' },
    ],
    year: 2024,
    client: 'Almacenes Industriales S.A.',
    location: 'Monterrey, NL',
  },
  {
    id: '6',
    title: 'CCTV Centro Comercial',
    category: 'Telecomunicaciones',
    description: 'Sistema de videovigilancia IP',
    fullDescription: 'Implementación de un ecosistema de seguridad electrónica centralizado para un centro comercial de gran afluencia. Instalación de cámaras IP con visión nocturna avanzada, reconocimiento de placas vehiculares y centro de monitoreo 24/7 con capacidad de almacenamiento redundante.',
    services: ['Seguridad Electrónica', 'Reconocimiento Facial', 'Servidores de Video', 'Monitoreo Centralizado'],
    imageUrl: imgTelecomGeneral,
    images: [
      { url: imgTelecomGeneral, caption: 'Centro de monitoreo de videovigilancia IP operativo 24/7', phase: 'Terminado' },
      { url: imgTelecomCableado, caption: 'Instalación de infraestructura de red para cámaras de seguridad', phase: 'Fase 2' },
      { url: imgTelecomEstructurado, caption: 'Rack principal de servidores y almacenamiento de video NVR', phase: 'Fase 1' },
      { url: imgTelecomTesla, caption: 'Configuración de puntos de acceso y seguridad perimetral', phase: 'Fase 1' },
    ],
    year: 2024,
    client: 'Plaza Galerías',
    location: 'Guadalajara, JAL',
  },
  {
    id: '7',
    title: 'Nuestro Equipo',
    category: 'Equipo',
    description: 'El corazón de Grupo-AR: profesionales comprometidos',
    fullDescription: 'En Grupo-AR creemos que la excelencia técnica debe ir acompañada de una sólida base de valores. Nuestro equipo combina años de experiencia en campo con una visión fresca e innovadora, garantizando resultados que superan las expectativas.',
    services: ['Seguridad Industrial', 'Ética Profesional', 'Capacitación Continua'],
    imageUrl: imgEquipoTrabajo,
    images: [
      { url: imgEquipoTrabajo, caption: 'Personal técnico calificado y comprometido de Grupo-AR', phase: 'Core' },
      { url: imgObraEquipo, caption: 'Supervisión técnica de ingenieros en sitio de obra industrial', phase: 'Operaciones' },
    ],
    year: 2025,
    client: 'Interno',
    location: 'Sedes AR',
  },
  {
    id: '8',
    title: 'U. Deportiva El Espinal',
    category: 'Construcción',
    description: 'Proyecto de infraestructura deportiva y recreativa de alto impacto.',
    fullDescription: 'Construcción integral de complejo deportivo que incluye canchas profesionales, áreas recreativas y equipamiento de vanguardia. Un hito en infraestructura social para la comunidad.',
    services: ['Obra Civil', 'Infraestructura Deportiva', 'Urbanización', 'Instalaciones Especiales'],
    imageUrl: imgEspinal1,
    images: [
      { url: imgEspinal1, caption: 'Vista aérea general del complejo deportivo El Espinal finalizado', phase: 'Finalizado' },
      { url: imgEspinal2, caption: 'Canchas profesionales de uso múltiple e infraestructura de juego', phase: 'Finalizado' },
      { url: imgEspinal3, caption: 'Infraestructura de acceso principal y diseño arquitectónico', phase: 'Finalizado' },
      { url: imgEspinal4, caption: 'Áreas recreativas infantiles y espacios de convivencia social', phase: 'Finalizado' },
      { url: imgEspinal5, caption: 'Sistema de iluminación profesional para canchas exteriores', phase: 'Finalizado' },
      { url: imgEspinal6, caption: 'Detalle de equipamiento deportivo y acabados de alta calidad', phase: 'Finalizado' },
    ],
    year: 2024,
    client: 'Gubernamental',
    location: 'El Espinal, Oax.',
  },
  {
    id: '9',
    title: 'Obras Generales',
    category: 'Ingeniería',
    description: 'Diversos proyectos de infraestructura y mantenimiento especializado.',
    fullDescription: 'Ejecución de múltiples obras de ingeniería civil, mantenimiento industrial y proyectos de infraestructura menor con altos estándares de calidad y seguridad.',
    services: ['Ingeniería Civil', 'Mantenimiento Industrial', 'Supervisión de Obra'],
    imageUrl: imgGeneral1Jpg,
    images: [
      { url: imgGeneral1Jpg, caption: 'Trabajos de mantenimiento estructural preventivo y correctivo', phase: 'Operaciones' },
      { url: imgGeneral1Png, caption: 'Inspección técnica detallada para diagnóstico de ingeniería civil', phase: 'Diagnóstico' },
      { url: imgGeneral2Jpg, caption: 'Obras de refuerzo y saneamiento de cimentación estructural', phase: 'Construcción' },
      { url: imgGeneral2Png, caption: 'Acabados y recubrimientos industriales de alta resistencia', phase: 'Finalizado' },
    ],
    year: 2024,
    client: 'Varios',
    location: 'Región Sureste, MX',
  },
];

