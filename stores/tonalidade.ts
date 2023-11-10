import { defineStore } from "pinia"
export const useTonalidadeStore = defineStore('tonalidade', () => {


  const tonalidadeAtual = ref<number>(0);
  const tonalidadeAtualNotacao = computed(() => { return tonalidades.value.filter(x => x.id == tonalidadeAtual.value)[0].notacao })
  const tonalidades = ref([
    {
      id: 0,
      notacao: "C"
    },
    {
      id: 1,
      notacao: "D"
    },
    {
      id: 2,
      notacao: "E"
    },
    {
      id: 3,
      notacao: "F"
    },
    {
      id: 4,
      notacao: "G"
    },
    {
      id: 5,
      notacao: "A"
    },
    {
      id: 6,
      notacao: "B"
    },
    {
      id: 7,
      notacao: "Db"
    },
    {
      id: 8,
      notacao: "Eb"
    },
    {
      id: 9,
      notacao: "Gb"
    },
    {
      id: 10,
      notacao: "Ab"
    },
    {
      id: 11,
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