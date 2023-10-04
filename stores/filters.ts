import { defineStore } from "pinia"
import { SongCategoria } from '@/types/cifra/Cifra'
export const useFilterStore = defineStore('filters', () => {
    const filters = ref<SongCategoria[]>([])
    const showFilters = ref<boolean>(false)
    const selectedFilters = ref<SongCategoria[]>([])



   function updateSelectedFilters(payload: SongCategoria) {
      if (!selectedFilters.value.includes(payload)) {
        const filterType = payload.includes("Santa Ceia") || payload.includes("Missões") || payload.includes("Jovens") ? ["Santa Ceia", "Missões", "Jovens"] : ["Envolvente", "Introspectivo"];
        selectedFilters.value = selectedFilters.value.filter(item => !filterType.includes(item));
        selectedFilters.value.push(payload)
      } else {
        selectedFilters.value = selectedFilters.value.filter(item => item !== payload)
      }

    }
   function clearSelectedFilters() {
      selectedFilters.value = []
    }
   function show() {
      showFilters.value = true
    }
   function hide() {
      showFilters.value = false
    }
    return {
      filters,
      showFilters,
      selectedFilters,
      show,
      hide,
      clearSelectedFilters,
      updateSelectedFilters
    }
})