<template>
     <div>

          <div class="song_container">
               <h1 class="song_title">{{ corinho.nome }}</h1>
               <Song :song="corinho.cifra" :tonalidade="tonalidadeAtual"></Song>
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
               const song = corinhos[this.$route.params.id]
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
.song_container {
     @apply  p-10  flex flex-col max-w-[400px] mx-auto
}
@media (max-width: 400px) {
     .button_container {
          @apply gap-2
     }

     .button_container2 {
          @apply gap-3.5
     }
}</style>