<template>
     <div class="w-full">
          <div class="song_container" id="song_container">
               <h1 class="song_title">{{ song.nome }}</h1>
               <cifra-song :song="song.cifra" :tonalidade="tonalidadeAtual" />
          </div>
          <button-tuning @tuning-component-tune="getTom" :tonalidade-padrao="tonalidadeAtual" :go-back="'/corinhos'" />
     </div>
</template>
<script setup lang="ts">
import cifras from '@/assets/Cifras/corinhos.json'

const route = useRoute()
const tonalidadeAtual = ref<number>(0)

const song = computed(() => {
     const item = cifras.filter(item => item.id.toString() == route.params.id)[0]
     return item
})

function getTom(value: number) {
     tonalidadeAtual.value = value
}

onBeforeMount(() => {
     if (song.value.tonalidade) {
          tonalidadeAtual.value = song.value.tonalidade
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