<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5.bloque-fondo5
    .row.justify-content-around.align-items-center.bg1-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 5
        h1 Solicitud

      .row.justify-content-center
        .col-lg-8
          .row
            .col-lg-3
              img(src='@/assets/curso/temas/tema5/tema5-img1.svg', alt='Texto que describa la imagen').img-animacion1
            .col-lg-9.justify-content-center
              p En este tema del componente formativo, se incursiona en otro desafío de aprendizaje y se refiere al método mediante el cual se expresa una necesidad o requerimiento, de manera formal e informal, frente a personas naturales o jurídicas. Este método se llama solicitud.
          .cajon.color-primario.p-4.mt-3
            p En el contexto empresarial, los clientes internos y externos pueden realizar solicitudes o requerimientos; los integrantes del equipo de talento humano, deben contar con la capacidad y la competencia para diferenciar estas solicitudes; de acuerdo con cada prototipo de solicitud, estas se clasifican como se plantea a continuación.
        .col-lg-4
          figure
            img(src='@/assets/curso/temas/tema5/tema5-img2.png', alt='Texto que describa la imagen')

    .row
      p.mt-3 Profundicemos en los tipos de solicitud:

    .row.justify-content-center.align-items-center.mt-5           
      .col-lg-10
        ImagenInfograficaC.color-acento-botones.mb-5(data-aos="zoom-in")
          template(v-slot:imagen)
            figure
              img.img-a.img-t(src='@/assets/curso/temas/tema5/tema5-img3.svg', alt='')

          .tarjeta.color-infografica-tema1.p-3(x="24.5%" y="41%" numero="")
            .h5.mb-2 Petición 
            p Se refiere a una solicitud respetuosa para cubrir una necesidad individual o colectiva.

          .tarjeta.color-infografica-tema1.p-3(x="41%" y="7%" numero="")
            .h5.mb-2 Reclamo 
            p Es el derecho con el que cuenta toda persona para exigir una solución, oposición o contrariedad, referente a la prestación deficiente de un bien o servicio adquirido, para ser revisada y evaluada.
          
          .tarjeta.color-infografica-tema1.p-3(x="57.5%" y="48%" numero="")
            .h5.mb-2 Queja  
            p Relata la manifestación de inconformidad o descontento frente a una situación en particular, que se considera irregular o inadecuada, relacionada con el área, compañero de trabajo, o con el jefe inmediato.

          .tarjeta.color-infografica-tema1.p-3(x="69%" y="22%" numero="")
            .h5.mb-2 Denuncia
            p Es la notificación de un hecho relacionado con una presunta infracción de las normas.

          .tarjeta.color-infografica-tema1.p-3(x="35%" y="74%" numero="")
            .h5.mb-2 Sugerencia
            p Es una propuesta presentada por un colaborador para incidir en el mejoramiento de un área o de la organización. 

    .row.justify-content-start.align-items-center.mt-5           
      .col-lg-5
        .bgp-degradado.p-1(data-aos="fade-right")
          h4(data-aos="fade-down").mb-0 Clasificación de solicitudes
      p.mt-3 Los tipos de solicitudes pueden presentarse por medio de dos métodos, los cuales se encuentran clasificados de la siguiente forma:

    .row.justify-content-around.align-items-center
      .col-lg-5
        figure
          img(src='@/assets/curso/temas/tema5/tema5-img4.svg', alt='Texto que describa la imagen').img-animacion1
      
      .col-lg-7
        .tarjeta--container.row
          .col-md.tarjeta.color-acento-contenido.p-3
            .row.justify-content-center
              .col-6
                figure
                  img(src='@/assets/curso/temas/tema5/tema5-img5.svg', alt='Texto que describa la imagen')
            h3.text-center Solicitud verbal
            p.text-center Este tipo de solicitudes se manifiestan de manera verbal, directa o indirecta, por parte de solicitante o interesado.
          
          .col-md.tarjeta.color-secundario.p-3
            .row.justify-content-center
              .col-6
                figure
                  img(src='@/assets/curso/temas/tema5/tema5-img6.svg', alt='Texto que describa la imagen')
            h3.text-center Solicitud escrita
            p.text-center Están conformadas por una estructura establecida, redacción clara y detallada, dando formalidad y soporte al cumplimiento de la misma.
      

</template>

<script>
import ImagenInfograficaC from '../components/ImagenInfograficaC.vue'
export default {
  name: 'Tema5',
  components: {
    ImagenInfograficaC,
  },
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
