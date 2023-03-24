<template>
     <div>

          <div class="w-full flex justify-center mt-10">
               <div class="button_container flex gap-6">
                    <button class="tom_button" @click="changeTom('C')"> C </button>
                    <button class="tom_button" @click="changeTom('D')"> D </button>
                    <button class="tom_button" @click="changeTom('E')"> E </button>
                    <button class="tom_button" @click="changeTom('F')"> F </button>
                    <button class="tom_button" @click="changeTom('G')"> G </button>
                    <button class="tom_button" @click="changeTom('A')"> A </button>
                    <button class="tom_button" @click="changeTom('B')"> B </button>
               </div>
          </div>
          <Song :song="item"></Song>


          <button @click="createSong(teste)" >CLIQUE TESTE</button>
     </div>
</template>
<script>
import campoJSON from '../assets/campo.json'

export default {
     data() {
          return {
               acordes: ["C", "Dm", "Em", "F", "E", "Am", "Bdim"],
               tonalidadeAtual: "C",
               currentKey: 0,
               teste: `C                 Am7
Todos os dias quando acordo
Bm                   Em
   Não tenho mais o tempo que passou
           C          Am7
Mas tenho muito tempo
       Bm              Em
Temos todo o tempo do mundo
               `
          };

     },
     computed: {
          campo() {
               return campoJSON;
          },
          tom() {
               return this.campo[this.tonalidadeAtual];
          },
          item() {
               return [
                    {
                         chords: `${this.tom[0]}        ${this.tom[6]}  ${this.tom[5]}`,
                         verse: "Vamos adorar a Deus,"
                    },
                    {
                         chords: `${this.tom[3]}        ${this.tom[0]}     ${this.tom[1]}  ${this.tom[4]}`,
                         verse: "Vamos adorar a Deus"
                    },
                    {
                         chords: `${this.tom[0]}       ${this.tom[4]}         ${this.tom[6]}`,
                         verse: "Vamos exaltar seu Nome"
                    },
                    {
                         chords: `${this.tom[1]}       ${this.tom[4]}      ${this.tom[0]}`,
                         verse: "Vamos adorar a Deus"
                    },
               ];

          }
     },
     methods: {
          changeTom(value) {
               console.log(value)
               this.tonalidadeAtual = value;
          },

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
          }
     },
     created() {
          console.log(this.acordes[2])
     },
     watch: {

     }
}
</script>
<style scoped>
.tom_button {
     @apply rounded-full shadow-md bg-red-100 w-8 h-8 text-black
}

@media (max-width: 400px) {
     .button_container {
          @apply gap-4
     }
}
</style>