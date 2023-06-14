<template>

  <Art :script="script"></Art>
</template>

<script>
import Art from "@/components/arts/Art.vue";

export default {

    name: "ResizeImage",
    components: {Art},
    data(){
        return{

            script: function (p5) {
                let img;

                p5.preload = _=>{
                    console.log("preload")
                    img = p5.loadImage(require('@/assets/image_resize.png'))
                    console.log("preload end")
                }

                // NOTE: Set up is here
                p5.setup = _ => {
                    let canvas = p5.createCanvas(p5.windowWidth, (p5.windowHeight/100)*95);
                    canvas.position(0,(p5.windowHeight/100)*5)
                    p5.pixelDensity(1);
                    p5.background(0);

                }


                // NOTE: Draw is here
                p5.draw = _ => {
                  p5.background(0);
                  p5.image(img,0,0)
                }

                p5.mousePressed = _ =>{
                  img.resize(p5.mouseX,p5.mouseY)
                }


            },


        }
    }
}
</script>

<style scoped>

</style>