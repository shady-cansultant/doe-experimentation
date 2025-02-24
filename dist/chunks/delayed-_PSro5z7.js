const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["../cards/cards.js","./preload-helper-C1FmrZbK.js","../cards/cards.css","./cards.test-j5LTDt1O.js","../columns/columns.js","../columns/columns.css","../footer/footer.js","../fragment/fragment.js","../footer/footer.css","../header/header.js","../header/header.css","../hero/hero.js","../hero/hero.css","../fonts/fonts.css","../lazy/lazy.css"])))=>i.map(i=>d[i]);
import{_ as m}from"./preload-helper-C1FmrZbK.js";const b=(e,t,o)=>{const n=e[t];return n?typeof n=="function"?n():Promise.resolve(n):new Promise((i,a)=>{(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(a.bind(null,new Error("Unknown variable dynamic import: "+t+(t.split("/").length!==o?". Note that variables only represent file names one level deep.":""))))})};function d(e,t){const o=()=>window.performance?window.performance.now():Date.now()-window.hlx.rum.firstReadTime;try{if(window.hlx=window.hlx||{},d.enhance=()=>{},!window.hlx.rum){const n=window.SAMPLE_PAGEVIEWS_AT_RATE==="high"&&10||window.SAMPLE_PAGEVIEWS_AT_RATE==="low"&&1e3||new URLSearchParams(window.location.search).get("rum")==="on"&&1||100,i=Math.random().toString(36).slice(-4),a=Math.random()*n<1;if(window.hlx.rum={weight:n,id:i,isSelected:a,firstReadTime:window.performance?window.performance.timeOrigin:Date.now(),sampleRUM:d,queue:[],collector:(...s)=>window.hlx.rum.queue.push(s)},a){const s=r=>{const c={source:"undefined error"};try{c.target=r.toString(),c.source=r.stack.split(`
`).filter(l=>l.match(/https?:\/\//)).shift().replace(/at ([^ ]+) \((.+)\)/,"$1@$2").replace(/ at /,"@").trim()}catch{}return c};window.addEventListener("error",({error:r})=>{const c=s(r);d("error",c)}),window.addEventListener("unhandledrejection",({reason:r})=>{let c={source:"Unhandled Rejection",target:r||"Unknown"};r instanceof Error&&(c=s(r)),d("error",c)}),d.baseURL=d.baseURL||new URL(window.RUM_BASE||"/",new URL("https://rum.hlx.page")),d.collectBaseURL=d.collectBaseURL||d.baseURL,d.sendPing=(r,c,l={})=>{const u=JSON.stringify({weight:n,id:i,referer:window.location.href,checkpoint:r,t:c,...l}),{href:A,origin:S}=new URL(`.rum/${n}`,d.collectBaseURL),L=S===window.location.origin?new Blob([u],{type:"application/json"}):u;navigator.sendBeacon(A,L),console.debug(`ping:${r}`,l)},d.sendPing("top",o()),d.enhance=()=>{const r=document.createElement("script");r.src=new URL(".rum/@adobe/helix-rum-enhancer@^2/src/index.js",d.baseURL).href,document.head.appendChild(r)},window.hlx.RUM_MANUAL_ENHANCE||d.enhance()}}window.hlx.rum&&window.hlx.rum.isSelected&&e&&window.hlx.rum.collector(e,t,o()),document.dispatchEvent(new CustomEvent("rum",{detail:{checkpoint:e,data:t}}))}catch{}}function v(){window.hlx=window.hlx||{},window.hlx.RUM_MASK_URL="full",window.hlx.RUM_MANUAL_ENHANCE=!0,window.hlx.codeBasePath="",window.hlx.lighthouse=new URLSearchParams(window.location.search).get("lighthouse")==="on";const e="/dist/main/main.js",t=document.querySelector(`script[src$="${e}"]`);if(t)try{const o=new URL(t.src,window.location);o.host===window.location.host?[window.hlx.codeBasePath]=o.pathname.split(e):[window.hlx.codeBasePath]=o.href.split(e)}catch(o){console.log(o)}}function R(){var e;typeof process<"u"&&((e=process==null?void 0:process.env)!=null&&e.VITEST)||(v(),d())}function f(e){return typeof e=="string"?e.toLowerCase().replace(/[^0-9a-z]/gi,"-").replace(/-+/g,"-").replace(/^-|-$/g,""):""}function P(e){return f(e).replace(/-([a-z])/g,t=>t[1].toUpperCase())}function x(e){const t={};return e.querySelectorAll(":scope > div").forEach(o=>{if(o.children){const n=[...o.children];if(n[1]){const i=n[1],a=f(n[0].textContent);let s="";if(i.querySelector("a")){const r=[...i.querySelectorAll("a")];r.length===1?s=r[0].href:s=r.map(c=>c.href)}else if(i.querySelector("img")){const r=[...i.querySelectorAll("img")];r.length===1?s=r[0].src:s=r.map(c=>c.src)}else if(i.querySelector("p")){const r=[...i.querySelectorAll("p")];r.length===1?s=r[0].textContent:s=r.map(c=>c.textContent)}else s=o.children[1].textContent;t[a]=s}}}),t}function w(e,t=document){const o=e&&e.includes(":")?"property":"name";return[...t.head.querySelectorAll(`meta[${o}="${e}"]`)].map(i=>i.content).join(", ")||""}function G(e,t="",o=!1,n=[{media:"(min-width: 600px)",width:"2000"},{width:"750"}]){const i=new URL(e,window.location.href),a=document.createElement("picture"),{pathname:s}=i,r=s.substring(s.lastIndexOf(".")+1);return n.forEach(c=>{const l=document.createElement("source");c.media&&l.setAttribute("media",c.media),l.setAttribute("type","image/webp"),l.setAttribute("srcset",`${s}?width=${c.width}&format=webply&optimize=medium`),a.appendChild(l)}),n.forEach((c,l)=>{if(l<n.length-1){const u=document.createElement("source");c.media&&u.setAttribute("media",c.media),u.setAttribute("srcset",`${s}?width=${c.width}&format=${r}&optimize=medium`),a.appendChild(u)}else{const u=document.createElement("img");u.setAttribute("loading",o?"eager":"lazy"),u.setAttribute("alt",t),a.appendChild(u),u.setAttribute("src",`${s}?width=${c.width}&format=${r}&optimize=medium`)}}),a}function N(){const e=(n,i)=>{i.split(",").forEach(a=>{n.classList.add(f(a.trim()))})},t=w("template");t&&e(document.body,t);const o=w("theme");o&&e(document.body,o)}function T(e){const t=["P","PRE","UL","OL","PICTURE","TABLE","H1","H2","H3","H4","H5","H6"],o=n=>{const i=document.createElement("p");i.append(...n.childNodes),[...n.attributes].filter(({nodeName:a})=>a==="class"||a.startsWith("data-aue")||a.startsWith("data-richtext")).forEach(({nodeName:a,nodeValue:s})=>{i.setAttribute(a,s),n.removeAttribute(a)}),n.append(i)};e.querySelectorAll(":scope > div > div").forEach(n=>{n.hasChildNodes()&&(!!n.firstElementChild&&t.some(a=>n.firstElementChild.tagName===a)?n.firstElementChild.tagName==="PICTURE"&&(n.children.length>1||n.textContent.trim())&&o(n):o(n))})}function E(e){e.querySelectorAll("a").forEach(t=>{if(t.title=t.title||t.textContent,t.href!==t.textContent){const o=t.parentElement,n=t.parentElement.parentElement;t.querySelector("img")||(o.childNodes.length===1&&(o.tagName==="P"||o.tagName==="DIV")&&(t.className="button",o.classList.add("button-container")),o.childNodes.length===1&&o.tagName==="STRONG"&&n.childNodes.length===1&&n.tagName==="P"&&(t.className="button primary",n.classList.add("button-container")),o.childNodes.length===1&&o.tagName==="EM"&&n.childNodes.length===1&&n.tagName==="P"&&(t.className="button secondary",n.classList.add("button-container")))}})}function U(e,t="",o=""){const n=Array.from(e.classList).find(a=>a.startsWith("icon-")).substring(5),i=document.createElement("img");i.dataset.iconName=n,i.src=`${window.hlx.codeBasePath}${t}/icons/${n}.svg`,i.alt=o,i.loading="lazy",e.append(i)}function I(e,t=""){[...e.querySelectorAll("span.icon")].forEach(n=>{U(n,t)})}function q(e){e.querySelectorAll(":scope > div:not([data-section-status])").forEach(t=>{const o=[];let n=!1;[...t.children].forEach(a=>{if(a.tagName==="DIV"&&a.className||!n){const s=document.createElement("div");o.push(s),n=a.tagName!=="DIV"||!a.className,n&&s.classList.add("default-content-wrapper")}o[o.length-1].append(a)}),o.forEach(a=>t.append(a)),t.classList.add("section","nsw-section"),t.dataset.sectionStatus="initialized",t.style.display="none";const i=t.querySelector("div.section-metadata");if(i){const a=x(i);Object.keys(a).forEach(s=>{s==="style"?a.style.split(",").filter(c=>c).map(c=>f(c.trim())).forEach(c=>t.classList.add(c)):t.dataset[P(s)]=a[s]}),i.parentNode.remove()}})}function g(e,t){const o=Array.isArray(t)?t:[[t]],n=document.createElement("div");return n.classList.add(e),o.forEach(i=>{const a=document.createElement("div");i.forEach(s=>{const r=document.createElement("div");(s.elems?s.elems:[s]).forEach(l=>{l&&(typeof l=="string"?r.innerHTML+=l:r.appendChild(l))}),a.appendChild(r)}),n.appendChild(a)}),n}async function p(e){const t=e.dataset.blockStatus;if(t!=="loading"&&t!=="loaded"){e.dataset.blockStatus="loading";const{blockName:o}=e.dataset;try{const n=new Promise(i=>{(async()=>{try{const a=await b(Object.assign({"../blocks/cards/cards.js":()=>m(()=>import("../cards/cards.js"),__vite__mapDeps([0,1,2]),import.meta.url),"../blocks/cards/cards.test.js":()=>m(()=>import("./cards.test-j5LTDt1O.js"),__vite__mapDeps([3,0,1,2]),import.meta.url),"../blocks/columns/columns.js":()=>m(()=>import("../columns/columns.js"),__vite__mapDeps([4,5]),import.meta.url),"../blocks/footer/footer.js":()=>m(()=>import("../footer/footer.js"),__vite__mapDeps([6,7,1,8]),import.meta.url),"../blocks/fragment/fragment.js":()=>m(()=>import("../fragment/fragment.js"),__vite__mapDeps([7,1]),import.meta.url),"../blocks/header/header.js":()=>m(()=>import("../header/header.js"),__vite__mapDeps([9,1,10]),import.meta.url),"../blocks/hero/hero.js":()=>m(()=>import("../hero/hero.js"),__vite__mapDeps([11,12]),import.meta.url)}),`../blocks/${o}/${o}.js`,4);a.default&&await a.default(e)}catch(a){console.log(`failed to load module for ${o}`,a)}i()})()});await Promise.all([n])}catch(n){console.log(`failed to load block ${o}`,n)}e.dataset.blockStatus="loaded"}return e}function h(e){const t=e.classList[0];if(t&&!e.dataset.blockStatus){e.classList.add("block"),e.dataset.blockName=t,e.dataset.blockStatus="initialized",T(e),e.parentElement.classList.add(`${t}-wrapper`);const n=e.closest(".section");n&&n.classList.add(`${t}-container`),E(e)}}function $(e){e.querySelectorAll("div.section > div > div").forEach(h)}async function C(e){const t=g("header","");return e.append(t),h(t),p(t)}async function D(e){const t=g("footer","");return e.append(t),h(t),p(t)}async function O(e){const t=e.querySelector("img");await new Promise(o=>{t&&!t.complete?(t.setAttribute("loading","eager"),t.addEventListener("load",o),t.addEventListener("error",o)):o()})}async function y(e,t){const o=e.dataset.sectionStatus;if(!o||o==="initialized"){e.dataset.sectionStatus="loading";const n=[...e.querySelectorAll("div.block")];for(let i=0;i<n.length;i+=1)await p(n[i]);t&&await t(e),e.dataset.sectionStatus="loaded",e.style.display=null}}async function B(e){const t=[...e.querySelectorAll("div.section")];for(let o=0;o<t.length;o+=1)await y(t[o])}R();function M(e,t,o){o||(o=[...e.attributes].map(({nodeName:n})=>n)),o.forEach(n=>{const i=e.getAttribute(n);i&&(t.setAttribute(n,i),e.removeAttribute(n))})}function J(e,t){M(e,t,[...e.attributes].map(({nodeName:o})=>o).filter(o=>o.startsWith("data-aue-")||o.startsWith("data-richtext-")))}async function _(){await m(()=>Promise.resolve({}),__vite__mapDeps([13]),import.meta.url);try{window.location.hostname.includes("localhost")||sessionStorage.setItem("fonts-loaded","true")}catch{}}function j(e){E(e),I(e),q(e),$(e)}async function V(e){document.documentElement.lang="en",N();const t=e.querySelector("main");t&&(j(t),document.body.classList.add("appear"),await y(t.querySelector(".section"),O)),d.enhance();try{(window.innerWidth>=900||sessionStorage.getItem("fonts-loaded"))&&_()}catch{}}async function z(e){const t=e.querySelector("main");await B(t);const{hash:o}=window.location,n=o?e.getElementById(o.substring(1)):!1;o&&n&&n.scrollIntoView(),C(e.querySelector("header")),D(e.querySelector("footer")),m(()=>Promise.resolve({}),__vite__mapDeps([14]),import.meta.url),_()}function W(){window.setTimeout(()=>m(()=>Promise.resolve().then(()=>H),void 0,import.meta.url),3e3),m(async()=>{const{initSidekick:e}=await import("./sidekick-BVxUvja5.js");return{initSidekick:e}},[],import.meta.url).then(({initSidekick:e})=>e())}async function k(){var e;typeof process<"u"&&((e=process==null?void 0:process.env)!=null&&e.VITEST)||(await V(document),await z(document),W())}k();const H=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"}));export{E as a,I as b,h as c,j as d,p as e,q as f,$ as g,w as h,G as i,B as l,J as m};
//# sourceMappingURL=delayed-_PSro5z7.js.map
