import { useSearchStore } from '~~/stores/search';
import { useFilterStore } from '~~/stores/filters';

export default defineNuxtRouteMiddleware((to, from) => {
     useSearchStore().updateSearch()
     useFilterStore().clearSelectedFilters()
})

