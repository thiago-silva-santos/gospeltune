<template>
     <div class="campo_harmonico">
          <div v-for="(acorde, index) in campoHarmonico" :key="acorde.posicao" class="w-12 h-12">
               <div class="flex flex-col items-center">
                    <span class="text-slate-500">{{ acorde.posicao }}°</span>
                    <span class="text-red-600 font-semibold" :class="acorde.notacao == 'N/A' ? 'text-blue-500' : 'text-red-600'"> {{ acorde.notacao }} </span>
               </div>
          </div>
     </div>
</template>
<script setup lang="ts">
import data from '@/assets/CampoHarmonico/campo-harmonico.json'
import {useTonalidadeStore} from '@/stores/tonalidade'
const campo = computed(() => {
     return data
})
const campoHarmonico = computed(() => {
     return campo.value[TonalidadeStore.tonalidadeAtual].acordes
})
const TonalidadeStore = useTonalidadeStore();

</script>
<style scoped>
.campo_harmonico {
     @apply grid grid-cols-7 gap-4 p-8 w-fit bg-white border-2 border-slate-200 rounded-lg max-h-[520px] overflow-y-scroll;
}

</style>