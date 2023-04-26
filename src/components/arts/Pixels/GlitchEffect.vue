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
                let glichColor = 1;
                let img;

                p5.preload = _=>{
                    console.log("preload")
                    img = p5.loadImage(require('@/assets/glicht_image.png'))
                    console.log("preload end")
                }

                // NOTE: Set up is here
                p5.setup = _ => {
                    p5.background(0)
                    p5.createCanvas(p5.windowWidth, (p5.windowHeight/100)*95);
                    p5.pixelDensity(1);

                    img.loadPixels();

                    for(let y = 0; y < img.height;y++){
                        for(let x = 0; x <img.width; x++){



                        }
                    }

                    img.updatePixels();
                }


                // NOTE: Draw is here
                p5.draw = _ => {
                    p5.background(0)
                    p5.image(img,(p5.windowHeight/100)*2,(p5.windowHeight/100)*5,(p5.windowWidth/100)*85,(p5.windowHeight/100)*85)


                }

                function distanceColor(color1,color2){
                    let distance = 0;
                    for (let colorIndex = 0; colorIndex< color1.levels.length; colorIndex++){
                        distance += Math.abs(color1.levels[colorIndex]-color2.levels[colorIndex])
                    }
                    return distance
                }

            },


        }
    }
}
</script>

<style scoped>

</style>