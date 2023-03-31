<template>
    <input
      v-model="searchQuery"
      placeholder="Digite sua pesquisa"
      class="input_search"
      id="inline-full-name"
      type="text"
    />
</template>
   
<script>
export default {
  data() {
    return {
      searchQuery: "",
    };
  },
  watch: {
     searchQuery(value) {
      this.$emit("search", value);
    },
  },
};
</script>

<style scoped>
.input_search {
  @apply bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-slate-400;
}

</style>