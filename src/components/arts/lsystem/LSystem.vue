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

                let old_input =""
                let delta = 90

                let startpoint = [p5.windowWidth/2,p5.windowHeight/2]
                let startpoint_old = [0,0]
                let slider_iterables

                let input_start


                let rules_input

                //toDo angle inn rad

                let rules = {
                    "f": function (){
                        activeCourser[0] = getLocationEndLine(activeCourser[0][0],activeCourser[0][1],lenght,activeCourser[1])
                    },
                    "+": function (){
                        activeCourser[1] = activeCourser[1] - delta
                    },
                    "-": function (){
                        activeCourser[1] = activeCourser[1] + delta
                    },
                    "F": function (){
                        activeCourser[0] = drawLine(activeCourser[0][0],activeCourser[0][1],lenght,activeCourser[1])
                    },
                    "[": function (){
                        savedCourser.push(activeCourser)
                    },
                    "]": function (){
                        activeCourser = savedCourser.pop()
                    }
                }

                let oldInput = ""

                let deltaInput

                let lenght = 20;

                let savedCourser = []
                let activeCourser = [[0,0], 0]


                // NOTE: Set up is here
                p5.setup = _ => {
                    let canvas = p5.createCanvas(p5.windowWidth, (p5.windowHeight/100)*95);
                    canvas.position(0,(p5.windowHeight/100)*5)
                    p5.pixelDensity(1);
                    p5.background(255);

                    slider_iterables = p5.createSlider(2,10,0);
                    slider_iterables.position(20,100);
                    slider_iterables.style('width', '300px');

                    rules_input = p5.createElement('textarea');
                    rules_input.elt.value = "F=F+F-F-F+F"
                    rules_input.position(610,100)

                    input_start = p5.createInput("F")
                    input_start.position(350,100)
                    input_start.size(100);

                    deltaInput= p5.createInput("90")
                    deltaInput.position(470,100)
                    deltaInput.size(100);

                    //startpoint = p5.Draggable(150, 100, 50, 50);
                }


                p5.mousePressed= _=>{
                  if(p5.mouseY > 100)
                  startpoint = [p5.mouseX,p5.mouseY]
                }



                let iterables_old = -1;
                // NOTE: Draw is here
                p5.draw = _ => {

                   delta = Number(deltaInput.value())
                  let input = input_start.value();
                  savedCourser = []
                    //Loc, angle
                  activeCourser =  [startpoint, 0]


                  if( input === oldInput && iterables_old === slider_iterables.value() && startpoint_old === startpoint) return;
                  p5.background(255)
                  oldInput = input;
                  iterables_old = slider_iterables.value()
                  startpoint_old = startpoint

                  for(let i = 0; i<iterables_old;i++){

                    for (const rules of rules_input.elt.value.split("\n")) {
                      var paar = rules.split("=")
                      var regex = new RegExp(paar[0], 'g');
                      input = input.replace(regex, paar[1])

                    }

                  }

                  for (let charIndex in [...input]){
                    let char = input[charIndex]
                    for (const [key, value] of Object.entries(rules)) {
                      if(key === char)value()
                    }
                  }


                }

                function drawLine(x,y,lenght, delta){
                  let end = getLocationEndLine(x,y,lenght,delta)
                  p5.line(x,y, end[0], end[1])
                  return end
                }

                function getLocationEndLine(x,y,lenght, delta){
                  delta = (p5.PI/180)*delta
                  return [x + (p5.cos(delta) * lenght), y + (p5.sin(delta) * lenght)]
                }


            },


        }
    }
}
</script>

<style scoped>

</style>