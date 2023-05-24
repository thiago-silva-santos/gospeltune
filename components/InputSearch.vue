<template>
  <input v-model="searchQuery" placeholder="Digite sua pesquisa" class="input_search" type="text" />
</template>
   
<script>
import { useSearchStore } from '~~/stores/search';
import { mapState, mapActions } from 'pinia'

export default {
  data() {
    return {
      searchQuery: "",
    };
  },
  computed: {
    ...mapState(useSearchStore, ['search']),

  },
  methods: {
    ...mapActions(useSearchStore, ['updateSearch']),

  },
  watch: {
    searchQuery(value) {
      this.updateSearch(value)
    },
  },
};
</script>

<style scoped>
.input_search {
  @apply bg-slate-200 appearance-none border-2 border-slate-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:bg-white focus:border-slate-500;
  transition: all ease .3s;
  outline: none;
}
</style>