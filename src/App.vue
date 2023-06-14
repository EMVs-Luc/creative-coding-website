<template>
    <router-view id="router"/>
    <Navbar id="navBar"></Navbar>



</template>

<style>

@import url('https://fonts.googleapis.com/css?family=Gruppo');
@import url('https://fonts.googleapis.com/css?family=Staatliches');



#navBar{
    height: 5vh;
    width: 100%;
    position: absolute;
    top: 0;
}
h1{
    font-family: 'Staatliches';
    font-weight: normal;
    font-size: 45px;
}

h2{
  font-family: 'Staatliches';
  font-weight: normal;
  font-size: 35px;
}

h3{
  font-family: 'Staatliches';
  font-weight: normal;
  font-size: 25px;
}

#router{
    font-family: 'Gruppo';
    padding-top: 5vh;
    height: 95%;
    width: 100%;
    overflow: hidden;
}

body{
    margin: 0;
}



</style>
<script setup>
import Navbar from "@/components/Navbar.vue";
import ArtsPreview from "@/components/hub/ArtsPreview.vue";


</script>