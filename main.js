const $menuToggler = document.querySelector(".menu-toggler");
const $navbarList = document.querySelector(".navbar__list");

$menuToggler.addEventListener("click", function () {
  $menuToggler.classList.toggle("is-active");
  $navbarList.classList.toggle("is-shown");
});
