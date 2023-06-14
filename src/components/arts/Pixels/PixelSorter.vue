<template>

  <Art :script="script"></Art>
</template>

<script>
import Art from "@/components/arts/Art.vue";

export default {

    name: "PixelSorter",
    components: {Art},
    data(){
        return{

            script: function (p5) {
                let waitNew = false
                let colorPicker;
                let img;

                p5.preload = _=>{
                    console.log("preload")
                    img = p5.loadImage(require('@/assets/pixel_sorter_image.png'))
                    console.log("preload end")
                }

                // NOTE: Set up is here
                p5.setup = _ => {
                    let canvas = p5.createCanvas(p5.windowWidth, (p5.windowHeight/100)*95);
                    canvas.position(0,(p5.windowHeight/100)*5)
                    p5.background(255)
                    p5.pixelDensity(1);
                    p5.noSmooth();
                    colorPicker = p5.createColorPicker('#FFFFFF');
                    colorPicker.position((p5.windowHeight/2)-50, (p5.windowHeight/100)*6);
                }


                // NOTE: Draw is here
                p5.draw = _ => {
                  p5.background(255)
                    p5.image(img,(p5.windowWidth/2)-((p5.windowHeight/100)*85/2),(p5.windowHeight/100)*5,(p5.windowHeight/100)*85,(p5.windowHeight/100)*85)
                    if(waitNew) return

                    //console.log(colorPicker.color().levels[0])
                    //p5.image(img,(p5.windowHeight/100)*2,(p5.windowHeight/100)*5,400,400)

                    img.loadPixels();

                    let changes = 0
                    while (changes <= 1000){
                        let isFinal = true
                            for(let index= 4; index <img.pixels.length; index +=4){
                                let cFirst= p5.color(
                                    img.pixels[index + 0 - 4],
                                    img.pixels[index + 1 - 4],
                                    img.pixels[index + 2 - 4],
                                    img.pixels[index + 3 - 4])
                                let cLast = p5.color(
                                    img.pixels[index + 0],
                                    img.pixels[index + 1],
                                    img.pixels[index + 2],
                                    img.pixels[index + 3])



                                let firstDistance = distanceColor(colorPicker.color(), cFirst)
                                let lastDistance = distanceColor(colorPicker.color(), cLast)

                                if(firstDistance > lastDistance){
                                    for(let colorIndex = 0; colorIndex< cFirst.levels.length-1; colorIndex++){
                                        img.pixels[index + colorIndex] = cFirst.levels[colorIndex]//
                                        img.pixels[index + colorIndex - 4] =cLast.levels[colorIndex]//
                                    }
                                    changes++
                                    isFinal = false
                                    break
                                }
                            }
                            if(isFinal) changes = 1000000;
                    }

                    img.updatePixels();
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