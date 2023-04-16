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
.scroll-to-top {
    position: fixed;
    bottom: 20px;
    right: 20px;
    z-index: 999;
}

.scroll-to-top button {
    @apply bg-red-700;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    border: none;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    font-size: 24px;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.scroll-to-top button:hover {
    @apply bg-red-600
}
</style>
  