// js/features/project-render.js
function renderProjects() {
  const grid = document.getElementById("projects-grid");
  if (!grid) return;

  const featured = projects.filter((p) => p.featured).slice(0, 3);

  grid.innerHTML = featured
    .map(
      (p) => `
    <div class="project-card">
      <div class="project-img"><span>${p.emoji}</span></div>
      <div class="project-body">
        <div class="project-title">${p.title}</div>
        <div class="project-desc">${p.desc}</div>
        <div class="project-tags">
          ${p.tags.map((t) => `<span class="project-tag">${t}</span>`).join("")}
        </div>
        <div class="project-links">
          <a href="${p.live}" target="_blank" rel="noopener" aria-label="Live demo"><i class="fas fa-external-link-alt"></i></a>
          <a href="${p.github}" target="_blank" rel="noopener" aria-label="Source code"><i class="fab fa-github"></i></a>
        </div>
      </div>
    </div>
  `
    )
    .join("");
}

document.addEventListener("DOMContentLoaded", renderProjects);
