// js/features/education-render.js
function renderEducation() {
  const grid = document.getElementById("education-grid");
  if (!grid) return;

  grid.innerHTML = education
    .map(
      (e) => `
    <div class="edu-card">
      <div class="edu-icon">${e.icon}</div>
      <div>
        <div class="edu-degree">${e.degree}</div>
        <div class="edu-institute">${e.institute}</div>
        <div class="edu-period">${e.period}</div>
        <div class="edu-score">${e.score}</div>
      </div>
    </div>
  `
    )
    .join("");
}

document.addEventListener("DOMContentLoaded", renderEducation);
