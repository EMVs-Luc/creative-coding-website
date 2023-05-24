<template>
    <div class="body">
        <h1>Creative Hub</h1>
        <div class="category-div" >
            <div v-for="category in categories" class="category"><category :category="category" ></category></div>
        </div>
    </div>
</template>

<style scoped>
    .body{
        padding-left: 50px;
        margin-top: 10px;
    }

    .category-div{
        margin-top: -35px;
        padding-left: 35px;
    }
    .category{
        padding-top: 10px;
        clear: both;
    }
</style>

<script>

import ArtsPreview from "@/components/hub/ArtsPreview.vue";
import Category from "@/components/hub/Category.vue";
import {useCategories} from "@/stores/Categories";
import {mapState} from "pinia";

export default {
  name: 'CreativeHubView',
  components: {
      Category,
      ArtsPreview
  },
    data(){
      return{}
    },
    computed:{
        ...mapState(useCategories, ['categories']),
    }
}
</script>
