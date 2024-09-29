console.log("joseph");
const btnMenu = document.querySelector("#menu");
const menuItems = document.querySelector(".menu-items");
btnMenu.addEventListener("click", function (e) {
  e.preventDefault();
  menuItems.classList.toggle("hidden");
});
