<template>
    <Transition name="overlay-fade">
        <div class="overlay" @click="FilterStore.hide()" v-if="FilterStore.showFilters"></div>
    </Transition>
    <Transition name="fade">
        <div class="drawer" v-if="FilterStore.showFilters">
            <div class="option_list">
                <div class="flex flex-col relative">
                    <div class="options_title">
                        <h1>Páginas</h1>
                        <span class="bar"></span>
                    </div>
                    <div class="sections">
                        <button v-for="(button, index) in routes" :key="index" @click="closeDrawerAndGoToPage(button.path)"
                            :class="{ 'active_route': $route.name == button.name }">
                            {{ button.title }}
                        </button>
                    </div>
                </div>
                <div class="flex flex-col">
                    <div class="options_title">
                        <h1>Filtros</h1>
                        <span class="bar"></span>
                    </div>
                    <div class="options">
                        <div :class="['option', { 'option_active': FilterStore.selectedFilters.includes(categoria) }]"
                            v-for="categoria in usableFilters" :key="categoria"
                            @click="FilterStore.updateSelectedFilters(categoria)">
                            {{ categoria }}
                            <span v-if="FilterStore.selectedFilters.includes(categoria)" class="material-symbols-outlined text-red-500">
                                remove
                            </span>
                            <span v-else class="material-symbols-outlined text-slate-500">
                                add
                            </span>
                        </div>

                    </div>
                </div>
                <div class="menu_logo" @click="FilterStore.hide()">
                    <img src="/gospeltunelogo.png" alt="logo">
                    <h1>Gospeltune</h1>
                    <!-- <h2 class="text-xs text-gray-200">Developed by Thiago Silva.</h2> -->
                </div>
            </div>
        </div>
    </Transition>
</template>
  
<script setup lang="ts">
import { useRoute } from 'vue-router';
import { useRouter } from 'vue-router';

const $route = useRoute()
const $router = useRouter()

import { useFilterStore } from '@/stores/filters';
import { SongCategoria } from '@/types/cifra/Cifra';

const FilterStore = useFilterStore()

interface IRoute {
    title: string,
    name: string,
    path: string
}

const routes = ref<IRoute[]>(
    [
        {
            title: "Hinos da Harpa",
            name: "index",
            path: "/"
        },
        {
            title: "Corinhos",
            name: "corinhos",
            path: "/corinhos"
        },
        {
            title: "Louvores",
            name: "louvores",
            path: "/louvores"
        }
    ]
)

const usableFilters = computed(() => {
    if ($route.path == '/corinhos' || $route.path === '/louvores') {
        return ["Envolvente", "Introspectivo"] as SongCategoria[];
    } else {
        return FilterStore.filters as SongCategoria[]
    }
})

function closeDrawerAndGoToPage(route: string) {
    FilterStore.hide()
    setTimeout(() => {
        $router.push(route)
    }, 400);
}

</script>
<style scoped>
.bar {
    @apply block w-full h-[4px] bg-slate-200 rounded-lg;
}

.option_active {
    @apply bg-slate-100
}

.option_song_type {
    @apply text-red-700
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

@media (min-width: 320px) {
    .drawer {
        @apply absolute w-4/5 max-w-[384px] h-screen;
        right: 0;
        top: 0;
        z-index: 999;
    }

    .option_list {
        @apply shadow-lg flex flex-col bg-white p-6 w-full h-full gap-6 relative;
        z-index: 999;
    }

    .options {
        @apply flex flex-col gap-2 w-full p-2
    }

    .option {
        @apply cursor-pointer text-sm flex items-center gap-4 text-slate-700 py-1 px-2 rounded-md justify-between;
        transition: all ease .3s;
    }

    .option span {
        @apply text-[16px]
    }

    .options_title {
        @apply flex items-center py-1 gap-3 font-semibold text-sm text-gray-600;
    }

    .active_route {
        @apply text-red-500 bg-slate-100;
    }

    .sections {
        @apply flex flex-col gap-2 w-full items-center font-medium text-slate-700 p-2
    }

    .sections button {
        @apply p-1 w-full text-center rounded-lg text-[14px]
    }


    .menu_logo {
        @apply w-full flex flex-col justify-center items-center absolute bottom-4 left-0 right-0 p-4 pb-0 border-slate-200
    }

    .menu_logo img {
        @apply w-8 h-8 object-contain
    }

    .menu_logo h1 {
        @apply text-[14px]
    }

}

@media (min-width: 414px) {
    .options_title {
        @apply text-[16px]
    }

    .sections button {
        @apply text-[16px]
    }

    .option {
        @apply p-2 text-[16px]
    }

    .option span {
        @apply text-[18px]
    }

    .menu_logo img {
        @apply w-10 h-10
    }

    .menu_logo h1 {
        @apply text-[16px]
    }
}
</style>