<template>
    <div class="option_list">
        <div class="flex flex-col gap-2 w-full p-2">

            <div :class="['option', { 'option_active': selectedFilters.includes(categoria) }]" v-for="categoria in filters"
                :key="categoria" type="checkbox" :value="categoria" :name="categoria" @click="selecionarCategoria(categoria)">
                
                <span v-if="selectedFilters.includes(categoria)" class="material-symbols-outlined text-red-500">
                    do_not_disturb_on
                </span>
                <span v-else class="material-symbols-outlined text-slate-500">
                    add_circle
                </span>
                {{ categoria }}
            </div>
        </div>
        <div class="sections">
            <nuxt-link to="/">Harpa</nuxt-link>
            <nuxt-link to="/corinhos">Corinhos</nuxt-link>
        </div>

    </div>
</template>
  
<script>
import { useFilterStore } from '~~/stores/filters';
import { mapActions } from 'pinia';
import { mapState } from 'pinia';
export default {
    data() {
        return {
            categoriasSelecionadas: []
        };
    },
    computed: {
        ...mapState(useFilterStore, ['filters', 'selectedFilters']),
    },
    methods: {

        ...mapActions(useFilterStore, ['updateSelectedFilters']),
        selecionarCategoria(categoria) {
            this.updateSelectedFilters(categoria)
        }
    }
};
</script>
<style scoped>
.option_list {
    @apply shadow-lg flex flex-col bg-white rounded-lg w-52;
}
a {
    @apply p-4 w-full text-center
}
a.router-link-active {
  @apply text-red-500 bg-slate-100;
}
.option {
    @apply cursor-pointer flex items-center gap-4 text-slate-700 p-2 rounded-md;
    transition: all ease .3s;
}
.sections {
    @apply flex w-full border-t-2 items-center font-semibold text-gray-600
}
.option_active {
    @apply bg-slate-100
}

@media (min-width: 420px) {
  .option:hover {
    @apply bg-slate-100
  }
}
</style>