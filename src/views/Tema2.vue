<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5.bloque-fondo2
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Servicio

    .bg1-2
      .tarjeta.color-adicional-1.mt-5
        .row.justify-content-center
          .col-lg-2
            img(src='@/assets/curso/temas/tema2/tema2-img1.svg', alt='Texto que describa la imagen').img-animacion1
          .col-lg-10.justify-content-center
            p Luego de clarificar el concepto de cliente y sus características, es importante definir el servicio como: el conjunto de actividades que tienen interacción entre el proveedor y cliente, con el objetivo de satisfacer sus requerimientos o necesidades; sin embargo, el servicio se diferencia del producto, por ser intangible y modificable en el tiempo, de acuerdo con la interacción del proveedor y el cliente. 

      .row.justify-content-around.align-items-center
        .col-lg-9.mt-5
          .cajon.color-primario.p-4
            p El ser humano, en su vida cotidiana, es influenciado por su entorno laboral y personal; siempre se halla en la búsqueda constante de satisfacer sus necesidades, interactuando con todo tipo de servicios relacionados con el talento humano; es por esta razón que es preciso comprender que, cuando se define el concepto de servicio al cliente, se deben entender las características que lo estructuran. A continuación, se ubican algunas características del servicio al cliente.

      .row.justify-content-center.align-items-center.mt-5           
        .col-lg-10
          ImagenInfograficaC.color-acento-botones.mb-5(data-aos="zoom-in")
            template(v-slot:imagen)
              figure
                img.img-a.img-t(src='@/assets/curso/temas/tema2/tema2-img2.svg', alt='')

            .tarjeta.color-infografica-tema1.p-3(x="21%" y="40%" numero="")
              .h5.mb-2 Eficacia en resolución de conflictos 
              p Los inconvenientes pueden surgir en cualquier momento, y el talento humano debe estar preparado y apto para atender las adversidades que se presenten; hacerse responsable, sin minimizar, o pasarlo como imperceptible; asumir la correcta postura para hacerse cargo y brindar la solución más adecuada para el caso que lo amerita.

            .tarjeta.color-infografica-tema1.p-3(x="35%" y="7%" numero="")
              .h5.mb-2 Rapidez 
              p Se refiere al cumplimiento en un tiempo oportuno; juega un papel crucial en la fidelización del mismo, pues este se complementa con una actitud adecuada, para así obtener la satisfacción del cliente, con una atención rápida y oportuna.
            
            .tarjeta.color-infografica-tema1.p-3(x="57.5%" y="42.5%" numero="")
              .h5.mb-2 Personalización 
              p La atención personalizada va directamente relacionada con la necesidad de cada cliente; con respecto a la satisfacción de los requerimientos, este servicio adiciona valor agregado, porque al momento de prestar el servicio se evitan respuestas generales y se efectúa de acuerdo con un protocolo particular, adaptándose a la medida.

            .tarjeta.color-infografica-tema1.p-3(x="66%" y="16.5%" numero="")
              .h5.mb-2 Cortesía y amabilidad 
              p El talento humano siempre debe contar con buena actitud y, sobre todo, con el máximo respeto hacia los clientes, para que el correcto proceder motive a las organizaciones para incrementar el volumen de ventas, por medio del enlace emocional que genera confianza, cuando se presta la atención, se escucha, se comprende y se atiende al cliente.

            .tarjeta.color-infografica-tema1.p-3(x="65%" y="85%" numero="")
              p Se evidencia que el cliente es un factor importante para tener en cuenta porque, de acuerdo con su satisfacción, la organización va a mejorar la experiencia y así se va a generar mayor fidelización e impulso para el crecimiento de las instituciones.


      .row.justify-content-start.align-items-center.mb-5           
        .col-lg-4
          .bgp-degradado.p-1(data-aos="fade-right")
            h4(data-aos="fade-down").mb-0 Procedimientos y protocolos
      
      .tarjeta.color-adicional-1.mt-5
        .row.justify-content-center
          .col-lg-2
            img(src='@/assets/curso/temas/tema2/tema2-img3.svg', alt='Texto que describa la imagen').img-animacion1
          .col-lg-10.justify-content-center
            p Desde el punto de vista organizacional, la implementación de los procedimientos de servicio al cliente, se rigen de acuerdo con los sistemas de gestión de calidad establecidos y que permiten exigir a los integrantes de la organización, trabajar con protocolos estandarizados, basados con el ciclo PHVA (planear, hacer, verificar y actuar); la mejora continua de los procesos se afecta o se beneficia con la consecución de las metas y la satisfacción del cliente. Por esta razón, es importante conocer las etapas de un protocolo del servicio al cliente, para que el proceso cumpla con lo necesario para lograr una gestión con un resultado positivo.

      .row.justify-content-center.mt-5
        p.mb-5 A continuación, se presentan dichas etapas:
        .col-lg-4
          img(src='@/assets/curso/temas/tema2/tema2-img4.svg', alt='Texto que describa la imagen').img-animacion1         
        .col-lg-8  
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
            .row(titulo="Recepción del cliente")
              p Esta etapa se refiere a establecer el primer contacto entre el cliente y el funcionario encargado, surgiendo así la oportunidad, para el usuario, de exponer sus expectativas frente a una solicitud, queja, reclamo o requerimiento.           

            .row(titulo="Recopilación de la información")
              p El talento humano encargado del caso, debe establecer una conexión amable con el cliente, para formular una serie de preguntas que permitan identificar el motivo de la consulta, solicitud o necesidad de este, para realizar el registro de la información necesitada.

            .row(titulo="Ejecución")
              p El funcionario de la organización desarrolla las actividades precisas para la satisfacción de las necesidades de los usuarios, ayudando a establecer una comunicación constante para informar el estado de su solicitud.

            .row(titulo="Finalización y despedida")
              p Este proceso exige garantizar que el cliente cuente con una sensación positiva, de acuerdo con el resultado obtenido; por lo tanto, el funcionario debe actuar con amabilidad y asertividad para lograr determinar si la solicitud o necesidad ha sido resuelta satisfactoriamente.

            .row(titulo="Atención y servicio postventa")
              p Conforme con lo anterior, el talento humano debe estar preparado y capacitado para la resolución de problemas; esta etapa es fundamental, dado que la satisfacción del usuario abre oportunidades para la recurrencia, accediendo nuevamente a los servicios prestados; por esto se debe contar con la competencia adecuada del personal, para reiniciar con estas etapas, lo que garantizará la satisfacción del cliente.


    .row.justify-content-start.align-items-center.mb-5           
      .col-lg-3
        .bgp-degradado.p-1(data-aos="fade-right")
          h4(data-aos="fade-down").mb-0 Portafolio de servicios    
         
    .row.justify-content-around.align-items-center.mb-5
      .col-lg-4
        figure
          img(src='@/assets/curso/temas/tema2/tema2-img5.png', alt='Texto que describa la imagen')
      
      .col-lg-8
        .cajon.color-acento-contenido.p-4
          p Todo lo aprendido anteriormente, se puede consolidar en el portafolio de servicios que es el documento que enuncia, describe y establece los servicios ofrecidos por las empresas, mostrando el alcance y permitiendo comunicar las ofertas a los clientes y al público en general; tiene como objetivo atraer nuevos clientes y socios potenciales.

</template>

<script>
import ImagenInfograficaC from '../components/ImagenInfograficaC.vue'
export default {
  name: 'Tema2',
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
