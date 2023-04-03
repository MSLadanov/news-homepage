function openMenu() {
  document.querySelector(".mobile-navbar-body").style.width = "75%";
//   document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

function closeMenu() {
  document.querySelector(".mobile-navbar-body").style.width = "0";
  document.body.style.backgroundColor = "white";
}

document.querySelector(".navbar-burger").addEventListener("click", openMenu);
document
  .querySelector(".navbar-burger-close")
  .addEventListener("click", closeMenu);
