<template>
    <pre class="flex flex-col">
        <template v-for="linha in cifra" :key="linha">
            <span class="flex">
                <b v-for="item in parseString(linha.chords)">{{ tom[item as any]?.notacao }}</b>
            </span>
            <span :class="`linha-verso ${props.styleProps?.fontWeigth} ${props.styleProps?.textColor}`">{{ linha.verse }}</span>
            <span v-if="linha.divider" class="h-5"></span>
        </template>
    </pre>
</template>
<script setup lang="ts">
import { ICifra, IStyle } from '~~/types/cifra/Cifra'
import campo from '@/assets/CampoHarmonico/CampoHarmonicoComponentData.json'
import { PropType } from 'nuxt/dist/app/compat/capi';

const props = defineProps({
    parte: {
        type: Array as PropType<ICifra[]>
    },
    tonalidade: {
        type: Number,
        required: true
    },
    styleProps: {
        type: Object as PropType<IStyle>,
        required: true
    }
})

watch(() => props.tonalidade, (value) => {
    console.log(value)
})
const cifra = computed(() => {
    console.log(props.parte)
    return props.parte
})
const campoHarmonico = computed(() => {
    return campo
})
const tom = computed(() => {
    return campoHarmonico.value[props.tonalidade].acordes;
})

function parseString(string: string) {
    const items = [];
    let currentItem = "";

    for (let i = 0; i < string.length; i++) {
        const char = string[i];

        if (/\d/.test(char)) {
            currentItem += char;
        } else if (char === " ") {
            if (currentItem !== "") {
                items.push(currentItem);
                currentItem = "";
            }

            items.push(" ");
        }
    }

    if (currentItem !== "") {
        items.push(currentItem);
    }
    return items;
}
</script>
<style scoped>
.linha-verso {
    @apply mb-2;
    letter-spacing: 1px;
}

b {
    @apply text-red-600
}
</style>