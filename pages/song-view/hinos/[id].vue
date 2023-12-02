<template>
     <div class="song_container">
          <h1 class="song_title">{{ song.nome }}</h1>
          <span class="artist_name"> {{ song.nomeArtista }} </span>
          <cifra-musica :musica="song.cifra"/>
     </div>
     <button-tuning go-back="/hinos" />
</template>
<script setup lang="ts">
import cifras from '@/assets/Cifras/hinos.json'
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
     } else {
          TonalidadeStore.updateTonalidade(0)
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

     .song_container {
          @apply py-10 px-20 flex flex-col max-w-fit;
     }
}
</style>