// Variabler til burgermenu
const hamburger = document.querySelector(".hamburger");
const filter_burger_menu = document.querySelector("section");

const navMenu = document.querySelector(".nav-menu");
const header = document.querySelector("header");

// Burgermenu funktioner
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
  header.classList.toggle("active");
});

filter_burger_menu.addEventListener("click", () => {
  filter_burger_menu.classList.toggle("active");
  console.log("Filter Baby!");
});

// Fjerner menuen når du klikker på et link
document.querySelectorAll(".nav-link").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove(".active");
    navMenu.classList.remove(".active");
    header.classList.remove(".active");
  })
);
