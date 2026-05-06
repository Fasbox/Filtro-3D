export const filterSpaces = [
  {
    id: 1,
    title: 'Espacio superior',
    position: [0, 1.15, 0],
    color: '#c3b47d',
    height: 0.2,
    removable: false,
    textureType: 'top',
    material: {
      roughness: 0.72,
      metalness: 0.06,
      clearcoat: 0.15,
      clearcoatRoughness: 0.6
    },
    description: 'Espacio entre la tapa superior y el prefiltro mecánico, donde se reparte el agua antes de la rejilla.',
    benefits: ['Distribuye el agua de entrada', 'Protege al prefiltro mecánico'],
    lifespan: 'No removible'
  },
  {
    id: 2,
    title: 'Cámara de piedras removibles',
    position: [0, 0.55, 0],
    inventoryPosition: [-2, 0.75, 0],
    color: '#7c6a53',
    height: 0.35,
    removable: true,
    textureType: 'stones',
    material: {
      roughness: 0.92,
      metalness: 0.05,
      clearcoat: 0.02,
      clearcoatRoughness: 0.9
    },
    description: 'Lecho de piedras extraíble ubicado entre el prefiltro mecánico y la cámara biológica.',
    benefits: ['Atrapa partículas finas', 'Distribuye el agua del filtro', 'Fácil de retirar y limpiar'],
    lifespan: 'Revisión cada 2 meses'
  },
  {
    id: 3,
    title: 'Cámara biológica removible',
    position: [0, 0.05, 0],
    inventoryPosition: [-2, 0.1, 0],
    color: '#5f8f4b',
    height: 0.4,
    removable: true,
    textureType: 'bio',
    material: {
      roughness: 0.78,
      metalness: 0.05,
      clearcoat: 0.12,
      clearcoatRoughness: 0.7
    },
    description: 'Módulo extraíble donde actúan microorganismos beneficiosos para degradar materia orgánica.',
    benefits: ['Tratamiento biológico activo', 'Reduce materia orgánica', 'Mejora la calidad del agua'],
    lifespan: 'Reemplazo cada 6-12 meses'
  },
  {
    id: 4,
    title: 'Cámara de carbón activado',
    position: [0, -0.5, 0],
    inventoryPosition: [-2, -1.0, 0],
    color: '#272f36',
    height: 0.4,
    removable: true,
    textureType: 'charcoal',
    material: {
      roughness: 0.96,
      metalness: 0.02,
      clearcoat: 0.05,
      clearcoatRoughness: 0.8
    },
    description: 'Cámara final que elimina impurezas, malos olores y mejora el sabor del agua.',
    benefits: ['Elimina cloro y olor', 'Absorbe contaminantes', 'Mejora la claridad'],
    lifespan: 'Reemplazo cada 6 meses'
  },
  {
    id: 5,
    title: 'Zona de agua filtrada',
    position: [0, -1.05, 0],
    color: '#0f5871',
    height: 0.25,
    removable: false,
    textureType: 'water',
    material: {
      roughness: 0.22,
      metalness: 0.05,
      clearcoat: 0.35,
      clearcoatRoughness: 0.15,
      transmission: 0.85,
      opacity: 0.55,
      transparent: true
    },
    description: 'Espacio inferior donde se acumula el agua ya filtrada antes de salir por el grifo.',
    benefits: ['Agua lista para salida', 'Muestra el nivel filtrado'],
    lifespan: 'No removible'
  }
]

export const systemSpaces = [
  {
    id: 1,
    title: 'Espacio superior',
    description: 'Espacio entre la tapa superior y el prefiltro mecánico donde se reparte el agua.'
  },
  {
    id: 2,
    title: 'Cámara de piedras removibles',
    description: 'Lecho de piedras extraíble que distribuye el flujo antes de la cámara biológica.'
  },
  {
    id: 3,
    title: 'Cámara biológica removible',
    description: 'Cámara extraíble donde actúan microorganismos beneficiosos.'
  },
  {
    id: 4,
    title: 'Cámara de carbón activado',
    description: 'Cámara final que elimina impurezas y mejora el sabor del agua.'
  },
  {
    id: 5,
    title: 'Zona de agua filtrada',
    description: 'Zona final en el fondo donde se acumula el agua purificada.'
  }
]

export const systemParts = [
  {
    id: 1,
    title: 'Tubería de entrada',
    description: 'Conexión por donde entra el agua al sistema.'
  },
  {
    id: 2,
    title: 'Tubería de distribución',
    description: 'Distribuye el agua entre las diferentes cámaras del filtro.'
  },
  {
    id: 3,
    title: 'Base del sistema',
    description: 'Base resistente que soporta todo el sistema y almacena el agua filtrada.'
  },
  {
    id: 4,
    title: 'Empaques de sellado',
    description: 'Garantizan que no haya fugas entre las conexiones.'
  },
  {
    id: 5,
    title: 'Adaptador para grifo',
    description: 'Permite conectar el sistema a diferentes tipos de grifos.'
  },
  {
    id: 6,
    title: 'Cartucho de microorganismos',
    description: 'Contiene microorganismos beneficiosos para el tratamiento biológico.'
  },
  {
    id: 7,
    title: 'Carbón activado de repuesto',
    description: 'Carbón activado en saco, reemplazable cuando pierde su eficacia.'
  },
  {
    id: 8,
    title: 'Kit de limpieza',
    description: 'Cepillo para limpiar las rejillas y cámaras del sistema.'
  },
  {
    id: 9,
    title: 'Manguera flexible',
    description: 'Manguera para conectar la salida del sistema al lugar de uso.'
  },
  {
    id: 10,
    title: 'Manual de uso',
    description: 'Guía paso a paso para instalación, uso y mantenimiento.'
  }
]

export const maintenanceTips = [
  'Limpia el prefiltro cada 2 semanas.',
  'Revisa y limpia las piedras removibles cada 2 meses.',
  'Reemplaza el módulo biológico cada 6-12 meses.',
  'Reemplaza el carbón activado cada 6 meses.',
  'Verifica que no haya fugas en las conexiones.'
]
