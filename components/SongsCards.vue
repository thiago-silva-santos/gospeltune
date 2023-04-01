<template>
  <div>
    <section class=" py-10" v-if="hasItems">
      <div
        class="grid grid-flow-row gap-8 text-neutral-600 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <template v-for="item in searchResults" :key="item">
            <nuxt-link :to="item.tipo == 'corinho' ? `/song-view/corinhos/${item.id}` : `/song-view/hinos-harpa-crista/${item.id}`">
            <div
              class="card_ ">
              <div class="song_number text-center font-bold text-lg">
                {{ item.id }}
              </div>
              <div class="song_title text-center">
                {{ item.nome }}
              </div>
            </div>
          </nuxt-link>
        </template>
      </div>
    </section>
    <div v-else class="no-results">
      Nenhuma cifra encontrada...
    </div>
  </div>
</template>
<script>
export default {
  emits: ['length'],
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
    return {
      hasItems: true
    };
  },

  computed: {
    searchResults() {
      return this.items.filter((item) => {
        const lowerCaseSearchTerm = this.textSearch.toLowerCase();
        return (
          item.nome.toLowerCase().includes(lowerCaseSearchTerm) ||
          item.id.toString().includes(lowerCaseSearchTerm)
        );
      });
    },
  },
  methods: {},
  created() {
  },
  watch: {
    searchResults(value) {
      if(value.length == 0) {
        this.hasItems = false
      }
      else {
        this.hasItems = true
      }
    }
  },
};
</script>
<style lang="css" scoped>

.card_ {
  @apply w-full flex flex-col gap-4 lg:p-4 md:p-4 sm:p-2 p-2 rounded shadow-lg bg-white cursor-pointer;
  transition: all ease-in-out .3s;
}

.no-results {
  @apply flex items-center w-full h-20 py-6 px-2 text-slate-600 text-lg
}
@media (min-width: 500px) {
  .card_:hover{
  @apply bg-gray-100 text-black
}
}
</style>