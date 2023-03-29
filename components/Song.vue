<template>
     <section class="flex pt-10">

          <pre class="flex flex-col">
                    <template v-for="linha in song" :key="linha">
                         <template v-if="linha.verse">
                              <span class="flex" >
                                 <template v-for="item in linha.chords">
                                         <b class="w-[0.450rem]">{{ tom[item] }}</b>
                                   </template>
                                      </span>    
                             <span class="linha-verso">{{ linha.verse }}</span>
                         </template>                         
                        <div v-else class="h-10">
                         </div>
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
.linha-verso {
     @apply mb-2;
     letter-spacing: 1px;
}

.chord {
     height: 24px;
     @apply text-red-600;
}

b {
     @apply text-red-600
}

/* b:not(:empty) {
     @apply w-fit;
} */
</style>