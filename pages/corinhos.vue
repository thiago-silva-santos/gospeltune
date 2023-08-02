<template>
     <CifraSection>
          <template v-slot:section>
               <template v-if="searchCorinhosResults.length == 0">
                    <div class="no-results">
                         Nenhuma cifra encontrada...
                    </div>
               </template>
               <template v-else>

                    <section class="w-full" v-if="searchCorinhosResults.length >= 1">
                         <div class="flex flex-col gap-2 justify-center items-center relative">
                              <h1>Corinhos</h1>
                              <div class="flex">
                                   <button @click="updateListMode('false')" class="list_mode_button"
                                        :class="['list_mode_button', { 'active': listModeOn == 'false' }]">
                                        <span class="material-symbols-outlined">
                                             lists
                                        </span>
                                   </button>
                                   <button @click="updateListMode('true')"
                                        :class="['list_mode_button', { 'active': listModeOn == 'true' }]">
                                        <span class="material-symbols-outlined">
                                             format_list_bulleted
                                        </span>
                                   </button>
                              </div>
                         </div>
                         <SongsCards :items="searchCorinhosResults" :text-search="search" :list-mode="listModeOn" />
                    </section>
               </template>
          </template>
     </CifraSection>
</template>
<script>
import corinhos from '@/assets/Cifras/corinhos.json'
import { useFilterStore } from '~~/stores/filters';
import { useSearchStore } from '~~/stores/search';
import { useListModeStore } from '~~/stores/listMode';

import { mapState, mapActions } from 'pinia'
export default {
     data() {
          return {
               showFilters: false,
          };
     },
     methods: {
          onSearch(value) {
               this.search = value;
          },
          ...mapActions(useListModeStore, ['updateListMode'])
     },
     computed: {
          ...mapState(useFilterStore, ['filters', 'selectedFilters']),
          ...mapState(useListModeStore, ['listModeOn']),
          ...mapState(useSearchStore, ['search']),
          corinhos() {
               return corinhos
          },
          searchCorinhosResults() {
               let eligibleItems = this.corinhos.filter((item) => item.cifra.length > 0)

               if (this.selectedFilters.length > 0) {
                    eligibleItems = eligibleItems.filter((item) => this.selectedFilters.every(category => item.categoria?.includes(category)))
               }
               if (this.search !== '') {
                    const lowerCaseSearchTerm = this.search.toLowerCase().normalize("NFD")
                         .replace(/[\u0300-\u036f]/g, "")
                         .replace(/[^a-z0-9]/g, "");

                    return eligibleItems.filter((item) => {
                         const itemName = item.nome.toLowerCase().normalize("NFD")
                              .replace(/[\u0300-\u036f]/g, "")
                              .replace(/[^a-z0-9]/g, "");

                         const itemId = item.id.toString().normalize("NFD")
                              .replace(/[\u0300-\u036f]/g, "")
                              .replace(/[^a-z0-9]/g, "");

                         return (
                              itemName.includes(lowerCaseSearchTerm) ||
                              itemId.includes(lowerCaseSearchTerm)
                         );
                    });
               } else {
                    return eligibleItems
               }
          },
     },
};
</script>
<style scoped>
h1 {
     @apply text-[28px] text-slate-800 font-bold text-center py-4
}

.list_mode_button {
     @apply w-8 h-8 flex justify-center items-center p-2 bg-slate-100 rounded-md
}

.active {
     @apply bg-slate-300
}

.list_mode_button:nth-child(1) {
     @apply rounded-r-none
}

.list_mode_button:nth-child(2) {
     @apply rounded-l-none
}

@media (max-width: 350px) {
     h1 {
          @apply text-[20px]
     }
}
</style>