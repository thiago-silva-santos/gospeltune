<template>
    <div class="scroll-to-top" v-if="show">
        <button @click="scrollToTop">
            <span class="material-symbols-outlined font-bold">
                arrow_upward
            </span>
        </button>
    </div>
</template>
  
<script setup lang="ts">

const show = ref<boolean>(false)
const scrollY = ref<number>(0)

function handleScroll() {
    scrollY.value = window.scrollY
    show.value = scrollY.value > 300
}

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
}

onMounted(() => {
    window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
})

</script>
  
<style scoped>
@media (min-width: 320px) {
    .scroll-to-top {
        position: fixed;
        bottom: 20px;
        right: 20px;
        z-index: 999;
    }

    .scroll-to-top button {
        @apply bg-red-500 flex justify-center items-center text-white border-0 rounded-full w-9 h-9 cursor-pointer;
        transition: background-color 0.3s ease;
    }

    .scroll-to-top button:hover {
        @apply bg-red-600
    }
}



@media (min-width: 414px) {
    .scroll-to-top button {
        @apply w-10 h-10
    }

}
</style>
  