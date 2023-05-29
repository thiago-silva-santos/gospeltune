<template>
  <div class="page_container">
    <div class="input_search_container relative min-w-[280px] md:w-[300px] lg:-w[350px] max-w-[400px] gap-2 flex">
      <input-search @search="onSearch"></input-search>
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
    <ScrollTop />
    <div class="overlay" v-if="showFilters" @click="hide"></div>
    <Transition name="fade">
      <div class="filters" v-show="showFilters">
        <SelectCategory/>
      </div>

    </Transition>
  </div>
</template>
<script>
import { useFilterStore } from '~~/stores/filters';
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
      } if(!value) {
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

.no-results {
  @apply flex items-center justify-center w-full h-80 py-16 text-slate-600 text-lg
}

.filters {
  @apply absolute w-[384px] max-w-[384px];
  right: 0;
  bottom: 0;
  top: 0;
  z-index: 999;
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

.overlay {
  background-color: rgba(0, 0, 0, 0.8);
  position: fixed;
  overflow: hidden !important;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 998;
}

.fade-enter-active {
  animation: fade-in .2s;

}

.fade-leave-active {
  animation: fade-out .2s;
}

@keyframes fade-in {

  0% {
    transform: translateX(100%);
    opacity: 0;
  }

  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes fade-out {

  0% {
    transform: translateX(0);
    opacity: 1;
  }

  100% {
    transform: translateX(100%);
    opacity: 0;
  }
}

@media (max-width: 420px) {
  .page_container {
    @apply py-10 px-4;
  }
}

@media (max-width: 820px) {
  .filters {
    @apply absolute w-3/4;
  }
  .menu-aberto {
    position: fixed;
    overflow: hidden;
    width: 100%;
    height: 100%;
  }
}
</style>