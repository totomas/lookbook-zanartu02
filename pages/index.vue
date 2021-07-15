<template>
  <div>
    <div class="wrapper">
      <div class="loading" v-if="isLoading">
        <img lazyload src="~/assets/img/logo-comuna.png" />
        <progress-bar
          class="loadingBar"
          bar-color="#fff"
          bg-color="#e40524"
          text-fg-color="#fff"
          size="medium"
          :val="increasing_pct"
          :text="increasing_pct + '%'"
        />
      </div>
      <div class="instructions" v-show="isCover">
        <p>Disfruta una navegación única, deslizando hacia abajo</p>
        <img src="~/assets/img/scroll.png" />
        <button class="instructions_btn" @click="isCover = !isCover">
          Empezar a navegar
        </button>
      </div>
      <span id="bricsa-square" class="bricsa-square"></span>
      <div class="section section01-container" id="section01">
        <div class="section-01">
          <div id="section-bg01" :class="{ move: !isCover }" />
          <img
            lazyload
            class="section-logo"
            src="~/assets/img/logo-comuna.png"
          />
          <p class="call">
            Vívelo por <br />
            dentro y<br />
            por fuera
          </p>
          <p class="downgrade">
            Sal a vivir tu <br />
            nuevo departamento.
          </p>
          <p id="section1_vivelo" class="uptext">Vívelo</p>
        </div>
      </div>
      <div class="section section02-container" id="section02">
        <video
          autoplay
          muted
          loop
          playsinline
          preload="auto"
          class="section-bg"
        >
          <source src="~/assets/img/video01.mp4" type="video/mp4" />
        </video>
        <div class="section-02">
          <img lazyload src="~/assets/img/02.jpg" />
          <p class="title">Date una vuelta y respira</p>
          <p id="section02_subtitle" class="subtitle">
            ¡Está rodeado de áreas verdes!
          </p>
        </div>
      </div>
      <div class="section section03-container" id="section03">
        <img
          lazyload
          class="section-bg"
          id="section03_bg01"
          src="~/assets/img/03.jpg"
          alt=""
        />

        <img
          lazyload
          id="section03_disfruta"
          class="disfruta"
          src="~/assets/img/disfruta.png"
        />
        <img
          lazyload
          id="section03_bg02"
          class="section-bg02"
          src="~/assets/img/04.jpg"
          alt=""
        />
        <div class="section-03">
          <p class="title">
            Disfruta <br />
            tu terraza <br />y tu plaza
          </p>
          <p id="section03_subtitle01" class="subtitle">
            Depto. con opción a terraza privada.
          </p>
          <p id="section03_subtitle02" class="subtitle02">
            Frente a Plaza Zañartu y cercano a otros parques.
          </p>
        </div>
      </div>
      <div class="section section05-container" id="section05">
        <img
          lazyload
          id="section05_bg"
          class="section-bg"
          src="~/assets/img/05.jpg"
        />
        <div class="section-05">
          <p id="section05_title" class="title">
            ¡Siempre algo <br />
            que hacer!
          </p>
          <p id="section05_subtitle" class="subtitle">
            Múltiples espacios <br />
            y áreas comunes.
          </p>
          <img
            lazyload
            id="section05_imgcut"
            class="imgcut"
            src="~/assets/img/06.jpg"
          />
        </div>
      </div>
      <div class="section section06-container" id="section06">
        <div class="section-06">
          <img lazyload class="imgtop" src="~/assets/img/20.jpg" />
          <p id="section06_title" class="title">
            ¡Que rico <br />
            <strong>vivir así!</strong>
          </p>
          <p id="section06_subtitle" class="subtitle">
            Salón lounge<br />
            para lucirte con<br />
            tus amigos.
          </p>
          <img
            lazyload
            id="section06_imgbottom"
            class="imgbottom"
            src="~/assets/img/08.jpg"
          />
        </div>
      </div>
      <div class="section section07-container" id="section07">
        <img
          lazyload
          id="section07_bg"
          class="section-bg"
          src="~/assets/img/4.jpg"
        />
        <div class="section-07">
          <p id="section07_title" class="title">El espacio perfecto</p>
          <p id="section07_subtitle" class="subtitle">
            para <br />
            ser tú
          </p>
          <img
            id="section07_imgcut"
            lazyload
            class="imgcut"
            src="~/assets/img/10.jpg"
          />
          <p id="section07_downgrade" class="downgrade">
            Diseño Flexible a la medida de cómo quieras vivir.
          </p>
        </div>
      </div>
      <div class="section section08-container" id="section08">
        <img
          lazyload
          id="section08_bg"
          class="section-bg"
          src="~/assets/img/11.jpg"
        />
        <img
          lazyload
          id="section08_bg02"
          class="section-bg02"
          src="~/assets/img/12.jpg"
        />
        <div class="section-08">
          <p id="section08_title" class="title">
            ¿Quedarse<br />
            en cama?<br />
            ¡Buena idea!
          </p>
          <p id="section08_title02" class="title02">
            Un picoteo ¡y a relajarse!
          </p>
          <p id="section08_subtitle" class="subtitle">
            Ventanas termopanel con marco PVC (aislación térmica y acústica).
          </p>
          <p id="section08_subtitle02" class="subtitle02">
            Cocina abierta y conectada con el living.
          </p>
        </div>
      </div>
      <div class="section section10-container" id="section10">
        <img
          id="section10_bg"
          lazyload
          class="section-bg"
          src="~/assets/img/13.jpg"
        />
        <div class="section-10">
          <p id="section10_title" class="title">
            Muévete<br />
            indoor o<br />
            outdoor
          </p>
          <p id="section10_subtitle" class="subtitle">
            Gimnasio interior<br />
            con salida al jardín.
          </p>
        </div>
      </div>
      <div class="section section11-container" id="section11">
        <video
          autoplay
          muted
          loop
          playsinline
          preload="auto"
          class="section-bg"
        >
          <source src="~/assets/img/video02.mp4" type="video/mp4" />
        </video>
        <div class="section-11">
          <p id="section11_title" class="title">Así da gusto</p>
          <p id="section11_subtitle" class="subtitle">trabajar</p>
          <p id="section11_downgrade" class="downgrade">Zonas Cowork.</p>
          <img
            id="section11_img01"
            class="section-11__img01"
            lazyload
            src="~/assets/img/08.jpg"
          />
          <img lazyload class="section-11__img02" src="~/assets/img/14.jpg" />
        </div>
      </div>
      <div class="section section12-container" id="section12">
        <img
          id="section12_bg"
          lazyload
          class="section-bg"
          src="~/assets/img/15.jpg"
        />
        <div class="section-12" id="section12-content">
          <p id="section12_title" class="title">Recibe lo que quieras</p>
          <p id="section12_subtitle" class="subtitle">tranquilo</p>
          <p id="section12_downgrade" class="downgrade">Smart lockers.</p>
        </div>
      </div>
      <div class="section section13-container" id="section13">
        <img
          id="section13_bg"
          lazyload
          class="section-bg"
          src="~/assets/img/16.jpg"
        />
        <div class="section-13">
          <img
            id="section13_entorno"
            lazyload
            class="entorno"
            src="~/assets/img/entorno.png"
          />
          <p class="title">¡Mantengamos viva</p>
          <p class="subtitle">la vida de barrio!</p>
          <p id="section13_downgrade" class="downgrade">
            Ubicado en un barrio tradicional de Ñuñoa, cercano a todo lo que
            necesitas.
          </p>
          <img lazyload class="fachada" src="~/assets/img/17.jpg" />
        </div>
      </div>
      <div class="section section14-container" id="section14">
        <video
          autoplay
          muted
          loop
          playsinline
          preload="auto"
          class="section-bg"
        >
          <source src="~/assets/img/video03.mp4" type="video/mp4" />
        </video>
        <div id="section14-14" class="section-14">
          <img lazyload class="section-14__img01" src="~/assets/img/11.jpg" />
          <p class="title">
            Vívelo<br />
            por dentro<br />
            y por fuera
          </p>
          <p class="subtitle">
            La llave para comenzar<br />
            a disfrutarlo<br />
            la tienes tú.
          </p>
          <img lazyload class="section-14__img02" src="~/assets/img/18.jpg" />
          <img lazyload class="section-14__img03" src="~/assets/img/19.jpg" />
        </div>
      </div>
      <div class="section section15-container" id="section15">
        <video
          autoplay
          muted
          loop
          playsinline
          preload="auto"
          class="section-bg"
        >
          <source src="~/assets/img/video04.mp4" type="video/mp4" />
        </video>
        <img lazyload src="~/assets/img/logo-comuna.png" />
      </div>
      <div class="section section16-container">
        <div class="section-16">
          <img lazyload class="logo" src="~/assets/img/bricsa.png" />

          <img lazyload class="bptl" src="~/assets/img/bptl.png" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProgressBar from "vue-simple-progress";
export default {
  components: {
    ProgressBar,
  },
  data() {
    return {
      isLoading: true,
      increasing_pct: 0,
      isCover: true,
    };
  },
  mounted: function () {
    this.startAnimations();
  },
  methods: {
    startAnimations: function () {
      var tl = new TimelineMax({ onUpdate: updatePercentage });
      tl.to("#bricsa-square", 45, { top: "90%" }, 0);
      tl.to("#section-bg01", 1, { "background-position-x": "-470px" }, 0);
      tl.to("#section1_vivelo", 1, { top: "20%" }, 0);
      tl.to("#section01", 1, { top: "-100%" }, 1);
      tl.to("#section02_subtitle", 1, { bottom: "10%", opacity: "1" }, 1);
      tl.to("#section02", 1, { top: "-100%" }, 2);
      tl.to("#section03_bg01", 3, { left: "-330%" }, 3);
      tl.to("#section03_subtitle01", 2, { left: "-100%" }, 3.5);
      tl.to("#section03_subtitle02", 2, { left: "10%" }, 4);
      tl.to("#section03_bg02", 2, { left: "-100%" }, 4);
      tl.to("#section03_disfruta", 4, { left: "-160%" }, 4);
      tl.to("#section03", 1, { top: "-100%" }, 7);
      tl.to("#section05_bg", 2, { left: "-100%" }, 8);
      tl.to("#section05_title", 1, { opacity: 1, filter: "blur(0)" }, 8);
      tl.to("#section05_subtitle", 1, { opacity: 1, filter: "blur(0)" }, 8);
      tl.to("#section05_imgcut", 1, { right: "0%" }, 8);
      tl.to("#section05", 1, { top: "-100%" }, 10);
      tl.to("#section06_title", 1, { left: "5%" }, 11);
      tl.to("#section06_subtitle", 1, { left: "10%" }, 11);
      tl.to("#section06_imgbottom", 1, { left: "0" }, 11);
      tl.to("#section06", 1, { top: "-100%" }, 12);
      tl.to("#section07_bg", 3, { left: "-200%" }, 13);
      tl.to("#section07_title", 1, { top: "3%", opacity: "1" }, 14);
      tl.to("#section07_subtitle", 1, { top: "8%", opacity: "1" }, 14);
      tl.to("#section07_downgrade", 1, { bottom: "5%", opacity: "1" }, 14);
      tl.to("#section07_imgcut", 1, { left: "0" }, 14);
      tl.to("#section07", 1, { top: "-100%" }, 16);
      tl.to("#section08_bg", 4, { left: "160%" }, 17);
      tl.to("#section08_title", 1, { filter: "blur(0)", opacity: "1" }, 17);
      tl.to("#section08_subtitle", 1, { filter: "blur(0)", opacity: "1" }, 17);
      tl.to("#section08_bg02", 4, { left: "-350%" }, 20);
      tl.to("#section08_title", 1, { filter: "blur(20px)", opacity: "0" }, 20);
      tl.to(
        "#section08_subtitle",
        1,
        { filter: "blur(20px)", opacity: "0" },
        20
      );
      tl.to("#section08_title02", 1, { filter: "blur(0)", opacity: "1" }, 20);
      tl.to(
        "#section08_subtitle02",
        1,
        { filter: "blur(0)", opacity: "1" },
        20
      );
      tl.to("#section08", 1, { top: "-100%" }, 23);
      tl.to("#section10_bg", 2, { left: "-120%" }, 24);
      tl.to("#section10_title", 1, { filter: "blur(0)", opacity: "1" }, 24);
      tl.to("#section10_subtitle", 1, { filter: "blur(0)", opacity: "1" }, 24);
      tl.to("#section10", 1, { top: "-100%" }, 26);
      tl.to("#section11_title", 1, { bottom: "30%", opacity: "1" }, 27);
      tl.to("#section11_subtitle", 1, { bottom: "19%", opacity: "1" }, 27);
      tl.to("#section11_downgrade", 1, { bottom: "16%", opacity: "1" }, 27);
      tl.to("#section11_img01", 2, { left: "-75%" }, 28);
      tl.to("#section11", 1, { top: "-100%" }, 30);
      tl.to("#section12_bg", 1, { left: "-120%" }, 31);
      tl.to("#section12-content", 1, { top: "5%", opacity: "1" }, 31);
      tl.to("#section12", 1, { top: "-100%" }, 33);
      tl.to("#section13_bg", 1, { left: "-70%" }, 34);
      tl.to("#section13_entorno", 4, { left: "-100%" }, 34);
      tl.to("#section13_downgrade", 1, { filter: "blur(0)", opacity: "1" }, 34);
      tl.to("#section13", 1, { top: "-100%" }, 38);
      tl.to("#section14-14", 1, { top: "0", opacity: "1" }, 39);
      tl.to("#section14", 1, { top: "-100%" }, 40);
      tl.to("#section15", 1, { top: "-100%" }, 41);
      const scene = this.$scrollmagic
        .scene({
          triggerElement: ".wrapper",
          triggerHook: 0,
          duration: "5000%",
        })
        .setPin(".wrapper")
        .setTween(tl);

      this.$scrollmagic.addScene(scene);

      function updatePercentage() {
        tl.progress();
      }
    },
    load() {
      this.isLoading = true;
      setTimeout(() => {
        this.isLoading = false;
      }, 5000);
    },
  },
  created() {
    this.load();
    setInterval(() => {
      if (this.is_paused) return;

      this.increasing_pct = Math.min(this.increasing_pct + 1, 100);
    }, 23);
  },
};
</script>

<style>
.wrapper {
  max-width: 426px;
  width: 100% !important;
  overflow: hidden;
  margin: 0 auto;
  font-family: "Source Sans Pro", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100vh;
  position: relative;
  justify-content: center;
  align-items: flex-end;
}
body {
  max-width: 426px;
  margin: 0 auto !important;
}
.lookbook-container {
  position: relative;
}
.section {
  position: relative;
  overflow: hidden;
  width: 100%;
  min-height: 100vh;
}
.bricsa-square {
  display: block;
  position: absolute;
  right: 0;
  top: 20px;
  width: 50px;
  height: 50px;
  background: #e40524;
  z-index: 99;
}
.section-bg {
  height: 100%;
  object-fit: cover;
  position: absolute;
  z-index: -1;
  left: -100%;
}
#section01,
#section02,
#section03,
#section05,
#section06,
#section07,
#section08,
#section10,
#section11,
#section12,
#section13,
#section14,
#section15 {
  top: 0%;
  position: absolute !important;
  transition-timing-function: ease;
  transition-duration: 100ms;
}
#section01 {
  z-index: 13;
}
#section02 {
  z-index: 12;
}
#section03 {
  z-index: 11;
}
#section05 {
  z-index: 10;
}
#section06 {
  z-index: 9;
}
#section07 {
  z-index: 8;
}
#section08 {
  z-index: 7;
}
#section10 {
  z-index: 6;
}
#section11 {
  z-index: 5;
}
#section12 {
  z-index: 4;
}
#section13 {
  z-index: 3;
}
#section14 {
  z-index: 2;
}
#section15 {
  z-index: 1;
}
.loading {
  transition: all 1s both;
  background: #e40524;
  z-index: 100;
  position: absolute;
  display: grid;
  grid-template-rows: repeat(2, min-content);
  row-gap: 20px;
  justify-content: center;
  justify-items: center;
  align-items: center;
  align-content: center;
  width: 100%;
  height: 100%;
}
.loading img {
  animation: breath 1s both infinite alternate-reverse;
  width: 40%;
}
.loading .loadingBar {
  width: 60%;
}
@keyframes breath {
  0% {
    transform: scale(0.9);
  }
  100% {
    transform: scale(1);
  }
}
.instructions {
  background: #e40524;
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: min-content 80px min-content;
  justify-content: center;
  justify-items: center;
  align-content: center;
  align-items: center;
  row-gap: 30px;
  z-index: 14;
}
.instructions p {
  color: #fff;
  font-size: 26px;
  width: 90%;
  text-align: center;
  font-weight: 300;
}
.instructions img {
  width: 10%;
  animation: arrow-down .5s both infinite alternate-reverse;
}
@keyframes arrow-down {
  0% {
        margin-top: 0;
  }
  100% {
        margin-top: 10px;
  }
}
.instructions .instructions_btn {
  color: #fff;
  background: rgba(0, 0, 0, 0);
  border: solid 2px #fff;
  border-radius: 10px;
  padding: 10px;
  cursor: pointer;
  transition: 400ms;
}
.instructions .instructions_btn:hover {
  background: #b9041c;
}
.section01-container #section-bg01 {
  width: 100%;
  height: 100vh;
  background: url("~/assets/img/01.jpg") no-repeat;
}
.section01-container .move {
  animation: section01-bg 2s ease-in-out forwards;
}
.section01-container .section-01 {
  background: rgba(0, 0, 0, 0.3);
  width: 100%;
  height: 100%;
  position: absolute;
  display: block;
  top: 0;
  left: 0;
  z-index: 1;
}
.section01-container .section-01 .section-logo {
  width: 100px;
  position: absolute;
  top: 50px;
  left: 20px;
}
.section01-container .section-01 .call {
  transition: all 400ms;
  text-align: left;
  width: 70%;
  color: #fff;
  font-size: 60px;
  font-weight: bolder;
  line-height: 0.8;
  position: absolute;
  bottom: 36%;
  left: 20px;
}
.section01-container .section-01 .downgrade {
  text-align: left;
  width: 70%;
  color: #fff;
  font-size: 30px;
  font-weight: 300;
  line-height: 0.8;
  position: absolute;
  bottom: 25%;
  left: 20px;
}
.section01-container .section-01 #section1_vivelo {
  transform: rotate(-90deg);
  font-size: 180px;
  position: absolute;
  right: -200px;
  margin: 0;
  font-weight: bolder;
  color: #fff;
  top: 100%;
}

@keyframes section01-bg {
  0% {
    background-position-x: 0;
  }
  100% {
    background-position-x: -470px;
  }
}

.section02-container {
  position: relative;
}
.section02-container .section-02 {
  position: absolute;
  width: 80%;
  height: 75%;
  left: 10%;
  top: 13.5%;
}
.section02-container .section-02 img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(0.7);
}
.section02-container .section-02 .title {
  position: absolute;
  color: #fff;
  width: 100%;
  font-size: 70px;
  text-align: center;
  bottom: 30%;
  font-weight: 800;
  line-height: 0.9;
}
.section02-container .section-02 .subtitle {
  bottom: -100%;
  opacity: 0;
  position: absolute;
  color: #fff;
  width: 100%;
  font-weight: 300;
  font-size: 40px;
  text-align: center;
  line-height: 1;
}
.section-03 {
  position: relative;
}
.section03-container .section-bg {
  position: absolute;
  z-index: 3;
  height: 100vh;
  top: 0;
  left: 0;
}
.section03-container .disfruta {
  position: absolute;
  top: 0;
  left: 90%;
  z-index: 2;
}
.section03-container .section-bg02 {
  position: absolute;
  z-index: 1;
  height: 100vh;
  top: 0;
  left: 0;
}
.section03-container .section-03 {
  background: rgba(0, 0, 0, 0.3);
  width: 100%;
  height: 100%;
  position: absolute;
  display: block;
  top: 0;
  left: 0;
  z-index: 3;
  display: grid;
  align-items: center;
  justify-content: center;
}
.section03-container .section-03 .title {
  position: absolute;
  color: #fff;
  width: 80%;
  font-size: 60px;
  text-align: center;
  bottom: 32%;
  left: 10%;
  font-weight: 800;
  line-height: 0.9;
  z-index: 3;
}
.section03-container .section-03 .subtitle {
  position: absolute;
  color: #fff;
  width: 80%;
  font-size: 30px;
  font-weight: 300;
  text-align: center;
  bottom: 20%;
  left: 10%;
  line-height: 1;
  z-index: 3;
}
.section03-container .section-03 .subtitle02 {
  position: absolute;
  color: #fff;
  width: 80%;
  font-size: 30px;
  font-weight: 300;
  text-align: center;
  bottom: 20%;
  left: 100%;
  line-height: 1;
  z-index: 3;
}
.section05-container .section-bg {
  height: 100%;
  object-fit: cover;
  position: absolute;
  z-index: -1;
  left: 0;
}
.section05-container .section-05 {
  background: rgba(0, 0, 0, 0.3);
  width: 100%;
  height: 100%;
  position: absolute;
  display: block;
  top: 0;
  left: 0;
  z-index: 1;
}
.section05-container .section-05 .title {
  position: absolute;
  color: #fff;
  width: 90%;
  font-size: 40px;
  text-align: center;
  top: 5%;
  opacity: 0;
  left: 5%;
  font-weight: 800;
  line-height: 0.9;
  filter: blur(100px);
}
.section05-container .section-05 .subtitle {
  position: absolute;
  color: #fff;
  width: 80%;
  font-size: 30px;
  font-weight: 300;
  text-align: center;
  top: 20%;
  opacity: 0;
  left: 10%;
  line-height: 1;
  filter: blur(100px);
}
.section05-container .section-05 .imgcut {
  filter: brightness(0.7);
  width: 60%;
  height: 55%;
  object-fit: cover;
  object-position: center;
  position: absolute;
  bottom: 0;
  right: -60%;
}
.section06-container .section-06 .imgtop {
  filter: brightness(0.7);
  height: 45%;
  width: 180%;
  position: absolute;
  top: 0;
  left: 0;
  object-fit: cover;
  object-position: -240px center;
}
.section06-container .section-06 .imgbottom {
  height: 55%;
  width: 270%;
  position: absolute;
  bottom: 0;
  left: -70%;
  object-fit: cover;
}
.section06-container .section-06 .title {
  position: absolute;
  color: #fff;
  width: 90%;
  font-size: 50px;
  text-align: center;
  top: 5%;
  left: -80%;
  font-weight: 300;
  line-height: 0.9;
}
.section06-container .section-06 .subtitle {
  position: absolute;
  color: #fff;
  width: 80%;
  font-size: 30px;
  font-weight: 300;
  text-align: center;
  top: 20%;
  left: 100%;
  line-height: 1;
}
.section07-container .section-bg {
  left: -10%;
}
.section07-container .section-07 {
  background: rgba(0, 0, 0, 0.3);
  width: 100%;
  height: 100%;
  position: absolute;
  display: block;
  top: 0;
  left: 0;
  z-index: 1;
}
.section07-container .section-07 .imgcut {
  width: 40%;
  height: 25%;
  object-fit: cover;
  position: absolute;
  left: -50%;
  bottom: 25%;
}
.section07-container .section-07 .title {
  position: absolute;
  color: #fff;
  width: 90%;
  font-size: 30px;
  text-align: center;
  top: 70%;
  left: 5%;
  font-weight: 300;
  line-height: 0.9;
  opacity: 0;
}
.section07-container .section-07 .subtitle {
  position: absolute;
  color: #fff;
  width: 80%;
  font-size: 100px;
  font-weight: 800;
  text-align: center;
  top: 70%;
  left: 10%;
  line-height: 1;
  opacity: 0;
}
.section07-container .section-07 .downgrade {
  position: absolute;
  color: #fff;
  width: 80%;
  font-size: 26px;
  left: 10%;
  font-weight: 300;
  bottom: 0;
  opacity: 0;
}
.section08-container .section-bg {
  position: absolute;
  height: 100vh;
  filter: brightness(0.7);
  z-index: 0;
  left: -180%;
}
.section08-container .section-bg02 {
  position: absolute;
  height: 100vh;
  filter: brightness(0.7);
  z-index: -1;
  left: -100%;
}
.section08-container .section-08 {
  color: #fff;
}
.section08-container .section-08 .title {
  position: absolute;
  color: #fff;
  width: 90%;
  font-size: 50px;
  text-align: center;
  bottom: 17%;
  left: 5%;
  font-weight: 800;
  line-height: 0.9;
  filter: blur(20px);
  opacity: 0;
}
.section08-container .section-08 .subtitle {
  position: absolute;
  color: #fff;
  width: 80%;
  font-size: 22px;
  font-weight: 300;
  text-align: center;
  bottom: 5%;
  left: 10%;
  line-height: 1;
  opacity: 0;
  filter: blur(20px);
  opacity: 0;
}
.section08-container .section-08 .title02 {
  position: absolute;
  color: #fff;
  width: 90%;
  font-size: 40px;
  text-align: center;
  top: 3%;
  left: 5%;
  font-weight: 800;
  line-height: 0.9;
  filter: blur(20px);
  opacity: 0;
}
.section08-container .section-08 .subtitle02 {
  position: absolute;
  color: #fff;
  width: 80%;
  font-size: 26px;
  font-weight: 300;
  text-align: center;
  top: 16%;
  left: 10%;
  line-height: 1;
  filter: blur(20px);
  opacity: 0;
}
.section10-container .section-bg {
  position: absolute;
  height: 100vh;
  filter: brightness(0.7);
  left: 0;
}
.section10-container .section-10 {
  color: #fff;
}
.section10-container .section-10 .title {
  position: absolute;
  color: #fff;
  width: 90%;
  font-size: 60px;
  text-align: center;
  top: 3%;
  left: 5%;
  font-weight: 800;
  line-height: 0.9;
  filter: blur(20px);
  opacity: 0;
}
.section10-container .section-10 .subtitle {
  position: absolute;
  color: #fff;
  width: 80%;
  font-size: 26px;
  font-weight: 300;
  text-align: center;
  bottom: 10%;
  left: 10%;
  line-height: 1;
  filter: blur(20px);
  opacity: 0;
}
.section11-container .section-bg {
  filter: brightness(0.7);
}
.section11-container .section-11 {
  color: #fff;
}
.section11-container .section-11 .section-11__img01,
.section11-container .section-11 .section-11__img02 {
  filter: brightness(0.7);
  position: absolute;
  top: 0;
  left: 0;
  object-fit: cover;
  width: 75%;
  height: 90%;
}
.section11-container .section-11 .section-11__img01 {
  z-index: 1;
  left: 0;
}
.section11-container .section-11 .section-11__img02 {
  object-position: 10%;
}
.section11-container .section-11 .title {
  z-index: 2;
  position: absolute;
  width: 80%;
  left: 10%;
  text-align: left;
  bottom: 0%;
  font-size: 50px;
  font-weight: 300;
  opacity: 0;
}
.section11-container .section-11 .subtitle {
  z-index: 2;
  position: absolute;
  width: 80%;
  left: 10%;
  bottom: -15%;
  font-size: 70px;
  font-weight: 800;
  text-align: right;
  opacity: 0;
}
.section11-container .section-11 .downgrade {
  z-index: 2;
  position: absolute;
  bottom: 0%;
  font-size: 30px;
  width: 80%;
  left: 10%;
  text-align: center;
  opacity: 0;
}
.section12-container .section-bg {
  left: -20%;
  object-position: 100%;
  filter: brightness(0.7);
}
.section12-container .section-12 {
  color: #fff;
}
.section12-container #section12-content {
  z-index: 2;
  position: absolute;
  width: 80%;
  left: 10%;
  top: -10%;
  opacity: 0;
}
.section12-container .section-12 .title {
  font-size: 50px;
  font-weight: 300;
  line-height: 0.9;
}
.section12-container .section-12 .subtitle {
  font-size: 70px;
  font-weight: 800;
}
.section12-container .section-12 .downgrade {
  font-size: 30px;
  width: 100%;
  font-weight: 300;
}
.section13-container .section-bg {
  position: absolute;
  height: 100%;
  filter: brightness(0.7);
  left: -100%;
}
.section13-container .section-13 {
  color: #fff;
}
.section13-container .section-13 .entorno {
  height: 150px;
  position: absolute;
  top: 1%;
  left: 80%;
}
.section13-container .section-13 .title {
  z-index: 2;
  position: absolute;
  width: 80%;
  left: 10%;
  bottom: 66%;
  font-size: 40px;
  font-weight: 300;
}
.section13-container .section-13 .subtitle {
  z-index: 2;
  position: absolute;
  width: 80%;
  left: 10%;
  bottom: 53%;
  font-size: 50px;
  font-weight: 800;
  line-height: 0.9;
}
.section13-container .section-13 .downgrade {
  z-index: 2;
  position: absolute;
  bottom: 39%;
  font-size: 22px;
  width: 80%;
  left: 10%;
  font-weight: 300;
  filter: blur(100px);
  opacity: 0;
}
.section13-container .section-13 .fachada {
  position: absolute;
  bottom: 3%;
  left: 10%;
  width: 80%;
  height: 30%;
  object-fit: cover;
  object-position: bottom;
}
.section14-container .section-bg {
  filter: brightness(1);
}
.section14-container .section-14 {
  color: #fff;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 90%;
  left: 0;
  opacity: 0;
}
.section14-container .section-14 .section-14__img01 {
  z-index: 2;
  filter: brightness(0.7);
  width: 60%;
  height: 30%;
  object-fit: cover;
  position: absolute;
  top: 0;
  right: 10%;
}
.section14-container .section-14 .section-14__img02 {
  filter: brightness(0.7);
  position: absolute;
  width: 70%;
  height: 80%;
  object-fit: cover;
  left: 15%;
  top: 10%;
}
.section14-container .section-14 .section-14__img03 {
  z-index: 2;
  width: 60%;
  height: 30%;
  object-fit: cover;
  position: absolute;
  bottom: 0;
  left: 10%;
}
.section14-container .section-14 .title {
  z-index: 2;
  position: absolute;
  width: 80%;
  left: 20%;
  text-align: left;
  top: 28%;
  font-size: 50px;
  font-weight: 800;
  line-height: 1;
}
.section14-container .section-14 .subtitle {
  z-index: 2;
  position: absolute;
  width: 80%;
  left: 20%;
  top: 55%;
  font-size: 20px;
  text-align: left;
  font-weight: 300;
}
.section14-container .enter {
  top: 0;
  opacity: 1;
}
.section15-container .section-bg {
  height: 100vh;
}
.section15-container img {
  width: 40%;
  position: absolute;
  left: 30%;
  bottom: 20%;
}
.section16-container {
  background: #e40524;
  display: flex;
}
.section16-container .section-16 {
  display: grid;
  height: 100%;
  grid-template-columns: 100%;
  grid-template-rows: repeat(2, min-content);
  row-gap: 30px;
  justify-content: center;
  justify-items: center;
  align-items: center;
  align-content: center;
  align-self: center;
}
.section16-container .section-16 .logo {
  width: 60%;
}
.section16-container .section-16 .bptl {
  width: 40%;
}

@media screen and (max-width: 376px) {
  .section01-container .section-01 .call {
    font-size: 50px;
    bottom: 40%;
  }
  .section01-container .section-01 #section1_vivelo {
    font-size: 150px;
    right: -160px;
  }
  .section02-container .section-02 .title {
    font-size: 50px;
  }
  .section03-container .section-03 .title {
    font-size: 40px;
  }
  .section03-container .section-03 .subtitle {
    font-size: 25px;
    bottom: 15%;
  }
  .section03-container .section-03 .subtitle02 {
    font-size: 25px;
    bottom: 15%;
  }
  .section08-container .section-08 .subtitle02 {
    top: 18%;
  }
  .section13-container .section-13 .title {
    font-size: 38px;
  }
}
@media screen and (max-width: 321px) {
  .section01-container .section-01 .call {
    font-size: 40px;
  }
  .section01-container .section-01 #section1_vivelo {
    font-size: 150px;
    right: -160px;
  }
  .section02-container .section-02 .subtitle {
    font-size: 30px;
  }
  .section05-container .section-05 .subtitle {
    top: 21%;
  }
  .section06-container .section-06 .subtitle {
    font-size: 26px;
    top: 23%;
  }
  .section07-container .section-07 .subtitle {
    font-size: 80px;
  }
  .section12-container .section-12 .subtitle {
    font-size: 50px;
  }
  .section13-container .section-13 .title {
    font-size: 32px;
    bottom: 63%;
  }
  .section13-container .section-13 .subtitle {
    font-size: 33px;
    bottom: 55%;
  }
  .section13-container .section-13 .downgrade {
    font-size: 20px;
  }
}
</style>
