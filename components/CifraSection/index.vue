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
    <slot name="section">

    </slot>
    <ScrollTop />
    <div class="overlay" v-if="showFilters" @click="showFilters = false"></div>
  </div>
</template>
<script>
import { useFilterStore } from '~~/stores/filters';
import { mapState } from 'pinia'
// import { onBeforeRouteLeave } from "nuxt/app"
// onBeforeRouteLeave((newRoute) => {
//   console.log(newRoute)
//   useSearchStore().updateSearch()
// })
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
    ...mapState(useFilterStore, ['filters', 'selectedFilters'])
}
};


</script>
<style lang="css" scoped>
.main_page_container {
  @apply container p-10 m-auto flex flex-col justify-center items-center gap-10;
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
  @apply bg-red-600 text-white
}

h1 {
  @apply text-[28px] text-slate-800 font-bold text-center py-4
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