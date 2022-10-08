<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-sexto.color-acento-botones.mb-5
      .row.mb-2
        h5 Gestión integral de procesos del talento humano
      .row
        span Fundamentos de la atención y servicio al cliente
    
    img(src="@/assets/curso/temas/sintesis-img1.svg", alt="alt").imagen-sintesis-1

    p En el diagrama se detallan los componentes que comprenden los fundamentos de la atención y servicio al cliente identificando, de forma clara, las metodologías y características que lo articulan, para cumplir satisfactoriamente con los requisitos y necesidades de los clientes.

    .row.justify-content-center
      .col-lg-10.mb-5
        figure.mt-5
          img(src="@/assets/curso/temas/sintesis.png", alt="alt")
      .col-auto
        a.anexo.mb-4(:href="obtenerLink('/downloads/sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
