<template>
     <div>

          <select v-model="tomSelecionado" @change="sendTune">
               <option v-for="tom in acordes" :key="tom.tom" :value="tom.id">{{ tom.tom }}</option>
          </select>
          <table>
               <thead>
                    <tr>
                         <th>1º</th>
                         <th>2º</th>
                         <th>3º</th>
                         <th>4º</th>
                         <th>5º</th>
                         <th>6º</th>
                         <th>7º</th>
                    </tr>
               </thead>
               <tbody>
                    <tr>
                         <td v-for="acorde in primeirosAcordes" :key="acorde.grau">
                              {{ acorde.notacao }} ({{ acorde.grau }})
                         </td>
                    </tr>
                    <tr>
                         <td v-for="acorde in demaisAcordes" :key="acorde.grau">
                              {{ acorde.notacao }} ({{ acorde.grau }})
                         </td>
                    </tr>
               </tbody>
          </table>
          
     </div>
</template>
   
<script>
import CampoHarmonicoComponentData from '../assets/CampoHarmonico/CampoHarmonicoComponentData.json'
export default {

     emits: ['tune'],
     data() { 
          return {
               tomSelecionado: 0,
               acordes: CampoHarmonicoComponentData
          };
     },
     computed: {
          tonalidadeAtualString() {
               let tom = 0
               switch (this.tomSelecionado) {
                    case 0:
                         tom = "C"
                         break;
                    case 1:
                         tom = "D"
                         break;
                    case 2:
                         tom = "E"
                         break;
                    case 3:
                         tom = "F"
                         break;
                    case 4:
                         tom = "G"
                         break;
                    case 5:
                         tom = "A"
                         break;
                    case 6:
                         tom = "B"
                         break;
                    case 7:
                         tom = "Db"
                         break;
                    case 8:
                         tom = "Eb"
                         break;
                    case 9:
                         tom = "Gb"
                         break;
                    case 10:
                         tom = "Ab"
                         break;
                    case 11:
                         tom = "Bb"
                         break;

                    default:
                         break;
               }
               return tom
          },

          acordesFiltrados() {
               return this.acordes.filter((tom) => tom.tom === this.tonalidadeAtualString);
          },
          primeirosAcordes() {
               return this.acordesFiltrados[0].acordes.slice(0, 7)
          },
          demaisAcordes(){
               return this.acordesFiltrados[0].acordes.slice(7)
          }
     },
     methods: {
          sendTune() {
               this.$emit('tune', this.tomSelecionado)
          }
     },

     created() {
          console.log(this.acordesFiltrados)
          console.log(this.demaisAcordes)
     }
};
</script>
   
<style scoped>
table {
     border-collapse: collapse;
     width: 100%;
}

th,
td {
     border: none;
     padding: 8px;
     text-align: center;
}

th {
     @apply bg-red-500 text-white;
}

tr:nth-child(1) {
    @apply bg-red-100 font-semibold
}

select {
     -webkit-appearance: none;
     padding: 7px 40px 7px 12px;
     width: 100%;
     border-radius: 5px;
     background: white;
     box-shadow: 0 1px 3px -2px #9098A9;
     cursor: pointer;
     font-family: inherit;
     font-size: 16px;
     transition: all 150ms ease;
     @apply mb-4 bg-red-400 text-white;
     outline: none;

}

option {
     @apply bg-red-50 text-slate-900
}
</style>
   