!function(e){var n={};function t(i){if(n[i])return n[i].exports;var r=n[i]={i:i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,t),r.l=!0,r.exports}t.m=e,t.c=n,t.d=function(e,n,i){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:i})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(t.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)t.d(i,r,function(n){return e[n]}.bind(null,r));return i},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=44)}({0:function(e,n,t){"use strict";e.exports=function(e){var n=[];return n.toString=function(){return this.map(function(n){var t=function(e,n){var t=e[1]||"",i=e[3];if(!i)return t;if(n&&"function"==typeof btoa){var r=(a=i,o=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),p="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(o),"/*# ".concat(p," */")),s=i.sources.map(function(e){return"/*# sourceURL=".concat(i.sourceRoot).concat(e," */")});return[t].concat(s).concat([r]).join("\n")}var a,o,p;return[t].join("\n")}(n,e);return n[2]?"@media ".concat(n[2],"{").concat(t,"}"):t}).join("")},n.i=function(e,t){"string"==typeof e&&(e=[[null,e,""]]);for(var i={},r=0;r<this.length;r++){var s=this[r][0];null!=s&&(i[s]=!0)}for(var a=0;a<e.length;a++){var o=e[a];null!=o[0]&&i[o[0]]||(t&&!o[2]?o[2]=t:t&&(o[2]="(".concat(o[2],") and (").concat(t,")")),n.push(o))}},n}},1:function(e,n,t){"use strict";var i,r={},s=function(){return void 0===i&&(i=Boolean(window&&document&&document.all&&!window.atob)),i},a=function(){var e={};return function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}e[n]=t}return e[n]}}();function o(e,n){for(var t=[],i={},r=0;r<e.length;r++){var s=e[r],a=n.base?s[0]+n.base:s[0],o={css:s[1],media:s[2],sourceMap:s[3]};i[a]?i[a].parts.push(o):t.push(i[a]={id:a,parts:[o]})}return t}function p(e,n){for(var t=0;t<e.length;t++){var i=e[t],s=r[i.id],a=0;if(s){for(s.refs++;a<s.parts.length;a++)s.parts[a](i.parts[a]);for(;a<i.parts.length;a++)s.parts.push(h(i.parts[a],n))}else{for(var o=[];a<i.parts.length;a++)o.push(h(i.parts[a],n));r[i.id]={id:i.id,refs:1,parts:o}}}}function l(e){var n=document.createElement("style");if(void 0===e.attributes.nonce){var i=t.nc;i&&(e.attributes.nonce=i)}if(Object.keys(e.attributes).forEach(function(t){n.setAttribute(t,e.attributes[t])}),"function"==typeof e.insert)e.insert(n);else{var r=a(e.insert||"head");if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}return n}var d,m=(d=[],function(e,n){return d[e]=n,d.filter(Boolean).join("\n")});function c(e,n,t,i){var r=t?"":i.css;if(e.styleSheet)e.styleSheet.cssText=m(n,r);else{var s=document.createTextNode(r),a=e.childNodes;a[n]&&e.removeChild(a[n]),a.length?e.insertBefore(s,a[n]):e.appendChild(s)}}function f(e,n,t){var i=t.css,r=t.media,s=t.sourceMap;if(r&&e.setAttribute("media",r),s&&btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(s))))," */")),e.styleSheet)e.styleSheet.cssText=i;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(i))}}var g=null,u=0;function h(e,n){var t,i,r;if(n.singleton){var s=u++;t=g||(g=l(n)),i=c.bind(null,t,s,!1),r=c.bind(null,t,s,!0)}else t=l(n),i=f.bind(null,t,n),r=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)};return i(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;i(e=n)}else r()}}e.exports=function(e,n){(n=n||{}).attributes="object"==typeof n.attributes?n.attributes:{},n.singleton||"boolean"==typeof n.singleton||(n.singleton=s());var t=o(e,n);return p(t,n),function(e){for(var i=[],s=0;s<t.length;s++){var a=t[s],l=r[a.id];l&&(l.refs--,i.push(l))}e&&p(o(e,n),n);for(var d=0;d<i.length;d++){var m=i[d];if(0===m.refs){for(var c=0;c<m.parts.length;c++)m.parts[c]();delete r[m.id]}}}}},44:function(e,n,t){"use strict";t.r(n);t(45);$(document).ready(function(){$(".sort").on("click",function(){$(".sorted-series").toggleClass("descending")}),$(".sort").on("click",function(e){$(".sort").toggleClass("sort-toggle")})})},45:function(e,n,t){var i=t(46);"string"==typeof i&&(i=[[e.i,i,""]]);var r={insert:"head",singleton:!1};t(1)(i,r);i.locals&&(e.exports=i.locals)},46:function(e,n,t){(e.exports=t(0)(!1)).push([e.i,"/* Global Styles */\n/*====================================================\n\tMIXINS\n====================================================*/\n/**\n * Allows you to use retina images at various pixel densities.\n * Examples:\n *\n *   .retina(/images/mypic.jpg, 2);\n *   .retina(/images/mypic.jpg, 3, 100px 100px, left top no-repeat transparent);\n *\n * @param  {String} $path               The path to the file name minus extension.\n * @param  {Number} $cap:    2          The highest pixel density level images exist for.\n * @param  {Value}  $size:   auto auto  The intended width of the rendered image.\n * @param  {Value}  $extras: null       Any other `background` values to be added.\n */\n/* Series Styles */\n@media (max-width: 800px) {\n  .series-template nav {\n    margin-bottom: 20px;\n  }\n}\n@media (max-width: 800px) {\n  .series-template .postlist {\n    margin: 0 auto;\n    grid-gap: 20px;\n  }\n}\n.series-template .sorted-series {\n  display: flex;\n  flex-direction: column;\n}\n.series-template .sorted-series article:hover {\n  cursor: pointer;\n}\n.series-template .sorted-series article:hover * {\n  cursor: pointer;\n}\n.series-template .descending {\n  flex-direction: column-reverse;\n}\n.series-template .series-article-preview {\n  position: relative;\n  background: white;\n  max-width: -webkit-fill-available;\n  border-bottom: 1px solid #eaedf1;\n}\n@media (max-width: 800px) {\n  .series-template .series-article-preview {\n    width: 100%;\n  }\n}\n.series-template .series-article-preview:hover {\n  background: #5eb9d7;\n  cursor: pointer;\n}\n.series-template .series-article-preview:hover * {\n  color: white !important;\n}\n.series-template .meta-item i {\n  height: 15px !important;\n  font-size: 15px !important;\n  color: #738a94;\n  margin-right: 10px;\n}\n.series-template .meta-item span {\n  color: #738a94;\n}\n.series-template .fa-arrow-to-bottom {\n  transition: all 0.2s ease-out;\n}\n.series-template .sort {\n  float: right;\n  line-height: 1;\n  font-size: 17px;\n  text-align: right;\n  padding: 15px;\n  transition: all 0.2s ease-out;\n  background: white;\n}\n.series-template .sort:hover {\n  background: #40cebb;\n  cursor: pointer;\n}\n.series-template .sort:hover * {\n  color: white;\n}\n.series-template .sort .desc {\n  display: none;\n  margin-right: 7px;\n}\n.series-template .sort .asc {\n  display: inline;\n  margin-right: 7px;\n}\n.series-template .sort span {\n  font-family: 'proxima-nova', sans-serif;\n  color: #738a94;\n}\n@media (max-width: 800px) {\n  .series-template .sort span {\n    font-size: 16px;\n  }\n}\n.series-template .sort i {\n  color: #738a94;\n}\n.series-template .series-article-preview {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  padding: 20px;\n  transition: all 0.2s ease-out;\n  overflow: hidden;\n}\n@media (max-width: 600px) {\n  .series-template .series-article-preview {\n    padding: 15px 0;\n    margin-bottom: 8px;\n  }\n}\n.series-template .series-article-preview:hover {\n  cursor: pointer;\n}\n.series-template .series-article-preview:hover .imagewrapper {\n  box-shadow: 0 0 2px #1e5a6e;\n}\n.series-template .series-article-preview:hover * {\n  cursor: pointer;\n}\n.series-template .series-article-preview:last-child {\n  border-bottom: none;\n}\n.series-template .series-article-preview .post-image {\n  margin: 0;\n  height: auto;\n  width: auto;\n  position: relative;\n}\n@media (max-width: 600px) {\n  .series-template .series-article-preview .post-image {\n    max-width: 115px;\n    height: 100% !important;\n  }\n}\n.series-template .series-article-preview .post-count {\n  margin: 0 0 5px;\n  font-weight: 600;\n  font-weight: 100;\n  color: #4c5c7f;\n  font-size: 0.9em;\n  line-height: 1;\n}\n.series-template .series-article-preview .mobile-date,\n.series-template .series-article-preview .mobile-name {\n  display: none;\n}\n.series-template .series-article-preview .details {\n  width: 100%;\n  padding: 5px 20px 0;\n  position: relative;\n}\n@media (max-width: 800px) {\n  .series-template .series-article-preview .details {\n    padding: 0 0 0 15px;\n  }\n}\n.series-template .series-article-preview .details .meta {\n  display: flex;\n  justify-content: left;\n  align-items: center;\n  position: absolute;\n  bottom: 4px;\n}\n.series-template .series-article-preview .details .meta .info {\n  display: none;\n}\n.series-template .series-article-preview .details .post-head {\n  width: 100%;\n}\n@media (max-width: 600px) {\n  .series-template .series-article-preview .details .post-head {\n    width: -webkit-fill-available;\n    overflow: hidden;\n    padding: 5px 0 0;\n  }\n}\n.series-template .series-article-preview .details .post-head .post-title {\n  font-weight: 900;\n  width: 100%;\n  margin: 0 0 5px;\n  font-size: 1.25em;\n  min-height: 56px;\n  line-height: 1.25;\n}\n.series-template .series-article-preview .details .post-head .post-title a {\n  font-family: 'HarmoniaSansPro-Bold', sans-serif;\n  font-size: 1em;\n  transition: all 0.2s ease-out;\n  color: #2f394f;\n}\n@media (max-width: 600px) {\n  .series-template .series-article-preview .details .post-head .post-title a {\n    font-family: 'HarmoniaSansPro-Bold', sans-serif;\n    font-size: 0.9em;\n  }\n}\n.series-template .series-article-preview .details .post-head .post-title a:hover {\n  color: white;\n}\n@media (max-width: 600px) {\n  .series-template .series-article-preview .details .post-head .post-title {\n    width: -webkit-fill-available;\n    overflow: hidden;\n    line-height: 1;\n  }\n}\n.series-template .series-article-preview .details .post-head .post-excerpt {\n  color: #2f394f;\n  font-family: 'HarmoniaSansPro-Bold', sans-serif;\n  font-size: 1em;\n  font-weight: 100;\n  line-height: 1.21;\n  text-align: left;\n  display: none;\n  white-space: pre-wrap;\n}\n@media (max-width: 600px) {\n  .series-template .series-article-preview .details .post-head .post-excerpt {\n    display: none;\n  }\n}\n.series-template .series-article-preview .details .post-head .postcount {\n  font-family: 'proxima-nova', sans-serif;\n  font-size: 1.3em;\n}\n.series-template .series-article-preview .details .meta {\n  padding: 0;\n}\n@media (max-width: 600px) {\n  .series-template .series-article-preview .details .meta {\n    display: none;\n  }\n}\n.series-template .series-article-preview .details .meta .meta-item {\n  margin: auto 40px auto 0;\n}\n.series-template .series-article-preview .details .meta .meta-item:last-child {\n  margin: auto 0;\n}\n.series-template .series-article-preview .details .meta .meta-item span {\n  font-family: 'proxima-nova', sans-serif;\n  white-space: nowrap;\n  max-width: 100px;\n  text-overflow: ellipsis;\n  overflow: hidden;\n}\n.series-template .series-article-preview .details .meta .date * {\n  color: #738a94;\n}\n.series-template .series-article-preview .details .meta .tags {\n  padding: 2px 8px;\n  border-radius: 12px;\n  font-weight: 600;\n  font-size: 0.9em !important;\n  color: white !important;\n}\n.series-template .series-article-preview .details .meta .author img {\n  width: 30px;\n  margin-right: 8px;\n  height: auto;\n}\n.series-template .series-article-preview .details .meta .author span {\n  text-transform: capitalize;\n  color: #738a94;\n}\n.series-template .series-article-preview .imagewrapper {\n  display: block;\n  width: auto;\n  height: 115px;\n  overflow: hidden;\n}\n@media (max-width: 600px) {\n  .series-template .series-article-preview .imagewrapper {\n    max-width: 40%;\n    height: 82px;\n  }\n}\n.series-template .series-article-preview .imagewrapper img {\n  height: 115px;\n  margin-bottom: -8px;\n}\n@media (max-width: 800px) {\n  .series-template .series-article-preview .imagewrapper img {\n    width: auto;\n  }\n}\n@media (max-width: 600px) {\n  .series-template .series-article-preview .imagewrapper img {\n    height: 100%;\n  }\n}\n.series-template .series-article-preview .imagewrapper .post-card-image {\n  max-width: 220px;\n  height: auto;\n  margin: 0;\n}\n@media (max-width: 600px) {\n  .series-template .series-article-preview .imagewrapper .post-card-image {\n    max-width: 200px;\n  }\n}\n@media (max-width: 600px) {\n  .series-template .series-article-preview .imagewrapper .post-card-image {\n    max-width: 120px;\n    height: auto;\n    margin: 0;\n  }\n}\n.page-template h1 {\n  font-weight: 100;\n}\n.page-template .page-container {\n  margin-bottom: 30px;\n}\n@media (max-width: 800px) {\n  .page-template .page-container {\n    margin-bottom: 0;\n  }\n}\n.page-template .page-container .main-content {\n  box-shadow: 0 0 5px rgba(65, 67, 144, 0.15);\n  background: white;\n}\n.page-template .page-container .main-content a {\n  font-weight: 600;\n}\n/* Series Archive Styles */\n.page-series .page-content {\n  padding: 30px;\n  background: white;\n  border-radius: 5px;\n}\n@media (max-width: 800px) {\n  .page-series .page-content {\n    border-radius: 0;\n  }\n}\n.page-series .page-content .series-title {\n  margin: 0;\n}\n.page-series .page-content .serieslist {\n  display: grid;\n  grid-template-columns: [first] 1fr [last] 1fr;\n  grid-column-gap: 20px;\n  grid-row-gap: 20px;\n  margin: 30px 0 0;\n}\n@media (max-width: 600px) {\n  .page-series .page-content .serieslist {\n    grid-template-columns: 1fr;\n  }\n}\n.page-series .page-content .serieslist .seriespreview {\n  overflow: hidden;\n  background: #f3fbff;\n  border-radius: 5px;\n  border: 1px solid #dfe8ed;\n  transition: all 0.2s ease-out;\n}\n.page-series .page-content .serieslist .seriespreview:hover {\n  cursor: pointer;\n  background: #e7f7ff;\n  border-color: #bee8ff;\n}\n.page-series .page-content .serieslist .seriespreview:hover .series-image {\n  opacity: 0.7;\n}\n.page-series .page-content .serieslist .seriespreview:hover .series-title,\n.page-series .page-content .serieslist .seriespreview:hover .series-description,\n.page-series .page-content .serieslist .seriespreview:hover .count {\n  color: #4381a1 !important;\n}\n.page-series .page-content .serieslist .seriespreview .series-image {\n  width: 100%;\n  transition: all 0.2s ease-out;\n}\n.page-series .page-content .serieslist .seriespreview .series-info {\n  padding: 10px 15px;\n}\n.page-series .page-content .serieslist .seriespreview .series-info .series-title {\n  color: #3f4856;\n  font-family: 'proxima-nova', sans-serif;\n  margin-bottom: 7px;\n  margin-top: 0;\n  font-size: 1.3em;\n  line-height: 1.2;\n  font-weight: 600;\n  transition: all 0.2s ease-out;\n}\n.page-series .page-content .serieslist .seriespreview .series-info .series-description {\n  font-weight: 300;\n  color: #373940;\n  margin: 10px 0;\n  line-height: 1.3;\n  text-align: left;\n  font-family: 'proxima-nova', sans-serif;\n  display: -webkit-box;\n  -webkit-line-clamp: 3;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n  transition: all 0.2s ease-out;\n}\n.page-series .page-content .serieslist .seriespreview .series-info .count {\n  font-size: 0.8em;\n  color: #959595;\n}\n@media (max-width: 800px) {\n  .page-series .sidebar {\n    display: none;\n  }\n}\n",""])}});