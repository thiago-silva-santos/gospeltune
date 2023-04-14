<template>
  <div class="main_page_container">
    <div class="input_search_container min-w-[280px] md:w-[300px] lg:-w[350px] max-w-[400px] gap-10 flex flex-col">
      <input-search @search="onSearch"></input-search>
    </div>
    <template v-if="!showCorinhos && !showHinosHarpa">

      <div class="no-results">
        Nenhuma cifra encontrada...
      </div>


    </template>
    <template v-else>

      <section class="cards_container w-full" v-if="showCorinhos">
        <h1>Corinhos</h1>
        <SongsCards :items="searchCorinhosResults" :text-search="search" />
      </section>

      <section class="cards_container harpa w-full" v-if="showHinosHarpa">
        <h1>Hinos da Harpa Cristã</h1>
        <SongsCards :items="searchHinosResults" :text-search="search" />
      </section>
    </template>
    <ScrollTop />
    <!-- <edit-button/> -->
  </div>
</template>
<script>
import corinhos from '../assets/corinhos.json'
import hinos from '../assets/hinos-harpa-crista.json'
export default {
  data() {
    return {
      search: "",
      showCorinhos: true,
      showHinosHarpa: true
    };
  },
  methods: {
    onSearch(value) {
      this.search = value
    },
  },
  computed: {

    corinhos() {
      return corinhos
    },
    hinosHarpa() {
      return hinos
    },
    searchCorinhosResults() {
      const eligibleItems = this.corinhos.filter((item) => item.cifra.length > 0)
      if (this.search !== '') {

        console.log(eligibleItems)
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
      const eligibleItems = this.hinosHarpa.filter((item) => item.cifra.length > 0)

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
  watch: {
    searchCorinhosResults(value) {
      if (value.length == 0) {
        this.showCorinhos = false
      }
      else {
        this.showCorinhos = true
      }
    },
    searchHinosResults(value) {
      if (value.length == 0) {
        this.showHinosHarpa = false
      }
      else {
        this.showHinosHarpa = true
      }
    }
  },
};
</script>
<style lang="css" scoped>
.main_page_container {
  @apply container p-10 m-auto flex flex-col justify-center items-center gap-20;
}
.no-results {
  @apply flex items-center w-full h-20 py-6 text-slate-600 text-lg
}


h1 {
  @apply text-2xl text-red-700 font-semibold text-center
}

@media (max-width: 420px) {
  .main_page_container {
    @apply py-10 px-4;
  }
}
</style>