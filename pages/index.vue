<template>
  <div class="main_page_container">
    <div class="input_search_container min-w-[280px] md:w-[300px] lg:-w[350px] max-w-[400px] gap-10 flex flex-col">
      <input-search @search="onSearch"></input-search>
    </div>
      <section class="cards_container w-full">
        <h1>Corinhos</h1>
        <SongsCards :items="corinhos" :text-search="search"/>
      </section>

    <section class="cards_container harpa w-full">
      <h1>Hinos da Harpa Cristã</h1>
      <SongsCards :items="hinos" :text-search="search"/>
    </section>
    <ScrollTop/>
    <!-- <edit-button/> -->
  </div>
</template>
<script>
import corinhos from '../assets/corinhos.json'
import hinos from '../assets/hinos-harpa-crista.json'
export default {
  data() {
    return {
      search: '',
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
    hinos() {
      return hinos
    }
  },
};
</script>
<style lang="css" scoped>
.main_page_container {
  @apply container p-10 m-auto flex flex-col justify-center items-center gap-20;
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