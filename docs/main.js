!function(n){var e={};function t(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return n[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=n,t.c=e,t.d=function(n,e,r){t.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:r})},t.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,e){if(1&e&&(n=t(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var o in n)t.d(r,o,function(e){return n[e]}.bind(null,o));return r},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},t.p="",t(t.s=0)}([function(n,e,t){"use strict";t.r(e);t(1)},function(n,e,t){var r=t(2);"string"==typeof r&&(r=[[n.i,r,""]]);var o={insert:"head",singleton:!1};t(4)(r,o);r.locals&&(n.exports=r.locals)},function(n,e,t){(n.exports=t(3)(!1)).push([n.i,'* {\n  margin: 0;\n  padding: 0; }\n\n.tabs {\n  display: flex;\n  flex-wrap: wrap;\n  width: 80%;\n  background: #efefef;\n  box-shadow: 0 48px 80px -32px rgba(0, 0, 0, 0.3); }\n\n.input {\n  position: absolute;\n  opacity: 0; }\n\n.label {\n  width: 100%;\n  padding: 20px 30px;\n  background: #e5e5e5;\n  cursor: pointer;\n  font-weight: bold;\n  font-size: 18px;\n  color: #7f7f7f;\n  transition: background 0.1s, color 0.1s; }\n\n.label:hover {\n  background: #d8d8d8; }\n\n.label:active {\n  background: #ccc; }\n\n.input:focus + .label {\n  box-shadow: inset 0px 0px 0px 3px #2aa1c0;\n  z-index: 1; }\n\n.input:checked + .label {\n  background: #fff;\n  color: #000; }\n\n@media (min-width: 600px) {\n  .label {\n    width: auto; } }\n\n.panel {\n  min-height: 200px;\n  display: none;\n  padding: 20px 30px 30px;\n  background: #fff;\n  line-height: 1.5; }\n\n@media (min-width: 600px) {\n  .panel {\n    order: 99; } }\n\n.input:checked + .label + .panel {\n  display: block; }\n\nbody {\n  font-family: Arial, Helvetica, sans-serif; }\n\n.font-bold {\n  font-family: "Arial Black", Gadget, sans-serif; }\n\n.font-24 {\n  font-size: 24px; }\n\n.font-32 {\n  font-size: 32px; }\n\nheader {\n  background-color: white; }\n  header h1 {\n    border-bottom: 2px solid lightgray; }\n\nmain {\n  background-color: #f1f1f1; }\n\n#description {\n  color: dimgray; }\n  #description h1 {\n    border-bottom: 2px solid black; }\n\n.row {\n  display: flex;\n  flex-direction: row; }\n\n.col {\n  display: flex;\n  flex-direction: column; }\n\nheader {\n  padding: 32px 64px; }\n\nmain {\n  align-items: center;\n  padding: 24px 0; }\n\n#name-of-item {\n  display: block;\n  text-align: center; }\n\n#item {\n  width: 80%;\n  justify-content: space-between;\n  margin: 24px 0; }\n\n#photo-of-item {\n  align-self: flex-start;\n  width: 50%; }\n\n#description {\n  width: 50%;\n  padding: 16px 32px; }\n  #description ul {\n    margin: 16px; }\n',""])},function(n,e,t){"use strict";n.exports=function(n){var e=[];return e.toString=function(){return this.map(function(e){var t=function(n,e){var t=n[1]||"",r=n[3];if(!r)return t;if(e&&"function"==typeof btoa){var o=(a=r,c=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),s="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),"/*# ".concat(s," */")),i=r.sources.map(function(n){return"/*# sourceURL=".concat(r.sourceRoot).concat(n," */")});return[t].concat(i).concat([o]).join("\n")}var a,c,s;return[t].join("\n")}(e,n);return e[2]?"@media ".concat(e[2],"{").concat(t,"}"):t}).join("")},e.i=function(n,t){"string"==typeof n&&(n=[[null,n,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];null!=i&&(r[i]=!0)}for(var a=0;a<n.length;a++){var c=n[a];null!=c[0]&&r[c[0]]||(t&&!c[2]?c[2]=t:t&&(c[2]="(".concat(c[2],") and (").concat(t,")")),e.push(c))}},e}},function(n,e,t){"use strict";var r,o={},i=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},a=function(){var n={};return function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}n[e]=t}return n[e]}}();function c(n,e){for(var t=[],r={},o=0;o<n.length;o++){var i=n[o],a=e.base?i[0]+e.base:i[0],c={css:i[1],media:i[2],sourceMap:i[3]};r[a]?r[a].parts.push(c):t.push(r[a]={id:a,parts:[c]})}return t}function s(n,e){for(var t=0;t<n.length;t++){var r=n[t],i=o[r.id],a=0;if(i){for(i.refs++;a<i.parts.length;a++)i.parts[a](r.parts[a]);for(;a<r.parts.length;a++)i.parts.push(b(r.parts[a],e))}else{for(var c=[];a<r.parts.length;a++)c.push(b(r.parts[a],e));o[r.id]={id:r.id,refs:1,parts:c}}}}function l(n){var e=document.createElement("style");if(void 0===n.attributes.nonce){var r=t.nc;r&&(n.attributes.nonce=r)}if(Object.keys(n.attributes).forEach(function(t){e.setAttribute(t,n.attributes[t])}),"function"==typeof n.insert)n.insert(e);else{var o=a(n.insert||"head");if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(e)}return e}var u,f=(u=[],function(n,e){return u[n]=e,u.filter(Boolean).join("\n")});function d(n,e,t,r){var o=t?"":r.css;if(n.styleSheet)n.styleSheet.cssText=f(e,o);else{var i=document.createTextNode(o),a=n.childNodes;a[e]&&n.removeChild(a[e]),a.length?n.insertBefore(i,a[e]):n.appendChild(i)}}var p=null,h=0;function b(n,e){var t,r,o;if(e.singleton){var i=h++;t=p||(p=l(e)),r=d.bind(null,t,i,!1),o=d.bind(null,t,i,!0)}else t=l(e),r=function(n,e,t){var r=t.css,o=t.media,i=t.sourceMap;if(o&&n.setAttribute("media",o),i&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleSheet)n.styleSheet.cssText=r;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(r))}}.bind(null,t,e),o=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)};return r(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;r(n=e)}else o()}}n.exports=function(n,e){(e=e||{}).attributes="object"==typeof e.attributes?e.attributes:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=i());var t=c(n,e);return s(t,e),function(n){for(var r=[],i=0;i<t.length;i++){var a=t[i],l=o[a.id];l&&(l.refs--,r.push(l))}n&&s(c(n,e),e);for(var u=0;u<r.length;u++){var f=r[u];if(0===f.refs){for(var d=0;d<f.parts.length;d++)f.parts[d]();delete o[f.id]}}}}}]);