const e=document.querySelector("[data-start]"),t=document.querySelector("[data-stop]"),d=document.querySelector("body");t.disabled=!0,e.addEventListener("click",(()=>{timerId=setInterval((()=>{d.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}),1e3),e.disabled=!0,t.disabled=!1})),t.addEventListener("click",(()=>{clearInterval(timerId),e.disabled=!1,t.disabled=!0}));
//# sourceMappingURL=01-color-switcher.45d5321a.js.map
