<template>
    <div class="option_list">
        <div class="flex flex-col relative">
            <div class="options_title">
                <h1>Páginas</h1>
                <span class="bar"></span>
            </div>
            <div class="sections">
                <nuxt-link to="/">Hinos da Harpa</nuxt-link>
                <nuxt-link to="/corinhos">Corinhos</nuxt-link>
            </div>
        </div>
        <div class="flex flex-col">
            <div class="options_title">
                <h1>Filtros</h1>
                <span class="bar"></span>
            </div>
            <div class="flex flex-col gap-2 w-full p-2">
                <div :class="['option', { 'option_active': selectedFilters.includes(categoria), 'option_music_feeling': !cifraTypes.includes(categoria) }]"
                    v-for="categoria in usableFilters" :key="categoria" @click="selecionarCategoria(categoria)">
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
        <div class="menu_logo" @click="hide">
            <img src="/gospeltunelogo.png" alt="logo">
            <h1>Gospeltune</h1>
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
        usableFilters() {
            if (this.$route.path == '/corinhos') {
                return this.filters.filter(item => !this.cifraTypes.includes(item));
            } else {
                return this.filters
            }
        }
    },
    methods: {

        ...mapActions(useFilterStore, ['updateSelectedFilters', 'hide']),
        selecionarCategoria(categoria) {
            this.updateSelectedFilters(categoria)
        }
    }
};
</script>
<style scoped>
.option_list {
    @apply shadow-lg flex flex-col bg-white p-6 w-full h-full gap-10 relative;
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

.options_title {
    @apply flex items-center py-2 gap-3 font-semibold text-sm;
}

/* .options_title::before {
    content: '';
    position: absolute;
    width: calc(100% - 60px);
    height: 4px;
    left: 60px;
    top: 50%;
    transform: translate(0, -50%);
    @apply bg-slate-200 rounded-lg;
} */
.sections {
    @apply flex flex-col w-full items-center font-semibold text-slate-700 p-2
}

.bar {
    @apply block w-full h-[4px] bg-slate-200 rounded-lg;
}

.option_active {
    @apply bg-slate-100
}

.option_music_feeling {
    @apply text-red-500
}

.menu_logo {
    @apply w-full flex flex-col justify-center items-center absolute bottom-5 left-0 right-0 p-4 pb-0 border-t-[2px] border-slate-200
}

.menu_logo img {
    @apply w-14 h-14 object-contain
}

.menu_logo h1 {
    @apply text-lg
}

@media (max-width: 420px) {
    .option_list {
        @apply p-4
    }

    .menu_logo img {
        @apply w-10 h-10 object-contain
    }
    .menu_logo h1 {
        @apply text-base
    }
}

@media (min-width: 420px) {
    .option:hover {
        @apply bg-slate-100
    }
}
</style>