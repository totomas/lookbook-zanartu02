/*! For license information please see LICENSES */
(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{200:function(t,e,o){t.exports=o.p+"img/logo-comuna.afefa8b.png"},201:function(t,e,o){t.exports=o.p+"img/08.1046eb7.jpg"},202:function(t,e,o){t.exports=o.p+"img/11.c37a23e.jpg"},203:function(t,e,o){var content=o(231);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(79).default)("1b7833da",content,!0,{sourceMap:!1})},204:function(t,e,o){t.exports=o.p+"img/scroll.8289d92.png"},205:function(t,e,o){t.exports=o.p+"videos/video01.1d47746.mp4"},206:function(t,e,o){t.exports=o.p+"videos/video02.7610583.mp4"},207:function(t,e,o){t.exports=o.p+"videos/video03.87c3b90.mp4"},208:function(t,e,o){t.exports=o.p+"videos/video04.a6bc889.mp4"},209:function(t,e,o){t.exports=o.p+"img/02.e41921a.jpg"},210:function(t,e,o){t.exports=o.p+"img/03.486876f.jpg"},211:function(t,e,o){t.exports=o.p+"img/disfruta.fb42b90.png"},212:function(t,e,o){t.exports=o.p+"img/04.6e5a4cb.jpg"},213:function(t,e,o){t.exports=o.p+"img/05.d5d8a47.jpg"},214:function(t,e,o){t.exports=o.p+"img/06.c4d0549.jpg"},215:function(t,e,o){t.exports=o.p+"img/20.c340735.jpg"},216:function(t,e,o){t.exports=o.p+"img/4.bc568e2.jpg"},217:function(t,e,o){t.exports=o.p+"img/10.817f3bd.jpg"},218:function(t,e,o){t.exports=o.p+"img/12.9e979e7.jpg"},219:function(t,e,o){t.exports=o.p+"img/13.b50f42d.jpg"},220:function(t,e,o){t.exports=o.p+"img/14.0b447d0.jpg"},221:function(t,e,o){t.exports=o.p+"img/15.7b05448.jpg"},222:function(t,e,o){t.exports=o.p+"img/16.9d6ded8.jpg"},223:function(t,e,o){t.exports=o.p+"img/entorno.b5d0c99.png"},224:function(t,e,o){t.exports=o.p+"img/17.e6cf0cc.jpg"},225:function(t,e,o){t.exports=o.p+"img/18.fb61f61.jpg"},226:function(t,e,o){t.exports=o.p+"img/19.76158c8.jpg"},227:function(t,e,o){t.exports=o.p+"img/bricsa.7731e1c.png"},228:function(t,e,o){t.exports=o.p+"img/bptl.cb7bd7b.png"},229:function(t,e,o){var n;n=function(){return function(t){var e={};function o(n){if(e[n])return e[n].exports;var c=e[n]={i:n,l:!1,exports:{}};return t[n].call(c.exports,c,c.exports,o),c.l=!0,c.exports}return o.m=t,o.c=e,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:n})},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(object,t){return Object.prototype.hasOwnProperty.call(object,t)},o.p="",o(o.s=0)}([function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.VueSimpleProgress=void 0;var n,c=o(1),r=(n=c)&&n.__esModule?n:{default:n};"undefined"!=typeof window&&window.Vue&&Vue.component("vue-simple-progress",r.default),e.VueSimpleProgress=r.default,e.default=r.default},function(t,e,o){var n=o(2)(o(3),o(4),null,null);t.exports=n.exports},function(t,e){t.exports=function(t,e,o,n){var c,r=t=t||{},l=typeof t.default;"object"!==l&&"function"!==l||(c=t,r=t.default);var d="function"==typeof r?r.options:r;if(e&&(d.render=e.render,d.staticRenderFns=e.staticRenderFns),o&&(d._scopeId=o),n){var f=Object.create(d.computed||null);Object.keys(n).forEach((function(t){var e=n[t];f[t]=function(){return e}})),d.computed=f}return{esModule:c,exports:r,options:d}}},function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=function(t){return!isNaN(parseFloat(t))&&isFinite(t)};e.default={props:{val:{default:0},max:{default:100},size:{default:3},"bg-color":{type:String,default:"#eee"},"bar-color":{type:String,default:"#2196f3"},"bar-transition":{type:String,default:"all 0.5s ease"},"bar-border-radius":{type:Number,default:0},spacing:{type:Number,default:4},text:{type:String,default:""},"text-align":{type:String,default:"center"},"text-position":{type:String,default:"bottom"},"font-size":{type:Number,default:13},"text-fg-color":{type:String,default:"#222"}},computed:{pct:function(){var t=this.val/this.max*100;return t=t.toFixed(2),Math.min(t,this.max)},size_px:function(){switch(this.size){case"tiny":return 2;case"small":return 4;case"medium":return 8;case"large":return 12;case"big":return 16;case"huge":return 32;case"massive":return 64}return n(this.size)?this.size:32},text_padding:function(){switch(this.size){case"tiny":case"small":case"medium":case"large":case"big":case"huge":case"massive":return Math.min(Math.max(Math.ceil(this.size_px/8),3),12)}return n(this.spacing)?this.spacing:4},text_font_size:function(){switch(this.size){case"tiny":case"small":case"medium":case"large":case"big":case"huge":case"massive":return Math.min(Math.max(Math.ceil(1.4*this.size_px),11),32)}return n(this.fontSize)?this.fontSize:13},progress_style:function(){var style={background:this.bgColor};return"middle"!=this.textPosition&&"inside"!=this.textPosition||(style.position="relative",style["min-height"]=this.size_px+"px",style["z-index"]="-2"),this.barBorderRadius>0&&(style["border-radius"]=this.barBorderRadius+"px"),style},bar_style:function(){var style={background:this.barColor,width:this.pct+"%",height:this.size_px+"px",transition:this.barTransition};return this.barBorderRadius>0&&(style["border-radius"]=this.barBorderRadius+"px"),"middle"!=this.textPosition&&"inside"!=this.textPosition||(style.position="absolute",style.top="0",style.height="100%",style["min-height"]=this.size_px+"px",style["z-index"]="-1"),style},text_style:function(){var style={color:this.textFgColor,"font-size":this.text_font_size+"px","text-align":this.textAlign};return"top"!=this.textPosition&&"middle"!=this.textPosition&&"inside"!=this.textPosition||(style["padding-bottom"]=this.text_padding+"px"),"bottom"!=this.textPosition&&"middle"!=this.textPosition&&"inside"!=this.textPosition||(style["padding-top"]=this.text_padding+"px"),style}}}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[t.text.length>0&&"top"==t.textPosition?o("div",{staticClass:"vue-simple-progress-text",style:t.text_style},[t._v(t._s(t.text))]):t._e(),t._v(" "),o("div",{staticClass:"vue-simple-progress",style:t.progress_style},[t.text.length>0&&"middle"==t.textPosition?o("div",{staticClass:"vue-simple-progress-text",style:t.text_style},[t._v(t._s(t.text))]):t._e(),t._v(" "),t.text.length>0&&"inside"==t.textPosition?o("div",{staticStyle:{position:"relative",left:"-9999px"},style:t.text_style},[t._v(t._s(t.text))]):t._e(),t._v(" "),o("div",{staticClass:"vue-simple-progress-bar",style:t.bar_style},[t.text.length>0&&"inside"==t.textPosition?o("div",{style:t.text_style},[t._v(t._s(t.text))]):t._e()])]),t._v(" "),t.text.length>0&&"bottom"==t.textPosition?o("div",{staticClass:"vue-simple-progress-text",style:t.text_style},[t._v(t._s(t.text))]):t._e()])},staticRenderFns:[]}}]).default},t.exports=n()},230:function(t,e,o){"use strict";o(203)},231:function(t,e,o){var n=o(78),c=o(232),r=o(233),l=n(!1),d=c(r);l.push([t.i,'.wrapper{width:100%!important;overflow:hidden;margin:0 auto;font-family:"Source Sans Pro",sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;text-align:center;color:#2c3e50;height:100vh;position:relative;justify-content:center;align-items:flex-end}.wrapper,body{max-width:426px}body{margin:0 auto!important}.lookbook-container,.section{position:relative}.section{overflow:hidden;width:100%;min-height:100vh}.bricsa-square{display:block;position:absolute;right:0;top:20px;width:50px;height:50px;background:#e40524;z-index:99}.section-bg{height:100%;-o-object-fit:cover;object-fit:cover;position:absolute;z-index:-1;left:-100%}#section01,#section02,#section03,#section05,#section06,#section07,#section08,#section10,#section11,#section12,#section13,#section14,#section15{top:0;position:absolute!important;transition-timing-function:ease;transition-duration:.1s}#section01{z-index:13}#section02{z-index:12}#section03{z-index:11}#section05{z-index:10}#section06{z-index:9}#section07{z-index:8}#section08{z-index:7}#section10{z-index:6}#section11{z-index:5}#section12{z-index:4}#section13{z-index:3}#section14{z-index:2}#section15{z-index:1}.loading{transition:all both 1s;background:#e40524;z-index:100;position:absolute;display:grid;grid-template-rows:repeat(2,-webkit-min-content);grid-template-rows:repeat(2,min-content);grid-row-gap:20px;row-gap:20px;justify-content:center;justify-items:center;align-items:center;align-content:center;width:100%;height:100%}.loading img{animation:breath 1s infinite alternate-reverse both;width:40%}.loading .loadingBar{width:60%}@-webkit-keyframes breath{0%{transform:scale(.9)}to{transform:scale(1)}}@keyframes breath{0%{transform:scale(.9)}to{transform:scale(1)}}.instructions{background:#e40524;position:relative;top:0;left:0;width:100%;height:100%;display:grid;grid-template-rows:-webkit-min-content 80px -webkit-min-content;grid-template-rows:min-content 80px min-content;justify-content:center;justify-items:center;align-content:center;align-items:center;grid-row-gap:30px;row-gap:30px;z-index:14}.instructions p{color:#fff;font-size:26px;width:90%;text-align:center;font-weight:300}.instructions img{width:10%;animation:arrow-down .5s infinite alternate-reverse both}@-webkit-keyframes arrow-down{0%{margin-top:0}to{margin-top:10px}}@keyframes arrow-down{0%{margin-top:0}to{margin-top:10px}}.instructions .instructions_btn{color:#fff;background:transparent;border:2px solid #fff;border-radius:10px;padding:10px;cursor:pointer;transition:.4s}.instructions .instructions_btn:hover{background:#b9041c}.section01-container #section-bg01{width:100%;height:100vh;background:url('+d+") no-repeat}.section01-container .move{-webkit-animation:section01-bg 2s ease-in-out forwards;animation:section01-bg 2s ease-in-out forwards}.section01-container .section-01{background:rgba(0,0,0,.3);width:100%;height:100%;position:absolute;display:block;top:0;left:0;z-index:1}.section01-container .section-01 .section-logo{width:100px;position:absolute;top:50px;left:20px}.section01-container .section-01 .call{transition:all .4s;text-align:left;width:70%;color:#fff;font-size:60px;font-weight:bolder;line-height:.8;position:absolute;bottom:36%;left:20px}.section01-container .section-01 .downgrade{text-align:left;width:70%;color:#fff;font-size:30px;font-weight:300;line-height:.8;position:absolute;bottom:25%;left:20px}.section01-container .section-01 #section1_vivelo{transform:rotate(-90deg);font-size:180px;position:absolute;right:-200px;margin:0;font-weight:bolder;color:#fff;top:100%}@-webkit-keyframes section01-bg{0%{background-position-x:0}to{background-position-x:-470px}}@keyframes section01-bg{0%{background-position-x:0}to{background-position-x:-470px}}.section02-container{position:relative}.section02-container .section-02{position:absolute;width:80%;height:75%;left:10%;top:13.5%}.section02-container .section-02 img{width:100%;height:100%;-o-object-fit:cover;object-fit:cover;filter:brightness(.7)}.section02-container .section-02 .title{position:absolute;color:#fff;width:100%;font-size:70px;text-align:center;bottom:30%;font-weight:800;line-height:.9}.section02-container .section-02 .subtitle{bottom:-100%;opacity:0;position:absolute;color:#fff;width:100%;font-weight:300;font-size:40px;text-align:center;line-height:1}.section-03{position:relative}.section03-container .section-bg{position:absolute;z-index:3;height:100vh;top:0;left:0}.section03-container .disfruta{position:absolute;top:0;left:90%;z-index:2}.section03-container .section-bg02{position:absolute;z-index:1;height:100vh;top:0;left:0}.section03-container .section-03{background:rgba(0,0,0,.3);width:100%;height:100%;position:absolute;display:block;top:0;left:0;z-index:3;display:grid;align-items:center;justify-content:center}.section03-container .section-03 .title{position:absolute;color:#fff;width:80%;font-size:60px;text-align:center;bottom:32%;left:10%;font-weight:800;line-height:.9;z-index:3}.section03-container .section-03 .subtitle{left:10%}.section03-container .section-03 .subtitle,.section03-container .section-03 .subtitle02{position:absolute;color:#fff;width:80%;font-size:30px;font-weight:300;text-align:center;bottom:20%;line-height:1;z-index:3}.section03-container .section-03 .subtitle02{left:100%}.section05-container .section-bg{height:100%;-o-object-fit:cover;object-fit:cover;position:absolute;z-index:-1;left:0}.section05-container .section-05{background:rgba(0,0,0,.3);width:100%;height:100%;position:absolute;display:block;top:0;left:0;z-index:1}.section05-container .section-05 .title{position:absolute;color:#fff;width:90%;font-size:40px;text-align:center;top:5%;opacity:0;left:5%;font-weight:800;line-height:.9;filter:blur(100px)}.section05-container .section-05 .subtitle{position:absolute;color:#fff;width:80%;font-size:30px;font-weight:300;text-align:center;top:20%;opacity:0;left:10%;line-height:1;filter:blur(100px)}.section05-container .section-05 .imgcut{filter:brightness(.7);width:60%;height:55%;-o-object-fit:cover;object-fit:cover;-o-object-position:center;object-position:center;position:absolute;bottom:0;right:-60%}.section06-container .section-06 .imgtop{filter:brightness(.7);height:45%;width:180%;position:absolute;top:0;left:0;-o-object-fit:cover;object-fit:cover;-o-object-position:-240px center;object-position:-240px center}.section06-container .section-06 .imgbottom{height:55%;width:270%;position:absolute;bottom:0;left:-70%;-o-object-fit:cover;object-fit:cover}.section06-container .section-06 .title{position:absolute;color:#fff;width:90%;font-size:50px;text-align:center;top:5%;left:-80%;font-weight:300;line-height:.9}.section06-container .section-06 .subtitle{position:absolute;color:#fff;width:80%;font-size:30px;font-weight:300;text-align:center;top:20%;left:100%;line-height:1}.section07-container .section-bg{left:-10%}.section07-container .section-07{background:rgba(0,0,0,.3);width:100%;height:100%;position:absolute;display:block;top:0;left:0;z-index:1}.section07-container .section-07 .imgcut{width:40%;height:25%;-o-object-fit:cover;object-fit:cover;position:absolute;left:-50%;bottom:25%}.section07-container .section-07 .title{position:absolute;color:#fff;width:90%;font-size:30px;text-align:center;top:70%;left:5%;font-weight:300;line-height:.9;opacity:0}.section07-container .section-07 .subtitle{position:absolute;color:#fff;width:80%;font-size:100px;font-weight:800;text-align:center;top:70%;left:10%;line-height:1;opacity:0}.section07-container .section-07 .downgrade{position:absolute;color:#fff;width:80%;font-size:26px;left:10%;font-weight:300;bottom:0;opacity:0}.section08-container .section-bg{position:absolute;height:100vh;filter:brightness(.7);z-index:0;left:-180%}.section08-container .section-bg02{position:absolute;height:100vh;filter:brightness(.7);z-index:-1;left:-100%}.section08-container .section-08{color:#fff}.section08-container .section-08 .title{position:absolute;color:#fff;width:90%;font-size:50px;text-align:center;bottom:17%;left:5%;font-weight:800;line-height:.9;filter:blur(20px);opacity:0}.section08-container .section-08 .subtitle{position:absolute;color:#fff;width:80%;font-size:22px;font-weight:300;text-align:center;bottom:5%;left:10%;line-height:1;filter:blur(20px);opacity:0}.section08-container .section-08 .title02{position:absolute;color:#fff;width:90%;font-size:40px;text-align:center;top:3%;left:5%;font-weight:800;line-height:.9;filter:blur(20px);opacity:0}.section08-container .section-08 .subtitle02{position:absolute;color:#fff;width:80%;font-size:26px;font-weight:300;text-align:center;top:16%;left:10%;line-height:1;filter:blur(20px);opacity:0}.section10-container .section-bg{position:absolute;height:100vh;filter:brightness(.7);left:0}.section10-container .section-10{color:#fff}.section10-container .section-10 .title{position:absolute;color:#fff;width:90%;font-size:60px;text-align:center;top:3%;left:5%;font-weight:800;line-height:.9;filter:blur(20px);opacity:0}.section10-container .section-10 .subtitle{position:absolute;color:#fff;width:80%;font-size:26px;font-weight:300;text-align:center;bottom:10%;left:10%;line-height:1;filter:blur(20px);opacity:0}.section11-container .section-bg{filter:brightness(.7)}.section11-container .section-11{color:#fff}.section11-container .section-11 .section-11__img01,.section11-container .section-11 .section-11__img02{filter:brightness(.7);position:absolute;top:0;left:0;-o-object-fit:cover;object-fit:cover;width:75%;height:90%}.section11-container .section-11 .section-11__img01{z-index:1;left:0}.section11-container .section-11 .section-11__img02{-o-object-position:10%;object-position:10%}.section11-container .section-11 .title{z-index:2;position:absolute;width:80%;left:10%;text-align:left;bottom:0;font-size:50px;font-weight:300;opacity:0}.section11-container .section-11 .subtitle{z-index:2;position:absolute;width:80%;left:10%;bottom:-15%;font-size:70px;font-weight:800;text-align:right;opacity:0}.section11-container .section-11 .downgrade{z-index:2;position:absolute;bottom:0;font-size:30px;width:80%;left:10%;text-align:center;opacity:0}.section12-container .section-bg{left:-20%;-o-object-position:100%;object-position:100%;filter:brightness(.7)}.section12-container .section-12{color:#fff}.section12-container #section12-content{z-index:2;position:absolute;width:80%;left:10%;top:-10%;opacity:0}.section12-container .section-12 .title{font-size:50px;font-weight:300;line-height:.9}.section12-container .section-12 .subtitle{font-size:70px;font-weight:800}.section12-container .section-12 .downgrade{font-size:30px;width:100%;font-weight:300}.section13-container .section-bg{position:absolute;height:100%;filter:brightness(.7);left:-100%}.section13-container .section-13{color:#fff}.section13-container .section-13 .entorno{height:150px;position:absolute;top:1%;left:80%}.section13-container .section-13 .title{z-index:2;position:absolute;width:80%;left:10%;bottom:66%;font-size:40px;font-weight:300}.section13-container .section-13 .subtitle{z-index:2;position:absolute;width:80%;left:10%;bottom:53%;font-size:50px;font-weight:800;line-height:.9}.section13-container .section-13 .downgrade{z-index:2;position:absolute;bottom:39%;font-size:22px;width:80%;left:10%;font-weight:300;filter:blur(100px);opacity:0}.section13-container .section-13 .fachada{position:absolute;bottom:3%;left:10%;width:80%;height:30%;-o-object-fit:cover;object-fit:cover;-o-object-position:bottom;object-position:bottom}.section14-container .section-bg{filter:brightness(1)}.section14-container .section-14{color:#fff;position:absolute;width:100%;height:100%;top:90%;left:0;opacity:0}.section14-container .section-14 .section-14__img01{z-index:2;filter:brightness(.7);width:60%;height:30%;-o-object-fit:cover;object-fit:cover;position:absolute;top:0;right:10%}.section14-container .section-14 .section-14__img02{filter:brightness(.7);position:absolute;width:70%;height:80%;-o-object-fit:cover;object-fit:cover;left:15%;top:10%}.section14-container .section-14 .section-14__img03{z-index:2;width:60%;height:30%;-o-object-fit:cover;object-fit:cover;position:absolute;bottom:0;left:10%}.section14-container .section-14 .title{z-index:2;position:absolute;width:80%;left:20%;text-align:left;top:28%;font-size:50px;font-weight:800;line-height:1}.section14-container .section-14 .subtitle{z-index:2;position:absolute;width:80%;left:20%;top:55%;font-size:20px;text-align:left;font-weight:300}.section14-container .enter{top:0;opacity:1}.section15-container .section-bg{height:100vh}.section15-container img{width:40%;position:absolute;left:30%;bottom:20%}.section16-container{background:#e40524;display:flex}.section16-container .section-16{display:grid;height:100%;grid-template-columns:100%;grid-template-rows:repeat(2,-webkit-min-content);grid-template-rows:repeat(2,min-content);grid-row-gap:30px;row-gap:30px;justify-content:center;justify-items:center;align-items:center;align-content:center;align-self:center}.section16-container .section-16 .logo{width:60%}.section16-container .section-16 .bptl{width:40%}@media screen and (max-width:376px){.section01-container .section-01 .call{font-size:50px;bottom:40%}.section01-container .section-01 #section1_vivelo{font-size:150px;right:-160px}.section02-container .section-02 .title{font-size:50px}.section03-container .section-03 .title{font-size:40px}.section03-container .section-03 .subtitle,.section03-container .section-03 .subtitle02{font-size:25px;bottom:15%}.section08-container .section-08 .subtitle02{top:18%}.section13-container .section-13 .title{font-size:38px}}@media screen and (max-width:321px){.section01-container .section-01 .call{font-size:40px}.section01-container .section-01 #section1_vivelo{font-size:150px;right:-160px}.section02-container .section-02 .subtitle{font-size:30px}.section05-container .section-05 .subtitle{top:21%}.section06-container .section-06 .subtitle{font-size:26px;top:23%}.section07-container .section-07 .subtitle{font-size:80px}.section12-container .section-12 .subtitle{font-size:50px}.section13-container .section-13 .title{font-size:32px;bottom:63%}.section13-container .section-13 .subtitle{font-size:33px;bottom:55%}.section13-container .section-13 .downgrade{font-size:20px}}",""]),t.exports=l},232:function(t,e,o){"use strict";t.exports=function(t,e){return e||(e={}),"string"!=typeof(t=t&&t.__esModule?t.default:t)?t:(/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),e.hash&&(t+=e.hash),/["'() \t\n]/.test(t)||e.needQuotes?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t)}},233:function(t,e,o){t.exports=o.p+"img/01.789d18f.jpg"},234:function(t,e,o){"use strict";o.r(e);var n=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("p",{staticClass:"call"},[t._v("\n          Vívelo por "),o("br"),t._v("\n          dentro y"),o("br"),t._v("\n          por fuera\n        ")])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("p",{staticClass:"downgrade"},[t._v("\n          Sal a vivir tu "),o("br"),t._v("\n          nuevo departamento.\n        ")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"section-02"},[n("img",{attrs:{lazyload:"",src:o(209)}}),t._v(" "),n("p",{staticClass:"title"},[t._v("Date una vuelta y respira")]),t._v(" "),n("p",{staticClass:"subtitle",attrs:{id:"section02_subtitle"}},[t._v("\n          ¡Está rodeado de áreas verdes!\n        ")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"section section03-container",attrs:{id:"section03"}},[n("img",{staticClass:"section-bg",attrs:{lazyload:"",id:"section03_bg01",src:o(210),alt:""}}),t._v(" "),n("img",{staticClass:"disfruta",attrs:{lazyload:"",id:"section03_disfruta",src:o(211)}}),t._v(" "),n("img",{staticClass:"section-bg02",attrs:{lazyload:"",id:"section03_bg02",src:o(212),alt:""}}),t._v(" "),n("div",{staticClass:"section-03"},[n("p",{staticClass:"title"},[t._v("\n          Disfruta "),n("br"),t._v("\n          tu terraza "),n("br"),t._v("y tu plaza\n        ")]),t._v(" "),n("p",{staticClass:"subtitle",attrs:{id:"section03_subtitle01"}},[t._v("\n          Depto. con opción a terraza privada.\n        ")]),t._v(" "),n("p",{staticClass:"subtitle02",attrs:{id:"section03_subtitle02"}},[t._v("\n          Frente a Plaza Zañartu y cercano a otros parques.\n        ")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"section section05-container",attrs:{id:"section05"}},[n("img",{staticClass:"section-bg",attrs:{lazyload:"",id:"section05_bg",src:o(213)}}),t._v(" "),n("div",{staticClass:"section-05"},[n("p",{staticClass:"title",attrs:{id:"section05_title"}},[t._v("\n          ¡Siempre algo "),n("br"),t._v("\n          que hacer!\n        ")]),t._v(" "),n("p",{staticClass:"subtitle",attrs:{id:"section05_subtitle"}},[t._v("\n          Múltiples espacios "),n("br"),t._v("\n          y áreas comunes.\n        ")]),t._v(" "),n("img",{staticClass:"imgcut",attrs:{lazyload:"",id:"section05_imgcut",src:o(214)}})])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"section section06-container",attrs:{id:"section06"}},[n("div",{staticClass:"section-06"},[n("img",{staticClass:"imgtop",attrs:{lazyload:"",src:o(215)}}),t._v(" "),n("p",{staticClass:"title",attrs:{id:"section06_title"}},[t._v("\n          ¡Que rico "),n("br"),t._v(" "),n("strong",[t._v("vivir así!")])]),t._v(" "),n("p",{staticClass:"subtitle",attrs:{id:"section06_subtitle"}},[t._v("\n          Salón lounge"),n("br"),t._v("\n          para lucirte con"),n("br"),t._v("\n          tus amigos.\n        ")]),t._v(" "),n("img",{staticClass:"imgbottom",attrs:{lazyload:"",id:"section06_imgbottom",src:o(201)}})])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"section section07-container",attrs:{id:"section07"}},[n("img",{staticClass:"section-bg",attrs:{lazyload:"",id:"section07_bg",src:o(216)}}),t._v(" "),n("div",{staticClass:"section-07"},[n("p",{staticClass:"title",attrs:{id:"section07_title"}},[t._v("El espacio perfecto")]),t._v(" "),n("p",{staticClass:"subtitle",attrs:{id:"section07_subtitle"}},[t._v("\n          para "),n("br"),t._v("\n          ser tú\n        ")]),t._v(" "),n("img",{staticClass:"imgcut",attrs:{id:"section07_imgcut",lazyload:"",src:o(217)}}),t._v(" "),n("p",{staticClass:"downgrade",attrs:{id:"section07_downgrade"}},[t._v("\n          Diseño Flexible a la medida de cómo quieras vivir.\n        ")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"section section08-container",attrs:{id:"section08"}},[n("img",{staticClass:"section-bg",attrs:{lazyload:"",id:"section08_bg",src:o(202)}}),t._v(" "),n("img",{staticClass:"section-bg02",attrs:{lazyload:"",id:"section08_bg02",src:o(218)}}),t._v(" "),n("div",{staticClass:"section-08"},[n("p",{staticClass:"title",attrs:{id:"section08_title"}},[t._v("\n          ¿Quedarse"),n("br"),t._v("\n          en cama?"),n("br"),t._v("\n          ¡Buena idea!\n        ")]),t._v(" "),n("p",{staticClass:"title02",attrs:{id:"section08_title02"}},[t._v("\n          Un picoteo ¡y a relajarse!\n        ")]),t._v(" "),n("p",{staticClass:"subtitle",attrs:{id:"section08_subtitle"}},[t._v("\n          Ventanas termopanel con marco PVC (aislación térmica y acústica).\n        ")]),t._v(" "),n("p",{staticClass:"subtitle02",attrs:{id:"section08_subtitle02"}},[t._v("\n          Cocina abierta y conectada con el living.\n        ")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"section section10-container",attrs:{id:"section10"}},[n("img",{staticClass:"section-bg",attrs:{id:"section10_bg",lazyload:"",src:o(219)}}),t._v(" "),n("div",{staticClass:"section-10"},[n("p",{staticClass:"title",attrs:{id:"section10_title"}},[t._v("\n          Muévete"),n("br"),t._v("\n          indoor o"),n("br"),t._v("\n          outdoor\n        ")]),t._v(" "),n("p",{staticClass:"subtitle",attrs:{id:"section10_subtitle"}},[t._v("\n          Gimnasio interior"),n("br"),t._v("\n          con salida al jardín.\n        ")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"section-11"},[n("p",{staticClass:"title",attrs:{id:"section11_title"}},[t._v("Así da gusto")]),t._v(" "),n("p",{staticClass:"subtitle",attrs:{id:"section11_subtitle"}},[t._v("trabajar")]),t._v(" "),n("p",{staticClass:"downgrade",attrs:{id:"section11_downgrade"}},[t._v("Zonas Cowork.")]),t._v(" "),n("img",{staticClass:"section-11__img01",attrs:{id:"section11_img01",lazyload:"",src:o(201)}}),t._v(" "),n("img",{staticClass:"section-11__img02",attrs:{lazyload:"",src:o(220)}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"section section12-container",attrs:{id:"section12"}},[n("img",{staticClass:"section-bg",attrs:{id:"section12_bg",lazyload:"",src:o(221)}}),t._v(" "),n("div",{staticClass:"section-12",attrs:{id:"section12-content"}},[n("p",{staticClass:"title",attrs:{id:"section12_title"}},[t._v("Recibe lo que quieras")]),t._v(" "),n("p",{staticClass:"subtitle",attrs:{id:"section12_subtitle"}},[t._v("tranquilo")]),t._v(" "),n("p",{staticClass:"downgrade",attrs:{id:"section12_downgrade"}},[t._v("Smart lockers.")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"section section13-container",attrs:{id:"section13"}},[n("img",{staticClass:"section-bg",attrs:{id:"section13_bg",lazyload:"",src:o(222)}}),t._v(" "),n("div",{staticClass:"section-13"},[n("img",{staticClass:"entorno",attrs:{id:"section13_entorno",lazyload:"",src:o(223)}}),t._v(" "),n("p",{staticClass:"title"},[t._v("¡Mantengamos viva")]),t._v(" "),n("p",{staticClass:"subtitle"},[t._v("la vida de barrio!")]),t._v(" "),n("p",{staticClass:"downgrade",attrs:{id:"section13_downgrade"}},[t._v("\n          Ubicado en un barrio tradicional de Ñuñoa, cercano a todo lo que\n          necesitas.\n        ")]),t._v(" "),n("img",{staticClass:"fachada",attrs:{lazyload:"",src:o(224)}})])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"section-14",attrs:{id:"section14-14"}},[n("img",{staticClass:"section-14__img01",attrs:{lazyload:"",src:o(202)}}),t._v(" "),n("p",{staticClass:"title"},[t._v("\n          Vívelo"),n("br"),t._v("\n          por dentro"),n("br"),t._v("\n          y por fuera\n        ")]),t._v(" "),n("p",{staticClass:"subtitle"},[t._v("\n          La llave para comenzar"),n("br"),t._v("\n          a disfrutarlo"),n("br"),t._v("\n          la tienes tú.\n        ")]),t._v(" "),n("img",{staticClass:"section-14__img02",attrs:{lazyload:"",src:o(225)}}),t._v(" "),n("img",{staticClass:"section-14__img03",attrs:{lazyload:"",src:o(226)}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"section section16-container"},[n("div",{staticClass:"section-16"},[n("img",{staticClass:"logo",attrs:{lazyload:"",src:o(227)}}),t._v(" "),n("img",{staticClass:"bptl",attrs:{lazyload:"",src:o(228)}})])])}],c=(o(55),o(229)),r={components:{ProgressBar:o.n(c).a},data:function(){return{isLoading:!0,increasing_pct:0,isCover:!0}},mounted:function(){this.startAnimations()},methods:{startAnimations:function(){var t=new TimelineMax({onUpdate:function(){t.progress()}});t.to("#bricsa-square",45,{top:"90%"},0),t.to("#section-bg01",1,{"background-position-x":"-470px"},0),t.to("#section1_vivelo",1,{top:"20%"},0),t.to("#section01",1,{top:"-100%"},1),t.to("#section02_subtitle",1,{bottom:"10%",opacity:"1"},1),t.to("#section02",1,{top:"-100%"},2),t.to("#section03_bg01",3,{left:"-330%"},3),t.to("#section03_subtitle01",2,{left:"-100%"},3.5),t.to("#section03_subtitle02",2,{left:"10%"},4),t.to("#section03_bg02",2,{left:"-100%"},4),t.to("#section03_disfruta",4,{left:"-160%"},4),t.to("#section03",1,{top:"-100%"},7),t.to("#section05_bg",2,{left:"-100%"},8),t.to("#section05_title",1,{opacity:1,filter:"blur(0)"},8),t.to("#section05_subtitle",1,{opacity:1,filter:"blur(0)"},8),t.to("#section05_imgcut",1,{right:"0%"},8),t.to("#section05",1,{top:"-100%"},10),t.to("#section06_title",1,{left:"5%"},11),t.to("#section06_subtitle",1,{left:"10%"},11),t.to("#section06_imgbottom",1,{left:"0"},11),t.to("#section06",1,{top:"-100%"},12),t.to("#section07_bg",3,{left:"-200%"},13),t.to("#section07_title",1,{top:"3%",opacity:"1"},14),t.to("#section07_subtitle",1,{top:"8%",opacity:"1"},14),t.to("#section07_downgrade",1,{bottom:"5%",opacity:"1"},14),t.to("#section07_imgcut",1,{left:"0"},14),t.to("#section07",1,{top:"-100%"},16),t.to("#section08_bg",4,{left:"160%"},17),t.to("#section08_title",1,{filter:"blur(0)",opacity:"1"},17),t.to("#section08_subtitle",1,{filter:"blur(0)",opacity:"1"},17),t.to("#section08_bg02",4,{left:"-350%"},20),t.to("#section08_title",1,{filter:"blur(20px)",opacity:"0"},20),t.to("#section08_subtitle",1,{filter:"blur(20px)",opacity:"0"},20),t.to("#section08_title02",1,{filter:"blur(0)",opacity:"1"},20),t.to("#section08_subtitle02",1,{filter:"blur(0)",opacity:"1"},20),t.to("#section08",1,{top:"-100%"},23),t.to("#section10_bg",2,{left:"-120%"},24),t.to("#section10_title",1,{filter:"blur(0)",opacity:"1"},24),t.to("#section10_subtitle",1,{filter:"blur(0)",opacity:"1"},24),t.to("#section10",1,{top:"-100%"},26),t.to("#section11_title",1,{bottom:"30%",opacity:"1"},27),t.to("#section11_subtitle",1,{bottom:"19%",opacity:"1"},27),t.to("#section11_downgrade",1,{bottom:"16%",opacity:"1"},27),t.to("#section11_img01",2,{left:"-75%"},28),t.to("#section11",1,{top:"-100%"},30),t.to("#section12_bg",1,{left:"-120%"},31),t.to("#section12-content",1,{top:"5%",opacity:"1"},31),t.to("#section12",1,{top:"-100%"},33),t.to("#section13_bg",1,{left:"-70%"},34),t.to("#section13_entorno",4,{left:"-100%"},34),t.to("#section13_downgrade",1,{filter:"blur(0)",opacity:"1"},34),t.to("#section13",1,{top:"-100%"},38),t.to("#section14-14",1,{top:"0",opacity:"1"},39),t.to("#section14",1,{top:"-100%"},40),t.to("#section15",1,{top:"-100%"},41);var e=this.$scrollmagic.scene({triggerElement:".wrapper",triggerHook:0,duration:"5000%"}).setPin(".wrapper").setTween(t);this.$scrollmagic.addScene(e)},load:function(){var t=this;this.isLoading=!0,setTimeout((function(){t.isLoading=!1}),5e3)}},created:function(){var t=this;this.load(),setInterval((function(){t.is_paused||(t.increasing_pct=Math.min(t.increasing_pct+1,100))}),23)}},l=(o(230),o(41)),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"wrapper"},[t.isLoading?n("div",{staticClass:"loading"},[n("img",{attrs:{lazyload:"",src:o(200)}}),t._v(" "),n("progress-bar",{staticClass:"loadingBar",attrs:{"bar-color":"#fff","bg-color":"#e40524","text-fg-color":"#fff",size:"medium",val:t.increasing_pct,text:t.increasing_pct+"%"}})],1):t._e(),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:t.isCover,expression:"isCover"}],staticClass:"instructions"},[n("p",[t._v("Disfruta una navegación única, deslizando hacia abajo")]),t._v(" "),n("img",{attrs:{src:o(204)}}),t._v(" "),n("button",{staticClass:"instructions_btn",on:{click:function(e){t.isCover=!t.isCover}}},[t._v("\n        Empezar a navegar\n      ")])]),t._v(" "),n("span",{staticClass:"bricsa-square",attrs:{id:"bricsa-square"}}),t._v(" "),n("div",{staticClass:"section section01-container",attrs:{id:"section01"}},[n("div",{staticClass:"section-01"},[n("div",{class:{move:!t.isCover},attrs:{id:"section-bg01"}}),t._v(" "),n("img",{staticClass:"section-logo",attrs:{lazyload:"",src:o(200)}}),t._v(" "),t._m(0),t._v(" "),t._m(1),t._v(" "),n("p",{staticClass:"uptext",attrs:{id:"section1_vivelo"}},[t._v("Vívelo")])])]),t._v(" "),n("div",{staticClass:"section section02-container",attrs:{id:"section02"}},[n("video",{staticClass:"section-bg",attrs:{autoplay:"",muted:"",loop:"",playsinline:"",preload:"auto"},domProps:{muted:!0}},[n("source",{attrs:{src:o(205),type:"video/mp4"}})]),t._v(" "),t._m(2)]),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),n("div",{staticClass:"section section11-container",attrs:{id:"section11"}},[n("video",{staticClass:"section-bg",attrs:{autoplay:"",muted:"",loop:"",playsinline:"",preload:"auto"},domProps:{muted:!0}},[n("source",{attrs:{src:o(206),type:"video/mp4"}})]),t._v(" "),t._m(9)]),t._v(" "),t._m(10),t._v(" "),t._m(11),t._v(" "),n("div",{staticClass:"section section14-container",attrs:{id:"section14"}},[n("video",{staticClass:"section-bg",attrs:{autoplay:"",muted:"",loop:"",playsinline:"",preload:"auto"},domProps:{muted:!0}},[n("source",{attrs:{src:o(207),type:"video/mp4"}})]),t._v(" "),t._m(12)]),t._v(" "),n("div",{staticClass:"section section15-container",attrs:{id:"section15"}},[n("video",{staticClass:"section-bg",attrs:{autoplay:"",muted:"",loop:"",playsinline:"",preload:"auto"},domProps:{muted:!0}},[n("source",{attrs:{src:o(208),type:"video/mp4"}})]),t._v(" "),n("img",{attrs:{lazyload:"",src:o(200)}})]),t._v(" "),t._m(13)])])}),n,!1,null,null,null);e.default=component.exports}}]);