<template>
  <div class="edit_container ">
    <div class="song_preview">
      <Song :song="song" :tonalidade="tonalidade" />
    </div>
    <div class="edit_tools">
      <div class="w-full max-w-[940px] ">
        <campo-harmonico @tune="getTuneEmitted" />
      </div>
      <textarea ref="textArea" v-model="textArea"></textarea>
      <div class="edit_actions">
        <nuxt-link to="/">
          <button class="edit_btn_actions bg-sky-700">
            <span class="material-symbols-outlined">
              home
            </span>
          </button>
        </nuxt-link>
        <div class="flex gap-4">
          <div class="flex gap-4 mr-10">
            <button class="edit_btn_actions bg-gray-700" @click="injectQuebra('Refrão')">
              <span class="material-symbols-outlined">
                add_circle_outline
              </span>
            </button>
            <button class="edit_btn_actions bg-red-800" @click="injectQuebra('Ponte')">
              <span class="material-symbols-outlined">
                add_circle_outline
              </span>
            </button>
          </div>
          <button class="edit_btn_actions bg-green-500" @click="gerarJSON">
            <span class="material-symbols-outlined">
              check_circle
            </span>
          </button>
          <button class="edit_btn_actions bg-yellow-500" @click="copyAndSave">
            <span class="material-symbols-outlined">
              content_copy
            </span>
            <span class="copied_message" ref="copied">Copiado!</span>
          </button>
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
import campoJSON from '../../assets/CampoHarmonico/campo-harmonico.json'
export default {
  data() {
    return {
      song: [],
      textArea: '',
      tonalidade: 0,
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
        let chords = lines[i];
        const verse = (i === lines.length - 1) ? chords : lines[i + 1].trim();
        if (chords[0] == '' && chords.length == 1) { chords = [] }
        result.push({ chords, verse });
      }
      return result
    },

    getTuneEmitted(value) {
      this.tonalidade = value
    },

    limpar() {
      this.song = [],
        this.$refs.textArea.value = ''
      this.textArea = ''
    },
    gerarJSON() {
      this.song = this.createSong(this.$refs.textArea.value)
    },

    copyAndSave(e) {
      navigator.clipboard.writeText(JSON.stringify(this.song))
        .then(() => {
          this.$refs.copied.style.display = 'block'
          setTimeout(() => {
            this.$refs.copied.style.display = 'none'
          }, 500);

        })
        .catch((error) => {
          console.error('Failed to copy object:', error);
        });
    },
    injectQuebra(value) {
      const textAreaElement = this.$refs.textArea;
      const start = textAreaElement.selectionStart;
      const end = textAreaElement.selectionEnd;

      const beforeSelection = textAreaElement.value.substring(0, start);
      const selectedText = textAreaElement.value.substring(start, end);
      const afterSelection = textAreaElement.value.substring(end);

      const quebra = `\n\n\n\n[ ${value} ]\n\n\n0`;

      textAreaElement.value = beforeSelection + quebra + selectedText + afterSelection;
      this.textArea = textAreaElement.value;
    }

  },




};
</script>
<style lang="css" scoped>
.edit_container {
  display: grid;
  grid-template-columns: 367px 1fr;
  @apply gap-4 p-10
}

.edit_tools {
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  justify-content: center;
  align-items: center
}

.edit_actions {
  @apply flex justify-between gap-4 w-full max-w-[940px]
}

.edit_btn_actions {
  @apply p-2 text-white rounded-full flex justify-center items-center shadow-md relative;
  transition: all .5s ease;

}

textarea {
  border-radius: 15px;
  outline: none;
  width: 100%;
  max-width: 940px;
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  word-spacing: 0.233rem;
  @apply p-4 bg-gray-100 h-[400px]
}

.song_preview {
  @apply flex flex-col bg-gray-100 p-4 rounded-md;
  max-height: 700px;
  overflow-y: auto;
  overflow-x: hidden;
}

.copied_message {
  display: none;
  position: absolute;
  top: -30px;
  color: black;
  transition: all .3s ease;
}
</style>