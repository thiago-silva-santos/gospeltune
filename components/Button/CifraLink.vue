<template>
     <div class="cifra_link" @click="goToSong">
          <div class="song_number">
               {{ props.songData.id }}
          </div>
          <div class="titles">
               <span class="song_title">{{ props.songData.nome }}</span>
               <span class="song_subtitle" v-if="props.songData.nomeArtista"> {{ props.songData.nomeArtista }}</span>
          </div>

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
     }
})

function goToSong() {
     router.push(props.songData.tipo == 'corinho' ? `/song-view/corinhos/${props.songData.id}` : props.songData.tipo == 'hino' ? `/song-view/louvores/${props.songData.id}` : `/song-view/hinos-harpa-crista/${props.songData.id}`)
}
</script>
<style scoped>


@media (min-width: 320px) {
     .cifra_link {
          @apply w-full flex items-center justify-start p-2 gap-3 rounded-lg bg-white cursor-pointer relative;
          box-shadow: 0px 4px 8px 2px rgba(0, 0, 0, 0.050);
          transition: all .3s ease;
     }


     
     .song_title {
          @apply  text-sm max-w-[230px] truncate text-black
     }

     .song_number {
          @apply w-10 h-10 text-base text-red-500 font-semibold rounded-lg flex items-center justify-center bg-slate-50;
          transition: all .3s ease;
     }

     .titles {
          @apply flex flex-col
     }
     .song_subtitle {
          @apply text-[12px] text-slate-400
     }


     .cifra_link:hover {
          box-shadow: 0px 4px 8px 4px rgba(0, 0, 0, 0.050);
     }
     .cifra_link:hover > .song_number{
          @apply underline underline-offset-4 decoration-2;
     }
}

@media (min-width: 375px) {
     .song_title {
          @apply text-sm max-w-[270px] truncate
     }
}

@media (min-width: 414px) {
     .cifra_link {
          @apply max-w-[398px]
     }

     .song_number {
          @apply w-10 h-10 text-base
     }

     .song_title {
          @apply text-base max-w-[300px] truncate
     }
     .song_subtitle {
          @apply text-sm
     }
}

@media (min-width: 768px) {
     .cifra_link {
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
     .song_subtitle {
          @apply text-base
     }
}


</style>