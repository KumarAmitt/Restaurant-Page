!function(){"use strict";var e={};e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),function(){var t;e.g.importScripts&&(t=e.g.location+"");var a=e.g.document;if(!t&&a&&(a.currentScript&&(t=a.currentScript.src),!t)){var n=a.getElementsByTagName("script");n.length&&(t=n[n.length-1].src)}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=t}();var t=e.p+"9b11db4491215d76719d543973247fb2.jpg",a=function(e){return document.createElement(e)},n=document.getElementById("content"),i=a("nav"),r=a("div"),d=a("ul");n.appendChild(i),i.appendChild(r),i.appendChild(d),r.classList.add("logo"),d.classList.add("nav-links"),r.innerText="zaika",["Home","Menu","Contact"].forEach((function(e){var t=a("li");t.classList.add("nav-link"),d.appendChild(t),t.innerText=e}));var p=a("div");p.classList.add("cover"),n.appendChild(p);var c=a("div");c.classList.add("cover-content"),p.appendChild(c);var o=a("p");o.classList.add("cover-p1"),c.appendChild(o),o.textContent="Welcome to ";var s=a("span");o.appendChild(s),s.textContent="zaika";var l=a("p");l.classList.add("cover-p2"),c.appendChild(l),l.textContent="Where Food Speaks with your plate!";var h=a("div");h.classList.add("feat-recipe"),n.appendChild(h);var v=a("img");v.src=t,h.appendChild(v);var u=a("footer");n.appendChild(u);var C=a("p");u.appendChild(C),C.innerHTML="&copy; 2021 zaika"}();
//# sourceMappingURL=main.js.map