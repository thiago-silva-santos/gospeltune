import { defineStore } from "pinia"
export const useSearchStore = defineStore('search', {
  state: () => ({
    search: ''
  }),
  actions: {
    updateSearch(payload) {
      if (payload) {
        this.search = payload
      } else {
        this.search = ''
      }
      
    }
  },
  
})