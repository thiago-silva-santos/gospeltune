<template>
     <transition name="overlay-fade">
          <div class="tuning_overlay" v-if="isOpen" @click="() => isOpen = false"></div>
     </transition>
     <transition name="back-fade">
          <div v-if="isOpen" class="go_back">
               <nuxt-link :to="goBack" @click="() => this.isOpen = false">
                    <button class="flex justify-center items-center">
                         <span class="material-symbols-outlined">
                              undo
                         </span>
                    </button>
               </nuxt-link>
          </div>
     </transition>
     <button class="tuning_button" @click="openTuningOptions">
          {{ this.tonalidadeAtualString }}
     </button>
     <transition name="fade">
          <div class="tuning_items" v-if="isOpen">
               <div class="button_container">
                    <button :class="[this.tonalidadeAtualString === 'C' ? 'tom_button active' : 'tom_button']"
                         @click="changeTom(0)"> C </button>
                    <button :class="[this.tonalidadeAtualString === 'D' ? 'tom_button active' : 'tom_button']"
                         @click="changeTom(1)"> D </button>
                    <button :class="[this.tonalidadeAtualString === 'E' ? 'tom_button active' : 'tom_button']"
                         @click="changeTom(2)"> E </button>
                    <button :class="[this.tonalidadeAtualString === 'F' ? 'tom_button active' : 'tom_button']"
                         @click="changeTom(3)"> F </button>
                    <button :class="[this.tonalidadeAtualString === 'G' ? 'tom_button active' : 'tom_button']"
                         @click="changeTom(4)"> G </button>
                    <button :class="[this.tonalidadeAtualString === 'A' ? 'tom_button active' : 'tom_button']"
                         @click="changeTom(5)"> A </button>
                    <button :class="[this.tonalidadeAtualString === 'B' ? 'tom_button active' : 'tom_button']"
                         @click="changeTom(6)"> B </button>
               </div>
               <div class="button_container">
                    <button :class="[this.tonalidadeAtualString === 'Db' ? 'tom_button active' : 'tom_button']"
                         @click="changeTom(7)"> Db </button>
                    <button :class="[this.tonalidadeAtualString === 'Eb' ? 'tom_button active' : 'tom_button']"
                         @click="changeTom(8)"> Eb </button>
                    <button :class="[this.tonalidadeAtualString === 'Gb' ? 'tom_button active' : 'tom_button']"
                         @click="changeTom(9)"> Gb </button>
                    <button :class="[this.tonalidadeAtualString === 'Ab' ? 'tom_button active' : 'tom_button']"
                         @click="changeTom(10)"> Ab </button>
                    <button :class="[this.tonalidadeAtualString === 'Bb' ? 'tom_button active' : 'tom_button']"
                         @click="changeTom(11)"> Bb </button>
               </div>
          </div>
     </transition>
</template>
<script>
export default {
     props: {
          tonalidadePadrao: {
               type: Number,
               default: 0
          },
          goBack: {
               type: String,
               default: '/'
          }
     },
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
          if (this.tonalidadePadrao !== 0) {
               this.tonalidadeAtual = this.tonalidadePadrao
          }
     }
}
</script>
<style lang="css" scoped>
.tuning_overlay {
     position: fixed;
     background-color: rgba(0, 0, 0, 0.8);
     top: 0;
     bottom: 0;
     right: 0;
     left: 0;
     z-index: 995;
}



.go_back:hover {
     @apply bg-slate-100 transition ease-in-out delay-100;
}

.tuning_button:hover {
     @apply bg-red-500 transition ease-in-out delay-100;
}





.tom_button:hover {
     @apply bg-slate-300
}


.active:hover {
     @apply bg-red-500
}


.fade-enter-active {
     animation: fade-in .3s;

}

.fade-leave-active {
     animation: fade-in .3s reverse;
}


.back-fade-enter-active {
     animation: back-fade-in .3s;

}

.back-fade-leave-active {
     animation: back-fade-in .3s reverse;
}


.overlay-fade-enter-active {
     animation: overlay-fade .5s;
}

.overlay-fade-leave-active {
     animation: overlay-fade .5s reverse;
}

@keyframes overlay-fade {

     0% {
          opacity: 0;
     }

     100% {
          opacity: 1;
     }
}

@keyframes fade-in {

     0% {
          transform: translateY(100%);
          opacity: 0;
     }

     100% {
          opacity: 1;
          transform: translateY(0);
     }
}

@keyframes back-fade-in {

     0% {
          transform: translateX(100%);
          opacity: 0;
     }

     100% {
          opacity: 1;
          transform: translateX(0);
     }
}

@media (min-width: 320px) {
     .tuning_items {
          @apply fixed w-[180px] h-72 bg-slate-100 rounded-lg shadow-lg flex flex-col justify-between items-center p-4;
          bottom: 60px;
          right: 80px;
          z-index: 999;
     }



     .button_container {
          @apply flex justify-center gap-4 flex-wrap
     }

     .tom_button {
          @apply rounded-full shadow-slate-400 w-8 h-8 text-slate-500 bg-slate-200 font-medium text-base;
          transition: all .3s ease;
     }

     .active {
          @apply bg-red-500 text-white
     }

     .tuning_button {
          @apply fixed rounded-full bg-red-600 text-white w-8 h-8 flex justify-center items-center text-base font-bold shadow-lg;
          transition: all .3s ease;
          bottom: 20px;
          right: 20px;
          z-index: 999;
     }

     .go_back {
          @apply fixed rounded-full flex justify-center items-center bg-white text-slate-700 p-2 w-8 h-8 text-xl font-bold shadow-lg;
          bottom: 70px;
          right: 20px;
          z-index: 999;
     }

}



</style>