!function(e){var r={};function o(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,o),t.l=!0,t.exports}o.m=e,o.c=r,o.d=function(n,t,e){o.o(n,t)||Object.defineProperty(n,t,{enumerable:!0,get:e})},o.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},o.t=function(t,n){if(1&n&&(t=o(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(o.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var r in t)o.d(e,r,function(n){return t[n]}.bind(null,r));return e},o.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return o.d(t,"a",t),t},o.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},o.p="",o(o.s=57)}({0:function(n,t,e){"use strict";n.exports=function(e){var a=[];return a.toString=function(){return this.map(function(n){var t=function(n,t){var e=n[1]||"",r=n[3];if(!r)return e;if(t&&"function"==typeof btoa){var o=(a=r,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),i=r.sources.map(function(n){return"/*# sourceURL="+r.sourceRoot+n+" */"});return[e].concat(i).concat([o]).join("\n")}var a;return[e].join("\n")}(n,e);return n[2]?"@media "+n[2]+"{"+t+"}":t}).join("")},a.i=function(n,t){"string"==typeof n&&(n=[[null,n,""]]);for(var e={},r=0;r<this.length;r++){var o=this[r][0];null!=o&&(e[o]=!0)}for(r=0;r<n.length;r++){var i=n[r];null!=i[0]&&e[i[0]]||(t&&!i[2]?i[2]=t:t&&(i[2]="("+i[2]+") and ("+t+")"),a.push(i))}},a}},1:function(n,t,r){var e,o,i,s={},c=(e=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===o&&(o=e.apply(this,arguments)),o}),a=(i={},function(n,t){if("function"==typeof n)return n();if(void 0===i[n]){var e=function(n,t){return t?t.querySelector(n):document.querySelector(n)}.call(this,n,t);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}i[n]=e}return i[n]}),d=null,p=0,l=[],f=r(3);function u(n,t){for(var e=0;e<n.length;e++){var r=n[e],o=s[r.id];if(o){o.refs++;for(var i=0;i<o.parts.length;i++)o.parts[i](r.parts[i]);for(;i<r.parts.length;i++)o.parts.push(x(r.parts[i],t))}else{var a=[];for(i=0;i<r.parts.length;i++)a.push(x(r.parts[i],t));s[r.id]={id:r.id,refs:1,parts:a}}}}function b(n,t){for(var e=[],r={},o=0;o<n.length;o++){var i=n[o],a=t.base?i[0]+t.base:i[0],l={css:i[1],media:i[2],sourceMap:i[3]};r[a]?r[a].parts.push(l):e.push(r[a]={id:a,parts:[l]})}return e}function h(n,t){var e=a(n.insertInto);if(!e)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=l[l.length-1];if("top"===n.insertAt)r?r.nextSibling?e.insertBefore(t,r.nextSibling):e.appendChild(t):e.insertBefore(t,e.firstChild),l.push(t);else if("bottom"===n.insertAt)e.appendChild(t);else{if("object"!=typeof n.insertAt||!n.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=a(n.insertAt.before,e);e.insertBefore(t,o)}}function g(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n);var t=l.indexOf(n);0<=t&&l.splice(t,1)}function m(n){var t=document.createElement("style");if(void 0===n.attrs.type&&(n.attrs.type="text/css"),void 0===n.attrs.nonce){var e=function(){0;return r.nc}();e&&(n.attrs.nonce=e)}return v(t,n.attrs),h(n,t),t}function v(t,e){Object.keys(e).forEach(function(n){t.setAttribute(n,e[n])})}function x(t,n){var e,r,o,i,a,l;if(n.transform&&t.css){if(!(i="function"==typeof n.transform?n.transform(t.css):n.transform.default(t.css)))return function(){};t.css=i}if(n.singleton){var s=p++;e=d||(d=m(n)),r=k.bind(null,e,s,!1),o=k.bind(null,e,s,!0)}else o=t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(a=n,l=document.createElement("link"),void 0===a.attrs.type&&(a.attrs.type="text/css"),a.attrs.rel="stylesheet",v(l,a.attrs),h(a,l),r=function(n,t,e){var r=e.css,o=e.sourceMap,i=void 0===t.convertToAbsoluteUrls&&o;(t.convertToAbsoluteUrls||i)&&(r=f(r));o&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var a=new Blob([r],{type:"text/css"}),l=n.href;n.href=URL.createObjectURL(a),l&&URL.revokeObjectURL(l)}.bind(null,e=l,n),function(){g(e),e.href&&URL.revokeObjectURL(e.href)}):(e=m(n),r=function(n,t){var e=t.css,r=t.media;r&&n.setAttribute("media",r);if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}.bind(null,e),function(){g(e)});return r(t),function(n){if(n){if(n.css===t.css&&n.media===t.media&&n.sourceMap===t.sourceMap)return;r(t=n)}else o()}}n.exports=function(n,a){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(a=a||{}).attrs="object"==typeof a.attrs?a.attrs:{},a.singleton||"boolean"==typeof a.singleton||(a.singleton=c()),a.insertInto||(a.insertInto="head"),a.insertAt||(a.insertAt="bottom");var l=b(n,a);return u(l,a),function(n){for(var t=[],e=0;e<l.length;e++){var r=l[e];(o=s[r.id]).refs--,t.push(o)}n&&u(b(n,a),a);for(e=0;e<t.length;e++){var o;if(0===(o=t[e]).refs){for(var i=0;i<o.parts.length;i++)o.parts[i]();delete s[o.id]}}}};var y,w=(y=[],function(n,t){return y[n]=t,y.filter(Boolean).join("\n")});function k(n,t,e,r){var o=e?"":r.css;if(n.styleSheet)n.styleSheet.cssText=w(t,o);else{var i=document.createTextNode(o),a=n.childNodes;a[t]&&n.removeChild(a[t]),a.length?n.insertBefore(i,a[t]):n.appendChild(i)}}},3:function(n,t){n.exports=function(n){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!n||"string"!=typeof n)return n;var o=t.protocol+"//"+t.host,i=o+t.pathname.replace(/\/[^\/]*$/,"/");return n.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(n,t){var e,r=t.trim().replace(/^"(.*)"$/,function(n,t){return t}).replace(/^'(.*)'$/,function(n,t){return t});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(r)?n:(e=0===r.indexOf("//")?r:0===r.indexOf("/")?o+r:i+r.replace(/^\.\//,""),"url("+JSON.stringify(e)+")")})}},57:function(n,t,e){"use strict";e.r(t);e(58),e(60)},58:function(n,t,e){var r=e(59);"string"==typeof r&&(r=[[n.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};e(1)(r,o);r.locals&&(n.exports=r.locals)},59:function(n,t,e){(n.exports=e(0)(!1)).push([n.i,".page-resources h1 {\n  margin: 40px 40px 30px;\n}\n.page-resources section {\n  width: -webkit-fill-available;\n}\n.page-resources p {\n  margin: auto 40px 30px;\n}\n.page-resources #tablewrapper {\n  margin: auto 40px 40px;\n  width: -webkit-fill-available;\n}\n.page-resources #resources-table {\n  width: 100%;\n}\n.page-resources #resources-table td {\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  text-align: left;\n}\n.page-resources #resources-table tbody tr td:first-of-type {\n  text-align: center;\n}\n.page-resources #resources-table tbody tr .icon {\n  text-align: center !important;\n}\n.page-resources #resources-table tbody tr .summmary {\n  font-weight: 600 !important;\n  font-size: 0.85em !important;\n}\n.page-resources #resources-table tbody tr .description {\n  max-width: none;\n}\n.page-resources #resources-table tbody tr .issuetype-name {\n  font-size: 0.8em !important;\n  min-width: 100px;\n}\n.page-resources #resources-table tbody tr.Epic {\n  display: none !important;\n}\n",""])},60:function(n,t,e){var r=e(61);"string"==typeof r&&(r=[[n.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};e(1)(r,o);r.locals&&(n.exports=r.locals)},61:function(n,t,e){(n.exports=e(0)(!1)).push([n.i,"table,\ntd,\nth {\n  border: none;\n  max-width: 150px;\n  overflow: hidden;\n  text-align: left !important;\n  padding: 15px 20px;\n}\ntable {\n  min-width: 100%;\n  display: table;\n  border-collapse: collapse;\n  border-spacing: 0;\n  border: 1px solid rgba(77, 87, 109, 0.25);\n  overflow: hidden;\n}\n@media (max-width: 600px) {\n  table {\n    width: 100%;\n  }\n}\ntable.left tbody td {\n  text-align: left;\n  vertical-align: top;\n}\ntable.left tbody .pre {\n  font-size: 0.8em;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n}\ntable thead tr {\n  border-bottom: 1px solid rgba(0, 0, 0, 0.12);\n  background-color: #5d6b8a !important;\n  color: white;\n}\ntable thead th {\n  text-align: center;\n  font-family: 'AvenirNextLTPro-Regular';\n  min-width: 30px;\n  padding: 10px;\n  font-size: 0.9em;\n}\ntable thead th strong {\n  font-family: 'AvenirNextLTPro-Regular';\n}\ntable thead th::before {\n  font-family: 'AvenirNextLTPro-Regular' !important;\n}\ntable.striped tr {\n  border-bottom: none;\n}\ntable.striped tbody tr:nth-child(odd) {\n  background-color: rgba(242, 242, 242, 0.5);\n}\ntable.striped tbody tr > td {\n  border-radius: 0;\n}\ntable.highlight > tbody > tr {\n  transition: background-color 0.25s ease;\n}\ntable.highlight > tbody > tr:hover {\n  background-color: rgba(242, 242, 242, 0.5);\n}\ntable.centered tbody tr td,\ntable.centered thead tr th {\n  text-align: center;\n}\ntr:nth-child(odd) {\n  background-color: #fff;\n}\ntr:nth-child(even) {\n  background-color: #f5f8ff;\n}\ntd,\nth {\n  padding: 15px;\n  display: table-cell;\n  text-align: left;\n  vertical-align: middle;\n  font-size: 0.8em;\n  text-align: center;\n  line-height: 1.2;\n}\n@media (max-width: 600px) {\n  table {\n    width: auto;\n    border-collapse: collapse;\n    border-spacing: 0;\n    display: table;\n    position: relative;\n    overflow-x: scroll;\n  }\n  table:hover {\n    cursor: -webkit-grab;\n    cursor: grab;\n  }\n  table td:empty:before {\n    content: '\\00a0';\n  }\n  table td,\n  table th {\n    margin: 0;\n    vertical-align: top;\n    border-spacing: 0 !important;\n    border-collapse: collapse !important;\n    font-size: 0.8em;\n  }\n  table td {\n    width: -webkit-fill-available;\n    width: -moz-available;\n  }\n  table thead {\n    z-index: 1;\n    position: absolute;\n    left: 0;\n    width: 100px;\n    height: 100%;\n    border: 0;\n    border-right: 1px solid rgba(0, 0, 0, 0.12);\n  }\n  table thead th {\n    display: block;\n    padding: 10px 5px!important;\n    font-family: 'AvenirNextLTPro-Regular';\n    letter-spacing: 0.5px;\n    text-align: center;\n    text-align: left;\n    text-transform: capitalize;\n    font-weight: 500;\n    font-size: 0.8em;\n    /*&::before {\n          content: \"\\00a0\";\n        }*/\n  }\n  table thead th * {\n    font-size: 1em;\n  }\n  table thead tr {\n    display: block;\n    border-spacing: 0;\n    padding: 0;\n    height: 100%;\n  }\n  table tbody {\n    margin-left: 120px;\n    width: auto;\n    position: relative;\n    overflow-x: auto;\n    white-space: nowrap;\n    height: 100%;\n    display: flex;\n    flex-direction: row;\n    align-items: stretch;\n  }\n  table tbody > tr > th {\n    border-bottom: 1px solid #e0e0e0;\n    border-radius: 0;\n    border-spacing: 0;\n    border-collapse: collapse;\n  }\n  table tbody tr {\n    /*display: inline-block;*/\n    vertical-align: top;\n    display: flex;\n    flex-direction: column;\n    overflow-wrap: normal;\n    line-break: strict;\n    white-space: inherit;\n    padding: 0 15px;\n    border-bottom: none;\n  }\n  table tbody:last-child::after {\n    content: \" \";\n    display: table-row;\n    max-width: 300px;\n    min-width: 300px;\n    margin-left: -300px;\n  }\n  table td {\n    display: block;\n    min-height: 1.25em;\n    margin: 0 10px!important !important;\n    padding: 10px 0 !important;\n    border-spacing: 0;\n    border-collapse: collapse;\n    overflow-wrap: normal;\n    line-break: normal;\n    white-space: normal;\n    width: -webkit-fill-available;\n    width: -moz-available;\n    max-width: 200px;\n  }\n}\n.dataframe thead th {\n  text-align: center !important;\n  font-family: 'AvenirNextLTPro-Regular' !important;\n}\n.dataframe tbody tr th:only-of-type {\n  vertical-align: middle;\n  text-align: center;\n}\n.tableContainer {\n  box-shadow: 0 0 5px #d1d4e8;\n  margin: 20px auto 40px;\n  position: relative;\n  overflow: hidden;\n}\n@media (max-width: 600px) {\n  .tableContainer {\n    margin-left: calc(-50vw + 50%);\n    margin-right: calc(-50vw + 50%);\n    width: auto!important;\n  }\n  .tableContainer:hover {\n    cursor: -webkit-grab;\n    cursor: grab;\n  }\n}\n.handscroller:hover {\n  cursor: -webkit-grab !important;\n  cursor: grab !important;\n}\n.handscroller *:hover {\n  cursor: -webkit-grab !important;\n  cursor: grab !important;\n}\n.tablefade {\n  position: absolute;\n  right: 0;\n  height: 100%;\n  width: 70px;\n  top: 0;\n  display: block;\n  background: linear-gradient(90deg, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.8));\n}\n",""])}});