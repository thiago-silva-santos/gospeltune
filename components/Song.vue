<template>
     <section class="container flex flex-col items-center m-auto justify-center pt-10">

          <pre class="flex flex-col justify-center w-full">
                           <div v-for="linha in song" :key="linha">
                           <b>{{ linha.chords }}</b>
                           <span>{{ linha.verse }}</span>
                           </div>
                         </pre>
     </section>
</template>
<script>
export default {

     props: {
          song: {
               type: Array,
               required: true,
          },
     },
     data() {
          return {
          };

     },

}
</script>
<style lang="css">
.verso {
     @apply px-2 w-full flex items-end gap-4 py-4;
}

.chord {
     height: 24px;
     @apply text-red-600;
}

b {
     @apply text-red-600
}
</style>