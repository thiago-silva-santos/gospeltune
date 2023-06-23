<template>
  <div class="page_container">
    <div class="input_search_container ">
      <menu-input-search @search="onSearch"></menu-input-search>
      <button class="button_filters" @click="show">
        <span class="material-symbols-outlined">
          menu
        </span>
      </button>
    </div>
    <div class="filter_tags">
      <span v-for="tag in selectedFilters">{{ tag }}</span>
    </div>
    <slot name="section">

    </slot>
    <ButtonScrollTop />
    <MenuDrawer />
  </div>
</template>
<script>
import { useFilterStore } from '@/stores/filters';
import { mapState, mapActions } from 'pinia'

export default {
  data() {
    return {
      search: "",
    };
  },
  methods: {
    onSearch(value) {
      this.search = value
    },
    ...mapActions(useFilterStore, ['hide', 'show'])
  },
  computed: {
    ...mapState(useFilterStore, ['filters', 'selectedFilters', 'showFilters'])
  },
  watch: {
    showFilters(value) {
      if (value) {
        document.body.classList.add('menu-aberto');
      } if (!value) {
        document.body.classList.remove('menu-aberto');
      }
    }
  },
};


</script>
<style lang="css" scoped>
.page_container {
  @apply container p-10 m-auto flex flex-col justify-center items-center gap-10;
}


.filter_tags {
  @apply w-full flex gap-4 items-center justify-center flex-wrap;
}

.filter_tags>span {
  @apply text-slate-600 bg-slate-100 shadow-sm rounded-2xl py-2 px-4 font-semibold
}

.button_filters {
  @apply w-16 p-2 rounded-md flex items-center justify-center bg-red-500 text-white;
}

h1 {
  @apply text-[28px] text-slate-800 font-bold text-center py-4
}

.input_search_container {
  @apply relative w-[300px] gap-2 flex;
}


@media (max-width: 420px) {
  .page_container {
    @apply py-10 px-4;
  }
}


@media (max-width: 350px) {
  .input_search_container {
    @apply w-[250px]
  }
}
</style>