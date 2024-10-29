<template>
     <div class="devpage">
          <div class="song_preview">
               <cifra-musica :musica="cifra" />
          </div>
          <textarea v-model="textAreaValores"></textarea>
          <div class="flex flex-col gap-10">
               <div class="flex w-full flex-col gap-8">
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
                    <div class="w-full flex gap-10">
                         <button class="edit_btn_actions text-green-500" @click="() => createSong(textAreaValores)">
                              <span class="material-symbols-outlined font-semibold text-lg">
                                   check_circle
                              </span>
                         </button>
                         <button class="edit_btn_actions text-yellow-500" @click="copyAndSave">
                              <span class="material-symbols-outlined font-semibold text-lg">
                                   content_copy
                              </span>
                              <span class="copied_message" v-if="copied">Copiado!</span>
                         </button>
                         <button class="edit_btn_actions text-red-500" @click="limpar">
                              <span class="material-symbols-outlined font-semibold text-lg">
                                   block
                              </span>
                         </button>
                    </div>
               </div>

               <div class="grid grid-cols-[400px_1fr]">
                    <div class="flex flex-col gap-4">

                         <div v-for="(parte, index) in cifra" :key="index" draggable="true"
                              @dragstart="dragStart(index)" @dragover.prevent @drop="drop(index)"
                              class="flex w-full max-w-[375px] flex-col bg-gray-100 p-4 rounded-md cursor-pointer"
                              :class="{'dragging': draggedIndex === index}"
                                   >
                              <div class="flex justify-between">
                                   <h1>{{ parte.tipo }}</h1>
                                   <button class="edit_btn_actions text-red-500 hover:border-red-100" @click="deleteParte(parte)">
                                        <span class="material-symbols-outlined font-semibold text-lg">
                                             block
                                        </span>
                                   </button>
                              </div>
                              <cifra-musica :musica="songParteToArray(parte)" />
                         </div>
                    </div>

                    <dev-campo-harmonico class="min-w-[600px] min-h-[700px]" />
               </div>


               <ButtonTuning />
          </div>
          <DevWarning v-if="warning">
               <button class="rounded-lg bg-red-500 p-4 text-white w-32"
                    @click="() => warning = false">Cancelar</button>
               <button class="rounded-lg bg-green-500 p-4 text-white w-32">Continuar</button>
          </DevWarning>
     </div>
</template>
<script setup lang="ts">
import { ICifra, ISongPartes, SongTipos } from '@/types/cifra/Cifra'
import { ref } from 'vue'


const cifraTipo = ref<SongTipos>('Primeira Parte')
const textAreaValores = ref<string>('')
const cifra = ref<ISongPartes[]>([])
const copied = ref(false)
const warning = ref(false)
const draggedIndex = ref(null)
async function createSong(values: any) {
     if (!textAreaValores.value.length) return

     const result: ICifra[] = [];
     const lines = values.split("\n");

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
          const confirmed = await showWarning()
          if (!confirmed) return
          const indice = cifra.value.findIndex(x => x.tipo == cifraTipo.value)
          cifra.value[indice].versos = result

          return
     }


     cifra.value.push({ tipo: cifraTipo.value, versos: result })

}

function songParteToArray(parte: ISongPartes) {
     return [parte]
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

async function deleteParte(parte: ISongPartes) {
     const confirmed = await showWarning()
     if (!confirmed) return
     cifra.value = cifra.value.filter(x => x.tipo !== parte.tipo)

}

function showWarning() {
     return new Promise((resolve) => {
          if (confirm(`"${cifraTipo.value}" já existe. Você deseja continuar?`)) {
               resolve(true)
          } else {
               resolve(false)
          }
     })
}



function dragStart(index: any) {
     draggedIndex.value = index;
}
function drop(index: any) {
     if (draggedIndex.value !== null && draggedIndex.value !== index) {
          // Troca os itens
          const items = [...cifra.value];
          const [movedItem] = items.splice(draggedIndex.value, 1);
          items.splice(index, 0, movedItem);
          cifra.value = items;
     }
     draggedIndex.value = null;
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
     @apply p-2 w-8 h-8 rounded-lg border-2 flex justify-center items-center relative;
     transition: all .5s ease;
}

select {
     @apply border-2 rounded-lg p-4 outline-none cursor-pointer;
}


.dragging {
  opacity: 0.2; /* Altere a opacidade enquanto o item está sendo arrastado */
}
</style>