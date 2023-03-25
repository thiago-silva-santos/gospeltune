<template>
     <div>

          <div class="w-full flex justify-center mt-10">
               <div class="button_container flex gap-6">
                    <button class="tom_button" @click="changeTom('C')"> C </button>
                    <button class="tom_button" @click="changeTom('D')"> D </button>
                    <button class="tom_button" @click="changeTom('E')"> E </button>
                    <button class="tom_button" @click="changeTom('F')"> F </button>
                    <button class="tom_button" @click="changeTom('G')"> G </button>
                    <button class="tom_button" @click="changeTom('A')"> A </button>
                    <button class="tom_button" @click="changeTom('B')"> B </button>
               </div>
          </div>
          <Song :song="corinho" :tonalidade="tonalidadeAtual"></Song>
     </div>
</template>
<script>
import corinhos from '@/assets/corinhosdata.json'

export default {
     data() {
          return {
               tonalidadeAtual: "C",
               nomeArquivo: ''
          };

     },
     computed: {

          corinho() {
               const song = corinhos[this.$route.params.id]
               return song
          },

     },
     methods: {
          changeTom(value) {
               console.log(value)
               this.tonalidadeAtual = value;
          },
     },
     mounted() {
          console.log(this.corinho)
     }

}
</script>
<style scoped>
.tom_button {
     @apply rounded-full shadow-md bg-red-100 w-8 h-8 text-black
}

@media (max-width: 400px) {
     .button_container {
          @apply gap-4
     }
}
</style>