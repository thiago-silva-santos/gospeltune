import { defineStore } from "pinia"
export const useFilterStore = defineStore('filters', {
  state: () => ({
    filters: ["Santa Ceia", "Missões", "Jovens", "Envolvente", "Introspectivo"],
    showFilters: false,
    selectedFilters: []
  }),
  actions: {
    updateSelectedFilters(payload) {
      if (!this.selectedFilters.includes(payload)) {
        this.selectedFilters.push(payload)
      }
      else {
        this.selectedFilters = this.selectedFilters.filter(item => item !== payload)
      }
    },
    show(){
      this.showFilters = true
    },
    hide(){
      this.showFilters = false
    }
  },
})