!function(n){var r={};function o(e){if(r[e])return r[e].exports;var t=r[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,o),t.l=!0,t.exports}o.m=n,o.c=r,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=54)}({0:function(e,t,n){"use strict";e.exports=function(n){var i=[];return i.toString=function(){return this.map(function(e){var t=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var o=(i=r,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */"),a=r.sources.map(function(e){return"/*# sourceURL="+r.sourceRoot+e+" */"});return[n].concat(a).concat([o]).join("\n")}var i;return[n].join("\n")}(e,n);return e[2]?"@media "+e[2]+"{"+t+"}":t}).join("")},i.i=function(e,t){"string"==typeof e&&(e=[[null,e,""]]);for(var n={},r=0;r<this.length;r++){var o=this[r][0];null!=o&&(n[o]=!0)}for(r=0;r<e.length;r++){var a=e[r];null!=a[0]&&n[a[0]]||(t&&!a[2]?a[2]=t:t&&(a[2]="("+a[2]+") and ("+t+")"),i.push(a))}},i}},2:function(e,t,r){var n,o,a,l={},p=(n=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===o&&(o=n.apply(this,arguments)),o}),i=(a={},function(e,t){if("function"==typeof e)return e();if(void 0===a[e]){var n=function(e,t){return t?t.querySelector(e):document.querySelector(e)}.call(this,e,t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}a[e]=n}return a[e]}),d=null,c=0,s=[],u=r(3);function b(e,t){for(var n=0;n<e.length;n++){var r=e[n],o=l[r.id];if(o){o.refs++;for(var a=0;a<o.parts.length;a++)o.parts[a](r.parts[a]);for(;a<r.parts.length;a++)o.parts.push(v(r.parts[a],t))}else{var i=[];for(a=0;a<r.parts.length;a++)i.push(v(r.parts[a],t));l[r.id]={id:r.id,refs:1,parts:i}}}}function f(e,t){for(var n=[],r={},o=0;o<e.length;o++){var a=e[o],i=t.base?a[0]+t.base:a[0],s={css:a[1],media:a[2],sourceMap:a[3]};r[i]?r[i].parts.push(s):n.push(r[i]={id:i,parts:[s]})}return n}function h(e,t){var n=i(e.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=s[s.length-1];if("top"===e.insertAt)r?r.nextSibling?n.insertBefore(t,r.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),s.push(t);else if("bottom"===e.insertAt)n.appendChild(t);else{if("object"!=typeof e.insertAt||!e.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=i(e.insertAt.before,n);n.insertBefore(t,o)}}function g(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var t=s.indexOf(e);0<=t&&s.splice(t,1)}function m(e){var t=document.createElement("style");if(void 0===e.attrs.type&&(e.attrs.type="text/css"),void 0===e.attrs.nonce){var n=function(){0;return r.nc}();n&&(e.attrs.nonce=n)}return y(t,e.attrs),h(e,t),t}function y(t,n){Object.keys(n).forEach(function(e){t.setAttribute(e,n[e])})}function v(t,e){var n,r,o,a,i,s;if(e.transform&&t.css){if(!(a="function"==typeof e.transform?e.transform(t.css):e.transform.default(t.css)))return function(){};t.css=a}if(e.singleton){var l=c++;n=d||(d=m(e)),r=k.bind(null,n,l,!1),o=k.bind(null,n,l,!0)}else o=t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(i=e,s=document.createElement("link"),void 0===i.attrs.type&&(i.attrs.type="text/css"),i.attrs.rel="stylesheet",y(s,i.attrs),h(i,s),r=function(e,t,n){var r=n.css,o=n.sourceMap,a=void 0===t.convertToAbsoluteUrls&&o;(t.convertToAbsoluteUrls||a)&&(r=u(r));o&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var i=new Blob([r],{type:"text/css"}),s=e.href;e.href=URL.createObjectURL(i),s&&URL.revokeObjectURL(s)}.bind(null,n=s,e),function(){g(n),n.href&&URL.revokeObjectURL(n.href)}):(n=m(e),r=function(e,t){var n=t.css,r=t.media;r&&e.setAttribute("media",r);if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}.bind(null,n),function(){g(n)});return r(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;r(t=e)}else o()}}e.exports=function(e,i){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(i=i||{}).attrs="object"==typeof i.attrs?i.attrs:{},i.singleton||"boolean"==typeof i.singleton||(i.singleton=p()),i.insertInto||(i.insertInto="head"),i.insertAt||(i.insertAt="bottom");var s=f(e,i);return b(s,i),function(e){for(var t=[],n=0;n<s.length;n++){var r=s[n];(o=l[r.id]).refs--,t.push(o)}e&&b(f(e,i),i);for(n=0;n<t.length;n++){var o;if(0===(o=t[n]).refs){for(var a=0;a<o.parts.length;a++)o.parts[a]();delete l[o.id]}}}};var w,x=(w=[],function(e,t){return w[e]=t,w.filter(Boolean).join("\n")});function k(e,t,n,r){var o=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=x(t,o);else{var a=document.createTextNode(o),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(a,i[t]):e.appendChild(a)}}},3:function(e,t){e.exports=function(e){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var o=t.protocol+"//"+t.host,a=o+t.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(e,t){var n,r=t.trim().replace(/^"(.*)"$/,function(e,t){return t}).replace(/^'(.*)'$/,function(e,t){return t});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(r)?e:(n=0===r.indexOf("//")?r:0===r.indexOf("/")?o+r:a+r.replace(/^\.\//,""),"url("+JSON.stringify(n)+")")})}},54:function(e,t,n){n(55),n(57)},55:function(e,t,n){var r=n(56);"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(2)(r,o);r.locals&&(e.exports=r.locals)},56:function(e,t,n){(e.exports=n(0)(!1)).push([e.i,".page-resources h1 {\n  margin: 40px 40px 30px;\n}\n.page-resources section {\n  width: -webkit-fill-available;\n}\n.page-resources p {\n  margin: auto 40px 30px;\n}\n.page-resources #tablewrapper {\n  margin: auto 40px 40px;\n  width: -webkit-fill-available;\n}\n.page-resources #resources-table {\n  width: 100%;\n}\n.page-resources #resources-table td {\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  text-align: left;\n}\n.page-resources #resources-table tbody tr td:first-of-type {\n  text-align: center;\n}\n.page-resources #resources-table tbody tr .issuetype_icon {\n  text-align: center !important;\n  width: 25px;\n  height: auto;\n}\n.page-resources #resources-table tbody tr .summmary {\n  font-weight: 600 !important;\n  font-size: 0.85em !important;\n}\n.page-resources #resources-table tbody tr .description {\n  max-width: none;\n}\n.page-resources #resources-table tbody tr .issuetype-name {\n  font-size: 0.8em !important;\n  min-width: 100px;\n}\n.page-resources #resources-table tbody tr.Epic {\n  display: none !important;\n}\n",""])},57:function(e,t,n){var r=n(58);"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(2)(r,o);r.locals&&(e.exports=r.locals)},58:function(e,t,n){(e.exports=n(0)(!1)).push([e.i,".post-template table,\n.page-resources table,\n.post-template td,\n.page-resources td,\n.post-template th,\n.page-resources th {\n  border: none;\n  max-width: 150px;\n  overflow: hidden;\n  text-align: left !important;\n  padding: 15px 20px;\n}\n.post-template table,\n.page-resources table {\n  min-width: 100%;\n  display: table;\n  border-collapse: collapse;\n  border-spacing: 0;\n  border: 1px solid rgba(77, 87, 109, 0.25);\n  overflow: hidden;\n}\n@media (max-width: 600px) {\n  .post-template table,\n  .page-resources table {\n    width: 100%;\n  }\n}\n.post-template table.left tbody td,\n.page-resources table.left tbody td {\n  text-align: left;\n  vertical-align: top;\n}\n.post-template table.left tbody .pre,\n.page-resources table.left tbody .pre {\n  font-size: 0.8em;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n}\n.post-template table thead tr,\n.page-resources table thead tr {\n  border-bottom: 1px solid rgba(0, 0, 0, 0.12);\n  background-color: #5d6b8a !important;\n  color: white;\n}\n.post-template table thead th,\n.page-resources table thead th {\n  text-align: center;\n  font-family: 'TTNorms-Regular';\n  min-width: 30px;\n  padding: 10px;\n  font-size: 0.9em;\n}\n.post-template table thead th strong,\n.page-resources table thead th strong {\n  font-family: 'TTNorms-Regular';\n}\n.post-template table thead th::before,\n.page-resources table thead th::before {\n  font-family: 'TTNorms-Regular' !important;\n}\n.post-template table.striped tr,\n.page-resources table.striped tr {\n  border-bottom: none;\n}\n.post-template table.striped tbody tr:nth-child(odd),\n.page-resources table.striped tbody tr:nth-child(odd) {\n  background-color: rgba(242, 242, 242, 0.5);\n}\n.post-template table.striped tbody tr > td,\n.page-resources table.striped tbody tr > td {\n  border-radius: 0;\n}\n.post-template table.highlight > tbody > tr,\n.page-resources table.highlight > tbody > tr {\n  transition: background-color 0.25s ease;\n}\n.post-template table.highlight > tbody > tr:hover,\n.page-resources table.highlight > tbody > tr:hover {\n  background-color: rgba(242, 242, 242, 0.5);\n}\n.post-template table.centered tbody tr td,\n.page-resources table.centered tbody tr td,\n.post-template table.centered thead tr th,\n.page-resources table.centered thead tr th {\n  text-align: center;\n}\n.post-template tr:nth-child(odd),\n.page-resources tr:nth-child(odd) {\n  background-color: #fff;\n}\n.post-template tr:nth-child(even),\n.page-resources tr:nth-child(even) {\n  background-color: #f5f8ff;\n}\n.post-template td,\n.page-resources td,\n.post-template th,\n.page-resources th {\n  padding: 15px;\n  display: table-cell;\n  text-align: left;\n  vertical-align: middle;\n  font-size: 0.8em;\n  text-align: center;\n  line-height: 1.2;\n}\n@media (max-width: 600px) {\n  .post-template table,\n  .page-resources table {\n    width: auto;\n    border-collapse: collapse;\n    border-spacing: 0;\n    display: table;\n    position: relative;\n    overflow-x: scroll;\n  }\n  .post-template table tbody:hover,\n  .page-resources table tbody:hover {\n    cursor: -webkit-grab !important;\n    cursor: grab !important;\n  }\n  .post-template table td:empty:before,\n  .page-resources table td:empty:before {\n    content: '\\00a0';\n  }\n  .post-template table td,\n  .page-resources table td,\n  .post-template table th,\n  .page-resources table th {\n    margin: 0;\n    vertical-align: top;\n    border-spacing: 0 !important;\n    border-collapse: collapse !important;\n    font-size: 0.8em;\n  }\n  .post-template table td,\n  .page-resources table td {\n    width: -webkit-fill-available;\n    width: -moz-available;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n  }\n  .post-template table thead,\n  .page-resources table thead {\n    position: absolute;\n    left: 0;\n    width: 120px;\n    height: 100%;\n    box-shadow: 1px 0 4px rgba(62, 69, 86, 0.7);\n    z-index: 2;\n  }\n  .post-template table thead th,\n  .page-resources table thead th {\n    display: block;\n    padding: 10px 5px!important !important;\n    font-family: 'TTNorms-Regular';\n    letter-spacing: 0.5px;\n    text-align: center;\n    text-align: left;\n    text-transform: capitalize;\n    font-weight: 500;\n    font-size: 0.8em;\n  }\n  .post-template table thead th *,\n  .page-resources table thead th * {\n    font-size: 1em;\n  }\n  .post-template table thead tr,\n  .page-resources table thead tr {\n    display: block;\n    border-spacing: 0;\n    padding: 0;\n    height: 100%;\n  }\n  .post-template table tbody,\n  .page-resources table tbody {\n    margin-left: 120px;\n    width: auto;\n    position: relative;\n    overflow-x: auto;\n    white-space: nowrap;\n    height: 100%;\n    display: flex;\n    flex-direction: row;\n    align-items: stretch;\n  }\n  .post-template table tbody > tr > th,\n  .page-resources table tbody > tr > th {\n    border-bottom: 1px solid #e0e0e0;\n    border-radius: 0;\n    border-spacing: 0;\n    border-collapse: collapse;\n  }\n  .post-template table tbody tr,\n  .page-resources table tbody tr {\n    width: 115px;\n    vertical-align: top;\n    display: flex;\n    flex-direction: column;\n    overflow-wrap: normal;\n    line-break: strict;\n    white-space: inherit;\n    padding: 0 15px;\n    border-bottom: none;\n  }\n  .post-template table tbody tr td,\n  .page-resources table tbody tr td {\n    display: block;\n    min-height: 1.25em;\n    padding: 10px 0 !important;\n    border-spacing: 0;\n    border-collapse: collapse;\n    overflow: hidden;\n    line-break: normal;\n    white-space: nowrap;\n    width: -webkit-fill-available;\n    text-overflow: ellipsis;\n    width: -moz-available;\n    min-width: -webkit-fill-available;\n  }\n  .post-template table tbody:last-child::after,\n  .page-resources table tbody:last-child::after {\n    content: \" \";\n    display: table-row;\n    max-width: 300px;\n    min-width: 300px;\n    margin-left: -300px;\n  }\n}\n.post-template .dataframe thead th,\n.page-resources .dataframe thead th {\n  text-align: center !important;\n  font-family: 'TTNorms-Regular' !important;\n}\n.post-template .dataframe tbody tr th:only-of-type,\n.page-resources .dataframe tbody tr th:only-of-type {\n  vertical-align: middle;\n  text-align: center;\n}\n.post-template .tableContainer,\n.page-resources .tableContainer {\n  box-shadow: 0 0 5px #d1d4e8;\n  margin: 20px auto 40px;\n  position: relative;\n  overflow: hidden;\n}\n@media (max-width: 600px) {\n  .post-template .tableContainer,\n  .page-resources .tableContainer {\n    margin-left: calc(-50vw + 50%);\n    margin-right: calc(-50vw + 50%);\n    width: auto!important;\n  }\n  .post-template .tableContainer:hover,\n  .page-resources .tableContainer:hover {\n    cursor: -webkit-grab;\n    cursor: grab;\n  }\n}\n.post-template .handscroller:hover,\n.page-resources .handscroller:hover {\n  cursor: -webkit-grab !important;\n  cursor: grab !important;\n}\n.post-template .handscroller *:hover,\n.page-resources .handscroller *:hover {\n  cursor: -webkit-grab !important;\n  cursor: grab !important;\n}\n.post-template .tablefade,\n.page-resources .tablefade {\n  position: absolute;\n  right: 0;\n  height: 100%;\n  width: 70px;\n  top: 0;\n  display: block;\n  background: linear-gradient(90deg, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.8));\n}\n",""])}});