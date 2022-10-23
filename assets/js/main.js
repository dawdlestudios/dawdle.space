(()=>{var Ot=Object.create;var ct=Object.defineProperty;var Xt=Object.getOwnPropertyDescriptor;var Nt=Object.getOwnPropertyNames;var jt=Object.getPrototypeOf,Ft=Object.prototype.hasOwnProperty;var st=(o,l)=>()=>(l||o((l={exports:{}}).exports,l),l.exports);var Qt=(o,l,s,y)=>{if(l&&typeof l=="object"||typeof l=="function")for(let z of Nt(l))!Ft.call(o,z)&&z!==s&&ct(o,z,{get:()=>l[z],enumerable:!(y=Xt(l,z))||y.enumerable});return o};var nt=(o,l,s)=>(s=o!=null?Ot(jt(o)):{},Qt(l||!o||!o.__esModule?ct(s,"default",{value:o,enumerable:!0}):s,o));var gt=st((it,vt)=>{(function(o,l){typeof it=="object"&&typeof vt!="undefined"?vt.exports=l():typeof define=="function"&&define.amd?define(l):(o=o||self).barba=l()})(it,function(){function o(M,g){for(var i=0;i<g.length;i++){var v=g[i];v.enumerable=v.enumerable||!1,v.configurable=!0,"value"in v&&(v.writable=!0),Object.defineProperty(M,v.key,v)}}function l(M,g,i){return g&&o(M.prototype,g),i&&o(M,i),M}function s(){return(s=Object.assign||function(M){for(var g=1;g<arguments.length;g++){var i=arguments[g];for(var v in i)Object.prototype.hasOwnProperty.call(i,v)&&(M[v]=i[v])}return M}).apply(this,arguments)}function y(M,g){M.prototype=Object.create(g.prototype),M.prototype.constructor=M,M.__proto__=g}function z(M){return(z=Object.setPrototypeOf?Object.getPrototypeOf:function(g){return g.__proto__||Object.getPrototypeOf(g)})(M)}function A(M,g){return(A=Object.setPrototypeOf||function(i,v){return i.__proto__=v,i})(M,g)}function h(M,g,i){return(h=function(){if(typeof Reflect=="undefined"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(v){return!1}}()?Reflect.construct:function(v,c,q){var w=[null];w.push.apply(w,c);var F=new(Function.bind.apply(v,w));return q&&A(F,q.prototype),F}).apply(null,arguments)}function p(M){var g=typeof Map=="function"?new Map:void 0;return(p=function(i){if(i===null||Function.toString.call(i).indexOf("[native code]")===-1)return i;if(typeof i!="function")throw new TypeError("Super expression must either be null or a function");if(g!==void 0){if(g.has(i))return g.get(i);g.set(i,v)}function v(){return h(i,arguments,z(this).constructor)}return v.prototype=Object.create(i.prototype,{constructor:{value:v,enumerable:!1,writable:!0,configurable:!0}}),A(v,i)})(M)}function m(M,g){try{var i=M()}catch(v){return g(v)}return i&&i.then?i.then(void 0,g):i}typeof Symbol!="undefined"&&(Symbol.iterator||(Symbol.iterator=Symbol("Symbol.iterator"))),typeof Symbol!="undefined"&&(Symbol.asyncIterator||(Symbol.asyncIterator=Symbol("Symbol.asyncIterator")));var t,a="2.9.7",e=function(){};(function(M){M[M.off=0]="off",M[M.error=1]="error",M[M.warning=2]="warning",M[M.info=3]="info",M[M.debug=4]="debug"})(t||(t={}));var r=t.off,_=function(){function M(i){this.t=i}M.getLevel=function(){return r},M.setLevel=function(i){return r=t[i]};var g=M.prototype;return g.error=function(){for(var i=arguments.length,v=new Array(i),c=0;c<i;c++)v[c]=arguments[c];this.i(console.error,t.error,v)},g.warn=function(){for(var i=arguments.length,v=new Array(i),c=0;c<i;c++)v[c]=arguments[c];this.i(console.warn,t.warning,v)},g.info=function(){for(var i=arguments.length,v=new Array(i),c=0;c<i;c++)v[c]=arguments[c];this.i(console.info,t.info,v)},g.debug=function(){for(var i=arguments.length,v=new Array(i),c=0;c<i;c++)v[c]=arguments[c];this.i(console.log,t.debug,v)},g.i=function(i,v,c){v<=M.getLevel()&&i.apply(console,["["+this.t+"] "].concat(c))},M}(),x=E,b=L,u=T,n=U,R=B,V="/",k=new RegExp(["(\\\\.)","(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?"].join("|"),"g");function T(M,g){for(var i,v=[],c=0,q=0,w="",F=g&&g.delimiter||V,W=g&&g.whitelist||void 0,X=!1;(i=k.exec(M))!==null;){var N=i[0],H=i[1],K=i.index;if(w+=M.slice(q,K),q=K+N.length,H)w+=H[1],X=!0;else{var J="",ia=i[2],va=i[3],Ta=i[4],da=i[5];if(!X&&w.length){var qa=w.length-1,Ra=w[qa];(!W||W.indexOf(Ra)>-1)&&(J=Ra,w=w.slice(0,qa))}w&&(v.push(w),w="",X=!1);var ca=va||Ta,ba=J||F;v.push({name:ia||c++,prefix:J,delimiter:ba,optional:da==="?"||da==="*",repeat:da==="+"||da==="*",pattern:ca?j(ca):"[^"+O(ba===F?ba:ba+F)+"]+?"})}}return(w||q<M.length)&&v.push(w+M.substr(q)),v}function L(M,g){return function(i,v){var c=M.exec(i);if(!c)return!1;for(var q=c[0],w=c.index,F={},W=v&&v.decode||decodeURIComponent,X=1;X<c.length;X++)if(c[X]!==void 0){var N=g[X-1];F[N.name]=N.repeat?c[X].split(N.delimiter).map(function(H){return W(H,N)}):W(c[X],N)}return{path:q,index:w,params:F}}}function U(M,g){for(var i=new Array(M.length),v=0;v<M.length;v++)typeof M[v]=="object"&&(i[v]=new RegExp("^(?:"+M[v].pattern+")$",C(g)));return function(c,q){for(var w="",F=q&&q.encode||encodeURIComponent,W=!q||q.validate!==!1,X=0;X<M.length;X++){var N=M[X];if(typeof N!="string"){var H,K=c?c[N.name]:void 0;if(Array.isArray(K)){if(!N.repeat)throw new TypeError('Expected "'+N.name+'" to not repeat, but got array');if(K.length===0){if(N.optional)continue;throw new TypeError('Expected "'+N.name+'" to not be empty')}for(var J=0;J<K.length;J++){if(H=F(K[J],N),W&&!i[X].test(H))throw new TypeError('Expected all "'+N.name+'" to match "'+N.pattern+'"');w+=(J===0?N.prefix:N.delimiter)+H}}else if(typeof K!="string"&&typeof K!="number"&&typeof K!="boolean"){if(!N.optional)throw new TypeError('Expected "'+N.name+'" to be '+(N.repeat?"an array":"a string"))}else{if(H=F(String(K),N),W&&!i[X].test(H))throw new TypeError('Expected "'+N.name+'" to match "'+N.pattern+'", but got "'+H+'"');w+=N.prefix+H}}else w+=N}return w}}function O(M){return M.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function j(M){return M.replace(/([=!:$/()])/g,"\\$1")}function C(M){return M&&M.sensitive?"":"i"}function B(M,g,i){for(var v=(i=i||{}).strict,c=i.start!==!1,q=i.end!==!1,w=i.delimiter||V,F=[].concat(i.endsWith||[]).map(O).concat("$").join("|"),W=c?"^":"",X=0;X<M.length;X++){var N=M[X];if(typeof N=="string")W+=O(N);else{var H=N.repeat?"(?:"+N.pattern+")(?:"+O(N.delimiter)+"(?:"+N.pattern+"))*":N.pattern;g&&g.push(N),W+=N.optional?N.prefix?"(?:"+O(N.prefix)+"("+H+"))?":"("+H+")?":O(N.prefix)+"("+H+")"}}if(q)v||(W+="(?:"+O(w)+")?"),W+=F==="$"?"$":"(?="+F+")";else{var K=M[M.length-1],J=typeof K=="string"?K[K.length-1]===w:K===void 0;v||(W+="(?:"+O(w)+"(?="+F+"))?"),J||(W+="(?="+O(w)+"|"+F+")")}return new RegExp(W,C(i))}function E(M,g,i){return M instanceof RegExp?function(v,c){if(!c)return v;var q=v.source.match(/\((?!\?)/g);if(q)for(var w=0;w<q.length;w++)c.push({name:w,prefix:null,delimiter:null,optional:!1,repeat:!1,pattern:null});return v}(M,g):Array.isArray(M)?function(v,c,q){for(var w=[],F=0;F<v.length;F++)w.push(E(v[F],c,q).source);return new RegExp("(?:"+w.join("|")+")",C(q))}(M,g,i):function(v,c,q){return B(T(v,q),c,q)}(M,g,i)}x.match=function(M,g){var i=[];return L(E(M,i,g),i)},x.regexpToFunction=b,x.parse=u,x.compile=function(M,g){return U(T(M,g),g)},x.tokensToFunction=n,x.tokensToRegExp=R;var d={container:"container",history:"history",namespace:"namespace",prefix:"data-barba",prevent:"prevent",wrapper:"wrapper"},f=new(function(){function M(){this.o=d,this.u=new DOMParser}var g=M.prototype;return g.toString=function(i){return i.outerHTML},g.toDocument=function(i){return this.u.parseFromString(i,"text/html")},g.toElement=function(i){var v=document.createElement("div");return v.innerHTML=i,v},g.getHtml=function(i){return i===void 0&&(i=document),this.toString(i.documentElement)},g.getWrapper=function(i){return i===void 0&&(i=document),i.querySelector("["+this.o.prefix+'="'+this.o.wrapper+'"]')},g.getContainer=function(i){return i===void 0&&(i=document),i.querySelector("["+this.o.prefix+'="'+this.o.container+'"]')},g.removeContainer=function(i){document.body.contains(i)&&i.parentNode.removeChild(i)},g.addContainer=function(i,v){var c=this.getContainer();c?this.s(i,c):v.appendChild(i)},g.getNamespace=function(i){i===void 0&&(i=document);var v=i.querySelector("["+this.o.prefix+"-"+this.o.namespace+"]");return v?v.getAttribute(this.o.prefix+"-"+this.o.namespace):null},g.getHref=function(i){if(i.tagName&&i.tagName.toLowerCase()==="a"){if(typeof i.href=="string")return i.href;var v=i.getAttribute("href")||i.getAttribute("xlink:href");if(v)return this.resolveUrl(v.baseVal||v)}return null},g.resolveUrl=function(){for(var i=arguments.length,v=new Array(i),c=0;c<i;c++)v[c]=arguments[c];var q=v.length;if(q===0)throw new Error("resolveUrl requires at least one argument; got none.");var w=document.createElement("base");if(w.href=arguments[0],q===1)return w.href;var F=document.getElementsByTagName("head")[0];F.insertBefore(w,F.firstChild);for(var W,X=document.createElement("a"),N=1;N<q;N++)X.href=arguments[N],w.href=W=X.href;return F.removeChild(w),W},g.s=function(i,v){v.parentNode.insertBefore(i,v.nextSibling)},M}()),P=new(function(){function M(){this.h=[],this.v=-1}var g=M.prototype;return g.init=function(i,v){this.l="barba";var c={ns:v,scroll:{x:window.scrollX,y:window.scrollY},url:i};this.h.push(c),this.v=0;var q={from:this.l,index:0,states:[].concat(this.h)};window.history&&window.history.replaceState(q,"",i)},g.change=function(i,v,c){if(c&&c.state){var q=c.state,w=q.index;v=this.m(this.v-w),this.replace(q.states),this.v=w}else this.add(i,v);return v},g.add=function(i,v){var c=this.size,q=this.p(v),w={ns:"tmp",scroll:{x:window.scrollX,y:window.scrollY},url:i};this.h.push(w),this.v=c;var F={from:this.l,index:c,states:[].concat(this.h)};switch(q){case"push":window.history&&window.history.pushState(F,"",i);break;case"replace":window.history&&window.history.replaceState(F,"",i)}},g.update=function(i,v){var c=v||this.v,q=s({},this.get(c),{},i);this.set(c,q)},g.remove=function(i){i?this.h.splice(i,1):this.h.pop(),this.v--},g.clear=function(){this.h=[],this.v=-1},g.replace=function(i){this.h=i},g.get=function(i){return this.h[i]},g.set=function(i,v){return this.h[i]=v},g.p=function(i){var v="push",c=i,q=d.prefix+"-"+d.history;return c.hasAttribute&&c.hasAttribute(q)&&(v=c.getAttribute(q)),v},g.m=function(i){return Math.abs(i)>1?i>0?"forward":"back":i===0?"popstate":i>0?"back":"forward"},l(M,[{key:"current",get:function(){return this.h[this.v]}},{key:"state",get:function(){return this.h[this.h.length-1]}},{key:"previous",get:function(){return this.v<1?null:this.h[this.v-1]}},{key:"size",get:function(){return this.h.length}}]),M}()),I=function(M,g){try{var i=function(){if(!g.next.html)return Promise.resolve(M).then(function(v){var c=g.next;if(v){var q=f.toElement(v);c.namespace=f.getNamespace(q),c.container=f.getContainer(q),c.html=v,P.update({ns:c.namespace});var w=f.toDocument(v);document.title=w.title}})}();return Promise.resolve(i&&i.then?i.then(function(){}):void 0)}catch(v){return Promise.reject(v)}},D=x,Q={__proto__:null,update:I,nextTick:function(){return new Promise(function(M){window.requestAnimationFrame(M)})},pathToRegexp:D},S=function(){return window.location.origin},G=function(M){return M===void 0&&(M=window.location.href),aa(M).port},aa=function(M){var g,i=M.match(/:\d+/);if(i===null)/^http/.test(M)&&(g=80),/^https/.test(M)&&(g=443);else{var v=i[0].substring(1);g=parseInt(v,10)}var c,q=M.replace(S(),""),w={},F=q.indexOf("#");F>=0&&(c=q.slice(F+1),q=q.slice(0,F));var W=q.indexOf("?");return W>=0&&(w=ea(q.slice(W+1)),q=q.slice(0,W)),{hash:c,path:q,port:g,query:w}},ea=function(M){return M.split("&").reduce(function(g,i){var v=i.split("=");return g[v[0]]=v[1],g},{})},_a=function(M){return M===void 0&&(M=window.location.href),M.replace(/(\/#.*|\/|#.*)$/,"")},$={__proto__:null,getHref:function(){return window.location.href},getOrigin:S,getPort:G,getPath:function(M){return M===void 0&&(M=window.location.href),aa(M).path},parse:aa,parseQuery:ea,clean:_a};function ra(M,g,i){return g===void 0&&(g=2e3),new Promise(function(v,c){var q=new XMLHttpRequest;q.onreadystatechange=function(){if(q.readyState===XMLHttpRequest.DONE){if(q.status===200)v(q.responseText);else if(q.status){var w={status:q.status,statusText:q.statusText};i(M,w),c(w)}}},q.ontimeout=function(){var w=new Error("Timeout error ["+g+"]");i(M,w),c(w)},q.onerror=function(){var w=new Error("Fetch error");i(M,w),c(w)},q.open("GET",M),q.timeout=g,q.setRequestHeader("Accept","text/html,application/xhtml+xml,application/xml"),q.setRequestHeader("x-barba","yes"),q.send()})}var oa=function(M){return!!M&&(typeof M=="object"||typeof M=="function")&&typeof M.then=="function"};function pa(M,g){return g===void 0&&(g={}),function(){for(var i=arguments.length,v=new Array(i),c=0;c<i;c++)v[c]=arguments[c];var q=!1,w=new Promise(function(F,W){g.async=function(){return q=!0,function(N,H){N?W(N):F(H)}};var X=M.apply(g,v);q||(oa(X)?X.then(F,W):F(X))});return w}}var ma=new(function(M){function g(){var v;return(v=M.call(this)||this).logger=new _("@barba/core"),v.all=["ready","page","reset","currentAdded","currentRemoved","nextAdded","nextRemoved","beforeOnce","once","afterOnce","before","beforeLeave","leave","afterLeave","beforeEnter","enter","afterEnter","after"],v.registered=new Map,v.init(),v}y(g,M);var i=g.prototype;return i.init=function(){var v=this;this.registered.clear(),this.all.forEach(function(c){v[c]||(v[c]=function(q,w){v.registered.has(c)||v.registered.set(c,new Set),v.registered.get(c).add({ctx:w||{},fn:q})})})},i.do=function(v){for(var c=this,q=arguments.length,w=new Array(q>1?q-1:0),F=1;F<q;F++)w[F-1]=arguments[F];if(this.registered.has(v)){var W=Promise.resolve();return this.registered.get(v).forEach(function(X){W=W.then(function(){return pa(X.fn,X.ctx).apply(void 0,w)})}),W.catch(function(X){c.logger.debug("Hook error ["+v+"]"),c.logger.error(X)})}return Promise.resolve()},i.clear=function(){var v=this;this.all.forEach(function(c){delete v[c]}),this.init()},i.help=function(){this.logger.info("Available hooks: "+this.all.join(","));var v=[];this.registered.forEach(function(c,q){return v.push(q)}),this.logger.info("Registered hooks: "+v.join(","))},g}(e)),ta=function(){function M(g){if(this.P=[],typeof g=="boolean")this.g=g;else{var i=Array.isArray(g)?g:[g];this.P=i.map(function(v){return D(v)})}}return M.prototype.checkHref=function(g){if(typeof this.g=="boolean")return this.g;var i=aa(g).path;return this.P.some(function(v){return v.exec(i)!==null})},M}(),sa=function(M){function g(v){var c;return(c=M.call(this,v)||this).k=new Map,c}y(g,M);var i=g.prototype;return i.set=function(v,c,q){return this.k.set(v,{action:q,request:c}),{action:q,request:c}},i.get=function(v){return this.k.get(v)},i.getRequest=function(v){return this.k.get(v).request},i.getAction=function(v){return this.k.get(v).action},i.has=function(v){return!this.checkHref(v)&&this.k.has(v)},i.delete=function(v){return this.k.delete(v)},i.update=function(v,c){var q=s({},this.k.get(v),{},c);return this.k.set(v,q),q},g}(ta),Y=function(){return!window.history.pushState},Z=function(M){return!M.el||!M.href},la=function(M){var g=M.event;return g.which>1||g.metaKey||g.ctrlKey||g.shiftKey||g.altKey},ya=function(M){var g=M.el;return g.hasAttribute("target")&&g.target==="_blank"},ga=function(M){var g=M.el;return g.protocol!==void 0&&window.location.protocol!==g.protocol||g.hostname!==void 0&&window.location.hostname!==g.hostname},na=function(M){var g=M.el;return g.port!==void 0&&G()!==G(g.href)},ha=function(M){var g=M.el;return g.getAttribute&&typeof g.getAttribute("download")=="string"},za=function(M){return M.el.hasAttribute(d.prefix+"-"+d.prevent)},Pa=function(M){return Boolean(M.el.closest("["+d.prefix+"-"+d.prevent+'="all"]'))},ua=function(M){var g=M.href;return _a(g)===_a()&&G(g)===G()},Aa=function(M){function g(v){var c;return(c=M.call(this,v)||this).suite=[],c.tests=new Map,c.init(),c}y(g,M);var i=g.prototype;return i.init=function(){this.add("pushState",Y),this.add("exists",Z),this.add("newTab",la),this.add("blank",ya),this.add("corsDomain",ga),this.add("corsPort",na),this.add("download",ha),this.add("preventSelf",za),this.add("preventAll",Pa),this.add("sameUrl",ua,!1)},i.add=function(v,c,q){q===void 0&&(q=!0),this.tests.set(v,c),q&&this.suite.push(v)},i.run=function(v,c,q,w){return this.tests.get(v)({el:c,event:q,href:w})},i.checkLink=function(v,c,q){var w=this;return this.suite.some(function(F){return w.run(F,v,c,q)})},g}(ta),fa=function(M){function g(i,v){var c;v===void 0&&(v="Barba error");for(var q=arguments.length,w=new Array(q>2?q-2:0),F=2;F<q;F++)w[F-2]=arguments[F];return(c=M.call.apply(M,[this].concat(w))||this).error=i,c.label=v,Error.captureStackTrace&&Error.captureStackTrace(function(W){if(W===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return W}(c),g),c.name="BarbaError",c}return y(g,M),g}(p(Error)),Ea=function(){function M(i){i===void 0&&(i=[]),this.logger=new _("@barba/core"),this.all=[],this.page=[],this.once=[],this.A=[{name:"namespace",type:"strings"},{name:"custom",type:"function"}],i&&(this.all=this.all.concat(i)),this.update()}var g=M.prototype;return g.add=function(i,v){switch(i){case"rule":this.A.splice(v.position||0,0,v.value);break;case"transition":default:this.all.push(v)}this.update()},g.resolve=function(i,v){var c=this;v===void 0&&(v={});var q=v.once?this.once:this.page;q=q.filter(v.self?function(K){return K.name&&K.name==="self"}:function(K){return!K.name||K.name!=="self"});var w=new Map,F=q.find(function(K){var J=!0,ia={};return!(!v.self||K.name!=="self")||(c.A.reverse().forEach(function(va){J&&(J=c.R(K,va,i,ia),K.from&&K.to&&(J=c.R(K,va,i,ia,"from")&&c.R(K,va,i,ia,"to")),K.from&&!K.to&&(J=c.R(K,va,i,ia,"from")),!K.from&&K.to&&(J=c.R(K,va,i,ia,"to")))}),w.set(K,ia),J)}),W=w.get(F),X=[];if(X.push(v.once?"once":"page"),v.self&&X.push("self"),W){var N,H=[F];Object.keys(W).length>0&&H.push(W),(N=this.logger).info.apply(N,["Transition found ["+X.join(",")+"]"].concat(H))}else this.logger.info("No transition found ["+X.join(",")+"]");return F},g.update=function(){var i=this;this.all=this.all.map(function(v){return i.T(v)}).sort(function(v,c){return v.priority-c.priority}).reverse().map(function(v){return delete v.priority,v}),this.page=this.all.filter(function(v){return v.leave!==void 0||v.enter!==void 0}),this.once=this.all.filter(function(v){return v.once!==void 0})},g.R=function(i,v,c,q,w){var F=!0,W=!1,X=i,N=v.name,H=N,K=N,J=N,ia=w?X[w]:X,va=w==="to"?c.next:c.current;if(w?ia&&ia[N]:ia[N]){switch(v.type){case"strings":default:var Ta=Array.isArray(ia[H])?ia[H]:[ia[H]];va[H]&&Ta.indexOf(va[H])!==-1&&(W=!0),Ta.indexOf(va[H])===-1&&(F=!1);break;case"object":var da=Array.isArray(ia[K])?ia[K]:[ia[K]];va[K]?(va[K].name&&da.indexOf(va[K].name)!==-1&&(W=!0),da.indexOf(va[K].name)===-1&&(F=!1)):F=!1;break;case"function":ia[J](c)?W=!0:F=!1}W&&(w?(q[w]=q[w]||{},q[w][N]=X[w][N]):q[N]=X[N])}return F},g.O=function(i,v,c){var q=0;return(i[v]||i.from&&i.from[v]||i.to&&i.to[v])&&(q+=Math.pow(10,c),i.from&&i.from[v]&&(q+=1),i.to&&i.to[v]&&(q+=2)),q},g.T=function(i){var v=this;i.priority=0;var c=0;return this.A.forEach(function(q,w){c+=v.O(i,q.name,w+1)}),i.priority=c,i},M}(),wa=function(){function M(i){i===void 0&&(i=[]),this.logger=new _("@barba/core"),this.S=!1,this.store=new Ea(i)}var g=M.prototype;return g.get=function(i,v){return this.store.resolve(i,v)},g.doOnce=function(i){var v=i.data,c=i.transition;try{var q=function(){w.S=!1},w=this,F=c||{};w.S=!0;var W=m(function(){return Promise.resolve(w.j("beforeOnce",v,F)).then(function(){return Promise.resolve(w.once(v,F)).then(function(){return Promise.resolve(w.j("afterOnce",v,F)).then(function(){})})})},function(X){w.S=!1,w.logger.debug("Transition error [before/after/once]"),w.logger.error(X)});return Promise.resolve(W&&W.then?W.then(q):q())}catch(X){return Promise.reject(X)}},g.doPage=function(i){var v=i.data,c=i.transition,q=i.page,w=i.wrapper;try{var F=function(J){if(W)return J;X.S=!1},W=!1,X=this,N=c||{},H=N.sync===!0||!1;X.S=!0;var K=m(function(){function J(){return Promise.resolve(X.j("before",v,N)).then(function(){var va=!1;function Ta(qa){return va?qa:Promise.resolve(X.remove(v)).then(function(){return Promise.resolve(X.j("after",v,N)).then(function(){})})}var da=function(){if(H)return m(function(){return Promise.resolve(X.add(v,w)).then(function(){return Promise.resolve(X.j("beforeLeave",v,N)).then(function(){return Promise.resolve(X.j("beforeEnter",v,N)).then(function(){return Promise.resolve(Promise.all([X.leave(v,N),X.enter(v,N)])).then(function(){return Promise.resolve(X.j("afterLeave",v,N)).then(function(){return Promise.resolve(X.j("afterEnter",v,N)).then(function(){})})})})})})},function(ba){if(X.M(ba))throw new fa(ba,"Transition error [sync]")});var qa=function(ba){return va?ba:m(function(){var xa=function(){if(Ra!==!1)return Promise.resolve(X.add(v,w)).then(function(){return Promise.resolve(X.j("beforeEnter",v,N)).then(function(){return Promise.resolve(X.enter(v,N,Ra)).then(function(){return Promise.resolve(X.j("afterEnter",v,N)).then(function(){})})})})}();if(xa&&xa.then)return xa.then(function(){})},function(xa){if(X.M(xa))throw new fa(xa,"Transition error [before/after/enter]")})},Ra=!1,ca=m(function(){return Promise.resolve(X.j("beforeLeave",v,N)).then(function(){return Promise.resolve(Promise.all([X.leave(v,N),I(q,v)]).then(function(ba){return ba[0]})).then(function(ba){return Ra=ba,Promise.resolve(X.j("afterLeave",v,N)).then(function(){})})})},function(ba){if(X.M(ba))throw new fa(ba,"Transition error [before/after/leave]")});return ca&&ca.then?ca.then(qa):qa(ca)}();return da&&da.then?da.then(Ta):Ta(da)})}var ia=function(){if(H)return Promise.resolve(I(q,v)).then(function(){})}();return ia&&ia.then?ia.then(J):J()},function(J){throw X.S=!1,J.name&&J.name==="BarbaError"?(X.logger.debug(J.label),X.logger.error(J.error),J):(X.logger.debug("Transition error [page]"),X.logger.error(J),J)});return Promise.resolve(K&&K.then?K.then(F):F(K))}catch(J){return Promise.reject(J)}},g.once=function(i,v){try{return Promise.resolve(ma.do("once",i,v)).then(function(){return v.once?pa(v.once,v)(i):Promise.resolve()})}catch(c){return Promise.reject(c)}},g.leave=function(i,v){try{return Promise.resolve(ma.do("leave",i,v)).then(function(){return v.leave?pa(v.leave,v)(i):Promise.resolve()})}catch(c){return Promise.reject(c)}},g.enter=function(i,v,c){try{return Promise.resolve(ma.do("enter",i,v)).then(function(){return v.enter?pa(v.enter,v)(i,c):Promise.resolve()})}catch(q){return Promise.reject(q)}},g.add=function(i,v){try{return f.addContainer(i.next.container,v),ma.do("nextAdded",i),Promise.resolve()}catch(c){return Promise.reject(c)}},g.remove=function(i){try{return f.removeContainer(i.current.container),ma.do("currentRemoved",i),Promise.resolve()}catch(v){return Promise.reject(v)}},g.M=function(i){return i.message?!/Timeout error|Fetch error/.test(i.message):!i.status},g.j=function(i,v,c){try{return Promise.resolve(ma.do(i,v,c)).then(function(){return c[i]?pa(c[i],c)(v):Promise.resolve()})}catch(q){return Promise.reject(q)}},l(M,[{key:"isRunning",get:function(){return this.S},set:function(i){this.S=i}},{key:"hasOnce",get:function(){return this.store.once.length>0}},{key:"hasSelf",get:function(){return this.store.all.some(function(i){return i.name==="self"})}},{key:"shouldWait",get:function(){return this.store.all.some(function(i){return i.to&&!i.to.route||i.sync})}}]),M}(),Va=function(){function M(g){var i=this;this.names=["beforeLeave","afterLeave","beforeEnter","afterEnter"],this.byNamespace=new Map,g.length!==0&&(g.forEach(function(v){i.byNamespace.set(v.namespace,v)}),this.names.forEach(function(v){ma[v](i.L(v))}))}return M.prototype.L=function(g){var i=this;return function(v){var c=g.match(/enter/i)?v.next:v.current,q=i.byNamespace.get(c.namespace);return q&&q[g]?pa(q[g],q)(v):Promise.resolve()}},M}();Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector),Element.prototype.closest||(Element.prototype.closest=function(M){var g=this;do{if(g.matches(M))return g;g=g.parentElement||g.parentNode}while(g!==null&&g.nodeType===1);return null});var Ia={container:null,html:"",namespace:"",url:{hash:"",href:"",path:"",port:null,query:{}}};return new(function(){function M(){this.version=a,this.schemaPage=Ia,this.Logger=_,this.logger=new _("@barba/core"),this.plugins=[],this.hooks=ma,this.dom=f,this.helpers=Q,this.history=P,this.request=ra,this.url=$}var g=M.prototype;return g.use=function(i,v){var c=this.plugins;c.indexOf(i)>-1?this.logger.warn("Plugin ["+i.name+"] already installed."):typeof i.install=="function"?(i.install(this,v),c.push(i)):this.logger.warn("Plugin ["+i.name+'] has no "install" method.')},g.init=function(i){var v=i===void 0?{}:i,c=v.transitions,q=c===void 0?[]:c,w=v.views,F=w===void 0?[]:w,W=v.schema,X=W===void 0?d:W,N=v.requestError,H=v.timeout,K=H===void 0?2e3:H,J=v.cacheIgnore,ia=J!==void 0&&J,va=v.prefetchIgnore,Ta=va!==void 0&&va,da=v.preventRunning,qa=da!==void 0&&da,Ra=v.prevent,ca=Ra===void 0?null:Ra,ba=v.debug,xa=v.logLevel;if(_.setLevel((ba!==void 0&&ba)===!0?"debug":xa===void 0?"off":xa),this.logger.info(this.version),Object.keys(X).forEach(function(ka){d[ka]&&(d[ka]=X[ka])}),this.$=N,this.timeout=K,this.cacheIgnore=ia,this.prefetchIgnore=Ta,this.preventRunning=qa,this._=this.dom.getWrapper(),!this._)throw new Error("[@barba/core] No Barba wrapper found");this._.setAttribute("aria-live","polite"),this.q();var Ma=this.data.current;if(!Ma.container)throw new Error("[@barba/core] No Barba container found");if(this.cache=new sa(ia),this.prevent=new Aa(Ta),this.transitions=new wa(q),this.views=new Va(F),ca!==null){if(typeof ca!="function")throw new Error("[@barba/core] Prevent should be a function");this.prevent.add("preventCustom",ca)}this.history.init(Ma.url.href,Ma.namespace),this.B=this.B.bind(this),this.U=this.U.bind(this),this.D=this.D.bind(this),this.F(),this.plugins.forEach(function(ka){return ka.init()});var La=this.data;La.trigger="barba",La.next=La.current,La.current=s({},this.schemaPage),this.hooks.do("ready",La),this.once(La),this.q()},g.destroy=function(){this.q(),this.H(),this.history.clear(),this.hooks.clear(),this.plugins=[]},g.force=function(i){window.location.assign(i)},g.go=function(i,v,c){var q;if(v===void 0&&(v="barba"),this.transitions.isRunning)this.force(i);else if(!(q=v==="popstate"?this.history.current&&this.url.getPath(this.history.current.url)===this.url.getPath(i):this.prevent.run("sameUrl",null,null,i))||this.transitions.hasSelf)return v=this.history.change(i,v,c),c&&(c.stopPropagation(),c.preventDefault()),this.page(i,v,q)},g.once=function(i){try{var v=this;return Promise.resolve(v.hooks.do("beforeEnter",i)).then(function(){function c(){return Promise.resolve(v.hooks.do("afterEnter",i)).then(function(){})}var q=function(){if(v.transitions.hasOnce){var w=v.transitions.get(i,{once:!0});return Promise.resolve(v.transitions.doOnce({transition:w,data:i})).then(function(){})}}();return q&&q.then?q.then(c):c()})}catch(c){return Promise.reject(c)}},g.page=function(i,v,c){try{var q=function(){var X=w.data;return Promise.resolve(w.hooks.do("page",X)).then(function(){var N=m(function(){var H=w.transitions.get(X,{once:!1,self:c});return Promise.resolve(w.transitions.doPage({data:X,page:F,transition:H,wrapper:w._})).then(function(){w.q()})},function(){_.getLevel()===0&&w.force(X.current.url.href)});if(N&&N.then)return N.then(function(){})})},w=this;w.data.next.url=s({href:i},w.url.parse(i)),w.data.trigger=v;var F=w.cache.has(i)?w.cache.update(i,{action:"click"}).request:w.cache.set(i,w.request(i,w.timeout,w.onRequestError.bind(w,v)),"click").request,W=function(){if(w.transitions.shouldWait)return Promise.resolve(I(F,w.data)).then(function(){})}();return Promise.resolve(W&&W.then?W.then(q):q())}catch(X){return Promise.reject(X)}},g.onRequestError=function(i){this.transitions.isRunning=!1;for(var v=arguments.length,c=new Array(v>1?v-1:0),q=1;q<v;q++)c[q-1]=arguments[q];var w=c[0],F=c[1],W=this.cache.getAction(w);return this.cache.delete(w),!(this.$&&this.$(i,W,w,F)===!1||(W==="click"&&this.force(w),1))},g.prefetch=function(i){var v=this;this.cache.has(i)||this.cache.set(i,this.request(i,this.timeout,this.onRequestError.bind(this,"barba")).catch(function(c){v.logger.error(c)}),"prefetch")},g.F=function(){this.prefetchIgnore!==!0&&(document.addEventListener("mouseover",this.B),document.addEventListener("touchstart",this.B)),document.addEventListener("click",this.U),window.addEventListener("popstate",this.D)},g.H=function(){this.prefetchIgnore!==!0&&(document.removeEventListener("mouseover",this.B),document.removeEventListener("touchstart",this.B)),document.removeEventListener("click",this.U),window.removeEventListener("popstate",this.D)},g.B=function(i){var v=this,c=this.I(i);if(c){var q=this.dom.getHref(c);this.prevent.checkHref(q)||this.cache.has(q)||this.cache.set(q,this.request(q,this.timeout,this.onRequestError.bind(this,c)).catch(function(w){v.logger.error(w)}),"enter")}},g.U=function(i){var v=this.I(i);if(v)return this.transitions.isRunning&&this.preventRunning?(i.preventDefault(),void i.stopPropagation()):void this.go(this.dom.getHref(v),v,i)},g.D=function(i){this.go(this.url.getHref(),"popstate",i)},g.I=function(i){for(var v=i.target;v&&!this.dom.getHref(v);)v=v.parentNode;if(v&&!this.prevent.checkLink(v,i,this.dom.getHref(v)))return v},g.q=function(){var i=this.url.getHref(),v={container:this.dom.getContainer(),html:this.dom.getHtml(),namespace:this.dom.getNamespace(),url:s({href:i},this.url.parse(i))};this.C={current:v,next:s({},this.schemaPage),trigger:void 0},this.hooks.do("reset",this.data)},l(M,[{key:"data",get:function(){return this.C}},{key:"wrapper",get:function(){return this._}}]),M}())})});var yt=st((tt,_t)=>{(function(l,s){typeof tt=="object"&&typeof _t=="object"?_t.exports=s():typeof define=="function"&&define.amd?define("butterchurn",[],s):typeof tt=="object"?tt.butterchurn=s():l.butterchurn=s()})(window,function(){return function(o){var l={};function s(y){if(l[y])return l[y].exports;var z=l[y]={i:y,l:!1,exports:{}};return o[y].call(z.exports,z,z.exports,s),z.l=!0,z.exports}return s.m=o,s.c=l,s.d=function(y,z,A){s.o(y,z)||Object.defineProperty(y,z,{enumerable:!0,get:A})},s.r=function(y){typeof Symbol!="undefined"&&Symbol.toStringTag&&Object.defineProperty(y,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(y,"__esModule",{value:!0})},s.t=function(y,z){if(z&1&&(y=s(y)),z&8||z&4&&typeof y=="object"&&y&&y.__esModule)return y;var A=Object.create(null);if(s.r(A),Object.defineProperty(A,"default",{enumerable:!0,value:y}),z&2&&typeof y!="string")for(var h in y)s.d(A,h,function(p){return y[p]}.bind(null,h));return A},s.n=function(y){var z=y&&y.__esModule?function(){return y.default}:function(){return y};return s.d(z,"a",z),z},s.o=function(y,z){return Object.prototype.hasOwnProperty.call(y,z)},s.p="",s(s.s="./src/index.js")}({"./node_modules/ecma-proposal-math-extensions/reference-implementation/index.js":function(o,l,s){"use strict";{let y=(A,h)=>{var p=typeof h=="function",m=typeof h=="function",t=typeof h=="function";Object.defineProperty(Math,A,{configurable:p,enumerable:t,writable:m,value:h})};y("DEG_PER_RAD",Math.PI/180),y("RAD_PER_DEG",180/Math.PI);let z=new Float32Array(1);y("scale",function(h,p,m,t,a){return arguments.length===0?NaN:Number.isNaN(h)||Number.isNaN(p)||Number.isNaN(m)||Number.isNaN(t)||Number.isNaN(a)?NaN:h===1/0||h===-1/0?h:(h-p)*(a-t)/(m-p)+t}),y("fscale",function(h,p,m,t,a){return z[0]=Math.scale(h,p,m,t,a),z[0]}),y("clamp",function(h,p,m){return Math.min(m,Math.max(p,h))}),y("radians",function(h){return h*Math.DEG_PER_RAD}),y("degrees",function(h){return h*Math.RAD_PER_DEG})}},"./src/audio/audioLevels.js":function(o,l,s){"use strict";s.r(l),s.d(l,"default",function(){return h});function y(p,m){if(!(p instanceof m))throw new TypeError("Cannot call a class as a function")}function z(p,m){for(var t=0;t<m.length;t++){var a=m[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(p,a.key,a)}}function A(p,m,t){return m&&z(p.prototype,m),t&&z(p,t),p}var h=function(){function p(m){y(this,p),this.audio=m;var t;this.audio.audioContext?t=this.audio.audioContext.sampleRate:t=44100;var a=t/this.audio.fftSize,e=Math.clamp(Math.round(20/a)-1,0,this.audio.numSamps-1),r=Math.clamp(Math.round(320/a)-1,0,this.audio.numSamps-1),_=Math.clamp(Math.round(2800/a)-1,0,this.audio.numSamps-1),x=Math.clamp(Math.round(11025/a)-1,0,this.audio.numSamps-1);this.starts=[e,r,_],this.stops=[r,_,x],this.val=new Float32Array(3),this.imm=new Float32Array(3),this.att=new Float32Array(3),this.avg=new Float32Array(3),this.longAvg=new Float32Array(3),this.att.fill(1),this.avg.fill(1),this.longAvg.fill(1)}return A(p,[{key:"updateAudioLevels",value:function(t,a){if(this.audio.freqArray.length>0){var e=t;!p.isFiniteNumber(e)||e<15?e=15:e>144&&(e=144),this.imm.fill(0);for(var r=0;r<3;r++)for(var _=this.starts[r];_<this.stops[r];_++)this.imm[r]+=this.audio.freqArray[_];for(var x=0;x<3;x++){var b=void 0;this.imm[x]>this.avg[x]?b=.2:b=.5,b=p.adjustRateToFPS(b,30,e),this.avg[x]=this.avg[x]*b+this.imm[x]*(1-b),a<50?b=.9:b=.992,b=p.adjustRateToFPS(b,30,e),this.longAvg[x]=this.longAvg[x]*b+this.imm[x]*(1-b),this.longAvg[x]<.001?(this.val[x]=1,this.att[x]=1):(this.val[x]=this.imm[x]/this.longAvg[x],this.att[x]=this.avg[x]/this.longAvg[x])}}}},{key:"bass",get:function(){return this.val[0]}},{key:"bass_att",get:function(){return this.att[0]}},{key:"mid",get:function(){return this.val[1]}},{key:"mid_att",get:function(){return this.att[1]}},{key:"treb",get:function(){return this.val[2]}},{key:"treb_att",get:function(){return this.att[2]}}],[{key:"isFiniteNumber",value:function(t){return Number.isFinite(t)&&!Number.isNaN(t)}},{key:"adjustRateToFPS",value:function(t,a,e){return Math.pow(t,a/e)}}]),p}()},"./src/audio/audioProcessor.js":function(o,l,s){"use strict";s.r(l),s.d(l,"default",function(){return p});var y=s("./src/audio/fft.js");function z(m,t){if(!(m instanceof t))throw new TypeError("Cannot call a class as a function")}function A(m,t){for(var a=0;a<t.length;a++){var e=t[a];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(m,e.key,e)}}function h(m,t,a){return t&&A(m.prototype,t),a&&A(m,a),m}var p=function(){function m(t){z(this,m),this.numSamps=512,this.fftSize=this.numSamps*2,this.fft=new y.default(this.fftSize,512,!0),t&&(this.audioContext=t,this.audible=t.createDelay(),this.analyser=t.createAnalyser(),this.analyser.smoothingTimeConstant=0,this.analyser.fftSize=this.fftSize,this.audible.connect(this.analyser),this.analyserL=t.createAnalyser(),this.analyserL.smoothingTimeConstant=0,this.analyserL.fftSize=this.fftSize,this.analyserR=t.createAnalyser(),this.analyserR.smoothingTimeConstant=0,this.analyserR.fftSize=this.fftSize,this.splitter=t.createChannelSplitter(2),this.audible.connect(this.splitter),this.splitter.connect(this.analyserL,0),this.splitter.connect(this.analyserR,1)),this.timeByteArray=new Uint8Array(this.fftSize),this.timeByteArrayL=new Uint8Array(this.fftSize),this.timeByteArrayR=new Uint8Array(this.fftSize),this.timeArray=new Int8Array(this.fftSize),this.timeByteArraySignedL=new Int8Array(this.fftSize),this.timeByteArraySignedR=new Int8Array(this.fftSize),this.tempTimeArrayL=new Int8Array(this.fftSize),this.tempTimeArrayR=new Int8Array(this.fftSize),this.timeArrayL=new Int8Array(this.numSamps),this.timeArrayR=new Int8Array(this.numSamps)}return h(m,[{key:"sampleAudio",value:function(){this.analyser.getByteTimeDomainData(this.timeByteArray),this.analyserL.getByteTimeDomainData(this.timeByteArrayL),this.analyserR.getByteTimeDomainData(this.timeByteArrayR),this.processAudio()}},{key:"updateAudio",value:function(a,e,r){this.timeByteArray.set(a),this.timeByteArrayL.set(e),this.timeByteArrayR.set(r),this.processAudio()}},{key:"processAudio",value:function(){for(var a=0,e=0,r=0;a<this.fftSize;a++)this.timeArray[a]=this.timeByteArray[a]-128,this.timeByteArraySignedL[a]=this.timeByteArrayL[a]-128,this.timeByteArraySignedR[a]=this.timeByteArrayR[a]-128,this.tempTimeArrayL[a]=.5*(this.timeByteArraySignedL[a]+this.timeByteArraySignedL[r]),this.tempTimeArrayR[a]=.5*(this.timeByteArraySignedR[a]+this.timeByteArraySignedR[r]),a%2===0&&(this.timeArrayL[e]=this.tempTimeArrayL[a],this.timeArrayR[e]=this.tempTimeArrayR[a],e+=1),r=a;this.freqArray=this.fft.timeToFrequencyDomain(this.timeArray),this.freqArrayL=this.fft.timeToFrequencyDomain(this.timeByteArraySignedL),this.freqArrayR=this.fft.timeToFrequencyDomain(this.timeByteArraySignedR)}},{key:"connectAudio",value:function(a){a.connect(this.audible)}},{key:"disconnectAudio",value:function(a){a.disconnect(this.audible)}}]),m}()},"./src/audio/fft.js":function(o,l,s){"use strict";s.r(l),s.d(l,"default",function(){return h});function y(p,m){if(!(p instanceof m))throw new TypeError("Cannot call a class as a function")}function z(p,m){for(var t=0;t<m.length;t++){var a=m[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(p,a.key,a)}}function A(p,m,t){return m&&z(p.prototype,m),t&&z(p,t),p}var h=function(){function p(m,t){var a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1;y(this,p),this.samplesIn=m,this.samplesOut=t,this.equalize=a,this.NFREQ=t*2,this.equalize&&this.initEqualizeTable(),this.initBitRevTable(),this.initCosSinTable()}return A(p,[{key:"initEqualizeTable",value:function(){this.equalizeArr=new Float32Array(this.samplesOut);for(var t=1/this.samplesOut,a=0;a<this.samplesOut;a++)this.equalizeArr[a]=-.02*Math.log((this.samplesOut-a)*t)}},{key:"initBitRevTable",value:function(){this.bitrevtable=new Uint16Array(this.NFREQ);for(var t=0;t<this.NFREQ;t++)this.bitrevtable[t]=t;for(var a=0,e=0;e<this.NFREQ;e++){if(a>e){var r=this.bitrevtable[e];this.bitrevtable[e]=this.bitrevtable[a],this.bitrevtable[a]=r}for(var _=this.NFREQ>>1;_>=1&&a>=_;)a-=_,_>>=1;a+=_}}},{key:"initCosSinTable",value:function(){for(var t=2,a=0;t<=this.NFREQ;)a+=1,t<<=1;this.cossintable=[new Float32Array(a),new Float32Array(a)],t=2;for(var e=0;t<=this.NFREQ;){var r=-2*Math.PI/t;this.cossintable[0][e]=Math.cos(r),this.cossintable[1][e]=Math.sin(r),e+=1,t<<=1}}},{key:"timeToFrequencyDomain",value:function(t){for(var a=new Float32Array(this.NFREQ),e=new Float32Array(this.NFREQ),r=0;r<this.NFREQ;r++){var _=this.bitrevtable[r];_<this.samplesIn?a[r]=t[_]:a[r]=0,e[r]=0}for(var x=2,b=0;x<=this.NFREQ;){for(var u=this.cossintable[0][b],n=this.cossintable[1][b],R=1,V=0,k=x>>1,T=0;T<k;T++){for(var L=T;L<this.NFREQ;L+=x){var U=L+k,O=R*a[U]-V*e[U],j=R*e[U]+V*a[U];a[U]=a[L]-O,e[U]=e[L]-j,a[L]+=O,e[L]+=j}var C=R;R=C*u-V*n,V=V*u+C*n}x<<=1,b+=1}var B=new Float32Array(this.samplesOut);if(this.equalize)for(var E=0;E<this.samplesOut;E++)B[E]=this.equalizeArr[E]*Math.sqrt(a[E]*a[E]+e[E]*e[E]);else for(var d=0;d<this.samplesOut;d++)B[d]=Math.sqrt(a[d]*a[d]+e[d]*e[d]);return B}}]),p}()},"./src/blankPreset.js":function(o,l,s){var y,z;y=[],z=function(){var A={baseVals:{gammaadj:1.25,wave_g:.5,mv_x:12,warpscale:1,brighten:0,mv_y:9,wave_scale:1,echo_alpha:0,additivewave:0,sx:1,sy:1,warp:.01,red_blue:0,wave_mode:0,wave_brighten:0,wrap:0,zoomexp:1,fshader:0,wave_r:.5,echo_zoom:1,wave_smoothing:.75,warpanimspeed:1,wave_dots:0,wave_x:.5,wave_y:.5,zoom:1,solarize:0,modwavealphabyvolume:0,dx:0,cx:.5,dy:0,darken_center:0,cy:.5,invert:0,bmotionvectorson:0,rot:0,modwavealphaend:.95,wave_mystery:-.2,decay:.9,wave_a:1,wave_b:.5,rating:5,modwavealphastart:.75,darken:0,echo_orient:0,ib_r:.5,ib_g:.5,ib_b:.5,ib_a:0,ib_size:0,ob_r:.5,ob_g:.5,ob_b:.5,ob_a:0,ob_size:0,mv_dx:0,mv_dy:0,mv_a:0,mv_r:.5,mv_g:.5,mv_b:.5,mv_l:0},init_eqs:function(){var p={};return p},frame_eqs:function(p){return p.rkeys=["warp"],p.zoom=1.01+.02*p.treb_att,p.warp=.15+.25*p.bass_att,p},pixel_eqs:function(p){return p.warp=p.warp+p.rad*.15,p},waves:[{baseVals:{a:1,enabled:0,b:1,g:1,scaling:1,samples:512,additive:0,usedots:0,spectrum:0,r:1,smoothing:.5,thick:0,sep:0},init_eqs:function(p){return p.rkeys=[],p},frame_eqs:function(p){return p},point_eqs:""},{baseVals:{a:1,enabled:0,b:1,g:1,scaling:1,samples:512,additive:0,usedots:0,spectrum:0,r:1,smoothing:.5,thick:0,sep:0},init_eqs:function(p){return p.rkeys=[],p},frame_eqs:function(p){return p},point_eqs:""},{baseVals:{a:1,enabled:0,b:1,g:1,scaling:1,samples:512,additive:0,usedots:0,spectrum:0,r:1,smoothing:.5,thick:0,sep:0},init_eqs:function(p){return p.rkeys=[],p},frame_eqs:function(p){return p},point_eqs:""},{baseVals:{a:1,enabled:0,b:1,g:1,scaling:1,samples:512,additive:0,usedots:0,spectrum:0,r:1,smoothing:.5,thick:0,sep:0},init_eqs:function(p){return p.rkeys=[],p},frame_eqs:function(p){return p},point_eqs:""}],shapes:[{baseVals:{r2:0,a:1,enabled:0,b:0,tex_ang:0,thickoutline:0,g:0,textured:0,g2:1,tex_zoom:1,additive:0,border_a:.1,border_b:1,b2:0,a2:0,r:1,border_g:1,rad:.1,x:.5,y:.5,ang:0,sides:4,border_r:1},init_eqs:function(p){return p.rkeys=[],p},frame_eqs:function(p){return p}},{baseVals:{r2:0,a:1,enabled:0,b:0,tex_ang:0,thickoutline:0,g:0,textured:0,g2:1,tex_zoom:1,additive:0,border_a:.1,border_b:1,b2:0,a2:0,r:1,border_g:1,rad:.1,x:.5,y:.5,ang:0,sides:4,border_r:1},init_eqs:function(p){return p.rkeys=[],p},frame_eqs:function(p){return p}},{baseVals:{r2:0,a:1,enabled:0,b:0,tex_ang:0,thickoutline:0,g:0,textured:0,g2:1,tex_zoom:1,additive:0,border_a:.1,border_b:1,b2:0,a2:0,r:1,border_g:1,rad:.1,x:.5,y:.5,ang:0,sides:4,border_r:1},init_eqs:function(p){return p.rkeys=[],p},frame_eqs:function(p){return p}},{baseVals:{r2:0,a:1,enabled:0,b:0,tex_ang:0,thickoutline:0,g:0,textured:0,g2:1,tex_zoom:1,additive:0,border_a:.1,border_b:1,b2:0,a2:0,r:1,border_g:1,rad:.1,x:.5,y:.5,ang:0,sides:4,border_r:1},init_eqs:function(p){return p.rkeys=[],p},frame_eqs:function(p){return p}}],warp:`shader_body {
ret = texture2D(sampler_main, uv).rgb;
ret -= 0.004;
}
`,comp:`shader_body {
ret = texture2D(sampler_main, uv).rgb;
ret *= hue_shader;
}
`};return A}.apply(l,y),z!==void 0&&(o.exports=z)},"./src/equations/presetEquationRunner.js":function(o,l,s){"use strict";s.r(l),s.d(l,"default",function(){return p});var y=s("./src/utils.js");function z(m,t){if(!(m instanceof t))throw new TypeError("Cannot call a class as a function")}function A(m,t){for(var a=0;a<t.length;a++){var e=t[a];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(m,e.key,e)}}function h(m,t,a){return t&&A(m.prototype,t),a&&A(m,a),m}var p=function(){function m(t,a,e){z(this,m),this.preset=t,this.texsizeX=e.texsizeX,this.texsizeY=e.texsizeY,this.mesh_width=e.mesh_width,this.mesh_height=e.mesh_height,this.aspectx=e.aspectx,this.aspecty=e.aspecty,this.invAspectx=1/this.aspectx,this.invAspecty=1/this.aspecty,this.qs=y.default.range(1,33).map(function(r){return"q".concat(r)}),this.ts=y.default.range(1,9).map(function(r){return"t".concat(r)}),this.regs=y.default.range(100).map(function(r){return r<10?"reg0".concat(r):"reg".concat(r)}),this.initializeEquations(a)}return h(m,[{key:"initializeEquations",value:function(a){this.runVertEQs=this.preset.pixel_eqs!=="",this.mdVSQInit=null,this.mdVSRegs=null,this.mdVSFrame=null,this.mdVSUserKeys=null,this.mdVSFrameMap=null,this.mdVSShapes=null,this.mdVSUserKeysShapes=null,this.mdVSFrameMapShapes=null,this.mdVSWaves=null,this.mdVSUserKeysWaves=null,this.mdVSFrameMapWaves=null,this.mdVSQAfterFrame=null,this.gmegabuf=new Array(1048576).fill(0);var e={frame:a.frame,time:a.time,fps:a.fps,bass:a.bass,bass_att:a.bass_att,mid:a.mid,mid_att:a.mid_att,treb:a.treb,treb_att:a.treb_att,meshx:this.mesh_width,meshy:this.mesh_height,aspectx:this.invAspectx,aspecty:this.invAspecty,pixelsx:this.texsizeX,pixelsy:this.texsizeY,gmegabuf:this.gmegabuf};this.mdVS=Object.assign({},this.preset.baseVals,e),this.mdVS.megabuf=new Array(1048576).fill(0),this.mdVS.rand_start=new Float32Array([Math.random(),Math.random(),Math.random(),Math.random()]),this.mdVS.rand_preset=new Float32Array([Math.random(),Math.random(),Math.random(),Math.random()]);var r=this.qs.concat(this.regs,Object.keys(this.mdVS)),_=this.preset.init_eqs(y.default.cloneVars(this.mdVS));this.mdVSQInit=y.default.pick(_,this.qs),this.mdVSRegs=y.default.pick(_,this.regs);var x=y.default.pick(_,Object.keys(y.default.omit(_,r)));if(x.megabuf=_.megabuf,x.gmegabuf=_.gmegabuf,this.mdVSFrame=this.preset.frame_eqs(Object.assign({},this.mdVS,this.mdVSQInit,this.mdVSRegs,x)),this.mdVSUserKeys=Object.keys(y.default.omit(this.mdVSFrame,r)),this.mdVSFrameMap=y.default.pick(this.mdVSFrame,this.mdVSUserKeys),this.mdVSQAfterFrame=y.default.pick(this.mdVSFrame,this.qs),this.mdVSRegs=y.default.pick(this.mdVSFrame,this.regs),this.mdVSWaves=[],this.mdVSTWaveInits=[],this.mdVSUserKeysWaves=[],this.mdVSFrameMapWaves=[],this.preset.waves&&this.preset.waves.length>0)for(var b=0;b<this.preset.waves.length;b++){var u=this.preset.waves[b],n=u.baseVals;if(n.enabled!==0){var R=Object.assign({},n,e),V=this.qs.concat(this.ts,this.regs,Object.keys(R));Object.assign(R,this.mdVSQAfterFrame,this.mdVSRegs),R.megabuf=new Array(1048576).fill(0),u.init_eqs&&(R=u.init_eqs(R),this.mdVSRegs=y.default.pick(R,this.regs),Object.assign(R,n)),this.mdVSWaves.push(R),this.mdVSTWaveInits.push(y.default.pick(R,this.ts)),this.mdVSUserKeysWaves.push(Object.keys(y.default.omit(R,V))),this.mdVSFrameMapWaves.push(y.default.pick(R,this.mdVSUserKeysWaves[b]))}else this.mdVSWaves.push({}),this.mdVSTWaveInits.push({}),this.mdVSUserKeysWaves.push([]),this.mdVSFrameMapWaves.push({})}if(this.mdVSShapes=[],this.mdVSTShapeInits=[],this.mdVSUserKeysShapes=[],this.mdVSFrameMapShapes=[],this.preset.shapes&&this.preset.shapes.length>0)for(var k=0;k<this.preset.shapes.length;k++){var T=this.preset.shapes[k],L=T.baseVals;if(L.enabled!==0){var U=Object.assign({},L,e),O=this.qs.concat(this.ts,this.regs,Object.keys(U));Object.assign(U,this.mdVSQAfterFrame,this.mdVSRegs),U.megabuf=new Array(1048576).fill(0),T.init_eqs&&(U=T.init_eqs(U),this.mdVSRegs=y.default.pick(U,this.regs),Object.assign(U,L)),this.mdVSShapes.push(U),this.mdVSTShapeInits.push(y.default.pick(U,this.ts)),this.mdVSUserKeysShapes.push(Object.keys(y.default.omit(U,O))),this.mdVSFrameMapShapes.push(y.default.pick(U,this.mdVSUserKeysShapes[k]))}else this.mdVSShapes.push({}),this.mdVSTShapeInits.push({}),this.mdVSUserKeysShapes.push([]),this.mdVSFrameMapShapes.push({})}}},{key:"updatePreset",value:function(a,e){this.preset=a,this.initializeEquations(e)}},{key:"updateGlobals",value:function(a){this.texsizeX=a.texsizeX,this.texsizeY=a.texsizeY,this.mesh_width=a.mesh_width,this.mesh_height=a.mesh_height,this.aspectx=a.aspectx,this.aspecty=a.aspecty,this.invAspectx=1/this.aspectx,this.invAspecty=1/this.aspecty}},{key:"runFrameEquations",value:function(a){this.mdVSFrame=Object.assign({},this.mdVS,this.mdVSQInit,this.mdVSFrameMap,a),this.mdVSFrame=this.preset.frame_eqs(this.mdVSFrame),this.mdVSFrameMap=y.default.pick(this.mdVSFrame,this.mdVSUserKeys),this.mdVSQAfterFrame=y.default.pick(this.mdVSFrame,this.qs)}}]),m}()},"./src/image/imageTextures.js":function(o,l,s){"use strict";s.r(l),s.d(l,"default",function(){return h});function y(p,m){if(!(p instanceof m))throw new TypeError("Cannot call a class as a function")}function z(p,m){for(var t=0;t<m.length;t++){var a=m[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(p,a.key,a)}}function A(p,m,t){return m&&z(p.prototype,m),t&&z(p,t),p}var h=function(){function p(m){var t=this;y(this,p),this.gl=m,this.anisoExt=this.gl.getExtension("EXT_texture_filter_anisotropic")||this.gl.getExtension("MOZ_EXT_texture_filter_anisotropic")||this.gl.getExtension("WEBKIT_EXT_texture_filter_anisotropic"),this.samplers={},this.clouds2Image=new Image,this.clouds2Image.onload=function(){t.samplers.clouds2=t.gl.createTexture(),t.bindTexture(t.samplers.clouds2,t.clouds2Image,128,128)},this.clouds2Image.src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/4RP+RXhpZgAASUkqAAgAAAAJAA8BAgAGAAAAegAAABABAgAVAAAAgAAAABIBAwABAAAAAQAAABoBBQABAAAAoAAAABsBBQABAAAAqAAAACgBAwABAAAAAgAAADIBAgAUAAAAsAAAABMCAwABAAAAAQAAAGmHBAABAAAAxAAAAGYFAABDYW5vbgBDYW5vbiBQb3dlclNob3QgUzExMAAAAAAAAAAAAAAAAEgAAAABAAAASAAAAAEAAAAyMDAyOjAxOjE5IDE3OjMzOjIwABsAmoIFAAEAAABWAwAAnYIFAAEAAABeAwAAAJAHAAQAAAAwMjEwA5ACABQAAAAOAgAABJACABQAAAAiAgAAAZEHAAQAAAABAgMAApEFAAEAAAA+AwAAAZIKAAEAAABGAwAAApIFAAEAAABOAwAABJIKAAEAAABmAwAABZIFAAEAAABuAwAABpIFAAEAAAB2AwAAB5IDAAEAAAAFAAAACZIDAAEAAAAAAAAACpIFAAEAAAB+AwAAfJIHAJoBAACGAwAAhpIHAAgBAAA2AgAAAKAHAAQAAAAwMTAwAaADAAEAAAABAAAAAqAEAAEAAACAAAAAA6AEAAEAAACAAAAABaAEAAEAAAAwBQAADqIFAAEAAAAgBQAAD6IFAAEAAAAoBQAAEKIDAAEAAAACAAAAF6IDAAEAAAACAAAAAKMHAAEAAAADAAAAAAAAADIwMDI6MDE6MTkgMTc6MzM6MjAAMjAwMjowMToxOSAxNzozMzoyMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAQAAACoBAAAgAAAAuAAAACAAAAABAAAAgAIAAEgAAAAKAAAA/////wMAAACK+AIAAAABAL8BAADoAwAArQAAACAAAAAMAAEAAwAmAAAAHAQAAAIAAwAEAAAAaAQAAAMAAwAEAAAAcAQAAAQAAwAaAAAAeAQAAAAAAwAGAAAArAQAAAAAAwAEAAAAuAQAAAYAAgAgAAAAwAQAAAcAAgAYAAAA4AQAAAgABAABAAAAkc4UAAkAAgAgAAAA+AQAABAABAABAAAAAAAJAQ0AAwAEAAAAGAUAAAAAAABMAAIAAAAFAAAAAAAAAAQAAAABAAAAAQAAAAAAAAAAAAAAAwABAAEwAAD/////WgGtACAAYgC4AP//AAAAAAAAAAAAAP//SABABkAGAgCtANMAngAAAAAAAAAAADQAAACPAEYBtQAqAfT/AgABAAEAAAAAAAAAAAAEMAAAAAAAAAAAvwEAALgAJwEAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAElNRzpQb3dlclNob3QgUzExMCBKUEVHAAAAAAAAAAAARmlybXdhcmUgVmVyc2lvbiAxLjAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAMgAuQC5AABqGADOAAAAgE8SAJsAAAAEAAEAAgAEAAAAUjk4AAIABwAEAAAAMDEwMAEQAwABAAAAQAYAAAIQAwABAAAAsAQAAAAAAAAGAAMBAwABAAAABgAAABoBBQABAAAAtAUAABsBBQABAAAAvAUAACgBAwABAAAAAgAAAAECBAABAAAA9AUAAAICBAABAAAAuA0AAAAAAAC0AAAAAQAAALQAAAABAAAAaM5qp6ps7vXbS52etpVdo/tuYZ2wtrDFXnrx1HK+braKpineV1+3VFWVteo72Poc/9j/2wCEAAkGBggGBQkIBwgKCQkLDRYPDQwMDRwTFRAWIR0jIiEcIB8kKTQsJCcxJx4fLT0tMTY3Ojo6Iio/RD44QjM3OTYBCQkJDAoMFAwMFA8KCgoPGhoKChoaTxoaGhoaT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT//AABEIAHgAoAMBIQACEQEDEQH/xAGiAAABBQEBAQEBAQAAAAAAAAAAAQIDBAUGBwgJCgsQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+gEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoLEQACAQIEBAMEBwUEBAABAncAAQIDEQQFITEGEkFRB2FxEyIygQgUQpGhscEJIzNS8BVictEKFiQ04SXxFxgZGiYnKCkqNTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqCg4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2dri4+Tl5ufo6ery8/T19vf4+fr/2gAMAwEAAhEDEQA/AOdCcU4R11HMSLHTxFTAXy6PLxQIUJTglIDo9KtbWzjScNvnK/gtao1FkycjaO1ebWvOWvyR307RjZfM5zXoraacTW3DtkyD1PrWathui39q66cmoK+60OacU5O2xA8ZQlT2qBkrdfmYsiZMUwpxVCImXNRMntTERlaaRg0CN5Y8iniOszUlWOniOgQhj5o2UwDZS7KBFmAuoCnIAq69wUjIHPHWuaok5HTBtIqrbzXCMyAEDqCarPvGV6Yqlbb+Xch337kBTOd1RNHxgCrc+xKgNWAPxyD2qCWMAY7g81UJ83yJlGxCy4qJlzWqMyMpTClAjoxCUbDCniP2rK5qOVKkEdMA8ummPmgA2Vd0m1S4vMTIXjUEtjtUzdotrdLQcFeSXQfcQqJ2y/GaZL5fkhE5Y9TXPFt2Zu7K6IUinVWVW+XvjvSNCsceScsa0k1067kRT69NisY8mnC2YoWA4qL2KtcglyjcVVdd78daqnK3zImr/IheFgTkdKiZK6ou6MJKxGyUwrTJOxmjaS2WYqwjLHbnp9KBaeeB5MbZxzXLGVlfotzpcdbdXsQiKniOtSBfLppjoTE0NMdPiYxElSRmiSurAnZiSMTzmmKSDmpUdCpS1NvT0TUoHEjpGQcYC8n3qM6MJdxgYuF46VyyfI2ui6nQlzJPq+hDPo0qcKNz/wB0U54Es7co/wAzkcgdAamU01ZbtjUWnrsjDn+dzxiqpjYHK1aZDHJGQmM9ahe2zk+lbU5WZlOOhWZKjKV1nOddYTPLpptjztbcB2NTBXibaSUOOma4IWt+h2y3/Uj8rmlEdbJmLQpTjpTNlNCYnl00x1RI0x00x4oARd6tmPIPtW1o+uf2fGd+GORlcdffNZVaaqRt1NKc+R36HQxWsWoqbmGQ/MMkg4rL1bSdi5UV5fM4ys9LHfZNXXU599Lkd+FNMbSzGPmHNb85lyFaS32HgUx8pGcqK2g72M5aGY8fPSomSvRRwndafZfYtRCzL8rHFaPiPTTHKlxHGEjKhTj1ryKU/wB4uzR6dSPuPujF2YIzTxHxXamtuxyNPfuIY+KYY6okDHg4pHQIMsQKLhYhV0dtq8mr6aQ8loZRy390DNZVKqgr92aQpczKcd8+nXefLHAwVI6028nt7mTzIY/KJ5IB4qI3UuZO6fxIuSTjy21WzLmjXs9rKFidgM/dzxXTJeRECC5ZN5XPWscVTTlePxM0oS0s9kUriaIEiIKAPzrFup/3uBzmopU3fUqc0isTEQWftVWZ0dPlWuqNNr0RhKafqzOlh6mq7x12RZytHqssMcwSfy0wwyDuxRq2oCew8gxjdx1HT3rx6Uby9GenUdkc/wCSpPzdaV4WVeFJru226nLv8iFVc/eXFKYsCqi7omSIjHzS3EKSRZBJbHNOWwRMp4WjO/O0Z4NWUubuGParnafSsXFS0ZonYRo/Pwzcmk8gL0FbQgkjOUncfFK9sSU4JpkkzO+7Jz9atRV7mbk7WHpczAcOT9aUqzgu3Ud6lxSd1oylJvRkMgDZJJzVSTK9KqKJbIGJqJlzWiViG7nfW1/ZK8XJUDqT0q9q08V2sRiL5HAG35SD3Bryaalzps9KduWyKt1pjWoXzG2uRnkcCs+8ee2YKJUbIzx0Iq/bXemiRPs7IY15Ey7m+TA5BrPuNUDIyCMDnhs81rz3SsZ8tmXbFDe2DTKVzHwyk8n6Vl3944Zo04A7jvT9pp5oOTX1Mp5GVsnmtG21aEQKkikFRj604SFKJOmpWrHAYr9RUjMGXKcg9xW0WmYyTREwNN281qZkqphQRwacCMYPHvUPUpCPGhXORmqU0fNEXqEkV2j9qjKVoQa+GAALE47VPDezRYUOdo7V5CkelY0pb+eayOJt4PG1uSKxpEkQkkmp0T9StX8hnm5GCM1GUBzVXsIj+deFYge1NMTueuapyJURr2jMvTmqclq4PK4ohMJRIhGwNadgLolUjDMvcVtz217GfLc2PsuSQQdw7Uw2pU/MCK6FU6eWhg4afmWLeKFkZJcg9mFRzac8MSyMRhumKnns7PZvQOS6utLblaRMLyR9KhkhVVBDZzV21TFeysVXWoiK1MjttV8O/YWyXVgegFZRsTu4FeHdp2e63PWSvqupZtrbadpHFPnst4xgVDlqUkUX03ax7VEbNd3ByapSbFYDYKw4PPpTv7LdT0wRVq703J0XkBtlU7Sy7qje1yMMtJpoaaZWbTCZOB+FdVo+n/ZrRXaEh/pwacptxEo2ZZfRBLmQNskY8g1lXmm3VsS4IZaaxDvZ9NifZK35mUZbp7odD6jGK3jcotogmgUrWsp3tZ2sTGO+nqZr3Flco6JEEdc7eetLDoElxEH81Vz0FbQrOEby9530MZUlJ+7ppqOOgRxDMrqcdumaqz6Xa55YJnphqaxE5PRadgdGKWr17nd+cl4VFzGHAq0NEspRuRNp9K5vYxm3e6b2ZvzuK027CroNsPvLz6iql7oICFkOQO1RPCuMbp3a3Q41ruzWj2MG604xZJrInQoSVHPrXPB3NZEYlm6bM0gup0+SQttPXmt42W25DuRTW7ht6qXX1qxZSSSttZcqPWrjJPfXuiWrbGgFiADHBxW9p1z5dv8AvW3J2B7VbUeXuQnK/kM+0SyTt5GSg/ic8VUv7xpodrDn26Gs5wj0+LqXGT67dDFWLEhfkGo5nklyrE4qlC9vwJcrFRbJVl3GtO1njhTqQR61u4StYyU1civ7sSLtAJ981kSLnPJrelHlRhVlzM7yLTdTtJuu9Qe3NdBbGUorMFJxz2NcFPnUrWO2XK4lsdKCARg13bmBSurCGU4aMtn0qjJ4Xt3YnP0GK4pYbmk+X3bGyq2WvvFKTw5IpIRAR61Fc+Gttvvfn1GOlYeynHVq1uprzxfzKcCW1mdroXU8YIqQR2KA7AxPUgDGKiz3TKutjPnjic74jtB9TzT4p58Bc7yOm6tItrfoQ0mWEubtZf367l7DtUqq1w24gKg6kDpW0FFrm7Gc207dynKqqzAoOehFVmhLdFJ/CumKtuYN9gGnzuPlibmoXs5VJBXkH1qlVjtdEezlvYimtJEXLow/CqErIDWkZp7WZEotbnrsTkjrmphz1rGDutdToloxaK0EMkU9VGSKRDIQd4A9MVm+ZS0+F7selvPoNDuHw3T2oJWUlWH50r3Vn1HtqjG1LSmVS6DdzxxWQ+nTSTcghjXBKPs3Z/I6IvmV/vK7aWYptsp2jua0LG3tllLQZkK8dO9C95227g9FfcmuFnnUrtyF9BUthHhfLkjO0n14zXToo2WhiruV2JqFtFGNyxoSPUVztzrdzBJhdoVewFZJ8zs3dLY0a5dVu9yCTxLKUPyDd2NZE+tXDyF84J74rSMEiJSbKFxqFxMpDyuQe2azpN3dj+dbRlbYzkr7nvCJkYxsP95eDUqxyA584t7EVnTi+j5fLoaSa66+ZOM45orqMgooAYwqNhis5DQ0yMBio2Zm7ZrNu+5VrDNizPsdFI9CKjNrDCuEiCZ6kcVlKEd7fMtSe34DY2jV8YKknvzTLqUQcs+PwqJuyuVHU5TWtVeaX5coq/dGaxpLxpUw4zjvRFKwSepAF85SUGcdRVeaJh/DiqvZ2JsZ86sDz0qBo2xu/hq0yLHvy9KeK2pkvcdRWogpM0AIaYwqJAhNq1FcPKoHlIHHesZNqPu6vsWtXrou5HuK5YLzjjNZ1/c3YiIUZX+8vauec36LqbRivV9DNivriYlWOdo6HmrxleWIBgDx3HSpaugvZmDqFuWYgwKSPQVlsjxIym3BUgjmoXa+xT7lSOzd3PkAq3YZpby8vVASeNendBzWukt+nUz22Jo7S2v4A3lFGxzg1Rm0l4m+UMVPqKlSa03Q2k9T/9n4qqwQ2C6FUcJKhVwpbQ1vCsihOUlK0km1lS0VoSE2qiF4TrpDJE0aZJK5EgBF7pQGeoyWHrHyLxlrwklpeaZbWWmyFkkIa43/2P/bAEMAAgEBAQEBAgEBAQICAgICBAMCAgICBQQEAwQGBQYGBgUGBgYHCQgGBwkHBgYICwgJCgoKCgoGCAsMCwoMCQoKCv/bAEMBAgICAgICBQMDBQoHBgcKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCv/AABEIAIAAgAMBIgACEQEDEQH/xAAeAAACAwEAAwEBAAAAAAAAAAAGBwQFCAMBAgkACv/EADcQAAEDAwMDAgUDAgYCAwAAAAECAwQFBhEAEiEHMUETUQgiMmFxFIGRFaEjQlKxwdEW8ReCov/EABsBAAICAwEAAAAAAAAAAAAAAAUGAwQBAgcA/8QAMREAAgEDAwMCBQMDBQAAAAAAAQIDAAQRBRIhMUFRE3EiYYGRwaHR4QYU8BUjMnKx/9oADAMBAAIRAxEAPwDNEamJCR8v9tT4dJ3Zwn+2rSHStzaVBvOrSDShnBTpvDYpbIBqsi0QKRn0+QO2uwpJQQCjRFEpR8D+2uj1LIXjb/bWwfmtNvFDqaWE/LsHfXZFNB/y6uVU75uUjj7a6NwMfMEfjWd3Fa0f/DB0mtK7KpIum8KgUxqQ+0pmE2EqMlzOQFA/5MgZ/J1q2L1glUxsPtIbbitNpW80EgbwSO+PGsWWjUqhRZy/0Tqkh1OFgH78aaKLzm0i28SnlLddYwk+wGdJH9QafJd3QLtkdh4802aNeRwWxCjBHU+aA/iosex//ktysdPnN8SpAOymM/M1IUo7/wD6k8jS8uTpxPthCJL3yuJSFKGOwPY50wavS7gnU3+vro7i4QXkyA3naoc86FrhnVGqpQl1SvTI5QVZzycHR6zkmiiSMvkLwSevtQe7WJ5HcLyeRS/q0BHqLc9NIKjyB50Pz6cEkkj+2j2qUlDRWfrJSQEgdjqqRbKKkVMJe2uBO5KSngn20SW9t1OC1DjaTsMhaBKhBCWt23A841QVGnBaiQ3n86O67TGWigR1bsg7hjkHPnVFNiJSgpIyc8DRBDxVRhjigmVAAP041CcaW2rcgYI9tE82n5PCedVkqAUkgJ1uQDUXfFaZplIUMsqb2kHke2rGNSylf0g8+2j2rWvRZtbjvxXY7EV14tuymdxzknCiD9hnge+oU+110+WtoLS4hKylDiBwoe/+2gkVysgB80akhZCQao4lMCk528jXRykKJ3bfxq8jUopABT31KXSRn6NS7sVFjihNVM+Y5T24zr1FPIVt26I3aUoEkA9+2uCqaUuDKdShs1oQM0bVvpPAtizaDUKLKVIVUYaZcxTrQSpl4jBQPOE/7k6rK1QUU213PUmJVLeWG4zTSgoff8Ht/Op1239WbjjNqqMgKDLKW0hCQkAJAHYceNC8aprVNbW+nKErG7nxnnGlyG3vJcvIckHP8f4KNyz20QCxjqP4rlFq98KoZs5ptxmKuQQ4kZBK/PPtjx21U3NbopREMhKlgfOQex9taAhdK3uofT7/AMo6eUh2PBElXqOyn0bFKT9XJOQRuHccg6BKn0RvByUUyqI+pxbZWnCchSQcZyOMZxzqs97E5IwFweR3z86nS0dFByWyOD2x8qULduuOOfIwVcZOBquqaEUV9t1EMBQz3HjTz6c9OpUibLl1aKGIsMelIekfKncoHAB8nj9tK/qfDpiqu9Hp3KWyQCR3++q7XStcel4FSiAiLf5pTVmEhcl1aOQok8e+h2bTVBZJGD99HAYnQZKxCYSXHRt3LQFAZ+x17XBbjT0VpLURKNqcFwJ5Ufvpms9VUuEfvQC609gpZaWMqAcnjzxqslQwBx+2jGr0ZyI6WHmsKx/OqaXTu4KfxjxpgBDDNBDuU1t2HUKReHSW0yqB6D9NEhh+Q0jIWvcFBC/bgkhX3I8al1mQ5ULdj0gUeKw2zIW6hbKDuJICeSSf9I0c/Bn0Pi3xcL1o1iSmP6chKz6qcjaPlPB78Ej99D9etp63K1OtySfUMSU4zuAwCUqIz++Nc70q8huB6SHLJz9yaeNQt3hbe3Rhj7AUJMUc8fJru5S0+n9HI99EcOkFxO5ScY9hr2k0hIbPy+PbTCX3UEA2mg1ym7gfl51Hk0rCdwbOilVLUkkFGvC6SVEkI/IOrAkAqBlNBbkJQQQnODxqK7TFIPKNGTtFZS4d+AAMnOvU2dPqEN6bAhuuMxwPWdbbJSjPbJ8aw9xFEMk4FeSOSQ4UZqNY/V26LLpj1qR5CjT5K8uhP1oJKclJJ4+ka2DZLVgdROlbVDtKII9wohsKeDxG8Mn/AD4BI2naPPdWsxdOennSm511K27kulcCqlgKpUpxQ9FSwPpV7A++ovTq+Lw6IdUGJcSWmQuG56DjbUrc082T9IUONvn/AI0rana2msB1tjtlX4vG79x2/wDaYLO4udM2mcZjbjzinj1f6PXNEtfDtIYjts8+nETj1FEY3qz3JwNZJvGw566u4n0FbiTu419Ird6o2r18oaWnIiYr8mKlT0dXdteSCArGCMAY/wCNKq8ehtl2tMcl1LY8+SpSGkjsOcE/9aRrbULm0maKZfiHamiW1huI1dDxWGHOmU9tkPyIpSM5STqGKHBTIEea2VJB5GtFXzCob812AkIbUjgADHGgWo9OY7Sf1jrjYDhJQpRxxpktbidjlxig08MSjC81nbqPSKe3Wj/Twop9IbwrsFew0HzaeE8lPfTav+22WqissELUSd2DxjQRVKQGx8qPyddMsJA1qgz2pDvEK3LH519dunnRiPZfXiDc8OoxUU1x8IdUy6NqwrIBx3wSM6B/jNsG2aZ1fdlW5LbWJ0Rtx5pAyW1425J7HIAOmjYxrN8yqTb9UoEanKXT0h+ey8lTrxGcKScZRn2PnzpWdXKVKYvqo0559+U7EfLSJMiOW3HAnspSTnx57Ec65F/TyYuid3IGDjx710nV2zAo28Z/X2pVU+2JMJrZIVk9xrg6xDkLWww8lS0n5kA8jRo7NtiAwpF0SVNEK+YIQdwGq9u16ImOzWqO8l1qWne24MHI/wCD9jpvhugGEakEDrzS/Lb7gXYYJ+VCS6c5HUHkJ+dJyCR2OudJpEya86zGirce27m/TTnGOSSPbV7dM2FRkw0uOMqEuQWfkeSVIUMd0jkdxqM4HqK8qR6oZ9MEOlRxgeQdXBcJIp2HmqZt3jcFhxShvufX6ZWQuS84SlZJaSOMZ9tMzpz8RVmUmy5do120UuNPJBSyklG5eACSR3yB2++ll1F6rW69WZKItHTIUUFDD7rpGxefqwO478atrNtyFeVoR6o84gPeotC1NEDJB4PbQie3W/X02PGc9aKRTf2R3gVUXJRH59xuVSgRzGZcXuQ2CcIB8DXWHClMOIdlLKlA5yfHPfRk1bbkOElp9e5aBtzjwO2qmpNMxspTjPuPGjVnZpGB5FCLq7eQkY4o+HXyRYtowaBY4ALMlt5ySpeVhSQNwPH0nAI9hka6TPiakXWt2Rcqn23HUkrDaApJXwMjz7/zpRyWSpzcPOplOghLaHZLSi2VYCgNYk0PT2G5kyx79+awurXoOA3HjtVjWqgqq1FdVUVqbWCGyDhQOPOhK6KnV3VoVJdWG0AhAHkaNJUQrpbcVLSAVnd6iOVHuMaFrnp0tpKv1BJUgYIOpLeKFTtA6cVFNNKRknrzQLV5sV1agWjz/mPfQjVYSFLUWxx4zorqsBwun5cA6qJEEkH7edGIY1iHw0NkdpDzWvLB+KW9rXr0OpN1x55tbXpTQtsbkoOAQkqBwQBweccadHTfrT0wrFz1K5ruuWfOcl00x4s2SylTsde0JCl+OEgpBHP2GsvVG0ajCfUw7CIKDjKRqw6eyKjb9cbdMcPNKc2vMujhSc9jri6Tw+myrhdwwSPFdSaNyyk84OaPut/WO1oTkuzG6PFmul8LYrDBO5SMHIVu5UVcfg9u+l1Gvup0+lLRb0v/AA8ENtvEkNk8naNEd4dNl1J1+tNx0oU4srS0Owz4GfGltMo1VgTDGfWpKEqzwO+orW8WIARtgit5oC+d65BoaqIqqpSprkle71crKlHg50fdVevFq31ZdPt+NbyoU+PT249RloUNstaCT6pAAwo55P2Gh1+lSnt7CmS5nJScarUWstThbciFWOT8vYaIJqWcFjyPzVVrME4A4oErdLE1tamV5JOQfY6pqZeN22Sp1mkVd5lLowtKF8HTjh2HBfaSEIBJByPbQ/cnRhLzS5cTJOSSlQ7a2ttYEUmCaxNp5kTIFD1rfEHekScluoTjKaUseo2/yQnzg+NNinTqPdba36FN9cJA9RJGFJJ5wRpNW/02nTa81SGYpLrrwQkbfJONao6f/C3UunPTxd5Sn1LefdQlUb0+R3IP8aY7bW0jnRC3/LigdxpfqRMwHSl2/RH23Ni2SD7EauaRa1RlUaRLjxS4iMAp7YeQCcZx5AP8Z0aVyg0RgNvSZxafWfodSBzjjj+PxrzRK43aFX/Rwq9CccqLKmlNMvhRJIKcKT7j799GG1ZJIvhI3ePahY0x1k+LO3zS+juvtOBpvCcqHJAONV931CVP+R2GhWVY3oRjb/Gn51R6ET0Uin1i0LUHomIgyW2RvWF4PJH1DPck+4xxxpS3ZR61Zlddi16gNtnaU+m4nKT9xrW3vYL0BoSN3jIzxWJbSazOJQdv1xSlrFLbSokg5OqWRBSXDuIH50dVKmVCrOLMOEpz8J7aoa9Z1w0Vaf6tRZLBcA9NLjJG7PI/9aPRyDAVjzQhkJOQOK+lfxU/DzTVXM2enFkf4D6C4+7FbKxu85OcD8AaTUH4erjaeLrNGcSsKwpBbP8AbWtOiV5zKnVG00SptyUrOFpS8FA/YjPGnW3QrdrITOcpLaXQQTubwQR7++uKLok12zehIBz0I4x8iD+mK6h/qKQKokQnjrnmsCu9MJ8ajpZqNLWktpwoKTpe3TZtDZlrUI+1e3JCm+M6+md1dN7VuuCqPPpTW8NkNrQkAg447ayz1t6Ff0FMh5qlrKjnZhPnGhGqaZe6RIDL8St0I/Pir9nfW98pAGCOx/FZFbpkB2oKQ5BbbU2rAUrhK/tqxj2pa8qQp+tPMw1hISyMEpd57HGcHnPtgak3h0/uKbP/AEkeI6CFH6UEYOqef0lvNcb1XZDoWk7kJUrnOtreSHgsRXnVyOBXpd67Jst8xKdHMtfqAKLY+VQ8lKh3/OuUe2oVxRjPpAzv5LDn1t/Y++ulF6e1y9YZtp9paKgw5hlwpJ9XOePznU/p70tvqgXO8K3EfZEMFBTggLXgkDH7dtEi9hM2w4WqoFzGu5cmudk9B4NWvmImcoRGluBTkoJ4SnI5/OtnMdO2rdZgVKt1mNJgtsJERQQPTkYCRtxyO2SSeTu1nqk3TETV4dKVFTGUtwpkGQsJSnHPCjxp41S9alWbWVY1syI7UVhLf6mXJeAbYHOTvP8AqHAAz286llsrV1TEmfwKhW5uFZspj8mqjq58PfTe6KC7Vo8KNGU2hS1ORlggr5OMDkcax3UulMFfUVuO5MUhppe5DxPbHOONa2u2NVKBSlMUCVNkMuR0plPvpAaWvn6M4OPzpL1C3pcOovOymwXSFbVBOdufI/71pY288UpEDllPT81m5nieMGVQDUTqj1OrNm2221bF3PrdRGLLxaePJ5899DvTLqJROq9VpznVGC++mG2WnGwCQ8rOAT5z7/jXpUbcW+46mpI3kqyk9+NelvvtWe4h2nx0ZQ4CpJT3HnTFp2n3CpvHXnnoaDXt/AW2k8ccdRTerNsdGbepiq7SbPZSQz6qmxFUSkHt4IHP99KK7OtdlxnltsUKS4VEpfadOAMdsfcHVldvVKtVOkriQ3VRy4r/ABdijhQHYY8aUldil1TinkBSl87jotpmj78tdkk/9iaGX+rCMhbYAD2FfTe1PgzqHT+7UXJatwF6M1IC22ivDm0HI5Hn99Puh0+RTssKqLzzeMpTJBKk/bJ1CtaWzMbJizUOBBIWE5BB/BAP76vmySnn++hul6faxH14iefnkfT5e+aLXl1O/wDtv2+VedVdx04TlMtoajFS1FCvXZ3ZSe+PY41aaj1GK7LjlEd703ByheOx0VuohNAVxmqcTbJAaD698P3TisQZDDVDbZfeOQ+ngpP/AFoJY+Du3xUkzKrLalsDOWcFOD+f402Y9MqzVLdaqNS9V8kltxJIIGOBqPGl1OBGcDzO9RPClL57HQKXR9JkZXaDZx24+4HFEEvrxAVWTPv+M1k7qf03c6UXG5Kt+2W3S0slmSpsgd+/PfA/31VT+rw5XV7Tgxqi9HLzsh5IWXMA4wk8Jz/61qfqf0ypfUSkqnMtgzWo69iSTySOBrOVT+Fy8H6k2xVqTIbS4fmf2ZShOlG+0xrOUqyZU9CBnj+KN214J1BBwR1FI+5axbN0SRL9L0pTqgXGkNYQhWPA0QWv0pvrqJRAqgz5amow/wAJv1fkGMnsfHJ0Vv8ASGj9La+5Vbzt+XLisglpLUc7XecABXj8nTHoTFTdsaIbcguUlh0BSWW1J3ZcAyFecD/nWbRTI/pxnbjz+1YuJPTTe4z7UtbWoF2XPOYtepy1L/TIUpwOOhKUJQMq559j/Oqu+qXW4tYcRS6bMQzKQENMrQcqTjgcDkeR9tN+2enl4Wncypj8OO+AMu5SpaCnIzyPOrvrrU6bS7f/AFKKm1FfWgpSoqSTvxnA9iNMM+orZlSoDADH17mg8Nm90DklST+nYVmdfQq/6q4hX9CDKXRu3PvISEjPcjOf7Z1X3T0BlW/SHKtU7jhD0nQhxDIUoJ9yTjxnwNBV/dYep9r3K8+xXpYCuEoWtQBTnjH2Ol31P+IPqddDCI8utO7UIx6bR2p/cDv++rKanqbspVlA9v3qBtPsVBDBif8APFMWtWPSqdTnahIuultpwfSbmv8ApKUARhQye2Of20lbs6o2bDkriqrsJWxW0rbVuSr99ANzXLXZ29dSlur+XlS3CdLyvRW1rWsOg55I76MWupyoT6jbvpihtxp8LD4Bj61/RJHoRq8ZmNWFvJWyrcxIjultxP7juNXdEoJouRFqT7rSvqTJXuOffOvaIT6YBJOBxnU9ogpwBjVbTrSDAkxyMc9/5q7NcSOSvbxXtr9r9r920ZqrXhYBSQdQJjQIJx+dTVup7ajSNqknPtqCcAx1lTg5qllPvxcltwj8agSnqpIQSEuqB7nB51dqYjlRLo75BP2xquu+ZckWnoNqw0StqgH2lOYUUeQPzoHM/pRM7E4HYDJ+1EEw7hRxnueB96rabFcqrkmPJa9UNoBLK+x+bng9+NU9woj0+Utb1vtObAMteiR6ae+5I8du+plWqFah0t5VKbEV1xW4uuIO5IA4Bz986z71mvbqpRbmTUaqX429sNhyO4r03BnIWOfIxn8aA3N9CsigDnyen3olFayFDk0665W4Eq1v69HlyC00raWmlBSkKzwSPtwceQdYw+L3rDWLhqggJQ41FiI2RcnBWc/MtQAABJ8eO2tAWXcl2/p3WX3S4pwpVuWySl3I/wD1pQ9erfrM2c+0i3I8sFBcQtMTkI7c7e3PvoZNcPHcCQjj371aiCPGUB5rLNfviqyKYiTU2VrbQdiXHBnIz21CqNq1WpwUzaPDMhtxsLCmkZwD747aOLwgXNHt522avZjQiLWHEEp+dsDcBt9uSM/jVFRLZ6vWBSZF2dNHZSIzzKm5jbRStSRzwUkHgZznHfVxLkyLxgH9DVdo1j6nIpK31QaoylfqMEEDCgBoHl0OU7HVUm2VpS3wpvGc8d9ak6WVGL1IdnW51Ht6NMmuO+ozMGGHMEYKSBhJAPIOO5OfGqC//h1doNVcnUOnThGUopKS0HAoc9iO/wDHjUqak0bGNxz+lQtbK3xrX//Z",this.emptyImage=new Image,this.emptyImage.onload=function(){t.samplers.empty=t.gl.createTexture(),t.bindTexture(t.samplers.empty,t.emptyImage,1,1)},this.emptyImage.src="data:image/gif;base64,R0lGODlhAQABAIAAAAUEBAAAACwAAAAAAQABAAACAkQBADs="}return A(p,[{key:"bindTexture",value:function(t,a,e,r){if(this.gl.bindTexture(this.gl.TEXTURE_2D,t),this.gl.pixelStorei(this.gl.UNPACK_ALIGNMENT,1),this.gl.texImage2D(this.gl.TEXTURE_2D,0,this.gl.RGBA,e,r,0,this.gl.RGBA,this.gl.UNSIGNED_BYTE,a),this.gl.generateMipmap(this.gl.TEXTURE_2D),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_WRAP_S,this.gl.REPEAT),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_WRAP_T,this.gl.REPEAT),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_MIN_FILTER,this.gl.LINEAR_MIPMAP_LINEAR),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_MAG_FILTER,this.gl.LINEAR),this.anisoExt){var _=this.gl.getParameter(this.anisoExt.MAX_TEXTURE_MAX_ANISOTROPY_EXT);this.gl.texParameterf(this.gl.TEXTURE_2D,this.anisoExt.TEXTURE_MAX_ANISOTROPY_EXT,_)}}},{key:"loadExtraImages",value:function(t){var a=this;Object.keys(t).forEach(function(e){var r=t[e],_=r.data,x=r.width,b=r.height;if(!a.samplers[e]){var u=new Image;u.onload=function(){a.samplers[e]=a.gl.createTexture(),a.bindTexture(a.samplers[e],u,x,b)},u.src=_}})}},{key:"getTexture",value:function(t){var a=this.samplers[t];return a||this.samplers.clouds2}}]),p}()},"./src/index.js":function(o,l,s){"use strict";s.r(l),s.d(l,"default",function(){return e});var y=s("./node_modules/ecma-proposal-math-extensions/reference-implementation/index.js"),z=s.n(y),A=s("./src/presetBase.js"),h=s.n(A),p=s("./src/visualizer.js");function m(r,_){if(!(r instanceof _))throw new TypeError("Cannot call a class as a function")}function t(r,_){for(var x=0;x<_.length;x++){var b=_[x];b.enumerable=b.enumerable||!1,b.configurable=!0,"value"in b&&(b.writable=!0),Object.defineProperty(r,b.key,b)}}function a(r,_,x){return _&&t(r.prototype,_),x&&t(r,x),r}var e=function(){function r(){m(this,r)}return a(r,null,[{key:"createVisualizer",value:function(x,b,u){return new p.default(x,b,u)}}]),r}()},"./src/noise/noise.js":function(o,l,s){"use strict";s.r(l),s.d(l,"default",function(){return h});function y(p,m){if(!(p instanceof m))throw new TypeError("Cannot call a class as a function")}function z(p,m){for(var t=0;t<m.length;t++){var a=m[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(p,a.key,a)}}function A(p,m,t){return m&&z(p.prototype,m),t&&z(p,t),p}var h=function(){function p(m){y(this,p),this.gl=m,this.anisoExt=this.gl.getExtension("EXT_texture_filter_anisotropic")||this.gl.getExtension("MOZ_EXT_texture_filter_anisotropic")||this.gl.getExtension("WEBKIT_EXT_texture_filter_anisotropic"),this.noiseTexLQ=this.gl.createTexture(),this.noiseTexLQLite=this.gl.createTexture(),this.noiseTexMQ=this.gl.createTexture(),this.noiseTexHQ=this.gl.createTexture(),this.noiseTexVolLQ=this.gl.createTexture(),this.noiseTexVolHQ=this.gl.createTexture(),this.nTexArrLQ=p.createNoiseTex(256,1),this.nTexArrLQLite=p.createNoiseTex(32,1),this.nTexArrMQ=p.createNoiseTex(256,4),this.nTexArrHQ=p.createNoiseTex(256,8),this.nTexArrVolLQ=p.createNoiseVolTex(32,1),this.nTexArrVolHQ=p.createNoiseVolTex(32,4),this.bindTexture(this.noiseTexLQ,this.nTexArrLQ,256,256),this.bindTexture(this.noiseTexLQLite,this.nTexArrLQLite,32,32),this.bindTexture(this.noiseTexMQ,this.nTexArrMQ,256,256),this.bindTexture(this.noiseTexHQ,this.nTexArrHQ,256,256),this.bindTexture3D(this.noiseTexVolLQ,this.nTexArrVolLQ,32,32,32),this.bindTexture3D(this.noiseTexVolHQ,this.nTexArrVolHQ,32,32,32),this.noiseTexPointLQ=this.gl.createSampler(),m.samplerParameteri(this.noiseTexPointLQ,m.TEXTURE_MIN_FILTER,m.NEAREST_MIPMAP_NEAREST),m.samplerParameteri(this.noiseTexPointLQ,m.TEXTURE_MAG_FILTER,m.NEAREST),m.samplerParameteri(this.noiseTexPointLQ,m.TEXTURE_WRAP_S,m.REPEAT),m.samplerParameteri(this.noiseTexPointLQ,m.TEXTURE_WRAP_T,m.REPEAT)}return A(p,[{key:"bindTexture",value:function(t,a,e,r){if(this.gl.bindTexture(this.gl.TEXTURE_2D,t),this.gl.pixelStorei(this.gl.UNPACK_ALIGNMENT,1),this.gl.texImage2D(this.gl.TEXTURE_2D,0,this.gl.RGBA,e,r,0,this.gl.RGBA,this.gl.UNSIGNED_BYTE,a),this.gl.generateMipmap(this.gl.TEXTURE_2D),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_WRAP_S,this.gl.REPEAT),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_WRAP_T,this.gl.REPEAT),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_MIN_FILTER,this.gl.LINEAR_MIPMAP_LINEAR),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_MAG_FILTER,this.gl.LINEAR),this.anisoExt){var _=this.gl.getParameter(this.anisoExt.MAX_TEXTURE_MAX_ANISOTROPY_EXT);this.gl.texParameterf(this.gl.TEXTURE_2D,this.anisoExt.TEXTURE_MAX_ANISOTROPY_EXT,_)}}},{key:"bindTexture3D",value:function(t,a,e,r,_){if(this.gl.bindTexture(this.gl.TEXTURE_3D,t),this.gl.pixelStorei(this.gl.UNPACK_ALIGNMENT,1),this.gl.texImage3D(this.gl.TEXTURE_3D,0,this.gl.RGBA,e,r,_,0,this.gl.RGBA,this.gl.UNSIGNED_BYTE,a),this.gl.generateMipmap(this.gl.TEXTURE_3D),this.gl.texParameteri(this.gl.TEXTURE_3D,this.gl.TEXTURE_WRAP_S,this.gl.REPEAT),this.gl.texParameteri(this.gl.TEXTURE_3D,this.gl.TEXTURE_WRAP_T,this.gl.REPEAT),this.gl.texParameteri(this.gl.TEXTURE_3D,this.gl.TEXTURE_WRAP_R,this.gl.REPEAT),this.gl.texParameteri(this.gl.TEXTURE_3D,this.gl.TEXTURE_MIN_FILTER,this.gl.LINEAR_MIPMAP_LINEAR),this.gl.texParameteri(this.gl.TEXTURE_3D,this.gl.TEXTURE_MAG_FILTER,this.gl.LINEAR),this.anisoExt){var x=this.gl.getParameter(this.anisoExt.MAX_TEXTURE_MAX_ANISOTROPY_EXT);this.gl.texParameterf(this.gl.TEXTURE_3D,this.anisoExt.TEXTURE_MAX_ANISOTROPY_EXT,x)}}}],[{key:"fCubicInterpolate",value:function(t,a,e,r,_){var x=_*_,b=_*x,u=r-e-t+a,n=t-a-u,R=e-t,V=a;return u*b+n*x+R*_+V}},{key:"dwCubicInterpolate",value:function(t,a,e,r,_){for(var x=[],b=0;b<4;b++){var u=p.fCubicInterpolate(t[b]/255,a[b]/255,e[b]/255,r[b]/255,_);u=Math.clamp(u,0,1),x[b]=u*255}return x}},{key:"createNoiseVolTex",value:function(t,a){for(var e=t*t*t,r=new Uint8Array(e*4),_=a>1?216:256,x=_*.5,b=0;b<e;b++)r[b*4+0]=Math.floor(Math.random()*_+x),r[b*4+1]=Math.floor(Math.random()*_+x),r[b*4+2]=Math.floor(Math.random()*_+x),r[b*4+3]=Math.floor(Math.random()*_+x);var u=t*t,n=t;if(a>1){for(var R=0;R<t;R+=a)for(var V=0;V<t;V+=a)for(var k=0;k<t;k++)if(k%a!==0){for(var T=Math.floor(k/a)*a+t,L=R*u+V*n,U=[],O=[],j=[],C=[],B=0;B<4;B++)U[B]=r[L*4+(T-a)%t*4+B],O[B]=r[L*4+T%t*4+B],j[B]=r[L*4+(T+a)%t*4+B],C[B]=r[L*4+(T+a*2)%t*4+B];for(var E=k%a/a,d=p.dwCubicInterpolate(U,O,j,C,E),f=0;f<4;f++){var P=k*4+f;r[R*u*4+V*n*4+P]=d[f]}}for(var I=0;I<t;I+=a)for(var D=0;D<t;D++)for(var Q=0;Q<t;Q++)if(Q%a!==0){for(var S=Math.floor(Q/a)*a+t,G=I*u,aa=[],ea=[],_a=[],$=[],ra=0;ra<4;ra++){var oa=D*4+G*4+ra;aa[ra]=r[(S-a)%t*n*4+oa],ea[ra]=r[S%t*n*4+oa],_a[ra]=r[(S+a)%t*n*4+oa],$[ra]=r[(S+a*2)%t*n*4+oa]}for(var pa=Q%a/a,ma=p.dwCubicInterpolate(aa,ea,_a,$,pa),ta=0;ta<4;ta++){var sa=D*4+G*4+ta;r[Q*n*4+sa]=ma[ta]}}for(var Y=0;Y<t;Y++)for(var Z=0;Z<t;Z++)for(var la=0;la<t;la++)if(la%a!==0){for(var ya=Z*n,ga=Math.floor(la/a)*a+t,na=[],ha=[],za=[],Pa=[],ua=0;ua<4;ua++){var Aa=Y*4+ya*4+ua;na[ua]=r[(ga-a)%t*u*4+Aa],ha[ua]=r[ga%t*u*4+Aa],za[ua]=r[(ga+a)%t*u*4+Aa],Pa[ua]=r[(ga+a*2)%t*u*4+Aa]}for(var fa=Z%a/a,Ea=p.dwCubicInterpolate(na,ha,za,Pa,fa),wa=0;wa<4;wa++){var Va=Y*4+ya*4+wa;r[la*u*4+Va]=Ea[wa]}}}return r}},{key:"createNoiseTex",value:function(t,a){for(var e=t*t,r=new Uint8Array(e*4),_=a>1?216:256,x=_*.5,b=0;b<e;b++)r[b*4+0]=Math.floor(Math.random()*_+x),r[b*4+1]=Math.floor(Math.random()*_+x),r[b*4+2]=Math.floor(Math.random()*_+x),r[b*4+3]=Math.floor(Math.random()*_+x);if(a>1){for(var u=0;u<t;u+=a)for(var n=0;n<t;n++)if(n%a!==0){for(var R=Math.floor(n/a)*a+t,V=u*t,k=[],T=[],L=[],U=[],O=0;O<4;O++)k[O]=r[V*4+(R-a)%t*4+O],T[O]=r[V*4+R%t*4+O],L[O]=r[V*4+(R+a)%t*4+O],U[O]=r[V*4+(R+a*2)%t*4+O];for(var j=n%a/a,C=p.dwCubicInterpolate(k,T,L,U,j),B=0;B<4;B++)r[u*t*4+n*4+B]=C[B]}for(var E=0;E<t;E++)for(var d=0;d<t;d++)if(d%a!==0){for(var f=Math.floor(d/a)*a+t,P=[],I=[],D=[],Q=[],S=0;S<4;S++)P[S]=r[(f-a)%t*t*4+E*4+S],I[S]=r[f%t*t*4+E*4+S],D[S]=r[(f+a)%t*t*4+E*4+S],Q[S]=r[(f+a*2)%t*t*4+E*4+S];for(var G=d%a/a,aa=p.dwCubicInterpolate(P,I,D,Q,G),ea=0;ea<4;ea++)r[d*t*4+E*4+ea]=aa[ea]}}return r}}]),p}()},"./src/presetBase.js":function(o,l){var s=1e-5;window.sqr=function(A){return A*A},window.sqrt=function(A){return Math.sqrt(Math.abs(A))},window.log10=function(A){return Math.log(A)*Math.LOG10E},window.sign=function(A){return A>0?1:A<0?-1:0},window.rand=function(A){var h=Math.floor(A);return h<1?Math.random():Math.random()*h},window.randint=function(A){return Math.floor(rand(A))},window.bnot=function(A){return Math.abs(A)<s?1:0};function y(z){return isFinite(z)&&!isNaN(z)}window.pow=function(A,h){var p=Math.pow(A,h);return y(p)?p:0},window.div=function(A,h){return h===0?0:A/h},window.mod=function(A,h){if(h===0)return 0;var p=Math.floor(A)%Math.floor(h);return p},window.bitor=function(A,h){var p=Math.floor(A)|Math.floor(h);return p},window.bitand=function(A,h){var p=Math.floor(A)&Math.floor(h);return p},window.sigmoid=function(A,h){var p=1+Math.exp(-A*h);return Math.abs(p)>s?1/p:0},window.bor=function(A,h){return Math.abs(A)>s||Math.abs(h)>s?1:0},window.band=function(A,h){return Math.abs(A)>s&&Math.abs(h)>s?1:0},window.equal=function(A,h){return Math.abs(A-h)<s?1:0},window.above=function(A,h){return A>h?1:0},window.below=function(A,h){return A<h?1:0},window.ifcond=function(A,h,p){return Math.abs(A)>s?h:p},window.memcpy=function(A,h,p,m){var t=h,a=p,e=m;return a<0&&(e+=a,t-=a,a=0),t<0&&(e+=t,a-=t,t=0),e>0&&A.copyWithin(t,a,e),h}},"./src/rendering/blendPattern.js":function(o,l,s){"use strict";s.r(l),s.d(l,"default",function(){return h});function y(p,m){if(!(p instanceof m))throw new TypeError("Cannot call a class as a function")}function z(p,m){for(var t=0;t<m.length;t++){var a=m[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(p,a.key,a)}}function A(p,m,t){return m&&z(p.prototype,m),t&&z(p,t),p}var h=function(){function p(m){y(this,p),this.mesh_width=m.mesh_width,this.mesh_height=m.mesh_height,this.aspectx=m.aspectx,this.aspecty=m.aspecty,this.vertInfoA=new Float32Array((this.mesh_width+1)*(this.mesh_height+1)),this.vertInfoC=new Float32Array((this.mesh_width+1)*(this.mesh_height+1)),this.createBlendPattern()}return A(p,[{key:"updateGlobals",value:function(t){var a=this.mesh_width,e=this.mesh_height;this.mesh_width=t.mesh_width,this.mesh_height=t.mesh_height,this.aspectx=t.aspectx,this.aspecty=t.aspecty,(this.mesh_width!==a||this.mesh_height!==e)&&(this.vertInfoA=p.resizeMatrixValues(this.vertInfoA,a,e,this.mesh_width,this.mesh_height),this.vertInfoC=p.resizeMatrixValues(this.vertInfoC,a,e,this.mesh_width,this.mesh_height))}},{key:"genPlasma",value:function(t,a,e,r,_){var x=Math.floor((t+a)/2),b=Math.floor((e+r)/2),u=this.vertInfoC[e*(this.mesh_width+1)+t],n=this.vertInfoC[e*(this.mesh_width+1)+a],R=this.vertInfoC[r*(this.mesh_width+1)+t],V=this.vertInfoC[r*(this.mesh_width+1)+a];r-e>=2&&(t===0&&(this.vertInfoC[b*(this.mesh_width+1)+t]=.5*(u+R)+(Math.random()*2-1)*_*this.aspecty),this.vertInfoC[b*(this.mesh_width+1)+a]=.5*(n+V)+(Math.random()*2-1)*_*this.aspecty),a-t>=2&&(e===0&&(this.vertInfoC[e*(this.mesh_width+1)+x]=.5*(u+n)+(Math.random()*2-1)*_*this.aspectx),this.vertInfoC[r*(this.mesh_width+1)+x]=.5*(R+V)+(Math.random()*2-1)*_*this.aspectx),r-e>=2&&a-t>=2&&(u=this.vertInfoC[b*(this.mesh_width+1)+t],n=this.vertInfoC[b*(this.mesh_width+1)+a],R=this.vertInfoC[e*(this.mesh_width+1)+x],V=this.vertInfoC[r*(this.mesh_width+1)+x],this.vertInfoC[b*(this.mesh_width+1)+x]=.25*(R+V+u+n)+(Math.random()*2-1)*_,this.genPlasma(t,x,e,b,_*.5),this.genPlasma(x,a,e,b,_*.5),this.genPlasma(t,x,b,r,_*.5),this.genPlasma(x,a,b,r,_*.5))}},{key:"createBlendPattern",value:function(){var t=1+Math.floor(Math.random()*3);if(t===0)for(var a=0,e=0;e<=this.mesh_height;e++)for(var r=0;r<=this.mesh_width;r++)this.vertInfoA[a]=1,this.vertInfoC[a]=0,a+=1;else if(t===1)for(var _=Math.random()*6.28,x=Math.cos(_),b=Math.sin(_),u=.1+.2*Math.random(),n=1/u,R=0,V=0;V<=this.mesh_height;V++)for(var k=V/this.mesh_height*this.aspecty,T=0;T<=this.mesh_width;T++){var L=T/this.mesh_width*this.aspectx,U=(L-.5)*x+(k-.5)*b+.5;U=(U-.5)/Math.sqrt(2)+.5,this.vertInfoA[R]=n*(1+u),this.vertInfoC[R]=-n+n*U,R+=1}else if(t===2){var O=.12+.13*Math.random(),j=1/O;this.vertInfoC[0]=Math.random(),this.vertInfoC[this.mesh_width]=Math.random(),this.vertInfoC[this.mesh_height*(this.mesh_width+1)]=Math.random(),this.vertInfoC[this.mesh_height*(this.mesh_width+1)+this.mesh_width]=Math.random(),this.genPlasma(0,this.mesh_width,0,this.mesh_height,.25);for(var C=this.vertInfoC[0],B=this.vertInfoC[0],E=0,d=0;d<=this.mesh_height;d++)for(var f=0;f<=this.mesh_width;f++)C>this.vertInfoC[E]&&(C=this.vertInfoC[E]),B<this.vertInfoC[E]&&(B=this.vertInfoC[E]),E+=1;var P=1/(B-C);E=0;for(var I=0;I<=this.mesh_height;I++)for(var D=0;D<=this.mesh_width;D++){var Q=(this.vertInfoC[E]-C)*P;this.vertInfoA[E]=j*(1+O),this.vertInfoC[E]=-j+j*Q,E+=1}}else if(t===3)for(var S=.02+.14*Math.random()+.34*Math.random(),G=1/S,aa=Math.floor(Math.random()*2)*2-1,ea=0,_a=0;_a<=this.mesh_height;_a++)for(var $=(_a/this.mesh_height-.5)*this.aspecty,ra=0;ra<=this.mesh_width;ra++){var oa=(ra/this.mesh_width-.5)*this.aspectx,pa=Math.sqrt(oa*oa+$*$)*1.41421;aa===-1&&(pa=1-pa),this.vertInfoA[ea]=G*(1+S),this.vertInfoC[ea]=-G+G*pa,ea+=1}}}],[{key:"resizeMatrixValues",value:function(t,a,e,r,_){for(var x=new Float32Array((r+1)*(_+1)),b=0,u=0;u<_+1;u++)for(var n=0;n<r+1;n++){var R=n/_,V=u/r;R*=a+1,V*=e+1,R=Math.clamp(R,0,a-1),V=Math.clamp(V,0,e-1);var k=Math.floor(R),T=Math.floor(V),L=R-k,U=V-T,O=t[T*(a+1)+k],j=t[T*(a+1)+(k+1)],C=t[(T+1)*(a+1)+k],B=t[(T+1)*(a+1)+(k+1)];x[b]=O*(1-L)*(1-U)+j*L*(1-U)+C*(1-L)*U+B*L*U,b+=1}return x}}]),p}()},"./src/rendering/motionVectors/motionVectors.js":function(o,l,s){"use strict";s.r(l),s.d(l,"default",function(){return p});var y=s("./src/rendering/shaders/shaderUtils.js");function z(m,t){if(!(m instanceof t))throw new TypeError("Cannot call a class as a function")}function A(m,t){for(var a=0;a<t.length;a++){var e=t[a];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(m,e.key,e)}}function h(m,t,a){return t&&A(m.prototype,t),a&&A(m,a),m}var p=function(){function m(t,a){z(this,m),this.gl=t,this.maxX=64,this.maxY=48,this.positions=new Float32Array(this.maxX*this.maxY*2*3),this.texsizeX=a.texsizeX,this.texsizeY=a.texsizeY,this.mesh_width=a.mesh_width,this.mesh_height=a.mesh_height,this.positionVertexBuf=this.gl.createBuffer(),this.floatPrecision=y.default.getFragmentFloatPrecision(this.gl),this.createShader()}return h(m,[{key:"updateGlobals",value:function(a){this.texsizeX=a.texsizeX,this.texsizeY=a.texsizeY,this.mesh_width=a.mesh_width,this.mesh_height=a.mesh_height}},{key:"createShader",value:function(){this.shaderProgram=this.gl.createProgram();var a=this.gl.createShader(this.gl.VERTEX_SHADER);this.gl.shaderSource(a,`#version 300 es
                                      in vec3 aPos;
                                      void main(void) {
                                        gl_Position = vec4(aPos, 1.0);
                                      }`),this.gl.compileShader(a);var e=this.gl.createShader(this.gl.FRAGMENT_SHADER);this.gl.shaderSource(e,`#version 300 es
                                      precision `.concat(this.floatPrecision,` float;
                                      precision highp int;
                                      precision mediump sampler2D;
                                      out vec4 fragColor;
                                      uniform vec4 u_color;
                                      void main(void) {
                                        fragColor = u_color;
                                      }`)),this.gl.compileShader(e),this.gl.attachShader(this.shaderProgram,a),this.gl.attachShader(this.shaderProgram,e),this.gl.linkProgram(this.shaderProgram),this.aPosLoc=this.gl.getAttribLocation(this.shaderProgram,"aPos"),this.colorLoc=this.gl.getUniformLocation(this.shaderProgram,"u_color")}},{key:"getMotionDir",value:function(a,e,r){var _=Math.floor(r*this.mesh_height),x=r*this.mesh_height-_,b=Math.floor(e*this.mesh_width),u=e*this.mesh_width-b,n=b+1,R=_+1,V=this.mesh_width+1,k,T;return k=a[(_*V+b)*2+0]*(1-u)*(1-x),T=a[(_*V+b)*2+1]*(1-u)*(1-x),k+=a[(_*V+n)*2+0]*u*(1-x),T+=a[(_*V+n)*2+1]*u*(1-x),k+=a[(R*V+b)*2+0]*(1-u)*x,T+=a[(R*V+b)*2+1]*(1-u)*x,k+=a[(R*V+n)*2+0]*u*x,T+=a[(R*V+n)*2+1]*u*x,[k,1-T]}},{key:"generateMotionVectors",value:function(a,e){var r=a.mv_a,_=Math.floor(a.mv_x),x=Math.floor(a.mv_y);if(r>.001&&_>0&&x>0){var b=a.mv_x-_,u=a.mv_y-x;_>this.maxX&&(_=this.maxX,b=0),x>this.maxY&&(x=this.maxY,u=0);var n=a.mv_dx,R=a.mv_dy,V=a.mv_l,k=1/this.texsizeX;this.numVecVerts=0;for(var T=0;T<x;T++){var L=(T+.25)/(x+u+.25-1);if(L-=R,L>1e-4&&L<.9999)for(var U=0;U<_;U++){var O=(U+.25)/(_+b+.25-1);if(O+=n,O>1e-4&&O<.9999){var j=this.getMotionDir(e,O,L),C=j[0],B=j[1],E=C-O,d=B-L;E*=V,d*=V;var f=Math.sqrt(E*E+d*d);f<k&&f>1e-8?(f=k/f,E*=f,d*=f):(E=k,E=k),C=O+E,B=L+d;var P=2*O-1,I=2*L-1,D=2*C-1,Q=2*B-1;this.positions[this.numVecVerts*3+0]=P,this.positions[this.numVecVerts*3+1]=I,this.positions[this.numVecVerts*3+2]=0,this.positions[(this.numVecVerts+1)*3+0]=D,this.positions[(this.numVecVerts+1)*3+1]=Q,this.positions[(this.numVecVerts+1)*3+2]=0,this.numVecVerts+=2}}}if(this.numVecVerts>0)return this.color=[a.mv_r,a.mv_g,a.mv_b,r],!0}return!1}},{key:"drawMotionVectors",value:function(a,e){this.generateMotionVectors(a,e)&&(this.gl.useProgram(this.shaderProgram),this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.positionVertexBuf),this.gl.bufferData(this.gl.ARRAY_BUFFER,this.positions,this.gl.STATIC_DRAW),this.gl.vertexAttribPointer(this.aPosLoc,3,this.gl.FLOAT,!1,0,0),this.gl.enableVertexAttribArray(this.aPosLoc),this.gl.uniform4fv(this.colorLoc,this.color),this.gl.lineWidth(1),this.gl.blendFunc(this.gl.SRC_ALPHA,this.gl.ONE_MINUS_SRC_ALPHA),this.gl.drawArrays(this.gl.LINES,0,this.numVecVerts))}}]),m}()},"./src/rendering/renderer.js":function(o,l,s){"use strict";s.r(l),s.d(l,"default",function(){return C});var y=s("./src/audio/audioLevels.js"),z=s("./src/blankPreset.js"),A=s.n(z),h=s("./src/equations/presetEquationRunner.js"),p=s("./src/rendering/waves/basicWaveform.js"),m=s("./src/rendering/waves/customWaveform.js"),t=s("./src/rendering/shapes/customShape.js"),a=s("./src/rendering/sprites/border.js"),e=s("./src/rendering/sprites/darkenCenter.js"),r=s("./src/rendering/motionVectors/motionVectors.js"),_=s("./src/rendering/shaders/warp.js"),x=s("./src/rendering/shaders/comp.js"),b=s("./src/rendering/shaders/output.js"),u=s("./src/rendering/shaders/resample.js"),n=s("./src/rendering/shaders/blur/blur.js"),R=s("./src/noise/noise.js"),V=s("./src/image/imageTextures.js"),k=s("./src/rendering/text/titleText.js"),T=s("./src/rendering/blendPattern.js"),L=s("./src/utils.js");function U(B,E){if(!(B instanceof E))throw new TypeError("Cannot call a class as a function")}function O(B,E){for(var d=0;d<E.length;d++){var f=E[d];f.enumerable=f.enumerable||!1,f.configurable=!0,"value"in f&&(f.writable=!0),Object.defineProperty(B,f.key,f)}}function j(B,E,d){return E&&O(B.prototype,E),d&&O(B,d),B}var C=function(){function B(E,d,f){U(this,B),this.gl=E,this.audio=d,this.frameNum=0,this.fps=30,this.time=0,this.presetTime=0,this.lastTime=performance.now(),this.timeHist=[0],this.timeHistMax=120,this.blending=!1,this.blendStartTime=0,this.blendProgress=0,this.blendDuration=0,this.width=f.width||1200,this.height=f.height||900,this.mesh_width=f.meshWidth||48,this.mesh_height=f.meshHeight||36,this.pixelRatio=f.pixelRatio||window.devicePixelRatio||1,this.textureRatio=f.textureRatio||1,this.outputFXAA=f.outputFXAA||!1,this.texsizeX=this.width*this.pixelRatio*this.textureRatio,this.texsizeY=this.height*this.pixelRatio*this.textureRatio,this.aspectx=this.texsizeY>this.texsizeX?this.texsizeX/this.texsizeY:1,this.aspecty=this.texsizeX>this.texsizeY?this.texsizeY/this.texsizeX:1,this.invAspectx=1/this.aspectx,this.invAspecty=1/this.aspecty,this.qs=L.default.range(1,33).map(function(D){return"q".concat(D)}),this.ts=L.default.range(1,9).map(function(D){return"t".concat(D)}),this.regs=L.default.range(0,100).map(function(D){return D<10?"reg0".concat(D):"reg".concat(D)}),this.blurRatios=[[.5,.25],[.125,.125],[.0625,.0625]],this.audioLevels=new y.default(this.audio),this.prevFrameBuffer=this.gl.createFramebuffer(),this.targetFrameBuffer=this.gl.createFramebuffer(),this.prevTexture=this.gl.createTexture(),this.targetTexture=this.gl.createTexture(),this.compFrameBuffer=this.gl.createFramebuffer(),this.compTexture=this.gl.createTexture(),this.anisoExt=this.gl.getExtension("EXT_texture_filter_anisotropic")||this.gl.getExtension("MOZ_EXT_texture_filter_anisotropic")||this.gl.getExtension("WEBKIT_EXT_texture_filter_anisotropic"),this.bindFrameBufferTexture(this.prevFrameBuffer,this.prevTexture),this.bindFrameBufferTexture(this.targetFrameBuffer,this.targetTexture),this.bindFrameBufferTexture(this.compFrameBuffer,this.compTexture);var P={pixelRatio:this.pixelRatio,textureRatio:this.textureRatio,texsizeX:this.texsizeX,texsizeY:this.texsizeY,mesh_width:this.mesh_width,mesh_height:this.mesh_height,aspectx:this.aspectx,aspecty:this.aspecty};this.noise=new R.default(E),this.image=new V.default(E),this.warpShader=new _.default(E,this.noise,this.image,P),this.compShader=new x.default(E,this.noise,this.image,P),this.outputShader=new b.default(E,P),this.prevWarpShader=new _.default(E,this.noise,this.image,P),this.prevCompShader=new x.default(E,this.noise,this.image,P),this.numBlurPasses=0,this.blurShader1=new n.default(0,this.blurRatios,E,P),this.blurShader2=new n.default(1,this.blurRatios,E,P),this.blurShader3=new n.default(2,this.blurRatios,E,P),this.blurTexture1=this.blurShader1.blurVerticalTexture,this.blurTexture2=this.blurShader2.blurVerticalTexture,this.blurTexture3=this.blurShader3.blurVerticalTexture,this.basicWaveform=new p.default(E,P),this.customWaveforms=L.default.range(4).map(function(D){return new m.default(D,E,P)}),this.customShapes=L.default.range(4).map(function(D){return new t.default(D,E,P)}),this.prevCustomWaveforms=L.default.range(4).map(function(D){return new m.default(D,E,P)}),this.prevCustomShapes=L.default.range(4).map(function(D){return new t.default(D,E,P)}),this.darkenCenter=new e.default(E,P),this.innerBorder=new a.default(E,P),this.outerBorder=new a.default(E,P),this.motionVectors=new r.default(E,P),this.titleText=new k.default(E,P),this.blendPattern=new T.default(P),this.resampleShader=new u.default(E),this.supertext={startTime:-1},this.warpUVs=new Float32Array((this.mesh_width+1)*(this.mesh_height+1)*2),this.warpColor=new Float32Array((this.mesh_width+1)*(this.mesh_height+1)*4),this.gl.clearColor(0,0,0,1),this.blankPreset=A.a;var I={frame:0,time:0,fps:45,bass:1,bass_att:1,mid:1,mid_att:1,treb:1,treb_att:1};this.preset=A.a,this.prevPreset=this.preset,this.presetEquationRunner=new h.default(this.preset,I,P),this.prevPresetEquationRunner=new h.default(this.prevPreset,I,P),this.regVars=this.presetEquationRunner.mdVSRegs}return j(B,[{key:"loadPreset",value:function(d,f){this.blendPattern.createBlendPattern(),this.blending=!0,this.blendStartTime=this.time,this.blendDuration=f,this.blendProgress=0,this.prevPresetEquationRunner=this.presetEquationRunner,this.prevPreset=this.preset,this.preset=d,this.preset.baseVals.old_wave_mode=this.prevPreset.baseVals.wave_mode,this.presetTime=this.time;var P={frame:this.frameNum,time:this.time,fps:this.fps,bass:this.audioLevels.bass,bass_att:this.audioLevels.bass_att,mid:this.audioLevels.mid,mid_att:this.audioLevels.mid_att,treb:this.audioLevels.treb,treb_att:this.audioLevels.treb_att},I={pixelRatio:this.pixelRatio,textureRatio:this.textureRatio,texsizeX:this.texsizeX,texsizeY:this.texsizeY,mesh_width:this.mesh_width,mesh_height:this.mesh_height,aspectx:this.aspectx,aspecty:this.aspecty};this.presetEquationRunner=new h.default(this.preset,P,I),this.regVars=this.presetEquationRunner.mdVSRegs;var D=this.prevWarpShader;this.prevWarpShader=this.warpShader,this.warpShader=D;var Q=this.prevCompShader;this.prevCompShader=this.compShader,this.compShader=Q;var S=this.preset.warp.trim(),G=this.preset.comp.trim();this.warpShader.updateShader(S),this.compShader.updateShader(G),S.length===0?this.numBlurPasses=0:this.numBlurPasses=B.getHighestBlur(S),G.length!==0&&(this.numBlurPasses=Math.max(this.numBlurPasses,B.getHighestBlur(G)))}},{key:"loadExtraImages",value:function(d){this.image.loadExtraImages(d)}},{key:"setRendererSize",value:function(d,f,P){var I=this.texsizeX,D=this.texsizeY;if(this.width=d,this.height=f,this.mesh_width=P.meshWidth||this.mesh_width,this.mesh_height=P.meshHeight||this.mesh_height,this.pixelRatio=P.pixelRatio||this.pixelRatio,this.textureRatio=P.textureRatio||this.textureRatio,this.texsizeX=d*this.pixelRatio*this.textureRatio,this.texsizeY=f*this.pixelRatio*this.textureRatio,this.aspectx=this.texsizeY>this.texsizeX?this.texsizeX/this.texsizeY:1,this.aspecty=this.texsizeX>this.texsizeY?this.texsizeY/this.texsizeX:1,this.texsizeX!==I||this.texsizeY!==D){var Q=this.gl.createTexture();this.bindFrameBufferTexture(this.targetFrameBuffer,Q),this.bindFrambufferAndSetViewport(this.targetFrameBuffer,this.texsizeX,this.texsizeY),this.resampleShader.renderQuadTexture(this.targetTexture),this.targetTexture=Q,this.bindFrameBufferTexture(this.prevFrameBuffer,this.prevTexture),this.bindFrameBufferTexture(this.compFrameBuffer,this.compTexture)}this.updateGlobals(),this.frameNum>0&&this.renderToScreen()}},{key:"setInternalMeshSize",value:function(d,f){this.mesh_width=d,this.mesh_height=f,this.updateGlobals()}},{key:"setOutputAA",value:function(d){this.outputFXAA=d}},{key:"updateGlobals",value:function(){var d={pixelRatio:this.pixelRatio,textureRatio:this.textureRatio,texsizeX:this.texsizeX,texsizeY:this.texsizeY,mesh_width:this.mesh_width,mesh_height:this.mesh_height,aspectx:this.aspectx,aspecty:this.aspecty};this.presetEquationRunner.updateGlobals(d),this.prevPresetEquationRunner.updateGlobals(d),this.warpShader.updateGlobals(d),this.prevWarpShader.updateGlobals(d),this.compShader.updateGlobals(d),this.prevCompShader.updateGlobals(d),this.outputShader.updateGlobals(d),this.blurShader1.updateGlobals(d),this.blurShader2.updateGlobals(d),this.blurShader3.updateGlobals(d),this.basicWaveform.updateGlobals(d),this.customWaveforms.forEach(function(f){return f.updateGlobals(d)}),this.customShapes.forEach(function(f){return f.updateGlobals(d)}),this.prevCustomWaveforms.forEach(function(f){return f.updateGlobals(d)}),this.prevCustomShapes.forEach(function(f){return f.updateGlobals(d)}),this.darkenCenter.updateGlobals(d),this.innerBorder.updateGlobals(d),this.outerBorder.updateGlobals(d),this.motionVectors.updateGlobals(d),this.titleText.updateGlobals(d),this.blendPattern.updateGlobals(d),this.warpUVs=new Float32Array((this.mesh_width+1)*(this.mesh_height+1)*2),this.warpColor=new Float32Array((this.mesh_width+1)*(this.mesh_height+1)*4)}},{key:"calcTimeAndFPS",value:function(d){var f;if(d)f=d;else{var P=performance.now();f=(P-this.lastTime)/1e3,(f>1||f<0||this.frame<2)&&(f=1/30),this.lastTime=P}this.time+=1/this.fps,this.blending&&(this.blendProgress=(this.time-this.blendStartTime)/this.blendDuration,this.blendProgress>1&&(this.blending=!1));var I=this.timeHist[this.timeHist.length-1]+f;this.timeHist.push(I),this.timeHist.length>this.timeHistMax&&this.timeHist.shift();var D=this.timeHist.length/(I-this.timeHist[0]);if(Math.abs(D-this.fps)>3&&this.frame>this.timeHistMax)this.fps=D;else{var Q=.93;this.fps=Q*this.fps+(1-Q)*D}}},{key:"runPixelEquations",value:function(d,f,P,I){for(var D=this.mesh_width,Q=this.mesh_height,S=D+1,G=Q+1,aa=this.time*f.warpanimspeed,ea=1/f.warpscale,_a=11.68+4*Math.cos(aa*1.413+10),$=8.77+3*Math.cos(aa*1.113+7),ra=10.54+3*Math.cos(aa*1.233+3),oa=11.49+4*Math.cos(aa*.933+5),pa=0/this.texsizeX,ma=0/this.texsizeY,ta=this.aspectx,sa=this.aspecty,Y=L.default.cloneVars(f),Z=0,la=0,ya=0;ya<G;ya++)for(var ga=0;ga<S;ga++){var na=ga/D*2-1,ha=ya/Q*2-1,za=Math.sqrt(na*na*ta*ta+ha*ha*sa*sa);if(P){var Pa=void 0;ya===Q/2&&ga===D/2?Pa=0:Pa=L.default.atan2(ha*sa,na*ta),Y.x=na*.5*ta+.5,Y.y=ha*-.5*sa+.5,Y.rad=za,Y.ang=Pa,Y.zoom=f.zoom,Y.zoomexp=f.zoomexp,Y.rot=f.rot,Y.warp=f.warp,Y.cx=f.cx,Y.cy=f.cy,Y.dx=f.dx,Y.dy=f.dy,Y.sx=f.sx,Y.sy=f.sy,Y=d.pixel_eqs(Y)}var ua=Y.warp,Aa=Y.zoom,fa=Y.zoomexp,Ea=Y.cx,wa=Y.cy,Va=Y.sx,Ia=Y.sy,M=Y.dx,g=Y.dy,i=Y.rot,v=Math.pow(Aa,Math.pow(fa,za*2-1)),c=1/v,q=na*.5*ta*c+.5,w=-ha*.5*sa*c+.5;q=(q-Ea)/Va+Ea,w=(w-wa)/Ia+wa,ua!==0&&(q+=ua*.0035*Math.sin(aa*.333+ea*(na*_a-ha*oa)),w+=ua*.0035*Math.cos(aa*.375-ea*(na*ra+ha*$)),q+=ua*.0035*Math.cos(aa*.753-ea*(na*$-ha*ra)),w+=ua*.0035*Math.sin(aa*.825+ea*(na*_a+ha*oa)));var F=q-Ea,W=w-wa,X=Math.cos(i),N=Math.sin(i);if(q=F*X-W*N+Ea,w=F*N+W*X+wa,q-=M,w-=g,q=(q-.5)/ta+.5,w=(w-.5)/sa+.5,q+=pa,w+=ma,!I)this.warpUVs[Z]=q,this.warpUVs[Z+1]=w,this.warpColor[la+0]=1,this.warpColor[la+1]=1,this.warpColor[la+2]=1,this.warpColor[la+3]=1;else{var H=this.blendPattern.vertInfoA[Z/2]*this.blendProgress+this.blendPattern.vertInfoC[Z/2];H=Math.clamp(H,0,1),this.warpUVs[Z]=this.warpUVs[Z]*H+q*(1-H),this.warpUVs[Z+1]=this.warpUVs[Z+1]*H+w*(1-H),this.warpColor[la+0]=1,this.warpColor[la+1]=1,this.warpColor[la+2]=1,this.warpColor[la+3]=H}Z+=2,la+=4}this.mdVSVertex=Y}},{key:"bindFrambufferAndSetViewport",value:function(d,f,P){this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,d),this.gl.viewport(0,0,f,P)}},{key:"bindFrameBufferTexture",value:function(d,f){if(this.gl.bindTexture(this.gl.TEXTURE_2D,f),this.gl.pixelStorei(this.gl.UNPACK_ALIGNMENT,1),this.gl.texImage2D(this.gl.TEXTURE_2D,0,this.gl.RGBA,this.texsizeX,this.texsizeY,0,this.gl.RGBA,this.gl.UNSIGNED_BYTE,new Uint8Array(this.texsizeX*this.texsizeY*4)),this.gl.generateMipmap(this.gl.TEXTURE_2D),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_WRAP_S,this.gl.CLAMP_TO_EDGE),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_WRAP_T,this.gl.CLAMP_TO_EDGE),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_MIN_FILTER,this.gl.LINEAR_MIPMAP_LINEAR),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_MAG_FILTER,this.gl.LINEAR),this.anisoExt){var P=this.gl.getParameter(this.anisoExt.MAX_TEXTURE_MAX_ANISOTROPY_EXT);this.gl.texParameterf(this.gl.TEXTURE_2D,this.anisoExt.TEXTURE_MAX_ANISOTROPY_EXT,P)}this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,d),this.gl.framebufferTexture2D(this.gl.FRAMEBUFFER,this.gl.COLOR_ATTACHMENT0,this.gl.TEXTURE_2D,f,0)}},{key:"render",value:function(){var d=this,f=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},P=f.audioLevels,I=f.elapsedTime;this.calcTimeAndFPS(I),this.frameNum+=1,P?this.audio.updateAudio(P.timeByteArray,P.timeByteArrayL,P.timeByteArrayR):this.audio.sampleAudio(),this.audioLevels.updateAudioLevels(this.fps,this.frameNum);var D={frame:this.frameNum,time:this.time,fps:this.fps,bass:this.audioLevels.bass,bass_att:this.audioLevels.bass_att,mid:this.audioLevels.mid,mid_att:this.audioLevels.mid_att,treb:this.audioLevels.treb,treb_att:this.audioLevels.treb_att,meshx:this.mesh_width,meshy:this.mesh_height,aspectx:this.invAspectx,aspecty:this.invAspecty,pixelsx:this.texsizeX,pixelsy:this.texsizeY},Q=Object.assign({},D);Q.gmegabuf=this.prevPresetEquationRunner.gmegabuf,D.gmegabuf=this.presetEquationRunner.gmegabuf,Object.assign(D,this.regVars),this.presetEquationRunner.runFrameEquations(D);var S=this.presetEquationRunner.mdVSFrame;this.runPixelEquations(this.presetEquationRunner.preset,S,this.presetEquationRunner.runVertEQs,!1),Object.assign(this.regVars,L.default.pick(this.mdVSVertex,this.regs)),Object.assign(D,this.regVars);var G;this.blending?(this.prevPresetEquationRunner.runFrameEquations(Q),this.runPixelEquations(this.prevPresetEquationRunner.preset,this.prevPresetEquationRunner.mdVSFrame,this.prevPresetEquationRunner.runVertEQs,!0),G=B.mixFrameEquations(this.blendProgress,S,this.prevPresetEquationRunner.mdVSFrame)):G=S;var aa=this.targetTexture;this.targetTexture=this.prevTexture,this.prevTexture=aa;var ea=this.targetFrameBuffer;this.targetFrameBuffer=this.prevFrameBuffer,this.prevFrameBuffer=ea,this.gl.bindTexture(this.gl.TEXTURE_2D,this.prevTexture),this.gl.generateMipmap(this.gl.TEXTURE_2D),this.bindFrambufferAndSetViewport(this.targetFrameBuffer,this.texsizeX,this.texsizeY),this.gl.clear(this.gl.COLOR_BUFFER_BIT),this.gl.enable(this.gl.BLEND),this.gl.blendEquation(this.gl.FUNC_ADD),this.gl.blendFunc(this.gl.SRC_ALPHA,this.gl.ONE_MINUS_SRC_ALPHA);var _a=B.getBlurValues(G),$=_a.blurMins,ra=_a.blurMaxs;this.blending?(this.prevWarpShader.renderQuadTexture(!1,this.prevTexture,this.blurTexture1,this.blurTexture2,this.blurTexture3,$,ra,this.prevPresetEquationRunner.mdVSFrame,this.warpUVs,this.warpColor),this.warpShader.renderQuadTexture(!0,this.prevTexture,this.blurTexture1,this.blurTexture2,this.blurTexture3,$,ra,G,this.warpUVs,this.warpColor)):this.warpShader.renderQuadTexture(!1,this.prevTexture,this.blurTexture1,this.blurTexture2,this.blurTexture3,$,ra,S,this.warpUVs,this.warpColor),this.numBlurPasses>0&&(this.blurShader1.renderBlurTexture(this.targetTexture,S,$,ra),this.numBlurPasses>1&&(this.blurShader2.renderBlurTexture(this.blurTexture1,S,$,ra),this.numBlurPasses>2&&this.blurShader3.renderBlurTexture(this.blurTexture2,S,$,ra)),this.bindFrambufferAndSetViewport(this.targetFrameBuffer,this.texsizeX,this.texsizeY)),this.motionVectors.drawMotionVectors(G,this.warpUVs),this.preset.shapes&&this.preset.shapes.length>0&&this.customShapes.forEach(function(ta,sa){ta.drawCustomShape(d.blending?d.blendProgress:1,D,d.presetEquationRunner,d.preset.shapes[sa],d.prevTexture)}),this.preset.waves&&this.preset.waves.length>0&&this.customWaveforms.forEach(function(ta,sa){ta.drawCustomWaveform(d.blending?d.blendProgress:1,d.audio.timeArrayL,d.audio.timeArrayR,d.audio.freqArrayL,d.audio.freqArrayR,D,d.presetEquationRunner,d.preset.waves[sa])}),this.blending&&(this.prevPreset.shapes&&this.prevPreset.shapes.length>0&&this.prevCustomShapes.forEach(function(ta,sa){ta.drawCustomShape(1-d.blendProgress,Q,d.prevPresetEquationRunner,d.prevPreset.shapes[sa],d.prevTexture)}),this.prevPreset.waves&&this.prevPreset.waves.length>0&&this.prevCustomWaveforms.forEach(function(ta,sa){ta.drawCustomWaveform(1-d.blendProgress,d.audio.timeArrayL,d.audio.timeArrayR,d.audio.freqArrayL,d.audio.freqArrayR,Q,d.prevPresetEquationRunner,d.prevPreset.waves[sa])})),this.basicWaveform.drawBasicWaveform(this.blending,this.blendProgress,this.audio.timeArrayL,this.audio.timeArrayR,G),this.darkenCenter.drawDarkenCenter(G);var oa=[G.ob_r,G.ob_g,G.ob_b,G.ob_a];this.outerBorder.drawBorder(oa,G.ob_size,0);var pa=[G.ib_r,G.ib_g,G.ib_b,G.ib_a];if(this.innerBorder.drawBorder(pa,G.ib_size,G.ob_size),this.supertext.startTime>=0){var ma=(this.time-this.supertext.startTime)/this.supertext.duration;ma>=1&&this.titleText.renderTitle(ma,!0,D)}this.globalVars=D,this.mdVSFrame=S,this.mdVSFrameMixed=G,this.renderToScreen()}},{key:"renderToScreen",value:function(){this.outputFXAA?this.bindFrambufferAndSetViewport(this.compFrameBuffer,this.texsizeX,this.texsizeY):this.bindFrambufferAndSetViewport(null,this.width,this.height),this.gl.clear(this.gl.COLOR_BUFFER_BIT),this.gl.enable(this.gl.BLEND),this.gl.blendEquation(this.gl.FUNC_ADD),this.gl.blendFunc(this.gl.SRC_ALPHA,this.gl.ONE_MINUS_SRC_ALPHA);var d=B.getBlurValues(this.mdVSFrameMixed),f=d.blurMins,P=d.blurMaxs;if(this.blending?(this.prevCompShader.renderQuadTexture(!1,this.targetTexture,this.blurTexture1,this.blurTexture2,this.blurTexture3,f,P,this.prevPresetEquationRunner.mdVSFrame,this.warpColor),this.compShader.renderQuadTexture(!0,this.targetTexture,this.blurTexture1,this.blurTexture2,this.blurTexture3,f,P,this.mdVSFrameMixed,this.warpColor)):this.compShader.renderQuadTexture(!1,this.targetTexture,this.blurTexture1,this.blurTexture2,this.blurTexture3,f,P,this.mdVSFrame,this.warpColor),this.supertext.startTime>=0){var I=(this.time-this.supertext.startTime)/this.supertext.duration;this.titleText.renderTitle(I,!1,this.globalVars),I>=1&&(this.supertext.startTime=-1)}this.outputFXAA&&(this.gl.bindTexture(this.gl.TEXTURE_2D,this.compTexture),this.gl.generateMipmap(this.gl.TEXTURE_2D),this.bindFrambufferAndSetViewport(null,this.width,this.height),this.outputShader.renderQuadTexture(this.compTexture))}},{key:"launchSongTitleAnim",value:function(d){this.supertext={startTime:this.time,duration:1.7},this.titleText.generateTitleTexture(d)}},{key:"toDataURL",value:function(){var d=this,f=new Uint8Array(this.texsizeX*this.texsizeY*4),P=this.gl.createFramebuffer(),I=this.gl.createTexture();this.bindFrameBufferTexture(P,I);var D=B.getBlurValues(this.mdVSFrameMixed),Q=D.blurMins,S=D.blurMaxs;this.compShader.renderQuadTexture(!1,this.targetTexture,this.blurTexture1,this.blurTexture2,this.blurTexture3,Q,S,this.mdVSFrame,this.warpColor),this.gl.readPixels(0,0,this.texsizeX,this.texsizeY,this.gl.RGBA,this.gl.UNSIGNED_BYTE,f),Array.from({length:this.texsizeY},function(_a,$){return f.slice($*d.texsizeX*4,($+1)*d.texsizeX*4)}).forEach(function(_a,$){return f.set(_a,(d.texsizeY-$-1)*d.texsizeX*4)});var G=document.createElement("canvas");G.width=this.texsizeX,G.height=this.texsizeY;var aa=G.getContext("2d"),ea=aa.createImageData(this.texsizeX,this.texsizeY);return ea.data.set(f),aa.putImageData(ea,0,0),this.gl.deleteTexture(I),this.gl.deleteFramebuffer(P),G.toDataURL()}},{key:"warpBufferToDataURL",value:function(){var d=new Uint8Array(this.texsizeX*this.texsizeY*4);this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,this.targetFrameBuffer),this.gl.readPixels(0,0,this.texsizeX,this.texsizeY,this.gl.RGBA,this.gl.UNSIGNED_BYTE,d);var f=document.createElement("canvas");f.width=this.texsizeX,f.height=this.texsizeY;var P=f.getContext("2d"),I=P.createImageData(this.texsizeX,this.texsizeY);return I.data.set(d),P.putImageData(I,0,0),f.toDataURL()}}],[{key:"getHighestBlur",value:function(d){return/sampler_blur3/.test(d)?3:/sampler_blur2/.test(d)?2:/sampler_blur1/.test(d)?1:0}},{key:"mixFrameEquations",value:function(d,f,P){var I=.5-.5*Math.cos(d*Math.PI),D=1-I,Q=.5,S=L.default.cloneVars(f);return S.decay=I*f.decay+D*P.decay,S.wave_a=I*f.wave_a+D*P.wave_a,S.wave_r=I*f.wave_r+D*P.wave_r,S.wave_g=I*f.wave_g+D*P.wave_g,S.wave_b=I*f.wave_b+D*P.wave_b,S.wave_x=I*f.wave_x+D*P.wave_x,S.wave_y=I*f.wave_y+D*P.wave_y,S.wave_mystery=I*f.wave_mystery+D*P.wave_mystery,S.ob_size=I*f.ob_size+D*P.ob_size,S.ob_r=I*f.ob_r+D*P.ob_r,S.ob_g=I*f.ob_g+D*P.ob_g,S.ob_b=I*f.ob_b+D*P.ob_b,S.ob_a=I*f.ob_a+D*P.ob_a,S.ib_size=I*f.ib_size+D*P.ib_size,S.ib_r=I*f.ib_r+D*P.ib_r,S.ib_g=I*f.ib_g+D*P.ib_g,S.ib_b=I*f.ib_b+D*P.ib_b,S.ib_a=I*f.ib_a+D*P.ib_a,S.mv_x=I*f.mv_x+D*P.mv_x,S.mv_y=I*f.mv_y+D*P.mv_y,S.mv_dx=I*f.mv_dx+D*P.mv_dx,S.mv_dy=I*f.mv_dy+D*P.mv_dy,S.mv_l=I*f.mv_l+D*P.mv_l,S.mv_r=I*f.mv_r+D*P.mv_r,S.mv_g=I*f.mv_g+D*P.mv_g,S.mv_b=I*f.mv_b+D*P.mv_b,S.mv_a=I*f.mv_a+D*P.mv_a,S.echo_zoom=I*f.echo_zoom+D*P.echo_zoom,S.echo_alpha=I*f.echo_alpha+D*P.echo_alpha,S.echo_orient=I*f.echo_orient+D*P.echo_orient,S.wave_dots=I<Q?P.wave_dots:f.wave_dots,S.wave_thick=I<Q?P.wave_thick:f.wave_thick,S.additivewave=I<Q?P.additivewave:f.additivewave,S.wave_brighten=I<Q?P.wave_brighten:f.wave_brighten,S.darken_center=I<Q?P.darken_center:f.darken_center,S.gammaadj=I<Q?P.gammaadj:f.gammaadj,S.wrap=I<Q?P.wrap:f.wrap,S.invert=I<Q?P.invert:f.invert,S.brighten=I<Q?P.brighten:f.brighten,S.darken=I<Q?P.darken:f.darken,S.solarize=I<Q?P.brighten:f.solarize,S.b1n=I*f.b1n+D*P.b1n,S.b2n=I*f.b2n+D*P.b2n,S.b3n=I*f.b3n+D*P.b3n,S.b1x=I*f.b1x+D*P.b1x,S.b2x=I*f.b2x+D*P.b2x,S.b3x=I*f.b3x+D*P.b3x,S.b1ed=I*f.b1ed+D*P.b1ed,S}},{key:"getBlurValues",value:function(d){var f=d.b1n,P=d.b2n,I=d.b3n,D=d.b1x,Q=d.b2x,S=d.b3x,G=.1;if(D-f<G){var aa=(f+D)*.5;f=aa-G*.5,D=aa-G*.5}if(Q=Math.min(D,Q),P=Math.max(f,P),Q-P<G){var ea=(P+Q)*.5;P=ea-G*.5,Q=ea-G*.5}if(S=Math.min(Q,S),I=Math.max(P,I),S-I<G){var _a=(I+S)*.5;I=_a-G*.5,S=_a-G*.5}return{blurMins:[f,P,I],blurMaxs:[D,Q,S]}}}]),B}()},"./src/rendering/shaders/blur/blur.js":function(o,l,s){"use strict";s.r(l),s.d(l,"default",function(){return m});var y=s("./src/rendering/shaders/blur/blurVertical.js"),z=s("./src/rendering/shaders/blur/blurHorizontal.js");function A(t,a){if(!(t instanceof a))throw new TypeError("Cannot call a class as a function")}function h(t,a){for(var e=0;e<a.length;e++){var r=a[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function p(t,a,e){return a&&h(t.prototype,a),e&&h(t,e),t}var m=function(){function t(a,e,r){var _=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};A(this,t),this.blurLevel=a,this.blurRatios=e,this.gl=r,this.texsizeX=_.texsizeX,this.texsizeY=_.texsizeY,this.anisoExt=this.gl.getExtension("EXT_texture_filter_anisotropic")||this.gl.getExtension("MOZ_EXT_texture_filter_anisotropic")||this.gl.getExtension("WEBKIT_EXT_texture_filter_anisotropic"),this.blurHorizontalFrameBuffer=this.gl.createFramebuffer(),this.blurVerticalFrameBuffer=this.gl.createFramebuffer(),this.blurHorizontalTexture=this.gl.createTexture(),this.blurVerticalTexture=this.gl.createTexture(),this.setupFrameBufferTextures(),this.blurHorizontal=new z.default(r,this.blurLevel,_),this.blurVertical=new y.default(r,this.blurLevel,_)}return p(t,[{key:"updateGlobals",value:function(e){this.texsizeX=e.texsizeX,this.texsizeY=e.texsizeY,this.setupFrameBufferTextures()}},{key:"getTextureSize",value:function(e){var r=Math.max(this.texsizeX*e,16);r=Math.floor((r+3)/16)*16;var _=Math.max(this.texsizeY*e,16);return _=Math.floor((_+3)/4)*4,[r,_]}},{key:"setupFrameBufferTextures",value:function(){var e=this.blurLevel>0?this.blurRatios[this.blurLevel-1]:[1,1],r=this.blurRatios[this.blurLevel],_=this.getTextureSize(e[1]),x=this.getTextureSize(r[0]);this.bindFrameBufferTexture(this.blurHorizontalFrameBuffer,this.blurHorizontalTexture,x);var b=x,u=this.getTextureSize(r[1]);this.bindFrameBufferTexture(this.blurVerticalFrameBuffer,this.blurVerticalTexture,u),this.horizontalTexsizes=[_,x],this.verticalTexsizes=[b,u]}},{key:"bindFrambufferAndSetViewport",value:function(e,r){this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,e),this.gl.viewport(0,0,r[0],r[1])}},{key:"bindFrameBufferTexture",value:function(e,r,_){if(this.gl.bindTexture(this.gl.TEXTURE_2D,r),this.gl.pixelStorei(this.gl.UNPACK_ALIGNMENT,1),this.gl.texImage2D(this.gl.TEXTURE_2D,0,this.gl.RGBA,_[0],_[1],0,this.gl.RGBA,this.gl.UNSIGNED_BYTE,new Uint8Array(_[0]*_[1]*4)),this.gl.generateMipmap(this.gl.TEXTURE_2D),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_WRAP_S,this.gl.CLAMP_TO_EDGE),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_WRAP_T,this.gl.CLAMP_TO_EDGE),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_MIN_FILTER,this.gl.LINEAR_MIPMAP_LINEAR),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_MAG_FILTER,this.gl.LINEAR),this.anisoExt){var x=this.gl.getParameter(this.anisoExt.MAX_TEXTURE_MAX_ANISOTROPY_EXT);this.gl.texParameterf(this.gl.TEXTURE_2D,this.anisoExt.TEXTURE_MAX_ANISOTROPY_EXT,x)}this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,e),this.gl.framebufferTexture2D(this.gl.FRAMEBUFFER,this.gl.COLOR_ATTACHMENT0,this.gl.TEXTURE_2D,r,0)}},{key:"renderBlurTexture",value:function(e,r,_,x){this.bindFrambufferAndSetViewport(this.blurHorizontalFrameBuffer,this.horizontalTexsizes[1]),this.blurHorizontal.renderQuadTexture(e,r,_,x,this.horizontalTexsizes[0]),this.gl.bindTexture(this.gl.TEXTURE_2D,this.blurHorizontalTexture),this.gl.generateMipmap(this.gl.TEXTURE_2D),this.bindFrambufferAndSetViewport(this.blurVerticalFrameBuffer,this.verticalTexsizes[1]),this.blurVertical.renderQuadTexture(this.blurHorizontalTexture,r,this.verticalTexsizes[0]),this.gl.bindTexture(this.gl.TEXTURE_2D,this.blurVerticalTexture),this.gl.generateMipmap(this.gl.TEXTURE_2D)}}]),t}()},"./src/rendering/shaders/blur/blurHorizontal.js":function(o,l,s){"use strict";s.r(l),s.d(l,"default",function(){return p});var y=s("./src/rendering/shaders/shaderUtils.js");function z(m,t){if(!(m instanceof t))throw new TypeError("Cannot call a class as a function")}function A(m,t){for(var a=0;a<t.length;a++){var e=t[a];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(m,e.key,e)}}function h(m,t,a){return t&&A(m.prototype,t),a&&A(m,a),m}var p=function(){function m(t,a){z(this,m),this.gl=t,this.blurLevel=a;var e=[4,3.8,3.5,2.9,1.9,1.2,.7,.3],r=e[0]+e[1],_=e[2]+e[3],x=e[4]+e[5],b=e[6]+e[7],u=0+2*e[1]/r,n=2+2*e[3]/_,R=4+2*e[5]/x,V=6+2*e[7]/b;this.ws=new Float32Array([r,_,x,b]),this.ds=new Float32Array([u,n,R,V]),this.wDiv=.5/(r+_+x+b),this.positions=new Float32Array([-1,-1,1,-1,-1,1,1,1]),this.vertexBuf=this.gl.createBuffer(),this.floatPrecision=y.default.getFragmentFloatPrecision(this.gl),this.createShader()}return h(m,[{key:"createShader",value:function(){this.shaderProgram=this.gl.createProgram();var a=this.gl.createShader(this.gl.VERTEX_SHADER);this.gl.shaderSource(a,`#version 300 es
                                      const vec2 halfmad = vec2(0.5);
                                      in vec2 aPos;
                                      out vec2 uv;
                                      void main(void) {
                                        gl_Position = vec4(aPos, 0.0, 1.0);
                                        uv = aPos * halfmad + halfmad;
                                      }`),this.gl.compileShader(a);var e=this.gl.createShader(this.gl.FRAGMENT_SHADER);this.gl.shaderSource(e,`#version 300 es
       precision `.concat(this.floatPrecision,` float;
       precision highp int;
       precision mediump sampler2D;

       in vec2 uv;
       out vec4 fragColor;
       uniform sampler2D uTexture;
       uniform vec4 texsize;
       uniform float scale;
       uniform float bias;
       uniform vec4 ws;
       uniform vec4 ds;
       uniform float wdiv;

       void main(void) {
         float w1 = ws[0];
         float w2 = ws[1];
         float w3 = ws[2];
         float w4 = ws[3];
         float d1 = ds[0];
         float d2 = ds[1];
         float d3 = ds[2];
         float d4 = ds[3];

         vec2 uv2 = uv.xy;

         vec3 blur =
           ( texture(uTexture, uv2 + vec2( d1 * texsize.z,0.0) ).xyz
           + texture(uTexture, uv2 + vec2(-d1 * texsize.z,0.0) ).xyz) * w1 +
           ( texture(uTexture, uv2 + vec2( d2 * texsize.z,0.0) ).xyz
           + texture(uTexture, uv2 + vec2(-d2 * texsize.z,0.0) ).xyz) * w2 +
           ( texture(uTexture, uv2 + vec2( d3 * texsize.z,0.0) ).xyz
           + texture(uTexture, uv2 + vec2(-d3 * texsize.z,0.0) ).xyz) * w3 +
           ( texture(uTexture, uv2 + vec2( d4 * texsize.z,0.0) ).xyz
           + texture(uTexture, uv2 + vec2(-d4 * texsize.z,0.0) ).xyz) * w4;

         blur.xyz *= wdiv;
         blur.xyz = blur.xyz * scale + bias;

         fragColor = vec4(blur, 1.0);
       }`)),this.gl.compileShader(e),this.gl.attachShader(this.shaderProgram,a),this.gl.attachShader(this.shaderProgram,e),this.gl.linkProgram(this.shaderProgram),this.positionLocation=this.gl.getAttribLocation(this.shaderProgram,"aPos"),this.textureLoc=this.gl.getUniformLocation(this.shaderProgram,"uTexture"),this.texsizeLocation=this.gl.getUniformLocation(this.shaderProgram,"texsize"),this.scaleLoc=this.gl.getUniformLocation(this.shaderProgram,"scale"),this.biasLoc=this.gl.getUniformLocation(this.shaderProgram,"bias"),this.wsLoc=this.gl.getUniformLocation(this.shaderProgram,"ws"),this.dsLocation=this.gl.getUniformLocation(this.shaderProgram,"ds"),this.wdivLoc=this.gl.getUniformLocation(this.shaderProgram,"wdiv")}},{key:"getScaleAndBias",value:function(a,e){var r=[1,1,1],_=[0,0,0],x,b;return r[0]=1/(e[0]-a[0]),_[0]=-a[0]*r[0],x=(a[1]-a[0])/(e[0]-a[0]),b=(e[1]-a[0])/(e[0]-a[0]),r[1]=1/(b-x),_[1]=-x*r[1],x=(a[2]-a[1])/(e[1]-a[1]),b=(e[2]-a[1])/(e[1]-a[1]),r[2]=1/(b-x),_[2]=-x*r[2],{scale:r[this.blurLevel],bias:_[this.blurLevel]}}},{key:"renderQuadTexture",value:function(a,e,r,_,x){this.gl.useProgram(this.shaderProgram),this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.vertexBuf),this.gl.bufferData(this.gl.ARRAY_BUFFER,this.positions,this.gl.STATIC_DRAW),this.gl.vertexAttribPointer(this.positionLocation,2,this.gl.FLOAT,!1,0,0),this.gl.enableVertexAttribArray(this.positionLocation),this.gl.activeTexture(this.gl.TEXTURE0),this.gl.bindTexture(this.gl.TEXTURE_2D,a),this.gl.uniform1i(this.textureLoc,0);var b=this.getScaleAndBias(r,_),u=b.scale,n=b.bias;this.gl.uniform4fv(this.texsizeLocation,[x[0],x[1],1/x[0],1/x[1]]),this.gl.uniform1f(this.scaleLoc,u),this.gl.uniform1f(this.biasLoc,n),this.gl.uniform4fv(this.wsLoc,this.ws),this.gl.uniform4fv(this.dsLocation,this.ds),this.gl.uniform1f(this.wdivLoc,this.wDiv),this.gl.blendFunc(this.gl.SRC_ALPHA,this.gl.ONE_MINUS_SRC_ALPHA),this.gl.drawArrays(this.gl.TRIANGLE_STRIP,0,4)}}]),m}()},"./src/rendering/shaders/blur/blurVertical.js":function(o,l,s){"use strict";s.r(l),s.d(l,"default",function(){return p});var y=s("./src/rendering/shaders/shaderUtils.js");function z(m,t){if(!(m instanceof t))throw new TypeError("Cannot call a class as a function")}function A(m,t){for(var a=0;a<t.length;a++){var e=t[a];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(m,e.key,e)}}function h(m,t,a){return t&&A(m.prototype,t),a&&A(m,a),m}var p=function(){function m(t,a){z(this,m),this.gl=t,this.blurLevel=a;var e=[4,3.8,3.5,2.9,1.9,1.2,.7,.3],r=e[0]+e[1]+e[2]+e[3],_=e[4]+e[5]+e[6]+e[7],x=0+2*((e[2]+e[3])/r),b=2+2*((e[6]+e[7])/_);this.wds=new Float32Array([r,_,x,b]),this.wDiv=1/((r+_)*2),this.positions=new Float32Array([-1,-1,1,-1,-1,1,1,1]),this.vertexBuf=this.gl.createBuffer(),this.floatPrecision=y.default.getFragmentFloatPrecision(this.gl),this.createShader()}return h(m,[{key:"createShader",value:function(){this.shaderProgram=this.gl.createProgram();var a=this.gl.createShader(this.gl.VERTEX_SHADER);this.gl.shaderSource(a,`#version 300 es
                                      const vec2 halfmad = vec2(0.5);
                                      in vec2 aPos;
                                      out vec2 uv;
                                      void main(void) {
                                        gl_Position = vec4(aPos, 0.0, 1.0);
                                        uv = aPos * halfmad + halfmad;
                                      }`),this.gl.compileShader(a);var e=this.gl.createShader(this.gl.FRAGMENT_SHADER);this.gl.shaderSource(e,`#version 300 es
       precision `.concat(this.floatPrecision,` float;
       precision highp int;
       precision mediump sampler2D;

       in vec2 uv;
       out vec4 fragColor;
       uniform sampler2D uTexture;
       uniform vec4 texsize;
       uniform float ed1;
       uniform float ed2;
       uniform float ed3;
       uniform vec4 wds;
       uniform float wdiv;

       void main(void) {
         float w1 = wds[0];
         float w2 = wds[1];
         float d1 = wds[2];
         float d2 = wds[3];

         vec2 uv2 = uv.xy;

         vec3 blur =
           ( texture(uTexture, uv2 + vec2(0.0, d1 * texsize.w) ).xyz
           + texture(uTexture, uv2 + vec2(0.0,-d1 * texsize.w) ).xyz) * w1 +
           ( texture(uTexture, uv2 + vec2(0.0, d2 * texsize.w) ).xyz
           + texture(uTexture, uv2 + vec2(0.0,-d2 * texsize.w) ).xyz) * w2;

         blur.xyz *= wdiv;

         float t = min(min(uv.x, uv.y), 1.0 - max(uv.x, uv.y));
         t = sqrt(t);
         t = ed1 + ed2 * clamp(t * ed3, 0.0, 1.0);
         blur.xyz *= t;

         fragColor = vec4(blur, 1.0);
       }`)),this.gl.compileShader(e),this.gl.attachShader(this.shaderProgram,a),this.gl.attachShader(this.shaderProgram,e),this.gl.linkProgram(this.shaderProgram),this.positionLocation=this.gl.getAttribLocation(this.shaderProgram,"aPos"),this.textureLoc=this.gl.getUniformLocation(this.shaderProgram,"uTexture"),this.texsizeLocation=this.gl.getUniformLocation(this.shaderProgram,"texsize"),this.ed1Loc=this.gl.getUniformLocation(this.shaderProgram,"ed1"),this.ed2Loc=this.gl.getUniformLocation(this.shaderProgram,"ed2"),this.ed3Loc=this.gl.getUniformLocation(this.shaderProgram,"ed3"),this.wdsLocation=this.gl.getUniformLocation(this.shaderProgram,"wds"),this.wdivLoc=this.gl.getUniformLocation(this.shaderProgram,"wdiv")}},{key:"renderQuadTexture",value:function(a,e,r){this.gl.useProgram(this.shaderProgram),this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.vertexBuf),this.gl.bufferData(this.gl.ARRAY_BUFFER,this.positions,this.gl.STATIC_DRAW),this.gl.vertexAttribPointer(this.positionLocation,2,this.gl.FLOAT,!1,0,0),this.gl.enableVertexAttribArray(this.positionLocation),this.gl.activeTexture(this.gl.TEXTURE0),this.gl.bindTexture(this.gl.TEXTURE_2D,a),this.gl.uniform1i(this.textureLoc,0);var _=this.blurLevel===0?e.b1ed:0;this.gl.uniform4fv(this.texsizeLocation,[r[0],r[1],1/r[0],1/r[1]]),this.gl.uniform1f(this.ed1Loc,1-_),this.gl.uniform1f(this.ed2Loc,_),this.gl.uniform1f(this.ed3Loc,5),this.gl.uniform4fv(this.wdsLocation,this.wds),this.gl.uniform1f(this.wdivLoc,this.wDiv),this.gl.blendFunc(this.gl.SRC_ALPHA,this.gl.ONE_MINUS_SRC_ALPHA),this.gl.drawArrays(this.gl.TRIANGLE_STRIP,0,4)}}]),m}()},"./src/rendering/shaders/comp.js":function(o,l,s){"use strict";s.r(l),s.d(l,"default",function(){return p});var y=s("./src/rendering/shaders/shaderUtils.js");function z(m,t){if(!(m instanceof t))throw new TypeError("Cannot call a class as a function")}function A(m,t){for(var a=0;a<t.length;a++){var e=t[a];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(m,e.key,e)}}function h(m,t,a){return t&&A(m.prototype,t),a&&A(m,a),m}var p=function(){function m(t,a,e){var r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};z(this,m),this.gl=t,this.noise=a,this.image=e,this.mesh_width=r.mesh_width,this.mesh_height=r.mesh_height,this.texsizeX=r.texsizeX,this.texsizeY=r.texsizeY,this.aspectx=r.aspectx,this.aspecty=r.aspecty,this.invAspectx=1/this.aspectx,this.invAspecty=1/this.aspecty,this.compWidth=32,this.compHeight=24,this.buildPositions(),this.indexBuf=t.createBuffer(),this.positionVertexBuf=this.gl.createBuffer(),this.compColorVertexBuf=this.gl.createBuffer(),this.floatPrecision=y.default.getFragmentFloatPrecision(this.gl),this.createShader(),this.mainSampler=this.gl.createSampler(),this.mainSamplerFW=this.gl.createSampler(),this.mainSamplerFC=this.gl.createSampler(),this.mainSamplerPW=this.gl.createSampler(),this.mainSamplerPC=this.gl.createSampler(),t.samplerParameteri(this.mainSampler,t.TEXTURE_MIN_FILTER,t.LINEAR_MIPMAP_LINEAR),t.samplerParameteri(this.mainSampler,t.TEXTURE_MAG_FILTER,t.LINEAR),t.samplerParameteri(this.mainSampler,t.TEXTURE_WRAP_S,t.REPEAT),t.samplerParameteri(this.mainSampler,t.TEXTURE_WRAP_T,t.REPEAT),t.samplerParameteri(this.mainSamplerFW,t.TEXTURE_MIN_FILTER,t.LINEAR_MIPMAP_LINEAR),t.samplerParameteri(this.mainSamplerFW,t.TEXTURE_MAG_FILTER,t.LINEAR),t.samplerParameteri(this.mainSamplerFW,t.TEXTURE_WRAP_S,t.REPEAT),t.samplerParameteri(this.mainSamplerFW,t.TEXTURE_WRAP_T,t.REPEAT),t.samplerParameteri(this.mainSamplerFC,t.TEXTURE_MIN_FILTER,t.LINEAR_MIPMAP_LINEAR),t.samplerParameteri(this.mainSamplerFC,t.TEXTURE_MAG_FILTER,t.LINEAR),t.samplerParameteri(this.mainSamplerFC,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.samplerParameteri(this.mainSamplerFC,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),t.samplerParameteri(this.mainSamplerPW,t.TEXTURE_MIN_FILTER,t.NEAREST_MIPMAP_NEAREST),t.samplerParameteri(this.mainSamplerPW,t.TEXTURE_MAG_FILTER,t.NEAREST),t.samplerParameteri(this.mainSamplerPW,t.TEXTURE_WRAP_S,t.REPEAT),t.samplerParameteri(this.mainSamplerPW,t.TEXTURE_WRAP_T,t.REPEAT),t.samplerParameteri(this.mainSamplerPC,t.TEXTURE_MIN_FILTER,t.NEAREST_MIPMAP_NEAREST),t.samplerParameteri(this.mainSamplerPC,t.TEXTURE_MAG_FILTER,t.NEAREST),t.samplerParameteri(this.mainSamplerPC,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.samplerParameteri(this.mainSamplerPC,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE)}return h(m,[{key:"buildPositions",value:function(){for(var a=2,e=2,r=a/2,_=e/2,x=this.compWidth,b=this.compHeight,u=x+1,n=b+1,R=a/x,V=e/b,k=[],T=0;T<n;T++)for(var L=T*V-_,U=0;U<u;U++){var O=U*R-r;k.push(O,-L,0)}for(var j=[],C=0;C<b;C++)for(var B=0;B<x;B++){var E=B+u*C,d=B+u*(C+1),f=B+1+u*(C+1),P=B+1+u*C;j.push(E,d,P),j.push(d,f,P)}this.vertices=new Float32Array(k),this.indices=new Uint16Array(j)}},{key:"updateGlobals",value:function(a){this.mesh_width=a.mesh_width,this.mesh_height=a.mesh_height,this.texsizeX=a.texsizeX,this.texsizeY=a.texsizeY,this.aspectx=a.aspectx,this.aspecty=a.aspecty,this.invAspectx=1/this.aspectx,this.invAspecty=1/this.aspecty,this.buildPositions()}},{key:"createShader",value:function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",e,r;if(a.length===0)e=`float orient_horiz = mod(echo_orientation, 2.0);
                        float orient_x = (orient_horiz != 0.0) ? -1.0 : 1.0;
                        float orient_y = (echo_orientation >= 2.0) ? -1.0 : 1.0;
                        vec2 uv_echo = ((uv - 0.5) *
                                        (1.0 / echo_zoom) *
                                        vec2(orient_x, orient_y)) + 0.5;

                        ret = mix(texture(sampler_main, uv).rgb,
                                  texture(sampler_main, uv_echo).rgb,
                                  echo_alpha);

                        ret *= gammaAdj;

                        if(fShader >= 1.0) {
                          ret *= hue_shader;
                        } else if(fShader > 0.001) {
                          ret *= (1.0 - fShader) + (fShader * hue_shader);
                        }

                        if(brighten != 0) ret = sqrt(ret);
                        if(darken != 0) ret = ret*ret;
                        if(solarize != 0) ret = ret * (1.0 - ret) * 4.0;
                        if(invert != 0) ret = 1.0 - ret;`,r="";else{var _=y.default.getShaderParts(a);r=_[0],e=_[1]}e=e.replace(/texture2D/g,"texture"),e=e.replace(/texture3D/g,"texture"),this.userTextures=y.default.getUserSamplers(r),this.shaderProgram=this.gl.createProgram();var x=this.gl.createShader(this.gl.VERTEX_SHADER);this.gl.shaderSource(x,`#version 300 es
                                      const vec2 halfmad = vec2(0.5);
                                      in vec2 aPos;
                                      in vec4 aCompColor;
                                      out vec2 vUv;
                                      out vec4 vColor;
                                      void main(void) {
                                        gl_Position = vec4(aPos, 0.0, 1.0);
                                        vUv = aPos * halfmad + halfmad;
                                        vColor = aCompColor;
                                      }`),this.gl.compileShader(x);var b=this.gl.createShader(this.gl.FRAGMENT_SHADER);this.gl.shaderSource(b,`#version 300 es
                                      precision `.concat(this.floatPrecision,` float;
                                      precision highp int;
                                      precision mediump sampler2D;
                                      precision mediump sampler3D;

                                      vec3 lum(vec3 v){
                                          return vec3(dot(v, vec3(0.32,0.49,0.29)));
                                      }

                                      in vec2 vUv;
                                      in vec4 vColor;
                                      out vec4 fragColor;
                                      uniform sampler2D sampler_main;
                                      uniform sampler2D sampler_fw_main;
                                      uniform sampler2D sampler_fc_main;
                                      uniform sampler2D sampler_pw_main;
                                      uniform sampler2D sampler_pc_main;
                                      uniform sampler2D sampler_blur1;
                                      uniform sampler2D sampler_blur2;
                                      uniform sampler2D sampler_blur3;
                                      uniform sampler2D sampler_noise_lq;
                                      uniform sampler2D sampler_noise_lq_lite;
                                      uniform sampler2D sampler_noise_mq;
                                      uniform sampler2D sampler_noise_hq;
                                      uniform sampler2D sampler_pw_noise_lq;
                                      uniform sampler3D sampler_noisevol_lq;
                                      uniform sampler3D sampler_noisevol_hq;

                                      uniform float time;
                                      uniform float gammaAdj;
                                      uniform float echo_zoom;
                                      uniform float echo_alpha;
                                      uniform float echo_orientation;
                                      uniform int invert;
                                      uniform int brighten;
                                      uniform int darken;
                                      uniform int solarize;
                                      uniform vec2 resolution;
                                      uniform vec4 aspect;
                                      uniform vec4 texsize;
                                      uniform vec4 texsize_noise_lq;
                                      uniform vec4 texsize_noise_mq;
                                      uniform vec4 texsize_noise_hq;
                                      uniform vec4 texsize_noise_lq_lite;
                                      uniform vec4 texsize_noisevol_lq;
                                      uniform vec4 texsize_noisevol_hq;

                                      uniform float bass;
                                      uniform float mid;
                                      uniform float treb;
                                      uniform float vol;
                                      uniform float bass_att;
                                      uniform float mid_att;
                                      uniform float treb_att;
                                      uniform float vol_att;

                                      uniform float frame;
                                      uniform float fps;

                                      uniform vec4 _qa;
                                      uniform vec4 _qb;
                                      uniform vec4 _qc;
                                      uniform vec4 _qd;
                                      uniform vec4 _qe;
                                      uniform vec4 _qf;
                                      uniform vec4 _qg;
                                      uniform vec4 _qh;

                                      #define q1 _qa.x
                                      #define q2 _qa.y
                                      #define q3 _qa.z
                                      #define q4 _qa.w
                                      #define q5 _qb.x
                                      #define q6 _qb.y
                                      #define q7 _qb.z
                                      #define q8 _qb.w
                                      #define q9 _qc.x
                                      #define q10 _qc.y
                                      #define q11 _qc.z
                                      #define q12 _qc.w
                                      #define q13 _qd.x
                                      #define q14 _qd.y
                                      #define q15 _qd.z
                                      #define q16 _qd.w
                                      #define q17 _qe.x
                                      #define q18 _qe.y
                                      #define q19 _qe.z
                                      #define q20 _qe.w
                                      #define q21 _qf.x
                                      #define q22 _qf.y
                                      #define q23 _qf.z
                                      #define q24 _qf.w
                                      #define q25 _qg.x
                                      #define q26 _qg.y
                                      #define q27 _qg.z
                                      #define q28 _qg.w
                                      #define q29 _qh.x
                                      #define q30 _qh.y
                                      #define q31 _qh.z
                                      #define q32 _qh.w

                                      uniform vec4 slow_roam_cos;
                                      uniform vec4 roam_cos;
                                      uniform vec4 slow_roam_sin;
                                      uniform vec4 roam_sin;

                                      uniform float blur1_min;
                                      uniform float blur1_max;
                                      uniform float blur2_min;
                                      uniform float blur2_max;
                                      uniform float blur3_min;
                                      uniform float blur3_max;

                                      uniform float scale1;
                                      uniform float scale2;
                                      uniform float scale3;
                                      uniform float bias1;
                                      uniform float bias2;
                                      uniform float bias3;

                                      uniform vec4 rand_frame;
                                      uniform vec4 rand_preset;

                                      uniform float fShader;

                                      float PI = `).concat(Math.PI,`;

                                      `).concat(r,`

                                      void main(void) {
                                        vec3 ret;
                                        vec2 uv = vUv;
                                        vec2 uv_orig = vUv;
                                        uv.y = 1.0 - uv.y;
                                        uv_orig.y = 1.0 - uv_orig.y;
                                        float rad = length(uv - 0.5);
                                        float ang = atan(uv.x - 0.5, uv.y - 0.5);
                                        vec3 hue_shader = vColor.rgb;

                                        `).concat(e,`

                                        fragColor = vec4(ret, vColor.a);
                                      }`)),this.gl.compileShader(b),this.gl.attachShader(this.shaderProgram,x),this.gl.attachShader(this.shaderProgram,b),this.gl.linkProgram(this.shaderProgram),this.positionLocation=this.gl.getAttribLocation(this.shaderProgram,"aPos"),this.compColorLocation=this.gl.getAttribLocation(this.shaderProgram,"aCompColor"),this.textureLoc=this.gl.getUniformLocation(this.shaderProgram,"sampler_main"),this.textureFWLoc=this.gl.getUniformLocation(this.shaderProgram,"sampler_fw_main"),this.textureFCLoc=this.gl.getUniformLocation(this.shaderProgram,"sampler_fc_main"),this.texturePWLoc=this.gl.getUniformLocation(this.shaderProgram,"sampler_pw_main"),this.texturePCLoc=this.gl.getUniformLocation(this.shaderProgram,"sampler_pc_main"),this.blurTexture1Loc=this.gl.getUniformLocation(this.shaderProgram,"sampler_blur1"),this.blurTexture2Loc=this.gl.getUniformLocation(this.shaderProgram,"sampler_blur2"),this.blurTexture3Loc=this.gl.getUniformLocation(this.shaderProgram,"sampler_blur3"),this.noiseLQLoc=this.gl.getUniformLocation(this.shaderProgram,"sampler_noise_lq"),this.noiseMQLoc=this.gl.getUniformLocation(this.shaderProgram,"sampler_noise_mq"),this.noiseHQLoc=this.gl.getUniformLocation(this.shaderProgram,"sampler_noise_hq"),this.noiseLQLiteLoc=this.gl.getUniformLocation(this.shaderProgram,"sampler_noise_lq_lite"),this.noisePointLQLoc=this.gl.getUniformLocation(this.shaderProgram,"sampler_pw_noise_lq"),this.noiseVolLQLoc=this.gl.getUniformLocation(this.shaderProgram,"sampler_noisevol_lq"),this.noiseVolHQLoc=this.gl.getUniformLocation(this.shaderProgram,"sampler_noisevol_hq"),this.timeLoc=this.gl.getUniformLocation(this.shaderProgram,"time"),this.gammaAdjLoc=this.gl.getUniformLocation(this.shaderProgram,"gammaAdj"),this.echoZoomLoc=this.gl.getUniformLocation(this.shaderProgram,"echo_zoom"),this.echoAlphaLoc=this.gl.getUniformLocation(this.shaderProgram,"echo_alpha"),this.echoOrientationLoc=this.gl.getUniformLocation(this.shaderProgram,"echo_orientation"),this.invertLoc=this.gl.getUniformLocation(this.shaderProgram,"invert"),this.brightenLoc=this.gl.getUniformLocation(this.shaderProgram,"brighten"),this.darkenLoc=this.gl.getUniformLocation(this.shaderProgram,"darken"),this.solarizeLoc=this.gl.getUniformLocation(this.shaderProgram,"solarize"),this.texsizeLoc=this.gl.getUniformLocation(this.shaderProgram,"texsize"),this.texsizeNoiseLQLoc=this.gl.getUniformLocation(this.shaderProgram,"texsize_noise_lq"),this.texsizeNoiseMQLoc=this.gl.getUniformLocation(this.shaderProgram,"texsize_noise_mq"),this.texsizeNoiseHQLoc=this.gl.getUniformLocation(this.shaderProgram,"texsize_noise_hq"),this.texsizeNoiseLQLiteLoc=this.gl.getUniformLocation(this.shaderProgram,"texsize_noise_lq_lite"),this.texsizeNoiseVolLQLoc=this.gl.getUniformLocation(this.shaderProgram,"texsize_noisevol_lq"),this.texsizeNoiseVolHQLoc=this.gl.getUniformLocation(this.shaderProgram,"texsize_noisevol_hq"),this.resolutionLoc=this.gl.getUniformLocation(this.shaderProgram,"resolution"),this.aspectLoc=this.gl.getUniformLocation(this.shaderProgram,"aspect"),this.bassLoc=this.gl.getUniformLocation(this.shaderProgram,"bass"),this.midLoc=this.gl.getUniformLocation(this.shaderProgram,"mid"),this.trebLoc=this.gl.getUniformLocation(this.shaderProgram,"treb"),this.volLoc=this.gl.getUniformLocation(this.shaderProgram,"vol"),this.bassAttLoc=this.gl.getUniformLocation(this.shaderProgram,"bass_att"),this.midAttLoc=this.gl.getUniformLocation(this.shaderProgram,"mid_att"),this.trebAttLoc=this.gl.getUniformLocation(this.shaderProgram,"treb_att"),this.volAttLoc=this.gl.getUniformLocation(this.shaderProgram,"vol_att"),this.frameLoc=this.gl.getUniformLocation(this.shaderProgram,"frame"),this.fpsLoc=this.gl.getUniformLocation(this.shaderProgram,"fps"),this.blur1MinLoc=this.gl.getUniformLocation(this.shaderProgram,"blur1_min"),this.blur1MaxLoc=this.gl.getUniformLocation(this.shaderProgram,"blur1_max"),this.blur2MinLoc=this.gl.getUniformLocation(this.shaderProgram,"blur2_min"),this.blur2MaxLoc=this.gl.getUniformLocation(this.shaderProgram,"blur2_max"),this.blur3MinLoc=this.gl.getUniformLocation(this.shaderProgram,"blur3_min"),this.blur3MaxLoc=this.gl.getUniformLocation(this.shaderProgram,"blur3_max"),this.scale1Loc=this.gl.getUniformLocation(this.shaderProgram,"scale1"),this.scale2Loc=this.gl.getUniformLocation(this.shaderProgram,"scale2"),this.scale3Loc=this.gl.getUniformLocation(this.shaderProgram,"scale3"),this.bias1Loc=this.gl.getUniformLocation(this.shaderProgram,"bias1"),this.bias2Loc=this.gl.getUniformLocation(this.shaderProgram,"bias2"),this.bias3Loc=this.gl.getUniformLocation(this.shaderProgram,"bias3"),this.randPresetLoc=this.gl.getUniformLocation(this.shaderProgram,"rand_preset"),this.randFrameLoc=this.gl.getUniformLocation(this.shaderProgram,"rand_frame"),this.fShaderLoc=this.gl.getUniformLocation(this.shaderProgram,"fShader"),this.qaLoc=this.gl.getUniformLocation(this.shaderProgram,"_qa"),this.qbLoc=this.gl.getUniformLocation(this.shaderProgram,"_qb"),this.qcLoc=this.gl.getUniformLocation(this.shaderProgram,"_qc"),this.qdLoc=this.gl.getUniformLocation(this.shaderProgram,"_qd"),this.qeLoc=this.gl.getUniformLocation(this.shaderProgram,"_qe"),this.qfLoc=this.gl.getUniformLocation(this.shaderProgram,"_qf"),this.qgLoc=this.gl.getUniformLocation(this.shaderProgram,"_qg"),this.qhLoc=this.gl.getUniformLocation(this.shaderProgram,"_qh"),this.slowRoamCosLoc=this.gl.getUniformLocation(this.shaderProgram,"slow_roam_cos"),this.roamCosLoc=this.gl.getUniformLocation(this.shaderProgram,"roam_cos"),this.slowRoamSinLoc=this.gl.getUniformLocation(this.shaderProgram,"slow_roam_sin"),this.roamSinLoc=this.gl.getUniformLocation(this.shaderProgram,"roam_sin");for(var u=0;u<this.userTextures.length;u++){var n=this.userTextures[u];n.textureLoc=this.gl.getUniformLocation(this.shaderProgram,"sampler_".concat(n.sampler))}}},{key:"updateShader",value:function(a){this.createShader(a)}},{key:"bindBlurVals",value:function(a,e){var r=a[0],_=a[1],x=a[2],b=e[0],u=e[1],n=e[2],R=b-r,V=r,k=u-_,T=_,L=n-x,U=x;this.gl.uniform1f(this.blur1MinLoc,r),this.gl.uniform1f(this.blur1MaxLoc,b),this.gl.uniform1f(this.blur2MinLoc,_),this.gl.uniform1f(this.blur2MaxLoc,u),this.gl.uniform1f(this.blur3MinLoc,x),this.gl.uniform1f(this.blur3MaxLoc,n),this.gl.uniform1f(this.scale1Loc,R),this.gl.uniform1f(this.scale2Loc,k),this.gl.uniform1f(this.scale3Loc,L),this.gl.uniform1f(this.bias1Loc,V),this.gl.uniform1f(this.bias2Loc,T),this.gl.uniform1f(this.bias3Loc,U)}},{key:"generateCompColors",value:function(a,e,r){for(var _=m.generateHueBase(e),x=this.compWidth+1,b=this.compHeight+1,u=new Float32Array(x*b*4),n=0,R=0;R<b;R++)for(var V=0;V<x;V++){for(var k=V/this.compWidth,T=R/this.compHeight,L=[1,1,1],U=0;U<3;U++)L[U]=_[0+U]*k*T+_[3+U]*(1-k)*T+_[6+U]*k*(1-T)+_[9+U]*(1-k)*(1-T);var O=1;if(a){k*=this.mesh_width+1,T*=this.mesh_height+1,k=Math.clamp(k,0,this.mesh_width-1),T=Math.clamp(T,0,this.mesh_height-1);var j=Math.floor(k),C=Math.floor(T),B=k-j,E=T-C,d=r[(C*(this.mesh_width+1)+j)*4+3],f=r[(C*(this.mesh_width+1)+(j+1))*4+3],P=r[((C+1)*(this.mesh_width+1)+j)*4+3],I=r[((C+1)*(this.mesh_width+1)+(j+1))*4+3];O=d*(1-B)*(1-E)+f*B*(1-E)+P*(1-B)*E+I*B*E}u[n+0]=L[0],u[n+1]=L[1],u[n+2]=L[2],u[n+3]=O,n+=4}return u}},{key:"renderQuadTexture",value:function(a,e,r,_,x,b,u,n,R){var V=this.generateCompColors(a,n,R);this.gl.useProgram(this.shaderProgram),this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER,this.indexBuf),this.gl.bufferData(this.gl.ELEMENT_ARRAY_BUFFER,this.indices,this.gl.STATIC_DRAW),this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.positionVertexBuf),this.gl.bufferData(this.gl.ARRAY_BUFFER,this.vertices,this.gl.STATIC_DRAW),this.gl.vertexAttribPointer(this.positionLocation,3,this.gl.FLOAT,!1,0,0),this.gl.enableVertexAttribArray(this.positionLocation),this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.compColorVertexBuf),this.gl.bufferData(this.gl.ARRAY_BUFFER,V,this.gl.STATIC_DRAW),this.gl.vertexAttribPointer(this.compColorLocation,4,this.gl.FLOAT,!1,0,0),this.gl.enableVertexAttribArray(this.compColorLocation);var k=n.wrap!==0?this.gl.REPEAT:this.gl.CLAMP_TO_EDGE;this.gl.samplerParameteri(this.mainSampler,this.gl.TEXTURE_WRAP_S,k),this.gl.samplerParameteri(this.mainSampler,this.gl.TEXTURE_WRAP_T,k),this.gl.activeTexture(this.gl.TEXTURE0),this.gl.bindTexture(this.gl.TEXTURE_2D,e),this.gl.bindSampler(0,this.mainSampler),this.gl.uniform1i(this.textureLoc,0),this.gl.activeTexture(this.gl.TEXTURE1),this.gl.bindTexture(this.gl.TEXTURE_2D,e),this.gl.bindSampler(1,this.mainSamplerFW),this.gl.uniform1i(this.textureFWLoc,1),this.gl.activeTexture(this.gl.TEXTURE2),this.gl.bindTexture(this.gl.TEXTURE_2D,e),this.gl.bindSampler(2,this.mainSamplerFC),this.gl.uniform1i(this.textureFCLoc,2),this.gl.activeTexture(this.gl.TEXTURE3),this.gl.bindTexture(this.gl.TEXTURE_2D,e),this.gl.bindSampler(3,this.mainSamplerPW),this.gl.uniform1i(this.texturePWLoc,3),this.gl.activeTexture(this.gl.TEXTURE4),this.gl.bindTexture(this.gl.TEXTURE_2D,e),this.gl.bindSampler(4,this.mainSamplerPC),this.gl.uniform1i(this.texturePCLoc,4),this.gl.activeTexture(this.gl.TEXTURE5),this.gl.bindTexture(this.gl.TEXTURE_2D,r),this.gl.uniform1i(this.blurTexture1Loc,5),this.gl.activeTexture(this.gl.TEXTURE6),this.gl.bindTexture(this.gl.TEXTURE_2D,_),this.gl.uniform1i(this.blurTexture2Loc,6),this.gl.activeTexture(this.gl.TEXTURE7),this.gl.bindTexture(this.gl.TEXTURE_2D,x),this.gl.uniform1i(this.blurTexture3Loc,7),this.gl.activeTexture(this.gl.TEXTURE8),this.gl.bindTexture(this.gl.TEXTURE_2D,this.noise.noiseTexLQ),this.gl.uniform1i(this.noiseLQLoc,8),this.gl.activeTexture(this.gl.TEXTURE9),this.gl.bindTexture(this.gl.TEXTURE_2D,this.noise.noiseTexMQ),this.gl.uniform1i(this.noiseMQLoc,9),this.gl.activeTexture(this.gl.TEXTURE10),this.gl.bindTexture(this.gl.TEXTURE_2D,this.noise.noiseTexHQ),this.gl.uniform1i(this.noiseHQLoc,10),this.gl.activeTexture(this.gl.TEXTURE11),this.gl.bindTexture(this.gl.TEXTURE_2D,this.noise.noiseTexLQLite),this.gl.uniform1i(this.noiseLQLiteLoc,11),this.gl.activeTexture(this.gl.TEXTURE12),this.gl.bindTexture(this.gl.TEXTURE_2D,this.noise.noiseTexLQ),this.gl.bindSampler(12,this.noise.noiseTexPointLQ),this.gl.uniform1i(this.noisePointLQLoc,12),this.gl.activeTexture(this.gl.TEXTURE13),this.gl.bindTexture(this.gl.TEXTURE_3D,this.noise.noiseTexVolLQ),this.gl.uniform1i(this.noiseVolLQLoc,13),this.gl.activeTexture(this.gl.TEXTURE14),this.gl.bindTexture(this.gl.TEXTURE_3D,this.noise.noiseTexVolHQ),this.gl.uniform1i(this.noiseVolHQLoc,14);for(var T=0;T<this.userTextures.length;T++){var L=this.userTextures[T];this.gl.activeTexture(this.gl.TEXTURE15+T),this.gl.bindTexture(this.gl.TEXTURE_2D,this.image.getTexture(L.sampler)),this.gl.uniform1i(L.textureLoc,15+T)}this.gl.uniform1f(this.timeLoc,n.time),this.gl.uniform1f(this.gammaAdjLoc,n.gammaadj),this.gl.uniform1f(this.echoZoomLoc,n.echo_zoom),this.gl.uniform1f(this.echoAlphaLoc,n.echo_alpha),this.gl.uniform1f(this.echoOrientationLoc,n.echo_orient),this.gl.uniform1i(this.invertLoc,n.invert),this.gl.uniform1i(this.brightenLoc,n.brighten),this.gl.uniform1i(this.darkenLoc,n.darken),this.gl.uniform1i(this.solarizeLoc,n.solarize),this.gl.uniform2fv(this.resolutionLoc,[this.texsizeX,this.texsizeY]),this.gl.uniform4fv(this.aspectLoc,[this.aspectx,this.aspecty,this.invAspectx,this.invAspecty]),this.gl.uniform4fv(this.texsizeLoc,new Float32Array([this.texsizeX,this.texsizeY,1/this.texsizeX,1/this.texsizeY])),this.gl.uniform4fv(this.texsizeNoiseLQLoc,[256,256,1/256,1/256]),this.gl.uniform4fv(this.texsizeNoiseMQLoc,[256,256,1/256,1/256]),this.gl.uniform4fv(this.texsizeNoiseHQLoc,[256,256,1/256,1/256]),this.gl.uniform4fv(this.texsizeNoiseLQLiteLoc,[32,32,1/32,1/32]),this.gl.uniform4fv(this.texsizeNoiseVolLQLoc,[32,32,1/32,1/32]),this.gl.uniform4fv(this.texsizeNoiseVolHQLoc,[32,32,1/32,1/32]),this.gl.uniform1f(this.bassLoc,n.bass),this.gl.uniform1f(this.midLoc,n.mid),this.gl.uniform1f(this.trebLoc,n.treb),this.gl.uniform1f(this.volLoc,(n.bass+n.mid+n.treb)/3),this.gl.uniform1f(this.bassAttLoc,n.bass_att),this.gl.uniform1f(this.midAttLoc,n.mid_att),this.gl.uniform1f(this.trebAttLoc,n.treb_att),this.gl.uniform1f(this.volAttLoc,(n.bass_att+n.mid_att+n.treb_att)/3),this.gl.uniform1f(this.frameLoc,n.frame),this.gl.uniform1f(this.fpsLoc,n.fps),this.gl.uniform4fv(this.randPresetLoc,n.rand_preset),this.gl.uniform4fv(this.randFrameLoc,new Float32Array([Math.random(),Math.random(),Math.random(),Math.random()])),this.gl.uniform1f(this.fShaderLoc,n.fshader),this.gl.uniform4fv(this.qaLoc,new Float32Array([n.q1||0,n.q2||0,n.q3||0,n.q4||0])),this.gl.uniform4fv(this.qbLoc,new Float32Array([n.q5||0,n.q6||0,n.q7||0,n.q8||0])),this.gl.uniform4fv(this.qcLoc,new Float32Array([n.q9||0,n.q10||0,n.q11||0,n.q12||0])),this.gl.uniform4fv(this.qdLoc,new Float32Array([n.q13||0,n.q14||0,n.q15||0,n.q16||0])),this.gl.uniform4fv(this.qeLoc,new Float32Array([n.q17||0,n.q18||0,n.q19||0,n.q20||0])),this.gl.uniform4fv(this.qfLoc,new Float32Array([n.q21||0,n.q22||0,n.q23||0,n.q24||0])),this.gl.uniform4fv(this.qgLoc,new Float32Array([n.q25||0,n.q26||0,n.q27||0,n.q28||0])),this.gl.uniform4fv(this.qhLoc,new Float32Array([n.q29||0,n.q30||0,n.q31||0,n.q32||0])),this.gl.uniform4fv(this.slowRoamCosLoc,[.5+.5*Math.cos(n.time*.005),.5+.5*Math.cos(n.time*.008),.5+.5*Math.cos(n.time*.013),.5+.5*Math.cos(n.time*.022)]),this.gl.uniform4fv(this.roamCosLoc,[.5+.5*Math.cos(n.time*.3),.5+.5*Math.cos(n.time*1.3),.5+.5*Math.cos(n.time*5),.5+.5*Math.cos(n.time*20)]),this.gl.uniform4fv(this.slowRoamSinLoc,[.5+.5*Math.sin(n.time*.005),.5+.5*Math.sin(n.time*.008),.5+.5*Math.sin(n.time*.013),.5+.5*Math.sin(n.time*.022)]),this.gl.uniform4fv(this.roamSinLoc,[.5+.5*Math.sin(n.time*.3),.5+.5*Math.sin(n.time*1.3),.5+.5*Math.sin(n.time*5),.5+.5*Math.sin(n.time*20)]),this.bindBlurVals(b,u),a?this.gl.blendFunc(this.gl.SRC_ALPHA,this.gl.ONE_MINUS_SRC_ALPHA):this.gl.disable(this.gl.BLEND),this.gl.drawElements(this.gl.TRIANGLES,this.indices.length,this.gl.UNSIGNED_SHORT,0),a||this.gl.enable(this.gl.BLEND)}}],[{key:"generateHueBase",value:function(a){for(var e=new Float32Array([1,1,1,1,1,1,1,1,1,1,1,1]),r=0;r<4;r++){e[r*3+0]=.6+.3*Math.sin(a.time*30*.0143+3+r*21+a.rand_start[3]),e[r*3+1]=.6+.3*Math.sin(a.time*30*.0107+1+r*13+a.rand_start[1]),e[r*3+2]=.6+.3*Math.sin(a.time*30*.0129+6+r*9+a.rand_start[2]);for(var _=Math.max(e[r*3],e[r*3+1],e[r*3+2]),x=0;x<3;x++)e[r*3+x]=e[r*3+x]/_,e[r*3+x]=.5+.5*e[r*3+x]}return e}}]),m}()},"./src/rendering/shaders/output.js":function(o,l,s){"use strict";s.r(l),s.d(l,"default",function(){return p});var y=s("./src/rendering/shaders/shaderUtils.js");function z(m,t){if(!(m instanceof t))throw new TypeError("Cannot call a class as a function")}function A(m,t){for(var a=0;a<t.length;a++){var e=t[a];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(m,e.key,e)}}function h(m,t,a){return t&&A(m.prototype,t),a&&A(m,a),m}var p=function(){function m(t,a){z(this,m),this.gl=t,this.textureRatio=a.textureRatio,this.texsizeX=a.texsizeX,this.texsizeY=a.texsizeY,this.positions=new Float32Array([-1,-1,1,-1,-1,1,1,1]),this.vertexBuf=this.gl.createBuffer(),this.floatPrecision=y.default.getFragmentFloatPrecision(this.gl),this.useFXAA()?this.createFXAAShader():this.createShader()}return h(m,[{key:"useFXAA",value:function(){return this.textureRatio<=1}},{key:"updateGlobals",value:function(a){this.textureRatio=a.textureRatio,this.texsizeX=a.texsizeX,this.texsizeY=a.texsizeY,this.gl.deleteProgram(this.shaderProgram),this.useFXAA()?this.createFXAAShader():this.createShader()}},{key:"createFXAAShader",value:function(){this.shaderProgram=this.gl.createProgram();var a=this.gl.createShader(this.gl.VERTEX_SHADER);this.gl.shaderSource(a,`#version 300 es
       const vec2 halfmad = vec2(0.5);
       in vec2 aPos;
       out vec2 v_rgbM;
       out vec2 v_rgbNW;
       out vec2 v_rgbNE;
       out vec2 v_rgbSW;
       out vec2 v_rgbSE;
       uniform vec4 texsize;
       void main(void) {
         gl_Position = vec4(aPos, 0.0, 1.0);

         v_rgbM = aPos * halfmad + halfmad;
         v_rgbNW = v_rgbM + (vec2(-1.0, -1.0) * texsize.zx);
         v_rgbNE = v_rgbM + (vec2(1.0, -1.0) * texsize.zx);
         v_rgbSW = v_rgbM + (vec2(-1.0, 1.0) * texsize.zx);
         v_rgbSE = v_rgbM + (vec2(1.0, 1.0) * texsize.zx);
       }`),this.gl.compileShader(a);var e=this.gl.createShader(this.gl.FRAGMENT_SHADER);this.gl.shaderSource(e,`#version 300 es
       precision `.concat(this.floatPrecision,` float;
       precision highp int;
       precision mediump sampler2D;

       in vec2 v_rgbM;
       in vec2 v_rgbNW;
       in vec2 v_rgbNE;
       in vec2 v_rgbSW;
       in vec2 v_rgbSE;
       out vec4 fragColor;
       uniform vec4 texsize;
       uniform sampler2D uTexture;

       #ifndef FXAA_REDUCE_MIN
         #define FXAA_REDUCE_MIN   (1.0/ 128.0)
       #endif
       #ifndef FXAA_REDUCE_MUL
         #define FXAA_REDUCE_MUL   (1.0 / 8.0)
       #endif
       #ifndef FXAA_SPAN_MAX
         #define FXAA_SPAN_MAX     8.0
       #endif

       void main(void) {
         vec4 color;
         vec3 rgbNW = textureLod(uTexture, v_rgbNW, 0.0).xyz;
         vec3 rgbNE = textureLod(uTexture, v_rgbNE, 0.0).xyz;
         vec3 rgbSW = textureLod(uTexture, v_rgbSW, 0.0).xyz;
         vec3 rgbSE = textureLod(uTexture, v_rgbSE, 0.0).xyz;
         vec3 rgbM  = textureLod(uTexture, v_rgbM, 0.0).xyz;
         vec3 luma = vec3(0.299, 0.587, 0.114);
         float lumaNW = dot(rgbNW, luma);
         float lumaNE = dot(rgbNE, luma);
         float lumaSW = dot(rgbSW, luma);
         float lumaSE = dot(rgbSE, luma);
         float lumaM  = dot(rgbM,  luma);
         float lumaMin = min(lumaM, min(min(lumaNW, lumaNE), min(lumaSW, lumaSE)));
         float lumaMax = max(lumaM, max(max(lumaNW, lumaNE), max(lumaSW, lumaSE)));

         mediump vec2 dir;
         dir.x = -((lumaNW + lumaNE) - (lumaSW + lumaSE));
         dir.y =  ((lumaNW + lumaSW) - (lumaNE + lumaSE));

         float dirReduce = max((lumaNW + lumaNE + lumaSW + lumaSE) *
                               (0.25 * FXAA_REDUCE_MUL), FXAA_REDUCE_MIN);

         float rcpDirMin = 1.0 / (min(abs(dir.x), abs(dir.y)) + dirReduce);
         dir = min(vec2(FXAA_SPAN_MAX, FXAA_SPAN_MAX),
                   max(vec2(-FXAA_SPAN_MAX, -FXAA_SPAN_MAX),
                   dir * rcpDirMin)) * texsize.zw;

         vec3 rgbA = 0.5 * (
             textureLod(uTexture, v_rgbM + dir * (1.0 / 3.0 - 0.5), 0.0).xyz +
             textureLod(uTexture, v_rgbM + dir * (2.0 / 3.0 - 0.5), 0.0).xyz);
         vec3 rgbB = rgbA * 0.5 + 0.25 * (
             textureLod(uTexture, v_rgbM + dir * -0.5, 0.0).xyz +
             textureLod(uTexture, v_rgbM + dir * 0.5, 0.0).xyz);

         float lumaB = dot(rgbB, luma);
         if ((lumaB < lumaMin) || (lumaB > lumaMax))
           color = vec4(rgbA, 1.0);
         else
           color = vec4(rgbB, 1.0);

         fragColor = color;
       }`)),this.gl.compileShader(e),this.gl.attachShader(this.shaderProgram,a),this.gl.attachShader(this.shaderProgram,e),this.gl.linkProgram(this.shaderProgram),this.positionLocation=this.gl.getAttribLocation(this.shaderProgram,"aPos"),this.textureLoc=this.gl.getUniformLocation(this.shaderProgram,"uTexture"),this.texsizeLoc=this.gl.getUniformLocation(this.shaderProgram,"texsize")}},{key:"createShader",value:function(){this.shaderProgram=this.gl.createProgram();var a=this.gl.createShader(this.gl.VERTEX_SHADER);this.gl.shaderSource(a,`#version 300 es
       const vec2 halfmad = vec2(0.5);
       in vec2 aPos;
       out vec2 uv;
       void main(void) {
         gl_Position = vec4(aPos, 0.0, 1.0);
         uv = aPos * halfmad + halfmad;
       }`),this.gl.compileShader(a);var e=this.gl.createShader(this.gl.FRAGMENT_SHADER);this.gl.shaderSource(e,`#version 300 es
       precision `.concat(this.floatPrecision,` float;
       precision highp int;
       precision mediump sampler2D;

       in vec2 uv;
       out vec4 fragColor;
       uniform sampler2D uTexture;

       void main(void) {
         fragColor = vec4(texture(uTexture, uv).rgb, 1.0);
       }`)),this.gl.compileShader(e),this.gl.attachShader(this.shaderProgram,a),this.gl.attachShader(this.shaderProgram,e),this.gl.linkProgram(this.shaderProgram),this.positionLocation=this.gl.getAttribLocation(this.shaderProgram,"aPos"),this.textureLoc=this.gl.getUniformLocation(this.shaderProgram,"uTexture")}},{key:"renderQuadTexture",value:function(a){this.gl.useProgram(this.shaderProgram),this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.vertexBuf),this.gl.bufferData(this.gl.ARRAY_BUFFER,this.positions,this.gl.STATIC_DRAW),this.gl.vertexAttribPointer(this.positionLocation,2,this.gl.FLOAT,!1,0,0),this.gl.enableVertexAttribArray(this.positionLocation),this.gl.activeTexture(this.gl.TEXTURE0),this.gl.bindTexture(this.gl.TEXTURE_2D,a),this.gl.uniform1i(this.textureLoc,0),this.useFXAA()&&this.gl.uniform4fv(this.texsizeLoc,new Float32Array([this.texsizeX,this.texsizeY,1/this.texsizeX,1/this.texsizeY])),this.gl.blendFunc(this.gl.SRC_ALPHA,this.gl.ONE_MINUS_SRC_ALPHA),this.gl.drawArrays(this.gl.TRIANGLE_STRIP,0,4)}}]),m}()},"./src/rendering/shaders/resample.js":function(o,l,s){"use strict";s.r(l),s.d(l,"default",function(){return p});var y=s("./src/rendering/shaders/shaderUtils.js");function z(m,t){if(!(m instanceof t))throw new TypeError("Cannot call a class as a function")}function A(m,t){for(var a=0;a<t.length;a++){var e=t[a];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(m,e.key,e)}}function h(m,t,a){return t&&A(m.prototype,t),a&&A(m,a),m}var p=function(){function m(t){z(this,m),this.gl=t,this.positions=new Float32Array([-1,-1,1,-1,-1,1,1,1]),this.vertexBuf=this.gl.createBuffer(),this.floatPrecision=y.default.getFragmentFloatPrecision(this.gl),this.createShader()}return h(m,[{key:"createShader",value:function(){this.shaderProgram=this.gl.createProgram();var a=this.gl.createShader(this.gl.VERTEX_SHADER);this.gl.shaderSource(a,`#version 300 es
       const vec2 halfmad = vec2(0.5);
       in vec2 aPos;
       out vec2 uv;
       void main(void) {
         gl_Position = vec4(aPos, 0.0, 1.0);
         uv = aPos * halfmad + halfmad;
       }`),this.gl.compileShader(a);var e=this.gl.createShader(this.gl.FRAGMENT_SHADER);this.gl.shaderSource(e,`#version 300 es
       precision `.concat(this.floatPrecision,` float;
       precision highp int;
       precision mediump sampler2D;

       in vec2 uv;
       out vec4 fragColor;
       uniform sampler2D uTexture;

       void main(void) {
         fragColor = vec4(texture(uTexture, uv).rgb, 1.0);
       }`)),this.gl.compileShader(e),this.gl.attachShader(this.shaderProgram,a),this.gl.attachShader(this.shaderProgram,e),this.gl.linkProgram(this.shaderProgram),this.positionLocation=this.gl.getAttribLocation(this.shaderProgram,"aPos"),this.textureLoc=this.gl.getUniformLocation(this.shaderProgram,"uTexture")}},{key:"renderQuadTexture",value:function(a){this.gl.useProgram(this.shaderProgram),this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.vertexBuf),this.gl.bufferData(this.gl.ARRAY_BUFFER,this.positions,this.gl.STATIC_DRAW),this.gl.vertexAttribPointer(this.positionLocation,2,this.gl.FLOAT,!1,0,0),this.gl.enableVertexAttribArray(this.positionLocation),this.gl.activeTexture(this.gl.TEXTURE0),this.gl.bindTexture(this.gl.TEXTURE_2D,a),this.gl.generateMipmap(this.gl.TEXTURE_2D),this.gl.uniform1i(this.textureLoc,0),this.gl.blendFunc(this.gl.SRC_ALPHA,this.gl.ONE_MINUS_SRC_ALPHA),this.gl.drawArrays(this.gl.TRIANGLE_STRIP,0,4)}}]),m}()},"./src/rendering/shaders/shaderUtils.js":function(o,l,s){"use strict";s.r(l),s.d(l,"default",function(){return m});function y(t,a){if(!(t instanceof a))throw new TypeError("Cannot call a class as a function")}function z(t,a){for(var e=0;e<a.length;e++){var r=a[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function A(t,a,e){return a&&z(t.prototype,a),e&&z(t,e),t}var h=/uniform sampler2D sampler_(?:.+?);/g,p=/uniform sampler2D sampler_(.+?);/,m=function(){function t(){y(this,t)}return A(t,null,[{key:"getShaderParts",value:function(e){var r=e.indexOf("shader_body");if(e&&r>-1){var _=e.substring(0,r),x=e.substring(r),b=x.indexOf("{"),u=x.lastIndexOf("}"),n=x.substring(b+1,u);return[_,n]}return["",e]}},{key:"getFragmentFloatPrecision",value:function(e){return e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0?"highp":e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}},{key:"getUserSamplers",value:function(e){var r=[],_=e.match(h);if(_&&_.length>0)for(var x=0;x<_.length;x++){var b=_[x].match(p);if(b&&b.length>0){var u=b[1];r.push({sampler:u})}}return r}}]),t}()},"./src/rendering/shaders/warp.js":function(o,l,s){"use strict";s.r(l),s.d(l,"default",function(){return p});var y=s("./src/rendering/shaders/shaderUtils.js");function z(m,t){if(!(m instanceof t))throw new TypeError("Cannot call a class as a function")}function A(m,t){for(var a=0;a<t.length;a++){var e=t[a];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(m,e.key,e)}}function h(m,t,a){return t&&A(m.prototype,t),a&&A(m,a),m}var p=function(){function m(t,a,e){var r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};z(this,m),this.gl=t,this.noise=a,this.image=e,this.texsizeX=r.texsizeX,this.texsizeY=r.texsizeY,this.mesh_width=r.mesh_width,this.mesh_height=r.mesh_height,this.aspectx=r.aspectx,this.aspecty=r.aspecty,this.invAspectx=1/this.aspectx,this.invAspecty=1/this.aspecty,this.buildPositions(),this.indexBuf=t.createBuffer(),this.positionVertexBuf=this.gl.createBuffer(),this.warpUvVertexBuf=this.gl.createBuffer(),this.warpColorVertexBuf=this.gl.createBuffer(),this.floatPrecision=y.default.getFragmentFloatPrecision(this.gl),this.createShader(),this.mainSampler=this.gl.createSampler(),this.mainSamplerFW=this.gl.createSampler(),this.mainSamplerFC=this.gl.createSampler(),this.mainSamplerPW=this.gl.createSampler(),this.mainSamplerPC=this.gl.createSampler(),t.samplerParameteri(this.mainSampler,t.TEXTURE_MIN_FILTER,t.LINEAR_MIPMAP_LINEAR),t.samplerParameteri(this.mainSampler,t.TEXTURE_MAG_FILTER,t.LINEAR),t.samplerParameteri(this.mainSampler,t.TEXTURE_WRAP_S,t.REPEAT),t.samplerParameteri(this.mainSampler,t.TEXTURE_WRAP_T,t.REPEAT),t.samplerParameteri(this.mainSamplerFW,t.TEXTURE_MIN_FILTER,t.LINEAR_MIPMAP_LINEAR),t.samplerParameteri(this.mainSamplerFW,t.TEXTURE_MAG_FILTER,t.LINEAR),t.samplerParameteri(this.mainSamplerFW,t.TEXTURE_WRAP_S,t.REPEAT),t.samplerParameteri(this.mainSamplerFW,t.TEXTURE_WRAP_T,t.REPEAT),t.samplerParameteri(this.mainSamplerFC,t.TEXTURE_MIN_FILTER,t.LINEAR_MIPMAP_LINEAR),t.samplerParameteri(this.mainSamplerFC,t.TEXTURE_MAG_FILTER,t.LINEAR),t.samplerParameteri(this.mainSamplerFC,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.samplerParameteri(this.mainSamplerFC,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),t.samplerParameteri(this.mainSamplerPW,t.TEXTURE_MIN_FILTER,t.NEAREST_MIPMAP_NEAREST),t.samplerParameteri(this.mainSamplerPW,t.TEXTURE_MAG_FILTER,t.NEAREST),t.samplerParameteri(this.mainSamplerPW,t.TEXTURE_WRAP_S,t.REPEAT),t.samplerParameteri(this.mainSamplerPW,t.TEXTURE_WRAP_T,t.REPEAT),t.samplerParameteri(this.mainSamplerPC,t.TEXTURE_MIN_FILTER,t.NEAREST_MIPMAP_NEAREST),t.samplerParameteri(this.mainSamplerPC,t.TEXTURE_MAG_FILTER,t.NEAREST),t.samplerParameteri(this.mainSamplerPC,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.samplerParameteri(this.mainSamplerPC,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE)}return h(m,[{key:"buildPositions",value:function(){for(var a=2,e=2,r=a/2,_=e/2,x=this.mesh_width,b=this.mesh_height,u=x+1,n=b+1,R=a/x,V=e/b,k=[],T=0;T<n;T++)for(var L=T*V-_,U=0;U<u;U++){var O=U*R-r;k.push(O,-L,0)}for(var j=[],C=0;C<b;C++)for(var B=0;B<x;B++){var E=B+u*C,d=B+u*(C+1),f=B+1+u*(C+1),P=B+1+u*C;j.push(E,d,P),j.push(d,f,P)}this.vertices=new Float32Array(k),this.indices=new Uint16Array(j)}},{key:"updateGlobals",value:function(a){this.texsizeX=a.texsizeX,this.texsizeY=a.texsizeY,this.mesh_width=a.mesh_width,this.mesh_height=a.mesh_height,this.aspectx=a.aspectx,this.aspecty=a.aspecty,this.invAspectx=1/this.aspectx,this.invAspecty=1/this.aspecty,this.buildPositions()}},{key:"createShader",value:function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",e,r;if(a.length===0)e="ret = texture(sampler_main, uv).rgb * decay;",r="";else{var _=y.default.getShaderParts(a);r=_[0],e=_[1]}e=e.replace(/texture2D/g,"texture"),e=e.replace(/texture3D/g,"texture"),this.userTextures=y.default.getUserSamplers(r),this.shaderProgram=this.gl.createProgram();var x=this.gl.createShader(this.gl.VERTEX_SHADER);this.gl.shaderSource(x,`#version 300 es
                                      precision `.concat(this.floatPrecision,` float;
                                      const vec2 halfmad = vec2(0.5);
                                      in vec2 aPos;
                                      in vec2 aWarpUv;
                                      in vec4 aWarpColor;
                                      out vec2 uv;
                                      out vec2 uv_orig;
                                      out vec4 vColor;
                                      void main(void) {
                                        gl_Position = vec4(aPos, 0.0, 1.0);
                                        uv_orig = aPos * halfmad + halfmad;
                                        uv = aWarpUv;
                                        vColor = aWarpColor;
                                      }`)),this.gl.compileShader(x);var b=this.gl.createShader(this.gl.FRAGMENT_SHADER);this.gl.shaderSource(b,`#version 300 es
                                      precision `.concat(this.floatPrecision,` float;
                                      precision highp int;
                                      precision mediump sampler2D;
                                      precision mediump sampler3D;

                                      in vec2 uv;
                                      in vec2 uv_orig;
                                      in vec4 vColor;
                                      out vec4 fragColor;
                                      uniform sampler2D sampler_main;
                                      uniform sampler2D sampler_fw_main;
                                      uniform sampler2D sampler_fc_main;
                                      uniform sampler2D sampler_pw_main;
                                      uniform sampler2D sampler_pc_main;
                                      uniform sampler2D sampler_blur1;
                                      uniform sampler2D sampler_blur2;
                                      uniform sampler2D sampler_blur3;
                                      uniform sampler2D sampler_noise_lq;
                                      uniform sampler2D sampler_noise_lq_lite;
                                      uniform sampler2D sampler_noise_mq;
                                      uniform sampler2D sampler_noise_hq;
                                      uniform sampler2D sampler_pw_noise_lq;
                                      uniform sampler3D sampler_noisevol_lq;
                                      uniform sampler3D sampler_noisevol_hq;
                                      uniform float time;
                                      uniform float decay;
                                      uniform vec2 resolution;
                                      uniform vec4 aspect;
                                      uniform vec4 texsize;
                                      uniform vec4 texsize_noise_lq;
                                      uniform vec4 texsize_noise_mq;
                                      uniform vec4 texsize_noise_hq;
                                      uniform vec4 texsize_noise_lq_lite;
                                      uniform vec4 texsize_noisevol_lq;
                                      uniform vec4 texsize_noisevol_hq;

                                      uniform float bass;
                                      uniform float mid;
                                      uniform float treb;
                                      uniform float vol;
                                      uniform float bass_att;
                                      uniform float mid_att;
                                      uniform float treb_att;
                                      uniform float vol_att;

                                      uniform float frame;
                                      uniform float fps;

                                      uniform vec4 _qa;
                                      uniform vec4 _qb;
                                      uniform vec4 _qc;
                                      uniform vec4 _qd;
                                      uniform vec4 _qe;
                                      uniform vec4 _qf;
                                      uniform vec4 _qg;
                                      uniform vec4 _qh;

                                      #define q1 _qa.x
                                      #define q2 _qa.y
                                      #define q3 _qa.z
                                      #define q4 _qa.w
                                      #define q5 _qb.x
                                      #define q6 _qb.y
                                      #define q7 _qb.z
                                      #define q8 _qb.w
                                      #define q9 _qc.x
                                      #define q10 _qc.y
                                      #define q11 _qc.z
                                      #define q12 _qc.w
                                      #define q13 _qd.x
                                      #define q14 _qd.y
                                      #define q15 _qd.z
                                      #define q16 _qd.w
                                      #define q17 _qe.x
                                      #define q18 _qe.y
                                      #define q19 _qe.z
                                      #define q20 _qe.w
                                      #define q21 _qf.x
                                      #define q22 _qf.y
                                      #define q23 _qf.z
                                      #define q24 _qf.w
                                      #define q25 _qg.x
                                      #define q26 _qg.y
                                      #define q27 _qg.z
                                      #define q28 _qg.w
                                      #define q29 _qh.x
                                      #define q30 _qh.y
                                      #define q31 _qh.z
                                      #define q32 _qh.w

                                      uniform vec4 slow_roam_cos;
                                      uniform vec4 roam_cos;
                                      uniform vec4 slow_roam_sin;
                                      uniform vec4 roam_sin;

                                      uniform float blur1_min;
                                      uniform float blur1_max;
                                      uniform float blur2_min;
                                      uniform float blur2_max;
                                      uniform float blur3_min;
                                      uniform float blur3_max;

                                      uniform float scale1;
                                      uniform float scale2;
                                      uniform float scale3;
                                      uniform float bias1;
                                      uniform float bias2;
                                      uniform float bias3;

                                      uniform vec4 rand_frame;
                                      uniform vec4 rand_preset;

                                      float PI = `).concat(Math.PI,`;

                                      `).concat(r,`

                                      void main(void) {
                                        vec3 ret;
                                        float rad = length(uv_orig - 0.5);
                                        float ang = atan(uv_orig.x - 0.5, uv_orig.y - 0.5);

                                        `).concat(e,`

                                        fragColor = vec4(ret, 1.0) * vColor;
                                      }`)),this.gl.compileShader(b),this.gl.attachShader(this.shaderProgram,x),this.gl.attachShader(this.shaderProgram,b),this.gl.linkProgram(this.shaderProgram),this.positionLocation=this.gl.getAttribLocation(this.shaderProgram,"aPos"),this.warpUvLocation=this.gl.getAttribLocation(this.shaderProgram,"aWarpUv"),this.warpColorLocation=this.gl.getAttribLocation(this.shaderProgram,"aWarpColor"),this.textureLoc=this.gl.getUniformLocation(this.shaderProgram,"sampler_main"),this.textureFWLoc=this.gl.getUniformLocation(this.shaderProgram,"sampler_fw_main"),this.textureFCLoc=this.gl.getUniformLocation(this.shaderProgram,"sampler_fc_main"),this.texturePWLoc=this.gl.getUniformLocation(this.shaderProgram,"sampler_pw_main"),this.texturePCLoc=this.gl.getUniformLocation(this.shaderProgram,"sampler_pc_main"),this.blurTexture1Loc=this.gl.getUniformLocation(this.shaderProgram,"sampler_blur1"),this.blurTexture2Loc=this.gl.getUniformLocation(this.shaderProgram,"sampler_blur2"),this.blurTexture3Loc=this.gl.getUniformLocation(this.shaderProgram,"sampler_blur3"),this.noiseLQLoc=this.gl.getUniformLocation(this.shaderProgram,"sampler_noise_lq"),this.noiseMQLoc=this.gl.getUniformLocation(this.shaderProgram,"sampler_noise_mq"),this.noiseHQLoc=this.gl.getUniformLocation(this.shaderProgram,"sampler_noise_hq"),this.noiseLQLiteLoc=this.gl.getUniformLocation(this.shaderProgram,"sampler_noise_lq_lite"),this.noisePointLQLoc=this.gl.getUniformLocation(this.shaderProgram,"sampler_pw_noise_lq"),this.noiseVolLQLoc=this.gl.getUniformLocation(this.shaderProgram,"sampler_noisevol_lq"),this.noiseVolHQLoc=this.gl.getUniformLocation(this.shaderProgram,"sampler_noisevol_hq"),this.decayLoc=this.gl.getUniformLocation(this.shaderProgram,"decay"),this.texsizeLoc=this.gl.getUniformLocation(this.shaderProgram,"texsize"),this.texsizeNoiseLQLoc=this.gl.getUniformLocation(this.shaderProgram,"texsize_noise_lq"),this.texsizeNoiseMQLoc=this.gl.getUniformLocation(this.shaderProgram,"texsize_noise_mq"),this.texsizeNoiseHQLoc=this.gl.getUniformLocation(this.shaderProgram,"texsize_noise_hq"),this.texsizeNoiseLQLiteLoc=this.gl.getUniformLocation(this.shaderProgram,"texsize_noise_lq_lite"),this.texsizeNoiseVolLQLoc=this.gl.getUniformLocation(this.shaderProgram,"texsize_noisevol_lq"),this.texsizeNoiseVolHQLoc=this.gl.getUniformLocation(this.shaderProgram,"texsize_noisevol_hq"),this.resolutionLoc=this.gl.getUniformLocation(this.shaderProgram,"resolution"),this.aspectLoc=this.gl.getUniformLocation(this.shaderProgram,"aspect"),this.bassLoc=this.gl.getUniformLocation(this.shaderProgram,"bass"),this.midLoc=this.gl.getUniformLocation(this.shaderProgram,"mid"),this.trebLoc=this.gl.getUniformLocation(this.shaderProgram,"treb"),this.volLoc=this.gl.getUniformLocation(this.shaderProgram,"vol"),this.bassAttLoc=this.gl.getUniformLocation(this.shaderProgram,"bass_att"),this.midAttLoc=this.gl.getUniformLocation(this.shaderProgram,"mid_att"),this.trebAttLoc=this.gl.getUniformLocation(this.shaderProgram,"treb_att"),this.volAttLoc=this.gl.getUniformLocation(this.shaderProgram,"vol_att"),this.timeLoc=this.gl.getUniformLocation(this.shaderProgram,"time"),this.frameLoc=this.gl.getUniformLocation(this.shaderProgram,"frame"),this.fpsLoc=this.gl.getUniformLocation(this.shaderProgram,"fps"),this.blur1MinLoc=this.gl.getUniformLocation(this.shaderProgram,"blur1_min"),this.blur1MaxLoc=this.gl.getUniformLocation(this.shaderProgram,"blur1_max"),this.blur2MinLoc=this.gl.getUniformLocation(this.shaderProgram,"blur2_min"),this.blur2MaxLoc=this.gl.getUniformLocation(this.shaderProgram,"blur2_max"),this.blur3MinLoc=this.gl.getUniformLocation(this.shaderProgram,"blur3_min"),this.blur3MaxLoc=this.gl.getUniformLocation(this.shaderProgram,"blur3_max"),this.scale1Loc=this.gl.getUniformLocation(this.shaderProgram,"scale1"),this.scale2Loc=this.gl.getUniformLocation(this.shaderProgram,"scale2"),this.scale3Loc=this.gl.getUniformLocation(this.shaderProgram,"scale3"),this.bias1Loc=this.gl.getUniformLocation(this.shaderProgram,"bias1"),this.bias2Loc=this.gl.getUniformLocation(this.shaderProgram,"bias2"),this.bias3Loc=this.gl.getUniformLocation(this.shaderProgram,"bias3"),this.randPresetLoc=this.gl.getUniformLocation(this.shaderProgram,"rand_preset"),this.randFrameLoc=this.gl.getUniformLocation(this.shaderProgram,"rand_frame"),this.qaLoc=this.gl.getUniformLocation(this.shaderProgram,"_qa"),this.qbLoc=this.gl.getUniformLocation(this.shaderProgram,"_qb"),this.qcLoc=this.gl.getUniformLocation(this.shaderProgram,"_qc"),this.qdLoc=this.gl.getUniformLocation(this.shaderProgram,"_qd"),this.qeLoc=this.gl.getUniformLocation(this.shaderProgram,"_qe"),this.qfLoc=this.gl.getUniformLocation(this.shaderProgram,"_qf"),this.qgLoc=this.gl.getUniformLocation(this.shaderProgram,"_qg"),this.qhLoc=this.gl.getUniformLocation(this.shaderProgram,"_qh"),this.slowRoamCosLoc=this.gl.getUniformLocation(this.shaderProgram,"slow_roam_cos"),this.roamCosLoc=this.gl.getUniformLocation(this.shaderProgram,"roam_cos"),this.slowRoamSinLoc=this.gl.getUniformLocation(this.shaderProgram,"slow_roam_sin"),this.roamSinLoc=this.gl.getUniformLocation(this.shaderProgram,"roam_sin");for(var u=0;u<this.userTextures.length;u++){var n=this.userTextures[u];n.textureLoc=this.gl.getUniformLocation(this.shaderProgram,"sampler_".concat(n.sampler))}}},{key:"updateShader",value:function(a){this.createShader(a)}},{key:"bindBlurVals",value:function(a,e){var r=a[0],_=a[1],x=a[2],b=e[0],u=e[1],n=e[2],R=b-r,V=r,k=u-_,T=_,L=n-x,U=x;this.gl.uniform1f(this.blur1MinLoc,r),this.gl.uniform1f(this.blur1MaxLoc,b),this.gl.uniform1f(this.blur2MinLoc,_),this.gl.uniform1f(this.blur2MaxLoc,u),this.gl.uniform1f(this.blur3MinLoc,x),this.gl.uniform1f(this.blur3MaxLoc,n),this.gl.uniform1f(this.scale1Loc,R),this.gl.uniform1f(this.scale2Loc,k),this.gl.uniform1f(this.scale3Loc,L),this.gl.uniform1f(this.bias1Loc,V),this.gl.uniform1f(this.bias2Loc,T),this.gl.uniform1f(this.bias3Loc,U)}},{key:"renderQuadTexture",value:function(a,e,r,_,x,b,u,n,R,V){this.gl.useProgram(this.shaderProgram),this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER,this.indexBuf),this.gl.bufferData(this.gl.ELEMENT_ARRAY_BUFFER,this.indices,this.gl.STATIC_DRAW),this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.positionVertexBuf),this.gl.bufferData(this.gl.ARRAY_BUFFER,this.vertices,this.gl.STATIC_DRAW),this.gl.vertexAttribPointer(this.positionLocation,3,this.gl.FLOAT,!1,0,0),this.gl.enableVertexAttribArray(this.positionLocation),this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.warpUvVertexBuf),this.gl.bufferData(this.gl.ARRAY_BUFFER,R,this.gl.STATIC_DRAW),this.gl.vertexAttribPointer(this.warpUvLocation,2,this.gl.FLOAT,!1,0,0),this.gl.enableVertexAttribArray(this.warpUvLocation),this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.warpColorVertexBuf),this.gl.bufferData(this.gl.ARRAY_BUFFER,V,this.gl.STATIC_DRAW),this.gl.vertexAttribPointer(this.warpColorLocation,4,this.gl.FLOAT,!1,0,0),this.gl.enableVertexAttribArray(this.warpColorLocation);var k=n.wrap!==0?this.gl.REPEAT:this.gl.CLAMP_TO_EDGE;this.gl.samplerParameteri(this.mainSampler,this.gl.TEXTURE_WRAP_S,k),this.gl.samplerParameteri(this.mainSampler,this.gl.TEXTURE_WRAP_T,k),this.gl.activeTexture(this.gl.TEXTURE0),this.gl.bindTexture(this.gl.TEXTURE_2D,e),this.gl.bindSampler(0,this.mainSampler),this.gl.uniform1i(this.textureLoc,0),this.gl.activeTexture(this.gl.TEXTURE1),this.gl.bindTexture(this.gl.TEXTURE_2D,e),this.gl.bindSampler(1,this.mainSamplerFW),this.gl.uniform1i(this.textureFWLoc,1),this.gl.activeTexture(this.gl.TEXTURE2),this.gl.bindTexture(this.gl.TEXTURE_2D,e),this.gl.bindSampler(2,this.mainSamplerFC),this.gl.uniform1i(this.textureFCLoc,2),this.gl.activeTexture(this.gl.TEXTURE3),this.gl.bindTexture(this.gl.TEXTURE_2D,e),this.gl.bindSampler(3,this.mainSamplerPW),this.gl.uniform1i(this.texturePWLoc,3),this.gl.activeTexture(this.gl.TEXTURE4),this.gl.bindTexture(this.gl.TEXTURE_2D,e),this.gl.bindSampler(4,this.mainSamplerPC),this.gl.uniform1i(this.texturePCLoc,4),this.gl.activeTexture(this.gl.TEXTURE5),this.gl.bindTexture(this.gl.TEXTURE_2D,r),this.gl.uniform1i(this.blurTexture1Loc,5),this.gl.activeTexture(this.gl.TEXTURE6),this.gl.bindTexture(this.gl.TEXTURE_2D,_),this.gl.uniform1i(this.blurTexture2Loc,6),this.gl.activeTexture(this.gl.TEXTURE7),this.gl.bindTexture(this.gl.TEXTURE_2D,x),this.gl.uniform1i(this.blurTexture3Loc,7),this.gl.activeTexture(this.gl.TEXTURE8),this.gl.bindTexture(this.gl.TEXTURE_2D,this.noise.noiseTexLQ),this.gl.uniform1i(this.noiseLQLoc,8),this.gl.activeTexture(this.gl.TEXTURE9),this.gl.bindTexture(this.gl.TEXTURE_2D,this.noise.noiseTexMQ),this.gl.uniform1i(this.noiseMQLoc,9),this.gl.activeTexture(this.gl.TEXTURE10),this.gl.bindTexture(this.gl.TEXTURE_2D,this.noise.noiseTexHQ),this.gl.uniform1i(this.noiseHQLoc,10),this.gl.activeTexture(this.gl.TEXTURE11),this.gl.bindTexture(this.gl.TEXTURE_2D,this.noise.noiseTexLQLite),this.gl.uniform1i(this.noiseLQLiteLoc,11),this.gl.activeTexture(this.gl.TEXTURE12),this.gl.bindTexture(this.gl.TEXTURE_2D,this.noise.noiseTexLQ),this.gl.bindSampler(12,this.noise.noiseTexPointLQ),this.gl.uniform1i(this.noisePointLQLoc,12),this.gl.activeTexture(this.gl.TEXTURE13),this.gl.bindTexture(this.gl.TEXTURE_3D,this.noise.noiseTexVolLQ),this.gl.uniform1i(this.noiseVolLQLoc,13),this.gl.activeTexture(this.gl.TEXTURE14),this.gl.bindTexture(this.gl.TEXTURE_3D,this.noise.noiseTexVolHQ),this.gl.uniform1i(this.noiseVolHQLoc,14);for(var T=0;T<this.userTextures.length;T++){var L=this.userTextures[T];this.gl.activeTexture(this.gl.TEXTURE15+T),this.gl.bindTexture(this.gl.TEXTURE_2D,this.image.getTexture(L.sampler)),this.gl.uniform1i(L.textureLoc,15+T)}this.gl.uniform1f(this.decayLoc,n.decay),this.gl.uniform2fv(this.resolutionLoc,[this.texsizeX,this.texsizeY]),this.gl.uniform4fv(this.aspectLoc,[this.aspectx,this.aspecty,this.invAspectx,this.invAspecty]),this.gl.uniform4fv(this.texsizeLoc,[this.texsizeX,this.texsizeY,1/this.texsizeX,1/this.texsizeY]),this.gl.uniform4fv(this.texsizeNoiseLQLoc,[256,256,1/256,1/256]),this.gl.uniform4fv(this.texsizeNoiseMQLoc,[256,256,1/256,1/256]),this.gl.uniform4fv(this.texsizeNoiseHQLoc,[256,256,1/256,1/256]),this.gl.uniform4fv(this.texsizeNoiseLQLiteLoc,[32,32,1/32,1/32]),this.gl.uniform4fv(this.texsizeNoiseVolLQLoc,[32,32,1/32,1/32]),this.gl.uniform4fv(this.texsizeNoiseVolHQLoc,[32,32,1/32,1/32]),this.gl.uniform1f(this.bassLoc,n.bass),this.gl.uniform1f(this.midLoc,n.mid),this.gl.uniform1f(this.trebLoc,n.treb),this.gl.uniform1f(this.volLoc,(n.bass+n.mid+n.treb)/3),this.gl.uniform1f(this.bassAttLoc,n.bass_att),this.gl.uniform1f(this.midAttLoc,n.mid_att),this.gl.uniform1f(this.trebAttLoc,n.treb_att),this.gl.uniform1f(this.volAttLoc,(n.bass_att+n.mid_att+n.treb_att)/3),this.gl.uniform1f(this.timeLoc,n.time),this.gl.uniform1f(this.frameLoc,n.frame),this.gl.uniform1f(this.fpsLoc,n.fps),this.gl.uniform4fv(this.randPresetLoc,n.rand_preset),this.gl.uniform4fv(this.randFrameLoc,new Float32Array([Math.random(),Math.random(),Math.random(),Math.random()])),this.gl.uniform4fv(this.qaLoc,new Float32Array([n.q1||0,n.q2||0,n.q3||0,n.q4||0])),this.gl.uniform4fv(this.qbLoc,new Float32Array([n.q5||0,n.q6||0,n.q7||0,n.q8||0])),this.gl.uniform4fv(this.qcLoc,new Float32Array([n.q9||0,n.q10||0,n.q11||0,n.q12||0])),this.gl.uniform4fv(this.qdLoc,new Float32Array([n.q13||0,n.q14||0,n.q15||0,n.q16||0])),this.gl.uniform4fv(this.qeLoc,new Float32Array([n.q17||0,n.q18||0,n.q19||0,n.q20||0])),this.gl.uniform4fv(this.qfLoc,new Float32Array([n.q21||0,n.q22||0,n.q23||0,n.q24||0])),this.gl.uniform4fv(this.qgLoc,new Float32Array([n.q25||0,n.q26||0,n.q27||0,n.q28||0])),this.gl.uniform4fv(this.qhLoc,new Float32Array([n.q29||0,n.q30||0,n.q31||0,n.q32||0])),this.gl.uniform4fv(this.slowRoamCosLoc,[.5+.5*Math.cos(n.time*.005),.5+.5*Math.cos(n.time*.008),.5+.5*Math.cos(n.time*.013),.5+.5*Math.cos(n.time*.022)]),this.gl.uniform4fv(this.roamCosLoc,[.5+.5*Math.cos(n.time*.3),.5+.5*Math.cos(n.time*1.3),.5+.5*Math.cos(n.time*5),.5+.5*Math.cos(n.time*20)]),this.gl.uniform4fv(this.slowRoamSinLoc,[.5+.5*Math.sin(n.time*.005),.5+.5*Math.sin(n.time*.008),.5+.5*Math.sin(n.time*.013),.5+.5*Math.sin(n.time*.022)]),this.gl.uniform4fv(this.roamSinLoc,[.5+.5*Math.sin(n.time*.3),.5+.5*Math.sin(n.time*1.3),.5+.5*Math.sin(n.time*5),.5+.5*Math.sin(n.time*20)]),this.bindBlurVals(b,u),a?this.gl.blendFunc(this.gl.SRC_ALPHA,this.gl.ONE_MINUS_SRC_ALPHA):this.gl.disable(this.gl.BLEND),this.gl.drawElements(this.gl.TRIANGLES,this.indices.length,this.gl.UNSIGNED_SHORT,0),a||this.gl.enable(this.gl.BLEND)}}]),m}()},"./src/rendering/shapes/customShape.js":function(o,l,s){"use strict";s.r(l),s.d(l,"default",function(){return m});var y=s("./src/utils.js"),z=s("./src/rendering/shaders/shaderUtils.js");function A(t,a){if(!(t instanceof a))throw new TypeError("Cannot call a class as a function")}function h(t,a){for(var e=0;e<a.length;e++){var r=a[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function p(t,a,e){return a&&h(t.prototype,a),e&&h(t,e),t}var m=function(){function t(a,e,r){A(this,t),this.index=a,this.gl=e;var _=101;this.positions=new Float32Array((_+2)*3),this.colors=new Float32Array((_+2)*4),this.uvs=new Float32Array((_+2)*2),this.borderPositions=new Float32Array((_+1)*3),this.texsizeX=r.texsizeX,this.texsizeY=r.texsizeY,this.mesh_width=r.mesh_width,this.mesh_height=r.mesh_height,this.aspectx=r.aspectx,this.aspecty=r.aspecty,this.invAspectx=1/this.aspectx,this.invAspecty=1/this.aspecty,this.positionVertexBuf=this.gl.createBuffer(),this.colorVertexBuf=this.gl.createBuffer(),this.uvVertexBuf=this.gl.createBuffer(),this.borderPositionVertexBuf=this.gl.createBuffer(),this.floatPrecision=z.default.getFragmentFloatPrecision(this.gl),this.createShader(),this.createBorderShader(),this.mainSampler=this.gl.createSampler(),e.samplerParameteri(this.mainSampler,e.TEXTURE_MIN_FILTER,e.LINEAR_MIPMAP_LINEAR),e.samplerParameteri(this.mainSampler,e.TEXTURE_MAG_FILTER,e.LINEAR),e.samplerParameteri(this.mainSampler,e.TEXTURE_WRAP_S,e.REPEAT),e.samplerParameteri(this.mainSampler,e.TEXTURE_WRAP_T,e.REPEAT)}return p(t,[{key:"updateGlobals",value:function(e){this.texsizeX=e.texsizeX,this.texsizeY=e.texsizeY,this.mesh_width=e.mesh_width,this.mesh_height=e.mesh_height,this.aspectx=e.aspectx,this.aspecty=e.aspecty,this.invAspectx=1/this.aspectx,this.invAspecty=1/this.aspecty}},{key:"createShader",value:function(){this.shaderProgram=this.gl.createProgram();var e=this.gl.createShader(this.gl.VERTEX_SHADER);this.gl.shaderSource(e,`#version 300 es
                                      in vec3 aPos;
                                      in vec4 aColor;
                                      in vec2 aUv;
                                      out vec4 vColor;
                                      out vec2 vUv;
                                      void main(void) {
                                        vColor = aColor;
                                        vUv = aUv;
                                        gl_Position = vec4(aPos, 1.0);
                                      }`),this.gl.compileShader(e);var r=this.gl.createShader(this.gl.FRAGMENT_SHADER);this.gl.shaderSource(r,`#version 300 es
                                      precision `.concat(this.floatPrecision,` float;
                                      precision highp int;
                                      precision mediump sampler2D;
                                      uniform sampler2D uTexture;
                                      uniform float uTextured;
                                      in vec4 vColor;
                                      in vec2 vUv;
                                      out vec4 fragColor;
                                      void main(void) {
                                        if (uTextured != 0.0) {
                                          fragColor = texture(uTexture, vUv) * vColor;
                                        } else {
                                          fragColor = vColor;
                                        }
                                      }`)),this.gl.compileShader(r),this.gl.attachShader(this.shaderProgram,e),this.gl.attachShader(this.shaderProgram,r),this.gl.linkProgram(this.shaderProgram),this.aPosLocation=this.gl.getAttribLocation(this.shaderProgram,"aPos"),this.aColorLocation=this.gl.getAttribLocation(this.shaderProgram,"aColor"),this.aUvLocation=this.gl.getAttribLocation(this.shaderProgram,"aUv"),this.texturedLoc=this.gl.getUniformLocation(this.shaderProgram,"uTextured"),this.textureLoc=this.gl.getUniformLocation(this.shaderProgram,"uTexture")}},{key:"createBorderShader",value:function(){this.borderShaderProgram=this.gl.createProgram();var e=this.gl.createShader(this.gl.VERTEX_SHADER);this.gl.shaderSource(e,`#version 300 es
                                      in vec3 aBorderPos;
                                      uniform vec2 thickOffset;
                                      void main(void) {
                                        gl_Position = vec4(aBorderPos +
                                                           vec3(thickOffset, 0.0), 1.0);
                                      }`),this.gl.compileShader(e);var r=this.gl.createShader(this.gl.FRAGMENT_SHADER);this.gl.shaderSource(r,`#version 300 es
                                      precision `.concat(this.floatPrecision,` float;
                                      precision highp int;
                                      precision mediump sampler2D;
                                      out vec4 fragColor;
                                      uniform vec4 uBorderColor;
                                      void main(void) {
                                        fragColor = uBorderColor;
                                      }`)),this.gl.compileShader(r),this.gl.attachShader(this.borderShaderProgram,e),this.gl.attachShader(this.borderShaderProgram,r),this.gl.linkProgram(this.borderShaderProgram),this.aBorderPosLoc=this.gl.getAttribLocation(this.borderShaderProgram,"aBorderPos"),this.uBorderColorLoc=this.gl.getUniformLocation(this.borderShaderProgram,"uBorderColor"),this.thickOffsetLoc=this.gl.getUniformLocation(this.shaderProgram,"thickOffset")}},{key:"drawCustomShape",value:function(e,r,_,x,b){if(x.baseVals.enabled!==0){this.setupShapeBuffers(_.mdVSFrame);for(var u=Object.assign({},_.mdVSShapes[this.index],_.mdVSFrameMapShapes[this.index],_.mdVSQAfterFrame,_.mdVSTShapeInits[this.index],r),n=y.default.cloneVars(u),R=Math.clamp(u.num_inst,1,1024),V=0;V<R;V++){u.instance=V,u.x=n.x,u.y=n.y,u.rad=n.rad,u.ang=n.ang,u.r=n.r,u.g=n.g,u.b=n.b,u.a=n.a,u.r2=n.r2,u.g2=n.g2,u.b2=n.b2,u.a2=n.a2,u.border_r=n.border_r,u.border_g=n.border_g,u.border_b=n.border_b,u.border_a=n.border_a,u.thickoutline=n.thickoutline,u.textured=n.textured,u.tex_zoom=n.tex_zoom,u.tex_ang=n.tex_ang,u.additive=n.additive;var k=x.frame_eqs(u),T=k.sides;T=Math.clamp(T,3,100),T=Math.floor(T);var L=k.rad,U=k.ang,O=k.x*2-1,j=k.y*-2+1,C=k.r,B=k.g,E=k.b,d=k.a,f=k.r2,P=k.g2,I=k.b2,D=k.a2,Q=k.border_r,S=k.border_g,G=k.border_b,aa=k.border_a;this.borderColor=[Q,S,G,aa*e];var ea=k.thickoutline,_a=k.textured,$=k.tex_zoom,ra=k.tex_ang,oa=k.additive,pa=this.borderColor[3]>0,ma=Math.abs(_a)>=1,ta=Math.abs(ea)>=1,sa=Math.abs(oa)>=1;this.positions[0]=O,this.positions[1]=j,this.positions[2]=0,this.colors[0]=C,this.colors[1]=B,this.colors[2]=E,this.colors[3]=d*e,ma&&(this.uvs[0]=.5,this.uvs[1]=.5);for(var Y=Math.PI*.25,Z=1;Z<=T+1;Z++){var la=(Z-1)/T,ya=la*2*Math.PI,ga=ya+U+Y;if(this.positions[Z*3+0]=O+L*Math.cos(ga)*this.aspecty,this.positions[Z*3+1]=j+L*Math.sin(ga),this.positions[Z*3+2]=0,this.colors[Z*4+0]=f,this.colors[Z*4+1]=P,this.colors[Z*4+2]=I,this.colors[Z*4+3]=D*e,ma){var na=ya+ra+Y;this.uvs[Z*2+0]=.5+.5*Math.cos(na)/$*this.aspecty,this.uvs[Z*2+1]=.5+.5*Math.sin(na)/$}pa&&(this.borderPositions[(Z-1)*3+0]=this.positions[Z*3+0],this.borderPositions[(Z-1)*3+1]=this.positions[Z*3+1],this.borderPositions[(Z-1)*3+2]=this.positions[Z*3+2])}this.mdVSShapeFrame=k,this.drawCustomShapeInstance(b,T,ma,pa,ta,sa)}var ha=_.mdVSUserKeysShapes[this.index],za=y.default.pick(this.mdVSShapeFrame,ha);_.mdVSFrameMapShapes[this.index]=za}}},{key:"setupShapeBuffers",value:function(e){this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.positionVertexBuf),this.gl.bufferData(this.gl.ARRAY_BUFFER,this.positions,this.gl.DYNAMIC_DRAW),this.gl.vertexAttribPointer(this.aPosLocation,3,this.gl.FLOAT,!1,0,0),this.gl.enableVertexAttribArray(this.aPosLocation),this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.colorVertexBuf),this.gl.bufferData(this.gl.ARRAY_BUFFER,this.colors,this.gl.DYNAMIC_DRAW),this.gl.vertexAttribPointer(this.aColorLocation,4,this.gl.FLOAT,!1,0,0),this.gl.enableVertexAttribArray(this.aColorLocation),this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.uvVertexBuf),this.gl.bufferData(this.gl.ARRAY_BUFFER,this.uvs,this.gl.DYNAMIC_DRAW),this.gl.vertexAttribPointer(this.aUvLocation,2,this.gl.FLOAT,!1,0,0),this.gl.enableVertexAttribArray(this.aUvLocation),this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.borderPositionVertexBuf),this.gl.bufferData(this.gl.ARRAY_BUFFER,this.borderPositions,this.gl.DYNAMIC_DRAW),this.gl.vertexAttribPointer(this.aBorderPosLoc,3,this.gl.FLOAT,!1,0,0),this.gl.enableVertexAttribArray(this.aBorderPosLoc);var r=e.wrap!==0?this.gl.REPEAT:this.gl.CLAMP_TO_EDGE;this.gl.samplerParameteri(this.mainSampler,this.gl.TEXTURE_WRAP_S,r),this.gl.samplerParameteri(this.mainSampler,this.gl.TEXTURE_WRAP_T,r)}},{key:"drawCustomShapeInstance",value:function(e,r,_,x,b,u){this.gl.useProgram(this.shaderProgram);var n=new Float32Array(this.positions.buffer,0,(r+2)*3);this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.positionVertexBuf),this.gl.bufferSubData(this.gl.ARRAY_BUFFER,0,n),this.gl.vertexAttribPointer(this.aPosLocation,3,this.gl.FLOAT,!1,0,0),this.gl.enableVertexAttribArray(this.aPosLocation);var R=new Float32Array(this.colors.buffer,0,(r+2)*4);if(this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.colorVertexBuf),this.gl.bufferSubData(this.gl.ARRAY_BUFFER,0,R),this.gl.vertexAttribPointer(this.aColorLocation,4,this.gl.FLOAT,!1,0,0),this.gl.enableVertexAttribArray(this.aColorLocation),_){var V=new Float32Array(this.uvs.buffer,0,(r+2)*2);this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.uvVertexBuf),this.gl.bufferSubData(this.gl.ARRAY_BUFFER,0,V),this.gl.vertexAttribPointer(this.aUvLocation,2,this.gl.FLOAT,!1,0,0),this.gl.enableVertexAttribArray(this.aUvLocation)}if(this.gl.uniform1f(this.texturedLoc,_?1:0),this.gl.activeTexture(this.gl.TEXTURE0),this.gl.bindTexture(this.gl.TEXTURE_2D,e),this.gl.bindSampler(0,this.mainSampler),this.gl.uniform1i(this.textureLoc,0),u?this.gl.blendFunc(this.gl.SRC_ALPHA,this.gl.ONE):this.gl.blendFunc(this.gl.SRC_ALPHA,this.gl.ONE_MINUS_SRC_ALPHA),this.gl.drawArrays(this.gl.TRIANGLE_FAN,0,r+2),x){this.gl.useProgram(this.borderShaderProgram);var k=new Float32Array(this.borderPositions.buffer,0,(r+1)*3);this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.borderPositionVertexBuf),this.gl.bufferSubData(this.gl.ARRAY_BUFFER,0,k),this.gl.vertexAttribPointer(this.aBorderPosLoc,3,this.gl.FLOAT,!1,0,0),this.gl.enableVertexAttribArray(this.aBorderPosLoc),this.gl.uniform4fv(this.uBorderColorLoc,this.borderColor);for(var T=b?4:1,L=0;L<T;L++){var U=2;L===0?this.gl.uniform2fv(this.thickOffsetLoc,[0,0]):L===1?this.gl.uniform2fv(this.thickOffsetLoc,[U/this.texsizeX,0]):L===2?this.gl.uniform2fv(this.thickOffsetLoc,[0,U/this.texsizeY]):L===3&&this.gl.uniform2fv(this.thickOffsetLoc,[U/this.texsizeX,U/this.texsizeY]),this.gl.drawArrays(this.gl.LINE_STRIP,0,r+1)}}}}]),t}()},"./src/rendering/sprites/border.js":function(o,l,s){"use strict";s.r(l),s.d(l,"default",function(){return p});var y=s("./src/rendering/shaders/shaderUtils.js");function z(m,t){if(!(m instanceof t))throw new TypeError("Cannot call a class as a function")}function A(m,t){for(var a=0;a<t.length;a++){var e=t[a];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(m,e.key,e)}}function h(m,t,a){return t&&A(m.prototype,t),a&&A(m,a),m}var p=function(){function m(t){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};z(this,m),this.gl=t,this.positions=new Float32Array(72),this.aspectx=a.aspectx,this.aspecty=a.aspecty,this.invAspectx=1/this.aspectx,this.invAspecty=1/this.aspecty,this.floatPrecision=y.default.getFragmentFloatPrecision(this.gl),this.createShader(),this.vertexBuf=this.gl.createBuffer()}return h(m,[{key:"updateGlobals",value:function(a){this.aspectx=a.aspectx,this.aspecty=a.aspecty,this.invAspectx=1/this.aspectx,this.invAspecty=1/this.aspecty}},{key:"createShader",value:function(){this.shaderProgram=this.gl.createProgram();var a=this.gl.createShader(this.gl.VERTEX_SHADER);this.gl.shaderSource(a,`#version 300 es
                                      in vec3 aPos;
                                      void main(void) {
                                        gl_Position = vec4(aPos, 1.0);
                                      }`),this.gl.compileShader(a);var e=this.gl.createShader(this.gl.FRAGMENT_SHADER);this.gl.shaderSource(e,`#version 300 es
                                      precision `.concat(this.floatPrecision,` float;
                                      precision highp int;
                                      precision mediump sampler2D;
                                      out vec4 fragColor;
                                      uniform vec4 u_color;
                                      void main(void) {
                                        fragColor = u_color;
                                      }`)),this.gl.compileShader(e),this.gl.attachShader(this.shaderProgram,a),this.gl.attachShader(this.shaderProgram,e),this.gl.linkProgram(this.shaderProgram),this.aPosLoc=this.gl.getAttribLocation(this.shaderProgram,"aPos"),this.colorLoc=this.gl.getUniformLocation(this.shaderProgram,"u_color")}},{key:"addTriangle",value:function(a,e,r,_){this.positions[a+0]=e[0],this.positions[a+1]=e[1],this.positions[a+2]=e[2],this.positions[a+3]=r[0],this.positions[a+4]=r[1],this.positions[a+5]=r[2],this.positions[a+6]=_[0],this.positions[a+7]=_[1],this.positions[a+8]=_[2]}},{key:"generateBorder",value:function(a,e,r){if(e>0&&a[3]>0){var _=2,x=2,b=_/2,u=x/2,n=r/2,R=e/2+n,V=n*_,k=n*x,T=R*_,L=R*x,U=[-b+V,-u+L,0],O=[-b+V,u-L,0],j=[-b+T,u-L,0],C=[-b+T,-u+L,0];return this.addTriangle(0,C,O,U),this.addTriangle(9,C,j,O),U=[b-V,-u+L,0],O=[b-V,u-L,0],j=[b-T,u-L,0],C=[b-T,-u+L,0],this.addTriangle(18,U,O,C),this.addTriangle(27,O,j,C),U=[-b+V,-u+k,0],O=[-b+V,L-u,0],j=[b-V,L-u,0],C=[b-V,-u+k,0],this.addTriangle(36,C,O,U),this.addTriangle(45,C,j,O),U=[-b+V,u-k,0],O=[-b+V,u-L,0],j=[b-V,u-L,0],C=[b-V,u-k,0],this.addTriangle(54,U,O,C),this.addTriangle(63,O,j,C),!0}return!1}},{key:"drawBorder",value:function(a,e,r){this.generateBorder(a,e,r)&&(this.gl.useProgram(this.shaderProgram),this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.vertexBuf),this.gl.bufferData(this.gl.ARRAY_BUFFER,this.positions,this.gl.STATIC_DRAW),this.gl.vertexAttribPointer(this.aPosLoc,3,this.gl.FLOAT,!1,0,0),this.gl.enableVertexAttribArray(this.aPosLoc),this.gl.uniform4fv(this.colorLoc,a),this.gl.blendFunc(this.gl.SRC_ALPHA,this.gl.ONE_MINUS_SRC_ALPHA),this.gl.drawArrays(this.gl.TRIANGLES,0,this.positions.length/3))}}]),m}()},"./src/rendering/sprites/darkenCenter.js":function(o,l,s){"use strict";s.r(l),s.d(l,"default",function(){return p});var y=s("./src/rendering/shaders/shaderUtils.js");function z(m,t){if(!(m instanceof t))throw new TypeError("Cannot call a class as a function")}function A(m,t){for(var a=0;a<t.length;a++){var e=t[a];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(m,e.key,e)}}function h(m,t,a){return t&&A(m.prototype,t),a&&A(m,a),m}var p=function(){function m(t,a){z(this,m),this.gl=t,this.aspectx=a.aspectx,this.aspecty=a.aspecty,this.invAspectx=1/this.aspectx,this.invAspecty=1/this.aspecty,this.generatePositions(),this.colors=new Float32Array([0,0,0,3/32,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]),this.positionVertexBuf=this.gl.createBuffer(),this.colorVertexBuf=this.gl.createBuffer(),this.floatPrecision=y.default.getFragmentFloatPrecision(this.gl),this.createShader()}return h(m,[{key:"updateGlobals",value:function(a){this.aspectx=a.aspectx,this.aspecty=a.aspecty,this.invAspectx=1/this.aspectx,this.invAspecty=1/this.aspecty,this.generatePositions()}},{key:"generatePositions",value:function(){var a=.05;this.positions=new Float32Array([0,0,0,-a*this.aspecty,0,0,0,-a,0,a*this.aspecty,0,0,0,a,0,-a*this.aspecty,0,0])}},{key:"createShader",value:function(){this.shaderProgram=this.gl.createProgram();var a=this.gl.createShader(this.gl.VERTEX_SHADER);this.gl.shaderSource(a,`#version 300 es
                                      in vec3 aPos;
                                      in vec4 aColor;
                                      out vec4 vColor;
                                      void main(void) {
                                        vColor = aColor;
                                        gl_Position = vec4(aPos, 1.0);
                                      }`),this.gl.compileShader(a);var e=this.gl.createShader(this.gl.FRAGMENT_SHADER);this.gl.shaderSource(e,`#version 300 es
                                      precision `.concat(this.floatPrecision,` float;
                                      precision highp int;
                                      precision mediump sampler2D;
                                      in vec4 vColor;
                                      out vec4 fragColor;
                                      void main(void) {
                                        fragColor = vColor;
                                      }`)),this.gl.compileShader(e),this.gl.attachShader(this.shaderProgram,a),this.gl.attachShader(this.shaderProgram,e),this.gl.linkProgram(this.shaderProgram),this.aPosLocation=this.gl.getAttribLocation(this.shaderProgram,"aPos"),this.aColorLocation=this.gl.getAttribLocation(this.shaderProgram,"aColor")}},{key:"drawDarkenCenter",value:function(a){a.darken_center!==0&&(this.gl.useProgram(this.shaderProgram),this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.positionVertexBuf),this.gl.bufferData(this.gl.ARRAY_BUFFER,this.positions,this.gl.STATIC_DRAW),this.gl.vertexAttribPointer(this.aPosLocation,3,this.gl.FLOAT,!1,0,0),this.gl.enableVertexAttribArray(this.aPosLocation),this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.colorVertexBuf),this.gl.bufferData(this.gl.ARRAY_BUFFER,this.colors,this.gl.STATIC_DRAW),this.gl.vertexAttribPointer(this.aColorLocation,4,this.gl.FLOAT,!1,0,0),this.gl.enableVertexAttribArray(this.aColorLocation),this.gl.blendFunc(this.gl.SRC_ALPHA,this.gl.ONE_MINUS_SRC_ALPHA),this.gl.drawArrays(this.gl.TRIANGLE_FAN,0,this.positions.length/3))}}]),m}()},"./src/rendering/text/titleText.js":function(o,l,s){"use strict";s.r(l),s.d(l,"default",function(){return p});var y=s("./src/rendering/shaders/shaderUtils.js");function z(m,t){if(!(m instanceof t))throw new TypeError("Cannot call a class as a function")}function A(m,t){for(var a=0;a<t.length;a++){var e=t[a];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(m,e.key,e)}}function h(m,t,a){return t&&A(m.prototype,t),a&&A(m,a),m}var p=function(){function m(t){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};z(this,m),this.gl=t,this.texsizeX=a.texsizeX,this.texsizeY=a.texsizeY,this.aspectx=a.aspectx,this.aspecty=a.aspecty,this.invAspectx=1/this.aspectx,this.invAspecty=1/this.aspecty,this.buildPositions(),this.textTexture=this.gl.createTexture(),this.indexBuf=t.createBuffer(),this.positionVertexBuf=this.gl.createBuffer(),this.vertexBuf=this.gl.createBuffer(),this.canvas=document.createElement("canvas"),this.canvas.width=this.texsizeX,this.canvas.height=this.texsizeY,this.context2D=this.canvas.getContext("2d"),this.floatPrecision=y.default.getFragmentFloatPrecision(this.gl),this.createShader()}return h(m,[{key:"generateTitleTexture",value:function(a){this.context2D.clearRect(0,0,this.texsizeX,this.texsizeY),this.fontSize=Math.floor(16*(this.texsizeX/256)),this.fontSize=Math.max(this.fontSize,6),this.context2D.font="italic ".concat(this.fontSize,"px Times New Roman");var e=a,r=this.context2D.measureText(e).width;if(r>this.texsizeX){var _=.91*(this.texsizeX/r);e="".concat(e.substring(0,Math.floor(e.length*_)),"..."),r=this.context2D.measureText(e).width}this.context2D.fillStyle="#FFFFFF",this.context2D.fillText(e,(this.texsizeX-r)/2,this.texsizeY/2);var x=new Uint8Array(this.context2D.getImageData(0,0,this.texsizeX,this.texsizeY).data.buffer);this.gl.pixelStorei(this.gl.UNPACK_FLIP_Y_WEBGL,!0),this.gl.bindTexture(this.gl.TEXTURE_2D,this.textTexture),this.gl.texImage2D(this.gl.TEXTURE_2D,0,this.gl.RGBA,this.texsizeX,this.texsizeY,0,this.gl.RGBA,this.gl.UNSIGNED_BYTE,x),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_MAG_FILTER,this.gl.LINEAR),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_MIN_FILTER,this.gl.LINEAR_MIPMAP_LINEAR),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_WRAP_S,this.gl.CLAMP_TO_EDGE),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_WRAP_T,this.gl.CLAMP_TO_EDGE),this.gl.generateMipmap(this.gl.TEXTURE_2D),this.gl.bindTexture(this.gl.TEXTURE_2D,null)}},{key:"updateGlobals",value:function(a){this.texsizeX=a.texsizeX,this.texsizeY=a.texsizeY,this.aspectx=a.aspectx,this.aspecty=a.aspecty,this.invAspectx=1/this.aspectx,this.invAspecty=1/this.aspecty,this.canvas.width=this.texsizeX,this.canvas.height=this.texsizeY}},{key:"buildPositions",value:function(){for(var a=2,e=2,r=a/2,_=e/2,x=15,b=7,u=x+1,n=b+1,R=a/x,V=e/b,k=[],T=0;T<n;T++)for(var L=T*V-_,U=0;U<u;U++){var O=U*R-r;k.push(O,-L,0)}for(var j=[],C=0;C<b;C++)for(var B=0;B<x;B++){var E=B+u*C,d=B+u*(C+1),f=B+1+u*(C+1),P=B+1+u*C;j.push(E,d,P),j.push(d,f,P)}this.vertices=new Float32Array(k),this.indices=new Uint16Array(j)}},{key:"createShader",value:function(){this.shaderProgram=this.gl.createProgram();var a=this.gl.createShader(this.gl.VERTEX_SHADER);this.gl.shaderSource(a,`#version 300 es
       const vec2 halfmad = vec2(0.5);
       in vec2 aPos;
       in vec2 aUv;
       out vec2 uv_orig;
       out vec2 uv;
       void main(void) {
         gl_Position = vec4(aPos, 0.0, 1.0);
         uv_orig = aPos * halfmad + halfmad;
         uv = aUv;
       }`),this.gl.compileShader(a);var e=this.gl.createShader(this.gl.FRAGMENT_SHADER);this.gl.shaderSource(e,`#version 300 es
       precision `.concat(this.floatPrecision,` float;
       precision highp int;
       precision mediump sampler2D;

       in vec2 uv_orig;
       in vec2 uv;
       out vec4 fragColor;
       uniform sampler2D uTexture;
       uniform float textColor;

       void main(void) {
         fragColor = texture(uTexture, uv) * vec4(textColor);
       }`)),this.gl.compileShader(e),this.gl.attachShader(this.shaderProgram,a),this.gl.attachShader(this.shaderProgram,e),this.gl.linkProgram(this.shaderProgram),this.positionLocation=this.gl.getAttribLocation(this.shaderProgram,"aPos"),this.uvLocation=this.gl.getAttribLocation(this.shaderProgram,"aUv"),this.textureLoc=this.gl.getUniformLocation(this.shaderProgram,"uTexture"),this.textColorLoc=this.gl.getUniformLocation(this.shaderProgram,"textColor")}},{key:"generateUvs",value:function(a,e,r){for(var _=15,x=7,b=_+1,u=x+1,n=[],R=.75,V=0;V<u;V++)for(var k=0;k<b;k++){var T=k/_,L=(V/x-.5)*R+.5,U=T*2-1,O=L*2-1;a>=1&&(O+=1/this.texsizeY),n.push(U,e?O:-O)}for(var j=Math.max(0,1-a*1.5),C=Math.pow(j,1.8)*1.3,B=0;B<u;B++)for(var E=0;E<b;E++){var d=B*b+E;n[d]+=C*.07*Math.sin(r.time*.31+n[d]*.39-n[d+1]*1.94),n[d]+=C*.044*Math.sin(r.time*.81-n[d]*1.91+n[d+1]*.27),n[d]+=C*.061*Math.sin(r.time*1.31+n[d]*.61+n[d+1]*.74),n[d+1]+=C*.061*Math.sin(r.time*.37+n[d]*1.83+n[d+1]*.69),n[d+1]+=C*.07*Math.sin(r.time*.67+n[d]*.42-n[d+1]*1.39),n[d+1]+=C*.087*Math.sin(r.time*1.07+n[d]*3.55+n[d+1]*.89)}for(var f=1.01/(Math.pow(a,.21)+.01),P=0;P<n.length/2;P++)n[P*2]*=f,n[P*2+1]*=f*this.invAspecty,n[P*2]=(n[P*2]+1)/2,n[P*2+1]=(n[P*2+1]+1)/2;return new Float32Array(n)}},{key:"renderTitle",value:function(a,e,r){this.gl.useProgram(this.shaderProgram);var _=this.generateUvs(a,e,r);this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER,this.indexBuf),this.gl.bufferData(this.gl.ELEMENT_ARRAY_BUFFER,this.indices,this.gl.STATIC_DRAW),this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.positionVertexBuf),this.gl.bufferData(this.gl.ARRAY_BUFFER,this.vertices,this.gl.STATIC_DRAW),this.gl.vertexAttribPointer(this.positionLocation,3,this.gl.FLOAT,!1,0,0),this.gl.enableVertexAttribArray(this.positionLocation),this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.vertexBuf),this.gl.bufferData(this.gl.ARRAY_BUFFER,_,this.gl.STATIC_DRAW),this.gl.vertexAttribPointer(this.uvLocation,2,this.gl.FLOAT,!1,0,0),this.gl.enableVertexAttribArray(this.uvLocation),this.gl.activeTexture(this.gl.TEXTURE0),this.gl.bindTexture(this.gl.TEXTURE_2D,this.textTexture),this.gl.uniform1i(this.textureLoc,0),this.gl.uniform1f(this.textColorLoc,Math.pow(a,.3)),this.gl.blendFunc(this.gl.SRC_ALPHA,this.gl.ONE_MINUS_SRC_ALPHA),this.gl.drawElements(this.gl.TRIANGLES,this.indices.length,this.gl.UNSIGNED_SHORT,0)}}]),m}()},"./src/rendering/waves/basicWaveform.js":function(o,l,s){"use strict";s.r(l),s.d(l,"default",function(){return m});var y=s("./src/rendering/shaders/shaderUtils.js"),z=s("./src/rendering/waves/waveUtils.js");function A(t,a){if(!(t instanceof a))throw new TypeError("Cannot call a class as a function")}function h(t,a){for(var e=0;e<a.length;e++){var r=a[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function p(t,a,e){return a&&h(t.prototype,a),e&&h(t,e),t}var m=function(){function t(a){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};A(this,t),this.gl=a;var r=512;this.positions=new Float32Array(r*3),this.positions2=new Float32Array(r*3),this.oldPositions=new Float32Array(r*3),this.oldPositions2=new Float32Array(r*3),this.smoothedPositions=new Float32Array((r*2-1)*3),this.smoothedPositions2=new Float32Array((r*2-1)*3),this.color=[0,0,0,1],this.texsizeX=e.texsizeX,this.texsizeY=e.texsizeY,this.aspectx=e.aspectx,this.aspecty=e.aspecty,this.invAspectx=1/this.aspectx,this.invAspecty=1/this.aspecty,this.floatPrecision=y.default.getFragmentFloatPrecision(this.gl),this.createShader(),this.vertexBuf=this.gl.createBuffer()}return p(t,[{key:"updateGlobals",value:function(e){this.texsizeX=e.texsizeX,this.texsizeY=e.texsizeY,this.aspectx=e.aspectx,this.aspecty=e.aspecty,this.invAspectx=1/this.aspectx,this.invAspecty=1/this.aspecty}},{key:"createShader",value:function(){this.shaderProgram=this.gl.createProgram();var e=this.gl.createShader(this.gl.VERTEX_SHADER);this.gl.shaderSource(e,`#version 300 es
                                      in vec3 aPos;
                                      uniform vec2 thickOffset;
                                      void main(void) {
                                        gl_Position = vec4(aPos + vec3(thickOffset, 0.0), 1.0);
                                      }`),this.gl.compileShader(e);var r=this.gl.createShader(this.gl.FRAGMENT_SHADER);this.gl.shaderSource(r,`#version 300 es
                                      precision `.concat(this.floatPrecision,` float;
                                      precision highp int;
                                      precision mediump sampler2D;
                                      out vec4 fragColor;
                                      uniform vec4 u_color;
                                      void main(void) {
                                        fragColor = u_color;
                                      }`)),this.gl.compileShader(r),this.gl.attachShader(this.shaderProgram,e),this.gl.attachShader(this.shaderProgram,r),this.gl.linkProgram(this.shaderProgram),this.aPosLoc=this.gl.getAttribLocation(this.shaderProgram,"aPos"),this.colorLoc=this.gl.getUniformLocation(this.shaderProgram,"u_color"),this.thickOffsetLoc=this.gl.getUniformLocation(this.shaderProgram,"thickOffset")}},{key:"generateWaveform",value:function(e,r,_,x,b){var u=b.wave_a,n=(b.bass+b.mid+b.treb)/3;if(n>-.01&&u>.001&&_.length>0){var R=t.processWaveform(_,b),V=t.processWaveform(x,b),k=Math.floor(b.wave_mode)%8,T=Math.floor(b.old_wave_mode)%8,L=b.wave_x*2-1,U=b.wave_y*2-1;this.numVert=0,this.oldNumVert=0;for(var O=e&&k!==T?2:1,j=0;j<O;j++){var C=j===0?k:T,B=b.wave_mystery;(C===0||C===1||C===4)&&(B<-1||B>1)&&(B=B*.5+.5,B-=Math.floor(B),B=Math.abs(B),B=B*2-1);var E=void 0,d=void 0,f=void 0;if(j===0?(d=this.positions,f=this.positions2):(d=this.oldPositions,f=this.oldPositions2),u=b.wave_a,C===0){if(b.modwavealphabyvolume>0){var P=b.modwavealphaend-b.modwavealphastart;u*=(n-b.modwavealphastart)/P}u=Math.clamp(u,0,1),E=Math.floor(R.length/2)+1;for(var I=1/(E-1),D=Math.floor((R.length-E)/2),Q=0;Q<E-1;Q++){var S=.5+.4*V[Q+D]+B,G=Q*I*2*Math.PI+b.time*.2;if(Q<E/10){var aa=Q/(E*.1);aa=.5-.5*Math.cos(aa*Math.PI);var ea=.5+.4*V[Q+E+D]+B;S=(1-aa)*ea+S*aa}d[Q*3+0]=S*Math.cos(G)*this.aspecty+L,d[Q*3+1]=S*Math.sin(G)*this.aspectx+U,d[Q*3+2]=0}d[(E-1)*3+0]=d[0],d[(E-1)*3+1]=d[1],d[(E-1)*3+2]=0}else if(C===1){if(u*=1.25,b.modwavealphabyvolume>0){var _a=b.modwavealphaend-b.modwavealphastart;u*=(n-b.modwavealphastart)/_a}u=Math.clamp(u,0,1),E=Math.floor(R.length/2);for(var $=0;$<E;$++){var ra=.53+.43*V[$]+B,oa=R[$+32]*.5*Math.PI+b.time*2.3;d[$*3+0]=ra*Math.cos(oa)*this.aspecty+L,d[$*3+1]=ra*Math.sin(oa)*this.aspectx+U,d[$*3+2]=0}}else if(C===2){if(this.texsizeX<1024?u*=.09:this.texsizeX>=1024&&this.texsizeX<2048?u*=.11:u*=.13,b.modwavealphabyvolume>0){var pa=b.modwavealphaend-b.modwavealphastart;u*=(n-b.modwavealphastart)/pa}u=Math.clamp(u,0,1),E=R.length;for(var ma=0;ma<R.length;ma++)d[ma*3+0]=V[ma]*this.aspecty+L,d[ma*3+1]=R[(ma+32)%R.length]*this.aspectx+U,d[ma*3+2]=0}else if(C===3){if(this.texsizeX<1024?u*=.15:this.texsizeX>=1024&&this.texsizeX<2048?u*=.22:u*=.33,u*=1.3,u*=b.treb*b.treb,b.modwavealphabyvolume>0){var ta=b.modwavealphaend-b.modwavealphastart;u*=(n-b.modwavealphastart)/ta}u=Math.clamp(u,0,1),E=R.length;for(var sa=0;sa<R.length;sa++)d[sa*3+0]=V[sa]*this.aspecty+L,d[sa*3+1]=R[(sa+32)%R.length]*this.aspectx+U,d[sa*3+2]=0}else if(C===4){if(b.modwavealphabyvolume>0){var Y=b.modwavealphaend-b.modwavealphastart;u*=(n-b.modwavealphastart)/Y}u=Math.clamp(u,0,1),E=R.length,E>this.texsizeX/3&&(E=Math.floor(this.texsizeX/3));for(var Z=1/E,la=Math.floor((R.length-E)/2),ya=.45+.5*(B*.5+.5),ga=1-ya,na=0;na<E;na++){var ha=2*na*Z+(L-1)+V[(na+25+la)%R.length]*.44,za=R[na+la]*.47+U;na>1&&(ha=ha*ga+ya*(d[(na-1)*3+0]*2-d[(na-2)*3+0]),za=za*ga+ya*(d[(na-1)*3+1]*2-d[(na-2)*3+1])),d[na*3+0]=ha,d[na*3+1]=za,d[na*3+2]=0}}else if(C===5){if(this.texsizeX<1024?u*=.09:this.texsizeX>=1024&&this.texsizeX<2048?u*=.11:u*=.13,b.modwavealphabyvolume>0){var Pa=b.modwavealphaend-b.modwavealphastart;u*=(n-b.modwavealphastart)/Pa}u=Math.clamp(u,0,1);var ua=Math.cos(b.time*.3),Aa=Math.sin(b.time*.3);E=R.length;for(var fa=0;fa<R.length;fa++){var Ea=(fa+32)%R.length,wa=V[fa]*R[Ea]+R[fa]*V[Ea],Va=V[fa]*V[fa]-R[Ea]*R[Ea];d[fa*3+0]=(wa*ua-Va*Aa)*(this.aspecty+L),d[fa*3+1]=(wa*Aa+Va*ua)*(this.aspectx+U),d[fa*3+2]=0}}else if(C===6||C===7){if(b.modwavealphabyvolume>0){var Ia=b.modwavealphaend-b.modwavealphastart;u*=(n-b.modwavealphastart)/Ia}u=Math.clamp(u,0,1),E=Math.floor(R.length/2),E>this.texsizeX/3&&(E=Math.floor(this.texsizeX/3));for(var M=Math.floor((R.length-E)/2),g=Math.PI*.5*B,i=Math.cos(g),v=Math.sin(g),c=[L*Math.cos(g+Math.PI*.5)-i*3,L*Math.cos(g+Math.PI*.5)+i*3],q=[L*Math.sin(g+Math.PI*.5)-v*3,L*Math.sin(g+Math.PI*.5)+v*3],w=0;w<2;w++)for(var F=0;F<4;F++){var W=void 0,X=!1;switch(F){case 0:c[w]>1.1&&(W=(1.1-c[1-w])/(c[w]-c[1-w]),X=!0);break;case 1:c[w]<-1.1&&(W=(-1.1-c[1-w])/(c[w]-c[1-w]),X=!0);break;case 2:q[w]>1.1&&(W=(1.1-q[1-w])/(q[w]-q[1-w]),X=!0);break;case 3:q[w]<-1.1&&(W=(-1.1-q[1-w])/(q[w]-q[1-w]),X=!0);break;default:}if(X){var N=c[w]-c[1-w],H=q[w]-q[1-w];c[w]=c[1-w]+N*W,q[w]=q[1-w]+H*W}}i=(c[1]-c[0])/E,v=(q[1]-q[0])/E;var K=Math.atan2(v,i),J=Math.cos(K+Math.PI*.5),ia=Math.sin(K+Math.PI*.5);if(C===6)for(var va=0;va<E;va++){var Ta=R[va+M];d[va*3+0]=c[0]+i*va+J*.25*Ta,d[va*3+1]=q[0]+v*va+ia*.25*Ta,d[va*3+2]=0}else if(C===7){for(var da=Math.pow(U*.5+.5,2),qa=0;qa<E;qa++){var Ra=R[qa+M];d[qa*3+0]=c[0]+i*qa+J*(.25*Ra+da),d[qa*3+1]=q[0]+v*qa+ia*(.25*Ra+da),d[qa*3+2]=0}for(var ca=0;ca<E;ca++){var ba=V[ca+M];f[ca*3+0]=c[0]+i*ca+J*(.25*ba-da),f[ca*3+1]=q[0]+v*ca+ia*(.25*ba-da),f[ca*3+2]=0}}}j===0?(this.positions=d,this.positions2=f,this.numVert=E,this.alpha=u):(this.oldPositions=d,this.oldPositions2=f,this.oldNumVert=E,this.oldAlpha=u)}var xa=.5-.5*Math.cos(r*Math.PI),Ma=1-xa;this.oldNumVert>0&&(u=xa*this.alpha+Ma*this.oldAlpha);var La=Math.clamp(b.wave_r,0,1),ka=Math.clamp(b.wave_g,0,1),rt=Math.clamp(b.wave_b,0,1);if(b.wave_brighten!==0){var Ga=Math.max(La,ka,rt);Ga>.01&&(La/=Ga,ka/=Ga,rt/=Ga)}if(this.color=[La,ka,rt,u],this.oldNumVert>0)if(k===7){for(var lt=(this.oldNumVert-1)/(this.numVert*2),Ua=0;Ua<this.numVert;Ua++){var pt=Ua*lt,Oa=Math.floor(pt),Ka=pt-Oa,Pt=this.oldPositions[Oa*3+0]*(1-Ka)+this.oldPositions[(Oa+1)*3+0]*Ka,Rt=this.oldPositions[Oa*3+1]*(1-Ka)+this.oldPositions[(Oa+1)*3+1]*Ka;this.positions[Ua*3+0]=this.positions[Ua*3+0]*xa+Pt*Ma,this.positions[Ua*3+1]=this.positions[Ua*3+1]*xa+Rt*Ma,this.positions[Ua*3+2]=0}for(var Ba=0;Ba<this.numVert;Ba++){var ht=(Ba+this.numVert)*lt,Xa=Math.floor(ht),Ya=ht-Xa,Lt=this.oldPositions[Xa*3+0]*(1-Ya)+this.oldPositions[(Xa+1)*3+0]*Ya,kt=this.oldPositions[Xa*3+1]*(1-Ya)+this.oldPositions[(Xa+1)*3+1]*Ya;this.positions2[Ba*3+0]=this.positions2[Ba*3+0]*xa+Lt*Ma,this.positions2[Ba*3+1]=this.positions2[Ba*3+1]*xa+kt*Ma,this.positions2[Ba*3+2]=0}}else if(T===7){for(var Na=this.numVert/2,bt=(this.oldNumVert-1)/Na,Da=0;Da<Na;Da++){var xt=Da*bt,ja=Math.floor(xt),Ha=xt-ja,Vt=this.oldPositions[ja*3+0]*(1-Ha)+this.oldPositions[(ja+1)*3+0]*Ha,Ut=this.oldPositions[ja*3+1]*(1-Ha)+this.oldPositions[(ja+1)*3+1]*Ha;this.positions[Da*3+0]=this.positions[Da*3+0]*xa+Vt*Ma,this.positions[Da*3+1]=this.positions[Da*3+1]*xa+Ut*Ma,this.positions[Da*3+2]=0}for(var Ca=0;Ca<Na;Ca++){var ut=Ca*bt,Fa=Math.floor(ut),Ja=ut-Fa,Bt=this.oldPositions2[Fa*3+0]*(1-Ja)+this.oldPositions2[(Fa+1)*3+0]*Ja,Dt=this.oldPositions2[Fa*3+1]*(1-Ja)+this.oldPositions2[(Fa+1)*3+1]*Ja;this.positions2[Ca*3+0]=this.positions[(Ca+Na)*3+0]*xa+Bt*Ma,this.positions2[Ca*3+1]=this.positions[(Ca+Na)*3+1]*xa+Dt*Ma,this.positions2[Ca*3+2]=0}}else for(var Ct=(this.oldNumVert-1)/this.numVert,Sa=0;Sa<this.numVert;Sa++){var dt=Sa*Ct,Qa=Math.floor(dt),Za=dt-Qa,St=this.oldPositions[Qa*3+0]*(1-Za)+this.oldPositions[(Qa+1)*3+0]*Za,It=this.oldPositions[Qa*3+1]*(1-Za)+this.oldPositions[(Qa+1)*3+1]*Za;this.positions[Sa*3+0]=this.positions[Sa*3+0]*xa+St*Ma,this.positions[Sa*3+1]=this.positions[Sa*3+1]*xa+It*Ma,this.positions[Sa*3+2]=0}for(var $a=0;$a<this.numVert;$a++)this.positions[$a*3+1]=-this.positions[$a*3+1];if(this.smoothedNumVert=this.numVert*2-1,z.default.smoothWave(this.positions,this.smoothedPositions,this.numVert),k===7||T===7){for(var at=0;at<this.numVert;at++)this.positions2[at*3+1]=-this.positions2[at*3+1];z.default.smoothWave(this.positions2,this.smoothedPositions2,this.numVert)}return!0}return!1}},{key:"drawBasicWaveform",value:function(e,r,_,x,b){if(this.generateWaveform(e,r,_,x,b)){this.gl.useProgram(this.shaderProgram),this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.vertexBuf),this.gl.bufferData(this.gl.ARRAY_BUFFER,this.smoothedPositions,this.gl.STATIC_DRAW),this.gl.vertexAttribPointer(this.aPosLoc,3,this.gl.FLOAT,!1,0,0),this.gl.enableVertexAttribArray(this.aPosLoc),this.gl.uniform4fv(this.colorLoc,this.color);var u=1;(b.wave_thick!==0||b.wave_dots!==0)&&(u=4),b.additivewave!==0?this.gl.blendFunc(this.gl.SRC_ALPHA,this.gl.ONE):this.gl.blendFunc(this.gl.SRC_ALPHA,this.gl.ONE_MINUS_SRC_ALPHA);for(var n=b.wave_dots!==0?this.gl.POINTS:this.gl.LINE_STRIP,R=0;R<u;R++){var V=2;R===0?this.gl.uniform2fv(this.thickOffsetLoc,[0,0]):R===1?this.gl.uniform2fv(this.thickOffsetLoc,[V/this.texsizeX,0]):R===2?this.gl.uniform2fv(this.thickOffsetLoc,[0,V/this.texsizeY]):R===3&&this.gl.uniform2fv(this.thickOffsetLoc,[V/this.texsizeX,V/this.texsizeY]),this.gl.drawArrays(n,0,this.smoothedNumVert)}var k=Math.floor(b.wave_mode)%8;if(k===7){this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.vertexBuf),this.gl.bufferData(this.gl.ARRAY_BUFFER,this.smoothedPositions2,this.gl.STATIC_DRAW),this.gl.vertexAttribPointer(this.aPosLoc,3,this.gl.FLOAT,!1,0,0),this.gl.enableVertexAttribArray(this.aPosLoc);for(var T=0;T<u;T++){var L=2;T===0?this.gl.uniform2fv(this.thickOffsetLoc,[0,0]):T===1?this.gl.uniform2fv(this.thickOffsetLoc,[L/this.texsizeX,0]):T===2?this.gl.uniform2fv(this.thickOffsetLoc,[0,L/this.texsizeY]):T===3&&this.gl.uniform2fv(this.thickOffsetLoc,[L/this.texsizeX,L/this.texsizeY]),this.gl.drawArrays(n,0,this.smoothedNumVert)}}}}}],[{key:"processWaveform",value:function(e,r){var _=[],x=r.wave_scale/128,b=r.wave_smoothing,u=x*(1-b);_.push(e[0]*x);for(var n=1;n<e.length;n++)_.push(e[n]*u+_[n-1]*b);return _}}]),t}()},"./src/rendering/waves/customWaveform.js":function(o,l,s){"use strict";s.r(l),s.d(l,"default",function(){return t});var y=s("./src/utils.js"),z=s("./src/rendering/shaders/shaderUtils.js"),A=s("./src/rendering/waves/waveUtils.js");function h(a,e){if(!(a instanceof e))throw new TypeError("Cannot call a class as a function")}function p(a,e){for(var r=0;r<e.length;r++){var _=e[r];_.enumerable=_.enumerable||!1,_.configurable=!0,"value"in _&&(_.writable=!0),Object.defineProperty(a,_.key,_)}}function m(a,e,r){return e&&p(a.prototype,e),r&&p(a,r),a}var t=function(){function a(e,r,_){h(this,a),this.index=e,this.gl=r;var x=512;this.pointsData=[new Float32Array(x),new Float32Array(x)],this.positions=new Float32Array(x*3),this.colors=new Float32Array(x*4),this.smoothedPositions=new Float32Array((x*2-1)*3),this.smoothedColors=new Float32Array((x*2-1)*4),this.texsizeX=_.texsizeX,this.texsizeY=_.texsizeY,this.mesh_width=_.mesh_width,this.mesh_height=_.mesh_height,this.aspectx=_.aspectx,this.aspecty=_.aspecty,this.invAspectx=1/this.aspectx,this.invAspecty=1/this.aspecty,this.positionVertexBuf=this.gl.createBuffer(),this.colorVertexBuf=this.gl.createBuffer(),this.floatPrecision=z.default.getFragmentFloatPrecision(this.gl),this.createShader()}return m(a,[{key:"updateGlobals",value:function(r){this.texsizeX=r.texsizeX,this.texsizeY=r.texsizeY,this.mesh_width=r.mesh_width,this.mesh_height=r.mesh_height,this.aspectx=r.aspectx,this.aspecty=r.aspecty,this.invAspectx=1/this.aspectx,this.invAspecty=1/this.aspecty}},{key:"createShader",value:function(){this.shaderProgram=this.gl.createProgram();var r=this.gl.createShader(this.gl.VERTEX_SHADER);this.gl.shaderSource(r,`#version 300 es
                                      uniform float uSize;
                                      uniform vec2 thickOffset;
                                      in vec3 aPos;
                                      in vec4 aColor;
                                      out vec4 vColor;
                                      void main(void) {
                                        vColor = aColor;
                                        gl_PointSize = uSize;
                                        gl_Position = vec4(aPos + vec3(thickOffset, 0.0), 1.0);
                                      }`),this.gl.compileShader(r);var _=this.gl.createShader(this.gl.FRAGMENT_SHADER);this.gl.shaderSource(_,`#version 300 es
                                      precision `.concat(this.floatPrecision,` float;
                                      precision highp int;
                                      precision mediump sampler2D;
                                      in vec4 vColor;
                                      out vec4 fragColor;
                                      void main(void) {
                                        fragColor = vColor;
                                      }`)),this.gl.compileShader(_),this.gl.attachShader(this.shaderProgram,r),this.gl.attachShader(this.shaderProgram,_),this.gl.linkProgram(this.shaderProgram),this.aPosLocation=this.gl.getAttribLocation(this.shaderProgram,"aPos"),this.aColorLocation=this.gl.getAttribLocation(this.shaderProgram,"aColor"),this.sizeLoc=this.gl.getUniformLocation(this.shaderProgram,"uSize"),this.thickOffsetLoc=this.gl.getUniformLocation(this.shaderProgram,"thickOffset")}},{key:"generateWaveform",value:function(r,_,x,b,u,n,R,V){if(R.baseVals.enabled!==0&&r.length>0){var k=Object.assign({},n.mdVSWaves[this.index],n.mdVSFrameMapWaves[this.index],n.mdVSQAfterFrame,n.mdVSTWaveInits[this.index],u),T=R.frame_eqs(k),L=512;Object.prototype.hasOwnProperty.call(T,"samples")?this.samples=T.samples:this.samples=L,this.samples>L&&(this.samples=L),this.samples=Math.floor(this.samples);var U=Math.floor(T.sep),O=T.scaling,j=T.spectrum,C=T.smoothing,B=T.usedots,E=T.r,d=T.g,f=T.b,P=T.a,I=n.mdVS.wave_scale;if(this.samples-=U,this.samples>=2||B!==0&&this.samples>=1){var D=j!==0,Q=(D?.15:.004)*O*I,S=D?x:r,G=D?b:_,aa=D?0:Math.floor((L-this.samples)/2-U/2),ea=D?0:Math.floor((L-this.samples)/2+U/2),_a=D?(L-U)/this.samples:1,$=Math.pow(C*.98,.5),ra=1-$;this.pointsData[0][0]=S[aa],this.pointsData[1][0]=G[ea];for(var oa=1;oa<this.samples;oa++){var pa=S[Math.floor(oa*_a+aa)],ma=G[Math.floor(oa*_a+ea)];this.pointsData[0][oa]=pa*ra+this.pointsData[0][oa-1]*$,this.pointsData[1][oa]=ma*ra+this.pointsData[1][oa-1]*$}for(var ta=this.samples-2;ta>=0;ta--)this.pointsData[0][ta]=this.pointsData[0][ta]*ra+this.pointsData[0][ta+1]*$,this.pointsData[1][ta]=this.pointsData[1][ta]*ra+this.pointsData[1][ta+1]*$;for(var sa=0;sa<this.samples;sa++)this.pointsData[0][sa]*=Q,this.pointsData[1][sa]*=Q;for(var Y=0;Y<this.samples;Y++){var Z=this.pointsData[0][Y],la=this.pointsData[1][Y];T.sample=Y/(this.samples-1),T.value1=Z,T.value2=la,T.x=.5+Z,T.y=.5+la,T.r=E,T.g=d,T.b=f,T.a=P,R.point_eqs!==""&&(T=R.point_eqs(T));var ya=(T.x*2-1)*this.invAspectx,ga=(T.y*-2+1)*this.invAspecty,na=T.r,ha=T.g,za=T.b,Pa=T.a;this.positions[Y*3+0]=ya,this.positions[Y*3+1]=ga,this.positions[Y*3+2]=0,this.colors[Y*4+0]=na,this.colors[Y*4+1]=ha,this.colors[Y*4+2]=za,this.colors[Y*4+3]=Pa*V}var ua=n.mdVSUserKeysWaves[this.index],Aa=y.default.pick(T,ua);return n.mdVSFrameMapWaves[this.index]=Aa,this.mdVSWaveFrame=T,B===0&&A.default.smoothWaveAndColor(this.positions,this.colors,this.smoothedPositions,this.smoothedColors,this.samples),!0}}return!1}},{key:"drawCustomWaveform",value:function(r,_,x,b,u,n,R,V){if(V&&this.generateWaveform(_,x,b,u,n,R,V,r)){this.gl.useProgram(this.shaderProgram);var k=this.mdVSWaveFrame.usedots!==0,T=this.mdVSWaveFrame.thick!==0,L=this.mdVSWaveFrame.additive!==0,U,O,j;k?(U=this.positions,O=this.colors,j=this.samples):(U=this.smoothedPositions,O=this.smoothedColors,j=this.samples*2-1),this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.positionVertexBuf),this.gl.bufferData(this.gl.ARRAY_BUFFER,U,this.gl.STATIC_DRAW),this.gl.vertexAttribPointer(this.aPosLocation,3,this.gl.FLOAT,!1,0,0),this.gl.enableVertexAttribArray(this.aPosLocation),this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.colorVertexBuf),this.gl.bufferData(this.gl.ARRAY_BUFFER,O,this.gl.STATIC_DRAW),this.gl.vertexAttribPointer(this.aColorLocation,4,this.gl.FLOAT,!1,0,0),this.gl.enableVertexAttribArray(this.aColorLocation);var C=1;k?T?this.gl.uniform1f(this.sizeLoc,2+(this.texsizeX>=1024?1:0)):this.gl.uniform1f(this.sizeLoc,1+(this.texsizeX>=1024?1:0)):(this.gl.uniform1f(this.sizeLoc,1),T&&(C=4)),L?this.gl.blendFunc(this.gl.SRC_ALPHA,this.gl.ONE):this.gl.blendFunc(this.gl.SRC_ALPHA,this.gl.ONE_MINUS_SRC_ALPHA);for(var B=k?this.gl.POINTS:this.gl.LINE_STRIP,E=0;E<C;E++){var d=2;E===0?this.gl.uniform2fv(this.thickOffsetLoc,[0,0]):E===1?this.gl.uniform2fv(this.thickOffsetLoc,[d/this.texsizeX,0]):E===2?this.gl.uniform2fv(this.thickOffsetLoc,[0,d/this.texsizeY]):E===3&&this.gl.uniform2fv(this.thickOffsetLoc,[d/this.texsizeX,d/this.texsizeY]),this.gl.drawArrays(B,0,j)}}}}]),a}()},"./src/rendering/waves/waveUtils.js":function(o,l,s){"use strict";s.r(l),s.d(l,"default",function(){return h});function y(p,m){if(!(p instanceof m))throw new TypeError("Cannot call a class as a function")}function z(p,m){for(var t=0;t<m.length;t++){var a=m[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(p,a.key,a)}}function A(p,m,t){return m&&z(p.prototype,m),t&&z(p,t),p}var h=function(){function p(){y(this,p)}return A(p,null,[{key:"smoothWave",value:function(t,a,e){for(var r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:!1,_=-.15,x=1.15,b=1.15,u=-.15,n=1/(_+x+b+u),R=0,V=0,k,T=1,L=0;L<e-1;L++){k=T,T=Math.min(e-1,L+2);for(var U=0;U<3;U++)a[R*3+U]=t[L*3+U];if(r)for(var O=0;O<3;O++)a[(R+1)*3+O]=(_*t[V*3+O]+x*t[L*3+O]+b*t[k*3+O]+u*t[T*3+O])*n;else{for(var j=0;j<2;j++)a[(R+1)*3+j]=(_*t[V*3+j]+x*t[L*3+j]+b*t[k*3+j]+u*t[T*3+j])*n;a[(R+1)*3+2]=0}V=L,R+=2}for(var C=0;C<3;C++)a[R*3+C]=t[(e-1)*3+C]}},{key:"smoothWaveAndColor",value:function(t,a,e,r,_){for(var x=arguments.length>5&&arguments[5]!==void 0?arguments[5]:!1,b=-.15,u=1.15,n=1.15,R=-.15,V=1/(b+u+n+R),k=0,T=0,L,U=1,O=0;O<_-1;O++){L=U,U=Math.min(_-1,O+2);for(var j=0;j<3;j++)e[k*3+j]=t[O*3+j];if(x)for(var C=0;C<3;C++)e[(k+1)*3+C]=(b*t[T*3+C]+u*t[O*3+C]+n*t[L*3+C]+R*t[U*3+C])*V;else{for(var B=0;B<2;B++)e[(k+1)*3+B]=(b*t[T*3+B]+u*t[O*3+B]+n*t[L*3+B]+R*t[U*3+B])*V;e[(k+1)*3+2]=0}for(var E=0;E<4;E++)r[k*4+E]=a[O*4+E],r[(k+1)*4+E]=a[O*4+E];T=O,k+=2}for(var d=0;d<3;d++)e[k*3+d]=t[(_-1)*3+d];for(var f=0;f<4;f++)r[k*4+f]=a[(_-1)*4+f]}}]),p}()},"./src/utils.js":function(o,l,s){"use strict";s.r(l),s.d(l,"default",function(){return a});function y(e){return h(e)||A(e)||z()}function z(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function A(e){if(Symbol.iterator in Object(e)||Object.prototype.toString.call(e)==="[object Arguments]")return Array.from(e)}function h(e){if(Array.isArray(e)){for(var r=0,_=new Array(e.length);r<e.length;r++)_[r]=e[r];return _}}function p(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}function m(e,r){for(var _=0;_<r.length;_++){var x=r[_];x.enumerable=x.enumerable||!1,x.configurable=!0,"value"in x&&(x.writable=!0),Object.defineProperty(e,x.key,x)}}function t(e,r,_){return r&&m(e.prototype,r),_&&m(e,_),e}var a=function(){function e(){p(this,e)}return t(e,null,[{key:"atan2",value:function(_,x){var b=Math.atan2(_,x);return b<0&&(b+=2*Math.PI),b}},{key:"cloneVars",value:function(_){return Object.assign({},_)}},{key:"range",value:function(_,x){return x===void 0?y(Array(_).keys()):Array.from({length:x-_},function(b,u){return u+_})}},{key:"pick",value:function(_,x){for(var b={},u=0;u<x.length;u++){var n=x[u];b[n]=_[n]}return b}},{key:"omit",value:function(_,x){for(var b=Object.assign({},_),u=0;u<x.length;u++){var n=x[u];delete b[n]}return b}}]),e}()},"./src/visualizer.js":function(o,l,s){"use strict";s.r(l),s.d(l,"default",function(){return m});var y=s("./src/audio/audioProcessor.js"),z=s("./src/rendering/renderer.js");function A(t,a){if(!(t instanceof a))throw new TypeError("Cannot call a class as a function")}function h(t,a){for(var e=0;e<a.length;e++){var r=a[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function p(t,a,e){return a&&h(t.prototype,a),e&&h(t,e),t}var m=function(){function t(a,e,r){A(this,t),this.audio=new y.default(a);var _=e.getContext("webgl2",{alpha:!1,antialias:!1,depth:!1,stencil:!1,premultipliedAlpha:!1});this.baseValsDefaults={decay:.98,gammaadj:2,echo_zoom:2,echo_alpha:0,echo_orient:0,red_blue:0,brighten:0,darken:0,wrap:1,darken_center:0,solarize:0,invert:0,fshader:0,b1n:0,b2n:0,b3n:0,b1x:1,b2x:1,b3x:1,b1ed:.25,wave_mode:0,additivewave:0,wave_dots:0,wave_thick:0,wave_a:.8,wave_scale:1,wave_smoothing:.75,wave_mystery:0,modwavealphabyvolume:0,modwavealphastart:.75,modwavealphaend:.95,wave_r:1,wave_g:1,wave_b:1,wave_x:.5,wave_y:.5,wave_brighten:1,mv_x:12,mv_y:9,mv_dx:0,mv_dy:0,mv_l:.9,mv_r:1,mv_g:1,mv_b:1,mv_a:1,warpanimspeed:1,warpscale:1,zoomexp:1,zoom:1,rot:0,cx:.5,cy:.5,dx:0,dy:0,warp:1,sx:1,sy:1,ob_size:.01,ob_r:0,ob_g:0,ob_b:0,ob_a:0,ib_size:.01,ib_r:.25,ib_g:.25,ib_b:.25,ib_a:0},this.shapeBaseValsDefaults={enabled:0,sides:4,additive:0,thickoutline:0,textured:0,num_inst:1,tex_zoom:1,tex_ang:0,x:.5,y:.5,rad:.1,ang:0,r:1,g:0,b:0,a:1,r2:0,g2:1,b2:0,a2:0,border_r:1,border_g:1,border_b:1,border_a:.1},this.waveBaseValsDefaults={enabled:0,samples:512,sep:0,scaling:1,smoothing:.5,r:1,g:1,b:1,a:1,spectrum:0,usedots:0,thick:0,additive:0},this.renderer=new z.default(_,this.audio,r)}return p(t,[{key:"connectAudio",value:function(e){this.audioNode=e,this.audio.connectAudio(e)}},{key:"disconnectAudio",value:function(e){this.audio.disconnectAudio(e)}},{key:"loadPreset",value:function(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,_=Object.assign({},e);_.baseVals=Object.assign({},this.baseValsDefaults,_.baseVals);for(var x=0;x<_.shapes.length;x++)_.shapes[x].baseVals=Object.assign({},this.shapeBaseValsDefaults,_.shapes[x].baseVals);for(var b=0;b<_.waves.length;b++)_.waves[b].baseVals=Object.assign({},this.waveBaseValsDefaults,_.waves[b].baseVals);if(typeof _.init_eqs!="function"){_.init_eqs=new Function("a","".concat(_.init_eqs_str," return a;")),_.frame_eqs=new Function("a","".concat(_.frame_eqs_str," return a;")),_.pixel_eqs_str&&_.pixel_eqs_str!==""?_.pixel_eqs=new Function("a","".concat(_.pixel_eqs_str," return a;")):_.pixel_eqs="";for(var u=0;u<_.shapes.length;u++)_.shapes[u].baseVals.enabled!==0&&(_.shapes[u]=Object.assign({},_.shapes[u],{init_eqs:new Function("a","".concat(_.shapes[u].init_eqs_str," return a;")),frame_eqs:new Function("a","".concat(_.shapes[u].frame_eqs_str," return a;"))}));for(var n=0;n<_.waves.length;n++)if(_.waves[n].baseVals.enabled!==0){var R={init_eqs:new Function("a","".concat(_.waves[n].init_eqs_str," return a;")),frame_eqs:new Function("a","".concat(_.waves[n].frame_eqs_str," return a;"))};_.waves[n].point_eqs_str&&_.waves[n].point_eqs_str!==""?R.point_eqs=new Function("a","".concat(_.waves[n].point_eqs_str," return a;")):R.point_eqs="",_.waves[n]=Object.assign({},_.waves[n],R)}}this.renderer.loadPreset(_,r)}},{key:"loadExtraImages",value:function(e){this.renderer.loadExtraImages(e)}},{key:"setRendererSize",value:function(e,r){var _=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};this.renderer.setRendererSize(e,r,_)}},{key:"setInternalMeshSize",value:function(e,r){this.renderer.setInternalMeshSize(e,r)}},{key:"setOutputAA",value:function(e){this.renderer.setOutputAA(e)}},{key:"render",value:function(e){this.renderer.render(e)}},{key:"launchSongTitleAnim",value:function(e){this.renderer.launchSongTitleAnim(e)}},{key:"toDataURL",value:function(){return this.renderer.toDataURL()}},{key:"warpBufferToDataURL",value:function(){return this.renderer.warpBufferToDataURL()}}]),t}()}})})});var ft=st((Wa,mt)=>{(function(o,l){typeof Wa=="object"&&typeof mt=="object"?mt.exports=l():typeof define=="function"&&define.amd?define("butterchurnPresets",[],l):typeof Wa=="object"?Wa.butterchurnPresets=l():o.butterchurnPresets=l()})(typeof self!="undefined"?self:Wa,function(){return function(o){var l={};function s(y){if(l[y])return l[y].exports;var z=l[y]={i:y,l:!1,exports:{}};return o[y].call(z.exports,z,z.exports,s),z.l=!0,z.exports}return s.m=o,s.c=l,s.d=function(y,z,A){s.o(y,z)||Object.defineProperty(y,z,{configurable:!1,enumerable:!0,get:A})},s.n=function(y){var z=y&&y.__esModule?function(){return y.default}:function(){return y};return s.d(z,"a",z),z},s.o=function(y,z){return Object.prototype.hasOwnProperty.call(y,z)},s.p="",s(s.s=165)}([function(o,l,s){o.exports=!s(5)(function(){return Object.defineProperty({},"a",{get:function(){return 7}}).a!=7})},function(o,l){o.exports=function(s){return typeof s=="object"?s!==null:typeof s=="function"}},function(o,l){var s=o.exports=typeof window!="undefined"&&window.Math==Math?window:typeof self!="undefined"&&self.Math==Math?self:Function("return this")();typeof __g=="number"&&(__g=s)},function(o,l){var s=o.exports={version:"2.5.3"};typeof __e=="number"&&(__e=s)},function(o,l,s){var y=s(15),z=s(16),A=s(18),h=Object.defineProperty;l.f=s(0)?Object.defineProperty:function(p,m,t){if(y(p),m=A(m,!0),y(t),z)try{return h(p,m,t)}catch(a){}if("get"in t||"set"in t)throw TypeError("Accessors not supported!");return"value"in t&&(p[m]=t.value),p}},function(o,l){o.exports=function(s){try{return!!s()}catch(y){return!0}}},function(o,l,s){"use strict";l.__esModule=!0,l.default=function(y,z){if(!(y instanceof z))throw new TypeError("Cannot call a class as a function")}},function(o,l,s){"use strict";l.__esModule=!0;var y,z=s(8),A=(y=z)&&y.__esModule?y:{default:y};l.default=function(){function h(p,m){for(var t=0;t<m.length;t++){var a=m[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),(0,A.default)(p,a.key,a)}}return function(p,m,t){return m&&h(p.prototype,m),t&&h(p,t),p}}()},function(o,l,s){o.exports={default:s(9),__esModule:!0}},function(o,l,s){s(10);var y=s(3).Object;o.exports=function(z,A,h){return y.defineProperty(z,A,h)}},function(o,l,s){var y=s(11);y(y.S+y.F*!s(0),"Object",{defineProperty:s(4).f})},function(o,l,s){var y=s(2),z=s(3),A=s(12),h=s(14),p=function(m,t,a){var e,r,_,x=m&p.F,b=m&p.G,u=m&p.S,n=m&p.P,R=m&p.B,V=m&p.W,k=b?z:z[t]||(z[t]={}),T=k.prototype,L=b?y:u?y[t]:(y[t]||{}).prototype;for(e in b&&(a=t),a)(r=!x&&L&&L[e]!==void 0)&&e in k||(_=r?L[e]:a[e],k[e]=b&&typeof L[e]!="function"?a[e]:R&&r?A(_,y):V&&L[e]==_?function(U){var O=function(j,C,B){if(this instanceof U){switch(arguments.length){case 0:return new U;case 1:return new U(j);case 2:return new U(j,C)}return new U(j,C,B)}return U.apply(this,arguments)};return O.prototype=U.prototype,O}(_):n&&typeof _=="function"?A(Function.call,_):_,n&&((k.virtual||(k.virtual={}))[e]=_,m&p.R&&T&&!T[e]&&h(T,e,_)))};p.F=1,p.G=2,p.S=4,p.P=8,p.B=16,p.W=32,p.U=64,p.R=128,o.exports=p},function(o,l,s){var y=s(13);o.exports=function(z,A,h){if(y(z),A===void 0)return z;switch(h){case 1:return function(p){return z.call(A,p)};case 2:return function(p,m){return z.call(A,p,m)};case 3:return function(p,m,t){return z.call(A,p,m,t)}}return function(){return z.apply(A,arguments)}}},function(o,l){o.exports=function(s){if(typeof s!="function")throw TypeError(s+" is not a function!");return s}},function(o,l,s){var y=s(4),z=s(19);o.exports=s(0)?function(A,h,p){return y.f(A,h,z(1,p))}:function(A,h,p){return A[h]=p,A}},function(o,l,s){var y=s(1);o.exports=function(z){if(!y(z))throw TypeError(z+" is not an object!");return z}},function(o,l,s){o.exports=!s(0)&&!s(5)(function(){return Object.defineProperty(s(17)("div"),"a",{get:function(){return 7}}).a!=7})},function(o,l,s){var y=s(1),z=s(2).document,A=y(z)&&y(z.createElement);o.exports=function(h){return A?z.createElement(h):{}}},function(o,l,s){var y=s(1);o.exports=function(z,A){if(!y(z))return z;var h,p;if(A&&typeof(h=z.toString)=="function"&&!y(p=h.call(z))||typeof(h=z.valueOf)=="function"&&!y(p=h.call(z))||!A&&typeof(h=z.toString)=="function"&&!y(p=h.call(z)))return p;throw TypeError("Can't convert object to primitive value")}},function(o,l){o.exports=function(s,y){return{enumerable:!(1&s),configurable:!(2&s),writable:!(4&s),value:y}}},function(o,l){o.exports={baseVals:{rating:5,gammaadj:1.42,decay:1,echo_zoom:.999823,echo_alpha:.5,echo_orient:1,wave_mode:5,wave_thick:1,wave_brighten:0,wrap:0,darken:1,wave_a:.001185,wave_scale:.325446,wave_smoothing:.9,modwavealphastart:.5,modwavealphaend:1,warpanimspeed:2.630064,warpscale:3.209168,zoomexp:1.000158,dx:1e-5,dy:1e-5,warp:.01,wave_r:.5,wave_g:.5,wave_b:.5,ob_size:.005,ob_a:.5,ib_size:0,ib_r:0,ib_g:0,ib_b:0,ib_a:.1,mv_x:6.4,mv_y:4.8,mv_l:5,mv_a:0},shapes:[{baseVals:{enabled:0}},{baseVals:{enabled:0}},{baseVals:{enabled:0}},{baseVals:{enabled:0}}],waves:[{baseVals:{enabled:0}},{baseVals:{enabled:0}},{baseVals:{enabled:0}},{baseVals:{enabled:0}}],init_eqs_str:"a.thresh=0;a.dx_r=0;a.dy_r=0;a.tg1=0;a.tg2=0;a.tg3=0;a.six=0;",frame_eqs_str:"a.wave_r=.5+.5*Math.sin(1.6*a.time);a.wave_g=.5+.5*Math.sin(4.1*a.time);a.wave_b=-1+(1-a.wave_r+1-a.wave_g);a.warp=2;a.ob_r+=a.wave_b*above(Math.sin(.1*a.time),0);a.ob_b+=a.wave_g*above(Math.sin(.1*a.time),0);a.ob_g+=a.wave_r*above(Math.sin(.1*a.time),0);a.ob_r+=a.wave_g*below(Math.sin(.1*a.time),0);a.ob_b+=a.wave_r*below(Math.sin(.1*a.time),0);a.ob_g+=a.wave_b*below(Math.sin(.1*a.time),0);",pixel_eqs_str:`a.thresh=2*above(a.bass_att,a.thresh)+(1-above(a.bass_att,a.thresh))*(.96*(a.thresh-1.3)+1.3);a.dx_r=.05*equal(a.thresh,2)*Math.sin(5*a.time)+(1-equal(a.thresh,2))*a.dx_r;a.dy_r=.056*equal(a.thresh,2)*Math.sin(6*a.time)+(1-equal(a.thresh,2))*a.dy_r;a.tg1=Math.abs(Math.sin(a.time));a.tg2=22*above(a.tg1,.75)+12*below(a.tg1,.25)+18*above(a.tg1,.25)*below(a.tg1,.5)+12*above(a.tg1,.5)*below(a.tg1,.75);a.tg3=.00001<Math.abs(equal(a.thresh,2))?a.tg2:a.tg3;a.six=Math.sin(a.x);a.dx+=
a.dx_r*Math.sin(Math.abs(a.tg3*a.y))*Math.sin(a.time);a.dy+=a.dy_r*Math.sin(Math.abs(a.tg3*a.x))*Math.cos(a.time);a.dx+=a.dx_r*pow(a.rad,2*a.y)*Math.sin(a.time);a.dy+=a.dy_r*pow(a.rad,2*a.x)*Math.sin(a.time);a.zoom-=.0825*pow(a.rad,6*a.x)*Math.cos(6*a.ang);a.rot-=.039375*Math.sin(1.25*a.time)*pow(a.rad,a.x)*Math.sin(1.45*a.time)*Math.sin(a.time);`,warp:"",comp:""}},function(o,l){o.exports={baseVals:{rating:0,gammaadj:1,decay:1,echo_zoom:1,echo_alpha:1,echo_orient:1,wave_mode:5,wave_brighten:0,wave_a:.001,wave_scale:1.447722,wave_smoothing:.5,modwavealphastart:.5,modwavealphaend:1,fshader:1,dx:1e-5,dy:1e-5,warp:.01,wave_r:.5,wave_g:.5,wave_b:.5,ob_size:.015,ob_a:1,ib_r:0,ib_g:0,ib_b:0,ib_a:1,mv_x:0,mv_y:0,mv_l:1,mv_a:0},shapes:[{baseVals:{enabled:0}},{baseVals:{enabled:0}},{baseVals:{enabled:0}},{baseVals:{enabled:0}}],waves:[{baseVals:{enabled:0}},{baseVals:{enabled:0}},{baseVals:{enabled:0}},{baseVals:{enabled:0}}],init_eqs_str:"a.pfdx_r=0;a.pfthresh=0;a.thresh=0;a.ladder=0;a.q1=0;a.leafset=0;a.dy_r=0;a.pfdy_r=0;a.leaf=0;a.dx_r=0;a.q2=0;a.q3=0;a.leafset=3;",frame_eqs_str:`a.wave_r=.5+.5*Math.sin(1.6*a.time);a.wave_g=.5+.5*Math.sin(4.1*a.time);a.wave_b=-1+(1-a.wave_r+1-a.wave_g);a.warp=0;a.pfthresh=3*above(a.bass_att,a.pfthresh)+(1-above(a.bass_att,a.pfthresh))*(.96*(a.pfthresh-1.3)+1.3);a.pfdx_r=.015*equal(a.pfthresh,3)*Math.sin(5*a.time)+(1-equal(a.pfthresh,3))*a.pfdx_r;a.pfdy_r=.015*equal(a.pfthresh,3)*Math.sin(6*a.time)+(1-equal(a.pfthresh,3))*a.pfdy_r;a.q1=a.wave_r;a.q2=a.wave_g;a.q3=a.wave_b;a.ob_r=1-.75*Math.abs(a.q1);a.ob_g=1-.75*Math.abs(a.q2);
a.ob_b=1-.75*Math.abs(a.q3);a.echo_zoom+=Math.min(Math.max(.75,50*a.pfdx_r),1);a.echo_orient+=16*a.pfdy_r;a.dx+=15.1*a.pfdx_r;a.dy+=15.1*a.pfdy_r;a.ob_size+=.005*a.bass_att;a.ib_a-=Math.min(.5,.5-Math.abs(a.dx+a.dy));`,pixel_eqs_str:`a.thresh=2*above(a.bass_att,a.thresh)+(1-above(a.bass_att,a.thresh))*(.96*(a.thresh-1.3)+1.3);a.dx_r=.015*equal(a.thresh,2)*Math.sin(5*a.time)+(1-equal(a.thresh,2))*a.dx_r;a.dy_r=.015*equal(a.thresh,2)*Math.sin(6*a.time)+(1-equal(a.thresh,2))*a.dy_r;a.ladder=Math.abs(Math.sin(1*a.time));a.leaf=5*below(a.ladder,.2)+8*above(a.ladder,.2)*below(a.ladder,.4)+12*above(a.ladder,.4)*below(a.ladder,.6)+18*above(a.ladder,.6)*below(a.ladder,.8)+24*above(a.ladder,.8);a.leafset=.00001<Math.abs(equal(a.thresh,
2))?a.leaf:a.leafset;a.zoom+=.05*(.75-Math.cos(a.leafset*a.rad))*(1-a.rad);a.zoom-=Math.abs(.05*(.75-Math.cos(4*a.rad)));`,warp:"",comp:""}},function(o,l){o.exports={baseVals:{rating:0,gammaadj:1,decay:.96,echo_zoom:.99663,echo_orient:1,wave_mode:2,wave_dots:1,wave_brighten:0,wrap:0,darken:1,wave_a:.001,wave_scale:.011726,wave_smoothing:.9,warpanimspeed:.010284,warpscale:.01,warp:.01,wave_r:.5,wave_g:.4,wave_b:.3,ob_size:0,ob_r:.11,ob_b:.1,ib_size:0,ib_r:0,ib_g:0,ib_b:0,mv_x:64,mv_y:48,mv_l:5,mv_r:0,mv_g:0,mv_b:0,mv_a:0},shapes:[{baseVals:{enabled:1,sides:32,additive:1,rad:.194774,r:0,b:1,a:1e-6,r2:.63,g2:.7,b2:1,a2:.07,border_a:0},init_eqs_str:"a.lens_scale=0;a.cang=0;a.n=0;a.yq=0;a.xp=0;a.fix=0;a.yp=0;a.t1=0;a.q1=0;a.pos_scale=0;a.cubesize=0;a.xq=0;a.sang=0;a.flip=0;a.zq=0;a.tm=0;a.zp=0;a.q2=0;a.sample=0;a.q8=0;a.flip=1;",frame_eqs_str:`a.flip=-a.flip;a.lens_scale=.5*a.flip+.5;a.lens_scale=1+2.4*a.lens_scale;a.pos_scale=.00001<Math.abs(equal(a.flip,-1))?.5:a.lens_scale;a.t1=.25*a.q1;a.sample=1;a.n=6.283*a.sample;a.cubesize=a.q2;a.fix=.5*div(1,a.cubesize);a.tm=4*a.q1+4*a.sample;a.xp=Math.sin(a.tm)*Math.cos(3*a.tm)*.5+.5;a.yp=Math.sin(1.1*a.tm)*Math.sin(4.1*a.tm)*.5+.5;a.zp=Math.sin(2.9*a.tm)*Math.cos(1.77*a.tm)*.5+.5;a.xp=div(Math.floor(a.xp*a.cubesize),a.cubesize)-.5+a.fix;a.yp=div(Math.floor(a.yp*a.cubesize),
a.cubesize)-.5+a.fix;a.zp=div(Math.floor(a.zp*a.cubesize),a.cubesize)-.5+a.fix;a.ang=a.t1;a.sang=Math.sin(a.ang);a.cang=Math.cos(a.ang);a.xq=a.xp*a.sang+a.zp*a.cang;a.yq=a.yp;a.zq=a.xp*a.cang-a.zp*a.sang;a.xp=a.xq;a.yp=a.yq;a.zp=a.zq;a.ang=.75*a.t1;a.sang=Math.sin(a.ang);a.cang=Math.cos(a.ang);a.xq=a.xp;a.yq=a.yp*a.sang+a.zp*a.cang;a.zq=a.yp*a.cang-a.zp*a.sang;a.xp=a.xq;a.yp=a.yq;a.zp=a.zq;a.zp+=2;a.x=div(-a.xp,a.zp)*a.pos_scale+.5;a.y=div(-a.yp,a.zp)*a.pos_scale*1.333+.5;a.rad=a.rad*(1+div(a.q8,
3))*a.lens_scale;`},{baseVals:{enabled:1,sides:6,rad:.043785,r:.3,g:.6,b:1,g2:0,b2:1,border_a:0},init_eqs_str:"a.cang=0;a.n=0;a.yq=0;a.xp=0;a.fix=0;a.yp=0;a.t1=0;a.q1=0;a.cubesize=0;a.xq=0;a.sang=0;a.zq=0;a.tm=0;a.zp=0;a.q2=0;a.sample=0;a.q8=0;",frame_eqs_str:`a.t1=.25*a.q1;a.sample=1;a.n=6.283*a.sample;a.cubesize=a.q2;a.fix=.5*div(1,a.cubesize);a.tm=4*a.q1+4*a.sample;a.xp=Math.sin(a.tm)*Math.cos(3*a.tm)*.5+.5;a.yp=Math.sin(1.1*a.tm)*Math.sin(4.1*a.tm)*.5+.5;a.zp=Math.sin(2.9*a.tm)*Math.cos(1.77*a.tm)*.5+.5;a.xp=div(Math.floor(a.xp*a.cubesize),a.cubesize)-.5+a.fix;a.yp=div(Math.floor(a.yp*a.cubesize),a.cubesize)-.5+a.fix;a.zp=div(Math.floor(a.zp*a.cubesize),a.cubesize)-.5+a.fix;a.ang=a.t1;a.sang=Math.sin(a.ang);a.cang=Math.cos(a.ang);
a.xq=a.xp*a.sang+a.zp*a.cang;a.yq=a.yp;a.zq=a.xp*a.cang-a.zp*a.sang;a.xp=a.xq;a.yp=a.yq;a.zp=a.zq;a.ang=.75*a.t1;a.sang=Math.sin(a.ang);a.cang=Math.cos(a.ang);a.xq=a.xp;a.yq=a.yp*a.sang+a.zp*a.cang;a.zq=a.yp*a.cang-a.zp*a.sang;a.xp=a.xq;a.yp=a.yq;a.zp=a.zq;a.zp+=2;a.x=div(a.xp,a.zp)+.5;a.y=1.333*div(a.yp,a.zp)+.5;a.a=Math.min(a.a+div(a.q8,2),1);a.r=Math.min(a.r*(1+a.q8),1);a.g=Math.min(a.g*(1+a.q8),1);a.r2=Math.min(div(a.q8,2),1);a.g2=Math.min(div(a.q8,4),1);a.rad*=1+div(a.q8,7);`},{baseVals:{enabled:1,sides:36,rad:.284278,r:0,a:0,r2:.23,g2:.54,b2:1,a2:.05,border_g:.8,border_b:.4,border_a:.45},init_eqs_str:"a.cang=0;a.n=0;a.yq=0;a.xp=0;a.fix=0;a.yp=0;a.t1=0;a.q1=0;a.cubesize=0;a.xq=0;a.sang=0;a.zq=0;a.tm=0;a.zp=0;a.q2=0;a.sample=0;a.q8=0;",frame_eqs_str:`a.t1=.25*a.q1;a.sample=1;a.n=6.283*a.sample;a.cubesize=a.q2;a.fix=.5*div(1,a.cubesize);a.tm=4*a.q1+4*a.sample;a.xp=Math.sin(a.tm)*Math.cos(3*a.tm)*.5+.5;a.yp=Math.sin(1.1*a.tm)*Math.sin(4.1*a.tm)*.5+.5;a.zp=Math.sin(2.9*a.tm)*Math.cos(1.77*a.tm)*.5+.5;a.xp=div(Math.floor(a.xp*a.cubesize),a.cubesize)-.5+a.fix;a.yp=div(Math.floor(a.yp*a.cubesize),a.cubesize)-.5+a.fix;a.zp=div(Math.floor(a.zp*a.cubesize),a.cubesize)-.5+a.fix;a.ang=a.t1;a.sang=Math.sin(a.ang);a.cang=Math.cos(a.ang);
a.xq=a.xp*a.sang+a.zp*a.cang;a.yq=a.yp;a.zq=a.xp*a.cang-a.zp*a.sang;a.xp=a.xq;a.yp=a.yq;a.zp=a.zq;a.ang=.75*a.t1;a.sang=Math.sin(a.ang);a.cang=Math.cos(a.ang);a.xq=a.xp;a.yq=a.yp*a.sang+a.zp*a.cang;a.zq=a.yp*a.cang-a.zp*a.sang;a.xp=a.xq;a.yp=a.yq;a.zp=a.zq;a.zp+=2;a.x=div(a.xp,a.zp)+.5;a.y=1.333*div(a.yp,a.zp)+.5;a.a2=Math.min(a.a2*(1+div(a.q8,2)),1);a.r2=Math.min(a.r2*(1+div(a.q8,4)),1);a.g2=Math.min(a.g2*(1+div(a.q8,3)),1);a.border_a=Math.min(a.border_a*(1+a.q8),1);`},{baseVals:{enabled:1,sides:6,additive:1,rad:.158045,r:.3,g:.6,b:1,a:.140001,r2:.4,g2:.5,b2:1,border_a:0},init_eqs_str:"a.cang=0;a.n=0;a.yq=0;a.xp=0;a.fix=0;a.yp=0;a.t1=0;a.q1=0;a.cubesize=0;a.xq=0;a.sang=0;a.zq=0;a.tm=0;a.zp=0;a.q2=0;a.sample=0;a.q8=0;",frame_eqs_str:`a.t1=.25*a.q1;a.sample=1;a.n=6.283*a.sample;a.cubesize=a.q2;a.fix=.5*div(1,a.cubesize);a.tm=4*a.q1+4*a.sample;a.xp=Math.sin(a.tm)*Math.cos(3*a.tm)*.5+.5;a.yp=Math.sin(1.1*a.tm)*Math.sin(4.1*a.tm)*.5+.5;a.zp=Math.sin(2.9*a.tm)*Math.cos(1.77*a.tm)*.5+.5;a.xp=div(Math.floor(a.xp*a.cubesize),a.cubesize)-.5+a.fix;a.yp=div(Math.floor(a.yp*a.cubesize),a.cubesize)-.5+a.fix;a.zp=div(Math.floor(a.zp*a.cubesize),a.cubesize)-.5+a.fix;a.ang=a.t1;a.sang=Math.sin(a.ang);a.cang=Math.cos(a.ang);
a.xq=a.xp*a.sang+a.zp*a.cang;a.yq=a.yp;a.zq=a.xp*a.cang-a.zp*a.sang;a.xp=a.xq;a.yp=a.yq;a.zp=a.zq;a.ang=.75*a.t1;a.sang=Math.sin(a.ang);a.cang=Math.cos(a.ang);a.xq=a.xp;a.yq=a.yp*a.sang+a.zp*a.cang;a.zq=a.yp*a.cang-a.zp*a.sang;a.xp=a.xq;a.yp=a.yq;a.zp=a.zq;a.zp+=2;a.x=div(a.xp,a.zp)+.5;a.y=1.333*div(a.yp,a.zp)+.5;a.a=Math.min(a.a*a.q8,1);a.rad*=1+a.q8;`}],waves:[{baseVals:{enabled:1,thick:1,additive:1,r:.05,g:.09},init_eqs_str:"a.cang=0;a.n=0;a.yq=0;a.xp=0;a.fix=0;a.yp=0;a.t1=0;a.q1=0;a.cubesize=0;a.xq=0;a.sang=0;a.zq=0;a.ang=0;a.tm=0;a.zp=0;a.q2=0;",frame_eqs_str:"a.t1=.25*a.q1;",point_eqs_str:`a.n=6.283*a.sample;a.cubesize=a.q2;a.fix=.5*div(1,a.cubesize);a.tm=4*a.q1+4*a.sample;a.xp=Math.sin(a.tm)*Math.cos(3*a.tm)*.5+.5;a.yp=Math.sin(1.1*a.tm)*Math.sin(4.1*a.tm)*.5+.5;a.zp=Math.sin(2.9*a.tm)*Math.cos(1.77*a.tm)*.5+.5;a.xp=div(Math.floor(a.xp*a.cubesize),a.cubesize)-.5+a.fix;a.yp=div(Math.floor(a.yp*a.cubesize),a.cubesize)-.5+a.fix;a.zp=div(Math.floor(a.zp*a.cubesize),a.cubesize)-.5+a.fix;a.ang=a.t1;a.sang=Math.sin(a.ang);a.cang=Math.cos(a.ang);a.xq=a.xp*a.sang+a.zp*
a.cang;a.yq=a.yp;a.zq=a.xp*a.cang-a.zp*a.sang;a.xp=a.xq;a.yp=a.yq;a.zp=a.zq;a.ang=.75*a.t1;a.sang=Math.sin(a.ang);a.cang=Math.cos(a.ang);a.xq=a.xp;a.yq=a.yp*a.sang+a.zp*a.cang;a.zq=a.yp*a.cang-a.zp*a.sang;a.xp=a.xq;a.yp=a.yq;a.zp=a.zq;a.zp+=2;a.x=div(a.xp,a.zp)+.5;a.y=1.333*div(a.yp,a.zp)+.5;`},{baseVals:{enabled:0}},{baseVals:{enabled:1,usedots:1,thick:1},init_eqs_str:"a.cang=0;a.n=0;a.yq=0;a.xp=0;a.fix=0;a.yp=0;a.t1=0;a.q1=0;a.cubesize=0;a.xq=0;a.sang=0;a.zq=0;a.ang=0;a.zp=0;a.q2=0;",frame_eqs_str:"a.t1=.25*a.q1;",point_eqs_str:`a.n=6.283*a.sample;a.cubesize=a.q2;a.fix=.5*div(1,a.cubesize);a.xp=div(randint(a.cubesize),a.cubesize)-.5+a.fix;a.yp=div(randint(a.cubesize),a.cubesize)-.5+a.fix;a.zp=div(randint(a.cubesize),a.cubesize)-.5+a.fix;a.ang=a.t1;a.sang=Math.sin(a.ang);a.cang=Math.cos(a.ang);a.xq=a.xp*a.sang+a.zp*a.cang;a.yq=a.yp;a.zq=a.xp*a.cang-a.zp*a.sang;a.xp=a.xq;a.yp=a.yq;a.zp=a.zq;a.ang=.75*a.t1;a.sang=Math.sin(a.ang);a.cang=Math.cos(a.ang);a.xq=a.xp;a.yq=a.yp*a.sang+a.zp*a.cang;a.zq=a.yp*a.cang-
a.zp*a.sang;a.xp=a.xq;a.yp=a.yq;a.zp=a.zq;a.zp+=2;a.x=div(a.xp,a.zp)+.5;a.y=1.333*div(a.yp,a.zp)+.5;`},{baseVals:{enabled:0}}],init_eqs_str:"a.q1=0;a.beat=0;a.vol=0;a.bc=0;a.size=0;a.q2=0;a.trigger=0;a.q7=0;a.mtime=0;a.q8=0;a.mv_x=64;a.mv_y=48;a.nut=0;a.stp=0;a.stq=0;a.rtp=0;a.rtq=0;a.wvr=0;a.decay=0;a.dcsp=0;a.size=4;a.bc=0;",frame_eqs_str:"a.decay=.95;a.zoom=1.005;a.vol=.25*(a.bass+a.mid+a.treb);a.vol*=a.vol;a.q8=a.vol;a.mtime+=.01*a.vol*div(75,a.fps);a.q7=a.mtime;a.monitor=div(512,8);a.warp=0;a.q1=.9*a.mtime;a.beat=above(a.vol,1);a.bc=Math.max(a.bc,0);a.bc=.00001<Math.abs(equal(a.bc,0))?a.bc+a.beat:a.bc-div(div(1,a.fps),4);a.trigger=equal(a.bc,1);a.monitor=a.size;a.size+=a.trigger;a.size=.00001<Math.abs(above(a.size,10))?4:a.size;a.q2=Math.floor(a.size);",pixel_eqs_str:"",pixel_eqs:"",warp:"",comp:""}},function(o,l){o.exports={baseVals:{rating:5,decay:.95,echo_zoom:1.006596,echo_orient:1,wave_mode:2,wave_dots:1,wave_brighten:0,wave_a:.019788,wave_scale:.011726,wave_smoothing:.9,warpanimspeed:.010284,warpscale:.01,fshader:1,warp:.01,wave_r:.5,wave_g:.4,wave_b:.3,ob_size:0,ob_r:.11,ob_b:.1,ib_size:.005,ib_r:0,ib_g:0,ib_b:0,ib_a:1,mv_x:31.999994,mv_y:24.000004,mv_dx:.02,mv_dy:-.02,mv_l:1,mv_r:.49,mv_g:.48,mv_b:.300001,mv_a:0},shapes:[{baseVals:{enabled:1,textured:1,rad:1.670888,tex_ang:.942478,tex_zoom:.534261,g:1,b:1,r2:1,b2:1,a2:1,border_a:.17},init_eqs_str:"a.flux=0;a.q5=0;a.fluxs=0;a.advflux=0;a.q3=0;a.adv=0;a.advs=0;",frame_eqs_str:"a.flux=9*a.q5;a.fluxs=Math.max(a.flux,0);a.fluxs=Math.min(a.fluxs,1);a.advflux=a.q3*a.fluxs+-a.q3*(1-a.fluxs);a.adv+=a.advflux;a.advs=div(a.adv,256);a.ang=a.advs;a.rad=1.671+div(a.q3,25);"},{baseVals:{enabled:0}},{baseVals:{enabled:1,sides:3,x:.59,rad:.444842,r:0,r2:.1,g2:.05,border_a:0},init_eqs_str:"a.rotator=0;a.dir=0;a.mover=0;a.dir=3;a.mover=0;a.rotator=.255;",frame_eqs_str:`a.ang=a.rotator;a.x=.00001<Math.abs(equal(a.dir,1))?1-a.mover:.00001<Math.abs(equal(a.dir,1.5))?.15:.00001<Math.abs(equal(a.dir,2))?0:.00001<Math.abs(equal(a.dir,2.5))?0:.00001<Math.abs(equal(a.dir,3))?0+a.mover:.00001<Math.abs(equal(a.dir,3.5))?1:(equal(a.dir,4),1);a.y=.00001<Math.abs(equal(a.dir,1))?1:.00001<Math.abs(equal(a.dir,1.5))?1:.00001<Math.abs(equal(a.dir,2))?1-a.mover:.00001<Math.abs(equal(a.dir,2.5))?0:.00001<Math.abs(equal(a.dir,3))?0:.00001<Math.abs(equal(a.dir,
3.5))?0:.00001<Math.abs(equal(a.dir,4))?0+a.mover:1;a.mover=.00001<Math.abs(equal(a.dir,1))?a.mover+.005:.00001<Math.abs(equal(a.dir,1.5))?0:.00001<Math.abs(equal(a.dir,2))?a.mover+.005:.00001<Math.abs(equal(a.dir,2.5))?0:.00001<Math.abs(equal(a.dir,3))?a.mover+.005:.00001<Math.abs(equal(a.dir,3.5))?0:.00001<Math.abs(equal(a.dir,4))?a.mover+.005:0;a.dir=.00001<Math.abs(equal(a.dir,1))?.00001<Math.abs(above(a.mover,.995))?1.5:a.dir:.00001<Math.abs(equal(a.dir,1.5))?.00001<Math.abs(below(a.rotator,
-1.29))?2:a.dir:.00001<Math.abs(equal(a.dir,2))?.00001<Math.abs(above(a.mover,.995))?2.5:a.dir:.00001<Math.abs(equal(a.dir,2.5))?.00001<Math.abs(below(a.rotator,-2.85))?3:a.dir:.00001<Math.abs(equal(a.dir,3))?.00001<Math.abs(above(a.mover,.995))?3.5:a.dir:.00001<Math.abs(equal(a.dir,3.5))?.00001<Math.abs(below(a.rotator,-4.44))?4:a.dir:.00001<Math.abs(equal(a.dir,4))?.00001<Math.abs(above(a.mover,.995))?4.5:a.dir:.00001<Math.abs(equal(a.dir,4.5))?.00001<Math.abs(below(a.rotator,-5.94))?1:a.dir:a.dir;
a.rotator=.00001<Math.abs(equal(a.dir,1.5))?.00001<Math.abs(above(a.rotator,-1.31))?a.rotator-.05:a.rotator:.00001<Math.abs(equal(a.dir,2))?-1.3:.00001<Math.abs(equal(a.dir,2.5))?.00001<Math.abs(above(a.rotator,-2.87))?a.rotator-.05:a.rotator:.00001<Math.abs(equal(a.dir,3))?-2.86:.00001<Math.abs(equal(a.dir,3.5))?.00001<Math.abs(above(a.rotator,-4.46))?a.rotator-.05:a.rotator:.00001<Math.abs(equal(a.dir,4))?-4.45:.00001<Math.abs(equal(a.dir,4.5))?.00001<Math.abs(above(a.rotator,-5.97))?a.rotator-
.05:a.rotator:.00001<Math.abs(equal(a.dir,4))?-5.96:.26;a.b=above(a.mid,1.5);a.r2=above(a.mid,1.5);a.g2=above(a.mid,1.5);a.b2=above(a.mid,1.5);`},{baseVals:{enabled:1,sides:3,additive:1,x:.84,r:.98,g:1,b:.98,a:.3,g2:.09,border_a:0},init_eqs_str:"a.q1=0;",frame_eqs_str:"a.x=.4*Math.sin(div(a.time,2))+.5;a.y=.4*Math.sin(a.time)+.5;a.rad=div(a.q1*a.q1,2);a.ang=4*a.q1;a.r=.7+.5*Math.sin(div(a.time,2));a.g=.7+.5*Math.sin(div(a.time,2)+2);a.b=.7+.5*Math.sin(div(a.time,2)+4);"}],waves:[{baseVals:{enabled:0}},{baseVals:{enabled:0}},{baseVals:{enabled:0}},{baseVals:{enabled:0}}],init_eqs_str:"a.speedinv=0;a.q1=0;a.q5=0;a.flux=0;a.q4=0;a.q2=0;a.qb=0;a.speed=0;a.qc=0;a.q3=0;a.qa=0;a.mv_x=64;a.mv_y=48;a.nut=0;a.stp=0;a.stq=0;a.rtp=0;a.rtq=0;a.wvr=0;a.decay=0;a.dcsp=0;a.q1=0;a.q2=0;a.q3=0;",frame_eqs_str:"a.decay=1;a.zoom=1;a.speed=.8;a.speedinv=1-a.speed;a.q1=a.qa*a.speed+a.bass*a.speedinv;a.q2=a.qb*a.speed+a.mid*a.speedinv;a.q3=a.qc*a.speed+a.treb*a.speedinv;a.qa=a.q1;a.qb=a.q2;a.qc=a.q3;a.flux=Math.sin(div(a.time,2));a.q4=.5*a.flux+.5;a.q5=a.flux;",pixel_eqs_str:"",pixel_eqs:"",warp:"",comp:""}},function(o,l){o.exports={baseVals:{rating:0,gammaadj:1.21,decay:.96,echo_zoom:.99663,echo_orient:1,wave_mode:2,wave_dots:1,wave_brighten:0,brighten:1,invert:1,wave_a:.001,wave_scale:.011726,wave_smoothing:.9,warpanimspeed:.037492,warpscale:.014889,warp:.033004,wave_r:.5,wave_g:.4,wave_b:.3,ob_size:.055,ob_r:1,ob_g:1,ob_b:1,ob_a:1,ib_size:0,ib_r:0,ib_g:0,ib_b:0,mv_x:0,mv_y:43.199997,mv_l:1,mv_g:.91,mv_b:.71,mv_a:0},shapes:[{baseVals:{enabled:0}},{baseVals:{enabled:0}},{baseVals:{enabled:0}},{baseVals:{enabled:0}}],waves:[{baseVals:{enabled:1,r:.1,b:.7},init_eqs_str:"a.n=0;a.yq=0;a.xp=0;a.t5=0;a.xs=0;a.yp=0;a.t1=0;a.q1=0;a.cosang=0;a.r1=0;a.g2=0;a.xq=0;a.t3=0;a.flip=0;a.t6=0;a.ys=0;a.zq=0;a.phs=0;a.r2=0;a.ang=0;a.sinang=0;a.tm=0;a.b2=0;a.t2=0;a.zp=0;a.g1=0;a.t4=0;a.b1=0;a.q8=0;",frame_eqs_str:"a.t1=.5*Math.sin(a.time)+.5;a.t2=.5*Math.sin(a.time+2.1)+.5;a.t3=.5*Math.sin(a.time+4.2)+.5;a.t4=.5*Math.sin(a.time+1.1)+.5;a.t5=.5*Math.sin(a.time+3.1)+.5;a.t6=.5*Math.sin(a.time+5.2)+.5;",point_eqs_str:`a.n=6.283*a.sample;a.phs=.2*-a.sample;a.tm=a.q1+a.phs;a.flip+=1;a.flip*=below(a.flip,2);a.xp=0;a.yp=.1*a.flip+.2*(.5*Math.sin(a.tm)+.5);a.zp=0;a.ang=.5*Math.sin(2*a.tm)+.5;a.xq=a.xp;a.sinang=Math.sin(a.ang);a.cosang=Math.cos(a.ang);a.yq=a.yp*a.sinang+a.zp*a.cosang;a.zq=a.yp*a.cosang-a.zp*a.sinang;a.yq=a.yp;a.zq=a.zp;a.ang=8*a.tm;a.sinang=Math.sin(a.ang);a.cosang=Math.cos(a.ang);a.xp=a.xq*a.sinang+a.yq*a.cosang;a.yp=a.xq*a.cosang-a.yq*a.sinang;a.zp=a.zq;a.zp-=.3;a.ang=3.14+1.5*
Math.sin(2*a.tm-.5);a.sinang=Math.sin(a.ang);a.cosang=Math.cos(a.ang);a.xq=a.xp;a.yq=a.yp*a.sinang+a.zp*a.cosang;a.zq=a.yp*a.cosang-a.zp*a.sinang;a.ang=-1+Math.cos(3.1*a.tm+.5);a.sinang=Math.sin(a.ang);a.cosang=Math.cos(a.ang);a.xp=a.xq*a.sinang+a.yq*a.cosang;a.yp=a.xq*a.cosang-a.yq*a.sinang;a.zp=a.zq;a.zp-=.35;a.ang=1.75*Math.cos(2.3*a.tm)-1.05;a.sinang=Math.sin(a.ang);a.cosang=Math.cos(a.ang);a.xq=a.xp*a.sinang+a.zp*a.cosang;a.yq=a.yp;a.zq=a.xp*a.cosang-a.zp*a.sinang;a.ang=.5*Math.cos(a.tm)-.5;
a.sinang=Math.sin(a.ang);a.cosang=Math.cos(a.ang);a.xp=a.xq;a.yp=a.yq*a.cosang-a.zq*a.sinang;a.zp=a.yq*a.sinang+a.zq*a.cosang;a.zp+=2;a.xs=div(a.xp,a.zp);a.ys=div(a.yp,a.zp);a.x=a.xs+.5;a.y=1.3*a.ys+.5;a.a=.00001<Math.abs(equal(a.q8,1))?1-a.sample:a.sample;a.a*=a.a;a.b+=.3*pow(1-a.sample,2);a.r1=a.t1;a.g1=a.t2;a.b1=a.t3;a.r2=a.t4;a.g2=a.t5;a.b2=a.t6;a.r=a.r1*a.flip+a.r2*(1-a.flip);a.g=a.g1*a.flip+a.g2*(1-a.flip);a.b=a.b1*a.flip+a.b2*(1-a.flip);`},{baseVals:{enabled:1,r:.2,b:.6},init_eqs_str:"a.n=0;a.yq=0;a.xp=0;a.t5=0;a.xs=0;a.yp=0;a.t1=0;a.q1=0;a.cosang=0;a.r1=0;a.g2=0;a.xq=0;a.t3=0;a.flip=0;a.t6=0;a.ys=0;a.zq=0;a.phs=0;a.r2=0;a.ang=0;a.sinang=0;a.tm=0;a.b2=0;a.t2=0;a.zp=0;a.g1=0;a.t4=0;a.b1=0;a.q8=0;",frame_eqs_str:"a.t1=.5*Math.sin(a.time)+.5;a.t2=.5*Math.sin(a.time+2.1)+.5;a.t3=.5*Math.sin(a.time+4.2)+.5;a.t4=.5*Math.sin(a.time+1.1)+.5;a.t5=.5*Math.sin(a.time+3.1)+.5;a.t6=.5*Math.sin(a.time+5.2)+.5;",point_eqs_str:`a.n=6.283*a.sample;a.phs=.2*-a.sample;a.tm=a.q1+a.phs;a.flip+=1;a.flip*=below(a.flip,2);a.xp=0;a.yp=.1*a.flip+.2*(.5*Math.sin(a.tm)+.5)+.1;a.yp=-a.yp;a.zp=0;a.ang=.5*Math.sin(2*a.tm)+.5;a.sinang=Math.sin(a.ang);a.cosang=Math.cos(a.ang);a.xq=a.xp;a.yq=a.yp*a.sinang+a.zp*a.cosang;a.zq=a.yp*a.cosang-a.zp*a.sinang;a.yq=a.yp;a.zq=a.zp;a.ang=8*a.tm;a.sinang=Math.sin(a.ang);a.cosang=Math.cos(a.ang);a.xp=a.xq*a.sinang+a.yq*a.cosang;a.yp=a.xq*a.cosang-a.yq*a.sinang;a.zp=a.zq;a.zp-=.3;
a.ang=3.14+1.5*Math.sin(2*a.tm-.5);a.sinang=Math.sin(a.ang);a.cosang=Math.cos(a.ang);a.xq=a.xp;a.yq=a.yp*a.sinang+a.zp*a.cosang;a.zq=a.yp*a.cosang-a.zp*a.sinang;a.ang=-1+Math.cos(3.1*a.tm+.5);a.sinang=Math.sin(a.ang);a.cosang=Math.cos(a.ang);a.xp=a.xq*a.sinang+a.yq*a.cosang;a.yp=a.xq*a.cosang-a.yq*a.sinang;a.zp=a.zq;a.zp-=.35;a.ang=1.75*Math.cos(2.3*a.tm)-1.05;a.sinang=Math.sin(a.ang);a.cosang=Math.cos(a.ang);a.xq=a.xp*a.sinang+a.zp*a.cosang;a.yq=a.yp;a.zq=a.xp*a.cosang-a.zp*a.sinang;a.ang=.5*Math.cos(a.tm)-
.5;a.sinang=Math.sin(a.ang);a.cosang=Math.cos(a.ang);a.xp=a.xq;a.yp=a.yq*a.cosang-a.zq*a.sinang;a.zp=a.yq*a.sinang+a.zq*a.cosang;a.zp+=2;a.xs=div(a.xp,a.zp);a.ys=div(a.yp,a.zp);a.x=a.xs+.5;a.y=1.3*a.ys+.5;a.a=.00001<Math.abs(equal(a.q8,1))?1-a.sample:a.sample;a.a*=a.a;a.b+=.3*pow(1-a.sample,2);a.r1=a.t1;a.g1=a.t2;a.b1=a.t3;a.r2=a.t4;a.g2=a.t5;a.b2=a.t6;a.r=a.r1*a.flip+a.r2*(1-a.flip);a.g=a.g1*a.flip+a.g2*(1-a.flip);a.b=a.b1*a.flip+a.b2*(1-a.flip);`},{baseVals:{enabled:1,usedots:1,thick:1,additive:1,g:.6,b:.1},init_eqs_str:"a.n=0;a.yq=0;a.xp=0;a.t5=0;a.xs=0;a.yp=0;a.t1=0;a.q1=0;a.cosang=0;a.t8=0;a.xq=0;a.t3=0;a.flip=0;a.t6=0;a.ys=0;a.zq=0;a.phs=0;a.ang=0;a.sinang=0;a.tm=0;a.t2=0;a.zp=0;a.t4=0;a.q8=0;",frame_eqs_str:"a.t1=.5*Math.sin(a.time)+.5;a.t2=.5*Math.sin(a.time+2.1)+.5;a.t3=.5*Math.sin(a.time+4.2)+.5;a.t4=.5*Math.sin(a.time+1.1)+.5;a.t5=.5*Math.sin(a.time+3.1)+.5;a.t6=.5*Math.sin(a.time+5.2)+.5;a.t8=Math.floor(2*Math.sin(2*a.time)+3);",point_eqs_str:`a.n=6.283*a.sample;a.phs=.2*-a.sample;a.tm=a.q1+a.phs;a.flip+=1;a.flip*=below(a.flip,2);a.xp=0;a.yp=.1*a.flip+.2*(.5*Math.sin(a.tm)+.5);a.zp=0;a.ang=.5*Math.sin(2*a.tm)+.5;a.xq=a.xp;a.sinang=Math.sin(a.ang);a.cosang=Math.cos(a.ang);a.yq=a.yp*a.sinang+a.zp*a.cosang;a.zq=a.yp*a.cosang-a.zp*a.sinang;a.yq=a.yp;a.zq=a.zp;a.ang=8*a.tm+1;a.sinang=Math.sin(a.ang);a.cosang=Math.cos(a.ang);a.xp=a.xq*a.sinang+a.yq*a.cosang;a.yp=a.xq*a.cosang-a.yq*a.sinang;a.zp=a.zq;a.zp-=.3;a.ang=3.14+
1.5*Math.sin(2*a.tm-.5);a.sinang=Math.sin(a.ang);a.cosang=Math.cos(a.ang);a.xq=a.xp;a.yq=a.yp*a.sinang+a.zp*a.cosang;a.zq=a.yp*a.cosang-a.zp*a.sinang;a.ang=-1+Math.cos(3.1*a.tm+.5);a.sinang=Math.sin(a.ang);a.cosang=Math.cos(a.ang);a.xp=a.xq*a.sinang+a.yq*a.cosang;a.yp=a.xq*a.cosang-a.yq*a.sinang;a.zp=a.zq;a.zp-=.35;a.ang=1.75*Math.cos(2.3*a.tm)-1.05;a.sinang=Math.sin(a.ang);a.cosang=Math.cos(a.ang);a.xq=a.xp*a.sinang+a.zp*a.cosang;a.yq=a.yp;a.zq=a.xp*a.cosang-a.zp*a.sinang;a.ang=.5*Math.cos(a.tm)-
.5;a.sinang=Math.sin(a.ang);a.cosang=Math.cos(a.ang);a.xp=a.xq;a.yp=a.yq*a.cosang-a.zq*a.sinang;a.zp=a.yq*a.sinang+a.zq*a.cosang;a.zp+=2;a.xs=div(a.xp,a.zp);a.ys=div(a.yp,a.zp);a.x=a.xs+.5;a.y=1.3*a.ys+.5;a.a=.00001<Math.abs(equal(a.q8,1))?1-a.sample:a.sample;a.a*=above(Math.sin(128*a.tm*a.t8),0);a.r=a.t4;a.g=a.t5;a.b=a.t6;`},{baseVals:{enabled:1,usedots:1,thick:1,additive:1,g:.3,b:.1},init_eqs_str:"a.n=0;a.yq=0;a.xp=0;a.t5=0;a.xs=0;a.yp=0;a.t1=0;a.q1=0;a.cosang=0;a.t8=0;a.xq=0;a.t3=0;a.flip=0;a.t6=0;a.ys=0;a.zq=0;a.phs=0;a.ang=0;a.sinang=0;a.tm=0;a.t2=0;a.zp=0;a.t4=0;a.q8=0;",frame_eqs_str:"a.t1=.5*Math.sin(a.time)+.5;a.t2=.5*Math.sin(a.time+2.1)+.5;a.t3=.5*Math.sin(a.time+4.2)+.5;a.t4=.5*Math.sin(a.time+1.1)+.5;a.t5=.5*Math.sin(a.time+3.1)+.5;a.t6=.5*Math.sin(a.time+5.2)+.5;a.t8=Math.floor(2*Math.sin(2*a.time)+3);",point_eqs_str:`a.n=6.283*a.sample;a.phs=.2*-a.sample;a.tm=a.q1+a.phs;a.flip+=1;a.flip*=below(a.flip,2);a.xp=0;a.yp=.1*a.flip+.2*(.5*Math.sin(a.tm)+.5)+.1;a.yp=-a.yp;a.zp=0;a.ang=.5*Math.sin(2*a.tm)+.5;a.sinang=Math.sin(a.ang);a.cosang=Math.cos(a.ang);a.xq=a.xp;a.yq=a.yp*a.sinang+a.zp*a.cosang;a.zq=a.yp*a.cosang-a.zp*a.sinang;a.yq=a.yp;a.zq=a.zp;a.ang=8*a.tm+1;a.sinang=Math.sin(a.ang);a.cosang=Math.cos(a.ang);a.xp=a.xq*a.sinang+a.yq*a.cosang;a.yp=a.xq*a.cosang-a.yq*a.sinang;a.zp=a.zq;a.zp-=
.3;a.ang=3.14+1.5*Math.sin(2*a.tm-.5);a.sinang=Math.sin(a.ang);a.cosang=Math.cos(a.ang);a.xq=a.xp;a.yq=a.yp*a.sinang+a.zp*a.cosang;a.zq=a.yp*a.cosang-a.zp*a.sinang;a.ang=-1+Math.cos(3.1*a.tm+.5);a.sinang=Math.sin(a.ang);a.cosang=Math.cos(a.ang);a.xp=a.xq*a.sinang+a.yq*a.cosang;a.yp=a.xq*a.cosang-a.yq*a.sinang;a.zp=a.zq;a.zp-=.35;a.ang=1.75*Math.cos(2.3*a.tm)-1.05;a.sinang=Math.sin(a.ang);a.cosang=Math.cos(a.ang);a.xq=a.xp*a.sinang+a.zp*a.cosang;a.yq=a.yp;a.zq=a.xp*a.cosang-a.zp*a.sinang;a.ang=.5*
Math.cos(a.tm)-.5;a.sinang=Math.sin(a.ang);a.cosang=Math.cos(a.ang);a.xp=a.xq;a.yp=a.yq*a.cosang-a.zq*a.sinang;a.zp=a.yq*a.sinang+a.zq*a.cosang;a.zp+=2;a.xs=div(a.xp,a.zp);a.ys=div(a.yp,a.zp);a.x=a.xs+.5;a.y=1.3*a.ys+.5;a.a=.00001<Math.abs(equal(a.q8,1))?1-a.sample:a.sample;a.a*=a.a;a.a*=above(Math.sin(128*a.tm*a.t8),0);a.r=a.t4;a.g=a.t5;a.b=a.t6;`}],init_eqs_str:'a.meanbass_att=0;a.q1=0;a["var"]=0;a.flip=0;a.lastbeat=0;a.beatrate=0;a.mode=0;a.peakbass_att=0;a.beatcounter=0;a.att=0;a.volume=0;a.beat=0;a.vol=0;a.mtime=0;a.q8=0;a.mv_x=64;a.mv_y=48;a.nut=0;a.stp=0;a.stq=0;a.rtp=0;a.rtq=0;a.wvr=0;a.decay=0;a.dcsp=0;a.warp=0;',frame_eqs_str:`a.volume=.3*(a.bass+a.mid+a.att);a.beatrate=equal(a.beatrate,0)+(1-equal(a.beatrate,0))*(below(a.volume,.01)+(1-below(a.volume,.01))*a.beatrate);a.lastbeat+=equal(a.lastbeat,0)*a.time;a.meanbass_att=.1*(9*a.meanbass_att+a.bass_att);a.peakbass_att=Math.max(a.bass_att,a.peakbass_att);a.beatrate=Math.max(.00001<Math.abs(a.beat)?.00001<Math.abs(below(a.time-a.lastbeat,2*a.beatrate))?.1*(9*a.beatrate+a.time-a.lastbeat):a.beatrate:a.beatrate,.1);a.peakbass_att=a.beat*a.bass_att+(1-
a.beat)*a.peakbass_att*(.95*above(a.time-a.lastbeat,2*a.beatrate)+.995*(1-above(a.time-a.lastbeat,2*a.beatrate)));a.lastbeat=a.beat*a.time+(1-a.beat)*a.lastbeat;a.peakbass_att=Math.max(a.peakbass_att,1.1*a.meanbass_att);a.beat=above(a.volume,.8)*below(a.peakbass_att-a.bass_att,.05*a.peakbass_att)*above(a.time-a.lastbeat,.1+.5*(a.beatrate-.1));a.beatcounter+=a.beat;a.mode=.00001<Math.abs(a.beat*equal(mod(a.beatcounter,2),0))?1-a.mode:a.mode;a.flip=2*a.mode-1;a.monitor=a.flip;a.q8=a.flip;a.decay=1;
a.zoom=1.002;a.vol=.25*(a.bass_att+a.mid_att+a.treb_att);a.vol*=a.vol;a.mtime+=.1*a.vol*a.flip*div(55,a.fps);a.q1=.4*a.mtime;a.warp=0;`,pixel_eqs_str:'a["var"]=Math.tan(a.time)*a.treb*a.treb;a.zoom=1+div(a.rad,40)+div(a["var"],40);',warp:"",comp:""}},function(o,l){o.exports={baseVals:{rating:5,gammaadj:1,decay:.999,echo_zoom:1.006596,echo_alpha:.5,echo_orient:3,wave_mode:2,additivewave:1,wave_dots:1,wave_thick:1,wave_a:4.099998,wave_scale:1.18647,wave_smoothing:.63,wave_mystery:-.2,modwavealphastart:.71,modwavealphaend:1.28,warpscale:1.331,zoom:.999514,warp:.01,wave_r:.3,wave_g:.6,ob_size:.005,ob_r:.4999,ob_b:1,ob_a:1,ib_size:.26,mv_x:64,mv_y:48,mv_l:.2,mv_r:0,mv_g:0,mv_b:0,mv_a:0},shapes:[{baseVals:{enabled:0}},{baseVals:{enabled:0}},{baseVals:{enabled:0}},{baseVals:{enabled:0}}],waves:[{baseVals:{},init_eqs_str:"",frame_eqs_str:"",point_eqs_str:""},{baseVals:{},init_eqs_str:"",frame_eqs_str:"",point_eqs_str:""},{baseVals:{},init_eqs_str:"",frame_eqs_str:"",point_eqs_str:""},{baseVals:{},init_eqs_str:"",frame_eqs_str:"",point_eqs_str:""}],init_eqs_str:"a.new_mid=0;a.q6=0;a.q1=0;a.q5=0;a.treb_c=0;a.vol_att=0;a.zoome=0;a.mid_c=0;a.new_treb=0;a.q4=0;a.rad_cycle=0;a.vol_c=0;a.bass_c=0;a.rote=0;a.vol=0;a.new_bass=0;a.q2=0;a.q3=0;a.q7=0;a.q8=0;",frame_eqs_str:`a.vol_att=.25*a.treb_att+.25*a.mid_att+div(.25*a.bass_att+.5*Math.sin(a.vol),a.vol);a.vol=a.bass+a.treb+a.mid;a.new_bass=.25*a.bass+.5*Math.sin(.25*a.bass_att);a.new_treb=.25*a.treb+.5*Math.sin(.25*a.treb_att);a.new_mid=.25*a.mid+.4*Math.sin(.25*a.mid_att);a.bass_c=a.q1-Math.sin(bitand(a.bass_att,.54*a.time));a.treb_c=a.q2-Math.sin(bitand(a.treb_att,.44*a.time));a.mid_c=a.q3-Math.sin(bitand(a.mid_att,.24*a.time));a.vol_c=a.q4-Math.sin(bitand(a.vol_att,.64*a.time));a.q1=Math.sin(bitand(a.bass-
a.new_bass,.63*a.time));a.q2=Math.sin(bitand(a.treb-a.new_treb,.43*a.time));a.q3=Math.sin(bitand(a.mid-a.new_mid,.23*a.time));a.q4=Math.sin(bitand(a.vol,.65*a.time));a.q5=a.bass_c;a.q6=a.treb_c;a.q7=a.mid_c;a.q8=a.vol_c;a.wave_mystery=a.bass_att-1;a.wave_r+=.2*Math.sin(.43*a.time);a.wave_b-=.2*Math.sin(.54*a.time);a.wave_g-=.4*Math.sin(.34*a.time);a.ob_a=0;`,pixel_eqs_str:"a.rad_cycle=a.rad*a.rad*a.x*60*a.rad*Math.sin(a.q6);a.rote=a.rot+.1*Math.sin(a.rad_cycle*Math.sin(3.14*a.rad))+.01*Math.sin(a.q1)*Math.tan(a.rad);a.zoome=a.zoom+.1*Math.sin(3.14*a.rad*Math.sin(3.14*a.ang)*Math.sin(a.q2)-a.rote);a.zoom=a.zoome+.05*Math.sin(3.14*a.rad*a.q2)*Math.sin(a.q4);a.rot=a.rote*a.rad+div(div(a.ang,2)*Math.sin(a.q3)*Math.sin(3.14*a.ang*Math.sin(a.q3)*Math.sin(a.q4)),2)+.1*Math.sin(3.14*a.ang)*Math.sin(a.q1);",warp:"",comp:""}},function(o,l){o.exports={baseVals:{rating:0,decay:1,echo_zoom:1,wave_mode:1,wave_brighten:0,wave_a:1,wave_scale:.504218,wave_mystery:.24,warpanimspeed:9.8608,warpscale:16.2174,zoomexp:1.503744,zoom:1.0201,warp:.819544,wave_r:.5,wave_g:.5,wave_b:.5,ob_size:.005,ob_a:.2,ib_size:.005,ib_r:0,ib_g:0,ib_b:0,ib_a:.06,mv_a:0},shapes:[{baseVals:{enabled:0}},{baseVals:{enabled:0}},{baseVals:{enabled:0}},{baseVals:{enabled:0}}],waves:[{baseVals:{},init_eqs_str:"",frame_eqs_str:"",point_eqs_str:""},{baseVals:{},init_eqs_str:"",frame_eqs_str:"",point_eqs_str:""},{baseVals:{},init_eqs_str:"",frame_eqs_str:"",point_eqs_str:""},{baseVals:{},init_eqs_str:"",frame_eqs_str:"",point_eqs_str:""}],init_eqs_str:"a.xpos=0;a.yamptarg=0;a.ydir=0;a.zoom_exp=0;a.yaccel=0;a.xamptarg=0;a.xamp=0;a.xspeed=0;a.ypos=0;a.xaccel=0;a.att=0;a.vol=0;a.yamp=0;a.xdir=0;a.yspeed=0;",frame_eqs_str:`a.dx=-.0005;a.dy=-.0005;a.vol=div(a.bass+a.mid+a.att,6);a.xamptarg=.00001<Math.abs(equal(mod(a.frame,15),0))?Math.min(.5*a.vol*a.bass_att,.5):a.xamptarg;a.xamp+=.5*(a.xamptarg-a.xamp);a.xdir=.00001<Math.abs(above(Math.abs(a.xpos),a.xamp))?-sign(a.xpos):.00001<Math.abs(below(Math.abs(a.xspeed),.1))?2*above(a.xpos,0)-1:a.xdir;a.xaccel=a.xdir*a.xamp-a.xpos-.055*a.xspeed*below(Math.abs(a.xpos),a.xamp);a.xspeed=a.xspeed+a.xdir*a.xamp-a.xpos-.055*a.xspeed*below(Math.abs(a.xpos),a.xamp);
a.xpos+=.001*a.xspeed;a.wave_x=a.xpos+.5;a.yamptarg=.00001<Math.abs(equal(mod(a.frame,15),0))?Math.min(.3*a.vol*a.treb_att,.5):a.yamptarg;a.yamp+=.5*(a.yamptarg-a.yamp);a.ydir=.00001<Math.abs(above(Math.abs(a.ypos),a.yamp))?-sign(a.ypos):.00001<Math.abs(below(Math.abs(a.yspeed),.1))?2*above(a.ypos,0)-1:a.ydir;a.yaccel=a.ydir*a.yamp-a.ypos-.055*a.yspeed*below(Math.abs(a.ypos),a.yamp);a.yspeed=a.yspeed+a.ydir*a.yamp-a.ypos-.055*a.yspeed*below(Math.abs(a.ypos),a.yamp);a.ypos+=.001*a.yspeed;a.wave_y=
a.ypos+.5;a.wave_r+=.35*(.6*Math.sin(.98*a.time)+.4*Math.sin(1.047*a.time));a.wave_g+=.35*(.6*Math.sin(.835*a.time)+.4*Math.sin(1.081*a.time));a.wave_b+=.35*(.6*Math.sin(.814*a.time)+.4*Math.sin(1.011*a.time));a.rot+=.03*(.6*Math.sin(.381*a.time)+.4*Math.sin(.479*a.time));a.cx+=.41*(.6*Math.sin(.374*a.time)+.4*Math.sin(.294*a.time));a.cy+=.41*(.6*Math.sin(.393*a.time)+.4*Math.sin(.223*a.time));a.wave_mystery+=.15*(.6*Math.sin(.629*a.time)+.4*Math.sin(1.826*a.time));a.warp*=a.vol;a.zoom-=.02*a.zoom*
a.bass_att;a.zoom_exp=1.5*(.6*Math.sin(.381*a.time)+.4*Math.sin(.479*a.time));a.ob_a=1-2*a.vol;a.monitor=a.zoom_exp;`,pixel_eqs_str:"",pixel_eqs:"",warp:"",comp:""}},function(o,l){o.exports={baseVals:{rating:3,gammaadj:1.98,decay:.5,echo_zoom:1,echo_alpha:.5,echo_orient:3,wave_brighten:0,darken:1,wave_a:.002,wave_scale:.14,wave_smoothing:0,wave_mystery:-.84,modwavealphastart:.71,modwavealphaend:1.3,warpanimspeed:1.459,warpscale:2.007,zoom:.9999,warp:.01,sx:.9999,wave_g:0,wave_b:.6,ob_size:.015,ob_b:1,ib_size:.26,mv_x:64,mv_y:48,mv_l:0,mv_r:.5,mv_g:.5,mv_b:.5,mv_a:0,b1ed:0},shapes:[{baseVals:{enabled:1,sides:23,textured:1,rad:.72143,tex_ang:.62832,tex_zoom:.0402,g:1,b:1,a:.9,r2:.9,b2:1,a2:.3,border_a:0},init_eqs_str:"a.vis=0;a.q27=0;a.q22=0;",frame_eqs_str:"a.vis=div(bnot(mod(a.q27,8))*a.q22,2);a.vis=Math.min(a.vis,1);a.a=div(a.vis,2);a.a2=div(a.vis,2);a.tex_zoom=1;a.rad=.3*a.vis;"},{baseVals:{enabled:0}},{baseVals:{enabled:1,sides:5,additive:1,num_inst:4,x:.9,rad:.24732,tex_zoom:.40839,g:.6,a:.4,g2:0,b2:.6,border_a:0},init_eqs_str:"a.blue=0;a.ampl=0;a.steps=0;a.k1=0;a.q24=0;a.green=0;a.red=0;a.trig=0;a.q27=0;a.q28=0;",frame_eqs_str:`a.steps=a.q28+1;a.steps=4;a.ampl=.2;a.x=.5+a.ampl*Math.cos(6.28*(div(a.q27,a.steps)+div(a.instance,4)));a.y=.5+a.ampl*Math.sin(6.28*(div(a.q27,a.steps)+div(a.instance,4)));a.a=.4;a.a2=0;a.trig=a.q24*bnot(mod(a.q27,4));a.red=bnot(a.trig)*a.red+div(randint(100),100)*a.trig;a.green=bnot(a.trig)*a.green+div(randint(100),100)*a.trig;a.blue=bnot(a.trig)*a.blue+div(randint(100),100)*a.trig;a.k1=div(a.instance,a.num_inst);a.r=a.red*a.k1;a.g=a.green*(1-a.k1);a.b=4*a.blue*a.k1*(1-a.k1);
a.r=a.red;a.g=a.green;a.b=a.blue;a.r2=a.r;a.b2=a.b;a.g2=a.g;`},{baseVals:{enabled:0}}],waves:[{baseVals:{enabled:0}},{baseVals:{enabled:0}},{baseVals:{enabled:0}},{baseVals:{enabled:0}}],init_eqs_str:`a.px=0;a.index2=0;a.speed_=0;a.index=0;a.q12=0;a.q22=0;a.q21=0;a.q13=0;a.q15=0;a.q6=0;a.q1=0;a.dec_med=0;a.q5=0;a.py=0;a.movz=0;a.trel=0;a.q9=0;a.rott=0;a.vol__=0;a.is_beat=0;a.k1=0;a.q24=0;a.vx=0;a.dec_slow=0;a.q11=0;a.q10=0;a.vy=0;a.vz=0;a.q4=0;a.dir=0;a.q16=0;a.p2=0;a.avg=0;a.trig=0;a.beat=0;a.q17=0;a.vol=0;a.p1=0;a.peak=0;a.q2=0;a.q27=0;a.speed=0;a.q3=0;a.t0=0;a.vol_=0;a.q7=0;a.q28=0;a.q20=0;a.q8=0;a.ang0=0;a.speed_=1;a.vx=0;a.vy=0;a.vz=0;a.trel=0;a.p1=0;a.dir=0;a.ang0=
0;`,frame_eqs_str:`a.dec_med=pow(.9,div(30,a.fps));a.dec_slow=pow(.96,div(30,a.fps));a.beat=Math.max(Math.max(a.bass,a.mid),a.treb);a.avg=a.avg*a.dec_slow+a.beat*(1-a.dec_slow);a.is_beat=above(a.beat,.2+a.avg+a.peak)*above(a.time,a.t0+.5);a.t0=a.is_beat*a.time+(1-a.is_beat)*a.t0;a.peak=a.is_beat*a.beat+(1-a.is_beat)*a.peak*a.dec_med;a.index=mod(a.index+a.is_beat,16);a.index2=mod(a.index2+a.is_beat*bnot(a.index),8);a.q20=a.avg;a.q21=a.beat;a.q22=a.peak;a.q24=a.is_beat;a.vol=a.bass_att+a.mid_att+
a.treb_att;a.vol_=a.dec_med*a.vol_+(1-a.dec_med)*a.vol;a.vol__=a.dec_med*a.vol__+(1-a.dec_med)*a.vol_;a.q27=a.index+1;a.q28=a.index2+1;a.k1=a.is_beat*equal(mod(a.index,4),0);a.p1=a.k1*(a.p1+1)+(1-a.k1)*a.p1;a.p2=a.dec_med*a.p2+(1-a.dec_med)*a.p1;a.rott=div(3.1416*a.p2,4);a.q1=Math.cos(a.rott);a.q2=Math.sin(a.rott);a.q3=-a.q2;a.q4=a.q1;a.trig=a.q24*bnot(mod(a.index,8));a.vx=a.vx*bnot(a.trig)+a.trig*(div(randint(100),100)-.5);a.vy=a.vy*bnot(a.trig)+a.trig*(div(randint(100),100)-.5);a.vz=a.vz*bnot(a.trig)+
a.trig*(div(randint(100),100)-.5);a.q10=.2+a.vy*a.vy*4;a.q11=.5*Math.cos(div(a.time,9))+.3;a.speed=Math.min(a.vol_-a.vol__+.5,1);a.speed=Math.max(a.speed,-.5);a.speed_=bnot(a.trig)*a.speed_+a.trig*a.speed;a.movz+=div(1,a.fps)*a.speed_;a.q9=a.movz;a.q12=2*Math.min(a.q22,6);a.trig=bnot(mod(a.index,4))*a.q24;a.dir=bnot(a.trig)*a.dir+a.trig*(randint(10)-5);a.trel+=div(.2,a.fps)*a.dir;a.q5=Math.cos(a.trel);a.q6=Math.sin(a.trel+0*a.q27*mod(a.q28,2));a.q7=-a.q6;a.q8=a.q5;a.px=a.px*a.dec_med+(1-a.dec_med)*
a.vx;a.py=a.py*a.dec_med+(1-a.dec_med)*a.vy;a.q15=div(a.px,3);a.q16=div(a.py,3);a.q13=Math.min(2,1+Math.abs(8*a.px*a.py));a.ang0=a.ang0*a.dec_med+a.vz*(1-a.dec_med);a.q17=2*a.ang0;a.zoom=1.1;a.rot=.2*Math.sin(bnot(mod(a.q28,2))*a.q28);a.dx=0;a.monitor=a.q11;`,pixel_eqs_str:"",pixel_eqs:"",warp:` shader_body { 
  vec2 uv6_1;
  vec2 uv1_2;
  vec2 tmpvar_3;
  tmpvar_3 = (uv - 0.5);
  float x_4;
  x_4 = (abs(tmpvar_3.x) - abs(tmpvar_3.y));
  float tmpvar_5;
  tmpvar_5 = (18.0 * sqrt((x_4 * x_4)));
  uv1_2 = (tmpvar_3 - (clamp (
    ((sin(tmpvar_5) / cos(tmpvar_5)) * normalize(tmpvar_3))
  , vec2(-3.0, -3.0), vec2(3.0, 3.0)) / 60.0));
  uv6_1 = (0.4 * cos((
    (uv1_2 * 4.0)
   * q28)));
  vec4 tmpvar_6;
  tmpvar_6.w = 1.0;
  tmpvar_6.xyz = (((texture (sampler_main, 
    ((uv1_2 * (q11 + (q10 * tmpvar_5))) + 0.5)
  ).xyz + 
    (vec3((0.006 / sqrt(dot (uv6_1, uv6_1)))) * (1.0 + roam_cos).xyz)
  ) * 0.99) - 0.025);
  ret = tmpvar_6.xyz;
 }`,comp:`float xlat_mutableang2;
vec2 xlat_mutablers0;
vec2 xlat_mutableuv2;
 shader_body { 
  vec2 uv_1;
  vec3 ret1_3;
  uv_1 = ((uv - 0.5) * aspect.xy);
  vec2 tmpvar_4;
  tmpvar_4.x = q15;
  tmpvar_4.y = q16;
  uv_1 = (uv_1 + tmpvar_4);
  mat2 tmpvar_5;
  tmpvar_5[uint(0)] = _qb.xy;
  tmpvar_5[1u] = _qb.zw;
  uv_1 = (uv_1 * tmpvar_5);
  float tmpvar_6;
  float tmpvar_7;
  tmpvar_7 = (min (abs(
    (uv_1.y / uv_1.x)
  ), 1.0) / max (abs(
    (uv_1.y / uv_1.x)
  ), 1.0));
  float tmpvar_8;
  tmpvar_8 = (tmpvar_7 * tmpvar_7);
  tmpvar_8 = (((
    ((((
      ((((-0.01213232 * tmpvar_8) + 0.05368138) * tmpvar_8) - 0.1173503)
     * tmpvar_8) + 0.1938925) * tmpvar_8) - 0.3326756)
   * tmpvar_8) + 0.9999793) * tmpvar_7);
  tmpvar_8 = (tmpvar_8 + (float(
    (abs((uv_1.y / uv_1.x)) > 1.0)
  ) * (
    (tmpvar_8 * -2.0)
   + 1.570796)));
  tmpvar_6 = (tmpvar_8 * sign((uv_1.y / uv_1.x)));
  if ((abs(uv_1.x) > (1e-08 * abs(uv_1.y)))) {
    if ((uv_1.x < 0.0)) {
      if ((uv_1.y >= 0.0)) {
        tmpvar_6 += 3.141593;
      } else {
        tmpvar_6 = (tmpvar_6 - 3.141593);
      };
    };
  } else {
    tmpvar_6 = (sign(uv_1.y) * 1.570796);
  };
  xlat_mutablers0.x = ((tmpvar_6 / 3.1416) * 2.0);
  xlat_mutablers0.y = (0.03 / sqrt(dot (uv_1, uv_1)));
  ret1_3 = vec3(0.0, 0.0, 0.0);
  for (int n_2 = 0; n_2 <= 10; n_2++) {
    float tmpvar_9;
    tmpvar_9 = fract((-(q9) + (
      float(n_2)
     / 10.0)));
    xlat_mutableang2 = (((q1 * 3.14) * float(n_2)) / 10.0);
    float tmpvar_10;
    tmpvar_10 = cos(xlat_mutableang2);
    float tmpvar_11;
    tmpvar_11 = sin(xlat_mutableang2);
    mat2 tmpvar_12;
    tmpvar_12[uint(0)].x = tmpvar_10;
    tmpvar_12[uint(0)].y = -(tmpvar_11);
    tmpvar_12[1u].x = tmpvar_11;
    tmpvar_12[1u].y = tmpvar_10;
    xlat_mutableuv2 = (uv_1 * ((q13 * tmpvar_9) * tmpvar_12));
    ret1_3 = max (ret1_3, (texture (sampler_main, (xlat_mutableuv2 + 0.5)).xyz * (1.0 - tmpvar_9)));
  };
  vec4 tmpvar_13;
  tmpvar_13.w = 1.0;
  tmpvar_13.xyz = ((ret1_3 * 2.0) + ((
    (bass_att * xlat_mutablers0.y)
   * texture (sampler_main, 
    ((uv_1 * q12) + vec2(0.5, 0.0))
  ).yzx) * clamp (
    (1.0 - (ret1_3 * 32.0))
  , 0.0, 1.0)));
  ret = tmpvar_13.xyz;
 }`}},function(o,l){o.exports={baseVals:{rating:5,gammaadj:1,decay:.965,echo_zoom:1.483827,echo_alpha:.5,echo_orient:3,wave_mode:7,additivewave:1,wave_brighten:0,wrap:0,darken_center:1,darken:1,wave_a:.001,wave_scale:1.285751,wave_smoothing:.63,modwavealphastart:.71,modwavealphaend:1.3,warpanimspeed:.01,warpscale:1.470245,zoomexp:4.778023,zoom:.998162,warp:.01,sx:1.001828,wave_r:.65,wave_g:.65,wave_b:.65,ob_size:.005,ob_r:1,ob_g:.5,ob_b:.5,ob_a:1,ib_size:.5,ib_r:0,ib_g:0,ib_b:0,ib_a:1,mv_x:64,mv_y:4.800001,mv_dx:.4,mv_l:1,mv_r:0,mv_g:.5,mv_a:.1},shapes:[{baseVals:{enabled:1,sides:3,additive:1,thickoutline:1,textured:1,x:1,y:.59,rad:.559231,ang:3.39292,tex_zoom:100,r:0,g:1,b:1,g2:0,border_r:0,border_g:0,border_b:0,border_a:1},init_eqs_str:"",frame_eqs_str:"a.x=.1*Math.sin(div(a.time,10))+.5+.1*a.treb_att;"},{baseVals:{enabled:0}},{baseVals:{enabled:1,sides:6,textured:1,x:.3,y:.7,rad:1.089252,ang:.816814,tex_ang:3.141592,tex_zoom:.504215,g:1,b:1,r2:1,b2:1,border_a:0},init_eqs_str:"",frame_eqs_str:""},{baseVals:{enabled:1,sides:3,textured:1,rad:.284278,ang:3.141593,tex_ang:4.900885,tex_zoom:2.987755,g:1,b:1,r2:.95,b2:1,a2:1,border_r:0,border_g:0,border_b:0,border_a:1},init_eqs_str:'a["var"]=0;',frame_eqs_str:'a.ang=div(a.time,10);a.tex_zoom=3.4+.03*a.bass;a["var"]=above(a.bass_att,.7);a.a=a["var"];a.a2=a["var"];a.border_a=a["var"];'}],waves:[{baseVals:{enabled:1,usedots:1,thick:1,additive:1,r:0,a:.06},init_eqs_str:"a.px=0;a.xoffset2=0;a.py=0;a.xoffset1=0;a.pheight=0;a.pphase=0;a.yspout=0;a.pphase2=0;a.xspout=0;a.lrorient=0;a.yheight=0;",frame_eqs_str:"",point_eqs_str:`a.xspout=.5;a.yspout=-.01;a.pphase=9999*a.sample*a.sample*.0001;a.pphase2=.1+.01*mod(3349*a.sample*a.sample,100);a.pheight=.002*mod(9893*a.sample,100);a.yheight=.01*mod(1231*a.sample*a.sample,100);a.r=.01*mod(5454*a.sample,100)*Math.abs(Math.sin(.25*a.time));a.g=.01*mod(9954*a.sample,100);a.xoffset1=Math.cos(a.time*a.pphase2+a.pphase)*a.pheight;a.xoffset2=-1*Math.cos(a.time*a.pphase2+a.pphase)*a.pheight;a.lrorient=.00001<Math.abs(below(Math.cos(a.time*a.pphase2+a.pphase),Math.cos((a.time-
.1)*a.pphase2+a.pphase)))?0:1;a.px=.00001<Math.abs(equal(a.lrorient,0))?a.xspout-a.pheight+a.xoffset1:a.xspout+a.pheight-a.xoffset2;a.py=a.yspout+Math.abs(Math.sin(a.time*a.pphase2+a.pphase))*a.yheight;a.x=a.px;a.y=a.py;`},{baseVals:{enabled:1,usedots:1,thick:1,additive:1,r:0},init_eqs_str:"a.pphase=0;a.pheight=0;a.xspout=0;a.yspout=0;a.px=0;a.py=0;",frame_eqs_str:"",point_eqs_str:`a.pphase=5671*a.sample*Math.cos(.0001*a.time);a.pheight=.005*mod(7654*a.sample,100)*Math.sin(.2*a.time);a.xspout=.00001<Math.abs(below(Math.abs(Math.sin(.2*a.time)),.005))?.3+.01*randint(40):a.xspout;a.yspout=.00001<Math.abs(below(Math.abs(Math.sin(.2*a.time)),.005))?.3+.01*randint(40):a.yspout;a.px=a.xspout+Math.cos(a.time+a.pphase)*a.pheight;a.py=a.yspout+Math.sin(a.time+a.pphase)*a.pheight;a.x=a.px;a.y=a.py;a.a=Math.abs(.3*Math.sin(.2*a.time)+.1*a.treb_att);a.r=2*a.treb;
`},{baseVals:{enabled:1,thick:1,additive:1,b:0},init_eqs_str:"a.n=0;a.yq=0;a.xp=0;a.yr=0;a.xs=0;a.yp=0;a.xr=0;a.q1=0;a.xq=0;a.flip=0;a.ca=0;a.ys=0;a.sa=0;a.zq=0;a.phs=0;a.ang=0;a.tm=0;a.zp=0;a.zr=0;",frame_eqs_str:"",point_eqs_str:`a.n=6.283*a.sample;a.phs=.2*-a.sample;a.tm=a.q1+4*a.phs;a.flip+=1;a.flip*=below(a.flip,2);a.xp=0;a.yp=(.1*a.flip-.05)*a.sample;a.zp=0;a.ang=20*a.tm+.4*Math.sin(76*a.tm+4*a.time);a.sa=Math.sin(a.ang);a.ca=Math.cos(a.ang);a.xr=a.xp*a.sa+a.yp*a.ca;a.yr=a.xp*a.ca-a.yp*a.sa;a.zr=a.zp;a.xp=a.xr;a.yp=a.yr+.05+.2*(.5*Math.sin(a.tm)+.5)+.05;a.zp=a.zr;a.ang=Math.sin(2*a.tm);a.xq=a.xp;a.sa=Math.sin(a.ang);a.ca=Math.cos(a.ang);a.yq=a.yp*a.sa+a.zp*a.ca;a.zq=a.yp*a.ca-a.zp*a.sa;a.ang=8*a.tm;
a.sa=Math.sin(a.ang);a.ca=Math.cos(a.ang);a.xp=a.xq*a.sa+a.yq*a.ca;a.yp=a.xq*a.ca-a.yq*a.sa;a.zp=a.zq;a.zp-=.3;a.ang=3.14+2.5*Math.sin(2*a.tm-.5);a.xq=a.xp;a.sa=Math.sin(a.ang);a.ca=Math.cos(a.ang);a.yq=a.yp*a.sa+a.zp*a.ca;a.zq=a.yp*a.ca-a.zp*a.sa;a.ang=-1+Math.cos(3*a.tm+.5);a.xp=a.xq*a.sa+a.yq*a.ca;a.yp=a.xq*a.ca-a.yq*a.sa;a.zp=a.zq;a.zp-=.35;a.ang=1.75*Math.cos(1*a.tm)-1.05;a.sa=Math.sin(a.ang);a.ca=Math.cos(a.ang);a.xq=a.xp*a.sa+a.zp*a.ca;a.yq=a.yp;a.zq=a.xp*a.ca-a.zp*a.sa;a.ang=Math.cos(a.tm);
a.xp=a.xq;a.sa=Math.sin(a.ang);a.ca=Math.cos(a.ang);a.yp=a.yq*a.ca-a.zq*a.sa;a.zp=a.yq*a.sa+a.zq*a.ca;a.zp+=1.5;a.xs=div(a.xp,a.zp);a.ys=div(a.yp,a.zp);a.x=a.xs+.5;a.y=1.3*a.ys+.5;a.a=1-a.sample;`},{baseVals:{enabled:0}}],init_eqs_str:"a.vol=0;a.mtime=0;a.q1=0;",frame_eqs_str:"a.decay=.999;a.wrap=Math.sin(10*a.time);a.mv_dx=a.bass;a.ib_a=.005;a.vol=.25*(a.bass+a.mid+a.treb);a.vol*=a.vol;a.mtime+=.01*a.vol*div(55,a.fps);a.q1=.5*a.time;",pixel_eqs_str:"a.zoom=1.005-div(a.rad,100);a.rot=div(a.rad,600);a.sy=-1;",warp:"",comp:""}},function(o,l){o.exports={baseVals:{rating:5,gammaadj:1,decay:1,echo_zoom:1.006596,echo_alpha:.5,additivewave:1,wave_thick:1,wave_brighten:0,wrap:0,wave_a:4.099998,wave_scale:.01,wave_smoothing:.63,wave_mystery:-.4,modwavealphastart:.71,modwavealphaend:1.3,warpscale:1.331,zoom:.999513,warp:.01,wave_r:.65,wave_g:.65,wave_b:.65,ob_size:.005,ob_r:.01,ob_a:1,ib_size:.26,mv_x:64,mv_y:48,mv_l:.5,mv_r:.35,mv_g:.35,mv_b:.35,mv_a:0},shapes:[{baseVals:{enabled:0}},{baseVals:{enabled:0}},{baseVals:{enabled:0}},{baseVals:{enabled:0}}],waves:[{baseVals:{},init_eqs_str:"",frame_eqs_str:"",point_eqs_str:""},{baseVals:{},init_eqs_str:"",frame_eqs_str:"",point_eqs_str:""},{baseVals:{},init_eqs_str:"",frame_eqs_str:"",point_eqs_str:""},{baseVals:{},init_eqs_str:"",frame_eqs_str:"",point_eqs_str:""}],init_eqs_str:"a.q8=0;a.oldq8=0;",frame_eqs_str:"a.ob_r=.5+.5*Math.sin(2*a.time);a.ob_g=.5+.5*Math.sin(1.23*a.time);a.ob_b=.5+.5*Math.sin(1.321*a.time);a.wave_a=0;a.q8=a.oldq8+.003*div(pow(1.2*a.bass+.4*a.bass_att+.1*a.treb+.1*a.treb_att+.1*a.mid+.1*a.mid_att,6),a.fps);a.oldq8=a.q8;a.warp=0;",pixel_eqs_str:"a.rot=.1*(a.rad+Math.cos(5+5*Math.sin(1.211*a.q8)*a.x-.5)-Math.sin((5+5*Math.sin(.973*a.q8))*a.y-.5));a.dx=.005*(Math.cos(5+5*Math.sin(1.311*a.q8)*a.x-.5)-Math.sin((5+5*Math.sin(.9431*a.q8))*a.y-.5));a.dy=.005*(Math.cos(5+5*Math.sin(1.021*a.q8)*a.x-.5)-Math.sin((5+5*Math.sin(.987*a.q8))*a.y-.5));a.zoom=1-.005*(a.rad+Math.cos(5+5*Math.sin(.943*a.q8)*a.x-.5)-Math.sin((5+5*Math.sin(1.0961*a.q8))*a.y-.5));",warp:"",comp:""}},function(o,l){o.exports={baseVals:{rating:0,gammaadj:1,decay:1,echo_zoom:1,wave_mode:7,additivewave:1,wave_thick:1,wave_brighten:0,darken:1,wave_a:100,wave_scale:.438649,wave_smoothing:.5,modwavealphastart:.5,modwavealphaend:1,zoomexp:.999996,fshader:1,dx:1e-5,dy:1e-5,warp:.01,wave_y:.976,ob_size:.005,ob_r:.4,ob_g:.3,ob_a:1,ib_r:1,ib_g:.6,ib_b:0,ib_a:1,mv_x:24.959999,mv_y:19.199999,mv_l:.85,mv_r:.4999,mv_g:.4999,mv_b:.4999,mv_a:0},shapes:[{baseVals:{enabled:0}},{baseVals:{enabled:0}},{baseVals:{enabled:0}},{baseVals:{enabled:0}}],waves:[{baseVals:{},init_eqs_str:"",frame_eqs_str:"",point_eqs_str:""},{baseVals:{},init_eqs_str:"",frame_eqs_str:"",point_eqs_str:""},{baseVals:{},init_eqs_str:"",frame_eqs_str:"",point_eqs_str:""},{baseVals:{},init_eqs_str:"",frame_eqs_str:"",point_eqs_str:""}],init_eqs_str:"a.q1=0;a.thresh=0;a.dx_r=0;a.dy_r=0;",frame_eqs_str:`a.warp=0;a.wave_r=.5+.5*Math.sin(.894*a.time);a.wave_g=.5+.5*Math.sin(1.14*a.time);a.wave_b=.5+.5*Math.sin(3-a.bass_att);a.thresh=2*above(a.bass_att,a.thresh)+(1-above(a.bass_att,a.thresh))*((a.thresh-1.3)*(.9+.1*Math.sin(2.8*a.time))+1.3);a.dx_r=.004*equal(a.thresh,2)*Math.sin(5*a.time)+(1-equal(a.thresh,2))*a.dx_r;a.dy_r=.004*equal(a.thresh,2)*Math.sin(6*a.time)+(1-equal(a.thresh,2))*a.dy_r;a.q1=a.thresh;a.dx=1.1*a.dx_r;a.dy=1.1*a.dy_r;a.dx+=.00001<Math.abs(above(a.bass,1.35))?
31*a.dx_r:0;a.dy=.00001<Math.abs(above(a.bass,1.3))?0:a.dy;a.decay=.995+.004*Math.sin(.369*a.time)+.001*Math.sin(1.54*a.time);`,pixel_eqs_str:"a.zoom-=.01*a.q1*a.rad;a.zoomexp=1+.2*(a.rad-.2*a.q1);a.sx-=Math.cos(a.y*(6.28+3.14*Math.sin(a.time)))*(.009+.003*Math.sin(2.18*a.time))*Math.sin(.3*a.time);a.rot=.001*Math.sin(3.14*a.x)*Math.sin(.67*a.time);",warp:"",comp:""}},function(o,l){o.exports={baseVals:{rating:5,gammaadj:1,decay:.94,echo_zoom:.9998,echo_alpha:.4999,echo_orient:3,wave_mode:1,additivewave:1,wave_dots:1,wave_brighten:0,wave_a:1.254574,wave_scale:.45029,wave_smoothing:0,zoomexp:1.008151,zoom:.659411,warp:.01,wave_r:.5,wave_g:.5,wave_b:.5,ob_size:.005,ob_r:1,ob_a:1,ib_size:.005,ib_r:0,ib_g:0,ib_b:0,ib_a:.9,mv_x:64,mv_y:48,mv_l:0,mv_r:0,mv_g:.7,mv_a:0},shapes:[{baseVals:{enabled:0}},{baseVals:{enabled:0}},{baseVals:{enabled:0}},{baseVals:{enabled:0}}],waves:[{baseVals:{enabled:0}},{baseVals:{enabled:0}},{baseVals:{enabled:0}},{baseVals:{enabled:0}}],init_eqs_str:"a.bblock=0;a.grid=0;a.q6=0;a.q1=0;a.q5=0;a.tth=0;a.tblock=0;a.bpulse=0;a.pulse=0;a.mblock=0;a.q4=0;a.mpulse=0;a.mod_state=0;a.bth=0;a.mres=0;a.tpulse=0;a.tres=0;a.le=0;a.ccl=0;a.q2=0;a.bres=0;a.q3=0;a.mth=0;a.q7=0;a.q8=0;",frame_eqs_str:`a.warp=0;a.le=1.5+2*Math.sin(a.bass_att);a.bpulse=band(above(a.le,a.bth),above(a.le-a.bth,a.bblock));a.bblock=a.le-a.bth;a.bth=.00001<Math.abs(above(a.le,a.bth))?a.le+div(114,a.le+10)-7.407:a.bth+div(.07*a.bth,a.bth-12)+.1*below(a.bth,2.7)*(2.7-a.bth);a.bth=.00001<Math.abs(above(a.bth,6))?6:a.bth;a.bres=a.bpulse*Math.sin(a.pulse+.5*a.le)+bnot(a.bpulse)*a.bres;a.le=1.5+2*Math.sin(a.treb_att);a.tpulse=band(above(a.le,a.tth),above(a.le-a.tth,a.tblock));a.tblock=a.le-a.tth;a.tth=
.00001<Math.abs(above(a.le,a.tth))?a.le+div(114,a.le+10)-7.407:a.tth+div(.07*a.tth,a.tth-12)+.1*below(a.tth,2.7)*(2.7-a.tth);a.tth=.00001<Math.abs(above(a.tth,6))?6:a.tth;a.tres=a.tpulse*Math.sin(a.pulse+.5*a.le)+bnot(a.tpulse)*a.tres;a.le=1.5+2*Math.sin(a.mid_att);a.mpulse=band(above(a.le,a.mth),above(a.le-a.mth,a.mblock));a.mblock=a.le-a.mth;a.mth=.00001<Math.abs(above(a.le,a.mth))?a.le+div(114,a.le+10)-7.407:a.mth+div(.07*a.mth,a.mth-12)+.1*below(a.mth,2.7)*(2.7-a.mth);a.mth=.00001<Math.abs(above(a.mth,
6))?6:a.mth;a.mres=a.mpulse*Math.sin(a.pulse+.5*a.le)+bnot(a.mpulse)*a.mres;a.pulse=.00001<Math.abs(above(Math.abs(a.pulse),3.14))?-3.14:a.pulse+.003*(a.bth+a.mth+a.tth);a.q1=a.bres;a.q2=a.tres;a.q3=a.mres;a.q4=Math.sin(a.pulse);a.mod_state=(above(a.q1,0)+above(a.q2,0)+above(a.q3,0))*(1+above(a.q4,0));a.ccl=a.ccl+a.tpulse+a.mpulse-a.bpulse;a.q5=Math.cos(a.pulse*(.5+.1*a.mod_state));a.q6=Math.sin(a.pulse*(.5+pow(.25,a.mod_state)));a.q7=a.mod_state;a.q8=a.ccl;a.ob_r=.5+.5*Math.cos(a.q1+a.q7);a.ob_g=
.5+.5*Math.cos(3.14*a.q2+a.q7);a.ob_b=.5+.5*Math.cos(2*a.q3+Math.sin(.0816*a.time));a.ib_size=.025+.02*a.q2;a.ob_size=.03+.02*a.q3-.002*a.q7;a.wave_r=.5+.5*Math.sin(a.q1*a.q7+2.183*a.time);a.wave_g=.5+.5*Math.sin(3*a.q2+1.211*a.time);a.wave_b=.5+.5*Math.sin(a.q3+1.541*a.time);a.ob_a=.8+.2*a.q2;a.zoom+=.01*a.q4;`,pixel_eqs_str:"a.grid=mod(pow(2*Math.sin(a.rad*a.q6*a.q2+a.x*a.y*a.q6*a.q3),1+mod(a.q7,5)),2);a.rot=bnot(a.grid)+a.grid*a.q4;a.sx+=.003*Math.sin((a.q2+.5)*a.x);a.sy+=.003*Math.sin((a.q1+3.4)*a.y);a.zoom+=.11*Math.cos(3.14*a.rad)*a.q4;",warp:"",comp:""}},function(o,l){o.exports={baseVals:{rating:0,gammaadj:1,decay:.96,echo_zoom:2.216266,echo_alpha:.78,wave_mode:5,additivewave:1,wave_dots:1,wave_brighten:0,brighten:1,wave_a:1.254574,wave_scale:.931011,wave_smoothing:0,zoomexp:1.0081,fshader:.4,zoom:.820774,cx:.4999,warp:.01,sx:.999998,wave_r:.5,wave_g:.5,wave_b:.5,ob_size:.005,ob_r:1,ob_a:1,ib_size:.005,ib_r:0,ib_g:0,ib_b:0,ib_a:.9,mv_x:0,mv_y:0,mv_l:.85,mv_r:.4999,mv_g:.4999,mv_b:.4999,mv_a:0},shapes:[{baseVals:{enabled:0}},{baseVals:{enabled:0}},{baseVals:{enabled:0}},{baseVals:{enabled:0}}],waves:[{baseVals:{},init_eqs_str:"",frame_eqs_str:"",point_eqs_str:""},{baseVals:{},init_eqs_str:"",frame_eqs_str:"",point_eqs_str:""},{baseVals:{},init_eqs_str:"",frame_eqs_str:"",point_eqs_str:""},{baseVals:{},init_eqs_str:"",frame_eqs_str:"",point_eqs_str:""}],init_eqs_str:"a.bblock=0;a.grid=0;a.q6=0;a.snee=0;a.q1=0;a.q5=0;a.tth=0;a.tblock=0;a.bpulse=0;a.pulse=0;a.mblock=0;a.q4=0;a.snur=0;a.mpulse=0;a.mod_state=0;a.bth=0;a.mres=0;a.tpulse=0;a.tres=0;a.le=0;a.ccl=0;a.q2=0;a.bres=0;a.q3=0;a.mth=0;a.q7=0;a.q8=0;",frame_eqs_str:`a.warp=0;a.le=1.5+2*Math.sin(a.bass_att);a.bpulse=band(above(a.le,a.bth),above(a.le-a.bth,a.bblock));a.bblock=a.le-a.bth;a.bth=.00001<Math.abs(above(a.le,a.bth))?a.le+div(114,a.le+10)-7.407:a.bth+div(.07*a.bth,a.bth-12)+.1*below(a.bth,2.7)*(2.7-a.bth);a.bth=.00001<Math.abs(above(a.bth,6))?6:a.bth;a.bres=a.bpulse*Math.sin(a.pulse+.5*a.le)+bnot(a.bpulse)*a.bres;a.le=1.5+2*Math.sin(a.treb_att);a.tpulse=band(above(a.le,a.tth),above(a.le-a.tth,a.tblock));a.tblock=a.le-a.tth;a.tth=
.00001<Math.abs(above(a.le,a.tth))?a.le+div(114,a.le+10)-7.407:a.tth+div(.07*a.tth,a.tth-12)+.1*below(a.tth,2.7)*(2.7-a.tth);a.tth=.00001<Math.abs(above(a.tth,6))?6:a.tth;a.tres=a.tpulse*Math.sin(a.pulse+.5*a.le)+bnot(a.tpulse)*a.tres;a.le=1.5+2*Math.sin(a.mid_att);a.mpulse=band(above(a.le,a.mth),above(a.le-a.mth,a.mblock));a.mblock=a.le-a.mth;a.mth=.00001<Math.abs(above(a.le,a.mth))?a.le+div(114,a.le+10)-7.407:a.mth+div(.07*a.mth,a.mth-12)+.1*below(a.mth,2.7)*(2.7-a.mth);a.mth=.00001<Math.abs(above(a.mth,
6))?6:a.mth;a.mres=a.mpulse*Math.sin(a.pulse+.5*a.le)+bnot(a.mpulse)*a.mres;a.pulse=.00001<Math.abs(above(Math.abs(a.pulse),3.14))?-3.14:a.pulse+.003*(a.bth+a.mth+a.tth);a.q1=a.bres;a.q2=a.tres;a.q3=a.mres;a.q4=Math.sin(a.pulse);a.mod_state=(above(a.q1,0)+above(a.q2,0)+above(a.q3,0))*(1+above(a.q4,0));a.ccl=a.ccl+a.tpulse+a.mpulse-a.bpulse;a.q5=Math.cos(a.pulse*(.5+.1*a.mod_state));a.q6=Math.sin(a.pulse*(.5+pow(.25,a.mod_state)));a.q7=a.mod_state;a.q8=a.ccl;a.ob_r=.5+.5*Math.cos(a.q1+a.q7);a.ob_g=
.5+.5*Math.cos(3.14*a.q2+a.q7);a.ob_b=.5+.5*Math.cos(2*a.q3+Math.sin(.0816*a.time));a.ib_size=.025+.02*a.q2;a.ob_size=.03+.02*a.q3-.002*a.q7;a.wave_r=.5+.5*Math.sin(a.q1*a.q7+2.183*a.time);a.wave_g=.5+.5*Math.sin(3*a.q2+1.211*a.time);a.wave_b=.5+.5*Math.sin(a.q3+1.541*a.time);a.ob_a=.8+.2*a.q2;a.rot=1;a.cx+=.05*a.q4;a.cy+=.05*a.q5;a.zoom=.95+.05*a.q6;`,pixel_eqs_str:`a.snee=bnot(above(Math.sin(a.ang)-a.x,.5)*above(a.q2,0)+above(a.y-Math.cos(a.ang),.5)*above(a.q1,0));a.snur=bnot(below(a.x,.5)*above(a.q3,0)+below(a.y,.5)*below(a.q7,4));a.grid=Math.sin(sigmoid(Math.sin(6.28*a.y*a.q2),Math.sin(6.28*a.x*a.q6))*(10+a.q7));a.zoom=a.zoom+.02*Math.cos(2*a.rad+a.rad*a.q2)*sign(a.snee)-.04*Math.sin(3.14*a.rad*a.q3-3.14*Math.cos(3.14*a.rad*a.snur-3.14*a.q6));a.sx=.00001<Math.abs(below(a.x,.5)*below(a.y,.5))?a.sx+.2*a.q4*a.snur:1+.1*a.q2*a.grid;a.sy=
.00001<Math.abs(below(a.x,.5)*below(a.y,.5))?a.sy+.2*a.q5*a.snee:1+.1*a.q2*a.grid;`,warp:"",comp:""}},function(o,l){o.exports={baseVals:{rating:5,gammaadj:4.990001,decay:1,echo_zoom:10.784553,wave_mode:7,additivewave:1,wave_dots:1,wave_brighten:0,wrap:0,wave_a:.997938,wave_scale:1.990516,wave_smoothing:0,wave_mystery:-1,modwavealphastart:.5,modwavealphaend:1,warpscale:.999998,zoomexp:.999985,fshader:1,zoom:.9999,dy:1e-5,warp:.01,wave_r:.400001,wave_g:.4,wave_y:1,ob_size:0,ob_r:.300001,ob_g:1,ob_b:.3,ob_a:.100001,ib_size:.005,ib_r:0,ib_g:0,ib_b:0,ib_a:.5,mv_x:8.960042,mv_y:12.960033,mv_dx:-.26,mv_dy:.44,mv_l:5,mv_a:0},shapes:[{baseVals:{enabled:0}},{baseVals:{enabled:0}},{baseVals:{enabled:0}},{baseVals:{enabled:0}}],waves:[{baseVals:{},init_eqs_str:"",frame_eqs_str:"",point_eqs_str:""},{baseVals:{},init_eqs_str:"",frame_eqs_str:"",point_eqs_str:""},{baseVals:{},init_eqs_str:"",frame_eqs_str:"",point_eqs_str:""},{baseVals:{},init_eqs_str:"",frame_eqs_str:"",point_eqs_str:""}],init_eqs_str:"a.maxdbass=0;a.f=0;a.ttan1=0;a.avgbass=0;a.dbass=0;a.q1=0;a.prevavgbass=0;a.amt=0;a.cheat=0;a.totx=0;a.flip=0;a.lastbeat=0;a.ttan2=0;a.bpm=0;a.pctg=0;a.prevrot=0;a.interval=0;a.q4=0;a.pbass=0;a.toty=0;a.beat=0;a.vol=0;a.q2=0;a.dist=0;a.lastflip=0;a.prevvol=0;a.q3=0;a.isleftytonosy=0;a.sure=0;a.flip=-1;",frame_eqs_str:`a.warp=0;a.decay=1;a.vol=div(.75*(a.bass_att+a.mid_att+a.treb_att),3)+.25*a.prevvol;a.prevavgbass=a.avgbass;a.avgbass+=.01*(a.bass-a.avgbass);a.q4=Math.max(1.001*a.avgbass-.999*a.prevavgbass,0);a.q4=Math.min(a.q4,.006);a.sure=.00001<Math.abs(equal(a.sure,0))?.6:a.sure;a.interval=.00001<Math.abs(equal(a.interval,0))?40:a.interval;a.lastbeat=.00001<Math.abs(equal(a.lastbeat,0))?a.frame-a.fps:a.lastbeat;a.dbass=div(a.bass-a.pbass,a.fps);a.beat=above(a.dbass,.6*a.maxdbass)*above(a.frame-
a.lastbeat,div(a.fps,3));a.sure=.00001<Math.abs(a.beat*below(Math.abs(a.frame-(a.interval+a.lastbeat)),div(a.fps,5)))?Math.min(.095+a.sure,1):a.beat*(a.sure-.095)+(1-a.beat)*a.sure*.9996;a.sure=Math.max(.5,a.sure);a.cheat=.00001<Math.abs(above(a.frame,a.lastbeat+a.interval+Math.floor(div(a.fps,10)))*above(a.sure,.91))?1:a.cheat;a.beat=.00001<Math.abs(a.cheat)?1:a.beat;a.sure=.00001<Math.abs(a.cheat)?.95*a.sure:a.sure;a.maxdbass=Math.max(.999*a.maxdbass,a.dbass);a.maxdbass=Math.max(.012,a.maxdbass);
a.maxdbass=Math.min(.02,a.maxdbass);a.interval=.00001<Math.abs(a.beat)?a.frame-a.lastbeat:a.interval;a.lastbeat=.00001<Math.abs(a.beat)?a.frame-a.cheat*Math.floor(div(a.fps,10)):a.lastbeat;a.cheat=0;a.pbass=a.bass;a.lastflip=.00001<Math.abs(above(div(a.bass,a.avgbass),2)*above(a.frame-a.lastflip,100)*a.beat)?a.frame:a.lastflip;a.flip=.00001<Math.abs(equal(a.frame,a.lastflip))?Math.abs(a.flip)-1:a.flip;a.wave_mystery=a.flip;a.ob_size=div(.08*below(a.frame-a.lastbeat,div(a.fps,8))*(a.frame-a.lastbeat),
a.fps);a.f=Math.abs(Math.cos(div(a.time,8)+.54+Math.sin(div(a.time,3)+1.075)));a.ob_r=1*a.f+(1-a.f);a.ob_g=.3*a.f+(1-a.f);a.ob_b=.3*a.f+.3*(1-a.f);a.f=div(a.frame-a.lastbeat,a.interval);a.f*=above(a.f,.8)*below(a.f,1);a.f=Math.max(0,a.f);a.f=Math.min(a.f,1);a.wave_g=.4+.6*a.f;a.wave_b=.4+.6*(1-a.f);a.q1=div(3.1416*(a.wave_mystery+1),2);a.q2=.25*Math.cos(a.time+Math.abs(2*Math.sin(2*a.time+2.311)*(a.vol-a.amt))*Math.sin(7.45*a.time+.876));a.q3=-a.q2;a.amt+=.05*(a.vol-a.amt);a.prevvol=a.vol;a.bpm+=
.01*(div(60*a.fps,a.interval)-a.bpm);a.monitor=0*a.pctg+1*a.bpm;`,pixel_eqs_str:"a.x-=.5;a.y=-(a.y-.5);a.ttan1=Math.tan(a.q1+1.5708)*(a.x-a.q3)-a.y+a.q2;a.ttan2=Math.tan(a.q1+1.5708);a.isleftytonosy=above(a.ttan1*sign(3.1416-a.q1),0);a.dist=div(Math.abs(a.ttan1),sqrt(a.ttan2*a.ttan2+1));a.totx=div(.5*Math.cos(a.q1)*sign(a.isleftytonosy-.5)*sqr(a.dist),.5-a.q2);a.toty=div(-.5*Math.sin(a.q1)*sign(a.isleftytonosy-.5)*sqr(a.dist),.5-a.q2);a.dx+=a.totx;a.dy+=a.toty;a.prevrot=a.q1;a.zoom=1-div(25*a.q4*sqrt(pow(.5-a.dist,3)),Math.abs(.5-a.q2));",warp:"",comp:""}},function(o,l){o.exports={baseVals:{rating:0,gammaadj:1,decay:.997,echo_zoom:.996629,echo_orient:1,wave_thick:1,wave_brighten:0,darken:1,wave_a:.001185,wave_scale:.01,wave_smoothing:.27,wave_mystery:-.38,modwavealphastart:.71,modwavealphaend:1.3,warpscale:1.331,zoom:.999514,warp:.01,ob_size:0,ob_r:.01,ob_a:1,ib_size:0,ib_r:1,ib_g:1,ib_b:1,ib_a:1,mv_x:64,mv_y:48,mv_l:.85,mv_r:.4999,mv_g:.4999,mv_b:.4999,mv_a:0},shapes:[{baseVals:{enabled:1,sides:3,rad:.34,ang:.53,r:.56,g:.36,r2:.9,a2:.5,border_a:0},init_eqs_str:"a.angle=0;a.bassspin=0;a.q1=0;a.q2=0;a.bassspin=0;a.angle=0;",frame_eqs_str:"a.ang=a.angle;a.bassspin=.00001<Math.abs(above(.05*a.bass,a.bassspin))?a.bassspin+.001:a.bassspin-.001;a.bassspin*=above(a.bassspin,0);a.angle+=a.bassspin;a.r=.3*a.bass;a.g=.3*a.treb;a.b=.3*a.mid;a.r2=.8+.2*Math.sin(1.2*a.time);a.g2=.8+.2*Math.sin(.9777*a.time);a.b2=.8+.2*Math.sin(.7005*a.time);a.border_a=1*above(a.bass+a.treb+a.mid,5);a.x=.5+a.q1;a.y=.5+a.q2;"},{baseVals:{enabled:1,sides:100,additive:1,textured:1,rad:.108073,g:1,b:1,r2:1,b2:1,a2:1,border_a:0},init_eqs_str:"a.bassspin=0;a.xpos=0;a.ypos=0;a.q1=0;a.q2=0;a.bassspin=0;a.xpos=.25;a.ypos=.25;",frame_eqs_str:"a.bassspin=.00001<Math.abs(above(.05*a.bass,a.bassspin))?a.bassspin+.001:a.bassspin-.001;a.bassspin*=above(a.bassspin,0);a.xpos+=a.bassspin;a.ypos+=a.bassspin;a.x=.5+a.q1+.13*Math.sin(a.xpos);a.y=.5+a.q2+.18*Math.cos(a.ypos);"},{baseVals:{enabled:1,sides:29,additive:1,textured:1,rad:.105693,g:1,b:1,r2:1,b2:1,a2:1,border_a:0},init_eqs_str:"a.bassspin=0;a.xpos=0;a.ypos=0;a.q1=0;a.q2=0;a.bassspin=0;a.xpos=2.3;a.ypos=2.3;",frame_eqs_str:"a.bassspin=.00001<Math.abs(above(.05*a.bass,a.bassspin))?a.bassspin+.001:a.bassspin-.001;a.bassspin*=above(a.bassspin,0);a.xpos+=a.bassspin;a.ypos+=a.bassspin;a.x=.5+a.q1+.13*Math.sin(a.xpos);a.y=.5+a.q2+.18*Math.cos(a.ypos);"},{baseVals:{enabled:1,sides:100,additive:1,textured:1,rad:.091434,g:1,b:1,r2:1,b2:1,a2:1,border_a:0},init_eqs_str:"a.bassspin=0;a.xpos=0;a.ypos=0;a.q1=0;a.q2=0;a.bassspin=0;a.xpos=4.5;a.ypos=4.5;",frame_eqs_str:"a.bassspin=.00001<Math.abs(above(.05*a.bass,a.bassspin))?a.bassspin+.001:a.bassspin-.001;a.bassspin*=above(a.bassspin,0);a.xpos+=a.bassspin;a.ypos+=a.bassspin;a.x=.5+a.q1+.13*Math.sin(a.xpos);a.y=.5+a.q2+.18*Math.cos(a.ypos);"}],waves:[{baseVals:{enabled:0}},{baseVals:{enabled:0}},{baseVals:{enabled:0}},{baseVals:{enabled:0}}],init_eqs_str:"a.xpos=0;a.yamptarg=0;a.ydir=0;a.q1=0;a.yaccel=0;a.xamptarg=0;a.xamp=0;a.xspeed=0;a.ypos=0;a.xaccel=0;a.att=0;a.vol=0;a.q2=0;a.yamp=0;a.xdir=0;a.yspeed=0;",frame_eqs_str:`a.warp=0;a.decay=.92;a.vol=div(a.bass+a.mid+a.att,6);a.xamptarg=.00001<Math.abs(equal(mod(a.frame,15),0))?Math.min(.5*a.vol*a.bass_att,.5):a.xamptarg;a.xamp+=.5*(a.xamptarg-a.xamp);a.xdir=.00001<Math.abs(above(Math.abs(a.xpos),a.xamp))?-sign(a.xpos):.00001<Math.abs(below(Math.abs(a.xspeed),.1))?2*above(a.xpos,0)-1:a.xdir;a.xaccel=a.xdir*a.xamp-a.xpos-.055*a.xspeed*below(Math.abs(a.xpos),a.xamp);a.xspeed=a.xspeed+a.xdir*a.xamp-a.xpos-.055*a.xspeed*below(Math.abs(a.xpos),a.xamp);
a.xpos+=.001*a.xspeed;a.yamptarg=.00001<Math.abs(equal(mod(a.frame,15),0))?Math.min(.3*a.vol*a.treb_att,.5):a.yamptarg;a.yamp+=.5*(a.yamptarg-a.yamp);a.ydir=.00001<Math.abs(above(Math.abs(a.ypos),a.yamp))?-sign(a.ypos):.00001<Math.abs(below(Math.abs(a.yspeed),.1))?2*above(a.ypos,0)-1:a.ydir;a.yaccel=a.ydir*a.yamp-a.ypos-.055*a.yspeed*below(Math.abs(a.ypos),a.yamp);a.yspeed=a.yspeed+a.ydir*a.yamp-a.ypos-.055*a.yspeed*below(Math.abs(a.ypos),a.yamp);a.ypos+=.001*a.yspeed;a.q1=a.ypos;a.q2=a.xpos;`,pixel_eqs_str:"a.zoom+=a.q1*a.q2*2;a.rot=10+a.rad*a.treb*.1;",warp:"",comp:""}},function(o,l){o.exports={baseVals:{rating:3,decay:.5,echo_zoom:1,echo_alpha:.5,echo_orient:3,wrap:0,darken_center:1,solarize:1,wave_a:.001,zoom:.97,rot:-6.27999,warp:52e-5,wave_r:0,wave_g:0,wave_b:0,ob_r:1,ob_g:1,ob_b:1,mv_r:.8,mv_a:0},shapes:[{baseVals:{enabled:0}},{baseVals:{enabled:1,textured:1,x:.25,y:.75,rad:4.44708,tex_zoom:.22746,r:0,a:.1,g2:0,a2:.2,border_r:0,border_g:0,border_a:0},init_eqs_str:"a.q1=0;a.tex_capture=0;a.q3=0;a.tex_saw=.4;",frame_eqs_str:"a.ang=.2*a.q1;a.tex_capture=above(a.q3,1);a.tex_zoom=.6;"},{baseVals:{enabled:0}},{baseVals:{enabled:0}}],waves:[{baseVals:{enabled:1,thick:1,smoothing:0},init_eqs_str:"a.q1=0;a.speed=0;a.v=0;a.xs=0;a.ys=0;",frame_eqs_str:"",point_eqs_str:`a.q1=0;a.speed=.8*a.bass_att;a.v=1E6*a.sample+a.value2*a.bass*.1;a.xs+=Math.sin(a.v)*a.speed*Math.atan(1.51*a.v);a.ys+=Math.sin(a.v)*a.speed*Math.atan(10*a.v);a.x=.5+.5*Math.sin(.1*a.xs)*Math.cos(.2*a.time+a.xs);a.y=.5+.5*Math.sin(.12*a.ys)*Math.cos(.1*a.time+a.xs);a.x=.8*a.x+.1;a.y=.8*a.y+.1;a.r=.5*Math.sin(1.22*a.time)+.6;a.g=.4+.4*Math.sin(1.307*a.time+2*a.y);a.b=.4+.4*Math.sin(1.959*a.time+2*a.x);a.xs=.00001<Math.abs(above(a.xs,1E3))?0:a.xs;a.ys=.00001<Math.abs(above(a.ys,
1E3))?0:a.ys;`},{baseVals:{enabled:1,thick:1,smoothing:0},init_eqs_str:"a.q1=0;a.speed=0;a.v=0;a.xs=0;a.ys=0;",frame_eqs_str:"",point_eqs_str:`a.q1=0;a.speed=.8*a.bass_att;a.v=1E6*a.sample+a.value2*a.bass*.1;a.xs+=Math.sin(a.v)*a.speed*Math.atan(1.51*a.v);a.ys+=Math.sin(a.v)*a.speed*Math.atan(10*a.v);a.x=.5+.5*Math.sin(.1*a.xs)*Math.cos(.2*a.time+a.xs);a.y=.5+.5*Math.sin(.14*a.ys)*Math.cos(.1*a.time+a.xs);a.x=.8*a.x+.1;a.y=.8*a.y+.1;a.x=.6*a.x+.2;a.y=.6*a.y+.2;a.r=.5*Math.sin(1.322*a.time)+.6;a.g=.4+.4*Math.sin(1.5407*a.time+2*a.y);a.b=.4+.4*Math.sin(1.759*a.time+2*a.x);a.xs=.00001<Math.abs(above(a.xs,1E3))?0:a.xs;
a.ys=.00001<Math.abs(above(a.ys,1E3))?0:a.ys;`},{baseVals:{enabled:1,thick:1,smoothing:0},init_eqs_str:"a.q1=0;a.speed=0;a.v=0;a.xs=0;a.ys=0;",frame_eqs_str:"",point_eqs_str:`a.q1=0;a.speed=.8*a.bass_att;a.v=1E6*a.sample+a.value2*a.bass*.1;a.xs+=Math.sin(a.v)*a.speed*Math.atan(1.51*a.v);a.ys+=Math.sin(a.v)*a.speed*Math.atan(10*a.v);a.x=.5+.5*Math.sin(.1*a.xs)*Math.cos(.2*a.time+a.xs);a.y=.5+.5*Math.sin(.14*a.ys)*Math.cos(.1*a.time+a.xs);a.x=.8*a.x+.1;a.y=.8*a.y+.1;a.x=.25*a.x+.375;a.y=.25*a.y+.375;a.r=.5*Math.sin(1.622*a.time)+.6;a.g=.4+.4*Math.sin(1.2407*a.time+2*a.y);a.b=.4+.4*Math.sin(1.359*a.time+2*a.x);a.xs=.00001<Math.abs(above(a.xs,1E3))?
0:a.xs;a.ys=.00001<Math.abs(above(a.ys,1E3))?0:a.ys;`},{baseVals:{enabled:0}}],init_eqs_str:"a.basstime=0;a.stickybit=0;a.volavg2=0;a.q1=0;a.decay_r=0;a.sample1=0;a.difftime=0;a.diff=0;a.decay_b=0;a.edge=0;a.volavg=0;a.bit2=0;a.vol=0;a.q2=0;a.q3=0;a.basssum=0;a.decay_g=0;a.sample2=0;",frame_eqs_str:`a.basstime+=.03*a.bass;a.q1=4*a.basstime;a.basstime=.00001<Math.abs(below(a.basstime,1E3))?1E3:a.basstime;a.basstime+=.03*a.bass_att;a.vol=pow(a.bass+a.mid+a.treb,2);a.basssum=a.vol;a.stickybit=mod(a.time,2);a.volavg+=a.vol*equal(a.stickybit,1);a.sample1+=equal(a.stickybit,1);a.volavg2+=a.vol*equal(a.stickybit,0);a.sample2+=equal(a.stickybit,0);a.edge=bnot(equal(a.bit2,a.stickybit));a.volavg-=a.volavg*a.edge*a.stickybit;a.volavg2-=a.volavg2*a.edge*equal(a.stickybit,0);a.sample1-=
a.sample1*a.edge*a.stickybit;a.sample2-=a.sample2*a.edge*equal(a.stickybit,0);a.diff=.00001<Math.abs(equal(a.stickybit,1))?div(a.basssum,div(a.volavg2,a.sample2)):0;a.diff=.00001<Math.abs(equal(a.stickybit,0))?div(a.basssum,div(a.volavg,a.sample1)):a.diff;a.q3=a.diff;a.bit2=mod(a.time,2);a.difftime+=.03*a.diff;a.q2=a.difftime;a.difftime=.00001<Math.abs(above(a.difftime,2E3))?0:a.difftime;a.monitor=3.14*Math.abs(Math.cos(a.time));a.mv_a=above(a.diff,10);`,pixel_eqs_str:"a.zoom=1+.05*a.q3*a.rad;a.decay_r=.2*a.rad*Math.sin(.35*a.q2)+.85+.1*Math.sin(a.q2);a.decay_g=.2*a.rad*Math.sin(.5*a.q2)+.85+.1*Math.sin(.7*a.q2);a.decay_b=.2*a.rad*Math.sin(.4*a.q2)+.85+.1*Math.sin(.8*a.q2);a.rot=0;",warp:` shader_body { 
  vec3 ret_1;
  vec2 tmpvar_2;
  tmpvar_2 = (vec2(1.0, 0.0) * texsize.z);
  vec2 tmpvar_3;
  tmpvar_3 = (vec2(0.0, 1.0) * texsize.z);
  ret_1 = (((
    (texture (sampler_main, (uv + tmpvar_2)).xyz + texture (sampler_main, (uv + tmpvar_2)).xyz)
   * 0.5) + (
    (texture (sampler_main, (uv + tmpvar_3)).xyz + texture (sampler_main, (uv + tmpvar_3)).xyz)
   * 0.5)) - texture (sampler_main, ((
    (uv - 0.5)
   * 0.9) + 0.5)).xyz);
  ret_1 = (ret_1 - 0.4);
  vec4 tmpvar_4;
  tmpvar_4.w = 1.0;
  tmpvar_4.xyz = ret_1;
  ret = tmpvar_4.xyz;
 }`,comp:` shader_body { 
  vec3 ret_1;
  vec2 tmpvar_2;
  tmpvar_2 = ((0.5 - uv) + 0.5);
  ret_1 = (mix (texture (sampler_main, uv).xyz, texture (sampler_main, tmpvar_2).xyz, vec3(0.5, 0.5, 0.5)) * 2.0);
  ret_1 = (((
    ((texture (sampler_blur3, uv).xyz * scale3) + bias3)
   * 2.0) + (
    ((texture (sampler_blur3, tmpvar_2).xyz * scale3) + bias3)
   * 2.0)) + ret_1);
  vec4 tmpvar_3;
  tmpvar_3.w = 1.0;
  tmpvar_3.xyz = ret_1;
  ret = tmpvar_3.xyz;
 }`}},function(o,l){o.exports={baseVals:{rating:3,gammaadj:1.07,decay:.95,echo_zoom:1,echo_alpha:.5,echo_orient:1,wave_mode:7,additivewave:1,modwavealphabyvolume:1,wave_brighten:0,wrap:0,brighten:1,darken:1,invert:1,wave_a:4.1,wave_scale:1.286,wave_smoothing:.63,modwavealphastart:.71,modwavealphaend:1.3,warpscale:1.331,zoom:.99951,warp:.01,wave_r:.65,wave_g:.65,wave_b:.65,ob_size:.5,ob_r:.01,ib_size:.26,mv_a:0},shapes:[{baseVals:{enabled:0}},{baseVals:{enabled:0}},{baseVals:{enabled:0}},{baseVals:{enabled:0}}],waves:[{baseVals:{enabled:1,spectrum:1,thick:1},init_eqs_str:"a.xang=0;a.fov=0;a.yang=0;a.my=0;a.oz=0;a.ayang=0;a.mz=0;a.oy=0;a.mod=0;a.azang=0;a.mx=0;a.vol=0;a.sp=0;a.zang=0;a.axang=0;a.ox=0;",frame_eqs_str:"",point_eqs_str:`a.sp=1607.68*a.sample;a.vol=.33*(a.bass_att+a.mid_att+a.treb_att);a.vol=.2+.5*(a.value1+a.value2);a.vol=.2;a.mod=.00001<Math.abs(below(a.mid_att,1.8))?a.mid_att+.2:2;a.ox=.5*Math.sin(a.sp)*Math.sin(3.14*a.sample)*a.vol;a.oy=(a.sample-0)*a.mod;a.oz=.5*Math.cos(a.sp)*Math.sin(3.14*a.sample)*a.vol;a.xang=.672*a.time;a.axang=0;a.yang=-1.351*a.time;a.ayang=0;a.zang=-.401*a.time;a.azang=0;a.fov=.6+.2*Math.sin(a.time);a.fov=.5;a.mx=a.ox*Math.cos(a.zang)-a.oy*Math.sin(a.zang);a.my=
a.ox*Math.sin(a.zang)+a.oy*Math.cos(a.zang);a.ox=a.mx;a.oy=a.my;a.mx=a.ox*Math.cos(a.yang)+a.oz*Math.sin(a.yang);a.mz=-a.ox*Math.sin(a.yang)+a.oz*Math.cos(a.yang);a.ox=a.mx;a.oz=a.mz;a.my=a.oy*Math.cos(a.xang)-a.oz*Math.sin(a.xang);a.mz=a.oy*Math.sin(a.xang)+a.oz*Math.cos(a.xang);a.oy=a.my;a.oz=a.mz;a.oz=Math.abs(a.oz)-2;a.x=div(a.ox*a.fov,a.oz)+.5;a.x=.75*(a.x-.5)+.5;a.y=div(a.oy*a.fov,a.oz)+.5;a.r=1+Math.sin(a.sp);a.b=.5+.5*Math.sin(1.57*a.sample);a.g=.5+.5*Math.cos(1.57*a.sample);a.a=.5+.25*(a.oz+
2);`},{baseVals:{enabled:1,spectrum:1,thick:1},init_eqs_str:"a.xang=0;a.fov=0;a.yang=0;a.my=0;a.oz=0;a.ayang=0;a.mz=0;a.oy=0;a.mod=0;a.azang=0;a.mx=0;a.vol=0;a.sp=0;a.zang=0;a.axang=0;a.ox=0;",frame_eqs_str:"",point_eqs_str:`a.sp=1607.68*a.sample;a.vol=.33*(a.bass_att+a.mid_att+a.treb_att);a.vol=.2+.5*(a.value1+a.value2);a.vol=.2;a.mod=.00001<Math.abs(below(a.bass_att,1.8))?a.bass_att+.2:2;a.ox=.5*Math.sin(a.sp)*Math.sin(3.14*a.sample)*a.vol;a.oy=(a.sample-0)*a.mod;a.oz=.5*Math.cos(a.sp)*Math.sin(3.14*a.sample)*a.vol;a.xang=-.321*a.time;a.axang=0;a.yang=1.531*a.time;a.ayang=0;a.zang=-.101*a.time;a.azang=0;a.fov=.6+.2*Math.sin(a.time);a.fov=.5;a.mx=a.ox*Math.cos(a.zang)-a.oy*Math.sin(a.zang);a.my=
a.ox*Math.sin(a.zang)+a.oy*Math.cos(a.zang);a.ox=a.mx;a.oy=a.my;a.mx=a.ox*Math.cos(a.yang)+a.oz*Math.sin(a.yang);a.mz=-a.ox*Math.sin(a.yang)+a.oz*Math.cos(a.yang);a.ox=a.mx;a.oz=a.mz;a.my=a.oy*Math.cos(a.xang)-a.oz*Math.sin(a.xang);a.mz=a.oy*Math.sin(a.xang)+a.oz*Math.cos(a.xang);a.oy=a.my;a.oz=a.mz;a.oz=Math.abs(a.oz)-2;a.x=div(a.ox*a.fov,a.oz)+.5;a.x=.75*(a.x-.5)+.5;a.y=div(a.oy*a.fov,a.oz)+.5;a.g=1+Math.sin(a.sp);a.r=.5+.5*Math.sin(1.57*a.sample);a.b=.5+.5*Math.cos(1.57*a.sample);a.a=.5+.25*(a.oz+
2);`},{baseVals:{enabled:1,spectrum:1,thick:1},init_eqs_str:"a.xang=0;a.fov=0;a.yang=0;a.my=0;a.oz=0;a.ayang=0;a.mz=0;a.oy=0;a.mod=0;a.azang=0;a.mx=0;a.vol=0;a.sp=0;a.zang=0;a.axang=0;a.ox=0;",frame_eqs_str:"",point_eqs_str:`a.sp=1607.68*a.sample;a.vol=.33*(a.bass_att+a.mid_att+a.treb_att);a.vol=.2+.5*(a.value1+a.value2);a.vol=.2;a.mod=.00001<Math.abs(below(a.treb_att,1.8))?a.treb_att+.2:2;a.ox=.5*Math.sin(a.sp)*Math.sin(3.14*a.sample)*a.vol;a.oy=(a.sample-0)*a.mod;a.oz=.5*Math.cos(a.sp)*Math.sin(3.14*a.sample)*a.vol;a.xang=.221*a.time;a.axang=0;a.yang=-.411*a.time;a.ayang=0;a.zang=1.201*a.time;a.azang=0;a.fov=.6+.2*Math.sin(a.time);a.fov=.5;a.mx=a.ox*Math.cos(a.zang)-a.oy*Math.sin(a.zang);a.my=
a.ox*Math.sin(a.zang)+a.oy*Math.cos(a.zang);a.ox=a.mx;a.oy=a.my;a.mx=a.ox*Math.cos(a.yang)+a.oz*Math.sin(a.yang);a.mz=-a.ox*Math.sin(a.yang)+a.oz*Math.cos(a.yang);a.ox=a.mx;a.oz=a.mz;a.my=a.oy*Math.cos(a.xang)-a.oz*Math.sin(a.xang);a.mz=a.oy*Math.sin(a.xang)+a.oz*Math.cos(a.xang);a.oy=a.my;a.oz=a.mz;a.oz=Math.abs(a.oz)-2;a.x=div(a.ox*a.fov,a.oz)+.5;a.x=.75*(a.x-.5)+.5;a.y=div(a.oy*a.fov,a.oz)+.5;a.b=1+Math.sin(a.sp);a.g=.5+.5*Math.sin(1.57*a.sample);a.r=.5+.5*Math.cos(1.57*a.sample);a.a=.5+.25*(a.oz+
2);`},{baseVals:{enabled:0}}],init_eqs_str:"a.it=0;a.radm=0;a.mod=0;",frame_eqs_str:"a.wave_a=0;",pixel_eqs_str:"a.it=.3*Math.sin(.2*a.time);a.radm=.5*a.rad;a.rot=.02*Math.sin(20*(a.radm+a.it));a.mod=Math.sin(5*a.ang);a.mod*=a.mod*a.mod*a.mod*a.mod;a.zoom=1+Math.abs(.01*a.mod);a.zoom*=Math.min(1.05,Math.max(1,Math.max(a.bass,a.treb)));",warp:` shader_body { 
  vec3 xfer_1;
  vec3 ret_2;
  vec4 tmpvar_3;
  vec2 tmpvar_4;
  tmpvar_4 = (uv - 0.5);
  tmpvar_3 = texture (sampler_main, (tmpvar_4 + 0.5));
  ret_2 = (tmpvar_3.xyz / ((tmpvar_3.x + tmpvar_3.y) + tmpvar_3.z));
  ret_2 = texture (sampler_main, ((tmpvar_4 * dot (ret_2, vec3(1.0, 0.975, 0.95))) + 0.5)).xyz;
  vec3 tmpvar_5;
  tmpvar_5 = clamp (((ret_2 - 0.05) * 99.0), 0.0, 1.0);
  xfer_1.x = tmpvar_5.x;
  xfer_1.yz = (tmpvar_5.yz * clamp ((
    (0.1 - ret_2.xy)
   * 99.0), 0.0, 1.0));
  ret_2 = (ret_2 + (vec3(-0.014, 0.014, 0.0) * tmpvar_5.xxx));
  ret_2 = (ret_2 + (vec3(0.0, -0.08, 0.08) * xfer_1.yyy));
  ret_2 = (ret_2 + (vec3(0.0, 0.0, -0.02) * xfer_1.zzz));
  ret_2 = (ret_2 + (vec3(5.0, 15.0, 40.0) * (
    (texture (sampler_noise_lq, (((uv_orig * texsize.xy) * texsize_noise_lq.zw) + rand_frame.xy)).xyz - 0.5)
   / 256.0)));
  vec4 tmpvar_6;
  tmpvar_6.w = 1.0;
  tmpvar_6.xyz = ret_2;
  ret = tmpvar_6.xyz;
 }`,comp:""}},function(o,l){o.exports={baseVals:{rating:2,gammaadj:1,wave_mode:7,additivewave:1,wave_thick:1,modwavealphabyvolume:1,wave_brighten:0,wave_a:.001,wave_scale:.958,wave_smoothing:.45,modwavealphastart:0,modwavealphaend:1.32,warpanimspeed:30.965,warpscale:2.572,zoom:1.00901,warp:54e-5,wave_r:0,wave_g:0,wave_b:0,mv_x:25.6,mv_y:9.6,mv_l:0,mv_r:.5,mv_g:.5,mv_b:.5,mv_a:0},shapes:[{baseVals:{enabled:0}},{baseVals:{enabled:0}},{baseVals:{enabled:0}},{baseVals:{enabled:0}}],waves:[{baseVals:{enabled:0}},{baseVals:{enabled:0}},{baseVals:{enabled:0}},{baseVals:{enabled:0}}],init_eqs_str:"a.dx_residual=0;a.dy_residual=0;a.bass_thresh=0;a.rg=0;a.q9=0;",frame_eqs_str:`a.wave_r=.85+.25*Math.sin(.437*a.time+1);a.wave_g=.85+.25*Math.sin(.544*a.time+2);a.wave_b=.85+.25*Math.sin(.751*a.time+3);a.rot+=.01*(.6*Math.sin(.381*a.time)+.4*Math.sin(.579*a.time));a.cx+=.21*(.6*Math.sin(.374*a.time)+.4*Math.sin(.294*a.time));a.cy+=.21*(.6*Math.sin(.393*a.time)+.4*Math.sin(.223*a.time));a.dx+=.003*(.6*Math.sin(.234*a.time)+.4*Math.sin(.277*a.time));a.dy+=.003*(.6*Math.sin(.284*a.time)+.4*Math.sin(.247*a.time));a.decay-=.01*equal(mod(a.frame,6),0);a.dx+=
a.dx_residual;a.dy+=a.dy_residual;a.bass_thresh=2*above(a.bass_att,a.bass_thresh)+(1-above(a.bass_att,a.bass_thresh))*(.96*(a.bass_thresh-1.3)+1.3);a.dx_residual=.016*equal(a.bass_thresh,2.13)*Math.sin(7*a.time)+(1-equal(a.bass_thresh,2.13))*a.dx_residual;a.dy_residual=.012*equal(a.bass_thresh,2.13)*Math.sin(9*a.time)+(1-equal(a.bass_thresh,2.13))*a.dy_residual;a.wave_x-=7*a.dx_residual;a.wave_y-=7*a.dy_residual;a.wave_mystery=.03*a.time;a.rg=Math.max(.77*a.rg,.02+.5*Math.min(2,1.3*Math.max(0,a.mid_att-
1)));a.q9=a.rg;a.zoom+=.1*a.q9;`,pixel_eqs_str:"",pixel_eqs:"",warp:` shader_body { 
  vec3 ret_1;
  ret_1 = texture (sampler_main, uv).xyz;
  ret_1 = (ret_1 + ((ret_1 - 
    ((((
      (texture (sampler_blur1, uv).xyz * scale1)
     + bias1) * 0.3) + ((
      (texture (sampler_blur2, uv).xyz * scale2)
     + bias2) * 0.4)) + (((texture (sampler_blur3, uv).xyz * scale3) + bias3) * 0.3))
  ) * 0.3));
  ret_1 = (ret_1 * 0.9);
  ret_1 = (ret_1 + ((
    ((texture (sampler_noise_lq, ((
      (uv_orig * texsize.xy)
     * 
      (texsize_noise_lq.zw * 0.4)
    ) + rand_frame.xy)).xyz - 0.5) / 256.0)
   * 122.0) * (
    (clamp ((treb_att - 1.0), 0.0, 1.0) * 0.4)
   + 0.3)));
  ret_1 = mix (ret_1, vec3(dot (ret_1, vec3(0.32, 0.49, 0.29))), vec3(0.2, 0.2, 0.2));
  vec4 tmpvar_2;
  tmpvar_2.w = 1.0;
  tmpvar_2.xyz = ret_1;
  ret = tmpvar_2.xyz;
 }`,comp:`vec2 xlat_mutabledz;
vec3 xlat_mutableret1;
vec2 xlat_mutableuv3;
 shader_body { 
  vec2 tmpvar_1;
  tmpvar_1.y = 0.0;
  tmpvar_1.x = texsize.z;
  vec2 tmpvar_2;
  tmpvar_2.x = 0.0;
  tmpvar_2.y = texsize.w;
  vec2 uv_3;
  float inten_4;
  float dist_5;
  vec2 uv1_6;
  vec3 ret_7;
  vec2 tmpvar_8;
  tmpvar_8 = ((uv - 0.5) * aspect.xy);
  float tmpvar_9;
  tmpvar_9 = (time / 18.0);
  dist_5 = (1.0 - fract((0.25 + tmpvar_9)));
  inten_4 = ((sqrt(dist_5) * (1.0 - dist_5)) * 4.0);
  uv_3 = (tmpvar_8 * aspect.yx);
  xlat_mutableuv3 = (vec2(0.51, 0.55) + (uv_3 * dist_5));
  xlat_mutabledz.x = (inten_4 * ((2.0 * 
    dot (texture (sampler_main, (xlat_mutableuv3 + tmpvar_1)).xyz, vec3(0.32, 0.49, 0.29))
  ) - (2.0 * 
    dot (texture (sampler_main, (xlat_mutableuv3 - tmpvar_1)).xyz, vec3(0.32, 0.49, 0.29))
  )));
  xlat_mutabledz.y = (inten_4 * ((2.0 * 
    dot (texture (sampler_main, (xlat_mutableuv3 + tmpvar_2)).xyz, vec3(0.32, 0.49, 0.29))
  ) - (2.0 * 
    dot (texture (sampler_main, (xlat_mutableuv3 - tmpvar_2)).xyz, vec3(0.32, 0.49, 0.29))
  )));
  xlat_mutableret1 = max (vec3(0.0, 0.0, 0.0), (texture (sampler_main, xlat_mutableuv3).xyz * inten_4));
  dist_5 = (1.0 - fract((0.5 + tmpvar_9)));
  inten_4 = ((sqrt(dist_5) * (1.0 - dist_5)) * 4.0);
  uv_3 = (tmpvar_8 * aspect.yx);
  xlat_mutableuv3 = (vec2(0.49, 0.55) + (uv_3 * dist_5));
  xlat_mutabledz.x = (xlat_mutabledz.x + (inten_4 * (
    (2.0 * dot (texture (sampler_main, (xlat_mutableuv3 + tmpvar_1)).xyz, vec3(0.32, 0.49, 0.29)))
   - 
    (2.0 * dot (texture (sampler_main, (xlat_mutableuv3 - tmpvar_1)).xyz, vec3(0.32, 0.49, 0.29)))
  )));
  xlat_mutabledz.y = (xlat_mutabledz.y + (inten_4 * (
    (2.0 * dot (texture (sampler_main, (xlat_mutableuv3 + tmpvar_2)).xyz, vec3(0.32, 0.49, 0.29)))
   - 
    (2.0 * dot (texture (sampler_main, (xlat_mutableuv3 - tmpvar_2)).xyz, vec3(0.32, 0.49, 0.29)))
  )));
  xlat_mutableret1 = max (xlat_mutableret1, (texture (sampler_main, xlat_mutableuv3).xyz * inten_4));
  dist_5 = (1.0 - fract((0.75 + tmpvar_9)));
  inten_4 = ((sqrt(dist_5) * (1.0 - dist_5)) * 4.0);
  uv_3 = (tmpvar_8 * aspect.yx);
  xlat_mutableuv3 = (vec2(0.51, 0.55) + (uv_3 * dist_5));
  xlat_mutabledz.x = (xlat_mutabledz.x + (inten_4 * (
    (2.0 * dot (texture (sampler_main, (xlat_mutableuv3 + tmpvar_1)).xyz, vec3(0.32, 0.49, 0.29)))
   - 
    (2.0 * dot (texture (sampler_main, (xlat_mutableuv3 - tmpvar_1)).xyz, vec3(0.32, 0.49, 0.29)))
  )));
  xlat_mutabledz.y = (xlat_mutabledz.y + (inten_4 * (
    (2.0 * dot (texture (sampler_main, (xlat_mutableuv3 + tmpvar_2)).xyz, vec3(0.32, 0.49, 0.29)))
   - 
    (2.0 * dot (texture (sampler_main, (xlat_mutableuv3 - tmpvar_2)).xyz, vec3(0.32, 0.49, 0.29)))
  )));
  xlat_mutableret1 = max (xlat_mutableret1, (texture (sampler_main, xlat_mutableuv3).xyz * inten_4));
  dist_5 = (1.0 - fract((1.0 + tmpvar_9)));
  inten_4 = ((sqrt(dist_5) * (1.0 - dist_5)) * 4.0);
  uv_3 = (tmpvar_8 * aspect.yx);
  xlat_mutableuv3 = (vec2(0.49, 0.55) + (uv_3 * dist_5));
  xlat_mutabledz.x = (xlat_mutabledz.x + (inten_4 * (
    (2.0 * dot (texture (sampler_main, (xlat_mutableuv3 + tmpvar_1)).xyz, vec3(0.32, 0.49, 0.29)))
   - 
    (2.0 * dot (texture (sampler_main, (xlat_mutableuv3 - tmpvar_1)).xyz, vec3(0.32, 0.49, 0.29)))
  )));
  xlat_mutabledz.y = (xlat_mutabledz.y + (inten_4 * (
    (2.0 * dot (texture (sampler_main, (xlat_mutableuv3 + tmpvar_2)).xyz, vec3(0.32, 0.49, 0.29)))
   - 
    (2.0 * dot (texture (sampler_main, (xlat_mutableuv3 - tmpvar_2)).xyz, vec3(0.32, 0.49, 0.29)))
  )));
  xlat_mutableret1 = max (xlat_mutableret1, (texture (sampler_main, xlat_mutableuv3).xyz * inten_4));
  xlat_mutabledz = (xlat_mutabledz * (0.5 + rand_preset.z));
  vec2 tmpvar_10;
  tmpvar_10 = (2.0 * (rand_preset.xy - 0.5));
  uv1_6 = (4.0 * tmpvar_8);
  vec2 tmpvar_11;
  tmpvar_11 = sin(((uv1_6 + xlat_mutabledz) + tmpvar_10));
  vec2 tmpvar_12;
  tmpvar_12 = sin(((uv1_6 + 
    (xlat_mutabledz * 1.4)
  ) + tmpvar_10));
  vec2 tmpvar_13;
  tmpvar_13 = sin(((uv1_6 + 
    (xlat_mutabledz * 1.8)
  ) + tmpvar_10));
  vec3 tmpvar_14;
  tmpvar_14.x = inversesqrt(dot (tmpvar_11, tmpvar_11));
  tmpvar_14.y = inversesqrt(dot (tmpvar_12, tmpvar_12));
  tmpvar_14.z = inversesqrt(dot (tmpvar_13, tmpvar_13));
  ret_7 = (((
    (tmpvar_14 * ((vec3(0.01, 0.01, 0.01) * (1.0 + 
      (rand_preset.xyz / 2.0)
    )) * (0.5 + rand_preset.y)))
   * 
    ((((rand_preset.x - 0.5) * 4.0) * xlat_mutableret1) + (8.0 * (1.0 + rand_preset)).xyz)
  ) - (xlat_mutableret1.x * 0.5)) + ((xlat_mutableret1.y + xlat_mutableret1.z) / 3.0));
  ret_7 = (ret_7 - ((slow_roam_sin.wzy * roam_cos.zxy) * 0.4));
  ret_7 = (ret_7 * (1.0 + ret_7));
  vec4 tmpvar_15;
  tmpvar_15.w = 1.0;
  tmpvar_15.xyz = ret_7;
  ret = tmpvar_15.xyz;
 }`}},function(o,l){o.exports={baseVals:{rating:5,gammaadj:1,decay:.995,echo_zoom:1,echo_orient:1,wave_mode:5,wave_brighten:0,wrap:0,wave_a:100,wave_scale:.721,wave_smoothing:.5,modwavealphastart:.5,modwavealphaend:1,fshader:1,dx:1e-5,dy:1e-5,warp:.01,wave_r:.5,wave_g:.5,wave_b:.5,ob_size:0,ob_a:1,ib_size:0,ib_r:0,ib_g:0,ib_b:0,mv_x:0,mv_y:0,mv_l:1,mv_a:0},shapes:[{baseVals:{enabled:0}},{baseVals:{enabled:0}},{baseVals:{enabled:0}},{baseVals:{enabled:0}}],waves:[{baseVals:{enabled:0}},{baseVals:{enabled:0}},{baseVals:{enabled:0}},{baseVals:{enabled:0}}],init_eqs_str:"a.thresh=0;a.dx_r=0;a.dy_r=0;a.xs=0;",frame_eqs_str:"a.wave_r=.5+.5*Math.sin(6*a.time);a.wave_g=.5+.5*Math.sin(4.1*a.time);a.wave_b=-1+(1-a.wave_r+1-a.wave_g);a.warp=0;",pixel_eqs_str:`a.thresh=2*above(a.bass_att,a.thresh)+(1-above(a.bass_att,a.thresh))*(.96*(a.thresh-1.3)+1.3);a.dx_r=.015*equal(a.thresh,2)*Math.sin(5*a.time)+(1-equal(a.thresh,2))*a.dx_r;a.dy_r=.015*equal(a.thresh,2)*Math.sin(6*a.time)+(1-equal(a.thresh,2))*a.dy_r;a.xs=above(Math.sin(12*a.dx_r*a.bass),0)*a.dy_r*Math.sin(2*a.rad)+below(Math.sin(12*a.dx_r*a.bass),0)*Math.cos(a.time)*a.dx_r*Math.sin(.6*a.rad);a.zoom+=Math.abs(12*a.xs);a.rot+=5*a.xs*Math.cos(1-a.xs*a.rad*12*a.dx_r);a.dx+=a.dx_r;
a.dy+=a.dy_r;`,warp:` shader_body { 
  vec2 my_uv_1;
  vec3 ret_2;
  vec2 tmpvar_3;
  tmpvar_3 = (vec2(1280.0, 1024.0) * texsize.zw);
  float tmpvar_4;
  vec2 tmpvar_5;
  tmpvar_5 = (uv + vec2(0.005, 0.0));
  vec2 tmpvar_6;
  tmpvar_6 = (uv - vec2(0.005, 0.0));
  tmpvar_4 = (((
    (texture (sampler_blur2, tmpvar_5).xyz * scale2)
   + bias2) - (
    (texture (sampler_blur2, tmpvar_6).xyz * scale2)
   + bias2)).x * tmpvar_3.x);
  float tmpvar_7;
  vec2 tmpvar_8;
  tmpvar_8 = (uv + vec2(0.0, 0.005));
  vec2 tmpvar_9;
  tmpvar_9 = (uv - vec2(0.0, 0.005));
  tmpvar_7 = (((
    (texture (sampler_blur2, tmpvar_8).xyz * scale2)
   + bias2) - (
    (texture (sampler_blur2, tmpvar_9).xyz * scale2)
   + bias2)).x * tmpvar_3.y);
  vec2 tmpvar_10;
  tmpvar_10.x = tmpvar_4;
  tmpvar_10.y = tmpvar_7;
  vec2 tmpvar_11;
  tmpvar_11.x = (((
    (texture (sampler_blur2, tmpvar_5).xyz * scale2)
   + bias2) - (
    (texture (sampler_blur2, tmpvar_6).xyz * scale2)
   + bias2)).x * tmpvar_3.x);
  tmpvar_11.y = (((
    (texture (sampler_blur2, tmpvar_8).xyz * scale2)
   + bias2) - (
    (texture (sampler_blur2, tmpvar_9).xyz * scale2)
   + bias2)).x * tmpvar_3.y);
  ret_2.x = texture (sampler_fw_main, ((uv - (tmpvar_10 * 0.01)) + (tmpvar_11 * 0.003))).x;
  vec4 tmpvar_12;
  tmpvar_12 = texture (sampler_blur3, uv);
  ret_2.x = (ret_2.x + ((ret_2.x - 
    ((tmpvar_12.xyz * scale3) + bias3)
  .x) * 0.1));
  ret_2.x = (ret_2.x + 0.004);
  vec2 tmpvar_13;
  tmpvar_13.x = tmpvar_7;
  tmpvar_13.y = -(tmpvar_4);
  my_uv_1 = (uv + ((tmpvar_13 * 0.05) * (1.2 - 
    ((tmpvar_12.xyz * scale3) + bias3)
  .y)));
  ret_2.z = texture (sampler_fw_main, my_uv_1).z;
  vec2 x_14;
  x_14 = (my_uv_1 - uv);
  ret_2.z = (ret_2.z + ((
    ((ret_2.z - ((texture (sampler_blur1, uv).xyz * scale1) + bias1).z) * sqrt(dot (x_14, x_14)))
   * 180.0) / sqrt(
    dot (tmpvar_3, tmpvar_3)
  )));
  ret_2.z = (ret_2.z * 0.8);
  ret_2.z = (ret_2.z + 0.004);
  vec2 tmpvar_15;
  tmpvar_15.x = -(tmpvar_7);
  tmpvar_15.y = tmpvar_4;
  my_uv_1 = (tmpvar_15 * 0.045);
  vec2 tmpvar_16;
  tmpvar_16.x = (((
    (texture (sampler_blur2, (uv + vec2(0.01, 0.0))).xyz * scale2)
   + bias2) - (
    (texture (sampler_blur2, (uv - vec2(0.01, 0.0))).xyz * scale2)
   + bias2)).y * tmpvar_3.x);
  tmpvar_16.y = (((
    (texture (sampler_blur2, (uv + vec2(0.0, 0.01))).xyz * scale2)
   + bias2) - (
    (texture (sampler_blur2, (uv - vec2(0.0, 0.01))).xyz * scale2)
   + bias2)).y * tmpvar_3.y);
  my_uv_1 = (my_uv_1 + (uv - (tmpvar_16 * 0.03)));
  ret_2.y = texture (sampler_fw_main, my_uv_1).y;
  ret_2.y = (ret_2.y + ((
    (ret_2.y - ((texture (sampler_blur3, my_uv_1).xyz * scale3) + bias3).y)
   * 0.1) + 0.01));
  vec4 tmpvar_17;
  tmpvar_17.w = 1.0;
  tmpvar_17.xyz = ret_2;
  ret = tmpvar_17.xyz;
 }`,comp:` shader_body { 
  vec3 ret_1;
  ret_1 = texture (sampler_main, uv).xyz;
  ret_1 = (ret_1 * hue_shader);
  vec3 tmpvar_2;
  tmpvar_2 = mix (ret_1, vec3(dot (ret_1, vec3(0.32, 0.49, 0.29))), vec3(0.5, 1.0, 0.1));
  ret_1 = tmpvar_2;
  vec4 tmpvar_3;
  tmpvar_3.w = 1.0;
  tmpvar_3.xyz = tmpvar_2;
  ret = tmpvar_3.xyz;
 }`}},function(o,l){o.exports={baseVals:{rating:5,gammaadj:1.998,echo_zoom:1.421,wave_mode:7,additivewave:1,modwavealphabyvolume:1,darken_center:1,wave_a:1.193,wave_scale:1.489,wave_smoothing:0,modwavealphastart:.87,modwavealphaend:1.09,warpscale:3.138,zoom:1.003,warp:.09218,wave_r:.5,wave_g:.5,wave_b:.5,wave_x:.6,mv_a:0},shapes:[{baseVals:{enabled:0}},{baseVals:{enabled:0}},{baseVals:{enabled:0}},{baseVals:{enabled:0}}],waves:[{baseVals:{enabled:0}},{baseVals:{enabled:0}},{baseVals:{enabled:0}},{baseVals:{enabled:0}}],init_eqs_str:"a.t2=0;",frame_eqs_str:`a.wave_r+=.365*(.6*Math.sin(4.437*a.time)+.4*Math.sin(3.97*a.time));a.wave_g+=.365*(.6*Math.sin(4.344*a.time)+.4*Math.sin(3.841*a.time));a.wave_b+=.365*(.6*Math.sin(4.251*a.time)+.4*Math.sin(3.055*a.time));a.rot+=.02*(.6*Math.sin(.181*a.time)+.09*Math.sin(-.279*a.time));a.zoom+=.025*(.6*Math.sin(.3131*a.time+2)+.4*Math.sin(-.479*a.time+4));a.decay-=.01*equal(mod(a.frame,6),0);a.t2=6*a.time;a.wave_x=.5+.2*(.6*Math.sin(.374*a.t2)+.4*Math.sin(.294*a.t2));a.wave_y=.5+.2*(.6*Math.sin(.393*
a.t2)+.4*Math.sin(.223*a.t2));`,pixel_eqs_str:"a.dx=0;a.dy=0;a.dx+=2*div(Math.cos(29.37*a.y-1.9*a.time),a.pixelsx);a.dy+=2*div(Math.cos(33.21*a.x-1.7*a.time),a.pixelsy);a.dx+=1.5*div(Math.cos(77.55*a.y-2.1*a.time),a.pixelsx);a.dy+=1.5*div(Math.cos(78.32*a.x-2.4*a.time),a.pixelsy);",warp:` shader_body { 
  vec2 dxy_1;
  dxy_1.x = cos(((154.56 * uv_orig.y) - time));
  dxy_1.y = cos(((154.56 * uv_orig.x) - time));
  float tmpvar_2;
  tmpvar_2 = (time * 5.0);
  dxy_1.x = (dxy_1.x + cos((
    (412.16 * uv_orig.y)
   - tmpvar_2)));
  dxy_1.y = (dxy_1.y + cos((
    (412.16 * uv_orig.x)
   - tmpvar_2)));
  dxy_1.y = (dxy_1.y + 0.15);
  vec4 tmpvar_3;
  tmpvar_3.w = 1.0;
  tmpvar_3.xyz = (max (texture (sampler_fw_main, (uv + 
    (dxy_1 * texsize.zw)
  )).xyz, (texture (sampler_main, uv_orig).xyz * 0.8)) - 0.004);
  ret = tmpvar_3.xyz;
 }`,comp:` shader_body { 
  vec4 tmpvar_1;
  tmpvar_1.w = 1.0;
  tmpvar_1.xyz = ((texture (sampler_main, uv).xyz * 0.8) + ((
    (texture (sampler_blur1, uv).xyz * scale1)
   + bias1) * 0.7));
  ret = tmpvar_1.xyz;
 }`}},function(o,l){o.exports={baseVals:{rating:5,gammaadj:1.9,echo_zoom:1.169,wave_mode:2,additivewave:1,wave_dots:1,wave_thick:1,wave_a:.274,wave_scale:2.827,wave_smoothing:.09,modwavealphastart:.83,modwavealphaend:1.31,warpscale:3.138,zoom:.993,warp:54e-5,wave_r:.5,wave_g:.5,wave_b:.5,mv_a:0},shapes:[{baseVals:{enabled:0}},{baseVals:{enabled:0}},{baseVals:{enabled:0}},{baseVals:{enabled:0}}],waves:[{baseVals:{enabled:0}},{baseVals:{enabled:0}},{baseVals:{enabled:0}},{baseVals:{enabled:0}}],init_eqs_str:"a.dx_residual=0;a.dy_residual=0;a.bass_thresh=0;",frame_eqs_str:`a.wave_r=.85+.25*Math.sin(.437*a.time+1);a.wave_g=.85+.25*Math.sin(.544*a.time+2);a.wave_b=.85+.25*Math.sin(.751*a.time+3);a.rot+=.01*(.6*Math.sin(.381*a.time)+.4*Math.sin(.579*a.time));a.cx+=.21*(.6*Math.sin(.374*a.time)+.4*Math.sin(.294*a.time));a.cy+=.21*(.6*Math.sin(.393*a.time)+.4*Math.sin(.223*a.time));a.dx+=.003*(.6*Math.sin(.234*a.time)+.4*Math.sin(.277*a.time));a.dy+=.003*(.6*Math.sin(.284*a.time)+.4*Math.sin(.247*a.time));a.decay-=.01*equal(mod(a.frame,6),0);a.dx+=
a.dx_residual;a.dy+=a.dy_residual;a.bass_thresh=2*above(a.bass_att,a.bass_thresh)+(1-above(a.bass_att,a.bass_thresh))*(.96*(a.bass_thresh-1.3)+1.3);a.dx_residual=.016*equal(a.bass_thresh,2.13)*Math.sin(7*a.time)+(1-equal(a.bass_thresh,2.13))*a.dx_residual;a.dy_residual=.012*equal(a.bass_thresh,2.13)*Math.sin(9*a.time)+(1-equal(a.bass_thresh,2.13))*a.dy_residual;a.wave_x-=7*a.dx_residual;a.wave_y-=7*a.dy_residual;a.wave_mystery=.03*a.time;`,pixel_eqs_str:"",pixel_eqs:"",warp:` shader_body { 
  vec3 ret_1;
  vec4 tmpvar_2;
  tmpvar_2 = texture (sampler_main, uv);
  ret_1 = (tmpvar_2.xyz + ((tmpvar_2.xyz - 
    ((texture (sampler_blur1, uv).xyz * scale1) + bias1)
  ) * 0.2));
  ret_1 = (ret_1 - 0.02);
  vec4 tmpvar_3;
  tmpvar_3.w = 1.0;
  tmpvar_3.xyz = ret_1;
  ret = tmpvar_3.xyz;
 }`,comp:` shader_body { 
  vec4 tmpvar_1;
  tmpvar_1.w = 1.0;
  tmpvar_1.xyz = (texture (sampler_main, uv).xyz * 1.15);
  ret = tmpvar_1.xyz;
 }`}},function(o,l){o.exports={baseVals:{rating:5,gammaadj:1,decay:1,additivewave:1,wave_brighten:0,wave_a:.001,wave_scale:.01,wave_smoothing:.63,wave_mystery:-1,modwavealphastart:.71,modwavealphaend:1.3,warpanimspeed:30.965,warpscale:2.572,zoom:1.00901,warp:54e-5,wave_r:.65,wave_g:.65,wave_b:.65,mv_x:12.8,mv_y:9.6,mv_l:1,mv_g:.91,mv_b:.71,mv_a:0},shapes:[{baseVals:{enabled:1,sides:100,additive:1,rad:.49138,r:0,g:1,b:1,border_a:0},init_eqs_str:"a.q4=0;a.q5=0;",frame_eqs_str:"a.x=.5+a.q4;a.y=.5+a.q5;a.a=a.bass_att+a.mid_att+a.treb_att;a.a*=.25;a.a=a.a*a.a*1.5;"},{baseVals:{enabled:0}},{baseVals:{enabled:0}},{baseVals:{enabled:0}}],waves:[{baseVals:{enabled:0}},{baseVals:{enabled:0}},{baseVals:{enabled:0}},{baseVals:{enabled:0}}],init_eqs_str:"a.dx_residual=0;a.dy_residual=0;a.bass_thresh=0;",frame_eqs_str:`a.wave_r=.85+.25*Math.sin(.437*a.time+1);a.wave_g=.85+.25*Math.sin(.544*a.time+2);a.wave_b=.85+.25*Math.sin(.751*a.time+3);a.rot+=.01*(.6*Math.sin(.381*a.time)+.4*Math.sin(.579*a.time));a.cx+=.21*(.6*Math.sin(.374*a.time)+.4*Math.sin(.294*a.time));a.cy+=.21*(.6*Math.sin(.393*a.time)+.4*Math.sin(.223*a.time));a.dx+=.003*(.6*Math.sin(.234*a.time)+.4*Math.sin(.277*a.time));a.dy+=.003*(.6*Math.sin(.284*a.time)+.4*Math.sin(.247*a.time));a.decay-=.01*equal(mod(a.frame,6),0);a.dx+=
a.dx_residual;a.dy+=a.dy_residual;a.bass_thresh=2*above(a.bass_att,a.bass_thresh)+(1-above(a.bass_att,a.bass_thresh))*(.96*(a.bass_thresh-1.3)+1.3);a.dx_residual=.016*equal(a.bass_thresh,2.13)*Math.sin(7*a.time)+(1-equal(a.bass_thresh,2.13))*a.dx_residual;a.dy_residual=.012*equal(a.bass_thresh,2.13)*Math.sin(9*a.time)+(1-equal(a.bass_thresh,2.13))*a.dy_residual;a.wave_x-=7*a.dx_residual;a.wave_y-=7*a.dy_residual;a.wave_mystery=.03*a.time;a.zoom+=.005*(.6*Math.sin(.1934*a.time+3)+.4*Math.sin(.307*
a.time+9));a.zoom+=.2*Math.max(0,a.bass_att-1.1);a.warp+=.5*Math.max(0,a.treb-1.1);`,pixel_eqs_str:"",pixel_eqs:"",warp:` shader_body { 
  vec3 ret_1;
  vec4 tmpvar_2;
  tmpvar_2 = texture (sampler_main, uv);
  ret_1 = (tmpvar_2.xyz + ((tmpvar_2.xyz - 
    ((texture (sampler_blur2, uv).xyz * scale2) + bias2)
  ) * 0.6));
  ret_1 = (ret_1 * 0.9);
  ret_1 = (ret_1 + ((
    ((texture (sampler_noise_lq, ((
      (uv_orig * texsize.xy)
     * 
      (texsize_noise_lq.zw * 0.4)
    ) + rand_frame.xy)).xyz - 0.5) / 256.0)
   * 12.0) * clamp (
    (treb_att - 1.0)
  , 0.0, 1.0)));
  vec3 tmpvar_3;
  tmpvar_3 = mix (ret_1, vec3(dot (ret_1, vec3(0.32, 0.49, 0.29))), vec3(0.04, 0.04, 0.04));
  ret_1 = tmpvar_3;
  vec4 tmpvar_4;
  tmpvar_4.w = 1.0;
  tmpvar_4.xyz = tmpvar_3;
  ret = tmpvar_4.xyz;
 }`,comp:` shader_body { 
  vec3 N_1;
  vec3 ret_2;
  vec2 tmpvar_3;
  tmpvar_3 = (vec2(1.0, 0.0) * texsize.zw);
  N_1.x = ((texture (sampler_main, (uv_orig + tmpvar_3)).xyz - texture (sampler_main, (uv_orig - tmpvar_3)).xyz).x * 0.8);
  vec2 tmpvar_4;
  tmpvar_4 = (vec2(0.0, 1.0) * texsize.zw);
  N_1.y = ((texture (sampler_main, (uv_orig + tmpvar_4)).xyz - texture (sampler_main, (uv_orig - tmpvar_4)).xyz).x * 0.8);
  N_1.x = (N_1.x + ((
    ((texture (sampler_blur1, (uv_orig + tmpvar_3)).xyz * scale1) + bias1)
   - 
    ((texture (sampler_blur1, (uv_orig - tmpvar_3)).xyz * scale1) + bias1)
  ).x * 0.2));
  N_1.y = (N_1.y + ((
    ((texture (sampler_blur1, (uv_orig + tmpvar_4)).xyz * scale1) + bias1)
   - 
    ((texture (sampler_blur1, (uv_orig - tmpvar_4)).xyz * scale1) + bias1)
  ).x * 0.2));
  N_1.z = -0.077;
  vec3 tmpvar_5;
  tmpvar_5 = normalize(N_1);
  N_1 = tmpvar_5;
  vec3 tmpvar_6;
  tmpvar_6.z = -0.8;
  tmpvar_6.x = q9;
  tmpvar_6.y = q10;
  vec3 tmpvar_7;
  tmpvar_7.z = 0.0;
  tmpvar_7.xy = ((uv_orig * 2.0) - 1.0);
  vec3 tmpvar_8;
  tmpvar_8 = normalize((tmpvar_6 - tmpvar_7));
  vec3 tmpvar_9;
  tmpvar_9 = normalize((tmpvar_7 - vec3(0.0, 0.0, 1.0)));
  ret_2 = (vec3(clamp (dot (tmpvar_5, tmpvar_8), 0.0, 1.0)) * vec3(1.2, 0.9, 0.7));
  ret_2 = (ret_2 * normalize((
    (texture (sampler_blur3, uv_orig).xyz * scale3)
   + bias3).yzx));
  ret_2 = (ret_2 + (pow (
    clamp (dot (normalize((tmpvar_9 + 
      ((2.0 * tmpvar_5) * dot (tmpvar_9, tmpvar_5))
    )), tmpvar_8), 0.0, 1.0)
  , 32.0) * 0.5));
  vec4 tmpvar_10;
  tmpvar_10.w = 1.0;
  tmpvar_10.xyz = ret_2;
  ret = tmpvar_10.xyz;
 }`}},function(o,l){o.exports={baseVals:{rating:0,gammaadj:1,decay:1,echo_zoom:1,wave_brighten:0,darken:1,wave_a:.001,wave_scale:.535239,wave_smoothing:0,wave_mystery:-.48,modwavealphastart:1,modwavealphaend:1.1,warpscale:3.138,fshader:1,zoom:1.023,warp:.122616,wave_g:.65,wave_b:0,mv_x:6.4,mv_y:48,mv_dx:.5,mv_dy:.5,mv_l:5,mv_r:.013716,mv_g:.872347,mv_b:.522466,mv_a:0},shapes:[{baseVals:{enabled:1,thickoutline:1,textured:1,rad:.746302,tex_zoom:.942039,g:1,b:1,r2:1,b2:1,a2:1,border_r:0,border_g:0,border_b:0,border_a:0},init_eqs_str:"a.val=0;",frame_eqs_str:"a.ang=.5*Math.sin(a.time)+.5;a.val=3;a.a2=.33*a.val;a.a=.33*a.val;a.rad=.4*Math.cos(.3*a.time)+.65;a.x=.25*Math.sin(.25*a.time)+.5;a.y=.25*Math.cos(.45*a.time)+.5;"},{baseVals:{enabled:1,thickoutline:1,textured:1,rad:.746302,tex_zoom:.942039,g:1,b:1,r2:1,b2:1,a2:1,border_r:0,border_g:0,border_b:0,border_a:0},init_eqs_str:"a.val=0;",frame_eqs_str:"a.ang=.5*Math.cos(.3*a.time)+.5;a.val=3;a.a2=.33*a.val;a.a=.33*a.val;a.rad=.4*Math.sin(.3*a.time)+.65;a.x=.25*Math.cos(.25*a.time)+.5;a.y=.25*Math.sin(.45*a.time)+.5;"},{baseVals:{enabled:1,thickoutline:1,rad:.364564,r:0,g2:0,a2:1,border_r:0,border_g:0,border_b:0,border_a:0},init_eqs_str:"a.h2=0;a.vr=0;a.vg=0;a.vb=0;a.dist=0;a.maat=0;",frame_eqs_str:"a.h2+=.8*above(a.treb,1.32)*.9;a.vr=.5*Math.sin(.8*a.h2)+.5;a.vg=.5*Math.sin(.5*a.h2)+.5;a.vb=.5*Math.sin(.1*a.h2)+.5;a.g=a.vg;a.r=a.vr;a.b=a.vb;a.g2=a.g;a.r2=a.r;a.b2=a.b;a.dist=.01*mod(a.frame,100);a.maat+=above(a.bass_att,1.5);a.maat*=below(a.maat,16);a.x=.00001<Math.abs(below(a.maat,8))?.00001<Math.abs(below(a.maat,4))?a.dist:1-a.dist:a.x;a.y=.00001<Math.abs(above(a.maat,8))?.00001<Math.abs(above(a.maat,4))?a.dist:1-a.dist:a.y;"},{baseVals:{enabled:0}}],waves:[{baseVals:{enabled:0}},{baseVals:{enabled:0}},{baseVals:{enabled:0}},{baseVals:{enabled:0}}],init_eqs_str:"a.dx_residual=0;a.dy_residual=0;a.bass_thresh=0;",frame_eqs_str:`a.wave_r=1;a.wave_g=0;a.wave_b=0;a.wave_r=sqrt(a.wave_r);a.wave_g=sqrt(a.wave_g);a.wave_b=sqrt(a.wave_b);a.rot+=.01*(.6*Math.sin(.381*a.time)+.4*Math.sin(.579*a.time));a.cx+=.21*(.6*Math.sin(.374*a.time)+.4*Math.sin(.294*a.time));a.cy+=.21*(.6*Math.sin(.393*a.time)+.4*Math.sin(.223*a.time));a.dx+=.003*(.6*Math.sin(.234*a.time)+.4*Math.sin(.277*a.time));a.dy+=.003*(.6*Math.sin(.284*a.time)+.4*Math.sin(.247*a.time));a.decay-=.01*equal(mod(a.frame,6),0);a.dx+=a.dx_residual;a.dy+=
a.dy_residual;a.bass_thresh=2*above(a.bass_att,a.bass_thresh)+(1-above(a.bass_att,a.bass_thresh))*(.96*(a.bass_thresh-1.3)+1.3);a.dx_residual=.016*equal(a.bass_thresh,2.13)*Math.sin(7*a.time)+(1-equal(a.bass_thresh,2.13))*a.dx_residual;a.dy_residual=.012*equal(a.bass_thresh,2.13)*Math.sin(9*a.time)+(1-equal(a.bass_thresh,2.13))*a.dy_residual;a.wave_x-=7*a.dx_residual;a.wave_y-=7*a.dy_residual;a.wave_mystery=.03*a.time;`,pixel_eqs_str:"",pixel_eqs:"",warp:` shader_body { 
  vec4 tmpvar_1;
  tmpvar_1.w = 1.0;
  tmpvar_1.xyz = (texture (sampler_main, (uv + (
    (texture (sampler_main, (uv + texsize.zw)).xy - 0.37)
   * 0.03))).xyz - 0.004);
  ret = tmpvar_1.xyz;
 }`,comp:` shader_body { 
  vec2 uv_1;
  vec3 ret_2;
  uv_1 = (0.05 + (0.9 * uv));
  ret_2 = (abs((
    ((texture (sampler_blur1, uv_1).xyz * scale1) + bias1)
   - texture (sampler_main, uv_1).xyz)) * 6.0);
  ret_2 = (ret_2 * 1.333);
  vec4 tmpvar_3;
  tmpvar_3.w = 1.0;
  tmpvar_3.xyz = ret_2;
  ret = tmpvar_3.xyz;
 }`}},function(o,l){o.exports={baseVals:{rating:5,gammaadj:1.7,echo_zoom:1.16936,wave_mode:2,wave_dots:1,wave_brighten:0,wave_a:.001,wave_scale:.011726,wave_smoothing:.9,zoom:.999902,warp:.01,wave_r:.5,wave_g:.4,wave_b:.3,ob_size:.0065,ib_size:.26,mv_x:0,mv_y:43.199997,mv_l:1,mv_g:.91,mv_b:.71,mv_a:0},shapes:[{baseVals:{enabled:0}},{baseVals:{enabled:0}},{baseVals:{enabled:0}},{baseVals:{enabled:0}}],waves:[{baseVals:{enabled:1,r:.1,b:.7},init_eqs_str:"a.n=0;a.yq=0;a.xp=0;a.t5=0;a.xs=0;a.yp=0;a.t1=0;a.q1=0;a.cosang=0;a.r1=0;a.g2=0;a.xq=0;a.t3=0;a.flip=0;a.t6=0;a.ys=0;a.zq=0;a.phs=0;a.r2=0;a.ang=0;a.sinang=0;a.tm=0;a.b2=0;a.t2=0;a.zp=0;a.g1=0;a.t4=0;a.b1=0;a.q8=0;",frame_eqs_str:"a.t1=.5*Math.sin(a.time)+.5;a.t2=.5*Math.sin(a.time+2.1)+.5;a.t3=.5*Math.sin(a.time+4.2)+.5;a.t4=.5*Math.sin(a.time+1.1)+.5;a.t5=.5*Math.sin(a.time+3.1)+.5;a.t6=.5*Math.sin(a.time+5.2)+.5;",point_eqs_str:`a.n=6.283*a.sample;a.phs=.2*-a.sample;a.tm=a.q1+a.phs;a.flip+=1;a.flip*=below(a.flip,2);a.xp=0;a.yp=.1*a.flip+.2*(.5*Math.sin(a.tm)+.5);a.zp=0;a.ang=.5*Math.sin(2*a.tm)+.5;a.xq=a.xp;a.sinang=Math.sin(a.ang);a.cosang=Math.cos(a.ang);a.yq=a.yp*a.sinang+a.zp*a.cosang;a.zq=a.yp*a.cosang-a.zp*a.sinang;a.yq=a.yp;a.zq=a.zp;a.ang=8*a.tm;a.sinang=Math.sin(a.ang);a.cosang=Math.cos(a.ang);a.xp=a.xq*a.sinang+a.yq*a.cosang;a.yp=a.xq*a.cosang-a.yq*a.sinang;a.zp=a.zq;a.zp-=.3;a.ang=3.14+1.5*
Math.sin(2*a.tm-.5);a.sinang=Math.sin(a.ang);a.cosang=Math.cos(a.ang);a.xq=a.xp;a.yq=a.yp*a.sinang+a.zp*a.cosang;a.zq=a.yp*a.cosang-a.zp*a.sinang;a.ang=-1+Math.cos(3.1*a.tm+.5);a.sinang=Math.sin(a.ang);a.cosang=Math.cos(a.ang);a.xp=a.xq*a.sinang+a.yq*a.cosang;a.yp=a.xq*a.cosang-a.yq*a.sinang;a.zp=a.zq;a.zp-=.35;a.ang=1.75*Math.cos(2.3*a.tm)-1.05;a.sinang=Math.sin(a.ang);a.cosang=Math.cos(a.ang);a.xq=a.xp*a.sinang+a.zp*a.cosang;a.yq=a.yp;a.zq=a.xp*a.cosang-a.zp*a.sinang;a.ang=.5*Math.cos(a.tm)-.5;
a.sinang=Math.sin(a.ang);a.cosang=Math.cos(a.ang);a.xp=a.xq;a.yp=a.yq*a.cosang-a.zq*a.sinang;a.zp=a.yq*a.sinang+a.zq*a.cosang;a.zp+=2;a.xs=div(a.xp,a.zp);a.ys=div(a.yp,a.zp);a.x=a.xs+.5;a.y=1.3*a.ys+.5;a.a=.00001<Math.abs(equal(a.q8,1))?1-a.sample:a.sample;a.a*=a.a;a.b+=.3*pow(1-a.sample,2);a.r1=a.t1;a.g1=a.t2;a.b1=a.t3;a.r2=a.t4;a.g2=a.t5;a.b2=a.t6;a.r=a.r1*a.flip+a.r2*(1-a.flip);a.g=a.g1*a.flip+a.g2*(1-a.flip);a.b=a.b1*a.flip+a.b2*(1-a.flip);`},{baseVals:{enabled:1,r:.2,b:.6},init_eqs_str:"a.n=0;a.yq=0;a.xp=0;a.t5=0;a.xs=0;a.yp=0;a.t1=0;a.q1=0;a.cosang=0;a.r1=0;a.g2=0;a.xq=0;a.t3=0;a.flip=0;a.t6=0;a.ys=0;a.zq=0;a.phs=0;a.r2=0;a.ang=0;a.sinang=0;a.tm=0;a.b2=0;a.t2=0;a.zp=0;a.g1=0;a.t4=0;a.b1=0;a.q8=0;",frame_eqs_str:"a.t1=.5*Math.sin(a.time)+.5;a.t2=.5*Math.sin(a.time+2.1)+.5;a.t3=.5*Math.sin(a.time+4.2)+.5;a.t4=.5*Math.sin(a.time+1.1)+.5;a.t5=.5*Math.sin(a.time+3.1)+.5;a.t6=.5*Math.sin(a.time+5.2)+.5;",point_eqs_str:`a.n=6.283*a.sample;a.phs=.2*-a.sample;a.tm=a.q1+a.phs;a.flip+=1;a.flip*=below(a.flip,2);a.xp=0;a.yp=.1*a.flip+.2*(.5*Math.sin(a.tm)+.5)+.1;a.yp=-a.yp;a.zp=0;a.ang=.5*Math.sin(2*a.tm)+.5;a.sinang=Math.sin(a.ang);a.cosang=Math.cos(a.ang);a.xq=a.xp;a.yq=a.yp*a.sinang+a.zp*a.cosang;a.zq=a.yp*a.cosang-a.zp*a.sinang;a.yq=a.yp;a.zq=a.zp;a.ang=8*a.tm;a.sinang=Math.sin(a.ang);a.cosang=Math.cos(a.ang);a.xp=a.xq*a.sinang+a.yq*a.cosang;a.yp=a.xq*a.cosang-a.yq*a.sinang;a.zp=a.zq;a.zp-=.3;
a.ang=3.14+1.5*Math.sin(2*a.tm-.5);a.sinang=Math.sin(a.ang);a.cosang=Math.cos(a.ang);a.xq=a.xp;a.yq=a.yp*a.sinang+a.zp*a.cosang;a.zq=a.yp*a.cosang-a.zp*a.sinang;a.ang=-1+Math.cos(3.1*a.tm+.5);a.sinang=Math.sin(a.ang);a.cosang=Math.cos(a.ang);a.xp=a.xq*a.sinang+a.yq*a.cosang;a.yp=a.xq*a.cosang-a.yq*a.sinang;a.zp=a.zq;a.zp-=.35;a.ang=1.75*Math.cos(2.3*a.tm)-1.05;a.sinang=Math.sin(a.ang);a.cosang=Math.cos(a.ang);a.xq=a.xp*a.sinang+a.zp*a.cosang;a.yq=a.yp;a.zq=a.xp*a.cosang-a.zp*a.sinang;a.ang=.5*Math.cos(a.tm)-
.5;a.sinang=Math.sin(a.ang);a.cosang=Math.cos(a.ang);a.xp=a.xq;a.yp=a.yq*a.cosang-a.zq*a.sinang;a.zp=a.yq*a.sinang+a.zq*a.cosang;a.zp+=2;a.xs=div(a.xp,a.zp);a.ys=div(a.yp,a.zp);a.x=a.xs+.5;a.y=1.3*a.ys+.5;a.a=.00001<Math.abs(equal(a.q8,1))?1-a.sample:a.sample;a.a*=a.a;a.b+=.3*pow(1-a.sample,2);a.r1=a.t1;a.g1=a.t2;a.b1=a.t3;a.r2=a.t4;a.g2=a.t5;a.b2=a.t6;a.r=a.r1*a.flip+a.r2*(1-a.flip);a.g=a.g1*a.flip+a.g2*(1-a.flip);a.b=a.b1*a.flip+a.b2*(1-a.flip);`},{baseVals:{enabled:0}},{baseVals:{enabled:0}}],init_eqs_str:"a.movement=0;a.q1=0;",frame_eqs_str:"a.movement=a.movement+.01*(a.bass+a.bass_att)+.001*pow(a.bass+1,3);a.q1=a.movement;a.monitor=a.q1;",pixel_eqs_str:"",pixel_eqs:"",warp:` shader_body { 
  vec3 ret_1;
  ret_1 = texture (sampler_main, uv).xyz;
  vec2 tmpvar_2;
  tmpvar_2 = (normalize((uv - uv_orig)) * texsize.zw);
  vec4 tmpvar_3;
  tmpvar_3.w = 0.0;
  tmpvar_3.xyz = ret_1;
  vec4 tmpvar_4;
  tmpvar_4.w = 0.0;
  tmpvar_4.xyz = max (tmpvar_3, (texture (sampler_main, (uv - tmpvar_2)) * 0.9)).xyz;
  vec4 tmpvar_5;
  tmpvar_5.w = 0.0;
  tmpvar_5.xyz = max (tmpvar_4, (texture (sampler_main, (uv + tmpvar_2)) * 0.97)).xyz;
  vec4 tmpvar_6;
  tmpvar_6.w = 0.0;
  tmpvar_6.xyz = max (tmpvar_5, (texture (sampler_main, (uv + 
    (tmpvar_2 * 2.0)
  )) * 0.97)).xyz;
  ret_1 = (max (tmpvar_6, (texture (sampler_main, 
    (uv + (tmpvar_2 * 3.0))
  ) * 0.9)).xyz * 0.92);
  vec4 tmpvar_7;
  tmpvar_7.w = 1.0;
  tmpvar_7.xyz = ret_1;
  ret = tmpvar_7.xyz;
 }`,comp:` shader_body { 
  vec2 uv_1;
  vec3 ret_2;
  uv_1 = (0.05 + (0.9 * uv));
  ret_2 = (abs((
    ((texture (sampler_blur1, uv_1).xyz * scale1) + bias1)
   - texture (sampler_main, uv_1).xyz)) * 6.0);
  ret_2 = (ret_2 * 1.333);
  vec4 tmpvar_3;
  tmpvar_3.w = 1.0;
  tmpvar_3.xyz = ret_2;
  ret = tmpvar_3.xyz;
 }`}},function(o,l){o.exports={baseVals:{rating:5,gammaadj:1,decay:1,echo_zoom:1,echo_orient:3,wave_mode:1,wave_thick:1,wrap:0,darken_center:1,wave_a:.3,wave_scale:.881,wave_smoothing:.5,wave_mystery:-1,warpscale:2.853,zoomexp:3.6,zoom:1.02109,rot:-.16,warp:.309,wave_r:.6,wave_g:.6,wave_b:.6,wave_y:.47,mv_l:1.75},shapes:[{baseVals:{enabled:0}},{baseVals:{enabled:0}},{baseVals:{enabled:0}},{baseVals:{enabled:0}}],waves:[{baseVals:{enabled:0}},{baseVals:{enabled:0}},{baseVals:{enabled:0}},{baseVals:{enabled:0}}],init_eqs_str:"a.q8=0;a.oldq8=0;",frame_eqs_str:`a.wave_r+=.4*(.6*Math.sin(.933*a.time)+.4*Math.sin(1.045*a.time));a.wave_g+=.4*(.6*Math.sin(.9*a.time)+.4*Math.sin(.956*a.time));a.wave_b+=.4*(.6*Math.sin(.91*a.time)+.4*Math.sin(.92*a.time));a.q8=a.oldq8+(.00001<Math.abs(above(a.bass+a.bass_att,1.8))?a.q8+.0005*pow(a.bass+a.bass_att-1,9):0);a.oldq8=a.q8;a.monitor=a.q8;a.zoom+=.023*(.6*Math.sin(.339*a.q8)+.4*Math.sin(.276*a.q8));a.rot+=.03*(.6*Math.sin(.381*a.q8)+.4*Math.sin(.579*a.q8));a.mv_r=a.wave_r;a.mv_b=a.wave_b;a.mv_g=
a.wave_g;a.mv_x=1.25;a.mv_y=1.25;a.mv_dx=.1*Math.sin(1.1*a.time);a.mv_dy=.1*Math.cos(1.112*a.time);`,pixel_eqs_str:"a.rot+=div(1,10*(a.rad+.2+.1*Math.sin(a.q8)));",warp:"",comp:` shader_body { 
  vec4 tmpvar_1;
  tmpvar_1 = texture (sampler_main, uv);
  vec4 tmpvar_2;
  tmpvar_2.w = 1.0;
  tmpvar_2.xyz = (tmpvar_1.xyz * (1.0 + (
    (abs((fract(
      (tmpvar_1.xyz * 8.0)
    ) - 0.5)) - 0.25)
   * 0.4)));
  ret = tmpvar_2.xyz;
 }`}},function(o,l){o.exports={baseVals:{rating:5,gammaadj:2.001,decay:.95,echo_zoom:.9996,wave_mode:1,wrap:0,wave_a:3.072644,wave_scale:1.285746,wave_smoothing:0,modwavealphastart:.71,modwavealphaend:1.3,warpscale:1.331,zoom:.999513,warp:.0101,wave_r:.65,wave_g:.65,wave_b:.65,ob_size:.005,ob_a:.8,ib_size:0,mv_a:0},shapes:[{baseVals:{enabled:0}},{baseVals:{enabled:0}},{baseVals:{enabled:0}},{baseVals:{enabled:0}}],waves:[{baseVals:{enabled:0}},{baseVals:{enabled:0}},{baseVals:{enabled:0}},{baseVals:{enabled:0}}],init_eqs_str:"",frame_eqs_str:"a.wave_r+=.5*Math.sin(1.13*a.time);a.wave_g+=.5*Math.sin(1.23*a.time);a.wave_b+=.5*Math.sin(1.33*a.time);",pixel_eqs_str:"a.zoom+=.05*(Math.sin(6*a.ang)+.3*Math.sin(Math.sin(2*a.time*Math.sin(a.time)*a.rad))-.1*Math.cos(a.rad));a.rot+=.5*Math.sin(.5-a.rad)*Math.cos(.02*(.5-a.rad)+a.time);a.sx+=.01*(.99-a.rad)*Math.sin(.733*a.time)*below(Math.sin(a.time),0);a.sy+=.01*(.99-a.rad)*Math.cos(.953*a.time)*above(Math.sin(a.time),0);a.zoom-=.05*(1-a.rad)*below(a.rad,.5);",warp:` shader_body { 
  vec4 tmpvar_1;
  tmpvar_1.w = 1.0;
  tmpvar_1.xyz = (texture (sampler_main, (uv + (
    (texture (sampler_main, (uv + texsize.zw)).xy - 0.37)
   * 0.03))).xyz - 0.004);
  ret = tmpvar_1.xyz;
 }`,comp:` shader_body { 
  vec2 uv_1;
  vec3 ret_2;
  uv_1 = (0.03 + (0.94 * uv));
  vec2 tmpvar_3;
  tmpvar_3 = (texsize.zw * 0.7);
  ret_2 = (texture (sampler_main, (uv_1 + (tmpvar_3 * vec2(3.5, 0.0)))).xyz * 3.0);
  ret_2 = (ret_2 + (texture (sampler_main, (uv_1 + 
    (tmpvar_3 * vec2(0.0, 3.5))
  )).xyz * 3.0));
  ret_2 = (ret_2 + (texture (sampler_main, (uv_1 + 
    (tmpvar_3 * vec2(0.0, -3.5))
  )).xyz * -2.0));
  ret_2 = (ret_2 + (texture (sampler_main, (uv_1 + 
    (tmpvar_3 * vec2(-3.5, 0.0))
  )).xyz * -2.0));
  ret_2 = (ret_2 / 2.0);
  ret_2 = (ret_2 * (1.0 + (0.15 * 
    ((texture (sampler_noise_lq, (rand_frame.xy + (
      (uv_1 * texsize.xy)
     * texsize_noise_lq.zw))).xxx * 2.0) - 1.0)
  )));
  vec3 tmpvar_4;
  tmpvar_4 = pow (ret_2, vec3(0.5, 0.8, 1.0));
  ret_2 = tmpvar_4;
  vec4 tmpvar_5;
  tmpvar_5.w = 1.0;
  tmpvar_5.xyz = tmpvar_4;
  ret = tmpvar_5.xyz;
 }`}},function(o,l){o.exports={baseVals:{rating:0,gammaadj:1,decay:.97,echo_zoom:1,echo_alpha:.5,echo_orient:3,wave_mode:2,wave_brighten:0,wrap:0,wave_a:100,wave_scale:.797,wave_smoothing:.5,modwavealphastart:.5,modwavealphaend:1,dx:1e-5,dy:1e-5,warp:.01,wave_r:.5,wave_g:.5,wave_b:.5,ob_size:.005,ob_a:1,ib_r:0,ib_g:0,ib_b:0,ib_a:.1,mv_x:0,mv_y:0,mv_l:1,mv_a:0},shapes:[{baseVals:{enabled:0}},{baseVals:{enabled:0}},{baseVals:{enabled:0}},{baseVals:{enabled:0}}],waves:[{baseVals:{enabled:0}},{baseVals:{enabled:0}},{baseVals:{enabled:0}},{baseVals:{enabled:0}}],init_eqs_str:"a.thresh=0;a.dx_r=0;a.dy_r=0;",frame_eqs_str:"a.warp=0;a.ob_r=a.ob_r+.8*Math.sin(1.1*a.time)+1.1*Math.cos(2*a.time);a.ob_b=a.ob_b+.9*Math.sin(1.2*a.time)+Math.cos(1.5*a.time);a.ob_g=a.ob_g+.7*Math.sin(a.time)+Math.sin(.4*a.time);a.wave_r=Math.abs(a.ob_r+.2);a.wave_g=Math.abs(a.ob_g+.2);a.wave_b=Math.abs(a.ob_b+.2);a.ib_b=a.ib_b+.44*Math.cos(1.5*a.time)+.7*Math.tan(a.time);a.ib_g+=2*Math.sin(a.time*a.bass_att);a.ib_r=a.ib_r+.8*Math.sin(1.2*a.time)+1.3*Math.cos(1.8*a.time);",pixel_eqs_str:`a.thresh=2*above(a.bass_att,a.thresh)+(1-above(a.bass_att,a.thresh))*(.96*(a.thresh-1.3)+1.3);a.dx_r=.015*equal(a.thresh,2)*Math.sin(5*a.time)+(1-equal(a.thresh,2))*a.dx_r;a.dy_r=.015*equal(a.thresh,2)*Math.sin(6*a.time)+(1-equal(a.thresh,2))*a.dy_r;a.zoom+=.07*a.treb*Math.abs(Math.sin(a.time*a.rad))*(.3-a.rad);a.dy+=a.dy_r*below(a.rad,.5-.2*a.time);a.dx+=a.dx_r*below(a.rad,.5-.2*a.time);a.rot+=.7*a.bass_att*Math.sin(Math.abs(a.dx_r*(1-a.rad)*2*a.time+Math.cos(12*a.rad)))*.2;
`,warp:` shader_body { 
  vec3 ret_1;
  vec4 tmpvar_2;
  tmpvar_2 = texture (sampler_main, uv);
  ret_1 = (tmpvar_2.xyz + ((tmpvar_2.xyz - 
    ((texture (sampler_blur1, uv).xyz * scale1) + bias1)
  ) * 0.3));
  ret_1 = (ret_1 * 0.9);
  ret_1 = (ret_1 + ((
    (texture (sampler_noise_lq, ((uv_orig * texsize.xy) * (texsize_noise_lq.zw * 0.1))).xyz - 0.5)
   / 256.0) * 28.0));
  vec3 tmpvar_3;
  tmpvar_3 = mix (ret_1, vec3(dot (ret_1, vec3(0.32, 0.49, 0.29))), vec3(0.04, 0.04, 0.04));
  ret_1 = tmpvar_3;
  vec4 tmpvar_4;
  tmpvar_4.w = 1.0;
  tmpvar_4.xyz = tmpvar_3;
  ret = tmpvar_4.xyz;
 }`,comp:""}},function(o,l){o.exports={baseVals:{rating:4,gammaadj:1,decay:1,echo_zoom:1,echo_alpha:.5,additivewave:1,modwavealphabyvolume:1,wave_a:.009,wave_scale:2.713,wave_smoothing:0,modwavealphastart:1.2,modwavealphaend:1.2,warpanimspeed:1.459,warpscale:2.007,zoom:.9999,warp:.01,sx:.9999,wave_r:.44,wave_g:.4,ob_size:.015,ob_b:1,ib_size:.26,mv_x:64,mv_y:48,mv_l:.85,mv_r:.5,mv_g:.5,mv_b:.5,mv_a:0,b1ed:0},shapes:[{baseVals:{enabled:1,sides:3,additive:1,num_inst:175,rad:.20065,ang:.75398,tex_ang:3.14159,tex_zoom:.99979,r:0,g2:0,border_r:.01,border_g:0,border_a:1},init_eqs_str:"a.my_z=0;a.d=0;a.y3=0;a.z2=0;a.y1=0;a.w=0;a.q12=0;a.w2=0;a.x1=0;a.q13=0;a.q15=0;a.dy1=0;a.zoom=0;a.p=0;a.q5=0;a.dz1=0;a.z3=0;a.w3=0;a.my_x=0;a.x3=0;a.my_y=0;a.q11=0;a.dd=0;a.q4=0;a.yy1=0;a.q16=0;a.w1=0;a.x2=0;a.q17=0;a.l=0;a.y2=0;a.dx1=0;a.zz1=0;a.q14=0;a.z1=0;a.q3=0;a.q32=0;a.xx1=0;",frame_eqs_str:`a.xx1=.00001<Math.abs(equal(a.instance,0))?a.q11:a.xx1;a.yy1=.00001<Math.abs(equal(a.instance,0))?a.q12:a.yy1;a.zz1=.00001<Math.abs(equal(a.instance,0))?a.q13:a.zz1;a.dx1=a.q14*(a.yy1-a.xx1);a.dy1=a.xx1*(a.q15-a.zz1)-a.yy1;a.dz1=a.xx1*a.yy1-a.q16*a.zz1;a.dd=sqrt(a.dx1*a.dx1+a.dy1*a.dy1+a.dz1*a.dz1);a.xx1+=div(a.q17*a.dx1,a.dd);a.yy1+=div(a.q17*a.dy1,a.dd);a.zz1+=div(a.q17*a.dz1,a.dd);a.my_x=.1*a.xx1;a.my_y=.1*a.yy1;a.my_z=.1*a.zz1-3;a.d=4.75;a.zoom=.55+.25*Math.sin(.5*a.q32);
a.w1=a.q3;a.w2=a.q4;a.w3=a.q5;a.x1=Math.cos(a.w1)*a.my_x+Math.sin(a.w1)*a.my_y;a.y1=-Math.sin(a.w1)*a.my_x+Math.cos(a.w1)*a.my_y;a.z1=a.my_z;a.x2=Math.cos(a.w2)*a.x1+Math.sin(a.w2)*a.z1;a.z2=-Math.sin(a.w2)*a.x1+Math.cos(a.w2)*a.z1;a.y2=a.y1;a.y3=Math.cos(a.w3)*a.y2+Math.sin(a.w3)*a.z2;a.z3=-Math.sin(a.w3)*a.y2+Math.cos(a.w3)*a.z2;a.x3=a.x2;a.l=sqrt(a.x3*a.x3+a.y3*a.y3);a.w=Math.atan2(a.x3,a.y3);a.p=Math.tan(Math.asin(1)+Math.atan2(a.d+a.z3,a.l));a.d=sqrt(a.x3*a.x3+a.y3*a.y3+(a.z3+a.d)*(a.z3+a.d));
a.my_x=a.zoom*Math.sin(a.w)*a.p;a.my_y=a.zoom*Math.cos(a.w)*a.p;a.x=.5+a.my_x;a.y=.5+a.my_y;a.rad=div(a.rad,a.d);a.ang-=div(a.instance,a.num_inst)*Math.asin(1)*8;`},{baseVals:{enabled:0}},{baseVals:{enabled:0}},{baseVals:{enabled:0}}],waves:[{baseVals:{enabled:0}},{baseVals:{enabled:0}},{baseVals:{enabled:0}},{baseVals:{enabled:0}}],init_eqs_str:"a.index2=0;a.index=0;a.q12=0;a.q22=0;a.q21=0;a.q13=0;a.q6=0;a.q1=0;a.dec_med=0;a.q5=0;a.movz=0;a.trel=0;a.q9=0;a.rott=0;a.vol__=0;a.is_beat=0;a.q23=0;a.k1=0;a.q24=0;a.trel_=0;a.vx=0;a.dec_slow=0;a.q11=0;a.q10=0;a.vy=0;a.q4=0;a.dir=0;a.dir_=0;a.p2=0;a.avg=0;a.trig=0;a.beat=0;a.vol=0;a.p1=0;a.peak=0;a.dec_fast=0;a.q2=0;a.q27=0;a.q3=0;a.t0=0;a.vol_=0;a.q7=0;a.q28=0;a.q20=0;a.q8=0;a.step=0;",frame_eqs_str:`a.dec_med=pow(.9,div(30,a.fps));a.dec_slow=pow(.96,div(30,a.fps));a.dec_fast=pow(.6,div(30,a.fps));a.beat=Math.max(Math.max(a.bass,a.mid),a.treb);a.avg=a.avg*a.dec_slow+a.beat*(1-a.dec_slow);a.is_beat=above(a.beat,0+a.avg+a.peak)*above(a.time,a.t0+.1);a.t0=a.is_beat*a.time+(1-a.is_beat)*a.t0;a.peak=a.is_beat*a.beat+(1-a.is_beat)*a.peak*a.dec_med;a.index=mod(a.index+a.is_beat,16);a.index2=mod(a.index2+a.is_beat*bnot(a.index),8);a.q20=a.avg;a.q21=a.beat;a.q22=a.peak;a.q24=a.is_beat;
a.vol=a.bass_att+a.mid_att+a.treb_att;a.vol_=a.dec_med*a.vol_+(1-a.dec_med)*a.vol;a.vol__=a.dec_med*a.vol__+(1-a.dec_med)*a.vol_;a.q27=a.index+1;a.q28=a.index2+1;a.q23=a.q22-div(.1,a.q22);a.q23=Math.max(a.q23,1);a.k1=a.is_beat*equal(mod(a.index,8),0);a.p1=a.k1*(a.p1+1)+(1-a.k1)*a.p1;a.p2=a.dec_fast*a.p2+(1-a.dec_fast)*a.p1;a.rott=div(3.1416*a.p2,4);a.q1=Math.cos(a.rott);a.q2=Math.sin(a.rott);a.q3=-a.q2;a.q4=a.q1;a.trig=a.q24*bnot(mod(a.index,2));a.vx=a.vx*bnot(a.trig)+a.trig*(div(Math.floor(randint(100)),
100)-.5);a.vy=a.vy*bnot(a.trig)+a.trig*(div(Math.floor(randint(100)),100)-.5);a.q10=.2+a.vy*a.vy*2;a.q11=div(Math.sin(div(a.time,9)),2)+.4;a.movz-=div(1,a.fps)*(.3+a.vx);a.q9=a.movz;a.q12=2*Math.min(a.q22,6);a.q13=Math.min(2,1+Math.abs(8*a.vy*a.vx));a.dir_=a.bass-1;a.trig=bnot(mod(a.index,4))*a.q24;a.dir=bnot(a.trig)*a.dir+a.trig*(Math.floor(randint(10))-5);a.trel+=div(.1,a.fps)*a.dir;a.trel_=a.dec_med*a.trel_+(1-a.dec_med)*a.trel;a.q5=Math.cos(a.trel_);a.q6=Math.sin(a.trel_+0*a.q27*mod(a.q28,2));
a.q7=-a.q6;a.q8=a.q5;a.zoom=1.02;a.rot=.5*Math.sin(bnot(mod(a.q28,2))*a.q28);a.rot=0*Math.sin(div(a.time,3));a.dx=0;a.monitor=a.q11;`,pixel_eqs_str:"",pixel_eqs:"",warp:` shader_body { 
  vec2 tmpvar_1;
  tmpvar_1 = ((uv * texsize.xy) * 0.08);
  vec3 tmpvar_2;
  tmpvar_2 = (texture (sampler_main, (uv - (
    ((sin(tmpvar_1) / cos(tmpvar_1)) * texsize.zw)
   * 3.0))).xyz + (vec3(dot (texture (sampler_noise_lq, 
    ((((texsize.xy * texsize_noise_lq.zw).x * uv) * 0.02) + (0.1 * rand_frame).xy)
  ), vec4(0.32, 0.49, 0.29, 0.0))) / 30.0));
  vec4 tmpvar_3;
  tmpvar_3.w = 1.0;
  tmpvar_3.xyz = ((mix (tmpvar_2, 
    (1.0 - tmpvar_2.zyx)
  , vec3(0.01, 0.01, 0.01)) - 0.03) - (0.2 * pow (
    (1.0 - rad)
  , 18.0)));
  ret = tmpvar_3.xyz;
 }`,comp:`vec3 xlat_mutableneu;
vec2 xlat_mutablers0;
vec2 xlat_mutablerss;
vec2 xlat_mutableuv2;
 shader_body { 
  vec2 uv_1;
  vec2 ofs_2;
  vec3 ret1_3;
  uv_1 = ((uv - 0.5) * aspect.xy);
  vec2 tmpvar_4;
  tmpvar_4.x = q5;
  tmpvar_4.y = q6;
  uv_1 = (uv_1 + (tmpvar_4 / 4.0));
  mat2 tmpvar_5;
  tmpvar_5[uint(0)] = _qb.xy;
  tmpvar_5[1u] = _qb.zw;
  uv_1 = (uv_1 * tmpvar_5);
  float tmpvar_6;
  float tmpvar_7;
  tmpvar_7 = (min (abs(
    (uv_1.y / uv_1.x)
  ), 1.0) / max (abs(
    (uv_1.y / uv_1.x)
  ), 1.0));
  float tmpvar_8;
  tmpvar_8 = (tmpvar_7 * tmpvar_7);
  tmpvar_8 = (((
    ((((
      ((((-0.01213232 * tmpvar_8) + 0.05368138) * tmpvar_8) - 0.1173503)
     * tmpvar_8) + 0.1938925) * tmpvar_8) - 0.3326756)
   * tmpvar_8) + 0.9999793) * tmpvar_7);
  tmpvar_8 = (tmpvar_8 + (float(
    (abs((uv_1.y / uv_1.x)) > 1.0)
  ) * (
    (tmpvar_8 * -2.0)
   + 1.570796)));
  tmpvar_6 = (tmpvar_8 * sign((uv_1.y / uv_1.x)));
  if ((abs(uv_1.x) > (1e-08 * abs(uv_1.y)))) {
    if ((uv_1.x < 0.0)) {
      if ((uv_1.y >= 0.0)) {
        tmpvar_6 += 3.141593;
      } else {
        tmpvar_6 = (tmpvar_6 - 3.141593);
      };
    };
  } else {
    tmpvar_6 = (sign(uv_1.y) * 1.570796);
  };
  xlat_mutablers0.x = (((tmpvar_6 / 3.1416) * 6.0) * q28);
  xlat_mutablers0.y = inversesqrt(dot (uv_1, uv_1));
  vec2 tmpvar_9;
  tmpvar_9.x = (xlat_mutablers0.x + (q9 * 8.0));
  tmpvar_9.y = (xlat_mutablers0.y + ((q9 * q28) * 4.0));
  xlat_mutablerss = (tmpvar_9 / 12.0);
  vec2 tmpvar_10;
  tmpvar_10.x = q5;
  tmpvar_10.y = q6;
  ofs_2 = (0.1 * tmpvar_10.yx);
  float tmpvar_11;
  float tmpvar_12;
  tmpvar_12 = -(q9);
  tmpvar_11 = fract(tmpvar_12);
  mat2 tmpvar_13;
  tmpvar_13[uint(0)].x = 1.0;
  tmpvar_13[uint(0)].y = -0.0;
  tmpvar_13[1u].x = 0.0;
  tmpvar_13[1u].y = 1.0;
  xlat_mutableuv2 = ((uv_1 * (
    (q13 * tmpvar_11)
   * tmpvar_13)) * aspect.yx);
  vec2 tmpvar_14;
  tmpvar_14 = fract(((xlat_mutableuv2 + 0.5) + ofs_2));
  xlat_mutableneu = (texture (sampler_main, tmpvar_14).xyz + ((texture (sampler_blur1, tmpvar_14).xyz * scale1) + bias1));
  ret1_3 = max (vec3(0.0, 0.0, 0.0), ((xlat_mutableneu * 
    (1.0 - (tmpvar_11 * tmpvar_11))
  ) * 2.0));
  float tmpvar_15;
  tmpvar_15 = fract((tmpvar_12 + 0.3333333));
  mat2 tmpvar_16;
  tmpvar_16[uint(0)].x = -0.4990803;
  tmpvar_16[uint(0)].y = -0.8665558;
  tmpvar_16[1u].x = 0.8665558;
  tmpvar_16[1u].y = -0.4990803;
  xlat_mutableuv2 = ((uv_1 * (
    (q13 * tmpvar_15)
   * tmpvar_16)) * aspect.yx);
  vec2 tmpvar_17;
  tmpvar_17 = fract(((xlat_mutableuv2 + 0.5) + ofs_2));
  xlat_mutableneu = (texture (sampler_main, tmpvar_17).xyz + ((texture (sampler_blur1, tmpvar_17).xyz * scale1) + bias1));
  ret1_3 = max (ret1_3, ((xlat_mutableneu * 
    (1.0 - (tmpvar_15 * tmpvar_15))
  ) * 2.0));
  float tmpvar_18;
  tmpvar_18 = fract((tmpvar_12 + 0.6666667));
  mat2 tmpvar_19;
  tmpvar_19[uint(0)].x = -0.5018377;
  tmpvar_19[uint(0)].y = 0.8649619;
  tmpvar_19[1u].x = -0.8649619;
  tmpvar_19[1u].y = -0.5018377;
  xlat_mutableuv2 = ((uv_1 * (
    (q13 * tmpvar_18)
   * tmpvar_19)) * aspect.yx);
  vec2 tmpvar_20;
  tmpvar_20 = fract(((xlat_mutableuv2 + 0.5) + ofs_2));
  xlat_mutableneu = (texture (sampler_main, tmpvar_20).xyz + ((texture (sampler_blur1, tmpvar_20).xyz * scale1) + bias1));
  ret1_3 = max (ret1_3, ((xlat_mutableneu * 
    (1.0 - (tmpvar_18 * tmpvar_18))
  ) * 2.0));
  float tmpvar_21;
  tmpvar_21 = fract((tmpvar_12 + 1.0));
  mat2 tmpvar_22;
  tmpvar_22[uint(0)].x = 0.9999949;
  tmpvar_22[uint(0)].y = 0.003185092;
  tmpvar_22[1u].x = -0.003185092;
  tmpvar_22[1u].y = 0.9999949;
  xlat_mutableuv2 = ((uv_1 * (
    (q13 * tmpvar_21)
   * tmpvar_22)) * aspect.yx);
  vec2 tmpvar_23;
  tmpvar_23 = fract(((xlat_mutableuv2 + 0.5) + ofs_2));
  xlat_mutableneu = (texture (sampler_main, tmpvar_23).xyz + ((texture (sampler_blur1, tmpvar_23).xyz * scale1) + bias1));
  ret1_3 = max (ret1_3, ((xlat_mutableneu * 
    (1.0 - (tmpvar_21 * tmpvar_21))
  ) * 2.0));
  vec2 tmpvar_24;
  tmpvar_24.x = (ret1_3.x + ret1_3.z);
  tmpvar_24.y = (ret1_3.x - ret1_3.y);
  vec4 tmpvar_25;
  tmpvar_25.w = 1.0;
  tmpvar_25.xyz = ((ret1_3 + (
    ((bass_att * 0.004) / sqrt(dot (uv_1, uv_1)))
   * roam_sin).xyz) + ((2.0 * 
    (bass_att * ((texture (sampler_blur1, fract(
      (xlat_mutablerss + (tmpvar_24 / 2.0))
    )).xyz * scale1) + bias1).zxy)
  ) * clamp (
    (1.0 - (ret1_3 * 4.0))
  , 0.0, 1.0)));
  ret = tmpvar_25.xyz;
 }`}},function(o,l){o.exports={baseVals:{rating:0,gammaadj:1.14,decay:1,echo_zoom:1,wave_mode:6,wave_thick:1,wave_brighten:0,wrap:0,darken:1,wave_a:1.17,wave_scale:.797,wave_smoothing:0,modwavealphastart:.71,modwavealphaend:1.3,warpscale:1.331,zoomexp:.9995,zoom:.9998,rot:.02,dy:-.008,warp:.01,sx:1.0098,wave_r:.5,wave_g:.5,wave_b:.5,wave_x:.9,ob_size:.005,ob_a:.8,ib_size:0,ib_r:0,ib_g:0,ib_b:0,ib_a:1,mv_x:44.8,mv_y:38.4,mv_l:5,mv_g:.91,mv_b:.71,mv_a:0},shapes:[{baseVals:{enabled:0}},{baseVals:{enabled:0}},{baseVals:{enabled:0}},{baseVals:{enabled:0}}],waves:[{baseVals:{enabled:0}},{baseVals:{enabled:0}},{baseVals:{enabled:0}},{baseVals:{enabled:0}}],init_eqs_str:"a.q12=0;a.q18=0;a.q6=0;a.bass_thresh=0;a.wg=0;a.q11=0;a.q10=0;a.wb=0;a.q17=0;a.vol=0;a.q2=0;a.q3=0;a.wr=0;a.q7=0;a.q8=0;",frame_eqs_str:`a.wave_r+=.3*Math.sin(50*a.vol);a.wave_b+=.3*Math.sin(20*a.vol);a.wave_g+=.5*Math.sin(35*a.vol);a.q8=a.wave_r;a.q7=a.wave_b;a.q6=a.wave_g;a.wr=.5+.4*(.6*Math.sin(1.1*a.time)+.4*Math.sin(.8*a.time));a.wb=.5+.4*(.6*Math.sin(1.6*a.time)+.4*Math.sin(.5*a.time));a.wg=.5+.4*(.6*Math.sin(1.34*a.time)+.4*Math.sin(.4*a.time));a.monitor=a.wg;a.q10=a.wr;a.q11=a.wb;a.q12=a.wg;a.q18=.007*Math.sin(.1*a.time);a.q17=-.007*Math.sin(.254*a.time);a.q2=a.bass_thresh;a.vol=.25*(a.bass+a.mid+a.treb);
a.vol*=a.vol;a.q3=a.vol;a.warp=0;`,pixel_eqs_str:"",pixel_eqs:"",warp:` shader_body { 
  vec3 noise3_1;
  vec3 tmpvar_2;
  tmpvar_2 = (texture (sampler_main, uv).xyz + ((texture (sampler_blur1, uv).xyz * scale1) + bias1));
  vec2 tmpvar_3;
  tmpvar_3 = (0.5 + ((
    (uv - vec2(0.0, 1.0))
   - 0.5) * (1.0 + 
    (tmpvar_2.y * 0.03)
  )));
  vec2 tmpvar_4;
  tmpvar_4.x = (tmpvar_3.x + pow (tmpvar_2.x, 0.0));
  tmpvar_4.y = (tmpvar_3.y + pow (tmpvar_2.x, 0.005));
  noise3_1 = (texture (sampler_noise_lq, ((
    (uv_orig * texsize.xy)
   * texsize_noise_lq.zw) + rand_frame.xy)).xyz * fract(q15));
  vec3 tmpvar_5;
  tmpvar_5 = (noise3_1 * (vec3(1.0, 1.0, 1.0) - vec3(fract(
    (q3 * 0.5)
  ))));
  noise3_1 = tmpvar_5;
  vec4 tmpvar_6;
  tmpvar_6 = texture (sampler_main, fract(tmpvar_4));
  vec3 tmpvar_7;
  tmpvar_7.x = q10;
  tmpvar_7.y = q11;
  tmpvar_7.z = q12;
  vec3 tmpvar_8;
  tmpvar_8 = mix (tmpvar_5, tmpvar_7, tmpvar_6.xxx);
  vec4 tmpvar_9;
  tmpvar_9.w = 1.0;
  tmpvar_9.xyz = (tmpvar_6.xyz + clamp ((
    (tmpvar_6.yzx * tmpvar_8.zxy)
   - 
    (tmpvar_6.zxy * tmpvar_8.yzx)
  ), 0.0, 1.0));
  ret = tmpvar_9.xyz;
 }`,comp:` shader_body { 
  vec2 uv1_1;
  vec2 tmpvar_2;
  tmpvar_2.y = 0.0;
  tmpvar_2.x = texsize.z;
  vec2 tmpvar_3;
  tmpvar_3.x = 0.0;
  tmpvar_3.y = texsize.w;
  vec2 tmpvar_4;
  tmpvar_4.x = (texture (sampler_main, (uv - tmpvar_2)).xyz - texture (sampler_main, (uv + tmpvar_2)).xyz).x;
  tmpvar_4.y = (texture (sampler_main, (uv - tmpvar_3)).xyz - texture (sampler_main, (uv + tmpvar_3)).xyz).x;
  uv1_1 = ((0.3 * cos(
    ((uv - 0.5) * 2.0)
  )) - tmpvar_4);
  float tmpvar_5;
  tmpvar_5 = clamp ((0.04 / sqrt(
    dot (uv1_1, uv1_1)
  )), 0.0, 1.0);
  uv1_1 = ((0.3 * cos(
    (uv1_1 * 12.0)
  )) - (9.0 * tmpvar_4));
  vec4 tmpvar_6;
  tmpvar_6.w = 1.0;
  tmpvar_6.xyz = (tmpvar_5 + ((texture (sampler_main, uv).xyz * 12.0) * vec3(clamp (
    (0.04 / sqrt(dot (uv1_1, uv1_1)))
  , 0.0, 1.0))));
  ret = tmpvar_6.xyz;
 }`}},function(o,l){o.exports={baseVals:{rating:0,gammaadj:1.14,decay:1,echo_zoom:1,wave_mode:1,wave_thick:1,modwavealphabyvolume:1,wave_brighten:0,wrap:0,darken:1,wave_a:.001,wave_scale:.179,wave_smoothing:0,wave_mystery:.3,modwavealphastart:.71,modwavealphaend:1.3,warpscale:1.331,zoomexp:.8195,zoom:1.0697,dy:.006,warp:.01,sx:.9996,wave_g:0,wave_b:0,ob_a:.8,ib_size:0,ib_r:0,ib_g:0,ib_b:0,ib_a:1,mv_x:0,mv_y:0,mv_l:1,mv_g:.91,mv_b:.71,mv_a:0},shapes:[{baseVals:{enabled:0}},{baseVals:{enabled:0}},{baseVals:{enabled:0}},{baseVals:{enabled:0}}],waves:[{baseVals:{enabled:0}},{baseVals:{enabled:0}},{baseVals:{enabled:0}},{baseVals:{enabled:0}}],init_eqs_str:"a.q12=0;a.q18=0;a.q6=0;a.q5=0;a.bass_thresh=0;a.wg=0;a.q11=0;a.q10=0;a.wb=0;a.q17=0;a.vol=0;a.q2=0;a.q3=0;a.wr=0;a.q7=0;a.mtime=0;a.q8=0;",frame_eqs_str:`a.bass_thresh=2*above(a.bass_att,a.bass_thresh)+(1-above(a.bass_att,a.bass_thresh))*(.91*(a.bass_thresh-1.3)+1.3);a.wave_r=.5+.5*(.6*Math.sin(1.3*a.time)+.4*Math.sin(.98*a.time));a.wave_b=.5+.5*(.6*Math.sin(1.1*a.time)+.4*Math.sin(.78*a.time));a.wave_g=.5+.5*(.6*Math.sin(1.2*a.time)+.4*Math.sin(.6*a.time));a.q8=a.wave_r;a.q7=a.wave_b;a.q6=a.wave_g;a.wr=.5+.4*(.6*Math.sin(.2*a.time)+.4*Math.sin(.8*a.time));a.wb=.5+.4*(.6*Math.sin(.377*a.time)+.4*Math.sin(.5*a.time));a.wg=.5+
.4*(.6*Math.sin(.7*a.time)+.4*Math.sin(.4*a.time));a.q10=a.wr;a.q11=a.wb;a.q12=a.wg;a.q10=.8;a.q11=.2;a.q12=.1;a.q18=.01*Math.sin(.1*a.mtime);a.q17=-.01*Math.sin(.254*a.mtime);a.q2=a.bass_thresh;a.vol=.25*(a.bass+a.mid+a.treb);a.vol*=a.vol;a.q3=a.vol;a.q5=.5*a.vol;a.mtime+=.01*a.vol;a.q2=.25*a.mtime;`,pixel_eqs_str:"",pixel_eqs:"",warp:` shader_body { 
  vec3 noise2_1;
  vec3 ret_2;
  vec3 tmpvar_3;
  tmpvar_3 = (((texture (sampler_blur1, uv).xyz * scale1) + bias1) + texture (sampler_main, uv).xyz);
  vec2 tmpvar_4;
  tmpvar_4 = (0.5 + ((uv - 0.5) * (1.0 + 
    (tmpvar_3.y * 0.05)
  )));
  vec2 tmpvar_5;
  tmpvar_5.x = (tmpvar_4.x + pow (tmpvar_3.x, q17));
  tmpvar_5.y = (tmpvar_4.y + pow (tmpvar_3.x, q18));
  vec4 tmpvar_6;
  tmpvar_6 = texture (sampler_fc_main, fract(tmpvar_5));
  vec3 tmpvar_7;
  tmpvar_7.x = q10;
  tmpvar_7.y = q11;
  tmpvar_7.z = q12;
  noise2_1 = (texture (sampler_noise_lq, ((
    (uv_orig * texsize.xy)
   * texsize_noise_lq.zw) + rand_frame.xy)).xyz + ((tmpvar_7 * vec3(rad)) * vol));
  vec3 a_8;
  a_8 = (1.0 - tmpvar_6.xyz);
  ret_2 = (tmpvar_6.xyz + (0.3 * clamp (
    ((a_8.yzx * noise2_1.zxy) - (a_8.zxy * noise2_1.yzx))
  , 0.0, 1.0)));
  ret_2 = (ret_2 * 0.97);
  vec4 tmpvar_9;
  tmpvar_9.w = 1.0;
  tmpvar_9.xyz = ret_2;
  ret = tmpvar_9.xyz;
 }`,comp:` shader_body { 
  vec3 ret_1;
  ret_1 = (texture (sampler_main, uv).xyz * vec3(0.9, 0.3, 0.5));
  ret_1 = (ret_1 * 1.34);
  ret_1 = (ret_1 * ret_1);
  vec4 tmpvar_2;
  tmpvar_2.w = 1.0;
  tmpvar_2.xyz = ret_1;
  ret = tmpvar_2.xyz;
 }`}},function(o,l){o.exports={baseVals:{rating:5,gammaadj:1.28,decay:.8,echo_zoom:1,echo_orient:3,wave_mode:7,additivewave:1,modwavealphabyvolume:1,wave_brighten:0,brighten:1,wave_a:.001,wave_scale:1.286,wave_smoothing:.63,modwavealphastart:.71,modwavealphaend:1.3,zoomexp:3.04777,zoom:1.0173,warp:.01605,wave_g:.65,wave_b:.65,ob_size:0,ob_a:1,mv_x:64,mv_y:48,mv_l:0,mv_a:0,b1ed:0},shapes:[{baseVals:{enabled:0}},{baseVals:{enabled:0}},{baseVals:{enabled:0}},{baseVals:{enabled:0}}],waves:[{baseVals:{enabled:1,thick:1,additive:1,g:0,b:0},init_eqs_str:"a.ma=0;a.mx=0;a.my=0;",frame_eqs_str:"",point_eqs_str:"a.ma+=3.1415*above(a.bass,1)*.01*a.bass;a.ma-=3.1415*above(a.treb,1)*.01*a.treb;a.mx+=.0002*Math.cos(a.ma);a.my+=.0002*Math.sin(a.ma);a.mx=.00001<Math.abs(above(a.mx,.9))?.9-a.mx:a.mx;a.my=.00001<Math.abs(above(a.my,.9))?.9-a.my:a.my;a.mx=.00001<Math.abs(below(a.mx,.1))?.9+a.mx:a.mx;a.my=.00001<Math.abs(below(a.my,.1))?.9+a.my:a.my;a.x=a.mx;a.y=a.my;a.a=above(a.bass+a.mid+a.treb,.8);"},{baseVals:{enabled:1,thick:1,additive:1,r:0,g:0},init_eqs_str:"a.ma=0;a.mx=0;a.my=0;",frame_eqs_str:"",point_eqs_str:"a.ma+=3.1415*above(a.bass,1)*.05*a.bass;a.ma-=3.1415*above(a.mid,1)*.05*a.mid;a.mx+=.0001*Math.cos(a.ma);a.my+=.0001*Math.sin(a.ma);a.mx=.00001<Math.abs(above(a.mx,.9))?.9-a.mx:a.mx;a.my=.00001<Math.abs(above(a.my,.9))?.9-a.my:a.my;a.mx=.00001<Math.abs(below(a.mx,.1))?.9+a.mx:a.mx;a.my=.00001<Math.abs(below(a.my,.1))?.9+a.my:a.my;a.x=a.mx;a.y=a.my;a.a=above(a.bass+a.mid+a.treb,.1);"},{baseVals:{enabled:1,thick:1,additive:1,r:0,b:0},init_eqs_str:"a.ma=0;a.mx=0;a.my=0;",frame_eqs_str:"",point_eqs_str:"a.ma+=3.1415*above(a.mid,1)*.01*a.mid;a.ma-=3.1415*above(a.treb,1)*.01*a.treb;a.mx+=.0004*Math.cos(a.ma);a.my+=.0004*Math.sin(a.ma);a.mx=.00001<Math.abs(above(a.mx,.9))?.9-a.mx:a.mx;a.my=.00001<Math.abs(above(a.my,.9))?.9-a.my:a.my;a.mx=.00001<Math.abs(below(a.mx,.1))?.9+a.mx:a.mx;a.my=.00001<Math.abs(below(a.my,.1))?.9+a.my:a.my;a.x=a.mx;a.y=a.my;a.a=above(a.bass+a.mid+a.treb,.3);"},{baseVals:{enabled:1,thick:1,additive:1,g:0},init_eqs_str:"a.ma=0;a.mx=0;a.my=0;",frame_eqs_str:"",point_eqs_str:"a.ma+=3.1415*above(a.bass,.5)*.02*a.bass;a.ma-=3.1415*above(a.treb,.5)*.02*a.treb;a.mx+=.0008*Math.cos(a.ma);a.my+=.0008*Math.sin(a.ma);a.mx=.00001<Math.abs(above(a.mx,.9))?.9-a.mx:a.mx;a.my=.00001<Math.abs(above(a.my,.9))?.9-a.my:a.my;a.mx=.00001<Math.abs(below(a.mx,.1))?.9+a.mx:a.mx;a.my=.00001<Math.abs(below(a.my,.1))?.9+a.my:a.my;a.x=a.mx;a.y=a.my;a.a=above(a.bass+a.mid+a.treb,.2);"}],init_eqs_str:"a.z=0;a.w=0;a.d_x=0;a.q25=0;a.index=0;a.q12=0;a.q18=0;a.q13=0;a.q15=0;a.q29=0;a.dt=0;a.q1=0;a.dec_med=0;a.dm=0;a.mm=0;a.tt=0;a.is_beat=0;a.q31=0;a.q23=0;a.q24=0;a.dec_slow=0;a.q11=0;a.q16=0;a.q26=0;a.avg=0;a.r=0;a.db=0;a.beat=0;a.q17=0;a.d_y=0;a.peak=0;a.bb=0;a.q27=0;a.q14=0;a.t0=0;a.q32=0;a.q28=0;a.q30=0;",frame_eqs_str:`a.dec_med=pow(.9,div(30,a.fps));a.dec_slow=pow(.99,div(30,a.fps));a.beat=Math.max(Math.max(a.bass,a.mid),a.treb);a.avg=a.avg*a.dec_slow+a.beat*(1-a.dec_slow);a.is_beat=above(a.beat,.5+a.avg+a.peak)*above(a.time,a.t0+.2);a.t0=a.is_beat*a.time+(1-a.is_beat)*a.t0;a.peak=a.is_beat*a.beat+(1-a.is_beat)*a.peak*a.dec_med;a.index=mod(a.index+a.is_beat,2);a.d_x=.00001<Math.abs(a.is_beat)?.001*(randint(2E3)-1E3):a.d_x;a.d_y=.00001<Math.abs(a.is_beat)?.001*(randint(2E3)-1E3):a.d_y;a.r=
.00001<Math.abs(a.is_beat)?.001*(randint(2E3)-1E3):a.r;a.z=.00001<Math.abs(a.is_beat)?.001*randint(1E3):a.z;a.zoom=1.03+.06*a.z;a.rot=.06*a.r;a.dx=.01*a.d_x;a.dy=.01*a.d_y;a.q1=1;a.q23=div(randint(1E3),1E3);a.q24=div(randint(1E3),1E3);a.q25=6.28*div(randint(1E3),1E3);a.q26=a.q25-3.14;a.q27=div(randint(1E3),12E3)+.04;a.q28=div(randint(1E3),1E3);a.q29=div(randint(1E3),1E3);a.q30=6.28*div(randint(1E3),1E3);a.q31=a.q30-3.14;a.q32=div(randint(1E3),14E3)+.04;a.db=.98*a.db+.2*a.bass;a.bb+=.1*a.db;a.dt=.98*
a.dt+.2*a.treb;a.tt+=.1*a.dt;a.dm=.98*a.dm+.2*a.mid;a.mm+=.1*a.dm;a.w=.1*(a.bb-a.tt);a.q11=Math.sin(a.w);a.q12=Math.cos(a.w);a.q13=.5+.25*Math.sin(.1*(a.bb-a.mm));a.q14=.5+.25*Math.sin(.1*(a.tt-a.mm));a.q15=4;a.q16=.06;a.q17=Math.sin(-a.w);a.q18=Math.cos(-a.w);`,pixel_eqs_str:"",pixel_eqs:"",warp:` shader_body { 
  vec3 ret_1;
  vec2 tmpvar_2;
  tmpvar_2 = (texsize.zw * 8.0);
  vec3 tmpvar_3;
  tmpvar_3 = (((texture (sampler_blur1, 
    (uv + (vec2(1.0, 0.0) * tmpvar_2))
  ).xyz * scale1) + bias1) - ((texture (sampler_blur1, 
    (uv - (vec2(1.0, 0.0) * tmpvar_2))
  ).xyz * scale1) + bias1));
  vec3 tmpvar_4;
  tmpvar_4 = (((texture (sampler_blur1, 
    (uv + (vec2(0.0, 1.0) * tmpvar_2))
  ).xyz * scale1) + bias1) - ((texture (sampler_blur1, 
    (uv - (vec2(0.0, 1.0) * tmpvar_2))
  ).xyz * scale1) + bias1));
  vec2 tmpvar_5;
  tmpvar_5.x = tmpvar_3.x;
  tmpvar_5.y = tmpvar_4.x;
  vec2 tmpvar_6;
  vec2 tmpvar_7;
  tmpvar_7 = mix (uv_orig, uv, vec2(0.1, 0.1));
  tmpvar_6 = (tmpvar_7 + ((tmpvar_5 * texsize.zw) * 2.0));
  vec2 tmpvar_8;
  tmpvar_8.x = tmpvar_3.y;
  tmpvar_8.y = tmpvar_4.y;
  vec2 tmpvar_9;
  tmpvar_9 = (mix (uv_orig, uv, vec2(0.3, 0.3)) + ((tmpvar_8 * texsize.zw) * 2.0));
  vec2 tmpvar_10;
  tmpvar_10.x = tmpvar_3.z;
  tmpvar_10.y = tmpvar_4.z;
  vec2 tmpvar_11;
  tmpvar_11 = (tmpvar_7 + ((tmpvar_10 * texsize.zw) * 2.0));
  ret_1.x = (texture (sampler_main, tmpvar_6).x - ((texture (sampler_main, tmpvar_6).xyz - 
    ((texture (sampler_blur3, tmpvar_6).xyz * scale3) + bias3)
  ).x * 0.01));
  ret_1.y = (texture (sampler_main, tmpvar_9).y - ((texture (sampler_main, tmpvar_9).xyz - 
    ((texture (sampler_blur3, tmpvar_9).xyz * scale3) + bias3)
  ).y * 0.01));
  ret_1.z = (texture (sampler_main, tmpvar_11).z - ((texture (sampler_main, tmpvar_11).xyz - 
    ((texture (sampler_blur3, tmpvar_11).xyz * scale3) + bias3)
  ).z * 0.01));
  ret_1 = (ret_1 + (-0.004 + (
    (texture (sampler_noise_lq, (((uv_orig * texsize.xy) * (texsize_noise_lq.zw * 1.2)) + rand_frame.xy)).xyz - 0.5)
   * 0.1)));
  vec4 tmpvar_12;
  tmpvar_12.w = 1.0;
  tmpvar_12.xyz = ret_1;
  ret = tmpvar_12.xyz;
 }`,comp:` shader_body { 
  vec3 ret_1;
  vec2 tmpvar_2;
  tmpvar_2 = (texsize.zw * 8.0);
  vec3 tmpvar_3;
  tmpvar_3 = (((texture (sampler_blur1, 
    (uv + (vec2(1.0, 0.0) * tmpvar_2))
  ).xyz * scale1) + bias1) - ((texture (sampler_blur1, 
    (uv - (vec2(1.0, 0.0) * tmpvar_2))
  ).xyz * scale1) + bias1));
  vec3 tmpvar_4;
  tmpvar_4 = (((texture (sampler_blur1, 
    (uv + (vec2(0.0, 1.0) * tmpvar_2))
  ).xyz * scale1) + bias1) - ((texture (sampler_blur1, 
    (uv - (vec2(0.0, 1.0) * tmpvar_2))
  ).xyz * scale1) + bias1));
  vec2 tmpvar_5;
  tmpvar_5.x = tmpvar_3.z;
  tmpvar_5.y = tmpvar_4.z;
  vec2 tmpvar_6;
  tmpvar_6.x = tmpvar_3.y;
  tmpvar_6.y = tmpvar_4.y;
  ret_1 = (mix (vec3(0.2, 0.0, 0.1), vec3(0.8, 0.6, 0.0), texture (sampler_main, (uv - 
    (tmpvar_5 * 0.2)
  )).yyy) * ((
    (-(tmpvar_3.y) + tmpvar_4.y)
   + 1.0) + (
    (-(tmpvar_3.z) + tmpvar_4.z)
   * 2.0)));
  vec3 tmpvar_7;
  tmpvar_7 = mix (mix (ret_1, vec3(0.3, 0.0, 0.8), vec3((
    ((texture (sampler_blur1, (uv - (tmpvar_6 * 0.04))).xyz * scale1) + bias1)
  .x * 1.4))), vec3(1.0, 0.9, 0.4), texture (sampler_main, uv).zzz);
  ret_1 = tmpvar_7;
  vec4 tmpvar_8;
  tmpvar_8.w = 1.0;
  tmpvar_8.xyz = tmpvar_7;
  ret = tmpvar_8.xyz;
 }`}},function(o,l){o.exports={baseVals:{rating:1,gammaadj:1,decay:1,echo_zoom:1,wrap:0,darken_center:1,brighten:1,darken:1,wave_a:.001,warpanimspeed:.141,warpscale:14.497,zoom:.99951,warp:.75055,wave_r:0,wave_g:0,wave_b:0,ob_size:.5,ob_r:.01,ib_size:.26,mv_a:0},shapes:[{baseVals:{enabled:1,sides:6,rad:.17809,ang:.26,tex_zoom:.39711,g:.7,b:.6,r2:.4,g2:0,a2:1,border_a:0},init_eqs_str:"a.q3=0;",frame_eqs_str:"a.x=.11+.22*randint(5);a.y=.1+.16*mod(2*a.time,6);a.b=.6+.3*a.q3;a.g=.7+.2*a.q3;a.r=.7;a.g2=.3*a.g;a.r2=.3*a.r;a.b2=.3*a.b;"},{baseVals:{enabled:1,sides:6,additive:1,rad:.17809,ang:.26,tex_zoom:.99999,g:1,b:.4,a:.5,r2:.2,g2:0,b2:.3,a2:.6,border_r:0,border_g:0,border_b:0,border_a:0},init_eqs_str:"a.q3=0;",frame_eqs_str:"a.x=.11+.22*randint(5);a.y=.1+.16*mod(2*a.time,6);a.b=.6+.3*a.q3;a.g=.7+.2*a.q3;a.r=.7;a.g2=.3*a.g;a.r2=.3*a.r;a.b2=.3*a.b;"},{baseVals:{enabled:1,sides:6,textured:1,rad:.17633,ang:.26,tex_zoom:1.19615,r2:1,b2:1,a2:.2,border_r:0,border_g:0,border_b:0,border_a:.2},init_eqs_str:"a.q3=0;a.q4=0;a.q5=0;a.q1=0;",frame_eqs_str:"a.x=.22*randint(6);a.y=.18+.16*mod(2*a.time,5);a.g=1.5*a.q3;a.r=1.3*a.q4;a.b=1.7*a.q5;a.tex_ang=-a.q1;a.tex_zoom=2+Math.sin(a.q1);"},{baseVals:{enabled:1,sides:6,textured:1,rad:.16284,ang:.26,r2:.8,g2:.8,b2:.8,a2:.2,border_r:0,border_g:0,border_b:0,border_a:.2},init_eqs_str:"a.q3=0;a.q2=0;a.q1=0;",frame_eqs_str:"a.x=.11+.22*randint(5);a.y=.1+.16*mod(2*a.time,6);a.r=.3*a.q3;a.b=.2*a.q2;a.g=.1*a.q1;a.tex_ang=a.q1;a.tex_zoom=2+1.2*Math.sin(1.5*a.q1);"}],waves:[{baseVals:{enabled:0}},{baseVals:{enabled:0}},{baseVals:{enabled:0}},{baseVals:{enabled:0}}],init_eqs_str:"a.y3=0;a.y1=0;a.q12=0;a.w2=0;a.ref_ang=0;a.x1=0;a.vx3=0;a.q13=0;a.q6=0;a.q1=0;a.q5=0;a.q9=0;a.vx1=0;a.vx4=0;a.x3=0;a.q11=0;a.q10=0;a.q4=0;a.vy4=0;a.bounce=0;a.x4=0;a.w1=0;a.r=0;a.x2=0;a.vy2=0;a.y2=0;a.vy1=0;a.q2=0;a.q14=0;a.v1=0;a.vx2=0;a.q3=0;a.y4=0;a.q7=0;a.vy3=0;a.v2=0;a.q8=0;a.x1=.5;a.x2=.51;a.y2=1;a.y1=.7;a.x3=.8;a.y3=.5;a.x4=.2;a.y4=.5;a.ax1=0;a.ay1=0;a.ax2=0;a.ay2=0;a.ax3=0;a.ay3=0;a.vx1=0;a.vx2=0;",frame_eqs_str:`a.sx=1+.01*mod(8*a.bass,8)*equal(mod(a.time,Math.floor(24-2*a.bass)),0);a.sy=1+.01*mod(8*a.mid,8)*equal(mod(a.time,12+Math.floor(24-2*a.bass)),0);a.zoom=.99;a.wave_a=0;a.r=.12+.004*Math.max(a.bass_att,a.treb_att);a.bounce=below(a.y1,a.r);a.y1+=a.vy1;a.vy1=.00001<Math.abs(a.bounce)?.94*Math.abs(a.vy1)+.1*(a.r-a.y1):a.vy1-div(.0036,a.fps);a.bounce=below(a.x1,a.r);a.x1+=a.vx1;a.vx1=.00001<Math.abs(a.bounce)?.94*Math.abs(a.vx1)+.1*(a.r-a.x1):a.vx1;a.bounce=above(a.x1,1-a.r);a.vx1=
.00001<Math.abs(a.bounce)?.94*-Math.abs(a.vx1)+.04*(1-a.r-a.x1):a.vx1;a.bounce=below(a.y2,a.r);a.y2+=a.vy2;a.vy2=.00001<Math.abs(a.bounce)?.94*Math.abs(a.vy2)+.1*(a.r-a.y2):a.vy2-div(.0036,a.fps);a.bounce=below(a.x2,a.r);a.x2+=a.vx2;a.vx2=.00001<Math.abs(a.bounce)?.94*Math.abs(a.vx2)+.1*(a.r-a.x2):a.vx2;a.bounce=above(a.x2,1-a.r);a.vx2=.00001<Math.abs(a.bounce)?.94*-Math.abs(a.vx2)+.1*(1-a.r-a.x2):a.vx2;a.bounce=below(a.y3,a.r);a.y3+=a.vy3;a.vy3=.00001<Math.abs(a.bounce)?.94*Math.abs(a.vy3)+.1*(a.r-
a.y3):a.vy3-div(.0036,a.fps);a.bounce=below(a.x3,a.r);a.x3+=a.vx3;a.vx3=.00001<Math.abs(a.bounce)?.94*Math.abs(a.vx3)+.1*(a.r-a.x3):a.vx3;a.bounce=above(a.x3,1-a.r);a.vx3=.00001<Math.abs(a.bounce)?.94*-Math.abs(a.vx3)+.1*(1-a.r-a.x3):a.vx3;a.bounce=below(a.y4,a.r);a.y4+=a.vy4;a.vy4=.00001<Math.abs(a.bounce)?.94*Math.abs(a.vy4)+.1*(a.r-a.y4):a.vy4-div(.0036,a.fps);a.bounce=below(a.x4,a.r);a.x4+=a.vx4;a.vx4=.00001<Math.abs(a.bounce)?.94*Math.abs(a.vx4)+.1*(a.r-a.x4):a.vx4;a.bounce=above(a.x4,1-a.r);
a.vx4=.00001<Math.abs(a.bounce)?.94*-Math.abs(a.vx4)+.1*(1-a.r-a.x4):a.vx4;a.bounce=below(sqrt(sqr(a.x1+a.vx1-a.x2-a.vx2)+sqr(a.y1+a.vy1-a.y2-a.vy2)),2*a.r);a.ref_ang=Math.atan2(a.x2-a.x1,a.y2-a.y1)+Math.asin(1);a.v1=sqrt(a.vx1*a.vx1+a.vy1*a.vy1);a.v2=sqrt(a.vx2*a.vx2+a.vy2*a.vy2);a.w1=Math.atan2(a.vx1,a.vy1);a.w2=Math.atan2(a.vx2,a.vy2);a.vx1=.00001<Math.abs(a.bounce)?Math.sin(a.ref_ang)*a.v1*Math.cos(a.w1-a.ref_ang)+Math.sin(a.ref_ang+Math.asin(1))*a.v2*Math.cos(a.w2-a.ref_ang-Math.asin(1)):a.vx1;
a.vy1=.00001<Math.abs(a.bounce)?Math.cos(a.ref_ang)*a.v1*Math.cos(a.w1-a.ref_ang)+Math.cos(a.ref_ang+Math.asin(1))*a.v2*Math.cos(a.w2-a.ref_ang-Math.asin(1)):a.vy1;a.vx2=.00001<Math.abs(a.bounce)?Math.sin(a.ref_ang)*a.v2*Math.cos(a.w2-a.ref_ang)+Math.sin(a.ref_ang+Math.asin(1))*a.v1*Math.cos(a.w1-a.ref_ang-Math.asin(1)):a.vx2;a.vy2=.00001<Math.abs(a.bounce)?Math.cos(a.ref_ang)*a.v2*Math.cos(a.w2-a.ref_ang)+Math.cos(a.ref_ang+Math.asin(1))*a.v1*Math.cos(a.w1-a.ref_ang-Math.asin(1)):a.vy2;a.bounce=
below(sqrt(sqr(a.x1+a.vx1-a.x3-a.vx3)+sqr(a.y1+a.vy1-a.y3-a.vy3)),2*a.r);a.ref_ang=Math.atan2(a.x3-a.x1,a.y3-a.y1)+Math.asin(1);a.v1=sqrt(a.vx1*a.vx1+a.vy1*a.vy1);a.v2=sqrt(a.vx3*a.vx3+a.vy3*a.vy3);a.w1=Math.atan2(a.vx1,a.vy1);a.w2=Math.atan2(a.vx3,a.vy3);a.vx1=.00001<Math.abs(a.bounce)?Math.sin(a.ref_ang)*a.v1*Math.cos(a.w1-a.ref_ang)+Math.sin(a.ref_ang+Math.asin(1))*a.v2*Math.cos(a.w2-a.ref_ang-Math.asin(1)):a.vx1;a.vy1=.00001<Math.abs(a.bounce)?Math.cos(a.ref_ang)*a.v1*Math.cos(a.w1-a.ref_ang)+
Math.cos(a.ref_ang+Math.asin(1))*a.v2*Math.cos(a.w2-a.ref_ang-Math.asin(1)):a.vy1;a.vx3=.00001<Math.abs(a.bounce)?Math.sin(a.ref_ang)*a.v2*Math.cos(a.w2-a.ref_ang)+Math.sin(a.ref_ang+Math.asin(1))*a.v1*Math.cos(a.w1-a.ref_ang-Math.asin(1)):a.vx3;a.vy3=.00001<Math.abs(a.bounce)?Math.cos(a.ref_ang)*a.v2*Math.cos(a.w2-a.ref_ang)+Math.cos(a.ref_ang+Math.asin(1))*a.v1*Math.cos(a.w1-a.ref_ang-Math.asin(1)):a.vy3;a.bounce=below(sqrt(sqr(a.x2+a.vx2-a.x3-a.vx3)+sqr(a.y2+a.vy2-a.y3-a.vy3)),2*a.r);a.ref_ang=
Math.atan2(a.x3-a.x2,a.y3-a.y2)+Math.asin(1);a.v1=sqrt(a.vx2*a.vx2+a.vy2*a.vy2);a.v2=sqrt(a.vx3*a.vx3+a.vy3*a.vy3);a.w1=Math.atan2(a.vx2,a.vy2);a.w2=Math.atan2(a.vx3,a.vy3);a.vx2=.00001<Math.abs(a.bounce)?Math.sin(a.ref_ang)*a.v1*Math.cos(a.w1-a.ref_ang)+Math.sin(a.ref_ang+Math.asin(1))*a.v2*Math.cos(a.w2-a.ref_ang-Math.asin(1)):a.vx2;a.vy2=.00001<Math.abs(a.bounce)?Math.cos(a.ref_ang)*a.v1*Math.cos(a.w1-a.ref_ang)+Math.cos(a.ref_ang+Math.asin(1))*a.v2*Math.cos(a.w2-a.ref_ang-Math.asin(1)):a.vy2;
a.vx3=.00001<Math.abs(a.bounce)?Math.sin(a.ref_ang)*a.v2*Math.cos(a.w2-a.ref_ang)+Math.sin(a.ref_ang+Math.asin(1))*a.v1*Math.cos(a.w1-a.ref_ang-Math.asin(1)):a.vx3;a.vy3=.00001<Math.abs(a.bounce)?Math.cos(a.ref_ang)*a.v2*Math.cos(a.w2-a.ref_ang)+Math.cos(a.ref_ang+Math.asin(1))*a.v1*Math.cos(a.w1-a.ref_ang-Math.asin(1)):a.vy3;a.bounce=below(sqrt(sqr(a.x1+a.vx1-a.x4-a.vx4)+sqr(a.y1+a.vy1-a.y4-a.vy4)),2*a.r);a.ref_ang=Math.atan2(a.x4-a.x1,a.y4-a.y1)+Math.asin(1);a.v1=sqrt(a.vx1*a.vx1+a.vy1*a.vy1);a.v2=
sqrt(a.vx4*a.vx4+a.vy4*a.vy4);a.w1=Math.atan2(a.vx1,a.vy1);a.w2=Math.atan2(a.vx4,a.vy4);a.vx1=.00001<Math.abs(a.bounce)?Math.sin(a.ref_ang)*a.v1*Math.cos(a.w1-a.ref_ang)+Math.sin(a.ref_ang+Math.asin(1))*a.v2*Math.cos(a.w2-a.ref_ang-Math.asin(1)):a.vx1;a.vy1=.00001<Math.abs(a.bounce)?Math.cos(a.ref_ang)*a.v1*Math.cos(a.w1-a.ref_ang)+Math.cos(a.ref_ang+Math.asin(1))*a.v2*Math.cos(a.w2-a.ref_ang-Math.asin(1)):a.vy1;a.vx4=.00001<Math.abs(a.bounce)?Math.sin(a.ref_ang)*a.v2*Math.cos(a.w2-a.ref_ang)+Math.sin(a.ref_ang+
Math.asin(1))*a.v1*Math.cos(a.w1-a.ref_ang-Math.asin(1)):a.vx4;a.vy4=.00001<Math.abs(a.bounce)?Math.cos(a.ref_ang)*a.v2*Math.cos(a.w2-a.ref_ang)+Math.cos(a.ref_ang+Math.asin(1))*a.v1*Math.cos(a.w1-a.ref_ang-Math.asin(1)):a.vy4;a.bounce=below(sqrt(sqr(a.x2+a.vx2-a.x4-a.vx4)+sqr(a.y2+a.vy2-a.y4-a.vy4)),2*a.r);a.ref_ang=Math.atan2(a.x4-a.x2,a.y4-a.y2)+Math.asin(1);a.v1=sqrt(a.vx2*a.vx2+a.vy2*a.vy2);a.v2=sqrt(a.vx4*a.vx4+a.vy4*a.vy4);a.w1=Math.atan2(a.vx2,a.vy2);a.w2=Math.atan2(a.vx4,a.vy4);a.vx2=.00001<
Math.abs(a.bounce)?Math.sin(a.ref_ang)*a.v1*Math.cos(a.w1-a.ref_ang)+Math.sin(a.ref_ang+Math.asin(1))*a.v2*Math.cos(a.w2-a.ref_ang-Math.asin(1)):a.vx2;a.vy2=.00001<Math.abs(a.bounce)?Math.cos(a.ref_ang)*a.v1*Math.cos(a.w1-a.ref_ang)+Math.cos(a.ref_ang+Math.asin(1))*a.v2*Math.cos(a.w2-a.ref_ang-Math.asin(1)):a.vy2;a.vx4=.00001<Math.abs(a.bounce)?Math.sin(a.ref_ang)*a.v2*Math.cos(a.w2-a.ref_ang)+Math.sin(a.ref_ang+Math.asin(1))*a.v1*Math.cos(a.w1-a.ref_ang-Math.asin(1)):a.vx4;a.vy4=.00001<Math.abs(a.bounce)?
Math.cos(a.ref_ang)*a.v2*Math.cos(a.w2-a.ref_ang)+Math.cos(a.ref_ang+Math.asin(1))*a.v1*Math.cos(a.w1-a.ref_ang-Math.asin(1)):a.vy4;a.bounce=below(sqrt(sqr(a.x3+a.vx3-a.x4-a.vx4)+sqr(a.y3+a.vy3-a.y4-a.vy4)),2*a.r);a.ref_ang=Math.atan2(a.x4-a.x3,a.y4-a.y3)+Math.asin(1);a.v1=sqrt(a.vx3*a.vx3+a.vy3*a.vy3);a.v2=sqrt(a.vx4*a.vx4+a.vy4*a.vy4);a.w1=Math.atan2(a.vx3,a.vy3);a.w2=Math.atan2(a.vx4,a.vy4);a.vx3=.00001<Math.abs(a.bounce)?Math.sin(a.ref_ang)*a.v1*Math.cos(a.w1-a.ref_ang)+Math.sin(a.ref_ang+Math.asin(1))*
a.v2*Math.cos(a.w2-a.ref_ang-Math.asin(1)):a.vx3;a.vy3=.00001<Math.abs(a.bounce)?Math.cos(a.ref_ang)*a.v1*Math.cos(a.w1-a.ref_ang)+Math.cos(a.ref_ang+Math.asin(1))*a.v2*Math.cos(a.w2-a.ref_ang-Math.asin(1)):a.vy3;a.vx4=.00001<Math.abs(a.bounce)?Math.sin(a.ref_ang)*a.v2*Math.cos(a.w2-a.ref_ang)+Math.sin(a.ref_ang+Math.asin(1))*a.v1*Math.cos(a.w1-a.ref_ang-Math.asin(1)):a.vx4;a.vy4=.00001<Math.abs(a.bounce)?Math.cos(a.ref_ang)*a.v2*Math.cos(a.w2-a.ref_ang)+Math.cos(a.ref_ang+Math.asin(1))*a.v1*Math.cos(a.w1-
a.ref_ang-Math.asin(1)):a.vy4;a.q1=a.aspectx;a.q2=a.aspecty;a.q3=a.x1;a.q4=a.y1;a.q5=a.r;a.q6=a.x2;a.q7=a.y2;a.q8=a.r;a.q9=a.x3;a.q10=a.y3;a.q11=a.r;a.q12=a.x4;a.q13=a.y4;a.q14=a.r;`,pixel_eqs_str:"",pixel_eqs:"",warp:` shader_body { 
  vec3 ret_1;
  ret_1.z = (texture (sampler_main, uv).z * 0.5);
  vec2 tmpvar_2;
  tmpvar_2 = ((uv_orig * texsize.xy) * texsize_noise_lq.zw);
  vec2 tmpvar_3;
  tmpvar_3 = (texsize.zw * 4.0);
  vec2 tmpvar_4;
  tmpvar_4.x = (((2.0 * 
    ((texture (sampler_blur1, (uv_orig + (vec2(1.0, 0.0) * tmpvar_3))).xyz * scale1) + bias1)
  ) - (2.0 * 
    ((texture (sampler_blur1, (uv_orig - (vec2(1.0, 0.0) * tmpvar_3))).xyz * scale1) + bias1)
  )).y * 0.5);
  tmpvar_4.y = (((2.0 * 
    ((texture (sampler_blur1, (uv_orig + (vec2(0.0, 1.0) * tmpvar_3))).xyz * scale1) + bias1)
  ) - (2.0 * 
    ((texture (sampler_blur1, (uv_orig - (vec2(0.0, 1.0) * tmpvar_3))).xyz * scale1) + bias1)
  )).y * 0.5);
  ret_1.y = texture (sampler_fw_main, clamp ((uv_orig + (
    (tmpvar_4 * texsize.zw)
   * 4.0)), 0.0, 1.0)).y;
  ret_1.y = (ret_1.y + ((
    (ret_1 - ((texture (sampler_blur1, uv_orig).xyz * scale1) + bias1))
  .y * 0.025) + -0.014));
  ret_1.y = (ret_1.y + ((texture (sampler_noise_lq, tmpvar_2).y - 0.5) * 0.02));
  vec2 tmpvar_5;
  tmpvar_5.x = (((2.0 * 
    ((texture (sampler_blur1, (uv_orig + (vec2(1.0, 0.0) * tmpvar_3))).xyz * scale1) + bias1)
  ) - (2.0 * 
    ((texture (sampler_blur1, (uv_orig - (vec2(1.0, 0.0) * tmpvar_3))).xyz * scale1) + bias1)
  )).x * 0.5);
  tmpvar_5.y = (((2.0 * 
    ((texture (sampler_blur1, (uv_orig + (vec2(0.0, 1.0) * tmpvar_3))).xyz * scale1) + bias1)
  ) - (2.0 * 
    ((texture (sampler_blur1, (uv_orig - (vec2(0.0, 1.0) * tmpvar_3))).xyz * scale1) + bias1)
  )).x * 0.5);
  ret_1.x = ((texture (sampler_main, (uv - 
    ((tmpvar_5 * texsize.zw) * 4.0)
  )).x - (ret_1.y * 0.01)) + 0.004);
  ret_1.x = (ret_1.x + ((
    (texture (sampler_noise_lq, tmpvar_2).x - 0.5)
   * 0.01) + (ret_1.z * 0.14)));
  vec4 tmpvar_6;
  tmpvar_6.w = 1.0;
  tmpvar_6.xyz = ret_1;
  ret = tmpvar_6.xyz;
 }`,comp:` shader_body { 
  vec2 tmpvar_1;
  tmpvar_1.x = q3;
  tmpvar_1.y = q4;
  vec2 tmpvar_2;
  tmpvar_2.x = q6;
  tmpvar_2.y = q7;
  vec2 tmpvar_3;
  tmpvar_3.x = q9;
  tmpvar_3.y = q10;
  vec2 tmpvar_4;
  tmpvar_4.x = q12;
  tmpvar_4.y = q13;
  vec2 tmpvar_5;
  tmpvar_5 = (texsize.zw * 1.2);
  vec3 tmpvar_6;
  tmpvar_6 = (texture (sampler_main, (uv + (vec2(1.0, 0.0) * tmpvar_5))).xyz - texture (sampler_main, (uv - (vec2(1.0, 0.0) * tmpvar_5))).xyz);
  vec3 tmpvar_7;
  tmpvar_7 = (texture (sampler_main, (uv + (vec2(0.0, 1.0) * tmpvar_5))).xyz - texture (sampler_main, (uv - (vec2(0.0, 1.0) * tmpvar_5))).xyz);
  vec2 tmpvar_8;
  tmpvar_8.x = dot (tmpvar_6, vec3(0.32, 0.49, 0.29));
  tmpvar_8.y = dot (tmpvar_7, vec3(0.32, 0.49, 0.29));
  vec2 x_9;
  x_9 = ((uv - (tmpvar_8 * 8.0)) - (1.0 - tmpvar_1));
  vec2 tmpvar_10;
  tmpvar_10.x = dot (tmpvar_6, vec3(0.32, 0.49, 0.29));
  tmpvar_10.y = dot (tmpvar_7, vec3(0.32, 0.49, 0.29));
  vec2 x_11;
  x_11 = ((uv - (tmpvar_10 * 8.0)) - (1.0 - tmpvar_2));
  vec2 tmpvar_12;
  tmpvar_12.x = dot (tmpvar_6, vec3(0.32, 0.49, 0.29));
  tmpvar_12.y = dot (tmpvar_7, vec3(0.32, 0.49, 0.29));
  vec2 x_13;
  x_13 = ((uv - (tmpvar_12 * 8.0)) - (1.0 - tmpvar_3));
  vec2 tmpvar_14;
  tmpvar_14.x = dot (tmpvar_6, vec3(0.32, 0.49, 0.29));
  tmpvar_14.y = dot (tmpvar_7, vec3(0.32, 0.49, 0.29));
  vec2 x_15;
  x_15 = ((uv - (tmpvar_14 * 8.0)) - (1.0 - tmpvar_4));
  vec4 tmpvar_16;
  tmpvar_16.w = 1.0;
  tmpvar_16.xyz = (mix (texture (sampler_main, uv).xyz, max (
    max ((vec3((1.0 - pow (
      sqrt(dot (x_9, x_9))
    , 0.2))) * vec3(2.0, 1.0, -1.0)), (vec3((1.0 - pow (
      sqrt(dot (x_11, x_11))
    , 0.2))) * vec3(2.0, -1.0, 1.0)))
  , 
    max ((vec3((1.0 - pow (
      sqrt(dot (x_13, x_13))
    , 0.2))) * vec3(-1.0, 1.0, 2.0)), (vec3((1.0 - pow (
      sqrt(dot (x_15, x_15))
    , 0.2))) * vec3(1.0, -1.0, 2.0)))
  ), vec3(0.5, 0.5, 0.5)) * 1.25);
  ret = tmpvar_16.xyz;
 }`}},function(o,l){o.exports={baseVals:{rating:5,gammaadj:1,decay:.995,echo_zoom:1.007,echo_orient:3,wave_mode:7,additivewave:1,wave_thick:1,modwavealphabyvolume:1,wave_brighten:0,wrap:0,wave_a:.001,wave_scale:.958,wave_smoothing:.45,modwavealphastart:0,modwavealphaend:1.32,warpanimspeed:1.459,warpscale:2.007,zoom:.9999,warp:.01,sx:.9999,wave_r:0,wave_g:0,wave_b:0,ob_size:.05,ob_g:.1,ob_b:1,ob_a:1,ib_size:0,ib_r:0,ib_g:0,ib_b:0,mv_x:25.6,mv_y:9.6,mv_l:0,mv_r:.5,mv_g:.5,mv_b:.5,mv_a:0,b1ed:0},shapes:[{baseVals:{enabled:0}},{baseVals:{enabled:0}},{baseVals:{enabled:0}},{baseVals:{enabled:0}}],waves:[{baseVals:{enabled:0}},{baseVals:{enabled:0}},{baseVals:{enabled:0}},{baseVals:{enabled:0}}],init_eqs_str:`a.look=0;a.n=0;a.reg26=0;a.w=0;a.uvx0=0;a.reg34=0;a.reg28=0;a.reg23=0;a.q25=0;a.angchg=0;a.reg20=0;a.reg15=0;a.reg10=0;a.h3=0;a.q12=0;a.v3=0;a.q18=0;a.q22=0;a.q21=0;a.diry=0;a.q13=0;a.q6=0;a.posx=0;a.fps_=0;a.reg25=0;a.bt=0;a.uvx=0;a.q1=0;a.travel=0;a.posz=0;a.q5=0;a.q9=0;a.dirz=0;a.dec_s=0;a.reg16=0;a.v=0;a.slow=0;a.reg36=0;a.mm=0;a.h2=0;a.reg22=0;a.tt=0;a.uvy=0;a.rotz=0;a.bm=0;a.ly=0;a.dist_=0;a.q23=0;a.q24=0;a.reg24=0;a.cran0=0;a.ran2=0;a.q11=0;a.q10=0;a.reg14=0;a.posy=0;
a.reg31=0;a.dirx=0;a.q4=0;a.start=0;a.reg12=0;a.reg13=0;a.c2=0;a.reg37=0;a.s3=0;a.yslope=0;a.lampy=0;a.q16=0;a.xslope=0;a.q26=0;a.reg38=0;a.reg35=0;a.reg11=0;a.mt=0;a.tx=0;a.avg=0;a.uvz=0;a.c3=0;a.uvy0=0;a.mx=0;a.reg27=0;a.mn=0;a.q19=0;a.beat=0;a.q17=0;a.reg32=0;a.lx=0;a.reg21=0;a.uvz0=0;a.len=0;a.reg18=0;a.reg30=0;a.bb=0;a.q2=0;a.q27=0;a.slen=0;a.q14=0;a.dist=0;a.h1=0;a.reg17=0;a.v1=0;a.speed=0;a.q3=0;a.s1=0;a.t0=0;a.s2=0;a.ran1=0;a.reg33=0;a.q7=0;a.ds=0;a.q28=0;a.lampx=0;a.ty=0;a.c1=0;a.v2=0;a.q20=
0;a.q8=0;a.avg=.01;a.q7=.25;a.q8=randint(2)-1;a.q16=1+randint(2);a.q18=randint(.8)+.1;a.q30=1;a.q31=128;a.start=1;a.travel=0;a.rotz=0;a.look=0;a.slow=0;a.t0=a.time+3;a.lampx=.5;a.lampy=.5;a.cran0=randint(1);for(var b=a.n=0;1E4>b;b++)a.gmegabuf[Math.floor(a.n)]=0,a.n+=1;for(b=a.n=0;1E4>b;b++)a.megabuf[Math.floor(a.n)]=0,a.n+=1;a.trelx=0;a.trely=0;a.trelz=0;a.reg20=1;a.reg21=0;a.reg22=0;a.reg23=0;a.reg24=1;a.reg25=0;a.reg26=0;a.reg27=0;a.reg28=1;b=0;do{b+=1;var c;a.ran1=div(randint(800),100);a.ran2=
div(randint(800),100);a.ran3=div(randint(800),100);a.posx=randint(5)-2;a.posy=randint(5)-2;a.posz=randint(5)-2;a.c1=Math.cos(a.ran1);a.c2=Math.cos(a.ran2);a.c3=Math.cos(a.ran3);a.s1=Math.sin(a.ran1);a.s2=Math.sin(a.ran2);a.s3=Math.sin(a.ran3);a.reg20=a.c2*a.c1;a.reg21=a.c2*a.s1;a.reg22=-a.s2;a.reg23=a.s3*a.s2*a.c1-a.c3*a.s1;a.reg24=a.s3*a.s2*a.s1+a.c3*a.c1;a.reg25=a.s3*a.c2;a.reg26=a.c3*a.s2*a.c1+a.s3*a.s1;a.reg27=a.c3*a.s2*a.s1-a.s3*a.c1;a.reg28=a.c3*a.c2;a.dist=.001;var d=0;do{d+=1;a.uvx=div(a.reg26*
a.dist,a.q7);a.uvy=div(a.reg27*a.dist,a.q7);a.uvz=div(a.reg28*a.dist,a.q7);a.uvx+=a.posx;a.uvy+=a.posy;a.uvz+=a.posz;a.uvx=8*(div(a.uvx,8)+30.5-Math.floor(div(a.uvx,8)+30.5)-.5);a.uvy=8*(div(a.uvy,8)+30.5-Math.floor(div(a.uvy,8)+30.5)-.5);a.uvz=8*(div(a.uvz,8)+30.5-Math.floor(div(a.uvz,8)+30.5)-.5);a.uvx0=a.uvx+a.q8;a.uvy0=a.uvy+a.q8;a.uvz0=a.uvz+a.q8;for(c=0;8>c;c++)a.uvx=.00001<Math.abs(1<a.uvx?1:0)?2-a.uvx:.00001<Math.abs(-1>a.uvx?1:0)?-2-a.uvx:a.uvx,a.uvy=.00001<Math.abs(1<a.uvy?1:0)?2-a.uvy:
.00001<Math.abs(-1>a.uvy?1:0)?-2-a.uvy:a.uvy,a.uvz=.00001<Math.abs(1<a.uvz?1:0)?2-a.uvz:.00001<Math.abs(-1>a.uvz?1:0)?-2-a.uvz:a.uvz,a.slen=a.uvx*a.uvx+a.uvy*a.uvy+a.uvz*a.uvz,a.uvx=2.6*(.00001<Math.abs(.25>a.slen?1:0)?4*a.uvx:.00001<Math.abs(1>a.slen?1:0)?div(a.uvx,a.slen):a.uvx)+a.uvx0,a.uvy=2.6*(.00001<Math.abs(.25>a.slen?1:0)?4*a.uvy:.00001<Math.abs(1>a.slen?1:0)?div(a.uvy,a.slen):a.uvy)+a.uvy0,a.uvz=2.6*(.00001<Math.abs(.25>a.slen?1:0)?4*a.uvz:.00001<Math.abs(1>a.slen?1:0)?div(a.uvz,a.slen):
a.uvz)+a.uvz0;a.len=sqrt(a.uvx*a.uvx+a.uvy*a.uvy+a.uvz*a.uvz);a.dist*=1.05;c=(.6>a.dist?1:0)*(30<a.len?1:0)}while(.00001<Math.abs(c)&&1048576>d);d=.06>a.dist?1:0}while(.00001<Math.abs(d)&&1048576>b);`,frame_eqs_str:`a.fps_=0*a.fps_+1*(.00001<Math.abs(25>=a.fps?1:0)?a.fps:25+.5*(a.fps-25));a.dec_s=1-div(.06*30,a.fps_);a.beat=a.time>a.t0+3?1:0;a.t0=.00001<Math.abs(a.beat)?a.time:a.t0;a.speed=div(Math.min(.2,a.dist_-.02)*(1+2*a.avg)*(1-0*a.slow)*.7,a.q7);a.ds=a.ds*a.dec_s+div((1-a.dec_s)*a.speed*.25,a.fps_);a.rotz=.00001<Math.abs(.00001>Math.abs(a.rotz-0)?1:0)?a.beat*(randint(100)<20*a.travel?1:0)*(div(randint(10),10)-.3):bnot(a.beat*(30>randint(100)?1:0))*a.rotz;a.slow=.00001<Math.abs(bnot(a.slow))?
a.beat*(6>randint(1E3*a.avg)?1:0):bnot(a.beat*(50>randint(100)?1:0));a.look=.00001<Math.abs(bnot(a.look))?a.beat*(12>randint(1E3*a.speed)?1:0):bnot(a.beat*(50>randint(100)?1:0));a.lx=.00001<Math.abs(a.beat)?div(randint(150),200)+.15:a.lx;a.ly=.00001<Math.abs(a.beat)?div(randint(150),200)+.15:a.ly;a.lampx=a.lampx*a.dec_s+(1-a.dec_s)*(.00001<Math.abs(a.look)?a.lx:.5);a.lampy=a.lampy*a.dec_s+(1-a.dec_s)*(.00001<Math.abs(a.look)?a.ly:.5);a.q1=a.lampx;a.q2=a.lampy;a.dirx=a.reg26;a.diry=a.reg27;a.dirz=
a.reg28;a.posx+=a.ds*a.dirx;a.posy+=a.ds*a.diry;a.posz+=a.ds*a.dirz;a.q4=a.posx;a.q5=a.posy;a.q6=a.posz;a.angchg=(.2-a.dist_)*(.2>a.dist_?1:0)*2;a.travel=.00001<Math.abs(0<a.angchg?1:0)?0:a.travel+a.ds;a.v1=a.v1*a.dec_s+(1-a.dec_s)*a.rotz*a.ds;a.v2=a.v2*a.dec_s+div((1-a.dec_s)*a.angchg*a.xslope,a.fps_);a.v3=a.v3*a.dec_s+(1-a.dec_s)*(div(a.angchg*a.yslope,a.fps_)+2*a.v1*Math.sin(.1*a.time));a.reg30=a.reg20;a.reg31=a.reg21;a.reg32=a.reg22;a.reg33=a.reg23;a.reg34=a.reg24;a.reg35=a.reg25;a.reg36=a.reg26;
a.reg37=a.reg27;a.reg38=a.reg28;a.n=0;for(var b=a.avg=0;5>b;b++){a.n+=1;a.ran1=div(randint(100),100);a.ran2=div(randint(100),200)-.25;a.tx=Math.cos(1.57*a.n+a.ran2)*(4>=a.n?1:0)*a.ran1;a.ty=Math.sin(1.57*a.n+a.ran2)*(4>=a.n?1:0)*a.ran1;a.c1=Math.cos(a.v1);a.c2=Math.cos(a.v2+a.ty);a.c3=Math.cos(a.v3+a.tx);a.s1=Math.sin(a.v1);a.s2=Math.sin(a.v2+a.ty);a.s3=Math.sin(a.v3+a.tx);a.reg10=a.c2*a.c1;a.reg11=a.c2*a.s1;a.reg12=-a.s2;a.reg13=a.s3*a.s2*a.c1-a.c3*a.s1;a.reg14=a.s3*a.s2*a.s1+a.c3*a.c1;a.reg15=a.s3*
a.c2;a.reg16=a.c3*a.s2*a.c1+a.s3*a.s1;a.reg17=a.c3*a.s2*a.s1-a.s3*a.c1;a.reg18=a.c3*a.c2;a.reg20=a.reg30;a.reg21=a.reg31;a.reg22=a.reg32;a.reg23=a.reg33;a.reg24=a.reg34;a.reg25=a.reg35;a.reg26=a.reg36;a.reg27=a.reg37;a.reg28=a.reg38;a.q20=a.reg10*a.reg20+a.reg11*a.reg23+a.reg12*a.reg26;a.q21=a.reg10*a.reg21+a.reg11*a.reg24+a.reg12*a.reg27;a.q22=a.reg10*a.reg22+a.reg11*a.reg25+a.reg12*a.reg28;a.q23=a.reg13*a.reg20+a.reg14*a.reg23+a.reg15*a.reg26;a.q24=a.reg13*a.reg21+a.reg14*a.reg24+a.reg15*a.reg27;
a.q25=a.reg13*a.reg22+a.reg14*a.reg25+a.reg15*a.reg28;a.q26=a.reg16*a.reg20+a.reg17*a.reg23+a.reg18*a.reg26;a.q27=a.reg16*a.reg21+a.reg17*a.reg24+a.reg18*a.reg27;a.q28=a.reg16*a.reg22+a.reg17*a.reg25+a.reg18*a.reg28;a.reg20=a.q20;a.reg21=a.q21;a.reg22=a.q22;a.reg23=a.q23;a.reg24=a.q24;a.reg25=a.q25;a.reg26=a.q26;a.reg27=a.q27;a.reg28=a.q28;a.dist=.002;var c,d=0;do{d+=1;a.uvx=div(a.reg26*a.dist,a.q7);a.uvy=div(a.reg27*a.dist,a.q7);a.uvz=div(a.reg28*a.dist,a.q7);a.uvx+=a.posx;a.uvy+=a.posy;a.uvz+=a.posz;
a.uvx=8*(div(a.uvx,8)+30.5-Math.floor(div(a.uvx,8)+30.5)-.5);a.uvy=8*(div(a.uvy,8)+30.5-Math.floor(div(a.uvy,8)+30.5)-.5);a.uvz=8*(div(a.uvz,8)+30.5-Math.floor(div(a.uvz,8)+30.5)-.5);a.uvx0=a.uvx+a.q8;a.uvy0=a.uvy+a.q8;a.uvz0=a.uvz+a.q8;for(c=0;8>c;c++)a.uvx=.00001<Math.abs(1<a.uvx?1:0)?2-a.uvx:.00001<Math.abs(-1>a.uvx?1:0)?-2-a.uvx:a.uvx,a.uvy=.00001<Math.abs(1<a.uvy?1:0)?2-a.uvy:.00001<Math.abs(-1>a.uvy?1:0)?-2-a.uvy:a.uvy,a.uvz=.00001<Math.abs(1<a.uvz?1:0)?2-a.uvz:.00001<Math.abs(-1>a.uvz?1:0)?
-2-a.uvz:a.uvz,a.slen=a.uvx*a.uvx+a.uvy*a.uvy+a.uvz*a.uvz,a.uvx=2.6*(.00001<Math.abs(.25>a.slen?1:0)?4*a.uvx:.00001<Math.abs(1>a.slen?1:0)?div(a.uvx,a.slen):a.uvx)+a.uvx0,a.uvy=2.6*(.00001<Math.abs(.25>a.slen?1:0)?4*a.uvy:.00001<Math.abs(1>a.slen?1:0)?div(a.uvy,a.slen):a.uvy)+a.uvy0,a.uvz=2.6*(.00001<Math.abs(.25>a.slen?1:0)?4*a.uvz:.00001<Math.abs(1>a.slen?1:0)?div(a.uvz,a.slen):a.uvz)+a.uvz0;a.len=sqrt(a.uvx*a.uvx+a.uvy*a.uvy+a.uvz*a.uvz);a.dist*=1.1;c=(.6>a.dist?1:0)*(30<a.len?1:0)}while(.00001<
Math.abs(c)&&1048576>d);a.megabuf[Math.floor(a.n)]=a.megabuf[Math.floor(a.n)]*a.dec_s+(1-a.dec_s)*a.dist;a.avg+=Math.abs(div(a.megabuf[Math.floor(a.n)],5))}a.n=0;for(b=a.avg=0;5>b;b++)a.n+=1,a.avg+=Math.abs(div(a.megabuf[Math.floor(a.n)],5));a.xslope=Math.min(Math.max(div(2,a.avg)*(a.megabuf[1]-a.megabuf[3]),-3),3);a.yslope=Math.min(Math.max(div(2,a.avg)*(a.megabuf[4]-a.megabuf[2]),-3),3);a.monitor=a.avg;a.dist_=a.dist_*a.dec_s+(1-a.dec_s)*a.dist;a.q10=a.ds*a.q7;a.q14=Math.abs(a.ds)+2*(Math.abs(a.v1)+
Math.abs(a.v2)+Math.abs(a.v3))+div(1,255)+.05*a.start;a.q19=.6+.4*Math.sin(.02*a.time+6*a.cran0);a.start*=.9;a.q11=a.v1;a.q12=a.v2;a.q13=a.v3;a.monitor=a.q16;a.bb=.99*a.bb+.02*a.bass;a.mm=.99*a.mm+.02*a.mid;a.tt=.99*a.tt+.02*a.treb;a.mx=Math.max(Math.max(a.bb,a.mm),a.tt);a.mn=Math.min(Math.min(a.bb,a.mm),a.tt);a.h1=div(a.bb-a.mn,a.mx-a.mn);a.h2=div(a.mm-a.mn,a.mx-a.mn);a.h3=div(a.tt-a.mn,a.mx-a.mn);a.v=div(.1333,a.fps);a.bm+=(a.h1-a.h2)*a.v;a.mt+=(a.h2-a.h3)*a.v;a.bt+=(a.h1-a.h3)*a.v;a.w=2*a.bm;a.q3=
Math.sin(a.w);a.q9=Math.cos(a.w);a.q17=a.bm;a.q18=a.mt;a.q19=a.bt;`,pixel_eqs_str:"a.warp=0;a.zoom=1;a.dx=div(-a.q12,a.q16)*(1+0*pow(a.x-.5,2));a.dy=div(a.q13,a.q16)*(1+0*pow(a.y-.5,2));a.rot=a.q11;",warp:`float sustain;
float xlat_mutabledist;
float xlat_mutablestruc;
vec2 xlat_mutableuv1;
vec3 xlat_mutableuv2;
 shader_body { 
  mat3 tmpvar_1;
  tmpvar_1[uint(0)].x = q20;
  tmpvar_1[uint(0)].y = q23;
  tmpvar_1[uint(0)].z = q26;
  tmpvar_1[1u].x = q21;
  tmpvar_1[1u].y = q24;
  tmpvar_1[1u].z = q27;
  tmpvar_1[2u].x = q22;
  tmpvar_1[2u].y = q25;
  tmpvar_1[2u].z = q28;
  vec3 tmpvar_2;
  tmpvar_2.x = q4;
  tmpvar_2.y = q5;
  tmpvar_2.z = q6;
  sustain = (1.0123 - q14);
  vec2 uv_3;
  vec3 ret_4;
  vec2 tmpvar_5;
  tmpvar_5 = (uv - 0.5);
  xlat_mutableuv1 = ((tmpvar_5 * aspect.xy) * q16);
  vec4 tmpvar_6;
  tmpvar_6 = texture (sampler_pc_main, uv);
  uv_3 = ((tmpvar_5 * (1.0 - 
    (q10 / (1.0 - ((tmpvar_6.z + 
      (0.003921569 * tmpvar_6.y)
    ) + (q10 * 0.7))))
  )) + 0.5);
  vec4 tmpvar_7;
  tmpvar_7 = fract((8.0 * texture (sampler_noise_lq, (uv_3 + rand_frame.yz))));
  xlat_mutabledist = tmpvar_7.x;
  if ((tmpvar_7.y > 0.2)) {
    vec3 tmpvar_8;
    tmpvar_8 = (tmpvar_7.xyz - vec3(0.4, 0.5, 0.5));
    vec2 uvi_9;
    uvi_9 = ((tmpvar_8.zy * 0.003) + uv_3);
    vec2 pix_10;
    vec4 nb2_11;
    vec4 nb_12;
    vec2 x_13;
    x_13 = (uvi_9 - 0.5);
    pix_10 = (texsize.zw * (1.0 + (
      sqrt(dot (x_13, x_13))
     * 8.0)));
    float tmpvar_14;
    tmpvar_14 = (q10 * 0.7);
    vec4 tmpvar_15;
    tmpvar_15 = texture (sampler_pc_main, (uvi_9 - pix_10));
    nb_12.x = (1.0 - ((tmpvar_15.z + 
      (0.003921569 * tmpvar_15.y)
    ) + tmpvar_14));
    vec4 tmpvar_16;
    tmpvar_16 = texture (sampler_pc_main, (uvi_9 + (pix_10 * vec2(1.0, -1.0))));
    nb_12.y = (1.0 - ((tmpvar_16.z + 
      (0.003921569 * tmpvar_16.y)
    ) + tmpvar_14));
    vec4 tmpvar_17;
    tmpvar_17 = texture (sampler_pc_main, (uvi_9 + pix_10));
    nb_12.z = (1.0 - ((tmpvar_17.z + 
      (0.003921569 * tmpvar_17.y)
    ) + tmpvar_14));
    vec4 tmpvar_18;
    tmpvar_18 = texture (sampler_pc_main, (uvi_9 + (pix_10 * vec2(-1.0, 1.0))));
    nb_12.w = (1.0 - ((tmpvar_18.z + 
      (0.003921569 * tmpvar_18.y)
    ) + tmpvar_14));
    vec4 tmpvar_19;
    tmpvar_19 = texture (sampler_pc_main, (uvi_9 + (pix_10 * vec2(0.0, -1.0))));
    nb2_11.x = (1.0 - ((tmpvar_19.z + 
      (0.003921569 * tmpvar_19.y)
    ) + tmpvar_14));
    vec4 tmpvar_20;
    tmpvar_20 = texture (sampler_pc_main, (uvi_9 + (pix_10 * vec2(1.0, 0.0))));
    nb2_11.y = (1.0 - ((tmpvar_20.z + 
      (0.003921569 * tmpvar_20.y)
    ) + tmpvar_14));
    vec4 tmpvar_21;
    tmpvar_21 = texture (sampler_pc_main, (uvi_9 + (pix_10 * vec2(0.0, 1.0))));
    nb2_11.z = (1.0 - ((tmpvar_21.z + 
      (0.003921569 * tmpvar_21.y)
    ) + tmpvar_14));
    vec4 tmpvar_22;
    tmpvar_22 = texture (sampler_pc_main, (uvi_9 + (pix_10 * vec2(-1.0, 0.0))));
    nb2_11.w = (1.0 - ((tmpvar_22.z + 
      (0.003921569 * tmpvar_22.y)
    ) + tmpvar_14));
    vec4 tmpvar_23;
    tmpvar_23 = min (nb_12, nb2_11);
    nb_12.zw = tmpvar_23.zw;
    nb_12.xy = min (tmpvar_23.xy, tmpvar_23.zw);
    xlat_mutabledist = (min (nb_12.x, nb_12.y) + ((0.008 * tmpvar_8.x) * abs(tmpvar_8.y)));
  };
  vec4 tmpvar_24;
  tmpvar_24 = texture (sampler_pc_main, uv_3);
  float tmpvar_25;
  tmpvar_25 = min (xlat_mutabledist, (1.0 - (
    (tmpvar_24.z + (0.003921569 * tmpvar_24.y))
   + 
    (q10 * 0.7)
  )));
  xlat_mutabledist = tmpvar_25;
  float tmpvar_26;
  tmpvar_26 = (tmpvar_25 + pow (tmpvar_25, 3.0));
  vec3 tmpvar_27;
  tmpvar_27.xy = (xlat_mutableuv1 * tmpvar_26);
  tmpvar_27.z = tmpvar_26;
  xlat_mutableuv2 = (((tmpvar_27 / q7) * tmpvar_1) + tmpvar_2);
  xlat_mutableuv2 = ((fract(
    ((xlat_mutableuv2 / 8.0) + 0.5)
  ) - 0.5) * 8.0);
  float li_28;
  vec3 zz0_29;
  vec3 zz_30;
  zz0_29 = (xlat_mutableuv2 + q8);
  li_28 = 0.0;
  zz_30 = ((2.0 * clamp (xlat_mutableuv2, vec3(-1.0, -1.0, -1.0), vec3(1.0, 1.0, 1.0))) - xlat_mutableuv2);
  float tmpvar_31;
  tmpvar_31 = dot (zz_30, zz_30);
  if ((tmpvar_31 <= 0.25)) {
    zz_30 = (zz_30 * 4.0);
    li_28 = 24.0;
  } else {
    if ((tmpvar_31 <= 1.0)) {
      zz_30 = (zz_30 / tmpvar_31);
    };
  };
  zz_30 = ((2.6 * zz_30) + zz0_29);
  zz_30 = ((2.0 * clamp (zz_30, vec3(-1.0, -1.0, -1.0), vec3(1.0, 1.0, 1.0))) - zz_30);
  float tmpvar_32;
  tmpvar_32 = dot (zz_30, zz_30);
  if ((tmpvar_32 <= 0.25)) {
    zz_30 = (zz_30 * 4.0);
    li_28 = 24.0;
  } else {
    if ((tmpvar_32 <= 1.0)) {
      zz_30 = (zz_30 / tmpvar_32);
    };
  };
  zz_30 = ((2.6 * zz_30) + zz0_29);
  zz_30 = ((2.0 * clamp (zz_30, vec3(-1.0, -1.0, -1.0), vec3(1.0, 1.0, 1.0))) - zz_30);
  float tmpvar_33;
  tmpvar_33 = dot (zz_30, zz_30);
  if ((tmpvar_33 <= 0.25)) {
    zz_30 = (zz_30 * 4.0);
    li_28 = 24.0;
  } else {
    if ((tmpvar_33 <= 1.0)) {
      zz_30 = (zz_30 / tmpvar_33);
    };
  };
  zz_30 = ((2.6 * zz_30) + zz0_29);
  zz_30 = ((2.0 * clamp (zz_30, vec3(-1.0, -1.0, -1.0), vec3(1.0, 1.0, 1.0))) - zz_30);
  float tmpvar_34;
  tmpvar_34 = dot (zz_30, zz_30);
  if ((tmpvar_34 <= 0.25)) {
    zz_30 = (zz_30 * 4.0);
    li_28 = 24.0;
  } else {
    if ((tmpvar_34 <= 1.0)) {
      zz_30 = (zz_30 / tmpvar_34);
    };
  };
  zz_30 = ((2.6 * zz_30) + zz0_29);
  zz_30 = ((2.0 * clamp (zz_30, vec3(-1.0, -1.0, -1.0), vec3(1.0, 1.0, 1.0))) - zz_30);
  float tmpvar_35;
  tmpvar_35 = dot (zz_30, zz_30);
  if ((tmpvar_35 <= 0.25)) {
    zz_30 = (zz_30 * 4.0);
    li_28 = 24.0;
  } else {
    if ((tmpvar_35 <= 1.0)) {
      zz_30 = (zz_30 / tmpvar_35);
    };
  };
  zz_30 = ((2.6 * zz_30) + zz0_29);
  zz_30 = ((2.0 * clamp (zz_30, vec3(-1.0, -1.0, -1.0), vec3(1.0, 1.0, 1.0))) - zz_30);
  float tmpvar_36;
  tmpvar_36 = dot (zz_30, zz_30);
  if ((tmpvar_36 <= 0.25)) {
    zz_30 = (zz_30 * 4.0);
    li_28 = 24.0;
  } else {
    if ((tmpvar_36 <= 1.0)) {
      zz_30 = (zz_30 / tmpvar_36);
    };
  };
  zz_30 = ((2.6 * zz_30) + zz0_29);
  zz_30 = ((2.0 * clamp (zz_30, vec3(-1.0, -1.0, -1.0), vec3(1.0, 1.0, 1.0))) - zz_30);
  float tmpvar_37;
  tmpvar_37 = dot (zz_30, zz_30);
  if ((tmpvar_37 <= 0.25)) {
    zz_30 = (zz_30 * 4.0);
    li_28 = 24.0;
  } else {
    if ((tmpvar_37 <= 1.0)) {
      zz_30 = (zz_30 / tmpvar_37);
    };
  };
  zz_30 = ((2.6 * zz_30) + zz0_29);
  zz_30 = ((2.0 * clamp (zz_30, vec3(-1.0, -1.0, -1.0), vec3(1.0, 1.0, 1.0))) - zz_30);
  float tmpvar_38;
  tmpvar_38 = dot (zz_30, zz_30);
  if ((tmpvar_38 <= 0.25)) {
    zz_30 = (zz_30 * 4.0);
    li_28 = 24.0;
  } else {
    if ((tmpvar_38 <= 1.0)) {
      zz_30 = (zz_30 / tmpvar_38);
    };
  };
  zz_30 = ((2.6 * zz_30) + zz0_29);
  vec4 tmpvar_39;
  tmpvar_39.xyz = zz_30;
  tmpvar_39.w = li_28;
  float tmpvar_40;
  tmpvar_40 = sqrt(dot (zz_30, zz_30));
  xlat_mutablestruc = (sqrt(dot (tmpvar_39.xyw, tmpvar_39.xyw)) / 24.0);
  vec4 tmpvar_41;
  tmpvar_41 = texture (sampler_pc_main, uv_3);
  float tmpvar_42;
  float tmpvar_43;
  tmpvar_43 = (q10 * 0.7);
  tmpvar_42 = ((log(
    (1.0 + (tmpvar_40 / 24.0))
  ) * 0.02) * (1.0 - (1.0 - 
    ((tmpvar_41.z + (0.003921569 * tmpvar_41.y)) + tmpvar_43)
  )));
  float tmpvar_44;
  vec4 tmpvar_45;
  tmpvar_45 = texture (sampler_pc_main, uv_3);
  tmpvar_44 = (1.0 - ((tmpvar_45.z + 
    (0.003921569 * tmpvar_45.y)
  ) + tmpvar_43));
  if ((((tmpvar_25 <= tmpvar_44) && (tmpvar_40 < 24.0)) && (tmpvar_25 > 0.005))) {
    ret_4.x = (((1.0 - sustain) * xlat_mutablestruc) + (sustain * mix (texture (sampler_main, uv_3).xyz, 
      ((texture (sampler_blur1, uv_3).xyz * scale1) + bias1)
    , vec3(
      (q14 * 4.0)
    )).x));
    float x_46;
    x_46 = ((1.0 - tmpvar_25) * 255.0);
    float ip_47;
    ip_47 = float(int(x_46));
    vec2 tmpvar_48;
    tmpvar_48.x = (x_46 - ip_47);
    tmpvar_48.y = (ip_47 / 255.0);
    ret_4.yz = tmpvar_48;
  } else {
    vec3 tmpvar_49;
    tmpvar_49.y = 0.0;
    tmpvar_49.x = sustain;
    tmpvar_49.z = (1.0 - tmpvar_42);
    vec3 tmpvar_50;
    tmpvar_50.xy = vec2(0.003921569, 0.0);
    tmpvar_50.z = (q14 / 6.0);
    ret_4 = ((texture (sampler_fc_main, uv_3).xyz * tmpvar_49) - tmpvar_50);
  };
  vec4 tmpvar_51;
  tmpvar_51.w = 1.0;
  tmpvar_51.xyz = ret_4;
  ret = tmpvar_51.xyz;
 }`,comp:`vec2 xlat_mutabled;
vec3 xlat_mutabledx;
vec3 xlat_mutabledy;
 shader_body { 
  vec3 ret_1;
  xlat_mutabled = (texsize.zw * 1.5);
  xlat_mutabledx = (texture (sampler_main, (uv_orig + (vec2(1.0, 0.0) * xlat_mutabled))).xyz - texture (sampler_main, (uv_orig - (vec2(1.0, 0.0) * xlat_mutabled))).xyz);
  xlat_mutabledy = (texture (sampler_main, (uv_orig + (vec2(0.0, 1.0) * xlat_mutabled))).xyz - texture (sampler_main, (uv_orig - (vec2(0.0, 1.0) * xlat_mutabled))).xyz);
  vec2 tmpvar_2;
  tmpvar_2.x = xlat_mutabledx.y;
  tmpvar_2.y = xlat_mutabledy.y;
  vec2 x_3;
  x_3 = (tmpvar_2 * 8.0);
  ret_1 = (((texture (sampler_main, uv).x * 
    (1.0 - sqrt(dot (x_3, x_3)))
  ) * pow (hue_shader, vec3(6.0, 6.0, 6.0))) * 1.4);
  vec2 tmpvar_4;
  tmpvar_4.x = xlat_mutabledx.z;
  tmpvar_4.y = xlat_mutabledy.z;
  vec2 x_5;
  x_5 = (tmpvar_4 * 4.0);
  vec3 tmpvar_6;
  tmpvar_6 = mix (ret_1, vec3(1.0, 1.0, 1.0), vec3(sqrt(dot (x_5, x_5))));
  ret_1 = tmpvar_6;
  vec4 tmpvar_7;
  tmpvar_7.w = 1.0;
  tmpvar_7.xyz = tmpvar_6;
  ret = tmpvar_7.xyz;
 }`}},function(o,l){o.exports={baseVals:{rating:4,gammaadj:1.9,echo_zoom:1.169,echo_orient:1,wave_mode:5,additivewave:1,wave_a:0,wave_scale:.9,wave_smoothing:.63,wave_mystery:1,modwavealphastart:2,modwavealphaend:2,warpscale:2.853,rot:.006,warp:0,wave_r:.65,wave_g:.65,wave_b:.65,ob_size:.005,mv_x:0,mv_y:48,mv_dx:-.941,mv_dy:.426,mv_l:5,mv_r:.316,mv_g:.078,mv_b:.942,mv_a:0,b1ed:0},shapes:[{baseVals:{enabled:1,sides:100,textured:1,rad:.78903,ang:.62832,tex_zoom:1.02009,r:0,g:1,b:1,r2:.7,b2:1,border_a:0},init_eqs_str:"a.vx=0;a.vy=0;",frame_eqs_str:""},{baseVals:{enabled:0}},{baseVals:{enabled:0}},{baseVals:{enabled:0}}],waves:[{baseVals:{enabled:0}},{baseVals:{enabled:0}},{baseVals:{enabled:0}},{baseVals:{enabled:0}}],init_eqs_str:"a.d=0;a.y3=0;a.y1=0;a.xx=0;a.res=0;a.q12=0;a.x1=0;a.vx3=0;a.q13=0;a.q6=0;a.dt=0;a.q1=0;a.q5=0;a.c_x=0;a.c_y=0;a.q9=0;a.d1=0;a.v=0;a.si1=0;a.vx4=0;a.diff=0;a.x3=0;a.q23=0;a.q24=0;a.d2=0;a.q11=0;a.q10=0;a.xx2=0;a.q4=0;a.yy1=0;a.vy4=0;a.dir=0;a.x4=0;a.r=0;a.x2=0;a.beat=0;a.vol=0;a.vy2=0;a.y2=0;a.size=0;a.q2=0;a.q14=0;a.si2=0;a.vx2=0;a.q3=0;a.yy=0;a.y4=0;a.q7=0;a.vy3=0;a.strength=0;a.xx1=0;a.velocity=0;a.q8=0;a.c_x=.5;a.c_y=.5;",frame_eqs_str:`a.sx=1+.01*mod(8*a.bass,8)*equal(mod(a.time,Math.floor(24-2*a.bass)),0);a.sy=1+.01*mod(8*a.mid,8)*equal(mod(a.time,12+Math.floor(24-2*a.bass)),0);a.q1=a.aspectx;a.q2=a.aspecty;a.rot=0;a.zoom=1;a.warp=0;a.vol=8*a.bass+4*a.mid+2*a.treb;a.vol*=above(a.vol,17);a.monitor=a.vol;a.beat=above(a.vol,a.res);a.diff=(1-a.beat)*a.diff+a.beat*(a.vol-a.res);a.res=a.beat*(a.vol+2*a.diff)+(1-a.beat)*(a.res-div(60*(.04*a.diff+.12),a.fps));a.res=Math.max(0,a.res);a.monitor=a.res;a.r=.00001<Math.abs(a.beat)?
.0001*(randint(200)-100):a.r;a.rot=a.r;a.c_x=.00001<Math.abs(a.beat)?.5+.005*(randint(200)-100):a.c_x;a.c_y=.00001<Math.abs(a.beat)?.5+.005*(randint(200)-100):a.c_y;a.q23=a.c_x;a.q24=a.c_y;a.xx1=.9*a.xx1+.01*a.bass;a.xx2=.9*a.xx2+.01*a.treb;a.yy1=.94*a.yy1+.0075*(a.treb+a.bass);a.x1=.5+2*(a.xx1-a.xx2);a.y1=.4+1.5*a.yy1;a.dt=div(.03,a.fps);a.vx2=a.vx2*(1-2*a.dt)+10*a.dt*(a.x1+a.x3-2*a.x2);a.vy2=a.vy2*(1-2*a.dt)+a.dt*(10*(a.y1+a.y3-2*a.y2)-.5);a.vx3=a.vx3*(1-2*a.dt)+10*a.dt*(a.x2+a.x4-2*a.x3);a.vy3=
a.vy3*(1-2*a.dt)+a.dt*(10*(a.y2+a.y4-2*a.y3)-.5);a.vx4=a.vx4*(1-2*a.dt)+10*a.dt*(a.x3-a.x4);a.vy4=a.vy4*(1-2*a.dt)+a.dt*(10*(a.y3-a.y4)-.5);a.x2+=a.vx2;a.y2+=a.vy2;a.x3+=a.vx3;a.y3+=a.vy3;a.x4+=a.vx4;a.y4+=a.vy4;a.vx2=.00001<Math.abs(above(a.x2,0))?a.vx2:.5*Math.abs(a.vx2);a.vx2=.00001<Math.abs(below(a.x2,1))?a.vx2:.5*-Math.abs(a.vx2);a.vx3=.00001<Math.abs(above(a.x3,0))?a.vx3:.5*Math.abs(a.vx3);a.vx3=.00001<Math.abs(below(a.x3,1))?a.vx3:.5*-Math.abs(a.vx3);a.vx4=.00001<Math.abs(above(a.x4,0))?a.vx4:
.5*Math.abs(a.vx4);a.vx4=.00001<Math.abs(below(a.x4,1))?a.vx4:.5*-Math.abs(a.vx4);a.vy2=.00001<Math.abs(above(a.y2,0))?a.vy2:.5*Math.abs(a.vy2);a.vy2=.00001<Math.abs(below(a.y2,1))?a.vy2:.5*-Math.abs(a.vy2);a.vy3=.00001<Math.abs(above(a.y3,0))?a.vy3:.5*Math.abs(a.vy3);a.vy3=.00001<Math.abs(below(a.y3,1))?a.vy3:.5*-Math.abs(a.vy3);a.vy4=.00001<Math.abs(above(a.y4,0))?a.vy4:.5*Math.abs(a.vy4);a.vy4=.00001<Math.abs(below(a.y4,1))?a.vy4:.5*-Math.abs(a.vy4);a.q1=a.x1;a.q2=a.x2;a.q3=a.x3;a.q4=a.x4;a.q5=
a.y1;a.q6=a.y2;a.q7=a.y3;a.q8=a.y4;a.q9=div(1,a.aspectx);a.q10=div(1,a.aspecty);a.q11=a.aspectx;a.q12=a.aspecty;a.q13=.8*sqrt(a.vx4*a.vx4+a.vy4*a.vy4);a.q14=Math.atan2(a.vx4,a.vy4);`,pixel_eqs_str:`a.d=pow(sqrt(sqr(a.x-a.q3)+sqr(a.y-a.q4)),2)-0;a.v=.03;a.dx=a.v*(a.x-a.q23)*a.d;a.dy=a.v*(a.y-a.q24)*a.d;a.x=.5+(a.x-.5)*a.q11;a.y=.5+(a.y-.5)*a.q12;a.dir=-a.q14+Math.asin(1);a.velocity=a.q13;a.strength=100;a.size=.07;a.xx=a.q4;a.yy=1-a.q8;a.x1=a.xx+Math.cos(a.dir+1.5708)*a.size;a.y1=a.yy-Math.sin(a.dir+1.5708)*a.size;a.x2=a.xx-Math.cos(a.dir+1.5708)*a.size;a.y2=a.yy+Math.sin(a.dir+1.5708)*a.size;a.d1=sqrt((a.x1-a.x)*(a.x1-a.x)+(a.y1-a.y)*(a.y1-a.y))-2*a.size;a.si1=1-div(1,
1+pow(2,100*-a.d1));a.d2=sqrt((a.x2-a.x)*(a.x2-a.x)+(a.y2-a.y)*(a.y2-a.y))-2*a.size;a.si2=1-div(1,1+pow(2,100*-a.d2));a.dx+=(a.si1*Math.sin(a.y1-a.y)*a.d1-a.si2*Math.sin(a.y2-a.y)*a.d2)*a.strength*a.velocity;a.dy+=(-a.si1*Math.sin(a.x1-a.x)*a.d1+a.si2*Math.sin(a.x2-a.x)*a.d2)*a.strength*a.velocity;`,warp:`vec2 xlat_mutabled;
vec3 xlat_mutabledx;
vec3 xlat_mutabledy;
 shader_body { 
  vec3 ret_1;
  vec3 tmpvar_2;
  tmpvar_2 = (texture (sampler_noise_lq, ((
    (uv_orig * texsize.xy)
   * texsize_noise_lq.zw) + rand_frame.xy)).xyz - 0.5);
  xlat_mutabled = (texsize.zw * 4.0);
  xlat_mutabledx = (((texture (sampler_blur1, 
    (uv_orig + (vec2(1.0, 0.0) * xlat_mutabled))
  ).xyz * scale1) + bias1) - ((texture (sampler_blur1, 
    (uv_orig - (vec2(1.0, 0.0) * xlat_mutabled))
  ).xyz * scale1) + bias1));
  xlat_mutabledy = (((texture (sampler_blur1, 
    (uv_orig + (vec2(0.0, 1.0) * xlat_mutabled))
  ).xyz * scale1) + bias1) - ((texture (sampler_blur1, 
    (uv_orig - (vec2(0.0, 1.0) * xlat_mutabled))
  ).xyz * scale1) + bias1));
  xlat_mutabled = uv;
  vec2 tmpvar_3;
  tmpvar_3.x = xlat_mutabledx.y;
  tmpvar_3.y = xlat_mutabledy.y;
  vec2 tmpvar_4;
  tmpvar_4.x = xlat_mutabledx.z;
  tmpvar_4.y = xlat_mutabledy.z;
  vec4 tmpvar_5;
  tmpvar_5 = texture (sampler_main, uv_orig);
  ret_1.y = ((texture (sampler_main, (uv - 
    ((tmpvar_3 * texsize.zw) * 6.0)
  )).y - 0.008) + ((1.0 - tmpvar_5.x) * 0.018));
  ret_1.z = ((texture (sampler_main, (uv - 
    ((tmpvar_4 * texsize.zw) * 6.0)
  )).z - 0.008) + (tmpvar_5.x * 0.018));
  ret_1.x = texture (sampler_fc_main, (uv + ((tmpvar_2.xy * texsize.zw) * 0.5))).x;
  ret_1.x = (ret_1.x + ((
    (ret_1.x - ((texture (sampler_blur3, uv).xyz * scale3) + bias3).x)
   * 0.15) + (tmpvar_2 * 0.0042)).x);
  vec4 tmpvar_6;
  tmpvar_6.w = 1.0;
  tmpvar_6.xyz = ret_1;
  ret = tmpvar_6.xyz;
 }`,comp:` shader_body { 
  vec2 tmpvar_1;
  tmpvar_1.x = q3;
  tmpvar_1.y = q4;
  vec2 tmpvar_2;
  tmpvar_2.x = q6;
  tmpvar_2.y = q7;
  vec2 tmpvar_3;
  tmpvar_3.x = q9;
  tmpvar_3.y = q10;
  vec2 tmpvar_4;
  tmpvar_4.x = q12;
  tmpvar_4.y = q13;
  vec2 tmpvar_5;
  tmpvar_5 = (texsize.zw * 1.25);
  vec3 tmpvar_6;
  tmpvar_6 = (texture (sampler_main, (uv + (vec2(1.0, 0.0) * tmpvar_5))).xyz - texture (sampler_main, (uv - (vec2(1.0, 0.0) * tmpvar_5))).xyz);
  vec3 tmpvar_7;
  tmpvar_7 = (texture (sampler_main, (uv + (vec2(0.0, 1.0) * tmpvar_5))).xyz - texture (sampler_main, (uv - (vec2(0.0, 1.0) * tmpvar_5))).xyz);
  vec2 tmpvar_8;
  tmpvar_8.x = dot (tmpvar_6, vec3(0.32, 0.49, 0.29));
  tmpvar_8.y = dot (tmpvar_7, vec3(0.32, 0.49, 0.29));
  vec2 x_9;
  x_9 = ((uv - (tmpvar_8 * 8.0)) - tmpvar_1);
  vec2 tmpvar_10;
  tmpvar_10.x = dot (tmpvar_6, vec3(0.32, 0.49, 0.29));
  tmpvar_10.y = dot (tmpvar_7, vec3(0.32, 0.49, 0.29));
  vec2 x_11;
  x_11 = ((uv - (tmpvar_10 * 8.0)) - tmpvar_2);
  vec2 tmpvar_12;
  tmpvar_12.x = dot (tmpvar_6, vec3(0.32, 0.49, 0.29));
  tmpvar_12.y = dot (tmpvar_7, vec3(0.32, 0.49, 0.29));
  vec2 x_13;
  x_13 = ((uv - (tmpvar_12 * 8.0)) - tmpvar_3);
  vec2 tmpvar_14;
  tmpvar_14.x = dot (tmpvar_6, vec3(0.32, 0.49, 0.29));
  tmpvar_14.y = dot (tmpvar_7, vec3(0.32, 0.49, 0.29));
  vec2 x_15;
  x_15 = ((uv - (tmpvar_14 * 8.0)) - tmpvar_4);
  vec4 tmpvar_16;
  tmpvar_16.w = 1.0;
  tmpvar_16.xyz = mix (texture (sampler_main, uv).xyz, max (max (
    (vec3((1.0 - pow (sqrt(
      dot (x_9, x_9)
    ), 0.2))) * vec3(2.0, 1.0, -1.0))
  , 
    (vec3((1.0 - pow (sqrt(
      dot (x_11, x_11)
    ), 0.2))) * vec3(2.0, -1.0, 1.0))
  ), max (
    (vec3((1.0 - pow (sqrt(
      dot (x_13, x_13)
    ), 0.2))) * vec3(-1.0, 1.0, 2.0))
  , 
    (vec3((1.0 - pow (sqrt(
      dot (x_15, x_15)
    ), 0.2))) * vec3(1.0, -1.0, 2.0))
  )), vec3(0.5, 0.5, 0.5));
  ret = tmpvar_16.xyz;
 }`}},function(o,l){o.exports={baseVals:{rating:5,gammaadj:1,decay:.955,echo_zoom:.997,echo_alpha:.5,wave_mode:7,additivewave:1,modwavealphabyvolume:1,wave_brighten:0,wave_a:.001,wave_scale:.49,wave_smoothing:0,modwavealphastart:.71,modwavealphaend:1.3,warpscale:16.016,zoomexp:11.56276,fshader:1,zoom:1.05971,warp:.13126,wave_r:.65,wave_g:.65,wave_b:.65,ob_size:0,ob_a:1,ib_size:0,mv_x:64,mv_y:48,mv_l:0,mv_a:0},shapes:[{baseVals:{enabled:1,sides:14,additive:1,num_inst:126,rad:.0303,tex_ang:.62832,r:0,b:1,g2:0,b2:1,a2:1,border_a:0},init_eqs_str:"a.ma=0;a.mx=0;a.my=0;",frame_eqs_str:"a.ma+=3.1415*above(a.bass,1)*.01*a.bass;a.ma-=3.1415*above(a.treb,1)*.01*a.treb;a.mx+=.0002*Math.cos(a.ma);a.my+=.0002*Math.sin(a.ma);a.mx=.00001<Math.abs(above(a.mx,.9))?.9-a.mx:a.mx;a.my=.00001<Math.abs(above(a.my,.9))?.9-a.my:a.my;a.mx=.00001<Math.abs(below(a.mx,.1))?.9+a.mx:a.mx;a.my=.00001<Math.abs(below(a.my,.1))?.9+a.my:a.my;a.x=a.mx;a.y=a.my;a.a=above(a.bass+a.mid+a.treb,.8);"},{baseVals:{enabled:1,sides:14,additive:1,num_inst:128,rad:.03,tex_ang:.62832,r:0,b:1,g2:0,b2:1,a2:1,border_a:0},init_eqs_str:"a.ma=0;a.mx=0;a.my=0;",frame_eqs_str:"a.ma+=3.1415*above(a.bass,1)*.05*a.bass;a.ma-=3.1415*above(a.mid,1)*.05*a.mid;a.mx+=.0001*Math.cos(a.ma);a.my+=.0001*Math.sin(a.ma);a.mx=.00001<Math.abs(above(a.mx,.9))?.9-a.mx:a.mx;a.my=.00001<Math.abs(above(a.my,.9))?.9-a.my:a.my;a.mx=.00001<Math.abs(below(a.mx,.1))?.9+a.mx:a.mx;a.my=.00001<Math.abs(below(a.my,.1))?.9+a.my:a.my;a.x=a.mx;a.y=a.my;a.a=above(a.bass+a.mid+a.treb,.1);"},{baseVals:{enabled:1,sides:14,additive:1,num_inst:32,rad:.0297,tex_ang:.62832,r:0,b:1,g2:0,b2:1,a2:1,border_a:0},init_eqs_str:"a.ma=0;a.mx=0;a.my=0;",frame_eqs_str:"a.ma+=3.1415*above(a.mid,1)*.01*a.mid;a.ma-=3.1415*above(a.treb,1)*.01*a.treb;a.mx+=.0004*Math.cos(a.ma);a.my+=.0004*Math.sin(a.ma);a.mx=.00001<Math.abs(above(a.mx,.9))?.9-a.mx:a.mx;a.my=.00001<Math.abs(above(a.my,.9))?.9-a.my:a.my;a.mx=.00001<Math.abs(below(a.mx,.1))?.9+a.mx:a.mx;a.my=.00001<Math.abs(below(a.my,.1))?.9+a.my:a.my;a.x=a.mx;a.y=a.my;a.a=above(a.bass+a.mid+a.treb,.3);"},{baseVals:{enabled:1,sides:14,additive:1,num_inst:16,rad:.0303,tex_ang:.62832,r:0,b:1,g2:0,b2:1,a2:1,border_a:0},init_eqs_str:"a.ma=0;a.mx=0;a.my=0;",frame_eqs_str:"a.ma+=3.1415*above(a.bass,.5)*.02*a.bass;a.ma-=3.1415*above(a.treb,.5)*.02*a.treb;a.mx+=.0008*Math.cos(a.ma);a.my+=.0008*Math.sin(a.ma);a.mx=.00001<Math.abs(above(a.mx,.9))?.9-a.mx:a.mx;a.my=.00001<Math.abs(above(a.my,.9))?.9-a.my:a.my;a.mx=.00001<Math.abs(below(a.mx,.1))?.9+a.mx:a.mx;a.my=.00001<Math.abs(below(a.my,.1))?.9+a.my:a.my;a.x=a.mx;a.y=a.my;a.a=above(a.bass+a.mid+a.treb,.2);"}],waves:[{baseVals:{enabled:1,thick:1,additive:1,scaling:2.0231,smoothing:0,r:0,b:0},init_eqs_str:"a.d=0;a.tt2=0;a.res=0;a.tt1=0;a.diff=0;a.tt3=0;a.beat=0;a.vol=0;a.m=0;a.monitor=0;a.t2=0;a.t3=0;a.t4=0;a.cl=0;",frame_eqs_str:"a.vol=8*a.bass+5*a.mid+3*a.treb;a.m=.97*a.m+.08*a.vol;a.monitor=a.vol;a.beat=above(a.vol,a.res)*above(a.vol,a.m)*above(a.vol,16);a.diff=(1-a.beat)*a.diff+a.beat*(a.vol-a.res);a.res=a.beat*(a.vol+.04*a.m)+(1-a.beat)*(a.res-div(60*(.1+.02*a.diff),a.fps));a.res=Math.max(0,a.res);a.a=a.beat;",point_eqs_str:"a.tt3=.6*a.tt3+1*a.value1;a.tt2=.7*a.tt2+.2*a.tt3;a.tt1=.8*a.tt1+.1*a.tt2;a.d=.9*a.d+.2*a.tt1;a.y=.5+a.d*a.sample*(1-a.sample)*4;a.x=-.05+1.1*a.sample;"},{baseVals:{enabled:0}},{baseVals:{enabled:0}},{baseVals:{enabled:0}}],init_eqs_str:"a.y3=0;a.y1=0;a.xx=0;a.si3=0;a.q12=0;a.t1=0;a.x1=0;a.vx3=0;a.q6=0;a.dt=0;a.q1=0;a.q5=0;a.q9=0;a.d1=0;a.si1=0;a.vx4=0;a.grav=0;a.x3=0;a.d2=0;a.q11=0;a.q10=0;a.xx2=0;a.q4=0;a.yy1=0;a.vy4=0;a.dir=0;a.bounce=0;a.x4=0;a.r=0;a.x2=0;a.vy2=0;a.y2=0;a.q2=0;a.m1=0;a.spring=0;a.si2=0;a.vx2=0;a.q3=0;a.resist=0;a.yy=0;a.y4=0;a.q7=0;a.vy3=0;a.xx1=0;a.b1=0;a.q8=0;",frame_eqs_str:`a.xx1=.9*a.xx1+.01*a.bass;a.xx2=.9*a.xx2+.01*a.treb;a.yy1=.94*a.yy1+.0075*(a.treb+a.bass);a.x1=.5+2*(a.xx1-a.xx2);a.y1=.4+a.yy1;a.x1=Math.max(0,Math.min(1,a.x1));a.y1=Math.max(0,Math.min(1,a.y1));a.spring=10;a.grav=.5;a.resist=1;a.bounce=.75;a.dt=.0005*div(60,a.fps);a.vx2=a.vx2*(1-a.resist*a.dt)+a.dt*(a.x1+a.x3-2*a.x2)*a.spring;a.vy2=a.vy2*(1-a.resist*a.dt)+a.dt*((a.y1+a.y3-2*a.y2)*a.spring-a.grav);a.vx3=a.vx3*(1-a.resist*a.dt)+a.dt*(a.x2+a.x4-2*a.x3)*a.spring;a.vy3=a.vy3*(1-
a.resist*a.dt)+a.dt*((a.y2+a.y4-2*a.y3)*a.spring-a.grav);a.vx4=a.vx4*(1-a.resist*a.dt)+a.dt*(a.x3-a.x4)*a.spring;a.vy4=a.vy4*(1-a.resist*a.dt)+a.dt*((a.y3-a.y4)*a.spring-a.grav);a.x2+=a.vx2;a.y2+=a.vy2;a.x3+=a.vx3;a.y3+=a.vy3;a.x4+=a.vx4;a.y4+=a.vy4;a.vx2=.00001<Math.abs(above(a.x2,0))?a.vx2:Math.abs(a.vx2)*a.bounce;a.vx2=.00001<Math.abs(below(a.x2,1))?a.vx2:-Math.abs(a.vx2)*a.bounce;a.vx3=.00001<Math.abs(above(a.x3,0))?a.vx3:Math.abs(a.vx3)*a.bounce;a.vx3=.00001<Math.abs(below(a.x3,1))?a.vx3:-Math.abs(a.vx3)*
a.bounce;a.vx4=.00001<Math.abs(above(a.x4,0))?a.vx4:Math.abs(a.vx4)*a.bounce;a.vx4=.00001<Math.abs(below(a.x4,1))?a.vx4:-Math.abs(a.vx4)*a.bounce;a.vy2=.00001<Math.abs(above(a.y2,0))?a.vy2:Math.abs(a.vy2)*a.bounce;a.vy2=.00001<Math.abs(below(a.y2,1))?a.vy2:-Math.abs(a.vy2)*a.bounce;a.vy3=.00001<Math.abs(above(a.y3,0))?a.vy3:Math.abs(a.vy3)*a.bounce;a.vy3=.00001<Math.abs(below(a.y3,1))?a.vy3:-Math.abs(a.vy3)*a.bounce;a.vy4=.00001<Math.abs(above(a.y4,0))?a.vy4:Math.abs(a.vy4)*a.bounce;a.vy4=.00001<
Math.abs(below(a.y4,1))?a.vy4:-Math.abs(a.vy4)*a.bounce;a.q1=a.x1;a.q2=a.x2;a.q3=a.x3;a.q4=a.x4;a.q5=a.y1;a.q6=a.y2;a.q7=a.y3;a.q8=a.y4;a.q9=div(1,a.aspectx);a.q10=div(1,a.aspecty);a.zoom=1;a.r=.96*a.r+(a.x1-.5);a.rot=.1*a.r;a.q12=Math.atan2(a.vx4,a.vy4);a.q11=sqrt(a.vx4*a.vx4+a.vy4*a.vy4);a.zoom=1.001;a.rot=0;a.warp=.2;a.wave_a=0;`,pixel_eqs_str:`a.dir=-a.q12+Math.asin(1);a.b1=.1;a.m1=25*a.q11;a.t1=.05;a.xx=a.q4;a.yy=1-a.q8;a.x1=a.xx+Math.cos(a.dir+1.5708)*a.b1;a.y1=a.yy-Math.sin(a.dir+1.5708)*a.b1;a.x2=a.xx-Math.cos(a.dir+1.5708)*a.b1;a.y2=a.yy+Math.sin(a.dir+1.5708)*a.b1;a.d1=sqrt((a.x1-a.x)*(a.x1-a.x)+(a.y1-a.y)*(a.y1-a.y))-2*a.b1;a.si1=1-div(1,1+pow(2,1E3*-a.d1));a.d2=sqrt((a.x2-a.x)*(a.x2-a.x)+(a.y2-a.y)*(a.y2-a.y))-2*a.b1;a.si2=1-div(1,1+pow(2,1E3*-a.d2));a.si3=0*-pow(a.q5,3);a.dx=2*(a.si1*Math.sin(a.y1-a.y)*a.m1*
a.d1-a.si2*Math.sin(a.y2-a.y)*a.m1*a.d2+a.si3*Math.cos(a.dir)*a.t1);a.dy=2*(-a.si1*Math.sin(a.x1-a.x)*a.m1*a.d1+a.si2*Math.sin(a.x2-a.x)*a.m1*a.d2-a.si3*Math.sin(a.dir)*a.t1);`,warp:` shader_body { 
  vec3 ret_1;
  vec2 tmpvar_2;
  tmpvar_2 = (texsize.zw * 8.0);
  vec3 tmpvar_3;
  tmpvar_3 = (((texture (sampler_blur1, 
    (uv + (vec2(1.0, 0.0) * tmpvar_2))
  ).xyz * scale1) + bias1) - ((texture (sampler_blur1, 
    (uv - (vec2(1.0, 0.0) * tmpvar_2))
  ).xyz * scale1) + bias1));
  vec3 tmpvar_4;
  tmpvar_4 = (((texture (sampler_blur1, 
    (uv + (vec2(0.0, 1.0) * tmpvar_2))
  ).xyz * scale1) + bias1) - ((texture (sampler_blur1, 
    (uv - (vec2(0.0, 1.0) * tmpvar_2))
  ).xyz * scale1) + bias1));
  vec2 tmpvar_5;
  tmpvar_5.x = tmpvar_3.z;
  tmpvar_5.y = tmpvar_4.z;
  vec2 tmpvar_6;
  tmpvar_6 = (uv + ((tmpvar_5 * texsize.zw) * 4.0));
  ret_1.z = (((texture (sampler_main, tmpvar_6).z - 
    ((texture (sampler_main, tmpvar_6).z - ((texture (sampler_blur3, tmpvar_6).xyz * scale3) + bias3).z) * 0.02)
  ) - 0.008) + ((texture (sampler_noise_lq, 
    (((uv_orig * texsize.xy) * texsize_noise_lq.zw) + rand_frame.xy)
  ).xyz - 0.5) * 0.1)).x;
  vec2 tmpvar_7;
  tmpvar_7.x = tmpvar_3.x;
  tmpvar_7.y = tmpvar_4.x;
  vec2 tmpvar_8;
  tmpvar_8 = ((0.5 + (uv - 0.5)) - (tmpvar_7 * texsize.zw));
  ret_1.x = texture (sampler_main, tmpvar_8).x;
  ret_1.x = (ret_1.x + ((
    (ret_1.x - ((texture (sampler_blur3, tmpvar_8).xyz * scale3) + bias3))
  .x * 0.4) + 0.006));
  vec2 tmpvar_9;
  tmpvar_9.x = tmpvar_3.x;
  tmpvar_9.y = tmpvar_4.x;
  vec2 tmpvar_10;
  tmpvar_10.x = tmpvar_3.y;
  tmpvar_10.y = tmpvar_4.y;
  vec2 tmpvar_11;
  tmpvar_11.x = tmpvar_3.z;
  tmpvar_11.y = tmpvar_4.z;
  ret_1.y = texture (sampler_fc_main, (((uv - 
    ((tmpvar_9 * texsize.zw) * 8.0)
  ) + (
    (tmpvar_10 * texsize.zw)
   * 4.0)) + ((tmpvar_11 * texsize.zw) * 8.0))).y;
  ret_1.y = (ret_1.y * (1.0 + (ret_1.x * 0.1)));
  ret_1.y = (ret_1.y - (0.004 + (
    clamp (ret_1.z, 0.0, 1.0)
   * 0.012)));
  vec4 tmpvar_12;
  tmpvar_12.w = 1.0;
  tmpvar_12.xyz = ret_1;
  ret = tmpvar_12.xyz;
 }`,comp:` shader_body { 
  vec3 ret_1;
  vec2 tmpvar_2;
  tmpvar_2 = (texsize.zw * 4.0);
  vec3 tmpvar_3;
  tmpvar_3 = (((texture (sampler_blur1, 
    (uv + (vec2(1.0, 0.0) * tmpvar_2))
  ).xyz * scale1) + bias1) - ((texture (sampler_blur1, 
    (uv - (vec2(1.0, 0.0) * tmpvar_2))
  ).xyz * scale1) + bias1));
  vec3 tmpvar_4;
  tmpvar_4 = (((texture (sampler_blur1, 
    (uv + (vec2(0.0, 1.0) * tmpvar_2))
  ).xyz * scale1) + bias1) - ((texture (sampler_blur1, 
    (uv - (vec2(0.0, 1.0) * tmpvar_2))
  ).xyz * scale1) + bias1));
  vec2 tmpvar_5;
  tmpvar_5.x = tmpvar_3.z;
  tmpvar_5.y = tmpvar_4.z;
  vec2 tmpvar_6;
  tmpvar_6.x = tmpvar_3.y;
  tmpvar_6.y = tmpvar_4.y;
  vec2 tmpvar_7;
  tmpvar_7 = ((uv - (tmpvar_5 * 0.1)) + (tmpvar_6 * 0.06));
  vec4 tmpvar_8;
  tmpvar_8 = texture (sampler_main, uv);
  ret_1 = (((
    ((texture (sampler_blur2, tmpvar_7).xyz * scale2) + bias2)
  .x * 
    clamp ((1.0 - tmpvar_8.z), 0.0, 1.0)
  ) * pow (hue_shader.yxz, vec3(8.0, 8.0, 8.0))) * 3.0);
  ret_1 = (mix (ret_1, (
    pow (hue_shader.yzx, vec3(8.0, 8.0, 8.0))
   * 1.4), vec3((
    (texture (sampler_main, tmpvar_7).x * 0.8)
   + 
    ((texture (sampler_blur1, tmpvar_7).xyz * scale1) + bias1)
  .x))) * clamp ((1.0 - 
    (((texture (sampler_blur1, uv).xyz * scale1) + bias1).y * 4.0)
  ), 0.0, 1.0));
  vec2 tmpvar_9;
  tmpvar_9.x = tmpvar_3.y;
  tmpvar_9.y = tmpvar_4.y;
  vec3 tmpvar_10;
  vec3 tmpvar_11;
  tmpvar_11 = pow (hue_shader, vec3(8.0, 8.0, 8.0));
  tmpvar_10 = mix (mix (ret_1, vec3(1.0, 1.0, 1.0), (
    (tmpvar_11 * texture (sampler_main, clamp ((uv - (tmpvar_9 * 2.0)), 0.0, 1.0)).z)
   * 1.2)), (tmpvar_11.zxy * 1.8), tmpvar_8.yyy);
  ret_1 = tmpvar_10;
  vec4 tmpvar_12;
  tmpvar_12.w = 1.0;
  tmpvar_12.xyz = tmpvar_10;
  ret = tmpvar_12.xyz;
 }`}},function(o,l){o.exports={baseVals:{rating:5,gammaadj:1.9,echo_zoom:1.169,additivewave:1,modwavealphabyvolume:1,wave_brighten:0,wrap:0,wave_a:1.413,wave_scale:.418,wave_smoothing:0,wave_mystery:-.66,modwavealphastart:2,modwavealphaend:2,warpanimspeed:.626,warpscale:1.331,zoomexp:1.00001,zoom:.99951,warp:.08925,wave_r:0,wave_g:0,wave_x:.24,wave_y:.44,ob_size:.5,ob_r:.01,ib_size:.26,mv_x:64,mv_y:48,mv_l:0,mv_a:0},shapes:[{baseVals:{enabled:1,additive:1,rad:.0277,ang:6.03186,tex_ang:6.03186,tex_zoom:.6839,g:1,r2:1,a2:1,border_r:0,border_g:0,border_b:0,border_a:1},init_eqs_str:"a.an=0;a.q6=0;a.q4=0;a.q5=0;a.q3=0;a.q2=0;a.q1=0;",frame_eqs_str:"a.an+=a.q6;a.ang=.5*a.an;a.x=a.q4;a.y=a.q5;a.rad=a.q3*sqrt(2);a.x=.5+div(a.x-.5,a.q2);a.y=.5+div(a.y-.5,a.q1);"},{baseVals:{enabled:1,additive:1,rad:.0277,ang:6.03186,tex_ang:6.03186,tex_zoom:.6839,g:1,r2:1,a2:1,border_r:0,border_g:0,border_b:0,border_a:1},init_eqs_str:"a.an=0;a.q9=0;a.q7=0;a.q8=0;a.q3=0;a.q2=0;a.q1=0;",frame_eqs_str:"a.an+=a.q9;a.ang=.5*a.an;a.x=a.q7;a.y=a.q8;a.rad=a.q3*sqrt(2);a.x=.5+div(a.x-.5,a.q2);a.y=.5+div(a.y-.5,a.q1);"},{baseVals:{enabled:1,additive:1,rad:.0277,ang:6.03186,tex_ang:6.03186,tex_zoom:.6839,b:1,r2:1,g2:0,b2:1,a2:1,border_r:0,border_g:0,border_b:0,border_a:1},init_eqs_str:"a.an=0;a.q12=0;a.q10=0;a.q11=0;a.q3=0;a.q2=0;a.q1=0;",frame_eqs_str:"a.an+=a.q12;a.ang=.5*a.an;a.x=a.q10;a.y=a.q11;a.rad=a.q3*sqrt(2);a.x=.5+div(a.x-.5,a.q2);a.y=.5+div(a.y-.5,a.q1);"},{baseVals:{enabled:0}}],waves:[{baseVals:{enabled:1,thick:1,additive:1,scaling:2.0231,smoothing:0,r:0},init_eqs_str:"a.d=0;a.tt2=0;a.res=0;a.tt1=0;a.diff=0;a.tt3=0;a.beat=0;a.vol=0;a.m=0;a.monitor=0;a.t2=0;a.t3=0;a.t4=0;a.cl=0;",frame_eqs_str:"a.vol=8*a.bass+5*a.mid+3*a.treb;a.m=.97*a.m+.08*a.vol;a.monitor=a.vol;a.beat=above(a.vol,a.res)*above(a.vol,a.m)*above(a.vol,16);a.diff=(1-a.beat)*a.diff+a.beat*(a.vol-a.res);a.res=a.beat*(a.vol+.04*a.m)+(1-a.beat)*(a.res-div(60*(.1+.02*a.diff),a.fps));a.res=Math.max(0,a.res);a.a=a.beat;",point_eqs_str:"a.tt3=.6*a.tt3+1*a.value1;a.tt2=.7*a.tt2+.2*a.tt3;a.tt1=.8*a.tt1+.1*a.tt2;a.d=.9*a.d+.2*a.tt1;a.y=.5+a.d*a.sample*(1-a.sample)*2;a.x=-.05+1.1*a.sample;"},{baseVals:{enabled:0}},{baseVals:{enabled:0}},{baseVals:{enabled:0}}],init_eqs_str:"a.y3=0;a.y1=0;a.q12=0;a.w2=0;a.ref_ang=0;a.du=0;a.x1=0;a.vx3=0;a.q13=0;a.q6=0;a.q1=0;a.q5=0;a.q9=0;a.vx1=0;a.mult=0;a.x3=0;a.q11=0;a.q10=0;a.ang2=0;a.dv=0;a.vr3=0;a.vr2=0;a.q4=0;a.bounce=0;a.vr=0;a.v2r=0;a.w1=0;a.r=0;a.x2=0;a.vy2=0;a.y2=0;a.vy1=0;a.q2=0;a.q14=0;a.dist=0;a.vr1=0;a.v1=0;a.vx2=0;a.q3=0;a.q7=0;a.vy3=0;a.v2=0;a.q8=0;a.x1=.5;a.y1=.6;a.x2=.5;a.y2=.4;a.x3=.5;a.y3=.2;a.vr1=.0001;a.vr2=0;a.vr3=0;a.vx1=0;a.vx2=0;a.vx3=0;",frame_eqs_str:`a.zoom=1;a.warp=0;a.wave_a=0;a.r=.03+.004*(a.bass_att+a.treb_att);a.monitor=a.aspecty;a.vr=Math.sin(a.vr1)*a.r;a.bounce=below(a.y1,a.r-.5*(a.aspectx-1));a.y1+=a.vy1;a.vy1=.00001<Math.abs(a.bounce)?.96*Math.abs(a.vy1)+.1*(a.r-a.y1-.5*(a.aspectx-1)):a.vy1-div(.018,a.fps);a.vx1=.00001<Math.abs(a.bounce)?a.vx1+.15*(a.vr-a.vx1):a.vx1;a.vr=.00001<Math.abs(a.bounce)?a.vr+.85*(a.vx1-a.vr):a.vr;a.vr1=Math.asin(div(a.vr,a.r));a.bounce=above(a.x1,1-a.r+.5*(a.aspecty-1));a.vx1=.00001<Math.abs(a.bounce)?
.96*-Math.abs(a.vx1)+.1*(1-a.r-a.x1+.5*(a.aspecty-1)):a.vx1;a.vy1=.00001<Math.abs(a.bounce)?a.vy1+.15*(a.vr-a.vy1):a.vy1;a.vr=.00001<Math.abs(a.bounce)?a.vr+.85*(a.vy1-a.vr):a.vr;a.vr1=Math.asin(div(a.vr,a.r));a.bounce=below(a.x1,a.r-.5*(a.aspecty-1));a.x1+=a.vx1;a.vx1=.00001<Math.abs(a.bounce)?.96*Math.abs(a.vx1)+.1*(a.r-a.x1-.5*(a.aspecty-1)):a.vx1;a.vy1=.00001<Math.abs(a.bounce)?a.vy1+.15*(-a.vr-a.vy1):a.vy1;a.vr=.00001<Math.abs(a.bounce)?a.vr-.85*(a.vy1+a.vr):a.vr;a.vr1=Math.asin(div(a.vr,a.r));
a.vr=Math.sin(a.vr2)*a.r;a.bounce=below(a.y2,a.r-.5*(a.aspectx-1));a.y2+=a.vy2;a.vy2=.00001<Math.abs(a.bounce)?.96*Math.abs(a.vy2)+.1*(a.r-a.y2-.5*(a.aspectx-1)):a.vy2-div(.018,a.fps);a.vx2=.00001<Math.abs(a.bounce)?a.vx2+.15*(a.vr-a.vx2):a.vx2;a.vr=.00001<Math.abs(a.bounce)?a.vr+.85*(a.vx2-a.vr):a.vr;a.vr2=Math.asin(div(a.vr,a.r));a.bounce=above(a.x2,1-a.r+.5*(a.aspecty-1));a.vx2=.00001<Math.abs(a.bounce)?.96*-Math.abs(a.vx2)+.1*(1-a.r-a.x2+.5*(a.aspecty-1)):a.vx2;a.vy2=.00001<Math.abs(a.bounce)?
a.vy2+.15*(a.vr-a.vy2):a.vy2;a.vr=.00001<Math.abs(a.bounce)?a.vr+.85*(a.vy2-a.vr):a.vr;a.vr2=Math.asin(div(a.vr,a.r));a.bounce=below(a.x2,a.r-.5*(a.aspecty-1));a.x2+=a.vx2;a.vx2=.00001<Math.abs(a.bounce)?.96*Math.abs(a.vx2)+.1*(a.r-a.x2-.5*(a.aspecty-1)):a.vx2;a.vy2=.00001<Math.abs(a.bounce)?a.vy2+.15*(-a.vr-a.vy2):a.vy2;a.vr=.00001<Math.abs(a.bounce)?a.vr-.85*(a.vy2+a.vr):a.vr;a.vr2=Math.asin(div(a.vr,a.r));a.vr=Math.sin(a.vr3)*a.r;a.bounce=below(a.y3,a.r-.5*(a.aspectx-1));a.y3+=a.vy3;a.vy3=.00001<
Math.abs(a.bounce)?.96*Math.abs(a.vy3)+.1*(a.r-a.y3-.5*(a.aspectx-1)):a.vy3-div(.018,a.fps);a.vx3=.00001<Math.abs(a.bounce)?a.vx3+.15*(a.vr-a.vx3):a.vx3;a.vr=.00001<Math.abs(a.bounce)?a.vr+.85*(a.vx3-a.vr):a.vr;a.vr3=Math.asin(div(a.vr,a.r));a.bounce=above(a.x3,1-a.r+.5*(a.aspecty-1));a.vx3=.00001<Math.abs(a.bounce)?.96*-Math.abs(a.vx3)+.1*(1-a.r-a.x3+.5*(a.aspecty-1)):a.vx3;a.vy3=.00001<Math.abs(a.bounce)?a.vy3+.15*(a.vr-a.vy3):a.vy3;a.vr=.00001<Math.abs(a.bounce)?a.vr+.85*(a.vy3-a.vr):a.vr;a.vr3=
Math.asin(div(a.vr,a.r));a.bounce=below(a.x3,a.r-.5*(a.aspecty-1));a.x3+=a.vx3;a.vx3=.00001<Math.abs(a.bounce)?.96*Math.abs(a.vx3)+.1*(a.r-a.x3-.5*(a.aspecty-1)):a.vx3;a.vy3=.00001<Math.abs(a.bounce)?a.vy3+.15*(-a.vr-a.vy3):a.vy3;a.vr=.00001<Math.abs(a.bounce)?a.vr-.85*(a.vy3+a.vr):a.vr;a.vr3=Math.asin(div(a.vr,a.r));a.bounce=below(sqrt(sqr(a.x1+a.vx1-a.x2-a.vx2)+sqr(a.y1+a.vy1-a.y2-a.vy2)),2*a.r);a.bounce*=below(sqrt(sqr(a.x1+a.vx1-a.x2-a.vx2)+sqr(a.y1+a.vy1-a.y2-a.vy2)),sqrt(sqr(a.x1-a.x2)+sqr(a.y1-
a.y2)));a.ref_ang=Math.atan2(a.x2-a.x1,a.y2-a.y1)+Math.asin(1);a.v1=sqrt(a.vx1*a.vx1+a.vy1*a.vy1);a.v2=sqrt(a.vx2*a.vx2+a.vy2*a.vy2);a.w1=Math.atan2(a.vx1,a.vy1);a.w2=Math.atan2(a.vx2,a.vy2);a.vr=Math.sin(a.vr1)*a.r;a.v2r=Math.sin(a.vr2)*a.r;a.vx1=.00001<Math.abs(a.bounce)?Math.sin(a.ref_ang)*a.v1*Math.cos(a.w1-a.ref_ang)+.1*(a.vr-a.v2r-Math.sin(a.ref_ang)*a.v1*Math.cos(a.w1-a.ref_ang))+Math.sin(a.ref_ang+Math.asin(1))*a.v2*Math.cos(a.w2-a.ref_ang-Math.asin(1)):a.vx1;a.vy1=.00001<Math.abs(a.bounce)?
Math.cos(a.ref_ang)*a.v1*Math.cos(a.w1-a.ref_ang)+.1*(a.vr-a.v2r-Math.cos(a.ref_ang)*a.v1*Math.cos(a.w1-a.ref_ang))+Math.cos(a.ref_ang+Math.asin(1))*a.v2*Math.cos(a.w2-a.ref_ang-Math.asin(1)):a.vy1;a.vx2=.00001<Math.abs(a.bounce)?Math.sin(a.ref_ang)*a.v2*Math.cos(a.w2-a.ref_ang)+.1*(a.v2r-a.vr-Math.sin(a.ref_ang)*a.v2*Math.cos(a.w2-a.ref_ang))+Math.sin(a.ref_ang+Math.asin(1))*a.v1*Math.cos(a.w1-a.ref_ang-Math.asin(1)):a.vx2;a.vy2=.00001<Math.abs(a.bounce)?Math.cos(a.ref_ang)*a.v2*Math.cos(a.w2-a.ref_ang)+
.1*(a.v2r-a.vr-Math.cos(a.ref_ang)*a.v2*Math.cos(a.w2-a.ref_ang))+Math.cos(a.ref_ang+Math.asin(1))*a.v1*Math.cos(a.w1-a.ref_ang-Math.asin(1)):a.vy2;a.vr=.00001<Math.abs(a.bounce)?a.vr+.9*(Math.cos(a.w1-a.ref_ang)*(a.v1-a.v2)-a.vr):a.vr;a.vr1=Math.asin(div(a.vr,a.r));a.v2r=.00001<Math.abs(a.bounce)?a.v2r+.9*(Math.cos(a.w2-a.ref_ang)*(a.v2-a.v1)-a.v2r):a.v2r;a.vr2=Math.asin(div(a.v2r,a.r));a.bounce=below(sqrt(sqr(a.x1+a.vx1-a.x3-a.vx3)+sqr(a.y1+a.vy1-a.y3-a.vy3)),2*a.r);a.bounce*=below(sqrt(sqr(a.x1+
a.vx1-a.x3-a.vx3)+sqr(a.y1+a.vy1-a.y3-a.vy3)),sqrt(sqr(a.x1-a.x3)+sqr(a.y1-a.y3)));a.ref_ang=Math.atan2(a.x3-a.x1,a.y3-a.y1)+Math.asin(1);a.v1=sqrt(a.vx1*a.vx1+a.vy1*a.vy1);a.v2=sqrt(a.vx3*a.vx3+a.vy3*a.vy3);a.w1=Math.atan2(a.vx1,a.vy1);a.w2=Math.atan2(a.vx3,a.vy3);a.vr=Math.sin(a.vr1)*a.r;a.v2r=Math.sin(a.vr3)*a.r;a.vx1=.00001<Math.abs(a.bounce)?Math.sin(a.ref_ang)*a.v1*Math.cos(a.w1-a.ref_ang)+.1*(a.vr-a.v2r-Math.sin(a.ref_ang)*a.v1*Math.cos(a.w1-a.ref_ang))+Math.sin(a.ref_ang+Math.asin(1))*a.v2*
Math.cos(a.w2-a.ref_ang-Math.asin(1)):a.vx1;a.vy1=.00001<Math.abs(a.bounce)?Math.cos(a.ref_ang)*a.v1*Math.cos(a.w1-a.ref_ang)+.1*(a.vr-a.v2r-Math.cos(a.ref_ang)*a.v1*Math.cos(a.w1-a.ref_ang))+Math.cos(a.ref_ang+Math.asin(1))*a.v2*Math.cos(a.w2-a.ref_ang-Math.asin(1)):a.vy1;a.vx3=.00001<Math.abs(a.bounce)?Math.sin(a.ref_ang)*a.v2*Math.cos(a.w2-a.ref_ang)+.1*(a.v2r-a.vr-Math.sin(a.ref_ang)*a.v2*Math.cos(a.w2-a.ref_ang))+Math.sin(a.ref_ang+Math.asin(1))*a.v1*Math.cos(a.w1-a.ref_ang-Math.asin(1)):a.vx3;
a.vy3=.00001<Math.abs(a.bounce)?Math.cos(a.ref_ang)*a.v2*Math.cos(a.w2-a.ref_ang)+.1*(a.v2r-a.vr-Math.cos(a.ref_ang)*a.v2*Math.cos(a.w2-a.ref_ang))+Math.cos(a.ref_ang+Math.asin(1))*a.v1*Math.cos(a.w1-a.ref_ang-Math.asin(1)):a.vy3;a.vr=.00001<Math.abs(a.bounce)?a.vr+.9*(Math.cos(a.w1-a.ref_ang)*(a.v1-a.v2)-a.vr):a.vr;a.vr1=Math.asin(div(a.vr,a.r));a.v2r=.00001<Math.abs(a.bounce)?a.v2r+.9*(Math.cos(a.w2-a.ref_ang)*(a.v2-a.v1)-a.v2r):a.v2r;a.vr3=Math.asin(div(a.v2r,a.r));a.bounce=below(sqrt(sqr(a.x3+
a.vx3-a.x2-a.vx2)+sqr(a.y3+a.vy3-a.y2-a.vy2)),2*a.r);a.bounce*=below(sqrt(sqr(a.x2+a.vx2-a.x3-a.vx3)+sqr(a.y2+a.vy2-a.y3-a.vy3)),sqrt(sqr(a.x2-a.x3)+sqr(a.y2-a.y3)));a.ref_ang=Math.atan2(a.x2-a.x3,a.y2-a.y3)+Math.asin(1);a.v1=sqrt(a.vx3*a.vx3+a.vy3*a.vy3);a.v2=sqrt(a.vx2*a.vx2+a.vy2*a.vy2);a.w1=Math.atan2(a.vx3,a.vy3);a.w2=Math.atan2(a.vx2,a.vy2);a.vr=Math.sin(a.vr3)*a.r;a.v2r=Math.sin(a.vr2)*a.r;a.vx3=.00001<Math.abs(a.bounce)?Math.sin(a.ref_ang)*a.v1*Math.cos(a.w1-a.ref_ang)+.1*(a.vr-a.v2r-Math.sin(a.ref_ang)*
a.v1*Math.cos(a.w1-a.ref_ang))+Math.sin(a.ref_ang+Math.asin(1))*a.v2*Math.cos(a.w2-a.ref_ang-Math.asin(1)):a.vx3;a.vy3=.00001<Math.abs(a.bounce)?Math.cos(a.ref_ang)*a.v1*Math.cos(a.w1-a.ref_ang)+.1*(a.vr-a.v2r-Math.cos(a.ref_ang)*a.v1*Math.cos(a.w1-a.ref_ang))+Math.cos(a.ref_ang+Math.asin(1))*a.v2*Math.cos(a.w2-a.ref_ang-Math.asin(1)):a.vy3;a.vx2=.00001<Math.abs(a.bounce)?Math.sin(a.ref_ang)*a.v2*Math.cos(a.w2-a.ref_ang)+.1*(a.v2r-a.vr-Math.sin(a.ref_ang)*a.v2*Math.cos(a.w2-a.ref_ang))+Math.sin(a.ref_ang+
Math.asin(1))*a.v1*Math.cos(a.w1-a.ref_ang-Math.asin(1)):a.vx2;a.vy2=.00001<Math.abs(a.bounce)?Math.cos(a.ref_ang)*a.v2*Math.cos(a.w2-a.ref_ang)+.1*(a.v2r-a.vr-Math.cos(a.ref_ang)*a.v2*Math.cos(a.w2-a.ref_ang))+Math.cos(a.ref_ang+Math.asin(1))*a.v1*Math.cos(a.w1-a.ref_ang-Math.asin(1)):a.vy2;a.vr=.00001<Math.abs(a.bounce)?a.vr+.9*(Math.cos(a.w1-a.ref_ang)*(a.v1-a.v2)-a.vr):a.vr;a.vr3=Math.asin(div(a.vr,a.r));a.v2r=.00001<Math.abs(a.bounce)?a.v2r+.9*(Math.cos(a.w2-a.ref_ang)*(a.v2-a.v1)-a.v2r):a.v2r;
a.vr2=Math.asin(div(a.v2r,a.r));a.q1=a.aspectx;a.q2=a.aspecty;a.q3=2*a.r;a.q4=a.x1;a.q5=a.y1;a.q6=a.vr1;a.q7=a.x2;a.q8=a.y2;a.q9=a.vr2;a.q10=a.x3;a.q11=a.y3;a.q12=a.vr3;a.q13=Math.atan2(div(a.x1+a.x2+a.x3,3)-.5,div(a.y1+a.y2+a.y3,3)-.5);a.q14=.2*sigmoid(sqrt(sqr(div(a.x1+a.x2+a.x3,3)-.5)+sqr(div(a.y1+a.y2+a.y3,3)-.5)),2);`,pixel_eqs_str:"a.du=2*a.x-1-div(2*(a.q4+a.q7+a.q10-1.5),3);a.dv=2*a.y-1+div(2*(a.q5+a.q8+a.q11-1.5),3);a.dist=sqrt(a.du*a.du+a.dv*a.dv);a.ang2=Math.atan2(a.du,a.dv);a.mult=.4*Math.sin(.05*a.dist)*a.q14;a.dx=a.mult*Math.sin(2*a.ang2+a.q13)*a.aspectx;a.dy=a.mult*Math.cos(2*a.ang2+a.q13)*a.aspecty;",warp:` shader_body { 
  float n_1;
  vec3 ret_2;
  vec4 tmpvar_3;
  tmpvar_3 = texture (sampler_pw_main, uv);
  ret_2 = tmpvar_3.xyz;
  n_1 = (clamp ((texture (sampler_pw_main, 
    (uv + texsize.zw)
  ).x * 999.0), 0.0, 1.0) + clamp ((texture (sampler_pw_main, 
    (uv + (texsize.zw * vec2(1.0, 0.0)))
  ).x * 999.0), 0.0, 1.0));
  n_1 = (n_1 + clamp ((texture (sampler_pw_main, 
    (uv + (texsize.zw * vec2(1.0, -1.0)))
  ).x * 999.0), 0.0, 1.0));
  n_1 = (n_1 + clamp ((texture (sampler_pw_main, 
    (uv + (texsize.zw * vec2(0.0, 1.0)))
  ).x * 999.0), 0.0, 1.0));
  n_1 = (n_1 + clamp ((texture (sampler_pw_main, 
    (uv + (texsize.zw * vec2(0.0, -1.0)))
  ).x * 999.0), 0.0, 1.0));
  n_1 = (n_1 + clamp ((texture (sampler_pw_main, 
    (uv + (texsize.zw * vec2(-1.0, 1.0)))
  ).x * 999.0), 0.0, 1.0));
  n_1 = (n_1 + clamp ((texture (sampler_pw_main, 
    (uv + (texsize.zw * vec2(-1.0, 0.0)))
  ).x * 999.0), 0.0, 1.0));
  n_1 = (n_1 + clamp ((texture (sampler_pw_main, 
    (uv - texsize.zw)
  ).x * 999.0), 0.0, 1.0));
  if ((n_1 < 1.9)) {
    ret_2 = (tmpvar_3.xyz - 0.4);
  };
  if ((n_1 > 3.1)) {
    ret_2 = (ret_2 - 0.4);
  };
  bool tmpvar_4;
  if ((ret_2.x < 0.1)) {
    tmpvar_4 = (abs((n_1 - 3.0)) < 0.5);
  } else {
    tmpvar_4 = bool(0);
  };
  if (tmpvar_4) {
    ret_2 = (ret_2 + 0.4);
  };
  vec4 tmpvar_5;
  tmpvar_5.w = 1.0;
  tmpvar_5.xyz = ret_2;
  ret = tmpvar_5.xyz;
 }`,comp:` shader_body { 
  vec3 ret2_1;
  vec3 ret_2;
  vec2 tmpvar_3;
  tmpvar_3 = (texsize.zw * 8.0);
  vec2 tmpvar_4;
  tmpvar_4.x = (((texture (sampler_blur1, 
    (uv + (vec2(1.0, 0.0) * tmpvar_3))
  ).xyz * scale1) + bias1) - ((texture (sampler_blur1, 
    (uv - (vec2(1.0, 0.0) * tmpvar_3))
  ).xyz * scale1) + bias1)).y;
  tmpvar_4.y = (((texture (sampler_blur1, 
    (uv + (vec2(0.0, 1.0) * tmpvar_3))
  ).xyz * scale1) + bias1) - ((texture (sampler_blur1, 
    (uv - (vec2(0.0, 1.0) * tmpvar_3))
  ).xyz * scale1) + bias1)).y;
  vec2 tmpvar_5;
  tmpvar_5 = (uv + (tmpvar_4 * 0.55));
  vec4 tmpvar_6;
  tmpvar_6 = texture (sampler_blur3, uv);
  ret_2 = (vec3((0.25 * dot (
    clamp ((2.0 * ((tmpvar_6.xyz * scale3) + bias3)), 0.0, 1.0)
  , vec3(0.32, 0.49, 0.29)))) - (0.8 * dot (
    clamp (((20.0 * (
      (0.6 * ((texture (sampler_blur2, uv).xyz * scale2) + bias2))
     - 0.01)) - 2.0), 0.0, 1.0)
  , vec3(0.32, 0.49, 0.29))));
  vec4 tmpvar_7;
  tmpvar_7 = texture (sampler_blur1, uv);
  ret_2 = (ret_2 + dot (clamp (
    ((30.0 * ((texture (sampler_main, uv).xyz + 
      (((tmpvar_7.xyz * scale1) + bias1) * 0.15)
    ) - 0.01)) - 2.0)
  , 0.0, 1.0), vec3(0.32, 0.49, 0.29)));
  ret_2 = (ret_2 + 1.0);
  vec3 tmpvar_8;
  tmpvar_8 = mix (ret_2, (ret_2 * (
    ((texture (sampler_blur3, tmpvar_5).xyz * scale3) + bias3)
   - 
    ((texture (sampler_blur1, tmpvar_5).xyz * scale1) + bias1)
  )), pow (hue_shader, ret_2));
  ret2_1 = (vec3((-0.5 * dot (
    ((texture (sampler_blur3, tmpvar_5).xyz * scale3) + bias3)
  , vec3(0.32, 0.49, 0.29)))) + (0.8 * (
    (texture (sampler_blur1, tmpvar_5).xyz * scale1)
   + bias1)));
  ret2_1 = (ret2_1 - (0.9 * texture (sampler_main, tmpvar_5).xyz));
  ret2_1 = (ret2_1 - 1.5);
  vec3 tmpvar_9;
  tmpvar_9 = mix (ret2_1, (ret2_1 * (
    ((tmpvar_6.xyz * scale3) + bias3)
   - 
    ((tmpvar_7.xyz * scale1) + bias1)
  )), pow (hue_shader.zxy, tmpvar_8));
  ret2_1 = tmpvar_9;
  vec3 tmpvar_10;
  tmpvar_10 = abs((tmpvar_8 - tmpvar_9));
  ret_2 = (tmpvar_10 * tmpvar_10);
  ret_2 = (ret_2 * 1.15);
  vec4 tmpvar_11;
  tmpvar_11.w = 1.0;
  tmpvar_11.xyz = ret_2;
  ret = tmpvar_11.xyz;
 }`}},function(o,l){o.exports={baseVals:{rating:4,gammaadj:1,decay:.9,echo_zoom:1,wave_brighten:0,wrap:0,wave_a:.001,wave_scale:5.715,wave_smoothing:.9,modwavealphastart:1,modwavealphaend:1,warpanimspeed:.162,warpscale:5.582,zoomexp:.32104,zoom:.9901,warp:.11563,wave_r:0,wave_g:0,wave_b:0,ob_size:0,ib_size:0,ib_r:0,ib_g:0,ib_b:0,ib_a:1,mv_x:64,mv_y:48,mv_l:0,mv_b:0,mv_a:0},shapes:[{baseVals:{enabled:1,sides:100,thickoutline:1,textured:1,rad:.05343,tex_zoom:12.77228,g:1,b:1,a:0,r2:1,b2:1,a2:1,border_g:0,border_a:0},init_eqs_str:"a.vx=0;a.vy=0;",frame_eqs_str:""},{baseVals:{enabled:1,sides:100,textured:1,y:.75,rad:.46753,g:1,b:1,r2:1,b2:1,border_a:0},init_eqs_str:"a.w=0;a.q1=0;",frame_eqs_str:"a.w=4*-Math.atan2(.5,a.q1)+4*Math.asin(1);a.ang=a.w;a.x=.5+.19*Math.sin(a.w);a.y=.5+.26*Math.cos(a.w);"},{baseVals:{enabled:1,sides:100,textured:1,y:.75,rad:.46753,g:1,b:1,r2:1,b2:1,border_a:0},init_eqs_str:"a.w=0;a.q1=0;",frame_eqs_str:"a.w=4*-Math.atan2(.5,a.q1)+4*Math.asin(1)+div(2*Math.asin(1),3);a.ang=a.w;a.x=.5+.19*Math.sin(a.w);a.y=.5+.26*Math.cos(a.w);"},{baseVals:{enabled:1,sides:100,textured:1,y:.75,rad:.46753,g:1,b:1,r2:1,b2:1,border_a:0},init_eqs_str:"a.w=0;a.q1=0;",frame_eqs_str:"a.w=4*-Math.atan2(.5,a.q1)+4*Math.asin(1)-div(2*Math.asin(1),3);a.ang=a.w;a.x=.5+.19*Math.sin(a.w);a.y=.5+.26*Math.cos(a.w);"}],waves:[{baseVals:{enabled:1,usedots:1,thick:1,additive:1,scaling:2.44415,smoothing:0},init_eqs_str:"a.d=0;a.n=0;a.y1=0;a.xx=0;a.z=0;a.w=0;a.t5=0;a.t1=0;a.x1=0;a.cl3=0;a.j3=0;a.cl2=0;a.zoom=0;a.j=0;a.cl1=0;a.t8=0;a.v=0;a.t3=0;a.t6=0;a.pi3=0;a.t7=0;a.c2=0;a.j2=0;a.s3=0;a.t=0;a.k=0;a.zz=0;a.c3=0;a.t2=0;a.bb=0;a.s1=0;a.s2=0;a.t4=0;a.yy=0;a.c=0;a.c1=0;a.t2=0;a.t3=0;a.t4=0;a.cl=0;",frame_eqs_str:`a.t1=0;a.v=.01;a.j+=.01*a.bass;a.j2+=.01*a.mid_att;a.j3+=.01*a.treb_att;a.t2=a.j;a.t3=a.j2;a.t4=a.j3;a.k=.99*a.k+div(10*a.mid,a.fps);a.t5=-a.k;a.cl1=a.cl1-.0005-.003*a.bass;a.cl1=.00001<Math.abs(above(a.cl1,1))?0:a.cl1;a.cl1=.00001<Math.abs(below(a.cl1,0))?1:a.cl1;a.t8=a.cl1;a.cl2=a.cl2+.0001+.001*a.mid-.0005*a.bass-.0005*a.treb;a.cl2=.00001<Math.abs(above(a.cl2,1))?0:a.cl2;a.cl2=.00001<Math.abs(below(a.cl2,0))?1:a.cl2;a.t7=a.cl2;a.cl3=a.cl3+.0001+.001*a.treb-.0005*a.bass-.0005*
a.mid;a.cl3=.00001<Math.abs(above(a.cl3,1))?0:a.cl3;a.cl3=.00001<Math.abs(below(a.cl3,0))?1:a.cl3;a.t6=a.cl3;`,point_eqs_str:`a.xx=div(mod(983624912364*a.sample,1E7)+100,1E7);a.yy=div(mod(1896575575*a.xx,1E7)+100,1E7);a.zz=div(mod(58652340875*a.yy,1E7)+100,1E7);a.d=sqrt(sqr(a.xx)+sqr(a.yy)+sqr(a.zz));a.zz=a.zz+a.t8-(.00001<Math.abs(above(a.zz+a.t8,1))?1:0)-.5;a.xx=a.xx+a.t7-(.00001<Math.abs(above(a.xx+a.t7,1))?1:0)-.5;a.yy=a.yy+a.t6-(.00001<Math.abs(above(a.yy+a.t6,1))?1:0)-.5;a.v=.001;a.w=1;a.bb=a.d*a.d*.5;a.n=.3;a.s1=Math.sin(Math.sin(a.t2*a.w+a.bb)*a.n);a.s2=Math.sin(Math.sin(a.t3*a.w+a.bb)*a.n);
a.s3=Math.sin(Math.sin(a.t4*a.w+a.bb)*a.n);a.c1=Math.cos(Math.sin(a.t2*a.w+a.bb)*a.n);a.c2=Math.cos(Math.sin(a.t3*a.w+a.bb)*a.n);a.c3=Math.cos(Math.sin(a.t4*a.w+a.bb)*a.n);a.z=(a.c3*a.s1*a.c2+a.s3*a.s2)*a.xx-(a.c3*a.s1*a.s2-a.s3*a.c2)*a.yy+a.c3*a.c1*a.zz;a.x1=a.c1*a.c2*a.xx+a.c1*a.s2*a.yy-a.s1*a.zz;a.y1=(a.s3*a.s1*a.c2-a.c3*a.s2)*a.xx+(a.s3*a.s1*a.s2+a.c3*a.c2)*a.yy+a.s3*a.c1*a.zz;a.zoom=.5*div(1,a.z+.5);a.x=.5+a.zoom*a.x1+0*Math.sin(.1*a.time);a.y=.5+a.zoom*a.y1+0*Math.cos(.16801*a.time);a.pi3=2.0941239;
a.t=2*a.z+1*a.t2;a.c=3;a.r=Math.sin(a.t)*a.c;a.g=Math.sin(a.t+a.pi3)*a.c;a.b=Math.sin(a.t-a.pi3)*a.c;a.r=.00001<Math.abs(above(a.r,1))?1:a.r;a.r=.00001<Math.abs(below(a.r,0))?0:a.r;a.g=.00001<Math.abs(above(a.g,1))?1:a.g;a.g=.00001<Math.abs(below(a.g,0))?0:a.g;a.b=.00001<Math.abs(above(a.b,1))?1:a.b;a.b=.00001<Math.abs(below(a.b,0))?0:a.b;a.a=-a.z+.7;`},{baseVals:{enabled:1,thick:1,scaling:2.44415,smoothing:0,a:.05},init_eqs_str:"a.t8=0;a.q1=0;a.pi3=0;a.t=0;a.q4=0;a.q6=0;a.c=0;a.t2=0;a.t3=0;a.t4=0;a.cl=0;",frame_eqs_str:"a.t8=1;",point_eqs_str:`a.t8=-a.t8;a.y=.48*a.sample;a.x=.5+.04*a.t8-a.t8*a.sample*.02+(sqr(2*a.sample-1)-1)*a.q1*.5;a.pi3=2.0941239;a.t=10*-(a.q4-a.q6)+a.sample*Math.asin(1)*4.01;a.c=9;a.r=Math.sin(a.t)*a.c;a.g=Math.sin(a.t+a.pi3)*a.c;a.b=Math.sin(a.t-a.pi3)*a.c;a.r=.00001<Math.abs(above(a.r,1))?1:a.r;a.r=.00001<Math.abs(below(a.r,0))?0:a.r;a.g=.00001<Math.abs(above(a.g,1))?1:a.g;a.g=.00001<Math.abs(below(a.g,0))?0:a.g;a.b=.00001<Math.abs(above(a.b,1))?1:a.b;a.b=.00001<Math.abs(below(a.b,0))?0:a.b;
`},{baseVals:{enabled:1,samples:49,scaling:2.44415,smoothing:0,r:0,g:0,b:0},init_eqs_str:"a.t8=0;a.q1=0;a.t2=0;a.t3=0;a.t4=0;a.cl=0;",frame_eqs_str:"a.t8=1;",point_eqs_str:"a.t8=-1;a.y=.48*a.sample;a.x=.5+.04*a.t8-a.t8*a.sample*.02+(sqr(2*a.sample-1)-1)*a.q1*.5;"},{baseVals:{enabled:1,samples:49,scaling:2.44415,smoothing:0,r:0,g:0,b:0},init_eqs_str:"a.t8=0;a.q1=0;a.t2=0;a.t3=0;a.t4=0;a.cl=0;",frame_eqs_str:"a.t8=1;",point_eqs_str:"a.t8=1;a.y=.48*a.sample;a.x=.5+.04*a.t8-a.t8*a.sample*.02+(sqr(2*a.sample-1)-1)*a.q1*.5;"}],init_eqs_str:"a.d=0;a.vt=0;a.q6=0;a.q1=0;a.q5=0;a.vb=0;a.q9=0;a.v=0;a.mm=0;a.tt=0;a.q4=0;a.bb=0;a.q2=0;a.q3=0;a.vvm=0;a.vvb=0;a.vm=0;a.vvt=0;a.x1=0;a.y1=0;",frame_eqs_str:`a.zoom=1;a.q1=.1*(a.bass-a.treb);a.vvb=.00001<Math.abs(below(a.vvb,0))?0:a.vvb;a.vvm=.00001<Math.abs(below(a.vvm,0))?0:a.vvm;a.vvt=.00001<Math.abs(below(a.vvt,0))?0:a.vvt;a.vb=.85*a.vb+(1-a.vb)*pow(a.bass,2)*.001;a.vvb=.95*a.vvb+(1-a.vvb)*a.vb*.2;a.vm=.85*a.vm+(1-a.vm)*pow(a.mid,2)*.01;a.vvm=.95*a.vvm+(1-a.vvm)*a.vm*.2;a.vt=.85*a.vt+(1-a.vt)*pow(a.treb,2)*.001;a.vvt=.95*a.vvt+(1-a.vvt)*a.vt*.2;a.q1=(a.vvb-a.vvt)*a.vvm;a.q2=a.vvm;a.q3=a.vvt;a.v=.2;a.d=0;a.bb=a.bb+a.vvb*a.v-a.d;
a.mm=a.mm+a.vvm*a.v-a.d;a.tt=a.tt+a.vvt*a.v-a.d;a.q4=a.bb;a.q5=a.mm;a.q6=a.tt;a.q4=.00001<Math.abs(above(Math.abs(a.q1),.02))?.99:1;a.q9=.5+.5*Math.sin(.14*a.time);`,pixel_eqs_str:"",pixel_eqs:"",warp:` shader_body { 
  vec4 tmpvar_1;
  tmpvar_1.w = 1.0;
  tmpvar_1.xyz = (texture (sampler_fc_main, uv) * q4).xyz;
  ret = tmpvar_1.xyz;
 }`,comp:` shader_body { 
  vec2 tmpvar_1;
  tmpvar_1.x = 0.5;
  tmpvar_1.y = (1.0 - q9);
  vec2 tmpvar_2;
  tmpvar_2 = (uv_orig - tmpvar_1);
  float tmpvar_3;
  tmpvar_3 = (3.0 / tmpvar_2.y);
  vec2 tmpvar_4;
  tmpvar_4.x = ((tmpvar_2.x * tmpvar_3) * q9);
  tmpvar_4.y = (tmpvar_3 * q9);
  vec4 tmpvar_5;
  tmpvar_5 = texture (sampler_main, fract(((1.0 - 
    abs(((fract(
      ((tmpvar_2 + vec2(0.5, 1.0)) * 0.5)
    ) * 2.0) - 1.0))
  ) - (
    ((texture (sampler_noise_hq, ((tmpvar_4 * 0.05) + (vec2(0.1, -0.05) * time))) - 0.5) * float(int((tmpvar_2.y > 0.0))))
  .xy * 0.025))));
  vec4 tmpvar_6;
  tmpvar_6.w = 1.0;
  tmpvar_6.xyz = (((tmpvar_5.xyz * tmpvar_5.xyz) * 1.4) - 0.04);
  ret = tmpvar_6.xyz;
 }`}},function(o,l){o.exports={baseVals:{rating:5,gammaadj:1.56,decay:1,echo_zoom:.362,echo_orient:1,wave_thick:1,wave_brighten:0,darken:1,wave_a:.001,wave_scale:1.599,wave_smoothing:0,wave_mystery:-.5,modwavealphastart:2,modwavealphaend:2,warpscale:.107,zoomexp:.1584,fshader:1,warp:.01,wave_r:.51,wave_g:.5,ob_size:0,ob_a:1,ib_r:0,ib_g:0,ib_b:0,ib_a:1,mv_x:64,mv_y:48,mv_l:.5,mv_r:0,mv_g:0,mv_b:0,mv_a:0},shapes:[{baseVals:{enabled:0}},{baseVals:{enabled:0}},{baseVals:{enabled:0}},{baseVals:{enabled:0}}],waves:[{baseVals:{enabled:0}},{baseVals:{enabled:0}},{baseVals:{enabled:0}},{baseVals:{enabled:0}}],init_eqs_str:"a.d=0;a.y3=0;a.y1=0;a.xx=0;a.s=0;a.t1=0;a.x1=0;a.vx3=0;a.q6=0;a.dt=0;a.q1=0;a.q5=0;a.v=0;a.vx4=0;a.mm=0;a.tt=0;a.grav=0;a.x3=0;a.xx2=0;a.q4=0;a.a=0;a.yy1=0;a.vy4=0;a.dir=0;a.bounce=0;a.x4=0;a.r=0;a.x2=0;a.mx=0;a.mn=0;a.vy2=0;a.y2=0;a.bb=0;a.q2=0;a.m1=0;a.spring=0;a.vx2=0;a.q3=0;a.resist=0;a.yy=0;a.y4=0;a.vy3=0;a.xx1=0;a.b1=0;a.q8=0;",frame_eqs_str:`a.ib_r=.3*Math.sin(5*a.time)+.7;a.ib_g=.3*Math.sin(4*a.time)+.3;a.ib_b=.5*Math.sin(4*div(a.time,3))+.5;a.xx1=.9*a.xx1+.01*a.bass;a.xx2=.9*a.xx2+.01*a.treb;a.yy1=.94*a.yy1+.0075*(a.treb+a.bass);a.x1=.5+2*(a.xx1-a.xx2);a.y1=.4+a.yy1;a.x1=Math.max(0,Math.min(1,a.x1));a.y1=Math.max(0,Math.min(1,a.y1));a.spring=10;a.grav=.5;a.resist=1;a.bounce=.75;a.dt=.0002*div(60,a.fps);a.vx2=a.vx2*(1-a.resist*a.dt)+a.dt*(a.x1+a.x3-2*a.x2)*a.spring;a.vy2=a.vy2*(1-a.resist*a.dt)+a.dt*((a.y1+a.y3-
2*a.y2)*a.spring-a.grav);a.vx3=a.vx3*(1-a.resist*a.dt)+a.dt*(a.x2+a.x4-2*a.x3)*a.spring;a.vy3=a.vy3*(1-a.resist*a.dt)+a.dt*((a.y2+a.y4-2*a.y3)*a.spring-a.grav);a.vx4=a.vx4*(1-a.resist*a.dt)+a.dt*(a.x3-a.x4)*a.spring;a.vy4=a.vy4*(1-a.resist*a.dt)+a.dt*((a.y3-a.y4)*a.spring-a.grav);a.x2+=a.vx2;a.y2+=a.vy2;a.x3+=a.vx3;a.y3+=a.vy3;a.x4+=a.vx4;a.y4+=a.vy4;a.vx2=.00001<Math.abs(above(a.x2,0))?a.vx2:Math.abs(a.vx2)*a.bounce;a.vx2=.00001<Math.abs(below(a.x2,1))?a.vx2:-Math.abs(a.vx2)*a.bounce;a.vx3=.00001<
Math.abs(above(a.x3,0))?a.vx3:Math.abs(a.vx3)*a.bounce;a.vx3=.00001<Math.abs(below(a.x3,1))?a.vx3:-Math.abs(a.vx3)*a.bounce;a.vx4=.00001<Math.abs(above(a.x4,0))?a.vx4:Math.abs(a.vx4)*a.bounce;a.vx4=.00001<Math.abs(below(a.x4,1))?a.vx4:-Math.abs(a.vx4)*a.bounce;a.vy2=.00001<Math.abs(above(a.y2,0))?a.vy2:Math.abs(a.vy2)*a.bounce;a.vy2=.00001<Math.abs(below(a.y2,1))?a.vy2:-Math.abs(a.vy2)*a.bounce;a.vy3=.00001<Math.abs(above(a.y3,0))?a.vy3:Math.abs(a.vy3)*a.bounce;a.vy3=.00001<Math.abs(below(a.y3,1))?
a.vy3:-Math.abs(a.vy3)*a.bounce;a.vy4=.00001<Math.abs(above(a.y4,0))?a.vy4:Math.abs(a.vy4)*a.bounce;a.vy4=.00001<Math.abs(below(a.y4,1))?a.vy4:-Math.abs(a.vy4)*a.bounce;a.q4=a.x4;a.q8=a.y4;a.q1=a.aspectx;a.q2=a.aspecty;a.zoom=1;a.warp=0;a.bb=.99*a.bb+.02*a.bass;a.mm=.99*a.mm+.02*a.mid;a.tt=.99*a.tt+.02*a.treb;a.mx=Math.max(Math.max(a.bb,a.mm),a.tt);a.mn=Math.min(Math.min(a.bb,a.mm),a.tt);a.ob_r=div(a.bb-a.mn,a.mx-a.mn);a.ob_b=div(a.mm-a.mn,a.mx-a.mn);a.ob_g=div(a.tt-a.mn,a.mx-a.mn);a.q6=Math.atan2(a.vx4,
a.vy4);a.q5=sqrt(a.vx4*a.vx4+a.vy4*a.vy4);a.a=.95*a.a+a.q5;a.s=.9*a.s+a.a;a.q3=.1*a.s;a.monitor=a.s;a.wave_a=0;`,pixel_eqs_str:"a.x=.5+(a.x-.5)*a.q1;a.y=.5+(a.y-.5)*a.q2;a.dir=-a.q6+0*Math.asin(1);a.b1=.1;a.m1=25*a.q5;a.t1=.05;a.xx=a.q4;a.yy=1-a.q8;a.dx=0;a.dy=0;a.d=sqrt((a.x-a.xx)*(a.x-a.xx)+(a.y-a.yy)*(a.y-a.yy));a.r=.05;a.v=-35*a.q5;a.dx=a.v*Math.sin(a.dir)*(a.r-a.d)*(1-sigmoid(a.d-a.r,200))*a.q2;a.dy=a.v*Math.cos(a.dir)*(a.r-a.d)*(1-sigmoid(a.d-a.r,200))*a.q1;",warp:` shader_body { 
  vec4 tmpvar_1;
  tmpvar_1.w = 1.0;
  vec4 tmpvar_2;
  tmpvar_2 = texture (sampler_main, uv);
  tmpvar_1.xyz = ((texture (sampler_main, clamp (
    (uv - (((vec2(0.0, 32.0) * texsize.zw) * dot (
      (tmpvar_2.xyz - 0.35)
    , vec3(0.32, 0.49, 0.29))) * (dot (tmpvar_2.xyz, vec3(0.32, 0.49, 0.29)) - 0.4)))
  , 0.0, 1.0)).xyz - 0.0011) + ((texture (sampler_noise_lq, 
    (((uv_orig * texsize.xy) * (texsize_noise_lq.zw * 1.5)) + rand_frame.xy)
  ) - 0.5) * 0.0038).xyz);
  ret = tmpvar_1.xyz;
 }`,comp:` shader_body { 
  vec2 uv1_1;
  vec2 tmpvar_2;
  tmpvar_2.y = 0.0;
  tmpvar_2.x = texsize.z;
  vec2 tmpvar_3;
  tmpvar_3.x = 0.0;
  tmpvar_3.y = texsize.w;
  vec2 tmpvar_4;
  tmpvar_4.x = (texture (sampler_main, (uv - tmpvar_2)).xyz - texture (sampler_main, (uv + tmpvar_2)).xyz).x;
  tmpvar_4.y = (texture (sampler_main, (uv - tmpvar_3)).xyz - texture (sampler_main, (uv + tmpvar_3)).xyz).x;
  uv1_1 = ((0.3 * cos(
    ((uv - 0.5) * 2.0)
  )) - tmpvar_4);
  float tmpvar_5;
  tmpvar_5 = clamp ((0.04 / sqrt(
    dot (uv1_1, uv1_1)
  )), 0.0, 1.0);
  uv1_1 = ((0.3 * cos(
    (uv1_1 * 12.0)
  )) - (9.0 * tmpvar_4));
  vec4 tmpvar_6;
  tmpvar_6.w = 1.0;
  tmpvar_6.xyz = (tmpvar_5 + ((texture (sampler_main, uv).xyz * 12.0) * vec3(clamp (
    (0.04 / sqrt(dot (uv1_1, uv1_1)))
  , 0.0, 1.0))));
  ret = tmpvar_6.xyz;
 }`}},function(o,l){o.exports={baseVals:{rating:5,gammaadj:1,decay:1,modwavealphabyvolume:1,wave_a:.207,wave_scale:.397,wave_smoothing:0,wave_mystery:.24,modwavealphaend:1.17,warpscale:16.016,zoomexp:11.56276,zoom:1.05971,warp:.13126,ob_size:.005,ob_a:1,ib_size:0,mv_x:64,mv_y:48,mv_l:0,mv_r:.35,mv_g:.35,mv_b:.35,mv_a:0},shapes:[{baseVals:{enabled:0}},{baseVals:{enabled:0}},{baseVals:{enabled:0}},{baseVals:{enabled:0}}],waves:[{baseVals:{enabled:0}},{baseVals:{enabled:0}},{baseVals:{enabled:0}},{baseVals:{enabled:0}}],init_eqs_str:"a.d=0;a.cx1=0;a.y3=0;a.y1=0;a.cy1=0;a.x1=0;a.vx3=0;a.q6=0;a.dt=0;a.q1=0;a.q5=0;a.v=0;a.vx4=0;a.grav=0;a.x3=0;a.xx2=0;a.q4=0;a.yy1=0;a.vy4=0;a.dir=0;a.bounce=0;a.x4=0;a.r=0;a.x2=0;a.vy2=0;a.y2=0;a.q2=0;a.spring=0;a.vx2=0;a.q3=0;a.resist=0;a.y4=0;a.q7=0;a.vy3=0;a.xx1=0;a.q8=0;",frame_eqs_str:`a.decay=1;a.xx1=.9*a.xx1+.01*a.bass;a.xx2=.9*a.xx2+.01*a.treb;a.yy1=.94*a.yy1+.0075*(a.treb+a.bass);a.x1=.5+1.5*(a.xx1-a.xx2);a.y1=.5+a.yy1;a.spring=18;a.grav=1;a.resist=5;a.bounce=.9;a.dt=.0003;a.vx2=a.vx2*(1-a.resist*a.dt)+a.dt*(a.x1+a.x3-2*a.x2)*a.spring;a.vy2=a.vy2*(1-a.resist*a.dt)+a.dt*((a.y1+a.y3-2*a.y2)*a.spring-a.grav);a.vx3=a.vx3*(1-a.resist*a.dt)+a.dt*(a.x2+a.x4-2*a.x3)*a.spring;a.vy3=a.vy3*(1-a.resist*a.dt)+a.dt*((a.y2+a.y4-2*a.y3)*a.spring-a.grav);a.vx4=a.vx4*(1-
a.resist*a.dt)+a.dt*(a.x3-a.x4)*a.spring;a.vy4=a.vy4*(1-a.resist*a.dt)+a.dt*((a.y3-a.y4)*a.spring-a.grav);a.x2+=a.vx2;a.y2+=a.vy2;a.x3+=a.vx3;a.y3+=a.vy3;a.x4+=a.vx4;a.y4+=a.vy4;a.vx2=.00001<Math.abs(above(a.x2,0))?a.vx2:Math.abs(a.vx2)*a.bounce;a.vx2=.00001<Math.abs(below(a.x2,1))?a.vx2:-Math.abs(a.vx2)*a.bounce;a.vx3=.00001<Math.abs(above(a.x3,0))?a.vx3:Math.abs(a.vx3)*a.bounce;a.vx3=.00001<Math.abs(below(a.x3,1))?a.vx3:-Math.abs(a.vx3)*a.bounce;a.vx4=.00001<Math.abs(above(a.x4,0))?a.vx4:Math.abs(a.vx4)*
a.bounce;a.vx4=.00001<Math.abs(below(a.x4,1))?a.vx4:-Math.abs(a.vx4)*a.bounce;a.vy2=.00001<Math.abs(above(a.y2,0))?a.vy2:Math.abs(a.vy2)*a.bounce;a.vy2=.00001<Math.abs(below(a.y2,1))?a.vy2:-Math.abs(a.vy2)*a.bounce;a.vy3=.00001<Math.abs(above(a.y3,0))?a.vy3:Math.abs(a.vy3)*a.bounce;a.vy3=.00001<Math.abs(below(a.y3,1))?a.vy3:-Math.abs(a.vy3)*a.bounce;a.vy4=.00001<Math.abs(above(a.y4,0))?a.vy4:Math.abs(a.vy4)*a.bounce;a.vy4=.00001<Math.abs(below(a.y4,1))?a.vy4:-Math.abs(a.vy4)*a.bounce;a.q1=a.x1;a.q2=
a.x2;a.q3=a.x3;a.q4=a.x4;a.q5=a.y1;a.q6=a.y2;a.q7=a.y3;a.q8=a.y4;a.q6=Math.atan2(a.vx4,a.vy4);a.q5=sqrt(a.vx4*a.vx4+a.vy4*a.vy4);a.zoom=1.001;a.rot=0;a.warp=.2;a.wave_a=0;`,pixel_eqs_str:"a.r=.2;a.cx1=a.q4;a.cy1=a.q5;a.d=sqrt((a.x-a.cx1)*(a.x-a.cx1)+(a.y-a.cy1)*(a.y-a.cy1));a.dir=-(a.r*a.r-a.d*a.d)*a.q3;a.x1=.00001<Math.abs(above(a.d,a.r))?0:Math.sin(a.y-a.cy1)*a.dir;a.y1=.00001<Math.abs(above(a.d,a.r))?0:-Math.sin(a.x-a.cx1)*a.dir;a.v=1;a.dx=a.x1*a.v;a.dy=a.y1*a.v;",warp:` shader_body { 
  vec2 uv_1;
  vec3 ret_2;
  uv_1 = (0.5 + ((uv - 0.5) * 1.002));
  vec2 tmpvar_3;
  tmpvar_3 = (texsize.zw * 8.0);
  vec3 tmpvar_4;
  tmpvar_4 = (((texture (sampler_blur1, 
    (uv_1 + (vec2(1.0, 0.0) * tmpvar_3))
  ).xyz * scale1) + bias1) - ((texture (sampler_blur1, 
    (uv_1 - (vec2(1.0, 0.0) * tmpvar_3))
  ).xyz * scale1) + bias1));
  vec3 tmpvar_5;
  tmpvar_5 = (((texture (sampler_blur1, 
    (uv_1 + (vec2(0.0, 1.0) * tmpvar_3))
  ).xyz * scale1) + bias1) - ((texture (sampler_blur1, 
    (uv_1 - (vec2(0.0, 1.0) * tmpvar_3))
  ).xyz * scale1) + bias1));
  vec2 tmpvar_6;
  tmpvar_6.x = tmpvar_4.x;
  tmpvar_6.y = tmpvar_5.x;
  vec2 tmpvar_7;
  tmpvar_7 = fract(((0.5 + 
    (uv_1 - 0.5)
  ) - (tmpvar_6 * texsize.zw)));
  ret_2.x = texture (sampler_main, tmpvar_7).x;
  ret_2.x = (ret_2.x + ((
    (ret_2.x - ((texture (sampler_blur2, tmpvar_7).xyz * scale2) + bias2))
  .x * 0.4) + 0.006));
  vec2 tmpvar_8;
  tmpvar_8.x = tmpvar_5.x;
  tmpvar_8.y = -(tmpvar_4.x);
  vec2 tmpvar_9;
  tmpvar_9.x = tmpvar_4.z;
  tmpvar_9.y = tmpvar_5.z;
  ret_2.z = max ((clamp (
    (((texture (sampler_blur1, uv_1).xyz * scale1) + bias1).x - 0.3)
  , 0.0, 1.0) * 2.0), (texture (sampler_fc_main, (
    (uv_1 - ((tmpvar_8 * texsize.zw) * 8.0))
   + 
    ((tmpvar_9 * texsize.zw) * 4.0)
  )).z - 0.008));
  vec2 tmpvar_10;
  tmpvar_10.x = tmpvar_4.y;
  tmpvar_10.y = tmpvar_5.y;
  ret_2.y = max (ret_2.x, (texture (sampler_fc_main, (uv_1 + 
    (tmpvar_10 * texsize.zw)
  )).y - 0.016));
  vec4 tmpvar_11;
  tmpvar_11.w = 1.0;
  tmpvar_11.xyz = ret_2;
  ret = tmpvar_11.xyz;
 }`,comp:` shader_body { 
  vec3 ret_1;
  vec2 tmpvar_2;
  tmpvar_2 = (texsize.zw * 6.0);
  vec3 tmpvar_3;
  tmpvar_3 = (((texture (sampler_blur1, 
    (uv + (vec2(1.0, 0.0) * tmpvar_2))
  ).xyz * scale1) + bias1) - ((texture (sampler_blur1, 
    (uv - (vec2(1.0, 0.0) * tmpvar_2))
  ).xyz * scale1) + bias1));
  vec3 tmpvar_4;
  tmpvar_4 = (((texture (sampler_blur1, 
    (uv + (vec2(0.0, 1.0) * tmpvar_2))
  ).xyz * scale1) + bias1) - ((texture (sampler_blur1, 
    (uv - (vec2(0.0, 1.0) * tmpvar_2))
  ).xyz * scale1) + bias1));
  vec2 tmpvar_5;
  tmpvar_5.x = dot (tmpvar_3, vec3(0.32, 0.49, 0.29));
  tmpvar_5.y = dot (tmpvar_4, vec3(0.32, 0.49, 0.29));
  vec2 tmpvar_6;
  tmpvar_6 = (uv - (0.25 * tmpvar_5));
  vec2 tmpvar_7;
  tmpvar_7.x = dot (tmpvar_3, vec3(0.32, 0.49, 0.29));
  tmpvar_7.y = dot (tmpvar_4, vec3(0.32, 0.49, 0.29));
  vec2 tmpvar_8;
  tmpvar_8 = (uv + (0.25 * tmpvar_7));
  ret_1 = ((0.8 * (
    (texture (sampler_blur3, tmpvar_6).xyz * scale3)
   + bias3)) - ((texture (sampler_blur1, tmpvar_6).xyz * scale1) + bias1));
  ret_1 = (ret_1 + (0.6 * (
    (texture (sampler_blur1, uv).xyz * scale1)
   + bias1)));
  ret_1 = (ret_1 - ((
    (texture (sampler_blur2, tmpvar_8).xyz * scale2)
   + bias2) - (
    (texture (sampler_blur1, tmpvar_8).xyz * scale1)
   + bias1)));
  ret_1 = (ret_1 + ((1.2 * texture (sampler_main, tmpvar_8).xyz) + (0.15 * 
    ((texture (sampler_blur1, tmpvar_8).xyz * scale1) + bias1)
  )));
  ret_1 = (ret_1 + 1.0);
  float tmpvar_9;
  tmpvar_9 = dot (ret_1, vec3(0.32, 0.49, 0.29));
  ret_1 = (mix (vec3(tmpvar_9), (
    (0.75 * vec3(tmpvar_9))
   * 
    dot ((((0.6 * 
      ((texture (sampler_blur3, tmpvar_6).xyz * scale3) + bias3)
    ) - (0.7 * texture (sampler_main, uv).xyz)) - (0.3 * (
      (texture (sampler_blur1, tmpvar_8).xyz * scale1)
     + bias1))), vec3(0.32, 0.49, 0.29))
  ), pow (hue_shader, vec3(tmpvar_9))) * 0.9);
  ret_1 = (ret_1 * ret_1);
  vec3 tmpvar_10;
  tmpvar_10 = sqrt(ret_1);
  ret_1 = tmpvar_10;
  vec4 tmpvar_11;
  tmpvar_11.w = 1.0;
  tmpvar_11.xyz = tmpvar_10;
  ret = tmpvar_11.xyz;
 }`}},function(o,l){o.exports={baseVals:{rating:4,gammaadj:1,wave_thick:1,wrap:0,wave_a:.004,wave_scale:9.731,wave_smoothing:0,wave_mystery:1,modwavealphastart:1,modwavealphaend:1,warpanimspeed:.442,warpscale:7.315,zoomexp:1.50374,warp:.08563,wave_y:.04,ob_size:0,ob_g:1,ob_a:1,ib_size:0,ib_r:1,ib_g:0,ib_b:.75,ib_a:1,mv_x:64,mv_y:48,mv_l:0,mv_b:0,mv_a:0,b1ed:0},shapes:[{baseVals:{enabled:0}},{baseVals:{enabled:0}},{baseVals:{enabled:0}},{baseVals:{enabled:1,sides:3,additive:1,num_inst:400,rad:.16283,tex_zoom:.73458,g:1,b:1,a:.5,g2:0,border_a:0},init_eqs_str:"a.bending=0;a.ppo=0;a.index=0;a.i3=0;a.dir=0;a.i4=0;a.size=0;a.q2=0;a.q32=0;a.sample=0;a.i3=0;a.i4=0;",frame_eqs_str:`a.i3=.00001<Math.abs(equal(a.instance,0))?0:a.i3;a.i4=.00001<Math.abs(equal(a.instance,0))?0:a.i4;a.ppo=8;a.index=a.i4*a.q32;a.sample=mod(a.i3,a.ppo);a.size=40*a.gmegabuf[Math.floor(a.index+4)];a.x=a.gmegabuf[Math.floor(a.index)];a.y=a.gmegabuf[Math.floor(a.index+1)];a.ang=a.gmegabuf[Math.floor(a.index+9)];a.rad=.05*a.size;a.r=a.gmegabuf[Math.floor(a.index+5)];a.g=a.gmegabuf[Math.floor(a.index+6)];a.b=a.gmegabuf[Math.floor(a.index+7)];a.sample=div(a.sample,a.ppo);a.bending=
5*a.gmegabuf[Math.floor(a.index+12)]+5*a.gmegabuf[Math.floor(a.index+10)];a.dir=-a.ang+(a.sample-.4)*a.bending;a.ang=1.5*Math.asin(1)-a.dir+.05*a.bending;a.x+=.06*(a.sample-.3)*Math.cos(a.dir)*a.size+Math.sin(a.dir)*a.size*a.bending*.01;a.y+=.06*(a.sample-.3)*Math.sin(a.dir)*a.size-Math.cos(a.dir)*a.size*a.bending*.01;a.x=.5+div(a.x-.5,a.q2);a.rad=1.5*a.rad-.05*a.sample*a.size;a.i3+=1;a.i4=.00001<Math.abs(equal(mod(a.i3,a.ppo),0))?a.i4+1:a.i4;`}],waves:[{baseVals:{enabled:0}},{baseVals:{enabled:1,samples:65,spectrum:1,usedots:1,thick:1,additive:1,scaling:.33408,smoothing:0,a:0},init_eqs_str:"a.d=0;a.q32=0;a.t8=0;a.t1=0;a.t2=0;a.t2=0;a.t3=0;a.t4=0;a.cl=0;",frame_eqs_str:"a.t8=1;a.t1=.5;a.t2=.9;",point_eqs_str:"a.d=0;a.y=.2+a.value1+a.value2;a.x=.9-.8*a.sample;a.gmegabuf[Math.floor((64*a.sample-1)*a.q32+14)]=a.value1+a.value2;"},{baseVals:{enabled:0}},{baseVals:{enabled:0}}],init_eqs_str:`a.fric=0;a.d=0;a.nliststart=0;a.w=0;a.random=0;a.index2=0;a.index=0;a.w2=0;a.rotatefactor=0;a.ref_ang=0;a.smaller=0;a.dt=0;a.q1=0;a.j=0;a.v=0;a.count=0;a.shock=0;a.nn=0;a.vrr=0;a.check=0;a.gravity=0;a.vr2=0;a.direction=0;a.bouncefactor=0;a.smallestfind=0;a.distance=0;a.bounce=0;a.vr=0;a.vv1=0;a.vv2=0;a.vrr2=0;a.w1=0;a.attributes=0;a.i=0;a.m2=0;a.hit=0;a.q2=0;a.m1=0;a.h=0;a.v1=0;a.acceleration=0;a.findindex=0;a.friction=0;a.pi2=0;a.sample=0;a.v2=0;a.dampening=0;for(var b=a.i=
0;1048576>b;b++)a.gmegabuf[Math.floor(a.i)]=0,a.i+=1;a.count=50;a.attributes=32;a.nliststart=24;a.minradius=.004;a.maxradius=.04;a.v=0;for(b=a.index=0;b<a.count;b++)a.gmegabuf[Math.floor(a.index*a.attributes)]=div(randint(1E3),1E3),a.gmegabuf[Math.floor(a.index*a.attributes+1)]=div(randint(1E3),1E3),a.gmegabuf[Math.floor(a.index*a.attributes+2)]=a.v*(div(randint(1E3),1E3)-.5),a.gmegabuf[Math.floor(a.index*a.attributes+3)]=a.v*(div(randint(1E3),1E3)-.5),a.gmegabuf[Math.floor(a.index*a.attributes+4)]=
a.minradius+div((a.maxradius-a.minradius)*(a.index+1),a.count),a.gmegabuf[Math.floor(a.index*a.attributes+5)]=0,a.gmegabuf[Math.floor(a.index*a.attributes+6)]=1,a.gmegabuf[Math.floor(a.index*a.attributes+7)]=1,a.gmegabuf[Math.floor(a.index*a.attributes+8)]=pow(a.gmegabuf[Math.floor(a.index*a.attributes+4)],3),a.gmegabuf[Math.floor(a.index*a.attributes+9)]=div(4*Math.asin(1)*randint(1E3),1E3),a.gmegabuf[Math.floor(a.index*a.attributes+10)]=0,a.gmegabuf[Math.floor(a.index*a.attributes+13)]=div(a.index,
a.count-1),a.gmegabuf[Math.floor(a.index*a.attributes+14)]=0,a.index+=1;a.q30=a.nliststart;a.q31=a.count;a.q32=a.attributes;`,frame_eqs_str:`a.dt=div(1,a.fps);a.warp=0;a.zoom=1;a.wave_a=0;a.gravity=0*a.dt;a.dampening=0;a.friction=2048*a.dt;a.shock=.002;a.pi2=Math.asin(1);a.nn=3;a.check=2;a.bouncefactor=.1;a.rotatefactor=0;a.h=.5*(a.aspecty-1);a.w=.5*(a.aspectx-1);a.index=0;for(var c=a.index2=0;c<a.count;c++){a.random=div(randint(1E3),1E3);a.sample=a.gmegabuf[Math.floor(a.index+13)];a.gmegabuf[Math.floor(a.index+11)]=.92*a.gmegabuf[Math.floor(a.index+11)]-4*a.gmegabuf[Math.floor(a.index+12)]*a.dt+2*(a.random-.5)*
a.dt*a.gmegabuf[Math.floor(a.index+14)];a.gmegabuf[Math.floor(a.index+12)]+=60*a.gmegabuf[Math.floor(a.index+11)]*a.dt;a.v=sqrt(sqr(a.gmegabuf[Math.floor(a.index+2)])+sqr(a.gmegabuf[Math.floor(a.index+3)]));a.fric=Math.max(0,1-sqr(a.v*a.friction)-2*a.v);a.gmegabuf[Math.floor(a.index+2)]*=a.fric;a.gmegabuf[Math.floor(a.index+3)]*=a.fric;a.gmegabuf[Math.floor(a.index+10)]=a.gmegabuf[Math.floor(a.index+10)]*a.fric+a.v*a.gmegabuf[Math.floor(a.index+12)]*0;a.acceleration=0*a.random+.003*Math.abs(a.gmegabuf[Math.floor(a.index+
11)]);a.direction=a.gmegabuf[Math.floor(a.index+9)]-a.pi2;a.gmegabuf[Math.floor(a.index+2)]+=Math.sin(a.direction)*a.acceleration;a.gmegabuf[Math.floor(a.index+3)]+=Math.cos(a.direction)*a.acceleration;a.gmegabuf[Math.floor(a.index)]+=60*a.gmegabuf[Math.floor(a.index+2)]*a.dt;a.gmegabuf[Math.floor(a.index+1)]+=60*a.gmegabuf[Math.floor(a.index+3)]*a.dt;a.gmegabuf[Math.floor(a.index+9)]+=.5*a.gmegabuf[Math.floor(a.index+10)];a.gmegabuf[Math.floor(a.index+3)]-=a.gravity;a.vr=Math.sin(a.gmegabuf[Math.floor(a.index+
10)])*a.gmegabuf[Math.floor(a.index+4)];a.bounce=above(a.gmegabuf[Math.floor(a.index+1)],1-a.gmegabuf[Math.floor(a.index+4)]+a.w);a.gmegabuf[Math.floor(a.index+2)]=.00001<Math.abs(a.bounce)?a.gmegabuf[Math.floor(a.index+2)]+(a.vr+a.gmegabuf[Math.floor(a.index+2)])*a.rotatefactor:a.gmegabuf[Math.floor(a.index+2)];a.gmegabuf[Math.floor(a.index+3)]=.00001<Math.abs(a.bounce)?-Math.abs(a.gmegabuf[Math.floor(a.index+3)])*a.dampening-a.shock:a.gmegabuf[Math.floor(a.index+3)];a.vr=.00001<Math.abs(a.bounce)?
a.vr-(a.gmegabuf[Math.floor(a.index+2)]+a.vr)*(1-a.rotatefactor):a.vr;a.bounce=below(a.gmegabuf[Math.floor(a.index+1)],a.gmegabuf[Math.floor(a.index+4)]-a.w);a.gmegabuf[Math.floor(a.index+2)]=.00001<Math.abs(a.bounce)?a.gmegabuf[Math.floor(a.index+2)]+(a.vr-a.gmegabuf[Math.floor(a.index+2)])*a.rotatefactor:a.gmegabuf[Math.floor(a.index+2)];a.gmegabuf[Math.floor(a.index+3)]=.00001<Math.abs(a.bounce)?Math.abs(a.gmegabuf[Math.floor(a.index+3)])*a.dampening+a.shock:a.gmegabuf[Math.floor(a.index+3)];a.vr=
.00001<Math.abs(a.bounce)?a.vr+(a.gmegabuf[Math.floor(a.index+2)]-a.vr)*(1-a.rotatefactor):a.vr;a.bounce=above(a.gmegabuf[Math.floor(a.index)],1-a.gmegabuf[Math.floor(a.index+4)]+a.h);a.gmegabuf[Math.floor(a.index+2)]=.00001<Math.abs(a.bounce)?-Math.abs(a.gmegabuf[Math.floor(a.index+2)])*a.dampening-a.shock:a.gmegabuf[Math.floor(a.index+2)];a.gmegabuf[Math.floor(a.index+3)]=.00001<Math.abs(a.bounce)?a.gmegabuf[Math.floor(a.index+3)]+(a.vr-a.gmegabuf[Math.floor(a.index+3)])*a.rotatefactor:a.gmegabuf[Math.floor(a.index+
3)];a.vr=.00001<Math.abs(a.bounce)?a.vr+(a.gmegabuf[Math.floor(a.index+3)]-a.vr)*(1-a.rotatefactor):a.vr;a.bounce=below(a.gmegabuf[Math.floor(a.index)],a.gmegabuf[Math.floor(a.index+4)]-a.h);a.gmegabuf[Math.floor(a.index+2)]=.00001<Math.abs(a.bounce)?Math.abs(a.gmegabuf[Math.floor(a.index+2)])*a.dampening+a.shock:a.gmegabuf[Math.floor(a.index+2)];a.gmegabuf[Math.floor(a.index+3)]=.00001<Math.abs(a.bounce)?a.gmegabuf[Math.floor(a.index+3)]-(a.vr+a.gmegabuf[Math.floor(a.index+3)])*a.rotatefactor:a.gmegabuf[Math.floor(a.index+
3)];a.vr=.00001<Math.abs(a.bounce)?a.vr-(a.gmegabuf[Math.floor(a.index+3)]+a.vr)*(1-a.rotatefactor):a.vr;a.gmegabuf[Math.floor(a.index+10)]=Math.asin(div(a.vr,a.gmegabuf[Math.floor(a.index+4)]));a.i=0;for(var b=a.j=0;b<a.count;b++)a.d=sqrt(sqr(a.gmegabuf[Math.floor(a.index)]-a.gmegabuf[Math.floor(a.i)])+sqr(a.gmegabuf[Math.floor(a.index+1)]-a.gmegabuf[Math.floor(a.i+1)])),a.d=.00001<Math.abs(equal(a.d,0))?10:a.d,a.d-=.5*(a.gmegabuf[Math.floor(a.index+4)]+a.gmegabuf[Math.floor(a.i+4)]),a.megabuf[Math.floor(a.j)]=
a.i,a.megabuf[Math.floor(a.j+1)]=a.d,a.j+=2,a.i+=a.attributes;for(b=a.i=0;b<a.nn;b++){a.j=a.i;a.smallestfind=10;a.findindex=-1;for(var d=0;d<a.count-a.j;d++)a.distance=a.megabuf[Math.floor(2*a.j+1)],a.smaller=above(a.smallestfind,a.distance),a.smallestfind=.00001<Math.abs(a.smaller)?a.distance:a.smallestfind,a.findindex=.00001<Math.abs(a.smaller)?2*a.j:a.findindex,a.j+=1;a.j=a.megabuf[Math.floor(2*a.i)];a.d=a.megabuf[Math.floor(2*a.i+1)];a.megabuf[Math.floor(2*a.i)]=a.megabuf[Math.floor(a.findindex)];
a.megabuf[Math.floor(2*a.i+1)]=a.megabuf[Math.floor(a.findindex+1)];a.megabuf[Math.floor(a.findindex)]=a.j;a.megabuf[Math.floor(a.findindex+1)]=a.d;a.i+=1}for(b=a.i=0;b<a.nn;b++)a.gmegabuf[Math.floor(a.index+a.nliststart+a.i)]=a.megabuf[Math.floor(2*a.i)],a.i+=1;for(b=a.i=0;b<a.check;b++)a.index2=a.megabuf[Math.floor(a.i)],a.hit=below(sqrt(sqr(a.gmegabuf[Math.floor(a.index)]-a.gmegabuf[Math.floor(a.index2)])+sqr(a.gmegabuf[Math.floor(a.index+1)]-a.gmegabuf[Math.floor(a.index2+1)])),a.gmegabuf[Math.floor(a.index+
4)]+a.gmegabuf[Math.floor(a.index2+4)])*above(sqrt(sqr(a.gmegabuf[Math.floor(a.index)]-a.gmegabuf[Math.floor(a.index2)])+sqr(a.gmegabuf[Math.floor(a.index+1)]-a.gmegabuf[Math.floor(a.index2+1)])),sqrt(sqr(a.gmegabuf[Math.floor(a.index+0)]-a.gmegabuf[Math.floor(a.index2+0)]+a.gmegabuf[Math.floor(a.index+2)]-a.gmegabuf[Math.floor(a.index2+2)])+sqr(a.gmegabuf[Math.floor(a.index+1)]-a.gmegabuf[Math.floor(a.index2+1)]+a.gmegabuf[Math.floor(a.index+3)]-a.gmegabuf[Math.floor(a.index2+3)]))),a.ref_ang=Math.atan2(a.gmegabuf[Math.floor(a.index2)]-
a.gmegabuf[Math.floor(a.index)],a.gmegabuf[Math.floor(a.index2+1)]-a.gmegabuf[Math.floor(a.index+1)])+a.pi2,a.v1=sqrt(sqr(a.gmegabuf[Math.floor(a.index+2)])+sqr(a.gmegabuf[Math.floor(a.index+3)])),a.v2=sqrt(sqr(a.gmegabuf[Math.floor(a.index2+2)])+sqr(a.gmegabuf[Math.floor(a.index2+3)])),a.w1=Math.atan2(a.gmegabuf[Math.floor(a.index+2)],a.gmegabuf[Math.floor(a.index+3)]),a.w2=Math.atan2(a.gmegabuf[Math.floor(a.index2+2)],a.gmegabuf[Math.floor(a.index2+3)]),a.vr2=Math.sin(a.gmegabuf[Math.floor(a.index2+
10)])*a.gmegabuf[Math.floor(a.index2+4)],a.m1=a.gmegabuf[Math.floor(a.index+8)],a.m2=a.gmegabuf[Math.floor(a.index2+8)],a.vv1=div((a.m1-a.m2)*a.v1+2*a.m2*a.v2,a.m1+a.m2),a.vv2=div((a.m2-a.m1)*a.v2+2*a.m1*a.v1,a.m1+a.m2),a.vrr=div((a.m1-a.m2)*a.vr+2*a.m2*a.vr2,a.m1+a.m2),a.vrr2=div((a.m2-a.m1)*a.vr2+2*a.m1*a.vr,a.m1+a.m2),a.gmegabuf[Math.floor(a.index+2)]=.00001<Math.abs(a.hit)?Math.sin(a.ref_ang)*a.v1*Math.cos(a.w1-a.ref_ang)+.1*(a.vr-a.vr2-Math.sin(a.ref_ang)*a.v1*Math.cos(a.w1-a.ref_ang))+Math.cos(a.ref_ang)*
a.vv1*Math.sin(a.w2-a.ref_ang):a.gmegabuf[Math.floor(a.index+2)],a.gmegabuf[Math.floor(a.index+3)]=.00001<Math.abs(a.hit)?Math.cos(a.ref_ang)*a.v1*Math.cos(a.w1-a.ref_ang)+.1*(a.vr-a.vr2-Math.cos(a.ref_ang)*a.v1*Math.cos(a.w1-a.ref_ang))-Math.sin(a.ref_ang)*a.vv1*Math.sin(a.w2-a.ref_ang):a.gmegabuf[Math.floor(a.index+3)],a.gmegabuf[Math.floor(a.index2+2)]=.00001<Math.abs(a.hit)?Math.sin(a.ref_ang)*a.v2*Math.cos(a.w2-a.ref_ang)+.1*(a.vr2-a.vr-Math.sin(a.ref_ang)*a.v2*Math.cos(a.w2-a.ref_ang))+Math.cos(a.ref_ang)*
a.vv2*Math.sin(a.w1-a.ref_ang):a.gmegabuf[Math.floor(a.index2+2)],a.gmegabuf[Math.floor(a.index2+3)]=.00001<Math.abs(a.hit)?Math.cos(a.ref_ang)*a.v2*Math.cos(a.w2-a.ref_ang)+.1*(a.vr2-a.vr-Math.cos(a.ref_ang)*a.v2*Math.cos(a.w2-a.ref_ang))-Math.sin(a.ref_ang)*a.vv2*Math.sin(a.w1-a.ref_ang):a.gmegabuf[Math.floor(a.index2+3)],a.vr=.00001<Math.abs(a.hit)?a.vr+(Math.cos(a.w1-a.ref_ang)*(a.v1-a.v2)-a.vr):a.vr,a.gmegabuf[Math.floor(a.index+10)]=Math.asin(div(a.vr,a.gmegabuf[Math.floor(a.index+4)])),a.vr2=
.00001<Math.abs(a.hit)?a.vr2+(Math.cos(a.w2-a.ref_ang)*(a.v2-a.v1)-a.vr2):a.vr2,a.gmegabuf[Math.floor(a.index2+10)]=Math.asin(div(a.vr2,a.gmegabuf[Math.floor(a.index2+4)])),a.i+=2;a.index+=a.attributes}a.q1=a.aspectx;a.q2=a.aspecty;`,pixel_eqs_str:"",pixel_eqs:"",warp:` shader_body { 
  vec3 ret_1;
  ret_1.z = (texture (sampler_main, uv).z * 0.5);
  vec2 tmpvar_2;
  tmpvar_2 = ((uv_orig * texsize.xy) * texsize_noise_lq.zw);
  vec2 tmpvar_3;
  tmpvar_3 = (texsize.zw * 4.0);
  vec2 tmpvar_4;
  tmpvar_4.x = (((2.0 * 
    ((texture (sampler_blur1, (uv_orig + (vec2(1.0, 0.0) * tmpvar_3))).xyz * scale1) + bias1)
  ) - (2.0 * 
    ((texture (sampler_blur1, (uv_orig - (vec2(1.0, 0.0) * tmpvar_3))).xyz * scale1) + bias1)
  )).y * 0.5);
  tmpvar_4.y = (((2.0 * 
    ((texture (sampler_blur1, (uv_orig + (vec2(0.0, 1.0) * tmpvar_3))).xyz * scale1) + bias1)
  ) - (2.0 * 
    ((texture (sampler_blur1, (uv_orig - (vec2(0.0, 1.0) * tmpvar_3))).xyz * scale1) + bias1)
  )).y * 0.5);
  ret_1.y = texture (sampler_fw_main, clamp ((uv_orig + (
    (tmpvar_4 * texsize.zw)
   * 4.0)), 0.0, 1.0)).y;
  ret_1.y = (ret_1.y + ((
    (ret_1 - ((texture (sampler_blur1, uv_orig).xyz * scale1) + bias1))
  .y * 0.025) + -0.014));
  ret_1.y = (ret_1.y + ((texture (sampler_noise_lq, tmpvar_2).y - 0.5) * 0.02));
  vec2 tmpvar_5;
  tmpvar_5.x = (((2.0 * 
    ((texture (sampler_blur1, (uv_orig + (vec2(1.0, 0.0) * tmpvar_3))).xyz * scale1) + bias1)
  ) - (2.0 * 
    ((texture (sampler_blur1, (uv_orig - (vec2(1.0, 0.0) * tmpvar_3))).xyz * scale1) + bias1)
  )).x * 0.5);
  tmpvar_5.y = (((2.0 * 
    ((texture (sampler_blur1, (uv_orig + (vec2(0.0, 1.0) * tmpvar_3))).xyz * scale1) + bias1)
  ) - (2.0 * 
    ((texture (sampler_blur1, (uv_orig - (vec2(0.0, 1.0) * tmpvar_3))).xyz * scale1) + bias1)
  )).x * 0.5);
  ret_1.x = ((texture (sampler_main, (uv - 
    ((tmpvar_5 * texsize.zw) * 4.0)
  )).x - (ret_1.y * 0.01)) + 0.004);
  ret_1.x = (ret_1.x + ((
    (texture (sampler_noise_lq, tmpvar_2).x - 0.5)
   * 0.01) + (ret_1.z * 0.14)));
  vec4 tmpvar_6;
  tmpvar_6.w = 1.0;
  tmpvar_6.xyz = ret_1;
  ret = tmpvar_6.xyz;
 }`,comp:` shader_body { 
  vec3 ret_1;
  vec2 tmpvar_2;
  tmpvar_2 = (texsize.zw * 4.0);
  vec2 tmpvar_3;
  tmpvar_3.x = (((2.0 * 
    ((texture (sampler_blur1, (uv + (vec2(1.0, 0.0) * tmpvar_2))).xyz * scale1) + bias1)
  ) - (2.0 * 
    ((texture (sampler_blur1, (uv - (vec2(1.0, 0.0) * tmpvar_2))).xyz * scale1) + bias1)
  )) * 0.5).y;
  tmpvar_3.y = (((2.0 * 
    ((texture (sampler_blur1, (uv + (vec2(0.0, 1.0) * tmpvar_2))).xyz * scale1) + bias1)
  ) - (2.0 * 
    ((texture (sampler_blur1, (uv - (vec2(0.0, 1.0) * tmpvar_2))).xyz * scale1) + bias1)
  )) * 0.5).y;
  vec2 tmpvar_4;
  tmpvar_4 = (uv - ((tmpvar_3 * texsize.zw) * 128.0));
  vec4 tmpvar_5;
  tmpvar_5 = texture (sampler_main, uv);
  ret_1 = (((
    ((texture (sampler_blur2, tmpvar_4).xyz * scale2) + bias2)
  .x * 
    clamp ((1.0 - tmpvar_5.y), 0.0, 1.0)
  ) * pow (hue_shader.yxz, vec3(8.0, 8.0, 8.0))) * 3.0);
  ret_1 = (mix (mix (ret_1, 
    (pow (hue_shader.yzx, vec3(8.0, 8.0, 8.0)) * 1.4)
  , vec3(
    ((texture (sampler_main, tmpvar_4).x * 0.8) + ((texture (sampler_blur1, tmpvar_4).xyz * scale1) + bias1).x)
  )), vec3(1.0, 1.0, 1.0), (
    (pow (hue_shader, vec3(8.0, 8.0, 8.0)) * texture (sampler_main, clamp (uv, 0.0, 1.0)).y)
   * 1.2)) * clamp ((1.0 - tmpvar_5.z), 0.0, 1.0));
  vec4 tmpvar_6;
  tmpvar_6.w = 1.0;
  tmpvar_6.xyz = ret_1;
  ret = tmpvar_6.xyz;
 }`}},function(o,l){o.exports={baseVals:{rating:5,gammaadj:1,decay:.995,echo_zoom:1.007,echo_orient:3,wave_thick:1,modwavealphabyvolume:1,wave_a:.9,wave_scale:2.997,wave_smoothing:0,wave_mystery:-.5,modwavealphastart:1,modwavealphaend:1,warpanimspeed:.274,warpscale:7.98,zoom:.99951,warp:.20929,wave_r:.02,wave_g:.02,wave_b:0,ob_size:.5,ob_r:1,ob_g:.12,ob_b:1,ob_a:.37,ib_size:0,ib_a:1,mv_x:0,mv_y:0,mv_l:5,mv_a:0,b1ed:.2},shapes:[{baseVals:{enabled:0}},{baseVals:{enabled:0}},{baseVals:{enabled:0}},{baseVals:{enabled:0}}],waves:[{baseVals:{enabled:0}},{baseVals:{enabled:0}},{baseVals:{enabled:0}},{baseVals:{enabled:0}}],init_eqs_str:"a.d=0;a.w=0;a.h3=0;a.q12=0;a.q6=0;a.bt=0;a.q1=0;a.q5=0;a.startx=0;a.v=0;a.mm=0;a.h2=0;a.tt=0;a.bm=0;a.q11=0;a.q10=0;a.q4=0;a.a=0;a.mt=0;a.b=0;a.mx=0;a.mn=0;a.bb=0;a.q2=0;a.starty=0;a.h1=0;a.q3=0;a.q7=0;a.x1=0;a.y1=.001;a.z1=0;",frame_eqs_str:`a.zoom=1;a.wave_a=0;a.startx=.3;a.starty=.3;a.a=.55;a.b=.05;a.d=.09;a.q1=a.aspectx;a.q2=a.aspecty;a.q5=a.a;a.q6=a.b;a.q7=a.d;a.bb=.99*a.bb+.02*a.bass;a.mm=.99*a.mm+.02*a.mid;a.tt=.99*a.tt+.02*a.treb;a.mx=Math.max(Math.max(a.bb,a.mm),a.tt);a.mn=Math.min(Math.min(a.bb,a.mm),a.tt);a.h1=div(a.bb-a.mn,a.mx-a.mn);a.h2=div(a.mm-a.mn,a.mx-a.mn);a.h3=div(a.tt-a.mn,a.mx-a.mn);a.v=div(.1333,a.fps);a.bm+=(a.h1-a.h2)*a.v;a.mt+=(a.h2-a.h3)*a.v;a.bt+=(a.h1-a.h3)*a.v;a.w=2*a.bm;a.q3=Math.sin(a.w);
a.q4=Math.cos(a.w);a.q10=a.bm;a.q11=a.mt;a.q12=a.bt;`,pixel_eqs_str:"a.x=.5+(a.x-.51)*a.q1;a.y=.5-(a.y-.5)*a.q2;a.dx=a.x*(1-a.x)-div(a.q5*a.x*a.y,a.x+a.q6);a.dy=-a.q7*a.y*(1-div(a.y,a.x));a.dx=div(.02*-a.dx,a.q1);a.dy=div(.02*-a.dy,a.q2);",warp:` shader_body { 
  vec2 my_uv2_1;
  vec2 dz_2;
  vec3 ret_3;
  vec2 tmpvar_4;
  tmpvar_4 = (texsize.zw * 4.0);
  vec3 tmpvar_5;
  tmpvar_5 = ((2.0 * (
    (texture (sampler_blur1, (uv + (vec2(1.0, 0.0) * tmpvar_4))).xyz * scale1)
   + bias1)) - (2.0 * (
    (texture (sampler_blur1, (uv - (vec2(1.0, 0.0) * tmpvar_4))).xyz * scale1)
   + bias1)));
  vec3 tmpvar_6;
  tmpvar_6 = ((2.0 * (
    (texture (sampler_blur1, (uv + (vec2(0.0, 1.0) * tmpvar_4))).xyz * scale1)
   + bias1)) - (2.0 * (
    (texture (sampler_blur1, (uv - (vec2(0.0, 1.0) * tmpvar_4))).xyz * scale1)
   + bias1)));
  vec2 tmpvar_7;
  tmpvar_7.x = tmpvar_5.x;
  tmpvar_7.y = tmpvar_6.x;
  vec2 tmpvar_8;
  tmpvar_8 = (tmpvar_7 * texsize.zw);
  ret_3.x = (texture (sampler_fw_main, (uv - tmpvar_8)).x - ((
    (texture (sampler_blur3, uv).xyz * scale3)
   + bias3).x - (
    (texture (sampler_blur1, (uv + tmpvar_8)).xyz * scale1)
   + bias1).x));
  vec2 tmpvar_9;
  tmpvar_9.x = tmpvar_5.y;
  tmpvar_9.y = tmpvar_6.y;
  dz_2 = (-(tmpvar_9) * texsize.zw);
  ret_3.y = ((texture (sampler_fw_main, (uv - dz_2)).y - 0.06) - ((
    ((texture (sampler_blur2, uv).xyz * scale2) + bias2)
  .y - 
    ((texture (sampler_blur1, (uv + dz_2)).xyz * scale1) + bias1)
  .y) * 1.3));
  vec2 tmpvar_10;
  tmpvar_10 = ((uv_orig - 0.5) * (1.8 - (
    (bass_att - treb_att)
   * 0.015)));
  vec2 tmpvar_11;
  tmpvar_11.x = ((tmpvar_10.x * tmpvar_10.x) - (tmpvar_10.y * tmpvar_10.y));
  tmpvar_11.y = ((2.0 * tmpvar_10.x) * tmpvar_10.y);
  my_uv2_1 = (tmpvar_11 + vec2(0.28, 0.4));
  vec2 tmpvar_12;
  tmpvar_12.x = ((2.0 * (
    (texture (sampler_blur1, (my_uv2_1 + (vec2(1.0, 0.0) * tmpvar_4))).xyz * scale1)
   + bias1)) - (2.0 * (
    (texture (sampler_blur1, (my_uv2_1 - (vec2(1.0, 0.0) * tmpvar_4))).xyz * scale1)
   + bias1))).z;
  tmpvar_12.y = ((2.0 * (
    (texture (sampler_blur1, (my_uv2_1 + (vec2(0.0, 1.0) * tmpvar_4))).xyz * scale1)
   + bias1)) - (2.0 * (
    (texture (sampler_blur1, (my_uv2_1 - (vec2(0.0, 1.0) * tmpvar_4))).xyz * scale1)
   + bias1))).z;
  dz_2 = (tmpvar_12 * texsize.zw);
  ret_3.z = (texture (sampler_main, clamp ((my_uv2_1 + dz_2), 0.0, 1.0)).z - 0.014);
  vec4 tmpvar_13;
  tmpvar_13.w = 1.0;
  tmpvar_13.xyz = ret_3;
  ret = tmpvar_13.xyz;
 }`,comp:` shader_body { 
  vec3 dy_1;
  vec3 dx_2;
  vec2 mirror_uv_3;
  vec3 ret_4;
  vec2 tmpvar_5;
  tmpvar_5 = ((uv - 0.5) * aspect.xy);
  vec2 tmpvar_6;
  tmpvar_6.x = ((q4 * tmpvar_5.x) - (q3 * tmpvar_5.y));
  tmpvar_6.y = ((q3 * tmpvar_5.x) + (q4 * tmpvar_5.y));
  vec2 tmpvar_7;
  tmpvar_7 = (0.5 - (tmpvar_6 * 2.0));
  vec2 numerator_8;
  numerator_8 = (tmpvar_7 - vec2(0.0, 0.5));
  vec2 denominator_9;
  denominator_9 = (tmpvar_7 - vec2(1.0, 0.5));
  vec2 tmpvar_10;
  tmpvar_10.x = ((numerator_8.x * denominator_9.x) + (numerator_8.y * denominator_9.y));
  tmpvar_10.y = ((numerator_8.y * denominator_9.x) - (numerator_8.x * denominator_9.y));
  vec2 tmpvar_11;
  tmpvar_11 = (((tmpvar_10 / 
    ((denominator_9.x * denominator_9.x) + (denominator_9.y * denominator_9.y))
  ) + 0.5) - vec2(0.5, 0.5));
  float tmpvar_12;
  tmpvar_12 = sqrt(dot (tmpvar_11, tmpvar_11));
  float tmpvar_13;
  float tmpvar_14;
  tmpvar_14 = (min (abs(
    (tmpvar_11.x / tmpvar_11.y)
  ), 1.0) / max (abs(
    (tmpvar_11.x / tmpvar_11.y)
  ), 1.0));
  float tmpvar_15;
  tmpvar_15 = (tmpvar_14 * tmpvar_14);
  tmpvar_15 = (((
    ((((
      ((((-0.01213232 * tmpvar_15) + 0.05368138) * tmpvar_15) - 0.1173503)
     * tmpvar_15) + 0.1938925) * tmpvar_15) - 0.3326756)
   * tmpvar_15) + 0.9999793) * tmpvar_14);
  tmpvar_15 = (tmpvar_15 + (float(
    (abs((tmpvar_11.x / tmpvar_11.y)) > 1.0)
  ) * (
    (tmpvar_15 * -2.0)
   + 1.570796)));
  tmpvar_13 = (tmpvar_15 * sign((tmpvar_11.x / tmpvar_11.y)));
  if ((abs(tmpvar_11.y) > (1e-08 * abs(tmpvar_11.x)))) {
    if ((tmpvar_11.y < 0.0)) {
      if ((tmpvar_11.x >= 0.0)) {
        tmpvar_13 += 3.141593;
      } else {
        tmpvar_13 = (tmpvar_13 - 3.141593);
      };
    };
  } else {
    tmpvar_13 = (sign(tmpvar_11.x) * 1.570796);
  };
  vec2 tmpvar_16;
  tmpvar_16.x = (tmpvar_13 * 0.1591549);
  tmpvar_16.y = tmpvar_12;
  vec2 tmpvar_17;
  tmpvar_17.x = ((tmpvar_16.x * 2.0) + q11);
  tmpvar_17.y = ((0.3 * log(tmpvar_12)) + q12);
  vec2 tmpvar_18;
  tmpvar_18 = (0.5 + (0.5 - abs(
    ((fract((tmpvar_17 * 0.5)) * 2.0) - 1.0)
  )));
  vec2 tmpvar_19;
  tmpvar_19 = (texsize.zw * 3.0);
  vec3 tmpvar_20;
  tmpvar_20 = ((2.0 * (
    (texture (sampler_blur1, (tmpvar_18 + (vec2(1.0, 0.0) * tmpvar_19))).xyz * scale1)
   + bias1)) - (2.0 * (
    (texture (sampler_blur1, (tmpvar_18 - (vec2(1.0, 0.0) * tmpvar_19))).xyz * scale1)
   + bias1)));
  vec3 tmpvar_21;
  tmpvar_21 = ((2.0 * (
    (texture (sampler_blur1, (tmpvar_18 + (vec2(0.0, 1.0) * tmpvar_19))).xyz * scale1)
   + bias1)) - (2.0 * (
    (texture (sampler_blur1, (tmpvar_18 - (vec2(0.0, 1.0) * tmpvar_19))).xyz * scale1)
   + bias1)));
  vec2 tmpvar_22;
  tmpvar_22.x = tmpvar_20.x;
  tmpvar_22.y = tmpvar_21.x;
  mirror_uv_3 = (tmpvar_18 + ((tmpvar_22 * texsize.zw) * 4.0));
  ret_4 = ((mix (ret_4, vec3(1.0, 1.0, 1.0), 
    ((((texture (sampler_blur1, mirror_uv_3).xyz * scale1) + bias1).x * (1.0 - (
      (texture (sampler_blur2, mirror_uv_3).xyz * scale2)
     + bias2).x)) * (pow (hue_shader, vec3(4.0, 4.0, 4.0)) * 1.4))
  ) * texture (sampler_main, mirror_uv_3).xxx) + ((
    (1.0 - texture (sampler_main, mirror_uv_3).x)
   * 
    ((texture (sampler_blur1, mirror_uv_3).xyz * scale1) + bias1)
  .x) * vec3(3.0, 3.0, 3.0)));
  vec2 tmpvar_23;
  tmpvar_23.x = tmpvar_20.x;
  tmpvar_23.y = tmpvar_21.x;
  mirror_uv_3 = (mirror_uv_3 - ((tmpvar_23 * texsize.zw) * 24.0));
  dx_2 = ((2.0 * (
    (texture (sampler_blur1, (mirror_uv_3 + (vec2(1.0, 0.0) * tmpvar_19))).xyz * scale1)
   + bias1)) - (2.0 * (
    (texture (sampler_blur1, (mirror_uv_3 - (vec2(1.0, 0.0) * tmpvar_19))).xyz * scale1)
   + bias1)));
  dy_1 = ((2.0 * (
    (texture (sampler_blur1, (mirror_uv_3 + (vec2(0.0, 1.0) * tmpvar_19))).xyz * scale1)
   + bias1)) - (2.0 * (
    (texture (sampler_blur1, (mirror_uv_3 - (vec2(0.0, 1.0) * tmpvar_19))).xyz * scale1)
   + bias1)));
  vec2 tmpvar_24;
  tmpvar_24.x = -(dx_2.y);
  tmpvar_24.y = dy_1.y;
  vec2 tmpvar_25;
  tmpvar_25 = (tmpvar_24 * 0.25);
  vec3 tmpvar_26;
  tmpvar_26 = mix (ret_4, vec3(1.0, 1.0, 1.0), (mix (vec3(1.0, 0.7, 0.2), vec3(0.15, 0.0, 0.5), vec3(
    ((((
      ((mirror_uv_3.x * 0.8) - mirror_uv_3.y)
     + 0.75) + tmpvar_25.x) + tmpvar_25.y) - 0.1)
  )) * texture (sampler_main, mirror_uv_3).y));
  vec2 tmpvar_27;
  vec2 tmpvar_28;
  tmpvar_28 = ((0.5 + (
    (uv - 0.5)
   * aspect.wz)) - vec2(0.5, 0.5));
  vec2 tmpvar_29;
  tmpvar_29.x = ((q4 * tmpvar_28.x) - (q3 * tmpvar_28.y));
  tmpvar_29.y = ((q3 * tmpvar_28.x) + (q4 * tmpvar_28.y));
  tmpvar_27 = (vec2(0.5, 0.5) + tmpvar_29);
  mirror_uv_3 = tmpvar_27.yx;
  vec2 tmpvar_30;
  tmpvar_30 = (vec2(1.0, 0.0) * texsize.zw);
  dx_2 = ((2.0 * texture (sampler_main, (tmpvar_27.yx + tmpvar_30)).xyz) - (2.0 * texture (sampler_main, (tmpvar_27.yx - tmpvar_30)).xyz));
  vec2 tmpvar_31;
  tmpvar_31 = (vec2(0.0, 1.0) * texsize.zw);
  dy_1 = ((2.0 * texture (sampler_main, (tmpvar_27.yx + tmpvar_31)).xyz) - (2.0 * texture (sampler_main, (tmpvar_27.yx - tmpvar_31)).xyz));
  vec2 tmpvar_32;
  tmpvar_32.x = dx_2.z;
  tmpvar_32.y = dy_1.z;
  vec3 tmpvar_33;
  tmpvar_33 = mix (tmpvar_26, vec3(0.9, 0.9, 1.0), vec3((1.0 - texture (sampler_main, (tmpvar_27.yx - tmpvar_32)).z)));
  ret_4 = tmpvar_33;
  vec4 tmpvar_34;
  tmpvar_34.w = 1.0;
  tmpvar_34.xyz = tmpvar_33;
  ret = tmpvar_34.xyz;
 }`}},function(o,l){o.exports={baseVals:{rating:5,gammaadj:1,decay:.995,echo_zoom:1.007,echo_orient:3,additivewave:1,modwavealphabyvolume:1,wave_brighten:0,wrap:0,wave_a:1.413,wave_scale:.418,wave_smoothing:0,wave_mystery:-.66,modwavealphastart:2,modwavealphaend:2,warpanimspeed:.626,warpscale:8.642,zoomexp:7.10084,zoom:.99951,warp:.09014,wave_r:0,wave_g:0,wave_x:.24,wave_y:.44,ob_size:0,ob_a:1,ib_size:.26,mv_x:64,mv_y:48,mv_l:0,mv_a:0},shapes:[{baseVals:{enabled:1,sides:48,additive:1,rad:.0277,ang:6.03186,tex_ang:6.03186,tex_zoom:.6839,r:0,g:1,a2:1,border_r:0,border_g:0,border_b:0,border_a:0},init_eqs_str:"a.q3=0;a.q4=0;a.q5=0;a.q2=0;a.q1=0;",frame_eqs_str:"a.x=a.q3;a.y=a.q4;a.rad=a.q5;a.x=.5+div(a.x-.5,a.q2);a.y=.5+div(a.y-.5,a.q1);"},{baseVals:{enabled:1,sides:48,additive:1,rad:.0277,ang:6.03186,tex_ang:6.03186,tex_zoom:.6839,r:0,b:1,g2:0,b2:1,a2:1,border_r:0,border_g:0,border_b:0,border_a:0},init_eqs_str:"a.q6=0;a.q7=0;a.q8=0;a.q2=0;a.q1=0;",frame_eqs_str:"a.x=a.q6;a.y=a.q7;a.rad=a.q8;a.x=.5+div(a.x-.5,a.q2);a.y=.5+div(a.y-.5,a.q1);"},{baseVals:{enabled:0}},{baseVals:{enabled:0}}],waves:[{baseVals:{enabled:1,thick:1,additive:1,scaling:2.0231,smoothing:0,g:0,b:0},init_eqs_str:"a.d=0;a.tt2=0;a.res=0;a.tt1=0;a.diff=0;a.tt3=0;a.beat=0;a.vol=0;a.m=0;a.monitor=0;a.t2=0;a.t3=0;a.t4=0;a.cl=0;",frame_eqs_str:"a.vol=8*a.bass+5*a.mid+3*a.treb;a.m=.97*a.m+.08*a.vol;a.monitor=a.vol;a.beat=above(a.vol,a.res)*above(a.vol,a.m)*above(a.vol,16);a.diff=(1-a.beat)*a.diff+a.beat*(a.vol-a.res);a.res=a.beat*(a.vol+.04*a.m)+(1-a.beat)*(a.res-div(60*(.1+.02*a.diff),a.fps));a.res=Math.max(0,a.res);a.a=a.beat;",point_eqs_str:"a.tt3=.6*a.tt3+1*a.value1;a.tt2=.7*a.tt2+.2*a.tt3;a.tt1=.8*a.tt1+.1*a.tt2;a.d=.9*a.d+.2*a.tt1;a.y=.5+a.d*a.sample*(1-a.sample)*2;a.x=-.05+1.1*a.sample;"},{baseVals:{enabled:0}},{baseVals:{enabled:0}},{baseVals:{enabled:0}}],init_eqs_str:`a.y3=0;a.y1=0;a.xx=0;a.q12=0;a.w2=0;a.ref_ang=0;a.q18=0;a.x1=0;a.vx3=0;a.q13=0;a.q15=0;a.q6=0;a.q1=0;a.q5=0;a.q9=0;a.d1=0;a.si1=0;a.vx1=0;a.vx4=0;a.x3=0;a.d2=0;a.q11=0;a.q10=0;a.q4=0;a.vy4=0;a.dir=0;a.bounce=0;a.q16=0;a.x4=0;a.w1=0;a.r=0;a.x2=0;a.q17=0;a.vy2=0;a.y2=0;a.vy1=0;a.q2=0;a.m1=0;a.q14=0;a.si2=0;a.v1=0;a.vx2=0;a.q3=0;a.yy=0;a.y4=0;a.q7=0;a.vy3=0;a.v2=0;a.b1=0;a.q8=0;a.x1=.5;a.x2=.51;a.y2=.9;a.y1=.7;a.x3=.8;a.y3=.5;a.x4=.2;a.y4=.5;a.ax1=0;a.ay1=0;a.ax2=0;a.ay2=0;a.ax3=
0;a.ay3=0;a.vx1=0;a.vx2=0;`,frame_eqs_str:`a.zoom=1.002;a.warp=.2;a.wave_a=0;a.r=.04+.008*Math.max(a.bass_att,a.treb_att);a.bounce=below(a.y1,a.r);a.y1+=a.vy1;a.vy1=.00001<Math.abs(a.bounce)?.94*Math.abs(a.vy1)+.1*(a.r-a.y1):a.vy1-div(.018,a.fps);a.bounce=below(a.x1,a.r);a.x1+=a.vx1;a.vx1=.00001<Math.abs(a.bounce)?.94*Math.abs(a.vx1)+.1*(a.r-a.x1):a.vx1;a.bounce=above(a.x1,1-a.r);a.vx1=.00001<Math.abs(a.bounce)?.94*-Math.abs(a.vx1)+.04*(1-a.r-a.x1):a.vx1;a.bounce=below(a.y2,a.r);a.y2+=a.vy2;a.vy2=.00001<Math.abs(a.bounce)?
.94*Math.abs(a.vy2)+.1*(a.r-a.y2):a.vy2-div(.018,a.fps);a.bounce=below(a.x2,a.r);a.x2+=a.vx2;a.vx2=.00001<Math.abs(a.bounce)?.94*Math.abs(a.vx2)+.1*(a.r-a.x2):a.vx2;a.bounce=above(a.x2,1-a.r);a.vx2=.00001<Math.abs(a.bounce)?.94*-Math.abs(a.vx2)+.1*(1-a.r-a.x2):a.vx2;a.bounce=below(a.y3,a.r);a.y3+=a.vy3;a.vy3=.00001<Math.abs(a.bounce)?.94*Math.abs(a.vy3)+.1*(a.r-a.y3):a.vy3-div(.018,a.fps);a.bounce=below(a.x3,a.r);a.x3+=a.vx3;a.vx3=.00001<Math.abs(a.bounce)?.94*Math.abs(a.vx3)+.1*(a.r-a.x3):a.vx3;
a.bounce=above(a.x3,1-a.r);a.vx3=.00001<Math.abs(a.bounce)?.94*-Math.abs(a.vx3)+.1*(1-a.r-a.x3):a.vx3;a.bounce=below(a.y4,a.r);a.y4+=a.vy4;a.vy4=.00001<Math.abs(a.bounce)?.94*Math.abs(a.vy4)+.1*(a.r-a.y4):a.vy4-div(.018,a.fps);a.bounce=below(a.x4,a.r);a.x4+=a.vx4;a.vx4=.00001<Math.abs(a.bounce)?.94*Math.abs(a.vx4)+.1*(a.r-a.x4):a.vx4;a.bounce=above(a.x4,1-a.r);a.vx4=.00001<Math.abs(a.bounce)?.94*-Math.abs(a.vx4)+.1*(1-a.r-a.x4):a.vx4;a.bounce=below(sqrt(sqr(a.x1+a.vx1-a.x2-a.vx2)+sqr(a.y1+a.vy1-a.y2-
a.vy2)),2*a.r);a.ref_ang=Math.atan2(a.x2-a.x1,a.y2-a.y1)+Math.asin(1);a.v1=sqrt(a.vx1*a.vx1+a.vy1*a.vy1);a.v2=sqrt(a.vx2*a.vx2+a.vy2*a.vy2);a.w1=Math.atan2(a.vx1,a.vy1);a.w2=Math.atan2(a.vx2,a.vy2);a.vx1=.00001<Math.abs(a.bounce)?Math.sin(a.ref_ang)*a.v1*Math.cos(a.w1-a.ref_ang)+Math.sin(a.ref_ang+Math.asin(1))*a.v2*Math.cos(a.w2-a.ref_ang-Math.asin(1)):a.vx1;a.vy1=.00001<Math.abs(a.bounce)?Math.cos(a.ref_ang)*a.v1*Math.cos(a.w1-a.ref_ang)+Math.cos(a.ref_ang+Math.asin(1))*a.v2*Math.cos(a.w2-a.ref_ang-
Math.asin(1)):a.vy1;a.vx2=.00001<Math.abs(a.bounce)?Math.sin(a.ref_ang)*a.v2*Math.cos(a.w2-a.ref_ang)+Math.sin(a.ref_ang+Math.asin(1))*a.v1*Math.cos(a.w1-a.ref_ang-Math.asin(1)):a.vx2;a.vy2=.00001<Math.abs(a.bounce)?Math.cos(a.ref_ang)*a.v2*Math.cos(a.w2-a.ref_ang)+Math.cos(a.ref_ang+Math.asin(1))*a.v1*Math.cos(a.w1-a.ref_ang-Math.asin(1)):a.vy2;a.bounce=below(sqrt(sqr(a.x1+a.vx1-a.x3-a.vx3)+sqr(a.y1+a.vy1-a.y3-a.vy3)),2*a.r);a.ref_ang=Math.atan2(a.x3-a.x1,a.y3-a.y1)+Math.asin(1);a.v1=sqrt(a.vx1*
a.vx1+a.vy1*a.vy1);a.v2=sqrt(a.vx3*a.vx3+a.vy3*a.vy3);a.w1=Math.atan2(a.vx1,a.vy1);a.w2=Math.atan2(a.vx3,a.vy3);a.vx1=.00001<Math.abs(a.bounce)?Math.sin(a.ref_ang)*a.v1*Math.cos(a.w1-a.ref_ang)+Math.sin(a.ref_ang+Math.asin(1))*a.v2*Math.cos(a.w2-a.ref_ang-Math.asin(1)):a.vx1;a.vy1=.00001<Math.abs(a.bounce)?Math.cos(a.ref_ang)*a.v1*Math.cos(a.w1-a.ref_ang)+Math.cos(a.ref_ang+Math.asin(1))*a.v2*Math.cos(a.w2-a.ref_ang-Math.asin(1)):a.vy1;a.vx3=.00001<Math.abs(a.bounce)?Math.sin(a.ref_ang)*a.v2*Math.cos(a.w2-
a.ref_ang)+Math.sin(a.ref_ang+Math.asin(1))*a.v1*Math.cos(a.w1-a.ref_ang-Math.asin(1)):a.vx3;a.vy3=.00001<Math.abs(a.bounce)?Math.cos(a.ref_ang)*a.v2*Math.cos(a.w2-a.ref_ang)+Math.cos(a.ref_ang+Math.asin(1))*a.v1*Math.cos(a.w1-a.ref_ang-Math.asin(1)):a.vy3;a.bounce=below(sqrt(sqr(a.x2+a.vx2-a.x3-a.vx3)+sqr(a.y2+a.vy2-a.y3-a.vy3)),2*a.r);a.ref_ang=Math.atan2(a.x3-a.x2,a.y3-a.y2)+Math.asin(1);a.v1=sqrt(a.vx2*a.vx2+a.vy2*a.vy2);a.v2=sqrt(a.vx3*a.vx3+a.vy3*a.vy3);a.w1=Math.atan2(a.vx2,a.vy2);a.w2=Math.atan2(a.vx3,
a.vy3);a.vx2=.00001<Math.abs(a.bounce)?Math.sin(a.ref_ang)*a.v1*Math.cos(a.w1-a.ref_ang)+Math.sin(a.ref_ang+Math.asin(1))*a.v2*Math.cos(a.w2-a.ref_ang-Math.asin(1)):a.vx2;a.vy2=.00001<Math.abs(a.bounce)?Math.cos(a.ref_ang)*a.v1*Math.cos(a.w1-a.ref_ang)+Math.cos(a.ref_ang+Math.asin(1))*a.v2*Math.cos(a.w2-a.ref_ang-Math.asin(1)):a.vy2;a.vx3=.00001<Math.abs(a.bounce)?Math.sin(a.ref_ang)*a.v2*Math.cos(a.w2-a.ref_ang)+Math.sin(a.ref_ang+Math.asin(1))*a.v1*Math.cos(a.w1-a.ref_ang-Math.asin(1)):a.vx3;a.vy3=
.00001<Math.abs(a.bounce)?Math.cos(a.ref_ang)*a.v2*Math.cos(a.w2-a.ref_ang)+Math.cos(a.ref_ang+Math.asin(1))*a.v1*Math.cos(a.w1-a.ref_ang-Math.asin(1)):a.vy3;a.bounce=below(sqrt(sqr(a.x1+a.vx1-a.x4-a.vx4)+sqr(a.y1+a.vy1-a.y4-a.vy4)),2*a.r);a.ref_ang=Math.atan2(a.x4-a.x1,a.y4-a.y1)+Math.asin(1);a.v1=sqrt(a.vx1*a.vx1+a.vy1*a.vy1);a.v2=sqrt(a.vx4*a.vx4+a.vy4*a.vy4);a.w1=Math.atan2(a.vx1,a.vy1);a.w2=Math.atan2(a.vx4,a.vy4);a.vx1=.00001<Math.abs(a.bounce)?Math.sin(a.ref_ang)*a.v1*Math.cos(a.w1-a.ref_ang)+
Math.sin(a.ref_ang+Math.asin(1))*a.v2*Math.cos(a.w2-a.ref_ang-Math.asin(1)):a.vx1;a.vy1=.00001<Math.abs(a.bounce)?Math.cos(a.ref_ang)*a.v1*Math.cos(a.w1-a.ref_ang)+Math.cos(a.ref_ang+Math.asin(1))*a.v2*Math.cos(a.w2-a.ref_ang-Math.asin(1)):a.vy1;a.vx4=.00001<Math.abs(a.bounce)?Math.sin(a.ref_ang)*a.v2*Math.cos(a.w2-a.ref_ang)+Math.sin(a.ref_ang+Math.asin(1))*a.v1*Math.cos(a.w1-a.ref_ang-Math.asin(1)):a.vx4;a.vy4=.00001<Math.abs(a.bounce)?Math.cos(a.ref_ang)*a.v2*Math.cos(a.w2-a.ref_ang)+Math.cos(a.ref_ang+
Math.asin(1))*a.v1*Math.cos(a.w1-a.ref_ang-Math.asin(1)):a.vy4;a.bounce=below(sqrt(sqr(a.x2+a.vx2-a.x4-a.vx4)+sqr(a.y2+a.vy2-a.y4-a.vy4)),2*a.r);a.ref_ang=Math.atan2(a.x4-a.x2,a.y4-a.y2)+Math.asin(1);a.v1=sqrt(a.vx2*a.vx2+a.vy2*a.vy2);a.v2=sqrt(a.vx4*a.vx4+a.vy4*a.vy4);a.w1=Math.atan2(a.vx2,a.vy2);a.w2=Math.atan2(a.vx4,a.vy4);a.vx2=.00001<Math.abs(a.bounce)?Math.sin(a.ref_ang)*a.v1*Math.cos(a.w1-a.ref_ang)+Math.sin(a.ref_ang+Math.asin(1))*a.v2*Math.cos(a.w2-a.ref_ang-Math.asin(1)):a.vx2;a.vy2=.00001<
Math.abs(a.bounce)?Math.cos(a.ref_ang)*a.v1*Math.cos(a.w1-a.ref_ang)+Math.cos(a.ref_ang+Math.asin(1))*a.v2*Math.cos(a.w2-a.ref_ang-Math.asin(1)):a.vy2;a.vx4=.00001<Math.abs(a.bounce)?Math.sin(a.ref_ang)*a.v2*Math.cos(a.w2-a.ref_ang)+Math.sin(a.ref_ang+Math.asin(1))*a.v1*Math.cos(a.w1-a.ref_ang-Math.asin(1)):a.vx4;a.vy4=.00001<Math.abs(a.bounce)?Math.cos(a.ref_ang)*a.v2*Math.cos(a.w2-a.ref_ang)+Math.cos(a.ref_ang+Math.asin(1))*a.v1*Math.cos(a.w1-a.ref_ang-Math.asin(1)):a.vy4;a.bounce=below(sqrt(sqr(a.x3+
a.vx3-a.x4-a.vx4)+sqr(a.y3+a.vy3-a.y4-a.vy4)),2*a.r);a.ref_ang=Math.atan2(a.x4-a.x3,a.y4-a.y3)+Math.asin(1);a.v1=sqrt(a.vx3*a.vx3+a.vy3*a.vy3);a.v2=sqrt(a.vx4*a.vx4+a.vy4*a.vy4);a.w1=Math.atan2(a.vx3,a.vy3);a.w2=Math.atan2(a.vx4,a.vy4);a.vx3=.00001<Math.abs(a.bounce)?Math.sin(a.ref_ang)*a.v1*Math.cos(a.w1-a.ref_ang)+Math.sin(a.ref_ang+Math.asin(1))*a.v2*Math.cos(a.w2-a.ref_ang-Math.asin(1)):a.vx3;a.vy3=.00001<Math.abs(a.bounce)?Math.cos(a.ref_ang)*a.v1*Math.cos(a.w1-a.ref_ang)+Math.cos(a.ref_ang+
Math.asin(1))*a.v2*Math.cos(a.w2-a.ref_ang-Math.asin(1)):a.vy3;a.vx4=.00001<Math.abs(a.bounce)?Math.sin(a.ref_ang)*a.v2*Math.cos(a.w2-a.ref_ang)+Math.sin(a.ref_ang+Math.asin(1))*a.v1*Math.cos(a.w1-a.ref_ang-Math.asin(1)):a.vx4;a.vy4=.00001<Math.abs(a.bounce)?Math.cos(a.ref_ang)*a.v2*Math.cos(a.w2-a.ref_ang)+Math.cos(a.ref_ang+Math.asin(1))*a.v1*Math.cos(a.w1-a.ref_ang-Math.asin(1)):a.vy4;a.q1=a.aspectx;a.q2=a.aspecty;a.q3=a.x1;a.q4=a.y1;a.q5=2*a.r;a.q6=a.x2;a.q7=a.y2;a.q8=2*a.r;a.q9=a.x3;a.q10=a.y3;
a.q11=2*a.r;a.q12=a.x4;a.q13=a.y4;a.q14=2*a.r;a.q15=Math.atan2(a.vx4,a.vy4);a.q16=sqrt(a.vx4*a.vx4+a.vy4*a.vy4);a.q17=Math.atan2(a.vx3,a.vy3);a.q18=sqrt(a.vx3*a.vx3+a.vy3*a.vy3);`,pixel_eqs_str:`a.x=.5+(a.x-.5)*a.q2;a.y=.5+(a.y-.5)*a.q1;a.dir=-a.q15+Math.asin(1);a.b1=.075;a.m1=25*a.q16;a.xx=a.q12;a.yy=1-a.q13;a.x1=a.xx-Math.sin(a.dir)*a.b1;a.y1=a.yy-Math.cos(a.dir)*a.b1;a.x2=a.xx+Math.sin(a.dir)*a.b1;a.y2=a.yy+Math.cos(a.dir)*a.b1;a.d1=sqrt((a.x1-a.x)*(a.x1-a.x)+(a.y1-a.y)*(a.y1-a.y))-2*a.b1;a.d2=sqrt((a.x2-a.x)*(a.x2-a.x)+(a.y2-a.y)*(a.y2-a.y))-2*a.b1;a.si1=sigmoid(-a.d1,1E3);a.si2=sigmoid(-a.d2,1E3);a.dx=3*(a.si1*Math.sin(a.y1-a.y)*a.m1*a.d1-a.si2*Math.sin(a.y2-a.y)*
a.m1*a.d2)*a.q1;a.dy=3*(-a.si1*Math.sin(a.x1-a.x)*a.m1*a.d1+a.si2*Math.sin(a.x2-a.x)*a.m1*a.d2)*a.q2;a.dir=-a.q17+Math.asin(1);a.m1=25*a.q18;a.xx=a.q9;a.yy=1-a.q10;a.x1=a.xx-Math.sin(a.dir)*a.b1;a.y1=a.yy-Math.cos(a.dir)*a.b1;a.x2=a.xx+Math.sin(a.dir)*a.b1;a.y2=a.yy+Math.cos(a.dir)*a.b1;a.d1=sqrt((a.x1-a.x)*(a.x1-a.x)+(a.y1-a.y)*(a.y1-a.y))-2*a.b1;a.d2=sqrt((a.x2-a.x)*(a.x2-a.x)+(a.y2-a.y)*(a.y2-a.y))-2*a.b1;a.si1=sigmoid(-a.d1,1E3);a.si2=sigmoid(-a.d2,1E3);a.dx+=3*(a.si1*Math.sin(a.y1-a.y)*a.m1*
a.d1-a.si2*Math.sin(a.y2-a.y)*a.m1*a.d2)*a.q1;a.dy+=3*(-a.si1*Math.sin(a.x1-a.x)*a.m1*a.d1+a.si2*Math.sin(a.x2-a.x)*a.m1*a.d2)*a.q2;`,warp:` shader_body { 
  vec3 ret_1;
  vec2 tmpvar_2;
  tmpvar_2 = (texsize.zw * 8.0);
  vec3 tmpvar_3;
  tmpvar_3 = (((texture (sampler_blur1, 
    (uv + (vec2(1.0, 0.0) * tmpvar_2))
  ).xyz * scale1) + bias1) - ((texture (sampler_blur1, 
    (uv - (vec2(1.0, 0.0) * tmpvar_2))
  ).xyz * scale1) + bias1));
  vec3 tmpvar_4;
  tmpvar_4 = (((texture (sampler_blur1, 
    (uv + (vec2(0.0, 1.0) * tmpvar_2))
  ).xyz * scale1) + bias1) - ((texture (sampler_blur1, 
    (uv - (vec2(0.0, 1.0) * tmpvar_2))
  ).xyz * scale1) + bias1));
  vec2 tmpvar_5;
  tmpvar_5.x = tmpvar_3.z;
  tmpvar_5.y = tmpvar_4.z;
  vec2 tmpvar_6;
  tmpvar_6 = (uv + ((tmpvar_5 * texsize.zw) * 4.0));
  ret_1.z = (((texture (sampler_main, tmpvar_6).z - 
    ((texture (sampler_main, tmpvar_6).z - ((texture (sampler_blur3, tmpvar_6).xyz * scale3) + bias3).z) * 0.02)
  ) - 0.008) + ((texture (sampler_noise_lq, 
    (((uv_orig * texsize.xy) * texsize_noise_lq.zw) + rand_frame.xy)
  ).xyz - 0.5) * 0.1)).x;
  vec2 tmpvar_7;
  tmpvar_7.x = tmpvar_3.x;
  tmpvar_7.y = tmpvar_4.x;
  vec2 tmpvar_8;
  tmpvar_8 = ((0.5 + (uv - 0.5)) - (tmpvar_7 * texsize.zw));
  ret_1.x = texture (sampler_main, tmpvar_8).x;
  ret_1.x = (ret_1.x + ((
    (ret_1.x - ((texture (sampler_blur3, tmpvar_8).xyz * scale3) + bias3))
  .x * 0.4) + 0.006));
  vec2 tmpvar_9;
  tmpvar_9.x = tmpvar_3.x;
  tmpvar_9.y = tmpvar_4.x;
  vec2 tmpvar_10;
  tmpvar_10.x = tmpvar_3.y;
  tmpvar_10.y = tmpvar_4.y;
  vec2 tmpvar_11;
  tmpvar_11.x = tmpvar_3.z;
  tmpvar_11.y = tmpvar_4.z;
  ret_1.y = texture (sampler_fc_main, (((uv - 
    ((tmpvar_9 * texsize.zw) * 8.0)
  ) + (
    (tmpvar_10 * texsize.zw)
   * 4.0)) + ((tmpvar_11 * texsize.zw) * 8.0))).y;
  ret_1.y = (ret_1.y * (1.0 + (ret_1.x * 0.1)));
  ret_1.y = (ret_1.y - (0.004 + (
    clamp (ret_1.z, 0.0, 1.0)
   * 0.04)));
  vec4 tmpvar_12;
  tmpvar_12.w = 1.0;
  tmpvar_12.xyz = ret_1;
  ret = tmpvar_12.xyz;
 }`,comp:` shader_body { 
  vec3 ret_1;
  vec2 tmpvar_2;
  tmpvar_2 = (texsize.zw * 4.0);
  vec3 tmpvar_3;
  tmpvar_3 = (((texture (sampler_blur1, 
    (uv + (vec2(1.0, 0.0) * tmpvar_2))
  ).xyz * scale1) + bias1) - ((texture (sampler_blur1, 
    (uv - (vec2(1.0, 0.0) * tmpvar_2))
  ).xyz * scale1) + bias1));
  vec3 tmpvar_4;
  tmpvar_4 = (((texture (sampler_blur1, 
    (uv + (vec2(0.0, 1.0) * tmpvar_2))
  ).xyz * scale1) + bias1) - ((texture (sampler_blur1, 
    (uv - (vec2(0.0, 1.0) * tmpvar_2))
  ).xyz * scale1) + bias1));
  vec2 tmpvar_5;
  tmpvar_5.x = tmpvar_3.z;
  tmpvar_5.y = tmpvar_4.z;
  vec2 tmpvar_6;
  tmpvar_6.x = tmpvar_3.y;
  tmpvar_6.y = tmpvar_4.y;
  vec2 tmpvar_7;
  tmpvar_7 = ((uv - (tmpvar_5 * 0.1)) + (tmpvar_6 * 0.06));
  vec4 tmpvar_8;
  tmpvar_8 = texture (sampler_main, uv);
  ret_1 = (((
    ((texture (sampler_blur2, tmpvar_7).xyz * scale2) + bias2)
  .x * 
    clamp ((1.0 - tmpvar_8.z), 0.0, 1.0)
  ) * pow (hue_shader.yxz, vec3(8.0, 8.0, 8.0))) * 3.0);
  ret_1 = (mix (ret_1, (
    pow (hue_shader.yzx, vec3(8.0, 8.0, 8.0))
   * 1.4), vec3((
    (texture (sampler_main, tmpvar_7).x * 0.8)
   + 
    ((texture (sampler_blur1, tmpvar_7).xyz * scale1) + bias1)
  .x))) * clamp ((1.0 - 
    (((texture (sampler_blur1, uv).xyz * scale1) + bias1).y * 4.0)
  ), 0.0, 1.0));
  vec2 tmpvar_9;
  tmpvar_9.x = tmpvar_3.y;
  tmpvar_9.y = tmpvar_4.y;
  vec3 tmpvar_10;
  vec3 tmpvar_11;
  tmpvar_11 = pow (hue_shader, vec3(8.0, 8.0, 8.0));
  tmpvar_10 = mix (mix (ret_1, vec3(1.0, 1.0, 1.0), (
    (tmpvar_11 * texture (sampler_main, clamp ((uv - (tmpvar_9 * 2.0)), 0.0, 1.0)).z)
   * 1.2)), (tmpvar_11.zxy * 1.8), tmpvar_8.yyy);
  ret_1 = tmpvar_10;
  vec4 tmpvar_12;
  tmpvar_12.w = 1.0;
  tmpvar_12.xyz = tmpvar_10;
  ret = tmpvar_12.xyz;
 }`}},function(o,l){o.exports={baseVals:{rating:5,gammaadj:1,decay:.5,echo_zoom:1.03,wave_brighten:0,wrap:0,wave_a:.001,wave_scale:.01,wave_smoothing:0,modwavealphastart:1,modwavealphaend:1,warpscale:.107,zoomexp:4.28632,fshader:1,warp:.01743,wave_r:0,wave_g:0,wave_b:0,ob_size:0,ob_g:1,ob_a:1,ib_size:0,ib_r:1,ib_g:1,ib_b:1,ib_a:1,mv_x:64,mv_y:48,mv_l:5,mv_a:0,b1ed:0},shapes:[{baseVals:{enabled:1,sides:100,textured:1,rad:.789,ang:.6283,tex_zoom:1.17257,r:0,g:1,border_a:0},init_eqs_str:"a.an=0;a.vx=0;a.vy=0;",frame_eqs_str:"a.rad=.65+.1*a.bass;a.an=.99*a.an+.1*(a.bass-a.treb);a.ang=.1*a.an+.6;"},{baseVals:{enabled:0}},{baseVals:{enabled:0}},{baseVals:{enabled:0}}],waves:[{baseVals:{enabled:1,samples:495,sep:4,spectrum:1,thick:1,additive:1,scaling:100,smoothing:1,r:0,g:.04,b:0,a:.99},init_eqs_str:"a.my_z=0;a.d=0;a.n=0;a.y3=0;a.z2=0;a.y1=0;a.w=0;a.t5=0;a.w2=0;a.t1=0;a.x1=0;a.q6=0;a.zoom=0;a.p=0;a.q1=0;a.q5=0;a.t8=0;a.z3=0;a.w3=0;a.t3=0;a.my_x=0;a.x3=0;a.t6=0;a.my_y=0;a.pi=0;a.q4=0;a.t7=0;a.rd=0;a.w1=0;a.x2=0;a.t2=0;a.l=0;a.y2=0;a.q2=0;a.z1=0;a.q3=0;a.t4=0;a.t2=0;a.t3=0;a.t4=0;a.ab=1;",frame_eqs_str:"a.t1=a.q1;a.t2=a.q2;a.t3=a.q3;a.t4=a.q4;a.t5=a.q5;a.t6=a.q6;a.t8=.07;a.t7=1;",point_eqs_str:`a.t7=-a.t7;a.pi=Math.asin(1);a.n=180;a.rd=.075;a.my_x=.5*Math.sin(a.sample*a.pi*4+(a.t7+1)*a.t8)+Math.cos(a.sample*a.pi*a.n)*a.rd*Math.sin(a.sample*a.pi*4+(a.t7+1)*a.t8);a.my_y=.5*Math.cos(a.sample*a.pi*4+(a.t7+1)*a.t8)+Math.cos(a.sample*a.pi*a.n)*a.rd*Math.cos(a.sample*a.pi*4+(a.t7+1)*a.t8);a.my_z=Math.sin(a.sample*a.pi*a.n)*a.rd;a.d=1.4;a.zoom=.65;a.w1=a.q2;a.w2=a.q3;a.w3=a.q4;a.x1=Math.cos(a.w1)*a.my_x+Math.sin(a.w1)*a.my_y;a.y1=-Math.sin(a.w1)*a.my_x+Math.cos(a.w1)*a.my_y;
a.z1=a.my_z;a.x2=Math.cos(a.w2)*a.x1+Math.sin(a.w2)*a.z1;a.z2=-Math.sin(a.w2)*a.x1+Math.cos(a.w2)*a.z1;a.y2=a.y1;a.y3=Math.cos(a.w3)*a.y2+Math.sin(a.w3)*a.z2;a.z3=-Math.sin(a.w3)*a.y2+Math.cos(a.w3)*a.z2;a.x3=a.x2;a.l=sqrt(a.x3*a.x3+a.y3*a.y3);a.w=Math.atan2(a.x3,a.y3);a.p=Math.tan(Math.asin(1)+Math.atan2(a.d+a.z3,a.l));a.d=sqrt(a.x3*a.x3+a.y3*a.y3+(a.z3+a.d)*(a.z3+a.d));a.my_x=a.zoom*Math.sin(a.w)*a.p;a.my_y=a.zoom*Math.cos(a.w)*a.p;a.x=.5+a.my_x;a.y=.5+a.my_y;a.b=-a.z3+.5;a.b=.5*Math.min(1,Math.max(0,
a.b));a.r=1-2*a.b;`},{baseVals:{enabled:0}},{baseVals:{enabled:0}},{baseVals:{enabled:0}}],init_eqs_str:"a.n=0;a.n2=0;a.j3=0;a.q1=0;a.q5=0;a.n1=0;a.q9=0;a.v=0;a.q10=0;a.q4=0;a.j2=0;a.k=0;a.j1=0;a.q2=0;a.q3=0;a.x1=0;a.y1=0;",frame_eqs_str:"a.q1=0;a.v=.4;a.j1=.95*a.j1+sqr(4*a.bass)*a.v;a.j2=.95*a.j2+sqr(4*a.mid)*a.v;a.j3=.95*a.j3+sqr(4*a.treb)*a.v;a.n+=.0052*a.j1;a.n1+=.0052*a.j2;a.n2+=.0052*a.j3;a.q2=.01*a.n;a.q3=.01*a.n1;a.q4=.01*a.n2;a.k=.99*a.k+sqr(2*a.mid_att);a.q5=0*a.k;a.zoom=1.0016;a.warp=0;a.rot=-0;a.q9=a.aspectx;a.q10=a.aspecty;",pixel_eqs_str:"",pixel_eqs:"",warp:` shader_body { 
  vec3 ret_1;
  vec2 tmpvar_2;
  tmpvar_2 = (texsize.zw * 4.0);
  vec2 tmpvar_3;
  tmpvar_3.x = (((texture (sampler_blur2, 
    (uv + (vec2(0.0, 1.0) * tmpvar_2))
  ).xyz * scale2) + bias2) - ((texture (sampler_blur2, 
    (uv - (vec2(0.0, 1.0) * tmpvar_2))
  ).xyz * scale2) + bias2)).z;
  tmpvar_3.y = -(((
    (texture (sampler_blur2, (uv + (vec2(1.0, 0.0) * tmpvar_2))).xyz * scale2)
   + bias2) - (
    (texture (sampler_blur2, (uv - (vec2(1.0, 0.0) * tmpvar_2))).xyz * scale2)
   + bias2)).z);
  vec2 tmpvar_4;
  tmpvar_4 = (uv + ((tmpvar_3 * texsize.zw) * 60.0));
  vec2 x_5;
  x_5 = (tmpvar_4 - uv);
  vec4 tmpvar_6;
  tmpvar_6 = texture (sampler_main, uv);
  vec4 tmpvar_7;
  tmpvar_7 = texture (sampler_blur1, uv);
  ret_1.z = (((texture (sampler_main, tmpvar_4).z + 
    (((tmpvar_6.z - (
      (tmpvar_7.xyz * scale1)
     + bias1).z) * 200.0) * sqrt(dot (x_5, x_5)))
  ) * 0.96) - 0.02);
  vec2 tmpvar_8;
  tmpvar_8.x = (((texture (sampler_blur1, 
    (uv + (vec2(1.0, 0.0) * tmpvar_2))
  ).xyz * scale1) + bias1) - ((texture (sampler_blur1, 
    (uv - (vec2(1.0, 0.0) * tmpvar_2))
  ).xyz * scale1) + bias1)).y;
  tmpvar_8.y = (((texture (sampler_blur1, 
    (uv + (vec2(0.0, 1.0) * tmpvar_2))
  ).xyz * scale1) + bias1) - ((texture (sampler_blur1, 
    (uv - (vec2(0.0, 1.0) * tmpvar_2))
  ).xyz * scale1) + bias1)).y;
  ret_1.y = ((texture (sampler_main, (uv_orig + 
    ((tmpvar_8 * texsize.zw) * 6.0)
  )).y + (
    (tmpvar_6.y - ((tmpvar_7.xyz * scale1) + bias1).y)
   * 0.1)) - 0.016);
  vec4 tmpvar_9;
  tmpvar_9.w = 1.0;
  tmpvar_9.xyz = ret_1;
  ret = tmpvar_9.xyz;
 }`,comp:` shader_body { 
  vec3 ret_1;
  vec2 tmpvar_2;
  tmpvar_2 = (texsize.zw * 8.0);
  vec3 tmpvar_3;
  tmpvar_3 = (((texture (sampler_blur1, 
    (uv + (vec2(1.0, 0.0) * tmpvar_2))
  ).xyz * scale1) + bias1) - ((texture (sampler_blur1, 
    (uv - (vec2(1.0, 0.0) * tmpvar_2))
  ).xyz * scale1) + bias1));
  vec3 tmpvar_4;
  tmpvar_4 = (((texture (sampler_blur1, 
    (uv + (vec2(0.0, 1.0) * tmpvar_2))
  ).xyz * scale1) + bias1) - ((texture (sampler_blur1, 
    (uv - (vec2(0.0, 1.0) * tmpvar_2))
  ).xyz * scale1) + bias1));
  vec2 tmpvar_5;
  tmpvar_5.x = tmpvar_3.z;
  tmpvar_5.y = tmpvar_4.z;
  vec2 tmpvar_6;
  tmpvar_6.x = tmpvar_3.y;
  tmpvar_6.y = tmpvar_4.y;
  ret_1 = (mix (vec3(0.2, 0.0, 0.1), vec3(0.8, 0.6, 0.0), texture (sampler_main, (uv - 
    (tmpvar_5 * 0.2)
  )).yyy) * ((
    (-(tmpvar_3.y) + tmpvar_4.y)
   + 1.0) + (
    (-(tmpvar_3.z) + tmpvar_4.z)
   * 2.0)));
  vec3 tmpvar_7;
  tmpvar_7 = mix (mix (ret_1, vec3(0.2, 0.0, 0.4), vec3((
    ((texture (sampler_blur1, (uv - (tmpvar_6 * 0.04))).xyz * scale1) + bias1)
  .x * 1.4))), vec3(1.0, 0.9, 0.8), texture (sampler_main, uv).zzz);
  ret_1 = tmpvar_7;
  vec4 tmpvar_8;
  tmpvar_8.w = 1.0;
  tmpvar_8.xyz = tmpvar_7;
  ret = tmpvar_8.xyz;
 }`}},function(o,l){o.exports={baseVals:{rating:1,gammaadj:1,decay:1,echo_zoom:1,echo_alpha:.5,additivewave:1,wave_thick:1,modwavealphabyvolume:1,wave_brighten:0,wave_a:2.789,wave_scale:.292,wave_smoothing:0,wave_mystery:.12,modwavealphastart:1,modwavealphaend:1,warpanimspeed:.01,warpscale:100,zoomexp:.92178,zoom:.9901,warp:.01,wave_g:0,ob_size:0,ob_r:.2,ob_a:.1,ib_size:0,ib_r:0,ib_g:0,ib_b:0,ib_a:1,mv_x:64,mv_y:48,mv_l:0,mv_b:0,mv_a:0,b1ed:0},shapes:[{baseVals:{enabled:0}},{baseVals:{enabled:1,sides:100,additive:1,thickoutline:1,x:.43,y:.42,rad:.15799,ang:.1885,tex_zoom:.87865,r:0,g:1,g2:0,border_a:0},init_eqs_str:"a.q4=0;a.q8=0;",frame_eqs_str:"a.x=a.q4;a.y=a.q8;"},{baseVals:{enabled:0}},{baseVals:{enabled:0}}],waves:[{baseVals:{enabled:0}},{baseVals:{enabled:0}},{baseVals:{enabled:0}},{baseVals:{enabled:0}}],init_eqs_str:"a.y3=0;a.y1=0;a.xx=0;a.si3=0;a.t1=0;a.x1=0;a.vx3=0;a.q6=0;a.dt=0;a.q1=0;a.q5=0;a.d1=0;a.si1=0;a.vx4=0;a.grav=0;a.x3=0;a.d2=0;a.xx2=0;a.q4=0;a.yy1=0;a.vy4=0;a.dir=0;a.bounce=0;a.x4=0;a.x2=0;a.vy2=0;a.y2=0;a.q2=0;a.m1=0;a.spring=0;a.si2=0;a.vx2=0;a.q3=0;a.resist=0;a.yy=0;a.y4=0;a.q7=0;a.vy3=0;a.xx1=0;a.b1=0;a.q8=0;a.x1=.9;a.y1=.5;a.x2=.5;a.y2=.5;a.x3=.5;a.y3=.5;a.x4=.5;a.y4=.5;",frame_eqs_str:`a.decay=1;a.xx1=.9*a.xx1+.01*a.bass;a.xx2=.9*a.xx2+.01*a.treb;a.yy1=.94*a.yy1+.0075*(a.treb+a.bass);a.x1=.5+a.xx1-a.xx2;a.y1=.5+a.yy1;a.spring=18;a.grav=1;a.resist=.2;a.bounce=.9;a.dt=.0003;a.vx2=a.vx2*(1-a.resist*a.dt)+a.dt*(a.x1+a.x3-2*a.x2)*a.spring;a.vy2=a.vy2*(1-a.resist*a.dt)+a.dt*((a.y1+a.y3-2*a.y2)*a.spring-a.grav);a.vx3=a.vx3*(1-a.resist*a.dt)+a.dt*(a.x2+a.x4-2*a.x3)*a.spring;a.vy3=a.vy3*(1-a.resist*a.dt)+a.dt*((a.y2+a.y4-2*a.y3)*a.spring-a.grav);a.vx4=a.vx4*(1-a.resist*
a.dt)+a.dt*(a.x3-a.x4)*a.spring;a.vy4=a.vy4*(1-a.resist*a.dt)+a.dt*((a.y3-a.y4)*a.spring-a.grav);a.x2+=a.vx2;a.y2+=a.vy2;a.x3+=a.vx3;a.y3+=a.vy3;a.x4+=a.vx4;a.y4+=a.vy4;a.vx2=.00001<Math.abs(above(a.x2,0))?a.vx2:Math.abs(a.vx2)*a.bounce;a.vx2=.00001<Math.abs(below(a.x2,1))?a.vx2:-Math.abs(a.vx2)*a.bounce;a.vx3=.00001<Math.abs(above(a.x3,0))?a.vx3:Math.abs(a.vx3)*a.bounce;a.vx3=.00001<Math.abs(below(a.x3,1))?a.vx3:-Math.abs(a.vx3)*a.bounce;a.vx4=.00001<Math.abs(above(a.x4,0))?a.vx4:Math.abs(a.vx4)*
a.bounce;a.vx4=.00001<Math.abs(below(a.x4,1))?a.vx4:-Math.abs(a.vx4)*a.bounce;a.vy2=.00001<Math.abs(above(a.y2,0))?a.vy2:Math.abs(a.vy2)*a.bounce;a.vy2=.00001<Math.abs(below(a.y2,1))?a.vy2:-Math.abs(a.vy2)*a.bounce;a.vy3=.00001<Math.abs(above(a.y3,0))?a.vy3:Math.abs(a.vy3)*a.bounce;a.vy3=.00001<Math.abs(below(a.y3,1))?a.vy3:-Math.abs(a.vy3)*a.bounce;a.vy4=.00001<Math.abs(above(a.y4,0))?a.vy4:Math.abs(a.vy4)*a.bounce;a.vy4=.00001<Math.abs(below(a.y4,1))?a.vy4:-Math.abs(a.vy4)*a.bounce;a.q1=a.x1;a.q2=
a.x2;a.q3=a.x3;a.q4=a.x4;a.q5=a.y1;a.q6=a.y2;a.q7=a.y3;a.q8=a.y4;a.zoom=1.004;a.q6=Math.atan2(a.vx4,a.vy4);a.q5=sqrt(a.vx4*a.vx4+a.vy4*a.vy4);`,pixel_eqs_str:`a.dir=-a.q6+Math.asin(1);a.b1=.08;a.m1=45*a.q5;a.t1=.5;a.xx=.5+div(a.q4-.5,a.aspectx);a.yy=1-(.5+div(a.q8-.5,a.aspecty));a.x1=a.xx+Math.cos(a.dir+1.5708)*a.b1;a.y1=a.yy-Math.sin(a.dir+1.5708)*a.b1;a.x2=a.xx-Math.cos(a.dir+1.5708)*a.b1;a.y2=a.yy+Math.sin(a.dir+1.5708)*a.b1;a.d1=sqrt((a.x1-a.x)*(a.x1-a.x)+(a.y1-a.y)*(a.y1-a.y))-2*a.b1;a.si1=1-div(1,1+pow(2,100*-a.d1));a.d2=sqrt((a.x2-a.x)*(a.x2-a.x)+(a.y2-a.y)*(a.y2-a.y))-2*a.b1;a.si2=1-div(1,1+pow(2,100*-a.d2));a.si3=0*-pow(a.q5,
3);a.dx=div(2*(a.si1*Math.sin(a.y1-a.y)*a.m1*a.d1-a.si2*Math.sin(a.y2-a.y)*a.m1*a.d2+a.si3*Math.cos(a.dir)*a.t1),a.aspectx);a.dy=div(2*(-a.si1*Math.sin(a.x1-a.x)*a.m1*a.d1+a.si2*Math.sin(a.x2-a.x)*a.m1*a.d2-a.si3*Math.sin(a.dir)*a.t1),a.aspecty);`,warp:` shader_body { 
  vec3 ret_1;
  vec2 tmpvar_2;
  tmpvar_2 = (texsize.zw * 8.0);
  vec2 tmpvar_3;
  tmpvar_3.x = (((texture (sampler_blur1, 
    (uv + (vec2(1.0, 0.0) * tmpvar_2))
  ).xyz * scale1) + bias1) - ((texture (sampler_blur1, 
    (uv - (vec2(1.0, 0.0) * tmpvar_2))
  ).xyz * scale1) + bias1)).x;
  tmpvar_3.y = (((texture (sampler_blur1, 
    (uv + (vec2(0.0, 1.0) * tmpvar_2))
  ).xyz * scale1) + bias1) - ((texture (sampler_blur1, 
    (uv - (vec2(0.0, 1.0) * tmpvar_2))
  ).xyz * scale1) + bias1)).x;
  vec2 tmpvar_4;
  tmpvar_4 = (uv - ((tmpvar_3 * texsize.zw) * 0.5));
  ret_1.x = texture (sampler_fw_main, tmpvar_4).x;
  ret_1.x = (ret_1.x + ((
    (ret_1.x - ((texture (sampler_blur3, tmpvar_4).xyz * scale3) + bias3).x)
   * 0.2) - 0.004));
  ret_1.y = ((texture (sampler_fw_main, uv_orig).y * 0.98) - 0.004);
  vec4 tmpvar_5;
  tmpvar_5.w = 1.0;
  tmpvar_5.xyz = ret_1;
  ret = tmpvar_5.xyz;
 }`,comp:` shader_body { 
  vec2 tmpvar_1;
  tmpvar_1 = (texsize.zw * 4.0);
  vec2 tmpvar_2;
  tmpvar_2.x = (((texture (sampler_blur1, 
    (uv + (vec2(1.0, 0.0) * tmpvar_1))
  ).xyz * scale1) + bias1) - ((texture (sampler_blur1, 
    (uv - (vec2(1.0, 0.0) * tmpvar_1))
  ).xyz * scale1) + bias1)).x;
  tmpvar_2.y = (((texture (sampler_blur1, 
    (uv + (vec2(0.0, 1.0) * tmpvar_1))
  ).xyz * scale1) + bias1) - ((texture (sampler_blur1, 
    (uv - (vec2(0.0, 1.0) * tmpvar_1))
  ).xyz * scale1) + bias1)).x;
  vec4 tmpvar_3;
  tmpvar_3.w = 1.0;
  tmpvar_3.xyz = mix ((vec3(0.0, 0.0, 1.0) * texture (sampler_main, uv).x), vec3(1.0, 0.0, 0.0), texture (sampler_main, (uv - tmpvar_2)).yyy);
  ret = tmpvar_3.xyz;
 }`}},function(o,l){o.exports={baseVals:{rating:1,gammaadj:1,decay:1,echo_zoom:1,echo_alpha:.5,wave_thick:1,wave_brighten:0,wrap:0,wave_a:.004,wave_scale:.01,wave_smoothing:0,wave_mystery:-.44,modwavealphastart:1,modwavealphaend:1,warpanimspeed:.137,warpscale:13.125,zoom:.99951,warp:.99213,wave_y:.04,ob_size:.015,ob_r:.1,ob_g:.25,ob_a:1,ib_size:0,ib_b:1,mv_x:64,mv_y:48,mv_l:0,mv_b:0,mv_a:0},shapes:[{baseVals:{enabled:1,sides:100,thickoutline:1,rad:.02015,tex_ang:.12566,tex_zoom:1.51878,r:0,a:.1,g2:0,border_a:0},init_eqs_str:"",frame_eqs_str:""},{baseVals:{enabled:0}},{baseVals:{enabled:0}},{baseVals:{enabled:0}}],waves:[{baseVals:{enabled:0}},{baseVals:{enabled:0}},{baseVals:{enabled:0}},{baseVals:{enabled:0}}],init_eqs_str:"a.y3=0;a.y1=0;a.q12=0;a.x1=0;a.vx3=0;a.q13=0;a.q15=0;a.q6=0;a.dt=0;a.q1=0;a.q5=0;a.q9=0;a.vx4=0;a.x3=0;a.q11=0;a.q10=0;a.xx2=0;a.q4=0;a.yy1=0;a.vy4=0;a.q16=0;a.x4=0;a.x2=0;a.vy2=0;a.y2=0;a.q2=0;a.q14=0;a.vx2=0;a.q3=0;a.y4=0;a.q7=0;a.vy3=0;a.xx1=0;a.q8=0;",frame_eqs_str:`a.warp=0;a.wave_a=0;a.xx1=.9*a.xx1+.01*a.bass;a.xx2=.9*a.xx2+.01*a.treb;a.yy1=.94*a.yy1+.0075*(a.treb+a.bass);a.x1=.5+2*(a.xx1-a.xx2);a.y1=.4+1.5*a.yy1;a.dt=div(.03,a.fps);a.vx2=a.vx2*(1-2*a.dt)+10*a.dt*(a.x1+a.x3-2*a.x2);a.vy2=a.vy2*(1-2*a.dt)+a.dt*(10*(a.y1+a.y3-2*a.y2)-.5);a.vx3=a.vx3*(1-2*a.dt)+10*a.dt*(a.x2+a.x4-2*a.x3);a.vy3=a.vy3*(1-2*a.dt)+a.dt*(10*(a.y2+a.y4-2*a.y3)-.5);a.vx4=a.vx4*(1-2*a.dt)+10*a.dt*(a.x3-a.x4);a.vy4=a.vy4*(1-2*a.dt)+a.dt*(10*(a.y3-a.y4)-.5);a.x2+=
a.vx2;a.y2+=a.vy2;a.x3+=a.vx3;a.y3+=a.vy3;a.x4+=a.vx4;a.y4+=a.vy4;a.vx2=.00001<Math.abs(above(a.x2,0))?a.vx2:.5*Math.abs(a.vx2);a.vx2=.00001<Math.abs(below(a.x2,1))?a.vx2:.5*-Math.abs(a.vx2);a.vx3=.00001<Math.abs(above(a.x3,0))?a.vx3:.5*Math.abs(a.vx3);a.vx3=.00001<Math.abs(below(a.x3,1))?a.vx3:.5*-Math.abs(a.vx3);a.vx4=.00001<Math.abs(above(a.x4,0))?a.vx4:.5*Math.abs(a.vx4);a.vx4=.00001<Math.abs(below(a.x4,1))?a.vx4:.5*-Math.abs(a.vx4);a.vy2=.00001<Math.abs(above(a.y2,0))?a.vy2:.5*Math.abs(a.vy2);
a.vy2=.00001<Math.abs(below(a.y2,1))?a.vy2:.5*-Math.abs(a.vy2);a.vy3=.00001<Math.abs(above(a.y3,0))?a.vy3:.5*Math.abs(a.vy3);a.vy3=.00001<Math.abs(below(a.y3,1))?a.vy3:.5*-Math.abs(a.vy3);a.vy4=.00001<Math.abs(above(a.y4,0))?a.vy4:.5*Math.abs(a.vy4);a.vy4=.00001<Math.abs(below(a.y4,1))?a.vy4:.5*-Math.abs(a.vy4);a.q1=a.x1;a.q2=a.x2;a.q3=a.x3;a.q4=a.x4;a.q5=a.y1;a.q6=a.y2;a.q7=a.y3;a.q8=a.y4;a.q9=div(1,a.aspectx);a.q10=div(1,a.aspecty);a.q11=a.aspectx;a.q12=a.aspecty;a.q13=sqrt(a.vx4*a.vx4+a.vy4*a.vy4);
a.q14=Math.atan2(a.vx4,a.vy4);a.q15=Math.sin(a.q14);a.q16=Math.cos(a.q14);`,pixel_eqs_str:"",pixel_eqs:"",warp:` shader_body { 
  vec2 uv_1;
  vec2 my_uv_2;
  vec3 ret_3;
  vec2 tmpvar_4;
  tmpvar_4.x = q4;
  tmpvar_4.y = (1.0 - q8);
  vec2 tmpvar_5;
  tmpvar_5.x = -(q15);
  tmpvar_5.y = q16;
  vec2 domain_6;
  vec2 uv_rot_7;
  domain_6 = (uv - tmpvar_4);
  domain_6 = (domain_6 * aspect.xy);
  float tmpvar_8;
  tmpvar_8 = (1.0/((1.0 + exp(
    ((sqrt(dot (domain_6, domain_6)) - 0.07) * 50.0)
  ))));
  domain_6 = (domain_6 + ((tmpvar_5 * q13) * (aspect.wz * tmpvar_8)));
  float tmpvar_9;
  tmpvar_9 = sin(tmpvar_8);
  float tmpvar_10;
  tmpvar_10 = cos(tmpvar_8);
  uv_rot_7.x = ((tmpvar_10 * domain_6.x) - (tmpvar_9 * domain_6.y));
  uv_rot_7.y = ((tmpvar_9 * domain_6.x) + (tmpvar_10 * domain_6.y));
  uv_rot_7 = (uv_rot_7 * aspect.zw);
  uv_rot_7 = (uv_rot_7 + tmpvar_4);
  uv_1 = (clamp ((tmpvar_4 + 
    ((uv_rot_7 - tmpvar_4) * mix (1.0, 4.0, tmpvar_8))
  ), 0.0, 1.0) + (texsize.zw * vec2(0.0, 0.15)));
  vec2 tmpvar_11;
  tmpvar_11 = mix (uv_orig, uv_1, vec2(0.2, 0.2));
  uv_1 = tmpvar_11;
  vec2 tmpvar_12;
  tmpvar_12 = (vec2(1280.0, 1024.0) * texsize.zw);
  float tmpvar_13;
  tmpvar_13 = (((
    (texture (sampler_blur2, (tmpvar_11 + vec2(0.005, 0.0))).xyz * scale2)
   + bias2) - (
    (texture (sampler_blur2, (tmpvar_11 - vec2(0.005, 0.0))).xyz * scale2)
   + bias2)).x * tmpvar_12.x);
  float tmpvar_14;
  tmpvar_14 = (((
    (texture (sampler_blur2, (tmpvar_11 + vec2(0.0, 0.005))).xyz * scale2)
   + bias2) - (
    (texture (sampler_blur2, (tmpvar_11 - vec2(0.0, 0.005))).xyz * scale2)
   + bias2)).x * tmpvar_12.y);
  vec2 tmpvar_15;
  tmpvar_15.x = tmpvar_13;
  tmpvar_15.y = tmpvar_14;
  vec2 tmpvar_16;
  tmpvar_16.x = (((
    (texture (sampler_blur2, (tmpvar_11 + vec2(0.005, 0.0))).xyz * scale2)
   + bias2) - (
    (texture (sampler_blur2, (tmpvar_11 - vec2(0.005, 0.0))).xyz * scale2)
   + bias2)).x * tmpvar_12.x);
  tmpvar_16.y = (((
    (texture (sampler_blur2, (tmpvar_11 + vec2(0.0, 0.005))).xyz * scale2)
   + bias2) - (
    (texture (sampler_blur2, (tmpvar_11 - vec2(0.0, 0.005))).xyz * scale2)
   + bias2)).x * tmpvar_12.y);
  ret_3.x = texture (sampler_fw_main, ((tmpvar_11 - (tmpvar_15 * 0.006)) + (tmpvar_16 * 0.003))).x;
  ret_3.x = (ret_3.x + ((ret_3.x - 
    ((texture (sampler_blur3, tmpvar_11).xyz * scale3) + bias3)
  .x) * 0.1));
  ret_3.x = (ret_3.x + 0.004);
  vec2 tmpvar_17;
  tmpvar_17.x = tmpvar_14;
  tmpvar_17.y = -(tmpvar_13);
  my_uv_2 = (uv_orig + ((tmpvar_17 * 0.05) * (1.2 - 
    ((texture (sampler_blur3, uv_orig).xyz * scale3) + bias3)
  .y)));
  ret_3.z = texture (sampler_fw_main, my_uv_2).z;
  vec2 x_18;
  x_18 = (my_uv_2 - uv_orig);
  ret_3.z = (ret_3.z + ((
    ((ret_3.z - ((texture (sampler_blur1, uv_orig).xyz * scale1) + bias1).z) * sqrt(dot (x_18, x_18)))
   * 180.0) / sqrt(
    dot (tmpvar_12, tmpvar_12)
  )));
  ret_3.z = (ret_3.z * 0.85);
  ret_3.z = (ret_3.z + 0.008);
  vec2 tmpvar_19;
  tmpvar_19.x = -(tmpvar_14);
  tmpvar_19.y = tmpvar_13;
  my_uv_2 = (tmpvar_19 * 0.045);
  vec2 tmpvar_20;
  tmpvar_20.x = (((
    (texture (sampler_blur2, (tmpvar_11 + vec2(0.01, 0.0))).xyz * scale2)
   + bias2) - (
    (texture (sampler_blur2, (tmpvar_11 - vec2(0.01, 0.0))).xyz * scale2)
   + bias2)).y * tmpvar_12.x);
  tmpvar_20.y = (((
    (texture (sampler_blur2, (tmpvar_11 + vec2(0.0, 0.01))).xyz * scale2)
   + bias2) - (
    (texture (sampler_blur2, (tmpvar_11 - vec2(0.0, 0.01))).xyz * scale2)
   + bias2)).y * tmpvar_12.y);
  my_uv_2 = (my_uv_2 + (tmpvar_11 - (tmpvar_20 * 0.03)));
  ret_3.y = texture (sampler_fw_main, my_uv_2).y;
  ret_3.y = (ret_3.y + ((
    (ret_3.y - ((texture (sampler_blur3, my_uv_2).xyz * scale3) + bias3).y)
   * 0.1) + 0.03));
  vec4 tmpvar_21;
  tmpvar_21.w = 1.0;
  tmpvar_21.xyz = ret_3;
  ret = tmpvar_21.xyz;
 }`,comp:` shader_body { 
  vec2 dz_1;
  vec3 dy_2;
  vec3 dx_3;
  vec2 d_4;
  vec3 ret_5;
  vec2 tmpvar_6;
  vec2 tmpvar_7;
  tmpvar_7 = (vec2(1.0, 0.0) * texsize.zw);
  tmpvar_6.x = (texture (sampler_main, (uv + tmpvar_7)).xyz - texture (sampler_main, (uv - tmpvar_7)).xyz).y;
  vec2 tmpvar_8;
  tmpvar_8 = (vec2(0.0, 1.0) * texsize.zw);
  tmpvar_6.y = (texture (sampler_main, (uv + tmpvar_8)).xyz - texture (sampler_main, (uv - tmpvar_8)).xyz).y;
  d_4 = (texsize.zw * 2.0);
  dx_3 = (((texture (sampler_blur1, 
    (uv + (vec2(1.0, 0.0) * d_4))
  ).xyz * scale1) + bias1) - ((texture (sampler_blur1, 
    (uv - (vec2(1.0, 0.0) * d_4))
  ).xyz * scale1) + bias1));
  dy_2 = (((texture (sampler_blur1, 
    (uv + (vec2(0.0, 1.0) * d_4))
  ).xyz * scale1) + bias1) - ((texture (sampler_blur1, 
    (uv - (vec2(0.0, 1.0) * d_4))
  ).xyz * scale1) + bias1));
  vec2 tmpvar_9;
  tmpvar_9.x = dx_3.y;
  tmpvar_9.y = dy_2.y;
  dz_1 = ((tmpvar_6 * 3.0) + tmpvar_9);
  ret_5 = (vec3(((
    pow ((sqrt(dot (dz_1, dz_1)) * 0.8), 0.7)
   + 
    (((texture (sampler_blur2, uv).xyz * scale2) + bias2).y * 0.4)
  ) - 0.1)) * vec3(0.3, 0.5, 0.7));
  vec2 tmpvar_10;
  tmpvar_10.x = dx_3.x;
  tmpvar_10.y = dy_2.x;
  vec3 tmpvar_11;
  tmpvar_11 = mix (mix (ret_5, vec3(0.2, 0.1, 0.0), vec3((texture (sampler_main, 
    (uv + ((tmpvar_10 * texsize.zw) * 18.0))
  ).x * 6.0))), vec3(1.0, 1.0, 1.0), texture (sampler_main, uv).zzz);
  ret_5 = tmpvar_11;
  vec4 tmpvar_12;
  tmpvar_12.w = 1.0;
  tmpvar_12.xyz = tmpvar_11;
  ret = tmpvar_12.xyz;
 }`}},function(o,l){o.exports={baseVals:{rating:5,gammaadj:1,decay:1,echo_zoom:1,echo_alpha:.5,wave_thick:1,wave_brighten:0,wave_a:.004,wave_scale:.267,wave_smoothing:0,wave_mystery:-.44,modwavealphastart:1,modwavealphaend:1,warpscale:16.016,zoomexp:11.56276,zoom:1.05971,warp:.13126,wave_y:.04,ob_size:0,ob_a:1,ib_size:0,mv_x:64,mv_y:48,mv_l:0,mv_b:0,mv_a:0,b1ed:0},shapes:[{baseVals:{enabled:1,sides:100,thickoutline:1,rad:.01,tex_ang:.12566,tex_zoom:1.51878,g:.99,b:1,a:.1,g2:0,border_a:0},init_eqs_str:"",frame_eqs_str:""},{baseVals:{enabled:0}},{baseVals:{enabled:0}},{baseVals:{enabled:0}}],waves:[{baseVals:{enabled:0}},{baseVals:{enabled:0}},{baseVals:{enabled:0}},{baseVals:{enabled:0}}],init_eqs_str:"a.v=0;a.t=0;a.q12=0;a.q13=0;a.q11=div(.5,Math.asin(1));",frame_eqs_str:"a.zoom=1;a.v=.9*a.v+.04*(a.bass-a.treb);a.t+=.01*a.v;a.q12=.1*a.time+a.t;a.q13=.25+.01*(a.bass_att-a.treb_att);",pixel_eqs_str:"",pixel_eqs:"",warp:` shader_body { 
  vec2 my_uv_1;
  vec2 d_2;
  vec3 ret_3;
  vec2 tmpvar_4;
  tmpvar_4 = (texsize.zw * 4.0);
  vec3 tmpvar_5;
  tmpvar_5 = (((texture (sampler_blur1, 
    fract((uv + (vec2(1.0, 0.0) * tmpvar_4)))
  ).xyz * scale1) + bias1) - ((texture (sampler_blur1, 
    fract((uv - (vec2(1.0, 0.0) * tmpvar_4)))
  ).xyz * scale1) + bias1));
  vec3 tmpvar_6;
  tmpvar_6 = (((texture (sampler_blur1, 
    fract((uv + (vec2(0.0, 1.0) * tmpvar_4)))
  ).xyz * scale1) + bias1) - ((texture (sampler_blur1, 
    fract((uv - (vec2(0.0, 1.0) * tmpvar_4)))
  ).xyz * scale1) + bias1));
  vec3 tmpvar_7;
  tmpvar_7 = ((texture (sampler_blur1, uv).xyz * scale1) + bias1);
  d_2 = -(tmpvar_4);
  float tmpvar_8;
  tmpvar_8 = (d_2 * 4.0).x;
  vec2 tmpvar_9;
  tmpvar_9.x = tmpvar_5.y;
  tmpvar_9.y = tmpvar_6.y;
  vec2 tmpvar_10;
  tmpvar_10.x = tmpvar_5.x;
  tmpvar_10.y = tmpvar_6.x;
  vec2 tmpvar_11;
  tmpvar_11 = ((uv - (tmpvar_9 * d_2)) - (tmpvar_10 * tmpvar_8));
  ret_3.y = texture (sampler_fc_main, (tmpvar_11 - floor(tmpvar_11))).y;
  ret_3.y = (ret_3.y + ((
    (ret_3.y - tmpvar_7.y)
   * 0.042) + -0.0075));
  vec2 tmpvar_12;
  tmpvar_12.x = tmpvar_5.x;
  tmpvar_12.y = tmpvar_6.x;
  vec2 tmpvar_13;
  tmpvar_13.x = tmpvar_5.z;
  tmpvar_13.y = tmpvar_6.z;
  my_uv_1 = ((uv - (tmpvar_12 * d_2)) - (tmpvar_13 * tmpvar_8));
  ret_3.x = texture (sampler_fc_main, (my_uv_1 - floor(my_uv_1))).x;
  ret_3.x = (ret_3.x + ((
    (ret_3.x - tmpvar_7.x)
   * 0.042) + -0.0075));
  vec2 tmpvar_14;
  tmpvar_14.x = tmpvar_5.z;
  tmpvar_14.y = tmpvar_6.z;
  vec2 tmpvar_15;
  tmpvar_15.x = tmpvar_5.y;
  tmpvar_15.y = tmpvar_6.y;
  my_uv_1 = ((uv - (tmpvar_14 * d_2)) - (tmpvar_15 * tmpvar_8));
  ret_3.z = texture (sampler_fc_main, (my_uv_1 - floor(my_uv_1))).z;
  ret_3.z = (ret_3.z + ((
    (ret_3.z - tmpvar_7.z)
   * 0.042) + -0.0075));
  vec4 tmpvar_16;
  tmpvar_16.w = 1.0;
  tmpvar_16.xyz = ret_3;
  ret = tmpvar_16.xyz;
 }`,comp:` shader_body { 
  vec2 uv_1;
  uv_1 = uv;
  vec3 ret_2;
  float tmpvar_3;
  tmpvar_3 = -(q12);
  vec2 tmpvar_4;
  tmpvar_4 = ((uv - 0.5) * aspect.wz);
  float tmpvar_5;
  float tmpvar_6;
  tmpvar_6 = (min (abs(
    (tmpvar_4.x / tmpvar_4.y)
  ), 1.0) / max (abs(
    (tmpvar_4.x / tmpvar_4.y)
  ), 1.0));
  float tmpvar_7;
  tmpvar_7 = (tmpvar_6 * tmpvar_6);
  tmpvar_7 = (((
    ((((
      ((((-0.01213232 * tmpvar_7) + 0.05368138) * tmpvar_7) - 0.1173503)
     * tmpvar_7) + 0.1938925) * tmpvar_7) - 0.3326756)
   * tmpvar_7) + 0.9999793) * tmpvar_6);
  tmpvar_7 = (tmpvar_7 + (float(
    (abs((tmpvar_4.x / tmpvar_4.y)) > 1.0)
  ) * (
    (tmpvar_7 * -2.0)
   + 1.570796)));
  tmpvar_5 = (tmpvar_7 * sign((tmpvar_4.x / tmpvar_4.y)));
  if ((abs(tmpvar_4.y) > (1e-08 * abs(tmpvar_4.x)))) {
    if ((tmpvar_4.y < 0.0)) {
      if ((tmpvar_4.x >= 0.0)) {
        tmpvar_5 += 3.141593;
      } else {
        tmpvar_5 = (tmpvar_5 - 3.141593);
      };
    };
  } else {
    tmpvar_5 = (sign(tmpvar_4.x) * 1.570796);
  };
  vec2 tmpvar_8;
  tmpvar_8.x = ((tmpvar_5 * q11) - tmpvar_3);
  tmpvar_8.y = (((q13 * 
    log(sqrt(dot (tmpvar_4, tmpvar_4)))
  ) + (tmpvar_5 * q11)) + tmpvar_3);
  uv_1 = (0.5 + (0.5 - abs(
    ((fract((tmpvar_8 * 0.5)) * 2.0) - 1.0)
  )));
  vec4 tmpvar_9;
  tmpvar_9 = texture (sampler_main, uv_1);
  ret_2 = (vec3(dot (tmpvar_9.xyz, vec3(0.32, 0.49, 0.29))) * mix (vec3(1.0, 1.0, 1.0), vec3(0.2, 0.5, 1.0), tmpvar_9.xxx));
  ret_2 = (ret_2 * 2.0);
  vec4 tmpvar_10;
  tmpvar_10.w = 1.0;
  tmpvar_10.xyz = ret_2;
  ret = tmpvar_10.xyz;
 }`}},function(o,l){o.exports={baseVals:{rating:5,gammaadj:1,decay:1,echo_zoom:1,echo_alpha:.5,wave_thick:1,wave_brighten:0,wrap:0,wave_a:.004,wave_scale:.242,wave_smoothing:0,wave_mystery:-.44,modwavealphastart:1,modwavealphaend:1,warpanimspeed:.88,warpscale:9.181,zoomexp:.65309,zoom:.87866,warp:.04914,wave_y:.04,ob_size:.05,ob_a:1,ib_size:0,ib_r:0,ib_g:0,ib_b:0,ib_a:1,mv_x:64,mv_y:48,mv_l:0,mv_b:0,mv_a:0},shapes:[{baseVals:{enabled:1,sides:100,thickoutline:1,y:.04,rad:.01,tex_ang:.12566,tex_zoom:1.51878,r:0,a:0,g2:0,b2:.01,border_a:0},init_eqs_str:"",frame_eqs_str:""},{baseVals:{enabled:0}},{baseVals:{enabled:0}},{baseVals:{enabled:0}}],waves:[{baseVals:{enabled:1,thick:1,additive:1,scaling:2.0231,smoothing:0,r:0,b:0},init_eqs_str:"a.tt3=0;a.tt2=0;a.tt1=0;a.d=0;a.t2=0;a.t3=0;a.t4=0;a.cl=0;",frame_eqs_str:"a.r=1;a.g=0;a.b=1;",point_eqs_str:"a.tt3=.6*a.tt3+1*a.value1;a.tt2=.7*a.tt2+.2*a.tt3;a.tt1=.8*a.tt1+.1*a.tt2;a.d=.9*a.d+.2*a.tt1;a.y=.6+a.d*a.sample*(1-a.sample)*2;a.x=-.05+1.1*a.sample;"},{baseVals:{enabled:0}},{baseVals:{enabled:0}},{baseVals:{enabled:0}}],init_eqs_str:"a.c_inv_i=0;a.translation_x=0;a.q12=0;a.a_i=0;a.a_r=0;a.q18=0;a.q13=0;a.scale=0;a.q15=0;a.c_inv_r=0;a.angle=0;a.q11=0;a.bcad_r=0;a.b_r=0;a.q16=0;a.bcad_i=0;a.q17=0;a.q14=0;a.translation_y=0;a.translation_v=0;a.b_i=0;a.translation_u=0;a.x1=.9;a.y1=.5;a.x2=.5;a.y2=.5;a.x3=.5;a.y3=.5;a.x4=.5;a.y4=.5;",frame_eqs_str:`a.zoom=1;a.scale=1;a.angle=.1*a.time;a.translation_x=0;a.translation_y=.12;a.a_r=Math.cos(a.angle)*a.scale;a.a_i=Math.sin(a.angle)*a.scale;a.b_r=a.translation_x;a.b_i=a.translation_y;a.scale=1.6;a.angle=0;a.translation_u=0;a.translation_v=0;a.q15=Math.cos(a.angle)*a.scale;a.q16=Math.sin(a.angle)*a.scale;a.q17=a.translation_u;a.q18=a.translation_v;a.c_inv_r=div(a.q15,a.q15*a.q15+a.q16*a.q16);a.c_inv_i=div(a.q16,a.q15*a.q15+a.q16*a.q16);a.q11=a.a_r*a.c_inv_r-a.a_i*a.c_inv_i;a.q12=
a.a_r*a.c_inv_i-a.a_i*a.c_inv_r;a.bcad_r=a.b_r*a.q15-a.b_i*a.q16-(a.a_r*a.q17-a.a_i*a.q18);a.bcad_i=a.b_r*a.q16-a.b_i*a.q15-(a.a_r*a.q18-a.a_i*a.q17);a.q13=a.bcad_r*a.c_inv_r-a.bcad_i*a.c_inv_i;a.q14=a.bcad_r*a.c_inv_i-a.bcad_i*a.c_inv_r;`,pixel_eqs_str:"",pixel_eqs:"",warp:` shader_body { 
  float conway_1;
  vec3 ret_2;
  vec2 tmpvar_3;
  tmpvar_3.x = (((
    ((texture (sampler_blur2, (uv + vec2(0.02, 0.0))).xyz * scale2) + bias2)
   - 
    ((texture (sampler_blur2, (uv - vec2(0.02, 0.0))).xyz * scale2) + bias2)
  ).y * 1280.0) * texsize.z);
  tmpvar_3.y = (((
    ((texture (sampler_blur2, (uv + vec2(0.0, 0.02))).xyz * scale2) + bias2)
   - 
    ((texture (sampler_blur2, (uv - vec2(0.0, 0.02))).xyz * scale2) + bias2)
  ).y * 1024.0) * texsize.w);
  ret_2.y = texture (sampler_pc_main, (uv - (tmpvar_3 * 0.004))).y;
  ret_2.y = (ret_2.y + ((
    ((ret_2.y - ((texture (sampler_blur1, uv).xyz * scale1) + bias1).y) - 0.1)
   * 0.1) + 0.02));
  vec2 tmpvar_4;
  tmpvar_4 = (vec2(0.0, 1.0) * texsize.zw);
  ret_2.z = (texture (sampler_fc_main, (uv - tmpvar_4)).z - 0.004);
  conway_1 = (texture (sampler_pw_main, (uv_orig - texsize.zw)).x + texture (sampler_pw_main, (uv_orig + (vec2(0.0, -1.0) * texsize.zw))).x);
  conway_1 = (conway_1 + texture (sampler_pw_main, (uv_orig + (vec2(1.0, -1.0) * texsize.zw))).x);
  conway_1 = (conway_1 + texture (sampler_pw_main, (uv_orig + (vec2(-1.0, 0.0) * texsize.zw))).x);
  conway_1 = (conway_1 + texture (sampler_pw_main, (uv_orig + (vec2(1.0, 0.0) * texsize.zw))).x);
  conway_1 = (conway_1 + texture (sampler_pw_main, (uv_orig + (vec2(-1.0, 1.0) * texsize.zw))).x);
  conway_1 = (conway_1 + texture (sampler_pw_main, (uv_orig + tmpvar_4)).x);
  conway_1 = (conway_1 + texture (sampler_pw_main, (uv_orig + texsize.zw)).x);
  conway_1 = (conway_1 - fract(conway_1));
  float tmpvar_5;
  tmpvar_5 = clamp (texture (sampler_pc_main, uv_orig).x, 0.0, 1.0);
  ret_2.x = (clamp ((1.0 - 
    abs((conway_1 - 3.0))
  ), 0.0, 1.0) * (1.0 - tmpvar_5));
  ret_2.x = (ret_2.x + (clamp (
    max ((1.0 - abs((conway_1 - 2.0))), (1.0 - abs((conway_1 - 3.0))))
  , 0.0, 1.0) * tmpvar_5));
  vec4 tmpvar_6;
  tmpvar_6.w = 1.0;
  tmpvar_6.xyz = ret_2;
  ret = tmpvar_6.xyz;
 }`,comp:` shader_body { 
  vec2 moebius_1;
  vec3 ret_2;
  vec2 tmpvar_3;
  tmpvar_3.x = q11;
  tmpvar_3.y = q12;
  vec2 tmpvar_4;
  tmpvar_4.x = q17;
  tmpvar_4.y = q18;
  vec2 tmpvar_5;
  vec2 tmpvar_6;
  tmpvar_6 = (uv - 0.5);
  tmpvar_5 = (tmpvar_6 * aspect.xy);
  vec2 tmpvar_7;
  tmpvar_7.x = ((tmpvar_5.x * q15) - (tmpvar_5.y * q16));
  tmpvar_7.y = ((tmpvar_5.x * q16) - (tmpvar_5.y * q15));
  vec2 tmpvar_8;
  tmpvar_8 = (tmpvar_7 + tmpvar_4);
  vec2 tmpvar_9;
  tmpvar_9.x = ((q13 * tmpvar_8.x) + (q14 * tmpvar_8.y));
  tmpvar_9.y = ((q14 * tmpvar_8.x) - (q13 * tmpvar_8.y));
  moebius_1 = (((tmpvar_9 / 
    ((tmpvar_8.x * tmpvar_8.x) + (tmpvar_8.y * tmpvar_8.y))
  ) + tmpvar_3) * 0.5);
  float tmpvar_10;
  tmpvar_10 = sqrt(dot (moebius_1, moebius_1));
  moebius_1 = (0.5 + ((
    (1.0 - abs(((
      fract((moebius_1 * 0.5))
     * 2.0) - 1.0)))
   - 0.5) * 0.95));
  vec2 tmpvar_11;
  tmpvar_11 = (0.5 + (tmpvar_6 * 0.2));
  ret_2 = (texture (sampler_main, tmpvar_11).z * vec3(0.4, 0.0, 0.7));
  ret_2 = (mix (ret_2, vec3(0.0, 1.0, 1.0), vec3(clamp (texture (sampler_fc_main, moebius_1).y, 0.0, 1.0))) * (1.4 - pow (
    (tmpvar_10 * 0.8)
  , 0.3)));
  vec3 tmpvar_12;
  tmpvar_12 = mix (mix (mix (ret_2, vec3(4.0, 1.0, 0.0), vec3(
    ((clamp ((texture (sampler_fc_main, tmpvar_11).y - texture (sampler_pc_main, tmpvar_11).y), 0.0, 1.0) * 4.0) * (tmpvar_10 * tmpvar_10))
  )), vec3(-4.0, -4.0, -4.0), texture (sampler_main, tmpvar_11).xxx), vec3(2.0, 2.0, 2.0), vec3((texture (sampler_pc_main, tmpvar_11).x * 0.75)));
  ret_2 = tmpvar_12;
  vec4 tmpvar_13;
  tmpvar_13.w = 1.0;
  tmpvar_13.xyz = tmpvar_12;
  ret = tmpvar_13.xyz;
 }`}},function(o,l){o.exports={baseVals:{rating:1,gammaadj:1.28,decay:.8,echo_zoom:1,echo_orient:3,wave_mode:7,additivewave:1,modwavealphabyvolume:1,wave_brighten:0,wrap:0,brighten:1,wave_a:.001,wave_scale:1.286,wave_smoothing:.63,modwavealphastart:.71,modwavealphaend:1.3,warpanimspeed:.01,warpscale:100,zoomexp:.92178,zoom:.9901,warp:.01,wave_r:.65,wave_g:.65,wave_b:.65,ob_size:.005,ob_g:1,ob_a:1,ib_size:0,ib_r:0,ib_g:0,ib_b:0,ib_a:1,mv_x:64,mv_y:48,mv_l:0,mv_a:0,b1ed:0},shapes:[{baseVals:{enabled:0}},{baseVals:{enabled:0}},{baseVals:{enabled:0}},{baseVals:{enabled:0}}],waves:[{baseVals:{enabled:0}},{baseVals:{enabled:0}},{baseVals:{enabled:0}},{baseVals:{enabled:0}}],init_eqs_str:"a.d=0;a.y3=0;a.y1=0;a.xx=0;a.s=0;a.x1=0;a.vx3=0;a.q6=0;a.dt=0;a.q1=0;a.q5=0;a.v=0;a.vx4=0;a.grav=0;a.x3=0;a.q11=0;a.q10=0;a.xx2=0;a.q4=0;a.a=0;a.yy1=0;a.vy4=0;a.dir=0;a.bounce=0;a.x4=0;a.r=0;a.x2=0;a.vy2=0;a.y2=0;a.q2=0;a.spring=0;a.vx2=0;a.q3=0;a.resist=0;a.yy=0;a.y4=0;a.vy3=0;a.xx1=0;a.v2=0;a.q8=0;a.x1=.9;a.y1=.5;a.x2=.5;a.y2=.5;a.x3=.5;a.y3=.5;a.x4=.5;a.y4=.5;",frame_eqs_str:`a.xx1=.9*a.xx1+.01*a.bass;a.xx2=.9*a.xx2+.01*a.treb;a.yy1=.94*a.yy1+.0075*(a.treb+a.bass);a.x1=.5+2*(a.xx1-a.xx2);a.y1=.4+a.yy1;a.x1=Math.max(0,Math.min(1,a.x1));a.y1=Math.max(0,Math.min(1,a.y1));a.spring=10;a.grav=.5;a.resist=1;a.bounce=.75;a.dt=.0001*div(60,a.fps);a.vx2=a.vx2*(1-a.resist*a.dt)+a.dt*(a.x1+a.x3-2*a.x2)*a.spring;a.vy2=a.vy2*(1-a.resist*a.dt)+a.dt*((a.y1+a.y3-2*a.y2)*a.spring-a.grav);a.vx3=a.vx3*(1-a.resist*a.dt)+a.dt*(a.x2+a.x4-2*a.x3)*a.spring;a.vy3=a.vy3*(1-
a.resist*a.dt)+a.dt*((a.y2+a.y4-2*a.y3)*a.spring-a.grav);a.vx4=a.vx4*(1-a.resist*a.dt)+a.dt*(a.x3-a.x4)*a.spring;a.vy4=a.vy4*(1-a.resist*a.dt)+a.dt*((a.y3-a.y4)*a.spring-a.grav);a.x2+=a.vx2;a.y2+=a.vy2;a.x3+=a.vx3;a.y3+=a.vy3;a.x4+=a.vx4;a.y4+=a.vy4;a.vx2=.00001<Math.abs(above(a.x2,0))?a.vx2:Math.abs(a.vx2)*a.bounce;a.vx2=.00001<Math.abs(below(a.x2,1))?a.vx2:-Math.abs(a.vx2)*a.bounce;a.vx3=.00001<Math.abs(above(a.x3,0))?a.vx3:Math.abs(a.vx3)*a.bounce;a.vx3=.00001<Math.abs(below(a.x3,1))?a.vx3:-Math.abs(a.vx3)*
a.bounce;a.vx4=.00001<Math.abs(above(a.x4,0))?a.vx4:Math.abs(a.vx4)*a.bounce;a.vx4=.00001<Math.abs(below(a.x4,1))?a.vx4:-Math.abs(a.vx4)*a.bounce;a.vy2=.00001<Math.abs(above(a.y2,0))?a.vy2:Math.abs(a.vy2)*a.bounce;a.vy2=.00001<Math.abs(below(a.y2,1))?a.vy2:-Math.abs(a.vy2)*a.bounce;a.vy3=.00001<Math.abs(above(a.y3,0))?a.vy3:Math.abs(a.vy3)*a.bounce;a.vy3=.00001<Math.abs(below(a.y3,1))?a.vy3:-Math.abs(a.vy3)*a.bounce;a.vy4=.00001<Math.abs(above(a.y4,0))?a.vy4:Math.abs(a.vy4)*a.bounce;a.vy4=.00001<
Math.abs(below(a.y4,1))?a.vy4:-Math.abs(a.vy4)*a.bounce;a.q4=a.x4;a.q8=a.y4;a.q1=a.aspectx;a.q2=a.aspecty;a.q10=a.x1;a.q11=a.y1;a.zoom=1;a.warp=0;a.q6=Math.atan2(a.vx4,a.vy4);a.q5=sqrt(a.vx4*a.vx4+a.vy4*a.vy4);a.a=.95*a.a+a.q5;a.s=.9*a.s+a.a;a.q3=.1*a.s;a.monitor=a.s;a.wave_a=0;`,pixel_eqs_str:"a.x=.5+(a.x-.5)*a.q1;a.y=.5+(a.y-.5)*a.q2;a.xx=a.q4;a.yy=1-a.q8;a.dx=0;a.dy=0;a.d=sqrt((a.x-a.xx)*(a.x-a.xx)+(a.y-a.yy)*(a.y-a.yy));a.r=.1;a.v=20;a.v2=a.q5;a.dx=(a.v*(Math.sin(a.y-a.yy)*(a.d-a.r)-(a.x-a.xx)*(a.d-div(a.r,2)))+Math.cos(a.dir)*a.v2)*(1-sigmoid(a.d-a.r,120));a.dy=(-a.v*(Math.sin(a.x-a.xx)*(a.d-a.r)+(a.y-a.yy)*(a.d-div(a.r,2)))-Math.sin(a.dir)*a.v2)*(1-sigmoid(a.d-a.r,120));",warp:` shader_body { 
  vec3 ret_1;
  vec2 tmpvar_2;
  tmpvar_2 = mix (uv_orig, uv, vec2(2.0, 2.0));
  vec2 tmpvar_3;
  tmpvar_3 = (texsize.zw * 2.0);
  vec3 tmpvar_4;
  tmpvar_4 = (((texture (sampler_blur1, 
    (tmpvar_2 + (vec2(1.0, 0.0) * tmpvar_3))
  ).xyz * scale1) + bias1) - ((texture (sampler_blur1, 
    (tmpvar_2 - (vec2(1.0, 0.0) * tmpvar_3))
  ).xyz * scale1) + bias1));
  vec3 tmpvar_5;
  tmpvar_5 = (((texture (sampler_blur1, 
    (tmpvar_2 + (vec2(0.0, 1.0) * tmpvar_3))
  ).xyz * scale1) + bias1) - ((texture (sampler_blur1, 
    (tmpvar_2 - (vec2(0.0, 1.0) * tmpvar_3))
  ).xyz * scale1) + bias1));
  vec2 tmpvar_6;
  tmpvar_6.x = tmpvar_4.x;
  tmpvar_6.y = tmpvar_5.x;
  vec2 tmpvar_7;
  tmpvar_7 = (tmpvar_2 + ((tmpvar_6 * texsize.zw) * 8.0));
  vec2 tmpvar_8;
  tmpvar_8.x = tmpvar_4.y;
  tmpvar_8.y = tmpvar_5.y;
  vec2 tmpvar_9;
  tmpvar_9 = (tmpvar_2 + ((tmpvar_8 * texsize.zw) * 8.0));
  vec2 tmpvar_10;
  tmpvar_10.x = tmpvar_4.z;
  tmpvar_10.y = tmpvar_5.z;
  vec2 tmpvar_11;
  tmpvar_11 = (tmpvar_2 + ((tmpvar_10 * texsize.zw) * 8.0));
  ret_1.x = (texture (sampler_main, tmpvar_7).x - ((texture (sampler_main, tmpvar_7).xyz - 
    ((texture (sampler_blur3, tmpvar_7).xyz * scale3) + bias3)
  ).x * 0.02));
  ret_1.y = (texture (sampler_main, tmpvar_9).y - ((texture (sampler_main, tmpvar_9).xyz - 
    ((texture (sampler_blur3, tmpvar_9).xyz * scale3) + bias3)
  ).y * 0.02));
  ret_1.z = (texture (sampler_main, tmpvar_11).z - ((texture (sampler_main, tmpvar_11).xyz - 
    ((texture (sampler_blur3, tmpvar_11).xyz * scale3) + bias3)
  ).z * 0.02));
  ret_1 = (ret_1 + ((texture (sampler_noise_lq, 
    (((uv_orig * texsize.xy) * (texsize_noise_lq.zw * 1.2)) + rand_frame.xy)
  ).xyz - 0.5) * 0.04));
  ret_1 = (ret_1 - ((ret_1.yzx * 0.1) - 0.02));
  vec4 tmpvar_12;
  tmpvar_12.w = 1.0;
  tmpvar_12.xyz = ret_1;
  ret = tmpvar_12.xyz;
 }`,comp:` shader_body { 
  vec2 tmpvar_1;
  tmpvar_1 = (texsize.zw * 8.0);
  vec3 tmpvar_2;
  tmpvar_2 = (((texture (sampler_blur1, 
    (uv + (vec2(1.0, 0.0) * tmpvar_1))
  ).xyz * scale1) + bias1) - ((texture (sampler_blur1, 
    (uv - (vec2(1.0, 0.0) * tmpvar_1))
  ).xyz * scale1) + bias1));
  vec3 tmpvar_3;
  tmpvar_3 = (((texture (sampler_blur1, 
    (uv + (vec2(0.0, 1.0) * tmpvar_1))
  ).xyz * scale1) + bias1) - ((texture (sampler_blur1, 
    (uv - (vec2(0.0, 1.0) * tmpvar_1))
  ).xyz * scale1) + bias1));
  vec2 tmpvar_4;
  tmpvar_4.x = q4;
  tmpvar_4.y = (1.0 - q8);
  vec2 tmpvar_5;
  tmpvar_5.x = tmpvar_2.y;
  tmpvar_5.y = tmpvar_3.y;
  vec2 x_6;
  x_6 = ((uv - (tmpvar_5 * 2.0)) - tmpvar_4);
  vec2 tmpvar_7;
  tmpvar_7.x = tmpvar_2.x;
  tmpvar_7.y = tmpvar_3.x;
  vec2 x_8;
  x_8 = ((uv - (tmpvar_7 * 2.0)) - tmpvar_4);
  vec2 tmpvar_9;
  tmpvar_9.x = tmpvar_2.z;
  tmpvar_9.y = tmpvar_3.z;
  vec2 x_10;
  x_10 = ((uv - (tmpvar_9 * 2.0)) - tmpvar_4);
  vec3 tmpvar_11;
  tmpvar_11.x = (1.1 - pow (sqrt(
    dot (x_8, x_8)
  ), 0.2));
  tmpvar_11.y = (1.1 - pow (sqrt(
    dot (x_6, x_6)
  ), 0.2));
  tmpvar_11.z = (1.1 - pow (sqrt(
    dot (x_10, x_10)
  ), 0.2));
  vec4 tmpvar_12;
  tmpvar_12.w = 1.0;
  tmpvar_12.xyz = ((tmpvar_11 * texture (sampler_main, uv).xyz) * 2.4);
  ret = tmpvar_12.xyz;
 }`}},function(o,l){o.exports={baseVals:{rating:0,gammaadj:1,decay:1,echo_zoom:1,echo_orient:2,wave_mode:1,wave_thick:1,wave_brighten:0,wrap:0,wave_a:.004,wave_scale:.01,wave_smoothing:0,wave_mystery:-.44,modwavealphastart:1,modwavealphaend:1,warpanimspeed:1.311,warpscale:8.311,zoomexp:5.20652,warp:.13291,wave_y:.04,ob_size:.005,ob_a:1,ib_size:0,ib_r:0,ib_g:0,ib_b:0,ib_a:1,mv_x:0,mv_y:0,mv_l:1,mv_g:.91,mv_b:.71,mv_a:0,b1ed:0},shapes:[{baseVals:{enabled:1,sides:100,additive:1,thickoutline:1,y:.75,rad:.07493,tex_zoom:.73458,g:1,g2:0,border_a:0},init_eqs_str:"a.q4=0;a.q8=0;a.vx=0;",frame_eqs_str:"a.x=a.q4;a.y=a.q8;"},{baseVals:{enabled:1,sides:100,additive:1,thickoutline:1,textured:1,x:.7,y:.3,rad:.6623,ang:2.45044,tex_zoom:.74934,g:.1,b:.1,r2:1,g2:.1,b2:.1,a2:1,border_a:0},init_eqs_str:"a.d=0;a.xx=0;a.q4=0;a.yy=0;a.q8=0;a.aang=0;a.xx=.5;a.yy=.4;",frame_eqs_str:"a.d=sqrt(sqr(a.xx-a.q4)+sqr(a.yy-a.q8));a.xx=.00001<Math.abs(below(a.d,.15))?.4+div(randint(200),1E3):a.xx;a.yy=.00001<Math.abs(below(a.d,.15))?.3+div(randint(400),1E3):a.yy;a.aang=.00001<Math.abs(below(a.d,.12))?div(randint(1E3),1E3):a.aang;a.ang=4*a.aang*Math.asin(1);a.x=a.xx;a.y=a.yy;"},{baseVals:{enabled:1,sides:100,additive:1,thickoutline:1,textured:1,x:.43,y:.6,rad:1.16781,ang:5.96903,tex_zoom:.67165,r2:1,g2:0,a2:1,border_a:0},init_eqs_str:"a.d=0;a.xx=0;a.q4=0;a.yy=0;a.q8=0;a.aang=0;a.xx=.5;a.yy=.4;",frame_eqs_str:"a.d=sqrt(sqr(a.xx-a.q4)+sqr(a.yy-a.q8));a.xx=.00001<Math.abs(below(a.d,.15))?.4+div(randint(200),1E3):a.xx;a.yy=.00001<Math.abs(below(a.d,.15))?.3+div(randint(400),1E3):a.yy;a.aang=.00001<Math.abs(below(a.d,.12))?div(randint(1E3),1E3):a.aang;a.ang=4*a.aang*Math.asin(1);a.x=a.xx;a.y=a.yy;"},{baseVals:{enabled:0}}],waves:[{baseVals:{enabled:0}},{baseVals:{enabled:0}},{baseVals:{enabled:0}},{baseVals:{enabled:0}}],init_eqs_str:"a.y3=0;a.y1=0;a.spx3=0;a.x1=0;a.vx3=0;a.q6=0;a.spy2=0;a.dt=0;a.spy3=0;a.q1=0;a.q5=0;a.spx2=0;a.vx4=0;a.spx4=0;a.grav=0;a.x3=0;a.ry4=0;a.xx2=0;a.q4=0;a.spy4=0;a.yy1=0;a.vy4=0;a.bounce=0;a.x4=0;a.x2=0;a.vy2=0;a.y2=0;a.q2=0;a.spring=0;a.vx2=0;a.q3=0;a.resist=0;a.y4=0;a.q7=0;a.vy3=0;a.xx1=0;a.q8=0;a.x1=0;a.y1=0;",frame_eqs_str:`a.decay=.25;a.xx1=.9*a.xx1+.01*a.bass;a.xx2=.9*a.xx2+.01*a.treb;a.yy1=.94*a.yy1+.0075*(a.treb+a.bass);a.x1=.5+2*(a.xx1-a.xx2);a.y1=.4+a.yy1;a.x1=Math.max(0,Math.min(1,a.x1));a.y1=Math.max(0,Math.min(1,a.y1));a.spring=50;a.grav=2;a.resist=5;a.bounce=.75;a.dt=div(.009,a.fps);a.spx2=(a.x1+a.x3-2*a.x2)*a.spring;a.spy2=(a.y1+a.y3-2*a.y2)*a.spring;a.spx3=(a.x2+a.x4-2*a.x3)*a.spring;a.spy3=(a.y2+a.y4-2*a.y3)*a.spring;a.spx4=(a.x3-a.x4)*a.spring;a.spy4=(a.y3-a.y4)*a.spring;a.vx2=a.vx2*
(1-a.resist*a.dt)+a.dt*a.spx2;a.vy2=a.vy2*(1-a.resist*a.dt)+a.dt*(a.spy2-a.grav);a.vx3=a.vx3*(1-a.resist*a.dt)+a.dt*a.spx3;a.vy3=a.vy3*(1-a.resist*a.dt)+a.dt*(a.spy3-a.grav);a.vx4=a.vx4*(1-a.resist*a.dt)+a.dt*a.spx4;a.vy4=a.vy4*(1-a.resist*a.dt)+a.dt*(a.spy4-a.grav);a.x2+=a.vx2;a.y2+=a.vy2;a.x3+=a.vx3;a.y3+=a.vy3;a.x4+=a.vx4;a.y4+=a.vy4;a.vx2=.00001<Math.abs(above(a.x2,.1))?a.vx2:Math.abs(a.vx2)*a.bounce;a.vx2=.00001<Math.abs(below(a.x2,.9))?a.vx2:-Math.abs(a.vx2)*a.bounce;a.vx3=.00001<Math.abs(above(a.x3,
.1))?a.vx3:Math.abs(a.vx3)*a.bounce;a.vx3=.00001<Math.abs(below(a.x3,.9))?a.vx3:-Math.abs(a.vx3)*a.bounce;a.vx4=.00001<Math.abs(above(a.x4,.1))?a.vx4:Math.abs(a.vx4)*a.bounce;a.vx4=.00001<Math.abs(below(a.x4,.9))?a.vx4:-Math.abs(a.vx4)*a.bounce;a.vy2=.00001<Math.abs(above(a.y2,0))?a.vy2:Math.abs(a.vy2)*a.bounce;a.vy2=.00001<Math.abs(below(a.y2,1))?a.vy2:-Math.abs(a.vy2)*a.bounce;a.vy3=.00001<Math.abs(above(a.y3,0))?a.vy3:Math.abs(a.vy3)*a.bounce;a.vy3=.00001<Math.abs(below(a.y3,1))?a.vy3:-Math.abs(a.vy3)*
a.bounce;a.vy4=.00001<Math.abs(above(a.y4,0))?a.vy4:Math.abs(a.vy4)*a.bounce;a.vy4=.00001<Math.abs(below(a.y4,1))?a.vy4:-Math.abs(a.vy4)*a.bounce;a.q1=a.x1;a.q2=a.x2;a.q3=a.x3;a.q4=a.x4;a.q5=a.y1;a.q6=a.y2;a.q7=a.y3;a.q8=a.y4;a.monitor=a.ry4;a.zoom=1.0004;`,pixel_eqs_str:"",pixel_eqs:"",warp:` shader_body { 
  vec2 my_uv_1;
  vec3 ret_2;
  float tmpvar_3;
  tmpvar_3 = (((texture (sampler_blur2, 
    (uv + vec2(0.005, 0.0))
  ).xyz * scale2) + bias2) - ((texture (sampler_blur2, 
    (uv - vec2(0.005, 0.0))
  ).xyz * scale2) + bias2)).y;
  float tmpvar_4;
  tmpvar_4 = (((texture (sampler_blur2, 
    (uv + vec2(0.0, 0.005))
  ).xyz * scale2) + bias2) - ((texture (sampler_blur2, 
    (uv - vec2(0.0, 0.005))
  ).xyz * scale2) + bias2)).y;
  vec2 tmpvar_5;
  tmpvar_5.x = tmpvar_3;
  tmpvar_5.y = tmpvar_4;
  vec2 tmpvar_6;
  tmpvar_6 = (uv - (tmpvar_5 * 0.01));
  ret_2.y = texture (sampler_fc_main, (tmpvar_6 - floor(tmpvar_6))).y;
  ret_2.y = (ret_2.y + ((ret_2.y - 
    ((texture (sampler_blur3, (tmpvar_6 - floor(tmpvar_6))).xyz * scale3) + bias3)
  .y) * 0.1));
  vec2 tmpvar_7;
  tmpvar_7 = floor(uv);
  ret_2.y = (ret_2.y + (0.006 - (
    ((texture (sampler_blur3, (uv - tmpvar_7)).xyz * scale3) + bias3)
  .x * 5.0)));
  ret_2.y = ret_2.y;
  vec2 tmpvar_8;
  tmpvar_8.x = -(tmpvar_4);
  tmpvar_8.y = tmpvar_3;
  my_uv_1 = (tmpvar_8 * 0.05);
  vec2 tmpvar_9;
  tmpvar_9.x = (((texture (sampler_blur2, 
    (uv + vec2(0.01, 0.0))
  ).xyz * scale2) + bias2) - ((texture (sampler_blur2, 
    (uv - vec2(0.01, 0.0))
  ).xyz * scale2) + bias2)).z;
  tmpvar_9.y = (((texture (sampler_blur2, 
    (uv + vec2(0.0, 0.01))
  ).xyz * scale2) + bias2) - ((texture (sampler_blur2, 
    (uv - vec2(0.0, 0.01))
  ).xyz * scale2) + bias2)).z;
  my_uv_1 = (my_uv_1 + (uv - (tmpvar_9 * 0.005)));
  ret_2.z = texture (sampler_fw_main, (my_uv_1 - floor(my_uv_1))).z;
  ret_2.z = (ret_2.z + ((ret_2.z - 
    ((texture (sampler_blur3, (my_uv_1 - floor(my_uv_1))).xyz * scale3) + bias3)
  .z) * 0.13));
  ret_2.z = (ret_2.z * 0.95);
  ret_2.z = (ret_2.z + ((0.03 - 
    ((texture (sampler_blur3, (uv - tmpvar_7)).xyz * scale3) + bias3)
  .x) - (texture (sampler_main, 
    (my_uv_1 - floor(my_uv_1))
  ).y * 0.05)));
  ret_2.x = (texture (sampler_main, uv_orig).x - 0.3);
  vec4 tmpvar_10;
  tmpvar_10.w = 1.0;
  tmpvar_10.xyz = ret_2;
  ret = tmpvar_10.xyz;
 }`,comp:` shader_body { 
  vec3 ret_1;
  vec2 tmpvar_2;
  tmpvar_2 = (texsize.zw * 8.0);
  vec3 tmpvar_3;
  tmpvar_3 = (((texture (sampler_blur1, 
    (uv + (vec2(1.0, 0.0) * tmpvar_2))
  ).xyz * scale1) + bias1) - ((texture (sampler_blur1, 
    (uv - (vec2(1.0, 0.0) * tmpvar_2))
  ).xyz * scale1) + bias1));
  vec3 tmpvar_4;
  tmpvar_4 = (((texture (sampler_blur1, 
    (uv + (vec2(0.0, 1.0) * tmpvar_2))
  ).xyz * scale1) + bias1) - ((texture (sampler_blur1, 
    (uv - (vec2(0.0, 1.0) * tmpvar_2))
  ).xyz * scale1) + bias1));
  vec2 tmpvar_5;
  tmpvar_5.x = tmpvar_3.y;
  tmpvar_5.y = tmpvar_4.y;
  vec2 tmpvar_6;
  tmpvar_6 = (uv + (tmpvar_5 * 0.1));
  vec4 tmpvar_7;
  tmpvar_7 = texture (sampler_main, uv);
  ret_1 = (((
    ((texture (sampler_blur2, tmpvar_6).xyz * scale2) + bias2)
  .x * 
    clamp ((1.0 - tmpvar_7.z), 0.0, 1.0)
  ) * pow (hue_shader.yxz, vec3(8.0, 8.0, 8.0))) * 3.0);
  ret_1 = (mix (ret_1, (
    pow (hue_shader.yzx, vec3(8.0, 8.0, 8.0))
   * 1.4), vec3((
    (texture (sampler_main, tmpvar_6).x * 0.8)
   + 
    ((texture (sampler_blur1, tmpvar_6).xyz * scale1) + bias1)
  .x))) * clamp ((1.0 - 
    (((texture (sampler_blur1, uv).xyz * scale1) + bias1).y * 4.0)
  ), 0.0, 1.0));
  vec2 tmpvar_8;
  tmpvar_8.x = tmpvar_3.y;
  tmpvar_8.y = tmpvar_4.y;
  vec3 tmpvar_9;
  vec3 tmpvar_10;
  tmpvar_10 = pow (hue_shader, vec3(8.0, 8.0, 8.0));
  tmpvar_9 = mix (mix (ret_1, vec3(1.0, 1.0, 1.0), (
    (tmpvar_10 * texture (sampler_main, clamp ((uv - (tmpvar_8 * 0.04)), 0.0, 1.0)).z)
   * 1.2)), (tmpvar_10.zxy * 1.8), tmpvar_7.yyy);
  ret_1 = tmpvar_9;
  vec4 tmpvar_11;
  tmpvar_11.w = 1.0;
  tmpvar_11.xyz = tmpvar_9;
  ret = tmpvar_11.xyz;
 }`}},function(o,l){o.exports={baseVals:{rating:5,gammaadj:1.56,decay:1,echo_zoom:.362,echo_orient:1,wave_thick:1,wave_brighten:0,darken:1,wave_a:.001,wave_scale:1.599,wave_smoothing:0,wave_mystery:-.5,modwavealphastart:2,modwavealphaend:2,warpscale:.107,zoomexp:.1584,fshader:1,warp:.01,wave_r:.51,wave_g:.5,ob_size:0,ob_a:1,ib_r:0,ib_g:0,ib_b:0,ib_a:1,mv_x:64,mv_y:48,mv_l:.5,mv_r:0,mv_g:0,mv_b:0,mv_a:0},shapes:[{baseVals:{enabled:0}},{baseVals:{enabled:0}},{baseVals:{enabled:0}},{baseVals:{enabled:0}}],waves:[{baseVals:{enabled:0}},{baseVals:{enabled:0}},{baseVals:{enabled:0}},{baseVals:{enabled:0}}],init_eqs_str:"a.d=0;a.y3=0;a.y1=0;a.xx=0;a.s=0;a.q12=0;a.x1=0;a.vx3=0;a.q6=0;a.dt=0;a.q1=0;a.q5=0;a.v=0;a.vx4=0;a.mm=0;a.tt=0;a.grav=0;a.x3=0;a.xx2=0;a.q4=0;a.a=0;a.yy1=0;a.vy4=0;a.dir=0;a.bounce=0;a.x4=0;a.t=0;a.r=0;a.x2=0;a.mx=0;a.mn=0;a.vy2=0;a.y2=0;a.bb=0;a.q2=0;a.spring=0;a.vx2=0;a.q3=0;a.resist=0;a.yy=0;a.y4=0;a.vy3=0;a.xx1=0;a.q8=0;a.q11=div(.5,Math.asin(1));",frame_eqs_str:`a.ib_r=.3*Math.sin(5*a.time)+.7;a.ib_g=.3*Math.sin(4*a.time)+.3;a.ib_b=.5*Math.sin(4*div(a.time,3))+.5;a.xx1=.9*a.xx1+.01*a.bass;a.xx2=.9*a.xx2+.01*a.treb;a.yy1=.94*a.yy1+.0075*(a.treb+a.bass);a.x1=.5+3*(a.xx1-a.xx2);a.y1=.4+a.yy1;a.x1=Math.max(0,Math.min(1,a.x1));a.y1=Math.max(0,Math.min(1,a.y1));a.spring=25;a.grav=1.1;a.resist=1;a.bounce=.85;a.dt=.0002*div(60,a.fps);a.vx2=a.vx2*(1-a.resist*a.dt)+a.dt*(a.x1+a.x3-2*a.x2)*a.spring;a.vy2=a.vy2*(1-a.resist*a.dt)+a.dt*((a.y1+a.y3-
2*a.y2)*a.spring-a.grav);a.vx3=a.vx3*(1-a.resist*a.dt)+a.dt*(a.x2+a.x4-2*a.x3)*a.spring;a.vy3=a.vy3*(1-a.resist*a.dt)+a.dt*((a.y2+a.y4-2*a.y3)*a.spring-a.grav);a.vx4=a.vx4*(1-a.resist*a.dt)+a.dt*(a.x3-a.x4)*a.spring;a.vy4=a.vy4*(1-a.resist*a.dt)+a.dt*((a.y3-a.y4)*a.spring-a.grav);a.x2+=a.vx2;a.y2+=a.vy2;a.x3+=a.vx3;a.y3+=a.vy3;a.x4+=a.vx4;a.y4+=a.vy4;a.vx2=.00001<Math.abs(above(a.x2,0))?a.vx2:Math.abs(a.vx2)*a.bounce;a.vx2=.00001<Math.abs(below(a.x2,1))?a.vx2:-Math.abs(a.vx2)*a.bounce;a.vx3=.00001<
Math.abs(above(a.x3,0))?a.vx3:Math.abs(a.vx3)*a.bounce;a.vx3=.00001<Math.abs(below(a.x3,1))?a.vx3:-Math.abs(a.vx3)*a.bounce;a.vx4=.00001<Math.abs(above(a.x4,0))?a.vx4:Math.abs(a.vx4)*a.bounce;a.vx4=.00001<Math.abs(below(a.x4,1))?a.vx4:-Math.abs(a.vx4)*a.bounce;a.vy2=.00001<Math.abs(above(a.y2,0))?a.vy2:Math.abs(a.vy2)*a.bounce;a.vy2=.00001<Math.abs(below(a.y2,1))?a.vy2:-Math.abs(a.vy2)*a.bounce;a.vy3=.00001<Math.abs(above(a.y3,0))?a.vy3:Math.abs(a.vy3)*a.bounce;a.vy3=.00001<Math.abs(below(a.y3,1))?
a.vy3:-Math.abs(a.vy3)*a.bounce;a.vy4=.00001<Math.abs(above(a.y4,0))?a.vy4:Math.abs(a.vy4)*a.bounce;a.vy4=.00001<Math.abs(below(a.y4,1))?a.vy4:-Math.abs(a.vy4)*a.bounce;a.q4=a.x4;a.q8=a.y4;a.q1=a.aspectx;a.q2=a.aspecty;a.zoom=1;a.warp=0;a.bb=.99*a.bb+.02*a.bass;a.mm=.99*a.mm+.02*a.mid;a.tt=.99*a.tt+.02*a.treb;a.mx=Math.max(Math.max(a.bb,a.mm),a.tt);a.mn=Math.min(Math.min(a.bb,a.mm),a.tt);a.ob_r=div(a.bb-a.mn,a.mx-a.mn);a.ob_b=div(a.mm-a.mn,a.mx-a.mn);a.ob_g=div(a.tt-a.mn,a.mx-a.mn);a.q6=Math.atan2(a.vx4,
a.vy4);a.q5=sqrt(a.vx4*a.vx4+a.vy4*a.vy4);a.a=.95*a.a+a.q5;a.s=.9*a.s+a.a;a.q3=.1*a.s;a.t+=div(.1,a.fps);a.t=.00001<Math.abs(above(a.t,2))?a.t-2:a.t;a.q12=-a.t;a.monitor=a.t;a.wave_a=0;`,pixel_eqs_str:"a.x=.5+(a.x-.5)*a.q1;a.y=.5+(a.y-.5)*a.q2;a.dir=-a.q6+0*Math.asin(1);a.xx=a.q4;a.yy=1-a.q8;a.dx=0;a.dy=0;a.d=sqrt((a.x-a.xx)*(a.x-a.xx)+(a.y-a.yy)*(a.y-a.yy));a.r=.08;a.v=-15*a.q5;a.dx=a.v*Math.sin(a.dir)*(a.r-a.d)*(1-sigmoid(a.d-a.r,200))*a.q2;a.dy=a.v*Math.cos(a.dir)*(a.r-a.d)*(1-sigmoid(a.d-a.r,200))*a.q1;",warp:` shader_body { 
  vec3 tmpvar_1;
  vec4 tmpvar_2;
  tmpvar_2 = texture (sampler_main, uv);
  tmpvar_1 = vec3((((tmpvar_2.x + tmpvar_2.y) + tmpvar_2.z) * 0.33333));
  vec4 tmpvar_3;
  tmpvar_3.w = 1.0;
  tmpvar_3.xyz = ((texture (sampler_main, clamp (
    (uv - ((vec2(0.0, 0.0168) * (tmpvar_1 - 0.35).xy) * (tmpvar_1 - 0.4).xy))
  , 0.0, 1.0)).xyz - 0.001) + ((texture (sampler_noise_lq, 
    (((uv_orig * texsize.xy) * (texsize_noise_lq.zw * 2.0)) + rand_frame.xy)
  ) - 0.5) * 0.04).xyz);
  ret = tmpvar_3.xyz;
 }`,comp:` shader_body { 
  vec2 tmpvar_1;
  tmpvar_1 = ((uv - 0.5).yx * aspect.zw);
  float tmpvar_2;
  float tmpvar_3;
  tmpvar_3 = (min (abs(
    (tmpvar_1.x / tmpvar_1.y)
  ), 1.0) / max (abs(
    (tmpvar_1.x / tmpvar_1.y)
  ), 1.0));
  float tmpvar_4;
  tmpvar_4 = (tmpvar_3 * tmpvar_3);
  tmpvar_4 = (((
    ((((
      ((((-0.01213232 * tmpvar_4) + 0.05368138) * tmpvar_4) - 0.1173503)
     * tmpvar_4) + 0.1938925) * tmpvar_4) - 0.3326756)
   * tmpvar_4) + 0.9999793) * tmpvar_3);
  tmpvar_4 = (tmpvar_4 + (float(
    (abs((tmpvar_1.x / tmpvar_1.y)) > 1.0)
  ) * (
    (tmpvar_4 * -2.0)
   + 1.570796)));
  tmpvar_2 = (tmpvar_4 * sign((tmpvar_1.x / tmpvar_1.y)));
  if ((abs(tmpvar_1.y) > (1e-08 * abs(tmpvar_1.x)))) {
    if ((tmpvar_1.y < 0.0)) {
      if ((tmpvar_1.x >= 0.0)) {
        tmpvar_2 += 3.141593;
      } else {
        tmpvar_2 = (tmpvar_2 - 3.141593);
      };
    };
  } else {
    tmpvar_2 = (sign(tmpvar_1.x) * 1.570796);
  };
  vec2 tmpvar_5;
  tmpvar_5.x = (tmpvar_2 * q11);
  tmpvar_5.y = (((0.5 * 
    log(sqrt(dot (tmpvar_1, tmpvar_1)))
  ) - (tmpvar_2 * q11)) + q12);
  vec4 tmpvar_6;
  tmpvar_6.w = 1.0;
  tmpvar_6.xyz = pow (texture (sampler_main, (0.5 + (
    (0.5 - abs(((
      fract((tmpvar_5 * 0.5))
     * 2.0) - 1.0)))
   * vec2(0.96, 1.0)))).xyz, vec3(0.618034, 0.618034, 0.618034));
  ret = tmpvar_6.xyz;
 }`}},function(o,l){o.exports={baseVals:{rating:4,gammaadj:1,decay:1,echo_zoom:1,echo_alpha:.5,wave_thick:1,wave_brighten:0,wave_a:.004,wave_scale:.01,wave_smoothing:0,wave_mystery:-.44,modwavealphastart:1,modwavealphaend:1,warpanimspeed:.01,warpscale:100,zoomexp:.24298,zoom:.9901,warp:.01,wave_y:.04,ob_size:0,ob_g:1,ib_size:0,ib_r:0,ib_g:0,ib_b:0,mv_x:64,mv_y:48,mv_l:0,mv_b:0,mv_a:0,b1ed:0},shapes:[{baseVals:{enabled:1,sides:100,thickoutline:1,rad:.01,tex_ang:.12566,tex_zoom:1.51878,r:.05,a:.1,g2:0,border_a:0},init_eqs_str:"",frame_eqs_str:""},{baseVals:{enabled:0}},{baseVals:{enabled:0}},{baseVals:{enabled:0}}],waves:[{baseVals:{enabled:0}},{baseVals:{enabled:0}},{baseVals:{enabled:0}},{baseVals:{enabled:0}}],init_eqs_str:"a.x1=.9;a.y1=.5;a.x2=.5;a.y2=.5;a.x3=.5;a.y3=.5;a.x4=.5;a.y4=.5;",frame_eqs_str:"a.zoom=1;a.warp=0;",pixel_eqs_str:"",pixel_eqs:"",warp:` shader_body { 
  vec2 my_uv_1;
  vec3 ret_2;
  vec2 tmpvar_3;
  tmpvar_3 = (0.02 * aspect.zw);
  vec3 tmpvar_4;
  tmpvar_4 = (((texture (sampler_blur2, 
    ((uv + (vec2(1.0, 0.0) * tmpvar_3)) - floor((uv + (vec2(1.0, 0.0) * tmpvar_3))))
  ).xyz * scale2) + bias2) - ((texture (sampler_blur2, 
    ((uv - (vec2(1.0, 0.0) * tmpvar_3)) - floor((uv - (vec2(1.0, 0.0) * tmpvar_3))))
  ).xyz * scale2) + bias2));
  vec3 tmpvar_5;
  tmpvar_5 = (((texture (sampler_blur2, 
    ((uv + (vec2(0.0, 1.0) * tmpvar_3)) - floor((uv + (vec2(0.0, 1.0) * tmpvar_3))))
  ).xyz * scale2) + bias2) - ((texture (sampler_blur2, 
    ((uv - (vec2(0.0, 1.0) * tmpvar_3)) - floor((uv - (vec2(0.0, 1.0) * tmpvar_3))))
  ).xyz * scale2) + bias2));
  vec3 tmpvar_6;
  tmpvar_6 = ((texture (sampler_blur1, uv).xyz * scale1) + bias1);
  vec2 tmpvar_7;
  tmpvar_7.x = tmpvar_4.y;
  tmpvar_7.y = tmpvar_5.y;
  vec2 tmpvar_8;
  tmpvar_8.x = tmpvar_5.x;
  tmpvar_8.y = -(tmpvar_4.x);
  vec2 tmpvar_9;
  tmpvar_9 = ((uv - (tmpvar_7 * vec2(0.01, 0.01))) - (tmpvar_8 * -0.02));
  ret_2.y = texture (sampler_fc_main, (tmpvar_9 - floor(tmpvar_9))).y;
  ret_2.y = (ret_2.y + ((
    (ret_2.y - tmpvar_6.y)
   * 0.02) + 0.005));
  vec2 tmpvar_10;
  tmpvar_10.x = tmpvar_4.x;
  tmpvar_10.y = tmpvar_5.x;
  vec2 tmpvar_11;
  tmpvar_11.x = tmpvar_5.z;
  tmpvar_11.y = -(tmpvar_4.z);
  my_uv_1 = ((uv - (tmpvar_10 * vec2(0.01, 0.01))) - (tmpvar_11 * -0.02));
  ret_2.x = texture (sampler_fc_main, (my_uv_1 - floor(my_uv_1))).x;
  ret_2.x = (ret_2.x + ((
    (ret_2.x - tmpvar_6.x)
   * 0.02) + 0.005));
  vec2 tmpvar_12;
  tmpvar_12.x = tmpvar_4.z;
  tmpvar_12.y = tmpvar_5.z;
  vec2 tmpvar_13;
  tmpvar_13.x = tmpvar_5.y;
  tmpvar_13.y = -(tmpvar_4.y);
  my_uv_1 = ((uv - (tmpvar_12 * vec2(0.01, 0.01))) - (tmpvar_13 * -0.02));
  ret_2.z = texture (sampler_fc_main, (my_uv_1 - floor(my_uv_1))).z;
  ret_2.z = (ret_2.z + ((
    (ret_2.z - tmpvar_6.z)
   * 0.02) + 0.005));
  vec4 tmpvar_14;
  tmpvar_14.w = 1.0;
  tmpvar_14.xyz = ret_2;
  ret = tmpvar_14.xyz;
 }`,comp:` shader_body { 
  vec2 uv2_1;
  vec3 ret_2;
  uv2_1 = (uv + (vec2(1.0, 0.0) * texsize.zw));
  float tmpvar_3;
  tmpvar_3 = (((texture (sampler_main, uv2_1).xyz + 
    (((texture (sampler_blur1, uv2_1).xyz * scale1) + bias1) * 0.4)
  ) + (
    ((texture (sampler_blur2, uv2_1).xyz * scale2) + bias2)
   * 0.15)) + ((
    (texture (sampler_blur3, uv2_1).xyz * scale3)
   + bias3) * 0.1)).x;
  uv2_1 = (uv + (vec2(-1.0, 0.0) * texsize.zw));
  float tmpvar_4;
  tmpvar_4 = (((texture (sampler_main, uv2_1).xyz + 
    (((texture (sampler_blur1, uv2_1).xyz * scale1) + bias1) * 0.4)
  ) + (
    ((texture (sampler_blur2, uv2_1).xyz * scale2) + bias2)
   * 0.15)) + ((
    (texture (sampler_blur3, uv2_1).xyz * scale3)
   + bias3) * 0.1)).x;
  uv2_1 = (uv + (vec2(0.0, 1.0) * texsize.zw));
  float tmpvar_5;
  tmpvar_5 = (((texture (sampler_main, uv2_1).xyz + 
    (((texture (sampler_blur1, uv2_1).xyz * scale1) + bias1) * 0.4)
  ) + (
    ((texture (sampler_blur2, uv2_1).xyz * scale2) + bias2)
   * 0.15)) + ((
    (texture (sampler_blur3, uv2_1).xyz * scale3)
   + bias3) * 0.1)).x;
  uv2_1 = (uv + (vec2(0.0, -1.0) * texsize.zw));
  vec3 tmpvar_6;
  tmpvar_6.z = 0.14;
  tmpvar_6.x = (tmpvar_3 - tmpvar_4);
  tmpvar_6.y = (tmpvar_5 - ((
    (texture (sampler_main, uv2_1).xyz + (((texture (sampler_blur1, uv2_1).xyz * scale1) + bias1) * 0.4))
   + 
    (((texture (sampler_blur2, uv2_1).xyz * scale2) + bias2) * 0.15)
  ) + (
    ((texture (sampler_blur3, uv2_1).xyz * scale3) + bias3)
   * 0.1)).x);
  ret_2 = (0.5 + (0.5 * normalize(tmpvar_6)));
  vec2 x_7;
  x_7 = (ret_2.xy - 0.5);
  ret_2 = (ret_2 * clamp ((
    sqrt(dot (x_7, x_7))
   * 5.0), 0.0, 1.0));
  ret_2 = ret_2.xxy;
  ret_2 = (ret_2 + 1.15);
  ret_2 = (ret_2 * mix (ret_2, (ret_2 * 
    (((texture (sampler_blur3, uv).xyz * scale3) + bias3) - ((texture (sampler_blur1, uv).xyz * scale1) + bias1))
  ), pow (hue_shader.zxy, ret_2)));
  ret_2 = (ret_2 * ret_2);
  vec4 tmpvar_8;
  tmpvar_8.w = 1.0;
  tmpvar_8.xyz = ret_2;
  ret = tmpvar_8.xyz;
 }`}},function(o,l){o.exports={baseVals:{rating:5,gammaadj:1,decay:1,echo_zoom:1,echo_alpha:.5,wave_thick:1,wave_brighten:0,wrap:0,wave_a:.004,wave_scale:.242,wave_smoothing:0,wave_mystery:-.44,modwavealphastart:1,modwavealphaend:1,warpanimspeed:.397,warpscale:15.099,zoomexp:.65309,zoom:.87866,warp:.04027,wave_y:.04,ob_size:0,ob_a:1,ib_size:0,ib_r:0,ib_g:0,ib_b:0,ib_a:1,mv_x:64,mv_y:48,mv_l:0,mv_b:0,mv_a:0},shapes:[{baseVals:{enabled:1,sides:100,thickoutline:1,y:.04,rad:.01,tex_ang:.12566,tex_zoom:1.51878,r:0,a:0,g2:0,b2:.01,border_a:0},init_eqs_str:"",frame_eqs_str:""},{baseVals:{enabled:0}},{baseVals:{enabled:0}},{baseVals:{enabled:0}}],waves:[{baseVals:{enabled:1,thick:1,additive:1,scaling:2.0231,smoothing:0,r:0,b:0},init_eqs_str:"a.tt3=0;a.tt2=0;a.tt1=0;a.d=0;a.t2=0;a.t3=0;a.t4=0;a.cl=0;",frame_eqs_str:"a.r=1;a.g=0;a.b=1;",point_eqs_str:"a.tt3=.6*a.tt3+1*a.value1;a.tt2=.7*a.tt2+.2*a.tt3;a.tt1=.8*a.tt1+.1*a.tt2;a.d=.9*a.d+.2*a.tt1;a.y=.6+a.d*a.sample*(1-a.sample)*2;a.x=-.05+1.1*a.sample;"},{baseVals:{enabled:0}},{baseVals:{enabled:0}},{baseVals:{enabled:0}}],init_eqs_str:"a.c_inv_i=0;a.translation_x=0;a.q12=0;a.a_i=0;a.a_r=0;a.q18=0;a.q13=0;a.scale=0;a.q15=0;a.c_inv_r=0;a.angle=0;a.q11=0;a.bcad_r=0;a.b_r=0;a.q16=0;a.bcad_i=0;a.q17=0;a.q14=0;a.translation_y=0;a.translation_v=0;a.b_i=0;a.translation_u=0;a.x1=.9;a.y1=.5;a.x2=.5;a.y2=.5;a.x3=.5;a.y3=.5;a.x4=.5;a.y4=.5;",frame_eqs_str:`a.zoom=.998;a.scale=1;a.angle=.02*a.time;a.translation_x=0;a.translation_y=.12;a.a_r=Math.cos(a.angle)*a.scale;a.a_i=Math.sin(a.angle)*a.scale;a.b_r=a.translation_x;a.b_i=a.translation_y;a.scale=1;a.angle=0*Math.sin(.1337*a.time);a.translation_u=0;a.translation_v=-.2;a.q15=Math.cos(a.angle)*a.scale;a.q16=Math.sin(a.angle)*a.scale;a.q17=a.translation_u;a.q18=a.translation_v;a.c_inv_r=div(a.q15,a.q15*a.q15+a.q16*a.q16);a.c_inv_i=div(a.q16,a.q15*a.q15+a.q16*a.q16);a.q11=a.a_r*
a.c_inv_r-a.a_i*a.c_inv_i;a.q12=a.a_r*a.c_inv_i-a.a_i*a.c_inv_r;a.bcad_r=a.b_r*a.q15-a.b_i*a.q16-(a.a_r*a.q17-a.a_i*a.q18);a.bcad_i=a.b_r*a.q16-a.b_i*a.q15-(a.a_r*a.q18-a.a_i*a.q17);a.q13=a.bcad_r*a.c_inv_r-a.bcad_i*a.c_inv_i;a.q14=a.bcad_r*a.c_inv_i-a.bcad_i*a.c_inv_r;`,pixel_eqs_str:"",pixel_eqs:"",warp:` shader_body { 
  float conway_1;
  vec3 ret_2;
  vec2 tmpvar_3;
  tmpvar_3.x = (((
    ((texture (sampler_blur2, (uv + vec2(0.02, 0.0))).xyz * scale2) + bias2)
   - 
    ((texture (sampler_blur2, (uv - vec2(0.02, 0.0))).xyz * scale2) + bias2)
  ).y * 1280.0) * texsize.z);
  tmpvar_3.y = (((
    ((texture (sampler_blur2, (uv + vec2(0.0, 0.02))).xyz * scale2) + bias2)
   - 
    ((texture (sampler_blur2, (uv - vec2(0.0, 0.02))).xyz * scale2) + bias2)
  ).y * 1024.0) * texsize.w);
  ret_2.y = texture (sampler_pc_main, (uv - (tmpvar_3 * 0.004))).y;
  ret_2.y = (ret_2.y + ((
    ((ret_2.y - ((texture (sampler_blur1, uv).xyz * scale1) + bias1).y) - 0.1)
   * 0.1) + 0.02));
  ret_2.z = (texture (sampler_fc_main, (0.5 + (
    (uv - 0.5)
   * 0.992))).z - 0.004);
  conway_1 = (texture (sampler_pw_main, (uv_orig - texsize.zw)).x + texture (sampler_pw_main, (uv_orig + (vec2(0.0, -1.0) * texsize.zw))).x);
  conway_1 = (conway_1 + texture (sampler_pw_main, (uv_orig + (vec2(1.0, -1.0) * texsize.zw))).x);
  conway_1 = (conway_1 + texture (sampler_pw_main, (uv_orig + (vec2(-1.0, 0.0) * texsize.zw))).x);
  conway_1 = (conway_1 + texture (sampler_pw_main, (uv_orig + (vec2(1.0, 0.0) * texsize.zw))).x);
  conway_1 = (conway_1 + texture (sampler_pw_main, (uv_orig + (vec2(-1.0, 1.0) * texsize.zw))).x);
  conway_1 = (conway_1 + texture (sampler_pw_main, (uv_orig + (vec2(0.0, 1.0) * texsize.zw))).x);
  conway_1 = (conway_1 + texture (sampler_pw_main, (uv_orig + texsize.zw)).x);
  conway_1 = (conway_1 - fract(conway_1));
  float tmpvar_4;
  tmpvar_4 = clamp (texture (sampler_pc_main, uv_orig).x, 0.0, 1.0);
  ret_2.x = (clamp ((1.0 - 
    abs((conway_1 - 3.0))
  ), 0.0, 1.0) * (1.0 - tmpvar_4));
  ret_2.x = (ret_2.x + (clamp (
    max ((1.0 - abs((conway_1 - 2.0))), (1.0 - abs((conway_1 - 3.0))))
  , 0.0, 1.0) * tmpvar_4));
  vec4 tmpvar_5;
  tmpvar_5.w = 1.0;
  tmpvar_5.xyz = ret_2;
  ret = tmpvar_5.xyz;
 }`,comp:` shader_body { 
  vec2 moebius_1;
  vec3 ret_2;
  vec2 tmpvar_3;
  tmpvar_3.x = q11;
  tmpvar_3.y = q12;
  vec2 tmpvar_4;
  tmpvar_4.x = q17;
  tmpvar_4.y = q18;
  vec2 tmpvar_5;
  vec2 tmpvar_6;
  tmpvar_6 = (uv - 0.5);
  tmpvar_5 = (tmpvar_6 * aspect.xy);
  vec2 tmpvar_7;
  tmpvar_7.x = ((tmpvar_5.x * q15) - (tmpvar_5.y * q16));
  tmpvar_7.y = ((tmpvar_5.x * q16) - (tmpvar_5.y * q15));
  vec2 tmpvar_8;
  tmpvar_8 = (tmpvar_7 + tmpvar_4);
  vec2 tmpvar_9;
  tmpvar_9.x = ((q13 * tmpvar_8.x) + (q14 * tmpvar_8.y));
  tmpvar_9.y = ((q14 * tmpvar_8.x) - (q13 * tmpvar_8.y));
  moebius_1 = (((tmpvar_9 / 
    ((tmpvar_8.x * tmpvar_8.x) + (tmpvar_8.y * tmpvar_8.y))
  ) + tmpvar_3) * 0.5);
  float tmpvar_10;
  tmpvar_10 = sqrt(dot (moebius_1, moebius_1));
  moebius_1 = (0.5 + ((
    (1.0 - abs(((
      fract((moebius_1 * 0.5))
     * 2.0) - 1.0)))
   - 0.5) * 0.99));
  vec3 tmpvar_11;
  tmpvar_11 = mix (mix (mix (
    mix (mix ((mix (ret_2, vec3(0.2, 0.6, 1.0), vec3(
      (texture (sampler_pc_main, moebius_1).y * 2.0)
    )) * (vec3(1.0, 1.0, 1.0) - vec3(
      ((((texture (sampler_blur1, 
        (0.5 + (tmpvar_6 * 0.5))
      ).xyz * scale1) + bias1).y * 2.0) * tmpvar_10)
    ))), vec3(1.0, 1.0, 1.0), texture (sampler_pc_main, moebius_1).xxx), vec3(4.0, 1.0, 0.0), vec3(clamp (((texture (sampler_pc_main, 
      (0.5 + (tmpvar_6 * 0.2))
    ).y * 2.0) * (
      (tmpvar_10 * tmpvar_10)
     * tmpvar_10)), 0.0, 1.0)))
  , vec3(0.1, 0.0, 0.0), vec3(
    clamp ((((texture (sampler_blur1, 
      (0.5 + (tmpvar_6 * 0.2))
    ).xyz * scale1) + bias1).x * 12.0), 0.0, 1.0)
  )), (vec3(0.5, 0.8, 1.0) * texture (sampler_pc_main, uv).z), vec3((
    clamp ((((texture (sampler_blur1, 
      (0.5 + (tmpvar_6 * 0.2))
    ).xyz * scale1) + bias1).x * 4.0), 0.0, 1.0)
   * 1.4))), vec3(1.0, 1.0, 1.0), texture (sampler_pc_main, (0.5 + (tmpvar_6 * 0.2))).xxx);
  ret_2 = tmpvar_11;
  vec4 tmpvar_12;
  tmpvar_12.w = 1.0;
  tmpvar_12.xyz = tmpvar_11;
  ret = tmpvar_12.xyz;
 }`}},function(o,l){o.exports={baseVals:{rating:5,gammaadj:1.56,decay:1,echo_zoom:.362,echo_orient:1,wave_mode:7,additivewave:1,modwavealphabyvolume:1,wave_brighten:0,darken:1,wave_a:.001,wave_scale:1.286,wave_smoothing:.63,modwavealphastart:.71,modwavealphaend:1.3,warpscale:1.331,fshader:1,zoom:1.004,warp:.19788,sx:.99967,sy:.9999,wave_g:.65,wave_b:.65,ob_size:0,ob_a:1,mv_x:64,mv_y:48,mv_l:0,mv_a:0},shapes:[{baseVals:{enabled:0}},{baseVals:{enabled:0}},{baseVals:{enabled:0}},{baseVals:{enabled:0}}],waves:[{baseVals:{enabled:1,thick:1,r:0,g:.3,b:.75},init_eqs_str:"a.ma=0;a.mx=0;a.my=0;",frame_eqs_str:"",point_eqs_str:"a.ma+=3.1415*above(a.bass,1)*.01*a.bass;a.ma-=3.1415*above(a.treb,1)*.01*a.treb;a.mx+=.0002*Math.cos(a.ma);a.my+=.0002*Math.sin(a.ma);a.mx=.00001<Math.abs(above(a.mx,.9))?.9-a.mx:a.mx;a.my=.00001<Math.abs(above(a.my,.9))?.9-a.my:a.my;a.mx=.00001<Math.abs(below(a.mx,.1))?.9+a.mx:a.mx;a.my=.00001<Math.abs(below(a.my,.1))?.9+a.my:a.my;a.x=a.mx;a.y=a.my;a.a=above(a.bass+a.mid+a.treb,.8);"},{baseVals:{enabled:1,thick:1,r:0,b:0},init_eqs_str:"a.ma=0;a.mx=0;a.my=0;",frame_eqs_str:"",point_eqs_str:"a.ma+=3.1415*above(a.bass,1)*.05*a.bass;a.ma-=3.1415*above(a.mid,1)*.05*a.mid;a.mx+=.0001*Math.cos(a.ma);a.my+=.0001*Math.sin(a.ma);a.mx=.00001<Math.abs(above(a.mx,.9))?.9-a.mx:a.mx;a.my=.00001<Math.abs(above(a.my,.9))?.9-a.my:a.my;a.mx=.00001<Math.abs(below(a.mx,.1))?.9+a.mx:a.mx;a.my=.00001<Math.abs(below(a.my,.1))?.9+a.my:a.my;a.x=a.mx;a.y=a.my;a.a=above(a.bass+a.mid+a.treb,.1);"},{baseVals:{enabled:1,thick:1,g:.5,b:0},init_eqs_str:"a.ma=0;a.mx=0;a.my=0;",frame_eqs_str:"",point_eqs_str:"a.ma+=3.1415*above(a.mid,1)*.01*a.mid;a.ma-=3.1415*above(a.treb,1)*.01*a.treb;a.mx+=.0004*Math.cos(a.ma);a.my+=.0004*Math.sin(a.ma);a.mx=.00001<Math.abs(above(a.mx,.9))?.9-a.mx:a.mx;a.my=.00001<Math.abs(above(a.my,.9))?.9-a.my:a.my;a.mx=.00001<Math.abs(below(a.mx,.1))?.9+a.mx:a.mx;a.my=.00001<Math.abs(below(a.my,.1))?.9+a.my:a.my;a.x=a.mx;a.y=a.my;a.a=above(a.bass+a.mid+a.treb,.3);"},{baseVals:{enabled:1,thick:1,r:.4,g:0,b:.6},init_eqs_str:"a.ma=0;a.mx=0;a.my=0;",frame_eqs_str:"",point_eqs_str:"a.ma+=3.1415*above(a.bass,.5)*.02*a.bass;a.ma-=3.1415*above(a.treb,.5)*.02*a.treb;a.mx+=.0008*Math.cos(a.ma);a.my+=.0008*Math.sin(a.ma);a.mx=.00001<Math.abs(above(a.mx,.9))?.9-a.mx:a.mx;a.my=.00001<Math.abs(above(a.my,.9))?.9-a.my:a.my;a.mx=.00001<Math.abs(below(a.mx,.1))?.9+a.mx:a.mx;a.my=.00001<Math.abs(below(a.my,.1))?.9+a.my:a.my;a.x=a.mx;a.y=a.my;a.a=above(a.bass+a.mid+a.treb,.2);"}],init_eqs_str:"a.du=0;a.q1=0;a.mm=0;a.tt=0;a.mult=0;a.ang2=0;a.dv=0;a.mx=0;a.mn=0;a.bb=0;a.q2=0;a.dist=0;",frame_eqs_str:`a.wave_r+=.2*(.6*Math.sin(.98*a.time)+.4*Math.sin(1.047*a.time));a.wave_g+=.2*(.6*Math.sin(.835*a.time)+.4*Math.sin(1.081*a.time));a.wave_b+=.2*(.6*Math.sin(.814*a.time)+.4*Math.sin(1.011*a.time));a.q1=2*a.cx-1+.6*(.6*Math.sin(.374*a.time)+.4*Math.sin(.294*a.time));a.q2=2*a.cy-1+.6*(.6*Math.sin(.393*a.time)+.4*Math.sin(.223*a.time));a.warp=0;a.zoom=1;a.bb=.99*a.bb+.02*a.bass;a.mm=.99*a.mm+.02*a.mid;a.tt=.99*a.tt+.02*a.treb;a.mx=Math.max(Math.max(a.bb,a.mm),a.tt);a.mn=Math.min(Math.min(a.bb,
a.mm),a.tt);a.ob_r=div(a.bb-a.mn,a.mx-a.mn);a.ob_b=div(a.mm-a.mn,a.mx-a.mn);a.ob_g=div(a.tt-a.mn,a.mx-a.mn);`,pixel_eqs_str:"a.du=2*a.x-1-a.q1;a.dv=2*a.y-1-a.q2;a.dist=sqrt(a.du*a.du+a.dv*a.dv);a.ang2=Math.atan2(a.du,a.dv)+.15*a.time;a.mult=.05*Math.sin(.05*a.dist);a.dx=a.mult*Math.sin(2*a.ang2-1.5);a.dy=a.mult*Math.cos(2*a.ang2-1.5);",warp:` shader_body { 
  vec4 tmpvar_1;
  tmpvar_1.w = 1.0;
  vec4 tmpvar_2;
  tmpvar_2 = texture (sampler_main, uv);
  tmpvar_1.xyz = ((texture (sampler_main, clamp (
    (uv - (((vec2(0.0, 64.0) * texsize.zw) * dot (
      (tmpvar_2.xyz - 0.35)
    , vec3(0.32, 0.49, 0.29))) * (dot (tmpvar_2.xyz, vec3(0.32, 0.49, 0.29)) - 0.4)))
  , 0.0, 1.0)).xyz - 0.0011) + ((texture (sampler_noise_lq, 
    (((uv_orig * texsize.xy) * (texsize_noise_lq.zw * 1.5)) + rand_frame.xy)
  ) - 0.5) * 0.0038).xyz);
  ret = tmpvar_1.xyz;
 }`,comp:` shader_body { 
  vec2 uv1_1;
  vec2 tmpvar_2;
  tmpvar_2.y = 0.0;
  tmpvar_2.x = texsize.z;
  vec2 tmpvar_3;
  tmpvar_3.x = 0.0;
  tmpvar_3.y = texsize.w;
  vec2 tmpvar_4;
  tmpvar_4.x = (texture (sampler_main, (uv - tmpvar_2)).xyz - texture (sampler_main, (uv + tmpvar_2)).xyz).x;
  tmpvar_4.y = (texture (sampler_main, (uv - tmpvar_3)).xyz - texture (sampler_main, (uv + tmpvar_3)).xyz).x;
  uv1_1 = ((0.3 * cos(
    ((uv - 0.5) * 2.0)
  )) - tmpvar_4);
  float tmpvar_5;
  tmpvar_5 = clamp ((0.04 / sqrt(
    dot (uv1_1, uv1_1)
  )), 0.0, 1.0);
  uv1_1 = ((0.3 * cos(
    (uv1_1 * 12.0)
  )) - (9.0 * tmpvar_4));
  vec4 tmpvar_6;
  tmpvar_6.w = 1.0;
  tmpvar_6.xyz = (tmpvar_5 + ((texture (sampler_main, uv).xyz * 12.0) * vec3(clamp (
    (0.04 / sqrt(dot (uv1_1, uv1_1)))
  , 0.0, 1.0))));
  ret = tmpvar_6.xyz;
 }`}},function(o,l){o.exports={baseVals:{rating:3,gammaadj:1.56,decay:1,echo_zoom:.362,echo_orient:1,wave_thick:1,wave_brighten:0,darken:1,wave_a:.001,wave_scale:1.599,wave_smoothing:0,wave_mystery:-.5,modwavealphastart:2,modwavealphaend:2,warpscale:.107,zoomexp:.1584,fshader:1,warp:.01,wave_r:.51,wave_g:.5,ob_size:0,ob_a:1,ib_r:0,ib_g:0,ib_b:0,ib_a:1,mv_x:64,mv_y:48,mv_l:.5,mv_r:0,mv_g:0,mv_b:0,mv_a:0},shapes:[{baseVals:{enabled:0}},{baseVals:{enabled:0}},{baseVals:{enabled:0}},{baseVals:{enabled:0}}],waves:[{baseVals:{enabled:0}},{baseVals:{enabled:0}},{baseVals:{enabled:0}},{baseVals:{enabled:0}}],init_eqs_str:"a.d=0;a.cx1=0;a.y3=0;a.y1=0;a.cy1=0;a.x1=0;a.x3=0;a.dir=0;a.r=0;a.x2=0;a.y2=0;",frame_eqs_str:"a.ib_r=.3*Math.sin(5*a.time)+.7;a.ib_g=.3*Math.sin(4*a.time)+.3;a.ib_b=.5*Math.sin(4*div(a.time,3))+.5;a.wave_r=1-a.ib_r;a.wave_g=1-a.ib_g;a.wave_b=1-a.ib_b;a.wave_x=.5+.3*Math.sin(3*a.time);a.wave_y=.5+.3*Math.cos(2.187*a.time);",pixel_eqs_str:`a.r=div(a.bass,4);a.cx1=.5+.2*Math.sin(.618*a.time);a.cy1=.5+.2*Math.cos(1.618*a.time);a.d=sqrt((a.x-a.cx1)*(a.x-a.cx1)+(a.y-a.cy1)*(a.y-a.cy1));a.dir=a.bass*(a.r*a.r-a.d*a.d)*.3;a.x1=.00001<Math.abs(above(a.d,a.r))?0:Math.sin(a.y-a.cy1)*a.dir;a.y1=.00001<Math.abs(above(a.d,a.r))?0:-Math.sin(a.x-a.cx1)*a.dir;a.cx1=.5+.3*Math.sin(2.618*a.time);a.cy1=.5+.3*Math.cos(3.14*a.time);a.d=sqrt((a.x-a.cx1)*(a.x-a.cx1)+(a.y-a.cy1)*(a.y-a.cy1));a.dir=-a.mid*(a.r*a.r-a.d*a.d)*.3;a.x2=.00001<
Math.abs(above(a.d,a.r))?0:Math.sin(a.y-a.cy1)*a.dir;a.y2=.00001<Math.abs(above(a.d,a.r))?0:-Math.sin(a.x-a.cx1)*a.dir;a.cx1=.5+.4*Math.sin(2.618*-a.time);a.cy1=.5+.4*Math.cos(1.14*-a.time);a.d=sqrt((a.x-a.cx1)*(a.x-a.cx1)+(a.y-a.cy1)*(a.y-a.cy1));a.dir=-a.treb*(a.r*a.r-a.d*a.d)*.3;a.x3=.00001<Math.abs(above(a.d,a.r))?0:Math.sin(a.y-a.cy1)*a.dir;a.y3=.00001<Math.abs(above(a.d,a.r))?0:-Math.sin(a.x-a.cx1)*a.dir;a.dx=a.x1+a.x2+a.x3;a.dy=a.y1+a.y2+a.y3;`,warp:` shader_body { 
  vec2 uv_1;
  vec2 tmpvar_2;
  tmpvar_2 = (((uv_orig * texsize.xy) * (texsize_noise_lq.zw * 2.0)) + rand_frame.xy);
  uv_1 = (uv + ((texture (sampler_noise_lq, tmpvar_2).xy - 0.5) * texsize.zw));
  vec2 tmpvar_3;
  tmpvar_3.x = bass;
  tmpvar_3.y = treb;
  vec4 tmpvar_4;
  tmpvar_4.w = 1.0;
  tmpvar_4.xyz = (texture (sampler_main, (uv_1 + (
    (texture (sampler_main, (mix (uv_1, uv_orig, vec2(-1.0, -1.0)) + texsize.zw)).xy - 0.4)
   * 
    (-0.004 + (0.04 * clamp ((tmpvar_3 - 1.0), 0.0, 1.0)))
  ))).xyz - (0.0008 + (
    (texture (sampler_noise_lq, tmpvar_2) - 0.5)
   * 0.02)).xyz);
  ret = tmpvar_4.xyz;
 }`,comp:` shader_body { 
  vec2 uv1_1;
  vec2 tmpvar_2;
  tmpvar_2.y = 0.0;
  tmpvar_2.x = texsize.z;
  vec2 tmpvar_3;
  tmpvar_3.x = 0.0;
  tmpvar_3.y = texsize.w;
  vec2 tmpvar_4;
  tmpvar_4.x = (texture (sampler_main, (uv - tmpvar_2)).xyz - texture (sampler_main, (uv + tmpvar_2)).xyz).x;
  tmpvar_4.y = (texture (sampler_main, (uv - tmpvar_3)).xyz - texture (sampler_main, (uv + tmpvar_3)).xyz).x;
  uv1_1 = ((0.3 * cos(
    ((uv - 0.5) * 2.0)
  )) - tmpvar_4);
  float tmpvar_5;
  tmpvar_5 = clamp ((0.04 / sqrt(
    dot (uv1_1, uv1_1)
  )), 0.0, 1.0);
  uv1_1 = ((0.3 * cos(
    (uv1_1 * 12.0)
  )) - (9.0 * tmpvar_4));
  vec4 tmpvar_6;
  tmpvar_6.w = 1.0;
  tmpvar_6.xyz = (tmpvar_5 + ((texture (sampler_main, uv).xyz * 12.0) * vec3(clamp (
    (0.04 / sqrt(dot (uv1_1, uv1_1)))
  , 0.0, 1.0))));
  ret = tmpvar_6.xyz;
 }`}},function(o,l){o.exports={baseVals:{rating:5,decay:1,echo_zoom:1,echo_alpha:.5,echo_orient:3,invert:1,wave_a:.001,warpanimspeed:100,warpscale:.01,zoomexp:1.14947,warp:0,sx:.9901,sy:.9901,wave_r:0,wave_g:0,wave_b:0,ob_size:0,ob_r:1,ob_g:1,ob_b:1,ib_r:1,ib_g:1,ib_b:1,mv_a:0},shapes:[{baseVals:{enabled:0}},{baseVals:{enabled:0}},{baseVals:{enabled:0}},{baseVals:{enabled:1,sides:100,g:1,b:1,r2:1,b2:1,border_a:0},init_eqs_str:"a.q4=0;a.q3=0;a.xx=0;a.yy=0;a.radi=0;a.q1=0;",frame_eqs_str:`a.a=above(a.q4,1E3-div(9E3,a.fps))&&above(a.q3,1.5)?1:0;a.a2=above(a.q4,1E3)&&above(a.q3,1.5)?1:0;a.xx=(above(a.q4,1E3-div(3,a.fps)),.01*randint(100));a.yy=.00001<Math.abs(above(a.q4,1E3-div(3,a.fps)))?.01*randint(100):.01*randint(70)+.15;a.radi=.00001<Math.abs(above(a.q4,1E3-div(3,a.fps)))?.333*sqrt(a.q3)+.15:.4*sqrt(a.q3);a.rad=a.radi;a.x=a.xx;a.y=a.yy;a.r=.5*Math.sin(1.22*a.q1)+.6;a.g=.45+.45*Math.sin(1.307*a.q1);a.b=.45+.45*Math.sin(1.959*a.q1);a.r2=.5*Math.sin(1.622*a.q1)+
.6;a.g2=.45+.45*Math.sin(1.507*a.q1);a.b2=.45+.45*Math.sin(1.6559*a.q1);`}],waves:[{baseVals:{enabled:1,spectrum:1,thick:1,a:.42},init_eqs_str:"a.zs=0;a.speed=0;a.q3=0;a.q29=0;a.q30=0;a.q4=0;",frame_eqs_str:"",point_eqs_str:`a.zs=.00001<Math.abs(below(a.zs,-9.42478))?0:a.zs;a.zs=.00001<Math.abs(above(a.zs,9.42478))?0:a.zs;a.speed=.0025*Math.floor(Math.tan(pow(a.q3,.667)))*(1.5708*Math.atan(a.bass)+1.5708*Math.atan(a.mid)+1.5708*Math.atan(a.treb));a.zs+=a.speed;a.x=.5+(.18+.005*pow(a.q3,1.25))*Math.cos(a.zs*Math.asin(1)*100);a.y=.5+(.18+.005*pow(a.q3,1.25))*Math.sin(a.zs*Math.asin(1)*100);.00001<Math.abs(above(a.mid+a.treb,2*a.bass))?a.r=.3-Math.abs(.33*Math.sin(1-a.q29*a.bass*a.bass)):a.r=.7+Math.abs(.33*
Math.sin(1-a.q29*a.bass*a.bass));.00001<Math.abs(above(a.bass+a.treb,2*a.mid))?a.g=.3-Math.abs(.33*Math.sin(1-a.q30*a.mid*a.mid)):a.g=.7+Math.abs(.33*Math.sin(1-a.q30*a.mid*a.mid));.00001<Math.abs(below(a.mid+a.bass,2*a.treb))?a.b=.3-Math.abs(.33*Math.sin(1-a.q3*a.treb*a.treb)):a.b=.7+Math.abs(.33*Math.sin(1-a.q3*a.treb*a.treb));a.a=.175+.0007*a.q4;`},{baseVals:{enabled:0}},{baseVals:{enabled:0}},{baseVals:{enabled:0}}],init_eqs_str:`a.foo_r=0;a.maxs=0;a.n=0;a.ampl=0;a.bd_minbpm=0;a.im=0;a.basstime=0;a.bd_mean=0;a.timediff=0;a.bd_src=0;a.bass_residual=0;a.bd_slot=0;a.bd_b=0;a.bd_oct=0;a.tcos=0;a.stickybit=0;a.bd_arg=0;a.old_treb_flop=0;a.quali=0;a.q12=0;a.foo_b=0;a.bass_flop=0;a.q22=0;a.q21=0;a.volavg2=0;a.q13=0;a.q15=0;a.q29=0;a.dt=0;a.bd_pk=0;a.maxo=0;a.bd_m=0;a.q1=0;a.bd_cos=0;a.q5=0;a.foo_g=0;a.treb_flop=0;a.sample1=0;a.bass_thresh=0;a.difftime=0;a.dec_s=0;a.old_bass_flop=0;a.bd_exc=0;a.dec_xs=0;a.kraft=
0;a.diff=0;a.treb_thresh=0;a.bd_ampl=0;a.bd_mid_=0;a.maxind=0;a.edge=0;a.tsin=0;a.re0=0;a.testi=0;a.ec_steps=0;a.creep=0;a.q31=0;a.bpm=0;a.q23=0;a.q24=0;a.pulse=0;a.q11=0;a.bd_bass_=0;a.bd_tab0=0;a.pv_beat=0;a.bass_changed=0;a.show=0;a.mid_thresh=0;a.dec_m=0;a.q4=0;a.im0=0;a.bd_spo=0;a.mid_changed=0;a.entropy=0;a.test0=0;a.bd_nres=0;a.bd_bass=0;a.maxa=0;a.volavg=0;a.feder=0;a.q16=0;a.bd_recsz=0;a.old_mid_flop=0;a.mid_residual=0;a.bit2=0;a.tstart=0;a.bd_omega=0;a.bd_treb_=0;a.beatsin=0;a.bd_tabptr=
0;a.bd_treb=0;a.treb_residual=0;a.q19=0;a.beat=0;a.vol=0;a.bd_mid=0;a.chaos=0;a.bd_dat0=0;a.prog=0;a.mid_flop=0;a.re=0;a.bd_t=0;a.beatcos=0;a.q2=0;a.time_st=0;a.q14=0;a.treb_changed=0;a.bd_maxbpm=0;a.bd_qual=0;a.vol2=0;a.q3=0;a.t0=0;a.vol_=0;a.m=0;a.oct=0;a.quad=0;a.q32=0;a.basssum=0;a.creepo=0;a.q28=0;a.bd_sin=0;a.sample2=0;a.q30=0;a.change=0;a.beatct=0;a.q20=0;a.q8=0;a.bd_finc=0;for(var b=a.index=0;2E5>b;b++)a.megabuf[Math.floor(a.index)]=0,a.gmegabuf[Math.floor(a.index)]=0,a.index+=1;a.tstart=
a.time;a.bd_recsz=8;a.bd_oct=4;a.bd_spo=30;a.bd_finc=pow(2,div(1,a.bd_spo));a.bd_nres=a.bd_oct*a.bd_spo;a.bd_minbpm=20;a.bd_maxbpm=pow(2,a.bd_oct)*a.bd_minbpm;a.bd_dat0=1E5;a.bd_tab0=a.bd_dat0+a.bd_nres*a.bd_recsz*3;a.reg00=a.bd_minbpm;a.reg01=a.bd_maxbpm;a.reg02=a.bd_recsz;a.reg03=a.bd_nres;a.reg05=a.bd_finc;a.reg06=a.bd_dat0;a.reg07=a.bd_mp0;a.time_st=0;a.timediff=1;`,frame_eqs_str:`a.dt=Math.min(div(1,a.fps),.1);a.dec_m=1-4*a.dt;a.dec_s=1-a.dt;a.dec_xs=1-div(a.dt,6);a.t0=a.time-a.tstart;a.bd_b=a.bass;a.bd_bass_=a.bd_bass_*a.dec_m+(1-a.dec_m)*a.bd_b;a.bd_bass=a.bd_b-a.bd_bass_;a.bd_m=a.mid;a.bd_mid_=a.bd_mid_*a.dec_m+(1-a.dec_m)*a.bd_m;a.bd_mid=a.bd_m-a.bd_mid_;a.bd_t=a.treb;a.bd_treb_=a.bd_treb_*a.dec_m+(1-a.dec_m)*a.bd_t;a.bd_treb=a.bd_t-a.bd_treb_;a.n=0;a.bpm=a.bd_minbpm;for(var b=0;b<a.bd_nres;b++)a.gmegabuf[Math.floor(5E4+a.n*a.bd_recsz)]=0,a.bd_arg=
div(a.bpm,60)*a.t0*6.283,a.gmegabuf[Math.floor(a.bd_tab0+a.n*a.bd_recsz)]=a.bpm,a.bpm*=a.bd_finc,a.n+=1;for(b=a.bd_src=0;3>b;b++){a.bd_exc=a.bd_bass*(.00001>Math.abs(a.bd_src-0)?1:0)+a.bd_mid*(.00001>Math.abs(a.bd_src-1)?1:0)+a.bd_treb*(.00001>Math.abs(a.bd_src-2)?1:0);for(var c=a.oct=0;c<a.bd_oct;c++){a.bd_slot=0;a.bd_pk=0;for(var d=a.bd_mean=0;d<a.bd_spo;d++){a.bd_tabptr=a.bd_tab0+(a.oct*a.bd_spo+a.bd_slot)*a.bd_recsz;a.n=a.bd_dat0+(a.bd_nres*a.bd_src+a.oct*a.bd_spo+a.bd_slot)*a.bd_recsz;a.bpm=
a.gmegabuf[Math.floor(a.bd_tabptr)];a.bd_omega=6.283*div(a.bpm,60);a.feder=sqr(a.bd_omega);a.gmegabuf[Math.floor(a.n+4)]=a.gmegabuf[Math.floor(a.n+2)];a.gmegabuf[Math.floor(a.n+1)]*=1-.5*a.dt*sqrt(div(a.bpm,300));a.ec_steps=2*Math.floor(1+div(a.bpm,50));for(var e=0;e<a.ec_steps;e++)a.kraft=a.bd_exc-a.feder*a.gmegabuf[Math.floor(a.n+2)],a.gmegabuf[Math.floor(a.n+1)]+=div(a.kraft*a.dt,a.ec_steps),a.gmegabuf[Math.floor(a.n+2)]+=div(a.gmegabuf[Math.floor(a.n+1)]*a.dt,a.ec_steps);a.beatcos=a.gmegabuf[Math.floor(a.n+
1)];a.beatsin=a.gmegabuf[Math.floor(a.n+2)]*a.bd_omega;a.quad=sqrt(pow(a.beatsin,2)+pow(a.beatcos,2));a.gmegabuf[Math.floor(a.n)]=.8*a.gmegabuf[Math.floor(a.n)]+.2*a.quad;a.bd_ampl=a.gmegabuf[Math.floor(a.n)];a.bd_mean+=a.bd_ampl;.00001<Math.abs(a.bd_ampl>a.bd_pk?1:0)?a.bd_pk=a.bd_ampl:0;a.bd_slot+=1}a.bd_slot=0;a.bd_qual=pow(div(a.bd_pk,a.bd_mean)*a.bd_spo-1,1);a.gmegabuf[Math.floor(2*(a.bd_src*a.bd_oct+a.oct))]=a.bd_qual;for(d=0;d<a.bd_spo;d++)a.m=5E4+(a.bd_slot+0*a.oct*a.bd_spo)*a.bd_recsz,a.n=
a.bd_dat0+(a.bd_nres*a.bd_src+a.oct*a.bd_spo+a.bd_slot)*a.bd_recsz,a.gmegabuf[Math.floor(a.m)]+=div(a.bd_qual*a.gmegabuf[Math.floor(a.n)],12),a.bd_slot+=1;a.oct+=1}a.bd_src+=1}a.bd_slot=0;a.maxind=0;a.bd_pk=0;for(b=a.bd_mean=0;b<a.bd_spo;b++)a.m=5E4+a.bd_slot*a.bd_recsz,a.gmegabuf[Math.floor(a.m)]=pow(a.gmegabuf[Math.floor(a.m)],1),a.bd_mean+=a.gmegabuf[Math.floor(a.m)],.00001<Math.abs(a.gmegabuf[Math.floor(a.m)]>a.bd_pk?1:0)?(a.bd_pk=a.gmegabuf[Math.floor(a.m)],a.maxind=a.bd_slot):0,a.bd_slot+=1;
a.quali=div(a.bd_pk,a.bd_mean)*a.bd_spo-1;for(b=a.n=0;150>b;b++)a.gmegabuf[Math.floor(50+a.n)]*=0,a.n+=1;a.bd_src=0;a.tsin=0;for(b=a.tcos=0;3>b;b++){for(c=a.oct=0;c<a.bd_oct;c++)a.n=a.bd_dat0+(a.bd_nres*a.bd_src+a.oct*a.bd_spo+a.maxind)*a.bd_recsz,a.bd_tabptr=a.bd_tab0+(a.oct*a.bd_spo+a.maxind)*a.bd_recsz,a.bpm=a.gmegabuf[Math.floor(a.bd_tabptr)],a.im=a.gmegabuf[Math.floor(a.n+1)],a.re=6.283*div(a.gmegabuf[Math.floor(a.n+2)]*a.bpm,60),a.bd_cos=Math.cos(6.28*div(a.bpm,60)*a.time),a.bd_sin=-Math.sin(6.28*
div(a.bpm,60)*a.time),a.re0=a.re*a.bd_cos+a.im*a.bd_sin,a.im0=-a.re*a.bd_sin+a.im*a.bd_cos,a.bd_qual=a.gmegabuf[Math.floor(2*(a.bd_src*a.bd_oct+a.oct))],a.gmegabuf[Math.floor(50+4*a.oct)]+=a.bd_qual*a.im0,a.gmegabuf[Math.floor(4*a.oct+51)]+=a.bd_qual*a.re0,a.gmegabuf[Math.floor(4*a.oct+52)]+=a.bd_qual,a.gmegabuf[100]+=a.bd_qual*a.im0,a.gmegabuf[101]+=a.bd_qual*a.re0,a.re=a.bd_cos*a.re0+a.bd_sin*a.im0,a.im=-a.bd_cos*a.im0+a.bd_sin*a.re0,a.tsin+=5*a.im,a.oct+=1;a.bd_src+=1}a.q30=a.tsin;a.vol=a.bass_att+
a.mid_att+a.treb_att;a.vol_=.95*a.vol_+.05*a.vol;a.q29=a.vol-a.vol_;a.bd_src=0;a.maxo=0;a.maxs=0;for(b=a.maxa=0;3>b;b++){a.oct=1;for(c=0;c<a.bd_oct-1;c++)a.n=a.bd_dat0+(a.bd_nres*a.bd_src+a.oct*a.bd_spo+a.maxind)*a.bd_recsz,a.bd_qual=a.gmegabuf[Math.floor(2*(a.bd_src*a.bd_oct+a.oct))],a.ampl=div(a.bd_qual,1+a.oct*div(a.maxind,a.bd_oct)*0),.00001<Math.abs(a.ampl>a.maxa?1:0)?(a.maxa=a.ampl,a.maxs=a.bd_src,a.maxo=a.oct):0,a.oct+=1;a.bd_src+=1}a.q28=pow(4*a.bd_qual,1.5);a.q31=a.q28;.00001<Math.abs(above(a.q28,
50))?a.q28=pow(5*Math.sin(.5*a.bd_qual),2):0;a.testi=a.bd_nres*a.maxs+a.bd_spo*a.maxo+a.maxind;.00001<Math.abs(bor(a.beat&&.00001>Math.abs(a.prog-0)?1:0,2>Math.abs(a.testi-a.test0)?1:0))?a.test0=a.testi:0;a.n=a.bd_dat0+a.test0*a.bd_recsz;a.creep=a.gmegabuf[Math.floor(a.n+1)];a.beat=(0<a.creep?1:0)*(0>a.creepo?1:0);a.beatct=.00001<Math.abs(a.change)?0:a.beatct+a.beat;a.prog=mod(a.prog+a.beat,8);a.creepo=a.creep;a.show=.00001<Math.abs(a.beat)?1:.5*a.show;a.q4=1E3*div(a.gmegabuf[Math.floor(a.n+1)],a.gmegabuf[Math.floor(a.n)]);
a.q2=a.prog;.00001<Math.abs(a.beat)?(a.timediff=a.time-a.time_st,a.time_st=a.time):a.timediff=a.timediff;.00001<Math.abs(below(a.timediff,.0625))?a.timediff=.0625:a.timediff=a.timediff;a.q8=a.timediff;a.monitor=a.q8;a.q24=a.bd_maxbpm;a.old_bass_flop=a.bass_flop;a.old_treb_flop=a.treb_flop;a.old_mid_flop=a.mid_flop;a.chaos=.9+.1*Math.sin(a.pulse);a.entropy=.00001<Math.abs(equal(a.pulse,-20))?1+a.bass_flop+a.treb_flop+a.mid_flop+.002*a.q4:a.entropy;a.bass_thresh=2*above(a.bass_att,a.bass_thresh)+(1-
above(a.bass_att,a.bass_thresh))*((a.bass_thresh-1.6)*a.chaos+1.6);a.bass_flop=Math.abs(a.bass_flop-equal(a.bass_thresh,2));a.treb_thresh=2*above(a.treb_att,a.treb_thresh)+(1-above(a.treb_att,a.treb_thresh))*((a.treb_thresh-1.6)*a.chaos+1.6);a.treb_flop=Math.abs(a.treb_flop-equal(a.treb_thresh,2));a.mid_thresh=2*above(a.mid_att,a.mid_thresh)+(1-above(a.mid_att,a.mid_thresh))*((a.mid_thresh-1.6)*a.chaos+1.6);a.mid_flop=Math.abs(a.mid_flop-equal(a.mid_thresh,2));a.bass_changed=bnot(equal(a.old_bass_flop,
a.bass_flop));a.mid_changed=bnot(equal(a.old_mid_flop,a.mid_flop));a.treb_changed=bnot(equal(a.old_treb_flop,a.treb_flop));a.bass_residual=a.bass_changed*Math.sin(1.5*a.pulse)+bnot(a.bass_changed)*a.bass_residual;a.treb_residual=a.treb_changed*Math.sin(1.5*a.pulse)+bnot(a.treb_changed)*a.treb_residual;a.mid_residual=a.mid_changed*Math.sin(1.5*a.pulse)+bnot(a.mid_changed)*a.mid_residual;a.pulse=.00001<Math.abs(above(Math.abs(a.pulse),20))?-20:a.pulse+.018*(a.bass_thresh+a.mid_thresh+a.treb_thresh);
a.q11=a.mid_residual;a.q12=a.bass_residual;a.q13=a.treb_residual;a.q14=Math.sin(a.pulse);a.q15=Math.cos(a.pulse*(.5+.1*a.entropy));a.q16=Math.sin(a.pulse*(.5+pow(.25,a.entropy)));a.ob_r=Math.sin(1.0785*a.time+a.q16);a.ob_b=Math.sin(.8445*a.time+a.q15);a.ob_g=Math.sin(.413*a.time+a.q14);a.ib_r=Math.cos(.6*a.time+.1*a.q11);a.ib_b=Math.cos(1.4055*a.time+.1*a.q12);a.ib_g=Math.cos(.833*a.time+.1*a.q13);a.ib_size=.05+.03*a.q12;a.ob_size=.03+.02*Math.sin(2.321*a.time+.2*a.q12);a.ob_a=.6+.4*a.q13;a.ib_a=
.9+.1*Math.sin(.3*a.q12+a.q14+.5*a.q11);a.rot=0;a.basstime+=div(3*a.q29,a.fps);a.q1=a.basstime;a.basstime=.00001<Math.abs(below(a.basstime,-1E4))?0:a.basstime;a.basstime=.00001<Math.abs(above(a.basstime,1E4))?0:a.basstime;a.basstime+=div(.75*a.bass_att,a.fps);a.vol2=pow(a.bass+a.mid+a.treb,2);a.basssum=a.vol2;a.stickybit=mod(a.time,2);a.volavg+=a.vol2*equal(a.stickybit,1);a.sample1+=equal(a.stickybit,1);a.volavg2+=a.vol2*equal(a.stickybit,0);a.sample2+=equal(a.stickybit,0);a.edge=bnot(equal(a.bit2,
a.stickybit));a.volavg-=a.volavg*a.edge*a.stickybit;a.volavg2-=a.volavg2*a.edge*equal(a.stickybit,0);a.sample1-=a.sample1*a.edge*a.stickybit;a.sample2-=a.sample2*a.edge*equal(a.stickybit,0);a.diff=.00001<Math.abs(equal(a.stickybit,1))?div(a.basssum,div(a.volavg2,a.sample2)):0;a.diff=.00001<Math.abs(equal(a.stickybit,0))?div(a.basssum,div(a.volavg,a.sample1)):a.diff;a.q3=a.diff;a.pv_beat=.2*a.pv_beat*sqrt(div(a.fps,30))+div(.0001*(a.bass_att*a.bass_att+a.mid_att*a.mid_att+a.treb_att*a.treb_att)*a.q4,
sqrt(a.q8));a.q32=a.pv_beat;a.monitor=a.q32;a.bit2=mod(a.time,2);a.difftime+=.03*a.diff;a.q2=a.difftime;a.warp=.005*(a.bass*a.bass+a.mid*a.mid+a.treb*a.treb);a.foo_r=Math.sin(.34313*a.q1);a.foo_g=Math.sin(.3675*a.q1);a.foo_b=Math.sin(.55095*a.q1);.00001<Math.abs(above(a.foo_r,a.foo_g)&&above(a.foo_r,a.foo_b)?1:0)?a.q23=1:a.q23=0;.00001<Math.abs(above(a.foo_g,a.foo_r)&&above(a.foo_g,a.foo_b)?1:0)?a.q21=1:a.q21=0;.00001<Math.abs(above(a.foo_b,a.foo_r)&&above(a.foo_b,a.foo_g)?1:0)?a.q22=1:a.q22=0;.00001<
Math.abs(equal(a.q11+a.q12+a.q13,0))?a.q22=1:0;a.q5=div(30,a.fps);a.q19=50;a.q20=1;.00001<Math.abs(above(a.q31,14))?a.q19=100:a.q19=a.q19;.00001<Math.abs(above(a.q31,50))?a.q19=500:a.q19=a.q19;.00001<Math.abs(above(a.q3,2))?a.q19=.5+10*a.q8:a.q19=a.q19;`,pixel_eqs_str:`.00001<Math.abs(a.q32>1.2*sqrt(a.bass_att)?1:0)?(a.rot=.00001<Math.abs(above(a.q14,0))?.2*a.rad*a.q15:Math.tan(.001*a.rad*a.q4),a.zoom=.00001<Math.abs(above(a.q12,1.5))?a.zoom+(1-a.zoom)*a.rot*Math.cos(3.14*a.rad*a.q12):.00001<Math.abs(above(a.q13,2)*above(a.x,.5+.5*a.q15))?a.zoom+(1-a.zoom)*Math.sin(a.q11*a.rot*3.14):a.zoom+(1-a.zoom)*Math.cos(3*a.rad*a.q16),a.dx=above(a.q11,0)*Math.sin(.5*a.rad*a.q12),a.dy=above(a.q13,0)*Math.sin(.5*a.rad*a.q13)):(a.zoom=a.q19,a.zoomexp=a.q20,
a.rot=0);`,warp:` shader_body { 
  vec3 ret_1;
  vec4 tmpvar_2;
  tmpvar_2 = texture (sampler_pw_main, uv_orig);
  ret_1 = ((texture (sampler_blur1, tmpvar_2.xy).xyz * scale1) + bias1);
  vec3 tmpvar_3;
  tmpvar_3 = vec3((((1.0 - ret_1.x) * (1.0 - ret_1.y)) * (1.0 - ret_1.z)));
  vec2 tmpvar_4;
  tmpvar_4 = (((texsize.zw * q5) * -3.0) * ((
    pow (tmpvar_3, vec3(0.333, 0.333, 0.333))
   + 
    ((((0.5 * tmpvar_3) * (
      (texture (sampler_blur2, ret_1.xx).xyz * scale2)
     + bias2)) * ((texture (sampler_blur2, ret_1.yy).xyz * scale2) + bias2)) * ((texture (sampler_blur2, ret_1.zz).xyz * scale2) + bias2))
  ) + (
    ((0.25 * ((texture (sampler_blur3, ret_1.xx).xyz * scale3) + bias3)) * ((texture (sampler_blur3, ret_1.yy).xyz * scale3) + bias3))
   * 
    ((texture (sampler_blur3, ret_1.xx).xyz * scale3) + bias3)
  )).xy);
  vec3 tmpvar_5;
  tmpvar_5 = (((texture (sampler_blur1, 
    (uv_orig + (vec2(1.0, 0.0) * tmpvar_4))
  ).xyz * scale1) + bias1) - ((texture (sampler_blur1, 
    (uv_orig - (vec2(1.0, 0.0) * tmpvar_4))
  ).xyz * scale1) + bias1));
  vec3 tmpvar_6;
  tmpvar_6 = (((texture (sampler_blur1, 
    (uv_orig + (vec2(0.0, 1.0) * tmpvar_4))
  ).xyz * scale1) + bias1) - ((texture (sampler_blur1, 
    (uv_orig - (vec2(0.0, 1.0) * tmpvar_4))
  ).xyz * scale1) + bias1));
  vec2 tmpvar_7;
  tmpvar_7.x = tmpvar_5.x;
  tmpvar_7.y = tmpvar_6.x;
  vec2 tmpvar_8;
  tmpvar_8.x = tmpvar_5.y;
  tmpvar_8.y = tmpvar_6.y;
  vec2 tmpvar_9;
  tmpvar_9.x = tmpvar_5.z;
  tmpvar_9.y = tmpvar_6.z;
  vec2 tmpvar_10;
  tmpvar_10 = (uv_orig + ((
    (((tmpvar_7 * q21) + (tmpvar_8 * q22)) + (tmpvar_9 * q23))
   * texsize.zw) * 6.0));
  ret_1 = ((texture (sampler_main, tmpvar_10).xyz + (
    (texture (sampler_main, uv).xyz - ((texture (sampler_blur1, uv).xyz * scale1) + bias1))
   * 0.1)) - ((0.00015 * q28) * (
    ((((
      (texture (sampler_main, tmpvar_10).x * texture (sampler_main, tmpvar_10).y)
     * texture (sampler_main, tmpvar_10).z) / (2.0 * q8)) + ((
      sqrt(treb)
     * texture (sampler_main, tmpvar_10).x) * texture (sampler_main, tmpvar_10).y)) + ((sqrt(mid) * texture (sampler_main, tmpvar_10).x) * texture (sampler_main, tmpvar_10).z))
   + 
    ((sqrt(bass) * texture (sampler_main, tmpvar_10).y) * texture (sampler_main, tmpvar_10).z)
  )));
  ret_1.x = mix (ret_1.x, (1.01 * texture (sampler_pc_main, tmpvar_10).x), (bass_att * 0.05));
  ret_1.y = mix (ret_1.y, (1.01 * texture (sampler_pc_main, tmpvar_10).y), (mid_att * 0.05));
  ret_1.z = mix (ret_1.z, (1.01 * texture (sampler_pc_main, tmpvar_10).z), (treb_att * 0.05));
  ret_1 = (ret_1 + ((
    (pow (q3, 1.2) - 0.25)
   * 0.00667) * tmpvar_2).xyz);
  vec4 tmpvar_11;
  tmpvar_11.w = 0.0;
  tmpvar_11.xyz = ret_1;
  vec3 tmpvar_12;
  tmpvar_12 = mix (tmpvar_11, texture (sampler_pc_main, uv), vec4(float((
    (q32 * sqrt(((
      ((1.0 - ret_1.x) * (1.0 - ret_1.y))
     + 
      ((1.0 - ret_1.x) * (1.0 - ret_1.z))
    ) + (
      (1.0 - ret_1.y)
     * 
      (1.0 - ret_1.z)
    ))))
   > 1.333)))).xyz;
  ret_1 = tmpvar_12;
  vec4 tmpvar_13;
  tmpvar_13.w = 1.0;
  tmpvar_13.xyz = tmpvar_12;
  ret = tmpvar_13.xyz;
 }`,comp:` shader_body { 
  vec3 ret_1;
  ret_1 = mix (texture (sampler_main, uv).xyz, texture (sampler_main, ((0.5 - uv) + 0.5)).xyz, vec3(0.5, 0.5, 0.5));
  ret_1 = (1.0 - ((ret_1 * 
    (1.0 - ret_1)
  ) * 4.0));
  vec4 tmpvar_2;
  tmpvar_2.w = 1.0;
  tmpvar_2.xyz = ret_1;
  ret = tmpvar_2.xyz;
 }`}},function(o,l){o.exports={baseVals:{rating:5,gammaadj:1,decay:.925,echo_zoom:1.007,echo_orient:3,wave_brighten:0,brighten:1,darken:1,solarize:1,wave_a:.001,wave_scale:.01,wave_smoothing:0,modwavealphastart:1,modwavealphaend:1,warpanimspeed:1.459,warpscale:2.007,fshader:1,zoom:.9999,warp:.01,sx:.9999,wave_r:0,wave_g:0,wave_b:0,ob_size:.015,ob_b:1,ib_size:.26,mv_x:64,mv_y:48,mv_l:5,mv_a:0},shapes:[{baseVals:{enabled:1,sides:100,textured:1,rad:.789,ang:.6283,tex_zoom:1.17257,r:0,g:1,border_a:0},init_eqs_str:"a.an=0;a.vx=0;a.vy=0;",frame_eqs_str:"a.rad=.65+.1*a.bass;a.an=.99*a.an+.1*(a.bass-a.treb);a.ang=.1*a.an+.6;"},{baseVals:{enabled:0}},{baseVals:{enabled:0}},{baseVals:{enabled:0}}],waves:[{baseVals:{enabled:1,samples:495,sep:4,spectrum:1,thick:1,additive:1,scaling:100,smoothing:1,r:0,g:.04,b:0,a:.99},init_eqs_str:"a.my_z=0;a.d=0;a.n=0;a.y3=0;a.z2=0;a.y1=0;a.w=0;a.t5=0;a.w2=0;a.t1=0;a.x1=0;a.q6=0;a.zoom=0;a.p=0;a.q1=0;a.q5=0;a.t8=0;a.z3=0;a.w3=0;a.t3=0;a.my_x=0;a.x3=0;a.t6=0;a.my_y=0;a.pi=0;a.q4=0;a.t7=0;a.rd=0;a.w1=0;a.x2=0;a.t2=0;a.l=0;a.y2=0;a.q2=0;a.z1=0;a.q3=0;a.t4=0;a.t2=0;a.t3=0;a.t4=0;a.ab=1;",frame_eqs_str:"a.t1=a.q1;a.t2=a.q2;a.t3=a.q3;a.t4=a.q4;a.t5=a.q5;a.t6=a.q6;a.t8=.07;a.t7=1;",point_eqs_str:`a.t7=-a.t7;a.pi=Math.asin(1);a.n=180;a.rd=.075;a.my_x=.5*Math.sin(a.sample*a.pi*4+(a.t7+1)*a.t8)+Math.cos(a.sample*a.pi*a.n)*a.rd*Math.sin(a.sample*a.pi*4+(a.t7+1)*a.t8);a.my_y=.5*Math.cos(a.sample*a.pi*4+(a.t7+1)*a.t8)+Math.cos(a.sample*a.pi*a.n)*a.rd*Math.cos(a.sample*a.pi*4+(a.t7+1)*a.t8);a.my_z=Math.sin(a.sample*a.pi*a.n)*a.rd;a.d=1.4;a.zoom=.65;a.w1=a.q2;a.w2=a.q3;a.w3=a.q4;a.x1=Math.cos(a.w1)*a.my_x+Math.sin(a.w1)*a.my_y;a.y1=-Math.sin(a.w1)*a.my_x+Math.cos(a.w1)*a.my_y;
a.z1=a.my_z;a.x2=Math.cos(a.w2)*a.x1+Math.sin(a.w2)*a.z1;a.z2=-Math.sin(a.w2)*a.x1+Math.cos(a.w2)*a.z1;a.y2=a.y1;a.y3=Math.cos(a.w3)*a.y2+Math.sin(a.w3)*a.z2;a.z3=-Math.sin(a.w3)*a.y2+Math.cos(a.w3)*a.z2;a.x3=a.x2;a.l=sqrt(a.x3*a.x3+a.y3*a.y3);a.w=Math.atan2(a.x3,a.y3);a.p=Math.tan(Math.asin(1)+Math.atan2(a.d+a.z3,a.l));a.d=sqrt(a.x3*a.x3+a.y3*a.y3+(a.z3+a.d)*(a.z3+a.d));a.my_x=a.zoom*Math.sin(a.w)*a.p;a.my_y=a.zoom*Math.cos(a.w)*a.p;a.x=.5+a.my_x;a.y=.5+a.my_y;a.b=-a.z3+.5;a.b=.5*Math.min(1,Math.max(0,
a.b));a.r=1-2*a.b;`},{baseVals:{enabled:0}},{baseVals:{enabled:0}},{baseVals:{enabled:0}}],init_eqs_str:"a.index2=0;a.index=0;a.q12=0;a.q22=0;a.q21=0;a.q29=0;a.q1=0;a.dec_med=0;a.rott=0;a.is_beat=0;a.q31=0;a.q23=0;a.k1=0;a.q24=0;a.dec_slow=0;a.q4=0;a.q26=0;a.p2=0;a.avg=0;a.beat=0;a.p1=0;a.peak=0;a.q2=0;a.q27=0;a.p3=0;a.q3=0;a.t0=0;a.q28=0;a.q30=0;a.q20=0;a.p4=0;a.step=0;a.step=0;",frame_eqs_str:`a.dec_med=pow(.7,div(30,a.fps));a.dec_slow=pow(.99,div(30,a.fps));a.beat=Math.max(Math.max(a.bass,a.mid),a.treb);a.avg=a.avg*a.dec_slow+a.beat*(1-a.dec_slow);a.is_beat=above(a.beat,-2+a.avg+a.peak)*above(a.time,a.t0+.1);a.t0=a.is_beat*a.time+(1-a.is_beat)*a.t0;a.peak=a.is_beat*a.beat+(1-a.is_beat)*a.peak*a.dec_med;a.index=mod(a.index+a.is_beat,16);a.index2=mod(a.index2+a.is_beat*bnot(a.index),2);a.q20=a.avg;a.q21=a.beat;a.q22=a.peak;a.q23=a.index;a.q24=a.is_beat;a.q26=a.bass_att+
a.mid_att+a.treb_att;a.q27=a.index+1;a.q28=a.index2;a.q29=2*(mod(a.index,2)-.5);a.k1=a.is_beat*equal(mod(a.index,2),0);a.p1=a.k1*(a.p1+1)+(1-a.k1)*a.p1;a.p2=a.dec_med*a.p2+(1-a.dec_med)*a.p1;a.rott=div(3.1416*a.p2,8);a.q1=Math.cos(a.rott);a.q2=Math.sin(a.rott);a.q3=-a.q2;a.q4=a.q1;a.step+=a.q24;a.p3=a.p3*a.dec_slow+(1-a.dec_slow)*a.step;a.q30=a.step;a.p4=a.dec_slow*a.p4+(1-a.dec_slow)*a.q27;a.q31=a.p4;a.q12=a.time-a.t0;a.monitor=a.q12;a.zoom=1;a.rot=-0;a.dx=0;`,pixel_eqs_str:"a.zoom=1.3;",warp:` shader_body { 
  vec2 uv_1;
  vec2 uv6_2;
  vec2 tmpvar_3;
  tmpvar_3 = ((uv - 0.5) * aspect.xy);
  float tmpvar_4;
  tmpvar_4 = (((q29 * 2.0) * sqrt(
    dot (tmpvar_3, tmpvar_3)
  )) + (rand_frame * 64.0)).x;
  uv_1 = (uv + (clamp (
    ((sin(tmpvar_4) / cos(tmpvar_4)) * normalize(tmpvar_3))
  , vec2(-2.0, -2.0), vec2(2.0, 2.0)) / 20.0));
  uv6_2 = (0.4 * sin((tmpvar_3 * 22.0)));
  vec4 tmpvar_5;
  tmpvar_5.w = 1.0;
  tmpvar_5.xyz = (((q24 * 
    (((texture (sampler_main, uv_1).xyz - (
      ((texture (sampler_blur1, fract(uv_1)).xyz * scale1) + bias1)
     * 0.04)) + (0.15 * (vec3(
      (0.1 / sqrt(dot (uv6_2, uv6_2)))
    ) * roam_cos.xyz))) - 0.02)
  ) * 0.98) + ((1.0 - q24) * texture (sampler_main, uv_orig).xyz));
  ret = tmpvar_5.xyz;
 }`,comp:`uniform sampler2D sampler_rand00;
 shader_body { 
  vec4 tmpvar_1;
  tmpvar_1 = texture (sampler_main, uv);
  vec4 tmpvar_2;
  tmpvar_2.w = 1.0;
  tmpvar_2.xyz = ((texture (sampler_rand00, (0.4 + 
    (0.6 * tmpvar_1.xy)
  )) * tmpvar_1.z) * 3.0).xyz;
  ret = tmpvar_2.xyz;
 }`}},function(o,l){o.exports={baseVals:{rating:2,gammaadj:2.7,wave_mode:1,modwavealphabyvolume:1,wave_a:2.707,wave_scale:1.025,wave_smoothing:.1,modwavealphastart:.77,modwavealphaend:1.01,warpscale:1.331,zoom:1.014,warp:.21786,wave_r:.65,wave_g:.65,wave_b:.65,mv_a:0},shapes:[{baseVals:{enabled:0}},{baseVals:{enabled:0}},{baseVals:{enabled:0}},{baseVals:{enabled:0}}],waves:[{baseVals:{enabled:0}},{baseVals:{enabled:0}},{baseVals:{enabled:0}},{baseVals:{enabled:0}}],init_eqs_str:"",frame_eqs_str:"a.wave_r+=.35*(.6*Math.sin(3.98*a.time)+.4*Math.sin(11.047*a.time));a.wave_g+=.35*(.6*Math.sin(.835*a.time)+.4*Math.sin(1.081*a.time));a.wave_b+=.35*(.6*Math.sin(.814*a.time)+.4*Math.sin(1.011*a.time));a.cx+=.11*(.6*Math.sin(.374*a.time)+.4*Math.sin(.294*a.time));a.cy+=.11*(.6*Math.sin(.393*a.time)+.4*Math.sin(.223*a.time));a.dx+=.005*(.6*Math.sin(.173*a.time)+.4*Math.sin(.223*a.time));a.decay-=.01*equal(mod(a.frame,20),0);",pixel_eqs_str:"",pixel_eqs:"",warp:` shader_body { 
  vec4 tmpvar_1;
  tmpvar_1.w = 1.0;
  tmpvar_1.xyz = (texture (sampler_main, (uv + (
    (texture (sampler_main, (mix (uv, uv_orig, vec2(-1.0, -1.0)) + texsize.zw)).xy - 0.37)
   * 0.01))).xyz - 0.004);
  ret = tmpvar_1.xyz;
 }`,comp:` shader_body { 
  vec4 tmpvar_1;
  tmpvar_1 = texture (sampler_main, uv);
  vec4 tmpvar_2;
  tmpvar_2.w = 1.0;
  tmpvar_2.xyz = mix (vec3(dot (tmpvar_1.xyz, vec3(0.3333, 0.3333, 0.3333))), tmpvar_1.xyz, vec3(3.0, 3.0, 3.0));
  ret = tmpvar_2.xyz;
 }`}},function(o,l){o.exports={baseVals:{rating:0,gammaadj:1.9,echo_zoom:1.16936,wave_mode:7,modwavealphabyvolume:1,wave_a:0,wave_scale:1.015009,wave_smoothing:.522,modwavealphastart:.83,modwavealphaend:1.31,warpscale:3.138,zoom:1.009006,warp:536e-6,wave_r:.5,wave_g:.5,wave_b:.5,mv_a:0},shapes:[{baseVals:{enabled:0}},{baseVals:{enabled:0}},{baseVals:{enabled:0}},{baseVals:{enabled:0}}],waves:[{baseVals:{enabled:0}},{baseVals:{enabled:0}},{baseVals:{enabled:0}},{baseVals:{enabled:0}}],init_eqs_str:"a.dx_residual=0;a.dy_residual=0;a.bass_thresh=0;",frame_eqs_str:`a.wave_r=.85+.25*Math.sin(.437*a.time+1);a.wave_g=.85+.25*Math.sin(.544*a.time+2);a.wave_b=.85+.25*Math.sin(.751*a.time+3);a.rot+=.01*(.6*Math.sin(.381*a.time)+.4*Math.sin(.579*a.time));a.cx+=.21*(.6*Math.sin(.374*a.time)+.4*Math.sin(.294*a.time));a.cy+=.21*(.6*Math.sin(.393*a.time)+.4*Math.sin(.223*a.time));a.dx+=.003*(.6*Math.sin(.234*a.time)+.4*Math.sin(.277*a.time));a.dy+=.003*(.6*Math.sin(.284*a.time)+.4*Math.sin(.247*a.time));a.decay-=.01*equal(mod(a.frame,6),0);a.dx+=
a.dx_residual;a.dy+=a.dy_residual;a.bass_thresh=2*above(a.bass_att,a.bass_thresh)+(1-above(a.bass_att,a.bass_thresh))*(.96*(a.bass_thresh-1.3)+1.3);a.dx_residual=.016*equal(a.bass_thresh,2.13)*Math.sin(7*a.time)+(1-equal(a.bass_thresh,2.13))*a.dx_residual;a.dy_residual=.012*equal(a.bass_thresh,2.13)*Math.sin(9*a.time)+(1-equal(a.bass_thresh,2.13))*a.dy_residual;a.wave_x-=7*a.dx_residual;a.wave_y-=7*a.dy_residual;a.wave_mystery=.03*a.time;a.zoom+=.005*(.6*Math.sin(.1934*a.time+3)+.4*Math.sin(.307*
a.time+9));a.zoom+=.4*Math.max(0,a.bass_att-1.1);`,pixel_eqs_str:"",pixel_eqs:"",warp:` shader_body { 
  vec3 ret_1;
  ret_1 = texture (sampler_main, uv).xyz;
  ret_1 = (ret_1 + ((ret_1 - 
    ((texture (sampler_blur2, uv).xyz * scale2) + bias2)
  ) * 0.3));
  ret_1 = (ret_1 * 0.9);
  ret_1 = (ret_1 + ((
    ((texture (sampler_noise_lq, ((
      (uv_orig * texsize.xy)
     * 
      (texsize_noise_lq.zw * 0.4)
    ) + rand_frame.xy)).xyz - 0.5) / 256.0)
   * 122.0) * clamp (
    (treb_att - 1.0)
  , 0.0, 1.0)));
  ret_1 = mix (ret_1, vec3(dot (ret_1, vec3(0.32, 0.49, 0.29))), vec3(0.2, 0.2, 0.2));
  vec4 tmpvar_2;
  tmpvar_2.w = 1.0;
  tmpvar_2.xyz = ret_1;
  ret = tmpvar_2.xyz;
 }`,comp:` shader_body { 
  vec3 ret_1;
  ret_1 = (texture (sampler_main, uv).xyz + ((
    (texture (sampler_blur1, uv).xyz * scale1)
   + bias1) * 0.4));
  vec3 tmpvar_2;
  tmpvar_2 = pow (ret_1, vec3(0.5, 0.8, 1.7));
  ret_1 = tmpvar_2;
  vec4 tmpvar_3;
  tmpvar_3.w = 1.0;
  tmpvar_3.xyz = tmpvar_2;
  ret = tmpvar_3.xyz;
 }`}},function(o,l){o.exports={baseVals:{rating:5,gammaadj:1,decay:1,wave_mode:6,additivewave:1,wave_dots:1,wave_thick:1,wave_brighten:0,wave_a:100,wave_scale:3.63,wave_smoothing:.9,wave_mystery:-.3,modwavealphastart:1.15,modwavealphaend:1.55,warpscale:1.331,zoom:.96971,warp:0,wave_r:.6,wave_g:.6,wave_b:.6,mv_x:64,mv_y:48,mv_l:0,mv_r:.35,mv_g:.35,mv_b:.35,mv_a:0},shapes:[{baseVals:{enabled:0}},{baseVals:{enabled:0}},{baseVals:{enabled:0}},{baseVals:{enabled:0}}],waves:[{baseVals:{enabled:0}},{baseVals:{enabled:0}},{baseVals:{enabled:0}},{baseVals:{enabled:0}}],init_eqs_str:"a.decay_rate=0;a.q6=0;a.rot_sum=0;a.q1=0;a.q5=0;a.prev_beat=0;a.is_beat=0;a.min_att=0;a.beat=0;a.decay_to=0;a.rot_sim=0;a.q2=0;a.q3=0;a.beat_level=0;a.rot_sum=0;a.q2=.07+.00004*randint(1E3)+.00003*randint(1E3);a.q3=1.035+.06*(randint(1E3)+randint(1E3)+randint(1E3))*.000333;",frame_eqs_str:`a.wave_r+=.5*(.6*Math.sin(1.98*a.time)+.4*Math.sin(3.047*a.time));a.wave_g+=.5*(.6*Math.sin(2.835*a.time)+.4*Math.sin(2.081*a.time));a.wave_b+=.5*(.6*Math.sin(3.814*a.time)+.4*Math.sin(1.011*a.time));a.cx=.5;a.cy=.5;a.rot=a.q2;a.zoom=a.zoom-1+a.q3;a.rot_sum+=a.rot;a.q1=-a.rot_sum;a.q5=Math.cos(a.rot_sum);a.q6=Math.sin(a.rot_sim);a.monitor=a.q2;a.min_att=2.5;a.decay_to=.8;a.decay_rate=pow(.999,a.fps);a.beat=div(a.bass,Math.max(a.min_att,a.bass_att));a.beat=Math.max(a.beat,div(a.mid,
Math.max(a.min_att,a.mid_att)));a.beat=Math.max(a.beat,div(a.treb,Math.max(a.min_att,a.treb_att)));a.beat=Math.max(a.beat,(a.prev_beat-a.decay_to)*a.decay_rate+a.decay_to);a.beat_level=24*(a.beat-a.prev_beat-.02);a.is_beat=above(a.beat_level,.5);a.prev_beat=a.beat;a.wave_a=a.beat_level;`,pixel_eqs_str:"",pixel_eqs:"",warp:` shader_body { 
  vec4 tmpvar_1;
  tmpvar_1.w = 1.0;
  tmpvar_1.xyz = (texture (sampler_pw_main, uv).xyz - 0.004);
  ret = tmpvar_1.xyz;
 }`,comp:` shader_body { 
  vec2 uv_1;
  vec2 uv2_2;
  uv_1 = (uv - 0.5);
  uv_1 = (uv_1 * (min (aspect.x, aspect.y) * 0.8));
  uv_1 = (uv_1 * aspect.xy);
  float tmpvar_3;
  tmpvar_3 = sin(q1);
  float tmpvar_4;
  tmpvar_4 = cos(q1);
  uv2_2.x = ((uv_1.x * tmpvar_4) - (uv_1.y * tmpvar_3));
  uv2_2.y = ((uv_1.x * tmpvar_3) + (uv_1.y * tmpvar_4));
  uv2_2 = (uv2_2 * aspect.zw);
  uv2_2 = (uv2_2 + 0.5);
  vec4 tmpvar_5;
  tmpvar_5.w = 1.0;
  tmpvar_5.xyz = (abs((
    (texture (sampler_main, uv2_2).xyz * 2.65)
   + 
    (((texture (sampler_blur1, uv2_2).xyz * scale1) + bias1) * -2.0)
  )) * 1.5);
  ret = tmpvar_5.xyz;
 }`}},function(o,l){o.exports={baseVals:{rating:5,gammaadj:1.9,echo_zoom:1.16936,wave_mode:5,additivewave:1,wave_a:0,wave_scale:.899719,wave_smoothing:.63,wave_mystery:1,modwavealphastart:2,modwavealphaend:2,warpscale:2.593743,zoom:1.00496,warp:.278033,sx:.999666,sy:.9999,wave_r:.65,wave_g:.65,wave_b:.65,mv_x:0,mv_y:48,mv_dx:-.941273,mv_dy:.426319,mv_l:5,mv_r:.315997,mv_g:.078173,mv_b:.941976,mv_a:0},shapes:[{baseVals:{enabled:0}},{baseVals:{enabled:0}},{baseVals:{enabled:0}},{baseVals:{enabled:0}}],waves:[{baseVals:{enabled:0}},{baseVals:{enabled:0}},{baseVals:{enabled:0}},{baseVals:{enabled:0}}],init_eqs_str:"a.du=0;a.q1=0;a.rg=0;a.q9=0;a.mult=0;a.ang2=0;a.dv=0;a.q4=0;a.q2=0;a.dist=0;a.q3=0;a.rg=0;",frame_eqs_str:`a.wave_r+=.35*(.6*Math.sin(.98*a.time)+.4*Math.sin(1.047*a.time));a.wave_g+=.35*(.6*Math.sin(.835*a.time)+.4*Math.sin(1.081*a.time));a.wave_b+=.35*(.6*Math.sin(.814*a.time)+.4*Math.sin(1.011*a.time));a.q1=2*a.cx-1+.52*(.6*Math.sin(.374*a.time)+.4*Math.sin(.294*a.time));a.q2=2*a.cy-1+.52*(.6*Math.sin(.393*a.time)+.4*Math.sin(.223*a.time));a.q3=2*a.cx-1+.52*(.6*Math.sin(.174*-a.time)+.4*Math.sin(.364*a.time));a.q4=2*a.cy-1+.52*(.6*Math.sin(.234*a.time)+.4*Math.sin(.271*-a.time));
a.decay-=.01*equal(mod(a.frame,5),0);a.rg=Math.max(.95*a.rg,.3+.5*Math.min(2,1.3*Math.max(0,a.mid_att-1)));a.q9=a.rg;`,pixel_eqs_str:"a.du=2*a.x-1-a.q1;a.dv=2*a.y-1-a.q2;a.dist=sqrt(a.du*a.du+a.dv*a.dv);a.ang2=Math.atan2(a.du,a.dv);a.mult=div(.008,a.dist+.4);a.dx=a.mult*Math.sin(a.ang2-1.5);a.dy=a.mult*Math.cos(a.ang2-1.5);a.du=2*a.x-1-a.q3;a.dv=2*a.y-1-a.q4;a.dist=sqrt(a.du*a.du+a.dv*a.dv);a.ang2=Math.atan2(a.du,a.dv);a.mult=div(.008,a.dist+.4);a.dx+=a.mult*Math.sin(a.ang2+1.5);a.dy+=a.mult*Math.cos(a.ang2+1.5);",warp:` shader_body { 
  vec3 ret_1;
  vec2 tmpvar_2;
  tmpvar_2 = mix (uv_orig, uv, vec2(q9));
  ret_1 = texture (sampler_main, tmpvar_2).xyz;
  ret_1 = (ret_1 + ((ret_1 - 
    ((texture (sampler_blur1, tmpvar_2).xyz * scale1) + bias1)
  ) * 0.3));
  ret_1 = (ret_1 * 0.9);
  ret_1 = (ret_1 + ((
    ((texture (sampler_noise_lq, ((
      (uv_orig * texsize.xy)
     * 
      (texsize_noise_lq.zw * 0.4)
    ) + rand_frame.xy)).xyz - 0.5) / 256.0)
   * 122.0) * clamp (
    (treb_att - 1.0)
  , 0.0, 1.0)));
  ret_1 = mix (ret_1, vec3(dot (ret_1, vec3(0.32, 0.49, 0.29))), vec3(0.2, 0.2, 0.2));
  vec4 tmpvar_3;
  tmpvar_3.w = 1.0;
  tmpvar_3.xyz = ret_1;
  ret = tmpvar_3.xyz;
 }`,comp:` shader_body { 
  vec4 tmpvar_1;
  tmpvar_1.w = 1.0;
  tmpvar_1.xyz = (0.3 + (0.4 * vec3(dot (texture (sampler_main, uv).xyz, vec3(0.32, 0.49, 0.29)))));
  ret = tmpvar_1.xyz;
 }`}},function(o,l){o.exports={baseVals:{rating:5,gammaadj:1.9,echo_zoom:1.169,echo_orient:1,wave_mode:5,additivewave:1,wave_a:0,wave_scale:.9,wave_smoothing:.63,wave_mystery:1,modwavealphastart:2,modwavealphaend:2,warpscale:1.331,zoom:1.004,warp:.19788,sx:.99967,sy:.9999,wave_r:.65,wave_g:.65,wave_b:.65,mv_x:0,mv_y:48,mv_dx:-.941,mv_dy:.426,mv_l:5,mv_r:.316,mv_g:.078,mv_b:.942,mv_a:0},shapes:[{baseVals:{enabled:0}},{baseVals:{enabled:0}},{baseVals:{enabled:0}},{baseVals:{enabled:0}}],waves:[{baseVals:{enabled:0}},{baseVals:{enabled:0}},{baseVals:{enabled:0}},{baseVals:{enabled:0}}],init_eqs_str:"a.du=0;a.q1=0;a.dv=0;a.q2=0;a.dist=0;a.ang2=0;a.mult=0;",frame_eqs_str:"a.wave_r+=.2*(.6*Math.sin(.98*a.time)+.4*Math.sin(1.047*a.time));a.wave_g+=.2*(.6*Math.sin(.835*a.time)+.4*Math.sin(1.081*a.time));a.wave_b+=.2*(.6*Math.sin(.814*a.time)+.4*Math.sin(1.011*a.time));a.q1=2*a.cx-1+.6*(.6*Math.sin(.374*a.time)+.4*Math.sin(.294*a.time));a.q2=2*a.cy-1+.6*(.6*Math.sin(.393*a.time)+.4*Math.sin(.223*a.time));",pixel_eqs_str:"a.du=2*a.x-1-a.q1;a.dv=2*a.y-1-a.q2;a.dist=sqrt(a.du*a.du+a.dv*a.dv);a.ang2=Math.atan2(a.du,a.dv)+.15*a.time;a.mult=.65*Math.sin(.05*a.dist);a.dx=a.mult*Math.sin(2*a.ang2-1.5);a.dy=a.mult*Math.cos(2*a.ang2-1.5);",warp:` shader_body { 
  vec3 ret_1;
  vec4 tmpvar_2;
  tmpvar_2 = texture (sampler_main, uv);
  ret_1 = (tmpvar_2.xyz + ((tmpvar_2.xyz - 
    ((texture (sampler_blur2, uv).xyz * scale2) + bias2)
  ) * 0.3));
  ret_1 = (ret_1 * 0.9);
  ret_1 = (ret_1 + ((
    ((texture (sampler_noise_lq, ((
      (uv_orig * texsize.xy)
     * 
      (texsize_noise_lq.zw * 0.4)
    ) + rand_frame.xy)).xyz - 0.5) / 256.0)
   * 122.0) * clamp (
    (treb_att - 1.0)
  , 0.0, 1.0)));
  vec3 tmpvar_3;
  tmpvar_3 = mix (ret_1, vec3(dot (ret_1, vec3(0.32, 0.49, 0.29))), vec3(0.2, 0.2, 0.2));
  ret_1 = tmpvar_3;
  vec4 tmpvar_4;
  tmpvar_4.w = 1.0;
  tmpvar_4.xyz = tmpvar_3;
  ret = tmpvar_4.xyz;
 }`,comp:` shader_body { 
  vec2 uv2_1;
  vec3 ret_2;
  uv2_1 = (uv + (vec2(1.0, 0.0) * texsize.zw));
  float tmpvar_3;
  tmpvar_3 = (((texture (sampler_main, uv2_1).xyz + 
    (((texture (sampler_blur1, uv2_1).xyz * scale1) + bias1) * 0.4)
  ) + (
    ((texture (sampler_blur2, uv2_1).xyz * scale2) + bias2)
   * 0.15)) + ((
    (texture (sampler_blur3, uv2_1).xyz * scale3)
   + bias3) * 0.1)).x;
  uv2_1 = (uv + (vec2(-1.0, 0.0) * texsize.zw));
  float tmpvar_4;
  tmpvar_4 = (((texture (sampler_main, uv2_1).xyz + 
    (((texture (sampler_blur1, uv2_1).xyz * scale1) + bias1) * 0.4)
  ) + (
    ((texture (sampler_blur2, uv2_1).xyz * scale2) + bias2)
   * 0.15)) + ((
    (texture (sampler_blur3, uv2_1).xyz * scale3)
   + bias3) * 0.1)).x;
  uv2_1 = (uv + (vec2(0.0, 1.0) * texsize.zw));
  float tmpvar_5;
  tmpvar_5 = (((texture (sampler_main, uv2_1).xyz + 
    (((texture (sampler_blur1, uv2_1).xyz * scale1) + bias1) * 0.4)
  ) + (
    ((texture (sampler_blur2, uv2_1).xyz * scale2) + bias2)
   * 0.15)) + ((
    (texture (sampler_blur3, uv2_1).xyz * scale3)
   + bias3) * 0.1)).x;
  uv2_1 = (uv + (vec2(0.0, -1.0) * texsize.zw));
  vec3 tmpvar_6;
  tmpvar_6.z = 0.14;
  tmpvar_6.x = (tmpvar_3 - tmpvar_4);
  tmpvar_6.y = (tmpvar_5 - ((
    (texture (sampler_main, uv2_1).xyz + (((texture (sampler_blur1, uv2_1).xyz * scale1) + bias1) * 0.4))
   + 
    (((texture (sampler_blur2, uv2_1).xyz * scale2) + bias2) * 0.15)
  ) + (
    ((texture (sampler_blur3, uv2_1).xyz * scale3) + bias3)
   * 0.1)).x);
  ret_2 = (0.5 + (0.5 * normalize(tmpvar_6)));
  vec2 x_7;
  x_7 = (ret_2.xy - 0.5);
  ret_2 = (ret_2 * clamp ((
    sqrt(dot (x_7, x_7))
   * 5.0), 0.0, 1.0));
  ret_2 = ret_2.xxy;
  ret_2 = (ret_2 + 1.15);
  ret_2 = (ret_2 * mix (ret_2, (ret_2 * 
    (((texture (sampler_blur3, uv).xyz * scale3) + bias3) - ((texture (sampler_blur1, uv).xyz * scale1) + bias1))
  ), pow (hue_shader.yxz, ret_2)));
  ret_2 = (ret_2 * ret_2);
  vec4 tmpvar_8;
  tmpvar_8.w = 1.0;
  tmpvar_8.xyz = ret_2;
  ret = tmpvar_8.xyz;
 }`}},function(o,l){o.exports={baseVals:{rating:5,gammaadj:2.4,decay:1,echo_zoom:.997,echo_alpha:.5,echo_orient:3,wave_mode:2,wave_brighten:0,wrap:0,darken:1,wave_a:.001,wave_scale:.28,wave_smoothing:.9,modwavealphastart:.71,modwavealphaend:1.3,warpanimspeed:2.599,warpscale:.01,zoomexp:.99817,zoom:.86978,warp:.01,sy:1.0017,wave_r:0,wave_g:0,wave_b:0,ob_size:0,ob_r:1,ob_g:1,ob_b:1,ib_size:.04,ib_r:0,ib_g:0,ib_b:0,ib_a:1,mv_x:64,mv_y:48,mv_l:.5,mv_r:.35,mv_g:.35,mv_b:.35,mv_a:.2},shapes:[{baseVals:{enabled:1,sides:20,additive:1,textured:1,rad:1.99867,tex_zoom:.49486,g:1,b:1,a:.75,r2:1,b2:1,a2:1,border_a:0},init_eqs_str:"",frame_eqs_str:""},{baseVals:{enabled:0}},{baseVals:{enabled:0}},{baseVals:{enabled:0}}],waves:[{baseVals:{enabled:0}},{baseVals:{enabled:0}},{baseVals:{enabled:0}},{baseVals:{enabled:0}}],init_eqs_str:"a.ang2=0;a.redsine=0;a.greensine=0;a.bluesine=0;a.redif=0;a.greenif=0;a.blueif=0;a.decay=.1;",frame_eqs_str:`a.sx=1;a.sy=1;a.redsine=.5+.15*a.bass*Math.sin(3*a.time);a.greensine=.5+.15*a.mid*Math.sin(2*a.time);a.bluesine=.5+.15*a.treb*Math.sin(a.time);a.redif=.9*(.00001<Math.abs(above(a.bass,1.2))?a.redsine:.00001<Math.abs(above(a.redif,.95))?0:.98*a.redif);a.greenif=.8*(.00001<Math.abs(above(a.mid,1.2))?a.greensine:.00001<Math.abs(above(a.greenif,.95))?0:.8*a.greenif);a.blueif=.8*(.00001<Math.abs(above(a.treb,1.2))?a.bluesine:.00001<Math.abs(above(a.blueif,.95))?0:.8*a.blueif);a.ib_r=
a.redif;a.ib_g=a.greenif;a.ib_b=a.blueif;`,pixel_eqs_str:"a.ang2=Math.sin(3*a.ang+a.time+.05*Math.sin(a.time*above(a.mid_att,1.2)));a.rot=1.2*a.ang2;",warp:` shader_body { 
  vec4 tmpvar_1;
  tmpvar_1.w = 1.0;
  tmpvar_1.xyz = (((texture (sampler_blur1, uv).xyz * scale1) + bias1) - texture (sampler_main, uv).xyz);
  ret = tmpvar_1.xyz;
 }`,comp:` shader_body { 
  vec3 ret_1;
  ret_1 = (mix (texture (sampler_main, uv).xyz, texture (sampler_main, (
    (vec2(-1.003, 1.003) * (uv - 0.5))
   + 0.5)).xyz, vec3(0.5, 0.5, 0.5)) * 2.4);
  ret_1 = (ret_1 * ret_1);
  vec4 tmpvar_2;
  tmpvar_2.w = 1.0;
  tmpvar_2.xyz = ret_1;
  ret = tmpvar_2.xyz;
 }`}},function(o,l){o.exports={baseVals:{rating:4,gammaadj:1,decay:.995,echo_zoom:1,echo_alpha:.5,echo_orient:1,wave_mode:6,additivewave:1,wave_thick:1,modwavealphabyvolume:1,wave_brighten:0,wrap:0,wave_a:.001,wave_scale:2.103,wave_smoothing:.54,wave_mystery:.38,modwavealphastart:.81,modwavealphaend:1.4,warpscale:1.331,warp:.01,wave_r:0,wave_g:0,wave_b:0,ob_size:.005,ob_a:1,ib_size:.005,ib_a:1,mv_x:64,mv_y:48,mv_l:1.85,mv_r:.5,mv_g:.5,mv_b:.5,mv_a:0},shapes:[{baseVals:{enabled:0}},{baseVals:{enabled:1,sides:14,num_inst:78,x:.6,rad:.02217,tex_zoom:60.80383,g:1,b:1,a:.9,g2:0,a2:1,border_g:.59,border_a:1},init_eqs_str:"a.fov=0;a.arg=0;a.t1=0;a.posx=0;a.trel=0;a.yl=0;a.k1=0;a.posy=0;a.xl=0;a.time2=0;a.q19=0;a.t2=0;a.yw=0;a.dist=0;a.xw=0;a.speed=0;a.t1=div(Math.floor(randint(10)),10);a.t2=.2+div(Math.floor(randint(8)),10);",frame_eqs_str:`a.speed=.02;a.trel=Math.floor(a.time*a.speed)-a.time*a.speed+1;a.k1=div(a.instance,a.num_inst);a.k1-=Math.floor(a.k1);a.dist=1.4-a.k1;a.fov=.1;a.arg=a.dist-.02*a.time;a.posx=div(a.fov,a.dist)*(Math.sin(13*a.arg)+.2*Math.sin(332*a.dist));a.posy=div(a.fov,a.dist)*(Math.cos(36*a.arg)+.2*Math.sin(332*a.dist));a.xl=.5+a.posx;a.yl=.5+a.posy;a.time2=div(a.time,4)+Math.cos(a.instance);a.xw=.5+.5*(Math.sin(14*a.arg)+.02*Math.cos(1131*a.arg));a.yw=a.time2-Math.floor(a.time2);a.x=.00001<
Math.abs(bnot(a.q19))?a.xl:a.xw;a.y=.00001<Math.abs(bnot(a.q19))?a.yl:a.yw;a.ang=a.time*Math.sin(44*a.k1)*12;a.a=a.t1;a.border_a=0;a.a2=a.t2;a.rad=div(.01,a.dist);a.r=.5+.3*Math.sin(a.instance+a.arg);a.b=.5+.3*Math.sin(a.instance-2+a.arg);a.g=.5+.3*Math.sin(2*a.instance+a.arg);`},{baseVals:{enabled:0}},{baseVals:{enabled:0}}],waves:[{baseVals:{enabled:0}},{baseVals:{enabled:0}},{baseVals:{enabled:0}},{baseVals:{enabled:0}}],init_eqs_str:"a.mq29=0;a.cthr=0;a.mq1=0;a.q25=0;a.q12=0;a.q22=0;a.q21=0;a.q13=0;a.q29=0;a.mq31=0;a.mq21=0;a.mq24=0;a.oldq8=0;a.chng=0;a.mq28=0;a.mq23=0;a.q31=0;a.q23=0;a.q24=0;a.q11=0;a.atime=0;a.q26=0;a.mq27=0;a.mq25=0;a.mq22=0;a.vol=0;a.mq26=0;a.q27=0;a.q28=0;a.q8=0;a.q8=0;",frame_eqs_str:`a.chng=Math.sin(.5*a.time);a.cthr=.9999;a.mq21=.00001<Math.abs(above(a.chng,a.cthr))?randint(3):a.mq21;a.mq22=.00001<Math.abs(above(a.chng,a.cthr))?randint(3):a.mq22;a.mq23=.00001<Math.abs(above(a.chng,a.cthr))?randint(3):a.mq23;a.mq24=.00001<Math.abs(above(a.chng,a.cthr))?randint(2):a.mq24;a.mq25=.00001<Math.abs(above(a.chng,a.cthr))?randint(2):a.mq25;a.mq26=.00001<Math.abs(above(a.chng,a.cthr))?randint(2):a.mq26;a.mq27=.00001<Math.abs(above(a.chng,a.cthr))?randint(1):a.mq27;
a.mq28=.00001<Math.abs(above(a.chng,a.cthr))?randint(1):a.mq28;a.mq29=.00001<Math.abs(above(a.chng,a.cthr))?.3*randint(1):a.mq29;a.mq31=.00001<Math.abs(above(a.chng,a.cthr))?.3*randint(1):a.mq31;a.monitor=a.chng;a.q21=a.mq21;a.q22=a.mq22;a.q23=a.mq23;a.q24=a.mq24;a.q25=a.mq25;a.q26=a.mq26;a.q27=a.mq27;a.q28=a.mq28;a.q29=a.mq29;a.q31=a.mq31;a.monitor=a.mq1;a.vol=a.bass+a.treb+a.mid;a.atime+=a.vol;a.q11=.4+.4*Math.sin(.006*a.atime);a.q12=.4+.4*Math.cos(.00613828348*a.atime);a.q13=.4+.4*Math.sin(.00598593455*
a.atime);a.monitor=a.q13;a.warp=0;a.q8=a.oldq8+.0003*div(pow(1+1.2*a.bass+.4*a.bass_att+.1*a.treb+.1*a.treb_att+.1*a.mid+.1*a.mid_att,6),a.fps);a.oldq8=a.q8;a.wave_r=.5+.5*Math.sin(1.123*a.q8);a.wave_g=.5+.5*Math.sin(1.576*a.q8);a.wave_b=.5+.5*Math.cos(1.465*a.q8);a.ib_a=.2*a.bass;`,pixel_eqs_str:"a.dx=a.dx+.008*Math.sin((2*a.y-1)*a.meshx)+.008*Math.sin((2*a.y-1)*a.meshx*1.3333);a.dy=a.dy+.008*Math.cos((2*a.x-1)*a.meshx*1.3333)+.008*Math.cos((2*a.x-1)*a.meshx);",warp:` shader_body { 
  vec3 ret_1;
  vec4 tmpvar_2;
  tmpvar_2 = texture (sampler_main, uv);
  ret_1 = tmpvar_2.xyz;
  vec4 tmpvar_3;
  tmpvar_3 = texture (sampler_noisevol_hq, (((vec3(0.05, 0.05, 0.0) * uv.xyy) * (
    (q27 * texsize.xyy)
   * texsize_noisevol_hq.zww)) + ((time * vec3(0.0, 0.0, 1.0)) * q29)));
  if (((tmpvar_2.x > (q21 * q13)) && (tmpvar_2.x <= (q24 * q11)))) {
    ret_1.y = (tmpvar_2.y - (tmpvar_3.x * 0.5));
  };
  if (((ret_1.y > (q22 * q11)) && (ret_1.y <= (q25 * q12)))) {
    ret_1.z = (tmpvar_2.z - (tmpvar_3.y * 0.5));
  };
  if (((ret_1.z > (q23 * q12)) && (ret_1.z <= (q26 * q13)))) {
    ret_1.x = (tmpvar_2.x - (tmpvar_3.z * 0.5));
  };
  ret_1 = (ret_1 + ((ret_1 - 
    ((texture (sampler_blur1, uv).xyz * scale1) + bias1)
  ) * 0.2));
  ret_1 = (ret_1 - 0.02);
  vec4 tmpvar_4;
  tmpvar_4.w = 1.0;
  tmpvar_4.xyz = ret_1;
  ret = tmpvar_4.xyz;
 }`,comp:` shader_body { 
  vec2 uv_1;
  vec3 ret_2;
  uv_1 = (0.05 + (0.9 * uv));
  vec4 tmpvar_3;
  tmpvar_3 = texture (sampler_main, uv_1);
  ret_2 = tmpvar_3.xyz;
  vec4 tmpvar_4;
  tmpvar_4 = texture (sampler_noisevol_hq, (((vec3(0.05, 0.05, 0.0) * uv_1.xyy) * (
    (q28 * texsize.xyy)
   * texsize_noisevol_hq.zww)) + ((time * vec3(0.0, 0.0, 1.0)) * q31)));
  if (((tmpvar_3.x > (q26 * q13)) && (tmpvar_3.x <= (q23 * q11)))) {
    ret_2.z = (tmpvar_3.z - (tmpvar_4.x * 0.5));
  };
  if (((tmpvar_3.y > (q25 * q11)) && (tmpvar_3.y <= (q22 * q12)))) {
    ret_2.x = (tmpvar_3.x - (tmpvar_4.y * 0.5));
  };
  if (((ret_2.z > (q24 * q12)) && (ret_2.z <= (q21 * q13)))) {
    ret_2.y = (tmpvar_3.y - (tmpvar_4.z * 0.5));
  };
  ret_2 = (abs((
    ((texture (sampler_blur1, uv_1).xyz * scale1) + bias1)
   - ret_2)) * 6.0);
  ret_2 = (ret_2 * 1.333);
  vec4 tmpvar_5;
  tmpvar_5.w = 1.0;
  tmpvar_5.xyz = ret_2;
  ret = tmpvar_5.xyz;
 }`}},function(o,l){o.exports={baseVals:{rating:4,gammaadj:1.98,decay:.5,echo_zoom:1,echo_alpha:.5,echo_orient:3,wave_mode:7,additivewave:1,modwavealphabyvolume:1,wave_brighten:0,darken:1,wave_a:.001,wave_scale:1.157,wave_smoothing:.63,modwavealphastart:.71,modwavealphaend:1.3,warpscale:1.331,zoom:.9995,warp:.009,wave_r:.65,wave_g:.65,wave_b:.65,ob_size:.5,ob_r:.01,ib_size:.26,mv_x:64,mv_y:48,mv_l:0,mv_a:0,b1x:.7,b1ed:0},shapes:[{baseVals:{enabled:1,sides:14,num_inst:512,rad:.1026,tex_ang:.62832,r2:1,g2:0,a2:1,border_a:0},init_eqs_str:"a.ma=0;a.mx=0;a.my=0;a.r_border=0;a.g_border=0;a.b_border=0;",frame_eqs_str:`a.ma+=3.1415*above(a.bass,1)*.01*a.bass;a.ma-=3.1415*above(a.treb,1)*.01*a.treb;a.mx+=.0002*Math.cos(a.ma);a.my+=.0002*Math.sin(a.ma);a.mx=.00001<Math.abs(above(a.mx,.9))?.9-a.mx:a.mx;a.my=.00001<Math.abs(above(a.my,.9))?.9-a.my:a.my;a.mx=.00001<Math.abs(below(a.mx,.1))?.9+a.mx:a.mx;a.my=.00001<Math.abs(below(a.my,.1))?.9+a.my:a.my;a.x=a.mx;a.y=a.my;a.rad=div(a.bass+a.treb,100);a.a=above(a.bass+a.mid+a.treb,.8);a.r=div(Math.floor(randint(100)),100);a.g=div(Math.floor(randint(100)),
100);a.b=div(Math.floor(randint(100)),100);a.r2=div(Math.floor(randint(100)),100);a.g2=div(Math.floor(randint(100)),100);a.b2=div(Math.floor(randint(100)),100);a.r_border=div(Math.floor(randint(100)),100);a.g_border=div(Math.floor(randint(100)),100);a.b_border=div(Math.floor(randint(100)),100);`},{baseVals:{enabled:1,sides:23,num_inst:1024,rad:.10262,ang:.43982,tex_ang:.62832,a:.5,r2:1,g2:0,a2:.5,border_a:0},init_eqs_str:"a.ma=0;a.mx=0;a.my=0;a.r_border=0;a.g_border=0;a.b_border=0;",frame_eqs_str:`a.ma+=3.1415*above(a.bass,1)*.05*a.bass;a.ma-=3.1415*above(a.mid,1)*.05*a.mid;a.mx+=.0001*Math.cos(a.ma);a.my+=.0001*Math.sin(a.ma);a.mx=.00001<Math.abs(above(a.mx,.9))?.9-a.mx:a.mx;a.my=.00001<Math.abs(above(a.my,.9))?.9-a.my:a.my;a.mx=.00001<Math.abs(below(a.mx,.1))?.9+a.mx:a.mx;a.my=.00001<Math.abs(below(a.my,.1))?.9+a.my:a.my;a.x=a.mx;a.y=a.my;a.rad=div(a.bass+a.treb,75);a.a=above(a.bass+a.mid+a.treb,.1);a.r=div(Math.floor(randint(100)),100);a.g=div(Math.floor(randint(100)),
100);a.b=div(Math.floor(randint(100)),100);a.r2=div(Math.floor(randint(100)),100);a.g2=div(Math.floor(randint(100)),100);a.b2=div(Math.floor(randint(100)),100);a.r_border=div(Math.floor(randint(100)),100);a.g_border=div(Math.floor(randint(100)),100);a.b_border=div(Math.floor(randint(100)),100);`},{baseVals:{enabled:0}},{baseVals:{enabled:0}}],waves:[{baseVals:{enabled:0}},{baseVals:{enabled:0}},{baseVals:{enabled:0}},{baseVals:{enabled:0}}],init_eqs_str:"a.d=0;a.n=0;a.z=0;a.n2=0;a.q25=0;a.w2=0;a.q22=0;a.q21=0;a.q29=0;a.j3=0;a.q1=0;a.n1=0;a.v=0;a.w3=0;a.q31=0;a.q23=0;a.q24=0;a.pi=0;a.pi2inv=0;a.j2=0;a.w1=0;a.zz=0;a.vol=0;a.j1=0;a.q27=0;a.maskangle=0;a.q3=0;a.q32=0;a.q28=0;a.q30=0;a.q20=0;a.mtime=0;a.x1=2;a.y1=2;a.z1=2;",frame_eqs_str:`a.d=20;a.z=4;a.zz=1+0*a.bass_att;a.pi=2*Math.asin(1);a.pi2inv=div(.5,a.pi);a.maskangle=Math.asin(div(1,a.d));a.q32=a.maskangle;a.q31=a.d;a.q30=a.z;a.q29=a.pi2inv;a.q28=a.pi;a.q27=div(1,a.zz);a.v=.4;a.j1=.95*a.j1+sqr(4*a.bass)*a.v;a.j2=.95*a.j2+sqr(4*a.mid)*a.v;a.j3=.95*a.j3+sqr(4*a.treb)*a.v;a.n+=.0152*a.j1;a.n1+=.0152*a.j2;a.n2+=.0152*a.j3;a.vol=.25*(a.bass+a.mid+a.treb);a.vol=a.vol;a.q3=a.vol;a.mtime+=.01*a.vol;a.q1=a.mtime;a.zoom+=.015*a.vol;a.w1=.01*a.n;a.w2=.01*a.n1;a.w3=
.01*a.n2;a.q20=Math.cos(a.w1);a.q21=Math.sin(a.w1);a.q22=Math.cos(a.w2);a.q23=Math.sin(a.w2);a.q24=Math.cos(a.w3);a.q25=Math.sin(a.w3);`,pixel_eqs_str:"",pixel_eqs:"",warp:` shader_body { 
  vec2 tmpvar_1;
  tmpvar_1 = (((uv_orig * texsize.xy) * (texsize_noise_lq.zw * 1.5)) + rand_frame.xy);
  vec4 tmpvar_2;
  tmpvar_2.w = 1.0;
  tmpvar_2.xyz = ((texture (sampler_main, (
    mix (uv_orig, uv, vec2(((dot (texture (sampler_main, 
      mix (uv_orig, uv, vec2(4.0, 4.0))
    ).xyz, vec3(0.32, 0.49, 0.29)) - dot (
      ((texture (sampler_blur2, mix (uv_orig, uv, vec2(-12.0, -12.0))).xyz * scale2) + bias2)
    , vec3(0.32, 0.49, 0.29))) * 12.0)))
   + 
    (((texture (sampler_noise_lq, tmpvar_1) - 0.5).xy * texsize.zw) * 0.5)
  )).xyz + (
    (texture (sampler_noise_lq, tmpvar_1) - 0.5)
   * 0.006).xyz) + -0.0006);
  ret = tmpvar_2.xyz;
 }`,comp:` shader_body { 
  vec2 uv_1;
  vec3 ret2_2;
  vec2 uv2_3;
  vec3 ret_4;
  uv2_3.y = uv.y;
  uv2_3.x = (1.0 - uv.x);
  uv2_3 = (0.5 + ((uv2_3 - 0.5) * 0.98));
  uv_1 = (0.5 + ((uv - 0.5) * 0.98));
  vec2 tmpvar_5;
  tmpvar_5 = (texsize.zw * 4.0);
  vec3 tmpvar_6;
  tmpvar_6 = (((texture (sampler_blur1, 
    (uv_1 + (vec2(1.0, 0.0) * tmpvar_5))
  ).xyz * scale1) + bias1) - ((texture (sampler_blur1, 
    (uv_1 - (vec2(1.0, 0.0) * tmpvar_5))
  ).xyz * scale1) + bias1));
  vec3 tmpvar_7;
  tmpvar_7 = (((texture (sampler_blur1, 
    (uv_1 + (vec2(0.0, 1.0) * tmpvar_5))
  ).xyz * scale1) + bias1) - ((texture (sampler_blur1, 
    (uv_1 - (vec2(0.0, 1.0) * tmpvar_5))
  ).xyz * scale1) + bias1));
  vec3 tmpvar_8;
  tmpvar_8.z = 0.0;
  tmpvar_8.x = dot (tmpvar_6, vec3(0.32, 0.49, 0.29));
  tmpvar_8.y = dot (tmpvar_7, vec3(0.32, 0.49, 0.29));
  vec4 tmpvar_9;
  tmpvar_9 = texture (sampler_noisevol_hq, ((vec3(0.05, 0.05, 0.0) * (
    ((uv_1.xyy + (tmpvar_8 * 0.5)) * texsize.xyy)
   * texsize_noisevol_hq.zww)) + (vec3(0.0, 0.0, 0.2) * time)));
  vec2 tmpvar_10;
  tmpvar_10.x = dot (tmpvar_6, vec3(0.32, 0.49, 0.29));
  tmpvar_10.y = dot (tmpvar_7, vec3(0.32, 0.49, 0.29));
  uv_1 = (uv_1 - (tmpvar_10 * 0.04));
  vec2 tmpvar_11;
  tmpvar_11.x = dot (((
    (texture (sampler_blur1, (uv2_3 + (vec2(1.0, 0.0) * tmpvar_5))).xyz * scale1)
   + bias1) - (
    (texture (sampler_blur1, (uv2_3 - (vec2(1.0, 0.0) * tmpvar_5))).xyz * scale1)
   + bias1)), vec3(0.32, 0.49, 0.29));
  tmpvar_11.y = dot (((
    (texture (sampler_blur1, (uv2_3 + (vec2(0.0, 1.0) * tmpvar_5))).xyz * scale1)
   + bias1) - (
    (texture (sampler_blur1, (uv2_3 - (vec2(0.0, 1.0) * tmpvar_5))).xyz * scale1)
   + bias1)), vec3(0.32, 0.49, 0.29));
  uv2_3 = (uv2_3 - (tmpvar_11 * 0.04));
  ret_4 = (abs((
    ((texture (sampler_main, uv_1).xyz + ((texture (sampler_blur1, uv_1).xyz * scale1) + bias1)) - ((texture (sampler_blur2, uv_1).xyz * scale2) + bias2))
   - 
    ((texture (sampler_blur3, uv_1).xyz * scale3) + bias3)
  )) * (dot (tmpvar_9, vec4(0.32, 0.49, 0.29, 0.0)) * 3.0));
  ret2_2 = (abs((
    ((texture (sampler_main, uv2_3).xyz + ((texture (sampler_blur1, uv2_3).xyz * scale1) + bias1)) - ((texture (sampler_blur2, uv2_3).xyz * scale2) + bias2))
   - 
    ((texture (sampler_blur3, uv2_3).xyz * scale3) + bias3)
  )) * (dot (tmpvar_9, vec4(0.32, 0.49, 0.29, 0.0)) * 3.0));
  ret2_2 = (0.5 - pow (ret2_2, vec3(0.5, 0.5, 0.5)));
  ret_4 = (pow (ret_4, vec3(0.5, 0.5, 0.5)) - (0.3 - ret2_2));
  vec4 tmpvar_12;
  tmpvar_12.w = 1.0;
  tmpvar_12.xyz = ret_4;
  ret = tmpvar_12.xyz;
 }`}},function(o,l){o.exports={baseVals:{rating:0,gammaadj:1.980001,decay:.5,echo_zoom:.999998,echo_alpha:.5,echo_orient:3,wave_mode:4,additivewave:1,wave_thick:1,modwavealphabyvolume:1,wave_brighten:0,darken_center:1,darken:1,wave_a:.001,wave_scale:.527429,wave_smoothing:.45,modwavealphastart:0,modwavealphaend:1.32,warpanimspeed:.442,warpscale:.498,zoom:.9999,warp:.01,sx:.9999,wave_r:.8,wave_g:.49,ob_size:0,ob_r:1,ob_g:1,ob_b:1,ob_a:.05,ib_size:.26,mv_x:64,mv_y:48,mv_l:1.85,mv_r:.4999,mv_g:.4999,mv_b:.4999,mv_a:0,b1ed:0},shapes:[{baseVals:{enabled:0}},{baseVals:{enabled:1,thickoutline:1,textured:1,x:.26,y:.2,rad:.393173,tex_zoom:1.392831,r:0,g:.55,b:.5,a:.9,g2:.4,b2:.4,border_r:.3,border_g:.7,border_b:.8,border_a:.2},init_eqs_str:"a.g0=0;a.y0=0;a.q1=0;a.x0=0;a.q24=0;a.q26=0;a.r0=0;a.trig=0;a.q2=0;a.b0=0;a.rad0=0;",frame_eqs_str:`a.trig=a.q24;a.textured=1;a.x0=a.x0*bnot(a.trig)+a.trig*(.2+div(randint(100),200));a.y0=a.y0*bnot(a.trig)+a.trig*(.2+div(randint(100),200));a.x0+=div(.03*a.q1*(3+a.q26),a.fps);a.y0+=div(.03*a.q2*(3+a.q26),a.fps);a.x0-=Math.floor(a.x0);a.y0-=Math.floor(a.y0);a.tex_ang=a.time;a.ang=a.time*a.q2;a.x=a.x0;a.y=a.y0;a.rad0=a.rad0*bnot(a.trig)+div(a.trig*randint(100),200);a.rad=a.rad0;a.r0=a.r0*bnot(a.trig)+div(a.trig*randint(10),10);a.b0=a.b0*bnot(a.trig)+div(a.trig*randint(10),10);
a.g0=a.g0*bnot(a.trig)+div(a.trig*randint(10),10);a.border_r=a.r0;a.border_g=a.g0;a.border_b=a.b0;a.r=a.r0;a.b=a.b0;a.g=a.g0;`},{baseVals:{enabled:0}},{baseVals:{enabled:0}}],waves:[{baseVals:{enabled:0}},{baseVals:{enabled:0}},{baseVals:{enabled:0}},{baseVals:{enabled:0}}],init_eqs_str:"a.rm=0;a.ampl=0;a.index2=0;a.index=0;a.q18=0;a.q22=0;a.q21=0;a.movex=0;a.q1=0;a.dec_med=0;a.index3=0;a.trel=0;a.rott=0;a.ava=0;a.is_beat=0;a.q23=0;a.k1=0;a.q24=0;a.dec_slow=0;a.q4=0;a.q26=0;a.p2=0;a.mov=0;a.avg=0;a.movez=0;a.q19=0;a.beat=0;a.q17=0;a.p1=0;a.peak=0;a.q2=0;a.q27=0;a.movey=0;a.q3=0;a.t0=0;a.q28=0;a.q30=0;a.q20=0;a.dirx=1;",frame_eqs_str:`a.dec_med=pow(.6,div(30,a.fps));a.dec_slow=pow(.9,div(30,a.fps));a.beat=Math.max(Math.max(a.bass,a.mid),a.treb);a.avg=a.avg*a.dec_slow+a.beat*(1-a.dec_slow);a.is_beat=above(a.beat,.2+a.avg+a.peak)*above(a.time,a.t0+.2);a.t0=a.is_beat*a.time+(1-a.is_beat)*a.t0;a.peak=a.is_beat*a.beat+(1-a.is_beat)*a.peak*a.dec_med;a.index=mod(a.index+a.is_beat,8);a.index2=mod(a.index2+a.is_beat*bnot(a.index),4);a.index3=mod(a.index3+a.is_beat*bnot(a.index)*bnot(a.index2),3);a.q20=a.avg;a.q21=
a.beat;a.q22=a.peak;a.q23=a.index;a.q24=a.is_beat;a.q26=a.bass+a.mid+a.treb;a.ava=a.ava*a.dec_slow+a.q26*(1-a.dec_slow);a.k1=a.is_beat*equal(mod(a.index,2),0);a.p1=a.k1*(a.p1+1)+(1-a.k1)*a.p1;a.p2=a.dec_med*a.p2+(1-a.dec_med)*a.p1;a.rott=div(3.1416*a.p2,2);a.q1=Math.cos(a.rott);a.q2=Math.sin(a.rott);a.q3=-a.q2;a.q4=a.q1;a.q27=8-a.index;a.q28=.5+div(Math.sin(div(a.time,7)),10);a.rm=Math.min(a.q26-1.5*a.ava,2);a.mov=a.is_beat*a.rm+(1-a.is_beat)*a.mov;a.movez+=div(.4,a.fps)*a.mov;a.q30=a.movez;a.ampl=
div(a.q26,8);a.movex+=div(.2,a.fps)*Math.sin(a.rott);a.movey+=div(.2,a.fps)*Math.cos(a.rott);a.q18=a.movex;a.q19=a.movey;a.trel=a.trel+div(1,a.fps)+a.q24;a.q17=2*Math.sin(div(a.trel,4));`,pixel_eqs_str:"",pixel_eqs:"",warp:` shader_body { 
  vec2 uv_1;
  vec2 uv6_2;
  vec2 tmpvar_3;
  tmpvar_3 = ((uv - 0.5) * aspect.xy);
  float tmpvar_4;
  tmpvar_4 = (((q28 * 2.0) * sqrt(
    dot (tmpvar_3, tmpvar_3)
  )) + (rand_frame * 64.0)).x;
  uv_1 = (uv + (clamp (
    ((sin(tmpvar_4) / cos(tmpvar_4)) * normalize(tmpvar_3))
  , vec2(-16.0, -16.0), vec2(16.0, 16.0)) / 20.0));
  uv6_2 = (0.4 * sin((tmpvar_3 * 12.0)));
  vec4 tmpvar_5;
  tmpvar_5.w = 1.0;
  tmpvar_5.xyz = (((q24 * 
    (((texture (sampler_main, uv_1).xyz - (
      ((texture (sampler_blur1, fract(uv_1)).xyz * scale1) + bias1)
     * 0.04)) + (0.15 * (vec3(
      (0.1 / sqrt(dot (uv6_2, uv6_2)))
    ) * roam_cos.xyz))) - 0.04)
  ) * 0.98) + ((1.0 - q24) * texture (sampler_main, uv_orig).xyz));
  ret = tmpvar_5.xyz;
 }`,comp:`vec3 xlat_mutableneu;
vec3 xlat_mutableret1;
vec2 xlat_mutablers2;
 shader_body { 
  vec2 uv_1;
  float inten_3;
  float dist_4;
  float ang2_5;
  vec2 uv2_6;
  uv_1 = (uv - 0.5);
  uv_1 = (uv_1 * aspect.xy);
  dist_4 = 1.0;
  inten_3 = 1.0;
  xlat_mutableret1 = vec3(0.0, 0.0, 0.0);
  for (float n_2 = 0.0; n_2 <= 4.0; n_2 += 1.0) {
    vec2 uv3_7;
    ang2_5 = ((6.28 * n_2) / 4.0);
    float tmpvar_8;
    tmpvar_8 = cos(ang2_5);
    float tmpvar_9;
    tmpvar_9 = sin(ang2_5);
    uv2_6.x = ((uv_1.x * tmpvar_8) - (uv_1.y * tmpvar_9));
    uv2_6.y = ((uv_1.x * tmpvar_9) + (uv_1.y * tmpvar_8));
    uv2_6 = (uv2_6 * aspect.yx);
    dist_4 = (1.0 - fract((
      (0.25 * n_2)
     + q30)));
    inten_3 = ((sqrt(dist_4) * (1.0 - dist_4)) * 4.0);
    vec2 tmpvar_10;
    tmpvar_10.x = tmpvar_8;
    tmpvar_10.y = tmpvar_9;
    uv3_7 = (fract((
      ((3.0 * uv2_6) * dist_4)
     + 
      (0.3 * q27)
    )) + (q17 * tmpvar_10));
    xlat_mutableneu = (texture (sampler_main, uv3_7).xyz - ((texture (sampler_blur2, 
      ((uv3_7 * 1.02) * q1)
    ).xyz * scale2) + bias2));
    xlat_mutableneu = (xlat_mutableneu * vec3(greaterThanEqual (xlat_mutableneu, vec3(0.0, 0.0, 0.0))));
    xlat_mutableret1 = max (xlat_mutableret1, (xlat_mutableneu * inten_3));
  };
  xlat_mutablers2 = ((0.4 * cos(
    ((uv_1 * 13.0) + time)
  )) - dot (xlat_mutableret1, vec3(0.32, 0.49, 0.29)));
  vec4 tmpvar_11;
  tmpvar_11.w = 1.0;
  tmpvar_11.xyz = (xlat_mutableret1 + ((
    ((0.05 / sqrt(dot (xlat_mutablers2, xlat_mutablers2))) * q26)
   / 4.0) * hue_shader));
  ret = tmpvar_11.xyz;
 }`}},function(o,l){o.exports={baseVals:{rating:0,gammaadj:1.980001,decay:.5,echo_zoom:.999998,echo_alpha:.5,echo_orient:3,wave_mode:7,wave_dots:1,wave_thick:1,wave_brighten:0,darken:1,wave_a:.39158,wave_scale:.01,wave_smoothing:.504,wave_mystery:-1,modwavealphastart:.71,modwavealphaend:1.3,warpanimspeed:1.4595,warpscale:2.0067,zoom:.9999,warp:.01,sx:.9999,wave_r:.7,wave_g:0,ob_r:1,ob_g:1,ob_b:1,ib_size:.26,mv_x:64,mv_y:48,mv_l:0,mv_r:.5,mv_g:.5,mv_b:.5,mv_a:0,b1ed:0},shapes:[{baseVals:{enabled:0}},{baseVals:{enabled:0}},{baseVals:{enabled:1,sides:5,additive:1,x:.9,rad:.22613,g:.6,g2:0,b2:.4,a2:.3,border_a:0},init_eqs_str:"a.dx=0;a.dy=0;a.q22=0;a.q24=0;a.t_rel=5*a.time;a.t1=Math.floor(a.t_rel);",frame_eqs_str:"a.dx=div(randint(1E3),1E3)-.5;a.dy=div(randint(1E3),1E3)-.5;a.x=.5+a.dx*(1-div(a.q22,4));a.y=.5+a.dy*(1-div(a.q22,4));a.ang=a.time;a.a=1;a.rad=.1*a.q24+.08+div(a.q22,40);"},{baseVals:{enabled:0}}],waves:[{baseVals:{enabled:1,samples:256,spectrum:1,usedots:1,scaling:.5033,g:.6,b:.4},init_eqs_str:"a.xang=0;a.ampl=0;a.fov=0;a.t1=0;a.yang=0;a.my=0;a.oz=0;a.t_rel=0;a.mz=0;a.q26=0;a.oy=0;a.mx=0;a.zang=0;a.t_abs=0;a.ox=0;",frame_eqs_str:"",point_eqs_str:`a.t_abs=a.sample;a.t_rel=a.sample-div(a.time,1);a.ampl=a.time;a.ox=10*a.ampl*Math.sin(68*a.t_abs);a.oy=10*a.ampl*Math.cos(28*a.t_abs);a.oz=10*a.ampl*Math.cos(128*a.t_abs);a.r=1;a.g=.5;a.b=1;a.a=div(a.q26,18);a.xang=a.t1;a.yang=2*a.t1;a.zang=a.t1;a.fov=.12;a.mx=a.ox*Math.cos(a.zang)-a.oy*Math.sin(a.zang);a.my=a.ox*Math.sin(a.zang)+a.oy*Math.cos(a.zang);a.ox=a.mx;a.oy=a.my;a.mx=a.ox*Math.cos(a.yang)+a.oz*Math.sin(a.yang);a.mz=-a.ox*Math.sin(a.yang)+a.oz*Math.cos(a.yang);a.ox=
a.mx;a.oz=a.mz;a.my=a.oy*Math.cos(a.xang)-a.oz*Math.sin(a.xang);a.mz=a.oy*Math.sin(a.xang)+a.oz*Math.cos(a.xang);a.oy=a.my;a.oz=a.mz;a.oz-=6;a.x=div(a.ox*a.fov,a.oz)+.5;a.y=div(a.oy*a.fov,a.oz)+.5;`},{baseVals:{enabled:1},init_eqs_str:"",frame_eqs_str:"",point_eqs_str:"a.a=Math.max(Math.sin(div(a.time,8))-.5,0);a.r=.4;a.g=.2;a.b=.7;a.x=a.sample+.01*Math.cos(243*a.sample+a.time);a.y=.5+.5*Math.sin(div(a.time,13))+.02*Math.sin(143*a.sample);a.a=.7;"},{baseVals:{enabled:0}},{baseVals:{enabled:0}}],init_eqs_str:"a.index2=0;a.index4=0;a.index=0;a.q22=0;a.q21=0;a.q29=0;a.q1=0;a.dec_med=0;a.index3=0;a.rott=0;a.is_beat=0;a.q23=0;a.k1=0;a.q24=0;a.t_rel=0;a.dec_slow=0;a.q4=0;a.q26=0;a.p2=0;a.avg=0;a.movez=0;a.beat=0;a.p1=0;a.peak=0;a.q2=0;a.q27=0;a.q3=0;a.t0=0;a.q28=0;a.q20=0;",frame_eqs_str:`a.dec_med=pow(.9,div(30,a.fps));a.dec_slow=pow(.99,div(30,a.fps));a.beat=Math.max(Math.max(a.bass,a.mid),a.treb);a.avg=a.avg*a.dec_slow+a.beat*(1-a.dec_slow);a.is_beat=above(a.beat,.5+a.avg+a.peak)*above(a.time,a.t0+.2);a.t0=a.is_beat*a.time+(1-a.is_beat)*a.t0;a.peak=a.is_beat*a.beat+(1-a.is_beat)*a.peak*a.dec_med;a.index=mod(a.index+a.is_beat,8);a.index2=mod(a.index2+a.is_beat*bnot(a.index),4);a.index3=mod(a.index3+a.is_beat*bnot(a.index)*bnot(a.index2),3);a.q20=a.avg;a.q21=
a.beat;a.q22=a.peak;a.q23=a.index;a.q24=a.is_beat;a.q26=a.bass+a.mid+a.treb;a.k1=a.is_beat*equal(a.index,0);a.p1=a.k1*(a.p1+1)+(1-a.k1)*a.p1;a.p2=a.dec_slow*a.p2+(1-a.dec_slow)*a.p1;a.rott=div(3.14159265359*a.p2,2);a.q27=8-a.index;a.q28=.5+div(Math.sin(div(a.time,7)),10);a.q29=a.index4;a.mv_a=.2;a.t_rel=div(a.time,3);a.wave_a=Math.max(Math.sin(div(a.time,8))-.5,0);a.wave_a=0;a.wave_x=.5+.5*Math.sin(div(a.time,13));a.q1=Math.cos(a.rott);a.q2=Math.sin(a.rott);a.q3=-a.q2;a.q4=a.q1;a.movez+=div(.3,a.fps);
a.q29=a.movez;a.zoom=1;a.rot=0;a.dx=.003;`,pixel_eqs_str:"",pixel_eqs:"",warp:` shader_body { 
  vec2 tmpvar_1;
  tmpvar_1 = (((uv - vec2(0.5, 0.5)) * texsize.xy) * 0.03);
  vec4 tmpvar_2;
  tmpvar_2.w = 1.0;
  tmpvar_2.xyz = ((0.99 * texture (sampler_main, (uv + 
    (((clamp (
      (sin(tmpvar_1) / cos(tmpvar_1))
    , vec2(-12.0, -12.0), vec2(12.0, 12.0)) * cos(
      (tmpvar_1.yx * tmpvar_1.yx)
    )) * texsize.zw) * 12.0)
  )).xyz) - 0.01);
  ret = tmpvar_2.xyz;
 }`,comp:`vec3 xlat_mutableret1;
vec2 xlat_mutableuv2;
 shader_body { 
  vec2 uv_1;
  float inten_2;
  float dist_3;
  uv_1 = (uv - 0.5);
  uv_1 = (uv_1 * aspect.xy);
  dist_3 = (1.0 - fract((0.25 + q29)));
  inten_2 = (sqrt(dist_3) * (1.0 - (dist_3 * dist_3)));
  xlat_mutableret1 = max (vec3(0.0, 0.0, 0.0), (texture (sampler_main, fract(
    (((2.0 * uv_1) * dist_3) + 0.5)
  )).xyz * inten_2));
  xlat_mutableuv2.x = -(uv_1.y);
  xlat_mutableuv2.y = uv_1.x;
  dist_3 = (1.0 - fract((0.5 + q29)));
  inten_2 = (sqrt(dist_3) * (1.0 - (dist_3 * dist_3)));
  xlat_mutableret1 = max (xlat_mutableret1, (texture (sampler_main, fract(
    (((2.0 * xlat_mutableuv2) * dist_3) + 0.5)
  )).xyz * inten_2));
  dist_3 = (1.0 - fract((0.75 + q29)));
  inten_2 = (sqrt(dist_3) * (1.0 - (dist_3 * dist_3)));
  xlat_mutableret1 = max (xlat_mutableret1, (texture (sampler_main, fract(
    (((2.0 * uv_1) * dist_3) + 0.5)
  )).xyz * inten_2));
  xlat_mutableuv2.x = -(uv_1.y);
  xlat_mutableuv2.y = uv_1.x;
  dist_3 = (1.0 - fract((1.0 + q29)));
  inten_2 = (sqrt(dist_3) * (1.0 - (dist_3 * dist_3)));
  xlat_mutableret1 = max (xlat_mutableret1, (texture (sampler_main, fract(
    (((2.0 * xlat_mutableuv2) * dist_3) + 0.5)
  )).xyz * inten_2));
  vec4 tmpvar_4;
  tmpvar_4.w = 1.0;
  tmpvar_4.xyz = (xlat_mutableret1 * 3.0);
  ret = tmpvar_4.xyz;
 }`}},function(o,l){o.exports={baseVals:{rating:5,gammaadj:1.980001,decay:.5,echo_zoom:.952379,echo_alpha:.5,echo_orient:3,wave_mode:4,modwavealphabyvolume:1,wave_brighten:0,darken:1,wave_a:.391579,wave_scale:1.575857,wave_smoothing:.45,wave_mystery:.08,modwavealphastart:0,modwavealphaend:1.32,warpanimspeed:1.4595,warpscale:2.0067,zoom:.9999,warp:.01,sx:.9999,wave_r:.5,wave_g:.79,ob_size:0,ob_a:.8,ib_size:.26,mv_x:31.999998,mv_y:24.000004,mv_l:.05,mv_r:.4999,mv_g:.4999,mv_b:.4999,mv_a:0,b1ed:0},shapes:[{baseVals:{enabled:1,textured:1,rad:.545996,ang:2.199115,tex_ang:.502655,tex_zoom:2.02311,g:1,b:.9,a:.6,r2:.8,g2:.8,b2:.8,a2:.6,border_b:0,border_a:.7},init_eqs_str:"a.q29=0;a.q22=0;a.q23=0;a.q24=0;",frame_eqs_str:"a.tex_ang=1+Math.sin(div(a.time,9));a.rad=a.q29;a.tex_zoom=2+Math.sin(div(a.time,17));a.additive=div(a.q22,6);a.textured=1-bnot(a.q23)*a.q24;"},{baseVals:{enabled:0}},{baseVals:{enabled:1,sides:100,x:.503,rad:.01,tex_zoom:.609857,g:.1,a:.9,r2:1,b2:1,border_r:.5,border_g:.5,border_b:.5,border_a:0},init_eqs_str:"a.q21=0;",frame_eqs_str:"a.x=.5+div(randint(10),25);a.y=.5+div(randint(10),25);a.ang=randint(6);a.r=div(randint(4),3);a.g=div(randint(4),3);a.b=div(randint(4),3);a.r2=a.b;a.g2=a.r;a.b2=a.g;a.a=Math.min(div(a.q21,2),.9);a.rad=div(a.a,9);a.a=.5;a.a2=.8;"},{baseVals:{enabled:0}}],waves:[{baseVals:{enabled:0}},{baseVals:{enabled:0}},{baseVals:{enabled:0}},{baseVals:{enabled:0}}],init_eqs_str:"a.index2=0;a.index=0;a.copy=0;a.q22=0;a.q21=0;a.grid=0;a.q29=0;a.q1=0;a.dec_med=0;a.str=0;a.index3=0;a.rott=0;a.is_beat=0;a.q23=0;a.k1=0;a.q24=0;a.dec_slow=0;a.go=0;a.q4=0;a.q26=0;a.p2=0;a.avg=0;a.movez=0;a.beat=0;a.p1=0;a.peak=0;a.q2=0;a.q27=0;a.p3=0;a.q3=0;a.t0=0;a.rot1=0;a.q28=0;a.q30=0;a.q20=0;",frame_eqs_str:`a.dec_med=pow(.9,div(30,a.fps));a.dec_slow=pow(.99,div(30,a.fps));a.beat=Math.max(Math.max(a.bass,a.mid),a.treb);a.avg=a.avg*a.dec_slow+a.beat*(1-a.dec_slow);a.is_beat=above(a.beat,.5+a.avg+a.peak)*above(a.time,a.t0+.2);a.t0=a.is_beat*a.time+(1-a.is_beat)*a.t0;a.peak=a.is_beat*a.beat+(1-a.is_beat)*a.peak*a.dec_med;a.index=mod(a.index+a.is_beat,4);a.index2=mod(a.index2+a.is_beat*bnot(a.index),4);a.index3=mod(a.index3+a.is_beat*bnot(a.index)*bnot(a.index2),3);a.q20=a.avg;a.q21=
a.beat;a.q22=Math.max(a.peak,4);a.q23=a.index;a.q24=a.is_beat;a.q26=Math.max(a.bass+a.mid+a.treb,3);a.go=a.go*a.dec_slow+(1-a.dec_slow)*equal(a.index2,2);a.movez+=div(3*(1+.3*a.q26),a.fps)*a.go;a.q30=a.movez;a.k1=a.is_beat*equal(a.index,0);a.p1=a.k1*(a.p1+1)+(1-a.k1)*a.p1;a.p2=a.dec_med*a.p2+(1-a.dec_med)*a.p1;a.p3=a.dec_med*a.p3+(1-a.dec_med)*a.p2;a.rott=div(3.1416*a.p3,2);a.q1=Math.cos(a.rott);a.q2=Math.sin(a.rott);a.q3=-a.q2;a.q4=a.q1;a.str=a.str*a.dec_slow+(1-a.dec_slow)*a.index3;a.q27=4-a.str;
a.grid=a.grid*a.dec_med+(1-a.dec_med)*equal(a.index2,2)*bnot(a.index);a.mv_a=.6*a.grid;a.rot1=a.dec_med*a.rot1+(1-a.dec_med)*bnot(a.index2);a.q28=a.rot1;a.copy=a.copy*a.dec_slow+(1-a.dec_slow)*a.index3;a.q29=.3*a.copy;`,pixel_eqs_str:"a.dx=.02*a.q28;a.rot=.04*a.q2;a.zoom=.96+.1*Math.sin(div(a.time,7));",warp:` shader_body { 
  vec2 zz_1;
  mat2 tmpvar_2;
  tmpvar_2[uint(0)] = _qa.xy;
  tmpvar_2[1u] = _qa.zw;
  zz_1 = (((
    (uv - vec2(0.5, 0.5))
   * texsize.xy) * 0.01) * tmpvar_2);
  zz_1 = -(zz_1.yx);
  vec4 tmpvar_3;
  tmpvar_3.w = 1.0;
  tmpvar_3.xyz = ((texture (sampler_main, (uv + 
    (((clamp (
      (sin(zz_1.yx) / cos(zz_1.yx))
    , vec2(-8.0, -8.0), vec2(8.0, 8.0)) * cos(
      (4.0 * zz_1)
    )) * texsize.zw) * 16.0)
  )).xyz * 0.99) - 0.01);
  ret = tmpvar_3.xyz;
 }`,comp:` shader_body { 
  vec2 uv3_1;
  vec2 uv2_2;
  vec2 tmpvar_3;
  tmpvar_3 = ((uv - 0.5) * aspect.xy);
  float tmpvar_4;
  tmpvar_4 = (0.1 / (sqrt(
    dot (tmpvar_3, tmpvar_3)
  ) + 0.1));
  vec2 tmpvar_5;
  float tmpvar_6;
  tmpvar_6 = (ang / 3.14);
  tmpvar_5.x = tmpvar_6;
  tmpvar_5.y = (q27 * tmpvar_4);
  uv2_2.y = (tmpvar_5.y + (0.1 * q30));
  uv2_2.x = (tmpvar_6 + (0.2 * time));
  vec2 tmpvar_7;
  tmpvar_7.x = tmpvar_6;
  tmpvar_7.y = (4.0 * tmpvar_4);
  uv3_1.y = (tmpvar_7.y - (0.2 * q30));
  uv3_1.x = tmpvar_7.x;
  vec2 tmpvar_8;
  tmpvar_8 = fract(uv3_1);
  uv3_1 = tmpvar_8;
  float tmpvar_9;
  tmpvar_9 = clamp ((1.0 - (4.0 * rad)), 0.0, 1.0);
  vec4 tmpvar_10;
  tmpvar_10.w = 1.0;
  tmpvar_10.xyz = (((
    (3.0 * max (((2.0 * texture (sampler_main, uv2_2).xyz) + texture (sampler_main, tmpvar_8).xyz), ((2.0 * 
      ((texture (sampler_blur2, fract(uv2_2)).xyz * scale2) + bias2)
    ) + (
      (texture (sampler_blur2, fract(tmpvar_8)).xyz * scale2)
     + bias2))))
   * rad) + (
    ((uv.y * pow ((1.0 - rad), 8.0)) * roam_cos)
  .xyz * tmpvar_9)) + ((tmpvar_9 * 2.0) * (
    (texture (sampler_blur1, fract(uv)).xyz * scale1)
   + bias1)));
  ret = tmpvar_10.xyz;
 }`}},function(o,l){o.exports={baseVals:{rating:4,gammaadj:1.98,decay:.5,echo_zoom:1,echo_alpha:.5,echo_orient:3,wave_mode:6,additivewave:1,modwavealphabyvolume:1,wave_brighten:0,darken_center:1,darken:1,wave_a:.001,wave_scale:.236,wave_smoothing:0,wave_mystery:-.64,modwavealphastart:.81,modwavealphaend:1.4,warpanimspeed:1.459,warpscale:2.007,zoom:.9999,warp:.01,sx:.9999,wave_r:0,wave_b:.6,ob_size:.005,ob_a:.8,ib_size:.26,mv_x:64,mv_y:48,mv_l:1.85,mv_r:.5,mv_g:.5,mv_b:.5,mv_a:0,b1ed:0},shapes:[{baseVals:{enabled:1,sides:18,num_inst:4,x:.83,rad:.14349,tex_ang:3.76991,tex_zoom:5.27784,r:0,g:1,b:1,a:.5,r2:1,g2:.2,b2:1,border_b:0,border_a:0},init_eqs_str:"a.d=0;a.k1=0;a.q22=0;a.q27=0;a.r0=0;a.q24=0;a.g0=0;a.b0=0;",frame_eqs_str:`a.d=.3+.2*div(mod(a.frame,8),8);a.k1=6.28*div(a.instance,a.num_inst);a.d=.3+div(a.q22,8);a.x=.5+a.d*Math.cos(a.k1);a.y=.5+a.d*Math.sin(a.k1);a.a=Math.min(1,.2+div(.8*a.q22,2)*mod(a.q27,2));a.a2=0;a.r=.6+.4*Math.sin(div(a.time,4)+1.56);a.b=.6+.4*Math.sin(div(a.time,4)+3.14);a.g=.6+.4*Math.sin(div(a.time,4));a.r0=a.r0*bnot(a.q24)+(.5+.5*Math.sin(a.time))*a.q24;a.g0=a.g0*bnot(a.q24)+(.5+.5*Math.sin(1.7*a.time))*a.q24;a.b0=div(2-a.r0-a.g0,2);a.r=a.r0;a.b=a.b0;a.g=a.g0;a.r2=1-a.g;
a.g2=1-a.b;a.b2=1-a.r;`},{baseVals:{enabled:0}},{baseVals:{enabled:0}},{baseVals:{enabled:0}}],waves:[{baseVals:{enabled:1,samples:128,scaling:.89152,smoothing:0},init_eqs_str:"a.q22=0;a.q27=0;a.q24=0;a.t1=0;a.t2=0;a.r0=0;a.g0=0;",frame_eqs_str:"a.t1=a.t1*bnot(a.q24)+(.5+.5*Math.sin(a.time))*a.q24;a.t2=a.t2*bnot(a.q24)+(.5+.5*Math.sin(1.7*a.time))*a.q24;",point_eqs_str:"a.x=a.sample;a.y=.5;a.a=a.q22*mod(a.q27+1,2);a.a=div(a.q24*mod(a.q27+1,2),2)+0;a.r=a.t1;a.b=a.t2;a.g=div(2-a.r0-a.g0,2);"},{baseVals:{enabled:0}},{baseVals:{enabled:0}},{baseVals:{enabled:0}}],init_eqs_str:"a.index2=0;a.speed_=0;a.index=0;a.q12=0;a.q22=0;a.q21=0;a.q13=0;a.q6=0;a.q1=0;a.dec_med=0;a.q5=0;a.movz=0;a.trel=0;a.q9=0;a.rott=0;a.spg=0;a.vol__=0;a.is_beat=0;a.q31=0;a.k1=0;a.q24=0;a.vx=0;a.dec_slow=0;a.vy=0;a.vz=0;a.q4=0;a.dir=0;a.p2=0;a.avg=0;a.trig=0;a.beat=0;a.q17=0;a.vol=0;a.p1=0;a.peak=0;a.q2=0;a.q27=0;a.speed=0;a.q3=0;a.t0=0;a.vol_=0;a.q7=0;a.q28=0;a.q30=0;a.q20=0;a.q8=0;a.ang0=0;a.speed_=1;",frame_eqs_str:`a.dec_med=pow(.9,div(30,a.fps));a.dec_slow=pow(.96,div(30,a.fps));a.beat=Math.max(Math.max(a.bass,a.mid),a.treb);a.avg=a.avg*a.dec_slow+a.beat*(1-a.dec_slow);a.is_beat=above(a.beat,.2+a.avg+a.peak)*above(a.time,a.t0+.1);a.t0=a.is_beat*a.time+(1-a.is_beat)*a.t0;a.peak=a.is_beat*a.beat+(1-a.is_beat)*a.peak*a.dec_med;a.index=mod(a.index+a.is_beat,12);a.index2=mod(a.index2+a.is_beat*bnot(a.index),8);a.q20=a.avg;a.q21=a.beat;a.q22=a.peak;a.q24=a.is_beat;a.vol=div(a.bass_att+a.mid_att+
a.treb_att,2);a.vol_=a.dec_med*a.vol_+(1-a.dec_med)*a.vol;a.vol__=a.dec_med*a.vol__+(1-a.dec_med)*a.vol_;a.q27=a.index+1;a.q28=a.index2+2;a.k1=a.is_beat*equal(mod(a.index,4),0);a.p1=a.k1*(a.p1+1)+(1-a.k1)*a.p1;a.p2=a.dec_med*a.p2+(1-a.dec_med)*a.p1;a.rott=div(3.1416*a.p2,4);a.q1=Math.cos(a.rott);a.q2=Math.sin(a.rott);a.q3=-a.q2;a.q4=a.q1;a.trig=a.q24*bnot(mod(a.index,8));a.vx=a.vx*bnot(a.trig)+a.trig*(div(randint(100),100)-.5);a.vy=a.vy*bnot(a.trig)+a.trig*(div(randint(100),100)-.5);a.vz=a.vz*bnot(a.trig)+
a.trig*(div(randint(100),100)-.5);a.speed=Math.min(a.vol_-a.vol__+.5,1);a.speed=Math.max(a.speed,-.5);a.speed_=bnot(a.trig)*a.speed_+a.trig*a.speed;a.spg=a.dec_med*a.spg+(1-a.dec_med)*a.speed_;a.movz+=div(1,a.fps)*(a.speed_+div(0*a.vol_,6));a.q9=a.movz;a.q12=2*Math.min(a.q22,6);a.q13=2*Math.sin(div(a.movz,3)-div(a.time,11));a.trig=bnot(mod(a.index,4))*a.q24;a.dir=bnot(a.trig)*a.dir+a.trig*(randint(10)-5);a.trel+=div(.1,a.fps)*a.dir;a.q5=Math.cos(a.trel-a.movz);a.q6=Math.sin(div(a.trel,2)-a.movz);
a.q7=-a.q6;a.q8=a.q5;a.ang0=a.ang0*a.dec_med+a.vz*(1-a.dec_med);a.q17=2*a.ang0;a.q30=.2*Math.sin(div(a.time,8));a.q31=.5+.5*Math.sin(div(a.time,3.3));a.zoom=1;a.rot=0;a.dx=0;a.monitor=a.q28;`,pixel_eqs_str:"",pixel_eqs:"",warp:`vec3 xlat_mutablemus;
 shader_body { 
  vec2 d_1;
  vec2 uv6_2;
  vec2 uv1_3;
  vec2 tmpvar_4;
  tmpvar_4 = (uv - 0.5);
  uv1_3 = tmpvar_4;
  uv6_2 = tmpvar_4;
  float x_5;
  x_5 = (abs(tmpvar_4.x) - abs(tmpvar_4.y));
  float tmpvar_6;
  tmpvar_6 = (12.0 * sqrt((x_5 * x_5)));
  vec2 tmpvar_7;
  tmpvar_7 = normalize(tmpvar_4);
  d_1 = tmpvar_7;
  float tmpvar_8;
  tmpvar_8 = (float(mod (q28, 2.0)));
  if ((tmpvar_8 == 0.0)) {
    d_1 = ((q1 * tmpvar_7) - (q2 / tmpvar_7));
  };
  uv1_3 = (tmpvar_4 + ((-0.06 * 
    dot (((texture (sampler_blur1, uv).xyz * scale1) + bias1), vec3(0.32, 0.49, 0.29))
  ) * normalize(tmpvar_4)));
  uv1_3 = (uv1_3 - (clamp (
    ((sin(tmpvar_6) / cos(tmpvar_6)) * d_1)
  , vec2(-4.0, -4.0), vec2(4.0, 4.0)) / 60.0));
  uv6_2 = (0.4 * cos((
    (uv1_3 * 2.0)
   * q28)));
  xlat_mutablemus = (clamp (vec3((0.0006 / 
    (sqrt(dot (uv6_2, uv6_2)) - (0.002 * (q27 + (8.0 * q28))))
  )), 0.0, 1.0) * q31);
  xlat_mutablemus = (xlat_mutablemus * (1.0 + roam_cos).xyz);
  vec4 tmpvar_9;
  tmpvar_9.w = 1.0;
  tmpvar_9.xyz = ((0.4 * (
    ((texture (sampler_main, ((uv1_3 * 
      (0.8 + (0.2 * tmpvar_6))
    ) + 0.5)).xyz + xlat_mutablemus) * 0.95)
   - 0.025)) + (0.6 * texture (sampler_main, uv_orig)).xyz);
  ret = tmpvar_9.xyz;
 }`,comp:`vec3 xlat_mutableneu;
vec3 xlat_mutableret2;
vec2 xlat_mutablers0;
vec2 xlat_mutablerss;
vec2 xlat_mutableuv2;
 shader_body { 
  vec2 uv_1;
  vec2 ofs_2;
  vec3 ret1_3;
  vec2 uv5_4;
  uv_1 = ((uv - 0.5) * aspect.xy);
  vec2 tmpvar_5;
  tmpvar_5.x = q5;
  tmpvar_5.y = q6;
  uv_1 = (uv_1 + (tmpvar_5 / 4.0));
  uv5_4 = uv_1;
  mat2 tmpvar_6;
  tmpvar_6[uint(0)] = _qb.xy;
  tmpvar_6[1u] = _qb.zw;
  uv_1 = (uv_1 * tmpvar_6);
  float tmpvar_7;
  float tmpvar_8;
  tmpvar_8 = (min (abs(
    (uv5_4.y / uv5_4.x)
  ), 1.0) / max (abs(
    (uv5_4.y / uv5_4.x)
  ), 1.0));
  float tmpvar_9;
  tmpvar_9 = (tmpvar_8 * tmpvar_8);
  tmpvar_9 = (((
    ((((
      ((((-0.01213232 * tmpvar_9) + 0.05368138) * tmpvar_9) - 0.1173503)
     * tmpvar_9) + 0.1938925) * tmpvar_9) - 0.3326756)
   * tmpvar_9) + 0.9999793) * tmpvar_8);
  tmpvar_9 = (tmpvar_9 + (float(
    (abs((uv5_4.y / uv5_4.x)) > 1.0)
  ) * (
    (tmpvar_9 * -2.0)
   + 1.570796)));
  tmpvar_7 = (tmpvar_9 * sign((uv5_4.y / uv5_4.x)));
  if ((abs(uv5_4.x) > (1e-08 * abs(uv5_4.y)))) {
    if ((uv5_4.x < 0.0)) {
      if ((uv5_4.y >= 0.0)) {
        tmpvar_7 += 3.141593;
      } else {
        tmpvar_7 = (tmpvar_7 - 3.141593);
      };
    };
  } else {
    tmpvar_7 = (sign(uv5_4.y) * 1.570796);
  };
  xlat_mutablers0.x = (((tmpvar_7 / 3.1416) * 6.0) * q28);
  float tmpvar_10;
  tmpvar_10 = (1.5 / sqrt(dot (uv_1, uv_1)));
  xlat_mutablers0.y = tmpvar_10;
  vec2 tmpvar_11;
  tmpvar_11.x = (xlat_mutablers0.x + (q9 * 4.0));
  tmpvar_11.y = (tmpvar_10 + ((q9 * q28) * 4.0));
  xlat_mutablerss = (tmpvar_11 / 12.0);
  vec2 tmpvar_12;
  tmpvar_12.x = q5;
  tmpvar_12.y = q6;
  ofs_2 = (0.1 * tmpvar_12.yx);
  float tmpvar_13;
  float tmpvar_14;
  tmpvar_14 = -(q9);
  tmpvar_13 = fract(tmpvar_14);
  mat2 tmpvar_15;
  tmpvar_15[uint(0)].x = 1.0;
  tmpvar_15[uint(0)].y = -0.0;
  tmpvar_15[1u].x = 0.0;
  tmpvar_15[1u].y = 1.0;
  xlat_mutableuv2 = ((uv_1 * (
    (q13 * tmpvar_13)
   * tmpvar_15)) * aspect.yx);
  xlat_mutableneu = (3.0 * texture (sampler_main, fract((
    (xlat_mutableuv2 + 0.5)
   + ofs_2)))).xyz;
  ret1_3 = max (vec3(0.0, 0.0, 0.0), (xlat_mutableneu * (1.0 - 
    (tmpvar_13 * tmpvar_13)
  )));
  float tmpvar_16;
  tmpvar_16 = fract((tmpvar_14 + 0.3333333));
  mat2 tmpvar_17;
  tmpvar_17[uint(0)].x = -0.4990803;
  tmpvar_17[uint(0)].y = -0.8665558;
  tmpvar_17[1u].x = 0.8665558;
  tmpvar_17[1u].y = -0.4990803;
  xlat_mutableuv2 = ((uv_1 * (
    (q13 * tmpvar_16)
   * tmpvar_17)) * aspect.yx);
  xlat_mutableneu = (3.0 * texture (sampler_main, fract((
    (xlat_mutableuv2 + 0.5)
   + ofs_2)))).xyz;
  ret1_3 = max (ret1_3, (xlat_mutableneu * (1.0 - 
    (tmpvar_16 * tmpvar_16)
  )));
  float tmpvar_18;
  tmpvar_18 = fract((tmpvar_14 + 0.6666667));
  mat2 tmpvar_19;
  tmpvar_19[uint(0)].x = -0.5018377;
  tmpvar_19[uint(0)].y = 0.8649619;
  tmpvar_19[1u].x = -0.8649619;
  tmpvar_19[1u].y = -0.5018377;
  xlat_mutableuv2 = ((uv_1 * (
    (q13 * tmpvar_18)
   * tmpvar_19)) * aspect.yx);
  xlat_mutableneu = (3.0 * texture (sampler_main, fract((
    (xlat_mutableuv2 + 0.5)
   + ofs_2)))).xyz;
  ret1_3 = max (ret1_3, (xlat_mutableneu * (1.0 - 
    (tmpvar_18 * tmpvar_18)
  )));
  float tmpvar_20;
  tmpvar_20 = fract((tmpvar_14 + 1.0));
  mat2 tmpvar_21;
  tmpvar_21[uint(0)].x = 0.9999949;
  tmpvar_21[uint(0)].y = 0.003185092;
  tmpvar_21[1u].x = -0.003185092;
  tmpvar_21[1u].y = 0.9999949;
  xlat_mutableuv2 = ((uv_1 * (
    (q13 * tmpvar_20)
   * tmpvar_21)) * aspect.yx);
  xlat_mutableneu = (3.0 * texture (sampler_main, fract((
    (xlat_mutableuv2 + 0.5)
   + ofs_2)))).xyz;
  ret1_3 = max (ret1_3, (xlat_mutableneu * (1.0 - 
    (tmpvar_20 * tmpvar_20)
  )));
  vec2 tmpvar_22;
  tmpvar_22.x = (ret1_3.x + ret1_3.z);
  tmpvar_22.y = (ret1_3.x - ret1_3.y);
  xlat_mutableret2 = (((
    (texture (sampler_blur1, fract((xlat_mutablerss + (tmpvar_22 / 2.0)))).xyz * scale1)
   + bias1) / tmpvar_10) * 12.0);
  vec4 tmpvar_23;
  tmpvar_23.w = 1.0;
  tmpvar_23.xyz = ((ret1_3 + (
    ((bass_att * 0.004) / sqrt(dot (uv_1, uv_1)))
   * roam_sin).xyz) + (sqrt(xlat_mutableret2.zxy) * clamp (
    (1.0 - (ret1_3 * 4.0))
  , 0.0, 1.0)));
  ret = tmpvar_23.xyz;
 }`}},function(o,l){o.exports={baseVals:{rating:2,gammaadj:1.98,decay:.5,echo_zoom:1,echo_alpha:.5,echo_orient:3,wave_mode:7,additivewave:1,wave_thick:1,modwavealphabyvolume:1,wave_brighten:0,wrap:0,darken:1,wave_a:.001,wave_scale:.958,wave_smoothing:.45,modwavealphastart:0,modwavealphaend:1.32,warpanimspeed:1.459,warpscale:2.007,zoom:.9999,warp:.01,sx:.9999,wave_r:0,wave_g:0,wave_b:0,ob_size:0,ob_g:.1,ob_b:1,ob_a:1,ib_size:0,ib_r:0,ib_g:0,ib_b:0,mv_x:25.6,mv_y:9.6,mv_l:0,mv_r:.5,mv_g:.5,mv_b:.5,mv_a:0,b1ed:0},shapes:[{baseVals:{enabled:0}},{baseVals:{enabled:0}},{baseVals:{enabled:0}},{baseVals:{enabled:0}}],waves:[{baseVals:{enabled:0}},{baseVals:{enabled:0}},{baseVals:{enabled:0}},{baseVals:{enabled:0}}],init_eqs_str:`a.n=0;a.reg26=0;a.uvx0=0;a.reg34=0;a.reg28=0;a.reg23=0;a.q25=0;a.angchg=0;a.reg20=0;a.reg15=0;a.reg10=0;a.q12=0;a.v3=0;a.q22=0;a.q21=0;a.diry=0;a.q13=0;a.q6=0;a.posx=0;a.fps_=0;a.reg25=0;a.uvx=0;a.q1=0;a.travel=0;a.posz=0;a.q5=0;a.movz=0;a.dirz=0;a.dec_s=0;a.reg16=0;a.slow=0;a.reg36=0;a.reg22=0;a.uvy=0;a.rotz=0;a.dist_=0;a.q23=0;a.q24=0;a.reg24=0;a.cran0=0;a.vx=0;a.ran2=0;a.q11=0;a.q10=0;a.reg14=0;a.posy=0;a.vy=0;a.vz=0;a.reg31=0;a.dirx=0;a.dec_m=0;a.q4=0;a.start=0;a.reg12=
0;a.reg13=0;a.c2=0;a.reg37=0;a.s3=0;a.yslope=0;a.q16=0;a.xslope=0;a.q26=0;a.reg38=0;a.reg35=0;a.reg11=0;a.tx=0;a.avg=0;a.uvz=0;a.c3=0;a.uvy0=0;a.reg27=0;a.q19=0;a.beat=0;a.q17=0;a.vol=0;a.reg32=0;a.reg21=0;a.uvz0=0;a.len=0;a.reg18=0;a.reg30=0;a.q27=0;a.slen=0;a.q14=0;a.dist=0;a.reg17=0;a.v1=0;a.speed=0;a.s1=0;a.t0=0;a.s2=0;a.ran1=0;a.reg33=0;a.q7=0;a.ds=0;a.q28=0;a.ty=0;a.c1=0;a.v2=0;a.q20=0;a.q8=0;a.avg=.01;a.q7=.2;a.q8=div(randint(200),100)-1;a.q16=1.2;a.q18=randint(.8)+.1;a.q17=2.6;a.start=1;a.travel=
0;a.rotz=0;a.look=0;a.slow=0;a.t0=a.time+3;a.lampx=.5;a.lampy=.5;a.cran0=randint(1);for(var b=a.n=0;1E4>b;b++)a.gmegabuf[Math.floor(a.n)]=0,a.n+=1;for(b=a.n=0;1E4>b;b++)a.megabuf[Math.floor(a.n)]=0,a.n+=1;a.trelx=0;a.trely=0;a.trelz=0;a.reg20=1;a.reg21=0;a.reg22=0;a.reg23=0;a.reg24=1;a.reg25=0;a.reg26=0;a.reg27=0;a.reg28=1;b=0;do{b+=1;var c;a.ran1=div(randint(800),100);a.ran2=div(randint(800),100);a.ran3=div(randint(800),100);a.posx=randint(10)-5;a.posy=randint(10)-5;a.posz=randint(10)-5;a.c1=Math.cos(a.ran1);
a.c2=Math.cos(a.ran2);a.c3=Math.cos(a.ran3);a.s1=Math.sin(a.ran1);a.s2=Math.sin(a.ran2);a.s3=Math.sin(a.ran3);a.reg20=a.c2*a.c1;a.reg21=a.c2*a.s1;a.reg22=-a.s2;a.reg23=a.s3*a.s2*a.c1-a.c3*a.s1;a.reg24=a.s3*a.s2*a.s1+a.c3*a.c1;a.reg25=a.s3*a.c2;a.reg26=a.c3*a.s2*a.c1+a.s3*a.s1;a.reg27=a.c3*a.s2*a.s1-a.s3*a.c1;a.reg28=a.c3*a.c2;a.dist=.001;var d=0;do{d+=1;a.uvx=div(a.reg26*a.dist,a.q7);a.uvy=div(a.reg27*a.dist,a.q7);a.uvz=div(a.reg28*a.dist,a.q7);a.uvx+=a.posx;a.uvy+=a.posy;a.uvz+=a.posz;a.uvx=8*(div(a.uvx,
8)+30.5-Math.floor(div(a.uvx,8)+30.5)-.5);a.uvy=8*(div(a.uvy,8)+30.5-Math.floor(div(a.uvy,8)+30.5)-.5);a.uvz=8*(div(a.uvz,8)+30.5-Math.floor(div(a.uvz,8)+30.5)-.5);a.uvx0=a.uvx+a.q8;a.uvy0=a.uvy+a.q8;a.uvz0=a.uvz+a.q8;for(c=0;8>c;c++)a.uvx=.00001<Math.abs(1<a.uvx?1:0)?2-a.uvx:.00001<Math.abs(-1>a.uvx?1:0)?-2-a.uvx:a.uvx,a.uvy=.00001<Math.abs(1<a.uvy?1:0)?2-a.uvy:.00001<Math.abs(-1>a.uvy?1:0)?-2-a.uvy:a.uvy,a.uvz=.00001<Math.abs(1<a.uvz?1:0)?2-a.uvz:.00001<Math.abs(-1>a.uvz?1:0)?-2-a.uvz:a.uvz,a.slen=
a.uvx*a.uvx+a.uvy*a.uvy+a.uvz*a.uvz,a.uvx=(.00001<Math.abs(.25>a.slen?1:0)?4*a.uvx:.00001<Math.abs(1>a.slen?1:0)?div(a.uvx,a.slen):a.uvx)*a.q17+a.uvx0,a.uvy=(.00001<Math.abs(.25>a.slen?1:0)?4*a.uvy:.00001<Math.abs(1>a.slen?1:0)?div(a.uvy,a.slen):a.uvy)*a.q17+a.uvy0,a.uvz=(.00001<Math.abs(.25>a.slen?1:0)?4*a.uvz:.00001<Math.abs(1>a.slen?1:0)?div(a.uvz,a.slen):a.uvz)*a.q17+a.uvz0;a.len=sqrt(a.uvx*a.uvx+a.uvy*a.uvy+a.uvz*a.uvz);a.dist*=1.05;c=(.6>a.dist?1:0)*(30<a.len?1:0)}while(.00001<Math.abs(c)&&
1048576>d);d=.06>a.dist?1:0}while(.00001<Math.abs(d)&&1048576>b);`,frame_eqs_str:`a.fps_=0*a.fps_+1*(.00001<Math.abs(25>=a.fps?1:0)?a.fps:25+.5*(a.fps-25));a.dec_s=1-div(.03*30,a.fps_);a.dec_m=1-div(3,a.fps_);a.beat=a.time>a.t0+3?1:0;a.t0=.00001<Math.abs(a.beat)?a.time:a.t0;a.speed=div(Math.min(.2,a.dist_-.02)*(1+2*a.avg)*(1-0*a.slow)*.1,a.q7);a.ds=a.ds*a.dec_s+div((1-a.dec_s)*a.speed*.4,a.fps_);a.rotz=.00001<Math.abs(2<a.travel?1:0)?.5:0;a.vol=a.vol*a.dec_m+div((1-a.dec_m)*(a.bass_att+a.mid_att+a.treb_att),4);a.q1=div(a.vol,2)+.3;a.dirx=a.reg26;a.diry=a.reg27;
a.dirz=a.reg28;a.posx+=a.ds*a.dirx;a.posy+=a.ds*a.diry;a.posz+=a.ds*a.dirz;a.q4=a.posx;a.q5=a.posy;a.q6=a.posz;a.angchg=(.1-a.dist_)*(.1>a.dist_?1:0);a.travel=.00001<Math.abs(0<a.angchg?1:0)?0:a.travel+a.ds;a.v1=a.v1*a.dec_s+div((1-a.dec_s)*a.rotz*a.ds,2);a.v2=a.v2*a.dec_s+div((1-a.dec_s)*a.angchg*a.xslope,a.fps_);a.v3=a.v3*a.dec_s+(1-a.dec_s)*(div(a.angchg*a.yslope,a.fps_)+2*a.v1*Math.sin(.1*a.time));a.reg30=a.reg20;a.reg31=a.reg21;a.reg32=a.reg22;a.reg33=a.reg23;a.reg34=a.reg24;a.reg35=a.reg25;
a.reg36=a.reg26;a.reg37=a.reg27;a.reg38=a.reg28;a.n=0;for(var b=a.avg=0;5>b;b++){a.n+=1;a.ran1=div(randint(100),100);a.ran2=div(randint(100),200)-.25;a.tx=Math.cos(1.57*a.n+a.ran2)*(4>=a.n?1:0)*a.ran1;a.ty=Math.sin(1.57*a.n+a.ran2)*(4>=a.n?1:0)*a.ran1;a.c1=Math.cos(a.v1);a.c2=Math.cos(a.v2+a.ty);a.c3=Math.cos(a.v3+a.tx);a.s1=Math.sin(a.v1);a.s2=Math.sin(a.v2+a.ty);a.s3=Math.sin(a.v3+a.tx);a.reg10=a.c2*a.c1;a.reg11=a.c2*a.s1;a.reg12=-a.s2;a.reg13=a.s3*a.s2*a.c1-a.c3*a.s1;a.reg14=a.s3*a.s2*a.s1+a.c3*
a.c1;a.reg15=a.s3*a.c2;a.reg16=a.c3*a.s2*a.c1+a.s3*a.s1;a.reg17=a.c3*a.s2*a.s1-a.s3*a.c1;a.reg18=a.c3*a.c2;a.reg20=a.reg30;a.reg21=a.reg31;a.reg22=a.reg32;a.reg23=a.reg33;a.reg24=a.reg34;a.reg25=a.reg35;a.reg26=a.reg36;a.reg27=a.reg37;a.reg28=a.reg38;a.q20=a.reg10*a.reg20+a.reg11*a.reg23+a.reg12*a.reg26;a.q21=a.reg10*a.reg21+a.reg11*a.reg24+a.reg12*a.reg27;a.q22=a.reg10*a.reg22+a.reg11*a.reg25+a.reg12*a.reg28;a.q23=a.reg13*a.reg20+a.reg14*a.reg23+a.reg15*a.reg26;a.q24=a.reg13*a.reg21+a.reg14*a.reg24+
a.reg15*a.reg27;a.q25=a.reg13*a.reg22+a.reg14*a.reg25+a.reg15*a.reg28;a.q26=a.reg16*a.reg20+a.reg17*a.reg23+a.reg18*a.reg26;a.q27=a.reg16*a.reg21+a.reg17*a.reg24+a.reg18*a.reg27;a.q28=a.reg16*a.reg22+a.reg17*a.reg25+a.reg18*a.reg28;a.reg20=a.q20;a.reg21=a.q21;a.reg22=a.q22;a.reg23=a.q23;a.reg24=a.q24;a.reg25=a.q25;a.reg26=a.q26;a.reg27=a.q27;a.reg28=a.q28;a.dist=.002;var c,d=0;do{d+=1;a.uvx=div(a.reg26*a.dist,a.q7);a.uvy=div(a.reg27*a.dist,a.q7);a.uvz=div(a.reg28*a.dist,a.q7);a.uvx+=a.posx;a.uvy+=
a.posy;a.uvz+=a.posz;a.uvx=8*(div(a.uvx,8)+30.5-Math.floor(div(a.uvx,8)+30.5)-.5);a.uvy=8*(div(a.uvy,8)+30.5-Math.floor(div(a.uvy,8)+30.5)-.5);a.uvz=8*(div(a.uvz,8)+30.5-Math.floor(div(a.uvz,8)+30.5)-.5);a.uvx0=a.uvx+a.q8;a.uvy0=a.uvy+a.q8;a.uvz0=a.uvz+a.q8;for(c=0;8>c;c++)a.uvx=.00001<Math.abs(1<a.uvx?1:0)?2-a.uvx:.00001<Math.abs(-1>a.uvx?1:0)?-2-a.uvx:a.uvx,a.uvy=.00001<Math.abs(1<a.uvy?1:0)?2-a.uvy:.00001<Math.abs(-1>a.uvy?1:0)?-2-a.uvy:a.uvy,a.uvz=.00001<Math.abs(1<a.uvz?1:0)?2-a.uvz:.00001<Math.abs(-1>
a.uvz?1:0)?-2-a.uvz:a.uvz,a.slen=a.uvx*a.uvx+a.uvy*a.uvy+a.uvz*a.uvz,a.uvx=(.00001<Math.abs(.25>a.slen?1:0)?4*a.uvx:.00001<Math.abs(1>a.slen?1:0)?div(a.uvx,a.slen):a.uvx)*a.q17+a.uvx0,a.uvy=(.00001<Math.abs(.25>a.slen?1:0)?4*a.uvy:.00001<Math.abs(1>a.slen?1:0)?div(a.uvy,a.slen):a.uvy)*a.q17+a.uvy0,a.uvz=(.00001<Math.abs(.25>a.slen?1:0)?4*a.uvz:.00001<Math.abs(1>a.slen?1:0)?div(a.uvz,a.slen):a.uvz)*a.q17+a.uvz0;a.len=sqrt(a.uvx*a.uvx+a.uvy*a.uvy+a.uvz*a.uvz);a.dist*=1.1;c=(.6>a.dist?1:0)*(30<a.len?
1:0)}while(.00001<Math.abs(c)&&1048576>d);a.megabuf[Math.floor(a.n)]=a.megabuf[Math.floor(a.n)]*a.dec_s+(1-a.dec_s)*a.dist;a.avg+=Math.abs(div(a.megabuf[Math.floor(a.n)],5))}a.n=0;for(b=a.avg=0;5>b;b++)a.n+=1,a.avg+=Math.abs(div(a.megabuf[Math.floor(a.n)],5));a.xslope=Math.min(Math.max(div(2,a.avg)*(a.megabuf[1]-a.megabuf[3]),-3),3);a.yslope=Math.min(Math.max(div(2,a.avg)*(a.megabuf[4]-a.megabuf[2]),-3),3);a.monitor=a.avg;a.dist_=a.dist_*a.dec_s+(1-a.dec_s)*a.dist;a.q10=a.ds*a.q7;a.q14=Math.abs(a.ds)+
2*(Math.abs(a.v1)+Math.abs(a.v2)+Math.abs(a.v3))+.05*a.start;a.q19=.6+.4*Math.sin(.02*a.time+6*a.cran0);a.start*=.9;a.warp=0;a.zoom=1;a.dx=div(-a.v2,a.q16);a.dy=div(a.v3,a.q16);a.rot=a.v1;a.vx-=div(a.v2,a.q16);a.vy+=div(a.v3,a.q16);a.vz+=a.v1;a.q11=a.vx;a.q12=a.vy;a.movz+=a.ds;a.q13=a.movz;a.monitor=a.q13;`,pixel_eqs_str:"",pixel_eqs:"",warp:`float sustain;
float ffac;
float xlat_mutabledist;
float xlat_mutablelimit;
float xlat_mutablestruc;
vec2 xlat_mutableuv1;
vec3 xlat_mutableuv2;
 shader_body { 
  mat3 tmpvar_1;
  tmpvar_1[uint(0)].x = q20;
  tmpvar_1[uint(0)].y = q23;
  tmpvar_1[uint(0)].z = q26;
  tmpvar_1[1u].x = q21;
  tmpvar_1[1u].y = q24;
  tmpvar_1[1u].z = q27;
  tmpvar_1[2u].x = q22;
  tmpvar_1[2u].y = q25;
  tmpvar_1[2u].z = q28;
  vec3 tmpvar_2;
  tmpvar_2.x = q4;
  tmpvar_2.y = q5;
  tmpvar_2.z = q6;
  sustain = (0.98 - q14);
  ffac = q17;
  vec2 uv_3;
  uv_3 = (((uv - 0.5) * (1.0 - 
    (q10 / (1.0 - ((texture (sampler_blur1, uv).xyz * scale1) + bias1).z))
  )) + 0.5);
  xlat_mutableuv1 = (((uv_orig - 0.5) * aspect.xy) * q16);
  vec4 tmpvar_4;
  tmpvar_4 = fract((8.0 * texture (sampler_noise_lq, (uv_3 + rand_frame.yz))));
  vec3 tmpvar_5;
  tmpvar_5 = tmpvar_4.xyz;
  if ((tmpvar_4.y > (0.4 * rad))) {
    vec3 tmpvar_6;
    tmpvar_6 = (tmpvar_4.xyz - vec3(0.5, 0.5, 0.5));
    vec4 nb2_7;
    vec4 nb_8;
    vec2 tmpvar_9;
    tmpvar_9 = (0.0078125 * floor((
      (128.0 * texture (sampler_pc_main, (uv_3 - texsize.zw)).yz)
     + vec2(0.5, 0.5))));
    nb_8.x = (1.0 - (tmpvar_9.y + (0.015625 * 
      (tmpvar_9.x - 0.5)
    )));
    vec2 tmpvar_10;
    tmpvar_10 = (0.0078125 * floor((
      (128.0 * texture (sampler_pc_main, (uv_3 + (texsize.zw * vec2(1.0, -1.0)))).yz)
     + vec2(0.5, 0.5))));
    nb_8.y = (1.0 - (tmpvar_10.y + (0.015625 * 
      (tmpvar_10.x - 0.5)
    )));
    vec2 tmpvar_11;
    tmpvar_11 = (0.0078125 * floor((
      (128.0 * texture (sampler_pc_main, (uv_3 + texsize.zw)).yz)
     + vec2(0.5, 0.5))));
    nb_8.z = (1.0 - (tmpvar_11.y + (0.015625 * 
      (tmpvar_11.x - 0.5)
    )));
    vec2 tmpvar_12;
    tmpvar_12 = (0.0078125 * floor((
      (128.0 * texture (sampler_pc_main, (uv_3 + (texsize.zw * vec2(-1.0, 1.0)))).yz)
     + vec2(0.5, 0.5))));
    nb_8.w = (1.0 - (tmpvar_12.y + (0.015625 * 
      (tmpvar_12.x - 0.5)
    )));
    vec2 tmpvar_13;
    tmpvar_13 = (0.0078125 * floor((
      (128.0 * texture (sampler_pc_main, (uv_3 + (texsize.zw * vec2(0.0, -1.0)))).yz)
     + vec2(0.5, 0.5))));
    nb2_7.x = (1.0 - (tmpvar_13.y + (0.015625 * 
      (tmpvar_13.x - 0.5)
    )));
    vec2 tmpvar_14;
    tmpvar_14 = (0.0078125 * floor((
      (128.0 * texture (sampler_pc_main, (uv_3 + (texsize.zw * vec2(1.0, 0.0)))).yz)
     + vec2(0.5, 0.5))));
    nb2_7.y = (1.0 - (tmpvar_14.y + (0.015625 * 
      (tmpvar_14.x - 0.5)
    )));
    vec2 tmpvar_15;
    tmpvar_15 = (0.0078125 * floor((
      (128.0 * texture (sampler_pc_main, (uv_3 + (texsize.zw * vec2(0.0, 1.0)))).yz)
     + vec2(0.5, 0.5))));
    nb2_7.z = (1.0 - (tmpvar_15.y + (0.015625 * 
      (tmpvar_15.x - 0.5)
    )));
    vec2 tmpvar_16;
    tmpvar_16 = (0.0078125 * floor((
      (128.0 * texture (sampler_pc_main, (uv_3 + (texsize.zw * vec2(-1.0, 0.0)))).yz)
     + vec2(0.5, 0.5))));
    nb2_7.w = (1.0 - (tmpvar_16.y + (0.015625 * 
      (tmpvar_16.x - 0.5)
    )));
    vec4 tmpvar_17;
    tmpvar_17 = min (nb_8, nb2_7);
    nb_8.zw = tmpvar_17.zw;
    nb_8.xy = min (tmpvar_17.xy, tmpvar_17.zw);
    xlat_mutabledist = (min (nb_8.x, nb_8.y) + ((0.006 * tmpvar_6.x) * abs(tmpvar_6.y)));
  } else {
    xlat_mutabledist = tmpvar_5.x;
  };
  vec2 tmpvar_18;
  tmpvar_18 = (0.0078125 * floor((
    (128.0 * texture (sampler_pc_main, uv_3).yz)
   + vec2(0.5, 0.5))));
  xlat_mutabledist = (min (xlat_mutabledist, (1.0 - 
    (tmpvar_18.y + (0.015625 * (tmpvar_18.x - 0.5)))
  )) - (q10 * 0.8));
  xlat_mutablelimit = (15.0 + (10.0 * xlat_mutabledist));
  vec3 tmpvar_19;
  tmpvar_19.xy = (xlat_mutableuv1 * xlat_mutabledist);
  tmpvar_19.z = xlat_mutabledist;
  xlat_mutableuv2 = (((tmpvar_19 / q7) * tmpvar_1) + tmpvar_2);
  xlat_mutableuv2 = ((fract(
    ((xlat_mutableuv2 / 8.0) + 0.5)
  ) - 0.5) * 8.0);
  int iterations_21;
  vec3 zz0_22;
  vec3 zz_23;
  zz_23 = xlat_mutableuv2;
  zz0_22 = (xlat_mutableuv2 + q8);
  iterations_21 = int((8.0 - float(
    (xlat_mutabledist > 0.8)
  )));
  for (int n_20 = 0; n_20 <= iterations_21; n_20++) {
    zz_23 = ((2.0 * clamp (zz_23, vec3(-1.0, -1.0, -1.0), vec3(1.0, 1.0, 1.0))) - zz_23);
    zz_23 = (zz_23 * (clamp (
      max ((0.25 / dot (zz_23, zz_23)), 0.25)
    , 0.0, 1.0) * 4.0));
    zz_23 = ((ffac * zz_23) + zz0_22);
  };
  xlat_mutablestruc = (sqrt(dot (zz_23.xz, zz_23.xz)) / xlat_mutablelimit);
  vec2 tmpvar_24;
  tmpvar_24 = (0.0078125 * floor((
    (128.0 * vec2((1.0 - xlat_mutabledist)))
   + vec2(0.5, 0.5))));
  vec2 tmpvar_25;
  tmpvar_25.x = ((64.0 * (
    (1.0 - xlat_mutabledist)
   - tmpvar_24.x)) + 0.5);
  tmpvar_25.y = tmpvar_24.x;
  vec3 tmpvar_26;
  float tmpvar_27;
  tmpvar_27 = (q14 * 2.0);
  tmpvar_26.x = (((1.0 - sustain) * xlat_mutablestruc) + (sustain * mix (texture (sampler_main, uv_3).xyz, 
    ((texture (sampler_blur1, uv_3).xyz * scale1) + bias1)
  , vec3(tmpvar_27)).x));
  tmpvar_26.yz = tmpvar_25;
  vec3 tmpvar_28;
  tmpvar_28.y = 1.0;
  tmpvar_28.x = sustain;
  tmpvar_28.z = 1.0;
  vec3 tmpvar_29;
  tmpvar_29.y = 0.0;
  tmpvar_29.x = 0.003921569;
  tmpvar_29.z = (0.01568628 * (0.2 + rad));
  vec4 tmpvar_30;
  tmpvar_30.w = 1.0;
  tmpvar_30.xyz = mix (tmpvar_26, ((
    mix (texture (sampler_main, uv_3).xyz, ((texture (sampler_blur1, uv_3).xyz * scale1) + bias1), vec3(tmpvar_27))
   * tmpvar_28) - tmpvar_29), vec3(clamp ((
    sqrt(dot (zz_23, zz_23))
   - xlat_mutablelimit), 0.0, 1.0)));
  ret = tmpvar_30.xyz;
 }`,comp:`float xlat_mutableinten;
float xlat_mutabletmp;
vec2 xlat_mutableuv1;
vec2 xlat_mutableuv2;
float xlat_mutablez;
 shader_body { 
  float t_rel_2;
  vec3 ret1_3;
  float struc_4;
  xlat_mutableuv1 = ((uv * aspect.xy) - vec2(0.5, 0.5));
  vec4 tmpvar_5;
  tmpvar_5 = texture (sampler_main, uv);
  float tmpvar_6;
  vec4 tmpvar_7;
  tmpvar_7 = texture (sampler_blur1, uv);
  tmpvar_6 = mix (min ((1.0 - tmpvar_5.z), (1.0 - 
    ((texture (sampler_blur2, uv).xyz * scale2) + bias2)
  .z)), (1.0 - (
    (tmpvar_7.xyz * scale1)
   + bias1).z), 0.5);
  struc_4 = ((mix (tmpvar_5.xyz, 
    ((tmpvar_7.xyz * scale1) + bias1)
  , vec3(tmpvar_6)).x * (1.0 - tmpvar_6)) * tmpvar_6);
  vec2 tmpvar_8;
  tmpvar_8.x = q11;
  tmpvar_8.y = q12;
  xlat_mutableuv2 = ((xlat_mutableuv1 * 0.2) - (tmpvar_8 * 0.2));
  vec2 uvi_9;
  uvi_9 = (xlat_mutableuv2 * 4.0);
  float zv_10;
  zv_10 = (0.008 * time);
  xlat_mutabletmp = clamp (dot ((texture (sampler_noise_hq, 
    (xlat_mutableuv2 + (0.03 * ((
      (dot (texture (sampler_noise_hq, uvi_9), vec4(0.32, 0.49, 0.29, 0.0)) + (dot (texture (sampler_noise_hq, (
        (uvi_9 * 2.0)
       + zv_10)), vec4(0.32, 0.49, 0.29, 0.0)) / 2.0))
     + 
      (dot (texture (sampler_noise_hq, ((uvi_9 * 4.0) + (2.0 * zv_10))), vec4(0.32, 0.49, 0.29, 0.0)) / 4.0)
    ) + (
      dot (texture (sampler_noise_hq, ((uvi_9 * 8.0) + (4.0 * zv_10))), vec4(0.32, 0.49, 0.29, 0.0))
     / 8.0))))
  ) - 0.4), vec4(0.32, 0.49, 0.29, 0.0)), 0.0, 1.0);
  float tmpvar_11;
  tmpvar_11 = clamp ((pow (xlat_mutabletmp, 1.2) * sign(xlat_mutabletmp)), 0.0, 1.0);
  xlat_mutabletmp = tmpvar_11;
  vec3 tmpvar_12;
  tmpvar_12.xy = vec2(0.1, 0.1);
  tmpvar_12.z = (1.2 - uv.y);
  ret1_3 = ((tmpvar_12 + 0.07) + ((
    clamp (((tmpvar_6 * 2.0) - 1.5), 0.0, 1.0)
   * tmpvar_11) * 4.0));
  t_rel_2 = (q13 * 6.0);
  for (int n_1 = 1; n_1 <= 3; n_1++) {
    xlat_mutablez = (1.0 - fract((
      (float(n_1) / 3.0)
     - 
      (fract(-(t_rel_2)) / 3.0)
    )));
    xlat_mutableinten = (((1.0 - xlat_mutablez) * xlat_mutablez) * 2.0);
    vec2 tmpvar_13;
    tmpvar_13.x = q11;
    tmpvar_13.y = q12;
    xlat_mutableuv2 = (((xlat_mutablez * xlat_mutableuv1) / 4.0) - (tmpvar_13 / 6.0));
    vec2 uvi_14;
    uvi_14 = (xlat_mutableuv2 * 4.0);
    float zv_15;
    zv_15 = (0.008 * time);
    xlat_mutabletmp = clamp (dot ((
      (texture (sampler_noise_hq, (xlat_mutableuv2 + (0.03 * (
        ((dot (texture (sampler_noise_hq, uvi_14), vec4(0.32, 0.49, 0.29, 0.0)) + (dot (texture (sampler_noise_hq, 
          ((uvi_14 * 2.0) + zv_15)
        ), vec4(0.32, 0.49, 0.29, 0.0)) / 2.0)) + (dot (texture (sampler_noise_hq, (
          (uvi_14 * 4.0)
         + 
          (2.0 * zv_15)
        )), vec4(0.32, 0.49, 0.29, 0.0)) / 4.0))
       + 
        (dot (texture (sampler_noise_hq, ((uvi_14 * 8.0) + (4.0 * zv_15))), vec4(0.32, 0.49, 0.29, 0.0)) / 8.0)
      )))) - (xlat_mutablez * 0.5))
     - 0.3), vec4(0.32, 0.49, 0.29, 0.0)), 0.0, 1.0);
    xlat_mutabletmp = (((
      clamp ((xlat_mutabletmp * sign(xlat_mutabletmp)), 0.0, 1.0)
     * xlat_mutableinten) * q1) * 2.0);
    ret1_3 = (((ret1_3 + 
      ((vec3(4.0, 3.0, 0.8) * q1) * struc_4)
    ) * clamp (
      (1.0 - xlat_mutabletmp)
    , 0.0, 1.0)) + xlat_mutabletmp);
  };
  vec4 tmpvar_16;
  tmpvar_16.w = 1.0;
  tmpvar_16.xyz = (1.0 - exp((-1.6 * ret1_3)));
  ret = tmpvar_16.xyz;
 }`}},function(o,l){o.exports={baseVals:{rating:4,gammaadj:1.98,decay:.5,echo_zoom:1,echo_alpha:.5,echo_orient:3,additivewave:1,wave_dots:1,wave_thick:1,wave_brighten:0,darken:1,wave_a:.001,wave_scale:.527,wave_smoothing:0,wave_mystery:.6,modwavealphastart:0,modwavealphaend:1.32,warpanimspeed:1.459,warpscale:2.007,zoom:.9999,warp:.01,sx:.9999,wave_g:.49,ob_a:1,ib_size:.26,mv_x:64,mv_y:48,mv_l:1.85,mv_r:.5,mv_g:.5,mv_b:.5,mv_a:0,b2x:.6,b3x:.4,b1ed:0},shapes:[{baseVals:{enabled:0}},{baseVals:{enabled:1,sides:5,additive:1,num_inst:256,x:.26,y:.2,rad:.39317,tex_zoom:.9355,g2:0,a2:.2,border_g:0,border_b:0,border_a:0},init_eqs_str:"a.n=0;a.w=0;a.high=0;a.q12=0;a.arg=0;a.q13=0;a.y0=0;a.flen=0;a.x0=0;a.k1=0;a.q11=0;a.z0=0;a.exc=0;a.p2=0;a.p1=0;a.a0=0;a.q2=0;a.slen=0;a.q14=0;a.q3=0;a.q32=0;a.rad0=0;",frame_eqs_str:`a.n=a.instance;a.flen=a.reg00;a.slen=div(a.reg00,2);a.z0=10;a.y0=div(a.gmegabuf[Math.floor(2E3+a.n+a.flen)],a.z0);a.x0=div(a.gmegabuf[Math.floor(2E3+a.n)],a.z0);a.a0=a.gmegabuf[Math.floor(a.n+1E4)];a.k1=div(a.instance,a.num_inst)-.5;a.x=.5+a.x0+Math.sin(8*a.k1*Math.sin(.07*a.q12))*Math.sin(.13*a.q11)*a.q3*.7;a.y=.5+a.q32*(a.y0+Math.sin(8*a.k1*Math.sin(.1*a.q14))*Math.sin(.2*a.q13)*a.q3*.7);a.arg=div(a.q2,8);a.high=Math.exp(-500*pow(a.arg+.5-div(a.instance,a.num_inst),2));a.high+=
Math.exp(-500*pow(-a.arg+.5-div(a.instance,a.num_inst),2));a.exc=sqrt(pow(a.x-.5,2)+pow(a.y-.5,2));a.rad0=above(a.z0,0)*Math.min(.1,div(a.a0,60))+.005;a.rad0=a.rad0*(1+2*a.exc)*(1+a.high);a.p1=.5+div(Math.sin(a.q12),2);a.p2=.5+div(Math.sin(1.4*a.q13),2);a.exc=pow(a.x-a.p1,2)+pow(a.y-a.p2,2);a.rad=Math.min(a.rad0*(1+div(.004*a.q3,Math.abs(a.exc))),1);a.a=Math.min(8*a.a0+.4,1);a.k1=5*div(a.instance,a.num_inst)+a.high;a.w=1-Math.exp(div(-a.treb_att,2)-.5);a.g=a.w+(1-a.w)*Math.sin(a.k1);a.r=a.w+(1-a.w)*
Math.sin(a.k1-div(6.28,3));a.b=a.w+(1-a.w)*Math.sin(a.k1-div(12.56,3));a.a2=div(a.a,4);a.g2=0*a.g;a.b2=0*a.b;a.r2=0*a.r;`},{baseVals:{enabled:0}},{baseVals:{enabled:0}}],waves:[{baseVals:{enabled:1,sep:120,spectrum:1,additive:1,scaling:7.52386,smoothing:0,r:0,a:.7},init_eqs_str:"a.flen=0;a.n=0;a.vol=0;a.chg=0;a.dec=0;a.q1=0;a.q2=0;",frame_eqs_str:"",point_eqs_str:`a.flen=a.reg00;a.n=Math.floor(a.sample*a.flen);a.vol=(a.value1+a.value2)*(1+div(.1,a.sample+.03));a.chg=Math.min(Math.max(a.vol-a.gmegabuf[Math.floor(a.n)],-1),1);a.dec=.00001<Math.abs(0<a.chg?1:0)?1-.3*a.chg:1+.2*a.chg;a.chg=a.q1-a.q2;a.dec=.94-Math.abs(a.chg)*(.00001<Math.abs(0<a.chg?1:0)?.2:.1);a.dec=Math.min(Math.max(a.dec,0),1);a.gmegabuf[Math.floor(a.n)]=a.gmegabuf[Math.floor(a.n)]*a.dec+a.vol*(1-a.dec);a.dec=div(a.q2,4);a.dec=Math.max(Math.min(a.dec,1),.1);a.gmegabuf[Math.floor(a.n)]=
a.gmegabuf[Math.floor(a.n)]*a.dec+a.gmegabuf[Math.floor(a.n+(.8>a.q2?1:0))]*(1-a.dec);a.gmegabuf[Math.floor(a.n+1E4)]=.2*a.gmegabuf[Math.floor(a.n+1E4)]+div(.8*a.vol,3);a.a=0;a.x=a.sample;a.y=.2+.23*a.gmegabuf[Math.floor(a.n+0)];`},{baseVals:{enabled:0}},{baseVals:{enabled:0}},{baseVals:{enabled:0}}],init_eqs_str:"a.n=0;a.sw2=0;a.in1=0;a.q12=0;a.q13=0;a.sw3=0;a.dif=0;a.q1=0;a.lev3=0;a.flen=0;a.lev4=0;a.in2=0;a.lev1=0;a.k1=0;a.q11=0;a.ofs=0;a.dec_m=0;a.i=0;a.k=0;a.m2=0;a.vol=0;a.q2=0;a.slen=0;a.m1=0;a.q14=0;a.sw1=0;a.lev2=0;a.q3=0;a.reg00=0;a.vol_=0;a.dec=0;a.q32=0;a.sw4=0;for(var b=a.n=0;5E4>b;b++)a.gmegabuf[Math.floor(a.n)]=0,a.megabuf[Math.floor(a.n)]=0,a.n+=1;a.sw1=randint(8);a.sw2=randint(8);a.sw3=randint(8);a.sw4=randint(8);",frame_eqs_str:`a.flen=512;a.reg00=a.flen;a.slen=div(a.flen,2);a.dec_m=pow(.94,div(30,a.fps));a.n=0;for(var b=a.vol=0;b<a.slen;b++)a.vol+=div(pow(a.gmegabuf[Math.floor(a.n)],2),a.flen),a.n+=1;a.vol=div(sqrt(a.vol),2);a.vol_=a.vol_*a.dec_m+(1-a.dec_m)*a.vol;a.lev1=a.lev1*a.dec_m+(1-a.dec_m)*a.gmegabuf[1];a.lev2=a.lev2*a.dec_m+(1-a.dec_m)*a.gmegabuf[20];a.lev3=a.lev3*a.dec_m+(1-a.dec_m)*a.gmegabuf[50];a.lev4=a.lev4*a.dec_m+(1-a.dec_m)*a.gmegabuf[100];a.sw1+=div(0<a.lev1-a.gmegabuf[1]?1:0,a.fps);
a.sw2+=div(0<a.lev2-a.gmegabuf[20]?1:0,a.fps);a.sw3+=div(0<a.lev3-a.gmegabuf[50]?1:0,a.fps);a.sw4+=div(0<a.lev4-a.gmegabuf[100]?1:0,a.fps);a.dif=16*(1+Math.sin(div(a.sw3,4)))+2;a.ofs=8*Math.sin(div(a.sw2,3));a.n=0;a.k1=0*a.frame;for(b=0;b<a.slen;b++)a.m1=mod(a.n,a.slen),a.m2=mod(a.n+a.ofs,a.slen),a.k=mod(a.m1+a.dif,a.slen),a.i=mod(a.slen+a.m2-a.dif,a.slen),a.in1=1.2*div(a.gmegabuf[Math.floor(a.m1)]-a.gmegabuf[Math.floor(a.k)],pow(a.vol_+.03,.8)),a.in2=1.2*div(a.gmegabuf[Math.floor(a.m2)]-a.gmegabuf[Math.floor(a.i)],
pow(a.vol_+.03,.8)),a.dec=.00001<Math.abs(pow(a.gmegabuf[Math.floor(2E3+a.n)],2)+pow(a.gmegabuf[Math.floor(2E3+a.flen+a.n)],2)>a.in1*a.in1+a.in2*a.in2?1:0)?.8:.94,a.dec=pow(a.dec,div(30,a.fps)),a.gmegabuf[Math.floor(2E3+a.n)]=a.gmegabuf[Math.floor(2E3+a.n)]*a.dec+(1-a.dec)*a.in1,a.gmegabuf[Math.floor(2E3+a.flen+a.n)]=a.gmegabuf[Math.floor(2E3+a.flen+a.n)]*a.dec+(1-a.dec)*a.in2,a.n+=1;a.q1=div(a.bass+a.treb+a.mid,3);a.q2=div(a.bass_att+a.treb_att+a.mid_att,3);a.q3=a.vol_;a.q11=a.sw1;a.q12=a.sw2;a.q13=
a.sw3;a.q14=a.sw4;a.rot=0;a.zoom=.98;a.warp=.3;a.rot=0;a.q32=a.aspecty;a.monitor=a.dif;`,pixel_eqs_str:"",pixel_eqs:"",warp:` shader_body { 
  vec4 tmpvar_1;
  tmpvar_1.w = 1.0;
  tmpvar_1.xyz = ((texture (sampler_main, uv).xyz * clamp (
    (q1 - 0.8)
  , 0.0, 1.0)) * 0.92);
  ret = tmpvar_1.xyz;
 }`,comp:` shader_body { 
  vec3 ret_1;
  ret_1 = (texture (sampler_main, uv).xyz + ((texture (sampler_blur2, uv).xyz * scale2) + bias2));
  ret_1 = (ret_1 + ((0.8 * 
    (hue_shader - 0.8)
  ) * (1.0 - uv.y)));
  vec4 tmpvar_2;
  tmpvar_2.w = 1.0;
  tmpvar_2.xyz = ret_1;
  ret = tmpvar_2.xyz;
 }`}},function(o,l){o.exports={baseVals:{rating:0,gammaadj:1.980001,decay:.5,echo_zoom:.999998,echo_alpha:.5,echo_orient:3,wave_mode:4,additivewave:1,wave_dots:1,modwavealphabyvolume:1,darken:1,wave_a:.33064,wave_scale:.897961,wave_smoothing:.108,wave_mystery:.1,modwavealphastart:.72,modwavealphaend:1.28,warpanimspeed:1.4595,warpscale:2.0067,zoom:.9999,warp:.01,sx:.9999,wave_r:0,wave_g:.5,wave_b:.5,wave_y:.54,ob_r:1,ob_g:1,ob_b:1,ib_size:.26,mv_x:24.799994,mv_dy:.16,mv_l:1.5,mv_a:0,b1ed:0},shapes:[{baseVals:{enabled:0}},{baseVals:{enabled:0}},{baseVals:{enabled:0}},{baseVals:{enabled:0}}],waves:[{baseVals:{enabled:1,samples:352,usedots:1,additive:1,scaling:.038558,smoothing:.2,g:0},init_eqs_str:"a.t02=0;a.q1=0;a.ratio=0;a.ampl=0;a.x1=0;a.y1=0;",frame_eqs_str:"a.q1=a.bass_att;",point_eqs_str:`a.r=Math.abs(Math.sin(div(a.frame,38)));a.g=.5*Math.abs(Math.cos(div(a.frame,45)));a.b=.5*Math.abs(Math.sin(div(a.frame,133)));a.a=.3;a.t02+=div(a.q1,10);a.ratio=Math.sin(div(a.frame,49));a.ampl=.01+.4*sqr(Math.sin(div(a.frame,18))*Math.cos(div(a.frame,123)));a.x1=div(a.r-.5,15)+.5+a.ampl*Math.sin(6.28*a.sample);a.y1=div(a.b-.5,15)+.5+a.ampl*Math.cos(6.28*a.sample);a.x=a.x1+.2*(a.ampl+a.ratio)*Math.sin(6.28*a.sample*a.ratio*7.3);a.y=a.y1+.2*(a.ampl+a.ratio)*Math.cos(37.68*a.sample);
`},{baseVals:{enabled:0}},{baseVals:{enabled:0}},{baseVals:{enabled:0}}],init_eqs_str:"a.index2=0;a.q25=0;a.index=0;a.q18=0;a.q22=0;a.q21=0;a.q29=0;a.q6=0;a.movex=0;a.q1=0;a.dec_med=0;a.q5=0;a.index3=0;a.rott=0;a.is_beat=0;a.q23=0;a.k1=0;a.q24=0;a.dec_slow=0;a.q4=0;a.q26=0;a.p2=0;a.mov=0;a.avg=0;a.beat=0;a.p1=0;a.dx1=0;a.peak=0;a.q2=0;a.q27=0;a.clear=0;a.p3=0;a.q3=0;a.t0=0;a.rot1=0;a.q32=0;a.q28=0;a.q20=0;a.clear=.5;",frame_eqs_str:`a.dec_med=pow(.96,div(30,a.fps));a.dec_slow=pow(.99,div(30,a.fps));a.beat=Math.max(Math.max(a.bass,a.mid),a.treb);a.avg=a.avg*a.dec_slow+a.beat*(1-a.dec_slow);a.is_beat=above(a.beat,.2+a.avg+a.peak)*above(a.time,a.t0+.2);a.t0=a.is_beat*a.time+(1-a.is_beat)*a.t0;a.peak=a.is_beat*a.beat+(1-a.is_beat)*a.peak*a.dec_med;a.index=mod(a.index+a.is_beat,4);a.index2=mod(a.index2+a.is_beat*bnot(a.index),8);a.index3=mod(a.index3+a.is_beat*bnot(a.index)*bnot(a.index2),3);a.q20=a.avg;a.q21=
a.beat;a.q22=a.peak;a.q23=a.index;a.q24=a.is_beat;a.q26=a.bass+a.mid+a.treb;a.k1=a.is_beat*equal(a.index,0);a.p1=a.k1*(a.p1+1)+(1-a.k1)*a.p1;a.p2=a.dec_med*a.p2+(1-a.dec_med)*a.p1;a.p3=a.dec_med*a.p3+(1-a.dec_med)*a.p2;a.rott=div(3.1416*a.p3,4);a.rot1+=a.q26;a.q25=.01*a.rot1;a.q27=8-a.index;a.q28=a.index3;a.dx1=a.dec_med*a.dx1+(1-a.dec_med)*bnot(a.index2);a.q29=a.dx1;a.monitor=a.q29;a.q1=Math.cos(a.rott);a.q2=Math.sin(a.rott);a.q3=-a.q2;a.q4=a.q1;a.q5=1.5*Math.cos(div(a.time,9));a.q6=.5*Math.sin(div(a.time,
7));a.clear=a.clear*a.dec_med+1-a.dec_med;a.q32=a.clear;a.mov=bnot(a.q24)*a.movex+(div(randint(100),100)-50)*a.q2;a.movex+=div(.2,a.fps)*a.q2;a.q18=a.movex;`,pixel_eqs_str:"",pixel_eqs:"",warp:` shader_body { 
  vec2 uv6_1;
  vec2 tmpvar_2;
  tmpvar_2 = ((uv - 0.5) * aspect.xy);
  float tmpvar_3;
  tmpvar_3 = (rand_frame * 64.0).x;
  uv6_1 = (0.5 * cos((
    ((tmpvar_2 * mat2(0.7, -0.7, 0.7, 0.7)) * 17.0)
   + 
    (rand_frame * 6.0)
  .xy)));
  float x_4;
  x_4 = (uv6_1.x + uv6_1.y);
  vec4 tmpvar_5;
  tmpvar_5.w = 1.0;
  tmpvar_5.xyz = ((0.147 * (
    (texture (sampler_main, (uv + clamp ((
      (sin(tmpvar_3) / cos(tmpvar_3))
     * 
      normalize(tmpvar_2)
    ), vec2(-8.0, -8.0), vec2(8.0, 8.0)))).xyz + (0.15 * (vec3((0.01 / 
      sqrt((x_4 * x_4))
    )) * roam_cos.xyz)))
   - 0.02)) + ((0.85 * 
    (texture (sampler_main, uv_orig).xyz - 0.002)
  ) * q32));
  ret = tmpvar_5.xyz;
 }`,comp:`vec2 xlat_mutabledz;
vec3 xlat_mutableret1;
vec2 xlat_mutableuv3;
vec2 xlat_mutableuv4;
 shader_body { 
  vec2 uv_1;
  float inten_2;
  float dist_3;
  vec3 ret_4;
  uv_1 = (uv - 0.5);
  float tmpvar_5;
  tmpvar_5 = (time / 2.0);
  dist_3 = (1.0 - fract(tmpvar_5));
  inten_2 = ((sqrt(dist_3) * (1.0 - dist_3)) * 2.0);
  vec2 tmpvar_6;
  tmpvar_6.y = 0.4;
  tmpvar_6.x = q18;
  xlat_mutableuv3 = (((2.0 * uv_1) * dist_3) + tmpvar_6);
  vec2 tmpvar_7;
  tmpvar_7.y = 0.0;
  tmpvar_7.x = texsize.z;
  vec2 tmpvar_8;
  tmpvar_8.y = 0.0;
  tmpvar_8.x = texsize.z;
  xlat_mutabledz.x = (inten_2 * dot ((texture (sampler_main, 
    (xlat_mutableuv3 + tmpvar_7)
  ).xyz - texture (sampler_main, 
    (xlat_mutableuv3 - tmpvar_8)
  ).xyz), vec3(0.32, 0.49, 0.29)));
  vec2 tmpvar_9;
  tmpvar_9.x = 0.0;
  tmpvar_9.y = texsize.w;
  vec2 tmpvar_10;
  tmpvar_10.x = 0.0;
  tmpvar_10.y = texsize.w;
  xlat_mutabledz.y = (inten_2 * dot ((texture (sampler_main, 
    (xlat_mutableuv3 + tmpvar_9)
  ).xyz - texture (sampler_main, 
    (xlat_mutableuv3 - tmpvar_10)
  ).xyz), vec3(0.32, 0.49, 0.29)));
  xlat_mutableret1 = max (vec3(0.0, 0.0, 0.0), (texture (sampler_main, xlat_mutableuv3).xyz * inten_2));
  dist_3 = (1.0 - fract((0.3333333 + tmpvar_5)));
  inten_2 = ((sqrt(dist_3) * (1.0 - dist_3)) * 2.0);
  vec2 tmpvar_11;
  tmpvar_11.y = 0.4;
  tmpvar_11.x = q18;
  xlat_mutableuv3 = (((2.0 * uv_1) * dist_3) + tmpvar_11);
  vec2 tmpvar_12;
  tmpvar_12.y = 0.0;
  tmpvar_12.x = texsize.z;
  vec2 tmpvar_13;
  tmpvar_13.y = 0.0;
  tmpvar_13.x = texsize.z;
  xlat_mutabledz.x = (xlat_mutabledz.x + (inten_2 * dot (
    (texture (sampler_main, (xlat_mutableuv3 + tmpvar_12)).xyz - texture (sampler_main, (xlat_mutableuv3 - tmpvar_13)).xyz)
  , vec3(0.32, 0.49, 0.29))));
  vec2 tmpvar_14;
  tmpvar_14.x = 0.0;
  tmpvar_14.y = texsize.w;
  vec2 tmpvar_15;
  tmpvar_15.x = 0.0;
  tmpvar_15.y = texsize.w;
  xlat_mutabledz.y = (xlat_mutabledz.y + (inten_2 * dot (
    (texture (sampler_main, (xlat_mutableuv3 + tmpvar_14)).xyz - texture (sampler_main, (xlat_mutableuv3 - tmpvar_15)).xyz)
  , vec3(0.32, 0.49, 0.29))));
  xlat_mutableret1 = max (xlat_mutableret1, (texture (sampler_main, xlat_mutableuv3).xyz * inten_2));
  dist_3 = (1.0 - fract((0.6666667 + tmpvar_5)));
  inten_2 = ((sqrt(dist_3) * (1.0 - dist_3)) * 2.0);
  vec2 tmpvar_16;
  tmpvar_16.y = 0.4;
  tmpvar_16.x = q18;
  xlat_mutableuv3 = (((2.0 * uv_1) * dist_3) + tmpvar_16);
  vec2 tmpvar_17;
  tmpvar_17.y = 0.0;
  tmpvar_17.x = texsize.z;
  vec2 tmpvar_18;
  tmpvar_18.y = 0.0;
  tmpvar_18.x = texsize.z;
  xlat_mutabledz.x = (xlat_mutabledz.x + (inten_2 * dot (
    (texture (sampler_main, (xlat_mutableuv3 + tmpvar_17)).xyz - texture (sampler_main, (xlat_mutableuv3 - tmpvar_18)).xyz)
  , vec3(0.32, 0.49, 0.29))));
  vec2 tmpvar_19;
  tmpvar_19.x = 0.0;
  tmpvar_19.y = texsize.w;
  vec2 tmpvar_20;
  tmpvar_20.x = 0.0;
  tmpvar_20.y = texsize.w;
  xlat_mutabledz.y = (xlat_mutabledz.y + (inten_2 * dot (
    (texture (sampler_main, (xlat_mutableuv3 + tmpvar_19)).xyz - texture (sampler_main, (xlat_mutableuv3 - tmpvar_20)).xyz)
  , vec3(0.32, 0.49, 0.29))));
  xlat_mutableret1 = max (xlat_mutableret1, (texture (sampler_main, xlat_mutableuv3).xyz * inten_2));
  dist_3 = (1.0 - fract((1.0 + tmpvar_5)));
  inten_2 = ((sqrt(dist_3) * (1.0 - dist_3)) * 2.0);
  vec2 tmpvar_21;
  tmpvar_21.y = 0.4;
  tmpvar_21.x = q18;
  xlat_mutableuv3 = (((2.0 * uv_1) * dist_3) + tmpvar_21);
  vec2 tmpvar_22;
  tmpvar_22.y = 0.0;
  tmpvar_22.x = texsize.z;
  vec2 tmpvar_23;
  tmpvar_23.y = 0.0;
  tmpvar_23.x = texsize.z;
  xlat_mutabledz.x = (xlat_mutabledz.x + (inten_2 * dot (
    (texture (sampler_main, (xlat_mutableuv3 + tmpvar_22)).xyz - texture (sampler_main, (xlat_mutableuv3 - tmpvar_23)).xyz)
  , vec3(0.32, 0.49, 0.29))));
  vec2 tmpvar_24;
  tmpvar_24.x = 0.0;
  tmpvar_24.y = texsize.w;
  vec2 tmpvar_25;
  tmpvar_25.x = 0.0;
  tmpvar_25.y = texsize.w;
  xlat_mutabledz.y = (xlat_mutabledz.y + (inten_2 * dot (
    (texture (sampler_main, (xlat_mutableuv3 + tmpvar_24)).xyz - texture (sampler_main, (xlat_mutableuv3 - tmpvar_25)).xyz)
  , vec3(0.32, 0.49, 0.29))));
  xlat_mutableret1 = max (xlat_mutableret1, (texture (sampler_main, xlat_mutableuv3).xyz * inten_2));
  uv_1 = (uv_1 + xlat_mutabledz);
  vec2 tmpvar_26;
  tmpvar_26.x = q5;
  tmpvar_26.y = q6;
  xlat_mutableuv4 = (uv_1 - (0.4 * tmpvar_26));
  float tmpvar_27;
  tmpvar_27 = (0.1 * clamp ((1.0/(
    (abs(uv_1.y) + 0.1)
  )), 0.0, 12.0));
  vec2 tmpvar_28;
  tmpvar_28.x = (uv_1.x * tmpvar_27);
  tmpvar_28.y = tmpvar_27;
  vec3 tmpvar_29;
  tmpvar_29.xy = vec2(0.0, 0.0);
  tmpvar_29.z = clamp ((1.0 - (3.0 * uv_1.y)), 0.0, 1.0);
  ret_4 = (vec3(0.0, 0.1, 0.1) + (0.1 * tmpvar_29));
  ret_4 = (ret_4 + (vec3(dot (texture (sampler_noise_hq, 
    (tmpvar_28 + (0.1 * time))
  ), vec4(0.32, 0.49, 0.29, 0.0))) * (
    (clamp ((1.0 - (12.0 * uv_1.y)), 0.0, 1.0) * 0.1)
   / 
    (0.05 + sqrt(dot (xlat_mutableuv4, xlat_mutableuv4)))
  )));
  ret_4 = (ret_4 + ((0.4 * xlat_mutableret1) + (xlat_mutableret1 * q22)));
  vec4 tmpvar_30;
  tmpvar_30.w = 1.0;
  tmpvar_30.xyz = ret_4;
  ret = tmpvar_30.xyz;
 }`}},function(o,l){o.exports={baseVals:{rating:0,gammaadj:1.980001,decay:.5,echo_zoom:.999998,echo_alpha:.5,echo_orient:3,wave_mode:2,modwavealphabyvolume:1,wave_brighten:0,wrap:0,darken:1,wave_a:.001,wave_scale:20.944651,wave_smoothing:0,wave_mystery:.08,modwavealphastart:0,modwavealphaend:1.32,warpanimspeed:1.4595,warpscale:2.0067,zoom:.9999,warp:.01,sx:.9999,wave_r:0,wave_g:.99,ob_size:.015,ob_b:1,ib_size:.26,mv_x:64,mv_y:48,mv_l:1.85,mv_r:.4999,mv_g:.4999,mv_b:.4999,mv_a:0,b1ed:0},shapes:[{baseVals:{enabled:1,textured:1,y:.47,rad:.24057,tex_zoom:.14057,g:.3,b:.5,g2:0,b2:.3,a2:1,border_b:0,border_a:0},init_eqs_str:"a.q24=0;",frame_eqs_str:"a.x=.5;a.y=.5;a.a=a.q24;a.a2=a.q24;"},{baseVals:{enabled:1,sides:100,additive:1,thickoutline:1,rad:.05134,tex_zoom:.12288,r:.3,g:.2,b:.2,a:.7,g2:0,border_r:0,border_g:.5,border_b:.5,border_a:0},init_eqs_str:"",frame_eqs_str:"a.r=.5+.3*Math.sin(a.time);a.g=.5+.3*Math.sin(div(a.time,1.5));a.b=.5+.3*Math.sin(div(a.time,3.7));a.r2=0;a.b2=0;a.g2=0;a.a=.05;a.a2=0;"},{baseVals:{enabled:0}},{baseVals:{enabled:0}}],waves:[{baseVals:{enabled:1,samples:100,thick:1,scaling:.045052,smoothing:.1,a:.6},init_eqs_str:"a.k1=0;a.dy=0;a.dx=0;a.t2=0;a.q24=0;a.q27=0;",frame_eqs_str:"a.t2=.45+div(randint(10),100);",point_eqs_str:"a.k1=bnot(mod(100*a.sample+a.time,2));a.dy=.015*above(Math.sin(11*a.sample),0)+.008*above(Math.sin(a.time+74*a.sample),0)+.008*above(Math.sin(a.time+128*a.sample),0);a.dx=.01*above(Math.sin(27*a.sample),0)+.01*above(Math.sin(a.time+134*a.sample),0);a.x=.2*(a.sample-.5)+.5+a.dx;a.y=a.t2+a.dy;a.a=a.q24*a.k1*bnot(mod(a.q27,4));a.r=.6;a.g=0;a.b=.6;"},{baseVals:{enabled:0}},{baseVals:{enabled:0}},{baseVals:{enabled:0}}],init_eqs_str:"a.dec_xlow=0;a.index2=0;a.speed_=0;a.index=0;a.q12=0;a.q22=0;a.q21=0;a.q6=0;a.q1=0;a.dec_med=0;a.q5=0;a.q9=0;a.movx=0;a.rott=0;a.is_beat=0;a.q23=0;a.k1=0;a.q24=0;a.dec_slow=0;a.q10=0;a.tilt_=0;a.q4=0;a.peakx=0;a.dir__=0;a.dir=0;a.dir_=0;a.movy=0;a.q26=0;a.maxp=0;a.p2=0;a.avg=0;a.trig=0;a.beat=0;a.p1=0;a.peak=0;a.tilt=0;a.q2=0;a.q27=0;a.speed=0;a.q3=0;a.t0=0;a.q7=0;a.q20=0;a.q8=0;a.xk=0;",frame_eqs_str:`a.dec_med=pow(.8,div(30,a.fps));a.dec_slow=pow(.95,div(30,a.fps));a.dec_xlow=pow(.995,div(30,a.fps));a.beat=Math.max(Math.max(a.bass,a.mid),a.treb);a.avg=a.avg*a.dec_slow+a.beat*(1-a.dec_slow);a.is_beat=above(a.beat,.2+a.avg+a.peak)*above(a.time,a.t0+.2);a.t0=a.is_beat*a.time+(1-a.is_beat)*a.t0;a.peak=a.is_beat*a.beat+(1-a.is_beat)*a.peak*a.dec_med;a.index=mod(a.index+a.is_beat,16);a.index2=mod(a.index2+a.is_beat*bnot(a.index),2);a.q20=a.avg;a.q21=a.beat;a.q22=a.peak;a.q23=
a.index;a.q24=a.is_beat;a.q26=a.bass_att+a.mid_att+a.treb_att;a.q27=a.index+1;a.peakx=above(a.q22,1.5*a.maxp);a.maxp=Math.max(a.maxp,a.q22);a.maxp*=a.dec_xlow;a.k1=a.is_beat*equal(mod(a.index,3),0);a.p1=a.k1*(a.p1+1)+(1-a.k1)*a.p1;a.p2=a.dec_med*a.p2+(1-a.dec_med)*a.p1;a.rott=div(3.1416*a.p2,4);a.q1=Math.cos(a.rott);a.q2=Math.sin(a.rott);a.q3=-a.q2;a.q4=a.q1;a.trig=a.q24*bnot(mod(a.index,4));a.dir=a.dir+div(a.trig*a.q26*(div(randint(100),100)-.5),2)+a.peakx;a.dir_=a.dir_*a.dec_slow+a.dir*(1-a.dec_slow);
a.dir__=a.dir__*a.dec_slow+a.dir_*(1-a.dec_slow);a.q5=Math.cos(a.dir__);a.q6=Math.sin(a.dir__);a.speed=a.speed*bnot(a.trig)+div(a.trig*a.q26*5,a.fps);a.speed_=a.speed_*a.dec_slow+a.speed*(1-a.dec_slow);a.movx+=a.speed_*a.q6;a.movy+=a.speed_*a.q5;a.q7=a.movx;a.q8=a.movy;a.tilt=a.dir-a.dir__;a.tilt_=a.dec_slow*a.tilt_+(1-a.dec_slow)*a.tilt;a.monitor=a.maxp;a.q9=Math.cos(a.tilt_*a.speed_);a.q10=Math.sin(a.tilt_*a.speed_);a.q12=a.time;`,pixel_eqs_str:"a.zoom=1.3;",warp:` shader_body { 
  vec2 uv_1;
  vec2 uv6_2;
  vec2 tmpvar_3;
  tmpvar_3 = ((uv - 0.5) * aspect.xy);
  float tmpvar_4;
  tmpvar_4 = ((2.0 * sqrt(
    dot (tmpvar_3, tmpvar_3)
  )) + (rand_frame * 64.0)).x;
  uv_1 = (uv + (clamp (
    ((sin(tmpvar_4) / cos(tmpvar_4)) * normalize(tmpvar_3))
  , vec2(-2.0, -2.0), vec2(2.0, 2.0)) / 20.0));
  uv6_2 = (0.4 * sin((tmpvar_3 * 22.0)));
  vec4 tmpvar_5;
  tmpvar_5.w = 1.0;
  tmpvar_5.xyz = (((q24 * 
    (((texture (sampler_main, uv_1).xyz - (
      ((texture (sampler_blur1, fract(uv_1)).xyz * scale1) + bias1)
     * 0.04)) + (0.15 * (vec3(
      (0.1 / sqrt(dot (uv6_2, uv6_2)))
    ) * roam_cos.xyz))) - 0.02)
  ) * 0.98) + ((1.0 - q24) * texture (sampler_main, uv_orig).xyz));
  ret = tmpvar_5.xyz;
 }`,comp:`vec3 xlat_mutableret1;
vec2 xlat_mutablers;
 shader_body { 
  vec2 uv1_1;
  mat2 tmpvar_2;
  tmpvar_2[uint(0)].x = q9;
  tmpvar_2[uint(0)].y = -(q10);
  tmpvar_2[1u].x = q10;
  tmpvar_2[1u].y = q9;
  uv1_1 = (((uv_orig - 0.5) * aspect.xy) * tmpvar_2);
  uv1_1 = (uv1_1 * aspect.yx);
  float tmpvar_3;
  tmpvar_3 = (3.0 / abs(uv1_1.y));
  xlat_mutablers.x = (uv1_1.x * tmpvar_3);
  xlat_mutablers.y = (tmpvar_3 / 2.0);
  mat2 tmpvar_4;
  tmpvar_4[uint(0)].x = q5;
  tmpvar_4[uint(0)].y = -(q6);
  tmpvar_4[1u].x = q6;
  tmpvar_4[1u].y = q5;
  xlat_mutablers = (tmpvar_4 * xlat_mutablers);
  vec2 tmpvar_5;
  tmpvar_5.x = q7;
  tmpvar_5.y = q8;
  xlat_mutablers = (xlat_mutablers + tmpvar_5);
  xlat_mutableret1 = ((texture (sampler_blur1, fract(
    (xlat_mutablers / 12.0)
  )).xyz * scale1) + bias1);
  vec2 tmpvar_6;
  tmpvar_6.y = 0.0;
  tmpvar_6.x = q5;
  vec4 tmpvar_7;
  tmpvar_7.w = 1.0;
  tmpvar_7.xyz = (((xlat_mutableret1 * 32.0) / tmpvar_3) + ((
    ((q22 * sqrt(tmpvar_3)) / 4.0)
   * 
    sin(((uv1_1 - q12) * q27))
  .x) * texture (sampler_main, (
    (((4.0 * xlat_mutableret1) / tmpvar_3).xy + ((uv1_1 / 2.0) / (0.5 + abs(uv1_1.y))))
   + tmpvar_6)).xyz));
  ret = tmpvar_7.xyz;
 }`}},function(o,l){o.exports={baseVals:{rating:5,gammaadj:1.98,decay:.5,echo_zoom:.952,echo_alpha:.5,echo_orient:3,wave_mode:5,additivewave:1,wave_thick:1,modwavealphabyvolume:1,wave_brighten:0,darken:1,wave_a:.001,wave_scale:.474,wave_smoothing:.45,modwavealphastart:0,modwavealphaend:1.32,warpanimspeed:1.459,warpscale:2.007,zoom:.9999,warp:.01,sx:.9999,wave_r:.8,wave_g:.49,ob_size:0,ob_a:.3,ib_size:.26,mv_x:64,mv_y:48,mv_l:1.85,mv_r:.5,mv_g:.5,mv_b:.5,mv_a:0,b1x:.8,b1ed:0},shapes:[{baseVals:{enabled:1,sides:7,additive:1,num_inst:1024,rad:.04896,tex_ang:1.00531,tex_zoom:1.53117,r:0,g:1,b:1,a:0,g2:0,border_b:0,border_a:0},init_eqs_str:"a.max_age=0;a.n=0;a.x0=0;a.y0=0;a.z0=0;a.rad0=0;",frame_eqs_str:`a.max_age=a.reg00;a.n=12*a.instance;a.x0=a.gmegabuf[Math.floor(a.n)];a.y0=a.gmegabuf[Math.floor(a.n+1)];a.z0=a.gmegabuf[Math.floor(a.n+2)];.00001<Math.abs(-100>a.z0?1:0)?(a.rad=0,a.gmegabuf[Math.floor(a.n+8)]=a.max_age):(a.rad0=div(pow(1-div(a.gmegabuf[Math.floor(a.n+8)],a.max_age),.2),a.z0)*a.gmegabuf[Math.floor(a.n+7)]+.01,a.rad=.032*Math.abs(a.rad0),a.x=.5+div(a.x0,a.z0),a.y=.5+div(a.y0,a.z0));a.a=1;a.a2=.2;a.g=.8;a.g2=0;a.b=.2*(3<randint(10)?1:0)+.2*(0>a.z0?1:0);a.b2=0;
`},{baseVals:{enabled:0}},{baseVals:{enabled:0}},{baseVals:{enabled:0}}],waves:[{baseVals:{enabled:1,samples:160,sep:20,usedots:1,additive:1,scaling:7.858,smoothing:.1,r:.2,g:.3,a:.6},init_eqs_str:"a.q32=0;",frame_eqs_str:"",point_eqs_str:"a.x=div(randint(100),100);a.y=.5-div(1-.7,a.q32)-.15*(div(randint(100),100)-.5);a.a=.15;a.r=0;a.b=1;a.g=0;"},{baseVals:{enabled:0}},{baseVals:{enabled:0}},{baseVals:{enabled:0}}],init_eqs_str:`a.max_age=0;a.ind2=0;a.n=0;a.free=0;a.high=0;a.index=0;a.tht=0;a.v00=0;a.yobf=0;a.dt=0;a.y0=0;a.q1=0;a.dec_med=0;a.q5=0;a.ran1_=0;a["new"]=0;a.push=0;a.new1=0;a.is_beat=0;a.q24=0;a.vol_alt=0;a.dec_slow=0;a.ran2=0;a.ind1=0;a.q10=0;a.v0=0;a.med=0;a.beat=0;a.vol=0;a.peak=0;a.dec_fast=0;a.q27=0;a.bass1=0;a.q3=0;a.t0=0;a.vol_=0;a.dec=0;a.m=0;a.ran1=0;a.q32=0;a.phi=0;a.air=0;a.max_age=4.5;a.reg00=a.max_age;for(var b=a.n=0;12288>b;b++)a.gmegabuf[Math.floor(a.n)]=a.max_age-1+randint(2),
a.n+=1;a.q9=2*(randint(25)-10);a.q3=div(randint(100),100);a.q4=div(randint(100),100);`,frame_eqs_str:`a.dec_fast=1-div(8.8,a.fps);a.dec_med=1-div(6,a.fps);a.dec_slow=1-div(1.6,a.fps);a.vol=div(a.bass+a.med+a.treb,3);a.vol_=a.vol_*a.dec_slow+(1-a.dec_slow)*a.vol;a.beat=a.vol;a.is_beat=above(a.beat,1+4*a.peak)*above(a.time,a.t0+.2);a.t0=.00001<Math.abs(a.is_beat)?a.time:a.t0;a.peak=.00001<Math.abs(a.is_beat)?a.beat:a.peak*a.dec_med;a.index=mod(a.index+a.is_beat,1024);a.ind1=a.ind1*a.dec_med+(1-a.dec_fast)*a.index;a.ind2=a.ind2*a.dec_med+(1-a.dec_fast)*a.ind1;a.q27=a.ind2;a.q24=
a.is_beat;a.ran1=.00001<Math.abs(a.is_beat)?div(randint(100),100)-.5:a.ran1;a.ran2=.00001<Math.abs(a.is_beat)?div(randint(100),50)+1:a.ran2;a.ran1_=a.dec_med*a.ran1_+(1-a.dec_med)*a.ran1;a.high=2.9<a.ran2?1:0;a.q5=a.ran1_;a.n=0;a.push=Math.max(0,a.vol-a.vol_alt)*a.vol_;a.air=.1*a.dt;a.dt=div(1,a.fps);a.v00=pow(a.push,.25)+.4;a.free=512;a["new"]=0;a.y0=-.68;a.yobf=a.y0+.1;for(var b=0;512>b;b++)a.megabuf[Math.floor(a.n)]=a.gmegabuf[Math.floor(a.n)],a.megabuf[Math.floor(a.n+1)]=a.gmegabuf[Math.floor(a.n+
1)],a.megabuf[Math.floor(a.n+2)]=a.gmegabuf[Math.floor(a.n+2)],.00001<Math.abs(a.gmegabuf[Math.floor(a.n+8)]>a.max_age?1:0)?.00001<Math.abs(band(a.push>=10*a.dt*bnot(a.high)?1:0,200>a["new"]?1:0))?(--a.free,a["new"]+=1,a.tht=div(randint(100),500)*(1+1.5*a.high),a.phi=randint(12),a.v0=a.v00*(1+div(randint(10),40)),a.gmegabuf[Math.floor(a.n)]=1.7*a.ran1,a.gmegabuf[Math.floor(a.n+1)]=a.y0+2.2*a.high,a.gmegabuf[Math.floor(a.n+2)]=2,a.gmegabuf[Math.floor(a.n+3)]=a.v0*Math.sin(a.tht)*Math.cos(a.phi),a.gmegabuf[Math.floor(a.n+
4)]=a.v0*Math.cos(4*a.tht)*(1-1.5*a.high),a.gmegabuf[Math.floor(a.n+5)]=a.v0*Math.sin(a.tht)*Math.sin(a.phi)*1.5*a.vol,a.gmegabuf[Math.floor(a.n+7)]=0,a.gmegabuf[Math.floor(a.n+8)]=div(randint(100),100)):0:(--a.free,a.gmegabuf[Math.floor(a.n)]+=a.gmegabuf[Math.floor(a.n+3)]*a.dt,a.gmegabuf[Math.floor(a.n+1)]+=a.gmegabuf[Math.floor(a.n+4)]*a.dt,a.gmegabuf[Math.floor(a.n+2)]+=a.gmegabuf[Math.floor(a.n+5)]*a.dt,a.gmegabuf[Math.floor(a.n+3)]*=1-a.air,a.gmegabuf[Math.floor(a.n+4)]*=1-a.air,a.gmegabuf[Math.floor(a.n+
4)]-=.8*a.dt,a.gmegabuf[Math.floor(a.n+5)]*=1-a.air,a.gmegabuf[Math.floor(a.n+7)]=(a.gmegabuf[Math.floor(a.n+1)]>a.yobf?1:0)*Math.min(1,18*(a.gmegabuf[Math.floor(a.n+1)]-a.yobf)),.00001<Math.abs(band(a.gmegabuf[Math.floor(a.n+1)]<a.yobf?1:0,0>a.gmegabuf[Math.floor(a.n+4)]?1:0))?a.gmegabuf[8]=a.max_age:0,a.gmegabuf[Math.floor(a.n+8)]+=a.dt),a.n+=12;for(b=a.n=0;512>b;b++)a.m=6132+a.n,a.gmegabuf[Math.floor(a.m)]=div(a.gmegabuf[Math.floor(a.n)]+a.megabuf[Math.floor(a.n)],2),a.gmegabuf[Math.floor(a.m+
1)]=div(a.gmegabuf[Math.floor(a.n+1)]+a.megabuf[Math.floor(a.n+1)],2),a.gmegabuf[Math.floor(a.m+2)]=div(a.gmegabuf[Math.floor(a.n+2)]+a.megabuf[Math.floor(a.n+2)],2),a.gmegabuf[Math.floor(a.m+7)]=a.gmegabuf[Math.floor(a.n+7)],a.gmegabuf[Math.floor(a.m+8)]=a.gmegabuf[Math.floor(a.n+8)],a.n+=12;a.dec=.00001<Math.abs(a.bass>a.bass1?1:0)?.5:.9;a.bass1=a.bass1*a.dec+a.bass*(1-a.dec);a.q1=Math.min(1,Math.max(0,a.bass1-1.5)*Math.abs(a.q3-.5)*3);a.q10=Math.max(a.vol_-.1,.1);a.vol_alt=a.vol;a.q32=a.aspecty;
a.new1=.00001<Math.abs(0<a["new"]?1:0)?a["new"]:a.new1;a.monitor=a.new1;`,pixel_eqs_str:"a.dy=-.007*a.y;a.warp=0;a.rot=div(.025*Math.sin(a.q27+7*a.x+0*a.y)*.2,Math.abs(a.y-.7)+.1)*a.q10;a.zoom=1.003+.2*Math.max(0,a.y-.7);",warp:`vec2 ver;
float xlat_mutablecloud;
vec2 xlat_mutabledz;
vec2 xlat_mutableuv1;
vec2 xlat_mutableuv2;
float xlat_mutablez;
 shader_body { 
  vec2 tmpvar_1;
  tmpvar_1.y = 0.0;
  tmpvar_1.x = texsize.z;
  vec2 tmpvar_2;
  tmpvar_2.x = 0.0;
  tmpvar_2.y = texsize.w;
  ver = (tmpvar_2 * 2.0);
  vec3 ret_3;
  xlat_mutabledz.x = (2.0 * dot (vec3((texture (sampler_main, 
    (uv + tmpvar_1)
  ).z - texture (sampler_main, 
    (uv - tmpvar_1)
  ).z)), vec3(0.32, 0.49, 0.29)));
  xlat_mutabledz.y = (2.0 * dot (vec3((texture (sampler_main, 
    (uv + ver)
  ).z - texture (sampler_main, 
    (uv - ver)
  ).z)), vec3(0.32, 0.49, 0.29)));
  vec2 tmpvar_4;
  tmpvar_4.x = q3;
  tmpvar_4.y = (0.4 + (q4 * 0.4));
  xlat_mutableuv1 = (uv_orig - tmpvar_4);
  vec4 tmpvar_5;
  tmpvar_5 = texture (sampler_main, uv_orig);
  xlat_mutablez = ((0.8 * (xlat_mutableuv1.y - 0.4)) - (mix (tmpvar_5.x, 
    ((texture (sampler_blur1, uv_orig).xyz * scale1) + bias1)
  .x, 0.5) * 0.03));
  vec2 tmpvar_6;
  tmpvar_6.x = (xlat_mutableuv1.x * xlat_mutablez);
  tmpvar_6.y = xlat_mutablez;
  vec2 tmpvar_7;
  tmpvar_7.x = 0.0;
  tmpvar_7.y = (-(time) * 0.014);
  xlat_mutableuv2 = (tmpvar_6 + tmpvar_7);
  vec2 tmpvar_8;
  tmpvar_8.x = 0.0;
  tmpvar_8.y = (time * 0.004);
  vec2 uvi_9;
  uvi_9 = ((xlat_mutableuv2 * 1.5) + tmpvar_8);
  float zv_10;
  zv_10 = (0.002 * time);
  xlat_mutablecloud = (1.0 - (1.5 * abs(
    (texture (sampler_noise_hq, ((xlat_mutableuv2 + (0.07 * 
      abs((((
        (dot (texture (sampler_noise_hq, uvi_9), vec4(0.32, 0.49, 0.29, 0.0)) + (dot (texture (sampler_noise_hq, (
          (uvi_9 * 2.0)
         + zv_10)), vec4(0.32, 0.49, 0.29, 0.0)) / 2.0))
       + 
        (dot (texture (sampler_noise_hq, ((uvi_9 * 4.0) + zv_10)), vec4(0.32, 0.49, 0.29, 0.0)) / 4.0)
      ) + (
        dot (texture (sampler_noise_hq, ((uvi_9 * 8.0) + zv_10)), vec4(0.32, 0.49, 0.29, 0.0))
       / -8.0)) - 1.0))
    )) / 2.0)) - 0.5)
  ))).x;
  xlat_mutablecloud = (xlat_mutablecloud * clamp ((
    (texture (sampler_noise_hq, (xlat_mutableuv2 * vec2(2.0, 0.5))).x + 0.5)
   - 
    (3.0 * abs(xlat_mutableuv2.x))
  ), 0.0, 1.0));
  vec2 tmpvar_11;
  tmpvar_11.x = 0.0;
  tmpvar_11.y = ((-0.01 * time) * (0.125 * float(
    int((8.0 * pow (xlat_mutablecloud, 4.0)))
  )));
  float tmpvar_12;
  tmpvar_12 = (texture (sampler_noise_hq, (18.0 * (
    (xlat_mutableuv2 + (0.05 * xlat_mutablecloud))
   + tmpvar_11))) - 0.75).x;
  xlat_mutablecloud = (xlat_mutablecloud * (1.0 + (
    (0.2 * tmpvar_12)
   * 
    (xlat_mutablecloud * xlat_mutablecloud)
  )));
  ret_3.x = ((0.3 * xlat_mutablecloud) + (0.7 * tmpvar_5.xyz)).x;
  xlat_mutableuv1 = (uv - vec2(0.0, 0.71));
  vec4 tmpvar_13;
  tmpvar_13 = texture (sampler_blur1, uv);
  float tmpvar_14;
  tmpvar_14 = clamp (((12.0 * 
    (((10.0 * xlat_mutableuv1.y) + ((
      (tmpvar_13.xyz * scale1)
     + bias1).x / 2.0)) - 1.0)
  ) + tmpvar_12), 0.0, 1.0);
  xlat_mutableuv1 = (uv - 0.7);
  ret_3.z = (((
    ((((4.0 * tmpvar_14) * (1.0 - tmpvar_14)) * clamp ((tmpvar_5.x - 0.2), 0.0, 1.0)) + texture (sampler_main, (uv + (xlat_mutabledz * 0.003))).z)
   - 
    (0.03 * sqrt(dot (xlat_mutabledz, xlat_mutabledz)))
  ) - (
    pow (((tmpvar_13.xyz * scale1) + bias1).z, 8.0)
   * 0.2)) - 0.01);
  ret_3.y = (texture (sampler_main, mix (uv, uv_orig, vec2(0.5, 0.5))).y * (0.85 - (0.2 * 
    ((tmpvar_13.xyz * scale1) + bias1)
  .y)));
  ret_3.x = (ret_3.x + ((texture (sampler_noise_lq, 
    (2.0 * xlat_mutableuv2)
  ) * 0.08) * clamp (
    (1.0 - (3.0 * ret_3.x))
  , 0.0, 1.0)).x);
  vec4 tmpvar_15;
  tmpvar_15.w = 1.0;
  tmpvar_15.xyz = ret_3;
  ret = tmpvar_15.xyz;
 }`,comp:`float dunk;
float xlat_mutablenoise;
vec2 xlat_mutablers;
vec2 xlat_mutablers0;
float xlat_mutablesmask;
float xlat_mutablesmoke;
vec2 xlat_mutableuv1;
float xlat_mutablez;
 shader_body { 
  vec2 tmpvar_1;
  tmpvar_1.y = 0.0;
  tmpvar_1.x = texsize.z;
  dunk = ((rand_preset.x * 0.3) + 0.1);
  vec2 uv_2;
  vec3 ret_3;
  uv_2 = (uv + (texsize.zw / 2.0));
  xlat_mutableuv1 = (uv_2 - vec2(0.0, 0.7));
  xlat_mutablesmask = (((10.0 * xlat_mutableuv1.y) + (
    ((texture (sampler_blur1, uv_2).xyz * scale1) + bias1)
  .x / 2.0)) - 1.0);
  float tmpvar_4;
  tmpvar_4 = clamp (((2.0 * xlat_mutablesmask) + 0.3), 0.0, 1.0);
  xlat_mutablenoise = ((3.0 * (1.0 - tmpvar_4)) * texture (sampler_noise_lq, ((xlat_mutableuv1 * 1.5) + (rand_frame * 0.2).xy)).x);
  float tmpvar_5;
  tmpvar_5 = clamp (((12.0 * xlat_mutablesmask) + (xlat_mutablenoise / 2.0)), 0.0, 1.0);
  xlat_mutablez = ((0.35 / xlat_mutableuv1.y) + (xlat_mutablenoise / 2.0));
  xlat_mutablers0.x = (xlat_mutableuv1.x * xlat_mutablez);
  xlat_mutablers0.y = xlat_mutablez;
  vec2 tmpvar_6;
  tmpvar_6.x = (xlat_mutablers0.x + (time / 4.0));
  tmpvar_6.y = (xlat_mutablez + (time * 0.21));
  xlat_mutablers = (tmpvar_6 * tmpvar_5);
  float t_7;
  t_7 = ((texture (sampler_main, uv_2).x - dunk) * (1.0 - (tmpvar_5 * 
    pow (uv_2.y, 4.0)
  )));
  float tmpvar_8;
  tmpvar_8 = clamp (((1.2 * t_7) - 0.2), 0.0, 1.0);
  t_7 = tmpvar_8;
  vec3 tmpvar_9;
  tmpvar_9.x = tmpvar_8;
  tmpvar_9.y = (tmpvar_8 * tmpvar_8);
  tmpvar_9.z = pow (tmpvar_8, 8.0);
  vec3 tmpvar_10;
  tmpvar_10 = clamp ((tmpvar_9 / vec3(0.8, 0.8, 0.8)), 0.0, 1.0);
  float t_11;
  t_11 = ((texture (sampler_blur2, (uv_2 + 0.03)).xyz * scale2) + bias2).x;
  float tmpvar_12;
  tmpvar_12 = clamp (((1.2 * t_11) - 0.2), 0.0, 1.0);
  t_11 = tmpvar_12;
  vec3 tmpvar_13;
  tmpvar_13.x = tmpvar_12;
  tmpvar_13.y = (tmpvar_12 * tmpvar_12);
  tmpvar_13.z = pow (tmpvar_12, 8.0);
  vec3 tmpvar_14;
  tmpvar_14 = clamp ((tmpvar_13 / vec3(0.8, 0.8, 0.8)), 0.0, 1.0);
  ret_3 = ((tmpvar_10 * (tmpvar_10 * 
    (3.0 - (2.0 * tmpvar_10))
  )) + ((
    (((1.0 - texture (sampler_main, uv_2).x) * (1.0 - tmpvar_5)) * abs((texture (sampler_main, (uv_2 - tmpvar_1)).x - texture (sampler_main, (uv_2 + tmpvar_1)).x)))
   * 
    (tmpvar_14 * (tmpvar_14 * (3.0 - (2.0 * tmpvar_14))))
  ) * q9));
  xlat_mutablesmoke = ((texture (sampler_blur1, uv_2).xyz * scale1) + bias1).z;
  vec2 tmpvar_15;
  tmpvar_15.x = uv_2.x;
  tmpvar_15.y = ((0.85 - xlat_mutableuv1.y) + ((
    ((texture (sampler_noise_hq, xlat_mutablers) + texture (sampler_noise_hq, ((xlat_mutablers / 4.0) - (time / 8.0)))) - 1.0)
  .x * 0.2) * q10));
  float t_16;
  t_16 = ((texture (sampler_main, tmpvar_15).x + texture (sampler_main, tmpvar_15).y) - dunk);
  float tmpvar_17;
  tmpvar_17 = clamp (((1.2 * t_16) - 0.2), 0.0, 1.0);
  t_16 = tmpvar_17;
  vec3 tmpvar_18;
  tmpvar_18.x = tmpvar_17;
  tmpvar_18.y = (tmpvar_17 * tmpvar_17);
  tmpvar_18.z = pow (tmpvar_17, 8.0);
  vec3 tmpvar_19;
  tmpvar_19 = clamp ((tmpvar_18 / vec3(0.8, 0.8, 0.8)), 0.0, 1.0);
  ret_3 = (ret_3 + ((
    (tmpvar_19 * (tmpvar_19 * (3.0 - (2.0 * tmpvar_19))))
   * tmpvar_5) * 0.85));
  float tmpvar_20;
  tmpvar_20 = ((3.6 * tmpvar_4) * (1.0 - tmpvar_4));
  ret_3 = (ret_3 * (clamp (
    (1.0 - (xlat_mutablesmoke * (1.0 - tmpvar_20)))
  , 0.0, 1.0) * clamp (
    (1.0 - (tmpvar_20 * float((rand_preset.x > 0.5))))
  , 0.0, 1.0)));
  vec3 tmpvar_21;
  tmpvar_21.z = 0.0;
  tmpvar_21.xy = (((texture (sampler_blur3, uv_2).xyz * scale3) + bias3).xy * vec2(3.0, 5.0));
  ret_3 = (ret_3 + ((xlat_mutablesmoke * 
    dot (tmpvar_21, vec3(0.32, 0.49, 0.29))
  ) * vec3(1.0, 0.84, 0.62)));
  float tmpvar_22;
  tmpvar_22 = clamp (((1.2 * 
    clamp (texture (sampler_main, uv_2).y, 0.0, 1.0)
  ) - 0.2), 0.0, 1.0);
  vec3 tmpvar_23;
  tmpvar_23.x = tmpvar_22;
  tmpvar_23.y = (tmpvar_22 * tmpvar_22);
  tmpvar_23.z = pow (tmpvar_22, 8.0);
  vec3 tmpvar_24;
  tmpvar_24 = clamp ((tmpvar_23 / vec3(0.8, 0.8, 0.8)), 0.0, 1.0);
  ret_3 = (ret_3 + (tmpvar_24 * (tmpvar_24 * 
    (3.0 - (2.0 * tmpvar_24))
  )));
  float tmpvar_25;
  tmpvar_25 = clamp (0.52, 0.0, 1.0);
  vec3 tmpvar_26;
  tmpvar_26.x = tmpvar_25;
  tmpvar_26.y = (tmpvar_25 * tmpvar_25);
  tmpvar_26.z = pow (tmpvar_25, 8.0);
  vec3 tmpvar_27;
  tmpvar_27 = clamp ((tmpvar_26 / vec3(0.8, 0.8, 0.8)), 0.0, 1.0);
  vec3 tmpvar_28;
  tmpvar_28 = mix (clamp (ret_3, 0.0, 1.0), (tmpvar_27 * (tmpvar_27 * 
    (3.0 - (2.0 * tmpvar_27))
  )), vec3((pow (
    ((1.0 - uv_2.y) - ((uv_2.x - 0.5) * (q3 - 0.5)))
  , 4.0) * q1)));
  ret_3 = tmpvar_28;
  vec4 tmpvar_29;
  tmpvar_29.w = 1.0;
  tmpvar_29.xyz = tmpvar_28;
  ret = tmpvar_29.xyz;
 }`}},function(o,l){o.exports={baseVals:{rating:5,gammaadj:1.98,decay:.5,echo_zoom:1,echo_alpha:.5,echo_orient:3,wave_mode:7,additivewave:1,wave_thick:1,modwavealphabyvolume:1,wave_brighten:0,wrap:0,darken:1,wave_a:.001,wave_scale:.698,wave_smoothing:.45,modwavealphastart:0,modwavealphaend:1.32,warpanimspeed:1.459,warpscale:2.007,zoom:.9999,warp:.01,sx:.9999,wave_r:0,wave_g:0,wave_b:0,ob_size:0,ob_g:.1,ob_b:1,ob_a:1,ib_size:0,ib_r:0,ib_g:0,ib_b:0,mv_x:25.6,mv_y:9.6,mv_l:5,mv_g:.5,mv_a:0,b1ed:0},shapes:[{baseVals:{enabled:0}},{baseVals:{enabled:0}},{baseVals:{enabled:0}},{baseVals:{enabled:0}}],waves:[{baseVals:{enabled:0}},{baseVals:{enabled:0}},{baseVals:{enabled:0}},{baseVals:{enabled:0}}],init_eqs_str:`a.n=0;a.maxbpm=0;a.reg26=0;a.maxind1=0;a.uvx0=0;a.cosb_=0;a.reg34=0;a.num_res=0;a.reg28=0;a.reg23=0;a.q25=0;a.angchg=0;a.reg20=0;a.reg15=0;a.reg10=0;a.sinb_=0;a.index=0;a.quali=0;a.v3=0;a.q18=0;a.q22=0;a.q21=0;a.diry=0;a.q6=0;a.posx=0;a.dt=0;a.reg25=0;a.mean=0;a.uvx=0;a.q1=0;a.posz=0;a.q5=0;a.reg52=0;a.dt1=0;a.dec_f=0;a.dirz=0;a.dec_s=0;a.reg16=0;a.bt2=0;a.reg36=0;a.minbpm=0;a.reg22=0;a.uvy=0;a.rotz=0;a.cosb=0;a.omega=0;a.dist_=0;a.ec_steps=0;a.bpm=0;a.q23=0;a.q24=0;a.reg24=
0;a.ran2=0;a.pi=0;a.q10=0;a.reg14=0;a.sinb=0;a.reg53=0;a.posy=0;a.reg31=0;a.dirx=0;a.dec_m=0;a.q4=0;a.start=0;a.reg12=0;a.reg13=0;a.v2p=0;a.c2=0;a.reg37=0;a.ex=0;a.s3=0;a.yslope=0;a.q16=0;a.xslope=0;a.q26=0;a.reg38=0;a.v3p=0;a.reg35=0;a.p2=0;a.mov=0;a.reg11=0;a.tx=0;a.avg=0;a.bt1=0;a.beatsin=0;a.uvz=0;a.c3=0;a.uvy0=0;a.reg27=0;a.q19=0;a.q17=0;a.vol=0;a.reg32=0;a.reg21=0;a.uvz0=0;a.len=0;a.reg18=0;a.beatcos=0;a.reg30=0;a.q2=0;a.b1y=0;a.q27=0;a.bri=0;a.slen=0;a.q14=0;a.dist=0;a.trel1=0;a.p3=0;a.reg17=
0;a.v1=0;a.speed=0;a.vol2=0;a.q3=0;a.s1=0;a.vol_=0;a.dec=0;a.s2=0;a.quad=0;a.b2y=0;a.ran1=0;a.q32=0;a.reg33=0;a.q7=0;a.ds=0;a.q28=0;a.ty=0;a.excite=0;a.c1=0;a.v2=0;a.q20=0;a.p4=0;a.q8=0;a.maxvol=0;for(var b=a.n=0;2E4>b;b++)a.megabuf[Math.floor(a.n)]=0,a.gmegabuf[Math.floor(a.n)]=0,a.n+=1;a.minbpm=30;a.maxbpm=230;a.num_res=100;for(b=a.index=0;b<a.num_res;b++)a.n=12*a.index,a.bpm=a.minbpm*pow(div(a.maxbpm,a.minbpm),div(a.index,a.num_res)),a.gmegabuf[Math.floor(a.n)]=a.bpm,a.index+=1;a.pi=3.1416;a.octave=
div(a.num_res*Math.log(2),Math.log(div(a.maxbpm,a.minbpm)));a.q7=.15;a.q8=.2+randint(1);a.q16=1.6;a.start=1;a.travel=0;a.rotz=0;a.t0=a.time+3;a.cran0=randint(1);a.trelx=0;a.trely=0;a.trelz=0;a.reg20=1;a.reg21=0;a.reg22=0;a.reg23=0;a.reg24=1;a.reg25=0;a.reg26=0;a.reg27=0;a.reg28=1;b=0;do{b+=1;var c;a.ran1=randint(8);a.ran2=randint(8);a.ran3=randint(8);a.posx=randint(8);a.posy=randint(8);a.posz=randint(8);a.c1=Math.cos(a.ran1);a.c2=Math.cos(a.ran2);a.c3=Math.cos(a.ran3);a.s1=Math.sin(a.ran1);a.s2=Math.sin(a.ran2);
a.s3=Math.sin(a.ran3);a.reg20=a.c2*a.c1;a.reg21=a.c2*a.s1;a.reg22=-a.s2;a.reg23=a.s3*a.s2*a.c1-a.c3*a.s1;a.reg24=a.s3*a.s2*a.s1+a.c3*a.c1;a.reg25=a.s3*a.c2;a.reg26=a.c3*a.s2*a.c1+a.s3*a.s1;a.reg27=a.c3*a.s2*a.s1-a.s3*a.c1;a.reg28=a.c3*a.c2;a.dist=.001;var d=0;do{d+=1;a.uvx=div(a.reg26*a.dist,a.q7);a.uvy=div(a.reg27*a.dist,a.q7);a.uvz=div(a.reg28*a.dist,a.q7);a.uvx+=a.posx;a.uvy+=a.posy;a.uvz+=a.posz;a.uvx=1+2*(div(a.uvx,4)+30.5-Math.floor(div(a.uvx,4)+30.5)-.5);a.uvy=2+2*(div(a.uvy,4)+30.5-Math.floor(div(a.uvy,
4)+30.5)-.5);a.uvz=3+2*(div(a.uvz,4)+30.5-Math.floor(div(a.uvz,4)+30.5)-.5);a.uvx0=a.uvx+a.q8;a.uvy0=a.uvy+a.q8;a.uvz0=a.uvz+a.q8;for(c=0;8>c;c++)a.uvx=.00001<Math.abs(1<a.uvx?1:0)?2-a.uvx:.00001<Math.abs(-1>a.uvx?1:0)?-2-a.uvx:a.uvx,a.uvy=.00001<Math.abs(1<a.uvy?1:0)?2-a.uvy:.00001<Math.abs(-1>a.uvy?1:0)?-2-a.uvy:a.uvy,a.uvz=.00001<Math.abs(1<a.uvz?1:0)?2-a.uvz:.00001<Math.abs(-1>a.uvz?1:0)?-2-a.uvz:a.uvz,a.slen=a.uvx*a.uvx+a.uvy*a.uvy+a.uvz*a.uvz,a.uvx=2.6*(.00001<Math.abs(.25>a.slen?1:0)?4*a.uvx:
.00001<Math.abs(1>a.slen?1:0)?div(a.uvx,a.slen):a.uvx)+a.uvx0,a.uvy=2.6*(.00001<Math.abs(.25>a.slen?1:0)?4*a.uvy:.00001<Math.abs(1>a.slen?1:0)?div(a.uvy,a.slen):a.uvy)+a.uvy0,a.uvz=2.6*(.00001<Math.abs(.25>a.slen?1:0)?4*a.uvz:.00001<Math.abs(1>a.slen?1:0)?div(a.uvz,a.slen):a.uvz)+a.uvz0;a.len=sqrt(a.uvx*a.uvx+a.uvy*a.uvy+a.uvz*a.uvz);a.dist*=1.05;c=(.6>a.dist?1:0)*(30<a.len?1:0)}while(.00001<Math.abs(c)&&1048576>d);d=.06>a.dist?1:0}while(.00001<Math.abs(d)&&1048576>b);`,frame_eqs_str:`a.dt=Math.min(div(1,a.fps),.1);a.dec_f=.8;a.dec_m=1-4*a.dt;a.dec_s=1-a.dt;a.vol=div(a.bass+div(a.mid,2)+a.treb,3);a.vol_=a.vol_*a.dec_m+(1-a.dec_m)*a.vol;a.dec=a.dec_s;a.vol2=a.vol2*a.dec+(1-a.dec)*Math.min(3,a.vol);a.maxvol=.00001<Math.abs(a.vol>a.maxvol?1:0)?a.vol:a.maxvol*a.dec_s;a.excite=a.vol-a.vol_;a.index=0;a.maxind1=0;for(var b=a.mean=0;b<a.num_res;b++){a.n=12*a.index;a.omega=div(2*a.gmegabuf[Math.floor(a.n)]*a.pi,60);a.gmegabuf[Math.floor(a.n+1)]*=1-.25*a.dt;a.ec_steps=
Math.floor(10*a.dt*a.omega)+1;a.dt1=div(a.dt,a.ec_steps);a.ex=a.excite;for(var c=0;c<a.ec_steps;c++)a.gmegabuf[Math.floor(a.n+1)]+=(a.ex-sqr(a.omega)*a.gmegabuf[Math.floor(a.n+2)])*a.dt1,a.gmegabuf[Math.floor(a.n+2)]+=a.gmegabuf[Math.floor(a.n+1)]*a.dt1;a.beatcos=a.gmegabuf[Math.floor(a.n+1)];a.beatsin=a.gmegabuf[Math.floor(a.n+2)]*a.omega;a.quad=sqrt(pow(a.beatsin,2)+pow(a.beatcos,2));a.mean+=div(a.quad,a.num_res);a.gmegabuf[Math.floor(a.n+3)]=a.gmegabuf[Math.floor(a.n+3)]*a.dec_m+a.quad*(1-a.dec_m);
.00001<Math.abs(a.gmegabuf[Math.floor(a.n+3)]>a.gmegabuf[Math.floor(12*a.maxind1+3)]?1:0)?a.maxind1=a.index:0;a.index+=1}a.quali=div(a.gmegabuf[Math.floor(12*a.maxind1+3)],a.mean);a.bpm=a.minbpm*pow(div(a.maxbpm,a.minbpm),div(a.maxind1,a.num_res));.00001<Math.abs(160<a.bpm?1:0)?a.bpm/=2:0;a.trel1+=(div(a.bpm,60)*a.pi+a.excite*a.cosb)*(.7<a.maxvol?1:0)*a.dt;a.q32=a.trel1;a.speed=div((.15+.25*a.dist_)*(1+a.avg),a.q7)*(.34+.34*a.vol_)*(a.q8+.8);a.ds=a.ds*a.dec_s+(1-a.dec_s)*a.speed*.25*a.dt;a.rotz=.8*
pow(Math.sin(div(a.time,12)),5);a.dirx=a.reg26;a.diry=a.reg27;a.dirz=a.reg28;a.posx+=a.ds*a.dirx;a.posy+=a.ds*a.diry;a.posz+=a.ds*a.dirz;a.q4=a.posx;a.q5=a.posy;a.q6=a.posz;a.angchg=Math.max(0,.4-a.dist_);a.v1=a.v1*a.dec_m+(1-a.dec_m)*a.rotz*a.ds;a.dec=1-3*a.dt;a.v2p=a.v2p*a.dec+(1-a.dec)*(a.angchg*a.xslope+.02*a.p2)*a.dt;a.v3p=a.v3p*a.dec+(1-a.dec)*(a.angchg*a.yslope+.02*a.p3)*a.dt;a.v2=a.v2*a.dec+(1-a.dec)*a.v2p;a.v3=a.v3*a.dec+(1-a.dec)*a.v3p;a.p3=sign(a.v3);a.p4=sign(a.v2);a.reg30=a.reg20;a.reg31=
a.reg21;a.reg32=a.reg22;a.reg33=a.reg23;a.reg34=a.reg24;a.reg35=a.reg25;a.reg36=a.reg26;a.reg37=a.reg27;a.reg38=a.reg28;a.n=0;for(b=a.avg=0;5>b;b++){a.n+=1;a.ran1=div(randint(100),100);a.ran2=div(randint(100),200)-.25;a.tx=Math.cos(1.57*a.n+a.ran2)*(4>=a.n?1:0)*a.ran1;a.ty=Math.sin(1.57*a.n+a.ran2)*(4>=a.n?1:0)*a.ran1;a.c1=Math.cos(a.v1);a.c2=Math.cos(a.v2+a.ty);a.c3=Math.cos(a.v3+a.tx);a.s1=Math.sin(a.v1);a.s2=Math.sin(a.v2+a.ty);a.s3=Math.sin(a.v3+a.tx);a.reg10=a.c2*a.c1;a.reg11=a.c2*a.s1;a.reg12=
-a.s2;a.reg13=a.s3*a.s2*a.c1-a.c3*a.s1;a.reg14=a.s3*a.s2*a.s1+a.c3*a.c1;a.reg15=a.s3*a.c2;a.reg16=a.c3*a.s2*a.c1+a.s3*a.s1;a.reg17=a.c3*a.s2*a.s1-a.s3*a.c1;a.reg18=a.c3*a.c2;a.reg20=a.reg30;a.reg21=a.reg31;a.reg22=a.reg32;a.reg23=a.reg33;a.reg24=a.reg34;a.reg25=a.reg35;a.reg26=a.reg36;a.reg27=a.reg37;a.reg28=a.reg38;a.q20=a.reg10*a.reg20+a.reg11*a.reg23+a.reg12*a.reg26;a.q21=a.reg10*a.reg21+a.reg11*a.reg24+a.reg12*a.reg27;a.q22=a.reg10*a.reg22+a.reg11*a.reg25+a.reg12*a.reg28;a.q23=a.reg13*a.reg20+
a.reg14*a.reg23+a.reg15*a.reg26;a.q24=a.reg13*a.reg21+a.reg14*a.reg24+a.reg15*a.reg27;a.q25=a.reg13*a.reg22+a.reg14*a.reg25+a.reg15*a.reg28;a.q26=a.reg16*a.reg20+a.reg17*a.reg23+a.reg18*a.reg26;a.q27=a.reg16*a.reg21+a.reg17*a.reg24+a.reg18*a.reg27;a.q28=a.reg16*a.reg22+a.reg17*a.reg25+a.reg18*a.reg28;a.reg20=a.q20;a.reg21=a.q21;a.reg22=a.q22;a.reg23=a.q23;a.reg24=a.q24;a.reg25=a.q25;a.reg26=a.q26;a.reg27=a.q27;a.reg28=a.q28;a.dist=.002;var d;c=0;do{c+=1;a.uvx=div(a.reg26*a.dist,a.q7);a.uvy=div(a.reg27*
a.dist,a.q7);a.uvz=div(a.reg28*a.dist,a.q7);a.uvx+=a.posx;a.uvy+=a.posy;a.uvz+=a.posz;a.uvx=1+2*(div(a.uvx,4)+30.5-Math.floor(div(a.uvx,4)+30.5)-.5);a.uvy=2+2*(div(a.uvy,4)+30.5-Math.floor(div(a.uvy,4)+30.5)-.5);a.uvz=3+2*(div(a.uvz,4)+30.5-Math.floor(div(a.uvz,4)+30.5)-.5);a.uvx0=a.uvx+a.q8;a.uvy0=a.uvy+a.q8;a.uvz0=a.uvz+a.q8;for(d=0;8>d;d++)a.uvx=.00001<Math.abs(1<a.uvx?1:0)?2-a.uvx:.00001<Math.abs(-1>a.uvx?1:0)?-2-a.uvx:a.uvx,a.uvy=.00001<Math.abs(1<a.uvy?1:0)?2-a.uvy:.00001<Math.abs(-1>a.uvy?
1:0)?-2-a.uvy:a.uvy,a.uvz=.00001<Math.abs(1<a.uvz?1:0)?2-a.uvz:.00001<Math.abs(-1>a.uvz?1:0)?-2-a.uvz:a.uvz,a.slen=a.uvx*a.uvx+a.uvy*a.uvy+a.uvz*a.uvz,a.uvx=2.6*(.00001<Math.abs(.25>a.slen?1:0)?4*a.uvx:.00001<Math.abs(1>a.slen?1:0)?div(a.uvx,a.slen):a.uvx)+a.uvx0,a.uvy=2.6*(.00001<Math.abs(.25>a.slen?1:0)?4*a.uvy:.00001<Math.abs(1>a.slen?1:0)?div(a.uvy,a.slen):a.uvy)+a.uvy0,a.uvz=2.6*(.00001<Math.abs(.25>a.slen?1:0)?4*a.uvz:.00001<Math.abs(1>a.slen?1:0)?div(a.uvz,a.slen):a.uvz)+a.uvz0;a.len=sqrt(a.uvx*
a.uvx+a.uvy*a.uvy+a.uvz*a.uvz);a.dist*=1.1;d=(.6>a.dist?1:0)*(30<a.len?1:0)}while(.00001<Math.abs(d)&&1048576>c);a.megabuf[Math.floor(a.n)]=a.megabuf[Math.floor(a.n)]*a.dec_s+(1-a.dec_s)*a.dist;a.avg+=Math.abs(div(a.megabuf[Math.floor(a.n)],5))}a.n=0;for(b=a.avg=0;5>b;b++)a.n+=1,a.avg+=Math.abs(div(a.megabuf[Math.floor(a.n)],5));a.xslope=Math.min(Math.max(8*(a.megabuf[1]-a.megabuf[3]),-2),2);a.yslope=Math.min(Math.max(8*(a.megabuf[4]-a.megabuf[2]),-2),2);a.dist_=a.dist_*a.dec_m+(1-a.dec_m)*a.dist;
a.q10=a.ds*a.q7;a.q14=Math.abs(a.ds)+2*(Math.abs(a.v1)+Math.abs(a.v2)+Math.abs(a.v3))+div(1,255)+0*a.start;a.start*=.9;a.reg52=-a.v2;a.reg53=a.v3;a.warp=0;a.zoom=1;a.rot=a.v1;a.sinb=Math.sin(a.trel1);a.cosb=Math.cos(a.trel1);a.bt1=0>a.sinb*a.sinb_?1:0;a.bt2=0>a.cosb*a.cosb_?1:0;.00001<Math.abs(a.bt1)?(a.b1x=randint(2)-1,a.b1y=randint(2)-1):0;.00001<Math.abs(a.bt2)?(a.b2x=randint(2)-1,a.b2y=randint(2)-1):0;a.sinb_=a.sinb;a.cosb_=a.cosb;a.bri=.012*a.vol2*sqrt(div(100,a.bpm))+.01*a.excite;a.mov=div(sqrt(a.v3*
a.v3+a.v2*a.v2),a.dt);a.q1=a.b1x*Math.abs(a.b1x);a.q2=a.b1y*Math.abs(a.b1y);a.q17=.4*a.b2x;a.q18=.4*a.b2y;a.len=pow(a.q1,2)+pow(a.q2,2);a.q3=pow(a.sinb,2)*a.bri*(1+4*a.len)*Math.max(0,1-5*a.mov);a.q19=pow(a.cosb,2)*a.bri*1.2;a.monitor=a.q8;`,pixel_eqs_str:"a.warp=0;a.zoom=1;a.tx=Math.tan(.9*(2*a.x-1));a.ty=Math.tan(.9*(2*a.y-1));a.dx=div(a.reg52,a.q16)*(1+.5*Math.abs(a.tx));a.dy=div(a.reg53,a.q16)*(1+.5*Math.abs(a.ty));a.dx+=a.reg53*a.ty*(a.x-.5);a.dy+=a.reg52*a.tx*(a.y-.5);",warp:`float sustain;
float pix;
vec3 mod1;
float xlat_mutabledist;
float xlat_mutablestruc;
vec2 xlat_mutableuv1;
vec3 xlat_mutableuv2;
 shader_body { 
  mat3 tmpvar_1;
  tmpvar_1[uint(0)].x = q20;
  tmpvar_1[uint(0)].y = q23;
  tmpvar_1[uint(0)].z = q26;
  tmpvar_1[1u].x = q21;
  tmpvar_1[1u].y = q24;
  tmpvar_1[1u].z = q27;
  tmpvar_1[2u].x = q22;
  tmpvar_1[2u].y = q25;
  tmpvar_1[2u].z = q28;
  vec3 tmpvar_2;
  tmpvar_2.x = q4;
  tmpvar_2.y = q5;
  tmpvar_2.z = q6;
  sustain = (0.97 - q14);
  pix = (texsize.z * 2.0);
  mod1 = (rand_preset.xyz - 0.5);
  vec2 uv_3;
  vec3 ret_4;
  vec2 tmpvar_5;
  tmpvar_5 = (uv - 0.5);
  xlat_mutableuv1 = ((tmpvar_5 * aspect.xy) * q16);
  vec4 tmpvar_6;
  tmpvar_6 = texture (sampler_pw_main, uv);
  uv_3 = ((tmpvar_5 * (1.0 - 
    (q10 / (1.0 - (tmpvar_6.z + (0.003921569 * tmpvar_6.y))))
  )) + 0.5);
  vec4 tmpvar_7;
  tmpvar_7 = fract((8.0 * texture (sampler_noise_lq, (uv_3 + rand_frame.yz))));
  xlat_mutabledist = tmpvar_7.x;
  if ((tmpvar_7.y > 0.16)) {
    vec4 nb2_8;
    vec4 nb_9;
    vec4 tmpvar_10;
    tmpvar_10 = texture (sampler_pw_main, (uv_3 + vec2(-(pix))));
    nb_9.x = (1.0 - (tmpvar_10.z + (0.003921569 * tmpvar_10.y)));
    vec4 tmpvar_11;
    tmpvar_11 = texture (sampler_pw_main, (uv_3 + (pix * vec2(1.0, -1.0))));
    nb_9.y = (1.0 - (tmpvar_11.z + (0.003921569 * tmpvar_11.y)));
    vec4 tmpvar_12;
    tmpvar_12 = texture (sampler_pw_main, (uv_3 + vec2(pix)));
    nb_9.z = (1.0 - (tmpvar_12.z + (0.003921569 * tmpvar_12.y)));
    vec4 tmpvar_13;
    tmpvar_13 = texture (sampler_pw_main, (uv_3 + (pix * vec2(-1.0, 1.0))));
    nb_9.w = (1.0 - (tmpvar_13.z + (0.003921569 * tmpvar_13.y)));
    vec4 tmpvar_14;
    tmpvar_14 = texture (sampler_pw_main, (uv_3 + (pix * vec2(0.0, -1.0))));
    nb2_8.x = (1.0 - (tmpvar_14.z + (0.003921569 * tmpvar_14.y)));
    vec4 tmpvar_15;
    tmpvar_15 = texture (sampler_pw_main, (uv_3 + (pix * vec2(1.0, 0.0))));
    nb2_8.y = (1.0 - (tmpvar_15.z + (0.003921569 * tmpvar_15.y)));
    vec4 tmpvar_16;
    tmpvar_16 = texture (sampler_pw_main, (uv_3 + (pix * vec2(0.0, 1.0))));
    nb2_8.z = (1.0 - (tmpvar_16.z + (0.003921569 * tmpvar_16.y)));
    vec4 tmpvar_17;
    tmpvar_17 = texture (sampler_pw_main, (uv_3 + (pix * vec2(-1.0, 0.0))));
    nb2_8.w = (1.0 - (tmpvar_17.z + (0.003921569 * tmpvar_17.y)));
    vec4 tmpvar_18;
    tmpvar_18 = min (nb_9, nb2_8);
    nb_9.zw = tmpvar_18.zw;
    nb_9.xy = min (tmpvar_18.xy, tmpvar_18.zw);
    xlat_mutabledist = ((min (nb_9.x, nb_9.y) + (
      (0.006 * (tmpvar_7.xyz - 0.5).x)
     * tmpvar_7.y)) - (q10 * 0.5));
  };
  float theta_19;
  theta_19 = (xlat_mutabledist * 1.35);
  float theta_20;
  theta_20 = (xlat_mutabledist * 1.35);
  vec3 tmpvar_21;
  tmpvar_21.xy = (xlat_mutableuv1 * ((
    sin(theta_19)
   / 
    cos(theta_19)
  ) / 1.35));
  tmpvar_21.z = ((sin(theta_20) / cos(theta_20)) / 1.35);
  xlat_mutableuv2 = (((tmpvar_21 / q7) * tmpvar_1) + tmpvar_2);
  xlat_mutableuv2 = (((
    fract(((xlat_mutableuv2 / 4.0) + 0.5))
   - 0.5) * 2.0) + vec3(1.0, 2.0, 3.0));
  vec3 zz0_23;
  vec3 zz_24;
  zz_24 = xlat_mutableuv2;
  zz0_23 = (xlat_mutableuv2 + q8);
  for (int n_22 = 0; n_22 <= 8; n_22++) {
    zz_24 = ((2.0 * clamp (zz_24, vec3(-1.0, -1.0, -1.0), vec3(1.0, 1.0, 1.0))) - zz_24);
    zz_24 = (zz_24 * max ((1.0/(
      dot (zz_24, zz_24)
    )), 1.0));
    zz_24 = ((2.6 * zz_24) + zz0_23);
  };
  vec4 tmpvar_25;
  tmpvar_25.w = 0.0;
  tmpvar_25.xyz = zz_24;
  float tmpvar_26;
  tmpvar_26 = sqrt(dot (zz_24, zz_24));
  vec4 tmpvar_27;
  tmpvar_27.w = 0.0;
  tmpvar_27.xyz = mod1;
  xlat_mutablestruc = ((1.0 - (
    (1.4 * dot (tmpvar_25, tmpvar_27))
   / 40.0)) - (xlat_mutabledist * 0.3));
  if (((tmpvar_26 < 40.0) && (xlat_mutabledist > (0.04 * 
    (1.0 - rad)
  )))) {
    ret_4.x = mix (xlat_mutablestruc, texture (sampler_main, uv_3).x, sustain);
    float x_28;
    x_28 = ((1.0 - xlat_mutabledist) * 255.0);
    float ip_29;
    ip_29 = float(int(x_28));
    vec2 tmpvar_30;
    tmpvar_30.x = (x_28 - ip_29);
    tmpvar_30.y = (ip_29 / 255.0);
    ret_4.yz = tmpvar_30;
  } else {
    ret_4 = ((texture (sampler_fc_main, uv_3) * sustain) - 0.003921569).xyz;
  };
  vec4 tmpvar_31;
  tmpvar_31.w = 1.0;
  tmpvar_31.xyz = ret_4;
  ret = tmpvar_31.xyz;
 }`,comp:`float xlat_mutablecross1;
vec2 xlat_mutabledz1;
float xlat_mutablerdist;
vec2 xlat_mutableuv0;
vec2 xlat_mutableuv4;
vec2 xlat_mutableuva;
vec2 xlat_mutableuvb;
 shader_body { 
  vec2 tmpvar_1;
  tmpvar_1.x = q1;
  tmpvar_1.y = q2;
  vec2 tmpvar_2;
  tmpvar_2.x = q17;
  tmpvar_2.y = q18;
  vec2 uv_3;
  vec3 ret_4;
  uv_3 = (uv + (texsize.zw / 2.0));
  xlat_mutableuv0 = uv_3;
  vec2 uvi_5;
  uvi_5 = (uv_3 + vec2(0.002, 0.0));
  float tmpvar_6;
  tmpvar_6 = mix (((texture (sampler_blur1, uvi_5).xyz * scale1) + bias1).x, texture (sampler_main, uvi_5).x, 0.1);
  vec2 uvi_7;
  uvi_7 = (uv_3 - vec2(0.002, 0.0));
  float tmpvar_8;
  tmpvar_8 = mix (((texture (sampler_blur1, uvi_7).xyz * scale1) + bias1).x, texture (sampler_main, uvi_7).x, 0.1);
  xlat_mutabledz1.x = ((tmpvar_6 * float(
    (tmpvar_6 > 0.02)
  )) - (tmpvar_8 * float(
    (tmpvar_8 > 0.02)
  )));
  vec2 uvi_9;
  uvi_9 = (uv_3 + vec2(0.0, 0.002));
  float tmpvar_10;
  tmpvar_10 = mix (((texture (sampler_blur1, uvi_9).xyz * scale1) + bias1).x, texture (sampler_main, uvi_9).x, 0.1);
  vec2 uvi_11;
  uvi_11 = (uv_3 - vec2(0.0, 0.002));
  float tmpvar_12;
  tmpvar_12 = mix (((texture (sampler_blur1, uvi_11).xyz * scale1) + bias1).x, texture (sampler_main, uvi_11).x, 0.1);
  xlat_mutabledz1.y = ((tmpvar_10 * float(
    (tmpvar_10 > 0.02)
  )) - (tmpvar_12 * float(
    (tmpvar_12 > 0.02)
  )));
  uv_3 = (uv_3 + (xlat_mutabledz1 * 0.26));
  xlat_mutablerdist = ((texture (sampler_blur1, uv_3).xyz * scale1) + bias1).z;
  vec4 tmpvar_13;
  tmpvar_13.w = 0.0;
  tmpvar_13.xyz = texture (sampler_noise_hq, vec2(((xlat_mutablerdist * 0.05) + (time * 0.02)))).xyz;
  vec4 tmpvar_14;
  tmpvar_14 = mix (tmpvar_13, roam_sin, vec4(0.5, 0.5, 0.5, 0.5));
  xlat_mutableuv4 = (uv_3 - 0.4);
  xlat_mutableuva = ((xlat_mutableuv4 - tmpvar_1) - ((
    ((texture (sampler_blur1, uv_3).xyz * scale1) + bias1)
  .x * 0.4) * float(
    (xlat_mutablerdist > 0.2)
  )));
  xlat_mutableuvb = ((xlat_mutableuv4 - tmpvar_2) - ((
    (texture (sampler_blur1, uv_3).xyz * scale1)
   + bias1).x * 0.4));
  float angle_15;
  float tmpvar_16;
  tmpvar_16 = abs(xlat_mutableuva.x);
  if ((xlat_mutableuva.y >= 0.0)) {
    angle_15 = (1.0 - ((xlat_mutableuva.y - tmpvar_16) / (xlat_mutableuva.y + tmpvar_16)));
  } else {
    angle_15 = (3.0 - ((xlat_mutableuva.y + tmpvar_16) / (tmpvar_16 - xlat_mutableuva.y)));
  };
  float tmpvar_17;
  if ((xlat_mutableuva.x < 0.0)) {
    tmpvar_17 = -(angle_15);
  } else {
    tmpvar_17 = angle_15;
  };
  xlat_mutablecross1 = ((pow (
    sin((3.141593 * (tmpvar_17 + (5.1 * q20))))
  , 1.5) + (xlat_mutablerdist / 2.0)) + 0.1);
  vec3 tmpvar_18;
  tmpvar_18 = vec3((((1.0/(
    dot (xlat_mutableuva, xlat_mutableuva)
  )) / xlat_mutablecross1) * q3));
  vec3 tmpvar_19;
  tmpvar_19 = vec3(((1.0/(dot (xlat_mutableuvb, xlat_mutableuvb))) * q19));
  ret_4 = (clamp ((1.0 - 
    (2.0 * xlat_mutablerdist)
  ), 0.0, 1.0) * ((
    (tmpvar_18 * tmpvar_14.xyz)
   + 
    (tmpvar_19 * (1.0 - tmpvar_14.xyz))
  ) + 0.1));
  ret_4 = (ret_4 + (clamp (
    (2.0 * xlat_mutablerdist)
  , 0.0, 1.0) * (
    (tmpvar_18 * tmpvar_14.zyx)
   + 
    (tmpvar_19 * (1.0 - tmpvar_14.zyx))
  )));
  ret_4 = (ret_4 + ((
    (texture (sampler_blur1, xlat_mutableuv0).xyz * scale1)
   + bias1).x * 0.05));
  ret_4 = (1.0 - exp(-(ret_4)));
  vec4 tmpvar_20;
  tmpvar_20.w = 1.0;
  tmpvar_20.xyz = ret_4;
  ret = tmpvar_20.xyz;
 }`}},function(o,l){o.exports={baseVals:{rating:2,gammaadj:1.980001,decay:.5,echo_zoom:.999998,echo_alpha:.5,echo_orient:3,wave_mode:5,wave_dots:1,modwavealphabyvolume:1,wave_brighten:0,darken:1,wave_a:.001,wave_scale:1.169162,wave_smoothing:0,wave_mystery:.08,modwavealphastart:0,modwavealphaend:1.32,warpanimspeed:1.4595,warpscale:2.0067,zoom:.9999,warp:.01,sx:.9999,wave_r:0,wave_g:.99,ob_size:.015,ob_b:1,ib_size:.26,mv_x:64,mv_y:48,mv_l:0,mv_r:.4999,mv_g:.4999,mv_b:.4999,mv_a:0,b2x:.3,b1ed:0},shapes:[{baseVals:{enabled:1,sides:53,rad:.05408,tex_ang:1.00531,tex_zoom:1.531168,r:.2,g:.7,g2:0,a2:1,border_b:0,border_a:0},init_eqs_str:"a.q24=0;a.rad0=0;",frame_eqs_str:"a.x=.5;a.y=.5;a.a=a.q24;a.a2=0;a.a=0;a.rad0=bnot(a.q24)*a.rad0+div(randint(10),50)*a.q24;a.rad=a.rad0;a.b=0;a.r=div(randint(10),10);a.g=1;a.a2=a.q24;"},{baseVals:{enabled:1,sides:44,textured:1,x:.7,rad:.2173,tex_zoom:3.277448,g:1,b:.5,r2:1,b2:1,a2:1,border_r:.5,border_g:.5,border_b:0},init_eqs_str:"a.rot0=0;a.q1=0;a.posx=0;a.q24=0;a.posy=0;a.rad0=0;",frame_eqs_str:"a.textured=1;a.rot0+=div(1,a.fps)*a.q1;a.posx=(1-a.q24)*a.posx+a.q24*(.3+div(randint(100),200));a.posy=(1-a.q24)*a.posy+a.q24*(.3+div(randint(100),200));a.rad0=(1-a.q24)*a.rad0+a.q24*(.05+div(randint(100),300));a.rad=a.rad0;a.x=a.posx;a.y=a.posy;a.ang=a.rot0;"},{baseVals:{enabled:1,sides:63,x:.503,rad:.038857,tex_zoom:2.2233,g:.1,r2:1,b2:1,a2:.7,border_a:0},init_eqs_str:"a.rot0=0;a.q2=0;a.posx=0;a.q24=0;a.posy=0;a.rad0=0;a.q26=0;",frame_eqs_str:"a.textured=1;a.rot0+=div(.1,a.fps)*a.q2;a.posx=(1-a.q24)*a.posx+a.q24*(.3+div(randint(100),200));a.posy=(1-a.q24)*a.posy+a.q24*(.3+div(randint(100),200));a.rad0=(1-a.q24)*a.rad0+a.q24*(.05+div(randint(100),400));a.rad=a.rad0;a.x=a.posx+a.q26;a.y=a.posy;a.ang=a.rot0;"},{baseVals:{enabled:0}}],waves:[{baseVals:{enabled:0}},{baseVals:{enabled:0}},{baseVals:{enabled:0}},{baseVals:{enabled:0}}],init_eqs_str:"a.index2=0;a.q25=0;a.index=0;a.q22=0;a.q21=0;a.q29=0;a.q6=0;a.q1=0;a.dec_med=0;a.q5=0;a.rott=0;a.is_beat=0;a.q31=0;a.q23=0;a.k1=0;a.q24=0;a.t_rel=0;a.dec_slow=0;a.q10=0;a.q4=0;a.q26=0;a.p2=0;a.avg=0;a.beat=0;a.p1=0;a.peak=0;a.q2=0;a.q27=0;a.p3=0;a.q3=0;a.t0=0;a.q7=0;a.ds=0;a.q28=0;a.q30=0;a.q20=0;a.p4=0;a.q8=0;",frame_eqs_str:`a.dec_med=pow(.7,div(30,a.fps));a.dec_slow=pow(.99,div(30,a.fps));a.beat=Math.max(Math.max(a.bass,a.mid),a.treb);a.beat=a.bass+a.mid+a.treb;a.beat*=a.beat;a.avg=a.avg*a.dec_slow+a.beat*(1-a.dec_slow);a.is_beat=above(a.beat,.2*a.avg+a.peak)*above(a.time,a.t0+.2);a.t0=a.is_beat*a.time+(1-a.is_beat)*a.t0;a.peak=a.is_beat*a.beat+(1-a.is_beat)*a.peak*a.dec_med;a.index=mod(a.index+a.is_beat,8);a.index2=mod(a.index2+a.is_beat*bnot(a.index),2);a.q20=a.avg;a.q21=a.beat;a.q22=a.peak;
a.q23=a.index;a.q24=a.is_beat;a.q26=a.bass_att+a.mid_att+a.treb_att+3;a.q27=a.index+1;a.q28=a.index2;a.q29=a.index2;a.monitor=a.q29;a.k1=a.is_beat*equal(mod(a.index,2),0);a.p1=a.k1*(a.p1+1)+(1-a.k1)*a.p1;a.p2=a.dec_med*a.p2+(1-a.dec_med)*a.p1;a.rott=div(3.1416*a.p2,4);a.q1=Math.cos(a.rott);a.q2=Math.sin(a.rott);a.q3=-a.q2;a.q4=a.q1;a.q5=Math.cos(div(a.time,17));a.q6=Math.sin(div(a.time,17));a.q7=-a.q2;a.q8=a.q1;a.ds=a.ds*a.dec_med+a.q24*(1-a.dec_med);a.q25=a.q24;a.q10=a.q22+3;a.t_rel=8*a.time;a.p3=
a.p3*a.dec_med+(1-a.dec_med)*(100*a.index+0*a.q26);a.q30=a.p3;a.p4=a.dec_med*a.p4+(1-a.dec_med)*a.q27;a.q31=a.p4;a.zoom=1.1+.2*a.q1;a.warp=0;a.ob_size=.01;a.ob_r=.9;a.ob_g=1;a.ob_b=0;a.ob_a=.2*Math.sin(div(a.time,7));`,pixel_eqs_str:"",pixel_eqs:"",warp:` shader_body { 
  vec2 uv_1;
  vec2 tmpvar_2;
  tmpvar_2 = ((uv - 0.5) * aspect.xy);
  float tmpvar_3;
  tmpvar_3 = (sqrt(dot (tmpvar_2, tmpvar_2)) + (rand_frame * 13.0)).x;
  uv_1 = (uv + (clamp (
    ((sin(tmpvar_3) / cos(tmpvar_3)) / normalize(tmpvar_2))
  , vec2(-2.0, -2.0), vec2(2.0, 2.0)) / 16.0));
  vec4 tmpvar_4;
  tmpvar_4.w = 1.0;
  tmpvar_4.xyz = ((q24 * (
    ((texture (sampler_main, uv_1).xyz + ((0.1 * vec3(
      ((q1 * cos((uv_1.x * 44.0))) - cos((uv_1.y * 82.0)))
    )) * (1.0 + texture (sampler_noise_lq, 
      ((uv_1 / 16.0) + (time / 100.0))
    )).xyz)) * 0.98)
   - 0.025)) + ((1.0 - q24) * texture (sampler_main, uv_orig).xyz));
  ret = tmpvar_4.xyz;
 }`,comp:`vec2 xlat_mutabledz;
vec3 xlat_mutableneu;
vec3 xlat_mutableret1;
vec2 xlat_mutableuv3;
 shader_body { 
  vec2 uv2_1;
  vec2 tmpvar_2;
  tmpvar_2.y = 0.0;
  tmpvar_2.x = texsize.z;
  vec2 tmpvar_3;
  tmpvar_3.x = 0.0;
  tmpvar_3.y = texsize.w;
  xlat_mutabledz.x = dot ((texture (sampler_main, (uv + tmpvar_2)).xyz - texture (sampler_main, (uv - tmpvar_2)).xyz), vec3(0.32, 0.49, 0.29));
  xlat_mutabledz.y = dot ((texture (sampler_main, (uv + tmpvar_3)).xyz - texture (sampler_main, (uv - tmpvar_3)).xyz), vec3(0.32, 0.49, 0.29));
  uv2_1 = (uv - 0.5);
  vec2 tmpvar_4;
  tmpvar_4.y = 0.0;
  float tmpvar_5;
  tmpvar_5 = (time / 8.0);
  tmpvar_4.x = tmpvar_5;
  float tmpvar_6;
  tmpvar_6 = (q27 * 2.0);
  xlat_mutableuv3 = (((tmpvar_6 * uv2_1) * 0.1) + tmpvar_4);
  xlat_mutableuv3 = (fract(xlat_mutableuv3) * aspect.yx);
  xlat_mutableuv3 = ((0.1 * cos(
    (22.0 * xlat_mutableuv3)
  )) + (18.0 * xlat_mutabledz));
  float tmpvar_7;
  tmpvar_7 = clamp ((0.02 / sqrt(
    dot (xlat_mutableuv3, xlat_mutableuv3)
  )), 0.0, 1.0);
  vec4 tmpvar_8;
  tmpvar_8 = (1.0 + roam_cos);
  xlat_mutableneu = ((0.1 * vec3(tmpvar_7)) + ((0.45 * 
    dot (vec3(tmpvar_7), vec3(0.32, 0.49, 0.29))
  ) * tmpvar_8).xyz);
  xlat_mutableret1 = max (vec3(0.0, 0.0, 0.0), (xlat_mutableneu * 1.252262));
  vec2 tmpvar_9;
  tmpvar_9.y = 0.0;
  tmpvar_9.x = tmpvar_5;
  xlat_mutableuv3 = (((tmpvar_6 * uv2_1) * 0.1) + tmpvar_9);
  xlat_mutableuv3 = (fract(xlat_mutableuv3) * aspect.yx);
  xlat_mutableuv3 = ((0.1 * cos(
    (22.0 * xlat_mutableuv3)
  )) + (18.0 * xlat_mutabledz));
  float tmpvar_10;
  tmpvar_10 = clamp ((0.02 / sqrt(
    dot (xlat_mutableuv3, xlat_mutableuv3)
  )), 0.0, 1.0);
  xlat_mutableneu = ((0.1 * vec3(tmpvar_10)) + ((0.45 * 
    dot (vec3(tmpvar_10), vec3(0.32, 0.49, 0.29))
  ) * tmpvar_8).xyz);
  xlat_mutableret1 = max (xlat_mutableret1, (xlat_mutableneu * 1.252262));
  vec4 tmpvar_11;
  tmpvar_11.w = 1.0;
  tmpvar_11.xyz = (xlat_mutableret1 + clamp ((
    (texture (sampler_main, uv).xyz * 4.0)
   * 
    (0.2 + xlat_mutableret1)
  ), 0.0, 1.0));
  ret = tmpvar_11.xyz;
 }`}},function(o,l){o.exports={baseVals:{rating:0,gammaadj:1.980001,decay:.5,echo_zoom:.999998,echo_alpha:.5,echo_orient:3,wave_mode:6,wave_thick:1,modwavealphabyvolume:1,darken:1,wave_a:.001,wave_scale:.159809,wave_smoothing:.45,wave_mystery:.08,modwavealphastart:0,modwavealphaend:1.32,warpanimspeed:1.4595,warpscale:2.0067,zoom:.9999,warp:.01,sx:.9999,wave_r:0,wave_g:0,wave_b:0,wave_y:.9,ob_r:1,ob_g:1,ob_b:1,ib_size:.26,mv_x:64,mv_y:48,mv_l:1.85,mv_r:.4999,mv_g:.4999,mv_b:.4999,mv_a:0,b1x:.6999,b1ed:0},shapes:[{baseVals:{enabled:0}},{baseVals:{enabled:0}},{baseVals:{enabled:0}},{baseVals:{enabled:0}}],waves:[{baseVals:{enabled:0}},{baseVals:{enabled:0}},{baseVals:{enabled:0}},{baseVals:{enabled:0}}],init_eqs_str:"a.index=0;a.q22=0;a.q21=0;a.q6=0;a.q1=0;a.dec_med=0;a.q5=0;a.rott=0;a.is_beat=0;a.q23=0;a.k1=0;a.q24=0;a.dec_slow=0;a.q4=0;a.q26=0;a.p2=0;a.avg=0;a.movez=0;a.beat=0;a.p1=0;a.peak=0;a.q2=0;a.q27=0;a.q3=0;a.t0=0;a.q32=0;a.q7=0;a.q20=0;",frame_eqs_str:`a.dec_med=pow(.9,div(30,a.fps));a.dec_slow=pow(.99,div(30,a.fps));a.beat=Math.max(Math.max(a.bass,a.mid),a.treb);a.avg=a.avg*a.dec_slow+a.beat*(1-a.dec_slow);a.is_beat=above(a.beat,.2+a.avg+a.peak)*above(a.time,a.t0+.2);a.t0=a.is_beat*a.time+(1-a.is_beat)*a.t0;a.peak=a.is_beat*a.beat+(1-a.is_beat)*a.peak*a.dec_med;a.index=mod(a.index+a.is_beat,8);a.q20=a.avg;a.q21=a.beat;a.q22=a.peak;a.q23=a.index;a.q24=a.is_beat;a.q26=a.bass+a.mid+a.treb;a.k1=a.is_beat*equal(a.index,0);a.p1=
a.k1*(a.p1+1)+(1-a.k1)*a.p1;a.p2=a.dec_slow*a.p2+(1-a.dec_slow)*a.p1;a.rott=div(3.1416*a.p2,4);a.q27=a.index+1;a.q1=Math.cos(a.rott);a.q2=Math.sin(a.rott);a.q3=-a.q2;a.q4=a.q1;a.zoom=1;a.rot=-0*a.index;a.q32=pow(.996,div(30,a.fps));a.q5=div(Math.sin(div(a.time,11))+1,5);a.movez+=div(.06,a.fps)*(1.1+a.q1);a.q6=a.movez;a.q7=.005*Math.sin(div(a.time,15));`,pixel_eqs_str:"",pixel_eqs:"",warp:`vec3 xlat_mutablenoise;
vec2 xlat_mutablers;
vec2 xlat_mutablers0;
vec2 xlat_mutableuv1;
 shader_body { 
  vec3 copy_1;
  vec2 tmpvar_2;
  tmpvar_2.x = 0.5;
  tmpvar_2.y = q5;
  xlat_mutableuv1 = (uv - tmpvar_2);
  float tmpvar_3;
  tmpvar_3 = (1.0/(xlat_mutableuv1.y));
  xlat_mutablers0.x = (xlat_mutableuv1.x * tmpvar_3);
  xlat_mutablers0.y = tmpvar_3;
  xlat_mutablers.x = xlat_mutablers0.x;
  xlat_mutablers.y = (tmpvar_3 + (time * 0.3));
  xlat_mutablenoise = (vec3(dot (texture (sampler_pw_noise_lq, (xlat_mutablers / 63.0)), vec4(0.32, 0.49, 0.29, 0.0))) * (dot (texture (sampler_pw_noise_lq, 
    (xlat_mutablers / 12.0)
  ), vec4(0.32, 0.49, 0.29, 0.0)) + 0.5));
  xlat_mutablenoise = (xlat_mutablenoise * (clamp (
    ((10.0 * xlat_mutablenoise) - 8.0)
  , 0.0, 1.0) * clamp (
    (2.0 / tmpvar_3)
  , 0.0, 1.0)));
  vec2 tmpvar_4;
  tmpvar_4.x = uv.x;
  tmpvar_4.y = (uv.y - (0.024 / tmpvar_3));
  vec2 tmpvar_5;
  tmpvar_5.x = uv.x;
  tmpvar_5.y = (uv.y - (0.012 / tmpvar_3));
  copy_1 = (texture (sampler_main, tmpvar_4).xyz + texture (sampler_main, tmpvar_5).xyz);
  vec2 tmpvar_6;
  tmpvar_6.x = uv.x;
  tmpvar_6.y = (uv.y - (0.006 / tmpvar_3));
  copy_1 = (copy_1 + texture (sampler_main, tmpvar_6).xyz);
  vec4 tmpvar_7;
  tmpvar_7.w = 1.0;
  tmpvar_7.xyz = ((xlat_mutablenoise + (
    (((copy_1 / 3.0) * (1.0 + slow_roam_cos).xyz) / 2.0)
   * 0.99)) - 0.005);
  ret = tmpvar_7.xyz;
 }`,comp:`vec3 xlat_mutablecont;
vec3 xlat_mutableneu;
vec3 xlat_mutableret1;
vec2 xlat_mutablers2;
 shader_body { 
  vec2 uv_1;
  float inten_2;
  float dist_3;
  uv_1 = (uv - 0.5);
  uv_1 = (uv_1 * aspect.xy);
  dist_3 = (1.0 - fract(q6));
  inten_2 = ((dist_3 * (1.0 - dist_3)) * 6.0);
  vec2 tmpvar_4;
  tmpvar_4 = fract(((uv_1 * dist_3) + 0.55));
  xlat_mutableneu = texture (sampler_main, tmpvar_4).xyz;
  xlat_mutableret1 = max (vec3(0.0, 0.0, 0.0), (xlat_mutableneu * inten_2));
  xlat_mutablecont = max (vec3(0.0, 0.0, 0.0), ((
    -(texture (sampler_main, tmpvar_4).xyz)
   + 
    ((texture (sampler_blur1, (tmpvar_4 + q7)).xyz * scale1) + bias1)
  ) * inten_2));
  dist_3 = (1.0 - fract((0.5 + q6)));
  inten_2 = ((dist_3 * (1.0 - dist_3)) * 6.0);
  vec2 tmpvar_5;
  tmpvar_5 = fract(((uv_1 * dist_3) + 0.55));
  xlat_mutableneu = texture (sampler_main, tmpvar_5).xyz;
  xlat_mutableret1 = max (xlat_mutableret1, (xlat_mutableneu * inten_2));
  xlat_mutablecont = max (xlat_mutablecont, ((
    -(texture (sampler_main, tmpvar_5).xyz)
   + 
    ((texture (sampler_blur1, (tmpvar_5 + q7)).xyz * scale1) + bias1)
  ) * inten_2));
  dist_3 = (1.0 - fract((1.0 + q6)));
  inten_2 = ((dist_3 * (1.0 - dist_3)) * 6.0);
  vec2 tmpvar_6;
  tmpvar_6 = fract(((uv_1 * dist_3) + 0.55));
  xlat_mutableneu = texture (sampler_main, tmpvar_6).xyz;
  xlat_mutableret1 = max (xlat_mutableret1, (xlat_mutableneu * inten_2));
  xlat_mutablecont = max (xlat_mutablecont, ((
    -(texture (sampler_main, tmpvar_6).xyz)
   + 
    ((texture (sampler_blur1, (tmpvar_6 + q7)).xyz * scale1) + bias1)
  ) * inten_2));
  vec2 tmpvar_7;
  tmpvar_7.y = 5.0;
  tmpvar_7.x = (time / 12.0);
  xlat_mutablers2 = ((0.1 * cos(
    ((uv_1 * 3.0) + tmpvar_7)
  )) + (0.1 * xlat_mutableret1).xy);
  vec4 tmpvar_8;
  tmpvar_8.w = 1.0;
  tmpvar_8.xyz = (((-0.1 * xlat_mutableret1) + (
    (clamp ((0.005 / sqrt(
      dot (xlat_mutablers2, xlat_mutablers2)
    )), 0.0, 1.0) * vec3(18.0, 16.2, 10.8))
   * 
    (0.2 + (0.3 * xlat_mutableret1))
  )) + ((
    dot (xlat_mutablecont, vec3(0.32, 0.49, 0.29))
   * 
    (1.0 + slow_roam_cos)
  ) / 2.0).xyz);
  ret = tmpvar_8.xyz;
 }`}},function(o,l){o.exports={baseVals:{rating:5,gammaadj:1.980001,decay:.5,echo_zoom:.999998,echo_alpha:.5,echo_orient:3,wave_mode:6,wave_dots:1,modwavealphabyvolume:1,darken:1,wave_a:.001,wave_scale:1.740724,wave_smoothing:.45,wave_mystery:.08,modwavealphastart:0,modwavealphaend:1.32,warpanimspeed:1.4595,warpscale:2.0067,zoom:.9999,warp:.01,sx:.9999,wave_g:.99,ob_size:0,ob_r:1,ob_b:1,ob_a:1,ib_size:.26,mv_x:64,mv_y:48,mv_l:1.85,mv_r:.4999,mv_g:.4999,mv_b:.4999,mv_a:0,b1ed:0},shapes:[{baseVals:{enabled:0}},{baseVals:{enabled:0}},{baseVals:{enabled:0}},{baseVals:{enabled:0}}],waves:[{baseVals:{enabled:0}},{baseVals:{enabled:0}},{baseVals:{enabled:0}},{baseVals:{enabled:0}}],init_eqs_str:"a.index2=0;a.index4=0;a.index=0;a.q22=0;a.q21=0;a.q6=0;a.q1=0;a.dec_med=0;a.q5=0;a.index3=0;a.rott=0;a.is_beat=0;a.q23=0;a.k1=0;a.q24=0;a.t_rel=0;a.dec_slow=0;a.q4=0;a.q26=0;a.p2=0;a.avg=0;a.movez=0;a.beat=0;a.p1=0;a.peak=0;a.q2=0;a.q27=0;a.p3=0;a.q3=0;a.t0=0;a.q7=0;a.q28=0;a.q30=0;a.q20=0;a.q8=0;a.p3=0;a.t_rel=0;",frame_eqs_str:`a.dec_med=pow(.9,div(30,a.fps));a.dec_slow=pow(.99,div(30,a.fps));a.beat=Math.max(Math.max(a.bass,a.mid),a.treb);a.avg=a.avg*a.dec_slow+a.beat*(1-a.dec_slow);a.is_beat=above(a.beat,.5+a.avg+a.peak)*above(a.time,a.t0+.2);a.t0=a.is_beat*a.time+(1-a.is_beat)*a.t0;a.peak=a.is_beat*a.beat+(1-a.is_beat)*a.peak*a.dec_med;a.index=mod(a.index+a.is_beat,8);a.index2=mod(a.index2+a.is_beat*bnot(a.index),4);a.index3=mod(a.index3+a.is_beat*bnot(a.index)*bnot(a.index2),3);a.monitor=a.index4;
a.q20=a.avg;a.q21=a.beat;a.q22=a.peak;a.q23=a.index;a.q24=a.is_beat;a.q26=a.bass_att+a.mid_att+a.treb_att+1;a.k1=a.is_beat*equal(a.index,0);a.p1=a.k1*(a.p1+1)+(1-a.k1)*a.p1;a.p2=a.dec_med*a.p2+(1-a.dec_med)*a.p1;a.p3=a.dec_med*a.p3+(1-a.dec_med)*a.p2;a.rott=div(3.14159265359*a.p3,2);a.q27=8-a.index;a.q28=a.index2+1;a.q1=Math.cos(a.rott);a.q2=Math.sin(a.rott);a.q3=-a.q2;a.q4=a.q1;a.t_rel+=div(.6,a.fps)*a.q1*a.q1;a.q5=Math.cos(a.t_rel);a.q6=Math.sin(a.t_rel);a.q7=-a.q6;a.q8=a.q5;a.movez+=div(div(.6,
a.fps),(1.4-a.q5)*(1.4-a.q5));a.q30=a.movez;a.zoom=1;`,pixel_eqs_str:"a.dx=div(0*a.q28,8);",warp:`vec3 xlat_mutablenoise;
vec3 xlat_mutableret1;
vec2 xlat_mutablers;
 shader_body { 
  float z_1;
  mat2 tmpvar_2;
  tmpvar_2[uint(0)] = _qb.xy;
  tmpvar_2[1u] = _qb.zw;
  vec2 tmpvar_3;
  tmpvar_3 = ((uv * tmpvar_2) - 0.5);
  float tmpvar_4;
  tmpvar_4 = (0.4 / abs(tmpvar_3.y));
  xlat_mutablers.x = (tmpvar_3.x * tmpvar_4);
  xlat_mutablers.y = (tmpvar_4 + q30);
  vec4 tmpvar_5;
  tmpvar_5 = texture (sampler_pw_noise_lq, (xlat_mutablers / 32.0));
  xlat_mutablenoise = (tmpvar_5.xyz * vec3(greaterThanEqual (tmpvar_5.xyz, vec3(0.9, 0.9, 0.9))));
  xlat_mutablenoise = (xlat_mutablenoise * (1.0 + (0.5 * 
    (dot (texture (sampler_noise_hq, (16.0 * xlat_mutablers)), vec4(0.32, 0.49, 0.29, 0.0)) - 0.5)
  )));
  xlat_mutableret1 = xlat_mutablenoise;
  z_1 = (1.2 / abs(tmpvar_3.y));
  xlat_mutablers.x = (tmpvar_3.x * z_1);
  xlat_mutablers.y = (z_1 + q30);
  vec4 tmpvar_6;
  tmpvar_6 = texture (sampler_pw_noise_lq, (xlat_mutablers / 32.0));
  xlat_mutablenoise = (tmpvar_6.xyz * vec3(greaterThanEqual (tmpvar_6.xyz, vec3(0.9, 0.9, 0.9))));
  xlat_mutableret1 = (xlat_mutableret1 + xlat_mutablenoise);
  z_1 = (0.4 / abs(tmpvar_3.x));
  xlat_mutablers.y = (tmpvar_3.y * z_1);
  xlat_mutablers.x = (z_1 + q30);
  vec4 tmpvar_7;
  tmpvar_7 = texture (sampler_pw_noise_lq, (xlat_mutablers / 32.0));
  xlat_mutablenoise = (tmpvar_7.xyz * vec3(greaterThanEqual (tmpvar_7.xyz, vec3(0.9, 0.9, 0.9))));
  xlat_mutablenoise = (xlat_mutablenoise * (1.0 + (0.5 * 
    (dot (texture (sampler_noise_hq, (16.0 * xlat_mutablers)), vec4(0.32, 0.49, 0.29, 0.0)) - 0.5)
  )));
  xlat_mutableret1 = (xlat_mutableret1 + xlat_mutablenoise);
  z_1 = (1.2 / abs(tmpvar_3.x));
  xlat_mutablers.y = (tmpvar_3.y * z_1);
  xlat_mutablers.x = (z_1 + q30);
  vec4 tmpvar_8;
  tmpvar_8 = texture (sampler_pw_noise_lq, (xlat_mutablers / 32.0));
  xlat_mutablenoise = (tmpvar_8.xyz * vec3(greaterThanEqual (tmpvar_8.xyz, vec3(0.9, 0.9, 0.9))));
  xlat_mutableret1 = (xlat_mutableret1 + xlat_mutablenoise);
  vec4 tmpvar_9;
  tmpvar_9.w = 1.0;
  tmpvar_9.xyz = xlat_mutableret1;
  ret = tmpvar_9.xyz;
 }`,comp:`uniform sampler2D sampler_clouds2;
 shader_body { 
  vec2 uv_1;
  vec2 uv1_2;
  uv_1 = (uv * aspect.xy);
  vec2 tmpvar_3;
  tmpvar_3.y = 0.0;
  tmpvar_3.x = texsize.z;
  vec2 tmpvar_4;
  tmpvar_4.x = 0.0;
  tmpvar_4.y = texsize.w;
  vec2 tmpvar_5;
  tmpvar_5.x = (dot (texture (sampler_main, (uv_1 - tmpvar_3)).xyz, vec3(0.32, 0.49, 0.29)) - dot (texture (sampler_main, (uv_1 + tmpvar_3)).xyz, vec3(0.32, 0.49, 0.29)));
  tmpvar_5.y = (dot (texture (sampler_main, (uv_1 - tmpvar_4)).xyz, vec3(0.32, 0.49, 0.29)) - dot (texture (sampler_main, (uv_1 + tmpvar_4)).xyz, vec3(0.32, 0.49, 0.29)));
  uv1_2 = ((0.3 * sin(
    ((uv_1 + (0.02 * time)) * 6.0)
  )) + (0.2 * tmpvar_5));
  vec4 tmpvar_6;
  tmpvar_6 = texture (sampler_clouds2, (uv_orig + tmpvar_5));
  vec4 tmpvar_7;
  tmpvar_7.w = 1.0;
  tmpvar_7.xyz = (((-2.0 * 
    (0.1 * texture (sampler_main, uv_1))
  .xyz) + (
    clamp (((0.004 * q26) / sqrt(dot (uv1_2, uv1_2))), 0.0, 1.0)
   * vec3(1.0, 0.8, 0.4))) + (0.4 * (tmpvar_6.xyz + 
    (dot (tmpvar_6.xyz, vec3(0.32, 0.49, 0.29)) - 0.7)
  )));
  ret = tmpvar_7.xyz;
 }`}},function(o,l){o.exports={baseVals:{rating:5,gammaadj:1.780001,decay:.5,echo_zoom:.999998,echo_alpha:.5,echo_orient:3,wave_mode:5,wave_dots:1,wave_thick:1,wave_brighten:0,darken:1,wave_a:.001,wave_scale:5.552,wave_smoothing:.504,wave_mystery:-1,modwavealphastart:.71,modwavealphaend:1.3,warpanimspeed:1.4595,warpscale:2.0067,zoom:.9999,warp:.01,sx:.9999,wave_g:0,wave_b:0,ob_size:.06,ob_r:1,ob_g:1,ob_b:1,ib_size:.26,mv_x:64,mv_y:48,mv_l:.85,mv_r:.5,mv_g:.5,mv_b:.5,mv_a:0,b1x:.6999,b1ed:0},shapes:[{baseVals:{enabled:0}},{baseVals:{enabled:0}},{baseVals:{enabled:1,sides:5,additive:1,x:.9,rad:.22613,g:.6,g2:0,border_a:0},init_eqs_str:"",frame_eqs_str:"a.x=.05+div(randint(900),1E3);a.y=.05+div(randint(900),1E3);a.ang=div(randint(320),100);"},{baseVals:{enabled:0}}],waves:[{baseVals:{enabled:0}},{baseVals:{enabled:0}},{baseVals:{enabled:0}},{baseVals:{enabled:0}}],init_eqs_str:"a.ready=0;a.index2=0;a.index4=0;a.index=0;a.q22=0;a.q21=0;a.sp0=0;a.q29=0;a.q1=0;a.dec_med=0;a.q5=0;a.index3=0;a.rott=0;a.is_beat=0;a.q31=0;a.q23=0;a.k1=0;a.q24=0;a.dec_slow=0;a.go=0;a.q4=0;a.is_beat2=0;a.q26=0;a.p2=0;a.avg=0;a.movez=0;a.q19=0;a.beat=0;a.p1=0;a.peak=0;a.q2=0;a.q27=0;a.q3=0;a.t0=0;a.q32=0;a.q28=0;a.q30=0;a.q20=0;a.index4=randint(2);a.index3=randint(4);",frame_eqs_str:`a.dec_med=pow(.9,div(30,a.fps));a.dec_slow=pow(.99,div(30,a.fps));a.beat=Math.max(Math.max(a.bass,a.mid),a.treb);a.avg=a.avg*a.dec_slow+a.beat*(1-a.dec_slow);a.is_beat=above(a.beat,.5+a.avg+a.peak)*above(a.time,a.t0+.2);a.t0=a.is_beat*a.time+(1-a.is_beat)*a.t0;a.peak=a.is_beat*a.beat+(1-a.is_beat)*a.peak*a.dec_med;a.index=mod(a.index+a.is_beat,4);a.index2=mod(a.index2+a.is_beat*bnot(a.index),4);a.index3=mod(a.index3+a.is_beat*bnot(a.index)*bnot(a.index2),4);a.index4=mod(a.index4+
a.is_beat*bnot(a.index)*bnot(a.index2)*bnot(a.index3),2);a.q20=a.avg;a.q21=a.beat;a.q22=a.peak;a.q23=a.index;a.q24=a.is_beat;a.q26=a.bass+a.mid+a.treb;a.ready=a.is_beat*bnot(a.ready)+bnot(a.is_beat2)*a.ready;a.is_beat2=a.ready*above(a.time,a.t0+.2);a.q19=a.is_beat2;a.k1=a.is_beat*equal(a.index,0);a.p1=a.k1*(a.p1+1)+(1-a.k1)*a.p1;a.p2=a.dec_med*a.p2+(1-a.dec_med)*a.p1;a.rott=div(3.14159265359*a.p2,2);a.q27=a.index+1;a.q28=a.index2+1;a.q29=4*a.index3+1;a.q30=a.index4;a.q1=Math.cos(a.rott);a.q2=Math.sin(a.rott);
a.q3=-a.q2;a.q4=a.q1;a.sp0=a.dec_slow*a.sp0+(a.q24+.05)*(1-a.dec_slow);a.go=a.go*a.dec_med+(1-a.dec_med)*(1-bnot(a.index2+a.index3));a.movez+=div(.015*30,a.fps)*a.go;a.q31=a.movez;a.q32=.5+.02*Math.sin(div(a.time,5));a.q5=mod(a.index4,2);a.zoom=1;a.rot=0;a.dx=.05*Math.max(Math.sin(div(a.time,9.7))-.95,0);a.dy=.002*(1-a.go);a.rot=50*(a.dx-a.dy);`,pixel_eqs_str:"",pixel_eqs:"",warp:` shader_body { 
  vec2 tmpvar_1;
  tmpvar_1 = ((uv * texsize.xy) * 0.03);
  vec2 tmpvar_2;
  tmpvar_2.x = (cos((tmpvar_1.y * q1)) * sin(-(tmpvar_1.y)));
  tmpvar_2.y = (sin(tmpvar_1.x) * cos((tmpvar_1.y * q2)));
  vec4 tmpvar_3;
  tmpvar_3.w = 1.0;
  tmpvar_3.xyz = ((texture (sampler_main, (uv - 
    ((tmpvar_2 * texsize.zw) * 18.0)
  )).xyz * 0.99) - 0.01);
  ret = tmpvar_3.xyz;
 }`,comp:` shader_body { 
  vec2 uv1_1;
  vec3 tmpvar_2;
  tmpvar_2 = texture (sampler_main, uv).xyz;
  vec2 tmpvar_3;
  tmpvar_3.x = (texture (sampler_main, (uv - vec2(0.001, 0.0))).xyz - texture (sampler_main, (uv + vec2(0.001, 0.0))).xyz).x;
  tmpvar_3.y = (texture (sampler_main, (uv - vec2(0.0, 0.001))).xyz - texture (sampler_main, (uv + vec2(0.0, 0.001))).xyz).x;
  uv1_1 = ((0.3 * cos(
    ((uv - 0.5) + 1.8)
  )) - (2.0 * tmpvar_3));
  vec4 tmpvar_4;
  tmpvar_4.w = 1.0;
  tmpvar_4.xyz = (0.8 * ((0.3 * 
    dot (tmpvar_2, vec3(0.32, 0.49, 0.29))
  ) + (
    (22.0 * clamp ((0.01 / sqrt(
      dot (uv1_1, uv1_1)
    )), 0.0, 1.0))
   * 
    (tmpvar_2 + 0.1)
  )));
  ret = tmpvar_4.xyz;
 }`}},function(o,l){o.exports={baseVals:{rating:3,gammaadj:1.98,decay:.5,echo_zoom:1,echo_alpha:.5,echo_orient:3,wave_mode:7,additivewave:1,wave_thick:1,modwavealphabyvolume:1,wave_brighten:0,wrap:0,darken:1,wave_a:.001,wave_scale:.958,wave_smoothing:.45,modwavealphastart:0,modwavealphaend:1.32,warpanimspeed:1.459,warpscale:2.007,zoom:.9999,warp:.01,sx:.9999,wave_r:0,wave_g:0,wave_b:0,ob_size:.05,ob_g:.1,ob_b:1,ob_a:1,ib_size:0,ib_r:0,ib_g:0,ib_b:0,mv_x:25.6,mv_y:9.6,mv_l:0,mv_r:.5,mv_g:.5,mv_b:.5,mv_a:0,b1ed:0},shapes:[{baseVals:{enabled:0}},{baseVals:{enabled:0}},{baseVals:{enabled:0}},{baseVals:{enabled:0}}],waves:[{baseVals:{enabled:0}},{baseVals:{enabled:0}},{baseVals:{enabled:0}},{baseVals:{enabled:0}}],init_eqs_str:`a.look=0;a.n=0;a.reg26=0;a.uvx0=0;a.reg34=0;a.reg28=0;a.reg23=0;a.q25=0;a.angchg=0;a.reg20=0;a.reg15=0;a.reg10=0;a.q12=0;a.v3=0;a.q22=0;a.q21=0;a.diry=0;a.q13=0;a.q6=0;a.posx=0;a.fps_=0;a.reg25=0;a.uvx=0;a.q1=0;a.travel=0;a.posz=0;a.q5=0;a.dirz=0;a.dec_s=0;a.reg16=0;a.slow=0;a.reg36=0;a.reg22=0;a.uvy=0;a.rotz=0;a.ly=0;a.dist_=0;a.q23=0;a.q24=0;a.reg24=0;a.cran0=0;a.ran2=0;a.q11=0;a.q10=0;a.reg14=0;a.posy=0;a.reg31=0;a.dirx=0;a.q4=0;a.start=0;a.reg12=0;a.reg13=0;a.c2=0;a.reg37=
0;a.s3=0;a.yslope=0;a.lampy=0;a.q16=0;a.xslope=0;a.q26=0;a.reg38=0;a.reg35=0;a.reg11=0;a.tx=0;a.avg=0;a.uvz=0;a.c3=0;a.uvy0=0;a.reg27=0;a.q19=0;a.beat=0;a.reg32=0;a.lx=0;a.reg21=0;a.uvz0=0;a.len=0;a.reg18=0;a.reg30=0;a.q2=0;a.q27=0;a.slen=0;a.q14=0;a.dist=0;a.reg17=0;a.v1=0;a.speed=0;a.s1=0;a.t0=0;a.s2=0;a.ran1=0;a.reg33=0;a.q7=0;a.ds=0;a.q28=0;a.lampx=0;a.ty=0;a.c1=0;a.v2=0;a.q20=0;a.q8=0;a.avg=.01;a.q7=.25;a.q8=randint(2)-1;a.q16=1+randint(2);a.q18=randint(.8)+.1;a.q30=1;a.q31=128;a.start=1;a.travel=
0;a.rotz=0;a.look=0;a.slow=0;a.t0=a.time+3;a.lampx=.5;a.lampy=.5;a.cran0=randint(1);for(var b=a.n=0;1E4>b;b++)a.gmegabuf[Math.floor(a.n)]=0,a.n+=1;for(b=a.n=0;1E4>b;b++)a.megabuf[Math.floor(a.n)]=0,a.n+=1;a.trelx=0;a.trely=0;a.trelz=0;a.reg20=1;a.reg21=0;a.reg22=0;a.reg23=0;a.reg24=1;a.reg25=0;a.reg26=0;a.reg27=0;a.reg28=1;b=0;do{b+=1;var c;a.ran1=div(randint(800),100);a.ran2=div(randint(800),100);a.ran3=div(randint(800),100);a.posx=randint(5)-2;a.posy=randint(5)-2;a.posz=randint(5)-2;a.c1=Math.cos(a.ran1);
a.c2=Math.cos(a.ran2);a.c3=Math.cos(a.ran3);a.s1=Math.sin(a.ran1);a.s2=Math.sin(a.ran2);a.s3=Math.sin(a.ran3);a.reg20=a.c2*a.c1;a.reg21=a.c2*a.s1;a.reg22=-a.s2;a.reg23=a.s3*a.s2*a.c1-a.c3*a.s1;a.reg24=a.s3*a.s2*a.s1+a.c3*a.c1;a.reg25=a.s3*a.c2;a.reg26=a.c3*a.s2*a.c1+a.s3*a.s1;a.reg27=a.c3*a.s2*a.s1-a.s3*a.c1;a.reg28=a.c3*a.c2;a.dist=.001;var d=0;do{d+=1;a.uvx=div(a.reg26*a.dist,a.q7);a.uvy=div(a.reg27*a.dist,a.q7);a.uvz=div(a.reg28*a.dist,a.q7);a.uvx+=a.posx;a.uvy+=a.posy;a.uvz+=a.posz;a.uvx=8*(div(a.uvx,
8)+30.5-Math.floor(div(a.uvx,8)+30.5)-.5);a.uvy=8*(div(a.uvy,8)+30.5-Math.floor(div(a.uvy,8)+30.5)-.5);a.uvz=8*(div(a.uvz,8)+30.5-Math.floor(div(a.uvz,8)+30.5)-.5);a.uvx0=a.uvx+a.q8;a.uvy0=a.uvy+a.q8;a.uvz0=a.uvz+a.q8;for(c=0;8>c;c++)a.uvx=.00001<Math.abs(1<a.uvx?1:0)?2-a.uvx:.00001<Math.abs(-1>a.uvx?1:0)?-2-a.uvx:a.uvx,a.uvy=.00001<Math.abs(1<a.uvy?1:0)?2-a.uvy:.00001<Math.abs(-1>a.uvy?1:0)?-2-a.uvy:a.uvy,a.uvz=.00001<Math.abs(1<a.uvz?1:0)?2-a.uvz:.00001<Math.abs(-1>a.uvz?1:0)?-2-a.uvz:a.uvz,a.slen=
a.uvx*a.uvx+a.uvy*a.uvy+a.uvz*a.uvz,a.uvx=2.6*(.00001<Math.abs(.25>a.slen?1:0)?4*a.uvx:.00001<Math.abs(1>a.slen?1:0)?div(a.uvx,a.slen):a.uvx)+a.uvx0,a.uvy=2.6*(.00001<Math.abs(.25>a.slen?1:0)?4*a.uvy:.00001<Math.abs(1>a.slen?1:0)?div(a.uvy,a.slen):a.uvy)+a.uvy0,a.uvz=2.6*(.00001<Math.abs(.25>a.slen?1:0)?4*a.uvz:.00001<Math.abs(1>a.slen?1:0)?div(a.uvz,a.slen):a.uvz)+a.uvz0;a.len=sqrt(a.uvx*a.uvx+a.uvy*a.uvy+a.uvz*a.uvz);a.dist*=1.05;c=(.6>a.dist?1:0)*(30<a.len?1:0)}while(.00001<Math.abs(c)&&1048576>
d);d=.06>a.dist?1:0}while(.00001<Math.abs(d)&&1048576>b);`,frame_eqs_str:`a.fps_=0*a.fps_+1*(.00001<Math.abs(25>=a.fps?1:0)?a.fps:25+.5*(a.fps-25));a.dec_s=1-div(.06*30,a.fps_);a.beat=a.time>a.t0+3?1:0;a.t0=.00001<Math.abs(a.beat)?a.time:a.t0;a.speed=div(Math.min(.2,a.dist_-.02)*(1+2*a.avg)*(1-0*a.slow)*.7,a.q7);a.ds=a.ds*a.dec_s+div((1-a.dec_s)*a.speed*.25,a.fps_);a.rotz=.00001<Math.abs(.00001>Math.abs(a.rotz-0)?1:0)?a.beat*(randint(100)<20*a.travel?1:0)*(div(randint(10),10)-.3):bnot(a.beat*(30>randint(100)?1:0))*a.rotz;a.slow=.00001<Math.abs(bnot(a.slow))?
a.beat*(6>randint(1E3*a.avg)?1:0):bnot(a.beat*(50>randint(100)?1:0));a.look=.00001<Math.abs(bnot(a.look))?a.beat*(12>randint(1E3*a.speed)?1:0):bnot(a.beat*(50>randint(100)?1:0));a.lx=.00001<Math.abs(a.beat)?div(randint(150),200)+.15:a.lx;a.ly=.00001<Math.abs(a.beat)?div(randint(150),200)+.15:a.ly;a.lampx=a.lampx*a.dec_s+(1-a.dec_s)*(.00001<Math.abs(a.look)?a.lx:.5);a.lampy=a.lampy*a.dec_s+(1-a.dec_s)*(.00001<Math.abs(a.look)?a.ly:.5);a.q1=a.lampx;a.q2=a.lampy;a.dirx=a.reg26;a.diry=a.reg27;a.dirz=
a.reg28;a.posx+=a.ds*a.dirx;a.posy+=a.ds*a.diry;a.posz+=a.ds*a.dirz;a.q4=a.posx;a.q5=a.posy;a.q6=a.posz;a.angchg=(.2-a.dist_)*(.2>a.dist_?1:0)*2;a.travel=.00001<Math.abs(0<a.angchg?1:0)?0:a.travel+a.ds;a.v1=a.v1*a.dec_s+(1-a.dec_s)*a.rotz*a.ds;a.v2=a.v2*a.dec_s+div((1-a.dec_s)*a.angchg*a.xslope,a.fps_);a.v3=a.v3*a.dec_s+(1-a.dec_s)*(div(a.angchg*a.yslope,a.fps_)+2*a.v1*Math.sin(.1*a.time));a.reg30=a.reg20;a.reg31=a.reg21;a.reg32=a.reg22;a.reg33=a.reg23;a.reg34=a.reg24;a.reg35=a.reg25;a.reg36=a.reg26;
a.reg37=a.reg27;a.reg38=a.reg28;a.n=0;for(var b=a.avg=0;5>b;b++){a.n+=1;a.ran1=div(randint(100),100);a.ran2=div(randint(100),200)-.25;a.tx=Math.cos(1.57*a.n+a.ran2)*(4>=a.n?1:0)*a.ran1;a.ty=Math.sin(1.57*a.n+a.ran2)*(4>=a.n?1:0)*a.ran1;a.c1=Math.cos(a.v1);a.c2=Math.cos(a.v2+a.ty);a.c3=Math.cos(a.v3+a.tx);a.s1=Math.sin(a.v1);a.s2=Math.sin(a.v2+a.ty);a.s3=Math.sin(a.v3+a.tx);a.reg10=a.c2*a.c1;a.reg11=a.c2*a.s1;a.reg12=-a.s2;a.reg13=a.s3*a.s2*a.c1-a.c3*a.s1;a.reg14=a.s3*a.s2*a.s1+a.c3*a.c1;a.reg15=a.s3*
a.c2;a.reg16=a.c3*a.s2*a.c1+a.s3*a.s1;a.reg17=a.c3*a.s2*a.s1-a.s3*a.c1;a.reg18=a.c3*a.c2;a.reg20=a.reg30;a.reg21=a.reg31;a.reg22=a.reg32;a.reg23=a.reg33;a.reg24=a.reg34;a.reg25=a.reg35;a.reg26=a.reg36;a.reg27=a.reg37;a.reg28=a.reg38;a.q20=a.reg10*a.reg20+a.reg11*a.reg23+a.reg12*a.reg26;a.q21=a.reg10*a.reg21+a.reg11*a.reg24+a.reg12*a.reg27;a.q22=a.reg10*a.reg22+a.reg11*a.reg25+a.reg12*a.reg28;a.q23=a.reg13*a.reg20+a.reg14*a.reg23+a.reg15*a.reg26;a.q24=a.reg13*a.reg21+a.reg14*a.reg24+a.reg15*a.reg27;
a.q25=a.reg13*a.reg22+a.reg14*a.reg25+a.reg15*a.reg28;a.q26=a.reg16*a.reg20+a.reg17*a.reg23+a.reg18*a.reg26;a.q27=a.reg16*a.reg21+a.reg17*a.reg24+a.reg18*a.reg27;a.q28=a.reg16*a.reg22+a.reg17*a.reg25+a.reg18*a.reg28;a.reg20=a.q20;a.reg21=a.q21;a.reg22=a.q22;a.reg23=a.q23;a.reg24=a.q24;a.reg25=a.q25;a.reg26=a.q26;a.reg27=a.q27;a.reg28=a.q28;a.dist=.002;var c,d=0;do{d+=1;a.uvx=div(a.reg26*a.dist,a.q7);a.uvy=div(a.reg27*a.dist,a.q7);a.uvz=div(a.reg28*a.dist,a.q7);a.uvx+=a.posx;a.uvy+=a.posy;a.uvz+=a.posz;
a.uvx=8*(div(a.uvx,8)+30.5-Math.floor(div(a.uvx,8)+30.5)-.5);a.uvy=8*(div(a.uvy,8)+30.5-Math.floor(div(a.uvy,8)+30.5)-.5);a.uvz=8*(div(a.uvz,8)+30.5-Math.floor(div(a.uvz,8)+30.5)-.5);a.uvx0=a.uvx+a.q8;a.uvy0=a.uvy+a.q8;a.uvz0=a.uvz+a.q8;for(c=0;8>c;c++)a.uvx=.00001<Math.abs(1<a.uvx?1:0)?2-a.uvx:.00001<Math.abs(-1>a.uvx?1:0)?-2-a.uvx:a.uvx,a.uvy=.00001<Math.abs(1<a.uvy?1:0)?2-a.uvy:.00001<Math.abs(-1>a.uvy?1:0)?-2-a.uvy:a.uvy,a.uvz=.00001<Math.abs(1<a.uvz?1:0)?2-a.uvz:.00001<Math.abs(-1>a.uvz?1:0)?
-2-a.uvz:a.uvz,a.slen=a.uvx*a.uvx+a.uvy*a.uvy+a.uvz*a.uvz,a.uvx=2.6*(.00001<Math.abs(.25>a.slen?1:0)?4*a.uvx:.00001<Math.abs(1>a.slen?1:0)?div(a.uvx,a.slen):a.uvx)+a.uvx0,a.uvy=2.6*(.00001<Math.abs(.25>a.slen?1:0)?4*a.uvy:.00001<Math.abs(1>a.slen?1:0)?div(a.uvy,a.slen):a.uvy)+a.uvy0,a.uvz=2.6*(.00001<Math.abs(.25>a.slen?1:0)?4*a.uvz:.00001<Math.abs(1>a.slen?1:0)?div(a.uvz,a.slen):a.uvz)+a.uvz0;a.len=sqrt(a.uvx*a.uvx+a.uvy*a.uvy+a.uvz*a.uvz);a.dist*=1.1;c=(.6>a.dist?1:0)*(30<a.len?1:0)}while(.00001<
Math.abs(c)&&1048576>d);a.megabuf[Math.floor(a.n)]=a.megabuf[Math.floor(a.n)]*a.dec_s+(1-a.dec_s)*a.dist;a.avg+=Math.abs(div(a.megabuf[Math.floor(a.n)],5))}a.n=0;for(b=a.avg=0;5>b;b++)a.n+=1,a.avg+=Math.abs(div(a.megabuf[Math.floor(a.n)],5));a.xslope=Math.min(Math.max(div(2,a.avg)*(a.megabuf[1]-a.megabuf[3]),-3),3);a.yslope=Math.min(Math.max(div(2,a.avg)*(a.megabuf[4]-a.megabuf[2]),-3),3);a.monitor=a.avg;a.dist_=a.dist_*a.dec_s+(1-a.dec_s)*a.dist;a.q10=a.ds*a.q7;a.q14=Math.abs(a.ds)+2*(Math.abs(a.v1)+
Math.abs(a.v2)+Math.abs(a.v3))+div(1,255)+.05*a.start;a.q19=.6+.4*Math.sin(.02*a.time+6*a.cran0);a.start*=.9;a.q11=a.v1;a.q12=a.v2;a.q13=a.v3;a.monitor=a.q16;`,pixel_eqs_str:"a.warp=0;a.zoom=1;a.dx=div(-a.q12,a.q16)*(1+0*pow(a.x-.5,2));a.dy=div(a.q13,a.q16)*(1+0*pow(a.y-.5,2));a.rot=a.q11;",warp:`float sustain;
float xlat_mutabledist;
float xlat_mutablestruc;
vec2 xlat_mutableuv1;
vec3 xlat_mutableuv2;
 shader_body { 
  mat3 tmpvar_1;
  tmpvar_1[uint(0)].x = q20;
  tmpvar_1[uint(0)].y = q23;
  tmpvar_1[uint(0)].z = q26;
  tmpvar_1[1u].x = q21;
  tmpvar_1[1u].y = q24;
  tmpvar_1[1u].z = q27;
  tmpvar_1[2u].x = q22;
  tmpvar_1[2u].y = q25;
  tmpvar_1[2u].z = q28;
  vec3 tmpvar_2;
  tmpvar_2.x = q4;
  tmpvar_2.y = q5;
  tmpvar_2.z = q6;
  sustain = (0.98 - q14);
  vec2 uv_3;
  vec3 ret_4;
  vec2 tmpvar_5;
  tmpvar_5 = (uv - 0.5);
  xlat_mutableuv1 = ((tmpvar_5 * aspect.xy) * q16);
  vec4 tmpvar_6;
  tmpvar_6 = texture (sampler_pc_main, uv);
  uv_3 = ((tmpvar_5 * (1.0 - 
    (q10 / (1.0 - ((tmpvar_6.z + 
      (0.003921569 * tmpvar_6.y)
    ) + (q10 * 0.7))))
  )) + 0.5);
  vec4 tmpvar_7;
  tmpvar_7 = fract((8.0 * texture (sampler_noise_lq, (uv_3 + rand_frame.yz))));
  xlat_mutabledist = tmpvar_7.x;
  if ((tmpvar_7.y > 0.2)) {
    vec3 tmpvar_8;
    tmpvar_8 = (tmpvar_7.xyz - vec3(0.4, 0.5, 0.5));
    vec2 uvi_9;
    uvi_9 = ((tmpvar_8.zy * 0.003) + uv_3);
    vec2 pix_10;
    vec4 nb2_11;
    vec4 nb_12;
    vec2 x_13;
    x_13 = (uvi_9 - 0.5);
    pix_10 = (texsize.zw * (1.0 + (
      sqrt(dot (x_13, x_13))
     * 8.0)));
    float tmpvar_14;
    tmpvar_14 = (q10 * 0.7);
    vec4 tmpvar_15;
    tmpvar_15 = texture (sampler_pc_main, (uvi_9 - pix_10));
    nb_12.x = (1.0 - ((tmpvar_15.z + 
      (0.003921569 * tmpvar_15.y)
    ) + tmpvar_14));
    vec4 tmpvar_16;
    tmpvar_16 = texture (sampler_pc_main, (uvi_9 + (pix_10 * vec2(1.0, -1.0))));
    nb_12.y = (1.0 - ((tmpvar_16.z + 
      (0.003921569 * tmpvar_16.y)
    ) + tmpvar_14));
    vec4 tmpvar_17;
    tmpvar_17 = texture (sampler_pc_main, (uvi_9 + pix_10));
    nb_12.z = (1.0 - ((tmpvar_17.z + 
      (0.003921569 * tmpvar_17.y)
    ) + tmpvar_14));
    vec4 tmpvar_18;
    tmpvar_18 = texture (sampler_pc_main, (uvi_9 + (pix_10 * vec2(-1.0, 1.0))));
    nb_12.w = (1.0 - ((tmpvar_18.z + 
      (0.003921569 * tmpvar_18.y)
    ) + tmpvar_14));
    vec4 tmpvar_19;
    tmpvar_19 = texture (sampler_pc_main, (uvi_9 + (pix_10 * vec2(0.0, -1.0))));
    nb2_11.x = (1.0 - ((tmpvar_19.z + 
      (0.003921569 * tmpvar_19.y)
    ) + tmpvar_14));
    vec4 tmpvar_20;
    tmpvar_20 = texture (sampler_pc_main, (uvi_9 + (pix_10 * vec2(1.0, 0.0))));
    nb2_11.y = (1.0 - ((tmpvar_20.z + 
      (0.003921569 * tmpvar_20.y)
    ) + tmpvar_14));
    vec4 tmpvar_21;
    tmpvar_21 = texture (sampler_pc_main, (uvi_9 + (pix_10 * vec2(0.0, 1.0))));
    nb2_11.z = (1.0 - ((tmpvar_21.z + 
      (0.003921569 * tmpvar_21.y)
    ) + tmpvar_14));
    vec4 tmpvar_22;
    tmpvar_22 = texture (sampler_pc_main, (uvi_9 + (pix_10 * vec2(-1.0, 0.0))));
    nb2_11.w = (1.0 - ((tmpvar_22.z + 
      (0.003921569 * tmpvar_22.y)
    ) + tmpvar_14));
    vec4 tmpvar_23;
    tmpvar_23 = min (nb_12, nb2_11);
    nb_12.zw = tmpvar_23.zw;
    nb_12.xy = min (tmpvar_23.xy, tmpvar_23.zw);
    xlat_mutabledist = (min (nb_12.x, nb_12.y) + ((0.008 * tmpvar_8.x) * abs(tmpvar_8.y)));
  };
  vec4 tmpvar_24;
  tmpvar_24 = texture (sampler_pc_main, uv_3);
  float tmpvar_25;
  tmpvar_25 = min (xlat_mutabledist, (1.0 - (
    (tmpvar_24.z + (0.003921569 * tmpvar_24.y))
   + 
    (q10 * 0.7)
  )));
  xlat_mutabledist = tmpvar_25;
  float tmpvar_26;
  tmpvar_26 = (tmpvar_25 + pow (tmpvar_25, 3.0));
  vec3 tmpvar_27;
  tmpvar_27.xy = (xlat_mutableuv1 * tmpvar_26);
  tmpvar_27.z = tmpvar_26;
  xlat_mutableuv2 = (((tmpvar_27 / q7) * tmpvar_1) + tmpvar_2);
  xlat_mutableuv2 = ((fract(
    ((xlat_mutableuv2 / 8.0) + 0.5)
  ) - 0.5) * 8.0);
  float li_28;
  vec3 zz0_29;
  vec3 zz_30;
  zz0_29 = (xlat_mutableuv2 + q8);
  li_28 = 0.0;
  zz_30 = ((2.0 * clamp (xlat_mutableuv2, vec3(-1.0, -1.0, -1.0), vec3(1.0, 1.0, 1.0))) - xlat_mutableuv2);
  float tmpvar_31;
  tmpvar_31 = dot (zz_30, zz_30);
  if ((tmpvar_31 <= 0.25)) {
    zz_30 = (zz_30 * 4.0);
    li_28 = 24.0;
  } else {
    if ((tmpvar_31 <= 1.0)) {
      zz_30 = (zz_30 / tmpvar_31);
    };
  };
  zz_30 = ((2.6 * zz_30) + zz0_29);
  zz_30 = ((2.0 * clamp (zz_30, vec3(-1.0, -1.0, -1.0), vec3(1.0, 1.0, 1.0))) - zz_30);
  float tmpvar_32;
  tmpvar_32 = dot (zz_30, zz_30);
  if ((tmpvar_32 <= 0.25)) {
    zz_30 = (zz_30 * 4.0);
    li_28 = 24.0;
  } else {
    if ((tmpvar_32 <= 1.0)) {
      zz_30 = (zz_30 / tmpvar_32);
    };
  };
  zz_30 = ((2.6 * zz_30) + zz0_29);
  zz_30 = ((2.0 * clamp (zz_30, vec3(-1.0, -1.0, -1.0), vec3(1.0, 1.0, 1.0))) - zz_30);
  float tmpvar_33;
  tmpvar_33 = dot (zz_30, zz_30);
  if ((tmpvar_33 <= 0.25)) {
    zz_30 = (zz_30 * 4.0);
    li_28 = 24.0;
  } else {
    if ((tmpvar_33 <= 1.0)) {
      zz_30 = (zz_30 / tmpvar_33);
    };
  };
  zz_30 = ((2.6 * zz_30) + zz0_29);
  zz_30 = ((2.0 * clamp (zz_30, vec3(-1.0, -1.0, -1.0), vec3(1.0, 1.0, 1.0))) - zz_30);
  float tmpvar_34;
  tmpvar_34 = dot (zz_30, zz_30);
  if ((tmpvar_34 <= 0.25)) {
    zz_30 = (zz_30 * 4.0);
    li_28 = 24.0;
  } else {
    if ((tmpvar_34 <= 1.0)) {
      zz_30 = (zz_30 / tmpvar_34);
    };
  };
  zz_30 = ((2.6 * zz_30) + zz0_29);
  zz_30 = ((2.0 * clamp (zz_30, vec3(-1.0, -1.0, -1.0), vec3(1.0, 1.0, 1.0))) - zz_30);
  float tmpvar_35;
  tmpvar_35 = dot (zz_30, zz_30);
  if ((tmpvar_35 <= 0.25)) {
    zz_30 = (zz_30 * 4.0);
    li_28 = 24.0;
  } else {
    if ((tmpvar_35 <= 1.0)) {
      zz_30 = (zz_30 / tmpvar_35);
    };
  };
  zz_30 = ((2.6 * zz_30) + zz0_29);
  zz_30 = ((2.0 * clamp (zz_30, vec3(-1.0, -1.0, -1.0), vec3(1.0, 1.0, 1.0))) - zz_30);
  float tmpvar_36;
  tmpvar_36 = dot (zz_30, zz_30);
  if ((tmpvar_36 <= 0.25)) {
    zz_30 = (zz_30 * 4.0);
    li_28 = 24.0;
  } else {
    if ((tmpvar_36 <= 1.0)) {
      zz_30 = (zz_30 / tmpvar_36);
    };
  };
  zz_30 = ((2.6 * zz_30) + zz0_29);
  zz_30 = ((2.0 * clamp (zz_30, vec3(-1.0, -1.0, -1.0), vec3(1.0, 1.0, 1.0))) - zz_30);
  float tmpvar_37;
  tmpvar_37 = dot (zz_30, zz_30);
  if ((tmpvar_37 <= 0.25)) {
    zz_30 = (zz_30 * 4.0);
    li_28 = 24.0;
  } else {
    if ((tmpvar_37 <= 1.0)) {
      zz_30 = (zz_30 / tmpvar_37);
    };
  };
  zz_30 = ((2.6 * zz_30) + zz0_29);
  zz_30 = ((2.0 * clamp (zz_30, vec3(-1.0, -1.0, -1.0), vec3(1.0, 1.0, 1.0))) - zz_30);
  float tmpvar_38;
  tmpvar_38 = dot (zz_30, zz_30);
  if ((tmpvar_38 <= 0.25)) {
    zz_30 = (zz_30 * 4.0);
    li_28 = 24.0;
  } else {
    if ((tmpvar_38 <= 1.0)) {
      zz_30 = (zz_30 / tmpvar_38);
    };
  };
  zz_30 = ((2.6 * zz_30) + zz0_29);
  vec4 tmpvar_39;
  tmpvar_39.xyz = zz_30;
  tmpvar_39.w = li_28;
  float tmpvar_40;
  tmpvar_40 = sqrt(dot (zz_30, zz_30));
  xlat_mutablestruc = (sqrt(dot (tmpvar_39.xyw, tmpvar_39.xyw)) / 24.0);
  vec4 tmpvar_41;
  tmpvar_41 = texture (sampler_pc_main, uv_3);
  float tmpvar_42;
  float tmpvar_43;
  tmpvar_43 = (q10 * 0.7);
  tmpvar_42 = ((log(
    (1.0 + (tmpvar_40 / 24.0))
  ) * 0.02) * (1.0 - (1.0 - 
    ((tmpvar_41.z + (0.003921569 * tmpvar_41.y)) + tmpvar_43)
  )));
  float tmpvar_44;
  vec4 tmpvar_45;
  tmpvar_45 = texture (sampler_pc_main, uv_3);
  tmpvar_44 = (1.0 - ((tmpvar_45.z + 
    (0.003921569 * tmpvar_45.y)
  ) + tmpvar_43));
  if ((((tmpvar_25 <= tmpvar_44) && (tmpvar_40 < 24.0)) && (tmpvar_25 > 0.005))) {
    ret_4.x = (((1.0 - sustain) * xlat_mutablestruc) + (sustain * mix (texture (sampler_main, uv_3).xyz, 
      ((texture (sampler_blur1, uv_3).xyz * scale1) + bias1)
    , vec3(
      (q14 * 4.0)
    )).x));
    float x_46;
    x_46 = ((1.0 - tmpvar_25) * 255.0);
    float ip_47;
    ip_47 = float(int(x_46));
    vec2 tmpvar_48;
    tmpvar_48.x = (x_46 - ip_47);
    tmpvar_48.y = (ip_47 / 255.0);
    ret_4.yz = tmpvar_48;
  } else {
    vec3 tmpvar_49;
    tmpvar_49.y = 0.0;
    tmpvar_49.x = sustain;
    tmpvar_49.z = (1.0 - tmpvar_42);
    vec3 tmpvar_50;
    tmpvar_50.xy = vec2(0.003921569, 0.0);
    tmpvar_50.z = (q14 / 6.0);
    ret_4 = ((texture (sampler_fc_main, uv_3).xyz * tmpvar_49) - tmpvar_50);
  };
  vec4 tmpvar_51;
  tmpvar_51.w = 1.0;
  tmpvar_51.xyz = ret_4;
  ret = tmpvar_51.xyz;
 }`,comp:` shader_body { 
  vec3 tmpvar_1;
  tmpvar_1.x = q4;
  tmpvar_1.y = q5;
  tmpvar_1.z = q6;
  mat3 tmpvar_2;
  tmpvar_2[uint(0)].x = q20;
  tmpvar_2[uint(0)].y = q23;
  tmpvar_2[uint(0)].z = q26;
  tmpvar_2[1u].x = q21;
  tmpvar_2[1u].y = q24;
  tmpvar_2[1u].z = q27;
  tmpvar_2[2u].x = q22;
  tmpvar_2[2u].y = q25;
  tmpvar_2[2u].z = q28;
  vec2 tmpvar_3;
  tmpvar_3.x = q1;
  tmpvar_3.y = q2;
  vec2 uv_4;
  vec3 ret_5;
  uv_4 = (((uv - 0.5) * 0.9) + 0.5);
  vec3 tmpvar_6;
  tmpvar_6.xy = ((uv_4 - 0.5) * min ((1.0 - texture (sampler_main, uv_4).z), (1.0 - 
    ((texture (sampler_blur2, uv_4).xyz * scale2) + bias2)
  .z)));
  tmpvar_6.z = min ((1.0 - texture (sampler_main, uv_4).z), (1.0 - (
    (texture (sampler_blur2, uv_4).xyz * scale2)
   + bias2).z));
  float tmpvar_7;
  tmpvar_7 = clamp ((abs(
    ((1.0 - ((texture (sampler_blur2, uv_4).xyz * scale2) + bias2).z) - clamp ((1.0 - (
      (texture (sampler_blur2, tmpvar_3).xyz * scale2)
     + bias2).z), 0.1, 0.4))
  ) + 0.2), 0.0, 1.0);
  float tmpvar_8;
  tmpvar_8 = clamp (((1.0 - 
    exp(-(((texture (sampler_blur1, uv_4).xyz * scale1) + bias1).x))
  ) - 0.2), 0.0, 1.0);
  ret_5 = ((mix (texture (sampler_main, uv_4).xyz, 
    ((texture (sampler_blur1, uv_4).xyz * scale1) + bias1)
  , vec3(tmpvar_7)).x * (0.2 + 
    ((1.0 - tmpvar_7) * (1.0 - min ((1.0 - texture (sampler_main, uv_4).z), (1.0 - 
      ((texture (sampler_blur2, uv_4).xyz * scale2) + bias2)
    .z))))
  )) * (1.0 + (0.5 * 
    sin((((tmpvar_6 / q7) * tmpvar_2) + tmpvar_1))
  )));
  vec3 tmpvar_9;
  tmpvar_9.xy = vec2(0.0, 1.0);
  tmpvar_9.z = (tmpvar_8 * 3.0);
  ret_5 = (mix (ret_5, tmpvar_9, vec3(tmpvar_8)) + ((
    pow ((1.0 - mix (texture (sampler_main, uv_4).xyz, (
      (texture (sampler_blur1, uv_4).xyz * scale1)
     + bias1), vec3(0.8, 0.8, 0.8)).z), 3.0)
   * 
    (0.5 + (0.5 * slow_roam_cos))
  ) * q19).xyz);
  ret_5 = (1.0 - exp((-2.0 * ret_5)));
  vec4 tmpvar_10;
  tmpvar_10.w = 1.0;
  tmpvar_10.xyz = ret_5;
  ret = tmpvar_10.xyz;
 }`}},function(o,l){o.exports={baseVals:{rating:0,gammaadj:1.980001,decay:.5,echo_zoom:.999998,echo_alpha:.5,echo_orient:3,wave_mode:7,additivewave:1,wave_thick:1,modwavealphabyvolume:1,wave_brighten:0,darken:1,wave_a:.001,wave_scale:.958178,wave_smoothing:.45,modwavealphastart:0,modwavealphaend:1.32,warpanimspeed:1.4595,warpscale:2.0067,zoom:.9999,warp:.01,sx:.9999,ob_r:.3999,ob_a:.2,ib_size:0,mv_x:64,mv_y:48,mv_l:1.85,mv_r:.4999,mv_g:.4999,mv_b:.4999,mv_a:0,b1ed:0},shapes:[{baseVals:{enabled:0}},{baseVals:{enabled:1,sides:100,additive:1,x:.26,y:.2,rad:.393173,tex_zoom:.9355,r:0,g:.55,b:.5,g2:.4,b2:.4,a2:.07,border_r:.3,border_g:.7,border_b:.8,border_a:0},init_eqs_str:"a.g0=0;a.y0=0;a.q1=0;a.x0=0;a.q24=0;a.q26=0;a.r0=0;a.trig=0;a.q2=0;a.b0=0;a.rad0=0;",frame_eqs_str:`a.trig=a.q24;a.x0=a.x0*bnot(a.trig)+a.trig*(.5+div(randint(100),200));a.y0=a.y0*bnot(a.trig)+a.trig*(.5+div(randint(100),200));a.x0+=div(.1*a.q1*(3+a.q26),a.fps);a.y0+=div(.1*a.q2*(3+a.q26),a.fps);a.x0-=Math.floor(a.x0);a.y0-=Math.floor(a.y0);a.tex_ang=a.time;a.tex_zoom=a.q1;a.ang=div(a.time,100)*a.q2;a.x=a.x0;a.y=a.y0;a.rad0=a.rad0*bnot(a.trig)+a.trig*(.04+div(randint(100),1E3));a.rad=a.rad0;a.r0=bnot(a.trig)*a.r0+div(a.trig*randint(10),10);a.g0=bnot(a.trig)*a.g0+div(a.trig*
randint(10),10);a.b0=bnot(a.trig)*a.b0+div(a.trig*randint(10),10);a.r=a.r0;a.b=a.b0;a.g=a.g0;a.r2=0;a.b2=0;a.g2=0;a.a=1;a.a2=.3;`},{baseVals:{enabled:0}},{baseVals:{enabled:0}}],waves:[{baseVals:{enabled:0}},{baseVals:{enabled:0}},{baseVals:{enabled:0}},{baseVals:{enabled:0}}],init_eqs_str:"a.index2=0;a.index4=0;a.index=0;a.q22=0;a.q21=0;a.q1=0;a.dec_med=0;a.index3=0;a.rott=0;a.is_beat=0;a.q23=0;a.k1=0;a.q24=0;a.dec_slow=0;a.q11=0;a.q4=0;a.q26=0;a.p2=0;a.avg=0;a.beat=0;a.p1=0;a.peak=0;a.q2=0;a.q27=0;a.q3=0;a.t0=0;a.q28=0;a.q20=0;",frame_eqs_str:`a.dec_med=pow(.9,div(30,a.fps));a.dec_slow=pow(.99,div(30,a.fps));a.beat=Math.max(Math.max(a.bass,a.mid),a.treb);a.avg=a.avg*a.dec_slow+a.beat*(1-a.dec_slow);a.is_beat=above(a.beat,.2+a.avg+a.peak)*above(a.time,a.t0+.2);a.t0=a.is_beat*a.time+(1-a.is_beat)*a.t0;a.peak=a.is_beat*a.beat+(1-a.is_beat)*a.peak*a.dec_med;a.index=mod(a.index+a.is_beat,8);a.index2=mod(a.index2+a.is_beat*bnot(a.index),2);a.index3=mod(a.index3+a.is_beat*bnot(a.index)*bnot(a.index2),3);a.monitor=a.index4;
a.q20=a.avg;a.q21=a.beat;a.q22=a.peak;a.q23=a.index;a.q24=a.is_beat;a.q26=a.bass+a.mid+a.treb;a.q11=Math.min(a.q22,3);a.k1=a.is_beat*equal(a.index,0);a.p1=a.k1*(a.p1+1)+(1-a.k1)*a.p1;a.p2=a.dec_med*a.p2+(1-a.dec_med)*a.p1;a.rott=div(3.14159265359*a.p2,2);a.q27=8-a.index;a.q28=a.index2;a.q1=Math.cos(a.rott);a.q2=Math.sin(a.rott);a.q3=-a.q2;a.q4=a.q1;a.zoom=1+.02*a.q1;a.rot=.01*a.q2;a.dx=0*a.index;a.wave_a=0;`,pixel_eqs_str:"",pixel_eqs:"",warp:`float xlat_mutabledx;
float xlat_mutabledy;
vec2 xlat_mutableuv2;
vec2 xlat_mutablezz;
 shader_body { 
  vec2 uv_1;
  vec3 crisp_2;
  vec2 tmpvar_3;
  tmpvar_3.y = 0.0;
  tmpvar_3.x = texsize.w;
  vec2 tmpvar_4;
  tmpvar_4.x = 0.0;
  tmpvar_4.y = texsize.z;
  xlat_mutablezz = ((uv * texsize.xy) * 0.01);
  vec2 tmpvar_5;
  tmpvar_5.x = (cos((xlat_mutablezz.y * q1)) * sin(-(xlat_mutablezz.y)));
  tmpvar_5.y = (sin(xlat_mutablezz.x) * cos((xlat_mutablezz.y * q2)));
  uv_1 = (uv - ((tmpvar_5 * texsize.zw) * (8.0 + 
    (6.0 * q11)
  )));
  xlat_mutableuv2 = (((uv_1 / 2.0) * q27) / 4.0);
  xlat_mutabledx = dot ((texture (sampler_main, (xlat_mutableuv2 + tmpvar_3)).xyz - texture (sampler_main, (xlat_mutableuv2 - tmpvar_3)).xyz), vec3(0.32, 0.49, 0.29));
  xlat_mutabledy = dot ((texture (sampler_main, (xlat_mutableuv2 + tmpvar_4)).xyz - texture (sampler_main, (xlat_mutableuv2 - tmpvar_4)).xyz), vec3(0.32, 0.49, 0.29));
  float tmpvar_6;
  tmpvar_6 = (0.15 + (0.1 * q28));
  vec2 tmpvar_7;
  tmpvar_7 = (xlat_mutableuv2 + (time / 100.0));
  xlat_mutabledx = (xlat_mutabledx + (tmpvar_6 * (texture (sampler_noise_hq, tmpvar_7).x - 0.5)));
  xlat_mutabledy = (xlat_mutabledy + (tmpvar_6 * (texture (sampler_noise_hq, tmpvar_7).y - 0.5)));
  vec2 tmpvar_8;
  tmpvar_8.x = xlat_mutabledx;
  tmpvar_8.y = xlat_mutabledy;
  xlat_mutablezz = tmpvar_8;
  crisp_2 = (texture (sampler_main, (uv_1 + (tmpvar_8 * 0.04))).xyz + texture (sampler_main, uv_1).xyz);
  crisp_2 = (crisp_2 * 0.5);
  crisp_2 = (crisp_2 + ((0.05 * 
    (0.9 + (0.1 * roam_cos))
  .xyz) - (
    sqrt(dot (tmpvar_8, tmpvar_8))
   * 0.3)));
  vec4 tmpvar_9;
  tmpvar_9.w = 1.0;
  tmpvar_9.xyz = ((crisp_2 * 0.97) - 0.015);
  ret = tmpvar_9.xyz;
 }`,comp:`vec2 xlat_mutabledz;
vec3 xlat_mutableneu;
vec3 xlat_mutableret1;
vec2 xlat_mutableuv3;
 shader_body { 
  vec2 uv2_1;
  vec2 tmpvar_2;
  tmpvar_2.y = 0.0;
  tmpvar_2.x = texsize.z;
  vec2 tmpvar_3;
  tmpvar_3.x = 0.0;
  tmpvar_3.y = texsize.w;
  xlat_mutabledz.x = dot ((texture (sampler_main, (uv + tmpvar_2)).xyz - texture (sampler_main, (uv - tmpvar_2)).xyz), vec3(0.32, 0.49, 0.29));
  xlat_mutabledz.y = dot ((texture (sampler_main, (uv + tmpvar_3)).xyz - texture (sampler_main, (uv - tmpvar_3)).xyz), vec3(0.32, 0.49, 0.29));
  uv2_1 = (uv - 0.5);
  xlat_mutableuv3 = ((0.2 * uv2_1) + 0.5);
  float tmpvar_4;
  tmpvar_4 = (time / 2.0);
  xlat_mutableuv3 = ((0.2 * cos(
    ((42.0 * fract(xlat_mutableuv3)) + tmpvar_4)
  )) + (99.0 * xlat_mutabledz));
  float tmpvar_5;
  tmpvar_5 = clamp ((0.01 / sqrt(
    dot (xlat_mutableuv3, xlat_mutableuv3)
  )), 0.0, 1.0);
  xlat_mutableneu = ((0.1 * vec3(tmpvar_5)) + (0.9 * dot (vec3(tmpvar_5), vec3(0.32, 0.49, 0.29))));
  xlat_mutableret1 = max (vec3(0.0, 0.0, 0.0), (xlat_mutableneu * 1.252262));
  xlat_mutableuv3 = ((0.2 * uv2_1) + 0.5);
  xlat_mutableuv3 = ((0.2 * cos(
    ((42.0 * fract(xlat_mutableuv3)) + tmpvar_4)
  )) + (99.0 * xlat_mutabledz));
  float tmpvar_6;
  tmpvar_6 = clamp ((0.01 / sqrt(
    dot (xlat_mutableuv3, xlat_mutableuv3)
  )), 0.0, 1.0);
  xlat_mutableneu = ((0.1 * vec3(tmpvar_6)) + (0.9 * dot (vec3(tmpvar_6), vec3(0.32, 0.49, 0.29))));
  xlat_mutableret1 = max (xlat_mutableret1, (xlat_mutableneu * 1.252262));
  vec4 tmpvar_7;
  tmpvar_7.w = 1.0;
  tmpvar_7.xyz = (xlat_mutableret1 + clamp ((
    (16.0 * ((0.5 * texture (sampler_main, (uv + 
      (0.1 * xlat_mutabledz)
    )).xyz) + 0.01))
   * 
    (0.1 + xlat_mutableret1)
  ), 0.0, 1.0));
  ret = tmpvar_7.xyz;
 }`}},function(o,l){o.exports={baseVals:{rating:4,gammaadj:1.98,decay:.5,echo_zoom:1,echo_alpha:.5,echo_orient:3,wave_mode:4,additivewave:1,wave_thick:1,modwavealphabyvolume:1,wave_brighten:0,darken:1,wave_a:.001,wave_scale:.527,wave_smoothing:.45,modwavealphastart:0,modwavealphaend:1.32,warpanimspeed:1.459,warpscale:2.007,zoom:.9999,warp:.01,sx:.9999,wave_r:.8,wave_g:.49,ob_size:.015,ob_a:1,ib_size:.26,mv_x:64,mv_y:48,mv_l:1.85,mv_r:.5,mv_g:.5,mv_b:.5,mv_a:0,b2x:.3,b1ed:0},shapes:[{baseVals:{enabled:0}},{baseVals:{enabled:0}},{baseVals:{enabled:0}},{baseVals:{enabled:0}}],waves:[{baseVals:{enabled:1,samples:506,sep:116,spectrum:1,thick:1,scaling:1.07408,smoothing:0,a:.7},init_eqs_str:"a.n=0;a.m=0;",frame_eqs_str:"",point_eqs_str:"a.n=Math.floor((a.reg00+.5)*a.sample);a.m=30001+div(a.n,div(a.reg00,a.reg01));a.gmegabuf[Math.floor(a.m)]=a.value1+a.value2;a.x=a.gmegabuf[Math.floor(1E4+a.n)];a.y=a.gmegabuf[Math.floor(15E3+a.n)];a.a=a.gmegabuf[Math.floor(2E4+a.n)];a.b=Math.min(Math.max(a.gmegabuf[Math.floor(25E3+a.n)],0),1);a.r=1-a.b;a.g=.5;"},{baseVals:{enabled:1,samples:506,thick:1,scaling:.89152,smoothing:.82},init_eqs_str:"a.n=0;",frame_eqs_str:"",point_eqs_str:"a.n=Math.floor((a.reg00+.5)*a.sample)+a.reg00;a.x=a.gmegabuf[Math.floor(1E4+a.n)];a.y=a.gmegabuf[Math.floor(15E3+a.n)];a.a=a.gmegabuf[Math.floor(2E4+a.n)];a.b=Math.min(Math.max(a.gmegabuf[Math.floor(25E3+a.n)],0),1);a.r=1-a.b;a.g=.5;"},{baseVals:{enabled:1,samples:506,thick:1,scaling:.89152,smoothing:.82},init_eqs_str:"a.n=0;",frame_eqs_str:"",point_eqs_str:"a.n=Math.floor((a.reg00+.5)*a.sample)+2*a.reg00;a.x=a.gmegabuf[Math.floor(1E4+a.n)];a.y=a.gmegabuf[Math.floor(15E3+a.n)];a.a=a.gmegabuf[Math.floor(2E4+a.n)];a.b=Math.min(Math.max(a.gmegabuf[Math.floor(25E3+a.n)],0),1);a.r=1-a.b;a.g=.5;"},{baseVals:{enabled:1,samples:506,spectrum:1,thick:1},init_eqs_str:"a.n=0;",frame_eqs_str:"",point_eqs_str:"a.n=Math.floor((a.reg00-.5)*a.sample)+3*a.reg00;a.x=a.gmegabuf[Math.floor(1E4+a.n)];a.y=a.gmegabuf[Math.floor(15E3+a.n)];a.a=a.gmegabuf[Math.floor(2E4+a.n)];a.b=Math.min(Math.max(a.gmegabuf[Math.floor(25E3+a.n)],0),1);a.r=1-a.b;a.g=.5;"}],init_eqs_str:`a.xang=0;a.fov=0;a.hell=0;a.cbeat=0;a.index2=0;a.bindex=0;a.ran4=0;a.index=0;a.dec_v=0;a.yang=0;a.q29=0;a.q6=0;a.amp_=0;a.xlen=0;a.smooth=0;a.q1=0;a.dec_med=0;a.sum=0;a.q5=0;a.dec_f=0;a.trely=0;a.flen=0;a.reg01=0;a.my=0;a.oz=0;a.imag=0;a.is_beat=0;a.yind=0;a.oy0a=0;a.dec_slow=0;a.ran2=0;a.ind=0;a.z0=0;a.ylen=0;a.real=0;a.ran4_=0;a.ran3=0;a.q4=0;a.mz=0;a.oy0=0;a.amp=0;a.tc0=0;a.oy=0;a.avg=0;a.mx=0;a.vol=0;a.ran2_=0;a.peak=0;a.decc=0;a.q2=0;a.bd_bt=0;a.zang=0;a.q3=0;a.reg00=0;
a.trelz=0;a.q32=0;a.ran3_=0;a.q28=0;a.trelx=0;a.q30=0;a.ox=0;a.xind=0;for(var b=a.index=0;7E4>b;b++)a.megabuf[Math.floor(a.index)]=0,a.gmegabuf[Math.floor(a.index)]=0,a.index+=1;a.zang=1;a.yang=0;a.zang=2;`,frame_eqs_str:`a.xlen=45;a.ylen=45;a.flen=30;a.reg00=div(a.xlen*a.ylen,4);a.reg01=div(a.reg00,4);a.dec_med=1-div(.06*30,a.fps);a.dec_slow=1-div(.6,a.fps);a.dec_f=pow(.8,div(30,a.fps));a.q30=a.dec_slow;a.smooth=Math.max(1,pow(6,div(a.fps,30))-2);a.cbeat=a.bass+a.mid+a.treb;a.decc=.00001<Math.abs(a.vol>a.cbeat?1:0)?.8:a.dec_med;a.vol=a.vol*a.decc+(1-a.decc)*a.cbeat;a.avg=a.avg*a.dec_slow+a.cbeat*(1-a.dec_slow);a.is_beat=above(a.cbeat,1.5*a.avg)*above(a.time,a.tc0+.2);a.tc0=.00001<Math.abs(bor(a.is_beat,
a.bd_bt))?a.time:a.tc0;a.peak=.00001<Math.abs(a.is_beat)?a.cbeat:a.peak*a.dec_med;a.ind=0;a.sum=0;a.amp=.01;for(var b=0;b<a.reg01;b++)a.sum+=div(a.gmegabuf[Math.floor(a.ind+3E4)],a.reg01),a.amp+=pow(a.gmegabuf[Math.floor(a.ind+3E4)],2),a.ind+=1;a.ind=0;a.amp_=a.amp_*a.dec_med+600*div((1-a.dec_med)*sqrt(a.amp),a.reg01);for(b=0;b<a.reg01;b++)a.megabuf[Math.floor(a.ind+3E4)]=div(a.gmegabuf[Math.floor(a.ind+3E4)]-a.sum,a.amp_),a.ind+=1;for(b=a.index2=0;b<a.flen;b++){a.index=0;a.real=0;for(var c=a.imag=
0;c<a.flen;c++)a.real+=Math.cos(6.28*div(a.index,a.flen)*a.index2)*a.megabuf[Math.floor(div(a.index*a.reg01,8)+30002)],a.imag+=Math.sin(6.28*div(a.index,a.flen)*a.index2)*a.megabuf[Math.floor(div(a.index*a.reg01,8)+30002)],a.index+=1;a.megabuf[Math.floor(1E4+a.index2)]=a.megabuf[Math.floor(1E4+a.index2)]*a.dec_f+a.real;a.megabuf[Math.floor(15E3+a.index2)]=a.megabuf[Math.floor(15E3+a.index2)]*a.dec_f+a.imag;a.index2+=1}a.ind=1;for(b=0;b<div(a.flen,2);b++){a.cx=a.megabuf[Math.floor(1E4+a.ind)];a.cy=
a.megabuf[Math.floor(15E3+a.ind)];a.yind=-1;for(c=0;3>c;c++){a.xind=-1;for(var d=0;3>d;d++)a.ox=mod((a.cx+.5)*a.xlen+a.xind,a.xlen),a.oy=mod((a.cy+.5)*a.ylen+a.yind,a.ylen),a.amp=3*(a.cx*a.cx+a.cy*a.cy),a.megabuf[Math.floor(a.oy*a.ylen+a.ox)]-=div(div(60,a.fps)*sqrt(a.amp)*above(a.amp,.02),1+a.xind*a.xind+a.yind*a.yind),a.xind+=1;a.yind+=1}a.ind+=1}for(b=a.yind=0;b<a.ylen;b++){for(c=a.xind=0;c<a.xlen;c++)a.megabuf[Math.floor(a.yind*a.ylen+a.xind+5E3)]=a.dec_med*(div(a.gmegabuf[Math.floor(a.yind*a.ylen+
mod(a.xind+1,a.xlen))]+a.gmegabuf[Math.floor(a.yind*a.ylen+mod(a.xlen+a.xind-1,a.xlen))]+a.gmegabuf[Math.floor(mod(a.yind+1,a.ylen)*a.ylen+a.xind)]+a.gmegabuf[Math.floor(mod(a.yind+a.ylen-1,a.ylen)*a.ylen+a.xind)]+a.gmegabuf[Math.floor(a.yind*a.ylen+a.xind)]*a.smooth*4,2+2*a.smooth)-a.megabuf[Math.floor(a.yind*a.ylen+a.xind)]),a.xind+=1;a.yind+=1}a.bindex+=a.is_beat;.00001<Math.abs(a.is_beat&&.00001>Math.abs(mod(a.bindex,4)-0)?1:0)?a.ran2=div(randint(100)-30,60):0;.00001<Math.abs(a.is_beat&&.00001>
Math.abs(mod(a.bindex,4)-2)?1:0)?a.ran3=div(randint(100)-30,60):0;.00001<Math.abs(a.is_beat&&.00001>Math.abs(mod(a.bindex,6)-2)?1:0)?a.ran4=div(randint(100)-30,60):0;a.dec_v=Math.min(Math.max(0,1-div(8*a.vol,a.fps)),a.dec_slow);a.ran2_=a.ran2_*a.dec_v+(1-a.dec_v)*a.ran2;a.ran3_=a.ran3_*a.dec_v+(1-a.dec_v)*a.ran3;a.ran4_=a.ran4_*a.dec_v+(1-a.dec_v)*a.ran4;a.trelx+=div(div(a.ran2_,a.fps),7);a.trely+=div(div(a.ran3_,a.fps),2);a.trelz+=div(div(a.ran4_,a.fps),6);a.zang=6*Math.sin(a.trelz);a.xang=6*Math.sin(div(a.zang,
5)+a.trelx);a.yang=6*Math.sin(0*div(a.zang,3)+a.trely);a.q1=Math.cos(a.xang);a.q2=Math.sin(a.xang);a.q3=Math.cos(a.yang);a.q4=Math.sin(a.yang);a.q5=Math.cos(a.zang);a.q6=Math.sin(a.zang);a.fov=1;for(b=a.yind=0;b<a.ylen;b++){for(c=a.xind=0;c<a.xlen;c++)a.ind=a.yind*a.ylen+a.xind,a.megabuf[Math.floor(a.ind)]=a.gmegabuf[Math.floor(a.ind)],a.gmegabuf[Math.floor(a.ind)]=a.megabuf[Math.floor(a.ind+5E3)],a.oz=a.yind-div(a.ylen,2),a.ox=.00001<Math.abs(bnot(mod(a.yind,2)))?a.xind:a.xlen-a.xind-1,a.oy0a=div(a.oy0+
a.oy0a,2.5),a.oy=a.gmegabuf[Math.floor(a.yind*a.ylen+a.ox)],a.oy0=a.oy,a.ox-=div(a.xlen,2),a.mx=a.ox*a.q5-a.oy*a.q6,a.my=a.ox*a.q6+a.oy*a.q5,a.ox=a.mx,a.oy=a.my,a.mx=a.ox*a.q3+a.oz*a.q4,a.mz=-a.ox*a.q4+a.oz*a.q3,a.ox=a.mx,a.oz=a.mz,a.my=a.oy*a.q1-a.oz*a.q2,a.mz=a.oy*a.q2+a.oz*a.q1,a.z0=90+40*Math.sin(14*a.trelz),a.oy=a.my,a.oz=a.mz+a.z0,a.gmegabuf[Math.floor(1E4+a.ind)]=div(a.fov*a.ox,a.oz)+.5,a.gmegabuf[Math.floor(15E3+a.ind)]=div(a.fov*a.oy,a.oz)+.5,a.hell=Math.max(Math.min(.5+div(a.oy0,4),1),.1),
a.gmegabuf[Math.floor(2E4+a.ind)]=Math.max(Math.min(a.hell*(.5+.1*(a.oy0a-a.oy0)),1),.1),a.gmegabuf[Math.floor(25E3+a.ind)]=div(a.oy0,16)+.5,a.xind+=1;a.yind+=1}a.q29=div(50*a.fov,a.z0);a.q32=a.aspecty;a.q28=Math.min(div(a.vol,3)-.3,1);a.monitor=a.is_beat;`,pixel_eqs_str:"a.rot=0;a.zoom=1.1;a.warp=0;a.dy=.02;",warp:` shader_body { 
  vec4 tmpvar_1;
  tmpvar_1.w = 1.0;
  tmpvar_1.xyz = vec3(0.0, 0.0, 0.0);
  ret = tmpvar_1.xyz;
 }`,comp:`vec3 xlat_mutablecol;
 shader_body { 
  vec2 uv_1;
  uv_1 = uv;
  int iter_3;
  vec3 ret_4;
  ret_4 = texture (sampler_main, uv).xyz;
  iter_3 = int((clamp (q29, 0.0, 1.0) * 8.0));
  for (int n_2 = 1; n_2 < iter_3; n_2++) {
    vec2 tmpvar_5;
    tmpvar_5.y = 0.0;
    tmpvar_5.x = float(n_2);
    vec2 tmpvar_6;
    tmpvar_6.y = 0.0;
    tmpvar_6.x = float(n_2);
    ret_4 = max (max (ret_4, texture (sampler_main, (uv_1 - 
      (texsize.zw * tmpvar_5)
    )).xyz), texture (sampler_main, (uv_1 + (texsize.zw * tmpvar_6))).xyz);
  };
  float tmpvar_7;
  tmpvar_7 = clamp ((1.0 - (2.0 * 
    dot (ret_4, vec3(0.32, 0.49, 0.29))
  )), 0.0, 1.0);
  float tmpvar_8;
  float tmpvar_9;
  tmpvar_9 = (uv.x - 0.5);
  tmpvar_8 = (0.5 / ((
    (uv.y + ((tmpvar_9 * 1.4) * (q5 * q3)))
   - 0.4) + (0.3 * q4)));
  vec2 tmpvar_10;
  tmpvar_10.x = (tmpvar_8 * tmpvar_9);
  tmpvar_10.y = tmpvar_8;
  vec3 tmpvar_11;
  tmpvar_11.x = q2;
  tmpvar_11.y = q4;
  tmpvar_11.z = q6;
  xlat_mutablecol = (0.5 + (0.5 * tmpvar_11));
  float x_12;
  x_12 = ((uv.x - (
    dot (ret_4, vec3(0.32, 0.49, 0.29))
   * 5.0)) + 0.5);
  ret_4 = (ret_4 * (q28 + (
    ((6.0 * (0.05 / sqrt(
      (x_12 * x_12)
    ))) * (1.0 + xlat_mutablecol))
   / 2.0)));
  vec2 tmpvar_13;
  tmpvar_13.x = q1;
  tmpvar_13.y = (q3 + time);
  float tmpvar_14;
  tmpvar_14 = (((
    (texture (sampler_noise_lq, (tmpvar_10 + tmpvar_13)).x * tmpvar_7)
   * 
    float((tmpvar_8 > 0.0))
  ) * 0.2) * min (1.0, (1.0/(tmpvar_8))));
  ret_4 = (ret_4 + tmpvar_14);
  ret_4 = (ret_4 + ((
    (sin((12.0 * q2)) * tmpvar_7)
   * tmpvar_14) * dot (
    (12.0 * ((texture (sampler_blur1, (tmpvar_10 - vec2(-0.5, 0.3))).xyz * scale1) + bias1))
  , vec3(0.32, 0.49, 0.29))));
  ret_4 = (ret_4 + ((
    ((0.5 / abs(tmpvar_8)) * normalize(xlat_mutablecol))
   * 
    float((tmpvar_8 < 0.0))
  ) * tmpvar_7));
  vec4 tmpvar_15;
  tmpvar_15.w = 1.0;
  tmpvar_15.xyz = ret_4;
  ret = tmpvar_15.xyz;
 }`}},function(o,l){o.exports={baseVals:{rating:5,gammaadj:1.980001,decay:.5,echo_zoom:.999998,echo_alpha:.5,echo_orient:3,modwavealphabyvolume:1,darken:1,wave_a:.001,wave_scale:10.437056,wave_smoothing:.45,wave_mystery:.08,modwavealphastart:0,modwavealphaend:1.32,warpanimspeed:1.4595,warpscale:2.0067,zoom:.9999,warp:.01,sx:.9999,wave_r:0,wave_g:.99,ob_size:0,ob_r:1,ob_g:1,ob_b:1,ib_size:0,mv_x:64,mv_y:48,mv_l:1.85,mv_r:.4999,mv_g:.4999,mv_b:.4999,mv_a:0,b1ed:0},shapes:[{baseVals:{enabled:1,rad:.048958,tex_ang:1.00531,tex_zoom:1.531168,r:.5,g:1,b:.9,r2:.83,g2:.93,b2:.8,a2:1,border_b:0,border_a:0},init_eqs_str:"a.trel=0;a.q20=0;a.q28=0;a.q26=0;",frame_eqs_str:"a.trel=div(a.time,2)+a.q20;a.x=.5+Math.sin(2*a.trel);a.y=.5+Math.cos(1.3*a.trel+div(a.q28,3));a.a=div(a.q26,4)+.2;"},{baseVals:{enabled:0}},{baseVals:{enabled:1,x:.503,rad:.038857,tex_zoom:.609857,g:.1,a:.9,r2:1,b2:1,border_r:.5,border_g:.5,border_b:.5,border_a:0},init_eqs_str:"a.is_beat=0;a.t0=0;a.q21=0;",frame_eqs_str:"a.x=div(randint(10),10);a.y=div(randint(10),10);a.r=div(randint(4),3);a.g=div(randint(4),3);a.b=div(randint(4),3);a.is_beat=above(a.time,a.t0+.03);a.t0=a.is_beat*a.time+(1-a.is_beat)*a.t0;a.a=Math.min(div(a.q21,2),.9)*a.is_beat;a.rad=div(a.a*a.a,3);"},{baseVals:{enabled:0}}],waves:[{baseVals:{enabled:1,sep:120,additive:1,scaling:.891519,smoothing:.82,a:.6},init_eqs_str:"a.k1=0;a.k2=0;a.xi=0;a.yi=0;a.dx=0;a.dy=0;a.q22=0;a.t2=0;a.t1=1+.3*(.01*randint(101)-.01*randint(101));a.t2=1+.3*(.01*randint(101)-.01*randint(101));a.t3=1+.3*(.01*randint(101)-.01*randint(101));a.t4=1+.3*(.01*randint(101)-.01*randint(101));a.t5=1+.3*(.01*randint(101)-.01*randint(101));a.t6=1+.3*(.01*randint(101)-.01*randint(101));a.t7=1+.3*(.01*randint(101)-.01*randint(101));a.t8=1+.3*(.01*randint(101)-.01*randint(101));",frame_eqs_str:"a.t2+=a.bass_att;",point_eqs_str:"a.k1=mod(100*a.sample,8);a.k2=bnot(a.k1);a.xi=a.value1*a.k2+a.xi*(1-a.k2);a.yi=a.value2*(1-a.k2)+a.yi*a.k2;a.dx=.99*a.dx+a.xi;a.dy=.99*a.dy+a.yi;a.x=.5+div(a.xi,2);a.y=.5+div(a.yi,2);a.a=div(a.q22,8);a.a=Math.min(a.a,.2);"},{baseVals:{enabled:0}},{baseVals:{enabled:0}},{baseVals:{enabled:0}}],init_eqs_str:"a.index=0;a.q22=0;a.q21=0;a.fade=0;a.q1=0;a.dec_med=0;a.rott=0;a.is_beat=0;a.q23=0;a.k1=0;a.q24=0;a.dec_slow=0;a.q4=0;a.q26=0;a.p2=0;a.avg=0;a.beat=0;a.p1=0;a.peak=0;a.q2=0;a.q27=0;a.q3=0;a.t0=0;a.q32=0;a.q20=0;a.fade=.5;",frame_eqs_str:`a.dec_med=pow(.9,div(30,a.fps));a.dec_slow=pow(.99,div(30,a.fps));a.beat=Math.max(Math.max(a.bass,a.mid),a.treb);a.avg=a.avg*a.dec_slow+a.beat*(1-a.dec_slow);a.is_beat=above(a.beat,.5+a.avg+a.peak)*above(a.time,a.t0+.2);a.t0=a.is_beat*a.time+(1-a.is_beat)*a.t0;a.peak=a.is_beat*a.beat+(1-a.is_beat)*a.peak*a.dec_med;a.index=mod(a.index+a.is_beat,8);a.q20=a.avg;a.q21=a.beat;a.q22=a.peak;a.q23=a.index;a.q24=a.is_beat;a.q26=a.bass+a.mid+a.treb;a.k1=a.is_beat*equal(a.index,0);a.p1=
a.k1*(a.p1+1)+(1-a.k1)*a.p1;a.p2=a.dec_med*a.p2+(1-a.dec_med)*a.p1;a.rott=div(3.14159265358*a.p2,2);a.q27=a.index+1;a.q1=Math.cos(a.rott);a.q2=Math.sin(a.rott);a.q3=-a.q2;a.q4=a.q1;a.zoom=1;a.rot=-0*a.index;a.fade=a.fade*a.dec_med+pow(.996,div(30,a.fps))*(1-a.dec_med);a.q32=a.fade;`,pixel_eqs_str:"",pixel_eqs:"",warp:` shader_body { 
  vec2 zz_1;
  mat2 tmpvar_2;
  tmpvar_2[uint(0)] = _qa.xy;
  tmpvar_2[1u] = _qa.zw;
  zz_1 = (((
    (uv - vec2(0.5, 0.5))
   * texsize.xy) * (0.015 * q27)) * tmpvar_2);
  vec4 tmpvar_3;
  tmpvar_3.w = 1.0;
  tmpvar_3.xyz = (((q32 * texture (sampler_main, 
    (uv + ((clamp (
      (sin(zz_1) / cos(zz_1))
    , vec2(-20.0, -20.0), vec2(20.0, 20.0)) * texsize.zw) * 8.0))
  ).xyz) + (
    (0.03 * texture (sampler_noise_lq, ((uv * 0.3) + (0.01 * rand_frame).xy)))
  .xyz * 
    (1.0 - ((texture (sampler_blur1, uv).xyz * scale1) + bias1))
  )) - 0.02);
  ret = tmpvar_3.xyz;
 }`,comp:` shader_body { 
  vec4 tmpvar_1;
  tmpvar_1 = texture (sampler_main, uv);
  vec4 tmpvar_2;
  tmpvar_2.w = 1.0;
  tmpvar_2.xyz = ((tmpvar_1.xyz + clamp (
    (3.0 * (((texture (sampler_blur1, 
      (uv - (0.01 * tmpvar_1.xyz).xy)
    ).xyz * scale1) + bias1) - vec3(0.1, 0.1, 0.2)))
  , 0.0, 1.0)) * 1.3);
  ret = tmpvar_2.xyz;
 }`}},function(o,l){o.exports={baseVals:{rating:4,gammaadj:1.98,decay:.5,echo_zoom:.952,echo_alpha:.5,echo_orient:3,wave_mode:6,additivewave:1,wave_thick:1,modwavealphabyvolume:1,wave_brighten:0,darken:1,wave_a:.001,wave_scale:2.103,wave_smoothing:.54,wave_mystery:.38,modwavealphastart:.81,modwavealphaend:1.4,warpanimspeed:1.459,warpscale:2.007,zoom:.9999,warp:.01,sx:.9999,wave_r:0,wave_g:0,wave_b:0,ob_size:.015,ob_b:1,ib_size:.26,mv_x:64,mv_y:48,mv_l:1.85,mv_r:.5,mv_g:.5,mv_b:.5,mv_a:0,b1ed:0},shapes:[{baseVals:{enabled:1,sides:16,thickoutline:1,textured:1,num_inst:3,x:.73,rad:.29466,tex_zoom:1.87511,r:.7,g:.7,b:1,g2:0,border_b:0,border_a:0},init_eqs_str:"a.trig=0;a.q25=0;a.x0=0;a.y0=0;",frame_eqs_str:"a.trig=a.q25;a.a=.8*a.trig;a.a2=0;a.x0=a.x0*bnot(a.trig)+div(a.trig*randint(100),100);a.y0=a.y0*bnot(a.trig)+div(a.trig*randint(100),100);a.tex_ang=randint(20);a.rad=.1+div(randint(10),8);a.x=a.x0;a.y=a.y0;a.r=.7+.3*Math.sin(div(a.time,12));a.b=.7+.3*Math.sin(div(a.time,15));a.g=.7+.3*Math.sin(div(a.time,8));a.r2=a.r;a.b2=a.b;a.g2=a.g;"},{baseVals:{enabled:1,sides:36,thickoutline:1,textured:1,num_inst:4,x:.3,rad:.05429,ang:1.25664,tex_ang:.37699,tex_zoom:1.02841,g:.7,b:.5,r2:1,g2:0,border_g:.59,border_b:0,border_a:0},init_eqs_str:"a.q31=0;a.q32=0;a.q30=0;",frame_eqs_str:"a.x=a.q31;a.y=a.q32;a.rad=.06;a.tex_ang=a.time;a.a=a.q30;"},{baseVals:{enabled:0}},{baseVals:{enabled:0}}],waves:[{baseVals:{enabled:0}},{baseVals:{enabled:0}},{baseVals:{enabled:0}},{baseVals:{enabled:0}}],init_eqs_str:`a.q25=0;a.index=0;a.q12=0;a.q22=0;a.q21=0;a.q15=0;a.q29=0;a.q6=0;a.dec_med=0;a.q5=0;a.mindev=0;a.trel=0;a.t0a=0;a.mov1=0;a.vis=0;a.is_beat=0;a.q31=0;a.q23=0;a.q24=0;a.dec_slow=0;a.q11=0;a.hpeak=0;a.q10=0;a.sdev=0;a.med=0;a.spb=0;a.dir=0;a.spb_=0;a.q16=0;a.rota=0;a.q19=0;a.vol=0;a.peak=0;a.trig1=0;a.wamp=0;a.speed=0;a.t0=0;a.vol_=0;a.q32=0;a.q7=0;a.wamp_=0;a.q30=0;a.q20=0;a.q8=0;a.t0a=a.time;a.t0=a.time+.5;a.spb_=.5;a.volb=.5;a.volx=.5;a.vol_=1;a.index=0;a.mov1=0;a.sdev=.1;a.wamp_=
.1;`,frame_eqs_str:`a.dec_med=pow(.8,div(30,a.fps));a.dec_slow=pow(.95,div(30,a.fps));a.vol=div(a.bass+a.med+a.treb,1.5);a.vol_=a.vol_*a.dec_slow+(1-a.dec_slow)*a.vol;a.is_beat=above(a.vol,a.vol_+2*a.peak)*above(a.time,a.t0+.45*a.spb_);a.t0a=.00001<Math.abs(a.is_beat)?a.t0:a.t0a;a.t0=.00001<Math.abs(a.is_beat)?a.time:a.t0;a.peak=.00001<Math.abs(a.is_beat)?a.vol:a.peak*a.dec_med;a.index=mod(a.index+a.is_beat,128);a.spb=Math.min(a.t0-a.t0a+.01,2);a.spb_=.00001<Math.abs(a.is_beat)?.9*a.spb_+.1*a.spb:
a.spb_;a.q20=a.vol_;a.q21=above(a.vol,2.7*a.vol_);a.q22=Math.max(0,a.peak-0)+.01;a.hpeak=a.hpeak*a.dec_med+(1-a.dec_med)*a.q21;a.q23=a.hpeak*(1+randint(8));a.q24=a.is_beat;a.q25=div(a.q22*(1+randint(8)),8);a.mindev=Math.min(Math.min(Math.abs(a.spb-a.spb_),Math.abs(2*a.spb-a.spb_)),Math.abs(a.spb-2*a.spb_));a.sdev=.00001<Math.abs(a.is_beat)?.8*a.sdev+.2*pow(a.mindev+.02,2):a.sdev;a.speed=div(div(1,a.fps),a.spb_);a.trel+=a.speed;a.q10=a.trel;a.wamp=Math.min(div(.001,a.sdev),.15);a.wamp_=a.wamp_*a.dec_slow+
(1-a.dec_slow)*a.wamp;a.q11=Math.sin(div(a.trel,2))*a.wamp_;a.q12=div(a.wamp_,2);a.rota=2*a.wamp_*Math.sin(div(a.trel,3));a.q5=Math.cos(a.rota);a.q6=Math.sin(a.rota);a.q7=-a.q6;a.q8=a.q5;a.q15=.05*-Math.sin(.5*a.trel);a.q16=div(Math.cos(a.trel)*a.wamp_,2);a.q19=.1*Math.sin(div(a.trel,12));a.trig1=bnot(a.vis)*bnot(randint(100*a.fps));a.vis=.00001<Math.abs(a.trig1)?1:a.vis*below(a.mov1,1);a.q30=a.vis;a.mov1=.00001<Math.abs(a.vis)?a.mov1+div(2*a.speed,a.fps):-1;a.dir=.00001<Math.abs(a.trig1)?randint(100):
a.dir;a.q31=.5+.5*Math.cos(a.dir)*a.mov1;a.q32=.5+.5*Math.sin(a.dir)*a.mov1;a.q29=2+Math.sin(div(a.time,17));a.monitor=a.wamp;`,pixel_eqs_str:"a.zoom=1+.02*a.rad*a.q20;a.dy=-0;a.warp=.1;a.dx=0;",warp:`mat2 ofs;
vec2 xlat_mutableuv2;
float xlat_mutablezv;
 shader_body { 
  mat2 tmpvar_1;
  tmpvar_1[uint(0)].x = texsize.z;
  tmpvar_1[uint(0)].y = 0.0;
  tmpvar_1[1u].x = 0.0;
  tmpvar_1[1u].y = texsize.w;
  ofs = (tmpvar_1 * 4.0);
  vec2 tmpvar_2;
  tmpvar_2.x = ((uv.x - 0.5) + q19);
  tmpvar_2.y = (uv.y - 0.5);
  vec2 v_3;
  v_3.x = ofs[0].x;
  v_3.y = ofs[1].x;
  vec2 v_4;
  v_4.x = ofs[0].x;
  v_4.y = ofs[1].x;
  vec2 v_5;
  v_5.x = ofs[0].y;
  v_5.y = ofs[1].y;
  vec2 v_6;
  v_6.x = ofs[0].y;
  v_6.y = ofs[1].y;
  vec2 tmpvar_7;
  tmpvar_7.x = (texture (sampler_main, (uv + v_3)) - texture (sampler_main, (uv - v_4))).z;
  tmpvar_7.y = (texture (sampler_main, (uv + v_5)) - texture (sampler_main, (uv - v_6))).z;
  xlat_mutablezv = (time * 0.08);
  vec2 tmpvar_8;
  tmpvar_8.x = (0.02 * time);
  tmpvar_8.y = (-0.05 * time);
  xlat_mutableuv2 = ((3.0 * tmpvar_2) + tmpvar_8);
  vec3 tmpvar_9;
  tmpvar_9.xy = xlat_mutableuv2;
  tmpvar_9.z = xlat_mutablezv;
  vec3 tmpvar_10;
  tmpvar_10.xy = (xlat_mutableuv2 * vec2(2.0, 2.0));
  tmpvar_10.z = (xlat_mutablezv * 2.0);
  vec3 tmpvar_11;
  tmpvar_11.xy = (xlat_mutableuv2 * vec2(4.0, 4.0));
  tmpvar_11.z = (xlat_mutablezv * 3.0);
  vec3 tmpvar_12;
  tmpvar_12.xy = (xlat_mutableuv2 * vec2(8.0, 8.0));
  tmpvar_12.z = (xlat_mutablezv * 7.0);
  xlat_mutableuv2 = (tmpvar_2 + ((
    (((texture (sampler_noisevol_hq, tmpvar_9).z + (texture (sampler_noisevol_hq, tmpvar_10).z / 2.0)) + (texture (sampler_noisevol_hq, tmpvar_11).z / 4.0)) + (texture (sampler_noisevol_hq, tmpvar_12).z / 8.0))
   - 1.0) * 0.1));
  vec4 tmpvar_13;
  tmpvar_13.w = 1.0;
  tmpvar_13.xyz = (((
    (((0.2 + (
      (((1.0 + bass_att) * 0.01) / sqrt(dot (xlat_mutableuv2, xlat_mutableuv2)))
     * 
      (1.0 + normalize(slow_roam_cos))
    .xyz)) + ((rand_preset.z - 0.5) * xlat_mutableuv2.y)) * 0.1)
   / 2.0) + (texture (sampler_main, 
    (uv - (0.02 * tmpvar_7))
  ).xyz * 0.9)) - 0.01);
  ret = tmpvar_13.xyz;
 }`,comp:`float xlat_mutablerain;
vec3 xlat_mutableret1;
vec2 xlat_mutablers;
vec2 xlat_mutablers0;
vec2 xlat_mutableuv1;
float xlat_mutablewater;
float xlat_mutablez;
 shader_body { 
  vec2 uv_1;
  mat2 tmpvar_2;
  tmpvar_2[uint(0)] = _qb.xy;
  tmpvar_2[1u] = _qb.zw;
  vec2 tmpvar_3;
  tmpvar_3.x = q15;
  tmpvar_3.y = q16;
  uv_1 = (((
    (((uv - 0.5) * tmpvar_2) * 0.7)
   * aspect.xy) + 0.5) + tmpvar_3);
  vec2 tmpvar_4;
  tmpvar_4.x = 0.5;
  tmpvar_4.y = ((q11 + 0.6) + (q12 * (
    sin(((uv_1.x * 6.0) + q10))
   * 
    cos(((uv_1.y * 8.0) + (time * 0.6)))
  )));
  vec2 tmpvar_5;
  tmpvar_5.x = (uv_1.x * 4.0);
  tmpvar_5.y = uv_1.y;
  vec2 tmpvar_6;
  tmpvar_6.x = (uv_1.x * 4.0);
  tmpvar_6.y = uv_1.y;
  xlat_mutablerain = (texture (sampler_noise_lq, ((tmpvar_5 * 0.2) - time)).x + texture (sampler_noise_lq, ((tmpvar_6 * 0.5) - time)).x);
  float tmpvar_7;
  tmpvar_7 = (time / 4.0);
  xlat_mutablerain = (xlat_mutablerain * clamp ((
    (q20 / 2.0)
   - 
    abs(sin(((uv.x / 4.0) - tmpvar_7)))
  ), 0.0, 1.0));
  xlat_mutableuv1 = ((uv_1 - tmpvar_4) + (xlat_mutablerain * 0.01));
  vec3 tmpvar_8;
  tmpvar_8.x = xlat_mutableuv1.y;
  tmpvar_8.y = (xlat_mutableuv1.x * 2.0);
  tmpvar_8.z = (time * 0.2);
  xlat_mutableuv1 = (xlat_mutableuv1 + ((texture (sampler_noisevol_hq, tmpvar_8) * 
    (0.5 - abs(xlat_mutableuv1.y))
  ).x * 0.05));
  float tmpvar_9;
  tmpvar_9 = clamp ((128.0 * xlat_mutableuv1.y), 0.0, 1.0);
  xlat_mutablez = (0.4 / xlat_mutableuv1.y);
  xlat_mutablers0.x = (xlat_mutableuv1.x * xlat_mutablez);
  xlat_mutablers0.y = xlat_mutablez;
  vec2 tmpvar_10;
  tmpvar_10.x = (xlat_mutablers0.x + tmpvar_7);
  tmpvar_10.y = (xlat_mutablez + (time * 4.0));
  xlat_mutablers = (tmpvar_10 * tmpvar_9);
  xlat_mutablewater = (texture (sampler_noise_hq, xlat_mutablers) + texture (sampler_noise_hq, ((xlat_mutablers / 4.0) - (time / 8.0)))).x;
  xlat_mutablewater = (xlat_mutablewater - 1.0);
  vec2 tmpvar_11;
  tmpvar_11.x = (xlat_mutableuv1.x + 0.5);
  tmpvar_11.y = abs((0.5 - xlat_mutableuv1.y));
  xlat_mutableret1 = (((texture (sampler_main, uv_1).xyz * 
    (1.0 - tmpvar_9)
  ) + (
    ((texture (sampler_main, (tmpvar_11 - (0.2 * xlat_mutablewater))).xyz * tmpvar_9) * pow ((1.0/(xlat_mutablez)), 0.2))
   * 
    (2.0 - rand_preset.y)
  )) + ((
    (((0.25 + rand_preset.y) * (1.0 + (rand_preset.x * xlat_mutablewater))) * tmpvar_9)
   / xlat_mutablez) * vec3(0.0, 0.1, 0.1)));
  xlat_mutableret1 = (xlat_mutableret1 + (0.06 * xlat_mutablerain));
  vec4 tmpvar_12;
  tmpvar_12.w = 1.0;
  tmpvar_12.xyz = (1.0 - exp((
    (-(pow (xlat_mutableret1, vec3(1.5, 1.5, 1.5))) * 8.0)
   * 
    (1.0 + (q23 * 4.0))
  )));
  ret = tmpvar_12.xyz;
 }`}},function(o,l){o.exports={baseVals:{rating:4,gammaadj:1.98,decay:.5,echo_zoom:.952,echo_alpha:.5,echo_orient:3,wave_mode:4,additivewave:1,wave_thick:1,modwavealphabyvolume:1,wave_brighten:0,darken:1,wave_a:.001,wave_scale:.527,wave_smoothing:.45,modwavealphastart:0,modwavealphaend:1.32,warpanimspeed:1.459,warpscale:2.007,zoom:.9999,warp:.01,sx:.9999,wave_r:.8,wave_g:.49,ob_size:.015,ob_b:1,ib_size:.26,mv_x:64,mv_y:48,mv_l:1.85,mv_r:.5,mv_g:.5,mv_b:.5,mv_a:0,b1ed:0},shapes:[{baseVals:{enabled:0}},{baseVals:{enabled:1,sides:12,additive:1,num_inst:571,x:.26,y:.2,rad:.39317,tex_zoom:.9355,g2:0,a2:.2,border_g:0,border_b:0,border_a:0},init_eqs_str:"a.px=0;a.fov=0;a.q12=0;a.copy=0;a.q18=0;a.tht=0;a.q15=0;a.flim=0;a.q1=0;a.q5=0;a.py=0;a.mov1=0;a.vis=0;a.oz=0;a.k1=0;a.q11=0;a.z0=0;a.q10=0;a.copies=0;a.v0=0;a.q4=0;a.burst=0;a.oy=0;a.rota=0;a.q19=0;a.q17=0;a.spur=0;a.q2=0;a.q14=0;a.rotmode=0;a.q3=0;a.t0=0;a.phi=0;a.ox=0;",frame_eqs_str:`a.mov1=a.q1;a.rotmode=a.q3;a.burst=a.q10;a.copies=a.q14;a.copy=div(mod(a.instance,a.copies),a.copies);a.k1=div(Math.floor(div(a.instance,a.copies))*a.copies,a.num_inst);a.k1=div(Math.floor(a.k1*a.burst),a.burst)+div(a.k1,a.burst);a.mov1=a.mov1+a.k1-a.copy*a.q2;a.mov1-=Math.floor(a.mov1);a.rotmode-=a.copy*a.q4;a.rota=a.mov1*a.rotmode*a.q5*2;a.mov1=a.mov1*(1-a.rotmode)+a.rotmode*(.5+.025*a.k1);a.mov1=pow(a.mov1,.9);a.tht=Math.sin(a.k1*a.k1*123.2)*(.2+0*a.rotmode);a.phi=1613.3*
a.k1+a.rota;a.v0=(1+.3*Math.cos(13234.7*a.k1))*a.q5;a.z0=div(a.q18,a.q5);a.t0=.4;a.spur=(a.mov1-a.t0)*above(a.mov1-a.t0,0)*a.q15;a.py=a.spur*Math.sin(6.28*a.copy);a.px=a.spur*Math.cos(6.28*a.copy);a.fov=2*a.z0;a.ox=(a.mov1-a.q19)*a.v0*Math.sin(a.tht)*Math.cos(a.phi);a.oy=a.mov1*a.v0*(1-a.mov1)*Math.cos(2*a.tht)-.25;a.oz=a.mov1*a.v0*Math.sin(a.tht)*Math.sin(a.phi);a.ox=a.ox+(a.k1-.5)*a.q17+a.px;a.oy-=a.py;a.oz+=3*a.py;a.rad=div(.025*a.z0,a.oz+a.z0)*(1-.5*a.mov1);a.x=.5+div(a.fov*a.ox,a.oz+a.z0);a.y=
.5+div(a.fov*a.oy,a.oz+a.z0);a.vis=above(a.mov1,a.q11)*below(a.mov1,a.q12)*above(a.oz,-a.z0);a.a=div(.7*a.vis,sqrt(a.copies))*(1+above(a.spur,0));a.a2=0;a.g=a.flim;`},{baseVals:{enabled:1,sides:13,additive:1,num_inst:212,x:.65,y:.38,rad:1.26467,tex_zoom:.73678,g:1,a:.3,r2:1,g2:0,border_r:.5,border_g:.5,border_b:0,border_a:0},init_eqs_str:"a.mov2=0;a.q25=0;a.copy=0;a.tht=0;a.q29=0;a.trel=0;a.mov1=0;a.oz=0;a.k1=0;a.z0=0;a.copies=0;a.k2=0;a.oy=0;a.stray=0;a.q27=0;a.size0=0;a.phase=0;a.t0=0;a.phi=0;a.ox=0;",frame_eqs_str:`a.trel=a.q25;a.copies=1;a.copy=div(mod(a.instance,a.copies),a.copies);a.k1=div(Math.floor(div(a.instance,a.copies))*a.copies,a.num_inst);a.k2=a.k1+.5;a.trel=a.trel;a.t0=.5;a.phase=above(a.trel,a.t0);a.mov1=bnot(a.phase)*(a.t0-a.trel+.01*a.k1);a.mov2=a.phase*(a.trel-a.t0);a.stray=1.2-a.phase;a.tht=3.14*Math.sin(1234.2*a.k1+a.time*bnot(a.phase))*a.stray;a.phi=3245.1*a.k1;a.size0=.02;a.ox=a.mov1*a.q27+Math.sin(a.tht)*Math.cos(a.phi)*(a.size0+a.mov2*(2+a.k1));a.oy=12*a.mov1+div(Math.cos(a.tht)*
(a.size0+4*a.mov2*a.k2)*(1-a.mov2*a.k2),2);a.oz=8*a.mov1+Math.sin(a.tht)*Math.sin(a.phi)*(a.size0+2*a.mov2*(2+a.k1));a.z0=1;a.rad=div(div(.03,a.oz+a.z0),1+div(a.trel*randint(100),50));a.x=.5+div(a.ox,a.oz+a.z0);a.y=a.q29+.2+div(a.oy,a.oz+a.z0);a.a=.1*bnot(a.phase)+a.phase*Math.max(0,1-0*a.mov2)*above(a.oz+a.z0,0)*.8;`},{baseVals:{enabled:0}}],waves:[{baseVals:{enabled:0}},{baseVals:{enabled:0}},{baseVals:{enabled:0}},{baseVals:{enabled:0}}],init_eqs_str:`a.stop=0;a.q25=0;a.index=0;a.q12=0;a.q18=0;a.q22=0;a.q21=0;a.q13=0;a.q15=0;a.q29=0;a.q6=0;a.q1=0;a.dec_med=0;a.q5=0;a.vshift=0;a.lo=0;a.xtime=0;a.t0a=0;a.mov1=0;a.is_beat=0;a.q31=0;a.q23=0;a.q24=0;a.dec_slow=0;a.q11=0;a.hpeak=0;a.q10=0;a.copies=0;a.q4=0;a.med=0;a.hi=0;a.vs0=0;a.bursts=0;a.spb_=0;a.volb=0;a.q16=0;a.q26=0;a.q19=0;a.q17=0;a.vol=0;a.peak=0;a.spur=0;a.q2=0;a.q27=0;a.q14=0;a.rotmode=0;a.wind=0;a.tmp=0;a.xbase=0;a.speed=0;a.q3=0;a.t0=0;a.vol_=0;a.q32=0;a.spread=0;
a.q28=0;a.q30=0;a.q20=0;a.volx=0;a.t0a=a.time;a.t0=a.time+.5;a.spb_=.5;a.volb=.5;a.volx=.5;a.vol_=1;a.index=0;a.mov1=0;`,frame_eqs_str:`a.dec_med=pow(.85,div(30,a.fps));a.dec_slow=pow(.95,div(30,a.fps));a.vol=div(a.bass+a.med+a.treb,1.5);a.vol_=a.vol_*a.dec_slow+(1-a.dec_slow)*a.vol;a.is_beat=above(a.vol,.1+a.vol_+2*a.peak)*above(a.time,a.t0+.45*a.spb_);a.t0a=.00001<Math.abs(a.is_beat)?a.t0:a.t0a;a.t0=.00001<Math.abs(a.is_beat)?a.time:a.t0;a.peak=.00001<Math.abs(a.is_beat)?a.vol:a.peak*a.dec_med;a.index=mod(a.index+a.is_beat,128);a.spb_=.00001<Math.abs(a.is_beat)?.9*a.spb_+.1*Math.min(a.t0-a.t0a+.01,2):a.spb_;
a.q20=a.vol_;a.q21=above(a.vol,2.7*a.vol_);a.q22=Math.max(0,a.peak-0)+.01;a.hpeak=a.hpeak*a.dec_med+(1-a.dec_med)*a.q21;a.q23=a.hpeak*(1+randint(8));a.q24=a.is_beat;a.volb=bnot(a.q24)*a.volb+a.q24*a.vol_;a.volx+=div(.2,a.fps)*Math.max(Math.min(a.volb-a.volx,1),-1)*bnot(a.rotmode);a.rotmode=Math.max(Math.min(4*Math.sin(div(a.mov1,2.4)-1.5)-3,1),0);a.stop=(.00001<Math.abs(bnot(a.stop))?bnot(mod(a.index,24)):below(a.lo,1))*bnot(a.rotmode);a.spread=.00001<Math.abs(below(a.lo,1))?a.spread:div(randint(2)*
randint(12),20);a.copies=.00001<Math.abs(below(a.lo,1))?a.copies:3+randint(2)*randint(8);a.spur=.00001<Math.abs(below(a.lo,1))?a.spur:.1*above(a.copies,5);a.bursts=.00001<Math.abs(below(a.lo,1))?a.bursts:1+randint(2)*randint(6);a.xbase=.00001<Math.abs(below(a.lo,1))?a.xbase:randint(2)*(div(randint(10),10)-.5);a.vs0=.00001<Math.abs(a.is_beat*bnot(mod(a.index,77)))?div(randint(5),4)-.7:a.vs0;a.vshift+=div(3,a.fps)*Math.max(Math.min(a.vs0-a.vshift,.04),-.04);a.speed=div(div(.15,a.fps),a.spb_);a.tmp=
a.mov1;a.mov1+=a.speed;a.q2=a.mov1-a.tmp;a.q1=a.mov1;a.tmp=a.rotmode;a.q3=a.rotmode;a.q4=a.rotmode-a.tmp;a.tmp=a.volx;a.q5=a.volx;a.q6=a.q5-a.tmp;a.q10=a.bursts;a.lo=.00001<Math.abs(a.stop)?a.lo+a.speed:0;a.hi=.00001<Math.abs(above(a.lo,1))?0:a.hi+a.speed;a.q11=a.lo;a.q12=a.hi;a.q13=0*sqrt(a.q22);a.q14=a.copies;a.q15=a.spur*(1-a.rotmode);a.q16=0;a.q17=a.spread*(1-a.rotmode);a.q18=div(1,Math.min(Math.max(10*Math.sin(div(a.mov1,2)),1),4));a.q19=a.xbase;a.xtime=.00001<Math.abs(a.stop*a.q21*above(a.xtime,
2))?0:a.xtime+div(.2,a.fps);a.q25=a.xtime;a.q26=.00001<Math.abs(below(a.xtime,.55))?pow(32,512*-sqr(a.xtime-.55)):pow(2,3*-sqr(a.xtime-.55));a.q27=4*Math.sin(div(a.time,29));a.wind+=div(.5,a.fps)*(a.volx-1.5);a.q28=a.wind;a.q29=a.vshift;a.q30=Math.max(Math.sin(div(a.mov1,2.2))*Math.sin(div(a.time,7)),0)+a.q26;a.q31=2*a.q5-2+Math.sin(div(a.time,17));a.q32=3+2*Math.sin(div(a.time,27));a.monitor=a.vshift;`,pixel_eqs_str:"a.zoom=1;a.dy=-0;a.warp=0;",warp:`mat2 ofs;
float xlat_mutablegreen;
float xlat_mutablek1;
float xlat_mutablered;
vec2 xlat_mutableuv2;
float xlat_mutablewave;
float xlat_mutablezv;
 shader_body { 
  mat2 tmpvar_1;
  tmpvar_1[uint(0)].x = texsize.z;
  tmpvar_1[uint(0)].y = 0.0;
  tmpvar_1[1u].x = 0.0;
  tmpvar_1[1u].y = texsize.w;
  ofs = (tmpvar_1 * 4.0);
  float delta_2;
  float ky_3;
  vec2 tmpvar_4;
  tmpvar_4.x = (uv.x - 0.5);
  tmpvar_4.y = ((uv.y - 0.5) + q29);
  vec2 v_5;
  v_5.x = ofs[0].x;
  v_5.y = ofs[1].x;
  vec2 v_6;
  v_6.x = ofs[0].x;
  v_6.y = ofs[1].x;
  vec2 v_7;
  v_7.x = ofs[0].y;
  v_7.y = ofs[1].y;
  vec2 v_8;
  v_8.x = ofs[0].y;
  v_8.y = ofs[1].y;
  vec2 tmpvar_9;
  tmpvar_9.x = (texture (sampler_main, (uv + v_5)) - texture (sampler_main, (uv - v_6))).x;
  tmpvar_9.y = (texture (sampler_main, (uv + v_7)) - texture (sampler_main, (uv - v_8))).x;
  xlat_mutablered = (0.5 * texture (sampler_main, (uv - (0.004 * tmpvar_9))).x);
  xlat_mutablered = (xlat_mutablered + (0.5 * texture (sampler_main, uv).x));
  vec2 tmpvar_10;
  tmpvar_10.x = tmpvar_4.x;
  tmpvar_10.y = (0.0078125 * (float(
    int((tmpvar_4.y * 128.0))
  ) + abs(
    (fract((tmpvar_4.y * 128.0)) - 0.5)
  )));
  vec2 tmpvar_11;
  tmpvar_11 = (tmpvar_10 * 4.0);
  ky_3 = clamp ((-0.5 - tmpvar_11.y), 0.0, 1.0);
  xlat_mutablek1 = (abs((
    fract((tmpvar_11.x * 2.0))
   - 0.5)) * 8.0);
  xlat_mutablek1 = (xlat_mutablek1 - sign(xlat_mutablek1));
  delta_2 = (0.1 + (rand_preset * 0.05)).x;
  xlat_mutablek1 = (xlat_mutablek1 - ((
    (4.0 * sign(xlat_mutablek1))
   * ky_3) * ky_3));
  ky_3 = clamp ((ky_3 - delta_2), 0.0, 1.0);
  xlat_mutablek1 = (xlat_mutablek1 - ((
    (8.0 * sign(xlat_mutablek1))
   * ky_3) * ky_3));
  ky_3 = clamp ((ky_3 - delta_2), 0.0, 1.0);
  xlat_mutablek1 = (xlat_mutablek1 - ((
    (12.0 * sign(xlat_mutablek1))
   * ky_3) * ky_3));
  ky_3 = clamp ((ky_3 - delta_2), 0.0, 1.0);
  xlat_mutablek1 = (xlat_mutablek1 - ((
    (16.0 * sign(xlat_mutablek1))
   * ky_3) * ky_3));
  ky_3 = clamp ((ky_3 - delta_2), 0.0, 1.0);
  float tmpvar_12;
  tmpvar_12 = clamp (xlat_mutablek1, -1.6, 1.6);
  xlat_mutablek1 = tmpvar_12;
  xlat_mutablegreen = (cos((tmpvar_12 * 2.0)) - 0.1);
  xlat_mutablewave = ((sin(
    ((q1 * 8.0) - (uv.x * 6.0))
  ) / 2.0) * q3);
  xlat_mutablewave = ((xlat_mutablewave * float(
    (xlat_mutablewave >= 0.0)
  )) + (q30 * 0.02));
  xlat_mutablered = (xlat_mutablered + ((
    (xlat_mutablewave / abs(sin((
      (1.0/(tmpvar_12))
     + 
      (q1 / 8.0)
    ))))
   * xlat_mutablegreen) * ky_3));
  xlat_mutablezv = ((time * 0.08) + (0.2 * sin(
    ((uv * 16.0) + time)
  ))).x;
  vec2 tmpvar_13;
  tmpvar_13.x = q28;
  tmpvar_13.y = (0.2 * time);
  xlat_mutableuv2 = ((tmpvar_4 * 2.0) + tmpvar_13);
  vec3 tmpvar_14;
  tmpvar_14.xy = xlat_mutableuv2;
  tmpvar_14.z = xlat_mutablezv;
  vec3 tmpvar_15;
  tmpvar_15.xy = (xlat_mutableuv2 * vec2(2.0, 2.0));
  tmpvar_15.z = (xlat_mutablezv * 2.0);
  vec3 tmpvar_16;
  tmpvar_16.xy = (xlat_mutableuv2 * vec2(4.0, 4.0));
  tmpvar_16.z = (xlat_mutablezv * 3.0);
  vec3 tmpvar_17;
  tmpvar_17.xy = (xlat_mutableuv2 * vec2(8.0, 8.0));
  tmpvar_17.z = (xlat_mutablezv * 7.0);
  xlat_mutableuv2 = (tmpvar_4 + ((
    ((texture (sampler_noisevol_hq, tmpvar_14).z + (texture (sampler_noisevol_hq, tmpvar_15).z / 2.0)) + (texture (sampler_noisevol_hq, tmpvar_16).z / 4.0))
   + 
    (texture (sampler_noisevol_hq, tmpvar_17).z / 8.0)
  ) * 0.1));
  vec3 tmpvar_18;
  tmpvar_18.x = xlat_mutablered;
  tmpvar_18.y = xlat_mutablegreen;
  tmpvar_18.z = ((1.0 + xlat_mutableuv2.y) * sqrt(dot (xlat_mutableuv2, xlat_mutableuv2)));
  vec4 tmpvar_19;
  tmpvar_19.w = 1.0;
  tmpvar_19.xyz = ((tmpvar_18 * 0.8) - 0.005);
  ret = tmpvar_19.xyz;
 }`,comp:`float trel;
float vshift;
vec3 xlat_mutableret1;
vec2 xlat_mutablers;
vec2 xlat_mutablers0;
float xlat_mutablesmoke;
float xlat_mutablesmoke2;
vec2 xlat_mutableuv_l;
float xlat_mutablew;
float xlat_mutablez;
 shader_body { 
  trel = (time / 2.0);
  vshift = (0.5 - q29);
  vec2 tmpvar_1;
  tmpvar_1.x = rand_preset.x;
  tmpvar_1.y = ((-0.1 - (rand_preset.y / 2.0)) + vshift);
  vec2 tmpvar_2;
  tmpvar_2.y = 0.0;
  tmpvar_2.x = (0.005 * time);
  xlat_mutableuv_l = (uv + tmpvar_2);
  vec2 tmpvar_3;
  vec2 tmpvar_4;
  tmpvar_4 = (uv - 0.5);
  tmpvar_3 = sin(((
    (tmpvar_4 * aspect.xy)
   + 0.5) - (tmpvar_1 * aspect.xy)));
  vec2 tmpvar_5;
  tmpvar_5 = fract(uv);
  vec3 tmpvar_6;
  tmpvar_6 = vec3((texture (sampler_fc_main, tmpvar_5).x + (2.0 * (
    (texture (sampler_blur2, tmpvar_5).xyz * scale2)
   + bias2).x)));
  vec3 tmpvar_7;
  tmpvar_7.x = tmpvar_6.x;
  tmpvar_7.y = pow (tmpvar_6.x, 2.1);
  tmpvar_7.z = pow (tmpvar_6.x, 4.0);
  xlat_mutablew = ((uv.y - (
    ((dot (texture (sampler_noise_hq, vec2((xlat_mutableuv_l.x / 6.0))), vec4(0.32, 0.49, 0.29, 0.0)) + uv.x) - 0.5)
   / 4.0)) - vshift);
  xlat_mutablez = (0.2 / xlat_mutablew);
  float tmpvar_8;
  tmpvar_8 = clamp ((-0.2 - (
    (8.0 * q5)
   * xlat_mutablew)), 0.0, 1.0);
  xlat_mutablers0.x = (((uv.x - 0.5) * (1.0 + 
    abs(xlat_mutablez)
  )) * 2.0);
  xlat_mutablers0.y = xlat_mutablez;
  xlat_mutablers0 = (xlat_mutablers0 * ((4.0 * 
    float((xlat_mutablez <= 0.0))
  ) + 1.0));
  vec2 tmpvar_9;
  tmpvar_9.x = 0.0;
  tmpvar_9.y = (1.5 + xlat_mutablew);
  vec2 x_10;
  x_10 = (xlat_mutablers0 - tmpvar_9);
  float tmpvar_11;
  tmpvar_11 = ((q26 / sqrt(
    dot (x_10, x_10)
  )) / 4.0);
  xlat_mutablers0 = (xlat_mutablers0 * (1.0 + (tmpvar_11 * tmpvar_11)));
  xlat_mutablers.x = (xlat_mutablers0 * 2.0).x;
  xlat_mutablers.y = (xlat_mutablers0.y + (trel * 0.5));
  float tmpvar_12;
  tmpvar_12 = (texture (sampler_main, uv).y * tmpvar_8);
  vec3 tmpvar_13;
  tmpvar_13.xy = (xlat_mutablers * 2.0);
  tmpvar_13.z = (0.2 * trel);
  float tmpvar_14;
  tmpvar_14 = dot (((
    ((2.0 * clamp ((texture (sampler_noisevol_hq, 
      (tmpvar_13 * float((xlat_mutablez >= 0.0)))
    ) - 0.2), 0.0, 1.0)).xyz * clamp ((texture (sampler_noise_hq, (xlat_mutablers / 16.0)) - 0.5), 0.0, 1.0).x)
   / 
    sqrt(abs(xlat_mutablez))
  ) + tmpvar_11), vec3(0.32, 0.49, 0.29));
  vec3 tmpvar_15;
  tmpvar_15.x = tmpvar_14;
  tmpvar_15.y = pow (tmpvar_14, 2.1);
  tmpvar_15.z = pow (tmpvar_14, 6.0);
  xlat_mutableret1 = (((
    ((uv.y * (1.0 + q23)) + (0.1 / sqrt(dot (tmpvar_3, tmpvar_3))))
   * vec3(0.1, 0.1, 0.2)) * tmpvar_8) + (clamp (tmpvar_15, 0.0, 1.0) * (1.0 - 
    clamp ((-1.0 - (12.0 * xlat_mutablew)), 0.0, 1.0)
  )));
  xlat_mutableret1 = (xlat_mutableret1 * clamp ((1.0 - 
    (tmpvar_12 * 8.0)
  ), 0.0, 1.0));
  vec4 tmpvar_16;
  tmpvar_16 = texture (sampler_main, fract((tmpvar_4 + 0.5)));
  xlat_mutablesmoke = (tmpvar_16.z * (tmpvar_16.z * q5));
  xlat_mutableret1 = (xlat_mutableret1 * clamp ((1.0 - 
    ((xlat_mutablesmoke * q32) * tmpvar_8)
  ), 0.0, 1.0));
  xlat_mutablesmoke2 = (texture (sampler_main, ((tmpvar_4 / 2.0) + 0.5)).z * q30);
  xlat_mutableret1 = (xlat_mutableret1 + (clamp (tmpvar_7, 0.0, 1.0) - (
    ((xlat_mutablez * clamp ((xlat_mutablesmoke + 
      (xlat_mutablew * q31)
    ), 0.0, 1.0)) * vec3(1.0, 0.4, 0.1))
   * tmpvar_8)));
  float tmpvar_17;
  tmpvar_17 = clamp (((
    (tmpvar_12 * xlat_mutablez)
   * xlat_mutablez) / 16.0), 0.0, 1.0);
  vec3 tmpvar_18;
  tmpvar_18.x = tmpvar_17;
  tmpvar_18.y = pow (tmpvar_17, 2.1);
  tmpvar_18.z = pow (tmpvar_17, 6.0);
  xlat_mutableret1 = (xlat_mutableret1 + clamp (tmpvar_18, 0.0, 1.0));
  xlat_mutableret1 = (xlat_mutableret1 * clamp ((
    (((dot (texture (sampler_noise_mq, vec2(
      ((xlat_mutableuv_l.x / 4.0) + (0.02 * trel))
    )), vec4(0.32, 0.49, 0.29, 0.0)) / 6.0) - uv.y) + 0.8)
   * 32.0), 0.0, 1.0));
  vec3 tmpvar_19;
  tmpvar_19.x = xlat_mutablesmoke2;
  tmpvar_19.y = pow (xlat_mutablesmoke2, 2.1);
  tmpvar_19.z = pow (xlat_mutablesmoke2, 6.0);
  xlat_mutableret1 = ((xlat_mutableret1 * clamp (
    (1.0 - xlat_mutablesmoke2)
  , 0.0, 1.0)) + clamp (tmpvar_19, 0.0, 1.0));
  vec4 tmpvar_20;
  tmpvar_20.w = 1.0;
  tmpvar_20.xyz = (1.0 - exp((
    -(xlat_mutableret1)
   * 2.0)));
  ret = tmpvar_20.xyz;
 }`}},function(o,l){o.exports={baseVals:{rating:3,gammaadj:1.98,decay:.5,echo_zoom:1,echo_alpha:.5,echo_orient:3,wave_mode:6,wave_thick:1,modwavealphabyvolume:1,wave_brighten:0,darken:1,wave_a:.001,wave_scale:.527,wave_smoothing:.09,modwavealphastart:0,modwavealphaend:1.32,warpanimspeed:1.459,warpscale:2.007,zoom:.9999,warp:.01,sx:.9999,wave_r:.8,wave_g:.49,ob_a:1,ib_size:.26,mv_x:64,mv_y:48,mv_l:1.85,mv_r:.5,mv_g:.5,mv_b:.5,mv_a:0,b2x:.7,b1ed:0},shapes:[{baseVals:{enabled:1,sides:12,num_inst:1024,rad:.03632,tex_ang:1.00531,tex_zoom:1.53117,b:1,a:0,g2:0,border_b:0,border_a:0},init_eqs_str:"a.fov=0;a.n=0;a.x0=0;a.y0=0;a.z0=0;a.q32=0;a.t1=0;",frame_eqs_str:`a.fov=a.reg03;a.n=a.instance*a.reg00;a.x0=a.gmegabuf[Math.floor(a.n)];a.y0=a.gmegabuf[Math.floor(a.n+1)];a.z0=a.gmegabuf[Math.floor(a.n+2)]+a.reg02;a.x=div(a.x0,a.z0)*a.fov+.5;a.y=div(a.y0,a.z0)*a.q32*a.fov+.5;a.r=a.gmegabuf[Math.floor(a.n+3)];a.g=a.gmegabuf[Math.floor(a.n+4)];a.b=a.gmegabuf[Math.floor(a.n+5)];a.r2=div(a.r,2);a.g2=div(a.g,2);a.b2=div(a.b2,2);a.a=div(a.instance,1024);a.a2=.5*a.a;a.rad=Math.min(div(.02,a.z0),.5)*(0<a.z0?1:0)*2.5*sqrt(a.a);a.rad*=a.gmegabuf[Math.floor(a.n+
6)];--a.t1;`},{baseVals:{enabled:0}},{baseVals:{enabled:0}},{baseVals:{enabled:0}}],waves:[{baseVals:{enabled:1,scaling:2.15542,smoothing:.2,r:0,a:.7},init_eqs_str:"a.fov=0;a.n=0;a.t1=0;a.x0=0;a.y0=0;a.z0=0;a.k1=0;a.t2=0;",frame_eqs_str:"a.t1=1023;a.t2=0;",point_eqs_str:"a.fov=a.reg03;a.n=a.t1*a.reg00;a.x0=a.gmegabuf[Math.floor(a.n)];a.y0=a.gmegabuf[Math.floor(a.n+1)];a.z0=a.gmegabuf[Math.floor(a.n+2)]+a.reg02;a.x=div(a.x0,a.z0)*a.fov+.5;a.y=div(a.y0,a.z0)*a.fov+.5;a.a=Math.max(0,div(a.t1,1024));a.k1=a.reg01+a.t1;a.r=a.gmegabuf[Math.floor(a.n+3)];a.g=a.gmegabuf[Math.floor(a.n+4)];a.b=a.gmegabuf[Math.floor(a.n+5)];a.a=div(div(a.t1,1024)*(.5<=a.z0?1:0),2);--a.t1;a.gmegabuf[Math.floor(1E4+a.t2)]=Math.abs(a.value1+a.value2);a.t2+=1;"},{baseVals:{enabled:1,scaling:.89152,smoothing:.82,r:0,a:.1},init_eqs_str:"a.fov=0;a.n=0;a.t1=0;a.x0=0;a.y0=0;a.z0=0;",frame_eqs_str:"a.t1=512;",point_eqs_str:"a.fov=a.reg03;a.n=a.t1*a.reg00;a.x0=a.gmegabuf[Math.floor(a.n)];a.y0=a.gmegabuf[Math.floor(a.n+1)];a.z0=a.gmegabuf[Math.floor(a.n+2)]+a.reg02;a.x=div(a.x0,a.z0)*a.fov+.5;a.y=div(a.y0,a.z0)*a.fov+.5;a.r=a.gmegabuf[Math.floor(a.n+3)];a.g=a.gmegabuf[Math.floor(a.n+4)];a.b=a.gmegabuf[Math.floor(a.n+5)];a.a=div(div(a.t1,1024)*(.5<=a.z0?1:0),2);--a.t1;"},{baseVals:{enabled:0}},{baseVals:{enabled:0}}],init_eqs_str:`a.xang=0;a.n=0;a.fov=0;a.index2=0;a.ran9=0;a.ran5_=0;a.right=0;a.ran4=0;a.index=0;a.q12=0;a.yang=0;a.q6=0;a.y0=0;a.ran8=0;a.q1=0;a.r1=0;a.q5=0;a.ran1_=0;a.points=0;a.dt1=0;a.dec_f=0;a.x0=0;a["new"]=0;a.dec_s=0;a.k3=0;a.reg01=0;a.my=0;a.oz=0;a.is_beat=0;a.k1=0;a.ran2=0;a.q11=0;a.z0=0;a.q10=0;a.ran4_=0;a.ran9_=0;a.ran3=0;a.ran5=0;a.dec_m=0;a.ran7=0;a.k2=0;a.mz=0;a.ran8_=0;a.ddy=0;a.ran6=0;a.dec2=0;a.ran6_=0;a.oy=0;a.rsum=0;a.mx=0;a.beat=0;a.vol=0;a.ran2_=0;a.peak=0;a.ddx=0;a.q2=
0;a.zang=0;a.trel1=0;a.ran7_=0;a.t0=0;a.dec=0;a.m=0;a.ran1=0;a.q32=0;a.ran3_=0;a.left=0;a.pk=0;a.recsize=0;a.ox=0;a.zofs=0;for(var b=a.index=0;1E5>b;b++)a.megabuf[Math.floor(a.index)]=0,a.gmegabuf[Math.floor(a.index)]=0,a.index+=1;a.recsize=8;a.reg00=a.recsize;a.points=1024;a.reg01=0;a.zofs=1+2*div(randint(100),100);a.reg02=a.zofs;a.fov=.3;a.reg03=a.fov;`,frame_eqs_str:`a.dec_f=pow(.3,div(30,a.fps));a.dec_m=pow(.85,div(30,a.fps));a.dec_s=pow(.95,div(30,a.fps));a.beat=a.bass+a.mid+a.treb-(a.bass_att+a.mid_att+a.treb_att)+(a.bass+a.mid+a.treb);a.beat/=3;a.peak=a.peak*a.dec_m+(1-a.dec_m)*pow(a.beat-1,1)*(1<a.beat?1:0)*4;a.is_beat=above(a.beat,1)*above(a.time,a.t0+.2);a.t0=a.is_beat*a.time+(1-a.is_beat)*a.t0;a.index=mod(a.index+a.is_beat,8);a.index2=mod(a.index2+a.is_beat*bnot(a.index),8);.00001<Math.abs(a.is_beat)?(a.ran1=div(randint(100),50)-
1,a.ran2=div(randint(100),50)-1,a.ran3=div(randint(100),50)-1):0;a.ran1_=a.dec_m*a.ran1_+(1-a.dec_m)*a.ran1;a.ran2_=a.dec_m*a.ran2_+(1-a.dec_m)*a.ran2;a.ran3_=a.dec_m*a.ran3_+(1-a.dec_m)*a.ran3;a.rsum=sqrt(a.ran1_*a.ran1_+a.ran2_*a.ran2_+a.ran3_*a.ran3_);.00001<Math.abs(a.is_beat*(.00001>Math.abs(a.index-2)?1:0))?(a.ran4=div(randint(100),50)-1,a.ran5=div(randint(100),50)-1,a.ran6=div(randint(100),50)-1):0;a.ran4_=a.dec_m*a.ran4_+(1-a.dec_m)*a.ran4;a.ran5_=a.dec_m*a.ran5_+(1-a.dec_m)*a.ran5;a.ran6_=
a.dec_m*a.ran6_+(1-a.dec_m)*a.ran6;.00001<Math.abs(a.is_beat*(.00001>Math.abs(a.index-6)?1:0))?(a.ran7=div(randint(100),50)-1,a.ran8=div(randint(100),50)-1,a.ran9=div(randint(100),50)-1):0;a.ran7_=a.dec_m*a.ran7_+(1-a.dec_m)*a.ran7;a.ran8_=a.dec_m*a.ran8_+(1-a.dec_m)*a.ran8;a.ran9_=a.dec_m*a.ran9_+(1-a.dec_m)*a.ran9;a.pk=sqrt(a.peak+.1);a["new"]=Math.floor(12*(a.ran4-a.ran5)*a.pk-div(12*(a.ran3-a.ran1),a.pk));a["new"]=Math.max(Math.min(a["new"],20),2);a.reg01+=a["new"];a.dec=a.dec_m;a.n=a.recsize*
a.points;a.m=0;a.dt1=div(div(.00001<Math.abs(0<a.ran1?1:0)?4*a.pk:div(4,a.pk),a.fps)*a["new"],6);a.vol=Math.max(a.ran1+a.ran2,.2)*a.pk*2;for(var b=0;b<a["new"];b++)a.trel1+=a.dt1,a.x0=a.x0*a.dec+(1-a.dec)*(Math.sin(a.trel1+6*a.ran3)*a.vol+a.ran1),a.y0=a.y0*a.dec+(1-a.dec)*(Math.sin(a.trel1+6*a.ran2)*a.vol+a.ran2),a.z0=a.z0*a.dec+(1-a.dec)*(Math.sin(a.trel1+6*a.ran1)*a.vol+a.ran3),a.gmegabuf[Math.floor(a.n)]=a.x0,a.gmegabuf[Math.floor(a.n+1)]=a.y0,a.gmegabuf[Math.floor(a.n+2)]=a.z0,a.gmegabuf[Math.floor(a.n+
3)]=div(div(a.ran1_,a.rsum),3)+.5,a.gmegabuf[Math.floor(a.n+4)]=div(div(a.ran2_,a.rsum),3)+.5,a.gmegabuf[Math.floor(a.n+5)]=div(div(a.ran3_,a.rsum),3)+.5,a.gmegabuf[Math.floor(a.n+6)]=0*a.gmegabuf[Math.floor(1E4+a.m)]+1,a.n+=a.recsize,a.m+=1;for(b=a.n=0;b<a.recsize*a.points;b++)a.gmegabuf[Math.floor(a.n)]=a.gmegabuf[Math.floor(a.n+a["new"]*a.recsize)],a.n+=1;a.xang=div(a.ran4_,a.fps);a.yang=div(a.ran5_,a.fps);a.zang=div(a.ran6_,a.fps);a.ddx=Math.min(Math.max(a.ddx+div(a.yang,a.fps),-1),1);a.ddy=Math.min(Math.max(a.ddy+
div(a.xang,a.fps),-1),1);a.q1=2*a.ddx;a.q2=2*a.ddy;for(b=a.n=0;b<a.points;b++)a.ox=a.gmegabuf[Math.floor(a.n)],a.oy=a.gmegabuf[Math.floor(a.n+1)],a.oz=a.gmegabuf[Math.floor(a.n+2)],a.mx=a.ox*Math.cos(a.zang)-a.oy*Math.sin(a.zang),a.my=a.ox*Math.sin(a.zang)+a.oy*Math.cos(a.zang),a.ox=a.mx,a.oy=a.my,a.mx=a.ox*Math.cos(a.yang)+a.oz*Math.sin(a.yang),a.mz=-a.ox*Math.sin(a.yang)+a.oz*Math.cos(a.yang),a.ox=a.mx,a.oz=a.mz,a.my=a.oy*Math.cos(a.xang)-a.oz*Math.sin(a.xang),a.mz=a.oy*Math.sin(a.xang)+a.oz*Math.cos(a.xang),
a.oy=a.my,a.oz=a.mz,a.gmegabuf[Math.floor(a.n)]=a.ox,a.gmegabuf[Math.floor(a.n+1)]=a.oy,a.gmegabuf[Math.floor(a.n+2)]=a.oz,a.n+=a.recsize;a.k1=div(div(a.ran7_,a.fps),2);a.k2=div(div(a.ran8_,a.fps),2);a.k3=div(Math.abs(a.ran9_),a.fps);a.dec=.4+.6*a.ran5_;a.dec2=1-a.dec;a.r1=.5+.3*a.ran4_;for(b=a.n=0;b<a.points-1;b++)a.m=a.n*a.recsize,a.left=mod(a.n-1+a.points,a.points)*a.recsize,a.right=mod(a.n+1+a.points,a.points)*a.recsize,a.gmegabuf[Math.floor(a.m)]=a.dec*a.gmegabuf[Math.floor(a.m)]+a.dec2*(a.gmegabuf[Math.floor(a.left)]*
a.r1+a.gmegabuf[Math.floor(a.right)]*(1-a.r1)+a.k1),a.gmegabuf[Math.floor(a.m+1)]=a.dec*a.gmegabuf[Math.floor(a.m+1)]+a.dec2*(a.gmegabuf[Math.floor(a.left+1)]*a.r1+a.gmegabuf[Math.floor(a.right+1)]*(1-a.r1)+a.k2),a.n+=1;a.m=mod(a.frame,a.points);a.m=Math.max(0,Math.floor(1024+200*(a.t0-a.time)));a.n=a.m*a.recsize;a.q5=div(a.gmegabuf[Math.floor(a.n)],a.gmegabuf[Math.floor(a.n+2)]+a.zofs)*a.fov;a.q6=div(-a.gmegabuf[Math.floor(a.n+1)],a.gmegabuf[Math.floor(a.n+2)]+a.zofs)*a.fov;a.q10=sqrt(a.gmegabuf[Math.floor(a.n+
3)]);a.q11=sqrt(a.gmegabuf[Math.floor(a.n+4)]);a.q12=sqrt(a.gmegabuf[Math.floor(a.n+5)]);a.monitor=a.m;a.q32=a.aspecty;`,pixel_eqs_str:"a.rot=0;a.zoom=1;a.warp=0;a.dy=0;a.dx=-0;",warp:` shader_body { 
  vec4 tmpvar_1;
  tmpvar_1.w = 1.0;
  tmpvar_1.xyz = vec3(0.0, 0.0, 0.0);
  ret = tmpvar_1.xyz;
 }`,comp:`float xlat_mutablesmask;
vec2 xlat_mutableuv1;
vec2 xlat_mutableuv2;
vec2 xlat_mutableuv3;
vec2 xlat_mutableuv4;
 shader_body { 
  float flash_1;
  float dist_2;
  float stars_3;
  vec3 ret_4;
  xlat_mutableuv1 = ((uv - 0.5) * aspect.xy);
  float tmpvar_5;
  tmpvar_5 = (0.1 * time);
  float tmpvar_6;
  tmpvar_6 = (0.2 * rad);
  dist_2 = ((1.0 - fract(
    (0.3333333 + tmpvar_5)
  )) * (1.0 - tmpvar_6));
  vec2 tmpvar_7;
  tmpvar_7.x = q1;
  tmpvar_7.y = q2;
  xlat_mutableuv3 = (xlat_mutableuv1 + tmpvar_7);
  xlat_mutableuv4 = ((32.0 * dist_2) * xlat_mutableuv3);
  xlat_mutablesmask = (texture (sampler_pw_noise_lq, (xlat_mutableuv4 / 256.0)).y - 0.9);
  vec2 tmpvar_8;
  tmpvar_8 = abs((fract(xlat_mutableuv4) - 0.5));
  stars_3 = max (0.0, clamp ((
    (1.0 - dist_2)
   * 
    ((0.1 / sqrt(dot (tmpvar_8, tmpvar_8))) * xlat_mutablesmask)
  ), 0.0, 1.0));
  dist_2 = ((1.0 - fract(
    (0.6666667 + tmpvar_5)
  )) * (1.0 - tmpvar_6));
  vec2 tmpvar_9;
  tmpvar_9.x = q1;
  tmpvar_9.y = q2;
  xlat_mutableuv3 = (xlat_mutableuv1 + tmpvar_9);
  xlat_mutableuv4 = ((32.0 * dist_2) * xlat_mutableuv3);
  xlat_mutablesmask = (texture (sampler_pw_noise_lq, (xlat_mutableuv4 / 256.0)).y - 0.9);
  vec2 tmpvar_10;
  tmpvar_10 = abs((fract(xlat_mutableuv4) - 0.5));
  stars_3 = (stars_3 + max (stars_3, clamp (
    ((1.0 - dist_2) * ((0.1 / sqrt(
      dot (tmpvar_10, tmpvar_10)
    )) * xlat_mutablesmask))
  , 0.0, 1.0)));
  dist_2 = ((1.0 - fract(
    (1.0 + tmpvar_5)
  )) * (1.0 - tmpvar_6));
  vec2 tmpvar_11;
  tmpvar_11.x = q1;
  tmpvar_11.y = q2;
  xlat_mutableuv3 = (xlat_mutableuv1 + tmpvar_11);
  xlat_mutableuv4 = ((32.0 * dist_2) * xlat_mutableuv3);
  xlat_mutablesmask = (texture (sampler_pw_noise_lq, (xlat_mutableuv4 / 256.0)).y - 0.9);
  vec2 tmpvar_12;
  tmpvar_12 = abs((fract(xlat_mutableuv4) - 0.5));
  stars_3 = (stars_3 + max (stars_3, clamp (
    ((1.0 - dist_2) * ((0.1 / sqrt(
      dot (tmpvar_12, tmpvar_12)
    )) * xlat_mutablesmask))
  , 0.0, 1.0)));
  vec2 tmpvar_13;
  tmpvar_13.x = q5;
  tmpvar_13.y = q6;
  xlat_mutableuv2 = (xlat_mutableuv1 - tmpvar_13);
  float tmpvar_14;
  tmpvar_14 = ((0.01 / sqrt(
    dot (xlat_mutableuv2, xlat_mutableuv2)
  )) * min (3.0, (
    ((mid - 0.5) * float((mid > 0.5)))
   * 2.0)));
  flash_1 = tmpvar_14;
  float angle_15;
  float tmpvar_16;
  tmpvar_16 = abs(xlat_mutableuv2.x);
  if ((xlat_mutableuv2.y >= 0.0)) {
    angle_15 = (1.0 - ((xlat_mutableuv2.y - tmpvar_16) / (xlat_mutableuv2.y + tmpvar_16)));
  } else {
    angle_15 = (3.0 - ((xlat_mutableuv2.y + tmpvar_16) / (tmpvar_16 - xlat_mutableuv2.y)));
  };
  angle_15 = (angle_15 * 0.25);
  float tmpvar_17;
  if ((xlat_mutableuv2.x < 0.0)) {
    tmpvar_17 = -(angle_15);
  } else {
    tmpvar_17 = angle_15;
  };
  flash_1 = (tmpvar_14 * (tmpvar_14 / (
    abs((fract((
      (3.0 * tmpvar_17)
     + 
      (time * 2.0)
    )) - 0.5))
   + 0.18)));
  vec3 tmpvar_18;
  tmpvar_18 = max ((texture (sampler_main, uv).xyz * 2.0), ((
    (texture (sampler_blur2, uv).xyz * scale2)
   + bias2) * 2.0));
  vec2 tmpvar_19;
  tmpvar_19 = sin(xlat_mutableuv3);
  ret_4 = (clamp ((0.025 / 
    sqrt(dot (tmpvar_19, tmpvar_19))
  ), 0.0, 1.0) * vec3(0.4, 0.1, 1.0));
  ret_4 = (ret_4 + clamp ((stars_3 * stars_3), 0.0, 1.0));
  ret_4 = (ret_4 * clamp ((1.0 - 
    (2.0 * dot (tmpvar_18, vec3(0.32, 0.49, 0.29)))
  ), 0.0, 1.0));
  ret_4 = (ret_4 + tmpvar_18);
  vec3 tmpvar_20;
  tmpvar_20.x = q10;
  tmpvar_20.y = q11;
  tmpvar_20.z = q12;
  ret_4 = (ret_4 + ((2.0 * 
    clamp (flash_1, 0.0, 1.0)
  ) * tmpvar_20));
  vec4 tmpvar_21;
  tmpvar_21.w = 1.0;
  tmpvar_21.xyz = ret_4;
  ret = tmpvar_21.xyz;
 }`}},function(o,l){o.exports={baseVals:{rating:4,gammaadj:1.98,decay:.5,echo_zoom:1,echo_alpha:.5,echo_orient:3,additivewave:1,wave_thick:1,modwavealphabyvolume:1,darken:1,wave_a:.001,wave_scale:.133,wave_smoothing:0,wave_mystery:-1,modwavealphastart:1,modwavealphaend:1.3,warpanimspeed:1.459,warpscale:2.007,zoom:.9999,warp:.01,sx:.9999,wave_r:.5,wave_g:.5,wave_b:.5,ob_size:.015,ob_b:1,ib_size:.26,mv_a:0,b2x:.3,b1ed:0},shapes:[{baseVals:{enabled:1,sides:40,thickoutline:1,rad:.06623,tex_zoom:1.79845,r:0,a:.1,g2:0,border_b:0,border_a:0},init_eqs_str:"a.vol=0;a.bob=0;a.border_1=0;a.ro=0;a.sp=0;a.red=0;a.spi=0;a.tm=0;a.bob=1.5;a.ro=0;a.red=randint(20);",frame_eqs_str:"a.vol=1+.2*div(a.bass_att+a.treb_att+a.mid_att,3);a.bob=a.bob*above(a.bob,.01)-.01+(1-above(a.bob,.01));a.bob=.4+.4*Math.sin(.8*a.time);a.bob*=a.vol;a.border_1=.4;a.sides=30;a.ro+=.02;a.ang=a.ro;a.sp=.025*a.red;a.spi=.5-a.sp;a.tm=.1*a.time;a.border_r=.5+a.sp*Math.sin(.6*a.tm)+a.spi*Math.cos(1.46*a.tm);a.border_g=.5+a.sp*Math.sin(1.294*a.tm)+a.spi*Math.cos(.87*a.tm);a.border_b=.5+a.sp*Math.sin(1.418*a.tm)+a.spi*Math.cos(.76*a.tm);"},{baseVals:{enabled:1,sides:40,additive:1,num_inst:4,g:1,b:1,g2:0,border_a:0},init_eqs_str:"",frame_eqs_str:"a.x=.5+.225*Math.sin(.7*div(a.time,a.instance));a.y=.5+.3*Math.cos(.7*div(a.time,a.instance));a.x-=.4*a.x*Math.sin(a.time);a.y-=.4*a.y*Math.cos(a.time);a.rad*=a.mid_att;a.r=.5+.5*Math.sin(.5*a.frame);a.b=.5+.5*Math.sin(.5*a.frame+2.094);a.g=.5+.5*Math.sin(.5*a.frame+4.188);"},{baseVals:{enabled:1,sides:40,additive:1,g:1,b:1,g2:0,border_a:0},init_eqs_str:"",frame_eqs_str:"a.x=.5+.5*(.3*Math.sin(1.1*a.time)+.7*Math.sin(.5*a.time));a.x=.5+.225*Math.sin(a.time+2.09);a.y=.5+.3*Math.cos(a.time+2.09);a.rad*=a.bass_att;a.r=.5+.5*Math.sin(.5*a.frame);a.b=.5+.5*Math.sin(.5*a.frame+2.094);a.g=.5+.5*Math.sin(.5*a.frame+4.188);"},{baseVals:{enabled:1,sides:40,additive:1,num_inst:5,rad:.07419,g:1,b:1,g2:0,border_a:0},init_eqs_str:"",frame_eqs_str:"a.x=.5+.225*Math.sin(div(a.time,a.instance));a.y=.5+.3*Math.cos(div(a.time,a.instance));a.x+=.4*a.x*Math.sin(a.time);a.y+=.4*a.y*Math.cos(a.time);a.rad*=a.treb_att;a.r=.5+.5*Math.sin(.5*a.frame);a.b=.5+.5*Math.sin(.5*a.frame+2.094);a.g=.5+.5*Math.sin(.5*a.frame+4.188);"}],waves:[{baseVals:{enabled:0}},{baseVals:{enabled:0}},{baseVals:{enabled:0}},{baseVals:{enabled:0}}],init_eqs_str:"a.index2=0;a.index=0;a.q22=0;a.q21=0;a.q1=0;a.dec_med=0;a.ps=0;a.rott=0;a.is_beat=0;a.q23=0;a.k1=0;a.q24=0;a.dec_slow=0;a.q4=0;a.q26=0;a.p2=0;a.avg=0;a.beat=0;a.p1=0;a.peak=0;a.q2=0;a.q27=0;a.q3=0;a.t0=0;a.q28=0;a.q20=0;",frame_eqs_str:`a.dec_med=pow(.7,div(30,a.fps));a.dec_slow=pow(.99,div(30,a.fps));a.beat=Math.max(Math.max(a.bass,a.mid),a.treb);a.avg=a.avg*a.dec_slow+a.beat*(1-a.dec_slow);a.is_beat=above(a.beat,.2+a.avg+a.peak)*above(a.time,a.t0+.2);a.t0=a.is_beat*a.time+(1-a.is_beat)*a.t0;a.peak=a.is_beat*a.beat+(1-a.is_beat)*a.peak*a.dec_med;a.index=mod(a.index+a.is_beat,8);a.index2=mod(a.index2+a.is_beat*bnot(a.index),2);a.q20=a.avg;a.q21=a.beat;a.q22=a.peak;a.ps=.9*a.ps+.1*a.q22;a.q23=a.ps;a.q24=a.is_beat;
a.q26=a.bass_att+a.mid_att+a.treb_att;a.q27=a.index+1;a.q28=a.index2;a.k1=a.is_beat*equal(mod(a.index,2),0);a.p1=a.k1*(a.p1+1)+(1-a.k1)*a.p1;a.p2=a.dec_med*a.p2+(1-a.dec_med)*a.p1;a.rott=div(3.1416*a.p2,4);a.q1=Math.cos(a.rott);a.q2=Math.sin(a.rott);a.q3=-a.q2;a.q4=a.q1;`,pixel_eqs_str:"a.zoom=1.05;",warp:` shader_body { 
  vec2 uv_1;
  vec2 tmpvar_2;
  tmpvar_2 = (uv - vec2(0.5, 0.5));
  vec4 tmpvar_3;
  tmpvar_3.w = 0.0;
  vec4 tmpvar_4;
  tmpvar_4 = texture (sampler_blur1, uv);
  tmpvar_3.xyz = ((tmpvar_4.xyz * scale1) + bias1);
  float tmpvar_5;
  tmpvar_5 = (dot (tmpvar_3, roam_sin) * 16.0);
  mat2 tmpvar_6;
  tmpvar_6[uint(0)].x = cos(tmpvar_5);
  tmpvar_6[uint(0)].y = -(sin(tmpvar_5));
  tmpvar_6[1u].x = sin(tmpvar_5);
  tmpvar_6[1u].y = cos(tmpvar_5);
  uv_1 = ((tmpvar_2 + (
    (0.2 * dot (((tmpvar_4.xyz * scale1) + bias1), vec3(0.32, 0.49, 0.29)))
   * 
    (tmpvar_2 * tmpvar_6)
  )) - 0.5);
  vec2 tmpvar_7;
  tmpvar_7 = ((uv_1 * texsize.xy) * 0.02);
  vec2 tmpvar_8;
  tmpvar_8.x = (cos((tmpvar_7.y * q1)) * sin(-(tmpvar_7.y)));
  tmpvar_8.y = (sin(tmpvar_7.x) * cos((tmpvar_7.y * q2)));
  uv_1 = (uv_1 - ((tmpvar_8 * texsize.zw) * 12.0));
  vec4 tmpvar_9;
  tmpvar_9.w = 1.0;
  tmpvar_9.xyz = ((texture (sampler_main, uv_1).xyz * 0.98) - 0.02);
  ret = tmpvar_9.xyz;
 }`,comp:`vec3 xlat_mutableret1;
vec2 xlat_mutablers;
vec2 xlat_mutableuv1;
float xlat_mutablez;
 shader_body { 
  xlat_mutableuv1 = (uv - 0.5);
  xlat_mutablez = (0.2 / abs(xlat_mutableuv1.y));
  xlat_mutablers.x = (xlat_mutableuv1.x * xlat_mutablez);
  xlat_mutablers.y = ((xlat_mutablez / 2.0) + (time * 4.0));
  vec4 tmpvar_1;
  tmpvar_1 = texture (sampler_noise_hq, xlat_mutablers);
  xlat_mutableret1 = ((tmpvar_1.xyz * vec3(
    greaterThanEqual (tmpvar_1.xyz, vec3(0.0, 0.0, 0.0))
  )) - 0.6);
  float tmpvar_2;
  tmpvar_2 = clamp ((128.0 * xlat_mutableuv1.y), 0.0, 1.0);
  vec2 tmpvar_3;
  tmpvar_3 = fract(((
    (xlat_mutableuv1 * (1.0 - abs(xlat_mutableuv1.x)))
   - 0.5) - (
    (xlat_mutableret1 * 0.05)
   * tmpvar_2).xy));
  float x_4;
  x_4 = (tmpvar_3.y - 0.52);
  vec3 tmpvar_5;
  tmpvar_5 = (texture (sampler_main, tmpvar_3) + ((0.02 / 
    (0.02 + sqrt((x_4 * x_4)))
  ) * slow_roam_sin)).xyz;
  xlat_mutableret1 = tmpvar_5;
  vec2 tmpvar_6;
  tmpvar_6 = (32.0 * ((
    (uv * mat2(0.6, -0.8, 0.8, 0.6))
   + 
    (tmpvar_5 * 0.1)
  .xy) + (time / 64.0)));
  vec2 tmpvar_7;
  tmpvar_7 = abs((fract(tmpvar_6) - 0.5));
  vec3 tmpvar_8;
  tmpvar_8 = clamp (((0.25 / 
    sqrt(dot (tmpvar_7, tmpvar_7))
  ) * vec3((texture (sampler_pw_noise_lq, 
    (tmpvar_6 / 256.0)
  ).y - 0.9))), 0.0, 1.0);
  vec4 tmpvar_9;
  tmpvar_9.w = 1.0;
  tmpvar_9.xyz = (tmpvar_5 + ((
    (tmpvar_8.x * tmpvar_8.x)
   + 
    ((rand_preset * (0.5 - uv.y)).xyz * vec3(0.0, 0.0, 1.0))
  ) * (1.0 - tmpvar_2)));
  ret = tmpvar_9.xyz;
 }`}},function(o,l){o.exports={baseVals:{rating:2,gammaadj:1.98,decay:.5,echo_zoom:1,echo_alpha:.5,echo_orient:3,wave_mode:3,wave_thick:1,wrap:0,darken:1,wave_a:100,wave_scale:.282,wave_smoothing:.9,wave_mystery:1,warpanimspeed:1.459,warpscale:2.007,zoom:.9999,warp:.01,sx:.9999,wave_r:.5,wave_g:.5,wave_b:.5,ob_size:.05,ob_g:.1,ob_b:1,ob_a:1,ib_size:0,ib_r:0,ib_g:0,ib_b:0,mv_a:0,b1ed:0},shapes:[{baseVals:{enabled:0}},{baseVals:{enabled:0}},{baseVals:{enabled:0}},{baseVals:{enabled:0}}],waves:[{baseVals:{enabled:1,spectrum:1,thick:1,scaling:.2248},init_eqs_str:"a.ma=0;a.mx=0;a.my=0;",frame_eqs_str:"a.r=a.bass;a.g=a.treb;a.b=.5;",point_eqs_str:"a.ma+=3.1415*above(a.bass,1)*.01*a.bass;a.ma-=3.1415*above(a.treb,1)*.01*a.treb;a.mx+=.0002*Math.cos(a.ma);a.my+=.0002*Math.sin(a.ma);a.mx=.00001<Math.abs(above(a.mx,.9))?.9-a.mx:a.mx;a.my=.00001<Math.abs(above(a.my,.9))?.9-a.my:a.my;a.mx=.00001<Math.abs(below(a.mx,.1))?.9+a.mx:a.mx;a.my=.00001<Math.abs(below(a.my,.1))?.9+a.my:a.my;a.x=a.mx;a.y=a.my;a.a=above(a.bass+a.mid+a.treb,.8);"},{baseVals:{enabled:1,spectrum:1,thick:1,scaling:.2743},init_eqs_str:"a.ma=0;a.mx=0;a.my=0;",frame_eqs_str:"a.r=a.bass;a.g=a.treb;a.b=.5;",point_eqs_str:"a.ma+=3.1415*above(a.mid,1)*.01*a.mid;a.ma-=3.1415*above(a.treb,1)*.01*a.treb;a.mx+=.0004*Math.cos(a.ma);a.my+=.0004*Math.sin(a.ma);a.mx=.00001<Math.abs(above(a.mx,.9))?.9-a.mx:a.mx;a.my=.00001<Math.abs(above(a.my,.9))?.9-a.my:a.my;a.mx=.00001<Math.abs(below(a.mx,.1))?.9+a.mx:a.mx;a.my=.00001<Math.abs(below(a.my,.1))?.9+a.my:a.my;a.x=a.mx;a.y=a.my;a.a=above(a.bass+a.mid+a.treb,.3);"},{baseVals:{enabled:1,thick:1,scaling:2.0231,smoothing:0},init_eqs_str:"a.d=0;a.tt2=0;a.res=0;a.tt1=0;a.diff=0;a.tt3=0;a.beat=0;a.vol=0;a.m=0;a.monitor=0;a.t2=0;a.t3=0;a.t4=0;a.cl=0;",frame_eqs_str:"a.vol=8*a.bass+5*a.mid+3*a.treb;a.m=.97*a.m+.08*a.vol;a.monitor=a.vol;a.beat=above(a.vol,a.res)*above(a.vol,a.m)*above(a.vol,16);a.diff=(1-a.beat)*a.diff+a.beat*(a.vol-a.res);a.res=a.beat*(a.vol+.04*a.m)+(1-a.beat)*(a.res-div(60*(.1+.02*a.diff),a.fps));a.res=Math.max(0,a.res);",point_eqs_str:"a.tt3=.6*a.tt3+1*a.value1;a.tt2=.7*a.tt2+.2*a.tt3;a.tt1=.8*a.tt1+.1*a.tt2;a.d=.9*a.d+.2*a.tt1;a.y=.5+a.d*a.sample*(1-a.sample)*2;a.x=-.05+1.1*a.sample;"},{baseVals:{enabled:0}}],init_eqs_str:`a.look=0;a.n=0;a.reg26=0;a.uvx0=0;a.reg34=0;a.reg28=0;a.reg23=0;a.q25=0;a.angchg=0;a.reg20=0;a.reg15=0;a.reg10=0;a.q12=0;a.v3=0;a.q22=0;a.q21=0;a.diry=0;a.q13=0;a.q6=0;a.posx=0;a.fps_=0;a.reg25=0;a.uvx=0;a.q1=0;a.travel=0;a.posz=0;a.q5=0;a.dirz=0;a.dec_s=0;a.reg16=0;a.slow=0;a.reg36=0;a.reg22=0;a.uvy=0;a.rotz=0;a.ly=0;a.dist_=0;a.q23=0;a.q24=0;a.reg24=0;a.cran0=0;a.ran2=0;a.q11=0;a.q10=0;a.reg14=0;a.posy=0;a.reg31=0;a.dirx=0;a.q4=0;a.start=0;a.reg12=0;a.reg13=0;a.c2=0;a.reg37=
0;a.s3=0;a.yslope=0;a.lampy=0;a.q16=0;a.xslope=0;a.q26=0;a.reg38=0;a.reg35=0;a.reg11=0;a.tx=0;a.avg=0;a.uvz=0;a.c3=0;a.uvy0=0;a.reg27=0;a.q19=0;a.beat=0;a.reg32=0;a.lx=0;a.reg21=0;a.uvz0=0;a.len=0;a.reg18=0;a.reg30=0;a.q2=0;a.q27=0;a.slen=0;a.q14=0;a.dist=0;a.reg17=0;a.v1=0;a.speed=0;a.s1=0;a.t0=0;a.s2=0;a.ran1=0;a.reg33=0;a.q7=0;a.ds=0;a.q28=0;a.lampx=0;a.ty=0;a.c1=0;a.v2=0;a.q20=0;a.q8=0;a.avg=.01;a.q7=.25;a.q8=randint(2)-1;a.q16=1+randint(2);a.q18=randint(.8)+.1;a.q30=1;a.q31=128;a.start=1;a.travel=
0;a.rotz=0;a.look=0;a.slow=0;a.t0=a.time+3;a.lampx=.5;a.lampy=.5;a.cran0=randint(1);for(var b=a.n=0;1E4>b;b++)a.gmegabuf[Math.floor(a.n)]=0,a.n+=1;for(b=a.n=0;1E4>b;b++)a.megabuf[Math.floor(a.n)]=0,a.n+=1;a.trelx=0;a.trely=0;a.trelz=0;a.reg20=1;a.reg21=0;a.reg22=0;a.reg23=0;a.reg24=1;a.reg25=0;a.reg26=0;a.reg27=0;a.reg28=1;b=0;do{b+=1;var c;a.ran1=div(randint(800),100);a.ran2=div(randint(800),100);a.ran3=div(randint(800),100);a.posx=randint(5)-2;a.posy=randint(5)-2;a.posz=randint(5)-2;a.c1=Math.cos(a.ran1);
a.c2=Math.cos(a.ran2);a.c3=Math.cos(a.ran3);a.s1=Math.sin(a.ran1);a.s2=Math.sin(a.ran2);a.s3=Math.sin(a.ran3);a.reg20=a.c2*a.c1;a.reg21=a.c2*a.s1;a.reg22=-a.s2;a.reg23=a.s3*a.s2*a.c1-a.c3*a.s1;a.reg24=a.s3*a.s2*a.s1+a.c3*a.c1;a.reg25=a.s3*a.c2;a.reg26=a.c3*a.s2*a.c1+a.s3*a.s1;a.reg27=a.c3*a.s2*a.s1-a.s3*a.c1;a.reg28=a.c3*a.c2;a.dist=.001;var d=0;do{d+=1;a.uvx=div(a.reg26*a.dist,a.q7);a.uvy=div(a.reg27*a.dist,a.q7);a.uvz=div(a.reg28*a.dist,a.q7);a.uvx+=a.posx;a.uvy+=a.posy;a.uvz+=a.posz;a.uvx=8*(div(a.uvx,
8)+30.5-Math.floor(div(a.uvx,8)+30.5)-.5);a.uvy=8*(div(a.uvy,8)+30.5-Math.floor(div(a.uvy,8)+30.5)-.5);a.uvz=8*(div(a.uvz,8)+30.5-Math.floor(div(a.uvz,8)+30.5)-.5);a.uvx0=a.uvx+a.q8;a.uvy0=a.uvy+a.q8;a.uvz0=a.uvz+a.q8;for(c=0;8>c;c++)a.uvx=.00001<Math.abs(1<a.uvx?1:0)?2-a.uvx:.00001<Math.abs(-1>a.uvx?1:0)?-2-a.uvx:a.uvx,a.uvy=.00001<Math.abs(1<a.uvy?1:0)?2-a.uvy:.00001<Math.abs(-1>a.uvy?1:0)?-2-a.uvy:a.uvy,a.uvz=.00001<Math.abs(1<a.uvz?1:0)?2-a.uvz:.00001<Math.abs(-1>a.uvz?1:0)?-2-a.uvz:a.uvz,a.slen=
a.uvx*a.uvx+a.uvy*a.uvy+a.uvz*a.uvz,a.uvx=2.6*(.00001<Math.abs(.25>a.slen?1:0)?4*a.uvx:.00001<Math.abs(1>a.slen?1:0)?div(a.uvx,a.slen):a.uvx)+a.uvx0,a.uvy=2.6*(.00001<Math.abs(.25>a.slen?1:0)?4*a.uvy:.00001<Math.abs(1>a.slen?1:0)?div(a.uvy,a.slen):a.uvy)+a.uvy0,a.uvz=2.6*(.00001<Math.abs(.25>a.slen?1:0)?4*a.uvz:.00001<Math.abs(1>a.slen?1:0)?div(a.uvz,a.slen):a.uvz)+a.uvz0;a.len=sqrt(a.uvx*a.uvx+a.uvy*a.uvy+a.uvz*a.uvz);a.dist*=1.05;c=(.6>a.dist?1:0)*(30<a.len?1:0)}while(.00001<Math.abs(c)&&1048576>
d);d=.06>a.dist?1:0}while(.00001<Math.abs(d)&&1048576>b);`,frame_eqs_str:`a.wave_a=0;a.fps_=0*a.fps_+1*(.00001<Math.abs(25>=a.fps?1:0)?a.fps:25+.5*(a.fps-25));a.dec_s=1-div(.06*30,a.fps_);a.beat=a.time>a.t0+3?1:0;a.t0=.00001<Math.abs(a.beat)?a.time:a.t0;a.speed=div(Math.min(.2,a.dist_-.02)*(1+2*a.avg)*(1-0*a.slow)*.7,a.q7);a.ds=a.ds*a.dec_s+div((1-a.dec_s)*a.speed*.25,a.fps_);a.rotz=.00001<Math.abs(.00001>Math.abs(a.rotz-0)?1:0)?a.beat*(randint(100)<20*a.travel?1:0)*(div(randint(10),10)-.3):bnot(a.beat*(30>randint(100)?1:0))*a.rotz;a.slow=.00001<
Math.abs(bnot(a.slow))?a.beat*(6>randint(1E3*a.avg)?1:0):bnot(a.beat*(50>randint(100)?1:0));a.look=.00001<Math.abs(bnot(a.look))?a.beat*(12>randint(1E3*a.speed)?1:0):bnot(a.beat*(50>randint(100)?1:0));a.lx=.00001<Math.abs(a.beat)?div(randint(150),200)+.15:a.lx;a.ly=.00001<Math.abs(a.beat)?div(randint(150),200)+.15:a.ly;a.lampx=a.lampx*a.dec_s+(1-a.dec_s)*(.00001<Math.abs(a.look)?a.lx:.5);a.lampy=a.lampy*a.dec_s+(1-a.dec_s)*(.00001<Math.abs(a.look)?a.ly:.5);a.q1=a.lampx;a.q2=a.lampy;a.dirx=a.reg26;
a.diry=a.reg27;a.dirz=a.reg28;a.posx+=a.ds*a.dirx;a.posy+=a.ds*a.diry;a.posz+=a.ds*a.dirz;a.q4=a.posx;a.q5=a.posy;a.q6=a.posz;a.angchg=(.2-a.dist_)*(.2>a.dist_?1:0)*2;a.travel=.00001<Math.abs(0<a.angchg?1:0)?0:a.travel+a.ds;a.v1=a.v1*a.dec_s+(1-a.dec_s)*a.rotz*a.ds;a.v2=a.v2*a.dec_s+div((1-a.dec_s)*a.angchg*a.xslope,a.fps_);a.v3=a.v3*a.dec_s+(1-a.dec_s)*(div(a.angchg*a.yslope,a.fps_)+2*a.v1*Math.sin(.1*a.time));a.reg30=a.reg20;a.reg31=a.reg21;a.reg32=a.reg22;a.reg33=a.reg23;a.reg34=a.reg24;a.reg35=
a.reg25;a.reg36=a.reg26;a.reg37=a.reg27;a.reg38=a.reg28;a.n=0;for(var b=a.avg=0;5>b;b++){a.n+=1;a.ran1=div(randint(100),100);a.ran2=div(randint(100),200)-.25;a.tx=Math.cos(1.57*a.n+a.ran2)*(4>=a.n?1:0)*a.ran1;a.ty=Math.sin(1.57*a.n+a.ran2)*(4>=a.n?1:0)*a.ran1;a.c1=Math.cos(a.v1);a.c2=Math.cos(a.v2+a.ty);a.c3=Math.cos(a.v3+a.tx);a.s1=Math.sin(a.v1);a.s2=Math.sin(a.v2+a.ty);a.s3=Math.sin(a.v3+a.tx);a.reg10=a.c2*a.c1;a.reg11=a.c2*a.s1;a.reg12=-a.s2;a.reg13=a.s3*a.s2*a.c1-a.c3*a.s1;a.reg14=a.s3*a.s2*
a.s1+a.c3*a.c1;a.reg15=a.s3*a.c2;a.reg16=a.c3*a.s2*a.c1+a.s3*a.s1;a.reg17=a.c3*a.s2*a.s1-a.s3*a.c1;a.reg18=a.c3*a.c2;a.reg20=a.reg30;a.reg21=a.reg31;a.reg22=a.reg32;a.reg23=a.reg33;a.reg24=a.reg34;a.reg25=a.reg35;a.reg26=a.reg36;a.reg27=a.reg37;a.reg28=a.reg38;a.q20=a.reg10*a.reg20+a.reg11*a.reg23+a.reg12*a.reg26;a.q21=a.reg10*a.reg21+a.reg11*a.reg24+a.reg12*a.reg27;a.q22=a.reg10*a.reg22+a.reg11*a.reg25+a.reg12*a.reg28;a.q23=a.reg13*a.reg20+a.reg14*a.reg23+a.reg15*a.reg26;a.q24=a.reg13*a.reg21+a.reg14*
a.reg24+a.reg15*a.reg27;a.q25=a.reg13*a.reg22+a.reg14*a.reg25+a.reg15*a.reg28;a.q26=a.reg16*a.reg20+a.reg17*a.reg23+a.reg18*a.reg26;a.q27=a.reg16*a.reg21+a.reg17*a.reg24+a.reg18*a.reg27;a.q28=a.reg16*a.reg22+a.reg17*a.reg25+a.reg18*a.reg28;a.reg20=a.q20;a.reg21=a.q21;a.reg22=a.q22;a.reg23=a.q23;a.reg24=a.q24;a.reg25=a.q25;a.reg26=a.q26;a.reg27=a.q27;a.reg28=a.q28;a.dist=.002;var c,d=0;do{d+=1;a.uvx=div(a.reg26*a.dist,a.q7);a.uvy=div(a.reg27*a.dist,a.q7);a.uvz=div(a.reg28*a.dist,a.q7);a.uvx+=a.posx;
a.uvy+=a.posy;a.uvz+=a.posz;a.uvx=8*(div(a.uvx,8)+30.5-Math.floor(div(a.uvx,8)+30.5)-.5);a.uvy=8*(div(a.uvy,8)+30.5-Math.floor(div(a.uvy,8)+30.5)-.5);a.uvz=8*(div(a.uvz,8)+30.5-Math.floor(div(a.uvz,8)+30.5)-.5);a.uvx0=a.uvx+a.q8;a.uvy0=a.uvy+a.q8;a.uvz0=a.uvz+a.q8;for(c=0;8>c;c++)a.uvx=.00001<Math.abs(1<a.uvx?1:0)?2-a.uvx:.00001<Math.abs(-1>a.uvx?1:0)?-2-a.uvx:a.uvx,a.uvy=.00001<Math.abs(1<a.uvy?1:0)?2-a.uvy:.00001<Math.abs(-1>a.uvy?1:0)?-2-a.uvy:a.uvy,a.uvz=.00001<Math.abs(1<a.uvz?1:0)?2-a.uvz:.00001<
Math.abs(-1>a.uvz?1:0)?-2-a.uvz:a.uvz,a.slen=a.uvx*a.uvx+a.uvy*a.uvy+a.uvz*a.uvz,a.uvx=2.6*(.00001<Math.abs(.25>a.slen?1:0)?4*a.uvx:.00001<Math.abs(1>a.slen?1:0)?div(a.uvx,a.slen):a.uvx)+a.uvx0,a.uvy=2.6*(.00001<Math.abs(.25>a.slen?1:0)?4*a.uvy:.00001<Math.abs(1>a.slen?1:0)?div(a.uvy,a.slen):a.uvy)+a.uvy0,a.uvz=2.6*(.00001<Math.abs(.25>a.slen?1:0)?4*a.uvz:.00001<Math.abs(1>a.slen?1:0)?div(a.uvz,a.slen):a.uvz)+a.uvz0;a.len=sqrt(a.uvx*a.uvx+a.uvy*a.uvy+a.uvz*a.uvz);a.dist*=1.1;c=(.6>a.dist?1:0)*(30<
a.len?1:0)}while(.00001<Math.abs(c)&&1048576>d);a.megabuf[Math.floor(a.n)]=a.megabuf[Math.floor(a.n)]*a.dec_s+(1-a.dec_s)*a.dist;a.avg+=Math.abs(div(a.megabuf[Math.floor(a.n)],5))}a.n=0;for(b=a.avg=0;5>b;b++)a.n+=1,a.avg+=Math.abs(div(a.megabuf[Math.floor(a.n)],5));a.xslope=Math.min(Math.max(div(2,a.avg)*(a.megabuf[1]-a.megabuf[3]),-3),3);a.yslope=Math.min(Math.max(div(2,a.avg)*(a.megabuf[4]-a.megabuf[2]),-3),3);a.monitor=a.avg;a.dist_=a.dist_*a.dec_s+(1-a.dec_s)*a.dist;a.q10=a.ds*a.q7;a.q14=Math.abs(a.ds)+
2*(Math.abs(a.v1)+Math.abs(a.v2)+Math.abs(a.v3))+div(1,255)+.05*a.start;a.q19=.6+.4*Math.sin(.02*a.time+6*a.cran0);a.start*=.9;a.q11=a.v1;a.q12=a.v2;a.q13=a.v3;a.monitor=a.q16;`,pixel_eqs_str:"a.warp=0;a.zoom=1;a.dx=div(-a.q12,a.q16)*(1+0*pow(a.x-.5,2));a.dy=div(a.q13,a.q16)*(1+0*pow(a.y-.5,2));a.rot=a.q11;",warp:` shader_body { 
  float dy_1;
  float dx_2;
  vec3 ret_3;
  vec2 tmpvar_4;
  tmpvar_4 = ((uv * texsize.xy) * texsize_noise_lq.zw);
  vec2 tmpvar_5;
  tmpvar_5 = (texsize.zw * 4.0);
  vec2 tmpvar_6;
  tmpvar_6.x = (((2.0 * 
    ((texture (sampler_blur1, (uv + (vec2(1.0, 0.0) * tmpvar_5))).xyz * scale1) + bias1)
  ) - (2.0 * 
    ((texture (sampler_blur1, (uv - (vec2(1.0, 0.0) * tmpvar_5))).xyz * scale1) + bias1)
  )).y * 0.5);
  tmpvar_6.y = (((2.0 * 
    ((texture (sampler_blur1, (uv + (vec2(0.0, 1.0) * tmpvar_5))).xyz * scale1) + bias1)
  ) - (2.0 * 
    ((texture (sampler_blur1, (uv - (vec2(0.0, 1.0) * tmpvar_5))).xyz * scale1) + bias1)
  )).y * 0.5);
  ret_3.y = texture (sampler_fw_main, clamp ((uv + (
    (tmpvar_6 * texsize.zw)
   * 4.0)), 0.0, 1.0)).y;
  ret_3.y = (ret_3.y + ((
    (ret_3 - ((texture (sampler_blur1, uv).xyz * scale1) + bias1))
  .y * 0.025) + -0.01));
  ret_3.y = (ret_3.y + ((texture (sampler_noise_lq, tmpvar_4).y - 0.5) * 0.02));
  dx_2 = (((2.0 * 
    ((texture (sampler_blur1, (uv + (vec2(1.0, 0.0) * tmpvar_5))).xyz * scale1) + bias1)
  ) - (2.0 * 
    ((texture (sampler_blur1, (uv - (vec2(1.0, 0.0) * tmpvar_5))).xyz * scale1) + bias1)
  )).z * 0.5);
  dy_1 = (((2.0 * 
    ((texture (sampler_blur1, (uv + (vec2(0.0, 1.0) * tmpvar_5))).xyz * scale1) + bias1)
  ) - (2.0 * 
    ((texture (sampler_blur1, (uv - (vec2(0.0, 1.0) * tmpvar_5))).xyz * scale1) + bias1)
  )).z * 0.5);
  vec2 tmpvar_7;
  tmpvar_7.x = dx_2;
  tmpvar_7.y = dy_1;
  ret_3.z = ((texture (sampler_main, (uv - 
    ((tmpvar_7 * texsize.zw) * 4.0)
  )).z - (ret_3.y * 0.01)) + 0.004);
  ret_3.z = (ret_3.z + ((texture (sampler_noise_lq, tmpvar_4).y - 0.5) * 0.01));
  dx_2 = (((2.0 * 
    ((texture (sampler_blur1, (uv + (tmpvar_5 * vec2(1.0, 0.0)))).xyz * scale1) + bias1)
  ) - (2.0 * 
    ((texture (sampler_blur1, (uv + (tmpvar_5 * vec2(-1.0, 0.0)))).xyz * scale1) + bias1)
  )).x * 0.5);
  dy_1 = (((2.0 * 
    ((texture (sampler_blur1, (uv + (tmpvar_5 * vec2(0.0, 1.0)))).xyz * scale1) + bias1)
  ) - (2.0 * 
    ((texture (sampler_blur1, (uv + (tmpvar_5 * vec2(0.0, -1.0)))).xyz * scale1) + bias1)
  )).x * 0.5);
  vec2 tmpvar_8;
  tmpvar_8.x = dx_2;
  tmpvar_8.y = dy_1;
  vec2 tmpvar_9;
  tmpvar_9 = (tmpvar_8 * texsize.zw);
  vec2 domain_10;
  domain_10 = (uv - (tmpvar_9 * 2.5));
  vec4 tmpvar_11;
  tmpvar_11.w = 0.0;
  tmpvar_11.xyz = max (vec4(0.0, 0.0, 0.0, 0.0), texture (sampler_fc_main, (domain_10 + (texsize.zw * vec2(-1.0, 0.0))))).xyz;
  vec4 tmpvar_12;
  tmpvar_12.w = 0.0;
  tmpvar_12.xyz = max (tmpvar_11, texture (sampler_fc_main, (domain_10 + (texsize.zw * vec2(0.0, -1.0))))).xyz;
  vec4 tmpvar_13;
  tmpvar_13.w = 0.0;
  tmpvar_13.xyz = max (tmpvar_12, texture (sampler_fc_main, domain_10)).xyz;
  vec4 tmpvar_14;
  tmpvar_14.w = 0.0;
  tmpvar_14.xyz = max (tmpvar_13, texture (sampler_fc_main, (domain_10 + (texsize.zw * vec2(0.0, 1.0))))).xyz;
  ret_3.x = ((max (tmpvar_14, texture (sampler_fc_main, 
    (domain_10 + (texsize.zw * vec2(1.0, 0.0)))
  )).x + (
    (texture (sampler_main, (uv + (tmpvar_9 * 4.0))).x - ((texture (sampler_blur1, (uv + 
      (tmpvar_9 * 4.0)
    )).xyz * scale1) + bias1).x)
   * 0.206)) - 0.09);
  vec4 tmpvar_15;
  tmpvar_15.w = 1.0;
  tmpvar_15.xyz = ret_3;
  ret = tmpvar_15.xyz;
 }`,comp:`float xlat_mutablelamp;
vec2 xlat_mutablers0;
vec2 xlat_mutablerss;
vec2 xlat_mutableuv1;
 shader_body { 
  vec3 tmpvar_1;
  tmpvar_1.x = q4;
  tmpvar_1.y = q5;
  tmpvar_1.z = q6;
  mat3 tmpvar_2;
  tmpvar_2[uint(0)].x = q20;
  tmpvar_2[uint(0)].y = q23;
  tmpvar_2[uint(0)].z = q26;
  tmpvar_2[1u].x = q21;
  tmpvar_2[1u].y = q24;
  tmpvar_2[1u].z = q27;
  tmpvar_2[2u].x = q22;
  tmpvar_2[2u].y = q25;
  tmpvar_2[2u].z = q28;
  vec2 tmpvar_3;
  tmpvar_3.x = q1;
  tmpvar_3.y = q2;
  vec2 uv_4;
  vec3 dots_5;
  vec3 ret_6;
  vec2 tmpvar_7;
  vec2 tmpvar_8;
  tmpvar_8 = (uv - 0.5);
  tmpvar_7 = (0.5 + (tmpvar_8 * vec2(1.1, 0.81)));
  vec2 tmpvar_9;
  tmpvar_9 = (uv - vec2(0.5, 0.5));
  uv_4 = (tmpvar_8 * aspect.xy);
  float tmpvar_10;
  float tmpvar_11;
  tmpvar_11 = (min (abs(
    (uv_4.y / uv_4.x)
  ), 1.0) / max (abs(
    (uv_4.y / uv_4.x)
  ), 1.0));
  float tmpvar_12;
  tmpvar_12 = (tmpvar_11 * tmpvar_11);
  tmpvar_12 = (((
    ((((
      ((((-0.01213232 * tmpvar_12) + 0.05368138) * tmpvar_12) - 0.1173503)
     * tmpvar_12) + 0.1938925) * tmpvar_12) - 0.3326756)
   * tmpvar_12) + 0.9999793) * tmpvar_11);
  tmpvar_12 = (tmpvar_12 + (float(
    (abs((uv_4.y / uv_4.x)) > 1.0)
  ) * (
    (tmpvar_12 * -2.0)
   + 1.570796)));
  tmpvar_10 = (tmpvar_12 * sign((uv_4.y / uv_4.x)));
  if ((abs(uv_4.x) > (1e-08 * abs(uv_4.y)))) {
    if ((uv_4.x < 0.0)) {
      if ((uv_4.y >= 0.0)) {
        tmpvar_10 += 3.141593;
      } else {
        tmpvar_10 = (tmpvar_10 - 3.141593);
      };
    };
  } else {
    tmpvar_10 = (sign(uv_4.y) * 1.570796);
  };
  xlat_mutablers0.x = ((tmpvar_10 / 3.1416) * 2.0);
  xlat_mutablers0.y = (0.02 / sqrt(dot (uv_4, uv_4)));
  vec2 tmpvar_13;
  tmpvar_13.x = xlat_mutablers0.x;
  tmpvar_13.y = (xlat_mutablers0.y + time);
  xlat_mutablerss = (tmpvar_13 * mat2(0.7, -0.7, 0.7, 0.7));
  vec4 tmpvar_14;
  tmpvar_14 = vec4(greaterThanEqual ((texture (sampler_pw_noise_lq, 
    (xlat_mutablerss / 32.0)
  ) - 0.7), vec4(0.0, 0.0, 0.0, 0.0)));
  vec2 tmpvar_15;
  tmpvar_15 = abs((fract(
    (xlat_mutablerss * 8.0)
  ) - 0.5));
  vec2 tmpvar_16;
  tmpvar_16.x = (xlat_mutablers0.x * 2.0);
  tmpvar_16.y = (xlat_mutablers0.y + (time / 2.0));
  xlat_mutablerss = (tmpvar_16 * mat2(0.7, -0.7, 0.7, 0.7));
  vec4 tmpvar_17;
  tmpvar_17 = vec4(greaterThanEqual ((texture (sampler_pw_noise_lq, 
    (xlat_mutablerss / 32.0)
  ) - 0.7), vec4(0.0, 0.0, 0.0, 0.0)));
  vec2 tmpvar_18;
  tmpvar_18 = abs((fract(
    (xlat_mutablerss * 8.0)
  ) - 0.5));
  xlat_mutablerss = tmpvar_18;
  dots_5 = (vec3((clamp (
    (0.04 / sqrt(dot (tmpvar_15, tmpvar_15)))
  , 0.0, 1.0) * tmpvar_14.x)) + (clamp (
    (0.04 / sqrt(dot (tmpvar_18, tmpvar_18)))
  , 0.0, 1.0) * tmpvar_17.x));
  dots_5 = (dots_5 * clamp ((0.04 / 
    abs((0.01 / xlat_mutablers0.y))
  ), 0.0, 1.0));
  dots_5 = (dots_5 * (dots_5 * 2.0));
  vec2 tmpvar_19;
  tmpvar_19.x = -((tmpvar_9.y * -1024.0));
  tmpvar_19.y = (tmpvar_9.x * -1024.0);
  vec2 tmpvar_20;
  tmpvar_20.x = tmpvar_19.x;
  tmpvar_20.y = -(tmpvar_19.y);
  uv_4 = (vec2(-100.0, 100.0) * (tmpvar_20 / (
    (tmpvar_19.x * tmpvar_19.x)
   + 
    (tmpvar_19.y * tmpvar_19.y)
  )).yx);
  uv_4 = (0.5 + ((
    (1.0 - abs(((
      fract((mix ((0.5 + 
        ((tmpvar_7 - 0.5) * 2.0)
      ), (uv_4 + 0.5), vec2(0.5, 0.5)) * 0.5))
     * 2.0) - 1.0)))
   - 0.5) * 0.98));
  uv_4 = (((uv_4 - 0.5) * 0.9) + 0.5);
  xlat_mutableuv1 = ((uv_4 - tmpvar_3) * aspect.xy);
  float tmpvar_21;
  tmpvar_21 = min ((1.0 - texture (sampler_main, uv_4).z), (1.0 - (
    (texture (sampler_blur2, uv_4).xyz * scale2)
   + bias2).z));
  vec3 tmpvar_22;
  tmpvar_22.xy = ((uv_4 - 0.5) * min ((1.0 - texture (sampler_main, uv_4).z), (1.0 - 
    ((texture (sampler_blur2, uv_4).xyz * scale2) + bias2)
  .z)));
  tmpvar_22.z = min ((1.0 - texture (sampler_main, uv_4).z), (1.0 - (
    (texture (sampler_blur2, uv_4).xyz * scale2)
   + bias2).z));
  float tmpvar_23;
  tmpvar_23 = clamp ((abs(
    ((1.0 - ((texture (sampler_blur2, uv_4).xyz * scale2) + bias2).z) - clamp ((1.0 - (
      (texture (sampler_blur2, tmpvar_3).xyz * scale2)
     + bias2).z), 0.1, 0.4))
  ) + 0.2), 0.0, 1.0);
  vec3 tmpvar_24;
  tmpvar_24 = mix (texture (sampler_main, uv_4).xyz, ((texture (sampler_blur1, uv_4).xyz * scale1) + bias1), vec3(tmpvar_23));
  float tmpvar_25;
  tmpvar_25 = clamp (((1.0 - 
    exp(-(((texture (sampler_blur1, uv_4).xyz * scale1) + bias1).x))
  ) - 0.2), 0.0, 1.0);
  ret_6 = ((tmpvar_24.x * (0.2 + 
    ((1.0 - tmpvar_23) * (1.0 - tmpvar_21))
  )) * (1.0 + (0.5 * 
    sin((((tmpvar_22 / q7) * tmpvar_2) + tmpvar_1))
  )));
  vec3 tmpvar_26;
  tmpvar_26.xy = vec2(0.0, 1.0);
  tmpvar_26.z = (tmpvar_25 * 3.0);
  vec3 tmpvar_27;
  tmpvar_27 = mix (ret_6, tmpvar_26, vec3(tmpvar_25));
  xlat_mutablelamp = (((
    clamp ((1.0 - (4.0 * sqrt(
      dot (xlat_mutableuv1, xlat_mutableuv1)
    ))), 0.0, 1.0)
   * tmpvar_24.x) * clamp (
    (1.0 - (2.0 * mix (tmpvar_21, (1.0 - 
      ((texture (sampler_blur1, uv_4).xyz * scale1) + bias1)
    .z), 0.2)))
  , 0.0, 1.0)) * 1.8);
  ret_6 = (tmpvar_27 + ((1.0 - 
    dot (tmpvar_27, vec3(0.32, 0.49, 0.29))
  ) * xlat_mutablelamp));
  ret_6 = (1.0 - exp((-2.0 * ret_6)));
  ret_6 = (ret_6 + (dots_5 * (1.0 + ret_6)));
  vec4 tmpvar_28;
  tmpvar_28.w = 1.0;
  tmpvar_28.xyz = ret_6;
  ret = tmpvar_28.xyz;
 }`}},function(o,l){o.exports={baseVals:{rating:3,wave_mode:4,additivewave:1,wave_dots:1,modwavealphabyvolume:1,wave_a:.331,wave_scale:.898,wave_smoothing:.108,wave_mystery:.1,modwavealphastart:.72,modwavealphaend:1.28,zoom:1.3345,wave_r:0,wave_g:.5,wave_b:.5,wave_y:.54,mv_x:24.8,mv_dy:.16,mv_l:1.5,mv_a:0},shapes:[{baseVals:{enabled:0}},{baseVals:{enabled:0}},{baseVals:{enabled:0}},{baseVals:{enabled:0}}],waves:[{baseVals:{enabled:1,samples:352,usedots:1,additive:1,scaling:.03856,smoothing:.2,g:0},init_eqs_str:"a.t02=0;a.q1=0;a.ratio=0;a.ampl=0;a.x1=0;a.y1=0;",frame_eqs_str:"a.q1=a.bass_att;",point_eqs_str:`a.r=Math.abs(Math.sin(div(a.frame,38)));a.g=.5*Math.abs(Math.cos(div(a.frame,45)));a.b=.5*Math.abs(Math.sin(div(a.frame,133)));a.a=.3;a.t02+=div(a.q1,10);a.ratio=Math.sin(div(a.frame,49));a.ampl=.01+.4*sqr(Math.sin(div(a.frame,18))*Math.cos(div(a.frame,123)));a.x1=div(a.r-.5,15)+.5+a.ampl*Math.sin(6.28*a.sample);a.y1=div(a.b-.5,15)+.5+a.ampl*Math.cos(6.28*a.sample);a.x=a.x1+.2*(a.ampl+a.ratio)*Math.sin(6.28*a.sample*a.ratio*7.3);a.y=a.y1+.2*(a.ampl+a.ratio)*Math.cos(37.68*a.sample);
`},{baseVals:{enabled:0}},{baseVals:{enabled:0}},{baseVals:{enabled:0}}],init_eqs_str:"a.oldshift=0;a.shift=0;a.normalframez=0;a.crash=0;a.nex=0;a.rshift=0;a.q1=0;a.zoom1=0;",frame_eqs_str:`a.dx=0;a.oldshift=a.shift;a.normalframez+=1;a.shift=above(a.bass_att,1)*above(a.treb_att,.9);a.crash=Math.abs(a.oldshift-a.shift);a.nex=1*equal(a.rshift,0)+2*equal(a.rshift,1);a.rshift=.00001<Math.abs(a.crash)?a.nex:a.rshift;a.monitor=a.rshift;a.wave_r=div(Math.floor(randint(200)),200);a.wave_g=div(Math.floor(randint(200)),200);a.wave_b=div(Math.floor(randint(200)),200);a.warp=0;a.q1=above(a.bass_att,1.3);a.zoom1=a.zoom+.15-.3*mod(a.normalframez,2);a.zoom=.00001<Math.abs(a.shift)?
a.zoom1:1;a.rot=a.rot-.1+.1*a.rshift;`,pixel_eqs_str:"a.dy=.007*-below(a.y,.4)+.007*above(a.y,.6);",warp:` shader_body { 
  vec4 tmpvar_1;
  tmpvar_1.w = 1.0;
  tmpvar_1.xyz = ((texture (sampler_main, (uv_orig + 
    ((uv - uv_orig) * dot (texture (sampler_main, uv).xyz, vec3(0.32, 0.49, 0.29)))
  )).xyz * 0.99) - 0.002);
  ret = tmpvar_1.xyz;
 }`,comp:` shader_body { 
  vec3 ret_1;
  ret_1 = (texture (sampler_main, uv).xyz * 2.0);
  ret_1 = (ret_1 * (1.0 - ret_1));
  ret_1 = (((1.0 - 
    pow (clamp (ret_1, 0.0, 1.0), vec3(0.5, 0.5, 0.5))
  ) * 1.5) - 0.75);
  vec4 tmpvar_2;
  tmpvar_2.w = 1.0;
  tmpvar_2.xyz = ret_1;
  ret = tmpvar_2.xyz;
 }`}},function(o,l){o.exports={baseVals:{rating:0,decay:1,echo_zoom:1,echo_orient:3,wave_mode:1,wrap:0,darken_center:1,wave_a:.001,zoom:.97,rot:-6.27999,warp:52e-5,wave_r:0,wave_g:0,wave_b:0,ob_r:1,ob_g:1,ob_b:1,mv_a:0},shapes:[{baseVals:{enabled:1,sides:100,textured:1,rad:.49849,g:1,b:1,a:.7,r2:1,g2:0,b2:1,a2:.7,border_a:0},init_eqs_str:"a.q2=0;a.tex_capture=0;a.q3=0;",frame_eqs_str:"a.r2=.5+.5*Math.sin(.35*a.q2);a.g2=.5+.5*Math.sin(.578*a.q2);a.b2=.5+.5*Math.sin(.689*a.q2);a.ang=a.q2;a.tex_capture=above(a.q3,2);"},{baseVals:{enabled:1,sides:100,textured:1,rad:.74218,g:1,b:1,a:.6,r2:1,g2:0,b2:1,a2:.6,border_a:0},init_eqs_str:"a.q2=0;a.tex_capture=0;a.q3=0;",frame_eqs_str:"a.r2=.5+.5*Math.sin(.45*a.q2);a.g2=.5+.5*Math.sin(.678*a.q2);a.b2=.5+.5*Math.sin(.689*a.q2);a.ang=1.05*-a.q2;a.tex_capture=above(a.q3,2);"},{baseVals:{enabled:1,sides:100,textured:1,rad:1.00035,g:1,b:1,a:.5,r2:1,g2:0,b2:1,a2:.5,border_a:0},init_eqs_str:"a.q2=0;a.tex_capture=0;a.q3=0;",frame_eqs_str:"a.r2=.5+.5*Math.sin(.45*a.q2);a.g2=.5+.5*Math.sin(.578*a.q2);a.b2=.5+.5*Math.sin(.789*a.q2);a.ang=.899*a.q2;a.tex_capture=above(a.q3,2);"},{baseVals:{enabled:0}}],waves:[{baseVals:{enabled:1,sep:1,spectrum:1,thick:1,additive:1},init_eqs_str:"a.xx=0;a.s=0;a.xs=0;a.ss=0;a.q1=0;a.xd=0;a.zd=0;a.v=0;a.yx=0;a.angle2=0;a.zs=0;a.angle=0;a.ys=0;a.xn=0;a.yd=0;a.angle3=0;a.yn=0;a.u=0;a.zx=0;",frame_eqs_str:"",point_eqs_str:`a.u=3.14159*Math.cos(.1*a.q1);a.v=6.28318*Math.cos(.015*a.q1);a.s=314*a.sample;a.ss=6280*a.sample;a.xs=(.3+.1*Math.cos(a.s))*Math.cos(a.ss)*.2*Math.cos(a.v);a.ys=(.3+.1*Math.cos(a.s))*Math.sin(a.ss)*6*a.u;a.zs=.1*Math.sin(a.s)*Math.sin(a.v);a.angle=.1*a.q1;a.yx=a.ys*Math.cos(a.angle)-a.zs*Math.sin(a.angle);a.zx=a.ys*Math.sin(a.angle)+a.zs*Math.cos(a.angle);a.xx=a.xs;a.angle2=.11*a.q1;a.xd=a.xx*Math.cos(a.angle2)-a.zx*Math.sin(a.angle2);a.zd=a.xx*Math.sin(a.angle2)+a.zx*Math.cos(a.angle2);
a.yd=a.yx;a.angle3=.15*a.q1;a.xn=a.xd*Math.cos(a.angle3)-a.yd*Math.sin(a.angle3);a.yn=a.xd*Math.sin(a.angle3)+a.yd*Math.cos(a.angle3);a.zd=a.zd;a.x=a.xn*a.zd*.3+.5;a.y=a.yn*a.zd*.36+.5;a.r=.5+.5*Math.sin(1.2*a.q1+a.x+a.x);a.g=.5+.5*Math.sin(1.5*a.q1+a.x+a.y);a.b=.5+.5*Math.sin(1.36*a.q1+a.y+a.y);`},{baseVals:{enabled:1,sep:1,spectrum:1,thick:1,additive:1},init_eqs_str:"a.xx=0;a.s=0;a.xs=0;a.ss=0;a.q1=0;a.xd=0;a.zd=0;a.v=0;a.yx=0;a.angle2=0;a.zs=0;a.angle=0;a.ys=0;a.xn=0;a.yd=0;a.angle3=0;a.yn=0;a.u=0;a.zx=0;",frame_eqs_str:"",point_eqs_str:`a.u=3.14159*Math.cos(.1*a.q1);a.v=6.28318*Math.cos(.015*a.q1);a.s=314*a.sample;a.ss=6280*a.sample;a.xs=(.3+.1*Math.cos(a.s))*Math.cos(a.ss)*.2*Math.cos(a.v);a.ys=(.3+.1*Math.cos(a.s))*Math.sin(a.ss)*6*a.u;a.zs=.1*Math.sin(a.s)*Math.sin(a.v);a.angle=.1*a.q1;a.yx=a.ys*Math.cos(a.angle)-a.zs*Math.sin(a.angle);a.zx=a.ys*Math.sin(a.angle)+a.zs*Math.cos(a.angle);a.xx=a.xs;a.angle2=.13*a.q1;a.xd=a.xx*Math.cos(a.angle2)-a.zx*Math.sin(a.angle2);a.zd=a.xx*Math.sin(a.angle2)+a.zx*Math.cos(a.angle2);
a.yd=a.yx;a.angle3=.16*a.q1;a.xn=a.xd*Math.cos(a.angle3)-a.yd*Math.sin(a.angle3);a.yn=a.xd*Math.sin(a.angle3)+a.yd*Math.cos(a.angle3);a.zd=a.zd;a.x=a.xn*a.zd*.3+.5;a.y=a.yn*a.zd*.36+.5;a.r=.5+.5*Math.sin(1.2*a.q1+a.x+a.x);a.g=.5+.5*Math.sin(1.5*a.q1+a.x+a.y);a.b=.5+.5*Math.sin(1.36*a.q1+a.y+a.y);`},{baseVals:{enabled:1,sep:1,spectrum:1,thick:1,additive:1},init_eqs_str:"a.xx=0;a.s=0;a.xs=0;a.ss=0;a.q1=0;a.xd=0;a.zd=0;a.v=0;a.yx=0;a.angle2=0;a.zs=0;a.angle=0;a.ys=0;a.xn=0;a.yd=0;a.angle3=0;a.yn=0;a.u=0;a.zx=0;",frame_eqs_str:"",point_eqs_str:`a.u=3.14159*Math.cos(.1*a.q1);a.v=6.28318*Math.cos(.015*a.q1);a.s=314*a.sample;a.ss=6280*a.sample;a.xs=(.3+.1*Math.cos(a.s))*Math.cos(a.ss)*.2*Math.cos(a.v);a.ys=(.3+.1*Math.cos(a.s))*Math.sin(a.ss)*6*a.u;a.zs=.1*Math.sin(a.s)*Math.sin(a.v);a.angle=.1*a.q1;a.yx=a.ys*Math.cos(a.angle)-a.zs*Math.sin(a.angle);a.zx=a.ys*Math.sin(a.angle)+a.zs*Math.cos(a.angle);a.xx=a.xs;a.angle2=.16*a.q1;a.xd=a.xx*Math.cos(a.angle2)-a.zx*Math.sin(a.angle2);a.zd=a.xx*Math.sin(a.angle2)+a.zx*Math.cos(a.angle2);
a.yd=a.yx;a.angle3=.16*a.q1;a.xn=a.xd*Math.cos(a.angle3)-a.yd*Math.sin(a.angle3);a.yn=a.xd*Math.sin(a.angle3)+a.yd*Math.cos(a.angle3);a.zd=a.zd;a.x=a.xn*a.zd*.3+.5;a.y=a.yn*a.zd*.36+.5;a.r=.5+.5*Math.sin(1.2*a.q1+a.x+a.x);a.g=.5+.5*Math.sin(1.5*a.q1+a.x+a.y);a.b=.5+.5*Math.sin(1.36*a.q1+a.y+a.y);`},{baseVals:{enabled:0}}],init_eqs_str:"a.basstime=0;a.stickybit=0;a.volavg2=0;a.q1=0;a.decay_r=0;a.sample1=0;a.difftime=0;a.diff=0;a.decay_b=0;a.edge=0;a.volavg=0;a.bit2=0;a.vol=0;a.q2=0;a.q3=0;a.basssum=0;a.decay_g=0;a.sample2=0;",frame_eqs_str:`a.basstime+=.03*a.bass;a.q1=4*a.basstime;a.basstime=.00001<Math.abs(below(a.basstime,1E3))?1E3:a.basstime;a.basstime+=.03*a.bass_att;a.vol=pow(a.bass+a.mid+a.treb,2);a.basssum=a.vol;a.stickybit=mod(a.time,2);a.volavg+=a.vol*equal(a.stickybit,1);a.sample1+=equal(a.stickybit,1);a.volavg2+=a.vol*equal(a.stickybit,0);a.sample2+=equal(a.stickybit,0);a.edge=bnot(equal(a.bit2,a.stickybit));a.volavg-=a.volavg*a.edge*a.stickybit;a.volavg2-=a.volavg2*a.edge*equal(a.stickybit,0);a.sample1-=
a.sample1*a.edge*a.stickybit;a.sample2-=a.sample2*a.edge*equal(a.stickybit,0);a.diff=.00001<Math.abs(equal(a.stickybit,1))?div(a.basssum,div(a.volavg2,a.sample2)):0;a.diff=.00001<Math.abs(equal(a.stickybit,0))?div(a.basssum,div(a.volavg,a.sample1)):a.diff;a.q3=a.diff;a.bit2=mod(a.time,2);a.difftime+=.03*a.diff;a.q2=a.difftime;a.difftime=.00001<Math.abs(above(a.difftime,2E3))?0:a.difftime;a.monitor=3.14*Math.abs(Math.cos(a.time));a.mv_a=above(a.diff,10);`,pixel_eqs_str:"a.zoom=1+.05*a.q3*a.rad;a.decay_r=.2*a.rad*Math.sin(.35*a.q2)+.85+.1*Math.sin(a.q2);a.decay_g=.2*a.rad*Math.sin(.5*a.q2)+.85+.1*Math.sin(.7*a.q2);a.decay_b=.2*a.rad*Math.sin(.4*a.q2)+.85+.1*Math.sin(.8*a.q2);a.rot=0;",warp:` shader_body { 
  vec4 tmpvar_1;
  tmpvar_1.w = 1.0;
  tmpvar_1.xyz = (texture (sampler_fc_main, uv).xyz * (0.8 + (q3 * 0.1)));
  ret = tmpvar_1.xyz;
 }`,comp:` shader_body { 
  vec4 tmpvar_1;
  tmpvar_1.w = 1.0;
  tmpvar_1.xyz = (texture (sampler_main, uv).xyz * 2.0);
  ret = tmpvar_1.xyz;
 }`}},function(o,l){o.exports={baseVals:{rating:0,gammaadj:1,decay:1,echo_zoom:1.007,echo_alpha:.5,echo_orient:1,wave_mode:7,additivewave:1,modwavealphabyvolume:1,wave_a:.1,wave_scale:3.815,wave_smoothing:.9,modwavealphastart:0,modwavealphaend:1.1,zoom:1.0099,warp:.04177,wave_r:.65,wave_g:.65,ob_size:.007,ib_size:.26,mv_x:64,mv_y:48,mv_l:.85,mv_r:.5,mv_g:.5,mv_b:.5,mv_a:0},shapes:[{baseVals:{enabled:1,sides:3,x:.37,rad:6.81129,ang:3.64425,r:0,a:.5,g2:0,a2:.5,border_a:1},init_eqs_str:"a.q1=0;a.t1=0;a.t1=.01*randint(100);a.t2=.01*randint(100);",frame_eqs_str:"a.ang=a.q1*(.303+.01*a.t1);a.r=Math.min(1,Math.max(0,.1*Math.sin(.417*a.time+1)));a.g=Math.min(1,Math.max(0,.1*Math.sin(.391*a.time+2)));a.b=Math.min(1,Math.max(0,.1*Math.sin(.432*a.time+4)));a.r2=Math.min(1,Math.max(0,a.r2+.02*Math.sin(.657*a.time+3)));a.g2=Math.min(1,Math.max(0,a.g2+.02*Math.sin(.737*a.time+5)));a.b2=Math.min(1,Math.max(0,a.b2+.02*Math.sin(.884*a.time+6)));a.additive=.5+.15*(a.bass+a.bass_att);"},{baseVals:{enabled:1,sides:100,additive:1,textured:1,x:.37,rad:.89796,ang:3.64425,g:1,b:1,a:.5,g2:0,a2:1,border_a:0},init_eqs_str:"a.q1=0;a.t1=0;a.t1=.01*randint(100);a.t2=.01*randint(100);",frame_eqs_str:"a.x+=.07*Math.sin(.15*a.q1+3);a.y+=.03*Math.sin(.19*a.q1+1);a.tex_ang=a.q1*(.01+.0001*a.t1);a.r=Math.min(1,Math.max(0,a.r+.01*Math.sin(.0417*a.time+1)));a.g=Math.min(1,Math.max(0,a.g+.01*Math.sin(.391*a.time+2)));a.b=Math.min(1,Math.max(0,a.b+.01*Math.sin(.432*a.time+4)));a.r2=Math.min(1,Math.max(0,a.r2+.01*Math.sin(.457*a.time+3)));a.g2=Math.min(1,Math.max(0,a.g2+.01*Math.sin(.0437*a.time+5)));a.b2=Math.min(1,Math.max(0,a.b2+.01*Math.sin(.484*a.time+6)));"},{baseVals:{enabled:1,sides:100,additive:1,textured:1,x:.67,y:.43,rad:.51386,ang:4.20974,g:1,b:1,g2:0,a2:1,border_a:0},init_eqs_str:"a.q1=0;a.t1=0;a.t2=0;a.t1=.01*randint(100);a.t2=.01*randint(100);",frame_eqs_str:"a.x+=.05*Math.sin(.017*a.q1);a.y+=.09*Math.sin(.013*a.q1);a.tex_ang=a.q1*(.02+.0001*a.t1);a.rad*=.9+.2*a.t2;a.r=Math.min(1,Math.max(0,a.r+.01*Math.sin(.417*a.time+1)));a.g=Math.min(1,Math.max(0,a.g+.01*Math.sin(.391*a.time+2)));a.b=Math.min(1,Math.max(0,a.b+.01*Math.sin(.432*a.time+4)));a.r2=Math.min(1,Math.max(0,a.r2+.01*Math.sin(.457*a.time+3)));a.g2=Math.min(1,Math.max(0,a.g2+.01*Math.sin(.437*a.time+5)));a.b2=Math.min(1,Math.max(0,a.b2+.01*Math.sin(.484*a.time+6)));"},{baseVals:{enabled:1,sides:100,additive:1,textured:1,rad:.22298,r:.6,g:.8,b:1,g2:0,a2:1,border_a:0},init_eqs_str:"a.q1=0;",frame_eqs_str:"a.x+=.08*Math.sin(.25*a.q1);a.y+=.1*Math.sin(.5*a.q1+2);a.ang=a.time;"}],waves:[{baseVals:{enabled:0}},{baseVals:{enabled:0}},{baseVals:{enabled:0}},{baseVals:{enabled:0}}],init_eqs_str:"a.movement=0;a.q1=0;",frame_eqs_str:"a.movement=a.movement+.1*Math.max(0,a.bass+a.bass_att-2)+.15*pow(a.bass,3)+.005;a.q1=a.movement;a.monitor=a.q1;",pixel_eqs_str:"",pixel_eqs:"",warp:` shader_body { 
  vec3 ret_1;
  vec4 tmpvar_2;
  tmpvar_2 = texture (sampler_main, uv);
  ret_1 = (tmpvar_2.xyz + ((tmpvar_2.xyz - 
    ((texture (sampler_blur1, uv).xyz * scale1) + bias1)
  ) * 0.5));
  ret_1 = (ret_1 * 0.9);
  ret_1 = (ret_1 + ((
    ((texture (sampler_noise_lq, ((
      (uv_orig * texsize.xy)
     * 
      (texsize_noise_lq.zw * 0.4)
    ) + rand_frame.xy)).xyz - 0.5) / 256.0)
   * 12.0) * clamp (
    (treb_att - 1.0)
  , 0.0, 1.0)));
  vec3 tmpvar_3;
  tmpvar_3 = mix (ret_1, vec3(dot (ret_1, vec3(0.32, 0.49, 0.29))), vec3(0.08, 0.08, 0.08));
  ret_1 = tmpvar_3;
  vec4 tmpvar_4;
  tmpvar_4.w = 1.0;
  tmpvar_4.xyz = tmpvar_3;
  ret = tmpvar_4.xyz;
 }`,comp:` shader_body { 
  vec2 uv_1;
  vec2 uv3_2;
  vec2 uv2_3;
  uv_1 = (uv - 0.5);
  uv_1 = (uv_1 * aspect.xy);
  uv2_3.x = ((uv_1.x * -0.497265) - (uv_1.y * 0.8675987));
  uv2_3.y = ((uv_1.x * 0.8675987) + (uv_1.y * -0.497265));
  uv3_2.x = ((uv_1.x * -0.5000263) - (uv_1.y * -0.8660102));
  uv3_2.y = ((uv_1.x * -0.8660102) + (uv_1.y * -0.5000263));
  vec4 tmpvar_4;
  tmpvar_4.w = 1.0;
  tmpvar_4.xyz = max (max (texture (sampler_main, (uv_1 + 0.5)).xyz, texture (sampler_main, (uv2_3 + 0.5)).xyz), texture (sampler_main, (uv3_2 + 0.5)).xyz);
  ret = tmpvar_4.xyz;
 }`}},function(o,l){o.exports={baseVals:{rating:4,gammaadj:1.49,decay:.5,echo_zoom:1.002,echo_alpha:.5,echo_orient:1,wave_mode:7,additivewave:1,modwavealphabyvolume:1,wave_brighten:0,wave_a:.001,wave_scale:1.157,wave_smoothing:.63,modwavealphastart:.71,modwavealphaend:1.3,warpscale:16.016,zoomexp:11.56276,fshader:1,zoom:1.05971,warp:.13126,wave_r:.65,wave_g:.65,wave_b:.65,ob_size:0,ob_a:1,ib_size:0,mv_x:64,mv_y:48,mv_l:0,mv_a:0},shapes:[{baseVals:{enabled:1,sides:14,num_inst:512,rad:.1026,tex_ang:.62832,r2:1,g2:0,a2:1,border_a:0},init_eqs_str:"a.ma=0;a.mx=0;a.my=0;a.r_border=0;a.g_border=0;a.b_border=0;",frame_eqs_str:`a.ma+=3.1415*above(a.bass,1)*.01*a.bass;a.ma-=3.1415*above(a.treb,1)*.01*a.treb;a.mx+=.0002*Math.cos(a.ma);a.my+=.0002*Math.sin(a.ma);a.mx=.00001<Math.abs(above(a.mx,.9))?.9-a.mx:a.mx;a.my=.00001<Math.abs(above(a.my,.9))?.9-a.my:a.my;a.mx=.00001<Math.abs(below(a.mx,.1))?.9+a.mx:a.mx;a.my=.00001<Math.abs(below(a.my,.1))?.9+a.my:a.my;a.x=a.mx;a.y=a.my;a.rad=div(a.bass+a.treb,30);a.a=above(a.bass+a.mid+a.treb,.8);a.r=div(Math.floor(randint(100)),100);a.g=div(Math.floor(randint(100)),
100);a.b=div(Math.floor(randint(100)),100);a.r2=div(Math.floor(randint(100)),100);a.g2=div(Math.floor(randint(100)),100);a.b2=div(Math.floor(randint(100)),100);a.r_border=div(Math.floor(randint(100)),100);a.g_border=div(Math.floor(randint(100)),100);a.b_border=div(Math.floor(randint(100)),100);`},{baseVals:{enabled:1,sides:23,num_inst:1024,rad:.10262,ang:.43982,tex_ang:.62832,a:.5,r2:1,g2:0,a2:.5,border_a:0},init_eqs_str:"a.ma=0;a.mx=0;a.my=0;a.r_border=0;a.g_border=0;a.b_border=0;",frame_eqs_str:`a.ma+=3.1415*above(a.bass,1)*.05*a.bass;a.ma-=3.1415*above(a.mid,1)*.05*a.mid;a.mx+=.0001*Math.cos(a.ma);a.my+=.0001*Math.sin(a.ma);a.mx=.00001<Math.abs(above(a.mx,.9))?.9-a.mx:a.mx;a.my=.00001<Math.abs(above(a.my,.9))?.9-a.my:a.my;a.mx=.00001<Math.abs(below(a.mx,.1))?.9+a.mx:a.mx;a.my=.00001<Math.abs(below(a.my,.1))?.9+a.my:a.my;a.x=a.mx;a.y=a.my;a.rad=div(a.bass+a.treb,25);a.a=above(a.bass+a.mid+a.treb,.1);a.r=div(Math.floor(randint(100)),100);a.g=div(Math.floor(randint(100)),
100);a.b=div(Math.floor(randint(100)),100);a.r2=div(Math.floor(randint(100)),100);a.g2=div(Math.floor(randint(100)),100);a.b2=div(Math.floor(randint(100)),100);a.r_border=div(Math.floor(randint(100)),100);a.g_border=div(Math.floor(randint(100)),100);a.b_border=div(Math.floor(randint(100)),100);`},{baseVals:{enabled:0}},{baseVals:{enabled:0}}],waves:[{baseVals:{enabled:0}},{baseVals:{enabled:0}},{baseVals:{enabled:0}},{baseVals:{enabled:0}}],init_eqs_str:"a.y3=0;a.y1=0;a.xx=0;a.q12=0;a.x1=0;a.vx3=0;a.q6=0;a.dt=0;a.q1=0;a.q5=0;a.q9=0;a.d1=0;a.si1=0;a.vx4=0;a.grav=0;a.x3=0;a.d2=0;a.q11=0;a.q10=0;a.xx2=0;a.q4=0;a.yy1=0;a.vy4=0;a.dir=0;a.bounce=0;a.x4=0;a.r=0;a.x2=0;a.vy2=0;a.y2=0;a.q2=0;a.m1=0;a.spring=0;a.si2=0;a.vx2=0;a.q3=0;a.resist=0;a.yy=0;a.y4=0;a.q7=0;a.vy3=0;a.xx1=0;a.b1=0;a.q8=0;",frame_eqs_str:`a.xx1=.9*a.xx1+.01*a.bass;a.xx2=.9*a.xx2+.01*a.treb;a.yy1=.94*a.yy1+.0075*(a.treb+a.bass);a.x1=.5+2*(a.xx1-a.xx2);a.y1=.4+a.yy1;a.x1=Math.max(0,Math.min(1,a.x1));a.y1=Math.max(0,Math.min(1,a.y1));a.spring=10;a.grav=.5;a.resist=1;a.bounce=.75;a.dt=.0005*div(60,a.fps);a.vx2=a.vx2*(1-a.resist*a.dt)+a.dt*(a.x1+a.x3-2*a.x2)*a.spring;a.vy2=a.vy2*(1-a.resist*a.dt)+a.dt*((a.y1+a.y3-2*a.y2)*a.spring-a.grav);a.vx3=a.vx3*(1-a.resist*a.dt)+a.dt*(a.x2+a.x4-2*a.x3)*a.spring;a.vy3=a.vy3*(1-
a.resist*a.dt)+a.dt*((a.y2+a.y4-2*a.y3)*a.spring-a.grav);a.vx4=a.vx4*(1-a.resist*a.dt)+a.dt*(a.x3-a.x4)*a.spring;a.vy4=a.vy4*(1-a.resist*a.dt)+a.dt*((a.y3-a.y4)*a.spring-a.grav);a.x2+=a.vx2;a.y2+=a.vy2;a.x3+=a.vx3;a.y3+=a.vy3;a.x4+=a.vx4;a.y4+=a.vy4;a.vx2=.00001<Math.abs(above(a.x2,0))?a.vx2:Math.abs(a.vx2)*a.bounce;a.vx2=.00001<Math.abs(below(a.x2,1))?a.vx2:-Math.abs(a.vx2)*a.bounce;a.vx3=.00001<Math.abs(above(a.x3,0))?a.vx3:Math.abs(a.vx3)*a.bounce;a.vx3=.00001<Math.abs(below(a.x3,1))?a.vx3:-Math.abs(a.vx3)*
a.bounce;a.vx4=.00001<Math.abs(above(a.x4,0))?a.vx4:Math.abs(a.vx4)*a.bounce;a.vx4=.00001<Math.abs(below(a.x4,1))?a.vx4:-Math.abs(a.vx4)*a.bounce;a.vy2=.00001<Math.abs(above(a.y2,0))?a.vy2:Math.abs(a.vy2)*a.bounce;a.vy2=.00001<Math.abs(below(a.y2,1))?a.vy2:-Math.abs(a.vy2)*a.bounce;a.vy3=.00001<Math.abs(above(a.y3,0))?a.vy3:Math.abs(a.vy3)*a.bounce;a.vy3=.00001<Math.abs(below(a.y3,1))?a.vy3:-Math.abs(a.vy3)*a.bounce;a.vy4=.00001<Math.abs(above(a.y4,0))?a.vy4:Math.abs(a.vy4)*a.bounce;a.vy4=.00001<
Math.abs(below(a.y4,1))?a.vy4:-Math.abs(a.vy4)*a.bounce;a.q1=a.x1;a.q2=a.x2;a.q3=a.x3;a.q4=a.x4;a.q5=a.y1;a.q6=a.y2;a.q7=a.y3;a.q8=a.y4;a.q9=div(1,a.aspectx);a.q10=div(1,a.aspecty);a.zoom=1;a.r=.96*a.r+(a.x1-.5);a.rot=.1*a.r;a.q12=Math.atan2(a.vx4,a.vy4);a.q11=sqrt(a.vx4*a.vx4+a.vy4*a.vy4);a.zoom=1.001;a.rot=0;a.warp=.2;a.wave_a=0;`,pixel_eqs_str:`a.dir=-a.q12+Math.asin(1);a.b1=.1;a.m1=25*a.q11;a.xx=a.q4;a.yy=1-a.q8;a.x1=a.xx-Math.sin(a.dir)*a.b1;a.y1=a.yy-Math.cos(a.dir)*a.b1;a.x2=a.xx+Math.sin(a.dir)*a.b1;a.y2=a.yy+Math.cos(a.dir)*a.b1;a.d1=sqrt((a.x1-a.x)*(a.x1-a.x)+(a.y1-a.y)*(a.y1-a.y))-2*a.b1;a.d2=sqrt((a.x2-a.x)*(a.x2-a.x)+(a.y2-a.y)*(a.y2-a.y))-2*a.b1;a.si1=sigmoid(-a.d1,1E3);a.si2=sigmoid(-a.d2,1E3);a.dx=2*(a.si1*Math.sin(a.y1-a.y)*a.m1*a.d1-a.si2*Math.sin(a.y2-a.y)*a.m1*a.d2);a.dy=2*(-a.si1*Math.sin(a.x1-a.x)*
a.m1*a.d1+a.si2*Math.sin(a.x2-a.x)*a.m1*a.d2);`,warp:` shader_body { 
  vec2 tmpvar_1;
  tmpvar_1 = mix (uv_orig, uv, vec2(0.3, 0.3));
  vec2 tmpvar_2;
  tmpvar_2 = (texsize.zw * 3.0);
  vec2 tmpvar_3;
  tmpvar_3.x = dot (((
    (texture (sampler_blur1, (tmpvar_1 + (vec2(1.0, 0.0) * tmpvar_2))).xyz * scale1)
   + bias1) - (
    (texture (sampler_blur1, (tmpvar_1 - (vec2(1.0, 0.0) * tmpvar_2))).xyz * scale1)
   + bias1)), vec3(0.32, 0.49, 0.29));
  tmpvar_3.y = dot (((
    (texture (sampler_blur1, (tmpvar_1 + (vec2(0.0, 1.0) * tmpvar_2))).xyz * scale1)
   + bias1) - (
    (texture (sampler_blur1, (tmpvar_1 - (vec2(0.0, 1.0) * tmpvar_2))).xyz * scale1)
   + bias1)), vec3(0.32, 0.49, 0.29));
  vec4 tmpvar_4;
  tmpvar_4.w = 1.0;
  tmpvar_4.xyz = (texture (sampler_fc_main, (tmpvar_1 + (
    (tmpvar_3 * texsize.zw)
   * 9.0))) - 0.01).xyz;
  ret = tmpvar_4.xyz;
 }`,comp:` shader_body { 
  vec2 uv_1;
  vec3 ret3_2;
  vec3 ret_3;
  vec2 tmpvar_4;
  tmpvar_4 = (((uv - 0.5) * vec2(-1.0, 1.0)) + 0.5);
  vec3 tmpvar_5;
  tmpvar_5 = abs(((texture (sampler_main, uv).xyz * 
    clamp ((((
      (texture (sampler_blur2, uv).xyz * scale2)
     + bias2) * 2.8) - 0.13), 0.0, 1.0)
  ) - (texture (sampler_main, tmpvar_4).xyz * 
    clamp ((((
      (texture (sampler_blur2, tmpvar_4).xyz * scale2)
     + bias2) * 2.8) - 0.13), 0.0, 1.0)
  )));
  ret3_2 = (tmpvar_5 * sqrt(tmpvar_5));
  ret3_2 = (ret3_2 * vec3(0.9, 1.6, 2.3));
  ret3_2 = (ret3_2 * 3.0);
  vec3 tmpvar_6;
  tmpvar_6 = pow (ret3_2, (1.0 - ret3_2));
  ret3_2 = tmpvar_6;
  uv_1 = (uv * 2.0);
  vec2 tmpvar_7;
  tmpvar_7 = floor((fract(
    (uv_1 * 0.5)
  ) * 2.0));
  uv_1 = ((fract(uv_1) * (1.0 - tmpvar_7)) + (tmpvar_7 * fract(
    (1.0 - uv_1)
  )));
  vec2 tmpvar_8;
  tmpvar_8.x = rad;
  tmpvar_8.y = uv_1.y;
  uv_1 = tmpvar_8;
  vec2 tmpvar_9;
  tmpvar_9 = ((0.5 - tmpvar_8.yx) + 0.5);
  ret_3 = (texture (sampler_main, tmpvar_8.yx).xyz * clamp ((
    (((texture (sampler_blur2, tmpvar_8.yx).xyz * scale2) + bias2) * 2.8)
   - 0.13), 0.0, 1.0));
  vec3 tmpvar_10;
  tmpvar_10 = mix (ret_3, (texture (sampler_main, tmpvar_9).xyz * clamp (
    ((((texture (sampler_blur2, tmpvar_9).xyz * scale2) + bias2) * 2.8) - 0.13)
  , 0.0, 1.0)), vec3(0.5, 0.5, 0.5));
  ret_3 = (tmpvar_10 * tmpvar_10);
  ret_3 = (ret_3 * vec3(0.9, 1.6, 2.3));
  ret_3 = (ret_3 * 3.0);
  ret_3 = (max (tmpvar_6, (0.8 * vec3(
    (0.5 * dot (ret_3, vec3(0.32, 0.49, 0.29)))
  ))) - (roam_sin.xyz * roam_cos.zxy));
  vec4 tmpvar_11;
  tmpvar_11.w = 1.0;
  tmpvar_11.xyz = ret_3;
  ret = tmpvar_11.xyz;
 }`}},function(o,l){o.exports={baseVals:{rating:0,gammaadj:1.35,decay:1,echo_zoom:2.144269,echo_alpha:.31,echo_orient:3,wave_mode:7,wave_brighten:0,wrap:0,wave_a:4.1,wave_scale:5.552,wave_smoothing:.504,modwavealphastart:.71,modwavealphaend:1.3,warpscale:1.331,zoom:.999514,cx:-1,warp:.72142,sy:.980296,wave_g:0,wave_b:0,ob_size:.5,ob_r:1,ib_size:.5,ib_r:1,ib_g:0,ib_b:0,mv_x:64,mv_y:48,mv_l:.85,mv_r:.5,mv_g:.5,mv_b:.5,mv_a:0},shapes:[{baseVals:{enabled:0}},{baseVals:{enabled:1,sides:5,textured:1,rad:.98608,tex_ang:3.14159,tex_zoom:.999794,g:1,b:1,r2:1,b2:1,a2:1,border_a:0},init_eqs_str:"",frame_eqs_str:"a.ang=Math.sin(div(a.time,65));"},{baseVals:{enabled:0}},{baseVals:{enabled:0}}],waves:[{baseVals:{enabled:0}},{baseVals:{enabled:0}},{baseVals:{enabled:0}},{baseVals:{enabled:0}}],init_eqs_str:"a.bl=0;a.tic=0;a.swi=0;a.q6=0;a.it=0;a.q1=0;a.q5=0;a.bvb=0;a.itar=0;a.mid_avg=0;a.tin=0;a.bass_avg=0;a.vav=0;a.rate=0;a.bd=0;a.q4=0;a.cha=0;a.ra=0;a.treb_avg=0;a.ul=0;a.db=0;a.gv=0;a.q2=0;a.iter=0;a.q3=0;a.vm=0;a.cma=0;a.cm=0;a.rb=0;",frame_eqs_str:`a.bl=3.8;a.ul=7.9;a.rate=11.9;a.cha=.01;a.gv=.00001<Math.abs(above(a.gv,a.bl))?.00001<Math.abs(below(a.gv,a.ul))?.00001<Math.abs(above(a.fps,a.rate))?a.gv+a.cha:a.gv-a.cha:a.ul-.1:a.bl+.1;a.monitor=a.gv;a.wave_a=0;a.tic=Math.min(a.time-a.tin,1);a.tin=a.time;a.ra=10;a.treb_avg=a.tic*(a.treb_avg*(div(1,a.tic)-a.ra)+a.ra*a.treb);a.mid_avg=a.tic*(a.mid_avg*(div(1,a.tic)-a.ra)+a.ra*a.mid);a.bass_avg=a.tic*(a.bass_avg*(div(1,a.tic)-a.ra)+a.ra*a.bass);a.rb=1;a.vav=a.tic*(a.vav*(div(1,
a.tic)-a.rb)+a.rb*(a.bass+a.treb+a.mid)*.33333);a.q1=a.treb_avg;a.q2=a.mid_avg;a.q3=a.bass_avg;a.db=a.bass-a.bass_avg;a.it=(a.it+a.tic)*below(a.it,1);a.rb=.5*div(1,a.tic);a.bvb=a.tic*(a.bass*a.rb+(div(1,a.tic)-a.rb)*a.bvb);a.bd=a.bass-a.bvb;a.vm=a.vm-a.tic+a.swi;a.swi=above(a.bd-a.vm,0);a.q4=1-a.swi;a.cm=.00001<Math.abs(above(a.iter,30)+equal(a.time,0))?randint(3)+1:a.cm;a.iter=(a.iter+a.tic)*(1-above(a.iter,30));a.q5=.00001<Math.abs(equal(a.cm,0))?3:a.cm;a.cma=.00001<Math.abs(above(a.itar,5)+equal(a.time,
0))?Math.floor(5*a.vav):a.cma;a.itar=(a.itar+a.tic)*(1-above(a.itar,5));a.q6=Math.floor(5*a.vav);a.decay=.97;a.zoom=1.01;a.sx=1;a.sy=1;`,pixel_eqs_str:"a.warp=a.bass;",warp:` shader_body { 
  vec3 ret_1;
  ret_1 = ((texture (sampler_main, uv_orig).xyz * vec3(0.97, 1.0, 0.97)) - vec3(0.03, 0.0, 0.03));
  vec4 tmpvar_2;
  tmpvar_2 = texture (sampler_blur1, uv_orig);
  ret_1.z = (ret_1.z + ((
    (tmpvar_2.xyz * scale1)
   + bias1).z * 0.45));
  ret_1.x = (ret_1.x + ((
    ((tmpvar_2.xyz * scale1) + bias1)
  .z * 0.05) + (
    ((texture (sampler_blur3, uv_orig).xyz * scale3) + bias3)
  .z * 0.05)));
  ret_1.z = (ret_1.z - ret_1.x);
  ret_1.y = clamp (texture (sampler_pw_main, uv_orig).y, 0.0, 1.0);
  ret_1 = (ret_1 * 0.98);
  vec4 tmpvar_3;
  tmpvar_3.w = 1.0;
  tmpvar_3.xyz = ret_1;
  ret = tmpvar_3.xyz;
 }`,comp:` shader_body { 
  vec3 ret_1;
  vec3 tmpvar_2;
  tmpvar_2.z = 0.0;
  tmpvar_2.xy = texsize.zw;
  vec3 tmpvar_3;
  tmpvar_3 = (tmpvar_2 * 2.5);
  ret_1 = (texture (sampler_main, uv).xyz * 0.5);
  ret_1 = (ret_1 + (vec3(3.4, 2.38, 1.02) * (
    dot (((texture (sampler_blur1, (uv + tmpvar_3.xz)).xyz * scale1) + bias1), vec3(0.32, 0.49, 0.29))
   - 
    dot (((texture (sampler_blur1, (uv - tmpvar_3.xz)).xyz * scale1) + bias1), vec3(0.32, 0.49, 0.29))
  )));
  ret_1 = (ret_1 + (vec3(0.68, 1.7, 2.38) * (
    dot (((texture (sampler_blur1, (uv + tmpvar_3.zy)).xyz * scale1) + bias1), vec3(0.32, 0.49, 0.29))
   - 
    dot (((texture (sampler_blur1, (uv - tmpvar_3.zy)).xyz * scale1) + bias1), vec3(0.32, 0.49, 0.29))
  )));
  ret_1 = (ret_1 * 1.5);
  vec4 tmpvar_4;
  tmpvar_4.w = 1.0;
  tmpvar_4.xyz = ret_1;
  ret = tmpvar_4.xyz;
 }`}},function(o,l){o.exports={baseVals:{rating:5,gammaadj:2.05,decay:.99,echo_zoom:1.008,echo_alpha:.5,echo_orient:1,wave_thick:1,wave_brighten:0,darken:1,wave_a:.625,wave_scale:1.187,wave_smoothing:0,modwavealphastart:.71,modwavealphaend:1.3,warpanimspeed:1.459,warpscale:2.007,fshader:.19,zoom:.9999,warp:.01,sx:.9999,wave_r:.5,wave_g:.5,wave_b:.5,ob_r:1,ob_g:1,ob_b:1,ib_size:.26,mv_x:64,mv_y:48,mv_l:.85,mv_r:.5,mv_g:.5,mv_b:.5,mv_a:.5},shapes:[{baseVals:{enabled:1,sides:9,thickoutline:1,textured:1,rad:.12566,ang:3.39292,tex_ang:.3768,tex_zoom:.32473,g:1,b:1,r2:1,b2:1,a2:1,border_r:.03,border_g:.67,border_b:.79,border_a:1},init_eqs_str:"a.q1=0;a.q2=0;a.q3=0;",frame_eqs_str:"a.x+=.13*Math.sin(.9*a.time);a.y+=.16*Math.sin(.5*a.time);a.border_r=a.q1;a.border_b=a.q2;a.border_g=a.q3;"},{baseVals:{enabled:1,sides:3,thickoutline:1,rad:.12572,a2:1,border_g:0,border_b:0,border_a:1},init_eqs_str:"a.q1=0;a.q2=0;a.q3=0;",frame_eqs_str:`a.rad=a.rad-.2+.2*a.bass_att;a.r=a.r+.25*Math.sin(1.1*a.time)+.2*Math.sin(.25*a.time);a.g=a.g+.25*Math.cos(1.5*a.time)+.22*Math.cos(.24*a.time);a.b=a.b+.25*Math.sin(.6*a.time)+.27*Math.cos(.7*a.time);a.r2=1-Math.abs(a.r);a.g2=1-Math.abs(a.g);a.b2=1-Math.abs(a.b);a.ang+=3*Math.abs(Math.tan(1*a.time));a.x=a.x+.14*Math.cos(a.time)+.2*Math.sin(.42*a.time);a.y=a.y+.16*Math.sin(1.2*a.time)+.15*Math.sin(.8*a.time)+.21*Math.cos(.45*a.time);a.border_r=a.q1;a.border_b=a.q2;a.border_g=
a.q3;`},{baseVals:{enabled:1,ang:.03,r:.21,g:.44,b:.23,r2:.18,b2:.11,a2:1,border_r:.15,border_g:.4,border_b:.48,border_a:1},init_eqs_str:"a.q1=0;a.q2=0;a.q3=0;",frame_eqs_str:"a.ang=2.4*a.time;a.x=.5+.22*Math.cos(3.3*a.time)+.14*Math.cos(1.2*a.time);a.y=.5+.26*Math.sin(3.1*a.time)+.13*Math.sin(1.7*a.time);a.r=.5+.5*Math.sin(1.013*a.time+5);a.g=.5+.5*Math.sin(1.063*a.time+2);a.b=.5+.5*Math.sin(1.054*a.time+1);a.r2=.5+.5*Math.sin(1.085*a.time+3);a.g2=.5+.5*Math.sin(1.056*a.time+1);a.b2=.5+.5*Math.sin(1.038*a.time+4);a.border_r=a.q1;a.border_b=a.q2;a.border_g=a.q3;"},{baseVals:{enabled:1,sides:5,x:.51,y:.49,rad:.09986,ang:.06283,a2:1,border_r:.46,border_g:.28,border_b:.54,border_a:1},init_eqs_str:"a.q4=0;a.q1=0;a.q2=0;a.q3=0;",frame_eqs_str:"a.x=.5+.07*Math.cos(.5*a.q4)+.31*Math.sin(3.5*a.time);a.y=.5+.07*Math.sin(.5*a.q4)+.31*Math.cos(3.5*a.time);a.r=.5+.5*Math.sin(1.013*a.time+2);a.g=.5+.5*Math.sin(.863*a.time+3);a.b=.5+.5*Math.sin(1.054*a.time+1);a.r2=.5+.5*Math.sin(1.185*a.time+3);a.g2=.5+.5*Math.sin(1.356*a.time+2);a.b2=.5+.5*Math.sin(.738*a.time+4);a.border_r=a.q1;a.border_b=a.q2;a.border_g=a.q3;"}],waves:[{baseVals:{enabled:0}},{baseVals:{enabled:0}},{baseVals:{enabled:0}},{baseVals:{enabled:0}}],init_eqs_str:"a.index2=0;a.xk=0;a.kiss=0;a.sw=0;a.yk=0;a.index=0;a.q22=0;a.q21=0;a.q29=0;a.q6=0;a.dt=0;a.y0=0;a.q1=0;a.dec_med=0;a.q5=0;a.index3=0;a.q9=0;a.x0=0;a.ax=0;a.rott=0;a.is_beat=0;a.q23=0;a.k1=0;a.q24=0;a.vx=0;a.dec_slow=0;a.q10=0;a.vy=0;a.q4=0;a.k2=0;a.q26=0;a.ay=0;a.p2=0;a.avg=0;a.beat=0;a.vol=0;a.p1=0;a.peak=0;a.q2=0;a.q27=0;a.q3=0;a.t0=0;a.m=0;a.q7=0;a.q28=0;a.v2=0;a.q20=0;a.q8=0;a.vol=0;a.p1=0;a.vx=.2;a.vy=-.1;a.kx=0;a.ky=0;",frame_eqs_str:`a.dec_med=pow(.96,div(30,a.fps));a.dec_slow=pow(.999,div(30,a.fps));a.beat=Math.max(Math.max(a.bass,a.mid),a.treb);a.avg=a.avg*a.dec_slow+a.beat*(1-a.dec_slow);a.is_beat=above(a.beat,.5+a.avg+a.peak)*above(a.time,a.t0+.2);a.t0=a.is_beat*a.time+(1-a.is_beat)*a.t0;a.peak=a.is_beat*a.beat+(1-a.is_beat)*a.peak*a.dec_med;a.index=mod(a.index+a.is_beat,8);a.index2=mod(a.index2+a.is_beat*bnot(a.index),2);a.index3=mod(a.index3+a.is_beat*bnot(a.index)*bnot(a.index2),2);a.q20=a.avg;a.q21=
a.beat;a.q22=a.peak;a.q23=a.index;a.q24=a.is_beat;a.vol=a.bass_att+a.treb_att;a.v2=a.v2*a.dec_med+a.vol*(1-a.dec_med);a.q26=Math.max(Math.atan(a.vol-a.v2),0);a.q27=a.index+1;a.sw=a.sw*a.dec_med+(1-a.dec_med)*mod(a.index2,2);a.q28=a.sw;a.kiss=a.kiss*a.dec_med+(1-a.dec_med)*bnot(a.index2)*below(a.index,4);a.q29=a.kiss;a.k1=a.is_beat*bnot(a.index);a.k2=a.is_beat*bnot(a.index);a.p1=a.k1*(a.p1+1)+(1-a.k1)*a.p1;a.p2=a.dec_med*a.p2+(1-a.dec_med)*a.p1;a.rott=div(3.1416*a.p2,2);a.monitor=a.k1;a.q1=Math.cos(a.rott);
a.q2=Math.sin(a.rott);a.q3=-a.q2;a.q4=a.q1;a.q5=Math.cos(div(a.time,4));a.q6=-Math.sin(div(a.time,4));a.q7=-a.q6;a.q8=a.q5;a.zoom=1;a.rot=-0;a.dt=div(3,a.fps);a.m=1;a.x0=0;a.y0=0;a.ax=div(-(a.xk-a.x0),a.m)+div(sign(a.vx+.001)*a.dt*a.bass,40);a.ay=div(-(a.yk-a.y0),a.m)+div(sign(a.vy+.001)*a.dt*a.treb,40);a.monitor=a.index3;a.vx=a.vx*a.dec_slow+a.ax*a.dt;a.vy=a.vy*a.dec_slow+a.ay*a.dt;a.xk+=a.vx*a.dt;a.yk+=a.vy*a.dt;a.q9=a.xk;a.q10=a.yk;`,pixel_eqs_str:"",pixel_eqs:"",warp:` shader_body { 
  vec2 tmpvar_1;
  tmpvar_1 = ((uv * texsize.xy) * 0.08);
  vec3 tmpvar_2;
  tmpvar_2 = (texture (sampler_main, (uv - (
    ((sin(tmpvar_1) / cos(tmpvar_1)) * texsize.zw)
   * 3.0))).xyz + (vec3(dot (texture (sampler_noise_lq, 
    ((((texsize.xy * texsize_noise_lq.zw).x * uv) * 0.02) + (0.1 * rand_frame).xy)
  ), vec4(0.32, 0.49, 0.29, 0.0))) / 30.0));
  vec4 tmpvar_3;
  tmpvar_3.w = 1.0;
  tmpvar_3.xyz = ((mix (tmpvar_2, 
    (1.0 - tmpvar_2.zyx)
  , vec3(0.01, 0.01, 0.01)) - 0.03) - (0.2 * pow (
    (1.0 - rad)
  , 18.0)));
  ret = tmpvar_3.xyz;
 }`,comp:` shader_body { 
  vec2 uv_1;
  vec2 tmpvar_2;
  tmpvar_2.x = cos(((uv.y * texsize.y) / 2.0));
  tmpvar_2.y = sin(((uv.x * texsize.x) / 2.0));
  uv_1 = (uv + ((2.0 * texsize.zw) * tmpvar_2));
  vec4 tmpvar_3;
  tmpvar_3.w = 1.0;
  tmpvar_3.xyz = (1.4 * pow ((
    clamp (((texture (sampler_blur1, uv_1).xyz * scale1) + bias1), 0.0, 1.0)
   * 
    (texture (sampler_pc_main, uv_1).xyz - ((texture (sampler_blur3, uv_1).xyz * scale3) + bias3))
  ), vec3(0.5, 0.5, 0.5)));
  ret = tmpvar_3.xyz;
 }`}},function(o,l){o.exports={baseVals:{rating:4,gammaadj:1.98,echo_zoom:2.448,echo_alpha:.5,wave_thick:1,wrap:0,wave_a:3.645,wave_scale:1.951,wave_smoothing:.5,wave_mystery:-.5,warpscale:2.853,zoomexp:2.1,zoom:1.025,warp:1.29077,wave_g:0,wave_b:0,ob_size:0,ob_a:1,ib_size:0,ib_r:0,ib_g:0,ib_b:0,mv_x:64,mv_y:48,mv_l:0,mv_b:0,mv_a:0},shapes:[{baseVals:{enabled:1,sides:100,rad:.13518,g2:0,a2:1,border_r:0,border_g:0,border_b:0,border_a:1},init_eqs_str:"a.q8=0;",frame_eqs_str:"a.x=.3+.05*Math.sin(.89*a.q8);a.y=.4-.05*Math.cos(.77*a.q8);a.r=.25+.25*Math.sin(.7679*a.time);a.g=.25+.25*Math.sin(.8079*a.time);a.b=.25+.25*Math.sin(.7339*a.time);a.r2=.25+.25*Math.sin(.6979*a.time);a.g2=.25+.25*Math.sin(.849*a.time);a.b2=.25+.25*Math.sin(.8079*a.time);"},{baseVals:{enabled:1,sides:100,rad:.06623,g2:0,a2:1,border_r:0,border_g:0,border_b:0,border_a:1},init_eqs_str:"a.q8=0;",frame_eqs_str:"a.x=.3-.05*Math.sin(.7089*a.q8);a.y=.4+.05*Math.cos(.5077*a.q8);a.r=.25+.25*Math.sin(.6479*a.time);a.g=.25+.25*Math.sin(.5079*a.time);a.b=.25+.25*Math.sin(.9339*a.time);a.r2=.25+.25*Math.sin(.779*a.time);a.g2=.25+.25*Math.sin(.707*a.time);a.b2=.25+.25*Math.sin(.747*a.time);"},{baseVals:{enabled:1,sides:100,rad:.03646,g2:0,a2:1,border_r:0,border_g:0,border_b:0,border_a:1},init_eqs_str:"a.q8=0;",frame_eqs_str:"a.x=.3+.05*Math.sin(.679*a.q8);a.y=.4-.05*Math.cos(.877*a.q8);a.r=.25+.25*Math.sin(.5679*a.time);a.g=.25+.25*Math.sin(.4079*a.time);a.b=.25+.25*Math.sin(1.1339*a.time);a.r2=.25+.25*Math.sin(.9979*a.time);a.g2=.25+.25*Math.sin(.891*a.time);a.b2=.25+.25*Math.sin(.713*a.time);"},{baseVals:{enabled:1,sides:100,rad:.0122,g2:0,a2:1,border_r:0,border_g:0,border_b:0,border_a:1},init_eqs_str:"a.q8=0;",frame_eqs_str:"a.x=.3+.05*Math.sin(.916*a.q8);a.y=.4-.05*Math.cos(.977*a.q8);a.r=.25+.25*Math.sin(1.1679*a.time);a.g=.25+.25*Math.sin(1.18079*a.time);a.b=.25+.25*Math.sin(1.17339*a.time);a.r2=.25+.25*Math.sin(1.16979*a.time);a.g2=.25+.25*Math.sin(1.1849*a.time);a.b2=.25+.25*Math.sin(1.81079*a.time);"}],waves:[{baseVals:{enabled:0}},{baseVals:{enabled:0}},{baseVals:{enabled:0}},{baseVals:{enabled:0}}],init_eqs_str:"a.myrad=0;a.q25=0;a.q12=0;a.q18=0;a.q22=0;a.q21=0;a.vt=0;a.q13=0;a.q15=0;a.q29=0;a.q6=0;a.q1=0;a.myx=0;a.q5=0;a.vb=0;a.q9=0;a.myy=0;a.oldq8=0;a.q31=0;a.q23=0;a.q24=0;a.q11=0;a.q10=0;a.q4=0;a.q16=0;a.mybass=0;a.q26=0;a.rd=0;a.q19=0;a.q17=0;a.q2=0;a.q27=0;a.q14=0;a.q3=0;a.vvm=0;a.q32=0;a.vvb=0;a.q7=0;a.q28=0;a.vm=0;a.q30=0;a.q20=0;a.vvt=0;a.q8=0;",frame_eqs_str:`a.vb=.95*a.vb+(1-a.vb)*pow(a.bass_att,2)*.02;a.vvb=.95*a.vvb+(1-a.vvb)*a.vb*.01;a.vm=.95*a.vm+(1-a.vm)*pow(a.mid_att,2)*.02;a.vvm=.95*a.vvm+(1-a.vvm)*a.vm*.01;a.vt=.95*a.vt+(1-a.vt)*pow(a.treb_att,2)*.02;a.vvt=.95*a.vvt+(1-a.vvt)*a.vt*.01;a.vvb=Math.min(1,Math.max(0,a.vvb));a.vvm=Math.min(1,Math.max(0,a.vvm));a.vvt=Math.min(1,Math.max(0,a.vvt));a.q1=2*a.vvb;a.q2=2*a.vvm;a.q3=2*a.vvt;a.q4=5*(a.q1+a.q2+a.q3);a.q5=5*(a.q1+a.q2+a.q3);a.q6=5*(a.q1+a.q2+a.q3);a.q7=5*(a.q1+a.q2+a.q3);
a.q8=5*(a.q1+a.q2+a.q3);a.q9=5*(a.q1+a.q2+a.q3);a.q10=5*(a.q1+a.q2+a.q3);a.q11=5*(a.q1+a.q2+a.q3);a.q12=5*(a.q1+a.q2+a.q3);a.q13=5*(a.q1+a.q2+a.q3);a.q14=5*(a.q1+a.q2+a.q3);a.q15=5*(a.q1+a.q2+a.q3);a.q16=5*(a.q1+a.q2+a.q3);a.q17=5*(a.q1+a.q2+a.q3);a.q18=5*(a.q1+a.q2+a.q3);a.q19=5*(a.q1+a.q2+a.q3);a.q20=5*(a.q1+a.q2+a.q3);a.q21=5*(a.q1+a.q2+a.q3);a.q22=5*(a.q1+a.q2+a.q3);a.q23=5*(a.q1+a.q2+a.q3);a.q24=5*(a.q1+a.q2+a.q3);a.q25=5*(a.q1+a.q2+a.q3);a.q26=5*(a.q1+a.q2+a.q3);a.q27=5*(a.q1+a.q2+a.q3);a.q28=
5*(a.q1+a.q2+a.q3);a.q29=5*(a.q1+a.q2+a.q3);a.q30=5*(a.q1+a.q2+a.q3);a.q31=5*(a.q1+a.q2+a.q3);a.q32=5*(a.q1+a.q2+a.q3);a.warp=0;a.rot=0;a.cx=.5;a.cy=.5;a.q1=.5+.1*Math.sin(a.time);a.q2=.5-.1*Math.cos(a.time);a.wave_a=0;a.decay=.95;a.q1=.5+.1*Math.sin(a.q8);a.q2=.5;a.q8=a.oldq8+.003*div(pow(1+1.2*a.bass+.4*a.bass_att+.1*a.treb+.1*a.treb_att+.1*a.mid+.1*a.mid_att,6),a.fps);a.oldq8=a.q8;a.mybass+=.01*(a.bass+a.bass_att);a.zoom=1.09;a.q1=.5+0*Math.sin(.12*a.q8);a.q2=.5-0*Math.cos(.177*a.q8);`,pixel_eqs_str:"a.myx=1.1*(a.x-a.q1);a.myy=1.1*(a.y-a.q2);a.myrad=a.myx*a.myx+a.myy*a.myy;a.dx=(.5+.02*Math.sin(a.q8))*div(a.myy,a.myrad+1);a.dy=-(.5+.02*Math.sin(.897*a.q8))*div(a.myx,a.myrad+1);a.rd=a.bass*a.rad;a.rot=div(a.rd,10);a.sy=1.02+div(a.rad,10);a.sx=a.sy-a.myrad;",warp:` shader_body { 
  vec2 tmpvar_1;
  tmpvar_1 = ((uv_orig - 0.5) * vec2(1.81, 1.81));
  vec2 tmpvar_2;
  tmpvar_2.x = ((tmpvar_1.x * tmpvar_1.x) - (tmpvar_1.y * tmpvar_1.y));
  tmpvar_2.y = ((2.0 * tmpvar_1.x) * tmpvar_1.y);
  vec4 tmpvar_3;
  tmpvar_3.w = 1.0;
  tmpvar_3.xyz = (texture (sampler_fc_main, (tmpvar_2 + vec2(0.448, 0.701))) - 0.004).xyz;
  ret = tmpvar_3.xyz;
 }`,comp:`vec3 xlat_mutableneu;
vec3 xlat_mutableret1;
 shader_body { 
  vec2 uv_1;
  float inten_2;
  float dist_3;
  vec2 uv2_4;
  uv_1 = (uv - 0.5);
  uv_1 = (uv_1 * aspect.xy);
  float tmpvar_5;
  tmpvar_5 = (time / 2.0);
  dist_3 = (1.0 - fract(tmpvar_5));
  inten_2 = ((sqrt(dist_3) * (1.0 - dist_3)) * 8.0);
  vec2 tmpvar_6;
  tmpvar_6.x = q1;
  tmpvar_6.y = q2;
  vec2 tmpvar_7;
  tmpvar_7 = fract(((
    ((3.0 * uv_1) * dist_3)
   + 0.5) + (tmpvar_6 * 0.05)));
  xlat_mutableneu = (texture (sampler_main, tmpvar_7).xyz - ((texture (sampler_blur1, 
    (tmpvar_7 + 0.003)
  ).xyz * scale1) + bias1));
  xlat_mutableret1 = max (vec3(0.0, 0.0, 0.0), (xlat_mutableneu * inten_2));
  uv2_4.x = ((uv_1.x * -0.4990803) - (uv_1.y * 0.8665558));
  uv2_4.y = ((uv_1.x * 0.8665558) + (uv_1.y * -0.4990803));
  dist_3 = (1.0 - fract((0.3333333 + tmpvar_5)));
  inten_2 = ((sqrt(dist_3) * (1.0 - dist_3)) * 8.0);
  vec2 tmpvar_8;
  tmpvar_8.x = q1;
  tmpvar_8.y = q2;
  vec2 tmpvar_9;
  tmpvar_9 = fract(((
    ((3.0 * uv2_4) * dist_3)
   + 0.5) + (tmpvar_8 * 0.05)));
  xlat_mutableneu = (texture (sampler_main, tmpvar_9).xyz - ((texture (sampler_blur1, 
    (tmpvar_9 + 0.003)
  ).xyz * scale1) + bias1));
  xlat_mutableret1 = max (xlat_mutableret1, (xlat_mutableneu * inten_2));
  uv2_4.x = ((uv_1.x * -0.5018377) - (uv_1.y * -0.8649619));
  uv2_4.y = ((uv_1.x * -0.8649619) + (uv_1.y * -0.5018377));
  dist_3 = (1.0 - fract((0.6666667 + tmpvar_5)));
  inten_2 = ((sqrt(dist_3) * (1.0 - dist_3)) * 8.0);
  vec2 tmpvar_10;
  tmpvar_10.x = q1;
  tmpvar_10.y = q2;
  vec2 tmpvar_11;
  tmpvar_11 = fract(((
    ((3.0 * uv2_4) * dist_3)
   + 0.5) + (tmpvar_10 * 0.05)));
  xlat_mutableneu = (texture (sampler_main, tmpvar_11).xyz - ((texture (sampler_blur1, 
    (tmpvar_11 + 0.003)
  ).xyz * scale1) + bias1));
  xlat_mutableret1 = max (xlat_mutableret1, (xlat_mutableneu * inten_2));
  uv2_4.x = ((uv_1.x * 0.9999949) - (uv_1.y * -0.003185092));
  uv2_4.y = ((uv_1.x * -0.003185092) + (uv_1.y * 0.9999949));
  dist_3 = (1.0 - fract((1.0 + tmpvar_5)));
  inten_2 = ((sqrt(dist_3) * (1.0 - dist_3)) * 8.0);
  vec2 tmpvar_12;
  tmpvar_12.x = q1;
  tmpvar_12.y = q2;
  vec2 tmpvar_13;
  tmpvar_13 = fract(((
    ((3.0 * uv2_4) * dist_3)
   + 0.5) + (tmpvar_12 * 0.05)));
  xlat_mutableneu = (texture (sampler_main, tmpvar_13).xyz - ((texture (sampler_blur1, 
    (tmpvar_13 + 0.003)
  ).xyz * scale1) + bias1));
  xlat_mutableret1 = max (xlat_mutableret1, (xlat_mutableneu * inten_2));
  vec4 tmpvar_14;
  tmpvar_14.w = 1.0;
  tmpvar_14.xyz = (xlat_mutableret1 * 4.0);
  ret = tmpvar_14.xyz;
 }`}},function(o,l){o.exports={baseVals:{rating:5,gammaadj:1,decay:1,echo_zoom:1,echo_orient:1,wave_thick:1,wave_brighten:0,wrap:0,brighten:1,wave_a:.401,wave_scale:3.177,wave_smoothing:0,wave_mystery:-.4,modwavealphastart:1,modwavealphaend:1,warpanimspeed:2.289,warpscale:5.472,zoomexp:.01,zoom:.9901,warp:1.8566,ob_size:.005,ob_a:1,ib_size:0,ib_r:1,ib_g:0,ib_b:0,ib_a:1,mv_x:64,mv_y:48,mv_l:0,mv_b:0,mv_a:0},shapes:[{baseVals:{enabled:1,sides:12,additive:1,num_inst:512,y:.55,rad:.034,tex_zoom:.7874,g:.45,g2:0,border_a:0},init_eqs_str:"a.my_z=0;a.d=0;a.y3=0;a.z2=0;a.y1=0;a.w=0;a.w2=0;a.t1=0;a.x1=0;a.rnd2=0;a.zoom=0;a.p=0;a.q1=0;a.q5=0;a.z3=0;a.w3=0;a.t3=0;a.my_x=0;a.x3=0;a.wv=0;a.my_y=0;a.q4=0;a.t=0;a.w1=0;a.i=0;a.x2=0;a.t2=0;a.l=0;a.y2=0;a.rnd4=0;a.wh=0;a.q2=0;a.z1=0;a.rnd3=0;a.rnd1=0;a.q3=0;a.t4=0;a.started=0;a.t1=.412;a.t2=.4563;a.t3=.6452;a.t4=.2565;",frame_eqs_str:`a.rnd1=.00001<Math.abs(equal(a.instance,0))?a.t1:a.rnd1;a.rnd2=.00001<Math.abs(equal(a.instance,0))?a.t2:a.rnd2;a.rnd3=.00001<Math.abs(equal(a.instance,0))?a.t3:a.rnd3;a.rnd4=.00001<Math.abs(equal(a.instance,0))?a.t4:a.rnd4;a.rnd1=4*a.rnd1*(1-a.rnd1);a.rnd2=4*a.rnd2*(1-a.rnd2);a.rnd3=4*a.rnd3*(1-a.rnd3);a.rnd4=4*a.rnd4*(1-a.rnd4);a.t=.6;a.t=a.rnd1+a.time*a.t-Math.floor(a.rnd1+a.time*a.t);a.t+=.1*a.rnd2;a.wh=a.rnd4*Math.asin(1)*4;a.wv=.25+.1*a.rnd3;a.d=1.4;a.zoom=1;a.l=1;a.w1=
a.q3;a.w2=a.q4;a.w3=a.q5;a.i=a.instance;a.my_x=a.t*Math.cos(a.wh)*Math.sin(a.wv)*a.l;a.my_y=(-.5+(a.t-.75)*(a.t-.75))*Math.cos(a.wv)*a.l;a.my_z=a.t*Math.sin(a.wh)*Math.sin(a.wv)*a.l;a.x1=Math.cos(a.w1)*a.my_x+Math.sin(a.w1)*a.my_y;a.y1=-Math.sin(a.w1)*a.my_x+Math.cos(a.w1)*a.my_y;a.z1=a.my_z;a.x2=Math.cos(a.w2)*a.x1+Math.sin(a.w2)*a.z1;a.z2=-Math.sin(a.w2)*a.x1+Math.cos(a.w2)*a.z1;a.y2=a.y1;a.y3=Math.cos(a.w3)*a.y2+Math.sin(a.w3)*a.z2;a.z3=-Math.sin(a.w3)*a.y2+Math.cos(a.w3)*a.z2;a.x3=a.x2;a.l=sqrt(a.x3*
a.x3+a.y3*a.y3);a.w=Math.atan2(a.x3,a.y3);a.p=Math.tan(Math.asin(1)+Math.atan2(a.d+a.z3,a.l));a.d=sqrt(a.x3*a.x3+a.y3*a.y3+(a.z3+a.d)*(a.z3+a.d));a.rad=div(a.rad,a.d);a.my_x=a.zoom*Math.sin(a.w)*a.p;a.my_y=a.zoom*Math.cos(a.w)*a.p;a.x=.5+a.my_x;a.y=.5+a.my_y;a.x=.5+div(a.x-.5,a.q2);a.y=.5+div(a.y-.5,a.q1);`},{baseVals:{enabled:0}},{baseVals:{enabled:0}},{baseVals:{enabled:0}}],waves:[{baseVals:{enabled:0}},{baseVals:{enabled:0}},{baseVals:{enabled:0}},{baseVals:{enabled:0}}],init_eqs_str:"a.q1=0;a.q2=0;a.b=0;a.m=0;a.t=0;a.q3=0;a.q4=0;a.q5=0;",frame_eqs_str:"a.wave_a=0;a.q1=a.aspectx;a.q2=a.aspecty;a.b+=a.bass*a.bass*.85;a.m+=a.mid*a.mid*.85;a.t+=a.treb*a.treb*.85;a.q3=.012*a.b;a.q4=.012*a.m;a.q5=.012*a.t;",pixel_eqs_str:"",pixel_eqs:"",warp:` shader_body { 
  vec2 my_uv_1;
  vec3 ret_2;
  vec2 tmpvar_3;
  tmpvar_3 = (vec2(1280.0, 1024.0) * texsize.zw);
  float tmpvar_4;
  vec2 tmpvar_5;
  tmpvar_5 = (uv + vec2(0.005, 0.0));
  vec2 tmpvar_6;
  tmpvar_6 = (uv - vec2(0.005, 0.0));
  tmpvar_4 = (((
    (texture (sampler_blur2, tmpvar_5).xyz * scale2)
   + bias2) - (
    (texture (sampler_blur2, tmpvar_6).xyz * scale2)
   + bias2)).x * tmpvar_3.x);
  float tmpvar_7;
  vec2 tmpvar_8;
  tmpvar_8 = (uv + vec2(0.0, 0.005));
  vec2 tmpvar_9;
  tmpvar_9 = (uv - vec2(0.0, 0.005));
  tmpvar_7 = (((
    (texture (sampler_blur2, tmpvar_8).xyz * scale2)
   + bias2) - (
    (texture (sampler_blur2, tmpvar_9).xyz * scale2)
   + bias2)).x * tmpvar_3.y);
  vec2 tmpvar_10;
  tmpvar_10.x = tmpvar_4;
  tmpvar_10.y = tmpvar_7;
  vec2 tmpvar_11;
  tmpvar_11.x = (((
    (texture (sampler_blur2, tmpvar_5).xyz * scale2)
   + bias2) - (
    (texture (sampler_blur2, tmpvar_6).xyz * scale2)
   + bias2)).x * tmpvar_3.x);
  tmpvar_11.y = (((
    (texture (sampler_blur2, tmpvar_8).xyz * scale2)
   + bias2) - (
    (texture (sampler_blur2, tmpvar_9).xyz * scale2)
   + bias2)).x * tmpvar_3.y);
  ret_2.x = texture (sampler_fw_main, ((uv - (tmpvar_10 * 0.01)) + (tmpvar_11 * 0.003))).x;
  vec4 tmpvar_12;
  tmpvar_12 = texture (sampler_blur3, uv);
  ret_2.x = (ret_2.x + ((ret_2.x - 
    ((tmpvar_12.xyz * scale3) + bias3)
  .x) * 0.1));
  ret_2.x = (ret_2.x + 0.004);
  vec2 tmpvar_13;
  tmpvar_13.x = tmpvar_7;
  tmpvar_13.y = -(tmpvar_4);
  my_uv_1 = (uv + ((tmpvar_13 * 0.05) * (1.2 - 
    ((tmpvar_12.xyz * scale3) + bias3)
  .y)));
  ret_2.z = texture (sampler_fw_main, my_uv_1).z;
  vec2 x_14;
  x_14 = (my_uv_1 - uv);
  ret_2.z = (ret_2.z + ((
    ((ret_2.z - ((texture (sampler_blur1, uv).xyz * scale1) + bias1).z) * sqrt(dot (x_14, x_14)))
   * 180.0) / sqrt(
    dot (tmpvar_3, tmpvar_3)
  )));
  ret_2.z = (ret_2.z * 0.8);
  ret_2.z = (ret_2.z + 0.004);
  vec2 tmpvar_15;
  tmpvar_15.x = -(tmpvar_7);
  tmpvar_15.y = tmpvar_4;
  my_uv_1 = (tmpvar_15 * 0.045);
  vec2 tmpvar_16;
  tmpvar_16.x = (((
    (texture (sampler_blur2, (uv + vec2(0.01, 0.0))).xyz * scale2)
   + bias2) - (
    (texture (sampler_blur2, (uv - vec2(0.01, 0.0))).xyz * scale2)
   + bias2)).y * tmpvar_3.x);
  tmpvar_16.y = (((
    (texture (sampler_blur2, (uv + vec2(0.0, 0.01))).xyz * scale2)
   + bias2) - (
    (texture (sampler_blur2, (uv - vec2(0.0, 0.01))).xyz * scale2)
   + bias2)).y * tmpvar_3.y);
  my_uv_1 = (my_uv_1 + (uv - (tmpvar_16 * 0.03)));
  ret_2.y = texture (sampler_fw_main, my_uv_1).y;
  ret_2.y = (ret_2.y + ((
    (ret_2.y - ((texture (sampler_blur3, my_uv_1).xyz * scale3) + bias3).y)
   * 0.1) + 0.01));
  vec4 tmpvar_17;
  tmpvar_17.w = 1.0;
  tmpvar_17.xyz = ret_2;
  ret = tmpvar_17.xyz;
 }`,comp:` shader_body { 
  vec2 uv1_1;
  vec3 tmpvar_2;
  tmpvar_2 = texture (sampler_main, uv).xyz;
  vec2 tmpvar_3;
  tmpvar_3.y = 0.0;
  tmpvar_3.x = texsize.z;
  vec2 tmpvar_4;
  tmpvar_4.x = 0.0;
  tmpvar_4.y = texsize.w;
  vec2 tmpvar_5;
  tmpvar_5.x = (texture (sampler_main, (uv - tmpvar_3)).xyz - texture (sampler_main, (uv + tmpvar_3)).xyz).x;
  tmpvar_5.y = (texture (sampler_main, (uv - tmpvar_4)).xyz - texture (sampler_main, (uv + tmpvar_4)).xyz).x;
  uv1_1 = ((0.3 * cos(
    (((uv - 0.5) * 2.0) + 1.7)
  )) - (2.0 * tmpvar_5));
  vec4 tmpvar_6;
  tmpvar_6.w = 1.0;
  tmpvar_6.xyz = ((-(tmpvar_2) / 4.0) + ((6.0 * vec3(
    clamp ((0.03 / sqrt(dot (uv1_1, uv1_1))), 0.0, 1.0)
  )) * (-0.08 + tmpvar_2)));
  ret = tmpvar_6.xyz;
 }`}},function(o,l){o.exports={baseVals:{rating:2,decay:.99,wave_brighten:0,wave_a:1,wave_scale:.01,wave_mystery:-.2,warpanimspeed:3.434,warpscale:1.295,zoom:1.025,warp:.11284,wave_r:0,wave_g:0,wave_b:0,ob_size:.005,ob_b:1,ob_a:1,mv_x:64,mv_y:48,mv_l:5,mv_g:0,mv_b:0},shapes:[{baseVals:{enabled:0}},{baseVals:{enabled:0}},{baseVals:{enabled:0}},{baseVals:{enabled:0}}],waves:[{baseVals:{enabled:0}},{baseVals:{enabled:0}},{baseVals:{enabled:0}},{baseVals:{enabled:0}}],init_eqs_str:"a.d=0;a.cx1=0;a.y3=0;a.y1=0;a.cy1=0;a.q25=0;a.q12=0;a.q18=0;a.x1=0;a.q22=0;a.q21=0;a.vt=0;a.q13=0;a.q15=0;a.q29=0;a.q6=0;a.q1=0;a.q5=0;a.vb=0;a.q9=0;a.x3=0;a.q31=0;a.q23=0;a.q24=0;a.q11=0;a.q10=0;a.q4=0;a.dir=0;a.q16=0;a.q26=0;a.x2=0;a.q19=0;a.q17=0;a.y2=0;a.q2=0;a.q27=0;a.q14=0;a.q3=0;a.vvm=0;a.q32=0;a.vvb=0;a.q7=0;a.q28=0;a.vm=0;a.q30=0;a.q20=0;a.vvt=0;a.q8=0;",frame_eqs_str:`a.vb=.95*a.vb+(1-a.vb)*pow(a.bass_att,2)*.02;a.vvb=.95*a.vvb+(1-a.vvb)*a.vb*.01;a.vm=.95*a.vm+(1-a.vm)*pow(a.mid_att,2)*.02;a.vvm=.95*a.vvm+(1-a.vvm)*a.vm*.01;a.vt=.95*a.vt+(1-a.vt)*pow(a.treb_att,2)*.02;a.vvt=.95*a.vvt+(1-a.vvt)*a.vt*.01;a.vvb=Math.min(1,Math.max(0,a.vvb));a.vvm=Math.min(1,Math.max(0,a.vvm));a.vvt=Math.min(1,Math.max(0,a.vvt));a.q1=10*(a.vvb+a.vvm+a.vvt);a.q2=10*(a.vvb+a.vvm+a.vvt);a.q3=10*(a.vvb+a.vvm+a.vvt);a.q4=10*(a.vvb+a.vvm+a.vvt);a.q5=10*(a.vvb+a.vvm+
a.vvt);a.q6=10*(a.vvb+a.vvm+a.vvt);a.q7=10*(a.vvb+a.vvm+a.vvt);a.q8=10*(a.vvb+a.vvm+a.vvt);a.q9=10*(a.vvb+a.vvm+a.vvt);a.q10=10*(a.vvb+a.vvm+a.vvt);a.q11=10*(a.vvb+a.vvm+a.vvt);a.q12=10*(a.vvb+a.vvm+a.vvt);a.q13=10*(a.vvb+a.vvm+a.vvt);a.q14=10*(a.vvb+a.vvm+a.vvt);a.q15=10*(a.vvb+a.vvm+a.vvt);a.q16=10*(a.vvb+a.vvm+a.vvt);a.q17=10*(a.vvb+a.vvm+a.vvt);a.q18=10*(a.vvb+a.vvm+a.vvt);a.q19=10*(a.vvb+a.vvm+a.vvt);a.q20=10*(a.vvb+a.vvm+a.vvt);a.q21=10*(a.vvb+a.vvm+a.vvt);a.q22=10*(a.vvb+a.vvm+a.vvt);a.q23=
10*(a.vvb+a.vvm+a.vvt);a.q24=10*(a.vvb+a.vvm+a.vvt);a.q25=10*(a.vvb+a.vvm+a.vvt);a.q26=10*(a.vvb+a.vvm+a.vvt);a.q27=10*(a.vvb+a.vvm+a.vvt);a.q28=10*(a.vvb+a.vvm+a.vvt);a.q29=10*(a.vvb+a.vvm+a.vvt);a.q30=10*(a.vvb+a.vvm+a.vvt);a.q31=10*(a.vvb+a.vvm+a.vvt);a.q32=10*(a.vvb+a.vvm+a.vvt);a.zoom=.995;a.wave_a=0;a.mv_g=.45+.3*Math.sin(1.33*a.time)+.25*Math.sin(a.treb);a.mv_r=.45+.3*Math.sin(1.13*a.time)+.0825*(a.bass+a.treb+a.mid);a.mv_b=.45+.3*Math.sin(1.23*a.time)+.25*Math.sin(a.bass);a.mv_dx=.1*Math.sin(.1*
a.time);a.mv_dy=.13*Math.cos(.084*a.time);a.mv_x=64-Math.floor(32*(Math.sin(1.5*a.time)+1));a.mv_y=48-Math.floor(22*(Math.cos(1.5*a.time)+1));a.monitor=a.mv_y;`,pixel_eqs_str:`a.cx1=.5+.2*Math.sin(.618*a.time);a.cy1=.5+.2*Math.cos(1.618*a.time);a.dir=a.bass;a.d=sqrt((a.x-a.cx1)*(a.x-a.cx1)+(a.y-a.cy1)*(a.y-a.cy1));a.x1=.00001<Math.abs(above(a.d,.3))?0:.05*Math.sin(a.y-a.cy1)*a.dir;a.y1=.00001<Math.abs(above(a.d,.3))?0:.05*-Math.sin(a.x-a.cx1)*a.dir;a.cx1=.5+.3*Math.sin(2.618*a.time);a.cy1=.5+.3*Math.cos(3.14*a.time);a.dir=2*-a.mid;a.d=sqrt((a.x-a.cx1)*(a.x-a.cx1)+(a.y-a.cy1)*(a.y-a.cy1));a.x2=.00001<Math.abs(above(a.d,.2))?0:.05*Math.sin(a.y-a.cy1)*
a.dir;a.y2=.00001<Math.abs(above(a.d,.2))?0:.05*-Math.sin(a.x-a.cx1)*a.dir;a.cx1=.5+.4*Math.sin(2.618*-a.time);a.cy1=.5+.4*Math.cos(1.14*-a.time);a.dir=3*a.treb;a.d=sqrt((a.x-a.cx1)*(a.x-a.cx1)+(a.y-a.cy1)*(a.y-a.cy1));a.x3=.00001<Math.abs(above(a.d,.1))?0:.05*Math.sin(a.y-a.cy1)*a.dir;a.y3=.00001<Math.abs(above(a.d,.1))?0:.05*-Math.sin(a.x-a.cx1)*a.dir;a.dx=a.dx+a.x1+a.x2+a.x3;a.dy=a.dy+a.y1+a.y2+a.y3;`,warp:` shader_body { 
  vec2 tmpvar_1;
  tmpvar_1 = mix (uv_orig, uv, vec2(0.3, 0.3));
  vec2 tmpvar_2;
  tmpvar_2 = (texsize.zw * 3.0);
  vec2 tmpvar_3;
  tmpvar_3.x = dot (((
    (texture (sampler_blur1, (tmpvar_1 + (vec2(1.0, 0.0) * tmpvar_2))).xyz * scale1)
   + bias1) - (
    (texture (sampler_blur1, (tmpvar_1 - (vec2(1.0, 0.0) * tmpvar_2))).xyz * scale1)
   + bias1)), vec3(0.32, 0.49, 0.29));
  tmpvar_3.y = dot (((
    (texture (sampler_blur1, (tmpvar_1 + (vec2(0.0, 1.0) * tmpvar_2))).xyz * scale1)
   + bias1) - (
    (texture (sampler_blur1, (tmpvar_1 - (vec2(0.0, 1.0) * tmpvar_2))).xyz * scale1)
   + bias1)), vec3(0.32, 0.49, 0.29));
  vec4 tmpvar_4;
  tmpvar_4.w = 1.0;
  tmpvar_4.xyz = (texture (sampler_fc_main, (tmpvar_1 + (
    (tmpvar_3 * texsize.zw)
   * 9.0))) - 0.01).xyz;
  ret = tmpvar_4.xyz;
 }`,comp:` shader_body { 
  vec2 uv_1;
  vec3 ret_2;
  uv_1 = (0.5 + ((uv - 0.5) * 0.98));
  vec2 tmpvar_3;
  tmpvar_3 = (texsize.zw * 4.0);
  vec3 tmpvar_4;
  tmpvar_4 = (((texture (sampler_blur1, 
    (uv_1 + (vec2(1.0, 0.0) * tmpvar_3))
  ).xyz * scale1) + bias1) - ((texture (sampler_blur1, 
    (uv_1 - (vec2(1.0, 0.0) * tmpvar_3))
  ).xyz * scale1) + bias1));
  vec3 tmpvar_5;
  tmpvar_5 = (((texture (sampler_blur1, 
    (uv_1 + (vec2(0.0, 1.0) * tmpvar_3))
  ).xyz * scale1) + bias1) - ((texture (sampler_blur1, 
    (uv_1 - (vec2(0.0, 1.0) * tmpvar_3))
  ).xyz * scale1) + bias1));
  vec3 tmpvar_6;
  tmpvar_6.z = 0.0;
  tmpvar_6.x = dot (tmpvar_4, vec3(0.32, 0.49, 0.29));
  tmpvar_6.y = dot (tmpvar_5, vec3(0.32, 0.49, 0.29));
  vec4 tmpvar_7;
  tmpvar_7 = texture (sampler_noisevol_hq, ((vec3(0.05, 0.05, 0.0) * (
    ((uv_1.xyy + (tmpvar_6 * 0.5)) * texsize.xyy)
   * texsize_noisevol_hq.zww)) + (vec3(0.0, 0.0, 0.2) * time)));
  vec2 tmpvar_8;
  tmpvar_8.x = dot (tmpvar_4, vec3(0.32, 0.49, 0.29));
  tmpvar_8.y = dot (tmpvar_5, vec3(0.32, 0.49, 0.29));
  uv_1 = (uv_1 - (tmpvar_8 * 0.04));
  ret_2 = (abs((
    ((texture (sampler_main, uv_1).xyz + ((texture (sampler_blur1, uv_1).xyz * scale1) + bias1)) - ((texture (sampler_blur2, uv_1).xyz * scale2) + bias2))
   - 
    ((texture (sampler_blur3, uv_1).xyz * scale3) + bias3)
  )) * (dot (tmpvar_7, vec4(0.32, 0.49, 0.29, 0.0)) * 3.0));
  vec3 tmpvar_9;
  tmpvar_9 = pow (ret_2, vec3(0.5, 0.5, 0.5));
  ret_2 = tmpvar_9;
  vec4 tmpvar_10;
  tmpvar_10.w = 1.0;
  tmpvar_10.xyz = tmpvar_9;
  ret = tmpvar_10.xyz;
 }`}},function(o,l){o.exports={baseVals:{rating:3,echo_zoom:1,wave_mode:1,wave_thick:1,wrap:0,invert:1,wave_scale:.5,wave_smoothing:.45,warpanimspeed:2.217,warpscale:100,zoomexp:100,zoom:1.01,warp:1.25946,wave_r:0,wave_g:0,wave_b:0,ob_r:1,ob_g:1,ob_b:1,ob_a:1,ib_r:1,ib_g:1,ib_b:1,mv_a:0},shapes:[{baseVals:{enabled:0}},{baseVals:{enabled:0}},{baseVals:{enabled:0}},{baseVals:{enabled:0}}],waves:[{baseVals:{enabled:0}},{baseVals:{enabled:0}},{baseVals:{enabled:0}},{baseVals:{enabled:0}}],init_eqs_str:"a.q1=0;",frame_eqs_str:"a.q1=.0003*pow(1.2+1*a.bass+.4*a.bass_att+.1*a.treb+.1*a.treb_att+.1*a.mid+.1*a.mid_att,6);a.monitor=a.q1;a.wave_r+=.5*Math.sin(1.13*a.time);a.wave_g+=.5*Math.sin(1.23*a.time);a.wave_b+=.5*Math.sin(1.33*a.time);a.ob_r+=Math.sin(2.26*a.time);a.ob_g+=Math.sin(2.46*a.time);a.ob_b+=Math.sin(2.66*a.time);",pixel_eqs_str:"a.zoom+=.125*Math.sin(a.q1);a.rot+=div(.25*Math.sin(100*a.fps)*a.q1,2);a.zoom-=.05*Math.sin(a.rad);a.rot+=.05*Math.sin(5*a.fps);",warp:` shader_body { 
  vec3 ret_1;
  vec2 tmpvar_2;
  tmpvar_2 = fract(uv);
  vec2 tmpvar_3;
  tmpvar_3 = (((uv_orig * texsize.xy) * texsize_noise_lq.zw) + rand_frame.xy);
  vec2 tmpvar_4;
  tmpvar_4 = (texsize.zw * 12.0);
  vec3 tmpvar_5;
  tmpvar_5 = (((2.0 * 
    ((texture (sampler_blur3, (uv_orig + (vec2(1.0, 0.0) * tmpvar_4))).xyz * scale3) + bias3)
  ) - (2.0 * 
    ((texture (sampler_blur3, (uv_orig - (vec2(1.0, 0.0) * tmpvar_4))).xyz * scale3) + bias3)
  )) * 0.5);
  vec3 tmpvar_6;
  tmpvar_6 = (((2.0 * 
    ((texture (sampler_blur3, (uv_orig + (vec2(0.0, 1.0) * tmpvar_4))).xyz * scale3) + bias3)
  ) - (2.0 * 
    ((texture (sampler_blur3, (uv_orig - (vec2(0.0, 1.0) * tmpvar_4))).xyz * scale3) + bias3)
  )) * 0.5);
  ret_1.x = ((texture (sampler_fc_main, tmpvar_2).x - (
    (((texture (sampler_blur3, tmpvar_2).xyz * scale3) + bias3) - texture (sampler_fc_main, tmpvar_2).xyz)
  .x * 0.1)) - 0.035);
  vec2 tmpvar_7;
  tmpvar_7.x = tmpvar_5.x;
  tmpvar_7.y = tmpvar_6.x;
  vec2 tmpvar_8;
  tmpvar_8.x = tmpvar_5.y;
  tmpvar_8.y = tmpvar_6.y;
  ret_1.y = (((texture (sampler_fc_main, 
    (((uv_orig + (
      ((texture (sampler_noise_lq, tmpvar_3).xy - 0.5) * texsize.zw)
     * 4.0)) - ((tmpvar_7 * texsize.zw) * 4.0)) + ((tmpvar_8 * texsize.zw) * 8.0))
  ).y + 
    ((texture (sampler_noise_lq, tmpvar_3).xyz - 0.5) * 0.1)
  ) - 0.012) + (texture (sampler_pc_main, uv_orig).z * 0.2)).x;
  vec2 tmpvar_9;
  tmpvar_9.x = tmpvar_6.x;
  tmpvar_9.y = -(tmpvar_5.x);
  vec2 tmpvar_10;
  tmpvar_10 = ((uv_orig + (
    ((texture (sampler_noise_lq, tmpvar_3).xy - 0.5) * texsize.zw)
   * 2.0)) + ((tmpvar_9 * texsize.zw) * 64.0));
  ret_1.z = (((
    (texture (sampler_fc_main, tmpvar_10).z + ((texture (sampler_fc_main, tmpvar_10).z - (
      (texture (sampler_blur2, tmpvar_10).xyz * scale2)
     + bias2).z) * 0.2))
   + 
    (texture (sampler_noise_lq, tmpvar_3).xyz * 0.1)
  ) - (
    (texture (sampler_blur3, uv_orig).xyz * scale3)
   + bias3).x) - (clamp (
    (1.0 - ((texture (sampler_blur2, uv_orig).xyz * scale2) + bias2).x)
  , 0.0, 1.0) * 0.04)).x;
  vec4 tmpvar_11;
  tmpvar_11.w = 1.0;
  tmpvar_11.xyz = ret_1;
  ret = tmpvar_11.xyz;
 }`,comp:`vec2 xlat_mutabled;
vec3 xlat_mutabledx;
vec3 xlat_mutabledy;
 shader_body { 
  vec3 ret_1;
  xlat_mutabled = (texsize.zw * 1.5);
  xlat_mutabledx = (texture (sampler_main, (uv_orig + (vec2(1.0, 0.0) * xlat_mutabled))).xyz - texture (sampler_main, (uv_orig - (vec2(1.0, 0.0) * xlat_mutabled))).xyz);
  xlat_mutabledy = (texture (sampler_main, (uv_orig + (vec2(0.0, 1.0) * xlat_mutabled))).xyz - texture (sampler_main, (uv_orig - (vec2(0.0, 1.0) * xlat_mutabled))).xyz);
  vec2 tmpvar_2;
  tmpvar_2.x = xlat_mutabledx.y;
  tmpvar_2.y = xlat_mutabledy.y;
  vec2 x_3;
  x_3 = (tmpvar_2 * 8.0);
  ret_1 = (((texture (sampler_main, uv).x * 
    (1.0 - sqrt(dot (x_3, x_3)))
  ) * pow (hue_shader, vec3(6.0, 6.0, 6.0))) * 1.4);
  vec2 tmpvar_4;
  tmpvar_4.x = xlat_mutabledx.z;
  tmpvar_4.y = xlat_mutabledy.z;
  vec2 x_5;
  x_5 = (tmpvar_4 * 4.0);
  vec3 tmpvar_6;
  tmpvar_6 = mix (ret_1, vec3(1.0, 1.0, 1.0), vec3(sqrt(dot (x_5, x_5))));
  ret_1 = tmpvar_6;
  vec4 tmpvar_7;
  tmpvar_7.w = 1.0;
  tmpvar_7.xyz = tmpvar_6;
  ret = tmpvar_7.xyz;
 }`}},function(o,l){o.exports={baseVals:{rating:3,gammaadj:1.3,decay:1,echo_zoom:1.75,echo_alpha:.15,echo_orient:3,wave_mode:1,wave_dots:1,darken:1,wave_scale:.5,wave_smoothing:.9,warp:.01,mv_l:5},shapes:[{baseVals:{enabled:1,sides:100,border_a:0},init_eqs_str:"a.q1=0;",frame_eqs_str:"a.r+=Math.sin(.339*a.time);a.g+=Math.sin(.369*a.time);a.b+=Math.sin(.399*a.time);a.r2+=Math.sin(.113*a.time);a.g2+=Math.sin(.123*a.time);a.b2+=Math.sin(.133*a.time);a.rad=div(a.q1,3);"},{baseVals:{enabled:0}},{baseVals:{enabled:0}},{baseVals:{enabled:0}}],waves:[{baseVals:{enabled:0}},{baseVals:{enabled:0}},{baseVals:{enabled:0}},{baseVals:{enabled:0}}],init_eqs_str:"a.q1=0;",frame_eqs_str:"a.q1=.0003*pow(1+1.2*a.bass+.4*a.bass_att+.1*a.treb+.1*a.treb_att+.1*a.mid+.1*a.mid_att,6);a.mv_a=a.q1;a.mv_x+=Math.sin(a.time);a.mv_y+=Math.cos(a.time);a.mv_dx+=1.25*Math.sin(8*a.fps);a.mv_dy+=1.35*Math.sin(8*a.fps);a.mv_r+=Math.sin(.565*a.time);a.mv_g+=Math.sin(.615*a.time);a.mv_b+=Math.sin(.665*a.time);a.wave_r+=.5*Math.sin(1.13*a.time);a.wave_g+=.5*Math.sin(1.23*a.time);a.wave_b+=.5*Math.sin(1.33*a.time);",pixel_eqs_str:"a.zoom+=.0125*a.q1;a.rot+=.025*Math.sin(10*a.fps)*a.q1;a.warp=0;",warp:` shader_body { 
  vec2 my_uv_1;
  vec3 ret_2;
  vec3 tmpvar_3;
  tmpvar_3 = ((640.0 * texsize.z) * ((2.0 * 
    ((texture (sampler_blur2, (uv + vec2(0.01, 0.0))).xyz * scale2) + bias2)
  ) - (2.0 * 
    ((texture (sampler_blur2, (uv - vec2(0.01, 0.0))).xyz * scale2) + bias2)
  )));
  vec3 tmpvar_4;
  tmpvar_4 = ((512.0 * texsize.w) * ((2.0 * 
    ((texture (sampler_blur2, (uv + vec2(0.0, 0.01))).xyz * scale2) + bias2)
  ) - (2.0 * 
    ((texture (sampler_blur2, (uv - vec2(0.0, 0.01))).xyz * scale2) + bias2)
  )));
  vec2 tmpvar_5;
  tmpvar_5.x = tmpvar_3.y;
  tmpvar_5.y = tmpvar_4.y;
  vec2 tmpvar_6;
  tmpvar_6.x = tmpvar_3.x;
  tmpvar_6.y = tmpvar_4.x;
  vec2 tmpvar_7;
  tmpvar_7.x = tmpvar_4.y;
  tmpvar_7.y = -(tmpvar_3.y);
  vec2 tmpvar_8;
  tmpvar_8 = (uv - ((
    ((tmpvar_5 * 0.3) + (tmpvar_6 * 0.1))
   + 
    (tmpvar_7 * 0.01)
  ) * 0.01));
  ret_2.x = texture (sampler_fw_main, (tmpvar_8 - floor(tmpvar_8))).x;
  ret_2.x = (ret_2.x + ((
    (2.0 * ret_2.x)
   - 
    (2.0 * ((texture (sampler_blur1, tmpvar_8).xyz * scale1) + bias1).x)
  ) * 0.25));
  vec2 tmpvar_9;
  tmpvar_9.x = tmpvar_3.y;
  tmpvar_9.y = tmpvar_4.y;
  vec2 tmpvar_10;
  tmpvar_10.x = tmpvar_4.x;
  tmpvar_10.y = -(tmpvar_3.y);
  my_uv_1 = ((uv - (tmpvar_9 * 0.01)) + (tmpvar_10 * 0.001));
  ret_2.y = texture (sampler_fw_main, (my_uv_1 - floor(my_uv_1))).y;
  ret_2.y = (ret_2.y + ((
    ((2.0 * ret_2.y) - (2.0 * ((texture (sampler_blur3, my_uv_1).xyz * scale3) + bias3).y))
   * 0.025) + 0.01));
  vec4 tmpvar_11;
  tmpvar_11.w = 1.0;
  tmpvar_11.xyz = ret_2;
  ret = tmpvar_11.xyz;
 }`,comp:`vec2 xlat_mutablefactorA;
 shader_body { 
  vec2 uv_1;
  vec2 dz_2;
  vec3 dy_3;
  vec3 dx_4;
  vec2 d_5;
  vec3 ret_6;
  xlat_mutablefactorA = (uv - vec2(0.5, 0.5));
  vec2 tmpvar_7;
  tmpvar_7.x = -((xlat_mutablefactorA.y * -1024.0));
  tmpvar_7.y = (xlat_mutablefactorA.x * -1024.0);
  vec2 tmpvar_8;
  tmpvar_8.x = tmpvar_7.x;
  tmpvar_8.y = -(tmpvar_7.y);
  uv_1 = (vec2(-100.0, 100.0) * (tmpvar_8 / (
    (tmpvar_7.x * tmpvar_7.x)
   + 
    (tmpvar_7.y * tmpvar_7.y)
  )).yx);
  uv_1 = (0.5 + ((
    (1.0 - abs(((
      fract((mix ((0.5 + 
        (((0.5 + (
          (uv - 0.5)
         * vec2(1.1, 0.81))) - 0.5) * 2.0)
      ), (uv_1 + 0.5), vec2(0.5, 0.5)) * 0.5))
     * 2.0) - 1.0)))
   - 0.5) * 0.98));
  vec2 tmpvar_9;
  vec2 tmpvar_10;
  tmpvar_10 = (vec2(1.0, 0.0) * texsize.zw);
  tmpvar_9.x = (texture (sampler_main, (uv_1 + tmpvar_10)).xyz - texture (sampler_main, (uv_1 - tmpvar_10)).xyz).y;
  vec2 tmpvar_11;
  tmpvar_11 = (vec2(0.0, 1.0) * texsize.zw);
  tmpvar_9.y = (texture (sampler_main, (uv_1 + tmpvar_11)).xyz - texture (sampler_main, (uv_1 - tmpvar_11)).xyz).y;
  d_5 = (texsize.zw * 2.0);
  dx_4 = (((2.0 * 
    ((texture (sampler_blur1, (uv_1 + (vec2(1.0, 0.0) * d_5))).xyz * scale1) + bias1)
  ) - (2.0 * 
    ((texture (sampler_blur1, (uv_1 - (vec2(1.0, 0.0) * d_5))).xyz * scale1) + bias1)
  )) * 0.5);
  dy_3 = (((2.0 * 
    ((texture (sampler_blur1, (uv_1 + (vec2(0.0, 1.0) * d_5))).xyz * scale1) + bias1)
  ) - (2.0 * 
    ((texture (sampler_blur1, (uv_1 - (vec2(0.0, 1.0) * d_5))).xyz * scale1) + bias1)
  )) * 0.5);
  vec2 tmpvar_12;
  tmpvar_12.x = dx_4.y;
  tmpvar_12.y = dy_3.y;
  dz_2 = ((tmpvar_9 * 3.0) + tmpvar_12);
  ret_6 = (vec3(((
    pow ((sqrt(dot (dz_2, dz_2)) * 0.8), 0.7)
   + 
    (((texture (sampler_blur2, uv_1).xyz * scale2) + bias2).y * 0.4)
  ) - 0.1)) * vec3(0.3, 0.5, 0.7));
  vec2 tmpvar_13;
  tmpvar_13.x = dx_4.x;
  tmpvar_13.y = dy_3.x;
  vec3 tmpvar_14;
  tmpvar_14 = mix (mix (ret_6, vec3(0.2, 0.1, 0.0), vec3((texture (sampler_main, 
    (uv_1 + ((tmpvar_13 * texsize.zw) * 18.0))
  ).x * 6.0))), vec3(1.0, 1.0, 1.0), texture (sampler_main, uv_1).zzz);
  ret_6 = tmpvar_14;
  vec4 tmpvar_15;
  tmpvar_15.w = 1.0;
  tmpvar_15.xyz = tmpvar_14;
  ret = tmpvar_15.xyz;
 }`}},function(o,l){o.exports={baseVals:{rating:3,wave_mode:2,wrap:0,wave_a:.001,wave_scale:5.819,wave_mystery:-.38,wave_r:.5,wave_g:.5,wave_b:.5,mv_a:0},shapes:[{baseVals:{enabled:0}},{baseVals:{enabled:0}},{baseVals:{enabled:0}},{baseVals:{enabled:0}}],waves:[{baseVals:{enabled:1,thick:1},init_eqs_str:"",frame_eqs_str:"",point_eqs_str:"a.y=a.sample;a.x=.003*(a.value1+a.value2);a.a=.1*(a.value1+a.value2);a.r=.5+.3*Math.sin(10*a.sample+a.time);a.g=.5+.3*Math.cos(10*a.sample-1.334*a.time);a.b=.5+.3*Math.sin(10*a.sample+.998*a.time);"},{baseVals:{enabled:0}},{baseVals:{enabled:0}},{baseVals:{enabled:0}}],init_eqs_str:"",frame_eqs_str:"a.warp=0;a.wave_r=a.wave_r+.4*Math.sin(.333*a.time)+.2*a.bass_att;a.wave_g=a.wave_g+.4*Math.sin(.555*a.time)+.2*a.treb_att;a.wave_b=a.wave_b+.4*Math.sin(.444*a.time)+.2*a.mid_att;",pixel_eqs_str:"",pixel_eqs:"",warp:` shader_body { 
  vec2 muv_1;
  vec3 ret_2;
  float tmpvar_3;
  tmpvar_3 = (2.0 * bass_att);
  muv_1.x = (uv.x - ((
    ((0.01 * cos((
      (uv.x * (5.0 + tmpvar_3))
     + time))) + (0.01 * cos((
      (uv.y * (5.0 + tmpvar_3))
     + time))))
   * 0.5) * treb_att));
  float tmpvar_4;
  tmpvar_4 = (2.0 * mid_att);
  muv_1.y = (uv.y + ((
    ((0.01 * sin((
      (uv.x * (5.0 + tmpvar_4))
     + time))) - (0.01 * cos((
      (uv.y * (5.0 + tmpvar_4))
     + time))))
   * 0.5) * bass_att));
  vec3 tmpvar_5;
  tmpvar_5 = ((texture (sampler_blur2, muv_1).xyz * scale2) + bias2);
  vec4 tmpvar_6;
  tmpvar_6 = texture (sampler_pw_main, muv_1);
  ret_2.x = (tmpvar_6.x + (tmpvar_5.x * (bass_att * 0.05)));
  ret_2.y = (tmpvar_6.y + (tmpvar_5.y * (treb_att * 0.05)));
  ret_2.z = (tmpvar_6.z + (tmpvar_5.z * (mid_att * 0.05)));
  if ((ret_2.x > 0.9)) {
    ret_2.x = 0.0;
  };
  if ((ret_2.y > 0.9)) {
    ret_2.y = 0.0;
  };
  if ((ret_2.z > 0.9)) {
    ret_2.z = 0.0;
  };
  vec4 tmpvar_7;
  tmpvar_7.w = 1.0;
  tmpvar_7.xyz = ret_2;
  ret = tmpvar_7.xyz;
 }`,comp:` shader_body { 
  vec3 ret1_1;
  vec2 uv1_2;
  vec3 ret_3;
  vec4 tmpvar_4;
  tmpvar_4 = texture (sampler_main, uv);
  ret_3 = (tmpvar_4.xyz * (0.6 + (0.3 * 
    sin(((uv.x * 10.0) + time))
  )));
  vec2 tmpvar_5;
  tmpvar_5.x = (texture (sampler_main, (uv - vec2(0.001, 0.0))).xyz - texture (sampler_main, (uv + vec2(0.001, 0.0))).xyz).x;
  tmpvar_5.y = (texture (sampler_main, (uv - vec2(0.0, 0.001))).xyz - texture (sampler_main, (uv + vec2(0.0, 0.001))).xyz).x;
  uv1_2 = ((0.5 * cos(
    (((uv - 0.5) * 1.5) + 1.6)
  )) - (3.0 * tmpvar_5));
  ret1_1 = ((0.3 * dot (tmpvar_4.xyz, vec3(0.32, 0.49, 0.29))) + ((
    clamp ((0.01 / sqrt(dot (uv1_2, uv1_2))), 0.0, 1.0)
   * 
    mix (vec3(dot (((texture (sampler_blur2, uv).xyz * scale2) + bias2), vec3(0.32, 0.49, 0.29))), ret_3, pow (ret_3, vec3((0.05 + (mid_att * 0.03)))))
  ) * (
    (4.0 + bass)
   + 
    (mid + treb_att)
  )));
  ret_3 = ret1_1;
  vec4 tmpvar_6;
  tmpvar_6.w = 1.0;
  tmpvar_6.xyz = ret1_1;
  ret = tmpvar_6.xyz;
 }`}},function(o,l){o.exports={baseVals:{rating:3,gammaadj:1,decay:.997,echo_zoom:.997,echo_orient:1,wave_thick:1,wave_brighten:0,darken:1,wave_a:.001,wave_scale:.01,wave_smoothing:.27,wave_mystery:-.38,modwavealphastart:.71,modwavealphaend:1.3,warpscale:1.331,zoom:.99951,warp:.01,ob_size:.5,ob_r:.01,ib_size:.26,ib_r:1,ib_g:1,ib_b:1,mv_x:64,mv_y:48,mv_l:.85,mv_r:.5,mv_g:.5,mv_b:.5,mv_a:0},shapes:[{baseVals:{enabled:0}},{baseVals:{enabled:0}},{baseVals:{enabled:0}},{baseVals:{enabled:0}}],waves:[{baseVals:{enabled:1},init_eqs_str:"",frame_eqs_str:"",point_eqs_str:"a.x=.5+.2*a.bass*Math.sin(20*a.sample*a.time*a.treb);a.y=.5+.2*a.bass*Math.cos(20*a.sample*a.time*a.treb);a.r=1+.5*Math.sin(.1*a.sample+10*a.time*a.bass);a.g=1+.5*Math.sin(2*a.sample+50*a.time*a.treb);a.b=1+.5*Math.sin(5*a.sample+20*a.time*a.mid);a.a=a.r;"},{baseVals:{enabled:0}},{baseVals:{enabled:0}},{baseVals:{enabled:0}}],init_eqs_str:"",frame_eqs_str:"a.warp=0;a.decay=.92;",pixel_eqs_str:"a.zoom+=.03*a.bass_att*a.bass_att*a.rad;a.rot+=a.rad*bitand(-2.5,5*Math.cos(a.time))*.01;",warp:` shader_body { 
  vec4 tmpvar_1;
  tmpvar_1.w = 1.0;
  tmpvar_1.xyz = texture (sampler_main, uv).xyz;
  ret = tmpvar_1.xyz;
 }`,comp:` shader_body { 
  vec2 uv1_1;
  vec3 ret_2;
  vec3 tmpvar_3;
  tmpvar_3 = texture (sampler_main, uv).xyz;
  vec2 tmpvar_4;
  tmpvar_4.x = (texture (sampler_main, (uv - vec2(0.001, 0.0))).xyz - texture (sampler_main, (uv + vec2(0.001, 0.0))).xyz).x;
  tmpvar_4.y = (texture (sampler_main, (uv - vec2(0.0, 0.001))).xyz - texture (sampler_main, (uv + vec2(0.0, 0.001))).xyz).x;
  uv1_1 = ((0.5 * cos(
    (((uv - 0.5) * 1.5) + 1.6)
  )) - (3.0 * tmpvar_4));
  ret_2 = (0.8 * ((0.3 * 
    dot (tmpvar_3, vec3(0.32, 0.49, 0.29))
  ) + (
    (clamp ((0.01 / sqrt(
      dot (uv1_1, uv1_1)
    )), 0.0, 1.0) * tmpvar_3)
   * 
    ((4.0 + bass) + (mid + treb_att))
  )));
  ret_2 = (ret_2 * 0.77);
  vec4 tmpvar_5;
  tmpvar_5.w = 1.0;
  tmpvar_5.xyz = ret_2;
  ret = tmpvar_5.xyz;
 }`}},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(o,l,s){"use strict";Object.defineProperty(l,"__esModule",{value:!0});var y=A(s(6)),z=A(s(7));function A(m){return m&&m.__esModule?m:{default:m}}var h={};h["$$$ Royal - Mashup (197)"]=s(35),h["$$$ Royal - Mashup (220)"]=s(36),h["$$$ Royal - Mashup (431)"]=s(37),h["_Aderrasi - Wanderer in Curved Space - mash0000 - faclempt kibitzing meshuggana schmaltz (Geiss color mix)"]=s(38),h["_Geiss - Artifact 01"]=s(39),h["_Geiss - Desert Rose 2"]=s(40),h["_Geiss - untitled"]=s(41),h._Mig_049=s(42),h._Mig_085=s(43),h["_Rovastar + Geiss - Hurricane Nightmare (Posterize Mix)"]=s(44),h["Aderrasi + Geiss - Airhandler (Kali Mix) - Canvas Mix"]=s(45),h["Aderrasi - Potion of Spirits"]=s(20),h["Aderrasi - Songflower (Moss Posy)"]=s(21),h["Aderrasi - Storm of the Eye (Thunder) - mash0000 - quasi pseudo meta concentrics"]=s(46),h["An AdamFX n Martin Infusion 2 flexi - Why The Sky Looks Diffrent Today - AdamFx n Martin Infusion - Tack Tile Disfunction B"]=s(47),h["cope + martin - mother-of-pearl"]=s(48),h["Cope - The Neverending Explosion of Red Liquid Fire"]=s(49),h["Eo.S. + Phat - cubetrace - v2"]=s(22),h["Eo.S. + Zylot - skylight (Stained Glass Majesty mix)"]=s(23),h["Eo.S. - glowsticks v2 05 and proton lights (+Krash\u2032s beat code) _Phat_remix02b"]=s(24),h["fiShbRaiN + Flexi - witchcraft 2.0"]=s(50),h["flexi + amandio c - organic [random mashup]"]=s(51),h["flexi + amandio c - organic12-3d-2.milk"]=s(52),h["Flexi + amandio c - piercing 05 - Kopie (2) - Kopie"]=s(53),h["flexi + fishbrain - neon mindblob grafitti"]=s(54),h["flexi + geiss - pogo cubes vs. tokamak vs. game of life [stahls jelly 4.5 finish]"]=s(55),h["Flexi + Martin - astral projection"]=s(56),h["Flexi + Martin - cascading decay swing"]=s(57),h["Flexi + stahlregen - jelly showoff parade"]=s(58),h["Flexi - alien fish pond"]=s(59),h["Flexi - area 51"]=s(60),h["flexi - bouncing balls [double mindblob neon mix]"]=s(61),h["Flexi - infused with the spiral"]=s(62),h["Flexi - mindblob [shiny mix]"]=s(63),h["Flexi - mindblob mix"]=s(64),h["flexi - mom, why the sky looks different today"]=s(65),h["flexi - patternton, district of media, capitol of the united abstractions of fractopia"]=s(66),h["Flexi - predator-prey-spirals"]=s(67),h["Flexi - smashing fractals [acid etching mix]"]=s(68),h["flexi - swing out on the spiral"]=s(69),h["Flexi - truly soft piece of software - this is generic texturing (Jelly) "]=s(70),h["flexi - what is the matrix"]=s(71),h["Flexi, fishbrain, Geiss + Martin - tokamak witchery"]=s(72),h["Flexi, martin + geiss - dedicated to the sherwin maxawow"]=s(73),h["Fumbling_Foo & Flexi, Martin, Orb, Unchained - Star Nova v7b"]=s(74),h["Geiss + Flexi + Martin - disconnected"]=s(75),h["Geiss - Cauldron - painterly 2 (saturation remix)"]=s(76),h["Geiss - Reaction Diffusion 2"]=s(77),h["Geiss - Spiral Artifact"]=s(78),h["Geiss - Thumb Drum"]=s(79),h["Geiss, Flexi + Stahlregen - Thumbdrum Tokamak [crossfiring aftermath jelly mashup]"]=s(80),h["Goody - The Wild Vort"]=s(81),h["high-altitude basket unraveling - singh grooves nitrogen argon nz+"]=s(82),h["Idiot - Star Of Annon"]=s(25),h["Krash + Illusion - Spiral Movement"]=s(26),h["martin + flexi - diamond cutter [prismaticvortex.com] - camille - i wish i wish i wish i was constrained"]=s(83),h["Martin - acid wiring"]=s(84),h["martin - angel flight"]=s(85),h["martin - another kind of groove"]=s(86),h["martin - bombyx mori"]=s(87),h["martin - castle in the air"]=s(88),h["martin - chain breaker"]=s(89),h["Martin - charisma"]=s(90),h["martin - disco mix 4"]=s(91),h["martin - extreme heat"]=s(92),h["martin - frosty caves 2"]=s(93),h["martin - fruit machine"]=s(94),h["martin - ghost city"]=s(95),h["martin - glass corridor"]=s(96),h["martin - infinity (2010 update)"]=s(27),h["Martin - liquid arrows"]=s(97),h["martin - mandelbox explorer - high speed demo version"]=s(98),h["martin - mucus cervix"]=s(99),h["Martin - QBikal - Surface Turbulence IIb"]=s(100),h["martin - reflections on black tiles"]=s(101),h["martin - stormy sea (2010 update)"]=s(102),h["martin - The Bridge of Khazad-Dum"]=s(103),h["martin - witchcraft reloaded"]=s(104),h["martin [shadow harlequins shape code] - fata morgana"]=s(105),h["martin, flexi, fishbrain + sto - enterstate [random mashup]"]=s(106),h["Milk Artist At our Best - FED - SlowFast Ft AdamFX n Martin - HD CosmoFX"]=s(107),h["ORB - Waaa"]=s(108),h["Phat+fiShbRaiN+Eo.S_Mandala_Chasers_remix"]=s(28),h["Rovastar + Loadus + Geiss - FractalDrop (Triple Mix)"]=s(109),h["Rovastar - Oozing Resistance"]=s(29),h["sawtooth grin roam"]=s(110),h["shifter - dark tides bdrv mix 2"]=s(111),h["suksma - heretical crosscut playpen"]=s(112),h["suksma - Rovastar - Sunflower Passion (Enlightment Mix)_Phat_edit + flexi und martin shaders - circumflex in character classes in regular expression"]=s(113),h["suksma - uninitialized variabowl (hydroponic chronic)"]=s(114),h["suksma - vector exp 1 - couldn\u2032t not"]=s(115),h["TonyMilkdrop - Leonardo Da Vinci's Balloon [Flexi - merry-go-round + techstyle]"]=s(116),h["TonyMilkdrop - Magellan's Nebula [Flexi - you enter first + multiverse]"]=s(117),h["Unchained & Rovastar - Wormhole Pillars (Hall of Shadows mix)"]=s(30),h["Unchained - Rewop"]=s(31),h["Unchained - Unified Drag 2"]=s(32),h["yin - 191 - Temporal singularities"]=s(33),h["Zylot - Paint Spill (Music Reactive Paint Mix)"]=s(118),h["Zylot - Star Ornament"]=s(34),h["Zylot - True Visionary (Final Mix)"]=s(119);var p=function(){function m(){(0,y.default)(this,m)}return(0,z.default)(m,null,[{key:"getPresets",value:function(){return h}}]),m}();l.default=p,o.exports=p}])})});var qt=nt(gt()),zt=nt(yt()),Mt=nt(ft()),wt=Et(),[et,At]=Gt(wt),ot=Kt(et,At);Yt(ot,et,At);qt.default.init({transitions:[{name:"default-transition",enter(){Ht(ot)},prevent:({el:o})=>o.classList&&o.classList.contains("prevent")}]});window.playSong=Et;window.addEventListener("resize",Wt(()=>ot.setRendererSize(window.innerWidth,window.innerHeight)));window.addEventListener("click",()=>{et.state==="suspended"&&et.resume(),wt.play()});function Wt(o){var l;return function(s){l&&clearTimeout(l),l=setTimeout(o,100,s)}}function Et(o="/assets/sound/lounge.ogg"){let l=document.querySelector("#music");return l.volume=.1,l.loop=!0,l.src=o,l.play(),l}function Gt(o){let l=new AudioContext,s=l.createMediaElementSource(o);return s.connect(l.destination),[l,s]}function Kt(o,l){let s=document.querySelector("#background"),y=zt.default.createVisualizer(o,s,{width:window.innerWidth,height:window.innerHeight}),z=Tt();y.loadPreset(z,0),window.requestAnimationFrame(A);function A(){y.render(),window.requestAnimationFrame(A)}return y}function Yt(o,l,s){let y=l.createGain();y.gain.value=4,s.connect(y);let z=l.createAnalyser();z.fftSize=2048,y.connect(z),o.connectAudio(z)}function Tt(){let o=Mt.default.getPresets(),l=["martin - mandelbox explorer - high speed demo version","Flexi - mindblob mix","martin + flexi - diamond cutter [prismaticvortex.com] - camille - i wish i wish i wish i was constrained","Phat+fiShbRaiN+Eo.S_Mandala_Chasers_remix","Martin - acid wiring","Flexi, martin + geiss - dedicated to the sherwin maxawow","Aderrasi - Potion of Spirits","flexi + amandio c - organic12-3d-2.milk","Flexi + stahlregen - jelly showoff parade","martin - castle in the air","$$$ Royal - Mashup (197)","suksma - heretical crosscut playpen","Flexi - predator-prey-spirals","Fumbling_Foo & Flexi, Martin, Orb, Unchained - Star Nova v7b","martin - another kind of groove"],s=Math.floor(Math.random()*l.length),y=l[s];return o[y]}function Ht(o){o.loadPreset(Tt(),1.5)}})();
