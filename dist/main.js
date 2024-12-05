(()=>{"use strict";var n={409:(n,e,i)=>{i.d(e,{A:()=>s});var l=i(601),t=i.n(l),d=i(314),a=i.n(d)()(t());a.push([n.id,"#gameTitle {\n    text-align: center;\n}\n\n#versusArea {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    place-items: center;\n}\n\n.mapArea {\n    width: calc(5rem + 60%);\n    aspect-ratio: 1 / 1;\n    display: grid;\n    grid-template-columns: repeat(10, 1fr);\n    grid-template-rows: repeat(10, 1fr);\n    background-color: black;\n    gap: 1px;\n    border: 1px solid black;\n    .highlight {\n        background-color: var(--mustard-yellow);\n    }\n    .blocked {\n        background-color: var(--light-grey);\n    }\n}\n\n#playerBattleGround {\n    & div {\n        background-color: var(--ocean-deep);\n    }\n}\n\n#CPUBattleGround {\n    & div {\n        background-color: white;\n        object-fit: contain;\n        aspect-ratio: 1 / 1;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        img {\n            max-width: 90%;\n            max-height: 90%;\n        }\n    }\n}\n#scoreCard {\n    display: grid;\n    place-items: center;\n    grid-template-columns: 1fr 1fr;\n    background-color: var(--dark-red);\n    color: white;\n    position: relative;\n    & div {\n        text-align: center;\n    }\n    #turnIndicator {\n        box-shadow: 0 0 1em 1.25em var(--ocean-deep);\n        background-color: var(--ocean-deep);\n        font-weight: 900;\n        position: fixed;\n    }\n}",""]);const s=a},153:(n,e,i)=>{i.d(e,{A:()=>s});var l=i(601),t=i.n(l),d=i(314),a=i.n(d)()(t());a.push([n.id,'/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n\nhtml {\n  line-height: 1.15; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\nbody {\n  margin: 0;\n}\n\nmain {\n  display: block;\n}\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\npre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\na {\n  background-color: transparent;\n}\n\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  text-decoration: underline dotted; /* 2 */\n}\n\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n\nsmall {\n  font-size: 80%;\n}\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\nimg {\n  border-style: none;\n}\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\nbutton,\ninput { /* 1 */\n  overflow: visible;\n}\n\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\n\nbutton,\n[type="button"],\n[type="reset"],\n[type="submit"] {\n  -webkit-appearance: button;\n}\n\nbutton::-moz-focus-inner,\n[type="button"]::-moz-focus-inner,\n[type="reset"]::-moz-focus-inner,\n[type="submit"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\nbutton:-moz-focusring,\n[type="button"]:-moz-focusring,\n[type="reset"]:-moz-focusring,\n[type="submit"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\nlegend {\n  box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\nprogress {\n  vertical-align: baseline;\n}\n\n\ntextarea {\n  overflow: auto;\n}\n\n\n[type="checkbox"],\n[type="radio"] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n\n[type="number"]::-webkit-inner-spin-button,\n[type="number"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n[type="search"] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n[type="search"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\ndetails {\n  display: block;\n}\n\nsummary {\n  display: list-item;\n}\n\ntemplate {\n  display: none;\n}\n\n[hidden] {\n  display: none;\n}\n',""]);const s=a},969:(n,e,i)=>{i.d(e,{A:()=>s});var l=i(601),t=i.n(l),d=i(314),a=i.n(d)()(t());a.push([n.id,"* {\n    margin: 0;\n    padding: 0;\n}\n\n:root {\n    --dark-red: rgb(214,20,20);\n    --mustard-yellow: rgb(249, 217, 35);\n    --light-grey: rgb(218, 218, 218);\n    --ocean-deep: rgb(64,106,201);\n}\n\nbody {\n    height: 100dvh;\n    width: 100dvw;\n    display: grid;\n    grid-template-rows: 0.75fr 6fr 1fr;\n}\n\n#instructions {\n    h3 {\n        font-weight: 900;\n    }\n    align-self: center;\n    display: grid;\n    place-items: center;\n}\n\n#mapInitialiser {\n    width: 100%;\n    height: 100%;\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    place-items: center;\n    #battleGround {\n        width: calc(5rem + 60%);\n        aspect-ratio: 1 / 1;\n        display: grid;\n        grid-template-columns: repeat(10, 1fr);\n        grid-template-rows: repeat(10, 1fr);\n        background-color: black;\n        gap: 1px;\n        border: 1px solid black;\n        & div {\n            background-color: var(--ocean-deep);\n        }\n        .highlight {\n            background-color: var(--mustard-yellow);\n        }\n        .blocked {\n            background-color: var(--light-grey);\n        }\n    }\n    #dockyard {\n        border: 1px solid black;\n        display: grid;\n        place-items: center;\n        width: calc(5rem + 60%);\n        aspect-ratio: 1 / 1;\n        & > div {\n            display: grid;\n            gap: 1px;\n            background-color: black;\n            border: 1px solid black;\n            & > div {\n                width: 100%;\n                height: 100%;\n                background-color: var(--light-grey);\n            }\n        }\n\n        .placed {\n            pointer-events: none;\n            & > div {\n                background-color: black;\n            }\n        }\n        .ship {\n            /*area divided into 5 regions because 5 ships, we need half of each of 5 for 10% height */\n            height: 50%;\n        }\n        .shipVertical {\n            width: 50%;\n        }\n\n        #Destroyer.ship {\n            width: 20%;\n            height: 50%;\n            grid-template-columns: repeat(2, 1fr);\n        }\n        #Submarine.ship {\n            width: 30%;\n            height: 50%;\n            grid-template-columns: repeat(3, 1fr);\n        }\n        #Cruiser.ship {\n            width: 30%;\n            height: 50%;\n            grid-template-columns: repeat(3, 1fr);\n        }\n        #Battleship.ship {\n            width: 40%;\n            height: 50%;\n            grid-template-columns: repeat(4, 1fr);\n        }\n        #Carrier.ship {\n            width: 50%;\n            height: 50%;\n            grid-template-columns: repeat(5, 1fr);\n        }\n\n        #Destroyer.shipVertical {\n            height: 20%;\n            width: 50%;\n            grid-template-rows: repeat(2, 1fr);\n        }\n        #Submarine.shipVertical {\n            height: 30%;\n            width: 50%;\n            grid-template-rows: repeat(3, 1fr);\n        }\n        #Cruiser.shipVertical {\n            height: 30%;\n            width: 50%;\n            grid-template-rows: repeat(3, 1fr);\n        }\n        #Battleship.shipVertical {\n            height: 40%;\n            width: 50%;\n            grid-template-rows: repeat(4, 1fr);\n        }\n        #Carrier.shipVertical {\n            height: 50%;\n            width: 50%;\n            grid-template-rows: repeat(5, 1fr);\n        }\n    }\n    .horizontal {\n        grid-template-rows: repeat(5, 1fr);\n        grid-template-columns: 1fr;\n    }\n    .vertical {\n        grid-template-columns: repeat(5, 1fr);\n        grid-template-rows: 1fr;\n    }\n}\n\n#commandArea {\n    background-color: var(--dark-red);\n    display: grid;\n    grid-template-columns: repeat(4, 1fr);\n    place-items: center;\n    button {\n        position: relative;\n        padding: 1em;\n        font-size: 1.5rem;\n        border: none;\n        border-radius: 0.5rem;\n        background-color: white;\n        box-shadow: 0.4rem 0.4rem 0 black;\n    }\n    button:active {\n        top: 0.3rem;\n        left: 0.3rem;\n        box-shadow: 0.2rem 0.2rem 0 black;\n    }\n    .unclickable {\n        pointer-events: none;\n        opacity: 0.5;\n    }\n    #undoLastPlacement {\n        grid-column: 2 / 3;\n    }\n    #startGame {\n        grid-column: 3 / 4;\n    }\n}",""]);const s=a},472:(n,e,i)=>{i.d(e,{A:()=>p});var l=i(601),t=i.n(l),d=i(314),a=i.n(d),s=i(417),r=i.n(s),o=new URL(i(344),i.b),c=a()(t()),v=r()(o);c.push([n.id,`@font-face {\n    font-family: "Nova Square";\n    src: url(${v});\n}\n\nbody {\n\tfont-size: 18px;\n    font-family: "Nova Square", display;\n\t--paragraph-space: 2rem;\n\t--title-space: 1rem;\n\tfont-weight: 400;\n}\n\n.space-text-above,\np + h1,\np + h2,\np + h3,\np + h4,\np + h5,\np + h6,\nh1 + h2,\nh2 + h3,\nh3 + h4,\nh4 + h5,\nh5 + h6 {\n\tmargin-top: var(--paragraph-space);\n}\n\nh1 + p,\nh2 + p,\nh3 + p,\nh4 + p,\nh5 + p,\nh6 + p {\n\tmargin-top: var(--title-space);\n}\n\np + p {\n\tmargin-top: var(--title-space);\n}\n\nh1 + p,\nh2 + p,\nh3 + p,\nh4 + p,\nh5 + p,\nh6 + p,\n.space-text-below {\n\tmargin-bottom: var(--paragraph-space);\n}\n\np.bold,\nspan.bold,\n.body-1.bold,\n.body-2.bold,\np .bold,\nspan .bold,\n.body-1 .bold,\n.body-2 .bold,\np strong,\nspan strong,\n.body-1 strong,\n.body-2 strong,\np b,\nspan b,\n.body-1 b,\n.body-2 b {\n\t\tfont-weight: 700;\n\t}\n\n\nh1, .title-1 ,h2, .title-2 ,h3, .title-3 ,h4, .title-4 ,h5, .title-5 ,h6, .title-6  {\n\t\tfont-style: normal;\n\t\ttext-transform: uppercase;\n\t}\n\n\tp,\n\n\nh1, .title-1 {\n    font-size: 38px;\n    line-height: 40px;\n    font-weight: 400;\n    letter-spacing: -0.003em;\n}\n\nh2, .title-2 {\n    font-size: 32px;\n    line-height: 40px;\n    font-weight: 400;\n    letter-spacing: -0.002em;\n}\n\nh3, .title-3 {\n    font-size: 28px;\n    line-height: 36px;\n    font-weight: 400;\n    letter-spacing: -0.001em;\n}\n\nh4, .title-4 {\n    font-size: 24px;\n    line-height: 36px;\n    font-weight: 400;\n    letter-spacing: -0.001em;\n}\n\nh5, .title-5 {\n    font-size: 22px;\n    line-height: 36px;\n    font-weight: 400;\n    letter-spacing: 0em;\n}\n\nh6, .title-6 {\n    font-size: 18px;\n    line-height: 32px;\n    font-weight: 400;\n    letter-spacing: 0em;\n}\n\np, button, .body-1 {\n    font-size: 14px;\n    line-height: 20px;\n    font-weight: 400;\n    letter-spacing: 0.001em;\n}\n\nlabel, figcaption, input, .body-2 {\n    font-size: 12px;\n    line-height: 20px;\n    font-weight: 400;\n    letter-spacing: 0.083em;\n}\n\n.tooltip {\n    font-size: 10px;\n    line-height: 16px;\n    font-weight: 400;\n    letter-spacing: 0.098em;\n}\n\n    \n    @media (min-width: 768px) {\n\t\tbody {\n\t\t\tfont-size: 16px;\n\t\t}\n\n        h1, .title-1 {\n            font-size: 76px;\n            line-height: 84px;\n        }\n        h2, .title-2 {\n            font-size: 62px;\n            line-height: 76px;\n        }\n        h3, .title-3 {\n            font-size: 48px;\n            line-height: 64px;\n        }\n        h4, .title-4 {\n            font-size: 40px;\n            line-height: 60px;\n        }\n        h5, .title-5 {\n            font-size: 32px;\n            line-height: 52px;\n        }\n        h6, .title-6 {\n            font-size: 26px;\n            line-height: 48px;\n        }\n        p, button, .body-1 {\n            font-size: 16px;\n            line-height: 24px;\n        }\n        label, figcaption, input, .body-2 {\n            font-size: 12px;\n            line-height: 20px;\n        }\n        .tooltip {\n            font-size: 10px;\n            line-height: 16px;\n        }\n        \n\n    }`,""]);const p=c},314:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var i="",l=void 0!==e[5];return e[4]&&(i+="@supports (".concat(e[4],") {")),e[2]&&(i+="@media ".concat(e[2]," {")),l&&(i+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),i+=n(e),l&&(i+="}"),e[2]&&(i+="}"),e[4]&&(i+="}"),i})).join("")},e.i=function(n,i,l,t,d){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(l)for(var s=0;s<this.length;s++){var r=this[s][0];null!=r&&(a[r]=!0)}for(var o=0;o<n.length;o++){var c=[].concat(n[o]);l&&a[c[0]]||(void 0!==d&&(void 0===c[5]||(c[1]="@layer".concat(c[5].length>0?" ".concat(c[5]):""," {").concat(c[1],"}")),c[5]=d),i&&(c[2]?(c[1]="@media ".concat(c[2]," {").concat(c[1],"}"),c[2]=i):c[2]=i),t&&(c[4]?(c[1]="@supports (".concat(c[4],") {").concat(c[1],"}"),c[4]=t):c[4]="".concat(t)),e.push(c))}},e}},417:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},601:n=>{n.exports=function(n){return n[1]}},72:n=>{var e=[];function i(n){for(var i=-1,l=0;l<e.length;l++)if(e[l].identifier===n){i=l;break}return i}function l(n,l){for(var d={},a=[],s=0;s<n.length;s++){var r=n[s],o=l.base?r[0]+l.base:r[0],c=d[o]||0,v="".concat(o," ").concat(c);d[o]=c+1;var p=i(v),h={css:r[1],media:r[2],sourceMap:r[3],supports:r[4],layer:r[5]};if(-1!==p)e[p].references++,e[p].updater(h);else{var C=t(h,l);l.byIndex=s,e.splice(s,0,{identifier:v,updater:C,references:1})}a.push(v)}return a}function t(n,e){var i=e.domAPI(e);return i.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;i.update(n=e)}else i.remove()}}n.exports=function(n,t){var d=l(n=n||[],t=t||{});return function(n){n=n||[];for(var a=0;a<d.length;a++){var s=i(d[a]);e[s].references--}for(var r=l(n,t),o=0;o<d.length;o++){var c=i(d[o]);0===e[c].references&&(e[c].updater(),e.splice(c,1))}d=r}}},659:n=>{var e={};n.exports=function(n,i){var l=function(n){if(void 0===e[n]){var i=document.querySelector(n);if(window.HTMLIFrameElement&&i instanceof window.HTMLIFrameElement)try{i=i.contentDocument.head}catch(n){i=null}e[n]=i}return e[n]}(n);if(!l)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");l.appendChild(i)}},540:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},56:(n,e,i)=>{n.exports=function(n){var e=i.nc;e&&n.setAttribute("nonce",e)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(i){!function(n,e,i){var l="";i.supports&&(l+="@supports (".concat(i.supports,") {")),i.media&&(l+="@media ".concat(i.media," {"));var t=void 0!==i.layer;t&&(l+="@layer".concat(i.layer.length>0?" ".concat(i.layer):""," {")),l+=i.css,t&&(l+="}"),i.media&&(l+="}"),i.supports&&(l+="}");var d=i.sourceMap;d&&"undefined"!=typeof btoa&&(l+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(d))))," */")),e.styleTagTransform(l,n,e.options)}(e,n,i)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},113:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},344:(n,e,i)=>{n.exports=i.p+"3bc6a718ca288efebb2d.ttf"}},e={};function i(l){var t=e[l];if(void 0!==t)return t.exports;var d=e[l]={id:l,exports:{}};return n[l](d,d.exports,i),d.exports}i.m=n,i.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return i.d(e,{a:e}),e},i.d=(n,e)=>{for(var l in e)i.o(e,l)&&!i.o(n,l)&&Object.defineProperty(n,l,{enumerable:!0,get:e[l]})},i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),i.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;i.g.importScripts&&(n=i.g.location+"");var e=i.g.document;if(!n&&e&&(e.currentScript&&"SCRIPT"===e.currentScript.tagName.toUpperCase()&&(n=e.currentScript.src),!n)){var l=e.getElementsByTagName("script");if(l.length)for(var t=l.length-1;t>-1&&(!n||!/^http(s?):/.test(n));)n=l[t--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),i.p=n})(),i.b=document.baseURI||self.location.href,i.nc=void 0;var l=i(72),t=i.n(l),d=i(825),a=i.n(d),s=i(659),r=i.n(s),o=i(56),c=i.n(o),v=i(540),p=i.n(v),h=i(113),C=i.n(h),g=i(153),u={};u.styleTagTransform=C(),u.setAttributes=c(),u.insert=r().bind(null,"head"),u.domAPI=a(),u.insertStyleElement=p(),t()(g.A,u),g.A&&g.A.locals&&g.A.locals;var f=i(472),m={};m.styleTagTransform=C(),m.setAttributes=c(),m.insert=r().bind(null,"head"),m.domAPI=a(),m.insertStyleElement=p(),t()(f.A,m),f.A&&f.A.locals&&f.A.locals;var y=i(969),b={};b.styleTagTransform=C(),b.setAttributes=c(),b.insert=r().bind(null,"head"),b.domAPI=a(),b.insertStyleElement=p(),t()(y.A,b),y.A&&y.A.locals&&y.A.locals;var P=i(409),U={};U.styleTagTransform=C(),U.setAttributes=c(),U.insert=r().bind(null,"head"),U.domAPI=a(),U.insertStyleElement=p(),t()(P.A,U),P.A&&P.A.locals&&P.A.locals;const x=document.querySelector("body");class w{constructor(n,e){this.name=e,this.length=n,this.placed=!1,this.cell=[-1,-1],this.alignment=-1}}const k=document.querySelector("#dockyard"),A=document.querySelectorAll('div[draggable="true"]'),z=document.querySelectorAll(".cell"),L=document.querySelector("#battleGround"),S=document.querySelector("#undoLastPlacement"),T=document.querySelector("#startGame");let E=[-1,-1],M=Array.from({length:10},(()=>Array(10).fill(0))),I=!1,R=[],B=!1,N={},q=0;L.addEventListener("dragover",(n=>{n.preventDefault(),I=!0})),L.addEventListener("dragleave",(()=>{I=!1}));const j={Destroyer:new w(2,"Destroyer"),Submarine:new w(3,"Submarine"),Cruiser:new w(3,"Cruiser"),Battleship:new w(4,"Battleship"),Carrier:new w(5,"Carrier")};function G(n,e,i){if(-1==e[0])return!1;if(0==i){if(e[0]-1>=0&&e[1]-1>=0&&1==M[e[0]-1][e[1]-1])return!1;if(e[0]+1<=9&&e[1]-1>=0&&1==M[e[0]+1][e[1]-1])return!1;if(e[0]-1>=0&&e[1]+n.length<=9&&1==M[e[0]-1][e[1]+n.length])return!1;if(e[0]+1<=9&&e[1]+n.length<=9&&1==M[e[0]+1][e[1]+n.length])return!1;if(e[1]-1>=0&&1==M[e[0]][e[1]-1]||e[1]+n.length<=9&&1==M[e[0]][e[1]+n.length])return!1;for(let i=0;i<n.length;i++){if(e[1]+i>9||1==M[e[0]][e[1]+i])return!1;if(e[0]-1>=0&&1==M[e[0]-1][e[1]+i]||e[0]+1<=9&&1==M[e[0]+1][e[1]+i])return!1}}else{if(e[0]-1>=0&&e[1]-1>=0&&1==M[e[0]-1][e[1]-1])return!1;if(e[0]-1>=0&&e[1]+1<=9&&1==M[e[0]-1][e[1]+1])return!1;if(e[0]+n.length<=9&&e[1]-1>=0&&1==M[e[0]+n.length][e[1]-1])return!1;if(e[0]+n.length<=9&&e[1]+1<=9&&1==M[e[0]+n.length][e[1]+1])return!1;if(e[0]-1>=0&&1==M[e[0]-1][e[1]]||e[0]+n.length<=9&&1==M[e[0]+n.length][e[1]])return!1;for(let i=0;i<n.length;i++){if(e[0]+i>9||1==M[e[0]+i][e[1]])return!1;if(e[1]-1>=0&&1==M[e[0]+i][e[1]-1]||e[1]+1<=9&&1==M[e[0]+i][e[1]+1])return!1}}return!0}function V(n){for(let e=0;e<n.length;e++)z[10*n[e][0]+n[e][1]].classList.toggle("blocked")}function D(n,e,i){if(-1==e[0])return;let l=[];j[n.id].cell=e,j[n.id].placed=!0,j[n.id].alignment=i,R.push(j[n.id]),5==R.length&&T.classList.toggle("unclickable");const t=Array.from(A).find((e=>e.id==n.id));if(t.classList.toggle("placed"),t.draggable=!1,0==i)for(let i=0;i<n.length;i++)M[e[0]][e[1]+i]=1,z[10*e[0]+e[1]+i].classList.remove("highlight"),l.push([e[0],e[1]+i]);else for(let i=0;i<n.length;i++)M[e[0]+i][e[1]]=1,z[10*(e[0]+i)+e[1]].classList.remove("highlight"),l.push([e[0]+i,e[1]]);V(l)}for(let n=0;n<A.length;n++){const e=A[n];e.addEventListener("dragstart",(()=>{console.log(e.id),B=!0,N={id:e.id,length:j[e.id].length}})),e.addEventListener("dragend",(()=>{I&&G(N,E,q)&&!j[N.id].placed&&D(N,E,q),B=!1,N={},E=[-1,-1]}))}function O(n,e){if(0==q){if(Math.floor((e+n.length-1)/10)!=Math.floor(e/10))return void(E=[-1,-1]);E=[Math.floor(e/10),e%10];for(let i=0;i<n.length;i++)z[i+e].classList.add("highlight")}else{if(Math.floor(e/10)+n.length>10)return void(E=[-1,-1]);E=[Math.floor(e/10),e%10];for(let i=0;i<n.length;i++)z[10*i+e].classList.add("highlight")}}function $(n,e){if(0==q){if(Math.floor((e+n.length-1)/10)!=Math.floor(e/10))return;for(let i=0;i<n.length;i++)z[i+e].classList.remove("highlight")}else{if(Math.floor(e/10)+n.length>10)return;for(let i=0;i<n.length;i++)z[10*i+e].classList.remove("highlight")}}for(let n=0;n<z.length;n++){const e=z[n];e.addEventListener("dragover",(()=>{B&&O(N,Number(e.id))})),e.addEventListener("dragleave",(()=>{B&&$(N,Number(e.id))}))}document.addEventListener("keydown",(n=>{if("r"==n.key||"R"==n.key){k.classList.toggle("horizontal"),k.classList.toggle("vertical");for(let n=0;n<A.length;n++){let e=A[n];e.classList.toggle("ship"),e.classList.toggle("shipVertical")}q=0==q?1:0}})),S.addEventListener("click",(()=>{if(0==R.length)return;5==R.length&&T.classList.toggle("unclickable");let n=[];const e=R.pop(),i=e.cell;if(0==e.alignment)for(let l=0;l<e.length;l++)M[i[0]][i[1]+l]=0,n.push([i[0],i[1]+l]);else for(let l=0;l<e.length;l++)M[i[0]+l][i[1]]=0,n.push([i[0]+l,i[1]]);V(n);const l=Array.from(A).find((n=>n.id==e.name));l.classList.toggle("placed"),l.draggable=!0,j[e.name].cell=[-1,-1],j[e.name].placed=!1,j[e.name].alignment=-1})),T.addEventListener("click",(()=>{5==R.length&&(x.innerHTML='\n        <h1 id="gameTitle">-BATTLESHIP!-</h1>\n    <div id="versusArea">\n        <div class="mapArea" id="playerBattleGround">\n            <div class="playerCell" id="0"></div>\n            <div class="playerCell" id="1"></div>\n            <div class="playerCell" id="2"></div>\n            <div class="playerCell" id="3"></div>\n            <div class="playerCell" id="4"></div>\n            <div class="playerCell" id="5"></div>\n            <div class="playerCell" id="6"></div>\n            <div class="playerCell" id="7"></div>\n            <div class="playerCell" id="8"></div>\n            <div class="playerCell" id="9"></div>\n            <div class="playerCell" id="10"></div>\n            <div class="playerCell" id="11"></div>\n            <div class="playerCell" id="12"></div>\n            <div class="playerCell" id="13"></div>\n            <div class="playerCell" id="14"></div>\n            <div class="playerCell" id="15"></div>\n            <div class="playerCell" id="16"></div>\n            <div class="playerCell" id="17"></div>\n            <div class="playerCell" id="18"></div>\n            <div class="playerCell" id="19"></div>\n            <div class="playerCell" id="20"></div>\n            <div class="playerCell" id="21"></div>\n            <div class="playerCell" id="22"></div>\n            <div class="playerCell" id="23"></div>\n            <div class="playerCell" id="24"></div>\n            <div class="playerCell" id="25"></div>\n            <div class="playerCell" id="26"></div>\n            <div class="playerCell" id="27"></div>\n            <div class="playerCell" id="28"></div>\n            <div class="playerCell" id="29"></div>\n            <div class="playerCell" id="30"></div>\n            <div class="playerCell" id="31"></div>\n            <div class="playerCell" id="32"></div>\n            <div class="playerCell" id="33"></div>\n            <div class="playerCell" id="34"></div>\n            <div class="playerCell" id="35"></div>\n            <div class="playerCell" id="36"></div>\n            <div class="playerCell" id="37"></div>\n            <div class="playerCell" id="38"></div>\n            <div class="playerCell" id="39"></div>\n            <div class="playerCell" id="40"></div>\n            <div class="playerCell" id="41"></div>\n            <div class="playerCell" id="42"></div>\n            <div class="playerCell" id="43"></div>\n            <div class="playerCell" id="44"></div>\n            <div class="playerCell" id="45"></div>\n            <div class="playerCell" id="46"></div>\n            <div class="playerCell" id="47"></div>\n            <div class="playerCell" id="48"></div>\n            <div class="playerCell" id="49"></div>\n            <div class="playerCell" id="50"></div>\n            <div class="playerCell" id="51"></div>\n            <div class="playerCell" id="52"></div>\n            <div class="playerCell" id="53"></div>\n            <div class="playerCell" id="54"></div>\n            <div class="playerCell" id="55"></div>\n            <div class="playerCell" id="56"></div>\n            <div class="playerCell" id="57"></div>\n            <div class="playerCell" id="58"></div>\n            <div class="playerCell" id="59"></div>\n            <div class="playerCell" id="60"></div>\n            <div class="playerCell" id="61"></div>\n            <div class="playerCell" id="62"></div>\n            <div class="playerCell" id="63"></div>\n            <div class="playerCell" id="64"></div>\n            <div class="playerCell" id="65"></div>\n            <div class="playerCell" id="66"></div>\n            <div class="playerCell" id="67"></div>\n            <div class="playerCell" id="68"></div>\n            <div class="playerCell" id="69"></div>\n            <div class="playerCell" id="70"></div>\n            <div class="playerCell" id="71"></div>\n            <div class="playerCell" id="72"></div>\n            <div class="playerCell" id="73"></div>\n            <div class="playerCell" id="74"></div>\n            <div class="playerCell" id="75"></div>\n            <div class="playerCell" id="76"></div>\n            <div class="playerCell" id="77"></div>\n            <div class="playerCell" id="78"></div>\n            <div class="playerCell" id="79"></div>\n            <div class="playerCell" id="80"></div>\n            <div class="playerCell" id="81"></div>\n            <div class="playerCell" id="82"></div>\n            <div class="playerCell" id="83"></div>\n            <div class="playerCell" id="84"></div>\n            <div class="playerCell" id="85"></div>\n            <div class="playerCell" id="86"></div>\n            <div class="playerCell" id="87"></div>\n            <div class="playerCell" id="88"></div>\n            <div class="playerCell" id="89"></div>\n            <div class="playerCell" id="90"></div>\n            <div class="playerCell" id="91"></div>\n            <div class="playerCell" id="92"></div>\n            <div class="playerCell" id="93"></div>\n            <div class="playerCell" id="94"></div>\n            <div class="playerCell" id="95"></div>\n            <div class="playerCell" id="96"></div>\n            <div class="playerCell" id="97"></div>\n            <div class="playerCell" id="98"></div>\n            <div class="playerCell" id="99"></div>\n        </div>\n        <div class="mapArea" id="CPUBattleGround">\n            <div class="CPUCELL" id="0">\n                <img src="./hit.png" alt="">\n            </div>\n            <div class="CPUCell" id="1"><img src="cross.svg" alt=""></div>\n            <div class="CPUCell" id="2"><img src="./crosshair.svg" alt=""></div>\n            <div class="CPUCell" id="3"></div>\n            <div class="CPUCell" id="4"></div>\n            <div class="CPUCell" id="5"></div>\n            <div class="CPUCell" id="6"></div>\n            <div class="CPUCell" id="7"></div>\n            <div class="CPUCell" id="8"></div>\n            <div class="CPUCell" id="9"></div>\n            <div class="CPUCell" id="10"></div>\n            <div class="CPUCell" id="11"></div>\n            <div class="CPUCell" id="12"></div>\n            <div class="CPUCell" id="13"></div>\n            <div class="CPUCell" id="14"></div>\n            <div class="CPUCell" id="15"></div>\n            <div class="CPUCell" id="16"></div>\n            <div class="CPUCell" id="17"></div>\n            <div class="CPUCell" id="18"></div>\n            <div class="CPUCell" id="19"></div>\n            <div class="CPUCell" id="20"></div>\n            <div class="CPUCell" id="21"></div>\n            <div class="CPUCell" id="22"></div>\n            <div class="CPUCell" id="23"></div>\n            <div class="CPUCell" id="24"></div>\n            <div class="CPUCell" id="25"></div>\n            <div class="CPUCell" id="26"></div>\n            <div class="CPUCell" id="27"></div>\n            <div class="CPUCell" id="28"></div>\n            <div class="CPUCell" id="29"></div>\n            <div class="CPUCell" id="30"></div>\n            <div class="CPUCell" id="31"></div>\n            <div class="CPUCell" id="32"></div>\n            <div class="CPUCell" id="33"></div>\n            <div class="CPUCell" id="34"></div>\n            <div class="CPUCell" id="35"></div>\n            <div class="CPUCell" id="36"></div>\n            <div class="CPUCell" id="37"></div>\n            <div class="CPUCell" id="38"></div>\n            <div class="CPUCell" id="39"></div>\n            <div class="CPUCell" id="40"></div>\n            <div class="CPUCell" id="41"></div>\n            <div class="CPUCell" id="42"></div>\n            <div class="CPUCell" id="43"></div>\n            <div class="CPUCell" id="44"></div>\n            <div class="CPUCell" id="45"></div>\n            <div class="CPUCell" id="46"></div>\n            <div class="CPUCell" id="47"></div>\n            <div class="CPUCell" id="48"></div>\n            <div class="CPUCell" id="49"></div>\n            <div class="CPUCell" id="50"></div>\n            <div class="CPUCell" id="51"></div>\n            <div class="CPUCell" id="52"></div>\n            <div class="CPUCell" id="53"></div>\n            <div class="CPUCell" id="54"></div>\n            <div class="CPUCell" id="55"></div>\n            <div class="CPUCell" id="56"></div>\n            <div class="CPUCell" id="57"></div>\n            <div class="CPUCell" id="58"></div>\n            <div class="CPUCell" id="59"></div>\n            <div class="CPUCell" id="60"></div>\n            <div class="CPUCell" id="61"></div>\n            <div class="CPUCell" id="62"></div>\n            <div class="CPUCell" id="63"></div>\n            <div class="CPUCell" id="64"></div>\n            <div class="CPUCell" id="65"></div>\n            <div class="CPUCell" id="66"></div>\n            <div class="CPUCell" id="67"></div>\n            <div class="CPUCell" id="68"></div>\n            <div class="CPUCell" id="69"></div>\n            <div class="CPUCell" id="70"></div>\n            <div class="CPUCell" id="71"></div>\n            <div class="CPUCell" id="72"></div>\n            <div class="CPUCell" id="73"></div>\n            <div class="CPUCell" id="74"></div>\n            <div class="CPUCell" id="75"></div>\n            <div class="CPUCell" id="76"></div>\n            <div class="CPUCell" id="77"></div>\n            <div class="CPUCell" id="78"></div>\n            <div class="CPUCell" id="79"></div>\n            <div class="CPUCell" id="80"></div>\n            <div class="CPUCell" id="81"></div>\n            <div class="CPUCell" id="82"></div>\n            <div class="CPUCell" id="83"></div>\n            <div class="CPUCell" id="84"></div>\n            <div class="CPUCell" id="85"></div>\n            <div class="CPUCell" id="86"></div>\n            <div class="CPUCell" id="87"></div>\n            <div class="CPUCell" id="88"></div>\n            <div class="CPUCell" id="89"></div>\n            <div class="CPUCell" id="90"></div>\n            <div class="CPUCell" id="91"></div>\n            <div class="CPUCell" id="92"></div>\n            <div class="CPUCell" id="93"></div>\n            <div class="CPUCell" id="94"></div>\n            <div class="CPUCell" id="95"></div>\n            <div class="CPUCell" id="96"></div>\n            <div class="CPUCell" id="97"></div>\n            <div class="CPUCell" id="98"></div>\n            <div class="CPUCell" id="99"></div>\n        </div>\n    </div>\n    <div id="scoreCard">\n        <div id="playerShipsRemaining"><h5>Player Ships <br> Remaining: 0</h5></div>\n        <div id="CPUShipsRemaining"><h5>CPU Ships <br> Remaining: 0</h5></div>\n        <div id="turnIndicator">\n            <h4>YOUR TURN!</h4>\n        </div>\n    </div>\n    ')}))})();