<template>
    <div class="cifra_container" id="cifra">

        <div class="pt-10">
            <cifra-musica-parte :parte="musica.parte" :tonalidade="tom" :style-props="parteStyle" />
        </div>

        <div class="flex flex-col pt-5 gap-2" v-if="musica.refrao && musica.refrao.length > 0">
            <span class="titulo_verso">[ Refrão ]</span>
            <cifra-musica-parte :parte="musica.refrao" :tonalidade="tom" :style-props="refraoStyle" />
        </div>
        <div class="flex flex-col pt-5 gap-2" v-if="musica.ponte && musica.ponte.length > 0">
            <span class="titulo_verso text-red-900">[ Ponte ]</span>
            <cifra-musica-parte :parte="musica.ponte" :tonalidade="tom" :style-props="ponteStyle" />
        </div>
        <div class="flex flex-col pt-5 gap-2" v-if="musica.final && musica.final.length > 0">
            <span class="titulo_verso text-green-900">[ Final ]</span>
            <cifra-musica-parte :parte="musica.final" :tonalidade="tom" :style-props="finalStyle" />
        </div>

    </div>
</template>
<script setup lang="ts">
import { ISongPartes, IStyle } from '@/types/cifra/Cifra'
import { PropType } from 'vue'

import { useSplitStore } from '~~/stores/split'
const SplitStore = useSplitStore()

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

const parteStyle = ref<IStyle>({ textColor: 'text-black', fontWeigth: 'font-normal' })
const refraoStyle = ref<IStyle>({ textColor: 'text-black', fontWeigth: 'font-bold' })
const ponteStyle = ref<IStyle>({ textColor: 'text-red-900', fontWeigth: 'font-medium' })
const finalStyle = ref<IStyle>({ textColor: 'text-green-900', fontWeigth: 'font-normal' })

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
    @apply w-fit gap-4
}
</style>