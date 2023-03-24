<template>
     <div>
          <Song :song="item"></Song>

          <div class="w-full flex items-center mt-4 gap-10 mx-auto ">
               <button @click="changeTom('C')"> C </button>
               <button @click="changeTom('D')"> D </button>
               <button @click="changeTom('E')"> E </button>
               <button @click="changeTom('F')"> F </button>
               <button @click="changeTom('G')"> G </button>
               <button @click="changeTom('A')"> A </button>
               <button @click="changeTom('B')"> B </button>
          </div>
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
                         chords: `${this.tom[0]}         ${this.tom[6]} ${this.tom[5]}`,
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
          }
     },
     created() {
          console.log(this.acordes[2])
     },
     watch: {

     }
}
</script>
<style lang="">
     
</style>