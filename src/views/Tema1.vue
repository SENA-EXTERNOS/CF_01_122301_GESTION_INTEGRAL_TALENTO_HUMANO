<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5.bloque-fondo1
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Cliente 
    
    .bg1-1
      .row.justify-content-center
        .col-lg-5.justify-content-center
          figure
            img(src='@/assets/curso/temas/tema1/tema1-img1.png', alt='Texto que describa la imagen')
        .col-lg-7.col-xs-6.mt-2
          p Para dar inicio a este componente, comencemos aclarando la diferencia entre atención y servicio al cliente. Es importante que se entienda que la atención al cliente está enfocada en la solución, se refiere a la estrategia que los empleados utilizan para brindar una experiencia satisfactoria al cliente. 
          .cajon.color-acento-contenido.p-4
            p Desde una perspectiva empresarial y comercial, cuando nos referimos al concepto cliente, este se puede definir como la persona o el usuario que compra, alquila, adquiere, o presta un producto o servicio de manera periódica o permanente, para uso propio, de un tercero, o compartido, buscando satisfacer cualquier tipo de necesidad. 
          p.mt-3 Frente al contexto organizacional, identificamos que todas las áreas que componen una empresa, se encuentran relacionadas con el concepto de cliente, dado que, según la operación a desarrollar, habrá uno o varios usuarios, ya sean internos o externos, que se benefician o afectan con los resultados, bienes, o servicios que se obtienen. Este concepto también involucra empleados, ejecutivos e inversionistas.
      
      .row.justify-content-start.align-items-center.mb-5           
        .col-lg-5
          .bgp-degradado(data-aos="fade-right")
            h4(data-aos="fade-down").mb-0 Tipos de clientes y sus características

      .tarjeta.color-adicional-1.mt-5
        .row.justify-content-center
          .col-lg-2
            img(src='@/assets/curso/temas/tema1/tema1-img2.svg', alt='Texto que describa la imagen').img-animacion1
          .col-lg-10.justify-content-center
            p En función de lo planteado anteriormente, se expone la descripción de los tipos de clientes, debido a que estos se asocian, según el rol o la relación que mantengan con las empresas; los clientes se clasifican de la siguiente manera:
      
      TabsB.color-primario.mt-3
        .py-4.py-md-5(titulo="Concepto" :icono="require('@/assets/curso/temas/tema1/tema1-img3.svg')")
          .row
            .col-lg-8
              h4 Cliente interno 
              p Se refiere a uno o varios individuos, naturales o jurídicos, que sostienen una relación con la empresa en la que desempeñan sus funciones; estas personas consumen bienes y/o servicios que son ofrecidos por otras dependencias dentro de la misma organización o, en su defecto, para la satisfacción de unas necesidades como un usuario final.
              p Cabe considerar que, en las organizaciones, el cliente toma un papel dual, porque, según el rol desempeñado, el bien o el servicio recibido puede ser utilizado como recurso para la transformación técnica que permite, a ese usuario, ser proveedor frente a otro cliente interno.

              h4 Cliente externo  
              p Se refiere a uno o varios individuos, naturales o jurídicos, que no tienen relación directa con la empresa y no pertenecen a la organización, pero pagan para adquirir todo tipo de bienes y/o servicios, impulsando las ventas y la rentabilidad. Los clientes externos son un foco importante para el #[i marketing] y la atracción de nuevos clientes y pueden negociar con clientes internos.
          
            .col-lg-4
              figure
                img(src='@/assets/curso/temas/tema1/tema1-img7.png', alt='Texto que describa la imagen')
        
        .py-4.py-md-5(titulo="Ejemplo" :icono="require('@/assets/curso/temas/tema1/tema1-img4.svg')")
          .row
            .col-lg-8
              h4 Cliente interno 
              p Una empresa de manufactura en su área de producción, fabrica camisas para hombre; esta dependencia es considerada cliente del área de insumos, porque este departamento le suministra materias primas como hilos y telas supliendo, de esta manera, las necesidades de su cliente, el área de producción, para lograr la elaboración de sus productos, en este caso camisas para hombre, que van a ser entregadas a otros clientes, ya sean internos o externos de la empresa.
          
              h4 Cliente externo 
              p Un empleado que se desempeña como asesor bancario, decide ir con su familia de vacaciones y, para hacerlo, decide contratar los servicios de una operadora turística; este usuario se puede ilustrar como un cliente externo, porque no tiene ninguna relación con la empresa que le prestará los servicios y se beneficiará del portafolio ofrecido por esta empresa.

            .col-lg-4
              figure
                img(src='@/assets/curso/temas/tema1/tema1-img8.svg', alt='Texto que describa la imagen')
        
        .py-4.py-md-5(titulo="Características" :icono="require('@/assets/curso/temas/tema1/tema1-img5.svg')")
          .row
            .col-lg-8
              h4 Cliente interno 
              p Se caracterizan por su amplio conocimiento del portafolio ofrecido por la organización; también son precursores del mejoramiento continuo, evaluadores de la calidad ofrecida, y sumamente exigentes con relación a la ejecución del debido proceso dentro de la organización.
          
              h4 Cliente externo 
              p Se caracterizan por la preferencia de un trato diferencial y ágil; siempre están al tanto de las ofertas especiales e incentivos que se presentan ante ellos, aunque, en algunos casos particulares, son cambiantes de acuerdo con los beneficios que pueden ofrecer algunos proveedores.           
          
            .col-lg-4
              figure
                img(src='@/assets/curso/temas/tema1/tema1-img9.svg', alt='Texto que describa la imagen')
        
        .py-4.py-md-5(titulo="Semejanzas" :icono="require('@/assets/curso/temas/tema1/tema1-img6.svg')")
          .row
            .col-lg-8
              h4 Semejanzas
              p Los clientes internos y externos cuentan con algunas características similares que permiten, a las empresas, identificar debilidades y fortalezas para destinar recursos, capacitaciones, evaluaciones periódicas e incentivos, para contar con un personal competente y motivado para ejercer la atención y servicio al cliente; asimismo, contribuir con la captación de nuevos clientes externos, a través de clientes internos.
              p Entre estas similitudes, se pueden identificar, en ambos casos, los clientes frecuentes, que son aquellos con cierta periodicidad de tiempo y/o volumen estipulado, al momento de adquirir o solicitar un bien y/o servicio; en el ámbito organizacional es muy común encontrarse con este tipo de clientes, puesto que, en todas las áreas, existen clientes que se involucran en la cadena de suministro del bien o servicio, obrando de insumo para abastecer otras áreas.
              p Por último, es posible identificar el cliente, con base en la necesidad, debido a que esta población recurre a la adquisición del bien o servicio, para satisfacer no solo una necesidad o requisito, sino también un conjunto de ellas.

            .col-lg-4
              figure
                img(src='@/assets/curso/temas/tema1/tema1-img10.svg', alt='Texto que describa la imagen')

      .row.justify-content-start.align-items-center.mb-5.mt-5           
        .col-lg-4
          .bgp-degradado.p-1(data-aos="fade-right")
            h4(data-aos="fade-down").mb-0 Características de la población

      .tarjeta.color-adicional-1.mt-5
        .row.justify-content-center
          .col-lg-2
            img(src='@/assets/curso/temas/tema1/tema1-img11.svg', alt='Texto que describa la imagen').img-animacion1
          .col-lg-10.justify-content-center
            .cajon.color-acento-contenido.p-4
              p La población se puede definir como el conjunto de individuos que pertenecen a una o varias comunidades, diferenciadas por sus características en común, las cuales pueden ser estudiadas estadísticamente, para efectuar actividades sociales o comerciales.

    .row.justify-content-center.mt-5
      p Es por esto, que las características de la población se identifican de acuerdo con los siguientes parámetros:   
      AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
        .row(titulo="Densidad poblacional")
          p Son datos relacionados con la cantidad de habitantes de un área específica de un grupo de individuos, en donde se pueden validar aspectos como: tasas o índices de natalidad, mortalidad, migración, inmigración y emigración.
          .row.justify-content-center
            .col-lg-8
              .row
                .col-lg
                  figure
                    img(src='@/assets/curso/temas/tema1/tema1-img12.png', alt='Texto que describa la imagen')             

        .row(titulo="Segmentación por edades")
          p El mundo se encuentra en constante cambio y evolución generando, al mismo tiempo, cambios en la sociedad; es por esto por lo que los grupos poblacionales son identificados de acuerdo con las edades promedio, grupos etarios y rangos de edad.
          .row.justify-content-center
            .col-lg-8
              .row
                .col-lg
                  figure
                    img(src='@/assets/curso/temas/tema1/tema1-img13.png', alt='Texto que describa la imagen')        

        .row(titulo="Segmentación sociodemográfica")
          p Esta característica se encuentra directamente relacionada con el entorno social y económico del individuo, en donde se identifican variables como sexo, ubicación demográfica, nivel de estudios, ingresos económicos e intereses de estos.
          .row.justify-content-center
            .col-lg-8
              .row
                .col-lg
                  figure
                    img(src='@/assets/curso/temas/tema1/tema1-img14.png', alt='Texto que describa la imagen')       


</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
