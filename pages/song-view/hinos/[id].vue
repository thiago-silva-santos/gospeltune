<template>
     <div class="w-full">
          <div class="song_container" id="song_container">
               <h1 class="song_title">{{ hino.nome }}</h1>
               <span class="artist_name"> {{ hino.nomeArtista }} </span>
               <Song :song="hino.cifra" :tonalidade="tonalidadeAtual"></Song>
          </div>

          <button-tuning @tuning-component-tune="getTom" :tonalidade-padrao="tonalidadeAtual" :go-back="'/hinos'" />
          <!-- <button-play/> -->

     </div>
</template>
<script>
import hinos from '@/assets/Cifras/hinos.json'

export default {
     data() {
          return {
               tonalidadeAtual: 0,
               nomeArquivo: ''
          };

     },
     computed: {

          hino() {
               const song = hinos.filter(item => item.id == this.$route.params.id)[0]
               return song
          },


     },
     methods: {
          changeTom(value) {
               this.tonalidadeAtual = value;
          },
          getTom(value) {
               this.tonalidadeAtual = value
          },
     },
     created() {
          if (this.hino.tonalidade) {
               this.changeTom(this.hino.tonalidade)
          }
     }


}
</script>
<style scoped>
.testing_scroll {
     @apply absolute top-0 bg-black text-white
}

@media(min-width: 320px) {
     .song_container {
          @apply py-10 px-5 flex flex-col max-w-[400px] m-0;
     }

     .song_title {
          @apply text-black font-semibold;
          font-size: 16px
     }

     .artist_name {
          @apply w-full text-left text-slate-400 italic;
          font-size: 12px;
     }
}

@media (min-width: 768px) {
     .song_container {
          @apply mx-auto;
     }

     .song_title {
          font-size: 22px;
     }

     .artist_name {
          font-size: 18px;
     }
}

@media (min-width: 1366px) {

     .song_title {
          font-size: 24px;
     }
}
</style>