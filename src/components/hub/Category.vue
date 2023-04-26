<template>
  <div class="category">
      <h2 class="title" @click="onClick()">{{category.title}}</h2>
      <div class="art-List" v-if='open' @click="onClick()">
          <ArtsPreview  v-for="art in artsFilter" :art='art'></ArtsPreview>
      </div>
  </div>

</template>

<script>
import {useArts} from "@/stores/Arts";
import {mapState} from "pinia";
import ArtsPreview from "@/components/hub/ArtsPreview.vue";

export default {
    name: "Category",
    components: {ArtsPreview},
    data() {
        return {
            open:false
        }
    },
    props:{
        category:{
            require:true
        }
    },
    computed:{
        ...mapState(useArts, ['arts']),
        artsFilter(){
            return this.arts.filter(art => art.categoryID === this.category.id)
        }
    },
    methods:{
        onClick(){
            this.open = !this.open
        }
    }

}

/*

 */
</script>

<style scoped>
h2 {
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;
}
</style>