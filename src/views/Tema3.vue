<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5.bloque-fondo3
    .row.justify-content-around.align-items-center.bg1-3
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 3
        h1 Etiqueta empresarial
      .row.justify-content-around.align-items-center
        .col-lg-4
          figure
            img(src='@/assets/curso/temas/tema3/tema3-img1.png', alt='Texto que describa la imagen').img-animacion1

        .col-lg-8
          .cajon.color-primario.p-4
            p Los conocimientos de la etiqueta empresarial, se refieren al conjunto de protocolos o normas básicas que, al ponerse en práctica, logran transmitir la imagen corporativa a clientes y usuarios en potencia.
      p.mt-5 A continuación, se puede observar un video con explicación de la imagen corporativa, el comportamiento empresarial, la cultura empresarial, la personalidad empresarial, las reglas y protocolos y las normas de cortesía:

    .row.justify-content-around.align-items-center

      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/Uughh84mjOI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    .tarjeta.color-adicional-1.mt-5
      .row.justify-content-center
        .col-lg-2
          img(src='@/assets/curso/temas/tema3/tema3-img2.svg', alt='Texto que describa la imagen').img-animacion1
        .col-lg-10.justify-content-center
          p Basados en todo lo dicho anteriormente, a continuación, se lleva a cabo una descripción de las reglas y protocolos de la imagen corporativa, para profundizar entonces, en el contenido de etiqueta empresarial:

    .row.justify-content-center.mt-5
      .col-lg-8
        LineaTiempoD.color-secundario
          .row(numero="1" titulo="Nombres propios ")
            p Cuando el funcionario interactúa por primera vez con un usuario, es importante prestar atención y referirse a él por su nombre, para generar un grado de formalidad en la conversación.

          .row(numero="2" titulo="Claridad de los roles ")
            p Al interactuar con el cliente, es primordial indicar la información relacionada al rol que el funcionario desempeña; en este caso, es recomendable brindar un poco más de información como: nombre, apellido y el cargo en el cual se desempeña.

          .row(numero="3" titulo="Saludo")
            p Para obtener una imagen empresarial positiva, es clave saludar a todos los miembros de la organización, demostrando cordialidad y educación frente a la interacción a la que se tenga lugar, sin distinción de si es presencial o virtual.

          .row(numero="4" titulo="Contacto físico")
            p Establecer contacto físico y/o visual directo, sirve para transmitir confianza a los otros individuos.

          .row(numero="5" titulo="Cortesía")
            p Mantener las reglas básicas de cortesía y educación, absteniéndose del uso de jergas informales; este comportamiento genera un valor agregado, mostrando interés y respeto frente al usuario.

          .row(numero="6" titulo="Comunicación no verbal")
            p El lenguaje corporal juega un papel importante en la comunicación, teniendo en cuenta que las posturas, los gestos y las expresiones faciales, transmiten seguridad, confianza y profesionalismo, lo que permite generar conversaciones elocuentes, al igual que el uso adecuado de dispositivos móviles.

          .row(numero="7" titulo="Imagen personal ")
            p La presentación personal refleja el profesionalismo, no solo aportando una imagen positiva del personal, sino también de la organización que es representada; por eso es importante usar vestimenta de acuerdo con el entorno laboral.

          .row(numero="8" titulo="Redacción y ortografía ")
            p La mejor manera de evitar errores ortográficos, redacción, interpretación y/o de gramática, es leer detenidamente, previo al envío de correos, los documentos e informes.

          .row(numero="9" titulo="Puntualidad ")
            p Una de las reglas más importantes para la atención al cliente; ser puntual es una demostración de compromiso, respeto e interés.

      .col-lg-4
        img(src='@/assets/curso/temas/tema3/tema3-img3.svg', alt='Texto que describa la imagen')


</template>

<script>
export default {
  name: 'Tema3',
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
