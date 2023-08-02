import { defineStore } from "pinia"
export const useListModeStore = defineStore('useListModeStore', {
  state: () => ({
    listModeOn: 'false'
  }),
  actions: {
    updateListMode(payload) {
          this.listModeOn = payload
    }
  },
  
})