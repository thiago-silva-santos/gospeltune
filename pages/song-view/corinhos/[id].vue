<template>
     <div class="w-full h-screen">
          <div class="song_container">
               <h1 class="song_title">{{ corinho.nome }}</h1>
               <Song :song="corinho.cifra" :tonalidade="tonalidadeAtual"></Song>
          </div>
          <tuning @tuning-component-tune="getTom" :tonalidade-padrao="tonalidadeAtual"></tuning>
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
               this.tonalidadeAtual = value;
          },
          getTom(value) {
               this.tonalidadeAtual = value
          }
     },
     created() {
          if (this.corinho.tonalidade) {
               this.changeTom(this.corinho.tonalidade)
          }
     }
     

}
</script>
<style scoped>

.song_title {
     @apply text-black font-semibold;
     font-size: 22px;
}

.song_container {
     @apply py-10 px-5  flex flex-col max-w-[400px] mx-auto;
}
@media (max-width: 500px) {
     .song_container {
          margin: 0;
     }
}</style>