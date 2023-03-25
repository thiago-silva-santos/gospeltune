<template>
  <section class="container flex flex-col items-center m-auto justify-center pt-10">
    <pre class="flex flex-col justify-center">
                     <template v-for="linha in song" :key="linha">
                          <b class="mt-4">{{ linha.chords }}</b>
                          <span>{{ linha.verse }}</span>
                     </template>
      </pre>

    <div class="pt-20">
      <input type="file" ref="fileInput" @change="selecionarArquivo">
    </div>
    <div class="pt-20">
      <button @click="limpar">CLIQUE PARA LIMPAR</button>
    </div>


  </section>
</template>
<script>
export default {
  data() {
    return {
      song: {},
      arquivo: null

    };
  },

  methods: {

    createSong(song) {
      const lines = song.split("\n");

      const result = [];

      for (let i = 0; i < lines.length; i += 2) {
        const chords = lines[i].trim().replace(/(\S+)/g, '$1');
        const verse = (i === lines.length - 1) ? chords : lines[i + 1].trim();
        result.push({ chords, verse });
      }
      console.log(result)
      return result
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
        this.arquivo = null
      this.$refs.fileInput.value = ''
    }

  },



};
</script>
<style lang="css">
.verso {
  @apply px-2 w-full flex items-end gap-4 py-4;
}

.chord {
  height: 24px;
  @apply text-red-600;
}
</style>