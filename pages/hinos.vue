<template>
       <CifraSection>
            <template v-slot:section>
                 <template v-if="searchHinosResults.length == 0">
                      <div class="no-results">
                           Nenhuma cifra encontrada...
                      </div>
                 </template>
                 <template v-else>

                      <section class="w-full" v-if="searchHinosResults.length >= 1">
                           <h1>Hinos</h1>
                           <SongsCards :items="searchHinosResults" :text-search="search" />
                      </section>
                 </template>
            </template>
       </CifraSection>
</template>
<script>
import hinos from '@/assets/Cifras/hinos.json'
import { useFilterStore } from '~~/stores/filters';
import { useSearchStore } from '~~/stores/search';
import { mapState } from 'pinia'
export default {
  data() {
       return {
            showFilters: false
       };
  },
  methods: {
       onSearch(value) {
            this.search = value
       },
  },
  computed: {
       ...mapState(useFilterStore, ['filters', 'selectedFilters']),
       ...mapState(useSearchStore, ['search']),
       hinos() {
            return hinos
       },
       searchHinosResults() {
            let eligibleItems = this.hinos.filter((item) => item.cifra.length > 0)

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
  }
};
</script>
<style scoped>

h1 {
@apply text-[28px] text-slate-800 font-bold text-center py-4
}

@media (max-width: 350px) {
     h1 {
          @apply text-[20px]
     }
}
</style>