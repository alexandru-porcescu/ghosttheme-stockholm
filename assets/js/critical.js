!function(n){var t={};function e(o){if(t[o])return t[o].exports;var i=t[o]={i:o,l:!1,exports:{}};return n[o].call(i.exports,i,i.exports,e),i.l=!0,i.exports}e.m=n,e.c=t,e.d=function(n,t,o){e.o(n,t)||Object.defineProperty(n,t,{enumerable:!0,get:o})},e.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},e.t=function(n,t){if(1&t&&(n=e(n)),8&t)return n;if(4&t&&"object"==typeof n&&n&&n.__esModule)return n;var o=Object.create(null);if(e.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:n}),2&t&&"string"!=typeof n)for(var i in n)e.d(o,i,function(t){return n[t]}.bind(null,i));return o},e.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return e.d(t,"a",t),t},e.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},e.p="",e(e.s=11)}([function(n,t,e){"use strict";n.exports=function(n){var t=[];return t.toString=function(){return this.map(function(t){var e=function(n,t){var e=n[1]||"",o=n[3];if(!o)return e;if(t&&"function"==typeof btoa){var i=(a=o,s=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),p="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s),"/*# ".concat(p," */")),r=o.sources.map(function(n){return"/*# sourceURL=".concat(o.sourceRoot).concat(n," */")});return[e].concat(r).concat([i]).join("\n")}var a,s,p;return[e].join("\n")}(t,n);return t[2]?"@media ".concat(t[2],"{").concat(e,"}"):e}).join("")},t.i=function(n,e){"string"==typeof n&&(n=[[null,n,""]]);for(var o={},i=0;i<this.length;i++){var r=this[i][0];null!=r&&(o[r]=!0)}for(var a=0;a<n.length;a++){var s=n[a];null!=s[0]&&o[s[0]]||(e&&!s[2]?s[2]=e:e&&(s[2]="(".concat(s[2],") and (").concat(e,")")),t.push(s))}},t}},function(n,t,e){var o,i,r={},a=(o=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===i&&(i=o.apply(this,arguments)),i}),s=function(n){var t={};return function(n,e){if("function"==typeof n)return n();if(void 0===t[n]){var o=function(n,t){return t?t.querySelector(n):document.querySelector(n)}.call(this,n,e);if(window.HTMLIFrameElement&&o instanceof window.HTMLIFrameElement)try{o=o.contentDocument.head}catch(n){o=null}t[n]=o}return t[n]}}(),p=null,d=0,l=[],f=e(2);function c(n,t){for(var e=0;e<n.length;e++){var o=n[e],i=r[o.id];if(i){i.refs++;for(var a=0;a<i.parts.length;a++)i.parts[a](o.parts[a]);for(;a<o.parts.length;a++)i.parts.push(b(o.parts[a],t))}else{var s=[];for(a=0;a<o.parts.length;a++)s.push(b(o.parts[a],t));r[o.id]={id:o.id,refs:1,parts:s}}}}function m(n,t){for(var e=[],o={},i=0;i<n.length;i++){var r=n[i],a=t.base?r[0]+t.base:r[0],s={css:r[1],media:r[2],sourceMap:r[3]};o[a]?o[a].parts.push(s):e.push(o[a]={id:a,parts:[s]})}return e}function u(n,t){var e=s(n.insertInto);if(!e)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var o=l[l.length-1];if("top"===n.insertAt)o?o.nextSibling?e.insertBefore(t,o.nextSibling):e.appendChild(t):e.insertBefore(t,e.firstChild),l.push(t);else if("bottom"===n.insertAt)e.appendChild(t);else{if("object"!=typeof n.insertAt||!n.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var i=s(n.insertAt.before,e);e.insertBefore(t,i)}}function g(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n);var t=l.indexOf(n);t>=0&&l.splice(t,1)}function h(n){var t=document.createElement("style");if(void 0===n.attrs.type&&(n.attrs.type="text/css"),void 0===n.attrs.nonce){var o=function(){0;return e.nc}();o&&(n.attrs.nonce=o)}return w(t,n.attrs),u(n,t),t}function w(n,t){Object.keys(t).forEach(function(e){n.setAttribute(e,t[e])})}function b(n,t){var e,o,i,r;if(t.transform&&n.css){if(!(r="function"==typeof t.transform?t.transform(n.css):t.transform.default(n.css)))return function(){};n.css=r}if(t.singleton){var a=d++;e=p||(p=h(t)),o=y.bind(null,e,a,!1),i=y.bind(null,e,a,!0)}else n.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(e=function(n){var t=document.createElement("link");return void 0===n.attrs.type&&(n.attrs.type="text/css"),n.attrs.rel="stylesheet",w(t,n.attrs),u(n,t),t}(t),o=function(n,t,e){var o=e.css,i=e.sourceMap,r=void 0===t.convertToAbsoluteUrls&&i;(t.convertToAbsoluteUrls||r)&&(o=f(o));i&&(o+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */");var a=new Blob([o],{type:"text/css"}),s=n.href;n.href=URL.createObjectURL(a),s&&URL.revokeObjectURL(s)}.bind(null,e,t),i=function(){g(e),e.href&&URL.revokeObjectURL(e.href)}):(e=h(t),o=function(n,t){var e=t.css,o=t.media;o&&n.setAttribute("media",o);if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}.bind(null,e),i=function(){g(e)});return o(n),function(t){if(t){if(t.css===n.css&&t.media===n.media&&t.sourceMap===n.sourceMap)return;o(n=t)}else i()}}n.exports=function(n,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(t=t||{}).attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=a()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var e=m(n,t);return c(e,t),function(n){for(var o=[],i=0;i<e.length;i++){var a=e[i];(s=r[a.id]).refs--,o.push(s)}n&&c(m(n,t),t);for(i=0;i<o.length;i++){var s;if(0===(s=o[i]).refs){for(var p=0;p<s.parts.length;p++)s.parts[p]();delete r[s.id]}}}};var x,v=(x=[],function(n,t){return x[n]=t,x.filter(Boolean).join("\n")});function y(n,t,e,o){var i=e?"":o.css;if(n.styleSheet)n.styleSheet.cssText=v(t,i);else{var r=document.createTextNode(i),a=n.childNodes;a[t]&&n.removeChild(a[t]),a.length?n.insertBefore(r,a[t]):n.appendChild(r)}}},function(n,t){n.exports=function(n){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!n||"string"!=typeof n)return n;var e=t.protocol+"//"+t.host,o=e+t.pathname.replace(/\/[^\/]*$/,"/");return n.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(n,t){var i,r=t.trim().replace(/^"(.*)"$/,function(n,t){return t}).replace(/^'(.*)'$/,function(n,t){return t});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(r)?n:(i=0===r.indexOf("//")?r:0===r.indexOf("/")?e+r:o+r.replace(/^\.\//,""),"url("+JSON.stringify(i)+")")})}},,,,,,,,,function(n,t,e){"use strict";e.r(t);e(12)},function(n,t,e){var o=e(13);"string"==typeof o&&(o=[[n.i,o,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};e(1)(o,i);o.locals&&(n.exports=o.locals)},function(n,t,e){(t=n.exports=e(0)(!1)).push([n.i,"@import url(//hello.myfonts.net/count/39827b);",""]),t.push([n.i,"@import url(//hackers.nyc3.cdn.digitaloceanspaces.com/fonts/dankmono/css/dank-mono.css);",""]),t.push([n.i,"/* Critical Styles */\n/*====================================================\n\tCOLOR VARIABLE FOR THEME\n====================================================*/\n/*====================================================\n\tMIXINS\n====================================================*/\n/**\n * Allows you to use retina images at various pixel densities.\n * Examples:\n *\n *   .retina(/images/mypic.jpg, 2);\n *   .retina(/images/mypic.jpg, 3, 100px 100px, left top no-repeat transparent);\n *\n * @param  {String} $path               The path to the file name minus extension.\n * @param  {Number} $cap:    2          The highest pixel density level images exist for.\n * @param  {Value}  $size:   auto auto  The intended width of the rendered image.\n * @param  {Value}  $extras: null       Any other `background` values to be added.\n */\n/*====================================================\n\tcommon styles\n====================================================*/\nbody,\nhtml {\n  font-family: 'TTNormsPro-Regular', sans-serif;\n  font-size: 14px;\n  color: #373940;\n  line-height: 1.5em;\n  background: #ecf1f9;\n  position: relative;\n  margin: 0;\n  width: 100%;\n  overflow-x: hidden;\n}\narticle li,\narticle p {\n  line-height: 1.7em;\n  font-size: 16px;\n  font-family: 'TTNormsPro-Regular', sans-serif;\n}\nsection {\n  max-width: 1100px;\n  margin: 0 auto;\n  padding-top: 1px;\n}\n@media (max-width: 600px) {\n  section {\n    margin: 0 auto;\n  }\n}\nstrong {\n  font-family: 'TTNormsPro-Medium', sans-serif;\n  color: #2f394f;\n}\na {\n  font-family: 'TTNormsPro-Regular', sans-serif;\n}\na:hover {\n  cursor: pointer;\n}\n.h1,\nh1 {\n  font-family: 'TTNormsPro-Regular', sans-serif;\n  font-size: 2em;\n  font-weight: 500;\n  color: #2f394f;\n}\nh2,\nh4,\nh5,\nh6 {\n  font-family: 'TTNormsPro-Medium', sans-serif;\n  font-weight: 700;\n}\nh3 {\n  font-family: 'TTNormsPro-Medium', sans-serif;\n}\n.h2,\nh2 {\n  font-size: 2.2em;\n  font-family: 'TTNormsPro-Regular', sans-serif;\n}\n@media (max-width: 600px) {\n  .h2,\n  h2 {\n    font-size: 2em;\n  }\n}\n.main-content {\n  display: block;\n}\n.h4,\nh4 {\n  font-size: 1.3em;\n}\n.h5,\nh5 {\n  font-size: 1.4em;\n  font-weight: 500;\n  margin: 5px 0 0;\n  font-family: 'TTNormsPro-Regular', sans-serif;\n  color: #2f394f;\n  line-height: 1;\n  text-align: left;\n}\n@media (max-width: 600px) {\n  .h5,\n  h5 {\n    font-size: 1.3em;\n    margin-top: 5px;\n  }\n}\n.h6,\nh6 {\n  font-size: 0.75em;\n}\na {\n  color: #5eb9d7;\n  outline: none;\n  text-decoration: none;\n  -webkit-transition: all 0.2s ease-out;\n  -moz-transition: all 0.2s ease-out;\n  -ms-transition: all 0.2s ease-out;\n  -o-transition: all 0.2s ease-out;\n  transition: all 0.2s ease-out;\n}\na:hover {\n  color: #40cebb;\n  cursor: pointer !important;\n}\nbutton:hover {\n  cursor: pointer !important;\n}\ninput:hover {\n  cursor: text;\n}\n.btn-default[disabled] {\n  border: 1px solid #2f394f;\n  background: #2f394f;\n  color: white;\n}\ninput[type=\"search\"],\ninput[type=\"text\"],\ninput[type=\"url\"],\ninput[type=\"email\"],\ninput[type=\"password\"] textarea {\n  padding: 7px;\n  -webkit-transition: all 0.2s;\n  -moz-transition: all 0.2s;\n  -ms-transition: all 0.2s;\n  -o-transition: all 0.2s;\n  transition: all 0.2s;\n  font-family: 'TTNormsPro-Regular', sans-serif;\n}\ninput[type=\"search\"]:focus,\ninput[type=\"text\"]:focus,\ninput[type=\"url\"]:focus,\ninput[type=\"email\"]:focus,\ninput[type=\"password\"] textarea:focus {\n  border: 1px solid #5eb9d7;\n  outline: none;\n}\n::-moz-selection {\n  color: white;\n  background: #5eb9d7;\n  text-shadow: none;\n}\n::selection {\n  color: white;\n  background: #5eb9d7;\n  text-shadow: none;\n}\na:hover {\n  cursor: pointer;\n}\n.stop-scrolling {\n  height: 100%;\n  overflow: hidden;\n}\n.icon::before {\n  display: inline-block;\n  font-style: normal;\n  font-variant: normal;\n  text-rendering: auto;\n  -webkit-font-smoothing: antialiased;\n}\n/*====================================================\n\tfooter\n====================================================*/\n.main-footer {\n  background: #fff !important;\n  background-size: cover;\n  padding: 35px 8%;\n  color: #373940;\n}\n@media (max-width: 1000px) {\n  .main-footer {\n    padding: 30px 40px;\n  }\n}\n@media (max-width: 800px) {\n  .main-footer {\n    padding: 20px 40px;\n    margin-top: 0;\n  }\n}\n@media (max-width: 600px) {\n  .main-footer {\n    display: block;\n    padding: 50px;\n  }\n}\n@media (max-width: 500px) {\n  .main-footer {\n    padding: 40px;\n  }\n}\n.main-footer .footer-title {\n  color: #373940;\n  font-weight: 800;\n  font-size: 1.1em;\n  font-family: 'TTNormsPro-Medium', sans-serif;\n  text-align: left;\n  text-transform: uppercase;\n  letter-spacing: 2px;\n  line-height: 1;\n  margin: 0 0 20px;\n}\n@media (max-width: 800px) {\n  .main-footer .footer-title {\n    margin: 0 0 5px !important;\n  }\n}\n.main-footer .footer-container {\n  max-width: 1000px;\n  margin: auto;\n  display: flex;\n  justify-content: space-between;\n}\n@media (max-width: 600px) {\n  .main-footer .footer-container {\n    margin: auto;\n    justify-content: space-between;\n    flex-direction: row;\n    flex-wrap: wrap;\n  }\n}\n.main-footer .widget {\n  padding: 2px 0;\n  width: 15%;\n  margin: 0;\n}\n.main-footer .widget ul {\n  padding: 0;\n}\n.main-footer .widget ul li {\n  width: 100%;\n  display: block;\n  text-align: left;\n  transition: all 0.2s ease-out;\n  font-family: 'TTNormsPro-Regular', sans-serif;\n  font-size: 0.9em;\n  margin-bottom: 2px;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n}\n.main-footer .widget ul li *:hover {\n  cursor: pointer !important;\n  color: #40cebb;\n}\n.main-footer .widget ul li a {\n  color: #738a94;\n  font-family: 'TTNormsPro-Regular', sans-serif;\n  font-weight: 300;\n}\n@media (max-width: 800px) {\n  .main-footer .widget {\n    width: -webkit-fill-available;\n    margin: 10px 0 20px;\n    width: 22%;\n    margin-top: 20px;\n  }\n  .main-footer .widget:last-child {\n    margin-bottom: 0;\n  }\n}\n@media (max-width: 600px) {\n  .main-footer .widget {\n    max-width: none;\n    width: 100% !important;\n    padding: 0;\n  }\n}\n/*====================================================\n\t\tabout\n====================================================*/\n.widget.about {\n  min-width: 24%;\n  width: 24%;\n}\n@media (max-width: 800px) {\n  .widget.about {\n    width: 35% !important;\n  }\n}\n@media (max-width: 600px) {\n  .widget.about {\n    min-width: 100%;\n    border-bottom: 1px solid rgba(76, 108, 157, 0.27);\n    padding-bottom: 20px !important;\n    margin: 0 0 20px;\n  }\n}\n.widget.about .logo {\n  width: 100%;\n  display: block;\n  height: 40px;\n  transition: all 0.2s ease-out;\n}\n@media (max-width: 600px) {\n  .widget.about .logo {\n    margin-bottom: 25px;\n    max-width: 250px;\n  }\n}\n.widget.about .logo:hover {\n  cursor: pointer;\n  opacity: 0.5;\n}\n.widget.about .logo img {\n  width: 100%;\n}\n.widget.about .description {\n  color: #373940;\n  width: 100%;\n  font-family: 'TTNormsPro-Regular', sans-serif;\n  font-weight: 100;\n  font-size: 0.85em;\n  line-height: 1.6;\n  margin: 15px 0 25px;\n}\n@media (max-width: 600px) {\n  .widget.about .description {\n    margin: 15px 0 20px;\n    font-size: 0.95em;\n  }\n}\n.widget.about .social-btns {\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n  margin-bottom: 10px;\n}\n.widget.about .social-btns i {\n  font-size: 20px;\n  mix-blend-mode: hard-light;\n  color: #373940;\n}\n@media (max-width: 600px) {\n  .widget.about .social-btns i {\n    font-size: 25px;\n  }\n}\n.widget.about .social-btns i .btn:hover.facebook {\n  color: #96abd6;\n}\n.widget.about .social-btns i .btn:hover.twitter {\n  color: #66d9ff;\n}\n.widget.about .social-btns i .btn:hover.tumblr {\n  color: #7891b2;\n}\n.widget.about .social-btns i .btn:hover.github {\n  color: white;\n}\n.widget.about .social-btns i .btn:hover.pocket {\n  color: #f5778a;\n}\n.widget.about .social-btns i .btn:hover.quora {\n  color: #d6413d;\n}\n.widget.about .social-btns i .btn:hover.rss {\n  color: #ffc29a;\n}\n.widget.about .social-btns a {\n  font-size: 1.4em;\n  margin: 0;\n  color: unset;\n  transition: all 0.2s ease-out;\n}\n.widget.about .social-btns a:hover {\n  opacity: 1;\n  cursor: pointer;\n}\n.widget.about .social-btns a:hover * {\n  color: #40cebb;\n}\n/*====================================================\n\t\t\tcontributors\n=====================================================*/\n.widget.contributors {\n  margin-top: 10px;\n}\n@media (max-width: 800px) {\n  .widget.contributors {\n    display: none;\n  }\n}\n@media (max-width: 600px) {\n  .widget.contributors {\n    display: block;\n  }\n}\n.widget.links,\n.widget.tags {\n  margin-top: 10px;\n}\n@media (max-width: 600px) {\n  .widget.links,\n  .widget.tags {\n    margin: 10px 0 0;\n    min-width: unset;\n    margin-bottom: 20px;\n  }\n}\n.widget.links ul,\n.widget.tags ul {\n  margin: 10px 0;\n}\n.copyright {\n  margin-top: 20px;\n  display: block;\n  font-size: 0.85em;\n  font-family: 'TTNormsPro-Regular', sans-serif;\n  color: #738a94 !important;\n  margin: 0 !important;\n}\n@font-face {\n  font-family: 'TTNormsPro-Light';\n  src: url('https://hackers.nyc3.cdn.digitaloceanspaces.com/fonts/39827B_0_0.eot');\n  src: url('https://hackers.nyc3.cdn.digitaloceanspaces.com/fonts/39827B_0_0.eot?#iefix') format('embedded-opentype'), url('https://hackers.nyc3.cdn.digitaloceanspaces.com/fonts/39827B_0_0.woff2') format('woff2'), url('https://hackers.nyc3.cdn.digitaloceanspaces.com/fonts/39827B_0_0.woff') format('woff'), url('https://hackers.nyc3.cdn.digitaloceanspaces.com/fonts/39827B_0_0.ttf') format('truetype');\n}\n@font-face {\n  font-family: 'TTNormsPro-Regular';\n  src: url('https://hackers.nyc3.cdn.digitaloceanspaces.com/fonts/392922_2_0.eot');\n  src: url('https://hackers.nyc3.cdn.digitaloceanspaces.com/fonts/392922_2_0.eot?#iefix') format('embedded-opentype'), url('https://hackers.nyc3.cdn.digitaloceanspaces.com/fonts/392922_2_0.woff2') format('woff2'), url('https://hackers.nyc3.cdn.digitaloceanspaces.com/fonts/392922_2_0.woff') format('woff'), url('https://hackers.nyc3.cdn.digitaloceanspaces.com/fonts/392922_2_0.ttf') format('truetype');\n}\n@font-face {\n  font-family: 'TTNormsPro-Medium';\n  src: url('https://hackers.nyc3.cdn.digitaloceanspaces.com/fonts/392922_3_0.eot');\n  src: url('https://hackers.nyc3.cdn.digitaloceanspaces.com/fonts/392922_3_0.eot?#iefix') format('embedded-opentype'), url('https://hackers.nyc3.cdn.digitaloceanspaces.com/fonts/392922_3_0.woff2') format('woff2'), url('https://hackers.nyc3.cdn.digitaloceanspaces.com/fonts/392922_3_0.woff') format('woff'), url('https://hackers.nyc3.cdn.digitaloceanspaces.com/fonts/392922_3_0.ttf') format('truetype');\n}\n/*====================================================\n\theader nav\n====================================================*/\nnav {\n  position: relative;\n  background: #ffffff;\n  height: 60px;\n  margin-bottom: 30px;\n  border-bottom: 1px solid #dbe0e5;\n}\n@media (max-width: 800px) {\n  nav {\n    margin-bottom: 20px;\n  }\n}\nnav .nav-wrapper {\n  display: flex;\n  justify-content: space-between;\n  max-width: 1100px;\n  margin: auto;\n  align-items: center;\n  height: 100%;\n}\n@media (max-width: 1100px) {\n  nav .nav-wrapper {\n    max-width: 93%;\n  }\n}\n@media (max-width: 800px) {\n  nav .nav-wrapper {\n    max-width: 90%;\n  }\n}\nnav .nav-wrapper .left-nav {\n  display: flex;\n  justify-content: left;\n  width: 500px;\n  align-items: center;\n}\nnav .nav-wrapper .left-nav .logo {\n  height: 30px;\n  transition: all 0.2s ease-out;\n  margin-right: 30px;\n}\nnav .nav-wrapper .left-nav .logo img {\n  height: 30px;\n}\nnav .nav-wrapper .left-nav .logo:hover {\n  opacity: 0.7;\n  cursor: pointer;\n}\nnav .nav-wrapper .left-nav .dropdown {\n  color: #626573;\n  border: none;\n  font-family: 'TTNormsPro-Regular', sans-serif !important;\n  font-weight: 100;\n  font-size: 0.95em;\n  padding: 0;\n  background: none;\n  height: 60px;\n  margin-right: 30px;\n  outline: none;\n  transition: all 0.2s ease-out;\n}\nnav .nav-wrapper .left-nav .dropdown:hover {\n  color: #5eb9d7;\n}\n@media (max-width: 600px) {\n  nav .nav-wrapper .left-nav .dropdown.posts {\n    display: none;\n  }\n}\nnav .nav-wrapper .left-nav .dropdown .dropdown-content {\n  display: none;\n  background: white;\n  box-shadow: 0 3px 3px rgba(65, 67, 144, 0.15);\n  z-index: 10;\n  width: 200px;\n  position: absolute;\n  opacity: 0;\n  padding: 5px;\n  top: 57px;\n  margin-left: -70px;\n  transition: all 0.2s ease-out;\n}\nnav .nav-wrapper .left-nav .dropdown .dropdown-content a {\n  display: block;\n  font-size: 0.8em;\n  padding: 10px;\n  text-align: left;\n  line-height: 1.5;\n  color: #373940;\n  font-family: 'TTNormsPro-Regular', sans-serif;\n  font-weight: 100;\n  transition: all 0.2s ease-out;\n}\nnav .nav-wrapper .left-nav .dropdown .dropdown-content a:hover {\n  background: #5eb9d7;\n  color: white;\n}\nnav .nav-wrapper .left-nav .dropdown:hover .dropdown-content {\n  display: block;\n  opacity: 1;\n}\n@media (max-width: 600px) {\n  nav .nav-wrapper .left-nav .dropdown:hover .dropdown-content {\n    display: none;\n  }\n}\n.page-container {\n  max-width: 1050px;\n  margin: 0 auto 30px;\n}\n@media (max-width: 1200px) {\n  .page-container {\n    width: 100%;\n  }\n}\n@media (max-width: 1000px) {\n  .page-container {\n    max-width: 95%;\n  }\n}\n@media (max-width: 800px) {\n  .page-container {\n    max-width: none;\n    margin: 0 auto;\n  }\n}\n.page-container.home {\n  max-width: unset;\n  width: 100%;\n}\n@media (max-width: 1000px) {\n  .page-container.home {\n    max-width: 95%;\n  }\n}\n.page-container.sidebar-layout {\n  display: grid;\n  grid-gap: 20px;\n  grid-template-columns: 1fr 316px ;\n}\n@media (max-width: 800px) {\n  .page-container.sidebar-layout {\n    width: 100%;\n    display: block;\n    max-width: unset;\n  }\n}\nsection > .container {\n  max-width: 1200px;\n  margin: auto;\n}\n@media (max-width: 1200px) {\n  section > .container {\n    width: 95%;\n    max-width: none;\n  }\n}\n@media (max-width: 800px) {\n  section > .container {\n    width: 100%;\n  }\n}\n.sidebar {\n  width: 100%;\n}\n@media (max-width: 800px) {\n  .sidebar {\n    display: none;\n  }\n}\n.postlist {\n  background: white;\n  padding: 30px;\n  border-radius: 5px;\n  border: 1px solid #e5eff5;\n}\n@media (max-width: 800px) {\n  .postlist {\n    margin: 0 auto 20px;\n    width: -webkit-fill-available;\n    width: moz-available;\n    max-width: 84%;\n  }\n}\n@media (max-width: 600px) {\n  .postlist {\n    max-width: 80%;\n  }\n}\n.postlist .post-preview {\n  overflow: hidden;\n}\n.postlist:last-child {\n  margin-bottom: 0;\n}\n.home-template .postlist {\n  display: grid;\n  grid-gap: 40px;\n  grid-template-columns: 1fr;\n}\n.home-template .postlist .post-preview {\n  margin: 0;\n}\n.post-preview {\n  margin-bottom: 30px;\n  order: 2;\n  display: flex;\n  justify-content: space-between;\n}\n@media (max-width: 600px) {\n  .post-preview {\n    padding: 0;\n  }\n}\n.post-preview:last-child {\n  border-bottom: none;\n}\n.post-preview .post-preview-side {\n  width: 90px;\n  margin-right: 20px;\n}\n@media (max-width: 800px) {\n  .post-preview .post-preview-side {\n    display: none;\n  }\n}\n.post-preview .post-preview-side .primary-tag {\n  background: grey;\n  padding: 5px 10px;\n  border-radius: 10px;\n  color: white;\n  text-transform: uppercase;\n  font-size: 0.7em;\n  margin-top: 24px;\n  display: block;\n  line-height: 1.2;\n  text-align: center;\n  width: fit-content;\n  float: right;\n}\n.post-preview .post-preview-body {\n  border-bottom: 1px solid #e9e9e9;\n  width: 100%;\n}\n.post-preview .post-head {\n  margin: 0;\n}\n.post-preview .post-head .date {\n  color: #738a94;\n  font-size: 12px;\n  line-height: 1;\n}\n.post-preview .post-head .post-title {\n  font-size: 1.35em;\n  Line-height: 1.15;\n  font-family: 'TTNormsPro-Regular', sans-serif;\n  margin: 2px 0;\n}\n@media (max-width: 600px) {\n  .post-preview .post-head .post-title {\n    font-size: 1.5em;\n    margin: 5px 0;\n    font-weight: 500;\n    line-height: 1.2em;\n  }\n}\n.post-preview .post-head .post-title a {\n  color: #2f394f;\n  transition: all 0.2s ease-out;\n}\n.post-preview .post-head .post-title a:hover {\n  color: #40cebb;\n}\n@media (max-width: 600px) {\n  .post-preview .post-head .post-title a {\n    font-family: 'TTNormsPro-Medium', sans-serif;\n  }\n  .post-preview .post-head .post-title a:hover {\n    color: white;\n  }\n}\n.post-preview .post-head .post-excerpt {\n  margin: 5px auto 0;\n  line-height: 1.2;\n  font-size: 1.15em;\n  font-family: 'TTNormsPro-Regular', sans-serif;\n  transition: all 0.2s ease-out;\n  color: #2f394f;\n  font-size: 1em;\n}\n@media (max-width: 600px) {\n  .post-preview .post-head .post-excerpt {\n    margin: 5px auto 0;\n    font-size: 1.05em !important;\n    -webkit-line-clamp: 2;\n    -webkit-box-orient: vertical;\n    overflow: hidden;\n    display: -webkit-box;\n    text-overflow: ellipsis;\n  }\n}\n.post-preview .featured-image {\n  width: 100%;\n  height: auto;\n  transition: all 0.2s ease-out;\n  border-radius: 2px;\n  margin: 15px 0;\n}\n.post-preview .featured-image:hover {\n  opacity: 0.7;\n  cursor: pointer;\n}\n.post-preview .preview-content {\n  text-align: left;\n  line-height: 1.3;\n  margin: 0;\n}\n.post-preview .preview-content > * {\n  display: none;\n}\n.post-preview .preview-content p:first-child {\n  display: -webkit-box;\n  overflow: hidden;\n  -webkit-line-clamp: 3;\n  -webkit-box-orient: vertical;\n  text-overflow: ellipsis;\n  font-family: 'TTNormsPro-Regular', sans-serif !important;\n  line-height: 1.55;\n  font-size: 0.95em;\n  font-weight: 500;\n  color: #2d2f35;\n  margin: 0;\n}\n@media (max-width: 600px) {\n  .post-preview .preview-content p:first-child {\n    display: none;\n  }\n}\n.post-preview .preview-content p:first-child a {\n  font-family: 'TTNormsPro-Regular', sans-serif !important;\n  display: inline !important;\n}\n.post-preview a {\n  text-decoration: none;\n}\n.post-preview a:hover {\n  color: #40cebb;\n}\n.post-preview a:hover > span {\n  color: #40cebb !important;\n}\n.post-preview .read-link {\n  margin: 10px 0 20px;\n  display: block;\n  font-size: 1.1em;\n}\n/*====================================================\n\tsidebar\n====================================================*/\n.sidebar .widget {\n  padding: 25px;\n  background: #fff 50%;\n  background-size: cover;\n  border-radius: 5px;\n  box-shadow: 8px 14px 38px rgba(39, 44, 49, 0.06), 1px 3px 8px rgba(39, 44, 49, 0.03);\n  transition: all 0.5s ease;\n}\n.sidebar .widget:first-of-type {\n  margin-right: 0;\n}\n.sidebar .widget.text .logo {\n  width: 80%;\n  margin: 0 auto 20px;\n  display: block;\n}\n.sidebar .widget.text p {\n  font-size: 14px;\n  font-family: 'TTNormsPro-Regular', sans-serif;\n  line-height: 1.3;\n  text-align: center;\n  text-align: justify;\n}\n.sidebar .widget .fb {\n  height: 220px;\n}\n.sidebar .widget.twitter {\n  overflow: hidden;\n}\n.sidebar .widget.twitter iframe {\n  max-height: 1000px;\n}\n.sidebar .recent-single-post .post-title {\n  color: #4c5c7f;\n  line-height: 1.2;\n  font-size: 15px;\n  margin: 0;\n  font-family: 'TTNormsPro-Regular', sans-serif;\n  display: inline-block;\n}\n.sidebar .recent-single-post .post-title:hover {\n  color: #40cebb;\n}\n.sidebar .text h1 {\n  font-size: 1.4em;\n  font-weight: 700;\n  margin-bottom: 15px;\n  letter-spacing: 1px;\n  margin-top: 0;\n}\n.sidebar .text p {\n  margin: 0;\n  font-size: 0.9em;\n  line-height: 1.7;\n  padding-right: 0;\n  font-family: 'TTNormsPro-Regular', sans-serif;\n}\n.sidebar .recent-posts .recent-single-post {\n  padding-bottom: 15px;\n  margin-bottom: 15px;\n  border-bottom: 1px solid #ebebeb;\n}\n.sidebar .recent-posts .recent-single-post:last-child {\n  padding-bottom: 0;\n  margin-bottom: 0;\n  border-bottom: 0;\n}\n.sidebar .recent-posts .recent-single-post .date {\n  font-size: 0.8em;\n  line-height: 1;\n  color: #9698a0;\n  margin-top: 5px;\n}\n.sidebar .widget {\n  margin: 0 0 20px;\n}\n@media (max-width: 950px) {\n  .sidebar .widget {\n    padding: 15px;\n    margin: 0 0 20px;\n  }\n}\n.sidebar .widget .post-title a {\n  color: #208cad;\n  font-family: 'TTNormsPro-Medium', sans-serif;\n  transition: all 0.2s ease;\n}\n.sidebar .widget .post-title a:hover {\n  cursor: pointer;\n  color: #40cebb;\n}\n.sidebar .widget h1 {\n  margin-bottom: 10px;\n  text-transform: uppercase;\n  font-size: 1.2em;\n  font-family: 'TTNormsPro-Medium', sans-serif;\n  color: #2f394f;\n  font-weight: 500;\n}\n.sidebar .widget .sidebar-title,\n.sidebar .widget .title {\n  font-size: 1.2em;\n  font-weight: 500;\n  margin-bottom: 8px;\n  text-transform: uppercase;\n  font-family: 'TTNormsPro-Medium', sans-serif;\n  letter-spacing: 1px;\n  color: #2f394f;\n  margin-top: 0;\n}\n.sidebar .widget .google-plus {\n  overflow: hidden;\n}\n.sidebar .widget li {\n  display: inline-block;\n  text-align: center;\n  padding: 5px 7px;\n}\n.sidebar .widget li a i {\n  line-height: 1;\n  color: #bbbbbb;\n  -webkit-transition: all 0.2s;\n  -moz-transition: all 0.2s;\n  -ms-transition: all 0.2s;\n  -o-transition: all 0.2s;\n  transition: all 0.2s;\n  height: 15px;\n  width: 21px;\n  font-size: 13px;\n  transition: all 0.2s ease-out;\n}\n.sidebar .widget li:hover {\n  cursor: pointer;\n}\n.sidebar .widget li:hover i {\n  color: white;\n}\n.sidebar .widget .subscribe-input-class {\n  padding: 15px 5%;\n  width: 90%;\n  font-size: 14px;\n  border: 1px solid #ebebeb;\n  margin-bottom: 10px;\n}\n.sidebar .widget .form-group,\n.sidebar .widget .input-group {\n  margin-bottom: 0;\n  display: block;\n}\n.sidebar .widget .form-group .email,\n.sidebar .widget .input-group .email {\n  width: 100%;\n}\n.sidebar .widget .form-group .btn,\n.sidebar .widget .input-group .btn {\n  width: -webkit-fill-available;\n  width: -moz-fill-available;\n}\n.sidebar .widget .form-group .btn:hover,\n.sidebar .widget .input-group .btn:hover {\n  background-color: #40cebb;\n  cursor: pointer;\n}\n.sidebar .widget .form-group .btn span,\n.sidebar .widget .input-group .btn span {\n  font-size: 14px;\n  text-transform: capitalize;\n}\n.sidebar .widget p {\n  font-size: 16px;\n  font-family: 'TTNormsPro-Regular', sans-serif;\n}\n/* Hack for aligning magnifying glass on other pages */\n.page-template .search::after {\n  top: 14px;\n}\n",""])}]);