<template>
     <Song :song="item"></Song>
</template>
<script>
export default {
     data() {
          return {
               acordes: ["C", "Dm", "Em", "F", "E", "Am", "Bdim"],
               item: [
                    {
                         chords: "C         G    Am",
                         verse: "Vamos adorar a Deus,"
                    },
                    {
                         chords: "F        C      Dm  G",
                         verse: "Vamos adorar a Deus"
                    },
                    {
                         chords: "C       G         Am",
                         verse: "Vamos exaltar seu Nome"
                    },
                    {
                         chords: "Dm       G      C",
                         verse: "Vamos adorar a Deus"
                    },
               ],
               currentKey: 0,
          };

     },
}
</script>
<style lang="">
     
</style>