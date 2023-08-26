<template>
    <section class="py-10">
      <div class="cards_container">
        <CardSong v-for="song in props.items" :song-data="song" />
      </div>
    </section>
</template>
<script setup lang="ts">
import { PropType } from "vue";

import { ISongCifra } from "@/types/cifra/Cifra";
const props = defineProps({
  items: {
    type: Object as PropType<ISongCifra>,
    required: true,
  },
  textSearch: {
    type: String,
    default: "",
  }
})

</script>
<style lang="css" scoped>
@media (min-width: 320px) {
  .cards_container {
    @apply grid;
    grid-template-columns: 1fr;
  }

}

@media (min-width: 768px) {
  .cards_container {
    @apply grid;
    grid-template-columns: 1fr 1fr;
  }
}

@media (min-width: 1366px) {
  .cards_container {
    @apply grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }

}
</style>