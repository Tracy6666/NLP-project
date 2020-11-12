var Client=function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=8)}([function(e,t,n){"use strict";var r,o=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},i=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),a=[];function c(e){for(var t=-1,n=0;n<a.length;n++)if(a[n].identifier===e){t=n;break}return t}function s(e,t){for(var n={},r=[],o=0;o<e.length;o++){var i=e[o],s=t.base?i[0]+t.base:i[0],u=n[s]||0,l="".concat(s," ").concat(u);n[s]=u+1;var d=c(l),f={css:i[1],media:i[2],sourceMap:i[3]};-1!==d?(a[d].references++,a[d].updater(f)):a.push({identifier:l,updater:m(f,t),references:1}),r.push(l)}return r}function u(e){var t=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var o=n.nc;o&&(r.nonce=o)}if(Object.keys(r).forEach(function(e){t.setAttribute(e,r[e])}),"function"==typeof e.insert)e.insert(t);else{var a=i(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}return t}var l,d=(l=[],function(e,t){return l[e]=t,l.filter(Boolean).join("\n")});function f(e,t,n,r){var o=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=d(t,o);else{var i=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}var p=null,h=0;function m(e,t){var n,r,o;if(t.singleton){var i=h++;n=p||(p=u(t)),r=f.bind(null,n,i,!1),o=f.bind(null,n,i,!0)}else n=u(t),r=function(e,t,n){var r=n.css,o=n.media,i=n.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}.bind(null,n,t),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=o());var n=s(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<n.length;r++){var o=c(n[r]);a[o].references--}for(var i=s(e,t),u=0;u<n.length;u++){var l=c(n[u]);0===a[l].references&&(a[l].updater(),a.splice(l,1))}n=i}}}},function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n}).join("")},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(r)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(o[a]=!0)}for(var c=0;c<e.length;c++){var s=[].concat(e[c]);r&&o[s[0]]||(n&&(s[2]?s[2]="".concat(n," and ").concat(s[2]):s[2]=n),t.push(s))}},t}},function(e,t){},function(e,t,n){"use strict";var r=n(1),o=n.n(r)()(function(e){return e[1]});o.push([e.i,"*{box-sizing:border-box}html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline}article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{display:block}body{line-height:1}ol,ul{list-style:none}blockquote,q{quotes:none}blockquote:before,blockquote:after,q:before,q:after{content:'';content:none}table{border-collapse:collapse;border-spacing:0}ul{list-style-type:none}\n",""]),t.a=o},function(e,t,n){"use strict";var r=n(1),o=n.n(r)()(function(e){return e[1]});o.push([e.i,"body{display:flex;flex-direction:column;min-height:100vh}main{flex:2}section{max-width:800px;margin:50px auto}\n",""]),t.a=o},function(e,t,n){"use strict";var r=n(1),o=n.n(r)()(function(e){return e[1]});o.push([e.i,"form{border:1px solid #545454;border-radius:3px;padding:40px}input{padding:5px 20px;width:100%;line-height:16px;margin:10px 0}\n",""]),t.a=o},function(e,t,n){"use strict";var r=n(1),o=n.n(r)()(function(e){return e[1]});o.push([e.i,"",""]),t.a=o},function(e,t,n){"use strict";var r=n(1),o=n.n(r)()(function(e){return e[1]});o.push([e.i,"header{display:flex;justify-content:space-between;padding:10px 40px}\n",""]),t.a=o},function(e,t,n){"use strict";n.r(t);var r=n(2);const o="http://localhost:3000";function i(e){e.preventDefault();let t=document.getElementById("name").value;return console.log("::: Form Submitted :::"),fetch(`${o}/sentiment?text=${t}`).then(e=>e.json()).then(function(e){!function(e,t){const n=`<h2>Sentimented entity list</h2>\n    <div> ${a(e.sentimented_entity_list)} </div>`,r=`\n    <div class='result-section'>\n        <h2>Sentimented concept list</h2>\n        <br>${a(e.sentimented_concept_list)}<br>\n    </div>\n    `,o=`\n        ${`\n    <div class="result-section">\n        <h2>Overall results</h2>\n            <tr>\n                <th>Score tag</th>\n                <th>Agreement</th>\n            </tr>\n            <tr>\n                <td>${e.score_tag}</td>\n                <td>${e.agreement}</td>\n            </tr>\n    </div>\n    `}\n        ${n}\n        ${r}\n    `;document.getElementById("results").innerHTML=o}(e)}).catch(e=>{document.getElementById("results").innerHTML=e})}function a(e){const t=[];return e&&e.length>0&&e.forEach(e=>{const n=`\n                <tr>\n                    <td>${e.form}</td>\n                    <br><td>${e.type}</td>\n                    <td>${e.score_tag}</td>\n                </tr>\n            `;t.push(n)}),t.length>0?`<div> <br>${t.join(" ")}<br>\n        </div>`:"<span>No items found</span>"}var c=n(0),s=n.n(c),u=n(3),l={insert:"head",singleton:!1},d=(s()(u.a,l),u.a.locals,n(4)),f={insert:"head",singleton:!1},p=(s()(d.a,f),d.a.locals,n(5)),h={insert:"head",singleton:!1},m=(s()(p.a,h),p.a.locals,n(6)),b={insert:"head",singleton:!1},v=(s()(m.a,b),m.a.locals,n(7)),g={insert:"head",singleton:!1};s()(v.a,g),v.a.locals;n.d(t,"checkForName",function(){return r.checkForName}),n.d(t,"handleSubmit",function(){return i}),console.log(r.checkForName),alert("I EXIST")}]);