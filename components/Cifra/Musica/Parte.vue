<template>
    <pre class="flex flex-col">
        <template v-for="linha in cifra" :key="linha">
            <div class="flex">
                <b v-for="posicao in parseString(linha.chords)">{{ tom[posicao as any]?.notacao }}</b>
            </div>
            <span :class="`linha-verso ${props.styleProps?.fontWeigth} ${props.styleProps?.textColor}`">{{ linha.verse }}</span>
            <span v-if="linha.divider" class="h-5"></span>
        </template>
    </pre>
</template>
<script setup lang="ts">
import { ICifra, IStyle } from '~~/types/cifra/Cifra'
import campo from '@/assets/CampoHarmonico/campo-harmonico.json'
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

const cifra = computed(() => {
    return props.parte
})
const campoHarmonico = computed(() => {
    return campo
})
const tom = computed(() => {
    return campoHarmonico.value[props.tonalidade].acordes;
})

function parseString(string: string) {
    // Array para armazenar os itens extraídos da string
    const items = [];
    // Variável para armazenar o item atual sendo construído
    let currentItem = "";

    // Loop através de cada caractere na string
    for (let i = 0; i < string.length; i++) {
        //debugger
        // Obtém o caractere atual
        const char = string[i];

        // Verifica se o caractere é um dígito (0-9)
        if (/\d/.test(char)) {
            // Se for um dígito, adiciona ao item atual
            currentItem += char;
        } else if (char === " ") {
            // Se o caractere for um espaço em branco
            if (currentItem !== "") {
                // Se o item atual não estiver vazio, adiciona à lista de itens
                items.push(currentItem);
                // Reseta o item atual para começar a construir um novo
                currentItem = "";
            }

            // Adiciona um espaço em branco à lista de itens
            items.push(" ");
        }
    }

    // Verifica se há um item não vazio pendente no final da string
    if (currentItem !== "") {
        // Adiciona o item final à lista de itens
        items.push(currentItem)
    }

    // Retorna a lista de itens extraídos da string
    return items;
}
</script>
<style scoped>
.linha-verso {
    @apply mb-2;
}

@media (min-width: 320px) {
    pre {
        font-family: 'Roboto', sans-serif;
        font-size: 12px;
        letter-spacing: 1px;
    }

    b {
        width: 0.395rem;
        letter-spacing: 0px;
        @apply text-red-600;
    }
}

@media (min-width: 768px) {
    pre {
        font-family: 'Roboto', sans-serif;
        font-size: 14px;
    }

    b {
        width: 0.450rem;
        letter-spacing: 0px;
    }

}

</style>