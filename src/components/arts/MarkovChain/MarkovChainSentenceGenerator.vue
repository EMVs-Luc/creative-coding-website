<template>

  <Art :script="script"></Art>
</template>

<script>
import Art from "@/components/arts/Art.vue";

export default {

    name: "MarkovChainSentenceGenerator",
    components: {Art},
    data(){
        return{

            script: function (p5) {

                let inputTextGround
                let inputAmount

                let displayRand = 20;

                let createModelButton
                let generateTextButton


                let boolGenerate = false
                let generatedText = ""
                let generatedTextWords = 0
                let generatedTextArea
                let lastGeneratedWord = null;

                let model = {}
                let modelNData = {}


                let textNumber

                p5.preload = _ => {

                    let test = p5.loadStrings(require('@/assets/shakespeare.txt'))
                }


                // NOTE: Set up is here
                p5.setup = _ => {
                    p5.createCanvas(p5.windowWidth, (p5.windowHeight/100)*95);
                    p5.pixelDensity(1);
                    p5.background(255);

                    p5.textSize(25);
                    p5.text("Input reference", displayRand, 40)
                    inputTextGround = p5.createElement('textarea');
                    inputTextGround.position(displayRand,100)
                    inputTextGround.size(500,200);
                    inputTextGround.html(besipielText)

                    p5.textSize(25);
                    p5.text("Output word amount", displayRand, 310)
                    inputAmount = p5.createSlider(1,5000, 100)
                    inputAmount.size(500,10);
                    inputAmount.position(displayRand,380);


                    textNumber = p5.createElement('textarea');
                    textNumber.position(displayRand + 250, 342);
                    textNumber.size(50,15);
                    textNumber.elt.disabled = true

                    createModelButton = p5.createButton("Create model")
                    createModelButton.mousePressed(createModelOnPress);
                    createModelButton.position(displayRand,430);


                    generateTextButton = p5.createButton("Generate Text")
                    generateTextButton.mousePressed(generateTextOnPress);
                    generateTextButton.position(displayRand,460);

                    p5.textSize(25);
                    p5.text("Generated Text", displayRand*4 + 500, 40)
                    generatedTextArea = p5.createElement('textarea');
                    generatedTextArea.position(displayRand*4+500,100)
                    generatedTextArea.size(500,200);
                    generatedTextArea.elt.disabled = true

                    createModelOnPress();

                }

                function generateTextOnPress(){
                    if(model === {}) return
                    boolGenerate = !boolGenerate;
                    generatedText = "";
                    lastGeneratedWord = null
                    generatedTextWords= 0
                }
                function createModelOnPress(){
                    if(boolGenerate) return;
                    model = {};
                    modelNData = {};

                    let splitText = inputTextGround.value()
                    splitText = splitText.replace(".", " .")
                    splitText = splitText.replace(",", " ,")
                    splitText = splitText.split(" ");
                    for(let indexArea = 0; indexArea < splitText.length-1; indexArea++){
                        let word = splitText[indexArea];
                        if(word== null) continue;
                        if(!model.hasOwnProperty(word)) model[word] = {}

                        let wordAfter = splitText[indexArea+1]
                        if(wordAfter== null) continue;
                        if(!model[word].hasOwnProperty(wordAfter)) model[word][wordAfter] = 0
                        model[word][wordAfter] = model[word][wordAfter] + 1

                        if(!modelNData.hasOwnProperty(word)) modelNData[word] = 1
                        else modelNData[word] = modelNData[word] + 1
                    }

                    console.log(model)
                    console.log(modelNData)
                    console.log("Model has is created")
                }


                // NOTE: Draw is here
                p5.draw = _ => {
                    textNumber.html(inputAmount.value())
                    if(!boolGenerate){
                        generateTextButton.html("Generate Text");
                        return;
                    }
                    generateTextButton.html("stop generating...");
                    generatedTextArea.html(generatedText);

                    if(generatedTextWords>= inputAmount.value()){
                        boolGenerate = false
                        return;
                    }

                    if(lastGeneratedWord == null) generateFirstWord()
                     generatedNextWord();


                }

                function generateFirstWord(){
                    let keys = Object.keys(model);
                    lastGeneratedWord = keys[p5.round(p5.random(0,keys.length-1))]
                    generatedText += lastGeneratedWord;
                    generatedTextWords+= 1
                }

                function generatedNextWord(){
                    let wordModel = model[lastGeneratedWord];

                    let randomNumber = p5.round(p5.random(1,modelNData[lastGeneratedWord]))
                    let countNumber = 0;
                    let foundWord;

                    let wordModelKeys = Object.keys(wordModel);

                    for(let indexWordModel = 0; countNumber<randomNumber; indexWordModel++){
                        foundWord = wordModelKeys[indexWordModel]
                        countNumber += wordModel[foundWord];
                    }
                    lastGeneratedWord = foundWord;
                    generatedText += " " + lastGeneratedWord;
                    generatedTextWords+= 1
                }



                let besipielText = ""

            },


        }
    }
}
</script>

<style scoped>

</style>