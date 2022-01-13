const $menuToggler = document.querySelector(".menu-toggler");
const $navbar = document.querySelector(".navbar");

$menuToggler.addEventListener("click", function () {
  $menuToggler.classList.toggle("is-active");
  $navbar.classList.toggle("is-open");
});

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 70) {
    navbar.classList.add("navbar--shadowed");
  } else {
    navbar.classList.remove("navbar--shadowed");
  }
});
