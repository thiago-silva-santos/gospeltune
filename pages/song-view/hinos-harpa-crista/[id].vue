<template>
     <div class="song_container" id="song_container">
          <h1 class="song_title">{{ song.nome }}</h1>
          <span class="song_number"> Número: {{ song.id }} </span>
          <cifra-musica :musica="song.cifra" :tonalidade="TonalidadeStore.tonalidadeAtual" />
     </div>
     <button-tuning />
</template>
<script setup lang="ts">
import cifras from '@/assets/Cifras/hinos-harpa-crista.json'
import { useTonalidadeStore } from '~~/stores/tonalidade'

const TonalidadeStore = useTonalidadeStore()

const route = useRoute()

const song = computed(() => {
     const item = cifras.filter(item => item.id.toString() == route.params.id)[0]
     return item
})


onBeforeMount(() => {
     if (song.value.tonalidade) {
          TonalidadeStore.updateTonalidade(song.value.tonalidade)
     }
})

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

     .song_number {
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

     .song_number {
          @apply w-full text-left text-slate-400 italic;
          font-size: 18px;
     }
}

@media (min-width: 1366px) {

     .song_title {
          font-size: 24px;
     }

     .song_number {
          @apply w-full text-left text-slate-400 italic;
          font-size: 20px;
     }
}
</style>