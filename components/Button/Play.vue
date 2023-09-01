<template>
     <button class="play_button" id="play_button" @click="scrollPage">
          <span class="material-icons">
               play_arrow
          </span>
     </button>
</template>
<script setup lang="ts">

const scrollInterval = ref<NodeJS.Timeout>()

function scrollPage() {
     if(window.scrollY !== 0) {
          clearInterval(scrollInterval.value);
          document.getElementById("play_button")?.classList.remove('play_button_active')
     }

     document.getElementById("play_button")?.classList.add('play_button_active')
     const pageHeight = document.getElementById("song_container")?.scrollHeight ?? 0;
     const viewportHeight = window.innerHeight
     const remainingHeight = pageHeight - viewportHeight

     const seconds = 180
     const interval = 1000
     let currentTick = 1;

     scrollInterval.value = setInterval(() => {
          const scrollPosition = (currentTick / seconds) * remainingHeight;
          const reachedBottom = pageHeight - scrollPosition <= viewportHeight

          window.scrollTo({
               top: scrollPosition,
               behavior: 'smooth'
          });
          currentTick++;

          if (currentTick > seconds || reachedBottom) {
               clearInterval(scrollInterval.value);
          }
     }, interval);

     let lastScrollTop = window.scrollY || document.documentElement.scrollTop;
     const scrollHandler = () => {
          const currentScrollTop = window.scrollY || document.documentElement.scrollTop;

          if (currentScrollTop < lastScrollTop) {
               console.log('Interrompendo...');
               clearInterval(scrollInterval.value);
               window.removeEventListener('scroll', scrollHandler);
               document.getElementById("play_button")?.classList.remove('play_button_active')
          }

          lastScrollTop = currentScrollTop;
     };

     window.addEventListener('scroll', scrollHandler);

}
</script>
<style scoped>
.play_button {
     @apply fixed rounded-full bg-slate-400 text-white w-8 h-8 flex justify-center items-center  font-bold shadow-lg;
     transition: all .3s ease;
     bottom: 70px;
     right: 20px;
     z-index: 100;
}
.play_button_active {
     @apply bg-orange-500
}
.play_button span {
     @apply text-[20px]
}
</style>