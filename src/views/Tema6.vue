<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5.bloque-fondo6
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 6
      h1 Sistemas de información

    .row.justify-content-center
      img(src='@/assets/curso/temas/tema6/tema6-img1.png', alt='Texto que describa la imagen')

    .tarjeta.color-adicional-1.mt-5
      .row.justify-content-center
        .col-lg-2
          img(src='@/assets/curso/temas/tema6/tema6-img2.png', alt='Texto que describa la imagen').img-animacion1
        .col-lg-10.justify-content-center
          p El concepto de sistemas de información (SI) hace referencia al conjunto de elementos que son utilizados para recopilar, procesar, almacenar, analizar, controlar y difundir todo tipo de información (datos), que sirve de insumo para hacer predicciones a largo plazo y en la toma de decisiones. A continuación, se encuentran algunas herramientas tecnológicas, instrumentos de recolección de datos y bases de datos necesarias para manejar la información:

    AcordionA(tipo="b").mt-5
      .row(titulo="Herramientas tecnológicas")
          .row.justify-content-center
            .col-lg-4.justify-content-center
              figure
                img(src='@/assets/curso/temas/tema6/tema6-img3.svg', alt='Texto que describa la imagen')
            .col-lg-8.col-xs-6.mt-2
              p Son los recursos en los que el personal inicia el proceso de recolección de datos, de acuerdo con los instrumentos elegidos; entre estas herramientas tecnológicas se enlistan las siguientes:
              .col-sm.mb-5.mb-sm-0
                ol.color-vineta.lista-ul
                  li
                    i.color-vineta.fas.fa-angle-right
                    | APPS
                  li
                    i.color-vineta.fas.fa-angle-right
                    | Formularios digitales
                  li
                    i.color-vineta.fas.fa-angle-right
                    | Páginas web
                  li
                    i.color-vineta.fas.fa-angle-right
                    | #[i Leads scoring]
                  li
                    i.color-vineta.fas.fa-angle-right
                    | Hojas de cálculo

      .row(titulo="Instrumentos de  recolección de datos")
        .col-lg-4
          figure
            img(src='@/assets/curso/temas/tema6/tema6-img4.svg', alt='Texto que describa la imagen')

        .col-lg-8
          p.mt-2 En esta era tecnológica, los datos forman parte del activo intangible más valioso de las empresas, facilitando la identificación de los datos que se extraen, mediante las diferentes fuentes de información, con el fin de obtener una visión panorámica y precisa del tema de interés; por lo tanto, se requiere contar con la disposición para aprender sobre los siguientes tipos de instrumentos de recolección:

          h5 Observación
          p Este proceso requiere de visualización constante del comportamiento del objeto de estudio, a través de registros periódicos en una planilla de campo, de forma ordenada, que permite hacer la evaluación de los resultados y orientar decisiones para el cumplimiento de objetivos.

          h5 Encuesta
          p Radica en aprehender los datos de la población para su estudio, con la ayuda de cuestionarios con preguntas abiertas y/o cerradas, gracias a canales físicos o digitales, que permiten identificar las líneas de tendencias del objeto estudiado.

          h5 Entrevista
          p Se fundamenta en obtener datos por medio de la formulación de preguntas específicas a través de un entrevistador, quien conduce el ejercicio, orientado hacia la solución de una solicitud específica.

          h5 Grupo de enfoque
          p Este procedimiento requiere de la agrupación de individuos, quienes interactúan entre sí, en búsqueda de opinar y resolver un tema en particular; esta metodología permite identificar los diferentes puntos de vista, para la solución de problemas de forma efectiva.

      .row(titulo="Bases de datos")
        .col-lg-4
          figure
            img(src='@/assets/curso/temas/tema6/tema6-img5.svg', alt='Texto que describa la imagen')

        .col-lg-8
          p.mt-2 Los datos son elementos fundamentales en el entorno empresarial y se adoptan como herramienta surgida en virtud de la evolución tecnológica; las bases de datos conforman un pilar en la arquitectura para la toma de decisiones; en efecto, las áreas de talento humano, cuentan con un volumen importante de datos, los cuales son procesados para entender, manejar adecuadamente y acceder con facilidad, a los resultados obtenidos por la gestión realizada y adelantarse a los posibles eventos que puedan presentarse.

    .row.justify-content-center
      .col-lg-9.mt-5
        .cajon.color-acento-contenido.p-4
          p Recuerde explorar los demás recursos que se encuentran disponibles en este componente formativo; para ello, diríjase al menú principal donde encontrará la síntesis, material complementario, entre otros. Adicional, lo invitamos a resolver la actividad didáctica para reforzar los conceptos estudiados.


</template>

<script>
export default {
  name: 'Tema6',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass">
.acordion__activo
  border-radius: 20px !important

.acordion .tarjeta--blanca
  border-bottom: 1px solid #E8E8E8
  border-radius: 0
</style>
