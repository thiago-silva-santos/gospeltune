import { defineStore } from "pinia"
export const useTonalidadeStore = defineStore('tonalidade', () => {


  const tonalidadeAtual = ref<number>(0);
  const tonalidadeAtualNotacao = computed(() => { return tonalidades.value.filter(x => x.posicao == tonalidadeAtual.value)[0].notacao })
  const tonalidades = ref([
    {
      posicao: 0,
      notacao: "C"
    },
    {
      posicao: 1,
      notacao: "D"
    },
    {
      posicao: 2,
      notacao: "E"
    },
    {
      posicao: 3,
      notacao: "F"
    },
    {
      posicao: 4,
      notacao: "G"
    },
    {
      posicao: 5,
      notacao: "A"
    },
    {
      posicao: 6,
      notacao: "B"
    },
    {
      posicao: 7,
      notacao: "Db"
    },
    {
      posicao: 8,
      notacao: "Eb"
    },
    {
      posicao: 9,
      notacao: "Gb"
    },
    {
      posicao: 10,
      notacao: "Ab"
    },
    {
      posicao: 11,
      notacao: "Bb"
    }
  ])


  function updateTonalidade(value: number) {

    tonalidadeAtual.value = value
  }

  return {
    tonalidades,
    tonalidadeAtual,
    tonalidadeAtualNotacao,
    updateTonalidade
  }
})