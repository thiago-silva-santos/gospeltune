<template>
  <div class="main_page_container">
    <div
      class="input_search_container min-w-[280px] md:w-[300px] lg:-w[350px] max-w-[400px] gap-10 flex flex-col"
    >
      <input-search @search="onSearch"></input-search>
    </div>
    <section class="cards_container w-full">
      <songs-cards :items="items" :text-search="search"></songs-cards>
    </section>
  </div>
</template>
<script>
import SongsCards from "~~/components/SongsCards.vue";
import hinos from '@/assets/hinos.json'
export default {
  components: { SongsCards },
  data() {
    return {
      items: hinos,
      search: '',
    };
  },
  methods: {
    onSearch(value) {
      console.log("aaaaa "+value)
      this.search = value
      // this.searchResults = this.items.filter((item) => {
      //   return item.nome.toLowerCase().includes(value.toLowerCase());
      // });
      // if(value.length >= 3) {
      // }
    },
  },
};
</script>
<style lang="css">
.main_page_container {
  @apply container p-10 m-auto flex flex-col justify-center items-center gap-10;
}
.input_search {
  @apply bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500;
}

@media (max-width: 420px) {
  .main_page_container {
    @apply py-10 px-4;
  }
  .input_search {
    @apply w-full;
  }
}
</style>