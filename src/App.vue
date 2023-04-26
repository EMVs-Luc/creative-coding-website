<template>
    <Navbar id="navBar"></Navbar>
    <router-view id="router"/>



</template>

<style>

#navBar{
    height: 10%;
    width: 100%;
}

#router{
    height: 90%;
    width: 100%;
    overflow: hidden;
}

body{
    margin: 0;
    overflow: hidden;
}

</style>
<script setup>
import Navbar from "@/components/Navbar.vue";
import ArtsPreview from "@/components/hub/ArtsPreview.vue";


</script>