let toggleMenu = document.getElementById("nav");
export default function menuShow() {
  toggleMenu.addEventListener("click", function () {
    toggleMenu.classList.toggle("action");
  });
}
