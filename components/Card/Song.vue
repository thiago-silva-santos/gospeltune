<template>
     <div :class="['card', { 'card_list_mode': props.listMode == true }]" @click="goToSong">
          <div class="song_number">
               {{ props.songData.id }}
          </div>
          <span class="song_title">{{ props.songData.nome }}</span>

     </div>
</template>
<script setup lang="ts">
import { ISongCifra } from "@/types/cifra/Cifra";
import { PropType } from "vue";

const router = useRouter()
const props = defineProps({
     songData: {
          type: Object as PropType<ISongCifra>,
          required: true
     },
     listMode: {
          type: Boolean,
          default: false
     }
})

function goToSong() {
     router.push(props.songData.tipo == 'corinho' ? `/song-view/corinhos/${props.songData.id}` : props.songData.tipo == 'hino' ? `/song-view/hinos/${props.songData.id}` : `/song-view/hinos-harpa-crista/${props.songData.id}`)
}
</script>
<style scoped>


@media (min-width: 320px) {
     .card {
          @apply w-full flex items-center justify-start p-2 gap-3 rounded-lg bg-white cursor-pointer relative;
     }

     .song_title {
          @apply  text-sm max-w-[230px] truncate text-black
     }

     .song_number {
          @apply w-10 h-10 text-base text-red-500 font-semibold rounded-full flex items-center justify-center bg-slate-50
     }
}

@media (min-width: 375px) {
     .song_title {
          @apply text-sm max-w-[270px] truncate
     }
}

@media (min-width: 414px) {
     .card {
          @apply max-w-[398px]
     }

     .song_number {
          @apply w-10 h-10 text-base
     }

     .song_title {
          @apply text-base max-w-[300px] truncate
     }
}

@media (min-width: 768px) {
     .card {
          @apply max-w-full
     }

     .song_title {
          @apply text-base max-w-full;
          text-overflow: initial;
          white-space: inherit;
     }
}

@media (min-width: 1366px) {
     .song_number {
          @apply w-12 h-12 text-lg
     }

}
@media (min-width: 1920px) {
     .song_number {
          @apply w-14 h-14
     }

     .song_title {
          @apply text-lg;
     }
}


</style>