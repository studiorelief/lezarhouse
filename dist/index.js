"use strict";(()=>{function r(){document.documentElement.addEventListener("classChange",()=>{let t=document.documentElement.classList.contains("w-mod-js")&&document.documentElement.classList.contains("dark-mode");document.querySelectorAll(".navbar_text.is-darkmode").forEach(e=>{e.textContent=t?"Light mode":"Dark mode"})}),new MutationObserver(t=>{t.forEach(e=>{if(e.attributeName==="class"){let n=new CustomEvent("classChange");document.documentElement.dispatchEvent(n)}})}).observe(document.documentElement,{attributes:!0})}function s(){let a=()=>{document.querySelectorAll(".navbar_text, .navbar_brand-logo-text").forEach(n=>{let o=n;o.style.display=o.style.display==="none"?"":"none"});let e=document.querySelector(".navbar_container");e&&(e.style.width=e.classList.contains("toggled-size")?"":"2.37rem",e.classList.toggle("toggled-size")),document.querySelectorAll(".navbar_menu-link").forEach(n=>{let o=n;e&&e.classList.contains("toggled-size")?o.classList.add("custom-padding"):o.classList.remove("custom-padding")})},t=document.querySelector(".navbar_toggle-size");t&&t.addEventListener("click",a)}window.Webflow||(window.Webflow=[]);window.Webflow.push(()=>{r(),s()});})();
