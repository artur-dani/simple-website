const $menuToggler = document.querySelector(".menu-toggler");
const $navbar = document.querySelector(".navbar");
const $navbarLinks = document.querySelectorAll(".navbar__link");
const $sections = document.querySelectorAll(".js-section");
const $sectionsDocs = document.querySelectorAll(".js-section-doc");
const $menuItems = document.querySelectorAll(".menu__item");

$menuToggler.addEventListener("click", function () {
  $menuToggler.classList.toggle("is-active");
  $navbar.classList.toggle("is-open");
});

function changeLinkState() {
  let index = $sections.length;

  while (--index && window.scrollY + 10 < $sections[index].offsetTop) {}

  $navbarLinks.forEach((link) => link.classList.remove("active"));
  $navbarLinks[index].classList.add("active");
}

function changeSidebarLinkState() {
  let index = $sectionsDocs.length;

  while (--index && window.scrollY + 60 < $sectionsDocs[index].offsetTop) {}

  $menuItems.forEach((link) => link.classList.remove("active"));
  $menuItems[index].classList.add("active");
}

function changeNavbarState() {
  if (window.scrollY > 70) {
    $navbar.classList.add("navbar--shadowed");
  } else {
    $navbar.classList.remove("navbar--shadowed");
  }
}

// Throttle function to limit the number of times the function is called for better performance
const throttle = (func, limit) => {
  let lastFunc;
  let lastRan;
  return function () {
    const context = this;
    const args = arguments;
    if (!lastRan) {
      func.apply(context, args);
      lastRan = Date.now();
    } else {
      clearTimeout(lastFunc);
      lastFunc = setTimeout(function () {
        if (Date.now() - lastRan >= limit) {
          func.apply(context, args);
          lastRan = Date.now();
        }
      }, limit - (Date.now() - lastRan));
    }
  };
};

if ($sections.length) {
  changeLinkState();
}

if ($sectionsDocs.length) {
  changeSidebarLinkState();
}

window.addEventListener(
  "scroll",
  throttle(function () {
    if ($sections.length) {
      changeLinkState();
    }
    if ($sectionsDocs.length) {
      changeSidebarLinkState();
    }
    changeNavbarState();
  }, 200)
);
