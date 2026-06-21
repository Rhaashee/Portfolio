function renderSkills() {
  const grid = document.getElementById("skills-grid");
  if (!grid) return;

  grid.innerHTML = skills
    .map(
      (s) => `
    <div class="skill-card">
      <i class="${s.icon}" ${s.color ? `style="color:${s.color}"` : ""}></i>
      <span class="skill-name">${s.name}</span>
    </div>
  `
    )
    .join("");
}

document.addEventListener("DOMContentLoaded", renderSkills);