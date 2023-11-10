<template>
  <div :class="['page_container', { 'menu_aberto': FilterStore.showFilters }]">
    <search-input />
    <div class="filter_tags" v-if="FilterStore.selectedFilters.length > 0">
      <span v-for="categoria in FilterStore.selectedFilters">{{ categoria }}</span>
    </div>
    <div class="section_content">
      <slot name="section">

      </slot>
    </div>

    <ButtonScrollTop />
    <MenuDrawer />
  </div>
</template>
<script setup lang="ts">
import { useFilterStore } from '@/stores/filters';

const FilterStore = useFilterStore()

</script>
<style lang="css" scoped>
.menu_aberto {
  @apply fixed w-full right-0
}

@media (min-width: 320px) {
  .section_content {
    @apply w-full max-w-[1366px]
  }
  .page_container {
    @apply w-full py-10 px-4 m-auto flex flex-col justify-center items-center gap-8;
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
    @apply py-10;
  }
}
</style>