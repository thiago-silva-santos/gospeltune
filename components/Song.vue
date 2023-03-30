<template>
     <section class="flex pt-10">

          <pre class="flex flex-col">
                    <template v-for="linha in song" :key="linha">
                         <template v-if="linha.verse">
                              <span class="flex" >
                                 <template v-for="item in linha.chords">
                                         <b class="w-[0.450rem]">{{tom[item]?.notacao}}</b>
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
//import campoJSON from '../assets/CampoHarmonico/CampoHarmonicoData.json'
import campoJSON from '../assets/CampoHarmonico/CampoHarmonicoComponentData.json'
export default {

     props: {
          song: {
               type: Array,
               required: true,
          },
          tonalidade: {
               type: Number,
               default: 0
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

               return this.campo[this.tonalidade].acordes;
          },
     },

     created() {
          console.log(this.tom[6].notacao)
          console.log(this.song)
          //console.log(this.campo[0].acordes[6].notacao)
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