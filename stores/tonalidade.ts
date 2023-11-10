import { defineStore } from "pinia"
export const useTonalidadeStore = defineStore('tonalidade', () => {


  const tonalidadeAtual = ref<number>(0);

  function updateTonalidade(value: number) {

    tonalidadeAtual.value = value
  }

  return {
    tonalidadeAtual,
    updateTonalidade
  }
})