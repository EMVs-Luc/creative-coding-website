<template>
</template>

<script>
export default {
    name: "Art",
    data(){
        return{
            art:null
        }
    },
    props:{
      script:{
          require:true
      }
    },
    mounted() {
        const P5 = require('p5');
        this.art = new P5(this.script)
    },
    beforeUnmount() {
      this.art.remove()
    },
    computed:{
    }
}
</script>

<style scoped>

div{
    padding-top: 5vh;
    width: 100%;
    height: 100%;
}

body{
    overflow: hidden;
}

</style>