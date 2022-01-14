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

  while (--index && window.scrollY + 50 < $sections[index].offsetTop) {}

  $navbarLinks.forEach((link) => link.classList.remove("active"));
  $navbarLinks[index].classList.add("active");
}

function changeSidebarLinkState() {
  let index = $sectionsDocs.length;

  while (--index && window.scrollY + 100 < $sectionsDocs[index].offsetTop) {}

  $menuItems.forEach((link) => link.classList.remove("active"));
  $menuItems[index].classList.add("active");
  if (window.history.pushState) {
    var urlHash =
      "/docs/" +
      $menuItems[index].children[0].getAttribute("href").replace("#", "");
    window.history.pushState(null, null, urlHash);
  }
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

document.onclick = function (e) {
  e = e || window.event;
  const element = e.target || e.srcElement;
  const host = window.location.host;

  if (
    element.classList.contains("js-doc-link") &&
    host === "artur-dani.github.io"
  ) {
    window.location.href = "https://artur-dani.github.io/simple-website/";

    return false; // prevent default action and stop event propagation
  }
};
