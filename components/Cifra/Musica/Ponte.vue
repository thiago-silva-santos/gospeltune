<template>
    <pre :class="['flex flex-col', {'cifra_dividida': SplitStore.split}]">
            <template v-for="linha in cifra" :key="linha">
                <template v-if="linha.verse">
                    <span class="flex" v-if="linha.chords.length > 0">
                        <template v-for="item in parseString(linha.chords)">
                            <b :class="{'cifra_dividida_b': SplitStore.split}">{{ tom[item as any]?.notacao }}</b>
                        </template>
                    </span>
                    <span class="linha-verso text-red-900">{{ linha.verse }}</span>
                </template>
            </template>
        </pre>
</template>
<script setup lang="ts">
import { ICifra } from '~~/types/cifra/Cifra'
import campo from '@/assets/CampoHarmonico/CampoHarmonicoComponentData.json'

import { useSplitStore } from '~~/stores/split'
const SplitStore = useSplitStore()

const props = defineProps({
    ponte: {
        type: Array as PropType<ICifra[]>
    },
    tonalidade: {
        type: Number,
        required: true
    }
})


watch(() => props.tonalidade, (value) => {
    console.log(value)
})
const cifra = computed(() => {
    return props.ponte
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