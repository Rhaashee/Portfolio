// js/features/experience-render.js
function renderExperience() {
  const track = document.getElementById("experience-track");
  if (!track) return;

  track.innerHTML = experience
    .map(
      (e) => `
    <div class="timeline-item">
      <span class="timeline-dot"></span>
      <div class="exp-card">
        <div class="exp-role">${e.role}</div>
        <div class="exp-company">${e.company}</div>
        <div class="exp-period">${e.period}</div>
        <div class="exp-desc">${e.desc}</div>
      </div>
    </div>
  `
    )
    .join("");
}

document.addEventListener("DOMContentLoaded", renderExperience);
