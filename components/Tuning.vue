<template>
     <div class="tuning_main_container">
          <button class="tuning_button" @click="openTuningOptions">
               {{ this.tonalidadeAtual }}
          </button>
          <div v-if="isOpen" class="tuning_container">
               <div class="tuning_items">
                    <div class="button_container flex gap-6">
                         <button :class="[this.tonalidadeAtual === 'C' ? 'tom_button active' : 'tom_button']"
                              @click="changeTom('C')"> C </button>
                         <button :class="[this.tonalidadeAtual === 'D' ? 'tom_button active' : 'tom_button']"
                              @click="changeTom('D')"> D </button>
                         <button :class="[this.tonalidadeAtual === 'E' ? 'tom_button active' : 'tom_button']"
                              @click="changeTom('E')"> E </button>
                         <button :class="[this.tonalidadeAtual === 'F' ? 'tom_button active' : 'tom_button']"
                              @click="changeTom('F')"> F </button>
                         <button :class="[this.tonalidadeAtual === 'G' ? 'tom_button active' : 'tom_button']"
                              @click="changeTom('G')"> G </button>
                         <button :class="[this.tonalidadeAtual === 'A' ? 'tom_button active' : 'tom_button']"
                              @click="changeTom('A')"> A </button>
                         <button :class="[this.tonalidadeAtual === 'B' ? 'tom_button active' : 'tom_button']"
                              @click="changeTom('B')"> B </button>
                    </div>
                    <div class="button_container flex gap-6 mt-2">
                         <button :class="[this.tonalidadeAtual === 'Db' ? 'tom_button active' : 'tom_button']"
                              @click="changeTom('Db')"> Db </button>
                         <button :class="[this.tonalidadeAtual === 'Eb' ? 'tom_button active' : 'tom_button']"
                              @click="changeTom('Eb')"> Eb </button>
                         <button :class="[this.tonalidadeAtual === 'Gb' ? 'tom_button active' : 'tom_button']"
                              @click="changeTom('Gb')"> Gb </button>
                         <button :class="[this.tonalidadeAtual === 'Ab' ? 'tom_button active' : 'tom_button']"
                              @click="changeTom('Ab')"> Ab </button>
                         <button :class="[this.tonalidadeAtual === 'Bb' ? 'tom_button active' : 'tom_button']"
                              @click="changeTom('Bb')"> Bb </button>
                    </div>
               </div>
          </div>
     </div>
</template>
<script>
export default {

     emits: ['tuning-component-tune'],
     data() {
          return {
               isOpen: false,
               tonalidadeAtual: "C"
          }
     },

     methods: {
          sendTune() {
               console.log('tom:  ' + this.tonalidadeAtual)
               this.$emit("tuning-component-tune", this.tonalidadeAtual);
          },
          openTuningOptions() {
               this.isOpen = !this.isOpen
          },
          changeTom(value) {
               console.log(value)
               this.tonalidadeAtual = value;
               this.sendTune()
               this.isOpen = false
          }
     }
}
</script>
<style lang="css" scoped>
.tuning_main_container {
     @apply fixed;
     top: 20px;
     right: 20px;

}

.tuning_button {
     @apply rounded-full bg-red-900 text-white p-2 w-10 h-10 flex justify-center items-center text-lg;

}

.tuning_button:hover {
     @apply bg-red-700 transition ease-in-out delay-100;
}

.tuning_container {
     @apply relative
}

.tuning_items {
     @apply absolute w-[400px] h-32 bg-slate-100 right-10 rounded-lg shadow-lg flex flex-col justify-center items-center
}

.tom_button {
     @apply rounded-full shadow-sm w-8 h-8 text-rose-600 bg-rose-200
}
.active {
     @apply bg-rose-600 text-white
}
@media (max-width: 500px) {
     .tuning_items {
          @apply w-[200px] h-80 p-4 gap-4 -bottom-[320px]
     }
     .button_container {
          @apply flex-wrap justify-center
     }
}
</style>