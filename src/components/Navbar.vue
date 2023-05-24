<template>
        <div>
            <nav>
                <router-link class="nav_element nav_element_select" to="/">Home</router-link>
                <router-link  class="nav_element nav_element_select" to="/hub">Creative-Hub</router-link>
            </nav>
        </div>

</template>

<script>
export default {
    name: "Navbar"
}
</script>

<style scoped>

nav{
    display: block;
    height: 5vh;
    -webkit-user-select: none; /* Safari */
    -ms-user-select: none; /* IE 10 and IE 11 */
    user-select: none; /* Standard syntax */
    background: #ffffff;
    width: 100%;
    box-shadow: 0 2px 10px 1px #c5c5c5,
                inset 0 0 20px #e3e3e3;
}
.nav_element{
    text-align: center;
    padding-bottom: 14px;
    padding-top: 13px;
    width: 130px;
    border-right: solid black 1px;
    display: block;
    float: left;
    text-decoration: none;
    color: black;
    font-size: 18px;
}

.nav_element_select:hover{
    background: #ffffff;
    box-shadow: inset 0 0 10px #a9a9a9;
}


</style>