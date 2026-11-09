const button = document.querySelector(".menu-toggle");
const links = document.querySelector(".nav-links");

if (button && links) {
  button.addEventListener("click", () => {
    const open = links.classList.toggle("is-open");
    button.setAttribute("aria-expanded", String(open));
    button.textContent = open ? "Close" : "Menu";
  });
}
