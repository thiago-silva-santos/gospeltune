<template>
  <div>
    <section class=" py-10">
      <!-- Card Grid -->

      <div
        class="grid grid-flow-row gap-8 text-neutral-600 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <template v-for="item in searchResults" :key="item">
            <nuxt-link :to="`/song-view/${item.id}`">
            <!-- Card Item -->
            <div
              class="card_ ">
              <div class="song_number text-center font-bold text-lg">
                {{ item.numero }}
              </div>
              <div class="song_title text-center">
                {{ item.nome }}
              </div>
            </div>
          </nuxt-link>
        </template>
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
<style lang="css" scoped>

.card_ {
  @apply w-full flex flex-col gap-4 lg:p-4 md:p-4 sm:p-2 p-2 rounded shadow-lg bg-white duration-300 cursor-pointer hover:bg-red-50 transition ease-in-out delay-150
}
</style>