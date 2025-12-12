const body = document.querySelector("body")
const menuBtn = document.querySelector(".menu-button");
const menu = document.querySelector(".menu");
const menuIconOpen = document.querySelector(".open");
const menuIconClose = document.querySelector(".close");
const backdropFilter = document.querySelector(".backdrop-filter");

function toggleMenu() {
  menu.classList.toggle("show");
  if (menu.classList.contains("show")) {
    menuIconClose.style.display = "block";
    menuIconOpen.style.display = "none";
    backdropFilter.style.display = "block";
    body.style.overflowY = "hidden";
  } else {
    menuIconClose.style.display = "none";
    menuIconOpen.style.display = "block";
    backdropFilter.style.display = "none";
    body.style.overflowY = "auto";
  }
}

menuBtn.addEventListener("click", toggleMenu);
