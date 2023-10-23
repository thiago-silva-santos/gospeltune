<template>
    <div class="cifra_container" id="cifra">
        <div class="flex flex-col pt-10 gap-2" v-for="parte in musica">
            <span class="titulo_verso" v-if="parte.tipo !== 'Primeira Parte'">{{ parteTitulo(parte.tipo) }}</span>
            <cifra-musica-parte :parte="parte.versos" :tonalidade="tom" :style-props="parteTipo(parte.tipo)" />
        </div>
    </div>
</template>
<script setup lang="ts">
import { ISongPartes, IStyle } from '@/types/cifra/Cifra'
import { PropType } from 'vue'

const props = defineProps({
    musica: {
        type: Array as PropType<ISongPartes[]>,
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
const finalStyle = ref<IStyle>({ textColor: 'text-red-500', fontWeigth: 'font-normal' })

const musica = computed(() => {
    return props.musica
})

const tom = computed(() => {
    return props.tonalidade
})

function parteTitulo(tipo: string) {
    switch (tipo) {
        case "Primeira Parte":
            return
        case "Segunda Parte":
            return "[ Segunda Parte ]"
        case "Refrão":
            return "[ Refrão ]"
        case "Ponte":
            return "[ Ponte ]"
        case "Final":
            return "[ Final ]"

        default:
            break;
    }
}
function parteTipo(tipo: string) {
    switch (tipo) {
        case "Primeira Parte":
            return parteStyle.value
        case "Segunda Parte":
            return parteStyle.value
        case "Refrão":
            return refraoStyle.value
        case "Ponte":
            return ponteStyle.value
        case "Final":
            return finalStyle.value

        default:
            break;
    }
}

</script>
<style scoped>
.titulo_verso {
    @apply mb-2 font-normal text-xs;
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