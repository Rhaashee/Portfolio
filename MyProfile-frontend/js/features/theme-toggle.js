// js/features/theme-toggle.js
function initThemeToggle() {
  const toggleBtn = document.getElementById("theme-toggle");
  const root = document.documentElement;

  // default to dark (matches blueprint default)
  let savedTheme = "dark";
  try {
    savedTheme = window.localStorage.getItem("portfolio-theme") || "dark";
  } catch (e) {
    /* localStorage unavailable, fall back to dark */
  }

  applyTheme(savedTheme);

  if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
      const current = root.getAttribute("data-theme") === "light" ? "light" : "dark";
      const next = current === "light" ? "dark" : "light";
      applyTheme(next);
      try {
        window.localStorage.setItem("portfolio-theme", next);
      } catch (e) {
        /* ignore */
      }
    });
  }

  function applyTheme(theme) {
    if (theme === "light") {
      root.setAttribute("data-theme", "light");
      if (toggleBtn) toggleBtn.innerHTML = '<i class="fas fa-moon"></i>';
    } else {
      root.removeAttribute("data-theme");
      if (toggleBtn) toggleBtn.innerHTML = '<i class="fas fa-sun"></i>';
    }
  }
}

document.addEventListener("DOMContentLoaded", initThemeToggle);
