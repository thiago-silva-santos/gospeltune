import { defineStore } from "pinia"

export const useSearchStore = defineStore('search', () => {
  const search = ref<string | number>('')


  function updateSearch(payload: string | number) {
    if (payload) {
      search.value = payload
      return
    }
    search.value = ''
  }

  function normalizeSearch(value: string | number) {
    if (typeof (value) == "string") {
      return value.toLowerCase().normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/[^a-z0-9]/g, "");
    }
    return value.toString().normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-z0-9]/g, "");
  }

  function searchedItems(value: any) {
    const lowerCaseSearchTerm = normalizeSearch(search.value)
    return value.filter((item: any) => {
      const itemName = normalizeSearch(item.nome)

      const itemId = normalizeSearch(item.id)
      return (
        itemName.includes(lowerCaseSearchTerm) ||
        itemId.includes(lowerCaseSearchTerm)
      );
    });
  }

  return { search, updateSearch, searchedItems }
})