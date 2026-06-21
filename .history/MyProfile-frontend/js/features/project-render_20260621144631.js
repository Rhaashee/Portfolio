// js/features/project-render.js
let showingAll = false;

function buildCard(p) {
  return `
    <div class="project-card">
      <div class="project-img">
        <div class="project-tech-icons">
          ${p.icons.map((ic) => `<i class="${ic}"></i>`).join("")}
        </div>
      </div>
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
  `;
}

function renderProjects() {
  const grid = document.getElementById("projects-grid");
  if (!grid) return;

  const list = showingAll ? projects : projects.filter((p) => p.featured).slice(0, 3);
  grid.innerHTML = list.map(buildCard).join("");
}

document.addEventListener("DOMContentLoaded", () => {
  renderProjects();

  const btn = document.getElementById("show-all-projects");
  if (btn) {
    btn.addEventListener("click", () => {
      showingAll = !showingAll;
      renderProjects();
      btn.textContent = showingAll ? "Show Less" : "View All Projects";
    });
  }
});
