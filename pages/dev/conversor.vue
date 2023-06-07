<template>
    <div class="edit_container">
        <div class="song_preview">
            <h1>{{ actualSong }}</h1>
            <Song :song="song" :tonalidade="tonalidade" />
        </div>
        <div class="song_preview">
            <h1>{{ actualSong + 1 }}</h1>
            <SongNewFormat :song="newSong" :tonalidade="tonalidade" />
        </div>
        <div class="edit_tools">
            <div class="w-full max-w-[940px] ">
                <campo-harmonico @tune="getTuneEmitted" />
            </div>
            <div class="edit_actions">
                <nuxt-link to="/">
                    <button class="edit_btn_actions bg-sky-700">
                        <span class="material-symbols-outlined">
                            home
                        </span>
                    </button>
                </nuxt-link>
                <div class="flex gap-4">
                    <button class="edit_btn_actions bg-green-500" @click="converter">
                        <span class="material-symbols-outlined">
                            check_circle
                        </span></button>
                    <button class="edit_btn_actions bg-yellow-500" @click="copyAndSave">
                        <span class="material-symbols-outlined">
                            content_copy
                        </span>
                        <span class="copied_message" ref="copied">Copiado!</span>
                    </button>
                </div>
            </div>
            <div class="flex w-full">
                <span v-for="item in teste" class="w-[0.450rem]">{{ item }}</span>
            </div>
        </div>
    </div>
</template>
<script>
import campoJSON from '../../assets/CampoHarmonico/CampoHarmonicoComponentData.json'
import cifra from '../../assets/Cifras/hinos.json'
import cifraParametro from '../../assets/hinos.json'
export default {
    data() {
        return {
            song: [],
            newSong: [],
            actualSong: 0,
            tonalidade: 0,
            teste: ""
        };
    },
    computed: {
        campo() {
            return campoJSON;
        },
        tom() {
            return this.campo[this.tonalidade];
        },
        cifra() {
            const items = cifra.filter((item) => item.cifra.length > 0)
            return items
        },
        cifraParametro() {
            const items = cifraParametro.filter((item) => item.cifra.length > 0)
            return items
        }
    },

    methods: {
        getTuneEmitted(value) {
            this.tonalidade = value
        },


        copyAndSave() {
            navigator.clipboard.writeText(JSON.stringify(this.song))
                .then(() => {
                    this.$refs.copied.style.display = 'block'
                    setTimeout(() => {
                        this.$refs.copied.style.display = 'none'
                    }, 500);

                })
                .catch((error) => {
                    console.error('Failed to copy object:', error);
                });
        },

        ArrayEmString(arr) {
            let result = '';
            for (const item of arr) {
                if (item === '') {
                    result += ' '; // Adiciona espaço em branco
                } else {
                    result += item;
                }
            }
            return result;
        },
        ChordsEmString(arr) {
            console.log(arr)
            for (const objeto of arr) {
                if (Array.isArray(objeto.chords)) {
                    objeto.chords = this.ArrayEmString(objeto.chords);
                    return objeto.chords
                }
            }
        },
        converter() {
            console.log(this.ChordsEmString(this.cifra[this.actualSong].cifra))
        }
    },

    created() {
        const cifraIndex = 0
        this.actualSong = cifraIndex
        this.song = this.cifraParametro[this.actualSong].cifra
        this.newSong = this.cifra[this.actualSong].cifra
        //console.log(this.newSong)
    }

};
</script>
<style lang="css" scoped>
.edit_container {

    @apply flex gap-4 p-10 items-start
}

.edit_tools {
    @apply flex flex-col gap-10 w-2/5 justify-center items-center
}

.edit_actions {
    @apply flex justify-between gap-4 w-full max-w-[940px]
}

.edit_btn_actions {
    @apply p-2 text-white rounded-full flex justify-center items-center shadow-md relative;
    transition: all .5s ease;

}


.song_preview {
    @apply flex flex-col bg-gray-100 p-4 rounded-md;
    max-height: 620px;
    min-width: 367px;
    overflow-y: auto;
    overflow-x: hidden;
}

.copied_message {
    display: none;
    position: absolute;
    top: -30px;
    color: black;
    transition: all .3s ease;
}
</style>