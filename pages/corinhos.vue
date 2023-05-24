<template>
  <div>
       <CifraSection>
            <template v-slot:section>
                 <template v-if="searchCorinhosResults.length == 0">
                      <div class="no-results">
                           Nenhuma cifra encontrada...
                      </div>
                 </template>
                 <template v-else>

                      <section class="w-full" v-if="searchCorinhosResults.length >= 1">
                           <h1>Corinhos</h1>
                           <SongsCards :items="searchCorinhosResults" :text-search="search" />
                      </section>
                 </template>
            </template>
       </CifraSection>
  </div>
</template>
<script>
import corinhos from '../assets/corinhos.json'
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
  }
};
</script>
<style scoped>

h1 {
@apply text-[28px] text-slate-800 font-bold text-center py-4
}
  
</style>