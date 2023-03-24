<template>
  <section class="container flex flex-col items-center m-auto justify-center pt-10">

    <pre class="flex flex-col justify-center w-full">
                    <div v-for="linha in transposedSong" :key="linha">
                    <b>{{ linha.chords }}</b>
                    <span>{{ linha.verse }}</span>
                    </div>
                  </pre>
    <span>Acorde escolhido: {{ currentKey }}</span>


    <div>

    </div>
    <div class="flex items-center mt-4 gap-10">

      <button @click="decreaseKey">+</button>
      <button @click="increaseKey">-</button>
    </div>
  </section>
</template>
<script>

const scales = {
  major: ['C', 'D', 'E', 'F', 'G', 'A', 'B'],
  minor: ['C', 'D', 'Eb', 'F', 'G', 'Ab', 'Bb'],
};
export default {

  data() {
    return {
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
    getChordDegree(chord, scale) {
      const index = scale.indexOf(chord.slice(0, -1));
      if (index === -1) {
        return null;
      }
      const degree = index + 1;
      const suffix = chord.slice(-1);
      if (suffix === 'm') {
        return degree + 7;
      } else if (suffix === '7') {
        return degree + 14;
      }
      return degree;
    },
    getChordByDegree(degree, scale) {
      const index = (degree - 1) % 7;
      const suffix = degree > 7 ? 'm' : '';
      return scale[index] + suffix;
    },
    getScaleDegrees(scale) {
      const degrees = ['1', '2', '3', '4', '5', '6', '7'];
      const majorIntervals = [0, 2, 4, 5, 7, 9, 11];
      const minorIntervals = [0, 2, 3, 5, 7, 8, 10];
      const intervals = scale === 'major' ? majorIntervals : minorIntervals;
      return degrees.map((degree, index) => ({
        degree,
        interval: intervals[index % 7],
      }));
    },
    transposeSong(song, degree, scale) {
      const scaleDegrees = this.getScaleDegrees(scale);
      return song.map((linha) => {
        const transposedChords = linha.chords
          .split(' ')
          .map((chord) => {
            const chordDegree = this.getChordDegree(chord, scaleDegrees);
            if (chordDegree === null) {
              return chord;
            }
            const transposedDegree = (chordDegree + degree - 1) % 7 + 1;
            return this.getChordByDegree(transposedDegree, scaleDegrees);
          })
          .join(' ');
          console.log({ ...linha, chords: transposedChords })
        return { ...linha, chords: transposedChords };
      });
    },
    increaseKey() {
      this.currentKey
      this.currentKey = (this.currentKey + 1) % 12;
      this.transposedSong = this.transposeSong(
        this.song,
        this.currentKey,
        'major'
      );
    },
    decreaseKey() {
      this.currentKey = (this.currentKey + 11) % 12;
      this.transposedSong = this.transposeSong(
        this.song,
        this.currentKey,
        'major'
      );
    },
  },
  computed: {
    transposedSong: {
      get() {
        console.log(this.transposeSong(this.song, this.currentKey, 'major'))
        console.log(this.currentKey)
        return this.transposeSong(this.song, this.currentKey, 'major');
      },
      set(newValue) {
        // Aqui podemos adicionar lógica para tratar a atribuição de um novo valor para transposedSong, se necessário
      }
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