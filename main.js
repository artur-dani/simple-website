const $menuToggler = document.querySelector(".menu-toggler");
const $navbarList = document.querySelector(".navbar__list");

$menuToggler.addEventListener("click", function () {
  $menuToggler.classList.toggle("is-active");
  $navbarList.classList.toggle("is-shown");
});

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 70) {
    navbar.classList.add("navbar--shadowed");
  } else {
    navbar.classList.remove("navbar--shadowed");
  }
});
