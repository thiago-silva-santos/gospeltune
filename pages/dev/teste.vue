<template>
     <div class="campo_harmonico">
          <div v-for="(acorde, index) in campoHarmonico" :key="acorde.grau" class="w-12 h-12">
               <div class="flex flex-col items-center">
                    <span>{{ acorde.grau }}°</span>
                    <span class="text-red-600"> {{ acorde.notacao }} </span>
               </div>
          </div>
     </div>

     <ButtonTuningCopy/>
</template>
<script setup>
import data from '@/assets/CampoHarmonico/campo-harmonico.json'
import {useTonalidadeStore} from '@/stores/tonalidade'

const TonalidadeStore = useTonalidadeStore();
const campoHarmonico = computed(() => {
     return data[0].acordes
})

onMounted(() => {
     console.log(campoHarmonico.value)
})
</script>
<style scoped>


.campo_harmonico {
     @apply grid grid-cols-7 gap-4 w-fit bg-slate-300;
}
td {
     @apply mx-2
}
</style>