<template>
     <section class="flex pt-10">

          <pre class="flex flex-col">
               <template v-for="linha in verificacao" :key="linha">
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
                  <template v-if="divideCifra.length >= 1" v-for="linha in divideCifra[1]" :key="linha">
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
          divideCifra() {
               //CRIAR LOGICA PRA SEPARAR REFRÃO

               const index = this.song.findIndex(obj => obj.verse === '[ Refrão ]');
               if (index === -1) {
                    // Se não encontrar nenhum objeto com a string específica, retorna o array inteiro
                    return this.song;
               } else {
                    // Divide o array em duas partes com base no índice encontrado
                    const parte1 = this.song.slice(0, index);
                    const parte2 = this.song.slice(index);
                    return [parte1, parte2];
               }

          },
          verificacao() {
               if(this.divideCifra.every(elem => Array.isArray(elem))) {
                    return this.divideCifra[0]
               } else {
                    return this.song
               }
          }
     },

     created() {
          console.log(this.divideCifra)
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