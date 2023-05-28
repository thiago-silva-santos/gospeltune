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
        const filterType = payload.includes("Santa Ceia") || payload.includes("Missões") || payload.includes("Jovens") ? ["Santa Ceia", "Missões", "Jovens"] : ["Envolvente", "Introspectivo"];
        this.selectedFilters = this.selectedFilters.filter(item => !filterType.includes(item));
        this.selectedFilters.push(payload)
      } else {
        this.selectedFilters = this.selectedFilters.filter(item => item !== payload)
      }

    },
    clearSelectedFilters() {
      this.selectedFilters = []
    },
    show() {
      this.showFilters = true
    },
    hide() {
      this.showFilters = false
    }
  },
})