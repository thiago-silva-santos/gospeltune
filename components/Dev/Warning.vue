<template>
     <div class="fixed flex justify-center items-center top-0 left-0 w-full h-full bg-black/50">
               <div class="bg-white p-8 rounded-lg min-h-52 min-w-80 flex flex-col items-center justify-between">
                    <h1>Atenção!</h1>
                    <div class="flex w-full  gap-4 items-center justify-between">
                         <slot></slot>
                         
                    </div>
               </div>
     </div>
</template>
<script setup>
const props = defineProps(['foo'])

</script>
