(()=>{"use strict";var e,r={595:(e,r,t)=>{var o=t(638);window.statistics=function(){let e=0,r=!1;const t=()=>++e;return o(document).on("click",t),{destroy:()=>(o(document).off("click",t),r=!0,"Destroyed successfully"),getClicks:()=>r?"Statistics was destroyed":e}}()}},t={};function o(e){var n=t[e];if(void 0!==n)return n.exports;var s=t[e]={exports:{}};return r[e].call(s.exports,s,s.exports,o),s.exports}o.m=r,e=[],o.O=(r,t,n,s)=>{if(!t){var a=1/0;for(u=0;u<e.length;u++){for(var[t,n,s]=e[u],i=!0,c=0;c<t.length;c++)(!1&s||a>=s)&&Object.keys(o.O).every((e=>o.O[e](t[c])))?t.splice(c--,1):(i=!1,s<a&&(a=s));if(i){e.splice(u--,1);var l=n();void 0!==l&&(r=l)}}return r}s=s||0;for(var u=e.length;u>0&&e[u-1][2]>s;u--)e[u]=e[u-1];e[u]=[t,n,s]},o.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return o.d(r,{a:r}),r},o.d=(e,r)=>{for(var t in r)o.o(r,t)&&!o.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},o.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),(()=>{var e={537:0};o.O.j=r=>0===e[r];var r=(r,t)=>{var n,s,[a,i,c]=t,l=0;if(a.some((r=>0!==e[r]))){for(n in i)o.o(i,n)&&(o.m[n]=i[n]);if(c)var u=c(o)}for(r&&r(t);l<a.length;l++)s=a[l],o.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return o.O(u)},t=self.webpackChunk=self.webpackChunk||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})();var n=o.O(void 0,[638],(()=>o(595)));n=o.O(n)})();