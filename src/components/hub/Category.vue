<template>
  <div class="category" @click="onClick()">
      <h2 class="title" >{{category.title}}</h2>
      <div class="art-List" v-if='open' @click="onClick()">
          <ArtsPreview  v-for="art in artsFilter" :art='art'></ArtsPreview>
      </div>
      <p v-if='!open'> See the things behind</p>
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
p{
    padding-left: 20px;
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;
}
</style>