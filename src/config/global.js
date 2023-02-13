export default {
  global: {
    componenteFormativo: 'Fundamentos de la atención y servicio al cliente',
    descripcionCurso:
      'La atención y servicio al cliente se considera como factor clave en la consecución de los objetivos dentro de las organizaciones; es de suma importancia conocer y comprender los protocolos y procedimientos, que no solo direccionan a los actores involucrados hacia resultados, sino también a convertir la atención y servicio al cliente como un pilar fundamental de la cultura organizacional.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.svg'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/barra1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/barra2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/barra3.png'),
      },
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/portada/barra4.png'),
      },
      {
        clases: ['banner-principal-decorativo-5'],
        imagen: require('@/assets/curso/portada/barra5.png'),
      },
      {
        clases: ['banner-principal-decorativo-6'],
        imagen: require('@/assets/curso/portada/barra6.png'),
      },
      {
        clases: ['banner-principal-decorativo-7'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-8'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
      },
      {
        clases: ['banner-principal-decorativo-9'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.png'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Cliente',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Servicio',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Etiqueta empresarial',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Comunicación ',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Solicitud',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema6',
        icono: 'far fa-file-alt',
        numero: '6',
        titulo: 'Sistemas de información',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Comunicación',
      referencia:
        'TEDx Talks. (2015). Lenguaje corporal | Emiliano Salas | TEDxAvDivDelNorte [video]. YouTube. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=1FUHSMFUUGU',
    },
    {
      tema: 'Etiqueta empresarial',
      referencia:
        'SENA (2020). Etiqueta y Protocolo Empresarial [video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=bLFCFLIaQ4A',
    },
    {
      tema: 'Solicitud',
      referencia:
        'Servicio de empleo (2019). Conozca todo sobre PQRS [video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=Z8m8AaYJR2w',
    },
    {
      tema: 'Servicio',
      referencia:
        'TEDx Talks. (2018). <i>La importancia del buen servicio. | Patricia Tintori | TEDxNaguanagua</i> [video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=ZdskuZHVA9w ',
    },
  ],
  glosario: [
    {
      termino: 'Asertividad',
      significado:
        'habilidad que poseen algunos individuos de comunicar eficazmente la información.',
    },
    {
      termino: 'Autoimagen',
      significado: 'representación mental que se tiene de uno mismo.',
    },
    {
      termino: 'Calidad',
      significado:
        'propiedades que permiten valorar un bien o servicio con respecto al cumplimiento de un criterio.',
    },
    {
      termino: 'Emisor',
      significado:
        'persona que transmite información con el objetivo de comunicar un mensaje.',
    },
    {
      termino: 'Funcionario',
      significado:
        'persona que ocupa un cargo jerárquico al interior de una empresa.',
    },
    {
      termino: 'Nicho',
      significado: 'una parte específica de un grupo de individuos.',
    },
    {
      termino: 'Procedimiento',
      significado: 'método o lineamiento de ejecutar un proceso.',
    },
    {
      termino: 'Proveedor',
      significado:
        'persona natural o jurídica que abastece a otra, para un fin determinado.',
    },
    {
      termino: 'Receptor',
      significado:
        'persona que recibe información transmitida por otro individuo.',
    },
    {
      termino: 'Tasa',
      significado: 'valor o cantidad que hace ilustración de un dato.',
    },
  ],
  referencias: [
    {
      referencia:
        'Mateos de Pablo Blanco, M. Á. (2019). <i>Atención al cliente y calidad en el servicio. COMM002PO</i>. IC Editorial.',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/lc/senavirtual/titulos/124251',
    },
    {
      referencia:
        'Pulido Romero, E. Escobar Domínguez, Ó. & Núñez Pérez, J. Á. (2019). <i>Base de datos</i>. Grupo Editorial Patria.',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/lc/senavirtual/titulos/121283',
    },
    {
      referencia:
        'Rodríguez-Páez FG, Vaca Hortúa DA & Manrique Méndez LV. (2012). <i>Revisión de los conceptos de territorio, población y salud en el contexto colombiano</i>.',
      link: 'https://doi.org/10.19052/sv.1437',
    },
    {
      referencia:
        'Villafañe Gallego, J. (2021). <i>La gestión profesional de la imagen corporativa</i>. 1. Difusora Larousse - Ediciones Pirámide.',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/lc/senavirtual/titulos/215397',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
