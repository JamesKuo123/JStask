(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-58a7c134"],{"14c3":function(t,e,n){var r=n("c6b6"),c=n("9263");t.exports=function(t,e){var n=t.exec;if("function"===typeof n){var a=n.call(t,e);if("object"!==typeof a)throw TypeError("RegExp exec method returned something other than an Object or null");return a}if("RegExp"!==r(t))throw TypeError("RegExp#exec called on incompatible receiver");return c.call(t,e)}},5319:function(t,e,n){"use strict";var r=n("d784"),c=n("825a"),a=n("7b0b"),i=n("50c4"),o=n("a691"),u=n("1d80"),l=n("8aa5"),s=n("14c3"),f=Math.max,d=Math.min,p=Math.floor,h=/\$([$&'`]|\d\d?|<[^>]*>)/g,v=/\$([$&'`]|\d\d?)/g,g=function(t){return void 0===t?t:String(t)};r("replace",2,(function(t,e,n,r){var x=r.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,E=r.REPLACE_KEEPS_$0,k=x?"$":"$0";return[function(n,r){var c=u(this),a=void 0==n?void 0:n[t];return void 0!==a?a.call(n,c,r):e.call(String(c),n,r)},function(t,r){if(!x&&E||"string"===typeof r&&-1===r.indexOf(k)){var a=n(e,t,this,r);if(a.done)return a.value}var u=c(t),p=String(this),h="function"===typeof r;h||(r=String(r));var v=u.global;if(v){var R=u.unicode;u.lastIndex=0}var S=[];while(1){var $=s(u,p);if(null===$)break;if(S.push($),!v)break;var b=String($[0]);""===b&&(u.lastIndex=l(p,i(u.lastIndex),R))}for(var y="",A=0,I=0;I<S.length;I++){$=S[I];for(var m=String($[0]),P=f(d(o($.index),p.length),0),T=[],w=1;w<$.length;w++)T.push(g($[w]));var U=$.groups;if(h){var C=[m].concat(T,P,p);void 0!==U&&C.push(U);var N=String(r.apply(void 0,C))}else N=_(m,p,P,T,U,r);P>=A&&(y+=p.slice(A,P)+N,A=P+m.length)}return y+p.slice(A)}];function _(t,n,r,c,i,o){var u=r+t.length,l=c.length,s=v;return void 0!==i&&(i=a(i),s=h),e.call(o,s,(function(e,a){var o;switch(a.charAt(0)){case"$":return"$";case"&":return t;case"`":return n.slice(0,r);case"'":return n.slice(u);case"<":o=i[a.slice(1,-1)];break;default:var s=+a;if(0===s)return e;if(s>l){var f=p(s/10);return 0===f?e:f<=l?void 0===c[f-1]?a.charAt(1):c[f-1]+a.charAt(1):e}o=c[s-1]}return void 0===o?"":o}))}}))},"5c3a":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h2",[t._v("這是管理頁面")]),t.checkSuccess?n("router-view",{attrs:{token:t.token}}):t._e(),n("router-link",{attrs:{to:"/admin/coupons"}},[t._v("優惠活動")]),t._v(" | "),n("router-link",{attrs:{to:"/admin/product"}},[t._v("套房列表")]),t._v(" | ")],1)},c=[],a=(n("ac1f"),n("5319"),{data:function(){return{token:"",checkSuccess:!1}},created:function(){this.checkLogin()},methods:{checkLogin:function(){var t=this;this.token=document.cookie.replace(/(?:(?:^|.*;\s*)iscookie\s*=\s*([^;]*).*$)|^.*$/,"$1"),this.$http.defaults.headers.common.Authorization="Bearer ".concat(this.token);var e="".concat("https://course-ec-api.hexschool.io/api/","auth/check");this.$http.post(e,{api_token:this.token}).then((function(e){t.checkSuccess=!0})).catch((function(e){console.log(e.response),t.$router.push("/login")}))}}}),i=a,o=n("2877"),u=Object(o["a"])(i,r,c,!1,null,null,null);e["default"]=u.exports},6547:function(t,e,n){var r=n("a691"),c=n("1d80"),a=function(t){return function(e,n){var a,i,o=String(c(e)),u=r(n),l=o.length;return u<0||u>=l?t?"":void 0:(a=o.charCodeAt(u),a<55296||a>56319||u+1===l||(i=o.charCodeAt(u+1))<56320||i>57343?t?o.charAt(u):a:t?o.slice(u,u+2):i-56320+(a-55296<<10)+65536)}};t.exports={codeAt:a(!1),charAt:a(!0)}},"8aa5":function(t,e,n){"use strict";var r=n("6547").charAt;t.exports=function(t,e,n){return e+(n?r(t,e).length:1)}},9263:function(t,e,n){"use strict";var r=n("ad6d"),c=n("9f7f"),a=RegExp.prototype.exec,i=String.prototype.replace,o=a,u=function(){var t=/a/,e=/b*/g;return a.call(t,"a"),a.call(e,"a"),0!==t.lastIndex||0!==e.lastIndex}(),l=c.UNSUPPORTED_Y||c.BROKEN_CARET,s=void 0!==/()??/.exec("")[1],f=u||s||l;f&&(o=function(t){var e,n,c,o,f=this,d=l&&f.sticky,p=r.call(f),h=f.source,v=0,g=t;return d&&(p=p.replace("y",""),-1===p.indexOf("g")&&(p+="g"),g=String(t).slice(f.lastIndex),f.lastIndex>0&&(!f.multiline||f.multiline&&"\n"!==t[f.lastIndex-1])&&(h="(?: "+h+")",g=" "+g,v++),n=new RegExp("^(?:"+h+")",p)),s&&(n=new RegExp("^"+h+"$(?!\\s)",p)),u&&(e=f.lastIndex),c=a.call(d?n:f,g),d?c?(c.input=c.input.slice(v),c[0]=c[0].slice(v),c.index=f.lastIndex,f.lastIndex+=c[0].length):f.lastIndex=0:u&&c&&(f.lastIndex=f.global?c.index+c[0].length:e),s&&c&&c.length>1&&i.call(c[0],n,(function(){for(o=1;o<arguments.length-2;o++)void 0===arguments[o]&&(c[o]=void 0)})),c}),t.exports=o},"9f7f":function(t,e,n){"use strict";var r=n("d039");function c(t,e){return RegExp(t,e)}e.UNSUPPORTED_Y=r((function(){var t=c("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),e.BROKEN_CARET=r((function(){var t=c("^r","gy");return t.lastIndex=2,null!=t.exec("str")}))},ac1f:function(t,e,n){"use strict";var r=n("23e7"),c=n("9263");r({target:"RegExp",proto:!0,forced:/./.exec!==c},{exec:c})},ad6d:function(t,e,n){"use strict";var r=n("825a");t.exports=function(){var t=r(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},d784:function(t,e,n){"use strict";n("ac1f");var r=n("6eeb"),c=n("d039"),a=n("b622"),i=n("9263"),o=n("9112"),u=a("species"),l=!c((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),s=function(){return"$0"==="a".replace(/./,"$0")}(),f=a("replace"),d=function(){return!!/./[f]&&""===/./[f]("a","$0")}(),p=!c((function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var n="ab".split(t);return 2!==n.length||"a"!==n[0]||"b"!==n[1]}));t.exports=function(t,e,n,f){var h=a(t),v=!c((function(){var e={};return e[h]=function(){return 7},7!=""[t](e)})),g=v&&!c((function(){var e=!1,n=/a/;return"split"===t&&(n={},n.constructor={},n.constructor[u]=function(){return n},n.flags="",n[h]=/./[h]),n.exec=function(){return e=!0,null},n[h](""),!e}));if(!v||!g||"replace"===t&&(!l||!s||d)||"split"===t&&!p){var x=/./[h],E=n(h,""[t],(function(t,e,n,r,c){return e.exec===i?v&&!c?{done:!0,value:x.call(e,n,r)}:{done:!0,value:t.call(n,e,r)}:{done:!1}}),{REPLACE_KEEPS_$0:s,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:d}),k=E[0],_=E[1];r(String.prototype,t,k),r(RegExp.prototype,h,2==e?function(t,e){return _.call(t,this,e)}:function(t){return _.call(t,this)})}f&&o(RegExp.prototype[h],"sham",!0)}}}]);
//# sourceMappingURL=chunk-58a7c134.baf4c4ed.js.map