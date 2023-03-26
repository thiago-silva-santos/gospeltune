<template>
  <div class=" flex flex-col items-center m-auto h-fit justify-center p-10">
    <div class="grid grid-cols-2 justify-between w-full">
      <div class="flex flex-col gap-10">
        <pre class="flex flex-col mt-10 min-h-[300px]">
                <template v-for="linha in song" :key="linha">                         
                    <span class="flex" >
                      <template v-for="item in linha.chords">
                          <b class="w-[0.350rem]">{{ item }}</b>
                      </template>
                    </span>    
                    <span class="linha-verso">{{ linha.verse }}</span>
                </template>
              </pre>
        <textarea ref="textArea" class="p-4 bg-slate-200 w-full h-[300px]" @change="teste" />
        <div>
          <button @click="limpar">CLIQUE PARA LIMPAR</button>
        </div>
      </div>
      <div class="p-4">
        <campo-harmonico />
      </div>
    </div>
  </div>
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
        const chords = lines[i].split(" ");
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
        //this.$refs.fileInput.value = ''
        this.$refs.textArea.value = ''
    },
    teste(e) {
      console.log(e.target.value)
      this.song = this.createSong(e.target.value)
    }
  },



};
</script>
<style lang="css" scoped>
.verso {
  @apply px-2 w-full flex items-end gap-4 py-4;
}

.chord {
  height: 24px;
  @apply text-red-600;
}

b:not(:empty) {
  @apply w-fit;
}
</style>