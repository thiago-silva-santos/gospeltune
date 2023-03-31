<template>
     <div class="form">
          <h1>Adicionar Cifra</h1>
          <div class="input-group">
               <label for="song-id">ID</label>
               <input id="song-id" type="text" v-model="song.id">
          </div>
          <div class="input-group">
               <label for="song-number">Número</label>
               <input id="song-number" type="text" v-model="song.numero">

          </div>
          <div class="input-group">
               <label for="song-name">Nome</label>
               <input id="song-name" type="text" v-model="song.nome">

          </div>
          <div class="form-action">
               <button @click="enviar" class="bg-black text-white p-4 rounded-md">
                    Enviar Cifra
               </button>
          </div>
     </div>
</template>
<script>

import corinhos from '../assets/corinhos.json'
export default {
     props: {
          cifra: {
               type: Array,
               required: true
          }
     },
     data() {
          return {
               song: {
                    id: null,
                    numero: null,
                    nome: '',
                    cifra: []
               }
          }
     },
     methods: {
          enviar() {
               this.song.cifra = this.cifra
               const objetoComIdExiste = corinhos.some(objeto => objeto.id === this.id);
               if(objetoComIdExiste) {
                    alert('id já existe')
               } else {
                    corinhos.push(this.song)
               }
          }
     }
}
</script>
<style lang="css">
.form {
     @apply w-[350px] flex flex-col gap-8 p-4
}

input {
     @apply bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight  focus:bg-white;
}
</style>