async function a(e,t,n){const o=await fetch(`https://admin.hlx.page/sidekick/${e}/${t}/${n}/env.json`);if(!o||!o.ok)return null;const i=await o.json();return i==null?void 0:i.contentSourceUrl}async function d(e){const{owner:t,repo:n,ref:o}=e.detail.data.config,i=await a(t,n,o);if(!i){console.error("Content source URL not found");return}const{pathname:r}=window.location,l=`${i}${r}?cmd=open`;window.open(l,"_blank")}async function u(e,t){let n=e.shadowRoot.querySelector(t);return new Promise(o=>{const i=()=>{n=e.shadowRoot.querySelector(t),n?o(n):setTimeout(i,100)};i()})}function c(e){const[t]=e.classList;return["edit","reload","publish","delete","unpublish"].indexOf(t)!==-1}async function s(e){const t=await u(e,".plugin-container");t.style.visibility="hidden",t.querySelectorAll(".plugin").forEach(n=>{c(n)&&(n.style.display="none")}),new MutationObserver(n=>{n.forEach(o=>o.addedNodes.forEach(i=>{c(i)&&(i.style.display="none")}))}).observe(t,{childList:!0}),t.style.visibility="visible",e.addEventListener("custom:aemedit",d)}async function f(){let e=document.querySelector("helix-sidekick");e?await s(e):document.addEventListener("sidekick-ready",async()=>{e=document.querySelector("helix-sidekick"),await s(e)},{once:!0})}export{f as initSidekick};
//# sourceMappingURL=sidekick-BVxUvja5.js.map
