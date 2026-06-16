// js/features/navbar.js
function initNavbar() {
  const navbar = document.getElementById("navbar");
  if (!navbar) return;

  window.addEventListener("scroll", () => {
    if (window.scrollY > 20) {
      navbar.style.boxShadow = "0 2px 20px rgba(0,0,0,0.15)";
    } else {
      navbar.style.boxShadow = "none";
    }
  });
}

document.addEventListener("DOMContentLoaded", initNavbar);
