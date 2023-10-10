import { defineStore } from "pinia"
import { SongCategoria } from '@/types/cifra/Cifra'
export const useSplitStore = defineStore('split', () => { 


const split = ref<boolean>(false);

function updateSplit(){
    split.value = !split.value
}
return {
    split,
    updateSplit
  }
})