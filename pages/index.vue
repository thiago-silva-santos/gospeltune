<template>
  <div class="main_page_container">
    <div class="input_search_container relative min-w-[280px] md:w-[300px] lg:-w[350px] max-w-[400px] gap-2 flex">
      <input-search @search="onSearch"></input-search>
      <button :class="['button_filters', { 'button_filters_active': showFilters }]" @click="showFilters = !showFilters">
        <span class="material-symbols-outlined">
          filter_list
        </span>
      </button>
      <div class="filters" v-show="showFilters">
        <SelectCategory />
      </div>
    </div>
    <div class="filter_tags">
      <span v-for="tag in selectedFilters">{{ tag }}</span>
    </div>
    <template v-if="searchCorinhosResults.length == 0 && searchHinosResults.length == 0">
      <div class="no-results">
        Nenhuma cifra encontrada...
      </div>
    </template>
    <template v-else>

      <section class="w-full" v-if="searchCorinhosResults.length >= 1">
        <h1>Corinhos</h1>
        <SongsCards :items="searchCorinhosResults" :text-search="search" />
      </section>
      <section class="w-full" v-if="searchHinosResults.length >= 1">
        <h1>Hinos da Harpa Cristã</h1>
        <SongsCards :items="searchHinosResults" :text-search="search" />
      </section>
    </template>
    <ScrollTop />
    <div class="overlay" v-if="showFilters" @click="showFilters = false"></div>
  </div>
</template>
<script>
import corinhos from '../assets/corinhos.json'
import hinos from '../assets/hinos-harpa-crista.json'
import { useFilterStore } from '~~/stores/filters';
import { mapState } from 'pinia'
export default {
  data() {
    return {
      search: "",
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
    corinhos() {
      return corinhos
    },
    hinosHarpa() {
      return hinos
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

    searchHinosResults() {
      let eligibleItems = this.hinosHarpa.filter((item) => item.cifra.length > 0)
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
<style lang="css" scoped>
.main_page_container {
  @apply container p-10 m-auto flex flex-col justify-center items-center gap-20;
}

.no-results {
  @apply flex items-center justify-center w-full h-80 py-16 text-slate-600 text-lg
}

.filters {
  position: absolute;
  right: -220px;
  top: -8px;
  z-index: 999;
}

.filter_tags {
  @apply w-full flex gap-4 items-center justify-center flex-wrap;
}

.filter_tags>span {
  @apply text-slate-600 bg-slate-100 shadow-sm rounded-2xl py-2 px-4 font-semibold
}

.button_filters {
  @apply w-16 p-2 bg-slate-200 rounded-md flex items-center justify-center;
}

.button_filters_active {
  @apply bg-red-500 text-white
}

h1 {
  @apply text-2xl text-slate-800 font-bold text-center py-10
}

.overlay {
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 998;
}

@keyframes fade-in {

  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

@media (max-width: 420px) {
  .main_page_container {
    @apply py-10 px-4;
  }
}

@media (max-width: 820px) {
  .filters {
    position: absolute;
    right: 0;
    top: 50px;
    z-index: 999;
  }
}
</style>