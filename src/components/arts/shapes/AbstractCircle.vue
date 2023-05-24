<template>
  <Art :script="script"></Art>
</template>

<script>
import Art from "@/components/arts/Art.vue";

export default {

    name: "AbstractCircle",
    components: {Art},
    data(){
        return{

            script: function (p5) {
                let circles = []
                let max_radius = 100
                let min_radius = 2


                // NOTE: Set up is here
                p5.setup = _ => {
                    let canvas = p5.createCanvas(p5.windowWidth, (p5.windowHeight/100)*95);
                    canvas.position(0,(p5.windowHeight/100)*5)
                    p5.pixelDensity(1);
                    p5.background(255);

                }


                // NOTE: Draw is here
                p5.draw = _ => {
                    let random_point_x = p5.random(0, p5.windowWidth)
                    let random_point_y = p5.random(0, (p5.windowHeight/100)*95);

                    let circleSmallestDistance = [[0,0],[1]]
                    let first = true;
                    for(let circle in circles){
                        circle = circles[circle]
                        if(first){
                            circleSmallestDistance = circle;
                            first = false
                            continue
                        }
                        if(p5.dist(random_point_x,random_point_y, circleSmallestDistance[0][0],circleSmallestDistance[0][1]) >
                            p5.dist(random_point_x,random_point_y, circle[0][0],circle[0][1])){
                            circleSmallestDistance = circle
                        }
                    }



                    if(first){
                        circles.push([[random_point_x,random_point_y],[max_radius]])
                        console.log(circles)
                        p5.circle(random_point_x,random_point_y, max_radius*2)
                        return
                    }
                    let distance = p5.dist(random_point_x,random_point_y, circleSmallestDistance[0][0],circleSmallestDistance[0][1])

                    console.log(distance)

                    if(distance - circleSmallestDistance[1] >= max_radius ){
                        circles.push([[random_point_x,random_point_y],[max_radius]])
                        p5.circle(random_point_x,random_point_y, max_radius*2)
                        return
                    }

                    let radius = distance - circleSmallestDistance[1]
                    if(radius < min_radius) return;
                    
                    circles.push([[random_point_x,random_point_y],[radius]])
                    p5.circle(random_point_x,random_point_y, radius*2)





                }


            },


        }
    }
}
</script>

<style scoped>

</style>