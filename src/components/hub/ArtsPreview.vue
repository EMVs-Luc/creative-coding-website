<template>
    <router-link :to="art.link" class="link">
        <div class="block">
            <h3>{{art.title}}</h3>
            <img  v-if="art.previewImage !== ''" :src="require('@/assets/preview_images/' +art.previewImage) ">
        </div>
    </router-link>
</template>

<script>
export default {
    name: "ArtsPreview",
    props:{
        art:{
            require:true //
        }
    }
}
</script>


<style scoped>

.block{
    border: #cccccc 1px solid;
    width: 300px;
    height: 370px;
    box-shadow: inset 0 0 10px #a9a9a9;
}

.block:hover{
    box-shadow: inset 0 0 0, 0 0 20px #a9a9a9;
}

.link{
    display: block;
    margin-right: 50px;
    float: left;
}

h3,h3:link,h3:hover,h3:active,h3:visited{
    text-decoration: none;
    color: black;
    text-align: center;
    font-size: 22px;
}
a{
    text-decoration: none;
}


img{
    margin-top: 5px;
    margin-left: 50px;
    width: 200px;
    height: 200px;
    border: #9f9f9f solid 2px;
}

</style>