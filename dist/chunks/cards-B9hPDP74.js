import{m as u,i as f}from"./delayed-XxRzlBAS.js";function v(l){const o=document.createElement("ul");[...l.children].forEach(t=>{const n=document.createElement("li");for(n.classList.add("nsw-card","nsw-card--dark"),u(t,n);t.firstElementChild;)n.append(t.firstElementChild);const[c,d,p,i]=n.children;c.querySelector("picture")?c.className="nsw-card__image":c.remove();const r=document.createElement("div");r.className="nsw-card__content";const a=document.createElement("div");for(a.className="nsw-card__title";d.firstElementChild;)a.append(d.firstElementChild);const s=a.querySelector("a");if(s){const e=s.closest("p");e&&(e.replaceWith(s),s.classList.remove("button"))}if(r.append(a),c.after(r),d.remove(),p.innerHTML.trim()){const e=document.createElement("div");e.className="nsw-card__copy",e.append(p),r.append(e)}else p.remove();if(i.innerHTML.trim()){const e=i.querySelector(".icon");if(e){const m=e.closest("p");m&&m.replaceWith(e),e.classList.add("material-icons","nsw-material-icons"),e.setAttribute("focusable","false"),e.setAttribute("aria-hidden","true"),e.textContent="east",r.append(i)}else i.remove()}o.append(n)}),o.querySelectorAll("picture > img").forEach(t=>{const n=f(t.src,t.alt,!1,[{width:"750"}]);u(t,n.querySelector("img")),t.closest("picture").replaceWith(n)}),l.textContent="",l.append(o)}export{v as default};
//# sourceMappingURL=cards-B9hPDP74.js.map
