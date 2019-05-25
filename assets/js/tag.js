!function(t){var n={};function e(i){if(n[i])return n[i].exports;var a=n[i]={i:i,l:!1,exports:{}};return t[i].call(a.exports,a,a.exports,e),a.l=!0,a.exports}e.m=t,e.c=n,e.d=function(t,n,i){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:i})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(e.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var a in t)e.d(i,a,function(n){return t[n]}.bind(null,a));return i},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="",e(e.s=156)}({156:function(t,n,e){"use strict";e.r(n);e(157)},157:function(t,n,e){var i=e(158);"string"==typeof i&&(i=[[t.i,i,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};e(7)(i,a);i.locals&&(t.exports=i.locals)},158:function(t,n,e){(t.exports=e(6)(!1)).push([t.i,"/*====================================================\n\tCOLOR VARIABLE FOR THEME\n====================================================*/\n.tag-template .series-cover {\n  background-size: cover;\n  background-position-y: center;\n  height: 250px;\n  background-color: #324a6e;\n  background-blend-mode: multiply;\n  box-shadow: 0 0 5px rgba(65, 67, 144, 0.15);\n}\n@media (max-width: 600px) {\n  .tag-template .series-cover {\n    margin-left: calc(-50vw + 50%) !important;\n    margin-right: calc(-50vw + 50%) !important;\n    margin-top: -20px;\n  }\n}\n.tag-template .series-cover .tag-name {\n  font-size: 2.2em;\n  color: white !important;\n  font-family: 'AvenirNextLTPro-Medium', sans-serif;\n  text-shadow: 0 0 20px #2f2d56;\n  margin-top: 90px;\n}\n.tag-template .series-cover .tag-description {\n  font-weight: 300;\n  line-height: 1.5;\n  max-width: 90%;\n  margin: 20px auto 0;\n  color: white;\n  font-family: 'AvenirNextLTPro-Light', sans-serif;\n  text-shadow: 2px 2px 0 #15133c, 2px 2px 10px #15133c;\n  font-size: 1em;\n}\n.tag-template .postlist {\n  grid-template-columns: 1fr 1fr;\n  grid-column-gap: 3%;\n  margin: auto;\n  display: grid;\n  grid-template-columns: 48.5% 48.5%;\n}\n@media (max-width: 600px) {\n  .tag-template .postlist {\n    grid-template-columns: 1fr;\n    grid-template-columns: 100%;\n  }\n}\n.tag-template .postlist article {\n  margin-bottom: 20px;\n}\n.tag-template .postlist article:hover .post-image,\n.tag-template .postlist article:hover img {\n  border: unset !important;\n}\n.tag-template .postlist article .content {\n  position: relative;\n  margin: 5px 15px 15px;\n  padding: 0;\n  height: auto;\n  display: block;\n}\n@media (max-width: 600px) {\n  .tag-template .postlist article .content {\n    height: auto;\n    margin: 5px 15px 15px;\n  }\n}\n@media (max-width: 600px) {\n  .tag-template .postlist article .post-content {\n    display: none;\n  }\n}\n.tag-template .postlist article {\n  width: 100%;\n  height: auto;\n  position: relative;\n  display: flex;\n  flex-direction: column;\n}\n@media (max-width: 600px) {\n  .tag-template .postlist article {\n    width: 100%;\n    height: auto;\n  }\n}\n@media (max-width: 800px) {\n  .tag-template .postlist article .tags {\n    display: none !important;\n  }\n}\n.tag-template .postlist article .post-head {\n  margin: 0;\n  min-height: 105px;\n  padding: 0 5px;\n}\n@media (max-width: 600px) {\n  .tag-template .postlist article .post-head {\n    margin: 0 0 80px;\n    min-height: unset;\n  }\n}\n.tag-template .postlist article .post-title {\n  font-size: 1.4em;\n}\n.tag-template .postlist article .post-title a {\n  font-family: 'TTNormsPro-Medium', sans-serif;\n  font-weight: 500;\n}\n.tag-template .postlist article .post-image {\n  display: block;\n  margin: 0 auto;\n  background-size: cover;\n  width: 100%;\n}\n.tag-template .postlist article .post-excerpt {\n  -webkit-line-clamp: 3;\n  display: -webkit-box;\n  min-height: 40px;\n  margin-bottom: 55px;\n  overflow: hidden;\n  font-family: 'TTNormsPro-Regular', sans-serif;\n  font-size: 1em !important;\n  text-overflow: ellipsis;\n}\n@media (max-width: 600px) {\n  .tag-template .postlist article .post-excerpt {\n    min-height: unset;\n    height: fit-content;\n    max-height: fit-content;\n    position: relative;\n    margin-bottom: 20px;\n  }\n}\n.tag-template .postlist article .post-permalink {\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n  padding: 10px 0 0;\n}\n.tag-template .postlist article .post-permalink .meta {\n  justify-content: left;\n}\n.tag-template .postlist article .post-permalink .btn {\n  padding: 12px 20px;\n  font-size: 16px;\n}\n.tag-template .postlist article .post-permalink .btn a {\n  line-height: 1;\n  height: fit-content;\n}\n.tag-template .postlist article .post-permalink .btn:hover {\n  background: #30b1a7;\n  color: white;\n}\n@media (max-width: 600px) {\n  .tag-template .postlist article .post-permalink .btn {\n    display: block !important;\n  }\n}\n.tag-template .postlist article .author,\n.tag-template .postlist article .date,\n.tag-template .postlist article p {\n  display: none !important;\n}\n.tag-template .tag-image {\n  width: 100%;\n  height: 370px;\n  background-size: cover !important;\n}\n.tag-template .post-title a {\n  font-size: 1em !important;\n  font-family: 'TTNormsPro-Regular', sans-serif;\n}\n.tag-template .post-preview {\n  padding: 0 !important;\n}\n.page-series .page-head {\n  margin: 40px 40px 0;\n  padding: 0;\n}\n@media (max-width: 800px) {\n  .page-series .page-head {\n    margin: 40px 20px 0;\n  }\n}\n.page-series .post-title {\n  margin: 27px 28px 20px;\n}\n@media (max-width: 600px) {\n  .page-series .post-title {\n    font-size: 3em;\n  }\n}\n@media (max-width: 900px) {\n  .page-series .post-title .post-content {\n    margin: 25px 50px 0;\n  }\n}\n@media (max-width: 900px) {\n  .page-series .post-title .page-title {\n    margin: 40px 50px 0;\n  }\n}\n@media (max-width: 900px) {\n  .page-series .post-title .container {\n    width: 90% !important;\n  }\n}\n@media (max-width: 600px) {\n  .page-series .post-title .container {\n    width: 100% !important;\n  }\n}\n.page-series p {\n  color: #505050;\n  margin: -20px 40px 30px;\n  font-weight: 300;\n}\n@media (max-width: 900px) {\n  .page-series p {\n    min-height: 63px;\n    margin: -20px 20px 30px;\n  }\n}\n.page-series .tag-container {\n  display: grid;\n  grid-template-columns: [first] 1fr [last] 1fr;\n  grid-template-rows: 367px;\n  grid-column-gap: 10px;\n  grid-row-gap: 10px;\n  margin: 30px 40px 40px;\n}\n@media (max-width: 600px) {\n  .page-series .tag-container {\n    grid-template-columns: [first] 1fr;\n    grid-template-rows: 342px;\n    margin: 20px 20px 30px;\n    grid-column-gap: 15px;\n  }\n}\n.page-series .tag-container .tag-wrapper {\n  background: #f4fcff;\n  margin: 0;\n  border: 1px solid #dadada;\n  transition: all 0.3s ease-out;\n  grid-template-rows: 291px;\n}\n.page-series .tag-container .tag-wrapper .tag-title {\n  margin: 0;\n  width: auto;\n  background: linear-gradient(0deg, rgba(2, 0, 36, 0) 0%, #001b2f 100%);\n  height: 204px;\n  padding: 20px 20px 0;\n}\n.page-series .tag-container .tag-wrapper .tag-title span {\n  font-size: 1.1em;\n  margin: 0;\n  font-weight: 600;\n}\n@media (max-width: 900px) {\n  .page-series .tag-container .tag-wrapper {\n    margin: 0;\n  }\n  .page-series .tag-container .tag-wrapper:last-of-type {\n    margin-bottom: 0;\n  }\n}\n@media (max-width: 600px) {\n  .page-series .tag-container .tag-wrapper {\n    width: 100%;\n  }\n}\n.page-series .tag-container .tag-wrapper:hover {\n  background-color: #5eb9d7;\n  border: 1px solid #5eb9d7;\n  cursor: pointer !important;\n}\n.page-series .tag-container .tag-wrapper:hover .tag-title {\n  background: linear-gradient(0deg, rgba(2, 0, 36, 0) 0%, #007ad4 100%);\n}\n.page-series .tag-container .tag-wrapper:hover h2,\n.page-series .tag-container .tag-wrapper:hover p,\n.page-series .tag-container .tag-wrapper:hover span {\n  color: #1e608a !important;\n}\n.page-series .tag-container .tag-wrapper:hover .img-wrapper {\n  opacity: 0.7;\n}\n.page-series .tag-container .tag-wrapper .img-wrapper {\n  text-align: center;\n  width: 100%;\n  max-height: 189px;\n  height: auto;\n  position: relative;\n  display: block;\n  transition: all 0.3s ease-out;\n  overflow: hidden;\n}\n@media (max-width: 800px) {\n  .page-series .tag-container .tag-wrapper .img-wrapper {\n    max-height: 206px;\n  }\n}\n@media (max-width: 600px) {\n  .page-series .tag-container .tag-wrapper .img-wrapper {\n    max-height: 186px;\n  }\n}\n.page-series .tag-container .tag-wrapper .img-wrapper img {\n  width: 100%;\n  height: auto;\n}\n.page-series .tag-container .tag-wrapper .meta-info {\n  font-weight: 900;\n  color: white;\n  font-size: 12px;\n  padding: 0;\n  text-align: left;\n}\n.page-series .tag-container .tag-wrapper .description {\n  padding: 15px;\n  background: #f6fcff;\n  margin: 0;\n  position: relative;\n  bottom: 0;\n  color: #162c52;\n  width: auto;\n  display: block;\n  text-align: left;\n  height: 158px;\n  margin-top: -10px;\n}\n@media (max-width: 1000px) {\n  .page-series .tag-container .tag-wrapper .description {\n    height: 176px;\n  }\n}\n@media (max-width: 900px) {\n  .page-series .tag-container .tag-wrapper .description {\n    height: 171px;\n  }\n  .page-series .tag-container .tag-wrapper .description p {\n    font-size: 0.8em;\n  }\n}\n@media (max-width: 800px) {\n  .page-series .tag-container .tag-wrapper .description {\n    height: 155px;\n  }\n}\n@media (max-width: 700px) {\n  .page-series .tag-container .tag-wrapper .description {\n    height: 140px;\n  }\n}\n@media (max-width: 600px) {\n  .page-series .tag-container .tag-wrapper .description {\n    height: 134px;\n  }\n}\n.page-series .tag-container .tag-wrapper .description h2 {\n  color: #3f4856;\n  font-family: 'TTNormsPro-Regular', sans-serif;\n  margin-bottom: 7px;\n  margin-top: 0;\n  font-size: 1.3em;\n  line-height: 1.2;\n  font-weight: 600;\n}\n@media (max-width: 900px) {\n  .page-series .tag-container .tag-wrapper .description h2 {\n    font-size: 1.2em;\n  }\n}\n.page-series .tag-container .tag-wrapper .description p {\n  font-size: 0.9em;\n  font-weight: 300;\n  color: #373940;\n  margin: 5px 0;\n  line-height: 1.5;\n  text-align: left;\n  font-family: 'AvenirNextLTPro-Light', sans-serif;\n  flex-grow: 1;\n  flex-shrink: 0;\n  flex-basis: auto;\n  display: -webkit-box;\n  -webkit-line-clamp: 3;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}\n@media (max-width: 600px) {\n  .page-series .tag-container .tag-wrapper .description p {\n    margin: 10px 0 25px;\n    min-height: 0;\n  }\n}\n.page-series .tag-container .tag-wrapper .description .postcount {\n  color: #4d4a5e;\n  text-align: right;\n  line-height: 1;\n  position: absolute;\n  bottom: 20px;\n  right: 20px;\n  font-size: 0.8em;\n  font-family: 'AvenirNextLTPro-Medium', sans-serif;\n}\n.tag-title {\n  color: white;\n}\n.tag-image {\n  margin-top: 30px;\n}\n@media (max-width: 600px) {\n  .tag-image {\n    display: none;\n  }\n}\n",""])},6:function(t,n,e){"use strict";t.exports=function(t){var n=[];return n.toString=function(){return this.map(function(n){var e=function(t,n){var e=t[1]||"",i=t[3];if(!i)return e;if(n&&"function"==typeof btoa){var a=(o=i,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */"),r=i.sources.map(function(t){return"/*# sourceURL="+i.sourceRoot+t+" */"});return[e].concat(r).concat([a]).join("\n")}var o;return[e].join("\n")}(n,t);return n[2]?"@media "+n[2]+"{"+e+"}":e}).join("")},n.i=function(t,e){"string"==typeof t&&(t=[[null,t,""]]);for(var i={},a=0;a<this.length;a++){var r=this[a][0];null!=r&&(i[r]=!0)}for(a=0;a<t.length;a++){var o=t[a];null!=o[0]&&i[o[0]]||(e&&!o[2]?o[2]=e:e&&(o[2]="("+o[2]+") and ("+e+")"),n.push(o))}},n}},7:function(t,n,e){var i,a,r={},o=(i=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===a&&(a=i.apply(this,arguments)),a}),p=function(t){var n={};return function(t,e){if("function"==typeof t)return t();if(void 0===n[t]){var i=function(t,n){return n?n.querySelector(t):document.querySelector(t)}.call(this,t,e);if(window.HTMLIFrameElement&&i instanceof window.HTMLIFrameElement)try{i=i.contentDocument.head}catch(t){i=null}n[t]=i}return n[t]}}(),s=null,l=0,g=[],c=e(9);function d(t,n){for(var e=0;e<t.length;e++){var i=t[e],a=r[i.id];if(a){a.refs++;for(var o=0;o<a.parts.length;o++)a.parts[o](i.parts[o]);for(;o<i.parts.length;o++)a.parts.push(w(i.parts[o],n))}else{var p=[];for(o=0;o<i.parts.length;o++)p.push(w(i.parts[o],n));r[i.id]={id:i.id,refs:1,parts:p}}}}function m(t,n){for(var e=[],i={},a=0;a<t.length;a++){var r=t[a],o=n.base?r[0]+n.base:r[0],p={css:r[1],media:r[2],sourceMap:r[3]};i[o]?i[o].parts.push(p):e.push(i[o]={id:o,parts:[p]})}return e}function f(t,n){var e=p(t.insertInto);if(!e)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var i=g[g.length-1];if("top"===t.insertAt)i?i.nextSibling?e.insertBefore(n,i.nextSibling):e.appendChild(n):e.insertBefore(n,e.firstChild),g.push(n);else if("bottom"===t.insertAt)e.appendChild(n);else{if("object"!=typeof t.insertAt||!t.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var a=p(t.insertAt.before,e);e.insertBefore(n,a)}}function u(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t);var n=g.indexOf(t);n>=0&&g.splice(n,1)}function h(t){var n=document.createElement("style");if(void 0===t.attrs.type&&(t.attrs.type="text/css"),void 0===t.attrs.nonce){var i=function(){0;return e.nc}();i&&(t.attrs.nonce=i)}return x(n,t.attrs),f(t,n),n}function x(t,n){Object.keys(n).forEach(function(e){t.setAttribute(e,n[e])})}function w(t,n){var e,i,a,r;if(n.transform&&t.css){if(!(r="function"==typeof n.transform?n.transform(t.css):n.transform.default(t.css)))return function(){};t.css=r}if(n.singleton){var o=l++;e=s||(s=h(n)),i=y.bind(null,e,o,!1),a=y.bind(null,e,o,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(e=function(t){var n=document.createElement("link");return void 0===t.attrs.type&&(t.attrs.type="text/css"),t.attrs.rel="stylesheet",x(n,t.attrs),f(t,n),n}(n),i=function(t,n,e){var i=e.css,a=e.sourceMap,r=void 0===n.convertToAbsoluteUrls&&a;(n.convertToAbsoluteUrls||r)&&(i=c(i));a&&(i+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */");var o=new Blob([i],{type:"text/css"}),p=t.href;t.href=URL.createObjectURL(o),p&&URL.revokeObjectURL(p)}.bind(null,e,n),a=function(){u(e),e.href&&URL.revokeObjectURL(e.href)}):(e=h(n),i=function(t,n){var e=n.css,i=n.media;i&&t.setAttribute("media",i);if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}.bind(null,e),a=function(){u(e)});return i(t),function(n){if(n){if(n.css===t.css&&n.media===t.media&&n.sourceMap===t.sourceMap)return;i(t=n)}else a()}}t.exports=function(t,n){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(n=n||{}).attrs="object"==typeof n.attrs?n.attrs:{},n.singleton||"boolean"==typeof n.singleton||(n.singleton=o()),n.insertInto||(n.insertInto="head"),n.insertAt||(n.insertAt="bottom");var e=m(t,n);return d(e,n),function(t){for(var i=[],a=0;a<e.length;a++){var o=e[a];(p=r[o.id]).refs--,i.push(p)}t&&d(m(t,n),n);for(a=0;a<i.length;a++){var p;if(0===(p=i[a]).refs){for(var s=0;s<p.parts.length;s++)p.parts[s]();delete r[p.id]}}}};var b,v=(b=[],function(t,n){return b[t]=n,b.filter(Boolean).join("\n")});function y(t,n,e,i){var a=e?"":i.css;if(t.styleSheet)t.styleSheet.cssText=v(n,a);else{var r=document.createTextNode(a),o=t.childNodes;o[n]&&t.removeChild(o[n]),o.length?t.insertBefore(r,o[n]):t.appendChild(r)}}},9:function(t,n){t.exports=function(t){var n="undefined"!=typeof window&&window.location;if(!n)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var e=n.protocol+"//"+n.host,i=e+n.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(t,n){var a,r=n.trim().replace(/^"(.*)"$/,function(t,n){return n}).replace(/^'(.*)'$/,function(t,n){return n});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(r)?t:(a=0===r.indexOf("//")?r:0===r.indexOf("/")?e+r:i+r.replace(/^\.\//,""),"url("+JSON.stringify(a)+")")})}}});