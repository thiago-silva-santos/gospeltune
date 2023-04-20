<template>
     <div class="container  w-full h-screen mx-auto p-10 flex justify-center items-center gap-10">

          <div class="circular-progress"
               :style="`background: conic-gradient(#7d2ae8 ${this.progress * 3.6}deg, #ededed 0deg)`">
               <span class="progress-value">{{ progress }}%</span>
          </div>

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
</style>