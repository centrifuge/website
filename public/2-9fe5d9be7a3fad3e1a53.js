(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{188:function(e,n,t){"use strict";t.d(n,"a",function(){return v});var r=t(0),o=t.n(r);var i,u=function(e,n){return e(n={exports:{}},n.exports),n.exports}(function(e,n){function t(e,n){return e(n={exports:{}},n.exports),n.exports}Object.defineProperty(n,"__esModule",{value:!0});var r=t(function(e){var n=e.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)}),o=t(function(e){var n=e.exports={version:"2.6.0"};"number"==typeof __e&&(__e=n)}),i=(o.version,function(e){return"object"==typeof e?null!==e:"function"==typeof e}),u=function(e){if(!i(e))throw TypeError(e+" is not an object!");return e},c=function(e){try{return!!e()}catch(n){return!0}},a=!c(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}),l=r.document,f=i(l)&&i(l.createElement),s=!a&&!c(function(){return 7!=Object.defineProperty((e="div",f?l.createElement(e):{}),"a",{get:function(){return 7}}).a;var e}),p=Object.defineProperty,E={f:a?Object.defineProperty:function(e,n,t){if(u(e),n=function(e,n){if(!i(e))return e;var t,r;if(n&&"function"==typeof(t=e.toString)&&!i(r=t.call(e)))return r;if("function"==typeof(t=e.valueOf)&&!i(r=t.call(e)))return r;if(!n&&"function"==typeof(t=e.toString)&&!i(r=t.call(e)))return r;throw TypeError("Can't convert object to primitive value")}(n,!0),u(t),s)try{return p(e,n,t)}catch(r){}if("get"in t||"set"in t)throw TypeError("Accessors not supported!");return"value"in t&&(e[n]=t.value),e}},d=a?function(e,n,t){return E.f(e,n,function(e,n){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:n}}(1,t))}:function(e,n,t){return e[n]=t,e},y={}.hasOwnProperty,h=function(e,n){return y.call(e,n)},_=0,v=Math.random(),O=function(e){return"Symbol(".concat(void 0===e?"":e,")_",(++_+v).toString(36))},I=t(function(e){var n=O("src"),t=Function.toString,i=(""+t).split("toString");o.inspectSource=function(e){return t.call(e)},(e.exports=function(e,t,o,u){var c="function"==typeof o;c&&(h(o,"name")||d(o,"name",t)),e[t]!==o&&(c&&(h(o,n)||d(o,n,e[t]?""+e[t]:i.join(String(t)))),e===r?e[t]=o:u?e[t]?e[t]=o:d(e,t,o):(delete e[t],d(e,t,o)))})(Function.prototype,"toString",function(){return"function"==typeof this&&this[n]||t.call(this)})}),L=function(e,n,t){if(function(e){if("function"!=typeof e)throw TypeError(e+" is not a function!")}(e),void 0===n)return e;switch(t){case 1:return function(t){return e.call(n,t)};case 2:return function(t,r){return e.call(n,t,r)};case 3:return function(t,r,o){return e.call(n,t,r,o)}}return function(){return e.apply(n,arguments)}},b=function(e,n,t){var i,u,c,a,l=e&b.F,f=e&b.G,s=e&b.S,p=e&b.P,E=e&b.B,y=f?r:s?r[n]||(r[n]={}):(r[n]||{}).prototype,h=f?o:o[n]||(o[n]={}),_=h.prototype||(h.prototype={});for(i in f&&(t=n),t)c=((u=!l&&y&&void 0!==y[i])?y:t)[i],a=E&&u?L(c,r):p&&"function"==typeof c?L(Function.call,c):c,y&&I(y,i,c,e&b.U),h[i]!=c&&d(h,i,a),p&&_[i]!=c&&(_[i]=c)};r.core=o,b.F=1,b.G=2,b.S=4,b.P=8,b.B=16,b.W=32,b.U=64,b.R=128;var T,m,S=b,D={}.toString,g=Object("z").propertyIsEnumerable(0)?Object:function(e){return"String"==function(e){return D.call(e).slice(8,-1)}(e)?e.split(""):Object(e)},N=function(e){return g(function(e){if(null==e)throw TypeError("Can't call method on  "+e);return e}(e))},A=Math.ceil,C=Math.floor,P=function(e){return isNaN(e=+e)?0:(e>0?C:A)(e)},R=Math.min,j=Math.max,M=Math.min,H=function(e){return function(n,t,r){var o,i,u=N(n),c=(o=u.length)>0?R(P(o),9007199254740991):0,a=function(e,n){return(e=P(e))<0?j(e+n,0):M(e,n)}(r,c);if(e&&t!=t){for(;c>a;)if((i=u[a++])!=i)return!0}else for(;c>a;a++)if((e||a in u)&&u[a]===t)return e||a||0;return!e&&-1}},w=t(function(e){var n=r["__core-js_shared__"]||(r["__core-js_shared__"]={});(e.exports=function(e,t){return n[e]||(n[e]=void 0!==t?t:{})})("versions",[]).push({version:o.version,mode:"global",copyright:"© 2018 Denis Pushkarev (zloirock.ru)"})}),k=w("keys"),G=H(!1),x=k[T="IE_PROTO"]||(k[T]=O(T)),B="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(","),U=Object.keys||function(e){return function(e,n){var t,r=N(e),o=0,i=[];for(t in r)t!=x&&h(r,t)&&i.push(t);for(;n.length>o;)h(r,t=n[o++])&&(~G(i,t)||i.push(t));return i}(e,B)},K={f:{}.propertyIsEnumerable}.f,Y=(m=!1,function(e){for(var n,t=N(e),r=U(t),o=r.length,i=0,u=[];o>i;)K.call(t,n=r[i++])&&u.push(m?[n,t[n]]:t[n]);return u});S(S.S,"Object",{values:function(e){return Y(e)}});o.Object.values;var F=t(function(e){var n=w("wks"),t=r.Symbol,o="function"==typeof t;(e.exports=function(e){return n[e]||(n[e]=o&&t[e]||(o?t:O)("Symbol."+e))}).store=n})("unscopables"),z=Array.prototype;null==z[F]&&d(z,F,{});var Q=H(!0);S(S.P,"Array",{includes:function(e){return Q(this,e,arguments.length>1?arguments[1]:void 0)}}),function(e){z[F][e]=!0}("includes");var V;o.Array.includes;!function(e){e.DOCUMENT="document",e.PARAGRAPH="paragraph",e.HEADING_1="heading-1",e.HEADING_2="heading-2",e.HEADING_3="heading-3",e.HEADING_4="heading-4",e.HEADING_5="heading-5",e.HEADING_6="heading-6",e.OL_LIST="ordered-list",e.UL_LIST="unordered-list",e.LIST_ITEM="list-item",e.HR="hr",e.QUOTE="blockquote",e.EMBEDDED_ENTRY="embedded-entry-block",e.EMBEDDED_ASSET="embedded-asset-block"}(V||(V={}));var q,Z=V;!function(e){e.HYPERLINK="hyperlink",e.ENTRY_HYPERLINK="entry-hyperlink",e.ASSET_HYPERLINK="asset-hyperlink",e.EMBEDDED_ENTRY="embedded-entry-inline"}(q||(q={}));var J,W=q,X=[Z.PARAGRAPH,Z.HEADING_1,Z.HEADING_2,Z.HEADING_3,Z.HEADING_4,Z.HEADING_5,Z.HEADING_6,Z.OL_LIST,Z.UL_LIST,Z.HR,Z.QUOTE,Z.EMBEDDED_ENTRY,Z.EMBEDDED_ASSET],$=[Z.HR,Z.EMBEDDED_ENTRY,Z.EMBEDDED_ASSET],ee=((J={})[Z.OL_LIST]=[Z.LIST_ITEM],J[Z.UL_LIST]=[Z.LIST_ITEM],J[Z.LIST_ITEM]=X.slice(),J[Z.QUOTE]=[Z.PARAGRAPH],J);var ne=Object.freeze({isInline:function(e){return Object.values(W).includes(e.nodeType)},isBlock:function(e){return Object.values(Z).includes(e.nodeType)},isText:function(e){return"text"===e.nodeType}});n.helpers=ne,n.BLOCKS=Z,n.INLINES=W,n.MARKS={BOLD:"bold",ITALIC:"italic",UNDERLINE:"underline",CODE:"code"},n.TOP_LEVEL_BLOCKS=X,n.VOID_BLOCKS=$,n.CONTAINERS=ee});(i=u)&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")&&i.default;var c,a,l=u.helpers,f=u.BLOCKS,s=u.INLINES,p=u.MARKS,E=(u.TOP_LEVEL_BLOCKS,u.VOID_BLOCKS,u.CONTAINERS,function(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}),d=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},y=function(e){return o.a.createElement("span",{key:e.data.target.sys.id},"type: ",e.nodeType," id: ",e.data.target.sys.id)},h=(E(c={},f.PARAGRAPH,function(e,n){return o.a.createElement("p",null,n)}),E(c,f.HEADING_1,function(e,n){return o.a.createElement("h1",null,n)}),E(c,f.HEADING_2,function(e,n){return o.a.createElement("h2",null,n)}),E(c,f.HEADING_3,function(e,n){return o.a.createElement("h3",null,n)}),E(c,f.HEADING_4,function(e,n){return o.a.createElement("h4",null,n)}),E(c,f.HEADING_5,function(e,n){return o.a.createElement("h5",null,n)}),E(c,f.HEADING_6,function(e,n){return o.a.createElement("h6",null,n)}),E(c,f.EMBEDDED_ENTRY,function(e,n){return o.a.createElement("div",null,n)}),E(c,f.UL_LIST,function(e,n){return o.a.createElement("ul",null,n)}),E(c,f.OL_LIST,function(e,n){return o.a.createElement("ol",null,n)}),E(c,f.LIST_ITEM,function(e,n){return o.a.createElement("li",null,n)}),E(c,f.QUOTE,function(e,n){return o.a.createElement("blockquote",null,n)}),E(c,f.HR,function(){return o.a.createElement("hr",null)}),E(c,s.ASSET_HYPERLINK,y),E(c,s.ENTRY_HYPERLINK,y),E(c,s.EMBEDDED_ENTRY,y),E(c,s.HYPERLINK,function(e,n){return o.a.createElement("a",{href:e.data.uri},n)}),c),_=(E(a={},p.BOLD,function(e){return o.a.createElement("b",null,e)}),E(a,p.ITALIC,function(e){return o.a.createElement("i",null,e)}),E(a,p.UNDERLINE,function(e){return o.a.createElement("u",null,e)}),E(a,p.CODE,function(e){return o.a.createElement("code",null,e)}),a);function v(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=d({},h,n.renderNode),r=d({},_,n.renderMark);function o(e){return e.map(function(e,n){return O(function(e){return l.isText(e)?e.marks.reduce(function(e,n){return r[n.type]?r[n.type](e):e},e.value):e.nodeType&&t[e.nodeType]?t[e.nodeType](e,o(e.content)):null}(e),n)})}return o(e.content)}var O=function(e,n){return e&&Object(r.isValidElement)(e)&&null===e.key?Object(r.cloneElement)(e,{key:n}):e}},189:function(e,n,t){"use strict";function r(e,n){return e(n={exports:{}},n.exports),n.exports}Object.defineProperty(n,"__esModule",{value:!0});var o=r(function(e){var n=e.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)}),i=r(function(e){var n=e.exports={version:"2.6.0"};"number"==typeof __e&&(__e=n)}),u=(i.version,function(e){return"object"==typeof e?null!==e:"function"==typeof e}),c=function(e){if(!u(e))throw TypeError(e+" is not an object!");return e},a=function(e){try{return!!e()}catch(n){return!0}},l=!a(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}),f=o.document,s=u(f)&&u(f.createElement),p=!l&&!a(function(){return 7!=Object.defineProperty((e="div",s?f.createElement(e):{}),"a",{get:function(){return 7}}).a;var e}),E=Object.defineProperty,d={f:l?Object.defineProperty:function(e,n,t){if(c(e),n=function(e,n){if(!u(e))return e;var t,r;if(n&&"function"==typeof(t=e.toString)&&!u(r=t.call(e)))return r;if("function"==typeof(t=e.valueOf)&&!u(r=t.call(e)))return r;if(!n&&"function"==typeof(t=e.toString)&&!u(r=t.call(e)))return r;throw TypeError("Can't convert object to primitive value")}(n,!0),c(t),p)try{return E(e,n,t)}catch(r){}if("get"in t||"set"in t)throw TypeError("Accessors not supported!");return"value"in t&&(e[n]=t.value),e}},y=l?function(e,n,t){return d.f(e,n,function(e,n){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:n}}(1,t))}:function(e,n,t){return e[n]=t,e},h={}.hasOwnProperty,_=function(e,n){return h.call(e,n)},v=0,O=Math.random(),I=function(e){return"Symbol(".concat(void 0===e?"":e,")_",(++v+O).toString(36))},L=r(function(e){var n=I("src"),t=Function.toString,r=(""+t).split("toString");i.inspectSource=function(e){return t.call(e)},(e.exports=function(e,t,i,u){var c="function"==typeof i;c&&(_(i,"name")||y(i,"name",t)),e[t]!==i&&(c&&(_(i,n)||y(i,n,e[t]?""+e[t]:r.join(String(t)))),e===o?e[t]=i:u?e[t]?e[t]=i:y(e,t,i):(delete e[t],y(e,t,i)))})(Function.prototype,"toString",function(){return"function"==typeof this&&this[n]||t.call(this)})}),b=function(e,n,t){if(function(e){if("function"!=typeof e)throw TypeError(e+" is not a function!")}(e),void 0===n)return e;switch(t){case 1:return function(t){return e.call(n,t)};case 2:return function(t,r){return e.call(n,t,r)};case 3:return function(t,r,o){return e.call(n,t,r,o)}}return function(){return e.apply(n,arguments)}},T=function(e,n,t){var r,u,c,a,l=e&T.F,f=e&T.G,s=e&T.S,p=e&T.P,E=e&T.B,d=f?o:s?o[n]||(o[n]={}):(o[n]||{}).prototype,h=f?i:i[n]||(i[n]={}),_=h.prototype||(h.prototype={});for(r in f&&(t=n),t)c=((u=!l&&d&&void 0!==d[r])?d:t)[r],a=E&&u?b(c,o):p&&"function"==typeof c?b(Function.call,c):c,d&&L(d,r,c,e&T.U),h[r]!=c&&y(h,r,a),p&&_[r]!=c&&(_[r]=c)};o.core=i,T.F=1,T.G=2,T.S=4,T.P=8,T.B=16,T.W=32,T.U=64,T.R=128;var m,S,D=T,g={}.toString,N=Object("z").propertyIsEnumerable(0)?Object:function(e){return"String"==function(e){return g.call(e).slice(8,-1)}(e)?e.split(""):Object(e)},A=function(e){return N(function(e){if(null==e)throw TypeError("Can't call method on  "+e);return e}(e))},C=Math.ceil,P=Math.floor,R=function(e){return isNaN(e=+e)?0:(e>0?P:C)(e)},j=Math.min,M=Math.max,H=Math.min,w=function(e){return function(n,t,r){var o,i,u=A(n),c=(o=u.length)>0?j(R(o),9007199254740991):0,a=function(e,n){return(e=R(e))<0?M(e+n,0):H(e,n)}(r,c);if(e&&t!=t){for(;c>a;)if((i=u[a++])!=i)return!0}else for(;c>a;a++)if((e||a in u)&&u[a]===t)return e||a||0;return!e&&-1}},k=r(function(e){var n=o["__core-js_shared__"]||(o["__core-js_shared__"]={});(e.exports=function(e,t){return n[e]||(n[e]=void 0!==t?t:{})})("versions",[]).push({version:i.version,mode:"global",copyright:"© 2018 Denis Pushkarev (zloirock.ru)"})}),G=k("keys"),x=w(!1),B=G[m="IE_PROTO"]||(G[m]=I(m)),U="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(","),K=Object.keys||function(e){return function(e,n){var t,r=A(e),o=0,i=[];for(t in r)t!=B&&_(r,t)&&i.push(t);for(;n.length>o;)_(r,t=n[o++])&&(~x(i,t)||i.push(t));return i}(e,U)},Y={f:{}.propertyIsEnumerable}.f,F=(S=!1,function(e){for(var n,t=A(e),r=K(t),o=r.length,i=0,u=[];o>i;)Y.call(t,n=r[i++])&&u.push(S?[n,t[n]]:t[n]);return u});D(D.S,"Object",{values:function(e){return F(e)}});i.Object.values;var z=r(function(e){var n=k("wks"),t=o.Symbol,r="function"==typeof t;(e.exports=function(e){return n[e]||(n[e]=r&&t[e]||(r?t:I)("Symbol."+e))}).store=n})("unscopables"),Q=Array.prototype;null==Q[z]&&y(Q,z,{});var V=w(!0);D(D.P,"Array",{includes:function(e){return V(this,e,arguments.length>1?arguments[1]:void 0)}}),function(e){Q[z][e]=!0}("includes");var q;i.Array.includes;!function(e){e.DOCUMENT="document",e.PARAGRAPH="paragraph",e.HEADING_1="heading-1",e.HEADING_2="heading-2",e.HEADING_3="heading-3",e.HEADING_4="heading-4",e.HEADING_5="heading-5",e.HEADING_6="heading-6",e.OL_LIST="ordered-list",e.UL_LIST="unordered-list",e.LIST_ITEM="list-item",e.HR="hr",e.QUOTE="blockquote",e.EMBEDDED_ENTRY="embedded-entry-block",e.EMBEDDED_ASSET="embedded-asset-block"}(q||(q={}));var Z,J=q;!function(e){e.HYPERLINK="hyperlink",e.ENTRY_HYPERLINK="entry-hyperlink",e.ASSET_HYPERLINK="asset-hyperlink",e.EMBEDDED_ENTRY="embedded-entry-inline"}(Z||(Z={}));var W,X=Z,$=[J.PARAGRAPH,J.HEADING_1,J.HEADING_2,J.HEADING_3,J.HEADING_4,J.HEADING_5,J.HEADING_6,J.OL_LIST,J.UL_LIST,J.HR,J.QUOTE,J.EMBEDDED_ENTRY,J.EMBEDDED_ASSET],ee=[J.HR,J.EMBEDDED_ENTRY,J.EMBEDDED_ASSET],ne=((W={})[J.OL_LIST]=[J.LIST_ITEM],W[J.UL_LIST]=[J.LIST_ITEM],W[J.LIST_ITEM]=$.slice(),W[J.QUOTE]=[J.PARAGRAPH],W);var te=Object.freeze({isInline:function(e){return Object.values(X).includes(e.nodeType)},isBlock:function(e){return Object.values(J).includes(e.nodeType)},isText:function(e){return"text"===e.nodeType}});n.helpers=te,n.BLOCKS=J,n.INLINES=X,n.MARKS={BOLD:"bold",ITALIC:"italic",UNDERLINE:"underline",CODE:"code"},n.TOP_LEVEL_BLOCKS=$,n.VOID_BLOCKS=ee,n.CONTAINERS=ne},298:function(e,n,t){"use strict";var r=t(0),o=t.n(r),i=t(169),u=t(260);var c={global:{colors:{icon:"#666666"}},icon:{size:{small:"12px",medium:"24px",large:"48px",xlarge:"96px"}}},a={theme:c};function l(){return(l=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}t.d(n,"a",function(){return p});var f=Object(i.css)([""," ",' g{fill:inherit;stroke:inherit;}*:not([stroke]){&[fill="none"]{stroke-width:0;}}*[stroke*="#"],*[STROKE*="#"]{stroke:inherit;fill:none;}*[fill-rule],*[FILL-RULE],*[fill*="#"],*[FILL*="#"]{fill:inherit;stroke:none;}'],function(e){return Object(u.a)("fill",e.color||e.theme.global.colors.icon,e.theme)},function(e){return Object(u.a)("stroke",e.color||e.theme.global.colors.icon,e.theme)}),s=function(e){var n=e.a11yTitle,t=(e.color,e.size,e.theme,function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,["a11yTitle","color","size","theme"]));return o.a.createElement("svg",l({"aria-label":n},t))};s.displayName="Icon";var p=Object(i.default)(s).withConfig({displayName:"StyledIcon",componentId:"ofa7kd-0"})(["display:inline-block;flex:0 0 auto;"," "," ",""],function(e){var n=e.size,t=void 0===n?"medium":n,r=e.theme;return"\n    width: "+(r.icon.size[t]||t)+";\n    height: "+(r.icon.size[t]||t)+";\n  "},function(e){return"plain"!==e.color&&f},function(e){var n=e.theme;return n&&n.icon.extend});p.defaultProps={},Object.setPrototypeOf(p.defaultProps,a)},446:function(e,n,t){"use strict";t.d(n,"a",function(){return c});var r=t(0),o=t.n(r),i=t(298);function u(){return(u=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}var c=function(e){return o.a.createElement(i.a,u({viewBox:"0 0 24 24",a11yTitle:"Github"},e),o.a.createElement("path",{fill:"#333",fillRule:"evenodd",d:"M11.9989871,1 C5.92550416,1 1,5.92482888 1,12.0003376 C1,16.8603395 4.15153934,20.9829338 8.52263728,22.4374904 C9.0729918,22.5387827 9.27355045,22.199116 9.27355045,21.9073943 C9.27355045,21.6467356 9.2640965,20.954572 9.25869425,20.0368642 C6.19899322,20.7013414 5.55342398,18.5620492 5.55342398,18.5620492 C5.0530403,17.2911692 4.33183953,16.9528531 4.33183953,16.9528531 C3.33309801,16.2708186 4.40747107,16.2843243 4.40747107,16.2843243 C5.51155652,16.3619816 6.09229872,17.4181221 6.09229872,17.4181221 C7.07348292,19.0988981 8.66714755,18.6133706 9.2938089,18.3317781 C9.39375058,17.6213819 9.67804414,17.1365297 9.99205009,16.86169 C7.54955646,16.5841493 4.98146045,15.6401056 4.98146045,11.4249977 C4.98146045,10.224347 5.41026428,9.24181221 6.11390773,8.47334172 C6.00046042,8.19512569 5.62297799,7.07618404 6.22195279,5.56220265 C6.22195279,5.56220265 7.14506277,5.26642929 9.24653918,6.68992296 C10.12373,6.44547101 11.0650726,6.32392032 12.0003376,6.31919335 C12.9349274,6.32392032 13.8755947,6.44547101 14.7541361,6.68992296 C16.8542619,5.26642929 17.7760214,5.56220265 17.7760214,5.56220265 C18.3763467,7.07618404 17.9988643,8.19512569 17.8860923,8.47334172 C18.5910863,9.24181221 19.0165137,10.224347 19.0165137,11.4249977 C19.0165137,15.6509101 16.444366,16.5807729 13.9944443,16.8529114 C14.3888087,17.192578 14.7406305,17.863808 14.7406305,18.890236 C14.7406305,20.3603241 14.7271248,21.5467939 14.7271248,21.9073943 C14.7271248,22.2018171 14.9256576,22.5441849 15.4834403,22.4368151 C19.8511618,20.9788821 23,16.8589889 23,12.0003376 C23,5.92482888 18.0744958,1 11.9989871,1"}))}},447:function(e,n,t){"use strict";t.d(n,"a",function(){return c});var r=t(0),o=t.n(r),i=t(298);function u(){return(u=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}var c=function(e){return o.a.createElement(i.a,u({viewBox:"0 0 24 24",a11yTitle:"Slack"},e),o.a.createElement("path",{fill:"#6ECADC",fillRule:"evenodd",d:"M10.9829147,13.9325266 L10.0460003,11.1353533 L12.9732746,10.1548615 L13.910189,12.9520348 L10.9829147,13.9325266 Z M22.0848234,8.9814134 C19.8208835,1.4349469 16.5278799,-0.348763364 8.9814134,1.91517659 C1.4349469,4.17911654 -0.348763364,7.4721201 1.91517659,15.0185866 C4.17911654,22.5650531 7.4721201,24.3487634 15.0185866,22.0848234 C22.5650531,19.8208835 24.3487634,16.5278799 22.0848234,8.9814134 L22.0848234,8.9814134 Z M18.2429859,13.8523145 L16.8022969,14.3325442 L17.2825265,15.7732332 C17.4883393,16.3906714 17.1453181,17.0081096 16.5964841,17.2139223 C16.4592757,17.2825265 16.3220672,17.2825265 16.1848587,17.2825265 C15.704629,17.2825265 15.2930036,16.9395053 15.1557951,16.5278799 L14.6755654,15.0871908 L11.725583,16.0476502 L12.2058127,17.4883393 C12.4116254,18.1057774 12.0686042,18.7232156 11.5197703,18.9290283 C11.3825618,18.9976326 11.2453534,18.9976326 11.1081449,18.9976326 C10.6279152,18.9976326 10.2162897,18.6546114 10.0790813,18.2429859 L9.59885157,16.8022969 L8.15816251,17.2825265 C8.02095403,17.3511308 7.88374555,17.3511308 7.74653706,17.3511308 C7.26630738,17.3511308 6.85468193,17.0081096 6.71747345,16.5964841 C6.51166073,15.979046 6.85468193,15.3616078 7.40351586,15.1557951 L8.84420492,14.6755654 L7.88374555,11.7941873 L6.51166073,12.274417 C6.37445225,12.3430212 6.23724376,12.3430212 6.10003528,12.3430212 C5.6198056,12.3430212 5.20818015,12 5.07097167,11.5883746 C4.86515895,10.9709364 5.20818015,10.3534982 5.75701408,10.1476855 L7.19770314,9.66745581 L6.71747345,8.22676675 C6.51166073,7.60932858 6.78607769,6.92328617 7.40351586,6.71747345 C8.02095403,6.51166073 8.6383922,6.85468193 8.84420492,7.40351586 L9.3244346,8.84420492 L12.274417,7.88374555 L11.7941873,6.44305649 C11.5883746,5.82561832 11.9313958,5.20818015 12.4802297,5.00236743 C13.0976679,4.7965547 13.715106,5.13957591 13.9209187,5.68840984 L14.4011484,7.19770314 L15.8418375,6.71747345 C16.4592757,6.51166073 17.0767138,6.85468193 17.2825265,7.40351586 C17.4883393,8.02095403 17.1453181,8.6383922 16.5964841,8.84420492 L15.1557951,9.3244346 L16.1162545,12.1372085 L17.5569435,11.6569788 C18.1743817,11.4511661 18.7918198,11.7941873 18.9976326,12.3430212 C19.1348411,13.0290636 18.8604241,13.6465018 18.2429859,13.8523145 L18.2429859,13.8523145 Z"}))}}}]);
//# sourceMappingURL=2-9fe5d9be7a3fad3e1a53.js.map