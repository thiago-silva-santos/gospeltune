<template>
     <transition name="overlay-fade">
          <div class="tuning_overlay" v-if="isOpen" @click="() => isOpen = false"></div>
     </transition>
     <button class="tuning_button" @click="openTuningOptions">
          {{ TonalidadeStore.tonalidadeAtualNotacao }}
     </button>
     <transition name="back-fade">
          <div v-if="isOpen" class="go_back">
               <nuxt-link :to="props.goBack" @click="() => isOpen = false">
                    <button class="flex justify-center items-center">
                         <span class="material-symbols-outlined">
                              undo
                         </span>
                    </button>
               </nuxt-link>
          </div>
     </transition>
     <transition name="fade">
          <div class="tuning_items" v-if="isOpen">
               <div class="button_container">

                    <button v-for="btn in TonalidadeStore.tonalidades" @click="changeTom(btn.posicao)"
                         :class="[TonalidadeStore.tonalidadeAtual === btn.posicao ? 'tom_button active' : 'tom_button']">
                         {{ btn.notacao }}
                    </button>

               </div>
          </div>
     </transition>
</template>
<script setup lang="ts">
const emits = defineEmits(['tuning-component-tune'])
import { useTonalidadeStore } from '@/stores/tonalidade'

const props = defineProps({
     goBack: {
          type: String,
          default: '/'
     }
})


const TonalidadeStore = useTonalidadeStore()

const isOpen = ref<boolean>(false)

function openTuningOptions() {
     isOpen.value = !isOpen.value
}
function changeTom(value: number) {
     TonalidadeStore.updateTonalidade(value)
     setTimeout(() => {
          
          isOpen.value = false
     }, 0);
}


watch(() => isOpen.value, (value) => {
     if (value) {
          document.body.style.overflowY = 'hidden'
     } else {
          document.body.style.overflowY = 'auto'
     }
})


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



.go_back a:hover,
.go_back span {
     @apply bg-slate-400 transition ease-in-out delay-100;
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
          @apply fixed w-fit h-fit bg-slate-100 rounded-lg shadow-lg flex flex-col justify-between items-center p-4;
          bottom: 60px;
          right: 80px;
          z-index: 999;
     }



     .button_container {
          @apply grid grid-cols-3 gap-4
     }

     .zoom_actions_container {
          @apply flex flex-col gap-2
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
          @apply fixed flex flex-col items-center gap-10;
          bottom: 70px;
          right: 20px;
          z-index: 999;
     }

     .go_back a,
     .go_back span {
          @apply flex justify-center items-center bg-white text-slate-700 p-2 w-8 h-8 text-xl font-medium shadow-lg rounded-full
     }

     .cifra_dividida_active span {
          @apply bg-red-600 rounded-full text-white;
     }
}
</style>