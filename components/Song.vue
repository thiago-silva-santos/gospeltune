<template>
     <section class="container flex m-auto pt-10">

          <pre class="flex flex-col">
               <template v-for="linha in song" :key="linha">                         
                    <span class="flex" >
                       <template v-for="item in linha.chords">
                               <b class="w-[0.350rem]">{{ tom[item] }}</b>
                         </template>
                            </span>    
                   <span class="linha-verso">{{ linha.verse }}</span>
             </template>
                         </pre>

     </section>
</template>
<script>
import campoJSON from '../assets/CampoHarmonico/CampoHarmonicoData.json'
export default {

     props: {
          song: {
               type: Array,
               required: true,
          },
          tonalidade: {
               type: String,
               default: "C"
          }
     },
     data() {
          return {
          };

     },
     computed: {
          campo() {
               return campoJSON;
          },
          tom() {

               return this.campo[this.tonalidade];
          },
     },

     created() {
          console.log(this.tom[0])
          console.log(this.song)
          // this.song.map(item => {
          //      return item.chords = item.chords.split("")
          // })
     }
}
</script>
<style lang="css" scoped>
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

b:not(:empty) {
     @apply w-fit;
}

</style>