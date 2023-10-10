<template>
    <div :class="split ? 'cifra_dividida_container' : 'cifra_container'">
        <div class="flex flex-col">

            <div class="pt-10">
                <cifra-musica-parte :parte="musica.parte_1" :tonalidade="tom" />
            </div>
            <div class="pt-6" v-if="musica.parte_2 && musica.parte_2.length > 0">
                <cifra-musica-parte :parte="musica.parte_2 " :tonalidade="tom" />
            </div>
            <div class="pt-6" v-if="musica.parte_3 && musica.parte_3.length > 0">
                <cifra-musica-parte :parte="musica.parte_3" :tonalidade="tom" />
            </div>
    
    
            <div class="flex flex-col pt-10 gap-2" v-if="musica.refrao_1 && musica.refrao_1.length > 0">
                <span :class=" split ? 'titulo_verso_xs' : 'titulo_verso'">[ Refrão ]</span>
                <cifra-musica-refrao :refrao="musica.refrao_1" :tonalidade="tom" />
            </div>
            <div class="pt-6" v-if="musica.refrao_2 && musica.refrao_2.length > 0">
                <cifra-musica-refrao :refrao="musica.refrao_2" :tonalidade="tom" />
            </div>
            <div class="pt-6" v-if="musica.refrao_3 && musica.refrao_3.length > 0">
                <cifra-musica-refrao :refrao="musica.refrao_3" :tonalidade="tom" />
            </div>

        </div>
        
        <div class="flex flex-col">

            <div class="pt-10" v-if="musica.parte_4 && musica.parte_4.length > 0">
                <cifra-musica-parte :parte="musica.parte_4" :tonalidade="tom" />
            </div>
            <div class="pt-6" v-if="musica.parte_5 && musica.parte_5.length > 0">
                <cifra-musica-parte :parte="musica.parte_5" :tonalidade="tom" />
            </div>
            <div class="pt-6" v-if="musica.parte_6 && musica.parte_6.length > 0">
                <cifra-musica-parte :parte="musica.parte_6" :tonalidade="tom" />
            </div>
    
    
            <div class="flex flex-col pt-10 gap-2" v-if="musica.ponte_1 && musica.ponte_1.length > 0">
                <span :class=" split ? 'titulo_verso_xs text-red-900' : 'titulo_verso text-red-900'">[ Ponte ]</span>
                <cifra-musica-ponte :ponte="musica.ponte_1" :tonalidade="tom" />
            </div>
            <div class="pt-6" v-if="musica.ponte_2 && musica.ponte_2.length > 0">
                <cifra-musica-ponte :ponte="musica.ponte_2" :tonalidade="tom" />
            </div>
            <div class="pt-6" v-if="musica.ponte_3 && musica.ponte_3.length > 0">
                <cifra-musica-ponte :ponte="musica.ponte_3" :tonalidade="tom" />
            </div>

        </div>

    </div>
</template>
<script setup lang="ts">
import hinosV2 from '@/assets/Cifras/hinosV2.json'
import { ISongPartes } from '@/types/cifra/Cifra'
import { PropType } from 'vue'
const props = defineProps({
    musica: {
        type: Object as PropType<ISongPartes>,
        required: true,
    },
    tonalidade: {
        type: Number,
        default: 0
    }
})

const split = ref<boolean>(true)


const musica = computed(() => {
    return props.musica
})
const tom = computed(() => {
    return props.tonalidade
})


</script>
<style scoped>
.titulo_verso {
    @apply mb-2 font-bold text-xs;
    letter-spacing: 1px;
}
.titulo_verso_xs {
    @apply text-[9px]
}
.cifra_container {
    @apply flex flex-col
}
.cifra_dividida_container {
    @apply w-fit flex justify-start gap-4
}
</style>