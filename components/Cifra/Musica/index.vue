<template>
    <div>
        <div class="pt-10">
            <cifra-musica-parte :parte="hinos.parte_1" :tonalidade="tom" />
        </div>
        <div class="pt-6" v-if="hinos.parte_2.length > 0">
            <cifra-musica-parte :parte="hinos.parte_2" :tonalidade="tom" />
        </div>
        <div class="pt-6" v-if="hinos.parte_3.length > 0">
            <cifra-musica-parte :parte="hinos.parte_3" :tonalidade="tom" />
        </div>


        <div class="flex flex-col pt-10 gap-2" v-if="hinos.refrao_1.length > 0">
            <span class="titulo-verso font-bold text-xs text-red-900">[ Refrão ]</span>
            <cifra-musica-refrao :refrao="hinos.refrao_1" :tonalidade="tom" />
        </div>
        <div class="pt-10" v-if="hinos.refrao_2.length > 0">
            <cifra-musica-refrao :refrao="hinos.refrao_2" :tonalidade="tom" />
        </div>
        <div class="pt-10" v-if="hinos.refrao_3.length > 0">
            <cifra-musica-refrao :refrao="hinos.refrao_3" :tonalidade="tom" />
        </div>
        

        <div class="pt-10">
            <cifra-musica-parte :parte="hinos.parte_1" :tonalidade="tom" />
        </div>
        <div class="pt-6" v-if="hinos.parte_2.length > 0">
            <cifra-musica-parte :parte="hinos.parte_2" :tonalidade="tom" />
        </div>
        <div class="pt-6" v-if="hinos.parte_3.length > 0">
            <cifra-musica-parte :parte="hinos.parte_3" :tonalidade="tom" />
        </div>


        <div class="flex flex-col pt-10 gap-2" v-if="hinos.ponte_1.length > 0">
            <span class="titulo-verso font-bold text-xs text-red-900">[ Ponte ]</span>
            <cifra-musica-ponte :ponte="hinos.ponte_1" :tonalidade="tom" />
        </div>
        <div class="pt-10" v-if="hinos.ponte_2.length > 0">
            <cifra-musica-ponte :ponte="hinos.ponte_2" :tonalidade="tom" />
        </div>
        <div class="pt-10" v-if="hinos.ponte_3.length > 0">
            <cifra-musica-ponte :ponte="hinos.ponte_3" :tonalidade="tom" />
        </div>

    </div>
</template>
<script setup lang="ts">
import campo from '@/assets/CampoHarmonico/CampoHarmonicoComponentData.json'
import hinosV2 from '@/assets/Cifras/hinosV2.json'
import { ICifra } from '~~/types/cifra/Cifra'
const props = defineProps({
    musica: {
        type: Array,
        required: true,
    },
    tonalidade: {
        type: Number,
        default: 0
    }
})



const campoHarmonico = computed(() => {
    return campo
})
const hinos = computed(() => {
    return hinosV2[0].teste
})
const tom = computed(() => {
    return props.tonalidade
})


</script>
<style scoped>
.titulo-verso {
    @apply mb-2;
    letter-spacing: 1px;
}
</style>