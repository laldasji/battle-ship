(()=>{"use strict";var n={153:(n,e,t)=>{t.d(e,{A:()=>l});var r=t(601),i=t.n(r),o=t(314),a=t.n(o)()(i());a.push([n.id,'/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n\nhtml {\n  line-height: 1.15; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\nbody {\n  margin: 0;\n}\n\nmain {\n  display: block;\n}\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\npre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\na {\n  background-color: transparent;\n}\n\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  text-decoration: underline dotted; /* 2 */\n}\n\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n\nsmall {\n  font-size: 80%;\n}\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\nimg {\n  border-style: none;\n}\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\nbutton,\ninput { /* 1 */\n  overflow: visible;\n}\n\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\n\nbutton,\n[type="button"],\n[type="reset"],\n[type="submit"] {\n  -webkit-appearance: button;\n}\n\nbutton::-moz-focus-inner,\n[type="button"]::-moz-focus-inner,\n[type="reset"]::-moz-focus-inner,\n[type="submit"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\nbutton:-moz-focusring,\n[type="button"]:-moz-focusring,\n[type="reset"]:-moz-focusring,\n[type="submit"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\nlegend {\n  box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\nprogress {\n  vertical-align: baseline;\n}\n\n\ntextarea {\n  overflow: auto;\n}\n\n\n[type="checkbox"],\n[type="radio"] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n\n[type="number"]::-webkit-inner-spin-button,\n[type="number"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n[type="search"] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n[type="search"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\ndetails {\n  display: block;\n}\n\nsummary {\n  display: list-item;\n}\n\ntemplate {\n  display: none;\n}\n\n[hidden] {\n  display: none;\n}\n',""]);const l=a},208:(n,e,t)=>{t.d(e,{A:()=>l});var r=t(601),i=t.n(r),o=t(314),a=t.n(o)()(i());a.push([n.id,"* {\n    margin: 0;\n    padding: 0;\n}\n\n:root {\n    --dark-red: rgb(214,20,20);\n    --mustard-yellow: rgb(249, 217, 35);\n    --light-grey: rgb(218, 218, 218);\n    --ocean-deep: rgb(64,106,201);\n}\n\nbody {\n    height: 100dvh;\n    width: 100dvw;\n    display: grid;\n    grid-template-rows: 1fr 6fr 1fr;\n}\n\n#instructions {\n    h3 {\n        font-weight: 900;\n    }\n    align-self: center;\n    display: grid;\n    place-items: center;\n}\n\n#mapInitialiser {\n    width: 100%;\n    height: 100%;\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    place-items: center;\n    #battleGround {\n        width: calc(5rem + 60%);\n        aspect-ratio: 1 / 1;\n        display: grid;\n        grid-template-columns: repeat(10, 1fr);\n        grid-template-rows: repeat(10, 1fr);\n        background-color: black;\n        gap: 1px;\n        border: 1px solid black;\n        & div {\n            background-color: var(--ocean-deep);\n        }\n        .highlight {\n            background-color: var(--mustard-yellow);\n        }\n        .blocked {\n            background-color: var(--light-grey);\n        }\n    }\n    #dockyard {\n        border: 1px solid black;\n        display: grid;\n        place-items: center;\n        width: calc(5rem + 60%);\n        aspect-ratio: 1 / 1;\n        & > div {\n            display: grid;\n            gap: 1px;\n            background-color: black;\n            border: 1px solid black;\n            & > div {\n                width: 100%;\n                height: 100%;\n                background-color: var(--light-grey);\n            }\n        }\n\n        .placed {\n            pointer-events: none;\n            & > div {\n                background-color: black;\n            }\n        }\n        .ship {\n            /*area divided into 5 regions because 5 ships, we need half of each of 5 for 10% height */\n            height: 50%;\n        }\n        .shipVertical {\n            width: 50%;\n        }\n\n        #Destroyer.ship {\n            width: 20%;\n            height: 50%;\n            grid-template-columns: repeat(2, 1fr);\n        }\n        #Submarine.ship {\n            width: 30%;\n            height: 50%;\n            grid-template-columns: repeat(3, 1fr);\n        }\n        #Cruiser.ship {\n            width: 30%;\n            height: 50%;\n            grid-template-columns: repeat(3, 1fr);\n        }\n        #Battleship.ship {\n            width: 40%;\n            height: 50%;\n            grid-template-columns: repeat(4, 1fr);\n        }\n        #Carrier.ship {\n            width: 50%;\n            height: 50%;\n            grid-template-columns: repeat(5, 1fr);\n        }\n\n        #Destroyer.shipVertical {\n            height: 20%;\n            width: 50%;\n            grid-template-rows: repeat(2, 1fr);\n        }\n        #Submarine.shipVertical {\n            height: 30%;\n            width: 50%;\n            grid-template-rows: repeat(3, 1fr);\n        }\n        #Cruiser.shipVertical {\n            height: 30%;\n            width: 50%;\n            grid-template-rows: repeat(3, 1fr);\n        }\n        #Battleship.shipVertical {\n            height: 40%;\n            width: 50%;\n            grid-template-rows: repeat(4, 1fr);\n        }\n        #Carrier.shipVertical {\n            height: 50%;\n            width: 50%;\n            grid-template-rows: repeat(5, 1fr);\n        }\n    }\n    .horizontal {\n        grid-template-rows: repeat(5, 1fr);\n        grid-template-columns: 1fr;\n    }\n    .vertical {\n        grid-template-columns: repeat(5, 1fr);\n        grid-template-rows: 1fr;\n    }\n}\n\n#commandArea {\n    background-color: var(--dark-red);\n    display: grid;\n    grid-template-columns: repeat(4, 1fr);\n    place-items: center;\n    button {\n        position: relative;\n        padding: 1em;\n        font-size: 1.5rem;\n        border: none;\n        border-radius: 0.5rem;\n        background-color: white;\n        box-shadow: 0.4rem 0.4rem 0 black;\n    }\n    button:active {\n        top: 0.3rem;\n        left: 0.3rem;\n        box-shadow: 0.2rem 0.2rem 0 black;\n    }\n    .unclickable {\n        pointer-events: none;\n        opacity: 0.5;\n    }\n    #undoLastPlacement {\n        grid-column: 2 / 3;\n    }\n    #startGame {\n        grid-column: 3 / 4;\n    }\n}",""]);const l=a},472:(n,e,t)=>{t.d(e,{A:()=>d});var r=t(601),i=t.n(r),o=t(314),a=t.n(o),l=t(417),s=t.n(l),p=new URL(t(344),t.b),c=a()(i()),h=s()(p);c.push([n.id,`@font-face {\n    font-family: "Nova Square";\n    src: url(${h});\n}\n\nbody {\n\tfont-size: 18px;\n    font-family: "Nova Square", display;\n\t--paragraph-space: 2rem;\n\t--title-space: 1rem;\n\tfont-weight: 400;\n}\n\n.space-text-above,\np + h1,\np + h2,\np + h3,\np + h4,\np + h5,\np + h6,\nh1 + h2,\nh2 + h3,\nh3 + h4,\nh4 + h5,\nh5 + h6 {\n\tmargin-top: var(--paragraph-space);\n}\n\nh1 + p,\nh2 + p,\nh3 + p,\nh4 + p,\nh5 + p,\nh6 + p {\n\tmargin-top: var(--title-space);\n}\n\np + p {\n\tmargin-top: var(--title-space);\n}\n\nh1 + p,\nh2 + p,\nh3 + p,\nh4 + p,\nh5 + p,\nh6 + p,\n.space-text-below {\n\tmargin-bottom: var(--paragraph-space);\n}\n\np.bold,\nspan.bold,\n.body-1.bold,\n.body-2.bold,\np .bold,\nspan .bold,\n.body-1 .bold,\n.body-2 .bold,\np strong,\nspan strong,\n.body-1 strong,\n.body-2 strong,\np b,\nspan b,\n.body-1 b,\n.body-2 b {\n\t\tfont-weight: 700;\n\t}\n\n\nh1, .title-1 ,h2, .title-2 ,h3, .title-3 ,h4, .title-4 ,h5, .title-5 ,h6, .title-6  {\n\t\tfont-style: normal;\n\t\ttext-transform: uppercase;\n\t}\n\n\tp,\n\n\nh1, .title-1 {\n    font-size: 38px;\n    line-height: 40px;\n    font-weight: 400;\n    letter-spacing: -0.003em;\n}\n\nh2, .title-2 {\n    font-size: 32px;\n    line-height: 40px;\n    font-weight: 400;\n    letter-spacing: -0.002em;\n}\n\nh3, .title-3 {\n    font-size: 28px;\n    line-height: 36px;\n    font-weight: 400;\n    letter-spacing: -0.001em;\n}\n\nh4, .title-4 {\n    font-size: 24px;\n    line-height: 36px;\n    font-weight: 400;\n    letter-spacing: -0.001em;\n}\n\nh5, .title-5 {\n    font-size: 22px;\n    line-height: 36px;\n    font-weight: 400;\n    letter-spacing: 0em;\n}\n\nh6, .title-6 {\n    font-size: 18px;\n    line-height: 32px;\n    font-weight: 400;\n    letter-spacing: 0em;\n}\n\np, button, .body-1 {\n    font-size: 14px;\n    line-height: 20px;\n    font-weight: 400;\n    letter-spacing: 0.001em;\n}\n\nlabel, figcaption, input, .body-2 {\n    font-size: 12px;\n    line-height: 20px;\n    font-weight: 400;\n    letter-spacing: 0.083em;\n}\n\n.tooltip {\n    font-size: 10px;\n    line-height: 16px;\n    font-weight: 400;\n    letter-spacing: 0.098em;\n}\n\n    \n    @media (min-width: 768px) {\n\t\tbody {\n\t\t\tfont-size: 16px;\n\t\t}\n\n        h1, .title-1 {\n            font-size: 76px;\n            line-height: 84px;\n        }\n        h2, .title-2 {\n            font-size: 62px;\n            line-height: 76px;\n        }\n        h3, .title-3 {\n            font-size: 48px;\n            line-height: 64px;\n        }\n        h4, .title-4 {\n            font-size: 40px;\n            line-height: 60px;\n        }\n        h5, .title-5 {\n            font-size: 32px;\n            line-height: 52px;\n        }\n        h6, .title-6 {\n            font-size: 26px;\n            line-height: 48px;\n        }\n        p, button, .body-1 {\n            font-size: 16px;\n            line-height: 24px;\n        }\n        label, figcaption, input, .body-2 {\n            font-size: 12px;\n            line-height: 20px;\n        }\n        .tooltip {\n            font-size: 10px;\n            line-height: 16px;\n        }\n        \n\n    }`,""]);const d=c},314:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,i,o){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(r)for(var l=0;l<this.length;l++){var s=this[l][0];null!=s&&(a[s]=!0)}for(var p=0;p<n.length;p++){var c=[].concat(n[p]);r&&a[c[0]]||(void 0!==o&&(void 0===c[5]||(c[1]="@layer".concat(c[5].length>0?" ".concat(c[5]):""," {").concat(c[1],"}")),c[5]=o),t&&(c[2]?(c[1]="@media ".concat(c[2]," {").concat(c[1],"}"),c[2]=t):c[2]=t),i&&(c[4]?(c[1]="@supports (".concat(c[4],") {").concat(c[1],"}"),c[4]=i):c[4]="".concat(i)),e.push(c))}},e}},417:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},601:n=>{n.exports=function(n){return n[1]}},72:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var o={},a=[],l=0;l<n.length;l++){var s=n[l],p=r.base?s[0]+r.base:s[0],c=o[p]||0,h="".concat(p," ").concat(c);o[p]=c+1;var d=t(h),g={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==d)e[d].references++,e[d].updater(g);else{var u=i(g,r);r.byIndex=l,e.splice(l,0,{identifier:h,updater:u,references:1})}a.push(h)}return a}function i(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,i){var o=r(n=n||[],i=i||{});return function(n){n=n||[];for(var a=0;a<o.length;a++){var l=t(o[a]);e[l].references--}for(var s=r(n,i),p=0;p<o.length;p++){var c=t(o[p]);0===e[c].references&&(e[c].updater(),e.splice(c,1))}o=s}}},659:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},540:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},56:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var i=void 0!==t.layer;i&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,i&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var o=t.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},113:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},344:(n,e,t)=>{n.exports=t.p+"3bc6a718ca288efebb2d.ttf"}},e={};function t(r){var i=e[r];if(void 0!==i)return i.exports;var o=e[r]={id:r,exports:{}};return n[r](o,o.exports,t),o.exports}t.m=n,t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&"SCRIPT"===e.currentScript.tagName.toUpperCase()&&(n=e.currentScript.src),!n)){var r=e.getElementsByTagName("script");if(r.length)for(var i=r.length-1;i>-1&&(!n||!/^http(s?):/.test(n));)n=r[i--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.b=document.baseURI||self.location.href,t.nc=void 0;var r=t(72),i=t.n(r),o=t(825),a=t.n(o),l=t(659),s=t.n(l),p=t(56),c=t.n(p),h=t(540),d=t.n(h),g=t(113),u=t.n(g),f=t(153),m={};m.styleTagTransform=u(),m.setAttributes=c(),m.insert=s().bind(null,"head"),m.domAPI=a(),m.insertStyleElement=d(),i()(f.A,m),f.A&&f.A.locals&&f.A.locals;var b=t(472),y={};y.styleTagTransform=u(),y.setAttributes=c(),y.insert=s().bind(null,"head"),y.domAPI=a(),y.insertStyleElement=d(),i()(b.A,y),b.A&&b.A.locals&&b.A.locals;var v=t(208),x={};x.styleTagTransform=u(),x.setAttributes=c(),x.insert=s().bind(null,"head"),x.domAPI=a(),x.insertStyleElement=d(),i()(v.A,x),v.A&&v.A.locals&&v.A.locals;const w=document.querySelector("body"),k=document.querySelector("#dockyard"),z=document.querySelectorAll('div[draggable="true"]'),A=document.querySelectorAll(".cell"),L=document.querySelector("#battleGround"),S=document.querySelector("#undoLastPlacement"),T=document.querySelector("#startGame");let E=[-1,-1],M=Array.from({length:10},(()=>Array(10).fill(0))),C=!1,I=[],q=!1,N={},P=0;L.addEventListener("dragover",(n=>{n.preventDefault(),C=!0})),L.addEventListener("dragleave",(()=>{C=!1}));class j{constructor(n,e){this.name=e,this.length=n,this.placed=!1,this.cell=[-1,-1],this.alignment=-1}}const V={Destroyer:new j(2,"Destroyer"),Submarine:new j(3,"Submarine"),Cruiser:new j(3,"Cruiser"),Battleship:new j(4,"Battleship"),Carrier:new j(5,"Carrier")};function B(n,e,t){if(-1==e[0])return!1;if(0==t){if(e[0]-1>=0&&e[1]-1>=0&&1==M[e[0]-1][e[1]-1])return!1;if(e[0]+1<=9&&e[1]-1>=0&&1==M[e[0]+1][e[1]-1])return!1;if(e[0]-1>=0&&e[1]+n.length<=9&&1==M[e[0]-1][e[1]+n.length])return!1;if(e[0]+1<=9&&e[1]+n.length<=9&&1==M[e[0]+1][e[1]+n.length])return!1;if(e[1]-1>=0&&1==M[e[0]][e[1]-1]||e[1]+n.length<=9&&1==M[e[0]][e[1]+n.length])return!1;for(let t=0;t<n.length;t++){if(e[1]+t>9||1==M[e[0]][e[1]+t])return!1;if(e[0]-1>=0&&1==M[e[0]-1][e[1]+t]||e[0]+1<=9&&1==M[e[0]+1][e[1]+t])return!1}}else{if(e[0]-1>=0&&e[1]-1>=0&&1==M[e[0]-1][e[1]-1])return!1;if(e[0]-1>=0&&e[1]+1<=9&&1==M[e[0]-1][e[1]+1])return!1;if(e[0]+n.length<=9&&e[1]-1>=0&&1==M[e[0]+n.length][e[1]-1])return!1;if(e[0]+n.length<=9&&e[1]+1<=9&&1==M[e[0]+n.length][e[1]+1])return!1;if(e[0]-1>=0&&1==M[e[0]-1][e[1]]||e[0]+n.length<=9&&1==M[e[0]+n.length][e[1]])return!1;for(let t=0;t<n.length;t++){if(e[0]+t>9||1==M[e[0]+t][e[1]])return!1;if(e[1]-1>=0&&1==M[e[0]+t][e[1]-1]||e[1]+1<=9&&1==M[e[0]+t][e[1]+1])return!1}}return!0}function D(n){for(let e=0;e<n.length;e++)A[10*n[e][0]+n[e][1]].classList.toggle("blocked")}function R(n,e,t){if(-1==e[0])return;let r=[];V[n.id].cell=e,V[n.id].placed=!0,V[n.id].alignment=t,I.push(V[n.id]),5==I.length&&T.classList.toggle("unclickable");const i=Array.from(z).find((e=>e.id==n.id));if(i.classList.toggle("placed"),i.draggable=!1,0==t)for(let t=0;t<n.length;t++)M[e[0]][e[1]+t]=1,A[10*e[0]+e[1]+t].classList.remove("highlight"),r.push([e[0],e[1]+t]);else for(let t=0;t<n.length;t++)M[e[0]+t][e[1]]=1,A[10*(e[0]+t)+e[1]].classList.remove("highlight"),r.push([e[0]+t,e[1]]);D(r)}for(let n=0;n<z.length;n++){const e=z[n];e.addEventListener("dragstart",(()=>{console.log(e.id),q=!0,N={id:e.id,length:V[e.id].length}})),e.addEventListener("dragend",(()=>{C&&B(N,E,P)&&!V[N.id].placed&&R(N,E,P),q=!1,N={},E=[-1,-1]}))}function U(n,e){if(0==P){if(Math.floor((e+n.length-1)/10)!=Math.floor(e/10))return void(E=[-1,-1]);E=[Math.floor(e/10),e%10];for(let t=0;t<n.length;t++)A[t+e].classList.add("highlight")}else{if(Math.floor(e/10)+n.length>10)return void(E=[-1,-1]);E=[Math.floor(e/10),e%10];for(let t=0;t<n.length;t++)A[10*t+e].classList.add("highlight")}}function $(n,e){if(0==P){if(Math.floor((e+n.length-1)/10)!=Math.floor(e/10))return;for(let t=0;t<n.length;t++)A[t+e].classList.remove("highlight")}else{if(Math.floor(e/10)+n.length>10)return;for(let t=0;t<n.length;t++)A[10*t+e].classList.remove("highlight")}}for(let n=0;n<A.length;n++){const e=A[n];e.addEventListener("dragover",(()=>{q&&U(N,Number(e.id))})),e.addEventListener("dragleave",(()=>{q&&$(N,Number(e.id))}))}document.addEventListener("keydown",(n=>{if("r"==n.key||"R"==n.key){k.classList.toggle("horizontal"),k.classList.toggle("vertical");for(let n=0;n<z.length;n++){let e=z[n];e.classList.toggle("ship"),e.classList.toggle("shipVertical")}P=0==P?1:0}})),S.addEventListener("click",(()=>{if(0==I.length)return;5==I.length&&T.classList.toggle("unclickable");let n=[];const e=I.pop(),t=e.cell;if(0==e.alignment)for(let r=0;r<e.length;r++)M[t[0]][t[1]+r]=0,n.push([t[0],t[1]+r]);else for(let r=0;r<e.length;r++)M[t[0]+r][t[1]]=0,n.push([t[0]+r,t[1]]);D(n);const r=Array.from(z).find((n=>n.id==e.name));r.classList.toggle("placed"),r.draggable=!0,V[e.name].cell=[-1,-1],V[e.name].placed=!1,V[e.name].alignment=-1})),T.addEventListener("click",(()=>{5==I.length&&(w.innerHTML="")}))})();