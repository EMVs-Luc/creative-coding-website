<template>

  <Art :script="script"></Art>
</template>

<script>
import Art from "@/components/arts/Art.vue";

export default {

    name: "GlitchEffect",
    components: {Art},
    data(){
        return{

            script: function (p5) {
                let glitchColorDisplacement = 10;
                let glitchDisplacement = 5;
                let glitchStep = 20;
                let img;

                p5.preload = _=>{
                    console.log("preload")
                    img = p5.loadImage(require('@/assets/glicht_imagev2.png'))
                    console.log("img")
                    console.log("preload end")
                }

                // NOTE: Set up is here
                p5.setup = _ => {
                    let canvas = p5.createCanvas(p5.windowWidth, (p5.windowHeight/100)*95);
                    canvas.position(0,(p5.windowHeight/100)*5)
                    p5.pixelDensity(1);
                    p5.background(0);

                    img.loadPixels();


                    console.log("start");
                    for(let y = 0; y < img.height; y++){

                        if(p5.floor(y/glitchStep)%2){
                            continue
                        }

                        for(let x = 0; x < img.width; x++){
                            let color = img.get(x,y)
                            if(color[0] === 0 &&color[1] === 0&& color[2] === 0) continue

                            for(let glitch = 1; glitch<=glitchColorDisplacement; glitch++){
                                if(x-glitch >= 0){
                                    let glitchColor = img.get(x-glitch,y)

                                    let newColor = glitchColor[2]+ (color[2]/(glitch/2));
                                    if(newColor>255) newColor = 255;

                                    glitchColor[2] = newColor
                                    img.set(x-glitch,y, glitchColor)
                                }
                                if(x+glitch < img.width){
                                    let glitchColor = img.get(x+glitch,y)

                                    let newColor = glitchColor[0]+ (color[0]/(glitch/2))

                                    if(newColor>255) newColor = 255;

                                    glitchColor[0] = newColor
                                    img.set(x+glitch,y, glitchColor)
                                }
                            }


                        }
                    }

                    img.updatePixels();

                    for(let y = 0; y < img.height; y++){

                        if(p5.floor(y/glitchStep)%2){
                            continue
                        }

                        for(let x = 0; x < img.width; x++){
                            let color = img.get(x,y)

                            for(let glitch = 1; glitch<=glitchDisplacement; glitch++){
                                if(x-glitch >= 0) img.set(x-glitch,y, color)

                            }
                        }
                    }

                    console.log("end");

                    img.updatePixels();
                    p5.image(img,(p5.windowHeight/100)*2,(p5.windowHeight/100)*5,(p5.windowWidth/100)*85,(p5.windowHeight/100)*85)
                }


                // NOTE: Draw is here
                /*p5.draw = _ => {
                    p5.background(0)
                    p5.image(img,(p5.windowHeight/100)*2,(p5.windowHeight/100)*5,(p5.windowWidth/100)*85,(p5.windowHeight/100)*85)


                }*/


            },


        }
    }
}
</script>

<style scoped>

</style>