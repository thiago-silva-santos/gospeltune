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
                    <tr v-for="(acordes, index) in dividirArray" :key="index">
                         <td v-for="acorde in acordes" :key="acorde.grau">
                              <span class="text-red-600"> {{ acorde.notacao }} </span> - {{ acorde.grau }}
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

          campoHarmonicoAtual() {
               return this.acordes.filter((tom) => tom.tom === this.tonalidadeAtualString)[0];
          },
          dividirArray() {
               const tamanhoMaximo = 7;
               const resultado = [];
               for (let i = 0; i < this.campoHarmonicoAtual.acordes.length; i += tamanhoMaximo) {
                    const arrayTemporario = this.campoHarmonicoAtual.acordes.slice(i, i + tamanhoMaximo);
                    resultado.push(arrayTemporario);
               }
               return resultado;
          }
     },
     methods: {
          sendTune() {
               this.$emit('tune', this.tomSelecionado)
          }
     },

     created() {
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
     @apply bg-slate-700 text-white;
}

tr:nth-child(1) {
     @apply bg-slate-300 font-semibold
}

tr {
     @apply bg-slate-100 font-semibold
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
     @apply mb-4 bg-slate-700 text-white;
     outline: none;

}

option {
     @apply bg-slate-100 text-slate-900
}
</style>
   