<template>

  <Art :script="script"></Art>
</template>

<script>
import Art from "@/components/arts/Art.vue";

export default {

    name: "MergeImages",
    components: {Art},
    data(){
        return{

            script: function (p5) {
                let img1;
                let img2;
                let img_prepare;
                let slider;
                let sliderBefore = 0;

                p5.preload = _=>{
                    console.log("preload")
                    img1 = p5.loadImage(require('@/assets/merging_1.png'))
                    img2 = p5.loadImage(require('@/assets/merging_2.png'))
                    img_prepare = p5.loadImage(require('@/assets/merging_1.png'))
                    console.log("preload end")
                }

                // NOTE: Set up is here
                p5.setup = _ => {
                    p5.createCanvas(p5.windowWidth, (p5.windowHeight/100)*95);
                    p5.pixelDensity(1);
                    p5.background(0);


                    slider = p5.createSlider(0, 100, 50);
                    slider.position(20, (p5.windowWidth/100)*6);
                    slider.style('width', '80px');

                }


                // NOTE: Draw is here
                p5.draw = _ => {
                    if(sliderBefore === slider.value()){
                        return
                    }

                    sliderBefore = slider.value()

                    img1.loadPixels();
                    img2.loadPixels();
                    img_prepare.loadPixels();

                    for(let y = 0; y < img1.height; y++) {
                        for (let x = 0; x < img2.width; x++) {

                           let colorImg1 = img1.get(x,y)
                            let colorImg2 = img2.get(x,y)

                            let colorEnd = img_prepare.get(x,y)

                            colorEnd[0] = p5.floor((colorImg1[0]*(100-slider.value()) + colorImg2[0]*slider.value()) /100)
                            colorEnd[1] = p5.floor((colorImg1[1]*(100-slider.value()) + colorImg2[1]*slider.value()) /100)
                            colorEnd[2] = p5.floor((colorImg1[2]*(100-slider.value()) + colorImg2[2]*slider.value()) /100)
                            //console.log(colorEnd)

                            img_prepare.set(x,y, colorEnd)
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