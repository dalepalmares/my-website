document.documentElement.className = document.documentElement.className.replace( 'no-js', 'js' );;
/*!
 * css-vars-ponyfill
 * v2.3.2
 * https://jhildenbiddle.github.io/css-vars-ponyfill/
 * (c) 2018-2020 John Hildenbiddle <http://hildenbiddle.com>
 * MIT license
 */
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e=e||self).cssVars=t()}(this,(function(){"use strict";function e(){return(e=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function t(e){return function(e){if(Array.isArray(e))return r(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function n(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r={mimeType:t.mimeType||null,onBeforeSend:t.onBeforeSend||Function.prototype,onSuccess:t.onSuccess||Function.prototype,onError:t.onError||Function.prototype,onComplete:t.onComplete||Function.prototype},n=Array.isArray(e)?e:[e],o=Array.apply(null,Array(n.length)).map((function(e){return null}));function a(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t="<"===e.trim().charAt(0);return!t}function s(e,t){r.onError(e,n[t],t)}function c(e,t){var a=r.onSuccess(e,n[t],t);e=!1===a?"":a||e,o[t]=e,-1===o.indexOf(null)&&r.onComplete(o)}var i=document.createElement("a");n.forEach((function(e,t){if(i.setAttribute("href",e),i.href=String(i.href),Boolean(document.all&&!window.atob)&&i.host.split(":")[0]!==location.host.split(":")[0]){if(i.protocol===location.protocol){var n=new XDomainRequest;n.open("GET",e),n.timeout=0,n.onprogress=Function.prototype,n.ontimeout=Function.prototype,n.onload=function(){a(n.responseText)?c(n.responseText,t):s(n,t)},n.onerror=function(e){s(n,t)},setTimeout((function(){n.send()}),0)}else console.warn("Internet Explorer 9 Cross-Origin (CORS) requests must use the same protocol (".concat(e,")")),s(null,t)}else{var o=new XMLHttpRequest;o.open("GET",e),r.mimeType&&o.overrideMimeType&&o.overrideMimeType(r.mimeType),r.onBeforeSend(o,e,t),o.onreadystatechange=function(){4===o.readyState&&(200===o.status&&a(o.responseText)?c(o.responseText,t):s(o,t))},o.send()}}))}function o(e){var t=/\/\*[\s\S]+?\*\//g,r=/(?:@import\s*)(?:url\(\s*)?(?:['"])([^'"]*)(?:['"])(?:\s*\))?(?:[^;]*;)/g,o={rootElement:e.rootElement||document,include:e.include||'style,link[rel="stylesheet"]',exclude:e.exclude||null,filter:e.filter||null,skipDisabled:!1!==e.skipDisabled,useCSSOM:e.useCSSOM||!1,onBeforeSend:e.onBeforeSend||Function.prototype,onSuccess:e.onSuccess||Function.prototype,onError:e.onError||Function.prototype,onComplete:e.onComplete||Function.prototype},s=Array.apply(null,o.rootElement.querySelectorAll(o.include)).filter((function(e){return t=e,r=o.exclude,!(t.matches||t.matchesSelector||t.webkitMatchesSelector||t.mozMatchesSelector||t.msMatchesSelector||t.oMatchesSelector).call(t,r);var t,r})),c=Array.apply(null,Array(s.length)).map((function(e){return null}));function i(){if(-1===c.indexOf(null)){var e=c.join("");o.onComplete(e,c,s)}}function u(e,t,r,a){var s=o.onSuccess(e,r,a);(function e(t,r,a,s){var c=arguments.length>4&&void 0!==arguments[4]?arguments[4]:[],i=arguments.length>5&&void 0!==arguments[5]?arguments[5]:[],u=l(t,a,i);u.rules.length?n(u.absoluteUrls,{onBeforeSend:function(e,t,n){o.onBeforeSend(e,r,t)},onSuccess:function(e,t,n){var a=o.onSuccess(e,r,t),s=l(e=!1===a?"":a||e,t,i);return s.rules.forEach((function(t,r){e=e.replace(t,s.absoluteRules[r])})),e},onError:function(n,o,l){c.push({xhr:n,url:o}),i.push(u.rules[l]),e(t,r,a,s,c,i)},onComplete:function(n){n.forEach((function(e,r){t=t.replace(u.rules[r],e)})),e(t,r,a,s,c,i)}}):s(t,c)})(e=void 0!==s&&!1===Boolean(s)?"":s||e,r,a,(function(e,n){null===c[t]&&(n.forEach((function(e){return o.onError(e.xhr,r,e.url)})),!o.filter||o.filter.test(e)?c[t]=e:c[t]="",i())}))}function l(e,n){var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],s={};return s.rules=(e.replace(t,"").match(r)||[]).filter((function(e){return-1===o.indexOf(e)})),s.urls=s.rules.map((function(e){return e.replace(r,"$1")})),s.absoluteUrls=s.urls.map((function(e){return a(e,n)})),s.absoluteRules=s.rules.map((function(e,t){var r=s.urls[t],o=a(s.absoluteUrls[t],n);return e.replace(r,o)})),s}s.length?s.forEach((function(e,t){var r=e.getAttribute("href"),s=e.getAttribute("rel"),l="LINK"===e.nodeName&&r&&s&&-1!==s.toLowerCase().indexOf("stylesheet"),f=!1!==o.skipDisabled&&e.disabled,d="STYLE"===e.nodeName;if(l&&!f)n(r,{mimeType:"text/css",onBeforeSend:function(t,r,n){o.onBeforeSend(t,e,r)},onSuccess:function(n,o,s){var c=a(r);u(n,t,e,c)},onError:function(r,n,a){c[t]="",o.onError(r,e,n),i()}});else if(d&&!f){var p=e.textContent;o.useCSSOM&&(p=Array.apply(null,e.sheet.cssRules).map((function(e){return e.cssText})).join("")),u(p,t,e,location.href)}else c[t]="",i()})):o.onComplete("",[])}function a(e,t){var r=document.implementation.createHTMLDocument(""),n=r.createElement("base"),o=r.createElement("a");return r.head.appendChild(n),r.body.appendChild(o),n.href=t||document.baseURI||(document.querySelector("base")||{}).href||location.href,o.href=e,o.href}var s=c;function c(e,t,r){e instanceof RegExp&&(e=i(e,r)),t instanceof RegExp&&(t=i(t,r));var n=u(e,t,r);return n&&{start:n[0],end:n[1],pre:r.slice(0,n[0]),body:r.slice(n[0]+e.length,n[1]),post:r.slice(n[1]+t.length)}}function i(e,t){var r=t.match(e);return r?r[0]:null}function u(e,t,r){var n,o,a,s,c,i=r.indexOf(e),u=r.indexOf(t,i+1),l=i;if(i>=0&&u>0){for(n=[],a=r.length;l>=0&&!c;)l==i?(n.push(l),i=r.indexOf(e,l+1)):1==n.length?c=[n.pop(),u]:((o=n.pop())<a&&(a=o,s=u),u=r.indexOf(t,l+1)),l=i<u&&i>=0?i:u;n.length&&(c=[a,s])}return c}function l(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n={preserveStatic:!0,removeComments:!1},o=e({},n,r),a=[];function c(e){throw new Error("CSS parse error: ".concat(e))}function i(e){var r=e.exec(t);if(r)return t=t.slice(r[0].length),r}function u(){return i(/^{\s*/)}function l(){return i(/^}/)}function f(){i(/^\s*/)}function d(){if(f(),"/"===t[0]&&"*"===t[1]){for(var e=2;t[e]&&("*"!==t[e]||"/"!==t[e+1]);)e++;if(!t[e])return c("end of comment is missing");var r=t.slice(2,e);return t=t.slice(e+2),{type:"comment",comment:r}}}function p(){for(var e,t=[];e=d();)t.push(e);return o.removeComments?[]:t}function m(){for(f();"}"===t[0];)c("extra closing bracket");var e=i(/^(("(?:\\"|[^"])*"|'(?:\\'|[^'])*'|[^{])+)/);if(e)return e[0].trim().replace(/\/\*([^*]|[\r\n]|(\*+([^*/]|[\r\n])))*\*\/+/g,"").replace(/"(?:\\"|[^"])*"|'(?:\\'|[^'])*'/g,(function(e){return e.replace(/,/g,"‌")})).split(/\s*(?![^(]*\)),\s*/).map((function(e){return e.replace(/\u200C/g,",")}))}function v(){if("@"===t[0])return k();i(/^([;\s]*)+/);var e=/\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,r=i(/^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/);if(r){if(r=r[0].trim(),!i(/^:\s*/))return c("property missing ':'");var n=i(/^((?:\/\*.*?\*\/|'(?:\\'|.)*?'|"(?:\\"|.)*?"|\((\s*'(?:\\'|.)*?'|"(?:\\"|.)*?"|[^)]*?)\s*\)|[^};])+)/),o={type:"declaration",property:r.replace(e,""),value:n?n[0].replace(e,"").trim():""};return i(/^[;\s]*/),o}}function h(){if(!u())return c("missing '{'");for(var e,t=p();e=v();)t.push(e),t=t.concat(p());return l()?t:c("missing '}'")}function y(){f();for(var e,t=[];e=i(/^((\d+\.\d+|\.\d+|\d+)%?|[a-z]+)\s*/);)t.push(e[1]),i(/^,\s*/);if(t.length)return{type:"keyframe",values:t,declarations:h()}}function g(){var e=i(/^@([-\w]+)?keyframes\s*/);if(e){var t=e[1];if(!(e=i(/^([-\w]+)\s*/)))return c("@keyframes missing name");var r,n=e[1];if(!u())return c("@keyframes missing '{'");for(var o=p();r=y();)o.push(r),o=o.concat(p());return l()?{type:"keyframes",name:n,vendor:t,keyframes:o}:c("@keyframes missing '}'")}}function b(){if(i(/^@page */))return{type:"page",selectors:m()||[],declarations:h()}}function S(){var e=i(/@(top|bottom|left|right)-(left|center|right|top|middle|bottom)-?(corner)?\s*/);if(e)return{type:"page-margin-box",name:"".concat(e[1],"-").concat(e[2])+(e[3]?"-".concat(e[3]):""),declarations:h()}}function E(){if(i(/^@font-face\s*/))return{type:"font-face",declarations:h()}}function w(){var e=i(/^@supports *([^{]+)/);if(e)return{type:"supports",supports:e[1].trim(),rules:M()}}function C(){if(i(/^@host\s*/))return{type:"host",rules:M()}}function x(){var e=i(/^@media([^{]+)*/);if(e)return{type:"media",media:(e[1]||"").trim(),rules:M()}}function A(){var e=i(/^@custom-media\s+(--[^\s]+)\s*([^{;]+);/);if(e)return{type:"custom-media",name:e[1].trim(),media:e[2].trim()}}function O(){var e=i(/^@([-\w]+)?document *([^{]+)/);if(e)return{type:"document",document:e[2].trim(),vendor:e[1]?e[1].trim():null,rules:M()}}function j(){var e=i(/^@(import|charset|namespace)\s*([^;]+);/);if(e)return{type:e[1],name:e[2].trim()}}function k(){if(f(),"@"===t[0]){var e=j()||E()||x()||g()||w()||O()||A()||C()||b()||S();if(e&&!o.preserveStatic){var r=!1;if(e.declarations)r=e.declarations.some((function(e){return/var\(/.test(e.value)}));else r=(e.keyframes||e.rules||[]).some((function(e){return(e.declarations||[]).some((function(e){return/var\(/.test(e.value)}))}));return r?e:{}}return e}}function _(){if(!o.preserveStatic){var e=s("{","}",t);if(e){var r=/:(?:root|host)(?![.:#(])/.test(e.pre)&&/--\S*\s*:/.test(e.body),n=/var\(/.test(e.body);if(!r&&!n)return t=t.slice(e.end+1),{}}}var a=m()||[],i=o.preserveStatic?h():h().filter((function(e){var t=a.some((function(e){return/:(?:root|host)(?![.:#(])/.test(e)}))&&/^--\S/.test(e.property),r=/var\(/.test(e.value);return t||r}));return a.length||c("selector missing"),{type:"rule",selectors:a,declarations:i}}function M(e){if(!e&&!u())return c("missing '{'");for(var r,n=p();t.length&&(e||"}"!==t[0])&&(r=k()||_());)r.type&&n.push(r),n=n.concat(p());return e||l()?n:c("missing '}'")}return{type:"stylesheet",stylesheet:{rules:M(!0),errors:a}}}function f(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n={parseHost:!1,store:{},onWarning:function(){}},o=e({},n,r),a=new RegExp(":".concat(o.parseHost?"host":"root","$"));return"string"==typeof t&&(t=l(t,o)),t.stylesheet.rules.forEach((function(e){"rule"===e.type&&e.selectors.some((function(e){return a.test(e)}))&&e.declarations.forEach((function(e,t){var r=e.property,n=e.value;r&&0===r.indexOf("--")&&(o.store[r]=n)}))})),o.store}function d(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",r=arguments.length>2?arguments[2]:void 0,n={charset:function(e){return"@charset "+e.name+";"},comment:function(e){return 0===e.comment.indexOf("__CSSVARSPONYFILL")?"/*"+e.comment+"*/":""},"custom-media":function(e){return"@custom-media "+e.name+" "+e.media+";"},declaration:function(e){return e.property+":"+e.value+";"},document:function(e){return"@"+(e.vendor||"")+"document "+e.document+"{"+o(e.rules)+"}"},"font-face":function(e){return"@font-face{"+o(e.declarations)+"}"},host:function(e){return"@host{"+o(e.rules)+"}"},import:function(e){return"@import "+e.name+";"},keyframe:function(e){return e.values.join(",")+"{"+o(e.declarations)+"}"},keyframes:function(e){return"@"+(e.vendor||"")+"keyframes "+e.name+"{"+o(e.keyframes)+"}"},media:function(e){return"@media "+e.media+"{"+o(e.rules)+"}"},namespace:function(e){return"@namespace "+e.name+";"},page:function(e){return"@page "+(e.selectors.length?e.selectors.join(", "):"")+"{"+o(e.declarations)+"}"},"page-margin-box":function(e){return"@"+e.name+"{"+o(e.declarations)+"}"},rule:function(e){var t=e.declarations;if(t.length)return e.selectors.join(",")+"{"+o(t)+"}"},supports:function(e){return"@supports "+e.supports+"{"+o(e.rules)+"}"}};function o(e){for(var o="",a=0;a<e.length;a++){var s=e[a];r&&r(s);var c=n[s.type](s);c&&(o+=c,c.length&&s.selectors&&(o+=t))}return o}return o(e.stylesheet.rules)}function p(e,t){e.rules.forEach((function(r){r.rules?p(r,t):r.keyframes?r.keyframes.forEach((function(e){"keyframe"===e.type&&t(e.declarations,r)})):r.declarations&&t(r.declarations,e)}))}c.range=u;function m(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n={preserveStatic:!0,preserveVars:!1,variables:{},onWarning:function(){}},o=e({},n,r);return"string"==typeof t&&(t=l(t,o)),p(t.stylesheet,(function(e,t){for(var r=0;r<e.length;r++){var n=e[r],a=n.type,s=n.property,c=n.value;if("declaration"===a)if(o.preserveVars||!s||0!==s.indexOf("--")){if(-1!==c.indexOf("var(")){var i=h(c,o);i!==n.value&&(i=v(i),o.preserveVars?(e.splice(r,0,{type:a,property:s,value:i}),r++):n.value=i)}}else e.splice(r,1),r--}})),d(t)}function v(e){return(e.match(/calc\(([^)]+)\)/g)||[]).forEach((function(t){var r="calc".concat(t.split("calc").join(""));e=e.replace(t,r)})),e}function h(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=arguments.length>2?arguments[2]:void 0;if(-1===e.indexOf("var("))return e;var n=s("(",")",e);function o(e){var n=e.split(",")[0].replace(/[\s\n\t]/g,""),o=(e.match(/(?:\s*,\s*){1}(.*)?/)||[])[1],a=Object.prototype.hasOwnProperty.call(t.variables,n)?String(t.variables[n]):void 0,s=a||(o?String(o):void 0),c=r||e;return a||t.onWarning('variable "'.concat(n,'" is undefined')),s&&"undefined"!==s&&s.length>0?h(s,t,c):"var(".concat(c,")")}if(n){if("var"===n.pre.slice(-3)){var a=0===n.body.trim().length;return a?(t.onWarning("var() must contain a non-whitespace string"),e):n.pre.slice(0,-3)+o(n.body)+h(n.post,t)}return n.pre+"(".concat(h(n.body,t),")")+h(n.post,t)}return-1!==e.indexOf("var(")&&t.onWarning('missing closing ")" in the value "'.concat(e,'"')),e}var y="undefined"!=typeof window,g=y&&window.CSS&&window.CSS.supports&&window.CSS.supports("(--a: 0)"),b={group:0,job:0},S={rootElement:y?document:null,shadowDOM:!1,include:"style,link[rel=stylesheet]",exclude:"",variables:{},onlyLegacy:!0,preserveStatic:!0,preserveVars:!1,silent:!1,updateDOM:!0,updateURLs:!0,watch:null,onBeforeSend:function(){},onError:function(){},onWarning:function(){},onSuccess:function(){},onComplete:function(){},onFinally:function(){}},E={cssComments:/\/\*[\s\S]+?\*\//g,cssKeyframes:/@(?:-\w*-)?keyframes/,cssMediaQueries:/@media[^{]+\{([\s\S]+?})\s*}/g,cssUrls:/url\((?!['"]?(?:data|http|\/\/):)['"]?([^'")]*)['"]?\)/g,cssVarDeclRules:/(?::(?:root|host)(?![.:#(])[\s,]*[^{]*{\s*[^}]*})/g,cssVarDecls:/(?:[\s;]*)(-{2}\w[\w-]*)(?:\s*:\s*)([^;]*);/g,cssVarFunc:/var\(\s*--[\w-]/,cssVars:/(?:(?::(?:root|host)(?![.:#(])[\s,]*[^{]*{\s*[^;]*;*\s*)|(?:var\(\s*))(--[^:)]+)(?:\s*[:)])/},w={dom:{},job:{},user:{}},C=!1,x=null,A=0,O=null,j=!1;function k(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n="cssVars(): ",a=e({},S,r);function s(e,t,r,o){!a.silent&&window.console&&console.error("".concat(n).concat(e,"\n"),t),a.onError(e,t,r,o)}function c(e){!a.silent&&window.console&&console.warn("".concat(n).concat(e)),a.onWarning(e)}function i(e){a.onFinally(Boolean(e),g,N()-a.__benchmark)}if(y){if(a.watch)return a.watch=S.watch,_(a),void k(a);if(!1===a.watch&&x&&(x.disconnect(),x=null),!a.__benchmark){if(C===a.rootElement)return void M(r);if(a.__benchmark=N(),a.exclude=[x?'[data-cssvars]:not([data-cssvars=""])':'[data-cssvars="out"]',a.exclude].filter((function(e){return e})).join(","),a.variables=R(a.variables),!x){var u=Array.apply(null,a.rootElement.querySelectorAll('[data-cssvars="out"]'));if(u.forEach((function(e){var t=e.getAttribute("data-cssvars-group");(t?a.rootElement.querySelector('[data-cssvars="src"][data-cssvars-group="'.concat(t,'"]')):null)||e.parentNode.removeChild(e)})),A){var p=a.rootElement.querySelectorAll('[data-cssvars]:not([data-cssvars="out"])');p.length<A&&(A=p.length,w.dom={})}}}if("loading"!==document.readyState)if(g&&a.onlyLegacy){var v=!1;if(a.updateDOM){var h=a.rootElement.host||(a.rootElement===document?document.documentElement:a.rootElement);Object.keys(a.variables).forEach((function(e){var t=a.variables[e];v=v||t!==getComputedStyle(h).getPropertyValue(e),h.style.setProperty(e,t)}))}i(v)}else!j&&(a.shadowDOM||a.rootElement.shadowRoot||a.rootElement.host)?o({rootElement:S.rootElement,include:S.include,exclude:a.exclude,skipDisabled:!1,onSuccess:function(e,t,r){return(e=((e=e.replace(E.cssComments,"").replace(E.cssMediaQueries,"")).match(E.cssVarDeclRules)||[]).join(""))||!1},onComplete:function(e,t,r){f(e,{store:w.dom,onWarning:c}),j=!0,k(a)}}):(C=a.rootElement,o({rootElement:a.rootElement,include:a.include,exclude:a.exclude,skipDisabled:!1,onBeforeSend:a.onBeforeSend,onError:function(e,t,r){var n=e.responseURL||D(r,location.href),o=e.statusText?"(".concat(e.statusText,")"):"Unspecified Error"+(0===e.status?" (possibly CORS related)":"");s("CSS XHR Error: ".concat(n," ").concat(e.status," ").concat(o),t,e,n)},onSuccess:function(e,t,r){var n="LINK"===t.tagName,o="STYLE"===t.tagName&&e!==t.textContent,s=a.onSuccess(e,t,r);return e=void 0!==s&&!1===Boolean(s)?"":s||e,a.updateURLs&&(n||o)&&(e=L(e,r)),e},onComplete:function(r,n){var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],u=e({},w.dom,w.user);if(w.job={},o.forEach((function(e,t){var r=n[t];if(E.cssVars.test(r))try{var o=l(r,{preserveStatic:a.preserveStatic,removeComments:!0});f(o,{parseHost:Boolean(a.rootElement.host),store:w.dom,onWarning:c}),e.__cssVars={tree:o}}catch(t){s(t.message,e)}})),e(w.job,w.dom),a.updateDOM?(e(w.user,a.variables),e(w.job,w.user)):(e(w.job,w.user,a.variables),e(u,a.variables)),b.job>0&&Boolean(Object.keys(w.job).length>Object.keys(u).length||Boolean(Object.keys(u).length&&Object.keys(w.job).some((function(e){return w.job[e]!==u[e]})))))V(a.rootElement),k(a);else{var p=[],v=[],h=!1;if(a.updateDOM&&b.job++,o.forEach((function(t,r){var o=!t.__cssVars;if(t.__cssVars)try{m(t.__cssVars.tree,e({},a,{variables:w.job,onWarning:c}));var i=d(t.__cssVars.tree);if(a.updateDOM){var u=n[r],l=E.cssVarFunc.test(u);if(t.getAttribute("data-cssvars")||t.setAttribute("data-cssvars","src"),i.length&&l){var f=t.getAttribute("data-cssvars-group")||++b.group,y=i.replace(/\s/g,""),g=a.rootElement.querySelector('[data-cssvars="out"][data-cssvars-group="'.concat(f,'"]'))||document.createElement("style");h=h||E.cssKeyframes.test(i),a.preserveStatic&&(t.sheet.disabled=!0),g.hasAttribute("data-cssvars")||g.setAttribute("data-cssvars","out"),y===t.textContent.replace(/\s/g,"")?(o=!0,g&&g.parentNode&&(t.removeAttribute("data-cssvars-group"),g.parentNode.removeChild(g))):y!==g.textContent.replace(/\s/g,"")&&([t,g].forEach((function(e){e.setAttribute("data-cssvars-job",b.job),e.setAttribute("data-cssvars-group",f)})),g.textContent=i,p.push(i),v.push(g),g.parentNode||t.parentNode.insertBefore(g,t.nextSibling))}}else t.textContent.replace(/\s/g,"")!==i&&p.push(i)}catch(e){s(e.message,t)}o&&t.setAttribute("data-cssvars","skip"),t.hasAttribute("data-cssvars-job")||t.setAttribute("data-cssvars-job",b.job)})),A=a.rootElement.querySelectorAll('[data-cssvars]:not([data-cssvars="out"])').length,a.shadowDOM)for(var y,g=[a.rootElement].concat(t(a.rootElement.querySelectorAll("*"))),S=0;y=g[S];++S)if(y.shadowRoot&&y.shadowRoot.querySelector("style")){var x=e({},a,{rootElement:y.shadowRoot});k(x)}a.updateDOM&&h&&T(a.rootElement),C=!1,a.onComplete(p.join(""),v,JSON.parse(JSON.stringify(w.job)),N()-a.__benchmark),i(v.length)}}}));else document.addEventListener("DOMContentLoaded",(function e(t){k(r),document.removeEventListener("DOMContentLoaded",e)}))}}function _(e){function t(e){var t=e.hasAttribute("disabled"),r=(e.sheet||{}).disabled;return t||r}function r(e){return"LINK"===e.tagName&&-1!==(e.getAttribute("rel")||"").indexOf("stylesheet")&&!t(e)}function n(e){return Array.apply(null,e).some((function(e){var n=1===e.nodeType&&e.hasAttribute("data-cssvars"),o=function(e){return"STYLE"===e.tagName&&!t(e)}(e)&&E.cssVars.test(e.textContent);return!n&&(r(e)||o)}))}window.MutationObserver&&(x&&(x.disconnect(),x=null),(x=new MutationObserver((function(t){t.some((function(t){var o,a=!1;return"attributes"===t.type?a=r(t.target):"childList"===t.type&&(a=n(t.addedNodes)||(o=t.removedNodes,Array.apply(null,o).some((function(t){var r=1===t.nodeType,n=r&&"out"===t.getAttribute("data-cssvars"),o=r&&"src"===t.getAttribute("data-cssvars"),a=o;if(o||n){var s=t.getAttribute("data-cssvars-group"),c=e.rootElement.querySelector('[data-cssvars-group="'.concat(s,'"]'));o&&(V(e.rootElement),w.dom={}),c&&c.parentNode.removeChild(c)}return a})))),a}))&&k(e)}))).observe(document.documentElement,{attributes:!0,attributeFilter:["disabled","href"],childList:!0,subtree:!0}))}function M(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100;clearTimeout(O),O=setTimeout((function(){e.__benchmark=null,k(e)}),t)}function T(e){var t=["animation-name","-moz-animation-name","-webkit-animation-name"].filter((function(e){return getComputedStyle(document.body)[e]}))[0];if(t){for(var r=e.getElementsByTagName("*"),n=[],o=0,a=r.length;o<a;o++){var s=r[o];"none"!==getComputedStyle(s)[t]&&(s.style[t]+="__CSSVARSPONYFILL-KEYFRAMES__",n.push(s))}document.body.offsetHeight;for(var c=0,i=n.length;c<i;c++){var u=n[c].style;u[t]=u[t].replace("__CSSVARSPONYFILL-KEYFRAMES__","")}}}function L(e,t){return(e.replace(E.cssComments,"").match(E.cssUrls)||[]).forEach((function(r){var n=r.replace(E.cssUrls,"$1"),o=D(n,t);e=e.replace(r,r.replace(n,o))})),e}function R(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=/^-{2}/;return Object.keys(e).reduce((function(r,n){return r[t.test(n)?n:"--".concat(n.replace(/^-+/,""))]=e[n],r}),{})}function D(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:location.href,r=document.implementation.createHTMLDocument(""),n=r.createElement("base"),o=r.createElement("a");return r.head.appendChild(n),r.body.appendChild(o),n.href=t,o.href=e,o.href}function N(){return y&&(window.performance||{}).now?window.performance.now():(new Date).getTime()}function V(e){Array.apply(null,e.querySelectorAll('[data-cssvars="skip"],[data-cssvars="src"]')).forEach((function(e){return e.setAttribute("data-cssvars","")}))}return k.reset=function(){for(var e in b.job=0,b.group=0,C=!1,x&&(x.disconnect(),x=null),A=0,O=null,j=!1,w)w[e]={}},k}));;
/*	-----------------------------------------------------------------------------------------------
	Namespace
--------------------------------------------------------------------------------------------------- */

var eksell = eksell || {},
    $ = jQuery;


/*	-----------------------------------------------------------------------------------------------
	Global variables
--------------------------------------------------------------------------------------------------- */

var $eksellDoc = $( document ),
    $eksellWin = $( window );


/*	-----------------------------------------------------------------------------------------------
	Helper functions
--------------------------------------------------------------------------------------------------- */

/* Output AJAX errors ------------------------ */

function eksellAjaxErrors( jqXHR, exception ) {
	var message = '';
	if ( jqXHR.status === 0 ) {
		message = 'Not connect.n Verify Network.';
	} else if ( jqXHR.status == 404 ) {
		message = 'Requested page not found. [404]';
	} else if ( jqXHR.status == 500 ) {
		message = 'Internal Server Error [500].';
	} else if ( exception === 'parsererror' ) {
		message = 'Requested JSON parse failed.';
	} else if ( exception === 'timeout' ) {
		message = 'Time out error.';
	} else if ( exception === 'abort' ) {
		message = 'Ajax request aborted.';
	} else {
		message = 'Uncaught Error.n' + jqXHR.responseText;
	}
	console.log( 'AJAX ERROR:' + message );
}

/* Toggle an attribute ----------------------- */

function eksellToggleAttribute( $element, attribute, trueVal, falseVal ) {

	if ( typeof trueVal === 'undefined' ) { trueVal = true; }
	if ( typeof falseVal === 'undefined' ) { falseVal = false; }

	if ( $element.attr( attribute ) !== trueVal ) {
		$element.attr( attribute, trueVal );
	} else {
		$element.attr( attribute, falseVal );
	}
}


/*	-----------------------------------------------------------------------------------------------
	Interval Scroll
--------------------------------------------------------------------------------------------------- */

eksell.intervalScroll = {

	init: function() {

		didScroll = false;

		// Check for the scroll event.
		$eksellWin.on( 'scroll load', function() {
			didScroll = true;
		} );

		// Once every 250ms, check if we have scrolled, and if we have, do the intensive stuff.
		setInterval( function() {
			if ( didScroll ) {
				didScroll = false;

				// When this triggers, we know that we have scrolled.
				$eksellWin.trigger( 'did-interval-scroll' );

			}

		}, 250 );

	},

} // eksell.intervalScroll


/*	-----------------------------------------------------------------------------------------------
	Toggles
--------------------------------------------------------------------------------------------------- */

eksell.toggles = {

	init: function() {

		// Do the toggle.
		eksell.toggles.toggle();

		// Check for toggle/untoggle on resize.
		eksell.toggles.resizeCheck();

		// Check for untoggle on escape key press.
		eksell.toggles.untoggleOnEscapeKeyPress();

	},

	// Do the toggle.
	toggle: function() {

		$( '*[data-toggle-target]' ).on( 'click', function( e ) {

			// Get our targets
			var $toggle 		= $( this ),
				targetString 	= $( this ).data( 'toggle-target' ),
				$target 		= $( targetString );

			// Trigger events on the toggle targets before they are toggled.
			if ( $target.is( '.active' ) ) {
				$target.trigger( 'toggle-target-before-active' );
			} else {
				$target.trigger( 'toggle-target-before-inactive' );
			}

			// For cover modals, set a short timeout duration so the class animations have time to play out.
			var timeOutTime = $target.hasClass( 'cover-modal' ) ? 5 : 0;

			setTimeout( function() {

				// Toggle the target of the clicked toggle.
				if ( $toggle.data( 'toggle-type' ) == 'slidetoggle' ) {
					var duration = $toggle.data( 'toggle-duration' ) ? $toggle.data( 'toggle-duration' ) : 250;
					if ( $( 'body' ).hasClass( 'has-anim' ) ) {
						$target.slideToggle( duration );
					} else {
						$target.toggle();
					}
				} else {
					$target.toggleClass( 'active' );
				}

				// Toggle all toggles with this toggle target.
				$( '*[data-toggle-target="' + targetString + '"]' ).toggleClass( 'active' );

				// Toggle aria-expanded on the target.
				eksellToggleAttribute( $target, 'aria-expanded', 'true', 'false' );

				// Toggle aria-pressed on the toggle.
				eksellToggleAttribute( $toggle, 'aria-pressed', 'true', 'false' );

				// Toggle body class.
				if ( $toggle.data( 'toggle-body-class' ) ) {
					$( 'body' ).toggleClass( $toggle.data( 'toggle-body-class' ) );
				}

				// Check whether to lock the screen.
				if ( $toggle.data( 'lock-screen' ) ) {
					eksell.scrollLock.setTo( true );
				} else if ( $toggle.data( 'unlock-screen' ) ) {
					eksell.scrollLock.setTo( false );
				} else if ( $toggle.data( 'toggle-screen-lock' ) ) {
					eksell.scrollLock.setTo();
				}

				// Check whether to set focus.
				if ( $toggle.data( 'set-focus' ) ) {
					var $focusElement = $( $toggle.data( 'set-focus' ) );
					if ( $focusElement.length ) {
						if ( $toggle.is( '.active' ) ) {
							$focusElement.focus();
						} else {
							$focusElement.blur();
						}
					}
				}

				// Trigger the toggled event on the toggle target.
				$target.trigger( 'toggled' );

				// Trigger events on the toggle targets after they are toggled.
				if ( $target.is( '.active' ) ) {
					$target.trigger( 'toggle-target-after-active' );
				} else {
					$target.trigger( 'toggle-target-after-inactive' );
				}

			}, timeOutTime );

			return false;

		} );
	},

	// Check for toggle/untoggle on screen resize.
	resizeCheck: function() {

		if ( $( '*[data-untoggle-above], *[data-untoggle-below], *[data-toggle-above], *[data-toggle-below]' ).length ) {

			$eksellWin.on( 'resize', function() {

				var winWidth = $eksellWin.width(),
					$toggles = $( '.toggle' );

				$toggles.each( function() {

					$toggle = $( this );

					var unToggleAbove = $toggle.data( 'untoggle-above' ),
						unToggleBelow = $toggle.data( 'untoggle-below' ),
						toggleAbove = $toggle.data( 'toggle-above' ),
						toggleBelow = $toggle.data( 'toggle-below' );

					// If no width comparison is set, continue
					if ( ! unToggleAbove && ! unToggleBelow && ! toggleAbove && ! toggleBelow ) {
						return;
					}

					// If the toggle width comparison is true, toggle the toggle
					if ( 
						( ( ( unToggleAbove && winWidth > unToggleAbove ) ||
						( unToggleBelow && winWidth < unToggleBelow ) ) &&
						$toggle.hasClass( 'active' ) )
						||
						( ( ( toggleAbove && winWidth > toggleAbove ) ||
						( toggleBelow && winWidth < toggleBelow ) ) &&
						! $toggle.hasClass( 'active' ) )
					) {
						$toggle.trigger( 'click' );
					}

				} );

			} );

		}

	},

	// Close toggle on escape key press.
	untoggleOnEscapeKeyPress: function() {

		$eksellDoc.keyup( function( e ) {
			if ( e.key === "Escape" ) {

				$( '*[data-untoggle-on-escape].active' ).each( function() {
					if ( $( this ).hasClass( 'active' ) ) {
						$( this ).trigger( 'click' );
					}
				} );
					
			}
		} );

	},

} // eksell.toggles


/*	-----------------------------------------------------------------------------------------------
	Cover Modals
--------------------------------------------------------------------------------------------------- */

eksell.coverModals = {

	init: function () {

		if ( $( '.cover-modal' ).length ) {

			// Handle cover modals when they're toggled.
			eksell.coverModals.onToggle();

			// When toggled, untoggle if visitor clicks on the wrapping element of the modal.
			eksell.coverModals.outsideUntoggle();

			// Close on escape key press.
			eksell.coverModals.closeOnEscape();

			// Hide and show modals before and after their animations have played out.
			eksell.coverModals.hideAndShowModals();

		}

	},

	// Handle cover modals when they're toggled.
	onToggle: function() {

		$( '.cover-modal' ).on( 'toggled', function() {

			var $modal = $( this ),
				$body = $( 'body' );

			if ( $modal.hasClass( 'active' ) ) {
				$body.addClass( 'showing-modal' );
			} else {
				$body.removeClass( 'showing-modal' ).addClass( 'hiding-modal' );

				// Remove the hiding class after a delay, when animations have been run
				setTimeout ( function() {
					$body.removeClass( 'hiding-modal' );
				}, 500 );
			}
		} );

	},

	// Close modal on outside click.
	outsideUntoggle: function() {

		$eksellDoc.on( 'click', function( e ) {

			var $target = $( e.target ),
				modal = '.cover-modal.active';

			if ( $target.is( modal ) ) {

				eksell.coverModals.untoggleModal( $target );

			}

		} );

	},

	// Close modal on escape key press.
	closeOnEscape: function() {

		$eksellDoc.keyup( function( e ) {
			if ( e.key === "Escape" ) {
				$( '.cover-modal.active' ).each( function() {
					eksell.coverModals.untoggleModal( $( this ) );
				} );
			}
		} );

	},

	// Hide and show modals before and after their animations have played out.
	hideAndShowModals: function() {

		var $modals = $( '.cover-modal' );

		// Show the modal.
		$modals.on( 'toggle-target-before-inactive', function( e ) {
			if ( e.target != this ) return;
			$( this ).addClass( 'show-modal' );
		} );

		// Hide the modal after a delay, so animations have time to play out.
		$modals.on( 'toggle-target-after-inactive', function( e ) {
			if ( e.target != this ) return;

			var $modal = $( this );
			setTimeout( function() {
				$modal.removeClass( 'show-modal' );
			}, 250 );
		} );

	},

	// Untoggle a modal.
	untoggleModal: function( $modal ) {

		$modalToggle = false;

		// If the modal has specified the string (ID or class) used by toggles to target it, untoggle the toggles with that target string.
		// The modal-target-string must match the string toggles use to target the modal.
		if ( $modal.data( 'modal-target-string' ) ) {
			var modalTargetClass = $modal.data( 'modal-target-string' ),
				$modalToggle = $( '*[data-toggle-target="' + modalTargetClass + '"]' ).first();
		}

		// If a modal toggle exists, trigger it so all of the toggle options are included.
		if ( $modalToggle && $modalToggle.length ) {
			$modalToggle.trigger( 'click' );

		// If one doesn't exist, just hide the modal.
		} else {
			$modal.removeClass( 'active' );
		}

	}

} // eksell.coverModals


/*	-----------------------------------------------------------------------------------------------
	Sticky Header
--------------------------------------------------------------------------------------------------- */

eksell.stickyHeader = {

	init: function() {

		var $stickyElement = $( '#site-header.stick-me' );

		if ( $stickyElement.length ) {

			// Add our stand-in element for the sticky header.
			if ( ! $( '.header-sticky-adjuster' ).length ) {
				$stickyElement.before( '<div class="header-sticky-adjuster"></div>' );
			}

			// Stick the header.
			$stickyElement.addClass( 'is-sticky' );

			// Update the dimensions of our stand-in element on load and screen size change.
			eksell.stickyHeader.updateStandIn( $stickyElement );

			$eksellWin.on( 'resize orientationchange', function() {
				eksell.stickyHeader.updateStandIn( $stickyElement );
			} );

		}

	},

	updateStandIn: function ( $stickyElement ) {
		$( '.header-sticky-adjuster' ).height( $stickyElement.outerHeight() ).css( 'margin-bottom', parseInt( $stickyElement.css( 'marginBottom' ) ) );
	}

} // Stick Me


/*	-----------------------------------------------------------------------------------------------
	Intrinsic Ratio Embeds
--------------------------------------------------------------------------------------------------- */

eksell.instrinsicRatioVideos = {

	init: function() {

		eksell.instrinsicRatioVideos.makeFit();

		$eksellWin.on( 'resize fit-videos', function() {
			eksell.instrinsicRatioVideos.makeFit();
		} );

	},

	makeFit: function() {

		var vidSelector = "iframe, object, video";

		$( vidSelector ).each( function() {

			var $video = $( this ),
				$container = $video.parent(),
				iTargetWidth = $container.width();

			// Skip videos we want to ignore.
			if ( $video.hasClass( 'intrinsic-ignore' ) || $video.parent().hasClass( 'intrinsic-ignore' ) ) {
				return true;
			}

			if ( ! $video.attr( 'data-origwidth' ) ) {

				// Get the video element proportions.
				$video.attr( 'data-origwidth', $video.attr( 'width' ) );
				$video.attr( 'data-origheight', $video.attr( 'height' ) );

			}

			// Get ratio from proportions.
			var ratio = iTargetWidth / $video.attr( 'data-origwidth' );

			// Scale based on ratio, thus retaining proportions.
			$video.css( 'width', iTargetWidth + 'px' );
			$video.css( 'height', ( $video.attr( 'data-origheight' ) * ratio ) + 'px' );

		} );

	}

} // eksell.instrinsicRatioVideos


/*	-----------------------------------------------------------------------------------------------
	Scroll Lock
--------------------------------------------------------------------------------------------------- */

eksell.scrollLock = {

	init: function() {

		// Initialize variables.
		window.scrollLocked = false,
		window.prevScroll = {
			scrollLeft : $eksellWin.scrollLeft(),
			scrollTop  : $eksellWin.scrollTop()
		},
		window.prevLockStyles = {},
		window.lockStyles = {
			'overflow-y' : 'scroll',
			'position'   : 'fixed',
			'width'      : '100%'
		};

		// Instantiate cache in case someone tries to unlock before locking.
		eksell.scrollLock.saveStyles();

	},

	// Save context's inline styles in cache.
	saveStyles: function() {

		var styleAttr = $( 'html' ).attr( 'style' ),
			styleStrs = [],
			styleHash = {};

		if ( ! styleAttr ) {
			return;
		}

		styleStrs = styleAttr.split( /;\s/ );

		$.each( styleStrs, function serializeStyleProp( styleString ) {
			if ( ! styleString ) {
				return;
			}

			var keyValue = styleString.split( /\s:\s/ );

			if ( keyValue.length < 2 ) {
				return;
			}

			styleHash[ keyValue[ 0 ] ] = keyValue[ 1 ];
		} );

		$.extend( prevLockStyles, styleHash );
	},

	// Lock the scroll
	lock: function() {

		var appliedLock = {};

		if ( scrollLocked ) {
			return;
		}

		// Save scroll state and styles
		prevScroll = {
			scrollLeft : $eksellWin.scrollLeft(),
			scrollTop  : $eksellWin.scrollTop()
		};

		eksell.scrollLock.saveStyles();

		// Compose our applied CSS, with scroll state as styles.
		$.extend( appliedLock, lockStyles, {
			'left' : - prevScroll.scrollLeft + 'px',
			'top'  : - prevScroll.scrollTop + 'px'
		} );

		// Then lock styles and state.
		$( 'html' ).css( appliedLock );
		$( 'html' ).addClass( 'scroll-locked' );
		$( 'html' ).attr( 'scroll-lock-top', prevScroll.scrollTop );
		$eksellWin.scrollLeft( 0 ).scrollTop( 0 );

		window.scrollLocked = true;
	},

	// Unlock the scroll.
	unlock: function() {

		if ( ! window.scrollLocked ) {
			return;
		}

		// Revert styles and state.
		$( 'html' ).attr( 'style', $( '<x>' ).css( prevLockStyles ).attr( 'style' ) || '' );
		$( 'html' ).removeClass( 'scroll-locked' );
		$( 'html' ).attr( 'scroll-lock-top', '' );
		$eksellWin.scrollLeft( prevScroll.scrollLeft ).scrollTop( prevScroll.scrollTop );

		window.scrollLocked = false;
	},

	// Call this to lock or unlock the scroll.
	setTo: function( on ) {

		// If an argument is passed, lock or unlock accordingly.
		if ( arguments.length ) {
			if ( on ) {
				eksell.scrollLock.lock();
			} else {
				eksell.scrollLock.unlock();
			}
			// If not, toggle to the inverse state.
		} else {
			if ( window.scrollLocked ) {
				eksell.scrollLock.unlock();
			} else {
				eksell.scrollLock.lock();
			}
		}

	},

} // eksell.scrollLock


/*	-----------------------------------------------------------------------------------------------
	Focus Management
--------------------------------------------------------------------------------------------------- */

eksell.focusManagement = {

	init: function() {

		// Focus loops.
		eksell.focusManagement.focusLoops();

	},

	focusLoops: function() {

		// Add focus loops for the menu modal (which includes the #site-aside navigation toggle on desktop) and search modal.
		$eksellDoc.keydown( function( e ) {

			var $focusElement = $( ':focus' );

			if ( e.keyCode == 9 ) {

				var $destination = false;

				// Get the first and last visible focusable elements in the menu modal, for comparison against the focused element.
				var $menuModalFocusable = $( '.menu-modal' ).find( 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])' ).filter( ':visible' ),
					$menuModalFirst = $menuModalFocusable.first(),
					$menuModalLast = $menuModalFocusable.last();

				// Tabbing backwards.
				if ( e.shiftKey ) {

					if ( $focusElement.is( '#site-aside .nav-toggle.active' ) ) {
						$destination = $( '.menu-modal a:visible:last' );
					} else if ( $focusElement.is( $menuModalFirst ) ) {
						$destination = $( '#site-aside .nav-toggle' ).is( ':visible' ) ? $( '#site-aside .nav-toggle' ) : $menuModalLast;
					} else if ( $focusElement.is( '.search-modal .search-field' ) ) {
						$destination = $( '.search-untoggle' );
					}

				} 
				
				// Tabbing forwards.
				else {

					if ( $focusElement.is( $menuModalLast ) ) {
						$destination = $( '#site-aside .nav-toggle' ).is( ':visible' ) ? $( '#site-aside .nav-toggle' ) : $menuModalFirst;
					} else if ( $focusElement.is( '#site-aside .nav-toggle.active' ) ) {
						$destination = $menuModalFirst;
					} else if ( $focusElement.is( '.search-untoggle' ) ) {
						$destination = $( '.search-modal .search-field' );
					}

				}

				// If a destination is set, change focus.
				if ( $destination ) {
					$destination.focus();
					return false;
				}
				
			}
		} );

	}

} // eksell.focusManagement


/*	-----------------------------------------------------------------------------------------------
	Main Menu
--------------------------------------------------------------------------------------------------- */

eksell.mainMenu = {

	init: function() {

		// If the current menu item is in a sub level, expand all the levels higher up on load.
		eksell.mainMenu.expandLevel();

	},

	// If the current menu item is in a sub level, expand all the levels higher up on load.
	expandLevel: function() {
		var $activeMenuItem = $( '.main-menu .current-menu-item' );

		if ( $activeMenuItem.length !== false ) {
			$activeMenuItem.parents( 'li' ).each( function() {
				$subMenuToggle = $( this ).find( '.sub-menu-toggle' ).first();
				if ( $subMenuToggle.length ) {
					$subMenuToggle.trigger( 'click' );
				}
			} )
		}
	},

} // eksell.mainMenu


/*	-----------------------------------------------------------------------------------------------
	Load More
--------------------------------------------------------------------------------------------------- */

eksell.loadMore = {

	init: function() {

		var $pagination = $( '#pagination' );

		// First, check that there's a pagination.
		if ( $pagination.length ) {

			// Default values for variables.
			window.eksellIsLoading = false;
			window.eksellIsLastPage = $( '.pagination-wrapper' ).hasClass( 'last-page' );

			eksell.loadMore.prepare( $pagination );

		}

		// When the pagination query args are updated, reset the posts to reflect the new pagination
		$eksellWin.on( 'reset-posts', function() {

			// Fade out the pagination and existing posts.
			$pagination.add( $( $pagination.data( 'load-more-target' ) ).find( '.article-wrapper' ) ).animate( { opacity: 0 }, 300, 'linear' );

			// Reset posts.
			eksell.loadMore.prepare( $pagination, resetPosts = true );
		} );

	},

	prepare: function( $pagination, resetPosts ) {

		// Default resetPosts to false.
		if ( typeof resetPosts === 'undefined' || ! resetPosts ) {
			resetPosts = false;
		}

		// Get the query arguments from the pagination element.
		var queryArgs = JSON.parse( $pagination.attr( 'data-query-args' ) );

		// If we're resetting posts, reset them.
		if ( resetPosts ) {
			eksell.loadMore.loadPosts( $pagination, resetPosts );
		}

		// If not, check the paged value against the max_num_pages.
		else {
			if ( queryArgs.paged == queryArgs.max_num_pages ) {
				$( '.pagination-wrapper' ).addClass( 'last-page' );
			}

			// Get the load more type (button or scroll).
			var loadMoreType = $pagination.data( 'pagination-type' ) ? $pagination.data( 'pagination-type' ) : 'button';

			// Do the appropriate load more detection, depending on the type.
			if ( loadMoreType == 'scroll' ) {
				eksell.loadMore.detectScroll( $pagination );
			} else if ( loadMoreType == 'button' ) {
				eksell.loadMore.detectButtonClick( $pagination );
			}
		}

	},

	// Load more on scroll
	detectScroll: function( $pagination, query_args ) {

		$eksellWin.on( 'did-interval-scroll', function() {

			// If it's the last page, or we're already loading, we're done here.
			if ( eksellIsLastPage || eksellIsLoading ) {
				return;
			}

			var paginationOffset 	= $pagination.offset().top,
				winOffset 			= $eksellWin.scrollTop() + $eksellWin.outerHeight();

			// If the bottom of the window is below the top of the pagination, start loading.
			if ( ( winOffset > paginationOffset ) ) {
				eksell.loadMore.loadPosts( $pagination, query_args );
			}

		} );

	},

	// Load more on click.
	detectButtonClick: function( $pagination, query_args ) {

		// Load on click.
		$( '#load-more' ).on( 'click', function() {

			// Make sure we aren't already loading.
			if ( eksellIsLoading ) return;

			eksell.loadMore.loadPosts( $pagination, query_args );
			return false;
		} );

	},

	// Load the posts
	loadPosts: function( $pagination, resetPosts ) {

		// Default resetPosts to false.
		if ( typeof resetPosts === 'undefined' || ! resetPosts ) {
			resetPosts = false;
		}

		// Get the query arguments.
		var queryArgs 			= $pagination.attr( 'data-query-args' ),
			queryArgsParsed 	= JSON.parse( queryArgs ),
			$paginationWrapper 	= $( '.pagination-wrapper' ),
			$articleWrapper 	= $( $pagination.data( 'load-more-target' ) );

		// We're now loading.
		eksellIsLoading = true;
		if ( ! resetPosts ) {
			$paginationWrapper.addClass( 'loading' );
		}

		// If we're not resetting posts, increment paged (reset = initial paged is correct).
		if ( ! resetPosts ) {
			queryArgsParsed.paged++;
		} else {
			queryArgsParsed.paged = 1;
		}

		// Prepare the query args for submission.
		var jsonQueryArgs = JSON.stringify( queryArgsParsed );

		$.ajax({
			url: eksell_ajax_load_more.ajaxurl,
			type: 'post',
			data: {
				action: 'eksell_ajax_load_more',
				json_data: jsonQueryArgs
			},
			success: function( result ) {

				// Get the results.
				var $result = $( result );

				// If we're resetting posts, remove the existing posts.
				if ( resetPosts ) {
					$articleWrapper.find( '*:not(.grid-sizer)' ).remove();
				}

				// If there are no results, we're at the last page.
				if ( ! $result.length ) {
					eksellIsLoading = false;
					$articleWrapper.addClass( 'no-results' );
					$paginationWrapper.addClass( 'last-page' ).removeClass( 'loading' );
				}

				if ( $result.length ) {

					$articleWrapper.removeClass( 'no-results' );

					// Add the paged attribute to the articles, used by updateHistoryOnScroll().
					$result.find( 'article' ).each( function() {
						$( this ).attr( 'data-post-paged', queryArgsParsed.paged );
					} );

					// Wait for the images to load.
					$result.imagesLoaded( function() {

						// Append the results.
						$articleWrapper.append( $result ).masonry( 'appended', $result ).masonry();

						$eksellWin.trigger( 'ajax-content-loaded' );
						$eksellWin.trigger( 'did-interval-scroll' );

						// We're now finished with the loading.
						eksellIsLoading = false;
						$paginationWrapper.removeClass( 'loading' );

						// Update the pagination query args.
						$pagination.attr( 'data-query-args', jsonQueryArgs );

						// Reset the resetting of posts.
						if ( resetPosts ) {
							setTimeout( function() {
								$pagination.animate( { opacity: 1 }, 600, 'linear' );
							}, 400 );
							$( 'body' ).removeClass( 'filtering-posts' );
						}

						// If that was the last page, make sure we don't check for more.
						if ( queryArgsParsed.paged == queryArgsParsed.max_num_pages ) {
							$paginationWrapper.addClass( 'last-page' );
							eksellIsLastPage = true;
							return;

						// If not, make sure the pagination is visible again.
						} else {
							$paginationWrapper.removeClass( 'last-page' );
							eksellIsLastPage = false;
						}

					} );

				}

			},

			error: function( jqXHR, exception ) {
				eksellAjaxErrors( jqXHR, exception );
			}
		} );

	},

} // eksell.loadMore


/*	-----------------------------------------------------------------------------------------------
	Filters
--------------------------------------------------------------------------------------------------- */

eksell.filters = {

	init: function() {

		$eksellDoc.on( 'click', '.filter-link', function() {

			if ( $( this ).hasClass( 'active' ) ) return false;

			$( 'body' ).addClass( 'filtering-posts' );

			var $link 		= $( this ),
				termId 		= $link.data( 'filter-term-id' ) ? $link.data( 'filter-term-id' ) : null,
				taxonomy 	= $link.data( 'filter-taxonomy' ) ? $link.data( 'filter-taxonomy' ) : null,
				postType 	= $link.data( 'filter-post-type' ) ? $link.data( 'filter-post-type' ) : '';

			$link.addClass( 'pre-active' );

			$.ajax({
				url: eksell_ajax_filters.ajaxurl,
				type: 'post',
				data: {
					action: 	'eksell_ajax_filters',
					post_type: 	postType,
					term_id: 	termId,
					taxonomy: 	taxonomy,
				},
				success: function( result ) {

					// Add them to the pagination.
					$( '#pagination' ).attr( 'data-query-args', result );

					// Reset the posts.
					$eksellWin.trigger( 'reset-posts' );

					// Update active class.
					$( '.filter-link' ).removeClass( 'pre-active active' );
					$link.addClass( 'active' );
	
				},
	
				error: function( jqXHR, exception ) {
					eksellAJAXErrors( jqXHR, exception );
				}
			} );

			return false;

		} );

	}

} // eksell.filters


/*	-----------------------------------------------------------------------------------------------
	Element In View
--------------------------------------------------------------------------------------------------- */

eksell.elementInView = {

	init: function() {

		$targets = $( 'body.has-anim .do-spot' );
		eksell.elementInView.run( $targets );

		// Rerun on AJAX content loaded.
		$eksellWin.on( 'ajax-content-loaded', function() {
			$targets = $( 'body.has-anim .do-spot' );
			eksell.elementInView.run( $targets );
		} );

	},

	run: function( $targets ) {

		if ( $targets.length ) {

			// Add class indicating the elements will be spotted.
			$targets.each( function() {
				$( this ).addClass( 'will-be-spotted' );
			} );

			eksell.elementInView.handleFocus( $targets );

			$eksellWin.on( 'load resize orientationchange did-interval-scroll', function() {
				eksell.elementInView.handleFocus( $targets );
			} );

		}

	},

	handleFocus: function( $targets ) {

		// Check for our targets.
		$targets.each( function() {

			var $this = $( this );

			if ( eksell.elementInView.isVisible( $this, checkAbove = true ) ) {
				$this.addClass( 'spotted' ).trigger( 'spotted' );
			}

		} );

	},

	// Determine whether the element is in view.
	isVisible: function( $elem, checkAbove ) {

		if ( typeof checkAbove === 'undefined' ) {
			checkAbove = false;
		}

		var winHeight 				= $eksellWin.height();

		var docViewTop 				= $eksellWin.scrollTop(),
			docViewBottom			= docViewTop + winHeight,
			docViewLimit 			= docViewBottom;

		var elemTop 				= $elem.offset().top;

		// If checkAbove is set to true, which is default, return true if the browser has already scrolled past the element.
		if ( checkAbove && ( elemTop <= docViewBottom ) ) {
			return true;
		}

		// If not, check whether the scroll limit exceeds the element top.
		return ( docViewLimit >= elemTop );

	}

} // eksell.elementInView


/*	-----------------------------------------------------------------------------------------------
	Masonry
--------------------------------------------------------------------------------------------------- */

eksell.masonry = {

	init: function() {

		var $wrapper = $( '.posts-grid' );

		if ( $wrapper.length ) {

			$wrapper.imagesLoaded( function() {

				$grid = $wrapper.masonry( {
					columnWidth: 		'.grid-sizer',
					itemSelector: 		'.article-wrapper',
					percentPosition: 	true,
					stagger:			0,
					transitionDuration: 0,
				} );

				// Trigger will-be-spotted elements.
				$grid.on( 'layoutComplete', function() {
					$eksellWin.trigger( 'scroll' );
				} );

				// Check for Masonry layout changes on an interval. Accounts for DOM changes caused by lazyloading plugins.
				// The interval is cleared when all previews have been spotted.
				eksell.masonry.intervalUpdate( $grid );

				// Reinstate the interval when new content is loaded.
				$eksellWin.on( 'ajax-content-loaded', function() {
					eksell.masonry.intervalUpdate( $grid );
				} );

			} );

		}

	},

	intervalUpdate: function( $grid ) {

		var masonryLayoutInterval = setInterval( function() {

			$grid.masonry();

			// Clear the interval when all previews have been spotted.
			if ( ! $( '.preview.do-spot:not(.spotted)' ).length ) clearInterval( masonryLayoutInterval );

		}, 1000 );

	}

} // eksell.masonry


/*	-----------------------------------------------------------------------------------------------
	Dynamic Heights
--------------------------------------------------------------------------------------------------- */

eksell.dynamicHeights = {

	init: function() {

		eksell.dynamicHeights.resize();

		$eksellWin.on( 'resize orientationchange', function() {
			eksell.dynamicHeights.resize();
		} );

	},

	resize: function() {

		var $header 	= $( '#site-header' ),
			$footer 	= $( '#site-footer' ),
			$content 	= $( '#site-content' )
			
		var headerHeight = $header.outerHeight(),
			contentHeight = $eksellWin.outerHeight() - headerHeight - parseInt( $header.css( 'marginBottom' ) ) - $footer.outerHeight() - parseInt( $footer.css( 'marginTop' ) );

		// Set a min-height for the content.
		$content.css( 'min-height', contentHeight );

		// Set the desktop navigation toggle and search modal field to match the header height, including line-height of pseudo (thanks, Firefox).
		$( '#site-aside .nav-toggle-inner' ).css( 'height', headerHeight );
		$( '.search-modal .search-field' ).css( 'height', headerHeight );
		$( '<style>.modal-search-form .search-field::-moz-placeholder { line-height: ' + headerHeight + 'px }</style>' ).appendTo( 'head' );

	}

} // eksell.dynamicHeights


/*	-----------------------------------------------------------------------------------------------
	Function Calls
--------------------------------------------------------------------------------------------------- */

$eksellDoc.ready( function() {

	eksell.intervalScroll.init();			// Check for scroll on an interval.
	eksell.toggles.init();					// Handle toggles.
	eksell.coverModals.init();				// Handle cover modals.
	eksell.elementInView.init();			// Check if elements are in view.
	eksell.instrinsicRatioVideos.init();	// Retain aspect ratio of videos on window resize.
	eksell.stickyHeader.init();				// Stick the header.
	eksell.scrollLock.init();				// Scroll Lock.
	eksell.mainMenu.init();					// Main Menu.
	eksell.focusManagement.init();			// Focus Management.
	eksell.loadMore.init();					// Load More.
	eksell.filters.init();					// Filters.
	eksell.masonry.init();					// Masonry.
	eksell.dynamicHeights.init();			// Dynamic Heights.

	// Call css-vars-ponyfill.
	cssVars();

} );;
document.documentElement.classList.add(
					'jetpack-lazy-images-js-enabled'
				);;
/*! lazysizes - v5.2.0 */
!function(a,b){var c=b(a,a.document,Date);a.lazySizes=c,"object"==typeof module&&module.exports&&(module.exports=c)}("undefined"!=typeof window?window:{},function(a,b,c){"use strict";var d,e;if(function(){var b,c={lazyClass:"lazyload",loadedClass:"lazyloaded",loadingClass:"lazyloading",preloadClass:"lazypreload",errorClass:"lazyerror",autosizesClass:"lazyautosizes",srcAttr:"data-src",srcsetAttr:"data-srcset",sizesAttr:"data-sizes",minSize:40,customMedia:{},init:!0,expFactor:1.5,hFac:.8,loadMode:2,loadHidden:!0,ricTimeout:0,throttleDelay:125};e=a.lazySizesConfig||a.lazysizesConfig||{};for(b in c)b in e||(e[b]=c[b])}(),!b||!b.getElementsByClassName)return{init:function(){},cfg:e,noSupport:!0};var f=b.documentElement,g=a.HTMLPictureElement,h="addEventListener",i="getAttribute",j=a[h].bind(a),k=a.setTimeout,l=a.requestAnimationFrame||k,m=a.requestIdleCallback,n=/^picture$/i,o=["load","error","lazyincluded","_lazyloaded"],p={},q=Array.prototype.forEach,r=function(a,b){return p[b]||(p[b]=new RegExp("(\\s|^)"+b+"(\\s|$)")),p[b].test(a[i]("class")||"")&&p[b]},s=function(a,b){r(a,b)||a.setAttribute("class",(a[i]("class")||"").trim()+" "+b)},t=function(a,b){var c;(c=r(a,b))&&a.setAttribute("class",(a[i]("class")||"").replace(c," "))},u=function(a,b,c){var d=c?h:"removeEventListener";c&&u(a,b),o.forEach(function(c){a[d](c,b)})},v=function(a,c,e,f,g){var h=b.createEvent("Event");return e||(e={}),e.instance=d,h.initEvent(c,!f,!g),h.detail=e,a.dispatchEvent(h),h},w=function(b,c){var d;!g&&(d=a.picturefill||e.pf)?(c&&c.src&&!b[i]("srcset")&&b.setAttribute("srcset",c.src),d({reevaluate:!0,elements:[b]})):c&&c.src&&(b.src=c.src)},x=function(a,b){return(getComputedStyle(a,null)||{})[b]},y=function(a,b,c){for(c=c||a.offsetWidth;c<e.minSize&&b&&!a._lazysizesWidth;)c=b.offsetWidth,b=b.parentNode;return c},z=function(){var a,c,d=[],e=[],f=d,g=function(){var b=f;for(f=d.length?e:d,a=!0,c=!1;b.length;)b.shift()();a=!1},h=function(d,e){a&&!e?d.apply(this,arguments):(f.push(d),c||(c=!0,(b.hidden?k:l)(g)))};return h._lsFlush=g,h}(),A=function(a,b){return b?function(){z(a)}:function(){var b=this,c=arguments;z(function(){a.apply(b,c)})}},B=function(a){var b,d=0,f=e.throttleDelay,g=e.ricTimeout,h=function(){b=!1,d=c.now(),a()},i=m&&g>49?function(){m(h,{timeout:g}),g!==e.ricTimeout&&(g=e.ricTimeout)}:A(function(){k(h)},!0);return function(a){var e;(a=!0===a)&&(g=33),b||(b=!0,e=f-(c.now()-d),e<0&&(e=0),a||e<9?i():k(i,e))}},C=function(a){var b,d,e=99,f=function(){b=null,a()},g=function(){var a=c.now()-d;a<e?k(g,e-a):(m||f)(f)};return function(){d=c.now(),b||(b=k(g,e))}},D=function(){var g,m,o,p,y,D,F,G,H,I,J,K,L=/^img$/i,M=/^iframe$/i,N="onscroll"in a&&!/(gle|ing)bot/.test(navigator.userAgent),O=0,P=0,Q=0,R=-1,S=function(a){Q--,(!a||Q<0||!a.target)&&(Q=0)},T=function(a){return null==K&&(K="hidden"==x(b.body,"visibility")),K||!("hidden"==x(a.parentNode,"visibility")&&"hidden"==x(a,"visibility"))},U=function(a,c){var d,e=a,g=T(a);for(G-=c,J+=c,H-=c,I+=c;g&&(e=e.offsetParent)&&e!=b.body&&e!=f;)(g=(x(e,"opacity")||1)>0)&&"visible"!=x(e,"overflow")&&(d=e.getBoundingClientRect(),g=I>d.left&&H<d.right&&J>d.top-1&&G<d.bottom+1);return g},V=function(){var a,c,h,j,k,l,n,o,q,r,s,t,u=d.elements;if((p=e.loadMode)&&Q<8&&(a=u.length)){for(c=0,R++;c<a;c++)if(u[c]&&!u[c]._lazyRace)if(!N||d.prematureUnveil&&d.prematureUnveil(u[c]))ba(u[c]);else if((o=u[c][i]("data-expand"))&&(l=1*o)||(l=P),r||(r=!e.expand||e.expand<1?f.clientHeight>500&&f.clientWidth>500?500:370:e.expand,d._defEx=r,s=r*e.expFactor,t=e.hFac,K=null,P<s&&Q<1&&R>2&&p>2&&!b.hidden?(P=s,R=0):P=p>1&&R>1&&Q<6?r:O),q!==l&&(D=innerWidth+l*t,F=innerHeight+l,n=-1*l,q=l),h=u[c].getBoundingClientRect(),(J=h.bottom)>=n&&(G=h.top)<=F&&(I=h.right)>=n*t&&(H=h.left)<=D&&(J||I||H||G)&&(e.loadHidden||T(u[c]))&&(m&&Q<3&&!o&&(p<3||R<4)||U(u[c],l))){if(ba(u[c]),k=!0,Q>9)break}else!k&&m&&!j&&Q<4&&R<4&&p>2&&(g[0]||e.preloadAfterLoad)&&(g[0]||!o&&(J||I||H||G||"auto"!=u[c][i](e.sizesAttr)))&&(j=g[0]||u[c]);j&&!k&&ba(j)}},W=B(V),X=function(a){var b=a.target;if(b._lazyCache)return void delete b._lazyCache;S(a),s(b,e.loadedClass),t(b,e.loadingClass),u(b,Z),v(b,"lazyloaded")},Y=A(X),Z=function(a){Y({target:a.target})},$=function(a,b){try{a.contentWindow.location.replace(b)}catch(c){a.src=b}},_=function(a){var b,c=a[i](e.srcsetAttr);(b=e.customMedia[a[i]("data-media")||a[i]("media")])&&a.setAttribute("media",b),c&&a.setAttribute("srcset",c)},aa=A(function(a,b,c,d,f){var g,h,j,l,m,p;(m=v(a,"lazybeforeunveil",b)).defaultPrevented||(d&&(c?s(a,e.autosizesClass):a.setAttribute("sizes",d)),h=a[i](e.srcsetAttr),g=a[i](e.srcAttr),f&&(j=a.parentNode,l=j&&n.test(j.nodeName||"")),p=b.firesLoad||"src"in a&&(h||g||l),m={target:a},s(a,e.loadingClass),p&&(clearTimeout(o),o=k(S,2500),u(a,Z,!0)),l&&q.call(j.getElementsByTagName("source"),_),h?a.setAttribute("srcset",h):g&&!l&&(M.test(a.nodeName)?$(a,g):a.src=g),f&&(h||l)&&w(a,{src:g})),a._lazyRace&&delete a._lazyRace,t(a,e.lazyClass),z(function(){var b=a.complete&&a.naturalWidth>1;p&&!b||(b&&s(a,"ls-is-cached"),X(m),a._lazyCache=!0,k(function(){"_lazyCache"in a&&delete a._lazyCache},9)),"lazy"==a.loading&&Q--},!0)}),ba=function(a){if(!a._lazyRace){var b,c=L.test(a.nodeName),d=c&&(a[i](e.sizesAttr)||a[i]("sizes")),f="auto"==d;(!f&&m||!c||!a[i]("src")&&!a.srcset||a.complete||r(a,e.errorClass)||!r(a,e.lazyClass))&&(b=v(a,"lazyunveilread").detail,f&&E.updateElem(a,!0,a.offsetWidth),a._lazyRace=!0,Q++,aa(a,b,f,d,c))}},ca=C(function(){e.loadMode=3,W()}),da=function(){3==e.loadMode&&(e.loadMode=2),ca()},ea=function(){if(!m){if(c.now()-y<999)return void k(ea,999);m=!0,e.loadMode=3,W(),j("scroll",da,!0)}};return{_:function(){y=c.now(),d.elements=b.getElementsByClassName(e.lazyClass),g=b.getElementsByClassName(e.lazyClass+" "+e.preloadClass),j("scroll",W,!0),j("resize",W,!0),j("pageshow",function(a){if(a.persisted){var c=b.querySelectorAll("."+e.loadingClass);c.length&&c.forEach&&l(function(){c.forEach(function(a){a.complete&&ba(a)})})}}),a.MutationObserver?new MutationObserver(W).observe(f,{childList:!0,subtree:!0,attributes:!0}):(f[h]("DOMNodeInserted",W,!0),f[h]("DOMAttrModified",W,!0),setInterval(W,999)),j("hashchange",W,!0),["focus","mouseover","click","load","transitionend","animationend"].forEach(function(a){b[h](a,W,!0)}),/d$|^c/.test(b.readyState)?ea():(j("load",ea),b[h]("DOMContentLoaded",W),k(ea,2e4)),d.elements.length?(V(),z._lsFlush()):W()},checkElems:W,unveil:ba,_aLSL:da}}(),E=function(){var a,c=A(function(a,b,c,d){var e,f,g;if(a._lazysizesWidth=d,d+="px",a.setAttribute("sizes",d),n.test(b.nodeName||""))for(e=b.getElementsByTagName("source"),f=0,g=e.length;f<g;f++)e[f].setAttribute("sizes",d);c.detail.dataAttr||w(a,c.detail)}),d=function(a,b,d){var e,f=a.parentNode;f&&(d=y(a,f,d),e=v(a,"lazybeforesizes",{width:d,dataAttr:!!b}),e.defaultPrevented||(d=e.detail.width)&&d!==a._lazysizesWidth&&c(a,f,e,d))},f=function(){var b,c=a.length;if(c)for(b=0;b<c;b++)d(a[b])},g=C(f);return{_:function(){a=b.getElementsByClassName(e.autosizesClass),j("resize",g)},checkElems:g,updateElem:d}}(),F=function(){!F.i&&b.getElementsByClassName&&(F.i=!0,E._(),D._())};return k(function(){e.init&&F()}),d={cfg:e,autoSizer:E,loader:D,init:F,uP:w,aC:s,rC:t,hC:r,fire:v,gW:y,rAF:z}});
;
!function(){var t={};!function(){"use strict";if("object"==typeof window)if("IntersectionObserver"in window&&"IntersectionObserverEntry"in window&&"intersectionRatio"in window.IntersectionObserverEntry.prototype)"isIntersecting"in window.IntersectionObserverEntry.prototype||Object.defineProperty(window.IntersectionObserverEntry.prototype,"isIntersecting",{get:function(){return this.intersectionRatio>0}});else{var t=function(t){for(var e=window.document,o=i(e);o;)o=i(e=o.ownerDocument);return e}(),e=[],o=null,n=null;s.prototype.THROTTLE_TIMEOUT=100,s.prototype.POLL_INTERVAL=null,s.prototype.USE_MUTATION_OBSERVER=!0,s._setupCrossOriginUpdater=function(){return o||(o=function(t,o){n=t&&o?l(t,o):{top:0,bottom:0,left:0,right:0,width:0,height:0},e.forEach((function(t){t._checkForIntersections()}))}),o},s._resetCrossOriginUpdater=function(){o=null,n=null},s.prototype.observe=function(t){if(!this._observationTargets.some((function(e){return e.element==t}))){if(!t||1!=t.nodeType)throw new Error("target must be an Element");this._registerInstance(),this._observationTargets.push({element:t,entry:null}),this._monitorIntersections(t.ownerDocument),this._checkForIntersections()}},s.prototype.unobserve=function(t){this._observationTargets=this._observationTargets.filter((function(e){return e.element!=t})),this._unmonitorIntersections(t.ownerDocument),0==this._observationTargets.length&&this._unregisterInstance()},s.prototype.disconnect=function(){this._observationTargets=[],this._unmonitorAllIntersections(),this._unregisterInstance()},s.prototype.takeRecords=function(){var t=this._queuedEntries.slice();return this._queuedEntries=[],t},s.prototype._initThresholds=function(t){var e=t||[0];return Array.isArray(e)||(e=[e]),e.sort().filter((function(t,e,o){if("number"!=typeof t||isNaN(t)||t<0||t>1)throw new Error("threshold must be a number between 0 and 1 inclusively");return t!==o[e-1]}))},s.prototype._parseRootMargin=function(t){var e=(t||"0px").split(/\s+/).map((function(t){var e=/^(-?\d*\.?\d+)(px|%)$/.exec(t);if(!e)throw new Error("rootMargin must be specified in pixels or percent");return{value:parseFloat(e[1]),unit:e[2]}}));return e[1]=e[1]||e[0],e[2]=e[2]||e[0],e[3]=e[3]||e[1],e},s.prototype._monitorIntersections=function(e){var o=e.defaultView;if(o&&-1==this._monitoringDocuments.indexOf(e)){var n=this._checkForIntersections,r=null,s=null;this.POLL_INTERVAL?r=o.setInterval(n,this.POLL_INTERVAL):(h(o,"resize",n,!0),h(e,"scroll",n,!0),this.USE_MUTATION_OBSERVER&&"MutationObserver"in o&&(s=new o.MutationObserver(n)).observe(e,{attributes:!0,childList:!0,characterData:!0,subtree:!0})),this._monitoringDocuments.push(e),this._monitoringUnsubscribes.push((function(){var t=e.defaultView;t&&(r&&t.clearInterval(r),u(t,"resize",n,!0)),u(e,"scroll",n,!0),s&&s.disconnect()}));var c=this.root&&(this.root.ownerDocument||this.root)||t;if(e!=c){var a=i(e);a&&this._monitorIntersections(a.ownerDocument)}}},s.prototype._unmonitorIntersections=function(e){var o=this._monitoringDocuments.indexOf(e);if(-1!=o){var n=this.root&&(this.root.ownerDocument||this.root)||t,r=this._observationTargets.some((function(t){var o=t.element.ownerDocument;if(o==e)return!0;for(;o&&o!=n;){var r=i(o);if((o=r&&r.ownerDocument)==e)return!0}return!1}));if(!r){var s=this._monitoringUnsubscribes[o];if(this._monitoringDocuments.splice(o,1),this._monitoringUnsubscribes.splice(o,1),s(),e!=n){var h=i(e);h&&this._unmonitorIntersections(h.ownerDocument)}}}},s.prototype._unmonitorAllIntersections=function(){var t=this._monitoringUnsubscribes.slice(0);this._monitoringDocuments.length=0,this._monitoringUnsubscribes.length=0;for(var e=0;e<t.length;e++)t[e]()},s.prototype._checkForIntersections=function(){if(this.root||!o||n){var t=this._rootIsInDom(),e=t?this._getRootRect():{top:0,bottom:0,left:0,right:0,width:0,height:0};this._observationTargets.forEach((function(n){var i=n.element,s=c(i),h=this._rootContainsTarget(i),u=n.entry,a=t&&h&&this._computeTargetAndRootIntersection(i,s,e),l=null;this._rootContainsTarget(i)?o&&!this.root||(l=e):l={top:0,bottom:0,left:0,right:0,width:0,height:0};var f=n.entry=new r({time:window.performance&&performance.now&&performance.now(),target:i,boundingClientRect:s,rootBounds:l,intersectionRect:a});u?t&&h?this._hasCrossedThreshold(u,f)&&this._queuedEntries.push(f):u&&u.isIntersecting&&this._queuedEntries.push(f):this._queuedEntries.push(f)}),this),this._queuedEntries.length&&this._callback(this.takeRecords(),this)}},s.prototype._computeTargetAndRootIntersection=function(e,i,r){if("none"!=window.getComputedStyle(e).display){for(var s,h,u,a,f,d,g,m,v=i,_=p(e),b=!1;!b&&_;){var w=null,y=1==_.nodeType?window.getComputedStyle(_):{};if("none"==y.display)return null;if(_==this.root||9==_.nodeType)if(b=!0,_==this.root||_==t)o&&!this.root?!n||0==n.width&&0==n.height?(_=null,w=null,v=null):w=n:w=r;else{var I=p(_),E=I&&c(I),T=I&&this._computeTargetAndRootIntersection(I,E,r);E&&T?(_=I,w=l(E,T)):(_=null,v=null)}else{var R=_.ownerDocument;_!=R.body&&_!=R.documentElement&&"visible"!=y.overflow&&(w=c(_))}if(w&&(s=w,h=v,u=void 0,a=void 0,f=void 0,d=void 0,g=void 0,m=void 0,u=Math.max(s.top,h.top),a=Math.min(s.bottom,h.bottom),f=Math.max(s.left,h.left),d=Math.min(s.right,h.right),m=a-u,v=(g=d-f)>=0&&m>=0&&{top:u,bottom:a,left:f,right:d,width:g,height:m}||null),!v)break;_=_&&p(_)}return v}},s.prototype._getRootRect=function(){var e;if(this.root&&!d(this.root))e=c(this.root);else{var o=d(this.root)?this.root:t,n=o.documentElement,i=o.body;e={top:0,left:0,right:n.clientWidth||i.clientWidth,width:n.clientWidth||i.clientWidth,bottom:n.clientHeight||i.clientHeight,height:n.clientHeight||i.clientHeight}}return this._expandRectByRootMargin(e)},s.prototype._expandRectByRootMargin=function(t){var e=this._rootMarginValues.map((function(e,o){return"px"==e.unit?e.value:e.value*(o%2?t.width:t.height)/100})),o={top:t.top-e[0],right:t.right+e[1],bottom:t.bottom+e[2],left:t.left-e[3]};return o.width=o.right-o.left,o.height=o.bottom-o.top,o},s.prototype._hasCrossedThreshold=function(t,e){var o=t&&t.isIntersecting?t.intersectionRatio||0:-1,n=e.isIntersecting?e.intersectionRatio||0:-1;if(o!==n)for(var i=0;i<this.thresholds.length;i++){var r=this.thresholds[i];if(r==o||r==n||r<o!=r<n)return!0}},s.prototype._rootIsInDom=function(){return!this.root||f(t,this.root)},s.prototype._rootContainsTarget=function(e){var o=this.root&&(this.root.ownerDocument||this.root)||t;return f(o,e)&&(!this.root||o==e.ownerDocument)},s.prototype._registerInstance=function(){e.indexOf(this)<0&&e.push(this)},s.prototype._unregisterInstance=function(){var t=e.indexOf(this);-1!=t&&e.splice(t,1)},window.IntersectionObserver=s,window.IntersectionObserverEntry=r}function i(t){try{return t.defaultView&&t.defaultView.frameElement||null}catch(e){return null}}function r(t){this.time=t.time,this.target=t.target,this.rootBounds=a(t.rootBounds),this.boundingClientRect=a(t.boundingClientRect),this.intersectionRect=a(t.intersectionRect||{top:0,bottom:0,left:0,right:0,width:0,height:0}),this.isIntersecting=!!t.intersectionRect;var e=this.boundingClientRect,o=e.width*e.height,n=this.intersectionRect,i=n.width*n.height;this.intersectionRatio=o?Number((i/o).toFixed(4)):this.isIntersecting?1:0}function s(t,e){var o,n,i,r=e||{};if("function"!=typeof t)throw new Error("callback must be a function");if(r.root&&1!=r.root.nodeType&&9!=r.root.nodeType)throw new Error("root must be a Document or Element");this._checkForIntersections=(o=this._checkForIntersections.bind(this),n=this.THROTTLE_TIMEOUT,i=null,function(){i||(i=setTimeout((function(){o(),i=null}),n))}),this._callback=t,this._observationTargets=[],this._queuedEntries=[],this._rootMarginValues=this._parseRootMargin(r.rootMargin),this.thresholds=this._initThresholds(r.threshold),this.root=r.root||null,this.rootMargin=this._rootMarginValues.map((function(t){return t.value+t.unit})).join(" "),this._monitoringDocuments=[],this._monitoringUnsubscribes=[]}function h(t,e,o,n){"function"==typeof t.addEventListener?t.addEventListener(e,o,n||!1):"function"==typeof t.attachEvent&&t.attachEvent("on"+e,o)}function u(t,e,o,n){"function"==typeof t.removeEventListener?t.removeEventListener(e,o,n||!1):"function"==typeof t.detatchEvent&&t.detatchEvent("on"+e,o)}function c(t){var e;try{e=t.getBoundingClientRect()}catch(o){}return e?(e.width&&e.height||(e={top:e.top,right:e.right,bottom:e.bottom,left:e.left,width:e.right-e.left,height:e.bottom-e.top}),e):{top:0,bottom:0,left:0,right:0,width:0,height:0}}function a(t){return!t||"x"in t?t:{top:t.top,y:t.top,bottom:t.bottom,left:t.left,x:t.left,right:t.right,width:t.width,height:t.height}}function l(t,e){var o=e.top-t.top,n=e.left-t.left;return{top:o,left:n,height:e.height,width:e.width,bottom:o+e.height,right:n+e.width}}function f(t,e){for(var o=e;o;){if(o==t)return!0;o=p(o)}return!1}function p(e){var o=e.parentNode;return 9==e.nodeType&&e!=t?i(e):(o&&o.assignedSlot&&(o=o.assignedSlot.parentNode),o&&11==o.nodeType&&o.host?o.host:o)}function d(t){return t&&9===t.nodeType}}();var e=window;for(var o in t)e[o]=t[o];t.__esModule&&Object.defineProperty(e,"__esModule",{value:!0})}();;
!function(){var e={},t=function(){var e,t,n,a={rootMargin:"200px 0px",threshold:.01},i=[];d();var r=document.querySelector("body");function d(){e=[].slice.call(document.querySelectorAll("img.jetpack-lazy-image:not(.jetpack-lazy-image--handled)")),n&&n.disconnect(),"IntersectionObserver"in window?(n=new IntersectionObserver(l,a),e.forEach((function(e){e.getAttribute("data-lazy-loaded")||n.observe(e)})),window.addEventListener("beforeprint",c),window.matchMedia&&window.matchMedia("print").addListener((function(e){e.matches&&c()}))):o()}function o(){for(n&&n.disconnect();e.length>0;)s(e[0])}function l(t){for(var a=0;a<t.length;a++){var i=t[a];i.intersectionRatio>0&&(n.unobserve(i.target),s(i.target))}0===e.length&&n.disconnect()}function c(){if(!t&&(e.length>0||i.length>0)){(t=document.createElement("div")).id="loadingWarning",t.style.fontWeight="bold",t.innerText=jetpackLazyImagesL10n.loading_warning;var n=document.createElement("style");n.innerHTML="#loadingWarning { display: none; }\n@media print {\n#loadingWarning { display: block; }\nbody > #loadingWarning ~ * { display: none !important; }\n}",t.appendChild(n),r.insertBefore(t,r.firstChild)}e.length>0&&o(),t&&alert(jetpackLazyImagesL10n.loading_warning)}function s(t){var n;if(t instanceof HTMLImageElement){var a=t.getAttribute("data-lazy-srcset"),r=t.getAttribute("data-lazy-sizes");t.removeAttribute("data-lazy-srcset"),t.removeAttribute("data-lazy-sizes"),t.removeAttribute("data-lazy-src"),t.classList.add("jetpack-lazy-image--handled"),t.setAttribute("data-lazy-loaded",1),r&&t.setAttribute("sizes",r),a?t.setAttribute("srcset",a):t.removeAttribute("srcset"),t.setAttribute("loading","eager"),i.push(t);var d=e.indexOf(t);d>=0&&e.splice(d,1),t.complete?g.call(t,null):(t.addEventListener("load",g,{once:!0}),t.addEventListener("error",g,{once:!0}));try{n=new Event("jetpack-lazy-loaded-image",{bubbles:!0,cancelable:!0})}catch(o){(n=document.createEvent("Event")).initEvent("jetpack-lazy-loaded-image",!0,!0)}t.dispatchEvent(n)}}function g(){var n=i.indexOf(this);n>=0&&i.splice(n,1),t&&0===e.length&&0===i.length&&(t.parentNode.removeChild(t),t=null)}r&&(r.addEventListener("is.post-load",d),r.addEventListener("jetpack-lazy-images-load",d))};"interactive"===document.readyState||"complete"===document.readyState?t():document.addEventListener("DOMContentLoaded",t);var n=window;for(var a in e)n[a]=e[a];e.__esModule&&Object.defineProperty(n,"__esModule",{value:!0})}();