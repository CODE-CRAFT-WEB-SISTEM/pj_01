let thirdContainer = document.querySelector(".thirdContainer");

export default function renderCards() {
  let createCards = [
    {
      titulo: "Titulo 1",
      paragrafo:
        "ex minim ullamco tempor velit dolor anim laboris reprehenderit fugiat sint magna do occaecat eu laborum aliqua excepteur mollit",
    },

    {
      titulo: "Titulo 2",
      paragrafo:
        "nulla anim irure veniam dolor commodo incididunt fugiat ut ullamco reprehenderit cillum aliqua consequat culpa consequat",
    },

    {
      titulo: "Titulo 3",
      paragrafo: "do ut non velit adipisicing ad non sunt ea aute",
    },

    {
      titulo: "Titulo 4",
      paragrafo:
        "sint eiusmod cillum cillum laborum reprehenderit laborum laborum aute sit mollit ut culpa quis",
    },
  ];

  createCards.forEach((card) => {
    let containerCard = document.createElement("div");
    let h1 = document.createElement("h1");
    let p = document.createElement("p");
    containerCard.classList.add("cardStyle");
    let icon = document.createElement("span");
    icon.innerHTML = `<i class="bi bi-building-check"></i>`;
    h1.textContent = card.titulo;
    p.textContent = card.paragrafo;
    containerCard.appendChild(icon);
    containerCard.appendChild(h1);
    containerCard.appendChild(p);
    thirdContainer.appendChild(containerCard);
  });
}
