<template>
     <div class="container  w-full h-screen mx-auto p-10 flex flex-col justify-center items-center gap-10">

          <div class="circular-progress"
               :style="`background: conic-gradient(#7d2ae8 ${this.progress * 3.6}deg, #ededed 0deg)`">
               <span class="progress-value">{{ progress }}%</span>
          </div>





          <div class="progress-bar-2 relative">
               <svg viewBox="-1 -1 34 34">
                    <circle cx="16" cy="16" r="14" class="progress-bar__background" />
                    <circle cx="16" cy="16" r="14" class="progress-bar__progress 
                      js-progress-bar" :style="`--num: ${this.progress}`" />
               </svg>
               <div class="content">
                    <span>{{ progress }}%</span>
               </div>
          </div>



          <input type="text" class="border p-2" v-model="progress">
     </div>
</template>
<script>
export default {
     data() {
          return {
               progress: 25
          }
     }
}
</script>
<style scoped>
.circular-progress {
     position: relative;
     height: 150px;
     width: 150px;
     border-radius: 50%;
     /* background: conic-gradient(#0d0814 3.6deg, #ededed 0deg); */
     display: flex;
     align-items: center;
     justify-content: center;
     animation: grad1 3s linear;
}

.circular-progress::before {
     content: "";
     position: absolute;
     height: 130px;
     width: 130px;
     border-radius: 50%;
     background-color: #fff;
}

.progress-value {
     position: relative;
     font-size: 40px;
     font-weight: 600;
     color: #7d2ae8;
}



/* OUTRA FORMA DE BARRA DE PROGRESSO */


.progress-bar-2 {
     @apply w-20 h-20
}

svg {
     height: 100%;
     width: 100%;
     transform: rotate(270deg);
}

.progress-bar__background {
     fill: none;
     stroke: #e2eff0;
     stroke-width: 2.8;
}

.progress-bar__progress {
     fill: none;
     stroke: #2b2b2b;
     stroke-dasharray: 87;
     stroke-dashoffset: calc(87 - (85 * var(--num)) / 100);
     stroke-linecap: round;
     stroke-width: 2.8;
     transition: stroke-dashoffset 1s ease-in-out;
}
.content {
     @apply absolute;
     top: 50%;
     left: 50%;
     transform: translate(-50%, -50%);
}
</style>