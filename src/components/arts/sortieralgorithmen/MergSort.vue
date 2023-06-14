<template>
  <Art :script="script"></Art>
</template>

<script>
import Art from "@/components/arts/Art.vue";

export default {

    //Big o
    // stable or unstable

    name: "Quicksort",
    components: {Art},
    data(){
        return{

            script: function (p5) {


                let sliderAmount;
                let sliderSpeed;


                let numberListLayers = []
                let buttonNewGenerate ;

                let merage = false;



                // NOTE: Set up is here
                p5.setup = _ => {
                    let canvas = p5.createCanvas(p5.windowWidth, (p5.windowHeight/100)*95);
                    canvas.position(0,(p5.windowHeight/100)*5)
                    sliderAmount = p5.createSlider(2, 18, 10);
                    sliderAmount.style('width', '100px');
                    sliderAmount.position(50, p5.windowHeight - 220)


                    sliderSpeed = p5.createSlider(1, 1000, 100);
                    sliderSpeed.style('width', '100px');
                    sliderSpeed.position(50, p5.windowHeight - 140)


                    buttonNewGenerate = p5.createButton("MIX")
                    buttonNewGenerate.position(50, p5.windowHeight - 100)
                    buttonNewGenerate.mousePressed(function (){numberListLayers = []; merage = false; updateNumbers();})

                    p5.pixelDensity(1);
                    p5.background(255);
                    updateNumbers();
                    sortOneStep()
                }

                function updateNumbers(){

                    let numberList = []
                    while (numberList.length < sliderAmount.value()){
                        let newNumber = Math.floor(p5.random(0, sliderAmount.value()));
                        if(!numberList.includes(newNumber)) numberList.push(newNumber)
                    }
                    numberListLayers =[[numberList]];
                }

                // NOTE: Draw is here
                let maxSize = 50;
                let distance = 10;

                let font_size = 30
                let yDisMin = 90;


                let xPackedDistance = 40;

                p5.draw = _ => {

                    p5.background(255);
                    p5.fill(0)
                    p5.textSize(20)
                    p5.text("Speed",50, p5.windowHeight - 205)
                    p5.text("Amount to sort",50, p5.windowHeight - 285)



                    p5.textSize(font_size)

                    let colorSteps = p5.floor((255*2) / numberListLayers[0][0].length)
                    for(let indexLayers = 0; indexLayers < numberListLayers.length; indexLayers++){

                        let numberListPacked = numberListLayers[indexLayers];
                        let amountBlocks = 0
                        numberListPacked.forEach(value => amountBlocks+= value.length)
                        let layerSize = maxSize* amountBlocks + distance*amountBlocks-1 + numberListPacked.length*xPackedDistance;

                        let countTile = 0

                        for(let iPacked = 0; iPacked < numberListPacked.length; iPacked++){
                            let numberList = numberListPacked[iPacked];


                             for(let i = 0; i < numberList.length; i++){

                                 countTile++

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

                                  let x =  p5.windowWidth/2 -layerSize/2 + countTile*maxSize + (countTile-1)*distance + xPackedDistance*iPacked
                                  let y = 30  + yDisMin *indexLayers;

                                  p5.rect(x,y ,maxSize,maxSize)

                                  p5.strokeWeight(1)
                                  p5.stroke(0);
                                  if(red+green+blue > 190)p5.fill(0)
                                  else p5.fill(255)
                                  p5.text(number,x + ((50/2) - font_size/4)/(""+number).length, y  + (50/2) + font_size/3)

                            }
                        }
                    }


                }



                async function sortOneStep(){
                    await sleep(1000-sliderSpeed.value())
                    if(!merage)split();
                    else merge();
                    sortOneStep();
                }


                function merge(){
                  let setpEnd = []
                  let listToChange = numberListLayers[numberListLayers.length-1]
                  if(listToChange.length===1) return

                  for(var index=0; index <listToChange.length-1; index+=2){
                    var listBase = listToChange[index];
                    var listAdd = listToChange[index+1];
                    var listEnd = []

                    var listBaseIndex = 0;
                    var listAddIndex = 0;

                    while (listEnd.length !== listBase.length + listAdd.length){
                      if(listBaseIndex === listBase.length){
                        listEnd.push(listAdd[listAddIndex])
                        listAddIndex++
                        continue
                      }
                      if(listAddIndex === listAdd.length){
                        listEnd.push(listBase[listBaseIndex])
                        listBaseIndex++
                        continue
                      }
                      if(listBase[listBaseIndex] <= listAdd[listAddIndex]){
                        listEnd.push(listBase[listBaseIndex])
                        listBaseIndex++
                        continue
                      }
                      else{
                        listEnd.push(listAdd[listAddIndex])
                        listAddIndex++
                        continue
                      }
                    }
                    setpEnd.push(listEnd);
                  }


                  if(listToChange.length %2 === 1){
                    setpEnd.push(listToChange[listToChange.length-1])
                  }
                  numberListLayers.push(setpEnd)

                }

                function split(){
                    let setpEnd = []
                    let listToChange = numberListLayers[numberListLayers.length-1]
                    if(numberListLayers.length<=0) return

                    listToChange.forEach(value => {
                        if(value.length > 1){
                            let splitIndex = Math.floor(value.length/2)
                            setpEnd.push(value.slice(0,splitIndex))
                            setpEnd.push(value.slice(splitIndex))
                        }
                        else setpEnd.push(value)
                    });

                    numberListLayers.push(setpEnd)

                    let buildNow = true
                    setpEnd.forEach(value => {if(value.length > 1)buildNow=false})
                    if(buildNow) merage = true;
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