<template>
     <section class="flex pt-10">

          <pre class="flex flex-col">
               <template v-for="linha in cifraDividida[0]" :key="linha">
                    <template v-if="linha.verse">
                         <span class="flex" v-if="linha.chords.length > 0">
                              <template v-for="item in parseString(linha.chords)">
                                  <b class="w-[0.450rem]">{{ tom[item]?.notacao }}</b>
                              </template>
                         </span>    
                         <span class="linha-verso">{{ linha.verse }}</span>
                    </template>                         
                    <template v-else>
                         <span v-if="linha.chords.length > 1" class="passagem" >
                              <template v-for="item in parseString(linha.chords)">
                                   <b class="w-fit">{{ tom[item]?.notacao }}</b>
                              </template>
                         </span>
                         <span class="h-10"></span>
                    </template>
               </template>
               <template v-for="linha in cifraDividida[1]" :key="linha">
                         <template v-if="linha.verse">
                              <span class="flex" v-if="linha.chords.length > 0">
                                   <template v-for="item in parseString(linha.chords)">
                                        <b class="w-[0.450rem]">{{ tom[item]?.notacao }}</b>
                                   </template>
                              </span>    
                              <span class="linha-verso font-bold">{{ linha.verse }}</span>
                         </template>                         
                    <template v-else>
                         <span v-if="linha.chords.length > 1" class="passagem" >
                              <template v-for="item in parseString(linha.chords)">
                                   <b class="w-fit">{{ tom[item]?.notacao }}</b>
                              </template>
                         </span>
                         <span class="h-10"></span>
                    </template>
               </template>
               <template v-for="linha in cifraDividida[2]" :key="linha">
                         <template v-if="linha.verse">
                              <span class="flex" v-if="linha.chords.length > 0">
                                   <template v-for="item in parseString(linha.chords)">
                                        <b class="w-[0.450rem]">{{ tom[item]?.notacao }}</b>
                                   </template>
                              </span>    
                              <span v-if="linha.verse === '[ Ponte ]'" class="linha-verso font-semibold text-red-900">{{ linha.verse }}</span>
                              <span v-else class="linha-verso text-red-900">{{ linha.verse }}</span>
                         </template>                         
                    <template v-else>
                         <span v-if="linha.chords.length > 1" class="passagem" >
                              <template v-for="item in parseString(linha.chords)">
                                   <b class="w-fit">{{ tom[item]?.notacao }}</b>
                              </template>
                         </span>
                         <span class="h-10"></span>
                    </template>
               </template>
          </pre>

     </section>
</template>
<script>
import campoJSON from '../assets/CampoHarmonico/campo-harmonico.json'
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
               const refraoIndex = this.song.findIndex(obj => obj.verse === '[ Refrão ]');
               const ponteIndex = this.song.findIndex(obj => obj.verse === '[ Ponte ]');

               if (ponteIndex === -1) {
                    if (refraoIndex === -1) {
                         return [this.song];
                    } else {
                         const parte1 = this.song.slice(0, refraoIndex);
                         const parte2 = this.song.slice(refraoIndex);
                         return [parte1, parte2];
                    }
               } else {
                    const parte1 = this.song.slice(0, refraoIndex);
                    const parte2 = this.song.slice(refraoIndex, ponteIndex);
                    const parte3 = this.song.slice(ponteIndex);
                    return [parte1, parte2, parte3];
               }
          }
     },
     methods: {
    parseString(string) {
      const items = [];
      let currentItem = "";

      for (let i = 0; i < string.length; i++) {
        const char = string[i];

        if (/\d/.test(char)) {
          currentItem += char;
        } else if (char === " ") {
          if (currentItem !== "") {
            items.push(currentItem);
            currentItem = "";
          }

          items.push(" ");
        }
      }

      if (currentItem !== "") {
        items.push(currentItem);
      }
      return items;
    }
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

.passagem {
     @apply flex w-fit gap-1 px-2 border-2 border-slate-200 rounded-lg
}

b {
     @apply text-red-600
}
</style>