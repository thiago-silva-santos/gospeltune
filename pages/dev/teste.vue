<template>
     <div class="devpage">
          <div class="song_preview">
               <cifra-musica :musica="cifra" :tonalidade="TonalidadeStore.tonalidadeAtual" />
          </div>
          <textarea v-model="textAreaValores"></textarea>
          <div class="flex flex-col gap-10">
               <div class="flex gap-10">
                    <dev-campo-harmonico />
                    <div class="flex flex-col gap-10">
                         <select v-model="cifraTipo">
                              <option value="Primeira Parte">
                                   Primeira Parte
                              </option>
                              <option value="Segunda Parte">
                                   Segunda Parte
                              </option>
                              <option value="Terceira Part">
                                   Terceira Parte
                              </option>
                              <option value="Refrão">
                                   Refrão
                              </option>
                              <option value="Ponte">
                                   Ponte
                              </option>
                              <option value="Final">
                                   Final
                              </option>
                         </select>
                         <input type="text" placeholder="Nome">
                    </div>
               </div>
               <button class="edit_btn_actions bg-green-500" @click="() => createSong(textAreaValores)">
                    <span class="material-symbols-outlined">
                         check_circle
                    </span>
               </button>

               <ButtonTuning />
          </div>

     </div>
</template>
<script setup lang="ts">
import { useTonalidadeStore } from '@/stores/tonalidade'
import { ICifra, ISongPartes, ISongTipos } from '~~/types/cifra/Cifra'
import { ref } from 'vue'
const cifraTipo = ref<ISongTipos>('Primeira Parte')
const textAreaValores = ref<string>('')
const cifra = ref<ISongPartes[]>([])
const TonalidadeStore = useTonalidadeStore();


function createSong(values: any) {
     const lines = values.split("\n");

     const result: ICifra[] = [];
     for (let i = 0; i < lines.length; i += 2) {
          const chords: string = lines[i];
          const verse: string = (i === lines.length - 1) ? chords : lines[i + 1].trim();

          if (chords == '') {
               result[result.length - 1].divider = true
          } else {
               const cifraItemToPush: ICifra = { chords, verse }
               result.push(cifraItemToPush);
          }
     }

     if (cifra.value.findIndex(x => x.tipo == cifraTipo.value) !== -1) {
          const indice = cifra.value.findIndex(x => x.tipo == cifraTipo.value)
          cifra.value[indice].versos = result
     } else {
          cifra.value.push({ tipo: cifraTipo.value, versos: result })
     }


}



onMounted(() => {
     //onsole.log(campoHarmonico.value)
})
</script>
<style scoped>
.devpage {
     @apply grid p-10 gap-10 h-screen;
     grid-template-columns: 375px 375px auto
}

.song_preview {
     @apply flex w-full max-w-[375px] min-h-full flex-col bg-gray-100 p-4 rounded-md;
     overflow-y: auto;
     overflow-x: hidden;
}

textarea {
     border-radius: 15px;
     outline: none;
     width: 100%;
     max-width: 940px;
     font-family: 'Roboto', sans-serif;
     font-size: 16px;
     word-spacing: 0.210rem;
     @apply p-4 w-full max-w-[375px] min-h-full bg-gray-200
}
</style>