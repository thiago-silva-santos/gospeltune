<template>
     <div class="campo_harmonico">
          <div v-for="(acorde, index) in campoHarmonico" :key="acorde.grau" class="w-12 h-12">
               <div class="flex flex-col items-center">
                    <span>{{ acorde.grau }}°</span>
                    <span class="text-red-600 font-semibold"> {{ acorde.notacao }} </span>
               </div>
          </div>
     </div>
</template>
<script setup lang="ts">
import data from '@/assets/CampoHarmonico/campo-harmonico.json'
import {useTonalidadeStore} from '@/stores/tonalidade'
const campoHarmonico = computed(() => {
     return data[TonalidadeStore.tonalidadeAtual].acordes
})
const TonalidadeStore = useTonalidadeStore();

</script>
<style scoped>
.campo_harmonico {
     @apply grid grid-cols-7 gap-4 p-4 w-fit bg-white border-2 border-black;
}

</style>