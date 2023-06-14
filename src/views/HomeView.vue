<template>
  <div class="over">
  <div class="body">
    <h1>Pra. Creative Coding</h1>

    <p>Willkommen auf meiner! Hier findest du spannende Einblicke in unsere praktische Arbeit,
      bei der wir uns mit kreativem Coding beschäftigt haben. Diese Webseite funktioniert mit Vue.js und p4.js.
      Lass dich von den Bildern inspirieren und entdecke die faszinierende Welt des Creative Coding!</p>

    <table class="colage">
      <tr>
        <td><img class="colage" :src="require('@/assets/preview_images/dithering.png')"></td>
        <td><div class="colage"></div></td>
        <td><img class="colage" :src="require('@/assets/preview_images/abstract-circle2.png')"></td>
      </tr>

      <tr>
        <td><div class="colage"></div></td>
        <td><img class="colage" :src="require('@/assets/preview_images/mearg-sort.png')"></td>
        <td><img class="colage" :src="require('@/assets/preview_images/mearging.png')"></td>
      </tr>


      <tr>
        <td><img class="colage" :src="require('@/assets/preview_images/sentence-generator.png')"></td>
        <td><img class="colage" :src="require('@/assets/preview_images/glitch.png')"></td>
        <td><div class="colage"></div></td>
      </tr>

      <tr>
        <td><img class="colage" :src="require('@/assets/preview_images/pixel-sorter.png')"></td>
        <td><img class="colage" :src="require('@/assets/preview_images/abstract-circle.png')"></td>
        <td><div class="colage"></div></td>
      </tr>
    </table>

    <div class="themen">
      <h2>Behandelte Themen</h2>
      <table>
        <tr>
          <td><h3>Shapes</h3></td>
          <td><p>In diesem ersten Thema haben wir uns zuerst mit p5.js vertraut gemacht und uns mit Formen ausprobiert.</p></td>
        </tr>
        <tr>
          <td><h3>mage manipulation</h3></td>
          <td><p>Im zweiten Teil, haben wir mit Bildern gearbeitet, dabei haben wir Pixel kennen gelernt und Bild Effekte.</p></td>
        </tr>
        <tr>
          <td><h3>L-System</h3></td>
          <td><p>Das L-System bietet ein Set an Regeln und lässt dich Fraktale aufbauen, wird oft benutzt um Pflanzen zu generieren.</p></td>
        </tr>
        <tr>
          <td><h3>Markov chain</h3></td>
          <td><p>Eine Marko chain ist ein stochastischer Prozess. Ziel bei der Anwendung von Markow-Ketten ist es, Wahrscheinlichkeiten für das Eintreten zukünftiger Ereignisse anzugeben</p></td>
        </tr>
        <tr>
          <td><h3>Conways game of life</h3></td>
          <td><p>Conways game of life. Eine Spielfläche aus Zellen mit Regeln, leben oder sterben? Das ist hier die Frage.</p></td>
        </tr>
        <tr>
          <td><h3>Sortieralgorithmus</h3></td>
          <td><p>Veranschaulichung ein paar Sortieralgorithmus</p></td>
        </tr>
      </table>
    </div>
  </div>

  </div>
</template>


<style scoped>

.over{
  width: 100%;
  height: 100%;
  overflow: hidden;
}

h1{

  width: 90%;
}
.body{
  padding-left: 50px;
  margin-top: 10px;
  font-weight: bold;
  padding-right: 0;
  clear: both;
  width: 100%;
  height: 100%;
}

table.colage{
  position: absolute;
  right: 50px;
  top: 100px;
  border-spacing: 5px 5px;
  background: gray;
}

div.colage{
  width: 220px;
  height: 220px;
  background: white;
}

img.colage{
  width: 220px;
}

.themen{
  position: absolute;
  bottom: 130px;
  width: 90%;
}

li{

}
li>p{
  width:30%;
  padding-left: 100px;
  text-align: justify;
}
h3{
  margin-bottom: 10px;
  padding-right: 30px;
  margin-top: 0px;
}

table{
  margin-left: 2%;
}

p{
  color: black;
  width: 50%;
  font-size: 18px;
}

ul{
  list-style-type: none;
}
</style>

<script>

export default {
  name: 'HomeView',
  components: {
  }
}
</script>
