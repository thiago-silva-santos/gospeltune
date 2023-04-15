<template>
    <div class="option_list">

        <div class="option" v-for="categoria in categories" :key="categoria" type="checkbox" :value="categoria"
            :name="categoria" @click="selecionarCategoria(categoria)">
            <span :class="['material-symbols-outlined text-black', {'text-red-700' : categoriasSelecionadas.includes(categoria)} ]" >
                {{ categoriasSelecionadas.includes(categoria) ? 'do_not_disturb_on' : 'add_circle' }}
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
.option_list {
    @apply shadow-lg flex flex-col bg-white rounded-lg w-52;
}
.option {
    @apply cursor-pointer flex items-center gap-4 text-slate-700 p-2;
    transition: all ease .3s;
}

</style>