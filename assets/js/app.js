const menuIcon = document.querySelector(".menu-btn");

function openMenu() {
  document.querySelector(".menu").classList.add("show");
  menuIcon.style.display = "none";
}

function closeMenu() {
  document.querySelector(".menu").classList.remove("show");
  menuIcon.style.display = "block";
}
