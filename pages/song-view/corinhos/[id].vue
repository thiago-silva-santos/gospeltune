<template>
     <div class="w-full">
          <div class="song_container" id="song_container">
               <h1 class="song_title">{{ corinho.nome }}</h1>
               <Song :song="corinho.cifra" :tonalidade="tonalidadeAtual"></Song>
          </div>

          <button-tuning @tuning-component-tune="getTom" :tonalidade-padrao="tonalidadeAtual" :go-back="'/corinhos'"/>
     </div>
</template>
<script>
import corinhos from '@/assets/Cifras/corinhos.json'

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

@media(min-width: 320px) {
     .song_container {
          @apply py-10 px-5 flex flex-col max-w-[400px] m-0;
     }

     .song_title {
          @apply text-black font-semibold;
          font-size: 16px

     }

}

@media (min-width: 768px) {
     .song_container {
          @apply mx-auto;
     }
     .song_title {
          font-size: 22px;
     }


}
@media (min-width: 1366px) {

     .song_title {
          font-size: 24px;
     }


}
</style>