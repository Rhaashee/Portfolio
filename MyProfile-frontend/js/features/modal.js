// js/features/modal.js
// Lightweight reusable modal (not used by default sections, but available
// for "View All Projects" / "View All Skills" expansions if you add them).

function openModal(contentHTML) {
  let modal = document.getElementById("app-modal");
  if (!modal) {
    modal = document.createElement("div");
    modal.id = "app-modal";
    modal.style.position = "fixed";
    modal.style.inset = "0";
    modal.style.background = "rgba(0,0,0,0.6)";
    modal.style.display = "flex";
    modal.style.alignItems = "center";
    modal.style.justifyContent = "center";
    modal.style.zIndex = "2000";
    modal.innerHTML = `<div id="app-modal-box" style="background:var(--bg-card);border:1px solid var(--border-card);border-radius:14px;padding:24px;max-width:90%;max-height:85vh;overflow:auto;"></div>`;
    modal.addEventListener("click", (e) => {
      if (e.target === modal) closeModal();
    });
    document.body.appendChild(modal);
  }
  document.getElementById("app-modal-box").innerHTML = contentHTML;
  modal.style.display = "flex";
}

function closeModal() {
  const modal = document.getElementById("app-modal");
  if (modal) modal.style.display = "none";
}
