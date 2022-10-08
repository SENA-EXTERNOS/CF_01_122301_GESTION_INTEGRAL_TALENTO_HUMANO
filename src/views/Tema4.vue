<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5.bloque-fondo4
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Comunicación
  
    .row.justify-content-around.aling-items-center.bg1-4
      .col-lg-11
        .bloque-texto-g.color-primario.p-2.p-sm-4.p-md-5
          .bloque-texto-g__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema4/tema4-img1.svg')})`}")
          .bloque-texto-g__texto.p-4
            p La comunicación se define como el intercambio de información que se produce a través de un emisor y uno o más receptores, con el objetivo de expresar sentimientos, establecerse socialmente, generar preguntas y resolver inquietudes, a través de mecanismos verbales y no verbales.     
            <br><br>
            p.mt-5 Al interior de las organizaciones se presentan diferentes tipos de comunicación que son segmentadas de acuerdo con la población de interés.
    
   
      .row
        p.mt-3 A continuación, se presentan los tipos de comunicación que se pueden encontrar en un contexto empresarial.

      .row.justify-content-around.aling-items-center.mt-2
        .col-lg-3
          figure
            img(src='@/assets/curso/temas/tema4/tema4-img2.svg', alt='Texto que describa la imagen').img-animacion1
        .col-lg-9
          TabsA.color-acento-contenido
            .tarjeta.colorTab.color-acento-contenido--borde.p-3(style="background-color:#fdf2c5" titulo="Comunicación descendente")
              .row
                .col-xl-6.mb-4
                  figure
                    img(src='@/assets/curso/temas/tema4/tema4-img3.svg', alt='Texto que describa la imagen')
                .col-xl-6
                  p Este tipo de comunicación, acostumbra contar con directrices o deberes, desde los líderes o jefes de equipo, hacia sus trabajadores o subordinados, distinguiéndose el rango de superioridad.

            .tarjeta.color-acento-contenido--borde.colorTab.p-3(style="background-color:#fdf2c5" titulo="Comunicación descendente")
              .row
                .col-xl-6.mb-4
                  figure
                    img(src='@/assets/curso/temas/tema4/tema4-img4.png', alt='Texto que describa la imagen')
                .col-xl-6
                  p Se refiere a la información que fluye desde los trabajadores hacia los altos mandos; este tipo de comunicación puede incluir informes o entregables estipulados en los deberes; además, estos datos son utilizados para la toma de decisiones o información importante para las organizaciones.
            
            .tarjeta.color-acento-contenido--borde.colorTab.p-3(style="background-color:#fdf2c5" titulo="Comunicación horizontal")
              .row
                .col-xl-6.mb-4
                  figure
                    img(src='@/assets/curso/temas/tema4/tema4-img5.svg', alt='Texto que describa la imagen')
                .col-xl-6
                  p Este tipo de comunicación tiene como objetivo intercambiar información dentro de la organización, la cual involucra colaboradores que cuentan con el mismo nivel jerárquico en cualquiera de las áreas o departamentos de la empresa. 

            .tarjeta.color-acento-contenido--borde.colorTab.p-3(style="background-color:#fdf2c5" titulo="Comunicación interna")
              .row
                .col-xl-6.mb-4
                  figure
                    img(src='@/assets/curso/temas/tema4/tema4-img6.svg', alt='Texto que describa la imagen')
                .col-xl-6
                  p Hace referencia al flujo de información que tienen los miembros de una misma organización; esta información puede ser catalogada como formal cuando se trata de informes, actualizaciones o comunicados, los cuales pueden ser difundidos para una o todas las personas al interior de la organización; o informal, de acuerdo con la espontaneidad y no tiene un carácter oficial.

            .tarjeta.color-acento-contenido--borde.colorTab.p-3(style="background-color:#fdf2c5" titulo="Comunicación externa")
              .row
                .col-xl-6.mb-4
                  figure
                    img(src='@/assets/curso/temas/tema4/tema4-img7.svg', alt='Texto que describa la imagen')
                .col-xl-6
                  p Es la información que está dirigida específicamente a receptores externos a la organización, como: clientes, partes interesadas, medios de comunicación, gobierno local o nacional y la comunidad en general.

    .row.justify-content-start.align-items-center.mb-5           
      .col-lg-5
        .bgp-degradado.p-1(data-aos="fade-right")
          h4(data-aos="fade-down").mb-0 Técnicas de comunicación
      .row.justify-content-center.mt-5
        .col-lg-2
          img(src='@/assets/curso/temas/tema4/tema4-img8.svg', alt='Texto que describa la imagen').img-animacion1
        .col-lg-10.justify-content-center
          p Después de clarificar y enunciar los tipos de comunicación que son segmentados de acuerdo con la población de interés, se estudian las técnicas de comunicación que se acostumbra llevar a cabo, dentro de las organizaciones

    .row 
      p Para llevar a cabo una comunicación eficazmente, existen técnicas que mejoran la competencia en este ámbito y estas habilidades se encuentran conformadas por:

    TabsC.color-acento-contenido
      .py-3.py-md-4(titulo="Preparación del mensaje")
        .row
          .col-md-8.mb-4.mb-md-0
            h4 Preparación del mensaje
            p Hace referencia a la elaboración y previa revisión que debe tener la información antes de ser compartida, teniendo en cuenta que la planeación del método de comunicación debe atender al lenguaje, el tipo de comunicación, el contexto e impacto, generando así que el receptor comprenda el mensaje, de manera eficaz y correcta.
          .col-md-4
            figure
              img(src='@/assets/curso/temas/tema4/tema4-img9.svg', alt='Texto que describa la imagen')

      .py-3.py-md-4(titulo="Claridad del mensaje")
        .row
          .col-md-8.mb-4.mb-md-0
            h4 Claridad del mensaje
            p Uno de los principales pilares de la comunicación se refiere a la precisión, comprensión y coherencia de la forma en que son emitidos los mensajes; también se debe tener en cuenta el interés que puedan generar: la información, la periodicidad, y el momento adecuado para realizar la difusión.
          .col-md-4
            figure
              img(src='@/assets/curso/temas/tema4/tema4-img10.svg', alt='Texto que describa la imagen')     

      .py-3.py-md-4(titulo="Escucha activa")
        .row
          .col-md-8.mb-4.mb-md-0
            h4 Escucha activa
            p La relevancia del lenguaje no verbal, permite mejorar la interacción entre los emisores y receptores, haciendo referencia al buen manejo de las posturas, los gestos y las expresiones faciales que hacen que la comunicación sea eficaz.
          .col-md-4
            figure
              img(src='@/assets/curso/temas/tema4/tema4-img11.svg', alt='Texto que describa la imagen')  

      .py-3.py-md-4(titulo="Comunicación no verbal")
        .row
          .col-md-8.mb-4.mb-md-0
            h4 Comunicación no verbal
            p La relevancia del lenguaje no verbal, permite mejorar la interacción entre los emisores y receptores, haciendo referencia al buen manejo de las posturas, los gestos y las expresiones faciales que hacen que la comunicación sea eficaz.
          .col-md-4
            figure
              img(src='@/assets/curso/temas/tema4/tema4-img12.svg', alt='Texto que describa la imagen')  

      .py-3.py-md-4(titulo="Síntesis")
        .row
          .col-md-8.mb-4.mb-md-0
            h4 Síntesis
            p La síntesis permite la comunicación eficaz, directa y concisa, mejorando el diálogo y disminuyendo la tendencia al aburrimiento o desinterés, en aquellos casos en que los temas son extensos.
          .col-md-4
            figure
              img(src='@/assets/curso/temas/tema4/tema4-img13.svg', alt='Texto que describa la imagen')                              

    .row.justify-content-start.align-items-center.mt-5           
      .col-lg-5
        .bgp-degradado.p-1(data-aos="fade-right")
          h4(data-aos="fade-down").mb-0 Canales de comunicación
      .row.justify-content-center.mt-5
        .col-lg-2
          img(src='@/assets/curso/temas/tema4/tema4-img14.svg', alt='Texto que describa la imagen').img-animacion1
        .col-lg-10.justify-content-center
          p Es necesario mencionar los canales de comunicación, debido a que son los medios físicos o virtuales a través de los cuales se transmite todo tipo de información desde un emisor, para ser recibida por uno o varios receptores.

    .row.justify-content-around.align-items-center.mt-5
      .col-lg-4
        figure
          img(src='@/assets/curso/temas/tema4/tema4-img15.svg', alt='Texto que describa la imagen')
      
      .col-lg-8
        p Dentro de este orden de ideas, las organizaciones deben tener claramente definidos los canales de comunicación, para que el tránsito de información sea emitido asertivamente; es por esto que el emisor debe contar con la competencia para conocer el canal de comunicación que se adecúe, de acuerdo con el tipo de información.        
        .cajon.color-acento-contenido.p-4          
          p Dentro de los canales de comunicación en las organizaciones se caracterizan:        
          .row
            .col-lg-6
              ol.color-vineta.lista-ul
                li
                  i.fas.fa-angle-right
                  | Llamadas
                li 
                  i.fas.fa-angle-right
                  | Chats
                li 
                  i.fas.fa-angle-right
                  | Correo electrónico

            .col-lg-6
              ol.color-vineta.lista-ul
                li 
                  i.fas.fa-angle-right
                  | Redes sociales   
                li 
                  i.fas.fa-angle-right
                  | Mensajes de texto
                li 
                  i.fas.fa-angle-right
                  | Altavoces


</template>

<script>
export default {
  name: 'Tema4',
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

<style lang="sass"></style>
