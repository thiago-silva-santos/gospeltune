import { defineStore } from "pinia"
export const useFilterStore = defineStore('filters', {
    state: () => ({ 
        filters: ['aaaaaaaaa'],
        selectedFilters: []
    }),
    getters: {
      doubleCount: (state) => state.count * 2,

    },
    actions: {
      increment() {
        this.count++
      },
    },
  })