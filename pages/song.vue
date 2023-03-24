<template>
  <section class="container flex flex-col items-center m-auto justify-center pt-10">
    <!-- <div class="verso" v-for="verse in song.verses" :key="verse">
      <div v-for="item in verse.verse" :key="item">
        <span class="chord">{{ item.chord }}</span>
        <p class="word">{{ item.verse }}</p>
      </div>
    </div> -->
    <!-- <div class="verso" v-for="verse in song.verses" :key="verse">
      <div v-for="item in verse.verse" :key="item">
        <span class="chord">{{ item.chord }}</span>
        <p class="word">{{ item.verse }}</p>
      </div>
    </div> -->
    <pre class="flex flex-col justify-center">
               <template v-for="linha in song" :key="linha">
                    <b class="mt-4">{{ linha.chords }}</b>
                    <span>{{ linha.verse }}</span>
               </template>
          </pre>
    <div class="pt-20">
      <input type="file" @change="selecionarArquivo">
    </div>
    <div class="pt-20">
      <button @click="transformCifraToSong(teste)">CLIQUE</button>
    </div>


  </section>
</template>
<script>
export default {
  data() {
    return {
      song: {},

    };
  },

  methods: {

    createSongObject(text) {
      // Remove quebras de linha e divide em palavras
      const words = text.replace(/\n/g, ' ').split(' ');
      // Cria um objeto de verso para cada palavra
      const verses = words.map(word => {

        return { chord: '', verse: word };
      });

      let output = { verses: [{ verse: verses }] }
      //console.log(output)
      console.log(this.song)

      // Retorna o objeto da música
      this.song = output
      console.log(this.song)
      //return { song: { verses: [{ verse: verses }] } };
    },

    // createSong(text) {
    //   const lines = text.split('\n');
    //   const song = { verses: [] };

    //   for (let i = 0; i < lines.length; i++) {
    //     const words = lines[i].split(' ');
    //     const verse = { verse: [] };

    //     for (let j = 0; j < words.length; j++) {
    //       verse.verse.push({ chord: '', verse: words[j] });
    //     }

    //     song.verses.push(verse);
    //   }

    //   return song;
    // },



    createSong(song) {
      const lines = song.split("\n");

      const result = [];

      for (let i = 0; i < lines.length; i += 2) {
        const chords = lines[i].trim();
        const verse = (i === lines.length - 1) ? chords : lines[i + 1].trim();
        result.push({ chords, verse });
      }
      console.log(result)
      return result
    },

    async selecionarArquivo(evento) {
      const arquivo = evento.target.files[0];
      const leitor = new FileReader();
      leitor.onload = async () => {
        console.log(leitor.result)
        this.song = this.createSong(leitor.result);
        console.log(this.song)
      };
      leitor.readAsText(arquivo);
    },

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