<template>
    <div class="edit_button">
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
    .edit_button {
        @apply fixed rounded-full bg-red-900 text-white p-2 w-10 h-10 hover:bg-red-700 transition ease-in-out delay-100 ;
        bottom: 20px;
        right: 20px;
    }
</style>