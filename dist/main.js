(()=>{"use strict";const e=function(){const e=document.querySelector("#content"),t=document.createElement("div"),n=document.createElement("h1"),c=document.createElement("p"),o=document.createElement("button");t.classList.add("container"),n.classList.add("title"),n.textContent="Comfy Coffee",c.textContent="Some slogan or info",o.textContent="Menu",t.append(n,c,o),e.appendChild(t)};function t(e){const t=document.createElement("div");t.classList.add("coffee-card");const n=document.createElement("h2");n.textContent=`${e}`,n.classList.add("coffee-title");const c=document.createElement("img");return c.src=`./images/coffees/${e.toLowerCase()}.jpg`,c.alt=`${e}`,c.classList.add("coffee-img"),t.append(n,c),t}(function(){const e=document.querySelector("#content"),t=document.createElement("header"),n=document.createElement("nav"),c=document.createElement("ul"),o=document.createElement("li"),d=document.createElement("li"),a=document.createElement("li");o.classList.add("home"),d.classList.add("menu"),a.classList.add("contact"),o.textContent="Home",d.textContent="Menu",a.textContent="Contact",c.append(o,d,a),n.appendChild(c),t.appendChild(n),e.appendChild(t)})(),e();const n=document.querySelector("#content"),c=document.querySelector(".home"),o=document.querySelector(".menu"),d=document.querySelector(".contact");function a(e){for(;e.childNodes.length>1;)e.removeChild(e.lastChild)}c.addEventListener("click",(()=>{a(n),e()})),o.addEventListener("click",(()=>{a(n),function(){const e=document.querySelector("#content"),n=document.createElement("div");n.classList.add("menu-container");const c=t("Americano"),o=t("Cappuccino"),d=t("Espresso"),a=t("Latte"),l=t("Macchiato"),s=t("Mocha");n.append(c,o,d,a,l,s),e.appendChild(n)}()})),d.addEventListener("click",(()=>{a(n)}))})();