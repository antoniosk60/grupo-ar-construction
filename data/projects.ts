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

// ─── Nuevas Imágenes del Portafolio ──────────────────────────────────────────
const imgNueva1 = new URL('../assets/img/galeria/nuevas/IMG-20260419-WA0036.jpg', import.meta.url).href;
const imgNueva2 = new URL('../assets/img/galeria/nuevas/IMG-20260419-WA0037.jpg', import.meta.url).href;
const imgNueva3 = new URL('../assets/img/galeria/nuevas/IMG-20260419-WA0038.jpg', import.meta.url).href;
const imgNueva4 = new URL('../assets/img/galeria/nuevas/IMG-20260419-WA0039.jpg', import.meta.url).href;
const imgNueva5 = new URL('../assets/img/galeria/nuevas/IMG-20260419-WA0040.jpg', import.meta.url).href;
const imgNueva6 = new URL('../assets/img/galeria/nuevas/IMG-20260419-WA0041.jpg', import.meta.url).href;
const imgNueva7 = new URL('../assets/img/galeria/nuevas/IMG-20260419-WA0042.jpg', import.meta.url).href;
const imgNueva8 = new URL('../assets/img/galeria/nuevas/IMG-20260419-WA0043.jpg', import.meta.url).href;
const imgNueva9 = new URL('../assets/img/galeria/nuevas/IMG-20260419-WA0044.jpg', import.meta.url).href;
const imgNueva10 = new URL('../assets/img/galeria/nuevas/IMG-20260419-WA0045.jpg', import.meta.url).href;
const imgNueva11 = new URL('../assets/img/galeria/nuevas/IMG-20260419-WA0046.jpg', import.meta.url).href;
const imgNueva12 = new URL('../assets/img/galeria/nuevas/IMG-20260419-WA0047.jpg', import.meta.url).href;
const imgNueva13 = new URL('../assets/img/galeria/nuevas/IMG-20260419-WA0048.jpg', import.meta.url).href;
const imgNueva14 = new URL('../assets/img/galeria/nuevas/IMG-20260419-WA0049.jpg', import.meta.url).href;
const imgNueva15 = new URL('../assets/img/galeria/nuevas/IMG-20260419-WA0050.jpg', import.meta.url).href;
const imgNueva16 = new URL('../assets/img/galeria/nuevas/IMG-20260419-WA0051.jpg', import.meta.url).href;
const imgNueva17 = new URL('../assets/img/galeria/nuevas/IMG-20260419-WA0052.jpg', import.meta.url).href;
const imgNueva18 = new URL('../assets/img/galeria/nuevas/IMG-20260419-WA0053.jpg', import.meta.url).href;
const imgNueva19 = new URL('../assets/img/galeria/nuevas/IMG-20260419-WA0054.jpg', import.meta.url).href;
const imgNueva20 = new URL('../assets/img/galeria/nuevas/IMG-20260419-WA0055.jpg', import.meta.url).href;
const imgNueva21 = new URL('../assets/img/galeria/nuevas/IMG-20260419-WA0056.jpg', import.meta.url).href;
const imgNueva22 = new URL('../assets/img/galeria/nuevas/IMG-20260419-WA0057.jpg', import.meta.url).href;
const imgNueva23 = new URL('../assets/img/galeria/nuevas/IMG-20260419-WA0058.jpg', import.meta.url).href;
const imgNueva24 = new URL('../assets/img/galeria/nuevas/IMG-20260419-WA0059.jpg', import.meta.url).href;
const imgNueva25 = new URL('../assets/img/galeria/nuevas/IMG-20260419-WA0060.jpg', import.meta.url).href;
const imgNueva26 = new URL('../assets/img/galeria/nuevas/IMG-20260419-WA0061.jpg', import.meta.url).href;
const imgNueva27 = new URL('../assets/img/galeria/nuevas/IMG-20260419-WA0062.jpg', import.meta.url).href;
const imgNueva28 = new URL('../assets/img/galeria/nuevas/IMG-20260419-WA0063.jpg', import.meta.url).href;
const imgNueva29 = new URL('../assets/img/galeria/nuevas/IMG-20260419-WA0064.jpg', import.meta.url).href;
const imgNueva30 = new URL('../assets/img/galeria/nuevas/IMG-20260419-WA0065.jpg', import.meta.url).href;
const imgNueva31 = new URL('../assets/img/galeria/nuevas/IMG-20260419-WA0066.jpg', import.meta.url).href;
const imgNueva32 = new URL('../assets/img/galeria/nuevas/IMG-20260419-WA0067.jpg', import.meta.url).href;
const imgNueva33 = new URL('../assets/img/galeria/nuevas/IMG-20260419-WA0068.jpg', import.meta.url).href;
const imgNueva34 = new URL('../assets/img/galeria/nuevas/IMG-20260419-WA0069.jpg', import.meta.url).href;
const imgNueva35 = new URL('../assets/img/galeria/nuevas/IMG-20260419-WA0070.jpg', import.meta.url).href;
const imgNueva36 = new URL('../assets/img/galeria/nuevas/IMG-20260419-WA0071.jpg', import.meta.url).href;
const imgNueva37 = new URL('../assets/img/galeria/nuevas/IMG-20260419-WA0072.jpg', import.meta.url).href;
const imgNueva38 = new URL('../assets/img/galeria/nuevas/IMG-20260419-WA0073.jpg', import.meta.url).href;
const imgNueva39 = new URL('../assets/img/galeria/nuevas/IMG-20260419-WA0074.jpg', import.meta.url).href;
const imgNueva40 = new URL('../assets/img/galeria/nuevas/IMG-20260419-WA0075.jpg', import.meta.url).href;
const imgNueva41 = new URL('../assets/img/galeria/nuevas/IMG-20260419-WA0076.jpg', import.meta.url).href;
const imgNueva42 = new URL('../assets/img/galeria/nuevas/IMG-20260419-WA0077.jpg', import.meta.url).href;
const imgNueva43 = new URL('../assets/img/galeria/nuevas/IMG-20260419-WA0078.jpg', import.meta.url).href;
const imgNueva44 = new URL('../assets/img/galeria/nuevas/IMG-20260419-WA0079.jpg', import.meta.url).href;
const imgNueva45 = new URL('../assets/img/galeria/nuevas/IMG-20260419-WA0080.jpg', import.meta.url).href;
const imgNueva46 = new URL('../assets/img/galeria/nuevas/IMG-20260419-WA0081.jpg', import.meta.url).href;
const imgNueva47 = new URL('../assets/img/galeria/nuevas/IMG-20260419-WA0082.jpg', import.meta.url).href;
const imgNueva48 = new URL('../assets/img/galeria/nuevas/IMG-20260419-WA0083.jpg', import.meta.url).href;
const imgNueva49 = new URL('../assets/img/galeria/nuevas/IMG-20260419-WA0084.jpg', import.meta.url).href;
const imgNueva50 = new URL('../assets/img/galeria/nuevas/IMG-20260419-WA0085.jpg', import.meta.url).href;
const imgNueva51 = new URL('../assets/img/galeria/nuevas/IMG-20260419-WA0086.jpg', import.meta.url).href;
const imgNueva52 = new URL('../assets/img/galeria/nuevas/IMG-20260419-WA0087.jpg', import.meta.url).href;
const imgNueva53 = new URL('../assets/img/galeria/nuevas/IMG-20260419-WA0088.jpg', import.meta.url).href;
const imgNueva54 = new URL('../assets/img/galeria/nuevas/IMG-20260419-WA0089.jpg', import.meta.url).href;
const imgNueva55 = new URL('../assets/img/galeria/nuevas/IMG-20260419-WA0090.jpg', import.meta.url).href;
const imgNueva56 = new URL('../assets/img/galeria/nuevas/IMG-20260419-WA0091.jpg', import.meta.url).href;
const imgNueva57 = new URL('../assets/img/galeria/nuevas/IMG-20260419-WA0092.jpg', import.meta.url).href;
const imgNueva58 = new URL('../assets/img/galeria/nuevas/IMG-20260419-WA0093.jpg', import.meta.url).href;
const imgNueva59 = new URL('../assets/img/galeria/nuevas/IMG-20260419-WA0094.jpg', import.meta.url).href;
const imgNueva60 = new URL('../assets/img/galeria/nuevas/IMG-20260419-WA0095.jpg', import.meta.url).href;
const imgNueva61 = new URL('../assets/img/galeria/nuevas/IMG-20260419-WA0096.jpg', import.meta.url).href;
const imgNueva62 = new URL('../assets/img/galeria/nuevas/IMG-20260419-WA0097.jpg', import.meta.url).href;
const imgNueva63 = new URL('../assets/img/galeria/nuevas/IMG-20260419-WA0098.jpg', import.meta.url).href;
const imgNueva64 = new URL('../assets/img/galeria/nuevas/IMG-20260419-WA0099.jpg', import.meta.url).href;
const imgNueva65 = new URL('../assets/img/galeria/nuevas/IMG-20260419-WA0100.jpg', import.meta.url).href;
const imgNueva66 = new URL('../assets/img/galeria/nuevas/IMG-20260419-WA0101.jpg', import.meta.url).href;
const imgNueva67 = new URL('../assets/img/galeria/nuevas/IMG-20260419-WA0102.jpg', import.meta.url).href;
const imgNueva68 = new URL('../assets/img/galeria/nuevas/IMG-20260419-WA0103.jpg', import.meta.url).href;
const imgNueva69 = new URL('../assets/img/galeria/nuevas/IMG-20260419-WA0104.jpg', import.meta.url).href;
const imgNueva70 = new URL('../assets/img/galeria/nuevas/IMG-20260419-WA0105.jpg', import.meta.url).href;
const imgNueva71 = new URL('../assets/img/galeria/nuevas/IMG-20260419-WA0106.jpg', import.meta.url).href;
const imgNueva72 = new URL('../assets/img/galeria/nuevas/IMG-20260419-WA0107.jpg', import.meta.url).href;
const imgNueva73 = new URL('../assets/img/galeria/nuevas/IMG-20260419-WA0108.jpg', import.meta.url).href;
const imgNueva74 = new URL('../assets/img/galeria/nuevas/IMG-20260419-WA0109.jpg', import.meta.url).href;
const imgNueva75 = new URL('../assets/img/galeria/nuevas/IMG-20260419-WA0110.jpg', import.meta.url).href;
const imgNueva76 = new URL('../assets/img/galeria/nuevas/IMG-20260419-WA0111.jpg', import.meta.url).href;
const imgNueva77 = new URL('../assets/img/galeria/nuevas/IMG-20260419-WA0112.jpg', import.meta.url).href;
const imgNueva78 = new URL('../assets/img/galeria/nuevas/IMG-20260419-WA0113.jpg', import.meta.url).href;
const imgNueva79 = new URL('../assets/img/galeria/nuevas/IMG-20260419-WA0114.jpg', import.meta.url).href;
const imgNueva80 = new URL('../assets/img/galeria/nuevas/IMG-20260419-WA0115.jpg', import.meta.url).href;
const imgNueva81 = new URL('../assets/img/galeria/nuevas/IMG-20260419-WA0116.jpg', import.meta.url).href;
const imgNueva82 = new URL('../assets/img/galeria/nuevas/IMG-20260419-WA0117.jpg', import.meta.url).href;
const imgNueva83 = new URL('../assets/img/galeria/nuevas/IMG-20260419-WA0118.jpg', import.meta.url).href;
const imgNueva84 = new URL('../assets/img/galeria/nuevas/IMG-20260419-WA0119.jpg', import.meta.url).href;
const imgNueva85 = new URL('../assets/img/galeria/nuevas/IMG-20260419-WA0120.jpg', import.meta.url).href;
const imgNueva86 = new URL('../assets/img/galeria/nuevas/IMG-20260419-WA0121.jpg', import.meta.url).href;
const imgNueva87 = new URL('../assets/img/galeria/nuevas/IMG-20260419-WA0122.jpg', import.meta.url).href;
const imgNueva88 = new URL('../assets/img/galeria/nuevas/IMG-20260419-WA0123.jpg', import.meta.url).href;
const imgNueva89 = new URL('../assets/img/galeria/nuevas/IMG-20260419-WA0124.jpg', import.meta.url).href;
const imgNueva90 = new URL('../assets/img/galeria/nuevas/IMG-20260419-WA0125.jpg', import.meta.url).href;
const imgNueva91 = new URL('../assets/img/galeria/nuevas/IMG-20260419-WA0126.jpg', import.meta.url).href;
const imgNueva92 = new URL('../assets/img/galeria/nuevas/IMG-20260419-WA0127.jpg', import.meta.url).href;
const imgNueva93 = new URL('../assets/img/galeria/nuevas/IMG-20260419-WA0128.jpg', import.meta.url).href;
const imgNueva94 = new URL('../assets/img/galeria/nuevas/IMG-20260419-WA0129.jpg', import.meta.url).href;
const imgNueva95 = new URL('../assets/img/galeria/nuevas/IMG-20260419-WA0130.jpg', import.meta.url).href;
const imgNueva96 = new URL('../assets/img/galeria/nuevas/IMG-20260419-WA0131.jpg', import.meta.url).href;
const imgNueva97 = new URL('../assets/img/galeria/nuevas/IMG-20260419-WA0132.jpg', import.meta.url).href;
const imgNueva98 = new URL('../assets/img/galeria/nuevas/IMG-20260419-WA0133.jpg', import.meta.url).href;
const imgNueva99 = new URL('../assets/img/galeria/nuevas/IMG-20260419-WA0134.jpg', import.meta.url).href;
const imgNueva100 = new URL('../assets/img/galeria/nuevas/IMG-20260419-WA0135.jpg', import.meta.url).href;
const imgNueva101 = new URL('../assets/img/galeria/nuevas/IMG-20260419-WA0136.jpg', import.meta.url).href;
const imgNueva102 = new URL('../assets/img/galeria/nuevas/IMG-20260419-WA0137.jpg', import.meta.url).href;
const imgNueva103 = new URL('../assets/img/galeria/nuevas/IMG-20260419-WA0138.jpg', import.meta.url).href;
const imgNueva104 = new URL('../assets/img/galeria/nuevas/IMG-20260419-WA0139.jpg', import.meta.url).href;
const imgNueva105 = new URL('../assets/img/galeria/nuevas/IMG-20260419-WA0140.jpg', import.meta.url).href;
const imgNueva106 = new URL('../assets/img/galeria/nuevas/IMG-20260419-WA0141.jpg', import.meta.url).href;
const imgNueva107 = new URL('../assets/img/galeria/nuevas/IMG-20260419-WA0142.jpg', import.meta.url).href;
const imgNueva108 = new URL('../assets/img/galeria/nuevas/IMG-20260419-WA0143.jpg', import.meta.url).href;
const imgNueva109 = new URL('../assets/img/galeria/nuevas/IMG-20260419-WA0144.jpg', import.meta.url).href;
const imgNueva110 = new URL('../assets/img/galeria/nuevas/IMG-20260419-WA0145.jpg', import.meta.url).href;
const imgNueva111 = new URL('../assets/img/galeria/nuevas/IMG-20260419-WA0146.jpg', import.meta.url).href;
const imgNueva112 = new URL('../assets/img/galeria/nuevas/IMG-20260419-WA0147.jpg', import.meta.url).href;

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
  {
  id: "9",
  title: "Obras Recientes",
  category: "Ingeniería",
  description: "Compendio de proyectos de construcción y renovación 2024-2025",
  fullDescription: "Esta galería reúne una selección de nuestras intervenciones más recientes en diversos sectores, desde remodelaciones residenciales hasta infraestructura industrial, destacando nuestro compromiso con la calidad y el detalle técnico.",
  services: ["Ingeniería", "Construcción", "Remodelación"],
  imageUrl: imgNueva1,
  images: [
    { url: imgNueva1, caption: "Proyecto de renovación y construcción - Detalle 1", phase: "Finalizado" },
    { url: imgNueva2, caption: "Proyecto de renovación y construcción - Detalle 2", phase: "Finalizado" },
    { url: imgNueva3, caption: "Proyecto de renovación y construcción - Detalle 3", phase: "Finalizado" },
    { url: imgNueva4, caption: "Proyecto de renovación y construcción - Detalle 4", phase: "Finalizado" },
    { url: imgNueva5, caption: "Proyecto de renovación y construcción - Detalle 5", phase: "Finalizado" },
    { url: imgNueva6, caption: "Proyecto de renovación y construcción - Detalle 6", phase: "Finalizado" },
    { url: imgNueva7, caption: "Proyecto de renovación y construcción - Detalle 7", phase: "Finalizado" },
    { url: imgNueva8, caption: "Proyecto de renovación y construcción - Detalle 8", phase: "Finalizado" },
    { url: imgNueva9, caption: "Proyecto de renovación y construcción - Detalle 9", phase: "Finalizado" },
    { url: imgNueva10, caption: "Proyecto de renovación y construcción - Detalle 10", phase: "Finalizado" },
    { url: imgNueva11, caption: "Proyecto de renovación y construcción - Detalle 11", phase: "Finalizado" },
    { url: imgNueva12, caption: "Proyecto de renovación y construcción - Detalle 12", phase: "Finalizado" },
    { url: imgNueva13, caption: "Proyecto de renovación y construcción - Detalle 13", phase: "Finalizado" },
    { url: imgNueva14, caption: "Proyecto de renovación y construcción - Detalle 14", phase: "Finalizado" },
    { url: imgNueva15, caption: "Proyecto de renovación y construcción - Detalle 15", phase: "Finalizado" },
    { url: imgNueva16, caption: "Proyecto de renovación y construcción - Detalle 16", phase: "Finalizado" },
    { url: imgNueva17, caption: "Proyecto de renovación y construcción - Detalle 17", phase: "Finalizado" },
    { url: imgNueva18, caption: "Proyecto de renovación y construcción - Detalle 18", phase: "Finalizado" },
    { url: imgNueva19, caption: "Proyecto de renovación y construcción - Detalle 19", phase: "Finalizado" },
    { url: imgNueva20, caption: "Proyecto de renovación y construcción - Detalle 20", phase: "Finalizado" },
    { url: imgNueva21, caption: "Proyecto de renovación y construcción - Detalle 21", phase: "Finalizado" },
    { url: imgNueva22, caption: "Proyecto de renovación y construcción - Detalle 22", phase: "Finalizado" },
    { url: imgNueva23, caption: "Proyecto de renovación y construcción - Detalle 23", phase: "Finalizado" },
    { url: imgNueva24, caption: "Proyecto de renovación y construcción - Detalle 24", phase: "Finalizado" },
    { url: imgNueva25, caption: "Proyecto de renovación y construcción - Detalle 25", phase: "Finalizado" },
    { url: imgNueva26, caption: "Proyecto de renovación y construcción - Detalle 26", phase: "Finalizado" },
    { url: imgNueva27, caption: "Proyecto de renovación y construcción - Detalle 27", phase: "Finalizado" },
    { url: imgNueva28, caption: "Proyecto de renovación y construcción - Detalle 28", phase: "Finalizado" },
    { url: imgNueva29, caption: "Proyecto de renovación y construcción - Detalle 29", phase: "Finalizado" },
    { url: imgNueva30, caption: "Proyecto de renovación y construcción - Detalle 30", phase: "Finalizado" },
    { url: imgNueva31, caption: "Proyecto de renovación y construcción - Detalle 31", phase: "Finalizado" },
    { url: imgNueva32, caption: "Proyecto de renovación y construcción - Detalle 32", phase: "Finalizado" },
    { url: imgNueva33, caption: "Proyecto de renovación y construcción - Detalle 33", phase: "Finalizado" },
    { url: imgNueva34, caption: "Proyecto de renovación y construcción - Detalle 34", phase: "Finalizado" },
    { url: imgNueva35, caption: "Proyecto de renovación y construcción - Detalle 35", phase: "Finalizado" },
    { url: imgNueva36, caption: "Proyecto de renovación y construcción - Detalle 36", phase: "Finalizado" },
    { url: imgNueva37, caption: "Proyecto de renovación y construcción - Detalle 37", phase: "Finalizado" },
    { url: imgNueva38, caption: "Proyecto de renovación y construcción - Detalle 38", phase: "Finalizado" },
    { url: imgNueva39, caption: "Proyecto de renovación y construcción - Detalle 39", phase: "Finalizado" },
    { url: imgNueva40, caption: "Proyecto de renovación y construcción - Detalle 40", phase: "Finalizado" },
    { url: imgNueva41, caption: "Proyecto de renovación y construcción - Detalle 41", phase: "Finalizado" },
    { url: imgNueva42, caption: "Proyecto de renovación y construcción - Detalle 42", phase: "Finalizado" },
    { url: imgNueva43, caption: "Proyecto de renovación y construcción - Detalle 43", phase: "Finalizado" },
    { url: imgNueva44, caption: "Proyecto de renovación y construcción - Detalle 44", phase: "Finalizado" },
    { url: imgNueva45, caption: "Proyecto de renovación y construcción - Detalle 45", phase: "Finalizado" },
    { url: imgNueva46, caption: "Proyecto de renovación y construcción - Detalle 46", phase: "Finalizado" },
    { url: imgNueva47, caption: "Proyecto de renovación y construcción - Detalle 47", phase: "Finalizado" },
    { url: imgNueva48, caption: "Proyecto de renovación y construcción - Detalle 48", phase: "Finalizado" },
    { url: imgNueva49, caption: "Proyecto de renovación y construcción - Detalle 49", phase: "Finalizado" },
    { url: imgNueva50, caption: "Proyecto de renovación y construcción - Detalle 50", phase: "Finalizado" },
    { url: imgNueva51, caption: "Proyecto de renovación y construcción - Detalle 51", phase: "Finalizado" },
    { url: imgNueva52, caption: "Proyecto de renovación y construcción - Detalle 52", phase: "Finalizado" },
    { url: imgNueva53, caption: "Proyecto de renovación y construcción - Detalle 53", phase: "Finalizado" },
    { url: imgNueva54, caption: "Proyecto de renovación y construcción - Detalle 54", phase: "Finalizado" },
    { url: imgNueva55, caption: "Proyecto de renovación y construcción - Detalle 55", phase: "Finalizado" },
    { url: imgNueva56, caption: "Proyecto de renovación y construcción - Detalle 56", phase: "Finalizado" },
    { url: imgNueva57, caption: "Proyecto de renovación y construcción - Detalle 57", phase: "Finalizado" },
    { url: imgNueva58, caption: "Proyecto de renovación y construcción - Detalle 58", phase: "Finalizado" },
    { url: imgNueva59, caption: "Proyecto de renovación y construcción - Detalle 59", phase: "Finalizado" },
    { url: imgNueva60, caption: "Proyecto de renovación y construcción - Detalle 60", phase: "Finalizado" },
    { url: imgNueva61, caption: "Proyecto de renovación y construcción - Detalle 61", phase: "Finalizado" },
    { url: imgNueva62, caption: "Proyecto de renovación y construcción - Detalle 62", phase: "Finalizado" },
    { url: imgNueva63, caption: "Proyecto de renovación y construcción - Detalle 63", phase: "Finalizado" },
    { url: imgNueva64, caption: "Proyecto de renovación y construcción - Detalle 64", phase: "Finalizado" },
    { url: imgNueva65, caption: "Proyecto de renovación y construcción - Detalle 65", phase: "Finalizado" },
    { url: imgNueva66, caption: "Proyecto de renovación y construcción - Detalle 66", phase: "Finalizado" },
    { url: imgNueva67, caption: "Proyecto de renovación y construcción - Detalle 67", phase: "Finalizado" },
    { url: imgNueva68, caption: "Proyecto de renovación y construcción - Detalle 68", phase: "Finalizado" },
    { url: imgNueva69, caption: "Proyecto de renovación y construcción - Detalle 69", phase: "Finalizado" },
    { url: imgNueva70, caption: "Proyecto de renovación y construcción - Detalle 70", phase: "Finalizado" },
    { url: imgNueva71, caption: "Proyecto de renovación y construcción - Detalle 71", phase: "Finalizado" },
    { url: imgNueva72, caption: "Proyecto de renovación y construcción - Detalle 72", phase: "Finalizado" },
    { url: imgNueva73, caption: "Proyecto de renovación y construcción - Detalle 73", phase: "Finalizado" },
    { url: imgNueva74, caption: "Proyecto de renovación y construcción - Detalle 74", phase: "Finalizado" },
    { url: imgNueva75, caption: "Proyecto de renovación y construcción - Detalle 75", phase: "Finalizado" },
    { url: imgNueva76, caption: "Proyecto de renovación y construcción - Detalle 76", phase: "Finalizado" },
    { url: imgNueva77, caption: "Proyecto de renovación y construcción - Detalle 77", phase: "Finalizado" },
    { url: imgNueva78, caption: "Proyecto de renovación y construcción - Detalle 78", phase: "Finalizado" },
    { url: imgNueva79, caption: "Proyecto de renovación y construcción - Detalle 79", phase: "Finalizado" },
    { url: imgNueva80, caption: "Proyecto de renovación y construcción - Detalle 80", phase: "Finalizado" },
    { url: imgNueva81, caption: "Proyecto de renovación y construcción - Detalle 81", phase: "Finalizado" },
    { url: imgNueva82, caption: "Proyecto de renovación y construcción - Detalle 82", phase: "Finalizado" },
    { url: imgNueva83, caption: "Proyecto de renovación y construcción - Detalle 83", phase: "Finalizado" },
    { url: imgNueva84, caption: "Proyecto de renovación y construcción - Detalle 84", phase: "Finalizado" },
    { url: imgNueva85, caption: "Proyecto de renovación y construcción - Detalle 85", phase: "Finalizado" },
    { url: imgNueva86, caption: "Proyecto de renovación y construcción - Detalle 86", phase: "Finalizado" },
    { url: imgNueva87, caption: "Proyecto de renovación y construcción - Detalle 87", phase: "Finalizado" },
    { url: imgNueva88, caption: "Proyecto de renovación y construcción - Detalle 88", phase: "Finalizado" },
    { url: imgNueva89, caption: "Proyecto de renovación y construcción - Detalle 89", phase: "Finalizado" },
    { url: imgNueva90, caption: "Proyecto de renovación y construcción - Detalle 90", phase: "Finalizado" },
    { url: imgNueva91, caption: "Proyecto de renovación y construcción - Detalle 91", phase: "Finalizado" },
    { url: imgNueva92, caption: "Proyecto de renovación y construcción - Detalle 92", phase: "Finalizado" },
    { url: imgNueva93, caption: "Proyecto de renovación y construcción - Detalle 93", phase: "Finalizado" },
    { url: imgNueva94, caption: "Proyecto de renovación y construcción - Detalle 94", phase: "Finalizado" },
    { url: imgNueva95, caption: "Proyecto de renovación y construcción - Detalle 95", phase: "Finalizado" },
    { url: imgNueva96, caption: "Proyecto de renovación y construcción - Detalle 96", phase: "Finalizado" },
    { url: imgNueva97, caption: "Proyecto de renovación y construcción - Detalle 97", phase: "Finalizado" },
    { url: imgNueva98, caption: "Proyecto de renovación y construcción - Detalle 98", phase: "Finalizado" },
    { url: imgNueva99, caption: "Proyecto de renovación y construcción - Detalle 99", phase: "Finalizado" },
    { url: imgNueva100, caption: "Proyecto de renovación y construcción - Detalle 100", phase: "Finalizado" },
    { url: imgNueva101, caption: "Proyecto de renovación y construcción - Detalle 101", phase: "Finalizado" },
    { url: imgNueva102, caption: "Proyecto de renovación y construcción - Detalle 102", phase: "Finalizado" },
    { url: imgNueva103, caption: "Proyecto de renovación y construcción - Detalle 103", phase: "Finalizado" },
    { url: imgNueva104, caption: "Proyecto de renovación y construcción - Detalle 104", phase: "Finalizado" },
    { url: imgNueva105, caption: "Proyecto de renovación y construcción - Detalle 105", phase: "Finalizado" },
    { url: imgNueva106, caption: "Proyecto de renovación y construcción - Detalle 106", phase: "Finalizado" },
    { url: imgNueva107, caption: "Proyecto de renovación y construcción - Detalle 107", phase: "Finalizado" },
    { url: imgNueva108, caption: "Proyecto de renovación y construcción - Detalle 108", phase: "Finalizado" },
    { url: imgNueva109, caption: "Proyecto de renovación y construcción - Detalle 109", phase: "Finalizado" },
    { url: imgNueva110, caption: "Proyecto de renovación y construcción - Detalle 110", phase: "Finalizado" },
    { url: imgNueva111, caption: "Proyecto de renovación y construcción - Detalle 111", phase: "Finalizado" },
    { url: imgNueva112, caption: "Proyecto de renovación y construcción - Detalle 112", phase: "Finalizado" },
  ],
  year: 2025,
  client: "Diversos",
  location: "México",
},
];

