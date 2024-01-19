<template>
     <div class="devpage">
          <div class="song_preview">
               <cifra-musica :musica="cifra"/>
          </div>
          <textarea v-model="textAreaValores"></textarea>
          <div class="flex flex-col gap-10">
               <div class="flex gap-10">
                    <div class="w-full flex gap-10">
                         <button class="edit_btn_actions text-green-500" @click="() => createSong(textAreaValores)">
                              <span class="material-symbols-outlined font-bold text-3xl">
                                   check_circle
                              </span>
                         </button>
                         <button class="edit_btn_actions text-yellow-500" @click="copyAndSave">
                              <span class="material-symbols-outlined font-bold text-3xl">
                                   content_copy
                              </span>
                              <span class="copied_message" v-if="copied">Copiado!</span>
                         </button>
                         <button class="edit_btn_actions text-red-500" @click="limpar">
                              <span class="material-symbols-outlined font-bold text-3xl">
                                   block
                              </span>
                         </button>
                    </div>
                    <div class="flex w-full flex-col gap-10">
                         <select v-model="cifraTipo">
                              <option value="Primeira Parte">
                                   Primeira Parte
                              </option>
                              <option value="Segunda Parte">
                                   Segunda Parte
                              </option>
                              <option value="Terceira Parte">
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
                    </div>
               </div>
               <div class="w-[full] h-full flex justify-center items-center">
                    <dev-campo-harmonico class="min-w-[500px]" />
               </div>


               <ButtonTuning />
          </div>

     </div>
</template>
<script setup lang="ts">
import { useTonalidadeStore } from '@/stores/tonalidade'
import { ICifra, ISongPartes, SongTipos } from '@/types/cifra/Cifra'
import { ref } from 'vue'
const cifraTipo = ref<SongTipos>('Primeira Parte')
const textAreaValores = ref<string>('')
const cifra = ref<ISongPartes[]>([])
const TonalidadeStore = useTonalidadeStore();
const copied = ref(false)


function createSong(values: any) {
     if (!textAreaValores.value.length) return
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
function copyAndSave(e: any) {
     navigator.clipboard.writeText(JSON.stringify(cifra.value))
          .then(() => {
               copied.value = true
               setTimeout(() => {
                    copied.value = false
               }, 1500);
          })
          .catch((error) => {
               console.error('Failed to copy object:', error);
          });
}
function limpar() {
     cifra.value = [],
     textAreaValores.value = ''
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
     font-size: 14px;
     word-spacing: 0.220rem;
     @apply p-4 w-full max-w-[375px] min-h-full bg-gray-200
}

.edit_btn_actions {
     @apply p-2 w-16 h-16 rounded-lg border-2  flex justify-center items-center relative;
     transition: all .5s ease;
}

select {
     @apply border-2 rounded-lg p-4 outline-none cursor-pointer;
}
</style>