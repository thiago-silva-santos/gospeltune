<template>
  <div>
    <section class="dark:bg-gray-900 py-10">
      <!-- Card Grid -->
      <div
        class="grid grid-flow-row justify-center items-center gap-8 text-neutral-600 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
      >
        <!-- Card Item -->
        <div
          v-for="item in searchResults"
          :key="item"
          class="flex flex-col gap-4 lg:p-4 md:p-4 sm:p-2 p-2 rounded shadow-lg shadow-gray-200 dark:shadow-gray-900 bg-white dark:bg-gray-800 duration-300 cursor-pointer"
        >
          <div class="song_number text-center font-bold text-lg">
            {{ item.numero }}
          </div>
          <div class="song_title text-center">
            {{ item.nome }}
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  props: {
    items: {
      type: Object,
      required: true,
    },
    textSearch: {
      type: String,
      default: "",
    },
  },
  data() {
    return {};
  },

  computed: {
    searchResults() {
      return this.items.filter((item) => {
        const lowerCaseSearchTerm = this.textSearch.toLowerCase();
        return (
          item.nome.toLowerCase().includes(lowerCaseSearchTerm) ||
          item.numero.toString().includes(lowerCaseSearchTerm)
        );
      });
    },
  },
  methods: {},

  watch: {},
};
</script>
<style lang="" scoped>
</style>