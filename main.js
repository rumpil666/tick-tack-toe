(()=>{"use strict";var t,e=document.querySelectorAll(".playfield__block"),n=document.querySelector(".popup"),o=document.querySelector(".popup__title"),c=Array.from(e),r=document.querySelector(".content__button"),u=!1,i="x",d=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];function a(t){"Escape"===t.key&&(selectedText=-1,n.classList.remove("popup--open"))}function p(t){n.classList.add("popup--open"),document.addEventListener("keydown",a),o.textContent=t}function s(){var e;e=t,d.some((function(t){for(var n=0;n<t.length;n++)if(-1==e.indexOf(t[n]))return!1;return!0}))&&(u=!0,p("Победил игрок играющий ".concat("x"==(i="x"===i?"o":"x")?"крестиками":"ноликами"))),-1===c.findIndex((function(t){return""===t.textContent}))&&p("Ух какая битва. У вас ничья!!!")}document.addEventListener("click",(function(){n.classList.remove("popup--open"),document.removeEventListener("keydown",a)})),r.addEventListener("click",(function(){c.map((function(t){return t.textContent=""})),i="x",u=!1})),c.forEach((function(e){return e.addEventListener("click",(function(e){!function(e){var n;!0!==u&&(""===e.target.textContent&&(e.target.textContent=i,e.target.disabled=!0,n=[],c.forEach((function(t,e){""!==t.textContent&&t.textContent===i&&n.push(e)})),t=n,i="x"===i?"o":"x"),setTimeout(s,0))}(e)}))}))})();