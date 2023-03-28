<template>
     <div>

          <div class="pt-10">

               <Song :song="corinho" :tonalidade="tonalidadeAtual"></Song>
          </div>
          <tuning @tuning-component-tune="getTeste"></tuning>
     </div>
</template>
<script>
import corinhos from '@/assets/corinhos.json'

export default {
     data() {
          return {
               tonalidadeAtual: "C",
               nomeArquivo: ''
          };

     },
     computed: {

          corinho() {
               const song = corinhos[this.$route.params.id].cifra
               return song
          },

     },
     methods: {
          changeTom(value) {
               console.log(value)
               this.tonalidadeAtual = value;
          },
          getTeste(value) {
               console.log("EMIT RESGATADO " + value)
               this.tonalidadeAtual = value
          }
     },
     created() {
          console.log(corinhos[this.$route.params.id])
     }
     

}
</script>
<style scoped>
.tom_button {
     @apply rounded-full shadow-sm w-8 h-8 text-rose-600 bg-rose-200
}

.active {
     @apply bg-rose-600 text-white
}

@media (max-width: 400px) {
     .button_container {
          @apply gap-2
     }

     .button_container2 {
          @apply gap-3.5
     }
}</style>