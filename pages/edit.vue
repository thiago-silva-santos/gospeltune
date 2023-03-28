<template>
  <div class=" flex flex-col items-center m-auto h-fit justify-center p-10">
    <div class="edit_container grid justify-between w-full">
      <div class="song_preview">
        <pre class="flex flex-col mt-10 min-h-[300px]">
                <template v-for="linha in song" :key="linha">                         
                    <span class="flex" >
                      <template v-for="item in linha.chords">
                          <b class="w-[0.350rem]">{{ tom[item] }}</b>
                      </template>
                    </span>    
                    <span class="linha-verso">{{ linha.verse }}</span>
                </template>
              </pre>

      </div>
      <div class="flex flex-col gap-10">
        <campo-harmonico @tune="getTuneEmitted" />
        <textarea ref="textArea" class="p-4 bg-red-100 w-full h-[300px]" />
        <div class="edit_actions">
          <button class="edit_btn_actions bg-green-500" @click="gerarJSON">
            <span class="material-symbols-outlined">
              check_circle
            </span></button>
          <button class="edit_btn_actions bg-yellow-500" @click="limpar">
            <span class="material-symbols-outlined">
              content_copy
            </span></button>
          <button class="edit_btn_actions bg-red-500" @click="limpar">
            <span class="material-symbols-outlined">
              delete
            </span></button>
        </div>
      </div>

    </div>
  </div>
</template>
<script>
import campoJSON from '../assets/CampoHarmonico/CampoHarmonicoData.json'
export default {
  data() {
    return {
      song: {},
      tonalidade: "C",
      arquivo: null,
      copiedObject: null,
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

  methods: {

    createSong(song) {
      const lines = song.split("\n");
      const result = [];
      for (let i = 0; i < lines.length; i += 2) {
        const chords = lines[i].split(" ");
        const verse = (i === lines.length - 1) ? chords : lines[i + 1].trim();
        result.push({ chords, verse });
      }
      console.log(result)
      return result
    },

    getTuneEmitted(value) {
      this.tonalidade = value
    },

    async selecionarArquivo(evento) {
      const arquivo = evento.target.files[0];
      this.arquivo = evento.target.files[0]
      const leitor = new FileReader();
      leitor.onload = async () => {
        console.log(leitor.result)
        this.song = this.createSong(leitor.result);
      };
      leitor.readAsText(arquivo);
    },

    limpar() {
      this.song = {},
        //this.$refs.fileInput.value = ''
        this.$refs.textArea.value = ''
    },
    gerarJSON() {
      console.log(this.$refs.textArea.value)
      this.song = this.createSong(this.$refs.textArea.value)
    },
    // CRIAR A LOGICA DEPOIS
    copyAndSave() {
      copiedObject.value = _.cloneDeep(originalObject.value);
      console.log('Object copied and saved:', copiedObject.value);
    }
  },



};
</script>
<style lang="css" scoped>
.verso {
  @apply px-2 w-full flex items-end gap-4 py-4;
}

.edit_container {
  grid-template-columns: 340px 1fr;
}

.edit_actions {
  @apply flex justify-end gap-4
}

.edit_btn_actions {
  @apply p-2 text-white rounded-full flex justify-center items-center;
  transition: all .5s ease;

}

.edit_btn_actions:visited {
  text-decoration: none;
  display: inline-block;
  /*   Insert choice of font-color here! */
  color: #000;
  padding: 20px 40px;
  border-radius: 10px;
  box-shadow: 0 10px 0;
  transition: all .5s ease;
  position: relative;
}
.edit_btn_actions:active {
  box-shadow: 0 5px 0;
  transform: translateY(5px);
}
textarea {
  border-radius: 15px;
}

.chord {
  height: 24px;
  @apply text-red-600;
}

.song_preview {
  @apply flex flex-col gap-10 w-[320px] bg-red-300 p-4
}

b:not(:empty) {
  @apply w-fit;
}
</style>