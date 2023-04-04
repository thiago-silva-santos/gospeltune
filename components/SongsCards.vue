<template>
  <div>
    <section class=" py-10" v-if="hasItems">
      <div class="grid grid-flow-row gap-8 text-neutral-600 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <template v-for="item in searchResults" :key="item">
          <nuxt-link v-if="item.cifra.length > 0"
            :to="item.tipo == 'corinho' ? `/song-view/corinhos/${item.id}` : `/song-view/hinos-harpa-crista/${item.id}`">
            <div class="card_ ">
              <div class="flex items-center gap-4">
                <div class="song_number text-center font-bold text-lg">
                  {{ item.id }}
                </div>
                <div class="song_title text-center text-ellipsis overflow-hidden w-full">
                  {{ item.nome }}
                </div>
              </div>
            </div>
          </nuxt-link>
          <div v-else class="card_">
            <div class="flex items-center gap-4">
              <div class="song_number text-center font-bold text-lg">
                {{ item.id }}
              </div>
              <div class="song_title text-left text-ellipsis overflow-hidden w-full">
                {{ item.nome }}
              </div>
            </div>
              <span class="material-symbols-outlined" id="empty_song">
                error

              </span>

          </div>
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
      const lowerCaseSearchTerm = this.textSearch.toLowerCase().normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/[^a-z0-9]/g, "");

      return this.items.filter((item) => {
        const itemName = item.nome.toLowerCase().normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
          .replace(/[^a-z0-9]/g, "");

        const itemId = item.id.toString().normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
          .replace(/[^a-z0-9]/g, "");

        return (
          itemName.includes(lowerCaseSearchTerm) ||
          itemId.includes(lowerCaseSearchTerm)
        );
      });
    },
  },
  methods: {},
  created() {
  },
  watch: {
    searchResults(value) {
      if (value.length == 0) {
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
  @apply w-full flex items-center justify-between p-4 rounded-lg shadow-lg bg-white cursor-pointer relative;
  transition: all ease-in-out .3s;
  max-height: 60px;
}

.song_number {
  @apply text-slate-400
}

.song_title {
  @apply truncate max-w-[230px] text-slate-700 2xl:max-w-[230px] xl:max-w-[180px] lg:max-w-[200px] 
}

.no-results {
  @apply flex items-center w-full h-20 py-6 text-slate-600 text-lg
}

#empty_song {
  top: 10px;
  right: 10px;
  @apply w-6 h-6 text-slate-300
}

@media (min-width: 500px) {
  .card_:hover {
    @apply bg-slate-50
  }
}

@media (max-width: 424px) {
  .no-results {
    @apply flex justify-center w-full
  }
}
</style>