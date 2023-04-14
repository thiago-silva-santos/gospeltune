<template>
    <div class="filter_button">
        <nuxt-link to="/edit">
            <button>
                <span class="material-symbols-outlined">
                    edit
                </span>
            </button>
        </nuxt-link>

    </div>
</template>
<script>
export default {

}
</script>
<style lang="css" scoped>
    .filter_button {
        @apply absolute rounded-md bg-red-900 text-white p-2 w-10 h-10 hover:bg-red-700 transition ease-in-out delay-100 ;
        bottom: 20px;
        right: 20px;
    }
</style>