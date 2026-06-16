// js/features/skills-render.js
function renderSkills() {
  const grid = document.getElementById("skills-grid");
  if (!grid) return;

  grid.innerHTML = skills
    .slice(0, 9)
    .map(
      (s) => `
    <div class="skill-card">
      <div class="skill-header">
        <div class="skill-name-wrap">
          <span class="skill-icon-emoji">${s.emoji}</span>
          <span class="skill-name">${s.name}</span>
        </div>
        <span class="skill-percent">${s.percent}%</span>
      </div>
      <div class="skill-bar-bg">
        <div class="skill-bar-fill" data-percent="${s.percent}" style="background:${s.color ? "" : ""}"></div>
      </div>
    </div>
  `
    )
    .join("");

  // animate bars when visible
  const bars = grid.querySelectorAll(".skill-bar-fill");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const bar = entry.target;
          bar.style.width = bar.dataset.percent + "%";
          observer.unobserve(bar);
        }
      });
    },
    { threshold: 0.3 }
  );
  bars.forEach((b) => observer.observe(b));
}

document.addEventListener("DOMContentLoaded", renderSkills);
