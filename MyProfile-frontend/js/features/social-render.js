// js/features/social-render.js
function renderSocials() {
  const contactEmail = document.getElementById("contact-email");
  const contactPhone = document.getElementById("contact-phone");
  const contactLocation = document.getElementById("contact-location");

  if (contactEmail) contactEmail.textContent = profile.email;
  if (contactPhone) contactPhone.textContent = profile.phone;
  if (contactLocation) contactLocation.textContent = profile.location;

  // Footer socials
  const footerSocials = document.getElementById("footer-socials");
  if (footerSocials) {
    footerSocials.innerHTML = socialLinks
      .map((s) => `<a href="${s.url}" target="_blank" rel="noopener" aria-label="${s.label}"><i class="${s.icon}"></i></a>`)
      .join("");
  }

  // Quick links
  const footerQuickLinks = document.getElementById("footer-quick-links");
  if (footerQuickLinks) {
    footerQuickLinks.innerHTML = quickLinks
      .map((l) => `<a href="${l.href}">${l.label}</a>`)
      .join("");
  }

  // Resource links
  const footerResourceLinks = document.getElementById("footer-resource-links");
  if (footerResourceLinks) {
    footerResourceLinks.innerHTML = resourceLinks
      .map((l) => `<a href="${l.href}" target="${l.href.startsWith("http") ? "_blank" : "_self"}">${l.label}</a>`)
      .join("");
  }
}

document.addEventListener("DOMContentLoaded", renderSocials);
