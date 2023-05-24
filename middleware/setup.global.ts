import { useSearchStore } from '~~/stores/search';

export default defineNuxtRouteMiddleware((to, from) => {
     console.log(to)
     useSearchStore().updateSearch()
})

