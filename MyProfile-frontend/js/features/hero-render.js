// js/features/hero-render.js
function renderHero() {
  const heroName = document.getElementById("hero-name");
  const heroHello = document.getElementById("hero-hello");
  const heroDesc = document.getElementById("hero-desc");
  const heroImg = document.getElementById("hero-img");
  const heroResumeBtn = document.getElementById("hero-resume-btn");
  const navResumeBtn = document.getElementById("nav-resume-btn");
  const navLogoText = document.getElementById("nav-logo-text");
  const logoIcons = document.querySelectorAll(".logo-icon");
  const footerLogoText = document.getElementById("footer-logo-text");

  if (heroHello) heroHello.textContent = profile.hello;
  if (heroName) heroName.textContent = profile.shortName;
  if (heroDesc) heroDesc.textContent = profile.description;
  if (navLogoText) navLogoText.textContent = profile.shortName;
  if (footerLogoText) footerLogoText.textContent = profile.shortName;

  logoIcons.forEach((el) => (el.textContent = profile.initial));

  if (heroImg) {
    heroImg.src = profile.profileImage;
    heroImg.alt = profile.name;
    heroImg.onerror = function () {
      this.style.display = "none";
      this.parentElement.innerHTML += `<div class="hero-image-placeholder">${profile.initial}</div>`;
    };
  }

  [heroResumeBtn, navResumeBtn].forEach((btn) => {
    if (btn) btn.href = profile.resumePath;
  });

  // social links in hero
  const heroSocials = document.getElementById("hero-socials");
  if (heroSocials) {
    heroSocials.innerHTML = socialLinks
      .map((s) => `<a href="${s.url}" target="_blank" rel="noopener" aria-label="${s.label}"><i class="${s.icon}"></i></a>`)
      .join("");
  }
}

document.addEventListener("DOMContentLoaded", renderHero);
