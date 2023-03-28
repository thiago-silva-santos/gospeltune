<template>
     <div>

          <select v-model="tomSelecionado" @change="sendTune">
               <option v-for="tom in acordes" :key="tom.tom" :value="tom.tom">{{ tom.tom }}</option>
          </select>
          <table>
               <thead>
                    <tr>
                         <th>TOM</th>
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
                    <tr v-for="tom in acordesFiltrados" :key="tom.tom">
                         <td>{{ tom.tom }}</td>
                         <td v-for="acorde in tom.acordes" :key="acorde.grau">
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
               tomSelecionado: "C",
               acordes: CampoHarmonicoComponentData
          };
     },
     computed: {
          acordesFiltrados() {
               return this.acordes.filter((tom) => tom.tom === this.tomSelecionado);
          }
     },
     methods: {
          sendTune() {
               this.$emit('tune', this.tomSelecionado)
          }
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
   