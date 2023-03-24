<template>
  <section class="container flex flex-col items-center m-auto justify-center pt-10">

    <pre class="flex flex-col justify-center w-full">
            <div v-for="linha in song" :key="linha">
            <b>{{ linha.chords }}</b>
            <span>{{ linha.verse }}</span>
            </div>
          </pre>
    <span>Acorde escolhido: {{ currentKey }}</span>
    

    <div>
    </div>
    <div class="flex items-center mt-4">
      <button class="mr-2" @click="getUniqueChords">-</button>
      <button class="ml-2" @click="">+</button>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      acordes: ["C", "Dm", "Em", "F", "E", "Am", "Bdim"],
      song: [
        {
          chords: "C         G    Am",
          verse: "Vamos adorar a Deus,"
        },
        {
          chords: "F        C      Dm  G",
          verse: "Vamos adorar a Deus"
        },
        {
          chords: "C       G         Am",
          verse: "Vamos exaltar seu Nome"
        },
        {
          chords: "Dm       G      C",
          verse: "Vamos adorar a Deus"
        },
      ],
      currentKey: 0,
    };

  },
  methods: {
    getUniqueChords() {
      const uniqueChords = []
      //const chordVerses = []
      this.song.forEach(song => {
        const chords = song.chords.split(/\s+/) // separa acordes por espaço em branco

        chords.forEach(chord => {
          //chordVerses.push(chord)
          if (!uniqueChords.includes(chord)) {
            uniqueChords.push(chord)
          }
        })
      })
      uniqueChords.forEach(item => {        
        if (!this.acordes.includes(item)) {
          console.log(item)
        }
        else {
          console.log(this.acordes.findIndex(x => x == item))

        }
      })
      //console.log(chordVerses)
      console.log(uniqueChords)
      return uniqueChords
    },
  },
}
</script>
<style lang="css">
.verso {
  @apply px-2 w-full flex items-end gap-4 py-4;
}

.chord {
  height: 24px;
  @apply text-red-600;
}

b {
  @apply text-red-600
}
</style>