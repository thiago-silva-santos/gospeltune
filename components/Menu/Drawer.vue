<template>
    <Transition name="overlay-fade">
        <div class="overlay" @click="hide" v-if="showFilters"></div>
    </Transition>
        <Transition name="fade">
            <div class="drawer" v-if="showFilters">
                <div class="option_list">
                    <div class="flex flex-col relative">
                        <div class="options_title">
                            <h1>Páginas</h1>
                            <span class="bar"></span>
                        </div>
                        <div class="sections">
                            <nuxt-link to="/" @click="hide">Hinos da Harpa</nuxt-link>
                            <nuxt-link to="/corinhos" @click="hide">Corinhos</nuxt-link>
                            <nuxt-link to="/hinos" @click="hide">Outros</nuxt-link>
                        </div>
                    </div>
                    <div class="flex flex-col">
                        <div class="options_title">
                            <h1>Filtros</h1>
                            <span class="bar"></span>
                        </div>
                        <div class="flex flex-col gap-2 w-full p-2">
                            <div :class="['option', { 'option_active': selectedFilters.includes(categoria), 'option_song_type': !cifraTypes.includes(categoria) }]"
                                v-for="categoria in usableFilters" :key="categoria" @click="selecionarCategoria(categoria)">
                                {{ categoria }}
                                <span v-if="selectedFilters.includes(categoria)"
                                    class="material-symbols-outlined text-red-500">
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
            </div>
        </Transition>
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
        ...mapState(useFilterStore, ['filters', 'selectedFilters', 'showFilters']),
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
    z-index: 999;
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

.drawer {
    @apply absolute w-[384px] max-w-[384px];
    right: 0;
    bottom: 0;
    top: 0;
    z-index: 999;
}

.bar {
    @apply block w-full h-[4px] bg-slate-200 rounded-lg;
}

.option_active {
    @apply bg-slate-100
}

.option_song_type {
    @apply text-red-700
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

.overlay {
    background-color: rgba(0, 0, 0, 0.8);
    position: fixed;
    overflow: hidden !important;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: 995;
}

.fade-enter-active {
    animation: fade-in .3s;
}

.fade-leave-active {
    animation: fade-out .3s;
}
.overlay-fade-enter-active {
    animation: overlay-fade .5s;
}

.overlay-fade-leave-active {
    animation: overlay-fade .5s reverse;
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

@keyframes overlay-fade {

0% {
    opacity: 0;
}

100% {
    opacity: 1;
}
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

    .drawer {
        @apply w-3/4;
    }
}

</style>