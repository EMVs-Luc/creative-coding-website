<template>

  <Art :script="script"></Art>
</template>

<script>
import Art from "@/components/arts/Art.vue";

export default {

    name: "Dithering",
    components: {Art},
    data(){
        return{

            script: function (p5) {
                let img;
                let img_prepare;
                let slider;
                let sliderBefore = 0;

                p5.preload = _=>{
                    console.log("preload")
                    img = p5.loadImage(require('@/assets/dithering_image.png'))
                    img_prepare = p5.loadImage(require('@/assets/dithering_image.png'))
                    console.log("preload end")
                }

                // NOTE: Set up is here
                p5.setup = _ => {
                    let canvas = p5.createCanvas(p5.windowWidth, (p5.windowHeight/100)*95);
                    canvas.position(0,(p5.windowHeight/100)*5)
                    p5.pixelDensity(1);
                    p5.background(0);


                    slider = p5.createSlider(0, 20, 2);
                    slider.position(20, (p5.windowWidth/100)*6);
                    slider.style('width', '80px');

                }


                // NOTE: Draw is here
                p5.draw = _ => {
                    if(sliderBefore === slider.value()){
                        return
                    }

                    sliderBefore = slider.value()
                    img.loadPixels();
                    img_prepare.loadPixels();

                    for(let y = 0; y < img.height; y++) {
                        for (let x = 0; x < img.width; x++) {
                            let randNumber = p5.floor(p5.random(sliderBefore))
                            if(randNumber !== 0) {
                                let endColor = p5.color(255,255,255)
                                img_prepare.set(x,y ,endColor);
                                continue
                            }

                            let basColor = img.get(x,y);
                            let endColor = basColor

                            let blackWhiteLevel = (basColor[0] +basColor[1] +basColor[2])/3
                            if(blackWhiteLevel > 125){
                                endColor[0] = 0;
                                endColor[1] = 0;
                                endColor[2] = 0;
                            }else{
                                endColor[0] = 255;
                                endColor[1] = 255;
                                endColor[2] = 255;
                            }
                            img_prepare.set(x,y ,endColor);
                        }
                    }

                    img_prepare.updatePixels();
                    p5.background(0)
                    p5.image(img_prepare,(p5.windowWidth/100)*50-((p5.windowHeight/100)*40),(p5.windowHeight/100)*10,(p5.windowHeight/100)*80,(p5.windowHeight/100)*80)



                }


            },


        }
    }
}
</script>

<style scoped>

</style>