<template>
     <div>

          <select v-model="tomSelecionado">
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
export default {
     data() {
          return {
               tomSelecionado: "",
               acordes: [
                    {
                         "tom": "C",
                         "acordes": [
                              {
                                   "grau": 0,
                                   "notacao": "C"
                              },
                              {
                                   "grau": 1,
                                   "notacao": "Dm"
                              },
                              {
                                   "grau": 2,
                                   "notacao": "Em"
                              },
                              {
                                   "grau": 3,
                                   "notacao": "F"
                              },
                              {
                                   "grau": 4,
                                   "notacao": "G"
                              },
                              {
                                   "grau": 5,
                                   "notacao": "Am"
                              },
                              {
                                   "grau": 6,
                                   "notacao": "Bº"
                              }
                         ]
                    },
                    {
                         "tom": "Db",
                         "acordes": [
                              {
                                   "grau": 0,
                                   "notacao": "Db"
                              },
                              {
                                   "grau": 1,
                                   "notacao": "Ebm"
                              },
                              {
                                   "grau": 2,
                                   "notacao": "Fm"
                              },
                              {
                                   "grau": 3,
                                   "notacao": "Gb"
                              },
                              {
                                   "grau": 4,
                                   "notacao": "Ab"
                              },
                              {
                                   "grau": 5,
                                   "notacao": "Bbm"
                              },
                              {
                                   "grau": 6,
                                   "notacao": "Cº"
                              }
                         ]
                    },
                    {
                         "tom": "D",
                         "acordes": [
                              {
                                   "grau": 0,
                                   "notacao": "D"
                              },
                              {
                                   "grau": 1,
                                   "notacao": "Em"
                              },
                              {
                                   "grau": 2,
                                   "notacao": "F#m"
                              },
                              {
                                   "grau": 3,
                                   "notacao": "G"
                              },
                              {
                                   "grau": 4,
                                   "notacao": "A"
                              },
                              {
                                   "grau": 5,
                                   "notacao": "Bm"
                              },
                              {
                                   "grau": 6,
                                   "notacao": "C#º"
                              }
                         ]
                    },
                    {
                         "tom": "Eb",
                         "acordes": [
                              {
                                   "grau": 0,
                                   "notacao": "Eb"
                              },
                              {
                                   "grau": 1,
                                   "notacao": "Fm"
                              },
                              {
                                   "grau": 2,
                                   "notacao": "Gm"
                              },
                              {
                                   "grau": 3,
                                   "notacao": "Ab"
                              },
                              {
                                   "grau": 4,
                                   "notacao": "Bb"
                              },
                              {
                                   "grau": 5,
                                   "notacao": "Cm"
                              },
                              {
                                   "grau": 6,
                                   "notacao": "Dº"
                              }
                         ]
                    },
                    {
                         "tom": "E",
                         "acordes": [
                              {
                                   "grau": 0,
                                   "notacao": "E"
                              },
                              {
                                   "grau": 1,
                                   "notacao": "F#m"
                              },
                              {
                                   "grau": 2,
                                   "notacao": "G#m"
                              },
                              {
                                   "grau": 3,
                                   "notacao": "A"
                              },
                              {
                                   "grau": 4,
                                   "notacao": "B"
                              },
                              {
                                   "grau": 5,
                                   "notacao": "C#m"
                              },
                              {
                                   "grau": 6,
                                   "notacao": "D#º"
                              }
                         ]
                    },
                    {
                         "tom": "F",
                         "acordes": [
                              {
                                   "grau": 0,
                                   "notacao": "F"
                              },
                              {
                                   "grau": 1,
                                   "notacao": "Gm"
                              },
                              {
                                   "grau": 2,
                                   "notacao": "Am"
                              },
                              {
                                   "grau": 3,
                                   "notacao": "Bb"
                              },
                              {
                                   "grau": 4,
                                   "notacao": "C"
                              },
                              {
                                   "grau": 5,
                                   "notacao": "Dm"
                              },
                              {
                                   "grau": 6,
                                   "notacao": "Eº"
                              }
                         ]
                    },
                    {
                         "tom": "Gb",
                         "acordes": [
                              {
                                   "grau": 0,
                                   "notacao": "Gb"
                              },
                              {
                                   "grau": 1,
                                   "notacao": "Abm"
                              },
                              {
                                   "grau": 2,
                                   "notacao": "Bbm"
                              },
                              {
                                   "grau": 3,
                                   "notacao": "Cb"
                              },
                              {
                                   "grau": 4,
                                   "notacao": "Db"
                              },
                              {
                                   "grau": 5,
                                   "notacao": "Ebm"
                              },
                              {
                                   "grau": 6,
                                   "notacao": "Fº"
                              }
                         ]
                    },
                    {
                         "tom": "G",
                         "acordes": [
                              {
                                   "grau": 0,
                                   "notacao": "G"
                              },
                              {
                                   "grau": 1,
                                   "notacao": "Am"
                              },
                              {
                                   "grau": 2,
                                   "notacao": "Bm"
                              },
                              {
                                   "grau": 3,
                                   "notacao": "C"
                              },
                              {
                                   "grau": 4,
                                   "notacao": "D"
                              },
                              {
                                   "grau": 5,
                                   "notacao": "Em"
                              },
                              {
                                   "grau": 6,
                                   "notacao": "F#º"
                              }
                         ]
                    },
                    {
                         "tom": "Ab",
                         "acordes": [
                              {
                                   "grau": 0,
                                   "notacao": "Ab"
                              },
                              {
                                   "grau": 1,
                                   "notacao": "Bbm"
                              },
                              {
                                   "grau": 2,
                                   "notacao": "Cm"
                              },
                              {
                                   "grau": 3,
                                   "notacao": "Db"
                              },
                              {
                                   "grau": 4,
                                   "notacao": "Eb"
                              },
                              {
                                   "grau": 5,
                                   "notacao": "Fm"
                              },
                              {
                                   "grau": 6,
                                   "notacao": "Gº"
                              }
                         ]
                    },
                    {
                         "tom": "A",
                         "acordes": [
                              {
                                   "grau": 0,
                                   "notacao": "A"
                              },
                              {
                                   "grau": 1,
                                   "notacao": "Bm"
                              },
                              {
                                   "grau": 2,
                                   "notacao": "C#m"
                              },
                              {
                                   "grau": 3,
                                   "notacao": "D"
                              },
                              {
                                   "grau": 4,
                                   "notacao": "E"
                              },
                              {
                                   "grau": 5,
                                   "notacao": "F#m"
                              },
                              {
                                   "grau": 6,
                                   "notacao": "G#º"
                              }
                         ]
                    },
                    {
                         "tom": "Bb",
                         "acordes": [
                              {
                                   "grau": 0,
                                   "notacao": "Bb"
                              },
                              {
                                   "grau": 1,
                                   "notacao": "Cm"
                              },
                              {
                                   "grau": 2,
                                   "notacao": "Dm"
                              },
                              {
                                   "grau": 3,
                                   "notacao": "Eb"
                              },
                              {
                                   "grau": 4,
                                   "notacao": "F"
                              },
                              {
                                   "grau": 5,
                                   "notacao": "Gm"
                              },
                              {
                                   "grau": 6,
                                   "notacao": "Aº"
                              }
                         ]
                    },
                    {
                         "tom": "B",
                         "acordes": [
                              {
                                   "grau": 0,
                                   "notacao": "B"
                              },
                              {
                                   "grau": 1,
                                   "notacao": "C#m"
                              },
                              {
                                   "grau": 2,
                                   "notacao": "D#m"
                              },
                              {
                                   "grau": 3,
                                   "notacao": "E"
                              },
                              {
                                   "grau": 4,
                                   "notacao": "F#"
                              },
                              {
                                   "grau": 5,
                                   "notacao": "G#m"
                              },
                              {
                                   "grau": 6,
                                   "notacao": "A#º"
                              }
                         ]
                    }
               ],
          };
     },
     computed: {
          acordesFiltrados() {
               return this.acordes.filter((tom) => tom.tom === this.tomSelecionado);
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
     @apply bg-slate-500 text-white;
}

tr:nth-child(1) {
     background-color: #eaeaea;
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
     @apply mb-4 bg-cyan-600 text-white;
     outline: none;

}

option {
     @apply bg-slate-200 text-slate-900
}
</style>
   