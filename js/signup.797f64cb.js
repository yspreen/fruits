(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["signup"],{"20e0":function(t,e,c){},"460a":function(t,e,c){"use strict";e["a"]={}},"65f9":function(t,e,c){"use strict";c("20e0")},"6e3c":function(t,e,c){"use strict";c.r(e);var n=c("7a23");Object(n["u"])("data-v-0a4774f2");var s={class:"scrolling"},o={class:"container"},a={class:"row justify-content-center"},r={class:"row"},l={class:"col-12"},i={class:"row"},u={class:"col-12"},f={class:"form-check form-switch form-switch-lg w-100 d-flex"},b=Object(n["f"])("label",{class:"form-check-label",for:"flexSwitchCheckChecked"},"Yes, I'm Fine With Anonymous Crypto Payments Only",-1),d={class:"row"},g={class:"col-12 text-center"};function p(t,e,c,p,h,O){var j=Object(n["x"])("TypeSelector"),m=Object(n["x"])("FruitButton");return Object(n["r"])(),Object(n["e"])("div",s,[Object(n["f"])("div",o,[Object(n["f"])("div",a,[Object(n["h"])(j,{onToggled:e[0]||(e[0]=function(t){return O.toggle(0,t)}),state:t.storage.types[0],class:"selector",name:"Content Creator",icon:"camera-retro"},null,8,["state"]),Object(n["h"])(j,{onToggled:e[1]||(e[1]=function(t){return O.toggle(1,t)}),state:t.storage.types[1],class:"selector",name:"Viewer",icon:"mouse-pointer"},null,8,["state"]),Object(n["h"])(j,{onToggled:e[2]||(e[2]=function(t){return O.toggle(2,t)}),state:t.storage.types[2],class:"selector",name:"Investor",icon:"comments-dollar"},null,8,["state"])]),Object(n["f"])("div",r,[Object(n["f"])("div",l,[Object(n["G"])(Object(n["f"])("input",{"onUpdate:modelValue":e[3]||(e[3]=function(e){return t.storage.username=e}),type:"text",class:Object(n["n"])(["username-input",{enabled:O.showUserNameBar}]),placeholder:"Optional: Username On Other Platforms"},null,2),[[n["D"],t.storage.username]])])]),Object(n["f"])("div",i,[Object(n["f"])("div",u,[Object(n["f"])("div",f,[Object(n["G"])(Object(n["f"])("input",{"onUpdate:modelValue":e[4]||(e[4]=function(e){return t.storage.cryptoAccept=e}),class:"form-check-input",type:"checkbox",id:"flexSwitchCheckChecked"},null,512),[[n["C"],t.storage.cryptoAccept]]),b])])]),Object(n["f"])("div",d,[Object(n["f"])("div",g,[Object(n["h"])(m,{class:Object(n["n"])(["button",{enabled:O.showButton}]),title:"Next",onClick:e[5]||(e[5]=function(e){return t.$router.push("/email")})},null,8,["class"])])])])])}Object(n["s"])();c("b0c0");Object(n["u"])("data-v-4353ac8a");var h={class:"col-12 col-md-6 col-lg-4"};function O(t,e,c,s,o,a){return Object(n["r"])(),Object(n["e"])("div",h,[Object(n["f"])("div",{class:Object(n["n"])(["square",{selected:o.selected}]),onClick:e[0]||(e[0]=function(){return a.toggle&&a.toggle.apply(a,arguments)})},[Object(n["f"])("i",{class:Object(n["n"])(["fas","fa-"+c.icon])},null,2),Object(n["f"])("div",null,Object(n["A"])(c.name),1)],2)])}Object(n["s"])();var j={props:{icon:String,name:String,state:Boolean},data:function(){return{selected:this.state}},methods:{toggle:function(){this.selected=!this.selected,this.$emit("toggled",this.selected)}}};c("65f9");j.render=O,j.__scopeId="data-v-4353ac8a";var m=j,v=c("dbfa"),y=c("460a"),w={components:{TypeSelector:m,FruitButton:v["a"]},data:function(){return{storage:y["a"]}},methods:{toggle:function(t,e){this.storage.types[t]=e,0!=t||e||(this.storage.username="")}},beforeMount:function(){this.storage.types=this.storage.types||[!1,!1,!1]},computed:{showUserNameBar:function(){return this.storage.types[0]},showButton:function(){return this.storage.types.some((function(t){return t}))}}};c("b14a");w.render=p,w.__scopeId="data-v-0a4774f2";e["default"]=w},b0c0:function(t,e,c){var n=c("83ab"),s=c("9bf2").f,o=Function.prototype,a=o.toString,r=/^\s*function ([^ (]*)/,l="name";n&&!(l in o)&&s(o,l,{configurable:!0,get:function(){try{return a.call(this).match(r)[1]}catch(t){return""}}})},b14a:function(t,e,c){"use strict";c("eacf")},eacf:function(t,e,c){}}]);
//# sourceMappingURL=signup.797f64cb.js.map