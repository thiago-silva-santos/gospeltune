import { useSearchStore } from '~~/stores/search';

export default defineNuxtRouteMiddleware((to, from) => {
     useSearchStore().updateSearch()
})

