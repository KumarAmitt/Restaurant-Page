!function(){"use strict";var e={};e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),function(){var t;e.g.importScripts&&(t=e.g.location+"");var a=e.g.document;if(!t&&a&&(a.currentScript&&(t=a.currentScript.src),!t)){var n=a.getElementsByTagName("script");n.length&&(t=n[n.length-1].src)}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=t}();var t,a,n,o,p=function(e){var t=e.appendTo,a=e.tag,n=e.cls,o=e.txt,p=document.createElement(a);return p.classList.add(n),p.textContent=o,t&&t.appendChild(p),p},i="zaika",c=["About","Menu","Contact"],r={time:"9:00 AM - 10:00 PM (All day)",address:"23, ABC street, XYZ market, JSR",phone:"+91 222 333 4444",email:"dine.zaika@gmail.com",insta:"@dine_zaika"},d={starter:{"Hot and Sour soup":99,"Sweet corn soup":89,"Crispy babycorn chilly":159,"Garlic Paneer":159},tandoor:{"Paneer Angaara tikka":189,"Tandoori chicken":169,"Achari fish tikka":209},rice:{"chicken fried rice":159,"egg fried rice":129,"veg fried rice":99}},s=function(e){var t=e.appendTo,a=p({appendTo:t,tag:"div"});p({appendTo:a,tag:"h1",cls:"title",txt:"About Us"}),p({appendTo:a,tag:"p",cls:"desc",txt:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi inventore itaque officia et magni voluptatibus aliquam nihil cupiditate nemo. Explicabo iure ullam quis quo distinctio quod voluptatem corporis, similique eveniet inventore expedita dolorem repellendus animi, facere aut ipsum veniam ad."})},l=e.p+"7a8a6b5d065c06e9bcf7e0f1483c2176.jpg",u=e.p+"200dae8883672892fc9d05fc580e3188.jpg",g=e.p+"9b11db4491215d76719d543973247fb2.jpg",T=document.getElementById("content");(function(e){var t=e.appendTo,a=p({appendTo:t,tag:"nav"});p({appendTo:a,tag:"div",cls:"logo",txt:i});var n=p({appendTo:a,tag:"ul",cls:"nav-links"});c.forEach((function(e){p({appendTo:n,tag:"li",cls:"nav-link",txt:e}).addEventListener("click",(function(){!function(e){var t=document.querySelector("main"),a=document.querySelector(".feat-recipe-img");switch(function(e){for(;e.firstChild;)e.removeChild(e.firstChild)}(t),e){case"Menu":(function(e){var t=e.appendTo,a=p({appendTo:t,tag:"div"});p({appendTo:a,tag:"h1",cls:"title",txt:"Menu"}),Object.entries(d).forEach((function(e){var t=p({appendTo:a,tag:"p",cls:"desc"});p({appendTo:t,tag:"h3",cls:"category",txt:e[0]});var n=p({appendTo:t,tag:"ul"});Object.entries(e[1]).forEach((function(e){var t=p({appendTo:n,tag:"li"});p({appendTo:t,tag:"span",txt:e[0]}),p({appendTo:t,tag:"span"}).innerHTML="&#8377; ".concat(e[1])}))}))})({appendTo:t}),a.src=l;break;case"Contact":(function(e){var t=e.appendTo,a=p({appendTo:t,tag:"div"});p({appendTo:a,tag:"h1",cls:"title",txt:"Contact Us"});var n=p({appendTo:a,tag:"p",cls:"desc"});Object.entries(r).forEach((function(e){var t,a,o,i;t=n,a=e[0],o=e[1],i=p({appendTo:t,tag:"p",cls:"cInfo",txt:a}),p({appendTo:i,tag:"span",txt:o})}))})({appendTo:t}),a.src=u;break;default:s({appendTo:t}),a.src=g}}(e)}))}))})({appendTo:T}),t={appendTo:T}.appendTo,a=p({appendTo:t,tag:"div",cls:"cover"}),n=p({appendTo:a,tag:"div",cls:"cover-content"}),o=p({appendTo:n,tag:"p",cls:"cover-p1",txt:"Welcome to "}),p({appendTo:o,tag:"span",txt:i}),p({appendTo:n,tag:"p",cls:"cover-p2",txt:"Where Food Speaks with your plate!"}),function(e){var t=e.appendTo,a=p({appendTo:t,tag:"div",cls:"feat-recipe"});p({appendTo:a,cls:"feat-recipe-img",tag:"img"}).src=g}({appendTo:T}),function(e){var t=e.appendTo,a=p({appendTo:t,tag:"main"});s({appendTo:a})}({appendTo:T}),function(e){var t=e.appendTo,a=p({appendTo:t,tag:"footer"});p({appendTo:a,tag:"p"}).innerHTML="&copy; 2021 zaika"}({appendTo:T})}();
//# sourceMappingURL=main.js.map