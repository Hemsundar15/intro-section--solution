import "./scss/main.scss";

const hamburger = document.querySelector("#hamburger");
const mobileNav = document.querySelector("#mobilenav");

hamburger.src = "./assets/icon-menu.svg";

let isMenuOpen = false;

hamburger.addEventListener("click", () => {
    isMenuOpen ? (isMenuOpen = false) : (isMenuOpen = true);
    mobileNav.classList.toggle("active");

    isMenuOpen
        ? (hamburger.src = "./assets/icon-close-menu.svg")
        : (hamburger.src = "./assets/icon-menu.svg");
});

const dropDowns = document.querySelectorAll("#dropdown");

dropDowns.forEach((value, index) => {
    value.addEventListener("click", () => {
        value.classList.toggle("active");
    });
});
