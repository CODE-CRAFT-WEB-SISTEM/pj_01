(()=>{"use strict";let e=document.getElementById("nav"),t=document.querySelector("#logo"),i=document.getElementById("typed-element"),n=document.querySelector(".thirdContainer");e.addEventListener("click",(function(){e.classList.toggle("action")})),function(){null!==t.src&&(t.src="./src/images/logo.png");let e=["Hospedagem","Domínios","Vps Cloud","Vps Generic"],n=120,o=2e3,l=0,a=0;function u(){a<e[l].length?(i.textContent+=e[l].charAt(a),a++,setTimeout(u,n)):setTimeout(r,o)}function r(){a>0?(i.textContent=e[l].substring(0,a-1),a--,setTimeout(r,n)):(l=(l+1)%e.length,setTimeout(u,o))}u()}(),[{titulo:"Titulo 1",paragrafo:"ex minim ullamco tempor velit dolor anim laboris reprehenderit fugiat sint magna do occaecat eu laborum aliqua excepteur mollit"},{titulo:"Titulo 2",paragrafo:"nulla anim irure veniam dolor commodo incididunt fugiat ut ullamco reprehenderit cillum aliqua consequat culpa consequat"},{titulo:"Titulo 3",paragrafo:"do ut non velit adipisicing ad non sunt ea aute"},{titulo:"Titulo 4",paragrafo:"sint eiusmod cillum cillum laborum reprehenderit laborum laborum aute sit mollit ut culpa quis"}].forEach((e=>{let t=document.createElement("div"),i=document.createElement("h1"),o=document.createElement("p");t.classList.add("cardStyle");let l=document.createElement("span");l.innerHTML='<i class="bi bi-building-check"></i>',i.textContent=e.titulo,o.textContent=e.paragrafo,t.appendChild(l),t.appendChild(i),t.appendChild(o),n.appendChild(t)}))})();