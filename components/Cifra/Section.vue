<template>
  <div class="page_container">
    <search-input />
    <div class="filter_tags" v-if="FilterStore.selectedFilters.length > 0">
      <span v-for="categoria in FilterStore.selectedFilters">{{ categoria }}</span>
    </div>
    <slot name="section">

    </slot>
    <ButtonScrollTop />
    <MenuDrawer />
  </div>
</template>
<script setup lang="ts">
import { useFilterStore } from '@/stores/filters';

const FilterStore = useFilterStore()


watch(() => FilterStore.showFilters, (value) => {
  if (value) {
    document.body.classList.add('menu-aberto');
  }
  document.body.classList.remove('menu-aberto');
})

</script>
<style lang="css" scoped>
@media (min-width: 320px) {
  .page_container {
    @apply container py-10 px-4 m-auto flex flex-col justify-center items-center gap-8;
  }

  .filter_tags {
    @apply w-full flex gap-2 items-center justify-center flex-wrap;
  }

  .filter_tags>span {
    @apply text-slate-500 text-[14px] bg-slate-100 rounded-md px-2 py-1 font-medium
  }
}


@media (min-width: 414px) {
  .page_container {
    @apply p-10;
  }
}
</style>