<template>
  <div class=" flex flex-col items-center m-auto h-fit justify-center px-5 py-10">
    <div class="edit_container grid gap-4">
      <div class="song_preview">
        <Song :song="song" :tonalidade="tonalidade"/>
      </div>
      <div class="flex flex-col gap-10 max-w-[950px] w-[500px]">
        <campo-harmonico @tune="getTuneEmitted" />
        <textarea ref="textArea" class="p-4 bg-red-100 w-[500px] h-[400px]" />
        <div class="edit_actions">
          <nuxt-link to="/">
            <button class="edit_btn_actions bg-sky-500">
              <span class="material-symbols-outlined">
                home
              </span>
            </button>
          </nuxt-link>
          <div class="flex gap-4">
            <button class="edit_btn_actions bg-green-500" @click="gerarJSON">
              <span class="material-symbols-outlined">
                check_circle
              </span></button>
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
  </div>
</template>
<script>
import campoJSON from '../assets/CampoHarmonico/CampoHarmonicoData.json'
export default {
  data() {
    return {
      song: [],
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
        const chords = lines[i];
        const verse = (i === lines.length - 1) ? chords : lines[i + 1].trim();
        result.push({ chords, verse });
      }
      return result
    },

    getTuneEmitted(value) {
      this.tonalidade = value
    },

    limpar() {
      this.song = {},
        this.$refs.textArea.value = ''
    },
    gerarJSON() {
      this.song = this.createSong(this.$refs.textArea.value)
      console.log(this.song)
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
    }
  },



};
</script>
<style lang="css" scoped>

.edit_container {
  grid-template-columns: 367px 1fr;
}

.edit_actions {
  @apply flex justify-between gap-4
}

.edit_btn_actions {
  @apply p-2 text-white rounded-full flex justify-center items-center shadow-md relative;
  transition: all .5s ease;

}

textarea {
  border-radius: 15px;
  outline: none;
}

.song_preview {
  @apply flex flex-col bg-red-300 p-4 rounded-md
}

.copied_message {
  display: none;
  position: absolute;
  top: -30px;
  color: black;
  transition: all .3s ease;
}
</style>