<template>
    <router-link :to="art.link">{{art.title}}</router-link> |
</template>

<script>
export default {
    name: "ArtsPreview",
    props:{
        art:{
            require:true
        }
    }
}
</script>

<style scoped>

</style>