!function(){"use strict";var t={n:function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,{a:n}),n},d:function(e,n){for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})},o:function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}},e=window.jQuery;let n=t.n(e)();n(document).ready((function(){n(".slick-ul").each((function(t,e){const o="slick-"+Math.floor(101*Math.random());n(e).attr("id",o);let r=JSON.stringify(n(e).data("settings"));r=r.replace(/"([^"]+)":/g,"$1:"),console.log("view settings ",r);const c=n("<script>");c.text("console.log('* Gutenberg slick slider *'); jQuery('#"+o+"').slick("+r+");"),n("head").append(c)}))}))}();