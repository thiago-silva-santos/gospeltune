<template>
     <CifraSection>
          <template v-slot:section>
               <template v-if="results.length == 0">
                    <div class="no-results">
                         Nenhuma cifra encontrada...
                    </div>
               </template>
               <template v-else>
                    <div class="w-full" v-if="results.length >= 1">
                         <div class="flex flex-col gap-2 justify-center items-center relative">
                              <h1>Corinhos</h1>
                         </div>
                         <cifra-link-section :items="results" :text-search="SearchStore.search" />
                    </div>
               </template>
          </template>
     </CifraSection>
</template>
<script setup lang="ts">
import corinhosData from '@/assets/Cifras/corinhos.json'
import { useFilterStore } from '@/stores/filters';
import { useSearchStore } from '@/stores/search';

const FilterStore = useFilterStore()
const SearchStore = useSearchStore()
const corinhos = computed(() => {
     return corinhosData
})

const results = computed(() => {
     let eligibleItems = corinhos.value.filter((item) => item.cifra.length > 0)
          .filter((item) => FilterStore.selectedFilters.every(category => item.categoria?.includes(category)))

     if (SearchStore.search !== '') {
          return SearchStore.searchedItems(eligibleItems)
     }
     return eligibleItems
})

</script>
<style scoped>
@media (min-width: 320px) {
     h1 {
          @apply text-[16px] text-slate-800 font-bold text-center py-4
     }
}
@media (min-width: 414px) {
     h1 {
          @apply text-[18px]
     }
}
@media (min-width: 768px) {
     h1 {
          @apply text-[20px]
     }
}
@media (min-width: 1366px) {
     h1 {
          @apply text-[24px]
     }
}
</style>