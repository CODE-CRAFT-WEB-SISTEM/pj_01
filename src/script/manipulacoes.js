let logo = document.querySelector("#logo");
let typedElement = document.getElementById("typed-element");

export default function renderLogo() {
  if (logo.src !== null) {
    logo.src = `./src/images/logo.png`;
  }
  let texts = ["Hospedagem", "Domínios", "Vps Cloud", "Vps Generic"];
  let speed = 120;
  let pauseTime = 2000;
  let textIndex = 0;
  let charIndex = 0;

  function type() {
    if (charIndex < texts[textIndex].length) {
      typedElement.textContent += texts[textIndex].charAt(charIndex);
      charIndex++;
      setTimeout(type, speed);
    } else {
      setTimeout(erase, pauseTime);
    }
  }

  function erase() {
    if (charIndex > 0) {
      typedElement.textContent = texts[textIndex].substring(0, charIndex - 1);
      charIndex--;
      setTimeout(erase, speed);
    } else {
      textIndex = (textIndex + 1) % texts.length;
      setTimeout(type, pauseTime);
    }
  }
  type();
}
