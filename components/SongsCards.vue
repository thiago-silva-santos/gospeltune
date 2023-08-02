<template>
  <div>
    <section class=" py-10">
      <div :class="['cards_container', {'list_mode': listMode == 'true'}]">
        <template v-for="item in items" :key="item">
          <nuxt-link v-if="item.cifra.length > 0"
            :to="item.tipo == 'corinho' ? `/song-view/corinhos/${item.id}` : item.tipo == 'hino' ? `/song-view/hinos/${item.id}` : `/song-view/hinos-harpa-crista/${item.id}`">
            <div :class="['card_', { 'card_list_mode': listMode == 'true'}] ">
              <div class="song_number text-center font-bold text-lg">
                {{ item.id }}
              </div>
              <div class="flex flex-col">
                <span class="song_title">{{ item.nome }}</span>
                <span class="song_subtitle" v-if="listMode == 'false'">{{ item.categoria.includes('Envolvente') ? 'Envolvente' : 'Introspectivo'
                }}</span>
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
    listMode: {
      type: String,
      default: 'false'
    }
  }
};
</script>
<style lang="css" scoped>
.cards_container {
  @apply grid grid-flow-row gap-4 text-neutral-600 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ;
}


.card_ {
  @apply w-full flex h-fit items-center justify-start py-4 px-2 gap-3 rounded-lg bg-white cursor-pointer relative;
}


.song_number {
  @apply text-red-600 w-14 h-14 text-2xl rounded-full flex items-center justify-center bg-slate-50
}

.song_title {
  @apply truncate max-[320px]:w-52 max-w-[230px] text-slate-600 2xl:max-w-[230px] xl:max-w-[180px] lg:max-w-[200px] text-lg;
}

.song_subtitle {
  @apply text-slate-400;
}

.list_mode {
  @apply gap-2 max-[768px]:grid-cols-2;
}
.card_list_mode {
  @apply h-8 py-2 max-[320px]:p-0
}
.card_list_mode .song_number{
  @apply w-5 h-5 text-base bg-transparent
}
.card_list_mode .song_title, .song_subtitle{
  @apply text-xs max-[500px]:truncate max-[320px]:w-24 w-32
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

@media (max-width: 350px) {
  .card_ {
    @apply text-sm 
  }

  .song_title {
  @apply text-[16px]
}
  .song_number {
    @apply w-12 h-12
  }
}


</style>