<template>

    <div class="category-div" >
        <category v-for="category in categories" :category="category"></category>
    </div>
</template>

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
