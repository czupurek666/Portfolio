/*
 * Open the drawer when the menu  is clicked.
 */
var menu = document.querySelector("#nav_0");
var main = document.querySelector("main");
var drawer = document.querySelector(".nav__list");

menu.addEventListener("click", function(e) {
  drawer.classList.toggle("open");
  e.stopPropagation();
});
main.addEventListener("click", function() {
  drawer.classList.remove("open");
});
