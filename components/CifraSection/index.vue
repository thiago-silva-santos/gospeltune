<template>
  <div class="page_container">
    <menu-input-search @search="onSearch"/>
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
import { mapState } from 'pinia'

export default {
  data() {
    return {
      search: "",
    };
  },
  methods: {
    onSearch(value) {
      this.search = value
    }
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



h1 {
  @apply text-[28px] text-slate-800 font-bold text-center py-4
}




@media (max-width: 420px) {
  .page_container {
    @apply py-10 px-4;
  }
}

</style>