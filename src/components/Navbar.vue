<template>
        <div>
            <nav>
                <router-link to="/">Home</router-link> |
                <router-link to="/hub">Creative-Hub</router-link>
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
}


</style>