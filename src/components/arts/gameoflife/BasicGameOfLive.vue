<template>

  <Art :script="script"></Art>
</template>

<script>
import Art from "@/components/arts/Art.vue";

export default {

    name: "BasicGameOfLive",
    components: {Art},
    data(){
        return{

            script: function (p5) {

                let playField
                let play = false;
                let rules =[
                    function (repostingCells){
                        if(!isCellLiving(repostingCells[4])) return null;
                        if(countLivingCells(repostingCells) > 0) console.log(countLivingCells(repostingCells))
                        if(countLivingCells(repostingCells) > 2) return null;
                        return   p5.color(0,0,0)
                    },
                    function (repostingCells){
                        if(!isCellLiving(repostingCells[4])) return null;
                        if(countLivingCells(repostingCells) > 4 || countLivingCells(repostingCells) < 3) return null;
                        return  repostingCells[4]
                    },
                    function (repostingCells){
                        if(!isCellLiving(repostingCells[4])) return null;
                        if(countLivingCells(repostingCells) < 4) return null;
                        return  p5.color(0,0,0)
                    },
                    function (repostingCells){
                        if(isCellLiving(repostingCells[4])) return null;
                        if(countLivingCells(repostingCells) !== 3) return null;
                        return  p5.color(255,255,0)
                    }
                ]

                //Interaction
                let createPlayGroundButton;
                let sizeSliderHeight;
                let sizeSliderWidth;
                let sizeZoomeSlider;


                let playButton;
                let speedSlider;


                //Look
                let sideDistance = 20;
                let mindHeight = 20;
                let distanceFromSide = 200;
                let squareSize = 3;

                let backgroundColor = p5.color(100, 100, 100)


                // NOTE: Set up is here
                p5.setup = _ => {
                    mindHeight = (p5.windowHeight/100)*5  + mindHeight
                    distanceFromSide = distanceFromSide+ sideDistance
                    let canvas = p5.createCanvas(p5.windowWidth, (p5.windowHeight/100)*95);
                    canvas.position(0,(p5.windowHeight/100)*5)
                    p5.pixelDensity(1);
                    p5.background(255);

                    setupPlayGroundControllers();
                }

                function setupPlayGroundControllers(){
                    let vertDistance = 70;
                    p5.textSize(18)

                    p5.text("Zoom", sideDistance, mindHeight - 30)
                    sizeZoomeSlider = p5.createSlider(1,100,30);
                    sizeZoomeSlider.position(sideDistance, 30 + mindHeight)


                    p5.text("Height", sideDistance, mindHeight - 30 +vertDistance)
                    sizeSliderHeight = p5.createSlider(1,250,30);
                    sizeSliderHeight.position(sideDistance, 30 + mindHeight +vertDistance)

                    p5.text("Width", sideDistance, mindHeight - 30 + 2*vertDistance)
                    sizeSliderWidth = p5.createSlider(1,250,30);
                    sizeSliderWidth.position(sideDistance, 30 + mindHeight + 2*vertDistance)

                    createPlayGroundButton = p5.createButton("Create Playground")
                    createPlayGroundButton.position(sideDistance, 30 + mindHeight + 2* vertDistance + 50)
                    createPlayGroundButton.mousePressed(createPlayground);


                    playButton = p5.createButton("Play")
                    playButton.position(sideDistance, 30 + mindHeight + 3* vertDistance + 50)
                    playButton.mousePressed(playButtonPressed);


                    p5.text("Speed", sideDistance, mindHeight - 30 + 5*vertDistance -20)
                    speedSlider = p5.createSlider(1,60,5);
                    speedSlider.position(sideDistance, 30 + mindHeight + 5*vertDistance -20)


                }

                function isCellLiving(color){
                    return !(color == null || (color[0] === 0 && color[1] === 0 && color[2] === 0));

                }
                function countLivingCells(colors){
                    let count = 0;
                    for(let i = 0; i < colors.length; i++){
                        if(isCellLiving(colors[i])) count= count + 1
                    }
                    return count
                }

                function playButtonPressed(){
                    play = !play;
                    if(play){
                        if(playField == null) play = false;
                        else playButton.html("Pause")
                    }
                    else playButton.html("Play")
                }

                function createPlayground(){
                    playField = p5.createImage(sizeSliderWidth.value(), sizeSliderHeight.value());
                }


                // NOTE: Draw is here
                p5.draw = _ => {
                   p5.frameRate(speedSlider.value());
                   if(playField != null) drawPlayGround();
                   if(play)live();
                }

                p5.mouseClicked = _ =>{
                    if(playField == null) return;
                    playField.loadPixels();

                    let zoom = sizeZoomeSlider.value();

                    let fieldHeight = zoom*playField.height
                    let fieldWidth = zoom*playField.width

                    if(fieldWidth > p5.windowWidth-distanceFromSide){
                        fieldWidth = p5.windowWidth-distanceFromSide
                    }

                    let drawLocationHeight = ((p5.windowHeight/100)*95-fieldHeight)/2
                    let drawLocationWidth = distanceFromSide+ ((p5.windowWidth-distanceFromSide-fieldWidth)/2)

                    if(drawLocationHeight < 0) drawLocationHeight = 0
                    if(drawLocationWidth > distanceFromSide) drawLocationWidth = distanceFromSide

                    let x = p5.floor((p5.mouseX-drawLocationWidth) / zoom)
                    let y = p5.floor((p5.mouseY-drawLocationHeight) / zoom)

                    if(x<0 || y < 0) return;
                    if(x>= playField.width && y>= playField.height) return;

                    let color  = playField.get(x,y)
                    if(color[0] === 0 && color[1] === 0 && color[2] === 0) playField.set(x,y,p5.color(255,255,0))
                    else playField.set(x,y,p5.color(0,0,0,255))
                    playField.updatePixels();
                }

                function live(){

                    playField.loadPixels();
                    for (let y = 0; y < playField.height; y++) {
                        for (let x = 0; x < playField.width; x++) {

                            let cellsAround = []

                            for(let yAround = 1; yAround >= -1; yAround--){
                                for(let xAround = -1; xAround <= 1; xAround++){
                                if(x+xAround <0 || y+yAround<0) cellsAround.push(null)

                                else cellsAround.push(playField.get(x+xAround,y+yAround))
                              }
                            }

                            let output = null;
                            for(let indexRule= 0; indexRule<rules.length; indexRule++){
                                output= rules[indexRule](cellsAround)
                                if(output != null) break
                            }
                            if(output != null) playField.set(x,y,output)
                        }
                    }
                    playField.updatePixels();
                }

                function drawPlayGround(){
                    playField.loadPixels();

                    //clear
                    p5.fill(255,255,255)
                    p5.noStroke();
                    p5.rect(distanceFromSide-5,0,p5.windowWidth ,p5.windowHeight)

                    let zoom = sizeZoomeSlider.value();

                    let fieldHeight = zoom*playField.height
                    let fieldWidth = zoom*playField.width

                    if(fieldWidth > p5.windowWidth-distanceFromSide){
                        fieldWidth = p5.windowWidth-distanceFromSide
                    }

                    let drawLocationHeight = ((p5.windowHeight/100)*95-fieldHeight)/2
                    let drawLocationWidth = distanceFromSide+ ((p5.windowWidth-distanceFromSide-fieldWidth)/2)

                    if(drawLocationHeight < 0) drawLocationHeight = 0
                    if(drawLocationWidth > distanceFromSide) drawLocationWidth = distanceFromSide

                    p5.noStroke();
                    p5.fill(backgroundColor)
                    p5.rect(drawLocationWidth,drawLocationHeight,fieldWidth ,fieldHeight)

                    for (let y = 0; y < playField.height; y++) {
                        for (let x = 0; x < playField.width; x++) {
                            const color = playField.get(x, y)
                            if(color[0] === 0 && color[1] === 0 && color[2] === 0) continue
                            let drawX = zoom*x + drawLocationWidth
                            let drawY = zoom*y + drawLocationHeight
                            p5.fill(color)
                            p5.noStroke()
                            p5.rect(drawX,drawY,zoom ,zoom)

                        }
                    }

                    for (let x = 0; x < playField.width; x++) {
                        if(x % 3 === 0) p5.strokeWeight(4)
                        else p5.strokeWeight(1)

                        p5.stroke(200);
                        p5.fill(200)
                        let drawX = zoom*x + drawLocationWidth
                        let drawY =  drawLocationHeight
                        p5.line(drawX, drawY, drawX, drawY + fieldHeight)
                    }
                    for (let y = 0; y < playField.height; y++) {
                        if(y % 3 === 0) p5.strokeWeight(4)
                        else p5.strokeWeight(1)

                        p5.stroke(200);
                        p5.fill(200)
                        let drawX =  drawLocationWidth
                        let drawY =  zoom*y +drawLocationHeight
                        p5.line(drawX, drawY, drawX + fieldWidth, drawY)
                    }
                }

            },
        }
    }
}
</script>

<style scoped>

</style>