var e=Object.defineProperty,t=Object.defineProperties,r=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,a=(t,r,o)=>r in t?e(t,r,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[r]=o;import{r as l,t as c,v as i}from"./index.ebfa83ac.js";const g=new TextDecoder("utf-8");let u,f,d,p,b,v=!1,O=!1,m="";function y(e,t){let r;try{r=JSON.parse(e)}catch(s){console.log("JSON.parse error",JSON.parse(e))}const o=new Date,n=function(e){const t=e.getFullYear()%100,r=i(e.getMonth()+1,2),o=i(e.getDate(),2),n=i(e.getHours(),2),s=i(e.getMinutes(),2),a=i(e.getSeconds(),2);return`${t}-${r}-${o} ${n}:${s}:${a}`}(o);r.time=n,r.id=+o-0+Math.floor(65536*(1+Math.random())).toString(16),r.even=v=!v,t(r)}function h(e,t){return e.read().then((({done:r,value:o})=>{const n=g.decode(o,{stream:!r});m+=n;const s=m.split("\n"),a=s[s.length-1];for(let e=0;e<s.length-1;e++)y(s[e],t);return r?(y(a,t),m="",console.log("GET /logs streaming done"),void(O=!1)):(m=a,h(e,t))}))}function j(e){const t=Object.keys(e);return t.sort(),t.map((t=>e[t])).join("|")}function w(e,i){if("uninit"===e.logLevel)return;if(O||1===b)return;f=i,b=1;const g=l(e,"/logs");u=new WebSocket(g),u.addEventListener("error",(()=>{b=3,function(e,l){if(p&&j(e)!==d)p.abort();else if(O)return;O=!0,d=j(e),p=new AbortController;const i=p.signal,{url:g,init:u}=c(e);fetch(g+"/logs?level="+e.logLevel,(f=((e,t)=>{for(var r in t||(t={}))n.call(t,r)&&a(e,r,t[r]);if(o)for(var r of o(t))s.call(t,r)&&a(e,r,t[r]);return e})({},u),b={signal:i},t(f,r(b)))).then((e=>{h(e.body.getReader(),l)}),(e=>{O=!1,i.aborted||console.log("GET /logs error:",e.message)}));var f,b}(e,i)})),u.addEventListener("message",(function(e){y(e.data,i)}))}function S(e){f&&u&&(u.close(),b=3,O=!1,w(e,f))}export{w as f,S as r};
