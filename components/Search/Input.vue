<template>
  <div class="input_search_container">
    <input v-model="searchQuery" placeholder="Buscar cifra" class="input_search" type="text" />
    <button class="button_filters" @click="FilterStore.show">
      <span class="material-symbols-outlined">
        menu
      </span>
    </button>
  </div>
</template>
   
<script setup lang="ts">
import { useSearchStore } from '~~/stores/search';
import { useFilterStore } from '@/stores/filters';

const SearchStore = useSearchStore()
const FilterStore = useFilterStore()

const searchQuery = ref<string>('')

watch(() => searchQuery.value, (value) => {
  SearchStore.updateSearch(value)
})

</script>

<style scoped>
.input_search_container {
  @apply w-full flex justify-center relative gap-2;
}



.input_search:focus {
  @apply bg-white border-gray-500
}



@media (min-width: 320px) {
  .input_search {
    @apply w-full text-sm h-8 bg-slate-200 appearance-none border-2 border-slate-200 rounded-md py-1 px-2 text-gray-700 leading-tight;
    transition: all ease .3s;
    outline: none;
  }

  .button_filters {
    @apply w-10 h-8 p-2 rounded-md flex items-center justify-center bg-red-500 text-white;
  }

  .button_filters span {
    @apply text-[24px]
  }
}

@media (min-width: 375px) {
  .input_search {
    @apply w-full h-10 text-base
  }
  .button_filters {
    @apply w-12 h-10
  }
  .button_filters span {
    @apply text-[28px]
  }
}

@media (min-width: 414px) {
  .input_search {
    @apply max-w-[300px] ;
  }
}


@media (min-width: 1366px) {
  .input_search {
    @apply max-w-[400px] h-12;
  }
  .button_filters {
    @apply h-12 w-14
  }

}
</style>