// js/features/certification-render.js
function renderCertifications() {
  const row = document.getElementById("certs-row");
  if (!row) return;

  row.innerHTML = certifications
    .map(
      (c) => `
    <div class="cert-card">
      <div class="cert-logo ${c.logoClass}">${c.logo}</div>
      <div>
        <div class="cert-name">${c.name}</div>
        <div class="cert-issuer">${c.issuer}</div>
        <div class="cert-year">${c.year}</div>
      </div>
    </div>
  `
    )
    .join("");
}

function initCertsArrow() {
  const arrow = document.getElementById("certs-arrow");
  const row = document.getElementById("certs-row");
  if (!arrow || !row) return;

  arrow.addEventListener("click", () => {
    row.scrollBy({ left: 240, behavior: "smooth" });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderCertifications();
  initCertsArrow();
});
