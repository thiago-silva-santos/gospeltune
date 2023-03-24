<template>
  <section class="container flex flex-col items-center m-auto justify-center pt-10">

    <pre class="flex flex-col justify-center w-full">
                  <div v-for="linha in song" :key="linha">
                  <b>{{ linha.chords }}</b>
                  <span>{{ linha.verse }}</span>
                  </div>
        </pre>


    <div class="flex items-center mt-4 gap-10">

      <button @click="decreaseKey">+</button>
      <button @click="increaseKey">-</button>
      <button @click="identificarEscala(song)">TESTE</button>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      acordes: ["C", "Dm", "Em", "F", "G", "Am", "Bdim"],
      acordes2: ["F", "Dm", "Em", "F", "Bb", "Am", "Ddim"],
      song: [
        {
          chords: `${acordes[0]}         ${acordes[7]}    ${4}`,
          verse: "Vamos adorar a Deus,"
        },
        {
          chords: "G        D      Dm  A",
          verse: "Vamos adorar a Deus"
        },
        {
          chords: "D       A         Bm",
          verse: "Vamos exaltar seu Nome"
        },
        {
          chords: "Bm       A      D",
          verse: "Vamos adorar a Deus"
        },
      ],
      currentKey: 0,
    };

  },
  methods: {

    identificarEscala(musica) {
      // dicionário de acordes em cada escala
      const escalas = {
        "C": ["C", "Dm", "Em", "F", "G", "Am", "Bdim"],
        "G": ["G", "Am", "Bm", "C", "D", "Em", "F#dim"],
        "D": ["D", "Em", "F#m", "G", "A", "Bm", "C#dim"],
        // adicionar outras escalas conforme necessário
      };

      // contar o número de acordes que pertencem a cada escala
      const contagem = {};
      for (let escala in escalas) {
        contagem[escala] = 0;
        for (let i = 0; i < musica.length; i++) {
          if (escalas[escala].includes(musica[i].chords.split(" ")[0])) {
            contagem[escala]++;
          }
        }
      }

      // encontrar a escala com o maior número de acordes
      let escalaMaisProvavel = "C";
      let maxContagem = contagem[escalaMaisProvavel];
      for (let escala in contagem) {
        if (contagem[escala] > maxContagem) {
          escalaMaisProvavel = escala;
          maxContagem = contagem[escala];
        }
      }
      console.log(escalaMaisProvavel)
      return escalaMaisProvavel;
    },
    getUniqueChords() {
      const uniqueChords = []
      this.song.forEach(song => {
        const chords = song.chords.split(/\s+/) // separa acordes por espaço em branco

        console.log(song.chords)
        chords.forEach(chord => {
          if (!uniqueChords.includes(chord)) {
            uniqueChords.push(chord)
          }
        })

      })

      const novoArray = uniqueChords.map(acorde => {
        switch (acorde) {
          case "C":
            return "D";
          case "D":
            return "E";
          case "E":
            return "F";
          case "F":
            return "G";
          case "G":
            return "A";
          case "A":
            return "B";
          case "B":
            return "C";
          default:
            return acorde;
        }
      });
      console.log(uniqueChords)
      console.log(novoArray.join("      "))
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