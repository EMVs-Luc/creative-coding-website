<template>

  <Art :script="script"></Art>

</template>

<script>
import Art from "@/components/arts/Art.vue";

export default {
    name: "LightningBolt",
    components: {Art},
    data(){
        return{


            script: function (p5) {

                let deltaMax = 70
                let deltaMin = 5
                let length = 100
                let lastEndPoints = []
                let end = false
                let mousePressed = false
                let waitNew = false
                let amountBranches = 2
                let color={r:0,g:255,b:255}

                // NOTE: Set up is here
                p5.setup = _ => {
                    let canvas = p5.createCanvas(p5.windowWidth, (p5.windowHeight/100)*95);
                    canvas.position(0,(p5.windowHeight/100)*5)
                    p5.background(0)
                    p5.stroke(color.r,color.g,color.b)
                    p5.strokeWeight(5)
                    lastEndPoints.push({x:0.0,y:p5.windowHeight/2})
                }
                // NOTE: Draw is here
                p5.draw = _ => {
                    p5.background(0,0,0,30)
                    if(end) return

                    let thisEndPoints =[]
                    p5.stroke(color.r,color.g,color.b)


                    lastEndPoints.forEach(function (point, index, arr){

                        for(let i = 0; i<amountBranches; i++){
                            if(Math.round(p5.random(1)) === 1){
                                let delta =(p5.random(deltaMin,deltaMax)/180)* 3.14
                                let xToAdd = Math.cos(delta) * length
                                let yToAdd = Math.sin(delta) * length
                                if(Math.round(p5.random(1)) === 1)yToAdd = -yToAdd

                                let pointEnd = {x:point.x + xToAdd,y: point.y + yToAdd}
                                p5.line(point.x,point.y,pointEnd.x,pointEnd.y)
                                thisEndPoints.push(pointEnd)
                            }
                        }
                    })

                    lastEndPoints = thisEndPoints;

                    if(lastEndPoints[0] === undefined || lastEndPoints[0].x > p5.width ){
                        if(mousePressed) end = true
                        else if(!waitNew){
                            waitNew = true
                            doAsyncAwaitThings()
                        }
                    }
                }


                p5.mousePressed = _ => {
                    end = false
                    lastEndPoints = []
                    lastEndPoints.push({x:p5.mouseX,y:p5.mouseY})
                    p5.background(0,0,0,50)
                    mousePressed = true
                }

                async function doAsyncAwaitThings()
                {
                    await sleep(p5.random(100, 2500))
                    let window4 =  p5.windowHeight/4
                    lastEndPoints.push({x:0,y:p5.random(window4,window4*3)})
                    p5.background(0,0,0,50)
                    waitNew = false
                }

                function sleep(millisecondsDuration)
                {
                    return new Promise((resolve) => {
                        setTimeout(resolve, millisecondsDuration);
                    })
                }

            },

            script2: function (p5) {
                var speed = 2;
                var posX = 0;

                // NOTE: Set up is here
                p5.setup = _ => {
                    p5.createCanvas(500, 500);
                    p5.ellipse(p5.width / 2, p5.height / 2, 500, 500);
                }
                // NOTE: Draw is here
                p5.draw = _ => {
                    p5.background(0);
                    const degree = p5.frameCount * 3;
                    const y = p5.sin(p5.radians(degree)) * 50;

                    p5.push();
                    p5.translate(0, p5.height / 2);
                    p5.ellipse(posX, y, 50, 50);
                    p5.pop();
                    posX += speed;

                    if (posX > p5.width || posX < 0) {
                        speed *= -1;
                    }
                }
            }


        }
    }
}
</script>

<style scoped>

</style>