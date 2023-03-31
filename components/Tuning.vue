<template>
     <div>
          <transition name="fade">
               <div class="tuning_overlay" v-if="isOpen" @click="openTuningOptions"></div>

          </transition>
          <button class="tuning_button" @click="openTuningOptions">
               {{ this.tonalidadeAtualString }}
          </button>
          <div class="tuning_items" v-if="isOpen">
               <div class="button_container flex gap-6">
                    <button :class="[this.tonalidadeAtual === 'C' ? 'tom_button active' : 'tom_button']"
                         @click="changeTom(0)"> C </button>
                    <button :class="[this.tonalidadeAtual === 'D' ? 'tom_button active' : 'tom_button']"
                         @click="changeTom(1)"> D </button>
                    <button :class="[this.tonalidadeAtual === 'E' ? 'tom_button active' : 'tom_button']"
                         @click="changeTom(2)"> E </button>
                    <button :class="[this.tonalidadeAtual === 'F' ? 'tom_button active' : 'tom_button']"
                         @click="changeTom(3)"> F </button>
                    <button :class="[this.tonalidadeAtual === 'G' ? 'tom_button active' : 'tom_button']"
                         @click="changeTom(4)"> G </button>
                    <button :class="[this.tonalidadeAtual === 'A' ? 'tom_button active' : 'tom_button']"
                         @click="changeTom(5)"> A </button>
                    <button :class="[this.tonalidadeAtual === 'B' ? 'tom_button active' : 'tom_button']"
                         @click="changeTom(6)"> B </button>
               </div>
               <div class="button_container flex gap-6 mt-2">
                    <button :class="[this.tonalidadeAtual === 'Db' ? 'tom_button active' : 'tom_button']"
                         @click="changeTom(7)"> Db </button>
                    <button :class="[this.tonalidadeAtual === 'Eb' ? 'tom_button active' : 'tom_button']"
                         @click="changeTom(8)"> Eb </button>
                    <button :class="[this.tonalidadeAtual === 'Gb' ? 'tom_button active' : 'tom_button']"
                         @click="changeTom(9)"> Gb </button>
                    <button :class="[this.tonalidadeAtual === 'Ab' ? 'tom_button active' : 'tom_button']"
                         @click="changeTom(10)"> Ab </button>
                    <button :class="[this.tonalidadeAtual === 'Bb' ? 'tom_button active' : 'tom_button']"
                         @click="changeTom(11)"> Bb </button>
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
               tonalidadeAtual: 0
          }
     },

     methods: {
          sendTune() {
               this.$emit("tuning-component-tune", this.tonalidadeAtual);
          },
          openTuningOptions() {
               this.isOpen = !this.isOpen
          },
          changeTom(value) {
               this.tonalidadeAtual = value;
               this.sendTune()
               this.isOpen = false
          }

     },
     computed: {
          tonalidadeAtualString() {
               let tom = 0
               switch (this.tonalidadeAtual) {
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
          }
     },
     watch: {
          isOpen(value) {
               if (value) {
                    document.body.style.overflowY = 'hidden'
               } else {
                    document.body.style.overflowY = 'auto'
               }
          }
     },
     created() {
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