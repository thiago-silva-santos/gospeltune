<template>
    <div class="option_list">
        <div class="flex flex-col gap-2 p-2">
            <div class="sections">
                <nuxt-link to="/">Hinos da Harpa</nuxt-link>
                <nuxt-link to="/corinhos">Corinhos</nuxt-link>
            </div>
        </div>
        <div class="flex flex-col">
            <div class="flex flex-col gap-2 w-full p-2">
                <div  :class="['option', { 'option_active': selectedFilters.includes(categoria), 'option_music_feeling': !cifraTypes.includes(categoria) }]" v-for="categoria in usableFilters"
                    :key="categoria" @click="selecionarCategoria(categoria)">                  
                    {{ categoria }}
                    <span v-if="selectedFilters.includes(categoria)" class="material-symbols-outlined text-red-500">
                        remove
                    </span>
                    <span v-else class="material-symbols-outlined text-slate-500">
                        add
                    </span>
                </div>

            </div>
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
            cifraTypes: ["Santa Ceia", "Jovens", "Missões"]
        };
    },
    computed: {
        ...mapState(useFilterStore, ['filters', 'selectedFilters']),
        usableFilters(){
            if(this.$route.path == '/corinhos') {
                return this.filters.filter(item => !this.cifraTypes.includes(item));
            } else {
                return this.filters
            }
        }
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
    @apply shadow-lg flex flex-col bg-white px-2 py-4  w-full h-full gap-10;
}
a {
    @apply p-2 w-full text-center rounded-lg
}
a.router-link-active {
  @apply text-red-500 bg-slate-100;
}
.option {
    @apply cursor-pointer flex items-center gap-4 text-slate-700 p-2 rounded-md justify-between;
    transition: all ease .3s;
}
.sections {
    @apply flex flex-col w-full items-center font-semibold text-gray-600
}
.option_active {
    @apply bg-slate-100
}
.option_music_feeling {
    @apply text-blue-700
}

@media (min-width: 420px) {
  .option:hover {
    @apply bg-slate-100
  }
}
</style>