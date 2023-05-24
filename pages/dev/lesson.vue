<template>
    <div class="container flex flex-col p-20 gap-10">

        <h1 class="title">Funções Harmônicas</h1>
        <div class="flex flex-col gap-4 text-sm">
            <h2><strong>Tônica, dominante e subdominante</strong> são termos utilizados na teoria musical para descrever as funções
                harmônicas dos acordes dentro de uma tonalidade específica.
            </h2>
            <div class="text_item">
                <span>1.</span>
                <p><strong>Tônica:</strong> A tônica é o centro tonal de uma tonalidade. É o acorde que dá a sensação de repouso,
                    estabilidade e finalidade. Geralmente é o primeiro grau da escala e é considerado o ponto de partida e
                    de chegada harmônica. Por exemplo, na tonalidade de C maior, o acorde de C é a tônica.
                </p>
            </div>
            <div class="text_item">
                <span>2.</span>
                <p>
                    <strong>Dominante:</strong> A dominante é o acorde que cria tensão e busca resolução para a tônica. É o acorde construído
                    no quinto grau da escala e é considerado o acorde mais importante depois da tônica. Na tonalidade de C
                    maior, o acorde de G é a dominante. A tensão criada pelo acorde de dominante é geralmente resolvida na
                    tônica, criando uma sensação de conclusão.
                </p>
            </div>
            <div class="text_item">
                <span>3.</span>
                <p>
                    <strong>Subdominante:</strong> A subdominante é o acorde que prepara a resolução para a tônica, mas não cria a mesma
                    tensão que a dominante. É o acorde construído no quarto grau da escala. Na tonalidade de C maior, o
                    acorde de F é a subdominante. O acorde de subdominante geralmente antecede o acorde de dominante,
                    preparando o caminho para a resolução na tônica.
                </p>
            </div>
            <h2>
                Essas três funções harmônicas (tônica, dominante e subdominante) são fundamentais na harmonia tonal e são
                amplamente utilizadas na música ocidental. Elas ajudam a criar tensão e resolução, dando uma estrutura e
                direção às progressões de acordes.
            </h2>
        </div>
        <div class="campo_harmonico">
                <div class="campo_harmonico_header mb-4">
                    <span v-for="n in 7" :class="{'tonica': n == 1, 'dominante': n == 4, 'subdominante': n == 5}">{{ n }}°</span>
                </div>
                <div class="campo_harmonico_notas" v-for="(row, index) in campo_harmonico">
                    <template v-for="item in row">
                        <span v-for="(nota, index) in item" :class="{'tonica': index == 0, 'dominante': index == 3, 'subdominante': index == 4}">
                            {{ nota }}
                        </span>
                    </template>
                </div>
                
            </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            campo_harmonico: [
                {
                    "C": ["C", "Dm", "Em", "F", "G", "Am", "Bdim"]
                },
                {
                    "D": ["D", "Em", "F#m", "G", "A", "Bm", "C#dim"]
                },
                {
                    "E": ["E", "F#m", "Gm", "A", "B", "C#m", "D#dim"]
                },
                {
                    "F": ["F", "Gm", "Am", "Bb", "C", "Dm", "Edim"]
                },
                {
                    "G": ["G", "Am", "Bm", "C", "D", "Em", "F#dim"]
                },
                {
                    "A": ["A", "Bm", "C#m", "D", "E", "F#m", "G#dim"]
                },
                {
                    "B": ["B", "C#m", "D#m", "E", "F#", "G#m", "A#dim"]
                }
            ]
        }
    },
}
</script>
<style scoped>
.title {
    @apply font-bold
}
.campo_harmonico {
    @apply flex flex-col w-fit h-80 gap-1
}

.campo_harmonico_header,
.campo_harmonico_notas {
    @apply w-full flex gap-1
}

.campo_harmonico_header span,
.campo_harmonico_notas span {
    @apply w-16 h-10 flex items-center justify-center border
}

.tonica {
    @apply bg-blue-500 font-semibold text-white
}

.dominante {
    @apply bg-red-500 font-semibold text-white
}

.subdominante {
    @apply bg-green-500 font-semibold text-white
}

.text_item {
    @apply flex gap-2
}

</style>