<template>
     <div>
          <transition name="fade">
               <div class="tuning_overlay" v-if="isOpen" @click="openTuningOptions"></div>

          </transition>
          <button class="tuning_button" @click="openTuningOptions">
               {{ this.tonalidadeAtual }}
          </button>
          <div class="tuning_items" v-if="isOpen">
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
     },
     watch: {
          isOpen(value) {
               if(value) {
                    document.body.style.overflowY = 'hidden'
               } else {
                    document.body.style.overflowY = 'auto'
               }
          }
     }
}
</script>
<style lang="css" scoped>
.tuning_overlay {

     position: fixed;
     background-color: rgba(0, 0, 0, 0.2);
     top: 0;
     bottom: 0;
     right: 0;
     left: 0;
     z-index: 998;
}

.tuning_button {
     @apply rounded-full bg-red-700 text-white p-2 w-10 h-10 flex justify-center items-center text-lg font-bold shadow-lg;
     transition: all .3s ease;
     @apply fixed;
     bottom: 20px;
     right: 20px;
     z-index: 999;
}

.tuning_button:hover {
     @apply bg-red-700 transition ease-in-out delay-100;
}

.tuning_items {
     @apply absolute w-[400px] h-32 bg-slate-100 rounded-lg shadow-lg flex flex-col justify-center items-center;
     transition: all .5s ease-in-out;
     bottom: 60px;
     right: 60px;
     z-index: 999;
}

.tom_button {
     @apply rounded-full shadow-sm w-8 h-8 text-rose-600 bg-rose-200
}

.active {
     @apply bg-rose-600 text-white
}




.fade-enter-active {
     animation: fade-in .3s;

}

.fade-leave-active {
     animation: fade-in .3s reverse;
}

@keyframes fade-in {

     0% {
          opacity: 0;
     }

     100% {
          opacity: 1;
     }
}
@media (max-width: 500px) {
     .tuning_items {
          @apply w-[200px] h-80 p-4 gap-4;
          bottom: 60px;
     }

     .button_container {
          @apply flex-wrap justify-center
     }
}
</style>