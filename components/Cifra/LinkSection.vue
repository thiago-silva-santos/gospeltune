<template>
    <section class="py-10">
      <div class="cards_container">
        <button-cifra-link class="mx-auto" v-for="song in props.items" :song-data="song" />
      </div>
    </section>
</template>
<script setup lang="ts">
import { PropType } from "vue";

import { ISongCifra } from "@/types/cifra/Cifra";
const props = defineProps({
  items: {
    type: Array as PropType<ISongCifra[]>,
    required: true,
  },
  textSearch: {
    type: String as PropType<String | Number>,
    default: "",
  }
})

</script>
<style lang="css" scoped>
@media (min-width: 320px) {
  .cards_container {
    @apply grid gap-6 w-full bg-white;
    grid-template-columns: 1fr;
  }

}

@media (min-width: 768px) {
  .cards_container {
    grid-template-columns: 1fr 1fr;
  }
}

@media (min-width: 1366px) {
  .cards_container {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }

}
</style>