<template>
  <div>
    <section class=" py-10">
      <div class="grid grid-flow-row gap-8 text-neutral-600 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <template v-for="item in items" :key="item">
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
          </div>
        </template>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  emits: ['results'],
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
  created() {
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
  @apply text-red-700
}

.song_title {
  @apply truncate max-w-[230px] text-slate-700 2xl:max-w-[230px] xl:max-w-[180px] lg:max-w-[200px] 
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