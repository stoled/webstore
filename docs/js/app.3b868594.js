(function(t){function e(e){for(var n,i,u=e[0],s=e[1],c=e[2],d=0,p=[];d<u.length;d++)i=u[d],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&p.push(o[i][0]),o[i]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n]);l&&l(e);while(p.length)p.shift()();return a.push.apply(a,c||[]),r()}function r(){for(var t,e=0;e<a.length;e++){for(var r=a[e],n=!0,i=1;i<r.length;i++){var s=r[i];0!==o[s]&&(n=!1)}n&&(a.splice(e--,1),t=u(u.s=r[0]))}return t}var n={},o={app:0},a=[];function i(t){return u.p+"js/"+({about:"about"}[t]||t)+"."+{about:"0ca43364"}[t]+".js"}function u(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,u),r.l=!0,r.exports}u.e=function(t){var e=[],r=o[t];if(0!==r)if(r)e.push(r[2]);else{var n=new Promise((function(e,n){r=o[t]=[e,n]}));e.push(r[2]=n);var a,s=document.createElement("script");s.charset="utf-8",s.timeout=120,u.nc&&s.setAttribute("nonce",u.nc),s.src=i(t);var c=new Error;a=function(e){s.onerror=s.onload=null,clearTimeout(d);var r=o[t];if(0!==r){if(r){var n=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;c.message="Loading chunk "+t+" failed.\n("+n+": "+a+")",c.name="ChunkLoadError",c.type=n,c.request=a,r[1](c)}o[t]=void 0}};var d=setTimeout((function(){a({type:"timeout",target:s})}),12e4);s.onerror=s.onload=a,document.head.appendChild(s)}return Promise.all(e)},u.m=t,u.c=n,u.d=function(t,e,r){u.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},u.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.t=function(t,e){if(1&e&&(t=u(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(u.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)u.d(r,n,function(e){return t[e]}.bind(null,n));return r},u.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return u.d(e,"a",e),e},u.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},u.p="/",u.oe=function(t){throw console.error(t),t};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var d=0;d<s.length;d++)e(s[d]);var l=c;a.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"33e6":function(t,e,r){"use strict";var n=r("ff7d"),o=r.n(n);o.a},"56d7":function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("div",{attrs:{id:"nav"}},[r("router-link",{attrs:{to:"/"},domProps:{textContent:t._s(t.brand)}}),r("router-link",{attrs:{to:"/store"}},[t._v("Store")]),r("router-link",{attrs:{to:"/about"}},[t._v("About")])],1),r("router-view")],1)},a=[],i={data:function(){return{brand:"Webstore"}}},u=i,s=(r("5c0b"),r("2877")),c=Object(s["a"])(u,o,a,!1,null,null,null),d=c.exports,l=(r("d3b7"),r("8c4f")),p=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},f=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"home"},[r("h1",[t._v("Home page")])])}],m={},v=Object(s["a"])(m,p,f,!1,null,null,null),h=v.exports,b=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"home"},[r("div",[r("button",{attrs:{type:"button"},on:{click:t.showCheckout}},[r("span",[t._v("Cart: "+t._s(t.cartItemCount))])])]),r("div",[t.showProduct?r("div",{staticClass:"product"},[r("figure",{staticClass:"image"},[r("img",{attrs:{src:t.product.image}})]),r("div",[r("h2",{domProps:{textContent:t._s(t.product.title)}}),r("p",{domProps:{innerHTML:t._s(t.product.description)}}),r("p",[t._v(t._s(t._f("formatPrice")(t.product.price)))]),t.canAddToCart?r("button",{on:{click:t.addToCart}},[t._v(" Add ")]):r("button",[t._v(" Nope ")])])]):r("div",[r("div",[r("p",[t._v("First Name")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.order.firstName,expression:"order.firstName"}],attrs:{type:"text"},domProps:{value:t.order.firstName},on:{input:function(e){e.target.composing||t.$set(t.order,"firstName",e.target.value)}}})]),r("div",[r("p",[t._v("Last Name")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.order.lastName,expression:"order.lastName"}],attrs:{type:"text"},domProps:{value:t.order.lastName},on:{input:function(e){e.target.composing||t.$set(t.order,"lastName",e.target.value)}}})]),r("div",[r("pre",[t._v("          First Name: "+t._s(t.order.firstName)+"\n          Last Name: "+t._s(t.order.lastName)+"\n        ")])])])])])},g=[],_={data:function(){return{showProduct:!0,order:{firstName:"",lastName:""},product:{id:1,title:"Product 1",description:"<b>Lorem ipsum</b> dolor sit amet consectetur adipisicing elit.",price:99.99,image:r("fcd7"),availableInventory:5},cart:[]}},filters:{formatPrice:function(t){return"$"+t}},methods:{addToCart:function(){this.cart.push(this.product.id)},showCheckout:function(){this.showProduct=!this.showProduct}},computed:{cartItemCount:function(){return this.cart.length||""},canAddToCart:function(){return this.product.availableInventory>this.cartItemCount}}},y=_,w=(r("33e6"),Object(s["a"])(y,b,g,!1,null,null,null)),P=w.exports;n["a"].use(l["a"]);var N=[{path:"/",name:"home",component:h},{path:"/store",name:"store",component:P},{path:"/about",name:"about",component:function(){return r.e("about").then(r.bind(null,"f820"))}}],C=new l["a"]({mode:"history",base:"/",routes:N}),x=C;n["a"].config.productionTip=!1,new n["a"]({router:x,render:function(t){return t(d)}}).$mount("#app")},"5c0b":function(t,e,r){"use strict";var n=r("9c0c"),o=r.n(n);o.a},"9c0c":function(t,e,r){},fcd7:function(t,e,r){t.exports=r.p+"img/product-1.6003be9e.png"},ff7d:function(t,e,r){}});
//# sourceMappingURL=app.3b868594.js.map