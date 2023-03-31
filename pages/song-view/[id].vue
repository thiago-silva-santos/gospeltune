<template>
     <div class="w-full h-screen">
          <div class="song_container">
               <h1 class="song_title">{{ corinho.nome }}</h1>
               <Song :song="corinho.cifra" :tonalidade="tonalidadeAtual"></Song>
          </div>
          <tuning @tuning-component-tune="getTom"></tuning>
     </div>
</template>
<script>
import corinhos from '@/assets/corinhos.json'

export default {
     data() {
          return {
               tonalidadeAtual: 0,
               nomeArquivo: ''
          };

     },
     computed: {

          corinho() {
               const song = corinhos.filter(item => item.id == this.$route.params.id)[0]
               return song
          },


     },
     methods: {
          changeTom(value) {
               console.log(value)
               this.tonalidadeAtual = value;
          },
          getTom(value) {
               this.tonalidadeAtual = value
          }
     },
     created() {
     }
     

}
</script>
<style scoped>

.song_title {
     @apply text-black font-semibold;
     font-size: 22px;
}
.tom_button {
     @apply rounded-full shadow-sm w-8 h-8 text-rose-600 bg-rose-200
}

.active {
     @apply bg-rose-600 text-white
}
.song_container {
     @apply py-10 px-5  flex flex-col max-w-[400px] mx-auto;
}
@media (max-width: 500px) {
     .button_container {
          @apply gap-2
     }
     .song_container {
          margin: 0;
     }
     .button_container2 {
          @apply gap-3.5
     }
}</style>