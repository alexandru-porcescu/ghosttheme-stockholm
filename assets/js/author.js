!function(n){var e={};function t(a){if(e[a])return e[a].exports;var i=e[a]={i:a,l:!1,exports:{}};return n[a].call(i.exports,i,i.exports,t),i.l=!0,i.exports}t.m=n,t.c=e,t.d=function(n,e,a){t.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:a})},t.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,e){if(1&e&&(n=t(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var a=Object.create(null);if(t.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var i in n)t.d(a,i,function(e){return n[e]}.bind(null,i));return a},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},t.p="",t(t.s=29)}([function(n,e,t){"use strict";n.exports=function(n){var e=[];return e.toString=function(){return this.map(function(e){var t=function(n,e){var t=n[1]||"",a=n[3];if(!a)return t;if(e&&"function"==typeof btoa){var i=(r=a,s=btoa(unescape(encodeURIComponent(JSON.stringify(r)))),l="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s),"/*# ".concat(l," */")),o=a.sources.map(function(n){return"/*# sourceURL=".concat(a.sourceRoot).concat(n," */")});return[t].concat(o).concat([i]).join("\n")}var r,s,l;return[t].join("\n")}(e,n);return e[2]?"@media ".concat(e[2],"{").concat(t,"}"):t}).join("")},e.i=function(n,t){"string"==typeof n&&(n=[[null,n,""]]);for(var a={},i=0;i<this.length;i++){var o=this[i][0];null!=o&&(a[o]=!0)}for(var r=0;r<n.length;r++){var s=n[r];null!=s[0]&&a[s[0]]||(t&&!s[2]?s[2]=t:t&&(s[2]="(".concat(s[2],") and (").concat(t,")")),e.push(s))}},e}},function(n,e,t){"use strict";var a,i={},o=function(){return void 0===a&&(a=Boolean(window&&document&&document.all&&!window.atob)),a},r=function(){var n={};return function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}n[e]=t}return n[e]}}();function s(n,e){for(var t=[],a={},i=0;i<n.length;i++){var o=n[i],r=e.base?o[0]+e.base:o[0],s={css:o[1],media:o[2],sourceMap:o[3]};a[r]?a[r].parts.push(s):t.push(a[r]={id:r,parts:[s]})}return t}function l(n,e){for(var t=0;t<n.length;t++){var a=n[t],o=i[a.id],r=0;if(o){for(o.refs++;r<o.parts.length;r++)o.parts[r](a.parts[r]);for(;r<a.parts.length;r++)o.parts.push(f(a.parts[r],e))}else{for(var s=[];r<a.parts.length;r++)s.push(f(a.parts[r],e));i[a.id]={id:a.id,refs:1,parts:s}}}}function p(n){var e=document.createElement("style");if(void 0===n.attributes.nonce){var a=t.nc;a&&(n.attributes.nonce=a)}if(Object.keys(n.attributes).forEach(function(t){e.setAttribute(t,n.attributes[t])}),"function"==typeof n.insert)n.insert(e);else{var i=r(n.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(e)}return e}var d,m=(d=[],function(n,e){return d[n]=e,d.filter(Boolean).join("\n")});function c(n,e,t,a){var i=t?"":a.css;if(n.styleSheet)n.styleSheet.cssText=m(e,i);else{var o=document.createTextNode(i),r=n.childNodes;r[e]&&n.removeChild(r[e]),r.length?n.insertBefore(o,r[e]):n.appendChild(o)}}function u(n,e,t){var a=t.css,i=t.media,o=t.sourceMap;if(i&&n.setAttribute("media",i),o&&btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),n.styleSheet)n.styleSheet.cssText=a;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(a))}}var h=null,g=0;function f(n,e){var t,a,i;if(e.singleton){var o=g++;t=h||(h=p(e)),a=c.bind(null,t,o,!1),i=c.bind(null,t,o,!0)}else t=p(e),a=u.bind(null,t,e),i=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)};return a(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;a(n=e)}else i()}}n.exports=function(n,e){(e=e||{}).attributes="object"==typeof e.attributes?e.attributes:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=o());var t=s(n,e);return l(t,e),function(n){for(var a=[],o=0;o<t.length;o++){var r=t[o],p=i[r.id];p&&(p.refs--,a.push(p))}n&&l(s(n,e),e);for(var d=0;d<a.length;d++){var m=a[d];if(0===m.refs){for(var c=0;c<m.parts.length;c++)m.parts[c]();delete i[m.id]}}}}},function(n,e){var t,a,i=n.exports={};function o(){throw new Error("setTimeout has not been defined")}function r(){throw new Error("clearTimeout has not been defined")}function s(n){if(t===setTimeout)return setTimeout(n,0);if((t===o||!t)&&setTimeout)return t=setTimeout,setTimeout(n,0);try{return t(n,0)}catch(e){try{return t.call(null,n,0)}catch(e){return t.call(this,n,0)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:o}catch(n){t=o}try{a="function"==typeof clearTimeout?clearTimeout:r}catch(n){a=r}}();var l,p=[],d=!1,m=-1;function c(){d&&l&&(d=!1,l.length?p=l.concat(p):m=-1,p.length&&u())}function u(){if(!d){var n=s(c);d=!0;for(var e=p.length;e;){for(l=p,p=[];++m<e;)l&&l[m].run();m=-1,e=p.length}l=null,d=!1,function(n){if(a===clearTimeout)return clearTimeout(n);if((a===r||!a)&&clearTimeout)return a=clearTimeout,clearTimeout(n);try{a(n)}catch(e){try{return a.call(null,n)}catch(e){return a.call(this,n)}}}(n)}}function h(n,e){this.fun=n,this.array=e}function g(){}i.nextTick=function(n){var e=new Array(arguments.length-1);if(arguments.length>1)for(var t=1;t<arguments.length;t++)e[t-1]=arguments[t];p.push(new h(n,e)),1!==p.length||d||s(u)},h.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=g,i.addListener=g,i.once=g,i.off=g,i.removeListener=g,i.removeAllListeners=g,i.emit=g,i.prependListener=g,i.prependOnceListener=g,i.listeners=function(n){return[]},i.binding=function(n){throw new Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(n){throw new Error("process.chdir is not supported")},i.umask=function(){return 0}},,function(n,e,t){var a=t(5);"string"==typeof a&&(a=[[n.i,a,""]]);var i={insert:"head",singleton:!1};t(1)(a,i);a.locals&&(n.exports=a.locals)},function(n,e,t){(n.exports=t(0)(!1)).push([n.i,"/* Global Styles */\n/*====================================================\n\tMIXINS\n====================================================*/\n/**\n * Allows you to use retina images at various pixel densities.\n * Examples:\n *\n *   .retina(/images/mypic.jpg, 2);\n *   .retina(/images/mypic.jpg, 3, 100px 100px, left top no-repeat transparent);\n *\n * @param  {String} $path               The path to the file name minus extension.\n * @param  {Number} $cap:    2          The highest pixel density level images exist for.\n * @param  {Value}  $size:   auto auto  The intended width of the rendered image.\n * @param  {Value}  $extras: null       Any other `background` values to be added.\n */\n/* Page Styles */\n.page-template h1 {\n  font-weight: 100;\n}\n.page-template .page-container {\n  margin-bottom: 30px;\n}\n@media (max-width: 800px) {\n  .page-template .page-container {\n    margin-bottom: 0;\n  }\n}\n.page-template .page-container .main-content {\n  box-shadow: 0 0 5px rgba(65, 67, 144, 0.15);\n  background: white;\n}\n.page-template .page-container .main-content a {\n  font-weight: 600;\n}\n.page-about {\n  margin-bottom: 0;\n  font-weight: 500;\n}\n.page-about .page {\n  padding: 40px;\n  background: white;\n}\n@media (max-width: 600px) {\n  .page-about .page {\n    padding: 0 30px 30px;\n  }\n}\n.page-about .about-content {\n  margin-bottom: 40px !important;\n}\n.page-about .author-container {\n  display: flex;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  align-content: flex-start;\n  flex-flow: row wrap;\n}\n.page-about .author-container .author-card-small {\n  width: 48.5%;\n  margin: 0 0 15px;\n}\n@media (max-width: 600px) {\n  .page-about .author-container .author-card-small {\n    width: 100%;\n  }\n}\n.page-about figure {\n  margin: 0 0 30px;\n  overflow: hidden;\n}\n@media (max-width: 600px) {\n  .page-about figure {\n    max-height: 312px;\n    margin-left: calc(-50vw + 50%) !important;\n    margin-right: calc(-50vw + 50%) !important;\n  }\n}\n.page-about .page-title {\n  margin: 0 0 20px;\n}\n@media (max-width: 1100px) {\n  .page-about .page-title {\n    display: none;\n  }\n}\n@media (max-width: 800px) {\n  .page-about .about-content {\n    display: flex;\n    flex-direction: column;\n    margin: -14px 0 20px !important;\n  }\n}\n.page-about .post-image {\n  display: none !important;\n}\n.page-about .welcomevideo,\n.page-about iframe {\n  display: block;\n  position: relative;\n  width: 684px;\n  height: 381px;\n  margin: 0;\n}\n@media (max-width: 600px) {\n  .page-about .welcomevideo,\n  .page-about iframe {\n    width: 100%;\n    height: 300px;\n  }\n}\n.page-resources h1 {\n  margin: 40px 40px 30px;\n}\n.page-resources section {\n  width: -webkit-fill-available;\n}\n.page-resources p {\n  margin: auto 40px 30px;\n}\n.page-resources #tablewrapper {\n  margin: auto 40px 40px;\n  width: -webkit-fill-available;\n}\n.page-resources #resources-table {\n  width: 100%;\n  border: 1px solid #f5f8fb;\n}\n.page-resources #resources-table .icon {\n  max-width: 5px;\n}\n.page-resources #resources-table td {\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  text-align: left;\n  line-height: 1;\n  padding: 20px 10px;\n  vertical-align: middle;\n}\n.page-resources #resources-table td:last-of-type {\n  max-width: 40px;\n}\n.page-resources #resources-table td img {\n  height: 20px;\n  width: 20px;\n}\n.page-resources #resources-table tbody tr td:first-of-type {\n  text-align: center !important;\n}\n.page-resources #resources-table tbody tr .issuetype_icon {\n  text-align: center !important;\n  width: 25px;\n  height: auto;\n}\n.page-resources #resources-table tbody tr .summmary {\n  font-weight: 600 !important;\n  font-size: 0.85em !important;\n}\n.page-resources #resources-table tbody tr .description {\n  max-width: none;\n}\n.page-resources #resources-table tbody tr .issuetype-name {\n  font-size: 0.8em !important;\n  min-width: 100px;\n}\n.page-resources #resources-table tbody tr.Epic {\n  display: none !important;\n}\n.author-template .tag-name,\n.home-template .tag-name,\n.paged .tag-name,\n.tag-template .tag-name {\n  font-size: 1.3em;\n  margin-top: 0;\n  font-family: 'proxima-nova', sans-serif;\n}\n.author-template .tag-name i,\n.home-template .tag-name i,\n.paged .tag-name i,\n.tag-template .tag-name i {\n  font-size: 0.8em;\n  margin-right: 5px;\n  font-weight: 100;\n}\n@media (max-width: 800px) {\n  .author-template .main-header,\n  .home-template .main-header,\n  .paged .main-header,\n  .tag-template .main-header {\n    height: 200px;\n  }\n}\n/*====================================================\n\tTag page & author page cover base styles\n====================================================*/\n.cover {\n  text-align: center;\n  background-color: white;\n  padding: 40px;\n  margin: 0 0 20px;\n  width: -webkit-fill-available;\n  width: -moz-available;\n  border-radius: 5px;\n}\n@media (max-width: 800px) {\n  .cover {\n    margin: 0 auto 20px;\n    padding: 40px 0;\n    border-radius: 0;\n  }\n}\n@media (max-width: 600px) {\n  .cover {\n    margin-left: 0 !important;\n    margin-right: 0 !important;\n    margin-top: 0;\n    width: 100%;\n  }\n}\n.cover .post-title {\n  font-weight: 500;\n}\n.cover .tag-name {\n  margin-top: 0;\n}\n.cover .tag-name i {\n  font-size: 17px;\n  margin-right: 5px;\n}\n.cover .tag-name span {\n  font-weight: 600;\n}\n.cover .tag-description {\n  width: 80%;\n  margin: 0 auto;\n  text-align: 14px;\n  line-height: 1.5;\n  font-weight: 300;\n}\n@media (max-width: 600px) {\n  .cover .tag-description {\n    width: 90%;\n    margin: 15px auto 0;\n    font-size: 0.9em;\n    line-height: 1.6;\n  }\n}\n.cover .post-excerpt {\n  font-family: 'proxima-nova', sans-serif;\n}\n.cover h3 {\n  margin-bottom: 10px;\n  font-family: 'proxima-nova', sans-serif;\n}\n@media (max-width: 600px) {\n  .cover h3 {\n    margin: 5px 10px;\n  }\n}\n.cover .meta-info {\n  font-family: 'proxima-nova', sans-serif;\n  font-size: 0.9em;\n  display: flex;\n  justify-content: space-around;\n  width: 81%;\n  margin: auto;\n}\n@media (max-width: 600px) {\n  .cover .meta-info {\n    flex-direction: column;\n  }\n}\n.cover .meta-info span {\n  margin: 0 7px;\n  font-size: 0.9em;\n  line-height: 1.3;\n  color: #52555b;\n}\n.cover .meta-info span i {\n  margin-right: 7px;\n}\n@media (max-width: 600px) {\n  .cover .meta-info span {\n    display: block;\n    line-height: 1.6;\n  }\n}\n/* Table Styles */\ntable {\n  width: 100%;\n  max-width: 100%;\n  margin-bottom: 0;\n  background-color: #fff;\n  border-spacing: 0;\n}\ntable:hover {\n  cursor: ew-resize !important;\n}\ntable thead tr {\n  background: white !important;\n}\ntable thead tr th {\n  padding: 15px 10px;\n  vertical-align: top;\n  font-size: 1em;\n}\ntable tbody tr {\n  transition: all 0.3s ease-out;\n}\ntable tbody tr:nth-child(odd) {\n  background: #f6f8fb;\n}\ntable td,\ntable th {\n  text-align: left;\n  padding: 10px;\n  vertical-align: top;\n  border-top: 0;\n  transition: all 0.3s ease-out;\n  overflow: hidden;\n  white-space: nowrap;\n  max-width: 150px;\n  text-overflow: ellipsis;\n  border-bottom: 0;\n  font-size: 0.8em;\n}\n@media (max-width: 600px) {\n  table td,\n  table th {\n    border: 0;\n  }\n}\n.tableContainer {\n  border-spacing: 0;\n  overflow: hidden;\n  border-radius: 3px;\n  border: 1px solid #d3dadd;\n  margin: 30px 0;\n  max-height: 539px;\n}\n@media (max-width: 600px) {\n  .tableContainer {\n    margin-left: calc(-50vw + 50%) !important;\n    margin-right: calc(-50vw + 50%) !important;\n    max-height: 600px;\n  }\n  .tableContainer *:hover {\n    cursor: ew-resize !important;\n  }\n  .tableContainer *:active {\n    cursor: grabbing;\n  }\n  .tableContainer table {\n    width: auto;\n    border-collapse: collapse;\n    border-spacing: 0;\n    display: table;\n    position: relative;\n    overflow-x: scroll;\n  }\n  .tableContainer table td,\n  .tableContainer table th {\n    margin: 0;\n    vertical-align: top;\n    border-spacing: 0 !important;\n    border-collapse: collapse !important;\n    font-size: 0.8em;\n  }\n  .tableContainer table td {\n    width: -webkit-fill-available;\n    width: -moz-available;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    font-family: 'proxima-nova', sans-serif;\n  }\n  .tableContainer table thead {\n    position: absolute;\n    left: 0;\n    width: 120px;\n    height: 100%;\n    box-shadow: 1px 0 4px rgba(62, 69, 86, 0.7);\n    z-index: 2;\n    background: #52596a;\n    padding-left: 10px;\n    overflow: hidden;\n  }\n  .tableContainer table thead tr {\n    display: block;\n    border-spacing: 0;\n    padding: 0;\n    height: 100%;\n    background: #5c6376;\n  }\n  .tableContainer table thead tr:hover {\n    background-color: inherit;\n    cursor: ew-resize !important;\n  }\n  .tableContainer table thead tr th {\n    display: table-row;\n    margin-left: 5px;\n    padding: 0;\n    line-height: 4.8;\n    font-family: 'proxima-nova', sans-serif;\n    letter-spacing: 0.5px;\n    text-align: left;\n    text-transform: capitalize;\n    font-weight: 500;\n    min-height: 50px;\n    margin: 5px 0;\n    margin-right: 0 !important;\n    max-width: unset !important;\n    color: #ffffff;\n    background: #52596a;\n    vertical-align: middle;\n    font-size: 0.7em;\n  }\n  .tableContainer table thead tr th * {\n    font-size: 1em;\n  }\n  .tableContainer table tbody {\n    margin-left: 131px;\n    width: auto;\n    position: relative;\n    overflow-x: auto;\n    white-space: nowrap;\n    height: 100%;\n    display: flex;\n    flex-direction: row;\n    align-items: stretch;\n  }\n  .tableContainer table tbody tr {\n    width: 115px;\n    vertical-align: top;\n    display: flex;\n    flex-direction: column;\n    overflow-wrap: normal;\n    line-break: strict;\n    white-space: inherit;\n    padding: 0 15px;\n    border-bottom: none;\n  }\n  .tableContainer table tbody tr tr:hover {\n    background-color: rgba(0, 0, 0, 0.12);\n  }\n  .tableContainer table tbody tr td,\n  .tableContainer table tbody tr th {\n    display: block;\n    min-height: 1.25em;\n    padding: 10px 0;\n    border-spacing: 0;\n    border-collapse: collapse;\n    overflow: hidden;\n    line-break: normal;\n    white-space: nowrap;\n    width: -webkit-fill-available;\n    text-overflow: ellipsis;\n    width: -moz-available;\n    min-width: -webkit-fill-available;\n    border-bottom: 1px solid #e7ebf2;\n    margin: 5px 0;\n    font-size: 0.78em !important;\n    font-weight: 300;\n  }\n  .tableContainer table tbody tr td:last-child,\n  .tableContainer table tbody tr th:last-child {\n    border-bottom: 0;\n  }\n  .tableContainer table tbody:last-child::after {\n    content: \" \";\n    display: table-row;\n    max-width: 300px;\n    min-width: 300px;\n    margin-left: -300px;\n  }\n}\n.tableContainer .rowCounter {\n  text-align: right;\n  width: 100%;\n  font-size: 0.8em;\n  margin-top: -20px;\n  width: fit-content;\n  position: absolute;\n  right: 0;\n  background: #555760;\n  padding: 0 9px;\n  color: white;\n}\n",""])},,,,,function(n,e,t){"use strict";function a(n){$("#github-card-author").attr("data-username",n),new GitHubCard({template:"#github-card-author"}).init(),$(".author-github").css("display","block")}t.d(e,"a",function(){return a})},function(n,e,t){"use strict";function a(){window.location.href.includes("lynx")&&$("main a").each(function(n,e){var t=this,a="https://us-east1-hackersandslackers-204807.cloudfunctions.net/linkpreview-endpoint?url="+$(this).attr("href");$(this).html('<div class="ui placeholder"> <div class="image header"> <div class="line"></div> <div class="line"></div> </div> <div class="paragraph"> <div class="line"></div> <div class="line"></div> <div class="line"></div> <div class="line"></div> <div class="line"></div> </div><div class="gap">  </div><div class="column left"></div> <div class="column right"></div></div></div>');fetch(a,{method:"GET",mode:"no-cors",headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"*"}}).then(function(n){$(t).html('<a href="'+n.url+'"><div class="link-preview"> \n <div class="link-info"> \n <div class="link-preview-image"><img alt="'+n.title+'" src="'+n.image+'"></div> \n<div class="detail-stack"> \n <h4 class="title-desktop">'+n.title+"</h4> \n <p>"+n.description+'</p> \n<h4 class="title-mobile">'+n.title+'</h4> \n <span class="url-info"><i class="far fa-link"></i>'+n.url.split("://")[1]+"</span> \n </div></div></a>")})})}t.d(e,"a",function(){return a})},function(n,e,t){"use strict";(function(n){function a(e){if(e){$(".website").css("display","block");var t=n.env.LINK_PREVIEW_ENDPOINT+"?url="+e;$.ajax({method:"GET",url:t,dataType:"json",success:function(n){$(".website-link").remove(),$(".widget.website").append('<div class="website-preview" ><a href="'+n.url+'">  \n<div class="website-image" style="background:url('+n.image+')"></div> \n<div class="website-details"> \n <a href="'+n.url+'" class="website-title">'+n.title+'</a> \n <p class="website-description">'+n.description+"</p></div></div></a>")}})}}t.d(e,"a",function(){return a})}).call(this,t(2))},function(n,e,t){"use strict";function a(n){if(n){var e='<a class="twitter-timeline" href="https://twitter.com/'+n+'" data-chrome="noheader nofooter noborders noscrollbar transparent"></a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"><\/script>';$(".widget.twitter").append(e)}}t.d(e,"a",function(){return a})},function(n,e,t){"use strict";function a(n){n&&($(".widget.rss").css("display","block"),jQuery(function(n){n(".widget.rss").rss("https://toddbirchard.com/rss",{entryTemplate:'<li><div class="rss-image">{teaserImage}</div> \n<div class="rss-details"> \n<a class="rss-title" href="{url}">{title}</a> \n<p class="rss-description">{shortBodyPlain}</p> \n</div></li>'})}))}t.d(e,"a",function(){return a})},function(n,e,t){"use strict";(function(n){function a(e){var t=n.env.MEETUP_API_KEY;if(e){var a="https://api.meetup.com/2/events?key="+t+"&member_id="+e+"&rsvp=yes,maybe&desc=false&status=upcoming";$.ajax({method:"GET",url:a,dataType:"jsonp",success:function(n){var e=n.results;if(e.length)for(var t=0;t<e.length;t++){var a=e[t].name,i=(e[t].photo_url,new Date(e[t].time).toDateString()),o=e[t].event_url,r=e[t].group.name,s="N/A";e[t].venue&&(s=e[t].venue.city);var l='<div class="meetup-event">             <a href="'+o+'">               <div class="meetup-event-name">'+a+'</div>               <span class="meetup-event-time"><i class="fal fa-calendar"></i>  '+i+'</span>               <span class="meetup-event-group"><i class="far fa-user-friends"></i>  '+r+'</span>               <span class="meetup-event-city"><i class="far fa-map-pin"></i>  '+s+"</span>             </a></div>";$(".meetup .meetup-events").append(l)}else $(".meetup .meetup-events").append("No upcoming RSVPs.")}}),$(".meetup").css("display","block")}}t.d(e,"a",function(){return a})}).call(this,t(2))},function(n,e,t){"use strict";(function(n){function a(e){if(e){$(".widget.pocket").css("display","block");var t="https://getpocket.com/v3/get?consumer_key="+n.env.POCKET_CONSUMER_KEY+"&access_token="+n.env.POCKET_ACCESS_TOKEN+"&detailType=complete&count=3";$.ajax({method:"GET",url:t,dataType:"jsonp",success:function(n){$(".widget.pocket .pocket-articles").append("ayy lol"),console.log(n)}})}}t.d(e,"a",function(){return a})}).call(this,t(2))},,,,,,,,,,,,,function(n,e,t){"use strict";t.r(e),function(n){t(4),t(30),t(32);var e=t(10),a=t(11),i=t(12),o=t(13),r=t(14),s=t(15),l=t(16),p=n.env.AUTHORS_ENDPOINT;function d(){var n=function(){var n=String(document.location.pathname).split("/");return n=n[n.length-2]}();$.ajax({method:"GET",url:p+"?author="+n,dataType:"json",success:function(n){var t,a,p,d,m,c,u;a=(t=n).github,t.medium,p=t.website,d=t.twitter,m=t.rss,c=t.meetup,u=t.pocket,Object(e.a)(a),Object(i.a)(p),Object(o.a)(d),Object(r.a)(m),Object(s.a)(c),Object(l.a)(u)}})}$(document).ready(function(){d(),Object(a.a)()})}.call(this,t(2))},function(n,e,t){var a=t(31);"string"==typeof a&&(a=[[n.i,a,""]]);var i={insert:"head",singleton:!1};t(1)(a,i);a.locals&&(n.exports=a.locals)},function(n,e,t){(n.exports=t(0)(!1)).push([n.i,"/* Global Styles */\n/*====================================================\n\tMIXINS\n====================================================*/\n/**\n * Allows you to use retina images at various pixel densities.\n * Examples:\n *\n *   .retina(/images/mypic.jpg, 2);\n *   .retina(/images/mypic.jpg, 3, 100px 100px, left top no-repeat transparent);\n *\n * @param  {String} $path               The path to the file name minus extension.\n * @param  {Number} $cap:    2          The highest pixel density level images exist for.\n * @param  {Value}  $size:   auto auto  The intended width of the rendered image.\n * @param  {Value}  $extras: null       Any other `background` values to be added.\n */\n/* Page Styles */\n.page-template h1 {\n  font-weight: 100;\n}\n.page-template .page-container {\n  margin-bottom: 30px;\n}\n@media (max-width: 800px) {\n  .page-template .page-container {\n    margin-bottom: 0;\n  }\n}\n.page-template .page-container .main-content {\n  box-shadow: 0 0 5px rgba(65, 67, 144, 0.15);\n  background: white;\n}\n.page-template .page-container .main-content a {\n  font-weight: 600;\n}\n/*====================================================\n\tTag page & author page cover base styles\n====================================================*/\n.cover {\n  text-align: center;\n  background-color: white;\n  padding: 40px;\n  margin: 0 0 20px;\n  width: -webkit-fill-available;\n  width: -moz-available;\n  border-radius: 5px;\n}\n@media (max-width: 800px) {\n  .cover {\n    margin: 0 auto 20px;\n    padding: 40px 0;\n    border-radius: 0;\n  }\n}\n@media (max-width: 600px) {\n  .cover {\n    margin-left: 0 !important;\n    margin-right: 0 !important;\n    margin-top: 0;\n    width: 100%;\n  }\n}\n.cover .post-title {\n  font-weight: 500;\n}\n.cover .tag-name {\n  margin-top: 0;\n}\n.cover .tag-name i {\n  font-size: 17px;\n  margin-right: 5px;\n}\n.cover .tag-name span {\n  font-weight: 600;\n}\n.cover .tag-description {\n  width: 80%;\n  margin: 0 auto;\n  text-align: 14px;\n  line-height: 1.5;\n  font-weight: 300;\n}\n@media (max-width: 600px) {\n  .cover .tag-description {\n    width: 90%;\n    margin: 15px auto 0;\n    font-size: 0.9em;\n    line-height: 1.6;\n  }\n}\n.cover .post-excerpt {\n  font-family: 'proxima-nova', sans-serif;\n}\n.cover h3 {\n  margin-bottom: 10px;\n  font-family: 'proxima-nova', sans-serif;\n}\n@media (max-width: 600px) {\n  .cover h3 {\n    margin: 5px 10px;\n  }\n}\n.cover .meta-info {\n  font-family: 'proxima-nova', sans-serif;\n  font-size: 0.9em;\n  display: flex;\n  justify-content: space-around;\n  width: 81%;\n  margin: auto;\n}\n@media (max-width: 600px) {\n  .cover .meta-info {\n    flex-direction: column;\n  }\n}\n.cover .meta-info span {\n  margin: 0 7px;\n  font-size: 0.9em;\n  line-height: 1.3;\n  color: #52555b;\n}\n.cover .meta-info span i {\n  margin-right: 7px;\n}\n@media (max-width: 600px) {\n  .cover .meta-info span {\n    display: block;\n    line-height: 1.6;\n  }\n}\n/* Author Styles */\n@media (max-width: 800px) {\n  .author-template .page-container {\n    margin-top: 0;\n  }\n}\n.author-template .cover {\n  border-bottom: 1px solid #eaedf1;\n}\n@media (max-width: 600px) {\n  .author-template .cover {\n    margin-bottom: 30px;\n  }\n}\n.author-template .cover .author-name {\n  text-transform: uppercase;\n  font-size: 1.7em;\n  font-family: 'HarmoniaSansPro-Regular', sans-serif;\n}\n.author-template .cover .avatar {\n  margin: 0 !important;\n  width: 85px;\n  height: 85px;\n  float: none;\n  border-radius: 50%;\n}\n.author-template .cover a:hover {\n  color: #40cebb;\n}\n.author-template .cover .bio {\n  font-size: 0.9em;\n  line-height: 1.5;\n  max-width: 85%;\n  margin: 15px auto 0;\n  font-weight: 300;\n}\n@media (max-width: 600px) {\n  .author-template .cover .bio {\n    max-width: 80%;\n    margin: 15px auto 0;\n  }\n}\n.author-template .cover .meta-info {\n  margin: 15px auto;\n}\n.author-template .cover .meta-item {\n  line-height: 1.3;\n  margin: 0 auto;\n}\n@media (max-width: 600px) {\n  .author-template .cover .meta-item {\n    margin: 0 auto 4px;\n  }\n}\n.author-template .widget {\n  order: 1;\n}\n.author-template .widget .widget-body {\n  background-color: white;\n}\n.author-template .widget.github,\n.author-template .widget.medium,\n.author-template .widget.meetup {\n  display: none;\n}\n@media (max-width: 800px) {\n  .author-template .sidebar {\n    display: none !important;\n  }\n}\n.author-template .sidebar .github {\n  order: 1;\n}\n.author-template .sidebar .github .widget-body {\n  padding: 15px;\n}\n.author-template .sidebar .twitter {\n  order: 20;\n}\n.author-template {\n  /* followers number */\n  /* List of repositories */\n}\n.author-template .author-github {\n  display: none;\n}\n.author-template #github-card-author {\n  width: 100%;\n  font-size: 16px;\n  overflow: hidden;\n}\n@media (max-width: 800px) {\n  .author-template #github-card-author {\n    width: auto;\n    margin-bottom: 30px;\n  }\n}\n.author-template .profile {\n  background: #FFF;\n  overflow: hidden;\n  padding: 10px 14px 0;\n  min-height: 135px;\n}\n@media (max-width: 800px) {\n  .author-template .profile {\n    padding: 10px;\n  }\n}\n.author-template .stats {\n  padding: 5px;\n}\n.author-template .languages {\n  position: relative;\n  clear: both;\n  margin: 0 -10px;\n  padding: 15px 0;\n  border-top: 1px solid #DEDEDE;\n  font-size: 0.8em;\n  display: flex;\n  justify-content: space-between;\n  list-style: none;\n  margin-top: 5px;\n}\n@media (max-width: 800px) {\n  .author-template .languages {\n    margin: 0;\n    padding: 15px;\n  }\n}\n.author-template .languages::before {\n  position: absolute;\n  top: -0.7em;\n  background: #FFF;\n  padding-right: 5px;\n  content: 'Top languages';\n  font-style: italic;\n  color: #555;\n}\n.author-template .languages li {\n  display: inline-block;\n  font-family: 'proxima-nova', sans-serif;\n  color: #444;\n  font-size: 1.1em;\n  border: 0;\n  line-height: 1;\n  transition: all 0.2s ease-out;\n}\n.author-template .languages li:hover {\n  color: #40cebb;\n  cursor: pointer;\n}\n.author-template .followMe {\n  margin-top: 6px;\n  display: flex;\n  align-items: center;\n}\n.author-template .follow-button {\n  font-size: 0.8em;\n  color: white;\n  float: left;\n  padding: 6px 14px;\n  line-height: 1.3;\n  background: #5eb9d7;\n  transition: 0.2s all ease-out;\n  border-radius: 2px;\n  overflow: hidden;\n}\n@media (max-width: 800px) {\n  .author-template .follow-button {\n    padding: 8px 12px;\n    font-size: 0.7em;\n  }\n}\n.author-template .follow-button:hover {\n  color: inherit;\n  background: #40cebb;\n}\n.author-template .followMe span {\n  position: relative;\n  background: #FFF;\n  margin-left: 8px;\n  padding: 5px 8px;\n  color: #444;\n  font-size: 0.8em;\n  border: 1px solid #BBB;\n  height: 11px;\n  line-height: 1;\n}\n.author-template .followMe span::before {\n  content: '';\n  position: absolute;\n  display: block;\n  width: 5px;\n  height: 5px;\n  left: -4px;\n  top: 30%;\n  background: inherit;\n  border-left: 1px solid;\n  border-top: 1px solid;\n  border-color: inherit;\n  -moz-transform: rotate(-45deg);\n  -webkit-transform: rotate(-45deg);\n  -ms-transform: rotate(-45deg);\n  transform: rotate(-45deg);\n}\n.author-template .avatar {\n  width: 64px;\n  height: 64px;\n  float: left;\n  margin: 0 20px 25px 0;\n  border-radius: 3px;\n  overflow: hidden;\n  box-shadow: 0 0 2px 0 #DDD;\n}\n@media (max-width: 800px) {\n  .author-template .avatar {\n    margin: 0 15px 15px 0;\n  }\n}\n.author-template .repos {\n  clear: both;\n}\n.author-template .repos .header {\n  display: block;\n  width: auto;\n  border-width: 1px 0;\n  font-size: 1em;\n  padding: 15px 0 0;\n  height: fit-content;\n  text-transform: uppercase;\n  font-family: 'proxima-nova', sans-serif;\n}\n.author-template .repos a {\n  position: relative;\n  display: block;\n  margin: 10px 0;\n  font-size: 0.9em;\n  border-top: 0;\n  width: auto;\n  padding: 10px 16px;\n  transition: 0.2s all ease-out;\n  border: 1px solid #e5ebf0;\n  border-radius: 3px;\n}\n.author-template .repos a:hover {\n  background-color: #5eb9d7;\n  color: white !important;\n  cursor: pointer;\n}\n.author-template .repos a:hover span {\n  color: white;\n}\n.author-template .repos a:hover * {\n  cursor: pointer;\n}\n.author-template .repos a:hover .star::after {\n  opacity: 1;\n}\n.author-template .repos .repo-name {\n  max-width: 280px;\n  text-overflow: ellipsis;\n  color: #5eb9d7;\n  font-weight: 600;\n  font-size: 1em;\n}\n.author-template .repos .updated {\n  display: block;\n  font-size: 0.85em;\n  color: #777;\n}\n.author-template .repos .star {\n  position: absolute;\n  font-size: 1em;\n  right: 1em;\n  top: 2em;\n  color: #e39e45;\n  font-weight: 600;\n  margin-top: -5px;\n}\n.author-template .repos .star::after {\n  content: '\\a0\\2605';\n  font-size: 1.1em;\n  font-weight: bold;\n  color: #e39e45;\n  opacity: 0.5;\n}\n.author-template a {\n  text-decoration: none;\n}\n.author-template a:hover {\n  color: #4183C4;\n  cursor: pointer;\n}\n.author-template a:hover .star::after {\n  color: white;\n}\n.author-template .name {\n  display: block;\n  font-size: 1em;\n  color: #222;\n  font-family: 'proxima-nova', sans-serif;\n}\n.author-template .error {\n  font-size: 0.8em;\n  color: #444;\n  padding: 10px;\n}\n.author-template .error span {\n  display: block;\n  border-bottom: 1px solid #DDD;\n  padding-bottom: 5px;\n  margin-bottom: 5px;\n}\n.author-template .error span.remain {\n  text-align: center;\n  font-weight: bold;\n}\n.author-template #medium {\n  background: white;\n  padding: 20px 30px;\n}\n.author-template #medium .medium-widget-article__grid {\n  border-bottom: 1px solid #e5e5e5;\n  padding-bottom: 20px;\n}\n.author-template #medium .medium-widget-article__grid:last-of-type {\n  border-bottom: 0;\n}\n.author-template #medium .title {\n  margin: 0 0 0 -9px;\n}\n.author-template #medium .medium-widget-article__item {\n  font-size: 14px;\n  padding: 15px 5px;\n}\n.author-template #medium .medium-widget-article__description {\n  display: none;\n}\n.author-template #medium .medium-widget-article__title {\n  font-family: 'HarmoniaSansPro-Bold', sans-serif;\n  color: #2f394f;\n  font-size: 1.2em;\n  line-height: 1.2;\n}\n.author-template #medium .medium-widget-article__image img {\n  width: 100px;\n}\n.author-template .meetup .widget-body {\n  padding: 15px 10px;\n}\n.author-template .meetup .noevents {\n  text-align: center;\n  padding: 20px;\n  display: block;\n  color: #6f6f6f;\n  font-size: 16px;\n  font-style: italic;\n  margin-bottom: 30px;\n}\n.author-template .meetup .meetup-events .meetup-event {\n  border-bottom: 1px solid #e8e8e8;\n  padding: 20px 0;\n}\n.author-template .meetup .meetup-events .meetup-event:last-child {\n  border-bottom: 0;\n}\n.author-template .meetup .meetup-events .meetup-event:first-child {\n  padding-top: 0;\n}\n.author-template .meetup .meetup-events .meetup-event span {\n  display: block;\n  font-family: 'proxima-nova', sans-serif;\n  color: #666a77;\n  font-size: 0.8em;\n  white-space: nowrap;\n  overflow: hidden;\n  line-height: 1.6;\n}\n.author-template .meetup .meetup-events .meetup-event span i {\n  margin-right: 5px;\n  font-size: 0.9em;\n}\n.author-template .meetup .meetup-events .meetup-event .meetup-event-name {\n  color: #5eb9d7;\n  font-family: 'TTNormsPro-Medium', sans-serif;\n  margin-bottom: 10px;\n  line-height: 1.25;\n  transition: all 0.2s ease-out;\n}\n.author-template .meetup .meetup-events .meetup-event .meetup-event-name:hover {\n  color: #40cebb;\n}\n.author-template .sidebar .website .website-preview {\n  transition: all 0.2s ease-out;\n  border: 1px solid #e6e6e6;\n  border-radius: 3px;\n}\n.author-template .sidebar .website .website-preview:hover {\n  cursor: pointer;\n  background: #40cebb;\n  border: 1px solid #40cebb;\n}\n.author-template .sidebar .website .website-preview:hover * {\n  color: white;\n}\n.author-template .sidebar .website .website-image {\n  height: 150px;\n  background-size: cover !important;\n  color: white;\n  position: relative;\n  margin: 0;\n  border: 0;\n  border-radius: 2px 2px 0 0;\n  overflow: hidden;\n}\n.author-template .sidebar .website .website-image:hover {\n  cursor: pointer;\n}\n.author-template .sidebar .website .website-details {\n  padding: 15px;\n}\n.author-template .sidebar .website .website-details * {\n  color: #475165;\n}\n.author-template .sidebar .website .website-details .website-title {\n  font-size: 1.35em;\n  line-height: 1;\n  display: block;\n}\n.author-template .sidebar .website .website-details .website-description {\n  font-size: 0.9em;\n  margin: 10px 0 0;\n  line-height: 1.4;\n}\n.author-template .sidebar .widget.rss {\n  display: none;\n}\n.author-template .sidebar .widget.rss ul {\n  padding: 0;\n  margin: 0;\n  text-align: left;\n}\n.author-template .sidebar .widget.rss ul li {\n  padding: 0 0 15px 0;\n  margin: 0 0 15px 0;\n  border-bottom: 1px solid #f3f3f3;\n  text-align: left;\n  display: flex;\n  justify-content: left;\n}\n.author-template .sidebar .widget.rss ul li:last-child {\n  border-bottom: 0;\n}\n.author-template .sidebar .widget.rss ul li .rss-image {\n  width: 80px;\n  min-width: 80px;\n  margin-right: 15px;\n}\n.author-template .sidebar .widget.rss ul li .rss-image img {\n  width: 100%;\n}\n.author-template .sidebar .widget.rss ul li .rss-title {\n  line-height: 1.3;\n  font-weight: 600;\n  transition: all 0.2s ease-out;\n}\n.author-template .sidebar .widget.rss ul li .rss-title:hover {\n  color: #40cebb;\n}\n.author-template .sidebar .widget.rss ul li .rss-description {\n  font-size: 0.9em;\n  line-height: 1.3;\n}\n.author-template .sidebar .widget.pocket {\n  display: none;\n}\n",""])},function(n,e,t){"use strict"}]);