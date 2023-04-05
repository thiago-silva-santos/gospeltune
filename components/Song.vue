<template>
     <section class="flex pt-10">

          <pre class="flex flex-col">
                    <template v-for="linha in cifraDividida[0]" :key="linha">
                              <template v-if="linha.verse">
                                   <span class="flex" >
                                      <template v-for="item in linha.chords">
                                              <b class="w-[0.450rem]">{{ tom[item]?.notacao }}</b>
                                        </template>
                                           </span>    
                                  <span class="linha-verso">{{ linha.verse }}</span>
                              </template>                         
                             <div v-else class="h-10">
                              </div>
                       </template>
                       <template v-for="linha in cifraDividida[1]" :key="linha">
                              <template v-if="linha.verse">
                                   <span class="flex" >
                                      <template v-for="item in linha.chords">
                                              <b class="w-[0.450rem]">{{ tom[item]?.notacao }}</b>
                                        </template>
                                           </span>    
                                  <span class="linha-verso font-bold">{{ linha.verse }}</span>
                              </template>                         
                             <div v-else class="h-10">
                              </div>
                       </template>
               </pre>

     </section>
</template>
<script>
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
          cifraDividida() {
               const index = this.song.findIndex(obj => obj.verse === '[ Refrão ]');
               if (index === -1) {
                    return [this.song]
               } else {
                    const parte1 = this.song.slice(0, index);
                    const parte2 = this.song.slice(index);
                    return [parte1, parte2];
               }

          },
     },

     created() {
     }
}
</script>
<style lang="css" scoped>
.linha-verso {
     @apply mb-2;
     letter-spacing: 1px;
}

b {
     @apply text-red-600
}

</style>