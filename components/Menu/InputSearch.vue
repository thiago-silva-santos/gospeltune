<template>
  <div class="input_search_container">
    <input v-model="searchQuery" placeholder="Buscar cifra" class="input_search" type="text" />
    <button class="button_filters" @click="show">
      <span class="material-symbols-outlined">
        menu
      </span>
    </button>
  </div>
</template>
   
<script>
import { mapState, mapActions } from 'pinia'
import { useSearchStore } from '~~/stores/search';
import { useFilterStore } from '@/stores/filters';


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
    ...mapActions(useFilterStore, ['hide', 'show'])
  },
  watch: {
    searchQuery(value) {
      this.updateSearch(value)
    },
  },
};
</script>

<style scoped>
.input_search_container {
  @apply w-full flex justify-center relative gap-2 ;
}
.input_search {
  @apply bg-slate-200 appearance-none border-2 border-slate-200 rounded py-2 px-4 text-gray-700 leading-tight;
  transition: all ease .3s;
  outline: none;
}

.input_search:focus {
  @apply bg-white border-gray-500
}

.button_filters {
  @apply w-14 p-2 rounded-md flex items-center justify-center bg-black text-white;
}
@media (min-width: 320px) {
  .input_search {
    @apply w-full
  }
}

@media (min-width: 375px) {
  .input_search {
    @apply w-full
  }
}

@media (min-width: 414px) {
  .input_search {
    @apply w-[300px];
  }
}

@media (min-width: 1366px) {
  .input_search {
    @apply w-[400px];
  }
}
</style>