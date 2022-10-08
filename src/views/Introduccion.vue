<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .tarjeta.color-adicional-1.mt-5
      .row.justify-content-center
        .col-lg-2
          img(src='@/assets/curso/temas/introduccion-img1.svg', alt='Texto que describa la imagen').img-animacion1
        .col-lg-10.justify-content-center
          p Apreciado aprendiz, bienvenido a este componente formativo donde se abordará los conocimientos necesarios para la identificación, clasificación y comunicación de las solicitudes realizadas por los clientes, de acuerdo con los protocolos establecidos; por este motivo, es importante comprender las generalidades de la atención y servicio al cliente, debido a que es catalogado como el punto de partida para que el usuario tenga una experiencia positiva con la organización.

    .row
    p.mt-3 En el siguiente video conocerá, de forma general, la temática que se estudiará en el presente recurso educativo.

    .row.mt-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption VIDEO
    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
