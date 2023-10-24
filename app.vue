<template>
  <div>
    <NuxtPage />
  </div>
</template>

<script setup lang="ts">
import { useDivideStore } from '~~/stores/divide';
const DivideStore = useDivideStore()


const screenWidth = ref(window.innerWidth)

function handleWindowResize() {
  screenWidth.value = window.innerWidth;
}


watch(() => screenWidth.value, (value) => {
  if (value >= 1358) {
    if (DivideStore.divideButton == false) {
      DivideStore.showDivideButton()
    }
  } else {
    DivideStore.hideDivideButton()
    if (DivideStore.divide)
      DivideStore.updateDivide()
  }
})


onBeforeMount(() => {
  window.addEventListener('resize', handleWindowResize)
  if (screenWidth.value >= 1358)
    DivideStore.showDivideButton()
})
onBeforeUnmount(() => {
  window.removeEventListener('resize', handleWindowResize);
})

</script>
