<template>
    <div class=" shadow-lg flex flex-col bg-white rounded-lg ">

        <div class="option" v-for="categoria in categories" :key="categoria" type="checkbox" :value="categoria"
            :name="categoria" @click="selecionarCategoria(categoria)">
            <span class="material-symbols-outlined">
                {{ categoriasSelecionadas.includes(categoria) ? 'radio_button_checked' : 'radio_button_unchecked' }}
            </span>
            {{ categoria }}
        </div>

    </div>
</template>
  
<script>
export default {
    emits: ['selected-categories'],
    props: {
        categories: {
            type: Array,
            required: true
        }
    },
    data() {
        return {
            categoriasSelecionadas: []
        };
    },
    methods: {
        selecionarCategoria(categoria) {
            if (!this.categoriasSelecionadas.includes(categoria)) {
                this.categoriasSelecionadas.push(categoria)
            }
            else {
                this.categoriasSelecionadas = this.categoriasSelecionadas.filter(item => item !== categoria)
            }
            this.$emit('selected-categories', this.categoriasSelecionadas)

        }
    }
};
</script>
<style scoped>
.option {
    @apply cursor-pointer flex items-center gap-2 text-slate-700 p-2;
    transition: all ease .3s;
}

/* .option:nth-child(1) {
    border-radius: 0.5rem 0.5rem 0 0;
}

.option:last-child {
    border-radius: 0 0 0.5rem 0.5rem;
}

.option:hover {
    @apply bg-slate-200
} */
</style>