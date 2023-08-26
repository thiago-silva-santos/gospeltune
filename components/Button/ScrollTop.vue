<template>
    <div class="scroll-to-top" v-if="show">
        <button @click="scrollToTop">
            <span class="material-symbols-outlined font-bold">
                arrow_upward
            </span>
        </button>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            show: false,
            scrollY: 0
        }
    },
    created() {
        window.addEventListener('scroll', this.handleScroll)
    },
    destroyed() {
        window.removeEventListener('scroll', this.handleScroll)
    },
    methods: {
        handleScroll() {
            this.scrollY = window.scrollY
            this.show = this.scrollY > 300
        },
        scrollToTop() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            })
        }
    }
}
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
  