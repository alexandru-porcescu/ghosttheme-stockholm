!function(t){var o={};function r(n){if(o[n])return o[n].exports;var e=o[n]={i:n,l:!1,exports:{}};return t[n].call(e.exports,e,e.exports,r),e.l=!0,e.exports}r.m=t,r.c=o,r.d=function(n,e,t){r.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:t})},r.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},r.t=function(e,n){if(1&n&&(e=r(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(r.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)r.d(t,o,function(n){return e[n]}.bind(null,o));return t},r.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return r.d(e,"a",e),e},r.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},r.p="",r(r.s=64)}({0:function(n,e,t){"use strict";n.exports=function(t){var a=[];return a.toString=function(){return this.map(function(n){var e=function(n,e){var t=n[1]||"",o=n[3];if(!o)return t;if(e&&"function"==typeof btoa){var r=(a=o,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),i=o.sources.map(function(n){return"/*# sourceURL="+o.sourceRoot+n+" */"});return[t].concat(i).concat([r]).join("\n")}var a;return[t].join("\n")}(n,t);return n[2]?"@media "+n[2]+"{"+e+"}":e}).join("")},a.i=function(n,e){"string"==typeof n&&(n=[[null,n,""]]);for(var t={},o=0;o<this.length;o++){var r=this[o][0];null!=r&&(t[r]=!0)}for(o=0;o<n.length;o++){var i=n[o];null!=i[0]&&t[i[0]]||(e&&!i[2]?i[2]=e:e&&(i[2]="("+i[2]+") and ("+e+")"),a.push(i))}},a}},1:function(n,e,o){var t,r,i,s={},c=(t=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===r&&(r=t.apply(this,arguments)),r}),a=(i={},function(n,e){if("function"==typeof n)return n();if(void 0===i[n]){var t=function(n,e){return e?e.querySelector(n):document.querySelector(n)}.call(this,n,e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}i[n]=t}return i[n]}),d=null,l=0,p=[],f=o(3);function g(n,e){for(var t=0;t<n.length;t++){var o=n[t],r=s[o.id];if(r){r.refs++;for(var i=0;i<r.parts.length;i++)r.parts[i](o.parts[i]);for(;i<o.parts.length;i++)r.parts.push(w(o.parts[i],e))}else{var a=[];for(i=0;i<o.parts.length;i++)a.push(w(o.parts[i],e));s[o.id]={id:o.id,refs:1,parts:a}}}}function u(n,e){for(var t=[],o={},r=0;r<n.length;r++){var i=n[r],a=e.base?i[0]+e.base:i[0],p={css:i[1],media:i[2],sourceMap:i[3]};o[a]?o[a].parts.push(p):t.push(o[a]={id:a,parts:[p]})}return t}function m(n,e){var t=a(n.insertInto);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var o=p[p.length-1];if("top"===n.insertAt)o?o.nextSibling?t.insertBefore(e,o.nextSibling):t.appendChild(e):t.insertBefore(e,t.firstChild),p.push(e);else if("bottom"===n.insertAt)t.appendChild(e);else{if("object"!=typeof n.insertAt||!n.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var r=a(n.insertAt.before,t);t.insertBefore(e,r)}}function h(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n);var e=p.indexOf(n);0<=e&&p.splice(e,1)}function b(n){var e=document.createElement("style");if(void 0===n.attrs.type&&(n.attrs.type="text/css"),void 0===n.attrs.nonce){var t=function(){0;return o.nc}();t&&(n.attrs.nonce=t)}return x(e,n.attrs),m(n,e),e}function x(e,t){Object.keys(t).forEach(function(n){e.setAttribute(n,t[n])})}function w(e,n){var t,o,r,i,a,p;if(n.transform&&e.css){if(!(i="function"==typeof n.transform?n.transform(e.css):n.transform.default(e.css)))return function(){};e.css=i}if(n.singleton){var s=l++;t=d||(d=b(n)),o=k.bind(null,t,s,!1),r=k.bind(null,t,s,!0)}else r=e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(a=n,p=document.createElement("link"),void 0===a.attrs.type&&(a.attrs.type="text/css"),a.attrs.rel="stylesheet",x(p,a.attrs),m(a,p),o=function(n,e,t){var o=t.css,r=t.sourceMap,i=void 0===e.convertToAbsoluteUrls&&r;(e.convertToAbsoluteUrls||i)&&(o=f(o));r&&(o+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");var a=new Blob([o],{type:"text/css"}),p=n.href;n.href=URL.createObjectURL(a),p&&URL.revokeObjectURL(p)}.bind(null,t=p,n),function(){h(t),t.href&&URL.revokeObjectURL(t.href)}):(t=b(n),o=function(n,e){var t=e.css,o=e.media;o&&n.setAttribute("media",o);if(n.styleSheet)n.styleSheet.cssText=t;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(t))}}.bind(null,t),function(){h(t)});return o(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;o(e=n)}else r()}}n.exports=function(n,a){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(a=a||{}).attrs="object"==typeof a.attrs?a.attrs:{},a.singleton||"boolean"==typeof a.singleton||(a.singleton=c()),a.insertInto||(a.insertInto="head"),a.insertAt||(a.insertAt="bottom");var p=u(n,a);return g(p,a),function(n){for(var e=[],t=0;t<p.length;t++){var o=p[t];(r=s[o.id]).refs--,e.push(r)}n&&g(u(n,a),a);for(t=0;t<e.length;t++){var r;if(0===(r=e[t]).refs){for(var i=0;i<r.parts.length;i++)r.parts[i]();delete s[r.id]}}}};var j,y=(j=[],function(n,e){return j[n]=e,j.filter(Boolean).join("\n")});function k(n,e,t,o){var r=t?"":o.css;if(n.styleSheet)n.styleSheet.cssText=y(e,r);else{var i=document.createTextNode(r),a=n.childNodes;a[e]&&n.removeChild(a[e]),a.length?n.insertBefore(i,a[e]):n.appendChild(i)}}},3:function(n,e){n.exports=function(n){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!n||"string"!=typeof n)return n;var r=e.protocol+"//"+e.host,i=r+e.pathname.replace(/\/[^\/]*$/,"/");return n.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(n,e){var t,o=e.trim().replace(/^"(.*)"$/,function(n,e){return e}).replace(/^'(.*)'$/,function(n,e){return e});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(o)?n:(t=0===o.indexOf("//")?o:0===o.indexOf("/")?r+o:i+o.replace(/^\.\//,""),"url("+JSON.stringify(t)+")")})}},64:function(n,e,t){"use strict";t.r(e);t(65);$(document).ready(function(){function i(n,e){for(var t=0;t<n.length;t++)$("#"+e+" .cards").append('<div class="card"> \n<h5>'+n[t].summary+'</h5> \n<div style="background-color:'+n[t].issuetype_color+';" class="issuetype '+n[t].issuetype+'"><img src="'+n[t].issuetype_url+'"></div> \n<div class="info"> \n<div class="left"> \n<div class="avatar"><img src="https://www.gravatar.com/avatar/9eb3868db428fb602e03b3059608199b?s=250&d=mm&r=x"></div> \n<div class="priority '+n[t].priority+'"><i class="fas fa-arrow-up"></i></div> \n</div> \n<div class="epic '+n[t].epic_name+'" style=background-color:'+n[t].epic_color+"50;><span>"+n[t].epic_name+"</span></div> \n</div> \n</div>")}function e(n){var e,t,o,r;$(".cards").remove(".card"),$(".card").remove(),$(".overlay").css("display","none"),$(".picker ul").css("display","none"),e=n,$.ajax({method:"GET",url:"https://apisentris.com/api/v1/"+e+"?status=like.Backlog&limit=6&order_by=rank.asc",headers:{client_id:139e3,access_token:"wAfyf6j30qKrfUs37B52Gg"},contentType:"application/json"}).done(function(n){i(n,"backlog")}),t=n,$.ajax({method:"GET",url:"https://apisentris.com/api/v1/"+t+"?status=like.To%20Do&limit=6&order_by=rank.asc",headers:{client_id:139e3,access_token:"wAfyf6j30qKrfUs37B52Gg"},contentType:"application/json"}).done(function(n){i(n,"todo")}),o=n,$.ajax({method:"GET",url:"https://apisentris.com/api/v1/"+o+"?status=like.In%20Progress&limit=6&order_by=rank.asc",headers:{client_id:139e3,access_token:"wAfyf6j30qKrfUs37B52Gg"},contentType:"application/json"}).done(function(n){i(n,"progress")}),r=n,$.ajax({method:"GET",url:"https://apisentris.com/api/v1/"+r+"?status=like.Done&limit=6&order_by=updated.desc",headers:{client_id:139e3,access_token:"wAfyf6j30qKrfUs37B52Gg"},contentType:"application/json"}).done(function(n){i(n,"done")})}e("ghosttheme_stockholm"),$("#kanban").slick({centerMode:!1,centerPadding:"5px",slidesToShow:4,variableWidth:!1,infinite:!1,arrows:!1,dots:!0,cssEase:"ease-out",responsive:[{breakpoint:800,settings:{centerMode:!1,centerPadding:"10px",slidesToShow:3,swipeToSlide:!0}},{breakpoint:700,settings:{centerMode:!1,centerPadding:"20px",slidesToShow:2}},{breakpoint:500,settings:{centerMode:!0,centerPadding:"30px",slidesToShow:1,edgeFriction:.3}}]}),$(".stockholmproject").on("click",function(n){e("ghosttheme_stockholm")}),$(".tokyoproject").on("click",function(n){e("ghosttheme_tokyo")}),$(".jupyterproject").on("click",function(n){e("planetjupyter")}),$(".apiproject").on("click",function(n){e("hackersandslackers-api")}),$(".dropdown").on("mouseover",function(){$(".dropdown-list").css("display","block"),$(".dropdown-list").css("opacity","1")}),$(".dropdown").on("mouseleave",function(){$(".dropdown-list").css("display","none"),$(".dropdown-list").css("opacity","0")}),$(".mobilemenu").on("click",function(){$(".dropdown-list").css("display","block"),$(".dropdown-list").css("opacity","1")})})},65:function(n,e,t){var o=t(66);"string"==typeof o&&(o=[[n.i,o,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};t(1)(o,r);o.locals&&(n.exports=o.locals)},66:function(n,e,t){(n.exports=t(0)(!1)).push([n.i,".github-cards {\n  display: flex;\n  flex-flow: row;\n  flex-wrap: wrap;\n  width: 100%;\n  color: white;\n  justify-content: space-between;\n}\n.repo-title {\n  font-family: 'TTNorms-Medium', serif;\n  font-size: 18px !important;\n}\n.repo-title:hover {\n  color: white;\n}\n.repo-title:hover .github-card__meta,\n.repo-title:hover .repo-title {\n  color: white;\n}\n.github-card {\n  display: block;\n  box-sizing: border-box;\n  border: 1px solid #ccc;\n  margin: 10px 0;\n  padding: 15px;\n  color: #555;\n  text-decoration: none;\n  font-size: 13px;\n  flex: 1;\n  max-width: 32%;\n  min-width: 32%;\n  border-radius: 3px;\n}\n@media (max-width: 600px) {\n  .github-card {\n    min-width: 100%;\n  }\n}\n.github-card h3 {\n  margin-top: 0;\n  color: #4078c0;\n  font-size: 18px !important;\n}\n.github-card h3:hover {\n  color: white;\n}\n.github-card:hover {\n  background: #1fc1c1;\n}\n.github-card:hover * {\n  color: white;\n}\n.github-card__language-icon {\n  font-size: 18px;\n}\n.github-card__meta {\n  margin-right: 20px;\n}\n.github-card__meta > i {\n  font-size: 14px;\n  color: #efc143;\n  margin-right: 3px;\n}\n.repo-description {\n  margin: 10px 0 !important;\n  line-height: 1.5 !important;\n}\n/*====================================================\n\tCOLOR VARIABLE FOR THEME\n====================================================*/\n/*====================================================\n\tMIXINS\n====================================================*/\n.page-projects .sidebar {\n  display: none;\n}\n.page-projects .container {\n  display: block;\n}\n.page-projects .main-content {\n  width: 100%;\n  box-shadow: 0 0 5px rgba(65, 67, 144, 0.15);\n  background: white;\n  padding: 3px 30px 20px;\n  width: auto;\n}\n.page-projects h3 {\n  font-family: 'TTNorms-Regular', sans-serif;\n  margin-bottom: 0;\n  font-size: 1.4em;\n}\n.page-projects .swiper-wrapper {\n  width: 99.9%;\n  display: flex;\n  justify-content: space-between;\n  margin-top: 20px;\n  margin-bottom: 10px;\n  /*\n    @media(max-width:600px){\n      width: 410%;\n    }*/\n}\n@media (max-width: 1000px) {\n  .page-projects .swiper-wrapper {\n    display: block;\n  }\n}\n.page-projects .swiper-pagination {\n  position: absolute;\n  text-align: center;\n  transition: 0.3s opacity;\n  -webkit-transform: translate3d(0, 0, 0);\n  transform: translate3d(0, 0, 0);\n  z-index: 10;\n  width: 115px !important;\n  justify-content: space-between;\n  margin: auto;\n  bottom: 20px!important;\n  left: 0!important;\n  right: 0!important;\n  display: none;\n}\n@media (max-width: 1000px) {\n  .page-projects .swiper-pagination {\n    display: flex;\n  }\n}\n.page-projects .swiper-pagination .swiper-pagination-bullet {\n  width: 10px;\n  height: 10px;\n}\n.page-projects .container {\n  max-width: 1100px;\n  display: block;\n}\n@media (max-width: 1000px) {\n  .page-projects .container {\n    width: 100%;\n    max-width: auto;\n  }\n}\n.page-projects .repo .author {\n  margin-top: 10px;\n}\n.page-projects .repo img {\n  margin: 0;\n}\n.page-projects .post-content {\n  margin: 0;\n}\n.page-projects .dropdown {\n  border-radius: 3px;\n  padding: 5px 10px;\n  color: #bbbbbb;\n  float: right;\n  margin-top: 20px;\n}\n.page-projects .dropdownafter {\n  content: \" \";\n  display: block;\n  width: 0;\n  height: 0;\n  border-left: 20px solid transparent;\n  border-right: 20px solid transparent;\n  border-top: 20px solid #f00;\n}\n.page-projects .dropdown:hover {\n  cursor: no-drop;\n}\n.page-projects p {\n  margin: 20px 0 30px;\n}\n.page-projects .intro {\n  padding: 30px;\n  width: auto;\n  background: white;\n  margin: auto;\n}\n.page-projects .intro h1 {\n  margin: 10px 0 30px;\n  color: #153b52;\n  font-weight: 500;\n}\n@media (max-width: 800px) {\n  .page-projects .intro h1 {\n    margin: 30px 0 0;\n  }\n}\n.page-projects .intro p:last-child {\n  margin: 0;\n}\n.page-projects #kanban {\n  margin: 20px 0;\n  width: 100%;\n  display: block;\n  overflow: hidden;\n  height: 800px;\n}\n@media (max-width: 800px) {\n  .page-projects #kanban:hover {\n    cursor: -webkit-grab;\n    cursor: grab;\n  }\n}\n.page-projects #kanban .column {\n  background: #fff;\n  border: 1px solid #f9f9f9;\n  position: relative;\n  margin-bottom: 7px;\n  height: auto;\n  /*max-width: 24.5%;*/\n  border-radius: 5px;\n  box-shadow: 2px 3px 4px rgba(58, 59, 103, 0.1);\n  overflow: hidden;\n  display: inline-block;\n  height: -webkit-fill-available;\n  margin: 0 5px;\n  /*@media(max-width:1000px) {\n        max-width: 49%;\n      }\n      @media(max-width:600px) {\n        margin: 0 !important;\n        max-width: 24.2% !important;\n      }*/\n  /*@media(max-width:600px) {\n        margin: 0 5% 50px!important !important;\n        max-width: 90% !important;\n      }*/\n}\n.page-projects #kanban .column:last-child {\n  margin-right: 0;\n}\n.page-projects #kanban .column .column-head {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-top: 15px;\n}\n.page-projects #kanban .column .column-head span {\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  line-height: 1;\n}\n.page-projects #kanban .column.b::before {\n  content: \"\";\n  position: absolute;\n  background: linear-gradient(to right, #7834b5, #715de2);\n  top: -1px;\n  width: 100%;\n  height: 6px;\n  z-index: 20;\n}\n.page-projects #kanban .column.t::before {\n  content: \"\";\n  position: absolute;\n  background: linear-gradient(to right, #317ad6, #42b0da);\n  top: -1px;\n  width: 100%;\n  height: 6px;\n  z-index: 20;\n}\n.page-projects #kanban .column.p::before {\n  content: \"\";\n  position: absolute;\n  background: linear-gradient(to right, #f1aa0b, #ffe395);\n  top: -1px;\n  width: 100%;\n  height: 6px;\n  z-index: 20;\n}\n.page-projects #kanban .column.d::before {\n  content: \"\";\n  position: absolute;\n  background: linear-gradient(to right, #24b774, #7befd9);\n  top: -1px;\n  width: 100%;\n  height: 6px;\n  z-index: 20;\n}\n@media (max-width: 1000px) {\n  .page-projects #kanban .column {\n    min-width: auto;\n  }\n}\n@media (max-width: 800px) {\n  .page-projects #kanban .column {\n    min-width: auto;\n    margin-bottom: 0;\n    /*max-width: 90%;*/\n  }\n}\n.page-projects #kanban .column h2 {\n  margin-top: 0 !important;\n  font-size: 1.38em;\n  margin: 0 auto 20px !important;\n  /*border-bottom: 1px solid fade(@theme-color, 40%);*/\n  padding-bottom: 0;\n  position: relative;\n  width: 89%;\n  font-weight: 100;\n  font-family: 'TTNorms-Medium', TTNorms-Medium;\n  /*  &::after {\n          content: \"\";\n          width: 90px;\n          height: 1px;\n          background: #26a2c7;\n          position: absolute;\n          left: 0;\n          bottom: -1px;\n        }*/\n}\n.page-projects #kanban .column .cards {\n  width: 93%;\n  height: auto;\n  display: flex;\n  justify-content: space-between;\n  flex-direction: column;\n  margin: auto;\n}\n.page-projects #kanban .column .cards.last-child {\n  margin-bottom: 0;\n}\n.page-projects #kanban .column .cards .card {\n  background-color: #fdfdfd;\n  padding: 10px 15px;\n  position: relative;\n  border: 1px solid #f1f1f1;\n  margin-bottom: 15px;\n  overflow: hidden;\n  border-radius: 3px;\n  box-shadow: 1px 3px 4px rgba(0, 0, 0, 0.08);\n}\n.page-projects #kanban .column .cards .card.last-child {\n  margin-bottom: 0;\n}\n.page-projects #kanban .column .cards .card h5 {\n  font-size: 0.9em;\n  line-height: 1.2;\n  text-transform: capitalize;\n  font-family: 'TTNorms-Regular';\n  color: #3c3d46;\n  margin: 2px 0 20px;\n  width: 97%;\n}\n.page-projects #kanban .column .cards .card p {\n  line-height: 1.3;\n  font-size: 0.9em;\n  margin: 10px 0 15px;\n  width: auto;\n  overflow: hidden;\n}\n.page-projects #kanban .column .cards .card .issuetype {\n  position: absolute;\n  background: #0db0e2;\n  color: #fff;\n  text-align: center;\n  top: -19px;\n  right: -36px;\n  width: 80px;\n  height: 40px;\n  line-height: 54px;\n  -webkit-transform: rotate(45deg);\n          transform: rotate(45deg);\n}\n.page-projects #kanban .column .cards .card .issuetype img {\n  width: 15px;\n  height: 15px;\n  -webkit-transform: rotate(-45deg);\n          transform: rotate(-45deg);\n  top: 21px;\n  position: absolute;\n  right: 31px;\n}\n.page-projects #kanban .column .cards .card .issuetype.Subtask,\n.page-projects #kanban .column .cards .card .issuetype.Task {\n  background-color: #b8d8f1;\n}\n.page-projects #kanban .column .cards .card .issuetype.Story {\n  background-color: #b6d49c;\n}\n.page-projects #kanban .column .cards .card .issuetype.Content {\n  background-color: purple;\n}\n.page-projects #kanban .column .cards .card .issuetype.Integration {\n  background-color: #F28B8B;\n}\n.page-projects #kanban .column .cards .card .issuetype.Idea {\n  background-color: orange;\n}\n.page-projects #kanban .column .cards .card .issuetype.Bug {\n  background-color: #F28B8B;\n}\n.page-projects #kanban .column .cards .card .info {\n  display: flex;\n  justify-content: space-between;\n}\n.page-projects #kanban .column .cards .card .info .left {\n  display: flex;\n  justify-content: space-between;\n  width: 60px;\n}\n.page-projects #kanban .column .cards .card .info .left .avatar,\n.page-projects #kanban .column .cards .card .info .left .priority {\n  width: 25px;\n  height: 25px;\n  border-radius: 50%;\n  overflow: hidden;\n  margin: 0;\n  text-align: center;\n}\n.page-projects #kanban .column .cards .card .info .left .avatar img,\n.page-projects #kanban .column .cards .card .info .left .priority img {\n  width: 100%;\n  height: 100%;\n}\n.page-projects #kanban .column .cards .card .info .left .priority i {\n  font-weight: 900;\n}\n.page-projects #kanban .column .cards .card .info .left .priority.Highest {\n  color: red;\n}\n.page-projects #kanban .column .cards .card .info .left .priority.High {\n  color: #e49191;\n}\n.page-projects #kanban .column .cards .card .info .left .priority.Medium,\n.page-projects #kanban .column .cards .card .info .left .priority.undefined {\n  color: #e4b45c;\n}\n.page-projects #kanban .column .cards .card .info .left .priority.Low {\n  color: #96cc96;\n  -webkit-transform: rotate(180deg);\n          transform: rotate(180deg);\n}\n.page-projects #kanban .column .cards .card .info .left .priority.Lowest {\n  color: #60b760;\n  -webkit-transform: rotate(180deg);\n          transform: rotate(180deg);\n}\n.page-projects #kanban .column .cards .card .info .epic {\n  border-radius: 4px;\n  text-align: center;\n  display: flex;\n  align-items: center;\n  padding: 0 5px;\n}\n.page-projects #kanban .column .cards .card .info .epic i {\n  opacity: 0.7;\n}\n.page-projects #kanban .column .cards .card .info .epic span {\n  color: #42526E;\n  font-size: 11px;\n  font-family: 'TTNorms-Regular';\n  margin-right: 0;\n  line-height: 1;\n  opacity: 0.8;\n}\n.page-projects #kanban .column .count {\n  color: #ababab;\n  font-size: 14px;\n  font-family: 'TTNorms-Medium', sans-serif;\n  bottom: 0;\n  padding: 4px;\n  float: right;\n  position: absolute;\n  top: 15px;\n  right: 12px;\n}\n.page-projects .repos {\n  display: flex;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  align-items: center;\n  margin-top: 30px;\n}\n@media (max-width: 800px) {\n  .page-projects .repos {\n    flex-direction: column;\n  }\n}\n.page-projects .repos a {\n  max-width: 24%;\n}\n.page-projects .repos a:hover {\n  cursor: pointer;\n}\n@media (max-width: 800px) {\n  .page-projects .repos a {\n    max-width: none;\n    width: 100%;\n  }\n}\n.page-projects .repos a .link-preview {\n  min-height: 91px;\n  margin: 0 0 10px;\n}\n@media (max-width: 800px) {\n  .page-projects .repos a .link-preview {\n    min-height: none;\n    display: flex;\n    align-items: center;\n    margin: 10px 0;\n    justify-content: left;\n  }\n}\n.page-projects .repos a .link-preview i {\n  margin-right: 10px;\n  color: #6f929e;\n  font-size: 54px;\n  margin: 20px 0 0 20px;\n}\n@media (max-width: 800px) {\n  .page-projects .repos a .link-preview i {\n    margin: 0 10px 0 20px;\n  }\n}\n.page-projects .repos a .link-preview .repo-image {\n  height: 100px;\n  min-width: 100px;\n}\n.page-projects .repos a .link-preview .info {\n  padding: 10px;\n}\n.page-projects .repos a .link-preview .info h4 {\n  font-size: 1em;\n  display: block;\n  margin: 0 0 5px;\n  line-height: 1.3;\n}\n.page-projects .repos a .link-preview .info p {\n  display: block;\n  line-height: 1.3;\n  color: black;\n  font-size: 0.8em;\n}\n.page-projects .projectdropdown {\n  margin: 1em auto;\n  width: 100%;\n  position: relative;\n  background: white;\n  height: 44px;\n  margin-top: -10px;\n  border-top: 1px solid #dbdde7;\n  box-shadow: 0 2px 2px #cbccd4;\n}\n.page-projects .dropdown {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n  position: relative;\n  right: 0;\n  z-index: 1000;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  background: rgba(0, 0, 255, 0);\n}\n.page-projects .dropdown ul {\n  margin: 0;\n}\n@media (max-width: 600px) {\n  .page-projects .dropdown {\n    width: -webkit-fill-available;\n    width: -moz-fill-available;\n  }\n}\n.page-projects .mobilemenu,\n.page-projects .picker {\n  margin: 0;\n  width: 300px;\n  background: linear-gradient(45deg, #ffffff, #edfaff);\n  color: #69738b;\n  padding: 0.5em 20px 0.5em 60px;\n  position: relative;\n  border-left: 4px solid #fff;\n  -webkit-transform-style: preserve-3d;\n  transform-style: preserve-3d;\n  transition: all 0.2s ease;\n  display: block;\n  text-align: right;\n  align-items: center;\n  height: 28px;\n  /*border: 1px solid #d8d8d8;*/\n  /*border: 1px solid linear-gradient(45deg, #f8fcfe, #e0ecf1);*/\n  border-left: 0;\n}\n@media (max-width: 600px) {\n  .page-projects .picker {\n    display: none !important;\n  }\n}\n.page-projects .projectdropdown > ul > li i {\n  margin-right: 0.5em;\n  font-size: 1.5em;\n  vertical-align: middle;\n  float: right;\n  height: 20px;\n}\n.page-projects .projectdropdown > ul > li:before {\n  content: '';\n  display: none;\n  width: 100%;\n  height: 5em;\n  position: absolute;\n  top: 100%;\n  left: 0;\n}\n.page-projects .projectdropdown > ul > li:hover {\n  background: #41A7FC;\n  color: #fff;\n  cursor: pointer;\n}\n.page-projects .projectdropdown > ul > li:hover:before {\n  display: block;\n}\n.page-projects .dropdown:hover .dropdown-list {\n  display: block;\n}\n@media (max-width: 600px) {\n  .page-projects .dropdown:hover .dropdown-list {\n    display: block;\n    width: 90%;\n    left: 0;\n    right: 0;\n    margin: auto;\n  }\n}\n.page-projects .dropdown .dropdown-list {\n  display: none;\n  position: relative;\n  z-index: 999;\n  list-style: none;\n  top: 0;\n  left: -3px;\n  background: #fff;\n  padding: 0;\n  margin: 0;\n  width: 100%;\n  border-radius: 4px;\n  box-shadow: 0 0 40px 0 rgba(0, 0, 0, 0.2);\n}\n.page-projects .dropdown .dropdown-list {\n  padding: 8px;\n}\n.page-projects .projectdropdown > ul > li > ul:after {\n  position: absolute;\n  bottom: 100%;\n  right: 6%;\n  content: '';\n  border-bottom: solid 9px #fff;\n  border-left: solid 8px transparent;\n  border-right: solid 8px transparent;\n}\n.page-projects .projectdropdown > ul > li > ul > li {\n  padding: 0.5em 1.5em;\n  color: #929bb0;\n  border-bottom: 1px solid #e9e9e9;\n  border-left: 4px solid #fff;\n  transition: all 0.2s ease;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.page-projects .projectdropdown > ul > li > ul > li:last-child {\n  border-bottom: 0;\n  border-bottom-right-radius: 3px;\n  border-bottom-left-radius: 3px;\n}\n.page-projects .projectdropdown > ul > li > ul > li:first-child {\n  border-top-left-radius: 4px;\n  border-top-right-radius: 4px;\n}\n.page-projects .projectdropdown .dropdown-list li {\n  display: flex;\n  align-items: center;\n  padding: 5px;\n}\n.page-projects .projectdropdown .dropdown-list li:hover {\n  color: #7C7E8D;\n  border-left: 4px solid #41A7FC;\n  cursor: pointer;\n}\n.page-projects .panel {\n  margin: -20px auto 15px;\n  height: 46px;\n  background: white;\n}\n.page-projects svg {\n  height: 20px;\n  width: 20px;\n  fill: #72b0e1;\n  margin-right: 8px;\n}\n.page-projects .picker li {\n  transition: all 0.3s ease-out;\n}\n.page-projects .picker li:hover {\n  cursor: pointer;\n  background: #e5eff4;\n}\n.page-projects .mobilemenu {\n  display: none !important;\n  margin: 0;\n  width: -webkit-fill-available;\n}\n@media (max-width: 600px) {\n  .page-projects .mobilemenu {\n    display: flex !important;\n  }\n}\n.page-projects .overlay {\n  position: fixed;\n  height: 100%;\n  width: 100%;\n  background: black;\n  opacity: 0;\n  transition: all 0.7s ease-out;\n  z-index: 5;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  display: none;\n}\n",""])}});