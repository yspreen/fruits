(function(e){function t(t){for(var o,r,s=t[0],c=t[1],u=t[2],l=0,d=[];l<s.length;l++)r=s[l],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&d.push(i[r][0]),i[r]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(e[o]=c[o]);f&&f(t);while(d.length)d.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],o=!0,r=1;r<n.length;r++){var s=n[r];0!==i[s]&&(o=!1)}o&&(a.splice(t--,1),e=c(c.s=n[0]))}return e}var o={},r={app:0},i={app:0},a=[];function s(e){return c.p+"js/"+({email:"email",signup:"signup",success:"success"}[e]||e)+"."+{email:"3c9ed976",signup:"81437f03",success:"30825572"}[e]+".js"}function c(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n={email:1,signup:1,success:1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=new Promise((function(t,n){for(var o="css/"+({email:"email",signup:"signup",success:"success"}[e]||e)+"."+{email:"62fa2070",signup:"641941af",success:"74a798ea"}[e]+".css",i=c.p+o,a=document.getElementsByTagName("link"),s=0;s<a.length;s++){var u=a[s],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===o||l===i))return t()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){u=d[s],l=u.getAttribute("data-href");if(l===o||l===i)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var o=t&&t.target&&t.target.src||i,a=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");a.code="CSS_CHUNK_LOAD_FAILED",a.request=o,delete r[e],f.parentNode.removeChild(f),n(a)},f.href=i;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){r[e]=0})));var o=i[e];if(0!==o)if(o)t.push(o[2]);else{var a=new Promise((function(t,n){o=i[e]=[t,n]}));t.push(o[2]=a);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=s(e);var d=new Error;u=function(t){l.onerror=l.onload=null,clearTimeout(f);var n=i[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+o+": "+r+")",d.name="ChunkLoadError",d.type=o,d.request=r,n[1](d)}i[e]=void 0}};var f=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},c.m=e,c.c=o,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)c.d(n,o,function(t){return e[t]}.bind(null,o));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/",c.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var d=0;d<u.length;d++)t(u[d]);var f=l;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"14bc":function(e,t,n){"use strict";n("ff0f")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("7a23");function r(e,t,n,r,i,a){var s=Object(o["y"])("router-view");return Object(o["s"])(),Object(o["d"])(s,null,{default:Object(o["G"])((function(e){var t=e.Component;return[Object(o["i"])(o["a"],{name:i.transition,mode:"out-in"},{default:Object(o["G"])((function(){return[(Object(o["s"])(),Object(o["d"])(Object(o["z"])(t)))]})),_:2},1032,["name"])]})),_:1})}var i={data:function(){return{transition:""}},mounted:function(){var e=this;setTimeout((function(){e.transition="slide"}),1)}};n("b154");i.render=r;var a=i,s=n("9483");Object(s["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});n("d3b7"),n("3ca3"),n("ddb0");var c=n("6c02");Object(o["v"])("data-v-5058e570");var u={class:"scrolling",ref:"scrolling"},l={class:"toprow"},d=["src"],f=Object(o["g"])('<div class="hide-first text-row" data-v-5058e570><div class="limit-w" data-v-5058e570><h1 class="point-head" data-v-5058e570> Monetize your fanbase: Reliable. Fair. Secure. </h1><div class="point-body" data-v-5058e570> We welcome a diverse community of content creators. Stay in touch with your fans while providing exclusive content to earn money. <br data-v-5058e570><br data-v-5058e570> Don‘t be afraid of being kicked out because some platform changes the rules…we don’t pretend our business is something else than what it really is. This is our promise, and this is why we created onlyfruits.app! </div><h1 class="point-head" data-v-5058e570>We protect your content and your fans</h1><div class="point-body" data-v-5058e570> You create content for your fans. And we take care of the rest: We do not tolerate stolen or cloned content on our platform. This is ensured by our artificial intelligence. </div><h1 class="point-head" data-v-5058e570>Business relationship based on equal footing</h1><div class="point-body" data-v-5058e570> We only take a 15% cut – but offer much more for both you and your fans. You want to learn more? Sign up now! </div><h1 class="point-head" data-v-5058e570>For Viewers</h1><div class="point-body" data-v-5058e570> Get closer to your idols and people you follow online. Support their work on a reliable platform while remaining absolutely private. </div><h1 class="point-head" data-v-5058e570>Privacy and Security</h1><div class="point-body" data-v-5058e570> Privacy is at the core of our platform, so there won&#39;t be any nasty surprises on your bank statements. All payments are processed through secure means. Crypto is supported. We also securely identify every content creator through our validation partner. </div></div></div>',1);function p(e,t,n,r,i,a){var s=Object(o["y"])("FruitButton");return Object(o["s"])(),Object(o["e"])("div",u,[Object(o["f"])("div",l,[Object(o["f"])("img",{class:Object(o["o"])(["emoji",{startAnim:i.startAnim}]),src:"".concat(i.publicPath,"logo.png"),alt:"logo"},null,10,d),Object(o["i"])(s,{title:"Sign Up",onClick:a.signUp,class:"hide-first"},null,8,["onClick"]),Object(o["f"])("i",{class:"fas fa-chevron-down hide-first",onClick:t[0]||(t[0]=function(){return a.scrollDown&&a.scrollDown.apply(a,arguments)})})]),f],512)}Object(o["t"])();var h=n("dbfa"),b={data:function(){return{publicPath:"/",startAnim:!1}},components:{FruitButton:h["a"]},methods:{signUp:function(){this.$router.push("/signup")},scrollDown:function(){this.$refs.scrolling.scrollBy({top:.6*window.innerHeight,left:0,behavior:"smooth"})}},mounted:function(){this.startAnim=!0}};n("14bc");b.render=p,b.__scopeId="data-v-5058e570";var v=b,m=[{path:"/",name:"Home",component:v},{path:"/signup",name:"Signup",component:function(){return n.e("signup").then(n.bind(null,"6e3c"))}},{path:"/email",name:"Email",component:function(){return n.e("email").then(n.bind(null,"d43f"))}},{path:"/success",name:"Success",component:function(){return n.e("success").then(n.bind(null,"bb0d"))}}],g=Object(c["a"])({history:Object(c["b"])(),routes:m}),y=g,w=n("7707"),j=n.n(w);j.a.polyfill(),Object(o["c"])(a).use(y).mount("#app")},6104:function(e,t,n){},ab36:function(e,t,n){},b154:function(e,t,n){"use strict";n("ab36")},b1ff:function(e,t,n){"use strict";n("6104")},dbfa:function(e,t,n){"use strict";var o=n("7a23");function r(e,t,n,r,i,a){return Object(o["s"])(),Object(o["e"])("button",null,Object(o["B"])(n.title),1)}var i={props:{title:String}};n("b1ff");i.render=r,i.__scopeId="data-v-757fb701";t["a"]=i},ff0f:function(e,t,n){}});
//# sourceMappingURL=app.831897a5.js.map