import{d as $,l as q,a as m,b as x,c as A,e as B,f as F,g as P}from"../chunks/delayed-DYKiHM1t.js";function h(u=document){function e(n){delete n.dataset.richtextResource,delete n.dataset.richtextProp,delete n.dataset.richtextFilter,delete n.dataset.richtextLabel}let t;for(;t=u.querySelector("[data-richtext-prop]:not(div)");){const{richtextResource:n,richtextProp:c,richtextFilter:d,richtextLabel:r}=t.dataset;if(!t.nextElementSibling)return;e(t);const f=[];let i=t;for(;(i=i.nextElementSibling)&&(i.dataset.richtextResource===n&&i.dataset.richtextProp===c);)e(i),f.push(i);let l;if(n&&c)l=document.querySelectorAll(`[data-richtext-id="${n}"][data-richtext-prop="${c}"]`);else{const a=t.closest("[data-aue-resource]");if(a)l=a.querySelectorAll(`:scope > :not([data-aue-resource]) [data-richtext-prop="${c}"]`);else{console.warn(`Editable parent not found or richtext property ${c}`);return}}if(l.length)console.warn("Found orphan elements of a richtext, that were not consecutive siblings of the first paragraph",l),l.forEach(a=>e(a));else{const a=document.createElement("div");n&&(a.dataset.aueResource=n,a.dataset.aueBehavior="component"),c&&(a.dataset.aueProp=c),r&&(a.dataset.aueLabel=r),d&&(a.dataset.aueFilter=d),a.dataset.aueType="richtext",t.replaceWith(a),a.append(t,...f)}}}const R=new MutationObserver(()=>h());R.observe(document,{attributeFilter:["data-richtext-prop"],subtree:!0});h();async function L(u){var f,i,l,a,b,g,w,E,S,v;const{detail:e}=u,t=((i=(f=e==null?void 0:e.request)==null?void 0:f.target)==null?void 0:i.resource)||((b=(a=(l=e==null?void 0:e.request)==null?void 0:l.target)==null?void 0:a.container)==null?void 0:b.resource)||((E=(w=(g=e==null?void 0:e.request)==null?void 0:g.to)==null?void 0:w.container)==null?void 0:E.resource);if(!t)return!1;const n=(S=e==null?void 0:e.response)==null?void 0:S.updates;if(!n.length)return!1;const{content:c}=n[0];if(!c)return!1;const d=new DOMParser().parseFromString(c,"text/html"),r=document.querySelector(`[data-aue-resource="${t}"]`);if(r){if(r.matches("main")){const s=d.querySelector(`[data-aue-resource="${t}"]`);return s.style.display="none",r.insertAdjacentElement("afterend",s),$(s),h(s),await q(s),r.remove(),s.style.display=null,k(s),!0}const y=((v=r.parentElement)==null?void 0:v.closest(".block[data-aue-resource]"))||(r==null?void 0:r.closest(".block[data-aue-resource]"));if(y){const s=y.getAttribute("data-aue-resource"),o=d.querySelector(`[data-aue-resource="${s}"]`);if(o)return o.style.display="none",y.insertAdjacentElement("afterend",o),m(o),x(o),A(o),h(o),await B(o),y.remove(),o.style.display=null,!0}else{const s=d.querySelectorAll(`[data-aue-resource="${t}"],[data-richtext-resource="${t}"]`);if(s.length){const{parentElement:o}=r;if(r.matches(".section")){const[p]=s;p.style.display="none",r.insertAdjacentElement("afterend",p),m(p),x(p),h(p),F(o),P(o),await q(o),r.remove(),p.style.display=null}else r.replaceWith(...s),m(o),x(o),h(o);return!0}}}return!1}function k(u){["aue:content-patch","aue:content-update","aue:content-add","aue:content-move","aue:content-remove","aue:content-copy"].forEach(e=>u==null?void 0:u.addEventListener(e,async t=>{t.stopPropagation(),await L(t)||window.location.reload()}))}k(document.querySelector("main"));
//# sourceMappingURL=ue.js.map
