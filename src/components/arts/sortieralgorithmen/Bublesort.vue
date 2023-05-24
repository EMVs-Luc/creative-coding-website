<template>
  <Art :script="script"></Art>
</template>

<script>
import Art from "@/components/arts/Art.vue";

export default {

    //Big o
    // stable or unstable

    name: "Bublesort",
    components: {Art},
    data(){
        return{

            script: function (p5) {


                let sliderAmount;
                let sliderSpeed;

                let numberlessChange = [];
                let numberList = [];


                let buttonNewGenerate ;

                // NOTE: Set up is here
                p5.setup = _ => {
                    let canvas = p5.createCanvas(p5.windowWidth, (p5.windowHeight/100)*95);
                    canvas.position(0,(p5.windowHeight/100)*5)
                    sliderAmount = p5.createSlider(2, 83, 10);
                    sliderAmount.style('width', '400px');
                    sliderAmount.position(p5.windowWidth/2 -200, 500)
                    sliderAmount.input(updateNumbers)


                    sliderSpeed = p5.createSlider(1, 1000, 100);
                    sliderSpeed.style('width', '400px');
                    sliderSpeed.position(p5.windowWidth/2 -200, 600)
                    sliderSpeed.input(updateNumbers)


                    buttonNewGenerate = p5.createButton("MIX")
                    buttonNewGenerate.position(p5.windowWidth/2 -200, 650)
                    buttonNewGenerate.mousePressed(function (){numberlessChange = []; numberList=[]; updateNumbers();})

                    p5.pixelDensity(1);
                    p5.background(255);
                    updateNumbers();
                    sortOneStep()
                }

                function updateNumbers(){

                    if(numberList.length < sliderAmount.value()){
                        let length_begin = numberList.length;
                        while (numberList.length < sliderAmount.value()){
                            let newNumber = Math.floor(p5.random(length_begin, sliderAmount.value()));
                            if(!numberList.includes(newNumber)) numberList.push(newNumber)
                        }
                        return
                    }
                    numberList = numberList .filter(function (num){return num < sliderAmount.value()})

                }

                // NOTE: Draw is here
                let maxSize = 50;
                let distance = 10;
                let horizontal = 30;
                let font_size = 30
                p5.draw = _ => {

                    p5.background(255);
                    p5.fill(0)
                    p5.textSize(25)
                    p5.text("Speed",p5.windowWidth/2 -200, 530)
                    p5.text("Amount to sort",p5.windowWidth/2 -200, 430)

                    sliderAmount.position(p5.windowWidth/2 -200, 500)
                    buttonNewGenerate.position(p5.windowWidth/2 -200, 650)
                    sliderSpeed.position(p5.windowWidth/2 -200, 600)


                    let colorSteps = p5.floor((255*2) / numberList.length)

                    let maxpearLine = p5.floor((p5.windowWidth-100)/(maxSize+distance))
                    let linecount = p5.ceil(numberList.length/maxpearLine)


                    p5.textSize(font_size)
                    for(let i = 0; i < numberList.length; i++){

                        let number = numberList[i];

                        let green = number*colorSteps - 255
                        if(green < 0) green = 0

                        let blue = number*colorSteps
                        if(green !== 0) blue = 255 - green


                        let red = 255
                        if(green !== 0) red =  0;
                        else if(red !== 0) red =  255 -blue;

                        let color = p5.color(red,green,blue)


                        p5.fill(color)

                        let x_max =  (maxpearLine-1) * (distance + maxSize)

                        if(p5.ceil((i+1)/maxpearLine) === linecount) x_max = (numberList.length%maxpearLine-1) * (distance + maxSize)

                        let x_raw =  (i%maxpearLine) * (distance + maxSize)
                        let x =  p5.windowWidth/2 -x_max/2 + x_raw

                        if(numberlessChange.includes(number)){
                            p5.strokeWeight(5)
                            p5.stroke(255, 204, 0);
                        }

                        p5.rect(x,100 + (p5.floor(i/maxpearLine) * (horizontal + maxSize)),maxSize,maxSize)


                        p5.strokeWeight(1)
                        p5.stroke(0);
                        if(red+green+blue > 190)p5.fill(0)
                        else p5.fill(255)
                        p5.text(number,x + ((50/2) - font_size/4)/(""+number).length, 100 + (p5.floor(i/maxpearLine) * (horizontal + maxSize) + (50/2) + font_size/3))

                    }

                }


                async function sortOneStep(){
                    await sleep(1000 - sliderSpeed.value())
                    numberlessChange = []
                    for(let i = 0; i< numberList.length-1;i++){
                        let numberA = numberList[i]
                        let numberB = numberList[i+1]

                        if(numberA<numberB) continue;
                        numberlessChange = [numberA,numberB]
                        numberList[i] = numberB;
                        numberList[i+1] = numberA;

                        break
                    }

                    sortOneStep();
                }

                function sleep(millisecondsDuration)
                {
                    return new Promise((resolve) => {
                        setTimeout(resolve, millisecondsDuration);
                    })
                }



            },
        }
    }
}
</script>

<style scoped>

</style>