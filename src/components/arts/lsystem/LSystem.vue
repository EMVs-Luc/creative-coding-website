<template>

  <Art :script="script"></Art>
</template>

<script>
import Art from "@/components/arts/Art.vue";

export default {

    name: "LSystem",
    components: {Art},
    data(){
        return{

            script: function (p5) {


                let oldInput = ""
                let delta = 30
                let lenght = 10;

                //toDo angle inn rad

                let rules = {
                    "f": function (){
                        activeCourser[0] = getLocationEndLine(activeCourser[0][0],activeCourser[0][1],lenght,activeCourser[1])
                    },
                    "+": function (){
                        activeCourser[1] = activeCourser[1] + delta
                    },
                    "-": function (){
                        activeCourser[1] = activeCourser[1] - delta
                    },
                    "F": function (){
                        drawLine(activeCourser[0][0],activeCourser[0][1],lenght,activeCourser[1])
                        activeCourser[0] = getLocationEndLine(activeCourser[0][0],activeCourser[0][1],lenght,activeCourser[1])
                    },
                    "[": function (){
                        savedCourser.push(activeCourser)
                    },
                    "]": function (){
                        activeCourser = savedCourser.pop()
                    }
                }


                let savedCourser = []
                let activeCourser = [[200,200], [0]]


                // NOTE: Set up is here
                p5.setup = _ => {
                    p5.createCanvas(p5.windowWidth, (p5.windowHeight/100)*95);
                    p5.pixelDensity(1);
                    p5.background(255);

                }


                // NOTE: Draw is here
                p5.draw = _ => {
                  let input = "";
                  savedCourser = []
                    //Loc, angle
                  activeCourser = [[200,200], [0]]


                  if( input === oldInput) return;
                  oldInput = input;


                  for (let char in [...input]){

                  }




                }

                function drawLine(x,y,lenght, delta){
                    p5.line(x,y, x + (p5.cos(delta) * lenght), y + (p5.sin(delta) * lenght))
                }

                function getLocationEndLine(x,y,lenght, delta){
                    return [x + (p5.cos(delta) * lenght), y + (p5.sin(delta) * lenght)]
                }


            },


        }
    }
}
</script>

<style scoped>

</style>